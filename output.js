//1/22/2025, 4:08:48 AM
//Project:https://github.com/dream385/decode
(() => {
  'use strict';

  window.addEventListener("message", _0x2bdf03 => {
    if (_0x2bdf03.source != window) {
      return;
    }
    if (_0x2bdf03.data.type && _0x2bdf03.data.type === "Chrome-CDM-Decryptor-EME-Logger-Message") {
      if (_0x2bdf03.data.log) {
        chrome.runtime.sendMessage(_0x2bdf03.data.log);
      }
    }
  }, false);
  const _0x3c67af = document.createElement("script");
  _0x3c67af.type = "text/javascript";
  _0x3c67af.defer = false;
  _0x3c67af.async = false;
  _0x3c67af.src = chrome.extension.getURL("/eme-logger-mod.js");
  (document.head || document.documentElement).appendChild(_0x3c67af);
  _0x3c67af.remove();
})();