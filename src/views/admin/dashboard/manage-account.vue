<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >
        <ecommerce-medal :data="data.congratulations" />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="4">
        <b-row class="match-height">
          <b-col
            lg="12"
            md="12"
            cols="12"
          >
            <ecommerce-transactions :data="data.transactionData" />
          </b-col>
          <!-- Bar Chart - Orders -->
        </b-row>
      </b-col>

      <!-- Revenue Report Card -->
      <b-col lg="8">
        <ecommerce-revenue-report :data="data.revenue" />
      </b-col>
      <!--/ Revenue Report Card -->
    </b-row>

    <b-row class="match-height">
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-browser-states />
      </b-col>
      <!--/ Browser States Card -->

      <!-- Goal Overview Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-goal-overview :data="data.goalOverview" />
      </b-col>
      <!--/ Goal Overview Card -->

      <!-- Transaction Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-order-chart :data="data.statisticsOrder" />
        <ecommerce-earnings-chart :data="data.earningsChart" />
      </b-col>
      <b-col lg="12">
        <ecommerce-company-table :table-data="data.companyTable" />
      </b-col>
      <!--/ Transaction Card -->
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import { getUserData } from '@/auth/utils'
import EcommerceMedal from '@/views/dashboard/ecommerce/EcommerceMedal.vue'
import EcommerceStatistics from '@/views/dashboard/ecommerce/EcommerceStatistics.vue'
import EcommerceRevenueReport from '@/views/dashboard/ecommerce/EcommerceRevenueReport.vue'
import EcommerceOrderChart from '@/views/dashboard/ecommerce/EcommerceOrderChart.vue'
import EcommerceEarningsChart from '@/views/dashboard/ecommerce/EcommerceEarningsChart.vue'
import EcommerceCompanyTable from '@/views/dashboard/ecommerce/EcommerceCompanyTable.vue'
import EcommerceBrowserStates from '@/views/dashboard/ecommerce/EcommerceBrowserStates.vue'
import EcommerceGoalOverview from '@/views/dashboard/ecommerce/EcommerceGoalOverview.vue'
import EcommerceTransactions from '@/views/dashboard/ecommerce/EcommerceTransactions.vue'

export default {
  components: {
    BRow,
    BCol,

    EcommerceMedal,
    EcommerceStatistics,
    EcommerceRevenueReport,
    EcommerceEarningsChart,
    EcommerceOrderChart,
    EcommerceCompanyTable,
    EcommerceBrowserStates,
    EcommerceGoalOverview,
    EcommerceTransactions,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/ecommerce/data')
      .then(response => {
        this.data = response.data

        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
