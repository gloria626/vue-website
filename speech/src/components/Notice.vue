
<template>
  <div class="rule">
  	<h4>赛制介绍</h4>
  	<p v-html="abouttxt"></p>
  </div>
</template>

<script>
export default {
  name: 'rule',
  data () {
    return {
	  	abouttxt:"这是赛制介绍........"
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rule{
	width:1000px;
	height:600px;
	margin-left: 20px;
	background-color: #ccc;
	float: left;
	margin-top:60px;
}
ul{
	list-style-type: none;
  padding: 0;
}
li{
	display: inline-block;
	width:33.3%;
	cursor: pointer;
}
.active a{
	color: #fff;
}
a{
	color: #000000;
	text-decoration: none;
}
</style>
