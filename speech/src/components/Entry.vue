<!--template>
  <div class="rightContent" id="right">
  	<h4>演讲主题</h4>
  	<ul>
  		<li v-for="(item,index) in items" v-html="item.title" v-on:click="returnIndex(index)"></li>
  	</ul>
  	<p v-html="items[show_index].text"></p>
  </div>
</template>

<script>
import Vue from 'vue'
new Vue({
  el: '#right',
  data:{
  	items:[
  		{title:"阳光校园",isChosen:false,text:"校园，是青少年学习的天地，也是他们生活的地方，就像是一个社会的缩影。"},
  		{title:"中国脊梁",isChosen:false,text:"建国以来，我国在国防建设方面取得了举世瞩目的成就。"},
  		{title:"传统文化",isChosen:false,text:"中华各族人民共同创造的优秀传统文化和美德源远流长、博大精深，是中华民族生生不息、"},
  	],
  	show_index:0
  },
  methods:{
  	returnIndex:function(index){
  		for(var i=0;i<this.items.length;i++){
							this.items[i].isChoosen = false;
						}
  		 this.items[index].isChosen = true;
  		 this.show_index = index;
  	}
  }
})
</script>
<script>
export default {
  name: 'rightContent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}


</script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--style scoped>
.rightContent{
	width:880px;
	height:600px;
	margin-left: 20px;
	background-color: #ccc;
}

.active a{
	color: #fff;
}
a{
	color: #000000;
	text-decoration: none;
}
</style-->

<template>
  <div class="rightContent">
  	<h4>演讲主题</h4>
  	<ul>
  		<li v-for="(item,index) in items" v-html="item.title" v-on:click="returnIndex(index)"></li>
  	</ul>
  	<p v-html="items[show_index].text"></p>
  </div>
</template>

<script>
export default {
  name: 'rightContent',
  data () {
    return {
     items:[
	  		{title:"阳光校园",isChosen:false,text:"校园，是青少年学习的天地，也是他们生活的地方，就像是一个社会的缩影。"},
	  		{title:"中国脊梁",isChosen:false,text:"建国以来，我国在国防建设方面取得了举世瞩目的成就。"},
	  		{title:"传统文化",isChosen:false,text:"中华各族人民共同创造的优秀传统文化和美德源远流长、博大精深，是中华民族生生不息、"},
	  	],
	  	show_index:0
    }
  },
  methods:{
  	returnIndex:function(index){
  		for(var i=0;i<this.items.length;i++){
							this.items[i].isChoosen = false;
						}
  		 this.items[index].isChosen = true;
  		 this.show_index = index;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightContent{
	width:880px;
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
