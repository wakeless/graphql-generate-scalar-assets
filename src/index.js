#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const program = require("commander");
const chalk = require("chalk");
const packageJson = require("../package");
const generateScalars = require("./generateScalars");
const parseSchema = require("./parseSchema");

program
  .version(packageJson.version)
  .option("-s, --schema <path>", "Path to schema.json or schema.graphql.")
  .option(
    "--output-path <path>",
    "File path to generate enums to. Defaults to current folder and enums.js.flow."
  )
  .parse(process.argv);

(async function () {
  let schema;

  try {
    const rawSchema = fs.readFileSync(path.resolve(program.schema), "utf8");
    schema = await parseSchema(rawSchema, program.schema);
  } catch (e) {
    console.error("Could not load schema.");
    process.exit(0);
  }

  let types;

  if (schema.__schema) {
    types = schema.__schema.types;
  } else if (schema.data && schema.data.__schema) {
    types = schema.data.__schema.types;
  } else {
    throw new Error(`Could not find types in schema. 
  Please make sure the schema is available on the prop '__schema' on the first level of the schema.json, 
  or nested under a prop called 'data' on the first level of the schema.json.`);
  }

  let output = generateScalars(types);

  const outputFilePath = path.resolve(
    typeof program.outputPath === "string" ? program.outputPath : "./scalars.js"
  );
  console.log(chalk.green(`Output generated to file ${outputFilePath}`));
  fs.writeFileSync(outputFilePath, output);
})();
