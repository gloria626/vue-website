
<template>
  <div class="home">
  	<h4>首页</h4>
  	<p v-html="hometxt"></p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
	  	hometxt:"这是首页"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
	width:1000px;
	height:600px;
	margin-left: 20px;
	background-color: #ccc;
	float: left;
	margin-top:60px;
}
</style>
