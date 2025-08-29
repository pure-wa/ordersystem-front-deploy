<template>
    <StoreTestComponentA/>
    <br><br><br>
    <StoreTestComponentB/>
</template>
<script>
import StoreTestComponentA from './6.StoreTestComponentA.vue';
import StoreTestComponentB from './6.StoreTestComponentB.vue';

    export default {
        components: {
            StoreTestComponentA, StoreTestComponentB
        },
        data() {
            return {

            }
        }
    }
</script>