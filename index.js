'use strict'

import phrases from './api'

const shuffleArray = (arr) =>
  arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])

const filterPhrases = (count) =>
  shuffleArray(phrases).filter((item, index, arr) => index < count)

export const randonPhrase = (count = 1) =>
  filterPhrases(count)
