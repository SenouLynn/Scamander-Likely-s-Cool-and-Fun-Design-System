export const genericOptions = {
  genericLevels: {
    none: {
      label: "None",
      value: "none",
    },
    xsm: {
      label: "X-Small",
      value: "xsm",
    },
    sm: {
      label: "Small",
      value: "sm",
    },
    md: {
      label: "Medium",
      value: "md",
    },
    lg: {
      label: "Large",
      value: "lg",
    },
    xl: {
      label: "X-Large",
      value: "xl",
    },
    xxl: {
      label: "XX-Large",
      value: "xxl",
    },
  },
  genericSizes: {
    "1": {
      label: "1",
      value: 1,
    },
    "2": {
      label: "2",
      value: 2,
    },
    "3": {
      label: "3",
      value: 3,
    },
    "4": {
      label: "4",
      value: 4,
    },
    "5": {
      label: "5",
      value: 5,
    },
    "6": {
      label: "6",
      value: 6,
    },
  },
  flexLocations: {
    start: {
      label: "Start",
      value: "start",
    },
    center: {
      label: "Center",
      value: "center",
    },
    end: {
      label: "End",
      value: "end",
    },
    between: {
      label: "Between",
      value: "between",
    },
  },
  boolean: {
    true: {
      label: "True",
      value: true,
    },
    false: {
      label: "False",
      value: false,
    },
  },
  flexOptions: {
    justify: {
      label: "Justify",
      options: "flexLocations",
    },
    align: {
      label: "Algin",
      options: "flexLocations",
    },
    gap: {
      label: "Flex Gap",
      options: "genericSizes",
    },
  },
};
