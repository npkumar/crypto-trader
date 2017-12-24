import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import CryptoCoins from './components/cryptocoins/CryptoCoins.vue'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/cryptocoins',
    component: CryptoCoins
  }
]