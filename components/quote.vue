<template>
  <blockquote v-if="phrase.quote && phrase.author" class="quote">
    <p v-text="phrase.quote" />
    <small v-text="phrase.author" />
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    phrase: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.quote {
  color: #fff;
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 0 0 80px;
  line-height: 1.7;
  position: relative;
}

.quote:before {
  position: absolute;
  line-height: 1;
  display: block;
  width: 40px;
  height: 40px;
  font-size: 4em;
  z-index: 1;
  font-family: Droid Serif,georgia,serif;
  pointer-events: none;
  content: "\201C ";
  color: #fff;
  left: 2rem;
  opacity: 0.5;
  top: 0;
  -webkit-transform: translate3d(0,-20%,0);
  transform: translate3d(0,-20%,0);
}

.quote p {
  font-size: 2rem /* 32/16 */;
  line-height: 1.1;
}

.quote small:before {
  content: '⏤ '
}
</style>
