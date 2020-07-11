export const Query = {};

export const BaseType = {
  parentId: { type: 'ID', nullable: false, description: null },
  clientMutationId: {
    type: 'String',
    nullable: true,
    description: 'A unique identifier for the client performing the mutation.',
  },
  content: { type: 'String', nullable: false, description: null },
  description: { type: 'String', nullable: true, description: null },
  viewUrl: { type: 'URL', nullable: true, description: 'The URL used to View' },
};

export const __Schema = {};

export const __Type = {
  name: { type: 'String', nullable: true, description: null },
  description: { type: 'String', nullable: true, description: null },
};

export const __Field = {
  name: { type: 'String', nullable: false, description: null },
  description: { type: 'String', nullable: true, description: null },
  isDeprecated: { type: 'Boolean', nullable: false, description: null },
  deprecationReason: { type: 'String', nullable: true, description: null },
};

export const __InputValue = {
  name: { type: 'String', nullable: false, description: null },
  description: { type: 'String', nullable: true, description: null },
  defaultValue: {
    type: 'String',
    nullable: true,
    description:
      'A GraphQL-formatted string representing the default value for this input value.',
  },
};

export const __EnumValue = {
  name: { type: 'String', nullable: false, description: null },
  description: { type: 'String', nullable: true, description: null },
  isDeprecated: { type: 'Boolean', nullable: false, description: null },
  deprecationReason: { type: 'String', nullable: true, description: null },
};

export const __Directive = {
  name: { type: 'String', nullable: false, description: null },
  description: { type: 'String', nullable: true, description: null },
  onOperation: { type: 'Boolean', nullable: false, description: null },
  onFragment: { type: 'Boolean', nullable: false, description: null },
  onField: { type: 'Boolean', nullable: false, description: null },
};

export const BaseInput = {
  parentId: { type: 'ID', nullable: true, description: null },
};
