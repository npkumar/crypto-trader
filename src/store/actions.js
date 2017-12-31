import Vue from 'vue';

export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(data => {
            data = data.body;
            console.log(data)
            if (data) {
                const coins = data.coins;
                const funds = data.funds;
                const coinPortfolio = data.coinPortfolio;

                const portfolio = {
                    coinPortfolio,
                    funds
                };

                commit('SET_COINS', coins);
                commit('SET_PORTFOLIO', portfolio);
            }
        });
}