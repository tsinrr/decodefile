//1/22/2025, 4:12:38 AM
//Project:https://github.com/dream385/decode
const copyKeys = document.getElementById("copyKeys"),
  copyUrl = document.getElementById("copyUrl"),
  downloadButton = document.getElementById("downloadButton"),
  exitButton = document.getElementById("exitButton"),
  keyInput = document.getElementById("keyInput");
copyKeys.addEventListener("click", () => {
  let _0x4c1d82 = keyInput.value,
    _0x2e2024 = _0x4c1d82.split("Decryption Keys:")[1],
    _0x3d2d6b = document.createElement("textarea");
  document.body.appendChild(_0x3d2d6b);
  _0x3d2d6b.value = _0x2e2024.trim();
  _0x3d2d6b.select();
  document.execCommand("copy");
  document.body.removeChild(_0x3d2d6b);
  alert("Decryption keys copied to clipboard");
});
copyUrl.addEventListener("click", () => {
  let _0x2b9d37 = keyInput.value,
    _0x432c0a = _0x2b9d37.split("Stream Url(s):")[1].split("Decryption Keys:")[0],
    _0x221997 = document.createElement("textarea");
  document.body.appendChild(_0x221997);
  _0x221997.value = _0x432c0a.trim();
  _0x221997.select();
  document.execCommand("copy");
  document.body.removeChild(_0x221997);
  alert("Stream Url(s) copied to clipboard");
});
downloadButton.addEventListener("click", () => {
  let _0x20cf0b = keyInput.value,
    _0x51df65 = _0x20cf0b.split("\n"),
    _0x154946 = _0x51df65[0].substring(6).trim(),
    _0x2d6cbe = _0x20cf0b.split("Stream Url(s):")[1].split("Decryption Keys:")[0];
  _0x2d6cbe = _0x2d6cbe.replace(/^\n+|\n+$/g, "");
  if (_0x2d6cbe.includes("\n")) {
    let _0x468663 = _0x2d6cbe.split("\n"),
      _0x11a117 = [];
    for (let _0x185c89 = 0; _0x185c89 < _0x468663.length; _0x185c89++) {
      let _0x2e595b = _0x468663[_0x185c89];
      _0x2e595b.trim() !== "" && _0x11a117.push(_0x2e595b);
    }
    _0x2d6cbe = _0x11a117;
  }
  let _0x46ba95 = [];
  for (let _0x1142f2 = 3; _0x1142f2 < _0x51df65.length; _0x1142f2++) {
    const _0x4762a7 = _0x51df65[_0x1142f2].trim();
    if (_0x4762a7.startsWith("--key")) {
      let _0x3ca043 = _0x4762a7.split(":"),
        _0x13b314 = _0x3ca043[0].substring(6),
        _0x55f7a1 = _0x3ca043[1];
      _0x46ba95.push({
        kid: _0x13b314,
        key: _0x55f7a1
      });
    }
  }
  let _0x246b1b = [{
      init_data: _0x154946,
      stream_url: _0x2d6cbe,
      keys: _0x20cf0b.split("Decryption Keys:\n")[1].split("\n")
    }],
    _0x517989 = JSON.stringify(_0x246b1b, null, 2),
    _0x374ab7 = document.createElement("a");
  _0x374ab7.href = "data:application/octet-stream," + encodeURIComponent(_0x517989);
  _0x374ab7.download = "keys.json";
  _0x374ab7.click();
});
exitButton.addEventListener("click", () => {
  window.close();
});