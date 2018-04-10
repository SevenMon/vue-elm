<template>
	<div class="good">
		<div class="menu-wrapper">
			<ul class="menu-ul">
				<li v-for="good in goods" class="menu-item">
					<span class="menu-text">
						<span class="menu-icon" :class="'menu-icon-' + good.type">
						</span>
						{{ good.name }}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper">
			<ul class="foods-ul">
				<li v-for="good in goods" class="foods-list">
					<h1 class="foods-title">{{ good.name }}</h1>
					<ul class="food-list-ul">
						<li v-for="food in good.foods" class="food-item">
							<div class="food-content">
								<div class="food-img">
									<img :src="food.icon"/>
								</div>
								<div class="food-info">
									<h1>{{ food.name }}</h1>
									<span class="food-des">{{ food.description }}</span>
									<div class="food-sell-rat">
										<span class="food_sell">月售{{ food.sellCount }}份</span>
										<span class="food_rat">好评率{{ food.rating }}%</span>
									</div>
									<div class="food-price">
										<span class="food-new-price">{{ food.price }}</span>
										<span v-show="food.oldPrice" class="food-old-price">{{ food.oldPrice }}</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props:['goods']
	}
</script>

<style>
	.good{
		display: flex;
		position: absolute;
		width: 100%;
		top: 175px;
		bottom: 46px;
		font-size: 0px;
	}
	.good .menu-wrapper{
		flex: 0 0 80px;
		background-color: #f3f5f7;
		overflow: hidden;
	}
	.good .menu-wrapper .menu-ul{
		
	}
	.good .menu-wrapper .menu-ul .menu-item{
		height: 54px;
		padding: 0 12px;
		width: 56px;
    	display: table;
	}
	.good .menu-wrapper .menu-ul .menu-item .menu-text{
		font-size: 12px;
		line-height: 14px;
		display: table-cell;
    	vertical-align: middle;
    	border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-0{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/decrease_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-1{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/discount_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-2{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/guarantee_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-3{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/invoice_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-4{
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/special_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	.good .foods-wrapper{
		width: 100%;
	}
	.good .foods-wrapper .foods-ul{
		
	}
	.good .foods-wrapper .foods-ul .foods-list{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .foods-title{
		padding-left: 14px;
		border-left: 2px solid #d9dde1;
		background-color: #f3f5f7;
		color: rgb(147,153,159);
		font-size: 12px;
		line-height: 26px;
		height: 26px;
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content{
		margin: 18px;
		display: flex;
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-img{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info{
		flex: 1;
		margin-left: 10px;
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-title{
		margin-top: 2px;
		font-size: 14px;
		line-height: 14px;
		color: rgb(7,17,27);
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-des{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-sell-rat{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-sell-rat .food_sell{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-sell-rat .food_rat{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-price{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-price .food-new-price{
		
	}
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-price .food-old-price{
		
	}

	
</style>