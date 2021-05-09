!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
      var i = e();
      for (var r in i) ("object" == typeof exports ? exports : t)[r] = i[r];
  }
})(window, function () {
  return (function (t) {
      var e = {};
      function i(r) {
          if (e[r]) return e[r].exports;
          var n = (e[r] = { i: r, l: !1, exports: {} });
          return t[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
      }
      return (
          (i.m = t),
          (i.c = e),
          (i.d = function (t, e, r) {
              i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
          }),
          (i.r = function (t) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
          }),
          (i.t = function (t, e) {
              if ((1 & e && (t = i(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if ((i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                  for (var n in t)
                      i.d(
                          r,
                          n,
                          function (e) {
                              return t[e];
                          }.bind(null, n)
                      );
              return r;
          }),
          (i.n = function (t) {
              var e =
                  t && t.__esModule
                      ? function () {
                            return t.default;
                        }
                      : function () {
                            return t;
                        };
              return i.d(e, "a", e), e;
          }),
          (i.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (i.p = ""),
          i((i.s = 30))
      );
  })([
      function (t, e, i) {
          t.exports = i(20)();
      },
      function (t, e) {
          t.exports = function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          };
      },
      function (t, e) {
          function i(t, e) {
              for (var i = 0; i < e.length; i++) {
                  var r = e[i];
                  (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
              }
          }
          t.exports = function (t, e, r) {
              return e && i(t.prototype, e), r && i(t, r), t;
          };
      },
      function (t, e, i) {
          var r = i(15),
              n = i(16);
          t.exports = function (t, e) {
              return !e || ("object" !== r(e) && "function" != typeof e) ? n(t) : e;
          };
      },
      function (t, e) {
          function i(e) {
              return (
                  (t.exports = i = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (t) {
                            return t.__proto__ || Object.getPrototypeOf(t);
                        }),
                  i(e)
              );
          }
          t.exports = i;
      },
      function (t, e, i) {
          var r = i(17);
          t.exports = function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
              (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && r(t, e);
          };
      },
      function (t, e, i) {
          (function (t) {
              /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
              var r,
                  n,
                  o,
                  s,
                  a,
                  h,
                  c,
                  l,
                  u,
                  f,
                  d,
                  g,
                  p,
                  v,
                  m,
                  _,
                  y,
                  b,
                  x,
                  C,
                  S,
                  w,
                  T,
                  O,
                  k,
                  P = P || { version: "3.5.1" };
              if (((e.fabric = P), "undefined" != typeof document && "undefined" != typeof window))
                  document instanceof ("undefined" != typeof HTMLDocument ? HTMLDocument : Document) ? (P.document = document) : (P.document = document.implementation.createHTMLDocument("")), (P.window = window);
              else {
                  var E = new (i(27).JSDOM)(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), { features: { FetchExternalResources: ["img"] }, resources: "usable" }).window;
                  (P.document = E.document), (P.jsdomImplForWrapper = i(28).implForWrapper), (P.nodeCanvas = i(29).Canvas), (P.window = E), (DOMParser = P.window.DOMParser);
              }
              function j(t, e) {
                  var i = t.canvas,
                      r = e.targetCanvas,
                      n = r.getContext("2d");
                  n.translate(0, r.height), n.scale(1, -1);
                  var o = i.height - r.height;
                  n.drawImage(i, 0, o, r.width, r.height, 0, 0, r.width, r.height);
              }
              function A(t, e) {
                  var i = e.targetCanvas.getContext("2d"),
                      r = e.destinationWidth,
                      n = e.destinationHeight,
                      o = r * n * 4,
                      s = new Uint8Array(this.imageBuffer, 0, o),
                      a = new Uint8ClampedArray(this.imageBuffer, 0, o);
                  t.readPixels(0, 0, r, n, t.RGBA, t.UNSIGNED_BYTE, s);
                  var h = new ImageData(a, r, n);
                  i.putImageData(h, 0, 0);
              }
              (P.isTouchSupported = "ontouchstart" in P.window || "ontouchstart" in P.document || (P.window && P.window.navigator && 0 < P.window.navigator.maxTouchPoints)),
                  (P.isLikelyNode = void 0 !== t && "undefined" == typeof window),
                  (P.SHARED_ATTRIBUTES = [
                      "display",
                      "transform",
                      "fill",
                      "fill-opacity",
                      "fill-rule",
                      "opacity",
                      "stroke",
                      "stroke-dasharray",
                      "stroke-linecap",
                      "stroke-dashoffset",
                      "stroke-linejoin",
                      "stroke-miterlimit",
                      "stroke-opacity",
                      "stroke-width",
                      "id",
                      "paint-order",
                      "vector-effect",
                      "instantiated_by_use",
                      "clip-path",
                  ]),
                  (P.DPI = 96),
                  (P.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)"),
                  (P.fontPaths = {}),
                  (P.iMatrix = [1, 0, 0, 1, 0, 0]),
                  (P.perfLimitSizeTotal = 2097152),
                  (P.maxCacheSideLimit = 4096),
                  (P.minCacheSideLimit = 256),
                  (P.charWidthsCache = {}),
                  (P.textureSize = 2048),
                  (P.disableStyleCopyPaste = !1),
                  (P.enableGLFiltering = !0),
                  (P.devicePixelRatio = P.window.devicePixelRatio || P.window.webkitDevicePixelRatio || P.window.mozDevicePixelRatio || 1),
                  (P.browserShadowBlurConstant = 1),
                  (P.arcToSegmentsCache = {}),
                  (P.boundsOfCurveCache = {}),
                  (P.cachesBoundsOfCurve = !0),
                  (P.forceGLPutImageData = !1),
                  (P.initFilterBackend = function () {
                      return P.enableGLFiltering && P.isWebglSupported && P.isWebglSupported(P.textureSize)
                          ? (console.log("max texture size: " + P.maxTextureSize), new P.WebglFilterBackend({ tileSize: P.textureSize }))
                          : P.Canvas2dFilterBackend
                          ? new P.Canvas2dFilterBackend()
                          : void 0;
                  }),
                  "undefined" != typeof document && "undefined" != typeof window && (window.fabric = P),
                  (function () {
                      function t(t, e) {
                          if (this.__eventListeners[t]) {
                              var i = this.__eventListeners[t];
                              e ? (i[i.indexOf(e)] = !1) : P.util.array.fill(i, !1);
                          }
                      }
                      function e(t, e) {
                          if ((this.__eventListeners || (this.__eventListeners = {}), 1 === arguments.length)) for (var i in t) this.on(i, t[i]);
                          else this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(e);
                          return this;
                      }
                      function i(e, i) {
                          if (!this.__eventListeners) return this;
                          if (0 === arguments.length) for (e in this.__eventListeners) t.call(this, e);
                          else if (1 === arguments.length && "object" == typeof e) for (var r in e) t.call(this, r, e[r]);
                          else t.call(this, e, i);
                          return this;
                      }
                      function r(t, e) {
                          if (!this.__eventListeners) return this;
                          var i = this.__eventListeners[t];
                          if (!i) return this;
                          for (var r = 0, n = i.length; r < n; r++) i[r] && i[r].call(this, e || {});
                          return (
                              (this.__eventListeners[t] = i.filter(function (t) {
                                  return !1 !== t;
                              })),
                              this
                          );
                      }
                      P.Observable = { observe: e, stopObserving: i, fire: r, on: e, off: i, trigger: r };
                  })(),
                  (P.Collection = {
                      _objects: [],
                      add: function () {
                          if ((this._objects.push.apply(this._objects, arguments), this._onObjectAdded)) for (var t = 0, e = arguments.length; t < e; t++) this._onObjectAdded(arguments[t]);
                          return this.renderOnAddRemove && this.requestRenderAll(), this;
                      },
                      insertAt: function (t, e, i) {
                          var r = this._objects;
                          return i ? (r[e] = t) : r.splice(e, 0, t), this._onObjectAdded && this._onObjectAdded(t), this.renderOnAddRemove && this.requestRenderAll(), this;
                      },
                      remove: function () {
                          for (var t, e = this._objects, i = !1, r = 0, n = arguments.length; r < n; r++) -1 !== (t = e.indexOf(arguments[r])) && ((i = !0), e.splice(t, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[r]));
                          return this.renderOnAddRemove && i && this.requestRenderAll(), this;
                      },
                      forEachObject: function (t, e) {
                          for (var i = this.getObjects(), r = 0, n = i.length; r < n; r++) t.call(e, i[r], r, i);
                          return this;
                      },
                      getObjects: function (t) {
                          return void 0 === t
                              ? this._objects.concat()
                              : this._objects.filter(function (e) {
                                    return e.type === t;
                                });
                      },
                      item: function (t) {
                          return this._objects[t];
                      },
                      isEmpty: function () {
                          return 0 === this._objects.length;
                      },
                      size: function () {
                          return this._objects.length;
                      },
                      contains: function (t) {
                          return -1 < this._objects.indexOf(t);
                      },
                      complexity: function () {
                          return this._objects.reduce(function (t, e) {
                              return t + (e.complexity ? e.complexity() : 0);
                          }, 0);
                      },
                  }),
                  (P.CommonMethods = {
                      _setOptions: function (t) {
                          for (var e in t) this.set(e, t[e]);
                      },
                      _initGradient: function (t, e) {
                          !t || !t.colorStops || t instanceof P.Gradient || this.set(e, new P.Gradient(t));
                      },
                      _initPattern: function (t, e, i) {
                          !t || !t.source || t instanceof P.Pattern ? i && i() : this.set(e, new P.Pattern(t, i));
                      },
                      _initClipping: function (t) {
                          if (t.clipTo && "string" == typeof t.clipTo) {
                              var e = P.util.getFunctionBody(t.clipTo);
                              void 0 !== e && (this.clipTo = new Function("ctx", e));
                          }
                      },
                      _setObject: function (t) {
                          for (var e in t) this._set(e, t[e]);
                      },
                      set: function (t, e) {
                          return "object" == typeof t ? this._setObject(t) : "function" == typeof e && "clipTo" !== t ? this._set(t, e(this.get(t))) : this._set(t, e), this;
                      },
                      _set: function (t, e) {
                          this[t] = e;
                      },
                      toggle: function (t) {
                          var e = this.get(t);
                          return "boolean" == typeof e && this.set(t, !e), this;
                      },
                      get: function (t) {
                          return this[t];
                      },
                  }),
                  (r = e),
                  (n = Math.sqrt),
                  (o = Math.atan2),
                  (s = Math.pow),
                  (a = Math.PI / 180),
                  (h = Math.PI / 2),
                  (P.util = {
                      cos: function (t) {
                          if (0 === t) return 1;
                          switch ((t < 0 && (t = -t), t / h)) {
                              case 1:
                              case 3:
                                  return 0;
                              case 2:
                                  return -1;
                          }
                          return Math.cos(t);
                      },
                      sin: function (t) {
                          if (0 === t) return 0;
                          var e = 1;
                          switch ((t < 0 && (e = -1), t / h)) {
                              case 1:
                                  return e;
                              case 2:
                                  return 0;
                              case 3:
                                  return -e;
                          }
                          return Math.sin(t);
                      },
                      removeFromArray: function (t, e) {
                          var i = t.indexOf(e);
                          return -1 !== i && t.splice(i, 1), t;
                      },
                      getRandomInt: function (t, e) {
                          return Math.floor(Math.random() * (e - t + 1)) + t;
                      },
                      degreesToRadians: function (t) {
                          return t * a;
                      },
                      radiansToDegrees: function (t) {
                          return t / a;
                      },
                      rotatePoint: function (t, e, i) {
                          t.subtractEquals(e);
                          var r = P.util.rotateVector(t, i);
                          return new P.Point(r.x, r.y).addEquals(e);
                      },
                      rotateVector: function (t, e) {
                          var i = P.util.sin(e),
                              r = P.util.cos(e);
                          return { x: t.x * r - t.y * i, y: t.x * i + t.y * r };
                      },
                      transformPoint: function (t, e, i) {
                          return i ? new P.Point(e[0] * t.x + e[2] * t.y, e[1] * t.x + e[3] * t.y) : new P.Point(e[0] * t.x + e[2] * t.y + e[4], e[1] * t.x + e[3] * t.y + e[5]);
                      },
                      makeBoundingBoxFromPoints: function (t, e) {
                          if (e) for (var i = 0; i < t.length; i++) t[i] = P.util.transformPoint(t[i], e);
                          var r = [t[0].x, t[1].x, t[2].x, t[3].x],
                              n = P.util.array.min(r),
                              o = P.util.array.max(r) - n,
                              s = [t[0].y, t[1].y, t[2].y, t[3].y],
                              a = P.util.array.min(s);
                          return { left: n, top: a, width: o, height: P.util.array.max(s) - a };
                      },
                      invertTransform: function (t) {
                          var e = 1 / (t[0] * t[3] - t[1] * t[2]),
                              i = [e * t[3], -e * t[1], -e * t[2], e * t[0]],
                              r = P.util.transformPoint({ x: t[4], y: t[5] }, i, !0);
                          return (i[4] = -r.x), (i[5] = -r.y), i;
                      },
                      toFixed: function (t, e) {
                          return parseFloat(Number(t).toFixed(e));
                      },
                      parseUnit: function (t, e) {
                          var i = /\D{0,2}$/.exec(t),
                              r = parseFloat(t);
                          switch ((e || (e = P.Text.DEFAULT_SVG_FONT_SIZE), i[0])) {
                              case "mm":
                                  return (r * P.DPI) / 25.4;
                              case "cm":
                                  return (r * P.DPI) / 2.54;
                              case "in":
                                  return r * P.DPI;
                              case "pt":
                                  return (r * P.DPI) / 72;
                              case "pc":
                                  return ((r * P.DPI) / 72) * 12;
                              case "em":
                                  return r * e;
                              default:
                                  return r;
                          }
                      },
                      falseFunction: function () {
                          return !1;
                      },
                      getKlass: function (t, e) {
                          return (t = P.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1))), P.util.resolveNamespace(e)[t];
                      },
                      getSvgAttributes: function (t) {
                          var e = ["instantiated_by_use", "style", "id", "class"];
                          switch (t) {
                              case "linearGradient":
                                  e = e.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
                                  break;
                              case "radialGradient":
                                  e = e.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
                                  break;
                              case "stop":
                                  e = e.concat(["offset", "stop-color", "stop-opacity"]);
                          }
                          return e;
                      },
                      resolveNamespace: function (t) {
                          if (!t) return P;
                          var e,
                              i = t.split("."),
                              n = i.length,
                              o = r || P.window;
                          for (e = 0; e < n; ++e) o = o[i[e]];
                          return o;
                      },
                      loadImage: function (t, e, i, r) {
                          if (t) {
                              var n = P.util.createImage(),
                                  o = function () {
                                      e && e.call(i, n), (n = n.onload = n.onerror = null);
                                  };
                              (n.onload = o),
                                  (n.onerror = function () {
                                      P.log("Error loading " + n.src), e && e.call(i, null, !0), (n = n.onload = n.onerror = null);
                                  }),
                                  0 !== t.indexOf("data") && r && (n.crossOrigin = r),
                                  "data:image/svg" === t.substring(0, 14) && ((n.onload = null), P.util.loadImageInDom(n, o)),
                                  (n.src = t);
                          } else e && e.call(i, t);
                      },
                      loadImageInDom: function (t, e) {
                          var i = P.document.createElement("div");
                          (i.style.width = i.style.height = "1px"),
                              (i.style.left = i.style.top = "-100%"),
                              (i.style.position = "absolute"),
                              i.appendChild(t),
                              P.document.querySelector("body").appendChild(i),
                              (t.onload = function () {
                                  e(), i.parentNode.removeChild(i), (i = null);
                              });
                      },
                      enlivenObjects: function (t, e, i, r) {
                          var n = [],
                              o = 0,
                              s = (t = t || []).length;
                          function a() {
                              ++o === s &&
                                  e &&
                                  e(
                                      n.filter(function (t) {
                                          return t;
                                      })
                                  );
                          }
                          s
                              ? t.forEach(function (t, e) {
                                    t && t.type
                                        ? P.util.getKlass(t.type, i).fromObject(t, function (i, o) {
                                              o || (n[e] = i), r && r(t, i, o), a();
                                          })
                                        : a();
                                })
                              : e && e(n);
                      },
                      enlivenPatterns: function (t, e) {
                          function i() {
                              ++n === o && e && e(r);
                          }
                          var r = [],
                              n = 0,
                              o = (t = t || []).length;
                          o
                              ? t.forEach(function (t, e) {
                                    t && t.source
                                        ? new P.Pattern(t, function (t) {
                                              (r[e] = t), i();
                                          })
                                        : ((r[e] = t), i());
                                })
                              : e && e(r);
                      },
                      groupSVGElements: function (t, e, i) {
                          var r;
                          return t && 1 === t.length
                              ? t[0]
                              : (e && (e.width && e.height ? (e.centerPoint = { x: e.width / 2, y: e.height / 2 }) : (delete e.width, delete e.height)), (r = new P.Group(t, e)), void 0 !== i && (r.sourcePath = i), r);
                      },
                      populateWithProperties: function (t, e, i) {
                          if (i && "[object Array]" === Object.prototype.toString.call(i)) for (var r = 0, n = i.length; r < n; r++) i[r] in t && (e[i[r]] = t[i[r]]);
                      },
                      drawDashedLine: function (t, e, i, r, s, a) {
                          var h = r - e,
                              c = s - i,
                              l = n(h * h + c * c),
                              u = o(c, h),
                              f = a.length,
                              d = 0,
                              g = !0;
                          for (t.save(), t.translate(e, i), t.moveTo(0, 0), t.rotate(u), e = 0; e < l; ) l < (e += a[d++ % f]) && (e = l), t[g ? "lineTo" : "moveTo"](e, 0), (g = !g);
                          t.restore();
                      },
                      createCanvasElement: function () {
                          return P.document.createElement("canvas");
                      },
                      copyCanvasElement: function (t) {
                          var e = P.util.createCanvasElement();
                          return (e.width = t.width), (e.height = t.height), e.getContext("2d").drawImage(t, 0, 0), e;
                      },
                      toDataURL: function (t, e, i) {
                          return t.toDataURL("image/" + e, i);
                      },
                      createImage: function () {
                          return P.document.createElement("img");
                      },
                      clipContext: function (t, e) {
                          e.save(), e.beginPath(), t.clipTo(e), e.clip();
                      },
                      multiplyTransformMatrices: function (t, e, i) {
                          return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4], i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5]];
                      },
                      qrDecompose: function (t) {
                          var e = o(t[1], t[0]),
                              i = s(t[0], 2) + s(t[1], 2),
                              r = n(i),
                              h = (t[0] * t[3] - t[2] * t[1]) / r,
                              c = o(t[0] * t[2] + t[1] * t[3], i);
                          return { angle: e / a, scaleX: r, scaleY: h, skewX: c / a, skewY: 0, translateX: t[4], translateY: t[5] };
                      },
                      calcRotateMatrix: function (t) {
                          if (!t.angle) return P.iMatrix.concat();
                          var e = P.util.degreesToRadians(t.angle),
                              i = P.util.cos(e),
                              r = P.util.sin(e);
                          return [i, r, -r, i, 0, 0];
                      },
                      calcDimensionsMatrix: function (t) {
                          var e = void 0 === t.scaleX ? 1 : t.scaleX,
                              i = void 0 === t.scaleY ? 1 : t.scaleY,
                              r = [t.flipX ? -e : e, 0, 0, t.flipY ? -i : i, 0, 0],
                              n = P.util.multiplyTransformMatrices,
                              o = P.util.degreesToRadians;
                          return t.skewX && (r = n(r, [1, 0, Math.tan(o(t.skewX)), 1], !0)), t.skewY && (r = n(r, [1, Math.tan(o(t.skewY)), 0, 1], !0)), r;
                      },
                      composeMatrix: function (t) {
                          var e = [1, 0, 0, 1, t.translateX || 0, t.translateY || 0],
                              i = P.util.multiplyTransformMatrices;
                          return t.angle && (e = i(e, P.util.calcRotateMatrix(t))), (t.scaleX || t.scaleY || t.skewX || t.skewY || t.flipX || t.flipY) && (e = i(e, P.util.calcDimensionsMatrix(t))), e;
                      },
                      customTransformMatrix: function (t, e, i) {
                          return P.util.composeMatrix({ scaleX: t, scaleY: e, skewX: i });
                      },
                      resetObjectTransform: function (t) {
                          (t.scaleX = 1), (t.scaleY = 1), (t.skewX = 0), (t.skewY = 0), (t.flipX = !1), (t.flipY = !1), t.rotate(0);
                      },
                      saveObjectTransform: function (t) {
                          return { scaleX: t.scaleX, scaleY: t.scaleY, skewX: t.skewX, skewY: t.skewY, angle: t.angle, left: t.left, flipX: t.flipX, flipY: t.flipY, top: t.top };
                      },
                      getFunctionBody: function (t) {
                          return (String(t).match(/function[^{]*\{([\s\S]*)\}/) || {})[1];
                      },
                      isTransparent: function (t, e, i, r) {
                          0 < r && (r < e ? (e -= r) : (e = 0), r < i ? (i -= r) : (i = 0));
                          var n,
                              o = !0,
                              s = t.getImageData(e, i, 2 * r || 1, 2 * r || 1),
                              a = s.data.length;
                          for (n = 3; n < a && 0 != (o = s.data[n] <= 0); n += 4);
                          return (s = null), o;
                      },
                      parsePreserveAspectRatioAttribute: function (t) {
                          var e,
                              i = "meet",
                              r = t.split(" ");
                          return (
                              r && r.length && ("meet" !== (i = r.pop()) && "slice" !== i ? ((e = i), (i = "meet")) : r.length && (e = r.pop())),
                              { meetOrSlice: i, alignX: "none" !== e ? e.slice(1, 4) : "none", alignY: "none" !== e ? e.slice(5, 8) : "none" }
                          );
                      },
                      clearFabricFontCache: function (t) {
                          (t = (t || "").toLowerCase()) ? P.charWidthsCache[t] && delete P.charWidthsCache[t] : (P.charWidthsCache = {});
                      },
                      limitDimsByArea: function (t, e) {
                          var i = Math.sqrt(e * t),
                              r = Math.floor(e / i);
                          return { x: Math.floor(i), y: r };
                      },
                      capValue: function (t, e, i) {
                          return Math.max(t, Math.min(e, i));
                      },
                      findScaleToFit: function (t, e) {
                          return Math.min(e.width / t.width, e.height / t.height);
                      },
                      findScaleToCover: function (t, e) {
                          return Math.max(e.width / t.width, e.height / t.height);
                      },
                      matrixToSVG: function (t) {
                          return (
                              "matrix(" +
                              t
                                  .map(function (t) {
                                      return P.util.toFixed(t, P.Object.NUM_FRACTION_DIGITS);
                                  })
                                  .join(" ") +
                              ")"
                          );
                      },
                  }),
                  (function () {
                      var t = Array.prototype.join;
                      function e(e, r, n, o, s, a, h) {
                          var c = t.call(arguments);
                          if (P.arcToSegmentsCache[c]) return P.arcToSegmentsCache[c];
                          var l = Math.PI,
                              u = (h * l) / 180,
                              f = P.util.sin(u),
                              d = P.util.cos(u),
                              g = 0,
                              p = 0,
                              v = -d * e * 0.5 - f * r * 0.5,
                              m = -d * r * 0.5 + f * e * 0.5,
                              _ = (n = Math.abs(n)) * n,
                              y = (o = Math.abs(o)) * o,
                              b = m * m,
                              x = v * v,
                              C = _ * y - _ * b - y * x,
                              S = 0;
                          if (C < 0) {
                              var w = Math.sqrt(1 - C / (_ * y));
                              (n *= w), (o *= w);
                          } else S = (s === a ? -1 : 1) * Math.sqrt(C / (_ * b + y * x));
                          var T = (S * n * m) / o,
                              O = (-S * o * v) / n,
                              k = d * T - f * O + 0.5 * e,
                              E = f * T + d * O + 0.5 * r,
                              j = i(1, 0, (v - T) / n, (m - O) / o),
                              A = i((v - T) / n, (m - O) / o, (-v - T) / n, (-m - O) / o);
                          0 === a && 0 < A ? (A -= 2 * l) : 1 === a && A < 0 && (A += 2 * l);
                          for (
                              var D, M, F, L, I, R, B, Y, X, U, W, z, N, G, V, H, q, K = Math.ceil(Math.abs((A / l) * 2)), J = [], $ = A / K, Z = ((8 / 3) * Math.sin($ / 4) * Math.sin($ / 4)) / Math.sin($ / 2), Q = j + $, tt = 0;
                              tt < K;
                              tt++
                          )
                              (J[tt] =
                                  ((D = j),
                                  (M = Q),
                                  (F = d),
                                  (L = f),
                                  (I = n),
                                  (R = o),
                                  (B = k),
                                  (Y = E),
                                  (X = Z),
                                  (U = g),
                                  (W = p),
                                  (z = P.util.cos(D)),
                                  [
                                      U + X * (-F * I * (N = P.util.sin(D)) - L * R * z),
                                      W + X * (-L * I * N + F * R * z),
                                      (H = F * I * (G = P.util.cos(M)) - L * R * (V = P.util.sin(M)) + B) + X * (F * I * V + L * R * G),
                                      (q = L * I * G + F * R * V + Y) + X * (L * I * V - F * R * G),
                                      H,
                                      q,
                                  ])),
                                  (g = J[tt][4]),
                                  (p = J[tt][5]),
                                  (j = Q),
                                  (Q += $);
                          return (P.arcToSegmentsCache[c] = J);
                      }
                      function i(t, e, i, r) {
                          var n = Math.atan2(e, t),
                              o = Math.atan2(r, i);
                          return n <= o ? o - n : 2 * Math.PI - (n - o);
                      }
                      function r(e, i, r, n, o, s, a, h) {
                          var c;
                          if (P.cachesBoundsOfCurve && ((c = t.call(arguments)), P.boundsOfCurveCache[c])) return P.boundsOfCurveCache[c];
                          var l,
                              u,
                              f,
                              d,
                              g,
                              p,
                              v,
                              m,
                              _ = Math.sqrt,
                              y = Math.min,
                              b = Math.max,
                              x = Math.abs,
                              C = [],
                              S = [[], []];
                          (u = 6 * e - 12 * r + 6 * o), (l = -3 * e + 9 * r - 9 * o + 3 * a), (f = 3 * r - 3 * e);
                          for (var w = 0; w < 2; ++w)
                              if ((0 < w && ((u = 6 * i - 12 * n + 6 * s), (l = -3 * i + 9 * n - 9 * s + 3 * h), (f = 3 * n - 3 * i)), x(l) < 1e-12)) {
                                  if (x(u) < 1e-12) continue;
                                  0 < (d = -f / u) && d < 1 && C.push(d);
                              } else (v = u * u - 4 * f * l) < 0 || (0 < (g = (-u + (m = _(v))) / (2 * l)) && g < 1 && C.push(g), 0 < (p = (-u - m) / (2 * l)) && p < 1 && C.push(p));
                          for (var T, O, k, E = C.length, j = E; E--; )
                              (T = (k = 1 - (d = C[E])) * k * k * e + 3 * k * k * d * r + 3 * k * d * d * o + d * d * d * a), (S[0][E] = T), (O = k * k * k * i + 3 * k * k * d * n + 3 * k * d * d * s + d * d * d * h), (S[1][E] = O);
                          (S[0][j] = e), (S[1][j] = i), (S[0][j + 1] = a), (S[1][j + 1] = h);
                          var A = [
                              { x: y.apply(null, S[0]), y: y.apply(null, S[1]) },
                              { x: b.apply(null, S[0]), y: b.apply(null, S[1]) },
                          ];
                          return P.cachesBoundsOfCurve && (P.boundsOfCurveCache[c] = A), A;
                      }
                      (P.util.drawArc = function (t, i, r, n) {
                          for (var o = n[0], s = n[1], a = n[2], h = n[3], c = n[4], l = [[], [], [], []], u = e(n[5] - i, n[6] - r, o, s, h, c, a), f = 0, d = u.length; f < d; f++)
                              (l[f][0] = u[f][0] + i), (l[f][1] = u[f][1] + r), (l[f][2] = u[f][2] + i), (l[f][3] = u[f][3] + r), (l[f][4] = u[f][4] + i), (l[f][5] = u[f][5] + r), t.bezierCurveTo.apply(t, l[f]);
                      }),
                          (P.util.getBoundsOfArc = function (t, i, n, o, s, a, h, c, l) {
                              for (var u, f = 0, d = 0, g = [], p = e(c - t, l - i, n, o, a, h, s), v = 0, m = p.length; v < m; v++)
                                  (u = r(f, d, p[v][0], p[v][1], p[v][2], p[v][3], p[v][4], p[v][5])), g.push({ x: u[0].x + t, y: u[0].y + i }), g.push({ x: u[1].x + t, y: u[1].y + i }), (f = p[v][4]), (d = p[v][5]);
                              return g;
                          }),
                          (P.util.getBoundsOfCurve = r);
                  })(),
                  (function () {
                      var t = Array.prototype.slice;
                      function e(t, e, i) {
                          if (t && 0 !== t.length) {
                              var r = t.length - 1,
                                  n = e ? t[r][e] : t[r];
                              if (e) for (; r--; ) i(t[r][e], n) && (n = t[r][e]);
                              else for (; r--; ) i(t[r], n) && (n = t[r]);
                              return n;
                          }
                      }
                      P.util.array = {
                          fill: function (t, e) {
                              for (var i = t.length; i--; ) t[i] = e;
                              return t;
                          },
                          invoke: function (e, i) {
                              for (var r = t.call(arguments, 2), n = [], o = 0, s = e.length; o < s; o++) n[o] = r.length ? e[o][i].apply(e[o], r) : e[o][i].call(e[o]);
                              return n;
                          },
                          min: function (t, i) {
                              return e(t, i, function (t, e) {
                                  return t < e;
                              });
                          },
                          max: function (t, i) {
                              return e(t, i, function (t, e) {
                                  return e <= t;
                              });
                          },
                      };
                  })(),
                  (function () {
                      function t(e, i, r) {
                          if (r)
                              if (!P.isLikelyNode && i instanceof Element) e = i;
                              else if (i instanceof Array) {
                                  e = [];
                                  for (var n = 0, o = i.length; n < o; n++) e[n] = t({}, i[n], r);
                              } else if (i && "object" == typeof i) for (var s in i) "canvas" === s ? (e[s] = t({}, i[s])) : i.hasOwnProperty(s) && (e[s] = t({}, i[s], r));
                              else e = i;
                          else for (var s in i) e[s] = i[s];
                          return e;
                      }
                      (P.util.object = {
                          extend: t,
                          clone: function (e, i) {
                              return t({}, e, i);
                          },
                      }),
                          P.util.object.extend(P.util, P.Observable);
                  })(),
                  (function () {
                      function t(t, e) {
                          var i = t.charCodeAt(e);
                          if (isNaN(i)) return "";
                          if (i < 55296 || 57343 < i) return t.charAt(e);
                          if (55296 <= i && i <= 56319) {
                              if (t.length <= e + 1) throw "High surrogate without following low surrogate";
                              var r = t.charCodeAt(e + 1);
                              if (r < 56320 || 57343 < r) throw "High surrogate without following low surrogate";
                              return t.charAt(e) + t.charAt(e + 1);
                          }
                          if (0 === e) throw "Low surrogate without preceding high surrogate";
                          var n = t.charCodeAt(e - 1);
                          if (n < 55296 || 56319 < n) throw "Low surrogate without preceding high surrogate";
                          return !1;
                      }
                      P.util.string = {
                          camelize: function (t) {
                              return t.replace(/-+(.)?/g, function (t, e) {
                                  return e ? e.toUpperCase() : "";
                              });
                          },
                          capitalize: function (t, e) {
                              return t.charAt(0).toUpperCase() + (e ? t.slice(1) : t.slice(1).toLowerCase());
                          },
                          escapeXml: function (t) {
                              return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                          },
                          graphemeSplit: function (e) {
                              var i,
                                  r = 0,
                                  n = [];
                              for (r = 0; r < e.length; r++) !1 !== (i = t(e, r)) && n.push(i);
                              return n;
                          },
                      };
                  })(),
                  (function () {
                      var t = Array.prototype.slice,
                          e = function () {},
                          i = (function () {
                              for (var t in { toString: 1 }) if ("toString" === t) return !1;
                              return !0;
                          })(),
                          r = function (t, e, r) {
                              for (var n in e)
                                  n in t.prototype && "function" == typeof t.prototype[n] && -1 < (e[n] + "").indexOf("callSuper")
                                      ? (t.prototype[n] = (function (t) {
                                            return function () {
                                                var i = this.constructor.superclass;
                                                this.constructor.superclass = r;
                                                var n = e[t].apply(this, arguments);
                                                if (((this.constructor.superclass = i), "initialize" !== t)) return n;
                                            };
                                        })(n))
                                      : (t.prototype[n] = e[n]),
                                      i && (e.toString !== Object.prototype.toString && (t.prototype.toString = e.toString), e.valueOf !== Object.prototype.valueOf && (t.prototype.valueOf = e.valueOf));
                          };
                      function n() {}
                      function o(e) {
                          for (var i = null, r = this; r.constructor.superclass; ) {
                              var n = r.constructor.superclass.prototype[e];
                              if (r[e] !== n) {
                                  i = n;
                                  break;
                              }
                              r = r.constructor.superclass.prototype;
                          }
                          return i ? (1 < arguments.length ? i.apply(this, t.call(arguments, 1)) : i.call(this)) : console.log("tried to callSuper " + e + ", method not found in prototype chain", this);
                      }
                      P.util.createClass = function () {
                          var i = null,
                              s = t.call(arguments, 0);
                          function a() {
                              this.initialize.apply(this, arguments);
                          }
                          "function" == typeof s[0] && (i = s.shift()), (a.superclass = i), (a.subclasses = []), i && ((n.prototype = i.prototype), (a.prototype = new n()), i.subclasses.push(a));
                          for (var h = 0, c = s.length; h < c; h++) r(a, s[h], i);
                          return a.prototype.initialize || (a.prototype.initialize = e), ((a.prototype.constructor = a).prototype.callSuper = o), a;
                      };
                  })(),
                  (c = !!P.document.createElement("div").attachEvent),
                  (P.util.addListener = function (t, e, i, r) {
                      t && t.addEventListener(e, i, !c && r);
                  }),
                  (P.util.removeListener = function (t, e, i, r) {
                      t && t.removeEventListener(e, i, !c && r);
                  }),
                  (P.util.getPointer = function (t) {
                      var e,
                          i,
                          r = t.target,
                          n = P.util.getScrollLeftTop(r),
                          o = (i = (e = t).changedTouches) && i[0] ? i[0] : e;
                      return { x: o.clientX + n.left, y: o.clientY + n.top };
                  }),
                  (u = "string" == typeof (l = P.document.createElement("div")).style.opacity),
                  (f = "string" == typeof l.style.filter),
                  (d = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/),
                  (g = function (t) {
                      return t;
                  }),
                  u
                      ? (g = function (t, e) {
                            return (t.style.opacity = e), t;
                        })
                      : f &&
                        (g = function (t, e) {
                            var i = t.style;
                            return (
                                t.currentStyle && !t.currentStyle.hasLayout && (i.zoom = 1),
                                d.test(i.filter) ? ((e = 0.9999 <= e ? "" : "alpha(opacity=" + 100 * e + ")"), (i.filter = i.filter.replace(d, e))) : (i.filter += " alpha(opacity=" + 100 * e + ")"),
                                t
                            );
                        }),
                  (P.util.setStyle = function (t, e) {
                      var i = t.style;
                      if (!i) return t;
                      if ("string" == typeof e) return (t.style.cssText += ";" + e), -1 < e.indexOf("opacity") ? g(t, e.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;
                      for (var r in e) "opacity" === r ? g(t, e[r]) : (i["float" === r || "cssFloat" === r ? (void 0 === i.styleFloat ? "cssFloat" : "styleFloat") : r] = e[r]);
                      return t;
                  }),
                  (function () {
                      var t,
                          e,
                          i,
                          r,
                          n = Array.prototype.slice,
                          o = function (t) {
                              return n.call(t, 0);
                          };
                      try {
                          t = o(P.document.childNodes) instanceof Array;
                      } catch (t) {}
                      function s(t, e) {
                          var i = P.document.createElement(t);
                          for (var r in e) "class" === r ? (i.className = e[r]) : "for" === r ? (i.htmlFor = e[r]) : i.setAttribute(r, e[r]);
                          return i;
                      }
                      function a(t) {
                          for (
                              var e = 0, i = 0, r = P.document.documentElement, n = P.document.body || { scrollLeft: 0, scrollTop: 0 };
                              t &&
                              (t.parentNode || t.host) &&
                              ((t = t.parentNode || t.host) === P.document ? ((e = n.scrollLeft || r.scrollLeft || 0), (i = n.scrollTop || r.scrollTop || 0)) : ((e += t.scrollLeft || 0), (i += t.scrollTop || 0)),
                              1 !== t.nodeType || "fixed" !== t.style.position);

                          );
                          return { left: e, top: i };
                      }
                      t ||
                          (o = function (t) {
                              for (var e = new Array(t.length), i = t.length; i--; ) e[i] = t[i];
                              return e;
                          }),
                          (e =
                              P.document.defaultView && P.document.defaultView.getComputedStyle
                                  ? function (t, e) {
                                        var i = P.document.defaultView.getComputedStyle(t, null);
                                        return i ? i[e] : void 0;
                                    }
                                  : function (t, e) {
                                        var i = t.style[e];
                                        return !i && t.currentStyle && (i = t.currentStyle[e]), i;
                                    }),
                          (i = P.document.documentElement.style),
                          (r = "userSelect" in i ? "userSelect" : "MozUserSelect" in i ? "MozUserSelect" : "WebkitUserSelect" in i ? "WebkitUserSelect" : "KhtmlUserSelect" in i ? "KhtmlUserSelect" : ""),
                          (P.util.makeElementUnselectable = function (t) {
                              return void 0 !== t.onselectstart && (t.onselectstart = P.util.falseFunction), r ? (t.style[r] = "none") : "string" == typeof t.unselectable && (t.unselectable = "on"), t;
                          }),
                          (P.util.makeElementSelectable = function (t) {
                              return void 0 !== t.onselectstart && (t.onselectstart = null), r ? (t.style[r] = "") : "string" == typeof t.unselectable && (t.unselectable = ""), t;
                          }),
                          (P.util.getScript = function (t, e) {
                              var i = P.document.getElementsByTagName("head")[0],
                                  r = P.document.createElement("script"),
                                  n = !0;
                              (r.onload = r.onreadystatechange = function (t) {
                                  if (n) {
                                      if ("string" == typeof this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState) return;
                                      (n = !1), e(t || P.window.event), (r = r.onload = r.onreadystatechange = null);
                                  }
                              }),
                                  (r.src = t),
                                  i.appendChild(r);
                          }),
                          (P.util.getById = function (t) {
                              return "string" == typeof t ? P.document.getElementById(t) : t;
                          }),
                          (P.util.toArray = o),
                          (P.util.makeElement = s),
                          (P.util.addClass = function (t, e) {
                              t && -1 === (" " + t.className + " ").indexOf(" " + e + " ") && (t.className += (t.className ? " " : "") + e);
                          }),
                          (P.util.wrapElement = function (t, e, i) {
                              return "string" == typeof e && (e = s(e, i)), t.parentNode && t.parentNode.replaceChild(e, t), e.appendChild(t), e;
                          }),
                          (P.util.getScrollLeftTop = a),
                          (P.util.getElementOffset = function (t) {
                              var i,
                                  r,
                                  n = t && t.ownerDocument,
                                  o = { left: 0, top: 0 },
                                  s = { left: 0, top: 0 },
                                  h = { borderLeftWidth: "left", borderTopWidth: "top", paddingLeft: "left", paddingTop: "top" };
                              if (!n) return s;
                              for (var c in h) s[h[c]] += parseInt(e(t, c), 10) || 0;
                              return (
                                  (i = n.documentElement),
                                  void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()),
                                  (r = a(t)),
                                  { left: o.left + r.left - (i.clientLeft || 0) + s.left, top: o.top + r.top - (i.clientTop || 0) + s.top }
                              );
                          }),
                          (P.util.getElementStyle = e),
                          (P.util.getNodeCanvas = function (t) {
                              var e = P.jsdomImplForWrapper(t);
                              return e._canvas || e._image;
                          }),
                          (P.util.cleanUpJsdomNode = function (t) {
                              if (P.isLikelyNode) {
                                  var e = P.jsdomImplForWrapper(t);
                                  e && ((e._image = null), (e._canvas = null), (e._currentSrc = null), (e._attributes = null), (e._classList = null));
                              }
                          });
                  })(),
                  (function () {
                      function t() {}
                      P.util.request = function (e, i) {
                          i || (i = {});
                          var r,
                              n,
                              o = i.method ? i.method.toUpperCase() : "GET",
                              s = i.onComplete || function () {},
                              a = new P.window.XMLHttpRequest(),
                              h = i.body || i.parameters;
                          return (
                              (a.onreadystatechange = function () {
                                  4 === a.readyState && (s(a), (a.onreadystatechange = t));
                              }),
                              "GET" === o && ((h = null), "string" == typeof i.parameters && ((r = e), (n = i.parameters), (e = r + (/\?/.test(r) ? "&" : "?") + n))),
                              a.open(o, e, !0),
                              ("POST" !== o && "PUT" !== o) || a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                              a.send(h),
                              a
                          );
                      };
                  })(),
                  (P.log = function () {}),
                  (P.warn = function () {}),
                  "undefined" != typeof console &&
                      ["log", "warn"].forEach(function (t) {
                          void 0 !== console[t] &&
                              "function" == typeof console[t].apply &&
                              (P[t] = function () {
                                  return console[t].apply(console, arguments);
                              });
                      }),
                  (function () {
                      function t() {
                          return !1;
                      }
                      function e(t, e, i, r) {
                          return -i * Math.cos((t / r) * (Math.PI / 2)) + i + e;
                      }
                      var i =
                              P.window.requestAnimationFrame ||
                              P.window.webkitRequestAnimationFrame ||
                              P.window.mozRequestAnimationFrame ||
                              P.window.oRequestAnimationFrame ||
                              P.window.msRequestAnimationFrame ||
                              function (t) {
                                  return P.window.setTimeout(t, 1e3 / 60);
                              },
                          r = P.window.cancelAnimationFrame || P.window.clearTimeout;
                      function n() {
                          return i.apply(P.window, arguments);
                      }
                      (P.util.animate = function (i) {
                          n(function (r) {
                              i || (i = {});
                              var o,
                                  s = r || +new Date(),
                                  a = i.duration || 500,
                                  h = s + a,
                                  c = i.onChange || t,
                                  l = i.abort || t,
                                  u = i.onComplete || t,
                                  f = i.easing || e,
                                  d = "startValue" in i ? i.startValue : 0,
                                  g = "endValue" in i ? i.endValue : 100,
                                  p = i.byValue || g - d;
                              i.onStart && i.onStart(),
                                  (function t(e) {
                                      o = e || +new Date();
                                      var i = h < o ? a : o - s,
                                          r = i / a,
                                          v = f(i, d, p, a),
                                          m = Math.abs((v - d) / p);
                                      if (!l()) return h < o ? (c(g, 1, 1), void u(g, 1, 1)) : (c(v, m, r), void n(t));
                                      u(g, 1, 1);
                                  })(s);
                          });
                      }),
                          (P.util.requestAnimFrame = n),
                          (P.util.cancelAnimFrame = function () {
                              return r.apply(P.window, arguments);
                          });
                  })(),
                  (P.util.animateColor = function (t, e, i, r) {
                      var n = new P.Color(t).getSource(),
                          o = new P.Color(e).getSource();
                      (r = r || {}),
                          P.util.animate(
                              P.util.object.extend(r, {
                                  duration: i || 500,
                                  startValue: n,
                                  endValue: o,
                                  byValue: o,
                                  easing: function (t, e, i, n) {
                                      var o, s, a, h;
                                      return (
                                          (o = e),
                                          (s = i),
                                          (a = r.colorEasing ? r.colorEasing(t, n) : 1 - Math.cos((t / n) * (Math.PI / 2))),
                                          (h = "rgba(" + parseInt(o[0] + a * (s[0] - o[0]), 10) + "," + parseInt(o[1] + a * (s[1] - o[1]), 10) + "," + parseInt(o[2] + a * (s[2] - o[2]), 10)),
                                          (h += "," + (o && s ? parseFloat(o[3] + a * (s[3] - o[3])) : 1)) + ")"
                                      );
                                  },
                              })
                          );
                  }),
                  (function () {
                      function t(t, e, i, r) {
                          return (r = t < Math.abs(e) ? ((t = e), i / 4) : 0 === e && 0 === t ? (i / (2 * Math.PI)) * Math.asin(1) : (i / (2 * Math.PI)) * Math.asin(e / t)), { a: t, c: e, p: i, s: r };
                      }
                      function e(t, e, i) {
                          return t.a * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * i - t.s) * (2 * Math.PI)) / t.p);
                      }
                      function i(t, e, i, n) {
                          return i - r(n - t, 0, i, n) + e;
                      }
                      function r(t, e, i, r) {
                          return (t /= r) < 1 / 2.75
                              ? i * (7.5625 * t * t) + e
                              : t < 2 / 2.75
                              ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
                              : t < 2.5 / 2.75
                              ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
                              : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
                      }
                      P.util.ease = {
                          easeInQuad: function (t, e, i, r) {
                              return i * (t /= r) * t + e;
                          },
                          easeOutQuad: function (t, e, i, r) {
                              return -i * (t /= r) * (t - 2) + e;
                          },
                          easeInOutQuad: function (t, e, i, r) {
                              return (t /= r / 2) < 1 ? (i / 2) * t * t + e : (-i / 2) * (--t * (t - 2) - 1) + e;
                          },
                          easeInCubic: function (t, e, i, r) {
                              return i * (t /= r) * t * t + e;
                          },
                          easeOutCubic: function (t, e, i, r) {
                              return i * ((t = t / r - 1) * t * t + 1) + e;
                          },
                          easeInOutCubic: function (t, e, i, r) {
                              return (t /= r / 2) < 1 ? (i / 2) * t * t * t + e : (i / 2) * ((t -= 2) * t * t + 2) + e;
                          },
                          easeInQuart: function (t, e, i, r) {
                              return i * (t /= r) * t * t * t + e;
                          },
                          easeOutQuart: function (t, e, i, r) {
                              return -i * ((t = t / r - 1) * t * t * t - 1) + e;
                          },
                          easeInOutQuart: function (t, e, i, r) {
                              return (t /= r / 2) < 1 ? (i / 2) * t * t * t * t + e : (-i / 2) * ((t -= 2) * t * t * t - 2) + e;
                          },
                          easeInQuint: function (t, e, i, r) {
                              return i * (t /= r) * t * t * t * t + e;
                          },
                          easeOutQuint: function (t, e, i, r) {
                              return i * ((t = t / r - 1) * t * t * t * t + 1) + e;
                          },
                          easeInOutQuint: function (t, e, i, r) {
                              return (t /= r / 2) < 1 ? (i / 2) * t * t * t * t * t + e : (i / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                          },
                          easeInSine: function (t, e, i, r) {
                              return -i * Math.cos((t / r) * (Math.PI / 2)) + i + e;
                          },
                          easeOutSine: function (t, e, i, r) {
                              return i * Math.sin((t / r) * (Math.PI / 2)) + e;
                          },
                          easeInOutSine: function (t, e, i, r) {
                              return (-i / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                          },
                          easeInExpo: function (t, e, i, r) {
                              return 0 === t ? e : i * Math.pow(2, 10 * (t / r - 1)) + e;
                          },
                          easeOutExpo: function (t, e, i, r) {
                              return t === r ? e + i : i * (1 - Math.pow(2, (-10 * t) / r)) + e;
                          },
                          easeInOutExpo: function (t, e, i, r) {
                              return 0 === t ? e : t === r ? e + i : (t /= r / 2) < 1 ? (i / 2) * Math.pow(2, 10 * (t - 1)) + e : (i / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                          },
                          easeInCirc: function (t, e, i, r) {
                              return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                          },
                          easeOutCirc: function (t, e, i, r) {
                              return i * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                          },
                          easeInOutCirc: function (t, e, i, r) {
                              return (t /= r / 2) < 1 ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + e : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                          },
                          easeInElastic: function (i, r, n, o) {
                              var s = 0;
                              return 0 === i ? r : 1 == (i /= o) ? r + n : (s || (s = 0.3 * o), -e(t(n, n, s, 1.70158), i, o) + r);
                          },
                          easeOutElastic: function (e, i, r, n) {
                              var o = 0;
                              if (0 === e) return i;
                              if (1 == (e /= n)) return i + r;
                              o || (o = 0.3 * n);
                              var s = t(r, r, o, 1.70158);
                              return s.a * Math.pow(2, -10 * e) * Math.sin(((e * n - s.s) * (2 * Math.PI)) / s.p) + s.c + i;
                          },
                          easeInOutElastic: function (i, r, n, o) {
                              var s = 0;
                              if (0 === i) return r;
                              if (2 == (i /= o / 2)) return r + n;
                              s || (s = o * (0.3 * 1.5));
                              var a = t(n, n, s, 1.70158);
                              return i < 1 ? -0.5 * e(a, i, o) + r : a.a * Math.pow(2, -10 * (i -= 1)) * Math.sin(((i * o - a.s) * (2 * Math.PI)) / a.p) * 0.5 + a.c + r;
                          },
                          easeInBack: function (t, e, i, r, n) {
                              return void 0 === n && (n = 1.70158), i * (t /= r) * t * ((n + 1) * t - n) + e;
                          },
                          easeOutBack: function (t, e, i, r, n) {
                              return void 0 === n && (n = 1.70158), i * ((t = t / r - 1) * t * ((n + 1) * t + n) + 1) + e;
                          },
                          easeInOutBack: function (t, e, i, r, n) {
                              return void 0 === n && (n = 1.70158), (t /= r / 2) < 1 ? (i / 2) * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : (i / 2) * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e;
                          },
                          easeInBounce: i,
                          easeOutBounce: r,
                          easeInOutBounce: function (t, e, n, o) {
                              return t < o / 2 ? 0.5 * i(2 * t, 0, n, o) + e : 0.5 * r(2 * t - o, 0, n, o) + 0.5 * n + e;
                          },
                      };
                  })(),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend,
                          r = e.util.object.clone,
                          n = e.util.toFixed,
                          o = e.util.parseUnit,
                          s = e.util.multiplyTransformMatrices,
                          a = {
                              cx: "left",
                              x: "left",
                              r: "radius",
                              cy: "top",
                              y: "top",
                              display: "visible",
                              visibility: "visible",
                              transform: "transformMatrix",
                              "fill-opacity": "fillOpacity",
                              "fill-rule": "fillRule",
                              "font-family": "fontFamily",
                              "font-size": "fontSize",
                              "font-style": "fontStyle",
                              "font-weight": "fontWeight",
                              "letter-spacing": "charSpacing",
                              "paint-order": "paintFirst",
                              "stroke-dasharray": "strokeDashArray",
                              "stroke-dashoffset": "strokeDashOffset",
                              "stroke-linecap": "strokeLineCap",
                              "stroke-linejoin": "strokeLineJoin",
                              "stroke-miterlimit": "strokeMiterLimit",
                              "stroke-opacity": "strokeOpacity",
                              "stroke-width": "strokeWidth",
                              "text-decoration": "textDecoration",
                              "text-anchor": "textAnchor",
                              opacity: "opacity",
                              "clip-path": "clipPath",
                              "clip-rule": "clipRule",
                              "vector-effect": "strokeUniform",
                          },
                          h = { stroke: "strokeOpacity", fill: "fillOpacity" };
                      function c(t, i, r, n) {
                          var a,
                              h = "[object Array]" === Object.prototype.toString.call(i);
                          if (("fill" !== t && "stroke" !== t) || "none" !== i)
                              if ("vector-effect" === t) i = "non-scaling-stroke" === i;
                              else if ("strokeDashArray" === t) i = "none" === i ? null : i.replace(/,/g, " ").split(/\s+/).map(parseFloat);
                              else if ("transformMatrix" === t) i = r && r.transformMatrix ? s(r.transformMatrix, e.parseTransformAttribute(i)) : e.parseTransformAttribute(i);
                              else if ("visible" === t) (i = "none" !== i && "hidden" !== i), r && !1 === r.visible && (i = !1);
                              else if ("opacity" === t) (i = parseFloat(i)), r && void 0 !== r.opacity && (i *= r.opacity);
                              else if ("textAnchor" === t) i = "start" === i ? "left" : "end" === i ? "right" : "center";
                              else if ("charSpacing" === t) a = (o(i, n) / n) * 1e3;
                              else if ("paintFirst" === t) {
                                  var c = i.indexOf("fill"),
                                      l = i.indexOf("stroke");
                                  (i = "fill"), -1 < c && -1 < l && l < c ? (i = "stroke") : -1 === c && -1 < l && (i = "stroke");
                              } else {
                                  if ("href" === t || "xlink:href" === t) return i;
                                  a = h ? i.map(o) : o(i, n);
                              }
                          else i = "";
                          return !h && isNaN(a) ? i : a;
                      }
                      function l(t) {
                          return new RegExp("^(" + t.join("|") + ")\\b", "i");
                      }
                      function u(t, e) {
                          var i,
                              r,
                              n,
                              o,
                              s = [];
                          for (n = 0, o = e.length; n < o; n++) (i = e[n]), (r = t.getElementsByTagName(i)), (s = s.concat(Array.prototype.slice.call(r)));
                          return s;
                      }
                      function f(t, e) {
                          var i,
                              r = !0;
                          return (
                              (i = d(t, e.pop())) &&
                                  e.length &&
                                  (r = (function (t, e) {
                                      for (var i, r = !0; t.parentNode && 1 === t.parentNode.nodeType && e.length; ) r && (i = e.pop()), (r = d((t = t.parentNode), i));
                                      return 0 === e.length;
                                  })(t, e)),
                              i && r && 0 === e.length
                          );
                      }
                      function d(t, e) {
                          var i,
                              r,
                              n = t.nodeName,
                              o = t.getAttribute("class"),
                              s = t.getAttribute("id");
                          if (((i = new RegExp("^" + n, "i")), (e = e.replace(i, "")), s && e.length && ((i = new RegExp("#" + s + "(?![a-zA-Z\\-]+)", "i")), (e = e.replace(i, ""))), o && e.length))
                              for (r = (o = o.split(" ")).length; r--; ) (i = new RegExp("\\." + o[r] + "(?![a-zA-Z\\-]+)", "i")), (e = e.replace(i, ""));
                          return 0 === e.length;
                      }
                      function g(t, e) {
                          var i;
                          if ((t.getElementById && (i = t.getElementById(e)), i)) return i;
                          var r,
                              n,
                              o,
                              s = t.getElementsByTagName("*");
                          for (n = 0, o = s.length; n < o; n++) if (e === (r = s[n]).getAttribute("id")) return r;
                      }
                      (e.svgValidTagNamesRegEx = l(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"])),
                          (e.svgViewBoxElementsRegEx = l(["symbol", "image", "marker", "pattern", "view", "svg"])),
                          (e.svgInvalidAncestorsRegEx = l(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"])),
                          (e.svgValidParentsRegEx = l(["symbol", "g", "a", "svg", "clipPath", "defs"])),
                          (e.cssRules = {}),
                          (e.gradientDefs = {}),
                          (e.clipPaths = {}),
                          (e.parseTransformAttribute = (function () {
                              function t(t, i, r) {
                                  t[r] = Math.tan(e.util.degreesToRadians(i[0]));
                              }
                              var i = e.iMatrix,
                                  r = e.reNum,
                                  n = "(?:\\s+,?\\s*|,\\s*)",
                                  o =
                                      "(?:(?:(matrix)\\s*\\(\\s*(" +
                                      r +
                                      ")" +
                                      n +
                                      "(" +
                                      r +
                                      ")" +
                                      n +
                                      "(" +
                                      r +
                                      ")" +
                                      n +
                                      "(" +
                                      r +
                                      ")" +
                                      n +
                                      "(" +
                                      r +
                                      ")" +
                                      n +
                                      "(" +
                                      r +
                                      ")\\s*\\))|(?:(translate)\\s*\\(\\s*(" +
                                      r +
                                      ")(?:" +
                                      n +
                                      "(" +
                                      r +
                                      "))?\\s*\\))|(?:(scale)\\s*\\(\\s*(" +
                                      r +
                                      ")(?:" +
                                      n +
                                      "(" +
                                      r +
                                      "))?\\s*\\))|(?:(rotate)\\s*\\(\\s*(" +
                                      r +
                                      ")(?:" +
                                      n +
                                      "(" +
                                      r +
                                      ")" +
                                      n +
                                      "(" +
                                      r +
                                      "))?\\s*\\))|(?:(skewX)\\s*\\(\\s*(" +
                                      r +
                                      ")\\s*\\))|(?:(skewY)\\s*\\(\\s*(" +
                                      r +
                                      ")\\s*\\)))",
                                  s = new RegExp("^\\s*(?:(?:" + o + "(?:" + n + "*" + o + ")*)?)\\s*$"),
                                  a = new RegExp(o, "g");
                              return function (r) {
                                  var n = i.concat(),
                                      h = [];
                                  if (!r || (r && !s.test(r))) return n;
                                  r.replace(a, function (r) {
                                      var s,
                                          a,
                                          c,
                                          l,
                                          u,
                                          f,
                                          d,
                                          g,
                                          p,
                                          v,
                                          m,
                                          _,
                                          y = new RegExp(o).exec(r).filter(function (t) {
                                              return !!t;
                                          }),
                                          b = y[1],
                                          x = y.slice(2).map(parseFloat);
                                      switch (b) {
                                          case "translate":
                                              (_ = x), ((m = n)[4] = _[0]), 2 === _.length && (m[5] = _[1]);
                                              break;
                                          case "rotate":
                                              (x[0] = e.util.degreesToRadians(x[0])),
                                                  (u = n),
                                                  (f = x),
                                                  (d = e.util.cos(f[0])),
                                                  (g = e.util.sin(f[0])),
                                                  (v = p = 0),
                                                  3 === f.length && ((p = f[1]), (v = f[2])),
                                                  (u[0] = d),
                                                  (u[1] = g),
                                                  (u[2] = -g),
                                                  (u[3] = d),
                                                  (u[4] = p - (d * p - g * v)),
                                                  (u[5] = v - (g * p + d * v));
                                              break;
                                          case "scale":
                                              (s = n), (c = (a = x)[0]), (l = 2 === a.length ? a[1] : a[0]), (s[0] = c), (s[3] = l);
                                              break;
                                          case "skewX":
                                              t(n, x, 2);
                                              break;
                                          case "skewY":
                                              t(n, x, 1);
                                              break;
                                          case "matrix":
                                              n = x;
                                      }
                                      h.push(n.concat()), (n = i.concat());
                                  });
                                  for (var c = h[0]; 1 < h.length; ) h.shift(), (c = e.util.multiplyTransformMatrices(c, h[0]));
                                  return c;
                              };
                          })());
                      var p = new RegExp("^\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*,?\\s*(" + e.reNum + "+)\\s*$");
                      function v(t) {
                          var i,
                              r,
                              n,
                              s,
                              a,
                              h,
                              c = t.getAttribute("viewBox"),
                              l = 1,
                              u = 1,
                              f = t.getAttribute("width"),
                              d = t.getAttribute("height"),
                              g = t.getAttribute("x") || 0,
                              v = t.getAttribute("y") || 0,
                              m = t.getAttribute("preserveAspectRatio") || "",
                              _ = !c || !e.svgViewBoxElementsRegEx.test(t.nodeName) || !(c = c.match(p)),
                              y = !f || !d || "100%" === f || "100%" === d,
                              b = _ && y,
                              x = {},
                              C = "",
                              S = 0,
                              w = 0;
                          if (((x.width = 0), (x.height = 0), (x.toBeParsed = b))) return x;
                          if (_) return (x.width = o(f)), (x.height = o(d)), x;
                          if (
                              ((i = -parseFloat(c[1])),
                              (r = -parseFloat(c[2])),
                              (n = parseFloat(c[3])),
                              (s = parseFloat(c[4])),
                              (x.minX = i),
                              (x.minY = r),
                              (x.viewBoxWidth = n),
                              (x.viewBoxHeight = s),
                              y ? ((x.width = n), (x.height = s)) : ((x.width = o(f)), (x.height = o(d)), (l = x.width / n), (u = x.height / s)),
                              "none" !== (m = e.util.parsePreserveAspectRatioAttribute(m)).alignX &&
                                  ("meet" === m.meetOrSlice && (u = l = u < l ? u : l),
                                  "slice" === m.meetOrSlice && (u = l = u < l ? l : u),
                                  (S = x.width - n * l),
                                  (w = x.height - s * l),
                                  "Mid" === m.alignX && (S /= 2),
                                  "Mid" === m.alignY && (w /= 2),
                                  "Min" === m.alignX && (S = 0),
                                  "Min" === m.alignY && (w = 0)),
                              1 === l && 1 === u && 0 === i && 0 === r && 0 === g && 0 === v)
                          )
                              return x;
                          if (
                              ((g || v) && (C = " translate(" + o(g) + " " + o(v) + ") "),
                              (a = C + " matrix(" + l + " 0 0 " + u + " " + (i * l + S) + " " + (r * u + w) + ") "),
                              (x.viewboxTransform = e.parseTransformAttribute(a)),
                              "svg" === t.nodeName)
                          ) {
                              for (h = t.ownerDocument.createElement("g"); t.firstChild; ) h.appendChild(t.firstChild);
                              t.appendChild(h);
                          } else a = (h = t).getAttribute("transform") + a;
                          return h.setAttribute("transform", a), x;
                      }
                      function m(t, e) {
                          var i = "xlink:href",
                              r = g(t, e.getAttribute(i).substr(1));
                          if (
                              (r && r.getAttribute(i) && m(t, r),
                              ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"].forEach(function (t) {
                                  r && !e.hasAttribute(t) && r.hasAttribute(t) && e.setAttribute(t, r.getAttribute(t));
                              }),
                              !e.children.length)
                          )
                              for (var n = r.cloneNode(!0); n.firstChild; ) e.appendChild(n.firstChild);
                          e.removeAttribute(i);
                      }
                      e.parseSVGDocument = function (t, i, n, o) {
                          if (t) {
                              !(function (t) {
                                  for (var e = u(t, ["use", "svg:use"]), i = 0; e.length && i < e.length; ) {
                                      var r,
                                          n,
                                          o,
                                          s,
                                          a = e[i],
                                          h = (a.getAttribute("xlink:href") || a.getAttribute("href")).substr(1),
                                          c = a.getAttribute("x") || 0,
                                          l = a.getAttribute("y") || 0,
                                          f = g(t, h).cloneNode(!0),
                                          d = (f.getAttribute("transform") || "") + " translate(" + c + ", " + l + ")",
                                          p = e.length;
                                      if ((v(f), /^svg$/i.test(f.nodeName))) {
                                          var m = f.ownerDocument.createElement("g");
                                          for (n = 0, s = (o = f.attributes).length; n < s; n++) (r = o.item(n)), m.setAttribute(r.nodeName, r.nodeValue);
                                          for (; f.firstChild; ) m.appendChild(f.firstChild);
                                          f = m;
                                      }
                                      for (n = 0, s = (o = a.attributes).length; n < s; n++)
                                          "x" !== (r = o.item(n)).nodeName &&
                                              "y" !== r.nodeName &&
                                              "xlink:href" !== r.nodeName &&
                                              "href" !== r.nodeName &&
                                              ("transform" === r.nodeName ? (d = r.nodeValue + " " + d) : f.setAttribute(r.nodeName, r.nodeValue));
                                      f.setAttribute("transform", d), f.setAttribute("instantiated_by_use", "1"), f.removeAttribute("id"), a.parentNode.replaceChild(f, a), e.length === p && i++;
                                  }
                              })(t);
                              var s,
                                  a,
                                  h = e.Object.__uid++,
                                  c = v(t),
                                  l = e.util.toArray(t.getElementsByTagName("*"));
                              if (((c.crossOrigin = o && o.crossOrigin), (c.svgUid = h), 0 === l.length && e.isLikelyNode)) {
                                  var f = [];
                                  for (s = 0, a = (l = t.selectNodes('//*[name(.)!="svg"]')).length; s < a; s++) f[s] = l[s];
                                  l = f;
                              }
                              var d = l.filter(function (t) {
                                  return (
                                      v(t),
                                      e.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:", "")) &&
                                          !(function (t, e) {
                                              for (; t && (t = t.parentNode); ) if (t.nodeName && e.test(t.nodeName.replace("svg:", "")) && !t.getAttribute("instantiated_by_use")) return !0;
                                              return !1;
                                          })(t, e.svgInvalidAncestorsRegEx)
                                  );
                              });
                              if (!d || (d && !d.length)) i && i([], {});
                              else {
                                  var p = {};
                                  l
                                      .filter(function (t) {
                                          return "clipPath" === t.nodeName.replace("svg:", "");
                                      })
                                      .forEach(function (t) {
                                          var i = t.getAttribute("id");
                                          p[i] = e.util.toArray(t.getElementsByTagName("*")).filter(function (t) {
                                              return e.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:", ""));
                                          });
                                      }),
                                      (e.gradientDefs[h] = e.getGradientDefs(t)),
                                      (e.cssRules[h] = e.getCSSRules(t)),
                                      (e.clipPaths[h] = p),
                                      e.parseElements(
                                          d,
                                          function (t, r) {
                                              i && (i(t, c, r, l), delete e.gradientDefs[h], delete e.cssRules[h], delete e.clipPaths[h]);
                                          },
                                          r(c),
                                          n,
                                          o
                                      );
                              }
                          }
                      };
                      var _ = new RegExp(
                          "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + e.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + e.reNum + "))?\\s+(.*)"
                      );
                      i(e, {
                          parseFontDeclaration: function (t, e) {
                              var i = t.match(_);
                              if (i) {
                                  var r = i[1],
                                      n = i[3],
                                      s = i[4],
                                      a = i[5],
                                      h = i[6];
                                  r && (e.fontStyle = r), n && (e.fontWeight = isNaN(parseFloat(n)) ? n : parseFloat(n)), s && (e.fontSize = o(s)), h && (e.fontFamily = h), a && (e.lineHeight = "normal" === a ? 1 : a);
                              }
                          },
                          getGradientDefs: function (t) {
                              var e,
                                  i = u(t, ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"]),
                                  r = 0,
                                  n = {};
                              for (r = i.length; r--; ) (e = i[r]).getAttribute("xlink:href") && m(t, e), (n[e.getAttribute("id")] = e);
                              return n;
                          },
                          parseAttributes: function (t, r, s) {
                              if (t) {
                                  var l,
                                      u,
                                      d,
                                      g = {};
                                  void 0 === s && (s = t.getAttribute("svgUid")), t.parentNode && e.svgValidParentsRegEx.test(t.parentNode.nodeName) && (g = e.parseAttributes(t.parentNode, r, s));
                                  var p = r.reduce(function (e, i) {
                                      return (l = t.getAttribute(i)) && (e[i] = l), e;
                                  }, {});
                                  (p = i(
                                      p,
                                      i(
                                          (function (t, i) {
                                              var r = {};
                                              for (var n in e.cssRules[i]) if (f(t, n.split(" "))) for (var o in e.cssRules[i][n]) r[o] = e.cssRules[i][n][o];
                                              return r;
                                          })(t, s),
                                          e.parseStyleAttribute(t)
                                      )
                                  )),
                                      (u = d = g.fontSize || e.Text.DEFAULT_SVG_FONT_SIZE),
                                      p["font-size"] && (p["font-size"] = u = o(p["font-size"], d));
                                  var v,
                                      m,
                                      _,
                                      y = {};
                                  for (var b in p) (m = c((v = (_ = b) in a ? a[_] : _), p[b], g, u)), (y[v] = m);
                                  y && y.font && e.parseFontDeclaration(y.font, y);
                                  var x = i(g, y);
                                  return e.svgValidParentsRegEx.test(t.nodeName)
                                      ? x
                                      : (function (t) {
                                            for (var i in h)
                                                if (void 0 !== t[h[i]] && "" !== t[i]) {
                                                    if (void 0 === t[i]) {
                                                        if (!e.Object.prototype[i]) continue;
                                                        t[i] = e.Object.prototype[i];
                                                    }
                                                    if (0 !== t[i].indexOf("url(")) {
                                                        var r = new e.Color(t[i]);
                                                        t[i] = r.setAlpha(n(r.getAlpha() * t[h[i]], 2)).toRgba();
                                                    }
                                                }
                                            return t;
                                        })(x);
                              }
                          },
                          parseElements: function (t, i, r, n, o) {
                              new e.ElementsParser(t, i, r, n, o).parse();
                          },
                          parseStyleAttribute: function (t) {
                              var e,
                                  i,
                                  r,
                                  n = {},
                                  o = t.getAttribute("style");
                              return (
                                  o &&
                                      ("string" == typeof o
                                          ? ((e = n),
                                            o
                                                .replace(/;\s*$/, "")
                                                .split(";")
                                                .forEach(function (t) {
                                                    var n = t.split(":");
                                                    (i = n[0].trim().toLowerCase()), (r = n[1].trim()), (e[i] = r);
                                                }))
                                          : (function (t, e) {
                                                var i, r;
                                                for (var n in t) void 0 !== t[n] && ((i = n.toLowerCase()), (r = t[n]), (e[i] = r));
                                            })(o, n)),
                                  n
                              );
                          },
                          parsePointsAttribute: function (t) {
                              if (!t) return null;
                              var e,
                                  i,
                                  r = [];
                              for (e = 0, i = (t = (t = t.replace(/,/g, " ").trim()).split(/\s+/)).length; e < i; e += 2) r.push({ x: parseFloat(t[e]), y: parseFloat(t[e + 1]) });
                              return r;
                          },
                          getCSSRules: function (t) {
                              var i,
                                  r,
                                  n = t.getElementsByTagName("style"),
                                  o = {};
                              for (i = 0, r = n.length; i < r; i++) {
                                  var s = n[i].textContent || n[i].text;
                                  "" !== (s = s.replace(/\/\*[\s\S]*?\*\//g, "")).trim() &&
                                      s
                                          .match(/[^{]*\{[\s\S]*?\}/g)
                                          .map(function (t) {
                                              return t.trim();
                                          })
                                          .forEach(function (t) {
                                              var n = t.match(/([\s\S]*?)\s*\{([^}]*)\}/),
                                                  s = {},
                                                  a = n[2]
                                                      .trim()
                                                      .replace(/;$/, "")
                                                      .split(/\s*;\s*/);
                                              for (i = 0, r = a.length; i < r; i++) {
                                                  var h = a[i].split(/\s*:\s*/),
                                                      c = h[0],
                                                      l = h[1];
                                                  s[c] = l;
                                              }
                                              (t = n[1]).split(",").forEach(function (t) {
                                                  "" !== (t = t.replace(/^svg/i, "").trim()) && (o[t] ? e.util.object.extend(o[t], s) : (o[t] = e.util.object.clone(s)));
                                              });
                                          });
                              }
                              return o;
                          },
                          loadSVGFromURL: function (t, i, r, n) {
                              (t = t.replace(/^\n\s*/, "").trim()),
                                  new e.util.request(t, {
                                      method: "get",
                                      onComplete: function (t) {
                                          var o = t.responseXML;
                                          if (
                                              (o &&
                                                  !o.documentElement &&
                                                  e.window.ActiveXObject &&
                                                  t.responseText &&
                                                  (((o = new ActiveXObject("Microsoft.XMLDOM")).async = "false"), o.loadXML(t.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ""))),
                                              !o || !o.documentElement)
                                          )
                                              return i && i(null), !1;
                                          e.parseSVGDocument(
                                              o.documentElement,
                                              function (t, e, r, n) {
                                                  i && i(t, e, r, n);
                                              },
                                              r,
                                              n
                                          );
                                      },
                                  });
                          },
                          loadSVGFromString: function (t, i, r, n) {
                              var o;
                              if (((t = t.trim()), void 0 !== e.window.DOMParser)) {
                                  var s = new e.window.DOMParser();
                                  s && s.parseFromString && (o = s.parseFromString(t, "text/xml"));
                              } else e.window.ActiveXObject && (((o = new ActiveXObject("Microsoft.XMLDOM")).async = "false"), o.loadXML(t.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, "")));
                              e.parseSVGDocument(
                                  o.documentElement,
                                  function (t, e, r, n) {
                                      i(t, e, r, n);
                                  },
                                  r,
                                  n
                              );
                          },
                      });
                  })(e),
                  (P.ElementsParser = function (t, e, i, r, n) {
                      (this.elements = t), (this.callback = e), (this.options = i), (this.reviver = r), (this.svgUid = (i && i.svgUid) || 0), (this.parsingOptions = n), (this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g);
                  }),
                  ((p = P.ElementsParser.prototype).parse = function () {
                      (this.instances = new Array(this.elements.length)), (this.numElements = this.elements.length), this.createObjects();
                  }),
                  (p.createObjects = function () {
                      var t = this;
                      this.elements.forEach(function (e, i) {
                          e.setAttribute("svgUid", t.svgUid), t.createObject(e, i);
                      });
                  }),
                  (p.findTag = function (t) {
                      return P[P.util.string.capitalize(t.tagName.replace("svg:", ""))];
                  }),
                  (p.createObject = function (t, e) {
                      var i = this.findTag(t);
                      if (i && i.fromElement)
                          try {
                              i.fromElement(t, this.createCallback(e, t), this.options);
                          } catch (t) {
                              P.log(t);
                          }
                      else this.checkIfDone();
                  }),
                  (p.createCallback = function (t, e) {
                      var i = this;
                      return function (r) {
                          var n;
                          i.resolveGradient(r, e, "fill"),
                              i.resolveGradient(r, e, "stroke"),
                              r instanceof P.Image && r._originalElement && (n = r.parsePreserveAspectRatioAttribute(e)),
                              r._removeTransformMatrix(n),
                              i.resolveClipPath(r),
                              i.reviver && i.reviver(e, r),
                              (i.instances[t] = r),
                              i.checkIfDone();
                      };
                  }),
                  (p.extractPropertyDefinition = function (t, e, i) {
                      var r = t[e];
                      if (/^url\(/.test(r)) {
                          var n = this.regexUrl.exec(r)[1];
                          return (this.regexUrl.lastIndex = 0), P[i][this.svgUid][n];
                      }
                  }),
                  (p.resolveGradient = function (t, e, i) {
                      var r = this.extractPropertyDefinition(t, i, "gradientDefs");
                      if (r) {
                          var n = e.getAttribute(i + "-opacity"),
                              o = P.Gradient.fromElement(r, t, n, this.options);
                          t.set(i, o);
                      }
                  }),
                  (p.createClipPathCallback = function (t, e) {
                      return function (t) {
                          t._removeTransformMatrix(), (t.fillRule = t.clipRule), e.push(t);
                      };
                  }),
                  (p.resolveClipPath = function (t) {
                      var e,
                          i,
                          r,
                          n,
                          o = this.extractPropertyDefinition(t, "clipPath", "clipPaths");
                      if (o) {
                          (r = []), (i = P.util.invertTransform(t.calcTransformMatrix()));
                          for (var s = 0; s < o.length; s++) (e = o[s]), this.findTag(e).fromElement(e, this.createClipPathCallback(t, r), this.options);
                          (o = 1 === r.length ? r[0] : new P.Group(r)), (n = P.util.multiplyTransformMatrices(i, o.calcTransformMatrix())), o.clipPath && this.resolveClipPath(o);
                          var a = P.util.qrDecompose(n);
                          (o.flipX = !1),
                              (o.flipY = !1),
                              o.set("scaleX", a.scaleX),
                              o.set("scaleY", a.scaleY),
                              (o.angle = a.angle),
                              (o.skewX = a.skewX),
                              (o.skewY = 0),
                              o.setPositionByOrigin({ x: a.translateX, y: a.translateY }, "center", "center"),
                              (t.clipPath = o);
                      }
                  }),
                  (p.checkIfDone = function () {
                      0 == --this.numElements &&
                          ((this.instances = this.instances.filter(function (t) {
                              return null != t;
                          })),
                          this.callback(this.instances, this.elements));
                  }),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      function i(t, e) {
                          (this.x = t), (this.y = e);
                      }
                      e.Point
                          ? e.warn("fabric.Point is already defined")
                          : ((e.Point = i).prototype = {
                                type: "point",
                                constructor: i,
                                add: function (t) {
                                    return new i(this.x + t.x, this.y + t.y);
                                },
                                addEquals: function (t) {
                                    return (this.x += t.x), (this.y += t.y), this;
                                },
                                scalarAdd: function (t) {
                                    return new i(this.x + t, this.y + t);
                                },
                                scalarAddEquals: function (t) {
                                    return (this.x += t), (this.y += t), this;
                                },
                                subtract: function (t) {
                                    return new i(this.x - t.x, this.y - t.y);
                                },
                                subtractEquals: function (t) {
                                    return (this.x -= t.x), (this.y -= t.y), this;
                                },
                                scalarSubtract: function (t) {
                                    return new i(this.x - t, this.y - t);
                                },
                                scalarSubtractEquals: function (t) {
                                    return (this.x -= t), (this.y -= t), this;
                                },
                                multiply: function (t) {
                                    return new i(this.x * t, this.y * t);
                                },
                                multiplyEquals: function (t) {
                                    return (this.x *= t), (this.y *= t), this;
                                },
                                divide: function (t) {
                                    return new i(this.x / t, this.y / t);
                                },
                                divideEquals: function (t) {
                                    return (this.x /= t), (this.y /= t), this;
                                },
                                eq: function (t) {
                                    return this.x === t.x && this.y === t.y;
                                },
                                lt: function (t) {
                                    return this.x < t.x && this.y < t.y;
                                },
                                lte: function (t) {
                                    return this.x <= t.x && this.y <= t.y;
                                },
                                gt: function (t) {
                                    return this.x > t.x && this.y > t.y;
                                },
                                gte: function (t) {
                                    return this.x >= t.x && this.y >= t.y;
                                },
                                lerp: function (t, e) {
                                    return void 0 === e && (e = 0.5), (e = Math.max(Math.min(1, e), 0)), new i(this.x + (t.x - this.x) * e, this.y + (t.y - this.y) * e);
                                },
                                distanceFrom: function (t) {
                                    var e = this.x - t.x,
                                        i = this.y - t.y;
                                    return Math.sqrt(e * e + i * i);
                                },
                                midPointFrom: function (t) {
                                    return this.lerp(t);
                                },
                                min: function (t) {
                                    return new i(Math.min(this.x, t.x), Math.min(this.y, t.y));
                                },
                                max: function (t) {
                                    return new i(Math.max(this.x, t.x), Math.max(this.y, t.y));
                                },
                                toString: function () {
                                    return this.x + "," + this.y;
                                },
                                setXY: function (t, e) {
                                    return (this.x = t), (this.y = e), this;
                                },
                                setX: function (t) {
                                    return (this.x = t), this;
                                },
                                setY: function (t) {
                                    return (this.y = t), this;
                                },
                                setFromPoint: function (t) {
                                    return (this.x = t.x), (this.y = t.y), this;
                                },
                                swap: function (t) {
                                    var e = this.x,
                                        i = this.y;
                                    (this.x = t.x), (this.y = t.y), (t.x = e), (t.y = i);
                                },
                                clone: function () {
                                    return new i(this.x, this.y);
                                },
                            });
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      function i(t) {
                          (this.status = t), (this.points = []);
                      }
                      e.Intersection
                          ? e.warn("fabric.Intersection is already defined")
                          : ((e.Intersection = i),
                            (e.Intersection.prototype = {
                                constructor: i,
                                appendPoint: function (t) {
                                    return this.points.push(t), this;
                                },
                                appendPoints: function (t) {
                                    return (this.points = this.points.concat(t)), this;
                                },
                            }),
                            (e.Intersection.intersectLineLine = function (t, r, n, o) {
                                var s,
                                    a = (o.x - n.x) * (t.y - n.y) - (o.y - n.y) * (t.x - n.x),
                                    h = (r.x - t.x) * (t.y - n.y) - (r.y - t.y) * (t.x - n.x),
                                    c = (o.y - n.y) * (r.x - t.x) - (o.x - n.x) * (r.y - t.y);
                                if (0 !== c) {
                                    var l = a / c,
                                        u = h / c;
                                    0 <= l && l <= 1 && 0 <= u && u <= 1 ? (s = new i("Intersection")).appendPoint(new e.Point(t.x + l * (r.x - t.x), t.y + l * (r.y - t.y))) : (s = new i());
                                } else s = new i(0 === a || 0 === h ? "Coincident" : "Parallel");
                                return s;
                            }),
                            (e.Intersection.intersectLinePolygon = function (t, e, r) {
                                var n,
                                    o,
                                    s,
                                    a,
                                    h = new i(),
                                    c = r.length;
                                for (a = 0; a < c; a++) (n = r[a]), (o = r[(a + 1) % c]), (s = i.intersectLineLine(t, e, n, o)), h.appendPoints(s.points);
                                return 0 < h.points.length && (h.status = "Intersection"), h;
                            }),
                            (e.Intersection.intersectPolygonPolygon = function (t, e) {
                                var r,
                                    n = new i(),
                                    o = t.length;
                                for (r = 0; r < o; r++) {
                                    var s = t[r],
                                        a = t[(r + 1) % o],
                                        h = i.intersectLinePolygon(s, a, e);
                                    n.appendPoints(h.points);
                                }
                                return 0 < n.points.length && (n.status = "Intersection"), n;
                            }),
                            (e.Intersection.intersectPolygonRectangle = function (t, r, n) {
                                var o = r.min(n),
                                    s = r.max(n),
                                    a = new e.Point(s.x, o.y),
                                    h = new e.Point(o.x, s.y),
                                    c = i.intersectLinePolygon(o, a, t),
                                    l = i.intersectLinePolygon(a, s, t),
                                    u = i.intersectLinePolygon(s, h, t),
                                    f = i.intersectLinePolygon(h, o, t),
                                    d = new i();
                                return d.appendPoints(c.points), d.appendPoints(l.points), d.appendPoints(u.points), d.appendPoints(f.points), 0 < d.points.length && (d.status = "Intersection"), d;
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      function i(t) {
                          t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1]);
                      }
                      function r(t, e, i) {
                          return i < 0 && (i += 1), 1 < i && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
                      }
                      e.Color
                          ? e.warn("fabric.Color is already defined.")
                          : ((e.Color = i),
                            (e.Color.prototype = {
                                _tryParsingColor: function (t) {
                                    var e;
                                    t in i.colorNameMap && (t = i.colorNameMap[t]),
                                        "transparent" === t && (e = [255, 255, 255, 0]),
                                        e || (e = i.sourceFromHex(t)),
                                        e || (e = i.sourceFromRgb(t)),
                                        e || (e = i.sourceFromHsl(t)),
                                        e || (e = [0, 0, 0, 1]),
                                        e && this.setSource(e);
                                },
                                _rgbToHsl: function (t, i, r) {
                                    (t /= 255), (i /= 255), (r /= 255);
                                    var n,
                                        o,
                                        s,
                                        a = e.util.array.max([t, i, r]),
                                        h = e.util.array.min([t, i, r]);
                                    if (((s = (a + h) / 2), a === h)) n = o = 0;
                                    else {
                                        var c = a - h;
                                        switch (((o = 0.5 < s ? c / (2 - a - h) : c / (a + h)), a)) {
                                            case t:
                                                n = (i - r) / c + (i < r ? 6 : 0);
                                                break;
                                            case i:
                                                n = (r - t) / c + 2;
                                                break;
                                            case r:
                                                n = (t - i) / c + 4;
                                        }
                                        n /= 6;
                                    }
                                    return [Math.round(360 * n), Math.round(100 * o), Math.round(100 * s)];
                                },
                                getSource: function () {
                                    return this._source;
                                },
                                setSource: function (t) {
                                    this._source = t;
                                },
                                toRgb: function () {
                                    var t = this.getSource();
                                    return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
                                },
                                toRgba: function () {
                                    var t = this.getSource();
                                    return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + ")";
                                },
                                toHsl: function () {
                                    var t = this.getSource(),
                                        e = this._rgbToHsl(t[0], t[1], t[2]);
                                    return "hsl(" + e[0] + "," + e[1] + "%," + e[2] + "%)";
                                },
                                toHsla: function () {
                                    var t = this.getSource(),
                                        e = this._rgbToHsl(t[0], t[1], t[2]);
                                    return "hsla(" + e[0] + "," + e[1] + "%," + e[2] + "%," + t[3] + ")";
                                },
                                toHex: function () {
                                    var t,
                                        e,
                                        i,
                                        r = this.getSource();
                                    return (
                                        (t = 1 === (t = r[0].toString(16)).length ? "0" + t : t),
                                        (e = 1 === (e = r[1].toString(16)).length ? "0" + e : e),
                                        (i = 1 === (i = r[2].toString(16)).length ? "0" + i : i),
                                        t.toUpperCase() + e.toUpperCase() + i.toUpperCase()
                                    );
                                },
                                toHexa: function () {
                                    var t,
                                        e = this.getSource();
                                    return (t = 1 === (t = (t = Math.round(255 * e[3])).toString(16)).length ? "0" + t : t), this.toHex() + t.toUpperCase();
                                },
                                getAlpha: function () {
                                    return this.getSource()[3];
                                },
                                setAlpha: function (t) {
                                    var e = this.getSource();
                                    return (e[3] = t), this.setSource(e), this;
                                },
                                toGrayscale: function () {
                                    var t = this.getSource(),
                                        e = parseInt((0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2]).toFixed(0), 10),
                                        i = t[3];
                                    return this.setSource([e, e, e, i]), this;
                                },
                                toBlackWhite: function (t) {
                                    var e = this.getSource(),
                                        i = (0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2]).toFixed(0),
                                        r = e[3];
                                    return (t = t || 127), (i = Number(i) < Number(t) ? 0 : 255), this.setSource([i, i, i, r]), this;
                                },
                                overlayWith: function (t) {
                                    t instanceof i || (t = new i(t));
                                    var e,
                                        r = [],
                                        n = this.getAlpha(),
                                        o = this.getSource(),
                                        s = t.getSource();
                                    for (e = 0; e < 3; e++) r.push(Math.round(0.5 * o[e] + 0.5 * s[e]));
                                    return (r[3] = n), this.setSource(r), this;
                                },
                            }),
                            (e.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i),
                            (e.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i),
                            (e.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i),
                            (e.Color.colorNameMap = {
                                aliceblue: "#F0F8FF",
                                antiquewhite: "#FAEBD7",
                                aqua: "#00FFFF",
                                aquamarine: "#7FFFD4",
                                azure: "#F0FFFF",
                                beige: "#F5F5DC",
                                bisque: "#FFE4C4",
                                black: "#000000",
                                blanchedalmond: "#FFEBCD",
                                blue: "#0000FF",
                                blueviolet: "#8A2BE2",
                                brown: "#A52A2A",
                                burlywood: "#DEB887",
                                cadetblue: "#5F9EA0",
                                chartreuse: "#7FFF00",
                                chocolate: "#D2691E",
                                coral: "#FF7F50",
                                cornflowerblue: "#6495ED",
                                cornsilk: "#FFF8DC",
                                crimson: "#DC143C",
                                cyan: "#00FFFF",
                                darkblue: "#00008B",
                                darkcyan: "#008B8B",
                                darkgoldenrod: "#B8860B",
                                darkgray: "#A9A9A9",
                                darkgrey: "#A9A9A9",
                                darkgreen: "#006400",
                                darkkhaki: "#BDB76B",
                                darkmagenta: "#8B008B",
                                darkolivegreen: "#556B2F",
                                darkorange: "#FF8C00",
                                darkorchid: "#9932CC",
                                darkred: "#8B0000",
                                darksalmon: "#E9967A",
                                darkseagreen: "#8FBC8F",
                                darkslateblue: "#483D8B",
                                darkslategray: "#2F4F4F",
                                darkslategrey: "#2F4F4F",
                                darkturquoise: "#00CED1",
                                darkviolet: "#9400D3",
                                deeppink: "#FF1493",
                                deepskyblue: "#00BFFF",
                                dimgray: "#696969",
                                dimgrey: "#696969",
                                dodgerblue: "#1E90FF",
                                firebrick: "#B22222",
                                floralwhite: "#FFFAF0",
                                forestgreen: "#228B22",
                                fuchsia: "#FF00FF",
                                gainsboro: "#DCDCDC",
                                ghostwhite: "#F8F8FF",
                                gold: "#FFD700",
                                goldenrod: "#DAA520",
                                gray: "#808080",
                                grey: "#808080",
                                green: "#008000",
                                greenyellow: "#ADFF2F",
                                honeydew: "#F0FFF0",
                                hotpink: "#FF69B4",
                                indianred: "#CD5C5C",
                                indigo: "#4B0082",
                                ivory: "#FFFFF0",
                                khaki: "#F0E68C",
                                lavender: "#E6E6FA",
                                lavenderblush: "#FFF0F5",
                                lawngreen: "#7CFC00",
                                lemonchiffon: "#FFFACD",
                                lightblue: "#ADD8E6",
                                lightcoral: "#F08080",
                                lightcyan: "#E0FFFF",
                                lightgoldenrodyellow: "#FAFAD2",
                                lightgray: "#D3D3D3",
                                lightgrey: "#D3D3D3",
                                lightgreen: "#90EE90",
                                lightpink: "#FFB6C1",
                                lightsalmon: "#FFA07A",
                                lightseagreen: "#20B2AA",
                                lightskyblue: "#87CEFA",
                                lightslategray: "#778899",
                                lightslategrey: "#778899",
                                lightsteelblue: "#B0C4DE",
                                lightyellow: "#FFFFE0",
                                lime: "#00FF00",
                                limegreen: "#32CD32",
                                linen: "#FAF0E6",
                                magenta: "#FF00FF",
                                maroon: "#800000",
                                mediumaquamarine: "#66CDAA",
                                mediumblue: "#0000CD",
                                mediumorchid: "#BA55D3",
                                mediumpurple: "#9370DB",
                                mediumseagreen: "#3CB371",
                                mediumslateblue: "#7B68EE",
                                mediumspringgreen: "#00FA9A",
                                mediumturquoise: "#48D1CC",
                                mediumvioletred: "#C71585",
                                midnightblue: "#191970",
                                mintcream: "#F5FFFA",
                                mistyrose: "#FFE4E1",
                                moccasin: "#FFE4B5",
                                navajowhite: "#FFDEAD",
                                navy: "#000080",
                                oldlace: "#FDF5E6",
                                olive: "#808000",
                                olivedrab: "#6B8E23",
                                orange: "#FFA500",
                                orangered: "#FF4500",
                                orchid: "#DA70D6",
                                palegoldenrod: "#EEE8AA",
                                palegreen: "#98FB98",
                                paleturquoise: "#AFEEEE",
                                palevioletred: "#DB7093",
                                papayawhip: "#FFEFD5",
                                peachpuff: "#FFDAB9",
                                peru: "#CD853F",
                                pink: "#FFC0CB",
                                plum: "#DDA0DD",
                                powderblue: "#B0E0E6",
                                purple: "#800080",
                                rebeccapurple: "#663399",
                                red: "#FF0000",
                                rosybrown: "#BC8F8F",
                                royalblue: "#4169E1",
                                saddlebrown: "#8B4513",
                                salmon: "#FA8072",
                                sandybrown: "#F4A460",
                                seagreen: "#2E8B57",
                                seashell: "#FFF5EE",
                                sienna: "#A0522D",
                                silver: "#C0C0C0",
                                skyblue: "#87CEEB",
                                slateblue: "#6A5ACD",
                                slategray: "#708090",
                                slategrey: "#708090",
                                snow: "#FFFAFA",
                                springgreen: "#00FF7F",
                                steelblue: "#4682B4",
                                tan: "#D2B48C",
                                teal: "#008080",
                                thistle: "#D8BFD8",
                                tomato: "#FF6347",
                                turquoise: "#40E0D0",
                                violet: "#EE82EE",
                                wheat: "#F5DEB3",
                                white: "#FFFFFF",
                                whitesmoke: "#F5F5F5",
                                yellow: "#FFFF00",
                                yellowgreen: "#9ACD32",
                            }),
                            (e.Color.fromRgb = function (t) {
                                return i.fromSource(i.sourceFromRgb(t));
                            }),
                            (e.Color.sourceFromRgb = function (t) {
                                var e = t.match(i.reRGBa);
                                if (e) {
                                    var r = (parseInt(e[1], 10) / (/%$/.test(e[1]) ? 100 : 1)) * (/%$/.test(e[1]) ? 255 : 1),
                                        n = (parseInt(e[2], 10) / (/%$/.test(e[2]) ? 100 : 1)) * (/%$/.test(e[2]) ? 255 : 1),
                                        o = (parseInt(e[3], 10) / (/%$/.test(e[3]) ? 100 : 1)) * (/%$/.test(e[3]) ? 255 : 1);
                                    return [parseInt(r, 10), parseInt(n, 10), parseInt(o, 10), e[4] ? parseFloat(e[4]) : 1];
                                }
                            }),
                            (e.Color.fromRgba = i.fromRgb),
                            (e.Color.fromHsl = function (t) {
                                return i.fromSource(i.sourceFromHsl(t));
                            }),
                            (e.Color.sourceFromHsl = function (t) {
                                var e = t.match(i.reHSLa);
                                if (e) {
                                    var n,
                                        o,
                                        s,
                                        a = (((parseFloat(e[1]) % 360) + 360) % 360) / 360,
                                        h = parseFloat(e[2]) / (/%$/.test(e[2]) ? 100 : 1),
                                        c = parseFloat(e[3]) / (/%$/.test(e[3]) ? 100 : 1);
                                    if (0 === h) n = o = s = c;
                                    else {
                                        var l = c <= 0.5 ? c * (h + 1) : c + h - c * h,
                                            u = 2 * c - l;
                                        (n = r(u, l, a + 1 / 3)), (o = r(u, l, a)), (s = r(u, l, a - 1 / 3));
                                    }
                                    return [Math.round(255 * n), Math.round(255 * o), Math.round(255 * s), e[4] ? parseFloat(e[4]) : 1];
                                }
                            }),
                            (e.Color.fromHsla = i.fromHsl),
                            (e.Color.fromHex = function (t) {
                                return i.fromSource(i.sourceFromHex(t));
                            }),
                            (e.Color.sourceFromHex = function (t) {
                                if (t.match(i.reHex)) {
                                    var e = t.slice(t.indexOf("#") + 1),
                                        r = 3 === e.length || 4 === e.length,
                                        n = 8 === e.length || 4 === e.length,
                                        o = r ? e.charAt(0) + e.charAt(0) : e.substring(0, 2),
                                        s = r ? e.charAt(1) + e.charAt(1) : e.substring(2, 4),
                                        a = r ? e.charAt(2) + e.charAt(2) : e.substring(4, 6),
                                        h = n ? (r ? e.charAt(3) + e.charAt(3) : e.substring(6, 8)) : "FF";
                                    return [parseInt(o, 16), parseInt(s, 16), parseInt(a, 16), parseFloat((parseInt(h, 16) / 255).toFixed(2))];
                                }
                            }),
                            (e.Color.fromSource = function (t) {
                                var e = new i();
                                return e.setSource(t), e;
                            }));
                  })(e),
                  (function () {
                      function t(t, e) {
                          var i,
                              r,
                              n,
                              o,
                              s = t.getAttribute("style"),
                              a = t.getAttribute("offset") || 0;
                          if (((a = (a = parseFloat(a) / (/%$/.test(a) ? 100 : 1)) < 0 ? 0 : 1 < a ? 1 : a), s)) {
                              var h = s.split(/\s*;\s*/);
                              for ("" === h[h.length - 1] && h.pop(), o = h.length; o--; ) {
                                  var c = h[o].split(/\s*:\s*/),
                                      l = c[0].trim(),
                                      u = c[1].trim();
                                  "stop-color" === l ? (i = u) : "stop-opacity" === l && (n = u);
                              }
                          }
                          return (
                              i || (i = t.getAttribute("stop-color") || "rgb(0,0,0)"),
                              n || (n = t.getAttribute("stop-opacity")),
                              (r = (i = new P.Color(i)).getAlpha()),
                              (n = isNaN(parseFloat(n)) ? 1 : parseFloat(n)),
                              (n *= r * e),
                              { offset: a, color: i.toRgb(), opacity: n }
                          );
                      }
                      var e = P.util.object.clone;
                      function i(t, e, i, r) {
                          var n, o;
                          Object.keys(e).forEach(function (t) {
                              "Infinity" === (n = e[t])
                                  ? (o = 1)
                                  : "-Infinity" === n
                                  ? (o = 0)
                                  : ((o = parseFloat(e[t], 10)),
                                    "string" == typeof n &&
                                        /^(\d+\.\d+)%|(\d+)%$/.test(n) &&
                                        ((o *= 0.01), "pixels" === r && (("x1" !== t && "x2" !== t && "r2" !== t) || (o *= i.viewBoxWidth || i.width), ("y1" !== t && "y2" !== t) || (o *= i.viewBoxHeight || i.height)))),
                                  (e[t] = o);
                          });
                      }
                      (P.Gradient = P.util.createClass({
                          offsetX: 0,
                          offsetY: 0,
                          gradientTransform: null,
                          gradientUnits: "pixels",
                          type: "linear",
                          initialize: function (t) {
                              t || (t = {}), t.coords || (t.coords = {});
                              var e,
                                  i = this;
                              Object.keys(t).forEach(function (e) {
                                  i[e] = t[e];
                              }),
                                  this.id ? (this.id += "_" + P.Object.__uid++) : (this.id = P.Object.__uid++),
                                  (e = { x1: t.coords.x1 || 0, y1: t.coords.y1 || 0, x2: t.coords.x2 || 0, y2: t.coords.y2 || 0 }),
                                  "radial" === this.type && ((e.r1 = t.coords.r1 || 0), (e.r2 = t.coords.r2 || 0)),
                                  (this.coords = e),
                                  (this.colorStops = t.colorStops.slice());
                          },
                          addColorStop: function (t) {
                              for (var e in t) {
                                  var i = new P.Color(t[e]);
                                  this.colorStops.push({ offset: parseFloat(e), color: i.toRgb(), opacity: i.getAlpha() });
                              }
                              return this;
                          },
                          toObject: function (t) {
                              var e = {
                                  type: this.type,
                                  coords: this.coords,
                                  colorStops: this.colorStops,
                                  offsetX: this.offsetX,
                                  offsetY: this.offsetY,
                                  gradientUnits: this.gradientUnits,
                                  gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform,
                              };
                              return P.util.populateWithProperties(this, e, t), e;
                          },
                          toSVG: function (t, i) {
                              var r,
                                  n,
                                  o,
                                  s,
                                  a = e(this.coords, !0),
                                  h = ((i = i || {}), e(this.colorStops, !0)),
                                  c = a.r1 > a.r2,
                                  l = this.gradientTransform ? this.gradientTransform.concat() : P.iMatrix.concat(),
                                  u = -this.offsetX,
                                  f = -this.offsetY,
                                  d = !!i.additionalTransform,
                                  g = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox";
                              if (
                                  (h.sort(function (t, e) {
                                      return t.offset - e.offset;
                                  }),
                                  "objectBoundingBox" === g ? ((u /= t.width), (f /= t.height)) : ((u += t.width / 2), (f += t.height / 2)),
                                  "path" === t.type && ((u -= t.pathOffset.x), (f -= t.pathOffset.y)),
                                  (l[4] -= u),
                                  (l[5] -= f),
                                  (s = 'id="SVGID_' + this.id + '" gradientUnits="' + g + '"'),
                                  (s += ' gradientTransform="' + (d ? i.additionalTransform + " " : "") + P.util.matrixToSVG(l) + '" '),
                                  "linear" === this.type
                                      ? (o = ["<linearGradient ", s, ' x1="', a.x1, '" y1="', a.y1, '" x2="', a.x2, '" y2="', a.y2, '">\n'])
                                      : "radial" === this.type && (o = ["<radialGradient ", s, ' cx="', c ? a.x1 : a.x2, '" cy="', c ? a.y1 : a.y2, '" r="', c ? a.r1 : a.r2, '" fx="', c ? a.x2 : a.x1, '" fy="', c ? a.y2 : a.y1, '">\n']),
                                  "radial" === this.type)
                              ) {
                                  if (c) for ((h = h.concat()).reverse(), r = 0, n = h.length; r < n; r++) h[r].offset = 1 - h[r].offset;
                                  var p = Math.min(a.r1, a.r2);
                                  if (0 < p) {
                                      var v = p / Math.max(a.r1, a.r2);
                                      for (r = 0, n = h.length; r < n; r++) h[r].offset += v * (1 - h[r].offset);
                                  }
                              }
                              for (r = 0, n = h.length; r < n; r++) {
                                  var m = h[r];
                                  o.push("<stop ", 'offset="', 100 * m.offset + "%", '" style="stop-color:', m.color, void 0 !== m.opacity ? ";stop-opacity: " + m.opacity : ";", '"/>\n');
                              }
                              return o.push("linear" === this.type ? "</linearGradient>\n" : "</radialGradient>\n"), o.join("");
                          },
                          toLive: function (t) {
                              var e,
                                  i,
                                  r,
                                  n = P.util.object.clone(this.coords);
                              if (this.type) {
                                  for (
                                      "linear" === this.type ? (e = t.createLinearGradient(n.x1, n.y1, n.x2, n.y2)) : "radial" === this.type && (e = t.createRadialGradient(n.x1, n.y1, n.r1, n.x2, n.y2, n.r2)),
                                          i = 0,
                                          r = this.colorStops.length;
                                      i < r;
                                      i++
                                  ) {
                                      var o = this.colorStops[i].color,
                                          s = this.colorStops[i].opacity,
                                          a = this.colorStops[i].offset;
                                      void 0 !== s && (o = new P.Color(o).setAlpha(s).toRgba()), e.addColorStop(a, o);
                                  }
                                  return e;
                              }
                          },
                      })),
                          P.util.object.extend(P.Gradient, {
                              fromElement: function (e, r, n, o) {
                                  var s = parseFloat(n) / (/%$/.test(n) ? 100 : 1);
                                  (s = s < 0 ? 0 : 1 < s ? 1 : s), isNaN(s) && (s = 1);
                                  var a,
                                      h,
                                      c,
                                      l,
                                      u,
                                      f,
                                      d = e.getElementsByTagName("stop"),
                                      g = "userSpaceOnUse" === e.getAttribute("gradientUnits") ? "pixels" : "percentage",
                                      p = e.getAttribute("gradientTransform") || "",
                                      v = [],
                                      m = 0,
                                      _ = 0;
                                  for (
                                      h =
                                          "linearGradient" === e.nodeName || "LINEARGRADIENT" === e.nodeName
                                              ? ((a = "linear"), { x1: (f = e).getAttribute("x1") || 0, y1: f.getAttribute("y1") || 0, x2: f.getAttribute("x2") || "100%", y2: f.getAttribute("y2") || 0 })
                                              : ((a = "radial"),
                                                {
                                                    x1: (u = e).getAttribute("fx") || u.getAttribute("cx") || "50%",
                                                    y1: u.getAttribute("fy") || u.getAttribute("cy") || "50%",
                                                    r1: 0,
                                                    x2: u.getAttribute("cx") || "50%",
                                                    y2: u.getAttribute("cy") || "50%",
                                                    r2: u.getAttribute("r") || "50%",
                                                }),
                                          c = d.length;
                                      c--;

                                  )
                                      v.push(t(d[c], s));
                                  return (
                                      (l = P.parseTransformAttribute(p)),
                                      i(0, h, o, g),
                                      "pixels" === g && ((m = -r.left), (_ = -r.top)),
                                      new P.Gradient({ id: e.getAttribute("id"), type: a, coords: h, colorStops: v, gradientUnits: g, gradientTransform: l, offsetX: m, offsetY: _ })
                                  );
                              },
                              forObject: function (t, e) {
                                  return e || (e = {}), i(0, e.coords, e.gradientUnits, { viewBoxWidth: 100, viewBoxHeight: 100 }), new P.Gradient(e);
                              },
                          });
                  })(),
                  (function () {
                      "use strict";
                      var t = P.util.toFixed;
                      P.Pattern = P.util.createClass({
                          repeat: "repeat",
                          offsetX: 0,
                          offsetY: 0,
                          crossOrigin: "",
                          patternTransform: null,
                          initialize: function (t, e) {
                              if ((t || (t = {}), (this.id = P.Object.__uid++), this.setOptions(t), !t.source || (t.source && "string" != typeof t.source))) e && e(this);
                              else if (void 0 !== P.util.getFunctionBody(t.source)) (this.source = new Function(P.util.getFunctionBody(t.source))), e && e(this);
                              else {
                                  var i = this;
                                  (this.source = P.util.createImage()),
                                      P.util.loadImage(
                                          t.source,
                                          function (t) {
                                              (i.source = t), e && e(i);
                                          },
                                          null,
                                          this.crossOrigin
                                      );
                              }
                          },
                          toObject: function (e) {
                              var i,
                                  r,
                                  n = P.Object.NUM_FRACTION_DIGITS;
                              return (
                                  "function" == typeof this.source
                                      ? (i = String(this.source))
                                      : "string" == typeof this.source.src
                                      ? (i = this.source.src)
                                      : "object" == typeof this.source && this.source.toDataURL && (i = this.source.toDataURL()),
                                  (r = {
                                      type: "pattern",
                                      source: i,
                                      repeat: this.repeat,
                                      crossOrigin: this.crossOrigin,
                                      offsetX: t(this.offsetX, n),
                                      offsetY: t(this.offsetY, n),
                                      patternTransform: this.patternTransform ? this.patternTransform.concat() : null,
                                  }),
                                  P.util.populateWithProperties(this, r, e),
                                  r
                              );
                          },
                          toSVG: function (t) {
                              var e = "function" == typeof this.source ? this.source() : this.source,
                                  i = e.width / t.width,
                                  r = e.height / t.height,
                                  n = this.offsetX / t.width,
                                  o = this.offsetY / t.height,
                                  s = "";
                              return (
                                  ("repeat-x" !== this.repeat && "no-repeat" !== this.repeat) || ((r = 1), o && (r += Math.abs(o))),
                                  ("repeat-y" !== this.repeat && "no-repeat" !== this.repeat) || ((i = 1), n && (i += Math.abs(n))),
                                  e.src ? (s = e.src) : e.toDataURL && (s = e.toDataURL()),
                                  '<pattern id="SVGID_' +
                                      this.id +
                                      '" x="' +
                                      n +
                                      '" y="' +
                                      o +
                                      '" width="' +
                                      i +
                                      '" height="' +
                                      r +
                                      '">\n<image x="0" y="0" width="' +
                                      e.width +
                                      '" height="' +
                                      e.height +
                                      '" xlink:href="' +
                                      s +
                                      '"></image>\n</pattern>\n'
                              );
                          },
                          setOptions: function (t) {
                              for (var e in t) this[e] = t[e];
                          },
                          toLive: function (t) {
                              var e = "function" == typeof this.source ? this.source() : this.source;
                              if (!e) return "";
                              if (void 0 !== e.src) {
                                  if (!e.complete) return "";
                                  if (0 === e.naturalWidth || 0 === e.naturalHeight) return "";
                              }
                              return t.createPattern(e, this.repeat);
                          },
                      });
                  })(),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.toFixed;
                      e.Shadow
                          ? e.warn("fabric.Shadow is already defined.")
                          : ((e.Shadow = e.util.createClass({
                                color: "rgb(0,0,0)",
                                blur: 0,
                                offsetX: 0,
                                offsetY: 0,
                                affectStroke: !1,
                                includeDefaultValues: !0,
                                nonScaling: !1,
                                initialize: function (t) {
                                    for (var i in ("string" == typeof t && (t = this._parseShadow(t)), t)) this[i] = t[i];
                                    this.id = e.Object.__uid++;
                                },
                                _parseShadow: function (t) {
                                    var i = t.trim(),
                                        r = e.Shadow.reOffsetsAndBlur.exec(i) || [];
                                    return { color: (i.replace(e.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)").trim(), offsetX: parseInt(r[1], 10) || 0, offsetY: parseInt(r[2], 10) || 0, blur: parseInt(r[3], 10) || 0 };
                                },
                                toString: function () {
                                    return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
                                },
                                toSVG: function (t) {
                                    var r = 40,
                                        n = 40,
                                        o = e.Object.NUM_FRACTION_DIGITS,
                                        s = e.util.rotateVector({ x: this.offsetX, y: this.offsetY }, e.util.degreesToRadians(-t.angle)),
                                        a = new e.Color(this.color);
                                    return (
                                        t.width && t.height && ((r = 100 * i((Math.abs(s.x) + this.blur) / t.width, o) + 20), (n = 100 * i((Math.abs(s.y) + this.blur) / t.height, o) + 20)),
                                        t.flipX && (s.x *= -1),
                                        t.flipY && (s.y *= -1),
                                        '<filter id="SVGID_' +
                                            this.id +
                                            '" y="-' +
                                            n +
                                            '%" height="' +
                                            (100 + 2 * n) +
                                            '%" x="-' +
                                            r +
                                            '%" width="' +
                                            (100 + 2 * r) +
                                            '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="' +
                                            i(this.blur ? this.blur / 2 : 0, o) +
                                            '"></feGaussianBlur>\n\t<feOffset dx="' +
                                            i(s.x, o) +
                                            '" dy="' +
                                            i(s.y, o) +
                                            '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="' +
                                            a.toRgb() +
                                            '" flood-opacity="' +
                                            a.getAlpha() +
                                            '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'
                                    );
                                },
                                toObject: function () {
                                    if (this.includeDefaultValues) return { color: this.color, blur: this.blur, offsetX: this.offsetX, offsetY: this.offsetY, affectStroke: this.affectStroke, nonScaling: this.nonScaling };
                                    var t = {},
                                        i = e.Shadow.prototype;
                                    return (
                                        ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function (e) {
                                            this[e] !== i[e] && (t[e] = this[e]);
                                        }, this),
                                        t
                                    );
                                },
                            })),
                            (e.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/));
                  })(e),
                  (function () {
                      "use strict";
                      if (P.StaticCanvas) P.warn("fabric.StaticCanvas is already defined.");
                      else {
                          var t = P.util.object.extend,
                              e = P.util.getElementOffset,
                              i = P.util.removeFromArray,
                              r = P.util.toFixed,
                              n = P.util.transformPoint,
                              o = P.util.invertTransform,
                              s = P.util.getNodeCanvas,
                              a = P.util.createCanvasElement,
                              h = new Error("Could not initialize `canvas` element");
                          (P.StaticCanvas = P.util.createClass(P.CommonMethods, {
                              initialize: function (t, e) {
                                  e || (e = {}), (this.renderAndResetBound = this.renderAndReset.bind(this)), (this.requestRenderAllBound = this.requestRenderAll.bind(this)), this._initStatic(t, e);
                              },
                              backgroundColor: "",
                              backgroundImage: null,
                              overlayColor: "",
                              overlayImage: null,
                              includeDefaultValues: !0,
                              stateful: !1,
                              renderOnAddRemove: !0,
                              clipTo: null,
                              controlsAboveOverlay: !1,
                              allowTouchScrolling: !1,
                              imageSmoothingEnabled: !0,
                              viewportTransform: P.iMatrix.concat(),
                              backgroundVpt: !0,
                              overlayVpt: !0,
                              onBeforeScaleRotate: function () {},
                              enableRetinaScaling: !0,
                              vptCoords: {},
                              skipOffscreen: !0,
                              clipPath: void 0,
                              _initStatic: function (t, e) {
                                  var i = this.requestRenderAllBound;
                                  (this._objects = []),
                                      this._createLowerCanvas(t),
                                      this._initOptions(e),
                                      this._setImageSmoothing(),
                                      this.interactive || this._initRetinaScaling(),
                                      e.overlayImage && this.setOverlayImage(e.overlayImage, i),
                                      e.backgroundImage && this.setBackgroundImage(e.backgroundImage, i),
                                      e.backgroundColor && this.setBackgroundColor(e.backgroundColor, i),
                                      e.overlayColor && this.setOverlayColor(e.overlayColor, i),
                                      this.calcOffset();
                              },
                              _isRetinaScaling: function () {
                                  return 1 !== P.devicePixelRatio && this.enableRetinaScaling;
                              },
                              getRetinaScaling: function () {
                                  return this._isRetinaScaling() ? P.devicePixelRatio : 1;
                              },
                              _initRetinaScaling: function () {
                                  this._isRetinaScaling() &&
                                      (this.lowerCanvasEl.setAttribute("width", this.width * P.devicePixelRatio),
                                      this.lowerCanvasEl.setAttribute("height", this.height * P.devicePixelRatio),
                                      this.contextContainer.scale(P.devicePixelRatio, P.devicePixelRatio));
                              },
                              calcOffset: function () {
                                  return (this._offset = e(this.lowerCanvasEl)), this;
                              },
                              setOverlayImage: function (t, e, i) {
                                  return this.__setBgOverlayImage("overlayImage", t, e, i);
                              },
                              setBackgroundImage: function (t, e, i) {
                                  return this.__setBgOverlayImage("backgroundImage", t, e, i);
                              },
                              setOverlayColor: function (t, e) {
                                  return this.__setBgOverlayColor("overlayColor", t, e);
                              },
                              setBackgroundColor: function (t, e) {
                                  return this.__setBgOverlayColor("backgroundColor", t, e);
                              },
                              _setImageSmoothing: function () {
                                  var t = this.getContext();
                                  (t.imageSmoothingEnabled = t.imageSmoothingEnabled || t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled || t.oImageSmoothingEnabled),
                                      (t.imageSmoothingEnabled = this.imageSmoothingEnabled);
                              },
                              __setBgOverlayImage: function (t, e, i, r) {
                                  return (
                                      "string" == typeof e
                                          ? P.util.loadImage(
                                                e,
                                                function (e) {
                                                    if (e) {
                                                        var n = new P.Image(e, r);
                                                        (this[t] = n).canvas = this;
                                                    }
                                                    i && i(e);
                                                },
                                                this,
                                                r && r.crossOrigin
                                            )
                                          : (r && e.setOptions(r), (this[t] = e) && (e.canvas = this), i && i(e)),
                                      this
                                  );
                              },
                              __setBgOverlayColor: function (t, e, i) {
                                  return (this[t] = e), this._initGradient(e, t), this._initPattern(e, t, i), this;
                              },
                              _createCanvasElement: function () {
                                  var t = a();
                                  if (!t) throw h;
                                  if ((t.style || (t.style = {}), void 0 === t.getContext)) throw h;
                                  return t;
                              },
                              _initOptions: function (t) {
                                  var e = this.lowerCanvasEl;
                                  this._setOptions(t),
                                      (this.width = this.width || parseInt(e.width, 10) || 0),
                                      (this.height = this.height || parseInt(e.height, 10) || 0),
                                      this.lowerCanvasEl.style &&
                                          ((e.width = this.width), (e.height = this.height), (e.style.width = this.width + "px"), (e.style.height = this.height + "px"), (this.viewportTransform = this.viewportTransform.slice()));
                              },
                              _createLowerCanvas: function (t) {
                                  t && t.getContext ? (this.lowerCanvasEl = t) : (this.lowerCanvasEl = P.util.getById(t) || this._createCanvasElement()),
                                      P.util.addClass(this.lowerCanvasEl, "lower-canvas"),
                                      this.interactive && this._applyCanvasStyle(this.lowerCanvasEl),
                                      (this.contextContainer = this.lowerCanvasEl.getContext("2d"));
                              },
                              getWidth: function () {
                                  return this.width;
                              },
                              getHeight: function () {
                                  return this.height;
                              },
                              setWidth: function (t, e) {
                                  return this.setDimensions({ width: t }, e);
                              },
                              setHeight: function (t, e) {
                                  return this.setDimensions({ height: t }, e);
                              },
                              setDimensions: function (t, e) {
                                  var i;
                                  for (var r in ((e = e || {}), t)) (i = t[r]), e.cssOnly || (this._setBackstoreDimension(r, t[r]), (i += "px"), (this.hasLostContext = !0)), e.backstoreOnly || this._setCssDimension(r, i);
                                  return (
                                      this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(),
                                      this._initRetinaScaling(),
                                      this._setImageSmoothing(),
                                      this.calcOffset(),
                                      e.cssOnly || this.requestRenderAll(),
                                      this
                                  );
                              },
                              _setBackstoreDimension: function (t, e) {
                                  return (this.lowerCanvasEl[t] = e), this.upperCanvasEl && (this.upperCanvasEl[t] = e), this.cacheCanvasEl && (this.cacheCanvasEl[t] = e), (this[t] = e), this;
                              },
                              _setCssDimension: function (t, e) {
                                  return (this.lowerCanvasEl.style[t] = e), this.upperCanvasEl && (this.upperCanvasEl.style[t] = e), this.wrapperEl && (this.wrapperEl.style[t] = e), this;
                              },
                              getZoom: function () {
                                  return this.viewportTransform[0];
                              },
                              setViewportTransform: function (t) {
                                  var e,
                                      i,
                                      r,
                                      n = this._activeObject;
                                  for (this.viewportTransform = t, i = 0, r = this._objects.length; i < r; i++) (e = this._objects[i]).group || e.setCoords(!1, !0);
                                  return n && "activeSelection" === n.type && n.setCoords(!1, !0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
                              },
                              zoomToPoint: function (t, e) {
                                  var i = t,
                                      r = this.viewportTransform.slice(0);
                                  (t = n(t, o(this.viewportTransform))), (r[0] = e), (r[3] = e);
                                  var s = n(t, r);
                                  return (r[4] += i.x - s.x), (r[5] += i.y - s.y), this.setViewportTransform(r);
                              },
                              setZoom: function (t) {
                                  return this.zoomToPoint(new P.Point(0, 0), t), this;
                              },
                              absolutePan: function (t) {
                                  var e = this.viewportTransform.slice(0);
                                  return (e[4] = -t.x), (e[5] = -t.y), this.setViewportTransform(e);
                              },
                              relativePan: function (t) {
                                  return this.absolutePan(new P.Point(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]));
                              },
                              getElement: function () {
                                  return this.lowerCanvasEl;
                              },
                              _onObjectAdded: function (t) {
                                  this.stateful && t.setupState(), t._set("canvas", this), t.setCoords(), this.fire("object:added", { target: t }), t.fire("added");
                              },
                              _onObjectRemoved: function (t) {
                                  this.fire("object:removed", { target: t }), t.fire("removed"), delete t.canvas;
                              },
                              clearContext: function (t) {
                                  return t.clearRect(0, 0, this.width, this.height), this;
                              },
                              getContext: function () {
                                  return this.contextContainer;
                              },
                              clear: function () {
                                  return (
                                      (this._objects.length = 0),
                                      (this.backgroundImage = null),
                                      (this.overlayImage = null),
                                      (this.backgroundColor = ""),
                                      (this.overlayColor = ""),
                                      this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), (this._iTextInstances = null), (this._hasITextHandlers = !1)),
                                      this.clearContext(this.contextContainer),
                                      this.fire("canvas:cleared"),
                                      this.renderOnAddRemove && this.requestRenderAll(),
                                      this
                                  );
                              },
                              renderAll: function () {
                                  var t = this.contextContainer;
                                  return this.renderCanvas(t, this._objects), this;
                              },
                              renderAndReset: function () {
                                  (this.isRendering = 0), this.renderAll();
                              },
                              requestRenderAll: function () {
                                  return this.isRendering || (this.isRendering = P.util.requestAnimFrame(this.renderAndResetBound)), this;
                              },
                              calcViewportBoundaries: function () {
                                  var t = {},
                                      e = this.width,
                                      i = this.height,
                                      r = o(this.viewportTransform);
                                  return (t.tl = n({ x: 0, y: 0 }, r)), (t.br = n({ x: e, y: i }, r)), (t.tr = new P.Point(t.br.x, t.tl.y)), (t.bl = new P.Point(t.tl.x, t.br.y)), (this.vptCoords = t);
                              },
                              cancelRequestedRender: function () {
                                  this.isRendering && (P.util.cancelAnimFrame(this.isRendering), (this.isRendering = 0));
                              },
                              renderCanvas: function (t, e) {
                                  var i = this.viewportTransform,
                                      r = this.clipPath;
                                  this.cancelRequestedRender(),
                                      this.calcViewportBoundaries(),
                                      this.clearContext(t),
                                      this.fire("before:render", { ctx: t }),
                                      this.clipTo && P.util.clipContext(this, t),
                                      this._renderBackground(t),
                                      t.save(),
                                      t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                                      this._renderObjects(t, e),
                                      t.restore(),
                                      !this.controlsAboveOverlay && this.interactive && this.drawControls(t),
                                      this.clipTo && t.restore(),
                                      r && ((r.canvas = this), r.shouldCache(), (r._transformDone = !0), r.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(t)),
                                      this._renderOverlay(t),
                                      this.controlsAboveOverlay && this.interactive && this.drawControls(t),
                                      this.fire("after:render", { ctx: t });
                              },
                              drawClipPathOnCanvas: function (t) {
                                  var e = this.viewportTransform,
                                      i = this.clipPath;
                                  t.save(),
                                      t.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                                      (t.globalCompositeOperation = "destination-in"),
                                      i.transform(t),
                                      t.scale(1 / i.zoomX, 1 / i.zoomY),
                                      t.drawImage(i._cacheCanvas, -i.cacheTranslationX, -i.cacheTranslationY),
                                      t.restore();
                              },
                              _renderObjects: function (t, e) {
                                  var i, r;
                                  for (i = 0, r = e.length; i < r; ++i) e[i] && e[i].render(t);
                              },
                              _renderBackgroundOrOverlay: function (t, e) {
                                  var i = this[e + "Color"],
                                      r = this[e + "Image"],
                                      n = this.viewportTransform,
                                      o = this[e + "Vpt"];
                                  if (i || r) {
                                      if (i) {
                                          t.save(),
                                              t.beginPath(),
                                              t.moveTo(0, 0),
                                              t.lineTo(this.width, 0),
                                              t.lineTo(this.width, this.height),
                                              t.lineTo(0, this.height),
                                              t.closePath(),
                                              (t.fillStyle = i.toLive ? i.toLive(t, this) : i),
                                              o && t.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
                                              t.transform(1, 0, 0, 1, i.offsetX || 0, i.offsetY || 0);
                                          var s = i.gradientTransform || i.patternTransform;
                                          s && t.transform(s[0], s[1], s[2], s[3], s[4], s[5]), t.fill(), t.restore();
                                      }
                                      r && (t.save(), o && t.transform(n[0], n[1], n[2], n[3], n[4], n[5]), r.render(t), t.restore());
                                  }
                              },
                              _renderBackground: function (t) {
                                  this._renderBackgroundOrOverlay(t, "background");
                              },
                              _renderOverlay: function (t) {
                                  this._renderBackgroundOrOverlay(t, "overlay");
                              },
                              getCenter: function () {
                                  return { top: this.height / 2, left: this.width / 2 };
                              },
                              centerObjectH: function (t) {
                                  return this._centerObject(t, new P.Point(this.getCenter().left, t.getCenterPoint().y));
                              },
                              centerObjectV: function (t) {
                                  return this._centerObject(t, new P.Point(t.getCenterPoint().x, this.getCenter().top));
                              },
                              centerObject: function (t) {
                                  var e = this.getCenter();
                                  return this._centerObject(t, new P.Point(e.left, e.top));
                              },
                              viewportCenterObject: function (t) {
                                  var e = this.getVpCenter();
                                  return this._centerObject(t, e);
                              },
                              viewportCenterObjectH: function (t) {
                                  var e = this.getVpCenter();
                                  return this._centerObject(t, new P.Point(e.x, t.getCenterPoint().y)), this;
                              },
                              viewportCenterObjectV: function (t) {
                                  var e = this.getVpCenter();
                                  return this._centerObject(t, new P.Point(t.getCenterPoint().x, e.y));
                              },
                              getVpCenter: function () {
                                  var t = this.getCenter(),
                                      e = o(this.viewportTransform);
                                  return n({ x: t.left, y: t.top }, e);
                              },
                              _centerObject: function (t, e) {
                                  return t.setPositionByOrigin(e, "center", "center"), t.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
                              },
                              toDatalessJSON: function (t) {
                                  return this.toDatalessObject(t);
                              },
                              toObject: function (t) {
                                  return this._toObjectMethod("toObject", t);
                              },
                              toDatalessObject: function (t) {
                                  return this._toObjectMethod("toDatalessObject", t);
                              },
                              _toObjectMethod: function (e, i) {
                                  var r = this.clipPath,
                                      n = { version: P.version, objects: this._toObjects(e, i) };
                                  return r && (n.clipPath = this._toObject(this.clipPath, e, i)), t(n, this.__serializeBgOverlay(e, i)), P.util.populateWithProperties(this, n, i), n;
                              },
                              _toObjects: function (t, e) {
                                  return this._objects
                                      .filter(function (t) {
                                          return !t.excludeFromExport;
                                      })
                                      .map(function (i) {
                                          return this._toObject(i, t, e);
                                      }, this);
                              },
                              _toObject: function (t, e, i) {
                                  var r;
                                  this.includeDefaultValues || ((r = t.includeDefaultValues), (t.includeDefaultValues = !1));
                                  var n = t[e](i);
                                  return this.includeDefaultValues || (t.includeDefaultValues = r), n;
                              },
                              __serializeBgOverlay: function (t, e) {
                                  var i = {},
                                      r = this.backgroundImage,
                                      n = this.overlayImage;
                                  return (
                                      this.backgroundColor && (i.background = this.backgroundColor.toObject ? this.backgroundColor.toObject(e) : this.backgroundColor),
                                      this.overlayColor && (i.overlay = this.overlayColor.toObject ? this.overlayColor.toObject(e) : this.overlayColor),
                                      r && !r.excludeFromExport && (i.backgroundImage = this._toObject(r, t, e)),
                                      n && !n.excludeFromExport && (i.overlayImage = this._toObject(n, t, e)),
                                      i
                                  );
                              },
                              svgViewportTransformation: !0,
                              toSVG: function (t, e) {
                                  t || (t = {}), (t.reviver = e);
                                  var i = [];
                                  return (
                                      this._setSVGPreamble(i, t),
                                      this._setSVGHeader(i, t),
                                      this.clipPath && i.push('<g clip-path="url(#' + this.clipPath.clipPathId + ')" >\n'),
                                      this._setSVGBgOverlayColor(i, "background"),
                                      this._setSVGBgOverlayImage(i, "backgroundImage", e),
                                      this._setSVGObjects(i, e),
                                      this.clipPath && i.push("</g>\n"),
                                      this._setSVGBgOverlayColor(i, "overlay"),
                                      this._setSVGBgOverlayImage(i, "overlayImage", e),
                                      i.push("</svg>"),
                                      i.join("")
                                  );
                              },
                              _setSVGPreamble: function (t, e) {
                                  e.suppressPreamble ||
                                      t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
                              },
                              _setSVGHeader: function (t, e) {
                                  var i,
                                      n = e.width || this.width,
                                      o = e.height || this.height,
                                      s = 'viewBox="0 0 ' + this.width + " " + this.height + '" ',
                                      a = P.Object.NUM_FRACTION_DIGITS;
                                  e.viewBox
                                      ? (s = 'viewBox="' + e.viewBox.x + " " + e.viewBox.y + " " + e.viewBox.width + " " + e.viewBox.height + '" ')
                                      : this.svgViewportTransformation &&
                                        ((i = this.viewportTransform), (s = 'viewBox="' + r(-i[4] / i[0], a) + " " + r(-i[5] / i[3], a) + " " + r(this.width / i[0], a) + " " + r(this.height / i[3], a) + '" ')),
                                      t.push(
                                          "<svg ",
                                          'xmlns="http://www.w3.org/2000/svg" ',
                                          'xmlns:xlink="http://www.w3.org/1999/xlink" ',
                                          'version="1.1" ',
                                          'width="',
                                          n,
                                          '" ',
                                          'height="',
                                          o,
                                          '" ',
                                          s,
                                          'xml:space="preserve">\n',
                                          "<desc>Created with Fabric.js ",
                                          P.version,
                                          "</desc>\n",
                                          "<defs>\n",
                                          this.createSVGFontFacesMarkup(),
                                          this.createSVGRefElementsMarkup(),
                                          this.createSVGClipPathMarkup(e),
                                          "</defs>\n"
                                      );
                              },
                              createSVGClipPathMarkup: function (t) {
                                  var e = this.clipPath;
                                  return e ? ((e.clipPathId = "CLIPPATH_" + P.Object.__uid++), '<clipPath id="' + e.clipPathId + '" >\n' + this.clipPath.toClipPathSVG(t.reviver) + "</clipPath>\n") : "";
                              },
                              createSVGRefElementsMarkup: function () {
                                  var t = this;
                                  return ["background", "overlay"]
                                      .map(function (e) {
                                          var i = t[e + "Color"];
                                          if (i && i.toLive) {
                                              var r = t[e + "Vpt"],
                                                  n = t.viewportTransform,
                                                  o = { width: t.width / (r ? n[0] : 1), height: t.height / (r ? n[3] : 1) };
                                              return i.toSVG(o, { additionalTransform: r ? P.util.matrixToSVG(n) : "" });
                                          }
                                      })
                                      .join("");
                              },
                              createSVGFontFacesMarkup: function () {
                                  var t,
                                      e,
                                      i,
                                      r,
                                      n,
                                      o,
                                      s,
                                      a,
                                      h = "",
                                      c = {},
                                      l = P.fontPaths,
                                      u = this._objects;
                                  for (s = 0, a = u.length; s < a; s++)
                                      if (((e = (t = u[s]).fontFamily), -1 !== t.type.indexOf("text") && !c[e] && l[e] && ((c[e] = !0), t.styles)))
                                          for (n in (i = t.styles)) for (o in (r = i[n])) !c[(e = r[o].fontFamily)] && l[e] && (c[e] = !0);
                                  for (var f in c) h += ["\t\t@font-face {\n", "\t\t\tfont-family: '", f, "';\n", "\t\t\tsrc: url('", l[f], "');\n", "\t\t}\n"].join("");
                                  return h && (h = ['\t<style type="text/css">', "<![CDATA[\n", h, "]]>", "</style>\n"].join("")), h;
                              },
                              _setSVGObjects: function (t, e) {
                                  var i,
                                      r,
                                      n,
                                      o = this._objects;
                                  for (r = 0, n = o.length; r < n; r++) (i = o[r]).excludeFromExport || this._setSVGObject(t, i, e);
                              },
                              _setSVGObject: function (t, e, i) {
                                  t.push(e.toSVG(i));
                              },
                              _setSVGBgOverlayImage: function (t, e, i) {
                                  this[e] && !this[e].excludeFromExport && this[e].toSVG && t.push(this[e].toSVG(i));
                              },
                              _setSVGBgOverlayColor: function (t, e) {
                                  var i = this[e + "Color"],
                                      r = this.viewportTransform,
                                      n = this.width,
                                      o = this.height;
                                  if (i)
                                      if (i.toLive) {
                                          var s = i.repeat,
                                              a = P.util.invertTransform(r),
                                              h = this[e + "Vpt"] ? P.util.matrixToSVG(a) : "";
                                          t.push(
                                              '<rect transform="' + h + " translate(",
                                              n / 2,
                                              ",",
                                              o / 2,
                                              ')"',
                                              ' x="',
                                              i.offsetX - n / 2,
                                              '" y="',
                                              i.offsetY - o / 2,
                                              '" ',
                                              'width="',
                                              "repeat-y" === s || "no-repeat" === s ? i.source.width : n,
                                              '" height="',
                                              "repeat-x" === s || "no-repeat" === s ? i.source.height : o,
                                              '" fill="url(#SVGID_' + i.id + ')"',
                                              "></rect>\n"
                                          );
                                      } else t.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', i, '"', "></rect>\n");
                              },
                              sendToBack: function (t) {
                                  if (!t) return this;
                                  var e,
                                      r,
                                      n,
                                      o = this._activeObject;
                                  if (t === o && "activeSelection" === t.type) for (e = (n = o._objects).length; e--; ) (r = n[e]), i(this._objects, r), this._objects.unshift(r);
                                  else i(this._objects, t), this._objects.unshift(t);
                                  return this.renderOnAddRemove && this.requestRenderAll(), this;
                              },
                              bringToFront: function (t) {
                                  if (!t) return this;
                                  var e,
                                      r,
                                      n,
                                      o = this._activeObject;
                                  if (t === o && "activeSelection" === t.type) for (n = o._objects, e = 0; e < n.length; e++) (r = n[e]), i(this._objects, r), this._objects.push(r);
                                  else i(this._objects, t), this._objects.push(t);
                                  return this.renderOnAddRemove && this.requestRenderAll(), this;
                              },
                              sendBackwards: function (t, e) {
                                  if (!t) return this;
                                  var r,
                                      n,
                                      o,
                                      s,
                                      a,
                                      h = this._activeObject,
                                      c = 0;
                                  if (t === h && "activeSelection" === t.type)
                                      for (a = h._objects, r = 0; r < a.length; r++) (n = a[r]), 0 + c < (o = this._objects.indexOf(n)) && ((s = o - 1), i(this._objects, n), this._objects.splice(s, 0, n)), c++;
                                  else 0 !== (o = this._objects.indexOf(t)) && ((s = this._findNewLowerIndex(t, o, e)), i(this._objects, t), this._objects.splice(s, 0, t));
                                  return this.renderOnAddRemove && this.requestRenderAll(), this;
                              },
                              _findNewLowerIndex: function (t, e, i) {
                                  var r, n;
                                  if (i) {
                                      for (n = (r = e) - 1; 0 <= n; --n)
                                          if (t.intersectsWithObject(this._objects[n]) || t.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(t)) {
                                              r = n;
                                              break;
                                          }
                                  } else r = e - 1;
                                  return r;
                              },
                              bringForward: function (t, e) {
                                  if (!t) return this;
                                  var r,
                                      n,
                                      o,
                                      s,
                                      a,
                                      h = this._activeObject,
                                      c = 0;
                                  if (t === h && "activeSelection" === t.type)
                                      for (r = (a = h._objects).length; r--; ) (n = a[r]), (o = this._objects.indexOf(n)) < this._objects.length - 1 - c && ((s = o + 1), i(this._objects, n), this._objects.splice(s, 0, n)), c++;
                                  else (o = this._objects.indexOf(t)) !== this._objects.length - 1 && ((s = this._findNewUpperIndex(t, o, e)), i(this._objects, t), this._objects.splice(s, 0, t));
                                  return this.renderOnAddRemove && this.requestRenderAll(), this;
                              },
                              _findNewUpperIndex: function (t, e, i) {
                                  var r, n, o;
                                  if (i) {
                                      for (n = (r = e) + 1, o = this._objects.length; n < o; ++n)
                                          if (t.intersectsWithObject(this._objects[n]) || t.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(t)) {
                                              r = n;
                                              break;
                                          }
                                  } else r = e + 1;
                                  return r;
                              },
                              moveTo: function (t, e) {
                                  return i(this._objects, t), this._objects.splice(e, 0, t), this.renderOnAddRemove && this.requestRenderAll();
                              },
                              dispose: function () {
                                  return (
                                      this.isRendering && (P.util.cancelAnimFrame(this.isRendering), (this.isRendering = 0)),
                                      this.forEachObject(function (t) {
                                          t.dispose && t.dispose();
                                      }),
                                      (this._objects = []),
                                      this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(),
                                      (this.backgroundImage = null),
                                      this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(),
                                      (this.overlayImage = null),
                                      (this._iTextInstances = null),
                                      (this.contextContainer = null),
                                      P.util.cleanUpJsdomNode(this.lowerCanvasEl),
                                      (this.lowerCanvasEl = void 0),
                                      this
                                  );
                              },
                              toString: function () {
                                  return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
                              },
                          })),
                              t(P.StaticCanvas.prototype, P.Observable),
                              t(P.StaticCanvas.prototype, P.Collection),
                              t(P.StaticCanvas.prototype, P.DataURLExporter),
                              t(P.StaticCanvas, {
                                  EMPTY_JSON: '{"objects": [], "background": "white"}',
                                  supports: function (t) {
                                      var e = a();
                                      if (!e || !e.getContext) return null;
                                      var i = e.getContext("2d");
                                      if (!i) return null;
                                      switch (t) {
                                          case "setLineDash":
                                              return void 0 !== i.setLineDash;
                                          default:
                                              return null;
                                      }
                                  },
                              }),
                              (P.StaticCanvas.prototype.toJSON = P.StaticCanvas.prototype.toObject),
                              P.isLikelyNode &&
                                  ((P.StaticCanvas.prototype.createPNGStream = function () {
                                      var t = s(this.lowerCanvasEl);
                                      return t && t.createPNGStream();
                                  }),
                                  (P.StaticCanvas.prototype.createJPEGStream = function (t) {
                                      var e = s(this.lowerCanvasEl);
                                      return e && e.createJPEGStream(t);
                                  }));
                      }
                  })(),
                  (P.BaseBrush = P.util.createClass({
                      color: "rgb(0, 0, 0)",
                      width: 1,
                      shadow: null,
                      strokeLineCap: "round",
                      strokeLineJoin: "round",
                      strokeMiterLimit: 10,
                      strokeDashArray: null,
                      setShadow: function (t) {
                          return (this.shadow = new P.Shadow(t)), this;
                      },
                      _setBrushStyles: function () {
                          var t = this.canvas.contextTop;
                          (t.strokeStyle = this.color),
                              (t.lineWidth = this.width),
                              (t.lineCap = this.strokeLineCap),
                              (t.miterLimit = this.strokeMiterLimit),
                              (t.lineJoin = this.strokeLineJoin),
                              P.StaticCanvas.supports("setLineDash") && t.setLineDash(this.strokeDashArray || []);
                      },
                      _saveAndTransform: function (t) {
                          var e = this.canvas.viewportTransform;
                          t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                      },
                      _setShadow: function () {
                          if (this.shadow) {
                              var t = this.canvas.contextTop,
                                  e = this.canvas.getZoom();
                              (t.shadowColor = this.shadow.color), (t.shadowBlur = this.shadow.blur * e), (t.shadowOffsetX = this.shadow.offsetX * e), (t.shadowOffsetY = this.shadow.offsetY * e);
                          }
                      },
                      needsFullRender: function () {
                          return new P.Color(this.color).getAlpha() < 1 || !!this.shadow;
                      },
                      _resetShadow: function () {
                          var t = this.canvas.contextTop;
                          (t.shadowColor = ""), (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0);
                      },
                  })),
                  (P.PencilBrush = P.util.createClass(P.BaseBrush, {
                      decimate: 0.4,
                      initialize: function (t) {
                          (this.canvas = t), (this._points = []);
                      },
                      _drawSegment: function (t, e, i) {
                          var r = e.midPointFrom(i);
                          return t.quadraticCurveTo(e.x, e.y, r.x, r.y), r;
                      },
                      onMouseDown: function (t, e) {
                          this.canvas._isMainEvent(e.e) && (this._prepareForDrawing(t), this._captureDrawingPath(t), this._render());
                      },
                      onMouseMove: function (t, e) {
                          if (this.canvas._isMainEvent(e.e) && this._captureDrawingPath(t) && 1 < this._points.length)
                              if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render();
                              else {
                                  var i = this._points,
                                      r = i.length,
                                      n = this.canvas.contextTop;
                                  this._saveAndTransform(n), this.oldEnd && (n.beginPath(), n.moveTo(this.oldEnd.x, this.oldEnd.y)), (this.oldEnd = this._drawSegment(n, i[r - 2], i[r - 1], !0)), n.stroke(), n.restore();
                              }
                      },
                      onMouseUp: function (t) {
                          return !this.canvas._isMainEvent(t.e) || ((this.oldEnd = void 0), this._finalizeAndAddPath(), !1);
                      },
                      _prepareForDrawing: function (t) {
                          var e = new P.Point(t.x, t.y);
                          this._reset(), this._addPoint(e), this.canvas.contextTop.moveTo(e.x, e.y);
                      },
                      _addPoint: function (t) {
                          return !((1 < this._points.length && t.eq(this._points[this._points.length - 1])) || (this._points.push(t), 0));
                      },
                      _reset: function () {
                          (this._points = []), this._setBrushStyles(), this._setShadow();
                      },
                      _captureDrawingPath: function (t) {
                          var e = new P.Point(t.x, t.y);
                          return this._addPoint(e);
                      },
                      _render: function () {
                          var t,
                              e,
                              i = this.canvas.contextTop,
                              r = this._points[0],
                              n = this._points[1];
                          if ((this._saveAndTransform(i), i.beginPath(), 2 === this._points.length && r.x === n.x && r.y === n.y)) {
                              var o = this.width / 1e3;
                              (r = new P.Point(r.x, r.y)), (n = new P.Point(n.x, n.y)), (r.x -= o), (n.x += o);
                          }
                          for (i.moveTo(r.x, r.y), t = 1, e = this._points.length; t < e; t++) this._drawSegment(i, r, n), (r = this._points[t]), (n = this._points[t + 1]);
                          i.lineTo(r.x, r.y), i.stroke(), i.restore();
                      },
                      convertPointsToSVGPath: function (t) {
                          var e,
                              i = [],
                              r = this.width / 1e3,
                              n = new P.Point(t[0].x, t[0].y),
                              o = new P.Point(t[1].x, t[1].y),
                              s = t.length,
                              a = 1,
                              h = 0,
                              c = 2 < s;
                          for (c && ((a = t[2].x < o.x ? -1 : t[2].x === o.x ? 0 : 1), (h = t[2].y < o.y ? -1 : t[2].y === o.y ? 0 : 1)), i.push("M ", n.x - a * r, " ", n.y - h * r, " "), e = 1; e < s; e++) {
                              if (!n.eq(o)) {
                                  var l = n.midPointFrom(o);
                                  i.push("Q ", n.x, " ", n.y, " ", l.x, " ", l.y, " ");
                              }
                              (n = t[e]), e + 1 < t.length && (o = t[e + 1]);
                          }
                          return c && ((a = n.x > t[e - 2].x ? 1 : n.x === t[e - 2].x ? 0 : -1), (h = n.y > t[e - 2].y ? 1 : n.y === t[e - 2].y ? 0 : -1)), i.push("L ", n.x + a * r, " ", n.y + h * r), i;
                      },
                      createPath: function (t) {
                          var e = new P.Path(t, {
                              fill: null,
                              stroke: this.color,
                              strokeWidth: this.width,
                              strokeLineCap: this.strokeLineCap,
                              strokeMiterLimit: this.strokeMiterLimit,
                              strokeLineJoin: this.strokeLineJoin,
                              strokeDashArray: this.strokeDashArray,
                          });
                          return this.shadow && ((this.shadow.affectStroke = !0), e.setShadow(this.shadow)), e;
                      },
                      decimatePoints: function (t, e) {
                          if (t.length <= 2) return t;
                          var i,
                              r = this.canvas.getZoom(),
                              n = Math.pow(e / r, 2),
                              o = t.length - 1,
                              s = t[0],
                              a = [s];
                          for (i = 1; i < o; i++) n <= Math.pow(s.x - t[i].x, 2) + Math.pow(s.y - t[i].y, 2) && ((s = t[i]), a.push(s));
                          return 1 === a.length && a.push(new P.Point(a[0].x, a[0].y)), a;
                      },
                      _finalizeAndAddPath: function () {
                          this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
                          var t = this.convertPointsToSVGPath(this._points).join("");
                          if ("M 0 0 Q 0 0 0 0 L 0 0" !== t) {
                              var e = this.createPath(t);
                              this.canvas.clearContext(this.canvas.contextTop), this.canvas.add(e), this.canvas.requestRenderAll(), e.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: e });
                          } else this.canvas.requestRenderAll();
                      },
                  })),
                  (P.CircleBrush = P.util.createClass(P.BaseBrush, {
                      width: 10,
                      initialize: function (t) {
                          (this.canvas = t), (this.points = []);
                      },
                      drawDot: function (t) {
                          var e = this.addPoint(t),
                              i = this.canvas.contextTop;
                          this._saveAndTransform(i), this.dot(i, e), i.restore();
                      },
                      dot: function (t, e) {
                          (t.fillStyle = e.fill), t.beginPath(), t.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1), t.closePath(), t.fill();
                      },
                      onMouseDown: function (t) {
                          (this.points.length = 0), this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(t);
                      },
                      _render: function () {
                          var t,
                              e,
                              i = this.canvas.contextTop,
                              r = this.points;
                          for (this._saveAndTransform(i), t = 0, e = r.length; t < e; t++) this.dot(i, r[t]);
                          i.restore();
                      },
                      onMouseMove: function (t) {
                          this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(t), this._render()) : this.drawDot(t);
                      },
                      onMouseUp: function () {
                          var t,
                              e,
                              i = this.canvas.renderOnAddRemove;
                          this.canvas.renderOnAddRemove = !1;
                          var r = [];
                          for (t = 0, e = this.points.length; t < e; t++) {
                              var n = this.points[t],
                                  o = new P.Circle({ radius: n.radius, left: n.x, top: n.y, originX: "center", originY: "center", fill: n.fill });
                              this.shadow && o.setShadow(this.shadow), r.push(o);
                          }
                          var s = new P.Group(r);
                          (s.canvas = this.canvas),
                              this.canvas.add(s),
                              this.canvas.fire("path:created", { path: s }),
                              this.canvas.clearContext(this.canvas.contextTop),
                              this._resetShadow(),
                              (this.canvas.renderOnAddRemove = i),
                              this.canvas.requestRenderAll();
                      },
                      addPoint: function (t) {
                          var e = new P.Point(t.x, t.y),
                              i = P.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2,
                              r = new P.Color(this.color).setAlpha(P.util.getRandomInt(0, 100) / 100).toRgba();
                          return (e.radius = i), (e.fill = r), this.points.push(e), e;
                      },
                  })),
                  (P.SprayBrush = P.util.createClass(P.BaseBrush, {
                      width: 10,
                      density: 20,
                      dotWidth: 1,
                      dotWidthVariance: 1,
                      randomOpacity: !1,
                      optimizeOverlapping: !0,
                      initialize: function (t) {
                          (this.canvas = t), (this.sprayChunks = []);
                      },
                      onMouseDown: function (t) {
                          (this.sprayChunks.length = 0), this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(t), this.render(this.sprayChunkPoints);
                      },
                      onMouseMove: function (t) {
                          this.addSprayChunk(t), this.render(this.sprayChunkPoints);
                      },
                      onMouseUp: function () {
                          var t = this.canvas.renderOnAddRemove;
                          this.canvas.renderOnAddRemove = !1;
                          for (var e = [], i = 0, r = this.sprayChunks.length; i < r; i++)
                              for (var n = this.sprayChunks[i], o = 0, s = n.length; o < s; o++) {
                                  var a = new P.Rect({ width: n[o].width, height: n[o].width, left: n[o].x + 1, top: n[o].y + 1, originX: "center", originY: "center", fill: this.color });
                                  e.push(a);
                              }
                          this.optimizeOverlapping && (e = this._getOptimizedRects(e));
                          var h = new P.Group(e);
                          this.shadow && h.setShadow(this.shadow),
                              this.canvas.add(h),
                              this.canvas.fire("path:created", { path: h }),
                              this.canvas.clearContext(this.canvas.contextTop),
                              this._resetShadow(),
                              (this.canvas.renderOnAddRemove = t),
                              this.canvas.requestRenderAll();
                      },
                      _getOptimizedRects: function (t) {
                          var e,
                              i,
                              r,
                              n = {};
                          for (i = 0, r = t.length; i < r; i++) n[(e = t[i].left + "" + t[i].top)] || (n[e] = t[i]);
                          var o = [];
                          for (e in n) o.push(n[e]);
                          return o;
                      },
                      render: function (t) {
                          var e,
                              i,
                              r = this.canvas.contextTop;
                          for (r.fillStyle = this.color, this._saveAndTransform(r), e = 0, i = t.length; e < i; e++) {
                              var n = t[e];
                              void 0 !== n.opacity && (r.globalAlpha = n.opacity), r.fillRect(n.x, n.y, n.width, n.width);
                          }
                          r.restore();
                      },
                      _render: function () {
                          var t,
                              e,
                              i = this.canvas.contextTop;
                          for (i.fillStyle = this.color, this._saveAndTransform(i), t = 0, e = this.sprayChunks.length; t < e; t++) this.render(this.sprayChunks[t]);
                          i.restore();
                      },
                      addSprayChunk: function (t) {
                          this.sprayChunkPoints = [];
                          var e,
                              i,
                              r,
                              n,
                              o = this.width / 2;
                          for (n = 0; n < this.density; n++) {
                              (e = P.util.getRandomInt(t.x - o, t.x + o)),
                                  (i = P.util.getRandomInt(t.y - o, t.y + o)),
                                  (r = this.dotWidthVariance ? P.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth);
                              var s = new P.Point(e, i);
                              (s.width = r), this.randomOpacity && (s.opacity = P.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(s);
                          }
                          this.sprayChunks.push(this.sprayChunkPoints);
                      },
                  })),
                  (P.PatternBrush = P.util.createClass(P.PencilBrush, {
                      getPatternSrc: function () {
                          var t = P.util.createCanvasElement(),
                              e = t.getContext("2d");
                          return (t.width = t.height = 25), (e.fillStyle = this.color), e.beginPath(), e.arc(10, 10, 10, 0, 2 * Math.PI, !1), e.closePath(), e.fill(), t;
                      },
                      getPatternSrcFunction: function () {
                          return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
                      },
                      getPattern: function () {
                          return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat");
                      },
                      _setBrushStyles: function () {
                          this.callSuper("_setBrushStyles"), (this.canvas.contextTop.strokeStyle = this.getPattern());
                      },
                      createPath: function (t) {
                          var e = this.callSuper("createPath", t),
                              i = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);
                          return (e.stroke = new P.Pattern({ source: this.source || this.getPatternSrcFunction(), offsetX: -i.x, offsetY: -i.y })), e;
                      },
                  })),
                  (function () {
                      var t = P.util.getPointer,
                          e = P.util.degreesToRadians,
                          i = P.util.radiansToDegrees,
                          r = Math.atan2,
                          n = Math.abs,
                          o = P.StaticCanvas.supports("setLineDash");
                      for (var s in ((P.Canvas = P.util.createClass(P.StaticCanvas, {
                          initialize: function (t, e) {
                              e || (e = {}),
                                  (this.renderAndResetBound = this.renderAndReset.bind(this)),
                                  (this.requestRenderAllBound = this.requestRenderAll.bind(this)),
                                  this._initStatic(t, e),
                                  this._initInteractive(),
                                  this._createCacheCanvas();
                          },
                          uniScaleTransform: !1,
                          uniScaleKey: "shiftKey",
                          centeredScaling: !1,
                          centeredRotation: !1,
                          centeredKey: "altKey",
                          altActionKey: "shiftKey",
                          interactive: !0,
                          selection: !0,
                          selectionKey: "shiftKey",
                          altSelectionKey: null,
                          selectionColor: "rgba(100, 100, 255, 0.3)",
                          selectionDashArray: [],
                          selectionBorderColor: "rgba(255, 255, 255, 0.3)",
                          selectionLineWidth: 1,
                          selectionFullyContained: !1,
                          hoverCursor: "move",
                          moveCursor: "move",
                          defaultCursor: "default",
                          freeDrawingCursor: "crosshair",
                          rotationCursor: "crosshair",
                          notAllowedCursor: "not-allowed",
                          containerClass: "canvas-container",
                          perPixelTargetFind: !1,
                          targetFindTolerance: 0,
                          skipTargetFind: !1,
                          isDrawingMode: !1,
                          preserveObjectStacking: !1,
                          snapAngle: 0,
                          snapThreshold: null,
                          stopContextMenu: !1,
                          fireRightClick: !1,
                          fireMiddleClick: !1,
                          _initInteractive: function () {
                              (this._currentTransform = null),
                                  (this._groupSelector = null),
                                  this._initWrapperElement(),
                                  this._createUpperCanvas(),
                                  this._initEventListeners(),
                                  this._initRetinaScaling(),
                                  (this.freeDrawingBrush = P.PencilBrush && new P.PencilBrush(this)),
                                  this.calcOffset();
                          },
                          _chooseObjectsToRender: function () {
                              var t,
                                  e,
                                  i,
                                  r = this.getActiveObjects();
                              if (0 < r.length && !this.preserveObjectStacking) {
                                  (e = []), (i = []);
                                  for (var n = 0, o = this._objects.length; n < o; n++) (t = this._objects[n]), -1 === r.indexOf(t) ? e.push(t) : i.push(t);
                                  1 < r.length && (this._activeObject._objects = i), e.push.apply(e, i);
                              } else e = this._objects;
                              return e;
                          },
                          renderAll: function () {
                              !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), (this.contextTopDirty = !1)), this.hasLostContext && this.renderTopLayer(this.contextTop);
                              var t = this.contextContainer;
                              return this.renderCanvas(t, this._chooseObjectsToRender()), this;
                          },
                          renderTopLayer: function (t) {
                              t.save(),
                                  this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), (this.contextTopDirty = !0)),
                                  this.selection && this._groupSelector && (this._drawSelection(t), (this.contextTopDirty = !0)),
                                  t.restore();
                          },
                          renderTop: function () {
                              var t = this.contextTop;
                              return this.clearContext(t), this.renderTopLayer(t), this.fire("after:render"), this;
                          },
                          _resetCurrentTransform: function () {
                              var t = this._currentTransform;
                              t.target.set({ scaleX: t.original.scaleX, scaleY: t.original.scaleY, skewX: t.original.skewX, skewY: t.original.skewY, left: t.original.left, top: t.original.top }),
                                  this._shouldCenterTransform(t.target)
                                      ? ("center" !== t.originX && ("right" === t.originX ? (t.mouseXSign = -1) : (t.mouseXSign = 1)),
                                        "center" !== t.originY && ("bottom" === t.originY ? (t.mouseYSign = -1) : (t.mouseYSign = 1)),
                                        (t.originX = "center"),
                                        (t.originY = "center"))
                                      : ((t.originX = t.original.originX), (t.originY = t.original.originY));
                          },
                          containsPoint: function (t, e, i) {
                              var r,
                                  n = i || this.getPointer(t, !0);
                              return (r = e.group && e.group === this._activeObject && "activeSelection" === e.group.type ? this._normalizePointer(e.group, n) : { x: n.x, y: n.y }), e.containsPoint(r) || e._findTargetCorner(n);
                          },
                          _normalizePointer: function (t, e) {
                              var i = t.calcTransformMatrix(),
                                  r = P.util.invertTransform(i),
                                  n = this.restorePointerVpt(e);
                              return P.util.transformPoint(n, r);
                          },
                          isTargetTransparent: function (t, e, i) {
                              if (t.shouldCache() && t._cacheCanvas && t !== this._activeObject) {
                                  var r = this._normalizePointer(t, { x: e, y: i }),
                                      n = Math.max(t.cacheTranslationX + r.x * t.zoomX, 0),
                                      o = Math.max(t.cacheTranslationY + r.y * t.zoomY, 0);
                                  return P.util.isTransparent(t._cacheContext, Math.round(n), Math.round(o), this.targetFindTolerance);
                              }
                              var s = this.contextCache,
                                  a = t.selectionBackgroundColor,
                                  h = this.viewportTransform;
                              return (
                                  (t.selectionBackgroundColor = ""),
                                  this.clearContext(s),
                                  s.save(),
                                  s.transform(h[0], h[1], h[2], h[3], h[4], h[5]),
                                  t.render(s),
                                  s.restore(),
                                  t === this._activeObject && t._renderControls(s, { hasBorders: !1, transparentCorners: !1 }, { hasBorders: !1 }),
                                  (t.selectionBackgroundColor = a),
                                  P.util.isTransparent(s, e, i, this.targetFindTolerance)
                              );
                          },
                          _isSelectionKeyPressed: function (t) {
                              return "[object Array]" === Object.prototype.toString.call(this.selectionKey)
                                  ? !!this.selectionKey.find(function (e) {
                                        return !0 === t[e];
                                    })
                                  : t[this.selectionKey];
                          },
                          _shouldClearSelection: function (t, e) {
                              var i = this.getActiveObjects(),
                                  r = this._activeObject;
                              return !e || (e && r && 1 < i.length && -1 === i.indexOf(e) && r !== e && !this._isSelectionKeyPressed(t)) || (e && !e.evented) || (e && !e.selectable && r && r !== e);
                          },
                          _shouldCenterTransform: function (t) {
                              if (t) {
                                  var e,
                                      i = this._currentTransform;
                                  return (
                                      "scale" === i.action || "scaleX" === i.action || "scaleY" === i.action ? (e = this.centeredScaling || t.centeredScaling) : "rotate" === i.action && (e = this.centeredRotation || t.centeredRotation),
                                      e ? !i.altKey : i.altKey
                                  );
                              }
                          },
                          _getOriginFromCorner: function (t, e) {
                              var i = { x: t.originX, y: t.originY };
                              return (
                                  "ml" === e || "tl" === e || "bl" === e ? (i.x = "right") : ("mr" !== e && "tr" !== e && "br" !== e) || (i.x = "left"),
                                  "tl" === e || "mt" === e || "tr" === e ? (i.y = "bottom") : ("bl" !== e && "mb" !== e && "br" !== e) || (i.y = "top"),
                                  i
                              );
                          },
                          _getActionFromCorner: function (t, e, i) {
                              if (!e || !t) return "drag";
                              switch (e) {
                                  case "mtr":
                                      return "rotate";
                                  case "ml":
                                  case "mr":
                                      return i[this.altActionKey] ? "skewY" : "scaleX";
                                  case "mt":
                                  case "mb":
                                      return i[this.altActionKey] ? "skewX" : "scaleY";
                                  default:
                                      return "scale";
                              }
                          },
                          _setupCurrentTransform: function (t, i, r) {
                              if (i) {
                                  var n = this.getPointer(t),
                                      o = i._findTargetCorner(this.getPointer(t, !0)),
                                      s = this._getActionFromCorner(r, o, t, i),
                                      a = this._getOriginFromCorner(i, o);
                                  (this._currentTransform = {
                                      target: i,
                                      action: s,
                                      corner: o,
                                      scaleX: i.scaleX,
                                      scaleY: i.scaleY,
                                      skewX: i.skewX,
                                      skewY: i.skewY,
                                      offsetX: n.x - i.left,
                                      offsetY: n.y - i.top,
                                      originX: a.x,
                                      originY: a.y,
                                      ex: n.x,
                                      ey: n.y,
                                      lastX: n.x,
                                      lastY: n.y,
                                      theta: e(i.angle),
                                      width: i.width * i.scaleX,
                                      mouseXSign: 1,
                                      mouseYSign: 1,
                                      shiftKey: t.shiftKey,
                                      altKey: t[this.centeredKey],
                                      original: P.util.saveObjectTransform(i),
                                  }),
                                      (this._currentTransform.original.originX = a.x),
                                      (this._currentTransform.original.originY = a.y),
                                      this._resetCurrentTransform(),
                                      this._beforeTransform(t);
                              }
                          },
                          _translateObject: function (t, e) {
                              var i = this._currentTransform,
                                  r = i.target,
                                  n = t - i.offsetX,
                                  o = e - i.offsetY,
                                  s = !r.get("lockMovementX") && r.left !== n,
                                  a = !r.get("lockMovementY") && r.top !== o;
                              return s && r.set("left", n), a && r.set("top", o), s || a;
                          },
                          _changeSkewTransformOrigin: function (t, e, i) {
                              var r = "originX",
                                  n = { 0: "center" },
                                  o = e.target.skewX,
                                  s = "left",
                                  a = "right",
                                  h = "mt" === e.corner || "ml" === e.corner ? 1 : -1,
                                  c = 1;
                              (t = 0 < t ? 1 : -1),
                                  "y" === i && ((o = e.target.skewY), (s = "top"), (a = "bottom"), (r = "originY")),
                                  (n[-1] = s),
                                  (n[1] = a),
                                  e.target.flipX && (c *= -1),
                                  e.target.flipY && (c *= -1),
                                  (e[r] = 0 === o ? ((e.skewSign = -h * t * c), n[-t]) : ((o = 0 < o ? 1 : -1), n[(e.skewSign = o) * h * c]));
                          },
                          _skewObject: function (t, e, i) {
                              var r,
                                  n = this._currentTransform,
                                  o = n.target,
                                  s = o.get("lockSkewingX"),
                                  a = o.get("lockSkewingY");
                              if ((s && "x" === i) || (a && "y" === i)) return !1;
                              var h,
                                  c,
                                  l = o.getCenterPoint(),
                                  u = o.toLocalPoint(new P.Point(t, e), "center", "center")[i],
                                  f = o.toLocalPoint(new P.Point(n.lastX, n.lastY), "center", "center")[i],
                                  d = o._getTransformedDimensions();
                              return (
                                  this._changeSkewTransformOrigin(u - f, n, i),
                                  (h = o.toLocalPoint(new P.Point(t, e), n.originX, n.originY)[i]),
                                  (c = o.translateToOriginPoint(l, n.originX, n.originY)),
                                  (r = this._setObjectSkew(h, n, i, d)),
                                  (n.lastX = t),
                                  (n.lastY = e),
                                  o.setPositionByOrigin(c, n.originX, n.originY),
                                  r
                              );
                          },
                          _setObjectSkew: function (t, e, i, r) {
                              var n,
                                  o,
                                  s,
                                  a,
                                  h,
                                  c,
                                  l,
                                  u,
                                  f,
                                  d,
                                  g = e.target,
                                  p = e.skewSign;
                              return (
                                  (d = "x" === i ? ((h = "y"), (c = "Y"), (l = "X"), (f = 0), g.skewY) : ((h = "x"), (c = "X"), (l = "Y"), (f = g.skewX), 0)),
                                  (a = g._getTransformedDimensions(f, d)),
                                  (n = (u = 2 * Math.abs(t) - a[i]) <= 2 ? 0 : ((n = p * Math.atan(u / g["scale" + l] / (a[h] / g["scale" + c]))), P.util.radiansToDegrees(n))),
                                  (o = g["skew" + l] !== n),
                                  g.set("skew" + l, n),
                                  0 !== g["skew" + c] && ((s = g._getTransformedDimensions()), (n = (r[h] / s[h]) * g["scale" + c]), g.set("scale" + c, n)),
                                  o
                              );
                          },
                          _scaleObject: function (t, e, i) {
                              var r = this._currentTransform,
                                  n = r.target,
                                  o = n.lockScalingX,
                                  s = n.lockScalingY,
                                  a = n.lockScalingFlip;
                              if (o && s) return !1;
                              var h,
                                  c = n.translateToOriginPoint(n.getCenterPoint(), r.originX, r.originY),
                                  l = n.toLocalPoint(new P.Point(t, e), r.originX, r.originY),
                                  u = n._getTransformedDimensions();
                              return this._setLocalMouse(l, r), (h = this._setObjectScale(l, r, o, s, i, a, u)), n.setPositionByOrigin(c, r.originX, r.originY), h;
                          },
                          _setObjectScale: function (t, e, i, r, n, o, s) {
                              var a = e.target,
                                  h = !1,
                                  c = !1,
                                  l = !1,
                                  u = (t.x * a.scaleX) / s.x,
                                  f = (t.y * a.scaleY) / s.y,
                                  d = a.scaleX !== u,
                                  g = a.scaleY !== f;
                              if (((e.newScaleX = u), (e.newScaleY = f), P.Textbox && "x" === n && a instanceof P.Textbox)) {
                                  var p = a.width * (t.x / s.x);
                                  return p >= a.getMinWidth() && ((l = p !== a.width), a.set("width", p), l);
                              }
                              return (
                                  o && u <= 0 && u < a.scaleX && ((h = !0), (t.x = 0)),
                                  o && f <= 0 && f < a.scaleY && ((c = !0), (t.y = 0)),
                                  "equally" !== n || i || r
                                      ? n
                                          ? "x" !== n || a.get("lockUniScaling")
                                              ? "y" !== n || a.get("lockUniScaling") || c || r || (a.set("scaleY", f) && (l = g))
                                              : h || i || (a.set("scaleX", u) && (l = d))
                                          : (h || i || (a.set("scaleX", u) && (l = l || d)), c || r || (a.set("scaleY", f) && (l = l || g)))
                                      : (l = this._scaleObjectEqually(t, a, e, s)),
                                  h || c || this._flipObject(e, n),
                                  l
                              );
                          },
                          _scaleObjectEqually: function (t, e, i, r) {
                              var n,
                                  o,
                                  s,
                                  a = t.y + t.x,
                                  h = (r.y * i.original.scaleY) / e.scaleY + (r.x * i.original.scaleX) / e.scaleX,
                                  c = t.x < 0 ? -1 : 1,
                                  l = t.y < 0 ? -1 : 1;
                              return (o = c * Math.abs((i.original.scaleX * a) / h)), (s = l * Math.abs((i.original.scaleY * a) / h)), (n = o !== e.scaleX || s !== e.scaleY), e.set("scaleX", o), e.set("scaleY", s), n;
                          },
                          _flipObject: function (t, e) {
                              t.newScaleX < 0 && "y" !== e && ("left" === t.originX ? (t.originX = "right") : "right" === t.originX && (t.originX = "left")),
                                  t.newScaleY < 0 && "x" !== e && ("top" === t.originY ? (t.originY = "bottom") : "bottom" === t.originY && (t.originY = "top"));
                          },
                          _setLocalMouse: function (t, e) {
                              var i = e.target,
                                  r = this.getZoom(),
                                  o = i.padding / r;
                              "right" === e.originX ? (t.x *= -1) : "center" === e.originX && ((t.x *= 2 * e.mouseXSign), t.x < 0 && (e.mouseXSign = -e.mouseXSign)),
                                  "bottom" === e.originY ? (t.y *= -1) : "center" === e.originY && ((t.y *= 2 * e.mouseYSign), t.y < 0 && (e.mouseYSign = -e.mouseYSign)),
                                  n(t.x) > o ? (t.x < 0 ? (t.x += o) : (t.x -= o)) : (t.x = 0),
                                  n(t.y) > o ? (t.y < 0 ? (t.y += o) : (t.y -= o)) : (t.y = 0);
                          },
                          _rotateObject: function (t, e) {
                              var n = this._currentTransform,
                                  o = n.target,
                                  s = o.translateToOriginPoint(o.getCenterPoint(), n.originX, n.originY);
                              if (o.lockRotation) return !1;
                              var a = r(n.ey - s.y, n.ex - s.x),
                                  h = r(e - s.y, t - s.x),
                                  c = i(h - a + n.theta),
                                  l = !0;
                              if (0 < o.snapAngle) {
                                  var u = o.snapAngle,
                                      f = o.snapThreshold || u,
                                      d = Math.ceil(c / u) * u,
                                      g = Math.floor(c / u) * u;
                                  Math.abs(c - g) < f ? (c = g) : Math.abs(c - d) < f && (c = d);
                              }
                              return c < 0 && (c = 360 + c), (c %= 360), o.angle === c ? (l = !1) : ((o.angle = c), o.setPositionByOrigin(s, n.originX, n.originY)), l;
                          },
                          setCursor: function (t) {
                              this.upperCanvasEl.style.cursor = t;
                          },
                          _drawSelection: function (t) {
                              var e = this._groupSelector,
                                  i = e.left,
                                  r = e.top,
                                  s = n(i),
                                  a = n(r);
                              if ((this.selectionColor && ((t.fillStyle = this.selectionColor), t.fillRect(e.ex - (0 < i ? 0 : -i), e.ey - (0 < r ? 0 : -r), s, a)), this.selectionLineWidth && this.selectionBorderColor))
                                  if (((t.lineWidth = this.selectionLineWidth), (t.strokeStyle = this.selectionBorderColor), 1 < this.selectionDashArray.length && !o)) {
                                      var h = e.ex + 0.5 - (0 < i ? 0 : s),
                                          c = e.ey + 0.5 - (0 < r ? 0 : a);
                                      t.beginPath(),
                                          P.util.drawDashedLine(t, h, c, h + s, c, this.selectionDashArray),
                                          P.util.drawDashedLine(t, h, c + a - 1, h + s, c + a - 1, this.selectionDashArray),
                                          P.util.drawDashedLine(t, h, c, h, c + a, this.selectionDashArray),
                                          P.util.drawDashedLine(t, h + s - 1, c, h + s - 1, c + a, this.selectionDashArray),
                                          t.closePath(),
                                          t.stroke();
                                  } else P.Object.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(e.ex + 0.5 - (0 < i ? 0 : s), e.ey + 0.5 - (0 < r ? 0 : a), s, a);
                          },
                          findTarget: function (t, e) {
                              if (!this.skipTargetFind) {
                                  var i,
                                      r,
                                      n = this.getPointer(t, !0),
                                      o = this._activeObject,
                                      s = this.getActiveObjects();
                                  if (((this.targets = []), 1 < s.length && !e && o === this._searchPossibleTargets([o], n))) return o;
                                  if (1 === s.length && o._findTargetCorner(n)) return o;
                                  if (1 === s.length && o === this._searchPossibleTargets([o], n)) {
                                      if (!this.preserveObjectStacking) return o;
                                      (i = o), (r = this.targets), (this.targets = []);
                                  }
                                  var a = this._searchPossibleTargets(this._objects, n);
                                  return t[this.altSelectionKey] && a && i && a !== i && ((a = i), (this.targets = r)), a;
                              }
                          },
                          _checkTarget: function (t, e, i) {
                              if (e && e.visible && e.evented && this.containsPoint(null, e, t)) {
                                  if ((!this.perPixelTargetFind && !e.perPixelTargetFind) || e.isEditing) return !0;
                                  if (!this.isTargetTransparent(e, i.x, i.y)) return !0;
                              }
                          },
                          _searchPossibleTargets: function (t, e) {
                              for (var i, r, n = t.length; n--; ) {
                                  var o = t[n],
                                      s = o.group && "activeSelection" !== o.group.type ? this._normalizePointer(o.group, e) : e;
                                  if (this._checkTarget(s, o, e)) {
                                      (i = t[n]).subTargetCheck && i instanceof P.Group && (r = this._searchPossibleTargets(i._objects, e)) && this.targets.push(r);
                                      break;
                                  }
                              }
                              return i;
                          },
                          restorePointerVpt: function (t) {
                              return P.util.transformPoint(t, P.util.invertTransform(this.viewportTransform));
                          },
                          getPointer: function (e, i) {
                              if (this._absolutePointer && !i) return this._absolutePointer;
                              if (this._pointer && i) return this._pointer;
                              var r,
                                  n = t(e),
                                  o = this.upperCanvasEl,
                                  s = o.getBoundingClientRect(),
                                  a = s.width || 0,
                                  h = s.height || 0;
                              return (
                                  (a && h) || ("top" in s && "bottom" in s && (h = Math.abs(s.top - s.bottom)), "right" in s && "left" in s && (a = Math.abs(s.right - s.left))),
                                  this.calcOffset(),
                                  (n.x = n.x - this._offset.left),
                                  (n.y = n.y - this._offset.top),
                                  i || (n = this.restorePointerVpt(n)),
                                  (r = 0 === a || 0 === h ? { width: 1, height: 1 } : { width: o.width / a, height: o.height / h }),
                                  { x: n.x * r.width, y: n.y * r.height }
                              );
                          },
                          _createUpperCanvas: function () {
                              var t = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, "");
                              this.upperCanvasEl ? (this.upperCanvasEl.className = "") : (this.upperCanvasEl = this._createCanvasElement()),
                                  P.util.addClass(this.upperCanvasEl, "upper-canvas " + t),
                                  this.wrapperEl.appendChild(this.upperCanvasEl),
                                  this._copyCanvasStyle(this.lowerCanvasEl, this.upperCanvasEl),
                                  this._applyCanvasStyle(this.upperCanvasEl),
                                  (this.contextTop = this.upperCanvasEl.getContext("2d"));
                          },
                          _createCacheCanvas: function () {
                              (this.cacheCanvasEl = this._createCanvasElement()),
                                  this.cacheCanvasEl.setAttribute("width", this.width),
                                  this.cacheCanvasEl.setAttribute("height", this.height),
                                  (this.contextCache = this.cacheCanvasEl.getContext("2d"));
                          },
                          _initWrapperElement: function () {
                              (this.wrapperEl = P.util.wrapElement(this.lowerCanvasEl, "div", { class: this.containerClass })),
                                  P.util.setStyle(this.wrapperEl, { width: this.width + "px", height: this.height + "px", position: "relative" }),
                                  P.util.makeElementUnselectable(this.wrapperEl);
                          },
                          _applyCanvasStyle: function (t) {
                              var e = this.width || t.width,
                                  i = this.height || t.height;
                              P.util.setStyle(t, {
                                  position: "absolute",
                                  width: e + "px",
                                  height: i + "px",
                                  left: 0,
                                  top: 0,
                                  "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
                                  "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none",
                              }),
                                  (t.width = e),
                                  (t.height = i),
                                  P.util.makeElementUnselectable(t);
                          },
                          _copyCanvasStyle: function (t, e) {
                              e.style.cssText = t.style.cssText;
                          },
                          getSelectionContext: function () {
                              return this.contextTop;
                          },
                          getSelectionElement: function () {
                              return this.upperCanvasEl;
                          },
                          getActiveObject: function () {
                              return this._activeObject;
                          },
                          getActiveObjects: function () {
                              var t = this._activeObject;
                              return t ? ("activeSelection" === t.type && t._objects ? t._objects.slice(0) : [t]) : [];
                          },
                          _onObjectRemoved: function (t) {
                              t === this._activeObject && (this.fire("before:selection:cleared", { target: t }), this._discardActiveObject(), this.fire("selection:cleared", { target: t }), t.fire("deselected")),
                                  this._hoveredTarget === t && (this._hoveredTarget = null),
                                  this.callSuper("_onObjectRemoved", t);
                          },
                          _fireSelectionEvents: function (t, e) {
                              var i = !1,
                                  r = this.getActiveObjects(),
                                  n = [],
                                  o = [],
                                  s = { e: e };
                              t.forEach(function (t) {
                                  -1 === r.indexOf(t) && ((i = !0), t.fire("deselected", s), o.push(t));
                              }),
                                  r.forEach(function (e) {
                                      -1 === t.indexOf(e) && ((i = !0), e.fire("selected", s), n.push(e));
                                  }),
                                  0 < t.length && 0 < r.length
                                      ? ((s.selected = n), (s.deselected = o), (s.updated = n[0] || o[0]), (s.target = this._activeObject), i && this.fire("selection:updated", s))
                                      : 0 < r.length
                                      ? (1 === r.length && ((s.target = n[0]), this.fire("object:selected", s)), (s.selected = n), (s.target = this._activeObject), this.fire("selection:created", s))
                                      : 0 < t.length && ((s.deselected = o), this.fire("selection:cleared", s));
                          },
                          setActiveObject: function (t, e) {
                              var i = this.getActiveObjects();
                              return this._setActiveObject(t, e), this._fireSelectionEvents(i, e), this;
                          },
                          _setActiveObject: function (t, e) {
                              return this._activeObject !== t && !!this._discardActiveObject(e, t) && !t.onSelect({ e: e }) && ((this._activeObject = t), !0);
                          },
                          _discardActiveObject: function (t, e) {
                              var i = this._activeObject;
                              if (i) {
                                  if (i.onDeselect({ e: t, object: e })) return !1;
                                  this._activeObject = null;
                              }
                              return !0;
                          },
                          discardActiveObject: function (t) {
                              var e = this.getActiveObjects(),
                                  i = this.getActiveObject();
                              return e.length && this.fire("before:selection:cleared", { target: i, e: t }), this._discardActiveObject(t), this._fireSelectionEvents(e, t), this;
                          },
                          dispose: function () {
                              var t = this.wrapperEl;
                              return (
                                  this.removeListeners(),
                                  t.removeChild(this.upperCanvasEl),
                                  t.removeChild(this.lowerCanvasEl),
                                  (this.contextCache = null),
                                  (this.contextTop = null),
                                  ["upperCanvasEl", "cacheCanvasEl"].forEach(
                                      function (t) {
                                          P.util.cleanUpJsdomNode(this[t]), (this[t] = void 0);
                                      }.bind(this)
                                  ),
                                  t.parentNode && t.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl),
                                  delete this.wrapperEl,
                                  P.StaticCanvas.prototype.dispose.call(this),
                                  this
                              );
                          },
                          clear: function () {
                              return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
                          },
                          drawControls: function (t) {
                              var e = this._activeObject;
                              e && e._renderControls(t);
                          },
                          _toObject: function (t, e, i) {
                              var r = this._realizeGroupTransformOnObject(t),
                                  n = this.callSuper("_toObject", t, e, i);
                              return this._unwindGroupTransformOnObject(t, r), n;
                          },
                          _realizeGroupTransformOnObject: function (t) {
                              if (t.group && "activeSelection" === t.group.type && this._activeObject === t.group) {
                                  var e = {};
                                  return (
                                      ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"].forEach(function (i) {
                                          e[i] = t[i];
                                      }),
                                      this._activeObject.realizeTransform(t),
                                      e
                                  );
                              }
                              return null;
                          },
                          _unwindGroupTransformOnObject: function (t, e) {
                              e && t.set(e);
                          },
                          _setSVGObject: function (t, e, i) {
                              var r = this._realizeGroupTransformOnObject(e);
                              this.callSuper("_setSVGObject", t, e, i), this._unwindGroupTransformOnObject(e, r);
                          },
                          setViewportTransform: function (t) {
                              this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), P.StaticCanvas.prototype.setViewportTransform.call(this, t);
                          },
                      })),
                      P.StaticCanvas))
                          "prototype" !== s && (P.Canvas[s] = P.StaticCanvas[s]);
                  })(),
                  (function () {
                      var t = { mt: 0, tr: 1, mr: 2, br: 3, mb: 4, bl: 5, ml: 6, tl: 7 },
                          e = P.util.addListener,
                          i = P.util.removeListener,
                          r = { passive: !1 };
                      function n(t, e) {
                          return t.button && t.button === e - 1;
                      }
                      P.util.object.extend(P.Canvas.prototype, {
                          cursorMap: ["n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize"],
                          mainTouchId: null,
                          _initEventListeners: function () {
                              this.removeListeners(), this._bindEvents(), this.addOrRemove(e, "add");
                          },
                          _getEventPrefix: function () {
                              return this.enablePointerEvents ? "pointer" : "mouse";
                          },
                          addOrRemove: function (t, e) {
                              var i = this.upperCanvasEl,
                                  n = this._getEventPrefix();
                              t(P.window, "resize", this._onResize),
                                  t(i, n + "down", this._onMouseDown),
                                  t(i, n + "move", this._onMouseMove, r),
                                  t(i, n + "out", this._onMouseOut),
                                  t(i, n + "enter", this._onMouseEnter),
                                  t(i, "wheel", this._onMouseWheel),
                                  t(i, "contextmenu", this._onContextMenu),
                                  t(i, "dblclick", this._onDoubleClick),
                                  t(i, "dragover", this._onDragOver),
                                  t(i, "dragenter", this._onDragEnter),
                                  t(i, "dragleave", this._onDragLeave),
                                  t(i, "drop", this._onDrop),
                                  this.enablePointerEvents || t(i, "touchstart", this._onTouchStart, r),
                                  "undefined" != typeof eventjs &&
                                      e in eventjs &&
                                      (eventjs[e](i, "gesture", this._onGesture),
                                      eventjs[e](i, "drag", this._onDrag),
                                      eventjs[e](i, "orientation", this._onOrientationChange),
                                      eventjs[e](i, "shake", this._onShake),
                                      eventjs[e](i, "longpress", this._onLongPress));
                          },
                          removeListeners: function () {
                              this.addOrRemove(i, "remove");
                              var t = this._getEventPrefix();
                              i(P.document, t + "up", this._onMouseUp), i(P.document, "touchend", this._onTouchEnd, r), i(P.document, t + "move", this._onMouseMove, r), i(P.document, "touchmove", this._onMouseMove, r);
                          },
                          _bindEvents: function () {
                              this.eventsBound ||
                                  ((this._onMouseDown = this._onMouseDown.bind(this)),
                                  (this._onTouchStart = this._onTouchStart.bind(this)),
                                  (this._onMouseMove = this._onMouseMove.bind(this)),
                                  (this._onMouseUp = this._onMouseUp.bind(this)),
                                  (this._onTouchEnd = this._onTouchEnd.bind(this)),
                                  (this._onResize = this._onResize.bind(this)),
                                  (this._onGesture = this._onGesture.bind(this)),
                                  (this._onDrag = this._onDrag.bind(this)),
                                  (this._onShake = this._onShake.bind(this)),
                                  (this._onLongPress = this._onLongPress.bind(this)),
                                  (this._onOrientationChange = this._onOrientationChange.bind(this)),
                                  (this._onMouseWheel = this._onMouseWheel.bind(this)),
                                  (this._onMouseOut = this._onMouseOut.bind(this)),
                                  (this._onMouseEnter = this._onMouseEnter.bind(this)),
                                  (this._onContextMenu = this._onContextMenu.bind(this)),
                                  (this._onDoubleClick = this._onDoubleClick.bind(this)),
                                  (this._onDragOver = this._onDragOver.bind(this)),
                                  (this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter")),
                                  (this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave")),
                                  (this._onDrop = this._simpleEventHandler.bind(this, "drop")),
                                  (this.eventsBound = !0));
                          },
                          _onGesture: function (t, e) {
                              this.__onTransformGesture && this.__onTransformGesture(t, e);
                          },
                          _onDrag: function (t, e) {
                              this.__onDrag && this.__onDrag(t, e);
                          },
                          _onMouseWheel: function (t) {
                              this.__onMouseWheel(t);
                          },
                          _onMouseOut: function (t) {
                              var e = this._hoveredTarget;
                              this.fire("mouse:out", { target: e, e: t }),
                                  (this._hoveredTarget = null),
                                  e && e.fire("mouseout", { e: t }),
                                  this._iTextInstances &&
                                      this._iTextInstances.forEach(function (t) {
                                          t.isEditing && t.hiddenTextarea.focus();
                                      });
                          },
                          _onMouseEnter: function (t) {
                              this.currentTransform || this.findTarget(t) || (this.fire("mouse:over", { target: null, e: t }), (this._hoveredTarget = null));
                          },
                          _onOrientationChange: function (t, e) {
                              this.__onOrientationChange && this.__onOrientationChange(t, e);
                          },
                          _onShake: function (t, e) {
                              this.__onShake && this.__onShake(t, e);
                          },
                          _onLongPress: function (t, e) {
                              this.__onLongPress && this.__onLongPress(t, e);
                          },
                          _onDragOver: function (t) {
                              t.preventDefault();
                              var e = this._simpleEventHandler("dragover", t);
                              this._fireEnterLeaveEvents(e, t);
                          },
                          _onContextMenu: function (t) {
                              return this.stopContextMenu && (t.stopPropagation(), t.preventDefault()), !1;
                          },
                          _onDoubleClick: function (t) {
                              this._cacheTransformEventData(t), this._handleEvent(t, "dblclick"), this._resetTransformEventData(t);
                          },
                          getPointerId: function (t) {
                              var e = t.changedTouches;
                              return e ? e[0] && e[0].identifier : this.enablePointerEvents ? t.pointerId : -1;
                          },
                          _isMainEvent: function (t) {
                              return !0 === t.isPrimary || (!1 !== t.isPrimary && (("touchend" === t.type && 0 === t.touches.length) || !t.changedTouches || t.changedTouches[0].identifier === this.mainTouchId));
                          },
                          _onTouchStart: function (t) {
                              t.preventDefault(), null === this.mainTouchId && (this.mainTouchId = this.getPointerId(t)), this.__onMouseDown(t), this._resetTransformEventData();
                              var n = this.upperCanvasEl,
                                  o = this._getEventPrefix();
                              e(P.document, "touchend", this._onTouchEnd, r), e(P.document, "touchmove", this._onMouseMove, r), i(n, o + "down", this._onMouseDown);
                          },
                          _onMouseDown: function (t) {
                              this.__onMouseDown(t), this._resetTransformEventData();
                              var n = this.upperCanvasEl,
                                  o = this._getEventPrefix();
                              i(n, o + "move", this._onMouseMove, r), e(P.document, o + "up", this._onMouseUp), e(P.document, o + "move", this._onMouseMove, r);
                          },
                          _onTouchEnd: function (t) {
                              if (!(0 < t.touches.length)) {
                                  this.__onMouseUp(t), this._resetTransformEventData(), (this.mainTouchId = null);
                                  var n = this._getEventPrefix();
                                  i(P.document, "touchend", this._onTouchEnd, r), i(P.document, "touchmove", this._onMouseMove, r);
                                  var o = this;
                                  this._willAddMouseDown && clearTimeout(this._willAddMouseDown),
                                      (this._willAddMouseDown = setTimeout(function () {
                                          e(o.upperCanvasEl, n + "down", o._onMouseDown), (o._willAddMouseDown = 0);
                                      }, 400));
                              }
                          },
                          _onMouseUp: function (t) {
                              this.__onMouseUp(t), this._resetTransformEventData();
                              var n = this.upperCanvasEl,
                                  o = this._getEventPrefix();
                              this._isMainEvent(t) && (i(P.document, o + "up", this._onMouseUp), i(P.document, o + "move", this._onMouseMove, r), e(n, o + "move", this._onMouseMove, r));
                          },
                          _onMouseMove: function (t) {
                              !this.allowTouchScrolling && t.preventDefault && t.preventDefault(), this.__onMouseMove(t);
                          },
                          _onResize: function () {
                              this.calcOffset();
                          },
                          _shouldRender: function (t) {
                              var e = this._activeObject;
                              return !!(!!e != !!t || (e && t && e !== t)) || (e && e.isEditing, !1);
                          },
                          __onMouseUp: function (t) {
                              var e,
                                  i = this._currentTransform,
                                  r = this._groupSelector,
                                  o = !1,
                                  s = !r || (0 === r.left && 0 === r.top);
                              if ((this._cacheTransformEventData(t), (e = this._target), this._handleEvent(t, "up:before"), !n(t, 3)))
                                  return n(t, 2)
                                      ? (this.fireMiddleClick && this._handleEvent(t, "up", 2, s), void this._resetTransformEventData())
                                      : void (this.isDrawingMode && this._isCurrentlyDrawing
                                            ? this._onMouseUpInDrawingMode(t)
                                            : this._isMainEvent(t) &&
                                              (i && (this._finalizeCurrentTransform(t), (o = i.actionPerformed)),
                                              s || (this._maybeGroupObjects(t), o || (o = this._shouldRender(e))),
                                              e && (e.isMoving = !1),
                                              this._setCursorFromEvent(t, e),
                                              this._handleEvent(t, "up", 1, s),
                                              (this._groupSelector = null),
                                              (this._currentTransform = null),
                                              e && (e.__corner = 0),
                                              o ? this.requestRenderAll() : s || this.renderTop()));
                              this.fireRightClick && this._handleEvent(t, "up", 3, s);
                          },
                          _simpleEventHandler: function (t, e) {
                              var i = this.findTarget(e),
                                  r = this.targets,
                                  n = { e: e, target: i, subTargets: r };
                              if ((this.fire(t, n), i && i.fire(t, n), !r)) return i;
                              for (var o = 0; o < r.length; o++) r[o].fire(t, n);
                              return i;
                          },
                          _handleEvent: function (t, e, i, r) {
                              var n = this._target,
                                  o = this.targets || [],
                                  s = { e: t, target: n, subTargets: o, button: i || 1, isClick: r || !1, pointer: this._pointer, absolutePointer: this._absolutePointer, transform: this._currentTransform };
                              this.fire("mouse:" + e, s), n && n.fire("mouse" + e, s);
                              for (var a = 0; a < o.length; a++) o[a].fire("mouse" + e, s);
                          },
                          _finalizeCurrentTransform: function (t) {
                              var e,
                                  i = this._currentTransform,
                                  r = i.target,
                                  n = { e: t, target: r, transform: i };
                              r._scaling && (r._scaling = !1),
                                  r.setCoords(),
                                  (i.actionPerformed || (this.stateful && r.hasStateChanged())) && (i.actionPerformed && ((e = this._addEventOptions(n, i)), this._fire(e, n)), this._fire("modified", n));
                          },
                          _addEventOptions: function (t, e) {
                              var i, r;
                              switch (e.action) {
                                  case "scaleX":
                                      (i = "scaled"), (r = "x");
                                      break;
                                  case "scaleY":
                                      (i = "scaled"), (r = "y");
                                      break;
                                  case "skewX":
                                      (i = "skewed"), (r = "x");
                                      break;
                                  case "skewY":
                                      (i = "skewed"), (r = "y");
                                      break;
                                  case "scale":
                                      (i = "scaled"), (r = "equally");
                                      break;
                                  case "rotate":
                                      i = "rotated";
                                      break;
                                  case "drag":
                                      i = "moved";
                              }
                              return (t.by = r), i;
                          },
                          _onMouseDownInDrawingMode: function (t) {
                              (this._isCurrentlyDrawing = !0), this.getActiveObject() && this.discardActiveObject(t).requestRenderAll(), this.clipTo && P.util.clipContext(this, this.contextTop);
                              var e = this.getPointer(t);
                              this.freeDrawingBrush.onMouseDown(e, { e: t, pointer: e }), this._handleEvent(t, "down");
                          },
                          _onMouseMoveInDrawingMode: function (t) {
                              if (this._isCurrentlyDrawing) {
                                  var e = this.getPointer(t);
                                  this.freeDrawingBrush.onMouseMove(e, { e: t, pointer: e });
                              }
                              this.setCursor(this.freeDrawingCursor), this._handleEvent(t, "move");
                          },
                          _onMouseUpInDrawingMode: function (t) {
                              this.clipTo && this.contextTop.restore();
                              var e = this.getPointer(t);
                              (this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: t, pointer: e })), this._handleEvent(t, "up");
                          },
                          __onMouseDown: function (t) {
                              this._cacheTransformEventData(t), this._handleEvent(t, "down:before");
                              var e = this._target;
                              if (n(t, 3)) this.fireRightClick && this._handleEvent(t, "down", 3);
                              else if (n(t, 2)) this.fireMiddleClick && this._handleEvent(t, "down", 2);
                              else if (this.isDrawingMode) this._onMouseDownInDrawingMode(t);
                              else if (this._isMainEvent(t) && !this._currentTransform) {
                                  var i = this._pointer;
                                  this._previousPointer = i;
                                  var r = this._shouldRender(e),
                                      o = this._shouldGroup(t, e);
                                  if (
                                      (this._shouldClearSelection(t, e) ? this.discardActiveObject(t) : o && (this._handleGrouping(t, e), (e = this._activeObject)),
                                      !this.selection || (e && (e.selectable || e.isEditing || e === this._activeObject)) || (this._groupSelector = { ex: i.x, ey: i.y, top: 0, left: 0 }),
                                      e)
                                  ) {
                                      var s = e === this._activeObject;
                                      e.selectable && this.setActiveObject(e, t), e !== this._activeObject || (!e.__corner && o) || this._setupCurrentTransform(t, e, s);
                                  }
                                  this._handleEvent(t, "down"), (r || o) && this.requestRenderAll();
                              }
                          },
                          _resetTransformEventData: function () {
                              (this._target = null), (this._pointer = null), (this._absolutePointer = null);
                          },
                          _cacheTransformEventData: function (t) {
                              this._resetTransformEventData(),
                                  (this._pointer = this.getPointer(t, !0)),
                                  (this._absolutePointer = this.restorePointerVpt(this._pointer)),
                                  (this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t) || null);
                          },
                          _beforeTransform: function (t) {
                              var e = this._currentTransform;
                              this.stateful && e.target.saveState(), this.fire("before:transform", { e: t, transform: e }), e.corner && this.onBeforeScaleRotate(e.target);
                          },
                          __onMouseMove: function (t) {
                              var e, i;
                              if ((this._handleEvent(t, "move:before"), this._cacheTransformEventData(t), this.isDrawingMode)) this._onMouseMoveInDrawingMode(t);
                              else if (this._isMainEvent(t)) {
                                  var r = this._groupSelector;
                                  r
                                      ? ((i = this._pointer), (r.left = i.x - r.ex), (r.top = i.y - r.ey), this.renderTop())
                                      : this._currentTransform
                                      ? this._transformObject(t)
                                      : ((e = this.findTarget(t) || null), this._setCursorFromEvent(t, e), this._fireOverOutEvents(e, t)),
                                      this._handleEvent(t, "move"),
                                      this._resetTransformEventData();
                              }
                          },
                          _fireOverOutEvents: function (t, e) {
                              this.fireSyntheticInOutEvents(t, e, { targetName: "_hoveredTarget", canvasEvtOut: "mouse:out", evtOut: "mouseout", canvasEvtIn: "mouse:over", evtIn: "mouseover" });
                          },
                          _fireEnterLeaveEvents: function (t, e) {
                              this.fireSyntheticInOutEvents(t, e, { targetName: "_draggedoverTarget", evtOut: "dragleave", evtIn: "dragenter" });
                          },
                          fireSyntheticInOutEvents: function (t, e, i) {
                              var r,
                                  n,
                                  o,
                                  s = this[i.targetName],
                                  a = s !== t,
                                  h = i.canvasEvtIn,
                                  c = i.canvasEvtOut;
                              a && ((r = { e: e, target: t, previousTarget: s }), (n = { e: e, target: s, nextTarget: t }), (this[i.targetName] = t)),
                                  (o = t && a),
                                  s && a && (c && this.fire(c, n), s.fire(i.evtOut, n)),
                                  o && (h && this.fire(h, r), t.fire(i.evtIn, r));
                          },
                          __onMouseWheel: function (t) {
                              this._cacheTransformEventData(t), this._handleEvent(t, "wheel"), this._resetTransformEventData();
                          },
                          _transformObject: function (t) {
                              var e = this.getPointer(t),
                                  i = this._currentTransform;
                              (i.reset = !1),
                                  (i.target.isMoving = !0),
                                  (i.shiftKey = t.shiftKey),
                                  (i.altKey = t[this.centeredKey]),
                                  this._beforeScaleTransform(t, i),
                                  this._performTransformAction(t, i, e),
                                  i.actionPerformed && this.requestRenderAll();
                          },
                          _performTransformAction: function (t, e, i) {
                              var r = i.x,
                                  n = i.y,
                                  o = e.action,
                                  s = !1,
                                  a = { target: e.target, e: t, transform: e, pointer: i };
                              "rotate" === o
                                  ? (s = this._rotateObject(r, n)) && this._fire("rotating", a)
                                  : "scale" === o
                                  ? (s = this._onScale(t, e, r, n)) && this._fire("scaling", a)
                                  : "scaleX" === o
                                  ? (s = this._scaleObject(r, n, "x")) && this._fire("scaling", a)
                                  : "scaleY" === o
                                  ? (s = this._scaleObject(r, n, "y")) && this._fire("scaling", a)
                                  : "skewX" === o
                                  ? (s = this._skewObject(r, n, "x")) && this._fire("skewing", a)
                                  : "skewY" === o
                                  ? (s = this._skewObject(r, n, "y")) && this._fire("skewing", a)
                                  : (s = this._translateObject(r, n)) && (this._fire("moving", a), this.setCursor(a.target.moveCursor || this.moveCursor)),
                                  (e.actionPerformed = e.actionPerformed || s);
                          },
                          _fire: function (t, e) {
                              this.fire("object:" + t, e), e.target.fire(t, e);
                          },
                          _beforeScaleTransform: function (t, e) {
                              if ("scale" === e.action || "scaleX" === e.action || "scaleY" === e.action) {
                                  var i = this._shouldCenterTransform(e.target);
                                  ((i && ("center" !== e.originX || "center" !== e.originY)) || (!i && "center" === e.originX && "center" === e.originY)) && (this._resetCurrentTransform(), (e.reset = !0));
                              }
                          },
                          _onScale: function (t, e, i, r) {
                              return this._isUniscalePossible(t, e.target)
                                  ? ((e.currentAction = "scale"), this._scaleObject(i, r))
                                  : (e.reset || "scale" !== e.currentAction || this._resetCurrentTransform(), (e.currentAction = "scaleEqually"), this._scaleObject(i, r, "equally"));
                          },
                          _isUniscalePossible: function (t, e) {
                              return (t[this.uniScaleKey] || this.uniScaleTransform) && !e.get("lockUniScaling");
                          },
                          _setCursorFromEvent: function (t, e) {
                              if (!e) return this.setCursor(this.defaultCursor), !1;
                              var i = e.hoverCursor || this.hoverCursor,
                                  r = this._activeObject && "activeSelection" === this._activeObject.type ? this._activeObject : null,
                                  n = (!r || !r.contains(e)) && e._findTargetCorner(this.getPointer(t, !0));
                              n ? this.setCursor(this.getCornerCursor(n, e, t)) : this.setCursor(i);
                          },
                          getCornerCursor: function (e, i, r) {
                              return this.actionIsDisabled(e, i, r) ? this.notAllowedCursor : e in t ? this._getRotatedCornerCursor(e, i, r) : "mtr" === e && i.hasRotatingPoint ? this.rotationCursor : this.defaultCursor;
                          },
                          actionIsDisabled: function (t, e, i) {
                              return "mt" === t || "mb" === t
                                  ? i[this.altActionKey]
                                      ? e.lockSkewingX
                                      : e.lockScalingY
                                  : "ml" === t || "mr" === t
                                  ? i[this.altActionKey]
                                      ? e.lockSkewingY
                                      : e.lockScalingX
                                  : "mtr" === t
                                  ? e.lockRotation
                                  : this._isUniscalePossible(i, e)
                                  ? e.lockScalingX && e.lockScalingY
                                  : e.lockScalingX || e.lockScalingY;
                          },
                          _getRotatedCornerCursor: function (e, i, r) {
                              var n = Math.round((i.angle % 360) / 45);
                              return n < 0 && (n += 8), (n += t[e]), r[this.altActionKey] && t[e] % 2 == 0 && (n += 2), (n %= 8), this.cursorMap[n];
                          },
                      });
                  })(),
                  (v = Math.min),
                  (m = Math.max),
                  P.util.object.extend(P.Canvas.prototype, {
                      _shouldGroup: function (t, e) {
                          var i = this._activeObject;
                          return i && this._isSelectionKeyPressed(t) && e && e.selectable && this.selection && (i !== e || "activeSelection" === i.type) && !e.onSelect({ e: t });
                      },
                      _handleGrouping: function (t, e) {
                          var i = this._activeObject;
                          i.__corner || ((e !== i || ((e = this.findTarget(t, !0)) && e.selectable)) && (i && "activeSelection" === i.type ? this._updateActiveSelection(e, t) : this._createActiveSelection(e, t)));
                      },
                      _updateActiveSelection: function (t, e) {
                          var i = this._activeObject,
                              r = i._objects.slice(0);
                          i.contains(t) ? (i.removeWithUpdate(t), (this._hoveredTarget = t), 1 === i.size() && this._setActiveObject(i.item(0), e)) : (i.addWithUpdate(t), (this._hoveredTarget = i)), this._fireSelectionEvents(r, e);
                      },
                      _createActiveSelection: function (t, e) {
                          var i = this.getActiveObjects(),
                              r = this._createGroup(t);
                          (this._hoveredTarget = r), this._setActiveObject(r, e), this._fireSelectionEvents(i, e);
                      },
                      _createGroup: function (t) {
                          var e = this._objects,
                              i = e.indexOf(this._activeObject) < e.indexOf(t) ? [this._activeObject, t] : [t, this._activeObject];
                          return this._activeObject.isEditing && this._activeObject.exitEditing(), new P.ActiveSelection(i, { canvas: this });
                      },
                      _groupSelectedObjects: function (t) {
                          var e,
                              i = this._collectObjects(t);
                          1 === i.length ? this.setActiveObject(i[0], t) : 1 < i.length && ((e = new P.ActiveSelection(i.reverse(), { canvas: this })), this.setActiveObject(e, t));
                      },
                      _collectObjects: function (t) {
                          for (
                              var e,
                                  i = [],
                                  r = this._groupSelector.ex,
                                  n = this._groupSelector.ey,
                                  o = r + this._groupSelector.left,
                                  s = n + this._groupSelector.top,
                                  a = new P.Point(v(r, o), v(n, s)),
                                  h = new P.Point(m(r, o), m(n, s)),
                                  c = !this.selectionFullyContained,
                                  l = r === o && n === s,
                                  u = this._objects.length;
                              u-- &&
                              !((e = this._objects[u]) && e.selectable && e.visible && ((c && e.intersectsWithRect(a, h)) || e.isContainedWithinRect(a, h) || (c && e.containsPoint(a)) || (c && e.containsPoint(h))) && (i.push(e), l));

                          );
                          return (
                              1 < i.length &&
                                  (i = i.filter(function (e) {
                                      return !e.onSelect({ e: t });
                                  })),
                              i
                          );
                      },
                      _maybeGroupObjects: function (t) {
                          this.selection && this._groupSelector && this._groupSelectedObjects(t), this.setCursor(this.defaultCursor), (this._groupSelector = null);
                      },
                  }),
                  P.util.object.extend(P.StaticCanvas.prototype, {
                      toDataURL: function (t) {
                          t || (t = {});
                          var e = t.format || "png",
                              i = t.quality || 1,
                              r = (t.multiplier || 1) * (t.enableRetinaScaling ? this.getRetinaScaling() : 1),
                              n = this.toCanvasElement(r, t);
                          return P.util.toDataURL(n, e, i);
                      },
                      toCanvasElement: function (t, e) {
                          t = t || 1;
                          var i = ((e = e || {}).width || this.width) * t,
                              r = (e.height || this.height) * t,
                              n = this.getZoom(),
                              o = this.width,
                              s = this.height,
                              a = n * t,
                              h = this.viewportTransform,
                              c = (h[4] - (e.left || 0)) * t,
                              l = (h[5] - (e.top || 0)) * t,
                              u = this.interactive,
                              f = [a, 0, 0, a, c, l],
                              d = this.enableRetinaScaling,
                              g = P.util.createCanvasElement(),
                              p = this.contextTop;
                          return (
                              (g.width = i),
                              (g.height = r),
                              (this.contextTop = null),
                              (this.enableRetinaScaling = !1),
                              (this.interactive = !1),
                              (this.viewportTransform = f),
                              (this.width = i),
                              (this.height = r),
                              this.calcViewportBoundaries(),
                              this.renderCanvas(g.getContext("2d"), this._objects),
                              (this.viewportTransform = h),
                              (this.width = o),
                              (this.height = s),
                              this.calcViewportBoundaries(),
                              (this.interactive = u),
                              (this.enableRetinaScaling = d),
                              (this.contextTop = p),
                              g
                          );
                      },
                  }),
                  P.util.object.extend(P.StaticCanvas.prototype, {
                      loadFromDatalessJSON: function (t, e, i) {
                          return this.loadFromJSON(t, e, i);
                      },
                      loadFromJSON: function (t, e, i) {
                          if (t) {
                              var r = "string" == typeof t ? JSON.parse(t) : P.util.object.clone(t),
                                  n = this,
                                  o = r.clipPath,
                                  s = this.renderOnAddRemove;
                              return (
                                  (this.renderOnAddRemove = !1),
                                  delete r.clipPath,
                                  this._enlivenObjects(
                                      r.objects,
                                      function (t) {
                                          n.clear(),
                                              n._setBgOverlay(r, function () {
                                                  o
                                                      ? n._enlivenObjects([o], function (i) {
                                                            (n.clipPath = i[0]), n.__setupCanvas.call(n, r, t, s, e);
                                                        })
                                                      : n.__setupCanvas.call(n, r, t, s, e);
                                              });
                                      },
                                      i
                                  ),
                                  this
                              );
                          }
                      },
                      __setupCanvas: function (t, e, i, r) {
                          var n = this;
                          e.forEach(function (t, e) {
                              n.insertAt(t, e);
                          }),
                              (this.renderOnAddRemove = i),
                              delete t.objects,
                              delete t.backgroundImage,
                              delete t.overlayImage,
                              delete t.background,
                              delete t.overlay,
                              this._setOptions(t),
                              this.renderAll(),
                              r && r();
                      },
                      _setBgOverlay: function (t, e) {
                          var i = { backgroundColor: !1, overlayColor: !1, backgroundImage: !1, overlayImage: !1 };
                          if (t.backgroundImage || t.overlayImage || t.background || t.overlay) {
                              var r = function () {
                                  i.backgroundImage && i.overlayImage && i.backgroundColor && i.overlayColor && e && e();
                              };
                              this.__setBgOverlay("backgroundImage", t.backgroundImage, i, r),
                                  this.__setBgOverlay("overlayImage", t.overlayImage, i, r),
                                  this.__setBgOverlay("backgroundColor", t.background, i, r),
                                  this.__setBgOverlay("overlayColor", t.overlay, i, r);
                          } else e && e();
                      },
                      __setBgOverlay: function (t, e, i, r) {
                          var n = this;
                          if (!e) return (i[t] = !0), void (r && r());
                          "backgroundImage" === t || "overlayImage" === t
                              ? P.util.enlivenObjects([e], function (e) {
                                    (n[t] = e[0]), (i[t] = !0), r && r();
                                })
                              : this["set" + P.util.string.capitalize(t, !0)](e, function () {
                                    (i[t] = !0), r && r();
                                });
                      },
                      _enlivenObjects: function (t, e, i) {
                          t && 0 !== t.length
                              ? P.util.enlivenObjects(
                                    t,
                                    function (t) {
                                        e && e(t);
                                    },
                                    null,
                                    i
                                )
                              : e && e([]);
                      },
                      _toDataURL: function (t, e) {
                          this.clone(function (i) {
                              e(i.toDataURL(t));
                          });
                      },
                      _toDataURLWithMultiplier: function (t, e, i) {
                          this.clone(function (r) {
                              i(r.toDataURLWithMultiplier(t, e));
                          });
                      },
                      clone: function (t, e) {
                          var i = JSON.stringify(this.toJSON(e));
                          this.cloneWithoutData(function (e) {
                              e.loadFromJSON(i, function () {
                                  t && t(e);
                              });
                          });
                      },
                      cloneWithoutData: function (t) {
                          var e = P.util.createCanvasElement();
                          (e.width = this.width), (e.height = this.height);
                          var i = new P.Canvas(e);
                          (i.clipTo = this.clipTo),
                              this.backgroundImage
                                  ? (i.setBackgroundImage(this.backgroundImage.src, function () {
                                        i.renderAll(), t && t(i);
                                    }),
                                    (i.backgroundImageOpacity = this.backgroundImageOpacity),
                                    (i.backgroundImageStretch = this.backgroundImageStretch))
                                  : t && t(i);
                      },
                  }),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend,
                          r = e.util.object.clone,
                          n = e.util.toFixed,
                          o = e.util.string.capitalize,
                          s = e.util.degreesToRadians,
                          a = e.StaticCanvas.supports("setLineDash"),
                          h = !e.isLikelyNode;
                      e.Object ||
                          ((e.Object = e.util.createClass(e.CommonMethods, {
                              type: "object",
                              originX: "left",
                              originY: "top",
                              top: 0,
                              left: 0,
                              width: 0,
                              height: 0,
                              scaleX: 1,
                              scaleY: 1,
                              flipX: !1,
                              flipY: !1,
                              opacity: 1,
                              angle: 0,
                              skewX: 0,
                              skewY: 0,
                              cornerSize: 13,
                              transparentCorners: !0,
                              hoverCursor: null,
                              moveCursor: null,
                              padding: 0,
                              borderColor: "rgba(102,153,255,0.75)",
                              borderDashArray: null,
                              cornerColor: "rgba(102,153,255,0.5)",
                              cornerStrokeColor: null,
                              cornerStyle: "rect",
                              cornerDashArray: null,
                              centeredScaling: !1,
                              centeredRotation: !0,
                              fill: "rgb(0,0,0)",
                              fillRule: "nonzero",
                              globalCompositeOperation: "source-over",
                              backgroundColor: "",
                              selectionBackgroundColor: "",
                              stroke: null,
                              strokeWidth: 1,
                              strokeDashArray: null,
                              strokeDashOffset: 0,
                              strokeLineCap: "butt",
                              strokeLineJoin: "miter",
                              strokeMiterLimit: 4,
                              shadow: null,
                              borderOpacityWhenMoving: 0.4,
                              borderScaleFactor: 1,
                              transformMatrix: null,
                              minScaleLimit: 0,
                              selectable: !0,
                              evented: !0,
                              visible: !0,
                              hasControls: !0,
                              hasBorders: !0,
                              hasRotatingPoint: !0,
                              rotatingPointOffset: 40,
                              perPixelTargetFind: !1,
                              includeDefaultValues: !0,
                              clipTo: null,
                              lockMovementX: !1,
                              lockMovementY: !1,
                              lockRotation: !1,
                              lockScalingX: !1,
                              lockScalingY: !1,
                              lockUniScaling: !1,
                              lockSkewingX: !1,
                              lockSkewingY: !1,
                              lockScalingFlip: !1,
                              excludeFromExport: !1,
                              objectCaching: h,
                              statefullCache: !1,
                              noScaleCache: !0,
                              strokeUniform: !1,
                              dirty: !0,
                              __corner: 0,
                              paintFirst: "fill",
                              stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow clipTo visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(
                                  " "
                              ),
                              cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
                              clipPath: void 0,
                              inverted: !1,
                              absolutePositioned: !1,
                              initialize: function (t) {
                                  t && this.setOptions(t);
                              },
                              _createCacheCanvas: function () {
                                  (this._cacheProperties = {}), (this._cacheCanvas = e.util.createCanvasElement()), (this._cacheContext = this._cacheCanvas.getContext("2d")), this._updateCacheCanvas(), (this.dirty = !0);
                              },
                              _limitCacheSize: function (t) {
                                  var i = e.perfLimitSizeTotal,
                                      r = t.width,
                                      n = t.height,
                                      o = e.maxCacheSideLimit,
                                      s = e.minCacheSideLimit;
                                  if (r <= o && n <= o && r * n <= i) return r < s && (t.width = s), n < s && (t.height = s), t;
                                  var a = r / n,
                                      h = e.util.limitDimsByArea(a, i),
                                      c = e.util.capValue,
                                      l = c(s, h.x, o),
                                      u = c(s, h.y, o);
                                  return l < r && ((t.zoomX /= r / l), (t.width = l), (t.capped = !0)), u < n && ((t.zoomY /= n / u), (t.height = u), (t.capped = !0)), t;
                              },
                              _getCacheCanvasDimensions: function () {
                                  var t = this.getTotalObjectScaling(),
                                      e = this._getTransformedDimensions(0, 0),
                                      i = (e.x * t.scaleX) / this.scaleX,
                                      r = (e.y * t.scaleY) / this.scaleY;
                                  return { width: i + 2, height: r + 2, zoomX: t.scaleX, zoomY: t.scaleY, x: i, y: r };
                              },
                              _updateCacheCanvas: function () {
                                  var t = this.canvas;
                                  if (this.noScaleCache && t && t._currentTransform) {
                                      var i = t._currentTransform.target,
                                          r = t._currentTransform.action;
                                      if (this === i && r.slice && "scale" === r.slice(0, 5)) return !1;
                                  }
                                  var n,
                                      o,
                                      s = this._cacheCanvas,
                                      a = this._limitCacheSize(this._getCacheCanvasDimensions()),
                                      h = e.minCacheSideLimit,
                                      c = a.width,
                                      l = a.height,
                                      u = a.zoomX,
                                      f = a.zoomY,
                                      d = c !== this.cacheWidth || l !== this.cacheHeight,
                                      g = this.zoomX !== u || this.zoomY !== f,
                                      p = d || g,
                                      v = 0,
                                      m = 0,
                                      _ = !1;
                                  if (d) {
                                      var y = this._cacheCanvas.width,
                                          b = this._cacheCanvas.height,
                                          x = y < c || b < l;
                                      (_ = x || ((c < 0.9 * y || l < 0.9 * b) && h < y && h < b)), x && !a.capped && (h < c || h < l) && ((v = 0.1 * c), (m = 0.1 * l));
                                  }
                                  return (
                                      !!p &&
                                      (_ ? ((s.width = Math.ceil(c + v)), (s.height = Math.ceil(l + m))) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, s.width, s.height)),
                                      (n = a.x / 2),
                                      (o = a.y / 2),
                                      (this.cacheTranslationX = Math.round(s.width / 2 - n) + n),
                                      (this.cacheTranslationY = Math.round(s.height / 2 - o) + o),
                                      (this.cacheWidth = c),
                                      (this.cacheHeight = l),
                                      this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY),
                                      this._cacheContext.scale(u, f),
                                      (this.zoomX = u),
                                      (this.zoomY = f),
                                      !0)
                                  );
                              },
                              setOptions: function (t) {
                                  this._setOptions(t), this._initGradient(t.fill, "fill"), this._initGradient(t.stroke, "stroke"), this._initClipping(t), this._initPattern(t.fill, "fill"), this._initPattern(t.stroke, "stroke");
                              },
                              transform: function (t) {
                                  var e;
                                  (e = this.group && !this.group._transformDone ? this.calcTransformMatrix() : this.calcOwnMatrix()), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                              },
                              toObject: function (t) {
                                  var i = e.Object.NUM_FRACTION_DIGITS,
                                      r = {
                                          type: this.type,
                                          version: e.version,
                                          originX: this.originX,
                                          originY: this.originY,
                                          left: n(this.left, i),
                                          top: n(this.top, i),
                                          width: n(this.width, i),
                                          height: n(this.height, i),
                                          fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
                                          stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
                                          strokeWidth: n(this.strokeWidth, i),
                                          strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
                                          strokeLineCap: this.strokeLineCap,
                                          strokeDashOffset: this.strokeDashOffset,
                                          strokeLineJoin: this.strokeLineJoin,
                                          strokeMiterLimit: n(this.strokeMiterLimit, i),
                                          scaleX: n(this.scaleX, i),
                                          scaleY: n(this.scaleY, i),
                                          angle: n(this.angle, i),
                                          flipX: this.flipX,
                                          flipY: this.flipY,
                                          opacity: n(this.opacity, i),
                                          shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
                                          visible: this.visible,
                                          clipTo: this.clipTo && String(this.clipTo),
                                          backgroundColor: this.backgroundColor,
                                          fillRule: this.fillRule,
                                          paintFirst: this.paintFirst,
                                          globalCompositeOperation: this.globalCompositeOperation,
                                          transformMatrix: this.transformMatrix ? this.transformMatrix.concat() : null,
                                          skewX: n(this.skewX, i),
                                          skewY: n(this.skewY, i),
                                      };
                                  return (
                                      this.clipPath && ((r.clipPath = this.clipPath.toObject(t)), (r.clipPath.inverted = this.clipPath.inverted), (r.clipPath.absolutePositioned = this.clipPath.absolutePositioned)),
                                      e.util.populateWithProperties(this, r, t),
                                      this.includeDefaultValues || (r = this._removeDefaultValues(r)),
                                      r
                                  );
                              },
                              toDatalessObject: function (t) {
                                  return this.toObject(t);
                              },
                              _removeDefaultValues: function (t) {
                                  var i = e.util.getKlass(t.type).prototype;
                                  return (
                                      i.stateProperties.forEach(function (e) {
                                          "left" !== e &&
                                              "top" !== e &&
                                              (t[e] === i[e] && delete t[e],
                                              "[object Array]" === Object.prototype.toString.call(t[e]) && "[object Array]" === Object.prototype.toString.call(i[e]) && 0 === t[e].length && 0 === i[e].length && delete t[e]);
                                      }),
                                      t
                                  );
                              },
                              toString: function () {
                                  return "#<fabric." + o(this.type) + ">";
                              },
                              getObjectScaling: function () {
                                  var t = this.scaleX,
                                      e = this.scaleY;
                                  if (this.group) {
                                      var i = this.group.getObjectScaling();
                                      (t *= i.scaleX), (e *= i.scaleY);
                                  }
                                  return { scaleX: t, scaleY: e };
                              },
                              getTotalObjectScaling: function () {
                                  var t = this.getObjectScaling(),
                                      e = t.scaleX,
                                      i = t.scaleY;
                                  if (this.canvas) {
                                      var r = this.canvas.getZoom(),
                                          n = this.canvas.getRetinaScaling();
                                      (e *= r * n), (i *= r * n);
                                  }
                                  return { scaleX: e, scaleY: i };
                              },
                              getObjectOpacity: function () {
                                  var t = this.opacity;
                                  return this.group && (t *= this.group.getObjectOpacity()), t;
                              },
                              _set: function (t, i) {
                                  var r = "scaleX" === t || "scaleY" === t,
                                      n = this[t] !== i,
                                      o = !1;
                                  return (
                                      r && (i = this._constrainScale(i)),
                                      "scaleX" === t && i < 0
                                          ? ((this.flipX = !this.flipX), (i *= -1))
                                          : "scaleY" === t && i < 0
                                          ? ((this.flipY = !this.flipY), (i *= -1))
                                          : "shadow" !== t || !i || i instanceof e.Shadow
                                          ? "dirty" === t && this.group && this.group.set("dirty", i)
                                          : (i = new e.Shadow(i)),
                                      (this[t] = i),
                                      n &&
                                          ((o = this.group && this.group.isOnACache()),
                                          -1 < this.cacheProperties.indexOf(t) ? ((this.dirty = !0), o && this.group.set("dirty", !0)) : o && -1 < this.stateProperties.indexOf(t) && this.group.set("dirty", !0)),
                                      this
                                  );
                              },
                              setOnGroup: function () {},
                              getViewportTransform: function () {
                                  return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : e.iMatrix.concat();
                              },
                              isNotVisible: function () {
                                  return 0 === this.opacity || (0 === this.width && 0 === this.height && 0 === this.strokeWidth) || !this.visible;
                              },
                              render: function (t) {
                                  this.isNotVisible() ||
                                      (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen()) ||
                                      (t.save(),
                                      this._setupCompositeOperation(t),
                                      this.drawSelectionBackground(t),
                                      this.transform(t),
                                      this._setOpacity(t),
                                      this._setShadow(t, this),
                                      this.transformMatrix && t.transform.apply(t, this.transformMatrix),
                                      this.clipTo && e.util.clipContext(this, t),
                                      this.shouldCache()
                                          ? (this.renderCache(), this.drawCacheOnCanvas(t))
                                          : (this._removeCacheCanvas(), (this.dirty = !1), this.drawObject(t), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })),
                                      this.clipTo && t.restore(),
                                      t.restore());
                              },
                              renderCache: function (t) {
                                  (t = t || {}),
                                      this._cacheCanvas || this._createCacheCanvas(),
                                      this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, t.forClipping), (this.dirty = !1));
                              },
                              _removeCacheCanvas: function () {
                                  (this._cacheCanvas = null), (this.cacheWidth = 0), (this.cacheHeight = 0);
                              },
                              hasStroke: function () {
                                  return this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth;
                              },
                              hasFill: function () {
                                  return this.fill && "transparent" !== this.fill;
                              },
                              needsItsOwnCache: function () {
                                  return !("stroke" !== this.paintFirst || !this.hasFill() || !this.hasStroke() || "object" != typeof this.shadow) || !!this.clipPath;
                              },
                              shouldCache: function () {
                                  return (this.ownCaching = this.needsItsOwnCache() || (this.objectCaching && (!this.group || !this.group.isOnACache()))), this.ownCaching;
                              },
                              willDrawShadow: function () {
                                  return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY);
                              },
                              drawClipPathOnCache: function (t) {
                                  var i = this.clipPath;
                                  if ((t.save(), i.inverted ? (t.globalCompositeOperation = "destination-out") : (t.globalCompositeOperation = "destination-in"), i.absolutePositioned)) {
                                      var r = e.util.invertTransform(this.calcTransformMatrix());
                                      t.transform(r[0], r[1], r[2], r[3], r[4], r[5]);
                                  }
                                  i.transform(t), t.scale(1 / i.zoomX, 1 / i.zoomY), t.drawImage(i._cacheCanvas, -i.cacheTranslationX, -i.cacheTranslationY), t.restore();
                              },
                              drawObject: function (t, e) {
                                  var i = this.fill,
                                      r = this.stroke;
                                  e ? ((this.fill = "black"), (this.stroke = ""), this._setClippingProperties(t)) : (this._renderBackground(t), this._setStrokeStyles(t, this), this._setFillStyles(t, this)),
                                      this._render(t),
                                      this._drawClipPath(t),
                                      (this.fill = i),
                                      (this.stroke = r);
                              },
                              _drawClipPath: function (t) {
                                  var e = this.clipPath;
                                  e && ((e.canvas = this.canvas), e.shouldCache(), (e._transformDone = !0), e.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(t));
                              },
                              drawCacheOnCanvas: function (t) {
                                  t.scale(1 / this.zoomX, 1 / this.zoomY), t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
                              },
                              isCacheDirty: function (t) {
                                  if (this.isNotVisible()) return !1;
                                  if (this._cacheCanvas && !t && this._updateCacheCanvas()) return !0;
                                  if (this.dirty || (this.clipPath && this.clipPath.absolutePositioned) || (this.statefullCache && this.hasStateChanged("cacheProperties"))) {
                                      if (this._cacheCanvas && !t) {
                                          var e = this.cacheWidth / this.zoomX,
                                              i = this.cacheHeight / this.zoomY;
                                          this._cacheContext.clearRect(-e / 2, -i / 2, e, i);
                                      }
                                      return !0;
                                  }
                                  return !1;
                              },
                              _renderBackground: function (t) {
                                  if (this.backgroundColor) {
                                      var e = this._getNonTransformedDimensions();
                                      (t.fillStyle = this.backgroundColor), t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t);
                                  }
                              },
                              _setOpacity: function (t) {
                                  this.group && !this.group._transformDone ? (t.globalAlpha = this.getObjectOpacity()) : (t.globalAlpha *= this.opacity);
                              },
                              _setStrokeStyles: function (t, e) {
                                  e.stroke &&
                                      ((t.lineWidth = e.strokeWidth),
                                      (t.lineCap = e.strokeLineCap),
                                      (t.lineDashOffset = e.strokeDashOffset),
                                      (t.lineJoin = e.strokeLineJoin),
                                      (t.miterLimit = e.strokeMiterLimit),
                                      (t.strokeStyle = e.stroke.toLive ? e.stroke.toLive(t, this) : e.stroke));
                              },
                              _setFillStyles: function (t, e) {
                                  e.fill && (t.fillStyle = e.fill.toLive ? e.fill.toLive(t, this) : e.fill);
                              },
                              _setClippingProperties: function (t) {
                                  (t.globalAlpha = 1), (t.strokeStyle = "transparent"), (t.fillStyle = "#000000");
                              },
                              _setLineDash: function (t, e, i) {
                                  e && (1 & e.length && e.push.apply(e, e), a ? t.setLineDash(e) : i && i(t));
                              },
                              _renderControls: function (t, i) {
                                  var r,
                                      n,
                                      o,
                                      a = this.getViewportTransform(),
                                      h = this.calcTransformMatrix();
                                  (n = void 0 !== (i = i || {}).hasBorders ? i.hasBorders : this.hasBorders),
                                      (o = void 0 !== i.hasControls ? i.hasControls : this.hasControls),
                                      (h = e.util.multiplyTransformMatrices(a, h)),
                                      (r = e.util.qrDecompose(h)),
                                      t.save(),
                                      t.translate(r.translateX, r.translateY),
                                      (t.lineWidth = 1 * this.borderScaleFactor),
                                      this.group || (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1),
                                      i.forActiveSelection ? (t.rotate(s(r.angle)), n && this.drawBordersInGroup(t, r, i)) : (t.rotate(s(this.angle)), n && this.drawBorders(t, i)),
                                      o && this.drawControls(t, i),
                                      t.restore();
                              },
                              _setShadow: function (t) {
                                  if (this.shadow) {
                                      var i,
                                          r = this.shadow,
                                          n = this.canvas,
                                          o = (n && n.viewportTransform[0]) || 1,
                                          s = (n && n.viewportTransform[3]) || 1;
                                      (i = r.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling()),
                                          n && n._isRetinaScaling() && ((o *= e.devicePixelRatio), (s *= e.devicePixelRatio)),
                                          (t.shadowColor = r.color),
                                          (t.shadowBlur = (r.blur * e.browserShadowBlurConstant * (o + s) * (i.scaleX + i.scaleY)) / 4),
                                          (t.shadowOffsetX = r.offsetX * o * i.scaleX),
                                          (t.shadowOffsetY = r.offsetY * s * i.scaleY);
                                  }
                              },
                              _removeShadow: function (t) {
                                  this.shadow && ((t.shadowColor = ""), (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0));
                              },
                              _applyPatternGradientTransform: function (t, e) {
                                  if (!e || !e.toLive) return { offsetX: 0, offsetY: 0 };
                                  var i = e.gradientTransform || e.patternTransform,
                                      r = -this.width / 2 + e.offsetX || 0,
                                      n = -this.height / 2 + e.offsetY || 0;
                                  return (
                                      "percentage" === e.gradientUnits ? t.transform(this.width, 0, 0, this.height, r, n) : t.transform(1, 0, 0, 1, r, n), i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), { offsetX: r, offsetY: n }
                                  );
                              },
                              _renderPaintInOrder: function (t) {
                                  "stroke" === this.paintFirst ? (this._renderStroke(t), this._renderFill(t)) : (this._renderFill(t), this._renderStroke(t));
                              },
                              _render: function () {},
                              _renderFill: function (t) {
                                  this.fill && (t.save(), this._applyPatternGradientTransform(t, this.fill), "evenodd" === this.fillRule ? t.fill("evenodd") : t.fill(), t.restore());
                              },
                              _renderStroke: function (t) {
                                  this.stroke &&
                                      0 !== this.strokeWidth &&
                                      (this.shadow && !this.shadow.affectStroke && this._removeShadow(t),
                                      t.save(),
                                      this.strokeUniform && t.scale(1 / this.scaleX, 1 / this.scaleY),
                                      this._setLineDash(t, this.strokeDashArray, this._renderDashedStroke),
                                      this.stroke.toLive && "percentage" === this.stroke.gradientUnits ? this._applyPatternForTransformedGradient(t, this.stroke) : this._applyPatternGradientTransform(t, this.stroke),
                                      t.stroke(),
                                      t.restore());
                              },
                              _applyPatternForTransformedGradient: function (t, i) {
                                  var r,
                                      n = this._limitCacheSize(this._getCacheCanvasDimensions()),
                                      o = e.util.createCanvasElement(),
                                      s = this.canvas.getRetinaScaling(),
                                      a = n.x / this.scaleX / s,
                                      h = n.y / this.scaleY / s;
                                  (o.width = a),
                                      (o.height = h),
                                      (r = o.getContext("2d")).beginPath(),
                                      r.moveTo(0, 0),
                                      r.lineTo(a, 0),
                                      r.lineTo(a, h),
                                      r.lineTo(0, h),
                                      r.closePath(),
                                      r.translate(a / 2, h / 2),
                                      r.scale(n.zoomX / this.scaleX / s, n.zoomY / this.scaleY / s),
                                      this._applyPatternGradientTransform(r, i),
                                      (r.fillStyle = i.toLive(t)),
                                      r.fill(),
                                      t.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2),
                                      t.scale((s * this.scaleX) / n.zoomX, (s * this.scaleY) / n.zoomY),
                                      (t.strokeStyle = r.createPattern(o, "no-repeat"));
                              },
                              _findCenterFromElement: function () {
                                  return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
                              },
                              _assignTransformMatrixProps: function () {
                                  if (this.transformMatrix) {
                                      var t = e.util.qrDecompose(this.transformMatrix);
                                      (this.flipX = !1), (this.flipY = !1), this.set("scaleX", t.scaleX), this.set("scaleY", t.scaleY), (this.angle = t.angle), (this.skewX = t.skewX), (this.skewY = 0);
                                  }
                              },
                              _removeTransformMatrix: function (t) {
                                  var i = this._findCenterFromElement();
                                  this.transformMatrix && (this._assignTransformMatrixProps(), (i = e.util.transformPoint(i, this.transformMatrix))),
                                      (this.transformMatrix = null),
                                      t &&
                                          ((this.scaleX *= t.scaleX),
                                          (this.scaleY *= t.scaleY),
                                          (this.cropX = t.cropX),
                                          (this.cropY = t.cropY),
                                          (i.x += t.offsetLeft),
                                          (i.y += t.offsetTop),
                                          (this.width = t.width),
                                          (this.height = t.height)),
                                      this.setPositionByOrigin(i, "center", "center");
                              },
                              clone: function (t, i) {
                                  var r = this.toObject(i);
                                  this.constructor.fromObject ? this.constructor.fromObject(r, t) : e.Object._fromObject("Object", r, t);
                              },
                              cloneAsImage: function (t, i) {
                                  var r = this.toCanvasElement(i);
                                  return t && t(new e.Image(r)), this;
                              },
                              toCanvasElement: function (t) {
                                  t || (t = {});
                                  var i = e.util,
                                      r = i.saveObjectTransform(this),
                                      n = this.group,
                                      o = this.shadow,
                                      s = Math.abs,
                                      a = (t.multiplier || 1) * (t.enableRetinaScaling ? e.devicePixelRatio : 1);
                                  delete this.group, t.withoutTransform && i.resetObjectTransform(this), t.withoutShadow && (this.shadow = null);
                                  var h,
                                      c,
                                      l = e.util.createCanvasElement(),
                                      u = this.getBoundingRect(!0, !0),
                                      f = this.shadow,
                                      d = { x: 0, y: 0 };
                                  f &&
                                      ((c = f.blur), (h = f.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling()), (d.x = 2 * Math.round(s(f.offsetX) + c) * s(h.scaleX)), (d.y = 2 * Math.round(s(f.offsetY) + c) * s(h.scaleY))),
                                      (l.width = u.width + d.x),
                                      (l.height = u.height + d.y),
                                      (l.width += l.width % 2 ? 2 - (l.width % 2) : 0),
                                      (l.height += l.height % 2 ? 2 - (l.height % 2) : 0);
                                  var g = new e.StaticCanvas(l, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 });
                                  "jpeg" === t.format && (g.backgroundColor = "#fff"), this.setPositionByOrigin(new e.Point(g.width / 2, g.height / 2), "center", "center");
                                  var p = this.canvas;
                                  g.add(this);
                                  var v = g.toCanvasElement(a || 1, t);
                                  return (this.shadow = o), (this.canvas = p), n && (this.group = n), this.set(r).setCoords(), (g._objects = []), g.dispose(), (g = null), v;
                              },
                              toDataURL: function (t) {
                                  return t || (t = {}), e.util.toDataURL(this.toCanvasElement(t), t.format || "png", t.quality || 1);
                              },
                              isType: function (t) {
                                  return this.type === t;
                              },
                              complexity: function () {
                                  return 1;
                              },
                              toJSON: function (t) {
                                  return this.toObject(t);
                              },
                              setGradient: function (t, i) {
                                  i || (i = {});
                                  var r = { colorStops: [] };
                                  return (
                                      (r.type = i.type || (i.r1 || i.r2 ? "radial" : "linear")),
                                      (r.coords = { x1: i.x1, y1: i.y1, x2: i.x2, y2: i.y2 }),
                                      (r.gradientUnits = i.gradientUnits || "pixels"),
                                      (i.r1 || i.r2) && ((r.coords.r1 = i.r1), (r.coords.r2 = i.r2)),
                                      (r.gradientTransform = i.gradientTransform),
                                      e.Gradient.prototype.addColorStop.call(r, i.colorStops),
                                      this.set(t, e.Gradient.forObject(this, r))
                                  );
                              },
                              setPatternFill: function (t, i) {
                                  return this.set("fill", new e.Pattern(t, i));
                              },
                              setShadow: function (t) {
                                  return this.set("shadow", t ? new e.Shadow(t) : null);
                              },
                              setColor: function (t) {
                                  return this.set("fill", t), this;
                              },
                              rotate: function (t) {
                                  var e = ("center" !== this.originX || "center" !== this.originY) && this.centeredRotation;
                                  return e && this._setOriginToCenter(), this.set("angle", t), e && this._resetOrigin(), this;
                              },
                              centerH: function () {
                                  return this.canvas && this.canvas.centerObjectH(this), this;
                              },
                              viewportCenterH: function () {
                                  return this.canvas && this.canvas.viewportCenterObjectH(this), this;
                              },
                              centerV: function () {
                                  return this.canvas && this.canvas.centerObjectV(this), this;
                              },
                              viewportCenterV: function () {
                                  return this.canvas && this.canvas.viewportCenterObjectV(this), this;
                              },
                              center: function () {
                                  return this.canvas && this.canvas.centerObject(this), this;
                              },
                              viewportCenter: function () {
                                  return this.canvas && this.canvas.viewportCenterObject(this), this;
                              },
                              getLocalPointer: function (t, i) {
                                  i = i || this.canvas.getPointer(t);
                                  var r = new e.Point(i.x, i.y),
                                      n = this._getLeftTopCoords();
                                  return this.angle && (r = e.util.rotatePoint(r, n, s(-this.angle))), { x: r.x - n.x, y: r.y - n.y };
                              },
                              _setupCompositeOperation: function (t) {
                                  this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation);
                              },
                          })),
                          e.util.createAccessors && e.util.createAccessors(e.Object),
                          i(e.Object.prototype, e.Observable),
                          (e.Object.NUM_FRACTION_DIGITS = 2),
                          (e.Object._fromObject = function (t, i, n, o) {
                              var s = e[t];
                              (i = r(i, !0)),
                                  e.util.enlivenPatterns([i.fill, i.stroke], function (t) {
                                      void 0 !== t[0] && (i.fill = t[0]),
                                          void 0 !== t[1] && (i.stroke = t[1]),
                                          e.util.enlivenObjects([i.clipPath], function (t) {
                                              i.clipPath = t[0];
                                              var e = o ? new s(i[o], i) : new s(i);
                                              n && n(e);
                                          });
                                  });
                          }),
                          (e.Object.__uid = 0));
                  })(e),
                  (_ = P.util.degreesToRadians),
                  (y = { left: -0.5, center: 0, right: 0.5 }),
                  (b = { top: -0.5, center: 0, bottom: 0.5 }),
                  P.util.object.extend(P.Object.prototype, {
                      translateToGivenOrigin: function (t, e, i, r, n) {
                          var o,
                              s,
                              a,
                              h = t.x,
                              c = t.y;
                          return (
                              "string" == typeof e ? (e = y[e]) : (e -= 0.5),
                              "string" == typeof r ? (r = y[r]) : (r -= 0.5),
                              "string" == typeof i ? (i = b[i]) : (i -= 0.5),
                              "string" == typeof n ? (n = b[n]) : (n -= 0.5),
                              (s = n - i),
                              ((o = r - e) || s) && ((a = this._getTransformedDimensions()), (h = t.x + o * a.x), (c = t.y + s * a.y)),
                              new P.Point(h, c)
                          );
                      },
                      translateToCenterPoint: function (t, e, i) {
                          var r = this.translateToGivenOrigin(t, e, i, "center", "center");
                          return this.angle ? P.util.rotatePoint(r, t, _(this.angle)) : r;
                      },
                      translateToOriginPoint: function (t, e, i) {
                          var r = this.translateToGivenOrigin(t, "center", "center", e, i);
                          return this.angle ? P.util.rotatePoint(r, t, _(this.angle)) : r;
                      },
                      getCenterPoint: function () {
                          var t = new P.Point(this.left, this.top);
                          return this.translateToCenterPoint(t, this.originX, this.originY);
                      },
                      getPointByOrigin: function (t, e) {
                          var i = this.getCenterPoint();
                          return this.translateToOriginPoint(i, t, e);
                      },
                      toLocalPoint: function (t, e, i) {
                          var r,
                              n,
                              o = this.getCenterPoint();
                          return (
                              (r = void 0 !== e && void 0 !== i ? this.translateToGivenOrigin(o, "center", "center", e, i) : new P.Point(this.left, this.top)),
                              (n = new P.Point(t.x, t.y)),
                              this.angle && (n = P.util.rotatePoint(n, o, -_(this.angle))),
                              n.subtractEquals(r)
                          );
                      },
                      setPositionByOrigin: function (t, e, i) {
                          var r = this.translateToCenterPoint(t, e, i),
                              n = this.translateToOriginPoint(r, this.originX, this.originY);
                          this.set("left", n.x), this.set("top", n.y);
                      },
                      adjustPosition: function (t) {
                          var e,
                              i,
                              r = _(this.angle),
                              n = this.getScaledWidth(),
                              o = P.util.cos(r) * n,
                              s = P.util.sin(r) * n;
                          (e = "string" == typeof this.originX ? y[this.originX] : this.originX - 0.5),
                              (i = "string" == typeof t ? y[t] : t - 0.5),
                              (this.left += o * (i - e)),
                              (this.top += s * (i - e)),
                              this.setCoords(),
                              (this.originX = t);
                      },
                      _setOriginToCenter: function () {
                          (this._originalOriginX = this.originX), (this._originalOriginY = this.originY);
                          var t = this.getCenterPoint();
                          (this.originX = "center"), (this.originY = "center"), (this.left = t.x), (this.top = t.y);
                      },
                      _resetOrigin: function () {
                          var t = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
                          (this.originX = this._originalOriginX), (this.originY = this._originalOriginY), (this.left = t.x), (this.top = t.y), (this._originalOriginX = null), (this._originalOriginY = null);
                      },
                      _getLeftTopCoords: function () {
                          return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
                      },
                  }),
                  (x = P.util.degreesToRadians),
                  (C = P.util.multiplyTransformMatrices),
                  (S = P.util.transformPoint),
                  P.util.object.extend(P.Object.prototype, {
                      oCoords: null,
                      aCoords: null,
                      ownMatrixCache: null,
                      matrixCache: null,
                      getCoords: function (t, e) {
                          this.oCoords || this.setCoords();
                          var i,
                              r = t ? this.aCoords : this.oCoords;
                          return (i = e ? this.calcCoords(t) : r), [new P.Point(i.tl.x, i.tl.y), new P.Point(i.tr.x, i.tr.y), new P.Point(i.br.x, i.br.y), new P.Point(i.bl.x, i.bl.y)];
                      },
                      intersectsWithRect: function (t, e, i, r) {
                          var n = this.getCoords(i, r);
                          return "Intersection" === P.Intersection.intersectPolygonRectangle(n, t, e).status;
                      },
                      intersectsWithObject: function (t, e, i) {
                          return "Intersection" === P.Intersection.intersectPolygonPolygon(this.getCoords(e, i), t.getCoords(e, i)).status || t.isContainedWithinObject(this, e, i) || this.isContainedWithinObject(t, e, i);
                      },
                      isContainedWithinObject: function (t, e, i) {
                          for (var r = this.getCoords(e, i), n = 0, o = t._getImageLines(i ? t.calcCoords(e) : e ? t.aCoords : t.oCoords); n < 4; n++) if (!t.containsPoint(r[n], o)) return !1;
                          return !0;
                      },
                      isContainedWithinRect: function (t, e, i, r) {
                          var n = this.getBoundingRect(i, r);
                          return n.left >= t.x && n.left + n.width <= e.x && n.top >= t.y && n.top + n.height <= e.y;
                      },
                      containsPoint: function (t, e, i, r) {
                          e = e || this._getImageLines(r ? this.calcCoords(i) : i ? this.aCoords : this.oCoords);
                          var n = this._findCrossPoints(t, e);
                          return 0 !== n && n % 2 == 1;
                      },
                      isOnScreen: function (t) {
                          if (!this.canvas) return !1;
                          for (var e, i = this.canvas.vptCoords.tl, r = this.canvas.vptCoords.br, n = this.getCoords(!0, t), o = 0; o < 4; o++) if ((e = n[o]).x <= r.x && e.x >= i.x && e.y <= r.y && e.y >= i.y) return !0;
                          return !!this.intersectsWithRect(i, r, !0, t) || this._containsCenterOfCanvas(i, r, t);
                      },
                      _containsCenterOfCanvas: function (t, e, i) {
                          var r = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 };
                          return !!this.containsPoint(r, null, !0, i);
                      },
                      isPartiallyOnScreen: function (t) {
                          if (!this.canvas) return !1;
                          var e = this.canvas.vptCoords.tl,
                              i = this.canvas.vptCoords.br;
                          return !!this.intersectsWithRect(e, i, !0, t) || this._containsCenterOfCanvas(e, i, t);
                      },
                      _getImageLines: function (t) {
                          return { topline: { o: t.tl, d: t.tr }, rightline: { o: t.tr, d: t.br }, bottomline: { o: t.br, d: t.bl }, leftline: { o: t.bl, d: t.tl } };
                      },
                      _findCrossPoints: function (t, e) {
                          var i,
                              r,
                              n = 0;
                          for (var o in e)
                              if (
                                  !(
                                      ((r = e[o]).o.y < t.y && r.d.y < t.y) ||
                                      (r.o.y >= t.y && r.d.y >= t.y) ||
                                      ((r.o.x === r.d.x && r.o.x >= t.x ? r.o.x : ((i = (r.d.y - r.o.y) / (r.d.x - r.o.x)), -(t.y - 0 * t.x - (r.o.y - i * r.o.x)) / (0 - i))) >= t.x && (n += 1), 2 !== n)
                                  )
                              )
                                  break;
                          return n;
                      },
                      getBoundingRect: function (t, e) {
                          var i = this.getCoords(t, e);
                          return P.util.makeBoundingBoxFromPoints(i);
                      },
                      getScaledWidth: function () {
                          return this._getTransformedDimensions().x;
                      },
                      getScaledHeight: function () {
                          return this._getTransformedDimensions().y;
                      },
                      _constrainScale: function (t) {
                          return Math.abs(t) < this.minScaleLimit ? (t < 0 ? -this.minScaleLimit : this.minScaleLimit) : 0 === t ? 1e-4 : t;
                      },
                      scale: function (t) {
                          return this._set("scaleX", t), this._set("scaleY", t), this.setCoords();
                      },
                      scaleToWidth: function (t, e) {
                          var i = this.getBoundingRect(e).width / this.getScaledWidth();
                          return this.scale(t / this.width / i);
                      },
                      scaleToHeight: function (t, e) {
                          var i = this.getBoundingRect(e).height / this.getScaledHeight();
                          return this.scale(t / this.height / i);
                      },
                      calcCoords: function (t) {
                          var e = this._calcRotateMatrix(),
                              i = this._calcTranslateMatrix(),
                              r = C(i, e),
                              n = this.getViewportTransform(),
                              o = t ? r : C(n, r),
                              s = this._getTransformedDimensions(),
                              a = s.x / 2,
                              h = s.y / 2,
                              c = S({ x: -a, y: -h }, o),
                              l = S({ x: a, y: -h }, o),
                              u = S({ x: -a, y: h }, o),
                              f = S({ x: a, y: h }, o);
                          if (!t) {
                              var d = this.padding,
                                  g = x(this.angle),
                                  p = P.util.cos(g),
                                  v = P.util.sin(g),
                                  m = p * d,
                                  _ = v * d,
                                  y = m + _,
                                  b = m - _;
                              d && ((c.x -= b), (c.y -= y), (l.x += y), (l.y -= b), (u.x -= y), (u.y += b), (f.x += b), (f.y += y));
                              var w = new P.Point((c.x + u.x) / 2, (c.y + u.y) / 2),
                                  T = new P.Point((l.x + c.x) / 2, (l.y + c.y) / 2),
                                  O = new P.Point((f.x + l.x) / 2, (f.y + l.y) / 2),
                                  k = new P.Point((f.x + u.x) / 2, (f.y + u.y) / 2),
                                  E = new P.Point(T.x + v * this.rotatingPointOffset, T.y - p * this.rotatingPointOffset);
                          }
                          var j = { tl: c, tr: l, br: f, bl: u };
                          return t || ((j.ml = w), (j.mt = T), (j.mr = O), (j.mb = k), (j.mtr = E)), j;
                      },
                      setCoords: function (t, e) {
                          return (this.oCoords = this.calcCoords(t)), e || (this.aCoords = this.calcCoords(!0)), t || (this._setCornerCoords && this._setCornerCoords()), this;
                      },
                      _calcRotateMatrix: function () {
                          return P.util.calcRotateMatrix(this);
                      },
                      _calcTranslateMatrix: function () {
                          var t = this.getCenterPoint();
                          return [1, 0, 0, 1, t.x, t.y];
                      },
                      transformMatrixKey: function (t) {
                          var e = "_",
                              i = "";
                          return (
                              !t && this.group && (i = this.group.transformMatrixKey(t) + e),
                              i +
                                  this.top +
                                  e +
                                  this.left +
                                  e +
                                  this.scaleX +
                                  e +
                                  this.scaleY +
                                  e +
                                  this.skewX +
                                  e +
                                  this.skewY +
                                  e +
                                  this.angle +
                                  e +
                                  this.originX +
                                  e +
                                  this.originY +
                                  e +
                                  this.width +
                                  e +
                                  this.height +
                                  e +
                                  this.strokeWidth +
                                  this.flipX +
                                  this.flipY
                          );
                      },
                      calcTransformMatrix: function (t) {
                          if (t) return this.calcOwnMatrix();
                          var e = this.transformMatrixKey(),
                              i = this.matrixCache || (this.matrixCache = {});
                          if (i.key === e) return i.value;
                          var r = this.calcOwnMatrix();
                          return this.group && (r = C(this.group.calcTransformMatrix(), r)), (i.key = e), (i.value = r);
                      },
                      calcOwnMatrix: function () {
                          var t = this.transformMatrixKey(!0),
                              e = this.ownMatrixCache || (this.ownMatrixCache = {});
                          if (e.key === t) return e.value;
                          var i = this._calcTranslateMatrix();
                          return (this.translateX = i[4]), (this.translateY = i[5]), (e.key = t), (e.value = P.util.composeMatrix(this)), e.value;
                      },
                      _calcDimensionsTransformMatrix: function (t, e, i) {
                          return P.util.calcDimensionsMatrix({ skewX: t, skewY: e, scaleX: this.scaleX * (i && this.flipX ? -1 : 1), scaleY: this.scaleY * (i && this.flipY ? -1 : 1) });
                      },
                      _getNonTransformedDimensions: function () {
                          var t = this.strokeWidth;
                          return { x: this.width + t, y: this.height + t };
                      },
                      _getTransformedDimensions: function (t, e) {
                          void 0 === t && (t = this.skewX), void 0 === e && (e = this.skewY);
                          var i,
                              r,
                              n = this._getNonTransformedDimensions(),
                              o = 0 === t && 0 === e;
                          if (((r = this.strokeUniform ? ((i = this.width), this.height) : ((i = n.x), n.y)), o)) return this._finalizeDimensions(i * this.scaleX, r * this.scaleY);
                          var s = [
                                  { x: -(i /= 2), y: -(r /= 2) },
                                  { x: i, y: -r },
                                  { x: -i, y: r },
                                  { x: i, y: r },
                              ],
                              a = P.util.calcDimensionsMatrix({ scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY }),
                              h = P.util.makeBoundingBoxFromPoints(s, a);
                          return this._finalizeDimensions(h.width, h.height);
                      },
                      _finalizeDimensions: function (t, e) {
                          return this.strokeUniform ? { x: t + this.strokeWidth, y: e + this.strokeWidth } : { x: t, y: e };
                      },
                      _calculateCurrentDimensions: function () {
                          var t = this.getViewportTransform(),
                              e = this._getTransformedDimensions();
                          return P.util.transformPoint(e, t, !0).scalarAdd(2 * this.padding);
                      },
                  }),
                  P.util.object.extend(P.Object.prototype, {
                      sendToBack: function () {
                          return this.group ? P.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas.sendToBack(this), this;
                      },
                      bringToFront: function () {
                          return this.group ? P.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas.bringToFront(this), this;
                      },
                      sendBackwards: function (t) {
                          return this.group ? P.StaticCanvas.prototype.sendBackwards.call(this.group, this, t) : this.canvas.sendBackwards(this, t), this;
                      },
                      bringForward: function (t) {
                          return this.group ? P.StaticCanvas.prototype.bringForward.call(this.group, this, t) : this.canvas.bringForward(this, t), this;
                      },
                      moveTo: function (t) {
                          return this.group && "activeSelection" !== this.group.type ? P.StaticCanvas.prototype.moveTo.call(this.group, this, t) : this.canvas.moveTo(this, t), this;
                      },
                  }),
                  (function () {
                      function t(t, e) {
                          if (e) {
                              if (e.toLive) return t + ": url(#SVGID_" + e.id + "); ";
                              var i = new P.Color(e),
                                  r = t + ": " + i.toRgb() + "; ",
                                  n = i.getAlpha();
                              return 1 !== n && (r += t + "-opacity: " + n.toString() + "; "), r;
                          }
                          return t + ": none; ";
                      }
                      var e = P.util.toFixed;
                      P.util.object.extend(P.Object.prototype, {
                          getSvgStyles: function (e) {
                              var i = this.fillRule ? this.fillRule : "nonzero",
                                  r = this.strokeWidth ? this.strokeWidth : "0",
                                  n = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none",
                                  o = this.strokeDashOffset ? this.strokeDashOffset : "0",
                                  s = this.strokeLineCap ? this.strokeLineCap : "butt",
                                  a = this.strokeLineJoin ? this.strokeLineJoin : "miter",
                                  h = this.strokeMiterLimit ? this.strokeMiterLimit : "4",
                                  c = void 0 !== this.opacity ? this.opacity : "1",
                                  l = this.visible ? "" : " visibility: hidden;",
                                  u = e ? "" : this.getSvgFilter(),
                                  f = t("fill", this.fill);
                              return [
                                  t("stroke", this.stroke),
                                  "stroke-width: ",
                                  r,
                                  "; ",
                                  "stroke-dasharray: ",
                                  n,
                                  "; ",
                                  "stroke-linecap: ",
                                  s,
                                  "; ",
                                  "stroke-dashoffset: ",
                                  o,
                                  "; ",
                                  "stroke-linejoin: ",
                                  a,
                                  "; ",
                                  "stroke-miterlimit: ",
                                  h,
                                  "; ",
                                  f,
                                  "fill-rule: ",
                                  i,
                                  "; ",
                                  "opacity: ",
                                  c,
                                  ";",
                                  u,
                                  l,
                              ].join("");
                          },
                          getSvgSpanStyles: function (e, i) {
                              var r = "; ",
                                  n = e.fontFamily ? "font-family: " + (-1 === e.fontFamily.indexOf("'") && -1 === e.fontFamily.indexOf('"') ? "'" + e.fontFamily + "'" : e.fontFamily) + r : "",
                                  o = e.strokeWidth ? "stroke-width: " + e.strokeWidth + r : "",
                                  s = ((n = n), e.fontSize ? "font-size: " + e.fontSize + "px" + r : ""),
                                  a = e.fontStyle ? "font-style: " + e.fontStyle + r : "",
                                  h = e.fontWeight ? "font-weight: " + e.fontWeight + r : "",
                                  c = e.fill ? t("fill", e.fill) : "",
                                  l = e.stroke ? t("stroke", e.stroke) : "",
                                  u = this.getSvgTextDecoration(e);
                              return u && (u = "text-decoration: " + u + r), [l, o, n, s, a, h, u, c, e.deltaY ? "baseline-shift: " + -e.deltaY + "; " : "", i ? "white-space: pre; " : ""].join("");
                          },
                          getSvgTextDecoration: function (t) {
                              return "overline" in t || "underline" in t || "linethrough" in t ? (t.overline ? "overline " : "") + (t.underline ? "underline " : "") + (t.linethrough ? "line-through " : "") : "";
                          },
                          getSvgFilter: function () {
                              return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
                          },
                          getSvgCommons: function () {
                              return [this.id ? 'id="' + this.id + '" ' : "", this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""].join("");
                          },
                          getSvgTransform: function (t, e) {
                              var i = t ? this.calcTransformMatrix() : this.calcOwnMatrix();
                              return 'transform="' + P.util.matrixToSVG(i) + (e || "") + this.getSvgTransformMatrix() + '" ';
                          },
                          getSvgTransformMatrix: function () {
                              return this.transformMatrix ? " " + P.util.matrixToSVG(this.transformMatrix) : "";
                          },
                          _setSVGBg: function (t) {
                              if (this.backgroundColor) {
                                  var i = P.Object.NUM_FRACTION_DIGITS;
                                  t.push(
                                      "\t\t<rect ",
                                      this._getFillAttributes(this.backgroundColor),
                                      ' x="',
                                      e(-this.width / 2, i),
                                      '" y="',
                                      e(-this.height / 2, i),
                                      '" width="',
                                      e(this.width, i),
                                      '" height="',
                                      e(this.height, i),
                                      '"></rect>\n'
                                  );
                              }
                          },
                          toSVG: function (t) {
                              return this._createBaseSVGMarkup(this._toSVG(t), { reviver: t });
                          },
                          toClipPathSVG: function (t) {
                              return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(t), { reviver: t });
                          },
                          _createBaseClipPathSVGMarkup: function (t, e) {
                              var i = (e = e || {}).reviver,
                                  r = e.additionalTransform || "",
                                  n = [this.getSvgTransform(!0, r), this.getSvgCommons()].join("");
                              return (t[t.indexOf("COMMON_PARTS")] = n), i ? i(t.join("")) : t.join("");
                          },
                          _createBaseSVGMarkup: function (t, e) {
                              var i,
                                  r,
                                  n = (e = e || {}).noStyle,
                                  o = e.reviver,
                                  s = n ? "" : 'style="' + this.getSvgStyles() + '" ',
                                  a = e.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "",
                                  h = this.clipPath,
                                  c = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "",
                                  l = h && h.absolutePositioned,
                                  u = this.stroke,
                                  f = this.fill,
                                  d = this.shadow,
                                  g = [],
                                  p = t.indexOf("COMMON_PARTS"),
                                  v = e.additionalTransform;
                              return (
                                  h && ((h.clipPathId = "CLIPPATH_" + P.Object.__uid++), (r = '<clipPath id="' + h.clipPathId + '" >\n' + h.toClipPathSVG(o) + "</clipPath>\n")),
                                  l && g.push("<g ", a, this.getSvgCommons(), " >\n"),
                                  g.push("<g ", this.getSvgTransform(!1), l ? "" : a + this.getSvgCommons(), " >\n"),
                                  (i = [s, c, n ? "" : this.addPaintOrder(), " ", v ? 'transform="' + v + '" ' : ""].join("")),
                                  (t[p] = i),
                                  f && f.toLive && g.push(f.toSVG(this)),
                                  u && u.toLive && g.push(u.toSVG(this)),
                                  d && g.push(d.toSVG(this)),
                                  h && g.push(r),
                                  g.push(t.join("")),
                                  g.push("</g>\n"),
                                  l && g.push("</g>\n"),
                                  o ? o(g.join("")) : g.join("")
                              );
                          },
                          addPaintOrder: function () {
                              return "fill" !== this.paintFirst ? ' paint-order="' + this.paintFirst + '" ' : "";
                          },
                      });
                  })(),
                  (function () {
                      var t = P.util.object.extend,
                          e = "stateProperties";
                      function i(e, i, r) {
                          var n = {};
                          r.forEach(function (t) {
                              n[t] = e[t];
                          }),
                              t(e[i], n, !0);
                      }
                      P.util.object.extend(P.Object.prototype, {
                          hasStateChanged: function (t) {
                              var i = "_" + (t = t || e);
                              return (
                                  Object.keys(this[i]).length < this[t].length ||
                                  !(function t(e, i, r) {
                                      if (e === i) return !0;
                                      if (Array.isArray(e)) {
                                          if (!Array.isArray(i) || e.length !== i.length) return !1;
                                          for (var n = 0, o = e.length; n < o; n++) if (!t(e[n], i[n])) return !1;
                                          return !0;
                                      }
                                      if (e && "object" == typeof e) {
                                          var s,
                                              a = Object.keys(e);
                                          if (!i || "object" != typeof i || (!r && a.length !== Object.keys(i).length)) return !1;
                                          for (n = 0, o = a.length; n < o; n++) if ("canvas" !== (s = a[n]) && !t(e[s], i[s])) return !1;
                                          return !0;
                                      }
                                  })(this[i], this, !0)
                              );
                          },
                          saveState: function (t) {
                              var r = (t && t.propertySet) || e,
                                  n = "_" + r;
                              return this[n] ? (i(this, n, this[r]), t && t.stateProperties && i(this, n, t.stateProperties), this) : this.setupState(t);
                          },
                          setupState: function (t) {
                              var i = (t = t || {}).propertySet || e;
                              return (this["_" + (t.propertySet = i)] = {}), this.saveState(t), this;
                          },
                      });
                  })(),
                  (w = P.util.degreesToRadians),
                  P.util.object.extend(P.Object.prototype, {
                      _controlsVisibility: null,
                      _findTargetCorner: function (t) {
                          if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this) return !1;
                          var e,
                              i,
                              r = t.x,
                              n = t.y;
                          for (var o in ((this.__corner = 0), this.oCoords))
                              if (
                                  this.isControlVisible(o) &&
                                  ("mtr" !== o || this.hasRotatingPoint) &&
                                  (!this.get("lockUniScaling") || ("mt" !== o && "mr" !== o && "mb" !== o && "ml" !== o)) &&
                                  ((i = this._getImageLines(this.oCoords[o].corner)), 0 !== (e = this._findCrossPoints({ x: r, y: n }, i)) && e % 2 == 1)
                              )
                                  return (this.__corner = o);
                          return !1;
                      },
                      _setCornerCoords: function () {
                          var t,
                              e,
                              i = this.oCoords,
                              r = w(45 - this.angle),
                              n = 0.707106 * this.cornerSize,
                              o = n * P.util.cos(r),
                              s = n * P.util.sin(r);
                          for (var a in i) (t = i[a].x), (e = i[a].y), (i[a].corner = { tl: { x: t - s, y: e - o }, tr: { x: t + o, y: e - s }, bl: { x: t - o, y: e + s }, br: { x: t + s, y: e + o } });
                      },
                      drawSelectionBackground: function (t) {
                          if (!this.selectionBackgroundColor || (this.canvas && !this.canvas.interactive) || (this.canvas && this.canvas._activeObject !== this)) return this;
                          t.save();
                          var e = this.getCenterPoint(),
                              i = this._calculateCurrentDimensions(),
                              r = this.canvas.viewportTransform;
                          return t.translate(e.x, e.y), t.scale(1 / r[0], 1 / r[3]), t.rotate(w(this.angle)), (t.fillStyle = this.selectionBackgroundColor), t.fillRect(-i.x / 2, -i.y / 2, i.x, i.y), t.restore(), this;
                      },
                      drawBorders: function (t, e) {
                          e = e || {};
                          var i = this._calculateCurrentDimensions(),
                              r = 1 / this.borderScaleFactor,
                              n = i.x + r,
                              o = i.y + r,
                              s = void 0 !== e.hasRotatingPoint ? e.hasRotatingPoint : this.hasRotatingPoint,
                              a = void 0 !== e.hasControls ? e.hasControls : this.hasControls,
                              h = void 0 !== e.rotatingPointOffset ? e.rotatingPointOffset : this.rotatingPointOffset;
                          if (
                              (t.save(),
                              (t.strokeStyle = e.borderColor || this.borderColor),
                              this._setLineDash(t, e.borderDashArray || this.borderDashArray, null),
                              t.strokeRect(-n / 2, -o / 2, n, o),
                              s && this.isControlVisible("mtr") && a)
                          ) {
                              var c = -o / 2;
                              t.beginPath(), t.moveTo(0, c), t.lineTo(0, c - h), t.stroke();
                          }
                          return t.restore(), this;
                      },
                      drawBordersInGroup: function (t, e, i) {
                          i = i || {};
                          var r = this._getNonTransformedDimensions(),
                              n = P.util.composeMatrix({ scaleX: e.scaleX, scaleY: e.scaleY, skewX: e.skewX }),
                              o = P.util.transformPoint(r, n),
                              s = 1 / this.borderScaleFactor,
                              a = o.x + s,
                              h = o.y + s;
                          return t.save(), this._setLineDash(t, i.borderDashArray || this.borderDashArray, null), (t.strokeStyle = i.borderColor || this.borderColor), t.strokeRect(-a / 2, -h / 2, a, h), t.restore(), this;
                      },
                      drawControls: function (t, e) {
                          e = e || {};
                          var i = this._calculateCurrentDimensions(),
                              r = i.x,
                              n = i.y,
                              o = e.cornerSize || this.cornerSize,
                              s = -(r + o) / 2,
                              a = -(n + o) / 2,
                              h = void 0 !== e.transparentCorners ? e.transparentCorners : this.transparentCorners,
                              c = void 0 !== e.hasRotatingPoint ? e.hasRotatingPoint : this.hasRotatingPoint,
                              l = h ? "stroke" : "fill";
                          return (
                              t.save(),
                              (t.strokeStyle = t.fillStyle = e.cornerColor || this.cornerColor),
                              this.transparentCorners || (t.strokeStyle = e.cornerStrokeColor || this.cornerStrokeColor),
                              this._setLineDash(t, e.cornerDashArray || this.cornerDashArray, null),
                              this._drawControl("tl", t, l, s, a, e),
                              this._drawControl("tr", t, l, s + r, a, e),
                              this._drawControl("bl", t, l, s, a + n, e),
                              this._drawControl("br", t, l, s + r, a + n, e),
                              this.get("lockUniScaling") ||
                                  (this._drawControl("mt", t, l, s + r / 2, a, e), this._drawControl("mb", t, l, s + r / 2, a + n, e), this._drawControl("mr", t, l, s + r, a + n / 2, e), this._drawControl("ml", t, l, s, a + n / 2, e)),
                              c && this._drawControl("mtr", t, l, s + r / 2, a - this.rotatingPointOffset, e),
                              t.restore(),
                              this
                          );
                      },
                      _drawControl: function (t, e, i, r, n, o) {
                          if (((o = o || {}), this.isControlVisible(t))) {
                              var s = this.cornerSize,
                                  a = !this.transparentCorners && this.cornerStrokeColor;
                              switch (o.cornerStyle || this.cornerStyle) {
                                  case "circle":
                                      e.beginPath(), e.arc(r + s / 2, n + s / 2, s / 2, 0, 2 * Math.PI, !1), e[i](), a && e.stroke();
                                      break;
                                  default:
                                      this.transparentCorners || e.clearRect(r, n, s, s), e[i + "Rect"](r, n, s, s), a && e.strokeRect(r, n, s, s);
                              }
                          }
                      },
                      isControlVisible: function (t) {
                          return this._getControlsVisibility()[t];
                      },
                      setControlVisible: function (t, e) {
                          return (this._getControlsVisibility()[t] = e), this;
                      },
                      setControlsVisibility: function (t) {
                          for (var e in (t || (t = {}), t)) this.setControlVisible(e, t[e]);
                          return this;
                      },
                      _getControlsVisibility: function () {
                          return this._controlsVisibility || (this._controlsVisibility = { tl: !0, tr: !0, br: !0, bl: !0, ml: !0, mt: !0, mr: !0, mb: !0, mtr: !0 }), this._controlsVisibility;
                      },
                      onDeselect: function () {},
                      onSelect: function () {},
                  }),
                  P.util.object.extend(P.StaticCanvas.prototype, {
                      FX_DURATION: 500,
                      fxCenterObjectH: function (t, e) {
                          var i = function () {},
                              r = (e = e || {}).onComplete || i,
                              n = e.onChange || i,
                              o = this;
                          return (
                              P.util.animate({
                                  startValue: t.left,
                                  endValue: this.getCenter().left,
                                  duration: this.FX_DURATION,
                                  onChange: function (e) {
                                      t.set("left", e), o.requestRenderAll(), n();
                                  },
                                  onComplete: function () {
                                      t.setCoords(), r();
                                  },
                              }),
                              this
                          );
                      },
                      fxCenterObjectV: function (t, e) {
                          var i = function () {},
                              r = (e = e || {}).onComplete || i,
                              n = e.onChange || i,
                              o = this;
                          return (
                              P.util.animate({
                                  startValue: t.top,
                                  endValue: this.getCenter().top,
                                  duration: this.FX_DURATION,
                                  onChange: function (e) {
                                      t.set("top", e), o.requestRenderAll(), n();
                                  },
                                  onComplete: function () {
                                      t.setCoords(), r();
                                  },
                              }),
                              this
                          );
                      },
                      fxRemove: function (t, e) {
                          var i = function () {},
                              r = (e = e || {}).onComplete || i,
                              n = e.onChange || i,
                              o = this;
                          return (
                              P.util.animate({
                                  startValue: t.opacity,
                                  endValue: 0,
                                  duration: this.FX_DURATION,
                                  onChange: function (e) {
                                      t.set("opacity", e), o.requestRenderAll(), n();
                                  },
                                  onComplete: function () {
                                      o.remove(t), r();
                                  },
                              }),
                              this
                          );
                      },
                  }),
                  P.util.object.extend(P.Object.prototype, {
                      animate: function () {
                          if (arguments[0] && "object" == typeof arguments[0]) {
                              var t,
                                  e,
                                  i = [];
                              for (t in arguments[0]) i.push(t);
                              for (var r = 0, n = i.length; r < n; r++) (t = i[r]), (e = r !== n - 1), this._animate(t, arguments[0][t], arguments[1], e);
                          } else this._animate.apply(this, arguments);
                          return this;
                      },
                      _animate: function (t, e, i, r) {
                          var n,
                              o = this;
                          (e = e.toString()), (i = i ? P.util.object.clone(i) : {}), ~t.indexOf(".") && (n = t.split("."));
                          var s = n ? this.get(n[0])[n[1]] : this.get(t);
                          "from" in i || (i.from = s),
                              (e = ~e.indexOf("=") ? s + parseFloat(e.replace("=", "")) : parseFloat(e)),
                              P.util.animate({
                                  startValue: i.from,
                                  endValue: e,
                                  byValue: i.by,
                                  easing: i.easing,
                                  duration: i.duration,
                                  abort:
                                      i.abort &&
                                      function () {
                                          return i.abort.call(o);
                                      },
                                  onChange: function (e, s, a) {
                                      n ? (o[n[0]][n[1]] = e) : o.set(t, e), r || (i.onChange && i.onChange(e, s, a));
                                  },
                                  onComplete: function (t, e, n) {
                                      r || (o.setCoords(), i.onComplete && i.onComplete(t, e, n));
                                  },
                              });
                      },
                  }),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend,
                          r = e.util.object.clone,
                          n = { x1: 1, x2: 1, y1: 1, y2: 1 },
                          o = e.StaticCanvas.supports("setLineDash");
                      function s(t, e) {
                          var i = t.origin,
                              r = t.axis1,
                              n = t.axis2,
                              o = t.dimension,
                              s = e.nearest,
                              a = e.center,
                              h = e.farthest;
                          return function () {
                              switch (this.get(i)) {
                                  case s:
                                      return Math.min(this.get(r), this.get(n));
                                  case a:
                                      return Math.min(this.get(r), this.get(n)) + 0.5 * this.get(o);
                                  case h:
                                      return Math.max(this.get(r), this.get(n));
                              }
                          };
                      }
                      e.Line
                          ? e.warn("fabric.Line is already defined")
                          : ((e.Line = e.util.createClass(e.Object, {
                                type: "line",
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 0,
                                cacheProperties: e.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
                                initialize: function (t, e) {
                                    t || (t = [0, 0, 0, 0]), this.callSuper("initialize", e), this.set("x1", t[0]), this.set("y1", t[1]), this.set("x2", t[2]), this.set("y2", t[3]), this._setWidthHeight(e);
                                },
                                _setWidthHeight: function (t) {
                                    t || (t = {}),
                                        (this.width = Math.abs(this.x2 - this.x1)),
                                        (this.height = Math.abs(this.y2 - this.y1)),
                                        (this.left = "left" in t ? t.left : this._getLeftToOriginX()),
                                        (this.top = "top" in t ? t.top : this._getTopToOriginY());
                                },
                                _set: function (t, e) {
                                    return this.callSuper("_set", t, e), void 0 !== n[t] && this._setWidthHeight(), this;
                                },
                                _getLeftToOriginX: s({ origin: "originX", axis1: "x1", axis2: "x2", dimension: "width" }, { nearest: "left", center: "center", farthest: "right" }),
                                _getTopToOriginY: s({ origin: "originY", axis1: "y1", axis2: "y2", dimension: "height" }, { nearest: "top", center: "center", farthest: "bottom" }),
                                _render: function (t) {
                                    if ((t.beginPath(), !this.strokeDashArray || (this.strokeDashArray && o))) {
                                        var e = this.calcLinePoints();
                                        t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2);
                                    }
                                    t.lineWidth = this.strokeWidth;
                                    var i = t.strokeStyle;
                                    (t.strokeStyle = this.stroke || t.fillStyle), this.stroke && this._renderStroke(t), (t.strokeStyle = i);
                                },
                                _renderDashedStroke: function (t) {
                                    var i = this.calcLinePoints();
                                    t.beginPath(), e.util.drawDashedLine(t, i.x1, i.y1, i.x2, i.y2, this.strokeDashArray), t.closePath();
                                },
                                _findCenterFromElement: function () {
                                    return { x: (this.x1 + this.x2) / 2, y: (this.y1 + this.y2) / 2 };
                                },
                                toObject: function (t) {
                                    return i(this.callSuper("toObject", t), this.calcLinePoints());
                                },
                                _getNonTransformedDimensions: function () {
                                    var t = this.callSuper("_getNonTransformedDimensions");
                                    return "butt" === this.strokeLineCap && (0 === this.width && (t.y -= this.strokeWidth), 0 === this.height && (t.x -= this.strokeWidth)), t;
                                },
                                calcLinePoints: function () {
                                    var t = this.x1 <= this.x2 ? -1 : 1,
                                        e = this.y1 <= this.y2 ? -1 : 1,
                                        i = t * this.width * 0.5,
                                        r = e * this.height * 0.5;
                                    return { x1: i, x2: t * this.width * -0.5, y1: r, y2: e * this.height * -0.5 };
                                },
                                _toSVG: function () {
                                    var t = this.calcLinePoints();
                                    return ["<line ", "COMMON_PARTS", 'x1="', t.x1, '" y1="', t.y1, '" x2="', t.x2, '" y2="', t.y2, '" />\n'];
                                },
                            })),
                            (e.Line.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" "))),
                            (e.Line.fromElement = function (t, r, n) {
                                n = n || {};
                                var o = e.parseAttributes(t, e.Line.ATTRIBUTE_NAMES),
                                    s = [o.x1 || 0, o.y1 || 0, o.x2 || 0, o.y2 || 0];
                                r(new e.Line(s, i(o, n)));
                            }),
                            (e.Line.fromObject = function (t, i) {
                                var n = r(t, !0);
                                (n.points = [t.x1, t.y1, t.x2, t.y2]),
                                    e.Object._fromObject(
                                        "Line",
                                        n,
                                        function (t) {
                                            delete t.points, i && i(t);
                                        },
                                        "points"
                                    );
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = Math.PI;
                      e.Circle
                          ? e.warn("fabric.Circle is already defined.")
                          : ((e.Circle = e.util.createClass(e.Object, {
                                type: "circle",
                                radius: 0,
                                startAngle: 0,
                                endAngle: 2 * i,
                                cacheProperties: e.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
                                _set: function (t, e) {
                                    return this.callSuper("_set", t, e), "radius" === t && this.setRadius(e), this;
                                },
                                toObject: function (t) {
                                    return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(t));
                                },
                                _toSVG: function () {
                                    var t,
                                        r = (this.endAngle - this.startAngle) % (2 * i);
                                    if (0 === r) t = ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', this.radius, '" />\n'];
                                    else {
                                        var n = e.util.cos(this.startAngle) * this.radius,
                                            o = e.util.sin(this.startAngle) * this.radius,
                                            s = e.util.cos(this.endAngle) * this.radius,
                                            a = e.util.sin(this.endAngle) * this.radius,
                                            h = i < r ? "1" : "0";
                                        t = ['<path d="M ' + n + " " + o, " A " + this.radius + " " + this.radius, " 0 ", +h + " 1", " " + s + " " + a, '" ', "COMMON_PARTS", " />\n"];
                                    }
                                    return t;
                                },
                                _render: function (t) {
                                    t.beginPath(), t.arc(0, 0, this.radius, this.startAngle, this.endAngle, !1), this._renderPaintInOrder(t);
                                },
                                getRadiusX: function () {
                                    return this.get("radius") * this.get("scaleX");
                                },
                                getRadiusY: function () {
                                    return this.get("radius") * this.get("scaleY");
                                },
                                setRadius: function (t) {
                                    return (this.radius = t), this.set("width", 2 * t).set("height", 2 * t);
                                },
                            })),
                            (e.Circle.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy r".split(" "))),
                            (e.Circle.fromElement = function (t, i) {
                                var r,
                                    n = e.parseAttributes(t, e.Circle.ATTRIBUTE_NAMES);
                                if (!("radius" in (r = n) && 0 <= r.radius)) throw new Error("value of `r` attribute is required and can not be negative");
                                (n.left = (n.left || 0) - n.radius), (n.top = (n.top || 0) - n.radius), i(new e.Circle(n));
                            }),
                            (e.Circle.fromObject = function (t, i) {
                                return e.Object._fromObject("Circle", t, i);
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      e.Triangle
                          ? e.warn("fabric.Triangle is already defined")
                          : ((e.Triangle = e.util.createClass(e.Object, {
                                type: "triangle",
                                width: 100,
                                height: 100,
                                _render: function (t) {
                                    var e = this.width / 2,
                                        i = this.height / 2;
                                    t.beginPath(), t.moveTo(-e, i), t.lineTo(0, -i), t.lineTo(e, i), t.closePath(), this._renderPaintInOrder(t);
                                },
                                _renderDashedStroke: function (t) {
                                    var i = this.width / 2,
                                        r = this.height / 2;
                                    t.beginPath(),
                                        e.util.drawDashedLine(t, -i, r, 0, -r, this.strokeDashArray),
                                        e.util.drawDashedLine(t, 0, -r, i, r, this.strokeDashArray),
                                        e.util.drawDashedLine(t, i, r, -i, r, this.strokeDashArray),
                                        t.closePath();
                                },
                                _toSVG: function () {
                                    var t = this.width / 2,
                                        e = this.height / 2;
                                    return ["<polygon ", "COMMON_PARTS", 'points="', [-t + " " + e, "0 " + -e, t + " " + e].join(","), '" />'];
                                },
                            })),
                            (e.Triangle.fromObject = function (t, i) {
                                return e.Object._fromObject("Triangle", t, i);
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = 2 * Math.PI;
                      e.Ellipse
                          ? e.warn("fabric.Ellipse is already defined.")
                          : ((e.Ellipse = e.util.createClass(e.Object, {
                                type: "ellipse",
                                rx: 0,
                                ry: 0,
                                cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
                                initialize: function (t) {
                                    this.callSuper("initialize", t), this.set("rx", (t && t.rx) || 0), this.set("ry", (t && t.ry) || 0);
                                },
                                _set: function (t, e) {
                                    switch ((this.callSuper("_set", t, e), t)) {
                                        case "rx":
                                            (this.rx = e), this.set("width", 2 * e);
                                            break;
                                        case "ry":
                                            (this.ry = e), this.set("height", 2 * e);
                                    }
                                    return this;
                                },
                                getRx: function () {
                                    return this.get("rx") * this.get("scaleX");
                                },
                                getRy: function () {
                                    return this.get("ry") * this.get("scaleY");
                                },
                                toObject: function (t) {
                                    return this.callSuper("toObject", ["rx", "ry"].concat(t));
                                },
                                _toSVG: function () {
                                    return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, '" />\n'];
                                },
                                _render: function (t) {
                                    t.beginPath(), t.save(), t.transform(1, 0, 0, this.ry / this.rx, 0, 0), t.arc(0, 0, this.rx, 0, i, !1), t.restore(), this._renderPaintInOrder(t);
                                },
                            })),
                            (e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" "))),
                            (e.Ellipse.fromElement = function (t, i) {
                                var r = e.parseAttributes(t, e.Ellipse.ATTRIBUTE_NAMES);
                                (r.left = (r.left || 0) - r.rx), (r.top = (r.top || 0) - r.ry), i(new e.Ellipse(r));
                            }),
                            (e.Ellipse.fromObject = function (t, i) {
                                return e.Object._fromObject("Ellipse", t, i);
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend;
                      e.Rect
                          ? e.warn("fabric.Rect is already defined")
                          : ((e.Rect = e.util.createClass(e.Object, {
                                stateProperties: e.Object.prototype.stateProperties.concat("rx", "ry"),
                                type: "rect",
                                rx: 0,
                                ry: 0,
                                cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
                                initialize: function (t) {
                                    this.callSuper("initialize", t), this._initRxRy();
                                },
                                _initRxRy: function () {
                                    this.rx && !this.ry ? (this.ry = this.rx) : this.ry && !this.rx && (this.rx = this.ry);
                                },
                                _render: function (t) {
                                    var e = this.rx ? Math.min(this.rx, this.width / 2) : 0,
                                        i = this.ry ? Math.min(this.ry, this.height / 2) : 0,
                                        r = this.width,
                                        n = this.height,
                                        o = -this.width / 2,
                                        s = -this.height / 2,
                                        a = 0 !== e || 0 !== i,
                                        h = 0.4477152502;
                                    t.beginPath(),
                                        t.moveTo(o + e, s),
                                        t.lineTo(o + r - e, s),
                                        a && t.bezierCurveTo(o + r - h * e, s, o + r, s + h * i, o + r, s + i),
                                        t.lineTo(o + r, s + n - i),
                                        a && t.bezierCurveTo(o + r, s + n - h * i, o + r - h * e, s + n, o + r - e, s + n),
                                        t.lineTo(o + e, s + n),
                                        a && t.bezierCurveTo(o + h * e, s + n, o, s + n - h * i, o, s + n - i),
                                        t.lineTo(o, s + i),
                                        a && t.bezierCurveTo(o, s + h * i, o + h * e, s, o + e, s),
                                        t.closePath(),
                                        this._renderPaintInOrder(t);
                                },
                                _renderDashedStroke: function (t) {
                                    var i = -this.width / 2,
                                        r = -this.height / 2,
                                        n = this.width,
                                        o = this.height;
                                    t.beginPath(),
                                        e.util.drawDashedLine(t, i, r, i + n, r, this.strokeDashArray),
                                        e.util.drawDashedLine(t, i + n, r, i + n, r + o, this.strokeDashArray),
                                        e.util.drawDashedLine(t, i + n, r + o, i, r + o, this.strokeDashArray),
                                        e.util.drawDashedLine(t, i, r + o, i, r, this.strokeDashArray),
                                        t.closePath();
                                },
                                toObject: function (t) {
                                    return this.callSuper("toObject", ["rx", "ry"].concat(t));
                                },
                                _toSVG: function () {
                                    return ["<rect ", "COMMON_PARTS", 'x="', -this.width / 2, '" y="', -this.height / 2, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, '" />\n'];
                                },
                            })),
                            (e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" "))),
                            (e.Rect.fromElement = function (t, r, n) {
                                if (!t) return r(null);
                                n = n || {};
                                var o = e.parseAttributes(t, e.Rect.ATTRIBUTE_NAMES);
                                (o.left = o.left || 0), (o.top = o.top || 0), (o.height = o.height || 0), (o.width = o.width || 0);
                                var s = new e.Rect(i(n ? e.util.object.clone(n) : {}, o));
                                (s.visible = s.visible && 0 < s.width && 0 < s.height), r(s);
                            }),
                            (e.Rect.fromObject = function (t, i) {
                                return e.Object._fromObject("Rect", t, i);
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend,
                          r = e.util.array.min,
                          n = e.util.array.max,
                          o = e.util.toFixed;
                      e.Polyline
                          ? e.warn("fabric.Polyline is already defined")
                          : ((e.Polyline = e.util.createClass(e.Object, {
                                type: "polyline",
                                points: null,
                                cacheProperties: e.Object.prototype.cacheProperties.concat("points"),
                                initialize: function (t, e) {
                                    (e = e || {}), (this.points = t || []), this.callSuper("initialize", e), this._setPositionDimensions(e);
                                },
                                _setPositionDimensions: function (t) {
                                    var e,
                                        i = this._calcDimensions(t);
                                    (this.width = i.width),
                                        (this.height = i.height),
                                        t.fromSVG || (e = this.translateToGivenOrigin({ x: i.left - this.strokeWidth / 2, y: i.top - this.strokeWidth / 2 }, "left", "top", this.originX, this.originY)),
                                        void 0 === t.left && (this.left = t.fromSVG ? i.left : e.x),
                                        void 0 === t.top && (this.top = t.fromSVG ? i.top : e.y),
                                        (this.pathOffset = { x: i.left + this.width / 2, y: i.top + this.height / 2 });
                                },
                                _calcDimensions: function () {
                                    var t = this.points,
                                        e = r(t, "x") || 0,
                                        i = r(t, "y") || 0;
                                    return { left: e, top: i, width: (n(t, "x") || 0) - e, height: (n(t, "y") || 0) - i };
                                },
                                toObject: function (t) {
                                    return i(this.callSuper("toObject", t), { points: this.points.concat() });
                                },
                                _toSVG: function () {
                                    for (var t = [], i = this.pathOffset.x, r = this.pathOffset.y, n = e.Object.NUM_FRACTION_DIGITS, s = 0, a = this.points.length; s < a; s++)
                                        t.push(o(this.points[s].x - i, n), ",", o(this.points[s].y - r, n), " ");
                                    return ["<" + this.type + " ", "COMMON_PARTS", 'points="', t.join(""), '" />\n'];
                                },
                                commonRender: function (t) {
                                    var e,
                                        i = this.points.length,
                                        r = this.pathOffset.x,
                                        n = this.pathOffset.y;
                                    if (!i || isNaN(this.points[i - 1].y)) return !1;
                                    t.beginPath(), t.moveTo(this.points[0].x - r, this.points[0].y - n);
                                    for (var o = 0; o < i; o++) (e = this.points[o]), t.lineTo(e.x - r, e.y - n);
                                    return !0;
                                },
                                _render: function (t) {
                                    this.commonRender(t) && this._renderPaintInOrder(t);
                                },
                                _renderDashedStroke: function (t) {
                                    var i, r;
                                    t.beginPath();
                                    for (var n = 0, o = this.points.length; n < o; n++) (i = this.points[n]), (r = this.points[n + 1] || i), e.util.drawDashedLine(t, i.x, i.y, r.x, r.y, this.strokeDashArray);
                                },
                                complexity: function () {
                                    return this.get("points").length;
                                },
                            })),
                            (e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat()),
                            (e.Polyline.fromElementGenerator = function (t) {
                                return function (r, n, o) {
                                    if (!r) return n(null);
                                    o || (o = {});
                                    var s = e.parsePointsAttribute(r.getAttribute("points")),
                                        a = e.parseAttributes(r, e[t].ATTRIBUTE_NAMES);
                                    (a.fromSVG = !0), n(new e[t](s, i(a, o)));
                                };
                            }),
                            (e.Polyline.fromElement = e.Polyline.fromElementGenerator("Polyline")),
                            (e.Polyline.fromObject = function (t, i) {
                                return e.Object._fromObject("Polyline", t, i, "points");
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      e.Polygon
                          ? e.warn("fabric.Polygon is already defined")
                          : ((e.Polygon = e.util.createClass(e.Polyline, {
                                type: "polygon",
                                _render: function (t) {
                                    this.commonRender(t) && (t.closePath(), this._renderPaintInOrder(t));
                                },
                                _renderDashedStroke: function (t) {
                                    this.callSuper("_renderDashedStroke", t), t.closePath();
                                },
                            })),
                            (e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat()),
                            (e.Polygon.fromElement = e.Polyline.fromElementGenerator("Polygon")),
                            (e.Polygon.fromObject = function (t, i) {
                                return e.Object._fromObject("Polygon", t, i, "points");
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.array.min,
                          r = e.util.array.max,
                          n = e.util.object.extend,
                          o = Object.prototype.toString,
                          s = e.util.drawArc,
                          a = e.util.toFixed,
                          h = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 },
                          c = { m: "l", M: "L" };
                      e.Path
                          ? e.warn("fabric.Path is already defined")
                          : ((e.Path = e.util.createClass(e.Object, {
                                type: "path",
                                path: null,
                                cacheProperties: e.Object.prototype.cacheProperties.concat("path", "fillRule"),
                                stateProperties: e.Object.prototype.stateProperties.concat("path"),
                                initialize: function (t, i) {
                                    (i = i || {}), this.callSuper("initialize", i), t || (t = []);
                                    var r = "[object Array]" === o.call(t);
                                    (this.path = r ? t : t.match && t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)), this.path && (r || (this.path = this._parsePath()), e.Polyline.prototype._setPositionDimensions.call(this, i));
                                },
                                _renderPathCommands: function (t) {
                                    var e,
                                        i,
                                        r,
                                        n = null,
                                        o = 0,
                                        a = 0,
                                        h = 0,
                                        c = 0,
                                        l = 0,
                                        u = 0,
                                        f = -this.pathOffset.x,
                                        d = -this.pathOffset.y;
                                    t.beginPath();
                                    for (var g = 0, p = this.path.length; g < p; ++g) {
                                        switch ((e = this.path[g])[0]) {
                                            case "l":
                                                (h += e[1]), (c += e[2]), t.lineTo(h + f, c + d);
                                                break;
                                            case "L":
                                                (h = e[1]), (c = e[2]), t.lineTo(h + f, c + d);
                                                break;
                                            case "h":
                                                (h += e[1]), t.lineTo(h + f, c + d);
                                                break;
                                            case "H":
                                                (h = e[1]), t.lineTo(h + f, c + d);
                                                break;
                                            case "v":
                                                (c += e[1]), t.lineTo(h + f, c + d);
                                                break;
                                            case "V":
                                                (c = e[1]), t.lineTo(h + f, c + d);
                                                break;
                                            case "m":
                                                (o = h += e[1]), (a = c += e[2]), t.moveTo(h + f, c + d);
                                                break;
                                            case "M":
                                                (o = h = e[1]), (a = c = e[2]), t.moveTo(h + f, c + d);
                                                break;
                                            case "c":
                                                (i = h + e[5]), (r = c + e[6]), (l = h + e[3]), (u = c + e[4]), t.bezierCurveTo(h + e[1] + f, c + e[2] + d, l + f, u + d, i + f, r + d), (h = i), (c = r);
                                                break;
                                            case "C":
                                                (h = e[5]), (c = e[6]), (l = e[3]), (u = e[4]), t.bezierCurveTo(e[1] + f, e[2] + d, l + f, u + d, h + f, c + d);
                                                break;
                                            case "s":
                                                (i = h + e[3]),
                                                    (r = c + e[4]),
                                                    (u = null === n[0].match(/[CcSs]/) ? ((l = h), c) : ((l = 2 * h - l), 2 * c - u)),
                                                    t.bezierCurveTo(l + f, u + d, h + e[1] + f, c + e[2] + d, i + f, r + d),
                                                    (l = h + e[1]),
                                                    (u = c + e[2]),
                                                    (h = i),
                                                    (c = r);
                                                break;
                                            case "S":
                                                (i = e[3]),
                                                    (r = e[4]),
                                                    (u = null === n[0].match(/[CcSs]/) ? ((l = h), c) : ((l = 2 * h - l), 2 * c - u)),
                                                    t.bezierCurveTo(l + f, u + d, e[1] + f, e[2] + d, i + f, r + d),
                                                    (h = i),
                                                    (c = r),
                                                    (l = e[1]),
                                                    (u = e[2]);
                                                break;
                                            case "q":
                                                (i = h + e[3]), (r = c + e[4]), (l = h + e[1]), (u = c + e[2]), t.quadraticCurveTo(l + f, u + d, i + f, r + d), (h = i), (c = r);
                                                break;
                                            case "Q":
                                                (i = e[3]), (r = e[4]), t.quadraticCurveTo(e[1] + f, e[2] + d, i + f, r + d), (h = i), (c = r), (l = e[1]), (u = e[2]);
                                                break;
                                            case "t":
                                                (i = h + e[1]), (r = c + e[2]), (u = null === n[0].match(/[QqTt]/) ? ((l = h), c) : ((l = 2 * h - l), 2 * c - u)), t.quadraticCurveTo(l + f, u + d, i + f, r + d), (h = i), (c = r);
                                                break;
                                            case "T":
                                                (i = e[1]), (r = e[2]), (u = null === n[0].match(/[QqTt]/) ? ((l = h), c) : ((l = 2 * h - l), 2 * c - u)), t.quadraticCurveTo(l + f, u + d, i + f, r + d), (h = i), (c = r);
                                                break;
                                            case "a":
                                                s(t, h + f, c + d, [e[1], e[2], e[3], e[4], e[5], e[6] + h + f, e[7] + c + d]), (h += e[6]), (c += e[7]);
                                                break;
                                            case "A":
                                                s(t, h + f, c + d, [e[1], e[2], e[3], e[4], e[5], e[6] + f, e[7] + d]), (h = e[6]), (c = e[7]);
                                                break;
                                            case "z":
                                            case "Z":
                                                (h = o), (c = a), t.closePath();
                                        }
                                        n = e;
                                    }
                                },
                                _render: function (t) {
                                    this._renderPathCommands(t), this._renderPaintInOrder(t);
                                },
                                toString: function () {
                                    return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
                                },
                                toObject: function (t) {
                                    return n(this.callSuper("toObject", t), {
                                        path: this.path.map(function (t) {
                                            return t.slice();
                                        }),
                                    });
                                },
                                toDatalessObject: function (t) {
                                    var e = this.toObject(["sourcePath"].concat(t));
                                    return e.sourcePath && delete e.path, e;
                                },
                                _toSVG: function () {
                                    return [
                                        "<path ",
                                        "COMMON_PARTS",
                                        'd="',
                                        this.path
                                            .map(function (t) {
                                                return t.join(" ");
                                            })
                                            .join(" "),
                                        '" stroke-linecap="round" ',
                                        "/>\n",
                                    ];
                                },
                                _getOffsetTransform: function () {
                                    var t = e.Object.NUM_FRACTION_DIGITS;
                                    return " translate(" + a(-this.pathOffset.x, t) + ", " + a(-this.pathOffset.y, t) + ")";
                                },
                                toClipPathSVG: function (t) {
                                    var e = this._getOffsetTransform();
                                    return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: t, additionalTransform: e });
                                },
                                toSVG: function (t) {
                                    var e = this._getOffsetTransform();
                                    return this._createBaseSVGMarkup(this._toSVG(), { reviver: t, additionalTransform: e });
                                },
                                complexity: function () {
                                    return this.path.length;
                                },
                                _parsePath: function () {
                                    for (var t, e, i, r, n, o = [], s = [], a = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, l = 0, u = this.path.length; l < u; l++) {
                                        for (r = (t = this.path[l]).slice(1).trim(), s.length = 0; (i = a.exec(r)); ) s.push(i[0]);
                                        n = [t.charAt(0)];
                                        for (var f = 0, d = s.length; f < d; f++) (e = parseFloat(s[f])), isNaN(e) || n.push(e);
                                        var g = n[0],
                                            p = h[g.toLowerCase()],
                                            v = c[g] || g;
                                        if (n.length - 1 > p) for (var m = 1, _ = n.length; m < _; m += p) o.push([g].concat(n.slice(m, m + p))), (g = v);
                                        else o.push(n);
                                    }
                                    return o;
                                },
                                _calcDimensions: function () {
                                    for (var t, n, o, s, a = [], h = [], c = null, l = 0, u = 0, f = 0, d = 0, g = 0, p = 0, v = 0, m = this.path.length; v < m; ++v) {
                                        switch ((t = this.path[v])[0]) {
                                            case "l":
                                                (f += t[1]), (d += t[2]), (s = []);
                                                break;
                                            case "L":
                                                (f = t[1]), (d = t[2]), (s = []);
                                                break;
                                            case "h":
                                                (f += t[1]), (s = []);
                                                break;
                                            case "H":
                                                (f = t[1]), (s = []);
                                                break;
                                            case "v":
                                                (d += t[1]), (s = []);
                                                break;
                                            case "V":
                                                (d = t[1]), (s = []);
                                                break;
                                            case "m":
                                                (l = f += t[1]), (u = d += t[2]), (s = []);
                                                break;
                                            case "M":
                                                (l = f = t[1]), (u = d = t[2]), (s = []);
                                                break;
                                            case "c":
                                                (n = f + t[5]), (o = d + t[6]), (g = f + t[3]), (p = d + t[4]), (s = e.util.getBoundsOfCurve(f, d, f + t[1], d + t[2], g, p, n, o)), (f = n), (d = o);
                                                break;
                                            case "C":
                                                (g = t[3]), (p = t[4]), (s = e.util.getBoundsOfCurve(f, d, t[1], t[2], g, p, t[5], t[6])), (f = t[5]), (d = t[6]);
                                                break;
                                            case "s":
                                                (n = f + t[3]),
                                                    (o = d + t[4]),
                                                    (p = null === c[0].match(/[CcSs]/) ? ((g = f), d) : ((g = 2 * f - g), 2 * d - p)),
                                                    (s = e.util.getBoundsOfCurve(f, d, g, p, f + t[1], d + t[2], n, o)),
                                                    (g = f + t[1]),
                                                    (p = d + t[2]),
                                                    (f = n),
                                                    (d = o);
                                                break;
                                            case "S":
                                                (n = t[3]),
                                                    (o = t[4]),
                                                    (p = null === c[0].match(/[CcSs]/) ? ((g = f), d) : ((g = 2 * f - g), 2 * d - p)),
                                                    (s = e.util.getBoundsOfCurve(f, d, g, p, t[1], t[2], n, o)),
                                                    (f = n),
                                                    (d = o),
                                                    (g = t[1]),
                                                    (p = t[2]);
                                                break;
                                            case "q":
                                                (n = f + t[3]), (o = d + t[4]), (g = f + t[1]), (p = d + t[2]), (s = e.util.getBoundsOfCurve(f, d, g, p, g, p, n, o)), (f = n), (d = o);
                                                break;
                                            case "Q":
                                                (g = t[1]), (p = t[2]), (s = e.util.getBoundsOfCurve(f, d, g, p, g, p, t[3], t[4])), (f = t[3]), (d = t[4]);
                                                break;
                                            case "t":
                                                (n = f + t[1]), (o = d + t[2]), (p = null === c[0].match(/[QqTt]/) ? ((g = f), d) : ((g = 2 * f - g), 2 * d - p)), (s = e.util.getBoundsOfCurve(f, d, g, p, g, p, n, o)), (f = n), (d = o);
                                                break;
                                            case "T":
                                                (n = t[1]), (o = t[2]), (p = null === c[0].match(/[QqTt]/) ? ((g = f), d) : ((g = 2 * f - g), 2 * d - p)), (s = e.util.getBoundsOfCurve(f, d, g, p, g, p, n, o)), (f = n), (d = o);
                                                break;
                                            case "a":
                                                (s = e.util.getBoundsOfArc(f, d, t[1], t[2], t[3], t[4], t[5], t[6] + f, t[7] + d)), (f += t[6]), (d += t[7]);
                                                break;
                                            case "A":
                                                (s = e.util.getBoundsOfArc(f, d, t[1], t[2], t[3], t[4], t[5], t[6], t[7])), (f = t[6]), (d = t[7]);
                                                break;
                                            case "z":
                                            case "Z":
                                                (f = l), (d = u);
                                        }
                                        (c = t),
                                            s.forEach(function (t) {
                                                a.push(t.x), h.push(t.y);
                                            }),
                                            a.push(f),
                                            h.push(d);
                                    }
                                    var _ = i(a) || 0,
                                        y = i(h) || 0;
                                    return { left: _, top: y, width: (r(a) || 0) - _, height: (r(h) || 0) - y };
                                },
                            })),
                            (e.Path.fromObject = function (t, i) {
                                if ("string" == typeof t.sourcePath) {
                                    var r = t.sourcePath;
                                    e.loadSVGFromURL(r, function (e) {
                                        var r = e[0];
                                        r.setOptions(t), i && i(r);
                                    });
                                } else e.Object._fromObject("Path", t, i, "path");
                            }),
                            (e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"])),
                            (e.Path.fromElement = function (t, i, r) {
                                var o = e.parseAttributes(t, e.Path.ATTRIBUTE_NAMES);
                                (o.fromSVG = !0), i(new e.Path(o.d, n(o, r)));
                            }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.array.min,
                          r = e.util.array.max;
                      e.Group ||
                          ((e.Group = e.util.createClass(e.Object, e.Collection, {
                              type: "group",
                              strokeWidth: 0,
                              subTargetCheck: !1,
                              cacheProperties: [],
                              useSetOnGroup: !1,
                              initialize: function (t, e, i) {
                                  (e = e || {}), (this._objects = []), i && this.callSuper("initialize", e), (this._objects = t || []);
                                  for (var r = this._objects.length; r--; ) this._objects[r].group = this;
                                  if (i) this._updateObjectsACoords();
                                  else {
                                      var n = e && e.centerPoint;
                                      void 0 !== e.originX && (this.originX = e.originX),
                                          void 0 !== e.originY && (this.originY = e.originY),
                                          n || this._calcBounds(),
                                          this._updateObjectsCoords(n),
                                          delete e.centerPoint,
                                          this.callSuper("initialize", e);
                                  }
                                  this.setCoords();
                              },
                              _updateObjectsACoords: function () {
                                  for (var t = this._objects.length; t--; ) this._objects[t].setCoords(!0, !0);
                              },
                              _updateObjectsCoords: function (t) {
                                  t = t || this.getCenterPoint();
                                  for (var e = this._objects.length; e--; ) this._updateObjectCoords(this._objects[e], t);
                              },
                              _updateObjectCoords: function (t, e) {
                                  var i = t.left,
                                      r = t.top;
                                  t.set({ left: i - e.x, top: r - e.y }), (t.group = this), t.setCoords(!0, !0);
                              },
                              toString: function () {
                                  return "#<fabric.Group: (" + this.complexity() + ")>";
                              },
                              addWithUpdate: function (t) {
                                  return (
                                      this._restoreObjectsState(),
                                      e.util.resetObjectTransform(this),
                                      t && (this._objects.push(t), (t.group = this), t._set("canvas", this.canvas)),
                                      this._calcBounds(),
                                      this._updateObjectsCoords(),
                                      this.setCoords(),
                                      (this.dirty = !0),
                                      this
                                  );
                              },
                              removeWithUpdate: function (t) {
                                  return this._restoreObjectsState(), e.util.resetObjectTransform(this), this.remove(t), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), (this.dirty = !0), this;
                              },
                              _onObjectAdded: function (t) {
                                  (this.dirty = !0), (t.group = this), t._set("canvas", this.canvas);
                              },
                              _onObjectRemoved: function (t) {
                                  (this.dirty = !0), delete t.group;
                              },
                              _set: function (t, i) {
                                  var r = this._objects.length;
                                  if (this.useSetOnGroup) for (; r--; ) this._objects[r].setOnGroup(t, i);
                                  if ("canvas" === t) for (; r--; ) this._objects[r]._set(t, i);
                                  e.Object.prototype._set.call(this, t, i);
                              },
                              toObject: function (t) {
                                  var i = this.includeDefaultValues,
                                      r = this._objects.map(function (e) {
                                          var r = e.includeDefaultValues;
                                          e.includeDefaultValues = i;
                                          var n = e.toObject(t);
                                          return (e.includeDefaultValues = r), n;
                                      }),
                                      n = e.Object.prototype.toObject.call(this, t);
                                  return (n.objects = r), n;
                              },
                              toDatalessObject: function (t) {
                                  var i,
                                      r = this.sourcePath;
                                  if (r) i = r;
                                  else {
                                      var n = this.includeDefaultValues;
                                      i = this._objects.map(function (e) {
                                          var i = e.includeDefaultValues;
                                          e.includeDefaultValues = n;
                                          var r = e.toDatalessObject(t);
                                          return (e.includeDefaultValues = i), r;
                                      });
                                  }
                                  var o = e.Object.prototype.toDatalessObject.call(this, t);
                                  return (o.objects = i), o;
                              },
                              render: function (t) {
                                  (this._transformDone = !0), this.callSuper("render", t), (this._transformDone = !1);
                              },
                              shouldCache: function () {
                                  var t = e.Object.prototype.shouldCache.call(this);
                                  if (t) for (var i = 0, r = this._objects.length; i < r; i++) if (this._objects[i].willDrawShadow()) return (this.ownCaching = !1);
                                  return t;
                              },
                              willDrawShadow: function () {
                                  if (this.shadow) return e.Object.prototype.willDrawShadow.call(this);
                                  for (var t = 0, i = this._objects.length; t < i; t++) if (this._objects[t].willDrawShadow()) return !0;
                                  return !1;
                              },
                              isOnACache: function () {
                                  return this.ownCaching || (this.group && this.group.isOnACache());
                              },
                              drawObject: function (t) {
                                  for (var e = 0, i = this._objects.length; e < i; e++) this._objects[e].render(t);
                                  this._drawClipPath(t);
                              },
                              isCacheDirty: function (t) {
                                  if (this.callSuper("isCacheDirty", t)) return !0;
                                  if (!this.statefullCache) return !1;
                                  for (var e = 0, i = this._objects.length; e < i; e++)
                                      if (this._objects[e].isCacheDirty(!0)) {
                                          if (this._cacheCanvas) {
                                              var r = this.cacheWidth / this.zoomX,
                                                  n = this.cacheHeight / this.zoomY;
                                              this._cacheContext.clearRect(-r / 2, -n / 2, r, n);
                                          }
                                          return !0;
                                      }
                                  return !1;
                              },
                              _restoreObjectsState: function () {
                                  return this._objects.forEach(this._restoreObjectState, this), this;
                              },
                              realizeTransform: function (t) {
                                  var i = t.calcTransformMatrix(),
                                      r = e.util.qrDecompose(i),
                                      n = new e.Point(r.translateX, r.translateY);
                                  return (t.flipX = !1), (t.flipY = !1), t.set("scaleX", r.scaleX), t.set("scaleY", r.scaleY), (t.skewX = r.skewX), (t.skewY = r.skewY), (t.angle = r.angle), t.setPositionByOrigin(n, "center", "center"), t;
                              },
                              _restoreObjectState: function (t) {
                                  return this.realizeTransform(t), t.setCoords(), delete t.group, this;
                              },
                              destroy: function () {
                                  return (
                                      this._objects.forEach(function (t) {
                                          t.set("dirty", !0);
                                      }),
                                      this._restoreObjectsState()
                                  );
                              },
                              toActiveSelection: function () {
                                  if (this.canvas) {
                                      var t = this._objects,
                                          i = this.canvas;
                                      this._objects = [];
                                      var r = this.toObject();
                                      delete r.objects;
                                      var n = new e.ActiveSelection([]);
                                      return (
                                          n.set(r),
                                          (n.type = "activeSelection"),
                                          i.remove(this),
                                          t.forEach(function (t) {
                                              (t.group = n), (t.dirty = !0), i.add(t);
                                          }),
                                          (n.canvas = i),
                                          (n._objects = t),
                                          (i._activeObject = n).setCoords(),
                                          n
                                      );
                                  }
                              },
                              ungroupOnCanvas: function () {
                                  return this._restoreObjectsState();
                              },
                              setObjectsCoords: function () {
                                  return (
                                      this.forEachObject(function (t) {
                                          t.setCoords(!0, !0);
                                      }),
                                      this
                                  );
                              },
                              _calcBounds: function (t) {
                                  for (var e, i, r, n = [], o = [], s = ["tr", "br", "bl", "tl"], a = 0, h = this._objects.length, c = s.length; a < h; ++a)
                                      for ((e = this._objects[a]).setCoords(!0), r = 0; r < c; r++) (i = s[r]), n.push(e.oCoords[i].x), o.push(e.oCoords[i].y);
                                  this._getBounds(n, o, t);
                              },
                              _getBounds: function (t, n, o) {
                                  var s = new e.Point(i(t), i(n)),
                                      a = new e.Point(r(t), r(n)),
                                      h = s.y || 0,
                                      c = s.x || 0,
                                      l = a.x - s.x || 0,
                                      u = a.y - s.y || 0;
                                  (this.width = l), (this.height = u), o || this.setPositionByOrigin({ x: c, y: h }, "left", "top");
                              },
                              _toSVG: function (t) {
                                  for (var e = ["<g ", "COMMON_PARTS", " >\n"], i = 0, r = this._objects.length; i < r; i++) e.push("\t\t", this._objects[i].toSVG(t));
                                  return e.push("</g>\n"), e;
                              },
                              getSvgStyles: function () {
                                  var t = void 0 !== this.opacity && 1 !== this.opacity ? "opacity: " + this.opacity + ";" : "",
                                      e = this.visible ? "" : " visibility: hidden;";
                                  return [t, this.getSvgFilter(), e].join("");
                              },
                              toClipPathSVG: function (t) {
                                  for (var e = [], i = 0, r = this._objects.length; i < r; i++) e.push("\t", this._objects[i].toClipPathSVG(t));
                                  return this._createBaseClipPathSVGMarkup(e, { reviver: t });
                              },
                          })),
                          (e.Group.fromObject = function (t, i) {
                              var r = t.objects,
                                  n = e.util.object.clone(t, !0);
                              delete n.objects,
                                  "string" != typeof r
                                      ? e.util.enlivenObjects(r, function (r) {
                                            e.util.enlivenObjects([t.clipPath], function (n) {
                                                var o = e.util.object.clone(t, !0);
                                                (o.clipPath = n[0]), delete o.objects, i && i(new e.Group(r, o, !0));
                                            });
                                        })
                                      : e.loadSVGFromURL(r, function (o) {
                                            var s = e.util.groupSVGElements(o, t, r);
                                            s.set(n), i && i(s);
                                        });
                          }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      e.ActiveSelection ||
                          ((e.ActiveSelection = e.util.createClass(e.Group, {
                              type: "activeSelection",
                              initialize: function (t, i) {
                                  (i = i || {}), (this._objects = t || []);
                                  for (var r = this._objects.length; r--; ) this._objects[r].group = this;
                                  i.originX && (this.originX = i.originX), i.originY && (this.originY = i.originY), this._calcBounds(), this._updateObjectsCoords(), e.Object.prototype.initialize.call(this, i), this.setCoords();
                              },
                              toGroup: function () {
                                  var t = this._objects.concat();
                                  this._objects = [];
                                  var i = e.Object.prototype.toObject.call(this),
                                      r = new e.Group([]);
                                  if (
                                      (delete i.type,
                                      r.set(i),
                                      t.forEach(function (t) {
                                          t.canvas.remove(t), (t.group = r);
                                      }),
                                      (r._objects = t),
                                      !this.canvas)
                                  )
                                      return r;
                                  var n = this.canvas;
                                  return n.add(r), (n._activeObject = r).setCoords(), r;
                              },
                              onDeselect: function () {
                                  return this.destroy(), !1;
                              },
                              toString: function () {
                                  return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
                              },
                              shouldCache: function () {
                                  return !1;
                              },
                              isOnACache: function () {
                                  return !1;
                              },
                              _renderControls: function (t, e, i) {
                                  t.save(),
                                      (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1),
                                      this.callSuper("_renderControls", t, e),
                                      void 0 === (i = i || {}).hasControls && (i.hasControls = !1),
                                      void 0 === i.hasRotatingPoint && (i.hasRotatingPoint = !1),
                                      (i.forActiveSelection = !0);
                                  for (var r = 0, n = this._objects.length; r < n; r++) this._objects[r]._renderControls(t, i);
                                  t.restore();
                              },
                          })),
                          (e.ActiveSelection.fromObject = function (t, i) {
                              e.util.enlivenObjects(t.objects, function (r) {
                                  delete t.objects, i && i(new e.ActiveSelection(r, t, !0));
                              });
                          }));
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = P.util.object.extend;
                      t.fabric || (t.fabric = {}),
                          t.fabric.Image
                              ? P.warn("fabric.Image is already defined.")
                              : ((P.Image = P.util.createClass(P.Object, {
                                    type: "image",
                                    crossOrigin: "",
                                    strokeWidth: 0,
                                    srcFromAttribute: !1,
                                    _lastScaleX: 1,
                                    _lastScaleY: 1,
                                    _filterScalingX: 1,
                                    _filterScalingY: 1,
                                    minimumScaleTrigger: 0.5,
                                    stateProperties: P.Object.prototype.stateProperties.concat("cropX", "cropY"),
                                    cacheKey: "",
                                    cropX: 0,
                                    cropY: 0,
                                    initialize: function (t, e) {
                                        e || (e = {}), (this.filters = []), (this.cacheKey = "texture" + P.Object.__uid++), this.callSuper("initialize", e), this._initElement(t, e);
                                    },
                                    getElement: function () {
                                        return this._element || {};
                                    },
                                    setElement: function (t, e) {
                                        return (
                                            this.removeTexture(this.cacheKey),
                                            this.removeTexture(this.cacheKey + "_filtered"),
                                            (this._element = t),
                                            (this._originalElement = t),
                                            this._initConfig(e),
                                            0 !== this.filters.length && this.applyFilters(),
                                            this.resizeFilter && this.applyResizeFilters(),
                                            this
                                        );
                                    },
                                    removeTexture: function (t) {
                                        var e = P.filterBackend;
                                        e && e.evictCachesForKey && e.evictCachesForKey(t);
                                    },
                                    dispose: function () {
                                        this.removeTexture(this.cacheKey),
                                            this.removeTexture(this.cacheKey + "_filtered"),
                                            (this._cacheContext = void 0),
                                            ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(
                                                function (t) {
                                                    P.util.cleanUpJsdomNode(this[t]), (this[t] = void 0);
                                                }.bind(this)
                                            );
                                    },
                                    setCrossOrigin: function (t) {
                                        return (this.crossOrigin = t), (this._element.crossOrigin = t), this;
                                    },
                                    getOriginalSize: function () {
                                        var t = this.getElement();
                                        return { width: t.naturalWidth || t.width, height: t.naturalHeight || t.height };
                                    },
                                    _stroke: function (t) {
                                        if (this.stroke && 0 !== this.strokeWidth) {
                                            var e = this.width / 2,
                                                i = this.height / 2;
                                            t.beginPath(), t.moveTo(-e, -i), t.lineTo(e, -i), t.lineTo(e, i), t.lineTo(-e, i), t.lineTo(-e, -i), t.closePath();
                                        }
                                    },
                                    _renderDashedStroke: function (t) {
                                        var e = -this.width / 2,
                                            i = -this.height / 2,
                                            r = this.width,
                                            n = this.height;
                                        t.save(),
                                            this._setStrokeStyles(t, this),
                                            t.beginPath(),
                                            P.util.drawDashedLine(t, e, i, e + r, i, this.strokeDashArray),
                                            P.util.drawDashedLine(t, e + r, i, e + r, i + n, this.strokeDashArray),
                                            P.util.drawDashedLine(t, e + r, i + n, e, i + n, this.strokeDashArray),
                                            P.util.drawDashedLine(t, e, i + n, e, i, this.strokeDashArray),
                                            t.closePath(),
                                            t.restore();
                                    },
                                    toObject: function (t) {
                                        var i = [];
                                        this.filters.forEach(function (t) {
                                            t && i.push(t.toObject());
                                        });
                                        var r = e(this.callSuper("toObject", ["crossOrigin", "cropX", "cropY"].concat(t)), { src: this.getSrc(), filters: i });
                                        return this.resizeFilter && (r.resizeFilter = this.resizeFilter.toObject()), r;
                                    },
                                    hasCrop: function () {
                                        return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
                                    },
                                    _toSVG: function () {
                                        var t,
                                            e = [],
                                            i = [],
                                            r = -this.width / 2,
                                            n = -this.height / 2,
                                            o = "";
                                        if (this.hasCrop()) {
                                            var s = P.Object.__uid++;
                                            e.push('<clipPath id="imageCrop_' + s + '">\n', '\t<rect x="' + r + '" y="' + n + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"),
                                                (o = ' clip-path="url(#imageCrop_' + s + ')" ');
                                        }
                                        if (
                                            (i.push(
                                                "\t<image ",
                                                "COMMON_PARTS",
                                                'xlink:href="',
                                                this.getSvgSrc(!0),
                                                '" x="',
                                                r - this.cropX,
                                                '" y="',
                                                n - this.cropY,
                                                '" width="',
                                                this._element.width || this._element.naturalWidth,
                                                '" height="',
                                                this._element.height || this._element.height,
                                                '"',
                                                o,
                                                "></image>\n"
                                            ),
                                            this.stroke || this.strokeDashArray)
                                        ) {
                                            var a = this.fill;
                                            (this.fill = null), (t = ["\t<rect ", 'x="', r, '" y="', n, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '"/>\n']), (this.fill = a);
                                        }
                                        return "fill" !== this.paintFirst ? e.concat(t, i) : e.concat(i, t);
                                    },
                                    getSrc: function (t) {
                                        var e = t ? this._element : this._originalElement;
                                        return e ? (e.toDataURL ? e.toDataURL() : this.srcFromAttribute ? e.getAttribute("src") : e.src) : this.src || "";
                                    },
                                    setSrc: function (t, e, i) {
                                        return (
                                            P.util.loadImage(
                                                t,
                                                function (t) {
                                                    this.setElement(t, i), this._setWidthHeight(), e && e(this);
                                                },
                                                this,
                                                i && i.crossOrigin
                                            ),
                                            this
                                        );
                                    },
                                    toString: function () {
                                        return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
                                    },
                                    applyResizeFilters: function () {
                                        var t = this.resizeFilter,
                                            e = this.minimumScaleTrigger,
                                            i = this.getTotalObjectScaling(),
                                            r = i.scaleX,
                                            n = i.scaleY,
                                            o = this._filteredEl || this._originalElement;
                                        if ((this.group && this.set("dirty", !0), !t || (e < r && e < n)))
                                            return (this._element = o), (this._filterScalingX = 1), (this._filterScalingY = 1), (this._lastScaleX = r), void (this._lastScaleY = n);
                                        P.filterBackend || (P.filterBackend = P.initFilterBackend());
                                        var s = P.util.createCanvasElement(),
                                            a = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey,
                                            h = o.width,
                                            c = o.height;
                                        (s.width = h),
                                            (s.height = c),
                                            (this._element = s),
                                            (this._lastScaleX = t.scaleX = r),
                                            (this._lastScaleY = t.scaleY = n),
                                            P.filterBackend.applyFilters([t], o, h, c, this._element, a),
                                            (this._filterScalingX = s.width / this._originalElement.width),
                                            (this._filterScalingY = s.height / this._originalElement.height);
                                    },
                                    applyFilters: function (t) {
                                        if (
                                            ((t = (t = t || this.filters || []).filter(function (t) {
                                                return t && !t.isNeutralState();
                                            })),
                                            this.set("dirty", !0),
                                            this.removeTexture(this.cacheKey + "_filtered"),
                                            0 === t.length)
                                        )
                                            return (this._element = this._originalElement), (this._filteredEl = null), (this._filterScalingX = 1), (this._filterScalingY = 1), this;
                                        var e = this._originalElement,
                                            i = e.naturalWidth || e.width,
                                            r = e.naturalHeight || e.height;
                                        if (this._element === this._originalElement) {
                                            var n = P.util.createCanvasElement();
                                            (n.width = i), (n.height = r), (this._element = n), (this._filteredEl = n);
                                        } else (this._element = this._filteredEl), this._filteredEl.getContext("2d").clearRect(0, 0, i, r), (this._lastScaleX = 1), (this._lastScaleY = 1);
                                        return (
                                            P.filterBackend || (P.filterBackend = P.initFilterBackend()),
                                            P.filterBackend.applyFilters(t, this._originalElement, i, r, this._element, this.cacheKey),
                                            (this._originalElement.width === this._element.width && this._originalElement.height === this._element.height) ||
                                                ((this._filterScalingX = this._element.width / this._originalElement.width), (this._filterScalingY = this._element.height / this._originalElement.height)),
                                            this
                                        );
                                    },
                                    _render: function (t) {
                                        !0 !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t), this._renderPaintInOrder(t);
                                    },
                                    shouldCache: function () {
                                        return this.needsItsOwnCache();
                                    },
                                    _renderFill: function (t) {
                                        var e = this._element,
                                            i = this.width,
                                            r = this.height,
                                            n = Math.min(e.naturalWidth || e.width, i * this._filterScalingX),
                                            o = Math.min(e.naturalHeight || e.height, r * this._filterScalingY),
                                            s = -i / 2,
                                            a = -r / 2,
                                            h = Math.max(0, this.cropX * this._filterScalingX),
                                            c = Math.max(0, this.cropY * this._filterScalingY);
                                        e && t.drawImage(e, h, c, n, o, s, a, i, r);
                                    },
                                    _needsResize: function () {
                                        var t = this.getTotalObjectScaling();
                                        return t.scaleX !== this._lastScaleX || t.scaleY !== this._lastScaleY;
                                    },
                                    _resetWidthHeight: function () {
                                        this.set(this.getOriginalSize());
                                    },
                                    _initElement: function (t, e) {
                                        this.setElement(P.util.getById(t), e), P.util.addClass(this.getElement(), P.Image.CSS_CANVAS);
                                    },
                                    _initConfig: function (t) {
                                        t || (t = {}), this.setOptions(t), this._setWidthHeight(t), this._element && this.crossOrigin && (this._element.crossOrigin = this.crossOrigin);
                                    },
                                    _initFilters: function (t, e) {
                                        t && t.length
                                            ? P.util.enlivenObjects(
                                                  t,
                                                  function (t) {
                                                      e && e(t);
                                                  },
                                                  "fabric.Image.filters"
                                              )
                                            : e && e();
                                    },
                                    _setWidthHeight: function (t) {
                                        t || (t = {});
                                        var e = this.getElement();
                                        (this.width = t.width || e.naturalWidth || e.width || 0), (this.height = t.height || e.naturalHeight || e.height || 0);
                                    },
                                    parsePreserveAspectRatioAttribute: function () {
                                        var t,
                                            e = P.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""),
                                            i = this._element.width,
                                            r = this._element.height,
                                            n = 1,
                                            o = 1,
                                            s = 0,
                                            a = 0,
                                            h = 0,
                                            c = 0,
                                            l = this.width,
                                            u = this.height,
                                            f = { width: l, height: u };
                                        return (
                                            !e || ("none" === e.alignX && "none" === e.alignY)
                                                ? ((n = l / i), (o = u / r))
                                                : ("meet" === e.meetOrSlice &&
                                                      ((t = (l - i * (n = o = P.util.findScaleToFit(this._element, f))) / 2),
                                                      "Min" === e.alignX && (s = -t),
                                                      "Max" === e.alignX && (s = t),
                                                      (t = (u - r * o) / 2),
                                                      "Min" === e.alignY && (a = -t),
                                                      "Max" === e.alignY && (a = t)),
                                                  "slice" === e.meetOrSlice &&
                                                      ((t = i - l / (n = o = P.util.findScaleToCover(this._element, f))),
                                                      "Mid" === e.alignX && (h = t / 2),
                                                      "Max" === e.alignX && (h = t),
                                                      (t = r - u / o),
                                                      "Mid" === e.alignY && (c = t / 2),
                                                      "Max" === e.alignY && (c = t),
                                                      (i = l / n),
                                                      (r = u / o))),
                                            { width: i, height: r, scaleX: n, scaleY: o, offsetLeft: s, offsetTop: a, cropX: h, cropY: c }
                                        );
                                    },
                                })),
                                (P.Image.CSS_CANVAS = "canvas-img"),
                                (P.Image.prototype.getSvgSrc = P.Image.prototype.getSrc),
                                (P.Image.fromObject = function (t, e) {
                                    var i = P.util.object.clone(t);
                                    P.util.loadImage(
                                        i.src,
                                        function (t, r) {
                                            r
                                                ? e && e(null, r)
                                                : P.Image.prototype._initFilters.call(i, i.filters, function (r) {
                                                      (i.filters = r || []),
                                                          P.Image.prototype._initFilters.call(i, [i.resizeFilter], function (r) {
                                                              (i.resizeFilter = r[0]),
                                                                  P.util.enlivenObjects([i.clipPath], function (r) {
                                                                      i.clipPath = r[0];
                                                                      var n = new P.Image(t, i);
                                                                      e(n);
                                                                  });
                                                          });
                                                  });
                                        },
                                        null,
                                        i.crossOrigin
                                    );
                                }),
                                (P.Image.fromURL = function (t, e, i) {
                                    P.util.loadImage(
                                        t,
                                        function (t) {
                                            e && e(new P.Image(t, i));
                                        },
                                        null,
                                        i && i.crossOrigin
                                    );
                                }),
                                (P.Image.ATTRIBUTE_NAMES = P.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin".split(" "))),
                                (P.Image.fromElement = function (t, i, r) {
                                    var n = P.parseAttributes(t, P.Image.ATTRIBUTE_NAMES);
                                    P.Image.fromURL(n["xlink:href"], i, e(r ? P.util.object.clone(r) : {}, n));
                                }));
                  })(e),
                  P.util.object.extend(P.Object.prototype, {
                      _getAngleValueForStraighten: function () {
                          var t = this.angle % 360;
                          return 0 < t ? 90 * Math.round((t - 1) / 90) : 90 * Math.round(t / 90);
                      },
                      straighten: function () {
                          return this.rotate(this._getAngleValueForStraighten()), this;
                      },
                      fxStraighten: function (t) {
                          var e = function () {},
                              i = (t = t || {}).onComplete || e,
                              r = t.onChange || e,
                              n = this;
                          return (
                              P.util.animate({
                                  startValue: this.get("angle"),
                                  endValue: this._getAngleValueForStraighten(),
                                  duration: this.FX_DURATION,
                                  onChange: function (t) {
                                      n.rotate(t), r();
                                  },
                                  onComplete: function () {
                                      n.setCoords(), i();
                                  },
                              }),
                              this
                          );
                      },
                  }),
                  P.util.object.extend(P.StaticCanvas.prototype, {
                      straightenObject: function (t) {
                          return t.straighten(), this.requestRenderAll(), this;
                      },
                      fxStraightenObject: function (t) {
                          return t.fxStraighten({ onChange: this.requestRenderAllBound }), this;
                      },
                  }),
                  (function () {
                      "use strict";
                      (P.isWebglSupported = function (t) {
                          if (P.isLikelyNode) return !1;
                          t = t || P.WebglFilterBackend.prototype.tileSize;
                          var e,
                              i,
                              r,
                              n = document.createElement("canvas"),
                              o = n.getContext("webgl") || n.getContext("experimental-webgl"),
                              s = !1;
                          if (o) {
                              (P.maxTextureSize = o.getParameter(o.MAX_TEXTURE_SIZE)), (s = P.maxTextureSize >= t);
                              for (var a = ["highp", "mediump", "lowp"], h = 0; h < 3; h++)
                                  if (((i = "precision " + a[h] + " float;\nvoid main(){}"), (r = (e = o).createShader(e.FRAGMENT_SHADER)), e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS))) {
                                      P.webGlPrecision = a[h];
                                      break;
                                  }
                          }
                          return (this.isSupported = s);
                      }),
                          ((P.WebglFilterBackend = function (t) {
                              t && t.tileSize && (this.tileSize = t.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
                          }).prototype = {
                              tileSize: 2048,
                              resources: {},
                              setupGLContext: function (t, e) {
                                  this.dispose(), this.createWebGLCanvas(t, e), (this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])), this.chooseFastestCopyGLTo2DMethod(t, e);
                              },
                              chooseFastestCopyGLTo2DMethod: function (t, e) {
                                  var i,
                                      r = void 0 !== window.performance;
                                  try {
                                      new ImageData(1, 1), (i = !0);
                                  } catch (t) {
                                      i = !1;
                                  }
                                  var n = "undefined" != typeof ArrayBuffer,
                                      o = "undefined" != typeof Uint8ClampedArray;
                                  if (r && i && n && o) {
                                      var s = P.util.createCanvasElement(),
                                          a = new ArrayBuffer(t * e * 4);
                                      if (P.forceGLPutImageData) return (this.imageBuffer = a), void (this.copyGLTo2D = A);
                                      var h,
                                          c,
                                          l,
                                          u = { imageBuffer: a, destinationWidth: t, destinationHeight: e, targetCanvas: s };
                                      (s.width = t),
                                          (s.height = e),
                                          (h = window.performance.now()),
                                          j.call(u, this.gl, u),
                                          (c = window.performance.now() - h),
                                          (h = window.performance.now()),
                                          A.call(u, this.gl, u),
                                          (l = window.performance.now() - h),
                                          (this.copyGLTo2D = l < c ? ((this.imageBuffer = a), A) : j);
                                  }
                              },
                              createWebGLCanvas: function (t, e) {
                                  var i = P.util.createCanvasElement();
                                  (i.width = t), (i.height = e);
                                  var r = { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 },
                                      n = i.getContext("webgl", r);
                                  n || (n = i.getContext("experimental-webgl", r)), n && (n.clearColor(0, 0, 0, 0), (this.canvas = i), (this.gl = n));
                              },
                              applyFilters: function (t, e, i, r, n, o) {
                                  var s,
                                      a = this.gl;
                                  o && (s = this.getCachedTexture(o, e));
                                  var h,
                                      c,
                                      l,
                                      u,
                                      f,
                                      d,
                                      g = {
                                          originalWidth: e.width || e.originalWidth,
                                          originalHeight: e.height || e.originalHeight,
                                          sourceWidth: i,
                                          sourceHeight: r,
                                          destinationWidth: i,
                                          destinationHeight: r,
                                          context: a,
                                          sourceTexture: this.createTexture(a, i, r, !s && e),
                                          targetTexture: this.createTexture(a, i, r),
                                          originalTexture: s || this.createTexture(a, i, r, !s && e),
                                          passes: t.length,
                                          webgl: !0,
                                          aPosition: this.aPosition,
                                          programCache: this.programCache,
                                          pass: 0,
                                          filterBackend: this,
                                          targetCanvas: n,
                                      },
                                      p = a.createFramebuffer();
                                  return (
                                      a.bindFramebuffer(a.FRAMEBUFFER, p),
                                      t.forEach(function (t) {
                                          t && t.applyTo(g);
                                      }),
                                      (l = (c = (h = g).targetCanvas).width),
                                      (u = c.height),
                                      (d = h.destinationHeight),
                                      (l === (f = h.destinationWidth) && u === d) || ((c.width = f), (c.height = d)),
                                      this.copyGLTo2D(a, g),
                                      a.bindTexture(a.TEXTURE_2D, null),
                                      a.deleteTexture(g.sourceTexture),
                                      a.deleteTexture(g.targetTexture),
                                      a.deleteFramebuffer(p),
                                      n.getContext("2d").setTransform(1, 0, 0, 1, 0, 0),
                                      g
                                  );
                              },
                              dispose: function () {
                                  this.canvas && ((this.canvas = null), (this.gl = null)), this.clearWebGLCaches();
                              },
                              clearWebGLCaches: function () {
                                  (this.programCache = {}), (this.textureCache = {});
                              },
                              createTexture: function (t, e, i, r) {
                                  var n = t.createTexture();
                                  return (
                                      t.bindTexture(t.TEXTURE_2D, n),
                                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
                                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
                                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                      r ? t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r) : t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, i, 0, t.RGBA, t.UNSIGNED_BYTE, null),
                                      n
                                  );
                              },
                              getCachedTexture: function (t, e) {
                                  if (this.textureCache[t]) return this.textureCache[t];
                                  var i = this.createTexture(this.gl, e.width, e.height, e);
                                  return (this.textureCache[t] = i);
                              },
                              evictCachesForKey: function (t) {
                                  this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]), delete this.textureCache[t]);
                              },
                              copyGLTo2D: j,
                              captureGPUInfo: function () {
                                  if (this.gpuInfo) return this.gpuInfo;
                                  var t = this.gl,
                                      e = { renderer: "", vendor: "" };
                                  if (!t) return e;
                                  var i = t.getExtension("WEBGL_debug_renderer_info");
                                  if (i) {
                                      var r = t.getParameter(i.UNMASKED_RENDERER_WEBGL),
                                          n = t.getParameter(i.UNMASKED_VENDOR_WEBGL);
                                      r && (e.renderer = r.toLowerCase()), n && (e.vendor = n.toLowerCase());
                                  }
                                  return (this.gpuInfo = e);
                              },
                          });
                  })(),
                  (function () {
                      "use strict";
                      var t = function () {};
                      (P.Canvas2dFilterBackend = function () {}).prototype = {
                          evictCachesForKey: t,
                          dispose: t,
                          clearWebGLCaches: t,
                          resources: {},
                          applyFilters: function (t, e, i, r, n) {
                              var o = n.getContext("2d");
                              o.drawImage(e, 0, 0, i, r);
                              var s = { sourceWidth: i, sourceHeight: r, imageData: o.getImageData(0, 0, i, r), originalEl: e, originalImageData: o.getImageData(0, 0, i, r), canvasEl: n, ctx: o, filterBackend: this };
                              return (
                                  t.forEach(function (t) {
                                      t.applyTo(s);
                                  }),
                                  (s.imageData.width === i && s.imageData.height === r) || ((n.width = s.imageData.width), (n.height = s.imageData.height)),
                                  o.putImageData(s.imageData, 0, 0),
                                  s
                              );
                          },
                      };
                  })(),
                  (P.Image = P.Image || {}),
                  (P.Image.filters = P.Image.filters || {}),
                  (P.Image.filters.BaseFilter = P.util.createClass({
                      type: "BaseFilter",
                      vertexSource: "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                      fragmentSource: "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",
                      initialize: function (t) {
                          t && this.setOptions(t);
                      },
                      setOptions: function (t) {
                          for (var e in t) this[e] = t[e];
                      },
                      createProgram: function (t, e, i) {
                          (e = e || this.fragmentSource), (i = i || this.vertexSource), "highp" !== P.webGlPrecision && (e = e.replace(/precision highp float/g, "precision " + P.webGlPrecision + " float"));
                          var r = t.createShader(t.VERTEX_SHADER);
                          if ((t.shaderSource(r, i), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS))) throw new Error("Vertex shader compile error for " + this.type + ": " + t.getShaderInfoLog(r));
                          var n = t.createShader(t.FRAGMENT_SHADER);
                          if ((t.shaderSource(n, e), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS))) throw new Error("Fragment shader compile error for " + this.type + ": " + t.getShaderInfoLog(n));
                          var o = t.createProgram();
                          if ((t.attachShader(o, r), t.attachShader(o, n), t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS))) throw new Error('Shader link error for "${this.type}" ' + t.getProgramInfoLog(o));
                          var s = this.getAttributeLocations(t, o),
                              a = this.getUniformLocations(t, o) || {};
                          return (a.uStepW = t.getUniformLocation(o, "uStepW")), (a.uStepH = t.getUniformLocation(o, "uStepH")), { program: o, attributeLocations: s, uniformLocations: a };
                      },
                      getAttributeLocations: function (t, e) {
                          return { aPosition: t.getAttribLocation(e, "aPosition") };
                      },
                      getUniformLocations: function () {
                          return {};
                      },
                      sendAttributeData: function (t, e, i) {
                          var r = e.aPosition,
                              n = t.createBuffer();
                          t.bindBuffer(t.ARRAY_BUFFER, n), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW);
                      },
                      _setupFrameBuffer: function (t) {
                          var e,
                              i,
                              r = t.context;
                          1 < t.passes
                              ? ((e = t.destinationWidth),
                                (i = t.destinationHeight),
                                (t.sourceWidth === e && t.sourceHeight === i) || (r.deleteTexture(t.targetTexture), (t.targetTexture = t.filterBackend.createTexture(r, e, i))),
                                r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t.targetTexture, 0))
                              : (r.bindFramebuffer(r.FRAMEBUFFER, null), r.finish());
                      },
                      _swapTextures: function (t) {
                          t.passes--, t.pass++;
                          var e = t.targetTexture;
                          (t.targetTexture = t.sourceTexture), (t.sourceTexture = e);
                      },
                      isNeutralState: function () {
                          var t = this.mainParameter,
                              e = P.Image.filters[this.type].prototype;
                          if (t) {
                              if (Array.isArray(e[t])) {
                                  for (var i = e[t].length; i--; ) if (this[t][i] !== e[t][i]) return !1;
                                  return !0;
                              }
                              return e[t] === this[t];
                          }
                          return !1;
                      },
                      applyTo: function (t) {
                          t.webgl ? (this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t);
                      },
                      retrieveShader: function (t) {
                          return t.programCache.hasOwnProperty(this.type) || (t.programCache[this.type] = this.createProgram(t.context)), t.programCache[this.type];
                      },
                      applyToWebGL: function (t) {
                          var e = t.context,
                              i = this.retrieveShader(t);
                          0 === t.pass && t.originalTexture ? e.bindTexture(e.TEXTURE_2D, t.originalTexture) : e.bindTexture(e.TEXTURE_2D, t.sourceTexture),
                              e.useProgram(i.program),
                              this.sendAttributeData(e, i.attributeLocations, t.aPosition),
                              e.uniform1f(i.uniformLocations.uStepW, 1 / t.sourceWidth),
                              e.uniform1f(i.uniformLocations.uStepH, 1 / t.sourceHeight),
                              this.sendUniformData(e, i.uniformLocations),
                              e.viewport(0, 0, t.destinationWidth, t.destinationHeight),
                              e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
                      },
                      bindAdditionalTexture: function (t, e, i) {
                          t.activeTexture(i), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE0);
                      },
                      unbindAdditionalTexture: function (t, e) {
                          t.activeTexture(e), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE0);
                      },
                      getMainParameter: function () {
                          return this[this.mainParameter];
                      },
                      setMainParameter: function (t) {
                          this[this.mainParameter] = t;
                      },
                      sendUniformData: function () {},
                      createHelpLayer: function (t) {
                          if (!t.helpLayer) {
                              var e = document.createElement("canvas");
                              (e.width = t.sourceWidth), (e.height = t.sourceHeight), (t.helpLayer = e);
                          }
                      },
                      toObject: function () {
                          var t = { type: this.type },
                              e = this.mainParameter;
                          return e && (t[e] = this[e]), t;
                      },
                      toJSON: function () {
                          return this.toObject();
                      },
                  })),
                  (P.Image.filters.BaseFilter.fromObject = function (t, e) {
                      var i = new P.Image.filters[t.type](t);
                      return e && e(i), i;
                  }),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.ColorMatrix = r(i.BaseFilter, {
                          type: "ColorMatrix",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",
                          matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                          mainParameter: "matrix",
                          colorsOnly: !0,
                          initialize: function (t) {
                              this.callSuper("initialize", t), (this.matrix = this.matrix.slice(0));
                          },
                          applyTo2d: function (t) {
                              var e,
                                  i,
                                  r,
                                  n,
                                  o,
                                  s = t.imageData.data,
                                  a = s.length,
                                  h = this.matrix,
                                  c = this.colorsOnly;
                              for (o = 0; o < a; o += 4)
                                  (e = s[o]),
                                      (i = s[o + 1]),
                                      (r = s[o + 2]),
                                      c
                                          ? ((s[o] = e * h[0] + i * h[1] + r * h[2] + 255 * h[4]), (s[o + 1] = e * h[5] + i * h[6] + r * h[7] + 255 * h[9]), (s[o + 2] = e * h[10] + i * h[11] + r * h[12] + 255 * h[14]))
                                          : ((n = s[o + 3]),
                                            (s[o] = e * h[0] + i * h[1] + r * h[2] + n * h[3] + 255 * h[4]),
                                            (s[o + 1] = e * h[5] + i * h[6] + r * h[7] + n * h[8] + 255 * h[9]),
                                            (s[o + 2] = e * h[10] + i * h[11] + r * h[12] + n * h[13] + 255 * h[14]),
                                            (s[o + 3] = e * h[15] + i * h[16] + r * h[17] + n * h[18] + 255 * h[19]));
                          },
                          getUniformLocations: function (t, e) {
                              return { uColorMatrix: t.getUniformLocation(e, "uColorMatrix"), uConstants: t.getUniformLocation(e, "uConstants") };
                          },
                          sendUniformData: function (t, e) {
                              var i = this.matrix,
                                  r = [i[0], i[1], i[2], i[3], i[5], i[6], i[7], i[8], i[10], i[11], i[12], i[13], i[15], i[16], i[17], i[18]],
                                  n = [i[4], i[9], i[14], i[19]];
                              t.uniformMatrix4fv(e.uColorMatrix, !1, r), t.uniform4fv(e.uConstants, n);
                          },
                      })),
                          (e.Image.filters.ColorMatrix.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Brightness = r(i.BaseFilter, {
                          type: "Brightness",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",
                          brightness: 0,
                          mainParameter: "brightness",
                          applyTo2d: function (t) {
                              if (0 !== this.brightness) {
                                  var e,
                                      i = t.imageData.data,
                                      r = i.length,
                                      n = Math.round(255 * this.brightness);
                                  for (e = 0; e < r; e += 4) (i[e] = i[e] + n), (i[e + 1] = i[e + 1] + n), (i[e + 2] = i[e + 2] + n);
                              }
                          },
                          getUniformLocations: function (t, e) {
                              return { uBrightness: t.getUniformLocation(e, "uBrightness") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1f(e.uBrightness, this.brightness);
                          },
                      })),
                          (e.Image.filters.Brightness.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend,
                          r = e.Image.filters,
                          n = e.util.createClass;
                      (r.Convolute = n(r.BaseFilter, {
                          type: "Convolute",
                          opaque: !1,
                          matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
                          fragmentSource: {
                              Convolute_3_1:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                              Convolute_3_0:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                              Convolute_5_1:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                              Convolute_5_0:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                              Convolute_7_1:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                              Convolute_7_0:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                              Convolute_9_1:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                              Convolute_9_0:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                          },
                          retrieveShader: function (t) {
                              var e = Math.sqrt(this.matrix.length),
                                  i = this.type + "_" + e + "_" + (this.opaque ? 1 : 0),
                                  r = this.fragmentSource[i];
                              return t.programCache.hasOwnProperty(i) || (t.programCache[i] = this.createProgram(t.context, r)), t.programCache[i];
                          },
                          applyTo2d: function (t) {
                              var e,
                                  i,
                                  r,
                                  n,
                                  o,
                                  s,
                                  a,
                                  h,
                                  c,
                                  l,
                                  u,
                                  f,
                                  d,
                                  g = t.imageData,
                                  p = g.data,
                                  v = this.matrix,
                                  m = Math.round(Math.sqrt(v.length)),
                                  _ = Math.floor(m / 2),
                                  y = g.width,
                                  b = g.height,
                                  x = t.ctx.createImageData(y, b),
                                  C = x.data,
                                  S = this.opaque ? 1 : 0;
                              for (u = 0; u < b; u++)
                                  for (l = 0; l < y; l++) {
                                      for (o = 4 * (u * y + l), d = n = r = i = e = 0; d < m; d++)
                                          for (f = 0; f < m; f++)
                                              (s = l + f - _),
                                                  (a = u + d - _) < 0 || b < a || s < 0 || y < s || ((h = 4 * (a * y + s)), (c = v[d * m + f]), (e += p[h] * c), (i += p[h + 1] * c), (r += p[h + 2] * c), S || (n += p[h + 3] * c));
                                      (C[o] = e), (C[o + 1] = i), (C[o + 2] = r), (C[o + 3] = S ? p[o + 3] : n);
                                  }
                              t.imageData = x;
                          },
                          getUniformLocations: function (t, e) {
                              return { uMatrix: t.getUniformLocation(e, "uMatrix"), uOpaque: t.getUniformLocation(e, "uOpaque"), uHalfSize: t.getUniformLocation(e, "uHalfSize"), uSize: t.getUniformLocation(e, "uSize") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1fv(e.uMatrix, this.matrix);
                          },
                          toObject: function () {
                              return i(this.callSuper("toObject"), { opaque: this.opaque, matrix: this.matrix });
                          },
                      })),
                          (e.Image.filters.Convolute.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Grayscale = r(i.BaseFilter, {
                          type: "Grayscale",
                          fragmentSource: {
                              average:
                                  "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",
                              lightness:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                              luminosity:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                          },
                          mode: "average",
                          mainParameter: "mode",
                          applyTo2d: function (t) {
                              var e,
                                  i,
                                  r = t.imageData.data,
                                  n = r.length,
                                  o = this.mode;
                              for (e = 0; e < n; e += 4)
                                  "average" === o
                                      ? (i = (r[e] + r[e + 1] + r[e + 2]) / 3)
                                      : "lightness" === o
                                      ? (i = (Math.min(r[e], r[e + 1], r[e + 2]) + Math.max(r[e], r[e + 1], r[e + 2])) / 2)
                                      : "luminosity" === o && (i = 0.21 * r[e] + 0.72 * r[e + 1] + 0.07 * r[e + 2]),
                                      (r[e] = i),
                                      (r[e + 1] = i),
                                      (r[e + 2] = i);
                          },
                          retrieveShader: function (t) {
                              var e = this.type + "_" + this.mode;
                              if (!t.programCache.hasOwnProperty(e)) {
                                  var i = this.fragmentSource[this.mode];
                                  t.programCache[e] = this.createProgram(t.context, i);
                              }
                              return t.programCache[e];
                          },
                          getUniformLocations: function (t, e) {
                              return { uMode: t.getUniformLocation(e, "uMode") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1i(e.uMode, 1);
                          },
                          isNeutralState: function () {
                              return !1;
                          },
                      })),
                          (e.Image.filters.Grayscale.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Invert = r(i.BaseFilter, {
                          type: "Invert",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",
                          invert: !0,
                          mainParameter: "invert",
                          applyTo2d: function (t) {
                              var e,
                                  i = t.imageData.data,
                                  r = i.length;
                              for (e = 0; e < r; e += 4) (i[e] = 255 - i[e]), (i[e + 1] = 255 - i[e + 1]), (i[e + 2] = 255 - i[e + 2]);
                          },
                          isNeutralState: function () {
                              return !this.invert;
                          },
                          getUniformLocations: function (t, e) {
                              return { uInvert: t.getUniformLocation(e, "uInvert") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1i(e.uInvert, this.invert);
                          },
                      })),
                          (e.Image.filters.Invert.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend,
                          r = e.Image.filters,
                          n = e.util.createClass;
                      (r.Noise = n(r.BaseFilter, {
                          type: "Noise",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",
                          mainParameter: "noise",
                          noise: 0,
                          applyTo2d: function (t) {
                              if (0 !== this.noise) {
                                  var e,
                                      i,
                                      r = t.imageData.data,
                                      n = r.length,
                                      o = this.noise;
                                  for (e = 0, n = r.length; e < n; e += 4) (i = (0.5 - Math.random()) * o), (r[e] += i), (r[e + 1] += i), (r[e + 2] += i);
                              }
                          },
                          getUniformLocations: function (t, e) {
                              return { uNoise: t.getUniformLocation(e, "uNoise"), uSeed: t.getUniformLocation(e, "uSeed") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1f(e.uNoise, this.noise / 255), t.uniform1f(e.uSeed, Math.random());
                          },
                          toObject: function () {
                              return i(this.callSuper("toObject"), { noise: this.noise });
                          },
                      })),
                          (e.Image.filters.Noise.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Pixelate = r(i.BaseFilter, {
                          type: "Pixelate",
                          blocksize: 4,
                          mainParameter: "blocksize",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",
                          applyTo2d: function (t) {
                              var e,
                                  i,
                                  r,
                                  n,
                                  o,
                                  s,
                                  a,
                                  h,
                                  c,
                                  l,
                                  u,
                                  f = t.imageData,
                                  d = f.data,
                                  g = f.height,
                                  p = f.width;
                              for (i = 0; i < g; i += this.blocksize)
                                  for (r = 0; r < p; r += this.blocksize)
                                      for (n = d[(e = 4 * i * p + 4 * r)], o = d[e + 1], s = d[e + 2], a = d[e + 3], l = Math.min(i + this.blocksize, g), u = Math.min(r + this.blocksize, p), h = i; h < l; h++)
                                          for (c = r; c < u; c++) (d[(e = 4 * h * p + 4 * c)] = n), (d[e + 1] = o), (d[e + 2] = s), (d[e + 3] = a);
                          },
                          isNeutralState: function () {
                              return 1 === this.blocksize;
                          },
                          getUniformLocations: function (t, e) {
                              return { uBlocksize: t.getUniformLocation(e, "uBlocksize"), uStepW: t.getUniformLocation(e, "uStepW"), uStepH: t.getUniformLocation(e, "uStepH") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1f(e.uBlocksize, this.blocksize);
                          },
                      })),
                          (e.Image.filters.Pixelate.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.extend,
                          r = e.Image.filters,
                          n = e.util.createClass;
                      (r.RemoveColor = n(r.BaseFilter, {
                          type: "RemoveColor",
                          color: "#FFFFFF",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",
                          distance: 0.02,
                          useAlpha: !1,
                          applyTo2d: function (t) {
                              var i,
                                  r,
                                  n,
                                  o,
                                  s = t.imageData.data,
                                  a = 255 * this.distance,
                                  h = new e.Color(this.color).getSource(),
                                  c = [h[0] - a, h[1] - a, h[2] - a],
                                  l = [h[0] + a, h[1] + a, h[2] + a];
                              for (i = 0; i < s.length; i += 4) (r = s[i]), (n = s[i + 1]), (o = s[i + 2]), c[0] < r && c[1] < n && c[2] < o && r < l[0] && n < l[1] && o < l[2] && (s[i + 3] = 0);
                          },
                          getUniformLocations: function (t, e) {
                              return { uLow: t.getUniformLocation(e, "uLow"), uHigh: t.getUniformLocation(e, "uHigh") };
                          },
                          sendUniformData: function (t, i) {
                              var r = new e.Color(this.color).getSource(),
                                  n = parseFloat(this.distance),
                                  o = [0 + r[0] / 255 - n, 0 + r[1] / 255 - n, 0 + r[2] / 255 - n, 1],
                                  s = [r[0] / 255 + n, r[1] / 255 + n, r[2] / 255 + n, 1];
                              t.uniform4fv(i.uLow, o), t.uniform4fv(i.uHigh, s);
                          },
                          toObject: function () {
                              return i(this.callSuper("toObject"), { color: this.color, distance: this.distance });
                          },
                      })),
                          (e.Image.filters.RemoveColor.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass,
                          n = {
                              Brownie: [0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965, 0, 0, 0, 1, 0],
                              Vintage: [0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0, 0, 0, 1, 0],
                              Kodachrome: [1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972, 0, 0, 0, 1, 0],
                              Technicolor: [1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137, 0, 0, 0, 1, 0],
                              Polaroid: [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0],
                              Sepia: [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0],
                              BlackWhite: [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0],
                          };
                      for (var o in n) (i[o] = r(i.ColorMatrix, { type: o, matrix: n[o], mainParameter: !1, colorsOnly: !0 })), (e.Image.filters[o].fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var i = e.fabric,
                          r = i.Image.filters,
                          n = i.util.createClass;
                      (r.BlendColor = n(r.BaseFilter, {
                          type: "BlendColor",
                          color: "#F95C63",
                          mode: "multiply",
                          alpha: 1,
                          fragmentSource: {
                              multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
                              screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
                              add: "gl_FragColor.rgb += uColor.rgb;\n",
                              diff: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
                              subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
                              lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
                              darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
                              exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
                              overlay:
                                  "if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n",
                              tint: "gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n",
                          },
                          buildSource: function (t) {
                              return (
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n" +
                                  this.fragmentSource[t] +
                                  "}\n}"
                              );
                          },
                          retrieveShader: function (t) {
                              var e,
                                  i = this.type + "_" + this.mode;
                              return t.programCache.hasOwnProperty(i) || ((e = this.buildSource(this.mode)), (t.programCache[i] = this.createProgram(t.context, e))), t.programCache[i];
                          },
                          applyTo2d: function (t) {
                              var e,
                                  r,
                                  n,
                                  o,
                                  s,
                                  a,
                                  h,
                                  c = t.imageData.data,
                                  l = c.length,
                                  u = 1 - this.alpha;
                              (e = (h = new i.Color(this.color).getSource())[0] * this.alpha), (r = h[1] * this.alpha), (n = h[2] * this.alpha);
                              for (var f = 0; f < l; f += 4)
                                  switch (((o = c[f]), (s = c[f + 1]), (a = c[f + 2]), this.mode)) {
                                      case "multiply":
                                          (c[f] = (o * e) / 255), (c[f + 1] = (s * r) / 255), (c[f + 2] = (a * n) / 255);
                                          break;
                                      case "screen":
                                          (c[f] = 255 - ((255 - o) * (255 - e)) / 255), (c[f + 1] = 255 - ((255 - s) * (255 - r)) / 255), (c[f + 2] = 255 - ((255 - a) * (255 - n)) / 255);
                                          break;
                                      case "add":
                                          (c[f] = o + e), (c[f + 1] = s + r), (c[f + 2] = a + n);
                                          break;
                                      case "diff":
                                      case "difference":
                                          (c[f] = Math.abs(o - e)), (c[f + 1] = Math.abs(s - r)), (c[f + 2] = Math.abs(a - n));
                                          break;
                                      case "subtract":
                                          (c[f] = o - e), (c[f + 1] = s - r), (c[f + 2] = a - n);
                                          break;
                                      case "darken":
                                          (c[f] = Math.min(o, e)), (c[f + 1] = Math.min(s, r)), (c[f + 2] = Math.min(a, n));
                                          break;
                                      case "lighten":
                                          (c[f] = Math.max(o, e)), (c[f + 1] = Math.max(s, r)), (c[f + 2] = Math.max(a, n));
                                          break;
                                      case "overlay":
                                          (c[f] = e < 128 ? (2 * o * e) / 255 : 255 - (2 * (255 - o) * (255 - e)) / 255),
                                              (c[f + 1] = r < 128 ? (2 * s * r) / 255 : 255 - (2 * (255 - s) * (255 - r)) / 255),
                                              (c[f + 2] = n < 128 ? (2 * a * n) / 255 : 255 - (2 * (255 - a) * (255 - n)) / 255);
                                          break;
                                      case "exclusion":
                                          (c[f] = e + o - (2 * e * o) / 255), (c[f + 1] = r + s - (2 * r * s) / 255), (c[f + 2] = n + a - (2 * n * a) / 255);
                                          break;
                                      case "tint":
                                          (c[f] = e + o * u), (c[f + 1] = r + s * u), (c[f + 2] = n + a * u);
                                  }
                          },
                          getUniformLocations: function (t, e) {
                              return { uColor: t.getUniformLocation(e, "uColor") };
                          },
                          sendUniformData: function (t, e) {
                              var r = new i.Color(this.color).getSource();
                              (r[0] = (this.alpha * r[0]) / 255), (r[1] = (this.alpha * r[1]) / 255), (r[2] = (this.alpha * r[2]) / 255), (r[3] = this.alpha), t.uniform4fv(e.uColor, r);
                          },
                          toObject: function () {
                              return { type: this.type, color: this.color, mode: this.mode, alpha: this.alpha };
                          },
                      })),
                          (i.Image.filters.BlendColor.fromObject = i.Image.filters.BaseFilter.fromObject);
                  })(),
                  (function (t) {
                      "use strict";
                      var i = e.fabric,
                          r = i.Image.filters,
                          n = i.util.createClass;
                      (r.BlendImage = n(r.BaseFilter, {
                          type: "BlendImage",
                          image: null,
                          mode: "multiply",
                          alpha: 1,
                          vertexSource:
                              "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                          fragmentSource: {
                              multiply:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",
                              mask:
                                  "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}",
                          },
                          retrieveShader: function (t) {
                              var e = this.type + "_" + this.mode,
                                  i = this.fragmentSource[this.mode];
                              return t.programCache.hasOwnProperty(e) || (t.programCache[e] = this.createProgram(t.context, i)), t.programCache[e];
                          },
                          applyToWebGL: function (t) {
                              var e = t.context,
                                  i = this.createTexture(t.filterBackend, this.image);
                              this.bindAdditionalTexture(e, i, e.TEXTURE1), this.callSuper("applyToWebGL", t), this.unbindAdditionalTexture(e, e.TEXTURE1);
                          },
                          createTexture: function (t, e) {
                              return t.getCachedTexture(e.cacheKey, e._element);
                          },
                          calculateMatrix: function () {
                              var t = this.image,
                                  e = t._element.width,
                                  i = t._element.height;
                              return [1 / t.scaleX, 0, 0, 0, 1 / t.scaleY, 0, -t.left / e, -t.top / i, 1];
                          },
                          applyTo2d: function (t) {
                              var e,
                                  r,
                                  n,
                                  o,
                                  s,
                                  a,
                                  h,
                                  c,
                                  l,
                                  u,
                                  f,
                                  d = t.imageData,
                                  g = t.filterBackend.resources,
                                  p = d.data,
                                  v = p.length,
                                  m = d.width,
                                  _ = d.height,
                                  y = this.image;
                              g.blendImage || (g.blendImage = i.util.createCanvasElement()),
                                  (u = (l = g.blendImage).getContext("2d")),
                                  l.width !== m || l.height !== _ ? ((l.width = m), (l.height = _)) : u.clearRect(0, 0, m, _),
                                  u.setTransform(y.scaleX, 0, 0, y.scaleY, y.left, y.top),
                                  u.drawImage(y._element, 0, 0, m, _),
                                  (f = u.getImageData(0, 0, m, _).data);
                              for (var b = 0; b < v; b += 4)
                                  switch (((s = p[b]), (a = p[b + 1]), (h = p[b + 2]), (c = p[b + 3]), (e = f[b]), (r = f[b + 1]), (n = f[b + 2]), (o = f[b + 3]), this.mode)) {
                                      case "multiply":
                                          (p[b] = (s * e) / 255), (p[b + 1] = (a * r) / 255), (p[b + 2] = (h * n) / 255), (p[b + 3] = (c * o) / 255);
                                          break;
                                      case "mask":
                                          p[b + 3] = o;
                                  }
                          },
                          getUniformLocations: function (t, e) {
                              return { uTransformMatrix: t.getUniformLocation(e, "uTransformMatrix"), uImage: t.getUniformLocation(e, "uImage") };
                          },
                          sendUniformData: function (t, e) {
                              var i = this.calculateMatrix();
                              t.uniform1i(e.uImage, 1), t.uniformMatrix3fv(e.uTransformMatrix, !1, i);
                          },
                          toObject: function () {
                              return { type: this.type, image: this.image && this.image.toObject(), mode: this.mode, alpha: this.alpha };
                          },
                      })),
                          (i.Image.filters.BlendImage.fromObject = function (t, e) {
                              i.Image.fromObject(t.image, function (r) {
                                  var n = i.util.object.clone(t);
                                  (n.image = r), e(new i.Image.filters.BlendImage(n));
                              });
                          });
                  })(),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = Math.pow,
                          r = Math.floor,
                          n = Math.sqrt,
                          o = Math.abs,
                          s = Math.round,
                          a = Math.sin,
                          h = Math.ceil,
                          c = e.Image.filters,
                          l = e.util.createClass;
                      (c.Resize = l(c.BaseFilter, {
                          type: "Resize",
                          resizeType: "hermite",
                          scaleX: 1,
                          scaleY: 1,
                          lanczosLobes: 3,
                          getUniformLocations: function (t, e) {
                              return { uDelta: t.getUniformLocation(e, "uDelta"), uTaps: t.getUniformLocation(e, "uTaps") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform2fv(e.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), t.uniform1fv(e.uTaps, this.taps);
                          },
                          retrieveShader: function (t) {
                              var e = this.getFilterWindow(),
                                  i = this.type + "_" + e;
                              if (!t.programCache.hasOwnProperty(i)) {
                                  var r = this.generateShader(e);
                                  t.programCache[i] = this.createProgram(t.context, r);
                              }
                              return t.programCache[i];
                          },
                          getFilterWindow: function () {
                              var t = this.tempScale;
                              return Math.ceil(this.lanczosLobes / t);
                          },
                          getTaps: function () {
                              for (var t = this.lanczosCreate(this.lanczosLobes), e = this.tempScale, i = this.getFilterWindow(), r = new Array(i), n = 1; n <= i; n++) r[n - 1] = t(n * e);
                              return r;
                          },
                          generateShader: function (t) {
                              for (var e = new Array(t), i = this.fragmentSourceTOP, r = 1; r <= t; r++) e[r - 1] = r + ".0 * uDelta";
                              return (
                                  (i += "uniform float uTaps[" + t + "];\n"),
                                  (i += "void main() {\n"),
                                  (i += "  vec4 color = texture2D(uTexture, vTexCoord);\n"),
                                  (i += "  float sum = 1.0;\n"),
                                  e.forEach(function (t, e) {
                                      (i += "  color += texture2D(uTexture, vTexCoord + " + t + ") * uTaps[" + e + "];\n"),
                                          (i += "  color += texture2D(uTexture, vTexCoord - " + t + ") * uTaps[" + e + "];\n"),
                                          (i += "  sum += 2.0 * uTaps[" + e + "];\n");
                                  }),
                                  (i += "  gl_FragColor = color / sum;\n"),
                                  (i += "}")
                              );
                          },
                          fragmentSourceTOP: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",
                          applyTo: function (t) {
                              t.webgl
                                  ? (t.passes++,
                                    (this.width = t.sourceWidth),
                                    (this.horizontal = !0),
                                    (this.dW = Math.round(this.width * this.scaleX)),
                                    (this.dH = t.sourceHeight),
                                    (this.tempScale = this.dW / this.width),
                                    (this.taps = this.getTaps()),
                                    (t.destinationWidth = this.dW),
                                    this._setupFrameBuffer(t),
                                    this.applyToWebGL(t),
                                    this._swapTextures(t),
                                    (t.sourceWidth = t.destinationWidth),
                                    (this.height = t.sourceHeight),
                                    (this.horizontal = !1),
                                    (this.dH = Math.round(this.height * this.scaleY)),
                                    (this.tempScale = this.dH / this.height),
                                    (this.taps = this.getTaps()),
                                    (t.destinationHeight = this.dH),
                                    this._setupFrameBuffer(t),
                                    this.applyToWebGL(t),
                                    this._swapTextures(t),
                                    (t.sourceHeight = t.destinationHeight))
                                  : this.applyTo2d(t);
                          },
                          isNeutralState: function () {
                              return 1 === this.scaleX && 1 === this.scaleY;
                          },
                          lanczosCreate: function (t) {
                              return function (e) {
                                  if (t <= e || e <= -t) return 0;
                                  if (e < 1.1920929e-7 && -1.1920929e-7 < e) return 1;
                                  var i = (e *= Math.PI) / t;
                                  return ((a(e) / e) * a(i)) / i;
                              };
                          },
                          applyTo2d: function (t) {
                              var e = t.imageData,
                                  i = this.scaleX,
                                  r = this.scaleY;
                              (this.rcpScaleX = 1 / i), (this.rcpScaleY = 1 / r);
                              var n,
                                  o = e.width,
                                  a = e.height,
                                  h = s(o * i),
                                  c = s(a * r);
                              "sliceHack" === this.resizeType
                                  ? (n = this.sliceByTwo(t, o, a, h, c))
                                  : "hermite" === this.resizeType
                                  ? (n = this.hermiteFastResize(t, o, a, h, c))
                                  : "bilinear" === this.resizeType
                                  ? (n = this.bilinearFiltering(t, o, a, h, c))
                                  : "lanczos" === this.resizeType && (n = this.lanczosResize(t, o, a, h, c)),
                                  (t.imageData = n);
                          },
                          sliceByTwo: function (t, i, n, o, s) {
                              var a,
                                  h,
                                  c = t.imageData,
                                  l = !1,
                                  u = !1,
                                  f = 0.5 * i,
                                  d = 0.5 * n,
                                  g = e.filterBackend.resources,
                                  p = 0,
                                  v = 0,
                                  m = i,
                                  _ = 0;
                              for (
                                  g.sliceByTwo || (g.sliceByTwo = document.createElement("canvas")),
                                      ((a = g.sliceByTwo).width < 1.5 * i || a.height < n) && ((a.width = 1.5 * i), (a.height = n)),
                                      (h = a.getContext("2d")).clearRect(0, 0, 1.5 * i, n),
                                      h.putImageData(c, 0, 0),
                                      o = r(o),
                                      s = r(s);
                                  !l || !u;

                              )
                                  (n = d), o < r(0.5 * (i = f)) ? (f = r(0.5 * f)) : ((f = o), (l = !0)), s < r(0.5 * d) ? (d = r(0.5 * d)) : ((d = s), (u = !0)), h.drawImage(a, p, v, i, n, m, _, f, d), (p = m), (v = _), (_ += d);
                              return h.getImageData(p, v, o, s);
                          },
                          lanczosResize: function (t, e, s, a, c) {
                              var l = t.imageData.data,
                                  u = t.ctx.createImageData(a, c),
                                  f = u.data,
                                  d = this.lanczosCreate(this.lanczosLobes),
                                  g = this.rcpScaleX,
                                  p = this.rcpScaleY,
                                  v = 2 / this.rcpScaleX,
                                  m = 2 / this.rcpScaleY,
                                  _ = h((g * this.lanczosLobes) / 2),
                                  y = h((p * this.lanczosLobes) / 2),
                                  b = {},
                                  x = {},
                                  C = {};
                              return (function t(h) {
                                  var S, w, T, O, k, P, E, j, A, D, M;
                                  for (x.x = (h + 0.5) * g, C.x = r(x.x), S = 0; S < c; S++) {
                                      for (x.y = (S + 0.5) * p, C.y = r(x.y), A = j = E = P = k = 0, w = C.x - _; w <= C.x + _; w++)
                                          if (!(w < 0 || e <= w)) {
                                              (D = r(1e3 * o(w - x.x))), b[D] || (b[D] = {});
                                              for (var F = C.y - y; F <= C.y + y; F++)
                                                  F < 0 ||
                                                      s <= F ||
                                                      ((M = r(1e3 * o(F - x.y))),
                                                      b[D][M] || (b[D][M] = d(n(i(D * v, 2) + i(M * m, 2)) / 1e3)),
                                                      0 < (T = b[D][M]) && ((k += T), (P += T * l[(O = 4 * (F * e + w))]), (E += T * l[O + 1]), (j += T * l[O + 2]), (A += T * l[O + 3])));
                                          }
                                      (f[(O = 4 * (S * a + h))] = P / k), (f[O + 1] = E / k), (f[O + 2] = j / k), (f[O + 3] = A / k);
                                  }
                                  return ++h < a ? t(h) : u;
                              })(0);
                          },
                          bilinearFiltering: function (t, e, i, n, o) {
                              var s,
                                  a,
                                  h,
                                  c,
                                  l,
                                  u,
                                  f,
                                  d,
                                  g,
                                  p = 0,
                                  v = this.rcpScaleX,
                                  m = this.rcpScaleY,
                                  _ = 4 * (e - 1),
                                  y = t.imageData.data,
                                  b = t.ctx.createImageData(n, o),
                                  x = b.data;
                              for (h = 0; h < o; h++)
                                  for (c = 0; c < n; c++)
                                      for (l = v * c - (s = r(v * c)), u = m * h - (a = r(m * h)), g = 4 * (a * e + s), f = 0; f < 4; f++)
                                          (d = y[g + f] * (1 - l) * (1 - u) + y[g + 4 + f] * l * (1 - u) + y[g + _ + f] * u * (1 - l) + y[g + _ + 4 + f] * l * u), (x[p++] = d);
                              return b;
                          },
                          hermiteFastResize: function (t, e, i, s, a) {
                              for (var c = this.rcpScaleX, l = this.rcpScaleY, u = h(c / 2), f = h(l / 2), d = t.imageData.data, g = t.ctx.createImageData(s, a), p = g.data, v = 0; v < a; v++)
                                  for (var m = 0; m < s; m++) {
                                      for (var _ = 4 * (m + v * s), y = 0, b = 0, x = 0, C = 0, S = 0, w = 0, T = 0, O = (v + 0.5) * l, k = r(v * l); k < (v + 1) * l; k++)
                                          for (var P = o(O - (k + 0.5)) / f, E = (m + 0.5) * c, j = P * P, A = r(m * c); A < (m + 1) * c; A++) {
                                              var D = o(E - (A + 0.5)) / u,
                                                  M = n(j + D * D);
                                              (1 < M && M < -1) ||
                                                  (0 < (y = 2 * M * M * M - 3 * M * M + 1) &&
                                                      ((T += y * d[3 + (D = 4 * (A + k * e))]), (x += y), d[D + 3] < 255 && (y = (y * d[D + 3]) / 250), (C += y * d[D]), (S += y * d[D + 1]), (w += y * d[D + 2]), (b += y)));
                                          }
                                      (p[_] = C / b), (p[_ + 1] = S / b), (p[_ + 2] = w / b), (p[_ + 3] = T / x);
                                  }
                              return g;
                          },
                          toObject: function () {
                              return { type: this.type, scaleX: this.scaleX, scaleY: this.scaleY, resizeType: this.resizeType, lanczosLobes: this.lanczosLobes };
                          },
                      })),
                          (e.Image.filters.Resize.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Contrast = r(i.BaseFilter, {
                          type: "Contrast",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",
                          contrast: 0,
                          mainParameter: "contrast",
                          applyTo2d: function (t) {
                              if (0 !== this.contrast) {
                                  var e,
                                      i = t.imageData.data,
                                      r = i.length,
                                      n = Math.floor(255 * this.contrast),
                                      o = (259 * (n + 255)) / (255 * (259 - n));
                                  for (e = 0; e < r; e += 4) (i[e] = o * (i[e] - 128) + 128), (i[e + 1] = o * (i[e + 1] - 128) + 128), (i[e + 2] = o * (i[e + 2] - 128) + 128);
                              }
                          },
                          getUniformLocations: function (t, e) {
                              return { uContrast: t.getUniformLocation(e, "uContrast") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1f(e.uContrast, this.contrast);
                          },
                      })),
                          (e.Image.filters.Contrast.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Saturation = r(i.BaseFilter, {
                          type: "Saturation",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",
                          saturation: 0,
                          mainParameter: "saturation",
                          applyTo2d: function (t) {
                              if (0 !== this.saturation) {
                                  var e,
                                      i,
                                      r = t.imageData.data,
                                      n = r.length,
                                      o = -this.saturation;
                                  for (e = 0; e < n; e += 4)
                                      (i = Math.max(r[e], r[e + 1], r[e + 2])), (r[e] += i !== r[e] ? (i - r[e]) * o : 0), (r[e + 1] += i !== r[e + 1] ? (i - r[e + 1]) * o : 0), (r[e + 2] += i !== r[e + 2] ? (i - r[e + 2]) * o : 0);
                              }
                          },
                          getUniformLocations: function (t, e) {
                              return { uSaturation: t.getUniformLocation(e, "uSaturation") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform1f(e.uSaturation, -this.saturation);
                          },
                      })),
                          (e.Image.filters.Saturation.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Blur = r(i.BaseFilter, {
                          type: "Blur",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",
                          blur: 0,
                          mainParameter: "blur",
                          applyTo: function (t) {
                              t.webgl
                                  ? ((this.aspectRatio = t.sourceWidth / t.sourceHeight),
                                    t.passes++,
                                    this._setupFrameBuffer(t),
                                    (this.horizontal = !0),
                                    this.applyToWebGL(t),
                                    this._swapTextures(t),
                                    this._setupFrameBuffer(t),
                                    (this.horizontal = !1),
                                    this.applyToWebGL(t),
                                    this._swapTextures(t))
                                  : this.applyTo2d(t);
                          },
                          applyTo2d: function (t) {
                              t.imageData = this.simpleBlur(t);
                          },
                          simpleBlur: function (t) {
                              var i,
                                  r,
                                  n = t.filterBackend.resources,
                                  o = t.imageData.width,
                                  s = t.imageData.height;
                              n.blurLayer1 || ((n.blurLayer1 = e.util.createCanvasElement()), (n.blurLayer2 = e.util.createCanvasElement())),
                                  (i = n.blurLayer1),
                                  (r = n.blurLayer2),
                                  (i.width === o && i.height === s) || ((r.width = i.width = o), (r.height = i.height = s));
                              var a,
                                  h,
                                  c,
                                  l,
                                  u = i.getContext("2d"),
                                  f = r.getContext("2d"),
                                  d = 0.06 * this.blur * 0.5;
                              for (u.putImageData(t.imageData, 0, 0), f.clearRect(0, 0, o, s), l = -15; l <= 15; l++)
                                  (c = d * (h = l / 15) * o + (a = (Math.random() - 0.5) / 4)), (f.globalAlpha = 1 - Math.abs(h)), f.drawImage(i, c, a), u.drawImage(r, 0, 0), (f.globalAlpha = 1), f.clearRect(0, 0, r.width, r.height);
                              for (l = -15; l <= 15; l++)
                                  (c = d * (h = l / 15) * s + (a = (Math.random() - 0.5) / 4)), (f.globalAlpha = 1 - Math.abs(h)), f.drawImage(i, a, c), u.drawImage(r, 0, 0), (f.globalAlpha = 1), f.clearRect(0, 0, r.width, r.height);
                              t.ctx.drawImage(i, 0, 0);
                              var g = t.ctx.getImageData(0, 0, i.width, i.height);
                              return (u.globalAlpha = 1), u.clearRect(0, 0, i.width, i.height), g;
                          },
                          getUniformLocations: function (t, e) {
                              return { delta: t.getUniformLocation(e, "uDelta") };
                          },
                          sendUniformData: function (t, e) {
                              var i = this.chooseRightDelta();
                              t.uniform2fv(e.delta, i);
                          },
                          chooseRightDelta: function () {
                              var t,
                                  e = 1,
                                  i = [0, 0];
                              return this.horizontal ? 1 < this.aspectRatio && (e = 1 / this.aspectRatio) : this.aspectRatio < 1 && (e = this.aspectRatio), (t = e * this.blur * 0.12), this.horizontal ? (i[0] = t) : (i[1] = t), i;
                          },
                      })),
                          (i.Blur.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Gamma = r(i.BaseFilter, {
                          type: "Gamma",
                          fragmentSource:
                              "precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",
                          gamma: [1, 1, 1],
                          mainParameter: "gamma",
                          initialize: function (t) {
                              (this.gamma = [1, 1, 1]), i.BaseFilter.prototype.initialize.call(this, t);
                          },
                          applyTo2d: function (t) {
                              var e,
                                  i = t.imageData.data,
                                  r = this.gamma,
                                  n = i.length,
                                  o = 1 / r[0],
                                  s = 1 / r[1],
                                  a = 1 / r[2];
                              for (this.rVals || ((this.rVals = new Uint8Array(256)), (this.gVals = new Uint8Array(256)), (this.bVals = new Uint8Array(256))), e = 0, n = 256; e < n; e++)
                                  (this.rVals[e] = 255 * Math.pow(e / 255, o)), (this.gVals[e] = 255 * Math.pow(e / 255, s)), (this.bVals[e] = 255 * Math.pow(e / 255, a));
                              for (e = 0, n = i.length; e < n; e += 4) (i[e] = this.rVals[i[e]]), (i[e + 1] = this.gVals[i[e + 1]]), (i[e + 2] = this.bVals[i[e + 2]]);
                          },
                          getUniformLocations: function (t, e) {
                              return { uGamma: t.getUniformLocation(e, "uGamma") };
                          },
                          sendUniformData: function (t, e) {
                              t.uniform3fv(e.uGamma, this.gamma);
                          },
                      })),
                          (e.Image.filters.Gamma.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.Composed = r(i.BaseFilter, {
                          type: "Composed",
                          subFilters: [],
                          initialize: function (t) {
                              this.callSuper("initialize", t), (this.subFilters = this.subFilters.slice(0));
                          },
                          applyTo: function (t) {
                              (t.passes += this.subFilters.length - 1),
                                  this.subFilters.forEach(function (e) {
                                      e.applyTo(t);
                                  });
                          },
                          toObject: function () {
                              return e.util.object.extend(this.callSuper("toObject"), {
                                  subFilters: this.subFilters.map(function (t) {
                                      return t.toObject();
                                  }),
                              });
                          },
                          isNeutralState: function () {
                              return !this.subFilters.some(function (t) {
                                  return !t.isNeutralState();
                              });
                          },
                      })),
                          (e.Image.filters.Composed.fromObject = function (t, i) {
                              var r = (t.subFilters || []).map(function (t) {
                                      return new e.Image.filters[t.type](t);
                                  }),
                                  n = new e.Image.filters.Composed({ subFilters: r });
                              return i && i(n), n;
                          });
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.Image.filters,
                          r = e.util.createClass;
                      (i.HueRotation = r(i.ColorMatrix, {
                          type: "HueRotation",
                          rotation: 0,
                          mainParameter: "rotation",
                          calculateMatrix: function () {
                              var t = this.rotation * Math.PI,
                                  i = e.util.cos(t),
                                  r = e.util.sin(t),
                                  n = Math.sqrt(1 / 3) * r,
                                  o = 1 - i;
                              (this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                                  (this.matrix[0] = i + o / 3),
                                  (this.matrix[1] = (1 / 3) * o - n),
                                  (this.matrix[2] = (1 / 3) * o + n),
                                  (this.matrix[5] = (1 / 3) * o + n),
                                  (this.matrix[6] = i + (1 / 3) * o),
                                  (this.matrix[7] = (1 / 3) * o - n),
                                  (this.matrix[10] = (1 / 3) * o - n),
                                  (this.matrix[11] = (1 / 3) * o + n),
                                  (this.matrix[12] = i + (1 / 3) * o);
                          },
                          isNeutralState: function (t) {
                              return this.calculateMatrix(), i.BaseFilter.prototype.isNeutralState.call(this, t);
                          },
                          applyTo: function (t) {
                              this.calculateMatrix(), i.BaseFilter.prototype.applyTo.call(this, t);
                          },
                      })),
                          (e.Image.filters.HueRotation.fromObject = e.Image.filters.BaseFilter.fromObject);
                  })(e),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                          i = e.util.object.clone;
                      e.Text
                          ? e.warn("fabric.Text is already defined")
                          : ((e.Text = e.util.createClass(e.Object, {
                                _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles"],
                                _reNewline: /\r?\n/,
                                _reSpacesAndTabs: /[ \t\r]/g,
                                _reSpaceAndTab: /[ \t\r]/,
                                _reWords: /\S+/g,
                                type: "text",
                                fontSize: 40,
                                fontWeight: "normal",
                                fontFamily: "Times New Roman",
                                underline: !1,
                                overline: !1,
                                linethrough: !1,
                                textAlign: "left",
                                fontStyle: "normal",
                                lineHeight: 1.16,
                                superscript: { size: 0.6, baseline: -0.35 },
                                subscript: { size: 0.6, baseline: 0.11 },
                                textBackgroundColor: "",
                                stateProperties: e.Object.prototype.stateProperties.concat(
                                    "fontFamily",
                                    "fontWeight",
                                    "fontSize",
                                    "text",
                                    "underline",
                                    "overline",
                                    "linethrough",
                                    "textAlign",
                                    "fontStyle",
                                    "lineHeight",
                                    "textBackgroundColor",
                                    "charSpacing",
                                    "styles"
                                ),
                                cacheProperties: e.Object.prototype.cacheProperties.concat(
                                    "fontFamily",
                                    "fontWeight",
                                    "fontSize",
                                    "text",
                                    "underline",
                                    "overline",
                                    "linethrough",
                                    "textAlign",
                                    "fontStyle",
                                    "lineHeight",
                                    "textBackgroundColor",
                                    "charSpacing",
                                    "styles"
                                ),
                                stroke: null,
                                shadow: null,
                                _fontSizeFraction: 0.222,
                                offsets: { underline: 0.1, linethrough: -0.315, overline: -0.88 },
                                _fontSizeMult: 1.13,
                                charSpacing: 0,
                                styles: null,
                                _measuringContext: null,
                                deltaY: 0,
                                _styleProperties: ["stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "deltaY", "textBackgroundColor"],
                                __charBounds: [],
                                CACHE_FONT_SIZE: 400,
                                MIN_TEXT_WIDTH: 2,
                                initialize: function (t, e) {
                                    (this.styles = (e && e.styles) || {}),
                                        (this.text = t),
                                        (this.__skipDimension = !0),
                                        this.callSuper("initialize", e),
                                        (this.__skipDimension = !1),
                                        this.initDimensions(),
                                        this.setCoords(),
                                        this.setupState({ propertySet: "_dimensionAffectingProps" });
                                },
                                getMeasuringContext: function () {
                                    return e._measuringContext || (e._measuringContext = (this.canvas && this.canvas.contextCache) || e.util.createCanvasElement().getContext("2d")), e._measuringContext;
                                },
                                _splitText: function () {
                                    var t = this._splitTextIntoLines(this.text);
                                    return (this.textLines = t.lines), (this._textLines = t.graphemeLines), (this._unwrappedTextLines = t._unwrappedLines), (this._text = t.graphemeText), t;
                                },
                                initDimensions: function () {
                                    this.__skipDimension ||
                                        (this._splitText(),
                                        this._clearCache(),
                                        (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH),
                                        -1 !== this.textAlign.indexOf("justify") && this.enlargeSpaces(),
                                        (this.height = this.calcTextHeight()),
                                        this.saveState({ propertySet: "_dimensionAffectingProps" }));
                                },
                                enlargeSpaces: function () {
                                    for (var t, e, i, r, n, o, s, a = 0, h = this._textLines.length; a < h; a++)
                                        if (
                                            ("justify" === this.textAlign || (a !== h - 1 && !this.isEndOfWrapping(a))) &&
                                            ((r = 0), (n = this._textLines[a]), (e = this.getLineWidth(a)) < this.width && (s = this.textLines[a].match(this._reSpacesAndTabs)))
                                        ) {
                                            (i = s.length), (t = (this.width - e) / i);
                                            for (var c = 0, l = n.length; c <= l; c++) (o = this.__charBounds[a][c]), this._reSpaceAndTab.test(n[c]) ? ((o.width += t), (o.kernedWidth += t), (o.left += r), (r += t)) : (o.left += r);
                                        }
                                },
                                isEndOfWrapping: function (t) {
                                    return t === this._textLines.length - 1;
                                },
                                missingNewlineOffset: function () {
                                    return 1;
                                },
                                toString: function () {
                                    return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
                                },
                                _getCacheCanvasDimensions: function () {
                                    var t = this.callSuper("_getCacheCanvasDimensions"),
                                        e = this.fontSize;
                                    return (t.width += e * t.zoomX), (t.height += e * t.zoomY), t;
                                },
                                _render: function (t) {
                                    this._setTextStyles(t),
                                        this._renderTextLinesBackground(t),
                                        this._renderTextDecoration(t, "underline"),
                                        this._renderText(t),
                                        this._renderTextDecoration(t, "overline"),
                                        this._renderTextDecoration(t, "linethrough");
                                },
                                _renderText: function (t) {
                                    "stroke" === this.paintFirst ? (this._renderTextStroke(t), this._renderTextFill(t)) : (this._renderTextFill(t), this._renderTextStroke(t));
                                },
                                _setTextStyles: function (t, e, i) {
                                    (t.textBaseline = "alphabetic"), (t.font = this._getFontDeclaration(e, i));
                                },
                                calcTextWidth: function () {
                                    for (var t = this.getLineWidth(0), e = 1, i = this._textLines.length; e < i; e++) {
                                        var r = this.getLineWidth(e);
                                        t < r && (t = r);
                                    }
                                    return t;
                                },
                                _renderTextLine: function (t, e, i, r, n, o) {
                                    this._renderChars(t, e, i, r, n, o);
                                },
                                _renderTextLinesBackground: function (t) {
                                    if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
                                        for (var e, i, r, n, o, s, a = 0, h = t.fillStyle, c = this._getLeftOffset(), l = this._getTopOffset(), u = 0, f = 0, d = 0, g = this._textLines.length; d < g; d++)
                                            if (((e = this.getHeightOfLine(d)), this.textBackgroundColor || this.styleHas("textBackgroundColor", d))) {
                                                (r = this._textLines[d]), (i = this._getLineLeftOffset(d)), (u = f = 0), (n = this.getValueOfPropertyAt(d, 0, "textBackgroundColor"));
                                                for (var p = 0, v = r.length; p < v; p++)
                                                    (o = this.__charBounds[d][p]),
                                                        (s = this.getValueOfPropertyAt(d, p, "textBackgroundColor")) !== n
                                                            ? ((t.fillStyle = n) && t.fillRect(c + i + u, l + a, f, e / this.lineHeight), (u = o.left), (f = o.width), (n = s))
                                                            : (f += o.kernedWidth);
                                                s && ((t.fillStyle = s), t.fillRect(c + i + u, l + a, f, e / this.lineHeight)), (a += e);
                                            } else a += e;
                                        (t.fillStyle = h), this._removeShadow(t);
                                    }
                                },
                                getFontCache: function (t) {
                                    var i = t.fontFamily.toLowerCase();
                                    e.charWidthsCache[i] || (e.charWidthsCache[i] = {});
                                    var r = e.charWidthsCache[i],
                                        n = t.fontStyle.toLowerCase() + "_" + (t.fontWeight + "").toLowerCase();
                                    return r[n] || (r[n] = {}), r[n];
                                },
                                _applyCharStyles: function (t, e, i, r, n) {
                                    this._setFillStyles(e, n), this._setStrokeStyles(e, n), (e.font = this._getFontDeclaration(n));
                                },
                                _measureChar: function (t, e, i, r) {
                                    var n,
                                        o,
                                        s,
                                        a,
                                        h = this.getFontCache(e),
                                        c = i + t,
                                        l = this._getFontDeclaration(e) === this._getFontDeclaration(r),
                                        u = e.fontSize / this.CACHE_FONT_SIZE;
                                    if ((i && void 0 !== h[i] && (s = h[i]), void 0 !== h[t] && (a = n = h[t]), l && void 0 !== h[c] && (a = (o = h[c]) - s), void 0 === n || void 0 === s || void 0 === o)) {
                                        var f = this.getMeasuringContext();
                                        this._setTextStyles(f, e, !0);
                                    }
                                    return (
                                        void 0 === n && ((a = n = f.measureText(t).width), (h[t] = n)),
                                        void 0 === s && l && i && ((s = f.measureText(i).width), (h[i] = s)),
                                        l && void 0 === o && ((o = f.measureText(c).width), (a = (h[c] = o) - s)),
                                        { width: n * u, kernedWidth: a * u }
                                    );
                                },
                                getHeightOfChar: function (t, e) {
                                    return this.getValueOfPropertyAt(t, e, "fontSize");
                                },
                                measureLine: function (t) {
                                    var e = this._measureLine(t);
                                    return 0 !== this.charSpacing && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e;
                                },
                                _measureLine: function (t) {
                                    var e,
                                        i,
                                        r,
                                        n,
                                        o = 0,
                                        s = this._textLines[t],
                                        a = new Array(s.length);
                                    for (this.__charBounds[t] = a, e = 0; e < s.length; e++) (i = s[e]), (n = this._getGraphemeBox(i, t, e, r)), (o += (a[e] = n).kernedWidth), (r = i);
                                    return (a[e] = { left: n ? n.left + n.width : 0, width: 0, kernedWidth: 0, height: this.fontSize }), { width: o, numOfSpaces: 0 };
                                },
                                _getGraphemeBox: function (t, e, i, r, n) {
                                    var o,
                                        s = this.getCompleteStyleDeclaration(e, i),
                                        a = r ? this.getCompleteStyleDeclaration(e, i - 1) : {},
                                        h = this._measureChar(t, s, r, a),
                                        c = h.kernedWidth,
                                        l = h.width;
                                    0 !== this.charSpacing && ((l += o = this._getWidthOfCharSpacing()), (c += o));
                                    var u = { width: l, left: 0, height: s.fontSize, kernedWidth: c, deltaY: s.deltaY };
                                    if (0 < i && !n) {
                                        var f = this.__charBounds[e][i - 1];
                                        u.left = f.left + f.width + h.kernedWidth - h.width;
                                    }
                                    return u;
                                },
                                getHeightOfLine: function (t) {
                                    if (this.__lineHeights[t]) return this.__lineHeights[t];
                                    for (var e = this._textLines[t], i = this.getHeightOfChar(t, 0), r = 1, n = e.length; r < n; r++) i = Math.max(this.getHeightOfChar(t, r), i);
                                    return (this.__lineHeights[t] = i * this.lineHeight * this._fontSizeMult);
                                },
                                calcTextHeight: function () {
                                    for (var t, e = 0, i = 0, r = this._textLines.length; i < r; i++) (t = this.getHeightOfLine(i)), (e += i === r - 1 ? t / this.lineHeight : t);
                                    return e;
                                },
                                _getLeftOffset: function () {
                                    return -this.width / 2;
                                },
                                _getTopOffset: function () {
                                    return -this.height / 2;
                                },
                                _renderTextCommon: function (t, e) {
                                    t.save();
                                    for (
                                        var i = 0, r = this._getLeftOffset(), n = this._getTopOffset(), o = this._applyPatternGradientTransform(t, "fillText" === e ? this.fill : this.stroke), s = 0, a = this._textLines.length;
                                        s < a;
                                        s++
                                    ) {
                                        var h = this.getHeightOfLine(s),
                                            c = h / this.lineHeight,
                                            l = this._getLineLeftOffset(s);
                                        this._renderTextLine(e, t, this._textLines[s], r + l - o.offsetX, n + i + c - o.offsetY, s), (i += h);
                                    }
                                    t.restore();
                                },
                                _renderTextFill: function (t) {
                                    (this.fill || this.styleHas("fill")) && this._renderTextCommon(t, "fillText");
                                },
                                _renderTextStroke: function (t) {
                                    ((this.stroke && 0 !== this.strokeWidth) || !this.isEmptyStyles()) &&
                                        (this.shadow && !this.shadow.affectStroke && this._removeShadow(t),
                                        t.save(),
                                        this._setLineDash(t, this.strokeDashArray),
                                        t.beginPath(),
                                        this._renderTextCommon(t, "strokeText"),
                                        t.closePath(),
                                        t.restore());
                                },
                                _renderChars: function (t, e, i, r, n, o) {
                                    var s,
                                        a,
                                        h,
                                        c,
                                        l = this.getHeightOfLine(o),
                                        u = -1 !== this.textAlign.indexOf("justify"),
                                        f = "",
                                        d = 0,
                                        g = !u && 0 === this.charSpacing && this.isEmptyStyles(o);
                                    if ((e.save(), (n -= (l * this._fontSizeFraction) / this.lineHeight), g)) return this._renderChar(t, e, o, 0, this.textLines[o], r, n, l), void e.restore();
                                    for (var p = 0, v = i.length - 1; p <= v; p++)
                                        (c = p === v || this.charSpacing),
                                            (f += i[p]),
                                            (h = this.__charBounds[o][p]),
                                            0 === d ? ((r += h.kernedWidth - h.width), (d += h.width)) : (d += h.kernedWidth),
                                            u && !c && this._reSpaceAndTab.test(i[p]) && (c = !0),
                                            c || ((s = s || this.getCompleteStyleDeclaration(o, p)), (a = this.getCompleteStyleDeclaration(o, p + 1)), (c = this._hasStyleChanged(s, a))),
                                            c && (this._renderChar(t, e, o, p, f, r, n, l), (f = ""), (s = a), (r += d), (d = 0));
                                    e.restore();
                                },
                                _renderChar: function (t, e, i, r, n, o, s) {
                                    var a = this._getStyleDeclaration(i, r),
                                        h = this.getCompleteStyleDeclaration(i, r),
                                        c = "fillText" === t && h.fill,
                                        l = "strokeText" === t && h.stroke && h.strokeWidth;
                                    (l || c) &&
                                        (a && e.save(),
                                        this._applyCharStyles(t, e, i, r, h),
                                        a && a.textBackgroundColor && this._removeShadow(e),
                                        a && a.deltaY && (s += a.deltaY),
                                        c && e.fillText(n, o, s),
                                        l && e.strokeText(n, o, s),
                                        a && e.restore());
                                },
                                setSuperscript: function (t, e) {
                                    return this._setScript(t, e, this.superscript);
                                },
                                setSubscript: function (t, e) {
                                    return this._setScript(t, e, this.subscript);
                                },
                                _setScript: function (t, e, i) {
                                    var r = this.get2DCursorLocation(t, !0),
                                        n = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "fontSize"),
                                        o = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "deltaY"),
                                        s = { fontSize: n * i.size, deltaY: o + n * i.baseline };
                                    return this.setSelectionStyles(s, t, e), this;
                                },
                                _hasStyleChanged: function (t, e) {
                                    return (
                                        t.fill !== e.fill ||
                                        t.stroke !== e.stroke ||
                                        t.strokeWidth !== e.strokeWidth ||
                                        t.fontSize !== e.fontSize ||
                                        t.fontFamily !== e.fontFamily ||
                                        t.fontWeight !== e.fontWeight ||
                                        t.fontStyle !== e.fontStyle ||
                                        t.deltaY !== e.deltaY
                                    );
                                },
                                _hasStyleChangedForSvg: function (t, e) {
                                    return this._hasStyleChanged(t, e) || t.overline !== e.overline || t.underline !== e.underline || t.linethrough !== e.linethrough;
                                },
                                _getLineLeftOffset: function (t) {
                                    var e = this.getLineWidth(t);
                                    return "center" === this.textAlign
                                        ? (this.width - e) / 2
                                        : "right" === this.textAlign
                                        ? this.width - e
                                        : "justify-center" === this.textAlign && this.isEndOfWrapping(t)
                                        ? (this.width - e) / 2
                                        : "justify-right" === this.textAlign && this.isEndOfWrapping(t)
                                        ? this.width - e
                                        : 0;
                                },
                                _clearCache: function () {
                                    (this.__lineWidths = []), (this.__lineHeights = []), (this.__charBounds = []);
                                },
                                _shouldClearDimensionCache: function () {
                                    var t = this._forceClearCache;
                                    return t || (t = this.hasStateChanged("_dimensionAffectingProps")), t && ((this.dirty = !0), (this._forceClearCache = !1)), t;
                                },
                                getLineWidth: function (t) {
                                    return this.__lineWidths[t] ? this.__lineWidths[t] : ((e = "" === this._textLines[t] ? 0 : this.measureLine(t).width), (this.__lineWidths[t] = e));
                                    var e;
                                },
                                _getWidthOfCharSpacing: function () {
                                    return 0 !== this.charSpacing ? (this.fontSize * this.charSpacing) / 1e3 : 0;
                                },
                                getValueOfPropertyAt: function (t, e, i) {
                                    var r = this._getStyleDeclaration(t, e);
                                    return r && void 0 !== r[i] ? r[i] : this[i];
                                },
                                _renderTextDecoration: function (t, e) {
                                    if (this[e] || this.styleHas(e)) {
                                        for (var i, r, n, o, s, a, h, c, l, u, f, d, g, p, v, m, _ = this._getLeftOffset(), y = this._getTopOffset(), b = this._getWidthOfCharSpacing(), x = 0, C = this._textLines.length; x < C; x++)
                                            if (((i = this.getHeightOfLine(x)), this[e] || this.styleHas(e, x))) {
                                                (h = this._textLines[x]),
                                                    (p = i / this.lineHeight),
                                                    (o = this._getLineLeftOffset(x)),
                                                    (f = u = 0),
                                                    (c = this.getValueOfPropertyAt(x, 0, e)),
                                                    (m = this.getValueOfPropertyAt(x, 0, "fill")),
                                                    (l = y + p * (1 - this._fontSizeFraction)),
                                                    (r = this.getHeightOfChar(x, 0)),
                                                    (s = this.getValueOfPropertyAt(x, 0, "deltaY"));
                                                for (var S = 0, w = h.length; S < w; S++)
                                                    (d = this.__charBounds[x][S]),
                                                        (g = this.getValueOfPropertyAt(x, S, e)),
                                                        (v = this.getValueOfPropertyAt(x, S, "fill")),
                                                        (n = this.getHeightOfChar(x, S)),
                                                        (a = this.getValueOfPropertyAt(x, S, "deltaY")),
                                                        (g !== c || v !== m || n !== r || a !== s) && 0 < f
                                                            ? ((t.fillStyle = m), c && m && t.fillRect(_ + o + u, l + this.offsets[e] * r + s, f, this.fontSize / 15), (u = d.left), (f = d.width), (c = g), (m = v), (r = n), (s = a))
                                                            : (f += d.kernedWidth);
                                                (t.fillStyle = v), g && v && t.fillRect(_ + o + u, l + this.offsets[e] * r + s, f - b, this.fontSize / 15), (y += i);
                                            } else y += i;
                                        this._removeShadow(t);
                                    }
                                },
                                _getFontDeclaration: function (t, i) {
                                    var r = t || this,
                                        n = this.fontFamily,
                                        o = -1 < e.Text.genericFonts.indexOf(n.toLowerCase()),
                                        s = void 0 === n || -1 < n.indexOf("'") || -1 < n.indexOf(",") || -1 < n.indexOf('"') || o ? r.fontFamily : '"' + r.fontFamily + '"';
                                    return [e.isLikelyNode ? r.fontWeight : r.fontStyle, e.isLikelyNode ? r.fontStyle : r.fontWeight, i ? this.CACHE_FONT_SIZE + "px" : r.fontSize + "px", s].join(" ");
                                },
                                render: function (t) {
                                    this.visible && ((this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen()) || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", t)));
                                },
                                _splitTextIntoLines: function (t) {
                                    for (var i = t.split(this._reNewline), r = new Array(i.length), n = ["\n"], o = [], s = 0; s < i.length; s++) (r[s] = e.util.string.graphemeSplit(i[s])), (o = o.concat(r[s], n));
                                    return o.pop(), { _unwrappedLines: r, lines: i, graphemeText: o, graphemeLines: r };
                                },
                                toObject: function (t) {
                                    var e = ["text", "fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "underline", "overline", "linethrough", "textAlign", "textBackgroundColor", "charSpacing"].concat(t),
                                        r = this.callSuper("toObject", e);
                                    return (r.styles = i(this.styles, !0)), r;
                                },
                                set: function (t, e) {
                                    this.callSuper("set", t, e);
                                    var i = !1;
                                    if ("object" == typeof t) for (var r in t) i = i || -1 !== this._dimensionAffectingProps.indexOf(r);
                                    else i = -1 !== this._dimensionAffectingProps.indexOf(t);
                                    return i && (this.initDimensions(), this.setCoords()), this;
                                },
                                complexity: function () {
                                    return 1;
                                },
                            })),
                            (e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" "))),
                            (e.Text.DEFAULT_SVG_FONT_SIZE = 16),
                            (e.Text.fromElement = function (t, r, n) {
                                if (!t) return r(null);
                                var o = e.parseAttributes(t, e.Text.ATTRIBUTE_NAMES),
                                    s = o.textAnchor || "left";
                                if ((((n = e.util.object.extend(n ? i(n) : {}, o)).top = n.top || 0), (n.left = n.left || 0), o.textDecoration)) {
                                    var a = o.textDecoration;
                                    -1 !== a.indexOf("underline") && (n.underline = !0), -1 !== a.indexOf("overline") && (n.overline = !0), -1 !== a.indexOf("line-through") && (n.linethrough = !0), delete n.textDecoration;
                                }
                                "dx" in o && (n.left += o.dx), "dy" in o && (n.top += o.dy), "fontSize" in n || (n.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE);
                                var h = "";
                                "textContent" in t ? (h = t.textContent) : "firstChild" in t && null !== t.firstChild && "data" in t.firstChild && null !== t.firstChild.data && (h = t.firstChild.data),
                                    (h = h.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " "));
                                var c = n.strokeWidth;
                                n.strokeWidth = 0;
                                var l = new e.Text(h, n),
                                    u = l.getScaledHeight() / l.height,
                                    f = ((l.height + l.strokeWidth) * l.lineHeight - l.height) * u,
                                    d = l.getScaledHeight() + f,
                                    g = 0;
                                "center" === s && (g = l.getScaledWidth() / 2),
                                    "right" === s && (g = l.getScaledWidth()),
                                    l.set({ left: l.left - g, top: l.top - (d - l.fontSize * (0.07 + l._fontSizeFraction)) / l.lineHeight, strokeWidth: void 0 !== c ? c : 1 }),
                                    r(l);
                            }),
                            (e.Text.fromObject = function (t, i) {
                                return e.Object._fromObject("Text", t, i, "text");
                            }),
                            (e.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"]),
                            e.util.createAccessors && e.util.createAccessors(e.Text));
                  })(e),
                  P.util.object.extend(P.Text.prototype, {
                      isEmptyStyles: function (t) {
                          if (!this.styles) return !0;
                          if (void 0 !== t && !this.styles[t]) return !0;
                          var e = void 0 === t ? this.styles : { line: this.styles[t] };
                          for (var i in e) for (var r in e[i]) for (var n in e[i][r]) return !1;
                          return !0;
                      },
                      styleHas: function (t, e) {
                          if (!this.styles || !t || "" === t) return !1;
                          if (void 0 !== e && !this.styles[e]) return !1;
                          var i = void 0 === e ? this.styles : { 0: this.styles[e] };
                          for (var r in i) for (var n in i[r]) if (void 0 !== i[r][n][t]) return !0;
                          return !1;
                      },
                      cleanStyle: function (t) {
                          if (!this.styles || !t || "" === t) return !1;
                          var e,
                              i,
                              r = this.styles,
                              n = 0,
                              o = !0,
                              s = 0;
                          for (var a in r) {
                              for (var h in ((e = 0), r[a])) {
                                  var c;
                                  n++, (c = r[a][h]).hasOwnProperty(t) ? (i ? c[t] !== i && (o = !1) : (i = c[t]), c[t] === this[t] && delete c[t]) : (o = !1), 0 !== Object.keys(c).length ? e++ : delete r[a][h];
                              }
                              0 === e && delete r[a];
                          }
                          for (var l = 0; l < this._textLines.length; l++) s += this._textLines[l].length;
                          o && n === s && ((this[t] = i), this.removeStyle(t));
                      },
                      removeStyle: function (t) {
                          if (this.styles && t && "" !== t) {
                              var e,
                                  i,
                                  r,
                                  n = this.styles;
                              for (i in n) {
                                  for (r in (e = n[i])) delete e[r][t], 0 === Object.keys(e[r]).length && delete e[r];
                                  0 === Object.keys(e).length && delete n[i];
                              }
                          }
                      },
                      _extendStyles: function (t, e) {
                          var i = this.get2DCursorLocation(t);
                          this._getLineStyle(i.lineIndex) || this._setLineStyle(i.lineIndex),
                              this._getStyleDeclaration(i.lineIndex, i.charIndex) || this._setStyleDeclaration(i.lineIndex, i.charIndex, {}),
                              P.util.object.extend(this._getStyleDeclaration(i.lineIndex, i.charIndex), e);
                      },
                      get2DCursorLocation: function (t, e) {
                          void 0 === t && (t = this.selectionStart);
                          for (var i = e ? this._unwrappedTextLines : this._textLines, r = i.length, n = 0; n < r; n++) {
                              if (t <= i[n].length) return { lineIndex: n, charIndex: t };
                              t -= i[n].length + this.missingNewlineOffset(n);
                          }
                          return { lineIndex: n - 1, charIndex: i[n - 1].length < t ? i[n - 1].length : t };
                      },
                      getSelectionStyles: function (t, e, i) {
                          void 0 === t && (t = this.selectionStart || 0), void 0 === e && (e = this.selectionEnd || t);
                          for (var r = [], n = t; n < e; n++) r.push(this.getStyleAtPosition(n, i));
                          return r;
                      },
                      getStyleAtPosition: function (t, e) {
                          var i = this.get2DCursorLocation(t);
                          return (e ? this.getCompleteStyleDeclaration(i.lineIndex, i.charIndex) : this._getStyleDeclaration(i.lineIndex, i.charIndex)) || {};
                      },
                      setSelectionStyles: function (t, e, i) {
                          void 0 === e && (e = this.selectionStart || 0), void 0 === i && (i = this.selectionEnd || e);
                          for (var r = e; r < i; r++) this._extendStyles(r, t);
                          return (this._forceClearCache = !0), this;
                      },
                      _getStyleDeclaration: function (t, e) {
                          var i = this.styles && this.styles[t];
                          return i ? i[e] : null;
                      },
                      getCompleteStyleDeclaration: function (t, e) {
                          for (var i, r = this._getStyleDeclaration(t, e) || {}, n = {}, o = 0; o < this._styleProperties.length; o++) n[(i = this._styleProperties[o])] = void 0 === r[i] ? this[i] : r[i];
                          return n;
                      },
                      _setStyleDeclaration: function (t, e, i) {
                          this.styles[t][e] = i;
                      },
                      _deleteStyleDeclaration: function (t, e) {
                          delete this.styles[t][e];
                      },
                      _getLineStyle: function (t) {
                          return !!this.styles[t];
                      },
                      _setLineStyle: function (t) {
                          this.styles[t] = {};
                      },
                      _deleteLineStyle: function (t) {
                          delete this.styles[t];
                      },
                  }),
                  (function () {
                      function t(t) {
                          t.textDecoration &&
                              (-1 < t.textDecoration.indexOf("underline") && (t.underline = !0),
                              -1 < t.textDecoration.indexOf("line-through") && (t.linethrough = !0),
                              -1 < t.textDecoration.indexOf("overline") && (t.overline = !0),
                              delete t.textDecoration);
                      }
                      (P.IText = P.util.createClass(P.Text, P.Observable, {
                          type: "i-text",
                          selectionStart: 0,
                          selectionEnd: 0,
                          selectionColor: "rgba(17,119,255,0.3)",
                          isEditing: !1,
                          editable: !0,
                          editingBorderColor: "rgba(102,153,255,0.25)",
                          cursorWidth: 2,
                          cursorColor: "#333",
                          cursorDelay: 1e3,
                          cursorDuration: 600,
                          caching: !0,
                          _reSpace: /\s|\n/,
                          _currentCursorOpacity: 0,
                          _selectionDirection: null,
                          _abortCursorAnimation: !1,
                          __widthOfSpace: [],
                          inCompositionMode: !1,
                          initialize: function (t, e) {
                              this.callSuper("initialize", t, e), this.initBehavior();
                          },
                          setSelectionStart: function (t) {
                              (t = Math.max(t, 0)), this._updateAndFire("selectionStart", t);
                          },
                          setSelectionEnd: function (t) {
                              (t = Math.min(t, this.text.length)), this._updateAndFire("selectionEnd", t);
                          },
                          _updateAndFire: function (t, e) {
                              this[t] !== e && (this._fireSelectionChanged(), (this[t] = e)), this._updateTextarea();
                          },
                          _fireSelectionChanged: function () {
                              this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
                          },
                          initDimensions: function () {
                              this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
                          },
                          render: function (t) {
                              this.clearContextTop(), this.callSuper("render", t), (this.cursorOffsetCache = {}), this.renderCursorOrSelection();
                          },
                          _render: function (t) {
                              this.callSuper("_render", t);
                          },
                          clearContextTop: function (t) {
                              if (this.isEditing && this.canvas && this.canvas.contextTop) {
                                  var e = this.canvas.contextTop,
                                      i = this.canvas.viewportTransform;
                                  e.save(), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this.transform(e), this.transformMatrix && e.transform.apply(e, this.transformMatrix), this._clearTextArea(e), t || e.restore();
                              }
                          },
                          renderCursorOrSelection: function () {
                              if (this.isEditing && this.canvas && this.canvas.contextTop) {
                                  var t = this._getCursorBoundaries(),
                                      e = this.canvas.contextTop;
                                  this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(t, e) : this.renderSelection(t, e), e.restore();
                              }
                          },
                          _clearTextArea: function (t) {
                              var e = this.width + 4,
                                  i = this.height + 4;
                              t.clearRect(-e / 2, -i / 2, e, i);
                          },
                          _getCursorBoundaries: function (t) {
                              void 0 === t && (t = this.selectionStart);
                              var e = this._getLeftOffset(),
                                  i = this._getTopOffset(),
                                  r = this._getCursorBoundariesOffsets(t);
                              return { left: e, top: i, leftOffset: r.left, topOffset: r.top };
                          },
                          _getCursorBoundariesOffsets: function (t) {
                              if (this.cursorOffsetCache && "top" in this.cursorOffsetCache) return this.cursorOffsetCache;
                              var e,
                                  i,
                                  r,
                                  n,
                                  o = 0,
                                  s = 0,
                                  a = this.get2DCursorLocation(t);
                              (r = a.charIndex), (i = a.lineIndex);
                              for (var h = 0; h < i; h++) o += this.getHeightOfLine(h);
                              e = this._getLineLeftOffset(i);
                              var c = this.__charBounds[i][r];
                              return (
                                  c && (s = c.left),
                                  0 !== this.charSpacing && r === this._textLines[i].length && (s -= this._getWidthOfCharSpacing()),
                                  (n = { top: o, left: e + (0 < s ? s : 0) }),
                                  (this.cursorOffsetCache = n),
                                  this.cursorOffsetCache
                              );
                          },
                          renderCursor: function (t, e) {
                              var i = this.get2DCursorLocation(),
                                  r = i.lineIndex,
                                  n = 0 < i.charIndex ? i.charIndex - 1 : 0,
                                  o = this.getValueOfPropertyAt(r, n, "fontSize"),
                                  s = this.scaleX * this.canvas.getZoom(),
                                  a = this.cursorWidth / s,
                                  h = t.topOffset,
                                  c = this.getValueOfPropertyAt(r, n, "deltaY");
                              (h += ((1 - this._fontSizeFraction) * this.getHeightOfLine(r)) / this.lineHeight - o * (1 - this._fontSizeFraction)),
                                  this.inCompositionMode && this.renderSelection(t, e),
                                  (e.fillStyle = this.getValueOfPropertyAt(r, n, "fill")),
                                  (e.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity),
                                  e.fillRect(t.left + t.leftOffset - a / 2, h + t.top + c, a, o);
                          },
                          renderSelection: function (t, e) {
                              for (
                                  var i = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
                                      r = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd,
                                      n = -1 !== this.textAlign.indexOf("justify"),
                                      o = this.get2DCursorLocation(i),
                                      s = this.get2DCursorLocation(r),
                                      a = o.lineIndex,
                                      h = s.lineIndex,
                                      c = o.charIndex < 0 ? 0 : o.charIndex,
                                      l = s.charIndex < 0 ? 0 : s.charIndex,
                                      u = a;
                                  u <= h;
                                  u++
                              ) {
                                  var f,
                                      d = this._getLineLeftOffset(u) || 0,
                                      g = this.getHeightOfLine(u),
                                      p = 0,
                                      v = 0;
                                  if ((u === a && (p = this.__charBounds[a][c].left), a <= u && u < h)) v = n && !this.isEndOfWrapping(u) ? this.width : this.getLineWidth(u) || 5;
                                  else if (u === h)
                                      if (0 === l) v = this.__charBounds[h][l].left;
                                      else {
                                          var m = this._getWidthOfCharSpacing();
                                          v = this.__charBounds[h][l - 1].left + this.__charBounds[h][l - 1].width - m;
                                      }
                                  (f = g),
                                      (this.lineHeight < 1 || (u === h && 1 < this.lineHeight)) && (g /= this.lineHeight),
                                      this.inCompositionMode
                                          ? ((e.fillStyle = this.compositionColor || "black"), e.fillRect(t.left + d + p, t.top + t.topOffset + g, v - p, 1))
                                          : ((e.fillStyle = this.selectionColor), e.fillRect(t.left + d + p, t.top + t.topOffset, v - p, g)),
                                      (t.topOffset += f);
                              }
                          },
                          getCurrentCharFontSize: function () {
                              var t = this._getCurrentCharIndex();
                              return this.getValueOfPropertyAt(t.l, t.c, "fontSize");
                          },
                          getCurrentCharColor: function () {
                              var t = this._getCurrentCharIndex();
                              return this.getValueOfPropertyAt(t.l, t.c, "fill");
                          },
                          _getCurrentCharIndex: function () {
                              var t = this.get2DCursorLocation(this.selectionStart, !0),
                                  e = 0 < t.charIndex ? t.charIndex - 1 : 0;
                              return { l: t.lineIndex, c: e };
                          },
                      })),
                          (P.IText.fromObject = function (e, i) {
                              if ((t(e), e.styles)) for (var r in e.styles) for (var n in e.styles[r]) t(e.styles[r][n]);
                              P.Object._fromObject("IText", e, i, "text");
                          });
                  })(),
                  (T = P.util.object.clone),
                  P.util.object.extend(P.IText.prototype, {
                      initBehavior: function () {
                          this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), (this.mouseMoveHandler = this.mouseMoveHandler.bind(this));
                      },
                      onDeselect: function () {
                          this.isEditing && this.exitEditing(), (this.selected = !1);
                      },
                      initAddedHandler: function () {
                          var t = this;
                          this.on("added", function () {
                              var e = t.canvas;
                              e && (e._hasITextHandlers || ((e._hasITextHandlers = !0), t._initCanvasHandlers(e)), (e._iTextInstances = e._iTextInstances || []), e._iTextInstances.push(t));
                          });
                      },
                      initRemovedHandler: function () {
                          var t = this;
                          this.on("removed", function () {
                              var e = t.canvas;
                              e && ((e._iTextInstances = e._iTextInstances || []), P.util.removeFromArray(e._iTextInstances, t), 0 === e._iTextInstances.length && ((e._hasITextHandlers = !1), t._removeCanvasHandlers(e)));
                          });
                      },
                      _initCanvasHandlers: function (t) {
                          (t._mouseUpITextHandler = function () {
                              t._iTextInstances &&
                                  t._iTextInstances.forEach(function (t) {
                                      t.__isMousedown = !1;
                                  });
                          }),
                              t.on("mouse:up", t._mouseUpITextHandler);
                      },
                      _removeCanvasHandlers: function (t) {
                          t.off("mouse:up", t._mouseUpITextHandler);
                      },
                      _tick: function () {
                          this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
                      },
                      _animateCursor: function (t, e, i, r) {
                          var n;
                          return (
                              (n = {
                                  isAborted: !1,
                                  abort: function () {
                                      this.isAborted = !0;
                                  },
                              }),
                              t.animate("_currentCursorOpacity", e, {
                                  duration: i,
                                  onComplete: function () {
                                      n.isAborted || t[r]();
                                  },
                                  onChange: function () {
                                      t.canvas && t.selectionStart === t.selectionEnd && t.renderCursorOrSelection();
                                  },
                                  abort: function () {
                                      return n.isAborted;
                                  },
                              }),
                              n
                          );
                      },
                      _onTickComplete: function () {
                          var t = this;
                          this._cursorTimeout1 && clearTimeout(this._cursorTimeout1),
                              (this._cursorTimeout1 = setTimeout(function () {
                                  t._currentTickCompleteState = t._animateCursor(t, 0, this.cursorDuration / 2, "_tick");
                              }, 100));
                      },
                      initDelayedCursor: function (t) {
                          var e = this,
                              i = t ? 0 : this.cursorDelay;
                          this.abortCursorAnimation(),
                              (this._currentCursorOpacity = 1),
                              (this._cursorTimeout2 = setTimeout(function () {
                                  e._tick();
                              }, i));
                      },
                      abortCursorAnimation: function () {
                          var t = this._currentTickState || this._currentTickCompleteState,
                              e = this.canvas;
                          this._currentTickState && this._currentTickState.abort(),
                              this._currentTickCompleteState && this._currentTickCompleteState.abort(),
                              clearTimeout(this._cursorTimeout1),
                              clearTimeout(this._cursorTimeout2),
                              (this._currentCursorOpacity = 0),
                              t && e && e.clearContext(e.contextTop || e.contextContainer);
                      },
                      selectAll: function () {
                          return (this.selectionStart = 0), (this.selectionEnd = this._text.length), this._fireSelectionChanged(), this._updateTextarea(), this;
                      },
                      getSelectedText: function () {
                          return this._text.slice(this.selectionStart, this.selectionEnd).join("");
                      },
                      findWordBoundaryLeft: function (t) {
                          var e = 0,
                              i = t - 1;
                          if (this._reSpace.test(this._text[i])) for (; this._reSpace.test(this._text[i]); ) e++, i--;
                          for (; /\S/.test(this._text[i]) && -1 < i; ) e++, i--;
                          return t - e;
                      },
                      findWordBoundaryRight: function (t) {
                          var e = 0,
                              i = t;
                          if (this._reSpace.test(this._text[i])) for (; this._reSpace.test(this._text[i]); ) e++, i++;
                          for (; /\S/.test(this._text[i]) && i < this._text.length; ) e++, i++;
                          return t + e;
                      },
                      findLineBoundaryLeft: function (t) {
                          for (var e = 0, i = t - 1; !/\n/.test(this._text[i]) && -1 < i; ) e++, i--;
                          return t - e;
                      },
                      findLineBoundaryRight: function (t) {
                          for (var e = 0, i = t; !/\n/.test(this._text[i]) && i < this._text.length; ) e++, i++;
                          return t + e;
                      },
                      searchWordBoundary: function (t, e) {
                          for (var i = this._reSpace.test(this._text[t]) ? t - 1 : t, r = this._text[i], n = /[ \n\.,;!\?\-]/; !n.test(r) && 0 < i && i < this._text.length; ) (i += e), (r = this._text[i]);
                          return n.test(r) && "\n" !== r && (i += 1 === e ? 0 : 1), i;
                      },
                      selectWord: function (t) {
                          t = t || this.selectionStart;
                          var e = this.searchWordBoundary(t, -1),
                              i = this.searchWordBoundary(t, 1);
                          (this.selectionStart = e), (this.selectionEnd = i), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
                      },
                      selectLine: function (t) {
                          t = t || this.selectionStart;
                          var e = this.findLineBoundaryLeft(t),
                              i = this.findLineBoundaryRight(t);
                          return (this.selectionStart = e), (this.selectionEnd = i), this._fireSelectionChanged(), this._updateTextarea(), this;
                      },
                      enterEditing: function (t) {
                          if (!this.isEditing && this.editable)
                              return (
                                  this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)),
                                  (this.isEditing = !0),
                                  this.initHiddenTextarea(t),
                                  this.hiddenTextarea.focus(),
                                  (this.hiddenTextarea.value = this.text),
                                  this._updateTextarea(),
                                  this._saveEditingProps(),
                                  this._setEditingProps(),
                                  (this._textBeforeEdit = this.text),
                                  this._tick(),
                                  this.fire("editing:entered"),
                                  this._fireSelectionChanged(),
                                  this.canvas && (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll()),
                                  this
                              );
                      },
                      exitEditingOnOthers: function (t) {
                          t._iTextInstances &&
                              t._iTextInstances.forEach(function (t) {
                                  (t.selected = !1), t.isEditing && t.exitEditing();
                              });
                      },
                      initMouseMoveHandler: function () {
                          this.canvas.on("mouse:move", this.mouseMoveHandler);
                      },
                      mouseMoveHandler: function (t) {
                          if (this.__isMousedown && this.isEditing) {
                              var e = this.getSelectionStartFromPointer(t.e),
                                  i = this.selectionStart,
                                  r = this.selectionEnd;
                              ((e === this.__selectionStartOnMouseDown && i !== r) || (i !== e && r !== e)) &&
                                  (e > this.__selectionStartOnMouseDown
                                      ? ((this.selectionStart = this.__selectionStartOnMouseDown), (this.selectionEnd = e))
                                      : ((this.selectionStart = e), (this.selectionEnd = this.__selectionStartOnMouseDown)),
                                  (this.selectionStart === i && this.selectionEnd === r) || (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
                          }
                      },
                      _setEditingProps: function () {
                          (this.hoverCursor = "text"),
                              this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"),
                              (this.borderColor = this.editingBorderColor),
                              (this.hasControls = this.selectable = !1),
                              (this.lockMovementX = this.lockMovementY = !0);
                      },
                      fromStringToGraphemeSelection: function (t, e, i) {
                          var r = i.slice(0, t),
                              n = P.util.string.graphemeSplit(r).length;
                          if (t === e) return { selectionStart: n, selectionEnd: n };
                          var o = i.slice(t, e);
                          return { selectionStart: n, selectionEnd: n + P.util.string.graphemeSplit(o).length };
                      },
                      fromGraphemeToStringSelection: function (t, e, i) {
                          var r = i.slice(0, t).join("").length;
                          return t === e ? { selectionStart: r, selectionEnd: r } : { selectionStart: r, selectionEnd: r + i.slice(t, e).join("").length };
                      },
                      _updateTextarea: function () {
                          if (((this.cursorOffsetCache = {}), this.hiddenTextarea)) {
                              if (!this.inCompositionMode) {
                                  var t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
                                  (this.hiddenTextarea.selectionStart = t.selectionStart), (this.hiddenTextarea.selectionEnd = t.selectionEnd);
                              }
                              this.updateTextareaPosition();
                          }
                      },
                      updateFromTextArea: function () {
                          if (this.hiddenTextarea) {
                              (this.cursorOffsetCache = {}), (this.text = this.hiddenTextarea.value), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
                              var t = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
                              (this.selectionEnd = this.selectionStart = t.selectionEnd), this.inCompositionMode || (this.selectionStart = t.selectionStart), this.updateTextareaPosition();
                          }
                      },
                      updateTextareaPosition: function () {
                          if (this.selectionStart === this.selectionEnd) {
                              var t = this._calcTextareaPosition();
                              (this.hiddenTextarea.style.left = t.left), (this.hiddenTextarea.style.top = t.top);
                          }
                      },
                      _calcTextareaPosition: function () {
                          if (!this.canvas) return { x: 1, y: 1 };
                          var t = this.inCompositionMode ? this.compositionStart : this.selectionStart,
                              e = this._getCursorBoundaries(t),
                              i = this.get2DCursorLocation(t),
                              r = i.lineIndex,
                              n = i.charIndex,
                              o = this.getValueOfPropertyAt(r, n, "fontSize") * this.lineHeight,
                              s = e.leftOffset,
                              a = this.calcTransformMatrix(),
                              h = { x: e.left + s, y: e.top + e.topOffset + o },
                              c = this.canvas.upperCanvasEl,
                              l = c.width,
                              u = c.height,
                              f = l - o,
                              d = u - o,
                              g = c.clientWidth / l,
                              p = c.clientHeight / u;
                          return (
                              (h = P.util.transformPoint(h, a)),
                              ((h = P.util.transformPoint(h, this.canvas.viewportTransform)).x *= g),
                              (h.y *= p),
                              h.x < 0 && (h.x = 0),
                              h.x > f && (h.x = f),
                              h.y < 0 && (h.y = 0),
                              h.y > d && (h.y = d),
                              (h.x += this.canvas._offset.left),
                              (h.y += this.canvas._offset.top),
                              { left: h.x + "px", top: h.y + "px", fontSize: o + "px", charHeight: o }
                          );
                      },
                      _saveEditingProps: function () {
                          this._savedProps = {
                              hasControls: this.hasControls,
                              borderColor: this.borderColor,
                              lockMovementX: this.lockMovementX,
                              lockMovementY: this.lockMovementY,
                              hoverCursor: this.hoverCursor,
                              selectable: this.selectable,
                              defaultCursor: this.canvas && this.canvas.defaultCursor,
                              moveCursor: this.canvas && this.canvas.moveCursor,
                          };
                      },
                      _restoreEditingProps: function () {
                          this._savedProps &&
                              ((this.hoverCursor = this._savedProps.hoverCursor),
                              (this.hasControls = this._savedProps.hasControls),
                              (this.borderColor = this._savedProps.borderColor),
                              (this.selectable = this._savedProps.selectable),
                              (this.lockMovementX = this._savedProps.lockMovementX),
                              (this.lockMovementY = this._savedProps.lockMovementY),
                              this.canvas && ((this.canvas.defaultCursor = this._savedProps.defaultCursor), (this.canvas.moveCursor = this._savedProps.moveCursor)));
                      },
                      exitEditing: function () {
                          var t = this._textBeforeEdit !== this.text;
                          return (
                              (this.selected = !1),
                              (this.isEditing = !1),
                              (this.selectionEnd = this.selectionStart),
                              this.hiddenTextarea && (this.hiddenTextarea.blur && this.hiddenTextarea.blur(), this.canvas && this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea), (this.hiddenTextarea = null)),
                              this.abortCursorAnimation(),
                              this._restoreEditingProps(),
                              (this._currentCursorOpacity = 0),
                              this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()),
                              this.fire("editing:exited"),
                              t && this.fire("modified"),
                              this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), t && this.canvas.fire("object:modified", { target: this })),
                              this
                          );
                      },
                      _removeExtraneousStyles: function () {
                          for (var t in this.styles) this._textLines[t] || delete this.styles[t];
                      },
                      removeStyleFromTo: function (t, e) {
                          var i,
                              r,
                              n = this.get2DCursorLocation(t, !0),
                              o = this.get2DCursorLocation(e, !0),
                              s = n.lineIndex,
                              a = n.charIndex,
                              h = o.lineIndex,
                              c = o.charIndex;
                          if (s !== h) {
                              if (this.styles[s]) for (i = a; i < this._unwrappedTextLines[s].length; i++) delete this.styles[s][i];
                              if (this.styles[h]) for (i = c; i < this._unwrappedTextLines[h].length; i++) (r = this.styles[h][i]) && (this.styles[s] || (this.styles[s] = {}), (this.styles[s][a + i - c] = r));
                              for (i = s + 1; i <= h; i++) delete this.styles[i];
                              this.shiftLineStyles(h, s - h);
                          } else if (this.styles[s]) {
                              r = this.styles[s];
                              var l,
                                  u,
                                  f = c - a;
                              for (i = a; i < c; i++) delete r[i];
                              for (u in this.styles[s]) c <= (l = parseInt(u, 10)) && ((r[l - f] = r[u]), delete r[u]);
                          }
                      },
                      shiftLineStyles: function (t, e) {
                          var i = T(this.styles);
                          for (var r in this.styles) {
                              var n = parseInt(r, 10);
                              t < n && ((this.styles[n + e] = i[n]), i[n - e] || delete this.styles[n]);
                          }
                      },
                      restartCursorIfNeeded: function () {
                          (this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted) || this.initDelayedCursor();
                      },
                      insertNewlineStyleObject: function (t, e, i, r) {
                          var n,
                              o = {},
                              s = !1;
                          for (var a in (i || (i = 1), this.shiftLineStyles(t, i), this.styles[t] && (n = this.styles[t][0 === e ? e : e - 1]), this.styles[t])) {
                              var h = parseInt(a, 10);
                              e <= h && ((s = !0), (o[h - e] = this.styles[t][a]), delete this.styles[t][a]);
                          }
                          for (s ? (this.styles[t + i] = o) : delete this.styles[t + i]; 1 < i; ) i--, r && r[i] ? (this.styles[t + i] = { 0: T(r[i]) }) : n ? (this.styles[t + i] = { 0: T(n) }) : delete this.styles[t + i];
                          this._forceClearCache = !0;
                      },
                      insertCharStyleObject: function (t, e, i, r) {
                          this.styles || (this.styles = {});
                          var n = this.styles[t],
                              o = n ? T(n) : {};
                          for (var s in (i || (i = 1), o)) {
                              var a = parseInt(s, 10);
                              e <= a && ((n[a + i] = o[a]), o[a - i] || delete n[a]);
                          }
                          if (((this._forceClearCache = !0), r)) for (; i--; ) Object.keys(r[i]).length && (this.styles[t] || (this.styles[t] = {}), (this.styles[t][e + i] = T(r[i])));
                          else if (n) for (var h = n[e ? e - 1 : 1]; h && i--; ) this.styles[t][e + i] = T(h);
                      },
                      insertNewStyleBlock: function (t, e, i) {
                          for (var r = this.get2DCursorLocation(e, !0), n = [0], o = 0, s = 0; s < t.length; s++) "\n" === t[s] ? (n[++o] = 0) : n[o]++;
                          for (0 < n[0] && (this.insertCharStyleObject(r.lineIndex, r.charIndex, n[0], i), (i = i && i.slice(n[0] + 1))), o && this.insertNewlineStyleObject(r.lineIndex, r.charIndex + n[0], o), s = 1; s < o; s++)
                              0 < n[s] ? this.insertCharStyleObject(r.lineIndex + s, 0, n[s], i) : i && (this.styles[r.lineIndex + s][0] = i[0]), (i = i && i.slice(n[s] + 1));
                          0 < n[s] && this.insertCharStyleObject(r.lineIndex + s, 0, n[s], i);
                      },
                      setSelectionStartEndWithShift: function (t, e, i) {
                          i <= t
                              ? (e === t ? (this._selectionDirection = "left") : "right" === this._selectionDirection && ((this._selectionDirection = "left"), (this.selectionEnd = t)), (this.selectionStart = i))
                              : t < i && i < e
                              ? "right" === this._selectionDirection
                                  ? (this.selectionEnd = i)
                                  : (this.selectionStart = i)
                              : (e === t ? (this._selectionDirection = "right") : "left" === this._selectionDirection && ((this._selectionDirection = "right"), (this.selectionStart = e)), (this.selectionEnd = i));
                      },
                      setSelectionInBoundaries: function () {
                          var t = this.text.length;
                          this.selectionStart > t ? (this.selectionStart = t) : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > t ? (this.selectionEnd = t) : this.selectionEnd < 0 && (this.selectionEnd = 0);
                      },
                  }),
                  P.util.object.extend(P.IText.prototype, {
                      initDoubleClickSimulation: function () {
                          (this.__lastClickTime = +new Date()), (this.__lastLastClickTime = +new Date()), (this.__lastPointer = {}), this.on("mousedown", this.onMouseDown);
                      },
                      onMouseDown: function (t) {
                          if (this.canvas) {
                              this.__newClickTime = +new Date();
                              var e = t.pointer;
                              this.isTripleClick(e) && (this.fire("tripleclick", t), this._stopEvent(t.e)),
                                  (this.__lastLastClickTime = this.__lastClickTime),
                                  (this.__lastClickTime = this.__newClickTime),
                                  (this.__lastPointer = e),
                                  (this.__lastIsEditing = this.isEditing),
                                  (this.__lastSelected = this.selected);
                          }
                      },
                      isTripleClick: function (t) {
                          return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y;
                      },
                      _stopEvent: function (t) {
                          t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation();
                      },
                      initCursorSelectionHandlers: function () {
                          this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
                      },
                      initClicks: function () {
                          this.on("mousedblclick", function (t) {
                              this.selectWord(this.getSelectionStartFromPointer(t.e));
                          }),
                              this.on("tripleclick", function (t) {
                                  this.selectLine(this.getSelectionStartFromPointer(t.e));
                              });
                      },
                      _mouseDownHandler: function (t) {
                          !this.canvas ||
                              !this.editable ||
                              (t.e.button && 1 !== t.e.button) ||
                              ((this.__isMousedown = !0),
                              this.selected && this.setCursorByClick(t.e),
                              this.isEditing && ((this.__selectionStartOnMouseDown = this.selectionStart), this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
                      },
                      _mouseDownHandlerBefore: function (t) {
                          !this.canvas || !this.editable || (t.e.button && 1 !== t.e.button) || (this === this.canvas._activeObject && (this.selected = !0));
                      },
                      initMousedownHandler: function () {
                          this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
                      },
                      initMouseupHandler: function () {
                          this.on("mouseup", this.mouseUpHandler);
                      },
                      mouseUpHandler: function (t) {
                          if (((this.__isMousedown = !1), !(!this.editable || this.group || (t.transform && t.transform.actionPerformed) || (t.e.button && 1 !== t.e.button)))) {
                              if (this.canvas) {
                                  var e = this.canvas._activeObject;
                                  if (e && e !== this) return;
                              }
                              this.__lastSelected && !this.__corner
                                  ? ((this.selected = !1), (this.__lastSelected = !1), this.enterEditing(t.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection())
                                  : (this.selected = !0);
                          }
                      },
                      setCursorByClick: function (t) {
                          var e = this.getSelectionStartFromPointer(t),
                              i = this.selectionStart,
                              r = this.selectionEnd;
                          t.shiftKey ? this.setSelectionStartEndWithShift(i, r, e) : ((this.selectionStart = e), (this.selectionEnd = e)), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
                      },
                      getSelectionStartFromPointer: function (t) {
                          for (var e = this.getLocalPointer(t), i = 0, r = 0, n = 0, o = 0, s = 0, a = 0, h = this._textLines.length; a < h && n <= e.y; a++)
                              (n += this.getHeightOfLine(a) * this.scaleY), 0 < (s = a) && (o += this._textLines[a - 1].length + this.missingNewlineOffset(a - 1));
                          r = this._getLineLeftOffset(s) * this.scaleX;
                          for (var c = 0, l = this._textLines[s].length; c < l && ((i = r), (r += this.__charBounds[s][c].kernedWidth * this.scaleX) <= e.x); c++) o++;
                          return this._getNewSelectionStartFromOffset(e, i, r, o, l);
                      },
                      _getNewSelectionStartFromOffset: function (t, e, i, r, n) {
                          var o = t.x - e,
                              s = i - t.x,
                              a = r + (o < s || s < 0 ? 0 : 1);
                          return this.flipX && (a = n - a), a > this._text.length && (a = this._text.length), a;
                      },
                  }),
                  P.util.object.extend(P.IText.prototype, {
                      initHiddenTextarea: function () {
                          (this.hiddenTextarea = P.document.createElement("textarea")),
                              this.hiddenTextarea.setAttribute("autocapitalize", "off"),
                              this.hiddenTextarea.setAttribute("autocorrect", "off"),
                              this.hiddenTextarea.setAttribute("autocomplete", "off"),
                              this.hiddenTextarea.setAttribute("spellcheck", "false"),
                              this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""),
                              this.hiddenTextarea.setAttribute("wrap", "off");
                          var t = this._calcTextareaPosition();
                          (this.hiddenTextarea.style.cssText = "position: absolute; top: " + t.top + "; left: " + t.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: " + t.fontSize + ";"),
                              P.document.body.appendChild(this.hiddenTextarea),
                              P.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)),
                              P.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)),
                              !this._clickHandlerInitialized && this.canvas && (P.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), (this._clickHandlerInitialized = !0));
                      },
                      keysMap: {
                          9: "exitEditing",
                          27: "exitEditing",
                          33: "moveCursorUp",
                          34: "moveCursorDown",
                          35: "moveCursorRight",
                          36: "moveCursorLeft",
                          37: "moveCursorLeft",
                          38: "moveCursorUp",
                          39: "moveCursorRight",
                          40: "moveCursorDown",
                      },
                      ctrlKeysMapUp: { 67: "copy", 88: "cut" },
                      ctrlKeysMapDown: { 65: "selectAll" },
                      onClick: function () {
                          this.hiddenTextarea && this.hiddenTextarea.focus();
                      },
                      onKeyDown: function (t) {
                          if (this.isEditing && !this.inCompositionMode) {
                              if (t.keyCode in this.keysMap) this[this.keysMap[t.keyCode]](t);
                              else {
                                  if (!(t.keyCode in this.ctrlKeysMapDown && (t.ctrlKey || t.metaKey))) return;
                                  this[this.ctrlKeysMapDown[t.keyCode]](t);
                              }
                              t.stopImmediatePropagation(), t.preventDefault(), 33 <= t.keyCode && t.keyCode <= 40 ? (this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
                          }
                      },
                      onKeyUp: function (t) {
                          !this.isEditing || this._copyDone || this.inCompositionMode
                              ? (this._copyDone = !1)
                              : t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t), t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.requestRenderAll());
                      },
                      onInput: function (t) {
                          var e = this.fromPaste;
                          if (((this.fromPaste = !1), t && t.stopPropagation(), this.isEditing)) {
                              var i,
                                  r,
                                  n = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,
                                  o = this._text.length,
                                  s = n.length,
                                  a = s - o;
                              if ("" === this.hiddenTextarea.value)
                                  return (this.styles = {}), this.updateFromTextArea(), this.fire("changed"), void (this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll()));
                              var h = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value),
                                  c = this.selectionStart > h.selectionStart;
                              this.selectionStart !== this.selectionEnd
                                  ? ((i = this._text.slice(this.selectionStart, this.selectionEnd)), (a += this.selectionEnd - this.selectionStart))
                                  : s < o && (i = c ? this._text.slice(this.selectionEnd + a, this.selectionEnd) : this._text.slice(this.selectionStart, this.selectionStart - a)),
                                  (r = n.slice(h.selectionEnd - a, h.selectionEnd)),
                                  i &&
                                      i.length &&
                                      (this.selectionStart !== this.selectionEnd
                                          ? this.removeStyleFromTo(this.selectionStart, this.selectionEnd)
                                          : c
                                          ? this.removeStyleFromTo(this.selectionEnd - i.length, this.selectionEnd)
                                          : this.removeStyleFromTo(this.selectionEnd, this.selectionEnd + i.length)),
                                  r.length && (e && r.join("") === P.copiedText && !P.disableStyleCopyPaste ? this.insertNewStyleBlock(r, this.selectionStart, P.copiedTextStyle) : this.insertNewStyleBlock(r, this.selectionStart)),
                                  this.updateFromTextArea(),
                                  this.fire("changed"),
                                  this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
                          }
                      },
                      onCompositionStart: function () {
                          this.inCompositionMode = !0;
                      },
                      onCompositionEnd: function () {
                          this.inCompositionMode = !1;
                      },
                      onCompositionUpdate: function (t) {
                          (this.compositionStart = t.target.selectionStart), (this.compositionEnd = t.target.selectionEnd), this.updateTextareaPosition();
                      },
                      copy: function () {
                          this.selectionStart !== this.selectionEnd &&
                              ((P.copiedText = this.getSelectedText()),
                              P.disableStyleCopyPaste ? (P.copiedTextStyle = null) : (P.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0)),
                              (this._copyDone = !0));
                      },
                      paste: function () {
                          this.fromPaste = !0;
                      },
                      _getClipboardData: function (t) {
                          return (t && t.clipboardData) || P.window.clipboardData;
                      },
                      _getWidthBeforeCursor: function (t, e) {
                          var i,
                              r = this._getLineLeftOffset(t);
                          return 0 < e && (r += (i = this.__charBounds[t][e - 1]).left + i.width), r;
                      },
                      getDownCursorOffset: function (t, e) {
                          var i = this._getSelectionForOffset(t, e),
                              r = this.get2DCursorLocation(i),
                              n = r.lineIndex;
                          if (n === this._textLines.length - 1 || t.metaKey || 34 === t.keyCode) return this._text.length - i;
                          var o = r.charIndex,
                              s = this._getWidthBeforeCursor(n, o),
                              a = this._getIndexOnLine(n + 1, s);
                          return this._textLines[n].slice(o).length + a + 1 + this.missingNewlineOffset(n);
                      },
                      _getSelectionForOffset: function (t, e) {
                          return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart;
                      },
                      getUpCursorOffset: function (t, e) {
                          var i = this._getSelectionForOffset(t, e),
                              r = this.get2DCursorLocation(i),
                              n = r.lineIndex;
                          if (0 === n || t.metaKey || 33 === t.keyCode) return -i;
                          var o = r.charIndex,
                              s = this._getWidthBeforeCursor(n, o),
                              a = this._getIndexOnLine(n - 1, s),
                              h = this._textLines[n].slice(0, o),
                              c = this.missingNewlineOffset(n - 1);
                          return -this._textLines[n - 1].length + a - h.length + (1 - c);
                      },
                      _getIndexOnLine: function (t, e) {
                          for (var i, r, n = this._textLines[t], o = this._getLineLeftOffset(t), s = 0, a = 0, h = n.length; a < h; a++)
                              if (e < (o += i = this.__charBounds[t][a].width)) {
                                  r = !0;
                                  var c = o - i,
                                      l = o,
                                      u = Math.abs(c - e);
                                  s = Math.abs(l - e) < u ? a : a - 1;
                                  break;
                              }
                          return r || (s = n.length - 1), s;
                      },
                      moveCursorDown: function (t) {
                          (this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length) || this._moveCursorUpOrDown("Down", t);
                      },
                      moveCursorUp: function (t) {
                          (0 === this.selectionStart && 0 === this.selectionEnd) || this._moveCursorUpOrDown("Up", t);
                      },
                      _moveCursorUpOrDown: function (t, e) {
                          var i = this["get" + t + "CursorOffset"](e, "right" === this._selectionDirection);
                          e.shiftKey ? this.moveCursorWithShift(i) : this.moveCursorWithoutShift(i),
                              0 !== i && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), (this._currentCursorOpacity = 1), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
                      },
                      moveCursorWithShift: function (t) {
                          var e = "left" === this._selectionDirection ? this.selectionStart + t : this.selectionEnd + t;
                          return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), 0 !== t;
                      },
                      moveCursorWithoutShift: function (t) {
                          return t < 0 ? ((this.selectionStart += t), (this.selectionEnd = this.selectionStart)) : ((this.selectionEnd += t), (this.selectionStart = this.selectionEnd)), 0 !== t;
                      },
                      moveCursorLeft: function (t) {
                          (0 === this.selectionStart && 0 === this.selectionEnd) || this._moveCursorLeftOrRight("Left", t);
                      },
                      _move: function (t, e, i) {
                          var r;
                          if (t.altKey) r = this["findWordBoundary" + i](this[e]);
                          else {
                              if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode) return (this[e] += "Left" === i ? -1 : 1), !0;
                              r = this["findLineBoundary" + i](this[e]);
                          }
                          if (void 0 !== typeof r && this[e] !== r) return (this[e] = r), !0;
                      },
                      _moveLeft: function (t, e) {
                          return this._move(t, e, "Left");
                      },
                      _moveRight: function (t, e) {
                          return this._move(t, e, "Right");
                      },
                      moveCursorLeftWithoutShift: function (t) {
                          var e = !0;
                          return (this._selectionDirection = "left"), this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e = this._moveLeft(t, "selectionStart")), (this.selectionEnd = this.selectionStart), e;
                      },
                      moveCursorLeftWithShift: function (t) {
                          return "right" === this._selectionDirection && this.selectionStart !== this.selectionEnd
                              ? this._moveLeft(t, "selectionEnd")
                              : 0 !== this.selectionStart
                              ? ((this._selectionDirection = "left"), this._moveLeft(t, "selectionStart"))
                              : void 0;
                      },
                      moveCursorRight: function (t) {
                          (this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length) || this._moveCursorLeftOrRight("Right", t);
                      },
                      _moveCursorLeftOrRight: function (t, e) {
                          var i = "moveCursor" + t + "With";
                          (this._currentCursorOpacity = 1), e.shiftKey ? (i += "Shift") : (i += "outShift"), this[i](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
                      },
                      moveCursorRightWithShift: function (t) {
                          return "left" === this._selectionDirection && this.selectionStart !== this.selectionEnd
                              ? this._moveRight(t, "selectionStart")
                              : this.selectionEnd !== this._text.length
                              ? ((this._selectionDirection = "right"), this._moveRight(t, "selectionEnd"))
                              : void 0;
                      },
                      moveCursorRightWithoutShift: function (t) {
                          var e = !0;
                          return (
                              (this._selectionDirection = "right"),
                              this.selectionStart === this.selectionEnd ? ((e = this._moveRight(t, "selectionStart")), (this.selectionEnd = this.selectionStart)) : (this.selectionStart = this.selectionEnd),
                              e
                          );
                      },
                      removeChars: function (t, e) {
                          void 0 === e && (e = t + 1),
                              this.removeStyleFromTo(t, e),
                              this._text.splice(t, e - t),
                              (this.text = this._text.join("")),
                              this.set("dirty", !0),
                              this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()),
                              this._removeExtraneousStyles();
                      },
                      insertChars: function (t, e, i, r) {
                          void 0 === r && (r = i), i < r && this.removeStyleFromTo(i, r);
                          var n = P.util.string.graphemeSplit(t);
                          this.insertNewStyleBlock(n, i, e),
                              (this._text = [].concat(this._text.slice(0, i), n, this._text.slice(r))),
                              (this.text = this._text.join("")),
                              this.set("dirty", !0),
                              this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()),
                              this._removeExtraneousStyles();
                      },
                  }),
                  (O = P.util.toFixed),
                  (k = /  +/g),
                  P.util.object.extend(P.Text.prototype, {
                      _toSVG: function () {
                          var t = this._getSVGLeftTopOffsets(),
                              e = this._getSVGTextAndBg(t.textTop, t.textLeft);
                          return this._wrapSVGTextAndBg(e);
                      },
                      toSVG: function (t) {
                          return this._createBaseSVGMarkup(this._toSVG(), { reviver: t, noStyle: !0, withShadow: !0 });
                      },
                      _getSVGLeftTopOffsets: function () {
                          return { textLeft: -this.width / 2, textTop: -this.height / 2, lineTop: this.getHeightOfLine(0) };
                      },
                      _wrapSVGTextAndBg: function (t) {
                          var e = this.getSvgTextDecoration(this);
                          return [
                              t.textBgRects.join(""),
                              '\t\t<text xml:space="preserve" ',
                              this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "",
                              this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
                              this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
                              this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "",
                              e ? 'text-decoration="' + e + '" ' : "",
                              'style="',
                              this.getSvgStyles(!0),
                              '"',
                              this.addPaintOrder(),
                              " >",
                              t.textSpans.join(""),
                              "</text>\n",
                          ];
                      },
                      _getSVGTextAndBg: function (t, e) {
                          var i,
                              r = [],
                              n = [],
                              o = t;
                          this._setSVGBg(n);
                          for (var s = 0, a = this._textLines.length; s < a; s++)
                              (i = this._getLineLeftOffset(s)),
                                  (this.textBackgroundColor || this.styleHas("textBackgroundColor", s)) && this._setSVGTextLineBg(n, s, e + i, o),
                                  this._setSVGTextLineText(r, s, e + i, o),
                                  (o += this.getHeightOfLine(s));
                          return { textSpans: r, textBgRects: n };
                      },
                      _createTextCharSpan: function (t, e, i, r) {
                          var n = t !== t.trim() || t.match(k),
                              o = this.getSvgSpanStyles(e, n),
                              s = o ? 'style="' + o + '"' : "",
                              a = e.deltaY,
                              h = "",
                              c = P.Object.NUM_FRACTION_DIGITS;
                          return a && (h = ' dy="' + O(a, c) + '" '), ['<tspan x="', O(i, c), '" y="', O(r, c), '" ', h, s, ">", P.util.string.escapeXml(t), "</tspan>"].join("");
                      },
                      _setSVGTextLineText: function (t, e, i, r) {
                          var n,
                              o,
                              s,
                              a,
                              h,
                              c = this.getHeightOfLine(e),
                              l = -1 !== this.textAlign.indexOf("justify"),
                              u = "",
                              f = 0,
                              d = this._textLines[e];
                          r += (c * (1 - this._fontSizeFraction)) / this.lineHeight;
                          for (var g = 0, p = d.length - 1; g <= p; g++)
                              (h = g === p || this.charSpacing),
                                  (u += d[g]),
                                  (s = this.__charBounds[e][g]),
                                  0 === f ? ((i += s.kernedWidth - s.width), (f += s.width)) : (f += s.kernedWidth),
                                  l && !h && this._reSpaceAndTab.test(d[g]) && (h = !0),
                                  h || ((n = n || this.getCompleteStyleDeclaration(e, g)), (o = this.getCompleteStyleDeclaration(e, g + 1)), (h = this._hasStyleChangedForSvg(n, o))),
                                  h && ((a = this._getStyleDeclaration(e, g) || {}), t.push(this._createTextCharSpan(u, a, i, r)), (u = ""), (n = o), (i += f), (f = 0));
                      },
                      _pushTextBgRect: function (t, e, i, r, n, o) {
                          var s = P.Object.NUM_FRACTION_DIGITS;
                          t.push("\t\t<rect ", this._getFillAttributes(e), ' x="', O(i, s), '" y="', O(r, s), '" width="', O(n, s), '" height="', O(o, s), '"></rect>\n');
                      },
                      _setSVGTextLineBg: function (t, e, i, r) {
                          for (var n, o, s = this._textLines[e], a = this.getHeightOfLine(e) / this.lineHeight, h = 0, c = 0, l = this.getValueOfPropertyAt(e, 0, "textBackgroundColor"), u = 0, f = s.length; u < f; u++)
                              (n = this.__charBounds[e][u]),
                                  (o = this.getValueOfPropertyAt(e, u, "textBackgroundColor")) !== l ? (l && this._pushTextBgRect(t, l, i + c, r, h, a), (c = n.left), (h = n.width), (l = o)) : (h += n.kernedWidth);
                          o && this._pushTextBgRect(t, o, i + c, r, h, a);
                      },
                      _getFillAttributes: function (t) {
                          var e = t && "string" == typeof t ? new P.Color(t) : "";
                          return e && e.getSource() && 1 !== e.getAlpha() ? 'opacity="' + e.getAlpha() + '" fill="' + e.setAlpha(1).toRgb() + '"' : 'fill="' + t + '"';
                      },
                      _getSVGLineTopOffset: function (t) {
                          for (var e, i = 0, r = 0; r < t; r++) i += this.getHeightOfLine(r);
                          return (e = this.getHeightOfLine(r)), { lineTop: i, offset: ((this._fontSizeMult - this._fontSizeFraction) * e) / (this.lineHeight * this._fontSizeMult) };
                      },
                      getSvgStyles: function (t) {
                          return P.Object.prototype.getSvgStyles.call(this, t) + " white-space: pre;";
                      },
                  }),
                  (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      (e.Textbox = e.util.createClass(e.IText, e.Observable, {
                          type: "textbox",
                          minWidth: 20,
                          dynamicMinWidth: 2,
                          __cachedLines: null,
                          lockScalingFlip: !0,
                          noScaleCache: !1,
                          _dimensionAffectingProps: e.Text.prototype._dimensionAffectingProps.concat("width"),
                          _wordJoiners: /[ \t\r]/,
                          splitByGrapheme: !1,
                          initDimensions: function () {
                              this.__skipDimension ||
                                  (this.isEditing && this.initDelayedCursor(),
                                  this.clearContextTop(),
                                  this._clearCache(),
                                  (this.dynamicMinWidth = 0),
                                  (this._styleMap = this._generateStyleMap(this._splitText())),
                                  this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth),
                                  -1 !== this.textAlign.indexOf("justify") && this.enlargeSpaces(),
                                  (this.height = this.calcTextHeight()),
                                  this.saveState({ propertySet: "_dimensionAffectingProps" }));
                          },
                          _generateStyleMap: function (t) {
                              for (var e = 0, i = 0, r = 0, n = {}, o = 0; o < t.graphemeLines.length; o++)
                                  "\n" === t.graphemeText[r] && 0 < o ? ((i = 0), r++, e++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t.graphemeText[r]) && 0 < o && (i++, r++),
                                      (n[o] = { line: e, offset: i }),
                                      (r += t.graphemeLines[o].length),
                                      (i += t.graphemeLines[o].length);
                              return n;
                          },
                          styleHas: function (t, i) {
                              if (this._styleMap && !this.isWrapping) {
                                  var r = this._styleMap[i];
                                  r && (i = r.line);
                              }
                              return e.Text.prototype.styleHas.call(this, t, i);
                          },
                          isEmptyStyles: function (t) {
                              if (!this.styles) return !0;
                              var e,
                                  i,
                                  r = 0,
                                  n = !1,
                                  o = this._styleMap[t],
                                  s = this._styleMap[t + 1];
                              for (var a in (o && ((t = o.line), (r = o.offset)), s && ((n = s.line === t), (e = s.offset)), (i = void 0 === t ? this.styles : { line: this.styles[t] })))
                                  for (var h in i[a]) if (r <= h && (!n || h < e)) for (var c in i[a][h]) return !1;
                              return !0;
                          },
                          _getStyleDeclaration: function (t, e) {
                              if (this._styleMap && !this.isWrapping) {
                                  var i = this._styleMap[t];
                                  if (!i) return null;
                                  (t = i.line), (e = i.offset + e);
                              }
                              return this.callSuper("_getStyleDeclaration", t, e);
                          },
                          _setStyleDeclaration: function (t, e, i) {
                              var r = this._styleMap[t];
                              (t = r.line), (e = r.offset + e), (this.styles[t][e] = i);
                          },
                          _deleteStyleDeclaration: function (t, e) {
                              var i = this._styleMap[t];
                              (t = i.line), (e = i.offset + e), delete this.styles[t][e];
                          },
                          _getLineStyle: function (t) {
                              var e = this._styleMap[t];
                              return !!this.styles[e.line];
                          },
                          _setLineStyle: function (t) {
                              var e = this._styleMap[t];
                              this.styles[e.line] = {};
                          },
                          _wrapText: function (t, e) {
                              var i,
                                  r = [];
                              for (this.isWrapping = !0, i = 0; i < t.length; i++) r = r.concat(this._wrapLine(t[i], i, e));
                              return (this.isWrapping = !1), r;
                          },
                          _measureWord: function (t, e, i) {
                              var r,
                                  n = 0;
                              i = i || 0;
                              for (var o = 0, s = t.length; o < s; o++) (n += this._getGraphemeBox(t[o], e, o + i, r, !0).kernedWidth), (r = t[o]);
                              return n;
                          },
                          _wrapLine: function (t, i, r, n) {
                              var o = 0,
                                  s = this.splitByGrapheme,
                                  a = [],
                                  h = [],
                                  c = s ? e.util.string.graphemeSplit(t) : t.split(this._wordJoiners),
                                  l = "",
                                  u = 0,
                                  f = s ? "" : " ",
                                  d = 0,
                                  g = 0,
                                  p = 0,
                                  v = !0,
                                  m = s ? 0 : this._getWidthOfCharSpacing();
                              (n = n || 0), 0 === c.length && c.push([]), (r -= n);
                              for (var _ = 0; _ < c.length; _++)
                                  (l = s ? c[_] : e.util.string.graphemeSplit(c[_])),
                                      (d = this._measureWord(l, i, u)),
                                      (u += l.length),
                                      r <= (o += g + d - m) && !v ? (a.push(h), (h = []), (o = d), (v = !0)) : (o += m),
                                      v || s || h.push(f),
                                      (h = h.concat(l)),
                                      (g = this._measureWord([f], i, u)),
                                      u++,
                                      (v = !1),
                                      p < d && (p = d);
                              return _ && a.push(h), p + n > this.dynamicMinWidth && (this.dynamicMinWidth = p - m + n), a;
                          },
                          isEndOfWrapping: function (t) {
                              return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line;
                          },
                          missingNewlineOffset: function (t) {
                              return this.splitByGrapheme ? (this.isEndOfWrapping(t) ? 1 : 0) : 1;
                          },
                          _splitTextIntoLines: function (t) {
                              for (var i = e.Text.prototype._splitTextIntoLines.call(this, t), r = this._wrapText(i.lines, this.width), n = new Array(r.length), o = 0; o < r.length; o++) n[o] = r[o].join("");
                              return (i.lines = n), (i.graphemeLines = r), i;
                          },
                          getMinWidth: function () {
                              return Math.max(this.minWidth, this.dynamicMinWidth);
                          },
                          _removeExtraneousStyles: function () {
                              var t = {};
                              for (var e in this._styleMap) this._textLines[e] && (t[this._styleMap[e].line] = 1);
                              for (var e in this.styles) t[e] || delete this.styles[e];
                          },
                          toObject: function (t) {
                              return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(t));
                          },
                      })),
                          (e.Textbox.fromObject = function (t, i) {
                              return e.Object._fromObject("Textbox", t, i, "text");
                          });
                  })(e);
          }.call(this, i(22).Buffer));
      },
      function (t, e, i) {
          "use strict";
          t.exports = i(18);
      },
      function (t, e, i) {
          var r = i(12),
              n = i(13),
              o = i(14);
          t.exports = function (t, e) {
              return r(t) || n(t, e) || o();
          };
      },
      function (t, e, i) {
          var r = i(11);
          t.exports = function (t, e) {
              if (null == t) return {};
              var i,
                  n,
                  o = r(t, e);
              if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(t);
                  for (n = 0; n < s.length; n++) (i = s[n]), 0 <= e.indexOf(i) || (Object.prototype.propertyIsEnumerable.call(t, i) && (o[i] = t[i]));
              }
              return o;
          };
      },
      function (t, e) {
          "function" != typeof Object.assign &&
              Object.defineProperty(Object, "assign", {
                  value: function (t, e) {
                      "use strict";
                      if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                      for (var i = Object(t), r = 1; r < arguments.length; r++) {
                          var n = arguments[r];
                          if (null != n) for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (i[o] = n[o]);
                      }
                      return i;
                  },
                  writable: !0,
                  configurable: !0,
              });
      },
      function (t, e) {
          t.exports = function (t, e) {
              if (null == t) return {};
              var i,
                  r,
                  n = {},
                  o = Object.keys(t);
              for (r = 0; r < o.length; r++) (i = o[r]), 0 <= e.indexOf(i) || (n[i] = t[i]);
              return n;
          };
      },
      function (t, e) {
          t.exports = function (t) {
              if (Array.isArray(t)) return t;
          };
      },
      function (t, e) {
          t.exports = function (t, e) {
              var i = [],
                  r = !0,
                  n = !1,
                  o = void 0;
              try {
                  for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); r = !0);
              } catch (t) {
                  (n = !0), (o = t);
              } finally {
                  try {
                      r || null == a.return || a.return();
                  } finally {
                      if (n) throw o;
                  }
              }
              return i;
          };
      },
      function (t, e) {
          t.exports = function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
      },
      function (t, e) {
          function i(t) {
              return (i =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                      ? function (t) {
                            return typeof t;
                        }
                      : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        })(t);
          }
          function r(e) {
              return (
                  "function" == typeof Symbol && "symbol" === i(Symbol.iterator)
                      ? (t.exports = r = function (t) {
                            return i(t);
                        })
                      : (t.exports = r = function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t);
                        }),
                  r(e)
              );
          }
          t.exports = r;
      },
      function (t, e) {
          t.exports = function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
          };
      },
      function (t, e) {
          function i(e, r) {
              return (
                  (t.exports = i =
                      Object.setPrototypeOf ||
                      function (t, e) {
                          return (t.__proto__ = e), t;
                      }),
                  i(e, r)
              );
          }
          t.exports = i;
      },
      function (t, e, i) {
          "use strict";
          /** @license React v16.6.1
           * react.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */ var r = i(19),
              n = "function" == typeof Symbol && Symbol.for,
              o = n ? Symbol.for("react.element") : 60103,
              s = n ? Symbol.for("react.portal") : 60106,
              a = n ? Symbol.for("react.fragment") : 60107,
              h = n ? Symbol.for("react.strict_mode") : 60108,
              c = n ? Symbol.for("react.profiler") : 60114,
              l = n ? Symbol.for("react.provider") : 60109,
              u = n ? Symbol.for("react.context") : 60110,
              f = n ? Symbol.for("react.concurrent_mode") : 60111,
              d = n ? Symbol.for("react.forward_ref") : 60112,
              g = n ? Symbol.for("react.suspense") : 60113,
              p = n ? Symbol.for("react.memo") : 60115,
              v = n ? Symbol.for("react.lazy") : 60116,
              m = "function" == typeof Symbol && Symbol.iterator;
          function _(t) {
              for (var e = arguments.length - 1, i = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++) i += "&args[]=" + encodeURIComponent(arguments[r + 1]);
              !(function (t, e, i, r, n, o, s, a) {
                  if (!t) {
                      if ((t = void 0) === e) t = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                      else {
                          var h = [i, void 0, void 0, void 0, void 0, void 0],
                              c = 0;
                          (t = Error(
                              e.replace(/%s/g, function () {
                                  return h[c++];
                              })
                          )).name = "Invariant Violation";
                      }
                      throw ((t.framesToPop = 1), t);
                  }
              })(!1, "Minified React error #" + t + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", i);
          }
          var y = {
                  isMounted: function () {
                      return !1;
                  },
                  enqueueForceUpdate: function () {},
                  enqueueReplaceState: function () {},
                  enqueueSetState: function () {},
              },
              b = {};
          function x(t, e, i) {
              (this.props = t), (this.context = e), (this.refs = b), (this.updater = i || y);
          }
          function C() {}
          function S(t, e, i) {
              (this.props = t), (this.context = e), (this.refs = b), (this.updater = i || y);
          }
          (x.prototype.isReactComponent = {}),
              (x.prototype.setState = function (t, e) {
                  "object" != typeof t && "function" != typeof t && null != t && _("85"), this.updater.enqueueSetState(this, t, e, "setState");
              }),
              (x.prototype.forceUpdate = function (t) {
                  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
              }),
              (C.prototype = x.prototype);
          var w = (S.prototype = new C());
          (w.constructor = S), r(w, x.prototype), (w.isPureReactComponent = !0);
          var T = { current: null, currentDispatcher: null },
              O = Object.prototype.hasOwnProperty,
              k = { key: !0, ref: !0, __self: !0, __source: !0 };
          function P(t, e, i) {
              var r = void 0,
                  n = {},
                  s = null,
                  a = null;
              if (null != e) for (r in (void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (s = "" + e.key), e)) O.call(e, r) && !k.hasOwnProperty(r) && (n[r] = e[r]);
              var h = arguments.length - 2;
              if (1 === h) n.children = i;
              else if (1 < h) {
                  for (var c = Array(h), l = 0; l < h; l++) c[l] = arguments[l + 2];
                  n.children = c;
              }
              if (t && t.defaultProps) for (r in (h = t.defaultProps)) void 0 === n[r] && (n[r] = h[r]);
              return { $$typeof: o, type: t, key: s, ref: a, props: n, _owner: T.current };
          }
          function E(t) {
              return "object" == typeof t && null !== t && t.$$typeof === o;
          }
          var j = /\/+/g,
              A = [];
          function D(t, e, i, r) {
              if (A.length) {
                  var n = A.pop();
                  return (n.result = t), (n.keyPrefix = e), (n.func = i), (n.context = r), (n.count = 0), n;
              }
              return { result: t, keyPrefix: e, func: i, context: r, count: 0 };
          }
          function M(t) {
              (t.result = null), (t.keyPrefix = null), (t.func = null), (t.context = null), (t.count = 0), A.length < 10 && A.push(t);
          }
          function F(t, e, i) {
              return null == t
                  ? 0
                  : (function t(e, i, r, n) {
                        var a = typeof e;
                        ("undefined" !== a && "boolean" !== a) || (e = null);
                        var h = !1;
                        if (null === e) h = !0;
                        else
                            switch (a) {
                                case "string":
                                case "number":
                                    h = !0;
                                    break;
                                case "object":
                                    switch (e.$$typeof) {
                                        case o:
                                        case s:
                                            h = !0;
                                    }
                            }
                        if (h) return r(n, e, "" === i ? "." + L(e, 0) : i), 1;
                        if (((h = 0), (i = "" === i ? "." : i + ":"), Array.isArray(e)))
                            for (var c = 0; c < e.length; c++) {
                                var l = i + L((a = e[c]), c);
                                h += t(a, l, r, n);
                            }
                        else if ("function" == typeof (l = null === e || "object" != typeof e ? null : "function" == typeof (l = (m && e[m]) || e["@@iterator"]) ? l : null))
                            for (e = l.call(e), c = 0; !(a = e.next()).done; ) h += t((a = a.value), (l = i + L(a, c++)), r, n);
                        else "object" === a && _("31", "[object Object]" == (r = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, "");
                        return h;
                    })(t, "", e, i);
          }
          function L(t, e) {
              return "object" == typeof t && null !== t && null != t.key
                  ? ((i = t.key),
                    (r = { "=": "=0", ":": "=2" }),
                    "$" +
                        ("" + i).replace(/[=:]/g, function (t) {
                            return r[t];
                        }))
                  : e.toString(36);
              var i, r;
          }
          function I(t, e) {
              t.func.call(t.context, e, t.count++);
          }
          function R(t, e, i) {
              var r,
                  n,
                  s = t.result,
                  a = t.keyPrefix;
              (t = t.func.call(t.context, e, t.count++)),
                  Array.isArray(t)
                      ? B(t, s, i, function (t) {
                            return t;
                        })
                      : null != t &&
                        (E(t) && ((n = a + (!(r = t).key || (e && e.key === t.key) ? "" : ("" + t.key).replace(j, "$&/") + "/") + i), (t = { $$typeof: o, type: r.type, key: n, ref: r.ref, props: r.props, _owner: r._owner })), s.push(t));
          }
          function B(t, e, i, r, n) {
              var o = "";
              null != i && (o = ("" + i).replace(j, "$&/") + "/"), F(t, R, (e = D(e, o, r, n))), M(e);
          }
          var Y = {
              Children: {
                  map: function (t, e, i) {
                      if (null == t) return t;
                      var r = [];
                      return B(t, r, null, e, i), r;
                  },
                  forEach: function (t, e, i) {
                      if (null == t) return t;
                      F(t, I, (e = D(null, null, e, i))), M(e);
                  },
                  count: function (t) {
                      return F(
                          t,
                          function () {
                              return null;
                          },
                          null
                      );
                  },
                  toArray: function (t) {
                      var e = [];
                      return (
                          B(t, e, null, function (t) {
                              return t;
                          }),
                          e
                      );
                  },
                  only: function (t) {
                      return E(t) || _("143"), t;
                  },
              },
              createRef: function () {
                  return { current: null };
              },
              Component: x,
              PureComponent: S,
              createContext: function (t, e) {
                  return void 0 === e && (e = null), ((t = { $$typeof: u, _calculateChangedBits: e, _currentValue: t, _currentValue2: t, Provider: null, Consumer: null }).Provider = { $$typeof: l, _context: t }), (t.Consumer = t);
              },
              forwardRef: function (t) {
                  return { $$typeof: d, render: t };
              },
              lazy: function (t) {
                  return { $$typeof: v, _ctor: t, _status: -1, _result: null };
              },
              memo: function (t, e) {
                  return { $$typeof: p, type: t, compare: void 0 === e ? null : e };
              },
              Fragment: a,
              StrictMode: h,
              Suspense: g,
              createElement: P,
              cloneElement: function (t, e, i) {
                  null == t && _("267", t);
                  var n = void 0,
                      s = r({}, t.props),
                      a = t.key,
                      h = t.ref,
                      c = t._owner;
                  if (null != e) {
                      void 0 !== e.ref && ((h = e.ref), (c = T.current)), void 0 !== e.key && (a = "" + e.key);
                      var l = void 0;
                      for (n in (t.type && t.type.defaultProps && (l = t.type.defaultProps), e)) O.call(e, n) && !k.hasOwnProperty(n) && (s[n] = void 0 === e[n] && void 0 !== l ? l[n] : e[n]);
                  }
                  if (1 == (n = arguments.length - 2)) s.children = i;
                  else if (1 < n) {
                      l = Array(n);
                      for (var u = 0; u < n; u++) l[u] = arguments[u + 2];
                      s.children = l;
                  }
                  return { $$typeof: o, type: t.type, key: a, ref: h, props: s, _owner: c };
              },
              createFactory: function (t) {
                  var e = P.bind(null, t);
                  return (e.type = t), e;
              },
              isValidElement: E,
              version: "16.6.1",
              __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: T, assign: r },
          };
          (Y.unstable_ConcurrentMode = f), (Y.unstable_Profiler = c);
          var X = Y || { default: Y };
          t.exports = X.default || X;
      },
      function (t, e, i) {
          "use strict";
          /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
              n = Object.prototype.hasOwnProperty,
              o = Object.prototype.propertyIsEnumerable;
          t.exports = (function () {
              try {
                  if (!Object.assign) return !1;
                  var t = new String("abc");
                  if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
                  for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                  if (
                      "0123456789" !==
                      Object.getOwnPropertyNames(e)
                          .map(function (t) {
                              return e[t];
                          })
                          .join("")
                  )
                      return !1;
                  var r = {};
                  return (
                      "abcdefghijklmnopqrst".split("").forEach(function (t) {
                          r[t] = t;
                      }),
                      "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                  );
              } catch (t) {
                  return !1;
              }
          })()
              ? Object.assign
              : function (t, e) {
                    for (
                        var i,
                            s,
                            a = (function (t) {
                                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                                return Object(t);
                            })(t),
                            h = 1;
                        h < arguments.length;
                        h++
                    ) {
                        for (var c in (i = Object(arguments[h]))) n.call(i, c) && (a[c] = i[c]);
                        if (r) {
                            s = r(i);
                            for (var l = 0; l < s.length; l++) o.call(i, s[l]) && (a[s[l]] = i[s[l]]);
                        }
                    }
                    return a;
                };
      },
      function (t, e, i) {
          "use strict";
          var r = i(21);
          function n() {}
          t.exports = function () {
              function t(t, e, i, n, o, s) {
                  if (s !== r) {
                      var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                      throw ((a.name = "Invariant Violation"), a);
                  }
              }
              function e() {
                  return t;
              }
              var i = { array: (t.isRequired = t), bool: t, func: t, number: t, object: t, string: t, symbol: t, any: t, arrayOf: e, element: t, instanceOf: e, node: t, objectOf: e, oneOf: e, oneOfType: e, shape: e, exact: e };
              return (i.checkPropTypes = n), (i.PropTypes = i);
          };
      },
      function (t, e, i) {
          "use strict";
          t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      function (t, e, i) {
          "use strict";
          (function (t) {
              /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
               * @license  MIT
               */
              var r = i(24),
                  n = i(25),
                  o = i(26);
              function s() {
                  return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
              }
              function a(t, e) {
                  if (s() < e) throw new RangeError("Invalid typed array length");
                  return h.TYPED_ARRAY_SUPPORT ? ((t = new Uint8Array(e)).__proto__ = h.prototype) : (null === t && (t = new h(e)), (t.length = e)), t;
              }
              function h(t, e, i) {
                  if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h)) return new h(t, e, i);
                  if ("number" != typeof t) return c(this, t, e, i);
                  if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                  return u(this, t);
              }
              function c(t, e, i, r) {
                  if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                  return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
                      ? (function (t, e, i, r) {
                            if ((e.byteLength, i < 0 || e.byteLength < i)) throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < i + (r || 0)) throw new RangeError("'length' is out of bounds");
                            return (e = void 0 === i && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, i) : new Uint8Array(e, i, r)), h.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = h.prototype) : (t = f(t, e)), t;
                        })(t, e, i, r)
                      : "string" == typeof e
                      ? (function (t, e, i) {
                            if ((("string" == typeof i && "" !== i) || (i = "utf8"), !h.isEncoding(i))) throw new TypeError('"encoding" must be a valid string encoding');
                            var r = 0 | g(e, i),
                                n = (t = a(t, r)).write(e, i);
                            return n !== r && (t = t.slice(0, n)), t;
                        })(t, e, i)
                      : (function (t, e) {
                            if (h.isBuffer(e)) {
                                var i = 0 | d(e.length);
                                return 0 === (t = a(t, i)).length || e.copy(t, 0, 0, i), t;
                            }
                            if (e) {
                                if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : f(t, e);
                                if ("Buffer" === e.type && o(e.data)) return f(t, e.data);
                            }
                            var r;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                        })(t, e);
              }
              function l(t) {
                  if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                  if (t < 0) throw new RangeError('"size" argument must not be negative');
              }
              function u(t, e) {
                  if ((l(e), (t = a(t, e < 0 ? 0 : 0 | d(e))), !h.TYPED_ARRAY_SUPPORT)) for (var i = 0; i < e; ++i) t[i] = 0;
                  return t;
              }
              function f(t, e) {
                  var i = e.length < 0 ? 0 : 0 | d(e.length);
                  t = a(t, i);
                  for (var r = 0; r < i; r += 1) t[r] = 255 & e[r];
                  return t;
              }
              function d(t) {
                  if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                  return 0 | t;
              }
              function g(t, e) {
                  if (h.isBuffer(t)) return t.length;
                  if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                  "string" != typeof t && (t = "" + t);
                  var i = t.length;
                  if (0 === i) return 0;
                  for (var r = !1; ; )
                      switch (e) {
                          case "ascii":
                          case "latin1":
                          case "binary":
                              return i;
                          case "utf8":
                          case "utf-8":
                          case void 0:
                              return I(t).length;
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                              return 2 * i;
                          case "hex":
                              return i >>> 1;
                          case "base64":
                              return R(t).length;
                          default:
                              if (r) return I(t).length;
                              (e = ("" + e).toLowerCase()), (r = !0);
                      }
              }
              function p(t, e, i) {
                  var r = t[e];
                  (t[e] = t[i]), (t[i] = r);
              }
              function v(t, e, i, r, n) {
                  if (0 === t.length) return -1;
                  if (("string" == typeof i ? ((r = i), (i = 0)) : 2147483647 < i ? (i = 2147483647) : i < -2147483648 && (i = -2147483648), (i = +i), isNaN(i) && (i = n ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length)) {
                      if (n) return -1;
                      i = t.length - 1;
                  } else if (i < 0) {
                      if (!n) return -1;
                      i = 0;
                  }
                  if (("string" == typeof e && (e = h.from(e, r)), h.isBuffer(e))) return 0 === e.length ? -1 : m(t, e, i, r, n);
                  if ("number" == typeof e)
                      return (e &= 255), h.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (n ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i)) : m(t, [e], i, r, n);
                  throw new TypeError("val must be string, number or Buffer");
              }
              function m(t, e, i, r, n) {
                  var o,
                      s = 1,
                      a = t.length,
                      h = e.length;
                  if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                      if (t.length < 2 || e.length < 2) return -1;
                      (a /= s = 2), (h /= 2), (i /= 2);
                  }
                  function c(t, e) {
                      return 1 === s ? t[e] : t.readUInt16BE(e * s);
                  }
                  if (n) {
                      var l = -1;
                      for (o = i; o < a; o++)
                          if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
                              if ((-1 === l && (l = o), o - l + 1 === h)) return l * s;
                          } else -1 !== l && (o -= o - l), (l = -1);
                  } else
                      for (a < i + h && (i = a - h), o = i; 0 <= o; o--) {
                          for (var u = !0, f = 0; f < h; f++)
                              if (c(t, o + f) !== c(e, f)) {
                                  u = !1;
                                  break;
                              }
                          if (u) return o;
                      }
                  return -1;
              }
              function _(t, e, i, r) {
                  i = Number(i) || 0;
                  var n = t.length - i;
                  r ? n < (r = Number(r)) && (r = n) : (r = n);
                  var o = e.length;
                  if (o % 2 != 0) throw new TypeError("Invalid hex string");
                  o / 2 < r && (r = o / 2);
                  for (var s = 0; s < r; ++s) {
                      var a = parseInt(e.substr(2 * s, 2), 16);
                      if (isNaN(a)) return s;
                      t[i + s] = a;
                  }
                  return s;
              }
              function y(t, e, i, r) {
                  return B(
                      (function (t) {
                          for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
                          return e;
                      })(e),
                      t,
                      i,
                      r
                  );
              }
              function b(t, e, i) {
                  return 0 === e && i === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, i));
              }
              function x(t, e, i) {
                  i = Math.min(t.length, i);
                  for (var r = [], n = e; n < i; ) {
                      var o,
                          s,
                          a,
                          h,
                          c = t[n],
                          l = null,
                          u = 239 < c ? 4 : 223 < c ? 3 : 191 < c ? 2 : 1;
                      if (n + u <= i)
                          switch (u) {
                              case 1:
                                  c < 128 && (l = c);
                                  break;
                              case 2:
                                  128 == (192 & (o = t[n + 1])) && 127 < (h = ((31 & c) << 6) | (63 & o)) && (l = h);
                                  break;
                              case 3:
                                  (o = t[n + 1]), (s = t[n + 2]), 128 == (192 & o) && 128 == (192 & s) && 2047 < (h = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) && (h < 55296 || 57343 < h) && (l = h);
                                  break;
                              case 4:
                                  (o = t[n + 1]),
                                      (s = t[n + 2]),
                                      (a = t[n + 3]),
                                      128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && 65535 < (h = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) && h < 1114112 && (l = h);
                          }
                      null === l ? ((l = 65533), (u = 1)) : 65535 < l && ((l -= 65536), r.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))), r.push(l), (n += u);
                  }
                  return (function (t) {
                      var e = t.length;
                      if (e <= C) return String.fromCharCode.apply(String, t);
                      for (var i = "", r = 0; r < e; ) i += String.fromCharCode.apply(String, t.slice(r, (r += C)));
                      return i;
                  })(r);
              }
              (e.Buffer = h),
                  (e.SlowBuffer = function (t) {
                      return +t != t && (t = 0), h.alloc(+t);
                  }),
                  (e.INSPECT_MAX_BYTES = 50),
                  (h.TYPED_ARRAY_SUPPORT =
                      void 0 !== t.TYPED_ARRAY_SUPPORT
                          ? t.TYPED_ARRAY_SUPPORT
                          : (function () {
                                try {
                                    var t = new Uint8Array(1);
                                    return (
                                        (t.__proto__ = {
                                            __proto__: Uint8Array.prototype,
                                            foo: function () {
                                                return 42;
                                            },
                                        }),
                                        42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                  (e.kMaxLength = s()),
                  (h.poolSize = 8192),
                  (h._augment = function (t) {
                      return (t.__proto__ = h.prototype), t;
                  }),
                  (h.from = function (t, e, i) {
                      return c(null, t, e, i);
                  }),
                  h.TYPED_ARRAY_SUPPORT &&
                      ((h.prototype.__proto__ = Uint8Array.prototype),
                      (h.__proto__ = Uint8Array),
                      "undefined" != typeof Symbol && Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, { value: null, configurable: !0 })),
                  (h.alloc = function (t, e, i) {
                      return (r = null), (o = e), (s = i), l((n = t)), n <= 0 ? a(r, n) : void 0 !== o ? ("string" == typeof s ? a(r, n).fill(o, s) : a(r, n).fill(o)) : a(r, n);
                      var r, n, o, s;
                  }),
                  (h.allocUnsafe = function (t) {
                      return u(null, t);
                  }),
                  (h.allocUnsafeSlow = function (t) {
                      return u(null, t);
                  }),
                  (h.isBuffer = function (t) {
                      return !(null == t || !t._isBuffer);
                  }),
                  (h.compare = function (t, e) {
                      if (!h.isBuffer(t) || !h.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                      if (t === e) return 0;
                      for (var i = t.length, r = e.length, n = 0, o = Math.min(i, r); n < o; ++n)
                          if (t[n] !== e[n]) {
                              (i = t[n]), (r = e[n]);
                              break;
                          }
                      return i < r ? -1 : r < i ? 1 : 0;
                  }),
                  (h.isEncoding = function (t) {
                      switch (String(t).toLowerCase()) {
                          case "hex":
                          case "utf8":
                          case "utf-8":
                          case "ascii":
                          case "latin1":
                          case "binary":
                          case "base64":
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                              return !0;
                          default:
                              return !1;
                      }
                  }),
                  (h.concat = function (t, e) {
                      if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                      if (0 === t.length) return h.alloc(0);
                      var i;
                      if (void 0 === e) for (i = e = 0; i < t.length; ++i) e += t[i].length;
                      var r = h.allocUnsafe(e),
                          n = 0;
                      for (i = 0; i < t.length; ++i) {
                          var s = t[i];
                          if (!h.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                          s.copy(r, n), (n += s.length);
                      }
                      return r;
                  }),
                  (h.byteLength = g),
                  (h.prototype._isBuffer = !0),
                  (h.prototype.swap16 = function () {
                      var t = this.length;
                      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                      for (var e = 0; e < t; e += 2) p(this, e, e + 1);
                      return this;
                  }),
                  (h.prototype.swap32 = function () {
                      var t = this.length;
                      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                      for (var e = 0; e < t; e += 4) p(this, e, e + 3), p(this, e + 1, e + 2);
                      return this;
                  }),
                  (h.prototype.swap64 = function () {
                      var t = this.length;
                      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                      for (var e = 0; e < t; e += 8) p(this, e, e + 7), p(this, e + 1, e + 6), p(this, e + 2, e + 5), p(this, e + 3, e + 4);
                      return this;
                  }),
                  (h.prototype.toString = function () {
                      var t = 0 | this.length;
                      return 0 === t
                          ? ""
                          : 0 === arguments.length
                          ? x(this, 0, t)
                          : function (t, e, i) {
                                var r = !1;
                                if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
                                if (((void 0 === i || i > this.length) && (i = this.length), i <= 0)) return "";
                                if ((i >>>= 0) <= (e >>>= 0)) return "";
                                for (t || (t = "utf8"); ; )
                                    switch (t) {
                                        case "hex":
                                            return T(this, e, i);
                                        case "utf8":
                                        case "utf-8":
                                            return x(this, e, i);
                                        case "ascii":
                                            return S(this, e, i);
                                        case "latin1":
                                        case "binary":
                                            return w(this, e, i);
                                        case "base64":
                                            return b(this, e, i);
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return O(this, e, i);
                                        default:
                                            if (r) throw new TypeError("Unknown encoding: " + t);
                                            (t = (t + "").toLowerCase()), (r = !0);
                                    }
                            }.apply(this, arguments);
                  }),
                  (h.prototype.equals = function (t) {
                      if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                      return this === t || 0 === h.compare(this, t);
                  }),
                  (h.prototype.inspect = function () {
                      var t = "",
                          i = e.INSPECT_MAX_BYTES;
                      return 0 < this.length && ((t = this.toString("hex", 0, i).match(/.{2}/g).join(" ")), this.length > i && (t += " ... ")), "<Buffer " + t + ">";
                  }),
                  (h.prototype.compare = function (t, e, i, r, n) {
                      if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                      if ((void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === r && (r = 0), void 0 === n && (n = this.length), e < 0 || i > t.length || r < 0 || n > this.length))
                          throw new RangeError("out of range index");
                      if (n <= r && i <= e) return 0;
                      if (n <= r) return -1;
                      if (i <= e) return 1;
                      if (this === t) return 0;
                      for (var o = (n >>>= 0) - (r >>>= 0), s = (i >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, n), l = t.slice(e, i), u = 0; u < a; ++u)
                          if (c[u] !== l[u]) {
                              (o = c[u]), (s = l[u]);
                              break;
                          }
                      return o < s ? -1 : s < o ? 1 : 0;
                  }),
                  (h.prototype.includes = function (t, e, i) {
                      return -1 !== this.indexOf(t, e, i);
                  }),
                  (h.prototype.indexOf = function (t, e, i) {
                      return v(this, t, e, i, !0);
                  }),
                  (h.prototype.lastIndexOf = function (t, e, i) {
                      return v(this, t, e, i, !1);
                  }),
                  (h.prototype.write = function (t, e, i, r) {
                      if (void 0 === e) (r = "utf8"), (i = this.length), (e = 0);
                      else if (void 0 === i && "string" == typeof e) (r = e), (i = this.length), (e = 0);
                      else {
                          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                          (e |= 0), isFinite(i) ? ((i |= 0), void 0 === r && (r = "utf8")) : ((r = i), (i = void 0));
                      }
                      var n = this.length - e;
                      if (((void 0 === i || n < i) && (i = n), (0 < t.length && (i < 0 || e < 0)) || e > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                      r || (r = "utf8");
                      for (var o, s, a, h, c, l, u, f, d, g = !1; ; )
                          switch (r) {
                              case "hex":
                                  return _(this, t, e, i);
                              case "utf8":
                              case "utf-8":
                                  return (f = e), (d = i), B(I(t, (u = this).length - f), u, f, d);
                              case "ascii":
                                  return y(this, t, e, i);
                              case "latin1":
                              case "binary":
                                  return y(this, t, e, i);
                              case "base64":
                                  return (h = this), (c = e), (l = i), B(R(t), h, c, l);
                              case "ucs2":
                              case "ucs-2":
                              case "utf16le":
                              case "utf-16le":
                                  return (
                                      (s = e),
                                      (a = i),
                                      B(
                                          (function (t, e) {
                                              for (var i, r, n, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) (r = (i = t.charCodeAt(s)) >> 8), (n = i % 256), o.push(n), o.push(r);
                                              return o;
                                          })(t, (o = this).length - s),
                                          o,
                                          s,
                                          a
                                      )
                                  );
                              default:
                                  if (g) throw new TypeError("Unknown encoding: " + r);
                                  (r = ("" + r).toLowerCase()), (g = !0);
                          }
                  }),
                  (h.prototype.toJSON = function () {
                      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                  });
              var C = 4096;
              function S(t, e, i) {
                  var r = "";
                  i = Math.min(t.length, i);
                  for (var n = e; n < i; ++n) r += String.fromCharCode(127 & t[n]);
                  return r;
              }
              function w(t, e, i) {
                  var r = "";
                  i = Math.min(t.length, i);
                  for (var n = e; n < i; ++n) r += String.fromCharCode(t[n]);
                  return r;
              }
              function T(t, e, i) {
                  var r = t.length;
                  (!e || e < 0) && (e = 0), (!i || i < 0 || r < i) && (i = r);
                  for (var n = "", o = e; o < i; ++o) n += L(t[o]);
                  return n;
              }
              function O(t, e, i) {
                  for (var r = t.slice(e, i), n = "", o = 0; o < r.length; o += 2) n += String.fromCharCode(r[o] + 256 * r[o + 1]);
                  return n;
              }
              function k(t, e, i) {
                  if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                  if (i < t + e) throw new RangeError("Trying to access beyond buffer length");
              }
              function P(t, e, i, r, n, o) {
                  if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                  if (n < e || e < o) throw new RangeError('"value" argument is out of bounds');
                  if (i + r > t.length) throw new RangeError("Index out of range");
              }
              function E(t, e, i, r) {
                  e < 0 && (e = 65535 + e + 1);
                  for (var n = 0, o = Math.min(t.length - i, 2); n < o; ++n) t[i + n] = (e & (255 << (8 * (r ? n : 1 - n)))) >>> (8 * (r ? n : 1 - n));
              }
              function j(t, e, i, r) {
                  e < 0 && (e = 4294967295 + e + 1);
                  for (var n = 0, o = Math.min(t.length - i, 4); n < o; ++n) t[i + n] = (e >>> (8 * (r ? n : 3 - n))) & 255;
              }
              function A(t, e, i, r, n, o) {
                  if (i + r > t.length) throw new RangeError("Index out of range");
                  if (i < 0) throw new RangeError("Index out of range");
              }
              function D(t, e, i, r, o) {
                  return o || A(t, 0, i, 4), n.write(t, e, i, r, 23, 4), i + 4;
              }
              function M(t, e, i, r, o) {
                  return o || A(t, 0, i, 8), n.write(t, e, i, r, 52, 8), i + 8;
              }
              (h.prototype.slice = function (t, e) {
                  var i,
                      r = this.length;
                  if (((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), e < t && (e = t), h.TYPED_ARRAY_SUPPORT))
                      (i = this.subarray(t, e)).__proto__ = h.prototype;
                  else {
                      var n = e - t;
                      i = new h(n, void 0);
                      for (var o = 0; o < n; ++o) i[o] = this[o + t];
                  }
                  return i;
              }),
                  (h.prototype.readUIntLE = function (t, e, i) {
                      (t |= 0), (e |= 0), i || k(t, e, this.length);
                      for (var r = this[t], n = 1, o = 0; ++o < e && (n *= 256); ) r += this[t + o] * n;
                      return r;
                  }),
                  (h.prototype.readUIntBE = function (t, e, i) {
                      (t |= 0), (e |= 0), i || k(t, e, this.length);
                      for (var r = this[t + --e], n = 1; 0 < e && (n *= 256); ) r += this[t + --e] * n;
                      return r;
                  }),
                  (h.prototype.readUInt8 = function (t, e) {
                      return e || k(t, 1, this.length), this[t];
                  }),
                  (h.prototype.readUInt16LE = function (t, e) {
                      return e || k(t, 2, this.length), this[t] | (this[t + 1] << 8);
                  }),
                  (h.prototype.readUInt16BE = function (t, e) {
                      return e || k(t, 2, this.length), (this[t] << 8) | this[t + 1];
                  }),
                  (h.prototype.readUInt32LE = function (t, e) {
                      return e || k(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
                  }),
                  (h.prototype.readUInt32BE = function (t, e) {
                      return e || k(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
                  }),
                  (h.prototype.readIntLE = function (t, e, i) {
                      (t |= 0), (e |= 0), i || k(t, e, this.length);
                      for (var r = this[t], n = 1, o = 0; ++o < e && (n *= 256); ) r += this[t + o] * n;
                      return (n *= 128) <= r && (r -= Math.pow(2, 8 * e)), r;
                  }),
                  (h.prototype.readIntBE = function (t, e, i) {
                      (t |= 0), (e |= 0), i || k(t, e, this.length);
                      for (var r = e, n = 1, o = this[t + --r]; 0 < r && (n *= 256); ) o += this[t + --r] * n;
                      return (n *= 128) <= o && (o -= Math.pow(2, 8 * e)), o;
                  }),
                  (h.prototype.readInt8 = function (t, e) {
                      return e || k(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                  }),
                  (h.prototype.readInt16LE = function (t, e) {
                      e || k(t, 2, this.length);
                      var i = this[t] | (this[t + 1] << 8);
                      return 32768 & i ? 4294901760 | i : i;
                  }),
                  (h.prototype.readInt16BE = function (t, e) {
                      e || k(t, 2, this.length);
                      var i = this[t + 1] | (this[t] << 8);
                      return 32768 & i ? 4294901760 | i : i;
                  }),
                  (h.prototype.readInt32LE = function (t, e) {
                      return e || k(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
                  }),
                  (h.prototype.readInt32BE = function (t, e) {
                      return e || k(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
                  }),
                  (h.prototype.readFloatLE = function (t, e) {
                      return e || k(t, 4, this.length), n.read(this, t, !0, 23, 4);
                  }),
                  (h.prototype.readFloatBE = function (t, e) {
                      return e || k(t, 4, this.length), n.read(this, t, !1, 23, 4);
                  }),
                  (h.prototype.readDoubleLE = function (t, e) {
                      return e || k(t, 8, this.length), n.read(this, t, !0, 52, 8);
                  }),
                  (h.prototype.readDoubleBE = function (t, e) {
                      return e || k(t, 8, this.length), n.read(this, t, !1, 52, 8);
                  }),
                  (h.prototype.writeUIntLE = function (t, e, i, r) {
                      (t = +t), (e |= 0), (i |= 0), r || P(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                      var n = 1,
                          o = 0;
                      for (this[e] = 255 & t; ++o < i && (n *= 256); ) this[e + o] = (t / n) & 255;
                      return e + i;
                  }),
                  (h.prototype.writeUIntBE = function (t, e, i, r) {
                      (t = +t), (e |= 0), (i |= 0), r || P(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                      var n = i - 1,
                          o = 1;
                      for (this[e + n] = 255 & t; 0 <= --n && (o *= 256); ) this[e + n] = (t / o) & 255;
                      return e + i;
                  }),
                  (h.prototype.writeUInt8 = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 1, 255, 0), h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), (this[e] = 255 & t), e + 1;
                  }),
                  (h.prototype.writeUInt16LE = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : E(this, t, e, !0), e + 2;
                  }),
                  (h.prototype.writeUInt16BE = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : E(this, t, e, !1), e + 2;
                  }),
                  (h.prototype.writeUInt32LE = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? ((this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t)) : j(this, t, e, !0), e + 4;
                  }),
                  (h.prototype.writeUInt32BE = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t)) : j(this, t, e, !1), e + 4;
                  }),
                  (h.prototype.writeIntLE = function (t, e, i, r) {
                      if (((t = +t), (e |= 0), !r)) {
                          var n = Math.pow(2, 8 * i - 1);
                          P(this, t, e, i, n - 1, -n);
                      }
                      var o = 0,
                          s = 1,
                          a = 0;
                      for (this[e] = 255 & t; ++o < i && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
                      return e + i;
                  }),
                  (h.prototype.writeIntBE = function (t, e, i, r) {
                      if (((t = +t), (e |= 0), !r)) {
                          var n = Math.pow(2, 8 * i - 1);
                          P(this, t, e, i, n - 1, -n);
                      }
                      var o = i - 1,
                          s = 1,
                          a = 0;
                      for (this[e + o] = 255 & t; 0 <= --o && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
                      return e + i;
                  }),
                  (h.prototype.writeInt8 = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 1, 127, -128), h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
                  }),
                  (h.prototype.writeInt16LE = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : E(this, t, e, !0), e + 2;
                  }),
                  (h.prototype.writeInt16BE = function (t, e, i) {
                      return (t = +t), (e |= 0), i || P(this, t, e, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : E(this, t, e, !1), e + 2;
                  }),
                  (h.prototype.writeInt32LE = function (t, e, i) {
                      return (
                          (t = +t),
                          (e |= 0),
                          i || P(this, t, e, 4, 2147483647, -2147483648),
                          h.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24)) : j(this, t, e, !0),
                          e + 4
                      );
                  }),
                  (h.prototype.writeInt32BE = function (t, e, i) {
                      return (
                          (t = +t),
                          (e |= 0),
                          i || P(this, t, e, 4, 2147483647, -2147483648),
                          t < 0 && (t = 4294967295 + t + 1),
                          h.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t)) : j(this, t, e, !1),
                          e + 4
                      );
                  }),
                  (h.prototype.writeFloatLE = function (t, e, i) {
                      return D(this, t, e, !0, i);
                  }),
                  (h.prototype.writeFloatBE = function (t, e, i) {
                      return D(this, t, e, !1, i);
                  }),
                  (h.prototype.writeDoubleLE = function (t, e, i) {
                      return M(this, t, e, !0, i);
                  }),
                  (h.prototype.writeDoubleBE = function (t, e, i) {
                      return M(this, t, e, !1, i);
                  }),
                  (h.prototype.copy = function (t, e, i, r) {
                      if ((i || (i = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), 0 < r && r < i && (r = i), r === i)) return 0;
                      if (0 === t.length || 0 === this.length) return 0;
                      if (e < 0) throw new RangeError("targetStart out of bounds");
                      if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
                      if (r < 0) throw new RangeError("sourceEnd out of bounds");
                      r > this.length && (r = this.length), t.length - e < r - i && (r = t.length - e + i);
                      var n,
                          o = r - i;
                      if (this === t && i < e && e < r) for (n = o - 1; 0 <= n; --n) t[n + e] = this[n + i];
                      else if (o < 1e3 || !h.TYPED_ARRAY_SUPPORT) for (n = 0; n < o; ++n) t[n + e] = this[n + i];
                      else Uint8Array.prototype.set.call(t, this.subarray(i, i + o), e);
                      return o;
                  }),
                  (h.prototype.fill = function (t, e, i, r) {
                      if ("string" == typeof t) {
                          if (("string" == typeof e ? ((r = e), (e = 0), (i = this.length)) : "string" == typeof i && ((r = i), (i = this.length)), 1 === t.length)) {
                              var n = t.charCodeAt(0);
                              n < 256 && (t = n);
                          }
                          if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                          if ("string" == typeof r && !h.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                      } else "number" == typeof t && (t &= 255);
                      if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
                      if (i <= e) return this;
                      var o;
                      if (((e >>>= 0), (i = void 0 === i ? this.length : i >>> 0), t || (t = 0), "number" == typeof t)) for (o = e; o < i; ++o) this[o] = t;
                      else {
                          var s = h.isBuffer(t) ? t : I(new h(t, r).toString()),
                              a = s.length;
                          for (o = 0; o < i - e; ++o) this[o + e] = s[o % a];
                      }
                      return this;
                  });
              var F = /[^+\/0-9A-Za-z-_]/g;
              function L(t) {
                  return t < 16 ? "0" + t.toString(16) : t.toString(16);
              }
              function I(t, e) {
                  var i;
                  e = e || 1 / 0;
                  for (var r = t.length, n = null, o = [], s = 0; s < r; ++s) {
                      if (55295 < (i = t.charCodeAt(s)) && i < 57344) {
                          if (!n) {
                              if (56319 < i) {
                                  -1 < (e -= 3) && o.push(239, 191, 189);
                                  continue;
                              }
                              if (s + 1 === r) {
                                  -1 < (e -= 3) && o.push(239, 191, 189);
                                  continue;
                              }
                              n = i;
                              continue;
                          }
                          if (i < 56320) {
                              -1 < (e -= 3) && o.push(239, 191, 189), (n = i);
                              continue;
                          }
                          i = 65536 + (((n - 55296) << 10) | (i - 56320));
                      } else n && -1 < (e -= 3) && o.push(239, 191, 189);
                      if (((n = null), i < 128)) {
                          if ((e -= 1) < 0) break;
                          o.push(i);
                      } else if (i < 2048) {
                          if ((e -= 2) < 0) break;
                          o.push((i >> 6) | 192, (63 & i) | 128);
                      } else if (i < 65536) {
                          if ((e -= 3) < 0) break;
                          o.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
                      } else {
                          if (!(i < 1114112)) throw new Error("Invalid code point");
                          if ((e -= 4) < 0) break;
                          o.push((i >> 18) | 240, ((i >> 12) & 63) | 128, ((i >> 6) & 63) | 128, (63 & i) | 128);
                      }
                  }
                  return o;
              }
              function R(t) {
                  return r.toByteArray(
                      (function (t) {
                          var e;
                          if ((t = ((e = t), e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")).replace(F, "")).length < 2) return "";
                          for (; t.length % 4 != 0; ) t += "=";
                          return t;
                      })(t)
                  );
              }
              function B(t, e, i, r) {
                  for (var n = 0; n < r && !(n + i >= e.length || n >= t.length); ++n) e[n + i] = t[n];
                  return n;
              }
          }.call(this, i(23)));
      },
      function (vMa, wMa) {
          var xMa;
          xMa = (function () {
              return this;
          })();
          try {
              xMa = xMa || Function("return this")() || eval("this");
          } catch (t) {
              "object" == typeof window && (xMa = window);
          }
          vMa.exports = xMa;
      },
      function (t, e, i) {
          "use strict";
          (e.byteLength = function (t) {
              var e = c(t),
                  i = e[0],
                  r = e[1];
              return (3 * (i + r)) / 4 - r;
          }),
              (e.toByteArray = function (t) {
                  for (var e, i = c(t), r = i[0], s = i[1], a = new o((3 * (r + (f = s))) / 4 - f), h = 0, l = 0 < s ? r - 4 : r, u = 0; u < l; u += 4)
                      (e = (n[t.charCodeAt(u)] << 18) | (n[t.charCodeAt(u + 1)] << 12) | (n[t.charCodeAt(u + 2)] << 6) | n[t.charCodeAt(u + 3)]), (a[h++] = (e >> 16) & 255), (a[h++] = (e >> 8) & 255), (a[h++] = 255 & e);
                  var f;
                  return (
                      2 === s && ((e = (n[t.charCodeAt(u)] << 2) | (n[t.charCodeAt(u + 1)] >> 4)), (a[h++] = 255 & e)),
                      1 === s && ((e = (n[t.charCodeAt(u)] << 10) | (n[t.charCodeAt(u + 1)] << 4) | (n[t.charCodeAt(u + 2)] >> 2)), (a[h++] = (e >> 8) & 255), (a[h++] = 255 & e)),
                      a
                  );
              }),
              (e.fromByteArray = function (t) {
                  for (var e, i = t.length, n = i % 3, o = [], s = 0, a = i - n; s < a; s += 16383) o.push(l(t, s, a < s + 16383 ? a : s + 16383));
                  return 1 === n ? ((e = t[i - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "==")) : 2 === n && ((e = (t[i - 2] << 8) + t[i - 1]), o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "=")), o.join("");
              });
          for (var r = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, h = s.length; a < h; ++a)
              (r[a] = s[a]), (n[s.charCodeAt(a)] = a);
          function c(t) {
              var e = t.length;
              if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var i = t.indexOf("=");
              return -1 === i && (i = e), [i, i === e ? 0 : 4 - (i % 4)];
          }
          function l(t, e, i) {
              for (var n, o, s = [], a = e; a < i; a += 3) (n = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])), s.push(r[((o = n) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
              return s.join("");
          }
          (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
      },
      function (t, e) {
          (e.read = function (t, e, i, r, n) {
              var o,
                  s,
                  a = 8 * n - r - 1,
                  h = (1 << a) - 1,
                  c = h >> 1,
                  l = -7,
                  u = i ? n - 1 : 0,
                  f = i ? -1 : 1,
                  d = t[e + u];
              for (u += f, o = d & ((1 << -l) - 1), d >>= -l, l += a; 0 < l; o = 256 * o + t[e + u], u += f, l -= 8);
              for (s = o & ((1 << -l) - 1), o >>= -l, l += r; 0 < l; s = 256 * s + t[e + u], u += f, l -= 8);
              if (0 === o) o = 1 - c;
              else {
                  if (o === h) return s ? NaN : (1 / 0) * (d ? -1 : 1);
                  (s += Math.pow(2, r)), (o -= c);
              }
              return (d ? -1 : 1) * s * Math.pow(2, o - r);
          }),
              (e.write = function (t, e, i, r, n, o) {
                  var s,
                      a,
                      h,
                      c = 8 * o - n - 1,
                      l = (1 << c) - 1,
                      u = l >> 1,
                      f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                      d = r ? 0 : o - 1,
                      g = r ? 1 : -1,
                      p = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                  for (
                      e = Math.abs(e),
                          isNaN(e) || e === 1 / 0
                              ? ((a = isNaN(e) ? 1 : 0), (s = l))
                              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                                e * (h = Math.pow(2, -s)) < 1 && (s--, (h *= 2)),
                                2 <= (e += 1 <= s + u ? f / h : f * Math.pow(2, 1 - u)) * h && (s++, (h /= 2)),
                                l <= s + u ? ((a = 0), (s = l)) : 1 <= s + u ? ((a = (e * h - 1) * Math.pow(2, n)), (s += u)) : ((a = e * Math.pow(2, u - 1) * Math.pow(2, n)), (s = 0)));
                      8 <= n;
                      t[i + d] = 255 & a, d += g, a /= 256, n -= 8
                  );
                  for (s = (s << n) | a, c += n; 0 < c; t[i + d] = 255 & s, d += g, s /= 256, c -= 8);
                  t[i + d - g] |= 128 * p;
              });
      },
      function (t, e) {
          var i = {}.toString;
          t.exports =
              Array.isArray ||
              function (t) {
                  return "[object Array]" == i.call(t);
              };
      },
      function (t, e) {},
      function (t, e) {},
      function (t, e) {},
      function (t, e, i) {
          "use strict";
          i.r(e), i(10);
          var r = i(9),
              n = i.n(r),
              o = i(8),
              s = i.n(o),
              a = i(1),
              h = i.n(a),
              c = i(3),
              l = i.n(c),
              u = i(4),
              f = i.n(u),
              d = i(5),
              g = i.n(d),
              p = i(7),
              v = i.n(p),
              m = i(0),
              _ = i.n(m),
              y = i(2),
              b = i.n(y),
              x = (function () {
                  function t() {
                      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10,
                          i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                      h()(this, t), (this.undoLimit = e), (this.undoList = []), (this.redoList = []), (this.current = null), (this.debug = i);
                  }
                  return (
                      b()(t, [
                          {
                              key: "getUndoLimit",
                              value: function () {
                                  return this.undoLimit;
                              },
                          },
                          {
                              key: "getCurrent",
                              value: function () {
                                  return this.current;
                              },
                          },
                          {
                              key: "keep",
                              value: function (t) {
                                  try {
                                      (this.redoList = []), this.current && this.undoList.push(this.current), this.undoList.length > this.undoLimit && this.undoList.shift(), (this.current = t);
                                  } finally {
                                      this.print();
                                  }
                              },
                          },
                          {
                              key: "undo",
                              value: function () {
                                  try {
                                      return (
                                          this.current && (this.redoList.push(this.current), this.redoList.length > this.undoLimit && this.redoList.shift(), 0 === this.undoList.length && (this.current = null)),
                                          0 < this.undoList.length ? ((this.current = this.undoList.pop()), this.current) : null
                                      );
                                  } finally {
                                      this.print();
                                  }
                              },
                          },
                          {
                              key: "redo",
                              value: function () {
                                  try {
                                      return 0 < this.redoList.length ? (this.current && this.undoList.push(this.current), (this.current = this.redoList.pop()), this.current) : null;
                                  } finally {
                                      this.print();
                                  }
                              },
                          },
                          {
                              key: "canRedo",
                              value: function () {
                                  return 0 < this.redoList.length;
                              },
                          },
                          {
                              key: "canUndo",
                              value: function () {
                                  return 0 < this.undoList.length || null !== this.current;
                              },
                          },
                          {
                              key: "clear",
                              value: function () {
                                  (this.undoList = []), (this.redoList = []), (this.current = null), this.print();
                              },
                          },
                          {
                              key: "print",
                              value: function () {
                                  this.debug && console.log(this.undoList, " -> " + this.current + " <- ", this.redoList.slice(0).reverse());
                              },
                          },
                      ]),
                      t
                  );
              })(),
              C = function (t) {
                  var e;
                  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(t))
                      return 3 == (e = t.substring(1).split("")).length && (e = [e[0], e[0], e[1], e[1], e[2], e[2]]), "rgba(" + [((e = "0x" + e.join("")) >> 16) & 255, (e >> 8) & 255, 255 & e].join(",") + ",0.4)";
                  throw new Error("Bad Hex");
              },
              S = (function () {
                  function t(e) {
                      h()(this, t), (this._canvas = e);
                  }
                  return (
                      b()(t, [
                          { key: "configureCanvas", value: function (t) {} },
                          { key: "doMouseUp", value: function (t) {} },
                          { key: "doMouseDown", value: function (t) {} },
                          { key: "doMouseMove", value: function (t) {} },
                          { key: "doMouseOut", value: function (t) {} },
                      ]),
                      t
                  );
              })(),
              w = i(6).fabric,
              T = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  var e = this._canvas;
                                  (e.isDrawingMode = e.selection = !1),
                                      e.forEachObject(function (t) {
                                          return (t.selectable = t.evented = !1);
                                      }),
                                      (this._width = t.lineWidth),
                                      (this._color = t.lineColor);
                              },
                          },
                          {
                              key: "doMouseDown",
                              value: function (t) {
                                  this.isDown = !0;
                                  var e = this._canvas,
                                      i = e.getPointer(t.e),
                                      r = [i.x, i.y, i.x, i.y];
                                  (this.line = new w.Line(r, { strokeWidth: this._width, fill: this._color, stroke: this._color, originX: "center", originY: "center", selectable: !1, evented: !1 })),
                                      (this.head = new w.Triangle({ fill: this._color, left: i.x, top: i.y, originX: "center", originY: "center", height: 3 * this._width, width: 3 * this._width, selectable: !1, evented: !1, angle: 90 })),
                                      e.add(this.line),
                                      e.add(this.head);
                              },
                          },
                          {
                              key: "doMouseMove",
                              value: function (t) {
                                  if (this.isDown) {
                                      var e = this._canvas,
                                          i = e.getPointer(t.e);
                                      this.line.set({ x2: i.x, y2: i.y }), this.line.setCoords();
                                      var r = i.x - this.line.x1,
                                          n = i.y - this.line.y1;
                                      this.head.set({ left: i.x, top: i.y, angle: 90 + (180 * Math.atan2(n, r)) / Math.PI }), e.renderAll();
                                  }
                              },
                          },
                          {
                              key: "doMouseUp",
                              value: function (t) {
                                  this.isDown = !1;
                                  var e = this._canvas;
                                  e.remove(this.line), e.remove(this.head);
                                  var i = new w.Group([this.line, this.head]);
                                  e.add(i);
                              },
                          },
                          {
                              key: "doMouseOut",
                              value: function (t) {
                                  this.isDown = !1;
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              O = { Circle: "circle", Line: "line", Arrow: "arrow", Pencil: "pencil", Rectangle: "rectangle", RectangleLabel: "rectangle-label", Select: "select", Pan: "pan", Highlighter: "highlighter", DefaultTool: "default-tool" },
              k =
                  (i(6).fabric,
                  (function (t) {
                      function e() {
                          return h()(this, e), l()(this, f()(e).apply(this, arguments));
                      }
                      return (
                          g()(e, t),
                          b()(e, [
                              {
                                  key: "configureCanvas",
                                  value: function (t) {
                                      var e = this._canvas;
                                      (e.isDrawingMode = e.selection = !1),
                                          e.forEachObject(function (t) {
                                              return (t.selectable = t.evented = !1);
                                          }),
                                          e.discardActiveObject(),
                                          (e.defaultCursor = "pointer"),
                                          e.renderAll();
                                  },
                              },
                          ]),
                          e
                      );
                  })(S)),
              P = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  var e = this._canvas;
                                  (e.isDrawingMode = !1),
                                      (e.selection = !0),
                                      e.forEachObject(function (t) {
                                          t.selectable = t.evented = !0;
                                      });
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              E = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  (this._canvas.isDrawingMode = !0), (this._canvas.freeDrawingBrush.width = t.lineWidth), (this._canvas.freeDrawingBrush.color = t.lineColor);
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              j = i(6).fabric,
              A = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  var e = this._canvas;
                                  (e.isDrawingMode = e.selection = !1),
                                      e.forEachObject(function (t) {
                                          return (t.selectable = t.evented = !1);
                                      }),
                                      (this._width = t.lineWidth),
                                      (this._color = t.lineColor);
                              },
                          },
                          {
                              key: "doMouseDown",
                              value: function (t) {
                                  this.isDown = !0;
                                  var e = this._canvas,
                                      i = e.getPointer(t.e),
                                      r = [i.x, i.y, i.x, i.y];
                                  (this.line = new j.Line(r, { strokeWidth: this._width, fill: this._color, stroke: this._color, originX: "center", originY: "center", selectable: !1, evented: !1 })), e.add(this.line);
                              },
                          },
                          {
                              key: "doMouseMove",
                              value: function (t) {
                                  if (this.isDown) {
                                      var e = this._canvas,
                                          i = e.getPointer(t.e);
                                      this.line.set({ x2: i.x, y2: i.y }), this.line.setCoords(), e.renderAll();
                                  }
                              },
                          },
                          {
                              key: "doMouseUp",
                              value: function (t) {
                                  this.isDown = !1;
                              },
                          },
                          {
                              key: "doMouseOut",
                              value: function (t) {
                                  this.isDown = !1;
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              D = i(6).fabric,
              M = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  var e = this._canvas;
                                  (e.isDrawingMode = e.selection = !1),
                                      e.forEachObject(function (t) {
                                          return (t.selectable = t.evented = !1);
                                      }),
                                      (this._width = t.lineWidth),
                                      (this._color = t.lineColor),
                                      (this._fill = t.fillColor);
                              },
                          },
                          {
                              key: "doMouseDown",
                              value: function (t) {
                                  var e = this._canvas;
                                  this.isDown = !0;
                                  var i = e.getPointer(t.e);
                                  (this.startX = i.x),
                                      (this.startY = i.y),
                                      (this.rect = new D.Rect({
                                          left: this.startX,
                                          top: this.startY,
                                          originX: "left",
                                          originY: "top",
                                          width: i.x - this.startX,
                                          height: i.y - this.startY,
                                          stroke: this._color,
                                          strokeWidth: this._width,
                                          fill: this._fill,
                                          transparentCorners: !1,
                                          selectable: !1,
                                          evented: !1,
                                          strokeUniform: !0,
                                          noScaleCache: !1,
                                          angle: 0,
                                      })),
                                      e.add(this.rect);
                              },
                          },
                          {
                              key: "doMouseMove",
                              value: function (t) {
                                  if (this.isDown) {
                                      var e = this._canvas,
                                          i = e.getPointer(t.e);
                                      this.startX > i.x && this.rect.set({ left: Math.abs(i.x) }),
                                          this.startY > i.y && this.rect.set({ top: Math.abs(i.y) }),
                                          this.rect.set({ width: Math.abs(this.startX - i.x) }),
                                          this.rect.set({ height: Math.abs(this.startY - i.y) }),
                                          this.rect.setCoords(),
                                          e.renderAll();
                                  }
                              },
                          },
                          {
                              key: "doMouseUp",
                              value: function (t) {
                                  this.isDown = !1;
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              F = i(6).fabric,
              L = (function () {
                  function t(e, i, r, n) {
                      var o = this;
                      h()(this, t),
                          (this.update = function (t) {
                              o._textObj && o._rectObj && t.target === o._rectObj && o._textObj.set({ width: o._rectObj.getScaledWidth(), scaleX: 1, scaleY: 1, top: o._rectObj.top - o._textObj.getScaledHeight(), left: o._rectObj.left });
                          }),
                          (this._canvas = e),
                          (this._text = i),
                          (this._rectObj = new F.Rect(r)),
                          (this._textObj = new F.Textbox(i, n)),
                          e.on({ "object:scaling": this.update }),
                          e.on({ "object:moving": this.update });
                  }
                  return (
                      b()(t, [
                          {
                              key: "setText",
                              value: function (t) {
                                  (this._text = t), this._textObj.set({ text: t });
                              },
                          },
                      ]),
                      t
                  );
              })(),
              I = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  var e = this._canvas;
                                  (e.isDrawingMode = e.selection = !1),
                                      e.forEachObject(function (t) {
                                          return (t.selectable = t.evented = !1);
                                      }),
                                      (this._width = t.lineWidth),
                                      (this._color = t.lineColor),
                                      (this._fill = t.fillColor),
                                      (this._textString = t.text),
                                      (this._maxFontSize = 12);
                              },
                          },
                          {
                              key: "doMouseDown",
                              value: function (t) {
                                  var e = this._canvas;
                                  this.isDown = !0;
                                  var i = e.getPointer(t.e);
                                  for (
                                      this.startX = i.x,
                                          this.startY = i.y,
                                          this.rectangleLabel = new L(
                                              e,
                                              "New drawing",
                                              {
                                                  left: this.startX,
                                                  top: this.startY,
                                                  originX: "left",
                                                  originY: "top",
                                                  width: i.x - this.startX,
                                                  height: i.y - this.startY,
                                                  stroke: this._color,
                                                  strokeWidth: this._width,
                                                  fill: this._fill,
                                                  transparentCorners: !1,
                                                  selectable: !1,
                                                  evented: !1,
                                                  strokeUniform: !0,
                                                  noScaleCache: !1,
                                                  angle: 0,
                                              },
                                              {
                                                  left: this.startX,
                                                  top: this.startY - 12,
                                                  originX: "left",
                                                  originY: "top",
                                                  width: i.x - this.startX - this._width,
                                                  height: e.height / 3,
                                                  fontSize: this._maxFontSize,
                                                  noScaleCache: !1,
                                                  backgroundColor: this._color,
                                                  transparentCorners: !0,
                                                  hasControls: !1,
                                                  angle: 0,
                                              }
                                          ),
                                          this._objects && 0 < this._objects.length ? this._objects.push(this.rectangleLabel) : (this._objects = [this.rectangleLabel]);
                                      this.rectangleLabel._textObj.height > e.height / 3;

                                  )
                                      this.rectangleLabel._textObj.set({ fontSize: this.rectangleLabel._textObj.fontSize - 1, top: this.startY - this.rectangleLabel._textObj.fontSize - 12 });
                                  e.add(this.rectangleLabel._rectObj), e.add(this.rectangleLabel._textObj), e.renderAll();
                              },
                          },
                          {
                              key: "doMouseMove",
                              value: function (t) {
                                  if (this.isDown) {
                                      var e = this._canvas,
                                          i = e.getPointer(t.e);
                                      this.startX > i.x && (this.rectangleLabel._rectObj.set({ left: Math.abs(i.x) }), this.rectangleLabel._textObj.set({ left: Math.abs(i.x) })),
                                          this.startY > i.y && (this.rectangleLabel._rectObj.set({ left: Math.abs(i.x) }), this.rectangleLabel._textObj.set({ top: Math.abs(i.y) })),
                                          this.rectangleLabel._textObj.setCoords(),
                                          this.rectangleLabel._rectObj.set({ width: Math.abs(this.startX - i.x) }),
                                          this.rectangleLabel._textObj.set({ width: this.rectangleLabel._rectObj.getScaledWidth() }),
                                          this.rectangleLabel._rectObj.set({ height: Math.abs(this.startY - i.y) }),
                                          this.rectangleLabel._rectObj.setCoords(),
                                          e.renderAll();
                                  }
                              },
                          },
                          {
                              key: "doMouseUp",
                              value: function (t) {
                                  (this.isDown = !1), this._canvas.renderAll();
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              R = i(6).fabric,
              B = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  var e = this._canvas;
                                  (e.isDrawingMode = e.selection = !1),
                                      e.forEachObject(function (t) {
                                          return (t.selectable = t.evented = !1);
                                      }),
                                      (this._width = t.lineWidth),
                                      (this._color = t.lineColor),
                                      (this._fill = t.fillColor);
                              },
                          },
                          {
                              key: "doMouseDown",
                              value: function (t) {
                                  var e = this._canvas;
                                  this.isDown = !0;
                                  var i = e.getPointer(t.e),
                                      r = [i.x, i.y];
                                  (this.startX = r[0]),
                                      (this.startY = r[1]),
                                      (this.circle = new R.Circle({
                                          left: this.startX,
                                          top: this.startY,
                                          originX: "left",
                                          originY: "center",
                                          strokeWidth: this._width,
                                          stroke: this._color,
                                          fill: this._fill,
                                          selectable: !1,
                                          evented: !1,
                                          radius: 1,
                                      })),
                                      e.add(this.circle);
                              },
                          },
                          {
                              key: "doMouseMove",
                              value: function (t) {
                                  if (this.isDown) {
                                      var e,
                                          i,
                                          r,
                                          n,
                                          o = this._canvas,
                                          s = o.getPointer(t.e);
                                      this.circle.set({
                                          radius: ((e = { x: this.startX, y: this.startY }), (i = { x: s.x, y: s.y }), (r = i.x - e.x), (n = i.y - e.y), Math.sqrt(r * r + n * n) / 2),
                                          angle: (180 * Math.atan2(s.y - this.startY, s.x - this.startX)) / Math.PI,
                                      }),
                                          this.circle.setCoords(),
                                          o.renderAll();
                                  }
                              },
                          },
                          {
                              key: "doMouseUp",
                              value: function (t) {
                                  this.isDown = !1;
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              Y =
                  (i(6).fabric,
                  (function (t) {
                      function e() {
                          return h()(this, e), l()(this, f()(e).apply(this, arguments));
                      }
                      return (
                          g()(e, t),
                          b()(e, [
                              {
                                  key: "configureCanvas",
                                  value: function (t) {
                                      var e = this._canvas;
                                      (e.isDrawingMode = e.selection = !1),
                                          e.forEachObject(function (t) {
                                              return (t.selectable = t.evented = !1);
                                          }),
                                          (e.defaultCursor = "move");
                                  },
                              },
                              {
                                  key: "doMouseDown",
                                  value: function (t) {
                                      var e = this._canvas;
                                      this.isDown = !0;
                                      var i = e.getPointer(t.e);
                                      (this.startX = i.x), (this.startY = i.y);
                                  },
                              },
                              {
                                  key: "doMouseMove",
                                  value: function (t) {
                                      if (this.isDown) {
                                          var e = this._canvas,
                                              i = e.getPointer(t.e);
                                          e.relativePan({ x: i.x - this.startX, y: i.y - this.startY }), e.renderAll();
                                      }
                                  },
                              },
                              {
                                  key: "doMouseUp",
                                  value: function (t) {
                                      this.isDown = !1;
                                  },
                              },
                          ]),
                          e
                      );
                  })(S)),
              X = (function (t) {
                  function e() {
                      return h()(this, e), l()(this, f()(e).apply(this, arguments));
                  }
                  return (
                      g()(e, t),
                      b()(e, [
                          {
                              key: "configureCanvas",
                              value: function (t) {
                                  var e, i;
                                  (this._canvas.isDrawingMode = !0),
                                      (this._canvas.freeDrawingBrush.width = t.lineWidth),
                                      (this._canvas.freeDrawingBrush.color =
                                          -1 < t.lineColor.indexOf("#")
                                              ? C(t.lineColor)
                                              : C(
                                                    void 0 !==
                                                        (i = {
                                                            aliceblue: "#f0f8ff",
                                                            antiquewhite: "#faebd7",
                                                            aqua: "#00ffff",
                                                            aquamarine: "#7fffd4",
                                                            azure: "#f0ffff",
                                                            beige: "#f5f5dc",
                                                            bisque: "#ffe4c4",
                                                            black: "#000000",
                                                            blanchedalmond: "#ffebcd",
                                                            blue: "#0000ff",
                                                            blueviolet: "#8a2be2",
                                                            brown: "#a52a2a",
                                                            burlywood: "#deb887",
                                                            cadetblue: "#5f9ea0",
                                                            chartreuse: "#7fff00",
                                                            chocolate: "#d2691e",
                                                            coral: "#ff7f50",
                                                            cornflowerblue: "#6495ed",
                                                            cornsilk: "#fff8dc",
                                                            crimson: "#dc143c",
                                                            cyan: "#00ffff",
                                                            darkblue: "#00008b",
                                                            darkcyan: "#008b8b",
                                                            darkgoldenrod: "#b8860b",
                                                            darkgray: "#a9a9a9",
                                                            darkgreen: "#006400",
                                                            darkkhaki: "#bdb76b",
                                                            darkmagenta: "#8b008b",
                                                            darkolivegreen: "#556b2f",
                                                            darkorange: "#ff8c00",
                                                            darkorchid: "#9932cc",
                                                            darkred: "#8b0000",
                                                            darksalmon: "#e9967a",
                                                            darkseagreen: "#8fbc8f",
                                                            darkslateblue: "#483d8b",
                                                            darkslategray: "#2f4f4f",
                                                            darkturquoise: "#00ced1",
                                                            darkviolet: "#9400d3",
                                                            deeppink: "#ff1493",
                                                            deepskyblue: "#00bfff",
                                                            dimgray: "#696969",
                                                            dodgerblue: "#1e90ff",
                                                            firebrick: "#b22222",
                                                            floralwhite: "#fffaf0",
                                                            forestgreen: "#228b22",
                                                            fuchsia: "#ff00ff",
                                                            gainsboro: "#dcdcdc",
                                                            ghostwhite: "#f8f8ff",
                                                            gold: "#ffd700",
                                                            goldenrod: "#daa520",
                                                            gray: "#808080",
                                                            green: "#008000",
                                                            greenyellow: "#adff2f",
                                                            honeydew: "#f0fff0",
                                                            hotpink: "#ff69b4",
                                                            "indianred ": "#cd5c5c",
                                                            indigo: "#4b0082",
                                                            ivory: "#fffff0",
                                                            khaki: "#f0e68c",
                                                            lavender: "#e6e6fa",
                                                            lavenderblush: "#fff0f5",
                                                            lawngreen: "#7cfc00",
                                                            lemonchiffon: "#fffacd",
                                                            lightblue: "#add8e6",
                                                            lightcoral: "#f08080",
                                                            lightcyan: "#e0ffff",
                                                            lightgoldenrodyellow: "#fafad2",
                                                            lightgrey: "#d3d3d3",
                                                            lightgreen: "#90ee90",
                                                            lightpink: "#ffb6c1",
                                                            lightsalmon: "#ffa07a",
                                                            lightseagreen: "#20b2aa",
                                                            lightskyblue: "#87cefa",
                                                            lightslategray: "#778899",
                                                            lightsteelblue: "#b0c4de",
                                                            lightyellow: "#ffffe0",
                                                            lime: "#00ff00",
                                                            limegreen: "#32cd32",
                                                            linen: "#faf0e6",
                                                            magenta: "#ff00ff",
                                                            maroon: "#800000",
                                                            mediumaquamarine: "#66cdaa",
                                                            mediumblue: "#0000cd",
                                                            mediumorchid: "#ba55d3",
                                                            mediumpurple: "#9370d8",
                                                            mediumseagreen: "#3cb371",
                                                            mediumslateblue: "#7b68ee",
                                                            mediumspringgreen: "#00fa9a",
                                                            mediumturquoise: "#48d1cc",
                                                            mediumvioletred: "#c71585",
                                                            midnightblue: "#191970",
                                                            mintcream: "#f5fffa",
                                                            mistyrose: "#ffe4e1",
                                                            moccasin: "#ffe4b5",
                                                            navajowhite: "#ffdead",
                                                            navy: "#000080",
                                                            oldlace: "#fdf5e6",
                                                            olive: "#808000",
                                                            olivedrab: "#6b8e23",
                                                            orange: "#ffa500",
                                                            orangered: "#ff4500",
                                                            orchid: "#da70d6",
                                                            palegoldenrod: "#eee8aa",
                                                            palegreen: "#98fb98",
                                                            paleturquoise: "#afeeee",
                                                            palevioletred: "#d87093",
                                                            papayawhip: "#ffefd5",
                                                            peachpuff: "#ffdab9",
                                                            peru: "#cd853f",
                                                            pink: "#ffc0cb",
                                                            plum: "#dda0dd",
                                                            powderblue: "#b0e0e6",
                                                            purple: "#800080",
                                                            rebeccapurple: "#663399",
                                                            red: "#ff0000",
                                                            rosybrown: "#bc8f8f",
                                                            royalblue: "#4169e1",
                                                            saddlebrown: "#8b4513",
                                                            salmon: "#fa8072",
                                                            sandybrown: "#f4a460",
                                                            seagreen: "#2e8b57",
                                                            seashell: "#fff5ee",
                                                            sienna: "#a0522d",
                                                            silver: "#c0c0c0",
                                                            skyblue: "#87ceeb",
                                                            slateblue: "#6a5acd",
                                                            slategray: "#708090",
                                                            snow: "#fffafa",
                                                            springgreen: "#00ff7f",
                                                            steelblue: "#4682b4",
                                                            tan: "#d2b48c",
                                                            teal: "#008080",
                                                            thistle: "#d8bfd8",
                                                            tomato: "#ff6347",
                                                            turquoise: "#40e0d0",
                                                            violet: "#ee82ee",
                                                            wheat: "#f5deb3",
                                                            white: "#ffffff",
                                                            whitesmoke: "#f5f5f5",
                                                            yellow: "#ffff00",
                                                            yellowgreen: "#9acd32",
                                                        })[(e = t.lineColor).toLowerCase()] && i[e.toLowerCase()]
                                                ));
                              },
                          },
                      ]),
                      e
                  );
              })(S),
              U = i(6).fabric,
              W = (function (t) {
                  function e() {
                      var t, i;
                      h()(this, e);
                      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                      return (
                          ((i = l()(this, (t = f()(e)).call.apply(t, [this].concat(o)))).state = { action: !0 }),
                          (i._initTools = function (t) {
                              (i._tools = {}),
                                  (i._tools[O.Select] = new P(t)),
                                  (i._tools[O.Pencil] = new E(t)),
                                  (i._tools[O.Line] = new A(t)),
                                  (i._tools[O.Arrow] = new T(t)),
                                  (i._tools[O.Rectangle] = new M(t)),
                                  (i._tools[O.RectangleLabel] = new I(t)),
                                  (i._tools[O.Circle] = new B(t)),
                                  (i._tools[O.Pan] = new Y(t)),
                                  (i._tools[O.Highlighter] = new X(t)),
                                  (i._tools[O.DefaultTool] = new k(t));
                          }),
                          (i.enableTouchScroll = function () {
                              var t = i._fc;
                              t.allowTouchScrolling || (t.allowTouchScrolling = !0);
                          }),
                          (i.disableTouchScroll = function () {
                              var t = i._fc;
                              t.allowTouchScrolling && (t.allowTouchScrolling = !1);
                          }),
                          (i.addImg = function (t) {
                              var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                  r = i._fc;
                              U.Image.fromURL(t, function (t) {
                                  var i = { left: Math.random() * (r.getWidth() - 0.5 * t.width), top: Math.random() * (r.getHeight() - 0.5 * t.height), scale: 0.5 };
                                  Object.assign(i, e), t.scale(i.scale), t.set({ left: i.left, top: i.top }), r.add(t);
                              });
                          }),
                          (i._onObjectAdded = function (t) {
                              var e = i.props.onObjectAdded;
                              if (i.state.action) {
                                  var r = t.target;
                                  r.__version = 1;
                                  var n = r.toJSON();
                                  r.__originalState = n;
                                  var o = JSON.stringify(n);
                                  i._history.keep([r, o, o]), e(t);
                              } else i.setState({ action: !0 });
                          }),
                          (i._onObjectMoving = function (t) {
                              (0, i.props.onObjectMoving)(t);
                          }),
                          (i._onObjectScaling = function (t) {
                              (0, i.props.onObjectScaling)(t);
                          }),
                          (i._onObjectRotating = function (t) {
                              (0, i.props.onObjectRotating)(t);
                          }),
                          (i._onObjectModified = function (t) {
                              var e = i.props.onObjectModified,
                                  r = t.target;
                              r.__version += 1;
                              var n = JSON.stringify(r.__originalState),
                                  o = r.toJSON();
                              r.__originalState = o;
                              var s = JSON.stringify(o);
                              i._history.keep([r, n, s]), e(t);
                          }),
                          (i._onObjectRemoved = function (t) {
                              var e = i.props.onObjectRemoved,
                                  r = t.target;
                              r.__removed ? (r.__version += 1) : ((r.__version = 0), e(t));
                          }),
                          (i._onMouseDown = function (t) {
                              var e = i.props.onMouseDown;
                              i._selectedTool.doMouseDown(t), e(t);
                          }),
                          (i._onMouseMove = function (t) {
                              var e = i.props.onMouseMove;
                              i._selectedTool.doMouseMove(t), e(t);
                          }),
                          (i._onMouseOut = function (t) {
                              var e = i.props.onMouseOut;
                              if ((i._selectedTool.doMouseOut(t), i.props.onChange)) {
                                  var r = i.props.onChange;
                                  setTimeout(function () {
                                      r(t.e);
                                  }, 10);
                              }
                              e(t);
                          }),
                          (i._onMouseUp = function (t) {
                              var e = i.props.onMouseUp;
                              if ((i._selectedTool.doMouseUp(t), i.props.tool !== O.Pencil)) {
                                  var r = i._fc.getObjects(),
                                      n = r[r.length - 1];
                                  n && 1 === n.__version && (n.__originalState = n.toJSON());
                              }
                              if (i.props.onChange) {
                                  var o = i.props.onChange;
                                  setTimeout(function () {
                                      o(t.e);
                                  }, 10);
                              }
                              e(t);
                          }),
                          (i._resize = function (t) {
                              var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                  r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                              t && t.preventDefault();
                              var n = i.props,
                                  o = n.widthCorrection,
                                  s = n.heightCorrection,
                                  a = i._fc,
                                  h = i._container,
                                  c = h.offsetWidth,
                                  l = h.clientHeight,
                                  u = e || a.getWidth(),
                                  f = r || a.getHeight(),
                                  d = ((c - o) / u).toFixed(2),
                                  g = ((l - s) / f).toFixed(2);
                              if ((a.setWidth(c - o), a.setHeight(l - s), a.backgroundImage)) {
                                  var p = a.backgroundImage;
                                  (p.width = p.width * d), (p.height = p.height * g);
                              }
                              var v = a.getObjects();
                              for (var m in v) {
                                  var _ = v[m],
                                      y = _.scaleX * d,
                                      b = _.scaleY * g,
                                      x = _.left * d,
                                      C = _.top * g;
                                  (_.scaleX = y), (_.scaleY = b), (_.left = x), (_.top = C), _.setCoords();
                              }
                              a.renderAll(), a.calcOffset();
                          }),
                          (i._backgroundColor = function (t) {
                              if (t) {
                                  var e = i._fc;
                                  e.setBackgroundColor(t, function () {
                                      return e.renderAll();
                                  });
                              }
                          }),
                          (i.zoom = function (t) {
                              var e = i._fc,
                                  r = e.getObjects();
                              for (var n in r) (r[n].scaleX = r[n].scaleX * t), (r[n].scaleY = r[n].scaleY * t), (r[n].left = r[n].left * t), (r[n].top = r[n].top * t), r[n].setCoords();
                              e.renderAll(), e.calcOffset();
                          }),
                          (i.undo = function () {
                              var t = i._history,
                                  e = t.getCurrent(),
                                  r = s()(e, 3),
                                  n = r[0],
                                  o = r[1];
                              r[2],
                                  t.undo(),
                                  n.__removed
                                      ? i.setState({ action: !1 }, function () {
                                            i._fc.add(n), (n.__version -= 1), (n.__removed = !1);
                                        })
                                      : n.__version <= 1
                                      ? i._fc.remove(n)
                                      : ((n.__version -= 1), n.setOptions(JSON.parse(o)), n.setCoords(), i._fc.renderAll()),
                                  i.props.onChange && i.props.onChange();
                          }),
                          (i.redo = function () {
                              var t = i._history;
                              if (t.canRedo()) {
                                  var e = i._fc,
                                      r = t.redo(),
                                      n = s()(r, 3),
                                      o = n[0],
                                      a = (n[1], n[2]);
                                  0 === o.__version
                                      ? i.setState({ action: !1 }, function () {
                                            e.add(o), (o.__version = 1);
                                        })
                                      : ((o.__version += 1), o.setOptions(JSON.parse(a))),
                                      o.setCoords(),
                                      e.renderAll(),
                                      i.props.onChange && i.props.onChange();
                              }
                          }),
                          (i.canUndo = function () {
                              return i._history.canUndo();
                          }),
                          (i.canRedo = function () {
                              return i._history.canRedo();
                          }),
                          (i.toDataURL = function (t) {
                              return i._fc.toDataURL(t);
                          }),
                          (i.toJSON = function (t) {
                              return i._fc.toJSON(t);
                          }),
                          (i.fromJSON = function (t) {
                              if (t) {
                                  var e = i._fc;
                                  setTimeout(function () {
                                      e.loadFromJSON(t, function () {
                                          i.props.tool === O.DefaultTool &&
                                              ((e.isDrawingMode = e.selection = !1),
                                              e.forEachObject(function (t) {
                                                  return (t.selectable = t.evented = !1);
                                              })),
                                              e.renderAll(),
                                              i.props.onChange && i.props.onChange();
                                      });
                                  }, 100);
                              }
                          }),
                          (i.clear = function (t) {
                              var e = i.toJSON(t);
                              return i._fc.clear(), i._history.clear(), e;
                          }),
                          (i.hasSelection = function () {
                              return !!i._fc.getActiveObject();
                          }),
                          (i.clearSelection = function () {
                              var t = i._fc;
                              t.discardActiveObject(), t.requestRenderAll();
                          }),
                          (i.removeSelected = function () {
                              var t = i._fc,
                                  e = t.getActiveObject();
                              if (e) {
                                  var r = [];
                                  "activeSelection" === e.type
                                      ? e.forEachObject(function (t) {
                                            return r.push(t);
                                        })
                                      : r.push(e),
                                      r.forEach(function (e) {
                                          e.__removed = !0;
                                          var r = e.toJSON();
                                          e.__originalState = r;
                                          var n = JSON.stringify(r);
                                          i._history.keep([e, n, n]), t.remove(e);
                                      }),
                                      t.discardActiveObject(),
                                      t.requestRenderAll();
                              }
                          }),
                          (i.copy = function () {
                              i._fc.getActiveObject().clone(function (t) {
                                  return (i._clipboard = t);
                              });
                          }),
                          (i.paste = function () {
                              i._clipboard.clone(function (t) {
                                  var e = i._fc;
                                  e.discardActiveObject(),
                                      t.set({ left: t.left + 10, top: t.top + 10, evented: !0 }),
                                      "activeSelection" === t.type
                                          ? ((t.canvas = e),
                                            t.forEachObject(function (t) {
                                                return e.add(t);
                                            }),
                                            t.setCoords())
                                          : e.add(t),
                                      (i._clipboard.top += 10),
                                      (i._clipboard.left += 10),
                                      e.setActiveObject(t),
                                      e.requestRenderAll();
                              });
                          }),
                          (i.setBackgroundFromDataUrl = function (t) {
                              var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                  r = i._fc,
                                  o = new Image();
                              o.setAttribute("crossOrigin", "anonymous");
                              var s = e.stretched,
                                  a = e.stretchedX,
                                  h = e.stretchedY,
                                  c = n()(e, ["stretched", "stretchedX", "stretchedY"]);
                              (o.onload = function () {
                                  var t = new U.Image(o);
                                  (s || a) && t.scaleToWidth(r.width),
                                      (s || h) && t.scaleToHeight(r.height),
                                      r.setBackgroundImage(
                                          t,
                                          function () {
                                              return r.renderAll();
                                          },
                                          c
                                      );
                              }),
                                  (o.src = t);
                          }),
                          (i.addText = function (t) {
                              var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                  r = i._fc,
                                  n = new U.IText(t, e),
                                  o = { left: 0.5 * (r.getWidth() - n.width), top: 0.5 * (r.getHeight() - n.height) };
                              Object.assign(e, o), n.set({ left: e.left, top: e.top }), r.add(n);
                          }),
                          (i.callEvent = function (t, e) {
                              i._selectedTool && e(t);
                          }),
                          (i.componentDidMount = function () {
                              var t = i.props,
                                  e = t.tool,
                                  r = t.value,
                                  n = t.undoSteps,
                                  o = t.defaultValue,
                                  s = t.backgroundColor,
                                  a = (i._fc = new U.Canvas(i._canvas));
                              i._initTools(a), i._backgroundColor(s);
                              var h = i._tools[e];
                              h && h.configureCanvas(i.props),
                                  (i._selectedTool = h),
                                  window.addEventListener("resize", i._resize, !1),
                                  (i._history = new x(n)),
                                  a.on("object:added", function (t) {
                                      return i.callEvent(t, i._onObjectAdded);
                                  }),
                                  a.on("object:modified", function (t) {
                                      return i.callEvent(t, i._onObjectModified);
                                  }),
                                  a.on("object:removed", function (t) {
                                      return i.callEvent(t, i._onObjectRemoved);
                                  }),
                                  a.on("mouse:down", function (t) {
                                      return i.callEvent(t, i._onMouseDown);
                                  }),
                                  a.on("mouse:move", function (t) {
                                      return i.callEvent(t, i._onMouseMove);
                                  }),
                                  a.on("mouse:up", function (t) {
                                      return i.callEvent(t, i._onMouseUp);
                                  }),
                                  a.on("mouse:out", function (t) {
                                      return i.callEvent(t, i._onMouseOut);
                                  }),
                                  a.on("object:moving", function (t) {
                                      return i.callEvent(t, i._onObjectMoving);
                                  }),
                                  a.on("object:scaling", function (t) {
                                      return i.callEvent(t, i._onObjectScaling);
                                  }),
                                  a.on("object:rotating", function (t) {
                                      return i.callEvent(t, i._onObjectRotating);
                                  }),
                                  i.disableTouchScroll(),
                                  i._resize(),
                                  (r || o) && i.fromJSON(r || o);
                          }),
                          (i.componentWillUnmount = function () {
                              return window.removeEventListener("resize", i._resize);
                          }),
                          (i.componentDidUpdate = function (t, e) {
                              (i.props.width === t.width && i.props.height === t.height) || i._resize(),
                                  i.props.tool !== t.tool && ((i._selectedTool = i._tools[i.props.tool]), (i._fc.defaultCursor = "default"), i._selectedTool && i._selectedTool.configureCanvas(i.props)),
                                  i.props.backgroundColor !== t.backgroundColor && i._backgroundColor(i.props.backgroundColor),
                                  (i.props.value !== t.value || (i.props.value && i.props.forceValue)) && i.fromJSON(i.props.value);
                          }),
                          (i.render = function () {
                              var t = i.props,
                                  e = t.className,
                                  r = t.style,
                                  n = t.width,
                                  o = t.height,
                                  s = Object.assign({}, r || {}, n ? { width: n } : {}, o ? { height: o } : { height: 512 });
                              return v.a.createElement(
                                  "div",
                                  {
                                      className: e,
                                      ref: function (t) {
                                          return (i._container = t);
                                      },
                                      style: s,
                                  },
                                  v.a.createElement(
                                      "canvas",
                                      {
                                          id: (function () {
                                              var t,
                                                  e = "";
                                              for (t = 0; t < 32; t += 1)
                                                  switch (t) {
                                                      case 8:
                                                      case 20:
                                                          (e += "-"), (e += ((16 * Math.random()) | 0).toString(16));
                                                          break;
                                                      case 12:
                                                          (e += "-"), (e += "4");
                                                          break;
                                                      case 16:
                                                          (e += "-"), (e += ((4 * Math.random()) | 8).toString(16));
                                                          break;
                                                      default:
                                                          e += ((16 * Math.random()) | 0).toString(16);
                                                  }
                                              return e;
                                          })(),
                                          ref: function (t) {
                                              return (i._canvas = t);
                                          },
                                      },
                                      "Sorry, Canvas HTML5 element is not supported by your browser :("
                                  )
                              );
                          }),
                          i
                      );
                  }
                  return g()(e, t), e;
              })(p.PureComponent);
          (W.propTypes = {
              lineColor: _.a.string,
              lineWidth: _.a.number,
              fillColor: _.a.string,
              backgroundColor: _.a.string,
              opacity: _.a.number,
              undoSteps: _.a.number,
              tool: _.a.string,
              imageFormat: _.a.string,
              value: _.a.object,
              forceValue: _.a.bool,
              widthCorrection: _.a.number,
              heightCorrection: _.a.number,
              onChange: _.a.func,
              defaultValue: _.a.object,
              width: _.a.number,
              height: _.a.number,
              onObjectAdded: _.a.func,
              onObjectModified: _.a.func,
              onObjectRemoved: _.a.func,
              onMouseDown: _.a.func,
              onMouseMove: _.a.func,
              onMouseUp: _.a.func,
              onMouseOut: _.a.func,
              onObjectMoving: _.a.func,
              onObjectScaling: _.a.func,
              onObjectRotating: _.a.func,
              className: _.a.string,
              style: _.a.object,
          }),
              (W.defaultProps = {
                  lineColor: "black",
                  lineWidth: 10,
                  fillColor: "transparent",
                  backgroundColor: "transparent",
                  opacity: 1,
                  undoSteps: 25,
                  tool: null,
                  widthCorrection: 0,
                  heightCorrection: 0,
                  forceValue: !1,
                  onObjectAdded: function () {
                      return null;
                  },
                  onObjectModified: function () {
                      return null;
                  },
                  onObjectRemoved: function () {
                      return null;
                  },
                  onMouseDown: function () {
                      return null;
                  },
                  onMouseMove: function () {
                      return null;
                  },
                  onMouseUp: function () {
                      return null;
                  },
                  onMouseOut: function () {
                      return null;
                  },
                  onObjectMoving: function () {
                      return null;
                  },
                  onObjectScaling: function () {
                      return null;
                  },
                  onObjectRotating: function () {
                      return null;
                  },
              });
          var z = W;
          i.d(e, "SketchField", function () {
              return z;
          }),
              i.d(e, "Tools", function () {
                  return O;
              }),
              (e.default = { SketchField: z, Tools: O });
      },
  ]);
});
