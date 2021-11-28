<template>
   <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">Modal title</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <p>是否確定要刪除？</p>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
               <button type="button" class="btn btn-primary" @click="$emit('del-item')">刪除</button>
               <!-- 利用emit呼叫外層方法 -->
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   //import Modal from 'bootstrap/js/dist/modal' // 載入 bootstrap 中的modal元件 , 以便實體化
   import modalMixin from '@/mixins/modalMixin' // 利用mixin整合重複的程式碼
   export default {
      data() {
         return {
            modal: '',
         }
      },
      props: {
         item: {}, // 接收要刪除的產品從外層傳送進來的資料存放
      },
      mixins: [modalMixin],
      // methods: {
      //    show(){
      //       this.modal.show()
      //    },
      //    hide(){
      //       this.modal.hide()
      //    }
      // },
      // mounted() {
      //    this.modal = new Modal(this.$refs.modal)
      // },
   }
</script>