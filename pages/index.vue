<template>
  <div>
    <!-- hero image  -->
    <Hero />
    <!-- Topics -->
    <!-- <HomeCategories /> -->

    <section class="bg-white dark:bg-gray-800 mb-28 mt-20">

      <div class="container mx-auto px-2 py-8">
        <div class="lg:flex items-center">

          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="flex items-center justify-center lg:justify-start">
              <div class="max-w-lg">
                <img class="w-full h-80 object-contain object-center" src="../static/images/icons/worldman.gif"
                  alt="One Eye God Man">
              </div>
            </div>
          </div>

          <div class="lg:w-2/3">
            <h2 draggable class="text-gray-800 dark:text-gray-100 text-4xl font-bold italic">De Anima</h2>
            <div class="h-5 w-5 mt-6" style="background-color: #01ff9d !important"></div>

            <p class="text-black leading-relaxed dark:text-gray-400 text-2xl mt-4 mr-4">
              Knowledge of any kind is to be honored and prized.
              Even then so, one kind of knowledge can have a greater dignity and wonderfulness in its fruits.
              Naturally, we are led to one place in front rank ... the study of the Soul.
            </p>

            <div class="flex items-center -mx-2 mt-6">
              <a class="mx-2" href="#" aria-label="Facebook">
                <img class="h-8" src="../static/images/icons/facebook.png" alt="">
              </a>

              <a class="mx-2" href="#" aria-label="Facebook">
                <img class="h-8" src="../static/images/icons/instagram.png" alt="">
              </a>

              <a class="mx-2" href="#" aria-label="Linkden">
                <img class="h-8" src="../static/images/icons/linkedin.png" alt="">
              </a>

              <a class="mx-2" href="#" aria-label="Github">
                <img class="h-8" src="../static/images/icons/facebook.png" alt="">
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    <div class="text-center mb-36">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Featured Articles
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
      </p>
    </div>
    <!-- cards of featured articles wrapper -->
    <ArticlesList :articles="featuredArticles" />
    <MythologyIntro />
    <Footer />
  </div>
</template>

<script>
  // js script 

  // try to build a filter function to test
  export default {
    async asyncData({
      $content,
      params,
      error
    }) {
      const featuredArticles = await $content('articles')
        .where({
          featured: true
        })
        .limit(4)
        .only(['title', 'featured', 'slug', 'summary', 'image'])
        .fetch()
        .catch(() => {
          error({
            statusCode: 404,
            message: 'Page not found'
          })
        });
      return {
        featuredArticles
      }
    }
  }

</script>
