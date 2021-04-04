export const splitArray = arr => [
  arr.filter((item, index) => index + 1 <= Math.round(arr.length / 2)),
  arr.filter((item, index) => index + 1 > Math.round(arr.length / 2))
]

export const createRandomHash = (hashSize = 6) =>
  '0'.repeat(hashSize).replace(/0/g, () => (~~(Math.random() * 16)).toString(16))