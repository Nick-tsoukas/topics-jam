<template>
  <!-- singular article -->
  <div class="mt-32 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <h2>{{ article.title }}</h2>
    <NuxtContent :document="article" />
      <span class="text-gray-800">Author:</span> Nick Tsoukas
  </div>

</template>

<script>
// use something like this to fetch astrology
  export default {
    async asyncData({
      $content,
      params,
      error
    }) {
      const article = await $content('articles', params.slug)
        .fetch()
        .catch(() => {
          error({
            statusCode: 404,
            message: 'Page not found'
          })
        });
      return {
        article
      }
    }
  }

</script>

<style scoped>
  /* ::v-deep .nuxt-content  p  {
    use the apply to inject tailwind css
    @apply text-red-800;
}
::v-deep .nuxt-content h2  {
    color: red;
}
*/
  /* ::v-deep .nuxt-content img {
  @apply mx-auto  max-w-full md:max-w-xl lg:max-w-2xl ;
}  */
/* ::v-deep .nuxt-content h1 {
  font-size: 10px !important;
  color: red;
} */

</style>
