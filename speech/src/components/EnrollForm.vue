<template>
  <div class="enrollForm">
  	<form id="h_loginForm" v-on:submit.prevent="submitForm">
				<div class="form-inline h_inline">
					<label>姓名：</label>
					<input class="form-control required" id="stuname" type="text" name="stuname"/>
				</div>
				<div class="form-inline h_inline">
					<label>手机：</label>
					<input class="form-control" id="stutel" type="text" name="stutel"/>
				</div>
				<div class="form-inline h_inline">
					<label>学校名：</label>
					<input class="form-control" id="stushool" type="text" name="stushool"/>
				</div>
				<button class="btn btn-warning center-block h_submit">提交</button>
			</form>
  </div>
</template>

<script>

export default {
  name: 'enrollForm',
  data () {
    return {
    }
  },
  methods:{
  	submitForm:function(index){
  		//自定义验证规则以及提示文字
				jQuery.validator.addMethod("phone", function(value, element) {   
				    var tel = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
				    return this.optional(element) || (tel.test(value));
				}, "请正确填写手机号");
				$("#h_loginForm").validate({
					rules:{
						stutel:{
							phone:true,
						},
					},
				});
				//点击提交表单的按钮
					if($("#h_loginForm").valid()){
						var account = $("input[name=account]").val();
						var password = $("input[name=password]").val();
						var auth = $("input[name=auth]").val();
						 $.ajax({
			                type: 'post',
			                url: 'demo.php',
			                data :{
                                account :account,
                                password :password,
                                auth:auth
                           },
			                success: function(data) {
			                    alert("ok");
			                }
			            });
					}
					var res = $("#h_loginForm .form-control");
			    	for(var i=0;i<res.length;i++){
			    		if(!$(res[i]).valid()){
			    			$(res[i]).focus();
			    			return;
			    		}
			    	}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enrollForm{
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
