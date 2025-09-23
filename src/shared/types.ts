import type {
  intervalOptions,
  itemsDirection,
  unitsOfMeasurement,
} from "./constants";

export interface setDateProps {
  setDate: (date: Date) => void;
  date: Date;
}

export type TabType = "absolute" | "relative" | "now";

export type IntervalOption = (typeof intervalOptions)[number];

export type ItemsDirectionType = (typeof itemsDirection)[number];

export type UnitsOfMeasurementType = (typeof unitsOfMeasurement)[number];
