<template>
	<div class="header">
		<div class='header-content'>
			<div class="content-img">
				<img :src="seller.avatar" />
			</div>
			<div class="content-info">
				<div class="content-title">
					<span class="title-brand">
						
					</span>
					<span class="title-name">
						{{seller.name}}
					</span>
				</div>
				<div class="content-send">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="content-sale">
					<span class="sale-img" :class="'sale-img-sel-' + seller.supports[0].type"></span><span class="sale-text">
						{{seller.supports[0].description}}
					</span>
				</div>
			</div>
			<div v-if="seller.supports" class="sale-count" @click="showDetail">
				<span class="sale-count-numer">
					{{seller.supports.length}}个
				</span><i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="header-notice" @click="showDetail">
			<span class="notice-img"></span><span class="notice-sale">
				{{seller.bulletin}}
			</span><i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="back-img">
			<img width="100%" height="100%" :src="seller.avatar" />
		</div>
		<transition name='fade'>
		<div v-show="showStatus" class="detail" tran>
			<div class="detail-content clearfix">
				<div class="detail-content-main">
					<h1 class="main-name">{{ seller.name }}</h1>
					<div class="star-wrapper">
						<star :size='size' :score='seller.score'></star>
					</div>
					<div class="main-sale-title">
						<div class="sale-left-line"></div>
						<div class="sale-title">优惠信息</div>
						<div class="sale-left-right"></div>
					</div>

					<ul v-if="seller.supports" class="main-sale-content">
						<li v-for="(item, index) in seller.supports" class="sale-item">
							<span class="sale-img" :class="'sale-img-sel-' + item.type">
								
							</span>
							<span class="sale-text">
								{{item.description}}
							</span>
						</li>
					</ul>
					<div class="main-sale-title">
						<div class="sale-left-line"></div>
						<div class="sale-title">商家公告</div>
						<div class="sale-left-right"></div>
					</div>
					<div class="main-notice">
						<p class="main-notice-content">{{seller.bulletin}}</p>
					</div>
				</div>
			</div>
			<div class="detail-close">
				<i class="icon-close" @click="closeDetail"></i>
			</div>
		</div>
		</transition>
	</div>
</template>

<script>
	import star from '@/components/star/star.vue'
	export default {
		props: ['seller','appblur'],
		name: 'headerLayout',
		data:function(){
			return {
				showStatus:false,
				size:24
			}
		},
		methods:{
			showDetail:function(){
				this.showStatus = true
				//this.$emit('emitappblur')
			},
			closeDetail:function(){
				this.showStatus = false
				//this.$emit('emitappblur')
			}
		},
		components:{
			star,
		}
	}
</script>

