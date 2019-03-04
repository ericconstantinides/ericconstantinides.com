export const splitArray = arr => [
  arr.filter((item, index) => index + 1 <= Math.round(arr.length / 2)),
  arr.filter((item, index) => index + 1 > Math.round(arr.length / 2))
]
