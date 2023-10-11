<script setup>
import ContainerNav from './ContainerNav.vue';
import UserBar from './UserBar.vue';
import ImageGallery from './ImageGallery.vue';

</script>

<template>
    <ContainerNav>
        <div class="profile-container">
            <UserBar
            username="luke bracey"
            :userInfo="{
                posts: 4,
                followers: 250,
                following:10
            }"
            
            />
            <ImageGallery/>
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