<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col
        lg="6"
        md="12"
      >
        <analytics-congratulation :data="data.congratulations" />
      </b-col>
      <b-col
        lg="2"
        sm="4"
      >
      <div class="card bg-darken-2 colors-container rounded text-white">
        <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
          <span class="b-avatar shadow mb-2 badge-primary rounded-circle"><span class="b-avatar-custom"><feather-icon
        size="24"
        icon="HomeIcon"
      /></span></span>
            <h2 class="display-3 mb-50 font-weight-bolder"> 12 </h2>
            <button type="button" class="btn text-white"><span>Company</span></button>
        </div>
      </div>
      </b-col>
      <b-col
        lg="2"
        sm="4"
      >
        <div class="card bg-primary bg-darken-2 colors-container rounded text-white">
        <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
          <span class="b-avatar shadow mb-2 badge-primary rounded-circle"><span class="b-avatar-custom"><feather-icon
        size="24"
        icon="PackageIcon"
      /></span></span>
            <h2 class="display-3 mb-50 font-weight-bolder"> 100 </h2>
            <button type="button" class="btn text-white"><span>Devices</span></button>
        </div>
      </div>
      </b-col>
      <b-col
        lg="2"
        sm="4"
      >
        <div class="card bg-darken-2 colors-container rounded text-black">
        <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
          <span class="b-avatar shadow mb-2 badge-primary rounded-circle"><span class="b-avatar-custom"><feather-icon
        size="24"
        icon="UsersIcon"
      /></span></span>
            <h2 class="display-3 mb-50 font-weight-bolder"> 120 </h2>
            <button type="button" class="btn text-white"><span>Users</span></button>
        </div>
      </div>
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col cols="12">
        <apex-line-area-chart />
      </b-col>
      <b-col cols="12">
      <chartjs-bar-chart />
    </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import AnalyticsCongratulation from '@/views/dashboard/analytics/AnalyticsCongratulation.vue'
import ApexLineAreaChart from '@/views/charts-and-maps/charts/apex-chart/ApexLineAreaChart.vue'
import ChartjsBarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    ApexLineAreaChart,
    ChartjsBarChart,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
      .then(response => { this.data = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
