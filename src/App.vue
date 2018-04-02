<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
    <header-layout :seller="seller"></header-layout>
    <div id='tab' class="tab">
    	<div class="item-tab">
    		<router-link :to="{path:'/good'}">商品</router-link>
    	</div>
    	<div class="item-tab">
    		<router-link :to="{path:'/commend'}">评价</router-link>
    	</div>
    	<div class="item-tab">
    		<router-link :to="{path:'/shop'}">商家</router-link>
    	</div>    	   
    </div>
    <div id="content">
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
	import headerLayout from './components/header/headerLayout.vue'
	export default {
		created:function(){
			this.$http.get(this.$store.state.api.getData).then(function(response){
				//成功
				//seller
				let seller = response.data.seller;
				this.seller = seller
			},function(err){
				//失败
				console.log(err)
			})
		},
	  name: 'App',
	  data:function(){
	  	return {
	  		seller:''
	  	}
	  },
	  components:{
	  	headerLayout,
	  }
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.tab{
	display:flex;
	flex-wrap:wrap;
	line-height: 40px;
	border-bottom: 1px solid rgba(7,17,27,0.1);
}
.tab .item-tab{
	flex-grow:1;
	height: 40px;
	font-size: 14px;
	color: rgb(77,85,93);
	text-align: center;
}

.tab .item-tab a{
	width: 100%;
	height: 100%;
	text-decoration:none;
	display: block;
}
.tab .item-tab .router-link-active{
	color: rgb(240,20,20);
}
</style>
