<script>
export default {
    props: {
        category: {
            type: Object,
            required: true
        },
        cars: {
            type: Array
        }
    },
    computed: {
        filterCars() {
            return this.cars.filter(car => car.categoryId == this.category.id)
        }
    }
}
</script>

<template>
    <div class="float-start col-4" v-for="car in filterCars" :key="car.id">
        <router-link aria-current="page" class="dropdown-item"
            :to="'/car/' + car.id">
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">{{ car.name }}</h5>
                    <p class="card-text">
                        {{ car.grade }}
                    </p>
                </div>
            </div>
        </router-link>
    </div>
    <div v-if="filterCars.length === 0" class="alert alert-warning" role="alert">
    <p>該当カテゴリーの車はありません。</p>
    </div>
</template>
