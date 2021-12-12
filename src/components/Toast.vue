<template>
    <div class="position-fixed top-0 start-50 translate-middle-x toast-z-index">
        <div
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            class="toast text-center"
            data-bs-autohide="false"
            ref="toast"
        >
            <div class="toast-header">
                <strong class="me-auto" v-if="Msg.success == true">
                    <i class="bi bi-square-fill" style="color:rgb(34, 156, 44)"></i>執行成功
                </strong>
                <strong class="me-auto" v-else-if="Msg.success == false">
                    <i class="bi bi-square-fill" style="color:rgb(235, 34, 34)"></i>執行失敗
                </strong>
                <strong class="me-auto" v-else>
                    <i class="bi bi-square-fill" style="color:rgb(5, 5, 5)"></i>執行中
                    <div class="spinner-grow spinner-grow-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body fs-5" style="background-color:rgb(224, 224, 224) ">{{ Msg.message }}</div>
        </div>
    </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
    data() {
        return {
            Msg: {},
        }
    },
    props: {
        toastMsg: {}
    },
    watch: {
        toastMsg() {
            this.Msg = this.toastMsg
            const toast = new Toast(this.$refs.toast)
            toast.show()
            const St = setTimeout(function () {
                toast.hide()
                clearInterval(St)
            }, 5000)
        }
    },
}
</script>
<style lang="scss">
    .toast-z-index{
        z-index: 3;
    }
</style>