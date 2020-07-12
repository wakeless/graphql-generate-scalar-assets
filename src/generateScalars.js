const { prettierConfig, fileHeader } = require("./constants");
const prettier = require("prettier");

function unpack(type) {
  if (type.kind == "NON_NULL") {
    return type.ofType;
  } else {
    return type;
  }
}

function generateScalars(types) {
  let scalars = types
    .filter((i) => ["OBJECT", "INPUT_OBJECT"].includes(i.kind))
    .filter((i) => i.name.substr(0, 2) != "__")
    .reduce((acc, baseType) => {
      let fields = (baseType.fields || baseType.inputFields || [])
        .map((field) => {
          const type = unpack(field.type);
          if (["SCALAR", "ENUM"].includes(type.kind)) {
            return [
              field.name,
              {
                type: type.name,
                nullable: field.type.kind != "NON_NULL",
                description: field.description,
              },
            ];
          }
        })
        .filter((i) => i != null);

      return {
        ...acc,
        [baseType.name]: fields.reduce((acc, [key, fields]) => {
          return {
            ...acc,
            [key]: fields,
          };
        }, {}),
      };
    }, {});

  let fileOutput = fileHeader;

  Object.entries(scalars).forEach(([name, values]) => {
    fileOutput += `
      export const ${name} = ${JSON.stringify(values)}\n\n`;
  });

  return prettier.format(fileOutput, prettierConfig);
}

module.exports = generateScalars;
