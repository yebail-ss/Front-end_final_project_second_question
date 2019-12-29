<template>
	<view>
		 <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
			<swiper-item v-for="(item,index) of bannerList">
				<image :src="item" mode="widthFix" style="width: 100%;"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList:[
					"http://img61.ddimg.cn/2019/12/20/2019122018074819388.jpg",
					"http://img63.ddimg.cn/2019/12/20/2019122018435992122.jpg",
					"http://img63.ddimg.cn/2019/12/19/2019121916120618820.jpg"
					
				]
			};
		}
	}
</script>

<style lang="scss">

</style>
