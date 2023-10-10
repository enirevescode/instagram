<script setup>
import Card from "./Card.vue"
import ContainerNav from './ContainerNav.vue';


const data = [
    {
        id: 1,
        username: "Edgar Ramirez",
        url: "https://www.tvguide.com/a/img/resize/392917f0c29542cb33239ca1bd5cdda64e9e238a/catalog/provider/10/9/10-68DE17CA-D82D-4CFD-AAB0-58AF3BD1D0D1.png?auto=webp&fit=crop&height=300&width=200",
        caption: "Actor in Florida Man"
    },
    {
        id: 2,
        username: "Luke Bracey",
        url: "https://dujour.com/wp-content/uploads/2/2586589a004d-500x600.jpg",
        caption: "Actor in Point Break"
    },
    {
        id: 3,
        username: "Joel Kinnamann",
        url: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/02/01/Pictures/_cdec53ce-0728-11e8-987c-1603f9800600.PNG",
        caption: "Actor in Altered Carbon"
    },
    {
        id: 4,
        username: "Maxine Catel",
        url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        caption: "Actrice in Cars"
    },
    
]




</script>

<template>
    <ContainerNav>
        <div class="timeline-container">
            <Card
                v-for="card in data" 
                :key="card.id" 
                :card="card"/>
        </div>
       
    </ContainerNav>
</template>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>