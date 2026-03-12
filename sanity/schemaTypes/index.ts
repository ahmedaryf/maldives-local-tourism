import { type SchemaTypeDefinition } from "sanity";
import { islands } from "../schemas/islands";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [islands],
};
