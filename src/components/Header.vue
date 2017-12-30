<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Cryto Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/cryptocoins" activeClass="active" tag="li"><a>Crypto Coins</a></router-link>
        </ul>

        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown"
            :class="{open: isDropdownOpen}"
            @click="isDropdownOpen=!isDropdownOpen">
            <a 
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown" 
              role="button"
              aria-haspopup="true"
              aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeCoins'
    ]),
    endDay() {
      this.randomizeCoins();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        coinPortfolio: this.$store.getters.coinPortfolio,
        coins: this.$store.getters.coins,
      }
      this.$http.put('data.json', data);
    }
  }
}
</script>
