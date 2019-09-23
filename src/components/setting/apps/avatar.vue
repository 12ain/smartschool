<template>
<div class="container">
    <mt-header fixed title="上传头像">
            <router-link to="/account" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
    </mt-header>
    <m-up-loader :src="src" :info="userInformation"></m-up-loader>
</div>
</template>

<script>
import Vue from "vue";
import store from "../../../store/store";
import { mapState, mapMutations } from "vuex";
import mUpLoader from "../../common/UpLoader"
export default {
components: {
    mUpLoader,
},
props: {

},
data() {
return {
    src: 'http://106.12.189.19//user/update',
}
},
computed: {
    ...mapState(["userInformation"])
},
watch: {

},
created() {

},
mounted() {

},
methods: {

}
}
</script>

<style scoped lang="scss">

</style>