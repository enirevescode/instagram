<script setup>
import {RouterLink, useRouter} from 'vue-router'
import ContainerNav from "./ContainerNav.vue"
import AuthModal from './AuthModal.vue';
import { ref } from 'vue';

const searchUsername = ref("")
const isAuthenticated = ref(false)
const router = useRouter()

//Mise en place de la recherche de profile d'utilisateur
//avec maj du path & du username
const onSearch = () => {
    if(searchUsername.value){
        router.push(`/profile/${searchUsername.value}`)
        //clear the path
        searchUsername.value = ""
    }
}
</script>

<template>
    <a-layout-header>
        <ContainerNav>
          <div class="nav-container">
            <div class="right-content">
                <RouterLink to="/">Instagram</RouterLink>
                    <a-input-search
                        v-model:value="searchUsername"
                        placeholder="User Name..."
                        style="width: 200px"
                        @search="onSearch"
                    />
            </div>
            <div class="left-content" v-if="!isAuthenticated">
                <AuthModal :isLogin="false"/>
                <AuthModal :isLogin="true"/>
            </div>
            <div class="left-content" v-else>
                <a-button type="primary" class="btn">Profile</a-button>
                <a-button type="primary" class="btn">Logout</a-button>
               
            </div>
          </div>
        </ContainerNav>
      
    </a-layout-header>
</template>

<style scoped>
.nav-container{
    display: flex;
    justify-content: space-between;
}
.right-content {
    display: flex;
    align-items: center;
    
}
.right-content a {
    margin-right: 10px;
    text-decoration: none;
}

.left-content{
    display: flex;
    align-items: center;
}
.left-content button {
margin-left: 10px;
}
</style>