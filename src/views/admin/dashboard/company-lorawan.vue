<template>
<b-card-code>
  <b-row>
    <b-col cols="12">
      <div id="card-only-body" class="card card-only-body">
        <div class="card-body">
            <b-tabs
                  nav-wrapper-class="nav-vertical"
                >
                  <b-tab
                    active
                    title="Manage Devices"
                  >
                    <b-card-text>
                      <b-row>
                      <b-col cols="12">
                        <div class="card">
                          <div class="card-body">
                            <div class="custom-search d-flex justify-content-between">
                              <fieldset class="form-group d-flex">
                                <div class="d-flex align-items-center mr-2"><input type="text" placeholder="Search With ID" class="d-inline-block form-control" id="__BVID__669"></div>
                              </fieldset>
                              <fieldset class="form-group">
                                <div class="d-flex align-items-center">
                                  <b-button
                                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                    v-b-modal.modal-1
                                    variant="outline-primary"
                                    class="btn btn-primary"
                                  >
                                    Add Devices
                                  </b-button>
                                </div>
                              </fieldset>
                            </div>
                            <div class="vgt-wrap ">
                              <div class="vgt-responsive">
                                <table class="vgt-table bordered ">
                                  <thead>
                                    <tr>
                                      <!---->
                                      <th class="vgt-checkbox-col"><input type="checkbox"></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Device ID</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Device Type</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Up Time</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Status</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Action</span></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr class="">
                                      <th class="vgt-checkbox-col"><input type="checkbox"></th>
                                      <td class="vgt-left-align"><span> 78965 </span></td>
                                      <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Switch </span></td>
                                      <td class="vgt-left-align"><span> 2 Hrs </span></td>
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
                                            <span>View</span>
                                          </b-dropdown-item>
                                          <b-dropdown-item>
                                            <feather-icon
                                              icon="RefreshCwIcon"
                                              class="mr-50"
                                              />
                                            <span>Reset</span>
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
                                      <td class="vgt-left-align"><span> 45698 </span></td>
                                      <td class="vgt-left-align"><span class="badge badge-light-primary badge-pill"> Light </span></td>
                                      <td class="vgt-left-align"><span> 8 Hrs </span></td>
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
                                            <span>View</span>
                                          </b-dropdown-item>
                                          <b-dropdown-item>
                                            <feather-icon
                                              icon="RefreshCwIcon"
                                              class="mr-50"
                                              />
                                            <span>Reset</span>
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
                                      <td class="vgt-left-align"><span> 14789 </span></td>
                                      <td class="vgt-left-align"><span class="badge badge-light-warning badge-pill"> Fan </span></td>
                                      <td class="vgt-left-align"><span> 9 Hrs </span></td>
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
                                            <span>View</span>
                                          </b-dropdown-item>
                                          <b-dropdown-item>
                                            <feather-icon
                                              icon="RefreshCwIcon"
                                              class="mr-50"
                                              />
                                            <span>Reset</span>
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
                    <b-modal
                          id="modal-1"
                          title="Add Devices"
                          ok-title="Submit"
                          cancel-title="Reset"
                        >
                          <b-card-text>
                            <b-form @submit.prevent>
                          <b-row>

                            <b-col cols="12">
                              <b-form-group
                                label="Device ID"
                                label-for="v-deviceid"
                              >
                                <b-form-input
                                  id="v-deviceid"
                                  placeholder="#12345"
                                />
                              </b-form-group>
                            </b-col>

                            <!-- code -->
                            <b-col cols="12">
                              <b-form-group
                                label="Device Type"
                                label-for="v-device-type"
                              >
                                <b-form-input
                                  id="v-device-type"
                                  placeholder="Light"
                                />
                              </b-form-group>
                            </b-col>
                          </b-row>
                        </b-form>
                          </b-card-text>
                    </b-modal>
                    </b-card-text>
                  </b-tab>
                  <b-tab title="Manage Gateway">
                    <b-card-text>
                      <b-row>
                        <b-col cols="12">
                            <div class="card">
                              <div class="card-body">
                                <div class="custom-search d-flex justify-content-between">
                                  <fieldset class="form-group d-flex">
                                    <div class="d-flex align-items-center mr-2"><input type="text" placeholder="Search With ID" class="d-inline-block form-control" id="__BVID__669"></div>
                                  </fieldset>
                                  <fieldset class="form-group">
                                    <div class="d-flex align-items-center">
                                      <b-button
                                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                        v-b-modal.modal-1
                                        variant="outline-primary"
                                        class="btn btn-primary"
                                      >
                                        Add Gateway
                                      </b-button>
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="vgt-wrap ">
                                  <div class="vgt-responsive">
                                    <table class="vgt-table bordered ">
                                  <thead>
                                    <tr>
                                      <!---->
                                      <th class="vgt-checkbox-col"><input type="checkbox"></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Device ID</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Device Type</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Up Time</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Status</span></th>
                                      <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Action</span></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr class="">
                                      <th class="vgt-checkbox-col"><input type="checkbox"></th>
                                      <td class="vgt-left-align"><span> 78965 </span></td>
                                      <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Switch </span></td>
                                      <td class="vgt-left-align"><span> 2 Hrs </span></td>
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
                                            <span>View</span>
                                          </b-dropdown-item>
                                          <b-dropdown-item>
                                            <feather-icon
                                              icon="RefreshCwIcon"
                                              class="mr-50"
                                              />
                                            <span>Reset</span>
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
                                      <td class="vgt-left-align"><span> 45698 </span></td>
                                      <td class="vgt-left-align"><span class="badge badge-light-primary badge-pill"> Light </span></td>
                                      <td class="vgt-left-align"><span> 8 Hrs </span></td>
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
                                            <span>View</span>
                                          </b-dropdown-item>
                                          <b-dropdown-item>
                                            <feather-icon
                                              icon="RefreshCwIcon"
                                              class="mr-50"
                                              />
                                            <span>Reset</span>
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
                                      <td class="vgt-left-align"><span> 14789 </span></td>
                                      <td class="vgt-left-align"><span class="badge badge-light-warning badge-pill"> Fan </span></td>
                                      <td class="vgt-left-align"><span> 9 Hrs </span></td>
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
                                            <span>View</span>
                                          </b-dropdown-item>
                                          <b-dropdown-item>
                                            <feather-icon
                                              icon="RefreshCwIcon"
                                              class="mr-50"
                                              />
                                            <span>Reset</span>
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
                    </b-card-text>
                  </b-tab>
                  <b-tab title="Manage users">
                    <b-card-text>
                      <b-row>
                        <b-col cols="12">
                          <div class="card">
                            <div class="card-body">
                              <div class="custom-search d-flex justify-content-between">
                                <fieldset class="form-group d-flex">
                                  <div class="d-flex align-items-center mr-2"><input type="text" placeholder="Search With ID" class="d-inline-block form-control" id="__BVID__669"></div>
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
                    </b-card-text>
                  </b-tab>
                </b-tabs>
        </div>
    </div>
    </b-col>
  </b-row>
  <template #code>
      {{ codeBasic }}
    </template>
