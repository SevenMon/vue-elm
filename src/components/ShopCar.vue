<template>
	<div class="shopcar">
		<div class="content">
			<div class="car-left">
				<div class="car-logo" @click="carshow = count <=0 ? false : !carshow">
					<i class="icon-shopping_cart logo" :class="{select:count > 0}">
					
				</i>
					<div class="carfoodnum">
						{{ count }}
					</div>
				</div>
				<div class="car-price">
					<span class="price">
					￥{{ allprice }}
				</span>

				</div>
				<div class="car-descri">
					<span class="descri">
					配送费￥{{ seller.deliveryPrice }}元
				</span>
				</div>
			</div>
			<dir class="car-right" :class="{select: allprice >= this.seller.minPrice}">
				<span class="send-min-price">
				{{ countdes }}
			</span>
			</dir>
		</div>
		<div class="back-wall">

		</div>
		<transition name="fade-car-list">
			<div v-if="carshow" class="car-list">
				<p class="car-title"><span class="title">购物车</span><span class="del-car">清空</span></p>
				<ul class="car-food-list" ref='carWrapper'>
					<li v-for="(food, key) in carfoods" class="car-food-item">
						<div class="car-food-content">
							<span class="food-title">{{ food.name }}</span>
						</div>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		props: ['seller', 'carfoods'],
		computed: {
			allprice() {
				let allprice = 0
				this.carfoods.forEach((food) => {
					allprice += food.num * food.price
				})
				return allprice
			},
			count() {
				let num = 0
				this.carfoods.forEach((food) => {
					num += food.num
				})
				return num
			},
			countdes() {
				let countdes = ''
				let minprice = this.seller.minPrice
				let allprice = this.allprice
				if(allprice < minprice) {
					countdes = '还差¥' + (minprice - allprice) + '起送'
				} else if(allprice >= minprice) {
					countdes = '去结算'
				} else if(allprice == 0) {
					countdes = '¥' + minprice + '起送'
				}
				return countdes
			}
		},
		data(){
			return{
				carshow:false
			}
		},
		methods:{

		}
	}
</script>

<style>
	

	.shopcar {
		position: fixed;
		bottom: 0px;
		left: 0px;
		font-size: 12px;
		display: flex;
		height: 48px;
		width: 100%;
		background-color: #141d27;
	}
	
	.shopcar .content {
		display: flex;
		height: 48px;
		width: 100%;
		z-index: 100;
		background-color: rgb(43, 51, 59);
	}
	
	.shopcar .back-wall {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		filter: blur(10px);
		background-color: rgba(7, 17, 27, 0.6);
		z-index: 50;
		display: none;
	}
	
	.shopcar .car-list {
		z-index: 60;
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    max-height: 500px;
	    transform:translate(0,-100%);
	}
	.fade-car-list-enter-active, .fade-car-list-leave-active {
		transition: all 5s;
	}
	

	.fade-car-list-enter, .fade-car-list-leave
	/* .fade-leave-active below version 2.1.8 */
	{
		transform:translate(0,0);
		/*transform:translate(0,-100%);*/
	}
	
	.shopcar .car-list .car-title{
		background-color: #f3f5f7;
		height: 40px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.shopcar .car-list .car-title .title{
		font-size: 14px;
		font-weight: 200;
		color: rgb(7,17,27);
		line-height: 40px;
		margin-left: 18px;
	}
	.shopcar .car-list .car-title .del-car{
		font-size: 12px;
		color: rgb(0,160,220);
		line-height: 40px;
		margin-right: 18px;
		float: right;
	}
	
	.shopcar .car-list .car-food-list{
		background-color: rgb(255,255,255);
		width: 100%;
		padding-bottom: 60px;
	}
	
	.shopcar .car-list .car-food-list .car-food-item{
		
	}
	.shopcar .car-list .car-food-list .car-food-item .car-food-content{
		
	}
	.shopcar .car-list .car-food-list .car-food-item .car-food-content .food-title{
		
	}
	
	.shopcar .content .car-left {
		flex: 1;
		display: flex;
	}
	
	.shopcar .content .car-left .car-logo {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		position: relative;
		box-sizing: border-box;
		top: -10px;
		background-color: #141d27;
		text-align: center;
		padding: 6px;
		margin: 0 4px 0 12px;
		flex: 0 0 56px;
	}
	
	.shopcar .content .car-left .car-logo .logo {
		width: 44px;
		height: 44px;
		vertical-align: top;
		color: rgba(255, 255, 255, 0.5);
		font-size: 24px;
		line-height: 44px;
		background-color: rgba(43, 52, 60, 1);
		border-radius: 50%;
		display: inline-block;
	}
	
	.shopcar .content .car-left .car-logo .select {
		background-color: rgb(0, 160, 220);
	}
	
	.shopcar .content .car-left .car-price {
		flex: 0 0 40px;
		border-right: 1px solid rgba(255, 255, 255, 0.1);
		top: 12px;
		position: relative;
		padding-right: 12px;
		overflow: hidden;
	}
	
	.shopcar .content .car-left .car-logo .carfoodnum {
		width: 24px;
		line-height: 16px;
		font-size: 9px;
		color: rgb(250, 250, 250);
		background: rgb(250, 20, 20);
		border-radius: 16px;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0;
		font-weight: 700;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
	}
	
	.shopcar .content .car-left .car-price .price {
		font-size: 16px;
		line-height: 24px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.4);
		flex: 1;
	}
	
	.shopcar .content .car-left .car-descri {
		position: relative;
		top: 12px;
		padding: 0 8px;
		overflow: hidden;
	}
	
	.shopcar .content .car-left .car-descri .descri {
		font-size: 12px;
		line-height: 24px;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.4);
	}
	
	.shopcar .content .car-right {
		margin: 0px;
		padding: 0px;
		flex: 0 0 30%;
		padding: 12px 8px;
		text-align: center;
		background-color: rgb(43, 51, 59);
	}
	
	.shopcar .content .select {
		background-color: #56d176;
		color: #fff;
		font-weight: 700;
		font-size: 12px;
		line-height: 24px;
	}
	
	.shopcar .content .car-right .send-min-price {
		font-size: 12px;
		line-height: 24px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.4);
	}
</style>