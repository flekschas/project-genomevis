!(function(o) {
  var n = {};
  function i(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return o[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = o),
    (i.c = n),
    (i.d = function(e, t, o) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
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
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return o;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    i((i.s = 1));
})([
  function(e, t, o) {},
  function(e, t, o) {
    "use strict";
    o.r(t);
    /*! medium-zoom 1.0.2 | MIT License | https://github.com/francoischalifour/medium-zoom */ var H =
        Object.assign ||
        function(e) {
          for (var t, o = 1; o < arguments.length; o++)
            for (var n in (t = arguments[o]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        },
      n = function(e) {
        return "IMG" === e.tagName;
      },
      O = function(e) {
        return e && 1 === e.nodeType;
      },
      C = function(e) {
        return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
      },
      l = function(e) {
        try {
          return Array.isArray(e)
            ? e.filter(n)
            : ((t = e),
              NodeList.prototype.isPrototypeOf(t)
                ? [].slice.call(e).filter(n)
                : O(e)
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
      },
      x = function(e, t) {
        var o = H({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
        if ("function" == typeof window.CustomEvent)
          return new CustomEvent(e, o);
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, o.bubbles, o.cancelable, o.detail), n;
      },
      c =
        window.Promise ||
        function(e) {
          function t() {}
          e(t, t);
        };
    !(function(e, t) {
      void 0 === t && (t = {});
      var o = t.insertAt;
      if (e && "undefined" != typeof document) {
        var n = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("style");
        (i.type = "text/css"),
          "top" === o && n.firstChild
            ? n.insertBefore(i, n.firstChild)
            : n.appendChild(i),
          i.styleSheet
            ? (i.styleSheet.cssText = e)
            : i.appendChild(document.createTextNode(e));
      }
    })(
      ".medium-zoom-overlay{bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{cursor:pointer;cursor:zoom-out;position:relative;will-change:transform}"
    );
    var i = function t(e) {
      var o =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        n = function() {
          for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
          var i = t.reduce(function(e, t) {
            return [].concat(e, l(t));
          }, []);
          return (
            i
              .filter(function(e) {
                return -1 === h.indexOf(e);
              })
              .forEach(function(e) {
                h.push(e), e.classList.add("medium-zoom-image");
              }),
            d.forEach(function(e) {
              var t = e.type,
                o = e.listener,
                n = e.options;
              i.forEach(function(e) {
                e.addEventListener(t, o, n);
              });
            }),
            L
          );
        },
        i = function() {
          var p = (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : {}
            ).target,
            v = function() {
              var e = Math.min,
                t = {
                  width: window.innerWidth,
                  height: window.innerHeight,
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0
                },
                o = void 0,
                n = void 0;
              if (b.container)
                if (b.container instanceof Object)
                  (o =
                    (t = H({}, t, b.container)).width -
                    t.left -
                    t.right -
                    2 * b.margin),
                    (n = t.height - t.top - t.bottom - 2 * b.margin);
                else {
                  var i = (O(b.container)
                      ? b.container
                      : document.querySelector(b.container)
                    ).getBoundingClientRect(),
                    r = i.width,
                    d = i.height,
                    a = i.left,
                    m = i.top;
                  t = H({}, t, { width: r, height: d, left: a, top: m });
                }
              (o = o || t.width - 2 * b.margin),
                (n = n || t.height - 2 * b.margin);
              var l = E.zoomedHd || E.original,
                c = C(l) ? o : l.naturalWidth || o,
                u = C(l) ? n : l.naturalHeight || n,
                s = l.getBoundingClientRect(),
                f = s.top,
                p = s.left,
                v = s.width,
                g = s.height,
                h = e(e(c, o) / v, e(u, n) / g),
                z =
                  "scale(" +
                  h +
                  ") translate3d(" +
                  ((o - v) / 2 - p + b.margin + t.left) / h +
                  "px, " +
                  ((n - g) / 2 - f + b.margin + t.top) / h +
                  "px, 0)";
              (E.zoomed.style.transform = z),
                E.zoomedHd && (E.zoomedHd.style.transform = z);
            };
          return new c(function(t) {
            if (p && -1 === h.indexOf(p)) t(L);
            else if (E.zoomed) t(L);
            else {
              if (p) E.original = p;
              else {
                if (!(0 < h.length)) return void t(L);
                var e = h;
                E.original = e[0];
              }
              if (
                (E.original.dispatchEvent(
                  x("medium-zoom:open", { detail: { zoom: L } })
                ),
                (y =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0),
                (z = !0),
                (E.zoomed = ((n = E.original),
                (i = n.getBoundingClientRect()),
                (r = i.top),
                (d = i.left),
                (a = i.width),
                (m = i.height),
                (l = n.cloneNode()),
                (c =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0),
                (u =
                  window.pageXOffset ||
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft ||
                  0),
                l.removeAttribute("id"),
                (l.style.position = "absolute"),
                (l.style.top = r + c + "px"),
                (l.style.left = d + u + "px"),
                (l.style.width = a + "px"),
                (l.style.height = m + "px"),
                (l.style.transform = ""),
                l)),
                document.body.appendChild(w),
                b.template)
              ) {
                var o = O(b.template)
                  ? b.template
                  : document.querySelector(b.template);
                (E.template = document.createElement("div")),
                  E.template.appendChild(o.content.cloneNode(!0)),
                  document.body.appendChild(E.template);
              }
              var n, i, r, d, a, m, l, c, u;
              if (
                (document.body.appendChild(E.zoomed),
                window.requestAnimationFrame(function() {
                  document.body.classList.add("medium-zoom--opened");
                }),
                E.original.classList.add("medium-zoom-image--hidden"),
                E.zoomed.classList.add("medium-zoom-image--opened"),
                E.zoomed.addEventListener("click", g),
                E.zoomed.addEventListener("transitionend", function e() {
                  (z = !1),
                    E.zoomed.removeEventListener("transitionend", e),
                    E.original.dispatchEvent(
                      x("medium-zoom:opened", { detail: { zoom: L } })
                    ),
                    t(L);
                }),
                E.original.getAttribute("data-zoom-src"))
              ) {
                (E.zoomedHd = E.zoomed.cloneNode()),
                  E.zoomedHd.removeAttribute("srcset"),
                  E.zoomedHd.removeAttribute("sizes"),
                  (E.zoomedHd.src = E.zoomed.getAttribute("data-zoom-src")),
                  (E.zoomedHd.onerror = function() {
                    clearInterval(s),
                      console.warn(
                        "Unable to reach the zoom image target " +
                          E.zoomedHd.src
                      ),
                      (E.zoomedHd = null),
                      v();
                  });
                var s = setInterval(function() {
                  E.zoomedHd.complete &&
                    (clearInterval(s),
                    E.zoomedHd.classList.add("medium-zoom-image--opened"),
                    E.zoomedHd.addEventListener("click", g),
                    document.body.appendChild(E.zoomedHd),
                    v());
                }, 10);
              } else if (E.original.hasAttribute("srcset")) {
                (E.zoomedHd = E.zoomed.cloneNode()),
                  E.zoomedHd.removeAttribute("sizes");
                var f = E.zoomedHd.addEventListener("load", function() {
                  E.zoomedHd.removeEventListener("load", f),
                    E.zoomedHd.classList.add("medium-zoom-image--opened"),
                    E.zoomedHd.addEventListener("click", g),
                    document.body.appendChild(E.zoomedHd),
                    v();
                });
              } else v();
            }
          });
        },
        g = function() {
          return new c(function(t) {
            !z && E.original
              ? ((z = !0),
                document.body.classList.remove("medium-zoom--opened"),
                (E.zoomed.style.transform = ""),
                E.zoomedHd && (E.zoomedHd.style.transform = ""),
                E.template &&
                  ((E.template.style.transition = "opacity 150ms"),
                  (E.template.style.opacity = 0)),
                E.original.dispatchEvent(
                  x("medium-zoom:close", { detail: { zoom: L } })
                ),
                E.zoomed.addEventListener("transitionend", function e() {
                  E.original.classList.remove("medium-zoom-image--hidden"),
                    document.body.removeChild(E.zoomed),
                    E.zoomedHd && document.body.removeChild(E.zoomedHd),
                    document.body.removeChild(w),
                    E.zoomed.classList.remove("medium-zoom-image--opened"),
                    E.template && document.body.removeChild(E.template),
                    (z = !1),
                    E.zoomed.removeEventListener("transitionend", e),
                    E.original.dispatchEvent(
                      x("medium-zoom:closed", { detail: { zoom: L } })
                    ),
                    (E.original = null),
                    (E.zoomed = null),
                    (E.zoomedHd = null),
                    (E.template = null),
                    t(L);
                }))
              : t(L);
          });
        },
        r = function() {
          var e = (0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : {}
          ).target;
          return E.original ? g() : i({ target: e });
        },
        h = [],
        d = [],
        z = !1,
        y = 0,
        b = o,
        E = { original: null, zoomed: null, zoomedHd: null, template: null };
      "[object Object]" === Object.prototype.toString.call(e)
        ? (b = e)
        : (e || "string" == typeof e) && n(e),
        (b = H(
          {
            margin: 0,
            background: "#fff",
            scrollOffset: 40,
            container: null,
            template: null
          },
          b
        ));
      var a,
        m,
        w = ((a = b.background),
        (m = document.createElement("div")).classList.add(
          "medium-zoom-overlay"
        ),
        (m.style.background = a),
        m);
      document.addEventListener("click", function(e) {
        var t = e.target;
        return t === w
          ? void g()
          : void (-1 === h.indexOf(t) || r({ target: t }));
      }),
        document.addEventListener("keyup", function(e) {
          27 === (e.keyCode || e.which) && g();
        }),
        document.addEventListener("scroll", function() {
          if (!z && E.original) {
            var e =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
            Math.abs(y - e) > b.scrollOffset && setTimeout(g, 150);
          }
        }),
        window.addEventListener("resize", g);
      var L = {
        open: i,
        close: g,
        toggle: r,
        update: function() {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e;
          if (
            (e.background && (w.style.background = e.background),
            e.container &&
              e.container instanceof Object &&
              (t.container = H({}, b.container, e.container)),
            e.template)
          ) {
            var o = O(e.template)
              ? e.template
              : document.querySelector(e.template);
            t.template = o;
          }
          return (
            (b = H({}, b, t)),
            h.forEach(function(e) {
              e.dispatchEvent(x("medium-zoom:update", { detail: { zoom: L } }));
            }),
            L
          );
        },
        clone: function() {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return t(H({}, b, e));
        },
        attach: n,
        detach: function() {
          for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
          E.zoomed && g();
          var n =
            0 < t.length
              ? t.reduce(function(e, t) {
                  return [].concat(e, l(t));
                }, [])
              : h;
          return (
            n.forEach(function(e) {
              e.classList.remove("medium-zoom-image"),
                e.dispatchEvent(
                  x("medium-zoom:detach", { detail: { zoom: L } })
                );
            }),
            (h = h.filter(function(e) {
              return -1 === n.indexOf(e);
            })),
            L
          );
        },
        on: function(t, o) {
          var n =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          return (
            h.forEach(function(e) {
              e.addEventListener("medium-zoom:" + t, o, n);
            }),
            d.push({ type: "medium-zoom:" + t, listener: o, options: n }),
            L
          );
        },
        off: function(t, o) {
          var n =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          return (
            h.forEach(function(e) {
              e.removeEventListener("medium-zoom:" + t, o, n);
            }),
            (d = d.filter(function(e) {
              return (
                e.type !== "medium-zoom:" + t ||
                e.listener.toString() !== o.toString()
              );
            })),
            L
          );
        },
        getOptions: function() {
          return b;
        },
        getImages: function() {
          return h;
        },
        getZoomedImage: function() {
          return E.original;
        }
      };
      return L;
    };
    o(0);
    i(".zoomable", { margin: 24 });
    var r = document.getElementById("video"),
      d = document.getElementById("video-preview"),
      a = document.getElementById("video-iframe");
    r.addEventListener("click", function(e) {
      e.preventDefault(), (d.style.display = "none"), (a.src += "&autoplay=1");
    });
  }
]);
