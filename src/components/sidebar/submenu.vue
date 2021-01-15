<template>
    <div>
        <el-submenu :index="subVal.key" v-if="subVal.children">
            <template slot="title">
                <i v-if="subVal.icon" :class="subVal.icon"></i>
                <span>{{subVal.title}}</span>
            </template>
            <submenu v-for="item in subVal.children" :key="item.key" :subVal="item" />  
        </el-submenu>
        <el-menu-item v-else :index="subVal.key">
            <template slot="title">
                <i v-if="subVal.icon" :class="subVal.icon"></i>
                <span>{{subVal.title}}</span>
            </template>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: 'submenu',
    props: {
        subVal: {
            default: {},
            type: Object,
            required: true
        }
    },
    created() {
        // console.log(this.subVal);
    }
}
</script>

<style>

</style>