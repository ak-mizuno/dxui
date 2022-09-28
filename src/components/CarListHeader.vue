<script>
export default {
    props: {
        category: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="col-12 m-2">
        <div class="float-start ">
            <h4 class="text-left">{{ category.name }}</h4>
        </div>
    </div>
</template>
