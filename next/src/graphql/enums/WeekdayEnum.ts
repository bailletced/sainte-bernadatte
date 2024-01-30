import { registerEnumType } from "type-graphql";

export enum EWeekday {
  LUNDI = "lundi",
  MARDI = "mardi",
  MERCREDI = "mercredi",
  JEUDI = "jeudi",
  VENDREDI = "vendredi",
  SAMEDI = "samedi",
  DIMANCHE = "dimanche",
}

registerEnumType(EWeekday, {
  name: "Weekday",
  description: "Les jours de la semaine",
});
