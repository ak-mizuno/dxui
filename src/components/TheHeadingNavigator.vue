<script>
export default {
    data() {
        return {
            searchText: ""
        }
    },
    computed: {
        categories() {
            return this.$store.state.categories
        }
    },
    methods: {
        search() {
            const category = this.$store.state.categories.filter(category => category.name === this.searchText)[0]

            if (category == undefined) {
                alert("該当カテゴリはありませんでした。")
                return
            }

            this.$router.push({
                name: "Category",
                params: { id: category.id }
            })
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/">DX</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">ホーム</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >カテゴリー</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="category in categories" :key="category.id">
                                <router-link
                                    aria-current="page"
                                    class="dropdown-item"
                                    :to="'/category/' + category.id"
                                >{{ category.name }}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link
                                    aria-current="page"
                                    class="nav-link"
                                    to="/signup"
                                >SignUp</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input
                        class="form-control me-2"
                        v-model="searchText"
                        type="search"
                        placeholder="カテゴリー検索"
                        aria-label="Search"
                    />
                    <button
                        class="btn btn-outline-success"
                        type="submit"
                        @click.prevent="search"
                    >Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>