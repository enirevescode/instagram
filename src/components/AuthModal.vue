<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['isLogin'])
const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  open.value = false;
};

const btnName = props.isLogin ? 'Login' : 'Signup';
</script>

<template>
    <div>
      <a-button type="primary" @click="showModal" class="btn">{{ btnName }}</a-button>
      <a-modal v-model:open="open" :title="btnName" @ok="handleOk">
        <a-input class="input" v-if="!isLogin" v-model:value="value" placeholder="Nom complet" />
        <a-input class="input" v-model:value="value" placeholder="Nom d'utilisateur, Num. téléphone ou e-mail" />
        <a-input class="input" v-model:value="value" placeholder="Mot de passe ..." />
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
  