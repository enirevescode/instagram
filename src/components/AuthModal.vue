<script setup>
import { ref, defineProps, reactive } from 'vue';
import {useUserStore} from "../stores/users"
//bind with users.js du store
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const {errorMessage, handleSignUp} = storeToRefs(userStore)

//liaison entre info users et la modal
const userCredentials = reactive({
  email: "",
  password: "",
  username: ""
})

const props = defineProps(['isLogin'])
const open = ref(false);

// modal importer de ant design vue
const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  //bind the modal with l'object signup/userCredentials
  userStore.handleSignUp(userCredentials)
};

const btnName = props.isLogin ? 'Login' : 'Signup';
</script>

<template>
    <div>
      <a-button type="primary" @click="showModal" class="btn">{{ btnName }}</a-button>
      <a-modal v-model:open="open" :title="btnName" @ok="handleOk">
        <a-input class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Nom complet" />
        <a-input class="input" v-model:value="userCredentials.email" placeholder="e-mail" />
        <a-input class="input" v-model:value="userCredentials.password" placeholder="Mot de passe ..." type="password"/>
        <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
      </a-modal>
    </div>
</template>

<style scoped>
.btn {
  margin-left: 10px;
}

.input {
  margin-top: 5px;
}
</style>
  