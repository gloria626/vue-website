<template>
  <div id="student">
    <div class="wrapper">
    	<LeftNav></LeftNav>
    	<router-view></router-view>
    	<div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav'


export default {
  name: 'student',
  components: {
    LeftNav,
  }
}
</script>

<style>

</style>
