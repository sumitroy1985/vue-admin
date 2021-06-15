<template>
<b-card-code title="Basic Modal">
  <b-row>
    <b-col cols="12">
      <div class="card">
        <div class="card-body">
          <div class="custom-search d-flex flex-start">
            <fieldset class="form-group mr-2">
              <div class="d-flex align-items-center"><label class="mr-1">Search</label><input type="text" placeholder="Search" class="d-inline-block form-control" id="__BVID__669"></div>
            </fieldset>
              <fieldset class="form-group d-flex">
                <div class="d-flex align-items-center"><select class="d-inline-block form-control pr-4"><option>Order Status</option><option>Completed</option><option>Pending</option></select></div>
              </fieldset>
              <fieldset class="form-group ml-auto">
                <div class="d-flex align-items-center">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    v-b-modal.modal-1
                    variant="outline-primary"
                    class="btn btn-primary"
                  >
                    Placed Order
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
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Order ID</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Order Type</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Order Timeline</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Order Status</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Payment Status</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span> #98754 </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Switch </span>
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      <span class="badge badge-light-warning badge-pill"> Fan </span></td>
                    <td class="vgt-left-align"><span> November 08, 2021  </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Shipped </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-success badge-pill"> Completed </span></td>
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
                        <b-dropdown-item v-b-modal.modal-1>
                          <feather-icon
                            icon="EyeIcon"
                            class="mr-50"
                            />
                          <span>View</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="MailIcon"
                            class="mr-50"
                            />
                          <span>Email</span>
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
                    <td class="vgt-left-align"><span> #14567 </span></td>
                    <td class="vgt-left-align">
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      <span class="badge badge-light-warning badge-pill"> Fan </span></td>
                    <td class="vgt-left-align"><span> October 24, 2021  </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-danger badge-pill"> Pending </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-danger badge-pill"> Pending </span></td>
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
                        <b-dropdown-item v-b-modal.modal-1>
                          <feather-icon
                            icon="EyeIcon"
                            class="mr-50"
                            />
                          <span>View</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="MailIcon"
                            class="mr-50"
                            />
                          <span>Email</span>
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
                    <td class="vgt-left-align"><span> #45672 </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-warning badge-pill"> Fan </span>
                      <span class="badge badge-light-info badge-pill"> Switch </span>
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      </td>
                    <td class="vgt-left-align"><span> Augest 17, 2021  </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Shipped </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-primary badge-pill"> Advance </span></td>
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
                        <b-dropdown-item v-b-modal.modal-1>
                          <feather-icon
                            icon="EyeIcon"
                            class="mr-50"
                            />
                          <span>View</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="MailIcon"
                            class="mr-50"
                            />
                          <span>Email</span>
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
                    <td class="vgt-left-align"><span> #98754 </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Switch </span>
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      <span class="badge badge-light-warning badge-pill"> Fan </span></td>
                    <td class="vgt-left-align"><span> June 24, 2021 </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-danger badge-pill"> Pending </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-success badge-pill"> Completed </span></td>
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
                        <b-dropdown-item v-b-modal.modal-1>
                          <feather-icon
                            icon="EyeIcon"
                            class="mr-50"
                            />
                          <span>View</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <feather-icon
                            icon="MailIcon"
                            class="mr-50"
                            />
                          <span>Email</span>
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
      title="Placed Orders"
    >
      <b-card-text>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Fan</th>
              <th scope="col">₹ 200/-PU</th>
              <th scope="col"><b-form-spinbutton
                id="sb-inline"
                v-model="value"
                inline
              /></th>
            </tr>
            <tr>
              <th scope="col">Light</th>
              <th scope="col">₹ 100/-PU</th>
              <th scope="col"><b-form-spinbutton
                id="sb-inline"
                v-model="value"
                inline
              /></th>
            </tr>
            <tr>
              <th scope="col">AC</th>
              <th scope="col">₹ 400/-PU</th>
              <th scope="col"><b-form-spinbutton
                id="sb-inline"
                v-model="value"
                inline
              /></th>
            </tr>
            <tr>
              <th scope="col">Socket</th>
              <th scope="col">₹ 80/-PU</th>
              <th scope="col"><b-form-spinbutton
                id="sb-inline"
                v-model="value"
                inline
              /></th>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead>
             <tr>
               <th scope="col">Timeline</th>
               <th scope="col">Total Price</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td scope="row"><b-form-datepicker
                id="example-datepicker"
                v-model="value"
              /></td>
               <td>
                <h2 class="text-success mb-0">₹ 24000/-</h2>
                </td>
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
  BModal, BButton, BFormSpinbutton, BFormDatepicker, BRow, BCol, BDropdown, BDropdownItem,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BModal,
    BButton,
    BDropdown,
    BFormSpinbutton,
    BFormDatepicker,
    BDropdownItem,
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
button.btn:hover {
    box-shadow: none !important;
}
</style>
