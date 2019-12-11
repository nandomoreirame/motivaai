import slugify from 'slugify'

export const shuffleArray = arr =>
  arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])

export const filterPhrases = (arr, count) => arr.filter((item, index, arr) => index < count)

export const randonPhrase = (phrases, count = 1) =>
  filterPhrases(shuffleArray(phrases), count)

export const slugAuthor = authorName => slugify(authorName, { lower: true, remove: /[*+~.()'"!:@]/g })
