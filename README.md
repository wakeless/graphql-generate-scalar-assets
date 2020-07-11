# graphql-generate-scalar-assets

A small lib to help extract information about scalars from a graphql schema

It iterates through all types and input types and extracts the scalars, whether they are nullable and
their descriptions and places them in a module to include and get information about.

This is particularly useful if you would like to autogenerate things like tables or form fields and 
want them to be auto-configured by the graph schema.

Ideally, this lib is used in combination with saving your schema from your backend.
Example in `package.json`:

```
"scripts": {
  ...
  "graphql:save-schema": "some-script-to-save-your-schema && npm run graphql:generate-assets",
  "graphql:generate-scalars": "graphql-generate-scalar-assets -s path/to/schema.json --output-path ./src/constants/scalars.js"
  ...
```


## Usage
All options can be seen by running:
```
graphql-generate-scalar-assets -h
```

You can do:

```javascript
import { UserStatuses } from '../path/to/scalars.js';

if (UserStatuses.type == "Boolean") {
...
```



A good amount of this code has been lifted from: (graphql-generate-flow-schema-assets)[https://github.com/zth/graphql-generate-flow-schema-assets] this isn't really a
fork, so hasn't been forked in the true sense of the word.

