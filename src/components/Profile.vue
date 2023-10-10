<script setup>
import ContainerNav from './ContainerNav.vue';

</script>

<template>
    <ContainerNav>
        <div class="profile-container">
            <h1>USERBAR</h1>
            <h1>IMAGES GALLERY</h1>
        </div>
       
    </ContainerNav>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>