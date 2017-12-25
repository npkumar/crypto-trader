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
            v-model="quantity"/>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyCoin"
            :disabled="quantity <= 0 || !!Number.isInteger(quantity)"
            >Buy</button>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['coin'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    buyCoin() {
      const order = {
        coinId: this.coin.id,
        coinPrice: this.coin.price,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
}
</script>
