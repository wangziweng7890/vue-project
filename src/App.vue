<template>
  <router-view v-slot="{ Component }">
    <transition class="transition" :name="transitionName">
      <keep-alive :max="1">
        <component
          v-if="route.meta.keepAlive"
          :is="Component"
          :key="route.fullPath"
        />
      </keep-alive>
    </transition>
    <transition class="transition" :name="transitionName">
      <component
        v-if="!route.meta.keepAlive"
        :is="Component"
        :key="route.path"
      />
    </transition>
  </router-view>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const transitionName = ref("slide-left");
</script>

<style lang="scss">
@import "@/scss/reset.scss";

@import "@/scss/common.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
