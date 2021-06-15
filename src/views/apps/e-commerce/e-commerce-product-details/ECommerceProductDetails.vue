<template>
  <section class="app-ecommerce-details">

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="product === undefined"
    >
      <h4 class="alert-heading">
        Error fetching product data
      </h4>
      <div class="alert-body">
        No item found with this item slug. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-e-commerce-shop'}"
        >
          Shop
        </b-link>
        for other items.
      </div>
    </b-alert>

    <!-- Content -->
    <b-card
      v-if="product"
      no-body
    >
      <b-card-body>
        <b-row class="my-2">

          <!-- Left: Product Image Container -->
          <b-col
            cols="12"
            md="5"
            class="d-flex align-items-center justify-content-center mb-2 mb-md-0 product-details-bg"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-img
                :src="product.image"
                :alt="`Image of ${product.name}`"
                class="product-img"
                fluid
              />
            </div>
          </b-col>

          <!-- Right: Product Details -->
          <b-col
            cols="12"
            md="7"
          >

            <!-- Product Name -->
            <h4>{{ product.name }}</h4>

            <!-- Product Brand -->
            <b-card-text class="item-company mb-0">
              <span>by</span>
              <b-link class="company-name">
                {{ product.brand }}
              </b-link>
            </b-card-text>

            <!-- Price And Ratings -->
            <div class="ecommerce-details-price d-flex flex-wrap mt-1">
              <h4 class="item-price mr-1">
                ${{ product.price }}
              </h4>
            </div>

            <!-- Avability -->
            <b-card-text>Available - <span class="text-success">In stock</span></b-card-text>

            <!-- Product Description -->
            <b-card-text>{{ product.description }}</b-card-text>
          </b-col>
        </b-row>
      </b-card-body>

      <!-- Static Content -->
      <e-commerce-product-details-item-features />

      <!-- Static Content -->
      <!-- Slider: Related Products -->
      <!-- <e-commerce-product-details-related-products /> -->
    </b-card>
  </section>
</template>

<script>
import { useRouter } from '@core/utils/utils'
import store from '@/store'
import { ref } from '@vue/composition-api'
import {
  BCard, BCardBody, BRow, BCol, BImg, BCardText, BLink, BAlert,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import ECommerceProductDetailsItemFeatures from './ECommerceProductDetailsItemFeatures.vue'
// import ECommerceProductDetailsRelatedProducts from './ECommerceProductDetailsRelatedProducts.vue'
import { useEcommerceUi } from '../useEcommerce'

export default {
  directives: {
    Ripple,
  },
  components: {
    // BSV
    BCard,
    BCardBody,
    BRow,
    BCol,
    BImg,
    BCardText,
    BLink,
    BAlert,

    // SFC
    ECommerceProductDetailsItemFeatures,
    // ECommerceProductDetailsRelatedProducts,
  },
  setup() {
    const { handleCartActionClick, toggleProductInWishlist } = useEcommerceUi()

    const product = ref(null)

    // Remote Data
    const fetchProduct = () => {
      // Get product  id from URL
      const { route } = useRouter()
      const productSlug = route.value.params.slug
      const productId = productSlug.substring(productSlug.lastIndexOf('-') + 1)

      store.dispatch('app-ecommerce/fetchProduct', { productId })
        .then(response => {
          product.value = response.data.product
        })
        .catch(error => {
          if (error.response.status === 404) {
            product.value = undefined
          }
        })
    }

    // UI
    const selectedColor = ref(null)

    fetchProduct()

    return {

      // Fetched Product
      product,

      // UI
      selectedColor,
      handleCartActionClick,
      toggleProductInWishlist,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce-details.scss";
</style>
