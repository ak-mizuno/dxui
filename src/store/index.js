import { createStore } from 'vuex'
import { getCars, getCategories } from "../api/OriginalApi"

export default createStore({
  state() {
      return {
        categories: [],
        cars: []
      }
  },
  mutations: {
      setCars(state, cars) {
          state.cars = cars
      },
      setCategories(state, categories) {
          state.categories = categories
      }
  },
  getters: {
    filterCars: (state) => (categoryId) => {
        if (categoryId == "") {
            return state.cars
        } else {
            return state.cars.filter(car => car.categoryId === categoryId)
        }
      }
  },
  actions: {
      async getAllCars(context) {
          const cars = await getCars()
          context.commit("setCars", cars)
      },
      async getAllCategories(context) {
          const categories = await getCategories()
          context.commit("setCategories", categories)
      },
  }
})
