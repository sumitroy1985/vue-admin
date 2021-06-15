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
                  Add APP
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
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>App Name</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Platform</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Status</span></th>
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
                    <td class="vgt-left-align"><span> Smart App </span></td>
                    <td class="vgt-left-align"><span> Ionic </span></td>
                    <td class="vgt-left-align"><span> <span class="badge badge-light-success badge-pill"> Active </span> </span></td>
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
                          <span>Update Info</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="TrashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
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
                        <span class="text-nowrap">Havels Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> Smart App </span></td>
                    <td class="vgt-left-align"><span> Ionic </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-secondary badge-pill"> Inactive </span></td>
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
                          <span>Update Info</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="TrashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
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
                        <span class="text-nowrap">Philips Tech</span>
                      </span>
                    </td>
                    <td class="vgt-left-align"><span> Smart App </span></td>
                    <td class="vgt-left-align"><span> Ionic </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-success badge-pill"> Active </span></td>
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
                          <span>Update Info</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="TrashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
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
      title="Add App"
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
            label="App Name"
            label-for="v-code"
          >
            <b-form-input
              id="v-code"
              type="text"
              placeholder="Smart App"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Plateform"
            label-for="v-plat"
          >
            <select class="form-control" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">Ionic</option>
              <option value="2">VUE js</option>
              <option value="3">React js</option>
            </select>
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
