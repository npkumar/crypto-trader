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
  components: {
    CryptoCoin
  },
  computed: {
    cryptoCoins() {
      return this.$store.getters.coins
    }
  }
}
</script>
