<template>
	<div class="good">
		<div class="menu-wrapper" ref='menuWrapper'>
			<ul class="menu-ul">
				<li v-for="(good, key) in goods" class="menu-item menu-list-hook" :class="{select:currentIndex == key}" @click="scrollFood(key)" :aa="scrollY">
					<span class="menu-text">
						<span class="menu-icon" :class="'menu-icon-' + good.type">
						</span> {{ good.name }}
					</span>
				</li>
				<li class="menu-item menu-list-hook">

				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref='foodsWrapper'>
			<ul class="foods-ul">
				<li v-for="(good, key) in goods" class="foods-list foods-list-hook">
					<h1 class="foods-title">{{ good.name }}</h1>
					<ul class="food-list-ul">
						<li v-for="food in good.foods" class="food-item">
							<div class="food-content">
								<div class="food-img">
									<img :src="food.icon" />
								</div>
								<div class="food-info">
									<h1 class="food-title">{{ food.name }}</h1>
									<span class="food-des">{{ food.description }}</span>
									<div class="food-sell-rat">
										<span class="food_sell">月售{{ food.sellCount }}份</span>
										<span class="food_rat">好评率{{ food.rating }}%</span>
									</div>
									<div class="food-price">
										<span class="food-new-code">¥</span>
										<span class="food-new-price">{{ food.price }}</span>
										<span v-show="food.oldPrice" class="food-old-price">¥{{ food.oldPrice }}</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shop-car :seller="seller" :carfoods="carfoods"></shop-car>
	</div>

</template>

<script>
	import BTscroll from 'better-scroll'
	import ShopCar from './ShopCar'
	export default {
		props: ['goods','seller'],
		data() {
			return {
				foodsHeights: [],
				menuHeights: [],
				allmenuHeight: 0,
				scrollY: 0,
				menuIndex: 0,
				upSlideIndex: [],
				downSlideIndex: [],
				carfoods:[{
					id:1,
					num:2,
					price:3.1,
				}]
			}
		},
		created() {
			let goodsHeighs = this._goodsHeighs
			let menuHeighs = this._menuHeighs
			let initScroll = this._initScroll
			let computedSlideUpDown = this._computedSlideUpDown
			setTimeout(() => {
				goodsHeighs()
				menuHeighs()
				initScroll()
				computedSlideUpDown()
			}, 200)
		},
		mounted() {

		},
		components:{
			ShopCar
		},
		computed: {
			currentIndex() {
				let currentIndex = 0
				for(let i = 0; i < this.foodsHeights.length; i++) {

					let height1 = this.foodsHeights[i]
					let height2 = this.foodsHeights[i + 1]
					if(this.scrollY >= height1 && this.scrollY < height2) {
						return i
					}
				}
				return 0
			}
		},
		updated() {

		},
		watch: {　　　　　　　　
			currentIndex(curVal, oldVal) {　　　　　
				if(oldVal == 1 && curVal == 0){
					this.menuScroll.scrollTo(0, 0, 200)
				}　　　　　
				for(let i = 0; i < this.upSlideIndex.length; i++) {　　

					//上滑
					if(curVal > oldVal) {
						//console.log(curVal)　　
						//console.log(oldVal)
						if(this.upSlideIndex[i] == curVal) {
							//alert('上滑')
							this.menuScroll.scrollBy(0, -54, 400)
						}

					}
					//下滑
					if(curVal < oldVal) {
						if(this.upSlideIndex[i] == oldVal) {
							//alert('下滑')
							this.menuScroll.scrollBy(0, 54, 400)
						}

					}

				}　　　
			}
		},
		methods: {
			_initScroll() {
				this.menuScroll = new BTscroll(this.$refs.menuWrapper, {
					click: true
				})
				this.goodsScroll = new BTscroll(this.$refs.foodsWrapper, {
					probeType: 3,
				})

				this.handel = (pos) => {
					this.scrollY = -pos.y
					console.log()
				}
				this.goodsScroll.on('scroll', this.handel)

			},
			_goodsHeighs() {
				let foodsli = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook')
				let heigh = 0
				this.foodsHeights.push(heigh)
				for(let i = 0; i < foodsli.length; i++) {
					let goodheigh = foodsli[i].clientHeight
					heigh += goodheigh
					this.foodsHeights.push(heigh)
				}
				console.log(this.foodsHeights)
			},
			_menuHeighs() {
				let menuli = this.$refs.menuWrapper.getElementsByClassName('menu-list-hook')
				let heigh = 0
				this.menuHeights.push(heigh)
				for(let i = 0; i < menuli.length; i++) {
					let menuheigh = menuli[i].clientHeight
					heigh += menuheigh
					this.menuHeights.push(heigh)
				}
				//console.log(this.menuHeights)
				this.allmenuHeight = this.$refs.menuWrapper.clientHeight
				//console.log(this.allmenuHeight)
			},
			_computedSlideUpDown() {
				let menuh = this.menuHeights
				let amenuh = this.allmenuHeight
				let halfamenuh = Math.ceil(amenuh / 2)
				//判断是否滑动 
				if(menuh[menuh.length - 1] > amenuh) {
					let middleIndex = 0
					for(let i = 0; i < menuh.length; i++) {
						if(menuh[i] >= halfamenuh && menuh[menuh.length - 1] - menuh[i] > halfamenuh) {
							this.upSlideIndex.push(i)
						}
					}

				}
				//console.log(this.upSlideIndex)
			},
			scrollFood(index) {
				this.scrollY = this.foodsHeights[index]
				this.goodsScroll.off('scroll', this.handel)
				this.goodsScroll.scrollTo(0, -this.foodsHeights[index], 200)
				setTimeout(() => {
					this.goodsScroll.on('scroll', this.handel)
				}, 400)
				
			}
		}
	}
