import type {
  intervalOptions,
  itemsDirection,
  unitsOfMeasurement,
} from "./constants";

export interface setDateProps {
  date: Date;
  setDate: (date: Date) => void;
}

export interface RelativeTabProps extends setDateProps {
  label: string;
}

export interface setIntrvalProps {
  setStart: (date: Date) => void;
  setEnd: (date: Date) => void;
}

export type TabType = "absolute" | "relative" | "now";

export type IntervalOption = (typeof intervalOptions)[number];

export type ItemsDirectionType = (typeof itemsDirection)[number];

export type UnitsOfMeasurementType = (typeof unitsOfMeasurement)[number];
