<template>
<b-card-code>
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
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Email ID</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Name</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Linked Device</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Status</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Action</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span> gm@abc.com </span></td>
                    <td class="vgt-left-align"><span> GM Tech </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  100
                </b-button> </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-success badge-pill"> Online </span></td>
                    <td class="vgt-left-align">
                      <b-dropdown
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                        >
                        <template v-slot:button-content>
                          <feather-icon
                            icon="MoreVerticalIcon"
                            size="16"
                            class="text-body align-middle mr-25"
                            />
                        </template>
                        <b-dropdown-item>
                          <feather-icon
                            icon="EyeIcon"
                            class="mr-50"
                            />
                          <span>Details</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="SlashIcon"
                            class="mr-50"
                            />
                          <span>Block</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span> Test@abc.com </span></td>
                    <td class="vgt-left-align"><span> Test Tech </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  68
                </b-button> </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-secondary badge-pill"> Offline </span></td>
                    <td class="vgt-left-align">
                      <b-dropdown
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                        >
                        <template v-slot:button-content>
                          <feather-icon
                            icon="MoreVerticalIcon"
                            size="16"
                            class="text-body align-middle mr-25"
                            />
                        </template>
                        <b-dropdown-item>
                          <feather-icon
                            icon="EyeIcon"
                            class="mr-50"
                            />
                          <span>Details</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="SlashIcon"
                            class="mr-50"
                            />
                          <span>Block</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span> users@abc,com </span></td>
                    <td class="vgt-left-align"><span> ABC Tech </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                  34
                </b-button> </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-success badge-pill"> Online </span></td>
                    <td class="vgt-left-align">
                      <b-dropdown
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                        >
                        <template v-slot:button-content>
                          <feather-icon
                            icon="MoreVerticalIcon"
                            size="16"
                            class="text-body align-middle mr-25"
                            />
                        </template>
                        <b-dropdown-item>
                          <feather-icon
                            icon="EyeIcon"
                            class="mr-50"
                            />
                          <span>Details</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="SlashIcon"
                            class="mr-50"
                            />
                          <span>Block</span>
                        </b-dropdown-item>
                      </b-dropdown>
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
  <b-row>
  <b-col>
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url" />
      <l-circle
        :lat-lng="circle.center"
        :radius="circle.radius"
        :color="circle.color"
      />
    </l-map>
  </b-col>
</b-row>
  <b-modal
      id="modal-1"
      title="Linked Devices"
    >
      <b-card-text>
        <table class="table">
         <thead>
            <tr>
              <th scope="col">Device ID</th>
              <th scope="col">Device Type</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">78965</th>
              <td>Switch</td>
              <td><span class="badge badge-light-success badge-pill"> Online </span></td>
            </tr>
            <tr>
              <th scope="row">14789</th>
              <td>Light</td>
              <td><span class="badge badge-light-secondary badge-pill"> Offline </span></td>
            </tr>
            <tr>
              <th scope="row">36987</th>
              <td>AC</td>
              <td><span class="badge badge-light-success badge-pill"> Online </span></td>
            </tr>
          </tbody>
        </table>
      </b-card-text>
    </b-modal>
    <template #code>
      {{ codeBasic }}
    </template>
</b-card-code>
</template>

<script>
import {
  BModal, BButton, BRow, BCol, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { LMap, LTileLayer, LCircle } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BModal,
    BDropdown,
    BDropdownItem,
    LMap,
    LTileLayer,
    LCircle,
    BCardCode,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      circle: {
        center: [47.413220, -1.0482],
        radius: 4500,
        color: '#EA5455',
      },
    }
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
<style lang="scss">
.vue2leaflet-map{
  &.leaflet-container{
    height: 350px;
  }
}
</style>
