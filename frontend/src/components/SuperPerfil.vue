<template>
    <div>superman</div>
    <div v-for="(sup,index) in superData" :key="index">
        <p>{{sup.title}}</p>
    </div>
</template>

<script>
import { getPosts } from '../service/movinstagram-service.js';
export default {
    data(){
        return{
            superData: []
        }
    },
    mounted(){
        getPosts().then(resp => {
            this.superData = resp;
            console.log(resp);
        });
    }
}
</script>

<style scoped>

</style>