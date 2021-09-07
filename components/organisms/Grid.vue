<template>
  <NjSection v-if="getColumns && getColumns.length" v-editable="blok" variant="boxed">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-2 bg-blue-400">
      <div v-for="(column, index) in getColumns" :key="index" class="bg-yellow-400">
        {{ column.name }}
      </div>
    </div>
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
      getColumns() {
        return this.blok.columns
      }
    }
  }
</script>