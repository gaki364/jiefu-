<template>
	<view :class="gHelper.isPc()?'bgPlaPc':'bgPla'">
		<view :style="{width: (gHelper.isPc()? '70%':'96%'), margin: 'auto'}">
			<view>
				<view style="height: 50rpx;"></view>
				<view class="commonBg7" style="margin: auto; width: 96%;">
					<view style="height: 20rpx;"></view>
					<view style="width: 90%; margin: auto;">
						<image :src="gAssets.platform_pic1" style="width: 100%;" mode="widthFix"></image>
					</view>
					<view style="height: 20rpx;"></view>
					<view style="width: 96%; margin: auto;">
						<view style="font-size: 32rpx; color: #FFD98D; text-align: center;">{{$t('KEY_PLATFORM_TEXT1')}}</view>
						<view style="height: 10rpx;"></view>
						<view style="font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT2')}}</view>
						<view style="height: 10rpx;"></view>
						<view style="font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT3')}}</view>
					</view>
					<view style="height: 40rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="commonBg7" style="margin: auto; width: 96%;">
					<view style="height: 20rpx;"></view>
					<view style="width: 90%; margin: auto;">
						<image :src="gAssets.platform_pic2" style="width: 100%;" mode="widthFix"></image>
					</view>
					<view style="height: 20rpx;"></view>
					<view style="width: 96%; margin: auto;">
						<view style="font-size: 32rpx; color: #FFD98D;">{{$t('KEY_PLATFORM_TEXT4')}}</view>
						<view style="height: 20rpx;"></view>
						<view style="display: flex; justify-content: space-around;">
							<view style="width: 48%;margin: auto; margin-left: 0rpx; border: 2rpx solid #26D367; border-radius: 12rpx;" @click="onButtonClick_OpenWebView(link1)">
								<view style="height: 10rpx;"></view>
								<view style="display: flex;">
									<image :src="gAssets.common_pic6" style="width: 58rpx; margin: auto 0rpx auto 20rpx;" mode="widthFix"></image>
									<view style="margin: auto auto auto 10rpx; color: #FFFFFF; line-height: 58rpx;">
										Whatsapp
									</view>
								</view>
								<view style="height: 10rpx;"></view>
							</view>
							<view style="width: 48%;margin: auto; margin-right: 0rpx; border: 2rpx solid #6EC6EC; border-radius: 12rpx;" @click="onButtonClick_OpenWebView(link2)">
								<view style="height: 10rpx;"></view>
								<view style="display: flex;">
									<image :src="gAssets.common_pic7" style="width: 58rpx; margin: auto 0rpx auto 20rpx;" mode="widthFix"></image>
									<view style="margin: auto auto auto 10rpx; color: #FFFFFF; line-height: 58rpx;">
										Telegram
									</view>
								</view>
								<view style="height: 10rpx;"></view>
							</view>
						</view>
						<view style="height: 20rpx;"></view>
						<view style="margin: auto; border: 2rpx solid #FFFFFF; border-radius: 12rpx; width: 100%;" @click="onButtonClick_OpenWebView(telechannel)">
							<view style="height: 10rpx;"></view>
							<view style="display: flex;">
								<image :src="gAssets.common_pic7" style="width: 58rpx; margin: auto 0rpx auto 20rpx;" mode="widthFix"></image>
								<view style="margin: auto auto auto 10rpx; color: #FFFFFF; line-height: 58rpx;">
									Telegram official channel
								</view>
							</view>
							<view style="height: 10rpx;"></view>
						</view>
					</view>
					<view style="height: 20rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="commonBg7" style="margin: auto; width: 96%;">
					<view style="height: 20rpx;"></view>
					<view style="width: 90%; margin: auto; text-align: center;">
						<image :src="gAssets.platform_pic3" style="width: 100%" mode="widthFix"></image>
					</view>
					<view style="height: 20rpx;"></view>
					<view style="width: 96%; margin: auto;">
						<view style="font-size: 26rpx; color: #FFD98D;">{{$t('KEY_PLATFORM_TEXT5')}}</view>
						<view style="height: 10rpx;"></view>
						<view style="font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT6')}}</view>
					</view>
					<view style="height: 40rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="commonBg7">
					<view style="height: 20rpx;"></view>
						<view class="tipsbg1" style="display: flex;">
							<view style="font-size: 32rpx; color: #0F3265; font-weight: 600; width: 60%; text-align: center; margin: auto;">{{$t('KEY_PLATFORM_TEXT7')}}</view>
						</view>
						
						<view style="height: 20rpx;"></view>
						<view class="bg1" style="width: 604rpx; height: 300rpx;">
							<view style="display: flex;">
								<view style="width: 32%; text-align: center; font-size: 20rpx; height: 86rpx; color: #FFFFFF;">
									<view style="line-height: 80rpx;">
										{{$t('KEY_PLATFORM_TEXT8')}}
									</view>
								</view>
								<view style="width: 68%; text-align: center; font-size: 20rpx; height: 86rpx; color: #FFFFFF;">
									<view style="line-height: 80rpx;">
										{{$t('KEY_PLATFORM_TEXT11')}}
									</view>
								</view>
							</view>
							<view style="display: flex;">
								<view style="width: 32%; text-align: center; font-size: 20rpx; height: 104rpx; color: #FFFFFF; display: table;">
									<view style="vertical-align: middle;display: table-cell;">
										{{$t('KEY_PLATFORM_TEXT9')}}
									</view>
								</view>
								<view style="width: 68%; text-align: center; font-size: 20rpx; height: 90rpx; color: #FFFFFF; display: table;">
									<view style="vertical-align: middle;display: table-cell;">
										{{$t('KEY_PLATFORM_TEXT12')}}
									</view>
								</view>
							</view>
							<view style="display: flex;">
								<view style="width: 32%; text-align: center; font-size: 20rpx; height: 108rpx; color: #FFFFFF; display: table;">
									<view style="vertical-align: middle;display: table-cell;">
										{{$t('KEY_PLATFORM_TEXT10')}}
									</view>
								</view>
								<view style="width: 68%; text-align: center; font-size: 20rpx; height: 108rpx; color: #FFFFFF; display: table;">
									<view style="vertical-align: middle;display: table-cell;">
										{{$t('KEY_PLATFORM_TEXT13')}}
									</view>
								</view>
							</view>
						</view>
						
						<view style="height: 20rpx;"></view>
					</view>
				</view>
				
			<view style="height: 20rpx;"></view>
			<view>
				<view style="width: 100%; position: relative; text-align: center; text-align: center;">
					
					<view style="text-align: center; font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT14')}}</view>
				</view>
				<view style="height: 20rpx;"></view>
				<view style="width: 100%; text-align: center;">
					<image :src="gAssets.platform_pic4" style="width: 100%;" mode="widthFix"></image>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT15')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT16')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT17')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
			</view>
			<view>
				<view style="width: 100%; position: relative; text-align: center; text-align: center;">
					
					<view style="text-align: center; font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT18')}}</view>
				</view>
				<view style="height: 20rpx;"></view>
				<view style="width: 100%; text-align: center;">
					<image :src="gAssets.platform_pic5" style="width: 100%;" mode="widthFix"></image>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT19')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT20')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
			</view>
			<view>
				<view style="width: 100%; position: relative; text-align: center; text-align: center;">
					
					<view style="text-align: center; font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT21')}}</view>
				</view>
				<view style="height: 20rpx;"></view>
				<view style="width: 100%; text-align: center;">
					<image :src="gAssets.platform_pic6" style="width: 100%;" mode="widthFix"></image>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT22')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT23')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT24')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT25')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT26')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT27')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT28')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT29')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT30')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT31')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT32')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT33')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT34')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT35')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
			</view>
			<view>
				<view style="width: 100%; position: relative; text-align: center; text-align: center;">
					<view style="text-align: center; font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT36')}}</view>
				</view>
				<view style="height: 20rpx;"></view>
				<view style="width: 100%; text-align: center;">
					<image :src="gAssets.platform_pic7" style="width: 100%;" mode="widthFix"></image>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT37')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT38')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT39')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT40')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT41')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT42')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT43')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT44')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT45')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT46')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT47')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
			</view>
			<view>
				<view style="width: 100%; position: relative; text-align: center; text-align: center;">
					
					<view style="text-align: center; font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_PLATFORM_TEXT48')}}</view>
				</view>
				<view style="height: 20rpx;"></view>
				<view style="width: 100%; text-align: center;">
					<image :src="gAssets.platform_pic8" style="width: 100%;" mode="widthFix"></image>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT49')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT50')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT51')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT52')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT53')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT54')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT55')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT56')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT57')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT58')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT59')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT60')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT61')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT62')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT63')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT64')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT65')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT66')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT67')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT68')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT69')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT70')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT71')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT72')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT73')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT74')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT75')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT76')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT77')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT78')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT79')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT80')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT81')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT82')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT83')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT84')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT85')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT86')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT87')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT88')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT89')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT90')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT91')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT92')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT93')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT94')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT95')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT96')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT97')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT98')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT99')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT100')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT101')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT102')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT103')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
				<view class="bg2" style="margin: auto;">
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #D4B685; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT104')}}</view>
					<view style="height: 10rpx;"></view>
					<view style="width: 96%; margin: auto; color: #FFFFFF; font-size: 20rpx;">{{$t('KEY_PLATFORM_TEXT105')}}</view>
					<view style="height: 10rpx;"></view>
				</view>
			</view>
			<view style="height: 20rpx;"></view>
			<supportedBank v-if="!gHelper.isPc() || true"></supportedBank>
			<!-- <supportedBank v-if="gHelper.isPc()" style="position: fixed; right: 10rpx; top: 10%; width: 30%;"></supportedBank> -->
			<view style="height: 200rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				link1: '',
				link2: '',
				telechannel: '',
			};
		},
		
		beforeMount() {
			if (this.gRequest.userManager.getSmobilesData == null) {
				this.gRequest.userManager.getSmobiles(this.onEventCallBack_getSmobiles.bind(this));
			} else {
				this.onEventCallBack_getSmobiles();
			}
		},
		
		methods: {
			
			onEventCallBack_getSmobiles() {
				if (this.gRequest.userManager.getSmobilesData) {
					for (let i = 0; i < this.gRequest.userManager.getSmobilesData.length; i++) {
						let link = this.gBase64.decode(this.gRequest.userManager.getSmobilesData[i].TelGram)
						if (this.gRequest.userManager.getSmobilesData[i].Type == '1') {
							this.link1 = link;
						} else if (this.gRequest.userManager.getSmobilesData[i].Type == '2') {
							this.link2 = link;
						} else if (this.gRequest.userManager.getSmobilesData[i].Type == '3')  {
							this.telechannel = link;
						}
					}
				}
			},
			
			onButtonClick_OpenWebView(link) {
				this.gAndroidUtils.openBrowser(link);
			},
		},
	}
</script>

<style lang="scss">
	page {
		background: linear-gradient(to right, #1B397E, #722441);
		
	}
	
	
	.bgPla {
		background: url('@/static/bg.webp') no-repeat;
		background-size: 749rpx 100%;
		margin: auto;
		background-position: center;
		// height: 1644rpx;
	}
	
	
	.bgPlaPc {
		background: url('@/static/bg.webp') no-repeat;
		background-size: 70% 100%;
		margin: auto;
		background-position: center;
		// height: 1644rpx;
		// width: 70%;
	}
	.bg2 {
	
		background-color: rgba($color: #000000, $alpha: 0.5);
		width: 100%;
		margin: auto;
		
	}

	
	
	.tipsbg1 {
		background: url('@/static/bg_1.png') no-repeat;
		background-size: 100% 100%;
		
		width: 749rpx;
		height: 188rpx;
		margin: auto;
	}
	
	.bg1 {
		background: url('@/static/4_sheet.png') no-repeat;
		background-size: 100% 100%;
		margin: auto;
		position: relative;
	}
</style>
