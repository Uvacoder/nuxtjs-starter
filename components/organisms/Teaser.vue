<template>
  <NjSection v-if="getHeadline" v-editable="blok" variant="boxed">
    <h1 class="text-lg md:text-2xl">{{getHeadline}}</h1>
  </NjSection>
</template>

<script>
  export default {
    props: {
      blok: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      getHeadline() {
        return this.blok.headline
      }
    }
  }
</script>