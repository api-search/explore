! function(v) {
    "use strict";

    function s(t, e) {
        return this.bctx = null, this.bgPixel = null, this.ctx = null, this.diffChannel = null, this.container = e, this.grid = [], this.ngx = null, this.ngy = null, this.settings = t, this.size = null, this.words = [], this.linkTable = [], this.match = null, this
    }
    var z = "awesomeCloud",
        n = {
            size: {
                grid: 8,
                factor: 0,
                normalize: !0
            },
            color: {
                background: "rgba(255,255,255,0)",
                start: "#20f",
                end: "#e00"
            },
            options: {
                color: "gradient",
                rotationRatio: .3,
                printMultiplier: 1,
                sort: "highest"
            },
            font: "Helvetica, Arial, sans-serif",
            shape: "circle"
        };
    v.fn.awesomeCloud = function(t, i) {
        if ("object" == typeof t) i = t;
        else if ("string" == typeof t) {
            var e = this.data("_" + z);
            return !!e && (void 0 !== n[t] && (void 0 !== i ? (e.settings[t] = i, !0) : e.settings[t]))
        }
        return i = v.extend(!0, {}, n, i || {}), this.each(function() {
            var t = v(this),
                e = new s(jQuery.extend(!0, {}, i), t);
            e.create(), t.data("_" + z, e)
        })
    }, s.prototype = {
        create: function() {
            var t, e, i, s, n, r = this,
                a = 0,
                o = null,
                h = 0,
                l = 0,
                g = z + "TempCheck",
                f = null,
                d = !1,
                c = 0,
                u = .1,
                w = 0,
                p = 0,
                m = 0,
                b = 0,
                y = null,
                x = null,
                M = null;
            switch (this.settings.weightFactor = function(t) {
                    return t * r.settings.size.factor
                }, this.settings.gridSize = Math.max(this.settings.size.grid, 4) * this.settings.options.printMultiplier, this.settings.color.start = this.colorToRGBA(this.settings.color.start), this.settings.color.end = this.colorToRGBA(this.settings.color.end), this.settings.color.background = this.colorToRGBA(this.settings.color.background), this.settings.minSize = this.minimumFontSize(), this.settings.ellipticity = 1, this.settings.shape) {
                case "square":
                    this.settings.shape = function(t) {
                        var e = (t + Math.PI / 4) % (2 * Math.PI / 4);
                        return 1 / (Math.cos(e) + Math.sin(e))
                    };
                    break;
                case "diamond":
                    this.settings.shape = function(t) {
                        var e = t % (2 * Math.PI / 4);
                        return 1 / (Math.cos(e) + Math.sin(e))
                    };
                    break;
                case "x":
                    this.settings.shape = function(t) {
                        var e = t % (2 * Math.PI / 4);
                        return 1 / (Math.cos(e) + Math.sin(e) - 2 * Math.PI / 4)
                    };
                    break;
                case "triangle":
                    this.settings.shape = function(t) {
                        var e = (t + 3 * Math.PI / 2) % (2 * Math.PI / 3);
                        return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
                    };
                    break;
                case "triangle-forward":
                    this.settings.shape = function(t) {
                        var e = t % (2 * Math.PI / 3);
                        return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
                    };
                    break;
                case "pentagon":
                    this.settings.shape = function(t) {
                        var e = (t + .955) % (2 * Math.PI / 5);
                        return 1 / (Math.cos(e) + .726543 * Math.sin(e))
                    };
                    break;
                case "star":
                    this.settings.shape = function(t) {
                        var e = (t + .955) % (2 * Math.PI / 10);
                        return 0 <= (t + .955) % (2 * Math.PI / 5) - 2 * Math.PI / 10 ? 1 / (Math.cos(2 * Math.PI / 10 - e) + 3.07768 * Math.sin(2 * Math.PI / 10 - e)) : 1 / (Math.cos(e) + 3.07768 * Math.sin(e))
                    };
                    break;
                case "circle":
                    this.settings.shape = function(t) {
                        return 1
                    };
                    break;
                default:
                    this.settings.shape = function(t) {
                        return 1
                    }
            }
            if (this.size = {
                    left: this.container.offset().left,
                    top: this.container.offset().top,
                    height: this.container.height() * this.settings.options.printMultiplier,
                    width: this.container.width() * this.settings.options.printMultiplier,
                    screenHeight: this.container.height(),
                    screenWidth: this.container.width()
                }, this.settings.ellipticity = this.size.height / this.size.width, 2 < this.settings.ellipticity && (this.settings.ellipticity = 2), this.settings.ellipticity < .2 && (this.settings.ellipticity = .2), this.settings.weight = {
                    lowest: null,
                    highest: null,
                    average: null
                }, this.container.children().each(function(t, e) {
                    if (M = y = null, l = parseInt(v(this).attr("data-weight"), 10), h += l, r.settings.weight.lowest || (r.settings.weight.lowest = l), r.settings.weight.highest || (r.settings.weight.highest = l), l < r.settings.weight.lowest && (r.settings.weight.lowest = l), l > r.settings.weight.highest && (r.settings.weight.highest = l), r.settings.weight.average = h / (t + 1), v(this).css("display", "none"), 0 === v(this).has("a").length) M = v(this).html();
                    else {
                        var i = v(this).children(":first");
                        y = i.attr("href"), x = i.attr("target"), M = i.html()
                    }
                    r.words.push([M, l, y, x])
                }), this.settings.range = this.settings.weight.highest - this.settings.weight.lowest, !0 === this.settings.size.normalize)
                for (this.words.sort(function(t, e) {
                        return t[1] - e[1]
                    }), a = 0; a < this.words.length; a++) null === f ? f = this.words[a][1] : this.words[a][1] - f > this.settings.weight.average && (this.words[a][1] -= (this.words[a][1] - f) / (.38 * this.settings.weight.average) + f);
            if (this.words.sort(function(t, e) {
                    return "random" === r.settings.options.sort ? .5 - Math.random() : "lowest" === r.settings.options.sort ? t[1] - e[1] : e[1] - t[1]
                }), this.settings.size.factor === parseInt(0, 10)) {
                for (this.settings.size.factor = 1, o = z + "SizeTest", d = !1, u = .1, b = m = p = w = c = 0, t = Math.min(this.size.width, this.size.height), e = this.createCanvas({
                        id: o,
                        width: t,
                        height: t,
                        left: 0,
                        top: 0
                    }), a = 0; a < this.words.length; a++) e.font = this.settings.weightFactor(this.words[a][1]) + "px " + this.settings.font, w < (b = e.measureText(this.words[a][0]).width) && (w = b, p = this.words[a]);
                for (; !d;) c = this.settings.weightFactor(p[1]), e.font = c.toString(10) + "px " + this.settings.font, .95 * t < (b = e.measureText(p[0]).width) ? this.settings.size.factor -= u : b < .9 * t ? this.settings.size.factor += u : d = !0, 1e4 < (m += 1) && (d = !0);
                this.destroyCanvas(o), this.settings.size.factor -= u
            }
            if (this.settings.color.increment = {
                    r: (this.settings.color.end.r - this.settings.color.start.r) / this.settings.range,
                    g: (this.settings.color.end.g - this.settings.color.start.g) / this.settings.range,
                    b: (this.settings.color.end.b - this.settings.color.start.b) / this.settings.range,
                    a: (this.settings.color.end.a - this.settings.color.start.a) / this.settings.range
                }, this.ngx = Math.floor(this.size.width / this.settings.gridSize), this.ngy = Math.floor(this.size.height / this.settings.gridSize), this.grid = [], o = z + this.container.attr("id"), this.ctx = this.createCanvas({
                    parent: this.container,
                    id: o,
                    width: this.size.width,
                    height: this.size.height,
                    left: "0px",
                    top: "0px"
                }), this.bctx = this.createCanvas({
                    id: g,
                    width: 1,
                    height: 1,
                    left: 0,
                    top: 0
                }), this.bctx.fillStyle = this.settings.color.background.rgba, this.bctx.clearRect(0, 0, 1, 1), this.bctx.fillStyle = this.settings.color.background.rgba, this.bctx.fillRect(0, 0, 1, 1), this.bgPixel = this.bctx.getImageData(0, 0, 1, 1).data, "function" != typeof this.settings.options.color && "random" !== this.settings.options.color.substr(0, 6) && "gradient" !== this.settings.options.color.substr(0, 8)) {
                for (this.bctx.fillStyle = this.colorToRGBA(this.settings.options.color).rgba, this.bctx.fillRect(0, 0, 1, 1), i = this.bctx.getImageData(0, 0, 1, 1).data, a = 4; a--;)
                    if (10 < Math.abs(i[a] - this.bgPixel[a])) {
                        this.diffChannel = a;
                        break
                    }
            } else this.diffChannel = NaN;
            for (this.destroyCanvas(g), s = this.ngx; s--;)
                for (this.grid[s] = [], n = this.ngy; n--;) this.grid[s][n] = !0;
            return this.ctx.fillStyle = this.settings.color.background.rgba, this.ctx.clearRect(0, 0, this.ngx * (this.settings.gridSize + 1), this.ngy * (this.settings.gridSize + 1)), this.ctx.fillRect(0, 0, this.ngx * (this.settings.gridSize + 1), this.ngy * (this.settings.gridSize + 1)), this.ctx.textBaseline = "top", a = 0, window.setImmediate(function t() {
                a >= r.words.length || (r.putWord(r.words[a][0], r.words[a][1], r.words[a][2], r.words[a][3]), a += 1, window.setImmediate(t))
            }), r.allDone(o), !0
        },
        allDone: function(t) {
            var a = this,
                o = document.getElementById(t);
            v("#" + t).width(this.size.screenWidth), v("#" + t).height(this.size.screenHeight), v("#" + t).css("display", "block"), v("#" + t).css("visibility", "visible"), o.addEventListener("mousemove", function(t) {
                var e = 0,
                    i = 0;
                !t.layerX && 0 !== t.layerX || (e = t.layerX, i = t.layerY), e -= o.offsetLeft, e += v(o).position().left, e = Math.floor(e * a.settings.options.printMultiplier), i -= o.offsetTop, i += v(o).position().top, i = Math.floor(i * a.settings.options.printMultiplier), a.match = null;
                for (var s = 0, n = a.linkTable.length; s < n; s++) {
                    var r = a.linkTable[s];
                    e >= r.x && e <= r.x + r.width && i >= r.y && i <= r.y + r.height && (a.match = r)
                }
                null !== a.match ? document.body.style.cursor = "pointer" : document.body.style.cursor = ""
            }, !1), o.addEventListener("click", function(t) {
                null !== a.match && (a.match.target ? window.open(a.match.link, a.match.target) : window.location = a.match.link)
            }, !1)
        },
        minimumFontSize: function() {
            for (var t, e, i = z + "FontTest", s = this.createCanvas({
                    id: i,
                    width: 50,
                    height: 50,
                    left: 0,
                    top: 0
                }), n = 20; n;) {
                if (s.font = n.toString(10) + "px sans-serif", s.measureText("ï¼·").width === t && s.measureText("m").width === e) return this.destroyCanvas(i), (n + 1) / 2;
                t = s.measureText("ï¼·").width, e = s.measureText("m").width, n -= 1
            }
            return this.destroyCanvas(i), 0
        },
        createCanvas: function(t) {
            var e, i = t.id,
                s = v("body");
            return void 0 !== t.parent && (s = t.parent), s.append('<canvas id="' + i + '" width="' + t.width + '" height="' + t.height + '">.</canvas>'), v("#" + i).css("visibility", "hidden"), v("#" + i).css("display", "none"), v("#" + i).css("position", "relative"), v("#" + i).css("z-index", 1e4), v("#" + i).width(t.width), v("#" + i).height(t.height), v("#" + i).offset({
                top: t.top,
                left: t.left
            }), (e = document.getElementById(i)).setAttribute("width", t.width), e.setAttribute("height", t.height), e.getContext("2d")
        },
        destroyCanvas: function(t) {
            v("#" + t).remove()
        },
        putWord: function(e, i, s, n) {
            var r, a, o, h, l, t, g, f, d, c, u, w, p, m, b, y = this,
                x = Math.random() < this.settings.options.rotationRatio,
                M = this.settings.weightFactor(i),
                v = null,
                k = null;
            if (M <= this.settings.minSize) return !1;
            for (this.ctx.font = M.toString(10) + "px " + this.settings.font, x ? (v = this.ctx.measureText(e).width, k = Math.max(M, this.ctx.measureText("m").width, this.ctx.measureText("ï¼·").width), /[Jgpqy]/.test(e) && (k *= 1.5), k += Math.floor(M / 6), v += Math.floor(M / 6)) : (k = this.ctx.measureText(e).width, v = Math.max(M, this.ctx.measureText("m").width, this.ctx.measureText("ï¼·").width), /[Jgpqy]/.test(e) && (v *= 1.5), v += Math.floor(M / 6), k += Math.floor(M / 6)), k = Math.ceil(k), v = Math.ceil(v), h = Math.ceil(k / this.settings.gridSize), l = Math.ceil(v / this.settings.gridSize), t = [this.ngx / 2, this.ngy / 2], g = Math.floor(Math.sqrt(this.ngx * this.ngx + this.ngy * this.ngy)), f = this.ngx + this.ngy, d = g + 1; d--;) {
                for (c = f, b = []; c--;) u = this.settings.shape(c / f * 2 * Math.PI), b.push([Math.floor(t[0] + (g - d) * u * Math.cos(-c / f * 2 * Math.PI) - h / 2), Math.floor(t[1] + (g - d) * u * this.settings.ellipticity * Math.sin(-c / f * 2 * Math.PI) - l / 2), c / f * 2 * Math.PI]);
                if (b.shuffle().some(function(t) {
                        return !!y.canFitText(t[0], t[1], h, l) && (a = Math.floor(t[0] * y.settings.gridSize + (h * y.settings.gridSize - k) / 2), o = Math.floor(t[1] * y.settings.gridSize + (l * y.settings.gridSize - v) / 2), x ? (m = z + "Rotator", p = y.createCanvas({
                            id: m,
                            width: k,
                            height: v,
                            left: 0,
                            top: 0
                        }), w = document.getElementById(m), p.fillStyle = y.settings.color.background.rgba, p.fillRect(0, 0, k, v), p.fillStyle = y.wordcolor(e, i, M, g - d, t[2]), p.font = M.toString(10) + "px " + y.settings.font, p.textBaseline = "top", x && (p.translate(0, v), p.rotate(-Math.PI / 2)), p.fillText(e, Math.floor(M / 6), 0), y.ctx.clearRect(a, o, k, v), y.ctx.drawImage(w, a, o, k, v), y.destroyCanvas(m)) : (r = M.toString(10) + "px " + y.settings.font, y.ctx.font = r, y.ctx.fillStyle = y.wordcolor(e, i, M, g - d, t[2]), y.ctx.fillText(e, a, o), v = y.getTextHeight(r).height, k = y.ctx.measureText(e).width), null !== s && y.linkTable.push({
                            x: a,
                            y: o,
                            width: k,
                            height: v,
                            word: e,
                            link: s,
                            target: n
                        }), y.updateGrid(t[0], t[1], h, l), !0)
                    })) return !0
            }
            return !1
        },
        canFitText: function(t, e, i, s) {
            if (t < 0 || e < 0 || t + i > this.ngx || e + s > this.ngy) return !1;
            for (var n, r = i; r--;)
                for (n = s; n--;)
                    if (!this.grid[t + r][e + n]) return !1;
            return !0
        },
        wordcolor: function(t, e, i, s, n) {
            var r = null;
            switch (this.settings.options.color) {
                case "gradient":
                    r = "rgba(" + Math.round(this.settings.color.start.r + this.settings.color.increment.r * (e - this.settings.weight.lowest)) + "," + Math.round(this.settings.color.start.g + this.settings.color.increment.g * (e - this.settings.weight.lowest)) + "," + Math.round(this.settings.color.start.b + this.settings.color.increment.b * (e - this.settings.weight.lowest)) + "," + Math.round(this.settings.color.start.a + this.settings.color.increment.a * (e - this.settings.weight.lowest)) + ")";
                    break;
                case "random-dark":
                    r = "rgba(" + Math.floor(128 * Math.random()).toString(10) + "," + Math.floor(128 * Math.random()).toString(10) + "," + Math.floor(128 * Math.random()).toString(10) + ",1)";
                    break;
                case "random-light":
                    r = "rgba(" + Math.floor(128 * Math.random() + 128).toString(10) + "," + Math.floor(128 * Math.random() + 128).toString(10) + "," + Math.floor(128 * Math.random() + 128).toString(10) + ",1)";
                    break;
                default:
                    r = "function" != typeof this.settings.wordColor ? "rgba(127,127,127,1)" : this.settings.wordColor(t, e, i, s, n)
            }
            return r
        },
        updateGrid: function(t, e, i, s, n) {
            for (var r, a = i, o = this.ctx.getImageData(t * this.settings.gridSize, e * this.settings.gridSize, i * this.settings.gridSize, s * this.settings.gridSize); a--;)
                for (r = s; r--;) this.isGridEmpty(o, a * this.settings.gridSize, r * this.settings.gridSize, i * this.settings.gridSize, s * this.settings.gridSize, n) || (this.grid[t + a][e + r] = !1)
        },
        isGridEmpty: function(t, e, i, s, n, r) {
            var a, o, h = this.settings.gridSize;
            if (isNaN(this.diffChannel) || r) {
                for (; h--;)
                    for (a = this.settings.gridSize; a--;)
                        for (o = 4; o--;)
                            if (this.getChannelData(t.data, e + h, i + a, s, n, o) !== this.bgPixel[o]) return !1
            } else
                for (; h--;)
                    for (a = this.settings.gridSize; a--;)
                        if (this.getChannelData(t.data, e + h, i + a, s, n, this.diffChannel) !== this.bgPixel[this.diffChannel]) return !1;
            return !0
        },
        getChannelData: function(t, e, i, s, n, r) {
            return t[4 * (i * s + e) + r]
        },
        colorToRGBA: function(t) {
            3 === (t = t.replace(/^\s*#|\s*$/g, "")).length && (t = t.replace(/(.)/g, "$1$1")), t = t.toLowerCase();
            var e, i, s, n, r, a, o, h, l, g, f = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "00ffff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000000",
                    blanchedalmond: "ffebcd",
                    blue: "0000ff",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "00ffff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dodgerblue: "1e90ff",
                    feldspar: "d19275",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "ff00ff",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgrey: "d3d3d3",
                    lightgreen: "90ee90",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslateblue: "8470ff",
                    lightslategray: "778899",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "00ff00",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "ff00ff",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370d8",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "d87093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    red: "ff0000",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    violetred: "d02090",
                    wheat: "f5deb3",
                    white: "ffffff",
                    whitesmoke: "f5f5f5",
                    yellow: "ffff00",
                    yellowgreen: "9acd32"
                },
                d = [{
                    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                    example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                    process: function(t) {
                        return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), 1]
                    }
                }, {
                    re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
                    example: ["rgb(123, 234, 45, 1)", "rgb(255,234,245, 0.5)"],
                    process: function(t) {
                        return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), parseFloat(t[4])]
                    }
                }, {
                    re: /^(\w{2})(\w{2})(\w{2})$/,
                    example: ["#00ff00", "336699"],
                    process: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1]
                    }
                }, {
                    re: /^(\w{1})(\w{1})(\w{1})$/,
                    example: ["#fb0", "f0f"],
                    process: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), 1]
                    }
                }];
            for (r in f) t === r && (t = f[r]);
            for (a = 0; a < d.length; a++) o = d[a].re, h = d[a].process, (l = o.exec(t)) && (e = (g = h(l))[0], i = g[1], s = g[2], n = g[3]);
            return {
                r: e = e < 0 || isNaN(e) ? 0 : 255 < e ? 255 : e,
                g: i = i < 0 || isNaN(i) ? 0 : 255 < i ? 255 : i,
                b: s = s < 0 || isNaN(s) ? 0 : 255 < s ? 255 : s,
                a: n = n < 0 || isNaN(n) ? 0 : 1 < n ? 1 : n,
                rgba: "rgba(" + e + ", " + i + ", " + s + ", " + n + ")"
            }
        },
        getTextHeight: function(t) {
            var e = v('<span style="font: ' + t + '">Hg</span>'),
                i = v('<div style="display: inline-block; width: 1px; height: 0px;"></div>'),
                s = v("<div></div>"),
                n = v("body"),
                r = {};
            s.append(e, i), n.append(s);
            try {
                r = {}, i.css({
                    verticalAlign: "baseline"
                }), r.ascent = i.offset().top - e.offset().top, i.css({
                    verticalAlign: "bottom"
                }), r.height = i.offset().top - e.offset().top, r.descent = r.height - r.ascent
            } finally {
                s.remove()
            }
            return r
        }
    }
}(jQuery), Array.prototype.shuffle = function() {
    "use strict";
    for (var t, e, i = this.length; i; t = parseInt(Math.random() * i, 10), e = this[--i], this[i] = this[t], this[t] = e);
    return this
}, window.setImmediate || (window.setImmediate = function() {
    "use strict";
    return window.msSetImmediate || window.webkitSetImmediate || window.mozSetImmediate || window.oSetImmediate || function() {
        if (window.postMessage && window.addEventListener) {
            var e = [],
                i = -1,
                s = -1,
                n = "zero-timeout-message";
            return window.addEventListener("message", function(t) {
                    t.data === n && (t.stopPropagation(), 0 < e.length && (e.shift()(), i += 1))
                }, !0), window.clearImmediate = function(t) {
                    "number" != typeof t || s < t || (e[t - i - 1] = function() {})
                },
                function(t) {
                    return e.push(t), window.postMessage(n, "*"), ++s
                }
        }
    }() || function(t) {
        window.setTimeout(t, 0)
    }
}()), window.clearImmediate || (window.clearImmediate = function() {
    "use strict";
    return window.msClearImmediate || window.webkitClearImmediate || window.mozClearImmediate || window.oClearImmediate || function(t) {
        window.clearTimeout(t)
    }
}());