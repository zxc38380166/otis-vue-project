// 整合bootstrap 物件實體化的程式碼
import Modal from 'bootstrap/js/dist/modal' // 載入 bootstrap 中的modal元件 , 以便實體化
export default {
   methods: {
      show() {
         this.modal.show()
      },
      hide() {
         this.modal.hide()
      }
   },
   mounted() {
      this.modal = new Modal(this.$refs.modal)
   },
}