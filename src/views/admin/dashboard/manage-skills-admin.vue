<template>
<b-card-code title="Basic Modal">
  <b-row>
    <b-col cols="12">
      <div class="card">
        <div class="card-body">
          <div class="custom-search d-flex justify-content-between">
            <fieldset class="form-group d-flex">
              <div class="d-flex align-items-center"><select class="d-inline-block form-control pr-4"><option>Sumit Roy</option><option>Mukesh Ambani</option><option>Ajim Premji</option></select></div>
            </fieldset>
            <fieldset class="form-group">
              <div class="d-flex align-items-center">
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  v-b-modal.modal-1
                  variant="outline-primary"
                  class="btn btn-primary"
                >
                  Add Skill
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
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Skill Name</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Status</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Action</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/1-small.1b74d2ba.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">GM Tech</span>
                      </span></td>
                    <td class="vgt-left-align"><span> Alexa </span></td>
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
                          <span>Edit</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="SlashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/10-small.2b24b197.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">GM Tech</span>
                      </span></td>
                    <td class="vgt-left-align"><span> Google Home </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-danger badge-pill"> Inactive </span></td>
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
                            icon="SlashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/3-small.33d29f56.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">Havels Tech</span>
                      </span></td>
                    <td class="vgt-left-align"><span> Siri </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-secondary badge-pill"> Paused </span></td>
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
                            icon="SlashIcon"
                            class="mr-50"
                            />
                          <span>Delete</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/10-small.2b24b197.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">Philips Tech</span>
                      </span></td>
                    <td class="vgt-left-align"><span> IFTTT </span></td>
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
                          <span>Edit</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="SlashIcon"
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
      title="Add People"
      ok-title="Submit"
      cancel-title="Reset"
    >
      <b-card-text>
        <b-form @submit.prevent>
      <b-row>

        <b-col cols="12">
          <b-form-group
            label="People Name"
            label-for="v-name"
          >
            <b-form-input
              id="v-name"
              placeholder="Steve Jobs"
            />
          </b-form-group>
        </b-col>

        <!-- code -->
        <b-col cols="12">
          <b-form-group
            label="Assigned Work"
            label-for="v-work"
          >
            <b-form-input
              id="v-work"
              placeholder="Mobile issue"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Timeline"
            label-for="v-time"
          >
            <b-form-input
              id="v-time"
              type="number"
              placeholder="24"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Upcoming Events"
            label-for="v-event"
          >
            <b-form-input
              id="v-event"
              placeholder="Mobile Expo"
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
