export const getCols = (width, gridContainer) => {
  let columns = gridContainer.cols;
  switch (width) {
    case "xs":
      columns = gridContainer.xsCols;
      break;
    case "sm":
      columns = gridContainer.smCols;
      break;
    case "md":
      columns = gridContainer.mdCols;
      break;
    case "lg":
      columns = gridContainer.lgCols;
      break;
    case "xl":
      columns = gridContainer.xlCols;
      break;
    default:
      columns = gridContainer.cols;
  }
  return columns;
};