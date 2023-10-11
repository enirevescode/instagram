<script setup>
import { defineProps } from 'vue'

const props = defineProps(['posts'])
</script>
<template>
    <div class="image-gallery-container">
        <img src="" alt=""/>
    </div>
</template>
<style scoped>
.image-gallery-container{
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

img{
    margin: 5px;
    width: 309px;
}
</style>