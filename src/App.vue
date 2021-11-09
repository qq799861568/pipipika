<template>
  <div>
    <el-row>
      <el-col :span="14" :offset="5">
        <el-container>
          <el-header>
            <!-- 标签组件 -->
            <NavMenu></NavMenu>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import NavMenu from './components/NavMenu.vue'
  export default {
    name: 'App',
    components: {
      // HelloWorld
      NavMenu
    }
  }
</script>

<style>
</style>