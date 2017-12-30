<template>
  <div>
    <h1>Your Crypto Portfolio</h1>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </div> 
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds;
    }
  }
}
</script>
