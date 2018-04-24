<template>
	<div class="shopcar">
		<div class="car-left">
			<div class="car-logo">
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
		<dir class="car-right" :class="{select: allprice > this.seller.minPrice}">
			<span class="send-min-price">
				{{ countdes }}
			</span>
		</dir>
	</div>
</template>

<script>
	export default{
		props: ['seller','carfoods'],
		computed:{
			allprice(){
				let allprice = 0
				this.carfoods.forEach((food)=>{
					allprice += food.num * food.price
				})
				return allprice
			},
			count(){
				let num = 0
				this.carfoods.forEach((food)=>{
					num += food.num
				})
				return num
			},
			countdes(){
				let countdes = ''
				let minprice = this.seller.minPrice
				let allprice = this.allprice
				if(allprice < minprice){
					countdes = '还差¥' + (minprice - allprice) + '起送'
				}else if(allprice >= minprice){
					countdes = '去结算'
				}else if(allprice == 0){
					countdes = '¥' + minprice + '起送'
				}
				return countdes
			}
		}
	}
</script>
	
<style>
.shopcar{
	position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 12px;
    display: flex;
    height: 48px;
    width: 100%;
    background-color: #141d27;
}
.shopcar .car-left{
	flex: 1;
	display: flex;
}
.shopcar .car-left .car-logo{
	width: 56px;
	height: 56px;
	border-radius: 50%;
	position: relative;
	box-sizing: border-box;
	top:-10px;
	background-color: #141d27;
	text-align: center;
	padding: 6px;
	margin: 0 4px 0 12px;
	flex: 0 0 56px;
}
.shopcar .car-left .car-logo .logo{
	width: 44px;
	height: 44px;
	vertical-align: top;
	color: rgba(255,255,255,0.5);
	font-size: 24px;
	line-height: 44px;
	background-color: rgba(43,52,60,1);
	border-radius: 50%;
	display: inline-block;
}
.shopcar .car-left .car-logo .select{
	background-color: rgb(0,160,220);
}
.shopcar .car-left .car-price{
	flex: 0 0 40px;
	border-right: 1px solid rgba(255,255,255,0.1);
	top: 12px;
    position: relative;
    padding-right: 12px;
    overflow: hidden;
}
.shopcar .car-left .car-logo .carfoodnum{
	width: 24px;
    line-height: 16px;
    font-size: 9px;
    color: rgb(250,250,250);
    background: rgb(250,20,20);
    border-radius: 16px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 700;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.4);
}
.shopcar .car-left .car-price .price{
	font-size: 16px;
	line-height: 24px;
	font-weight: 700;
	color: rgba(255,255,255,0.4);
	flex: 1;
}
.shopcar .car-left .car-descri{
	position: relative;
	top: 12px;
	padding: 0 8px;
	overflow: hidden;
}
.shopcar .car-left .car-descri .descri{
	font-size: 12px;
	line-height: 24px;
	font-weight: 300;
	color: rgba(255,255,255,0.4);
}
.shopcar .car-right{
	margin: 0px;
	padding: 0px;
	flex: 0 0 30%;
	padding: 12px 8px;
	text-align: center;
	background-color: rgb(43,51,59);
}
.shopcar .select{
	background-color: #56d176;
	color: #fff;
	font-weight: 700;
	font-size: 12px;
	line-height: 24px;
}
.shopcar .car-right .send-min-price{
	font-size: 12px;
	line-height: 24px;
	font-weight: 700;
	color: rgba(255,255,255,0.4);
}
</style>