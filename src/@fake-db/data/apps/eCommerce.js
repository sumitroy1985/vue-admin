import mock from '@/@fake-db/mock'
// eslint-disable-next-line object-curly-newline
import { paginateArray, sortCompare, randomDate, getRandomInt } from '@/@fake-db/utils'

const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
const nextWeek = new Date(nextDay.getTime() + 7 * 24 * 60 * 60 * 1000)

/* eslint-disable global-require */
const data = {
  products: [
    {
      id: 1,
      name: 'Smart Energy Meter',
      slug: 'vic-tsing-wireless-mouse-1',
      description:
        'Smart Energy Meter having Energy monitoring module, OLED Screen, 2 push Button switch, Smps etc',
      brand: 'Lazot',
      price: 1099,
      image: require('@/assets/images/pages/eCommerce/product27.jpg'),
      hasFreeShipping: true,
      rating: 3,
    },
    {
      id: 2,
      name: 'Plant Watering Controller',
      slug: 'bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2',
      description:
        'Plant Watering controller having Solenoid valve, Moisture sensor, Battery, Solar cell, LDR etc',
      brand: 'Lazot',
      price: 2490,
      image: require('@/assets/images/pages/eCommerce/product26.png'),
      hasFreeShipping: false,
      rating: 4,
    },
    {
      id: 3,
      name: 'IR Blaster',
      slug: 'willful-smart-watch-for-men-women-2020-3',
      description:
        'IR Blaster (Universal Remote) with temperature and humidity sensor',
      brand: 'Lazot',
      price: 2999,
      image: require('@/assets/images/pages/eCommerce/product25.png'),
      hasFreeShipping: true,
      rating: 5,
    },
    {
      id: 4,
      name: 'Curtain Controller',
      slug: 'ronyes-unisex-college-bag-bookbags-for-women-4',
      description:
        'Curtain Controller having Gear motor, Battery, motion sensor, LDR etc.',
      brand: 'Lazot',
      price: 2399,
      image: require('@/assets/images/pages/eCommerce/product24.png'),
      hasFreeShipping: true,
      rating: 2,
    },
    {
      id: 5,
      name: 'Tank Pump Controller',
      slug: 'toshiba-canvio-advance-2-tb-portable-external-hard-drive-5',
      description: 'Overhead Tank Pump Controller having water proof ultrasonic sensor, solar cell, Battery, Long range communication chip etc',
      brand: 'Lazot',
      price: 6999,
      image: require('@/assets/images/pages/eCommerce/product23.jpg'),
      hasFreeShipping: true,
      rating: 2,
    },
    {
      id: 6,
      name: 'RGB Controller',
      slug: 'tile-pro-high-performance-bluetooth-tracker-6',
      description:
        'RGB Controller with control of RGB Colour, Brightness & pre set Animation',
      brand: 'Lazot',
      price: 2999,
      image: require('@/assets/images/pages/eCommerce/product22.png'),
      hasFreeShipping: false,
      rating: 4,
    },
    {
      id: 7,
      name: 'Outdoor Lights',
      slug: 'bugani-m90-portable-bluetooth-speaker-7',
      description:
        'Outdoor Lights with control of RGB Colour, Brightness & pre set Animation',
      brand: 'Lazot',
      price: 5600,
      image: require('@/assets/images/pages/eCommerce/product21.jpeg'),
      hasFreeShipping: false,
      rating: 3,
    },
    {
      id: 8,
      name: 'Down Lights',
      slug: 'play-station-4-console-8',
      description:
        'Down Lights with control of RGB Colour, Brightness & pre set Animation',
      brand: 'Lazot',
      price: 3395,
      image: require('@/assets/images/pages/eCommerce/product20.jpg'),
      hasFreeShipping: false,
      rating: 4,
    },
    {
      id: 9,
      name: 'Mood Lights',
      slug: 'giotto-32oz-leakproof-bpa-free-drinking-water-9',
      description:
        'Mood Lights with control of RGB Colour, Brightness & pre set Animation',
      brand: 'Lazot',
      price: 1699,
      image: require('@/assets/images/pages/eCommerce/product19.jpeg'),
      hasFreeShipping: true,
      rating: 4,
    },
    {
      id: 10,
      name: 'Smart Bulbs',
      slug: 'oculus-quest-all-in-one-vr-10',
      description:
        'Smart Bulbs with control of RGB Colour, Brightness & pre set Animation',
      brand: 'Lazot',
      price: 6450,
      image: require('@/assets/images/pages/eCommerce/product18.jpg'),
      hasFreeShipping: false,
      rating: 1,
    },
    {
      id: 11,
      name: 'Environment Sensor',
      slug: 'handbags-for-women-large-designer-bag-11',
      description:
        'Environment Sensor with Temperature & Humidity Sensor, LDR, Air Quality & Air Pressure Sensor.',
      brand: 'Lazot',
      price: 3999,
      image: require('@/assets/images/pages/eCommerce/product17.png'),
      hasFreeShipping: true,
      rating: 3,
    },
    {
      id: 12,
      name: 'Smoke Sensor',
      slug: 'adidas-mens-tech-response-shoes-12',
      description:
        'Smoke Sensor with Fire & Smoke Sensor and Buzzer',
      brand: 'Lazot',
      price: 5459,
      image: require('@/assets/images/pages/eCommerce/product16.jpg'),
      hasFreeShipping: false,
      rating: 5,
    },
    {
      id: 13,
      name: 'Kitchen Sensor',
      slug: 'laptop-bag-13',
      description:
        'Kitchen Sensor with Flame & LPG Sensor, motion detector and 1 channel relay',
      brand: 'Lazot',
      price: 2999,
      image: require('@/assets/images/pages/eCommerce/product15.png'),
      hasFreeShipping: true,
      rating: 5,
    },
    {
      id: 14,
      name: 'Video Door Bell',
      slug: 'wireless-charger-5-w-max-14',
      description:
        'WiFi Video Door Bell with Two way talk & memory card',
      brand: 'Lazot',
      price: 1083,
      image: require('@/assets/images/pages/eCommerce/product14.jpg'),
      hasFreeShipping: true,
      rating: 3,
    },
    {
      id: 15,
      name: 'Baby Monitor',
      slug: '3-m-filtrete-vacuum-belt-for-select-hoover-t-series-upright-vacuums-15',
      description:
        'WiFi Baby monitor camera with two way talk & memory card',
      brand: 'Lazot',
      price: 999,
      image: require('@/assets/images/pages/eCommerce/product13.png'),
      hasFreeShipping: true,
      rating: 2,
    },
    {
      id: 16,
      name: 'Outdoor PTZ IP65',
      slug: '3-m-hoover-y-z-pet-micro-allergen-vacuum-bag-for-select-hoover-vacuums-3-pack-16',
      description:
        'WiFi Outdoor PTZ (Pan, Tilt & Zoom) camera with IP65 rating with two way talk & memory card',
      brand: 'Lazot',
      price: 7999,
      image: require('@/assets/images/pages/eCommerce/product12.jpg'),
      hasFreeShipping: false,
      rating: 3,
    },
    {
      id: 17,
      name: 'Outdoor Fixed IP65',
      slug: '72-9301-speaker-wire-harness-adapter-for-most-plymouth-dodge-and-mitsubishi-vehicles-multi-17',
      description:
        'WiFi Outdoor Fixed camera with IP65 rating with two way talk & memory card',
      brand: 'Lazot',
      price: 8199,
      image: require('@/assets/images/pages/eCommerce/product11.jpg'),
      hasFreeShipping: true,
      rating: 5,
    },
    {
      id: 18,
      name: 'Indoor PTZ',
      slug: 'acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18',
      description:
        'WiFi Indoor PTZ (Pan, Tilt & Zoom) Camera with two way talk & memory card',
      brand: 'Lazot',
      price: 8199,
      image: require('@/assets/images/pages/eCommerce/product10.jpg'),
      hasFreeShipping: false,
      rating: 4,
    },
    {
      id: 19,
      name: 'Indoor Fixed',
      slug: 'one-plus-7-pro-19',
      brand: 'Lazot',
      price: 1499,
      image: require('@/assets/images/pages/eCommerce/product9.jpg'),
      hasFreeShipping: false,
      rating: 4,
      description: 'WiFi Indoor Fixed Camera with two way talk & memory card',
    },
    {
      id: 20,
      name: 'Motion Detectors',
      slug: 'sony-4-k-ultra-hd-led-tv-20',
      brand: 'Lazot',
      price: 7999,
      image: require('@/assets/images/pages/eCommerce/product8.jpeg'),
      hasFreeShipping: false,
      rating: 5,
      description: 'Motion Detectors with Fingerprint sensor, RFID card, Alpha Numeric Key, Manual Key, Speaker, Battery etc.',
    },
    {
      id: 21,
      name: 'Close-open Sensors',
      slug: 'google-google-home-white-slate-fabric-21',
      brand: 'Lazot',
      price: 1259,
      image: require('@/assets/images/pages/eCommerce/product7.jpg'),
      hasFreeShipping: true,
      rating: 4,
      description: 'Close-Open Sensors with Fingerprint sensor, RFID card, Alpha Numeric Key, Manual Key, Speaker, Battery etc.',
    },
    {
      id: 22,
      name: 'Cupboard Locks',
      slug: 'switch-pro-controller-22',
      brand: 'Lazot',
      price: 429,
      image: require('@/assets/images/pages/eCommerce/product6.jpg'),
      hasFreeShipping: false,
      rating: 3,
      description: 'Cupboard Locks with Fingerprint sensor, RFID card, Alpha Numeric Key, Manual Key, Speaker, Battery etc.',
    },
    {
      id: 23,
      name: 'Smart Locks',
      slug: 'apple-mac-book-air-latest-model-13-3-display-silver-23',
      brand: 'Lazot',
      price: 999,
      image: require('@/assets/images/pages/eCommerce/product-5.png'),
      hasFreeShipping: false,
      rating: 4,
      description: 'Smart Locks various types and sizes with Fingerprint sensor, RFID card, Alpha Numeric Key, Manual Key, Speaker, Battery etc.',
    },
    {
      id: 24,
      name: 'Smart Modular Switch & Regulator',
      slug: 'one-odio-a71-wired-headphones-24',
      brand: 'Lazot',
      price: 499,
      image: require('@/assets/images/pages/eCommerce/product4.jpg'),
      hasFreeShipping: true,
      rating: 3,
      description: 'This is Lazot patented product which provides enhanced Technological features compared to any other Smart Switching device available globally.',
    },
    {
      id: 25,
      name: 'Touch Panels',
      slug: 'apple-i-mac-27-inch-25',
      brand: 'Lazot',
      price: 999.99,
      image: require('@/assets/images/pages/eCommerce/product3.png'),
      hasFreeShipping: true,
      rating: 4,
      description: 'Touch Panels are made of High quality Fibre Glass & gives Premium appearance. Can fit on any existing GI Boxes & includes both Electrical Plugs and Mobile charging (Usb) points.',
    },
    {
      id: 26,
      name: 'Touch Switches',
      slug: 'apple-i-phone-11-64-gb-black-26',
      brand: 'Lazot',
      price: 669.99,
      image: require('@/assets/images/pages/eCommerce/product2.png'),
      hasFreeShipping: true,
      rating: 5,
      description: 'Touch Switches comes in 2 modules and can be retrofit with existing switch boards depending upon interlocking fitment slots.',
    },
    {
      id: 27,
      name: 'Insert Modules',
      slug: 'apple-watch-series-5-27',
      brand: 'Lazot',
      price: 600,
      image: require('@/assets/images/pages/eCommerce/product1.jpeg'),
      hasFreeShipping: true,
      rating: 4,
      description: 'Switching Modules are installed behind existing switch boards. Electrical Switches & Regulators are connected to these Modules and can also be operated through Mobile App.',
    },
  ],
  userWishlist: [
    { id: 1, productId: 26 },
    { id: 2, productId: 23 },
    { id: 3, productId: 11 },
    { id: 4, productId: 10 },
    { id: 5, productId: 5 },
    { id: 6, productId: 8 },
    { id: 7, productId: 9 },
    { id: 8, productId: 13 },
    { id: 9, productId: 17 },
  ],
  userCart: [
    { id: 1, productId: 27, qty: 1 },
    { id: 2, productId: 21, qty: 1 },
    { id: 3, productId: 26, qty: 1 },
    { id: 4, productId: 25, qty: 1 },
    { id: 5, productId: 23, qty: 1 },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/products').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', sortBy = 'featured', perPage = 9, page = 1 } = config.params

  const queryLowered = q.toLowerCase()

  const filteredData = data.products.filter(product => product.name.toLowerCase().includes(queryLowered))

  let sortDesc = false
  const sortByKey = (() => {
    if (sortBy === 'price-desc') {
      sortDesc = true
      return 'price'
    }
    if (sortBy === 'price-asc') {
      return 'price'
    }
    sortDesc = true
    return 'id'
  })()

  const sortedData = filteredData.sort(sortCompare(sortByKey))
  if (sortDesc) sortedData.reverse()

  const paginatedData = JSON.parse(JSON.stringify(paginateArray(sortedData, perPage, page)))

  paginatedData.forEach(product => {
    /* eslint-disable no-param-reassign */
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1
    /* eslint-enable */
  })

  return [
    200,
    {
      products: paginatedData,
      total: filteredData.length,
      userWishlist: data.userWishlist,
      userCart: data.userCart,
    },
  ]
})

