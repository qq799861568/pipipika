<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2" disabled>消息中心</el-menu-item>
            <el-menu-item index="3" router="OtherIndex">其他
                <!-- <router-link to='/OtherIndex'>其他</router-link> -->
                </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                paths: {
                    "1": "BlogIndex",
                    "3": "OtherIndex"
                },
            }
        },
        methods : {
            handleSelect(key) {
                console.log()
                this.$router.push(this.paths[key]);
            },
        }
    }
</script>
<style lang="scope">

</style>