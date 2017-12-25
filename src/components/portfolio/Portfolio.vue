<template>
    <div>
        <crypto-coin v-for="coin in coins" :key="coin.id" :coin="coin">
        </crypto-coin>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import CryptoCoin from './CryptoCoin';

    export default {
        computed: {
            ...mapGetters({
                coins: 'coinPortfolio'
            })
        },
        components: {
            CryptoCoin
        }
    }
</script>
 
<style scoped>

</style>