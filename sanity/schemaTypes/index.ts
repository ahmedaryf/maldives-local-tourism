import { type SchemaTypeDefinition } from "sanity";
import { islands } from "../schemas/islands";
import { guesthouses } from "../schemas/guesthouses";
import { atolls } from "../schemas/atolls";
import { accordions } from "../schemas/accordions";
import { Homepage } from "../schemas/homepage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Homepage, atolls, islands, guesthouses, accordions],
};
