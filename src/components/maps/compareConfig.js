export const MAP_SETTINGS = {
  center: [-0.12, 51.505],
  zoom: 9.2,
  minZoom: 8.7,
  maxZoom: 12,
};

export const THEN_LAYER_CONFIG = {
  booth_poverty_map: {
    id: "booth_poverty_map",
    label: "Booth Poverty Map",
    type: "raster",
    description:
      "Charles Booth's poverty map reveals the social geography of late nineteenth-century London, showing how hardship was unevenly distributed across streets and districts.",
    sourceNote:
      "Source: Charles Booth Online Archive / MapWarper rectified sheets.",
    defaultOpacity: 0.55,
    tiles: [
      "https://mapwarper.net/mosaics/tile/2483/{z}/{x}/{y}.png",
    ],
    available: true,
  },

  workplace_map: {
    id: "workplace_map",
    label: "Workplaces Map",
    type: "raster",
    description:
      "Historical workplace layer will be added after georeferencing additional map sheets.",
    sourceNote: "Coming soon.",
    available: false,
  },
  workplace_points: {
    id: "workplace_points",
    label: "Workplace Locations",
    type: "points",
    description:
      "Point locations for workplaces, lodging houses, and related sites will be added after data preparation.",
    sourceNote: "Coming soon.",
    available: false,
  },
};

export const NOW_LAYER_CONFIG = {
  affordability: {
    id: "affordability",
    label: "Affordability",
    property: "affordability",
    description:
      "Monthly rent as a share of monthly income by borough. Higher values indicate a heavier everyday cost burden.",
    format: (v) => `${(Number(v) * 100).toFixed(1)}%`,
    rankingLabel: "Highest affordability boroughs in London",
    palette: [
      "#F6E4E3",
      "#E9C5C2",
      "#D79B97",
      "#BF6D69",
      "#9C4442",
      "#6F2E2D",
    ],
  },
  income_monthly: {
    id: "income_monthly",
    label: "Income",
    property: "income_monthly",
    description:
      "Median monthly income by borough. Higher values indicate greater earning capacity.",
    format: (v) => `£${Number(v).toLocaleString()}`,
    rankingLabel: "Highest income boroughs in London",
    palette: [
      "#F7F3EA",
      "#EBDEC3",
      "#D8C9A9",
      "#C5B28C",
      "#AA9875",
      "#8C7A5D",
    ],
  },
  rent_monthly: {
    id: "rent_monthly",
    label: "Rent",
    property: "rent_monthly",
    description:
      "Median monthly rent by borough. Higher values indicate greater housing cost pressure.",
    format: (v) => `£${Number(v).toLocaleString()}`,
    rankingLabel: "Highest rent boroughs in London",
    palette: [
      "#F3E8DA",
      "#E5D0B3",
      "#D0AF82",
      "#B08A5A",
      "#8E6A3F",
      "#6F4F2C",
    ],
  },
  house_price: {
    id: "house_price",
    label: "House Price",
    property: "house_price",
    description:
      "Average house price by borough. Higher values indicate stronger barriers to home ownership.",
    format: (v) => `£${Number(v).toLocaleString()}`,
    rankingLabel: "Highest house-price boroughs in London",
    palette: [
      "#EFE7EB",
      "#D9C8D0",
      "#B99FAE",
      "#9A7B8A",
      "#7A5A6B",
      "#57404D",
    ],
  },
  income_deprivation: {
    id: "income_deprivation",
    label: "Income Deprivation",
    property: "income_deprivation",
    description:
      "Share of residents experiencing income deprivation by borough. Higher values indicate deeper structural hardship.",
    format: (v) => `${(Number(v) * 100).toFixed(1)}%`,
    rankingLabel: "Highest income-deprivation boroughs in London",
    palette: [
      "#F1EEE7",
      "#DDD6C8",
      "#C2B8A4",
      "#9E978A",
      "#7F786D",
      "#605A52",
    ],
  },
};

export function getSortedValues(features, property) {
  return features
    .map((f) => Number(f.properties[property]))
    .filter((v) => !Number.isNaN(v))
    .sort((a, b) => a - b);
}

export function getQuantileBreaks(values, steps = 6) {
  if (!values.length) return [];
  const breaks = [];

  for (let i = 0; i < steps; i += 1) {
    const index = Math.round((i / (steps - 1)) * (values.length - 1));
    breaks.push(values[index]);
  }

  return breaks;
}

export function getStepExpression(property, breaks, palette) {
  if (!breaks?.length || !palette?.length) return "#cccccc";

  return [
    "step",
    ["to-number", ["get", property]],
    palette[0],
    breaks[1], palette[1],
    breaks[2], palette[2],
    breaks[3], palette[3],
    breaks[4], palette[4],
    breaks[5], palette[5],
  ];
}

export function getPaletteColor(value, breaks, palette) {
  if (!breaks?.length || !palette?.length) return "#cccccc";
  if (value <= breaks[1]) return palette[1];
  if (value <= breaks[2]) return palette[2];
  if (value <= breaks[3]) return palette[3];
  if (value <= breaks[4]) return palette[4];
  return palette[5];
}

export function getRankBarColors(palette) {
  if (!palette?.length) {
    return ["#171717", "#333333", "#555555", "#777777", "#999999"];
  }

  return [
    palette[5],
    palette[4],
    palette[3],
    palette[2],
    palette[1],
  ];
}