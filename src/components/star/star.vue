<template>
	<div class="star" :class="starType">
		<span v-for="itemstar in itemstars" :class="itemstar" class="stars"></span>
	</div>
</template>

<script>
	const LENTH = 5
	const CLS_ON = 'on'
	const CLS_HALF = 'half'
	const CLS_OFF = 'off'
	export default{
		props:['size','score'],
		computed:{
			starType:function(){
				return 'star-type-' + this.size
			},
			starStatus:function(){
				
			},
			itemstars:function(){
				let result = []
				let score = Math.floor(this.score * 2) /2
				let lastStar = '';
				for(let i = LENTH ; i > 0 ; i--){
					score--
					if(i == 1){
						lastStar = 'last-star'
					}
					if(score > 0 || score == 0){
						result.push(CLS_ON + ' ' + lastStar)
					}else if(score < 0){
						if(score < -1){
							result.push(CLS_OFF + ' ' + lastStar)
						}else{
							result.push(CLS_HALF + ' ' + lastStar)
						}
					}
				}
				return result
			}
		}
	}
</script>

<style>
	.star-type-24{
		text-align: center;
	}
	.star-type-24 .stars{
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-right: 22px;
		background-size: 20px 20px;
	}
	.star-type-24 .last-star{
		margin-right: 0px;
	}
	.star-type-24 .on{
		background-image: url(../../../static/img/star24_on@2x.png);
	}
	.star-type-24 .half{
		background-image: url(../../../static/img/star24_half@2x.png);
	}
	.star-type-24 .off{
		background-image: url(../../../static/img/star24_off@2x.png);
	}
</style>