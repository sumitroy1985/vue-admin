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
                  Add Log
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
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Date</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>People Name</span></th>
                    <th class="vgt-left-align sortable" style="min-width: auto; width: auto;"><span>Massage</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span>18:30 PM | 17th May 2021 </span></td>
                    <td class="vgt-left-align"><span> Sumit Roy </span></td>
                    <td class="vgt-left-align"><span> App Design Fix </span></td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span>06:30 PM | 21th May 2021 </span></td>
                    <td class="vgt-left-align"><span> Mukesh Ambani </span></td>
                    <td class="vgt-left-align"><span> Jio Network issue </span></td>
                  </tr>
                  <tr class="">
                    <th class="vgt-checkbox-col"><input type="checkbox"></th>
                    <td class="vgt-left-align"><span>11:30 AM | 17th May 2021 </span></td>
                    <td class="vgt-left-align"><span> Ajim Premji </span></td>
                    <td class="vgt-left-align"><span> Telecalling Issue Fix </span></td>
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
            label="Date and TIme"
            label-for="v-time"
          >
            <flat-pickr
            v-model="dateNtim"
            class="form-control"
            :config="{ enableTime: true,dateFormat: 'Y-m-d H:i'}"
          />
          </b-form-group>
        </b-col>
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
            label="Massage"
            label-for="v-massage"
          >
            <b-form-input
              id="v-massage"
              placeholder="Mobile issue"
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
  BModal, BButton, BRow, BCol, BFormGroup, BFormInput, BForm,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import { codeBasic } from '@/views/forms/form-element/date-time-picker/code'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BModal,
    BFormGroup,
    BFormInput,
    BForm,
    flatPickr,
  },
  data() {
    return {
      date: null,
      dateDefault: null,
      timePicker: null,
      dateNtim: null,
      multiDate: null,
      rangeDate: null,
      humanDate: null,
      disableDate: null,
      inlineDate: null,
      codeBasic,
    }
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
