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
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          icon="UsersIcon"
          :statistic="120"
          statistic-title="Up Time"
          :chart-data="data.subscribersGained.series"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="PackageIcon"
          color="warning"
          :statistic="kFormatter(160)"
          statistic-title="App Download"
          :chart-data="data.ordersRecevied.series"
        />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="6">
        <analytics-avg-sessions :data="data.avgSessions" />
      </b-col>
      <b-col lg="6" class="massage-section">
        <analytics-support-tracker :data="data.supportTracker" />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="4">
        <analytics-timeline :data="data.timeline" />
      </b-col>
      <b-col lg="4">
        <analytics-sales-radar-chart :data="data.salesChart" />
      </b-col>
      <b-col lg="4">
        <analytics-app-design :data="data.appDesign" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <div class="card">
        <div class="card-body">
          <div class="custom-search d-flex justify-content-between">
            <fieldset class="form-group d-flex">
              <div class="d-flex align-items-center mr-2"><input type="text" placeholder="Search With ID" class="d-inline-block form-control" id="__BVID__669"></div>
            </fieldset>
            <fieldset class="form-group">
              <div class="d-flex align-items-center"><select class="d-inline-block form-control pr-4"><option>GM Tech</option><option>Philips Tech</option><option>Havels Tech</option></select></div>
            </fieldset>
          </div>
          <div class="vgt-wrap ">
            <div class="vgt-responsive">
              <table class="vgt-table bordered ">
                <thead>
                  <tr>
                    <!---->
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>ID</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Company Name</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Total Device</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Active Devices</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Action</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span> #5036 </span></td>
                    <td class="vgt-left-align">
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/1-small.1b74d2ba.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">GM Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  100
                </b-button> </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  60
                </b-button> </span></td>
                    <td class="vgt-left-align">
                    <feather-icon
                      icon="SendIcon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    <feather-icon
                      icon="EyeIcon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    <feather-icon
                      icon="Trash2Icon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    </td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span> #7852 </span></td>
                    <td class="vgt-left-align">
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/3-small.33d29f56.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">HAVELS Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  60
                </b-button> </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  40
                </b-button> </span></td>
                    <td class="vgt-left-align">
                    <feather-icon
                      icon="SendIcon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    <feather-icon
                      icon="EyeIcon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    <feather-icon
                      icon="Trash2Icon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    </td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span> #1478 </span></td>
                    <td class="vgt-left-align">
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/9-small.30df7a62.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">PHILIPS Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  75
                </b-button> </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  60
                </b-button> </span></td>
                    <td class="vgt-left-align">
                    <feather-icon
                      icon="SendIcon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    <feather-icon
                      icon="EyeIcon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    <feather-icon
                      icon="Trash2Icon"
                      size="19"
                      class="text-body align-middle mr-1 cursor-pointer"
                    />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
import AnalyticsCongratulation from '@/views/dashboard/analytics/AnalyticsCongratulation.vue'
import AnalyticsAvgSessions from '@/views/dashboard/analytics/AnalyticsAvgSessions.vue'
import AnalyticsSupportTracker from '@/views/dashboard/analytics/AnalyticsSupportTracker.vue'
import AnalyticsTimeline from '@/views/dashboard/analytics/AnalyticsTimeline.vue'
import AnalyticsSalesRadarChart from '@/views/dashboard/analytics/AnalyticsSalesRadarChart.vue'
import AnalyticsAppDesign from '@/views/dashboard/analytics/AnalyticsAppDesign.vue'

export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    AnalyticsAvgSessions,
    StatisticCardWithAreaChart,
    AnalyticsSupportTracker,
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    AnalyticsAppDesign,
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
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
.massage-section .card-header .card-title {
    margin-bottom: 0;
    visibility: hidden;
}
</style>
