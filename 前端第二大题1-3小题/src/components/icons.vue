<template>
  <div class="mui-content">
  	<div class="mui-content-padded">
  		<p style="text-align: center;">图标</p>
  		<div class="flex-container">
  			<a id="icon-icon-contact"><span class="mui-icon mui-icon-contact"></span></a>
  			<a id="icon-person"><span class="mui-icon mui-icon-person"></span></a>
  			<a id="icon-personadd"><span class="mui-icon mui-icon-personadd"></span></a>
  			<a id="icon-phone"><span class="mui-icon mui-icon-phone"></span></a>
  			<a id="icon-email"><span class="mui-icon mui-icon-email"></span></a>
  			<a id="icon-chatbubble"><span class="mui-icon mui-icon-chatbubble"></span></a>
  			<a id="icon-chatboxes"><span class="mui-icon mui-icon-chatboxes"></span></a>
  			<a><span class="mui-icon mui-icon-weibo"></span></a>
  			<a><span class="mui-icon mui-icon-weixin"></span></a>
  			<a><span class="mui-icon mui-icon-pengyouquan"></span></a>
  			<a><span class="mui-icon mui-icon-chat"></span></a>
  			<a><span class="mui-icon mui-icon-qq"></span></a>

  			<a><span class="mui-icon mui-icon-videocam"></span></a>
  			<a><span class="mui-icon mui-icon-camera"></span></a>
  			<a><span class="mui-icon mui-icon-image"></span></a>
  			<a id="icon-mic"><span class="mui-icon mui-icon-mic"></span></a>
  			<a><span class="mui-icon mui-icon-micoff"></span></a>
  			<a id="icon-location"><span class="mui-icon mui-icon-location"></span></a>
  			<a><span class="mui-icon mui-icon-map"></span></a>
  			<a><span class="mui-icon mui-icon-compose"></span></a>
  			<a><span class="mui-icon mui-icon-trash"></span></a>
  			<a><span class="mui-icon mui-icon-upload"></span></a>
  			<a><span class="mui-icon mui-icon-download"></span></a>
  			<a id="icon-close"><span class="mui-icon mui-icon-close"></span></a>
  			<a><span class="mui-icon mui-icon-closeempty"></span></a>
  			<a><span class="mui-icon mui-icon-redo"></span></a>
  			<a><span class="mui-icon mui-icon-undo"></span></a>
  			<a id="icon-refresh"><span class="mui-icon mui-icon-refresh"></span></a>
  			<a><span class="mui-icon mui-icon-refreshempty"></span></a>
  			<a><span class="mui-icon mui-icon-reload"></span></a>
  			<a><span class="mui-icon mui-icon-loop"></span></a>
  			<!--<a><span class="mui-icon mui-icon-loopstrong"></span></a>-->
  			<a>
  				<span class="mui-spinner"></span>
  			</a>
  			<a id="icon-star"><span class="mui-icon mui-icon-star"></span></a>
  			<a><span class="mui-icon mui-icon-starhalf"></span></a>
  			<a id="icon-plus"><span class="mui-icon mui-icon-plus"></span></a>
  			<a><span class="mui-icon mui-icon-plusempty"></span></a>
  			<a id="icon-minus"><span class="mui-icon mui-icon-minus"></span></a>
  			<a><span class="mui-icon mui-icon-checkmarkempty"></span></a>
  			<a><span class="mui-icon mui-icon-search"></span></a>
  			<!--<a><span class="mui-icon mui-icon-searchstrong"></span></a>-->
  			<!--<a><span class="mui-icon mui-icon-share"></span></a>-->

  			<a id="icon-home"><span class="mui-icon mui-icon-home"></span></a>
  			<a><span class="mui-icon mui-icon-navigate"></span></a>
  			<a id="icon-gear"><span class="mui-icon mui-icon-gear"></span></a>
  			<a><span class="mui-icon mui-icon-settings"></span></a>
  			<!--<a><span class="mui-icon mui-icon-settingsstrong"></span></a>-->
  			<a><span class="mui-icon mui-icon-list"></span></a>
  			<a><span class="mui-icon mui-icon-bars"></span></a>
  			<a><span class="mui-icon mui-icon-paperplane"></span></a>
  			<a id="icon-info"><span class="mui-icon mui-icon-info"></span></a>
  			<a id="icon-help"><span class="mui-icon mui-icon-help"></span></a>
  			<a><span class="mui-icon mui-icon-locked"></span></a>
  			<a id="icon-more"><span class="mui-icon mui-icon-more"></span></a>
  			<a><span class="mui-icon mui-icon-flag"></span></a>
  			<a><span class="mui-icon mui-icon-paperclip"></span></a>
  			<a><span class="mui-icon mui-icon-eye"></span></a>

  			<a><span class="mui-icon mui-icon-back"></span></a>
  			<a><span class="mui-icon mui-icon-forward"></span></a>

  			<a><span class="mui-icon mui-icon-arrowup"></span></a>
  			<a><span class="mui-icon mui-icon-arrowdown"></span></a>
  			<a><span class="mui-icon mui-icon-arrowleft"></span></a>
  			<a><span class="mui-icon mui-icon-arrowright"></span></a>

  			<a><span class="mui-icon mui-icon-arrowthinup"></span></a>
  			<a><span class="mui-icon mui-icon-arrowthindown"></span></a>
  			<a><span class="mui-icon mui-icon-arrowthinleft"></span></a>
  			<a><span class="mui-icon mui-icon-arrowthinright"></span></a>

  			<a><span class="mui-icon mui-icon-pulldown"></span></a>
  		</div>
  	</div>
  </div>
</template>


<link rel="stylesheet" href="../assets/css/mui.min.css">
		<!--App自定义的css-->
		<link rel="stylesheet" type="text/css" href="../assets/css/app.css"/>
		<style>
			.flex-container {
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-flex-flow: row wrap;
				justify-content: space-between;
				text-align: center;
			}
			.mui-content-padded {
				padding: 10px;
			}
			.mui-content-padded a {
				margin: 3px;
				width: 50px;
				height: 50px;
				display: inline-block;
				text-align: center;
				background-color: #fff;
				border: 1px solid #ddd;
				border-radius: 25px;
				background-clip: padding-box;
			}
			.mui-content-padded a .mui-icon {
				margin-top: 12px;
			}
			.mui-spinner,
			.mui-spinner-white {
				margin-top: 12px
			}
			.active .mui-spinner-indicator {
				background: #007AFF;
			}
			.mui-content a {
				color: #8F8F94;
			}
			.mui-content a.active {
				color: #007aff;
			}
		</style>
