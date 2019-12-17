jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});
/*!
 * Layzr.js 2.0.2 - A small, fast, and modern library for lazy loading images.
 * Copyright (c) 2016 Michael Cavalea - http://callmecavs.github.io/layzr.js/
 * License: MIT
 */
! function(e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else { var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Layzr = e() } }(function() { var e; return function t(e, n, r) {
        function o(u, f) { if (!n[u]) { if (!e[u]) { var s = "function" == typeof require && require; if (!f && s) return s(u, !0); if (i) return i(u, !0); var c = new Error("Cannot find module '" + u + "'"); throw c.code = "MODULE_NOT_FOUND", c } var a = n[u] = { exports: {} };
                e[u][0].call(a.exports, function(t) { var n = e[u][1][t]; return o(n ? n : t) }, a, a.exports, t, e, n, r) } return n[u].exports } for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]); return o }({ 1: [function(t, n, r) {
            (function(o) {! function(t) { if ("object" == typeof r && "undefined" != typeof n) n.exports = t();
                    else if ("function" == typeof e && e.amd) e([], t);
                    else { var i;
                        i = "undefined" != typeof window ? window : "undefined" != typeof o ? o : "undefined" != typeof self ? self : this, i.Knot = t() } }(function() { return function e(n, r, o) {
                        function i(f, s) { if (!r[f]) { if (!n[f]) { var c = "function" == typeof t && t; if (!s && c) return c(f, !0); if (u) return u(f, !0); var a = new Error("Cannot find module '" + f + "'"); throw a.code = "MODULE_NOT_FOUND", a } var d = r[f] = { exports: {} };
                                n[f][0].call(d.exports, function(e) { var t = n[f][1][e]; return i(t ? t : e) }, d, d.exports, e, n, r, o) } return r[f].exports } for (var u = "function" == typeof t && t, f = 0; f < o.length; f++) i(o[f]); return i }({ 1: [function(e, t, n) { "use strict";
                            Object.defineProperty(n, "__esModule", { value: !0 }), n["default"] = function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; return e.events = {}, e.on = function(t, n) { return e.events[t] = e.events[t] || [], e.events[t].push(n), e }, e.once = function(t, n) { return n._once = !0, e.on(t, n), e }, e.off = function(t, n) { return 2 === arguments.length ? e.events[t].splice(e.events[t].indexOf(n), 1) : delete e.events[t], e }, e.emit = function(t) { for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) r[o - 1] = arguments[o]; var i = e.events[t] && e.events[t].slice(); return i && i.forEach(function(n) { n._once && e.off(t, n), n.apply(e, r) }), e }, e }, t.exports = n["default"] }, {}] }, {}, [1])(1) }) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 2: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { "default": e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var o = e("knot.js"),
                i = r(o);
            n["default"] = function() {
                function e() { return window.scrollY || window.pageYOffset }

                function t() { d = e(), n() }

                function n() { l || (requestAnimationFrame(function() { return s() }), l = !0) }

                function r(e) { return e.getBoundingClientRect().top + d }

                function o(e) { var t = d,
                        n = t + v,
                        o = r(e),
                        i = o + e.offsetHeight,
                        u = m.threshold / 100 * v; return i >= t - u && n + u >= o }

                function u(e) { if (g.emit("src:before", e), h && e.hasAttribute(m.srcset)) e.setAttribute("srcset", e.getAttribute(m.srcset));
                    else { var t = w > 1 && e.getAttribute(m.retina);
                        e.setAttribute("src", t || e.getAttribute(m.normal)) }
                    g.emit("src:after", e), [m.normal, m.retina, m.srcset].forEach(function(t) { return e.removeAttribute(t) }), c() }

                function f(e) { var n = e ? "addEventListener" : "removeEventListener"; return ["scroll", "resize"].forEach(function(e) { return window[n](e, t) }), this }

                function s() { return v = window.innerHeight, p.forEach(function(e) { return o(e) && u(e) }), l = !1, this }

                function c() { return p = Array.prototype.slice.call(document.querySelectorAll("[" + m.normal + "]")), this } var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    d = e(),
                    l = void 0,
                    p = void 0,
                    v = void 0,
                    m = { normal: a.normal || "data-normal", retina: a.retina || "data-retina", srcset: a.srcset || "data-srcset", threshold: a.threshold || 0 },
                    h = document.body.classList.contains("srcset") || "srcset" in document.createElement("img"),
                    w = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI,
                    g = (0, i["default"])({ handlers: f, check: s, update: c }); return g }, t.exports = n["default"] }, { "knot.js": 1 }] }, {}, [2])(2) });