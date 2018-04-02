<template>
	<div class="header">
		<div class='header-content'>
			<div class="content-img">
				<img src="./headimg.jpg" />
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
					<span class="sale-img">
					
					</span>
					<span class="sale-text">
						{{seller.supports[0].description}}
					</span>
				</div>
			</div>
		</div>
		<div class="header-notice">
			<span class="notice-img">
					
			</span>
			<span class="notice-sale">
				{{seller.bulletin}}
			</span>
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
	}
	.header .header-content{
		padding: 24px 16px 18px 24px;
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
		vertical-align: text-bottom;
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
	.header .header-content .content-info .content-sale .sale-text{
		font-size: 10px;
		color: rgb(255, 255, 255);
		font-weight: 200;
		line-height: 12px;
	}
</style>