<template>
	<div class="adddes">
		<div class="des" @click="des">
			<transition name="fade">
				<i v-if="num  > 0" class="icon-remove_circle_outline"></i>
			</transition>
		</div>
		<div class="num">
			<span v-if="num > 0">{{ num }}</span>
		</div>
		<div class="add" @click="add">
			<i class="icon-add_circle"></i>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		props: {
			num: {
				default: 0,
				type: Number
			}
		},
		data() {
			return {
				aa: false
			}
		},
		methods: {
			des() {
				this.$emit('desnum')

			},
			add() {
				this.$emit('addnum')

			}
		}
	}
</script>

<style>
	.adddes {
		font-size: 0px;
		color: rgb(0, 160, 220);
		line-height: 24px;
		position: absolute;
		right: 18px;
		bottom: 5px;
	}
	
	.adddes .des {
		display: inline-block;
		font-size: 24px;
	}
	
	.adddes .num {
		display: inline-block;
		font-size: 10px;
		width: 24px;
		height: 24px;
		color: rgb(147, 153, 159);
		text-align: center;
		vertical-align: top;
	}
	
	.adddes .add {
		display: inline-block;
		font-size: 24px;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all 2s;
		-moz-transition:all 2s; /* Firefox 4 */
		-webkit-transition:all 2s; /* Safari and Chrome */
		-o-transition:all 2s; /* Opera */
	}
	
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active below version 2.1.8 */
	
	{
		transform: translate3D(24px,0,0);
	}
</style>