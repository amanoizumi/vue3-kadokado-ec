export default function(para) {
  let numStr = para + '';
  numStr = numStr.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return numStr;
}

