import { watch as K, onScopeDispose as tt, effectScope as ui, Fragment as le, reactive as mt, computed as y, watchEffect as $e, toRefs as fn, capitalize as Fn, shallowRef as G, isVNode as Bc, Comment as Dc, unref as ot, warn as Oa, getCurrentInstance as pc, ref as j, inject as ye, provide as Ae, defineComponent as Ec, camelize as gr, h as jt, toRaw as _e, createVNode as u, mergeProps as N, onBeforeUnmount as nt, readonly as si, onDeactivated as hr, onActivated as Mc, onMounted as at, nextTick as we, TransitionGroup as ci, Transition as Ht, isRef as Bn, toRef as M, onBeforeMount as yr, withDirectives as De, resolveDirective as ct, vShow as wt, onUpdated as $c, Text as Fc, resolveDynamicComponent as Lc, markRaw as Oc, Teleport as Rc, cloneVNode as Nc, createTextVNode as Je, onUnmounted as zc, onBeforeUpdate as Hc, withModifiers as uo, toDisplayString as Nt, vModelText as Wc, resolveComponent as jc, render as br, openBlock as Sr, createBlock as Yc, withCtx as Xt, createElementVNode as Oe, createElementBlock as Gc, createApp as Uc } from "vue";
function rt(e, n) {
  let t;
  function a() {
    t = ui(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  K(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), tt(() => {
    t == null || t.stop();
  });
}
const xe = typeof window < "u", di = xe && "IntersectionObserver" in window, Kc = xe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), so = xe && "EyeDropper" in window;
function co(e, n, t) {
  qc(e, n), n.set(e, t);
}
function qc(e, n) {
  if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Xc(e, n, t) {
  return e.set(kr(e, n), t), t;
}
function Zt(e, n) {
  return e.get(kr(e, n));
}
function kr(e, n, t) {
  if (typeof e == "function" ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
  throw new TypeError("Private element is not present on this object");
}
function xr(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function _t(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => _t(e[a], n[a]));
}
function on(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), xr(e, n.split("."), t));
}
function He(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l > "u" ? t : l;
  }
  if (typeof n == "string") return on(e, n, t);
  if (Array.isArray(n)) return xr(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a > "u" ? t : a;
}
function Pt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function X(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Gn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function vi(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const vo = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), _l = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function wr(e) {
  return Object.keys(e);
}
function Qt(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function fi(e, n) {
  const t = {}, a = new Set(Object.keys(e));
  for (const l of n)
    a.has(l) && (t[l] = e[l]);
  return t;
}
function Al(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) && !(t != null && t.some((o) => o === i)) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Re(e, n) {
  const t = {
    ...e
  };
  return n.forEach((a) => delete t[a]), t;
}
function Ra(e, n) {
  const t = {};
  return n.forEach((a) => t[a] = e[a]), t;
}
const Cr = /^on[^a-z]/, Na = (e) => Cr.test(e), Zc = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Jc = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function Qc(e) {
  return e.isComposing && Jc.includes(e.key);
}
function Yt(e) {
  const [n, t] = Al(e, [Cr]), a = Re(n, Zc), [l, i] = Al(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function Be(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ed(e, n) {
  let t = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), ot(n));
  };
  return a.clear = () => {
    clearTimeout(t);
  }, a.immediate = e, a;
}
function Le(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function fo(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function mo(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function go(e, n) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length)) + e;
}
function td(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function ho(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < n)
    return `${e} B`;
  const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= n && a < t.length - 1; )
    e /= n, ++a;
  return `${e.toFixed(1)} ${t[a]}B`;
}
function Qe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const i = e[l], o = n[l];
    if (Gn(i) && Gn(o)) {
      a[l] = Qe(i, o, t);
      continue;
    }
    if (Array.isArray(i) && Array.isArray(o) && t) {
      a[l] = t(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function Vr(e) {
  return e.map((n) => n.type === le ? Vr(n.children) : n).flat();
}
function tn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tn.cache.has(e)) return tn.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tn.cache.set(e, n), n;
}
tn.cache = /* @__PURE__ */ new Map();
function An(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => An(e, t)).flat(1);
  if (n.suspense)
    return An(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => An(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return An(e, n.component.subTree).flat(1);
  }
  return [];
}
var Sa = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap();
class nd {
  constructor(n) {
    co(this, Sa, []), co(this, Vn, 0), this.size = n;
  }
  push(n) {
    Zt(Sa, this)[Zt(Vn, this)] = n, Xc(Vn, this, (Zt(Vn, this) + 1) % this.size);
  }
  values() {
    return Zt(Sa, this).slice(Zt(Vn, this)).concat(Zt(Sa, this).slice(0, Zt(Vn, this)));
  }
}
function ad(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function mi(e) {
  const n = mt({}), t = y(e);
  return $e(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, {
    flush: "sync"
  }), fn(n);
}
function Aa(e, n) {
  return e.includes(n);
}
function Pr(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ge = () => [Function, Array];
function yo(e, n) {
  return n = "on" + Fn(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function gi(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function Un(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Ir(e, n, t) {
  let a, l = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function nn(e, n) {
  var a, l, i, o;
  const t = Un(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const r = Ir(t, n);
    r ? r.focus() : nn(e, n === "next" ? "first" : "last");
  }
}
function ka(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function _r() {
}
function Dn(e, n) {
  if (!(xe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function za(e) {
  return e.some((n) => Bc(n) ? n.type === Dc ? !1 : n.type !== le || za(n.children) : !0) ? e : null;
}
function ld(e, n) {
  if (!xe || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function id(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return t >= i && t <= r && a >= o && a <= s;
}
function Ta() {
  const e = G(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => vi(e.value)
  }), n;
}
function Ba(e) {
  const n = e.key.length === 1, t = !e.ctrlKey && !e.metaKey && !e.altKey;
  return n && t;
}
const Ar = ["top", "bottom"], od = ["start", "end", "left", "right"];
function Tl(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = Aa(Ar, t) ? "start" : Aa(od, t) ? "top" : "center"), {
    side: Bl(t, n),
    align: Bl(a, n)
  };
}
function Bl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function yl(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function bl(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function bo(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function So(e) {
  return Aa(Ar, e.side) ? "y" : "x";
}
class an {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: i
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function ko(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function Tr(e) {
  return Array.isArray(e) ? new an({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function hi(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], o = +l[5], r = +l[12], s = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], o = +l[3], r = +l[4], s = +l[5];
    else
      return new an(n);
    const c = t.transformOrigin, d = n.x - r - (1 - i) * parseFloat(c), f = n.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), m = i ? n.width / i : e.offsetWidth + 1, v = o ? n.height / o : e.offsetHeight + 1;
    return new an({
      x: d,
      y: f,
      width: m,
      height: v
    });
  } else
    return new an(n);
}
function en(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const Pa = /* @__PURE__ */ new WeakMap();
function rd(e, n) {
  Object.keys(n).forEach((t) => {
    if (Na(t)) {
      const a = Pr(t), l = Pa.get(e);
      if (n[t] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, n[t]]), Pa.has(e) || Pa.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function ud(e, n) {
  Object.keys(n).forEach((t) => {
    if (Na(t)) {
      const a = Pr(t), l = Pa.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const Pn = 2.4, xo = 0.2126729, wo = 0.7151522, Co = 0.072175, sd = 0.55, cd = 0.58, dd = 0.57, vd = 0.62, xa = 0.03, Vo = 1.45, fd = 5e-4, md = 1.25, gd = 1.25, Po = 0.078, Io = 12.82051282051282, wa = 0.06, _o = 1e-3;
function Ao(e, n) {
  const t = (e.r / 255) ** Pn, a = (e.g / 255) ** Pn, l = (e.b / 255) ** Pn, i = (n.r / 255) ** Pn, o = (n.g / 255) ** Pn, r = (n.b / 255) ** Pn;
  let s = t * xo + a * wo + l * Co, c = i * xo + o * wo + r * Co;
  if (s <= xa && (s += (xa - s) ** Vo), c <= xa && (c += (xa - c) ** Vo), Math.abs(c - s) < fd) return 0;
  let d;
  if (c > s) {
    const f = (c ** sd - s ** cd) * md;
    d = f < _o ? 0 : f < Po ? f - f * Io * wa : f - wa;
  } else {
    const f = (c ** vd - s ** dd) * gd;
    d = f > -_o ? 0 : f > -Po ? f - f * Io * wa : f + wa;
  }
  return d * 100;
}
function kt(e) {
  Oa(`Vuetify: ${e}`);
}
function Da(e) {
  Oa(`Vuetify error: ${e}`);
}
function hd(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, Oa(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
const pa = 0.20689655172413793, yd = (e) => e > pa ** 3 ? Math.cbrt(e) : e / (3 * pa ** 2) + 4 / 29, bd = (e) => e > pa ? e ** 3 : 3 * pa ** 2 * (e - 4 / 29);
function Br(e) {
  const n = yd, t = n(e[1]);
  return [116 * t - 16, 500 * (n(e[0] / 0.95047) - t), 200 * (t - n(e[2] / 1.08883))];
}
function Dr(e) {
  const n = bd, t = (e[0] + 16) / 116;
  return [n(t + e[1] / 500) * 0.95047, n(t), n(t - e[2] / 200) * 1.08883];
}
const Sd = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], kd = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, xd = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], wd = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function pr(e) {
  const n = Array(3), t = kd, a = Sd;
  for (let l = 0; l < 3; ++l)
    n[l] = Math.round(Le(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: n[0],
    g: n[1],
    b: n[2]
  };
}
function yi(e) {
  let {
    r: n,
    g: t,
    b: a
  } = e;
  const l = [0, 0, 0], i = wd, o = xd;
  n = i(n / 255), t = i(t / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * n + o[r][1] * t + o[r][2] * a;
  return l;
}
function Dl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Cd(e) {
  return Dl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const To = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Vd = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => Bo({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => Bo({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => Dt({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => Dt({
    h: e,
    s: n,
    v: t,
    a
  })
};
function gt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && kt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && To.test(e)) {
    const {
      groups: n
    } = e.match(To), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return Vd[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || kt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && kt(`'${e}' is not a valid hex(a) color`), Lr(n);
  } else if (typeof e == "object") {
    if (Qt(e, ["r", "g", "b"]))
      return e;
    if (Qt(e, ["h", "s", "l"]))
      return Dt(bi(e));
    if (Qt(e, ["h", "s", "v"]))
      return Dt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Dt(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = (r) => {
    const s = (r + n / 60) % 6;
    return a - a * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function Bo(e) {
  return Dt(bi(e));
}
function Ha(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const n = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(n, t, a), i = Math.min(n, t, a);
  let o = 0;
  l !== i && (l === n ? o = 60 * (0 + (t - a) / (l - i)) : l === t ? o = 60 * (2 + (a - n) / (l - i)) : l === a && (o = 60 * (4 + (n - t) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, s = [o, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function Er(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = a - a * t / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: n,
    s: o,
    l: i,
    a: l
  };
}
function bi(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, i = a + t * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: n,
    s: o,
    v: i,
    a: l
  };
}
function Mr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function $r(e) {
  return Mr(Dt(e));
}
function Ca(e) {
  const n = Math.round(e).toString(16);
  return ("00".substr(0, 2 - n.length) + n).toUpperCase();
}
function Fr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return `#${[Ca(n), Ca(t), Ca(a), l !== void 0 ? Ca(Math.round(l * 255)) : ""].join("")}`;
}
function Lr(e) {
  e = Pd(e);
  let [n, t, a, l] = td(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function Or(e) {
  const n = Lr(e);
  return Ha(n);
}
function Rr(e) {
  return Fr(Dt(e));
}
function Pd(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = mo(mo(e, 6), 8, "F")), e;
}
function Id(e, n) {
  const t = Br(yi(e));
  return t[0] = t[0] + n * 10, pr(Dr(t));
}
function _d(e, n) {
  const t = Br(yi(e));
  return t[0] = t[0] - n * 10, pr(Dr(t));
}
function pl(e) {
  const n = gt(e);
  return yi(n)[1];
}
function Ad(e, n) {
  const t = pl(e), a = pl(n), l = Math.max(t, a), i = Math.min(t, a);
  return (l + 0.05) / (i + 0.05);
}
function Nr(e) {
  const n = Math.abs(Ao(gt(0), gt(e)));
  return Math.abs(Ao(gt(16777215), gt(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function D(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = {
      ...o,
      default: t[l]
    } : a[l] = o, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const ee = D({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Ee(e, n) {
  const t = pc();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function At() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = Ee(e).type;
  return tn((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let zr = 0, Ia = /* @__PURE__ */ new WeakMap();
function Ue() {
  const e = Ee("getUid");
  if (Ia.has(e)) return Ia.get(e);
  {
    const n = zr++;
    return Ia.set(e, n), n;
  }
}
Ue.reset = () => {
  zr = 0, Ia = /* @__PURE__ */ new WeakMap();
};
function Td(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const pn = Symbol.for("vuetify:defaults");
function Bd(e) {
  return j(e);
}
function Si() {
  const e = ye(pn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function pe(e, n) {
  const t = Si(), a = j(e), l = y(() => {
    if (ot(n == null ? void 0 : n.disabled)) return t.value;
    const o = ot(n == null ? void 0 : n.scoped), r = ot(n == null ? void 0 : n.reset), s = ot(n == null ? void 0 : n.root);
    if (a.value == null && !(o || r || s)) return t.value;
    let c = Qe(a.value, {
      prev: t.value
    });
    if (o) return c;
    if (r || s) {
      const d = Number(r || 1 / 0);
      for (let f = 0; f <= d && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = Qe(Qe(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? Qe(c.prev, c) : c;
  });
  return Ae(pn, l), l;
}
function Dd(e, n) {
  var t, a;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((a = e.props) == null ? void 0 : a[tn(n)]) < "u";
}
function pd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Si();
  const a = Ee("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = y(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), i = new Proxy(e, {
    get(s, c) {
      var f, m, v, b, h, g, S;
      const d = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(f = l.value) == null ? void 0 : f[c], d].filter((k) => k != null) : typeof c == "string" && !Dd(a.vnode, c) ? ((m = l.value) == null ? void 0 : m[c]) !== void 0 ? (v = l.value) == null ? void 0 : v[c] : ((h = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : h[c]) !== void 0 ? (S = (g = t.value) == null ? void 0 : g.global) == null ? void 0 : S[c] : d : d;
    }
  }), o = G();
  $e(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = Td(pn, a);
    Ae(pn, y(() => o.value ? Qe((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return kt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = D(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(a) {
      return fi(a, n);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = Si();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = pd(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function O() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? dt : Ec)(n);
}
function Ed(e, n) {
  return n.props = e, n;
}
function Tt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return O()({
    name: t ?? Fn(gr(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...ee()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return jt(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function Hr(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Kn = "cubic-bezier(0.4, 0, 0.2, 1)", Md = "cubic-bezier(0.0, 0, 0.2, 1)", $d = "cubic-bezier(0.4, 0, 1, 1)";
function Do(e, n, t) {
  return Object.keys(e).filter((a) => Na(a) && a.endsWith(n)).reduce((a, l) => (a[l.slice(0, -n.length)] = (i) => e[l](i, t(i)), a), {});
}
function ki(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Fd(e) : xi(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ea(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (xi(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function xi(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Fd(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function Ld(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function R(e) {
  const n = Ee("useRender");
  n.render = e;
}
function ae(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Ee("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), r = tn(n), c = r !== n ? y(() => {
    var f, m, v, b;
    return e[n], !!(((f = i.vnode.props) != null && f.hasOwnProperty(n) || (m = i.vnode.props) != null && m.hasOwnProperty(r)) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`) || (b = i.vnode.props) != null && b.hasOwnProperty(`onUpdate:${r}`)));
  }) : y(() => {
    var f, m;
    return e[n], !!((f = i.vnode.props) != null && f.hasOwnProperty(n) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`)));
  });
  rt(() => !c.value, () => {
    K(() => e[n], (f) => {
      o.value = f;
    });
  });
  const d = y({
    get() {
      const f = e[n];
      return a(c.value ? f : o.value);
    },
    set(f) {
      const m = l(f), v = _e(c.value ? e[n] : o.value);
      v === m || a(v) === f || (o.value = m, i == null || i.emit(`update:${n}`, m));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), d;
}
const Od = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
}, po = "$vuetify.", Eo = (e, n) => e.replace(/\{(\d+)\}/g, (t, a) => String(n[+a])), Wr = (e, n, t) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!a.startsWith(po))
    return Eo(a, i);
  const r = a.replace(po, ""), s = e.value && t.value[e.value], c = n.value && t.value[n.value];
  let d = on(s, r, null);
  return d || (kt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), d = on(c, r, null)), d || (Da(`Translation key "${a}" not found in fallback`), d = a), typeof d != "string" && (Da(`Translation key "${a}" has a non-string value`), d = a), Eo(d, i);
};
function jr(e, n) {
  return (t, a) => new Intl.NumberFormat([e.value, n.value], a).format(t);
}
function Sl(e, n, t) {
  const a = ae(e, n, e[n] ?? t.value);
  return a.value = e[n] ?? t.value, K(t, (l) => {
    e[n] == null && (a.value = t.value);
  }), a;
}
function Yr(e) {
  return (n) => {
    const t = Sl(n, "locale", e.current), a = Sl(n, "fallback", e.fallback), l = Sl(n, "messages", e.messages);
    return {
      name: "vuetify",
      current: t,
      fallback: a,
      messages: l,
      t: Wr(t, a, l),
      n: jr(t, a),
      provide: Yr({
        current: t,
        fallback: a,
        messages: l
      })
    };
  };
}
function Rd(e) {
  const n = G((e == null ? void 0 : e.locale) ?? "en"), t = G((e == null ? void 0 : e.fallback) ?? "en"), a = j({
    en: Od,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: n,
    fallback: t,
    messages: a,
    t: Wr(n, t, a),
    n: jr(n, t),
    provide: Yr({
      current: n,
      fallback: t,
      messages: a
    })
  };
}
const En = Symbol.for("vuetify:locale");
function Nd(e) {
  return e.name != null;
}
function zd(e) {
  const n = e != null && e.adapter && Nd(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Rd(e), t = jd(n, e);
  return {
    ...n,
    ...t
  };
}
function Fe() {
  const e = ye(En);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Hd(e) {
  const n = ye(En);
  if (!n) throw new Error("[Vuetify] Could not find injected locale instance");
  const t = n.provide(e), a = Yd(t, n.rtl, e), l = {
    ...t,
    ...a
  };
  return Ae(En, l), l;
}
function Wd() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function jd(e, n) {
  const t = j((n == null ? void 0 : n.rtl) ?? Wd()), a = y(() => t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: y(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Yd(e, n, t) {
  const a = y(() => t.rtl ?? n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: y(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function We() {
  const e = ye(En);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Wa = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function Gd(e, n, t) {
  const a = [];
  let l = [];
  const i = Gr(e), o = Ur(e), r = t ?? Wa[n.slice(-2).toUpperCase()] ?? 0, s = (i.getDay() - r + 7) % 7, c = (o.getDay() - r + 7) % 7;
  for (let d = 0; d < s; d++) {
    const f = new Date(i);
    f.setDate(f.getDate() - (s - d)), l.push(f);
  }
  for (let d = 1; d <= o.getDate(); d++) {
    const f = new Date(e.getFullYear(), e.getMonth(), d);
    l.push(f), l.length === 7 && (a.push(l), l = []);
  }
  for (let d = 1; d < 7 - c; d++) {
    const f = new Date(o);
    f.setDate(f.getDate() + d), l.push(f);
  }
  return l.length > 0 && a.push(l), a;
}
function Ud(e, n, t) {
  const a = t ?? Wa[n.slice(-2).toUpperCase()] ?? 0, l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function Kd(e, n) {
  const t = new Date(e), a = ((Wa[n.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; t.getDay() !== a; )
    t.setDate(t.getDate() + 1);
  return t;
}
function Gr(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Ur(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function qd(e) {
  const n = e.split("-").map(Number);
  return new Date(n[0], n[1] - 1, n[2]);
}
const Xd = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Kr(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let n;
    if (Xd.test(e))
      return qd(e);
    if (n = Date.parse(e), !isNaN(n)) return new Date(n);
  }
  return null;
}
const Mo = new Date(2e3, 0, 2);
function Zd(e, n) {
  const t = n ?? Wa[e.slice(-2).toUpperCase()] ?? 0;
  return Pt(7).map((a) => {
    const l = new Date(Mo);
    return l.setDate(Mo.getDate() + t + a), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(l);
  });
}
function Jd(e, n, t, a) {
  const l = Kr(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[n];
  if (typeof i == "function")
    return i(l, n, t);
  let o = {};
  switch (n) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(t, {
        month: "long"
      }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(t).format(l.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDateTime12h":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "keyboardDateTime24h":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    default:
      o = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(t, o).format(l);
}
function Qd(e, n) {
  const t = e.toJsDate(n), a = t.getFullYear(), l = go(String(t.getMonth() + 1), 2, "0"), i = go(String(t.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function ev(e) {
  const [n, t, a] = e.split("-").map(Number);
  return new Date(n, t - 1, a);
}
function tv(e, n) {
  const t = new Date(e);
  return t.setMinutes(t.getMinutes() + n), t;
}
function nv(e, n) {
  const t = new Date(e);
  return t.setHours(t.getHours() + n), t;
}
function av(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n), t;
}
function lv(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n * 7), t;
}
function iv(e, n) {
  const t = new Date(e);
  return t.setDate(1), t.setMonth(t.getMonth() + n), t;
}
function ov(e) {
  return e.getFullYear();
}
function rv(e) {
  return e.getMonth();
}
function uv(e) {
  return e.getDate();
}
function sv(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function cv(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function dv(e) {
  return e.getHours();
}
function vv(e) {
  return e.getMinutes();
}
function fv(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function mv(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function gv(e, n) {
  return Ma(e, n[0]) && bv(e, n[1]);
}
function hv(e) {
  const n = new Date(e);
  return n instanceof Date && !isNaN(n.getTime());
}
function Ma(e, n) {
  return e.getTime() > n.getTime();
}
function yv(e, n) {
  return Ma(El(e), El(n));
}
function bv(e, n) {
  return e.getTime() < n.getTime();
}
function $o(e, n) {
  return e.getTime() === n.getTime();
}
function Sv(e, n) {
  return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function kv(e, n) {
  return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function xv(e, n) {
  return e.getFullYear() === n.getFullYear();
}
function wv(e, n, t) {
  const a = new Date(e), l = new Date(n);
  switch (t) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Cv(e, n) {
  const t = new Date(e);
  return t.setHours(n), t;
}
function Vv(e, n) {
  const t = new Date(e);
  return t.setMinutes(n), t;
}
function Pv(e, n) {
  const t = new Date(e);
  return t.setMonth(n), t;
}
function Iv(e, n) {
  const t = new Date(e);
  return t.setDate(n), t;
}
function _v(e, n) {
  const t = new Date(e);
  return t.setFullYear(n), t;
}
function El(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Av(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Tv {
  constructor(n) {
    this.locale = n.locale, this.formats = n.formats;
  }
  date(n) {
    return Kr(n);
  }
  toJsDate(n) {
    return n;
  }
  toISO(n) {
    return Qd(this, n);
  }
  parseISO(n) {
    return ev(n);
  }
  addMinutes(n, t) {
    return tv(n, t);
  }
  addHours(n, t) {
    return nv(n, t);
  }
  addDays(n, t) {
    return av(n, t);
  }
  addWeeks(n, t) {
    return lv(n, t);
  }
  addMonths(n, t) {
    return iv(n, t);
  }
  getWeekArray(n, t) {
    return Gd(n, this.locale, t ? Number(t) : void 0);
  }
  startOfWeek(n, t) {
    return Ud(n, this.locale, t ? Number(t) : void 0);
  }
  endOfWeek(n) {
    return Kd(n, this.locale);
  }
  startOfMonth(n) {
    return Gr(n);
  }
  endOfMonth(n) {
    return Ur(n);
  }
  format(n, t) {
    return Jd(n, t, this.locale, this.formats);
  }
  isEqual(n, t) {
    return $o(n, t);
  }
  isValid(n) {
    return hv(n);
  }
  isWithinRange(n, t) {
    return gv(n, t);
  }
  isAfter(n, t) {
    return Ma(n, t);
  }
  isAfterDay(n, t) {
    return yv(n, t);
  }
  isBefore(n, t) {
    return !Ma(n, t) && !$o(n, t);
  }
  isSameDay(n, t) {
    return Sv(n, t);
  }
  isSameMonth(n, t) {
    return kv(n, t);
  }
  isSameYear(n, t) {
    return xv(n, t);
  }
  setMinutes(n, t) {
    return Vv(n, t);
  }
  setHours(n, t) {
    return Cv(n, t);
  }
  setMonth(n, t) {
    return Pv(n, t);
  }
  setDate(n, t) {
    return Iv(n, t);
  }
  setYear(n, t) {
    return _v(n, t);
  }
  getDiff(n, t, a) {
    return wv(n, t, a);
  }
  getWeekdays(n) {
    return Zd(this.locale, n ? Number(n) : void 0);
  }
  getYear(n) {
    return ov(n);
  }
  getMonth(n) {
    return rv(n);
  }
  getDate(n) {
    return uv(n);
  }
  getNextMonth(n) {
    return sv(n);
  }
  getPreviousMonth(n) {
    return cv(n);
  }
  getHours(n) {
    return dv(n);
  }
  getMinutes(n) {
    return vv(n);
  }
  startOfDay(n) {
    return El(n);
  }
  endOfDay(n) {
    return Av(n);
  }
  startOfYear(n) {
    return fv(n);
  }
  endOfYear(n) {
    return mv(n);
  }
}
const qr = Symbol.for("vuetify:date-options"), Fo = Symbol.for("vuetify:date-adapter");
function Bv(e, n) {
  const t = Qe({
    adapter: Tv,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: t,
    instance: Xr(t, n)
  };
}
function Xr(e, n) {
  const t = mt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[n.current.value] ?? n.current.value,
    formats: e.formats
  }) : e.adapter);
  return K(n.current, (a) => {
    t.locale = e.locale[a] ?? a ?? t.locale;
  }), t;
}
function ia() {
  const e = ye(qr);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = Fe();
  return Xr(e, n);
}
function Dv(e, n) {
  const t = e.toJsDate(n);
  let a = t.getFullYear(), l = new Date(a, 0, 1);
  if (t < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const r = new Date(a + 1, 0, 1);
    t >= r && (a = a + 1, l = r);
  }
  const i = Math.abs(t.getTime() - l.getTime()), o = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(o / 7) + 1;
}
const ja = ["sm", "md", "lg", "xl", "xxl"], Ml = Symbol.for("vuetify:display"), Lo = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, pv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lo;
  return Qe(Lo, e);
};
function Oo(e) {
  return xe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Ro(e) {
  return xe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function No(e) {
  const n = xe && !e ? window.navigator.userAgent : "ssr";
  function t(b) {
    return !!n.match(b);
  }
  const a = t(/android/i), l = t(/iphone|ipad|ipod/i), i = t(/cordova/i), o = t(/electron/i), r = t(/chrome/i), s = t(/edge/i), c = t(/firefox/i), d = t(/opera/i), f = t(/win/i), m = t(/mac/i), v = t(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
    chrome: r,
    edge: s,
    firefox: c,
    opera: d,
    win: f,
    mac: m,
    linux: v,
    touch: Kc,
    ssr: n === "ssr"
  };
}
function Ev(e, n) {
  const {
    thresholds: t,
    mobileBreakpoint: a
  } = pv(e), l = G(Ro(n)), i = G(No(n)), o = mt({}), r = G(Oo(n));
  function s() {
    l.value = Ro(), r.value = Oo();
  }
  function c() {
    s(), i.value = No();
  }
  return $e(() => {
    const d = r.value < t.sm, f = r.value < t.md && !d, m = r.value < t.lg && !(f || d), v = r.value < t.xl && !(m || f || d), b = r.value < t.xxl && !(v || m || f || d), h = r.value >= t.xxl, g = d ? "xs" : f ? "sm" : m ? "md" : v ? "lg" : b ? "xl" : "xxl", S = typeof a == "number" ? a : t[a], k = r.value < S;
    o.xs = d, o.sm = f, o.md = m, o.lg = v, o.xl = b, o.xxl = h, o.smAndUp = !d, o.mdAndUp = !(d || f), o.lgAndUp = !(d || f || m), o.xlAndUp = !(d || f || m || v), o.smAndDown = !(m || v || b || h), o.mdAndDown = !(v || b || h), o.lgAndDown = !(b || h), o.xlAndDown = !h, o.name = g, o.height = l.value, o.width = r.value, o.mobile = k, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = t;
  }), xe && window.addEventListener("resize", s, {
    passive: !0
  }), {
    ...fn(o),
    update: c,
    ssr: !!n
  };
}
const mn = D({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function yt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  const t = ye(Ml);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = y(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), l = y(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return {
    ...t,
    displayClasses: l,
    mobile: a
  };
}
const Zr = Symbol.for("vuetify:goto");
function Jr() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function Mv(e) {
  return wi(e) ?? (document.scrollingElement || document.body);
}
function wi(e) {
  return typeof e == "string" ? document.querySelector(e) : vi(e);
}
function kl(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = wi(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function $v(e, n) {
  return {
    rtl: n.isRtl,
    options: Qe(Jr(), e)
  };
}
async function zo(e, n, t, a) {
  const l = t ? "scrollLeft" : "scrollTop", i = Qe((a == null ? void 0 : a.options) ?? Jr(), n), o = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : wi(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : Mv(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let d;
  if (typeof r == "number")
    d = kl(r, t, o);
  else if (d = kl(r, t, o) - kl(s, t, o), i.layout) {
    const b = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    b && (d -= parseInt(b, 10));
  }
  d += i.offset, d = Lv(s, d, !!o, !!t);
  const f = s[l] ?? 0;
  if (d === f) return Promise.resolve(d);
  const m = performance.now();
  return new Promise((v) => requestAnimationFrame(function b(h) {
    const S = (h - m) / i.duration, k = Math.floor(f + (d - f) * c(Le(S, 0, 1)));
    if (s[l] = k, S >= 1 && Math.abs(k - s[l]) < 10)
      return v(d);
    if (S > 2)
      return kt("Scroll target is not reachable"), v(s[l]);
    requestAnimationFrame(b);
  }));
}
function Fv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = ye(Zr), {
    isRtl: t
  } = We();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...n,
    // can be set via VLocaleProvider
    rtl: y(() => n.rtl.value || t.value)
  };
  async function l(i, o) {
    return zo(i, Qe(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => zo(i, Qe(e, o), !0, a), l;
}
function Lv(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? t ? (s = -(l - o), c = 0) : (s = 0, c = l - o) : (s = 0, c = i + -r), Math.max(Math.min(n, c), s);
}
const Ov = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper"
}, Rv = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => jt(Vi, {
    ...e,
    class: "mdi"
  })
}, re = [String, Function, Object, Array], $l = Symbol.for("vuetify:icons"), Ya = D({
  icon: {
    type: re
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Fl = O()({
  name: "VComponentIcon",
  props: Ya(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return u(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? u(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), Ci = dt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Ya(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => u(e.tag, N(t, {
      style: null
    }), {
      default: () => [u("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? u("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : u("path", {
        d: a
      }, null)) : u("path", {
        d: e.icon
      }, null)])]
    });
  }
}), Nv = dt({
  name: "VLigatureIcon",
  props: Ya(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), Vi = dt({
  name: "VClassIcon",
  props: Ya(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
function zv() {
  return {
    svg: {
      component: Ci
    },
    class: {
      component: Vi
    }
  };
}
function Hv(e) {
  const n = zv(), t = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return t === "mdi" && !n.mdi && (n.mdi = Rv), Qe({
    defaultSet: t,
    sets: n,
    aliases: {
      ...Ov,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Wv = (e) => {
  const n = ye($l);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: y(() => {
      var s;
      const a = ot(e);
      if (!a) return {
        component: Fl
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = n.aliases) == null ? void 0 : s[l.slice(1)])), l || kt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: Ci,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Fl,
          icon: l
        };
      const i = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, qn = Symbol.for("vuetify:theme"), ge = D({
  theme: String
}, "theme");
function Ho() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function jv() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ho();
  const n = Ho();
  if (!e) return {
    ...n,
    isDisabled: !0
  };
  const t = {};
  for (const [i, o] of Object.entries(e.themes ?? {})) {
    const r = o.dark || i === "dark" ? (a = n.themes) == null ? void 0 : a.dark : (l = n.themes) == null ? void 0 : l.light;
    t[i] = Qe(r, o);
  }
  return Qe(n, {
    ...e,
    themes: t
  });
}
function Yv(e) {
  const n = jv(e), t = j(n.defaultTheme), a = j(n.themes), l = y(() => {
    const d = {};
    for (const [f, m] of Object.entries(a.value)) {
      const v = d[f] = {
        ...m,
        colors: {
          ...m.colors
        }
      };
      if (n.variations)
        for (const b of n.variations.colors) {
          const h = v.colors[b];
          if (h)
            for (const g of ["lighten", "darken"]) {
              const S = g === "lighten" ? Id : _d;
              for (const k of Pt(n.variations[g], 1))
                v.colors[`${b}-${g}-${k}`] = Fr(S(gt(h), k));
            }
        }
      for (const b of Object.keys(v.colors)) {
        if (/^on-[a-z]/.test(b) || v.colors[`on-${b}`]) continue;
        const h = `on-${b}`, g = gt(v.colors[b]);
        v.colors[h] = Nr(g);
      }
    }
    return d;
  }), i = y(() => l.value[t.value]), o = y(() => {
    var b;
    const d = [];
    (b = i.value) != null && b.dark && Jt(d, ":root", ["color-scheme: dark"]), Jt(d, ":root", Wo(i.value));
    for (const [h, g] of Object.entries(l.value))
      Jt(d, `.v-theme--${h}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...Wo(g)]);
    const f = [], m = [], v = new Set(Object.values(l.value).flatMap((h) => Object.keys(h.colors)));
    for (const h of v)
      /^on-[a-z]/.test(h) ? Jt(m, `.${h}`, [`color: rgb(var(--v-theme-${h})) !important`]) : (Jt(f, `.bg-${h}`, [`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${h})) !important`, `color: rgb(var(--v-theme-on-${h})) !important`]), Jt(m, `.text-${h}`, [`color: rgb(var(--v-theme-${h})) !important`]), Jt(m, `.border-${h}`, [`--v-border-color: var(--v-theme-${h})`]));
    return d.push(...f, ...m), d.map((h, g) => g === 0 ? h : `    ${h}`).join("");
  });
  function r() {
    return {
      style: [{
        children: o.value,
        id: "vuetify-theme-stylesheet",
        nonce: n.cspNonce || !1
      }]
    };
  }
  function s(d) {
    if (n.isDisabled) return;
    const f = d._context.provides.usehead;
    if (f)
      if (f.push) {
        const m = f.push(r);
        xe && K(o, () => {
          m.patch(r);
        });
      } else
        xe ? (f.addHeadObjs(y(r)), $e(() => f.updateDOM())) : f.addHeadObjs(r());
    else {
      let v = function() {
        if (typeof document < "u" && !m) {
          const b = document.createElement("style");
          b.type = "text/css", b.id = "vuetify-theme-stylesheet", n.cspNonce && b.setAttribute("nonce", n.cspNonce), m = b, document.head.appendChild(m);
        }
        m && (m.innerHTML = o.value);
      }, m = xe ? document.getElementById("vuetify-theme-stylesheet") : null;
      xe ? K(o, v, {
        immediate: !0
      }) : v();
    }
  }
  const c = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`);
  return {
    install: s,
    isDisabled: n.isDisabled,
    name: t,
    themes: a,
    current: i,
    computedThemes: l,
    themeClasses: c,
    styles: o,
    global: {
      name: t,
      current: i
    }
  };
}
function ke(e) {
  Ee("provideTheme");
  const n = ye(qn, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? n.name.value), a = y(() => n.themes.value[t.value]), l = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: a,
    themeClasses: l
  };
  return Ae(qn, i), i;
}
function Qr() {
  Ee("useTheme");
  const e = ye(qn, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Jt(e, n, t) {
  e.push(`${n} {
`, ...t.map((a) => `  ${a};
`), `}
`);
}
function Wo(e) {
  const n = e.dark ? 2 : 1, t = e.dark ? 1 : 2, a = [];
  for (const [l, i] of Object.entries(e.colors)) {
    const o = gt(i);
    a.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`), l.startsWith("on-") || a.push(`--v-theme-${l}-overlay-multiplier: ${pl(i) > 0.18 ? n : t}`);
  }
  for (const [l, i] of Object.entries(e.variables)) {
    const o = typeof i == "string" && i.startsWith("#") ? gt(i) : void 0, r = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    a.push(`--v-${l}: ${r ?? i}`);
  }
  return a;
}
function xt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = Ta(), a = j();
  if (xe) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    nt(() => {
      l.disconnect();
    }), K(() => t.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: si(a)
  };
}
const Xn = Symbol.for("vuetify:layout"), eu = Symbol.for("vuetify:layout-item"), jo = 1e3, tu = D({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), gn = D({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function nu() {
  const e = ye(Xn);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function hn(e) {
  const n = ye(Xn);
  if (!n) throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Ue()}`, a = Ee("useLayoutItem");
  Ae(eu, {
    id: t
  });
  const l = G(!1);
  hr(() => l.value = !0), Mc(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = n.register(a, {
    ...e,
    active: y(() => l.value ? !1 : e.active.value),
    id: t
  });
  return nt(() => n.unregister(t)), {
    layoutItemStyles: i,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: o
  };
}
const Gv = (e, n, t, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const o of e) {
    const r = n.get(o), s = t.get(o), c = a.get(o);
    if (!r || !s || !c) continue;
    const d = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: d
    }), l = d;
  }
  return i;
};
function au(e) {
  const n = ye(Xn, null), t = y(() => n ? n.rootZIndex.value - 100 : jo), a = j([]), l = mt(/* @__PURE__ */ new Map()), i = mt(/* @__PURE__ */ new Map()), o = mt(/* @__PURE__ */ new Map()), r = mt(/* @__PURE__ */ new Map()), s = mt(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: d
  } = xt(), f = y(() => {
    const P = /* @__PURE__ */ new Map(), B = e.overlaps ?? [];
    for (const w of B.filter((x) => x.includes(":"))) {
      const [x, T] = w.split(":");
      if (!a.value.includes(x) || !a.value.includes(T)) continue;
      const C = l.get(x), I = l.get(T), p = i.get(x), F = i.get(T);
      !C || !I || !p || !F || (P.set(T, {
        position: C.value,
        amount: parseInt(p.value, 10)
      }), P.set(x, {
        position: I.value,
        amount: -parseInt(F.value, 10)
      }));
    }
    return P;
  }), m = y(() => {
    const P = [...new Set([...o.values()].map((w) => w.value))].sort((w, x) => w - x), B = [];
    for (const w of P) {
      const x = a.value.filter((T) => {
        var C;
        return ((C = o.get(T)) == null ? void 0 : C.value) === w;
      });
      B.push(...x);
    }
    return Gv(B, l, i, r);
  }), v = y(() => !Array.from(s.values()).some((P) => P.value)), b = y(() => m.value[m.value.length - 1].layer), h = y(() => ({
    "--v-layout-left": X(b.value.left),
    "--v-layout-right": X(b.value.right),
    "--v-layout-top": X(b.value.top),
    "--v-layout-bottom": X(b.value.bottom),
    ...v.value ? void 0 : {
      transition: "none"
    }
  })), g = y(() => m.value.slice(1).map((P, B) => {
    let {
      id: w
    } = P;
    const {
      layer: x
    } = m.value[B], T = i.get(w), C = l.get(w);
    return {
      id: w,
      ...x,
      size: Number(T.value),
      position: C.value
    };
  })), S = (P) => g.value.find((B) => B.id === P), k = Ee("createLayout"), A = G(!1);
  at(() => {
    A.value = !0;
  }), Ae(Xn, {
    register: (P, B) => {
      let {
        id: w,
        order: x,
        position: T,
        layoutSize: C,
        elementSize: I,
        active: p,
        disableTransitions: F,
        absolute: z
      } = B;
      o.set(w, x), l.set(w, T), i.set(w, C), r.set(w, p), F && s.set(w, F);
      const Z = An(eu, k == null ? void 0 : k.vnode).indexOf(P);
      Z > -1 ? a.value.splice(Z, 0, w) : a.value.push(w);
      const J = y(() => g.value.findIndex((U) => U.id === w)), L = y(() => t.value + m.value.length * 2 - J.value * 2), $ = y(() => {
        const U = T.value === "left" || T.value === "right", oe = T.value === "right", te = T.value === "bottom", se = I.value ?? C.value, H = se === 0 ? "%" : "px", ne = {
          [T.value]: 0,
          zIndex: L.value,
          transform: `translate${U ? "X" : "Y"}(${(p.value ? 0 : -(se === 0 ? 100 : se)) * (oe || te ? -1 : 1)}${H})`,
          position: z.value || t.value !== jo ? "absolute" : "fixed",
          ...v.value ? void 0 : {
            transition: "none"
          }
        };
        if (!A.value) return ne;
        const ie = g.value[J.value];
        if (!ie) throw new Error(`[Vuetify] Could not find layout item "${w}"`);
        const he = f.value.get(w);
        return he && (ie[he.position] += he.amount), {
          ...ne,
          height: U ? `calc(100% - ${ie.top}px - ${ie.bottom}px)` : I.value ? `${I.value}px` : void 0,
          left: oe ? void 0 : `${ie.left}px`,
          right: oe ? `${ie.right}px` : void 0,
          top: T.value !== "bottom" ? `${ie.top}px` : void 0,
          bottom: T.value !== "top" ? `${ie.bottom}px` : void 0,
          width: U ? I.value ? `${I.value}px` : void 0 : `calc(100% - ${ie.left}px - ${ie.right}px)`
        };
      }), E = y(() => ({
        zIndex: L.value - 1
      }));
      return {
        layoutItemStyles: $,
        layoutItemScrimStyles: E,
        zIndex: L
      };
    },
    unregister: (P) => {
      o.delete(P), l.delete(P), i.delete(P), r.delete(P), s.delete(P), a.value = a.value.filter((B) => B !== P);
    },
    mainRect: b,
    mainStyles: h,
    getLayoutItem: S,
    items: g,
    layoutRect: d,
    rootZIndex: t
  });
  const _ = y(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), V = y(() => ({
    zIndex: n ? t.value : void 0,
    position: n ? "relative" : void 0,
    overflow: n ? "hidden" : void 0
  }));
  return {
    layoutClasses: _,
    layoutStyles: V,
    getLayoutItem: S,
    items: g,
    layoutRect: d,
    layoutRef: c
  };
}
function lu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: n,
    ...t
  } = e, a = Qe(n, t), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = a, r = Bd(a.defaults), s = Ev(a.display, a.ssr), c = Yv(a.theme), d = Hv(a.icons), f = zd(a.locale), m = Bv(a.date, f), v = $v(a.goTo, f);
  return {
    install: (h) => {
      for (const g in o)
        h.directive(g, o[g]);
      for (const g in i)
        h.component(g, i[g]);
      for (const g in l)
        h.component(g, dt({
          ...l[g],
          name: g,
          aliasName: l[g].name
        }));
      if (c.install(h), h.provide(pn, r), h.provide(Ml, s), h.provide(qn, c), h.provide($l, d), h.provide(En, f), h.provide(qr, m.options), h.provide(Fo, m.instance), h.provide(Zr, v), xe && a.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const {
            mount: g
          } = h;
          h.mount = function() {
            const S = g(...arguments);
            return we(() => s.update()), h.mount = g, S;
          };
        }
      Ue.reset(), h.mixin({
        computed: {
          $vuetify() {
            return mt({
              defaults: In.call(this, pn),
              display: In.call(this, Ml),
              theme: In.call(this, qn),
              icons: In.call(this, $l),
              locale: In.call(this, En),
              date: In.call(this, Fo)
            });
          }
        }
      });
    },
    defaults: r,
    display: s,
    theme: c,
    icons: d,
    locale: f,
    date: m,
    goTo: v
  };
}
const Uv = "3.7.0";
lu.version = Uv;
function In(e) {
  var a, l;
  const n = this.$, t = ((a = n.parent) == null ? void 0 : a.provides) ?? ((l = n.vnode.appContext) == null ? void 0 : l.provides);
  if (t && e in t)
    return t[e];
}
const Kv = D({
  ...ee(),
  ...tu({
    fullHeight: !0
  }),
  ...ge()
}, "VApp"), qv = O()({
  name: "VApp",
  props: Kv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ke(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = au(e), {
      rtlClasses: s
    } = We();
    return R(() => {
      var c;
      return u("div", {
        ref: r,
        class: ["v-application", a.themeClasses.value, l.value, s.value, e.class],
        style: [e.style]
      }, [u("div", {
        class: "v-application__wrap"
      }, [(c = t.default) == null ? void 0 : c.call(t)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), ve = D({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), iu = D({
  text: String,
  ...ee(),
  ...ve()
}, "VToolbarTitle"), Pi = O()({
  name: "VToolbarTitle",
  props: iu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      const a = !!(t.default || t.text || e.text);
      return u(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [a && u("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])];
        }
      });
    }), {};
  }
}), Xv = D({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function vt(e, n, t) {
  return O()({
    name: e,
    props: Xv({
      mode: t,
      origin: n
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: d,
              offsetHeight: f
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${f}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: d,
              width: f,
              height: m
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = d || "", r.style.width = f || "", r.style.height = m || "";
          }
        }
      };
      return () => {
        const r = a.group ? ci : Ht;
        return jt(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function ou(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return O()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? ci : Ht;
      return () => jt(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : n
      }, i.default);
    }
  });
}
function ru() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = gr(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    const r = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[t] = r), delete o._initialStyle;
  }
}
const Zv = D({
  target: [Object, Array]
}, "v-dialog-transition"), Ga = O()({
  name: "VDialogTransition",
  props: Zv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var m;
        await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), l.style.visibility = "";
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = Go(e.target, l), f = en(l, [{
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: Md
        });
        (m = Yo(l)) == null || m.forEach((v) => {
          en(v, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Kn
          });
        }), f.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var m;
        await new Promise((v) => requestAnimationFrame(v));
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = Go(e.target, l);
        en(l, [{}, {
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: $d
        }).finished.then(() => i()), (m = Yo(l)) == null || m.forEach((v) => {
          en(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Kn
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(Ht, N({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : u(Ht, {
      name: "dialog-transition"
    }, t);
  }
});
function Yo(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Go(e, n) {
  const t = Tr(e), a = hi(n), [l, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  o === "left" || r === "left" ? s -= t.width / 2 : (o === "right" || r === "right") && (s += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || r === "top" ? c -= t.height / 2 : (o === "bottom" || r === "bottom") && (c += t.height / 2);
  const d = t.width / a.width, f = t.height / a.height, m = Math.max(1, d, f), v = d / m || 0, b = f / m || 0, h = a.width * a.height / (window.innerWidth * window.innerHeight), g = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (i + a.top),
    sx: v,
    sy: b,
    speed: g
  };
}
const Jv = vt("fab-transition", "center center", "out-in"), Qv = vt("dialog-bottom-transition"), ef = vt("dialog-top-transition"), Zn = vt("fade-transition"), Ii = vt("scale-transition"), tf = vt("scroll-x-transition"), nf = vt("scroll-x-reverse-transition"), af = vt("scroll-y-transition"), lf = vt("scroll-y-reverse-transition"), of = vt("slide-x-transition"), rf = vt("slide-x-reverse-transition"), _i = vt("slide-y-transition"), uf = vt("slide-y-reverse-transition"), Ua = ou("expand-transition", ru()), Ai = ou("expand-x-transition", ru("", !0)), sf = D({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), me = O(!1)({
  name: "VDefaultsProvider",
  props: sf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = fn(e);
    return pe(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = t.default) == null ? void 0 : s.call(t);
    };
  }
}), Ne = D({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function ze(e) {
  return {
    dimensionStyles: y(() => {
      const t = {}, a = X(e.height), l = X(e.maxHeight), i = X(e.maxWidth), o = X(e.minHeight), r = X(e.minWidth), s = X(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), r != null && (t.minWidth = r), s != null && (t.width = s), t;
    })
  };
}
function cf(e) {
  return {
    aspectStyles: y(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const uu = D({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...ee(),
  ...Ne()
}, "VResponsive"), Ll = O()({
  name: "VResponsive",
  props: uu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = cf(e), {
      dimensionStyles: l
    } = ze(e);
    return R(() => {
      var i;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function Ti(e) {
  return mi(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Dl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Cd(e.value.background)) {
          const a = gt(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Nr(a);
            t.color = l, t.caretColor = l;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (Dl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function qe(e, n) {
  const t = y(() => ({
    text: Bn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Ti(t);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function Ve(e, n) {
  const t = y(() => ({
    background: Bn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Ti(t);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const Te = D({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Me(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    roundedClasses: y(() => {
      const a = Bn(e) ? e.value : e.rounded, l = Bn(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const Ct = D({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), et = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? ci : Ht,
    ...s
  } = typeof a == "object" ? a : {};
  return jt(r, N(typeof a == "string" ? {
    name: l ? "" : a
  } : s, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((c) => {
    let [d, f] = c;
    return f !== void 0;
  })), o), t);
};
function df(e, n) {
  if (!di) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!c) return;
    const d = r.some((m) => m.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || d || c.init) && l(d, r, s), d && t.once ? su(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function su(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const oa = {
  mounted: df,
  unmounted: su
}, cu = D({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...uu(),
  ...ee(),
  ...Te(),
  ...Ct()
}, "VImg"), pt = O()({
  name: "VImg",
  directives: {
    intersect: oa
  },
  props: cu(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(M(e, "color")), {
      roundedClasses: o
    } = Me(e), r = Ee("VImg"), s = G(""), c = j(), d = G(e.eager ? "loading" : "idle"), f = G(), m = G(), v = y(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), b = y(() => v.value.aspect || f.value / m.value || 0);
    K(() => e.src, () => {
      h(d.value !== "idle");
    }), K(b, (I, p) => {
      !I && p && c.value && _(c.value);
    }), yr(() => h());
    function h(I) {
      if (!(e.eager && I) && !(di && !I && !e.eager)) {
        if (d.value = "loading", v.value.lazySrc) {
          const p = new Image();
          p.src = v.value.lazySrc, _(p, null);
        }
        v.value.src && we(() => {
          var p;
          t("loadstart", ((p = c.value) == null ? void 0 : p.currentSrc) || v.value.src), setTimeout(() => {
            var F;
            if (!r.isUnmounted)
              if ((F = c.value) != null && F.complete) {
                if (c.value.naturalWidth || S(), d.value === "error") return;
                b.value || _(c.value, null), d.value === "loading" && g();
              } else
                b.value || _(c.value), k();
          });
        });
      }
    }
    function g() {
      var I;
      r.isUnmounted || (k(), _(c.value), d.value = "loaded", t("load", ((I = c.value) == null ? void 0 : I.currentSrc) || v.value.src));
    }
    function S() {
      var I;
      r.isUnmounted || (d.value = "error", t("error", ((I = c.value) == null ? void 0 : I.currentSrc) || v.value.src));
    }
    function k() {
      const I = c.value;
      I && (s.value = I.currentSrc || I.src);
    }
    let A = -1;
    nt(() => {
      clearTimeout(A);
    });
    function _(I) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const F = () => {
        if (clearTimeout(A), r.isUnmounted) return;
        const {
          naturalHeight: z,
          naturalWidth: W
        } = I;
        z || W ? (f.value = W, m.value = z) : !I.complete && d.value === "loading" && p != null ? A = window.setTimeout(F, p) : (I.currentSrc.endsWith(".svg") || I.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, m.value = 1);
      };
      F();
    }
    const V = y(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), P = () => {
      var F;
      if (!v.value.src || d.value === "idle") return null;
      const I = u("img", {
        class: ["v-img__img", V.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: g,
        onError: S
      }, null), p = (F = a.sources) == null ? void 0 : F.call(a);
      return u(et, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [De(p ? u("picture", {
          class: "v-img__picture"
        }, [p, I]) : I, [[wt, d.value === "loaded"]])]
      });
    }, B = () => u(et, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && d.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", V.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), w = () => a.placeholder ? u(et, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, x = () => a.error ? u(et, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, T = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, C = G(!1);
    {
      const I = K(b, (p) => {
        p && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            C.value = !0;
          });
        }), I());
      });
    }
    return R(() => {
      const I = Ll.filterProps(e);
      return De(u(Ll, N({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !C.value
        }, l.value, o.value, e.class],
        style: [{
          width: X(e.width === "auto" ? f.value : e.width)
        }, i.value, e.style]
      }, I, {
        aspectRatio: b.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(le, null, [u(P, null, null), u(B, null, null), u(T, null, null), u(w, null, null), u(x, null, null)]),
        default: a.default
      }), [[ct("intersect"), {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: d,
      naturalWidth: f,
      naturalHeight: m
    };
  }
}), ut = D({
  border: [Boolean, Number, String]
}, "border");
function ft(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    borderClasses: y(() => {
      const a = Bn(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${n}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const je = D({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function Ke(e) {
  return {
    elevationClasses: y(() => {
      const t = Bn(e) ? e.value : e.elevation, a = [];
      return t == null || a.push(`elevation-${t}`), a;
    })
  };
}
const vf = [null, "prominent", "default", "comfortable", "compact"], du = D({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => vf.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...ut(),
  ...ee(),
  ...je(),
  ...Te(),
  ...ve({
    tag: "header"
  }),
  ...ge()
}, "VToolbar"), Ol = O()({
  name: "VToolbar",
  props: du(),
  setup(e, n) {
    var v;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve(M(e, "color")), {
      borderClasses: i
    } = ft(e), {
      elevationClasses: o
    } = Ke(e), {
      roundedClasses: r
    } = Me(e), {
      themeClasses: s
    } = ke(e), {
      rtlClasses: c
    } = We(), d = G(!!(e.extended || (v = t.extension) != null && v.call(t))), f = y(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = y(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return pe({
      VBtn: {
        variant: "text"
      }
    }), R(() => {
      var S;
      const b = !!(e.title || t.title), h = !!(t.image || e.image), g = (S = t.extension) == null ? void 0 : S.call(t);
      return d.value = !!(e.extended || g), u(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, o.value, r.value, s.value, c.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [h && u("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? u(me, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : u(pt, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), u(me, {
          defaults: {
            VTabs: {
              height: X(f.value)
            }
          }
        }, {
          default: () => {
            var k, A, _;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: X(f.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(k = t.prepend) == null ? void 0 : k.call(t)]), b && u(Pi, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (A = t.default) == null ? void 0 : A.call(t), t.append && u("div", {
              class: "v-toolbar__append"
            }, [(_ = t.append) == null ? void 0 : _.call(t)])])];
          }
        }), u(me, {
          defaults: {
            VTabs: {
              height: X(m.value)
            }
          }
        }, {
          default: () => [u(Ua, null, {
            default: () => [d.value && u("div", {
              class: "v-toolbar__extension",
              style: {
                height: X(m.value)
              }
            }, [g])]
          })]
        })]
      });
    }), {
      contentHeight: f,
      extensionHeight: m
    };
  }
}), ff = D({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function mf(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let a = 0, l = 0;
  const i = j(null), o = G(0), r = G(0), s = G(0), c = G(!1), d = G(!1), f = y(() => Number(e.scrollThreshold)), m = y(() => Le((f.value - o.value) / f.value || 0)), v = () => {
    const b = i.value;
    if (!b || t && !t.value) return;
    a = o.value, o.value = "window" in b ? b.pageYOffset : b.scrollTop;
    const h = b instanceof Window ? document.documentElement.scrollHeight : b.scrollHeight;
    if (l !== h) {
      l = h;
      return;
    }
    d.value = o.value < a, s.value = Math.abs(o.value - f.value);
  };
  return K(d, () => {
    r.value = r.value || o.value;
  }), K(c, () => {
    r.value = 0;
  }), at(() => {
    K(() => e.scrollTarget, (b) => {
      var g;
      const h = b ? document.querySelector(b) : window;
      if (!h) {
        kt(`Unable to locate element with identifier ${b}`);
        return;
      }
      h !== i.value && ((g = i.value) == null || g.removeEventListener("scroll", v), i.value = h, i.value.addEventListener("scroll", v, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), nt(() => {
    var b;
    (b = i.value) == null || b.removeEventListener("scroll", v);
  }), t && K(t, v, {
    immediate: !0
  }), {
    scrollThreshold: f,
    currentScroll: o,
    currentThreshold: s,
    isScrollActive: c,
    scrollRatio: m,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: d,
    savedScroll: r
  };
}
function yn() {
  const e = G(!1);
  return at(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: y(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: si(e)
  };
}
const gf = D({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...du(),
  ...gn(),
  ...ff(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), hf = O()({
  name: "VAppBar",
  props: gf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), l = ae(e, "modelValue"), i = y(() => {
      var A;
      const k = new Set(((A = e.scrollBehavior) == null ? void 0 : A.split(" ")) ?? []);
      return {
        hide: k.has("hide"),
        fullyHide: k.has("fully-hide"),
        inverted: k.has("inverted"),
        collapse: k.has("collapse"),
        elevate: k.has("elevate"),
        fadeImage: k.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = y(() => {
      const k = i.value;
      return k.hide || k.fullyHide || k.inverted || k.collapse || k.elevate || k.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: d
    } = mf(e, {
      canScroll: o
    }), f = y(() => i.value.hide || i.value.fullyHide), m = y(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), v = y(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), b = y(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), h = y(() => {
      var _, V;
      if (i.value.hide && i.value.inverted) return 0;
      const k = ((_ = a.value) == null ? void 0 : _.contentHeight) ?? 0, A = ((V = a.value) == null ? void 0 : V.extensionHeight) ?? 0;
      return f.value ? r.value < s.value || i.value.fullyHide ? k + A : k : k + A;
    });
    rt(y(() => !!e.scrollBehavior), () => {
      $e(() => {
        f.value ? i.value.inverted ? l.value = r.value > s.value : l.value = c.value || r.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: g
    } = yn(), {
      layoutItemStyles: S
    } = hn({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: M(e, "location"),
      layoutSize: h,
      elementSize: G(void 0),
      active: l,
      absolute: M(e, "absolute")
    });
    return R(() => {
      const k = Ol.filterProps(e);
      return u(Ol, N({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...S.value,
          "--v-toolbar-image-opacity": b.value,
          height: void 0,
          ...g.value
        }, e.style]
      }, k, {
        collapse: m.value,
        flat: v.value
      }), t);
    }), {};
  }
}), yf = [null, "default", "comfortable", "compact"], Ye = D({
  density: {
    type: String,
    default: "default",
    validator: (e) => yf.includes(e)
  }
}, "density");
function lt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    densityClasses: y(() => `${n}--density-${e.density}`)
  };
}
const bf = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Gt(e, n) {
  return u(le, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const bt = D({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => bf.includes(e)
  }
}, "variant");
function bn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  const t = y(() => {
    const {
      variant: i
    } = ot(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Ti(y(() => {
    const {
      variant: i,
      color: o
    } = ot(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const vu = D({
  baseColor: String,
  divided: Boolean,
  ...ut(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...Te(),
  ...ve(),
  ...ge(),
  ...bt()
}, "VBtnGroup"), Rl = O()({
  name: "VBtnGroup",
  props: vu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      densityClasses: l
    } = lt(e), {
      borderClasses: i
    } = ft(e), {
      elevationClasses: o
    } = Ke(e), {
      roundedClasses: r
    } = Me(e);
    pe({
      VBtn: {
        height: "auto",
        baseColor: M(e, "baseColor"),
        color: M(e, "color"),
        density: M(e, "density"),
        flat: !0,
        variant: M(e, "variant")
      }
    }), R(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class],
      style: e.style
    }, t));
  }
}), Sn = D({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), kn = D({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function xn(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Ee("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ue();
  Ae(Symbol.for(`${n.description}:id`), l);
  const i = ye(n, null);
  if (!i) {
    if (!t) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = M(e, "value"), r = y(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), nt(() => {
    i.unregister(l);
  });
  const s = y(() => i.isSelected(l)), c = y(() => i.items.value[0].id === l), d = y(() => i.items.value[i.items.value.length - 1].id === l), f = y(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return K(s, (m) => {
    a.emit("group:selected", {
      value: m
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: d,
    toggle: () => i.select(l, !s.value),
    select: (m) => i.select(l, m),
    selectedClass: f,
    value: o,
    disabled: r,
    group: i
  };
}
function Ut(e, n) {
  let t = !1;
  const a = mt([]), l = ae(e, "modelValue", [], (m) => m == null ? [] : fu(a, Be(m)), (m) => {
    const v = kf(a, m);
    return e.multiple ? v : v[0];
  }), i = Ee("useGroup");
  function o(m, v) {
    const b = m, h = Symbol.for(`${n.description}:id`), S = An(h, i == null ? void 0 : i.vnode).indexOf(v);
    ot(b.value) == null && (b.value = S, b.useIndexAsValue = !0), S > -1 ? a.splice(S, 0, b) : a.push(b);
  }
  function r(m) {
    if (t) return;
    s();
    const v = a.findIndex((b) => b.id === m);
    a.splice(v, 1);
  }
  function s() {
    const m = a.find((v) => !v.disabled);
    m && e.mandatory === "force" && !l.value.length && (l.value = [m.id]);
  }
  at(() => {
    s();
  }), nt(() => {
    t = !0;
  }), $c(() => {
    for (let m = 0; m < a.length; m++)
      a[m].useIndexAsValue && (a[m].value = m);
  });
  function c(m, v) {
    const b = a.find((h) => h.id === m);
    if (!(v && (b != null && b.disabled)))
      if (e.multiple) {
        const h = l.value.slice(), g = h.findIndex((k) => k === m), S = ~g;
        if (v = v ?? !S, S && e.mandatory && h.length <= 1 || !S && e.max != null && h.length + 1 > e.max) return;
        g < 0 && v ? h.push(m) : g >= 0 && !v && h.splice(g, 1), l.value = h;
      } else {
        const h = l.value.includes(m);
        if (e.mandatory && h) return;
        l.value = v ?? !h ? [m] : [];
      }
  }
  function d(m) {
    if (e.multiple && kt('This method is not supported when using "multiple" prop'), l.value.length) {
      const v = l.value[0], b = a.findIndex((S) => S.id === v);
      let h = (b + m) % a.length, g = a[h];
      for (; g.disabled && h !== b; )
        h = (h + m) % a.length, g = a[h];
      if (g.disabled) return;
      l.value = [a[h].id];
    } else {
      const v = a.find((b) => !b.disabled);
      v && (l.value = [v.id]);
    }
  }
  const f = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: M(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (m) => l.value.includes(m),
    selectedClass: y(() => e.selectedClass),
    items: y(() => a),
    getItemIndex: (m) => Sf(a, m)
  };
  return Ae(n, f), f;
}
function Sf(e, n) {
  const t = fu(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function fu(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((o) => _t(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id);
  }), t;
}
function kf(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      t.push(i.value != null ? i.value : l);
    }
  }), t;
}
const Bi = Symbol.for("vuetify:v-btn-toggle"), xf = D({
  ...vu(),
  ...Sn()
}, "VBtnToggle"), wf = O()({
  name: "VBtnToggle",
  props: xf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = Ut(e, Bi);
    return R(() => {
      const s = Rl.filterProps(e);
      return u(Rl, N({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
}), Cf = ["x-small", "small", "default", "large", "x-large"], Bt = D({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ln(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return mi(() => {
    let t, a;
    return Aa(Cf, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
      width: X(e.size),
      height: X(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: a
    };
  });
}
const Vf = D({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: re,
  ...ee(),
  ...Bt(),
  ...ve({
    tag: "i"
  }),
  ...ge()
}, "VIcon"), be = O()({
  name: "VIcon",
  props: Vf(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = j(), {
      themeClasses: i
    } = ke(e), {
      iconData: o
    } = Wv(y(() => l.value || e.icon)), {
      sizeClasses: r
    } = Ln(e), {
      textColorClasses: s,
      textColorStyles: c
    } = qe(M(e, "color"));
    return R(() => {
      var m, v;
      const d = (m = a.default) == null ? void 0 : m.call(a);
      d && (l.value = (v = Vr(d).filter((b) => b.type === Fc && b.children && typeof b.children == "string")[0]) == null ? void 0 : v.children);
      const f = !!(t.onClick || t.onClickOnce);
      return u(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: X(e.size),
          height: X(e.size),
          width: X(e.size)
        }, c.value, e.style],
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function Ka(e, n) {
  const t = j(), a = G(!1);
  if (di) {
    const l = new IntersectionObserver((i) => {
      e == null || e(i, l), a.value = !!i.find((o) => o.isIntersecting);
    }, n);
    nt(() => {
      l.disconnect();
    }), K(t, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
const Pf = D({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...ee(),
  ...Bt(),
  ...ve({
    tag: "div"
  }),
  ...ge()
}, "VProgressCircular"), Mn = O()({
  name: "VProgressCircular",
  props: Pf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, i = j(), {
      themeClasses: o
    } = ke(e), {
      sizeClasses: r,
      sizeStyles: s
    } = Ln(e), {
      textColorClasses: c,
      textColorStyles: d
    } = qe(M(e, "color")), {
      textColorClasses: f,
      textColorStyles: m
    } = qe(M(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: b
    } = Ka(), {
      resizeRef: h,
      contentRect: g
    } = xt(), S = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), k = y(() => Number(e.width)), A = y(() => s.value ? Number(e.size) : g.value ? g.value.width : Math.max(k.value, 32)), _ = y(() => a / (1 - k.value / A.value) * 2), V = y(() => k.value / A.value * _.value), P = y(() => X((100 - S.value) / 100 * l));
    return $e(() => {
      v.value = i.value, h.value = i.value;
    }), R(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": b.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class],
      style: [s.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : S.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${_.value} ${_.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: m.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": V.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": V.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": P.value
      }, null)]), t.default && u("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: S.value
      })])]
    })), {};
  }
}), Uo = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ft = D({
  location: String
}, "location");
function wn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = We();
  return {
    locationStyles: y(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = Tl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const s = {};
      return i !== "center" && (n ? s[Uo[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? n ? s[Uo[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const If = D({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...ee(),
  ...Ft({
    location: "top"
  }),
  ...Te(),
  ...ve(),
  ...ge()
}, "VProgressLinear"), qa = O()({
  name: "VProgressLinear",
  props: If(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var C;
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = We(), {
      themeClasses: o
    } = ke(e), {
      locationStyles: r
    } = wn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = qe(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = Ve(y(() => e.bgColor || e.color)), {
      backgroundColorClasses: m,
      backgroundColorStyles: v
    } = Ve(y(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: b,
      backgroundColorStyles: h
    } = Ve(e, "color"), {
      roundedClasses: g
    } = Me(e), {
      intersectionRef: S,
      isIntersecting: k
    } = Ka(), A = y(() => parseFloat(e.max)), _ = y(() => parseFloat(e.height)), V = y(() => Le(parseFloat(e.bufferValue) / A.value * 100, 0, 100)), P = y(() => Le(parseFloat(a.value) / A.value * 100, 0, 100)), B = y(() => l.value !== e.reverse), w = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), x = xe && ((C = window.matchMedia) == null ? void 0 : C.call(window, "(forced-colors: active)").matches);
    function T(I) {
      if (!S.value) return;
      const {
        left: p,
        right: F,
        width: z
      } = S.value.getBoundingClientRect(), W = B.value ? z - I.clientX + (F - z) : I.clientX - p;
      a.value = Math.round(W / z * A.value);
    }
    return R(() => u(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && k.value,
        "v-progress-linear--reverse": B.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, g.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? X(_.value) : 0,
        "--v-progress-linear-height": X(_.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : P.value,
      onClick: e.clickable && T
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [B.value ? "left" : "right"]: X(-_.value),
          borderTop: `${X(_.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${X(_.value / 4)})`,
          width: X(100 - V.value, "%"),
          "--v-progress-linear-stream-to": X(_.value * (B.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", x ? void 0 : d.value],
        style: [f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", x ? void 0 : m.value],
        style: [v.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: X(V.value, "%")
        }]
      }, null), u(Ht, {
        name: w.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((I) => u("div", {
          key: I,
          class: ["v-progress-linear__indeterminate", I, x ? void 0 : b.value],
          style: h.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", x ? void 0 : b.value],
          style: [h.value, {
            width: X(P.value, "%")
          }]
        }, null)]
      }), t.default && u("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: P.value,
        buffer: V.value
      })])]
    })), {};
  }
}), Xa = D({
  loading: [Boolean, String]
}, "loader");
function ra(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    loaderClasses: y(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function ua(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(qa, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const _f = ["static", "relative", "fixed", "absolute", "sticky"], On = D({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => _f.includes(e)
    )
  }
}, "position");
function Rn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    positionClasses: y(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function Af() {
  const e = Ee("useRoute");
  return y(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function mu() {
  var e, n;
  return (n = (e = Ee("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function sa(e, n) {
  var c, d;
  const t = Lc("RouterLink"), a = y(() => !!(e.href || e.to)), l = y(() => (a == null ? void 0 : a.value) || yo(n, "click") || yo(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: a,
      isClickable: l,
      href: M(e, "href")
    };
  const i = y(() => ({
    ...e,
    to: M(() => e.to || "")
  })), o = t.useLink(i.value), r = y(() => e.to ? o : void 0), s = Af();
  return {
    isLink: a,
    isClickable: l,
    route: (c = r.value) == null ? void 0 : c.route,
    navigate: (d = r.value) == null ? void 0 : d.navigate,
    isActive: y(() => {
      var f, m, v;
      return r.value ? e.exact ? s.value ? ((v = r.value.isExactActive) == null ? void 0 : v.value) && _t(r.value.route.value.query, s.value.query) : ((m = r.value.isExactActive) == null ? void 0 : m.value) ?? !1 : ((f = r.value.isActive) == null ? void 0 : f.value) ?? !1 : !1;
    }),
    href: y(() => {
      var f;
      return e.to ? (f = r.value) == null ? void 0 : f.route.value.href : e.href;
    })
  };
}
const ca = D({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let xl = !1;
function Tf(e, n) {
  let t = !1, a, l;
  xe && (we(() => {
    window.addEventListener("popstate", i), a = e == null ? void 0 : e.beforeEach((o, r, s) => {
      xl ? t ? n(s) : s() : setTimeout(() => t ? n(s) : s()), xl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      xl = !1;
    });
  }), tt(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function Bf(e, n) {
  K(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && we(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const Nl = Symbol("rippleStop"), Df = 80;
function Ko(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function zl(e) {
  return e.constructor.name === "TouchEvent";
}
function gu(e) {
  return e.constructor.name === "KeyboardEvent";
}
const pf = function(e, n) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!gu(e)) {
    const m = n.getBoundingClientRect(), v = zl(e) ? e.touches[e.touches.length - 1] : e;
    a = v.clientX - m.left, l = v.clientY - m.top;
  }
  let i = 0, o = 0.3;
  (f = n._ripple) != null && f.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const r = `${(n.clientWidth - i * 2) / 2}px`, s = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? r : `${a - i}px`, d = t.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: d,
    centerX: r,
    centerY: s
  };
}, $a = {
  /* eslint-disable max-statements */
  show(e, n) {
    var v;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = n == null ? void 0 : n._ripple) != null && v.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: c,
      centerY: d
    } = pf(e, n, t), f = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, n.appendChild(a);
    const m = window.getComputedStyle(n);
    m && m.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Ko(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Ko(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function hu(e) {
  return typeof e > "u" || !!e;
}
function Jn(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[Nl])) {
    if (e[Nl] = !0, zl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || gu(e), t._ripple.class && (n.class = t._ripple.class), zl(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        $a.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Df);
    } else
      $a.show(e, t, n);
  }
}
function qo(e) {
  e[Nl] = !0;
}
function st(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        st(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), $a.hide(n);
  }
}
function yu(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Qn = !1;
function bu(e) {
  !Qn && (e.keyCode === vo.enter || e.keyCode === vo.space) && (Qn = !0, Jn(e));
}
function Su(e) {
  Qn = !1, st(e);
}
function ku(e) {
  Qn && (Qn = !1, st(e));
}
function xu(e, n, t) {
  const {
    value: a,
    modifiers: l
  } = n, i = hu(a);
  if (i || $a.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Gn(a) && a.class && (e._ripple.class = a.class), i && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", qo, {
        passive: !0
      }), e.addEventListener("mousedown", qo);
      return;
    }
    e.addEventListener("touchstart", Jn, {
      passive: !0
    }), e.addEventListener("touchend", st, {
      passive: !0
    }), e.addEventListener("touchmove", yu, {
      passive: !0
    }), e.addEventListener("touchcancel", st), e.addEventListener("mousedown", Jn), e.addEventListener("mouseup", st), e.addEventListener("mouseleave", st), e.addEventListener("keydown", bu), e.addEventListener("keyup", Su), e.addEventListener("blur", ku), e.addEventListener("dragstart", st, {
      passive: !0
    });
  } else !i && t && wu(e);
}
function wu(e) {
  e.removeEventListener("mousedown", Jn), e.removeEventListener("touchstart", Jn), e.removeEventListener("touchend", st), e.removeEventListener("touchmove", yu), e.removeEventListener("touchcancel", st), e.removeEventListener("mouseup", st), e.removeEventListener("mouseleave", st), e.removeEventListener("keydown", bu), e.removeEventListener("keyup", Su), e.removeEventListener("dragstart", st), e.removeEventListener("blur", ku);
}
function Ef(e, n) {
  xu(e, n, !1);
}
function Mf(e) {
  delete e._ripple, wu(e);
}
function $f(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = hu(n.oldValue);
  xu(e, n, t);
}
const Lt = {
  mounted: Ef,
  unmounted: Mf,
  updated: $f
}, Za = D({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Bi
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: re,
  appendIcon: re,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...ut(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...kn(),
  ...Xa(),
  ...Ft(),
  ...On(),
  ...Te(),
  ...ca(),
  ...Bt(),
  ...ve({
    tag: "button"
  }),
  ...ge(),
  ...bt({
    variant: "elevated"
  })
}, "VBtn"), Se = O()({
  name: "VBtn",
  props: Za(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      borderClasses: i
    } = ft(e), {
      densityClasses: o
    } = lt(e), {
      dimensionStyles: r
    } = ze(e), {
      elevationClasses: s
    } = Ke(e), {
      loaderClasses: c
    } = ra(e), {
      locationStyles: d
    } = wn(e), {
      positionClasses: f
    } = Rn(e), {
      roundedClasses: m
    } = Me(e), {
      sizeClasses: v,
      sizeStyles: b
    } = Ln(e), h = xn(e, e.symbol, !1), g = sa(e, t), S = y(() => {
      var C;
      return e.active !== void 0 ? e.active : g.isLink.value ? (C = g.isActive) == null ? void 0 : C.value : h == null ? void 0 : h.isSelected.value;
    }), k = y(() => S.value ? e.activeColor ?? e.color : e.color), A = y(() => {
      var I, p;
      return {
        color: (h == null ? void 0 : h.isSelected.value) && (!g.isLink.value || ((I = g.isActive) == null ? void 0 : I.value)) || !h || ((p = g.isActive) == null ? void 0 : p.value) ? k.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: _,
      colorStyles: V,
      variantClasses: P
    } = bn(A), B = y(() => (h == null ? void 0 : h.disabled.value) || e.disabled), w = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), x = y(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function T(C) {
      var I;
      B.value || g.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || t.target === "_blank") || ((I = g.navigate) == null || I.call(g, C), h == null || h.toggle());
    }
    return Bf(g, h == null ? void 0 : h.select), R(() => {
      const C = g.isLink.value ? "a" : e.tag, I = !!(e.prependIcon || a.prepend), p = !!(e.appendIcon || a.append), F = !!(e.icon && e.icon !== !0);
      return De(u(C, {
        type: C === "a" ? void 0 : "button",
        class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
          "v-btn--active": S.value,
          "v-btn--block": e.block,
          "v-btn--disabled": B.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, _.value, o.value, s.value, c.value, f.value, m.value, v.value, P.value, e.class],
        style: [V.value, r.value, d.value, b.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: B.value || void 0,
        href: g.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: T,
        value: x.value
      }, {
        default: () => {
          var z;
          return [Gt(!0, "v-btn"), !e.icon && I && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : u(be, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && F ? u(be, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(me, {
            key: "content-defaults",
            disabled: !F,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var W;
              return [((W = a.default) == null ? void 0 : W.call(a)) ?? e.text];
            }
          })]), !e.icon && p && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? u(me, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : u(be, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((z = a.loader) == null ? void 0 : z.call(a)) ?? u(Mn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Lt, !B.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), Ff = D({
  ...Za({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), Lf = O()({
  name: "VAppBarNavIcon",
  props: Ff(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(Se, N(e, {
      class: ["v-app-bar-nav-icon"]
    }), t)), {};
  }
}), Of = O()({
  name: "VAppBarTitle",
  props: iu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(Pi, N(e, {
      class: "v-app-bar-title"
    }), t)), {};
  }
}), Cu = Tt("v-alert-title"), Rf = ["success", "info", "warning", "error"], Nf = D({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: re,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => Rf.includes(e)
  },
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...Ft(),
  ...On(),
  ...Te(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "flat"
  })
}, "VAlert"), zf = O()({
  name: "VAlert",
  props: Nf(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ae(e, "modelValue"), i = y(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), o = y(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: r
    } = ke(e), {
      colorClasses: s,
      colorStyles: c,
      variantClasses: d
    } = bn(o), {
      densityClasses: f
    } = lt(e), {
      dimensionStyles: m
    } = ze(e), {
      elevationClasses: v
    } = Ke(e), {
      locationStyles: b
    } = wn(e), {
      positionClasses: h
    } = Rn(e), {
      roundedClasses: g
    } = Me(e), {
      textColorClasses: S,
      textColorStyles: k
    } = qe(M(e, "borderColor")), {
      t: A
    } = Fe(), _ = y(() => ({
      "aria-label": A(e.closeLabel),
      onClick(V) {
        l.value = !1, t("click:close", V);
      }
    }));
    return () => {
      const V = !!(a.prepend || i.value), P = !!(a.title || e.title), B = !!(a.close || e.closable);
      return l.value && u(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, f.value, v.value, h.value, g.value, d.value, e.class],
        style: [c.value, m.value, b.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var w, x;
          return [Gt(!1, "v-alert"), e.border && u("div", {
            key: "border",
            class: ["v-alert__border", S.value],
            style: k.value
          }, null), V && u("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : u(be, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), u("div", {
            class: "v-alert__content"
          }, [P && u(Cu, {
            key: "title"
          }, {
            default: () => {
              var T;
              return [((T = a.title) == null ? void 0 : T.call(a)) ?? e.title];
            }
          }), ((w = a.text) == null ? void 0 : w.call(a)) ?? e.text, (x = a.default) == null ? void 0 : x.call(a)]), a.append && u("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), B && u("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? u(me, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var T;
              return [(T = a.close) == null ? void 0 : T.call(a, {
                props: _.value
              })];
            }
          }) : u(Se, N({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, _.value), null)])];
        }
      });
    };
  }
}), Hf = D({
  start: Boolean,
  end: Boolean,
  icon: re,
  image: String,
  text: String,
  ...ut(),
  ...ee(),
  ...Ye(),
  ...Te(),
  ...Bt(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "flat"
  })
}, "VAvatar"), ht = O()({
  name: "VAvatar",
  props: Hf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      borderClasses: l
    } = ft(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = bn(e), {
      densityClasses: s
    } = lt(e), {
      roundedClasses: c
    } = Me(e), {
      sizeClasses: d,
      sizeStyles: f
    } = Ln(e);
    return R(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, c.value, d.value, r.value, e.class],
      style: [o.value, f.value, e.style]
    }, {
      default: () => [t.default ? u(me, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? u(pt, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(be, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Gt(!1, "v-avatar")]
    })), {};
  }
}), Wf = D({
  text: String,
  onClick: Ge(),
  ...ee(),
  ...ge()
}, "VLabel"), Nn = O()({
  name: "VLabel",
  props: Wf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      var a;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Vu = Symbol.for("vuetify:selection-control-group"), Di = D({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: re,
  trueIcon: re,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: _t
  },
  ...ee(),
  ...Ye(),
  ...ge()
}, "SelectionControlGroup"), jf = D({
  ...Di({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), Pu = O()({
  name: "VSelectionControlGroup",
  props: jf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), l = Ue(), i = y(() => e.id || `v-selection-control-group-${l}`), o = y(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Ae(Vu, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), tt(() => {
          r.delete(s);
        });
      }
    }), pe({
      [e.defaultsTarget]: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        density: M(e, "density"),
        error: M(e, "error"),
        inline: M(e, "inline"),
        modelValue: a,
        multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: M(e, "falseIcon"),
        trueIcon: M(e, "trueIcon"),
        readonly: M(e, "readonly"),
        ripple: M(e, "ripple"),
        type: M(e, "type"),
        valueComparator: M(e, "valueComparator")
      }
    }), R(() => {
      var s;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = t.default) == null ? void 0 : s.call(t)]);
    }), {};
  }
}), Ja = D({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ee(),
  ...Di()
}, "VSelectionControl");
function Yf(e) {
  const n = ye(Vu, void 0), {
    densityClasses: t
  } = lt(e), a = ae(e, "modelValue"), l = y(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = y(() => e.falseValue !== void 0 ? e.falseValue : !1), o = y(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = y({
    get() {
      const v = n ? n.modelValue.value : a.value;
      return o.value ? Be(v).some((b) => e.valueComparator(b, l.value)) : e.valueComparator(v, l.value);
    },
    set(v) {
      if (e.readonly) return;
      const b = v ? l.value : i.value;
      let h = b;
      o.value && (h = v ? [...Be(a.value), b] : Be(a.value).filter((g) => !e.valueComparator(g, l.value))), n ? n.modelValue.value = h : a.value = h;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = qe(y(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: f
  } = Ve(y(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), m = y(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: f,
    icon: m
  };
}
const Wt = O()({
  name: "VSelectionControl",
  directives: {
    Ripple: Lt
  },
  inheritAttrs: !1,
  props: Ja(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: f,
      trueValue: m
    } = Yf(e), v = Ue(), b = G(!1), h = G(!1), g = j(), S = y(() => e.id || `input-${v}`), k = y(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      g.value && (g.value.checked = r.value);
    });
    function A(B) {
      k.value && (b.value = !0, Dn(B.target, ":focus-visible") !== !1 && (h.value = !0));
    }
    function _() {
      b.value = !1, h.value = !1;
    }
    function V(B) {
      B.stopPropagation();
    }
    function P(B) {
      if (!k.value) {
        g.value && (g.value.checked = r.value);
        return;
      }
      e.readonly && l && we(() => l.forceUpdate()), r.value = B.target.checked;
    }
    return R(() => {
      var C, I;
      const B = a.label ? a.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [w, x] = Yt(t), T = u("input", N({
        ref: g,
        checked: r.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: _,
        onFocus: A,
        onInput: P,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: m.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, x), null);
      return u("div", N({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": b.value,
          "v-selection-control--focus-visible": h.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, w, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: c.value
      }, [(C = a.default) == null ? void 0 : C.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: f
      }), De(u("div", {
        class: ["v-selection-control__input"]
      }, [((I = a.input) == null ? void 0 : I.call(a, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: f,
        inputNode: T,
        icon: o.value,
        props: {
          onFocus: A,
          onBlur: _,
          id: S.value
        }
      })) ?? u(le, null, [o.value && u(be, {
        key: "icon",
        icon: o.value
      }, null), T])]), [[ct("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), B && u(Nn, {
        for: S.value,
        onClick: V
      }, {
        default: () => [B]
      })]);
    }), {
      isFocused: b,
      input: g
    };
  }
}), Iu = D({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: re,
    default: "$checkboxIndeterminate"
  },
  ...Ja({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Et = O()({
  name: "VCheckboxBtn",
  props: Iu(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "indeterminate"), l = ae(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const o = y(() => a.value ? e.indeterminateIcon : e.falseIcon), r = y(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return R(() => {
      const s = Re(Wt.filterProps(e), ["modelValue"]);
      return u(Wt, N(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function _u(e) {
  const {
    t: n
  } = Fe();
  function t(a) {
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], o = e[`onClick:${l}`], r = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return u(be, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: o
    }, null);
  }
  return {
    InputIcon: t
  };
}
const Gf = D({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ee(),
  ...Ct({
    transition: {
      component: _i,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Au = O()({
  name: "VMessages",
  props: Gf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = y(() => Be(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = qe(y(() => e.color));
    return R(() => u(et, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((o, r) => u("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), da = D({
  focused: Boolean,
  "onUpdate:focused": Ge()
}, "focus");
function Ot(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  const t = ae(e, "focused"), a = y(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: i
  };
}
const Tu = Symbol.for("vuetify:form"), Uf = D({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function Kf(e) {
  const n = ae(e, "modelValue"), t = y(() => e.disabled), a = y(() => e.readonly), l = G(!1), i = j([]), o = j([]);
  async function r() {
    const d = [];
    let f = !0;
    o.value = [], l.value = !0;
    for (const m of i.value) {
      const v = await m.validate();
      if (v.length > 0 && (f = !1, d.push({
        id: m.id,
        errorMessages: v
      })), !f && e.fastFail) break;
    }
    return o.value = d, l.value = !1, {
      valid: f,
      errors: o.value
    };
  }
  function s() {
    i.value.forEach((d) => d.reset());
  }
  function c() {
    i.value.forEach((d) => d.resetValidation());
  }
  return K(i, () => {
    let d = 0, f = 0;
    const m = [];
    for (const v of i.value)
      v.isValid === !1 ? (f++, m.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && d++;
    o.value = m, n.value = f > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Ae(Tu, {
    register: (d) => {
      let {
        id: f,
        vm: m,
        validate: v,
        reset: b,
        resetValidation: h
      } = d;
      i.value.some((g) => g.id === f) && kt(`Duplicate input name "${f}"`), i.value.push({
        id: f,
        validate: v,
        reset: b,
        resetValidation: h,
        vm: Oc(m),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((f) => f.id !== d);
    },
    update: (d, f, m) => {
      const v = i.value.find((b) => b.id === d);
      v && (v.isValid = f, v.errorMessages = m);
    },
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validateOn: M(e, "validateOn")
  }), {
    errors: o,
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validate: r,
    reset: s,
    resetValidation: c
  };
}
function Qa() {
  return ye(Tu, null);
}
const Bu = D({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...da()
}, "validation");
function Du(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ue();
  const a = ae(e, "modelValue"), l = y(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Qa(), o = j([]), r = G(!0), s = y(() => !!(Be(a.value === "" ? null : a.value).length || Be(l.value === "" ? null : l.value).length)), c = y(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), d = y(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), f = y(() => {
    var V;
    return (V = e.errorMessages) != null && V.length ? Be(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), m = y(() => {
    let V = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const P = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return {
      input: P.has("input"),
      blur: P.has("blur") || P.has("input") || P.has("invalid-input"),
      invalidInput: P.has("invalid-input"),
      lazy: P.has("lazy"),
      eager: P.has("eager")
    };
  }), v = y(() => {
    var V;
    return e.error || (V = e.errorMessages) != null && V.length ? !1 : e.rules.length ? r.value ? o.value.length || m.value.lazy ? null : !0 : !o.value.length : !0;
  }), b = G(!1), h = y(() => ({
    [`${n}--error`]: v.value === !1,
    [`${n}--dirty`]: s.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: d.value
  })), g = Ee("validation"), S = y(() => e.name ?? ot(t));
  yr(() => {
    i == null || i.register({
      id: S.value,
      vm: g,
      validate: _,
      reset: k,
      resetValidation: A
    });
  }), nt(() => {
    i == null || i.unregister(S.value);
  }), at(async () => {
    m.value.lazy || await _(!m.value.eager), i == null || i.update(S.value, v.value, f.value);
  }), rt(() => m.value.input || m.value.invalidInput && v.value === !1, () => {
    K(l, () => {
      if (l.value != null)
        _();
      else if (e.focused) {
        const V = K(() => e.focused, (P) => {
          P || _(), V();
        });
      }
    });
  }), rt(() => m.value.blur, () => {
    K(() => e.focused, (V) => {
      V || _();
    });
  }), K([v, f], () => {
    i == null || i.update(S.value, v.value, f.value);
  });
  async function k() {
    a.value = null, await we(), await A();
  }
  async function A() {
    r.value = !0, m.value.lazy ? o.value = [] : await _(!m.value.eager);
  }
  async function _() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const P = [];
    b.value = !0;
    for (const B of e.rules) {
      if (P.length >= +(e.maxErrors ?? 1))
        break;
      const x = await (typeof B == "function" ? B : () => B)(l.value);
      if (x !== !0) {
        if (x !== !1 && typeof x != "string") {
          console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        P.push(x || "");
      }
    }
    return o.value = P, b.value = !1, r.value = V, o.value;
  }
  return {
    errorMessages: f,
    isDirty: s,
    isDisabled: c,
    isReadonly: d,
    isPristine: r,
    isValid: v,
    isValidating: b,
    reset: k,
    resetValidation: A,
    validate: _,
    validationClasses: h
  };
}
const Rt = D({
  id: String,
  appendIcon: re,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: re,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Ge(),
  "onClick:append": Ge(),
  ...ee(),
  ...Ye(),
  ...Ra(Ne(), ["maxWidth", "minWidth", "width"]),
  ...ge(),
  ...Bu()
}, "VInput"), Xe = O()({
  name: "VInput",
  props: {
    ...Rt()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: i
    } = lt(e), {
      dimensionStyles: o
    } = ze(e), {
      themeClasses: r
    } = ke(e), {
      rtlClasses: s
    } = We(), {
      InputIcon: c
    } = _u(e), d = Ue(), f = y(() => e.id || `input-${d}`), m = y(() => `${f.value}-messages`), {
      errorMessages: v,
      isDirty: b,
      isDisabled: h,
      isReadonly: g,
      isPristine: S,
      isValid: k,
      isValidating: A,
      reset: _,
      resetValidation: V,
      validate: P,
      validationClasses: B
    } = Du(e, "v-input", f), w = y(() => ({
      id: f,
      messagesId: m,
      isDirty: b,
      isDisabled: h,
      isReadonly: g,
      isPristine: S,
      isValid: k,
      isValidating: A,
      reset: _,
      resetValidation: V,
      validate: P
    })), x = y(() => {
      var T;
      return (T = e.errorMessages) != null && T.length || !S.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return R(() => {
      var F, z, W, Z;
      const T = !!(a.prepend || e.prependIcon), C = !!(a.append || e.appendIcon), I = x.value.length > 0, p = !e.hideDetails || e.hideDetails === "auto" && (I || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, B.value, e.class],
        style: [o.value, e.style]
      }, [T && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(F = a.prepend) == null ? void 0 : F.call(a, w.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(z = a.default) == null ? void 0 : z.call(a, w.value)]), C && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (W = a.append) == null ? void 0 : W.call(a, w.value)]), p && u("div", {
        class: "v-input__details"
      }, [u(Au, {
        id: m.value,
        active: I,
        messages: x.value
      }, {
        message: a.message
      }), (Z = a.details) == null ? void 0 : Z.call(a, w.value)])]);
    }), {
      reset: _,
      resetValidation: V,
      validate: P,
      isValid: k,
      errorMessages: v
    };
  }
}), qf = D({
  ...Rt(),
  ...Re(Iu(), ["inline"])
}, "VCheckbox"), Xf = O()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: qf(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ae(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = Ot(e), s = Ue(), c = y(() => e.id || `checkbox-${s}`);
    return R(() => {
      const [d, f] = Yt(t), m = Xe.filterProps(e), v = Et.filterProps(e);
      return u(Xe, N({
        class: ["v-checkbox", e.class]
      }, d, m, {
        modelValue: l.value,
        "onUpdate:modelValue": (b) => l.value = b,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (b) => {
          let {
            id: h,
            messagesId: g,
            isDisabled: S,
            isReadonly: k,
            isValid: A
          } = b;
          return u(Et, N(v, {
            id: h.value,
            "aria-describedby": g.value,
            disabled: S.value,
            readonly: k.value
          }, f, {
            error: A.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (_) => l.value = _,
            onFocus: o,
            onBlur: r
          }), a);
        }
      });
    }), {};
  }
});
function Zf(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = ea(l, t), o = pu(l, a, t), r = ea(l, n), s = Eu(l, n), c = r * 0.4;
  return o > s ? s - c : o + i < s + r ? s - i + r + c : o;
}
function Jf(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = ea(a, t), i = Eu(a, n), o = ea(a, n);
  return i - l / 2 + o / 2;
}
function Xo(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Qf(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function pu(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = t;
  return e ? n ? i - l + a : a : t.scrollTop;
}
function ea(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Eu(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Mu = Symbol.for("vuetify:v-slide-group"), pi = D({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Mu
  },
  nextIcon: {
    type: re,
    default: "$next"
  },
  prevIcon: {
    type: re,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...ee(),
  ...mn({
    mobile: null
  }),
  ...ve(),
  ...Sn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), ta = O()({
  name: "VSlideGroup",
  props: pi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = We(), {
      displayClasses: l,
      mobile: i
    } = yt(e), o = Ut(e, e.symbol), r = G(!1), s = G(0), c = G(0), d = G(0), f = y(() => e.direction === "horizontal"), {
      resizeRef: m,
      contentRect: v
    } = xt(), {
      resizeRef: b,
      contentRect: h
    } = xt(), g = Fv(), S = y(() => ({
      container: m.el,
      duration: 200,
      easing: "easeOutQuart"
    })), k = y(() => o.selected.value.length ? o.items.value.findIndex(($) => $.id === o.selected.value[0]) : -1), A = y(() => o.selected.value.length ? o.items.value.findIndex(($) => $.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (xe) {
      let $ = -1;
      K(() => [o.selected.value, v.value, h.value, f.value], () => {
        cancelAnimationFrame($), $ = requestAnimationFrame(() => {
          if (v.value && h.value) {
            const E = f.value ? "width" : "height";
            c.value = v.value[E], d.value = h.value[E], r.value = c.value + 1 < d.value;
          }
          if (k.value >= 0 && b.el) {
            const E = b.el.children[A.value];
            V(E, e.centerActive);
          }
        });
      });
    }
    const _ = G(!1);
    function V($, E) {
      let U = 0;
      E ? U = Jf({
        containerElement: m.el,
        isHorizontal: f.value,
        selectedElement: $
      }) : U = Zf({
        containerElement: m.el,
        isHorizontal: f.value,
        isRtl: a.value,
        selectedElement: $
      }), P(U);
    }
    function P($) {
      if (!xe || !m.el) return;
      const E = ea(f.value, m.el), U = pu(f.value, a.value, m.el);
      if (!(Xo(f.value, m.el) <= E || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs($ - U) < 16)) {
        if (f.value && a.value && m.el) {
          const {
            scrollWidth: te,
            offsetWidth: se
          } = m.el;
          $ = te - se - $;
        }
        f.value ? g.horizontal($, S.value) : g($, S.value);
      }
    }
    function B($) {
      const {
        scrollTop: E,
        scrollLeft: U
      } = $.target;
      s.value = f.value ? U : E;
    }
    function w($) {
      if (_.value = !0, !(!r.value || !b.el)) {
        for (const E of $.composedPath())
          for (const U of b.el.children)
            if (U === E) {
              V(U);
              return;
            }
      }
    }
    function x($) {
      _.value = !1;
    }
    let T = !1;
    function C($) {
      var E;
      !T && !_.value && !($.relatedTarget && ((E = b.el) != null && E.contains($.relatedTarget))) && F(), T = !1;
    }
    function I() {
      T = !0;
    }
    function p($) {
      if (!b.el) return;
      function E(U) {
        $.preventDefault(), F(U);
      }
      f.value ? $.key === "ArrowRight" ? E(a.value ? "prev" : "next") : $.key === "ArrowLeft" && E(a.value ? "next" : "prev") : $.key === "ArrowDown" ? E("next") : $.key === "ArrowUp" && E("prev"), $.key === "Home" ? E("first") : $.key === "End" && E("last");
    }
    function F($) {
      var U, oe;
      if (!b.el) return;
      let E;
      if (!$)
        E = Un(b.el)[0];
      else if ($ === "next") {
        if (E = (U = b.el.querySelector(":focus")) == null ? void 0 : U.nextElementSibling, !E) return F("first");
      } else if ($ === "prev") {
        if (E = (oe = b.el.querySelector(":focus")) == null ? void 0 : oe.previousElementSibling, !E) return F("last");
      } else $ === "first" ? E = b.el.firstElementChild : $ === "last" && (E = b.el.lastElementChild);
      E && E.focus({
        preventScroll: !0
      });
    }
    function z($) {
      const E = f.value && a.value ? -1 : 1, U = ($ === "prev" ? -E : E) * c.value;
      let oe = s.value + U;
      if (f.value && a.value && m.el) {
        const {
          scrollWidth: te,
          offsetWidth: se
        } = m.el;
        oe += te - se;
      }
      P(oe);
    }
    const W = y(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), Z = y(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return r.value || Math.abs(s.value) > 0;
        case "mobile":
          return i.value || r.value || Math.abs(s.value) > 0;
        default:
          return !i.value && (r.value || Math.abs(s.value) > 0);
      }
    }), J = y(() => Math.abs(s.value) > 1), L = y(() => {
      if (!m.value) return !1;
      const $ = Xo(f.value, m.el), E = Qf(f.value, m.el);
      return $ - E - Math.abs(s.value) > 1;
    });
    return R(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": Z.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: _.value || o.selected.value.length ? -1 : 0,
      onFocus: C
    }, {
      default: () => {
        var $, E, U;
        return [Z.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !J.value
          }],
          onMousedown: I,
          onClick: () => J.value && z("prev")
        }, [(($ = t.prev) == null ? void 0 : $.call(t, W.value)) ?? u(Zn, null, {
          default: () => [u(be, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: m,
          class: "v-slide-group__container",
          onScroll: B
        }, [u("div", {
          ref: b,
          class: "v-slide-group__content",
          onFocusin: w,
          onFocusout: x,
          onKeydown: p
        }, [(E = t.default) == null ? void 0 : E.call(t, W.value)])]), Z.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !L.value
          }],
          onMousedown: I,
          onClick: () => L.value && z("next")
        }, [((U = t.next) == null ? void 0 : U.call(t, W.value)) ?? u(Zn, null, {
          default: () => [u(be, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: z,
      scrollOffset: s,
      focus: F,
      hasPrev: J,
      hasNext: L
    };
  }
}), $u = Symbol.for("vuetify:v-chip-group"), em = D({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: _t
  },
  ...pi(),
  ...ee(),
  ...Sn({
    selectedClass: "v-chip--selected"
  }),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "tonal"
  })
}, "VChipGroup"), tm = O()({
  name: "VChipGroup",
  props: em(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = Ut(e, $u);
    return pe({
      VChip: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        filter: M(e, "filter"),
        variant: M(e, "variant")
      }
    }), R(() => {
      const c = ta.filterProps(e);
      return u(ta, N(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = t.default) == null ? void 0 : d.call(t, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
}), nm = D({
  activeClass: String,
  appendAvatar: String,
  appendIcon: re,
  closable: Boolean,
  closeIcon: {
    type: re,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: re,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Ge(),
  onClickOnce: Ge(),
  ...ut(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...kn(),
  ...Te(),
  ...ca(),
  ...Bt(),
  ...ve({
    tag: "span"
  }),
  ...ge(),
  ...bt({
    variant: "tonal"
  })
}, "VChip"), zn = O()({
  name: "VChip",
  directives: {
    Ripple: Lt
  },
  props: nm(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = Fe(), {
      borderClasses: o
    } = ft(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = bn(e), {
      densityClasses: d
    } = lt(e), {
      elevationClasses: f
    } = Ke(e), {
      roundedClasses: m
    } = Me(e), {
      sizeClasses: v
    } = Ln(e), {
      themeClasses: b
    } = ke(e), h = ae(e, "modelValue"), g = xn(e, $u, !1), S = sa(e, t), k = y(() => e.link !== !1 && S.isLink.value), A = y(() => !e.disabled && e.link !== !1 && (!!g || e.link || S.isClickable.value)), _ = y(() => ({
      "aria-label": i(e.closeLabel),
      onClick(B) {
        B.preventDefault(), B.stopPropagation(), h.value = !1, a("click:close", B);
      }
    }));
    function V(B) {
      var w;
      a("click", B), A.value && ((w = S.navigate) == null || w.call(S, B), g == null || g.toggle());
    }
    function P(B) {
      (B.key === "Enter" || B.key === " ") && (B.preventDefault(), V(B));
    }
    return () => {
      const B = S.isLink.value ? "a" : e.tag, w = !!(e.appendIcon || e.appendAvatar), x = !!(w || l.append), T = !!(l.close || e.closable), C = !!(l.filter || e.filter) && g, I = !!(e.prependIcon || e.prependAvatar), p = !!(I || l.prepend), F = !g || g.isSelected.value;
      return h.value && De(u(B, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": A.value,
          "v-chip--filter": C,
          "v-chip--pill": e.pill
        }, b.value, o.value, F ? r.value : void 0, d.value, f.value, m.value, v.value, c.value, g == null ? void 0 : g.selectedClass.value, e.class],
        style: [F ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: S.href.value,
        tabindex: A.value ? 0 : void 0,
        onClick: V,
        onKeydown: A.value && !k.value && P
      }, {
        default: () => {
          var z;
          return [Gt(A.value, "v-chip"), C && u(Ai, {
            key: "filter"
          }, {
            default: () => [De(u("div", {
              class: "v-chip__filter"
            }, [l.filter ? u(me, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : u(be, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[wt, g.isSelected.value]])]
          }), p && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !I,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : u(le, null, [e.prependIcon && u(be, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(ht, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((z = l.default) == null ? void 0 : z.call(l, {
            isSelected: g == null ? void 0 : g.isSelected.value,
            selectedClass: g == null ? void 0 : g.selectedClass.value,
            select: g == null ? void 0 : g.select,
            toggle: g == null ? void 0 : g.toggle,
            value: g == null ? void 0 : g.value.value,
            disabled: e.disabled
          })) ?? e.text]), x && u("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? u(me, {
            key: "append-defaults",
            disabled: !w,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : u(le, null, [e.appendIcon && u(be, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(ht, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), T && u("button", N({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, _.value), [l.close ? u(me, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : u(be, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[ct("ripple"), A.value && e.ripple, null]]);
    };
  }
}), Hl = Symbol.for("vuetify:list");
function Fu() {
  const e = ye(Hl, {
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: G(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return Ae(Hl, n), e;
}
function Lu() {
  return ye(Hl, null);
}
const Ei = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: i
      } = t;
      return a = _e(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of Be(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, Ou = (e) => {
  const n = Ei(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = _e(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Be(a);
        r.length && (o = n.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, am = (e) => {
  const n = Ei(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = _e(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, lm = (e) => {
  const n = Ou(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = _e(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, im = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = l.get(n);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, Ru = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let i = _e(l.get(n));
      for (a.add(n); i != null && i !== n; )
        a.add(i), i = _e(l.get(i));
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, om = {
  open: Ru.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const i = [];
    let o = l.get(n);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, Mi = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i
      } = t;
      if (a = _e(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [c, d] = s;
          return d === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t) => {
      const a = [];
      for (const [l, i] of t.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, Nu = (e) => {
  const n = Mi(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = _e(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Map();
      return a != null && a.length && (o = n.in(a.slice(0, 1), l, i)), o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, rm = (e) => {
  const n = Mi(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = _e(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, um = (e) => {
  const n = Nu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = _e(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, sm = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r
      } = t;
      a = _e(a);
      const s = new Map(i), c = [a];
      for (; c.length; ) {
        const f = c.shift();
        i.set(_e(f), l ? "on" : "off"), o.has(f) && c.push(...o.get(f));
      }
      let d = _e(r.get(a));
      for (; d; ) {
        const f = o.get(d), m = f.every((b) => i.get(_e(b)) === "on"), v = f.every((b) => !i.has(_e(b)) || i.get(_e(b)) === "off");
        i.set(d, m ? "on" : v ? "off" : "indeterminate"), d = _e(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((m, v) => {
        let [b, h] = v;
        return h === "on" && m.push(b), m;
      }, []).length === 0 ? s : i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t, a) => {
      const l = [];
      for (const [i, o] of t.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return n;
}, na = Symbol.for("vuetify:nested"), zu = {
  id: G(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: j(/* @__PURE__ */ new Map()),
    children: j(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: j(!1),
    selectable: j(!1),
    opened: j(/* @__PURE__ */ new Set()),
    activated: j(/* @__PURE__ */ new Set()),
    selected: j(/* @__PURE__ */ new Map()),
    selectedValues: j([])
  }
}, cm = D({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), dm = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), a = j(/* @__PURE__ */ new Map()), l = ae(e, "opened", e.opened, (v) => new Set(_e(v)), (v) => [...v.values()]), i = y(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return am(e.mandatory);
      case "single-leaf":
        return lm(e.mandatory);
      case "independent":
        return Ei(e.mandatory);
      case "single-independent":
      default:
        return Ou(e.mandatory);
    }
  }), o = y(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return um(e.mandatory);
      case "leaf":
        return rm(e.mandatory);
      case "independent":
        return Mi(e.mandatory);
      case "single-independent":
        return Nu(e.mandatory);
      case "classic":
      default:
        return sm(e.mandatory);
    }
  }), r = y(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return om;
      case "single":
        return im;
      case "multiple":
      default:
        return Ru;
    }
  }), s = ae(e, "activated", e.activated, (v) => i.value.in(v, t.value, a.value), (v) => i.value.out(v, t.value, a.value)), c = ae(e, "selected", e.selected, (v) => o.value.in(v, t.value, a.value), (v) => o.value.out(v, t.value, a.value));
  nt(() => {
    n = !0;
  });
  function d(v) {
    const b = [];
    let h = v;
    for (; h != null; )
      b.unshift(h), h = a.value.get(h);
    return b;
  }
  const f = Ee("nested"), m = {
    id: G(),
    root: {
      opened: l,
      activatable: M(e, "activatable"),
      selectable: M(e, "selectable"),
      activated: s,
      selected: c,
      selectedValues: y(() => {
        const v = [];
        for (const [b, h] of c.value.entries())
          h === "on" && v.push(b);
        return v;
      }),
      register: (v, b, h) => {
        b && v !== b && a.value.set(v, b), h && t.value.set(v, []), b != null && t.value.set(b, [...t.value.get(b) || [], v]);
      },
      unregister: (v) => {
        if (n) return;
        t.value.delete(v);
        const b = a.value.get(v);
        if (b) {
          const h = t.value.get(b) ?? [];
          t.value.set(b, h.filter((g) => g !== v));
        }
        a.value.delete(v);
      },
      open: (v, b, h) => {
        f.emit("click:open", {
          id: v,
          value: b,
          path: d(v),
          event: h
        });
        const g = r.value.open({
          id: v,
          value: b,
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        g && (l.value = g);
      },
      openOnSelect: (v, b, h) => {
        const g = r.value.select({
          id: v,
          value: b,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        g && (l.value = g);
      },
      select: (v, b, h) => {
        f.emit("click:select", {
          id: v,
          value: b,
          path: d(v),
          event: h
        });
        const g = o.value.select({
          id: v,
          value: b,
          selected: new Map(c.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        g && (c.value = g), m.root.openOnSelect(v, b, h);
      },
      activate: (v, b, h) => {
        if (!e.activatable)
          return m.root.select(v, !0, h);
        f.emit("click:activate", {
          id: v,
          value: b,
          path: d(v),
          event: h
        });
        const g = i.value.activate({
          id: v,
          value: b,
          activated: new Set(s.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        g && (s.value = g);
      },
      children: t,
      parents: a
    }
  };
  return Ae(na, m), m.root;
}, Hu = (e, n) => {
  const t = ye(na, zu), a = Symbol(Ue()), l = y(() => e.value !== void 0 ? e.value : a), i = {
    ...t,
    id: l,
    open: (o, r) => t.root.open(_e(l.value), o, r),
    openOnSelect: (o, r) => t.root.openOnSelect(l.value, o, r),
    isOpen: y(() => t.root.opened.value.has(_e(l.value))),
    parent: y(() => t.root.parents.value.get(l.value)),
    activate: (o, r) => t.root.activate(l.value, o, r),
    isActivated: y(() => t.root.activated.value.has(_e(l.value))),
    select: (o, r) => t.root.select(l.value, o, r),
    isSelected: y(() => t.root.selected.value.get(_e(l.value)) === "on"),
    isIndeterminate: y(() => t.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: y(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(l.value, t.id.value, n), nt(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
  }), n && Ae(na, i), i;
}, vm = () => {
  const e = ye(na, zu);
  Ae(na, {
    ...e,
    isGroupActivator: !0
  });
}, fm = dt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return vm(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), mm = D({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: re,
    default: "$collapse"
  },
  expandIcon: {
    type: re,
    default: "$expand"
  },
  prependIcon: re,
  appendIcon: re,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...ee(),
  ...ve()
}, "VListGroup"), Wl = O()({
  name: "VListGroup",
  props: mm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Hu(M(e, "value"), !0), o = y(() => `v-list-group--id-${String(i.value)}`), r = Lu(), {
      isBooted: s
    } = yn();
    function c(v) {
      v.stopPropagation(), l(!a.value, v);
    }
    const d = y(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), f = y(() => a.value ? e.collapseIcon : e.expandIcon), m = y(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && f.value,
        appendIcon: e.appendIcon || !e.subgroup && f.value,
        title: e.title,
        value: e.value
      }
    }));
    return R(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && u(me, {
        defaults: m.value
      }, {
        default: () => [u(fm, null, {
          default: () => [t.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), u(et, {
        transition: {
          component: Ua
        },
        disabled: !s.value
      }, {
        default: () => {
          var v;
          return [De(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(v = t.default) == null ? void 0 : v.call(t)]), [[wt, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), gm = D({
  opacity: [Number, String],
  ...ee(),
  ...ve()
}, "VListItemSubtitle"), Wu = O()({
  name: "VListItemSubtitle",
  props: gm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), ju = Tt("v-list-item-title"), hm = D({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: re,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: re,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Ge(),
  onClickOnce: Ge(),
  ...ut(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...Te(),
  ...ca(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "text"
  })
}, "VListItem"), Mt = O()({
  name: "VListItem",
  directives: {
    Ripple: Lt
  },
  props: hm(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = sa(e, t), o = y(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: c,
      isOpen: d,
      isSelected: f,
      isIndeterminate: m,
      isGroupActivator: v,
      root: b,
      parent: h,
      openOnSelect: g
    } = Hu(o, !1), S = Lu(), k = y(() => {
      var E;
      return e.active !== !1 && (e.active || ((E = i.isActive) == null ? void 0 : E.value) || (b.activatable.value ? s.value : f.value));
    }), A = y(() => e.link !== !1 && i.isLink.value), _ = y(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!S && (b.selectable.value || b.activatable.value || e.value != null))), V = y(() => e.rounded || e.nav), P = y(() => e.color ?? e.activeColor), B = y(() => ({
      color: k.value ? P.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    K(() => {
      var E;
      return (E = i.isActive) == null ? void 0 : E.value;
    }, (E) => {
      E && h.value != null && b.open(h.value, !0), E && g(E);
    }, {
      immediate: !0
    });
    const {
      themeClasses: w
    } = ke(e), {
      borderClasses: x
    } = ft(e), {
      colorClasses: T,
      colorStyles: C,
      variantClasses: I
    } = bn(B), {
      densityClasses: p
    } = lt(e), {
      dimensionStyles: F
    } = ze(e), {
      elevationClasses: z
    } = Ke(e), {
      roundedClasses: W
    } = Me(V), Z = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), J = y(() => ({
      isActive: k.value,
      select: c,
      isOpen: d.value,
      isSelected: f.value,
      isIndeterminate: m.value
    }));
    function L(E) {
      var U;
      l("click", E), _.value && ((U = i.navigate) == null || U.call(i, E), !v && (b.activatable.value ? r(!s.value, E) : (b.selectable.value || e.value != null) && c(!f.value, E)));
    }
    function $(E) {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), E.target.dispatchEvent(new MouseEvent("click", E)));
    }
    return R(() => {
      const E = A.value ? "a" : e.tag, U = a.title || e.title != null, oe = a.subtitle || e.subtitle != null, te = !!(e.appendAvatar || e.appendIcon), se = !!(te || a.append), H = !!(e.prependAvatar || e.prependIcon), ne = !!(H || a.prepend);
      return S == null || S.updateHasPrepend(ne), e.activeColor && hd("active-color", ["color", "base-color"]), De(u(E, {
        class: ["v-list-item", {
          "v-list-item--active": k.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": _.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ne && (S == null ? void 0 : S.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && k.value
        }, w.value, x.value, T.value, p.value, z.value, Z.value, W.value, I.value, e.class],
        style: [C.value, F.value, e.style],
        href: i.href.value,
        tabindex: _.value ? S ? -2 : 0 : void 0,
        onClick: L,
        onKeydown: _.value && !A.value && $
      }, {
        default: () => {
          var ie;
          return [Gt(_.value || k.value, "v-list-item"), ne && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !H,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var he;
              return [(he = a.prepend) == null ? void 0 : he.call(a, J.value)];
            }
          }) : u(le, null, [e.prependAvatar && u(ht, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(be, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [U && u(ju, {
            key: "title"
          }, {
            default: () => {
              var he;
              return [((he = a.title) == null ? void 0 : he.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), oe && u(Wu, {
            key: "subtitle"
          }, {
            default: () => {
              var he;
              return [((he = a.subtitle) == null ? void 0 : he.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (ie = a.default) == null ? void 0 : ie.call(a, J.value)]), se && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? u(me, {
            key: "append-defaults",
            disabled: !te,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var he;
              return [(he = a.append) == null ? void 0 : he.call(a, J.value)];
            }
          }) : u(le, null, [e.appendIcon && u(be, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(ht, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[ct("ripple"), _.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: v,
      isSelected: f,
      list: S,
      select: c
    };
  }
}), ym = D({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ee(),
  ...ve()
}, "VListSubheader"), Yu = O()({
  name: "VListSubheader",
  props: ym(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = qe(M(e, "color"));
    return R(() => {
      const i = !!(t.default || e.title);
      return u(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var o;
          return [i && u("div", {
            class: "v-list-subheader__text"
          }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), bm = D({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ee(),
  ...ge()
}, "VDivider"), va = O()({
  name: "VDivider",
  props: bm(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      textColorClasses: i,
      textColorStyles: o
    } = qe(M(e, "color")), r = y(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = X(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), s;
    });
    return R(() => {
      const s = u("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class],
        style: [r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? u("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [s, u("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), Sm = D({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Gu = O()({
  name: "VListChildren",
  props: Sm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Fu(), () => {
      var a, l;
      return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var m, v;
        let {
          children: o,
          props: r,
          type: s,
          raw: c
        } = i;
        if (s === "divider")
          return ((m = t.divider) == null ? void 0 : m.call(t, {
            props: r
          })) ?? u(va, r, null);
        if (s === "subheader")
          return ((v = t.subheader) == null ? void 0 : v.call(t, {
            props: r
          })) ?? u(Yu, r, null);
        const d = {
          subtitle: t.subtitle ? (b) => {
            var h;
            return (h = t.subtitle) == null ? void 0 : h.call(t, {
              ...b,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (b) => {
            var h;
            return (h = t.prepend) == null ? void 0 : h.call(t, {
              ...b,
              item: c
            });
          } : void 0,
          append: t.append ? (b) => {
            var h;
            return (h = t.append) == null ? void 0 : h.call(t, {
              ...b,
              item: c
            });
          } : void 0,
          title: t.title ? (b) => {
            var h;
            return (h = t.title) == null ? void 0 : h.call(t, {
              ...b,
              item: c
            });
          } : void 0
        }, f = Wl.filterProps(r);
        return o ? u(Wl, N({
          value: r == null ? void 0 : r.value
        }, f), {
          activator: (b) => {
            let {
              props: h
            } = b;
            const g = {
              ...r,
              ...h,
              value: e.returnObject ? c : r.value
            };
            return t.header ? t.header({
              props: g
            }) : u(Mt, g, d);
          },
          default: () => u(Gu, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: r
        }) : u(Mt, N(r, {
          value: e.returnObject ? c : r.value
        }), d);
      }));
    };
  }
}), Uu = D({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: _t
  }
}, "list-items");
function zt(e, n) {
  const t = He(n, e.itemTitle, n), a = He(n, e.itemValue, t), l = He(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? Re(n, ["children"]) : n : void 0 : He(n, e.itemProps), o = {
    title: t,
    value: a,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(l) ? Ku(e, l) : void 0,
    raw: n
  };
}
function Ku(e, n) {
  const t = [];
  for (const a of n)
    t.push(zt(e, a));
  return t;
}
function $i(e) {
  const n = y(() => Ku(e, e.items)), t = y(() => n.value.some((i) => i.value === null));
  function a(i) {
    return t.value || (i = i.filter((o) => o !== null)), i.map((o) => e.returnObject && typeof o == "string" ? zt(e, o) : n.value.find((r) => e.valueComparator(o, r.value)) || zt(e, o));
  }
  function l(i) {
    return e.returnObject ? i.map((o) => {
      let {
        raw: r
      } = o;
      return r;
    }) : i.map((o) => {
      let {
        value: r
      } = o;
      return r;
    });
  }
  return {
    items: n,
    transformIn: a,
    transformOut: l
  };
}
function km(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function xm(e, n) {
  const t = He(n, e.itemType, "item"), a = km(n) ? n : He(n, e.itemTitle), l = He(n, e.itemValue, void 0), i = He(n, e.itemChildren), o = e.itemProps === !0 ? Re(n, ["children"]) : He(n, e.itemProps), r = {
    title: a,
    value: l,
    ...o
  };
  return {
    type: t,
    title: r.title,
    value: r.value,
    props: r,
    children: t === "item" && i ? qu(e, i) : void 0,
    raw: n
  };
}
function qu(e, n) {
  const t = [];
  for (const a of n)
    t.push(xm(e, a));
  return t;
}
function wm(e) {
  return {
    items: y(() => qu(e, e.items))
  };
}
const Cm = D({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Ge(),
  "onClick:select": Ge(),
  "onUpdate:opened": Ge(),
  ...cm({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...ut(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Uu(),
  ...Te(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "text"
  })
}, "VList"), el = O()({
  name: "VList",
  props: Cm(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = wm(e), {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(M(e, "bgColor")), {
      borderClasses: r
    } = ft(e), {
      densityClasses: s
    } = lt(e), {
      dimensionStyles: c
    } = ze(e), {
      elevationClasses: d
    } = Ke(e), {
      roundedClasses: f
    } = Me(e), {
      children: m,
      open: v,
      parents: b,
      select: h
    } = dm(e), g = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = M(e, "activeColor"), k = M(e, "baseColor"), A = M(e, "color");
    Fu(), pe({
      VListGroup: {
        activeColor: S,
        baseColor: k,
        color: A,
        expandIcon: M(e, "expandIcon"),
        collapseIcon: M(e, "collapseIcon")
      },
      VListItem: {
        activeClass: M(e, "activeClass"),
        activeColor: S,
        baseColor: k,
        color: A,
        density: M(e, "density"),
        disabled: M(e, "disabled"),
        lines: M(e, "lines"),
        nav: M(e, "nav"),
        slim: M(e, "slim"),
        variant: M(e, "variant")
      }
    });
    const _ = G(!1), V = j();
    function P(I) {
      _.value = !0;
    }
    function B(I) {
      _.value = !1;
    }
    function w(I) {
      var p;
      !_.value && !(I.relatedTarget && ((p = V.value) != null && p.contains(I.relatedTarget))) && C();
    }
    function x(I) {
      const p = I.target;
      if (!(!V.value || ["INPUT", "TEXTAREA"].includes(p.tagName))) {
        if (I.key === "ArrowDown")
          C("next");
        else if (I.key === "ArrowUp")
          C("prev");
        else if (I.key === "Home")
          C("first");
        else if (I.key === "End")
          C("last");
        else
          return;
        I.preventDefault();
      }
    }
    function T(I) {
      _.value = !0;
    }
    function C(I) {
      if (V.value)
        return nn(V.value, I);
    }
    return R(() => u(e.tag, {
      ref: V,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, s.value, d.value, g.value, f.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || _.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: P,
      onFocusout: B,
      onFocus: w,
      onKeydown: x,
      onMousedown: T
    }, {
      default: () => [u(Gu, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: v,
      select: h,
      focus: C,
      children: m,
      parents: b
    };
  }
}), Vm = Tt("v-list-img"), Pm = D({
  start: Boolean,
  end: Boolean,
  ...ee(),
  ...ve()
}, "VListItemAction"), Im = O()({
  name: "VListItemAction",
  props: Pm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
}), _m = D({
  start: Boolean,
  end: Boolean,
  ...ee(),
  ...ve()
}, "VListItemMedia"), Am = O()({
  name: "VListItemMedia",
  props: _m(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
});
function wl(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function Tm(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Zo(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return wl({
      x: l,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return wl({
      x: l,
      y: i
    }, n);
  }
  return wl({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const Xu = {
  static: pm,
  // specific viewport position, usually centered
  connected: Mm
  // connected to a certain element
}, Bm = D({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Xu
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Dm(e, n) {
  const t = j({}), a = j();
  xe && rt(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    K(() => e.locationStrategy, i), tt(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : a.value = (r = Xu[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function pm() {
}
function Em(e, n) {
  const t = hi(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Mm(e, n, t) {
  (Array.isArray(e.target.value) || Ld(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = mi(() => {
    const b = Tl(n.location, e.isRtl.value), h = n.origin === "overlap" ? b : n.origin === "auto" ? yl(b) : Tl(n.origin, e.isRtl.value);
    return b.side === h.side && b.align === bl(h).align ? {
      preferredAnchor: bo(b),
      preferredOrigin: bo(h)
    } : {
      preferredAnchor: b,
      preferredOrigin: h
    };
  }), [o, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((b) => y(() => {
    const h = parseFloat(n[b]);
    return isNaN(h) ? 1 / 0 : h;
  })), d = y(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const b = n.offset.split(" ").map(parseFloat);
      return b.length < 2 && b.push(0), b;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let f = !1;
  const m = new ResizeObserver(() => {
    f && v();
  });
  K([e.target, e.contentEl], (b, h) => {
    let [g, S] = b, [k, A] = h;
    k && !Array.isArray(k) && m.unobserve(k), g && !Array.isArray(g) && m.observe(g), A && m.unobserve(A), S && m.observe(S);
  }, {
    immediate: !0
  }), tt(() => {
    m.disconnect();
  });
  function v() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    const b = Tr(e.target.value), h = Em(e.contentEl.value, e.isRtl.value), g = Ea(e.contentEl.value), S = 12;
    g.length || (g.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const k = g.reduce((C, I) => {
      const p = I.getBoundingClientRect(), F = new an({
        x: I === document.documentElement ? 0 : p.x,
        y: I === document.documentElement ? 0 : p.y,
        width: I.clientWidth,
        height: I.clientHeight
      });
      return C ? new an({
        x: Math.max(C.left, F.left),
        y: Math.max(C.top, F.top),
        width: Math.min(C.right, F.right) - Math.max(C.left, F.left),
        height: Math.min(C.bottom, F.bottom) - Math.max(C.top, F.top)
      }) : F;
    }, void 0);
    k.x += S, k.y += S, k.width -= S * 2, k.height -= S * 2;
    let A = {
      anchor: l.value,
      origin: i.value
    };
    function _(C) {
      const I = new an(h), p = Zo(C.anchor, b), F = Zo(C.origin, I);
      let {
        x: z,
        y: W
      } = Tm(p, F);
      switch (C.anchor.side) {
        case "top":
          W -= d.value[0];
          break;
        case "bottom":
          W += d.value[0];
          break;
        case "left":
          z -= d.value[0];
          break;
        case "right":
          z += d.value[0];
          break;
      }
      switch (C.anchor.align) {
        case "top":
          W -= d.value[1];
          break;
        case "bottom":
          W += d.value[1];
          break;
        case "left":
          z -= d.value[1];
          break;
        case "right":
          z += d.value[1];
          break;
      }
      return I.x += z, I.y += W, I.width = Math.min(I.width, s.value), I.height = Math.min(I.height, c.value), {
        overflows: ko(I, k),
        x: z,
        y: W
      };
    }
    let V = 0, P = 0;
    const B = {
      x: 0,
      y: 0
    }, w = {
      x: !1,
      y: !1
    };
    let x = -1;
    for (; ; ) {
      if (x++ > 10) {
        Da("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: C,
        y: I,
        overflows: p
      } = _(A);
      V += C, P += I, h.x += C, h.y += I;
      {
        const F = So(A.anchor), z = p.x.before || p.x.after, W = p.y.before || p.y.after;
        let Z = !1;
        if (["x", "y"].forEach((J) => {
          if (J === "x" && z && !w.x || J === "y" && W && !w.y) {
            const L = {
              anchor: {
                ...A.anchor
              },
              origin: {
                ...A.origin
              }
            }, $ = J === "x" ? F === "y" ? bl : yl : F === "y" ? yl : bl;
            L.anchor = $(L.anchor), L.origin = $(L.origin);
            const {
              overflows: E
            } = _(L);
            (E[J].before <= p[J].before && E[J].after <= p[J].after || E[J].before + E[J].after < (p[J].before + p[J].after) / 2) && (A = L, Z = w[J] = !0);
          }
        }), Z) continue;
      }
      p.x.before && (V += p.x.before, h.x += p.x.before), p.x.after && (V -= p.x.after, h.x -= p.x.after), p.y.before && (P += p.y.before, h.y += p.y.before), p.y.after && (P -= p.y.after, h.y -= p.y.after);
      {
        const F = ko(h, k);
        B.x = k.width - F.x.before - F.x.after, B.y = k.height - F.y.before - F.y.after, V += F.x.before, h.x += F.x.before, P += F.y.before, h.y += F.y.before;
      }
      break;
    }
    const T = So(A.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${A.anchor.side} ${A.anchor.align}`,
      transformOrigin: `${A.origin.side} ${A.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: X(Cl(P)),
      left: e.isRtl.value ? void 0 : X(Cl(V)),
      right: e.isRtl.value ? X(Cl(-V)) : void 0,
      minWidth: X(T === "y" ? Math.min(o.value, b.width) : o.value),
      maxWidth: X(Jo(Le(B.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: X(Jo(Le(B.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: B,
      contentBox: h
    };
  }
  return K(() => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => v()), we(() => {
    const b = v();
    if (!b) return;
    const {
      available: h,
      contentBox: g
    } = b;
    g.height > h.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), {
    updateLocation: v
  };
}
function Cl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Jo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let jl = !0;
const Fa = [];
function $m(e) {
  !jl || Fa.length ? (Fa.push(e), Yl()) : (jl = !1, e(), Yl());
}
let Qo = -1;
function Yl() {
  cancelAnimationFrame(Qo), Qo = requestAnimationFrame(() => {
    const e = Fa.shift();
    e && e(), Fa.length ? Yl() : jl = !0;
  });
}
const _a = {
  none: null,
  close: Om,
  block: Rm,
  reposition: Nm
}, Fm = D({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in _a
  }
}, "VOverlay-scroll-strategies");
function Lm(e, n) {
  if (!xe) return;
  let t;
  $e(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = ui(), await new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = _a[e.scrollStrategy]) == null || a.call(_a, n, e, t);
    }));
  }), tt(() => {
    t == null || t.stop();
  });
}
function Om(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Zu(e.targetEl.value ?? e.contentEl.value, n);
}
function Rm(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...Ea(e.targetEl.value, n.contained ? t : void 0), ...Ea(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => xi(r) && r)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", X(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", X(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", X(l)), r.classList.add("v-overlay-scroll-blocked");
  }), tt(() => {
    a.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), f = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = f;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Nm(e, n, t) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    $m(() => {
      var d, f;
      const s = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      Zu(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), tt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function Zu(e, n) {
  const t = [document, ...Ea(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), tt(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const Gl = Symbol.for("vuetify:v-menu"), Fi = D({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Li(e, n) {
  let t = () => {
  };
  function a(o) {
    t == null || t();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = ld(r, () => {
        n == null || n(o), s(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const zm = D({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Fi()
}, "VOverlay-activator");
function Hm(e, n) {
  let {
    isActive: t,
    isTop: a,
    contentEl: l
  } = n;
  const i = Ee("useActivator"), o = j();
  let r = !1, s = !1, c = !0;
  const d = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !d.value), {
    runOpenDelay: m,
    runCloseDelay: v
  } = Li(e, (w) => {
    w === (e.openOnHover && r || d.value && s) && !(e.openOnHover && t.value && !a.value) && (t.value !== w && (c = !0), t.value = w);
  }), b = j(), h = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, t.value || (b.value = [w.clientX, w.clientY]), t.value = !t.value;
    },
    onMouseenter: (w) => {
      var x;
      (x = w.sourceCapabilities) != null && x.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, m());
    },
    onMouseleave: (w) => {
      r = !1, v();
    },
    onFocus: (w) => {
      Dn(w.target, ":focus-visible") !== !1 && (s = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, m());
    },
    onBlur: (w) => {
      s = !1, w.stopPropagation(), v();
    }
  }, g = y(() => {
    const w = {};
    return f.value && (w.onClick = h.onClick), e.openOnHover && (w.onMouseenter = h.onMouseenter, w.onMouseleave = h.onMouseleave), d.value && (w.onFocus = h.onFocus, w.onBlur = h.onBlur), w;
  }), S = y(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, m();
    }, w.onMouseleave = () => {
      r = !1, v();
    }), d.value && (w.onFocusin = () => {
      s = !0, m();
    }, w.onFocusout = () => {
      s = !1, v();
    }), e.closeOnContentClick) {
      const x = ye(Gl, null);
      w.onClick = () => {
        t.value = !1, x == null || x.closeParents();
      };
    }
    return w;
  }), k = y(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      c && (r = !0, c = !1, m());
    }, w.onMouseleave = () => {
      r = !1, v();
    }), w;
  });
  K(a, (w) => {
    var x;
    w && (e.openOnHover && !r && (!d.value || !s) || d.value && !s && (!e.openOnHover || !r)) && !((x = l.value) != null && x.contains(document.activeElement)) && (t.value = !1);
  }), K(t, (w) => {
    w || setTimeout(() => {
      b.value = void 0;
    });
  }, {
    flush: "post"
  });
  const A = Ta();
  $e(() => {
    A.value && we(() => {
      o.value = A.el;
    });
  });
  const _ = Ta(), V = y(() => e.target === "cursor" && b.value ? b.value : _.value ? _.el : Ju(e.target, i) || o.value), P = y(() => Array.isArray(V.value) ? void 0 : V.value);
  let B;
  return K(() => !!e.activator, (w) => {
    w && xe ? (B = ui(), B.run(() => {
      Wm(e, i, {
        activatorEl: o,
        activatorEvents: g
      });
    })) : B && B.stop();
  }, {
    flush: "post",
    immediate: !0
  }), tt(() => {
    B == null || B.stop();
  }), {
    activatorEl: o,
    activatorRef: A,
    target: V,
    targetEl: P,
    targetRef: _,
    activatorEvents: g,
    contentEvents: S,
    scrimEvents: k
  };
}
function Wm(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  K(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const d = r(c);
      d && o(d);
    }
    s && we(() => i());
  }, {
    immediate: !0
  }), K(() => e.activatorProps, () => {
    i();
  }), tt(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && rd(s, N(l.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && ud(s, N(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Ju(s, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function Ju(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let i = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function Qu() {
  if (!xe) return G(!1);
  const {
    ssr: e
  } = yt();
  if (e) {
    const n = G(!1);
    return at(() => {
      n.value = !0;
    }), n;
  } else
    return G(!0);
}
const Oi = D({
  eager: Boolean
}, "lazy");
function Ri(e, n) {
  const t = G(!1), a = y(() => t.value || e.eager || n.value);
  K(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function Cn() {
  const n = Ee("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const er = Symbol.for("vuetify:stack"), Wn = mt([]);
function jm(e, n, t) {
  const a = Ee("useStack"), l = !t, i = ye(er, void 0), o = mt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ae(er, o);
  const r = G(+n.value);
  rt(e, () => {
    var f;
    const d = (f = Wn.at(-1)) == null ? void 0 : f[1];
    r.value = d ? d + 10 : +n.value, l && Wn.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), tt(() => {
      if (l) {
        const m = _e(Wn).findIndex((v) => v[0] === a.uid);
        Wn.splice(m, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = G(!0);
  l && $e(() => {
    var f;
    const d = ((f = Wn.at(-1)) == null ? void 0 : f[0]) === a.uid;
    setTimeout(() => s.value = d);
  });
  const c = y(() => !o.activeChildren.size);
  return {
    globalTop: si(s),
    localTop: c,
    stackStyles: y(() => ({
      zIndex: r.value
    }))
  };
}
function Ym(e) {
  return {
    teleportTarget: y(() => {
      const t = e();
      if (t === !0 || !xe) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        Oa(`Unable to locate target ${t}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Gm() {
  return !0;
}
function es(e, n, t) {
  if (!e || ts(e, t) === !1) return !1;
  const a = Hr(n);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ts(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Gm)(e);
}
function Um(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  e.shadowTarget = e.target, n._clickOutside.lastMousedownWasOutside && es(e, n, t) && setTimeout(() => {
    ts(e, t) && a && a(e);
  }, 0);
}
function tr(e, n) {
  const t = Hr(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const ns = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => Um(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = es(l, e, n);
    };
    tr(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  beforeUnmount(e, n) {
    e._clickOutside && (tr(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function Km(e) {
  const {
    modelValue: n,
    color: t,
    ...a
  } = e;
  return u(Ht, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", N({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const fa = D({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...zm(),
  ...ee(),
  ...Ne(),
  ...Oi(),
  ...Bm(),
  ...Fm(),
  ...ge(),
  ...Ct()
}, "VOverlay"), It = O()({
  name: "VOverlay",
  directives: {
    ClickOutside: ns
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...fa()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const i = Ee("VOverlay"), o = j(), r = j(), s = j(), c = ae(e, "modelValue"), d = y({
      get: () => c.value,
      set: (H) => {
        H && e.disabled || (c.value = H);
      }
    }), {
      themeClasses: f
    } = ke(e), {
      rtlClasses: m,
      isRtl: v
    } = We(), {
      hasContent: b,
      onAfterLeave: h
    } = Ri(e, d), g = Ve(y(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: S,
      localTop: k,
      stackStyles: A
    } = jm(d, M(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: _,
      activatorRef: V,
      target: P,
      targetEl: B,
      targetRef: w,
      activatorEvents: x,
      contentEvents: T,
      scrimEvents: C
    } = Hm(e, {
      isActive: d,
      isTop: k,
      contentEl: s
    }), {
      teleportTarget: I
    } = Ym(() => {
      var ie, he, Ce;
      const H = e.attach || e.contained;
      if (H) return H;
      const ne = ((ie = _ == null ? void 0 : _.value) == null ? void 0 : ie.getRootNode()) || ((Ce = (he = i.proxy) == null ? void 0 : he.$el) == null ? void 0 : Ce.getRootNode());
      return ne instanceof ShadowRoot ? ne : !1;
    }), {
      dimensionStyles: p
    } = ze(e), F = Qu(), {
      scopeId: z
    } = Cn();
    K(() => e.disabled, (H) => {
      H && (d.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: Z
    } = Dm(e, {
      isRtl: v,
      contentEl: s,
      target: P,
      isActive: d
    });
    Lm(e, {
      root: o,
      contentEl: s,
      targetEl: B,
      isActive: d,
      updateLocation: Z
    });
    function J(H) {
      l("click:outside", H), e.persistent ? oe() : d.value = !1;
    }
    function L(H) {
      return d.value && S.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || H.target === r.value || H instanceof MouseEvent && H.shadowTarget === r.value);
    }
    xe && K(d, (H) => {
      H ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
    }, {
      immediate: !0
    }), nt(() => {
      xe && window.removeEventListener("keydown", $);
    });
    function $(H) {
      var ne, ie;
      H.key === "Escape" && S.value && (e.persistent ? oe() : (d.value = !1, (ne = s.value) != null && ne.contains(document.activeElement) && ((ie = _.value) == null || ie.focus())));
    }
    const E = mu();
    rt(() => e.closeOnBack, () => {
      Tf(E, (H) => {
        S.value && d.value ? (H(!1), e.persistent ? oe() : d.value = !1) : H();
      });
    });
    const U = j();
    K(() => d.value && (e.absolute || e.contained) && I.value == null, (H) => {
      if (H) {
        const ne = ki(o.value);
        ne && ne !== document.scrollingElement && (U.value = ne.scrollTop);
      }
    });
    function oe() {
      e.noClickAnimation || s.value && en(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Kn
      });
    }
    function te() {
      l("afterEnter");
    }
    function se() {
      h(), l("afterLeave");
    }
    return R(() => {
      var H;
      return u(le, null, [(H = t.activator) == null ? void 0 : H.call(t, {
        isActive: d.value,
        targetRef: w,
        props: N({
          ref: V
        }, x.value, e.activatorProps)
      }), F.value && b.value && u(Rc, {
        disabled: !I.value,
        to: I.value
      }, {
        default: () => [u("div", N({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": d.value,
            "v-overlay--contained": e.contained
          }, f.value, m.value, e.class],
          style: [A.value, {
            "--v-overlay-opacity": e.opacity,
            top: X(U.value)
          }, e.style],
          ref: o
        }, z, a), [u(Km, N({
          color: g,
          modelValue: d.value && !!e.scrim,
          ref: r
        }, C.value), null), u(et, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: P.value,
          onAfterEnter: te,
          onAfterLeave: se
        }, {
          default: () => {
            var ne;
            return [De(u("div", N({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [p.value, W.value]
            }, T.value, e.contentProps), [(ne = t.default) == null ? void 0 : ne.call(t, {
              isActive: d
            })]), [[wt, d.value], [ct("click-outside"), {
              handler: J,
              closeConditional: L,
              include: () => [_.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: _,
      scrimEl: r,
      target: P,
      animateClick: oe,
      contentEl: s,
      globalTop: S,
      localTop: k,
      updateLocation: Z
    };
  }
}), Vl = Symbol("Forwarded refs");
function Pl(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function St(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[Vl] = t, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of t)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of t) {
          if (!s.value) continue;
          const c = Pl(s.value, i) ?? ("_" in s.value ? Pl((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const s of t) {
          const c = s.value && s.value[Vl];
          if (!c) continue;
          const d = c.slice();
          for (; d.length; ) {
            const f = d.shift(), m = Pl(f.value, i);
            if (m) return m;
            const v = f.value && f.value[Vl];
            v && d.push(...v);
          }
        }
      }
    }
  });
}
const as = D({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Re(fa({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Ga
    }
  }), ["absolute"])
}, "VMenu"), $n = O()({
  name: "VMenu",
  props: as(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), {
      scopeId: l
    } = Cn(), {
      isRtl: i
    } = We(), o = Ue(), r = y(() => e.id || `v-menu-${o}`), s = j(), c = ye(Gl, null), d = G(/* @__PURE__ */ new Set());
    Ae(Gl, {
      register() {
        d.value.add(o);
      },
      unregister() {
        d.value.delete(o);
      },
      closeParents(g) {
        setTimeout(() => {
          var S;
          !d.value.size && !e.persistent && (g == null || (S = s.value) != null && S.contentEl && !id(g, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), nt(() => c == null ? void 0 : c.unregister()), hr(() => a.value = !1);
    async function f(g) {
      var A, _, V;
      const S = g.relatedTarget, k = g.target;
      await we(), a.value && S !== k && ((A = s.value) != null && A.contentEl) && // We're the topmost menu
      ((_ = s.value) != null && _.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(k) && // It isn't inside the menu body
      !s.value.contentEl.contains(k) && ((V = Un(s.value.contentEl)[0]) == null || V.focus());
    }
    K(a, (g) => {
      g ? (c == null || c.register(), document.addEventListener("focusin", f, {
        once: !0
      })) : (c == null || c.unregister(), document.removeEventListener("focusin", f));
    });
    function m(g) {
      c == null || c.closeParents(g);
    }
    function v(g) {
      var S, k, A, _, V;
      if (!e.disabled)
        if (g.key === "Tab" || g.key === "Enter" && !e.closeOnContentClick) {
          if (g.key === "Enter" && (g.target instanceof HTMLTextAreaElement || g.target instanceof HTMLInputElement && g.target.closest("form"))) return;
          g.key === "Enter" && g.preventDefault(), Ir(Un((S = s.value) == null ? void 0 : S.contentEl, !1), g.shiftKey ? "prev" : "next", (B) => B.tabIndex >= 0) || (a.value = !1, (A = (k = s.value) == null ? void 0 : k.activatorEl) == null || A.focus());
        } else e.submenu && g.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (V = (_ = s.value) == null ? void 0 : _.activatorEl) == null || V.focus());
    }
    function b(g) {
      var k;
      if (e.disabled) return;
      const S = (k = s.value) == null ? void 0 : k.contentEl;
      S && a.value ? g.key === "ArrowDown" ? (g.preventDefault(), g.stopImmediatePropagation(), nn(S, "next")) : g.key === "ArrowUp" ? (g.preventDefault(), g.stopImmediatePropagation(), nn(S, "prev")) : e.submenu && (g.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : g.key === (i.value ? "ArrowLeft" : "ArrowRight") && (g.preventDefault(), nn(S, "first"))) : (e.submenu ? g.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(g.key)) && (a.value = !0, g.preventDefault(), setTimeout(() => setTimeout(() => b(g))));
    }
    const h = y(() => N({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": r.value,
      onKeydown: b
    }, e.activatorProps));
    return R(() => {
      const g = It.filterProps(e);
      return u(It, N({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, g, {
        modelValue: a.value,
        "onUpdate:modelValue": (S) => a.value = S,
        absolute: !0,
        activatorProps: h.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": m,
        onKeydown: v
      }, l), {
        activator: t.activator,
        default: function() {
          for (var S = arguments.length, k = new Array(S), A = 0; A < S; A++)
            k[A] = arguments[A];
          return u(me, {
            root: "VMenu"
          }, {
            default: () => {
              var _;
              return [(_ = t.default) == null ? void 0 : _.call(t, ...k)];
            }
          });
        }
      });
    }), St({
      id: r,
      ΨopenChildren: d
    }, s);
  }
}), qm = D({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ee(),
  ...Ct({
    transition: {
      component: _i
    }
  })
}, "VCounter"), tl = O()({
  name: "VCounter",
  functional: !0,
  props: qm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return R(() => u(et, {
      transition: e.transition
    }, {
      default: () => [De(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[wt, e.active]])]
    })), {};
  }
}), Xm = D({
  floating: Boolean,
  ...ee()
}, "VFieldLabel"), jn = O()({
  name: "VFieldLabel",
  props: Xm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(Nn, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), Zm = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ma = D({
  appendInnerIcon: re,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: re,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: re,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Zm.includes(e)
  },
  "onClick:clear": Ge(),
  "onClick:appendInner": Ge(),
  "onClick:prependInner": Ge(),
  ...ee(),
  ...Xa(),
  ...Te(),
  ...ge()
}, "VField"), Hn = O()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...da(),
    ...ma()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: i
    } = ke(e), {
      loaderClasses: o
    } = ra(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: d
    } = Ot(e), {
      InputIcon: f
    } = _u(e), {
      roundedClasses: m
    } = Me(e), {
      rtlClasses: v
    } = We(), b = y(() => e.dirty || e.active), h = y(() => !e.singleLine && !!(e.label || l.label)), g = Ue(), S = y(() => e.id || `input-${g}`), k = y(() => `${S.value}-messages`), A = j(), _ = j(), V = j(), P = y(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: B,
      backgroundColorStyles: w
    } = Ve(M(e, "bgColor")), {
      textColorClasses: x,
      textColorStyles: T
    } = qe(y(() => e.error || e.disabled ? void 0 : b.value && s.value ? e.color : e.baseColor));
    K(b, (F) => {
      if (h.value) {
        const z = A.value.$el, W = _.value.$el;
        requestAnimationFrame(() => {
          const Z = hi(z), J = W.getBoundingClientRect(), L = J.x - Z.x, $ = J.y - Z.y - (Z.height / 2 - J.height / 2), E = J.width / 0.75, U = Math.abs(E - Z.width) > 1 ? {
            maxWidth: X(E)
          } : void 0, oe = getComputedStyle(z), te = getComputedStyle(W), se = parseFloat(oe.transitionDuration) * 1e3 || 150, H = parseFloat(te.getPropertyValue("--v-field-label-scale")), ne = te.getPropertyValue("color");
          z.style.visibility = "visible", W.style.visibility = "hidden", en(z, {
            transform: `translate(${L}px, ${$}px) scale(${H})`,
            color: ne,
            ...U
          }, {
            duration: se,
            easing: Kn,
            direction: F ? "normal" : "reverse"
          }).finished.then(() => {
            z.style.removeProperty("visibility"), W.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const C = y(() => ({
      isActive: b,
      isFocused: s,
      controlRef: V,
      blur: d,
      focus: c
    }));
    function I(F) {
      F.target !== document.activeElement && F.preventDefault();
    }
    function p(F) {
      var z;
      F.key !== "Enter" && F.key !== " " || (F.preventDefault(), F.stopPropagation(), (z = e["onClick:clear"]) == null || z.call(e, new MouseEvent("click")));
    }
    return R(() => {
      var L, $, E;
      const F = e.variant === "outlined", z = !!(l["prepend-inner"] || e.prependInnerIcon), W = !!(e.clearable || l.clear), Z = !!(l["append-inner"] || e.appendInnerIcon || W), J = () => l.label ? l.label({
        ...C.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return u("div", N({
        class: ["v-field", {
          "v-field--active": b.value,
          "v-field--appended": Z,
          "v-field--center-affix": e.centerAffix ?? !P.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": z,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !J(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, B.value, r.value, o.value, m.value, v.value, e.class],
        style: [w.value, e.style],
        onClick: I
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(ua, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), z && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (L = l["prepend-inner"]) == null ? void 0 : L.call(l, C.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && u(jn, {
        key: "floating-label",
        ref: _,
        class: [x.value],
        floating: !0,
        for: S.value,
        style: T.value
      }, {
        default: () => [J()]
      }), u(jn, {
        ref: A,
        for: S.value
      }, {
        default: () => [J()]
      }), ($ = l.default) == null ? void 0 : $.call(l, {
        ...C.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: d
      })]), W && u(Ai, {
        key: "clear"
      }, {
        default: () => [De(u("div", {
          class: "v-field__clearable",
          onMousedown: (U) => {
            U.preventDefault(), U.stopPropagation();
          }
        }, [u(me, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...C.value,
            props: {
              onKeydown: p,
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          }) : u(f, {
            name: "clear",
            onKeydown: p,
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[wt, e.dirty]])]
      }), Z && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(E = l["append-inner"]) == null ? void 0 : E.call(l, C.value), e.appendInnerIcon && u(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", x.value],
        style: T.value
      }, [F && u(le, null, [u("div", {
        class: "v-field__outline__start"
      }, null), h.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(jn, {
        ref: _,
        floating: !0,
        for: S.value
      }, {
        default: () => [J()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), P.value && h.value && u(jn, {
        ref: _,
        floating: !0,
        for: S.value
      }, {
        default: () => [J()]
      })])]);
    }), {
      controlRef: V
    };
  }
});
function Ni(e) {
  const n = Object.keys(Hn.props).filter((t) => !Na(t) && t !== "class" && t !== "style");
  return fi(e, n);
}
const Jm = ["color", "file", "time", "date", "datetime-local", "week", "month"], nl = D({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Rt(),
  ...ma()
}, "VTextField"), $t = O()({
  name: "VTextField",
  directives: {
    Intersect: oa
  },
  inheritAttrs: !1,
  props: nl(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = ae(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Ot(e), c = y(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = y(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = y(() => ["plain", "underlined"].includes(e.variant));
    function m(P, B) {
      var w, x;
      !e.autofocus || !P || (x = (w = B[0].target) == null ? void 0 : w.focus) == null || x.call(w);
    }
    const v = j(), b = j(), h = j(), g = y(() => Jm.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function S() {
      var P;
      h.value !== document.activeElement && ((P = h.value) == null || P.focus()), o.value || r();
    }
    function k(P) {
      a("mousedown:control", P), P.target !== h.value && (S(), P.preventDefault());
    }
    function A(P) {
      S(), a("click:control", P);
    }
    function _(P) {
      P.stopPropagation(), S(), we(() => {
        i.value = null, gi(e["onClick:clear"], P);
      });
    }
    function V(P) {
      var w;
      const B = P.target;
      if (i.value = B.value, (w = e.modelModifiers) != null && w.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const x = [B.selectionStart, B.selectionEnd];
        we(() => {
          B.selectionStart = x[0], B.selectionEnd = x[1];
        });
      }
    }
    return R(() => {
      const P = !!(l.counter || e.counter !== !1 && e.counter != null), B = !!(P || l.details), [w, x] = Yt(t), {
        modelValue: T,
        ...C
      } = Xe.filterProps(e), I = Ni(e);
      return u(Xe, N({
        ref: v,
        modelValue: i.value,
        "onUpdate:modelValue": (p) => i.value = p,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, w, C, {
        centerAffix: !f.value,
        focused: o.value
      }), {
        ...l,
        default: (p) => {
          let {
            id: F,
            isDisabled: z,
            isDirty: W,
            isReadonly: Z,
            isValid: J
          } = p;
          return u(Hn, N({
            ref: b,
            onMousedown: k,
            onClick: A,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, I, {
            id: F.value,
            active: g.value || W.value,
            dirty: W.value || e.dirty,
            disabled: z.value,
            focused: o.value,
            error: J.value === !1
          }), {
            ...l,
            default: (L) => {
              let {
                props: {
                  class: $,
                  ...E
                }
              } = L;
              const U = De(u("input", N({
                ref: h,
                value: i.value,
                onInput: V,
                autofocus: e.autofocus,
                readonly: Z.value,
                disabled: z.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: s
              }, E, x), null), [[ct("intersect"), {
                handler: m
              }, null, {
                once: !0
              }]]);
              return u(le, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: $,
                "data-no-activator": ""
              }, [l.default(), U]) : Nc(U, {
                class: $
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: B ? (p) => {
          var F;
          return u(le, null, [(F = l.details) == null ? void 0 : F.call(l, p), P && u(le, null, [u("span", null, null), u(tl, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), St({}, v, b, h);
  }
}), Qm = D({
  renderless: Boolean,
  ...ee()
}, "VVirtualScrollItem"), ls = O()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Qm(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      resizeRef: i,
      contentRect: o
    } = xt(void 0, "border");
    K(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), R(() => {
      var r, s;
      return e.renderless ? u(le, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : u("div", N({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), eg = -1, tg = 1, Il = 100, is = D({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function os(e, n) {
  const t = yt(), a = G(0);
  $e(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = G(0), i = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (a.value || 16)
  ) || 1), o = G(0), r = G(0), s = j(), c = j();
  let d = 0;
  const {
    resizeRef: f,
    contentRect: m
  } = xt();
  $e(() => {
    f.value = s.value;
  });
  const v = y(() => {
    var L;
    return s.value === document.documentElement ? t.height.value : ((L = m.value) == null ? void 0 : L.height) || parseInt(e.height) || 0;
  }), b = y(() => !!(s.value && c.value && v.value && a.value));
  let h = Array.from({
    length: n.value.length
  }), g = Array.from({
    length: n.value.length
  });
  const S = G(0);
  let k = -1;
  function A(L) {
    return h[L] || a.value;
  }
  const _ = ed(() => {
    const L = performance.now();
    g[0] = 0;
    const $ = n.value.length;
    for (let E = 1; E <= $ - 1; E++)
      g[E] = (g[E - 1] || 0) + A(E - 1);
    S.value = Math.max(S.value, performance.now() - L);
  }, S), V = K(b, (L) => {
    L && (V(), d = c.value.offsetTop, _.immediate(), z(), ~k && we(() => {
      xe && window.requestAnimationFrame(() => {
        Z(k), k = -1;
      });
    }));
  });
  tt(() => {
    _.clear();
  });
  function P(L, $) {
    const E = h[L], U = a.value;
    a.value = U ? Math.min(a.value, $) : $, (E !== $ || U !== a.value) && (h[L] = $, _());
  }
  function B(L) {
    return L = Le(L, 0, n.value.length - 1), g[L] || 0;
  }
  function w(L) {
    return ng(g, L);
  }
  let x = 0, T = 0, C = 0;
  K(v, (L, $) => {
    $ && (z(), L < $ && requestAnimationFrame(() => {
      T = 0, z();
    }));
  });
  function I() {
    if (!s.value || !c.value) return;
    const L = s.value.scrollTop, $ = performance.now();
    $ - C > 500 ? (T = Math.sign(L - x), d = c.value.offsetTop) : T = L - x, x = L, C = $, z();
  }
  function p() {
    !s.value || !c.value || (T = 0, C = 0, z());
  }
  let F = -1;
  function z() {
    cancelAnimationFrame(F), F = requestAnimationFrame(W);
  }
  function W() {
    if (!s.value || !v.value) return;
    const L = x - d, $ = Math.sign(T), E = Math.max(0, L - Il), U = Le(w(E), 0, n.value.length), oe = L + v.value + Il, te = Le(w(oe) + 1, U + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      ($ !== eg || U < l.value) && ($ !== tg || te > i.value)
    ) {
      const se = B(l.value) - B(U), H = B(te) - B(i.value);
      Math.max(se, H) > Il ? (l.value = U, i.value = te) : (U <= 0 && (l.value = U), te >= n.value.length && (i.value = te));
    }
    o.value = B(l.value), r.value = B(n.value.length) - B(i.value);
  }
  function Z(L) {
    const $ = B(L);
    !s.value || L && !$ ? k = L : s.value.scrollTop = $;
  }
  const J = y(() => n.value.slice(l.value, i.value).map((L, $) => ({
    raw: L,
    index: $ + l.value
  })));
  return K(n, () => {
    h = Array.from({
      length: n.value.length
    }), g = Array.from({
      length: n.value.length
    }), _.immediate(), z();
  }, {
    deep: !0
  }), {
    calculateVisibleItems: z,
    containerRef: s,
    markerRef: c,
    computedItems: J,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: Z,
    handleScroll: I,
    handleScrollend: p,
    handleItemResize: P
  };
}
function ng(e, n) {
  let t = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[t] < n)
    return t;
  for (; a <= t; )
    if (l = a + t >> 1, i = e[l], i > n)
      t = l - 1;
    else if (i < n)
      o = l, a = l + 1;
    else return i === n ? l : a;
  return o;
}
const ag = D({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...is(),
  ...ee(),
  ...Ne()
}, "VVirtualScroll"), al = O()({
  name: "VVirtualScroll",
  props: ag(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ee("VVirtualScroll"), {
      dimensionStyles: l
    } = ze(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: s,
      handleScrollend: c,
      handleItemResize: d,
      scrollToIndex: f,
      paddingTop: m,
      paddingBottom: v,
      computedItems: b
    } = os(e, M(e, "items"));
    return rt(() => e.renderless, () => {
      function h() {
        var k, A;
        const S = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[S]("scroll", s, {
          passive: !0
        }), document[S]("scrollend", c)) : ((k = o.value) == null || k[S]("scroll", s, {
          passive: !0
        }), (A = o.value) == null || A[S]("scrollend", c));
      }
      at(() => {
        o.value = ki(a.vnode.el, !0), h(!0);
      }), tt(h);
    }), R(() => {
      const h = b.value.map((g) => u(ls, {
        key: g.index,
        renderless: e.renderless,
        "onUpdate:height": (S) => d(g.index, S)
      }, {
        default: (S) => {
          var k;
          return (k = t.default) == null ? void 0 : k.call(t, {
            item: g.raw,
            index: g.index,
            ...S
          });
        }
      }));
      return e.renderless ? u(le, null, [u("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: X(m.value)
        }
      }, null), h, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: X(v.value)
        }
      }, null)]) : u("div", {
        ref: o,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: s,
        onScrollend: c,
        style: [l.value, e.style]
      }, [u("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: X(m.value),
          paddingBottom: X(v.value)
        }
      }, [h])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: f
    };
  }
});
function zi(e, n) {
  const t = G(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), t.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (t.value) {
        const s = K(t, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var d, f;
    if (r.key === "Tab" && ((d = n.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (f = e.value) == null ? void 0 : f.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const m = s.getBoundingClientRect().top;
      for (const v of c)
        if (v.getBoundingClientRect().top >= m) {
          v.focus();
          break;
        }
    } else {
      const m = s.getBoundingClientRect().bottom;
      for (const v of [...c].reverse())
        if (v.getBoundingClientRect().bottom <= m) {
          v.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: o
  };
}
const Hi = D({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: re,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...Uu({
    itemChildren: !1
  })
}, "Select"), lg = D({
  ...Hi(),
  ...Re(nl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ct({
    transition: {
      component: Ga
    }
  })
}, "VSelect"), Wi = O()({
  name: "VSelect",
  props: lg(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Fe(), l = j(), i = j(), o = j(), r = ae(e, "menu"), s = y({
      get: () => r.value,
      set: (L) => {
        var $;
        r.value && !L && (($ = i.value) != null && $.ΨopenChildren.size) || (r.value = L);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: f
    } = $i(e), m = ae(e, "modelValue", [], (L) => d(L === null ? [null] : Be(L)), (L) => {
      const $ = f(L);
      return e.multiple ? $ : $[0] ?? null;
    }), v = y(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), b = Qa(), h = y(() => m.value.map((L) => L.value)), g = G(!1), S = y(() => s.value ? e.closeText : e.openText);
    let k = "", A;
    const _ = y(() => e.hideSelected ? c.value.filter((L) => !m.value.some(($) => e.valueComparator($, L))) : c.value), V = y(() => e.hideNoData && !_.value.length || e.readonly || (b == null ? void 0 : b.isReadonly.value)), P = y(() => {
      var L;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((L = e.menuProps) == null ? void 0 : L.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), B = j(), w = zi(B, l);
    function x(L) {
      e.openOnClear && (s.value = !0);
    }
    function T() {
      V.value || (s.value = !s.value);
    }
    function C(L) {
      Ba(L) && I(L);
    }
    function I(L) {
      var oe, te;
      if (!L.key || e.readonly || b != null && b.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(L.key) && L.preventDefault(), ["Enter", "ArrowDown", " "].includes(L.key) && (s.value = !0), ["Escape", "Tab"].includes(L.key) && (s.value = !1), L.key === "Home" ? (oe = B.value) == null || oe.focus("first") : L.key === "End" && ((te = B.value) == null || te.focus("last"));
      const $ = 1e3;
      if (e.multiple || !Ba(L)) return;
      const E = performance.now();
      E - A > $ && (k = ""), k += L.key.toLowerCase(), A = E;
      const U = c.value.find((se) => se.title.toLowerCase().startsWith(k));
      if (U !== void 0) {
        m.value = [U];
        const se = _.value.indexOf(U);
        xe && window.requestAnimationFrame(() => {
          var H;
          se >= 0 && ((H = o.value) == null || H.scrollToIndex(se));
        });
      }
    }
    function p(L) {
      let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!L.props.disabled)
        if (e.multiple) {
          const E = m.value.findIndex((oe) => e.valueComparator(oe.value, L.value)), U = $ ?? !~E;
          if (~E) {
            const oe = U ? [...m.value, L] : [...m.value];
            oe.splice(E, 1), m.value = oe;
          } else U && (m.value = [...m.value, L]);
        } else {
          const E = $ !== !1;
          m.value = E ? [L] : [], we(() => {
            s.value = !1;
          });
        }
    }
    function F(L) {
      var $;
      ($ = B.value) != null && $.$el.contains(L.relatedTarget) || (s.value = !1);
    }
    function z() {
      var L;
      e.eager && ((L = o.value) == null || L.calculateVisibleItems());
    }
    function W() {
      var L;
      g.value && ((L = l.value) == null || L.focus());
    }
    function Z(L) {
      g.value = !0;
    }
    function J(L) {
      if (L == null) m.value = [];
      else if (Dn(l.value, ":autofill") || Dn(l.value, ":-webkit-autofill")) {
        const $ = c.value.find((E) => E.title === L);
        $ && p($);
      } else l.value && (l.value.value = "");
    }
    return K(s, () => {
      if (!e.hideSelected && s.value && m.value.length) {
        const L = _.value.findIndex(($) => m.value.some((E) => e.valueComparator(E.value, $.value)));
        xe && window.requestAnimationFrame(() => {
          var $;
          L >= 0 && (($ = o.value) == null || $.scrollToIndex(L));
        });
      }
    }), K(() => e.items, (L, $) => {
      s.value || g.value && !$.length && L.length && (s.value = !0);
    }), R(() => {
      const L = !!(e.chips || t.chip), $ = !!(!e.hideNoData || _.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), E = m.value.length > 0, U = $t.filterProps(e), oe = E || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u($t, N({
        ref: l
      }, U, {
        modelValue: m.value.map((te) => te.props.value).join(", "),
        "onUpdate:modelValue": J,
        focused: g.value,
        "onUpdate:focused": (te) => g.value = te,
        validationValue: m.externalValue,
        counterValue: v.value,
        dirty: E,
        class: ["v-select", {
          "v-select--active-menu": s.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": m.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: oe,
        "onClick:clear": x,
        "onMousedown:control": T,
        onBlur: F,
        onKeydown: I,
        "aria-label": a(S.value),
        title: a(S.value)
      }), {
        ...t,
        default: () => u(le, null, [u($n, N({
          ref: i,
          modelValue: s.value,
          "onUpdate:modelValue": (te) => s.value = te,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: V.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: z,
          onAfterLeave: W
        }, P.value), {
          default: () => [$ && u(el, N({
            ref: B,
            selected: h.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (te) => te.preventDefault(),
            onKeydown: C,
            onFocusin: Z,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, w, e.listProps), {
            default: () => {
              var te, se, H;
              return [(te = t["prepend-item"]) == null ? void 0 : te.call(t), !_.value.length && !e.hideNoData && (((se = t["no-data"]) == null ? void 0 : se.call(t)) ?? u(Mt, {
                title: a(e.noDataText)
              }, null)), u(al, {
                ref: o,
                renderless: !0,
                items: _.value
              }, {
                default: (ne) => {
                  var fe;
                  let {
                    item: ie,
                    index: he,
                    itemRef: Ce
                  } = ne;
                  const q = N(ie.props, {
                    ref: Ce,
                    key: he,
                    onClick: () => p(ie, null)
                  });
                  return ((fe = t.item) == null ? void 0 : fe.call(t, {
                    item: ie,
                    index: he,
                    props: q
                  })) ?? u(Mt, N(q, {
                    role: "option"
                  }), {
                    prepend: (Y) => {
                      let {
                        isSelected: Q
                      } = Y;
                      return u(le, null, [e.multiple && !e.hideSelected ? u(Et, {
                        key: ie.value,
                        modelValue: Q,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ie.props.prependAvatar && u(ht, {
                        image: ie.props.prependAvatar
                      }, null), ie.props.prependIcon && u(be, {
                        icon: ie.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (H = t["append-item"]) == null ? void 0 : H.call(t)];
            }
          })]
        }), m.value.map((te, se) => {
          function H(Ce) {
            Ce.stopPropagation(), Ce.preventDefault(), p(te, !1);
          }
          const ne = {
            "onClick:close": H,
            onKeydown(Ce) {
              Ce.key !== "Enter" && Ce.key !== " " || (Ce.preventDefault(), Ce.stopPropagation(), H(Ce));
            },
            onMousedown(Ce) {
              Ce.preventDefault(), Ce.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, ie = L ? !!t.chip : !!t.selection, he = ie ? za(L ? t.chip({
            item: te,
            index: se,
            props: ne
          }) : t.selection({
            item: te,
            index: se
          })) : void 0;
          if (!(ie && !he))
            return u("div", {
              key: te.value,
              class: "v-select__selection"
            }, [L ? t.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: te.title
                }
              }
            }, {
              default: () => [he]
            }) : u(zn, N({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: te.title,
              disabled: te.props.disabled
            }, ne), null) : he ?? u("span", {
              class: "v-select__selection-text"
            }, [te.title, e.multiple && se < m.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [Je(",")])])]);
        })]),
        "append-inner": function() {
          var ne;
          for (var te = arguments.length, se = new Array(te), H = 0; H < te; H++)
            se[H] = arguments[H];
          return u(le, null, [(ne = t["append-inner"]) == null ? void 0 : ne.call(t, ...se), e.menuIcon ? u(be, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), St({
      isFocused: g,
      menu: s,
      select: p
    }, l);
  }
}), ig = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), ga = D({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function og(e, n, t) {
  var r;
  const a = [], l = (t == null ? void 0 : t.default) ?? ig, i = t != null && t.filterKeys ? Be(t.filterKeys) : !1, o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let s = 0; s < e.length; s++) {
    const [c, d = c] = Be(e[s]), f = {}, m = {};
    let v = -1;
    if ((n || o > 0) && !(t != null && t.noFilter)) {
      if (typeof c == "object") {
        const g = i || Object.keys(d);
        for (const S of g) {
          const k = He(d, S), A = (r = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : r[S];
          if (v = A ? A(k, n, c) : l(k, n, c), v !== -1 && v !== !1)
            A ? f[S] = v : m[S] = v;
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        v = l(c, n, c), v !== -1 && v !== !1 && (m.title = v);
      const b = Object.keys(m).length, h = Object.keys(f).length;
      if (!b && !h || (t == null ? void 0 : t.filterMode) === "union" && h !== o && !b || (t == null ? void 0 : t.filterMode) === "intersection" && (h !== o || !b)) continue;
    }
    a.push({
      index: s,
      matches: {
        ...m,
        ...f
      }
    });
  }
  return a;
}
function ha(e, n, t, a) {
  const l = j([]), i = j(/* @__PURE__ */ new Map()), o = y(() => a != null && a.transform ? ot(n).map((s) => [s, a.transform(s)]) : ot(n));
  $e(() => {
    const s = typeof t == "function" ? t() : ot(t), c = typeof s != "string" && typeof s != "number" ? "" : String(s), d = og(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...ot(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), f = ot(n), m = [], v = /* @__PURE__ */ new Map();
    d.forEach((b) => {
      let {
        index: h,
        matches: g
      } = b;
      const S = f[h];
      m.push(S), v.set(S.value, g);
    }), l.value = m, i.value = v;
  });
  function r(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function rg(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? u(le, null, [u("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, n)]), u("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(n, t)]), u("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(n + t)])]) : e;
}
const ug = D({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...ga({
    filterKeys: ["title"]
  }),
  ...Hi(),
  ...Re(nl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ct({
    transition: !1
  })
}, "VAutocomplete"), sg = O()({
  name: "VAutocomplete",
  props: ug(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Fe(), l = j(), i = G(!1), o = G(!0), r = G(!1), s = j(), c = j(), d = ae(e, "menu"), f = y({
      get: () => d.value,
      set: (q) => {
        var fe;
        d.value && !q && ((fe = s.value) != null && fe.ΨopenChildren.size) || (d.value = q);
      }
    }), m = G(-1), v = y(() => {
      var q;
      return (q = l.value) == null ? void 0 : q.color;
    }), b = y(() => f.value ? e.closeText : e.openText), {
      items: h,
      transformIn: g,
      transformOut: S
    } = $i(e), {
      textColorClasses: k,
      textColorStyles: A
    } = qe(v), _ = ae(e, "search", ""), V = ae(e, "modelValue", [], (q) => g(q === null ? [null] : Be(q)), (q) => {
      const fe = S(q);
      return e.multiple ? fe : fe[0] ?? null;
    }), P = y(() => typeof e.counterValue == "function" ? e.counterValue(V.value) : typeof e.counterValue == "number" ? e.counterValue : V.value.length), B = Qa(), {
      filteredItems: w,
      getMatches: x
    } = ha(e, h, () => o.value ? "" : _.value), T = y(() => e.hideSelected ? w.value.filter((q) => !V.value.some((fe) => fe.value === q.value)) : w.value), C = y(() => !!(e.chips || t.chip)), I = y(() => C.value || !!t.selection), p = y(() => V.value.map((q) => q.props.value)), F = y(() => {
      var fe;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && _.value === ((fe = T.value[0]) == null ? void 0 : fe.title)) && T.value.length > 0 && !o.value && !r.value;
    }), z = y(() => e.hideNoData && !T.value.length || e.readonly || (B == null ? void 0 : B.isReadonly.value)), W = j(), Z = zi(W, l);
    function J(q) {
      e.openOnClear && (f.value = !0), _.value = "";
    }
    function L() {
      z.value || (f.value = !0);
    }
    function $(q) {
      z.value || (i.value && (q.preventDefault(), q.stopPropagation()), f.value = !f.value);
    }
    function E(q) {
      var fe;
      Ba(q) && ((fe = l.value) == null || fe.focus());
    }
    function U(q) {
      var Q, ce, ue;
      if (e.readonly || B != null && B.isReadonly.value) return;
      const fe = l.value.selectionStart, Y = V.value.length;
      if ((m.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(q.key)) && q.preventDefault(), ["Enter", "ArrowDown"].includes(q.key) && (f.value = !0), ["Escape"].includes(q.key) && (f.value = !1), F.value && ["Enter", "Tab"].includes(q.key) && !V.value.some((de) => {
        let {
          value: Pe
        } = de;
        return Pe === T.value[0].value;
      }) && Ce(T.value[0]), q.key === "ArrowDown" && F.value && ((Q = W.value) == null || Q.focus("next")), ["Backspace", "Delete"].includes(q.key)) {
        if (!e.multiple && I.value && V.value.length > 0 && !_.value) return Ce(V.value[0], !1);
        if (~m.value) {
          const de = m.value;
          Ce(V.value[m.value], !1), m.value = de >= Y - 1 ? Y - 2 : de;
        } else q.key === "Backspace" && !_.value && (m.value = Y - 1);
      }
      if (e.multiple) {
        if (q.key === "ArrowLeft") {
          if (m.value < 0 && fe > 0) return;
          const de = m.value > -1 ? m.value - 1 : Y - 1;
          V.value[de] ? m.value = de : (m.value = -1, l.value.setSelectionRange((ce = _.value) == null ? void 0 : ce.length, (ue = _.value) == null ? void 0 : ue.length));
        }
        if (q.key === "ArrowRight") {
          if (m.value < 0) return;
          const de = m.value + 1;
          V.value[de] ? m.value = de : (m.value = -1, l.value.setSelectionRange(0, 0));
        }
      }
    }
    function oe(q) {
      if (Dn(l.value, ":autofill") || Dn(l.value, ":-webkit-autofill")) {
        const fe = h.value.find((Y) => Y.title === q.target.value);
        fe && Ce(fe);
      }
    }
    function te() {
      var q;
      e.eager && ((q = c.value) == null || q.calculateVisibleItems());
    }
    function se() {
      var q;
      i.value && (o.value = !0, (q = l.value) == null || q.focus());
    }
    function H(q) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function ne(q) {
      r.value = !1;
    }
    function ie(q) {
      (q == null || q === "" && !e.multiple && !I.value) && (V.value = []);
    }
    const he = G(!1);
    function Ce(q) {
      let fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!q || q.props.disabled))
        if (e.multiple) {
          const Y = V.value.findIndex((ce) => e.valueComparator(ce.value, q.value)), Q = fe ?? !~Y;
          if (~Y) {
            const ce = Q ? [...V.value, q] : [...V.value];
            ce.splice(Y, 1), V.value = ce;
          } else Q && (V.value = [...V.value, q]);
          e.clearOnSelect && (_.value = "");
        } else {
          const Y = fe !== !1;
          V.value = Y ? [q] : [], _.value = Y && !I.value ? q.title : "", we(() => {
            f.value = !1, o.value = !0;
          });
        }
    }
    return K(i, (q, fe) => {
      var Y;
      q !== fe && (q ? (he.value = !0, _.value = e.multiple || I.value ? "" : String(((Y = V.value.at(-1)) == null ? void 0 : Y.props.title) ?? ""), o.value = !0, we(() => he.value = !1)) : (!e.multiple && _.value == null && (V.value = []), f.value = !1, V.value.some((Q) => {
        let {
          title: ce
        } = Q;
        return ce === _.value;
      }) || (_.value = ""), m.value = -1));
    }), K(_, (q) => {
      !i.value || he.value || (q && (f.value = !0), o.value = !q);
    }), K(f, () => {
      if (!e.hideSelected && f.value && V.value.length) {
        const q = T.value.findIndex((fe) => V.value.some((Y) => fe.value === Y.value));
        xe && window.requestAnimationFrame(() => {
          var fe;
          q >= 0 && ((fe = c.value) == null || fe.scrollToIndex(q));
        });
      }
    }), K(() => e.items, (q, fe) => {
      f.value || i.value && !fe.length && q.length && (f.value = !0);
    }), R(() => {
      const q = !!(!e.hideNoData || T.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), fe = V.value.length > 0, Y = $t.filterProps(e);
      return u($t, N({
        ref: l
      }, Y, {
        modelValue: _.value,
        "onUpdate:modelValue": [(Q) => _.value = Q, ie],
        focused: i.value,
        "onUpdate:focused": (Q) => i.value = Q,
        validationValue: V.externalValue,
        counterValue: P.value,
        dirty: fe,
        onChange: oe,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": f.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!I.value,
          "v-autocomplete--selecting-index": m.value > -1
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: fe ? void 0 : e.placeholder,
        "onClick:clear": J,
        "onMousedown:control": L,
        onKeydown: U
      }), {
        ...t,
        default: () => u(le, null, [u($n, N({
          ref: s,
          modelValue: f.value,
          "onUpdate:modelValue": (Q) => f.value = Q,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: z.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: te,
          onAfterLeave: se
        }, e.menuProps), {
          default: () => [q && u(el, N({
            ref: W,
            selected: p.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Q) => Q.preventDefault(),
            onKeydown: E,
            onFocusin: H,
            onFocusout: ne,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, Z, e.listProps), {
            default: () => {
              var Q, ce, ue;
              return [(Q = t["prepend-item"]) == null ? void 0 : Q.call(t), !T.value.length && !e.hideNoData && (((ce = t["no-data"]) == null ? void 0 : ce.call(t)) ?? u(Mt, {
                title: a(e.noDataText)
              }, null)), u(al, {
                ref: c,
                renderless: !0,
                items: T.value
              }, {
                default: (de) => {
                  var Ze;
                  let {
                    item: Pe,
                    index: it,
                    itemRef: Ie
                  } = de;
                  const Vt = N(Pe.props, {
                    ref: Ie,
                    key: it,
                    active: F.value && it === 0 ? !0 : void 0,
                    onClick: () => Ce(Pe, null)
                  });
                  return ((Ze = t.item) == null ? void 0 : Ze.call(t, {
                    item: Pe,
                    index: it,
                    props: Vt
                  })) ?? u(Mt, N(Vt, {
                    role: "option"
                  }), {
                    prepend: (Kt) => {
                      let {
                        isSelected: qt
                      } = Kt;
                      return u(le, null, [e.multiple && !e.hideSelected ? u(Et, {
                        key: Pe.value,
                        modelValue: qt,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Pe.props.prependAvatar && u(ht, {
                        image: Pe.props.prependAvatar
                      }, null), Pe.props.prependIcon && u(be, {
                        icon: Pe.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var Kt, qt;
                      return o.value ? Pe.title : rg(Pe.title, (Kt = x(Pe)) == null ? void 0 : Kt.title, ((qt = _.value) == null ? void 0 : qt.length) ?? 0);
                    }
                  });
                }
              }), (ue = t["append-item"]) == null ? void 0 : ue.call(t)];
            }
          })]
        }), V.value.map((Q, ce) => {
          function ue(Ie) {
            Ie.stopPropagation(), Ie.preventDefault(), Ce(Q, !1);
          }
          const de = {
            "onClick:close": ue,
            onKeydown(Ie) {
              Ie.key !== "Enter" && Ie.key !== " " || (Ie.preventDefault(), Ie.stopPropagation(), ue(Ie));
            },
            onMousedown(Ie) {
              Ie.preventDefault(), Ie.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Pe = C.value ? !!t.chip : !!t.selection, it = Pe ? za(C.value ? t.chip({
            item: Q,
            index: ce,
            props: de
          }) : t.selection({
            item: Q,
            index: ce
          })) : void 0;
          if (!(Pe && !it))
            return u("div", {
              key: Q.value,
              class: ["v-autocomplete__selection", ce === m.value && ["v-autocomplete__selection--selected", k.value]],
              style: ce === m.value ? A.value : {}
            }, [C.value ? t.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: Q.title
                }
              }
            }, {
              default: () => [it]
            }) : u(zn, N({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Q.title,
              disabled: Q.props.disabled
            }, de), null) : it ?? u("span", {
              class: "v-autocomplete__selection-text"
            }, [Q.title, e.multiple && ce < V.value.length - 1 && u("span", {
              class: "v-autocomplete__selection-comma"
            }, [Je(",")])])]);
        })]),
        "append-inner": function() {
          var de;
          for (var Q = arguments.length, ce = new Array(Q), ue = 0; ue < Q; ue++)
            ce[ue] = arguments[ue];
          return u(le, null, [(de = t["append-inner"]) == null ? void 0 : de.call(t, ...ce), e.menuIcon ? u(be, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: $,
            onClick: _r,
            "aria-label": a(b.value),
            title: a(b.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), St({
      isFocused: i,
      isPristine: o,
      menu: f,
      search: _,
      filteredItems: w,
      select: Ce
    }, l);
  }
}), cg = D({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: re,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...ee(),
  ...Ft({
    location: "top end"
  }),
  ...Te(),
  ...ve(),
  ...ge(),
  ...Ct({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), dg = O()({
  name: "VBadge",
  inheritAttrs: !1,
  props: cg(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = Ve(M(e, "color")), {
      roundedClasses: l
    } = Me(e), {
      t: i
    } = Fe(), {
      textColorClasses: o,
      textColorStyles: r
    } = qe(M(e, "textColor")), {
      themeClasses: s
    } = Qr(), {
      locationStyles: c
    } = wn(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? +(e.offsetY ?? 0) : ["left", "right"].includes(d) ? +(e.offsetX ?? 0) : 0));
    return R(() => {
      const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= +e.max ? d : `${e.max}+`, [m, v] = Al(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return u(e.tag, N({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, v, {
        style: e.style
      }), {
        default: () => {
          var b, h;
          return [u("div", {
            class: "v-badge__wrapper"
          }, [(h = (b = n.slots).default) == null ? void 0 : h.call(b), u(et, {
            transition: e.transition
          }, {
            default: () => {
              var g, S;
              return [De(u("span", N({
                class: ["v-badge__badge", s.value, t.value, l.value, o.value],
                style: [a.value, r.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, m), [e.dot ? void 0 : n.slots.badge ? (S = (g = n.slots).badge) == null ? void 0 : S.call(g) : e.icon ? u(be, {
                icon: e.icon
              }, null) : f]), [[wt, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), vg = D({
  color: String,
  density: String,
  ...ee()
}, "VBannerActions"), rs = O()({
  name: "VBannerActions",
  props: vg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return pe({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), R(() => {
      var a;
      return u("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), us = Tt("v-banner-text"), fg = D({
  avatar: String,
  bgColor: String,
  color: String,
  icon: re,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...ut(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...mn({
    mobile: null
  }),
  ...je(),
  ...Ft(),
  ...On(),
  ...Te(),
  ...ve(),
  ...ge()
}, "VBanner"), mg = O()({
  name: "VBanner",
  props: fg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve(e, "bgColor"), {
      borderClasses: i
    } = ft(e), {
      densityClasses: o
    } = lt(e), {
      displayClasses: r,
      mobile: s
    } = yt(e), {
      dimensionStyles: c
    } = ze(e), {
      elevationClasses: d
    } = Ke(e), {
      locationStyles: f
    } = wn(e), {
      positionClasses: m
    } = Rn(e), {
      roundedClasses: v
    } = Me(e), {
      themeClasses: b
    } = ke(e), h = M(e, "color"), g = M(e, "density");
    pe({
      VBannerActions: {
        color: h,
        density: g
      }
    }), R(() => {
      const S = !!(e.text || t.text), k = !!(e.avatar || e.icon), A = !!(k || t.prepend);
      return u(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, b.value, a.value, i.value, o.value, r.value, d.value, m.value, v.value, e.class],
        style: [l.value, c.value, f.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var _;
          return [A && u("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [t.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !k,
            defaults: {
              VAvatar: {
                color: h.value,
                density: g.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, t.prepend) : u(ht, {
            key: "prepend-avatar",
            color: h.value,
            density: g.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), u("div", {
            class: "v-banner__content"
          }, [S && u(us, {
            key: "text"
          }, {
            default: () => {
              var V;
              return [((V = t.text) == null ? void 0 : V.call(t)) ?? e.text];
            }
          }), (_ = t.default) == null ? void 0 : _.call(t)]), t.actions && u(rs, {
            key: "actions"
          }, t.actions)];
        }
      });
    });
  }
}), gg = D({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...ut(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...Te(),
  ...gn({
    name: "bottom-navigation"
  }),
  ...ve({
    tag: "header"
  }),
  ...Sn({
    selectedClass: "v-btn--selected"
  }),
  ...ge()
}, "VBottomNavigation"), hg = O()({
  name: "VBottomNavigation",
  props: gg(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Qr(), {
      borderClasses: l
    } = ft(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(M(e, "bgColor")), {
      densityClasses: r
    } = lt(e), {
      elevationClasses: s
    } = Ke(e), {
      roundedClasses: c
    } = Me(e), {
      ssrBootStyles: d
    } = yn(), f = y(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), m = ae(e, "active", e.active), {
      layoutItemStyles: v
    } = hn({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: y(() => "bottom"),
      layoutSize: y(() => m.value ? f.value : 0),
      elementSize: f,
      active: m,
      absolute: M(e, "absolute")
    });
    return Ut(e, Bi), pe({
      VBtn: {
        baseColor: M(e, "baseColor"),
        color: M(e, "color"),
        density: M(e, "density"),
        stacked: y(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), R(() => u(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": m.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, i.value, l.value, r.value, s.value, c.value, e.class],
      style: [o.value, v.value, {
        height: X(f.value)
      }, d.value, e.style]
    }, {
      default: () => [t.default && u("div", {
        class: "v-bottom-navigation__content"
      }, [t.default()])]
    })), {};
  }
}), ss = D({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...fa({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Ga
    },
    zIndex: 2400
  })
}, "VDialog"), Ul = O()({
  name: "VDialog",
  props: ss(),
  emits: {
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ae(e, "modelValue"), {
      scopeId: i
    } = Cn(), o = j();
    function r(d) {
      var v, b;
      const f = d.relatedTarget, m = d.target;
      if (f !== m && ((v = o.value) != null && v.contentEl) && // We're the topmost dialog
      ((b = o.value) != null && b.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(m) && // It isn't inside the dialog body
      !o.value.contentEl.contains(m)) {
        const h = Un(o.value.contentEl);
        if (!h.length) return;
        const g = h[0], S = h[h.length - 1];
        f === g ? S.focus() : g.focus();
      }
    }
    xe && K(() => l.value && e.retainFocus, (d) => {
      d ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function s() {
      var d;
      (d = o.value) != null && d.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return K(l, async (d) => {
      var f;
      d || (await we(), (f = o.value.activatorEl) == null || f.focus({
        preventScroll: !0
      }));
    }), R(() => {
      const d = It.filterProps(e), f = N({
        "aria-haspopup": "dialog",
        "aria-expanded": String(l.value)
      }, e.activatorProps), m = N({
        tabindex: -1
      }, e.contentProps);
      return u(It, N({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, d, {
        modelValue: l.value,
        "onUpdate:modelValue": (v) => l.value = v,
        "aria-modal": "true",
        activatorProps: f,
        contentProps: m,
        role: "dialog",
        onAfterEnter: s,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var v = arguments.length, b = new Array(v), h = 0; h < v; h++)
            b[h] = arguments[h];
          return u(me, {
            root: "VDialog"
          }, {
            default: () => {
              var g;
              return [(g = a.default) == null ? void 0 : g.call(a, ...b)];
            }
          });
        }
      });
    }), St({}, o);
  }
}), yg = D({
  inset: Boolean,
  ...ss({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), bg = O()({
  name: "VBottomSheet",
  props: yg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue");
    return R(() => {
      const l = Ul.filterProps(e);
      return u(Ul, N(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), t);
    }), {};
  }
}), Sg = D({
  divider: [Number, String],
  ...ee()
}, "VBreadcrumbsDivider"), cs = O()({
  name: "VBreadcrumbsDivider",
  props: Sg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      var a;
      return u("li", {
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider]);
    }), {};
  }
}), kg = D({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...ee(),
  ...ca(),
  ...ve({
    tag: "li"
  })
}, "VBreadcrumbsItem"), ds = O()({
  name: "VBreadcrumbsItem",
  props: kg(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const l = sa(e, a), i = y(() => {
      var c;
      return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }), o = y(() => i.value ? e.activeColor : e.color), {
      textColorClasses: r,
      textColorStyles: s
    } = qe(o);
    return R(() => u(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, r.value, e.class],
      style: [s.value, e.style],
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var c, d;
        return [l.isLink.value ? u("a", {
          class: "v-breadcrumbs-item--link",
          href: l.href.value,
          "aria-current": i.value ? "page" : void 0,
          onClick: l.navigate
        }, [((d = t.default) == null ? void 0 : d.call(t)) ?? e.title]) : ((c = t.default) == null ? void 0 : c.call(t)) ?? e.title];
      }
    })), {};
  }
}), xg = D({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: re,
  items: {
    type: Array,
    default: () => []
  },
  ...ee(),
  ...Ye(),
  ...Te(),
  ...ve({
    tag: "ul"
  })
}, "VBreadcrumbs"), wg = O()({
  name: "VBreadcrumbs",
  props: xg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve(M(e, "bgColor")), {
      densityClasses: i
    } = lt(e), {
      roundedClasses: o
    } = Me(e);
    pe({
      VBreadcrumbsDivider: {
        divider: M(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: M(e, "activeClass"),
        activeColor: M(e, "activeColor"),
        color: M(e, "color"),
        disabled: M(e, "disabled")
      }
    });
    const r = y(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return R(() => {
      const s = !!(t.prepend || e.icon);
      return u(e.tag, {
        class: ["v-breadcrumbs", a.value, i.value, o.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var c;
          return [s && u("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [t.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, t.prepend) : u(be, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), r.value.map((d, f, m) => {
            var h;
            let {
              item: v,
              raw: b
            } = d;
            return u(le, null, [((h = t.item) == null ? void 0 : h.call(t, {
              item: v,
              index: f
            })) ?? u(ds, N({
              key: f,
              disabled: f >= m.length - 1
            }, typeof v == "string" ? {
              title: v
            } : v), {
              default: t.title ? () => {
                var g;
                return (g = t.title) == null ? void 0 : g.call(t, {
                  item: v,
                  index: f
                });
              } : void 0
            }), f < m.length - 1 && u(cs, null, {
              default: t.divider ? () => {
                var g;
                return (g = t.divider) == null ? void 0 : g.call(t, {
                  item: b,
                  index: f
                });
              } : void 0
            })]);
          }), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    }), {};
  }
}), vs = O()({
  name: "VCardActions",
  props: ee(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return pe({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), R(() => {
      var a;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Cg = D({
  opacity: [Number, String],
  ...ee(),
  ...ve()
}, "VCardSubtitle"), fs = O()({
  name: "VCardSubtitle",
  props: Cg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), ms = Tt("v-card-title"), Vg = D({
  appendAvatar: String,
  appendIcon: re,
  prependAvatar: String,
  prependIcon: re,
  subtitle: [String, Number],
  title: [String, Number],
  ...ee(),
  ...Ye()
}, "VCardItem"), gs = O()({
  name: "VCardItem",
  props: Vg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), r = !!(e.title != null || t.title), s = !!(e.subtitle != null || t.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? u(me, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : u(le, null, [e.prependAvatar && u(ht, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(be, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [r && u(ms, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = t.title) == null ? void 0 : d.call(t)) ?? e.title];
        }
      }), s && u(fs, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = t.subtitle) == null ? void 0 : d.call(t)) ?? e.subtitle];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? u(me, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : u(le, null, [e.appendIcon && u(be, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(ht, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Pg = D({
  opacity: [Number, String],
  ...ee(),
  ...ve()
}, "VCardText"), hs = O()({
  name: "VCardText",
  props: Pg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => u(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Ig = D({
  appendAvatar: String,
  appendIcon: re,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: re,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...ut(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...Xa(),
  ...Ft(),
  ...On(),
  ...Te(),
  ...ca(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "elevated"
  })
}, "VCard"), Yn = O()({
  name: "VCard",
  directives: {
    Ripple: Lt
  },
  props: Ig(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      borderClasses: i
    } = ft(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = bn(e), {
      densityClasses: c
    } = lt(e), {
      dimensionStyles: d
    } = ze(e), {
      elevationClasses: f
    } = Ke(e), {
      loaderClasses: m
    } = ra(e), {
      locationStyles: v
    } = wn(e), {
      positionClasses: b
    } = Rn(e), {
      roundedClasses: h
    } = Me(e), g = sa(e, t), S = y(() => e.link !== !1 && g.isLink.value), k = y(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
    return R(() => {
      const A = S.value ? "a" : e.tag, _ = !!(a.title || e.title != null), V = !!(a.subtitle || e.subtitle != null), P = _ || V, B = !!(a.append || e.appendAvatar || e.appendIcon), w = !!(a.prepend || e.prependAvatar || e.prependIcon), x = !!(a.image || e.image), T = P || w || B, C = !!(a.text || e.text != null);
      return De(u(A, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": k.value
        }, l.value, i.value, o.value, c.value, f.value, m.value, b.value, h.value, s.value, e.class],
        style: [r.value, d.value, v.value, e.style],
        href: g.href.value,
        onClick: k.value && g.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var I;
          return [x && u("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? u(me, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : u(pt, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(ua, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), T && u(gs, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), C && u(hs, {
            key: "text"
          }, {
            default: () => {
              var p;
              return [((p = a.text) == null ? void 0 : p.call(a)) ?? e.text];
            }
          }), (I = a.default) == null ? void 0 : I.call(a), a.actions && u(vs, null, {
            default: a.actions
          }), Gt(k.value, "v-card")];
        }
      }), [[ct("ripple"), k.value && e.ripple]]);
    }), {};
  }
}), _g = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function Ag(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function Tg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, {
    originalEvent: e,
    ...n
  }), _g(n);
}
function Bg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function Dg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => Ag(t, n),
    touchend: (t) => Tg(t, n),
    touchmove: (t) => Bg(t, n)
  };
}
function pg(e, n) {
  var r;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (t == null ? void 0 : t.options) ?? {
    passive: !0
  }, i = (r = n.instance) == null ? void 0 : r.$.uid;
  if (!a || !i) return;
  const o = Dg(n.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, wr(o).forEach((s) => {
    a.addEventListener(s, o[s], l);
  });
}
function Eg(e, n) {
  var i, o;
  const t = (i = n.value) != null && i.parent ? e.parentElement : e, a = (o = n.instance) == null ? void 0 : o.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  wr(l).forEach((r) => {
    t.removeEventListener(r, l[r]);
  }), delete t._touchHandlers[a];
}
const ji = {
  mounted: pg,
  unmounted: Eg
}, ys = Symbol.for("vuetify:v-window"), bs = Symbol.for("vuetify:v-window-group"), ll = D({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...ee(),
  ...ve(),
  ...ge()
}, "VWindow"), rn = O()({
  name: "VWindow",
  directives: {
    Touch: ji
  },
  props: ll(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      isRtl: l
    } = We(), {
      t: i
    } = Fe(), o = Ut(e, bs), r = j(), s = y(() => l.value ? !e.reverse : e.reverse), c = G(!1), d = y(() => {
      const _ = e.direction === "vertical" ? "y" : "x", P = (s.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${_}${P}-transition`;
    }), f = G(0), m = j(void 0), v = y(() => o.items.value.findIndex((_) => o.selected.value.includes(_.id)));
    K(v, (_, V) => {
      const P = o.items.value.length, B = P - 1;
      P <= 2 ? c.value = _ < V : _ === B && V === 0 ? c.value = !0 : _ === 0 && V === B ? c.value = !1 : c.value = _ < V;
    }), Ae(ys, {
      transition: d,
      isReversed: c,
      transitionCount: f,
      transitionHeight: m,
      rootRef: r
    });
    const b = y(() => e.continuous || v.value !== 0), h = y(() => e.continuous || v.value !== o.items.value.length - 1);
    function g() {
      b.value && o.prev();
    }
    function S() {
      h.value && o.next();
    }
    const k = y(() => {
      const _ = [], V = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      _.push(b.value ? t.prev ? t.prev({
        props: V
      }) : u(Se, V, null) : u("div", null, null));
      const P = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return _.push(h.value ? t.next ? t.next({
        props: P
      }) : u(Se, P, null) : u("div", null, null)), _;
    }), A = y(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? g() : S();
        },
        right: () => {
          s.value ? S() : g();
        },
        start: (V) => {
          let {
            originalEvent: P
          } = V;
          P.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return R(() => De(u(e.tag, {
      ref: r,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var _, V;
        return [u("div", {
          class: "v-window__container",
          style: {
            height: m.value
          }
        }, [(_ = t.default) == null ? void 0 : _.call(t, {
          group: o
        }), e.showArrows !== !1 && u("div", {
          class: "v-window__controls"
        }, [k.value])]), (V = t.additional) == null ? void 0 : V.call(t, {
          group: o
        })];
      }
    }), [[ct("touch"), A.value]])), {
      group: o
    };
  }
}), Mg = D({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: re,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...ll({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), $g = O()({
  name: "VCarousel",
  props: Mg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), {
      t: l
    } = Fe(), i = j();
    let o = -1;
    K(a, s), K(() => e.interval, s), K(() => e.cycle, (c) => {
      c ? s() : window.clearTimeout(o);
    }), at(r);
    function r() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function s() {
      window.clearTimeout(o), window.requestAnimationFrame(r);
    }
    return R(() => {
      const c = rn.filterProps(e);
      return u(rn, N({
        ref: i
      }, c, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: X(e.height)
        }, e.style]
      }), {
        default: t.default,
        additional: (d) => {
          let {
            group: f
          } = d;
          return u(le, null, [!e.hideDelimiters && u("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [f.items.value.length > 0 && u(me, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [f.items.value.map((m, v) => {
              const b = {
                id: `carousel-item-${m.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", v + 1, f.items.value.length),
                class: ["v-carousel__controls__item", f.isSelected(m.id) && "v-btn--active"],
                onClick: () => f.select(m.id, !0)
              };
              return t.item ? t.item({
                props: b,
                item: m
              }) : u(Se, N(m, b), null);
            })]
          })]), e.progress && u(qa, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100
          }, null)]);
        },
        prev: t.prev,
        next: t.next
      });
    }), {};
  }
}), il = D({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...ee(),
  ...kn(),
  ...Oi()
}, "VWindowItem"), un = O()({
  name: "VWindowItem",
  directives: {
    Touch: ji
  },
  props: il(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ye(ys), l = xn(e, bs), {
      isBooted: i
    } = yn();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = G(!1), r = y(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var b;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = X((b = a.rootRef.value) == null ? void 0 : b.clientHeight)), a.transitionCount.value += 1);
    }
    function d() {
      s();
    }
    function f(b) {
      o.value && we(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = X(b.clientHeight));
      });
    }
    const m = y(() => {
      const b = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof b != "string" ? a.transition.value : b,
        onBeforeEnter: c,
        onAfterEnter: s,
        onEnterCancelled: d,
        onBeforeLeave: c,
        onAfterLeave: s,
        onLeaveCancelled: d,
        onEnter: f
      } : !1;
    }), {
      hasContent: v
    } = Ri(e, l.isSelected);
    return R(() => u(et, {
      transition: m.value,
      disabled: !i.value
    }, {
      default: () => {
        var b;
        return [De(u("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [v.value && ((b = t.default) == null ? void 0 : b.call(t))]), [[wt, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), Fg = D({
  ...cu(),
  ...il()
}, "VCarouselItem"), Lg = O()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: Fg(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    R(() => {
      const l = pt.filterProps(e), i = un.filterProps(e);
      return u(un, N({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [u(pt, N(a, l), t)]
      });
    });
  }
}), Og = Tt("v-code"), Rg = D({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...ee()
}, "VColorPickerCanvas"), Ng = dt({
  name: "VColorPickerCanvas",
  props: Rg(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = G(!1), l = j(), i = G(parseFloat(e.width)), o = G(parseFloat(e.height)), r = j({
      x: 0,
      y: 0
    }), s = y({
      get: () => r.value,
      set(g) {
        var A, _;
        if (!l.value) return;
        const {
          x: S,
          y: k
        } = g;
        r.value = g, t("update:color", {
          h: ((A = e.color) == null ? void 0 : A.h) ?? 0,
          s: Le(S, 0, i.value) / i.value,
          v: 1 - Le(k, 0, o.value) / o.value,
          a: ((_ = e.color) == null ? void 0 : _.a) ?? 1
        });
      }
    }), c = y(() => {
      const {
        x: g,
        y: S
      } = s.value, k = parseInt(e.dotSize, 10) / 2;
      return {
        width: X(e.dotSize),
        height: X(e.dotSize),
        transform: `translate(${X(g - k)}, ${X(S - k)})`
      };
    }), {
      resizeRef: d
    } = xt((g) => {
      var A;
      if (!((A = d.el) != null && A.offsetParent)) return;
      const {
        width: S,
        height: k
      } = g[0].contentRect;
      i.value = S, o.value = k;
    });
    function f(g, S, k) {
      const {
        left: A,
        top: _,
        width: V,
        height: P
      } = k;
      s.value = {
        x: Le(g - A, 0, V),
        y: Le(S - _, 0, P)
      };
    }
    function m(g) {
      g.type === "mousedown" && g.preventDefault(), !e.disabled && (v(g), window.addEventListener("mousemove", v), window.addEventListener("mouseup", b), window.addEventListener("touchmove", v), window.addEventListener("touchend", b));
    }
    function v(g) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const S = ad(g);
      f(S.clientX, S.clientY, l.value.getBoundingClientRect());
    }
    function b() {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", b), window.removeEventListener("touchmove", v), window.removeEventListener("touchend", b);
    }
    function h() {
      var _;
      if (!l.value) return;
      const g = l.value, S = g.getContext("2d");
      if (!S) return;
      const k = S.createLinearGradient(0, 0, g.width, 0);
      k.addColorStop(0, "hsla(0, 0%, 100%, 1)"), k.addColorStop(1, `hsla(${((_ = e.color) == null ? void 0 : _.h) ?? 0}, 100%, 50%, 1)`), S.fillStyle = k, S.fillRect(0, 0, g.width, g.height);
      const A = S.createLinearGradient(0, 0, 0, g.height);
      A.addColorStop(0, "hsla(0, 0%, 0%, 0)"), A.addColorStop(1, "hsla(0, 0%, 0%, 1)"), S.fillStyle = A, S.fillRect(0, 0, g.width, g.height);
    }
    return K(() => {
      var g;
      return (g = e.color) == null ? void 0 : g.h;
    }, h, {
      immediate: !0
    }), K(() => [i.value, o.value], (g, S) => {
      h(), r.value = {
        x: s.value.x * g[0] / S[0],
        y: s.value.y * g[1] / S[1]
      };
    }, {
      flush: "post"
    }), K(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * o.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), at(() => h()), R(() => u("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: m,
      onTouchstartPassive: m
    }, [u("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && u("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function zg(e, n) {
  if (n) {
    const {
      a: t,
      ...a
    } = e;
    return a;
  }
  return e;
}
function Hg(e, n) {
  if (n == null || typeof n == "string") {
    const t = Rr(e);
    return e.a === 1 ? t.slice(0, 7) : t;
  }
  if (typeof n == "object") {
    let t;
    return Qt(n, ["r", "g", "b"]) ? t = Dt(e) : Qt(n, ["h", "s", "l"]) ? t = Er(e) : Qt(n, ["h", "s", "v"]) && (t = e), zg(t, !Qt(n, ["a"]) && e.a === 1);
  }
  return e;
}
const Tn = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Kl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => ({
      ...e,
      r: Number(n)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => ({
      ...e,
      g: Number(n)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => ({
      ...e,
      b: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Dt,
  from: Ha
};
var mr;
const Wg = {
  ...Kl,
  inputs: (mr = Kl.inputs) == null ? void 0 : mr.slice(0, 3)
}, ql = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => ({
      ...e,
      h: Number(n)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      s: Number(n)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      l: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Er,
  from: bi
}, jg = {
  ...ql,
  inputs: ql.inputs.slice(0, 3)
}, Ss = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, n) => n
  }],
  to: Rr,
  from: Or
}, Yg = {
  ...Ss,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, n) => n
  }]
}, ln = {
  rgb: Wg,
  rgba: Kl,
  hsl: jg,
  hsla: ql,
  hex: Yg,
  hexa: Ss
}, Gg = (e) => {
  let {
    label: n,
    ...t
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", t, null), u("span", null, [n])]);
}, Ug = D({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(ln).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(ln),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(ln).includes(n))
  },
  ...ee()
}, "VColorPickerEdit"), Kg = dt({
  name: "VColorPickerEdit",
  props: Ug(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = y(() => e.modes.map((i) => ({
      ...ln[i],
      name: i
    }))), l = y(() => {
      var r;
      const i = a.value.find((s) => s.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((s) => {
        let {
          getValue: c,
          getColor: d,
          ...f
        } = s;
        return {
          ...i.inputProps,
          ...f,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (m) => {
            const v = m.target;
            v && t("update:color", i.from(d(o ?? i.to(Tn), v.value)));
          }
        };
      });
    });
    return R(() => {
      var i;
      return u("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((o) => u(Gg, o, null)), a.value.length > 1 && u(Se, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = a.value.findIndex((r) => r.name === e.mode);
          t("update:mode", a.value[(o + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Yi = Symbol.for("vuetify:v-slider");
function Xl(e, n, t) {
  const a = t === "vertical", l = n.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function qg(e, n) {
  return "touches" in e && e.touches.length ? e.touches[0][n] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n];
}
const ks = D({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...Te(),
  ...je({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), xs = (e) => {
  const n = y(() => parseFloat(e.min)), t = y(() => parseFloat(e.max)), a = y(() => +e.step > 0 ? parseFloat(e.step) : 0), l = y(() => Math.max(fo(a.value), fo(n.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = Le(o, n.value, t.value), s = n.value % a.value, c = Math.round((r - s) / a.value) * a.value + s;
    return parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return {
    min: n,
    max: t,
    step: a,
    decimals: l,
    roundValue: i
  };
}, ws = (e) => {
  let {
    props: n,
    steps: t,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: r
  } = We(), s = M(n, "reverse"), c = y(() => n.direction === "vertical"), d = y(() => c.value !== s.value), {
    min: f,
    max: m,
    step: v,
    decimals: b,
    roundValue: h
  } = t, g = y(() => parseInt(n.thumbSize, 10)), S = y(() => parseInt(n.tickSize, 10)), k = y(() => parseInt(n.trackSize, 10)), A = y(() => (m.value - f.value) / v.value), _ = M(n, "disabled"), V = y(() => n.error || n.disabled ? void 0 : n.thumbColor ?? n.color), P = y(() => n.error || n.disabled ? void 0 : n.trackColor ?? n.color), B = y(() => n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color), w = G(!1), x = G(0), T = j(), C = j();
  function I(H) {
    var ce;
    const ne = n.direction === "vertical", ie = ne ? "top" : "left", he = ne ? "height" : "width", Ce = ne ? "clientY" : "clientX", {
      [ie]: q,
      [he]: fe
    } = (ce = T.value) == null ? void 0 : ce.$el.getBoundingClientRect(), Y = qg(H, Ce);
    let Q = Math.min(Math.max((Y - q - x.value) / fe, 0), 1) || 0;
    return (ne ? d.value : d.value !== r.value) && (Q = 1 - Q), h(f.value + Q * (m.value - f.value));
  }
  const p = (H) => {
    i({
      value: I(H)
    }), w.value = !1, x.value = 0;
  }, F = (H) => {
    C.value = o(H), C.value && (C.value.focus(), w.value = !0, C.value.contains(H.target) ? x.value = Xl(H, C.value, n.direction) : (x.value = 0, l({
      value: I(H)
    })), a({
      value: I(H)
    }));
  }, z = {
    passive: !0,
    capture: !0
  };
  function W(H) {
    l({
      value: I(H)
    });
  }
  function Z(H) {
    H.stopPropagation(), H.preventDefault(), p(H), window.removeEventListener("mousemove", W, z), window.removeEventListener("mouseup", Z);
  }
  function J(H) {
    var ne;
    p(H), window.removeEventListener("touchmove", W, z), (ne = H.target) == null || ne.removeEventListener("touchend", J);
  }
  function L(H) {
    var ne;
    F(H), window.addEventListener("touchmove", W, z), (ne = H.target) == null || ne.addEventListener("touchend", J, {
      passive: !1
    });
  }
  function $(H) {
    H.preventDefault(), F(H), window.addEventListener("mousemove", W, z), window.addEventListener("mouseup", Z, {
      passive: !1
    });
  }
  const E = (H) => {
    const ne = (H - f.value) / (m.value - f.value) * 100;
    return Le(isNaN(ne) ? 0 : ne, 0, 100);
  }, U = M(n, "showTicks"), oe = y(() => U.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map((H) => ({
    value: H,
    position: E(H),
    label: H.toString()
  })) : Object.keys(n.ticks).map((H) => ({
    value: parseFloat(H),
    position: E(parseFloat(H)),
    label: n.ticks[H]
  })) : A.value !== 1 / 0 ? Pt(A.value + 1).map((H) => {
    const ne = f.value + H * v.value;
    return {
      value: ne,
      position: E(ne)
    };
  }) : [] : []), te = y(() => oe.value.some((H) => {
    let {
      label: ne
    } = H;
    return !!ne;
  })), se = {
    activeThumbRef: C,
    color: M(n, "color"),
    decimals: b,
    disabled: _,
    direction: M(n, "direction"),
    elevation: M(n, "elevation"),
    hasLabels: te,
    isReversed: s,
    indexFromEnd: d,
    min: f,
    max: m,
    mousePressed: w,
    numTicks: A,
    onSliderMousedown: $,
    onSliderTouchstart: L,
    parsedTicks: oe,
    parseMouseMove: I,
    position: E,
    readonly: M(n, "readonly"),
    rounded: M(n, "rounded"),
    roundValue: h,
    showTicks: U,
    startOffset: x,
    step: v,
    thumbSize: g,
    thumbColor: V,
    thumbLabel: M(n, "thumbLabel"),
    ticks: M(n, "ticks"),
    tickSize: S,
    trackColor: P,
    trackContainerRef: T,
    trackFillColor: B,
    trackSize: k,
    vertical: c
  };
  return Ae(Yi, se), se;
}, Xg = D({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  ...ee()
}, "VSliderThumb"), Zl = O()({
  name: "VSliderThumb",
  directives: {
    Ripple: Lt
  },
  props: Xg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = ye(Yi), {
      isRtl: i,
      rtlClasses: o
    } = We();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: s,
      disabled: c,
      thumbSize: d,
      thumbLabel: f,
      direction: m,
      isReversed: v,
      vertical: b,
      readonly: h,
      elevation: g,
      mousePressed: S,
      decimals: k,
      indexFromEnd: A
    } = l, _ = y(() => c.value ? void 0 : g.value), {
      elevationClasses: V
    } = Ke(_), {
      textColorClasses: P,
      textColorStyles: B
    } = qe(r), {
      pageup: w,
      pagedown: x,
      end: T,
      home: C,
      left: I,
      right: p,
      down: F,
      up: z
    } = _l, W = [w, x, T, C, I, p, F, z], Z = y(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function J($, E) {
      if (!W.includes($.key)) return;
      $.preventDefault();
      const U = s.value || 0.1, oe = (e.max - e.min) / U;
      if ([I, p, F, z].includes($.key)) {
        const se = (b.value ? [i.value ? I : p, v.value ? F : z] : A.value !== i.value ? [I, z] : [p, z]).includes($.key) ? 1 : -1, H = $.shiftKey ? 2 : $.ctrlKey ? 1 : 0;
        E = E + se * U * Z.value[H];
      } else if ($.key === C)
        E = e.min;
      else if ($.key === T)
        E = e.max;
      else {
        const te = $.key === x ? 1 : -1;
        E = E - te * U * (oe > 100 ? oe / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, E));
    }
    function L($) {
      const E = J($, e.modelValue);
      E != null && a("update:modelValue", E);
    }
    return R(() => {
      const $ = X(A.value ? 100 - e.position : e.position, "%");
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && S.value
        }, e.class, o.value],
        style: [{
          "--v-slider-thumb-position": $,
          "--v-slider-thumb-size": X(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!h.value,
        "aria-orientation": m.value,
        onKeydown: h.value ? void 0 : L
      }, [u("div", {
        class: ["v-slider-thumb__surface", P.value, V.value],
        style: {
          ...B.value
        }
      }, null), De(u("div", {
        class: ["v-slider-thumb__ripple", P.value],
        style: B.value
      }, null), [[ct("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), u(Ii, {
        origin: "bottom center"
      }, {
        default: () => {
          var E;
          return [De(u("div", {
            class: "v-slider-thumb__label-container"
          }, [u("div", {
            class: ["v-slider-thumb__label"]
          }, [u("div", null, [((E = t["thumb-label"]) == null ? void 0 : E.call(t, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? k.value : 1)])])]), [[wt, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
}), Zg = D({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...ee()
}, "VSliderTrack"), Cs = O()({
  name: "VSliderTrack",
  props: Zg(),
  emits: {},
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ye(Yi);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: r,
      tickSize: s,
      trackColor: c,
      trackFillColor: d,
      trackSize: f,
      vertical: m,
      min: v,
      max: b,
      indexFromEnd: h
    } = a, {
      roundedClasses: g
    } = Me(o), {
      backgroundColorClasses: S,
      backgroundColorStyles: k
    } = Ve(d), {
      backgroundColorClasses: A,
      backgroundColorStyles: _
    } = Ve(c), V = y(() => `inset-${m.value ? "block" : "inline"}-${h.value ? "end" : "start"}`), P = y(() => m.value ? "height" : "width"), B = y(() => ({
      [V.value]: "0%",
      [P.value]: "100%"
    })), w = y(() => e.stop - e.start), x = y(() => ({
      [V.value]: X(e.start, "%"),
      [P.value]: X(w.value, "%")
    })), T = y(() => r.value ? (m.value ? i.value.slice().reverse() : i.value).map((I, p) => {
      var z;
      const F = I.value !== v.value && I.value !== b.value ? X(I.position, "%") : void 0;
      return u("div", {
        key: I.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": I.position >= e.start && I.position <= e.stop,
          "v-slider-track__tick--first": I.value === v.value,
          "v-slider-track__tick--last": I.value === b.value
        }],
        style: {
          [V.value]: F
        }
      }, [(I.label || t["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((z = t["tick-label"]) == null ? void 0 : z.call(t, {
        tick: I,
        index: p
      })) ?? I.label])]);
    }) : []);
    return R(() => u("div", {
      class: ["v-slider-track", g.value, e.class],
      style: [{
        "--v-slider-track-size": X(f.value),
        "--v-slider-tick-size": X(s.value)
      }, e.style]
    }, [u("div", {
      class: ["v-slider-track__background", A.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...B.value,
        ..._.value
      }
    }, null), u("div", {
      class: ["v-slider-track__fill", S.value],
      style: {
        ...x.value,
        ...k.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [T.value])])), {};
  }
}), Jg = D({
  ...da(),
  ...ks(),
  ...Rt(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Jl = O()({
  name: "VSlider",
  props: Jg(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), {
      rtlClasses: i
    } = We(), o = xs(e), r = ae(e, "modelValue", void 0, (P) => o.roundValue(P ?? o.min.value)), {
      min: s,
      max: c,
      mousePressed: d,
      roundValue: f,
      onSliderMousedown: m,
      onSliderTouchstart: v,
      trackContainerRef: b,
      position: h,
      hasLabels: g,
      readonly: S
    } = ws({
      props: e,
      steps: o,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (P) => {
        let {
          value: B
        } = P;
        const w = f(B);
        r.value = w, a("end", w);
      },
      onSliderMove: (P) => {
        let {
          value: B
        } = P;
        return r.value = f(B);
      },
      getActiveThumb: () => {
        var P;
        return (P = l.value) == null ? void 0 : P.$el;
      }
    }), {
      isFocused: k,
      focus: A,
      blur: _
    } = Ot(e), V = y(() => h(r.value));
    return R(() => {
      const P = Xe.filterProps(e), B = !!(e.label || t.label || t.prepend);
      return u(Xe, N({
        class: ["v-slider", {
          "v-slider--has-labels": !!t["tick-label"] || g.value,
          "v-slider--focused": k.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, P, {
        focused: k.value
      }), {
        ...t,
        prepend: B ? (w) => {
          var x, T;
          return u(le, null, [((x = t.label) == null ? void 0 : x.call(t, w)) ?? (e.label ? u(Nn, {
            id: w.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (T = t.prepend) == null ? void 0 : T.call(t, w)]);
        } : void 0,
        default: (w) => {
          let {
            id: x,
            messagesId: T
          } = w;
          return u("div", {
            class: "v-slider__container",
            onMousedown: S.value ? void 0 : m,
            onTouchstartPassive: S.value ? void 0 : v
          }, [u("input", {
            id: x.value,
            name: e.name || x.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(Cs, {
            ref: b,
            start: 0,
            stop: V.value
          }, {
            "tick-label": t["tick-label"]
          }), u(Zl, {
            ref: l,
            "aria-describedby": T.value,
            focused: k.value,
            min: s.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (C) => r.value = C,
            position: V.value,
            elevation: e.elevation,
            onFocus: A,
            onBlur: _,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Qg = D({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...ee()
}, "VColorPickerPreview"), eh = dt({
  name: "VColorPickerPreview",
  props: Qg(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = new AbortController();
    zc(() => a.abort());
    async function l() {
      if (!so) return;
      const i = new window.EyeDropper();
      try {
        const o = await i.open({
          signal: a.signal
        }), r = Or(o.sRGBHex);
        t("update:color", {
          ...e.color ?? Tn,
          ...r
        });
      } catch {
      }
    }
    return R(() => {
      var i, o;
      return u("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [so && u("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [u(Se, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), u("div", {
        class: "v-color-picker-preview__dot"
      }, [u("div", {
        style: {
          background: $r(e.color ?? Tn)
        }
      }, null)]), u("div", {
        class: "v-color-picker-preview__sliders"
      }, [u(Jl, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? Tn,
          h: r
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && u(Jl, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? Tn,
          a: r
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
}), th = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, nh = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, ah = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, lh = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, ih = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, oh = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, rh = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, uh = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, sh = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, ch = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, dh = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, vh = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, fh = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, mh = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, gh = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, hh = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, yh = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, bh = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, Sh = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, kh = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, xh = {
  red: th,
  pink: nh,
  purple: ah,
  deepPurple: lh,
  indigo: ih,
  blue: oh,
  lightBlue: rh,
  cyan: uh,
  teal: sh,
  green: ch,
  lightGreen: dh,
  lime: vh,
  yellow: fh,
  amber: mh,
  orange: gh,
  deepOrange: hh,
  brown: yh,
  blueGrey: bh,
  grey: Sh,
  shades: kh
}, wh = D({
  swatches: {
    type: Array,
    default: () => Ch(xh)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...ee()
}, "VColorPickerSwatches");
function Ch(e) {
  return Object.keys(e).map((n) => {
    const t = e[n];
    return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent];
  });
}
const Vh = dt({
  name: "VColorPickerSwatches",
  props: wh(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    return R(() => u("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: X(e.maxHeight)
      }, e.style]
    }, [u("div", null, [e.swatches.map((a) => u("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = gt(l), o = Ha(i), r = Mr(i);
      return u("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && t("update:color", o)
      }, [u("div", {
        style: {
          background: r
        }
      }, [e.color && _t(e.color, o) ? u(be, {
        size: "x-small",
        icon: "$success",
        color: Ad(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), ol = D({
  color: String,
  ...ut(),
  ...ee(),
  ...Ne(),
  ...je(),
  ...Ft(),
  ...On(),
  ...Te(),
  ...ve(),
  ...ge()
}, "VSheet"), sn = O()({
  name: "VSheet",
  props: ol(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(M(e, "color")), {
      borderClasses: o
    } = ft(e), {
      dimensionStyles: r
    } = ze(e), {
      elevationClasses: s
    } = Ke(e), {
      locationStyles: c
    } = wn(e), {
      positionClasses: d
    } = Rn(e), {
      roundedClasses: f
    } = Me(e);
    return R(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, o.value, s.value, d.value, f.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, t)), {};
  }
}), Ph = D({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(ln).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(ln),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(ln).includes(n))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...Re(ol({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), Ih = dt({
  name: "VColorPicker",
  props: Ph(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const n = ae(e, "mode"), t = j(null), a = ae(e, "modelValue", void 0, (s) => {
      if (s == null || s === "") return null;
      let c;
      try {
        c = Ha(gt(s));
      } catch (d) {
        return kt(d), null;
      }
      return c;
    }, (s) => s ? Hg(s, e.modelValue) : null), l = y(() => a.value ? {
      ...a.value,
      h: t.value ?? a.value.h
    } : null), {
      rtlClasses: i
    } = We();
    let o = !0;
    K(a, (s) => {
      if (!o) {
        o = !0;
        return;
      }
      s && (t.value = s.h);
    }, {
      immediate: !0
    });
    const r = (s) => {
      o = !1, t.value = s.h, a.value = s;
    };
    return at(() => {
      e.modes.includes(n.value) || (n.value = e.modes[0]);
    }), pe({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), R(() => {
      const s = sn.filterProps(e);
      return u(sn, N({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": $r({
            ...l.value ?? Tn,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && u(Ng, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && u("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && u(eh, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !n.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(Kg, {
          key: "edit",
          modes: e.modes,
          mode: n.value,
          "onUpdate:mode": (c) => n.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(Vh, {
          key: "swatches",
          color: l.value,
          "onUpdate:color": r,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
});
function _h(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? u(le, null, [u("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, n)]), u("span", {
    class: "v-combobox__mask"
  }, [e.substr(n, t)]), u("span", {
    class: "v-combobox__unmask"
  }, [e.substr(n + t)])]) : e;
}
const Ah = D({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...ga({
    filterKeys: ["title"]
  }),
  ...Hi({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Re(nl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ct({
    transition: !1
  })
}, "VCombobox"), Th = O()({
  name: "VCombobox",
  props: Ah(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    var fe;
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Fe(), i = j(), o = G(!1), r = G(!0), s = G(!1), c = j(), d = j(), f = ae(e, "menu"), m = y({
      get: () => f.value,
      set: (Y) => {
        var Q;
        f.value && !Y && ((Q = c.value) != null && Q.ΨopenChildren.size) || (f.value = Y);
      }
    }), v = G(-1);
    let b = !1;
    const h = y(() => {
      var Y;
      return (Y = i.value) == null ? void 0 : Y.color;
    }), g = y(() => m.value ? e.closeText : e.openText), {
      items: S,
      transformIn: k,
      transformOut: A
    } = $i(e), {
      textColorClasses: _,
      textColorStyles: V
    } = qe(h), P = ae(e, "modelValue", [], (Y) => k(Be(Y)), (Y) => {
      const Q = A(Y);
      return e.multiple ? Q : Q[0] ?? null;
    }), B = Qa(), w = y(() => !!(e.chips || a.chip)), x = y(() => w.value || !!a.selection), T = G(!e.multiple && !x.value ? ((fe = P.value[0]) == null ? void 0 : fe.title) ?? "" : ""), C = y({
      get: () => T.value,
      set: (Y) => {
        var Q;
        if (T.value = Y ?? "", !e.multiple && !x.value && (P.value = [zt(e, Y)]), Y && e.multiple && ((Q = e.delimiters) != null && Q.length)) {
          const ce = Y.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          ce.length > 1 && (ce.forEach((ue) => {
            ue = ue.trim(), ue && ie(zt(e, ue));
          }), T.value = "");
        }
        Y || (v.value = -1), r.value = !Y;
      }
    }), I = y(() => typeof e.counterValue == "function" ? e.counterValue(P.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? P.value.length : C.value.length);
    K(T, (Y) => {
      b ? we(() => b = !1) : o.value && !m.value && (m.value = !0), t("update:search", Y);
    }), K(P, (Y) => {
      var Q;
      !e.multiple && !x.value && (T.value = ((Q = Y[0]) == null ? void 0 : Q.title) ?? "");
    });
    const {
      filteredItems: p,
      getMatches: F
    } = ha(e, S, () => r.value ? "" : C.value), z = y(() => e.hideSelected ? p.value.filter((Y) => !P.value.some((Q) => Q.value === Y.value)) : p.value), W = y(() => P.value.map((Y) => Y.value)), Z = y(() => {
      var Q;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && C.value === ((Q = z.value[0]) == null ? void 0 : Q.title)) && z.value.length > 0 && !r.value && !s.value;
    }), J = y(() => e.hideNoData && !z.value.length || e.readonly || (B == null ? void 0 : B.isReadonly.value)), L = j(), $ = zi(L, i);
    function E(Y) {
      b = !0, e.openOnClear && (m.value = !0);
    }
    function U() {
      J.value || (m.value = !0);
    }
    function oe(Y) {
      J.value || (o.value && (Y.preventDefault(), Y.stopPropagation()), m.value = !m.value);
    }
    function te(Y) {
      var Q;
      Ba(Y) && ((Q = i.value) == null || Q.focus());
    }
    function se(Y) {
      var ue;
      if (Qc(Y) || e.readonly || B != null && B.isReadonly.value) return;
      const Q = i.value.selectionStart, ce = P.value.length;
      if ((v.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(Y.key)) && Y.preventDefault(), ["Enter", "ArrowDown"].includes(Y.key) && (m.value = !0), ["Escape"].includes(Y.key) && (m.value = !1), ["Enter", "Escape", "Tab"].includes(Y.key) && (Z.value && ["Enter", "Tab"].includes(Y.key) && !P.value.some((de) => {
        let {
          value: Pe
        } = de;
        return Pe === z.value[0].value;
      }) && ie(p.value[0]), r.value = !0), Y.key === "ArrowDown" && Z.value && ((ue = L.value) == null || ue.focus("next")), Y.key === "Enter" && C.value && (ie(zt(e, C.value)), x.value && (T.value = "")), ["Backspace", "Delete"].includes(Y.key)) {
        if (!e.multiple && x.value && P.value.length > 0 && !C.value) return ie(P.value[0], !1);
        if (~v.value) {
          const de = v.value;
          ie(P.value[v.value], !1), v.value = de >= ce - 1 ? ce - 2 : de;
        } else Y.key === "Backspace" && !C.value && (v.value = ce - 1);
      }
      if (e.multiple) {
        if (Y.key === "ArrowLeft") {
          if (v.value < 0 && Q > 0) return;
          const de = v.value > -1 ? v.value - 1 : ce - 1;
          P.value[de] ? v.value = de : (v.value = -1, i.value.setSelectionRange(C.value.length, C.value.length));
        }
        if (Y.key === "ArrowRight") {
          if (v.value < 0) return;
          const de = v.value + 1;
          P.value[de] ? v.value = de : (v.value = -1, i.value.setSelectionRange(0, 0));
        }
      }
    }
    function H() {
      var Y;
      e.eager && ((Y = d.value) == null || Y.calculateVisibleItems());
    }
    function ne() {
      var Y;
      o.value && (r.value = !0, (Y = i.value) == null || Y.focus());
    }
    function ie(Y) {
      let Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!Y || Y.props.disabled))
        if (e.multiple) {
          const ce = P.value.findIndex((de) => e.valueComparator(de.value, Y.value)), ue = Q ?? !~ce;
          if (~ce) {
            const de = ue ? [...P.value, Y] : [...P.value];
            de.splice(ce, 1), P.value = de;
          } else ue && (P.value = [...P.value, Y]);
          e.clearOnSelect && (C.value = "");
        } else {
          const ce = Q !== !1;
          P.value = ce ? [Y] : [], T.value = ce && !x.value ? Y.title : "", we(() => {
            m.value = !1, r.value = !0;
          });
        }
    }
    function he(Y) {
      o.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function Ce(Y) {
      s.value = !1;
    }
    function q(Y) {
      (Y == null || Y === "" && !e.multiple && !x.value) && (P.value = []);
    }
    return K(o, (Y, Q) => {
      if (!(Y || Y === Q) && (v.value = -1, m.value = !1, C.value)) {
        if (e.multiple) {
          ie(zt(e, C.value));
          return;
        }
        if (!x.value) return;
        P.value.some((ce) => {
          let {
            title: ue
          } = ce;
          return ue === C.value;
        }) ? T.value = "" : ie(zt(e, C.value));
      }
    }), K(m, () => {
      if (!e.hideSelected && m.value && P.value.length) {
        const Y = z.value.findIndex((Q) => P.value.some((ce) => e.valueComparator(ce.value, Q.value)));
        xe && window.requestAnimationFrame(() => {
          var Q;
          Y >= 0 && ((Q = d.value) == null || Q.scrollToIndex(Y));
        });
      }
    }), K(() => e.items, (Y, Q) => {
      m.value || o.value && !Q.length && Y.length && (m.value = !0);
    }), R(() => {
      const Y = !!(!e.hideNoData || z.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), Q = P.value.length > 0, ce = $t.filterProps(e);
      return u($t, N({
        ref: i
      }, ce, {
        modelValue: C.value,
        "onUpdate:modelValue": [(ue) => C.value = ue, q],
        focused: o.value,
        "onUpdate:focused": (ue) => o.value = ue,
        validationValue: P.externalValue,
        counterValue: I.value,
        dirty: Q,
        class: ["v-combobox", {
          "v-combobox--active-menu": m.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!x.value,
          "v-combobox--selecting-index": v.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: Q ? void 0 : e.placeholder,
        "onClick:clear": E,
        "onMousedown:control": U,
        onKeydown: se
      }), {
        ...a,
        default: () => u(le, null, [u($n, N({
          ref: c,
          modelValue: m.value,
          "onUpdate:modelValue": (ue) => m.value = ue,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: J.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: H,
          onAfterLeave: ne
        }, e.menuProps), {
          default: () => [Y && u(el, N({
            ref: L,
            selected: W.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ue) => ue.preventDefault(),
            onKeydown: te,
            onFocusin: he,
            onFocusout: Ce,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, $, e.listProps), {
            default: () => {
              var ue, de, Pe;
              return [(ue = a["prepend-item"]) == null ? void 0 : ue.call(a), !z.value.length && !e.hideNoData && (((de = a["no-data"]) == null ? void 0 : de.call(a)) ?? u(Mt, {
                title: l(e.noDataText)
              }, null)), u(al, {
                ref: d,
                renderless: !0,
                items: z.value
              }, {
                default: (it) => {
                  var qt;
                  let {
                    item: Ie,
                    index: Vt,
                    itemRef: Ze
                  } = it;
                  const Kt = N(Ie.props, {
                    ref: Ze,
                    key: Vt,
                    active: Z.value && Vt === 0 ? !0 : void 0,
                    onClick: () => ie(Ie, null)
                  });
                  return ((qt = a.item) == null ? void 0 : qt.call(a, {
                    item: Ie,
                    index: Vt,
                    props: Kt
                  })) ?? u(Mt, N(Kt, {
                    role: "option"
                  }), {
                    prepend: (ya) => {
                      let {
                        isSelected: ba
                      } = ya;
                      return u(le, null, [e.multiple && !e.hideSelected ? u(Et, {
                        key: Ie.value,
                        modelValue: ba,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Ie.props.prependAvatar && u(ht, {
                        image: Ie.props.prependAvatar
                      }, null), Ie.props.prependIcon && u(be, {
                        icon: Ie.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var ya, ba;
                      return r.value ? Ie.title : _h(Ie.title, (ya = F(Ie)) == null ? void 0 : ya.title, ((ba = C.value) == null ? void 0 : ba.length) ?? 0);
                    }
                  });
                }
              }), (Pe = a["append-item"]) == null ? void 0 : Pe.call(a)];
            }
          })]
        }), P.value.map((ue, de) => {
          function Pe(Ze) {
            Ze.stopPropagation(), Ze.preventDefault(), ie(ue, !1);
          }
          const it = {
            "onClick:close": Pe,
            onKeydown(Ze) {
              Ze.key !== "Enter" && Ze.key !== " " || (Ze.preventDefault(), Ze.stopPropagation(), Pe(Ze));
            },
            onMousedown(Ze) {
              Ze.preventDefault(), Ze.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Ie = w.value ? !!a.chip : !!a.selection, Vt = Ie ? za(w.value ? a.chip({
            item: ue,
            index: de,
            props: it
          }) : a.selection({
            item: ue,
            index: de
          })) : void 0;
          if (!(Ie && !Vt))
            return u("div", {
              key: ue.value,
              class: ["v-combobox__selection", de === v.value && ["v-combobox__selection--selected", _.value]],
              style: de === v.value ? V.value : {}
            }, [w.value ? a.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ue.title
                }
              }
            }, {
              default: () => [Vt]
            }) : u(zn, N({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ue.title,
              disabled: ue.props.disabled
            }, it), null) : Vt ?? u("span", {
              class: "v-combobox__selection-text"
            }, [ue.title, e.multiple && de < P.value.length - 1 && u("span", {
              class: "v-combobox__selection-comma"
            }, [Je(",")])])]);
        })]),
        "append-inner": function() {
          var it;
          for (var ue = arguments.length, de = new Array(ue), Pe = 0; Pe < ue; Pe++)
            de[Pe] = arguments[Pe];
          return u(le, null, [(it = a["append-inner"]) == null ? void 0 : it.call(a, ...de), (!e.hideNoData || e.items.length) && e.menuIcon ? u(be, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: oe,
            onClick: _r,
            "aria-label": l(g.value),
            title: l(g.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), St({
      isFocused: o,
      isPristine: r,
      menu: m,
      search: C,
      selectionIndex: v,
      filteredItems: p,
      select: ie
    }, i);
  }
}), Bh = D({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit"), Dh = O()({
  name: "VConfirmEdit",
  props: Bh(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ae(e, "modelValue"), i = j();
    $e(() => {
      i.value = structuredClone(_e(l.value));
    });
    const {
      t: o
    } = Fe(), r = y(() => _t(l.value, i.value));
    function s() {
      l.value = i.value, t("save", i.value);
    }
    function c() {
      i.value = structuredClone(_e(l.value)), t("cancel");
    }
    let d = !1;
    return R(() => {
      var m;
      const f = u(le, null, [u(Se, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: o(e.cancelText)
      }, null), u(Se, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: s,
        text: o(e.okText)
      }, null)]);
      return u(le, null, [(m = a.default) == null ? void 0 : m.call(a, {
        model: i,
        save: s,
        cancel: c,
        isPristine: r.value,
        get actions() {
          return d = !0, f;
        }
      }), !d && f]);
    }), {
      save: s,
      cancel: c,
      isPristine: r
    };
  }
}), Vs = D({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Ps = Symbol.for("vuetify:datatable:expanded");
function rl(e) {
  const n = M(e, "expandOnClick"), t = ae(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const c = new Set(t.value);
    s ? c.add(r.value) : c.delete(r.value), t.value = c;
  }
  function l(r) {
    return t.value.has(r.value);
  }
  function i(r) {
    a(r, !l(r));
  }
  const o = {
    expand: a,
    expanded: t,
    expandOnClick: n,
    isExpanded: l,
    toggleExpand: i
  };
  return Ae(Ps, o), o;
}
function Is() {
  const e = ye(Ps);
  if (!e) throw new Error("foo");
  return e;
}
const Gi = D({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), _s = Symbol.for("vuetify:data-table-group");
function Ui(e) {
  return {
    groupBy: ae(e, "groupBy")
  };
}
function ul(e) {
  const {
    disableSort: n,
    groupBy: t,
    sortBy: a
  } = e, l = j(/* @__PURE__ */ new Set()), i = y(() => t.value.map((d) => ({
    ...d,
    order: d.order ?? !1
  })).concat(n != null && n.value ? [] : a.value));
  function o(d) {
    return l.value.has(d.id);
  }
  function r(d) {
    const f = new Set(l.value);
    o(d) ? f.delete(d.id) : f.add(d.id), l.value = f;
  }
  function s(d) {
    function f(m) {
      const v = [];
      for (const b of m.items)
        "type" in b && b.type === "group" ? v.push(...f(b)) : v.push(b);
      return v;
    }
    return f({
      type: "group",
      items: d,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const c = {
    sortByWithGroups: i,
    toggleGroup: r,
    opened: l,
    groupBy: t,
    extractRows: s,
    isGroupOpen: o
  };
  return Ae(_s, c), c;
}
function As() {
  const e = ye(_s);
  if (!e) throw new Error("Missing group!");
  return e;
}
function ph(e, n) {
  if (!e.length) return [];
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = on(a.raw, n);
    t.has(l) || t.set(l, []), t.get(l).push(a);
  }
  return t;
}
function Ts(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length) return [];
  const l = ph(e, n[0]), i = [], o = n.slice(1);
  return l.forEach((r, s) => {
    const c = n[0], d = `${a}_${c}_${s}`;
    i.push({
      depth: t,
      id: d,
      key: c,
      value: s,
      items: o.length ? Ts(r, o, t + 1, d) : r,
      type: "group"
    });
  }), i;
}
function Bs(e, n) {
  const t = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...Bs(a.items, n))) : t.push(a);
  return t;
}
function sl(e, n, t) {
  return {
    flatItems: y(() => {
      if (!n.value.length) return e.value;
      const l = Ts(e.value, n.value.map((i) => i.key));
      return Bs(l, t.value);
    })
  };
}
function cl(e) {
  let {
    page: n,
    itemsPerPage: t,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = Ee("VDataTable"), r = y(() => ({
    page: n.value,
    itemsPerPage: t.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  }));
  let s = null;
  K(r, () => {
    _t(s, r.value) || (s && s.search !== r.value.search && (n.value = 1), o.emit("update:options", r.value), s = r.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Ki = D({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), Ds = Symbol.for("vuetify:data-table-pagination");
function qi(e) {
  const n = ae(e, "page", void 0, (a) => +(a ?? 1)), t = ae(e, "itemsPerPage", void 0, (a) => +(a ?? 10));
  return {
    page: n,
    itemsPerPage: t
  };
}
function Xi(e) {
  const {
    page: n,
    itemsPerPage: t,
    itemsLength: a
  } = e, l = y(() => t.value === -1 ? 0 : t.value * (n.value - 1)), i = y(() => t.value === -1 ? a.value : Math.min(a.value, l.value + t.value)), o = y(() => t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value));
  $e(() => {
    n.value > o.value && (n.value = o.value);
  });
  function r(m) {
    t.value = m, n.value = 1;
  }
  function s() {
    n.value = Le(n.value + 1, 1, o.value);
  }
  function c() {
    n.value = Le(n.value - 1, 1, o.value);
  }
  function d(m) {
    n.value = Le(m, 1, o.value);
  }
  const f = {
    page: n,
    itemsPerPage: t,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: c,
    setPage: d,
    setItemsPerPage: r
  };
  return Ae(Ds, f), f;
}
function Eh() {
  const e = ye(Ds);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function ps(e) {
  const n = Ee("usePaginatedItems"), {
    items: t,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = y(() => i.value <= 0 ? t.value : t.value.slice(a.value, l.value));
  return K(o, (r) => {
    n.emit("update:currentItems", r);
  }), {
    paginatedItems: o
  };
}
const Mh = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: n,
      value: t
    } = e;
    return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: n
    } = e;
    return n;
  }
}, Es = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      currentPage: t,
      selected: a
    } = e;
    return Es.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Ms = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      allItems: t,
      selected: a
    } = e;
    return Ms.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, $s = D({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: _t
  }
}, "DataTable-select"), Fs = Symbol.for("vuetify:data-table-selection");
function dl(e, n) {
  let {
    allItems: t,
    currentPage: a
  } = n;
  const l = ae(e, "modelValue", e.modelValue, (S) => new Set(Be(S).map((k) => {
    var A;
    return ((A = t.value.find((_) => e.valueComparator(k, _.value))) == null ? void 0 : A.value) ?? k;
  })), (S) => [...S.values()]), i = y(() => t.value.filter((S) => S.selectable)), o = y(() => a.value.filter((S) => S.selectable)), r = y(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Mh;
      case "all":
        return Ms;
      case "page":
      default:
        return Es;
    }
  });
  function s(S) {
    return Be(S).every((k) => l.value.has(k.value));
  }
  function c(S) {
    return Be(S).some((k) => l.value.has(k.value));
  }
  function d(S, k) {
    const A = r.value.select({
      items: S,
      value: k,
      selected: new Set(l.value)
    });
    l.value = A;
  }
  function f(S) {
    d([S], !s([S]));
  }
  function m(S) {
    const k = r.value.selectAll({
      value: S,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = k;
  }
  const v = y(() => l.value.size > 0), b = y(() => {
    const S = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!S.length && s(S);
  }), h = y(() => r.value.showSelectAll), g = {
    toggleSelect: f,
    select: d,
    selectAll: m,
    isSelected: s,
    isSomeSelected: c,
    someSelected: v,
    allSelected: b,
    showSelectAll: h
  };
  return Ae(Fs, g), g;
}
function vl() {
  const e = ye(Fs);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Ls = D({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), Os = Symbol.for("vuetify:data-table-sort");
function fl(e) {
  const n = ae(e, "sortBy"), t = M(e, "mustSort"), a = M(e, "multiSort");
  return {
    sortBy: n,
    mustSort: t,
    multiSort: a
  };
}
function ml(e) {
  const {
    sortBy: n,
    mustSort: t,
    multiSort: a,
    page: l
  } = e, i = (s) => {
    if (s.key == null) return;
    let c = n.value.map((f) => ({
      ...f
    })) ?? [];
    const d = c.find((f) => f.key === s.key);
    d ? d.order === "desc" ? t.value ? d.order = "asc" : c = c.filter((f) => f.key !== s.key) : d.order = "desc" : a.value ? c = [...c, {
      key: s.key,
      order: "asc"
    }] : c = [{
      key: s.key,
      order: "asc"
    }], n.value = c, l && (l.value = 1);
  };
  function o(s) {
    return !!n.value.find((c) => c.key === s.key);
  }
  const r = {
    sortBy: n,
    toggleSort: i,
    isSorted: o
  };
  return Ae(Os, r), r;
}
function Rs() {
  const e = ye(Os);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function Zi(e, n, t, a) {
  const l = Fe();
  return {
    sortedItems: y(() => {
      var o, r;
      return t.value.length ? $h(n.value, t.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value
        },
        sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
      }) : n.value;
    })
  };
}
function $h(e, n, t, a) {
  const l = new Intl.Collator(t, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a != null && a.transform ? a.transform(o) : o]).sort((o, r) => {
    var s, c;
    for (let d = 0; d < n.length; d++) {
      let f = !1;
      const m = n[d].key, v = n[d].order ?? "asc";
      if (v === !1) continue;
      let b = on(o[1], m), h = on(r[1], m), g = o[0].raw, S = r[0].raw;
      if (v === "desc" && ([b, h] = [h, b], [g, S] = [S, g]), (s = a == null ? void 0 : a.sortRawFunctions) != null && s[m]) {
        const k = a.sortRawFunctions[m](g, S);
        if (k == null) continue;
        if (f = !0, k) return k;
      }
      if ((c = a == null ? void 0 : a.sortFunctions) != null && c[m]) {
        const k = a.sortFunctions[m](b, h);
        if (k == null) continue;
        if (f = !0, k) return k;
      }
      if (!f) {
        if (b instanceof Date && h instanceof Date)
          return b.getTime() - h.getTime();
        if ([b, h] = [b, h].map((k) => k != null ? k.toString().toLocaleLowerCase() : k), b !== h)
          return ka(b) && ka(h) ? 0 : ka(b) ? -1 : ka(h) ? 1 : !isNaN(b) && !isNaN(h) ? Number(b) - Number(h) : l.compare(b, h);
      }
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const Fh = D({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function Lh(e, n) {
  const t = e.returnObject ? n : He(n, e.itemValue), a = He(n, e.itemSelectable, !0);
  return {
    type: "item",
    value: t,
    selectable: a,
    raw: n
  };
}
function Oh(e, n) {
  const t = [];
  for (const a of n)
    t.push(Lh(e, a));
  return t;
}
function Rh(e) {
  return {
    items: y(() => Oh(e, e.items))
  };
}
const Nh = D({
  search: String,
  loading: Boolean,
  ...ee(),
  ...Fh(),
  ...$s(),
  ...Ls(),
  ...Ki({
    itemsPerPage: 5
  }),
  ...Vs(),
  ...Gi(),
  ...ga(),
  ...ve(),
  ...Ct({
    transition: {
      component: Zn,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), zh = O()({
  name: "VDataIterator",
  props: Nh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "groupBy"), l = M(e, "search"), {
      items: i
    } = Rh(e), {
      filteredItems: o
    } = ha(e, i, l, {
      transform: (E) => E.raw
    }), {
      sortBy: r,
      multiSort: s,
      mustSort: c
    } = fl(e), {
      page: d,
      itemsPerPage: f
    } = qi(e), {
      toggleSort: m
    } = ml({
      sortBy: r,
      multiSort: s,
      mustSort: c,
      page: d
    }), {
      sortByWithGroups: v,
      opened: b,
      extractRows: h,
      isGroupOpen: g,
      toggleGroup: S
    } = ul({
      groupBy: a,
      sortBy: r
    }), {
      sortedItems: k
    } = Zi(e, o, v, {
      transform: (E) => E.raw
    }), {
      flatItems: A
    } = sl(k, a, b), _ = y(() => A.value.length), {
      startIndex: V,
      stopIndex: P,
      pageCount: B,
      prevPage: w,
      nextPage: x,
      setItemsPerPage: T,
      setPage: C
    } = Xi({
      page: d,
      itemsPerPage: f,
      itemsLength: _
    }), {
      paginatedItems: I
    } = ps({
      items: A,
      startIndex: V,
      stopIndex: P,
      itemsPerPage: f
    }), p = y(() => h(I.value)), {
      isSelected: F,
      select: z,
      selectAll: W,
      toggleSelect: Z
    } = dl(e, {
      allItems: i,
      currentPage: p
    }), {
      isExpanded: J,
      toggleExpand: L
    } = rl(e);
    cl({
      page: d,
      itemsPerPage: f,
      sortBy: r,
      groupBy: a,
      search: l
    });
    const $ = y(() => ({
      page: d.value,
      itemsPerPage: f.value,
      sortBy: r.value,
      pageCount: B.value,
      toggleSort: m,
      prevPage: w,
      nextPage: x,
      setPage: C,
      setItemsPerPage: T,
      isSelected: F,
      select: z,
      selectAll: W,
      toggleSelect: Z,
      isExpanded: J,
      toggleExpand: L,
      isGroupOpen: g,
      toggleGroup: S,
      items: p.value,
      groupedItems: I.value
    }));
    return R(() => u(e.tag, {
      class: ["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class],
      style: e.style
    }, {
      default: () => {
        var E, U;
        return [(E = t.header) == null ? void 0 : E.call(t, $.value), u(et, {
          transition: e.transition
        }, {
          default: () => {
            var oe, te;
            return [e.loading ? u(ua, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (se) => {
                var H;
                return (H = t.loader) == null ? void 0 : H.call(t, se);
              }
            }) : u("div", {
              key: "items"
            }, [I.value.length ? (te = t.default) == null ? void 0 : te.call(t, $.value) : (oe = t["no-data"]) == null ? void 0 : oe.call(t)])];
          }
        }), (U = t.footer) == null ? void 0 : U.call(t, $.value)];
      }
    })), {};
  }
});
function Hh() {
  const e = j([]);
  Hc(() => e.value = []);
  function n(t, a) {
    e.value[a] = t;
  }
  return {
    refs: e,
    updateRef: n
  };
}
const Wh = D({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: re,
    default: "$first"
  },
  prevIcon: {
    type: re,
    default: "$prev"
  },
  nextIcon: {
    type: re,
    default: "$next"
  },
  lastIcon: {
    type: re,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...ut(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...Te(),
  ...Bt(),
  ...ve({
    tag: "nav"
  }),
  ...ge(),
  ...bt({
    variant: "text"
  })
}, "VPagination"), Ql = O()({
  name: "VPagination",
  props: Wh(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = ae(e, "modelValue"), {
      t: i,
      n: o
    } = Fe(), {
      isRtl: r
    } = We(), {
      themeClasses: s
    } = ke(e), {
      width: c
    } = yt(), d = G(-1);
    pe(void 0, {
      scoped: !0
    });
    const {
      resizeRef: f
    } = xt((w) => {
      if (!w.length) return;
      const {
        target: x,
        contentRect: T
      } = w[0], C = x.querySelector(".v-pagination__list > *");
      if (!C) return;
      const I = T.width, p = C.offsetWidth + parseFloat(getComputedStyle(C).marginRight) * 2;
      d.value = h(I, p);
    }), m = y(() => parseInt(e.length, 10)), v = y(() => parseInt(e.start, 10)), b = y(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : h(c.value, 58));
    function h(w, x) {
      const T = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((w - x * T) / x).toFixed(2)
      ));
    }
    const g = y(() => {
      if (m.value <= 0 || isNaN(m.value) || m.value > Number.MAX_SAFE_INTEGER) return [];
      if (b.value <= 0) return [];
      if (b.value === 1) return [l.value];
      if (m.value <= b.value)
        return Pt(m.value, v.value);
      const w = b.value % 2 === 0, x = w ? b.value / 2 : Math.floor(b.value / 2), T = w ? x : x + 1, C = m.value - x;
      if (T - l.value >= 0)
        return [...Pt(Math.max(1, b.value - 1), v.value), e.ellipsis, m.value];
      if (l.value - C >= (w ? 1 : 0)) {
        const I = b.value - 1, p = m.value - I + v.value;
        return [v.value, e.ellipsis, ...Pt(I, p)];
      } else {
        const I = Math.max(1, b.value - 3), p = I === 1 ? l.value : l.value - Math.ceil(I / 2) + v.value;
        return [v.value, e.ellipsis, ...Pt(I, p), e.ellipsis, m.value];
      }
    });
    function S(w, x, T) {
      w.preventDefault(), l.value = x, T && a(T, x);
    }
    const {
      refs: k,
      updateRef: A
    } = Hh();
    pe({
      VPaginationBtn: {
        color: M(e, "color"),
        border: M(e, "border"),
        density: M(e, "density"),
        size: M(e, "size"),
        variant: M(e, "variant"),
        rounded: M(e, "rounded"),
        elevation: M(e, "elevation")
      }
    });
    const _ = y(() => g.value.map((w, x) => {
      const T = (C) => A(C, x);
      if (typeof w == "string")
        return {
          isActive: !1,
          key: `ellipsis-${x}`,
          page: w,
          props: {
            ref: T,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const C = w === l.value;
        return {
          isActive: C,
          key: w,
          page: o(w),
          props: {
            ref: T,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: C ? e.activeColor : e.color,
            "aria-current": C,
            "aria-label": i(C ? e.currentPageAriaLabel : e.pageAriaLabel, w),
            onClick: (I) => S(I, w)
          }
        };
      }
    })), V = y(() => {
      const w = !!e.disabled || l.value <= v.value, x = !!e.disabled || l.value >= v.value + m.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (T) => S(T, v.value, "first"),
          disabled: w,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": w
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (T) => S(T, l.value - 1, "prev"),
          disabled: w,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": w
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (T) => S(T, l.value + 1, "next"),
          disabled: x,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": x
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (T) => S(T, v.value + m.value - 1, "last"),
          disabled: x,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": x
        } : void 0
      };
    });
    function P() {
      var x;
      const w = l.value - v.value;
      (x = k.value[w]) == null || x.$el.focus();
    }
    function B(w) {
      w.key === _l.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1, we(P)) : w.key === _l.right && !e.disabled && l.value < v.value + m.value - 1 && (l.value = l.value + 1, we(P));
    }
    return R(() => u(e.tag, {
      ref: f,
      class: ["v-pagination", s.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: B,
      "data-test": "v-pagination-root"
    }, {
      default: () => [u("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && u("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [t.first ? t.first(V.value.first) : u(Se, N({
        _as: "VPaginationBtn"
      }, V.value.first), null)]), u("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [t.prev ? t.prev(V.value.prev) : u(Se, N({
        _as: "VPaginationBtn"
      }, V.value.prev), null)]), _.value.map((w, x) => u("li", {
        key: w.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": w.isActive
        }],
        "data-test": "v-pagination-item"
      }, [t.item ? t.item(w) : u(Se, N({
        _as: "VPaginationBtn"
      }, w.props), {
        default: () => [w.page]
      })])), u("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [t.next ? t.next(V.value.next) : u(Se, N({
        _as: "VPaginationBtn"
      }, V.value.next), null)]), e.showFirstLastPage && u("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [t.last ? t.last(V.value.last) : u(Se, N({
        _as: "VPaginationBtn"
      }, V.value.last), null)])])]
    })), {};
  }
}), Ji = D({
  prevIcon: {
    type: re,
    default: "$prev"
  },
  nextIcon: {
    type: re,
    default: "$next"
  },
  firstIcon: {
    type: re,
    default: "$first"
  },
  lastIcon: {
    type: re,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), aa = O()({
  name: "VDataTableFooter",
  props: Ji(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Fe(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: c,
      setItemsPerPage: d
    } = Eh(), f = y(() => e.itemsPerPageOptions.map((m) => typeof m == "number" ? {
      value: m,
      title: m === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(m)
    } : {
      ...m,
      title: isNaN(Number(m.title)) ? a(m.title) : m.title
    }));
    return R(() => {
      var v;
      const m = Ql.filterProps(e);
      return u("div", {
        class: "v-data-table-footer"
      }, [(v = t.prepend) == null ? void 0 : v.call(t), u("div", {
        class: "v-data-table-footer__items-per-page"
      }, [u("span", null, [a(e.itemsPerPageText)]), u(Wi, {
        items: f.value,
        modelValue: c.value,
        "onUpdate:modelValue": (b) => d(Number(b)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), u("div", {
        class: "v-data-table-footer__info"
      }, [u("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])]), u("div", {
        class: "v-data-table-footer__pagination"
      }, [u(Ql, N({
        modelValue: l.value,
        "onUpdate:modelValue": (b) => l.value = b,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: i.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, m), null)])]);
    }), {};
  }
}), La = Ed({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, n) => {
  let {
    slots: t
  } = n;
  const a = e.tag ?? "td";
  return u(a, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: X(e.height),
      width: X(e.width),
      maxWidth: X(e.maxWidth),
      left: X(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var l;
      return [(l = t.default) == null ? void 0 : l.call(t)];
    }
  });
}), jh = D({
  headers: Array
}, "DataTable-header"), Ns = Symbol.for("vuetify:data-table-headers"), zs = {
  title: "",
  sortable: !1
}, Yh = {
  ...zs,
  width: 48
};
function Gh() {
  const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
    element: t,
    priority: 0
  }));
  return {
    enqueue: (t, a) => {
      let l = !1;
      for (let i = 0; i < n.length; i++)
        if (n[i].priority > a) {
          n.splice(i, 0, {
            element: t,
            priority: a
          }), l = !0;
          break;
        }
      l || n.push({
        element: t,
        priority: a
      });
    },
    size: () => n.length,
    count: () => {
      let t = 0;
      if (!n.length) return 0;
      const a = Math.floor(n[0].priority);
      for (let l = 0; l < n.length; l++)
        Math.floor(n[l].priority) === a && (t += 1);
      return t;
    },
    dequeue: () => n.shift()
  };
}
function ei(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    n.push(e);
  else
    for (const t of e.children)
      ei(t, n);
  return n;
}
function Hs(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && Hs(t.children, n);
  return n;
}
function Uh(e) {
  if (e.key) {
    if (e.key === "data-table-group") return zs;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Yh;
  }
}
function Qi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => Qi(t, n + 1))) : n;
}
function Kh(e) {
  let n = !1;
  function t(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (i)
      if (o && (i.fixed = !0), i.fixed)
        if (i.children)
          for (let r = i.children.length - 1; r >= 0; r--)
            t(i.children[r], !0);
        else
          n ? isNaN(+i.width) && Da(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.lastFixed = !0, n = !0;
      else if (i.children)
        for (let r = i.children.length - 1; r >= 0; r--)
          t(i.children[r]);
      else
        n = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    t(e[i]);
  function a(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!i) return o;
    if (i.children) {
      i.fixedOffset = o;
      for (const r of i.children)
        o = a(r, o);
    } else i.fixed && (i.fixedOffset = o, o += parseFloat(i.width || "0") || 0);
    return o;
  }
  let l = 0;
  for (const i of e)
    l = a(i, l);
}
function qh(e, n) {
  const t = [];
  let a = 0;
  const l = Gh(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let s = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: d
      } = l.dequeue(), f = n - a - Qi(c);
      if (r.push({
        ...c,
        rowspan: f ?? 1,
        colspan: c.children ? ei(c).length : 1
      }), c.children)
        for (const m of c.children) {
          const v = d % 1 + s / Math.pow(10, a + 2);
          l.enqueue(m, a + f + v);
        }
      s += 1, o -= 1;
    }
    a += 1, t.push(r);
  }
  return {
    columns: e.map((o) => ei(o)).flat(),
    headers: t
  };
}
function Ws(e) {
  const n = [];
  for (const t of e) {
    const a = {
      ...Uh(t),
      ...t
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? Ws(a.children) : void 0
    };
    n.push(o);
  }
  return n;
}
function eo(e, n) {
  const t = j([]), a = j([]), l = j({}), i = j({}), o = j({});
  $e(() => {
    var h, g, S;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((k) => ({
      key: k,
      title: Fn(k)
    }))).slice(), d = Hs(c);
    (h = n == null ? void 0 : n.groupBy) != null && h.value.length && !d.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (g = n == null ? void 0 : n.showSelect) != null && g.value && !d.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (S = n == null ? void 0 : n.showExpand) != null && S.value && !d.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const f = Ws(c);
    Kh(f);
    const m = Math.max(...f.map((k) => Qi(k))) + 1, v = qh(f, m);
    t.value = v.headers, a.value = v.columns;
    const b = v.headers.flat(1);
    for (const k of b)
      k.key && (k.sortable && (k.sort && (l.value[k.key] = k.sort), k.sortRaw && (i.value[k.key] = k.sortRaw)), k.filter && (o.value[k.key] = k.filter));
  });
  const r = {
    headers: t,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return Ae(Ns, r), r;
}
function gl() {
  const e = ye(Ns);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const js = D({
  color: String,
  sticky: Boolean,
  disableSort: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: re,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: re,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  ...mn(),
  ...Xa()
}, "VDataTableHeaders"), cn = O()({
  name: "VDataTableHeaders",
  props: js(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Fe(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = Rs(), {
      someSelected: r,
      allSelected: s,
      selectAll: c,
      showSelectAll: d
    } = vl(), {
      columns: f,
      headers: m
    } = gl(), {
      loaderClasses: v
    } = ra(e);
    function b(w, x) {
      if (!(!e.sticky && !w.fixed))
        return {
          position: "sticky",
          left: w.fixed ? X(w.fixedOffset) : void 0,
          top: e.sticky ? `calc(var(--v-table-header-height) * ${x})` : void 0
        };
    }
    function h(w) {
      const x = i.value.find((T) => T.key === w.key);
      return x ? x.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: g,
      backgroundColorStyles: S
    } = Ve(e, "color"), {
      displayClasses: k,
      mobile: A
    } = yt(e), _ = y(() => ({
      headers: m.value,
      columns: f.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: c,
      getSortIcon: h
    })), V = y(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky
    }, k.value, v.value]), P = (w) => {
      let {
        column: x,
        x: T,
        y: C
      } = w;
      const I = x.key === "data-table-select" || x.key === "data-table-expand", p = N(e.headerProps ?? {}, x.headerProps ?? {});
      return u(La, N({
        tag: "th",
        align: x.align,
        class: [{
          "v-data-table__th--sortable": x.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(x),
          "v-data-table__th--fixed": x.fixed
        }, ...V.value],
        style: {
          width: X(x.width),
          minWidth: X(x.minWidth),
          maxWidth: X(x.maxWidth),
          ...b(x, C)
        },
        colspan: x.colspan,
        rowspan: x.rowspan,
        onClick: x.sortable ? () => l(x) : void 0,
        fixed: x.fixed,
        nowrap: x.nowrap,
        lastFixed: x.lastFixed,
        noPadding: I
      }, p), {
        default: () => {
          var W;
          const F = `header.${x.key}`, z = {
            column: x,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: h
          };
          return t[F] ? t[F](z) : x.key === "data-table-select" ? ((W = t["header.data-table-select"]) == null ? void 0 : W.call(t, z)) ?? (d.value && u(Et, {
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": c
          }, null)) : u("div", {
            class: "v-data-table-header__content"
          }, [u("span", null, [x.title]), x.sortable && !e.disableSort && u(be, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: h(x)
          }, null), e.multiSort && o(x) && u("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...g.value],
            style: S.value
          }, [i.value.findIndex((Z) => Z.key === x.key) + 1])]);
        }
      });
    }, B = () => {
      const w = N(e.headerProps ?? {} ?? {}), x = y(() => f.value.filter((C) => (C == null ? void 0 : C.sortable) && !e.disableSort)), T = y(() => {
        if (f.value.find((I) => I.key === "data-table-select") != null)
          return s.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return u(La, N({
        tag: "th",
        class: [...V.value],
        colspan: m.value.length + 1
      }, w), {
        default: () => [u("div", {
          class: "v-data-table-header__content"
        }, [u(Wi, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: x.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: T.value,
          "onClick:append": () => c(!s.value)
        }, {
          ...t,
          chip: (C) => {
            var I;
            return u(zn, {
              onClick: (I = C.item.raw) != null && I.sortable ? () => l(C.item.raw) : void 0,
              onMousedown: (p) => {
                p.preventDefault(), p.stopPropagation();
              }
            }, {
              default: () => [C.item.title, u(be, {
                class: ["v-data-table__td-sort-icon", o(C.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: h(C.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    R(() => A.value ? u("tr", null, [u(B, null, null)]) : u(le, null, [t.headers ? t.headers(_.value) : m.value.map((w, x) => u("tr", null, [w.map((T, C) => u(P, {
      column: T,
      x: C,
      y: x
    }, null))])), e.loading && u("tr", {
      class: "v-data-table-progress"
    }, [u("th", {
      colspan: f.value.length
    }, [u(ua, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: t.loader
    })])])]));
  }
}), Xh = D({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), Zh = O()({
  name: "VDataTableGroupHeaderRow",
  props: Xh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = As(), {
      isSelected: o,
      isSomeSelected: r,
      select: s
    } = vl(), {
      columns: c
    } = gl(), d = y(() => i([e.item]));
    return () => u("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((f) => {
      var m, v;
      if (f.key === "data-table-group") {
        const b = a(e.item) ? "$expand" : "$next", h = () => l(e.item);
        return ((m = t["data-table-group"]) == null ? void 0 : m.call(t, {
          item: e.item,
          count: d.value.length,
          props: {
            icon: b,
            onClick: h
          }
        })) ?? u(La, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [u(Se, {
            size: "small",
            variant: "text",
            icon: b,
            onClick: h
          }, null), u("span", null, [e.item.value]), u("span", null, [Je("("), d.value.length, Je(")")])]
        });
      }
      if (f.key === "data-table-select") {
        const b = o(d.value), h = r(d.value) && !b, g = (S) => s(d.value, S);
        return ((v = t["data-table-select"]) == null ? void 0 : v.call(t, {
          props: {
            modelValue: b,
            indeterminate: h,
            "onUpdate:modelValue": g
          }
        })) ?? u("td", null, [u(Et, {
          modelValue: b,
          indeterminate: h,
          "onUpdate:modelValue": g
        }, null)]);
      }
      return u("td", null, null);
    })]);
  }
}), Jh = D({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: Ge(),
  onContextmenu: Ge(),
  onDblclick: Ge(),
  ...mn()
}, "VDataTableRow"), to = O()({
  name: "VDataTableRow",
  props: Jh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      displayClasses: a,
      mobile: l
    } = yt(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: s,
      selectAll: c
    } = vl(), {
      isExpanded: d,
      toggleExpand: f
    } = Is(), {
      toggleSort: m,
      sortBy: v,
      isSorted: b
    } = Rs(), {
      columns: h
    } = gl();
    R(() => u("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && h.value.map((g, S) => {
      const k = e.item, A = `item.${g.key}`, _ = `header.${g.key}`, V = {
        index: e.index,
        item: k.raw,
        internalItem: k,
        value: on(k.columns, g.key),
        column: g,
        isSelected: i,
        toggleSelect: o,
        isExpanded: d,
        toggleExpand: f
      }, P = {
        column: g,
        selectAll: c,
        isSorted: b,
        toggleSort: m,
        sortBy: v.value,
        someSelected: r.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, B = typeof e.cellProps == "function" ? e.cellProps({
        index: V.index,
        item: V.item,
        internalItem: V.internalItem,
        value: V.value,
        column: g
      }) : e.cellProps, w = typeof g.cellProps == "function" ? g.cellProps({
        index: V.index,
        item: V.item,
        internalItem: V.internalItem,
        value: V.value
      }) : g.cellProps;
      return u(La, N({
        align: g.align,
        class: {
          "v-data-table__td--expanded-row": g.key === "data-table-expand",
          "v-data-table__td--select-row": g.key === "data-table-select"
        },
        fixed: g.fixed,
        fixedOffset: g.fixedOffset,
        lastFixed: g.lastFixed,
        maxWidth: l.value ? void 0 : g.maxWidth,
        noPadding: g.key === "data-table-select" || g.key === "data-table-expand",
        nowrap: g.nowrap,
        width: l.value ? void 0 : g.width
      }, B, w), {
        default: () => {
          var T, C, I, p, F;
          if (t[A] && !l.value) return (T = t[A]) == null ? void 0 : T.call(t, V);
          if (g.key === "data-table-select")
            return ((C = t["item.data-table-select"]) == null ? void 0 : C.call(t, V)) ?? u(Et, {
              disabled: !k.selectable,
              modelValue: i([k]),
              onClick: uo(() => o(k), ["stop"])
            }, null);
          if (g.key === "data-table-expand")
            return ((I = t["item.data-table-expand"]) == null ? void 0 : I.call(t, V)) ?? u(Se, {
              icon: d(k) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: uo(() => f(k), ["stop"])
            }, null);
          const x = Nt(V.value);
          return l.value ? u(le, null, [u("div", {
            class: "v-data-table__td-title"
          }, [((p = t[_]) == null ? void 0 : p.call(t, P)) ?? g.title]), u("div", {
            class: "v-data-table__td-value"
          }, [((F = t[A]) == null ? void 0 : F.call(t, V)) ?? x])]) : x;
        }
      });
    })]));
  }
}), Ys = D({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...mn()
}, "VDataTableRows"), dn = O()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: Ys(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      columns: l
    } = gl(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = Is(), {
      isSelected: s,
      toggleSelect: c
    } = vl(), {
      toggleGroup: d,
      isGroupOpen: f
    } = As(), {
      t: m
    } = Fe(), {
      mobile: v
    } = yt(e);
    return R(() => {
      var b, h;
      return e.loading && (!e.items.length || a.loading) ? u("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [u("td", {
        colspan: l.value.length
      }, [((b = a.loading) == null ? void 0 : b.call(a)) ?? m(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? u("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [u("td", {
        colspan: l.value.length
      }, [((h = a["no-data"]) == null ? void 0 : h.call(a)) ?? m(e.noDataText)])]) : u(le, null, [e.items.map((g, S) => {
        var _;
        if (g.type === "group") {
          const V = {
            index: S,
            item: g,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: s,
            toggleSelect: c,
            toggleGroup: d,
            isGroupOpen: f
          };
          return a["group-header"] ? a["group-header"](V) : u(Zh, N({
            key: `group-header_${g.id}`,
            item: g
          }, Do(t, ":group-header", () => V)), a);
        }
        const k = {
          index: S,
          item: g.raw,
          internalItem: g,
          columns: l.value,
          isExpanded: r,
          toggleExpand: o,
          isSelected: s,
          toggleSelect: c
        }, A = {
          ...k,
          props: N({
            key: `item_${g.key ?? g.index}`,
            onClick: i.value ? () => {
              o(g);
            } : void 0,
            index: S,
            item: g,
            cellProps: e.cellProps,
            mobile: v.value
          }, Do(t, ":row", () => k), typeof e.rowProps == "function" ? e.rowProps({
            item: k.item,
            index: k.index,
            internalItem: k.internalItem
          }) : e.rowProps)
        };
        return u(le, {
          key: A.props.key
        }, [a.item ? a.item(A) : u(to, A.props, a), r(g) && ((_ = a["expanded-row"]) == null ? void 0 : _.call(a, k))]);
      })]);
    }), {};
  }
}), Gs = D({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...ee(),
  ...Ye(),
  ...ve(),
  ...ge()
}, "VTable"), vn = O()({
  name: "VTable",
  props: Gs(),
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      densityClasses: i
    } = lt(e);
    return R(() => u(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!t.top,
        "v-table--has-bottom": !!t.bottom,
        "v-table--hover": e.hover
      }, l.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var o, r, s;
        return [(o = t.top) == null ? void 0 : o.call(t), t.default ? u("div", {
          class: "v-table__wrapper",
          style: {
            height: X(e.height)
          }
        }, [u("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
      }
    })), {};
  }
}), Qh = D({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function ey(e, n, t, a) {
  const l = e.returnObject ? n : He(n, e.itemValue), i = He(n, e.itemSelectable, !0), o = a.reduce((r, s) => (s.key != null && (r[s.key] = He(n, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? He(n, e.itemValue) : l,
    index: t,
    value: l,
    selectable: i,
    columns: o,
    raw: n
  };
}
function ty(e, n, t) {
  return n.map((a, l) => ey(e, a, l, t));
}
function no(e, n) {
  return {
    items: y(() => ty(e, e.items, n.value))
  };
}
const ao = D({
  ...Ys(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Vs(),
  ...Gi(),
  ...jh(),
  ...Qh(),
  ...$s(),
  ...Ls(),
  ...js(),
  ...Gs()
}, "DataTable"), ny = D({
  ...Ki(),
  ...ao(),
  ...ga(),
  ...Ji()
}, "VDataTable"), ay = O()({
  name: "VDataTable",
  props: ny(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Ui(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = fl(e), {
      page: s,
      itemsPerPage: c
    } = qi(e), {
      disableSort: d
    } = fn(e), {
      columns: f,
      headers: m,
      sortFunctions: v,
      sortRawFunctions: b,
      filterFunctions: h
    } = eo(e, {
      groupBy: l,
      showSelect: M(e, "showSelect"),
      showExpand: M(e, "showExpand")
    }), {
      items: g
    } = no(e, f), S = M(e, "search"), {
      filteredItems: k
    } = ha(e, g, S, {
      transform: (ne) => ne.columns,
      customKeyFilter: h
    }), {
      toggleSort: A
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      sortByWithGroups: _,
      opened: V,
      extractRows: P,
      isGroupOpen: B,
      toggleGroup: w
    } = ul({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      sortedItems: x
    } = Zi(e, k, _, {
      transform: (ne) => ({
        ...ne.raw,
        ...ne.columns
      }),
      sortFunctions: v,
      sortRawFunctions: b
    }), {
      flatItems: T
    } = sl(x, l, V), C = y(() => T.value.length), {
      startIndex: I,
      stopIndex: p,
      pageCount: F,
      setItemsPerPage: z
    } = Xi({
      page: s,
      itemsPerPage: c,
      itemsLength: C
    }), {
      paginatedItems: W
    } = ps({
      items: T,
      startIndex: I,
      stopIndex: p,
      itemsPerPage: c
    }), Z = y(() => P(W.value)), {
      isSelected: J,
      select: L,
      selectAll: $,
      toggleSelect: E,
      someSelected: U,
      allSelected: oe
    } = dl(e, {
      allItems: g,
      currentPage: Z
    }), {
      isExpanded: te,
      toggleExpand: se
    } = rl(e);
    cl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: S
    }), pe({
      VDataTableRows: {
        hideNoData: M(e, "hideNoData"),
        noDataText: M(e, "noDataText"),
        loading: M(e, "loading"),
        loadingText: M(e, "loadingText")
      }
    });
    const H = y(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: F.value,
      toggleSort: A,
      setItemsPerPage: z,
      someSelected: U.value,
      allSelected: oe.value,
      isSelected: J,
      select: L,
      selectAll: $,
      toggleSelect: E,
      isExpanded: te,
      toggleExpand: se,
      isGroupOpen: B,
      toggleGroup: w,
      items: Z.value.map((ne) => ne.raw),
      internalItems: Z.value,
      groupedItems: W.value,
      columns: f.value,
      headers: m.value
    }));
    return R(() => {
      const ne = aa.filterProps(e), ie = cn.filterProps(e), he = dn.filterProps(e), Ce = vn.filterProps(e);
      return u(vn, N({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, Ce), {
        top: () => {
          var q;
          return (q = a.top) == null ? void 0 : q.call(a, H.value);
        },
        default: () => {
          var q, fe, Y, Q, ce, ue;
          return a.default ? a.default(H.value) : u(le, null, [(q = a.colgroup) == null ? void 0 : q.call(a, H.value), !e.hideDefaultHeader && u("thead", {
            key: "thead"
          }, [u(cn, ie, a)]), (fe = a.thead) == null ? void 0 : fe.call(a, H.value), !e.hideDefaultBody && u("tbody", null, [(Y = a["body.prepend"]) == null ? void 0 : Y.call(a, H.value), a.body ? a.body(H.value) : u(dn, N(t, he, {
            items: W.value
          }), a), (Q = a["body.append"]) == null ? void 0 : Q.call(a, H.value)]), (ce = a.tbody) == null ? void 0 : ce.call(a, H.value), (ue = a.tfoot) == null ? void 0 : ue.call(a, H.value)]);
        },
        bottom: () => a.bottom ? a.bottom(H.value) : !e.hideDefaultFooter && u(le, null, [u(va, null, null), u(aa, ne, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), ly = D({
  ...ao(),
  ...Gi(),
  ...is(),
  ...ga()
}, "VDataTableVirtual"), iy = O()({
  name: "VDataTableVirtual",
  props: ly(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Ui(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = fl(e), {
      disableSort: s
    } = fn(e), {
      columns: c,
      headers: d,
      filterFunctions: f,
      sortFunctions: m,
      sortRawFunctions: v
    } = eo(e, {
      groupBy: l,
      showSelect: M(e, "showSelect"),
      showExpand: M(e, "showExpand")
    }), {
      items: b
    } = no(e, c), h = M(e, "search"), {
      filteredItems: g
    } = ha(e, b, h, {
      transform: (ie) => ie.columns,
      customKeyFilter: f
    }), {
      toggleSort: S
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: r
    }), {
      sortByWithGroups: k,
      opened: A,
      extractRows: _,
      isGroupOpen: V,
      toggleGroup: P
    } = ul({
      groupBy: l,
      sortBy: i,
      disableSort: s
    }), {
      sortedItems: B
    } = Zi(e, g, k, {
      transform: (ie) => ({
        ...ie.raw,
        ...ie.columns
      }),
      sortFunctions: m,
      sortRawFunctions: v
    }), {
      flatItems: w
    } = sl(B, l, A), x = y(() => _(w.value)), {
      isSelected: T,
      select: C,
      selectAll: I,
      toggleSelect: p,
      someSelected: F,
      allSelected: z
    } = dl(e, {
      allItems: x,
      currentPage: x
    }), {
      isExpanded: W,
      toggleExpand: Z
    } = rl(e), {
      containerRef: J,
      markerRef: L,
      paddingTop: $,
      paddingBottom: E,
      computedItems: U,
      handleItemResize: oe,
      handleScroll: te,
      handleScrollend: se
    } = os(e, w), H = y(() => U.value.map((ie) => ie.raw));
    cl({
      sortBy: i,
      page: G(1),
      itemsPerPage: G(-1),
      groupBy: l,
      search: h
    }), pe({
      VDataTableRows: {
        hideNoData: M(e, "hideNoData"),
        noDataText: M(e, "noDataText"),
        loading: M(e, "loading"),
        loadingText: M(e, "loadingText")
      }
    });
    const ne = y(() => ({
      sortBy: i.value,
      toggleSort: S,
      someSelected: F.value,
      allSelected: z.value,
      isSelected: T,
      select: C,
      selectAll: I,
      toggleSelect: p,
      isExpanded: W,
      toggleExpand: Z,
      isGroupOpen: V,
      toggleGroup: P,
      items: x.value.map((ie) => ie.raw),
      internalItems: x.value,
      groupedItems: w.value,
      columns: c.value,
      headers: d.value
    }));
    R(() => {
      const ie = cn.filterProps(e), he = dn.filterProps(e), Ce = vn.filterProps(e);
      return u(vn, N({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, Ce), {
        top: () => {
          var q;
          return (q = a.top) == null ? void 0 : q.call(a, ne.value);
        },
        wrapper: () => {
          var q, fe, Y;
          return u("div", {
            ref: J,
            onScrollPassive: te,
            onScrollend: se,
            class: "v-table__wrapper",
            style: {
              height: X(e.height)
            }
          }, [u("table", null, [(q = a.colgroup) == null ? void 0 : q.call(a, ne.value), !e.hideDefaultHeader && u("thead", {
            key: "thead"
          }, [u(cn, N(ie, {
            sticky: e.fixedHeader
          }), a)]), !e.hideDefaultBody && u("tbody", null, [u("tr", {
            ref: L,
            style: {
              height: X($.value),
              border: 0
            }
          }, [u("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (fe = a["body.prepend"]) == null ? void 0 : fe.call(a, ne.value), u(dn, N(t, he, {
            items: H.value
          }), {
            ...a,
            item: (Q) => u(ls, {
              key: Q.internalItem.index,
              renderless: !0,
              "onUpdate:height": (ce) => oe(Q.internalItem.index, ce)
            }, {
              default: (ce) => {
                var de;
                let {
                  itemRef: ue
                } = ce;
                return ((de = a.item) == null ? void 0 : de.call(a, {
                  ...Q,
                  itemRef: ue
                })) ?? u(to, N(Q.props, {
                  ref: ue,
                  key: Q.internalItem.index,
                  index: Q.internalItem.index
                }), a);
              }
            })
          }), (Y = a["body.append"]) == null ? void 0 : Y.call(a, ne.value), u("tr", {
            style: {
              height: X(E.value),
              border: 0
            }
          }, [u("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var q;
          return (q = a.bottom) == null ? void 0 : q.call(a, ne.value);
        }
      });
    });
  }
}), oy = D({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Ki(),
  ...ao(),
  ...Ji()
}, "VDataTableServer"), ry = O()({
  name: "VDataTableServer",
  props: oy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Ui(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = fl(e), {
      page: s,
      itemsPerPage: c
    } = qi(e), {
      disableSort: d
    } = fn(e), f = y(() => parseInt(e.itemsLength, 10)), {
      columns: m,
      headers: v
    } = eo(e, {
      groupBy: l,
      showSelect: M(e, "showSelect"),
      showExpand: M(e, "showExpand")
    }), {
      items: b
    } = no(e, m), {
      toggleSort: h
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      opened: g,
      isGroupOpen: S,
      toggleGroup: k,
      extractRows: A
    } = ul({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      pageCount: _,
      setItemsPerPage: V
    } = Xi({
      page: s,
      itemsPerPage: c,
      itemsLength: f
    }), {
      flatItems: P
    } = sl(b, l, g), {
      isSelected: B,
      select: w,
      selectAll: x,
      toggleSelect: T,
      someSelected: C,
      allSelected: I
    } = dl(e, {
      allItems: b,
      currentPage: b
    }), {
      isExpanded: p,
      toggleExpand: F
    } = rl(e), z = y(() => A(b.value));
    cl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: M(e, "search")
    }), Ae("v-data-table", {
      toggleSort: h,
      sortBy: i
    }), pe({
      VDataTableRows: {
        hideNoData: M(e, "hideNoData"),
        noDataText: M(e, "noDataText"),
        loading: M(e, "loading"),
        loadingText: M(e, "loadingText")
      }
    });
    const W = y(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: _.value,
      toggleSort: h,
      setItemsPerPage: V,
      someSelected: C.value,
      allSelected: I.value,
      isSelected: B,
      select: w,
      selectAll: x,
      toggleSelect: T,
      isExpanded: p,
      toggleExpand: F,
      isGroupOpen: S,
      toggleGroup: k,
      items: z.value.map((Z) => Z.raw),
      internalItems: z.value,
      groupedItems: P.value,
      columns: m.value,
      headers: v.value
    }));
    R(() => {
      const Z = aa.filterProps(e), J = cn.filterProps(e), L = dn.filterProps(e), $ = vn.filterProps(e);
      return u(vn, N({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, $), {
        top: () => {
          var E;
          return (E = a.top) == null ? void 0 : E.call(a, W.value);
        },
        default: () => {
          var E, U, oe, te, se, H;
          return a.default ? a.default(W.value) : u(le, null, [(E = a.colgroup) == null ? void 0 : E.call(a, W.value), !e.hideDefaultHeader && u("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [u(cn, N(J, {
            sticky: e.fixedHeader
          }), a)]), (U = a.thead) == null ? void 0 : U.call(a, W.value), !e.hideDefaultBody && u("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(oe = a["body.prepend"]) == null ? void 0 : oe.call(a, W.value), a.body ? a.body(W.value) : u(dn, N(t, L, {
            items: P.value
          }), a), (te = a["body.append"]) == null ? void 0 : te.call(a, W.value)]), (se = a.tbody) == null ? void 0 : se.call(a, W.value), (H = a.tfoot) == null ? void 0 : H.call(a, W.value)]);
        },
        bottom: () => a.bottom ? a.bottom(W.value) : !e.hideDefaultFooter && u(le, null, [u(va, null, null), u(aa, Z, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), uy = D({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...ee(),
  ...Ne(),
  ...ve()
}, "VContainer"), sy = O()({
  name: "VContainer",
  props: uy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = We(), {
      dimensionStyles: l
    } = ze(e);
    return R(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: [l.value, e.style]
    }, t)), {};
  }
}), Us = ja.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Ks = ja.reduce((e, n) => {
  const t = "offset" + Fn(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), qs = ja.reduce((e, n) => {
  const t = "order" + Fn(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), nr = {
  col: Object.keys(Us),
  offset: Object.keys(Ks),
  order: Object.keys(qs)
};
function cy(e, n, t) {
  let a = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (t === "" || t === !0) || (a += `-${t}`), a.toLowerCase();
  }
}
const dy = ["auto", "start", "end", "center", "baseline", "stretch"], vy = D({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Us,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Ks,
  order: {
    type: [String, Number],
    default: null
  },
  ...qs,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => dy.includes(e)
  },
  ...ee(),
  ...ve()
}, "VCol"), fy = O()({
  name: "VCol",
  props: vy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = y(() => {
      const l = [];
      let i;
      for (i in nr)
        nr[i].forEach((r) => {
          const s = e[r], c = cy(i, r, s);
          c && l.push(c);
        });
      const o = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return jt(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), lo = ["start", "end", "center"], Xs = ["space-between", "space-around", "space-evenly"];
function io(e, n) {
  return ja.reduce((t, a) => {
    const l = e + Fn(a);
    return t[l] = n(), t;
  }, {});
}
const my = [...lo, "baseline", "stretch"], Zs = (e) => my.includes(e), Js = io("align", () => ({
  type: String,
  default: null,
  validator: Zs
})), gy = [...lo, ...Xs], Qs = (e) => gy.includes(e), ec = io("justify", () => ({
  type: String,
  default: null,
  validator: Qs
})), hy = [...lo, ...Xs, "stretch"], tc = (e) => hy.includes(e), nc = io("alignContent", () => ({
  type: String,
  default: null,
  validator: tc
})), ar = {
  align: Object.keys(Js),
  justify: Object.keys(ec),
  alignContent: Object.keys(nc)
}, yy = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function by(e, n, t) {
  let a = yy[e];
  if (t != null) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${t}`, a.toLowerCase();
  }
}
const Sy = D({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: Zs
  },
  ...Js,
  justify: {
    type: String,
    default: null,
    validator: Qs
  },
  ...ec,
  alignContent: {
    type: String,
    default: null,
    validator: tc
  },
  ...nc,
  ...ee(),
  ...ve()
}, "VRow"), ky = O()({
  name: "VRow",
  props: Sy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = y(() => {
      const l = [];
      let i;
      for (i in ar)
        ar[i].forEach((o) => {
          const r = e[o], s = by(i, o, r);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return jt(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), ac = Tt("v-spacer", "div", "VSpacer"), lc = D({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: re,
    default: "$next"
  },
  prevIcon: {
    type: re,
    default: "$prev"
  },
  modeIcon: {
    type: re,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), ti = O()({
  name: "VDatePickerControls",
  props: lc(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = y(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = y(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = y(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = y(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      t("click:prev");
    }
    function s() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function d() {
      t("click:month");
    }
    return R(() => u("div", {
      class: ["v-date-picker-controls"]
    }, [u(Se, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), u(Se, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), u(ac, {
      key: "mode-spacer"
    }, null), u("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [u(Se, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), u(Se, {
      disabled: o.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: s
    }, null)])])), {};
  }
}), xy = D({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: Ge()
}, "VDatePickerHeader"), ni = O()({
  name: "VDatePickerHeader",
  props: xy(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "color");
    function o() {
      t("click");
    }
    function r() {
      t("click:append");
    }
    return R(() => {
      const s = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return u("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: o
      }, [a.prepend && u("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && u(et, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var d;
          return [u("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((d = a.default) == null ? void 0 : d.call(a)) ?? e.header])];
        }
      }), c && u("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? u(me, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var d;
          return [(d = a.append) == null ? void 0 : d.call(a)];
        }
      }) : u(Se, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), wy = D({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function Cy(e) {
  const n = ia(), t = ae(e, "modelValue", [], (v) => Be(v)), a = y(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = ae(e, "year", void 0, (v) => {
    const b = v != null ? Number(v) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), b));
  }, (v) => n.getYear(v)), i = ae(e, "month", void 0, (v) => {
    const b = v != null ? Number(v) : n.getMonth(a.value), h = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(h, b);
  }, (v) => n.getMonth(v)), o = y(() => {
    const v = Number(e.firstDayOfWeek ?? 0);
    return e.weekdays.map((b) => (b + v) % 7);
  }), r = y(() => {
    const v = n.getWeekArray(i.value, e.firstDayOfWeek), b = v.flat(), h = 6 * 7;
    if (e.weeksInMonth === "static" && b.length < h) {
      const g = b[b.length - 1];
      let S = [];
      for (let k = 1; k <= h - b.length; k++)
        S.push(n.addDays(g, k)), k % 7 === 0 && (v.push(S), S = []);
    }
    return v;
  });
  function s(v, b) {
    return v.filter((h) => o.value.includes(n.toJsDate(h).getDay())).map((h, g) => {
      const S = n.toISO(h), k = !n.isSameMonth(h, i.value), A = n.isSameDay(h, n.startOfMonth(i.value)), _ = n.isSameDay(h, n.endOfMonth(i.value)), V = n.isSameDay(h, i.value);
      return {
        date: h,
        isoDate: S,
        formatted: n.format(h, "keyboardDate"),
        year: n.getYear(h),
        month: n.getMonth(h),
        isDisabled: m(h),
        isWeekStart: g % 7 === 0,
        isWeekEnd: g % 7 === 6,
        isToday: n.isSameDay(h, b),
        isAdjacent: k,
        isHidden: k && !e.showAdjacentMonths,
        isStart: A,
        isSelected: t.value.some((P) => n.isSameDay(h, P)),
        isEnd: _,
        isSame: V,
        localized: n.format(h, "dayOfMonth")
      };
    });
  }
  const c = y(() => {
    const v = n.startOfWeek(a.value, e.firstDayOfWeek), b = [];
    for (let g = 0; g <= 6; g++)
      b.push(n.addDays(v, g));
    const h = n.date();
    return s(b, h);
  }), d = y(() => {
    const v = r.value.flat(), b = n.date();
    return s(v, b);
  }), f = y(() => r.value.map((v) => v.length ? Dv(n, v[0]) : null));
  function m(v) {
    if (e.disabled) return !0;
    const b = n.date(v);
    return e.min && n.isAfter(n.date(e.min), b) || e.max && n.isAfter(b, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => n.isSameDay(n.date(h), b)) : typeof e.allowedDates == "function" ? !e.allowedDates(b) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: d,
    daysInWeek: c,
    genDays: s,
    model: t,
    weeksInMonth: r,
    weekDays: o,
    weekNumbers: f
  };
}
const ic = D({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...wy()
}, "VDatePickerMonth"), ai = O()({
  name: "VDatePickerMonth",
  props: ic(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = j(), {
      daysInMonth: i,
      model: o,
      weekNumbers: r
    } = Cy(e), s = ia(), c = G(), d = G(), f = G(!1), m = y(() => f.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (c.value = o.value[0], o.value.length > 1 && (d.value = o.value[o.value.length - 1]));
    const v = y(() => {
      const S = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= S;
    });
    K(i, (S, k) => {
      k && (f.value = s.isBefore(S[0].date, k[0].date));
    });
    function b(S) {
      const k = s.startOfDay(S);
      if (o.value.length === 0 ? c.value = void 0 : o.value.length === 1 && (c.value = o.value[0], d.value = void 0), !c.value)
        c.value = k, o.value = [c.value];
      else if (d.value)
        c.value = S, d.value = void 0, o.value = [c.value];
      else {
        if (s.isSameDay(k, c.value)) {
          c.value = void 0, o.value = [];
          return;
        } else s.isBefore(k, c.value) ? (d.value = s.endOfDay(c.value), c.value = k) : d.value = s.endOfDay(k);
        const A = s.getDiff(d.value, c.value, "days"), _ = [c.value];
        for (let V = 1; V < A; V++) {
          const P = s.addDays(c.value, V);
          _.push(P);
        }
        _.push(d.value), o.value = _;
      }
    }
    function h(S) {
      const k = o.value.findIndex((A) => s.isSameDay(A, S));
      if (k === -1)
        o.value = [...o.value, S];
      else {
        const A = [...o.value];
        A.splice(k, 1), o.value = A;
      }
    }
    function g(S) {
      e.multiple === "range" ? b(S) : e.multiple ? h(S) : o.value = [S];
    }
    return () => u("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && u("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && u("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [Je(" ")]), r.value.map((S) => u("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [S]))]), u(et, {
      name: m.value
    }, {
      default: () => {
        var S;
        return [u("div", {
          ref: l,
          key: (S = i.value[0].date) == null ? void 0 : S.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && s.getWeekdays(e.firstDayOfWeek).map((k) => u("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [k])), i.value.map((k, A) => {
          const _ = {
            props: {
              onClick: () => g(k.date)
            },
            item: k,
            i: A
          };
          return v.value && !k.isSelected && (k.isDisabled = !0), u("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": k.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": k.isHidden,
              "v-date-picker-month__day--selected": k.isSelected,
              "v-date-picker-month__day--week-end": k.isWeekEnd,
              "v-date-picker-month__day--week-start": k.isWeekStart
            }],
            "data-v-date": k.isDisabled ? void 0 : k.isoDate
          }, [(e.showAdjacentMonths || !k.isAdjacent) && u(me, {
            defaults: {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (k.isSelected || k.isToday) && !k.isDisabled ? e.color : void 0,
                disabled: k.isDisabled,
                icon: !0,
                ripple: !1,
                text: k.localized,
                variant: k.isDisabled ? k.isToday ? "outlined" : "text" : k.isToday && !k.isSelected ? "outlined" : "flat",
                onClick: () => g(k.date)
              }
            }
          }, {
            default: () => {
              var V;
              return [((V = a.day) == null ? void 0 : V.call(a, _)) ?? u(Se, _.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), oc = D({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), li = O()({
  name: "VDatePickerMonths",
  props: oc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ia(), i = ae(e, "modelValue"), o = y(() => {
      let r = l.startOfYear(l.date());
      return e.year && (r = l.setYear(r, e.year)), Pt(12).map((s) => {
        const c = l.format(r, "monthShort"), d = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r) || e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))));
        return r = l.getNextMonth(r), {
          isDisabled: d,
          text: c,
          value: s
        };
      });
    });
    return $e(() => {
      i.value = i.value ?? l.getMonth(l.date());
    }), R(() => u("div", {
      class: "v-date-picker-months",
      style: {
        height: X(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((r, s) => {
      var f;
      const c = {
        active: i.value === s,
        color: i.value === s ? e.color : void 0,
        disabled: r.isDisabled,
        rounded: !0,
        text: r.text,
        variant: i.value === r.value ? "flat" : "text",
        onClick: () => d(s)
      };
      function d(m) {
        if (i.value === m) {
          t("update:modelValue", i.value);
          return;
        }
        i.value = m;
      }
      return ((f = a.month) == null ? void 0 : f.call(a, {
        month: r,
        i: s,
        props: c
      })) ?? u(Se, N({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), rc = D({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), ii = O()({
  name: "VDatePickerYears",
  props: rc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ia(), i = ae(e, "modelValue"), o = y(() => {
      const s = l.getYear(l.date());
      let c = s - 100, d = s + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (d = l.getYear(l.date(e.max)));
      let f = l.startOfYear(l.date());
      return f = l.setYear(f, c), Pt(d - c + 1, c).map((m) => {
        const v = l.format(f, "year");
        return f = l.setYear(f, l.getYear(f) + 1), {
          text: v,
          value: m
        };
      });
    });
    $e(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const r = Ta();
    return at(async () => {
      var s;
      await we(), (s = r.el) == null || s.scrollIntoView({
        block: "center"
      });
    }), R(() => u("div", {
      class: "v-date-picker-years",
      style: {
        height: X(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((s, c) => {
      var f;
      const d = {
        ref: i.value === s.value ? r : void 0,
        active: i.value === s.value,
        color: i.value === s.value ? e.color : void 0,
        rounded: !0,
        text: s.text,
        variant: i.value === s.value ? "flat" : "text",
        onClick: () => {
          if (i.value === s.value) {
            t("update:modelValue", i.value);
            return;
          }
          i.value = s.value;
        }
      };
      return ((f = a.year) == null ? void 0 : f.call(a, {
        year: s,
        i: c,
        props: d
      })) ?? u(Se, N({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), Vy = Tt("v-picker-title"), uc = D({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...ol()
}, "VPicker"), lr = O()({
  name: "VPicker",
  props: uc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve(M(e, "color"));
    return R(() => {
      const i = sn.filterProps(e), o = !!(e.title || t.title);
      return u(sn, N(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && u("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [o && u(Vy, {
            key: "picker-title"
          }, {
            default: () => {
              var s;
              return [((s = t.title) == null ? void 0 : s.call(t)) ?? e.title];
            }
          }), t.header && u("div", {
            class: "v-picker__header"
          }, [t.header()])]), u("div", {
            class: "v-picker__body"
          }, [(r = t.default) == null ? void 0 : r.call(t)]), t.actions && u(me, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), Py = D({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...lc(),
  ...ic({
    weeksInMonth: "static"
  }),
  ...Re(oc(), ["modelValue"]),
  ...Re(rc(), ["modelValue"]),
  ...uc({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), Iy = O()({
  name: "VDatePicker",
  props: Py(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ia(), {
      t: i
    } = Fe(), o = ae(e, "modelValue", void 0, (x) => Be(x), (x) => e.multiple ? x : x[0]), r = ae(e, "viewMode"), s = y(() => {
      var T;
      const x = l.date((T = o.value) == null ? void 0 : T[0]);
      return x && l.isValid(x) ? x : l.date();
    }), c = j(Number(e.month ?? l.getMonth(l.startOfMonth(s.value)))), d = j(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(s.value, c.value))))), f = G(!1), m = y(() => e.multiple && o.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(l.date(o.value[0]), "normalDateWithWeekday") : i(e.header)), v = y(() => {
      let x = l.date();
      return x = l.setDate(x, 1), x = l.setMonth(x, c.value), x = l.setYear(x, d.value), l.format(x, "monthAndYear");
    }), b = y(() => `date-picker-header${f.value ? "-reverse" : ""}-transition`), h = y(() => {
      const x = l.date(e.min);
      return e.min && l.isValid(x) ? x : null;
    }), g = y(() => {
      const x = l.date(e.max);
      return e.max && l.isValid(x) ? x : null;
    }), S = y(() => {
      if (e.disabled) return !0;
      const x = [];
      if (r.value !== "month")
        x.push("prev", "next");
      else {
        let T = l.date();
        if (T = l.setYear(T, d.value), T = l.setMonth(T, c.value), h.value) {
          const C = l.addDays(l.startOfMonth(T), -1);
          l.isAfter(h.value, C) && x.push("prev");
        }
        if (g.value) {
          const C = l.addDays(l.endOfMonth(T), 1);
          l.isAfter(C, g.value) && x.push("next");
        }
      }
      return x;
    });
    function k() {
      c.value < 11 ? c.value++ : (d.value++, c.value = 0, w(d.value)), B(c.value);
    }
    function A() {
      c.value > 0 ? c.value-- : (d.value--, c.value = 11, w(d.value)), B(c.value);
    }
    function _() {
      r.value = "month";
    }
    function V() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function P() {
      r.value = r.value === "year" ? "month" : "year";
    }
    function B(x) {
      r.value === "months" && V(), t("update:month", x);
    }
    function w(x) {
      r.value === "year" && P(), t("update:year", x);
    }
    return K(o, (x, T) => {
      const C = Be(T), I = Be(x);
      if (!I.length) return;
      const p = l.date(C[C.length - 1]), F = l.date(I[I.length - 1]), z = l.getMonth(F), W = l.getYear(F);
      z !== c.value && (c.value = z, B(c.value)), W !== d.value && (d.value = W, w(d.value)), f.value = l.isBefore(p, F);
    }), R(() => {
      const x = lr.filterProps(e), T = ti.filterProps(e), C = ni.filterProps(e), I = ai.filterProps(e), p = Re(li.filterProps(e), ["modelValue"]), F = Re(ii.filterProps(e), ["modelValue"]), z = {
        header: m.value,
        transition: b.value
      };
      return u(lr, N(x, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var W;
          return ((W = a.title) == null ? void 0 : W.call(a)) ?? u("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? u(me, {
          defaults: {
            VDatePickerHeader: {
              ...z
            }
          }
        }, {
          default: () => {
            var W;
            return [(W = a.header) == null ? void 0 : W.call(a, z)];
          }
        }) : u(ni, N({
          key: "header"
        }, C, z, {
          onClick: r.value !== "month" ? _ : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => u(le, null, [u(ti, N(T, {
          disabled: S.value,
          text: v.value,
          "onClick:next": k,
          "onClick:prev": A,
          "onClick:month": V,
          "onClick:year": P
        }), null), u(Zn, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? u(li, N({
            key: "date-picker-months"
          }, p, {
            modelValue: c.value,
            "onUpdate:modelValue": [(W) => c.value = W, B],
            min: h.value,
            max: g.value,
            year: d.value
          }), null) : r.value === "year" ? u(ii, N({
            key: "date-picker-years"
          }, F, {
            modelValue: d.value,
            "onUpdate:modelValue": [(W) => d.value = W, w],
            min: h.value,
            max: g.value
          }), null) : u(ai, N({
            key: "date-picker-month"
          }, I, {
            modelValue: o.value,
            "onUpdate:modelValue": (W) => o.value = W,
            month: c.value,
            "onUpdate:month": [(W) => c.value = W, B],
            year: d.value,
            "onUpdate:year": [(W) => d.value = W, w],
            min: h.value,
            max: g.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), _y = D({
  actionText: String,
  bgColor: String,
  color: String,
  icon: re,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...ee(),
  ...Ne(),
  ...Bt({
    size: void 0
  }),
  ...ge()
}, "VEmptyState"), Ay = O()({
  name: "VEmptyState",
  props: _y(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(M(e, "bgColor")), {
      dimensionStyles: r
    } = ze(e), {
      displayClasses: s
    } = yt();
    function c(d) {
      t("click:action", d);
    }
    return R(() => {
      var g, S, k;
      const d = !!(a.actions || e.actionText), f = !!(a.headline || e.headline), m = !!(a.title || e.title), v = !!(a.text || e.text), b = !!(a.media || e.image || e.icon), h = e.size || (e.image ? 200 : 96);
      return u("div", {
        class: ["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, s.value, e.class],
        style: [o.value, r.value, e.style]
      }, [b && u("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? u(me, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: h
          },
          VIcon: {
            size: h,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : u(le, null, [e.image ? u(pt, {
        key: "image",
        src: e.image,
        height: h
      }, null) : e.icon ? u(be, {
        key: "icon",
        color: e.color,
        size: h,
        icon: e.icon
      }, null) : void 0])]), f && u("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [((g = a.headline) == null ? void 0 : g.call(a)) ?? e.headline]), m && u("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [((S = a.title) == null ? void 0 : S.call(a)) ?? e.title]), v && u("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: X(e.textWidth)
        }
      }, [((k = a.text) == null ? void 0 : k.call(a)) ?? e.text]), a.default && u("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), d && u("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [u(me, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            text: e.actionText
          }
        }
      }, {
        default: () => {
          var A;
          return [((A = a.actions) == null ? void 0 : A.call(a, {
            props: {
              onClick: c
            }
          })) ?? u(Se, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), la = Symbol.for("vuetify:v-expansion-panel"), sc = D({
  ...ee(),
  ...Oi()
}, "VExpansionPanelText"), oi = O()({
  name: "VExpansionPanelText",
  props: sc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ye(la);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = Ri(e, a.isSelected);
    return R(() => u(Ua, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [De(u("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && l.value && u("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[wt, a.isSelected.value]])];
      }
    })), {};
  }
}), cc = D({
  color: String,
  expandIcon: {
    type: re,
    default: "$expand"
  },
  collapseIcon: {
    type: re,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...ee(),
  ...Ne()
}, "VExpansionPanelTitle"), ri = O()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: Lt
  },
  props: cc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ye(la);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "color"), {
      dimensionStyles: o
    } = ze(e), r = y(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = y(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return R(() => {
      var c;
      return De(u("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, o.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [u("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = t.default) == null ? void 0 : c.call(t, r.value), !e.hideActions && u(me, {
        defaults: {
          VIcon: {
            icon: s.value
          }
        }
      }, {
        default: () => {
          var d;
          return [u("span", {
            class: "v-expansion-panel-title__icon"
          }, [((d = t.actions) == null ? void 0 : d.call(t, r.value)) ?? u(be, null, null)])];
        }
      })]), [[ct("ripple"), e.ripple]]);
    }), {};
  }
}), dc = D({
  title: String,
  text: String,
  bgColor: String,
  ...je(),
  ...kn(),
  ...Te(),
  ...ve(),
  ...cc(),
  ...sc()
}, "VExpansionPanel"), Ty = O()({
  name: "VExpansionPanel",
  props: dc(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = xn(e, la), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "bgColor"), {
      elevationClasses: o
    } = Ke(e), {
      roundedClasses: r
    } = Me(e), s = y(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = y(() => a.group.items.value.reduce((m, v, b) => (a.group.selected.value.includes(v.id) && m.push(b), m), [])), d = y(() => {
      const m = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && c.value.some((v) => v - m === 1);
    }), f = y(() => {
      const m = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && c.value.some((v) => v - m === -1);
    });
    return Ae(la, a), R(() => {
      const m = !!(t.text || e.text), v = !!(t.title || e.title), b = ri.filterProps(e), h = oi.filterProps(e);
      return u(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": d.value,
          "v-expansion-panel--after-active": f.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => [u("div", {
          class: ["v-expansion-panel__shadow", ...o.value]
        }, null), u(me, {
          defaults: {
            VExpansionPanelTitle: {
              ...b
            },
            VExpansionPanelText: {
              ...h
            }
          }
        }, {
          default: () => {
            var g;
            return [v && u(ri, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), m && u(oi, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (g = t.default) == null ? void 0 : g.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), By = ["default", "accordion", "inset", "popout"], Dy = D({
  flat: Boolean,
  ...Sn(),
  ...fi(dc(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ge(),
  ...ee(),
  ...ve(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => By.includes(e)
  }
}, "VExpansionPanels"), py = O()({
  name: "VExpansionPanels",
  props: Dy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = Ut(e, la), {
      themeClasses: i
    } = ke(e), o = y(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return pe({
      VExpansionPanel: {
        bgColor: M(e, "bgColor"),
        collapseIcon: M(e, "collapseIcon"),
        color: M(e, "color"),
        eager: M(e, "eager"),
        elevation: M(e, "elevation"),
        expandIcon: M(e, "expandIcon"),
        focusable: M(e, "focusable"),
        hideActions: M(e, "hideActions"),
        readonly: M(e, "readonly"),
        ripple: M(e, "ripple"),
        rounded: M(e, "rounded"),
        static: M(e, "static")
      }
    }), R(() => u(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), Ey = D({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...Re(Za({
    active: !0
  }), ["location"]),
  ...gn(),
  ...Ft(),
  ...Ct({
    transition: "fab-transition"
  })
}, "VFab"), My = O()({
  name: "VFab",
  props: Ey(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), l = G(56), i = j(), {
      resizeRef: o
    } = xt((f) => {
      f.length && (l.value = f[0].target.clientHeight);
    }), r = y(() => e.app || e.absolute), s = y(() => {
      var f;
      return r.value ? ((f = e.location) == null ? void 0 : f.split(" ").shift()) ?? "bottom" : !1;
    }), c = y(() => {
      var f;
      return r.value ? ((f = e.location) == null ? void 0 : f.split(" ")[1]) ?? "end" : !1;
    });
    rt(() => e.app, () => {
      const f = hn({
        id: e.name,
        order: y(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: y(() => e.layout ? l.value + 24 : 0),
        elementSize: y(() => l.value + 24),
        active: y(() => e.app && a.value),
        absolute: M(e, "absolute")
      });
      $e(() => {
        i.value = f.layoutItemStyles.value;
      });
    });
    const d = j();
    return R(() => {
      const f = Se.filterProps(e);
      return u("div", {
        ref: d,
        class: ["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: r.value,
          [`v-fab--${c.value}`]: r.value
        }, e.class],
        style: [e.app ? {
          ...i.value
        } : {
          height: "inherit",
          width: void 0
        }, e.style]
      }, [u("div", {
        class: "v-fab__container"
      }, [u(et, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [De(u(Se, N({
          ref: o
        }, f, {
          active: void 0,
          location: void 0
        }), t), [[wt, e.active]])]
      })])]);
    }), {};
  }
}), $y = D({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  ...Rt({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Be(e).every((n) => n != null && typeof n == "object")
  },
  ...ma({
    clearable: !0
  })
}, "VFileInput"), Fy = O()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: $y(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = Fe(), o = ae(e, "modelValue", e.modelValue, (x) => Be(x), (x) => !e.multiple && Array.isArray(x) ? x[0] : x), {
      isFocused: r,
      focus: s,
      blur: c
    } = Ot(e), d = y(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = y(() => (o.value ?? []).reduce((x, T) => {
      let {
        size: C = 0
      } = T;
      return x + C;
    }, 0)), m = y(() => ho(f.value, d.value)), v = y(() => (o.value ?? []).map((x) => {
      const {
        name: T = "",
        size: C = 0
      } = x;
      return e.showSize ? `${T} (${ho(C, d.value)})` : T;
    })), b = y(() => {
      var T;
      const x = ((T = o.value) == null ? void 0 : T.length) ?? 0;
      return e.showSize ? i(e.counterSizeString, x, m.value) : i(e.counterString, x);
    }), h = j(), g = j(), S = j(), k = y(() => r.value || e.active), A = y(() => ["plain", "underlined"].includes(e.variant));
    function _() {
      var x;
      S.value !== document.activeElement && ((x = S.value) == null || x.focus()), r.value || s();
    }
    function V(x) {
      var T;
      (T = S.value) == null || T.click();
    }
    function P(x) {
      a("mousedown:control", x);
    }
    function B(x) {
      var T;
      (T = S.value) == null || T.click(), a("click:control", x);
    }
    function w(x) {
      x.stopPropagation(), _(), we(() => {
        o.value = [], gi(e["onClick:clear"], x);
      });
    }
    return K(o, (x) => {
      (!Array.isArray(x) || !x.length) && S.value && (S.value.value = "");
    }), R(() => {
      const x = !!(l.counter || e.counter), T = !!(x || l.details), [C, I] = Yt(t), {
        modelValue: p,
        ...F
      } = Xe.filterProps(e), z = Ni(e);
      return u(Xe, N({
        ref: h,
        modelValue: o.value,
        "onUpdate:modelValue": (W) => o.value = W,
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": A.value
        }, e.class],
        style: e.style,
        "onClick:prepend": V
      }, C, F, {
        centerAffix: !A.value,
        focused: r.value
      }), {
        ...l,
        default: (W) => {
          let {
            id: Z,
            isDisabled: J,
            isDirty: L,
            isReadonly: $,
            isValid: E
          } = W;
          return u(Hn, N({
            ref: g,
            "prepend-icon": e.prependIcon,
            onMousedown: P,
            onClick: B,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, z, {
            id: Z.value,
            active: k.value || L.value,
            dirty: L.value || e.dirty,
            disabled: J.value,
            focused: r.value,
            error: E.value === !1
          }), {
            ...l,
            default: (U) => {
              var se;
              let {
                props: {
                  class: oe,
                  ...te
                }
              } = U;
              return u(le, null, [u("input", N({
                ref: S,
                type: "file",
                readonly: $.value,
                disabled: J.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (H) => {
                  H.stopPropagation(), $.value && H.preventDefault(), _();
                },
                onChange: (H) => {
                  if (!H.target) return;
                  const ne = H.target;
                  o.value = [...ne.files ?? []];
                },
                onFocus: _,
                onBlur: c
              }, te, I), null), u("div", {
                class: oe
              }, [!!((se = o.value) != null && se.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: v.value,
                totalBytes: f.value,
                totalBytesReadable: m.value
              }) : e.chips ? v.value.map((H) => u(zn, {
                key: H,
                size: "small",
                text: H
              }, null)) : v.value.join(", "))])]);
            }
          });
        },
        details: T ? (W) => {
          var Z, J;
          return u(le, null, [(Z = l.details) == null ? void 0 : Z.call(l, W), x && u(le, null, [u("span", null, null), u(tl, {
            active: !!((J = o.value) != null && J.length),
            value: b.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), St({}, h, g, S);
  }
}), Ly = D({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...ut(),
  ...ee(),
  ...je(),
  ...gn(),
  ...Te(),
  ...ve({
    tag: "footer"
  }),
  ...ge()
}, "VFooter"), Oy = O()({
  name: "VFooter",
  props: Ly(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(M(e, "color")), {
      borderClasses: r
    } = ft(e), {
      elevationClasses: s
    } = Ke(e), {
      roundedClasses: c
    } = Me(e), d = G(32), {
      resizeRef: f
    } = xt((v) => {
      v.length && (d.value = v[0].target.clientHeight);
    }), m = y(() => e.height === "auto" ? d.value : parseInt(e.height, 10));
    return rt(() => e.app, () => {
      const v = hn({
        id: e.name,
        order: y(() => parseInt(e.order, 10)),
        position: y(() => "bottom"),
        layoutSize: m,
        elementSize: y(() => e.height === "auto" ? void 0 : m.value),
        active: y(() => e.app),
        absolute: M(e, "absolute")
      });
      $e(() => {
        a.value = v.layoutItemStyles.value;
      });
    }), R(() => u(e.tag, {
      ref: f,
      class: ["v-footer", l.value, i.value, r.value, s.value, c.value, e.class],
      style: [o.value, e.app ? a.value : {
        height: X(e.height)
      }, e.style]
    }, t)), {};
  }
}), Ry = D({
  ...ee(),
  ...Uf()
}, "VForm"), Ny = O()({
  name: "VForm",
  props: Ry(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Kf(e), i = j();
    function o(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const c = s, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), a("submit", c), c.defaultPrevented || d.then((f) => {
        var v;
        let {
          valid: m
        } = f;
        m && ((v = i.value) == null || v.submit());
      }), c.preventDefault();
    }
    return R(() => {
      var s;
      return u("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: o,
        onSubmit: r
      }, [(s = t.default) == null ? void 0 : s.call(t, l)]);
    }), St(l, i);
  }
}), zy = D({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...Fi()
}, "VHover"), Hy = O()({
  name: "VHover",
  props: zy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = Li(e, (o) => !e.disabled && (a.value = o));
    return () => {
      var o;
      return (o = t.default) == null ? void 0 : o.call(t, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), Wy = D({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  },
  ...Ne(),
  ...ve()
}, "VInfiniteScroll"), ir = dt({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootRef: null,
    rootMargin: String
  },
  emits: {
    intersect: (e, n) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ka((i) => {
    }, e.rootMargin ? {
      rootMargin: e.rootMargin
    } : void 0);
    return K(l, async (i) => {
      t("intersect", e.side, i);
    }), R(() => u("div", {
      class: "v-infinite-scroll-intersect",
      ref: a
    }, [Je(" ")])), {};
  }
}), jy = O()({
  name: "VInfiniteScroll",
  props: Wy(),
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = G("ok"), o = G("ok"), r = y(() => X(e.margin)), s = G(!1);
    function c(V) {
      if (!l.value) return;
      const P = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[P] = V;
    }
    function d() {
      if (!l.value) return 0;
      const V = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[V];
    }
    function f() {
      if (!l.value) return 0;
      const V = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[V];
    }
    function m() {
      if (!l.value) return 0;
      const V = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[V];
    }
    at(() => {
      l.value && (e.side === "start" ? c(f()) : e.side === "both" && c(f() / 2 - m() / 2));
    });
    function v(V, P) {
      V === "start" ? i.value = P : V === "end" && (o.value = P);
    }
    function b(V) {
      return V === "start" ? i.value : o.value;
    }
    let h = 0;
    function g(V, P) {
      s.value = P, s.value && S(V);
    }
    function S(V) {
      if (e.mode !== "manual" && !s.value) return;
      const P = b(V);
      if (!l.value || ["empty", "loading"].includes(P)) return;
      h = f(), v(V, "loading");
      function B(w) {
        v(V, w), we(() => {
          w === "empty" || w === "error" || (w === "ok" && V === "start" && c(f() - h + d()), e.mode !== "manual" && we(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  S(V);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: V,
        done: B
      });
    }
    const {
      t: k
    } = Fe();
    function A(V, P) {
      var x, T, C, I, p;
      if (e.side !== V && e.side !== "both") return;
      const B = () => S(V), w = {
        side: V,
        props: {
          onClick: B,
          color: e.color
        }
      };
      return P === "error" ? (x = t.error) == null ? void 0 : x.call(t, w) : P === "empty" ? ((T = t.empty) == null ? void 0 : T.call(t, w)) ?? u("div", null, [k(e.emptyText)]) : e.mode === "manual" ? P === "loading" ? ((C = t.loading) == null ? void 0 : C.call(t, w)) ?? u(Mn, {
        indeterminate: !0,
        color: e.color
      }, null) : ((I = t["load-more"]) == null ? void 0 : I.call(t, w)) ?? u(Se, {
        variant: "outlined",
        color: e.color,
        onClick: B
      }, {
        default: () => [k(e.loadMoreText)]
      }) : ((p = t.loading) == null ? void 0 : p.call(t, w)) ?? u(Mn, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: _
    } = ze(e);
    R(() => {
      const V = e.tag, P = e.side === "start" || e.side === "both", B = e.side === "end" || e.side === "both", w = e.mode === "intersect";
      return u(V, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": P,
          "v-infinite-scroll--end": B
        }],
        style: _.value
      }, {
        default: () => {
          var x;
          return [u("div", {
            class: "v-infinite-scroll__side"
          }, [A("start", i.value)]), l.value && P && w && u(ir, {
            key: "start",
            side: "start",
            onIntersect: g,
            rootRef: l.value,
            rootMargin: r.value
          }, null), (x = t.default) == null ? void 0 : x.call(t), l.value && B && w && u(ir, {
            key: "end",
            side: "end",
            onIntersect: g,
            rootRef: l.value,
            rootMargin: r.value
          }, null), u("div", {
            class: "v-infinite-scroll__side"
          }, [A("end", o.value)])];
        }
      });
    });
  }
}), vc = Symbol.for("vuetify:v-item-group"), Yy = D({
  ...ee(),
  ...Sn({
    selectedClass: "v-item--selected"
  }),
  ...ve(),
  ...ge()
}, "VItemGroup"), Gy = O()({
  name: "VItemGroup",
  props: Yy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = Ut(e, vc);
    return () => u(e.tag, {
      class: ["v-item-group", a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = t.default) == null ? void 0 : c.call(t, {
          isSelected: l,
          select: i,
          next: o,
          prev: r,
          selected: s.value
        })];
      }
    });
  }
}), Uy = O()({
  name: "VItem",
  props: kn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      select: l,
      toggle: i,
      selectedClass: o,
      value: r,
      disabled: s
    } = xn(e, vc);
    return () => {
      var c;
      return (c = t.default) == null ? void 0 : c.call(t, {
        isSelected: a.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: r.value,
        disabled: s.value
      });
    };
  }
}), Ky = Tt("v-kbd"), qy = D({
  ...ee(),
  ...Ne(),
  ...tu()
}, "VLayout"), Xy = O()({
  name: "VLayout",
  props: qy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = au(e), {
      dimensionStyles: s
    } = ze(e);
    return R(() => {
      var c;
      return u("div", {
        ref: r,
        class: [a.value, e.class],
        style: [s.value, l.value, e.style]
      }, [(c = t.default) == null ? void 0 : c.call(t)]);
    }), {
      getLayoutItem: i,
      items: o
    };
  }
}), Zy = D({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...ee(),
  ...gn()
}, "VLayoutItem"), Jy = O()({
  name: "VLayoutItem",
  props: Zy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutItemStyles: a
    } = hn({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: M(e, "position"),
      elementSize: M(e, "size"),
      layoutSize: M(e, "size"),
      active: M(e, "modelValue"),
      absolute: M(e, "absolute")
    });
    return () => {
      var l;
      return u("div", {
        class: ["v-layout-item", e.class],
        style: [a.value, e.style]
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), Qy = D({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...ee(),
  ...Ne(),
  ...ve(),
  ...Ct({
    transition: "fade-transition"
  })
}, "VLazy"), eb = O()({
  name: "VLazy",
  directives: {
    intersect: oa
  },
  props: Qy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = ze(e), l = ae(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return R(() => De(u(e.tag, {
      class: ["v-lazy", e.class],
      style: [a.value, e.style]
    }, {
      default: () => [l.value && u(et, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t)];
        }
      })]
    }), [[ct("intersect"), {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), tb = D({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...ee()
}, "VLocaleProvider"), nb = O()({
  name: "VLocaleProvider",
  props: tb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = Hd(e);
    return R(() => {
      var l;
      return u("div", {
        class: ["v-locale-provider", a.value, e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), ab = D({
  scrollable: Boolean,
  ...ee(),
  ...Ne(),
  ...ve({
    tag: "main"
  })
}, "VMain"), lb = O()({
  name: "VMain",
  props: ab(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = ze(e), {
      mainStyles: l
    } = nu(), {
      ssrBootStyles: i
    } = yn();
    return R(() => u(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [l.value, i.value, a.value, e.style]
    }, {
      default: () => {
        var o, r;
        return [e.scrollable ? u("div", {
          class: "v-main__scroller"
        }, [(o = t.default) == null ? void 0 : o.call(t)]) : (r = t.default) == null ? void 0 : r.call(t)];
      }
    })), {};
  }
});
function ib(e) {
  let {
    rootEl: n,
    isSticky: t,
    layoutItemStyles: a
  } = e;
  const l = G(!1), i = G(0), o = y(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [t.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: X(i.value)
    } : {
      top: a.value.top
    }];
  });
  at(() => {
    K(t, (c) => {
      c ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), nt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const c = r > window.scrollY ? "up" : "down", d = n.value.getBoundingClientRect(), f = parseFloat(a.value.top ?? 0), m = window.scrollY - Math.max(0, i.value - f), v = d.height + Math.max(i.value, f) - window.scrollY - window.innerHeight, b = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
    d.height < window.innerHeight - f ? (l.value = "top", i.value = f) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + d.top - b, l.value = !0) : c === "down" && v <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && m <= 0 && (b ? l.value !== "top" && (i.value = -m + b + f, l.value = "top") : (i.value = d.top + m, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const ob = 100, rb = 20;
function or(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function rr(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = or(n), l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (l - a) * Math.abs(l), t === e.length - 1 && (n *= 0.5);
  }
  return or(n) * 1e3;
}
function ub() {
  const e = {};
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new nd(rb))).push([l.timeStamp, i]);
    });
  }
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], s = [];
    for (const d of i) {
      if (o[0] - d[0] > ob) break;
      r.push({
        t: d[0],
        d: d[1].clientX
      }), s.push({
        t: d[0],
        d: d[1].clientY
      });
    }
    return {
      x: rr(r),
      y: rr(s),
      get direction() {
        const {
          x: d,
          y: f
        } = this, [m, v] = [Math.abs(d), Math.abs(f)];
        return m > v && d >= 0 ? "right" : m > v && d <= 0 ? "left" : v > m && f >= 0 ? "down" : v > m && f <= 0 ? "up" : sb();
      }
    };
  }
  return {
    addMovement: n,
    endTouch: t,
    getVelocity: a
  };
}
function sb() {
  throw new Error();
}
function cb(e) {
  let {
    el: n,
    isActive: t,
    isTemporary: a,
    width: l,
    touchless: i,
    position: o
  } = e;
  at(() => {
    window.addEventListener("touchstart", k, {
      passive: !0
    }), window.addEventListener("touchmove", A, {
      passive: !1
    }), window.addEventListener("touchend", _, {
      passive: !0
    });
  }), nt(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", A), window.removeEventListener("touchend", _);
  });
  const r = y(() => ["left", "right"].includes(o.value)), {
    addMovement: s,
    endTouch: c,
    getVelocity: d
  } = ub();
  let f = !1;
  const m = G(!1), v = G(0), b = G(0);
  let h;
  function g(P, B) {
    return (o.value === "left" ? P : o.value === "right" ? document.documentElement.clientWidth - P : o.value === "top" ? P : o.value === "bottom" ? document.documentElement.clientHeight - P : _n()) - (B ? l.value : 0);
  }
  function S(P) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const w = o.value === "left" ? (P - b.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - P - b.value) / l.value : o.value === "top" ? (P - b.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - P - b.value) / l.value : _n();
    return B ? Math.max(0, Math.min(1, w)) : w;
  }
  function k(P) {
    if (i.value) return;
    const B = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY, x = 25, T = o.value === "left" ? B < x : o.value === "right" ? B > document.documentElement.clientWidth - x : o.value === "top" ? w < x : o.value === "bottom" ? w > document.documentElement.clientHeight - x : _n(), C = t.value && (o.value === "left" ? B < l.value : o.value === "right" ? B > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : _n());
    (T || C || t.value && a.value) && (h = [B, w], b.value = g(r.value ? B : w, t.value), v.value = S(r.value ? B : w), f = b.value > -20 && b.value < 80, c(P), s(P));
  }
  function A(P) {
    const B = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY;
    if (f) {
      if (!P.cancelable) {
        f = !1;
        return;
      }
      const T = Math.abs(B - h[0]), C = Math.abs(w - h[1]);
      (r.value ? T > C && T > 3 : C > T && C > 3) ? (m.value = !0, f = !1) : (r.value ? C : T) > 3 && (f = !1);
    }
    if (!m.value) return;
    P.preventDefault(), s(P);
    const x = S(r.value ? B : w, !1);
    v.value = Math.max(0, Math.min(1, x)), x > 1 ? b.value = g(r.value ? B : w, !0) : x < 0 && (b.value = g(r.value ? B : w, !1));
  }
  function _(P) {
    if (f = !1, !m.value) return;
    s(P), m.value = !1;
    const B = d(P.changedTouches[0].identifier), w = Math.abs(B.x), x = Math.abs(B.y);
    (r.value ? w > x && w > 400 : x > w && x > 3) ? t.value = B.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || _n()) : t.value = v.value > 0.5;
  }
  const V = y(() => m.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : _n(),
    transition: "none"
  } : void 0);
  return rt(m, () => {
    var w, x;
    const P = ((w = n.value) == null ? void 0 : w.style.transform) ?? null, B = ((x = n.value) == null ? void 0 : x.style.transition) ?? null;
    $e(() => {
      var T, C, I, p;
      (C = n.value) == null || C.style.setProperty("transform", ((T = V.value) == null ? void 0 : T.transform) || "none"), (p = n.value) == null || p.style.setProperty("transition", ((I = V.value) == null ? void 0 : I.transition) || null);
    }), tt(() => {
      var T, C;
      (T = n.value) == null || T.style.setProperty("transform", P), (C = n.value) == null || C.style.setProperty("transition", B);
    });
  }), {
    isDragging: m,
    dragProgress: v,
    dragStyles: V
  };
}
function _n() {
  throw new Error();
}
const db = ["start", "end", "left", "right", "top", "bottom"], vb = D({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => db.includes(e)
  },
  sticky: Boolean,
  ...ut(),
  ...ee(),
  ...Fi(),
  ...mn({
    mobile: null
  }),
  ...je(),
  ...gn(),
  ...Te(),
  ...ve({
    tag: "nav"
  }),
  ...ge()
}, "VNavigationDrawer"), fb = O()({
  name: "VNavigationDrawer",
  props: vb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      isRtl: i
    } = We(), {
      themeClasses: o
    } = ke(e), {
      borderClasses: r
    } = ft(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: c
    } = Ve(M(e, "color")), {
      elevationClasses: d
    } = Ke(e), {
      displayClasses: f,
      mobile: m
    } = yt(e), {
      roundedClasses: v
    } = Me(e), b = mu(), h = ae(e, "modelValue", null, (E) => !!E), {
      ssrBootStyles: g
    } = yn(), {
      scopeId: S
    } = Cn(), k = j(), A = G(!1), {
      runOpenDelay: _,
      runCloseDelay: V
    } = Li(e, (E) => {
      A.value = E;
    }), P = y(() => e.rail && e.expandOnHover && A.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), B = y(() => Bl(e.location, i.value)), w = y(() => e.persistent), x = y(() => !e.permanent && (m.value || e.temporary)), T = y(() => e.sticky && !x.value && B.value !== "bottom");
    rt(() => e.expandOnHover && e.rail != null, () => {
      K(A, (E) => a("update:rail", !E));
    }), rt(() => !e.disableResizeWatcher, () => {
      K(x, (E) => !e.permanent && we(() => h.value = !E));
    }), rt(() => !e.disableRouteWatcher && !!b, () => {
      K(b.currentRoute, () => x.value && (h.value = !1));
    }), K(() => e.permanent, (E) => {
      E && (h.value = !0);
    }), e.modelValue == null && !x.value && (h.value = e.permanent || !m.value);
    const {
      isDragging: C,
      dragProgress: I
    } = cb({
      el: k,
      isActive: h,
      isTemporary: x,
      width: P,
      touchless: M(e, "touchless"),
      position: B
    }), p = y(() => {
      const E = x.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : P.value;
      return C.value ? E * I.value : E;
    }), F = y(() => ["top", "bottom"].includes(e.location) ? 0 : P.value), {
      layoutItemStyles: z,
      layoutItemScrimStyles: W
    } = hn({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: B,
      layoutSize: p,
      elementSize: F,
      active: y(() => h.value || C.value),
      disableTransitions: y(() => C.value),
      absolute: y(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || T.value && typeof Z.value != "string"
      ))
    }), {
      isStuck: Z,
      stickyStyles: J
    } = ib({
      rootEl: k,
      isSticky: T,
      layoutItemStyles: z
    }), L = Ve(y(() => typeof e.scrim == "string" ? e.scrim : null)), $ = y(() => ({
      ...C.value ? {
        opacity: I.value * 0.2,
        transition: "none"
      } : void 0,
      ...W.value
    }));
    return pe({
      VList: {
        bgColor: "transparent"
      }
    }), R(() => {
      const E = l.image || e.image;
      return u(le, null, [u(e.tag, N({
        ref: k,
        onMouseenter: _,
        onMouseleave: V,
        class: ["v-navigation-drawer", `v-navigation-drawer--${B.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": A.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": x.value,
          "v-navigation-drawer--persistent": w.value,
          "v-navigation-drawer--active": h.value,
          "v-navigation-drawer--sticky": T.value
        }, o.value, s.value, r.value, f.value, d.value, v.value, e.class],
        style: [c.value, z.value, g.value, J.value, e.style, ["top", "bottom"].includes(B.value) ? {
          height: "auto"
        } : {}]
      }, S, t), {
        default: () => {
          var U, oe, te;
          return [E && u("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? u(me, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : u(pt, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && u("div", {
            class: "v-navigation-drawer__prepend"
          }, [(U = l.prepend) == null ? void 0 : U.call(l)]), u("div", {
            class: "v-navigation-drawer__content"
          }, [(oe = l.default) == null ? void 0 : oe.call(l)]), l.append && u("div", {
            class: "v-navigation-drawer__append"
          }, [(te = l.append) == null ? void 0 : te.call(l)])];
        }
      }), u(Ht, {
        name: "fade-transition"
      }, {
        default: () => [x.value && (C.value || h.value) && !!e.scrim && u("div", N({
          class: ["v-navigation-drawer__scrim", L.backgroundColorClasses.value],
          style: [$.value, L.backgroundColorStyles.value],
          onClick: () => {
            w.value || (h.value = !1);
          }
        }, S), null)]
      })]);
    }), {
      isStuck: Z
    };
  }
}), mb = dt({
  name: "VNoSsr",
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Qu();
    return () => {
      var l;
      return a.value && ((l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), gb = D({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...Ne(),
  ...da(),
  ...Ra(ma({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), hb = O()({
  name: "VOtpInput",
  props: gb(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      dimensionStyles: i
    } = ze(e), {
      isFocused: o,
      focus: r,
      blur: s
    } = Ot(e), c = ae(e, "modelValue", "", (w) => w == null ? [] : String(w).split(""), (w) => w.join("")), {
      t: d
    } = Fe(), f = y(() => Number(e.length)), m = y(() => Array(f.value).fill(0)), v = j(-1), b = j(), h = j([]), g = y(() => h.value[v.value]);
    function S() {
      if (B(g.value.value)) {
        g.value.value = "";
        return;
      }
      const w = c.value.slice(), x = g.value.value;
      w[v.value] = x;
      let T = null;
      v.value > c.value.length ? T = c.value.length + 1 : v.value + 1 !== f.value && (T = "next"), c.value = w, T && nn(b.value, T);
    }
    function k(w) {
      const x = c.value.slice(), T = v.value;
      let C = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(w.key) && (w.preventDefault(), w.key === "ArrowLeft" ? C = "prev" : w.key === "ArrowRight" ? C = "next" : ["Backspace", "Delete"].includes(w.key) && (x[v.value] = "", c.value = x, v.value > 0 && w.key === "Backspace" ? C = "prev" : requestAnimationFrame(() => {
        var I;
        (I = h.value[T]) == null || I.select();
      })), requestAnimationFrame(() => {
        C != null && nn(b.value, C);
      }));
    }
    function A(w, x) {
      var C, I;
      x.preventDefault(), x.stopPropagation();
      const T = ((C = x == null ? void 0 : x.clipboardData) == null ? void 0 : C.getData("Text").slice(0, f.value)) ?? "";
      B(T) || (c.value = T.split(""), (I = h.value) == null || I[w].blur());
    }
    function _() {
      c.value = [];
    }
    function V(w, x) {
      r(), v.value = x;
    }
    function P() {
      s(), v.value = -1;
    }
    function B(w) {
      return e.type === "number" && /[^0-9]/g.test(w);
    }
    return pe({
      VField: {
        color: y(() => e.color),
        bgColor: y(() => e.color),
        baseColor: y(() => e.baseColor),
        disabled: y(() => e.disabled),
        error: y(() => e.error),
        variant: y(() => e.variant)
      }
    }, {
      scoped: !0
    }), K(c, (w) => {
      w.length === f.value && a("finish", w.join(""));
    }, {
      deep: !0
    }), K(v, (w) => {
      w < 0 || we(() => {
        var x;
        (x = h.value[w]) == null || x.select();
      });
    }), R(() => {
      var T;
      const [w, x] = Yt(t);
      return u("div", N({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, w), [u("div", {
        ref: b,
        class: "v-otp-input__content",
        style: [i.value]
      }, [m.value.map((C, I) => u(le, null, [e.divider && I !== 0 && u("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), u(Hn, {
        focused: o.value && e.focusAll || v.value === I,
        key: I
      }, {
        ...l,
        loader: void 0,
        default: () => u("input", {
          ref: (p) => h.value[I] = p,
          "aria-label": d(e.label, I + 1),
          autofocus: I === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ["v-otp-input__field"],
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: c.value[I],
          onInput: S,
          onFocus: (p) => V(p, I),
          onBlur: P,
          onKeydown: k,
          onPaste: (p) => A(I, p)
        }, null)
      })])), u("input", N({
        class: "v-otp-input-input",
        type: "hidden"
      }, x, {
        value: c.value.join("")
      }), null), u(It, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var C;
          return [((C = l.loader) == null ? void 0 : C.call(l)) ?? u(Mn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (T = l.default) == null ? void 0 : T.call(l)])]);
    }), {
      blur: () => {
        var w;
        (w = h.value) == null || w.some((x) => x.blur());
      },
      focus: () => {
        var w;
        (w = h.value) == null || w[0].focus();
      },
      reset: _,
      isFocused: o
    };
  }
});
function yb(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const bb = D({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...ee()
}, "VParallax"), Sb = O()({
  name: "VParallax",
  props: bb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ka(), {
      resizeRef: i,
      contentRect: o
    } = xt(), {
      height: r
    } = yt(), s = j();
    $e(() => {
      var v;
      a.value = i.value = (v = s.value) == null ? void 0 : v.$el;
    });
    let c;
    K(l, (v) => {
      v ? (c = ki(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", m, {
        passive: !0
      }), m()) : c.removeEventListener("scroll", m);
    }), nt(() => {
      c == null || c.removeEventListener("scroll", m);
    }), K(r, m), K(() => {
      var v;
      return (v = o.value) == null ? void 0 : v.height;
    }, m);
    const d = y(() => 1 - Le(+e.scale));
    let f = -1;
    function m() {
      l.value && (cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var V;
        const v = ((V = s.value) == null ? void 0 : V.$el).querySelector(".v-img__img");
        if (!v) return;
        const b = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, h = c instanceof Document ? window.scrollY : c.scrollTop, g = a.value.getBoundingClientRect().top + h, S = o.value.height, k = g + (S - b) / 2, A = yb((h - k) * d.value), _ = Math.max(1, (d.value * (b - S) + S) / S);
        v.style.setProperty("transform", `translateY(${A}px) scale(${_})`);
      }));
    }
    return R(() => u(pt, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: s,
      cover: !0,
      onLoadstart: m,
      onLoad: m
    }, t)), {};
  }
}), kb = D({
  ...Ja({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), xb = O()({
  name: "VRadio",
  props: kb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      const a = Wt.filterProps(e);
      return u(Wt, N(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), t);
    }), {};
  }
}), wb = D({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Rt(),
  ...Re(Di(), ["multiple"]),
  trueIcon: {
    type: re,
    default: "$radioOn"
  },
  falseIcon: {
    type: re,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), Cb = O()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: wb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = Ue(), i = y(() => e.id || `radio-group-${l}`), o = ae(e, "modelValue");
    return R(() => {
      const [r, s] = Yt(t), c = Xe.filterProps(e), d = Wt.filterProps(e), f = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return u(Xe, N({
        class: ["v-radio-group", e.class],
        style: e.style
      }, r, c, {
        modelValue: o.value,
        "onUpdate:modelValue": (m) => o.value = m,
        id: i.value
      }), {
        ...a,
        default: (m) => {
          let {
            id: v,
            messagesId: b,
            isDisabled: h,
            isReadonly: g
          } = m;
          return u(le, null, [f && u(Nn, {
            id: v.value
          }, {
            default: () => [f]
          }), u(Pu, N(d, {
            id: v.value,
            "aria-describedby": b.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: h.value,
            readonly: g.value,
            "aria-labelledby": f ? v.value : void 0,
            multiple: !1
          }, s, {
            modelValue: o.value,
            "onUpdate:modelValue": (S) => o.value = S
          }), a)]);
        }
      });
    }), {};
  }
}), Vb = D({
  ...da(),
  ...Rt(),
  ...ks(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), Pb = O()({
  name: "VRangeSlider",
  props: Vb(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = j(), o = j(), {
      rtlClasses: r
    } = We();
    function s(T) {
      if (!l.value || !i.value) return;
      const C = Xl(T, l.value.$el, e.direction), I = Xl(T, i.value.$el, e.direction), p = Math.abs(C), F = Math.abs(I);
      return p < F || p === F && C < 0 ? l.value.$el : i.value.$el;
    }
    const c = xs(e), d = ae(e, "modelValue", void 0, (T) => T != null && T.length ? T.map((C) => c.roundValue(C)) : [0, 0]), {
      activeThumbRef: f,
      hasLabels: m,
      max: v,
      min: b,
      mousePressed: h,
      onSliderMousedown: g,
      onSliderTouchstart: S,
      position: k,
      trackContainerRef: A,
      readonly: _
    } = ws({
      props: e,
      steps: c,
      onSliderStart: () => {
        a("start", d.value);
      },
      onSliderEnd: (T) => {
        var p;
        let {
          value: C
        } = T;
        const I = f.value === ((p = l.value) == null ? void 0 : p.$el) ? [C, d.value[1]] : [d.value[0], C];
        !e.strict && I[0] < I[1] && (d.value = I), a("end", d.value);
      },
      onSliderMove: (T) => {
        var F, z, W, Z;
        let {
          value: C
        } = T;
        const [I, p] = d.value;
        !e.strict && I === p && I !== b.value && (f.value = C > I ? (F = i.value) == null ? void 0 : F.$el : (z = l.value) == null ? void 0 : z.$el, (W = f.value) == null || W.focus()), f.value === ((Z = l.value) == null ? void 0 : Z.$el) ? d.value = [Math.min(C, p), p] : d.value = [I, Math.max(I, C)];
      },
      getActiveThumb: s
    }), {
      isFocused: V,
      focus: P,
      blur: B
    } = Ot(e), w = y(() => k(d.value[0])), x = y(() => k(d.value[1]));
    return R(() => {
      const T = Xe.filterProps(e), C = !!(e.label || t.label || t.prepend);
      return u(Xe, N({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!t["tick-label"] || m.value,
          "v-slider--focused": V.value,
          "v-slider--pressed": h.value,
          "v-slider--disabled": e.disabled
        }, r.value, e.class],
        style: e.style,
        ref: o
      }, T, {
        focused: V.value
      }), {
        ...t,
        prepend: C ? (I) => {
          var p, F;
          return u(le, null, [((p = t.label) == null ? void 0 : p.call(t, I)) ?? (e.label ? u(Nn, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (F = t.prepend) == null ? void 0 : F.call(t, I)]);
        } : void 0,
        default: (I) => {
          var z, W;
          let {
            id: p,
            messagesId: F
          } = I;
          return u("div", {
            class: "v-slider__container",
            onMousedown: _.value ? void 0 : g,
            onTouchstartPassive: _.value ? void 0 : S
          }, [u("input", {
            id: `${p.value}_start`,
            name: e.name || p.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[0]
          }, null), u("input", {
            id: `${p.value}_stop`,
            name: e.name || p.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[1]
          }, null), u(Cs, {
            ref: A,
            start: w.value,
            stop: x.value
          }, {
            "tick-label": t["tick-label"]
          }), u(Zl, {
            ref: l,
            "aria-describedby": F.value,
            focused: V && f.value === ((z = l.value) == null ? void 0 : z.$el),
            modelValue: d.value[0],
            "onUpdate:modelValue": (Z) => d.value = [Z, d.value[1]],
            onFocus: (Z) => {
              var J, L, $, E;
              P(), f.value = (J = l.value) == null ? void 0 : J.$el, d.value[0] === d.value[1] && d.value[1] === b.value && Z.relatedTarget !== ((L = i.value) == null ? void 0 : L.$el) && (($ = l.value) == null || $.$el.blur(), (E = i.value) == null || E.$el.focus());
            },
            onBlur: () => {
              B(), f.value = void 0;
            },
            min: b.value,
            max: d.value[1],
            position: w.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          }), u(Zl, {
            ref: i,
            "aria-describedby": F.value,
            focused: V && f.value === ((W = i.value) == null ? void 0 : W.$el),
            modelValue: d.value[1],
            "onUpdate:modelValue": (Z) => d.value = [d.value[0], Z],
            onFocus: (Z) => {
              var J, L, $, E;
              P(), f.value = (J = i.value) == null ? void 0 : J.$el, d.value[0] === d.value[1] && d.value[0] === v.value && Z.relatedTarget !== ((L = l.value) == null ? void 0 : L.$el) && (($ = i.value) == null || $.$el.blur(), (E = l.value) == null || E.$el.focus());
            },
            onBlur: () => {
              B(), f.value = void 0;
            },
            min: d.value[0],
            max: v.value,
            position: x.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Ib = D({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: re,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: re,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean,
  ...ee(),
  ...Ye(),
  ...Bt(),
  ...ve(),
  ...ge()
}, "VRating"), _b = O()({
  name: "VRating",
  props: Ib(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Fe(), {
      themeClasses: l
    } = ke(e), i = ae(e, "modelValue"), o = y(() => Le(parseFloat(i.value), 0, +e.length)), r = y(() => Pt(Number(e.length), 1)), s = y(() => r.value.flatMap((h) => e.halfIncrements ? [h - 0.5, h] : [h])), c = G(-1), d = y(() => s.value.map((h) => {
      const g = e.hover && c.value > -1, S = o.value >= h, k = c.value >= h, _ = (g ? k : S) ? e.fullIcon : e.emptyIcon, V = e.activeColor ?? e.color, P = S || k ? V : e.color;
      return {
        isFilled: S,
        isHovered: k,
        icon: _,
        color: P
      };
    })), f = y(() => [0, ...s.value].map((h) => {
      function g() {
        c.value = h;
      }
      function S() {
        c.value = -1;
      }
      function k() {
        e.disabled || e.readonly || (i.value = o.value === h && e.clearable ? 0 : h);
      }
      return {
        onMouseenter: e.hover ? g : void 0,
        onMouseleave: e.hover ? S : void 0,
        onClick: k
      };
    })), m = y(() => e.name ?? `v-rating-${Ue()}`);
    function v(h) {
      var w, x;
      let {
        value: g,
        index: S,
        showStar: k = !0
      } = h;
      const {
        onMouseenter: A,
        onMouseleave: _,
        onClick: V
      } = f.value[S + 1], P = `${m.value}-${String(g).replace(".", "-")}`, B = {
        color: (w = d.value[S]) == null ? void 0 : w.color,
        density: e.density,
        disabled: e.disabled,
        icon: (x = d.value[S]) == null ? void 0 : x.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return u(le, null, [u("label", {
        for: P,
        class: {
          "v-rating__item--half": e.halfIncrements && g % 1 > 0,
          "v-rating__item--full": e.halfIncrements && g % 1 === 0
        },
        onMouseenter: A,
        onMouseleave: _,
        onClick: V
      }, [u("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, g, e.length)]), k ? t.item ? t.item({
        ...d.value[S],
        props: B,
        value: g,
        index: S,
        rating: o.value
      }) : u(Se, N({
        "aria-label": a(e.itemAriaLabel, g, e.length)
      }, B), null) : void 0]), u("input", {
        class: "v-rating__hidden",
        name: m.value,
        id: P,
        type: "radio",
        value: g,
        checked: o.value === g,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function b(h) {
      return t["item-label"] ? t["item-label"](h) : h.label ? u("span", null, [h.label]) : u("span", null, [Je(" ")]);
    }
    return R(() => {
      var g;
      const h = !!((g = e.itemLabels) != null && g.length) || t["item-label"];
      return u(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [u(v, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), r.value.map((S, k) => {
          var A, _;
          return u("div", {
            class: "v-rating__wrapper"
          }, [h && e.itemLabelPosition === "top" ? b({
            value: S,
            index: k,
            label: (A = e.itemLabels) == null ? void 0 : A[k]
          }) : void 0, u("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? u(le, null, [u(v, {
            value: S - 0.5,
            index: k * 2
          }, null), u(v, {
            value: S,
            index: k * 2 + 1
          }, null)]) : u(v, {
            value: S,
            index: k
          }, null)]), h && e.itemLabelPosition === "bottom" ? b({
            value: S,
            index: k,
            label: (_ = e.itemLabels) == null ? void 0 : _[k]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), Ab = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function Tb(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return u("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [n]);
}
function ur(e) {
  const [n, t] = e.split("@");
  return Array.from({
    length: t
  }).map(() => hl(n));
}
function hl(e) {
  let n = [];
  if (!e) return n;
  const t = Ab[e];
  if (e !== t) {
    if (e.includes(",")) return sr(e);
    if (e.includes("@")) return ur(e);
    t.includes(",") ? n = sr(t) : t.includes("@") ? n = ur(t) : t && n.push(hl(t));
  }
  return [Tb(e, n)];
}
function sr(e) {
  return e.replace(/\s/g, "").split(",").map(hl);
}
const Bb = D({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...Ne(),
  ...je(),
  ...ge()
}, "VSkeletonLoader"), Db = O()({
  name: "VSkeletonLoader",
  props: Bb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve(M(e, "color")), {
      dimensionStyles: i
    } = ze(e), {
      elevationClasses: o
    } = Ke(e), {
      themeClasses: r
    } = ke(e), {
      t: s
    } = Fe(), c = y(() => hl(Be(e.type).join(",")));
    return R(() => {
      var m;
      const d = !t.default || e.loading, f = e.boilerplate || !d ? {} : {
        ariaLive: "polite",
        ariaLabel: s(e.loadingText),
        role: "alert"
      };
      return u("div", N({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, r.value, a.value, o.value],
        style: [l.value, d ? i.value : {}]
      }, f), [d ? c.value : (m = t.default) == null ? void 0 : m.call(t)]);
    }), {};
  }
}), pb = O()({
  name: "VSlideGroupItem",
  props: kn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = xn(e, Mu);
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function Eb(e) {
  const n = G(e());
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), we(() => n.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const d = performance.now() - c + s;
      n.value = Math.max(e() - d, 0), n.value <= 0 && a();
    }, s);
  }
  return tt(a), {
    clear: a,
    time: n,
    start: i,
    reset: l
  };
}
const Mb = D({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...Ft({
    location: "bottom"
  }),
  ...On(),
  ...Te(),
  ...bt(),
  ...ge(),
  ...Re(fa({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), $b = O()({
  name: "VSnackbar",
  props: Mb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), {
      positionClasses: l
    } = Rn(e), {
      scopeId: i
    } = Cn(), {
      themeClasses: o
    } = ke(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = bn(e), {
      roundedClasses: d
    } = Me(e), f = Eb(() => Number(e.timeout)), m = j(), v = j(), b = G(!1), h = G(0), g = j(), S = ye(Xn, void 0);
    rt(() => !!S, () => {
      const C = nu();
      $e(() => {
        g.value = C.mainStyles.value;
      });
    }), K(a, A), K(() => e.timeout, A), at(() => {
      a.value && A();
    });
    let k = -1;
    function A() {
      f.reset(), window.clearTimeout(k);
      const C = Number(e.timeout);
      if (!a.value || C === -1) return;
      const I = vi(v.value);
      f.start(I), k = window.setTimeout(() => {
        a.value = !1;
      }, C);
    }
    function _() {
      f.reset(), window.clearTimeout(k);
    }
    function V() {
      b.value = !0, _();
    }
    function P() {
      b.value = !1, A();
    }
    function B(C) {
      h.value = C.touches[0].clientY;
    }
    function w(C) {
      Math.abs(h.value - C.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function x() {
      b.value && P();
    }
    const T = y(() => e.location.split(" ").reduce((C, I) => (C[`v-snackbar--${I}`] = !0, C), {}));
    return R(() => {
      const C = It.filterProps(e), I = !!(t.default || t.text || e.text);
      return u(It, N({
        ref: m,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, T.value, l.value, e.class],
        style: [g.value, e.style]
      }, C, {
        modelValue: a.value,
        "onUpdate:modelValue": (p) => a.value = p,
        contentProps: N({
          class: ["v-snackbar__wrapper", o.value, r.value, d.value, c.value],
          style: [s.value],
          onPointerenter: V,
          onPointerleave: P
        }, C.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: B,
        onTouchend: w,
        onAfterLeave: x
      }, i), {
        default: () => {
          var p, F;
          return [Gt(!1, "v-snackbar"), e.timer && !b.value && u("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [u(qa, {
            ref: v,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": f.time.value
          }, null)]), I && u("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((p = t.text) == null ? void 0 : p.call(t)) ?? e.text, (F = t.default) == null ? void 0 : F.call(t)]), t.actions && u(me, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), St({}, m);
  }
}), fc = D({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: Boolean,
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), mc = D({
  autoLineWidth: Boolean,
  ...fc()
}, "VBarline"), cr = O()({
  name: "VBarline",
  props: mc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ue(), l = y(() => e.id || `barline-${a}`), i = y(() => Number(e.autoDrawDuration) || 500), o = y(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), r = y(() => parseFloat(e.lineWidth) || 4), s = y(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = y(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), d = y(() => e.modelValue.map((h) => He(h, e.itemValue, h)));
    function f(h, g) {
      const {
        minX: S,
        maxX: k,
        minY: A,
        maxY: _
      } = g, V = h.length;
      let P = e.max != null ? Number(e.max) : Math.max(...h), B = e.min != null ? Number(e.min) : Math.min(...h);
      B > 0 && e.min == null && (B = 0), P < 0 && e.max == null && (P = 0);
      const w = k / V, x = (_ - A) / (P - B || 1), T = _ - Math.abs(B * x);
      return h.map((C, I) => {
        const p = Math.abs(x * C);
        return {
          x: S + I * w,
          y: T - p + +(C < 0) * p,
          height: p,
          value: C
        };
      });
    }
    const m = y(() => {
      const h = [], g = f(d.value, c.value), S = g.length;
      for (let k = 0; h.length < S; k++) {
        const A = g[k];
        let _ = e.labels[k];
        _ || (_ = typeof A == "object" ? A.value : A), h.push({
          x: A.x,
          value: String(_)
        });
      }
      return h;
    }), v = y(() => f(d.value, c.value)), b = y(() => (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2);
    R(() => {
      const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return u("svg", {
        display: "block"
      }, [u("defs", null, [u("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [h.map((g, S) => u("stop", {
        offset: S / Math.max(h.length - 1, 1),
        "stop-color": g || "currentColor"
      }, null))])]), u("clipPath", {
        id: `${l.value}-clip`
      }, [v.value.map((g) => u("rect", {
        x: g.x + b.value,
        y: g.y,
        width: r.value,
        height: g.height,
        rx: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0,
        ry: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0
      }, [e.autoDraw && u(le, null, [u("animate", {
        attributeName: "y",
        from: g.y + g.height,
        to: g.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), u("animate", {
        attributeName: "height",
        from: "0",
        to: g.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && u("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [m.value.map((g, S) => {
        var k;
        return u("text", {
          x: g.x + b.value + r.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((k = t.label) == null ? void 0 : k.call(t, {
          index: S,
          value: g.value
        })) ?? g.value]);
      })]), u("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [u("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function Fb(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const s = e[r + 1], c = e[r - 1] || l, d = s && Lb(s, o, c);
    if (!s || d)
      return `L${o.x} ${o.y}`;
    const f = Math.min(dr(c, o), dr(s, o)), v = f / 2 < n ? f / 2 : n, b = vr(c, o, v), h = vr(s, o, v);
    return `L${b.x} ${b.y}S${o.x} ${o.y} ${h.x} ${h.y}`;
  }).join("") + (t ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function Va(e) {
  return parseInt(e, 10);
}
function Lb(e, n, t) {
  return Va(e.x + t.x) === Va(2 * n.x) && Va(e.y + t.y) === Va(2 * n.y);
}
function dr(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function vr(e, n, t) {
  const a = {
    x: e.x - n.x,
    y: e.y - n.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: n.x + i.x * t,
    y: n.y + i.y * t
  };
}
const gc = D({
  fill: Boolean,
  ...fc()
}, "VTrendline"), fr = O()({
  name: "VTrendline",
  props: gc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ue(), l = y(() => e.id || `trendline-${a}`), i = y(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = j(0), r = j(null);
    function s(g, S) {
      const {
        minX: k,
        maxX: A,
        minY: _,
        maxY: V
      } = S, P = g.length, B = e.max != null ? Number(e.max) : Math.max(...g), w = e.min != null ? Number(e.min) : Math.min(...g), x = (A - k) / (P - 1), T = (V - _) / (B - w || 1);
      return g.map((C, I) => ({
        x: k + I * x,
        y: V - (C - w) * T,
        value: C
      }));
    }
    const c = y(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), d = y(() => parseFloat(e.lineWidth) || 4), f = y(() => Number(e.width)), m = y(() => {
      const g = Number(e.padding);
      return {
        minX: g,
        maxX: f.value - g,
        minY: g,
        maxY: parseInt(e.height, 10) - g
      };
    }), v = y(() => e.modelValue.map((g) => He(g, e.itemValue, g))), b = y(() => {
      const g = [], S = s(v.value, m.value), k = S.length;
      for (let A = 0; g.length < k; A++) {
        const _ = S[A];
        let V = e.labels[A];
        V || (V = typeof _ == "object" ? _.value : _), g.push({
          x: _.x,
          value: String(V)
        });
      }
      return g;
    });
    K(() => e.modelValue, async () => {
      if (await we(), !e.autoDraw || !r.value) return;
      const g = r.value, S = g.getTotalLength();
      e.fill ? (g.style.transformOrigin = "bottom center", g.style.transition = "none", g.style.transform = "scaleY(0)", g.getBoundingClientRect(), g.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, g.style.transform = "scaleY(1)") : (g.style.strokeDasharray = `${S}`, g.style.strokeDashoffset = `${S}`, g.getBoundingClientRect(), g.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, g.style.strokeDashoffset = "0"), o.value = S;
    }, {
      immediate: !0
    });
    function h(g) {
      return Fb(s(v.value, m.value), e.smooth ? 8 : Number(e.smooth), g, parseInt(e.height, 10));
    }
    R(() => {
      var S;
      const g = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return u("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [u("defs", null, [u("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [g.map((k, A) => u("stop", {
        offset: A / Math.max(g.length - 1, 1),
        "stop-color": k || "currentColor"
      }, null))])]), c.value && u("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [b.value.map((k, A) => {
        var _;
        return u("text", {
          x: k.x + d.value / 2 + d.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((_ = t.label) == null ? void 0 : _.call(t, {
          index: A,
          value: k.value
        })) ?? k.value]);
      })]), u("path", {
        ref: r,
        d: h(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && u("path", {
        d: h(!1),
        fill: "none",
        stroke: e.color ?? ((S = e.gradient) == null ? void 0 : S[0])
      }, null)]);
    });
  }
}), Ob = D({
  type: {
    type: String,
    default: "trend"
  },
  ...mc(),
  ...gc()
}, "VSparkline"), Rb = O()({
  name: "VSparkline",
  props: Ob(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = qe(M(e, "color")), i = y(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), o = y(() => {
      let r = parseInt(e.height, 10);
      return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    R(() => {
      const r = e.type === "trend" ? fr : cr, s = e.type === "trend" ? fr.filterProps(e) : cr.filterProps(e);
      return u(r, N({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, s), t);
    });
  }
}), Nb = D({
  ...ee(),
  ...as({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), zb = O()({
  name: "VSpeedDial",
  props: Nb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), l = j(), i = y(() => {
      var c;
      const [r, s = "center"] = ((c = e.location) == null ? void 0 : c.split(" ")) ?? [];
      return `${r} ${s}`;
    }), o = y(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return R(() => {
      const r = $n.filterProps(e);
      return u($n, N(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...t,
        default: (s) => u(me, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [u(et, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, s)];
            }
          })]
        })
      });
    }), {};
  }
}), oo = Symbol.for("vuetify:v-stepper"), hc = D({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), yc = O()({
  name: "VStepperActions",
  props: hc(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Fe();
    function i() {
      t("click:prev");
    }
    function o() {
      t("click:next");
    }
    return R(() => {
      const r = {
        onClick: i
      }, s = {
        onClick: o
      };
      return u("div", {
        class: "v-stepper-actions"
      }, [u(me, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.prev) == null ? void 0 : c.call(a, {
            props: r
          })) ?? u(Se, r, null)];
        }
      }), u(me, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.next) == null ? void 0 : c.call(a, {
            props: s
          })) ?? u(Se, s, null)];
        }
      })]);
    }), {};
  }
}), bc = Tt("v-stepper-header"), Hb = D({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: String,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: String,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: String,
    default: "$error"
  },
  icon: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), Wb = D({
  ...Hb(),
  ...kn()
}, "VStepperItem"), Sc = O()({
  name: "VStepperItem",
  directives: {
    Ripple: Lt
  },
  props: Wb(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = xn(e, oo, !0), l = y(() => (a == null ? void 0 : a.value.value) ?? e.value), i = y(() => e.rules.every((m) => m() === !0)), o = y(() => !e.disabled && e.editable), r = y(() => !e.disabled && e.editable), s = y(() => e.error || !i.value), c = y(() => e.complete || e.rules.length > 0 && i.value), d = y(() => s.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), f = y(() => ({
      canEdit: r.value,
      hasError: s.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return R(() => {
      var g, S, k;
      const m = (!a || a.isSelected.value || c.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || t.title), b = !!(e.subtitle != null || t.subtitle);
      function h() {
        a == null || a.toggle();
      }
      return De(u("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        onClick: h
      }, [o.value && Gt(!0, "v-stepper-item"), u(ht, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: m ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var A;
          return [((A = t.icon) == null ? void 0 : A.call(t, f.value)) ?? (d.value ? u(be, {
            icon: d.value
          }, null) : l.value)];
        }
      }), u("div", {
        class: "v-stepper-item__content"
      }, [v && u("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((g = t.title) == null ? void 0 : g.call(t, f.value)) ?? e.title]), b && u("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((S = t.subtitle) == null ? void 0 : S.call(t, f.value)) ?? e.subtitle]), (k = t.default) == null ? void 0 : k.call(t, f.value)])]), [[ct("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), jb = D({
  ...Re(ll(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), kc = O()({
  name: "VStepperWindow",
  props: jb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ye(oo, null), l = ae(e, "modelValue"), i = y({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return R(() => {
      const o = rn.filterProps(e);
      return u(rn, N({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), Yb = D({
  ...il()
}, "VStepperWindowItem"), xc = O()({
  name: "VStepperWindowItem",
  props: Yb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      const a = un.filterProps(e);
      return u(un, N({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), Gb = D({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: String,
  editIcon: String,
  editable: Boolean,
  errorIcon: String,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...mn()
}, "Stepper"), Ub = D({
  ...Gb(),
  ...Sn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...ol(),
  ...Ra(hc(), ["prevText", "nextText"])
}, "VStepper"), Kb = O()({
  name: "VStepper",
  props: Ub(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: i,
      selected: o
    } = Ut(e, oo), {
      displayClasses: r,
      mobile: s
    } = yt(e), {
      completeIcon: c,
      editIcon: d,
      errorIcon: f,
      color: m,
      editable: v,
      prevText: b,
      nextText: h
    } = fn(e), g = y(() => e.items.map((A, _) => {
      const V = He(A, e.itemTitle, A), P = He(A, e.itemValue, _ + 1);
      return {
        title: V,
        value: P,
        raw: A
      };
    })), S = y(() => a.value.findIndex((A) => o.value.includes(A.id))), k = y(() => e.disabled ? e.disabled : S.value === 0 ? "prev" : S.value === a.value.length - 1 ? "next" : !1);
    return pe({
      VStepperItem: {
        editable: v,
        errorIcon: f,
        completeIcon: c,
        editIcon: d,
        prevText: b,
        nextText: h
      },
      VStepperActions: {
        color: m,
        disabled: k,
        prevText: b,
        nextText: h
      }
    }), R(() => {
      const A = sn.filterProps(e), _ = !!(t.header || e.items.length), V = e.items.length > 0, P = !e.hideActions && !!(V || t.actions);
      return u(sn, N(A, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": s.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var B, w;
          return [_ && u(bc, {
            key: "stepper-header"
          }, {
            default: () => [g.value.map((x, T) => {
              let {
                raw: C,
                ...I
              } = x;
              return u(le, null, [!!T && u(va, null, null), u(Sc, I, {
                default: t[`header-item.${I.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), V && u(kc, {
            key: "stepper-window"
          }, {
            default: () => [g.value.map((x) => u(xc, {
              value: x.value
            }, {
              default: () => {
                var T, C;
                return ((T = t[`item.${x.value}`]) == null ? void 0 : T.call(t, x)) ?? ((C = t.item) == null ? void 0 : C.call(t, x));
              }
            }))]
          }), (B = t.default) == null ? void 0 : B.call(t, {
            prev: i,
            next: l
          }), P && (((w = t.actions) == null ? void 0 : w.call(t, {
            next: l,
            prev: i
          })) ?? u(yc, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), qb = D({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...Rt(),
  ...Ja()
}, "VSwitch"), Xb = O()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: qb(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ae(e, "indeterminate"), i = ae(e, "modelValue"), {
      loaderClasses: o
    } = ra(e), {
      isFocused: r,
      focus: s,
      blur: c
    } = Ot(e), d = j(), f = xe && window.matchMedia("(forced-colors: active)").matches, m = y(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), v = Ue(), b = y(() => e.id || `switch-${v}`);
    function h() {
      l.value && (l.value = !1);
    }
    function g(S) {
      var k, A;
      S.stopPropagation(), S.preventDefault(), (A = (k = d.value) == null ? void 0 : k.input) == null || A.click();
    }
    return R(() => {
      const [S, k] = Yt(t), A = Xe.filterProps(e), _ = Wt.filterProps(e);
      return u(Xe, N({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, S, A, {
        modelValue: i.value,
        "onUpdate:modelValue": (V) => i.value = V,
        id: b.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (V) => {
          let {
            id: P,
            messagesId: B,
            isDisabled: w,
            isReadonly: x,
            isValid: T
          } = V;
          const C = {
            model: i,
            isValid: T
          };
          return u(Wt, N({
            ref: d
          }, _, {
            modelValue: i.value,
            "onUpdate:modelValue": [(I) => i.value = I, h],
            id: P.value,
            "aria-describedby": B.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: w.value,
            readonly: x.value,
            onFocus: s,
            onBlur: c
          }, k), {
            ...a,
            default: (I) => {
              let {
                backgroundColorClasses: p,
                backgroundColorStyles: F
              } = I;
              return u("div", {
                class: ["v-switch__track", f ? void 0 : p.value],
                style: F.value,
                onClick: g
              }, [a["track-true"] && u("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](C)]), a["track-false"] && u("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](C)])]);
            },
            input: (I) => {
              let {
                inputNode: p,
                icon: F,
                backgroundColorClasses: z,
                backgroundColorStyles: W
              } = I;
              return u(le, null, [p, u("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": F || e.loading
                }, e.inset || f ? void 0 : z.value],
                style: e.inset ? void 0 : W.value
              }, [a.thumb ? u(me, {
                defaults: {
                  VIcon: {
                    icon: F,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...C,
                  icon: F
                })]
              }) : u(Ii, null, {
                default: () => [e.loading ? u(ua, {
                  name: "v-switch",
                  active: !0,
                  color: T.value === !1 ? void 0 : m.value
                }, {
                  default: (Z) => a.loader ? a.loader(Z) : u(Mn, {
                    active: Z.isActive,
                    color: Z.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : F && u(be, {
                  key: String(F),
                  icon: F,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), Zb = D({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...ee(),
  ...je(),
  ...gn(),
  ...Te(),
  ...ve(),
  ...ge()
}, "VSystemBar"), Jb = O()({
  name: "VSystemBar",
  props: Zb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(M(e, "color")), {
      elevationClasses: o
    } = Ke(e), {
      roundedClasses: r
    } = Me(e), {
      ssrBootStyles: s
    } = yn(), c = y(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: d
    } = hn({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: G("top"),
      layoutSize: c,
      elementSize: c,
      active: y(() => !0),
      absolute: M(e, "absolute")
    });
    return R(() => u(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, o.value, r.value, e.class],
      style: [i.value, d.value, s.value, e.style]
    }, t)), {};
  }
}), ro = Symbol.for("vuetify:v-tabs"), Qb = D({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Re(Za({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), wc = O()({
  name: "VTab",
  props: Qb(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = qe(e, "sliderColor"), o = j(), r = j(), s = y(() => e.direction === "horizontal"), c = y(() => {
      var f, m;
      return ((m = (f = o.value) == null ? void 0 : f.group) == null ? void 0 : m.isSelected.value) ?? !1;
    });
    function d(f) {
      var v, b;
      let {
        value: m
      } = f;
      if (m) {
        const h = (b = (v = o.value) == null ? void 0 : v.$el.parentElement) == null ? void 0 : b.querySelector(".v-tab--selected .v-tab__slider"), g = r.value;
        if (!h || !g) return;
        const S = getComputedStyle(h).color, k = h.getBoundingClientRect(), A = g.getBoundingClientRect(), _ = s.value ? "x" : "y", V = s.value ? "X" : "Y", P = s.value ? "right" : "bottom", B = s.value ? "width" : "height", w = k[_], x = A[_], T = w > x ? k[P] - A[P] : k[_] - A[_], C = Math.sign(T) > 0 ? s.value ? "right" : "bottom" : Math.sign(T) < 0 ? s.value ? "left" : "top" : "center", p = (Math.abs(T) + (Math.sign(T) < 0 ? k[B] : A[B])) / Math.max(k[B], A[B]) || 0, F = k[B] / A[B] || 0, z = 1.5;
        en(g, {
          backgroundColor: [S, "currentcolor"],
          transform: [`translate${V}(${T}px) scale${V}(${F})`, `translate${V}(${T / z}px) scale${V}(${(p - 1) / z + 1})`, "none"],
          transformOrigin: Array(3).fill(C)
        }, {
          duration: 225,
          easing: Kn
        });
      }
    }
    return R(() => {
      const f = Se.filterProps(e);
      return u(Se, N({
        symbol: ro,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, f, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": d
      }), {
        ...t,
        default: () => {
          var m;
          return u(le, null, [((m = t.default) == null ? void 0 : m.call(t)) ?? e.text, !e.hideSlider && u("div", {
            ref: r,
            class: ["v-tab__slider", l.value],
            style: i.value
          }, null)]);
        }
      });
    }), St({}, o);
  }
}), eS = D({
  ...Re(ll(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), Cc = O()({
  name: "VTabsWindow",
  props: eS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ye(ro, null), l = ae(e, "modelValue"), i = y({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return R(() => {
      const o = rn.filterProps(e);
      return u(rn, N({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), tS = D({
  ...il()
}, "VTabsWindowItem"), Vc = O()({
  name: "VTabsWindowItem",
  props: tS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      const a = un.filterProps(e);
      return u(un, N({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
});
function nS(e) {
  return e ? e.map((n) => Gn(n) ? n : {
    text: n,
    value: n
  }) : [];
}
const aS = D({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...pi({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...Ye(),
  ...ve()
}, "VTabs"), lS = O()({
  name: "VTabs",
  props: aS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ae(e, "modelValue"), i = y(() => nS(e.items)), {
      densityClasses: o
    } = lt(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = Ve(M(e, "bgColor")), {
      scopeId: c
    } = Cn();
    return pe({
      VTab: {
        color: M(e, "color"),
        direction: M(e, "direction"),
        stacked: M(e, "stacked"),
        fixed: M(e, "fixedTabs"),
        sliderColor: M(e, "sliderColor"),
        hideSlider: M(e, "hideSlider")
      }
    }), R(() => {
      const d = ta.filterProps(e), f = !!(a.window || e.items.length > 0);
      return u(le, null, [u(ta, N(d, {
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": X(e.height)
        }, s.value, e.style],
        role: "tablist",
        symbol: ro
      }, c, t), {
        default: () => {
          var m;
          return [((m = a.default) == null ? void 0 : m.call(a)) ?? i.value.map((v) => {
            var b;
            return ((b = a.tab) == null ? void 0 : b.call(a, {
              item: v
            })) ?? u(wc, N(v, {
              key: v.text,
              value: v.value
            }), {
              default: a[`tab.${v.value}`] ? () => {
                var h;
                return (h = a[`tab.${v.value}`]) == null ? void 0 : h.call(a, {
                  item: v
                });
              } : void 0
            });
          })];
        }
      }), f && u(Cc, N({
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        key: "tabs-window"
      }, c), {
        default: () => {
          var m;
          return [i.value.map((v) => {
            var b;
            return ((b = a.item) == null ? void 0 : b.call(a, {
              item: v
            })) ?? u(Vc, {
              value: v.value
            }, {
              default: () => {
                var h;
                return (h = a[`item.${v.value}`]) == null ? void 0 : h.call(a, {
                  item: v
                });
              }
            });
          }), (m = a.window) == null ? void 0 : m.call(a)];
        }
      })]);
    }), {};
  }
}), iS = D({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...Rt(),
  ...ma()
}, "VTextarea"), oS = O()({
  name: "VTextarea",
  directives: {
    Intersect: oa
  },
  inheritAttrs: !1,
  props: iS(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = ae(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Ot(e), c = y(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = y(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function f(C, I) {
      var p, F;
      !e.autofocus || !C || (F = (p = I[0].target) == null ? void 0 : p.focus) == null || F.call(p);
    }
    const m = j(), v = j(), b = G(""), h = j(), g = y(() => e.persistentPlaceholder || o.value || e.active);
    function S() {
      var C;
      h.value !== document.activeElement && ((C = h.value) == null || C.focus()), o.value || r();
    }
    function k(C) {
      S(), a("click:control", C);
    }
    function A(C) {
      a("mousedown:control", C);
    }
    function _(C) {
      C.stopPropagation(), S(), we(() => {
        i.value = "", gi(e["onClick:clear"], C);
      });
    }
    function V(C) {
      var p;
      const I = C.target;
      if (i.value = I.value, (p = e.modelModifiers) != null && p.trim) {
        const F = [I.selectionStart, I.selectionEnd];
        we(() => {
          I.selectionStart = F[0], I.selectionEnd = F[1];
        });
      }
    }
    const P = j(), B = j(+e.rows), w = y(() => ["plain", "underlined"].includes(e.variant));
    $e(() => {
      e.autoGrow || (B.value = +e.rows);
    });
    function x() {
      e.autoGrow && we(() => {
        if (!P.value || !v.value) return;
        const C = getComputedStyle(P.value), I = getComputedStyle(v.value.$el), p = parseFloat(C.getPropertyValue("--v-field-padding-top")) + parseFloat(C.getPropertyValue("--v-input-padding-top")) + parseFloat(C.getPropertyValue("--v-field-padding-bottom")), F = P.value.scrollHeight, z = parseFloat(C.lineHeight), W = Math.max(parseFloat(e.rows) * z + p, parseFloat(I.getPropertyValue("--v-input-control-height"))), Z = parseFloat(e.maxRows) * z + p || 1 / 0, J = Le(F ?? 0, W, Z);
        B.value = Math.floor((J - p) / z), b.value = X(J);
      });
    }
    at(x), K(i, x), K(() => e.rows, x), K(() => e.maxRows, x), K(() => e.density, x);
    let T;
    return K(P, (C) => {
      C ? (T = new ResizeObserver(x), T.observe(P.value)) : T == null || T.disconnect();
    }), nt(() => {
      T == null || T.disconnect();
    }), R(() => {
      const C = !!(l.counter || e.counter || e.counterValue), I = !!(C || l.details), [p, F] = Yt(t), {
        modelValue: z,
        ...W
      } = Xe.filterProps(e), Z = Ni(e);
      return u(Xe, N({
        ref: m,
        modelValue: i.value,
        "onUpdate:modelValue": (J) => i.value = J,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": w.value
        }, e.class],
        style: e.style
      }, p, W, {
        centerAffix: B.value === 1 && !w.value,
        focused: o.value
      }), {
        ...l,
        default: (J) => {
          let {
            id: L,
            isDisabled: $,
            isDirty: E,
            isReadonly: U,
            isValid: oe
          } = J;
          return u(Hn, N({
            ref: v,
            style: {
              "--v-textarea-control-height": b.value
            },
            onClick: k,
            onMousedown: A,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, Z, {
            id: L.value,
            active: g.value || E.value,
            centerAffix: B.value === 1 && !w.value,
            dirty: E.value || e.dirty,
            disabled: $.value,
            focused: o.value,
            error: oe.value === !1
          }), {
            ...l,
            default: (te) => {
              let {
                props: {
                  class: se,
                  ...H
                }
              } = te;
              return u(le, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), De(u("textarea", N({
                ref: h,
                class: se,
                value: i.value,
                onInput: V,
                autofocus: e.autofocus,
                readonly: U.value,
                disabled: $.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: S,
                onBlur: s
              }, H, F), null), [[ct("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]), e.autoGrow && De(u("textarea", {
                class: [se, "v-textarea__sizer"],
                id: `${H.id}-sizer`,
                "onUpdate:modelValue": (ne) => i.value = ne,
                ref: P,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[Wc, i.value]]), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: I ? (J) => {
          var L;
          return u(le, null, [(L = l.details) == null ? void 0 : L.call(l, J), C && u(le, null, [u("span", null, null), u(tl, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), St({}, m, v, h);
  }
}), rS = D({
  withBackground: Boolean,
  ...ee(),
  ...ge(),
  ...ve()
}, "VThemeProvider"), uS = O()({
  name: "VThemeProvider",
  props: rS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e);
    return () => {
      var l;
      return e.withBackground ? u(e.tag, {
        class: ["v-theme-provider", a.value, e.class],
        style: e.style
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      }) : (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), sS = D({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: re,
  iconColor: String,
  lineColor: String,
  ...ee(),
  ...Te(),
  ...Bt(),
  ...je()
}, "VTimelineDivider"), cS = O()({
  name: "VTimelineDivider",
  props: sS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = Ln(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = Ve(M(e, "dotColor")), {
      roundedClasses: r
    } = Me(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = Ke(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: d
    } = Ve(M(e, "lineColor"));
    return R(() => u("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [u("div", {
      class: ["v-timeline-divider__before", c.value],
      style: d.value
    }, null), !e.hideDot && u("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", s.value, r.value, a.value],
      style: l.value
    }, [u("div", {
      class: ["v-timeline-divider__inner-dot", o.value, r.value],
      style: i.value
    }, [t.default ? u(me, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, t.default) : u(be, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), u("div", {
      class: ["v-timeline-divider__after", c.value],
      style: d.value
    }, null)])), {};
  }
}), Pc = D({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: re,
  iconColor: String,
  lineInset: [Number, String],
  ...ee(),
  ...Ne(),
  ...je(),
  ...Te(),
  ...Bt(),
  ...ve()
}, "VTimelineItem"), dS = O()({
  name: "VTimelineItem",
  props: Pc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = ze(e), l = G(0), i = j();
    return K(i, (o) => {
      var r;
      o && (l.value = ((r = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : r.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), R(() => {
      var o, r;
      return u("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": X(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${X(e.lineInset)})` : X(0)
        }, e.style]
      }, [u("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(o = t.default) == null ? void 0 : o.call(t)]), u(cS, {
        ref: i,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: t.icon
      }), e.density !== "compact" && u("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((r = t.opposite) == null ? void 0 : r.call(t))])]);
    }), {};
  }
}), vS = D({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  ...Ra(Pc({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...ee(),
  ...Ye(),
  ...ve(),
  ...ge()
}, "VTimeline"), fS = O()({
  name: "VTimeline",
  props: vS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      densityClasses: l
    } = lt(e), {
      rtlClasses: i
    } = We();
    pe({
      VTimelineDivider: {
        lineColor: M(e, "lineColor")
      },
      VTimelineItem: {
        density: M(e, "density"),
        dotColor: M(e, "dotColor"),
        fillDot: M(e, "fillDot"),
        hideOpposite: M(e, "hideOpposite"),
        iconColor: M(e, "iconColor"),
        lineColor: M(e, "lineColor"),
        lineInset: M(e, "lineInset"),
        size: M(e, "size")
      }
    });
    const o = y(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), r = y(() => {
      const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return s;
        case "start":
          return s[0];
        case "end":
          return s[1];
        default:
          return null;
      }
    });
    return R(() => u(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, o.value, i.value, e.class],
      style: [{
        "--v-timeline-line-thickness": X(e.lineThickness)
      }, e.style]
    }, t)), {};
  }
}), mS = D({
  ...ee(),
  ...bt({
    variant: "text"
  })
}, "VToolbarItems"), gS = O()({
  name: "VToolbarItems",
  props: mS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return pe({
      VBtn: {
        color: M(e, "color"),
        height: "inherit",
        variant: M(e, "variant")
      }
    }), R(() => {
      var a;
      return u("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), hS = D({
  id: String,
  text: String,
  ...Re(fa({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), Ic = O()({
  name: "VTooltip",
  props: hS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(e, "modelValue"), {
      scopeId: l
    } = Cn(), i = Ue(), o = y(() => e.id || `v-tooltip-${i}`), r = j(), s = y(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = y(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = y(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), f = y(() => N({
      "aria-describedby": o.value
    }, e.activatorProps));
    return R(() => {
      const m = It.filterProps(e);
      return u(It, N({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: o.value
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (v) => a.value = v,
        transition: d.value,
        absolute: !0,
        location: s.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: f.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var g;
          for (var v = arguments.length, b = new Array(v), h = 0; h < v; h++)
            b[h] = arguments[h];
          return ((g = t.default) == null ? void 0 : g.call(t, ...b)) ?? e.text;
        }
      });
    }), St({}, r);
  }
}), yS = O()({
  name: "VValidation",
  props: Bu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Du(e, "validation");
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, a);
    };
  }
}), bS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: zf,
  VAlertTitle: Cu,
  VApp: qv,
  VAppBar: hf,
  VAppBarNavIcon: Lf,
  VAppBarTitle: Of,
  VAutocomplete: sg,
  VAvatar: ht,
  VBadge: dg,
  VBanner: mg,
  VBannerActions: rs,
  VBannerText: us,
  VBottomNavigation: hg,
  VBottomSheet: bg,
  VBreadcrumbs: wg,
  VBreadcrumbsDivider: cs,
  VBreadcrumbsItem: ds,
  VBtn: Se,
  VBtnGroup: Rl,
  VBtnToggle: wf,
  VCard: Yn,
  VCardActions: vs,
  VCardItem: gs,
  VCardSubtitle: fs,
  VCardText: hs,
  VCardTitle: ms,
  VCarousel: $g,
  VCarouselItem: Lg,
  VCheckbox: Xf,
  VCheckboxBtn: Et,
  VChip: zn,
  VChipGroup: tm,
  VClassIcon: Vi,
  VCode: Og,
  VCol: fy,
  VColorPicker: Ih,
  VCombobox: Th,
  VComponentIcon: Fl,
  VConfirmEdit: Dh,
  VContainer: sy,
  VCounter: tl,
  VDataIterator: zh,
  VDataTable: ay,
  VDataTableFooter: aa,
  VDataTableHeaders: cn,
  VDataTableRow: to,
  VDataTableRows: dn,
  VDataTableServer: ry,
  VDataTableVirtual: iy,
  VDatePicker: Iy,
  VDatePickerControls: ti,
  VDatePickerHeader: ni,
  VDatePickerMonth: ai,
  VDatePickerMonths: li,
  VDatePickerYears: ii,
  VDefaultsProvider: me,
  VDialog: Ul,
  VDialogBottomTransition: Qv,
  VDialogTopTransition: ef,
  VDialogTransition: Ga,
  VDivider: va,
  VEmptyState: Ay,
  VExpandTransition: Ua,
  VExpandXTransition: Ai,
  VExpansionPanel: Ty,
  VExpansionPanelText: oi,
  VExpansionPanelTitle: ri,
  VExpansionPanels: py,
  VFab: My,
  VFabTransition: Jv,
  VFadeTransition: Zn,
  VField: Hn,
  VFieldLabel: jn,
  VFileInput: Fy,
  VFooter: Oy,
  VForm: Ny,
  VHover: Hy,
  VIcon: be,
  VImg: pt,
  VInfiniteScroll: jy,
  VInput: Xe,
  VItem: Uy,
  VItemGroup: Gy,
  VKbd: Ky,
  VLabel: Nn,
  VLayout: Xy,
  VLayoutItem: Jy,
  VLazy: eb,
  VLigatureIcon: Nv,
  VList: el,
  VListGroup: Wl,
  VListImg: Vm,
  VListItem: Mt,
  VListItemAction: Im,
  VListItemMedia: Am,
  VListItemSubtitle: Wu,
  VListItemTitle: ju,
  VListSubheader: Yu,
  VLocaleProvider: nb,
  VMain: lb,
  VMenu: $n,
  VMessages: Au,
  VNavigationDrawer: fb,
  VNoSsr: mb,
  VOtpInput: hb,
  VOverlay: It,
  VPagination: Ql,
  VParallax: Sb,
  VProgressCircular: Mn,
  VProgressLinear: qa,
  VRadio: xb,
  VRadioGroup: Cb,
  VRangeSlider: Pb,
  VRating: _b,
  VResponsive: Ll,
  VRow: ky,
  VScaleTransition: Ii,
  VScrollXReverseTransition: nf,
  VScrollXTransition: tf,
  VScrollYReverseTransition: lf,
  VScrollYTransition: af,
  VSelect: Wi,
  VSelectionControl: Wt,
  VSelectionControlGroup: Pu,
  VSheet: sn,
  VSkeletonLoader: Db,
  VSlideGroup: ta,
  VSlideGroupItem: pb,
  VSlideXReverseTransition: rf,
  VSlideXTransition: of,
  VSlideYReverseTransition: uf,
  VSlideYTransition: _i,
  VSlider: Jl,
  VSnackbar: $b,
  VSpacer: ac,
  VSparkline: Rb,
  VSpeedDial: zb,
  VStepper: Kb,
  VStepperActions: yc,
  VStepperHeader: bc,
  VStepperItem: Sc,
  VStepperWindow: kc,
  VStepperWindowItem: xc,
  VSvgIcon: Ci,
  VSwitch: Xb,
  VSystemBar: Jb,
  VTab: wc,
  VTable: vn,
  VTabs: lS,
  VTabsWindow: Cc,
  VTabsWindowItem: Vc,
  VTextField: $t,
  VTextarea: oS,
  VThemeProvider: uS,
  VTimeline: fS,
  VTimelineItem: dS,
  VToolbar: Ol,
  VToolbarItems: gS,
  VToolbarTitle: Pi,
  VTooltip: Ic,
  VValidation: yS,
  VVirtualScroll: al,
  VWindow: rn,
  VWindowItem: un
}, Symbol.toStringTag, { value: "Module" }));
function SS(e, n) {
  const t = n.modifiers || {}, a = n.value, {
    once: l,
    immediate: i,
    ...o
  } = t, r = !Object.keys(o).length, {
    handler: s,
    options: c
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (o == null ? void 0 : o.attr) ?? r,
      characterData: (o == null ? void 0 : o.char) ?? r,
      childList: (o == null ? void 0 : o.child) ?? r,
      subtree: (o == null ? void 0 : o.sub) ?? r
    }
  }, d = new MutationObserver(function() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], m = arguments.length > 1 ? arguments[1] : void 0;
    s == null || s(f, m), l && _c(e, n);
  });
  i && (s == null || s([], d)), e._mutate = Object(e._mutate), e._mutate[n.instance.$.uid] = {
    observer: d
  }, d.observe(e, c);
}
function _c(e, n) {
  var t;
  (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const kS = {
  mounted: SS,
  unmounted: _c
};
function xS(e, n) {
  var l, i;
  const t = n.value, a = {
    passive: !((l = n.modifiers) != null && l.active)
  };
  window.addEventListener("resize", t, a), e._onResize = Object(e._onResize), e._onResize[n.instance.$.uid] = {
    handler: t,
    options: a
  }, (i = n.modifiers) != null && i.quiet || t();
}
function wS(e, n) {
  var l;
  if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a
  } = e._onResize[n.instance.$.uid];
  window.removeEventListener("resize", t, a), delete e._onResize[n.instance.$.uid];
}
const CS = {
  mounted: xS,
  unmounted: wS
};
function Ac(e, n) {
  const {
    self: t = !1
  } = n.modifiers ?? {}, a = n.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = t ? e : n.arg ? document.querySelector(n.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[n.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: t ? void 0 : o
  });
}
function Tc(e, n) {
  var i;
  if (!((i = e._onScroll) != null && i[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a,
    target: l = e
  } = e._onScroll[n.instance.$.uid];
  l.removeEventListener("scroll", t, a), delete e._onScroll[n.instance.$.uid];
}
function VS(e, n) {
  n.value !== n.oldValue && (Tc(e, n), Ac(e, n));
}
const PS = {
  mounted: Ac,
  unmounted: Tc,
  updated: VS
};
function IS(e, n) {
  const t = typeof e == "string" ? jc(e) : e, a = _S(t, n);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      br(null, l);
    }
  };
}
function _S(e, n) {
  return function(t, a, l) {
    var f, m, v;
    const i = typeof n == "function" ? n(a) : n, o = ((f = a.value) == null ? void 0 : f.text) ?? a.value ?? (i == null ? void 0 : i.text), r = Gn(a.value) ? a.value : {}, s = () => o ?? t.innerHTML, c = (l.ctx === a.instance.$ ? (m = AS(l, a.instance.$)) == null ? void 0 : m.provides : (v = l.ctx) == null ? void 0 : v.provides) ?? a.instance.$.provides, d = jt(e, N(i, r), s);
    d.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: c
    }), br(d, t);
  };
}
function AS(e, n) {
  const t = /* @__PURE__ */ new Set(), a = (i) => {
    var o, r;
    for (const s of i) {
      if (!s) continue;
      if (s === e)
        return !0;
      t.add(s);
      let c;
      if (s.suspense ? c = a([s.ssContent]) : Array.isArray(s.children) ? c = a(s.children) : (o = s.component) != null && o.vnode && (c = a([(r = s.component) == null ? void 0 : r.subTree])), c)
        return c;
      t.delete(s);
    }
    return !1;
  };
  if (!a([n.subTree]))
    throw new Error("Could not find original vnode");
  const l = Array.from(t).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return n;
}
const TS = IS(Ic, (e) => {
  var n;
  return {
    activator: "parent",
    location: ((n = e.arg) == null ? void 0 : n.replace("-", " ")) ?? "top",
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), BS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: ns,
  Intersect: oa,
  Mutate: kS,
  Resize: CS,
  Ripple: Lt,
  Scroll: PS,
  Tooltip: TS,
  Touch: ji
}, Symbol.toStringTag, { value: "Module" })), DS = { style: { display: "flex", gap: "5px" } }, pS = { style: { "margin-top": "-3px", "margin-left": "5px" } }, ES = { style: { "margin-top": "-2px", "font-size": "12px" } }, MS = /* @__PURE__ */ Oe("p", null, "-", -1), $S = { style: { "text-align": "center" } }, FS = { style: { "font-style": "italic" } }, LS = /* @__PURE__ */ Oe("div", null, " particle space ", -1), OS = { style: { "font-size": "12px" } }, RS = /* @__PURE__ */ Oe("div", null, [
  /* @__PURE__ */ Oe("h2", null, "Welcome!"),
  /* @__PURE__ */ Oe("p", null, "Please login to continue")
], -1), NS = /* @__PURE__ */ Oe("div", null, [
  /* @__PURE__ */ Oe("p", null, [
    /* @__PURE__ */ Je("Don't have an Account? "),
    /* @__PURE__ */ Oe("a", { href: "" }, "Register"),
    /* @__PURE__ */ Je(".")
  ]),
  /* @__PURE__ */ Oe("p", null, [
    /* @__PURE__ */ Je("Reset Password? "),
    /* @__PURE__ */ Oe("a", { href: "" }, "Reset"),
    /* @__PURE__ */ Je(".")
  ])
], -1), zS = {
  __name: "Login",
  props: {
    icon: { type: String, default: "mdi-airballoon-outline" },
    titleName: { type: String, default: "Title Here" },
    subtitleName: { type: String, default: "subtitle, make it interesting." },
    teamName: { type: String, default: "@shuashuaa/v-kit" },
    version: { type: String, default: "0.0.1" },
    bgColor: { type: String, default: "#ffffff" },
    lCardColor: { type: String, default: "#0c4b7e" },
    rCardColor: { type: String, default: "#ffffff" },
    loginColor: { type: String, default: "#0c4b7e" },
    loginName: { type: String, default: "Login" },
    loginIcon: { type: String, default: "mdi-login" }
  },
  setup(e) {
    const n = j(!1), t = j(""), a = j(""), l = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1, console.log("Login successful", { username: t.value, password: a.value });
      }, 2e3);
    };
    return (i, o) => (Sr(), Yc(Yn, N({ color: e.bgColor }, i.$props, { style: { display: "flex", "align-items": "center", "justify-content": "center", height: "100svh" } }), {
      default: Xt(() => [
        u(Yn, {
          loading: n.value,
          elevation: "3",
          style: { display: "flex" },
          height: "420",
          width: "670",
          rounded: "lg"
        }, {
          default: Xt(() => [
            u(Yn, {
              style: { display: "flex", "flex-direction": "column", "justify-content": "space-between", padding: "25px", "border-radius": "1px !important" },
              width: "50%",
              color: e.lCardColor
            }, {
              default: Xt(() => [
                Oe("div", null, [
                  Oe("div", DS, [
                    u(be, { size: "35" }, {
                      default: Xt(() => [
                        Je(Nt(e.icon), 1)
                      ]),
                      _: 1
                    }),
                    Oe("div", pS, [
                      Oe("h3", null, Nt(e.titleName), 1),
                      Oe("p", ES, "ver " + Nt(e.version), 1)
                    ])
                  ]),
                  MS,
                  Oe("h2", $S, [
                    Oe("b", FS, '"' + Nt(e.subtitleName) + '".', 1)
                  ])
                ]),
                LS,
                Oe("div", null, [
                  Oe("p", OS, [
                    Je("Powered By: "),
                    Oe("b", null, Nt(e.teamName), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["color"]),
            u(Yn, {
              style: { display: "flex", "flex-direction": "column", "justify-content": "space-around", "border-radius": "1px !important", padding: "25px" },
              width: "50%",
              color: e.rCardColor
            }, {
              default: Xt(() => [
                RS,
                Oe("div", null, [
                  u($t, {
                    modelValue: t.value,
                    "onUpdate:modelValue": o[0] || (o[0] = (r) => t.value = r),
                    density: "compact",
                    label: "EmployeeID",
                    variant: "outlined"
                  }, null, 8, ["modelValue"]),
                  u($t, {
                    modelValue: a.value,
                    "onUpdate:modelValue": o[1] || (o[1] = (r) => a.value = r),
                    density: "compact",
                    label: "Password",
                    variant: "outlined"
                  }, null, 8, ["modelValue"]),
                  u(Se, {
                    onClick: o[2] || (o[2] = (r) => l()),
                    width: "50%",
                    style: { "font-weight": "bold" },
                    color: e.loginColor
                  }, {
                    default: Xt(() => [
                      Je(Nt(e.loginName) + "  ", 1),
                      u(be, null, {
                        default: Xt(() => [
                          Je(Nt(e.loginIcon), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["color"])
                ]),
                NS
              ]),
              _: 1
            }, 8, ["color"])
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 16, ["color"]));
  }
}, HS = {
  __name: "App",
  setup(e) {
    return (n, t) => (Sr(), Gc("div", null, [
      u(zS, {
        titleName: "Automated Server Fetching System",
        subtitleName: "Make your fetching smoother like no other",
        version: "1.0.0",
        bgColor: "white"
      })
    ]));
  }
}, WS = lu({
  components: bS,
  directives: BS,
  icons: {
    defaultSet: "mdi"
  }
});
Uc(HS).use(WS).mount("#app");
const YS = {
  install: (e) => {
    e.component("LoginKit");
  }
};
export {
  zS as LoginKit,
  YS as MyComponentLibrary,
  WS as vuetify
};
