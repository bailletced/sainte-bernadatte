import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/frontend/graphql/graphql-types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