<style>	
	.header {
		background-color: rgba(7, 17, 27, 0.5);
		color: rgb(255,255,255);
		position: relative;
		overflow: hidden;
		font-size: 0px;
	}
	.header .back-img{
		position: absolute;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    z-index: -1;
	    filter: blur(10px);
	}
	.header .header-content{
		position: relative;
		padding: 24px 16px 18px 24px;
	}
	.header .header-content .sale-count{
		position: absolute;
		display: block;
		font-size: 12px;
		line-height: 12px;
		background-color: rgba(0,0,0,0.2);
		border-radius: 16px;
		right: 12px;
		bottom: 15px;
		padding: 7px 8px;
	}
	.header .header-content .sale-count .sale-count-numer{
		line-height: 12px;
	    display: inline-block;
	    vertical-align: top;
	}
	.header .header-content .sale-count .icon-keyboard_arrow_right{
		line-height: 12px;
		margin-left: 2px;
		display: inline-block;
	    vertical-align: top;
	}
	.header .header-content .content-img{
		width: 64px;
		height: 64px;
		display: inline-block;
		margin-right: 16px;
		vertical-align: top;
	}
	.header .header-content .content-img img{
		width: 64px;
		height: 64px;
		border-radius: 2px;
	}
	.header .header-content .content-info{
		display: inline-block;
		margin-top: 2px;
	}
	.header .header-content .content-info .content-title{

	}
	.header .header-content .content-info .content-title .title-brand{
		width: 30px;
		height: 18px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/brand@2x.png);
		background-size: 30px 18px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 6px;
	}

	.header .header-content .content-info .content-title .title-name{
		font-size: 16px;
		color: rgb(255, 255, 255);
		font-weight: bold;
		line-height: 18px;
	}
	.header .header-content .content-info .content-send{
		font-size: 12px;
		color: rgb(255, 255, 255);
		font-weight: 200;
		line-height: 12px;
		margin-top: 8px;
	}
	.header .header-content .content-info .content-sale{
		margin-top: 10px;
	}
	
	

	.header .header-content .content-info .content-sale .sale-img{
		width: 12px;
		height: 12px;
	}
	.header .header-content .content-info .content-sale .sale-img-sel-0{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/decrease_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 4px;
	}
	.header .header-content .content-info .content-sale .sale-img-sel-1{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/discount_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 4px;
	}
	.header .header-content .content-info .content-sale .sale-img-sel-2{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/guarantee_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 4px;
	}
	.header .header-content .content-info .content-sale .sale-img-sel-3{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/invoice_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 4px;
	}
	.header .header-content .content-info .content-sale .sale-img-sel-4{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/special_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 4px;
	}
	.header .header-content .content-info .content-sale .sale-text{
		font-size: 12px;
		color: rgb(255, 255, 255);
		font-weight: 200;
		line-height: 14px;
		display: inline-block;
		vertical-align: top;
	}
	.header .header-notice{
		height: 28px;
		padding: 0 22px 0 12px;
		background-color: rgba(7,17,27,0.2);
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
		line-height: 28px;
		position: relative;
		font-size: 12px;
	}
	.header .header-notice .notice-img{
		width: 22px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/bulletin@2x.png);
		background-size: 22px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 4px;
		margin-top: 8px;
	}
	.header .header-notice .notice-sale{
		font-size: 12px;
		font-weight: 200;
		margin-right: 4px;
	}
	.header .header-notice .icon-keyboard_arrow_right{
		line-height: 28px;
		display: inline-block;
	    vertical-align: top;
	    position: absolute;
    	right: 12px;
	}
	.header .detail{
		background-color: rgba(7,17,27,0.8);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		overflow: auto;
	}
	.header .detail .detail-content{
		min-height: 100%;
		width: 100%;
	}
	.header .detail .detail-content .detail-content-main{
		padding: 64px 0px;
	}
	.header .detail .detail-content .detail-content-main .main-name{
		font-size: 16px;
		font-weight: 700;
		color: rgb(255,255,255);
		line-height: 16px;
		text-align: center;
	}
	.header .detail .detail-content .detail-content-main .star-wrapper{
		margin-top: 18px;
		padding: 2px 0;
		text-align: center;
	}
	.header .detail .detail-close{
		width: 32px;
		height: 32px;
		position: relative;
		margin: -64px auto 0 auto;
		font-size: 32px;
	}
	.clearfix{
     display: inline-block;
	}
	.clearfix:after {
	     content: ".";
	     display: block;
	     height: 0;	
	     clear: both;
	     visibility: hidden;
	}  
	.header .detail .detail-content .detail-content-main .main-sale-title{
		display: flex;
	    width: 80%;
	    text-align: center;
	    margin: 38px auto 24px auto;
	}
	.header .detail .detail-content .detail-content-main .main-sale-title .sale-left-line{
		flex:1;
		display: inline-block;
		border-bottom: 1px solid rgba(255,255,255,0.2);
		margin-bottom: 8px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-title .sale-title{
		flex:1;
		display: inline-block;
		padding: 0 12px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-title .sale-left-right{
		flex:1;
		display: inline-block;
		border-bottom: 1px solid rgba(255,255,255,0.2);
		margin-bottom: 8px;
	}
	
	.header .detail .detail-content .detail-content-main .main-sale-content{
		width: 80%;
		margin: 0px auto 14px auto;
		padding: 0 12px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item{
		margin-bottom: 12px;
	}
	
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item {
		font-size: 12px;
		font-weight: 200;
		color: rgb(255,255,255);
		line-height: 16px;
	}
	
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item .sale-img{
		width: 16px;
		height: 16px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item .sale-img-sel-0{
		width: 16px;
		height: 16px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/decrease_2@2x.png);
		background-size: 16px 16px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 6px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item .sale-img-sel-1{
		width: 16px;
		height: 16px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/discount_2@2x.png);
		background-size: 16px 16px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 6px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item .sale-img-sel-2{
		width: 16px;
		height: 16px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/guarantee_2@2x.png);
		background-size: 16px 16px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 6px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item .sale-img-sel-3{
		width: 16px;
		height: 16px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/invoice_2@2x.png);
		background-size: 16px 16px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 6px;
	}
	.header .detail .detail-content .detail-content-main .main-sale-content .sale-item .sale-img-sel-4{
		width: 16px;
		height: 16px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../../static/img/special_2@2x.png);
		background-size: 16px 16px;
		background-repeat: no-repeat;
		border-radius: 2px;
		margin-right: 6px;
	}
	.header .detail .detail-content .detail-content-main .main-notice{
		width: 80%;
		margin: 0 auto;
		font-size: 0px;
	}
	.header .detail .detail-content .detail-content-main .main-notice-content{
		font-size: 12px;
		font-weight: 200;
		color: rgb(255,255,255);
		line-height: 24px;
	}
</style>