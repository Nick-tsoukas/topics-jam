<template>
   <section class="grid grid-cols-1 gap-x-4 gap-y-14 justify-items-center mr-8 ml-8 mb-24 mt-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <!-- article card -->
        <article  v-for="(article, i) in articles" :key="i" class="shadow-lg h-auto bg-white hover_card">
          <ArticleCard :article="article" />
        </article>
    </section>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped>

</style>