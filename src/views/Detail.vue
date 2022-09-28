<script>
export default {
    computed: {
        carId() {
            return this.$route.params['id']
        },
        car() {
            const carId = this.carId
            return this.$store.state.cars.filter(car => car.id === carId)[0]
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <p>{{ car.id }}</p>
            <p>{{ car.name }}</p>
            <p>{{ car.grade }}</p>
            <p>{{ car.color }}</p>
            <p>{{ car.price }}</p>
            <p>{{ car.fuelCost }}</p>
        </div>
    </div>
</template>