<template>
  <toast ref="yToast" message="这四一个toast"/>
  <button @click="handleClick">click Me</button>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import global from 'styles/global.module.scss';
import toast from 'comps/toast/toast.vue';
export default defineComponent({
  name: 'App',
  components: {
    toast
  },
  setup() {
    const yToast = ref<typeof toast>(null);
    const handleClick = () => {
      yToast.value.open();
    };
    return {
      ...global,
      yToast,
      handleClick
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo {
  width: 100px;
  height: 100px;
}
.cas {
  /* color: $main-color-g; */
}
</style>