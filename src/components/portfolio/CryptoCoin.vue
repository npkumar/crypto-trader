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
            v-model="quantity"/>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-danger"
            @click="sellCoin"
            :disabled="quantity <= 0 || !!Number.isInteger(quantity)"
            >Sell</button>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['coin'],
  data () {
    return {
      quantity: 0
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
