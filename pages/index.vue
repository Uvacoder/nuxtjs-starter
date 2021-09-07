<template>
<div>
  <Bloks :bloks="story.content.body" />
  <Newsletter />
</div>
</template>

<script>
export default {
  async asyncData({ $storyblok, error }) {
    try {
      const { story } = await $storyblok.getCurrentStory({
        resolve_links: 'story'
      })
      return {
        story
      }
    } catch (e) {
      console.error('Exception', e)
      error({
        statusCode: 404,
        message: e.message
      })
    }
  }
}
</script>
