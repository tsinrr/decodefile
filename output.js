//9/14/2024, 4:09:06 PM
//Project:https://github.com/dream385/decode
var _0x183fbf,
  _0x6fffab,
  _0x179841,
  _0x2ac26f,
  dplayer,
  _0x47864c = window.opener ? window.opener : top;
var _0x149c13 = _0x121d60("quality", 1),
  _0x3cb3a9 = _0x121d60("autonext", "on"),
  _0x658c09 = _0x121d60("lang", ""),
  _0x26a3a0 = _0x121d60("rate", 1),
  _0x2546d2 = _0x121d60("danmaku_height", "40%"),
  _0x3e6ab3 = _0x121d60("skipheadertailer", "on");
var _0x619b2c = _0x47864c.video,
  _0x1b99f5 = {
    "head": 0,
    "tail": 0
  },
  _0x208a3c = false,
  _0x573310 = _0x47864c.axios.defaults.baseURL + "/?code=" + _0x619b2c.vid,
  _0x1718fc = _0x47864c.axios.defaults.baseURL,
  _0x1bc523 = [],
  _0xaf0165 = [];
if (null == localStorage["dplayer-danmaku-show"]) localStorage["dplayer-danmaku-show"] = 1;
$(function () {
  dplayer = new DPlayer({
    "container": $(".dplayer")[0],
    "theme": "linear-gradient(270deg,#4bb8ff 60.12%,#4aff00 76.25%,#ff9012 93.48%)",
    "volume": 0.8,
    "autoplay": true,
    "mutex": false,
    "hotkey": false,
    "screenshot": true,
    "playbackSpeed": [0.5, 0.75, 1, 1.25, 1.5, 2],
    "subtitle": {
      "url": "data:text/vtt,0",
      "color": "greenyellow",
      "bottom": "10%"
    },
    "video": {
      "quality": [{
        "name": "FHD",
        "url": _0x573310 + "h3",
        "buffer": 30,
        "type": "FHD"
      }, {
        "name": "超清",
        "url": _0x573310 + "h2",
        "buffer": 35,
        "type": "FHD"
      }, {
        "name": "高清",
        "url": _0x573310 + "h1",
        "buffer": 40,
        "type": "FHD"
      }, {
        "name": "流畅",
        "url": _0x573310 + "h0",
        "buffer": 60,
        "type": "FHD"
      }],
      "defaultQuality": _0x149c13,
      "pic": "https:" + _0x47864c.album.pic,
      "customType": {
        "FHD": _0x4cd47f
      }
    },
    "danmaku": {
      "id": 0,
      "bottom": "40%",
      "api": _0x1718fc + "/?cmd=danmu&"
    }
  });
  console.clear();
  $(".dplayer-info-panel").append("<div class=\"dplayer-info-panel-item dplayer-info-panel-item-p2p-peer\"><span class=\"dplayer-info-panel-item-title\">P2P peer count</span>\n<span class=\"dplayer-info-panel-item-data\">0</span></div><div class=\"dplayer-info-panel-item dplayer-info-panel-item-p2p-up\"><span class=\"dplayer-info-panel-item-title\">P2P upload</span>\n<span class=\"dplayer-info-panel-item-data\">zero</span></div><div class=\"dplayer-info-panel-item dplayer-info-panel-item-p2p-down\"><span class=\"dplayer-info-panel-item-title\">P2P download</span>\n<span class=\"dplayer-info-panel-item-data\">zero</span></div>");
  $(".dplayer-subtitle-btn").hide();
  $(".dplayer-menu > div:last-child").remove();
  $(".dplayer-menu > div:last-child").remove();
  $(".dplayer-comment").remove();
  $(".dplayer-thumb").attr("style", "background: orangered;");
  $(".dplayer-full-in-icon").prop("outerHTML", $(".dplayer-full-in-icon").prop("outerHTML"));
  $(".dplayer-full-in-icon").attr("data-balloon", "画中画").click(() => {
    _0x3c47a1();
  });
  $(".dplayer-video-wrap").dblclick(() => {
    dplayer.fullScreen.toggle();
  });
  $(".dplayer-setting-origin-panel").append("<div class=\"dplayer-setting-item dplayer-setting-danmaku danmaku-height\"><span class=\"dplayer-label\">弹幕屏占比</span><div class=\"dplayer-danmaku-bar-wrap\"><div class=\"dplayer-danmaku-bar\"><div class=\"dplayer-danmaku-bar-inner\" style=\"width: 100%;\"><span class=\"dplayer-thumb\" style=\"background: orangered;\"></span></div></div></div></div>");
  $(".dplayer-setting-origin-panel").append("<div class=\"dplayer-setting-item dplayer-setting-autonext\"><span class=\"dplayer-label\">自动下一集</span><div class=\"dplayer-toggle\"><input class=\"dplayer-autonext-setting-input\" type=\"checkbox\" name=\"dplayer-toggle-autonext\"><label for=\"dplayer-toggle-autonext\"></label></div></div>");
  $(".dplayer-setting-origin-panel").append("<div class=\"dplayer-setting-item dplayer-setting-skipheadertailer\"><span class=\"dplayer-label\">跳过片头片尾</span><div class=\"dplayer-toggle\"><input class=\"dplayer-skipheadertailer-setting-input\" type=\"checkbox\" name=\"dplayer-toggle-skipheadertailer\"><label for=\"dplayer-toggle-skipheadertailer\"></label></div></div>");
  $(".dplayer-icons-right").prepend("<div class=\"dplayer-icon dplayer-quality-icon speed\"></div>");
  $(".dplayer-icons-left").append("<span class=\"time\"></span>");
  setInterval(() => {
    let _0xfc37d = "";
    let _0xa22dc7 = ["日", "一", "二", "三", "四", "五", "六"];
    let _0x11df0e = new Date();
    _0xfc37d = _0x11df0e.toLocaleString("zh-CN", {
      "hour12": false
    }) + " 星期" + _0xa22dc7[_0x11df0e.getDay()];
    _0xfc37d += _0x11df0e.getHours() >= 6 && _0x11df0e.getHours() < 18 ? " ☀️" : " 🌙";
    _0xfc37d += "『 " + _0x619b2c.title + "  " + _0x619b2c.subtitle + " 』";
    $(".time").text(_0xfc37d);
  }, 1000);
  $(".dplayer-setting-danmaku.danmaku-height .dplayer-danmaku-bar-inner").css("width", _0x2546d2);
  $(".dplayer-danmaku").css("height", _0x2546d2);
  function _0x4108c5(_0x13d535) {
    var _0x3fae2c = $(".dplayer-setting-danmaku.danmaku-height .dplayer-danmaku-bar-wrap")[0].getBoundingClientRect().left + 11;
    var _0x3fa8d6 = _0x13d535 || window.event,
      _0x2546d2 = ((_0x3fa8d6.clientX || _0x3fa8d6.changedTouches[0].clientX) - _0x3fae2c) / 130;
    _0x2546d2 = (_0x2546d2 > 1 ? 100 : _0x2546d2 * 100).toFixed(2) + "%";
    $(".dplayer-setting-danmaku.danmaku-height .dplayer-danmaku-bar-inner").css("width", _0x2546d2);
    localStorage.danmaku_height = _0x2546d2;
    $(".dplayer-danmaku").css("height", localStorage.danmaku_height).stop(true);
    $(".dplayer-danmaku").animate({
      "borderBottomWidth": "3px"
    }, "fast").animate({
      "borderBottomWidth": "0px"
    }, "fast");
  }
  var _0x57e6bc = false;
  $(".dplayer-setting-danmaku.danmaku-height .dplayer-danmaku-bar-wrap").mousemove(function (_0x199db1) {
    if (_0x57e6bc) _0x4108c5(_0x199db1);
  }).click(function (_0x4c9248) {
    _0x4108c5(_0x4c9248);
  }).mousedown(function (_0x6ad43) {
    _0x57e6bc = true;
  });
  $(document).mouseup(function () {
    if (_0x57e6bc) {
      _0x57e6bc = false;
      dplayer.notice("弹幕屏占比" + localStorage.danmaku_height);
    }
  });
  dplayer.on("loadeddata", function () {
    _0x1d4119();
    $(".dplayer-notice-list .dplayer-notice").remove();
    dplayer.notice("开始播放");
    if (_0x1b99f5.head) dplayer.seek(_0x1b99f5.head);
    _0x26a3a0 = 0 != _0x26a3a0 ? _0x26a3a0 : 1;
    dplayer.speed(_0x26a3a0);
    $(".dplayer-setting-speed-item[data-speed=\"" + _0x26a3a0 + "\"] > span").attr("style", "color:orangered;");
    dplayer.play();
  });
  if ("on" == _0x3e6ab3) $(".dplayer-setting-skipheadertailer input").click();
  $(".dplayer-setting-skipheadertailer label").click(function () {
    $(".dplayer-setting-skipheadertailer input").click();
  });
  $(".dplayer-setting-skipheadertailer input").click(function () {
    _0x3e6ab3 = localStorage.skipheadertailer = $(this).prop("checked") ? "on" : "off";
  });
  if ("on" == _0x3cb3a9) $(".dplayer-setting-autonext input").click();
  $(".dplayer-setting-autonext label").click(function () {
    $(".dplayer-setting-autonext input").click();
  });
  $(".dplayer-setting-autonext input").click(function () {
    _0x3cb3a9 = localStorage.autonext = $(this).prop("checked") ? "on" : "off";
  });
  dplayer.on("quality_start", function (_0x149c13) {
    if (-1 != dplayer.qualityIndex) localStorage.quality = dplayer.qualityIndex;
  });
  dplayer.on("seeked", function () {
    _0x1bc523 = [].concat(_0xaf0165);
    subtitle_show = [].concat(_0x49967a);
  });
  dplayer.on("danmaku_show", function () {
    dplayer.notice("弹幕开启");
  });
  dplayer.on("danmaku_hide", function () {
    dplayer.notice("弹幕关闭");
  });
  dplayer.on("ratechange", function () {
    $(".dplayer-setting-speed-item > span").removeAttr("style");
    $(".dplayer-setting-speed-item[data-speed=\"" + dplayer.video.playbackRate + "\"] > span").attr("style", "color:orangered;");
    localStorage.rate = dplayer.video.playbackRate;
  });
  let _0x360e54 = -1,
    _0x45be35 = 0,
    _0x3a0538 = [];
  dplayer.on("timeupdate", function () {
    if ("on" == _0x3e6ab3 && _0x1b99f5.tail && dplayer.video.currentTime >= _0x1b99f5.tail) {
      _0x3e6ab3 = "off";
      if ("on" == localStorage.autonext) _0x2e7d58(true);
    } else if (0 != dplayer.video.currentTime) _0x53f673(_0x619b2c.id, dplayer.video.currentTime);
    _0x442098(dplayer.video.currentTime);
    if (dplayer.video !== document.pictureInPictureElement) {
      let _0x3d0152 = dplayer.video.currentTime + 2;
      if (1 != localStorage.getItem("dplayer-danmaku-show")) return;
      let _0x146669 = atob(_0x619b2c.site);
      if ("youku" == _0x146669 || "mgtv" == _0x146669) _0x45be35 = parseInt(_0x3d0152 / 60);else if ("iqiyi" == _0x146669) {
        _0x45be35 = parseInt(_0x3d0152 / 300) + 1;
      } else if ("sohu" == _0x146669) {
        _0x45be35 = parseInt(_0x3d0152 / 300);
      } else if ("bilibili" == _0x146669) {
        _0x45be35 = parseInt(_0x3d0152 / 360) + 1;
      } else if ("ixigua" == _0x146669) {
        _0x45be35 = parseInt(_0x3d0152 / 300);
      } else if ("le" == _0x146669) {
        _0x45be35 = parseInt(_0x3d0152 / 300);
      } else if ("txsp" == _0x146669) {
        _0x45be35 = parseInt(_0x3d0152 / 30);
      } else return;
      if (_0x45be35 != _0x360e54) {
        _0x360e54 = _0x45be35;
        if (!_0x3a0538[_0x45be35]) {
          $.getJSON(_0x1718fc + "/?cmd=danmu&m=" + _0x45be35 + "&code=" + _0x619b2c.vid, function (_0x5c265f) {
            if (0 == _0x5c265f.code) {
              _0x3a0538[_0x45be35] = _0xaf0165 = _0x5c265f.data;
              _0x1bc523 = _0x1bc523.concat(_0xaf0165);
            }
          });
        } else {
          _0xaf0165 = _0x3a0538[_0x45be35];
          _0x1bc523 = _0x1bc523.concat(_0x3a0538[_0x45be35]);
        }
      }
      _0x3d0152 -= 10;
      for (var _0x20ea3a = 0; _0x20ea3a < _0x1bc523.length; _0x20ea3a++) {
        item = _0x1bc523[_0x20ea3a];
        if (item[0] < _0x3d0152) {
          _0x1bc523.splice(_0x20ea3a--, 1);
          if (_0x3d0152 - item[0] < 2) dplayer.danmaku.draw({
            "text": item[4],
            "color": "#" + item[2].toString(16),
            "type": "right"
          });
        }
      }
    }
  });
  dplayer.on("ended", function () {
    if ("on" == localStorage.autonext) _0x2e7d58(true);
  });
});
let _0x2ad0c5 = function (_0x366846, _0x565310) {
  let _0x5b54c6 = "",
    _0x45c565 = _0x565310 % 2 ? -1 : 1,
    _0x483d86 = _0x565310[0];
  for (var _0x12225e = _0x366846.length - 1; _0x12225e >= 0; _0x12225e--) {
    _0x5b54c6 += String.fromCharCode((_0x366846.charCodeAt(_0x12225e) ^ _0x483d86) + _0x45c565);
  }
  _0x366846 = atob(_0x5b54c6);
  _0x5b54c6 = [];
  for (var _0x12225e = 0, _0x3cd7c5 = _0x366846.length; _0x12225e < _0x3cd7c5; ++_0x12225e) _0x5b54c6.push(_0x366846.charCodeAt(_0x12225e));
  _0x366846 = new Uint8Array(_0x5b54c6);
  return pako.ungzip(_0x366846, {
    "to": "string"
  });
};
function _0x57ebc4(_0x1619b2, _0x5936ef) {
  if (_0x183fbf) {
    _0x183fbf.loader.destroy();
    _0x183fbf = "";
  }
  _0x183fbf = new p2pml[_0x1619b2].Engine({
    "segments": {
      "swarmId": _0x5936ef,
      "forwardSegmentCount": 50
    },
    "loader": {
      "consumeOnly": false,
      "cachedSegmentExpiration": 86400000,
      "cachedSegmentsCount": 1024,
      "requiredSegmentsPriority": 6,
      "httpDownloadMaxPriority": 9,
      "httpDownloadProbability": 0.06,
      "httpDownloadProbabilityInterval": 1000,
      "httpDownloadProbabilitySkipIfNoPeers": true,
      "httpDownloadInitialTimeoutPerSegment": 4000,
      "p2pDownloadMaxPriority": 50,
      "httpFailedSegmentTimeout": 1000,
      "simultaneousP2PDownloads": 20,
      "simultaneousHttpDownloads": 1,
      "trackerAnnounce": _0x47864c.trackers.split("|"),
      "rtcConfig": {
        "iceServers": [{
          "urls": "stun:stun.qq.com:3478"
        }, {
          "urls": "stun:stun.l.google.com:19302"
        }]
      },
      "segmentUrlBuilder": function (_0x57d433) {
        if ("iqiyi" == atob(_0x619b2c.site)) {
          return _0x50f6f9(_0x57d433.url);
        }
        return _0x57d433.url;
      }
    }
  });
  return _0x183fbf;
}
var _0x51f8d0 = [];
function _0x50f6f9(_0x654ed1) {
  if (_0x654ed1.indexOf("iqiyi.com") === -1) return _0x654ed1;else if (_0x654ed1.indexOf("videos/v0/") != -1) return _0x654ed1;
  let _0x921a01 = _0x654ed1.match(/videos\/.*?\.(ts|m4s)/)[0],
    _0xff418 = "";
  if ("undefined" === typeof _0x51f8d0[_0x921a01]) {
    $.ajax({
      "type": "get",
      "url": _0x654ed1 + "&abs_speed=10000&pv=0.1&cross-domain=1&mss=1&stauto=0",
      "dataType": "json",
      "success": _0x48718c => {
        _0xff418 = _0x51f8d0[_0x921a01] = _0x48718c;
      },
      "error": function (_0x8c3455) {}
    });
  } else _0xff418 = _0x51f8d0[_0x921a01];
  if (!_0xff418) return _0x654ed1;
  let _0x34a9d4, _0xa624bc, _0x338aec;
  _0x34a9d4 = _0x654ed1.match(/start=(\d+)/)[0];
  _0xa624bc = _0x654ed1.match(/end=(\d+)/)[0];
  _0x338aec = _0x654ed1.indexOf("contentlength") !== -1 ? _0x654ed1.match(/contentlength=(\d+)/)[0] : "";
  _0xff418 = _0xff418.d[Math.floor(Math.random() * _0xff418.d.length)];
  $.get(_0xff418, function (_0x5b4b58) {
    if ("401" == _0x5b4b58.status) {
      $.get("https://" + _0x47864c.sproxy + "/?task=chack_url&url=" + btoa(_0xff418));
      _0x179841.destroy();
    }
  });
  return _0xff418.URL.replace(/start=\d+/, _0x34a9d4).replace(/end=\d+/, _0xa624bc).replace(/contentlength=\d+/, _0x338aec);
}
function _0x1d4119() {
  var _0x3c2cfb = 0;
  if ("undefined" == typeof _0x183fbf) return false;
  _0x183fbf.loader.on(p2pml.core.Events.PeerConnect, function (_0x4063eb) {
    _0x3c2cfb++;
    $(".dplayer-info-panel-item-p2p-peer .dplayer-info-panel-item-data").text(_0x3c2cfb);
  });
  _0x183fbf.loader.on(p2pml.core.Events.PeerClose, function (_0x4e44ae) {
    _0x3c2cfb--;
    $(".dplayer-info-panel-item-p2p-peer .dplayer-info-panel-item-data").text(_0x3c2cfb);
  });
  var _0x3b7d0f = 0;
  _0x183fbf.loader.on(p2pml.core.Events.SegmentLoaded, function (_0xb372f4, _0x489ef8) {
    clearTimeout(_0x3b7d0f);
    var _0x3f7f92 = _0xb372f4.downloadBandwidth * 0.8;
    _0x3f7f92 = _0x3f7f92 > 1024 ? (_0x3f7f92 / 1024).toFixed(1) + "MB/s" : _0x3f7f92.toFixed(1) + "KB/s";
    $(".speed").html(_0x3f7f92);
    _0x3b7d0f = setTimeout("$('.speed').html('')", 3000);
  });
  var _0x3c59c3 = 0;
  _0x183fbf.loader.on(p2pml.core.Events.PieceBytesDownloaded, function (_0x31d954, _0x3b28e6, _0x26278e) {
    if ("p2p" == _0x31d954) {
      _0x3c59c3 += _0x3b28e6 / 1024 / 1024;
      $(".dplayer-info-panel-item-p2p-down .dplayer-info-panel-item-data").text(_0x3c59c3.toFixed(1) + "M");
    }
  });
  var _0x3f57ff = 0;
  _0x183fbf.loader.on(p2pml.core.Events.PieceBytesUploaded, function (_0x4aeaaa, _0xd2e30c) {
    if ("p2p" == _0x4aeaaa) {
      _0x3f57ff += _0xd2e30c / 1024 / 1024;
      $(".dplayer-info-panel-item-p2p-up .dplayer-info-panel-item-data").text(_0x3f57ff.toFixed(1) + "M");
    }
  });
}
function _0x121d60(_0x7ce4e1, _0x20bcb0) {
  if (null == localStorage.getItem(_0x7ce4e1)) {
    localStorage.setItem(_0x7ce4e1, _0x20bcb0);
    return _0x20bcb0;
  } else return localStorage.getItem(_0x7ce4e1);
}
function _0x36fee2(_0x27c6ab) {
  if (null == localStorage.getItem("history-point")) localStorage.setItem("history-point", "{}");
  let _0x25450b = JSON.parse(localStorage.getItem("history-point"));
  return _0x25450b.hasOwnProperty(_0x27c6ab) ? _0x25450b[_0x27c6ab] : 0;
}
function _0x53f673(_0x3ff1f8, _0x512ca6) {
  let _0x4d8da3 = JSON.parse(localStorage.getItem("history-point") ? localStorage.getItem("history-point") : "{}");
  _0x4d8da3[_0x3ff1f8] = _0x512ca6;
  localStorage.setItem("history-point", JSON.stringify(_0x4d8da3));
}
function _0x12cfdf(_0x46314e) {
  let _0x3b7ce1 = JSON.parse(localStorage.getItem("history-point"));
  delete _0x3b7ce1[_0x46314e];
  localStorage.setItem("history-point", JSON.stringify(_0x3b7ce1));
}
var _0x49967a = subtitle_show = [];
function _0x442098(_0x53a649) {
  if (!_0x208a3c) return false;
  for (let _0x38ab3e = 0; _0x38ab3e < subtitle_show.length; _0x38ab3e++) {
    const _0x4f3af3 = subtitle_show[_0x38ab3e];
    if (_0x53a649 > _0x4f3af3.e) {
      subtitle_show.splice(_0x38ab3e--, 1);
    } else if (_0x4f3af3.s < _0x53a649 && _0x4f3af3.e > _0x53a649) {
      if (_0x4f3af3.s == subtitle_show[_0x38ab3e + 1].s && _0x4f3af3.e == subtitle_show[_0x38ab3e + 1].e) {
        $(".dplayer-subtitle").html("<p>" + subtitle_show[_0x38ab3e + 1].c + "<br>" + _0x4f3af3.c + "</p>");
      } else {
        $(".dplayer-subtitle").html("<p>" + _0x4f3af3.c + "</p>");
      }
      break;
    } else {
      $(".dplayer-subtitle").html("");
    }
  }
}
function _0x3bbcf2(_0x35aa0b) {
  $.getJSON(_0x35aa0b).then(function (_0x540f18) {
    _0x49967a = _0x540f18;
    subtitle_show = [].concat(_0x49967a);
  });
}
function _0x4cd47f(_0x5684bf, _0x517249) {
  _0x5684bf.muted = true;
  $(".dplayer-notice").hide();
  let _0x573310 = _0x5684bf.src + "&lang=" + _0x658c09 + "&cmd=sproxy";
  _0x47864c.axios.get(_0x573310).then(_0x472c58 => {
    _0x1b99f5 = _0x472c58.data;
    if (0 == _0x1b99f5.version) {
      if (["mgtv", "bilibili", "yyw"].indexOf(atob(_0x619b2c.site)) > -1) {
        _0x47864c.$(".bi-plugin").click();
        return false;
      }
    }
    if ("911" == _0x1b99f5.code) {
      _0x47864c.$(".btn-verify").click();
      return false;
    }
    $(".dplayer-notice").html("资源解析中...").show();
    if ("reload" == _0x1b99f5.cmd && "youku" == atob(_0x47864c.video.site)) {
      $.ajax({
        "url": _0x2ad0c5(_0x1b99f5.m3u8, _0x1b99f5.uid),
        "method": "GET",
        "success": _0x472c58 => {
          let _0x348c09 = btoa(String.fromCharCode.apply(null, new Uint8Array(pako.gzip(_0x472c58))));
          _0x47864c.axios.post(_0x573310, {
            "data": _0x348c09
          }).then(_0x472c58 => {
            _0x1b99f5 = _0x472c58.data;
            _0x28821f(_0x5684bf, _0x517249);
          });
        }
      });
    } else _0x28821f(_0x5684bf, _0x517249);
  });
  _0x5684bf.src = "";
}
function _0x28821f(_0x28998c, _0xb18dfd) {
  if (_0x1b99f5.type && "error" == _0x1b99f5.type) {
    dplayer.notice(_0x1b99f5.text, 0);
    return false;
  }
  _0x1b99f5.m3u8 = _0x2ad0c5(_0x1b99f5.m3u8, _0x1b99f5.uid);
  _0x1b99f5.base = atob(_0x1b99f5.base);
  _0x1b99f5.m3u8 = _0x1b99f5.m3u8.replace(/d::/g, _0x1b99f5.base);
  if ("mp4" == _0x1b99f5.type) _0x28998c.src = _0x1b99f5.m3u8;else {
    let _0x53c9ff = new Blob([_0x1b99f5.m3u8], {
      "type": "image/png"
    });
    let _0x573310 = URL.createObjectURL(_0x53c9ff);
    _0x28998c.src = _0x573310;
    setTimeout(() => {
      _0x53c9ff = null;
      URL.revokeObjectURL(_0x573310);
    }, 1000);
  }
  let _0x26017e = localStorage.getItem("start");
  if (null != _0x26017e) {
    localStorage.removeItem("start");
    _0x1b99f5.head = parseFloat(_0x26017e);
  } else {
    let _0x295593 = _0x36fee2(_0x619b2c.id);
    _0x1b99f5.head = 0 != _0x295593 ? _0x295593 : "off" == _0x3e6ab3 ? 0 : _0x1b99f5.head;
    if (0 != _0x619b2c.point && ("undefined" == typeof _0x1b99f5.head || _0x619b2c.point > _0x1b99f5.head)) _0x1b99f5.head = _0x619b2c.point;
  }
  if (_0x1b99f5.point) _0xb18dfd.options.highlight = _0x1b99f5.point;
  if ($(".lang").length == 0 && "undefined" != typeof _0x1b99f5.langs) {
    var _0x32b372 = _0x1b99f5.langs[_0x658c09] ? _0x1b99f5.langs[_0x658c09].name : _0x1b99f5.langs[Object.keys(_0x1b99f5.langs)[0]].name;
    var _0x5778bf = "<div class=\"dplayer-quality lang\"><button class=\"dplayer-icon dplayer-quality-icon\">" + _0x32b372 + "</button><div class=\"dplayer-quality-mask\"><div class=\"dplayer-quality-list\">";
    for (var _0x30a9c3 in _0x1b99f5.langs) {
      _0x5778bf += "<div class=\"dplayer-quality-item\" data-index=\"" + _0x30a9c3 + "\">" + _0x1b99f5.langs[_0x30a9c3].name + "</div>";
    }
    _0x5778bf += "</div></div></div>";
    $(".dplayer-quality").before(_0x5778bf);
    $(".lang .dplayer-quality-item").click(function () {
      if ($(this).attr("data-index") == _0x658c09) return;
      _0x658c09 = localStorage.lang = $(this).attr("data-index");
      $(".lang button").text(_0x1b99f5.langs[_0x658c09].name);
      location.reload();
    });
  }
  if (_0x1b99f5.sublink) {
    $(".dplayer-subtitle-btn").show();
    _0x3bbcf2(_0x1b99f5.sublink);
    _0x208a3c = true;
  } else $(".dplayer-subtitle-btn").hide();
  if ("undefined" != typeof _0x1b99f5.langs) {
    _0x41e28e += _0x658c09;
  }
  if (_0x1b99f5.buffer) _0xb18dfd.quality.buffer = _0x1b99f5.buffer;
  var _0x41e28e = _0x619b2c.id + "|" + _0x1b99f5.encode + "|";
  if (_0x1b99f5.quality) _0x41e28e += _0x1b99f5.quality;else _0x41e28e += _0xb18dfd.quality.url.substr(-2);
  if ("dHhzcA==" == _0x47864c.video.site && _0x1b99f5.m3u8.indexOf(".mp4") > -1 && _0x1b99f5.m3u8.indexOf("EXT-X-MAP") > -1) {
    Hls = Hlsv1;
    if (Hls.isSupported()) {
      _0x179841 = new Hls({
        "maxBufferSize": 300000000,
        "startPosition": _0x1b99f5.head,
        "maxBufferLength": _0xb18dfd.quality.buffer,
        "decode_key": _0x1b99f5.key ? eval("(" + _0x1b99f5.key + ")") : ""
      });
      _0x1b99f5.head = false;
      _0x179841.loadSource(_0x28998c.src);
      _0x179841.attachMedia(_0x28998c);
    }
  } else if ("hls" == _0x1b99f5.type) {
    _0x183fbf = _0x57ebc4("hlsjs", _0x41e28e);
    if (Hls.isSupported()) {
      _0x179841 = new Hls({
        "maxBufferSize": 300000000,
        "startPosition": _0x1b99f5.head,
        "maxBufferLength": _0xb18dfd.quality.buffer,
        "decode_key": _0x1b99f5.key ? eval("(" + _0x1b99f5.key + ")") : "",
        "loader": p2pml.core.HybridLoader.isSupported() ? _0x183fbf.createLoaderClass() : Hls.DefaultConfig.loader
      });
      _0x1b99f5.head = false;
      p2pml.hlsjs.initHlsJsPlayer(_0x179841);
      _0x179841.loadSource(_0x28998c.src);
      _0x179841.attachMedia(_0x28998c);
    }
  } else if ("shaka" == _0x1b99f5.type || "dash" == _0x1b99f5.type) {
    shaka.polyfill.installAll();
    if (_0x1b99f5.shaka) {
      if (!_0x47864c.supportDRM) {
        _0x1b99f5 = "";
        dplayer.notice("当前浏览器不支持widevine加密，建议升级最新版！或更换最新版谷歌浏览器！", 0);
      }
    }
    var _0x306947 = _0x28998c.src;
    _0x183fbf = _0x57ebc4("shaka", _0x41e28e);
    _0x183fbf.loader.settings.httpUseRanges = false;
    _0x2ac26f = new shaka.Player(_0x28998c);
    _0x183fbf.initShakaPlayer(_0x2ac26f);
    let _0xf807f = _0x1b99f5.shaka ? {
      "com.widevine.alpha": _0x1b99f5.shaka.widevine
    } : {};
    _0x2ac26f.configure({
      "streaming": {
        "bufferingGoal": _0xb18dfd.quality.buffer
      },
      "drm": {
        "servers": _0xf807f
      },
      "manifest": {
        "hls": {
          "useFullSegmentsForStartTime": true
        }
      }
    });
    shaka.net.NetworkingEngine.registerScheme("blob", shaka.net.HttpFetchPlugin);
    _0x1b99f5.type = "dash" == _0x1b99f5.type ? "application/dash+xml" : "application/x-mpegurl";
    _0x2ac26f.load(_0x306947, 0, _0x1b99f5.type);
  } else if ("flv" == _0x1b99f5.type) {
    if (_0x6fffab) _0x6fffab.unload();
    _0x6fffab = flvjs.createPlayer({
      "type": "flv",
      "segments": _0x1b99f5.segments
    }, {
      "referrerPolicy": "no-referrer",
      "lazyLoadMaxDuration": _0xb18dfd.quality.buffer * 3,
      "stashInitialSize": 128,
      "seekType": "range"
    });
    _0x6fffab.attachMediaElement(_0x28998c);
    _0x6fffab.load();
  }
  delete _0x1b99f5.m3u8;
}
function _0x3c47a1() {
  if (dplayer.video !== document.pictureInPictureElement) {
    dplayer.video.requestPictureInPicture();
  } else {
    document.exitPictureInPicture();
  }
}
function _0x2e7d58(_0x242e9a) {
  _0x2e7d58 = Function.prototype;
  dplayer.pause();
  setTimeout(() => {
    _0x12cfdf(_0x619b2c.id);
    if (_0x242e9a) _0x47864c.jQuery(".control .bi-skip-end").click();else _0x47864c.jQuery(".control .bi-skip-start").click();
  }, 300);
}
var _0x409ecc = 0;
document.addEventListener("keydown", _0x3f8cab => {
  let _0xf406c = _0x3f8cab || window.event || arguments.callee.caller.arguments[0];
  if (_0xf406c) {
    if (_0xf406c.keyCode == 13) {
      dplayer.fullScreen.toggle();
    } else if (_0xf406c.keyCode == 32) {
      dplayer.toggle();
    } else if (_0xf406c.keyCode == 37) {
      dplayer.seek(dplayer.video.currentTime - 5);
    } else if (_0xf406c.keyCode == 38) {
      dplayer.volume(dplayer.volume() + 0.05);
    } else if (_0xf406c.keyCode == 39) {
      if (0 == _0x409ecc) _0x409ecc = new Date().getTime();
      if (_0x3f8cab.repeat) {
        if (2 != dplayer.video.playbackRate) {
          dplayer.video.playbackRate = 2;
          dplayer.notice("正在 2 倍速播放", 0);
        }
      }
    } else if (_0xf406c.keyCode == 40) {
      dplayer.volume(dplayer.volume() - 0.05);
    } else if (_0xf406c.keyCode == 65) {
      _0x2e7d58(false);
    } else if (_0xf406c.keyCode == 68) {
      _0x2e7d58(true);
    } else if (_0xf406c.keyCode == 70) {
      dplayer.fullScreen.toggle();
    } else if (_0xf406c.keyCode == 77) {
      $(".dplayer-volume-icon").click();
    } else if (_0xf406c.keyCode == 80) {
      _0x47864c.jQuery(".control .bi-fullscreen").click();
    } else if (_0xf406c.keyCode == 83) {
      $(".dplayer-camera-icon").click();
    } else if (_0xf406c.keyCode == 85) {
      $(".dplayer-setting-showdan .dplayer-toggle").click();
    } else return true;
    _0xf406c.preventDefault();
  }
});
document.onkeyup = _0x2524d => {
  let _0x1205fd = _0x2524d || window.event || arguments.callee.caller.arguments[0];
  if (_0x1205fd) {
    if (_0x1205fd.keyCode == 39) {
      if (new Date().getTime() - _0x409ecc < 500) dplayer.seek(dplayer.video.currentTime + 5);else {
        dplayer.video.playbackRate = 1;
        $(".dplayer-notice").css("opacity", "0");
      }
      _0x409ecc = 0;
    } else return true;
    _0x1205fd.preventDefault();
  }
};
_0xode = "jsjiami.com.v6";