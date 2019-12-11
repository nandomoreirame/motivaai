<template>
  <footer>
    <address>Desenvolvido em Curitiba-PR, Brasil.</address>
    <small>Com ♡ por <a href="https://nandomoreira.me/?ref=motivaai" target="_blank">Fernando Moreira</a></small>
    <small><a href="https://github.com/nandomoreirame/motivaai/" target="_blank">Veja o código-fonte.</a></small>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="css" scoped>
footer {
  width: 100%;
  text-align: right;
  background-color: transparent;
  z-index: 10;
  padding: 20px;
}

footer small {
  display: block;
}

footer small,
footer address,
footer a {
  color: #fff;
  font-size: 12px;
  margin: 0;
}

footer a {
  opacity: 0.9;
  text-decoration: underline;
}

@media (max-width: 979px) {
  footer {
    margin-bottom: 20px;
  }
}
</style>
