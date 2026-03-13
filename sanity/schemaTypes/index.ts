import { type SchemaTypeDefinition } from "sanity";
import { islands } from "../schemas/islands";
import { guesthouses } from "../schemas/guesthouses";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [islands, guesthouses],
};
