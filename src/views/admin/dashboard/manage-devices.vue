<template>
<b-card-code title="Basic Modal">
  <b-row>
    <b-col cols="12">
      <div class="card">
        <div class="card-body">
          <div class="custom-search d-flex justify-content-between">
            <fieldset class="form-group d-flex">
              <div class="d-flex align-items-center mr-2"><input type="text" placeholder="Search With ID" class="d-inline-block form-control" id="__BVID__669"></div>
              <div class="d-flex align-items-center"><select class="d-inline-block form-control pr-4"><option>GM Tech</option><option>Philips Tech</option><option>Havels Tech</option></select></div>
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
                    <td class="vgt-left-align"><span> Switch </span></td>
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
                    <td class="vgt-left-align"><span> Light </span></td>
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
                    <td class="vgt-left-align"><span> Fan </span></td>
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
    <template #code>
      {{ codeBasic }}
    </template>
</b-card-code>
</template>

<script>
import {
  BModal, BButton, BRow, BCol, BDropdown, BDropdownItem, BFormGroup, BFormInput, BForm,
} from 'bootstrap-vue'

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
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
