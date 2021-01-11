<template>

  <nuxt-link :to="`/articles/${article.slug}`">
    <section style="height: 510px; position: relative" class=" w-full">
      <div>
        <img class="h-full w-full object-fill" :src="article.image || '/images/chem.jpg' " alt="blog">
      </div>
      <div class="flex flex-col p-4">
        <p class="mb-4 font-semibold">Aug <span style="color: #02ff9d">|</span> 14</p>
        <h1 class="text-lg font-bold mb-4 ">This is the Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style="position: absolute; bottom: 0;" class="flex items-center w-full bg-black pt-2 pb-2">
        <div class="flex-1 pl-6">
         <img class="h-9 rounded-full" src="../static/images/profile_web.jpg" alt="">
        </div>
        <div  class="pr-6 flex">
          <img class="h-6 pr-4" src="../static/images/icons/twitter_svg.svg" alt="">
          <img class="h-6" src="../static/images/icons/facebook_svg.svg" alt="">
        </div>
      </div>
    </section>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object,
        default: null,
      },
    },
  }

</script>

<style scoped>



/* <div>
        <div class="h-full">
          <img class="lg:h-48 md:h-36 w-full object-fill object-center" :src="article.image || '/images/chem.jpg' " alt="blog">
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-black mb-3">{{ article.title }}</h1>
            <div style="background-color: #02ff9d !important; " class="h-2 w-4 mb-2"></div>
            <p class="leading-relaxed mb-3">{{ article.summary }}</p>
            <div class="flex items-center flex-wrap">
              <a class="text-black inline-flex items-center md:mb-2 lg:mb-0">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="#02ff9d" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg class="w-4 h-4 mr-1" stroke="#02ff9d" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="#02ff9d" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div> */
</style>

