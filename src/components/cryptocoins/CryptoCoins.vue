<template>
  <div>
    <crypto-coin
      v-for="(coin, i) in cryptoCoins"
      :coin="coin"
      :key="i">
    </crypto-coin>
  </div>
</template> 

<script>
import CryptoCoin from './CryptoCoin.vue'
export default {
  data () {
    return {
      cryptoCoins: [
        { id: 1, name: 'Bitcoin', price: 11000 },
        { id: 2, name: 'Ethereum', price: 1100 },
        { id: 3, name: 'IOTA', price: 11 },
        { id: 4, name: 'Litecoin', price: 500 }
      ]
    }
  },
  components: {
    CryptoCoin
  }
}
</script>
