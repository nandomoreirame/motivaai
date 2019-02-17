function getPhrase () {
  const phrases = MotivaAi.randonPhrase() // eslint-disable-line
  let html = ``

  phrases.forEach(phrase => {
    html += `
      <blockquote class="quote">
        <p>${phrase.quote}</p>
        <small>${phrase.author}</small>
      </blockquote>
      `
  })

  return html
}

function meMotivaAi () {
  document.getElementById('phrase').innerHTML = getPhrase()
}

meMotivaAi()
