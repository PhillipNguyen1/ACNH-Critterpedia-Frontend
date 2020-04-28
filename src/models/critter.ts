export interface Critter {
  name: string;
  imageUrl?: string;
  northernSeasonality: string[];
  southernSeasonality: string[];
  activeHourBegin: string;
  activeHourEnd: string;
  location: string;
}
