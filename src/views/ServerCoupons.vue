<template>
  <div class="text-center mt-4">
    <button class="btn btn-primary" @click="openCouponModal(true)">
      建立新的優惠券
    </button>
  </div>
  <div class="table-responsive">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in Coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelCouponModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <CouponModal
    ref="CouponModal"
    :coupon="tempCoupon"
    @updata-coupon="updataCoupon"
  ></CouponModal>
  <DelModal ref="delModal" @del-item="delCoupon"></DelModal>
  <Loading :active="isLoading"></Loading>
  <Toast :toastMsg="toastMsg"></Toast>
</template>
<script>
import Toast from "../components/Toast.vue";
import CouponModal from "@/components/ServerCouponModal.vue";
import DelModal from "@/components/delModal.vue";
export default {
  data() {
    return {
      code: "",
      title: "",
      Coupons: {},
      toastMsg: {},
      isNaw: false,
      tempCoupon: {
        percent: 100,
        is_enabled: 1,
      },
    };
  },
  components: {
    CouponModal,
    DelModal,
    Toast,
  },
  methods: {
    openCouponModal(isNaw, item) {
      this.isNaw = isNaw;
      if (this.isNaw) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = {
          ...item,
        };
      }
      this.$refs.CouponModal.show();
    },
    openDelCouponModal(item) {
      this.tempCoupon = {
        ...item,
      };
      this.$refs.delModal.show();
    },
    getCoupons() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.Coupons = res.data.coupons;
      });
    },
    updataCoupon(item) {
      console.log(item);
      if (this.isNaw) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http
          .post(api, {
            data: item,
          })
          .then((res) => {
            console.log(res);
            this.toastMsg = res.data;
            this.$refs.CouponModal.hide();
            this.getCoupons();
          });
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http
          .put(api, {
            data: item,
          })
          .then((res) => {
            this.toastMsg = res.data;
            this.$refs.CouponModal.hide();
            this.getCoupons();
          });
      }
    },
    delCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.$http.delete(api).then((res) => {
        this.toastMsg = res.data;
        this.$refs.delModal.hide();
        this.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