</b-card-code>
</template>

<script>
import {
  BModal, BButton, BRow, BCol, BDropdown, BDropdownItem, BFormGroup, BFormInput, BForm, BTabs, BTab, BCardText,
} from 'bootstrap-vue'
import { codePosition } from '@/views/components/tab/code'
import BCardCode from '@/@core/components/b-card-code/BCardCode.vue'
import { codePopup } from '@/views/charts-and-maps/maps/leaflet/code'
import 'leaflet/dist/leaflet.css'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BModal,
    BDropdown,
    BDropdownItem,
    BFormGroup,
    BFormInput,
    BForm,
    BCardCode,
    BCardText,
    BTabs,
    BTab,
  },
  data() {
    return {
      codePosition,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482, { draggable: 'true' }],
      codePopup,
    }
  },
  methods: {
    hideModal() {
      this.$refs['modal-4'].hide()
    },
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
.nav-tabs .nav-item a.nav-link.active {
    color: #fff !important;
    border-radius: 5px;
    background-color: #0a71e9 !important;
}
.nav-tabs .nav-item a.nav-link::after{
  display: none;
}
.card-header, .card-footer{
  display: none !important;
}
#modal-4___BV_modal_content_ footer{
  display: none;
}
#modal-4___BV_modal_content_ .modal-footer{
  text-align: right;
  margin-top: 20px;
}
.card{
    margin-bottom: 0 !important;
}
</style>
