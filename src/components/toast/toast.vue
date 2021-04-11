<template>
    <div class="y-toast">
        <transition name="y-toast">
            <div class="y-toast_inner" v-if="visible">
                <div class="y-toast_message">{{ message }}</div>
            </div>
        </transition>
    </div>
</template>
<script>
import {ref, defineComponent} from 'vue';
export default defineComponent({
    name: 'y-toast',
    props: {
        message: {
            type: String,
            default: ''
        },
        // 显示时长
        delay: {
            type: Number,
            default: 2000
        }
    },
    setup(props) {
        const visible = ref(false);
        // toast 关闭
        const close = () => {
            visible.value = false;
        };
        // 打开
        const open = () => {
            visible.value = true;
            setTimeout(() => {
                close();
            }, props.delay);
        };
        return {
            visible,
            open,
            close
        }
    }
});
</script>
<style lang='scss' scoped>
.y-toast {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* 设置事件穿透 */
    pointer-events: none;
}
.y-toast_inner {
    position: relative;
    bottom: 20%;
    padding: 10px 30px;
    background-color: rgba(0, 0, 0, .8);
    color: rgba(255, 255, 255, 1);
    border-radius: 10px;
}
.y-toast-enter-active,
.y-toast-leave-active {
    transition: all .3s;
}
.y-toast-enter-from,
.y-toast-leave-to {
    opacity: 0;
    transform: translateY(50%);
}
</style>