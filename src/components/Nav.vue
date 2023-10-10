<script setup>
import {RouterLink} from 'vue-router'
import ContainerNav from "./ContainerNav.vue"
import AuthModal from './AuthModal.vue';
import { ref } from 'vue';

const searchUserName = ref("")
const onSearch = () => {}
</script>

<template>
    <a-layout-header>
        <container>
          <div class="nav-container">
            <div class="right-content">
                <RouterLink to="/">Instagram</RouterLink>
                    <a-input-search
                        v-model:value="searchUserName"
                        placeholder="User Name..."
                        style="width: 200px"
                        @search="onSearch"
                    />
            </div>
            <div class="left-content">
                <AuthModal :isLogin="false"/>
                <AuthModal :isLogin="true"/>
            </div>
          </div>
        </container>
      
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