function getPhrase() {
  const phrases = MotivaAi.randonPhrase(); // eslint-disable-line
  let html = ``;

  phrases.forEach(phrase => {
    html += `
      <blockquote class="quote">
        <p>${phrase.quote}</p>
        <small>${phrase.author}</small>
      </blockquote>
      `;
  });

  return html;
}

function randomColor() {
  return "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });
}

function randomBackground() {
  const $hero = document.querySelector(".hero");
  $hero.style.backgroundImage =
    "-webkit-linear-gradient(141deg, " +
    randomColor() +
    " , " +
    randomColor() +
    ")";
}

function meMotivaAi() {
  document.getElementById("phrase").innerHTML = getPhrase();
  randomBackground();
}

meMotivaAi();
