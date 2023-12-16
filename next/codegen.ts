import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://dev.saintebernadettemontpellier.cef.fr/api/graphql",
  documents: "src/**/*.tsx",
  generates: {
    "src/graphql": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
