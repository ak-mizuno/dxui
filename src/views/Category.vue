<script>
import CarListHeader from "../components/CarListHeader.vue"
import CarListContent from "../components/CarListContent.vue"

export default {
  components: {
    CarListHeader,
    CarListContent
  },
  computed: {
    categoryId() {
      return this.$route.params['id']
    },
    category() {
      const categoryId = this.categoryId
      return this.$store.state.categories.filter(category => category.id === categoryId)[0]
    },
    cars() {
      const categoryId = this.categoryId
      return this.$store.state.cars.filter(car => car.categoryId === categoryId)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <CarListHeader :category="category"></CarListHeader>
      <CarListContent :category="category" :cars="cars"></CarListContent>
    </div>
  </div>
</template>