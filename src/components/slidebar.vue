<template>
	<div class="slide">
		<div class="content" :class="{showBar: showBar}"></div>
		<div class="mask" v-show="showBar" @click="hideSlideBar"></div>
	</div>
</template>
<script>

	export default {
		data () {
			return {
				
			}
		},
		computed: {
			showBar() {
				return this.$store.state.com.slideBarStatus
			}
		},
		methods: {
			hideSlideBar() {
				this.$store.dispatch('setNavStatus', false)
			}
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "../assets/scss/index.scss";
	.slide {
		.content {
			z-index: 1001;
			position: fixed;
			left: px2rem(-560px);
			top: 0;
			transform: translateZ(0);
			width: px2rem(560px);
			height: 100%;
			background-color: #fff;
			transition: all .3s ease;
			&.showBar {
				transform: translateX(px2rem(560px));
			}
		}
		.mask {
			z-index: 1000;
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: rgba(#000, .7);
		}
	}
</style>