</script>

<style>
	.good {
		display: flex;
		position: absolute;
		width: 100%;
		top: 175px;
		bottom: 46px;
		font-size: 0px;
	}
	
	.good .menu-wrapper {
		flex: 0 0 80px;
		background-color: #f3f5f7;
		overflow: hidden;
	}
	
	.good .menu-wrapper .menu-ul {}
	
	.good .menu-wrapper .menu-ul .select {
		background-color: rgb(255, 255, 255);
	}
	
	.good .menu-wrapper .menu-ul .menu-item {
		height: 54px;
		padding: 0 12px;
		width: 56px;
		display: table;
	}
	
	.good .menu-wrapper .menu-ul .menu-item .menu-text {
		font-size: 12px;
		line-height: 14px;
		display: table-cell;
		vertical-align: middle;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-0 {
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/decrease_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-1 {
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/discount_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-2 {
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/guarantee_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-3 {
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/invoice_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	
	.good .menu-wrapper .menu-ul .menu-item .menu-text .menu-icon-4 {
		width: 12px;
		height: 12px;
		vertical-align: top;
		display: inline-block;
		background-image: url(../../static/img/special_1@2x.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		border-radius: 2px;
	}
	
	.good .foods-wrapper {
		width: 100%;
		overflow: hidden;
	}
	
	.good .foods-wrapper .foods-ul {}
	
	.good .foods-wrapper .foods-ul .foods-list {}
	
	.good .foods-wrapper .foods-ul .foods-list .foods-title {
		padding-left: 14px;
		border-left: 2px solid #d9dde1;
		background-color: #f3f5f7;
		color: rgb(147, 153, 159);
		font-size: 12px;
		line-height: 26px;
		height: 26px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul {}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item {
		padding: 18px;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item:last-child {
		border-bottom: none
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content {
		display: flex;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-img {
		flex: 0 0 57px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-img img {
		width: 57px;
		height: 57px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info {
		flex: 1;
		margin-left: 10px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-title {
		margin-top: 2px;
		font-size: 14px;
		line-height: 14px;
		color: rgb(7, 17, 27);
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-des {
		margin-top: 8px;
		font-size: 10px;
		color: rgb(147, 153, 159);
		line-height: 10px;
		display: inline-block;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-sell-rat {
		margin-top: 8px;
		color: rgb(147, 153, 159);
		line-height: 10px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-sell-rat .food_sell {
		font-size: 10px;
		margin-right: 8px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-sell-rat .food_rat {
		font-size: 10px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-price {}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-price .food-new-code {
		font-size: 10px;
		color: rgb(240, 20, 20);
		font-weight: normal;
		line-height: 24px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-price .food-new-price {
		font-size: 14px;
		color: rgb(240, 20, 20);
		font-weight: 700;
		line-height: 24px;
	}
	
	.good .foods-wrapper .foods-ul .foods-list .food-list-ul .food-item .food-content .food-info .food-price .food-old-price {
		color: rgb(147, 153, 159);
		font-size: 10px;
		font-weight: normal;
		line-height: 24px;
		margin-left: 6px;
		text-decoration: line-through;
	}
</style>