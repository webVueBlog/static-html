//	HYPE.documents["svg_animation_3"]

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
		var h = "svg_animation_3.hyperesources",
			c = "svg_animation_3",
			e = "svganimation3_hype_container";
		if (false == !1) try {
			for (var f = document.getElementsByTagName("script"),
					a = 0; a < f.length; a++) {
				var b = f[a].src;
				if (null != b && -1 != b.indexOf("svganimation3_hype_generated_script.js")) {
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
				n: "pdmhand.svg",
				g: "131",
				t: "image/svg+xml"
			},
			"3": {
				p: 1,
				n: "monitor2.svg",
				g: "123",
				t: "image/svg+xml"
			},
			"4": {
				p: 1,
				n: "labtop.svg",
				g: "125",
				t: "image/svg+xml"
			},
			"0": {
				p: 1,
				n: "desk2.svg",
				g: "115",
				t: "image/svg+xml"
			},
			"5": {
				p: 1,
				n: "plant1.svg",
				g: "127",
				t: "image/svg+xml"
			},
			"1": {
				p: 1,
				n: "computer2.svg",
				g: "119",
				t: "image/svg+xml"
			},
			"6": {
				p: 1,
				n: "pdm.svg",
				g: "129",
				t: "image/svg+xml"
			},
			"2": {
				p: 1,
				n: "line.svg",
				g: "121",
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
			Y: 420,
			c: "rgba(255,255,255,0)",
			L: [],
			bY: 1,
			d: 420,
			U: {},
			T: {
				kTimelineDefaultIdentifier: {
					f: 30,
					z: 2.15,
					i: "kTimelineDefaultIdentifier",
					n: "\u4e3b\u65f6\u95f4\u7ebf",
					j: {
						"0": [
							[306, 349, 306, 349, 306, 302, 306, 302]
						]
					},
					a: [{
						f: "c",
						y: 0.1,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "282"
					}, {
						f: "h",
						y: 0.1,
						z: 0.1,
						i: "b",
						e: 325,
						s: 418,
						o: "282"
					}, {
						y: 0.2,
						i: "e",
						s: 1,
						z: 0,
						o: "282",
						f: "c"
					}, {
						y: 0.2,
						i: "b",
						s: 325,
						z: 0,
						o: "282",
						f: "c"
					}, {
						o: "277",
						y: 1,
						z: 0.1,
						i: "a",
						e: 287,
						a: "0",
						f: "h",
						s: 287
					}, {
						f: "h",
						y: 1,
						z: 0.1,
						i: "b",
						e: 254,
						s: 306,
						o: "281"
					}, {
						f: "h",
						y: 1,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "281"
					}, {
						o: "277",
						y: 1,
						z: 0.1,
						i: "b",
						e: 277.5,
						a: "0",
						f: "h",
						s: 324.5
					}, {
						f: "c",
						y: 1,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "277"
					}, {
						f: "h",
						y: 1.05,
						z: 0.1,
						i: "b",
						e: 297,
						s: 350,
						o: "276"
					}, {
						f: "h",
						y: 1.05,
						z: 0.1,
						i: "b",
						e: 357,
						s: 417,
						o: "280"
					}, {
						f: "h",
						y: 1.05,
						z: 0.1,
						i: "b",
						e: 205,
						s: 276,
						o: "278"
					}, {
						f: "c",
						y: 1.05,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "280"
					}, {
						f: "h",
						y: 1.05,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "278"
					}, {
						y: 1.1,
						i: "a",
						s: 287,
						z: 0,
						o: "277",
						f: "c"
					}, {
						y: 1.1,
						i: "b",
						s: 254,
						z: 0,
						o: "281",
						f: "c"
					}, {
						y: 1.1,
						i: "b",
						s: 278.5,
						z: 0,
						o: "277",
						f: "c"
					}, {
						y: 1.1,
						i: "e",
						s: 1,
						z: 0,
						o: "281",
						f: "c"
					}, {
						y: 1.1,
						i: "e",
						s: 1,
						z: 0,
						o: "277",
						f: "c"
					}, {
						f: "c",
						y: 1.12,
						z: 0.03,
						i: "e",
						e: 1,
						s: 0,
						o: "276"
					}, {
						y: 1.15,
						i: "b",
						s: 297,
						z: 0,
						o: "276",
						f: "c"
					}, {
						y: 1.15,
						i: "b",
						s: 357,
						z: 0,
						o: "280",
						f: "c"
					}, {
						y: 1.15,
						i: "b",
						s: 205,
						z: 0,
						o: "278",
						f: "c"
					}, {
						y: 1.15,
						i: "e",
						s: 1,
						z: 0,
						o: "276",
						f: "c"
					}, {
						y: 1.15,
						i: "e",
						s: 1,
						z: 0,
						o: "280",
						f: "c"
					}, {
						y: 1.15,
						i: "e",
						s: 1,
						z: 0,
						o: "278",
						f: "c"
					}, {
						f: "c",
						y: 1.25,
						z: 0.2,
						i: "b",
						e: 196,
						s: 246,
						o: "283"
					}, {
						f: "c",
						y: 1.25,
						z: 0.2,
						i: "b",
						e: 98,
						s: 148,
						o: "279"
					}, {
						f: "c",
						y: 1.25,
						z: 0.15,
						i: "e",
						e: 1,
						s: 0,
						o: "279"
					}, {
						f: "c",
						y: 2.1,
						z: 0.05,
						i: "e",
						e: 1,
						s: 0,
						o: "283"
					}, {
						y: 2.1,
						i: "e",
						s: 1,
						z: 0,
						o: "279",
						f: "c"
					}, {
						y: 2.15,
						i: "b",
						s: 196,
						z: 0,
						o: "283",
						f: "c"
					}, {
						y: 2.15,
						i: "b",
						s: 98,
						z: 0,
						o: "279",
						f: "c"
					}, {
						y: 2.15,
						i: "e",
						s: 1,
						z: 0,
						o: "283",
						f: "c"
					}],
					b: []
				}
			},
			bZ: 180,
			O: ["282", "277", "281", "283", "278", "279", "280", "276"],
			v: {
				"278": {
					h: "123",
					p: "no-repeat",
					x: "visible",
					a: 121,
					q: "100% 100%",
					b: 276,
					j: "absolute",
					r: "inline",
					c: 171,
					k: "div",
					z: 30,
					d: 124,
					e: 0
				},
				"281": {
					h: "125",
					p: "no-repeat",
					x: "visible",
					a: 39,
					q: "100% 100%",
					b: 306,
					j: "absolute",
					r: "inline",
					c: 78,
					k: "div",
					z: 32,
					d: 81,
					e: 0
				},
				"277": {
					h: "127",
					p: "no-repeat",
					x: "visible",
					tY: 0.5,
					a: 287,
					q: "100% 100%",
					j: "absolute",
					b: 324,
					z: 33,
					k: "div",
					c: 38,
					d: 49,
					r: "inline",
					e: 0,
					tX: 0.5
				},
				"280": {
					h: "119",
					p: "no-repeat",
					x: "visible",
					a: 106,
					q: "100% 100%",
					b: 417,
					j: "absolute",
					r: "inline",
					c: 40,
					k: "div",
					z: 28,
					d: 80,
					e: 0
				},
				"283": {
					h: "131",
					p: "no-repeat",
					x: "visible",
					a: 225,
					q: "100% 100%",
					b: 246,
					j: "absolute",
					r: "inline",
					c: 25,
					k: "div",
					z: 31,
					d: 20,
					e: 0
				},
				"276": {
					h: "121",
					p: "no-repeat",
					x: "visible",
					a: 113,
					q: "100% 100%",
					b: 350,
					j: "absolute",
					r: "inline",
					c: 80,
					k: "div",
					z: 27,
					d: 100,
					e: 0
				},
				"279": {
					h: "129",
					p: "no-repeat",
					x: "visible",
					a: 244,
					q: "100% 100%",
					b: 148,
					j: "absolute",
					r: "inline",
					c: 135,
					k: "div",
					z: 29,
					d: 339,
					e: 0
				},
				"282": {
					h: "115",
					p: "no-repeat",
					x: "visible",
					a: 19,
					q: "100% 100%",
					b: 418,
					j: "absolute",
					r: "inline",
					c: 380,
					k: "div",
					z: 36,
					d: 112,
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
