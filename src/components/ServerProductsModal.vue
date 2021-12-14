<template>
  <!-- Modal -->
  <!-- 賦予ref=modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  v-model="tempProducts.imageUrl"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadFile"
                />
              </div>
              <img class="img-fluid" alt="" :src="tempProducts.imageUrl" />
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group">
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                  />
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempProducts.title"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model="tempProducts.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model="tempProducts.unit"
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                    v-model.number="tempProducts.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model.number="tempProducts.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="tempProducts.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                  v-model="tempProducts.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempProducts.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <!-- 使用emit註冊方法並帶入tempProducts -->
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-Products', tempProducts)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from 'bootstrap/js/dist/modal' // 載入 bootstrap 中的modal元件 , 以便實體化
import modalMixin from "../mixins/modalMixin";
export default {
  data() {
    return {
      modal: {}, // modal 實體化
      tempProducts: {}, // 儲存彈跳視窗中輸入得資料
    };
  },
  mixins: [modalMixin],
  props: {
    products: {
      type: Object, // 預設為物件
      default() {
        return {};
      }, // 當props沒有帶入值時回傳空物件
    },
    src: {},
  },
  watch: {
    products() {
      // 監聽 props屬性中的 products 當每次改變時傳入 tempProducts 儲存
      this.tempProducts = this.products;
    },
  },
  methods: {
    // show() {
    //    this.modal.show(); // 利用bootstrap 物件的方法手動呼叫
    // },
    // hide() {
    //    this.modal.hide();
    // },
    uploadFile() {
      const fileInput = this.$refs.fileInput.files[0]; // 取得ref元素中的 files[0] (圖片的url)
      console.dir(fileInput); // dif為查看特定物件的屬性
      const formData = new FormData(); // 後端設定只能傳入formData物件,故新建一個
      formData.append("file-to-upload", fileInput); // append 為在formData中新建一個名為file-to-upload的元素,並在元素內放入fileInput
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((res) => {
        // 將連線後將 formData 送入後端
        console.log(res.data);
        if (res.data.success) {
          this.tempProducts.imageUrl = res.data.imageUrl; // 將圖片的url換成從後端取得的url
        }
      });
    },
  },
  // mounted() {
  //    this.modal = new Modal(this.$refs.modal); // 取得ref為modal的DOM標籤資料,並利用bootstrap功能將他實體物件化,並賦予進this.modal
  // }
};
</script>
