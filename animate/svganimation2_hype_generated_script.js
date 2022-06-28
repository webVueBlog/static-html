//	HYPE.documents["svg_animation_2"]

(function() {
	(function k() {
		function l(a, b, d) {
			var c = !1;
			null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document
					.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false ==
					!0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) :
				window[b].push(k), c = !0);
			return c
		}
		var h = "svg_animation_2.hyperesources",
			c = "svg_animation_2",
			e = "svganimation2_hype_container";
		if (false == !1) try {
			for (var f = document.getElementsByTagName("script"),
					a = 0; a < f.length; a++) {
				var b = f[a].src;
				if (null != b && -1 != b.indexOf("svganimation2_hype_generated_script.js")) {
					h = b.substr(0, b.lastIndexOf("/"));
					break
				}
			}
		} catch (n) {}
		if (false == !1 && (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null,
				a = l("HYPE_526", "HYPE_dtl_526", !0 == (null != a && 10 > a || false == !0) ?
					"HYPE-526.full.min.js" : "HYPE-526.thin.min.js"), false == !0 && (a = a || l("HYPE_w_526",
					"HYPE_wdtl_526", "HYPE-526.waypoints.min.js")), a)) return;
		f = window.HYPE.documents;
		if (null != f[c]) {
			b = 1;
			a = c;
			do c = "" + a + "-" + b++; while (null != f[c]);
			for (var d = document.getElementsByTagName("div"), b = !1, a = 0; a < d.length; a++)
				if (d[a].id == e && null == d[a].getAttribute("HYP_dn")) {
					var b = 1,
						g = e;
					do e = "" + g + "-" + b++; while (null != document.getElementById(e));
					d[a].id = e;
					b = !0;
					break
				} if (!1 == b) return
		}
		b = [];
		b = [];
		d = {};
		g = {};
		for (a = 0; a < b.length; a++) try {
			g[b[a].identifier] = b[a].name, d[b[a].name] = eval("(function(){return " + b[a].source +
				"})();")
		} catch (m) {
			window.console && window.console.log(m),
				d[b[a].name] = function() {}
		}
		a = new HYPE_526(c, e, {
			"7": {
				p: 1,
				n: "lamp.svg",
				g: "86",
				t: "image/svg+xml"
			},
			"3": {
				p: 1,
				n: "desk1.svg",
				g: "85",
				t: "image/svg+xml"
			},
			"8": {
				p: 1,
				n: "computer1.svg",
				g: "91",
				t: "image/svg+xml"
			},
			"4": {
				p: 1,
				n: "developer.svg",
				g: "84",
				t: "image/svg+xml"
			},
			"0": {
				p: 1,
				n: "chair.svg",
				g: "83",
				t: "image/svg+xml"
			},
			"9": {
				p: 1,
				n: "mouse.svg",
				g: "5",
				t: "image/svg+xml"
			},
			"5": {
				p: 1,
				n: "hamberger.svg",
				g: "87",
				t: "image/svg+xml"
			},
			"1": {
				p: 1,
				n: "chips.svg",
				g: "88",
				t: "image/svg+xml"
			},
			"6": {
				p: 1,
				n: "ironman.svg",
				g: "90",
				t: "image/svg+xml"
			},
			"2": {
				p: 1,
				n: "coffee.svg",
				g: "89",
				t: "image/svg+xml"
			},
			"10": {
				p: 1,
				n: "monitor1.svg",
				g: "92",
				t: "image/svg+xml"
			}
		}, h, [], d, [{
			n: "\u672a\u547d\u540d\u573a\u666f",
			o: "1",
			X: [0]
		}], [{
			o: "3",
			p: "600px",
			x: 0,
			cA: false,
			Z: 480,
			Y: 640,
			c: "rgba(255,255,255,0)",
			L: [],
			bY: 1,
			d: 640,
			U: {},
			T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier",
					n: "\u4e3b\u65f6\u95f4\u7ebf",
					z: 1.2,
					b: [],
					a: [{
						f: "c",
						y: 0.05,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "276"
					}, {
						f: "h",
						y: 0.05,
						z: 0.1,
						i: "b",
						e: 325,
						s: 418,
						o: "276"
					}, {
						f: "h",
						y: 0.1,
						z: 0.1,
						i: "b",
						e: 172,
						s: 276,
						o: "283"
					}, {
						f: "c",
						y: 0.1,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "283"
					}, {
						f: "c",
						y: 0.15,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "281"
					}, {
						f: "h",
						y: 0.15,
						z: 0.1,
						i: "b",
						e: 267,
						s: 327,
						o: "281"
					}, {
						y: 0.15,
						i: "e",
						s: 1,
						z: 0,
						o: "276",
						f: "c"
					}, {
						y: 0.15,
						i: "b",
						s: 325,
						z: 0,
						o: "276",
						f: "c"
					}, {
						f: "h",
						y: 0.2,
						z: 0.1,
						i: "b",
						e: 198,
						s: 302,
						o: "286"
					}, {
						f: "c",
						y: 0.2,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "286"
					}, {
						f: "h",
						y: 0.2,
						z: 0.1,
						i: "b",
						e: 280,
						s: 340,
						o: "279"
					}, {
						f: "c",
						y: 0.2,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "279"
					}, {
						f: "h",
						y: 0.2,
						z: 0.1,
						i: "b",
						e: 170,
						s: 239,
						o: "285"
					}, {
						f: "c",
						y: 0.2,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "285"
					}, {
						y: 0.2,
						i: "e",
						s: 1,
						z: 0,
						o: "283",
						f: "c"
					}, {
						y: 0.2,
						i: "b",
						s: 172,
						z: 0,
						o: "283",
						f: "c"
					}, {
						f: "c",
						y: 0.21,
						z: 0.09,
						i: "e",
						e: 1,
						s: 0,
						o: "284"
					}, {
						f: "h",
						y: 0.21,
						z: 0.09,
						i: "b",
						e: 315,
						s: 315,
						o: "284"
					}, {
						f: "h",
						y: 0.25,
						z: 0.25,
						i: "a",
						e: 264,
						s: -4,
						o: "280"
					}, {
						f: "h",
						y: 0.25,
						z: 0.25,
						i: "a",
						e: 237,
						s: -31,
						o: "277"
					}, {
						f: "c",
						y: 0.25,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "282"
					}, {
						f: "h",
						y: 0.25,
						z: 0.1,
						i: "b",
						e: 289,
						s: 349,
						o: "282"
					}, {
						f: "c",
						y: 0.25,
						z: 0.05,
						i: "e",
						e: 1,
						s: 0,
						o: "280"
					}, {
						y: 0.25,
						i: "b",
						s: 267,
						z: 0,
						o: "281",
						f: "c"
					}, {
						f: "c",
						y: 0.25,
						z: 0.05,
						i: "e",
						e: 1,
						s: 0,
						o: "277"
					}, {
						y: 0.25,
						i: "e",
						s: 1,
						z: 0,
						o: "281",
						f: "c"
					}, {
						f: "h",
						y: 1,
						z: 0.1,
						i: "b",
						e: 220,
						s: 328,
						o: "278"
					}, {
						f: "c",
						y: 1,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "278"
					}, {
						y: 1,
						i: "b",
						s: 198,
						z: 0,
						o: "286",
						f: "c"
					}, {
						y: 1,
						i: "b",
						s: 280,
						z: 0,
						o: "279",
						f: "c"
					}, {
						y: 1,
						i: "b",
						s: 170,
						z: 0,
						o: "285",
						f: "c"
					}, {
						y: 1,
						i: "b",
						s: 315,
						z: 0,
						o: "284",
						f: "c"
					}, {
						y: 1,
						i: "e",
						s: 1,
						z: 0,
						o: "286",
						f: "c"
					}, {
						y: 1,
						i: "e",
						s: 1,
						z: 0,
						o: "279",
						f: "c"
					}, {
						y: 1,
						i: "e",
						s: 1,
						z: 0,
						o: "285",
						f: "c"
					}, {
						y: 1,
						i: "e",
						s: 1,
						z: 0,
						o: "280",
						f: "c"
					}, {
						y: 1,
						i: "e",
						s: 1,
						z: 0,
						o: "277",
						f: "c"
					}, {
						y: 1,
						i: "e",
						s: 1,
						z: 0,
						o: "284",
						f: "c"
					}, {
						y: 1.05,
						i: "b",
						s: 289,
						z: 0,
						o: "282",
						f: "c"
					}, {
						y: 1.05,
						i: "e",
						s: 1,
						z: 0,
						o: "282",
						f: "c"
					}, {
						y: 1.1,
						i: "b",
						s: 220,
						z: 0,
						o: "278",
						f: "c"
					}, {
						y: 1.1,
						i: "e",
						s: 1,
						z: 0,
						o: "278",
						f: "c"
					}, {
						y: 1.2,
						i: "a",
						s: 237,
						z: 0,
						o: "277",
						f: "c"
					}, {
						y: 1.2,
						i: "a",
						s: 264,
						z: 0,
						o: "280",
						f: "c"
					}],
					f: 30
				}
			},
			bZ: 180,
			O: ["277", "280", "276", "278", "282", "279", "281", "285", "283", "286", "284"],
			v: {
				"278": {
					w: "",
					aD: {
						a: [{
							p: 4
						}]
					},
					h: "86",
					x: "visible",
					a: 512,
					q: "100% 100%",
					b: 328,
					j: "absolute",
					p: "no-repeat",
					z: 26,
					k: "div",
					c: 88,
					d: 107,
					r: "inline",
					e: 0
				},
				"281": {
					h: "89",
					p: "no-repeat",
					x: "visible",
					a: 156,
					q: "100% 100%",
					b: 327,
					j: "absolute",
					r: "inline",
					c: 42,
					k: "div",
					z: 23,
					d: 60,
					e: 0
				},
				"284": {
					h: "5",
					p: "no-repeat",
					x: "visible",
					a: 387,
					q: "100% 100%",
					b: 315,
					j: "absolute",
					r: "inline",
					c: 39,
					k: "div",
					z: 19,
					d: 12,
					e: 0
				},
				"277": {
					h: "83",
					p: "no-repeat",
					x: "visible",
					a: -31,
					q: "100% 100%",
					b: 297,
					j: "absolute",
					r: "inline",
					c: 81,
					k: "div",
					z: 40,
					d: 140,
					e: 0
				},
				"280": {
					h: "84",
					p: "no-repeat",
					x: "visible",
					a: -4,
					q: "100% 100%",
					b: 152,
					j: "absolute",
					r: "inline",
					c: 178,
					k: "div",
					z: 39,
					d: 285,
					e: 0
				},
				"283": {
					h: "91",
					p: "no-repeat",
					x: "visible",
					a: 202,
					q: "100% 100%",
					b: 276,
					j: "absolute",
					r: "inline",
					c: 189,
					k: "div",
					z: 21,
					d: 161,
					e: 0
				},
				"286": {
					h: "92",
					p: "no-repeat",
					x: "visible",
					a: 397,
					q: "100% 100%",
					b: 302,
					j: "absolute",
					r: "inline",
					c: 144,
					k: "div",
					z: 20,
					d: 129,
					e: 0
				},
				"276": {
					h: "85",
					p: "no-repeat",
					x: "visible",
					a: 123,
					q: "100% 100%",
					b: 418,
					j: "absolute",
					r: "inline",
					c: 500,
					k: "div",
					z: 35,
					d: 112,
					e: 0
				},
				"279": {
					h: "88",
					p: "no-repeat",
					x: "visible",
					a: 194,
					q: "100% 100%",
					b: 340,
					j: "absolute",
					r: "inline",
					c: 41,
					k: "div",
					z: 24,
					d: 47,
					e: 0
				},
				"282": {
					h: "87",
					p: "no-repeat",
					x: "visible",
					a: 123,
					q: "100% 100%",
					b: 349,
					j: "absolute",
					r: "inline",
					c: 47,
					k: "div",
					z: 25,
					d: 38,
					e: 0
				},
				"285": {
					h: "90",
					p: "no-repeat",
					x: "visible",
					a: 475,
					q: "100% 100%",
					b: 239,
					j: "absolute",
					r: "inline",
					c: 34,
					k: "div",
					z: 22,
					d: 35,
					e: 0
				}
			}
		}], {}, g, {
			h: [
				[0, 0, 0.175, 0.885, 0.32, 1.25, 1, 1]
			]
		}, null, false, true, -1, true, true, false, true);
		f[c] = a.API;
		document.getElementById(e).setAttribute("HYP_dn",
			c);
		a.z_o(this.body)
	})();
})();
