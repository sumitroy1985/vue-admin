<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link :to="{ path: '/super-dashboard'}" class="brand-logo">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1">
          Lazot Technologies Pvt Ltd
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-2"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            Welcome to Lazot World!
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account and start the adventure
          </b-card-text>
        <validation-observer
          ref="loginForm"
        >
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent
          >

            <!-- email -->
            <b-form-group
              label-for="adminid"
              label="Admin ID"
            >
              <validation-provider
                #default="{ errors }"
                name="Admin ID"
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
                  :class="errors.length > 0 ? 'is-invalid':null"
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
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: '',
      userEmail: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    validationForm() {
      this.$refs.loginValidation.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
      })
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
    color: #fff !important;
    margin-bottom: 0 !important;
    line-height: 40px;
}
.disabled-input{
  color: #fff !important;
  font-size: 14px !important;
  font-weight: 600;
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
.brand-logo .brand-text{
    line-height: 40px;
}
</style>
