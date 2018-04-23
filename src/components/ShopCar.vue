<template>
	<div class="shopcar">
		<div class="car-left">
			<div class="car-logo">
				<span class="icon-shopping_cart logo">
					
				</span>
			</div>
			<div class="car-price">
				<span class="price">
					￥0
				</span>
			</div>
			<div class="car-descri">
				<span class="descri">
					另需配送费￥{{ seller.deliveryPrice }}元
				</span>
			</div>
		</div>
		<dir class="car-right">
			<span class="send-min-price">
				￥{{ seller.minPrice }}起送
			</span>
		</dir>
	</div>
</template>

<script>
	export default{
		props: ['seller'],
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
}
.shopcar .car-left{
	flex: 1;
	display: flex;
}
.shopcar .car-left .car-logo{
	flex: 0 0 80px;
}
.shopcar .car-left .car-logo .logo{
	
}
.shopcar .car-left .car-price{
	flex: 1;
}
.shopcar .car-left .car-logo .price{
	
}
.shopcar .car-left .car-descri{
	flex: 1;
}
.shopcar .car-left .car-logo .descri{
	
}
.shopcar .car-right{
	flex: 0 0 105px;
}
.shopcar .car-right .send-min-price{
	
}
</style>