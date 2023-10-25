<script setup>
import ContainerNav from './ContainerNav.vue';
import UserBar from './UserBar.vue';
import ImageGallery from './ImageGallery.vue';

</script>

<template>
    <ContainerNav>
        <div class="profile-container"><!-- Comment rend le chgt de path réactif :key="$route.params.username"-->
            <UserBar
            :key="$route.params.username"
            username="Jean-François"
            :userInfo="{
                posts: 4,
                followers: 250,
                following:10
            }"
            />
            <ImageGallery
            :posts="[{
                id:1,
                image:'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2019-09/mini/loutre-1-085218-650-400.jpg',
                alt: '1 loutre'
            },
            {
                id:2,
                image:'https://static.actu.fr/uploads/2020/02/loutre-peter-trimming-01-libre-de-droit-960x640.jpg',
                alt: 'moi 2 loutre'
            }
            ]"/>
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