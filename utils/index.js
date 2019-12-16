import slugify from 'slugify'

export const shuffleArray = arr =>
  arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])

export const filterPhrases = (arr, count) => arr.filter((item, index, arr) => index < count)

export const randonPhrase = (phrases, count = 1) =>
  filterPhrases(shuffleArray(phrases), count)

export const slugAuthor = authorName => slugify(authorName, { lower: true, remove: /[*+~.()'"!:@]/g })

const randonColor = () =>
  '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))

export const randonBackground = () =>
  '-webkit-linear-gradient(141deg, ' + randonColor() + ' , ' + randonColor() + ')'
