import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [
      {
        id: 1,
        name: 'IRIS INITIAL NECKLACE',
        image: 'https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360',
        size: '14-16',
        "color": {
          "id": 1,
          "name": "Gold",
          "bgColor": "gold"
        },
        "charm": {
          "id": 2,
          "image": "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_29.png",
          "name": "Aquarius"
        },
        letter: 'B',
        price: 2849,
        quantity: 1
      },
      {
        id: 2,
        name: 'IRIS INITIAL NECKLACE',
        image: 'https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360',
        size: '14-16',
        letter: 'A',
        "charm": {
          "id": 2,
          "image": "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_29.png",
          "name": "Aquarius"
        },
        "color": {
          "id": 1,
          "name": "Gold",
          "bgColor": "gold"
        },
        price: 2849,
        quantity: 1
      },
    ],
    products: [
      {
        id: 1,
        name: "Abella",
        sid: "abella",
        reviews: 118,
        rating: 3.7,
        tag: "-15% Off",
        mrp: 10000,
        price: 8000,
        image: "https://whitehathi.com/cdn/shop/files/IMG_9856.jpg?v=1706217863&width=823",
        images: [
          "https://whitehathi.com/cdn/shop/files/IMG_9856.jpg?v=1706217863&width=823",
          "https://whitehathi.com/cdn/shop/files/0N8A0936.jpg?v=1706217863&width=823",
          "https://whitehathi.com/cdn/shop/products/DAJ06527.jpg?v=1706217863",
          "https://whitehathi.com/cdn/shop/products/image12_c890a190-5d48-42cf-bbec-6162c706036e.jpg?v=1706217863&width=823",
          "https://whitehathi.com/cdn/shop/products/WhatsAppImage2022-02-09at16.58.31_1_120fdb7f-6e86-4d22-b7c3-31f9326d500f.jpg?v=1706217863&width=823",
          "https://whitehathi.com/cdn/shop/files/0N8A0937.jpg?v=1706217863&width=823",
        ],
        colors: [
          { id: 1, name: "Gold", bgColor: "gold" },
          { id: 2, name: "Rose Gold", bgColor: "mistyrose" },
          { id: 3, name: "Silver", bgColor: "grey" },
        ],
        offers: [
          'Get FLAT 15% OFF',
          '1 Year Anti-Tarnish Warranty',
          'Free Silver Pendant on Prepaid orders above ₹3000',
          'Easy Returns & Exchange'
        ],
        alphabet: [
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
          'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        charms: [
          { id: 1, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_26.png", name: 'Capricorn' },
          { id: 2, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_29.png", name: 'Aquarius' },
          { id: 3, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_32.png", name: 'Pisces' },
          { id: 4, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_34.png", name: 'Aries' },
          { id: 5, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_27.png", name: 'Taurus' },
          { id: 6, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_30.png", name: 'Gemini' },
          { id: 7, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_33.png", name: 'Cancer' },
          { id: 8, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_35.png", name: 'Leo' },
          { id: 9, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_28.png", name: 'Virgo' },
          { id: 10, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_31.png", name: 'Libra' },
          { id: 11, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_36.png", name: 'Scorpio' },
          { id: 12, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_37.png", name: 'Sagittarius' }
        ],
        badges: [
          { name: "Easy returns", image: "/img/easy.png" },
          { name: "1 Year warranty", image: "/img/warranty.png" },
          { name: "Loved by 3000+ womens", image: "/img/loved.png" },
          { name: "Anti Tarnish Waterproof", image: "/img/waterproof.png" },
        ],
        isHovered: false,
        type: "Necklace",
        collection: "",
      },
      {
        id: 2,
        name: "Iris Initial Necklace",
        sid: "iris-initial-necklace",
        mrp: 8000,
        reviews: "22",
        tag: "",
        price: 6000,
        image: "https://whitehathi.com/cdn/shop/products/DAJ06769...1.jpg?v=1687943574&width=360",
        images: [
          "https://whitehathi.com/cdn/shop/products/DAJ06769...1.jpg?v=1687943574&width=360",
          "https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360",
        ],
        isHovered: false,
        type: "Bracelets",
        collection: ""
      },
      {
        id: 3,
        name: "Charms Necklace",
        sid: "charms-necklace",
        mrp: 4500,
        reviews: "2",
        tag: "New-in",
        price: 7000,
        image: "https://whitehathi.com/cdn/shop/files/IMG_3090.jpg?v=1713335959&width=360",
        images: [
          "https://whitehathi.com/cdn/shop/files/IMG_3090.jpg?v=1713335959&width=360",
          "https://whitehathi.com/cdn/shop/files/IMG_4188.jpg?v=1713335959&width=360"
        ],
        isHovered: false,
        type: "Earrings",
        collection: ""
      },
      {
        id: 4,
        name: "Love Initial necklace",
        sid: "love-initial-necklace",
        mrp: 5500,
        reviews: "",
        tag: "-15% Off",
        price: 5000,
        image: "https://whitehathi.com/cdn/shop/files/0N8A0918.jpg?v=1702791455&width=360",
        images: [
          "https://whitehathi.com/cdn/shop/files/0N8A0918.jpg?v=1702791455&width=360",
          "https://whitehathi.com/cdn/shop/files/0N8A0917.jpg?v=1702791429&width=360"
        ],
        isHovered: false,
        type: "Jewellery",
        collection: ""
      },
      {
        id: 5,
        name: "Love Blossom Bracelet in 92.5 Sterling Silver",
        sid: "love-blossom-bracelet-in-92-sterling",
        mrp: 3882,
        reviews: "",
        tag: "-15% Off",
        price: 3106,
        image: "https://whitehathi.com/cdn/shop/files/Love_Blossom_Bracelet_3.jpg?v=1729846946&width=823",
        images: [
          "https://whitehathi.com/cdn/shop/files/Love_Blossom_Bracelet_3.jpg?v=1729846946&width=823",
          "https://whitehathi.com/cdn/shop/files/31_0cdd39c2-282d-40af-a97e-21028534c2bd.jpg?v=1729846889&width=823",
        ],
        isHovered: false,
        type: "Jewellery",
        collection: ""
      },
      {
        id: 5,
        name: "Grace Halo Bracelet in 92.5 Sterling Silver",
        sid: "grace-halo-bracelet-in-92-sterling-silver",
        mrp: 3882,
        reviews: "",
        tag: "-15% Off",
        price: 3106,
        image: "https://whitehathi.com/cdn/shop/files/3_0e53ed06-3674-4a3c-8889-1de902c80b7a.jpg?v=1729848034&width=823",
        images: [
          "https://whitehathi.com/cdn/shop/files/3_0e53ed06-3674-4a3c-8889-1de902c80b7a.jpg?v=1729848034&width=823",
          "https://whitehathi.com/cdn/shop/files/Grace_Halo_Bracelet_1.jpg?v=1729848024&width=823",
        ],
        isHovered: false,
        type: "Bracelets",
        collection: ""
      },
      {
        id: 5,
        name: "Timeless Infinity Necklace in 92.5 Sterling Silver",
        sid: "timeless-infinity-nekclace-in-92-sterling-silver",
        mrp: 2940,
        reviews: "",
        tag: "-15% Off",
        price: 2352,
        image: "https://whitehathi.com/cdn/shop/files/7_c3b225a2-645b-44d9-b0ef-5b6973eb3e1f.jpg?v=1730176201&width=823",
        images: [
          "https://whitehathi.com/cdn/shop/files/7_c3b225a2-645b-44d9-b0ef-5b6973eb3e1f.jpg?v=1730176201&width=823",
          "https://whitehathi.com/cdn/shop/files/8_d7d5d1b2-87e7-432f-bea3-430e97fdbedd.jpg?v=1730176201&width=823",
        ],
        isHovered: false,
        type: "Bracelets",
        collection: ""
      },
    ],
    collections: [
      {
        id: 1,
        title: 'TIMELESS',
        image: 'https://whitehathi.com/cdn/shop/files/timeless-image.jpg?v=1689011942',
        description: 'Classic jewelry pieces that never go out of style'
      },
      {
        id: 2,
        title: 'PERSONALISED',
        image: 'https://whitehathi.com/cdn/shop/files/Rectangle_24.jpg?v=1678790439',
        description: 'Custom-made jewelry pieces just for you'
      },
      {
        id: 3,
        title: 'KRYSTAL CANDY',
        image: 'https://whitehathi.com/cdn/shop/files/Krystal-Candy.jpg?v=1689012098',
        description: 'Vibrant and colorful statement pieces'
      },
      {
        id: 4,
        title: 'MANGALSUTRA',
        image: 'https://whitehathi.com/cdn/shop/files/Mangalsutra.jpg?v=1689012220',
        description: 'Traditional Indian wedding necklaces'
      }
    ],
    savedProducts: [],
  },
  getters: {
    getCart: state => state.cart,
    getProducts: state => state.products,
    getProduct: (state) => (productId) => {
      let index = state.products.findIndex(product => product.sid === productId);
      return state.products[index];
    },
    getCollections: state => state.collections,
    getSavedProducts: state => state.savedProducts,
  },
  mutations: {
    ADD_TO_CART(state, data) {
      state.cart.push(data);
    },
    saveProduct(state, data) {
      state.savedProducts.push(data)
    },
    unSaveProduct(state, productIndex) {
      state.savedProducts.splice(productIndex, 1)
    },
  },
  actions: {
    AddToCart({ commit }, data) {
      console.log('action', data)
      commit('ADD_TO_CART', data);
    },
    saveProduct({ commit }, data) {
      commit('saveProduct', data)
    },
    unSaveProduct({ commit }, productIndex) {
      commit('unSaveProduct', productIndex)
    },
  },
  modules: {},
});
