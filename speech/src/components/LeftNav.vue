<template>
  <div class="leftNav">
  	<ul>
  		<li><router-link to="/student/enrollForm" active-class="active">报名表</router-link></li>
  		<li><router-link to="/student/entry" active-class="active">参赛作品</router-link></li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftNav{
	width:100px;
	height:600px;
	background-color: #ccc;
	float: left;
	margin-top:60px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  width:100%;
  font-size: 16px;
  height: 50px;
	line-height: 50px;
}

.active{
	background-color: #204D74;
	color: #fff;
	
}
a{
	color: #000000;
	text-decoration: none;
	display: inline-block;
	width: 100%;
}
</style>
