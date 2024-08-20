import { watch as q, onScopeDispose as tt, effectScope as ui, Fragment as le, reactive as mt, computed as b, watchEffect as Fe, toRefs as fn, capitalize as $n, shallowRef as G, isVNode as Mc, Comment as Ec, unref as ot, warn as Oa, getCurrentInstance as Fc, ref as j, inject as ye, provide as pe, defineComponent as $c, camelize as yr, h as Yt, toRaw as Ie, createVNode as s, mergeProps as N, onBeforeUnmount as nt, readonly as ci, onDeactivated as br, onActivated as Lc, onMounted as at, nextTick as we, TransitionGroup as di, Transition as Wt, isRef as Tn, toRef as E, onBeforeMount as Sr, withDirectives as Be, resolveDirective as ct, vShow as wt, onUpdated as Oc, Text as Rc, resolveDynamicComponent as Nc, markRaw as zc, Teleport as Hc, cloneVNode as Wc, createTextVNode as Ke, onUnmounted as jc, onBeforeUpdate as Yc, withModifiers as co, toDisplayString as kr, vModelText as Gc, resolveComponent as Uc, render as xr, openBlock as vi, createBlock as wr, withCtx as zt, createElementVNode as Le, createElementBlock as qc, normalizeProps as Kc, guardReactiveProps as Xc, createApp as Zc } from "vue";
function rt(e, a) {
  let n;
  function t() {
    n = ui(), n.run(() => a.length ? a(() => {
      n == null || n.stop(), t();
    }) : a());
  }
  q(e, (l) => {
    l && !n ? t() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), tt(() => {
    n == null || n.stop();
  });
}
const xe = typeof window < "u", fi = xe && "IntersectionObserver" in window, Jc = xe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), vo = xe && "EyeDropper" in window;
function fo(e, a, n) {
  Qc(e, a), a.set(e, n);
}
function Qc(e, a) {
  if (a.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ed(e, a, n) {
  return e.set(Cr(e, a), n), n;
}
function Zt(e, a) {
  return e.get(Cr(e, a));
}
function Cr(e, a, n) {
  if (typeof e == "function" ? e === a : e.has(a)) return arguments.length < 3 ? a : n;
  throw new TypeError("Private element is not present on this object");
}
function Vr(e, a, n) {
  const t = a.length - 1;
  if (t < 0) return e === void 0 ? n : e;
  for (let l = 0; l < t; l++) {
    if (e == null)
      return n;
    e = e[a[l]];
  }
  return e == null || e[a[t]] === void 0 ? n : e[a[t]];
}
function pt(e, a) {
  if (e === a) return !0;
  if (e instanceof Date && a instanceof Date && e.getTime() !== a.getTime() || e !== Object(e) || a !== Object(a))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(a).length ? !1 : n.every((t) => pt(e[t], a[t]));
}
function on(e, a, n) {
  return e == null || !a || typeof a != "string" ? n : e[a] !== void 0 ? e[a] : (a = a.replace(/\[(\w+)\]/g, ".$1"), a = a.replace(/^\./, ""), Vr(e, a.split("."), n));
}
function He(e, a, n) {
  if (a === !0) return e === void 0 ? n : e;
  if (a == null || typeof a == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof a != "function") return n;
    const l = a(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof a == "string") return on(e, a, n);
  if (Array.isArray(a)) return Vr(e, a, n);
  if (typeof a != "function") return n;
  const t = a(e, n);
  return typeof t > "u" ? n : t;
}
function _t(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, t) => a + t);
}
function X(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${a}` : void 0;
}
function Gn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function mi(e) {
  if (e && "$el" in e) {
    const a = e.$el;
    return (a == null ? void 0 : a.nodeType) === Node.TEXT_NODE ? a.nextElementSibling : a;
  }
  return e;
}
const mo = Object.freeze({
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
}), pl = Object.freeze({
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
function Pr(e) {
  return Object.keys(e);
}
function Qt(e, a) {
  return a.every((n) => e.hasOwnProperty(n));
}
function gi(e, a) {
  const n = {}, t = new Set(Object.keys(e));
  for (const l of a)
    t.has(l) && (n[l] = e[l]);
  return n;
}
function Al(e, a, n) {
  const t = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    a.some((o) => o instanceof RegExp ? o.test(i) : o === i) && !(n != null && n.some((o) => o === i)) ? t[i] = e[i] : l[i] = e[i];
  return [t, l];
}
function Re(e, a) {
  const n = {
    ...e
  };
  return a.forEach((t) => delete n[t]), n;
}
function Ra(e, a) {
  const n = {};
  return a.forEach((t) => n[t] = e[t]), n;
}
const _r = /^on[^a-z]/, Na = (e) => _r.test(e), td = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], nd = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function ad(e) {
  return e.isComposing && nd.includes(e.key);
}
function Gt(e) {
  const [a, n] = Al(e, [_r]), t = Re(a, td), [l, i] = Al(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, a), Object.assign(i, t), [l, i];
}
function Te(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ld(e, a) {
  let n = 0;
  const t = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(n), n = setTimeout(() => e(...i), ot(a));
  };
  return t.clear = () => {
    clearTimeout(n);
  }, t.immediate = e, t;
}
function Oe(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(a, Math.min(n, e));
}
function go(e) {
  const a = e.toString().trim();
  return a.includes(".") ? a.length - a.indexOf(".") - 1 : 0;
}
function ho(e, a) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, a - e.length));
}
function yo(e, a) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, a - e.length)) + e;
}
function id(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let t = 0;
  for (; t < e.length; )
    n.push(e.substr(t, a)), t += a;
  return n;
}
function bo(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < a)
    return `${e} B`;
  const n = a === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let t = -1;
  for (; Math.abs(e) >= a && t < n.length - 1; )
    e /= a, ++t;
  return `${e.toFixed(1)} ${n[t]}B`;
}
function Qe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const t = {};
  for (const l in e)
    t[l] = e[l];
  for (const l in a) {
    const i = e[l], o = a[l];
    if (Gn(i) && Gn(o)) {
      t[l] = Qe(i, o, n);
      continue;
    }
    if (Array.isArray(i) && Array.isArray(o) && n) {
      t[l] = n(i, o);
      continue;
    }
    t[l] = o;
  }
  return t;
}
function Ir(e) {
  return e.map((a) => a.type === le ? Ir(a.children) : a).flat();
}
function tn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tn.cache.has(e)) return tn.cache.get(e);
  const a = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tn.cache.set(e, a), a;
}
tn.cache = /* @__PURE__ */ new Map();
function pn(e, a) {
  if (!a || typeof a != "object") return [];
  if (Array.isArray(a))
    return a.map((n) => pn(e, n)).flat(1);
  if (a.suspense)
    return pn(e, a.ssContent);
  if (Array.isArray(a.children))
    return a.children.map((n) => pn(e, n)).flat(1);
  if (a.component) {
    if (Object.getOwnPropertySymbols(a.component.provides).includes(e))
      return [a.component];
    if (a.component.subTree)
      return pn(e, a.component.subTree).flat(1);
  }
  return [];
}
var Sa = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap();
class od {
  constructor(a) {
    fo(this, Sa, []), fo(this, Vn, 0), this.size = a;
  }
  push(a) {
    Zt(Sa, this)[Zt(Vn, this)] = a, ed(Vn, this, (Zt(Vn, this) + 1) % this.size);
  }
  values() {
    return Zt(Sa, this).slice(Zt(Vn, this)).concat(Zt(Sa, this).slice(0, Zt(Vn, this)));
  }
}
function rd(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function hi(e) {
  const a = mt({}), n = b(e);
  return Fe(() => {
    for (const t in n.value)
      a[t] = n.value[t];
  }, {
    flush: "sync"
  }), fn(a);
}
function pa(e, a) {
  return e.includes(a);
}
function pr(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ge = () => [Function, Array];
function So(e, a) {
  return a = "on" + $n(a), !!(e[a] || e[`${a}Once`] || e[`${a}Capture`] || e[`${a}OnceCapture`] || e[`${a}CaptureOnce`]);
}
function yi(e) {
  for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), t = 1; t < a; t++)
    n[t - 1] = arguments[t];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else typeof e == "function" && e(...n);
}
function Un(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((t) => `${t}${a ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Ar(e, a, n) {
  let t, l = e.indexOf(document.activeElement);
  const i = a === "next" ? 1 : -1;
  do
    l += i, t = e[l];
  while ((!t || t.offsetParent == null || !((n == null ? void 0 : n(t)) ?? !0)) && l < e.length && l >= 0);
  return t;
}
function nn(e, a) {
  var t, l, i, o;
  const n = Un(e);
  if (!a)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((t = n[0]) == null || t.focus());
  else if (a === "first")
    (l = n[0]) == null || l.focus();
  else if (a === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof a == "number")
    (o = n[a]) == null || o.focus();
  else {
    const r = Ar(n, a);
    r ? r.focus() : nn(e, a === "next" ? "first" : "last");
  }
}
function ka(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Tr() {
}
function Bn(e, a) {
  if (!(xe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${a})`))) return null;
  try {
    return !!e && e.matches(a);
  } catch {
    return null;
  }
}
function za(e) {
  return e.some((a) => Mc(a) ? a.type === Ec ? !1 : a.type !== le || za(a.children) : !0) ? e : null;
}
function sd(e, a) {
  if (!xe || e === 0)
    return a(), () => {
    };
  const n = window.setTimeout(a, e);
  return () => window.clearTimeout(n);
}
function ud(e, a) {
  const n = e.clientX, t = e.clientY, l = a.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, u = l.bottom;
  return n >= i && n <= r && t >= o && t <= u;
}
function Aa() {
  const e = G(), a = (n) => {
    e.value = n;
  };
  return Object.defineProperty(a, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(a, "el", {
    enumerable: !0,
    get: () => mi(e.value)
  }), a;
}
function Ta(e) {
  const a = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return a && n;
}
const Br = ["top", "bottom"], cd = ["start", "end", "left", "right"];
function Tl(e, a) {
  let [n, t] = e.split(" ");
  return t || (t = pa(Br, n) ? "start" : pa(cd, n) ? "top" : "center"), {
    side: Bl(n, a),
    align: Bl(t, a)
  };
}
function Bl(e, a) {
  return e === "start" ? a ? "right" : "left" : e === "end" ? a ? "left" : "right" : e;
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
function ko(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function xo(e) {
  return pa(Br, e.side) ? "y" : "x";
}
class an {
  constructor(a) {
    let {
      x: n,
      y: t,
      width: l,
      height: i
    } = a;
    this.x = n, this.y = t, this.width = l, this.height = i;
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
function wo(e, a) {
  return {
    x: {
      before: Math.max(0, a.left - e.left),
      after: Math.max(0, e.right - a.right)
    },
    y: {
      before: Math.max(0, a.top - e.top),
      after: Math.max(0, e.bottom - a.bottom)
    }
  };
}
function Dr(e) {
  return Array.isArray(e) ? new an({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function bi(e) {
  const a = e.getBoundingClientRect(), n = getComputedStyle(e), t = n.transform;
  if (t) {
    let l, i, o, r, u;
    if (t.startsWith("matrix3d("))
      l = t.slice(9, -1).split(/, /), i = +l[0], o = +l[5], r = +l[12], u = +l[13];
    else if (t.startsWith("matrix("))
      l = t.slice(7, -1).split(/, /), i = +l[0], o = +l[3], r = +l[4], u = +l[5];
    else
      return new an(a);
    const c = n.transformOrigin, d = a.x - r - (1 - i) * parseFloat(c), f = a.y - u - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), m = i ? a.width / i : e.offsetWidth + 1, v = o ? a.height / o : e.offsetHeight + 1;
    return new an({
      x: d,
      y: f,
      width: m,
      height: v
    });
  } else
    return new an(a);
}
function en(e, a, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let t;
  try {
    t = e.animate(a, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof t.finished > "u" && (t.finished = new Promise((l) => {
    t.onfinish = () => {
      l(t);
    };
  })), t;
}
const Pa = /* @__PURE__ */ new WeakMap();
function dd(e, a) {
  Object.keys(a).forEach((n) => {
    if (Na(n)) {
      const t = pr(n), l = Pa.get(e);
      if (a[n] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === t && (e.removeEventListener(t, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === t && i[1] === a[n])) {
        e.addEventListener(t, a[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([t, a[n]]), Pa.has(e) || Pa.set(e, i);
      }
    } else
      a[n] == null ? e.removeAttribute(n) : e.setAttribute(n, a[n]);
  });
}
function vd(e, a) {
  Object.keys(a).forEach((n) => {
    if (Na(n)) {
      const t = pr(n), l = Pa.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === t && (e.removeEventListener(t, r), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const Pn = 2.4, Co = 0.2126729, Vo = 0.7151522, Po = 0.072175, fd = 0.55, md = 0.58, gd = 0.57, hd = 0.62, xa = 0.03, _o = 1.45, yd = 5e-4, bd = 1.25, Sd = 1.25, Io = 0.078, po = 12.82051282051282, wa = 0.06, Ao = 1e-3;
function To(e, a) {
  const n = (e.r / 255) ** Pn, t = (e.g / 255) ** Pn, l = (e.b / 255) ** Pn, i = (a.r / 255) ** Pn, o = (a.g / 255) ** Pn, r = (a.b / 255) ** Pn;
  let u = n * Co + t * Vo + l * Po, c = i * Co + o * Vo + r * Po;
  if (u <= xa && (u += (xa - u) ** _o), c <= xa && (c += (xa - c) ** _o), Math.abs(c - u) < yd) return 0;
  let d;
  if (c > u) {
    const f = (c ** fd - u ** md) * bd;
    d = f < Ao ? 0 : f < Io ? f - f * po * wa : f - wa;
  } else {
    const f = (c ** hd - u ** gd) * Sd;
    d = f > -Ao ? 0 : f > -Io ? f - f * po * wa : f + wa;
  }
  return d * 100;
}
function kt(e) {
  Oa(`Vuetify: ${e}`);
}
function Ba(e) {
  Oa(`Vuetify error: ${e}`);
}
function kd(e, a) {
  a = Array.isArray(a) ? a.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${a.at(-1)}'` : `'${a}'`, Oa(`[Vuetify UPGRADE] '${e}' is deprecated, use ${a} instead.`);
}
const Da = 0.20689655172413793, xd = (e) => e > Da ** 3 ? Math.cbrt(e) : e / (3 * Da ** 2) + 4 / 29, wd = (e) => e > Da ? e ** 3 : 3 * Da ** 2 * (e - 4 / 29);
function Mr(e) {
  const a = xd, n = a(e[1]);
  return [116 * n - 16, 500 * (a(e[0] / 0.95047) - n), 200 * (n - a(e[2] / 1.08883))];
}
function Er(e) {
  const a = wd, n = (e[0] + 16) / 116;
  return [a(n + e[1] / 500) * 0.95047, a(n), a(n - e[2] / 200) * 1.08883];
}
const Cd = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Vd = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Pd = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], _d = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Fr(e) {
  const a = Array(3), n = Vd, t = Cd;
  for (let l = 0; l < 3; ++l)
    a[l] = Math.round(Oe(n(t[l][0] * e[0] + t[l][1] * e[1] + t[l][2] * e[2])) * 255);
  return {
    r: a[0],
    g: a[1],
    b: a[2]
  };
}
function Si(e) {
  let {
    r: a,
    g: n,
    b: t
  } = e;
  const l = [0, 0, 0], i = _d, o = Pd;
  a = i(a / 255), n = i(n / 255), t = i(t / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * a + o[r][1] * n + o[r][2] * t;
  return l;
}
function Dl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Id(e) {
  return Dl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Bo = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, pd = {
  rgb: (e, a, n, t) => ({
    r: e,
    g: a,
    b: n,
    a: t
  }),
  rgba: (e, a, n, t) => ({
    r: e,
    g: a,
    b: n,
    a: t
  }),
  hsl: (e, a, n, t) => Do({
    h: e,
    s: a,
    l: n,
    a: t
  }),
  hsla: (e, a, n, t) => Do({
    h: e,
    s: a,
    l: n,
    a: t
  }),
  hsv: (e, a, n, t) => Dt({
    h: e,
    s: a,
    v: n,
    a: t
  }),
  hsva: (e, a, n, t) => Dt({
    h: e,
    s: a,
    v: n,
    a: t
  })
};
function gt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && kt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Bo.test(e)) {
    const {
      groups: a
    } = e.match(Bo), {
      fn: n,
      values: t
    } = a, l = t.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return pd[n](...l);
  } else if (typeof e == "string") {
    let a = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(a.length) ? a = a.split("").map((t) => t + t).join("") : [6, 8].includes(a.length) || kt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(a, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && kt(`'${e}' is not a valid hex(a) color`), Nr(a);
  } else if (typeof e == "object") {
    if (Qt(e, ["r", "g", "b"]))
      return e;
    if (Qt(e, ["h", "s", "l"]))
      return Dt(ki(e));
    if (Qt(e, ["h", "s", "v"]))
      return Dt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Dt(e) {
  const {
    h: a,
    s: n,
    v: t,
    a: l
  } = e, i = (r) => {
    const u = (r + a / 60) % 6;
    return t - t * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function Do(e) {
  return Dt(ki(e));
}
function Ha(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const a = e.r / 255, n = e.g / 255, t = e.b / 255, l = Math.max(a, n, t), i = Math.min(a, n, t);
  let o = 0;
  l !== i && (l === a ? o = 60 * (0 + (n - t) / (l - i)) : l === n ? o = 60 * (2 + (t - a) / (l - i)) : l === t && (o = 60 * (4 + (a - n) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, u = [o, r, l];
  return {
    h: u[0],
    s: u[1],
    v: u[2],
    a: e.a
  };
}
function $r(e) {
  const {
    h: a,
    s: n,
    v: t,
    a: l
  } = e, i = t - t * n / 2, o = i === 1 || i === 0 ? 0 : (t - i) / Math.min(i, 1 - i);
  return {
    h: a,
    s: o,
    l: i,
    a: l
  };
}
function ki(e) {
  const {
    h: a,
    s: n,
    l: t,
    a: l
  } = e, i = t + n * Math.min(t, 1 - t), o = i === 0 ? 0 : 2 - 2 * t / i;
  return {
    h: a,
    s: o,
    v: i,
    a: l
  };
}
function Lr(e) {
  let {
    r: a,
    g: n,
    b: t,
    a: l
  } = e;
  return l === void 0 ? `rgb(${a}, ${n}, ${t})` : `rgba(${a}, ${n}, ${t}, ${l})`;
}
function Or(e) {
  return Lr(Dt(e));
}
function Ca(e) {
  const a = Math.round(e).toString(16);
  return ("00".substr(0, 2 - a.length) + a).toUpperCase();
}
function Rr(e) {
  let {
    r: a,
    g: n,
    b: t,
    a: l
  } = e;
  return `#${[Ca(a), Ca(n), Ca(t), l !== void 0 ? Ca(Math.round(l * 255)) : ""].join("")}`;
}
function Nr(e) {
  e = Ad(e);
  let [a, n, t, l] = id(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: a,
    g: n,
    b: t,
    a: l
  };
}
function zr(e) {
  const a = Nr(e);
  return Ha(a);
}
function Hr(e) {
  return Rr(Dt(e));
}
function Ad(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((a) => a + a).join("")), e.length !== 6 && (e = ho(ho(e, 6), 8, "F")), e;
}
function Td(e, a) {
  const n = Mr(Si(e));
  return n[0] = n[0] + a * 10, Fr(Er(n));
}
function Bd(e, a) {
  const n = Mr(Si(e));
  return n[0] = n[0] - a * 10, Fr(Er(n));
}
function Ml(e) {
  const a = gt(e);
  return Si(a)[1];
}
function Dd(e, a) {
  const n = Ml(e), t = Ml(a), l = Math.max(n, t), i = Math.min(n, t);
  return (l + 0.05) / (i + 0.05);
}
function Wr(e) {
  const a = Math.abs(To(gt(0), gt(e)));
  return Math.abs(To(gt(16777215), gt(e))) > Math.min(a, 50) ? "#fff" : "#000";
}
function B(e, a) {
  return (n) => Object.keys(e).reduce((t, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? t[l] = {
      ...o,
      default: n[l]
    } : t[l] = o, a && !t[l].source && (t[l].source = a), t;
  }, {});
}
const ee = B({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Me(e, a) {
  const n = Fc();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function At() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const a = Me(e).type;
  return tn((a == null ? void 0 : a.aliasName) || (a == null ? void 0 : a.name));
}
let jr = 0, _a = /* @__PURE__ */ new WeakMap();
function Ue() {
  const e = Me("getUid");
  if (_a.has(e)) return _a.get(e);
  {
    const a = jr++;
    return _a.set(e, a), a;
  }
}
Ue.reset = () => {
  jr = 0, _a = /* @__PURE__ */ new WeakMap();
};
function Md(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Me("injectSelf");
  const {
    provides: n
  } = a;
  if (n && e in n)
    return n[e];
}
const Dn = Symbol.for("vuetify:defaults");
function Ed(e) {
  return j(e);
}
function xi() {
  const e = ye(Dn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function De(e, a) {
  const n = xi(), t = j(e), l = b(() => {
    if (ot(a == null ? void 0 : a.disabled)) return n.value;
    const o = ot(a == null ? void 0 : a.scoped), r = ot(a == null ? void 0 : a.reset), u = ot(a == null ? void 0 : a.root);
    if (t.value == null && !(o || r || u)) return n.value;
    let c = Qe(t.value, {
      prev: n.value
    });
    if (o) return c;
    if (r || u) {
      const d = Number(r || 1 / 0);
      for (let f = 0; f <= d && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof u == "string" && u in c && (c = Qe(Qe(c, {
        prev: c
      }), c[u])), c;
    }
    return c.prev ? Qe(c.prev, c) : c;
  });
  return pe(Dn, l), l;
}
function Fd(e, a) {
  var n, t;
  return typeof ((n = e.props) == null ? void 0 : n[a]) < "u" || typeof ((t = e.props) == null ? void 0 : t[tn(a)]) < "u";
}
function $d() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xi();
  const t = Me("useDefaults");
  if (a = a ?? t.type.name ?? t.type.__name, !a)
    throw new Error("[Vuetify] Could not determine component name");
  const l = b(() => {
    var u;
    return (u = n.value) == null ? void 0 : u[e._as ?? a];
  }), i = new Proxy(e, {
    get(u, c) {
      var f, m, v, y, h, g, S;
      const d = Reflect.get(u, c);
      return c === "class" || c === "style" ? [(f = l.value) == null ? void 0 : f[c], d].filter((k) => k != null) : typeof c == "string" && !Fd(t.vnode, c) ? ((m = l.value) == null ? void 0 : m[c]) !== void 0 ? (v = l.value) == null ? void 0 : v[c] : ((h = (y = n.value) == null ? void 0 : y.global) == null ? void 0 : h[c]) !== void 0 ? (S = (g = n.value) == null ? void 0 : g.global) == null ? void 0 : S[c] : d : d;
    }
  }), o = G();
  Fe(() => {
    if (l.value) {
      const u = Object.entries(l.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      o.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const u = Md(Dn, t);
    pe(Dn, b(() => o.value ? Qe((u == null ? void 0 : u.value) ?? {}, o.value) : u == null ? void 0 : u.value));
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
    e.props = B(e.props ?? {}, e.name)();
    const a = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(t) {
      return gi(t, a);
    }, e.props._as = String, e.setup = function(t, l) {
      const i = xi();
      if (!i.value) return e._setup(t, l);
      const {
        props: o,
        provideSubDefaults: r
      } = $d(t, t._as ?? e.name, i), u = e._setup(o, l);
      return r(), u;
    };
  }
  return e;
}
function O() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (a) => (e ? dt : $c)(a);
}
function Ld(e, a) {
  return a.props = e, a;
}
function Tt(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return O()({
    name: n ?? $n(yr(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: a
      },
      ...ee()
    },
    setup(t, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return Yt(t.tag, {
          class: [e, t.class],
          style: t.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function Yr(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const a = e.getRootNode();
  return a !== document && a.getRootNode({
    composed: !0
  }) !== document ? null : a;
}
const qn = "cubic-bezier(0.4, 0, 0.2, 1)", Od = "cubic-bezier(0.0, 0, 0.2, 1)", Rd = "cubic-bezier(0.4, 0, 1, 1)";
function Mo(e, a, n) {
  return Object.keys(e).filter((t) => Na(t) && t.endsWith(a)).reduce((t, l) => (t[l.slice(0, -a.length)] = (i) => e[l](i, n(i)), t), {});
}
function wi(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (a ? Nd(e) : Ci(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ma(e, a) {
  const n = [];
  if (a && e && !a.contains(e)) return n;
  for (; e && (Ci(e) && n.push(e), e !== a); )
    e = e.parentElement;
  return n;
}
function Ci(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const a = window.getComputedStyle(e);
  return a.overflowY === "scroll" || a.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Nd(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const a = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(a.overflowY);
}
function zd(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function R(e) {
  const a = Me("useRender");
  a.render = e;
}
function ae(e, a, n) {
  let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Me("useProxiedModel"), o = j(e[a] !== void 0 ? e[a] : n), r = tn(a), c = r !== a ? b(() => {
    var f, m, v, y;
    return e[a], !!(((f = i.vnode.props) != null && f.hasOwnProperty(a) || (m = i.vnode.props) != null && m.hasOwnProperty(r)) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${a}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${r}`)));
  }) : b(() => {
    var f, m;
    return e[a], !!((f = i.vnode.props) != null && f.hasOwnProperty(a) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${a}`)));
  });
  rt(() => !c.value, () => {
    q(() => e[a], (f) => {
      o.value = f;
    });
  });
  const d = b({
    get() {
      const f = e[a];
      return t(c.value ? f : o.value);
    },
    set(f) {
      const m = l(f), v = Ie(c.value ? e[a] : o.value);
      v === m || t(v) === f || (o.value = m, i == null || i.emit(`update:${a}`, m));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[a] : o.value
  }), d;
}
const Hd = {
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
}, Eo = "$vuetify.", Fo = (e, a) => e.replace(/\{(\d+)\}/g, (n, t) => String(a[+t])), Gr = (e, a, n) => function(t) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!t.startsWith(Eo))
    return Fo(t, i);
  const r = t.replace(Eo, ""), u = e.value && n.value[e.value], c = a.value && n.value[a.value];
  let d = on(u, r, null);
  return d || (kt(`Translation key "${t}" not found in "${e.value}", trying fallback locale`), d = on(c, r, null)), d || (Ba(`Translation key "${t}" not found in fallback`), d = t), typeof d != "string" && (Ba(`Translation key "${t}" has a non-string value`), d = t), Fo(d, i);
};
function Ur(e, a) {
  return (n, t) => new Intl.NumberFormat([e.value, a.value], t).format(n);
}
function Sl(e, a, n) {
  const t = ae(e, a, e[a] ?? n.value);
  return t.value = e[a] ?? n.value, q(n, (l) => {
    e[a] == null && (t.value = n.value);
  }), t;
}
function qr(e) {
  return (a) => {
    const n = Sl(a, "locale", e.current), t = Sl(a, "fallback", e.fallback), l = Sl(a, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: t,
      messages: l,
      t: Gr(n, t, l),
      n: Ur(n, t),
      provide: qr({
        current: n,
        fallback: t,
        messages: l
      })
    };
  };
}
function Wd(e) {
  const a = G((e == null ? void 0 : e.locale) ?? "en"), n = G((e == null ? void 0 : e.fallback) ?? "en"), t = j({
    en: Hd,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: a,
    fallback: n,
    messages: t,
    t: Gr(a, n, t),
    n: Ur(a, n),
    provide: qr({
      current: a,
      fallback: n,
      messages: t
    })
  };
}
const Mn = Symbol.for("vuetify:locale");
function jd(e) {
  return e.name != null;
}
function Yd(e) {
  const a = e != null && e.adapter && jd(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Wd(e), n = qd(a, e);
  return {
    ...a,
    ...n
  };
}
function $e() {
  const e = ye(Mn);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Gd(e) {
  const a = ye(Mn);
  if (!a) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = a.provide(e), t = Kd(n, a.rtl, e), l = {
    ...n,
    ...t
  };
  return pe(Mn, l), l;
}
function Ud() {
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
function qd(e, a) {
  const n = j((a == null ? void 0 : a.rtl) ?? Ud()), t = b(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: t,
    rtl: n,
    rtlClasses: b(() => `v-locale--is-${t.value ? "rtl" : "ltr"}`)
  };
}
function Kd(e, a, n) {
  const t = b(() => n.rtl ?? a.value[e.current.value] ?? !1);
  return {
    isRtl: t,
    rtl: a,
    rtlClasses: b(() => `v-locale--is-${t.value ? "rtl" : "ltr"}`)
  };
}
function We() {
  const e = ye(Mn);
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
function Xd(e, a, n) {
  const t = [];
  let l = [];
  const i = Kr(e), o = Xr(e), r = n ?? Wa[a.slice(-2).toUpperCase()] ?? 0, u = (i.getDay() - r + 7) % 7, c = (o.getDay() - r + 7) % 7;
  for (let d = 0; d < u; d++) {
    const f = new Date(i);
    f.setDate(f.getDate() - (u - d)), l.push(f);
  }
  for (let d = 1; d <= o.getDate(); d++) {
    const f = new Date(e.getFullYear(), e.getMonth(), d);
    l.push(f), l.length === 7 && (t.push(l), l = []);
  }
  for (let d = 1; d < 7 - c; d++) {
    const f = new Date(o);
    f.setDate(f.getDate() + d), l.push(f);
  }
  return l.length > 0 && t.push(l), t;
}
function Zd(e, a, n) {
  const t = n ?? Wa[a.slice(-2).toUpperCase()] ?? 0, l = new Date(e);
  for (; l.getDay() !== t; )
    l.setDate(l.getDate() - 1);
  return l;
}
function Jd(e, a) {
  const n = new Date(e), t = ((Wa[a.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; n.getDay() !== t; )
    n.setDate(n.getDate() + 1);
  return n;
}
function Kr(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Xr(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Qd(e) {
  const a = e.split("-").map(Number);
  return new Date(a[0], a[1] - 1, a[2]);
}
const ev = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Zr(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let a;
    if (ev.test(e))
      return Qd(e);
    if (a = Date.parse(e), !isNaN(a)) return new Date(a);
  }
  return null;
}
const $o = new Date(2e3, 0, 2);
function tv(e, a) {
  const n = a ?? Wa[e.slice(-2).toUpperCase()] ?? 0;
  return _t(7).map((t) => {
    const l = new Date($o);
    return l.setDate($o.getDate() + n + t), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(l);
  });
}
function nv(e, a, n, t) {
  const l = Zr(e) ?? /* @__PURE__ */ new Date(), i = t == null ? void 0 : t[a];
  if (typeof i == "function")
    return i(l, a, n);
  let o = {};
  switch (a) {
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
      const r = l.getDate(), u = new Intl.DateTimeFormat(n, {
        month: "long"
      }).format(l);
      return `${r} ${u}`;
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
      return new Intl.NumberFormat(n).format(l.getDate());
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
  return new Intl.DateTimeFormat(n, o).format(l);
}
function av(e, a) {
  const n = e.toJsDate(a), t = n.getFullYear(), l = yo(String(n.getMonth() + 1), 2, "0"), i = yo(String(n.getDate()), 2, "0");
  return `${t}-${l}-${i}`;
}
function lv(e) {
  const [a, n, t] = e.split("-").map(Number);
  return new Date(a, n - 1, t);
}
function iv(e, a) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + a), n;
}
function ov(e, a) {
  const n = new Date(e);
  return n.setHours(n.getHours() + a), n;
}
function rv(e, a) {
  const n = new Date(e);
  return n.setDate(n.getDate() + a), n;
}
function sv(e, a) {
  const n = new Date(e);
  return n.setDate(n.getDate() + a * 7), n;
}
function uv(e, a) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + a), n;
}
function cv(e) {
  return e.getFullYear();
}
function dv(e) {
  return e.getMonth();
}
function vv(e) {
  return e.getDate();
}
function fv(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function mv(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function gv(e) {
  return e.getHours();
}
function hv(e) {
  return e.getMinutes();
}
function yv(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function bv(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Sv(e, a) {
  return Ea(e, a[0]) && wv(e, a[1]);
}
function kv(e) {
  const a = new Date(e);
  return a instanceof Date && !isNaN(a.getTime());
}
function Ea(e, a) {
  return e.getTime() > a.getTime();
}
function xv(e, a) {
  return Ea(El(e), El(a));
}
function wv(e, a) {
  return e.getTime() < a.getTime();
}
function Lo(e, a) {
  return e.getTime() === a.getTime();
}
function Cv(e, a) {
  return e.getDate() === a.getDate() && e.getMonth() === a.getMonth() && e.getFullYear() === a.getFullYear();
}
function Vv(e, a) {
  return e.getMonth() === a.getMonth() && e.getFullYear() === a.getFullYear();
}
function Pv(e, a) {
  return e.getFullYear() === a.getFullYear();
}
function _v(e, a, n) {
  const t = new Date(e), l = new Date(a);
  switch (n) {
    case "years":
      return t.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((t.getMonth() - l.getMonth() + (t.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return t.getMonth() - l.getMonth() + (t.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((t.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((t.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((t.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((t.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((t.getTime() - l.getTime()) / 1e3);
    default:
      return t.getTime() - l.getTime();
  }
}
function Iv(e, a) {
  const n = new Date(e);
  return n.setHours(a), n;
}
function pv(e, a) {
  const n = new Date(e);
  return n.setMinutes(a), n;
}
function Av(e, a) {
  const n = new Date(e);
  return n.setMonth(a), n;
}
function Tv(e, a) {
  const n = new Date(e);
  return n.setDate(a), n;
}
function Bv(e, a) {
  const n = new Date(e);
  return n.setFullYear(a), n;
}
function El(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Dv(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Mv {
  constructor(a) {
    this.locale = a.locale, this.formats = a.formats;
  }
  date(a) {
    return Zr(a);
  }
  toJsDate(a) {
    return a;
  }
  toISO(a) {
    return av(this, a);
  }
  parseISO(a) {
    return lv(a);
  }
  addMinutes(a, n) {
    return iv(a, n);
  }
  addHours(a, n) {
    return ov(a, n);
  }
  addDays(a, n) {
    return rv(a, n);
  }
  addWeeks(a, n) {
    return sv(a, n);
  }
  addMonths(a, n) {
    return uv(a, n);
  }
  getWeekArray(a, n) {
    return Xd(a, this.locale, n ? Number(n) : void 0);
  }
  startOfWeek(a, n) {
    return Zd(a, this.locale, n ? Number(n) : void 0);
  }
  endOfWeek(a) {
    return Jd(a, this.locale);
  }
  startOfMonth(a) {
    return Kr(a);
  }
  endOfMonth(a) {
    return Xr(a);
  }
  format(a, n) {
    return nv(a, n, this.locale, this.formats);
  }
  isEqual(a, n) {
    return Lo(a, n);
  }
  isValid(a) {
    return kv(a);
  }
  isWithinRange(a, n) {
    return Sv(a, n);
  }
  isAfter(a, n) {
    return Ea(a, n);
  }
  isAfterDay(a, n) {
    return xv(a, n);
  }
  isBefore(a, n) {
    return !Ea(a, n) && !Lo(a, n);
  }
  isSameDay(a, n) {
    return Cv(a, n);
  }
  isSameMonth(a, n) {
    return Vv(a, n);
  }
  isSameYear(a, n) {
    return Pv(a, n);
  }
  setMinutes(a, n) {
    return pv(a, n);
  }
  setHours(a, n) {
    return Iv(a, n);
  }
  setMonth(a, n) {
    return Av(a, n);
  }
  setDate(a, n) {
    return Tv(a, n);
  }
  setYear(a, n) {
    return Bv(a, n);
  }
  getDiff(a, n, t) {
    return _v(a, n, t);
  }
  getWeekdays(a) {
    return tv(this.locale, a ? Number(a) : void 0);
  }
  getYear(a) {
    return cv(a);
  }
  getMonth(a) {
    return dv(a);
  }
  getDate(a) {
    return vv(a);
  }
  getNextMonth(a) {
    return fv(a);
  }
  getPreviousMonth(a) {
    return mv(a);
  }
  getHours(a) {
    return gv(a);
  }
  getMinutes(a) {
    return hv(a);
  }
  startOfDay(a) {
    return El(a);
  }
  endOfDay(a) {
    return Dv(a);
  }
  startOfYear(a) {
    return yv(a);
  }
  endOfYear(a) {
    return bv(a);
  }
}
const Jr = Symbol.for("vuetify:date-options"), Oo = Symbol.for("vuetify:date-adapter");
function Ev(e, a) {
  const n = Qe({
    adapter: Mv,
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
    options: n,
    instance: Qr(n, a)
  };
}
function Qr(e, a) {
  const n = mt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[a.current.value] ?? a.current.value,
    formats: e.formats
  }) : e.adapter);
  return q(a.current, (t) => {
    n.locale = e.locale[t] ?? t ?? n.locale;
  }), n;
}
function ia() {
  const e = ye(Jr);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const a = $e();
  return Qr(e, a);
}
function Fv(e, a) {
  const n = e.toJsDate(a);
  let t = n.getFullYear(), l = new Date(t, 0, 1);
  if (n < l)
    t = t - 1, l = new Date(t, 0, 1);
  else {
    const r = new Date(t + 1, 0, 1);
    n >= r && (t = t + 1, l = r);
  }
  const i = Math.abs(n.getTime() - l.getTime()), o = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(o / 7) + 1;
}
const ja = ["sm", "md", "lg", "xl", "xxl"], Fl = Symbol.for("vuetify:display"), Ro = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, $v = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ro;
  return Qe(Ro, e);
};
function No(e) {
  return xe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function zo(e) {
  return xe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Ho(e) {
  const a = xe && !e ? window.navigator.userAgent : "ssr";
  function n(y) {
    return !!a.match(y);
  }
  const t = n(/android/i), l = n(/iphone|ipad|ipod/i), i = n(/cordova/i), o = n(/electron/i), r = n(/chrome/i), u = n(/edge/i), c = n(/firefox/i), d = n(/opera/i), f = n(/win/i), m = n(/mac/i), v = n(/linux/i);
  return {
    android: t,
    ios: l,
    cordova: i,
    electron: o,
    chrome: r,
    edge: u,
    firefox: c,
    opera: d,
    win: f,
    mac: m,
    linux: v,
    touch: Jc,
    ssr: a === "ssr"
  };
}
function Lv(e, a) {
  const {
    thresholds: n,
    mobileBreakpoint: t
  } = $v(e), l = G(zo(a)), i = G(Ho(a)), o = mt({}), r = G(No(a));
  function u() {
    l.value = zo(), r.value = No();
  }
  function c() {
    u(), i.value = Ho();
  }
  return Fe(() => {
    const d = r.value < n.sm, f = r.value < n.md && !d, m = r.value < n.lg && !(f || d), v = r.value < n.xl && !(m || f || d), y = r.value < n.xxl && !(v || m || f || d), h = r.value >= n.xxl, g = d ? "xs" : f ? "sm" : m ? "md" : v ? "lg" : y ? "xl" : "xxl", S = typeof t == "number" ? t : n[t], k = r.value < S;
    o.xs = d, o.sm = f, o.md = m, o.lg = v, o.xl = y, o.xxl = h, o.smAndUp = !d, o.mdAndUp = !(d || f), o.lgAndUp = !(d || f || m), o.xlAndUp = !(d || f || m || v), o.smAndDown = !(m || v || y || h), o.mdAndDown = !(v || y || h), o.lgAndDown = !(y || h), o.xlAndDown = !h, o.name = g, o.height = l.value, o.width = r.value, o.mobile = k, o.mobileBreakpoint = t, o.platform = i.value, o.thresholds = n;
  }), xe && window.addEventListener("resize", u, {
    passive: !0
  }), {
    ...fn(o),
    update: c,
    ssr: !!a
  };
}
const mn = B({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function yt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  const n = ye(Fl);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const t = b(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return n.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < i;
  }), l = b(() => a ? {
    [`${a}--mobile`]: t.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: t
  };
}
const es = Symbol.for("vuetify:goto");
function ts() {
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
function Ov(e) {
  return Vi(e) ?? (document.scrollingElement || document.body);
}
function Vi(e) {
  return typeof e == "string" ? document.querySelector(e) : mi(e);
}
function kl(e, a, n) {
  if (typeof e == "number") return a && n ? -e : e;
  let t = Vi(e), l = 0;
  for (; t; )
    l += a ? t.offsetLeft : t.offsetTop, t = t.offsetParent;
  return l;
}
function Rv(e, a) {
  return {
    rtl: a.isRtl,
    options: Qe(ts(), e)
  };
}
async function Wo(e, a, n, t) {
  const l = n ? "scrollLeft" : "scrollTop", i = Qe((t == null ? void 0 : t.options) ?? ts(), a), o = t == null ? void 0 : t.rtl.value, r = (typeof e == "number" ? e : Vi(e)) ?? 0, u = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : Ov(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let d;
  if (typeof r == "number")
    d = kl(r, n, o);
  else if (d = kl(r, n, o) - kl(u, n, o), i.layout) {
    const y = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    y && (d -= parseInt(y, 10));
  }
  d += i.offset, d = zv(u, d, !!o, !!n);
  const f = u[l] ?? 0;
  if (d === f) return Promise.resolve(d);
  const m = performance.now();
  return new Promise((v) => requestAnimationFrame(function y(h) {
    const S = (h - m) / i.duration, k = Math.floor(f + (d - f) * c(Oe(S, 0, 1)));
    if (u[l] = k, S >= 1 && Math.abs(k - u[l]) < 10)
      return v(d);
    if (S > 2)
      return kt("Scroll target is not reachable"), v(u[l]);
    requestAnimationFrame(y);
  }));
}
function Nv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const a = ye(es), {
    isRtl: n
  } = We();
  if (!a) throw new Error("[Vuetify] Could not find injected goto instance");
  const t = {
    ...a,
    // can be set via VLocaleProvider
    rtl: b(() => a.rtl.value || n.value)
  };
  async function l(i, o) {
    return Wo(i, Qe(e, o), !1, t);
  }
  return l.horizontal = async (i, o) => Wo(i, Qe(e, o), !0, t), l;
}
function zv(e, a, n, t) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let u, c;
  return t ? n ? (u = -(l - o), c = 0) : (u = 0, c = l - o) : (u = 0, c = i + -r), Math.max(Math.min(a, c), u);
}
const Hv = {
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
}, Wv = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Yt(_i, {
    ...e,
    class: "mdi"
  })
}, re = [String, Function, Object, Array], $l = Symbol.for("vuetify:icons"), Ya = B({
  icon: {
    type: re
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Ll = O()({
  name: "VComponentIcon",
  props: Ya(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return () => {
      const t = e.icon;
      return s(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? s(t, null, null) : (l = n.default) == null ? void 0 : l.call(n)];
        }
      });
    };
  }
}), Pi = dt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Ya(),
  setup(e, a) {
    let {
      attrs: n
    } = a;
    return () => s(e.tag, N(n, {
      style: null
    }), {
      default: () => [s("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((t) => Array.isArray(t) ? s("path", {
        d: t[0],
        "fill-opacity": t[1]
      }, null) : s("path", {
        d: t
      }, null)) : s("path", {
        d: e.icon
      }, null)])]
    });
  }
}), jv = dt({
  name: "VLigatureIcon",
  props: Ya(),
  setup(e) {
    return () => s(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), _i = dt({
  name: "VClassIcon",
  props: Ya(),
  setup(e) {
    return () => s(e.tag, {
      class: e.icon
    }, null);
  }
});
function Yv() {
  return {
    svg: {
      component: Pi
    },
    class: {
      component: _i
    }
  };
}
function Gv(e) {
  const a = Yv(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !a.mdi && (a.mdi = Wv), Qe({
    defaultSet: n,
    sets: a,
    aliases: {
      ...Hv,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Uv = (e) => {
  const a = ye($l);
  if (!a) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: b(() => {
      var u;
      const t = ot(e);
      if (!t) return {
        component: Ll
      };
      let l = t;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (u = a.aliases) == null ? void 0 : u[l.slice(1)])), l || kt(`Could not find aliased icon "${t}"`), Array.isArray(l))
        return {
          component: Pi,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Ll,
          icon: l
        };
      const i = Object.keys(a.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: a.sets[i ?? a.defaultSet].component,
        icon: o
      };
    })
  };
}, Kn = Symbol.for("vuetify:theme"), ge = B({
  theme: String
}, "theme");
function jo() {
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
function qv() {
  var t, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jo();
  const a = jo();
  if (!e) return {
    ...a,
    isDisabled: !0
  };
  const n = {};
  for (const [i, o] of Object.entries(e.themes ?? {})) {
    const r = o.dark || i === "dark" ? (t = a.themes) == null ? void 0 : t.dark : (l = a.themes) == null ? void 0 : l.light;
    n[i] = Qe(r, o);
  }
  return Qe(a, {
    ...e,
    themes: n
  });
}
function Kv(e) {
  const a = qv(e), n = j(a.defaultTheme), t = j(a.themes), l = b(() => {
    const d = {};
    for (const [f, m] of Object.entries(t.value)) {
      const v = d[f] = {
        ...m,
        colors: {
          ...m.colors
        }
      };
      if (a.variations)
        for (const y of a.variations.colors) {
          const h = v.colors[y];
          if (h)
            for (const g of ["lighten", "darken"]) {
              const S = g === "lighten" ? Td : Bd;
              for (const k of _t(a.variations[g], 1))
                v.colors[`${y}-${g}-${k}`] = Rr(S(gt(h), k));
            }
        }
      for (const y of Object.keys(v.colors)) {
        if (/^on-[a-z]/.test(y) || v.colors[`on-${y}`]) continue;
        const h = `on-${y}`, g = gt(v.colors[y]);
        v.colors[h] = Wr(g);
      }
    }
    return d;
  }), i = b(() => l.value[n.value]), o = b(() => {
    var y;
    const d = [];
    (y = i.value) != null && y.dark && Jt(d, ":root", ["color-scheme: dark"]), Jt(d, ":root", Yo(i.value));
    for (const [h, g] of Object.entries(l.value))
      Jt(d, `.v-theme--${h}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...Yo(g)]);
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
        nonce: a.cspNonce || !1
      }]
    };
  }
  function u(d) {
    if (a.isDisabled) return;
    const f = d._context.provides.usehead;
    if (f)
      if (f.push) {
        const m = f.push(r);
        xe && q(o, () => {
          m.patch(r);
        });
      } else
        xe ? (f.addHeadObjs(b(r)), Fe(() => f.updateDOM())) : f.addHeadObjs(r());
    else {
      let v = function() {
        if (typeof document < "u" && !m) {
          const y = document.createElement("style");
          y.type = "text/css", y.id = "vuetify-theme-stylesheet", a.cspNonce && y.setAttribute("nonce", a.cspNonce), m = y, document.head.appendChild(m);
        }
        m && (m.innerHTML = o.value);
      }, m = xe ? document.getElementById("vuetify-theme-stylesheet") : null;
      xe ? q(o, v, {
        immediate: !0
      }) : v();
    }
  }
  const c = b(() => a.isDisabled ? void 0 : `v-theme--${n.value}`);
  return {
    install: u,
    isDisabled: a.isDisabled,
    name: n,
    themes: t,
    current: i,
    computedThemes: l,
    themeClasses: c,
    styles: o,
    global: {
      name: n,
      current: i
    }
  };
}
function ke(e) {
  Me("provideTheme");
  const a = ye(Kn, null);
  if (!a) throw new Error("Could not find Vuetify theme injection");
  const n = b(() => e.theme ?? a.name.value), t = b(() => a.themes.value[n.value]), l = b(() => a.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...a,
    name: n,
    current: t,
    themeClasses: l
  };
  return pe(Kn, i), i;
}
function ns() {
  Me("useTheme");
  const e = ye(Kn, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Jt(e, a, n) {
  e.push(`${a} {
`, ...n.map((t) => `  ${t};
`), `}
`);
}
function Yo(e) {
  const a = e.dark ? 2 : 1, n = e.dark ? 1 : 2, t = [];
  for (const [l, i] of Object.entries(e.colors)) {
    const o = gt(i);
    t.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`), l.startsWith("on-") || t.push(`--v-theme-${l}-overlay-multiplier: ${Ml(i) > 0.18 ? a : n}`);
  }
  for (const [l, i] of Object.entries(e.variables)) {
    const o = typeof i == "string" && i.startsWith("#") ? gt(i) : void 0, r = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    t.push(`--v-${l}: ${r ?? i}`);
  }
  return t;
}
function xt(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Aa(), t = j();
  if (xe) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (a === "content" ? t.value = i[0].contentRect : t.value = i[0].target.getBoundingClientRect());
    });
    nt(() => {
      l.disconnect();
    }), q(() => n.el, (i, o) => {
      o && (l.unobserve(o), t.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: ci(t)
  };
}
const Xn = Symbol.for("vuetify:layout"), as = Symbol.for("vuetify:layout-item"), Go = 1e3, ls = B({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), gn = B({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function is() {
  const e = ye(Xn);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function hn(e) {
  const a = ye(Xn);
  if (!a) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Ue()}`, t = Me("useLayoutItem");
  pe(as, {
    id: n
  });
  const l = G(!1);
  br(() => l.value = !0), Lc(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = a.register(t, {
    ...e,
    active: b(() => l.value ? !1 : e.active.value),
    id: n
  });
  return nt(() => a.unregister(n)), {
    layoutItemStyles: i,
    layoutRect: a.layoutRect,
    layoutItemScrimStyles: o
  };
}
const Xv = (e, a, n, t) => {
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
    const r = a.get(o), u = n.get(o), c = t.get(o);
    if (!r || !u || !c) continue;
    const d = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(u.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: d
    }), l = d;
  }
  return i;
};
function os(e) {
  const a = ye(Xn, null), n = b(() => a ? a.rootZIndex.value - 100 : Go), t = j([]), l = mt(/* @__PURE__ */ new Map()), i = mt(/* @__PURE__ */ new Map()), o = mt(/* @__PURE__ */ new Map()), r = mt(/* @__PURE__ */ new Map()), u = mt(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: d
  } = xt(), f = b(() => {
    const P = /* @__PURE__ */ new Map(), T = e.overlaps ?? [];
    for (const w of T.filter((x) => x.includes(":"))) {
      const [x, A] = w.split(":");
      if (!t.value.includes(x) || !t.value.includes(A)) continue;
      const V = l.get(x), I = l.get(A), D = i.get(x), $ = i.get(A);
      !V || !I || !D || !$ || (P.set(A, {
        position: V.value,
        amount: parseInt(D.value, 10)
      }), P.set(x, {
        position: I.value,
        amount: -parseInt($.value, 10)
      }));
    }
    return P;
  }), m = b(() => {
    const P = [...new Set([...o.values()].map((w) => w.value))].sort((w, x) => w - x), T = [];
    for (const w of P) {
      const x = t.value.filter((A) => {
        var V;
        return ((V = o.get(A)) == null ? void 0 : V.value) === w;
      });
      T.push(...x);
    }
    return Xv(T, l, i, r);
  }), v = b(() => !Array.from(u.values()).some((P) => P.value)), y = b(() => m.value[m.value.length - 1].layer), h = b(() => ({
    "--v-layout-left": X(y.value.left),
    "--v-layout-right": X(y.value.right),
    "--v-layout-top": X(y.value.top),
    "--v-layout-bottom": X(y.value.bottom),
    ...v.value ? void 0 : {
      transition: "none"
    }
  })), g = b(() => m.value.slice(1).map((P, T) => {
    let {
      id: w
    } = P;
    const {
      layer: x
    } = m.value[T], A = i.get(w), V = l.get(w);
    return {
      id: w,
      ...x,
      size: Number(A.value),
      position: V.value
    };
  })), S = (P) => g.value.find((T) => T.id === P), k = Me("createLayout"), p = G(!1);
  at(() => {
    p.value = !0;
  }), pe(Xn, {
    register: (P, T) => {
      let {
        id: w,
        order: x,
        position: A,
        layoutSize: V,
        elementSize: I,
        active: D,
        disableTransitions: $,
        absolute: z
      } = T;
      o.set(w, x), l.set(w, A), i.set(w, V), r.set(w, D), $ && u.set(w, $);
      const Z = pn(as, k == null ? void 0 : k.vnode).indexOf(P);
      Z > -1 ? t.value.splice(Z, 0, w) : t.value.push(w);
      const J = b(() => g.value.findIndex((U) => U.id === w)), L = b(() => n.value + m.value.length * 2 - J.value * 2), F = b(() => {
        const U = A.value === "left" || A.value === "right", oe = A.value === "right", te = A.value === "bottom", ue = I.value ?? V.value, H = ue === 0 ? "%" : "px", ne = {
          [A.value]: 0,
          zIndex: L.value,
          transform: `translate${U ? "X" : "Y"}(${(D.value ? 0 : -(ue === 0 ? 100 : ue)) * (oe || te ? -1 : 1)}${H})`,
          position: z.value || n.value !== Go ? "absolute" : "fixed",
          ...v.value ? void 0 : {
            transition: "none"
          }
        };
        if (!p.value) return ne;
        const ie = g.value[J.value];
        if (!ie) throw new Error(`[Vuetify] Could not find layout item "${w}"`);
        const he = f.value.get(w);
        return he && (ie[he.position] += he.amount), {
          ...ne,
          height: U ? `calc(100% - ${ie.top}px - ${ie.bottom}px)` : I.value ? `${I.value}px` : void 0,
          left: oe ? void 0 : `${ie.left}px`,
          right: oe ? `${ie.right}px` : void 0,
          top: A.value !== "bottom" ? `${ie.top}px` : void 0,
          bottom: A.value !== "top" ? `${ie.bottom}px` : void 0,
          width: U ? I.value ? `${I.value}px` : void 0 : `calc(100% - ${ie.left}px - ${ie.right}px)`
        };
      }), M = b(() => ({
        zIndex: L.value - 1
      }));
      return {
        layoutItemStyles: F,
        layoutItemScrimStyles: M,
        zIndex: L
      };
    },
    unregister: (P) => {
      o.delete(P), l.delete(P), i.delete(P), r.delete(P), u.delete(P), t.value = t.value.filter((T) => T !== P);
    },
    mainRect: y,
    mainStyles: h,
    getLayoutItem: S,
    items: g,
    layoutRect: d,
    rootZIndex: n
  });
  const _ = b(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), C = b(() => ({
    zIndex: a ? n.value : void 0,
    position: a ? "relative" : void 0,
    overflow: a ? "hidden" : void 0
  }));
  return {
    layoutClasses: _,
    layoutStyles: C,
    getLayoutItem: S,
    items: g,
    layoutRect: d,
    layoutRef: c
  };
}
function rs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: a,
    ...n
  } = e, t = Qe(a, n), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = t, r = Ed(t.defaults), u = Lv(t.display, t.ssr), c = Kv(t.theme), d = Gv(t.icons), f = Yd(t.locale), m = Ev(t.date, f), v = Rv(t.goTo, f);
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
      if (c.install(h), h.provide(Dn, r), h.provide(Fl, u), h.provide(Kn, c), h.provide($l, d), h.provide(Mn, f), h.provide(Jr, m.options), h.provide(Oo, m.instance), h.provide(es, v), xe && t.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            u.update();
          });
        else {
          const {
            mount: g
          } = h;
          h.mount = function() {
            const S = g(...arguments);
            return we(() => u.update()), h.mount = g, S;
          };
        }
      Ue.reset(), h.mixin({
        computed: {
          $vuetify() {
            return mt({
              defaults: _n.call(this, Dn),
              display: _n.call(this, Fl),
              theme: _n.call(this, Kn),
              icons: _n.call(this, $l),
              locale: _n.call(this, Mn),
              date: _n.call(this, Oo)
            });
          }
        }
      });
    },
    defaults: r,
    display: u,
    theme: c,
    icons: d,
    locale: f,
    date: m,
    goTo: v
  };
}
const Zv = "3.7.0";
rs.version = Zv;
function _n(e) {
  var t, l;
  const a = this.$, n = ((t = a.parent) == null ? void 0 : t.provides) ?? ((l = a.vnode.appContext) == null ? void 0 : l.provides);
  if (n && e in n)
    return n[e];
}
const Jv = B({
  ...ee(),
  ...ls({
    fullHeight: !0
  }),
  ...ge()
}, "VApp"), Qv = O()({
  name: "VApp",
  props: Jv(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ke(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = os(e), {
      rtlClasses: u
    } = We();
    return R(() => {
      var c;
      return s("div", {
        ref: r,
        class: ["v-application", t.themeClasses.value, l.value, u.value, e.class],
        style: [e.style]
      }, [s("div", {
        class: "v-application__wrap"
      }, [(c = n.default) == null ? void 0 : c.call(n)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: t
    };
  }
}), ve = B({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), ss = B({
  text: String,
  ...ee(),
  ...ve()
}, "VToolbarTitle"), Ii = O()({
  name: "VToolbarTitle",
  props: ss(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => {
      const t = !!(n.default || n.text || e.text);
      return s(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [t && s("div", {
            class: "v-toolbar-title__placeholder"
          }, [n.text ? n.text() : e.text, (l = n.default) == null ? void 0 : l.call(n)])];
        }
      });
    }), {};
  }
}), ef = B({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function vt(e, a, n) {
  return O()({
    name: e,
    props: ef({
      mode: n,
      origin: a
    }),
    setup(t, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          t.origin && (r.style.transformOrigin = t.origin);
        },
        onLeave(r) {
          if (t.leaveAbsolute) {
            const {
              offsetTop: u,
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
            }, r.style.position = "absolute", r.style.top = `${u}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${f}px`;
          }
          t.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (t.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: u,
              top: c,
              left: d,
              width: f,
              height: m
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = u || "", r.style.top = c || "", r.style.left = d || "", r.style.width = f || "", r.style.height = m || "";
          }
        }
      };
      return () => {
        const r = t.group ? di : Wt;
        return Yt(r, {
          name: t.disabled ? "" : e,
          css: !t.disabled,
          ...t.group ? void 0 : {
            mode: t.mode
          },
          ...t.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function us(e, a) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return O()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(t, l) {
      let {
        slots: i
      } = l;
      const o = t.group ? di : Wt;
      return () => Yt(o, {
        name: t.disabled ? "" : e,
        css: !t.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...t.disabled ? {} : a
      }, i.default);
    }
  });
}
function cs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", t = yr(`offset-${n}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [n]: o.style[n]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const u = `${o[t]}px`;
      o.style[n] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[n] = u;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [n]: o.style[n]
      }, o.style.overflow = "hidden", o.style[n] = `${o[t]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    const r = o._initialStyle[n];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[n] = r), delete o._initialStyle;
  }
}
const tf = B({
  target: [Object, Array]
}, "v-dialog-transition"), Ga = O()({
  name: "VDialogTransition",
  props: tf(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var m;
        await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), l.style.visibility = "";
        const {
          x: o,
          y: r,
          sx: u,
          sy: c,
          speed: d
        } = qo(e.target, l), f = en(l, [{
          transform: `translate(${o}px, ${r}px) scale(${u}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: Od
        });
        (m = Uo(l)) == null || m.forEach((v) => {
          en(v, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: qn
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
          sx: u,
          sy: c,
          speed: d
        } = qo(e.target, l);
        en(l, [{}, {
          transform: `translate(${o}px, ${r}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: Rd
        }).finished.then(() => i()), (m = Uo(l)) == null || m.forEach((v) => {
          en(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: qn
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? s(Wt, N({
      name: "dialog-transition"
    }, t, {
      css: !1
    }), n) : s(Wt, {
      name: "dialog-transition"
    }, n);
  }
});
function Uo(e) {
  var n;
  const a = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return a && [...a];
}
function qo(e, a) {
  const n = Dr(e), t = bi(a), [l, i] = getComputedStyle(a).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, r] = getComputedStyle(a).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = n.left + n.width / 2;
  o === "left" || r === "left" ? u -= n.width / 2 : (o === "right" || r === "right") && (u += n.width / 2);
  let c = n.top + n.height / 2;
  o === "top" || r === "top" ? c -= n.height / 2 : (o === "bottom" || r === "bottom") && (c += n.height / 2);
  const d = n.width / t.width, f = n.height / t.height, m = Math.max(1, d, f), v = d / m || 0, y = f / m || 0, h = t.width * t.height / (window.innerWidth * window.innerHeight), g = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: u - (l + t.left),
    y: c - (i + t.top),
    sx: v,
    sy: y,
    speed: g
  };
}
const nf = vt("fab-transition", "center center", "out-in"), af = vt("dialog-bottom-transition"), lf = vt("dialog-top-transition"), Zn = vt("fade-transition"), pi = vt("scale-transition"), of = vt("scroll-x-transition"), rf = vt("scroll-x-reverse-transition"), sf = vt("scroll-y-transition"), uf = vt("scroll-y-reverse-transition"), cf = vt("slide-x-transition"), df = vt("slide-x-reverse-transition"), Ai = vt("slide-y-transition"), vf = vt("slide-y-reverse-transition"), Ua = us("expand-transition", cs()), Ti = us("expand-x-transition", cs("", !0)), ff = B({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), me = O(!1)({
  name: "VDefaultsProvider",
  props: ff(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      defaults: t,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = fn(e);
    return De(t, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var u;
      return (u = n.default) == null ? void 0 : u.call(n);
    };
  }
}), Ne = B({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function ze(e) {
  return {
    dimensionStyles: b(() => {
      const n = {}, t = X(e.height), l = X(e.maxHeight), i = X(e.maxWidth), o = X(e.minHeight), r = X(e.minWidth), u = X(e.width);
      return t != null && (n.height = t), l != null && (n.maxHeight = l), i != null && (n.maxWidth = i), o != null && (n.minHeight = o), r != null && (n.minWidth = r), u != null && (n.width = u), n;
    })
  };
}
function mf(e) {
  return {
    aspectStyles: b(() => {
      const a = Number(e.aspectRatio);
      return a ? {
        paddingBottom: String(1 / a * 100) + "%"
      } : void 0;
    })
  };
}
const ds = B({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...ee(),
  ...Ne()
}, "VResponsive"), Ol = O()({
  name: "VResponsive",
  props: ds(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      aspectStyles: t
    } = mf(e), {
      dimensionStyles: l
    } = ze(e);
    return R(() => {
      var i;
      return s("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [s("div", {
        class: "v-responsive__sizer",
        style: t.value
      }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && s("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
});
function Bi(e) {
  return hi(() => {
    const a = [], n = {};
    if (e.value.background)
      if (Dl(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Id(e.value.background)) {
          const t = gt(e.value.background);
          if (t.a == null || t.a === 1) {
            const l = Wr(t);
            n.color = l, n.caretColor = l;
          }
        }
      } else
        a.push(`bg-${e.value.background}`);
    return e.value.text && (Dl(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : a.push(`text-${e.value.text}`)), {
      colorClasses: a,
      colorStyles: n
    };
  });
}
function Xe(e, a) {
  const n = b(() => ({
    text: Tn(e) ? e.value : a ? e[a] : null
  })), {
    colorClasses: t,
    colorStyles: l
  } = Bi(n);
  return {
    textColorClasses: t,
    textColorStyles: l
  };
}
function Ve(e, a) {
  const n = b(() => ({
    background: Tn(e) ? e.value : a ? e[a] : null
  })), {
    colorClasses: t,
    colorStyles: l
  } = Bi(n);
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: l
  };
}
const Ae = B({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ee(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    roundedClasses: b(() => {
      const t = Tn(e) ? e.value : e.rounded, l = Tn(e) ? e.value : e.tile, i = [];
      if (t === !0 || t === "")
        i.push(`${a}--rounded`);
      else if (typeof t == "string" || t === 0)
        for (const o of String(t).split(" "))
          i.push(`rounded-${o}`);
      else (l || t === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const Ct = B({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), et = (e, a) => {
  let {
    slots: n
  } = a;
  const {
    transition: t,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? di : Wt,
    ...u
  } = typeof t == "object" ? t : {};
  return Yt(r, N(typeof t == "string" ? {
    name: l ? "" : t
  } : u, typeof t == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((c) => {
    let [d, f] = c;
    return f !== void 0;
  })), o), n);
};
function gf(e, a) {
  if (!fi) return;
  const n = a.modifiers || {}, t = a.value, {
    handler: l,
    options: i
  } = typeof t == "object" ? t : {
    handler: t,
    options: {}
  }, o = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[a.instance.$.uid];
    if (!c) return;
    const d = r.some((m) => m.isIntersecting);
    l && (!n.quiet || c.init) && (!n.once || d || c.init) && l(d, r, u), d && n.once ? vs(e, a) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[a.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function vs(e, a) {
  var t;
  const n = (t = e._observe) == null ? void 0 : t[a.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[a.instance.$.uid]);
}
const oa = {
  mounted: gf,
  unmounted: vs
}, fs = B({
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
  ...ds(),
  ...ee(),
  ...Ae(),
  ...Ct()
}, "VImg"), Mt = O()({
  name: "VImg",
  directives: {
    intersect: oa
  },
  props: fs(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(E(e, "color")), {
      roundedClasses: o
    } = Ee(e), r = Me("VImg"), u = G(""), c = j(), d = G(e.eager ? "loading" : "idle"), f = G(), m = G(), v = b(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = b(() => v.value.aspect || f.value / m.value || 0);
    q(() => e.src, () => {
      h(d.value !== "idle");
    }), q(y, (I, D) => {
      !I && D && c.value && _(c.value);
    }), Sr(() => h());
    function h(I) {
      if (!(e.eager && I) && !(fi && !I && !e.eager)) {
        if (d.value = "loading", v.value.lazySrc) {
          const D = new Image();
          D.src = v.value.lazySrc, _(D, null);
        }
        v.value.src && we(() => {
          var D;
          n("loadstart", ((D = c.value) == null ? void 0 : D.currentSrc) || v.value.src), setTimeout(() => {
            var $;
            if (!r.isUnmounted)
              if (($ = c.value) != null && $.complete) {
                if (c.value.naturalWidth || S(), d.value === "error") return;
                y.value || _(c.value, null), d.value === "loading" && g();
              } else
                y.value || _(c.value), k();
          });
        });
      }
    }
    function g() {
      var I;
      r.isUnmounted || (k(), _(c.value), d.value = "loaded", n("load", ((I = c.value) == null ? void 0 : I.currentSrc) || v.value.src));
    }
    function S() {
      var I;
      r.isUnmounted || (d.value = "error", n("error", ((I = c.value) == null ? void 0 : I.currentSrc) || v.value.src));
    }
    function k() {
      const I = c.value;
      I && (u.value = I.currentSrc || I.src);
    }
    let p = -1;
    nt(() => {
      clearTimeout(p);
    });
    function _(I) {
      let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const $ = () => {
        if (clearTimeout(p), r.isUnmounted) return;
        const {
          naturalHeight: z,
          naturalWidth: W
        } = I;
        z || W ? (f.value = W, m.value = z) : !I.complete && d.value === "loading" && D != null ? p = window.setTimeout($, D) : (I.currentSrc.endsWith(".svg") || I.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, m.value = 1);
      };
      $();
    }
    const C = b(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), P = () => {
      var $;
      if (!v.value.src || d.value === "idle") return null;
      const I = s("img", {
        class: ["v-img__img", C.value],
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
      }, null), D = ($ = t.sources) == null ? void 0 : $.call(t);
      return s(et, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Be(D ? s("picture", {
          class: "v-img__picture"
        }, [D, I]) : I, [[wt, d.value === "loaded"]])]
      });
    }, T = () => s(et, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && d.value !== "loaded" && s("img", {
        class: ["v-img__img", "v-img__img--preload", C.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), w = () => t.placeholder ? s(et, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !t.error) && s("div", {
        class: "v-img__placeholder"
      }, [t.placeholder()])]
    }) : null, x = () => t.error ? s(et, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && s("div", {
        class: "v-img__error"
      }, [t.error()])]
    }) : null, A = () => e.gradient ? s("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, V = G(!1);
    {
      const I = q(y, (D) => {
        D && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            V.value = !0;
          });
        }), I());
      });
    }
    return R(() => {
      const I = Ol.filterProps(e);
      return Be(s(Ol, N({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !V.value
        }, l.value, o.value, e.class],
        style: [{
          width: X(e.width === "auto" ? f.value : e.width)
        }, i.value, e.style]
      }, I, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => s(le, null, [s(P, null, null), s(T, null, null), s(A, null, null), s(w, null, null), s(x, null, null)]),
        default: t.default
      }), [[ct("intersect"), {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: u,
      image: c,
      state: d,
      naturalWidth: f,
      naturalHeight: m
    };
  }
}), st = B({
  border: [Boolean, Number, String]
}, "border");
function ft(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    borderClasses: b(() => {
      const t = Tn(e) ? e.value : e.border, l = [];
      if (t === !0 || t === "")
        l.push(`${a}--border`);
      else if (typeof t == "string" || t === 0)
        for (const i of String(t).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const je = B({
  elevation: {
    type: [Number, String],
    validator(e) {
      const a = parseInt(e);
      return !isNaN(a) && a >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      a <= 24;
    }
  }
}, "elevation");
function qe(e) {
  return {
    elevationClasses: b(() => {
      const n = Tn(e) ? e.value : e.elevation, t = [];
      return n == null || t.push(`elevation-${n}`), t;
    })
  };
}
const hf = [null, "prominent", "default", "comfortable", "compact"], ms = B({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => hf.includes(e)
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
  ...st(),
  ...ee(),
  ...je(),
  ...Ae(),
  ...ve({
    tag: "header"
  }),
  ...ge()
}, "VToolbar"), Rl = O()({
  name: "VToolbar",
  props: ms(),
  setup(e, a) {
    var v;
    let {
      slots: n
    } = a;
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: l
    } = Ve(E(e, "color")), {
      borderClasses: i
    } = ft(e), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Ee(e), {
      themeClasses: u
    } = ke(e), {
      rtlClasses: c
    } = We(), d = G(!!(e.extended || (v = n.extension) != null && v.call(n))), f = b(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = b(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return De({
      VBtn: {
        variant: "text"
      }
    }), R(() => {
      var S;
      const y = !!(e.title || n.title), h = !!(n.image || e.image), g = (S = n.extension) == null ? void 0 : S.call(n);
      return d.value = !!(e.extended || g), s(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, t.value, i.value, o.value, r.value, u.value, c.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [h && s("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [n.image ? s(me, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, n.image) : s(Mt, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), s(me, {
          defaults: {
            VTabs: {
              height: X(f.value)
            }
          }
        }, {
          default: () => {
            var k, p, _;
            return [s("div", {
              class: "v-toolbar__content",
              style: {
                height: X(f.value)
              }
            }, [n.prepend && s("div", {
              class: "v-toolbar__prepend"
            }, [(k = n.prepend) == null ? void 0 : k.call(n)]), y && s(Ii, {
              key: "title",
              text: e.title
            }, {
              text: n.title
            }), (p = n.default) == null ? void 0 : p.call(n), n.append && s("div", {
              class: "v-toolbar__append"
            }, [(_ = n.append) == null ? void 0 : _.call(n)])])];
          }
        }), s(me, {
          defaults: {
            VTabs: {
              height: X(m.value)
            }
          }
        }, {
          default: () => [s(Ua, null, {
            default: () => [d.value && s("div", {
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
}), yf = B({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function bf(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: n
  } = a;
  let t = 0, l = 0;
  const i = j(null), o = G(0), r = G(0), u = G(0), c = G(!1), d = G(!1), f = b(() => Number(e.scrollThreshold)), m = b(() => Oe((f.value - o.value) / f.value || 0)), v = () => {
    const y = i.value;
    if (!y || n && !n.value) return;
    t = o.value, o.value = "window" in y ? y.pageYOffset : y.scrollTop;
    const h = y instanceof Window ? document.documentElement.scrollHeight : y.scrollHeight;
    if (l !== h) {
      l = h;
      return;
    }
    d.value = o.value < t, u.value = Math.abs(o.value - f.value);
  };
  return q(d, () => {
    r.value = r.value || o.value;
  }), q(c, () => {
    r.value = 0;
  }), at(() => {
    q(() => e.scrollTarget, (y) => {
      var g;
      const h = y ? document.querySelector(y) : window;
      if (!h) {
        kt(`Unable to locate element with identifier ${y}`);
        return;
      }
      h !== i.value && ((g = i.value) == null || g.removeEventListener("scroll", v), i.value = h, i.value.addEventListener("scroll", v, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), nt(() => {
    var y;
    (y = i.value) == null || y.removeEventListener("scroll", v);
  }), n && q(n, v, {
    immediate: !0
  }), {
    scrollThreshold: f,
    currentScroll: o,
    currentThreshold: u,
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
    ssrBootStyles: b(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: ci(e)
  };
}
const Sf = B({
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
  ...ms(),
  ...gn(),
  ...yf(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), kf = O()({
  name: "VAppBar",
  props: Sf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = j(), l = ae(e, "modelValue"), i = b(() => {
      var p;
      const k = new Set(((p = e.scrollBehavior) == null ? void 0 : p.split(" ")) ?? []);
      return {
        hide: k.has("hide"),
        fullyHide: k.has("fully-hide"),
        inverted: k.has("inverted"),
        collapse: k.has("collapse"),
        elevate: k.has("elevate"),
        fadeImage: k.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = b(() => {
      const k = i.value;
      return k.hide || k.fullyHide || k.inverted || k.collapse || k.elevate || k.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: u,
      isScrollingUp: c,
      scrollRatio: d
    } = bf(e, {
      canScroll: o
    }), f = b(() => i.value.hide || i.value.fullyHide), m = b(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), v = b(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), y = b(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), h = b(() => {
      var _, C;
      if (i.value.hide && i.value.inverted) return 0;
      const k = ((_ = t.value) == null ? void 0 : _.contentHeight) ?? 0, p = ((C = t.value) == null ? void 0 : C.extensionHeight) ?? 0;
      return f.value ? r.value < u.value || i.value.fullyHide ? k + p : k : k + p;
    });
    rt(b(() => !!e.scrollBehavior), () => {
      Fe(() => {
        f.value ? i.value.inverted ? l.value = r.value > u.value : l.value = c.value || r.value < u.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: g
    } = yn(), {
      layoutItemStyles: S
    } = hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: E(e, "location"),
      layoutSize: h,
      elementSize: G(void 0),
      active: l,
      absolute: E(e, "absolute")
    });
    return R(() => {
      const k = Rl.filterProps(e);
      return s(Rl, N({
        ref: t,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...S.value,
          "--v-toolbar-image-opacity": y.value,
          height: void 0,
          ...g.value
        }, e.style]
      }, k, {
        collapse: m.value,
        flat: v.value
      }), n);
    }), {};
  }
}), xf = [null, "default", "comfortable", "compact"], Ye = B({
  density: {
    type: String,
    default: "default",
    validator: (e) => xf.includes(e)
  }
}, "density");
function lt(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    densityClasses: b(() => `${a}--density-${e.density}`)
  };
}
const wf = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ut(e, a) {
  return s(le, null, [e && s("span", {
    key: "overlay",
    class: `${a}__overlay`
  }, null), s("span", {
    key: "underlay",
    class: `${a}__underlay`
  }, null)]);
}
const bt = B({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => wf.includes(e)
  }
}, "variant");
function bn(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  const n = b(() => {
    const {
      variant: i
    } = ot(e);
    return `${a}--variant-${i}`;
  }), {
    colorClasses: t,
    colorStyles: l
  } = Bi(b(() => {
    const {
      variant: i,
      color: o
    } = ot(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: t,
    colorStyles: l,
    variantClasses: n
  };
}
const gs = B({
  baseColor: String,
  divided: Boolean,
  ...st(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...Ae(),
  ...ve(),
  ...ge(),
  ...bt()
}, "VBtnGroup"), Nl = O()({
  name: "VBtnGroup",
  props: gs(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      densityClasses: l
    } = lt(e), {
      borderClasses: i
    } = ft(e), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Ee(e);
    De({
      VBtn: {
        height: "auto",
        baseColor: E(e, "baseColor"),
        color: E(e, "color"),
        density: E(e, "density"),
        flat: !0,
        variant: E(e, "variant")
      }
    }), R(() => s(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, t.value, i.value, l.value, o.value, r.value, e.class],
      style: e.style
    }, n));
  }
}), Sn = B({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), kn = B({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function xn(e, a) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const t = Me("useGroupItem");
  if (!t)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ue();
  pe(Symbol.for(`${a.description}:id`), l);
  const i = ye(a, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`);
  }
  const o = E(e, "value"), r = b(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, t), nt(() => {
    i.unregister(l);
  });
  const u = b(() => i.isSelected(l)), c = b(() => i.items.value[0].id === l), d = b(() => i.items.value[i.items.value.length - 1].id === l), f = b(() => u.value && [i.selectedClass.value, e.selectedClass]);
  return q(u, (m) => {
    t.emit("group:selected", {
      value: m
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: u,
    isFirst: c,
    isLast: d,
    toggle: () => i.select(l, !u.value),
    select: (m) => i.select(l, m),
    selectedClass: f,
    value: o,
    disabled: r,
    group: i
  };
}
function qt(e, a) {
  let n = !1;
  const t = mt([]), l = ae(e, "modelValue", [], (m) => m == null ? [] : hs(t, Te(m)), (m) => {
    const v = Vf(t, m);
    return e.multiple ? v : v[0];
  }), i = Me("useGroup");
  function o(m, v) {
    const y = m, h = Symbol.for(`${a.description}:id`), S = pn(h, i == null ? void 0 : i.vnode).indexOf(v);
    ot(y.value) == null && (y.value = S, y.useIndexAsValue = !0), S > -1 ? t.splice(S, 0, y) : t.push(y);
  }
  function r(m) {
    if (n) return;
    u();
    const v = t.findIndex((y) => y.id === m);
    t.splice(v, 1);
  }
  function u() {
    const m = t.find((v) => !v.disabled);
    m && e.mandatory === "force" && !l.value.length && (l.value = [m.id]);
  }
  at(() => {
    u();
  }), nt(() => {
    n = !0;
  }), Oc(() => {
    for (let m = 0; m < t.length; m++)
      t[m].useIndexAsValue && (t[m].value = m);
  });
  function c(m, v) {
    const y = t.find((h) => h.id === m);
    if (!(v && (y != null && y.disabled)))
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
      const v = l.value[0], y = t.findIndex((S) => S.id === v);
      let h = (y + m) % t.length, g = t[h];
      for (; g.disabled && h !== y; )
        h = (h + m) % t.length, g = t[h];
      if (g.disabled) return;
      l.value = [t[h].id];
    } else {
      const v = t.find((y) => !y.disabled);
      v && (l.value = [v.id]);
    }
  }
  const f = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: E(e, "disabled"),
    prev: () => d(t.length - 1),
    next: () => d(1),
    isSelected: (m) => l.value.includes(m),
    selectedClass: b(() => e.selectedClass),
    items: b(() => t),
    getItemIndex: (m) => Cf(t, m)
  };
  return pe(a, f), f;
}
function Cf(e, a) {
  const n = hs(e, [a]);
  return n.length ? e.findIndex((t) => t.id === n[0]) : -1;
}
function hs(e, a) {
  const n = [];
  return a.forEach((t) => {
    const l = e.find((o) => pt(t, o.value)), i = e[t];
    (l == null ? void 0 : l.value) != null ? n.push(l.id) : i != null && n.push(i.id);
  }), n;
}
function Vf(e, a) {
  const n = [];
  return a.forEach((t) => {
    const l = e.findIndex((i) => i.id === t);
    if (~l) {
      const i = e[l];
      n.push(i.value != null ? i.value : l);
    }
  }), n;
}
const Di = Symbol.for("vuetify:v-btn-toggle"), Pf = B({
  ...gs(),
  ...Sn()
}, "VBtnToggle"), _f = O()({
  name: "VBtnToggle",
  props: Pf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      isSelected: t,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = qt(e, Di);
    return R(() => {
      const u = Nl.filterProps(e);
      return s(Nl, N({
        class: ["v-btn-toggle", e.class]
      }, u, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = n.default) == null ? void 0 : c.call(n, {
            isSelected: t,
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
}), If = ["x-small", "small", "default", "large", "x-large"], Bt = B({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ln(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return hi(() => {
    let n, t;
    return pa(If, e.size) ? n = `${a}--size-${e.size}` : e.size && (t = {
      width: X(e.size),
      height: X(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: t
    };
  });
}
const pf = B({
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
}, "VIcon"), Se = O()({
  name: "VIcon",
  props: pf(),
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const l = j(), {
      themeClasses: i
    } = ke(e), {
      iconData: o
    } = Uv(b(() => l.value || e.icon)), {
      sizeClasses: r
    } = Ln(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Xe(E(e, "color"));
    return R(() => {
      var m, v;
      const d = (m = t.default) == null ? void 0 : m.call(t);
      d && (l.value = (v = Ir(d).filter((y) => y.type === Rc && y.children && typeof y.children == "string")[0]) == null ? void 0 : v.children);
      const f = !!(n.onClick || n.onClickOnce);
      return s(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, u.value, {
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
function qa(e, a) {
  const n = j(), t = G(!1);
  if (fi) {
    const l = new IntersectionObserver((i) => {
      e == null || e(i, l), t.value = !!i.find((o) => o.isIntersecting);
    }, a);
    nt(() => {
      l.disconnect();
    }), q(n, (i, o) => {
      o && (l.unobserve(o), t.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: t
  };
}
const Af = B({
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
}, "VProgressCircular"), En = O()({
  name: "VProgressCircular",
  props: Af(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = 20, l = 2 * Math.PI * t, i = j(), {
      themeClasses: o
    } = ke(e), {
      sizeClasses: r,
      sizeStyles: u
    } = Ln(e), {
      textColorClasses: c,
      textColorStyles: d
    } = Xe(E(e, "color")), {
      textColorClasses: f,
      textColorStyles: m
    } = Xe(E(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: y
    } = qa(), {
      resizeRef: h,
      contentRect: g
    } = xt(), S = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), k = b(() => Number(e.width)), p = b(() => u.value ? Number(e.size) : g.value ? g.value.width : Math.max(k.value, 32)), _ = b(() => t / (1 - k.value / p.value) * 2), C = b(() => k.value / p.value * _.value), P = b(() => X((100 - S.value) / 100 * l));
    return Fe(() => {
      v.value = i.value, h.value = i.value;
    }), R(() => s(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class],
      style: [u.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : S.value
    }, {
      default: () => [s("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${_.value} ${_.value}`
      }, [s("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: m.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: t,
        "stroke-width": C.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), s("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: t,
        "stroke-width": C.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": P.value
      }, null)]), n.default && s("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: S.value
      })])]
    })), {};
  }
}), Ko = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Lt = B({
  location: String
}, "location");
function wn(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: t
  } = We();
  return {
    locationStyles: b(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = Tl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, t.value);
      function r(c) {
        return n ? n(c) : 0;
      }
      const u = {};
      return i !== "center" && (a ? u[Ko[i]] = `calc(100% - ${r(i)}px)` : u[i] = 0), o !== "center" ? a ? u[Ko[o]] = `calc(100% - ${r(o)}px)` : u[o] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), u;
    })
  };
}
const Tf = B({
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
  ...Lt({
    location: "top"
  }),
  ...Ae(),
  ...ve(),
  ...ge()
}, "VProgressLinear"), Ka = O()({
  name: "VProgressLinear",
  props: Tf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    var V;
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = We(), {
      themeClasses: o
    } = ke(e), {
      locationStyles: r
    } = wn(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Xe(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = Ve(b(() => e.bgColor || e.color)), {
      backgroundColorClasses: m,
      backgroundColorStyles: v
    } = Ve(b(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: h
    } = Ve(e, "color"), {
      roundedClasses: g
    } = Ee(e), {
      intersectionRef: S,
      isIntersecting: k
    } = qa(), p = b(() => parseFloat(e.max)), _ = b(() => parseFloat(e.height)), C = b(() => Oe(parseFloat(e.bufferValue) / p.value * 100, 0, 100)), P = b(() => Oe(parseFloat(t.value) / p.value * 100, 0, 100)), T = b(() => l.value !== e.reverse), w = b(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), x = xe && ((V = window.matchMedia) == null ? void 0 : V.call(window, "(forced-colors: active)").matches);
    function A(I) {
      if (!S.value) return;
      const {
        left: D,
        right: $,
        width: z
      } = S.value.getBoundingClientRect(), W = T.value ? z - I.clientX + ($ - z) : I.clientX - D;
      t.value = Math.round(W / z * p.value);
    }
    return R(() => s(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && k.value,
        "v-progress-linear--reverse": T.value,
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
      onClick: e.clickable && A
    }, {
      default: () => [e.stream && s("div", {
        key: "stream",
        class: ["v-progress-linear__stream", u.value],
        style: {
          ...c.value,
          [T.value ? "left" : "right"]: X(-_.value),
          borderTop: `${X(_.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${X(_.value / 4)})`,
          width: X(100 - C.value, "%"),
          "--v-progress-linear-stream-to": X(_.value * (T.value ? 1 : -1))
        }
      }, null), s("div", {
        class: ["v-progress-linear__background", x ? void 0 : d.value],
        style: [f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), s("div", {
        class: ["v-progress-linear__buffer", x ? void 0 : m.value],
        style: [v.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: X(C.value, "%")
        }]
      }, null), s(Wt, {
        name: w.value
      }, {
        default: () => [e.indeterminate ? s("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((I) => s("div", {
          key: I,
          class: ["v-progress-linear__indeterminate", I, x ? void 0 : y.value],
          style: h.value
        }, null))]) : s("div", {
          class: ["v-progress-linear__determinate", x ? void 0 : y.value],
          style: [h.value, {
            width: X(P.value, "%")
          }]
        }, null)]
      }), n.default && s("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: P.value,
        buffer: C.value
      })])]
    })), {};
  }
}), Xa = B({
  loading: [Boolean, String]
}, "loader");
function ra(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    loaderClasses: b(() => ({
      [`${a}--loading`]: e.loading
    }))
  };
}
function sa(e, a) {
  var t;
  let {
    slots: n
  } = a;
  return s("div", {
    class: `${e.name}__loader`
  }, [((t = n.default) == null ? void 0 : t.call(n, {
    color: e.color,
    isActive: e.active
  })) || s(Ka, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Bf = ["static", "relative", "fixed", "absolute", "sticky"], On = B({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Bf.includes(e)
    )
  }
}, "position");
function Rn(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  return {
    positionClasses: b(() => e.position ? `${a}--${e.position}` : void 0)
  };
}
function Df() {
  const e = Me("useRoute");
  return b(() => {
    var a;
    return (a = e == null ? void 0 : e.proxy) == null ? void 0 : a.$route;
  });
}
function ys() {
  var e, a;
  return (a = (e = Me("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : a.$router;
}
function ua(e, a) {
  var c, d;
  const n = Nc("RouterLink"), t = b(() => !!(e.href || e.to)), l = b(() => (t == null ? void 0 : t.value) || So(a, "click") || So(e, "click"));
  if (typeof n == "string" || !("useLink" in n))
    return {
      isLink: t,
      isClickable: l,
      href: E(e, "href")
    };
  const i = b(() => ({
    ...e,
    to: E(() => e.to || "")
  })), o = n.useLink(i.value), r = b(() => e.to ? o : void 0), u = Df();
  return {
    isLink: t,
    isClickable: l,
    route: (c = r.value) == null ? void 0 : c.route,
    navigate: (d = r.value) == null ? void 0 : d.navigate,
    isActive: b(() => {
      var f, m, v;
      return r.value ? e.exact ? u.value ? ((v = r.value.isExactActive) == null ? void 0 : v.value) && pt(r.value.route.value.query, u.value.query) : ((m = r.value.isExactActive) == null ? void 0 : m.value) ?? !1 : ((f = r.value.isActive) == null ? void 0 : f.value) ?? !1 : !1;
    }),
    href: b(() => {
      var f;
      return e.to ? (f = r.value) == null ? void 0 : f.route.value.href : e.href;
    })
  };
}
const ca = B({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let xl = !1;
function Mf(e, a) {
  let n = !1, t, l;
  xe && (we(() => {
    window.addEventListener("popstate", i), t = e == null ? void 0 : e.beforeEach((o, r, u) => {
      xl ? n ? a(u) : u() : setTimeout(() => n ? a(u) : u()), xl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      xl = !1;
    });
  }), tt(() => {
    window.removeEventListener("popstate", i), t == null || t(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Ef(e, a) {
  q(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && a && we(() => {
      a(!0);
    });
  }, {
    immediate: !0
  });
}
const zl = Symbol("rippleStop"), Ff = 80;
function Xo(e, a) {
  e.style.transform = a, e.style.webkitTransform = a;
}
function Hl(e) {
  return e.constructor.name === "TouchEvent";
}
function bs(e) {
  return e.constructor.name === "KeyboardEvent";
}
const $f = function(e, a) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = 0, l = 0;
  if (!bs(e)) {
    const m = a.getBoundingClientRect(), v = Hl(e) ? e.touches[e.touches.length - 1] : e;
    t = v.clientX - m.left, l = v.clientY - m.top;
  }
  let i = 0, o = 0.3;
  (f = a._ripple) != null && f.circle ? (o = 0.15, i = a.clientWidth / 2, i = n.center ? i : i + Math.sqrt((t - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(a.clientWidth ** 2 + a.clientHeight ** 2) / 2;
  const r = `${(a.clientWidth - i * 2) / 2}px`, u = `${(a.clientHeight - i * 2) / 2}px`, c = n.center ? r : `${t - i}px`, d = n.center ? u : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: d,
    centerX: r,
    centerY: u
  };
}, Fa = {
  /* eslint-disable max-statements */
  show(e, a) {
    var v;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = a == null ? void 0 : a._ripple) != null && v.enabled))
      return;
    const t = document.createElement("span"), l = document.createElement("span");
    t.appendChild(l), t.className = "v-ripple__container", n.class && (t.className += ` ${n.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: u,
      centerX: c,
      centerY: d
    } = $f(e, a, n), f = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, a.appendChild(t);
    const m = window.getComputedStyle(a);
    m && m.position === "static" && (a.style.position = "relative", a.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Xo(l, `translate(${r}, ${u}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Xo(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const a = e.getElementsByClassName("v-ripple__animation");
    if (a.length === 0) return;
    const n = a[a.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const t = performance.now() - Number(n.dataset.activated), l = Math.max(250 - t, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = n.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function Ss(e) {
  return typeof e > "u" || !!e;
}
function Jn(e) {
  const a = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[zl])) {
    if (e[zl] = !0, Hl(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (a.center = n._ripple.centered || bs(e), n._ripple.class && (a.class = n._ripple.class), Hl(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Fa.show(e, n, a);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var t;
        (t = n == null ? void 0 : n._ripple) != null && t.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Ff);
    } else
      Fa.show(e, n, a);
  }
}
function Zo(e) {
  e[zl] = !0;
}
function ut(e) {
  const a = e.currentTarget;
  if (a != null && a._ripple) {
    if (window.clearTimeout(a._ripple.showTimer), e.type === "touchend" && a._ripple.showTimerCommit) {
      a._ripple.showTimerCommit(), a._ripple.showTimerCommit = null, a._ripple.showTimer = window.setTimeout(() => {
        ut(e);
      });
      return;
    }
    window.setTimeout(() => {
      a._ripple && (a._ripple.touched = !1);
    }), Fa.hide(a);
  }
}
function ks(e) {
  const a = e.currentTarget;
  a != null && a._ripple && (a._ripple.showTimerCommit && (a._ripple.showTimerCommit = null), window.clearTimeout(a._ripple.showTimer));
}
let Qn = !1;
function xs(e) {
  !Qn && (e.keyCode === mo.enter || e.keyCode === mo.space) && (Qn = !0, Jn(e));
}
function ws(e) {
  Qn = !1, ut(e);
}
function Cs(e) {
  Qn && (Qn = !1, ut(e));
}
function Vs(e, a, n) {
  const {
    value: t,
    modifiers: l
  } = a, i = Ss(t);
  if (i || Fa.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Gn(t) && t.class && (e._ripple.class = t.class), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Zo, {
        passive: !0
      }), e.addEventListener("mousedown", Zo);
      return;
    }
    e.addEventListener("touchstart", Jn, {
      passive: !0
    }), e.addEventListener("touchend", ut, {
      passive: !0
    }), e.addEventListener("touchmove", ks, {
      passive: !0
    }), e.addEventListener("touchcancel", ut), e.addEventListener("mousedown", Jn), e.addEventListener("mouseup", ut), e.addEventListener("mouseleave", ut), e.addEventListener("keydown", xs), e.addEventListener("keyup", ws), e.addEventListener("blur", Cs), e.addEventListener("dragstart", ut, {
      passive: !0
    });
  } else !i && n && Ps(e);
}
function Ps(e) {
  e.removeEventListener("mousedown", Jn), e.removeEventListener("touchstart", Jn), e.removeEventListener("touchend", ut), e.removeEventListener("touchmove", ks), e.removeEventListener("touchcancel", ut), e.removeEventListener("mouseup", ut), e.removeEventListener("mouseleave", ut), e.removeEventListener("keydown", xs), e.removeEventListener("keyup", ws), e.removeEventListener("dragstart", ut), e.removeEventListener("blur", Cs);
}
function Lf(e, a) {
  Vs(e, a, !1);
}
function Of(e) {
  delete e._ripple, Ps(e);
}
function Rf(e, a) {
  if (a.value === a.oldValue)
    return;
  const n = Ss(a.oldValue);
  Vs(e, a, n);
}
const Ot = {
  mounted: Lf,
  unmounted: Of,
  updated: Rf
}, Za = B({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Di
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
  ...st(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...kn(),
  ...Xa(),
  ...Lt(),
  ...On(),
  ...Ae(),
  ...ca(),
  ...Bt(),
  ...ve({
    tag: "button"
  }),
  ...ge(),
  ...bt({
    variant: "elevated"
  })
}, "VBtn"), be = O()({
  name: "VBtn",
  props: Za(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      themeClasses: l
    } = ke(e), {
      borderClasses: i
    } = ft(e), {
      densityClasses: o
    } = lt(e), {
      dimensionStyles: r
    } = ze(e), {
      elevationClasses: u
    } = qe(e), {
      loaderClasses: c
    } = ra(e), {
      locationStyles: d
    } = wn(e), {
      positionClasses: f
    } = Rn(e), {
      roundedClasses: m
    } = Ee(e), {
      sizeClasses: v,
      sizeStyles: y
    } = Ln(e), h = xn(e, e.symbol, !1), g = ua(e, n), S = b(() => {
      var V;
      return e.active !== void 0 ? e.active : g.isLink.value ? (V = g.isActive) == null ? void 0 : V.value : h == null ? void 0 : h.isSelected.value;
    }), k = b(() => S.value ? e.activeColor ?? e.color : e.color), p = b(() => {
      var I, D;
      return {
        color: (h == null ? void 0 : h.isSelected.value) && (!g.isLink.value || ((I = g.isActive) == null ? void 0 : I.value)) || !h || ((D = g.isActive) == null ? void 0 : D.value) ? k.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: _,
      colorStyles: C,
      variantClasses: P
    } = bn(p), T = b(() => (h == null ? void 0 : h.disabled.value) || e.disabled), w = b(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), x = b(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function A(V) {
      var I;
      T.value || g.isLink.value && (V.metaKey || V.ctrlKey || V.shiftKey || V.button !== 0 || n.target === "_blank") || ((I = g.navigate) == null || I.call(g, V), h == null || h.toggle());
    }
    return Ef(g, h == null ? void 0 : h.select), R(() => {
      const V = g.isLink.value ? "a" : e.tag, I = !!(e.prependIcon || t.prepend), D = !!(e.appendIcon || t.append), $ = !!(e.icon && e.icon !== !0);
      return Be(s(V, {
        type: V === "a" ? void 0 : "button",
        class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
          "v-btn--active": S.value,
          "v-btn--block": e.block,
          "v-btn--disabled": T.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, _.value, o.value, u.value, c.value, f.value, m.value, v.value, P.value, e.class],
        style: [C.value, r.value, d.value, y.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: T.value || void 0,
        href: g.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: A,
        value: x.value
      }, {
        default: () => {
          var z;
          return [Ut(!0, "v-btn"), !e.icon && I && s("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [t.prepend ? s(me, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, t.prepend) : s(Se, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), s("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!t.default && $ ? s(Se, {
            key: "content-icon",
            icon: e.icon
          }, null) : s(me, {
            key: "content-defaults",
            disabled: !$,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var W;
              return [((W = t.default) == null ? void 0 : W.call(t)) ?? e.text];
            }
          })]), !e.icon && D && s("span", {
            key: "append",
            class: "v-btn__append"
          }, [t.append ? s(me, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, t.append) : s(Se, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && s("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((z = t.loader) == null ? void 0 : z.call(t)) ?? s(En, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Ot, !T.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), Nf = B({
  ...Za({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), zf = O()({
  name: "VAppBarNavIcon",
  props: Nf(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(be, N(e, {
      class: ["v-app-bar-nav-icon"]
    }), n)), {};
  }
}), Hf = O()({
  name: "VAppBarTitle",
  props: ss(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(Ii, N(e, {
      class: "v-app-bar-title"
    }), n)), {};
  }
}), _s = Tt("v-alert-title"), Wf = ["success", "info", "warning", "error"], jf = B({
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
    validator: (e) => Wf.includes(e)
  },
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...Lt(),
  ...On(),
  ...Ae(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "flat"
  })
}, "VAlert"), Yf = O()({
  name: "VAlert",
  props: jf(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const l = ae(e, "modelValue"), i = b(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), o = b(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: r
    } = ke(e), {
      colorClasses: u,
      colorStyles: c,
      variantClasses: d
    } = bn(o), {
      densityClasses: f
    } = lt(e), {
      dimensionStyles: m
    } = ze(e), {
      elevationClasses: v
    } = qe(e), {
      locationStyles: y
    } = wn(e), {
      positionClasses: h
    } = Rn(e), {
      roundedClasses: g
    } = Ee(e), {
      textColorClasses: S,
      textColorStyles: k
    } = Xe(E(e, "borderColor")), {
      t: p
    } = $e(), _ = b(() => ({
      "aria-label": p(e.closeLabel),
      onClick(C) {
        l.value = !1, n("click:close", C);
      }
    }));
    return () => {
      const C = !!(t.prepend || i.value), P = !!(t.title || e.title), T = !!(t.close || e.closable);
      return l.value && s(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, u.value, f.value, v.value, h.value, g.value, d.value, e.class],
        style: [c.value, m.value, y.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var w, x;
          return [Ut(!1, "v-alert"), e.border && s("div", {
            key: "border",
            class: ["v-alert__border", S.value],
            style: k.value
          }, null), C && s("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [t.prepend ? s(me, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, t.prepend) : s(Se, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), s("div", {
            class: "v-alert__content"
          }, [P && s(_s, {
            key: "title"
          }, {
            default: () => {
              var A;
              return [((A = t.title) == null ? void 0 : A.call(t)) ?? e.title];
            }
          }), ((w = t.text) == null ? void 0 : w.call(t)) ?? e.text, (x = t.default) == null ? void 0 : x.call(t)]), t.append && s("div", {
            key: "append",
            class: "v-alert__append"
          }, [t.append()]), T && s("div", {
            key: "close",
            class: "v-alert__close"
          }, [t.close ? s(me, {
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
              var A;
              return [(A = t.close) == null ? void 0 : A.call(t, {
                props: _.value
              })];
            }
          }) : s(be, N({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, _.value), null)])];
        }
      });
    };
  }
}), Gf = B({
  start: Boolean,
  end: Boolean,
  icon: re,
  image: String,
  text: String,
  ...st(),
  ...ee(),
  ...Ye(),
  ...Ae(),
  ...Bt(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "flat"
  })
}, "VAvatar"), ht = O()({
  name: "VAvatar",
  props: Gf(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      borderClasses: l
    } = ft(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = bn(e), {
      densityClasses: u
    } = lt(e), {
      roundedClasses: c
    } = Ee(e), {
      sizeClasses: d,
      sizeStyles: f
    } = Ln(e);
    return R(() => s(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, t.value, l.value, i.value, u.value, c.value, d.value, r.value, e.class],
      style: [o.value, f.value, e.style]
    }, {
      default: () => [n.default ? s(me, {
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
        default: () => [n.default()]
      }) : e.image ? s(Mt, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? s(Se, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ut(!1, "v-avatar")]
    })), {};
  }
}), Uf = B({
  text: String,
  onClick: Ge(),
  ...ee(),
  ...ge()
}, "VLabel"), Nn = O()({
  name: "VLabel",
  props: Uf(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => {
      var t;
      return s("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (t = n.default) == null ? void 0 : t.call(n)]);
    }), {};
  }
}), Is = Symbol.for("vuetify:selection-control-group"), Mi = B({
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
    default: pt
  },
  ...ee(),
  ...Ye(),
  ...ge()
}, "SelectionControlGroup"), qf = B({
  ...Mi({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), ps = O()({
  name: "VSelectionControlGroup",
  props: qf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), l = Ue(), i = b(() => e.id || `v-selection-control-group-${l}`), o = b(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return pe(Is, {
      modelValue: t,
      forceUpdate: () => {
        r.forEach((u) => u());
      },
      onForceUpdate: (u) => {
        r.add(u), tt(() => {
          r.delete(u);
        });
      }
    }), De({
      [e.defaultsTarget]: {
        color: E(e, "color"),
        disabled: E(e, "disabled"),
        density: E(e, "density"),
        error: E(e, "error"),
        inline: E(e, "inline"),
        modelValue: t,
        multiple: b(() => !!e.multiple || e.multiple == null && Array.isArray(t.value)),
        name: o,
        falseIcon: E(e, "falseIcon"),
        trueIcon: E(e, "trueIcon"),
        readonly: E(e, "readonly"),
        ripple: E(e, "ripple"),
        type: E(e, "type"),
        valueComparator: E(e, "valueComparator")
      }
    }), R(() => {
      var u;
      return s("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(u = n.default) == null ? void 0 : u.call(n)]);
    }), {};
  }
}), Ja = B({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ee(),
  ...Mi()
}, "VSelectionControl");
function Kf(e) {
  const a = ye(Is, void 0), {
    densityClasses: n
  } = lt(e), t = ae(e, "modelValue"), l = b(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = b(() => e.falseValue !== void 0 ? e.falseValue : !1), o = b(() => !!e.multiple || e.multiple == null && Array.isArray(t.value)), r = b({
    get() {
      const v = a ? a.modelValue.value : t.value;
      return o.value ? Te(v).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(v, l.value);
    },
    set(v) {
      if (e.readonly) return;
      const y = v ? l.value : i.value;
      let h = y;
      o.value && (h = v ? [...Te(t.value), y] : Te(t.value).filter((g) => !e.valueComparator(g, l.value))), a ? a.modelValue.value = h : t.value = h;
    }
  }), {
    textColorClasses: u,
    textColorStyles: c
  } = Xe(b(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: f
  } = Ve(b(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), m = b(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: a,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: u,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: f,
    icon: m
  };
}
const jt = O()({
  name: "VSelectionControl",
  directives: {
    Ripple: Ot
  },
  inheritAttrs: !1,
  props: Ja(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: u,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: f,
      trueValue: m
    } = Kf(e), v = Ue(), y = G(!1), h = G(!1), g = j(), S = b(() => e.id || `input-${v}`), k = b(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      g.value && (g.value.checked = r.value);
    });
    function p(T) {
      k.value && (y.value = !0, Bn(T.target, ":focus-visible") !== !1 && (h.value = !0));
    }
    function _() {
      y.value = !1, h.value = !1;
    }
    function C(T) {
      T.stopPropagation();
    }
    function P(T) {
      if (!k.value) {
        g.value && (g.value.checked = r.value);
        return;
      }
      e.readonly && l && we(() => l.forceUpdate()), r.value = T.target.checked;
    }
    return R(() => {
      var V, I;
      const T = t.label ? t.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [w, x] = Gt(n), A = s("input", N({
        ref: g,
        checked: r.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: _,
        onFocus: p,
        onInput: P,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: m.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, x), null);
      return s("div", N({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": h.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, w, {
        style: e.style
      }), [s("div", {
        class: ["v-selection-control__wrapper", u.value],
        style: c.value
      }, [(V = t.default) == null ? void 0 : V.call(t, {
        backgroundColorClasses: d,
        backgroundColorStyles: f
      }), Be(s("div", {
        class: ["v-selection-control__input"]
      }, [((I = t.input) == null ? void 0 : I.call(t, {
        model: r,
        textColorClasses: u,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: f,
        inputNode: A,
        icon: o.value,
        props: {
          onFocus: p,
          onBlur: _,
          id: S.value
        }
      })) ?? s(le, null, [o.value && s(Se, {
        key: "icon",
        icon: o.value
      }, null), A])]), [[ct("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), T && s(Nn, {
        for: S.value,
        onClick: C
      }, {
        default: () => [T]
      })]);
    }), {
      isFocused: y,
      input: g
    };
  }
}), As = B({
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
  props: As(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "indeterminate"), l = ae(e, "modelValue");
    function i(u) {
      t.value && (t.value = !1);
    }
    const o = b(() => t.value ? e.indeterminateIcon : e.falseIcon), r = b(() => t.value ? e.indeterminateIcon : e.trueIcon);
    return R(() => {
      const u = Re(jt.filterProps(e), ["modelValue"]);
      return s(jt, N(u, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": t.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function Ts(e) {
  const {
    t: a
  } = $e();
  function n(t) {
    let {
      name: l
    } = t;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], o = e[`onClick:${l}`], r = o && i ? a(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return s(Se, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: o
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Xf = B({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ee(),
  ...Ct({
    transition: {
      component: Ai,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Bs = O()({
  name: "VMessages",
  props: Xf(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = b(() => Te(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = Xe(b(() => e.color));
    return R(() => s(et, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && t.value.map((o, r) => s("div", {
        class: "v-messages__message",
        key: `${r}-${t.value}`
      }, [n.message ? n.message({
        message: o
      }) : o]))]
    })), {};
  }
}), da = B({
  focused: Boolean,
  "onUpdate:focused": Ge()
}, "focus");
function Rt(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
  const n = ae(e, "focused"), t = b(() => ({
    [`${a}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: t,
    isFocused: n,
    focus: l,
    blur: i
  };
}
const Ds = Symbol.for("vuetify:form"), Zf = B({
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
function Jf(e) {
  const a = ae(e, "modelValue"), n = b(() => e.disabled), t = b(() => e.readonly), l = G(!1), i = j([]), o = j([]);
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
  function u() {
    i.value.forEach((d) => d.reset());
  }
  function c() {
    i.value.forEach((d) => d.resetValidation());
  }
  return q(i, () => {
    let d = 0, f = 0;
    const m = [];
    for (const v of i.value)
      v.isValid === !1 ? (f++, m.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && d++;
    o.value = m, a.value = f > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), pe(Ds, {
    register: (d) => {
      let {
        id: f,
        vm: m,
        validate: v,
        reset: y,
        resetValidation: h
      } = d;
      i.value.some((g) => g.id === f) && kt(`Duplicate input name "${f}"`), i.value.push({
        id: f,
        validate: v,
        reset: y,
        resetValidation: h,
        vm: zc(m),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((f) => f.id !== d);
    },
    update: (d, f, m) => {
      const v = i.value.find((y) => y.id === d);
      v && (v.isValid = f, v.errorMessages = m);
    },
    isDisabled: n,
    isReadonly: t,
    isValidating: l,
    isValid: a,
    items: i,
    validateOn: E(e, "validateOn")
  }), {
    errors: o,
    isDisabled: n,
    isReadonly: t,
    isValidating: l,
    isValid: a,
    items: i,
    validate: r,
    reset: u,
    resetValidation: c
  };
}
function Qa() {
  return ye(Ds, null);
}
const Ms = B({
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
function Es(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ue();
  const t = ae(e, "modelValue"), l = b(() => e.validationValue === void 0 ? t.value : e.validationValue), i = Qa(), o = j([]), r = G(!0), u = b(() => !!(Te(t.value === "" ? null : t.value).length || Te(l.value === "" ? null : l.value).length)), c = b(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), d = b(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), f = b(() => {
    var C;
    return (C = e.errorMessages) != null && C.length ? Te(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), m = b(() => {
    let C = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    C === "lazy" && (C = "input lazy"), C === "eager" && (C = "input eager");
    const P = new Set((C == null ? void 0 : C.split(" ")) ?? []);
    return {
      input: P.has("input"),
      blur: P.has("blur") || P.has("input") || P.has("invalid-input"),
      invalidInput: P.has("invalid-input"),
      lazy: P.has("lazy"),
      eager: P.has("eager")
    };
  }), v = b(() => {
    var C;
    return e.error || (C = e.errorMessages) != null && C.length ? !1 : e.rules.length ? r.value ? o.value.length || m.value.lazy ? null : !0 : !o.value.length : !0;
  }), y = G(!1), h = b(() => ({
    [`${a}--error`]: v.value === !1,
    [`${a}--dirty`]: u.value,
    [`${a}--disabled`]: c.value,
    [`${a}--readonly`]: d.value
  })), g = Me("validation"), S = b(() => e.name ?? ot(n));
  Sr(() => {
    i == null || i.register({
      id: S.value,
      vm: g,
      validate: _,
      reset: k,
      resetValidation: p
    });
  }), nt(() => {
    i == null || i.unregister(S.value);
  }), at(async () => {
    m.value.lazy || await _(!m.value.eager), i == null || i.update(S.value, v.value, f.value);
  }), rt(() => m.value.input || m.value.invalidInput && v.value === !1, () => {
    q(l, () => {
      if (l.value != null)
        _();
      else if (e.focused) {
        const C = q(() => e.focused, (P) => {
          P || _(), C();
        });
      }
    });
  }), rt(() => m.value.blur, () => {
    q(() => e.focused, (C) => {
      C || _();
    });
  }), q([v, f], () => {
    i == null || i.update(S.value, v.value, f.value);
  });
  async function k() {
    t.value = null, await we(), await p();
  }
  async function p() {
    r.value = !0, m.value.lazy ? o.value = [] : await _(!m.value.eager);
  }
  async function _() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const P = [];
    y.value = !0;
    for (const T of e.rules) {
      if (P.length >= +(e.maxErrors ?? 1))
        break;
      const x = await (typeof T == "function" ? T : () => T)(l.value);
      if (x !== !0) {
        if (x !== !1 && typeof x != "string") {
          console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        P.push(x || "");
      }
    }
    return o.value = P, y.value = !1, r.value = C, o.value;
  }
  return {
    errorMessages: f,
    isDirty: u,
    isDisabled: c,
    isReadonly: d,
    isPristine: r,
    isValid: v,
    isValidating: y,
    reset: k,
    resetValidation: p,
    validate: _,
    validationClasses: h
  };
}
const Nt = B({
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
  ...Ms()
}, "VInput"), Ze = O()({
  name: "VInput",
  props: {
    ...Nt()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t,
      emit: l
    } = a;
    const {
      densityClasses: i
    } = lt(e), {
      dimensionStyles: o
    } = ze(e), {
      themeClasses: r
    } = ke(e), {
      rtlClasses: u
    } = We(), {
      InputIcon: c
    } = Ts(e), d = Ue(), f = b(() => e.id || `input-${d}`), m = b(() => `${f.value}-messages`), {
      errorMessages: v,
      isDirty: y,
      isDisabled: h,
      isReadonly: g,
      isPristine: S,
      isValid: k,
      isValidating: p,
      reset: _,
      resetValidation: C,
      validate: P,
      validationClasses: T
    } = Es(e, "v-input", f), w = b(() => ({
      id: f,
      messagesId: m,
      isDirty: y,
      isDisabled: h,
      isReadonly: g,
      isPristine: S,
      isValid: k,
      isValidating: p,
      reset: _,
      resetValidation: C,
      validate: P
    })), x = b(() => {
      var A;
      return (A = e.errorMessages) != null && A.length || !S.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return R(() => {
      var $, z, W, Z;
      const A = !!(t.prepend || e.prependIcon), V = !!(t.append || e.appendIcon), I = x.value.length > 0, D = !e.hideDetails || e.hideDetails === "auto" && (I || !!t.details);
      return s("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, u.value, T.value, e.class],
        style: [o.value, e.style]
      }, [A && s("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [($ = t.prepend) == null ? void 0 : $.call(t, w.value), e.prependIcon && s(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), t.default && s("div", {
        class: "v-input__control"
      }, [(z = t.default) == null ? void 0 : z.call(t, w.value)]), V && s("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && s(c, {
        key: "append-icon",
        name: "append"
      }, null), (W = t.append) == null ? void 0 : W.call(t, w.value)]), D && s("div", {
        class: "v-input__details"
      }, [s(Bs, {
        id: m.value,
        active: I,
        messages: x.value
      }, {
        message: t.message
      }), (Z = t.details) == null ? void 0 : Z.call(t, w.value)])]);
    }), {
      reset: _,
      resetValidation: C,
      validate: P,
      isValid: k,
      errorMessages: v
    };
  }
}), Qf = B({
  ...Nt(),
  ...Re(As(), ["inline"])
}, "VCheckbox"), em = O()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Qf(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const l = ae(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = Rt(e), u = Ue(), c = b(() => e.id || `checkbox-${u}`);
    return R(() => {
      const [d, f] = Gt(n), m = Ze.filterProps(e), v = Et.filterProps(e);
      return s(Ze, N({
        class: ["v-checkbox", e.class]
      }, d, m, {
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...t,
        default: (y) => {
          let {
            id: h,
            messagesId: g,
            isDisabled: S,
            isReadonly: k,
            isValid: p
          } = y;
          return s(Et, N(v, {
            id: h.value,
            "aria-describedby": g.value,
            disabled: S.value,
            readonly: k.value
          }, f, {
            error: p.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (_) => l.value = _,
            onFocus: o,
            onBlur: r
          }), t);
        }
      });
    }), {};
  }
});
function tm(e) {
  let {
    selectedElement: a,
    containerElement: n,
    isRtl: t,
    isHorizontal: l
  } = e;
  const i = ea(l, n), o = Fs(l, t, n), r = ea(l, a), u = $s(l, a), c = r * 0.4;
  return o > u ? u - c : o + i < u + r ? u - i + r + c : o;
}
function nm(e) {
  let {
    selectedElement: a,
    containerElement: n,
    isHorizontal: t
  } = e;
  const l = ea(t, n), i = $s(t, a), o = ea(t, a);
  return i - l / 2 + o / 2;
}
function Jo(e, a) {
  const n = e ? "scrollWidth" : "scrollHeight";
  return (a == null ? void 0 : a[n]) || 0;
}
function am(e, a) {
  const n = e ? "clientWidth" : "clientHeight";
  return (a == null ? void 0 : a[n]) || 0;
}
function Fs(e, a, n) {
  if (!n)
    return 0;
  const {
    scrollLeft: t,
    offsetWidth: l,
    scrollWidth: i
  } = n;
  return e ? a ? i - l + t : t : n.scrollTop;
}
function ea(e, a) {
  const n = e ? "offsetWidth" : "offsetHeight";
  return (a == null ? void 0 : a[n]) || 0;
}
function $s(e, a) {
  const n = e ? "offsetLeft" : "offsetTop";
  return (a == null ? void 0 : a[n]) || 0;
}
const Ls = Symbol.for("vuetify:v-slide-group"), Ei = B({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Ls
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
  props: Ei(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      isRtl: t
    } = We(), {
      displayClasses: l,
      mobile: i
    } = yt(e), o = qt(e, e.symbol), r = G(!1), u = G(0), c = G(0), d = G(0), f = b(() => e.direction === "horizontal"), {
      resizeRef: m,
      contentRect: v
    } = xt(), {
      resizeRef: y,
      contentRect: h
    } = xt(), g = Nv(), S = b(() => ({
      container: m.el,
      duration: 200,
      easing: "easeOutQuart"
    })), k = b(() => o.selected.value.length ? o.items.value.findIndex((F) => F.id === o.selected.value[0]) : -1), p = b(() => o.selected.value.length ? o.items.value.findIndex((F) => F.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (xe) {
      let F = -1;
      q(() => [o.selected.value, v.value, h.value, f.value], () => {
        cancelAnimationFrame(F), F = requestAnimationFrame(() => {
          if (v.value && h.value) {
            const M = f.value ? "width" : "height";
            c.value = v.value[M], d.value = h.value[M], r.value = c.value + 1 < d.value;
          }
          if (k.value >= 0 && y.el) {
            const M = y.el.children[p.value];
            C(M, e.centerActive);
          }
        });
      });
    }
    const _ = G(!1);
    function C(F, M) {
      let U = 0;
      M ? U = nm({
        containerElement: m.el,
        isHorizontal: f.value,
        selectedElement: F
      }) : U = tm({
        containerElement: m.el,
        isHorizontal: f.value,
        isRtl: t.value,
        selectedElement: F
      }), P(U);
    }
    function P(F) {
      if (!xe || !m.el) return;
      const M = ea(f.value, m.el), U = Fs(f.value, t.value, m.el);
      if (!(Jo(f.value, m.el) <= M || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(F - U) < 16)) {
        if (f.value && t.value && m.el) {
          const {
            scrollWidth: te,
            offsetWidth: ue
          } = m.el;
          F = te - ue - F;
        }
        f.value ? g.horizontal(F, S.value) : g(F, S.value);
      }
    }
    function T(F) {
      const {
        scrollTop: M,
        scrollLeft: U
      } = F.target;
      u.value = f.value ? U : M;
    }
    function w(F) {
      if (_.value = !0, !(!r.value || !y.el)) {
        for (const M of F.composedPath())
          for (const U of y.el.children)
            if (U === M) {
              C(U);
              return;
            }
      }
    }
    function x(F) {
      _.value = !1;
    }
    let A = !1;
    function V(F) {
      var M;
      !A && !_.value && !(F.relatedTarget && ((M = y.el) != null && M.contains(F.relatedTarget))) && $(), A = !1;
    }
    function I() {
      A = !0;
    }
    function D(F) {
      if (!y.el) return;
      function M(U) {
        F.preventDefault(), $(U);
      }
      f.value ? F.key === "ArrowRight" ? M(t.value ? "prev" : "next") : F.key === "ArrowLeft" && M(t.value ? "next" : "prev") : F.key === "ArrowDown" ? M("next") : F.key === "ArrowUp" && M("prev"), F.key === "Home" ? M("first") : F.key === "End" && M("last");
    }
    function $(F) {
      var U, oe;
      if (!y.el) return;
      let M;
      if (!F)
        M = Un(y.el)[0];
      else if (F === "next") {
        if (M = (U = y.el.querySelector(":focus")) == null ? void 0 : U.nextElementSibling, !M) return $("first");
      } else if (F === "prev") {
        if (M = (oe = y.el.querySelector(":focus")) == null ? void 0 : oe.previousElementSibling, !M) return $("last");
      } else F === "first" ? M = y.el.firstElementChild : F === "last" && (M = y.el.lastElementChild);
      M && M.focus({
        preventScroll: !0
      });
    }
    function z(F) {
      const M = f.value && t.value ? -1 : 1, U = (F === "prev" ? -M : M) * c.value;
      let oe = u.value + U;
      if (f.value && t.value && m.el) {
        const {
          scrollWidth: te,
          offsetWidth: ue
        } = m.el;
        oe += te - ue;
      }
      P(oe);
    }
    const W = b(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), Z = b(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return r.value || Math.abs(u.value) > 0;
        case "mobile":
          return i.value || r.value || Math.abs(u.value) > 0;
        default:
          return !i.value && (r.value || Math.abs(u.value) > 0);
      }
    }), J = b(() => Math.abs(u.value) > 1), L = b(() => {
      if (!m.value) return !1;
      const F = Jo(f.value, m.el), M = am(f.value, m.el);
      return F - M - Math.abs(u.value) > 1;
    });
    return R(() => s(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": Z.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: _.value || o.selected.value.length ? -1 : 0,
      onFocus: V
    }, {
      default: () => {
        var F, M, U;
        return [Z.value && s("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !J.value
          }],
          onMousedown: I,
          onClick: () => J.value && z("prev")
        }, [((F = n.prev) == null ? void 0 : F.call(n, W.value)) ?? s(Zn, null, {
          default: () => [s(Se, {
            icon: t.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), s("div", {
          key: "container",
          ref: m,
          class: "v-slide-group__container",
          onScroll: T
        }, [s("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: w,
          onFocusout: x,
          onKeydown: D
        }, [(M = n.default) == null ? void 0 : M.call(n, W.value)])]), Z.value && s("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !L.value
          }],
          onMousedown: I,
          onClick: () => L.value && z("next")
        }, [((U = n.next) == null ? void 0 : U.call(n, W.value)) ?? s(Zn, null, {
          default: () => [s(Se, {
            icon: t.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: z,
      scrollOffset: u,
      focus: $,
      hasPrev: J,
      hasNext: L
    };
  }
}), Os = Symbol.for("vuetify:v-chip-group"), lm = B({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: pt
  },
  ...Ei(),
  ...ee(),
  ...Sn({
    selectedClass: "v-chip--selected"
  }),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "tonal"
  })
}, "VChipGroup"), im = O()({
  name: "VChipGroup",
  props: lm(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: u
    } = qt(e, Os);
    return De({
      VChip: {
        color: E(e, "color"),
        disabled: E(e, "disabled"),
        filter: E(e, "filter"),
        variant: E(e, "variant")
      }
    }), R(() => {
      const c = ta.filterProps(e);
      return s(ta, N(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, t.value, e.class],
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = n.default) == null ? void 0 : d.call(n, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: u.value
          })];
        }
      });
    }), {};
  }
}), om = B({
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
  ...st(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...kn(),
  ...Ae(),
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
    Ripple: Ot
  },
  props: om(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const {
      t: i
    } = $e(), {
      borderClasses: o
    } = ft(e), {
      colorClasses: r,
      colorStyles: u,
      variantClasses: c
    } = bn(e), {
      densityClasses: d
    } = lt(e), {
      elevationClasses: f
    } = qe(e), {
      roundedClasses: m
    } = Ee(e), {
      sizeClasses: v
    } = Ln(e), {
      themeClasses: y
    } = ke(e), h = ae(e, "modelValue"), g = xn(e, Os, !1), S = ua(e, n), k = b(() => e.link !== !1 && S.isLink.value), p = b(() => !e.disabled && e.link !== !1 && (!!g || e.link || S.isClickable.value)), _ = b(() => ({
      "aria-label": i(e.closeLabel),
      onClick(T) {
        T.preventDefault(), T.stopPropagation(), h.value = !1, t("click:close", T);
      }
    }));
    function C(T) {
      var w;
      t("click", T), p.value && ((w = S.navigate) == null || w.call(S, T), g == null || g.toggle());
    }
    function P(T) {
      (T.key === "Enter" || T.key === " ") && (T.preventDefault(), C(T));
    }
    return () => {
      const T = S.isLink.value ? "a" : e.tag, w = !!(e.appendIcon || e.appendAvatar), x = !!(w || l.append), A = !!(l.close || e.closable), V = !!(l.filter || e.filter) && g, I = !!(e.prependIcon || e.prependAvatar), D = !!(I || l.prepend), $ = !g || g.isSelected.value;
      return h.value && Be(s(T, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": p.value,
          "v-chip--filter": V,
          "v-chip--pill": e.pill
        }, y.value, o.value, $ ? r.value : void 0, d.value, f.value, m.value, v.value, c.value, g == null ? void 0 : g.selectedClass.value, e.class],
        style: [$ ? u.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: S.href.value,
        tabindex: p.value ? 0 : void 0,
        onClick: C,
        onKeydown: p.value && !k.value && P
      }, {
        default: () => {
          var z;
          return [Ut(p.value, "v-chip"), V && s(Ti, {
            key: "filter"
          }, {
            default: () => [Be(s("div", {
              class: "v-chip__filter"
            }, [l.filter ? s(me, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : s(Se, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[wt, g.isSelected.value]])]
          }), D && s("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? s(me, {
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
          }, l.prepend) : s(le, null, [e.prependIcon && s(Se, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && s(ht, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), s("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((z = l.default) == null ? void 0 : z.call(l, {
            isSelected: g == null ? void 0 : g.isSelected.value,
            selectedClass: g == null ? void 0 : g.selectedClass.value,
            select: g == null ? void 0 : g.select,
            toggle: g == null ? void 0 : g.toggle,
            value: g == null ? void 0 : g.value.value,
            disabled: e.disabled
          })) ?? e.text]), x && s("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? s(me, {
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
          }, l.append) : s(le, null, [e.appendIcon && s(Se, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && s(ht, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), A && s("button", N({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, _.value), [l.close ? s(me, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : s(Se, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[ct("ripple"), p.value && e.ripple, null]]);
    };
  }
}), Wl = Symbol.for("vuetify:list");
function Rs() {
  const e = ye(Wl, {
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), a = {
    hasPrepend: G(!1),
    updateHasPrepend: (n) => {
      n && (a.hasPrepend.value = n);
    }
  };
  return pe(Wl, a), e;
}
function Ns() {
  return ye(Wl, null);
}
const Fi = (e) => {
  const a = {
    activate: (n) => {
      let {
        id: t,
        value: l,
        activated: i
      } = n;
      return t = Ie(t), e && !l && i.size === 1 && i.has(t) || (l ? i.add(t) : i.delete(t)), i;
    },
    in: (n, t, l) => {
      let i = /* @__PURE__ */ new Set();
      if (n != null)
        for (const o of Te(n))
          i = a.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: t,
            parents: l
          });
      return i;
    },
    out: (n) => Array.from(n)
  };
  return a;
}, zs = (e) => {
  const a = Fi(e);
  return {
    activate: (t) => {
      let {
        activated: l,
        id: i,
        ...o
      } = t;
      i = Ie(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return a.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (t, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (t != null) {
        const r = Te(t);
        r.length && (o = a.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (t, l, i) => a.out(t, l, i)
  };
}, rm = (e) => {
  const a = Fi(e);
  return {
    activate: (t) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = t;
      return l = Ie(l), o.has(l) ? i : a.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: a.in,
    out: a.out
  };
}, sm = (e) => {
  const a = zs(e);
  return {
    activate: (t) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = t;
      return l = Ie(l), o.has(l) ? i : a.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: a.in,
    out: a.out
  };
}, um = {
  open: (e) => {
    let {
      id: a,
      value: n,
      opened: t,
      parents: l
    } = e;
    if (n) {
      const i = /* @__PURE__ */ new Set();
      i.add(a);
      let o = l.get(a);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return t.delete(a), t;
  },
  select: () => null
}, Hs = {
  open: (e) => {
    let {
      id: a,
      value: n,
      opened: t,
      parents: l
    } = e;
    if (n) {
      let i = Ie(l.get(a));
      for (t.add(a); i != null && i !== a; )
        t.add(i), i = Ie(l.get(i));
      return t;
    } else
      t.delete(a);
    return t;
  },
  select: () => null
}, cm = {
  open: Hs.open,
  select: (e) => {
    let {
      id: a,
      value: n,
      opened: t,
      parents: l
    } = e;
    if (!n) return t;
    const i = [];
    let o = l.get(a);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, $i = (e) => {
  const a = {
    select: (n) => {
      let {
        id: t,
        value: l,
        selected: i
      } = n;
      if (t = Ie(t), e && !l) {
        const o = Array.from(i.entries()).reduce((r, u) => {
          let [c, d] = u;
          return d === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === t) return i;
      }
      return i.set(t, l ? "on" : "off"), i;
    },
    in: (n, t, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of n || [])
        i = a.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: t,
          parents: l
        });
      return i;
    },
    out: (n) => {
      const t = [];
      for (const [l, i] of n.entries())
        i === "on" && t.push(l);
      return t;
    }
  };
  return a;
}, Ws = (e) => {
  const a = $i(e);
  return {
    select: (t) => {
      let {
        selected: l,
        id: i,
        ...o
      } = t;
      i = Ie(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return a.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (t, l, i) => {
      let o = /* @__PURE__ */ new Map();
      return t != null && t.length && (o = a.in(t.slice(0, 1), l, i)), o;
    },
    out: (t, l, i) => a.out(t, l, i)
  };
}, dm = (e) => {
  const a = $i(e);
  return {
    select: (t) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = t;
      return l = Ie(l), o.has(l) ? i : a.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: a.in,
    out: a.out
  };
}, vm = (e) => {
  const a = Ws(e);
  return {
    select: (t) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = t;
      return l = Ie(l), o.has(l) ? i : a.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: a.in,
    out: a.out
  };
}, fm = (e) => {
  const a = {
    select: (n) => {
      let {
        id: t,
        value: l,
        selected: i,
        children: o,
        parents: r
      } = n;
      t = Ie(t);
      const u = new Map(i), c = [t];
      for (; c.length; ) {
        const f = c.shift();
        i.set(Ie(f), l ? "on" : "off"), o.has(f) && c.push(...o.get(f));
      }
      let d = Ie(r.get(t));
      for (; d; ) {
        const f = o.get(d), m = f.every((y) => i.get(Ie(y)) === "on"), v = f.every((y) => !i.has(Ie(y)) || i.get(Ie(y)) === "off");
        i.set(d, m ? "on" : v ? "off" : "indeterminate"), d = Ie(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((m, v) => {
        let [y, h] = v;
        return h === "on" && m.push(y), m;
      }, []).length === 0 ? u : i;
    },
    in: (n, t, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of n || [])
        i = a.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: t,
          parents: l
        });
      return i;
    },
    out: (n, t) => {
      const l = [];
      for (const [i, o] of n.entries())
        o === "on" && !t.has(i) && l.push(i);
      return l;
    }
  };
  return a;
}, na = Symbol.for("vuetify:nested"), js = {
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
}, mm = B({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), gm = (e) => {
  let a = !1;
  const n = j(/* @__PURE__ */ new Map()), t = j(/* @__PURE__ */ new Map()), l = ae(e, "opened", e.opened, (v) => new Set(Ie(v)), (v) => [...v.values()]), i = b(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return rm(e.mandatory);
      case "single-leaf":
        return sm(e.mandatory);
      case "independent":
        return Fi(e.mandatory);
      case "single-independent":
      default:
        return zs(e.mandatory);
    }
  }), o = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return vm(e.mandatory);
      case "leaf":
        return dm(e.mandatory);
      case "independent":
        return $i(e.mandatory);
      case "single-independent":
        return Ws(e.mandatory);
      case "classic":
      default:
        return fm(e.mandatory);
    }
  }), r = b(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return cm;
      case "single":
        return um;
      case "multiple":
      default:
        return Hs;
    }
  }), u = ae(e, "activated", e.activated, (v) => i.value.in(v, n.value, t.value), (v) => i.value.out(v, n.value, t.value)), c = ae(e, "selected", e.selected, (v) => o.value.in(v, n.value, t.value), (v) => o.value.out(v, n.value, t.value));
  nt(() => {
    a = !0;
  });
  function d(v) {
    const y = [];
    let h = v;
    for (; h != null; )
      y.unshift(h), h = t.value.get(h);
    return y;
  }
  const f = Me("nested"), m = {
    id: G(),
    root: {
      opened: l,
      activatable: E(e, "activatable"),
      selectable: E(e, "selectable"),
      activated: u,
      selected: c,
      selectedValues: b(() => {
        const v = [];
        for (const [y, h] of c.value.entries())
          h === "on" && v.push(y);
        return v;
      }),
      register: (v, y, h) => {
        y && v !== y && t.value.set(v, y), h && n.value.set(v, []), y != null && n.value.set(y, [...n.value.get(y) || [], v]);
      },
      unregister: (v) => {
        if (a) return;
        n.value.delete(v);
        const y = t.value.get(v);
        if (y) {
          const h = n.value.get(y) ?? [];
          n.value.set(y, h.filter((g) => g !== v));
        }
        t.value.delete(v);
      },
      open: (v, y, h) => {
        f.emit("click:open", {
          id: v,
          value: y,
          path: d(v),
          event: h
        });
        const g = r.value.open({
          id: v,
          value: y,
          opened: new Set(l.value),
          children: n.value,
          parents: t.value,
          event: h
        });
        g && (l.value = g);
      },
      openOnSelect: (v, y, h) => {
        const g = r.value.select({
          id: v,
          value: y,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: n.value,
          parents: t.value,
          event: h
        });
        g && (l.value = g);
      },
      select: (v, y, h) => {
        f.emit("click:select", {
          id: v,
          value: y,
          path: d(v),
          event: h
        });
        const g = o.value.select({
          id: v,
          value: y,
          selected: new Map(c.value),
          children: n.value,
          parents: t.value,
          event: h
        });
        g && (c.value = g), m.root.openOnSelect(v, y, h);
      },
      activate: (v, y, h) => {
        if (!e.activatable)
          return m.root.select(v, !0, h);
        f.emit("click:activate", {
          id: v,
          value: y,
          path: d(v),
          event: h
        });
        const g = i.value.activate({
          id: v,
          value: y,
          activated: new Set(u.value),
          children: n.value,
          parents: t.value,
          event: h
        });
        g && (u.value = g);
      },
      children: n,
      parents: t
    }
  };
  return pe(na, m), m.root;
}, Ys = (e, a) => {
  const n = ye(na, js), t = Symbol(Ue()), l = b(() => e.value !== void 0 ? e.value : t), i = {
    ...n,
    id: l,
    open: (o, r) => n.root.open(Ie(l.value), o, r),
    openOnSelect: (o, r) => n.root.openOnSelect(l.value, o, r),
    isOpen: b(() => n.root.opened.value.has(Ie(l.value))),
    parent: b(() => n.root.parents.value.get(l.value)),
    activate: (o, r) => n.root.activate(l.value, o, r),
    isActivated: b(() => n.root.activated.value.has(Ie(l.value))),
    select: (o, r) => n.root.select(l.value, o, r),
    isSelected: b(() => n.root.selected.value.get(Ie(l.value)) === "on"),
    isIndeterminate: b(() => n.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: b(() => !n.root.children.value.get(l.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(l.value, n.id.value, a), nt(() => {
    !n.isGroupActivator && n.root.unregister(l.value);
  }), a && pe(na, i), i;
}, hm = () => {
  const e = ye(na, js);
  pe(na, {
    ...e,
    isGroupActivator: !0
  });
}, ym = dt({
  name: "VListGroupActivator",
  setup(e, a) {
    let {
      slots: n
    } = a;
    return hm(), () => {
      var t;
      return (t = n.default) == null ? void 0 : t.call(n);
    };
  }
}), bm = B({
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
}, "VListGroup"), jl = O()({
  name: "VListGroup",
  props: bm(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      isOpen: t,
      open: l,
      id: i
    } = Ys(E(e, "value"), !0), o = b(() => `v-list-group--id-${String(i.value)}`), r = Ns(), {
      isBooted: u
    } = yn();
    function c(v) {
      v.stopPropagation(), l(!t.value, v);
    }
    const d = b(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), f = b(() => t.value ? e.collapseIcon : e.expandIcon), m = b(() => ({
      VListItem: {
        active: t.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && f.value,
        appendIcon: e.appendIcon || !e.subgroup && f.value,
        title: e.title,
        value: e.value
      }
    }));
    return R(() => s(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": t.value
      }, e.class],
      style: e.style
    }, {
      default: () => [n.activator && s(me, {
        defaults: m.value
      }, {
        default: () => [s(ym, null, {
          default: () => [n.activator({
            props: d.value,
            isOpen: t.value
          })]
        })]
      }), s(et, {
        transition: {
          component: Ua
        },
        disabled: !u.value
      }, {
        default: () => {
          var v;
          return [Be(s("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(v = n.default) == null ? void 0 : v.call(n)]), [[wt, t.value]])];
        }
      })]
    })), {
      isOpen: t
    };
  }
}), Sm = B({
  opacity: [Number, String],
  ...ee(),
  ...ve()
}, "VListItemSubtitle"), Gs = O()({
  name: "VListItemSubtitle",
  props: Sm(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Us = Tt("v-list-item-title"), km = B({
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
  ...st(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...Ae(),
  ...ca(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "text"
  })
}, "VListItem"), Ft = O()({
  name: "VListItem",
  directives: {
    Ripple: Ot
  },
  props: km(),
  emits: {
    click: (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t,
      emit: l
    } = a;
    const i = ua(e, n), o = b(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: u,
      select: c,
      isOpen: d,
      isSelected: f,
      isIndeterminate: m,
      isGroupActivator: v,
      root: y,
      parent: h,
      openOnSelect: g
    } = Ys(o, !1), S = Ns(), k = b(() => {
      var M;
      return e.active !== !1 && (e.active || ((M = i.isActive) == null ? void 0 : M.value) || (y.activatable.value ? u.value : f.value));
    }), p = b(() => e.link !== !1 && i.isLink.value), _ = b(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!S && (y.selectable.value || y.activatable.value || e.value != null))), C = b(() => e.rounded || e.nav), P = b(() => e.color ?? e.activeColor), T = b(() => ({
      color: k.value ? P.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    q(() => {
      var M;
      return (M = i.isActive) == null ? void 0 : M.value;
    }, (M) => {
      M && h.value != null && y.open(h.value, !0), M && g(M);
    }, {
      immediate: !0
    });
    const {
      themeClasses: w
    } = ke(e), {
      borderClasses: x
    } = ft(e), {
      colorClasses: A,
      colorStyles: V,
      variantClasses: I
    } = bn(T), {
      densityClasses: D
    } = lt(e), {
      dimensionStyles: $
    } = ze(e), {
      elevationClasses: z
    } = qe(e), {
      roundedClasses: W
    } = Ee(C), Z = b(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), J = b(() => ({
      isActive: k.value,
      select: c,
      isOpen: d.value,
      isSelected: f.value,
      isIndeterminate: m.value
    }));
    function L(M) {
      var U;
      l("click", M), _.value && ((U = i.navigate) == null || U.call(i, M), !v && (y.activatable.value ? r(!u.value, M) : (y.selectable.value || e.value != null) && c(!f.value, M)));
    }
    function F(M) {
      (M.key === "Enter" || M.key === " ") && (M.preventDefault(), M.target.dispatchEvent(new MouseEvent("click", M)));
    }
    return R(() => {
      const M = p.value ? "a" : e.tag, U = t.title || e.title != null, oe = t.subtitle || e.subtitle != null, te = !!(e.appendAvatar || e.appendIcon), ue = !!(te || t.append), H = !!(e.prependAvatar || e.prependIcon), ne = !!(H || t.prepend);
      return S == null || S.updateHasPrepend(ne), e.activeColor && kd("active-color", ["color", "base-color"]), Be(s(M, {
        class: ["v-list-item", {
          "v-list-item--active": k.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": _.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ne && (S == null ? void 0 : S.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && k.value
        }, w.value, x.value, A.value, D.value, z.value, Z.value, W.value, I.value, e.class],
        style: [V.value, $.value, e.style],
        href: i.href.value,
        tabindex: _.value ? S ? -2 : 0 : void 0,
        onClick: L,
        onKeydown: _.value && !p.value && F
      }, {
        default: () => {
          var ie;
          return [Ut(_.value || k.value, "v-list-item"), ne && s("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [t.prepend ? s(me, {
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
              return [(he = t.prepend) == null ? void 0 : he.call(t, J.value)];
            }
          }) : s(le, null, [e.prependAvatar && s(ht, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && s(Se, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), s("div", {
            class: "v-list-item__spacer"
          }, null)]), s("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [U && s(Us, {
            key: "title"
          }, {
            default: () => {
              var he;
              return [((he = t.title) == null ? void 0 : he.call(t, {
                title: e.title
              })) ?? e.title];
            }
          }), oe && s(Gs, {
            key: "subtitle"
          }, {
            default: () => {
              var he;
              return [((he = t.subtitle) == null ? void 0 : he.call(t, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (ie = t.default) == null ? void 0 : ie.call(t, J.value)]), ue && s("div", {
            key: "append",
            class: "v-list-item__append"
          }, [t.append ? s(me, {
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
              return [(he = t.append) == null ? void 0 : he.call(t, J.value)];
            }
          }) : s(le, null, [e.appendIcon && s(Se, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && s(ht, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), s("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[ct("ripple"), _.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: u,
      isGroupActivator: v,
      isSelected: f,
      list: S,
      select: c
    };
  }
}), xm = B({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ee(),
  ...ve()
}, "VListSubheader"), qs = O()({
  name: "VListSubheader",
  props: xm(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      textColorClasses: t,
      textColorStyles: l
    } = Xe(E(e, "color"));
    return R(() => {
      const i = !!(n.default || e.title);
      return s(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, t.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var o;
          return [i && s("div", {
            class: "v-list-subheader__text"
          }, [((o = n.default) == null ? void 0 : o.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), wm = B({
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
  props: wm(),
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      themeClasses: l
    } = ke(e), {
      textColorClasses: i,
      textColorStyles: o
    } = Xe(E(e, "color")), r = b(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = X(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = X(e.thickness)), u;
    });
    return R(() => {
      const u = s("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class],
        style: [r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return t.default ? s("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [u, s("div", {
        class: "v-divider__content"
      }, [t.default()]), u]) : u;
    }), {};
  }
}), Cm = B({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Ks = O()({
  name: "VListChildren",
  props: Cm(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return Rs(), () => {
      var t, l;
      return ((t = n.default) == null ? void 0 : t.call(n)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var m, v;
        let {
          children: o,
          props: r,
          type: u,
          raw: c
        } = i;
        if (u === "divider")
          return ((m = n.divider) == null ? void 0 : m.call(n, {
            props: r
          })) ?? s(va, r, null);
        if (u === "subheader")
          return ((v = n.subheader) == null ? void 0 : v.call(n, {
            props: r
          })) ?? s(qs, r, null);
        const d = {
          subtitle: n.subtitle ? (y) => {
            var h;
            return (h = n.subtitle) == null ? void 0 : h.call(n, {
              ...y,
              item: c
            });
          } : void 0,
          prepend: n.prepend ? (y) => {
            var h;
            return (h = n.prepend) == null ? void 0 : h.call(n, {
              ...y,
              item: c
            });
          } : void 0,
          append: n.append ? (y) => {
            var h;
            return (h = n.append) == null ? void 0 : h.call(n, {
              ...y,
              item: c
            });
          } : void 0,
          title: n.title ? (y) => {
            var h;
            return (h = n.title) == null ? void 0 : h.call(n, {
              ...y,
              item: c
            });
          } : void 0
        }, f = jl.filterProps(r);
        return o ? s(jl, N({
          value: r == null ? void 0 : r.value
        }, f), {
          activator: (y) => {
            let {
              props: h
            } = y;
            const g = {
              ...r,
              ...h,
              value: e.returnObject ? c : r.value
            };
            return n.header ? n.header({
              props: g
            }) : s(Ft, g, d);
          },
          default: () => s(Ks, {
            items: o,
            returnObject: e.returnObject
          }, n)
        }) : n.item ? n.item({
          props: r
        }) : s(Ft, N(r, {
          value: e.returnObject ? c : r.value
        }), d);
      }));
    };
  }
}), Xs = B({
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
    default: pt
  }
}, "list-items");
function Ht(e, a) {
  const n = He(a, e.itemTitle, a), t = He(a, e.itemValue, n), l = He(a, e.itemChildren), i = e.itemProps === !0 ? typeof a == "object" && a != null && !Array.isArray(a) ? "children" in a ? Re(a, ["children"]) : a : void 0 : He(a, e.itemProps), o = {
    title: n,
    value: t,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(l) ? Zs(e, l) : void 0,
    raw: a
  };
}
function Zs(e, a) {
  const n = [];
  for (const t of a)
    n.push(Ht(e, t));
  return n;
}
function Li(e) {
  const a = b(() => Zs(e, e.items)), n = b(() => a.value.some((i) => i.value === null));
  function t(i) {
    return n.value || (i = i.filter((o) => o !== null)), i.map((o) => e.returnObject && typeof o == "string" ? Ht(e, o) : a.value.find((r) => e.valueComparator(o, r.value)) || Ht(e, o));
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
    items: a,
    transformIn: t,
    transformOut: l
  };
}
function Vm(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Pm(e, a) {
  const n = He(a, e.itemType, "item"), t = Vm(a) ? a : He(a, e.itemTitle), l = He(a, e.itemValue, void 0), i = He(a, e.itemChildren), o = e.itemProps === !0 ? Re(a, ["children"]) : He(a, e.itemProps), r = {
    title: t,
    value: l,
    ...o
  };
  return {
    type: n,
    title: r.title,
    value: r.value,
    props: r,
    children: n === "item" && i ? Js(e, i) : void 0,
    raw: a
  };
}
function Js(e, a) {
  const n = [];
  for (const t of a)
    n.push(Pm(e, t));
  return n;
}
function _m(e) {
  return {
    items: b(() => Js(e, e.items))
  };
}
const Im = B({
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
  ...mm({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...st(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Xs(),
  ...Ae(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "text"
  })
}, "VList"), el = O()({
  name: "VList",
  props: Im(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      items: t
    } = _m(e), {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(E(e, "bgColor")), {
      borderClasses: r
    } = ft(e), {
      densityClasses: u
    } = lt(e), {
      dimensionStyles: c
    } = ze(e), {
      elevationClasses: d
    } = qe(e), {
      roundedClasses: f
    } = Ee(e), {
      children: m,
      open: v,
      parents: y,
      select: h
    } = gm(e), g = b(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = E(e, "activeColor"), k = E(e, "baseColor"), p = E(e, "color");
    Rs(), De({
      VListGroup: {
        activeColor: S,
        baseColor: k,
        color: p,
        expandIcon: E(e, "expandIcon"),
        collapseIcon: E(e, "collapseIcon")
      },
      VListItem: {
        activeClass: E(e, "activeClass"),
        activeColor: S,
        baseColor: k,
        color: p,
        density: E(e, "density"),
        disabled: E(e, "disabled"),
        lines: E(e, "lines"),
        nav: E(e, "nav"),
        slim: E(e, "slim"),
        variant: E(e, "variant")
      }
    });
    const _ = G(!1), C = j();
    function P(I) {
      _.value = !0;
    }
    function T(I) {
      _.value = !1;
    }
    function w(I) {
      var D;
      !_.value && !(I.relatedTarget && ((D = C.value) != null && D.contains(I.relatedTarget))) && V();
    }
    function x(I) {
      const D = I.target;
      if (!(!C.value || ["INPUT", "TEXTAREA"].includes(D.tagName))) {
        if (I.key === "ArrowDown")
          V("next");
        else if (I.key === "ArrowUp")
          V("prev");
        else if (I.key === "Home")
          V("first");
        else if (I.key === "End")
          V("last");
        else
          return;
        I.preventDefault();
      }
    }
    function A(I) {
      _.value = !0;
    }
    function V(I) {
      if (C.value)
        return nn(C.value, I);
    }
    return R(() => s(e.tag, {
      ref: C,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, u.value, d.value, g.value, f.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || _.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: P,
      onFocusout: T,
      onFocus: w,
      onKeydown: x,
      onMousedown: A
    }, {
      default: () => [s(Ks, {
        items: t.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: v,
      select: h,
      focus: V,
      children: m,
      parents: y
    };
  }
}), pm = Tt("v-list-img"), Am = B({
  start: Boolean,
  end: Boolean,
  ...ee(),
  ...ve()
}, "VListItemAction"), Tm = O()({
  name: "VListItemAction",
  props: Am(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, n)), {};
  }
}), Bm = B({
  start: Boolean,
  end: Boolean,
  ...ee(),
  ...ve()
}, "VListItemMedia"), Dm = O()({
  name: "VListItemMedia",
  props: Bm(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, n)), {};
  }
});
function wl(e, a) {
  return {
    x: e.x + a.x,
    y: e.y + a.y
  };
}
function Mm(e, a) {
  return {
    x: e.x - a.x,
    y: e.y - a.y
  };
}
function Qo(e, a) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: t
    } = e, l = t === "left" ? 0 : t === "center" ? a.width / 2 : t === "right" ? a.width : t, i = n === "top" ? 0 : n === "bottom" ? a.height : n;
    return wl({
      x: l,
      y: i
    }, a);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: t
    } = e, l = n === "left" ? 0 : n === "right" ? a.width : n, i = t === "top" ? 0 : t === "center" ? a.height / 2 : t === "bottom" ? a.height : t;
    return wl({
      x: l,
      y: i
    }, a);
  }
  return wl({
    x: a.width / 2,
    y: a.height / 2
  }, a);
}
const Qs = {
  static: $m,
  // specific viewport position, usually centered
  connected: Om
  // connected to a certain element
}, Em = B({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Qs
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
function Fm(e, a) {
  const n = j({}), t = j();
  xe && rt(() => !!(a.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    q(() => e.locationStrategy, i), tt(() => {
      window.removeEventListener("resize", l), t.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? t.value = (o = e.locationStrategy(a, e, n)) == null ? void 0 : o.updateLocation : t.value = (r = Qs[e.locationStrategy](a, e, n)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var o;
    (o = t.value) == null || o.call(t, i);
  }
  return {
    contentStyles: n,
    updateLocation: t
  };
}
function $m() {
}
function Lm(e, a) {
  const n = bi(e);
  return a ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Om(e, a, n) {
  (Array.isArray(e.target.value) || zd(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = hi(() => {
    const y = Tl(a.location, e.isRtl.value), h = a.origin === "overlap" ? y : a.origin === "auto" ? yl(y) : Tl(a.origin, e.isRtl.value);
    return y.side === h.side && y.align === bl(h).align ? {
      preferredAnchor: ko(y),
      preferredOrigin: ko(h)
    } : {
      preferredAnchor: y,
      preferredOrigin: h
    };
  }), [o, r, u, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => b(() => {
    const h = parseFloat(a[y]);
    return isNaN(h) ? 1 / 0 : h;
  })), d = b(() => {
    if (Array.isArray(a.offset))
      return a.offset;
    if (typeof a.offset == "string") {
      const y = a.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof a.offset == "number" ? [a.offset, 0] : [0, 0];
  });
  let f = !1;
  const m = new ResizeObserver(() => {
    f && v();
  });
  q([e.target, e.contentEl], (y, h) => {
    let [g, S] = y, [k, p] = h;
    k && !Array.isArray(k) && m.unobserve(k), g && !Array.isArray(g) && m.observe(g), p && m.unobserve(p), S && m.observe(S);
  }, {
    immediate: !0
  }), tt(() => {
    m.disconnect();
  });
  function v() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    const y = Dr(e.target.value), h = Lm(e.contentEl.value, e.isRtl.value), g = Ma(e.contentEl.value), S = 12;
    g.length || (g.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const k = g.reduce((V, I) => {
      const D = I.getBoundingClientRect(), $ = new an({
        x: I === document.documentElement ? 0 : D.x,
        y: I === document.documentElement ? 0 : D.y,
        width: I.clientWidth,
        height: I.clientHeight
      });
      return V ? new an({
        x: Math.max(V.left, $.left),
        y: Math.max(V.top, $.top),
        width: Math.min(V.right, $.right) - Math.max(V.left, $.left),
        height: Math.min(V.bottom, $.bottom) - Math.max(V.top, $.top)
      }) : $;
    }, void 0);
    k.x += S, k.y += S, k.width -= S * 2, k.height -= S * 2;
    let p = {
      anchor: l.value,
      origin: i.value
    };
    function _(V) {
      const I = new an(h), D = Qo(V.anchor, y), $ = Qo(V.origin, I);
      let {
        x: z,
        y: W
      } = Mm(D, $);
      switch (V.anchor.side) {
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
      switch (V.anchor.align) {
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
      return I.x += z, I.y += W, I.width = Math.min(I.width, u.value), I.height = Math.min(I.height, c.value), {
        overflows: wo(I, k),
        x: z,
        y: W
      };
    }
    let C = 0, P = 0;
    const T = {
      x: 0,
      y: 0
    }, w = {
      x: !1,
      y: !1
    };
    let x = -1;
    for (; ; ) {
      if (x++ > 10) {
        Ba("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: V,
        y: I,
        overflows: D
      } = _(p);
      C += V, P += I, h.x += V, h.y += I;
      {
        const $ = xo(p.anchor), z = D.x.before || D.x.after, W = D.y.before || D.y.after;
        let Z = !1;
        if (["x", "y"].forEach((J) => {
          if (J === "x" && z && !w.x || J === "y" && W && !w.y) {
            const L = {
              anchor: {
                ...p.anchor
              },
              origin: {
                ...p.origin
              }
            }, F = J === "x" ? $ === "y" ? bl : yl : $ === "y" ? yl : bl;
            L.anchor = F(L.anchor), L.origin = F(L.origin);
            const {
              overflows: M
            } = _(L);
            (M[J].before <= D[J].before && M[J].after <= D[J].after || M[J].before + M[J].after < (D[J].before + D[J].after) / 2) && (p = L, Z = w[J] = !0);
          }
        }), Z) continue;
      }
      D.x.before && (C += D.x.before, h.x += D.x.before), D.x.after && (C -= D.x.after, h.x -= D.x.after), D.y.before && (P += D.y.before, h.y += D.y.before), D.y.after && (P -= D.y.after, h.y -= D.y.after);
      {
        const $ = wo(h, k);
        T.x = k.width - $.x.before - $.x.after, T.y = k.height - $.y.before - $.y.after, C += $.x.before, h.x += $.x.before, P += $.y.before, h.y += $.y.before;
      }
      break;
    }
    const A = xo(p.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${p.anchor.side} ${p.anchor.align}`,
      transformOrigin: `${p.origin.side} ${p.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: X(Cl(P)),
      left: e.isRtl.value ? void 0 : X(Cl(C)),
      right: e.isRtl.value ? X(Cl(-C)) : void 0,
      minWidth: X(A === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: X(er(Oe(T.x, o.value === 1 / 0 ? 0 : o.value, u.value))),
      maxHeight: X(er(Oe(T.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: T,
      contentBox: h
    };
  }
  return q(() => [l.value, i.value, a.offset, a.minWidth, a.minHeight, a.maxWidth, a.maxHeight], () => v()), we(() => {
    const y = v();
    if (!y) return;
    const {
      available: h,
      contentBox: g
    } = y;
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
function er(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Yl = !0;
const $a = [];
function Rm(e) {
  !Yl || $a.length ? ($a.push(e), Gl()) : (Yl = !1, e(), Gl());
}
let tr = -1;
function Gl() {
  cancelAnimationFrame(tr), tr = requestAnimationFrame(() => {
    const e = $a.shift();
    e && e(), $a.length ? Gl() : Yl = !0;
  });
}
const Ia = {
  none: null,
  close: Hm,
  block: Wm,
  reposition: jm
}, Nm = B({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ia
  }
}, "VOverlay-scroll-strategies");
function zm(e, a) {
  if (!xe) return;
  let n;
  Fe(async () => {
    n == null || n.stop(), a.isActive.value && e.scrollStrategy && (n = ui(), await new Promise((t) => setTimeout(t)), n.active && n.run(() => {
      var t;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(a, e, n) : (t = Ia[e.scrollStrategy]) == null || t.call(Ia, a, e, n);
    }));
  }), tt(() => {
    n == null || n.stop();
  });
}
function Hm(e) {
  function a(n) {
    e.isActive.value = !1;
  }
  eu(e.targetEl.value ?? e.contentEl.value, a);
}
function Wm(e, a) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent, t = [.../* @__PURE__ */ new Set([...Ma(e.targetEl.value, a.contained ? n : void 0), ...Ma(e.contentEl.value, a.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Ci(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), t.forEach((r, u) => {
    r.style.setProperty("--v-body-scroll-x", X(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", X(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", X(l)), r.classList.add("v-overlay-scroll-blocked");
  }), tt(() => {
    t.forEach((r, u) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), f = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = f;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function jm(e, a, n) {
  let t = !1, l = -1, i = -1;
  function o(r) {
    Rm(() => {
      var d, f;
      const u = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, r), t = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      eu(e.targetEl.value ?? e.contentEl.value, (r) => {
        t ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
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
function eu(e, a) {
  const n = [document, ...Ma(e)];
  n.forEach((t) => {
    t.addEventListener("scroll", a, {
      passive: !0
    });
  }), tt(() => {
    n.forEach((t) => {
      t.removeEventListener("scroll", a);
    });
  });
}
const Ul = Symbol.for("vuetify:v-menu"), Oi = B({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Ri(e, a) {
  let n = () => {
  };
  function t(o) {
    n == null || n();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      n = sd(r, () => {
        a == null || a(o), u(o);
      });
    });
  }
  function l() {
    return t(!0);
  }
  function i() {
    return t(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const Ym = B({
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
  ...Oi()
}, "VOverlay-activator");
function Gm(e, a) {
  let {
    isActive: n,
    isTop: t,
    contentEl: l
  } = a;
  const i = Me("useActivator"), o = j();
  let r = !1, u = !1, c = !0;
  const d = b(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = b(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !d.value), {
    runOpenDelay: m,
    runCloseDelay: v
  } = Ri(e, (w) => {
    w === (e.openOnHover && r || d.value && u) && !(e.openOnHover && n.value && !t.value) && (n.value !== w && (c = !0), n.value = w);
  }), y = j(), h = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, n.value || (y.value = [w.clientX, w.clientY]), n.value = !n.value;
    },
    onMouseenter: (w) => {
      var x;
      (x = w.sourceCapabilities) != null && x.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, m());
    },
    onMouseleave: (w) => {
      r = !1, v();
    },
    onFocus: (w) => {
      Bn(w.target, ":focus-visible") !== !1 && (u = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, m());
    },
    onBlur: (w) => {
      u = !1, w.stopPropagation(), v();
    }
  }, g = b(() => {
    const w = {};
    return f.value && (w.onClick = h.onClick), e.openOnHover && (w.onMouseenter = h.onMouseenter, w.onMouseleave = h.onMouseleave), d.value && (w.onFocus = h.onFocus, w.onBlur = h.onBlur), w;
  }), S = b(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, m();
    }, w.onMouseleave = () => {
      r = !1, v();
    }), d.value && (w.onFocusin = () => {
      u = !0, m();
    }, w.onFocusout = () => {
      u = !1, v();
    }), e.closeOnContentClick) {
      const x = ye(Ul, null);
      w.onClick = () => {
        n.value = !1, x == null || x.closeParents();
      };
    }
    return w;
  }), k = b(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      c && (r = !0, c = !1, m());
    }, w.onMouseleave = () => {
      r = !1, v();
    }), w;
  });
  q(t, (w) => {
    var x;
    w && (e.openOnHover && !r && (!d.value || !u) || d.value && !u && (!e.openOnHover || !r)) && !((x = l.value) != null && x.contains(document.activeElement)) && (n.value = !1);
  }), q(n, (w) => {
    w || setTimeout(() => {
      y.value = void 0;
    });
  }, {
    flush: "post"
  });
  const p = Aa();
  Fe(() => {
    p.value && we(() => {
      o.value = p.el;
    });
  });
  const _ = Aa(), C = b(() => e.target === "cursor" && y.value ? y.value : _.value ? _.el : tu(e.target, i) || o.value), P = b(() => Array.isArray(C.value) ? void 0 : C.value);
  let T;
  return q(() => !!e.activator, (w) => {
    w && xe ? (T = ui(), T.run(() => {
      Um(e, i, {
        activatorEl: o,
        activatorEvents: g
      });
    })) : T && T.stop();
  }, {
    flush: "post",
    immediate: !0
  }), tt(() => {
    T == null || T.stop();
  }), {
    activatorEl: o,
    activatorRef: p,
    target: C,
    targetEl: P,
    targetRef: _,
    activatorEvents: g,
    contentEvents: S,
    scrimEvents: k
  };
}
function Um(e, a, n) {
  let {
    activatorEl: t,
    activatorEvents: l
  } = n;
  q(() => e.activator, (u, c) => {
    if (c && u !== c) {
      const d = r(c);
      d && o(d);
    }
    u && we(() => i());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    i();
  }), tt(() => {
    o();
  });
  function i() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && dd(u, N(l.value, c));
  }
  function o() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && vd(u, N(l.value, c));
  }
  function r() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = tu(u, a);
    return t.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, t.value;
  }
}
function tu(e, a) {
  var t, l;
  if (!e) return;
  let n;
  if (e === "parent") {
    let i = (l = (t = a == null ? void 0 : a.proxy) == null ? void 0 : t.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function nu() {
  if (!xe) return G(!1);
  const {
    ssr: e
  } = yt();
  if (e) {
    const a = G(!1);
    return at(() => {
      a.value = !0;
    }), a;
  } else
    return G(!0);
}
const Ni = B({
  eager: Boolean
}, "lazy");
function zi(e, a) {
  const n = G(!1), t = b(() => n.value || e.eager || a.value);
  q(a, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: t,
    onAfterLeave: l
  };
}
function Cn() {
  const a = Me("useScopeId").vnode.scopeId;
  return {
    scopeId: a ? {
      [a]: ""
    } : void 0
  };
}
const nr = Symbol.for("vuetify:stack"), Wn = mt([]);
function qm(e, a, n) {
  const t = Me("useStack"), l = !n, i = ye(nr, void 0), o = mt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  pe(nr, o);
  const r = G(+a.value);
  rt(e, () => {
    var f;
    const d = (f = Wn.at(-1)) == null ? void 0 : f[1];
    r.value = d ? d + 10 : +a.value, l && Wn.push([t.uid, r.value]), i == null || i.activeChildren.add(t.uid), tt(() => {
      if (l) {
        const m = Ie(Wn).findIndex((v) => v[0] === t.uid);
        Wn.splice(m, 1);
      }
      i == null || i.activeChildren.delete(t.uid);
    });
  });
  const u = G(!0);
  l && Fe(() => {
    var f;
    const d = ((f = Wn.at(-1)) == null ? void 0 : f[0]) === t.uid;
    setTimeout(() => u.value = d);
  });
  const c = b(() => !o.activeChildren.size);
  return {
    globalTop: ci(u),
    localTop: c,
    stackStyles: b(() => ({
      zIndex: r.value
    }))
  };
}
function Km(e) {
  return {
    teleportTarget: b(() => {
      const n = e();
      if (n === !0 || !xe) return;
      const t = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (t == null) {
        Oa(`Unable to locate target ${n}`);
        return;
      }
      let l = [...t.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", t.appendChild(l)), l;
    })
  };
}
function Xm() {
  return !0;
}
function au(e, a, n) {
  if (!e || lu(e, n) === !1) return !1;
  const t = Yr(a);
  if (typeof ShadowRoot < "u" && t instanceof ShadowRoot && t.host === e.target) return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(a), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function lu(e, a) {
  return (typeof a.value == "object" && a.value.closeConditional || Xm)(e);
}
function Zm(e, a, n) {
  const t = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, a._clickOutside.lastMousedownWasOutside && au(e, a, n) && setTimeout(() => {
    lu(e, n) && t && t(e);
  }, 0);
}
function ar(e, a) {
  const n = Yr(e);
  a(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && a(n);
}
const iu = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, a) {
    const n = (l) => Zm(l, e, a), t = (l) => {
      e._clickOutside.lastMousedownWasOutside = au(l, e, a);
    };
    ar(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", t, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[a.instance.$.uid] = {
      onClick: n,
      onMousedown: t
    };
  },
  beforeUnmount(e, a) {
    e._clickOutside && (ar(e, (n) => {
      var i;
      if (!n || !((i = e._clickOutside) != null && i[a.instance.$.uid])) return;
      const {
        onClick: t,
        onMousedown: l
      } = e._clickOutside[a.instance.$.uid];
      n.removeEventListener("click", t, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[a.instance.$.uid]);
  }
};
function Jm(e) {
  const {
    modelValue: a,
    color: n,
    ...t
  } = e;
  return s(Wt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && s("div", N({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, t), null)]
  });
}
const fa = B({
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
  ...Ym(),
  ...ee(),
  ...Ne(),
  ...Ni(),
  ...Em(),
  ...Nm(),
  ...ge(),
  ...Ct()
}, "VOverlay"), It = O()({
  name: "VOverlay",
  directives: {
    ClickOutside: iu
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
  setup(e, a) {
    let {
      slots: n,
      attrs: t,
      emit: l
    } = a;
    const i = Me("VOverlay"), o = j(), r = j(), u = j(), c = ae(e, "modelValue"), d = b({
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
      hasContent: y,
      onAfterLeave: h
    } = zi(e, d), g = Ve(b(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: S,
      localTop: k,
      stackStyles: p
    } = qm(d, E(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: _,
      activatorRef: C,
      target: P,
      targetEl: T,
      targetRef: w,
      activatorEvents: x,
      contentEvents: A,
      scrimEvents: V
    } = Gm(e, {
      isActive: d,
      isTop: k,
      contentEl: u
    }), {
      teleportTarget: I
    } = Km(() => {
      var ie, he, Ce;
      const H = e.attach || e.contained;
      if (H) return H;
      const ne = ((ie = _ == null ? void 0 : _.value) == null ? void 0 : ie.getRootNode()) || ((Ce = (he = i.proxy) == null ? void 0 : he.$el) == null ? void 0 : Ce.getRootNode());
      return ne instanceof ShadowRoot ? ne : !1;
    }), {
      dimensionStyles: D
    } = ze(e), $ = nu(), {
      scopeId: z
    } = Cn();
    q(() => e.disabled, (H) => {
      H && (d.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: Z
    } = Fm(e, {
      isRtl: v,
      contentEl: u,
      target: P,
      isActive: d
    });
    zm(e, {
      root: o,
      contentEl: u,
      targetEl: T,
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
    xe && q(d, (H) => {
      H ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
    }, {
      immediate: !0
    }), nt(() => {
      xe && window.removeEventListener("keydown", F);
    });
    function F(H) {
      var ne, ie;
      H.key === "Escape" && S.value && (e.persistent ? oe() : (d.value = !1, (ne = u.value) != null && ne.contains(document.activeElement) && ((ie = _.value) == null || ie.focus())));
    }
    const M = ys();
    rt(() => e.closeOnBack, () => {
      Mf(M, (H) => {
        S.value && d.value ? (H(!1), e.persistent ? oe() : d.value = !1) : H();
      });
    });
    const U = j();
    q(() => d.value && (e.absolute || e.contained) && I.value == null, (H) => {
      if (H) {
        const ne = wi(o.value);
        ne && ne !== document.scrollingElement && (U.value = ne.scrollTop);
      }
    });
    function oe() {
      e.noClickAnimation || u.value && en(u.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: qn
      });
    }
    function te() {
      l("afterEnter");
    }
    function ue() {
      h(), l("afterLeave");
    }
    return R(() => {
      var H;
      return s(le, null, [(H = n.activator) == null ? void 0 : H.call(n, {
        isActive: d.value,
        targetRef: w,
        props: N({
          ref: C
        }, x.value, e.activatorProps)
      }), $.value && y.value && s(Hc, {
        disabled: !I.value,
        to: I.value
      }, {
        default: () => [s("div", N({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": d.value,
            "v-overlay--contained": e.contained
          }, f.value, m.value, e.class],
          style: [p.value, {
            "--v-overlay-opacity": e.opacity,
            top: X(U.value)
          }, e.style],
          ref: o
        }, z, t), [s(Jm, N({
          color: g,
          modelValue: d.value && !!e.scrim,
          ref: r
        }, V.value), null), s(et, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: P.value,
          onAfterEnter: te,
          onAfterLeave: ue
        }, {
          default: () => {
            var ne;
            return [Be(s("div", N({
              ref: u,
              class: ["v-overlay__content", e.contentClass],
              style: [D.value, W.value]
            }, A.value, e.contentProps), [(ne = n.default) == null ? void 0 : ne.call(n, {
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
      contentEl: u,
      globalTop: S,
      localTop: k,
      updateLocation: Z
    };
  }
}), Vl = Symbol("Forwarded refs");
function Pl(e, a) {
  let n = e;
  for (; n; ) {
    const t = Reflect.getOwnPropertyDescriptor(n, a);
    if (t) return t;
    n = Object.getPrototypeOf(n);
  }
}
function St(e) {
  for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), t = 1; t < a; t++)
    n[t - 1] = arguments[t];
  return e[Vl] = n, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of n)
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
      for (const o of n)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const u of n) {
          if (!u.value) continue;
          const c = Pl(u.value, i) ?? ("_" in u.value ? Pl((r = u.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const u of n) {
          const c = u.value && u.value[Vl];
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
const ou = B({
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
}, "VMenu"), Fn = O()({
  name: "VMenu",
  props: ou(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), {
      scopeId: l
    } = Cn(), {
      isRtl: i
    } = We(), o = Ue(), r = b(() => e.id || `v-menu-${o}`), u = j(), c = ye(Ul, null), d = G(/* @__PURE__ */ new Set());
    pe(Ul, {
      register() {
        d.value.add(o);
      },
      unregister() {
        d.value.delete(o);
      },
      closeParents(g) {
        setTimeout(() => {
          var S;
          !d.value.size && !e.persistent && (g == null || (S = u.value) != null && S.contentEl && !ud(g, u.value.contentEl)) && (t.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), nt(() => c == null ? void 0 : c.unregister()), br(() => t.value = !1);
    async function f(g) {
      var p, _, C;
      const S = g.relatedTarget, k = g.target;
      await we(), t.value && S !== k && ((p = u.value) != null && p.contentEl) && // We're the topmost menu
      ((_ = u.value) != null && _.globalTop) && // It isn't the document or the menu body
      ![document, u.value.contentEl].includes(k) && // It isn't inside the menu body
      !u.value.contentEl.contains(k) && ((C = Un(u.value.contentEl)[0]) == null || C.focus());
    }
    q(t, (g) => {
      g ? (c == null || c.register(), document.addEventListener("focusin", f, {
        once: !0
      })) : (c == null || c.unregister(), document.removeEventListener("focusin", f));
    });
    function m(g) {
      c == null || c.closeParents(g);
    }
    function v(g) {
      var S, k, p, _, C;
      if (!e.disabled)
        if (g.key === "Tab" || g.key === "Enter" && !e.closeOnContentClick) {
          if (g.key === "Enter" && (g.target instanceof HTMLTextAreaElement || g.target instanceof HTMLInputElement && g.target.closest("form"))) return;
          g.key === "Enter" && g.preventDefault(), Ar(Un((S = u.value) == null ? void 0 : S.contentEl, !1), g.shiftKey ? "prev" : "next", (T) => T.tabIndex >= 0) || (t.value = !1, (p = (k = u.value) == null ? void 0 : k.activatorEl) == null || p.focus());
        } else e.submenu && g.key === (i.value ? "ArrowRight" : "ArrowLeft") && (t.value = !1, (C = (_ = u.value) == null ? void 0 : _.activatorEl) == null || C.focus());
    }
    function y(g) {
      var k;
      if (e.disabled) return;
      const S = (k = u.value) == null ? void 0 : k.contentEl;
      S && t.value ? g.key === "ArrowDown" ? (g.preventDefault(), g.stopImmediatePropagation(), nn(S, "next")) : g.key === "ArrowUp" ? (g.preventDefault(), g.stopImmediatePropagation(), nn(S, "prev")) : e.submenu && (g.key === (i.value ? "ArrowRight" : "ArrowLeft") ? t.value = !1 : g.key === (i.value ? "ArrowLeft" : "ArrowRight") && (g.preventDefault(), nn(S, "first"))) : (e.submenu ? g.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(g.key)) && (t.value = !0, g.preventDefault(), setTimeout(() => setTimeout(() => y(g))));
    }
    const h = b(() => N({
      "aria-haspopup": "menu",
      "aria-expanded": String(t.value),
      "aria-owns": r.value,
      onKeydown: y
    }, e.activatorProps));
    return R(() => {
      const g = It.filterProps(e);
      return s(It, N({
        ref: u,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, g, {
        modelValue: t.value,
        "onUpdate:modelValue": (S) => t.value = S,
        absolute: !0,
        activatorProps: h.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": m,
        onKeydown: v
      }, l), {
        activator: n.activator,
        default: function() {
          for (var S = arguments.length, k = new Array(S), p = 0; p < S; p++)
            k[p] = arguments[p];
          return s(me, {
            root: "VMenu"
          }, {
            default: () => {
              var _;
              return [(_ = n.default) == null ? void 0 : _.call(n, ...k)];
            }
          });
        }
      });
    }), St({
      id: r,
      ΨopenChildren: d
    }, u);
  }
}), Qm = B({
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
      component: Ai
    }
  })
}, "VCounter"), tl = O()({
  name: "VCounter",
  functional: !0,
  props: Qm(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = b(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return R(() => s(et, {
      transition: e.transition
    }, {
      default: () => [Be(s("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: t.value,
        max: e.max,
        value: e.value
      }) : t.value]), [[wt, e.active]])]
    })), {};
  }
}), eg = B({
  floating: Boolean,
  ...ee()
}, "VFieldLabel"), jn = O()({
  name: "VFieldLabel",
  props: eg(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(Nn, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), tg = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ma = B({
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
    validator: (e) => tg.includes(e)
  },
  "onClick:clear": Ge(),
  "onClick:appendInner": Ge(),
  "onClick:prependInner": Ge(),
  ...ee(),
  ...Xa(),
  ...Ae(),
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
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const {
      themeClasses: i
    } = ke(e), {
      loaderClasses: o
    } = ra(e), {
      focusClasses: r,
      isFocused: u,
      focus: c,
      blur: d
    } = Rt(e), {
      InputIcon: f
    } = Ts(e), {
      roundedClasses: m
    } = Ee(e), {
      rtlClasses: v
    } = We(), y = b(() => e.dirty || e.active), h = b(() => !e.singleLine && !!(e.label || l.label)), g = Ue(), S = b(() => e.id || `input-${g}`), k = b(() => `${S.value}-messages`), p = j(), _ = j(), C = j(), P = b(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: T,
      backgroundColorStyles: w
    } = Ve(E(e, "bgColor")), {
      textColorClasses: x,
      textColorStyles: A
    } = Xe(b(() => e.error || e.disabled ? void 0 : y.value && u.value ? e.color : e.baseColor));
    q(y, ($) => {
      if (h.value) {
        const z = p.value.$el, W = _.value.$el;
        requestAnimationFrame(() => {
          const Z = bi(z), J = W.getBoundingClientRect(), L = J.x - Z.x, F = J.y - Z.y - (Z.height / 2 - J.height / 2), M = J.width / 0.75, U = Math.abs(M - Z.width) > 1 ? {
            maxWidth: X(M)
          } : void 0, oe = getComputedStyle(z), te = getComputedStyle(W), ue = parseFloat(oe.transitionDuration) * 1e3 || 150, H = parseFloat(te.getPropertyValue("--v-field-label-scale")), ne = te.getPropertyValue("color");
          z.style.visibility = "visible", W.style.visibility = "hidden", en(z, {
            transform: `translate(${L}px, ${F}px) scale(${H})`,
            color: ne,
            ...U
          }, {
            duration: ue,
            easing: qn,
            direction: $ ? "normal" : "reverse"
          }).finished.then(() => {
            z.style.removeProperty("visibility"), W.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const V = b(() => ({
      isActive: y,
      isFocused: u,
      controlRef: C,
      blur: d,
      focus: c
    }));
    function I($) {
      $.target !== document.activeElement && $.preventDefault();
    }
    function D($) {
      var z;
      $.key !== "Enter" && $.key !== " " || ($.preventDefault(), $.stopPropagation(), (z = e["onClick:clear"]) == null || z.call(e, new MouseEvent("click")));
    }
    return R(() => {
      var L, F, M;
      const $ = e.variant === "outlined", z = !!(l["prepend-inner"] || e.prependInnerIcon), W = !!(e.clearable || l.clear), Z = !!(l["append-inner"] || e.appendInnerIcon || W), J = () => l.label ? l.label({
        ...V.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return s("div", N({
        class: ["v-field", {
          "v-field--active": y.value,
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
        }, i.value, T.value, r.value, o.value, m.value, v.value, e.class],
        style: [w.value, e.style],
        onClick: I
      }, n), [s("div", {
        class: "v-field__overlay"
      }, null), s(sa, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), z && s("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && s(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (L = l["prepend-inner"]) == null ? void 0 : L.call(l, V.value)]), s("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && s(jn, {
        key: "floating-label",
        ref: _,
        class: [x.value],
        floating: !0,
        for: S.value,
        style: A.value
      }, {
        default: () => [J()]
      }), s(jn, {
        ref: p,
        for: S.value
      }, {
        default: () => [J()]
      }), (F = l.default) == null ? void 0 : F.call(l, {
        ...V.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: d
      })]), W && s(Ti, {
        key: "clear"
      }, {
        default: () => [Be(s("div", {
          class: "v-field__clearable",
          onMousedown: (U) => {
            U.preventDefault(), U.stopPropagation();
          }
        }, [s(me, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...V.value,
            props: {
              onKeydown: D,
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          }) : s(f, {
            name: "clear",
            onKeydown: D,
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[wt, e.dirty]])]
      }), Z && s("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(M = l["append-inner"]) == null ? void 0 : M.call(l, V.value), e.appendInnerIcon && s(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), s("div", {
        class: ["v-field__outline", x.value],
        style: A.value
      }, [$ && s(le, null, [s("div", {
        class: "v-field__outline__start"
      }, null), h.value && s("div", {
        class: "v-field__outline__notch"
      }, [s(jn, {
        ref: _,
        floating: !0,
        for: S.value
      }, {
        default: () => [J()]
      })]), s("div", {
        class: "v-field__outline__end"
      }, null)]), P.value && h.value && s(jn, {
        ref: _,
        floating: !0,
        for: S.value
      }, {
        default: () => [J()]
      })])]);
    }), {
      controlRef: C
    };
  }
});
function Hi(e) {
  const a = Object.keys(Hn.props).filter((n) => !Na(n) && n !== "class" && n !== "style");
  return gi(e, a);
}
const ng = ["color", "file", "time", "date", "datetime-local", "week", "month"], nl = B({
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
  ...Nt(),
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
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const i = ae(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: u
    } = Rt(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = b(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = b(() => ["plain", "underlined"].includes(e.variant));
    function m(P, T) {
      var w, x;
      !e.autofocus || !P || (x = (w = T[0].target) == null ? void 0 : w.focus) == null || x.call(w);
    }
    const v = j(), y = j(), h = j(), g = b(() => ng.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function S() {
      var P;
      h.value !== document.activeElement && ((P = h.value) == null || P.focus()), o.value || r();
    }
    function k(P) {
      t("mousedown:control", P), P.target !== h.value && (S(), P.preventDefault());
    }
    function p(P) {
      S(), t("click:control", P);
    }
    function _(P) {
      P.stopPropagation(), S(), we(() => {
        i.value = null, yi(e["onClick:clear"], P);
      });
    }
    function C(P) {
      var w;
      const T = P.target;
      if (i.value = T.value, (w = e.modelModifiers) != null && w.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const x = [T.selectionStart, T.selectionEnd];
        we(() => {
          T.selectionStart = x[0], T.selectionEnd = x[1];
        });
      }
    }
    return R(() => {
      const P = !!(l.counter || e.counter !== !1 && e.counter != null), T = !!(P || l.details), [w, x] = Gt(n), {
        modelValue: A,
        ...V
      } = Ze.filterProps(e), I = Hi(e);
      return s(Ze, N({
        ref: v,
        modelValue: i.value,
        "onUpdate:modelValue": (D) => i.value = D,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, w, V, {
        centerAffix: !f.value,
        focused: o.value
      }), {
        ...l,
        default: (D) => {
          let {
            id: $,
            isDisabled: z,
            isDirty: W,
            isReadonly: Z,
            isValid: J
          } = D;
          return s(Hn, N({
            ref: y,
            onMousedown: k,
            onClick: p,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, I, {
            id: $.value,
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
                  class: F,
                  ...M
                }
              } = L;
              const U = Be(s("input", N({
                ref: h,
                value: i.value,
                onInput: C,
                autofocus: e.autofocus,
                readonly: Z.value,
                disabled: z.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: u
              }, M, x), null), [[ct("intersect"), {
                handler: m
              }, null, {
                once: !0
              }]]);
              return s(le, null, [e.prefix && s("span", {
                class: "v-text-field__prefix"
              }, [s("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? s("div", {
                class: F,
                "data-no-activator": ""
              }, [l.default(), U]) : Wc(U, {
                class: F
              }), e.suffix && s("span", {
                class: "v-text-field__suffix"
              }, [s("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: T ? (D) => {
          var $;
          return s(le, null, [($ = l.details) == null ? void 0 : $.call(l, D), P && s(le, null, [s("span", null, null), s(tl, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), St({}, v, y, h);
  }
}), ag = B({
  renderless: Boolean,
  ...ee()
}, "VVirtualScrollItem"), ru = O()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: ag(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const {
      resizeRef: i,
      contentRect: o
    } = xt(void 0, "border");
    q(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && t("update:height", r);
    }), R(() => {
      var r, u;
      return e.renderless ? s(le, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : s("div", N({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(u = l.default) == null ? void 0 : u.call(l)]);
    });
  }
}), lg = -1, ig = 1, _l = 100, su = B({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function uu(e, a) {
  const n = yt(), t = G(0);
  Fe(() => {
    t.value = parseFloat(e.itemHeight || 0);
  });
  const l = G(0), i = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (t.value || 16)
  ) || 1), o = G(0), r = G(0), u = j(), c = j();
  let d = 0;
  const {
    resizeRef: f,
    contentRect: m
  } = xt();
  Fe(() => {
    f.value = u.value;
  });
  const v = b(() => {
    var L;
    return u.value === document.documentElement ? n.height.value : ((L = m.value) == null ? void 0 : L.height) || parseInt(e.height) || 0;
  }), y = b(() => !!(u.value && c.value && v.value && t.value));
  let h = Array.from({
    length: a.value.length
  }), g = Array.from({
    length: a.value.length
  });
  const S = G(0);
  let k = -1;
  function p(L) {
    return h[L] || t.value;
  }
  const _ = ld(() => {
    const L = performance.now();
    g[0] = 0;
    const F = a.value.length;
    for (let M = 1; M <= F - 1; M++)
      g[M] = (g[M - 1] || 0) + p(M - 1);
    S.value = Math.max(S.value, performance.now() - L);
  }, S), C = q(y, (L) => {
    L && (C(), d = c.value.offsetTop, _.immediate(), z(), ~k && we(() => {
      xe && window.requestAnimationFrame(() => {
        Z(k), k = -1;
      });
    }));
  });
  tt(() => {
    _.clear();
  });
  function P(L, F) {
    const M = h[L], U = t.value;
    t.value = U ? Math.min(t.value, F) : F, (M !== F || U !== t.value) && (h[L] = F, _());
  }
  function T(L) {
    return L = Oe(L, 0, a.value.length - 1), g[L] || 0;
  }
  function w(L) {
    return og(g, L);
  }
  let x = 0, A = 0, V = 0;
  q(v, (L, F) => {
    F && (z(), L < F && requestAnimationFrame(() => {
      A = 0, z();
    }));
  });
  function I() {
    if (!u.value || !c.value) return;
    const L = u.value.scrollTop, F = performance.now();
    F - V > 500 ? (A = Math.sign(L - x), d = c.value.offsetTop) : A = L - x, x = L, V = F, z();
  }
  function D() {
    !u.value || !c.value || (A = 0, V = 0, z());
  }
  let $ = -1;
  function z() {
    cancelAnimationFrame($), $ = requestAnimationFrame(W);
  }
  function W() {
    if (!u.value || !v.value) return;
    const L = x - d, F = Math.sign(A), M = Math.max(0, L - _l), U = Oe(w(M), 0, a.value.length), oe = L + v.value + _l, te = Oe(w(oe) + 1, U + 1, a.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (F !== lg || U < l.value) && (F !== ig || te > i.value)
    ) {
      const ue = T(l.value) - T(U), H = T(te) - T(i.value);
      Math.max(ue, H) > _l ? (l.value = U, i.value = te) : (U <= 0 && (l.value = U), te >= a.value.length && (i.value = te));
    }
    o.value = T(l.value), r.value = T(a.value.length) - T(i.value);
  }
  function Z(L) {
    const F = T(L);
    !u.value || L && !F ? k = L : u.value.scrollTop = F;
  }
  const J = b(() => a.value.slice(l.value, i.value).map((L, F) => ({
    raw: L,
    index: F + l.value
  })));
  return q(a, () => {
    h = Array.from({
      length: a.value.length
    }), g = Array.from({
      length: a.value.length
    }), _.immediate(), z();
  }, {
    deep: !0
  }), {
    calculateVisibleItems: z,
    containerRef: u,
    markerRef: c,
    computedItems: J,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: Z,
    handleScroll: I,
    handleScrollend: D,
    handleItemResize: P
  };
}
function og(e, a) {
  let n = e.length - 1, t = 0, l = 0, i = null, o = -1;
  if (e[n] < a)
    return n;
  for (; t <= n; )
    if (l = t + n >> 1, i = e[l], i > a)
      n = l - 1;
    else if (i < a)
      o = l, t = l + 1;
    else return i === a ? l : t;
  return o;
}
const rg = B({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...su(),
  ...ee(),
  ...Ne()
}, "VVirtualScroll"), al = O()({
  name: "VVirtualScroll",
  props: rg(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = Me("VVirtualScroll"), {
      dimensionStyles: l
    } = ze(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: u,
      handleScrollend: c,
      handleItemResize: d,
      scrollToIndex: f,
      paddingTop: m,
      paddingBottom: v,
      computedItems: y
    } = uu(e, E(e, "items"));
    return rt(() => e.renderless, () => {
      function h() {
        var k, p;
        const S = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[S]("scroll", u, {
          passive: !0
        }), document[S]("scrollend", c)) : ((k = o.value) == null || k[S]("scroll", u, {
          passive: !0
        }), (p = o.value) == null || p[S]("scrollend", c));
      }
      at(() => {
        o.value = wi(t.vnode.el, !0), h(!0);
      }), tt(h);
    }), R(() => {
      const h = y.value.map((g) => s(ru, {
        key: g.index,
        renderless: e.renderless,
        "onUpdate:height": (S) => d(g.index, S)
      }, {
        default: (S) => {
          var k;
          return (k = n.default) == null ? void 0 : k.call(n, {
            item: g.raw,
            index: g.index,
            ...S
          });
        }
      }));
      return e.renderless ? s(le, null, [s("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: X(m.value)
        }
      }, null), h, s("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: X(v.value)
        }
      }, null)]) : s("div", {
        ref: o,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: u,
        onScrollend: c,
        style: [l.value, e.style]
      }, [s("div", {
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
function Wi(e, a) {
  const n = G(!1);
  let t;
  function l(r) {
    cancelAnimationFrame(t), n.value = !0, t = requestAnimationFrame(() => {
      t = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const u = q(n, () => {
          u(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var d, f;
    if (r.key === "Tab" && ((d = a.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const u = (f = e.value) == null ? void 0 : f.$el;
    if (!u) return;
    (r.key === "Home" || r.key === "End") && u.scrollTo({
      top: r.key === "Home" ? 0 : u.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = u.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const m = u.getBoundingClientRect().top;
      for (const v of c)
        if (v.getBoundingClientRect().top >= m) {
          v.focus();
          break;
        }
    } else {
      const m = u.getBoundingClientRect().bottom;
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
const ji = B({
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
  ...Xs({
    itemChildren: !1
  })
}, "Select"), sg = B({
  ...ji(),
  ...Re(nl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ct({
    transition: {
      component: Ga
    }
  })
}, "VSelect"), Yi = O()({
  name: "VSelect",
  props: sg(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      t
    } = $e(), l = j(), i = j(), o = j(), r = ae(e, "menu"), u = b({
      get: () => r.value,
      set: (L) => {
        var F;
        r.value && !L && ((F = i.value) != null && F.ΨopenChildren.size) || (r.value = L);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: f
    } = Li(e), m = ae(e, "modelValue", [], (L) => d(L === null ? [null] : Te(L)), (L) => {
      const F = f(L);
      return e.multiple ? F : F[0] ?? null;
    }), v = b(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), y = Qa(), h = b(() => m.value.map((L) => L.value)), g = G(!1), S = b(() => u.value ? e.closeText : e.openText);
    let k = "", p;
    const _ = b(() => e.hideSelected ? c.value.filter((L) => !m.value.some((F) => e.valueComparator(F, L))) : c.value), C = b(() => e.hideNoData && !_.value.length || e.readonly || (y == null ? void 0 : y.isReadonly.value)), P = b(() => {
      var L;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((L = e.menuProps) == null ? void 0 : L.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), T = j(), w = Wi(T, l);
    function x(L) {
      e.openOnClear && (u.value = !0);
    }
    function A() {
      C.value || (u.value = !u.value);
    }
    function V(L) {
      Ta(L) && I(L);
    }
    function I(L) {
      var oe, te;
      if (!L.key || e.readonly || y != null && y.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(L.key) && L.preventDefault(), ["Enter", "ArrowDown", " "].includes(L.key) && (u.value = !0), ["Escape", "Tab"].includes(L.key) && (u.value = !1), L.key === "Home" ? (oe = T.value) == null || oe.focus("first") : L.key === "End" && ((te = T.value) == null || te.focus("last"));
      const F = 1e3;
      if (e.multiple || !Ta(L)) return;
      const M = performance.now();
      M - p > F && (k = ""), k += L.key.toLowerCase(), p = M;
      const U = c.value.find((ue) => ue.title.toLowerCase().startsWith(k));
      if (U !== void 0) {
        m.value = [U];
        const ue = _.value.indexOf(U);
        xe && window.requestAnimationFrame(() => {
          var H;
          ue >= 0 && ((H = o.value) == null || H.scrollToIndex(ue));
        });
      }
    }
    function D(L) {
      let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!L.props.disabled)
        if (e.multiple) {
          const M = m.value.findIndex((oe) => e.valueComparator(oe.value, L.value)), U = F ?? !~M;
          if (~M) {
            const oe = U ? [...m.value, L] : [...m.value];
            oe.splice(M, 1), m.value = oe;
          } else U && (m.value = [...m.value, L]);
        } else {
          const M = F !== !1;
          m.value = M ? [L] : [], we(() => {
            u.value = !1;
          });
        }
    }
    function $(L) {
      var F;
      (F = T.value) != null && F.$el.contains(L.relatedTarget) || (u.value = !1);
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
      else if (Bn(l.value, ":autofill") || Bn(l.value, ":-webkit-autofill")) {
        const F = c.value.find((M) => M.title === L);
        F && D(F);
      } else l.value && (l.value.value = "");
    }
    return q(u, () => {
      if (!e.hideSelected && u.value && m.value.length) {
        const L = _.value.findIndex((F) => m.value.some((M) => e.valueComparator(M.value, F.value)));
        xe && window.requestAnimationFrame(() => {
          var F;
          L >= 0 && ((F = o.value) == null || F.scrollToIndex(L));
        });
      }
    }), q(() => e.items, (L, F) => {
      u.value || g.value && !F.length && L.length && (u.value = !0);
    }), R(() => {
      const L = !!(e.chips || n.chip), F = !!(!e.hideNoData || _.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), M = m.value.length > 0, U = $t.filterProps(e), oe = M || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return s($t, N({
        ref: l
      }, U, {
        modelValue: m.value.map((te) => te.props.value).join(", "),
        "onUpdate:modelValue": J,
        focused: g.value,
        "onUpdate:focused": (te) => g.value = te,
        validationValue: m.externalValue,
        counterValue: v.value,
        dirty: M,
        class: ["v-select", {
          "v-select--active-menu": u.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": m.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: oe,
        "onClick:clear": x,
        "onMousedown:control": A,
        onBlur: $,
        onKeydown: I,
        "aria-label": t(S.value),
        title: t(S.value)
      }), {
        ...n,
        default: () => s(le, null, [s(Fn, N({
          ref: i,
          modelValue: u.value,
          "onUpdate:modelValue": (te) => u.value = te,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: C.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: z,
          onAfterLeave: W
        }, P.value), {
          default: () => [F && s(el, N({
            ref: T,
            selected: h.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (te) => te.preventDefault(),
            onKeydown: V,
            onFocusin: Z,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, w, e.listProps), {
            default: () => {
              var te, ue, H;
              return [(te = n["prepend-item"]) == null ? void 0 : te.call(n), !_.value.length && !e.hideNoData && (((ue = n["no-data"]) == null ? void 0 : ue.call(n)) ?? s(Ft, {
                title: t(e.noDataText)
              }, null)), s(al, {
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
                  const K = N(ie.props, {
                    ref: Ce,
                    key: he,
                    onClick: () => D(ie, null)
                  });
                  return ((fe = n.item) == null ? void 0 : fe.call(n, {
                    item: ie,
                    index: he,
                    props: K
                  })) ?? s(Ft, N(K, {
                    role: "option"
                  }), {
                    prepend: (Y) => {
                      let {
                        isSelected: Q
                      } = Y;
                      return s(le, null, [e.multiple && !e.hideSelected ? s(Et, {
                        key: ie.value,
                        modelValue: Q,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ie.props.prependAvatar && s(ht, {
                        image: ie.props.prependAvatar
                      }, null), ie.props.prependIcon && s(Se, {
                        icon: ie.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (H = n["append-item"]) == null ? void 0 : H.call(n)];
            }
          })]
        }), m.value.map((te, ue) => {
          function H(Ce) {
            Ce.stopPropagation(), Ce.preventDefault(), D(te, !1);
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
          }, ie = L ? !!n.chip : !!n.selection, he = ie ? za(L ? n.chip({
            item: te,
            index: ue,
            props: ne
          }) : n.selection({
            item: te,
            index: ue
          })) : void 0;
          if (!(ie && !he))
            return s("div", {
              key: te.value,
              class: "v-select__selection"
            }, [L ? n.chip ? s(me, {
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
            }) : s(zn, N({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: te.title,
              disabled: te.props.disabled
            }, ne), null) : he ?? s("span", {
              class: "v-select__selection-text"
            }, [te.title, e.multiple && ue < m.value.length - 1 && s("span", {
              class: "v-select__selection-comma"
            }, [Ke(",")])])]);
        })]),
        "append-inner": function() {
          var ne;
          for (var te = arguments.length, ue = new Array(te), H = 0; H < te; H++)
            ue[H] = arguments[H];
          return s(le, null, [(ne = n["append-inner"]) == null ? void 0 : ne.call(n, ...ue), e.menuIcon ? s(Se, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), St({
      isFocused: g,
      menu: u,
      select: D
    }, l);
  }
}), ug = (e, a, n) => e == null || a == null ? -1 : e.toString().toLocaleLowerCase().indexOf(a.toString().toLocaleLowerCase()), ga = B({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function cg(e, a, n) {
  var r;
  const t = [], l = (n == null ? void 0 : n.default) ?? ug, i = n != null && n.filterKeys ? Te(n.filterKeys) : !1, o = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return t;
  e: for (let u = 0; u < e.length; u++) {
    const [c, d = c] = Te(e[u]), f = {}, m = {};
    let v = -1;
    if ((a || o > 0) && !(n != null && n.noFilter)) {
      if (typeof c == "object") {
        const g = i || Object.keys(d);
        for (const S of g) {
          const k = He(d, S), p = (r = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : r[S];
          if (v = p ? p(k, a, c) : l(k, a, c), v !== -1 && v !== !1)
            p ? f[S] = v : m[S] = v;
          else if ((n == null ? void 0 : n.filterMode) === "every")
            continue e;
        }
      } else
        v = l(c, a, c), v !== -1 && v !== !1 && (m.title = v);
      const y = Object.keys(m).length, h = Object.keys(f).length;
      if (!y && !h || (n == null ? void 0 : n.filterMode) === "union" && h !== o && !y || (n == null ? void 0 : n.filterMode) === "intersection" && (h !== o || !y)) continue;
    }
    t.push({
      index: u,
      matches: {
        ...m,
        ...f
      }
    });
  }
  return t;
}
function ha(e, a, n, t) {
  const l = j([]), i = j(/* @__PURE__ */ new Map()), o = b(() => t != null && t.transform ? ot(a).map((u) => [u, t.transform(u)]) : ot(a));
  Fe(() => {
    const u = typeof n == "function" ? n() : ot(n), c = typeof u != "string" && typeof u != "number" ? "" : String(u), d = cg(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...ot(t == null ? void 0 : t.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), f = ot(a), m = [], v = /* @__PURE__ */ new Map();
    d.forEach((y) => {
      let {
        index: h,
        matches: g
      } = y;
      const S = f[h];
      m.push(S), v.set(S.value, g);
    }), l.value = m, i.value = v;
  });
  function r(u) {
    return i.value.get(u.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function dg(e, a, n) {
  if (a == null) return e;
  if (Array.isArray(a)) throw new Error("Multiple matches is not implemented");
  return typeof a == "number" && ~a ? s(le, null, [s("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, a)]), s("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(a, n)]), s("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(a + n)])]) : e;
}
const vg = B({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...ga({
    filterKeys: ["title"]
  }),
  ...ji(),
  ...Re(nl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ct({
    transition: !1
  })
}, "VAutocomplete"), fg = O()({
  name: "VAutocomplete",
  props: vg(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      t
    } = $e(), l = j(), i = G(!1), o = G(!0), r = G(!1), u = j(), c = j(), d = ae(e, "menu"), f = b({
      get: () => d.value,
      set: (K) => {
        var fe;
        d.value && !K && ((fe = u.value) != null && fe.ΨopenChildren.size) || (d.value = K);
      }
    }), m = G(-1), v = b(() => {
      var K;
      return (K = l.value) == null ? void 0 : K.color;
    }), y = b(() => f.value ? e.closeText : e.openText), {
      items: h,
      transformIn: g,
      transformOut: S
    } = Li(e), {
      textColorClasses: k,
      textColorStyles: p
    } = Xe(v), _ = ae(e, "search", ""), C = ae(e, "modelValue", [], (K) => g(K === null ? [null] : Te(K)), (K) => {
      const fe = S(K);
      return e.multiple ? fe : fe[0] ?? null;
    }), P = b(() => typeof e.counterValue == "function" ? e.counterValue(C.value) : typeof e.counterValue == "number" ? e.counterValue : C.value.length), T = Qa(), {
      filteredItems: w,
      getMatches: x
    } = ha(e, h, () => o.value ? "" : _.value), A = b(() => e.hideSelected ? w.value.filter((K) => !C.value.some((fe) => fe.value === K.value)) : w.value), V = b(() => !!(e.chips || n.chip)), I = b(() => V.value || !!n.selection), D = b(() => C.value.map((K) => K.props.value)), $ = b(() => {
      var fe;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && _.value === ((fe = A.value[0]) == null ? void 0 : fe.title)) && A.value.length > 0 && !o.value && !r.value;
    }), z = b(() => e.hideNoData && !A.value.length || e.readonly || (T == null ? void 0 : T.isReadonly.value)), W = j(), Z = Wi(W, l);
    function J(K) {
      e.openOnClear && (f.value = !0), _.value = "";
    }
    function L() {
      z.value || (f.value = !0);
    }
    function F(K) {
      z.value || (i.value && (K.preventDefault(), K.stopPropagation()), f.value = !f.value);
    }
    function M(K) {
      var fe;
      Ta(K) && ((fe = l.value) == null || fe.focus());
    }
    function U(K) {
      var Q, ce, se;
      if (e.readonly || T != null && T.isReadonly.value) return;
      const fe = l.value.selectionStart, Y = C.value.length;
      if ((m.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(K.key)) && K.preventDefault(), ["Enter", "ArrowDown"].includes(K.key) && (f.value = !0), ["Escape"].includes(K.key) && (f.value = !1), $.value && ["Enter", "Tab"].includes(K.key) && !C.value.some((de) => {
        let {
          value: Pe
        } = de;
        return Pe === A.value[0].value;
      }) && Ce(A.value[0]), K.key === "ArrowDown" && $.value && ((Q = W.value) == null || Q.focus("next")), ["Backspace", "Delete"].includes(K.key)) {
        if (!e.multiple && I.value && C.value.length > 0 && !_.value) return Ce(C.value[0], !1);
        if (~m.value) {
          const de = m.value;
          Ce(C.value[m.value], !1), m.value = de >= Y - 1 ? Y - 2 : de;
        } else K.key === "Backspace" && !_.value && (m.value = Y - 1);
      }
      if (e.multiple) {
        if (K.key === "ArrowLeft") {
          if (m.value < 0 && fe > 0) return;
          const de = m.value > -1 ? m.value - 1 : Y - 1;
          C.value[de] ? m.value = de : (m.value = -1, l.value.setSelectionRange((ce = _.value) == null ? void 0 : ce.length, (se = _.value) == null ? void 0 : se.length));
        }
        if (K.key === "ArrowRight") {
          if (m.value < 0) return;
          const de = m.value + 1;
          C.value[de] ? m.value = de : (m.value = -1, l.value.setSelectionRange(0, 0));
        }
      }
    }
    function oe(K) {
      if (Bn(l.value, ":autofill") || Bn(l.value, ":-webkit-autofill")) {
        const fe = h.value.find((Y) => Y.title === K.target.value);
        fe && Ce(fe);
      }
    }
    function te() {
      var K;
      e.eager && ((K = c.value) == null || K.calculateVisibleItems());
    }
    function ue() {
      var K;
      i.value && (o.value = !0, (K = l.value) == null || K.focus());
    }
    function H(K) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function ne(K) {
      r.value = !1;
    }
    function ie(K) {
      (K == null || K === "" && !e.multiple && !I.value) && (C.value = []);
    }
    const he = G(!1);
    function Ce(K) {
      let fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!K || K.props.disabled))
        if (e.multiple) {
          const Y = C.value.findIndex((ce) => e.valueComparator(ce.value, K.value)), Q = fe ?? !~Y;
          if (~Y) {
            const ce = Q ? [...C.value, K] : [...C.value];
            ce.splice(Y, 1), C.value = ce;
          } else Q && (C.value = [...C.value, K]);
          e.clearOnSelect && (_.value = "");
        } else {
          const Y = fe !== !1;
          C.value = Y ? [K] : [], _.value = Y && !I.value ? K.title : "", we(() => {
            f.value = !1, o.value = !0;
          });
        }
    }
    return q(i, (K, fe) => {
      var Y;
      K !== fe && (K ? (he.value = !0, _.value = e.multiple || I.value ? "" : String(((Y = C.value.at(-1)) == null ? void 0 : Y.props.title) ?? ""), o.value = !0, we(() => he.value = !1)) : (!e.multiple && _.value == null && (C.value = []), f.value = !1, C.value.some((Q) => {
        let {
          title: ce
        } = Q;
        return ce === _.value;
      }) || (_.value = ""), m.value = -1));
    }), q(_, (K) => {
      !i.value || he.value || (K && (f.value = !0), o.value = !K);
    }), q(f, () => {
      if (!e.hideSelected && f.value && C.value.length) {
        const K = A.value.findIndex((fe) => C.value.some((Y) => fe.value === Y.value));
        xe && window.requestAnimationFrame(() => {
          var fe;
          K >= 0 && ((fe = c.value) == null || fe.scrollToIndex(K));
        });
      }
    }), q(() => e.items, (K, fe) => {
      f.value || i.value && !fe.length && K.length && (f.value = !0);
    }), R(() => {
      const K = !!(!e.hideNoData || A.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), fe = C.value.length > 0, Y = $t.filterProps(e);
      return s($t, N({
        ref: l
      }, Y, {
        modelValue: _.value,
        "onUpdate:modelValue": [(Q) => _.value = Q, ie],
        focused: i.value,
        "onUpdate:focused": (Q) => i.value = Q,
        validationValue: C.externalValue,
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
        ...n,
        default: () => s(le, null, [s(Fn, N({
          ref: u,
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
          onAfterLeave: ue
        }, e.menuProps), {
          default: () => [K && s(el, N({
            ref: W,
            selected: D.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Q) => Q.preventDefault(),
            onKeydown: M,
            onFocusin: H,
            onFocusout: ne,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, Z, e.listProps), {
            default: () => {
              var Q, ce, se;
              return [(Q = n["prepend-item"]) == null ? void 0 : Q.call(n), !A.value.length && !e.hideNoData && (((ce = n["no-data"]) == null ? void 0 : ce.call(n)) ?? s(Ft, {
                title: t(e.noDataText)
              }, null)), s(al, {
                ref: c,
                renderless: !0,
                items: A.value
              }, {
                default: (de) => {
                  var Je;
                  let {
                    item: Pe,
                    index: it,
                    itemRef: _e
                  } = de;
                  const Vt = N(Pe.props, {
                    ref: _e,
                    key: it,
                    active: $.value && it === 0 ? !0 : void 0,
                    onClick: () => Ce(Pe, null)
                  });
                  return ((Je = n.item) == null ? void 0 : Je.call(n, {
                    item: Pe,
                    index: it,
                    props: Vt
                  })) ?? s(Ft, N(Vt, {
                    role: "option"
                  }), {
                    prepend: (Kt) => {
                      let {
                        isSelected: Xt
                      } = Kt;
                      return s(le, null, [e.multiple && !e.hideSelected ? s(Et, {
                        key: Pe.value,
                        modelValue: Xt,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Pe.props.prependAvatar && s(ht, {
                        image: Pe.props.prependAvatar
                      }, null), Pe.props.prependIcon && s(Se, {
                        icon: Pe.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var Kt, Xt;
                      return o.value ? Pe.title : dg(Pe.title, (Kt = x(Pe)) == null ? void 0 : Kt.title, ((Xt = _.value) == null ? void 0 : Xt.length) ?? 0);
                    }
                  });
                }
              }), (se = n["append-item"]) == null ? void 0 : se.call(n)];
            }
          })]
        }), C.value.map((Q, ce) => {
          function se(_e) {
            _e.stopPropagation(), _e.preventDefault(), Ce(Q, !1);
          }
          const de = {
            "onClick:close": se,
            onKeydown(_e) {
              _e.key !== "Enter" && _e.key !== " " || (_e.preventDefault(), _e.stopPropagation(), se(_e));
            },
            onMousedown(_e) {
              _e.preventDefault(), _e.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Pe = V.value ? !!n.chip : !!n.selection, it = Pe ? za(V.value ? n.chip({
            item: Q,
            index: ce,
            props: de
          }) : n.selection({
            item: Q,
            index: ce
          })) : void 0;
          if (!(Pe && !it))
            return s("div", {
              key: Q.value,
              class: ["v-autocomplete__selection", ce === m.value && ["v-autocomplete__selection--selected", k.value]],
              style: ce === m.value ? p.value : {}
            }, [V.value ? n.chip ? s(me, {
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
            }) : s(zn, N({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Q.title,
              disabled: Q.props.disabled
            }, de), null) : it ?? s("span", {
              class: "v-autocomplete__selection-text"
            }, [Q.title, e.multiple && ce < C.value.length - 1 && s("span", {
              class: "v-autocomplete__selection-comma"
            }, [Ke(",")])])]);
        })]),
        "append-inner": function() {
          var de;
          for (var Q = arguments.length, ce = new Array(Q), se = 0; se < Q; se++)
            ce[se] = arguments[se];
          return s(le, null, [(de = n["append-inner"]) == null ? void 0 : de.call(n, ...ce), e.menuIcon ? s(Se, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: F,
            onClick: Tr,
            "aria-label": t(y.value),
            title: t(y.value),
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
}), mg = B({
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
  ...Lt({
    location: "top end"
  }),
  ...Ae(),
  ...ve(),
  ...ge(),
  ...Ct({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), gg = O()({
  name: "VBadge",
  inheritAttrs: !1,
  props: mg(),
  setup(e, a) {
    const {
      backgroundColorClasses: n,
      backgroundColorStyles: t
    } = Ve(E(e, "color")), {
      roundedClasses: l
    } = Ee(e), {
      t: i
    } = $e(), {
      textColorClasses: o,
      textColorStyles: r
    } = Xe(E(e, "textColor")), {
      themeClasses: u
    } = ns(), {
      locationStyles: c
    } = wn(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? +(e.offsetY ?? 0) : ["left", "right"].includes(d) ? +(e.offsetX ?? 0) : 0));
    return R(() => {
      const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= +e.max ? d : `${e.max}+`, [m, v] = Al(a.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return s(e.tag, N({
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
          var y, h;
          return [s("div", {
            class: "v-badge__wrapper"
          }, [(h = (y = a.slots).default) == null ? void 0 : h.call(y), s(et, {
            transition: e.transition
          }, {
            default: () => {
              var g, S;
              return [Be(s("span", N({
                class: ["v-badge__badge", u.value, n.value, l.value, o.value],
                style: [t.value, r.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, m), [e.dot ? void 0 : a.slots.badge ? (S = (g = a.slots).badge) == null ? void 0 : S.call(g) : e.icon ? s(Se, {
                icon: e.icon
              }, null) : f]), [[wt, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), hg = B({
  color: String,
  density: String,
  ...ee()
}, "VBannerActions"), cu = O()({
  name: "VBannerActions",
  props: hg(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return De({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), R(() => {
      var t;
      return s("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(t = n.default) == null ? void 0 : t.call(n)]);
    }), {};
  }
}), du = Tt("v-banner-text"), yg = B({
  avatar: String,
  bgColor: String,
  color: String,
  icon: re,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...st(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...mn({
    mobile: null
  }),
  ...je(),
  ...Lt(),
  ...On(),
  ...Ae(),
  ...ve(),
  ...ge()
}, "VBanner"), bg = O()({
  name: "VBanner",
  props: yg(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: l
    } = Ve(e, "bgColor"), {
      borderClasses: i
    } = ft(e), {
      densityClasses: o
    } = lt(e), {
      displayClasses: r,
      mobile: u
    } = yt(e), {
      dimensionStyles: c
    } = ze(e), {
      elevationClasses: d
    } = qe(e), {
      locationStyles: f
    } = wn(e), {
      positionClasses: m
    } = Rn(e), {
      roundedClasses: v
    } = Ee(e), {
      themeClasses: y
    } = ke(e), h = E(e, "color"), g = E(e, "density");
    De({
      VBannerActions: {
        color: h,
        density: g
      }
    }), R(() => {
      const S = !!(e.text || n.text), k = !!(e.avatar || e.icon), p = !!(k || n.prepend);
      return s(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || u.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, y.value, t.value, i.value, o.value, r.value, d.value, m.value, v.value, e.class],
        style: [l.value, c.value, f.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var _;
          return [p && s("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [n.prepend ? s(me, {
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
          }, n.prepend) : s(ht, {
            key: "prepend-avatar",
            color: h.value,
            density: g.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), s("div", {
            class: "v-banner__content"
          }, [S && s(du, {
            key: "text"
          }, {
            default: () => {
              var C;
              return [((C = n.text) == null ? void 0 : C.call(n)) ?? e.text];
            }
          }), (_ = n.default) == null ? void 0 : _.call(n)]), n.actions && s(cu, {
            key: "actions"
          }, n.actions)];
        }
      });
    });
  }
}), Sg = B({
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
  ...st(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...Ae(),
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
}, "VBottomNavigation"), kg = O()({
  name: "VBottomNavigation",
  props: Sg(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ns(), {
      borderClasses: l
    } = ft(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(E(e, "bgColor")), {
      densityClasses: r
    } = lt(e), {
      elevationClasses: u
    } = qe(e), {
      roundedClasses: c
    } = Ee(e), {
      ssrBootStyles: d
    } = yn(), f = b(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), m = ae(e, "active", e.active), {
      layoutItemStyles: v
    } = hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: b(() => "bottom"),
      layoutSize: b(() => m.value ? f.value : 0),
      elementSize: f,
      active: m,
      absolute: E(e, "absolute")
    });
    return qt(e, Di), De({
      VBtn: {
        baseColor: E(e, "baseColor"),
        color: E(e, "color"),
        density: E(e, "density"),
        stacked: b(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), R(() => s(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": m.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, t.value, i.value, l.value, r.value, u.value, c.value, e.class],
      style: [o.value, v.value, {
        height: X(f.value)
      }, d.value, e.style]
    }, {
      default: () => [n.default && s("div", {
        class: "v-bottom-navigation__content"
      }, [n.default()])]
    })), {};
  }
}), vu = B({
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
}, "VDialog"), ql = O()({
  name: "VDialog",
  props: vu(),
  emits: {
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const l = ae(e, "modelValue"), {
      scopeId: i
    } = Cn(), o = j();
    function r(d) {
      var v, y;
      const f = d.relatedTarget, m = d.target;
      if (f !== m && ((v = o.value) != null && v.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(m) && // It isn't inside the dialog body
      !o.value.contentEl.contains(m)) {
        const h = Un(o.value.contentEl);
        if (!h.length) return;
        const g = h[0], S = h[h.length - 1];
        f === g ? S.focus() : g.focus();
      }
    }
    xe && q(() => l.value && e.retainFocus, (d) => {
      d ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function u() {
      var d;
      (d = o.value) != null && d.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      n("afterLeave");
    }
    return q(l, async (d) => {
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
      return s(It, N({
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
        onAfterEnter: u,
        onAfterLeave: c
      }, i), {
        activator: t.activator,
        default: function() {
          for (var v = arguments.length, y = new Array(v), h = 0; h < v; h++)
            y[h] = arguments[h];
          return s(me, {
            root: "VDialog"
          }, {
            default: () => {
              var g;
              return [(g = t.default) == null ? void 0 : g.call(t, ...y)];
            }
          });
        }
      });
    }), St({}, o);
  }
}), xg = B({
  inset: Boolean,
  ...vu({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), wg = O()({
  name: "VBottomSheet",
  props: xg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue");
    return R(() => {
      const l = ql.filterProps(e);
      return s(ql, N(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: t.value,
        "onUpdate:modelValue": (i) => t.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), n);
    }), {};
  }
}), Cg = B({
  divider: [Number, String],
  ...ee()
}, "VBreadcrumbsDivider"), fu = O()({
  name: "VBreadcrumbsDivider",
  props: Cg(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => {
      var t;
      return s("li", {
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [((t = n == null ? void 0 : n.default) == null ? void 0 : t.call(n)) ?? e.divider]);
    }), {};
  }
}), Vg = B({
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
}, "VBreadcrumbsItem"), mu = O()({
  name: "VBreadcrumbsItem",
  props: Vg(),
  setup(e, a) {
    let {
      slots: n,
      attrs: t
    } = a;
    const l = ua(e, t), i = b(() => {
      var c;
      return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }), o = b(() => i.value ? e.activeColor : e.color), {
      textColorClasses: r,
      textColorStyles: u
    } = Xe(o);
    return R(() => s(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, r.value, e.class],
      style: [u.value, e.style],
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var c, d;
        return [l.isLink.value ? s("a", {
          class: "v-breadcrumbs-item--link",
          href: l.href.value,
          "aria-current": i.value ? "page" : void 0,
          onClick: l.navigate
        }, [((d = n.default) == null ? void 0 : d.call(n)) ?? e.title]) : ((c = n.default) == null ? void 0 : c.call(n)) ?? e.title];
      }
    })), {};
  }
}), Pg = B({
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
  ...Ae(),
  ...ve({
    tag: "ul"
  })
}, "VBreadcrumbs"), _g = O()({
  name: "VBreadcrumbs",
  props: Pg(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: l
    } = Ve(E(e, "bgColor")), {
      densityClasses: i
    } = lt(e), {
      roundedClasses: o
    } = Ee(e);
    De({
      VBreadcrumbsDivider: {
        divider: E(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: E(e, "activeClass"),
        activeColor: E(e, "activeColor"),
        color: E(e, "color"),
        disabled: E(e, "disabled")
      }
    });
    const r = b(() => e.items.map((u) => typeof u == "string" ? {
      item: {
        title: u
      },
      raw: u
    } : {
      item: u,
      raw: u
    }));
    return R(() => {
      const u = !!(n.prepend || e.icon);
      return s(e.tag, {
        class: ["v-breadcrumbs", t.value, i.value, o.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var c;
          return [u && s("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [n.prepend ? s(me, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, n.prepend) : s(Se, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), r.value.map((d, f, m) => {
            var h;
            let {
              item: v,
              raw: y
            } = d;
            return s(le, null, [((h = n.item) == null ? void 0 : h.call(n, {
              item: v,
              index: f
            })) ?? s(mu, N({
              key: f,
              disabled: f >= m.length - 1
            }, typeof v == "string" ? {
              title: v
            } : v), {
              default: n.title ? () => {
                var g;
                return (g = n.title) == null ? void 0 : g.call(n, {
                  item: v,
                  index: f
                });
              } : void 0
            }), f < m.length - 1 && s(fu, null, {
              default: n.divider ? () => {
                var g;
                return (g = n.divider) == null ? void 0 : g.call(n, {
                  item: y,
                  index: f
                });
              } : void 0
            })]);
          }), (c = n.default) == null ? void 0 : c.call(n)];
        }
      });
    }), {};
  }
}), gu = O()({
  name: "VCardActions",
  props: ee(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return De({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), R(() => {
      var t;
      return s("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(t = n.default) == null ? void 0 : t.call(n)]);
    }), {};
  }
}), Ig = B({
  opacity: [Number, String],
  ...ee(),
  ...ve()
}, "VCardSubtitle"), hu = O()({
  name: "VCardSubtitle",
  props: Ig(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), yu = Tt("v-card-title"), pg = B({
  appendAvatar: String,
  appendIcon: re,
  prependAvatar: String,
  prependIcon: re,
  subtitle: [String, Number],
  title: [String, Number],
  ...ee(),
  ...Ye()
}, "VCardItem"), bu = O()({
  name: "VCardItem",
  props: pg(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => {
      var c;
      const t = !!(e.prependAvatar || e.prependIcon), l = !!(t || n.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || n.append), r = !!(e.title != null || n.title), u = !!(e.subtitle != null || n.subtitle);
      return s("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && s("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? s(me, {
        key: "prepend-defaults",
        disabled: !t,
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
      }, n.prepend) : s(le, null, [e.prependAvatar && s(ht, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && s(Se, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), s("div", {
        class: "v-card-item__content"
      }, [r && s(yu, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
        }
      }), u && s(hu, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = n.subtitle) == null ? void 0 : d.call(n)) ?? e.subtitle];
        }
      }), (c = n.default) == null ? void 0 : c.call(n)]), o && s("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? s(me, {
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
      }, n.append) : s(le, null, [e.appendIcon && s(Se, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && s(ht, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Ag = B({
  opacity: [Number, String],
  ...ee(),
  ...ve()
}, "VCardText"), Su = O()({
  name: "VCardText",
  props: Ag(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => s(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Tg = B({
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
  ...st(),
  ...ee(),
  ...Ye(),
  ...Ne(),
  ...je(),
  ...Xa(),
  ...Lt(),
  ...On(),
  ...Ae(),
  ...ca(),
  ...ve(),
  ...ge(),
  ...bt({
    variant: "elevated"
  })
}, "VCard"), Yn = O()({
  name: "VCard",
  directives: {
    Ripple: Ot
  },
  props: Tg(),
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      themeClasses: l
    } = ke(e), {
      borderClasses: i
    } = ft(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: u
    } = bn(e), {
      densityClasses: c
    } = lt(e), {
      dimensionStyles: d
    } = ze(e), {
      elevationClasses: f
    } = qe(e), {
      loaderClasses: m
    } = ra(e), {
      locationStyles: v
    } = wn(e), {
      positionClasses: y
    } = Rn(e), {
      roundedClasses: h
    } = Ee(e), g = ua(e, n), S = b(() => e.link !== !1 && g.isLink.value), k = b(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
    return R(() => {
      const p = S.value ? "a" : e.tag, _ = !!(t.title || e.title != null), C = !!(t.subtitle || e.subtitle != null), P = _ || C, T = !!(t.append || e.appendAvatar || e.appendIcon), w = !!(t.prepend || e.prependAvatar || e.prependIcon), x = !!(t.image || e.image), A = P || w || T, V = !!(t.text || e.text != null);
      return Be(s(p, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": k.value
        }, l.value, i.value, o.value, c.value, f.value, m.value, y.value, h.value, u.value, e.class],
        style: [r.value, d.value, v.value, e.style],
        href: g.href.value,
        onClick: k.value && g.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var I;
          return [x && s("div", {
            key: "image",
            class: "v-card__image"
          }, [t.image ? s(me, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, t.image) : s(Mt, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), s(sa, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: t.loader
          }), A && s(bu, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: t.item,
            prepend: t.prepend,
            title: t.title,
            subtitle: t.subtitle,
            append: t.append
          }), V && s(Su, {
            key: "text"
          }, {
            default: () => {
              var D;
              return [((D = t.text) == null ? void 0 : D.call(t)) ?? e.text];
            }
          }), (I = t.default) == null ? void 0 : I.call(t), t.actions && s(gu, null, {
            default: t.actions
          }), Ut(k.value, "v-card")];
        }
      }), [[ct("ripple"), k.value && e.ripple]]);
    }), {};
  }
}), Bg = (e) => {
  const {
    touchstartX: a,
    touchendX: n,
    touchstartY: t,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = n - a, e.offsetY = l - t, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && n < a - o && e.left(e), e.right && n > a + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < t - o && e.up(e), e.down && l > t + o && e.down(e));
};
function Dg(e, a) {
  var t;
  const n = e.changedTouches[0];
  a.touchstartX = n.clientX, a.touchstartY = n.clientY, (t = a.start) == null || t.call(a, {
    originalEvent: e,
    ...a
  });
}
function Mg(e, a) {
  var t;
  const n = e.changedTouches[0];
  a.touchendX = n.clientX, a.touchendY = n.clientY, (t = a.end) == null || t.call(a, {
    originalEvent: e,
    ...a
  }), Bg(a);
}
function Eg(e, a) {
  var t;
  const n = e.changedTouches[0];
  a.touchmoveX = n.clientX, a.touchmoveY = n.clientY, (t = a.move) == null || t.call(a, {
    originalEvent: e,
    ...a
  });
}
function Fg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const a = {
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
    touchstart: (n) => Dg(n, a),
    touchend: (n) => Mg(n, a),
    touchmove: (n) => Eg(n, a)
  };
}
function $g(e, a) {
  var r;
  const n = a.value, t = n != null && n.parent ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? {
    passive: !0
  }, i = (r = a.instance) == null ? void 0 : r.$.uid;
  if (!t || !i) return;
  const o = Fg(a.value);
  t._touchHandlers = t._touchHandlers ?? /* @__PURE__ */ Object.create(null), t._touchHandlers[i] = o, Pr(o).forEach((u) => {
    t.addEventListener(u, o[u], l);
  });
}
function Lg(e, a) {
  var i, o;
  const n = (i = a.value) != null && i.parent ? e.parentElement : e, t = (o = a.instance) == null ? void 0 : o.$.uid;
  if (!(n != null && n._touchHandlers) || !t) return;
  const l = n._touchHandlers[t];
  Pr(l).forEach((r) => {
    n.removeEventListener(r, l[r]);
  }), delete n._touchHandlers[t];
}
const Gi = {
  mounted: $g,
  unmounted: Lg
}, ku = Symbol.for("vuetify:v-window"), xu = Symbol.for("vuetify:v-window-group"), ll = B({
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
    Touch: Gi
  },
  props: ll(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      isRtl: l
    } = We(), {
      t: i
    } = $e(), o = qt(e, xu), r = j(), u = b(() => l.value ? !e.reverse : e.reverse), c = G(!1), d = b(() => {
      const _ = e.direction === "vertical" ? "y" : "x", P = (u.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${_}${P}-transition`;
    }), f = G(0), m = j(void 0), v = b(() => o.items.value.findIndex((_) => o.selected.value.includes(_.id)));
    q(v, (_, C) => {
      const P = o.items.value.length, T = P - 1;
      P <= 2 ? c.value = _ < C : _ === T && C === 0 ? c.value = !0 : _ === 0 && C === T ? c.value = !1 : c.value = _ < C;
    }), pe(ku, {
      transition: d,
      isReversed: c,
      transitionCount: f,
      transitionHeight: m,
      rootRef: r
    });
    const y = b(() => e.continuous || v.value !== 0), h = b(() => e.continuous || v.value !== o.items.value.length - 1);
    function g() {
      y.value && o.prev();
    }
    function S() {
      h.value && o.next();
    }
    const k = b(() => {
      const _ = [], C = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${u.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      _.push(y.value ? n.prev ? n.prev({
        props: C
      }) : s(be, C, null) : s("div", null, null));
      const P = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${u.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return _.push(h.value ? n.next ? n.next({
        props: P
      }) : s(be, P, null) : s("div", null, null)), _;
    }), p = b(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          u.value ? g() : S();
        },
        right: () => {
          u.value ? S() : g();
        },
        start: (C) => {
          let {
            originalEvent: P
          } = C;
          P.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return R(() => Be(s(e.tag, {
      ref: r,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, t.value, e.class],
      style: e.style
    }, {
      default: () => {
        var _, C;
        return [s("div", {
          class: "v-window__container",
          style: {
            height: m.value
          }
        }, [(_ = n.default) == null ? void 0 : _.call(n, {
          group: o
        }), e.showArrows !== !1 && s("div", {
          class: "v-window__controls"
        }, [k.value])]), (C = n.additional) == null ? void 0 : C.call(n, {
          group: o
        })];
      }
    }), [[ct("touch"), p.value]])), {
      group: o
    };
  }
}), Og = B({
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
}, "VCarousel"), Rg = O()({
  name: "VCarousel",
  props: Og(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), {
      t: l
    } = $e(), i = j();
    let o = -1;
    q(t, u), q(() => e.interval, u), q(() => e.cycle, (c) => {
      c ? u() : window.clearTimeout(o);
    }), at(r);
    function r() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function u() {
      window.clearTimeout(o), window.requestAnimationFrame(r);
    }
    return R(() => {
      const c = rn.filterProps(e);
      return s(rn, N({
        ref: i
      }, c, {
        modelValue: t.value,
        "onUpdate:modelValue": (d) => t.value = d,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: X(e.height)
        }, e.style]
      }), {
        default: n.default,
        additional: (d) => {
          let {
            group: f
          } = d;
          return s(le, null, [!e.hideDelimiters && s("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [f.items.value.length > 0 && s(me, {
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
              const y = {
                id: `carousel-item-${m.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", v + 1, f.items.value.length),
                class: ["v-carousel__controls__item", f.isSelected(m.id) && "v-btn--active"],
                onClick: () => f.select(m.id, !0)
              };
              return n.item ? n.item({
                props: y,
                item: m
              }) : s(be, N(m, y), null);
            })]
          })]), e.progress && s(Ka, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (f.getItemIndex(t.value) + 1) / f.items.value.length * 100
          }, null)]);
        },
        prev: n.prev,
        next: n.next
      });
    }), {};
  }
}), il = B({
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
  ...Ni()
}, "VWindowItem"), sn = O()({
  name: "VWindowItem",
  directives: {
    Touch: Gi
  },
  props: il(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ye(ku), l = xn(e, xu), {
      isBooted: i
    } = yn();
    if (!t || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = G(!1), r = b(() => i.value && (t.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function u() {
      !o.value || !t || (o.value = !1, t.transitionCount.value > 0 && (t.transitionCount.value -= 1, t.transitionCount.value === 0 && (t.transitionHeight.value = void 0)));
    }
    function c() {
      var y;
      o.value || !t || (o.value = !0, t.transitionCount.value === 0 && (t.transitionHeight.value = X((y = t.rootRef.value) == null ? void 0 : y.clientHeight)), t.transitionCount.value += 1);
    }
    function d() {
      u();
    }
    function f(y) {
      o.value && we(() => {
        !r.value || !o.value || !t || (t.transitionHeight.value = X(y.clientHeight));
      });
    }
    const m = b(() => {
      const y = t.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof y != "string" ? t.transition.value : y,
        onBeforeEnter: c,
        onAfterEnter: u,
        onEnterCancelled: d,
        onBeforeLeave: c,
        onAfterLeave: u,
        onLeaveCancelled: d,
        onEnter: f
      } : !1;
    }), {
      hasContent: v
    } = zi(e, l.isSelected);
    return R(() => s(et, {
      transition: m.value,
      disabled: !i.value
    }, {
      default: () => {
        var y;
        return [Be(s("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [v.value && ((y = n.default) == null ? void 0 : y.call(n))]), [[wt, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), Ng = B({
  ...fs(),
  ...il()
}, "VCarouselItem"), zg = O()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: Ng(),
  setup(e, a) {
    let {
      slots: n,
      attrs: t
    } = a;
    R(() => {
      const l = Mt.filterProps(e), i = sn.filterProps(e);
      return s(sn, N({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [s(Mt, N(t, l), n)]
      });
    });
  }
}), Hg = Tt("v-code"), Wg = B({
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
}, "VColorPickerCanvas"), jg = dt({
  name: "VColorPickerCanvas",
  props: Wg(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n
    } = a;
    const t = G(!1), l = j(), i = G(parseFloat(e.width)), o = G(parseFloat(e.height)), r = j({
      x: 0,
      y: 0
    }), u = b({
      get: () => r.value,
      set(g) {
        var p, _;
        if (!l.value) return;
        const {
          x: S,
          y: k
        } = g;
        r.value = g, n("update:color", {
          h: ((p = e.color) == null ? void 0 : p.h) ?? 0,
          s: Oe(S, 0, i.value) / i.value,
          v: 1 - Oe(k, 0, o.value) / o.value,
          a: ((_ = e.color) == null ? void 0 : _.a) ?? 1
        });
      }
    }), c = b(() => {
      const {
        x: g,
        y: S
      } = u.value, k = parseInt(e.dotSize, 10) / 2;
      return {
        width: X(e.dotSize),
        height: X(e.dotSize),
        transform: `translate(${X(g - k)}, ${X(S - k)})`
      };
    }), {
      resizeRef: d
    } = xt((g) => {
      var p;
      if (!((p = d.el) != null && p.offsetParent)) return;
      const {
        width: S,
        height: k
      } = g[0].contentRect;
      i.value = S, o.value = k;
    });
    function f(g, S, k) {
      const {
        left: p,
        top: _,
        width: C,
        height: P
      } = k;
      u.value = {
        x: Oe(g - p, 0, C),
        y: Oe(S - _, 0, P)
      };
    }
    function m(g) {
      g.type === "mousedown" && g.preventDefault(), !e.disabled && (v(g), window.addEventListener("mousemove", v), window.addEventListener("mouseup", y), window.addEventListener("touchmove", v), window.addEventListener("touchend", y));
    }
    function v(g) {
      if (e.disabled || !l.value) return;
      t.value = !0;
      const S = rd(g);
      f(S.clientX, S.clientY, l.value.getBoundingClientRect());
    }
    function y() {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", y), window.removeEventListener("touchmove", v), window.removeEventListener("touchend", y);
    }
    function h() {
      var _;
      if (!l.value) return;
      const g = l.value, S = g.getContext("2d");
      if (!S) return;
      const k = S.createLinearGradient(0, 0, g.width, 0);
      k.addColorStop(0, "hsla(0, 0%, 100%, 1)"), k.addColorStop(1, `hsla(${((_ = e.color) == null ? void 0 : _.h) ?? 0}, 100%, 50%, 1)`), S.fillStyle = k, S.fillRect(0, 0, g.width, g.height);
      const p = S.createLinearGradient(0, 0, 0, g.height);
      p.addColorStop(0, "hsla(0, 0%, 0%, 0)"), p.addColorStop(1, "hsla(0, 0%, 0%, 1)"), S.fillStyle = p, S.fillRect(0, 0, g.width, g.height);
    }
    return q(() => {
      var g;
      return (g = e.color) == null ? void 0 : g.h;
    }, h, {
      immediate: !0
    }), q(() => [i.value, o.value], (g, S) => {
      h(), r.value = {
        x: u.value.x * g[0] / S[0],
        y: u.value.y * g[1] / S[1]
      };
    }, {
      flush: "post"
    }), q(() => e.color, () => {
      if (t.value) {
        t.value = !1;
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
    }), at(() => h()), R(() => s("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: m,
      onTouchstartPassive: m
    }, [s("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && s("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function Yg(e, a) {
  if (a) {
    const {
      a: n,
      ...t
    } = e;
    return t;
  }
  return e;
}
function Gg(e, a) {
  if (a == null || typeof a == "string") {
    const n = Hr(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof a == "object") {
    let n;
    return Qt(a, ["r", "g", "b"]) ? n = Dt(e) : Qt(a, ["h", "s", "l"]) ? n = $r(e) : Qt(a, ["h", "s", "v"]) && (n = e), Yg(n, !Qt(a, ["a"]) && e.a === 1);
  }
  return e;
}
const An = {
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
    getColor: (e, a) => ({
      ...e,
      r: Number(a)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, a) => ({
      ...e,
      g: Number(a)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, a) => ({
      ...e,
      b: Number(a)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a
      } = e;
      return a != null ? Math.round(a * 100) / 100 : 1;
    },
    getColor: (e, a) => ({
      ...e,
      a: Number(a)
    })
  }],
  to: Dt,
  from: Ha
};
var hr;
const Ug = {
  ...Kl,
  inputs: (hr = Kl.inputs) == null ? void 0 : hr.slice(0, 3)
}, Xl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, a) => ({
      ...e,
      h: Number(a)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, a) => ({
      ...e,
      s: Number(a)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, a) => ({
      ...e,
      l: Number(a)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a
      } = e;
      return a != null ? Math.round(a * 100) / 100 : 1;
    },
    getColor: (e, a) => ({
      ...e,
      a: Number(a)
    })
  }],
  to: $r,
  from: ki
}, qg = {
  ...Xl,
  inputs: Xl.inputs.slice(0, 3)
}, wu = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, a) => a
  }],
  to: Hr,
  from: zr
}, Kg = {
  ...wu,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, a) => a
  }]
}, ln = {
  rgb: Ug,
  rgba: Kl,
  hsl: qg,
  hsla: Xl,
  hex: Kg,
  hexa: wu
}, Xg = (e) => {
  let {
    label: a,
    ...n
  } = e;
  return s("div", {
    class: "v-color-picker-edit__input"
  }, [s("input", n, null), s("span", null, [a])]);
}, Zg = B({
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
    validator: (e) => Array.isArray(e) && e.every((a) => Object.keys(ln).includes(a))
  },
  ...ee()
}, "VColorPickerEdit"), Jg = dt({
  name: "VColorPickerEdit",
  props: Zg(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n
    } = a;
    const t = b(() => e.modes.map((i) => ({
      ...ln[i],
      name: i
    }))), l = b(() => {
      var r;
      const i = t.value.find((u) => u.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((u) => {
        let {
          getValue: c,
          getColor: d,
          ...f
        } = u;
        return {
          ...i.inputProps,
          ...f,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (m) => {
            const v = m.target;
            v && n("update:color", i.from(d(o ?? i.to(An), v.value)));
          }
        };
      });
    });
    return R(() => {
      var i;
      return s("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((o) => s(Xg, o, null)), t.value.length > 1 && s(be, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = t.value.findIndex((r) => r.name === e.mode);
          n("update:mode", t.value[(o + 1) % t.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Ui = Symbol.for("vuetify:v-slider");
function Zl(e, a, n) {
  const t = n === "vertical", l = a.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return t ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function Qg(e, a) {
  return "touches" in e && e.touches.length ? e.touches[0][a] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][a] : e[a];
}
const Cu = B({
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
  ...Ae(),
  ...je({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Vu = (e) => {
  const a = b(() => parseFloat(e.min)), n = b(() => parseFloat(e.max)), t = b(() => +e.step > 0 ? parseFloat(e.step) : 0), l = b(() => Math.max(go(t.value), go(a.value)));
  function i(o) {
    if (o = parseFloat(o), t.value <= 0) return o;
    const r = Oe(o, a.value, n.value), u = a.value % t.value, c = Math.round((r - u) / t.value) * t.value + u;
    return parseFloat(Math.min(c, n.value).toFixed(l.value));
  }
  return {
    min: a,
    max: n,
    step: t,
    decimals: l,
    roundValue: i
  };
}, Pu = (e) => {
  let {
    props: a,
    steps: n,
    onSliderStart: t,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: r
  } = We(), u = E(a, "reverse"), c = b(() => a.direction === "vertical"), d = b(() => c.value !== u.value), {
    min: f,
    max: m,
    step: v,
    decimals: y,
    roundValue: h
  } = n, g = b(() => parseInt(a.thumbSize, 10)), S = b(() => parseInt(a.tickSize, 10)), k = b(() => parseInt(a.trackSize, 10)), p = b(() => (m.value - f.value) / v.value), _ = E(a, "disabled"), C = b(() => a.error || a.disabled ? void 0 : a.thumbColor ?? a.color), P = b(() => a.error || a.disabled ? void 0 : a.trackColor ?? a.color), T = b(() => a.error || a.disabled ? void 0 : a.trackFillColor ?? a.color), w = G(!1), x = G(0), A = j(), V = j();
  function I(H) {
    var ce;
    const ne = a.direction === "vertical", ie = ne ? "top" : "left", he = ne ? "height" : "width", Ce = ne ? "clientY" : "clientX", {
      [ie]: K,
      [he]: fe
    } = (ce = A.value) == null ? void 0 : ce.$el.getBoundingClientRect(), Y = Qg(H, Ce);
    let Q = Math.min(Math.max((Y - K - x.value) / fe, 0), 1) || 0;
    return (ne ? d.value : d.value !== r.value) && (Q = 1 - Q), h(f.value + Q * (m.value - f.value));
  }
  const D = (H) => {
    i({
      value: I(H)
    }), w.value = !1, x.value = 0;
  }, $ = (H) => {
    V.value = o(H), V.value && (V.value.focus(), w.value = !0, V.value.contains(H.target) ? x.value = Zl(H, V.value, a.direction) : (x.value = 0, l({
      value: I(H)
    })), t({
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
    H.stopPropagation(), H.preventDefault(), D(H), window.removeEventListener("mousemove", W, z), window.removeEventListener("mouseup", Z);
  }
  function J(H) {
    var ne;
    D(H), window.removeEventListener("touchmove", W, z), (ne = H.target) == null || ne.removeEventListener("touchend", J);
  }
  function L(H) {
    var ne;
    $(H), window.addEventListener("touchmove", W, z), (ne = H.target) == null || ne.addEventListener("touchend", J, {
      passive: !1
    });
  }
  function F(H) {
    H.preventDefault(), $(H), window.addEventListener("mousemove", W, z), window.addEventListener("mouseup", Z, {
      passive: !1
    });
  }
  const M = (H) => {
    const ne = (H - f.value) / (m.value - f.value) * 100;
    return Oe(isNaN(ne) ? 0 : ne, 0, 100);
  }, U = E(a, "showTicks"), oe = b(() => U.value ? a.ticks ? Array.isArray(a.ticks) ? a.ticks.map((H) => ({
    value: H,
    position: M(H),
    label: H.toString()
  })) : Object.keys(a.ticks).map((H) => ({
    value: parseFloat(H),
    position: M(parseFloat(H)),
    label: a.ticks[H]
  })) : p.value !== 1 / 0 ? _t(p.value + 1).map((H) => {
    const ne = f.value + H * v.value;
    return {
      value: ne,
      position: M(ne)
    };
  }) : [] : []), te = b(() => oe.value.some((H) => {
    let {
      label: ne
    } = H;
    return !!ne;
  })), ue = {
    activeThumbRef: V,
    color: E(a, "color"),
    decimals: y,
    disabled: _,
    direction: E(a, "direction"),
    elevation: E(a, "elevation"),
    hasLabels: te,
    isReversed: u,
    indexFromEnd: d,
    min: f,
    max: m,
    mousePressed: w,
    numTicks: p,
    onSliderMousedown: F,
    onSliderTouchstart: L,
    parsedTicks: oe,
    parseMouseMove: I,
    position: M,
    readonly: E(a, "readonly"),
    rounded: E(a, "rounded"),
    roundValue: h,
    showTicks: U,
    startOffset: x,
    step: v,
    thumbSize: g,
    thumbColor: C,
    thumbLabel: E(a, "thumbLabel"),
    ticks: E(a, "ticks"),
    tickSize: S,
    trackColor: P,
    trackContainerRef: A,
    trackFillColor: T,
    trackSize: k,
    vertical: c
  };
  return pe(Ui, ue), ue;
}, eh = B({
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
}, "VSliderThumb"), Jl = O()({
  name: "VSliderThumb",
  directives: {
    Ripple: Ot
  },
  props: eh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n,
      emit: t
    } = a;
    const l = ye(Ui), {
      isRtl: i,
      rtlClasses: o
    } = We();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: u,
      disabled: c,
      thumbSize: d,
      thumbLabel: f,
      direction: m,
      isReversed: v,
      vertical: y,
      readonly: h,
      elevation: g,
      mousePressed: S,
      decimals: k,
      indexFromEnd: p
    } = l, _ = b(() => c.value ? void 0 : g.value), {
      elevationClasses: C
    } = qe(_), {
      textColorClasses: P,
      textColorStyles: T
    } = Xe(r), {
      pageup: w,
      pagedown: x,
      end: A,
      home: V,
      left: I,
      right: D,
      down: $,
      up: z
    } = pl, W = [w, x, A, V, I, D, $, z], Z = b(() => u.value ? [1, 2, 3] : [1, 5, 10]);
    function J(F, M) {
      if (!W.includes(F.key)) return;
      F.preventDefault();
      const U = u.value || 0.1, oe = (e.max - e.min) / U;
      if ([I, D, $, z].includes(F.key)) {
        const ue = (y.value ? [i.value ? I : D, v.value ? $ : z] : p.value !== i.value ? [I, z] : [D, z]).includes(F.key) ? 1 : -1, H = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
        M = M + ue * U * Z.value[H];
      } else if (F.key === V)
        M = e.min;
      else if (F.key === A)
        M = e.max;
      else {
        const te = F.key === x ? 1 : -1;
        M = M - te * U * (oe > 100 ? oe / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, M));
    }
    function L(F) {
      const M = J(F, e.modelValue);
      M != null && t("update:modelValue", M);
    }
    return R(() => {
      const F = X(p.value ? 100 - e.position : e.position, "%");
      return s("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && S.value
        }, e.class, o.value],
        style: [{
          "--v-slider-thumb-position": F,
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
      }, [s("div", {
        class: ["v-slider-thumb__surface", P.value, C.value],
        style: {
          ...T.value
        }
      }, null), Be(s("div", {
        class: ["v-slider-thumb__ripple", P.value],
        style: T.value
      }, null), [[ct("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), s(pi, {
        origin: "bottom center"
      }, {
        default: () => {
          var M;
          return [Be(s("div", {
            class: "v-slider-thumb__label-container"
          }, [s("div", {
            class: ["v-slider-thumb__label"]
          }, [s("div", null, [((M = n["thumb-label"]) == null ? void 0 : M.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(u.value ? k.value : 1)])])]), [[wt, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
}), th = B({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...ee()
}, "VSliderTrack"), _u = O()({
  name: "VSliderTrack",
  props: th(),
  emits: {},
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ye(Ui);
    if (!t) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: r,
      tickSize: u,
      trackColor: c,
      trackFillColor: d,
      trackSize: f,
      vertical: m,
      min: v,
      max: y,
      indexFromEnd: h
    } = t, {
      roundedClasses: g
    } = Ee(o), {
      backgroundColorClasses: S,
      backgroundColorStyles: k
    } = Ve(d), {
      backgroundColorClasses: p,
      backgroundColorStyles: _
    } = Ve(c), C = b(() => `inset-${m.value ? "block" : "inline"}-${h.value ? "end" : "start"}`), P = b(() => m.value ? "height" : "width"), T = b(() => ({
      [C.value]: "0%",
      [P.value]: "100%"
    })), w = b(() => e.stop - e.start), x = b(() => ({
      [C.value]: X(e.start, "%"),
      [P.value]: X(w.value, "%")
    })), A = b(() => r.value ? (m.value ? i.value.slice().reverse() : i.value).map((I, D) => {
      var z;
      const $ = I.value !== v.value && I.value !== y.value ? X(I.position, "%") : void 0;
      return s("div", {
        key: I.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": I.position >= e.start && I.position <= e.stop,
          "v-slider-track__tick--first": I.value === v.value,
          "v-slider-track__tick--last": I.value === y.value
        }],
        style: {
          [C.value]: $
        }
      }, [(I.label || n["tick-label"]) && s("div", {
        class: "v-slider-track__tick-label"
      }, [((z = n["tick-label"]) == null ? void 0 : z.call(n, {
        tick: I,
        index: D
      })) ?? I.label])]);
    }) : []);
    return R(() => s("div", {
      class: ["v-slider-track", g.value, e.class],
      style: [{
        "--v-slider-track-size": X(f.value),
        "--v-slider-tick-size": X(u.value)
      }, e.style]
    }, [s("div", {
      class: ["v-slider-track__background", p.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...T.value,
        ..._.value
      }
    }, null), s("div", {
      class: ["v-slider-track__fill", S.value],
      style: {
        ...x.value,
        ...k.value
      }
    }, null), r.value && s("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [A.value])])), {};
  }
}), nh = B({
  ...da(),
  ...Cu(),
  ...Nt(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Ql = O()({
  name: "VSlider",
  props: nh(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, a) {
    let {
      slots: n,
      emit: t
    } = a;
    const l = j(), {
      rtlClasses: i
    } = We(), o = Vu(e), r = ae(e, "modelValue", void 0, (P) => o.roundValue(P ?? o.min.value)), {
      min: u,
      max: c,
      mousePressed: d,
      roundValue: f,
      onSliderMousedown: m,
      onSliderTouchstart: v,
      trackContainerRef: y,
      position: h,
      hasLabels: g,
      readonly: S
    } = Pu({
      props: e,
      steps: o,
      onSliderStart: () => {
        t("start", r.value);
      },
      onSliderEnd: (P) => {
        let {
          value: T
        } = P;
        const w = f(T);
        r.value = w, t("end", w);
      },
      onSliderMove: (P) => {
        let {
          value: T
        } = P;
        return r.value = f(T);
      },
      getActiveThumb: () => {
        var P;
        return (P = l.value) == null ? void 0 : P.$el;
      }
    }), {
      isFocused: k,
      focus: p,
      blur: _
    } = Rt(e), C = b(() => h(r.value));
    return R(() => {
      const P = Ze.filterProps(e), T = !!(e.label || n.label || n.prepend);
      return s(Ze, N({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || g.value,
          "v-slider--focused": k.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, P, {
        focused: k.value
      }), {
        ...n,
        prepend: T ? (w) => {
          var x, A;
          return s(le, null, [((x = n.label) == null ? void 0 : x.call(n, w)) ?? (e.label ? s(Nn, {
            id: w.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (A = n.prepend) == null ? void 0 : A.call(n, w)]);
        } : void 0,
        default: (w) => {
          let {
            id: x,
            messagesId: A
          } = w;
          return s("div", {
            class: "v-slider__container",
            onMousedown: S.value ? void 0 : m,
            onTouchstartPassive: S.value ? void 0 : v
          }, [s("input", {
            id: x.value,
            name: e.name || x.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), s(_u, {
            ref: y,
            start: 0,
            stop: C.value
          }, {
            "tick-label": n["tick-label"]
          }), s(Jl, {
            ref: l,
            "aria-describedby": A.value,
            focused: k.value,
            min: u.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (V) => r.value = V,
            position: C.value,
            elevation: e.elevation,
            onFocus: p,
            onBlur: _,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), ah = B({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...ee()
}, "VColorPickerPreview"), lh = dt({
  name: "VColorPickerPreview",
  props: ah(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n
    } = a;
    const t = new AbortController();
    jc(() => t.abort());
    async function l() {
      if (!vo) return;
      const i = new window.EyeDropper();
      try {
        const o = await i.open({
          signal: t.signal
        }), r = zr(o.sRGBHex);
        n("update:color", {
          ...e.color ?? An,
          ...r
        });
      } catch {
      }
    }
    return R(() => {
      var i, o;
      return s("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [vo && s("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [s(be, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), s("div", {
        class: "v-color-picker-preview__dot"
      }, [s("div", {
        style: {
          background: Or(e.color ?? An)
        }
      }, null)]), s("div", {
        class: "v-color-picker-preview__sliders"
      }, [s(Ql, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? An,
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
      }, null), !e.hideAlpha && s(Ql, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? An,
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
}), ih = {
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
}, oh = {
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
}, rh = {
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
}, sh = {
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
}, uh = {
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
}, ch = {
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
}, dh = {
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
}, vh = {
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
}, fh = {
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
}, mh = {
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
}, gh = {
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
}, hh = {
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
}, yh = {
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
}, bh = {
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
}, Sh = {
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
}, kh = {
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
}, xh = {
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
}, wh = {
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
}, Ch = {
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
}, Vh = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Ph = {
  red: ih,
  pink: oh,
  purple: rh,
  deepPurple: sh,
  indigo: uh,
  blue: ch,
  lightBlue: dh,
  cyan: vh,
  teal: fh,
  green: mh,
  lightGreen: gh,
  lime: hh,
  yellow: yh,
  amber: bh,
  orange: Sh,
  deepOrange: kh,
  brown: xh,
  blueGrey: wh,
  grey: Ch,
  shades: Vh
}, _h = B({
  swatches: {
    type: Array,
    default: () => Ih(Ph)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...ee()
}, "VColorPickerSwatches");
function Ih(e) {
  return Object.keys(e).map((a) => {
    const n = e[a];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const ph = dt({
  name: "VColorPickerSwatches",
  props: _h(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n
    } = a;
    return R(() => s("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: X(e.maxHeight)
      }, e.style]
    }, [s("div", null, [e.swatches.map((t) => s("div", {
      class: "v-color-picker-swatches__swatch"
    }, [t.map((l) => {
      const i = gt(l), o = Ha(i), r = Lr(i);
      return s("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && n("update:color", o)
      }, [s("div", {
        style: {
          background: r
        }
      }, [e.color && pt(e.color, o) ? s(Se, {
        size: "x-small",
        icon: "$success",
        color: Dd(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), ol = B({
  color: String,
  ...st(),
  ...ee(),
  ...Ne(),
  ...je(),
  ...Lt(),
  ...On(),
  ...Ae(),
  ...ve(),
  ...ge()
}, "VSheet"), un = O()({
  name: "VSheet",
  props: ol(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(E(e, "color")), {
      borderClasses: o
    } = ft(e), {
      dimensionStyles: r
    } = ze(e), {
      elevationClasses: u
    } = qe(e), {
      locationStyles: c
    } = wn(e), {
      positionClasses: d
    } = Rn(e), {
      roundedClasses: f
    } = Ee(e);
    return R(() => s(e.tag, {
      class: ["v-sheet", t.value, l.value, o.value, u.value, d.value, f.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, n)), {};
  }
}), Ah = B({
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
    validator: (e) => Array.isArray(e) && e.every((a) => Object.keys(ln).includes(a))
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
}, "VColorPicker"), Th = dt({
  name: "VColorPicker",
  props: Ah(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const a = ae(e, "mode"), n = j(null), t = ae(e, "modelValue", void 0, (u) => {
      if (u == null || u === "") return null;
      let c;
      try {
        c = Ha(gt(u));
      } catch (d) {
        return kt(d), null;
      }
      return c;
    }, (u) => u ? Gg(u, e.modelValue) : null), l = b(() => t.value ? {
      ...t.value,
      h: n.value ?? t.value.h
    } : null), {
      rtlClasses: i
    } = We();
    let o = !0;
    q(t, (u) => {
      if (!o) {
        o = !0;
        return;
      }
      u && (n.value = u.h);
    }, {
      immediate: !0
    });
    const r = (u) => {
      o = !1, n.value = u.h, t.value = u;
    };
    return at(() => {
      e.modes.includes(a.value) || (a.value = e.modes[0]);
    }), De({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), R(() => {
      const u = un.filterProps(e);
      return s(un, N({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Or({
            ...l.value ?? An,
            a: 1
          })
        }, e.style]
      }, u, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && s(jg, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && s("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && s(lh, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !a.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && s(Jg, {
          key: "edit",
          modes: e.modes,
          mode: a.value,
          "onUpdate:mode": (c) => a.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && s(ph, {
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
function Bh(e, a, n) {
  if (a == null) return e;
  if (Array.isArray(a)) throw new Error("Multiple matches is not implemented");
  return typeof a == "number" && ~a ? s(le, null, [s("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, a)]), s("span", {
    class: "v-combobox__mask"
  }, [e.substr(a, n)]), s("span", {
    class: "v-combobox__unmask"
  }, [e.substr(a + n)])]) : e;
}
const Dh = B({
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
  ...ji({
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
}, "VCombobox"), Mh = O()({
  name: "VCombobox",
  props: Dh(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, a) {
    var fe;
    let {
      emit: n,
      slots: t
    } = a;
    const {
      t: l
    } = $e(), i = j(), o = G(!1), r = G(!0), u = G(!1), c = j(), d = j(), f = ae(e, "menu"), m = b({
      get: () => f.value,
      set: (Y) => {
        var Q;
        f.value && !Y && ((Q = c.value) != null && Q.ΨopenChildren.size) || (f.value = Y);
      }
    }), v = G(-1);
    let y = !1;
    const h = b(() => {
      var Y;
      return (Y = i.value) == null ? void 0 : Y.color;
    }), g = b(() => m.value ? e.closeText : e.openText), {
      items: S,
      transformIn: k,
      transformOut: p
    } = Li(e), {
      textColorClasses: _,
      textColorStyles: C
    } = Xe(h), P = ae(e, "modelValue", [], (Y) => k(Te(Y)), (Y) => {
      const Q = p(Y);
      return e.multiple ? Q : Q[0] ?? null;
    }), T = Qa(), w = b(() => !!(e.chips || t.chip)), x = b(() => w.value || !!t.selection), A = G(!e.multiple && !x.value ? ((fe = P.value[0]) == null ? void 0 : fe.title) ?? "" : ""), V = b({
      get: () => A.value,
      set: (Y) => {
        var Q;
        if (A.value = Y ?? "", !e.multiple && !x.value && (P.value = [Ht(e, Y)]), Y && e.multiple && ((Q = e.delimiters) != null && Q.length)) {
          const ce = Y.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          ce.length > 1 && (ce.forEach((se) => {
            se = se.trim(), se && ie(Ht(e, se));
          }), A.value = "");
        }
        Y || (v.value = -1), r.value = !Y;
      }
    }), I = b(() => typeof e.counterValue == "function" ? e.counterValue(P.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? P.value.length : V.value.length);
    q(A, (Y) => {
      y ? we(() => y = !1) : o.value && !m.value && (m.value = !0), n("update:search", Y);
    }), q(P, (Y) => {
      var Q;
      !e.multiple && !x.value && (A.value = ((Q = Y[0]) == null ? void 0 : Q.title) ?? "");
    });
    const {
      filteredItems: D,
      getMatches: $
    } = ha(e, S, () => r.value ? "" : V.value), z = b(() => e.hideSelected ? D.value.filter((Y) => !P.value.some((Q) => Q.value === Y.value)) : D.value), W = b(() => P.value.map((Y) => Y.value)), Z = b(() => {
      var Q;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && V.value === ((Q = z.value[0]) == null ? void 0 : Q.title)) && z.value.length > 0 && !r.value && !u.value;
    }), J = b(() => e.hideNoData && !z.value.length || e.readonly || (T == null ? void 0 : T.isReadonly.value)), L = j(), F = Wi(L, i);
    function M(Y) {
      y = !0, e.openOnClear && (m.value = !0);
    }
    function U() {
      J.value || (m.value = !0);
    }
    function oe(Y) {
      J.value || (o.value && (Y.preventDefault(), Y.stopPropagation()), m.value = !m.value);
    }
    function te(Y) {
      var Q;
      Ta(Y) && ((Q = i.value) == null || Q.focus());
    }
    function ue(Y) {
      var se;
      if (ad(Y) || e.readonly || T != null && T.isReadonly.value) return;
      const Q = i.value.selectionStart, ce = P.value.length;
      if ((v.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(Y.key)) && Y.preventDefault(), ["Enter", "ArrowDown"].includes(Y.key) && (m.value = !0), ["Escape"].includes(Y.key) && (m.value = !1), ["Enter", "Escape", "Tab"].includes(Y.key) && (Z.value && ["Enter", "Tab"].includes(Y.key) && !P.value.some((de) => {
        let {
          value: Pe
        } = de;
        return Pe === z.value[0].value;
      }) && ie(D.value[0]), r.value = !0), Y.key === "ArrowDown" && Z.value && ((se = L.value) == null || se.focus("next")), Y.key === "Enter" && V.value && (ie(Ht(e, V.value)), x.value && (A.value = "")), ["Backspace", "Delete"].includes(Y.key)) {
        if (!e.multiple && x.value && P.value.length > 0 && !V.value) return ie(P.value[0], !1);
        if (~v.value) {
          const de = v.value;
          ie(P.value[v.value], !1), v.value = de >= ce - 1 ? ce - 2 : de;
        } else Y.key === "Backspace" && !V.value && (v.value = ce - 1);
      }
      if (e.multiple) {
        if (Y.key === "ArrowLeft") {
          if (v.value < 0 && Q > 0) return;
          const de = v.value > -1 ? v.value - 1 : ce - 1;
          P.value[de] ? v.value = de : (v.value = -1, i.value.setSelectionRange(V.value.length, V.value.length));
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
          const ce = P.value.findIndex((de) => e.valueComparator(de.value, Y.value)), se = Q ?? !~ce;
          if (~ce) {
            const de = se ? [...P.value, Y] : [...P.value];
            de.splice(ce, 1), P.value = de;
          } else se && (P.value = [...P.value, Y]);
          e.clearOnSelect && (V.value = "");
        } else {
          const ce = Q !== !1;
          P.value = ce ? [Y] : [], A.value = ce && !x.value ? Y.title : "", we(() => {
            m.value = !1, r.value = !0;
          });
        }
    }
    function he(Y) {
      o.value = !0, setTimeout(() => {
        u.value = !0;
      });
    }
    function Ce(Y) {
      u.value = !1;
    }
    function K(Y) {
      (Y == null || Y === "" && !e.multiple && !x.value) && (P.value = []);
    }
    return q(o, (Y, Q) => {
      if (!(Y || Y === Q) && (v.value = -1, m.value = !1, V.value)) {
        if (e.multiple) {
          ie(Ht(e, V.value));
          return;
        }
        if (!x.value) return;
        P.value.some((ce) => {
          let {
            title: se
          } = ce;
          return se === V.value;
        }) ? A.value = "" : ie(Ht(e, V.value));
      }
    }), q(m, () => {
      if (!e.hideSelected && m.value && P.value.length) {
        const Y = z.value.findIndex((Q) => P.value.some((ce) => e.valueComparator(ce.value, Q.value)));
        xe && window.requestAnimationFrame(() => {
          var Q;
          Y >= 0 && ((Q = d.value) == null || Q.scrollToIndex(Y));
        });
      }
    }), q(() => e.items, (Y, Q) => {
      m.value || o.value && !Q.length && Y.length && (m.value = !0);
    }), R(() => {
      const Y = !!(!e.hideNoData || z.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), Q = P.value.length > 0, ce = $t.filterProps(e);
      return s($t, N({
        ref: i
      }, ce, {
        modelValue: V.value,
        "onUpdate:modelValue": [(se) => V.value = se, K],
        focused: o.value,
        "onUpdate:focused": (se) => o.value = se,
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
        "onClick:clear": M,
        "onMousedown:control": U,
        onKeydown: ue
      }), {
        ...t,
        default: () => s(le, null, [s(Fn, N({
          ref: c,
          modelValue: m.value,
          "onUpdate:modelValue": (se) => m.value = se,
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
          default: () => [Y && s(el, N({
            ref: L,
            selected: W.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (se) => se.preventDefault(),
            onKeydown: te,
            onFocusin: he,
            onFocusout: Ce,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, F, e.listProps), {
            default: () => {
              var se, de, Pe;
              return [(se = t["prepend-item"]) == null ? void 0 : se.call(t), !z.value.length && !e.hideNoData && (((de = t["no-data"]) == null ? void 0 : de.call(t)) ?? s(Ft, {
                title: l(e.noDataText)
              }, null)), s(al, {
                ref: d,
                renderless: !0,
                items: z.value
              }, {
                default: (it) => {
                  var Xt;
                  let {
                    item: _e,
                    index: Vt,
                    itemRef: Je
                  } = it;
                  const Kt = N(_e.props, {
                    ref: Je,
                    key: Vt,
                    active: Z.value && Vt === 0 ? !0 : void 0,
                    onClick: () => ie(_e, null)
                  });
                  return ((Xt = t.item) == null ? void 0 : Xt.call(t, {
                    item: _e,
                    index: Vt,
                    props: Kt
                  })) ?? s(Ft, N(Kt, {
                    role: "option"
                  }), {
                    prepend: (ya) => {
                      let {
                        isSelected: ba
                      } = ya;
                      return s(le, null, [e.multiple && !e.hideSelected ? s(Et, {
                        key: _e.value,
                        modelValue: ba,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, _e.props.prependAvatar && s(ht, {
                        image: _e.props.prependAvatar
                      }, null), _e.props.prependIcon && s(Se, {
                        icon: _e.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var ya, ba;
                      return r.value ? _e.title : Bh(_e.title, (ya = $(_e)) == null ? void 0 : ya.title, ((ba = V.value) == null ? void 0 : ba.length) ?? 0);
                    }
                  });
                }
              }), (Pe = t["append-item"]) == null ? void 0 : Pe.call(t)];
            }
          })]
        }), P.value.map((se, de) => {
          function Pe(Je) {
            Je.stopPropagation(), Je.preventDefault(), ie(se, !1);
          }
          const it = {
            "onClick:close": Pe,
            onKeydown(Je) {
              Je.key !== "Enter" && Je.key !== " " || (Je.preventDefault(), Je.stopPropagation(), Pe(Je));
            },
            onMousedown(Je) {
              Je.preventDefault(), Je.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, _e = w.value ? !!t.chip : !!t.selection, Vt = _e ? za(w.value ? t.chip({
            item: se,
            index: de,
            props: it
          }) : t.selection({
            item: se,
            index: de
          })) : void 0;
          if (!(_e && !Vt))
            return s("div", {
              key: se.value,
              class: ["v-combobox__selection", de === v.value && ["v-combobox__selection--selected", _.value]],
              style: de === v.value ? C.value : {}
            }, [w.value ? t.chip ? s(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: se.title
                }
              }
            }, {
              default: () => [Vt]
            }) : s(zn, N({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: se.title,
              disabled: se.props.disabled
            }, it), null) : Vt ?? s("span", {
              class: "v-combobox__selection-text"
            }, [se.title, e.multiple && de < P.value.length - 1 && s("span", {
              class: "v-combobox__selection-comma"
            }, [Ke(",")])])]);
        })]),
        "append-inner": function() {
          var it;
          for (var se = arguments.length, de = new Array(se), Pe = 0; Pe < se; Pe++)
            de[Pe] = arguments[Pe];
          return s(le, null, [(it = t["append-inner"]) == null ? void 0 : it.call(t, ...de), (!e.hideNoData || e.items.length) && e.menuIcon ? s(Se, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: oe,
            onClick: Tr,
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
      search: V,
      selectionIndex: v,
      filteredItems: D,
      select: ie
    }, i);
  }
}), Eh = B({
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
}, "VConfirmEdit"), Fh = O()({
  name: "VConfirmEdit",
  props: Eh(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const l = ae(e, "modelValue"), i = j();
    Fe(() => {
      i.value = structuredClone(Ie(l.value));
    });
    const {
      t: o
    } = $e(), r = b(() => pt(l.value, i.value));
    function u() {
      l.value = i.value, n("save", i.value);
    }
    function c() {
      i.value = structuredClone(Ie(l.value)), n("cancel");
    }
    let d = !1;
    return R(() => {
      var m;
      const f = s(le, null, [s(be, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: o(e.cancelText)
      }, null), s(be, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: u,
        text: o(e.okText)
      }, null)]);
      return s(le, null, [(m = t.default) == null ? void 0 : m.call(t, {
        model: i,
        save: u,
        cancel: c,
        isPristine: r.value,
        get actions() {
          return d = !0, f;
        }
      }), !d && f]);
    }), {
      save: u,
      cancel: c,
      isPristine: r
    };
  }
}), Iu = B({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), pu = Symbol.for("vuetify:datatable:expanded");
function rl(e) {
  const a = E(e, "expandOnClick"), n = ae(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function t(r, u) {
    const c = new Set(n.value);
    u ? c.add(r.value) : c.delete(r.value), n.value = c;
  }
  function l(r) {
    return n.value.has(r.value);
  }
  function i(r) {
    t(r, !l(r));
  }
  const o = {
    expand: t,
    expanded: n,
    expandOnClick: a,
    isExpanded: l,
    toggleExpand: i
  };
  return pe(pu, o), o;
}
function Au() {
  const e = ye(pu);
  if (!e) throw new Error("foo");
  return e;
}
const qi = B({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), Tu = Symbol.for("vuetify:data-table-group");
function Ki(e) {
  return {
    groupBy: ae(e, "groupBy")
  };
}
function sl(e) {
  const {
    disableSort: a,
    groupBy: n,
    sortBy: t
  } = e, l = j(/* @__PURE__ */ new Set()), i = b(() => n.value.map((d) => ({
    ...d,
    order: d.order ?? !1
  })).concat(a != null && a.value ? [] : t.value));
  function o(d) {
    return l.value.has(d.id);
  }
  function r(d) {
    const f = new Set(l.value);
    o(d) ? f.delete(d.id) : f.add(d.id), l.value = f;
  }
  function u(d) {
    function f(m) {
      const v = [];
      for (const y of m.items)
        "type" in y && y.type === "group" ? v.push(...f(y)) : v.push(y);
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
    groupBy: n,
    extractRows: u,
    isGroupOpen: o
  };
  return pe(Tu, c), c;
}
function Bu() {
  const e = ye(Tu);
  if (!e) throw new Error("Missing group!");
  return e;
}
function $h(e, a) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const t of e) {
    const l = on(t.raw, a);
    n.has(l) || n.set(l, []), n.get(l).push(t);
  }
  return n;
}
function Du(e, a) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!a.length) return [];
  const l = $h(e, a[0]), i = [], o = a.slice(1);
  return l.forEach((r, u) => {
    const c = a[0], d = `${t}_${c}_${u}`;
    i.push({
      depth: n,
      id: d,
      key: c,
      value: u,
      items: o.length ? Du(r, o, n + 1, d) : r,
      type: "group"
    });
  }), i;
}
function Mu(e, a) {
  const n = [];
  for (const t of e)
    "type" in t && t.type === "group" ? (t.value != null && n.push(t), (a.has(t.id) || t.value == null) && n.push(...Mu(t.items, a))) : n.push(t);
  return n;
}
function ul(e, a, n) {
  return {
    flatItems: b(() => {
      if (!a.value.length) return e.value;
      const l = Du(e.value, a.value.map((i) => i.key));
      return Mu(l, n.value);
    })
  };
}
function cl(e) {
  let {
    page: a,
    itemsPerPage: n,
    sortBy: t,
    groupBy: l,
    search: i
  } = e;
  const o = Me("VDataTable"), r = b(() => ({
    page: a.value,
    itemsPerPage: n.value,
    sortBy: t.value,
    groupBy: l.value,
    search: i.value
  }));
  let u = null;
  q(r, () => {
    pt(u, r.value) || (u && u.search !== r.value.search && (a.value = 1), o.emit("update:options", r.value), u = r.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Xi = B({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), Eu = Symbol.for("vuetify:data-table-pagination");
function Zi(e) {
  const a = ae(e, "page", void 0, (t) => +(t ?? 1)), n = ae(e, "itemsPerPage", void 0, (t) => +(t ?? 10));
  return {
    page: a,
    itemsPerPage: n
  };
}
function Ji(e) {
  const {
    page: a,
    itemsPerPage: n,
    itemsLength: t
  } = e, l = b(() => n.value === -1 ? 0 : n.value * (a.value - 1)), i = b(() => n.value === -1 ? t.value : Math.min(t.value, l.value + n.value)), o = b(() => n.value === -1 || t.value === 0 ? 1 : Math.ceil(t.value / n.value));
  Fe(() => {
    a.value > o.value && (a.value = o.value);
  });
  function r(m) {
    n.value = m, a.value = 1;
  }
  function u() {
    a.value = Oe(a.value + 1, 1, o.value);
  }
  function c() {
    a.value = Oe(a.value - 1, 1, o.value);
  }
  function d(m) {
    a.value = Oe(m, 1, o.value);
  }
  const f = {
    page: a,
    itemsPerPage: n,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: t,
    nextPage: u,
    prevPage: c,
    setPage: d,
    setItemsPerPage: r
  };
  return pe(Eu, f), f;
}
function Lh() {
  const e = ye(Eu);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Fu(e) {
  const a = Me("usePaginatedItems"), {
    items: n,
    startIndex: t,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = b(() => i.value <= 0 ? n.value : n.value.slice(t.value, l.value));
  return q(o, (r) => {
    a.emit("update:currentItems", r);
  }), {
    paginatedItems: o
  };
}
const Oh = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var t;
    let {
      items: a,
      value: n
    } = e;
    return new Set(n ? [(t = a[0]) == null ? void 0 : t.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: a
    } = e;
    return a;
  }
}, $u = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: a
    } = e;
    return a;
  },
  select: (e) => {
    let {
      items: a,
      value: n,
      selected: t
    } = e;
    for (const l of a)
      n ? t.add(l.value) : t.delete(l.value);
    return t;
  },
  selectAll: (e) => {
    let {
      value: a,
      currentPage: n,
      selected: t
    } = e;
    return $u.select({
      items: n,
      value: a,
      selected: t
    });
  }
}, Lu = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: a
    } = e;
    return a;
  },
  select: (e) => {
    let {
      items: a,
      value: n,
      selected: t
    } = e;
    for (const l of a)
      n ? t.add(l.value) : t.delete(l.value);
    return t;
  },
  selectAll: (e) => {
    let {
      value: a,
      allItems: n,
      selected: t
    } = e;
    return Lu.select({
      items: n,
      value: a,
      selected: t
    });
  }
}, Ou = B({
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
    default: pt
  }
}, "DataTable-select"), Ru = Symbol.for("vuetify:data-table-selection");
function dl(e, a) {
  let {
    allItems: n,
    currentPage: t
  } = a;
  const l = ae(e, "modelValue", e.modelValue, (S) => new Set(Te(S).map((k) => {
    var p;
    return ((p = n.value.find((_) => e.valueComparator(k, _.value))) == null ? void 0 : p.value) ?? k;
  })), (S) => [...S.values()]), i = b(() => n.value.filter((S) => S.selectable)), o = b(() => t.value.filter((S) => S.selectable)), r = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Oh;
      case "all":
        return Lu;
      case "page":
      default:
        return $u;
    }
  });
  function u(S) {
    return Te(S).every((k) => l.value.has(k.value));
  }
  function c(S) {
    return Te(S).some((k) => l.value.has(k.value));
  }
  function d(S, k) {
    const p = r.value.select({
      items: S,
      value: k,
      selected: new Set(l.value)
    });
    l.value = p;
  }
  function f(S) {
    d([S], !u([S]));
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
  const v = b(() => l.value.size > 0), y = b(() => {
    const S = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!S.length && u(S);
  }), h = b(() => r.value.showSelectAll), g = {
    toggleSelect: f,
    select: d,
    selectAll: m,
    isSelected: u,
    isSomeSelected: c,
    someSelected: v,
    allSelected: y,
    showSelectAll: h
  };
  return pe(Ru, g), g;
}
function vl() {
  const e = ye(Ru);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Nu = B({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), zu = Symbol.for("vuetify:data-table-sort");
function fl(e) {
  const a = ae(e, "sortBy"), n = E(e, "mustSort"), t = E(e, "multiSort");
  return {
    sortBy: a,
    mustSort: n,
    multiSort: t
  };
}
function ml(e) {
  const {
    sortBy: a,
    mustSort: n,
    multiSort: t,
    page: l
  } = e, i = (u) => {
    if (u.key == null) return;
    let c = a.value.map((f) => ({
      ...f
    })) ?? [];
    const d = c.find((f) => f.key === u.key);
    d ? d.order === "desc" ? n.value ? d.order = "asc" : c = c.filter((f) => f.key !== u.key) : d.order = "desc" : t.value ? c = [...c, {
      key: u.key,
      order: "asc"
    }] : c = [{
      key: u.key,
      order: "asc"
    }], a.value = c, l && (l.value = 1);
  };
  function o(u) {
    return !!a.value.find((c) => c.key === u.key);
  }
  const r = {
    sortBy: a,
    toggleSort: i,
    isSorted: o
  };
  return pe(zu, r), r;
}
function Hu() {
  const e = ye(zu);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function Qi(e, a, n, t) {
  const l = $e();
  return {
    sortedItems: b(() => {
      var o, r;
      return n.value.length ? Rh(a.value, n.value, l.current.value, {
        transform: t == null ? void 0 : t.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(o = t == null ? void 0 : t.sortFunctions) == null ? void 0 : o.value
        },
        sortRawFunctions: (r = t == null ? void 0 : t.sortRawFunctions) == null ? void 0 : r.value
      }) : a.value;
    })
  };
}
function Rh(e, a, n, t) {
  const l = new Intl.Collator(n, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, t != null && t.transform ? t.transform(o) : o]).sort((o, r) => {
    var u, c;
    for (let d = 0; d < a.length; d++) {
      let f = !1;
      const m = a[d].key, v = a[d].order ?? "asc";
      if (v === !1) continue;
      let y = on(o[1], m), h = on(r[1], m), g = o[0].raw, S = r[0].raw;
      if (v === "desc" && ([y, h] = [h, y], [g, S] = [S, g]), (u = t == null ? void 0 : t.sortRawFunctions) != null && u[m]) {
        const k = t.sortRawFunctions[m](g, S);
        if (k == null) continue;
        if (f = !0, k) return k;
      }
      if ((c = t == null ? void 0 : t.sortFunctions) != null && c[m]) {
        const k = t.sortFunctions[m](y, h);
        if (k == null) continue;
        if (f = !0, k) return k;
      }
      if (!f) {
        if (y instanceof Date && h instanceof Date)
          return y.getTime() - h.getTime();
        if ([y, h] = [y, h].map((k) => k != null ? k.toString().toLocaleLowerCase() : k), y !== h)
          return ka(y) && ka(h) ? 0 : ka(y) ? -1 : ka(h) ? 1 : !isNaN(y) && !isNaN(h) ? Number(y) - Number(h) : l.compare(y, h);
      }
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const Nh = B({
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
function zh(e, a) {
  const n = e.returnObject ? a : He(a, e.itemValue), t = He(a, e.itemSelectable, !0);
  return {
    type: "item",
    value: n,
    selectable: t,
    raw: a
  };
}
function Hh(e, a) {
  const n = [];
  for (const t of a)
    n.push(zh(e, t));
  return n;
}
function Wh(e) {
  return {
    items: b(() => Hh(e, e.items))
  };
}
const jh = B({
  search: String,
  loading: Boolean,
  ...ee(),
  ...Nh(),
  ...Ou(),
  ...Nu(),
  ...Xi({
    itemsPerPage: 5
  }),
  ...Iu(),
  ...qi(),
  ...ga(),
  ...ve(),
  ...Ct({
    transition: {
      component: Zn,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), Yh = O()({
  name: "VDataIterator",
  props: jh(),
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
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "groupBy"), l = E(e, "search"), {
      items: i
    } = Wh(e), {
      filteredItems: o
    } = ha(e, i, l, {
      transform: (M) => M.raw
    }), {
      sortBy: r,
      multiSort: u,
      mustSort: c
    } = fl(e), {
      page: d,
      itemsPerPage: f
    } = Zi(e), {
      toggleSort: m
    } = ml({
      sortBy: r,
      multiSort: u,
      mustSort: c,
      page: d
    }), {
      sortByWithGroups: v,
      opened: y,
      extractRows: h,
      isGroupOpen: g,
      toggleGroup: S
    } = sl({
      groupBy: t,
      sortBy: r
    }), {
      sortedItems: k
    } = Qi(e, o, v, {
      transform: (M) => M.raw
    }), {
      flatItems: p
    } = ul(k, t, y), _ = b(() => p.value.length), {
      startIndex: C,
      stopIndex: P,
      pageCount: T,
      prevPage: w,
      nextPage: x,
      setItemsPerPage: A,
      setPage: V
    } = Ji({
      page: d,
      itemsPerPage: f,
      itemsLength: _
    }), {
      paginatedItems: I
    } = Fu({
      items: p,
      startIndex: C,
      stopIndex: P,
      itemsPerPage: f
    }), D = b(() => h(I.value)), {
      isSelected: $,
      select: z,
      selectAll: W,
      toggleSelect: Z
    } = dl(e, {
      allItems: i,
      currentPage: D
    }), {
      isExpanded: J,
      toggleExpand: L
    } = rl(e);
    cl({
      page: d,
      itemsPerPage: f,
      sortBy: r,
      groupBy: t,
      search: l
    });
    const F = b(() => ({
      page: d.value,
      itemsPerPage: f.value,
      sortBy: r.value,
      pageCount: T.value,
      toggleSort: m,
      prevPage: w,
      nextPage: x,
      setPage: V,
      setItemsPerPage: A,
      isSelected: $,
      select: z,
      selectAll: W,
      toggleSelect: Z,
      isExpanded: J,
      toggleExpand: L,
      isGroupOpen: g,
      toggleGroup: S,
      items: D.value,
      groupedItems: I.value
    }));
    return R(() => s(e.tag, {
      class: ["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class],
      style: e.style
    }, {
      default: () => {
        var M, U;
        return [(M = n.header) == null ? void 0 : M.call(n, F.value), s(et, {
          transition: e.transition
        }, {
          default: () => {
            var oe, te;
            return [e.loading ? s(sa, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (ue) => {
                var H;
                return (H = n.loader) == null ? void 0 : H.call(n, ue);
              }
            }) : s("div", {
              key: "items"
            }, [I.value.length ? (te = n.default) == null ? void 0 : te.call(n, F.value) : (oe = n["no-data"]) == null ? void 0 : oe.call(n)])];
          }
        }), (U = n.footer) == null ? void 0 : U.call(n, F.value)];
      }
    })), {};
  }
});
function Gh() {
  const e = j([]);
  Yc(() => e.value = []);
  function a(n, t) {
    e.value[t] = n;
  }
  return {
    refs: e,
    updateRef: a
  };
}
const Uh = B({
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
  ...st(),
  ...ee(),
  ...Ye(),
  ...je(),
  ...Ae(),
  ...Bt(),
  ...ve({
    tag: "nav"
  }),
  ...ge(),
  ...bt({
    variant: "text"
  })
}, "VPagination"), ei = O()({
  name: "VPagination",
  props: Uh(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, a) {
    let {
      slots: n,
      emit: t
    } = a;
    const l = ae(e, "modelValue"), {
      t: i,
      n: o
    } = $e(), {
      isRtl: r
    } = We(), {
      themeClasses: u
    } = ke(e), {
      width: c
    } = yt(), d = G(-1);
    De(void 0, {
      scoped: !0
    });
    const {
      resizeRef: f
    } = xt((w) => {
      if (!w.length) return;
      const {
        target: x,
        contentRect: A
      } = w[0], V = x.querySelector(".v-pagination__list > *");
      if (!V) return;
      const I = A.width, D = V.offsetWidth + parseFloat(getComputedStyle(V).marginRight) * 2;
      d.value = h(I, D);
    }), m = b(() => parseInt(e.length, 10)), v = b(() => parseInt(e.start, 10)), y = b(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : h(c.value, 58));
    function h(w, x) {
      const A = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((w - x * A) / x).toFixed(2)
      ));
    }
    const g = b(() => {
      if (m.value <= 0 || isNaN(m.value) || m.value > Number.MAX_SAFE_INTEGER) return [];
      if (y.value <= 0) return [];
      if (y.value === 1) return [l.value];
      if (m.value <= y.value)
        return _t(m.value, v.value);
      const w = y.value % 2 === 0, x = w ? y.value / 2 : Math.floor(y.value / 2), A = w ? x : x + 1, V = m.value - x;
      if (A - l.value >= 0)
        return [..._t(Math.max(1, y.value - 1), v.value), e.ellipsis, m.value];
      if (l.value - V >= (w ? 1 : 0)) {
        const I = y.value - 1, D = m.value - I + v.value;
        return [v.value, e.ellipsis, ..._t(I, D)];
      } else {
        const I = Math.max(1, y.value - 3), D = I === 1 ? l.value : l.value - Math.ceil(I / 2) + v.value;
        return [v.value, e.ellipsis, ..._t(I, D), e.ellipsis, m.value];
      }
    });
    function S(w, x, A) {
      w.preventDefault(), l.value = x, A && t(A, x);
    }
    const {
      refs: k,
      updateRef: p
    } = Gh();
    De({
      VPaginationBtn: {
        color: E(e, "color"),
        border: E(e, "border"),
        density: E(e, "density"),
        size: E(e, "size"),
        variant: E(e, "variant"),
        rounded: E(e, "rounded"),
        elevation: E(e, "elevation")
      }
    });
    const _ = b(() => g.value.map((w, x) => {
      const A = (V) => p(V, x);
      if (typeof w == "string")
        return {
          isActive: !1,
          key: `ellipsis-${x}`,
          page: w,
          props: {
            ref: A,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const V = w === l.value;
        return {
          isActive: V,
          key: w,
          page: o(w),
          props: {
            ref: A,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: V ? e.activeColor : e.color,
            "aria-current": V,
            "aria-label": i(V ? e.currentPageAriaLabel : e.pageAriaLabel, w),
            onClick: (I) => S(I, w)
          }
        };
      }
    })), C = b(() => {
      const w = !!e.disabled || l.value <= v.value, x = !!e.disabled || l.value >= v.value + m.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (A) => S(A, v.value, "first"),
          disabled: w,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": w
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (A) => S(A, l.value - 1, "prev"),
          disabled: w,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": w
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (A) => S(A, l.value + 1, "next"),
          disabled: x,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": x
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (A) => S(A, v.value + m.value - 1, "last"),
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
    function T(w) {
      w.key === pl.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1, we(P)) : w.key === pl.right && !e.disabled && l.value < v.value + m.value - 1 && (l.value = l.value + 1, we(P));
    }
    return R(() => s(e.tag, {
      ref: f,
      class: ["v-pagination", u.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: T,
      "data-test": "v-pagination-root"
    }, {
      default: () => [s("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && s("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [n.first ? n.first(C.value.first) : s(be, N({
        _as: "VPaginationBtn"
      }, C.value.first), null)]), s("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [n.prev ? n.prev(C.value.prev) : s(be, N({
        _as: "VPaginationBtn"
      }, C.value.prev), null)]), _.value.map((w, x) => s("li", {
        key: w.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": w.isActive
        }],
        "data-test": "v-pagination-item"
      }, [n.item ? n.item(w) : s(be, N({
        _as: "VPaginationBtn"
      }, w.props), {
        default: () => [w.page]
      })])), s("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [n.next ? n.next(C.value.next) : s(be, N({
        _as: "VPaginationBtn"
      }, C.value.next), null)]), e.showFirstLastPage && s("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [n.last ? n.last(C.value.last) : s(be, N({
        _as: "VPaginationBtn"
      }, C.value.last), null)])])]
    })), {};
  }
}), eo = B({
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
  props: eo(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      t
    } = $e(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: u,
      itemsPerPage: c,
      setItemsPerPage: d
    } = Lh(), f = b(() => e.itemsPerPageOptions.map((m) => typeof m == "number" ? {
      value: m,
      title: m === -1 ? t("$vuetify.dataFooter.itemsPerPageAll") : String(m)
    } : {
      ...m,
      title: isNaN(Number(m.title)) ? t(m.title) : m.title
    }));
    return R(() => {
      var v;
      const m = ei.filterProps(e);
      return s("div", {
        class: "v-data-table-footer"
      }, [(v = n.prepend) == null ? void 0 : v.call(n), s("div", {
        class: "v-data-table-footer__items-per-page"
      }, [s("span", null, [t(e.itemsPerPageText)]), s(Yi, {
        items: f.value,
        modelValue: c.value,
        "onUpdate:modelValue": (y) => d(Number(y)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), s("div", {
        class: "v-data-table-footer__info"
      }, [s("div", null, [t(e.pageText, u.value ? o.value + 1 : 0, r.value, u.value)])]), s("div", {
        class: "v-data-table-footer__pagination"
      }, [s(ei, N({
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
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
}), La = Ld({
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
}, (e, a) => {
  let {
    slots: n
  } = a;
  const t = e.tag ?? "td";
  return s(t, {
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
      return [(l = n.default) == null ? void 0 : l.call(n)];
    }
  });
}), qh = B({
  headers: Array
}, "DataTable-header"), Wu = Symbol.for("vuetify:data-table-headers"), ju = {
  title: "",
  sortable: !1
}, Kh = {
  ...ju,
  width: 48
};
function Xh() {
  const a = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({
    element: n,
    priority: 0
  }));
  return {
    enqueue: (n, t) => {
      let l = !1;
      for (let i = 0; i < a.length; i++)
        if (a[i].priority > t) {
          a.splice(i, 0, {
            element: n,
            priority: t
          }), l = !0;
          break;
        }
      l || a.push({
        element: n,
        priority: t
      });
    },
    size: () => a.length,
    count: () => {
      let n = 0;
      if (!a.length) return 0;
      const t = Math.floor(a[0].priority);
      for (let l = 0; l < a.length; l++)
        Math.floor(a[l].priority) === t && (n += 1);
      return n;
    },
    dequeue: () => a.shift()
  };
}
function ti(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    a.push(e);
  else
    for (const n of e.children)
      ti(n, a);
  return a;
}
function Yu(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e)
    n.key && a.add(n.key), n.children && Yu(n.children, a);
  return a;
}
function Zh(e) {
  if (e.key) {
    if (e.key === "data-table-group") return ju;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Kh;
  }
}
function to(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(a, ...e.children.map((n) => to(n, a + 1))) : a;
}
function Jh(e) {
  let a = !1;
  function n(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (i)
      if (o && (i.fixed = !0), i.fixed)
        if (i.children)
          for (let r = i.children.length - 1; r >= 0; r--)
            n(i.children[r], !0);
        else
          a ? isNaN(+i.width) && Ba(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.lastFixed = !0, a = !0;
      else if (i.children)
        for (let r = i.children.length - 1; r >= 0; r--)
          n(i.children[r]);
      else
        a = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    n(e[i]);
  function t(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!i) return o;
    if (i.children) {
      i.fixedOffset = o;
      for (const r of i.children)
        o = t(r, o);
    } else i.fixed && (i.fixedOffset = o, o += parseFloat(i.width || "0") || 0);
    return o;
  }
  let l = 0;
  for (const i of e)
    l = t(i, l);
}
function Qh(e, a) {
  const n = [];
  let t = 0;
  const l = Xh(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let u = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: d
      } = l.dequeue(), f = a - t - to(c);
      if (r.push({
        ...c,
        rowspan: f ?? 1,
        colspan: c.children ? ti(c).length : 1
      }), c.children)
        for (const m of c.children) {
          const v = d % 1 + u / Math.pow(10, t + 2);
          l.enqueue(m, t + f + v);
        }
      u += 1, o -= 1;
    }
    t += 1, n.push(r);
  }
  return {
    columns: e.map((o) => ti(o)).flat(),
    headers: n
  };
}
function Gu(e) {
  const a = [];
  for (const n of e) {
    const t = {
      ...Zh(n),
      ...n
    }, l = t.key ?? (typeof t.value == "string" ? t.value : null), i = t.value ?? l ?? null, o = {
      ...t,
      key: l,
      value: i,
      sortable: t.sortable ?? (t.key != null || !!t.sort),
      children: t.children ? Gu(t.children) : void 0
    };
    a.push(o);
  }
  return a;
}
function no(e, a) {
  const n = j([]), t = j([]), l = j({}), i = j({}), o = j({});
  Fe(() => {
    var h, g, S;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((k) => ({
      key: k,
      title: $n(k)
    }))).slice(), d = Yu(c);
    (h = a == null ? void 0 : a.groupBy) != null && h.value.length && !d.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (g = a == null ? void 0 : a.showSelect) != null && g.value && !d.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (S = a == null ? void 0 : a.showExpand) != null && S.value && !d.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const f = Gu(c);
    Jh(f);
    const m = Math.max(...f.map((k) => to(k))) + 1, v = Qh(f, m);
    n.value = v.headers, t.value = v.columns;
    const y = v.headers.flat(1);
    for (const k of y)
      k.key && (k.sortable && (k.sort && (l.value[k.key] = k.sort), k.sortRaw && (i.value[k.key] = k.sortRaw)), k.filter && (o.value[k.key] = k.filter));
  });
  const r = {
    headers: n,
    columns: t,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return pe(Wu, r), r;
}
function gl() {
  const e = ye(Wu);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Uu = B({
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
  props: Uu(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      t
    } = $e(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = Hu(), {
      someSelected: r,
      allSelected: u,
      selectAll: c,
      showSelectAll: d
    } = vl(), {
      columns: f,
      headers: m
    } = gl(), {
      loaderClasses: v
    } = ra(e);
    function y(w, x) {
      if (!(!e.sticky && !w.fixed))
        return {
          position: "sticky",
          left: w.fixed ? X(w.fixedOffset) : void 0,
          top: e.sticky ? `calc(var(--v-table-header-height) * ${x})` : void 0
        };
    }
    function h(w) {
      const x = i.value.find((A) => A.key === w.key);
      return x ? x.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: g,
      backgroundColorStyles: S
    } = Ve(e, "color"), {
      displayClasses: k,
      mobile: p
    } = yt(e), _ = b(() => ({
      headers: m.value,
      columns: f.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: u.value,
      selectAll: c,
      getSortIcon: h
    })), C = b(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky
    }, k.value, v.value]), P = (w) => {
      let {
        column: x,
        x: A,
        y: V
      } = w;
      const I = x.key === "data-table-select" || x.key === "data-table-expand", D = N(e.headerProps ?? {}, x.headerProps ?? {});
      return s(La, N({
        tag: "th",
        align: x.align,
        class: [{
          "v-data-table__th--sortable": x.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(x),
          "v-data-table__th--fixed": x.fixed
        }, ...C.value],
        style: {
          width: X(x.width),
          minWidth: X(x.minWidth),
          maxWidth: X(x.maxWidth),
          ...y(x, V)
        },
        colspan: x.colspan,
        rowspan: x.rowspan,
        onClick: x.sortable ? () => l(x) : void 0,
        fixed: x.fixed,
        nowrap: x.nowrap,
        lastFixed: x.lastFixed,
        noPadding: I
      }, D), {
        default: () => {
          var W;
          const $ = `header.${x.key}`, z = {
            column: x,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: u.value,
            getSortIcon: h
          };
          return n[$] ? n[$](z) : x.key === "data-table-select" ? ((W = n["header.data-table-select"]) == null ? void 0 : W.call(n, z)) ?? (d.value && s(Et, {
            modelValue: u.value,
            indeterminate: r.value && !u.value,
            "onUpdate:modelValue": c
          }, null)) : s("div", {
            class: "v-data-table-header__content"
          }, [s("span", null, [x.title]), x.sortable && !e.disableSort && s(Se, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: h(x)
          }, null), e.multiSort && o(x) && s("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...g.value],
            style: S.value
          }, [i.value.findIndex((Z) => Z.key === x.key) + 1])]);
        }
      });
    }, T = () => {
      const w = N(e.headerProps ?? {} ?? {}), x = b(() => f.value.filter((V) => (V == null ? void 0 : V.sortable) && !e.disableSort)), A = b(() => {
        if (f.value.find((I) => I.key === "data-table-select") != null)
          return u.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return s(La, N({
        tag: "th",
        class: [...C.value],
        colspan: m.value.length + 1
      }, w), {
        default: () => [s("div", {
          class: "v-data-table-header__content"
        }, [s(Yi, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: x.value,
          label: t("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: A.value,
          "onClick:append": () => c(!u.value)
        }, {
          ...n,
          chip: (V) => {
            var I;
            return s(zn, {
              onClick: (I = V.item.raw) != null && I.sortable ? () => l(V.item.raw) : void 0,
              onMousedown: (D) => {
                D.preventDefault(), D.stopPropagation();
              }
            }, {
              default: () => [V.item.title, s(Se, {
                class: ["v-data-table__td-sort-icon", o(V.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: h(V.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    R(() => p.value ? s("tr", null, [s(T, null, null)]) : s(le, null, [n.headers ? n.headers(_.value) : m.value.map((w, x) => s("tr", null, [w.map((A, V) => s(P, {
      column: A,
      x: V,
      y: x
    }, null))])), e.loading && s("tr", {
      class: "v-data-table-progress"
    }, [s("th", {
      colspan: f.value.length
    }, [s(sa, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: n.loader
    })])])]));
  }
}), ey = B({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), ty = O()({
  name: "VDataTableGroupHeaderRow",
  props: ey(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      isGroupOpen: t,
      toggleGroup: l,
      extractRows: i
    } = Bu(), {
      isSelected: o,
      isSomeSelected: r,
      select: u
    } = vl(), {
      columns: c
    } = gl(), d = b(() => i([e.item]));
    return () => s("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((f) => {
      var m, v;
      if (f.key === "data-table-group") {
        const y = t(e.item) ? "$expand" : "$next", h = () => l(e.item);
        return ((m = n["data-table-group"]) == null ? void 0 : m.call(n, {
          item: e.item,
          count: d.value.length,
          props: {
            icon: y,
            onClick: h
          }
        })) ?? s(La, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [s(be, {
            size: "small",
            variant: "text",
            icon: y,
            onClick: h
          }, null), s("span", null, [e.item.value]), s("span", null, [Ke("("), d.value.length, Ke(")")])]
        });
      }
      if (f.key === "data-table-select") {
        const y = o(d.value), h = r(d.value) && !y, g = (S) => u(d.value, S);
        return ((v = n["data-table-select"]) == null ? void 0 : v.call(n, {
          props: {
            modelValue: y,
            indeterminate: h,
            "onUpdate:modelValue": g
          }
        })) ?? s("td", null, [s(Et, {
          modelValue: y,
          indeterminate: h,
          "onUpdate:modelValue": g
        }, null)]);
      }
      return s("td", null, null);
    })]);
  }
}), ny = B({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: Ge(),
  onContextmenu: Ge(),
  onDblclick: Ge(),
  ...mn()
}, "VDataTableRow"), ao = O()({
  name: "VDataTableRow",
  props: ny(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      displayClasses: t,
      mobile: l
    } = yt(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: u,
      selectAll: c
    } = vl(), {
      isExpanded: d,
      toggleExpand: f
    } = Au(), {
      toggleSort: m,
      sortBy: v,
      isSorted: y
    } = Hu(), {
      columns: h
    } = gl();
    R(() => s("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, t.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && h.value.map((g, S) => {
      const k = e.item, p = `item.${g.key}`, _ = `header.${g.key}`, C = {
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
        isSorted: y,
        toggleSort: m,
        sortBy: v.value,
        someSelected: r.value,
        allSelected: u.value,
        getSortIcon: () => ""
      }, T = typeof e.cellProps == "function" ? e.cellProps({
        index: C.index,
        item: C.item,
        internalItem: C.internalItem,
        value: C.value,
        column: g
      }) : e.cellProps, w = typeof g.cellProps == "function" ? g.cellProps({
        index: C.index,
        item: C.item,
        internalItem: C.internalItem,
        value: C.value
      }) : g.cellProps;
      return s(La, N({
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
      }, T, w), {
        default: () => {
          var A, V, I, D, $;
          if (n[p] && !l.value) return (A = n[p]) == null ? void 0 : A.call(n, C);
          if (g.key === "data-table-select")
            return ((V = n["item.data-table-select"]) == null ? void 0 : V.call(n, C)) ?? s(Et, {
              disabled: !k.selectable,
              modelValue: i([k]),
              onClick: co(() => o(k), ["stop"])
            }, null);
          if (g.key === "data-table-expand")
            return ((I = n["item.data-table-expand"]) == null ? void 0 : I.call(n, C)) ?? s(be, {
              icon: d(k) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: co(() => f(k), ["stop"])
            }, null);
          const x = kr(C.value);
          return l.value ? s(le, null, [s("div", {
            class: "v-data-table__td-title"
          }, [((D = n[_]) == null ? void 0 : D.call(n, P)) ?? g.title]), s("div", {
            class: "v-data-table__td-value"
          }, [(($ = n[p]) == null ? void 0 : $.call(n, C)) ?? x])]) : x;
        }
      });
    })]));
  }
}), qu = B({
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
  props: qu(),
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      columns: l
    } = gl(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = Au(), {
      isSelected: u,
      toggleSelect: c
    } = vl(), {
      toggleGroup: d,
      isGroupOpen: f
    } = Bu(), {
      t: m
    } = $e(), {
      mobile: v
    } = yt(e);
    return R(() => {
      var y, h;
      return e.loading && (!e.items.length || t.loading) ? s("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [s("td", {
        colspan: l.value.length
      }, [((y = t.loading) == null ? void 0 : y.call(t)) ?? m(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? s("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [s("td", {
        colspan: l.value.length
      }, [((h = t["no-data"]) == null ? void 0 : h.call(t)) ?? m(e.noDataText)])]) : s(le, null, [e.items.map((g, S) => {
        var _;
        if (g.type === "group") {
          const C = {
            index: S,
            item: g,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: u,
            toggleSelect: c,
            toggleGroup: d,
            isGroupOpen: f
          };
          return t["group-header"] ? t["group-header"](C) : s(ty, N({
            key: `group-header_${g.id}`,
            item: g
          }, Mo(n, ":group-header", () => C)), t);
        }
        const k = {
          index: S,
          item: g.raw,
          internalItem: g,
          columns: l.value,
          isExpanded: r,
          toggleExpand: o,
          isSelected: u,
          toggleSelect: c
        }, p = {
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
          }, Mo(n, ":row", () => k), typeof e.rowProps == "function" ? e.rowProps({
            item: k.item,
            index: k.index,
            internalItem: k.internalItem
          }) : e.rowProps)
        };
        return s(le, {
          key: p.props.key
        }, [t.item ? t.item(p) : s(ao, p.props, t), r(g) && ((_ = t["expanded-row"]) == null ? void 0 : _.call(t, k))]);
      })]);
    }), {};
  }
}), Ku = B({
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
  props: Ku(),
  setup(e, a) {
    let {
      slots: n,
      emit: t
    } = a;
    const {
      themeClasses: l
    } = ke(e), {
      densityClasses: i
    } = lt(e);
    return R(() => s(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!n.top,
        "v-table--has-bottom": !!n.bottom,
        "v-table--hover": e.hover
      }, l.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var o, r, u;
        return [(o = n.top) == null ? void 0 : o.call(n), n.default ? s("div", {
          class: "v-table__wrapper",
          style: {
            height: X(e.height)
          }
        }, [s("table", null, [n.default()])]) : (r = n.wrapper) == null ? void 0 : r.call(n), (u = n.bottom) == null ? void 0 : u.call(n)];
      }
    })), {};
  }
}), ay = B({
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
function ly(e, a, n, t) {
  const l = e.returnObject ? a : He(a, e.itemValue), i = He(a, e.itemSelectable, !0), o = t.reduce((r, u) => (u.key != null && (r[u.key] = He(a, u.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? He(a, e.itemValue) : l,
    index: n,
    value: l,
    selectable: i,
    columns: o,
    raw: a
  };
}
function iy(e, a, n) {
  return a.map((t, l) => ly(e, t, l, n));
}
function lo(e, a) {
  return {
    items: b(() => iy(e, e.items, a.value))
  };
}
const io = B({
  ...qu(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Iu(),
  ...qi(),
  ...qh(),
  ...ay(),
  ...Ou(),
  ...Nu(),
  ...Uu(),
  ...Ku()
}, "DataTable"), oy = B({
  ...Xi(),
  ...io(),
  ...ga(),
  ...eo()
}, "VDataTable"), ry = O()({
  name: "VDataTable",
  props: oy(),
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
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      groupBy: l
    } = Ki(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = fl(e), {
      page: u,
      itemsPerPage: c
    } = Zi(e), {
      disableSort: d
    } = fn(e), {
      columns: f,
      headers: m,
      sortFunctions: v,
      sortRawFunctions: y,
      filterFunctions: h
    } = no(e, {
      groupBy: l,
      showSelect: E(e, "showSelect"),
      showExpand: E(e, "showExpand")
    }), {
      items: g
    } = lo(e, f), S = E(e, "search"), {
      filteredItems: k
    } = ha(e, g, S, {
      transform: (ne) => ne.columns,
      customKeyFilter: h
    }), {
      toggleSort: p
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: u
    }), {
      sortByWithGroups: _,
      opened: C,
      extractRows: P,
      isGroupOpen: T,
      toggleGroup: w
    } = sl({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      sortedItems: x
    } = Qi(e, k, _, {
      transform: (ne) => ({
        ...ne.raw,
        ...ne.columns
      }),
      sortFunctions: v,
      sortRawFunctions: y
    }), {
      flatItems: A
    } = ul(x, l, C), V = b(() => A.value.length), {
      startIndex: I,
      stopIndex: D,
      pageCount: $,
      setItemsPerPage: z
    } = Ji({
      page: u,
      itemsPerPage: c,
      itemsLength: V
    }), {
      paginatedItems: W
    } = Fu({
      items: A,
      startIndex: I,
      stopIndex: D,
      itemsPerPage: c
    }), Z = b(() => P(W.value)), {
      isSelected: J,
      select: L,
      selectAll: F,
      toggleSelect: M,
      someSelected: U,
      allSelected: oe
    } = dl(e, {
      allItems: g,
      currentPage: Z
    }), {
      isExpanded: te,
      toggleExpand: ue
    } = rl(e);
    cl({
      page: u,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: S
    }), De({
      VDataTableRows: {
        hideNoData: E(e, "hideNoData"),
        noDataText: E(e, "noDataText"),
        loading: E(e, "loading"),
        loadingText: E(e, "loadingText")
      }
    });
    const H = b(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: $.value,
      toggleSort: p,
      setItemsPerPage: z,
      someSelected: U.value,
      allSelected: oe.value,
      isSelected: J,
      select: L,
      selectAll: F,
      toggleSelect: M,
      isExpanded: te,
      toggleExpand: ue,
      isGroupOpen: T,
      toggleGroup: w,
      items: Z.value.map((ne) => ne.raw),
      internalItems: Z.value,
      groupedItems: W.value,
      columns: f.value,
      headers: m.value
    }));
    return R(() => {
      const ne = aa.filterProps(e), ie = cn.filterProps(e), he = dn.filterProps(e), Ce = vn.filterProps(e);
      return s(vn, N({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, Ce), {
        top: () => {
          var K;
          return (K = t.top) == null ? void 0 : K.call(t, H.value);
        },
        default: () => {
          var K, fe, Y, Q, ce, se;
          return t.default ? t.default(H.value) : s(le, null, [(K = t.colgroup) == null ? void 0 : K.call(t, H.value), !e.hideDefaultHeader && s("thead", {
            key: "thead"
          }, [s(cn, ie, t)]), (fe = t.thead) == null ? void 0 : fe.call(t, H.value), !e.hideDefaultBody && s("tbody", null, [(Y = t["body.prepend"]) == null ? void 0 : Y.call(t, H.value), t.body ? t.body(H.value) : s(dn, N(n, he, {
            items: W.value
          }), t), (Q = t["body.append"]) == null ? void 0 : Q.call(t, H.value)]), (ce = t.tbody) == null ? void 0 : ce.call(t, H.value), (se = t.tfoot) == null ? void 0 : se.call(t, H.value)]);
        },
        bottom: () => t.bottom ? t.bottom(H.value) : !e.hideDefaultFooter && s(le, null, [s(va, null, null), s(aa, ne, {
          prepend: t["footer.prepend"]
        })])
      });
    }), {};
  }
}), sy = B({
  ...io(),
  ...qi(),
  ...su(),
  ...ga()
}, "VDataTableVirtual"), uy = O()({
  name: "VDataTableVirtual",
  props: sy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      groupBy: l
    } = Ki(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = fl(e), {
      disableSort: u
    } = fn(e), {
      columns: c,
      headers: d,
      filterFunctions: f,
      sortFunctions: m,
      sortRawFunctions: v
    } = no(e, {
      groupBy: l,
      showSelect: E(e, "showSelect"),
      showExpand: E(e, "showExpand")
    }), {
      items: y
    } = lo(e, c), h = E(e, "search"), {
      filteredItems: g
    } = ha(e, y, h, {
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
      opened: p,
      extractRows: _,
      isGroupOpen: C,
      toggleGroup: P
    } = sl({
      groupBy: l,
      sortBy: i,
      disableSort: u
    }), {
      sortedItems: T
    } = Qi(e, g, k, {
      transform: (ie) => ({
        ...ie.raw,
        ...ie.columns
      }),
      sortFunctions: m,
      sortRawFunctions: v
    }), {
      flatItems: w
    } = ul(T, l, p), x = b(() => _(w.value)), {
      isSelected: A,
      select: V,
      selectAll: I,
      toggleSelect: D,
      someSelected: $,
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
      paddingTop: F,
      paddingBottom: M,
      computedItems: U,
      handleItemResize: oe,
      handleScroll: te,
      handleScrollend: ue
    } = uu(e, w), H = b(() => U.value.map((ie) => ie.raw));
    cl({
      sortBy: i,
      page: G(1),
      itemsPerPage: G(-1),
      groupBy: l,
      search: h
    }), De({
      VDataTableRows: {
        hideNoData: E(e, "hideNoData"),
        noDataText: E(e, "noDataText"),
        loading: E(e, "loading"),
        loadingText: E(e, "loadingText")
      }
    });
    const ne = b(() => ({
      sortBy: i.value,
      toggleSort: S,
      someSelected: $.value,
      allSelected: z.value,
      isSelected: A,
      select: V,
      selectAll: I,
      toggleSelect: D,
      isExpanded: W,
      toggleExpand: Z,
      isGroupOpen: C,
      toggleGroup: P,
      items: x.value.map((ie) => ie.raw),
      internalItems: x.value,
      groupedItems: w.value,
      columns: c.value,
      headers: d.value
    }));
    R(() => {
      const ie = cn.filterProps(e), he = dn.filterProps(e), Ce = vn.filterProps(e);
      return s(vn, N({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, Ce), {
        top: () => {
          var K;
          return (K = t.top) == null ? void 0 : K.call(t, ne.value);
        },
        wrapper: () => {
          var K, fe, Y;
          return s("div", {
            ref: J,
            onScrollPassive: te,
            onScrollend: ue,
            class: "v-table__wrapper",
            style: {
              height: X(e.height)
            }
          }, [s("table", null, [(K = t.colgroup) == null ? void 0 : K.call(t, ne.value), !e.hideDefaultHeader && s("thead", {
            key: "thead"
          }, [s(cn, N(ie, {
            sticky: e.fixedHeader
          }), t)]), !e.hideDefaultBody && s("tbody", null, [s("tr", {
            ref: L,
            style: {
              height: X(F.value),
              border: 0
            }
          }, [s("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (fe = t["body.prepend"]) == null ? void 0 : fe.call(t, ne.value), s(dn, N(n, he, {
            items: H.value
          }), {
            ...t,
            item: (Q) => s(ru, {
              key: Q.internalItem.index,
              renderless: !0,
              "onUpdate:height": (ce) => oe(Q.internalItem.index, ce)
            }, {
              default: (ce) => {
                var de;
                let {
                  itemRef: se
                } = ce;
                return ((de = t.item) == null ? void 0 : de.call(t, {
                  ...Q,
                  itemRef: se
                })) ?? s(ao, N(Q.props, {
                  ref: se,
                  key: Q.internalItem.index,
                  index: Q.internalItem.index
                }), t);
              }
            })
          }), (Y = t["body.append"]) == null ? void 0 : Y.call(t, ne.value), s("tr", {
            style: {
              height: X(M.value),
              border: 0
            }
          }, [s("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var K;
          return (K = t.bottom) == null ? void 0 : K.call(t, ne.value);
        }
      });
    });
  }
}), cy = B({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Xi(),
  ...io(),
  ...eo()
}, "VDataTableServer"), dy = O()({
  name: "VDataTableServer",
  props: cy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const {
      groupBy: l
    } = Ki(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = fl(e), {
      page: u,
      itemsPerPage: c
    } = Zi(e), {
      disableSort: d
    } = fn(e), f = b(() => parseInt(e.itemsLength, 10)), {
      columns: m,
      headers: v
    } = no(e, {
      groupBy: l,
      showSelect: E(e, "showSelect"),
      showExpand: E(e, "showExpand")
    }), {
      items: y
    } = lo(e, m), {
      toggleSort: h
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: u
    }), {
      opened: g,
      isGroupOpen: S,
      toggleGroup: k,
      extractRows: p
    } = sl({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      pageCount: _,
      setItemsPerPage: C
    } = Ji({
      page: u,
      itemsPerPage: c,
      itemsLength: f
    }), {
      flatItems: P
    } = ul(y, l, g), {
      isSelected: T,
      select: w,
      selectAll: x,
      toggleSelect: A,
      someSelected: V,
      allSelected: I
    } = dl(e, {
      allItems: y,
      currentPage: y
    }), {
      isExpanded: D,
      toggleExpand: $
    } = rl(e), z = b(() => p(y.value));
    cl({
      page: u,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: E(e, "search")
    }), pe("v-data-table", {
      toggleSort: h,
      sortBy: i
    }), De({
      VDataTableRows: {
        hideNoData: E(e, "hideNoData"),
        noDataText: E(e, "noDataText"),
        loading: E(e, "loading"),
        loadingText: E(e, "loadingText")
      }
    });
    const W = b(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: _.value,
      toggleSort: h,
      setItemsPerPage: C,
      someSelected: V.value,
      allSelected: I.value,
      isSelected: T,
      select: w,
      selectAll: x,
      toggleSelect: A,
      isExpanded: D,
      toggleExpand: $,
      isGroupOpen: S,
      toggleGroup: k,
      items: z.value.map((Z) => Z.raw),
      internalItems: z.value,
      groupedItems: P.value,
      columns: m.value,
      headers: v.value
    }));
    R(() => {
      const Z = aa.filterProps(e), J = cn.filterProps(e), L = dn.filterProps(e), F = vn.filterProps(e);
      return s(vn, N({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, F), {
        top: () => {
          var M;
          return (M = t.top) == null ? void 0 : M.call(t, W.value);
        },
        default: () => {
          var M, U, oe, te, ue, H;
          return t.default ? t.default(W.value) : s(le, null, [(M = t.colgroup) == null ? void 0 : M.call(t, W.value), !e.hideDefaultHeader && s("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [s(cn, N(J, {
            sticky: e.fixedHeader
          }), t)]), (U = t.thead) == null ? void 0 : U.call(t, W.value), !e.hideDefaultBody && s("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(oe = t["body.prepend"]) == null ? void 0 : oe.call(t, W.value), t.body ? t.body(W.value) : s(dn, N(n, L, {
            items: P.value
          }), t), (te = t["body.append"]) == null ? void 0 : te.call(t, W.value)]), (ue = t.tbody) == null ? void 0 : ue.call(t, W.value), (H = t.tfoot) == null ? void 0 : H.call(t, W.value)]);
        },
        bottom: () => t.bottom ? t.bottom(W.value) : !e.hideDefaultFooter && s(le, null, [s(va, null, null), s(aa, Z, {
          prepend: t["footer.prepend"]
        })])
      });
    });
  }
}), vy = B({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...ee(),
  ...Ne(),
  ...ve()
}, "VContainer"), fy = O()({
  name: "VContainer",
  props: vy(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      rtlClasses: t
    } = We(), {
      dimensionStyles: l
    } = ze(e);
    return R(() => s(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, t.value, e.class],
      style: [l.value, e.style]
    }, n)), {};
  }
}), Xu = ja.reduce((e, a) => (e[a] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Zu = ja.reduce((e, a) => {
  const n = "offset" + $n(a);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Ju = ja.reduce((e, a) => {
  const n = "order" + $n(a);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), lr = {
  col: Object.keys(Xu),
  offset: Object.keys(Zu),
  order: Object.keys(Ju)
};
function my(e, a, n) {
  let t = e;
  if (!(n == null || n === !1)) {
    if (a) {
      const l = a.replace(e, "");
      t += `-${l}`;
    }
    return e === "col" && (t = "v-" + t), e === "col" && (n === "" || n === !0) || (t += `-${n}`), t.toLowerCase();
  }
}
const gy = ["auto", "start", "end", "center", "baseline", "stretch"], hy = B({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Xu,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Zu,
  order: {
    type: [String, Number],
    default: null
  },
  ...Ju,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => gy.includes(e)
  },
  ...ee(),
  ...ve()
}, "VCol"), yy = O()({
  name: "VCol",
  props: hy(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = b(() => {
      const l = [];
      let i;
      for (i in lr)
        lr[i].forEach((r) => {
          const u = e[r], c = my(i, r, u);
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
      return Yt(e.tag, {
        class: [t.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), oo = ["start", "end", "center"], Qu = ["space-between", "space-around", "space-evenly"];
function ro(e, a) {
  return ja.reduce((n, t) => {
    const l = e + $n(t);
    return n[l] = a(), n;
  }, {});
}
const by = [...oo, "baseline", "stretch"], ec = (e) => by.includes(e), tc = ro("align", () => ({
  type: String,
  default: null,
  validator: ec
})), Sy = [...oo, ...Qu], nc = (e) => Sy.includes(e), ac = ro("justify", () => ({
  type: String,
  default: null,
  validator: nc
})), ky = [...oo, ...Qu, "stretch"], lc = (e) => ky.includes(e), ic = ro("alignContent", () => ({
  type: String,
  default: null,
  validator: lc
})), ir = {
  align: Object.keys(tc),
  justify: Object.keys(ac),
  alignContent: Object.keys(ic)
}, xy = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function wy(e, a, n) {
  let t = xy[e];
  if (n != null) {
    if (a) {
      const l = a.replace(e, "");
      t += `-${l}`;
    }
    return t += `-${n}`, t.toLowerCase();
  }
}
const Cy = B({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: ec
  },
  ...tc,
  justify: {
    type: String,
    default: null,
    validator: nc
  },
  ...ac,
  alignContent: {
    type: String,
    default: null,
    validator: lc
  },
  ...ic,
  ...ee(),
  ...ve()
}, "VRow"), Vy = O()({
  name: "VRow",
  props: Cy(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = b(() => {
      const l = [];
      let i;
      for (i in ir)
        ir[i].forEach((o) => {
          const r = e[o], u = wy(i, o, r);
          u && l.push(u);
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
      return Yt(e.tag, {
        class: ["v-row", t.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), oc = Tt("v-spacer", "div", "VSpacer"), rc = B({
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
}, "VDatePickerControls"), ni = O()({
  name: "VDatePickerControls",
  props: rc(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, a) {
    let {
      emit: n
    } = a;
    const t = b(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = b(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = b(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = b(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      n("click:prev");
    }
    function u() {
      n("click:next");
    }
    function c() {
      n("click:year");
    }
    function d() {
      n("click:month");
    }
    return R(() => s("div", {
      class: ["v-date-picker-controls"]
    }, [s(be, {
      class: "v-date-picker-controls__month-btn",
      disabled: t.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), s(be, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), s(oc, {
      key: "mode-spacer"
    }, null), s("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [s(be, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), s(be, {
      disabled: o.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: u
    }, null)])])), {};
  }
}), Py = B({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: Ge()
}, "VDatePickerHeader"), ai = O()({
  name: "VDatePickerHeader",
  props: Py(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "color");
    function o() {
      n("click");
    }
    function r() {
      n("click:append");
    }
    return R(() => {
      const u = !!(t.default || e.header), c = !!(t.append || e.appendIcon);
      return s("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: o
      }, [t.prepend && s("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [t.prepend()]), u && s(et, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var d;
          return [s("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((d = t.default) == null ? void 0 : d.call(t)) ?? e.header])];
        }
      }), c && s("div", {
        class: "v-date-picker-header__append"
      }, [t.append ? s(me, {
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
          return [(d = t.append) == null ? void 0 : d.call(t)];
        }
      }) : s(be, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), _y = B({
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
function Iy(e) {
  const a = ia(), n = ae(e, "modelValue", [], (v) => Te(v)), t = b(() => e.displayValue ? a.date(e.displayValue) : n.value.length > 0 ? a.date(n.value[0]) : e.min ? a.date(e.min) : Array.isArray(e.allowedDates) ? a.date(e.allowedDates[0]) : a.date()), l = ae(e, "year", void 0, (v) => {
    const y = v != null ? Number(v) : a.getYear(t.value);
    return a.startOfYear(a.setYear(a.date(), y));
  }, (v) => a.getYear(v)), i = ae(e, "month", void 0, (v) => {
    const y = v != null ? Number(v) : a.getMonth(t.value), h = a.setYear(a.startOfMonth(a.date()), a.getYear(l.value));
    return a.setMonth(h, y);
  }, (v) => a.getMonth(v)), o = b(() => {
    const v = Number(e.firstDayOfWeek ?? 0);
    return e.weekdays.map((y) => (y + v) % 7);
  }), r = b(() => {
    const v = a.getWeekArray(i.value, e.firstDayOfWeek), y = v.flat(), h = 6 * 7;
    if (e.weeksInMonth === "static" && y.length < h) {
      const g = y[y.length - 1];
      let S = [];
      for (let k = 1; k <= h - y.length; k++)
        S.push(a.addDays(g, k)), k % 7 === 0 && (v.push(S), S = []);
    }
    return v;
  });
  function u(v, y) {
    return v.filter((h) => o.value.includes(a.toJsDate(h).getDay())).map((h, g) => {
      const S = a.toISO(h), k = !a.isSameMonth(h, i.value), p = a.isSameDay(h, a.startOfMonth(i.value)), _ = a.isSameDay(h, a.endOfMonth(i.value)), C = a.isSameDay(h, i.value);
      return {
        date: h,
        isoDate: S,
        formatted: a.format(h, "keyboardDate"),
        year: a.getYear(h),
        month: a.getMonth(h),
        isDisabled: m(h),
        isWeekStart: g % 7 === 0,
        isWeekEnd: g % 7 === 6,
        isToday: a.isSameDay(h, y),
        isAdjacent: k,
        isHidden: k && !e.showAdjacentMonths,
        isStart: p,
        isSelected: n.value.some((P) => a.isSameDay(h, P)),
        isEnd: _,
        isSame: C,
        localized: a.format(h, "dayOfMonth")
      };
    });
  }
  const c = b(() => {
    const v = a.startOfWeek(t.value, e.firstDayOfWeek), y = [];
    for (let g = 0; g <= 6; g++)
      y.push(a.addDays(v, g));
    const h = a.date();
    return u(y, h);
  }), d = b(() => {
    const v = r.value.flat(), y = a.date();
    return u(v, y);
  }), f = b(() => r.value.map((v) => v.length ? Fv(a, v[0]) : null));
  function m(v) {
    if (e.disabled) return !0;
    const y = a.date(v);
    return e.min && a.isAfter(a.date(e.min), y) || e.max && a.isAfter(y, a.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => a.isSameDay(a.date(h), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : !1;
  }
  return {
    displayValue: t,
    daysInMonth: d,
    daysInWeek: c,
    genDays: u,
    model: n,
    weeksInMonth: r,
    weekDays: o,
    weekNumbers: f
  };
}
const sc = B({
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
  ..._y()
}, "VDatePickerMonth"), li = O()({
  name: "VDatePickerMonth",
  props: sc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const l = j(), {
      daysInMonth: i,
      model: o,
      weekNumbers: r
    } = Iy(e), u = ia(), c = G(), d = G(), f = G(!1), m = b(() => f.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (c.value = o.value[0], o.value.length > 1 && (d.value = o.value[o.value.length - 1]));
    const v = b(() => {
      const S = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= S;
    });
    q(i, (S, k) => {
      k && (f.value = u.isBefore(S[0].date, k[0].date));
    });
    function y(S) {
      const k = u.startOfDay(S);
      if (o.value.length === 0 ? c.value = void 0 : o.value.length === 1 && (c.value = o.value[0], d.value = void 0), !c.value)
        c.value = k, o.value = [c.value];
      else if (d.value)
        c.value = S, d.value = void 0, o.value = [c.value];
      else {
        if (u.isSameDay(k, c.value)) {
          c.value = void 0, o.value = [];
          return;
        } else u.isBefore(k, c.value) ? (d.value = u.endOfDay(c.value), c.value = k) : d.value = u.endOfDay(k);
        const p = u.getDiff(d.value, c.value, "days"), _ = [c.value];
        for (let C = 1; C < p; C++) {
          const P = u.addDays(c.value, C);
          _.push(P);
        }
        _.push(d.value), o.value = _;
      }
    }
    function h(S) {
      const k = o.value.findIndex((p) => u.isSameDay(p, S));
      if (k === -1)
        o.value = [...o.value, S];
      else {
        const p = [...o.value];
        p.splice(k, 1), o.value = p;
      }
    }
    function g(S) {
      e.multiple === "range" ? y(S) : e.multiple ? h(S) : o.value = [S];
    }
    return () => s("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && s("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && s("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [Ke(" ")]), r.value.map((S) => s("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [S]))]), s(et, {
      name: m.value
    }, {
      default: () => {
        var S;
        return [s("div", {
          ref: l,
          key: (S = i.value[0].date) == null ? void 0 : S.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && u.getWeekdays(e.firstDayOfWeek).map((k) => s("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [k])), i.value.map((k, p) => {
          const _ = {
            props: {
              onClick: () => g(k.date)
            },
            item: k,
            i: p
          };
          return v.value && !k.isSelected && (k.isDisabled = !0), s("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": k.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": k.isHidden,
              "v-date-picker-month__day--selected": k.isSelected,
              "v-date-picker-month__day--week-end": k.isWeekEnd,
              "v-date-picker-month__day--week-start": k.isWeekStart
            }],
            "data-v-date": k.isDisabled ? void 0 : k.isoDate
          }, [(e.showAdjacentMonths || !k.isAdjacent) && s(me, {
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
              var C;
              return [((C = t.day) == null ? void 0 : C.call(t, _)) ?? s(be, _.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), uc = B({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), ii = O()({
  name: "VDatePickerMonths",
  props: uc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const l = ia(), i = ae(e, "modelValue"), o = b(() => {
      let r = l.startOfYear(l.date());
      return e.year && (r = l.setYear(r, e.year)), _t(12).map((u) => {
        const c = l.format(r, "monthShort"), d = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r) || e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))));
        return r = l.getNextMonth(r), {
          isDisabled: d,
          text: c,
          value: u
        };
      });
    });
    return Fe(() => {
      i.value = i.value ?? l.getMonth(l.date());
    }), R(() => s("div", {
      class: "v-date-picker-months",
      style: {
        height: X(e.height)
      }
    }, [s("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((r, u) => {
      var f;
      const c = {
        active: i.value === u,
        color: i.value === u ? e.color : void 0,
        disabled: r.isDisabled,
        rounded: !0,
        text: r.text,
        variant: i.value === r.value ? "flat" : "text",
        onClick: () => d(u)
      };
      function d(m) {
        if (i.value === m) {
          n("update:modelValue", i.value);
          return;
        }
        i.value = m;
      }
      return ((f = t.month) == null ? void 0 : f.call(t, {
        month: r,
        i: u,
        props: c
      })) ?? s(be, N({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), cc = B({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), oi = O()({
  name: "VDatePickerYears",
  props: cc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const l = ia(), i = ae(e, "modelValue"), o = b(() => {
      const u = l.getYear(l.date());
      let c = u - 100, d = u + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (d = l.getYear(l.date(e.max)));
      let f = l.startOfYear(l.date());
      return f = l.setYear(f, c), _t(d - c + 1, c).map((m) => {
        const v = l.format(f, "year");
        return f = l.setYear(f, l.getYear(f) + 1), {
          text: v,
          value: m
        };
      });
    });
    Fe(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const r = Aa();
    return at(async () => {
      var u;
      await we(), (u = r.el) == null || u.scrollIntoView({
        block: "center"
      });
    }), R(() => s("div", {
      class: "v-date-picker-years",
      style: {
        height: X(e.height)
      }
    }, [s("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((u, c) => {
      var f;
      const d = {
        ref: i.value === u.value ? r : void 0,
        active: i.value === u.value,
        color: i.value === u.value ? e.color : void 0,
        rounded: !0,
        text: u.text,
        variant: i.value === u.value ? "flat" : "text",
        onClick: () => {
          if (i.value === u.value) {
            n("update:modelValue", i.value);
            return;
          }
          i.value = u.value;
        }
      };
      return ((f = t.year) == null ? void 0 : f.call(t, {
        year: u,
        i: c,
        props: d
      })) ?? s(be, N({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), py = Tt("v-picker-title"), dc = B({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...ol()
}, "VPicker"), or = O()({
  name: "VPicker",
  props: dc(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: l
    } = Ve(E(e, "color"));
    return R(() => {
      const i = un.filterProps(e), o = !!(e.title || n.title);
      return s(un, N(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!n.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && s("div", {
            key: "header",
            class: [t.value],
            style: [l.value]
          }, [o && s(py, {
            key: "picker-title"
          }, {
            default: () => {
              var u;
              return [((u = n.title) == null ? void 0 : u.call(n)) ?? e.title];
            }
          }), n.header && s("div", {
            class: "v-picker__header"
          }, [n.header()])]), s("div", {
            class: "v-picker__body"
          }, [(r = n.default) == null ? void 0 : r.call(n)]), n.actions && s(me, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [s("div", {
              class: "v-picker__actions"
            }, [n.actions()])]
          })];
        }
      });
    }), {};
  }
}), Ay = B({
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
  ...rc(),
  ...sc({
    weeksInMonth: "static"
  }),
  ...Re(uc(), ["modelValue"]),
  ...Re(cc(), ["modelValue"]),
  ...dc({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), Ty = O()({
  name: "VDatePicker",
  props: Ay(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const l = ia(), {
      t: i
    } = $e(), o = ae(e, "modelValue", void 0, (x) => Te(x), (x) => e.multiple ? x : x[0]), r = ae(e, "viewMode"), u = b(() => {
      var A;
      const x = l.date((A = o.value) == null ? void 0 : A[0]);
      return x && l.isValid(x) ? x : l.date();
    }), c = j(Number(e.month ?? l.getMonth(l.startOfMonth(u.value)))), d = j(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(u.value, c.value))))), f = G(!1), m = b(() => e.multiple && o.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(l.date(o.value[0]), "normalDateWithWeekday") : i(e.header)), v = b(() => {
      let x = l.date();
      return x = l.setDate(x, 1), x = l.setMonth(x, c.value), x = l.setYear(x, d.value), l.format(x, "monthAndYear");
    }), y = b(() => `date-picker-header${f.value ? "-reverse" : ""}-transition`), h = b(() => {
      const x = l.date(e.min);
      return e.min && l.isValid(x) ? x : null;
    }), g = b(() => {
      const x = l.date(e.max);
      return e.max && l.isValid(x) ? x : null;
    }), S = b(() => {
      if (e.disabled) return !0;
      const x = [];
      if (r.value !== "month")
        x.push("prev", "next");
      else {
        let A = l.date();
        if (A = l.setYear(A, d.value), A = l.setMonth(A, c.value), h.value) {
          const V = l.addDays(l.startOfMonth(A), -1);
          l.isAfter(h.value, V) && x.push("prev");
        }
        if (g.value) {
          const V = l.addDays(l.endOfMonth(A), 1);
          l.isAfter(V, g.value) && x.push("next");
        }
      }
      return x;
    });
    function k() {
      c.value < 11 ? c.value++ : (d.value++, c.value = 0, w(d.value)), T(c.value);
    }
    function p() {
      c.value > 0 ? c.value-- : (d.value--, c.value = 11, w(d.value)), T(c.value);
    }
    function _() {
      r.value = "month";
    }
    function C() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function P() {
      r.value = r.value === "year" ? "month" : "year";
    }
    function T(x) {
      r.value === "months" && C(), n("update:month", x);
    }
    function w(x) {
      r.value === "year" && P(), n("update:year", x);
    }
    return q(o, (x, A) => {
      const V = Te(A), I = Te(x);
      if (!I.length) return;
      const D = l.date(V[V.length - 1]), $ = l.date(I[I.length - 1]), z = l.getMonth($), W = l.getYear($);
      z !== c.value && (c.value = z, T(c.value)), W !== d.value && (d.value = W, w(d.value)), f.value = l.isBefore(D, $);
    }), R(() => {
      const x = or.filterProps(e), A = ni.filterProps(e), V = ai.filterProps(e), I = li.filterProps(e), D = Re(ii.filterProps(e), ["modelValue"]), $ = Re(oi.filterProps(e), ["modelValue"]), z = {
        header: m.value,
        transition: y.value
      };
      return s(or, N(x, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var W;
          return ((W = t.title) == null ? void 0 : W.call(t)) ?? s("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => t.header ? s(me, {
          defaults: {
            VDatePickerHeader: {
              ...z
            }
          }
        }, {
          default: () => {
            var W;
            return [(W = t.header) == null ? void 0 : W.call(t, z)];
          }
        }) : s(ai, N({
          key: "header"
        }, V, z, {
          onClick: r.value !== "month" ? _ : void 0
        }), {
          ...t,
          default: void 0
        }),
        default: () => s(le, null, [s(ni, N(A, {
          disabled: S.value,
          text: v.value,
          "onClick:next": k,
          "onClick:prev": p,
          "onClick:month": C,
          "onClick:year": P
        }), null), s(Zn, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? s(ii, N({
            key: "date-picker-months"
          }, D, {
            modelValue: c.value,
            "onUpdate:modelValue": [(W) => c.value = W, T],
            min: h.value,
            max: g.value,
            year: d.value
          }), null) : r.value === "year" ? s(oi, N({
            key: "date-picker-years"
          }, $, {
            modelValue: d.value,
            "onUpdate:modelValue": [(W) => d.value = W, w],
            min: h.value,
            max: g.value
          }), null) : s(li, N({
            key: "date-picker-month"
          }, I, {
            modelValue: o.value,
            "onUpdate:modelValue": (W) => o.value = W,
            month: c.value,
            "onUpdate:month": [(W) => c.value = W, T],
            year: d.value,
            "onUpdate:year": [(W) => d.value = W, w],
            min: h.value,
            max: g.value
          }), null)]
        })]),
        actions: t.actions
      });
    }), {};
  }
}), By = B({
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
}, "VEmptyState"), Dy = O()({
  name: "VEmptyState",
  props: By(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(E(e, "bgColor")), {
      dimensionStyles: r
    } = ze(e), {
      displayClasses: u
    } = yt();
    function c(d) {
      n("click:action", d);
    }
    return R(() => {
      var g, S, k;
      const d = !!(t.actions || e.actionText), f = !!(t.headline || e.headline), m = !!(t.title || e.title), v = !!(t.text || e.text), y = !!(t.media || e.image || e.icon), h = e.size || (e.image ? 200 : 96);
      return s("div", {
        class: ["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, u.value, e.class],
        style: [o.value, r.value, e.style]
      }, [y && s("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [t.media ? s(me, {
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
        default: () => [t.media()]
      }) : s(le, null, [e.image ? s(Mt, {
        key: "image",
        src: e.image,
        height: h
      }, null) : e.icon ? s(Se, {
        key: "icon",
        color: e.color,
        size: h,
        icon: e.icon
      }, null) : void 0])]), f && s("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [((g = t.headline) == null ? void 0 : g.call(t)) ?? e.headline]), m && s("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [((S = t.title) == null ? void 0 : S.call(t)) ?? e.title]), v && s("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: X(e.textWidth)
        }
      }, [((k = t.text) == null ? void 0 : k.call(t)) ?? e.text]), t.default && s("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [t.default()]), d && s("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [s(me, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            text: e.actionText
          }
        }
      }, {
        default: () => {
          var p;
          return [((p = t.actions) == null ? void 0 : p.call(t, {
            props: {
              onClick: c
            }
          })) ?? s(be, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), la = Symbol.for("vuetify:v-expansion-panel"), vc = B({
  ...ee(),
  ...Ni()
}, "VExpansionPanelText"), ri = O()({
  name: "VExpansionPanelText",
  props: vc(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ye(la);
    if (!t) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = zi(e, t.isSelected);
    return R(() => s(Ua, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [Be(s("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [n.default && l.value && s("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = n.default) == null ? void 0 : o.call(n)])]), [[wt, t.isSelected.value]])];
      }
    })), {};
  }
}), fc = B({
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
}, "VExpansionPanelTitle"), si = O()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: Ot
  },
  props: fc(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ye(la);
    if (!t) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "color"), {
      dimensionStyles: o
    } = ze(e), r = b(() => ({
      collapseIcon: e.collapseIcon,
      disabled: t.disabled.value,
      expanded: t.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), u = b(() => t.isSelected.value ? e.collapseIcon : e.expandIcon);
    return R(() => {
      var c;
      return Be(s("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": t.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, o.value, e.style],
        type: "button",
        tabindex: t.disabled.value ? -1 : void 0,
        disabled: t.disabled.value,
        "aria-expanded": t.isSelected.value,
        onClick: e.readonly ? void 0 : t.toggle
      }, [s("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = n.default) == null ? void 0 : c.call(n, r.value), !e.hideActions && s(me, {
        defaults: {
          VIcon: {
            icon: u.value
          }
        }
      }, {
        default: () => {
          var d;
          return [s("span", {
            class: "v-expansion-panel-title__icon"
          }, [((d = n.actions) == null ? void 0 : d.call(n, r.value)) ?? s(Se, null, null)])];
        }
      })]), [[ct("ripple"), e.ripple]]);
    }), {};
  }
}), mc = B({
  title: String,
  text: String,
  bgColor: String,
  ...je(),
  ...kn(),
  ...Ae(),
  ...ve(),
  ...fc(),
  ...vc()
}, "VExpansionPanel"), My = O()({
  name: "VExpansionPanel",
  props: mc(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = xn(e, la), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "bgColor"), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Ee(e), u = b(() => (t == null ? void 0 : t.disabled.value) || e.disabled), c = b(() => t.group.items.value.reduce((m, v, y) => (t.group.selected.value.includes(v.id) && m.push(y), m), [])), d = b(() => {
      const m = t.group.items.value.findIndex((v) => v.id === t.id);
      return !t.isSelected.value && c.value.some((v) => v - m === 1);
    }), f = b(() => {
      const m = t.group.items.value.findIndex((v) => v.id === t.id);
      return !t.isSelected.value && c.value.some((v) => v - m === -1);
    });
    return pe(la, t), R(() => {
      const m = !!(n.text || e.text), v = !!(n.title || e.title), y = si.filterProps(e), h = ri.filterProps(e);
      return s(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": t.isSelected.value,
          "v-expansion-panel--before-active": d.value,
          "v-expansion-panel--after-active": f.value,
          "v-expansion-panel--disabled": u.value
        }, r.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => [s("div", {
          class: ["v-expansion-panel__shadow", ...o.value]
        }, null), s(me, {
          defaults: {
            VExpansionPanelTitle: {
              ...y
            },
            VExpansionPanelText: {
              ...h
            }
          }
        }, {
          default: () => {
            var g;
            return [v && s(si, {
              key: "title"
            }, {
              default: () => [n.title ? n.title() : e.title]
            }), m && s(ri, {
              key: "text"
            }, {
              default: () => [n.text ? n.text() : e.text]
            }), (g = n.default) == null ? void 0 : g.call(n)];
          }
        })]
      });
    }), {
      groupItem: t
    };
  }
}), Ey = ["default", "accordion", "inset", "popout"], Fy = B({
  flat: Boolean,
  ...Sn(),
  ...gi(mc(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ge(),
  ...ee(),
  ...ve(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => Ey.includes(e)
  }
}, "VExpansionPanels"), $y = O()({
  name: "VExpansionPanels",
  props: Fy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      next: t,
      prev: l
    } = qt(e, la), {
      themeClasses: i
    } = ke(e), o = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return De({
      VExpansionPanel: {
        bgColor: E(e, "bgColor"),
        collapseIcon: E(e, "collapseIcon"),
        color: E(e, "color"),
        eager: E(e, "eager"),
        elevation: E(e, "elevation"),
        expandIcon: E(e, "expandIcon"),
        focusable: E(e, "focusable"),
        hideActions: E(e, "hideActions"),
        readonly: E(e, "readonly"),
        ripple: E(e, "ripple"),
        rounded: E(e, "rounded"),
        static: E(e, "static")
      }
    }), R(() => s(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r;
        return [(r = n.default) == null ? void 0 : r.call(n, {
          prev: l,
          next: t
        })];
      }
    })), {
      next: t,
      prev: l
    };
  }
}), Ly = B({
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
  ...Lt(),
  ...Ct({
    transition: "fab-transition"
  })
}, "VFab"), Oy = O()({
  name: "VFab",
  props: Ly(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), l = G(56), i = j(), {
      resizeRef: o
    } = xt((f) => {
      f.length && (l.value = f[0].target.clientHeight);
    }), r = b(() => e.app || e.absolute), u = b(() => {
      var f;
      return r.value ? ((f = e.location) == null ? void 0 : f.split(" ").shift()) ?? "bottom" : !1;
    }), c = b(() => {
      var f;
      return r.value ? ((f = e.location) == null ? void 0 : f.split(" ")[1]) ?? "end" : !1;
    });
    rt(() => e.app, () => {
      const f = hn({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: u,
        layoutSize: b(() => e.layout ? l.value + 24 : 0),
        elementSize: b(() => l.value + 24),
        active: b(() => e.app && t.value),
        absolute: E(e, "absolute")
      });
      Fe(() => {
        i.value = f.layoutItemStyles.value;
      });
    });
    const d = j();
    return R(() => {
      const f = be.filterProps(e);
      return s("div", {
        ref: d,
        class: ["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${u.value}`]: r.value,
          [`v-fab--${c.value}`]: r.value
        }, e.class],
        style: [e.app ? {
          ...i.value
        } : {
          height: "inherit",
          width: void 0
        }, e.style]
      }, [s("div", {
        class: "v-fab__container"
      }, [s(et, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [Be(s(be, N({
          ref: o
        }, f, {
          active: void 0,
          location: void 0
        }), n), [[wt, e.active]])]
      })])]);
    }), {};
  }
}), Ry = B({
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
  ...Nt({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Te(e).every((a) => a != null && typeof a == "object")
  },
  ...ma({
    clearable: !0
  })
}, "VFileInput"), Ny = O()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: Ry(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const {
      t: i
    } = $e(), o = ae(e, "modelValue", e.modelValue, (x) => Te(x), (x) => !e.multiple && Array.isArray(x) ? x[0] : x), {
      isFocused: r,
      focus: u,
      blur: c
    } = Rt(e), d = b(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = b(() => (o.value ?? []).reduce((x, A) => {
      let {
        size: V = 0
      } = A;
      return x + V;
    }, 0)), m = b(() => bo(f.value, d.value)), v = b(() => (o.value ?? []).map((x) => {
      const {
        name: A = "",
        size: V = 0
      } = x;
      return e.showSize ? `${A} (${bo(V, d.value)})` : A;
    })), y = b(() => {
      var A;
      const x = ((A = o.value) == null ? void 0 : A.length) ?? 0;
      return e.showSize ? i(e.counterSizeString, x, m.value) : i(e.counterString, x);
    }), h = j(), g = j(), S = j(), k = b(() => r.value || e.active), p = b(() => ["plain", "underlined"].includes(e.variant));
    function _() {
      var x;
      S.value !== document.activeElement && ((x = S.value) == null || x.focus()), r.value || u();
    }
    function C(x) {
      var A;
      (A = S.value) == null || A.click();
    }
    function P(x) {
      t("mousedown:control", x);
    }
    function T(x) {
      var A;
      (A = S.value) == null || A.click(), t("click:control", x);
    }
    function w(x) {
      x.stopPropagation(), _(), we(() => {
        o.value = [], yi(e["onClick:clear"], x);
      });
    }
    return q(o, (x) => {
      (!Array.isArray(x) || !x.length) && S.value && (S.value.value = "");
    }), R(() => {
      const x = !!(l.counter || e.counter), A = !!(x || l.details), [V, I] = Gt(n), {
        modelValue: D,
        ...$
      } = Ze.filterProps(e), z = Hi(e);
      return s(Ze, N({
        ref: h,
        modelValue: o.value,
        "onUpdate:modelValue": (W) => o.value = W,
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": p.value
        }, e.class],
        style: e.style,
        "onClick:prepend": C
      }, V, $, {
        centerAffix: !p.value,
        focused: r.value
      }), {
        ...l,
        default: (W) => {
          let {
            id: Z,
            isDisabled: J,
            isDirty: L,
            isReadonly: F,
            isValid: M
          } = W;
          return s(Hn, N({
            ref: g,
            "prepend-icon": e.prependIcon,
            onMousedown: P,
            onClick: T,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, z, {
            id: Z.value,
            active: k.value || L.value,
            dirty: L.value || e.dirty,
            disabled: J.value,
            focused: r.value,
            error: M.value === !1
          }), {
            ...l,
            default: (U) => {
              var ue;
              let {
                props: {
                  class: oe,
                  ...te
                }
              } = U;
              return s(le, null, [s("input", N({
                ref: S,
                type: "file",
                readonly: F.value,
                disabled: J.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (H) => {
                  H.stopPropagation(), F.value && H.preventDefault(), _();
                },
                onChange: (H) => {
                  if (!H.target) return;
                  const ne = H.target;
                  o.value = [...ne.files ?? []];
                },
                onFocus: _,
                onBlur: c
              }, te, I), null), s("div", {
                class: oe
              }, [!!((ue = o.value) != null && ue.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: v.value,
                totalBytes: f.value,
                totalBytesReadable: m.value
              }) : e.chips ? v.value.map((H) => s(zn, {
                key: H,
                size: "small",
                text: H
              }, null)) : v.value.join(", "))])]);
            }
          });
        },
        details: A ? (W) => {
          var Z, J;
          return s(le, null, [(Z = l.details) == null ? void 0 : Z.call(l, W), x && s(le, null, [s("span", null, null), s(tl, {
            active: !!((J = o.value) != null && J.length),
            value: y.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), St({}, h, g, S);
  }
}), zy = B({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...st(),
  ...ee(),
  ...je(),
  ...gn(),
  ...Ae(),
  ...ve({
    tag: "footer"
  }),
  ...ge()
}, "VFooter"), Hy = O()({
  name: "VFooter",
  props: zy(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = j(), {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve(E(e, "color")), {
      borderClasses: r
    } = ft(e), {
      elevationClasses: u
    } = qe(e), {
      roundedClasses: c
    } = Ee(e), d = G(32), {
      resizeRef: f
    } = xt((v) => {
      v.length && (d.value = v[0].target.clientHeight);
    }), m = b(() => e.height === "auto" ? d.value : parseInt(e.height, 10));
    return rt(() => e.app, () => {
      const v = hn({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: b(() => "bottom"),
        layoutSize: m,
        elementSize: b(() => e.height === "auto" ? void 0 : m.value),
        active: b(() => e.app),
        absolute: E(e, "absolute")
      });
      Fe(() => {
        t.value = v.layoutItemStyles.value;
      });
    }), R(() => s(e.tag, {
      ref: f,
      class: ["v-footer", l.value, i.value, r.value, u.value, c.value, e.class],
      style: [o.value, e.app ? t.value : {
        height: X(e.height)
      }, e.style]
    }, n)), {};
  }
}), Wy = B({
  ...ee(),
  ...Zf()
}, "VForm"), jy = O()({
  name: "VForm",
  props: Wy(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, a) {
    let {
      slots: n,
      emit: t
    } = a;
    const l = Jf(e), i = j();
    function o(u) {
      u.preventDefault(), l.reset();
    }
    function r(u) {
      const c = u, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), t("submit", c), c.defaultPrevented || d.then((f) => {
        var v;
        let {
          valid: m
        } = f;
        m && ((v = i.value) == null || v.submit());
      }), c.preventDefault();
    }
    return R(() => {
      var u;
      return s("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: o,
        onSubmit: r
      }, [(u = n.default) == null ? void 0 : u.call(n, l)]);
    }), St(l, i);
  }
}), Yy = B({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...Oi()
}, "VHover"), Gy = O()({
  name: "VHover",
  props: Yy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = Ri(e, (o) => !e.disabled && (t.value = o));
    return () => {
      var o;
      return (o = n.default) == null ? void 0 : o.call(n, {
        isHovering: t.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), Uy = B({
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
}, "VInfiniteScroll"), rr = dt({
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
    intersect: (e, a) => !0
  },
  setup(e, a) {
    let {
      emit: n
    } = a;
    const {
      intersectionRef: t,
      isIntersecting: l
    } = qa((i) => {
    }, e.rootMargin ? {
      rootMargin: e.rootMargin
    } : void 0);
    return q(l, async (i) => {
      n("intersect", e.side, i);
    }), R(() => s("div", {
      class: "v-infinite-scroll-intersect",
      ref: t
    }, [Ke(" ")])), {};
  }
}), qy = O()({
  name: "VInfiniteScroll",
  props: Uy(),
  emits: {
    load: (e) => !0
  },
  setup(e, a) {
    let {
      slots: n,
      emit: t
    } = a;
    const l = j(), i = G("ok"), o = G("ok"), r = b(() => X(e.margin)), u = G(!1);
    function c(C) {
      if (!l.value) return;
      const P = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[P] = C;
    }
    function d() {
      if (!l.value) return 0;
      const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[C];
    }
    function f() {
      if (!l.value) return 0;
      const C = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[C];
    }
    function m() {
      if (!l.value) return 0;
      const C = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[C];
    }
    at(() => {
      l.value && (e.side === "start" ? c(f()) : e.side === "both" && c(f() / 2 - m() / 2));
    });
    function v(C, P) {
      C === "start" ? i.value = P : C === "end" && (o.value = P);
    }
    function y(C) {
      return C === "start" ? i.value : o.value;
    }
    let h = 0;
    function g(C, P) {
      u.value = P, u.value && S(C);
    }
    function S(C) {
      if (e.mode !== "manual" && !u.value) return;
      const P = y(C);
      if (!l.value || ["empty", "loading"].includes(P)) return;
      h = f(), v(C, "loading");
      function T(w) {
        v(C, w), we(() => {
          w === "empty" || w === "error" || (w === "ok" && C === "start" && c(f() - h + d()), e.mode !== "manual" && we(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  S(C);
                });
              });
            });
          }));
        });
      }
      t("load", {
        side: C,
        done: T
      });
    }
    const {
      t: k
    } = $e();
    function p(C, P) {
      var x, A, V, I, D;
      if (e.side !== C && e.side !== "both") return;
      const T = () => S(C), w = {
        side: C,
        props: {
          onClick: T,
          color: e.color
        }
      };
      return P === "error" ? (x = n.error) == null ? void 0 : x.call(n, w) : P === "empty" ? ((A = n.empty) == null ? void 0 : A.call(n, w)) ?? s("div", null, [k(e.emptyText)]) : e.mode === "manual" ? P === "loading" ? ((V = n.loading) == null ? void 0 : V.call(n, w)) ?? s(En, {
        indeterminate: !0,
        color: e.color
      }, null) : ((I = n["load-more"]) == null ? void 0 : I.call(n, w)) ?? s(be, {
        variant: "outlined",
        color: e.color,
        onClick: T
      }, {
        default: () => [k(e.loadMoreText)]
      }) : ((D = n.loading) == null ? void 0 : D.call(n, w)) ?? s(En, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: _
    } = ze(e);
    R(() => {
      const C = e.tag, P = e.side === "start" || e.side === "both", T = e.side === "end" || e.side === "both", w = e.mode === "intersect";
      return s(C, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": P,
          "v-infinite-scroll--end": T
        }],
        style: _.value
      }, {
        default: () => {
          var x;
          return [s("div", {
            class: "v-infinite-scroll__side"
          }, [p("start", i.value)]), l.value && P && w && s(rr, {
            key: "start",
            side: "start",
            onIntersect: g,
            rootRef: l.value,
            rootMargin: r.value
          }, null), (x = n.default) == null ? void 0 : x.call(n), l.value && T && w && s(rr, {
            key: "end",
            side: "end",
            onIntersect: g,
            rootRef: l.value,
            rootMargin: r.value
          }, null), s("div", {
            class: "v-infinite-scroll__side"
          }, [p("end", o.value)])];
        }
      });
    });
  }
}), gc = Symbol.for("vuetify:v-item-group"), Ky = B({
  ...ee(),
  ...Sn({
    selectedClass: "v-item--selected"
  }),
  ...ve(),
  ...ge()
}, "VItemGroup"), Xy = O()({
  name: "VItemGroup",
  props: Ky(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: u
    } = qt(e, gc);
    return () => s(e.tag, {
      class: ["v-item-group", t.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = n.default) == null ? void 0 : c.call(n, {
          isSelected: l,
          select: i,
          next: o,
          prev: r,
          selected: u.value
        })];
      }
    });
  }
}), Zy = O()({
  name: "VItem",
  props: kn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      isSelected: t,
      select: l,
      toggle: i,
      selectedClass: o,
      value: r,
      disabled: u
    } = xn(e, gc);
    return () => {
      var c;
      return (c = n.default) == null ? void 0 : c.call(n, {
        isSelected: t.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: r.value,
        disabled: u.value
      });
    };
  }
}), Jy = Tt("v-kbd"), Qy = B({
  ...ee(),
  ...Ne(),
  ...ls()
}, "VLayout"), eb = O()({
  name: "VLayout",
  props: Qy(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      layoutClasses: t,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = os(e), {
      dimensionStyles: u
    } = ze(e);
    return R(() => {
      var c;
      return s("div", {
        ref: r,
        class: [t.value, e.class],
        style: [u.value, l.value, e.style]
      }, [(c = n.default) == null ? void 0 : c.call(n)]);
    }), {
      getLayoutItem: i,
      items: o
    };
  }
}), tb = B({
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
}, "VLayoutItem"), nb = O()({
  name: "VLayoutItem",
  props: tb(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      layoutItemStyles: t
    } = hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: E(e, "position"),
      elementSize: E(e, "size"),
      layoutSize: E(e, "size"),
      active: E(e, "modelValue"),
      absolute: E(e, "absolute")
    });
    return () => {
      var l;
      return s("div", {
        class: ["v-layout-item", e.class],
        style: [t.value, e.style]
      }, [(l = n.default) == null ? void 0 : l.call(n)]);
    };
  }
}), ab = B({
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
}, "VLazy"), lb = O()({
  name: "VLazy",
  directives: {
    intersect: oa
  },
  props: ab(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      dimensionStyles: t
    } = ze(e), l = ae(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return R(() => Be(s(e.tag, {
      class: ["v-lazy", e.class],
      style: [t.value, e.style]
    }, {
      default: () => [l.value && s(et, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var o;
          return [(o = n.default) == null ? void 0 : o.call(n)];
        }
      })]
    }), [[ct("intersect"), {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), ib = B({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...ee()
}, "VLocaleProvider"), ob = O()({
  name: "VLocaleProvider",
  props: ib(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      rtlClasses: t
    } = Gd(e);
    return R(() => {
      var l;
      return s("div", {
        class: ["v-locale-provider", t.value, e.class],
        style: e.style
      }, [(l = n.default) == null ? void 0 : l.call(n)]);
    }), {};
  }
}), rb = B({
  scrollable: Boolean,
  ...ee(),
  ...Ne(),
  ...ve({
    tag: "main"
  })
}, "VMain"), sb = O()({
  name: "VMain",
  props: rb(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      dimensionStyles: t
    } = ze(e), {
      mainStyles: l
    } = is(), {
      ssrBootStyles: i
    } = yn();
    return R(() => s(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [l.value, i.value, t.value, e.style]
    }, {
      default: () => {
        var o, r;
        return [e.scrollable ? s("div", {
          class: "v-main__scroller"
        }, [(o = n.default) == null ? void 0 : o.call(n)]) : (r = n.default) == null ? void 0 : r.call(n)];
      }
    })), {};
  }
});
function ub(e) {
  let {
    rootEl: a,
    isSticky: n,
    layoutItemStyles: t
  } = e;
  const l = G(!1), i = G(0), o = b(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: X(i.value)
    } : {
      top: t.value.top
    }];
  });
  at(() => {
    q(n, (c) => {
      c ? window.addEventListener("scroll", u, {
        passive: !0
      }) : window.removeEventListener("scroll", u);
    }, {
      immediate: !0
    });
  }), nt(() => {
    window.removeEventListener("scroll", u);
  });
  let r = 0;
  function u() {
    const c = r > window.scrollY ? "up" : "down", d = a.value.getBoundingClientRect(), f = parseFloat(t.value.top ?? 0), m = window.scrollY - Math.max(0, i.value - f), v = d.height + Math.max(i.value, f) - window.scrollY - window.innerHeight, y = parseFloat(getComputedStyle(a.value).getPropertyValue("--v-body-scroll-y")) || 0;
    d.height < window.innerHeight - f ? (l.value = "top", i.value = f) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + d.top - y, l.value = !0) : c === "down" && v <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && m <= 0 && (y ? l.value !== "top" && (i.value = -m + y + f, l.value = "top") : (i.value = d.top + m, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const cb = 100, db = 20;
function sr(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function ur(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let a = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t)
      continue;
    const t = sr(a), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    a += (l - t) * Math.abs(l), n === e.length - 1 && (a *= 0.5);
  }
  return sr(a) * 1e3;
}
function vb() {
  const e = {};
  function a(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new od(db))).push([l.timeStamp, i]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function t(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], u = [];
    for (const d of i) {
      if (o[0] - d[0] > cb) break;
      r.push({
        t: d[0],
        d: d[1].clientX
      }), u.push({
        t: d[0],
        d: d[1].clientY
      });
    }
    return {
      x: ur(r),
      y: ur(u),
      get direction() {
        const {
          x: d,
          y: f
        } = this, [m, v] = [Math.abs(d), Math.abs(f)];
        return m > v && d >= 0 ? "right" : m > v && d <= 0 ? "left" : v > m && f >= 0 ? "down" : v > m && f <= 0 ? "up" : fb();
      }
    };
  }
  return {
    addMovement: a,
    endTouch: n,
    getVelocity: t
  };
}
function fb() {
  throw new Error();
}
function mb(e) {
  let {
    el: a,
    isActive: n,
    isTemporary: t,
    width: l,
    touchless: i,
    position: o
  } = e;
  at(() => {
    window.addEventListener("touchstart", k, {
      passive: !0
    }), window.addEventListener("touchmove", p, {
      passive: !1
    }), window.addEventListener("touchend", _, {
      passive: !0
    });
  }), nt(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", p), window.removeEventListener("touchend", _);
  });
  const r = b(() => ["left", "right"].includes(o.value)), {
    addMovement: u,
    endTouch: c,
    getVelocity: d
  } = vb();
  let f = !1;
  const m = G(!1), v = G(0), y = G(0);
  let h;
  function g(P, T) {
    return (o.value === "left" ? P : o.value === "right" ? document.documentElement.clientWidth - P : o.value === "top" ? P : o.value === "bottom" ? document.documentElement.clientHeight - P : In()) - (T ? l.value : 0);
  }
  function S(P) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const w = o.value === "left" ? (P - y.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - P - y.value) / l.value : o.value === "top" ? (P - y.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - P - y.value) / l.value : In();
    return T ? Math.max(0, Math.min(1, w)) : w;
  }
  function k(P) {
    if (i.value) return;
    const T = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY, x = 25, A = o.value === "left" ? T < x : o.value === "right" ? T > document.documentElement.clientWidth - x : o.value === "top" ? w < x : o.value === "bottom" ? w > document.documentElement.clientHeight - x : In(), V = n.value && (o.value === "left" ? T < l.value : o.value === "right" ? T > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : In());
    (A || V || n.value && t.value) && (h = [T, w], y.value = g(r.value ? T : w, n.value), v.value = S(r.value ? T : w), f = y.value > -20 && y.value < 80, c(P), u(P));
  }
  function p(P) {
    const T = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY;
    if (f) {
      if (!P.cancelable) {
        f = !1;
        return;
      }
      const A = Math.abs(T - h[0]), V = Math.abs(w - h[1]);
      (r.value ? A > V && A > 3 : V > A && V > 3) ? (m.value = !0, f = !1) : (r.value ? V : A) > 3 && (f = !1);
    }
    if (!m.value) return;
    P.preventDefault(), u(P);
    const x = S(r.value ? T : w, !1);
    v.value = Math.max(0, Math.min(1, x)), x > 1 ? y.value = g(r.value ? T : w, !0) : x < 0 && (y.value = g(r.value ? T : w, !1));
  }
  function _(P) {
    if (f = !1, !m.value) return;
    u(P), m.value = !1;
    const T = d(P.changedTouches[0].identifier), w = Math.abs(T.x), x = Math.abs(T.y);
    (r.value ? w > x && w > 400 : x > w && x > 3) ? n.value = T.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || In()) : n.value = v.value > 0.5;
  }
  const C = b(() => m.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : In(),
    transition: "none"
  } : void 0);
  return rt(m, () => {
    var w, x;
    const P = ((w = a.value) == null ? void 0 : w.style.transform) ?? null, T = ((x = a.value) == null ? void 0 : x.style.transition) ?? null;
    Fe(() => {
      var A, V, I, D;
      (V = a.value) == null || V.style.setProperty("transform", ((A = C.value) == null ? void 0 : A.transform) || "none"), (D = a.value) == null || D.style.setProperty("transition", ((I = C.value) == null ? void 0 : I.transition) || null);
    }), tt(() => {
      var A, V;
      (A = a.value) == null || A.style.setProperty("transform", P), (V = a.value) == null || V.style.setProperty("transition", T);
    });
  }), {
    isDragging: m,
    dragProgress: v,
    dragStyles: C
  };
}
function In() {
  throw new Error();
}
const gb = ["start", "end", "left", "right", "top", "bottom"], hb = B({
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
    validator: (e) => gb.includes(e)
  },
  sticky: Boolean,
  ...st(),
  ...ee(),
  ...Oi(),
  ...mn({
    mobile: null
  }),
  ...je(),
  ...gn(),
  ...Ae(),
  ...ve({
    tag: "nav"
  }),
  ...ge()
}, "VNavigationDrawer"), yb = O()({
  name: "VNavigationDrawer",
  props: hb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const {
      isRtl: i
    } = We(), {
      themeClasses: o
    } = ke(e), {
      borderClasses: r
    } = ft(e), {
      backgroundColorClasses: u,
      backgroundColorStyles: c
    } = Ve(E(e, "color")), {
      elevationClasses: d
    } = qe(e), {
      displayClasses: f,
      mobile: m
    } = yt(e), {
      roundedClasses: v
    } = Ee(e), y = ys(), h = ae(e, "modelValue", null, (M) => !!M), {
      ssrBootStyles: g
    } = yn(), {
      scopeId: S
    } = Cn(), k = j(), p = G(!1), {
      runOpenDelay: _,
      runCloseDelay: C
    } = Ri(e, (M) => {
      p.value = M;
    }), P = b(() => e.rail && e.expandOnHover && p.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), T = b(() => Bl(e.location, i.value)), w = b(() => e.persistent), x = b(() => !e.permanent && (m.value || e.temporary)), A = b(() => e.sticky && !x.value && T.value !== "bottom");
    rt(() => e.expandOnHover && e.rail != null, () => {
      q(p, (M) => t("update:rail", !M));
    }), rt(() => !e.disableResizeWatcher, () => {
      q(x, (M) => !e.permanent && we(() => h.value = !M));
    }), rt(() => !e.disableRouteWatcher && !!y, () => {
      q(y.currentRoute, () => x.value && (h.value = !1));
    }), q(() => e.permanent, (M) => {
      M && (h.value = !0);
    }), e.modelValue == null && !x.value && (h.value = e.permanent || !m.value);
    const {
      isDragging: V,
      dragProgress: I
    } = mb({
      el: k,
      isActive: h,
      isTemporary: x,
      width: P,
      touchless: E(e, "touchless"),
      position: T
    }), D = b(() => {
      const M = x.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : P.value;
      return V.value ? M * I.value : M;
    }), $ = b(() => ["top", "bottom"].includes(e.location) ? 0 : P.value), {
      layoutItemStyles: z,
      layoutItemScrimStyles: W
    } = hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: T,
      layoutSize: D,
      elementSize: $,
      active: b(() => h.value || V.value),
      disableTransitions: b(() => V.value),
      absolute: b(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || A.value && typeof Z.value != "string"
      ))
    }), {
      isStuck: Z,
      stickyStyles: J
    } = ub({
      rootEl: k,
      isSticky: A,
      layoutItemStyles: z
    }), L = Ve(b(() => typeof e.scrim == "string" ? e.scrim : null)), F = b(() => ({
      ...V.value ? {
        opacity: I.value * 0.2,
        transition: "none"
      } : void 0,
      ...W.value
    }));
    return De({
      VList: {
        bgColor: "transparent"
      }
    }), R(() => {
      const M = l.image || e.image;
      return s(le, null, [s(e.tag, N({
        ref: k,
        onMouseenter: _,
        onMouseleave: C,
        class: ["v-navigation-drawer", `v-navigation-drawer--${T.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": p.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": x.value,
          "v-navigation-drawer--persistent": w.value,
          "v-navigation-drawer--active": h.value,
          "v-navigation-drawer--sticky": A.value
        }, o.value, u.value, r.value, f.value, d.value, v.value, e.class],
        style: [c.value, z.value, g.value, J.value, e.style, ["top", "bottom"].includes(T.value) ? {
          height: "auto"
        } : {}]
      }, S, n), {
        default: () => {
          var U, oe, te;
          return [M && s("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? s(me, {
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
          }, l.image) : s(Mt, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && s("div", {
            class: "v-navigation-drawer__prepend"
          }, [(U = l.prepend) == null ? void 0 : U.call(l)]), s("div", {
            class: "v-navigation-drawer__content"
          }, [(oe = l.default) == null ? void 0 : oe.call(l)]), l.append && s("div", {
            class: "v-navigation-drawer__append"
          }, [(te = l.append) == null ? void 0 : te.call(l)])];
        }
      }), s(Wt, {
        name: "fade-transition"
      }, {
        default: () => [x.value && (V.value || h.value) && !!e.scrim && s("div", N({
          class: ["v-navigation-drawer__scrim", L.backgroundColorClasses.value],
          style: [F.value, L.backgroundColorStyles.value],
          onClick: () => {
            w.value || (h.value = !1);
          }
        }, S), null)]
      })]);
    }), {
      isStuck: Z
    };
  }
}), bb = dt({
  name: "VNoSsr",
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = nu();
    return () => {
      var l;
      return t.value && ((l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), Sb = B({
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
}, "VOtpInput"), kb = O()({
  name: "VOtpInput",
  props: Sb(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const {
      dimensionStyles: i
    } = ze(e), {
      isFocused: o,
      focus: r,
      blur: u
    } = Rt(e), c = ae(e, "modelValue", "", (w) => w == null ? [] : String(w).split(""), (w) => w.join("")), {
      t: d
    } = $e(), f = b(() => Number(e.length)), m = b(() => Array(f.value).fill(0)), v = j(-1), y = j(), h = j([]), g = b(() => h.value[v.value]);
    function S() {
      if (T(g.value.value)) {
        g.value.value = "";
        return;
      }
      const w = c.value.slice(), x = g.value.value;
      w[v.value] = x;
      let A = null;
      v.value > c.value.length ? A = c.value.length + 1 : v.value + 1 !== f.value && (A = "next"), c.value = w, A && nn(y.value, A);
    }
    function k(w) {
      const x = c.value.slice(), A = v.value;
      let V = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(w.key) && (w.preventDefault(), w.key === "ArrowLeft" ? V = "prev" : w.key === "ArrowRight" ? V = "next" : ["Backspace", "Delete"].includes(w.key) && (x[v.value] = "", c.value = x, v.value > 0 && w.key === "Backspace" ? V = "prev" : requestAnimationFrame(() => {
        var I;
        (I = h.value[A]) == null || I.select();
      })), requestAnimationFrame(() => {
        V != null && nn(y.value, V);
      }));
    }
    function p(w, x) {
      var V, I;
      x.preventDefault(), x.stopPropagation();
      const A = ((V = x == null ? void 0 : x.clipboardData) == null ? void 0 : V.getData("Text").slice(0, f.value)) ?? "";
      T(A) || (c.value = A.split(""), (I = h.value) == null || I[w].blur());
    }
    function _() {
      c.value = [];
    }
    function C(w, x) {
      r(), v.value = x;
    }
    function P() {
      u(), v.value = -1;
    }
    function T(w) {
      return e.type === "number" && /[^0-9]/g.test(w);
    }
    return De({
      VField: {
        color: b(() => e.color),
        bgColor: b(() => e.color),
        baseColor: b(() => e.baseColor),
        disabled: b(() => e.disabled),
        error: b(() => e.error),
        variant: b(() => e.variant)
      }
    }, {
      scoped: !0
    }), q(c, (w) => {
      w.length === f.value && t("finish", w.join(""));
    }, {
      deep: !0
    }), q(v, (w) => {
      w < 0 || we(() => {
        var x;
        (x = h.value[w]) == null || x.select();
      });
    }), R(() => {
      var A;
      const [w, x] = Gt(n);
      return s("div", N({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, w), [s("div", {
        ref: y,
        class: "v-otp-input__content",
        style: [i.value]
      }, [m.value.map((V, I) => s(le, null, [e.divider && I !== 0 && s("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), s(Hn, {
        focused: o.value && e.focusAll || v.value === I,
        key: I
      }, {
        ...l,
        loader: void 0,
        default: () => s("input", {
          ref: (D) => h.value[I] = D,
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
          onFocus: (D) => C(D, I),
          onBlur: P,
          onKeydown: k,
          onPaste: (D) => p(I, D)
        }, null)
      })])), s("input", N({
        class: "v-otp-input-input",
        type: "hidden"
      }, x, {
        value: c.value.join("")
      }), null), s(It, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var V;
          return [((V = l.loader) == null ? void 0 : V.call(l)) ?? s(En, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (A = l.default) == null ? void 0 : A.call(l)])]);
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
function xb(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const wb = B({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...ee()
}, "VParallax"), Cb = O()({
  name: "VParallax",
  props: wb(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      intersectionRef: t,
      isIntersecting: l
    } = qa(), {
      resizeRef: i,
      contentRect: o
    } = xt(), {
      height: r
    } = yt(), u = j();
    Fe(() => {
      var v;
      t.value = i.value = (v = u.value) == null ? void 0 : v.$el;
    });
    let c;
    q(l, (v) => {
      v ? (c = wi(t.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", m, {
        passive: !0
      }), m()) : c.removeEventListener("scroll", m);
    }), nt(() => {
      c == null || c.removeEventListener("scroll", m);
    }), q(r, m), q(() => {
      var v;
      return (v = o.value) == null ? void 0 : v.height;
    }, m);
    const d = b(() => 1 - Oe(+e.scale));
    let f = -1;
    function m() {
      l.value && (cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var C;
        const v = ((C = u.value) == null ? void 0 : C.$el).querySelector(".v-img__img");
        if (!v) return;
        const y = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, h = c instanceof Document ? window.scrollY : c.scrollTop, g = t.value.getBoundingClientRect().top + h, S = o.value.height, k = g + (S - y) / 2, p = xb((h - k) * d.value), _ = Math.max(1, (d.value * (y - S) + S) / S);
        v.style.setProperty("transform", `translateY(${p}px) scale(${_})`);
      }));
    }
    return R(() => s(Mt, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: u,
      cover: !0,
      onLoadstart: m,
      onLoad: m
    }, n)), {};
  }
}), Vb = B({
  ...Ja({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), Pb = O()({
  name: "VRadio",
  props: Vb(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => {
      const t = jt.filterProps(e);
      return s(jt, N(t, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), n);
    }), {};
  }
}), _b = B({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Nt(),
  ...Re(Mi(), ["multiple"]),
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
}, "VRadioGroup"), Ib = O()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: _b(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const l = Ue(), i = b(() => e.id || `radio-group-${l}`), o = ae(e, "modelValue");
    return R(() => {
      const [r, u] = Gt(n), c = Ze.filterProps(e), d = jt.filterProps(e), f = t.label ? t.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return s(Ze, N({
        class: ["v-radio-group", e.class],
        style: e.style
      }, r, c, {
        modelValue: o.value,
        "onUpdate:modelValue": (m) => o.value = m,
        id: i.value
      }), {
        ...t,
        default: (m) => {
          let {
            id: v,
            messagesId: y,
            isDisabled: h,
            isReadonly: g
          } = m;
          return s(le, null, [f && s(Nn, {
            id: v.value
          }, {
            default: () => [f]
          }), s(ps, N(d, {
            id: v.value,
            "aria-describedby": y.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: h.value,
            readonly: g.value,
            "aria-labelledby": f ? v.value : void 0,
            multiple: !1
          }, u, {
            modelValue: o.value,
            "onUpdate:modelValue": (S) => o.value = S
          }), t)]);
        }
      });
    }), {};
  }
}), pb = B({
  ...da(),
  ...Nt(),
  ...Cu(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), Ab = O()({
  name: "VRangeSlider",
  props: pb(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, a) {
    let {
      slots: n,
      emit: t
    } = a;
    const l = j(), i = j(), o = j(), {
      rtlClasses: r
    } = We();
    function u(A) {
      if (!l.value || !i.value) return;
      const V = Zl(A, l.value.$el, e.direction), I = Zl(A, i.value.$el, e.direction), D = Math.abs(V), $ = Math.abs(I);
      return D < $ || D === $ && V < 0 ? l.value.$el : i.value.$el;
    }
    const c = Vu(e), d = ae(e, "modelValue", void 0, (A) => A != null && A.length ? A.map((V) => c.roundValue(V)) : [0, 0]), {
      activeThumbRef: f,
      hasLabels: m,
      max: v,
      min: y,
      mousePressed: h,
      onSliderMousedown: g,
      onSliderTouchstart: S,
      position: k,
      trackContainerRef: p,
      readonly: _
    } = Pu({
      props: e,
      steps: c,
      onSliderStart: () => {
        t("start", d.value);
      },
      onSliderEnd: (A) => {
        var D;
        let {
          value: V
        } = A;
        const I = f.value === ((D = l.value) == null ? void 0 : D.$el) ? [V, d.value[1]] : [d.value[0], V];
        !e.strict && I[0] < I[1] && (d.value = I), t("end", d.value);
      },
      onSliderMove: (A) => {
        var $, z, W, Z;
        let {
          value: V
        } = A;
        const [I, D] = d.value;
        !e.strict && I === D && I !== y.value && (f.value = V > I ? ($ = i.value) == null ? void 0 : $.$el : (z = l.value) == null ? void 0 : z.$el, (W = f.value) == null || W.focus()), f.value === ((Z = l.value) == null ? void 0 : Z.$el) ? d.value = [Math.min(V, D), D] : d.value = [I, Math.max(I, V)];
      },
      getActiveThumb: u
    }), {
      isFocused: C,
      focus: P,
      blur: T
    } = Rt(e), w = b(() => k(d.value[0])), x = b(() => k(d.value[1]));
    return R(() => {
      const A = Ze.filterProps(e), V = !!(e.label || n.label || n.prepend);
      return s(Ze, N({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!n["tick-label"] || m.value,
          "v-slider--focused": C.value,
          "v-slider--pressed": h.value,
          "v-slider--disabled": e.disabled
        }, r.value, e.class],
        style: e.style,
        ref: o
      }, A, {
        focused: C.value
      }), {
        ...n,
        prepend: V ? (I) => {
          var D, $;
          return s(le, null, [((D = n.label) == null ? void 0 : D.call(n, I)) ?? (e.label ? s(Nn, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), ($ = n.prepend) == null ? void 0 : $.call(n, I)]);
        } : void 0,
        default: (I) => {
          var z, W;
          let {
            id: D,
            messagesId: $
          } = I;
          return s("div", {
            class: "v-slider__container",
            onMousedown: _.value ? void 0 : g,
            onTouchstartPassive: _.value ? void 0 : S
          }, [s("input", {
            id: `${D.value}_start`,
            name: e.name || D.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[0]
          }, null), s("input", {
            id: `${D.value}_stop`,
            name: e.name || D.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[1]
          }, null), s(_u, {
            ref: p,
            start: w.value,
            stop: x.value
          }, {
            "tick-label": n["tick-label"]
          }), s(Jl, {
            ref: l,
            "aria-describedby": $.value,
            focused: C && f.value === ((z = l.value) == null ? void 0 : z.$el),
            modelValue: d.value[0],
            "onUpdate:modelValue": (Z) => d.value = [Z, d.value[1]],
            onFocus: (Z) => {
              var J, L, F, M;
              P(), f.value = (J = l.value) == null ? void 0 : J.$el, d.value[0] === d.value[1] && d.value[1] === y.value && Z.relatedTarget !== ((L = i.value) == null ? void 0 : L.$el) && ((F = l.value) == null || F.$el.blur(), (M = i.value) == null || M.$el.focus());
            },
            onBlur: () => {
              T(), f.value = void 0;
            },
            min: y.value,
            max: d.value[1],
            position: w.value,
            ripple: e.ripple
          }, {
            "thumb-label": n["thumb-label"]
          }), s(Jl, {
            ref: i,
            "aria-describedby": $.value,
            focused: C && f.value === ((W = i.value) == null ? void 0 : W.$el),
            modelValue: d.value[1],
            "onUpdate:modelValue": (Z) => d.value = [d.value[0], Z],
            onFocus: (Z) => {
              var J, L, F, M;
              P(), f.value = (J = i.value) == null ? void 0 : J.$el, d.value[0] === d.value[1] && d.value[0] === v.value && Z.relatedTarget !== ((L = l.value) == null ? void 0 : L.$el) && ((F = i.value) == null || F.$el.blur(), (M = l.value) == null || M.$el.focus());
            },
            onBlur: () => {
              T(), f.value = void 0;
            },
            min: d.value[0],
            max: v.value,
            position: x.value,
            ripple: e.ripple
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Tb = B({
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
}, "VRating"), Bb = O()({
  name: "VRating",
  props: Tb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      t
    } = $e(), {
      themeClasses: l
    } = ke(e), i = ae(e, "modelValue"), o = b(() => Oe(parseFloat(i.value), 0, +e.length)), r = b(() => _t(Number(e.length), 1)), u = b(() => r.value.flatMap((h) => e.halfIncrements ? [h - 0.5, h] : [h])), c = G(-1), d = b(() => u.value.map((h) => {
      const g = e.hover && c.value > -1, S = o.value >= h, k = c.value >= h, _ = (g ? k : S) ? e.fullIcon : e.emptyIcon, C = e.activeColor ?? e.color, P = S || k ? C : e.color;
      return {
        isFilled: S,
        isHovered: k,
        icon: _,
        color: P
      };
    })), f = b(() => [0, ...u.value].map((h) => {
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
    })), m = b(() => e.name ?? `v-rating-${Ue()}`);
    function v(h) {
      var w, x;
      let {
        value: g,
        index: S,
        showStar: k = !0
      } = h;
      const {
        onMouseenter: p,
        onMouseleave: _,
        onClick: C
      } = f.value[S + 1], P = `${m.value}-${String(g).replace(".", "-")}`, T = {
        color: (w = d.value[S]) == null ? void 0 : w.color,
        density: e.density,
        disabled: e.disabled,
        icon: (x = d.value[S]) == null ? void 0 : x.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return s(le, null, [s("label", {
        for: P,
        class: {
          "v-rating__item--half": e.halfIncrements && g % 1 > 0,
          "v-rating__item--full": e.halfIncrements && g % 1 === 0
        },
        onMouseenter: p,
        onMouseleave: _,
        onClick: C
      }, [s("span", {
        class: "v-rating__hidden"
      }, [t(e.itemAriaLabel, g, e.length)]), k ? n.item ? n.item({
        ...d.value[S],
        props: T,
        value: g,
        index: S,
        rating: o.value
      }) : s(be, N({
        "aria-label": t(e.itemAriaLabel, g, e.length)
      }, T), null) : void 0]), s("input", {
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
    function y(h) {
      return n["item-label"] ? n["item-label"](h) : h.label ? s("span", null, [h.label]) : s("span", null, [Ke(" ")]);
    }
    return R(() => {
      var g;
      const h = !!((g = e.itemLabels) != null && g.length) || n["item-label"];
      return s(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [s(v, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), r.value.map((S, k) => {
          var p, _;
          return s("div", {
            class: "v-rating__wrapper"
          }, [h && e.itemLabelPosition === "top" ? y({
            value: S,
            index: k,
            label: (p = e.itemLabels) == null ? void 0 : p[k]
          }) : void 0, s("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? s(le, null, [s(v, {
            value: S - 0.5,
            index: k * 2
          }, null), s(v, {
            value: S,
            index: k * 2 + 1
          }, null)]) : s(v, {
            value: S,
            index: k
          }, null)]), h && e.itemLabelPosition === "bottom" ? y({
            value: S,
            index: k,
            label: (_ = e.itemLabels) == null ? void 0 : _[k]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), Db = {
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
function Mb(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return s("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [a]);
}
function cr(e) {
  const [a, n] = e.split("@");
  return Array.from({
    length: n
  }).map(() => hl(a));
}
function hl(e) {
  let a = [];
  if (!e) return a;
  const n = Db[e];
  if (e !== n) {
    if (e.includes(",")) return dr(e);
    if (e.includes("@")) return cr(e);
    n.includes(",") ? a = dr(n) : n.includes("@") ? a = cr(n) : n && a.push(hl(n));
  }
  return [Mb(e, a)];
}
function dr(e) {
  return e.replace(/\s/g, "").split(",").map(hl);
}
const Eb = B({
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
}, "VSkeletonLoader"), Fb = O()({
  name: "VSkeletonLoader",
  props: Eb(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: l
    } = Ve(E(e, "color")), {
      dimensionStyles: i
    } = ze(e), {
      elevationClasses: o
    } = qe(e), {
      themeClasses: r
    } = ke(e), {
      t: u
    } = $e(), c = b(() => hl(Te(e.type).join(",")));
    return R(() => {
      var m;
      const d = !n.default || e.loading, f = e.boilerplate || !d ? {} : {
        ariaLive: "polite",
        ariaLabel: u(e.loadingText),
        role: "alert"
      };
      return s("div", N({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, r.value, t.value, o.value],
        style: [l.value, d ? i.value : {}]
      }, f), [d ? c.value : (m = n.default) == null ? void 0 : m.call(n)]);
    }), {};
  }
}), $b = O()({
  name: "VSlideGroupItem",
  props: kn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = xn(e, Ls);
    return () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n, {
        isSelected: t.isSelected.value,
        select: t.select,
        toggle: t.toggle,
        selectedClass: t.selectedClass.value
      });
    };
  }
});
function Lb(e) {
  const a = G(e());
  let n = -1;
  function t() {
    clearInterval(n);
  }
  function l() {
    t(), we(() => a.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, u = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (t(), a.value <= 0) return;
    const c = performance.now();
    n = window.setInterval(() => {
      const d = performance.now() - c + u;
      a.value = Math.max(e() - d, 0), a.value <= 0 && t();
    }, u);
  }
  return tt(t), {
    clear: t,
    time: a,
    start: i,
    reset: l
  };
}
const Ob = B({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...Lt({
    location: "bottom"
  }),
  ...On(),
  ...Ae(),
  ...bt(),
  ...ge(),
  ...Re(fa({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), Rb = O()({
  name: "VSnackbar",
  props: Ob(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), {
      positionClasses: l
    } = Rn(e), {
      scopeId: i
    } = Cn(), {
      themeClasses: o
    } = ke(e), {
      colorClasses: r,
      colorStyles: u,
      variantClasses: c
    } = bn(e), {
      roundedClasses: d
    } = Ee(e), f = Lb(() => Number(e.timeout)), m = j(), v = j(), y = G(!1), h = G(0), g = j(), S = ye(Xn, void 0);
    rt(() => !!S, () => {
      const V = is();
      Fe(() => {
        g.value = V.mainStyles.value;
      });
    }), q(t, p), q(() => e.timeout, p), at(() => {
      t.value && p();
    });
    let k = -1;
    function p() {
      f.reset(), window.clearTimeout(k);
      const V = Number(e.timeout);
      if (!t.value || V === -1) return;
      const I = mi(v.value);
      f.start(I), k = window.setTimeout(() => {
        t.value = !1;
      }, V);
    }
    function _() {
      f.reset(), window.clearTimeout(k);
    }
    function C() {
      y.value = !0, _();
    }
    function P() {
      y.value = !1, p();
    }
    function T(V) {
      h.value = V.touches[0].clientY;
    }
    function w(V) {
      Math.abs(h.value - V.changedTouches[0].clientY) > 50 && (t.value = !1);
    }
    function x() {
      y.value && P();
    }
    const A = b(() => e.location.split(" ").reduce((V, I) => (V[`v-snackbar--${I}`] = !0, V), {}));
    return R(() => {
      const V = It.filterProps(e), I = !!(n.default || n.text || e.text);
      return s(It, N({
        ref: m,
        class: ["v-snackbar", {
          "v-snackbar--active": t.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, A.value, l.value, e.class],
        style: [g.value, e.style]
      }, V, {
        modelValue: t.value,
        "onUpdate:modelValue": (D) => t.value = D,
        contentProps: N({
          class: ["v-snackbar__wrapper", o.value, r.value, d.value, c.value],
          style: [u.value],
          onPointerenter: C,
          onPointerleave: P
        }, V.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: T,
        onTouchend: w,
        onAfterLeave: x
      }, i), {
        default: () => {
          var D, $;
          return [Ut(!1, "v-snackbar"), e.timer && !y.value && s("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [s(Ka, {
            ref: v,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": f.time.value
          }, null)]), I && s("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((D = n.text) == null ? void 0 : D.call(n)) ?? e.text, ($ = n.default) == null ? void 0 : $.call(n)]), n.actions && s(me, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [s("div", {
              class: "v-snackbar__actions"
            }, [n.actions({
              isActive: t
            })])]
          })];
        },
        activator: n.activator
      });
    }), St({}, m);
  }
}), hc = B({
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
}, "Line"), yc = B({
  autoLineWidth: Boolean,
  ...hc()
}, "VBarline"), vr = O()({
  name: "VBarline",
  props: yc(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = Ue(), l = b(() => e.id || `barline-${t}`), i = b(() => Number(e.autoDrawDuration) || 500), o = b(() => !!(e.showLabels || e.labels.length > 0 || n != null && n.label)), r = b(() => parseFloat(e.lineWidth) || 4), u = b(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = b(() => ({
      minX: 0,
      maxX: u.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), d = b(() => e.modelValue.map((h) => He(h, e.itemValue, h)));
    function f(h, g) {
      const {
        minX: S,
        maxX: k,
        minY: p,
        maxY: _
      } = g, C = h.length;
      let P = e.max != null ? Number(e.max) : Math.max(...h), T = e.min != null ? Number(e.min) : Math.min(...h);
      T > 0 && e.min == null && (T = 0), P < 0 && e.max == null && (P = 0);
      const w = k / C, x = (_ - p) / (P - T || 1), A = _ - Math.abs(T * x);
      return h.map((V, I) => {
        const D = Math.abs(x * V);
        return {
          x: S + I * w,
          y: A - D + +(V < 0) * D,
          height: D,
          value: V
        };
      });
    }
    const m = b(() => {
      const h = [], g = f(d.value, c.value), S = g.length;
      for (let k = 0; h.length < S; k++) {
        const p = g[k];
        let _ = e.labels[k];
        _ || (_ = typeof p == "object" ? p.value : p), h.push({
          x: p.x,
          value: String(_)
        });
      }
      return h;
    }), v = b(() => f(d.value, c.value)), y = b(() => (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2);
    R(() => {
      const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return s("svg", {
        display: "block"
      }, [s("defs", null, [s("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [h.map((g, S) => s("stop", {
        offset: S / Math.max(h.length - 1, 1),
        "stop-color": g || "currentColor"
      }, null))])]), s("clipPath", {
        id: `${l.value}-clip`
      }, [v.value.map((g) => s("rect", {
        x: g.x + y.value,
        y: g.y,
        width: r.value,
        height: g.height,
        rx: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0,
        ry: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0
      }, [e.autoDraw && s(le, null, [s("animate", {
        attributeName: "y",
        from: g.y + g.height,
        to: g.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), s("animate", {
        attributeName: "height",
        from: "0",
        to: g.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && s("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [m.value.map((g, S) => {
        var k;
        return s("text", {
          x: g.x + y.value + r.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((k = n.label) == null ? void 0 : k.call(n, {
          index: S,
          value: g.value
        })) ?? g.value]);
      })]), s("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [s("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function Nb(e, a) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (n ? `M${l.x} ${t - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const u = e[r + 1], c = e[r - 1] || l, d = u && zb(u, o, c);
    if (!u || d)
      return `L${o.x} ${o.y}`;
    const f = Math.min(fr(c, o), fr(u, o)), v = f / 2 < a ? f / 2 : a, y = mr(c, o, v), h = mr(u, o, v);
    return `L${y.x} ${y.y}S${o.x} ${o.y} ${h.x} ${h.y}`;
  }).join("") + (n ? `L${i.x} ${t - l.x + 2} Z` : "");
}
function Va(e) {
  return parseInt(e, 10);
}
function zb(e, a, n) {
  return Va(e.x + n.x) === Va(2 * a.x) && Va(e.y + n.y) === Va(2 * a.y);
}
function fr(e, a) {
  return Math.sqrt(Math.pow(a.x - e.x, 2) + Math.pow(a.y - e.y, 2));
}
function mr(e, a, n) {
  const t = {
    x: e.x - a.x,
    y: e.y - a.y
  }, l = Math.sqrt(t.x * t.x + t.y * t.y), i = {
    x: t.x / l,
    y: t.y / l
  };
  return {
    x: a.x + i.x * n,
    y: a.y + i.y * n
  };
}
const bc = B({
  fill: Boolean,
  ...hc()
}, "VTrendline"), gr = O()({
  name: "VTrendline",
  props: bc(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = Ue(), l = b(() => e.id || `trendline-${t}`), i = b(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = j(0), r = j(null);
    function u(g, S) {
      const {
        minX: k,
        maxX: p,
        minY: _,
        maxY: C
      } = S, P = g.length, T = e.max != null ? Number(e.max) : Math.max(...g), w = e.min != null ? Number(e.min) : Math.min(...g), x = (p - k) / (P - 1), A = (C - _) / (T - w || 1);
      return g.map((V, I) => ({
        x: k + I * x,
        y: C - (V - w) * A,
        value: V
      }));
    }
    const c = b(() => !!(e.showLabels || e.labels.length > 0 || n != null && n.label)), d = b(() => parseFloat(e.lineWidth) || 4), f = b(() => Number(e.width)), m = b(() => {
      const g = Number(e.padding);
      return {
        minX: g,
        maxX: f.value - g,
        minY: g,
        maxY: parseInt(e.height, 10) - g
      };
    }), v = b(() => e.modelValue.map((g) => He(g, e.itemValue, g))), y = b(() => {
      const g = [], S = u(v.value, m.value), k = S.length;
      for (let p = 0; g.length < k; p++) {
        const _ = S[p];
        let C = e.labels[p];
        C || (C = typeof _ == "object" ? _.value : _), g.push({
          x: _.x,
          value: String(C)
        });
      }
      return g;
    });
    q(() => e.modelValue, async () => {
      if (await we(), !e.autoDraw || !r.value) return;
      const g = r.value, S = g.getTotalLength();
      e.fill ? (g.style.transformOrigin = "bottom center", g.style.transition = "none", g.style.transform = "scaleY(0)", g.getBoundingClientRect(), g.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, g.style.transform = "scaleY(1)") : (g.style.strokeDasharray = `${S}`, g.style.strokeDashoffset = `${S}`, g.getBoundingClientRect(), g.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, g.style.strokeDashoffset = "0"), o.value = S;
    }, {
      immediate: !0
    });
    function h(g) {
      return Nb(u(v.value, m.value), e.smooth ? 8 : Number(e.smooth), g, parseInt(e.height, 10));
    }
    R(() => {
      var S;
      const g = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return s("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [s("defs", null, [s("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [g.map((k, p) => s("stop", {
        offset: p / Math.max(g.length - 1, 1),
        "stop-color": k || "currentColor"
      }, null))])]), c.value && s("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [y.value.map((k, p) => {
        var _;
        return s("text", {
          x: k.x + d.value / 2 + d.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((_ = n.label) == null ? void 0 : _.call(n, {
          index: p,
          value: k.value
        })) ?? k.value]);
      })]), s("path", {
        ref: r,
        d: h(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && s("path", {
        d: h(!1),
        fill: "none",
        stroke: e.color ?? ((S = e.gradient) == null ? void 0 : S[0])
      }, null)]);
    });
  }
}), Hb = B({
  type: {
    type: String,
    default: "trend"
  },
  ...yc(),
  ...bc()
}, "VSparkline"), Wb = O()({
  name: "VSparkline",
  props: Hb(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      textColorClasses: t,
      textColorStyles: l
    } = Xe(E(e, "color")), i = b(() => !!(e.showLabels || e.labels.length > 0 || n != null && n.label)), o = b(() => {
      let r = parseInt(e.height, 10);
      return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    R(() => {
      const r = e.type === "trend" ? gr : vr, u = e.type === "trend" ? gr.filterProps(e) : vr.filterProps(e);
      return s(r, N({
        key: e.type,
        class: t.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, u), n);
    });
  }
}), jb = B({
  ...ee(),
  ...ou({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), Yb = O()({
  name: "VSpeedDial",
  props: jb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), l = j(), i = b(() => {
      var c;
      const [r, u = "center"] = ((c = e.location) == null ? void 0 : c.split(" ")) ?? [];
      return `${r} ${u}`;
    }), o = b(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return R(() => {
      const r = Fn.filterProps(e);
      return s(Fn, N(r, {
        modelValue: t.value,
        "onUpdate:modelValue": (u) => t.value = u,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...n,
        default: (u) => s(me, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [s(et, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = n.default) == null ? void 0 : c.call(n, u)];
            }
          })]
        })
      });
    }), {};
  }
}), so = Symbol.for("vuetify:v-stepper"), Sc = B({
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
}, "VStepperActions"), kc = O()({
  name: "VStepperActions",
  props: Sc(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, a) {
    let {
      emit: n,
      slots: t
    } = a;
    const {
      t: l
    } = $e();
    function i() {
      n("click:prev");
    }
    function o() {
      n("click:next");
    }
    return R(() => {
      const r = {
        onClick: i
      }, u = {
        onClick: o
      };
      return s("div", {
        class: "v-stepper-actions"
      }, [s(me, {
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
          return [((c = t.prev) == null ? void 0 : c.call(t, {
            props: r
          })) ?? s(be, r, null)];
        }
      }), s(me, {
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
          return [((c = t.next) == null ? void 0 : c.call(t, {
            props: u
          })) ?? s(be, u, null)];
        }
      })]);
    }), {};
  }
}), xc = Tt("v-stepper-header"), Gb = B({
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
}, "StepperItem"), Ub = B({
  ...Gb(),
  ...kn()
}, "VStepperItem"), wc = O()({
  name: "VStepperItem",
  directives: {
    Ripple: Ot
  },
  props: Ub(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = xn(e, so, !0), l = b(() => (t == null ? void 0 : t.value.value) ?? e.value), i = b(() => e.rules.every((m) => m() === !0)), o = b(() => !e.disabled && e.editable), r = b(() => !e.disabled && e.editable), u = b(() => e.error || !i.value), c = b(() => e.complete || e.rules.length > 0 && i.value), d = b(() => u.value ? e.errorIcon : c.value ? e.completeIcon : t.isSelected.value && e.editable ? e.editIcon : e.icon), f = b(() => ({
      canEdit: r.value,
      hasError: u.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return R(() => {
      var g, S, k;
      const m = (!t || t.isSelected.value || c.value || r.value) && !u.value && !e.disabled, v = !!(e.title != null || n.title), y = !!(e.subtitle != null || n.subtitle);
      function h() {
        t == null || t.toggle();
      }
      return Be(s("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": u.value
        }, t == null ? void 0 : t.selectedClass.value],
        disabled: !e.editable,
        onClick: h
      }, [o.value && Ut(!0, "v-stepper-item"), s(ht, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: m ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var p;
          return [((p = n.icon) == null ? void 0 : p.call(n, f.value)) ?? (d.value ? s(Se, {
            icon: d.value
          }, null) : l.value)];
        }
      }), s("div", {
        class: "v-stepper-item__content"
      }, [v && s("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((g = n.title) == null ? void 0 : g.call(n, f.value)) ?? e.title]), y && s("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((S = n.subtitle) == null ? void 0 : S.call(n, f.value)) ?? e.subtitle]), (k = n.default) == null ? void 0 : k.call(n, f.value)])]), [[ct("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), qb = B({
  ...Re(ll(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), Cc = O()({
  name: "VStepperWindow",
  props: qb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ye(so, null), l = ae(e, "modelValue"), i = b({
      get() {
        var o;
        return l.value != null || !t ? l.value : (o = t.items.value.find((r) => t.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return R(() => {
      const o = rn.filterProps(e);
      return s(rn, N({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), Kb = B({
  ...il()
}, "VStepperWindowItem"), Vc = O()({
  name: "VStepperWindowItem",
  props: Kb(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => {
      const t = sn.filterProps(e);
      return s(sn, N({
        _as: "VStepperWindowItem"
      }, t, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), n);
    }), {};
  }
}), Xb = B({
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
}, "Stepper"), Zb = B({
  ...Xb(),
  ...Sn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...ol(),
  ...Ra(Sc(), ["prevText", "nextText"])
}, "VStepper"), Jb = O()({
  name: "VStepper",
  props: Zb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      items: t,
      next: l,
      prev: i,
      selected: o
    } = qt(e, so), {
      displayClasses: r,
      mobile: u
    } = yt(e), {
      completeIcon: c,
      editIcon: d,
      errorIcon: f,
      color: m,
      editable: v,
      prevText: y,
      nextText: h
    } = fn(e), g = b(() => e.items.map((p, _) => {
      const C = He(p, e.itemTitle, p), P = He(p, e.itemValue, _ + 1);
      return {
        title: C,
        value: P,
        raw: p
      };
    })), S = b(() => t.value.findIndex((p) => o.value.includes(p.id))), k = b(() => e.disabled ? e.disabled : S.value === 0 ? "prev" : S.value === t.value.length - 1 ? "next" : !1);
    return De({
      VStepperItem: {
        editable: v,
        errorIcon: f,
        completeIcon: c,
        editIcon: d,
        prevText: y,
        nextText: h
      },
      VStepperActions: {
        color: m,
        disabled: k,
        prevText: y,
        nextText: h
      }
    }), R(() => {
      const p = un.filterProps(e), _ = !!(n.header || e.items.length), C = e.items.length > 0, P = !e.hideActions && !!(C || n.actions);
      return s(un, N(p, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": u.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var T, w;
          return [_ && s(xc, {
            key: "stepper-header"
          }, {
            default: () => [g.value.map((x, A) => {
              let {
                raw: V,
                ...I
              } = x;
              return s(le, null, [!!A && s(va, null, null), s(wc, I, {
                default: n[`header-item.${I.value}`] ?? n.header,
                icon: n.icon,
                title: n.title,
                subtitle: n.subtitle
              })]);
            })]
          }), C && s(Cc, {
            key: "stepper-window"
          }, {
            default: () => [g.value.map((x) => s(Vc, {
              value: x.value
            }, {
              default: () => {
                var A, V;
                return ((A = n[`item.${x.value}`]) == null ? void 0 : A.call(n, x)) ?? ((V = n.item) == null ? void 0 : V.call(n, x));
              }
            }))]
          }), (T = n.default) == null ? void 0 : T.call(n, {
            prev: i,
            next: l
          }), P && (((w = n.actions) == null ? void 0 : w.call(n, {
            next: l,
            prev: i
          })) ?? s(kc, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, n))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), Qb = B({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...Nt(),
  ...Ja()
}, "VSwitch"), eS = O()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: Qb(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const l = ae(e, "indeterminate"), i = ae(e, "modelValue"), {
      loaderClasses: o
    } = ra(e), {
      isFocused: r,
      focus: u,
      blur: c
    } = Rt(e), d = j(), f = xe && window.matchMedia("(forced-colors: active)").matches, m = b(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), v = Ue(), y = b(() => e.id || `switch-${v}`);
    function h() {
      l.value && (l.value = !1);
    }
    function g(S) {
      var k, p;
      S.stopPropagation(), S.preventDefault(), (p = (k = d.value) == null ? void 0 : k.input) == null || p.click();
    }
    return R(() => {
      const [S, k] = Gt(n), p = Ze.filterProps(e), _ = jt.filterProps(e);
      return s(Ze, N({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, S, p, {
        modelValue: i.value,
        "onUpdate:modelValue": (C) => i.value = C,
        id: y.value,
        focused: r.value,
        style: e.style
      }), {
        ...t,
        default: (C) => {
          let {
            id: P,
            messagesId: T,
            isDisabled: w,
            isReadonly: x,
            isValid: A
          } = C;
          const V = {
            model: i,
            isValid: A
          };
          return s(jt, N({
            ref: d
          }, _, {
            modelValue: i.value,
            "onUpdate:modelValue": [(I) => i.value = I, h],
            id: P.value,
            "aria-describedby": T.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: w.value,
            readonly: x.value,
            onFocus: u,
            onBlur: c
          }, k), {
            ...t,
            default: (I) => {
              let {
                backgroundColorClasses: D,
                backgroundColorStyles: $
              } = I;
              return s("div", {
                class: ["v-switch__track", f ? void 0 : D.value],
                style: $.value,
                onClick: g
              }, [t["track-true"] && s("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [t["track-true"](V)]), t["track-false"] && s("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [t["track-false"](V)])]);
            },
            input: (I) => {
              let {
                inputNode: D,
                icon: $,
                backgroundColorClasses: z,
                backgroundColorStyles: W
              } = I;
              return s(le, null, [D, s("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": $ || e.loading
                }, e.inset || f ? void 0 : z.value],
                style: e.inset ? void 0 : W.value
              }, [t.thumb ? s(me, {
                defaults: {
                  VIcon: {
                    icon: $,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [t.thumb({
                  ...V,
                  icon: $
                })]
              }) : s(pi, null, {
                default: () => [e.loading ? s(sa, {
                  name: "v-switch",
                  active: !0,
                  color: A.value === !1 ? void 0 : m.value
                }, {
                  default: (Z) => t.loader ? t.loader(Z) : s(En, {
                    active: Z.isActive,
                    color: Z.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : $ && s(Se, {
                  key: String($),
                  icon: $,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), tS = B({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...ee(),
  ...je(),
  ...gn(),
  ...Ae(),
  ...ve(),
  ...ge()
}, "VSystemBar"), nS = O()({
  name: "VSystemBar",
  props: tS(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(E(e, "color")), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Ee(e), {
      ssrBootStyles: u
    } = yn(), c = b(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: d
    } = hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: G("top"),
      layoutSize: c,
      elementSize: c,
      active: b(() => !0),
      absolute: E(e, "absolute")
    });
    return R(() => s(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, t.value, l.value, o.value, r.value, e.class],
      style: [i.value, d.value, u.value, e.style]
    }, n)), {};
  }
}), uo = Symbol.for("vuetify:v-tabs"), aS = B({
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
}, "VTab"), Pc = O()({
  name: "VTab",
  props: aS(),
  setup(e, a) {
    let {
      slots: n,
      attrs: t
    } = a;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = Xe(e, "sliderColor"), o = j(), r = j(), u = b(() => e.direction === "horizontal"), c = b(() => {
      var f, m;
      return ((m = (f = o.value) == null ? void 0 : f.group) == null ? void 0 : m.isSelected.value) ?? !1;
    });
    function d(f) {
      var v, y;
      let {
        value: m
      } = f;
      if (m) {
        const h = (y = (v = o.value) == null ? void 0 : v.$el.parentElement) == null ? void 0 : y.querySelector(".v-tab--selected .v-tab__slider"), g = r.value;
        if (!h || !g) return;
        const S = getComputedStyle(h).color, k = h.getBoundingClientRect(), p = g.getBoundingClientRect(), _ = u.value ? "x" : "y", C = u.value ? "X" : "Y", P = u.value ? "right" : "bottom", T = u.value ? "width" : "height", w = k[_], x = p[_], A = w > x ? k[P] - p[P] : k[_] - p[_], V = Math.sign(A) > 0 ? u.value ? "right" : "bottom" : Math.sign(A) < 0 ? u.value ? "left" : "top" : "center", D = (Math.abs(A) + (Math.sign(A) < 0 ? k[T] : p[T])) / Math.max(k[T], p[T]) || 0, $ = k[T] / p[T] || 0, z = 1.5;
        en(g, {
          backgroundColor: [S, "currentcolor"],
          transform: [`translate${C}(${A}px) scale${C}(${$})`, `translate${C}(${A / z}px) scale${C}(${(D - 1) / z + 1})`, "none"],
          transformOrigin: Array(3).fill(V)
        }, {
          duration: 225,
          easing: qn
        });
      }
    }
    return R(() => {
      const f = be.filterProps(e);
      return s(be, N({
        symbol: uo,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, f, t, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": d
      }), {
        ...n,
        default: () => {
          var m;
          return s(le, null, [((m = n.default) == null ? void 0 : m.call(n)) ?? e.text, !e.hideSlider && s("div", {
            ref: r,
            class: ["v-tab__slider", l.value],
            style: i.value
          }, null)]);
        }
      });
    }), St({}, o);
  }
}), lS = B({
  ...Re(ll(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), _c = O()({
  name: "VTabsWindow",
  props: lS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ye(uo, null), l = ae(e, "modelValue"), i = b({
      get() {
        var o;
        return l.value != null || !t ? l.value : (o = t.items.value.find((r) => t.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return R(() => {
      const o = rn.filterProps(e);
      return s(rn, N({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), iS = B({
  ...il()
}, "VTabsWindowItem"), Ic = O()({
  name: "VTabsWindowItem",
  props: iS(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return R(() => {
      const t = sn.filterProps(e);
      return s(sn, N({
        _as: "VTabsWindowItem"
      }, t, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), n);
    }), {};
  }
});
function oS(e) {
  return e ? e.map((a) => Gn(a) ? a : {
    text: a,
    value: a
  }) : [];
}
const rS = B({
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
  ...Ei({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...Ye(),
  ...ve()
}, "VTabs"), sS = O()({
  name: "VTabs",
  props: rS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      slots: t
    } = a;
    const l = ae(e, "modelValue"), i = b(() => oS(e.items)), {
      densityClasses: o
    } = lt(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: u
    } = Ve(E(e, "bgColor")), {
      scopeId: c
    } = Cn();
    return De({
      VTab: {
        color: E(e, "color"),
        direction: E(e, "direction"),
        stacked: E(e, "stacked"),
        fixed: E(e, "fixedTabs"),
        sliderColor: E(e, "sliderColor"),
        hideSlider: E(e, "hideSlider")
      }
    }), R(() => {
      const d = ta.filterProps(e), f = !!(t.window || e.items.length > 0);
      return s(le, null, [s(ta, N(d, {
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": X(e.height)
        }, u.value, e.style],
        role: "tablist",
        symbol: uo
      }, c, n), {
        default: () => {
          var m;
          return [((m = t.default) == null ? void 0 : m.call(t)) ?? i.value.map((v) => {
            var y;
            return ((y = t.tab) == null ? void 0 : y.call(t, {
              item: v
            })) ?? s(Pc, N(v, {
              key: v.text,
              value: v.value
            }), {
              default: t[`tab.${v.value}`] ? () => {
                var h;
                return (h = t[`tab.${v.value}`]) == null ? void 0 : h.call(t, {
                  item: v
                });
              } : void 0
            });
          })];
        }
      }), f && s(_c, N({
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        key: "tabs-window"
      }, c), {
        default: () => {
          var m;
          return [i.value.map((v) => {
            var y;
            return ((y = t.item) == null ? void 0 : y.call(t, {
              item: v
            })) ?? s(Ic, {
              value: v.value
            }, {
              default: () => {
                var h;
                return (h = t[`item.${v.value}`]) == null ? void 0 : h.call(t, {
                  item: v
                });
              }
            });
          }), (m = t.window) == null ? void 0 : m.call(t)];
        }
      })]);
    }), {};
  }
}), uS = B({
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
  ...Nt(),
  ...ma()
}, "VTextarea"), cS = O()({
  name: "VTextarea",
  directives: {
    Intersect: oa
  },
  inheritAttrs: !1,
  props: uS(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      attrs: n,
      emit: t,
      slots: l
    } = a;
    const i = ae(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: u
    } = Rt(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = b(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function f(V, I) {
      var D, $;
      !e.autofocus || !V || ($ = (D = I[0].target) == null ? void 0 : D.focus) == null || $.call(D);
    }
    const m = j(), v = j(), y = G(""), h = j(), g = b(() => e.persistentPlaceholder || o.value || e.active);
    function S() {
      var V;
      h.value !== document.activeElement && ((V = h.value) == null || V.focus()), o.value || r();
    }
    function k(V) {
      S(), t("click:control", V);
    }
    function p(V) {
      t("mousedown:control", V);
    }
    function _(V) {
      V.stopPropagation(), S(), we(() => {
        i.value = "", yi(e["onClick:clear"], V);
      });
    }
    function C(V) {
      var D;
      const I = V.target;
      if (i.value = I.value, (D = e.modelModifiers) != null && D.trim) {
        const $ = [I.selectionStart, I.selectionEnd];
        we(() => {
          I.selectionStart = $[0], I.selectionEnd = $[1];
        });
      }
    }
    const P = j(), T = j(+e.rows), w = b(() => ["plain", "underlined"].includes(e.variant));
    Fe(() => {
      e.autoGrow || (T.value = +e.rows);
    });
    function x() {
      e.autoGrow && we(() => {
        if (!P.value || !v.value) return;
        const V = getComputedStyle(P.value), I = getComputedStyle(v.value.$el), D = parseFloat(V.getPropertyValue("--v-field-padding-top")) + parseFloat(V.getPropertyValue("--v-input-padding-top")) + parseFloat(V.getPropertyValue("--v-field-padding-bottom")), $ = P.value.scrollHeight, z = parseFloat(V.lineHeight), W = Math.max(parseFloat(e.rows) * z + D, parseFloat(I.getPropertyValue("--v-input-control-height"))), Z = parseFloat(e.maxRows) * z + D || 1 / 0, J = Oe($ ?? 0, W, Z);
        T.value = Math.floor((J - D) / z), y.value = X(J);
      });
    }
    at(x), q(i, x), q(() => e.rows, x), q(() => e.maxRows, x), q(() => e.density, x);
    let A;
    return q(P, (V) => {
      V ? (A = new ResizeObserver(x), A.observe(P.value)) : A == null || A.disconnect();
    }), nt(() => {
      A == null || A.disconnect();
    }), R(() => {
      const V = !!(l.counter || e.counter || e.counterValue), I = !!(V || l.details), [D, $] = Gt(n), {
        modelValue: z,
        ...W
      } = Ze.filterProps(e), Z = Hi(e);
      return s(Ze, N({
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
      }, D, W, {
        centerAffix: T.value === 1 && !w.value,
        focused: o.value
      }), {
        ...l,
        default: (J) => {
          let {
            id: L,
            isDisabled: F,
            isDirty: M,
            isReadonly: U,
            isValid: oe
          } = J;
          return s(Hn, N({
            ref: v,
            style: {
              "--v-textarea-control-height": y.value
            },
            onClick: k,
            onMousedown: p,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, Z, {
            id: L.value,
            active: g.value || M.value,
            centerAffix: T.value === 1 && !w.value,
            dirty: M.value || e.dirty,
            disabled: F.value,
            focused: o.value,
            error: oe.value === !1
          }), {
            ...l,
            default: (te) => {
              let {
                props: {
                  class: ue,
                  ...H
                }
              } = te;
              return s(le, null, [e.prefix && s("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), Be(s("textarea", N({
                ref: h,
                class: ue,
                value: i.value,
                onInput: C,
                autofocus: e.autofocus,
                readonly: U.value,
                disabled: F.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: S,
                onBlur: u
              }, H, $), null), [[ct("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]), e.autoGrow && Be(s("textarea", {
                class: [ue, "v-textarea__sizer"],
                id: `${H.id}-sizer`,
                "onUpdate:modelValue": (ne) => i.value = ne,
                ref: P,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[Gc, i.value]]), e.suffix && s("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: I ? (J) => {
          var L;
          return s(le, null, [(L = l.details) == null ? void 0 : L.call(l, J), V && s(le, null, [s("span", null, null), s(tl, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), St({}, m, v, h);
  }
}), dS = B({
  withBackground: Boolean,
  ...ee(),
  ...ge(),
  ...ve()
}, "VThemeProvider"), vS = O()({
  name: "VThemeProvider",
  props: dS(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e);
    return () => {
      var l;
      return e.withBackground ? s(e.tag, {
        class: ["v-theme-provider", t.value, e.class],
        style: e.style
      }, {
        default: () => {
          var i;
          return [(i = n.default) == null ? void 0 : i.call(n)];
        }
      }) : (l = n.default) == null ? void 0 : l.call(n);
    };
  }
}), fS = B({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: re,
  iconColor: String,
  lineColor: String,
  ...ee(),
  ...Ae(),
  ...Bt(),
  ...je()
}, "VTimelineDivider"), mS = O()({
  name: "VTimelineDivider",
  props: fS(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      sizeClasses: t,
      sizeStyles: l
    } = Ln(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = Ve(E(e, "dotColor")), {
      roundedClasses: r
    } = Ee(e, "v-timeline-divider__dot"), {
      elevationClasses: u
    } = qe(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: d
    } = Ve(E(e, "lineColor"));
    return R(() => s("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [s("div", {
      class: ["v-timeline-divider__before", c.value],
      style: d.value
    }, null), !e.hideDot && s("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", u.value, r.value, t.value],
      style: l.value
    }, [s("div", {
      class: ["v-timeline-divider__inner-dot", o.value, r.value],
      style: i.value
    }, [n.default ? s(me, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, n.default) : s(Se, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), s("div", {
      class: ["v-timeline-divider__after", c.value],
      style: d.value
    }, null)])), {};
  }
}), pc = B({
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
  ...Ae(),
  ...Bt(),
  ...ve()
}, "VTimelineItem"), gS = O()({
  name: "VTimelineItem",
  props: pc(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      dimensionStyles: t
    } = ze(e), l = G(0), i = j();
    return q(i, (o) => {
      var r;
      o && (l.value = ((r = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : r.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), R(() => {
      var o, r;
      return s("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": X(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${X(e.lineInset)})` : X(0)
        }, e.style]
      }, [s("div", {
        class: "v-timeline-item__body",
        style: t.value
      }, [(o = n.default) == null ? void 0 : o.call(n)]), s(mS, {
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
        default: n.icon
      }), e.density !== "compact" && s("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((r = n.opposite) == null ? void 0 : r.call(n))])]);
    }), {};
  }
}), hS = B({
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
  ...Ra(pc({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...ee(),
  ...Ye(),
  ...ve(),
  ...ge()
}, "VTimeline"), yS = O()({
  name: "VTimeline",
  props: hS(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    const {
      themeClasses: t
    } = ke(e), {
      densityClasses: l
    } = lt(e), {
      rtlClasses: i
    } = We();
    De({
      VTimelineDivider: {
        lineColor: E(e, "lineColor")
      },
      VTimelineItem: {
        density: E(e, "density"),
        dotColor: E(e, "dotColor"),
        fillDot: E(e, "fillDot"),
        hideOpposite: E(e, "hideOpposite"),
        iconColor: E(e, "iconColor"),
        lineColor: E(e, "lineColor"),
        lineInset: E(e, "lineInset"),
        size: E(e, "size")
      }
    });
    const o = b(() => {
      const u = e.side ? e.side : e.density !== "default" ? "end" : null;
      return u && `v-timeline--side-${u}`;
    }), r = b(() => {
      const u = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return u;
        case "start":
          return u[0];
        case "end":
          return u[1];
        default:
          return null;
      }
    });
    return R(() => s(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, t.value, l.value, o.value, i.value, e.class],
      style: [{
        "--v-timeline-line-thickness": X(e.lineThickness)
      }, e.style]
    }, n)), {};
  }
}), bS = B({
  ...ee(),
  ...bt({
    variant: "text"
  })
}, "VToolbarItems"), SS = O()({
  name: "VToolbarItems",
  props: bS(),
  setup(e, a) {
    let {
      slots: n
    } = a;
    return De({
      VBtn: {
        color: E(e, "color"),
        height: "inherit",
        variant: E(e, "variant")
      }
    }), R(() => {
      var t;
      return s("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(t = n.default) == null ? void 0 : t.call(n)]);
    }), {};
  }
}), kS = B({
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
}, "VTooltip"), Ac = O()({
  name: "VTooltip",
  props: kS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = ae(e, "modelValue"), {
      scopeId: l
    } = Cn(), i = Ue(), o = b(() => e.id || `v-tooltip-${i}`), r = j(), u = b(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = b(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = b(() => e.transition ? e.transition : t.value ? "scale-transition" : "fade-transition"), f = b(() => N({
      "aria-describedby": o.value
    }, e.activatorProps));
    return R(() => {
      const m = It.filterProps(e);
      return s(It, N({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: o.value
      }, m, {
        modelValue: t.value,
        "onUpdate:modelValue": (v) => t.value = v,
        transition: d.value,
        absolute: !0,
        location: u.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: f.value,
        _disableGlobalStack: !0
      }, l), {
        activator: n.activator,
        default: function() {
          var g;
          for (var v = arguments.length, y = new Array(v), h = 0; h < v; h++)
            y[h] = arguments[h];
          return ((g = n.default) == null ? void 0 : g.call(n, ...y)) ?? e.text;
        }
      });
    }), St({}, r);
  }
}), xS = O()({
  name: "VValidation",
  props: Ms(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, a) {
    let {
      slots: n
    } = a;
    const t = Es(e, "validation");
    return () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n, t);
    };
  }
}), wS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: Yf,
  VAlertTitle: _s,
  VApp: Qv,
  VAppBar: kf,
  VAppBarNavIcon: zf,
  VAppBarTitle: Hf,
  VAutocomplete: fg,
  VAvatar: ht,
  VBadge: gg,
  VBanner: bg,
  VBannerActions: cu,
  VBannerText: du,
  VBottomNavigation: kg,
  VBottomSheet: wg,
  VBreadcrumbs: _g,
  VBreadcrumbsDivider: fu,
  VBreadcrumbsItem: mu,
  VBtn: be,
  VBtnGroup: Nl,
  VBtnToggle: _f,
  VCard: Yn,
  VCardActions: gu,
  VCardItem: bu,
  VCardSubtitle: hu,
  VCardText: Su,
  VCardTitle: yu,
  VCarousel: Rg,
  VCarouselItem: zg,
  VCheckbox: em,
  VCheckboxBtn: Et,
  VChip: zn,
  VChipGroup: im,
  VClassIcon: _i,
  VCode: Hg,
  VCol: yy,
  VColorPicker: Th,
  VCombobox: Mh,
  VComponentIcon: Ll,
  VConfirmEdit: Fh,
  VContainer: fy,
  VCounter: tl,
  VDataIterator: Yh,
  VDataTable: ry,
  VDataTableFooter: aa,
  VDataTableHeaders: cn,
  VDataTableRow: ao,
  VDataTableRows: dn,
  VDataTableServer: dy,
  VDataTableVirtual: uy,
  VDatePicker: Ty,
  VDatePickerControls: ni,
  VDatePickerHeader: ai,
  VDatePickerMonth: li,
  VDatePickerMonths: ii,
  VDatePickerYears: oi,
  VDefaultsProvider: me,
  VDialog: ql,
  VDialogBottomTransition: af,
  VDialogTopTransition: lf,
  VDialogTransition: Ga,
  VDivider: va,
  VEmptyState: Dy,
  VExpandTransition: Ua,
  VExpandXTransition: Ti,
  VExpansionPanel: My,
  VExpansionPanelText: ri,
  VExpansionPanelTitle: si,
  VExpansionPanels: $y,
  VFab: Oy,
  VFabTransition: nf,
  VFadeTransition: Zn,
  VField: Hn,
  VFieldLabel: jn,
  VFileInput: Ny,
  VFooter: Hy,
  VForm: jy,
  VHover: Gy,
  VIcon: Se,
  VImg: Mt,
  VInfiniteScroll: qy,
  VInput: Ze,
  VItem: Zy,
  VItemGroup: Xy,
  VKbd: Jy,
  VLabel: Nn,
  VLayout: eb,
  VLayoutItem: nb,
  VLazy: lb,
  VLigatureIcon: jv,
  VList: el,
  VListGroup: jl,
  VListImg: pm,
  VListItem: Ft,
  VListItemAction: Tm,
  VListItemMedia: Dm,
  VListItemSubtitle: Gs,
  VListItemTitle: Us,
  VListSubheader: qs,
  VLocaleProvider: ob,
  VMain: sb,
  VMenu: Fn,
  VMessages: Bs,
  VNavigationDrawer: yb,
  VNoSsr: bb,
  VOtpInput: kb,
  VOverlay: It,
  VPagination: ei,
  VParallax: Cb,
  VProgressCircular: En,
  VProgressLinear: Ka,
  VRadio: Pb,
  VRadioGroup: Ib,
  VRangeSlider: Ab,
  VRating: Bb,
  VResponsive: Ol,
  VRow: Vy,
  VScaleTransition: pi,
  VScrollXReverseTransition: rf,
  VScrollXTransition: of,
  VScrollYReverseTransition: uf,
  VScrollYTransition: sf,
  VSelect: Yi,
  VSelectionControl: jt,
  VSelectionControlGroup: ps,
  VSheet: un,
  VSkeletonLoader: Fb,
  VSlideGroup: ta,
  VSlideGroupItem: $b,
  VSlideXReverseTransition: df,
  VSlideXTransition: cf,
  VSlideYReverseTransition: vf,
  VSlideYTransition: Ai,
  VSlider: Ql,
  VSnackbar: Rb,
  VSpacer: oc,
  VSparkline: Wb,
  VSpeedDial: Yb,
  VStepper: Jb,
  VStepperActions: kc,
  VStepperHeader: xc,
  VStepperItem: wc,
  VStepperWindow: Cc,
  VStepperWindowItem: Vc,
  VSvgIcon: Pi,
  VSwitch: eS,
  VSystemBar: nS,
  VTab: Pc,
  VTable: vn,
  VTabs: sS,
  VTabsWindow: _c,
  VTabsWindowItem: Ic,
  VTextField: $t,
  VTextarea: cS,
  VThemeProvider: vS,
  VTimeline: yS,
  VTimelineItem: gS,
  VToolbar: Rl,
  VToolbarItems: SS,
  VToolbarTitle: Ii,
  VTooltip: Ac,
  VValidation: xS,
  VVirtualScroll: al,
  VWindow: rn,
  VWindowItem: sn
}, Symbol.toStringTag, { value: "Module" }));
function CS(e, a) {
  const n = a.modifiers || {}, t = a.value, {
    once: l,
    immediate: i,
    ...o
  } = n, r = !Object.keys(o).length, {
    handler: u,
    options: c
  } = typeof t == "object" ? t : {
    handler: t,
    options: {
      attributes: (o == null ? void 0 : o.attr) ?? r,
      characterData: (o == null ? void 0 : o.char) ?? r,
      childList: (o == null ? void 0 : o.child) ?? r,
      subtree: (o == null ? void 0 : o.sub) ?? r
    }
  }, d = new MutationObserver(function() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], m = arguments.length > 1 ? arguments[1] : void 0;
    u == null || u(f, m), l && Tc(e, a);
  });
  i && (u == null || u([], d)), e._mutate = Object(e._mutate), e._mutate[a.instance.$.uid] = {
    observer: d
  }, d.observe(e, c);
}
function Tc(e, a) {
  var n;
  (n = e._mutate) != null && n[a.instance.$.uid] && (e._mutate[a.instance.$.uid].observer.disconnect(), delete e._mutate[a.instance.$.uid]);
}
const VS = {
  mounted: CS,
  unmounted: Tc
};
function PS(e, a) {
  var l, i;
  const n = a.value, t = {
    passive: !((l = a.modifiers) != null && l.active)
  };
  window.addEventListener("resize", n, t), e._onResize = Object(e._onResize), e._onResize[a.instance.$.uid] = {
    handler: n,
    options: t
  }, (i = a.modifiers) != null && i.quiet || n();
}
function _S(e, a) {
  var l;
  if (!((l = e._onResize) != null && l[a.instance.$.uid])) return;
  const {
    handler: n,
    options: t
  } = e._onResize[a.instance.$.uid];
  window.removeEventListener("resize", n, t), delete e._onResize[a.instance.$.uid];
}
const IS = {
  mounted: PS,
  unmounted: _S
};
function Bc(e, a) {
  const {
    self: n = !1
  } = a.modifiers ?? {}, t = a.value, l = typeof t == "object" && t.options || {
    passive: !0
  }, i = typeof t == "function" || "handleEvent" in t ? t : t.handler, o = n ? e : a.arg ? document.querySelector(a.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[a.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: n ? void 0 : o
  });
}
function Dc(e, a) {
  var i;
  if (!((i = e._onScroll) != null && i[a.instance.$.uid])) return;
  const {
    handler: n,
    options: t,
    target: l = e
  } = e._onScroll[a.instance.$.uid];
  l.removeEventListener("scroll", n, t), delete e._onScroll[a.instance.$.uid];
}
function pS(e, a) {
  a.value !== a.oldValue && (Dc(e, a), Bc(e, a));
}
const AS = {
  mounted: Bc,
  unmounted: Dc,
  updated: pS
};
function TS(e, a) {
  const n = typeof e == "string" ? Uc(e) : e, t = BS(n, a);
  return {
    mounted: t,
    updated: t,
    unmounted(l) {
      xr(null, l);
    }
  };
}
function BS(e, a) {
  return function(n, t, l) {
    var f, m, v;
    const i = typeof a == "function" ? a(t) : a, o = ((f = t.value) == null ? void 0 : f.text) ?? t.value ?? (i == null ? void 0 : i.text), r = Gn(t.value) ? t.value : {}, u = () => o ?? n.innerHTML, c = (l.ctx === t.instance.$ ? (m = DS(l, t.instance.$)) == null ? void 0 : m.provides : (v = l.ctx) == null ? void 0 : v.provides) ?? t.instance.$.provides, d = Yt(e, N(i, r), u);
    d.appContext = Object.assign(/* @__PURE__ */ Object.create(null), t.instance.$.appContext, {
      provides: c
    }), xr(d, n);
  };
}
function DS(e, a) {
  const n = /* @__PURE__ */ new Set(), t = (i) => {
    var o, r;
    for (const u of i) {
      if (!u) continue;
      if (u === e)
        return !0;
      n.add(u);
      let c;
      if (u.suspense ? c = t([u.ssContent]) : Array.isArray(u.children) ? c = t(u.children) : (o = u.component) != null && o.vnode && (c = t([(r = u.component) == null ? void 0 : r.subTree])), c)
        return c;
      n.delete(u);
    }
    return !1;
  };
  if (!t([a.subTree]))
    throw new Error("Could not find original vnode");
  const l = Array.from(n).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return a;
}
const MS = TS(Ac, (e) => {
  var a;
  return {
    activator: "parent",
    location: ((a = e.arg) == null ? void 0 : a.replace("-", " ")) ?? "top",
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), ES = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: iu,
  Intersect: oa,
  Mutate: VS,
  Resize: IS,
  Ripple: Ot,
  Scroll: AS,
  Tooltip: MS,
  Touch: Gi
}, Symbol.toStringTag, { value: "Module" }));
var FS = function(e, a) {
  var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: n,
      w: n.offsetWidth,
      h: n.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var t = this.pJS;
  a && Object.deepExtend(t, a), t.tmp.obj = {
    size_value: t.particles.size.value,
    size_anim_speed: t.particles.size.anim.speed,
    move_speed: t.particles.move.speed,
    line_linked_distance: t.particles.line_linked.distance,
    line_linked_width: t.particles.line_linked.width,
    mode_grab_distance: t.interactivity.modes.grab.distance,
    mode_bubble_distance: t.interactivity.modes.bubble.distance,
    mode_bubble_size: t.interactivity.modes.bubble.size,
    mode_repulse_distance: t.interactivity.modes.repulse.distance
  }, t.fn.retinaInit = function() {
    t.retina_detect && window.devicePixelRatio > 1 ? (t.canvas.pxratio = window.devicePixelRatio, t.tmp.retina = !0) : (t.canvas.pxratio = 1, t.tmp.retina = !1), t.canvas.w = t.canvas.el.offsetWidth * t.canvas.pxratio, t.canvas.h = t.canvas.el.offsetHeight * t.canvas.pxratio, t.particles.size.value = t.tmp.obj.size_value * t.canvas.pxratio, t.particles.size.anim.speed = t.tmp.obj.size_anim_speed * t.canvas.pxratio, t.particles.move.speed = t.tmp.obj.move_speed * t.canvas.pxratio, t.particles.line_linked.distance = t.tmp.obj.line_linked_distance * t.canvas.pxratio, t.interactivity.modes.grab.distance = t.tmp.obj.mode_grab_distance * t.canvas.pxratio, t.interactivity.modes.bubble.distance = t.tmp.obj.mode_bubble_distance * t.canvas.pxratio, t.particles.line_linked.width = t.tmp.obj.line_linked_width * t.canvas.pxratio, t.interactivity.modes.bubble.size = t.tmp.obj.mode_bubble_size * t.canvas.pxratio, t.interactivity.modes.repulse.distance = t.tmp.obj.mode_repulse_distance * t.canvas.pxratio;
  }, t.fn.canvasInit = function() {
    t.canvas.ctx = t.canvas.el.getContext("2d");
  }, t.fn.canvasSize = function() {
    t.canvas.el.width = t.canvas.w, t.canvas.el.height = t.canvas.h, t && t.interactivity.events.resize && window.addEventListener("resize", function() {
      t.canvas.w = t.canvas.el.offsetWidth, t.canvas.h = t.canvas.el.offsetHeight, t.tmp.retina && (t.canvas.w *= t.canvas.pxratio, t.canvas.h *= t.canvas.pxratio), t.canvas.el.width = t.canvas.w, t.canvas.el.height = t.canvas.h, t.particles.move.enable || (t.fn.particlesEmpty(), t.fn.particlesCreate(), t.fn.particlesDraw(), t.fn.vendors.densityAutoParticles()), t.fn.vendors.densityAutoParticles();
    });
  }, t.fn.canvasPaint = function() {
    t.canvas.ctx.fillRect(0, 0, t.canvas.w, t.canvas.h);
  }, t.fn.canvasClear = function() {
    t.canvas.ctx.clearRect(0, 0, t.canvas.w, t.canvas.h);
  }, t.fn.particle = function(l, i, o) {
    if (this.radius = (t.particles.size.random ? Math.random() : 1) * t.particles.size.value, t.particles.size.anim.enable && (this.size_status = !1, this.vs = t.particles.size.anim.speed / 100, t.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = o ? o.x : Math.random() * t.canvas.w, this.y = o ? o.y : Math.random() * t.canvas.h, this.x > t.canvas.w - this.radius * 2 ? this.x = this.x - this.radius : this.x < this.radius * 2 && (this.x = this.x + this.radius), this.y > t.canvas.h - this.radius * 2 ? this.y = this.y - this.radius : this.y < this.radius * 2 && (this.y = this.y + this.radius), t.particles.move.bounce && t.fn.vendors.checkOverlap(this, o), this.color = {}, typeof l.value == "object")
      if (l.value instanceof Array) {
        var r = l.value[Math.floor(Math.random() * t.particles.color.value.length)];
        this.color.rgb = Il(r);
      } else
        l.value.r != null && l.value.g != null && l.value.b != null && (this.color.rgb = {
          r: l.value.r,
          g: l.value.g,
          b: l.value.b
        }), l.value.h != null && l.value.s != null && l.value.l != null && (this.color.hsl = {
          h: l.value.h,
          s: l.value.s,
          l: l.value.l
        });
    else l.value == "random" ? this.color.rgb = {
      r: Math.floor(Math.random() * 256) + 0,
      g: Math.floor(Math.random() * 256) + 0,
      b: Math.floor(Math.random() * 256) + 0
    } : typeof l.value == "string" && (this.color = l, this.color.rgb = Il(this.color.value));
    this.opacity = (t.particles.opacity.random ? Math.random() : 1) * t.particles.opacity.value, t.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = t.particles.opacity.anim.speed / 100, t.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var u = {};
    switch (t.particles.move.direction) {
      case "top":
        u = { x: 0, y: -1 };
        break;
      case "top-right":
        u = { x: 0.5, y: -0.5 };
        break;
      case "right":
        u = { x: 1, y: -0 };
        break;
      case "bottom-right":
        u = { x: 0.5, y: 0.5 };
        break;
      case "bottom":
        u = { x: 0, y: 1 };
        break;
      case "bottom-left":
        u = { x: -0.5, y: 1 };
        break;
      case "left":
        u = { x: -1, y: 0 };
        break;
      case "top-left":
        u = { x: -0.5, y: -0.5 };
        break;
      default:
        u = { x: 0, y: 0 };
        break;
    }
    t.particles.move.straight ? (this.vx = u.x, this.vy = u.y, t.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = u.x + Math.random() - 0.5, this.vy = u.y + Math.random() - 0.5), this.vx_i = this.vx, this.vy_i = this.vy;
    var c = t.particles.shape.type;
    if (typeof c == "object") {
      if (c instanceof Array) {
        var d = c[Math.floor(Math.random() * c.length)];
        this.shape = d;
      }
    } else
      this.shape = c;
    if (this.shape == "image") {
      var f = t.particles.shape;
      this.img = {
        src: f.image.src,
        ratio: f.image.width / f.image.height
      }, this.img.ratio || (this.img.ratio = 1), t.tmp.img_type == "svg" && t.tmp.source_svg != null && (t.fn.vendors.createSvgImg(this), t.tmp.pushing && (this.img.loaded = !1));
    }
  }, t.fn.particle.prototype.draw = function() {
    var l = this;
    if (l.radius_bubble != null)
      var i = l.radius_bubble;
    else
      var i = l.radius;
    if (l.opacity_bubble != null)
      var o = l.opacity_bubble;
    else
      var o = l.opacity;
    if (l.color.rgb)
      var r = "rgba(" + l.color.rgb.r + "," + l.color.rgb.g + "," + l.color.rgb.b + "," + o + ")";
    else
      var r = "hsla(" + l.color.hsl.h + "," + l.color.hsl.s + "%," + l.color.hsl.l + "%," + o + ")";
    switch (t.canvas.ctx.fillStyle = r, t.canvas.ctx.beginPath(), l.shape) {
      case "circle":
        t.canvas.ctx.arc(l.x, l.y, i, 0, Math.PI * 2, !1);
        break;
      case "edge":
        t.canvas.ctx.rect(l.x - i, l.y - i, i * 2, i * 2);
        break;
      case "triangle":
        t.fn.vendors.drawShape(t.canvas.ctx, l.x - i, l.y + i / 1.66, i * 2, 3, 2);
        break;
      case "polygon":
        t.fn.vendors.drawShape(
          t.canvas.ctx,
          l.x - i / (t.particles.shape.polygon.nb_sides / 3.5),
          // startX
          l.y - i / (2.66 / 3.5),
          // startY
          i * 2.66 / (t.particles.shape.polygon.nb_sides / 3),
          // sideLength
          t.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          1
          // sideCountDenominator
        );
        break;
      case "star":
        t.fn.vendors.drawShape(
          t.canvas.ctx,
          l.x - i * 2 / (t.particles.shape.polygon.nb_sides / 4),
          // startX
          l.y - i / (2 * 2.66 / 3.5),
          // startY
          i * 2 * 2.66 / (t.particles.shape.polygon.nb_sides / 3),
          // sideLength
          t.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          2
          // sideCountDenominator
        );
        break;
      case "image":
        let c = function() {
          t.canvas.ctx.drawImage(
            u,
            l.x - i,
            l.y - i,
            i * 2,
            i * 2 / l.img.ratio
          );
        };
        if (t.tmp.img_type == "svg")
          var u = l.img.obj;
        else
          var u = t.tmp.img_obj;
        u && c();
        break;
    }
    t.canvas.ctx.closePath(), t.particles.shape.stroke.width > 0 && (t.canvas.ctx.strokeStyle = t.particles.shape.stroke.color, t.canvas.ctx.lineWidth = t.particles.shape.stroke.width, t.canvas.ctx.stroke()), t.canvas.ctx.fill();
  }, t.fn.particlesCreate = function() {
    for (var l = 0; l < t.particles.number.value; l++)
      t.particles.array.push(new t.fn.particle(t.particles.color, t.particles.opacity.value));
  }, t.fn.particlesUpdate = function() {
    for (var l = 0; l < t.particles.array.length; l++) {
      var i = t.particles.array[l];
      if (t.particles.move.enable) {
        var o = t.particles.move.speed / 2;
        i.x += i.vx * o, i.y += i.vy * o;
      }
      if (t.particles.opacity.anim.enable && (i.opacity_status == !0 ? (i.opacity >= t.particles.opacity.value && (i.opacity_status = !1), i.opacity += i.vo) : (i.opacity <= t.particles.opacity.anim.opacity_min && (i.opacity_status = !0), i.opacity -= i.vo), i.opacity < 0 && (i.opacity = 0)), t.particles.size.anim.enable && (i.size_status == !0 ? (i.radius >= t.particles.size.value && (i.size_status = !1), i.radius += i.vs) : (i.radius <= t.particles.size.anim.size_min && (i.size_status = !0), i.radius -= i.vs), i.radius < 0 && (i.radius = 0)), t.particles.move.out_mode == "bounce")
        var r = {
          x_left: i.radius,
          x_right: t.canvas.w,
          y_top: i.radius,
          y_bottom: t.canvas.h
        };
      else
        var r = {
          x_left: -i.radius,
          x_right: t.canvas.w + i.radius,
          y_top: -i.radius,
          y_bottom: t.canvas.h + i.radius
        };
      switch (i.x - i.radius > t.canvas.w ? (i.x = r.x_left, i.y = Math.random() * t.canvas.h) : i.x + i.radius < 0 && (i.x = r.x_right, i.y = Math.random() * t.canvas.h), i.y - i.radius > t.canvas.h ? (i.y = r.y_top, i.x = Math.random() * t.canvas.w) : i.y + i.radius < 0 && (i.y = r.y_bottom, i.x = Math.random() * t.canvas.w), t.particles.move.out_mode) {
        case "bounce":
          (i.x + i.radius > t.canvas.w || i.x - i.radius < 0) && (i.vx = -i.vx), (i.y + i.radius > t.canvas.h || i.y - i.radius < 0) && (i.vy = -i.vy);
          break;
      }
      if (Pt("grab", t.interactivity.events.onhover.mode) && t.fn.modes.grabParticle(i), (Pt("bubble", t.interactivity.events.onhover.mode) || Pt("bubble", t.interactivity.events.onclick.mode)) && t.fn.modes.bubbleParticle(i), (Pt("repulse", t.interactivity.events.onhover.mode) || Pt("repulse", t.interactivity.events.onclick.mode)) && t.fn.modes.repulseParticle(i), t.particles.line_linked.enable || t.particles.move.attract.enable)
        for (var u = l + 1; u < t.particles.array.length; u++) {
          var c = t.particles.array[u];
          t.particles.line_linked.enable && t.fn.interact.linkParticles(i, c), t.particles.move.attract.enable && t.fn.interact.attractParticles(i, c), t.particles.move.bounce && t.fn.interact.bounceParticles(i, c);
        }
    }
  }, t.fn.particlesDraw = function() {
    t.canvas.ctx.clearRect(0, 0, t.canvas.w, t.canvas.h), t.fn.particlesUpdate();
    for (var l = 0; l < t.particles.array.length; l++) {
      var i = t.particles.array[l];
      i.draw();
    }
  }, t.fn.particlesEmpty = function() {
    t.particles.array = [];
  }, t.fn.particlesRefresh = function() {
    cancelRequestAnimFrame(t.fn.checkAnimFrame), cancelRequestAnimFrame(t.fn.drawAnimFrame), t.tmp.source_svg = void 0, t.tmp.img_obj = void 0, t.tmp.count_svg = 0, t.fn.particlesEmpty(), t.fn.canvasClear(), t.fn.vendors.start();
  }, t.fn.interact.linkParticles = function(l, i) {
    var o = l.x - i.x, r = l.y - i.y, u = Math.sqrt(o * o + r * r);
    if (u <= t.particles.line_linked.distance) {
      var c = t.particles.line_linked.opacity - u / (1 / t.particles.line_linked.opacity) / t.particles.line_linked.distance;
      if (c > 0) {
        var d = t.particles.line_linked.color_rgb_line;
        t.canvas.ctx.strokeStyle = "rgba(" + d.r + "," + d.g + "," + d.b + "," + c + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(l.x, l.y), t.canvas.ctx.lineTo(i.x, i.y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
      }
    }
  }, t.fn.interact.attractParticles = function(l, i) {
    var o = l.x - i.x, r = l.y - i.y, u = Math.sqrt(o * o + r * r);
    if (u <= t.particles.line_linked.distance) {
      var c = o / (t.particles.move.attract.rotateX * 1e3), d = r / (t.particles.move.attract.rotateY * 1e3);
      l.vx -= c, l.vy -= d, i.vx += c, i.vy += d;
    }
  }, t.fn.interact.bounceParticles = function(l, i) {
    var o = l.x - i.x, r = l.y - i.y, u = Math.sqrt(o * o + r * r), c = l.radius + i.radius;
    u <= c && (l.vx = -l.vx, l.vy = -l.vy, i.vx = -i.vx, i.vy = -i.vy);
  }, t.fn.modes.pushParticles = function(l, i) {
    t.tmp.pushing = !0;
    for (var o = 0; o < l; o++)
      t.particles.array.push(
        new t.fn.particle(
          t.particles.color,
          t.particles.opacity.value,
          {
            x: i ? i.pos_x : Math.random() * t.canvas.w,
            y: i ? i.pos_y : Math.random() * t.canvas.h
          }
        )
      ), o == l - 1 && (t.particles.move.enable || t.fn.particlesDraw(), t.tmp.pushing = !1);
  }, t.fn.modes.removeParticles = function(l) {
    t.particles.array.splice(0, l), t.particles.move.enable || t.fn.particlesDraw();
  }, t.fn.modes.bubbleParticle = function(l) {
    if (t.interactivity.events.onhover.enable && Pt("bubble", t.interactivity.events.onhover.mode)) {
      let v = function() {
        l.opacity_bubble = l.opacity, l.radius_bubble = l.radius;
      };
      var i = l.x - t.interactivity.mouse.pos_x, o = l.y - t.interactivity.mouse.pos_y, r = Math.sqrt(i * i + o * o), u = 1 - r / t.interactivity.modes.bubble.distance;
      if (r <= t.interactivity.modes.bubble.distance) {
        if (u >= 0 && t.interactivity.status == "mousemove") {
          if (t.interactivity.modes.bubble.size != t.particles.size.value)
            if (t.interactivity.modes.bubble.size > t.particles.size.value) {
              var c = l.radius + t.interactivity.modes.bubble.size * u;
              c >= 0 && (l.radius_bubble = c);
            } else {
              var d = l.radius - t.interactivity.modes.bubble.size, c = l.radius - d * u;
              c > 0 ? l.radius_bubble = c : l.radius_bubble = 0;
            }
          if (t.interactivity.modes.bubble.opacity != t.particles.opacity.value)
            if (t.interactivity.modes.bubble.opacity > t.particles.opacity.value) {
              var f = t.interactivity.modes.bubble.opacity * u;
              f > l.opacity && f <= t.interactivity.modes.bubble.opacity && (l.opacity_bubble = f);
            } else {
              var f = l.opacity - (t.particles.opacity.value - t.interactivity.modes.bubble.opacity) * u;
              f < l.opacity && f >= t.interactivity.modes.bubble.opacity && (l.opacity_bubble = f);
            }
        }
      } else
        v();
      t.interactivity.status == "mouseleave" && v();
    } else if (t.interactivity.events.onclick.enable && Pt("bubble", t.interactivity.events.onclick.mode)) {
      let v = function(y, h, g, S, k) {
        if (y != h)
          if (t.tmp.bubble_duration_end) {
            if (g != null) {
              var C = S - m * (S - y) / t.interactivity.modes.bubble.duration, P = y - C;
              _ = y + P, k == "size" && (l.radius_bubble = _), k == "opacity" && (l.opacity_bubble = _);
            }
          } else if (r <= t.interactivity.modes.bubble.distance) {
            if (g != null) var p = g;
            else var p = S;
            if (p != y) {
              var _ = S - m * (S - y) / t.interactivity.modes.bubble.duration;
              k == "size" && (l.radius_bubble = _), k == "opacity" && (l.opacity_bubble = _);
            }
          } else
            k == "size" && (l.radius_bubble = void 0), k == "opacity" && (l.opacity_bubble = void 0);
      };
      if (t.tmp.bubble_clicking) {
        var i = l.x - t.interactivity.mouse.click_pos_x, o = l.y - t.interactivity.mouse.click_pos_y, r = Math.sqrt(i * i + o * o), m = ((/* @__PURE__ */ new Date()).getTime() - t.interactivity.mouse.click_time) / 1e3;
        m > t.interactivity.modes.bubble.duration && (t.tmp.bubble_duration_end = !0), m > t.interactivity.modes.bubble.duration * 2 && (t.tmp.bubble_clicking = !1, t.tmp.bubble_duration_end = !1);
      }
      t.tmp.bubble_clicking && (v(t.interactivity.modes.bubble.size, t.particles.size.value, l.radius_bubble, l.radius, "size"), v(t.interactivity.modes.bubble.opacity, t.particles.opacity.value, l.opacity_bubble, l.opacity, "opacity"));
    }
  }, t.fn.modes.repulseParticle = function(l) {
    if (t.interactivity.events.onhover.enable && Pt("repulse", t.interactivity.events.onhover.mode) && t.interactivity.status == "mousemove") {
      var i = l.x - t.interactivity.mouse.pos_x, o = l.y - t.interactivity.mouse.pos_y, r = Math.sqrt(i * i + o * o), u = { x: i / r, y: o / r }, c = t.interactivity.modes.repulse.distance, d = 100, f = $S(1 / c * (-1 * Math.pow(r / c, 2) + 1) * c * d, 0, 50), m = {
        x: l.x + u.x * f,
        y: l.y + u.y * f
      };
      t.particles.move.out_mode == "bounce" ? (m.x - l.radius > 0 && m.x + l.radius < t.canvas.w && (l.x = m.x), m.y - l.radius > 0 && m.y + l.radius < t.canvas.h && (l.y = m.y)) : (l.x = m.x, l.y = m.y);
    } else if (t.interactivity.events.onclick.enable && Pt("repulse", t.interactivity.events.onclick.mode))
      if (t.tmp.repulse_finish || (t.tmp.repulse_count++, t.tmp.repulse_count == t.particles.array.length && (t.tmp.repulse_finish = !0)), t.tmp.repulse_clicking) {
        let k = function() {
          var p = Math.atan2(y, v);
          if (l.vx = g * Math.cos(p), l.vy = g * Math.sin(p), t.particles.move.out_mode == "bounce") {
            var _ = {
              x: l.x + l.vx,
              y: l.y + l.vy
            };
            (_.x + l.radius > t.canvas.w || _.x - l.radius < 0) && (l.vx = -l.vx), (_.y + l.radius > t.canvas.h || _.y - l.radius < 0) && (l.vy = -l.vy);
          }
        };
        var c = Math.pow(t.interactivity.modes.repulse.distance / 6, 3), v = t.interactivity.mouse.click_pos_x - l.x, y = t.interactivity.mouse.click_pos_y - l.y, h = v * v + y * y, g = -c / h * 1;
        h <= c && k();
      } else
        t.tmp.repulse_clicking == !1 && (l.vx = l.vx_i, l.vy = l.vy_i);
  }, t.fn.modes.grabParticle = function(l) {
    if (t.interactivity.events.onhover.enable && t.interactivity.status == "mousemove") {
      var i = l.x - t.interactivity.mouse.pos_x, o = l.y - t.interactivity.mouse.pos_y, r = Math.sqrt(i * i + o * o);
      if (r <= t.interactivity.modes.grab.distance) {
        var u = t.interactivity.modes.grab.line_linked.opacity - r / (1 / t.interactivity.modes.grab.line_linked.opacity) / t.interactivity.modes.grab.distance;
        if (u > 0) {
          var c = t.particles.line_linked.color_rgb_line;
          t.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + u + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(l.x, l.y), t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x, t.interactivity.mouse.pos_y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
        }
      }
    }
  }, t.fn.vendors.eventsListeners = function() {
    t.interactivity.detect_on == "window" ? t.interactivity.el = window : t.interactivity.el = t.canvas.el, (t.interactivity.events.onhover.enable || t.interactivity.events.onclick.enable) && (t.interactivity.el.addEventListener("mousemove", function(l) {
      if (t.interactivity.el == window)
        var i = l.clientX, o = l.clientY;
      else
        var i = l.offsetX || l.clientX, o = l.offsetY || l.clientY;
      t.interactivity.mouse.pos_x = i, t.interactivity.mouse.pos_y = o, t.tmp.retina && (t.interactivity.mouse.pos_x *= t.canvas.pxratio, t.interactivity.mouse.pos_y *= t.canvas.pxratio), t.interactivity.status = "mousemove";
    }), t.interactivity.el.addEventListener("mouseleave", function(l) {
      t.interactivity.mouse.pos_x = null, t.interactivity.mouse.pos_y = null, t.interactivity.status = "mouseleave";
    })), t.interactivity.events.onclick.enable && t.interactivity.el.addEventListener("click", function() {
      if (t.interactivity.mouse.click_pos_x = t.interactivity.mouse.pos_x, t.interactivity.mouse.click_pos_y = t.interactivity.mouse.pos_y, t.interactivity.mouse.click_time = (/* @__PURE__ */ new Date()).getTime(), t.interactivity.events.onclick.enable)
        switch (t.interactivity.events.onclick.mode) {
          case "push":
            t.particles.move.enable || t.interactivity.modes.push.particles_nb == 1 ? t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb, t.interactivity.mouse) : t.interactivity.modes.push.particles_nb > 1 && t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb);
            break;
          case "remove":
            t.fn.modes.removeParticles(t.interactivity.modes.remove.particles_nb);
            break;
          case "bubble":
            t.tmp.bubble_clicking = !0;
            break;
          case "repulse":
            t.tmp.repulse_clicking = !0, t.tmp.repulse_count = 0, t.tmp.repulse_finish = !1, setTimeout(function() {
              t.tmp.repulse_clicking = !1;
            }, t.interactivity.modes.repulse.duration * 1e3);
            break;
        }
    });
  }, t.fn.vendors.densityAutoParticles = function() {
    if (t.particles.number.density.enable) {
      var l = t.canvas.el.width * t.canvas.el.height / 1e3;
      t.tmp.retina && (l = l / (t.canvas.pxratio * 2));
      var i = l * t.particles.number.value / t.particles.number.density.value_area, o = t.particles.array.length - i;
      o < 0 ? t.fn.modes.pushParticles(Math.abs(o)) : t.fn.modes.removeParticles(o);
    }
  }, t.fn.vendors.checkOverlap = function(l, i) {
    for (var o = 0; o < t.particles.array.length; o++) {
      var r = t.particles.array[o], u = l.x - r.x, c = l.y - r.y, d = Math.sqrt(u * u + c * c);
      d <= l.radius + r.radius && (l.x = i ? i.x : Math.random() * t.canvas.w, l.y = i ? i.y : Math.random() * t.canvas.h, t.fn.vendors.checkOverlap(l));
    }
  }, t.fn.vendors.createSvgImg = function(l) {
    var i = t.tmp.source_svg, o = /#([0-9A-F]{3,6})/gi, r = i.replace(o, function(m, v, y, h) {
      if (l.color.rgb)
        var g = "rgba(" + l.color.rgb.r + "," + l.color.rgb.g + "," + l.color.rgb.b + "," + l.opacity + ")";
      else
        var g = "hsla(" + l.color.hsl.h + "," + l.color.hsl.s + "%," + l.color.hsl.l + "%," + l.opacity + ")";
      return g;
    }), u = new Blob([r], { type: "image/svg+xml;charset=utf-8" }), c = window.URL || window.webkitURL || window, d = c.createObjectURL(u), f = new Image();
    f.addEventListener("load", function() {
      l.img.obj = f, l.img.loaded = !0, c.revokeObjectURL(d), t.tmp.count_svg++;
    }), f.src = d;
  }, t.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(t.fn.drawAnimFrame), n.remove(), pJSDom = null;
  }, t.fn.vendors.drawShape = function(l, i, o, r, u, c) {
    var d = u * c, f = u / c, m = 180 * (f - 2) / f, v = Math.PI - Math.PI * m / 180;
    l.save(), l.beginPath(), l.translate(i, o), l.moveTo(0, 0);
    for (var y = 0; y < d; y++)
      l.lineTo(r, 0), l.translate(r, 0), l.rotate(v);
    l.fill(), l.restore();
  }, t.fn.vendors.exportImg = function() {
    window.open(t.canvas.el.toDataURL("image/png"), "_blank");
  }, t.fn.vendors.loadImg = function(l) {
    if (t.tmp.img_error = void 0, t.particles.shape.image.src != "")
      if (l == "svg") {
        var i = new XMLHttpRequest();
        i.open("GET", t.particles.shape.image.src), i.onreadystatechange = function(r) {
          i.readyState == 4 && (i.status == 200 ? (t.tmp.source_svg = r.currentTarget.response, t.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), t.tmp.img_error = !0));
        }, i.send();
      } else {
        var o = new Image();
        o.addEventListener("load", function() {
          t.tmp.img_obj = o, t.fn.vendors.checkBeforeDraw();
        }), o.src = t.particles.shape.image.src;
      }
    else
      console.log("Error pJS - No image.src"), t.tmp.img_error = !0;
  }, t.fn.vendors.draw = function() {
    t.particles.shape.type == "image" ? t.tmp.img_type == "svg" ? t.tmp.count_svg >= t.particles.number.value ? (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame)) : t.tmp.img_error || (t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw)) : t.tmp.img_obj != null ? (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame)) : t.tmp.img_error || (t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw)) : (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame));
  }, t.fn.vendors.checkBeforeDraw = function() {
    t.particles.shape.type == "image" ? t.tmp.img_type == "svg" && t.tmp.source_svg == null ? t.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(t.tmp.checkAnimFrame), t.tmp.img_error || (t.fn.vendors.init(), t.fn.vendors.draw())) : (t.fn.vendors.init(), t.fn.vendors.draw());
  }, t.fn.vendors.init = function() {
    t.fn.retinaInit(), t.fn.canvasInit(), t.fn.canvasSize(), t.fn.canvasPaint(), t.fn.particlesCreate(), t.fn.vendors.densityAutoParticles(), t.particles.line_linked.color_rgb_line = Il(t.particles.line_linked.color);
  }, t.fn.vendors.start = function() {
    Pt("image", t.particles.shape.type) ? (t.tmp.img_type = t.particles.shape.image.src.substr(t.particles.shape.image.src.length - 3), t.fn.vendors.loadImg(t.tmp.img_type)) : t.fn.vendors.checkBeforeDraw();
  }, t.fn.vendors.eventsListeners(), t.fn.vendors.start();
};
Object.deepExtend = function(e, a) {
  for (var n in a)
    a[n] && a[n].constructor && a[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], a[n])) : e[n] = a[n];
  return e;
};
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
window.cancelRequestAnimFrame = function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
function Il(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function(t, l, i, o) {
    return l + l + i + i + o + o;
  });
  var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return n ? {
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16)
  } : null;
}
function $S(e, a, n) {
  return Math.min(Math.max(e, a), n);
}
function Pt(e, a) {
  return a.indexOf(e) > -1;
}
window.pJSDom = [];
window.particlesJS = function(e, a) {
  typeof e != "string" && (a = e, e = "particles-js"), e || (e = "particles-js");
  var n = document.getElementById(e), t = "particles-js-canvas-el", l = n.getElementsByClassName(t);
  if (l.length)
    for (; l.length > 0; )
      n.removeChild(l[0]);
  var i = document.createElement("canvas");
  i.className = t, i.style.width = "100%", i.style.height = "100%";
  var o = document.getElementById(e).appendChild(i);
  o != null && pJSDom.push(new FS(e, a));
};
window.particlesJS.load = function(e, a, n) {
  var t = new XMLHttpRequest();
  t.open("GET", a), t.onreadystatechange = function(l) {
    if (t.readyState == 4)
      if (t.status == 200) {
        var i = JSON.parse(l.currentTarget.response);
        window.particlesJS(e, i), n && n();
      } else
        console.log("Error pJS - XMLHttpRequest status: " + t.status), console.log("Error pJS - File config not found");
  }, t.send();
};
const LS = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [t, l] of a)
    n[t] = l;
  return n;
}, OS = {
  //   setup() {
  //     const variable1 = () => {
  //         window.particlesJS({
  //             initParticles() {
  //                 window.particlesJS("particles-js", {
  //                     "particles": {
  //                         "number": {
  //                             "value": 1,
  //                             "density": {
  //                                 "enable": true,
  //                                 "value_area": 1
  //                             }
  //                         },
  //                         "color": {
  //                             "value": "#588163"
  //                         },
  //                         "shape": {
  //                             "type": "circle",
  //                             "stroke": {
  //                                 "width": 0,
  //                                 "color": "#f4f4f4"
  //                             },
  //                             "polygon": {
  //                                 "nb_sides": 5
  //                             },
  //                         },
  //                         "opacity": {
  //                             "value": 0.5,
  //                             "random": false,
  //                             "anim": {
  //                                 "enable": false,
  //                                 "speed": 1,
  //                                 "opacity_min": 0.1,
  //                                 "sync": false
  //                             }
  //                         },
  //                         "size": {
  //                             "value": 0,
  //                             "random": true,
  //                             "anim": {
  //                                 "enable": false,
  //                                 "speed": 40,
  //                                 "size_min": 0.1,
  //                                 "sync": false
  //                             }
  //                         },
  //                         "line_linked": {
  //                             "enable": true,
  //                             "distance": 150,
  //                             "color": "#ffffff",
  //                             "opacity": 0.4,
  //                             "width": 1
  //                         },
  //                         "move": {
  //                             "enable": true,
  //                             "speed": 1,
  //                             "direction": "none",
  //                             "random": false,
  //                             "straight": false,
  //                             "out_mode": "out",
  //                             "bounce": false,
  //                             "attract": {
  //                                 "enable": false,
  //                                 "rotateX": 600,
  //                                 "rotateY": 1200
  //                             }
  //                         }
  //                     },
  //                     "interactivity": {
  //                         "detect_on": "canvas",
  //                         "events": {
  //                             "onhover": {
  //                                     "enable": true,
  //                                     "mode": "grab"
  //                             },
  //                             "onclick": {
  //                                 "enable": true,
  //                                 "mode": "push"
  //                             },
  //                             "resize": true
  //                         },
  //                         "modes": {
  //                             "grab": {
  //                                 "distance": 140,
  //                                 "line_linked": {
  //                                     "opacity": 1
  //                                 }
  //                             },
  //                             "bubble": {
  //                                 "distance": 1,
  //                                 "size": 2,
  //                                 "duration": 2,
  //                                 "opacity": 8,
  //                                 "speed": 3
  //                             },
  //                             "repulse": {
  //                                 "distance": 200,
  //                                 "duration": 0.4
  //                             },
  //                             "push": {
  //                                 "particles_nb": 4
  //                             },
  //                             "remove": {
  //                                 "particles_nb": 2
  //                             }
  //                         }
  //                     },
  //                     "retina_detect": true
  //                 })
  //             }
  //         });
  //     };
  //     return { variable1 };
  //   },
  //   mounted() {
  //     this.variable1();
  //   },
}, RS = { style: { display: "flex", gap: "5px" } }, NS = /* @__PURE__ */ Le("div", null, [
  /* @__PURE__ */ Le("h2", null, "Title"),
  /* @__PURE__ */ Le("p", { style: { "margin-top": "-5px", "font-size": "13px" } }, "ver 0.0.1")
], -1), zS = /* @__PURE__ */ Le("p", null, "-", -1), HS = /* @__PURE__ */ Le("h2", { style: { "text-align": "center" } }, [
  /* @__PURE__ */ Le("b", null, "subtitle, make this interesting.")
], -1), WS = /* @__PURE__ */ Le("div", null, [
  /* @__PURE__ */ Le("div", { id: "particles-js" })
], -1), jS = /* @__PURE__ */ Le("div", null, [
  /* @__PURE__ */ Le("p", { style: { "font-size": "12px" } }, [
    /* @__PURE__ */ Ke("Powered By: "),
    /* @__PURE__ */ Le("b", null, "Integrated HRD Systems")
  ])
], -1), YS = /* @__PURE__ */ Le("div", null, [
  /* @__PURE__ */ Le("h2", null, "Welcome!"),
  /* @__PURE__ */ Le("p", null, "Please login to continue")
], -1), GS = /* @__PURE__ */ Le("div", null, [
  /* @__PURE__ */ Le("p", null, [
    /* @__PURE__ */ Ke("Don't have an Account? "),
    /* @__PURE__ */ Le("a", { href: "" }, "Register"),
    /* @__PURE__ */ Ke(".")
  ]),
  /* @__PURE__ */ Le("p", null, [
    /* @__PURE__ */ Ke("Reset Password? "),
    /* @__PURE__ */ Le("a", { href: "" }, "Reset"),
    /* @__PURE__ */ Ke(".")
  ])
], -1);
function US(e, a, n, t, l, i) {
  return vi(), wr(Yn, { style: { display: "flex", "align-items": "center", "justify-content": "center", height: "100svh" } }, {
    default: zt(() => [
      s(Yn, {
        elevation: "3",
        style: { display: "flex" },
        height: "420",
        width: "670",
        rounded: "lg"
      }, {
        default: zt(() => [
          s(Yn, {
            style: { display: "flex", "flex-direction": "column", "justify-content": "space-between", padding: "25px", "border-radius": "1px !important" },
            width: "50%",
            color: "#0c4b7e"
          }, {
            default: zt(() => [
              Le("div", null, [
                Le("div", RS, [
                  s(Se, { size: "40" }, {
                    default: zt(() => [
                      Ke("mdi-airballoon-outline")
                    ]),
                    _: 1
                  }),
                  NS
                ]),
                zS,
                HS
              ]),
              WS,
              jS
            ]),
            _: 1
          }),
          s(Yn, {
            style: { display: "flex", "flex-direction": "column", "justify-content": "space-around", "border-radius": "1px !important", padding: "25px" },
            width: "50%"
          }, {
            default: zt(() => [
              YS,
              Le("div", null, [
                s($t, {
                  density: "compact",
                  label: "EmployeeID",
                  variant: "outlined"
                }),
                s($t, {
                  density: "compact",
                  label: "Password",
                  variant: "outlined"
                }),
                s(be, {
                  width: "50%",
                  style: { "font-weight": "bold" },
                  color: "#0c4b7e"
                }, {
                  default: zt(() => [
                    Ke("Login "),
                    s(Se, null, {
                      default: zt(() => [
                        Ke("mdi-login")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              GS
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const qS = /* @__PURE__ */ LS(OS, [["render", US]]), KS = {
  __name: "App",
  setup(e) {
    return (a, n) => (vi(), qc("div", null, [
      s(qS)
    ]));
  }
}, JS = {
  __name: "Button",
  props: {
    label: {
      type: String,
      default: "Button"
    }
  },
  setup(e) {
    return (a, n) => (vi(), wr(be, Kc(Xc(a.$props)), {
      default: zt(() => [
        Ke(kr(e.label), 1)
      ]),
      _: 1
    }, 16));
  }
}, XS = rs({
  components: wS,
  directives: ES,
  icons: {
    defaultSet: "mdi"
  }
});
Zc(KS).use(XS).mount("#app");
const QS = {
  install: (e) => {
    e.component("MyButton", "LoginKit");
  }
};
export {
  qS as LoginKit,
  JS as MyButton,
  QS as MyComponentLibrary,
  XS as vuetify
};
