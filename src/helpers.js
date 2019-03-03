export function getMaxID(data) {
  return data.reduce((max, curr) => (curr.ID > max ? curr.ID : max), 0) + 1;
}
