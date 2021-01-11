<template>
  <main  class="star md:hidden lg:hidden xl:grid grid-cols-2 w-screen h-3/5 star pb-36">
      <div class="p-4 h-full lg:flex items-center justify-center">
  <ul class="Words">
  <li class="Words-line">
    <p>&nbsp;</p>
    <p>Read</p>
  </li>
  <li class="Words-line">
    <p>Write</p>
    <p>Live</p>
  </li>
  <li style="left: 850px; letter-spaceing: 4rem !important ;" class="Words-line">
    <p>Read</p>
    <p>Write</p>
  </li>
  <li class="Words-line">
    <p>Live</p>
    <p>&nbsp;</p>
  </li>
</ul>
      </div>
      <div class=" h-full p-4">
          <img class="opacity-90 xl:h-80" style="filter: blur(5px);" src="../static/images/godicons/blackGreenGuyno.svg" alt="">
      </div>
  </main>
</template>

<script>
  export default {
//<link rel="preconnect" href="https://fonts.gstatic.com">
  head() {
      return {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Monoton&display=swap'
          }
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
  .star {
    background-image: url('../static/images/spacelights1.jpg')
  }

  /* 
** Change this if you need to modify
** the amount of lines displayed
*/
$total-lines: 4;


/*
** Leave these unless you want
** to open a whole can of worms
*/
$left-offset: 29px;
$clip-height: 68px;
$line-height: $clip-height - 5px;


/*
** Apply styles to the parent element
*/
.Words {
  margin: 0 auto;
  padding: 50px 0;
  font-size: 44px;
  font-weight: 600;
  opacity: .9;
  letter-spacing: 2rem;
  text-transform: uppercase;
  font-family: 'Monoton', cursive;
  // Sort out nasty text fuzz
  transform: translate3d(0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-font-kerning: normal;
  -webkit-text-size-adjust: 100%;
}


/*
** Apply common styles to each line of text
*/
.Words-line {
  height: $clip-height;
  overflow: hidden;
  position: relative;
  color: #01ff9d;
  
  // Change the perspective of each alternating line
  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(.66667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.33333);
  }
  
  // Loop over the total lines and apply a left offset
  @for $i from 1 through $total-lines+1 {
    &:nth-child(#{$i}) {
      left: $left-offset * $i;
    }
  }
}


/*
** Fine-grained text styles
*/
p {
  height: $clip-height;
  line-height: $line-height;
  padding: 0 10px;
  transition: all .4s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
}


/*
** The hover interaction
*/
.Words:hover {
  p {
    transform: translate3d(0, -($clip-height), 0);
  }
}
</style>
