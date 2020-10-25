!(function (o) {
  var n = {};
  function i(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return o[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = o),
    (i.c = n),
    (i.d = function (e, t, o) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (i.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          i.d(
            o,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return o;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    i((i.s = 0));
})([
  function (e, t, o) {
    "use strict";
    o.r(t);
    function n(e) {
      return "IMG" === e.tagName;
    }
    function E(e) {
      return e && 1 === e.nodeType;
    }
    function l(e) {
      return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
    }
    function m(e) {
      try {
        return Array.isArray(e)
          ? e.filter(n)
          : ((t = e),
            NodeList.prototype.isPrototypeOf(t)
              ? [].slice.call(e).filter(n)
              : E(e)
              ? [e].filter(n)
              : "string" == typeof e
              ? [].slice.call(document.querySelectorAll(e)).filter(n)
              : []);
      } catch (e) {
        throw new TypeError(
          "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
        );
      }
      var t;
    }
    function w(e, t) {
      var o = c({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
      return "function" == typeof window.CustomEvent
        ? new CustomEvent(e, o)
        : ((t = document.createEvent("CustomEvent")).initCustomEvent(
            e,
            o.bubbles,
            o.cancelable,
            o.detail
          ),
          t);
    }
    /*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
    var c =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var o,
              n = arguments[t];
            for (o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      t = function t(e, o) {
        function n(e) {
          function u() {
            var e = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              },
              t = void 0,
              o = void 0;
            h.container &&
              (h.container instanceof Object
                ? ((t =
                    (e = c({}, e, h.container)).width -
                    e.left -
                    e.right -
                    2 * h.margin),
                  (o = e.height - e.top - e.bottom - 2 * h.margin))
                : ((r = (i = (E(h.container)
                    ? h.container
                    : document.querySelector(h.container)
                  ).getBoundingClientRect()).width),
                  (m = i.height),
                  (d = i.left),
                  (a = i.top),
                  (e = c({}, e, { width: r, height: m, left: d, top: a })))),
              (t = t || e.width - 2 * h.margin),
              (o = o || e.height - 2 * h.margin);
            var n = z.zoomedHd || z.original,
              i = (!l(n) && n.naturalWidth) || t,
              r = (!l(n) && n.naturalHeight) || o,
              d = (m = n.getBoundingClientRect()).top,
              a = m.left,
              n = m.width,
              m = m.height,
              i = Math.min(i, t) / n,
              r = Math.min(r, o) / m,
              r =
                "scale(" +
                (r = Math.min(i, r)) +
                ") translate3d(" +
                ((t - n) / 2 - a + h.margin + e.left) / r +
                "px, " +
                ((o - m) / 2 - d + h.margin + e.top) / r +
                "px, 0)";
            (z.zoomed.style.transform = r),
              z.zoomedHd && (z.zoomedHd.style.transform = r);
          }
          var s = (0 < arguments.length && void 0 !== e ? e : {}).target;
          return new r(function (t) {
            if (s && -1 === p.indexOf(s)) t(b);
            else {
              var e,
                o,
                n,
                i,
                r,
                d,
                a,
                m,
                l,
                c = function e() {
                  (g = !1),
                    z.zoomed.removeEventListener("transitionend", e),
                    z.original.dispatchEvent(
                      w("medium-zoom:opened", { detail: { zoom: b } })
                    ),
                    t(b);
                };
              if (z.zoomed) t(b);
              else {
                if (s) z.original = s;
                else {
                  if (!(0 < p.length)) return void t(b);
                  z.original = p[0];
                }
                z.original.dispatchEvent(
                  w("medium-zoom:open", { detail: { zoom: b } })
                ),
                  (v =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0),
                  (g = !0),
                  (z.zoomed =
                    ((e = z.original),
                    (o = e.getBoundingClientRect()),
                    (n = o.top),
                    (i = o.left),
                    (r = o.width),
                    (d = o.height),
                    (a = e.cloneNode()),
                    (o =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      0),
                    (e =
                      window.pageXOffset ||
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft ||
                      0),
                    a.removeAttribute("id"),
                    (a.style.position = "absolute"),
                    (a.style.top = n + o + "px"),
                    (a.style.left = i + e + "px"),
                    (a.style.width = r + "px"),
                    (a.style.height = d + "px"),
                    (a.style.transform = ""),
                    a)),
                  document.body.appendChild(y),
                  h.template &&
                    ((a = E(h.template)
                      ? h.template
                      : document.querySelector(h.template)),
                    (z.template = document.createElement("div")),
                    z.template.appendChild(a.content.cloneNode(!0)),
                    document.body.appendChild(z.template)),
                  document.body.appendChild(z.zoomed),
                  window.requestAnimationFrame(function () {
                    document.body.classList.add("medium-zoom--opened");
                  }),
                  z.original.classList.add("medium-zoom-image--hidden"),
                  z.zoomed.classList.add("medium-zoom-image--opened"),
                  z.zoomed.addEventListener("click", f),
                  z.zoomed.addEventListener("transitionend", c),
                  z.original.getAttribute("data-zoom-src")
                    ? ((z.zoomedHd = z.zoomed.cloneNode()),
                      z.zoomedHd.removeAttribute("srcset"),
                      z.zoomedHd.removeAttribute("sizes"),
                      (z.zoomedHd.src = z.zoomed.getAttribute("data-zoom-src")),
                      (z.zoomedHd.onerror = function () {
                        clearInterval(m),
                          console.warn(
                            "Unable to reach the zoom image target " +
                              z.zoomedHd.src
                          ),
                          (z.zoomedHd = null),
                          u();
                      }),
                      (m = setInterval(function () {
                        z.zoomedHd.complete &&
                          (clearInterval(m),
                          z.zoomedHd.classList.add("medium-zoom-image--opened"),
                          z.zoomedHd.addEventListener("click", f),
                          document.body.appendChild(z.zoomedHd),
                          u());
                      }, 10)))
                    : z.original.hasAttribute("srcset")
                    ? ((z.zoomedHd = z.zoomed.cloneNode()),
                      z.zoomedHd.removeAttribute("sizes"),
                      z.zoomedHd.removeAttribute("loading"),
                      (l = z.zoomedHd.addEventListener("load", function () {
                        z.zoomedHd.removeEventListener("load", l),
                          z.zoomedHd.classList.add("medium-zoom-image--opened"),
                          z.zoomedHd.addEventListener("click", f),
                          document.body.appendChild(z.zoomedHd),
                          u();
                      })))
                    : u();
              }
            }
          });
        }
        var i = 1 < arguments.length && void 0 !== o ? o : {},
          r =
            window.Promise ||
            function (e) {
              function t() {}
              e(t, t);
            },
          o = function () {
            for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
              t[o] = arguments[o];
            var i = t.reduce(function (e, t) {
              return [].concat(e, m(t));
            }, []);
            return (
              i
                .filter(function (e) {
                  return -1 === p.indexOf(e);
                })
                .forEach(function (e) {
                  p.push(e), e.classList.add("medium-zoom-image");
                }),
              a.forEach(function (e) {
                var t = e.type,
                  o = e.listener,
                  n = e.options;
                i.forEach(function (e) {
                  e.addEventListener(t, o, n);
                });
              }),
              b
            );
          },
          f = function () {
            return new r(function (t) {
              var e;
              !g && z.original
                ? ((e = function e() {
                    z.original.classList.remove("medium-zoom-image--hidden"),
                      document.body.removeChild(z.zoomed),
                      z.zoomedHd && document.body.removeChild(z.zoomedHd),
                      document.body.removeChild(y),
                      z.zoomed.classList.remove("medium-zoom-image--opened"),
                      z.template && document.body.removeChild(z.template),
                      (g = !1),
                      z.zoomed.removeEventListener("transitionend", e),
                      z.original.dispatchEvent(
                        w("medium-zoom:closed", { detail: { zoom: b } })
                      ),
                      (z.original = null),
                      (z.zoomed = null),
                      (z.zoomedHd = null),
                      (z.template = null),
                      t(b);
                  }),
                  (g = !0),
                  document.body.classList.remove("medium-zoom--opened"),
                  (z.zoomed.style.transform = ""),
                  z.zoomedHd && (z.zoomedHd.style.transform = ""),
                  z.template &&
                    ((z.template.style.transition = "opacity 150ms"),
                    (z.template.style.opacity = 0)),
                  z.original.dispatchEvent(
                    w("medium-zoom:close", { detail: { zoom: b } })
                  ),
                  z.zoomed.addEventListener("transitionend", e))
                : t(b);
            });
          },
          d = function (e) {
            e = (0 < arguments.length && void 0 !== e ? e : {}).target;
            return z.original ? f() : n({ target: e });
          },
          p = [],
          a = [],
          g = !1,
          v = 0,
          h = i,
          z = { original: null, zoomed: null, zoomedHd: null, template: null };
        "[object Object]" === Object.prototype.toString.call(e)
          ? (h = e)
          : (!e && "string" != typeof e) || o(e),
          (h = c(
            {
              margin: 0,
              background: "#fff",
              scrollOffset: 40,
              container: null,
              template: null,
            },
            h
          ));
        var y =
          ((i = h.background),
          (e = document.createElement("div")).classList.add(
            "medium-zoom-overlay"
          ),
          (e.style.background = i),
          e);
        document.addEventListener("click", function (e) {
          e = e.target;
          e !== y ? -1 !== p.indexOf(e) && d({ target: e }) : f();
        }),
          document.addEventListener("keyup", function (e) {
            e = e.key || e.keyCode;
            ("Escape" !== e && "Esc" !== e && 27 !== e) || f();
          }),
          document.addEventListener("scroll", function () {
            var e;
            !g &&
              z.original &&
              ((e =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0),
              Math.abs(v - e) > h.scrollOffset && setTimeout(f, 150));
          }),
          window.addEventListener("resize", f);
        var b = {
          open: n,
          close: f,
          toggle: d,
          update: function (e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
              e = t;
            return (
              t.background && (y.style.background = t.background),
              t.container &&
                t.container instanceof Object &&
                (e.container = c({}, h.container, t.container)),
              t.template &&
                ((t = E(t.template)
                  ? t.template
                  : document.querySelector(t.template)),
                (e.template = t)),
              (h = c({}, h, e)),
              p.forEach(function (e) {
                e.dispatchEvent(
                  w("medium-zoom:update", { detail: { zoom: b } })
                );
              }),
              b
            );
          },
          clone: function (e) {
            return t(c({}, h, 0 < arguments.length && void 0 !== e ? e : {}));
          },
          attach: o,
          detach: function () {
            for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
              t[o] = arguments[o];
            z.zoomed && f();
            var n =
              0 < t.length
                ? t.reduce(function (e, t) {
                    return [].concat(e, m(t));
                  }, [])
                : p;
            return (
              n.forEach(function (e) {
                e.classList.remove("medium-zoom-image"),
                  e.dispatchEvent(
                    w("medium-zoom:detach", { detail: { zoom: b } })
                  );
              }),
              (p = p.filter(function (e) {
                return -1 === n.indexOf(e);
              })),
              b
            );
          },
          on: function (t, o, e) {
            var n = 2 < arguments.length && void 0 !== e ? e : {};
            return (
              p.forEach(function (e) {
                e.addEventListener("medium-zoom:" + t, o, n);
              }),
              a.push({ type: "medium-zoom:" + t, listener: o, options: n }),
              b
            );
          },
          off: function (t, o, e) {
            var n = 2 < arguments.length && void 0 !== e ? e : {};
            return (
              p.forEach(function (e) {
                e.removeEventListener("medium-zoom:" + t, o, n);
              }),
              (a = a.filter(function (e) {
                return !(
                  e.type === "medium-zoom:" + t &&
                  e.listener.toString() === o.toString()
                );
              })),
              b
            );
          },
          getOptions: function () {
            return h;
          },
          getImages: function () {
            return p;
          },
          getZoomedImage: function () {
            return z.original;
          },
        };
        return b;
      };
    !(function (e, t) {
      void 0 === t && (t = {});
      var o,
        n = t.insertAt;
      e &&
        "undefined" != typeof document &&
        ((o = document.head || document.getElementsByTagName("head")[0]),
        ((t = document.createElement("style")).type = "text/css"),
        "top" === n && o.firstChild
          ? o.insertBefore(t, o.firstChild)
          : o.appendChild(t),
        t.styleSheet
          ? (t.styleSheet.cssText = e)
          : t.appendChild(document.createTextNode(e)));
    })(
      ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"
    ),
      t(".zoomable", { margin: 24 });
    var t = document.getElementById("video"),
      i = document.getElementById("video-preview"),
      r = document.getElementById("video-iframe");
    t.addEventListener("click", function (e) {
      e.preventDefault(), (i.style.display = "none"), (r.src += "&autoplay=1");
    });
  },
]);