// ------------------------------------------------
// GET: Return Single Product
// ------------------------------------------------
mock.onGet(/\/apps\/ecommerce\/products\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.products.findIndex(p => p.id === productId)
  const product = data.products[productIndex]

  if (product) {
    // Add data of wishlist and cart
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1

    // * Add Dummy data for details page
    product.colorOptions = ['primary', 'success', 'warning', 'danger', 'info']

    return [200, { product }]
  }
  return [404]
})

// ------------------------------------------------
// GET: Return Wishlist Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/wishlist').reply(() => {
  const products = data.userWishlist.map(wishlistProduct => {
    const product = data.products.find(p => p.id === wishlistProduct.productId)
    product.isInCart = data.userCart.findIndex(p => p.productId === wishlistProduct.productId) > -1
    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// GET: Return Cart Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/cart').reply(() => {
  const products = data.userCart.map(cartProduct => {
    const product = data.products.find(p => p.id === cartProduct.productId)

    // Other data
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === cartProduct.productId) > -1
    product.qty = cartProduct.qty
    product.shippingDate = randomDate(nextDay, nextWeek)
    product.offers = getRandomInt(1, 4)
    product.discountPercentage = getRandomInt(3, 20)

    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// POST: Add Item in user Cart
// ------------------------------------------------
mock.onPost('/apps/ecommerce/cart').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userCart
  let lastId = 0
  if (length) lastId = data.userCart[length - 1].i

  data.userCart.push({
    id: lastId + 1,
    productId,
    qty: 1,
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Cart
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/cart\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userCart.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userCart.splice(productIndex, 1)

  return [200]
})

// ------------------------------------------------
// POST: Add Item in user Wishlist
// ------------------------------------------------
mock.onPost('/apps/ecommerce/wishlist').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userWishlist
  let lastId = 0
  if (length) lastId = data.userWishlist[length - 1].i

  data.userWishlist.push({
    id: lastId + 1,
    productId,
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Wishlist
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/wishlist\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userWishlist.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userWishlist.splice(productIndex, 1)

  return [200]
})
