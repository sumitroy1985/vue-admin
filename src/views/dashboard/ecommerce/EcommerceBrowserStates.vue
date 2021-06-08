<template>
  <b-card
    no-body
    class="card-browser-states"
  >
    <b-card-header>
      <div>
        <b-card-title>Company States</b-card-title>
        <b-card-text class="font-small-2">
          Sales States August 2020
        </b-card-text>
      </div>

      <b-dropdown
        variant="link"
        no-caret
        class="chart-dropdown"
        toggle-class="p-0"
      >
        <template #button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="18"
            class="text-body cursor-pointer"
          />
        </template>
        <b-dropdown-item href="#">
          Last 28 Days
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Month
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Year
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <!-- body -->
    <b-card-body>

      <div
        v-for="(browser,index) in browserData"
        :key="browser.browserImg"
        class="browser-states"
      >
        <b-media no-body>
          <b-media-aside class="mr-1">
            <b-img
              :src="browser.browserImg"
              alt="browser img"
            />
          </b-media-aside>
          <b-media-body>
            <h6 class="align-self-center my-auto">
              {{ browser.name }}
            </h6>
          </b-media-body>
        </b-media>
        <div class="d-flex align-items-center">
          <span class="font-weight-bold text-body-heading mr-1">{{ browser.usage }}</span>
          <vue-apex-charts
            type="radialBar"
            height="30"
            width="30"
            :options="chartData[index].options"
            :series="chartData[index].series"
          />
        </div>
      </div>
    </b-card-body>
    <!--/ body -->
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BMedia, BMediaAside, BMediaBody, BImg, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
/* eslint-disable global-require */
const $trackBgColor = '#e9ecef'
export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BMediaAside,
    BMediaBody,
    BImg,
    BDropdown,
    BDropdownItem,
    VueApexCharts,
  },
  data() {
    return {
      chartData: [],
      chartClone: {},
      chartColor: [$themeColors.primary, $themeColors.warning, $themeColors.secondary, $themeColors.info, $themeColors.danger],
      chartSeries: [54.4, 6.1, 14.6, 4.2, 8],
      browserData: [
        {
          browserImg: require('@/assets/images/avatars/1.png'),
          name: 'GM Infotech',
          usage: '54.4%',
        },
        {
          browserImg: require('@/assets/images/avatars/2.png'),
          name: 'Philips Infotech',
          usage: '6.1%',
        },
        {
          browserImg: require('@/assets/images/avatars/3.png'),
          name: 'Havels Infotech',
          usage: '14.6%',
        },
        {
          browserImg: require('@/assets/images/avatars/4.png'),
          name: 'Kona Infotech',
          usage: '4.2%',
        },
        {
          browserImg: require('@/assets/images/avatars/5.png'),
          name: 'Sony Infotech',
          usage: '8.%',
        },
      ],
      chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [$themeColors.primary],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%',
              },
              track: {
                background: $trackBgColor,
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
    }
  },
  created() {
    for (let i = 0; i < this.browserData.length; i += 1) {
      const chartClone = JSON.parse(JSON.stringify(this.chart))
      chartClone.options.colors[0] = this.chartColor[i]
      chartClone.series[0] = this.chartSeries[i]
      this.chartData.push(chartClone)
    }
  },
}
</script>
<style scoped>
.browser-states .media {
    display: flex;
    align-items: center;
}
.media-aside.mr-1.align-self-start img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
</style>
