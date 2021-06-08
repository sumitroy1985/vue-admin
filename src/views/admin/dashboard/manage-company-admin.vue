<template>
<b-card-code title="Basic Modal">
  <b-row>
    <b-col cols="12">
      <div class="card">
        <div class="card-body">
          <div class="custom-search d-flex justify-content-between">
            <fieldset class="form-group">
              <div class="d-flex align-items-center"><label class="mr-1">Search</label><input type="text" placeholder="Search" class="d-inline-block form-control" id="__BVID__669"></div>
            </fieldset>
            <fieldset class="form-group">
              <div class="d-flex align-items-center">
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  v-b-modal.modal-1
                  variant="outline-primary"
                  class="btn btn-primary"
                >
                  Add Company
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
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Company Name</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Code</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Total Devices</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Total Users</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Action</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align">
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/1-small.1b74d2ba.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">GM Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> #5036 </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-2
                  class="btn-text"
                >
                  100
                </b-button> </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-3
                  class="btn-text"
                >
                  30
                </b-button> </span></td>
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
                            icon="Edit2Icon"
                            class="mr-50"
                            />
                          <span>Edit</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="TrashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
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
                    <td class="vgt-left-align">
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/10-small.2b24b197.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">Philips Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> #7789 </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-2
                  class="btn-text"
                >
                  897
                </b-button> </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-3
                  class="btn-text"
                >
                  78
                </b-button> </span></td>
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
                            icon="Edit2Icon"
                            class="mr-50"
                            />
                          <span>Edit</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="TrashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
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
                    <td class="vgt-left-align">
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/3-small.33d29f56.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">Havels Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> #3214 </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-2
                  class="btn-text"
                >
                  564
                </b-button> </span></td>
                    <td class="vgt-left-align"><span> <b-button
                  v-b-modal.modal-3
                  class="btn-text"
                >
                  41
                </b-button> </span></td>
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
                            icon="Edit2Icon"
                            class="mr-50"
                            />
                          <span>Edit</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="TrashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
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
      title="Add Company"
      ok-title="Submit"
      cancel-title="Reset"
    >
      <b-card-text>
        <b-form @submit.prevent>
      <b-row>

        <!-- company name -->
        <b-col cols="12">
          <b-form-group
            label="Company Name"
            label-for="v-company"
          >
            <b-form-input
              id="v-company-name"
              placeholder="GM Tech"
            />
          </b-form-group>
        </b-col>
        <!-- company image -->
        <b-col cols="12">
          <b-form-group
            label="Company logo"
            label-for="v-companylogo"
          >
          <input class="form-control" type="file" id="formFile">
          </b-form-group>
        </b-col>

        <!-- code -->
        <b-col cols="12">
          <b-form-group
            label="Company Code"
            label-for="v-code"
          >
            <b-form-input
              id="v-code"
              type="number"
              placeholder="#12345"
            />
          </b-form-group>
        </b-col>
        <!-- checkbox -->
        <b-col cols="12">
          <b-form-group>
            <b-form-checkbox
              id="checkbox-3"
              name="checkbox-3"
              value="Remember_me"
            >
              Remember me
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
      </b-card-text>
    </b-modal>
    <b-modal
      id="modal-2"
      title="Total Devices"
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
    <b-modal
      id="modal-3"
      title="Total Users"
    >
      <table class="table">
         <thead>
            <tr>
              <th scope="col">Email ID</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">gm@abc.com</th>
              <td>GM Tech</td>
              <td><span class="badge badge-light-success badge-pill"> Online </span></td>
            </tr>
            <tr>
              <th scope="row">Test@abc.com</th>
              <td>Test Tech</td>
              <td><span class="badge badge-light-secondary badge-pill"> Offline </span></td>
            </tr>
            <tr>
              <th scope="row">users@abc,com</th>
              <td>ABC Tech</td>
              <td><span class="badge badge-light-success badge-pill"> Online </span></td>
            </tr>
          </tbody>
        </table>
    </b-modal>
    <template #code>
      {{ codeBasic }}
    </template>
</b-card-code>
</template>

<script>
import {
  BModal, BButton, BRow, BCol, BDropdown, BDropdownItem, BFormGroup, BFormInput, BFormCheckbox, BForm,
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
    BFormCheckbox,
    BForm,
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
