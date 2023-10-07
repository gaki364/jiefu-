<template>
	<view v-if="canShow">
		<view style="height: 30rpx;"></view>
		<view class="bg">
			<image :src="gAssets.buttomPic" style="width: 606rpx;" mode="widthFix"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			canShow: false,
		},
		data() {
			return {
				tips: "Este site oferece jogos com experiência de risco. Para ser um usuário do nosso site, você deve ter mais de 18 anos. Não somos responsáveis",
			};
		},
		
		beforeMount() {
			
		},
		

		methods: {

		}
	}
</script>

<style lang="scss">
	.bg {
		text-align: center;
		
		width: 96%;
		margin: auto;
	}
</style>

