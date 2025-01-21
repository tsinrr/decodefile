//1/22/2025, 3:58:46 AM
//Project:https://github.com/dream385/decode
(async () => {
  const _0x18a565 = (_0x4cd337, _0x41abce = 4) => _0x4cd337.split("\n").map(_0x334233 => Array(_0x41abce).fill(" ").join("") + _0x334233).join("\n"),
    _0x42c28f = {
      decode: _0x1962f4 => Uint8Array.from(atob(_0x1962f4), _0x598b89 => _0x598b89.charCodeAt(0)),
      encode: _0x4acf4a => btoa(String.fromCharCode(...new Uint8Array(_0x4acf4a)))
    },
    _0x6b9f27 = (_0x4cccf7, _0x3c162d) => new Proxy(_0x4cccf7, {
      apply: _0x3c162d
    }),
    _0x33edca = (_0x27462a, _0x32e6b7, _0x572918) => Object.defineProperty(_0x27462a, _0x32e6b7, {
      value: _0x6b9f27(_0x27462a[_0x32e6b7], _0x572918)
    });
  _0x33edca(Navigator.prototype, "requestMediaKeySystemAccess", async (_0x120d6e, _0x225127, _0x4a4521) => {
    const [_0x1a4e33, _0x5f4c70] = _0x4a4521;
    console.groupCollapsed("[EME] Navigator::requestMediaKeySystemAccess\n" + ("    Key System: " + _0x1a4e33 + "\n") + "    Supported Configurations:\n" + _0x18a565(JSON.stringify(_0x5f4c70, null, "    ")));
    console.trace();
    console.groupEnd();
    return _0x120d6e.apply(_0x225127, _0x4a4521);
  });
  _0x33edca(MediaKeySystemAccess.prototype, "createMediaKeys", async (_0x44bcf0, _0x25f7b9, _0x3e5cfd) => {
    console.groupCollapsed("[EME] MediaKeySystemAccess::createMediaKeys\n" + ("    Key System: " + _0x25f7b9.keySystem + "\n") + "    Configurations:\n" + _0x18a565(JSON.stringify(_0x25f7b9.getConfiguration(), null, "    ")));
    console.trace();
    console.groupEnd();
    return _0x44bcf0.apply(_0x25f7b9, _0x3e5cfd);
  });
  _0x33edca(MediaKeys.prototype, "setServerCertificate", async (_0x33d931, _0x49a6d3, _0x15e83f) => {
    const [_0x51a454] = _0x15e83f;
    console.groupCollapsed("[EME] MediaKeys::setServerCertificate\n" + ("    Server Certificate: " + _0x42c28f.encode(_0x51a454)));
    console.trace();
    console.groupEnd();
    return _0x33d931.apply(_0x49a6d3, _0x15e83f);
  });
  function _0x80d7c9(_0x480021) {
    const _0x1cd2da = _0x480021.target,
      {
        sessionId: _0x4f35c9
      } = _0x1cd2da,
      {
        message: _0x20209f,
        messageType: _0x1ed5d2
      } = _0x480021,
      _0x2738e0 = _0x1cd2da.getEventListeners("message").filter(_0x3d7970 => _0x3d7970 !== _0x80d7c9),
      _0x37d3ed = _0x42c28f.encode(_0x20209f),
      _0x27d615 = _0x4f35c9 || "(not available)";
    console.groupCollapsed("[EME] MediaKeySession::message\n" + ("    Session ID: " + _0x27d615 + "\n") + ("    Message Type: " + _0x1ed5d2 + "\n") + ("    Message: " + _0x37d3ed) + "\n    Listeners:", _0x2738e0);
    console.trace();
    console.groupEnd();
    _0x1ed5d2 === "license-request" && (license_request_session = {
      session_id: _0x27d615,
      message: _0x37d3ed
    }, window.postMessage({
      type: "Chrome-CDM-Decryptor-EME-Logger-Message",
      log: license_request_session
    }, "*"));
  }
  function _0x52d5e4(_0x5e7118) {
    const _0x31f5ab = _0x5e7118.target,
      {
        sessionId: _0x596a9a
      } = _0x31f5ab,
      _0x5de527 = _0x31f5ab.getEventListeners("keystatuseschange").filter(_0x29f5be => _0x29f5be !== _0x52d5e4);
    console.groupCollapsed("[EME] MediaKeySession::keystatuseschange\n" + ("    Session ID: " + (_0x596a9a || "(not available)") + "\n") + Array.from(_0x31f5ab.keyStatuses).map(([_0x559b83, _0x481deb]) => "    [" + _0x481deb.toUpperCase() + "] " + _0x42c28f.encode(_0x559b83)).join("\n") + "\n    Listeners:", _0x5de527);
    console.trace();
    console.groupEnd();
  }
  _0x33edca(MediaKeys.prototype, "createSession", (_0x338d4a, _0x398a4a, _0x41a923) => {
    const [_0x4240aa] = _0x41a923;
    console.groupCollapsed("[EME] MediaKeys::createSession\n" + ("    Session Type: " + (_0x4240aa || "temporary (default)")));
    console.trace();
    console.groupEnd();
    const _0x8063f1 = _0x338d4a.apply(_0x398a4a, _0x41a923);
    _0x8063f1.addEventListener("message", _0x80d7c9);
    _0x8063f1.addEventListener("keystatuseschange", _0x52d5e4);
    return _0x8063f1;
  });
  function _0x63437a(_0x5ea6ed) {
    if (this == null) {
      return [];
    }
    const _0x1f6f26 = this[Symbol.for(_0x63437a)];
    if (_0x1f6f26 == null || _0x1f6f26[_0x5ea6ed] == null) {
      return [];
    }
    return _0x1f6f26[_0x5ea6ed];
  }
  EventTarget.prototype.getEventListeners = _0x63437a;
  _0x33edca(EventTarget.prototype, "addEventListener", async (_0x58a21b, _0x39bd86, _0x52a442) => {
    if (_0x39bd86 != null) {
      const [_0xcbdcff, _0x1616ca] = _0x52a442,
        _0x1ae115 = Symbol.for(_0x63437a);
      if (!(_0x1ae115 in _0x39bd86)) {
        _0x39bd86[_0x1ae115] = {};
      }
      const _0x23d270 = _0x39bd86[_0x1ae115];
      if (!(_0xcbdcff in _0x23d270)) {
        _0x23d270[_0xcbdcff] = [];
      }
      const _0x52a409 = _0x23d270[_0xcbdcff];
      if (_0x52a409.indexOf(_0x1616ca) < 0) {
        _0x52a409.push(_0x1616ca);
      }
    }
    return _0x58a21b.apply(_0x39bd86, _0x52a442);
  });
  _0x33edca(EventTarget.prototype, "removeEventListener", async (_0x4b30a3, _0x542a42, _0x23c817) => {
    if (_0x542a42 != null) {
      const [_0x1e7104, _0x4ba600] = _0x23c817,
        _0x49394f = Symbol.for(_0x63437a);
      if (!(_0x49394f in _0x542a42)) {
        return;
      }
      const _0x4744ab = _0x542a42[_0x49394f];
      if (!(_0x1e7104 in _0x4744ab)) {
        return;
      }
      const _0x5296ee = _0x4744ab[_0x1e7104],
        _0x1a130a = _0x5296ee.indexOf(_0x4ba600);
      if (_0x1a130a >= 0) {
        _0x5296ee.length === 1 ? delete _0x4744ab[_0x1e7104] : _0x5296ee.splice(_0x1a130a, 1);
      }
    }
    return _0x4b30a3.apply(_0x542a42, _0x23c817);
  });
  _0x33edca(MediaKeySession.prototype, "generateRequest", async (_0x584857, _0x410b1b, _0x3e4875) => {
    const [_0x28bcbb, _0x2fd883] = _0x3e4875,
      _0x5efc7b = _0x42c28f.encode(_0x2fd883),
      _0x239fae = _0x410b1b.sessionId || "(not available)";
    console.groupCollapsed("[EME] MediaKeySession::generateRequest\n" + ("    Session ID: " + _0x239fae + "\n") + ("    Init Data Type: " + _0x28bcbb + "\n") + ("    Init Data: " + _0x5efc7b));
    console.trace();
    console.groupEnd();
    if (_0x5efc7b) {
      pssh_session = {
        session_id: _0x239fae,
        message: _0x5efc7b
      };
      window.postMessage({
        type: "Chrome-CDM-Decryptor-EME-Logger-Message",
        log: pssh_session
      }, "*");
    }
    return _0x584857.apply(_0x410b1b, _0x3e4875);
  });
  _0x33edca(MediaKeySession.prototype, "load", async (_0x2c82d9, _0x726b14, _0x24fa5c) => {
    const [_0x5c6c62] = _0x24fa5c;
    console.groupCollapsed("[EME] MediaKeySession::load\n" + ("    Session ID: " + (_0x5c6c62 || "(not available)")));
    console.trace();
    console.groupEnd();
    return _0x2c82d9.apply(_0x726b14, _0x24fa5c);
  });
  _0x33edca(MediaKeySession.prototype, "update", async (_0x20e624, _0x49ff2f, _0x495337) => {
    const [_0x5b75a8] = _0x495337,
      _0xedef9 = _0x42c28f.encode(_0x5b75a8),
      _0x568afa = _0x49ff2f.sessionId || "(not available)";
    console.groupCollapsed("[EME] MediaKeySession::update\n" + ("    Session ID: " + _0x568afa + "\n") + ("    Response: " + _0xedef9));
    console.trace();
    console.groupEnd();
    _0xedef9 && (license_response_session = {
      session_id: _0x568afa,
      message: _0xedef9
    }, window.postMessage({
      type: "Chrome-CDM-Decryptor-EME-Logger-Message",
      log: license_response_session
    }, "*"));
    return _0x20e624.apply(_0x49ff2f, _0x495337);
  });
  _0x33edca(MediaKeySession.prototype, "close", async (_0x8eb559, _0x2f6a10, _0x3bb51a) => {
    console.groupCollapsed("[EME] MediaKeySession::close\n" + ("    Session ID: " + (_0x2f6a10.sessionId || "(not available)")));
    console.trace();
    console.groupEnd();
    return _0x8eb559.apply(_0x2f6a10, _0x3bb51a);
  });
  _0x33edca(MediaKeySession.prototype, "remove", async (_0xdb6381, _0x2a807c, _0x2812c7) => {
    console.groupCollapsed("[EME] MediaKeySession::remove\n" + ("    Session ID: " + (_0x2a807c.sessionId || "(not available)")));
    console.trace();
    console.groupEnd();
    return _0xdb6381.apply(_0x2a807c, _0x2812c7);
  });
})();