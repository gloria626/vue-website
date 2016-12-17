<template>
  <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
  <div class="container topnav">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target="#bs-exapmle-navbar-collapse-1">
        <span class="sr-only">Toggle Navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand topnav" href="/home">演讲比赛</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li>
        	<router-link to="/home" active-class="active">首页</router-link>
        </li>
        <li>
        	<router-link to="/about" active-class="active">大赛介绍</router-link>
        </li>
        <li>
        	<router-link to="/rule" active-class="active">赛制介绍</router-link>
        </li>
        <li>
        	<router-link to="/news" active-class="active">新闻动态</router-link>
        </li>
        <li>
        	<router-link to="/notice" active-class="active">大赛公告</router-link>
        </li>
        <li>
        	<router-link to="/student/enrollForm" active-class="active">学生入口</router-link>
        </li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
	margin:0
}
.container{
	width:1030px;
}
</style>
