<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ coin.name }}
          <small>(Price: ${{ coin.price }} | Quantity: {{ coin.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientQuantity }"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-danger"
            @click="sellCoin"
            :disabled="insufficientQuantity || quantity <= 0 || !!Number.isInteger(quantity)"
            >{{ insufficientQuantity ? 'Lack Coins': 'Sell' }}</button>
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
import { mapActions } from 'vuex';

export default {
  props: ['coin'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.coin.quantity;
    }
  },
  methods: { 
    ...mapActions({
      placeSellOrder: 'sellCoin'
    }),
    sellCoin() {
      const order = {
        coinId: this.coin.id,
        coinPrice: this.coin.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

