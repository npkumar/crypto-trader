<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ coin.name }}
          <small>(Price: ${{ coin.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficentFunds }"
        />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyCoin"
            :disabled="insufficentFunds || quantity <= 0 || !!Number.isInteger(quantity)"
            >{{ insufficentFunds ? 'Lack Funds': 'Buy' }}</button>
        </div> 
      </div>
    </div>
  </div>
</template>


<style scoped>
  .danger {
    border: 1px red solid;
  }
</style>

<script>
export default {
  props: ['coin'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficentFunds() {
      return this.quantity * this.coin.price > this.funds;
    }
  },
  methods: {
    buyCoin() {
      const order = {
        coinId: this.coin.id,
        coinPrice: this.coin.price,
        quantity: this.quantity
      };
      this.$store.dispatch('buyCoin', order);
      this.quantity = 0;
    }
  }
}
</script>
