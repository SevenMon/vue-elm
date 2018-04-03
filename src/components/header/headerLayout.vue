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
				<div class="content-sale">
					<span class="sale-img" :class="'sale-img-sel-' + seller.supports[0].type"></span><span class="sale-text">
						{{seller.supports[0].description}}
					</span>
				</div>
			</div>
			<div class="sale-count">
				<span class="sale-count-numer">
					{{seller.supports.length}}个
				</span><i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="header-notice">
			<span class="notice-img"></span><span class="notice-sale">
				{{seller.bulletin}}
			</span><i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="back-img">
			<img width="100%" height="100%" :src="seller.avatar" />
		</div>
	</div>
</template>

<script>
	export default {
		props: ['seller'],
		name: 'headerLayout',
	}
</script>

<style>
	.header {
		background-color: rgba(7, 17, 27, 0.5);
		color: rgb(255,255,255);
		position: relative;
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
	.header .header-content .content-info .content-sale .sale-text{
		font-size: 12px;
		color: rgb(255, 255, 255);
		font-weight: 200;
		line-height: 12px;
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
		margin-top: 7px;
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
</style>