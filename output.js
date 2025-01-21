//1/22/2025, 4:10:31 AM
//Project:https://github.com/dream385/decode
const tabIDs = {},
  streamUrls = {};
var apiUrl;
var apiKey;
let popup = null;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  try {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let _0x5e9129 = JSON.parse(xhr.responseText);
        apiUrl = _0x5e9129.host;
        apiKey = _0x5e9129.key;
      } else {
        alert("license.json file is missing from your addon.\nContact https://t.me/widevinechrome for support");
      }
    }
  } catch (_0x408d32) {
    alert("Error Loading api host and key from license.json file.\nContact https://t.me/widevinechrome for support");
  }
};
xhr.open("GET", "license.json", true);
xhr.send();
function decryptKeys(_0x14b616) {
  let _0x7d8c69 = _0x14b616,
    _0x1448da = tabIDs[_0x14b616],
    _0x41838b = JSON.stringify(_0x1448da),
    _0x86dcfb = "",
    _0x187b5b = streamUrls[_0x14b616].urls || [];
  console.log(_0x187b5b);
  if (_0x187b5b.length !== 0) {
    if (_0x187b5b.length === 1) {
      _0x86dcfb = _0x187b5b[0];
    } else {
      for (let _0x5366b6 of _0x187b5b) {
        _0x86dcfb += "\n" + _0x5366b6;
      }
    }
  } else {
    _0x86dcfb = "\nKeys were extracted successfully as shown below but the stream urls were not captured.\nTry reloading the page once.\nIf it still doesn't work but you want them to be displayed.\nContact https://t.me/widevinechrome for support";
  }
  streamUrls[_0x14b616].urls = [];
  var _0x296660 = new XMLHttpRequest();
  _0x296660.open("POST", apiUrl, true);
  _0x296660.setRequestHeader("chrome-api-key", apiKey);
  _0x296660.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  _0x296660.onload = function () {
    try {
      let _0x2c6590 = this.responseText,
        _0xb18786 = JSON.parse(_0x2c6590);
      console.log(_0xb18786);
      if (_0xb18786.message === "success") {
        let _0x5c879b = _0xb18786.keys;
        console.log(_0x5c879b);
        chrome.browserAction.setBadgeBackgroundColor({
          color: "#00FF00",
          tabId: _0x7d8c69
        });
        chrome.browserAction.setBadgeText({
          text: "✅",
          tabId: _0x7d8c69
        });
        if (popup && !popup.closed) {
          popup.document.getElementById("keyInput").value = "PSSH: " + _0x1448da?.["init_data"] + "\n\nStream Url(s): " + _0x86dcfb + "\n\nDecryption Key(s):\n" + _0x5c879b;
          popup.focus();
        } else {
          const _0x5aa795 = 700,
            _0x2f3c81 = 500,
            _0x20e095 = (screen.width - _0x5aa795) / 2,
            _0x4d07d0 = (screen.height - _0x2f3c81) / 2;
          popup = window.open("popup.html", "Decryption Keys", "width=" + _0x5aa795 + ",height=" + _0x2f3c81 + ",left=" + _0x20e095 + ",top=" + _0x4d07d0 + ",resizable=false");
          popup.onload = function () {
            popup.document.getElementById("keyInput").value = "PSSH: " + _0x1448da?.["init_data"] + "\n\nStream Url(s): " + _0x86dcfb + "\n\nDecryption Keys:\n" + _0x5c879b;
            const _0x5e7013 = popup.document.querySelector(".box"),
              _0xe0b203 = _0x5e7013.offsetWidth,
              _0x32fb4f = _0x5e7013.offsetHeight;
            popup.resizeTo(_0xe0b203 + 40, _0x32fb4f + 80);
          };
        }
      } else {
        alert("Contact https://t.me/widevinechrome for support");
      }
    } catch (_0x3ec1ae) {
      alert("Contact https://t.me/widevinechrome for support");
    }
  };
  _0x296660.send(_0x41838b);
}
function getStreamLinks(_0x5a2e98) {
  streamUrls[_0x5a2e98.tabId] = streamUrls[_0x5a2e98.tabId] || {};
  if (_0x5a2e98.method == "GET") {
    if (!_0x5a2e98.url.includes("mediaResource") && !_0x5a2e98.url.includes("tracker") && !_0x5a2e98.url.includes("youboranqs01") && !_0x5a2e98.url.includes("infinity-c20") && !_0x5a2e98.url.includes(".dash?") && !_0x5a2e98.url.includes(".mp4?") && !_0x5a2e98.url.includes("/Fragments") && !_0x5a2e98.url.includes(".m4s?") && !_0x5a2e98.url.endsWith(".dash") && !_0x5a2e98.url.endsWith(".mp4") && !_0x5a2e98.url.endsWith(".m4s")) {
      if (_0x5a2e98.url.includes(".mpd") || _0x5a2e98.url.includes(".ism") || _0x5a2e98.url.includes("manifest")) {
        streamUrls[_0x5a2e98.tabId] = {
          urls: streamUrls[_0x5a2e98.tabId].urls ?? []
        };
        if (!streamUrls[_0x5a2e98.tabId].urls.includes(_0x5a2e98.url)) {
          console.log(_0x5a2e98.url);
          streamUrls[_0x5a2e98.tabId].urls.push(_0x5a2e98.url);
        }
      } else {
        if (_0x5a2e98.url.includes("m3u8") && !_0x5a2e98.url.includes(".ts") && !_0x5a2e98.url.includes(".m4a")) {
          streamUrls[_0x5a2e98.tabId] = {
            urls: streamUrls[_0x5a2e98.tabId].urls ?? []
          };
          !streamUrls[_0x5a2e98.tabId].urls.includes(_0x5a2e98.url) && (console.log(_0x5a2e98.url), streamUrls[_0x5a2e98.tabId].urls.push(_0x5a2e98.url));
        } else {
          if (_0x5a2e98.url.includes("googlevideo.com/videoplayback/id/") && _0x5a2e98.url.includes("itag") && _0x5a2e98.url.includes("?range=") && !_0x5a2e98.url.includes("redirector")) {
            streamUrls[_0x5a2e98.tabId] = {
              urls: streamUrls[_0x5a2e98.tabId].urls ?? []
            };
            let _0x38a081 = _0x5a2e98.url,
              _0x3cfcba = _0x38a081.indexOf("?");
            _0x3cfcba !== -1 && (_0x38a081 = _0x38a081.substring(0, _0x3cfcba));
            !streamUrls[_0x5a2e98.tabId].urls.includes(_0x38a081) && (console.log(_0x38a081), streamUrls[_0x5a2e98.tabId].urls.push(_0x38a081));
          } else {
            if (_0x5a2e98.url.includes("nflxvideo.net") && _0x5a2e98.url.includes("range") && !_0x5a2e98.url.includes("&sc=")) {
              streamUrls[_0x5a2e98.tabId] = {
                urls: streamUrls[_0x5a2e98.tabId].urls ?? []
              };
              let _0x545dd1 = _0x5a2e98.url,
                _0x13d237 = _0x545dd1.indexOf("range/"),
                _0x47c248 = _0x545dd1.indexOf("?"),
                _0x268e23 = _0x545dd1.substring(0, _0x13d237) + _0x545dd1.substring(_0x47c248);
              !streamUrls[_0x5a2e98.tabId].urls.includes(_0x268e23) && (console.log(_0x268e23), streamUrls[_0x5a2e98.tabId].urls.push(_0x268e23));
            }
          }
        }
      }
    }
  }
}
chrome.webRequest.onBeforeRequest.addListener(getStreamLinks, {
  urls: ["<all_urls>"],
  types: ["xmlhttprequest"]
}, ["requestBody"]);
chrome.runtime.onMessage.addListener((_0x4d3921, _0x3965b2, _0x359a12) => {
  if (!_0x4d3921 || !_0x3965b2.tab) {
    return;
  }
  tabIDs[_0x3965b2.tab.id] = tabIDs[_0x3965b2.tab.id] || {};
  if (_0x4d3921.message.startsWith("CAES")) {
    tabIDs[_0x3965b2.tab.id] = {
      init_data: tabIDs[_0x3965b2.tab.id].init_data ?? "",
      license_request: _0x4d3921.message,
      license_response: tabIDs[_0x3965b2.tab.id].license_response ?? "",
      session: _0x4d3921.session_id
    };
  } else {
    if (_0x4d3921.message.startsWith("CAIS") && _0x4d3921.message.length > 500) {
      if (_0x4d3921.session_id === tabIDs[_0x3965b2.tab.id].session) {
        tabIDs[_0x3965b2.tab.id] = {
          init_data: tabIDs[_0x3965b2.tab.id].init_data ?? "",
          license_request: tabIDs[_0x3965b2.tab.id].license_request ?? "",
          license_response: _0x4d3921.message,
          session: tabIDs[_0x3965b2.tab.id].session ?? ""
        };
        console.log(tabIDs[_0x3965b2.tab.id]);
        decryptKeys(_0x3965b2.tab.id);
      }
    } else {
      !_0x4d3921.message.startsWith("CAUS") && !_0x4d3921.message.startsWith("CAQ") && !_0x4d3921.message.startsWith("Cr") && (tabIDs[_0x3965b2.tab.id] = {
        init_data: _0x4d3921.message,
        license_request: tabIDs[_0x3965b2.tab.id].license_request ?? "",
        license_response: tabIDs[_0x3965b2.tab.id].license_response ?? "",
        session: tabIDs[_0x3965b2.tab.id].session ?? ""
      });
    }
  }
});