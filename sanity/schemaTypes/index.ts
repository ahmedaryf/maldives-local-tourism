import { type SchemaTypeDefinition } from "sanity";
import { islands } from "../schemas/islands";
import { guesthouses } from "../schemas/guesthouses";
import { atolls } from "../schemas/atolls";
import { accordions } from "../schemas/accordions";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [atolls, islands, guesthouses, accordions],
};
