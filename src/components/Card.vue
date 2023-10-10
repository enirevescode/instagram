<script setup>
import Timeline from './Timeline.vue';
import { defineProps } from 'vue';

const props = defineProps(['card'])
</script>

<template>
    <a-card hoverable style="width: 240px" class="card" >
      <template #cover>
        <img alt="example" :src="card.url" />
      </template>
      <a-card-meta :title="card.username">
        <template #description>{{ card.caption }}</template>
      </a-card-meta>
    </a-card>
</template>

<style scoped>
.card{
  margin-bottom: 20px;
}
</style>