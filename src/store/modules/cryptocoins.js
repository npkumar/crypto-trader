import coins from '../../data/cryptocoins';

const state = {
  coins: []
};

const mutations = {
  'SET_COINS' (state, coins) {
    state.coins = coins;
  },
  'RND_COINS' (state) {
    state.coins.forEach(coin => {
      coin.price = Math.round(coin.price * ( 1 + Math.random() - 0.2));
    });
  }
}

const actions = {
  buyCoin: ({ commit }, order) => {
    commit('BUY_COIN', order);
  },
  initCoins: ({ commit }) => {
    commit('SET_COINS', coins)
  },
  randomizeCoins: ({ commit }) => {
    commit('RND_COINS')
  }
}

const getters = {
  coins: state => {
    return state.coins;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}