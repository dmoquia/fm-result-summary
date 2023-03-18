export const bgStyle = (style) => {
  let color;
  if (style === "Reaction") {
    color = "#ff5757";
    return "#ff57572c";
  }
  if (style === "Memory") {
    return "#ffb11f36";
  }
  if (style === "Verbal") {
    return "#00bd911f";
  }
  if (style === "Visual") {
    return "#1124d421";
  }
};
export const textStyle = (style) => {
  if (style === "Reaction") {
    return "#ff5757";
  }
  if (style === "Memory") {
    return "#ffb01f";
  }
  if (style === "Verbal") {
    return "#00bd91";
  }
  if (style === "Visual") {
    return "#1125d4";
  }
};
