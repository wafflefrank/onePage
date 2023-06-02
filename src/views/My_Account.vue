<template>
  <div class="row mt-5">
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon-shape bg-gradient-primary d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-yen-sign fs-3 text-white"></i>
              </div>
            </div>
            <div class="">
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">今日結算</p>
                <h5 class="font-weight-bolder">$53,000</h5>
                <span class="text-sm text-success">+55%</span> since yesterday
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon-shape bg-gradient-danger"><i class="fa-solid fa-money-bill-transfer fs-4 text-white"></i></div>
            </div>
            <div>
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">今日待出款</p>
                <h5 class="font-weight-bolder">2,300</h5>
                <span class="text-sm text-success fw-bold">+3%</span> since last week
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon icon-shape bg-gradient-success border-radius-2xl">
                <i class="fa-solid fa-coins fs-4 text-white"></i>
              </div>
            </div>
            <div class="">
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">本月交易額</p>
                <h5 class="font-weight-bolder">+3,462</h5>
                <span class="text-sm text-danger">-2%</span> since last quarter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon icon-shape bg-gradient-warning border-radius-2xl"><i class="fa-solid fa-arrow-down-1-9 fs-4 text-white"></i></div>
            </div>
            <div class="">
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">本月比數</p>
                <h5 class="font-weight-bolder">$103,430</h5>
                <span class="text-sm text-success">+5%</span> than last month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LiveChart></LiveChart>
  <div>
    <el-input v-model="prompt" placeholder="Please input" />
    <button @click="generateText">Generate Text</button>
    <p>{{ generatedText }}</p>
  </div>
</template>

<script>
import LiveChart from '../components/LiveChart/LiveChart.vue';

export default {
  components: {
    LiveChart,
  },
  data() {
    return {
      liveChartInfo: {},
    };
  },
  methods: {
    getHomeData() {
      // this.isLoading = true;

      this.liveChartInfo = [
        { value: 1, name: 'ETH' },
        { value: 2, name: 'BTC' },
        { value: 30, name: 'USDT' },
      ];
      // this.liveChartInfo = res.data.data.walletData.currency;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  -webkit-box-shadow: 0px 0px 50px -11px rgba(56, 166, 207, 1);
  -moz-box-shadow: 0px 0px 50px -11px rgba(56, 166, 207, 1);
  box-shadow: 0px 0px 50px -11px rgba(56, 166, 207, 1);
}
.bg-gradient-primary {
  background-image: linear-gradient(310deg, #5e72e4, #825ee4);
}
.bg-gradient-danger {
  background-image: linear-gradient(310deg, #ea617c, #ee5f37c8);
}
.bg-gradient-success {
  background-image: linear-gradient(310deg, #16714a, #2dcecc);
}
.bg-gradient-warning {
  background-image: linear-gradient(310deg, #fb6340, #fbb140);
}
.icon-shape {
  width: 48px;
  height: 48px;
  background-position: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
