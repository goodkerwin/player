webpackJsonp([1],{0:function(e,t){},"0pLC":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(e){n("TbHr")},null,null).exports,l=n("/ocq"),r=n("mvHQ"),s=n.n(r),c={name:"Aliplayer",props:{playStyle:{type:String,default:""},autoplay:{type:Boolean,default:!1},isLive:{type:Boolean,default:!1},playsinline:{type:Boolean,default:!0},preload:{type:Boolean,default:!1},width:{type:String,default:"500px"},height:{type:String,default:"320px"},controlBarVisibility:{type:String,default:"hover"},useH5Prism:{type:Boolean,default:!0},useFlashPrism:{type:Boolean,default:!1},vid:{type:String,default:""},playauth:{type:String,default:""},source:{type:String,default:""},cover:{type:String,default:""},format:{type:String,default:"m3u8,mp4"},x5_video_position:{type:String,default:"top"},x5_type:{type:String,default:"h5"},x5_fullscreen:{type:Boolean,default:!1},x5_orientation:{type:Number,default:2},autoPlayDelay:{type:Number,default:0},autoPlayDelayDisplayText:{type:String},progressShow:{type:Boolean,default:!1},components:{type:Array},startTime:{type:Number,default:0}},data:function(){return{playerId:"aliplayer_"+Math.random().toString(36).substr(2),scriptTagStatus:0,isReload:!1,instance:null,skinLayout:[{name:"bigPlayButton",align:"blabs",x:30,y:80},{name:"H5Loading",align:"cc"},{name:"errorDisplay",align:"tlabs",x:0,y:0},{name:"infoDisplay"},{name:"tooltip",align:"blabs",x:0,y:56},{name:"thumbnail"},{name:"controlBar",align:"blabs",x:0,y:0,children:[{name:"playButton",align:"tl",x:15,y:12},{name:"timeDisplay",align:"tl",x:10,y:7},{name:"fullScreenButton",align:"tr",x:10,y:12},{name:"setting",align:"tr",x:15,y:12},{name:"volume",align:"tr",x:5,y:10}]}],timer:null,firstPlay:!0,seekStartTime:0,seekEndTime:0,curTime:0}},created:function(){},mounted:function(){void 0!==window.Aliplayer?(this.scriptTagStatus=2,this.initAliplayer()):this.insertScriptTag()},methods:{insertScriptTag:function(){var e=this,t=document.getElementById("playerScriptTag");null===t&&((t=document.createElement("script")).type="text/javascript",t.src=this.aliplayerSdkPath,t.id="playerScriptTag",document.getElementsByTagName("head")[0].appendChild(t));t.loaded?e.scriptTagStatus++:t.addEventListener("load",function(){e.scriptTagStatus++,t.loaded=!0,e.initAliplayer()}),e.initAliplayer()},initAliplayer:function(){var e=this,t=this;if(2===t.scriptTagStatus&&(null===t.instance||t.reloadPlayer)){if(t.instance&&t.instance.dispose(),this.progressShow)for(var n=0;n<this.skinLayout.length;n++){var a=this.skinLayout[n];"controlBar"===a.name&&a.children.push({name:"progress",align:"blabs",x:0,y:44})}t.$nextTick(function(){t.instance=window.Aliplayer({id:t.playerId,autoplay:t.autoplay,isLive:t.isLive,playsinline:t.playsinline,preload:t.preload,format:t.format,width:t.width,height:t.height,controlBarVisibility:t.controlBarVisibility,useH5Prism:t.useH5Prism,useFlashPrism:t.useFlashPrism,vid:t.vid,disableSeek:!0,playauth:t.playauth,source:t.source,cover:t.cover,x5_video_position:t.x5_video_position,x5_type:t.x5_type,x5_fullscreen:t.x5_fullscreen,x5_orientation:t.x5_orientation,autoPlayDelay:t.autoPlayDelay,autoPlayDelayDisplayText:t.autoPlayDelayDisplayText,components:t.components,skinLayout:t.skinLayout}),document.getElementsByTagName("video")[0].setAttribute("webkit-playsinline","webkit-playsinline"),document.getElementsByTagName("video")[0].setAttribute("playsinline","playsinline"),t.instance.on("ready",function(){e.$emit("ready",t.instance),t.startTime>0&&t.seek(t.startTime);var n=0,a=0,i=document.getElementById("video"),o=localStorage.getItem("remTime");function l(){(a=t.getCurrentTime())-n>2?t.seek(n):n=a,t.curTime=a}o>.1?(a=o,n=o,t.instance.on("play",function(){setTimeout(function(){i.currentTime=o,setInterval(l,100)},2e3)})):setInterval(l,100)}),t.instance.on("play",function(){e.$emit("play",t.instance)}),t.instance.on("pause",function(){e.$emit("pause",t.instance),localStorage.setItem("remTime",t.curTime)}),t.instance.on("ended",function(){e.$emit("ended",t.instance)}),t.instance.on("hideBar",function(){e.$emit("hideBar",t.instance)}),t.instance.on("waiting",function(){e.$emit("waiting",t.instance)}),t.instance.on("timeupdate",function(){t.$emit("timeupdate",t.instance)}),t.instance.on("requestFullScreen",function(){t.$emit("requestFullScreen",t.instance)}),t.instance.on("cancelFullScreen",function(){t.$emit("cancelFullScreen",t.instance)}),t.instance.on("error",function(){t.$emit("error",t.instance)}),t.instance.on("startSeek",function(){t.$emit("startSeek",t.instance)}),t.instance.on("completeSeek",function(){t.$emit("completeSeek",t.instance)}),t.instance.on("sourceloaded",function(e){var n=e.paramData,a=n.desc,i=n.definition;t.getComponent("QualityComponent").setCurrentQuality(a,i)})})}},getComponent:function(e){return this.instance.getComponent(e)},play:function(){this.instance.play()},pause:function(){this.instance.pause()},replay:function(){this.instance.replay()},seek:function(e){this.instance.seek(e)},getCurrentTime:function(){return this.instance.getCurrentTime()},getDuration:function(){return this.instance.getDuration()},getVolume:function(){return this.instance.getVolume()},setVolume:function(e){this.instance.setVolume(e)},loadByUrl:function(e,t){this.instance.loadByUrl(e,t)},setSpeed:function(e){this.instance.setSpeed(e)},setPlayerSize:function(e,t){this.instance.setPlayerSize(e,t)},reloaduserPlayInfoAndVidRequestMts:function(e,t){this.instance.reloaduserPlayInfoAndVidRequestMts(e,t)},reloadPlayer:function(){this.isReload=!0,this.initAliplayer(),console.log(2222),this.isReload=!1}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"aliPlayer"}},[t("div",{staticClass:"prism-player",style:this.playStyle,attrs:{id:this.playerId}})])},staticRenderFns:[]};var p={components:{AliPlayer:n("VU/8")(c,u,!1,function(e){n("0pLC")},null,null).exports},data:function(){return{videoWidth:"500px",videoHeight:"400px",updatePlayer:!0,progress:!0,time:"",startTime:0,seekStartTime:0,seekEndTime:0,isSeeking:!1,sourceData:s()({FD:"https://look.chinahrt.com.cn/courseyun/rx/transcode/20206/317690bd-f600-43a0-87a7-6c6182da4607/283001-m3u8.m3u8",LD:"https://look.chinahrt.com.cn/u/u/courseyun/admin/transcode/202112/317690bd-f600-43a0-87a7-6c6182da4607/283002-m3u8.m3u8",SD:"https://look.chinahrt.com.cn/courseyun/rx/transcode/20206/317690bd-f600-43a0-87a7-6c6182da4607/283003-m3u8.m3u8"}),sourceData2:s()({FD:"https://look.chinahrt.com.cn/u/courseyun/7d1e9d587bc648cbbdb869c1300967f8/transcode/20216/5cf04cc0-2d74-4ae2-ab10-3ee59d4388a5/283006-mp4.mp4",LD:"https://look.chinahrt.com.cn/u/courseyun/7d1e9d587bc648cbbdb869c1300967f8/transcode/20216/5cf04cc0-2d74-4ae2-ab10-3ee59d4388a5/283001-mp4.mp4",SD:"https://look.chinahrt.com.cn/u/courseyun/videos/7d1e9d587bc648cbbdb869c1300967f8/MCJY/20216/db4c14189abe4b31bb553a59150c0eeb.mp4"}),skins:[{name:"bigPlayButton",align:"blabs",x:30,y:80},{name:"H5Loading",align:"cc"},{name:"errorDisplay",align:"tlabs",x:0,y:0},{name:"infoDisplay"},{name:"tooltip",align:"blabs",x:0,y:56},{name:"thumbnail"},{name:"controlBar",align:"blabs",x:0,y:0,children:[{name:"progress",align:"blabs",x:0,y:44},{name:"playButton",align:"tl",x:15,y:12},{name:"timeDisplay",align:"tl",x:10,y:7},{name:"fullScreenButton",align:"tr",x:10,y:12},{name:"setting",align:"tr",x:15,y:12},{name:"volume",align:"tr",x:5,y:10}]}],components:[{name:"QualityComponent",type:window.AliPlayerComponent.QualityComponent,args:function(e,t){console.log("切换",e,t)}},{name:"PauseADComponent",type:window.AliPlayerComponent.PauseADComponent,args:["https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg","https://baidu.com"]}]}},methods:{pauseChange:function(e){console.log("暂停",e,"播放时间点",e.getCurrentTime()),this.time=e.getCurrentTime()},endedChange:function(e){console.log("结束",e)},startSeekChange:function(e){},completeSeekChange:function(e){},timeupdateChange:function(e){},reloadPlayer:function(){this.$refs.aliplayer.reloadPlayer()},updateProgress:function(){var e=this;this.updatePlayer=!1,this.$nextTick(function(){e.progress=!e.progress,e.updatePlayer=!0})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-wrapper"},[e.updatePlayer?n("ali-player",{ref:"aliplayer",attrs:{source:e.sourceData,progressShow:e.progress,components:e.components,width:e.videoWidth,height:e.videoHeight,startTime:e.startTime},on:{pause:e.pauseChange,ended:e.endedChange,timeupdate:e.timeupdateChange,startSeek:e.startSeekChange,completeSeek:e.completeSeekChange}}):e._e(),e._v(" "),n("div",{staticStyle:{float:"left","margin-top":"10px"}},[n("button",{on:{click:e.updateProgress}},[e._v(" "+e._s(e.progress?"隐藏":"显示")+"进度条 ")]),e._v(" "),n("span",[e._v("当前播放时间："),n("strong",{domProps:{textContent:e._s(e.time)}})])])],1)},staticRenderFns:[]};var m=n("VU/8")(p,d,!1,function(e){n("bLyl")},"data-v-6bff3230",null).exports;a.default.use(l.a);var y=new l.a({routes:[{path:"/",name:"Player",component:m}]}),f=n("iqGf"),g=n.n(f),h=n("V4g8"),b=n.n(h);function v(e){if(window.WebViewJavascriptBridge)return e(window.WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];let t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(()=>{document.documentElement.removeChild(t)},0)}var S={callhandler(e,t,n){v(function(a){a.callHandler(e,t,n)})},registerhandler(e,t){v(function(n){n.registerHandler(e,function(e,n){t(e,n)})})}};a.default.prototype.$bridge=S,a.default.use(b.a),a.default.config.productionTip=!1,a.default.use(g.a);var x=window.TcPlayer;a.default.prototype.TcPlayer=x,new a.default({el:"#app",router:y,components:{App:o},template:"<App/>"})},TbHr:function(e,t){},bLyl:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9a3f4a2347704bf1148c.js.map