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
            <fieldset class="form-group d-flex mr-2">
                <div class="d-flex align-items-center"><select class="d-inline-block form-control pr-4"><option>GM Infotech</option><option>Philips Infotech</option><option>Havells Infotech</option></select></div>
              </fieldset>
              <fieldset class="form-group d-flex">
                <div class="d-flex align-items-center"><select class="d-inline-block form-control pr-4"><option>Order Status</option><option>Completed</option><option>Pending</option></select></div>
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
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Company Name</span></th>
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
                    <td class="vgt-left-align">
                      <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/1-small.1b74d2ba.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">GM Tech</span>
                      </span>
                      </b-button>
                    </td>
                    <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Switch </span>
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      <span class="badge badge-light-warning badge-pill"> Fan </span></td>
                    <td class="vgt-left-align"><span> Augest 17, 2021 </span></td>
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
                      <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/10-small.2b24b197.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">Philips Tech</span>
                      </span>
                      </b-button>
                    </td>
                    <td class="vgt-left-align">
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      <span class="badge badge-light-warning badge-pill"> Fan </span></td>
                    <td class="vgt-left-align"><span> June 24, 2021 </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-danger badge-pill"> Working </span></td>
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
                    <td class="vgt-left-align">
                      <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/3-small.33d29f56.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">Havels Tech</span>
                      </span>
                      </b-button>
                    </td>
                    <td class="vgt-left-align"><span class="badge badge-light-warning badge-pill"> Fan </span>
                      <span class="badge badge-light-info badge-pill"> Switch </span>
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      </td>
                    <td class="vgt-left-align"><span> July 12, 2021 </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-secondary badge-pill"> Not Started </span></td>
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
                    <td class="vgt-left-align">
                      <b-button
                  v-b-modal.modal-1
                  class="btn-text"
                >
                      <span class="text-nowrap">
                        <span class="b-avatar mx-1 badge-secondary rounded-circle">
                          <span class="b-avatar-img"><img src="/img/1-small.1b74d2ba.png" alt="avatar"></span><!---->
                        </span>
                        <span class="text-nowrap">GM Tech</span>
                      </span>
                      </b-button>
                    </td>
                    <td class="vgt-left-align"><span class="badge badge-light-info badge-pill"> Switch </span>
                      <span class="badge badge-light-primary badge-pill"> Light </span>
                      <span class="badge badge-light-warning badge-pill"> Fan </span></td>
                    <td class="vgt-left-align"><span> June 24, 2021 </span></td>
                    <td class="vgt-left-align"><span class="badge badge-light-success badge-pill"> Completed </span></td>
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
      title="GM Orders"
    >
      <b-card-text>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">#98756</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Per Unit</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
            </tr>
            <tr>
              <th scope="col">Fan</th>
              <th scope="col">₹ 600/-</th>
              <th scope="col">20</th>
              <th scope="col">₹ 2400/-</th>
            </tr>
            <tr>
              <th scope="col">Switch</th>
              <th scope="col">₹ 500/-</th>
              <th scope="col">60</th>
              <th scope="col">₹ 2800/-</th>
            </tr>
            <tr>
              <th scope="col">Light</th>
              <th scope="col">₹ 200/-</th>
              <th scope="col">80</th>
              <th scope="col">₹ 2000/-</th>
            </tr>
            <tr>
              <th scope="col">Ac</th>
              <th scope="col">₹ 800/-</th>
              <th scope="col">65</th>
              <th scope="col">₹ 3200/-</th>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead>
             <tr>
               <th scope="col">Timeline</th>
               <th scope="col">Status</th>
               <th scope="col">Payment</th>
               <th scope="col">Total Price</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row">June 24, 2021</th>
               <td><span class="badge badge-light-info badge-pill"> Shipped </span></td>
               <td><span class="badge badge-light-success badge-pill"> Completed </span></td>
               <th scope="col"><h4 class="text-success mb-0">₹ 42000/-</h4></th>
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

export default {
  components: {
    BRow,
    BCol,
    BModal,
    BButton,
    BDropdown,
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
