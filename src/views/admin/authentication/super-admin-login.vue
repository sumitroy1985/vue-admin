<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">
            Lazot Technologies Pvt Ltd
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Welcome to Lazot World! 👋
        </b-card-title>
        <b-card-text class="mb-2">
          Please sign-in to your account and start the adventure
        </b-card-text>

        <!-- form -->
        <validation-observer
          ref="loginForm"
        >
          <b-form
            class="auth-login-form mt-2"
          >

            <!-- email -->
            <b-form-group
              label-for="adminid"
              label="Super Admin ID"
            >
              <validation-provider
                #default="{ errors }"
                name="Super Admin ID"
                rules="required|Adminid"
              >
                <b-form-input
                  id="adminid"
                  v-model="userEmail"
                  name="login-email"
                  :state="errors.length > 0 ? false:null"
                  placeholder="RT12587"
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Password</label>
                <b-link :to="{name:'auth-forgot-password-v1'}">
                  <small>Forgot Password?</small>
                </b-link>
              </div>
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false:null"
                    name="login-password"
                    placeholder="Password"
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Get OTP</label>
              </div>
            <div class="input-group mb-1">
              <input type="text" class="form-control mr-1 disabled-input" disabled placeholder="Send To XXXXXX5075">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send OTP</button>
            </div>
            <div class="input-group otp-input">
              <input type="number" class="form-control mr-1" placeholder="0">
              <input type="number" class="form-control mr-1" placeholder="0">
              <input type="number" class="form-control mr-1" placeholder="0">
              <input type="number" class="form-control mr-1" placeholder="0">
              <input type="number" class="form-control mr-1" placeholder="0">
              <input type="number" class="form-control mr-1" placeholder="0">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
            </div>
            </b-form-group>
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Token No</label>
              </div>
            <div class="input-group mb-1">
              <input type="text" class="form-control" placeholder="TK789632">
            </div>
            </b-form-group>
            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="remember-me"
                v-model="status"
                name="checkbox-1"
              >
                Remember Me
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-link :to="{ path: '/super-dashboard'}"
          class="font-weight-bold"
        ><b-button
              variant="primary"
              type="submit"
              block
            >
              Sign in
            </b-button></b-link>
          </b-form>
        </validation-observer>
      </b-card>
      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BButton, BForm, BFormInput, BFormGroup, BCard, BLink, BCardTitle, BCardText, BInputGroup, BInputGroupAppend, BFormCheckbox,
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  components: {
    // BSV
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
    BCard,
    BCardTitle,
    BLink,
    VuexyLogo,
    BCardText,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      userEmail: '',
      password: '',
      status: '',
      phone: '',
      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
<style scoped>
.auth-wrapper .brand-logo .brand-text {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0;
    color: #fff !important;
}
.disabled-input{
  color: #fff;
  font-size: 14px !important;
}
.disabled-input::-webkit-input-placeholder {
  color: #fff !important;
  font-size: 13px !important;
}
.disabled-input:-moz-placeholder {
  color: #fff !important;
  font-size: 13px !important;
}
.disabled-input:-ms-input-placeholder {
  color: #fff !important;
  font-size: 13px !important;
}
.disabled-input:-moz-placeholder {
  color: #fff !important;
  font-size: 13px !important;
}
</style>
