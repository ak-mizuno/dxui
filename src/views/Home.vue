<script>
import CarListHeader from "../components/CarListHeader.vue"
import CarListContent from "../components/CarListContent.vue"

export default {
  components: {
    CarListHeader,
    CarListContent
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    cars() {
      return this.$store.state.cars
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row" v-for="category in categories">
      <CarListHeader :category="category" :key="category.id"></CarListHeader>
      <CarListContent :category="category" :cars="cars" :key="category.id"></CarListContent>
    </div>
  </div>
</template>