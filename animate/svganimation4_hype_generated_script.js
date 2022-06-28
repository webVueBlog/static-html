//	HYPE.documents["svg_animation_4"]

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
		var h = "svg_animation_4.hyperesources",
			c = "svg_animation_4",
			e = "svganimation4_hype_container";
		if (false == !1) try {
			for (var f = document.getElementsByTagName("script"),
					a = 0; a < f.length; a++) {
				var b = f[a].src;
				if (null != b && -1 != b.indexOf("svganimation4_hype_generated_script.js")) {
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
			"3": {
				p: 1,
				n: "chart.svg",
				g: "137",
				t: "image/svg+xml"
			},
			"4": {
				p: 1,
				n: "computer3.svg",
				g: "139",
				t: "image/svg+xml"
			},
			"0": {
				p: 1,
				n: "desk3.svg",
				g: "117",
				t: "image/svg+xml"
			},
			"5": {
				p: 1,
				n: "po.svg",
				g: "141",
				t: "image/svg+xml"
			},
			"1": {
				p: 1,
				n: "pen.svg",
				g: "133",
				t: "image/svg+xml"
			},
			"6": {
				p: 1,
				n: "cup.svg",
				g: "143",
				t: "image/svg+xml"
			},
			"2": {
				p: 1,
				n: "book1.svg",
				g: "135",
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
			Y: 540,
			c: "rgba(255,255,255,0)",
			L: [],
			bY: 1,
			d: 540,
			U: {},
			T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier",
					n: "\u4e3b\u65f6\u95f4\u7ebf",
					z: 2.05,
					b: [],
					a: [{
						f: "c",
						y: 0.15,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "277"
					}, {
						f: "h",
						y: 0.15,
						z: 0.1,
						i: "b",
						e: 325,
						s: 418,
						o: "277"
					}, {
						y: 0.25,
						i: "e",
						s: 1,
						z: 0,
						o: "277",
						f: "c"
					}, {
						y: 0.25,
						i: "b",
						s: 325,
						z: 0,
						o: "277",
						f: "c"
					}, {
						f: "h",
						y: 1.05,
						z: 0.1,
						i: "b",
						e: 272,
						s: 322,
						o: "279"
					}, {
						f: "c",
						y: 1.05,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "279"
					}, {
						f: "h",
						y: 1.1,
						z: 0.1,
						i: "b",
						e: 261,
						s: 311,
						o: "281"
					}, {
						f: "c",
						y: 1.1,
						z: 0.2,
						i: "b",
						e: 122,
						s: 74,
						o: "282"
					}, {
						f: "c",
						y: 1.1,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "281"
					}, {
						f: "c",
						y: 1.1,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "282"
					}, {
						f: "h",
						y: 1.15,
						z: 0.1,
						i: "b",
						e: 236,
						s: 306,
						o: "276"
					}, {
						y: 1.15,
						i: "b",
						s: 272,
						z: 0,
						o: "279",
						f: "c"
					}, {
						f: "c",
						y: 1.15,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "276"
					}, {
						y: 1.15,
						i: "e",
						s: 1,
						z: 0,
						o: "279",
						f: "c"
					}, {
						f: "h",
						y: 1.2,
						z: 0.1,
						i: "b",
						e: 172,
						s: 286,
						o: "280"
					}, {
						y: 1.2,
						i: "b",
						s: 261,
						z: 0,
						o: "281",
						f: "c"
					}, {
						f: "c",
						y: 1.2,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "280"
					}, {
						y: 1.2,
						i: "e",
						s: 1,
						z: 0,
						o: "281",
						f: "c"
					}, {
						y: 1.2,
						i: "e",
						s: 1,
						z: 0,
						o: "282",
						f: "c"
					}, {
						f: "h",
						y: 1.25,
						z: 0.1,
						i: "b",
						e: 282,
						s: 331,
						o: "278"
					}, {
						y: 1.25,
						i: "b",
						s: 236,
						z: 0,
						o: "276",
						f: "c"
					}, {
						f: "c",
						y: 1.25,
						z: 0.1,
						i: "e",
						e: 1,
						s: 0,
						o: "278"
					}, {
						y: 1.25,
						i: "e",
						s: 1,
						z: 0,
						o: "276",
						f: "c"
					}, {
						y: 2,
						i: "b",
						s: 172,
						z: 0,
						o: "280",
						f: "c"
					}, {
						y: 2,
						i: "b",
						s: 122,
						z: 0,
						o: "282",
						f: "c"
					}, {
						y: 2,
						i: "e",
						s: 1,
						z: 0,
						o: "280",
						f: "c"
					}, {
						y: 2.05,
						i: "b",
						s: 282,
						z: 0,
						o: "278",
						f: "c"
					}, {
						y: 2.05,
						i: "e",
						s: 1,
						z: 0,
						o: "278",
						f: "c"
					}],
					f: 30
				}
			},
			bZ: 180,
			O: ["282", "277", "276", "281", "279", "280", "278"],
			v: {
				"278": {
					h: "143",
					p: "no-repeat",
					x: "visible",
					a: 356,
					q: "100% 100%",
					b: 331,
					j: "absolute",
					r: "inline",
					c: 28,
					k: "div",
					z: 14,
					d: 45,
					e: 0
				},
				"281": {
					h: "135",
					p: "no-repeat",
					x: "visible",
					a: 49,
					q: "100% 100%",
					b: 311,
					j: "absolute",
					r: "inline",
					c: 40,
					k: "div",
					z: 17,
					d: 66,
					e: 0
				},
				"277": {
					h: "117",
					p: "no-repeat",
					x: "visible",
					a: 12,
					q: "100% 100%",
					b: 418,
					j: "absolute",
					r: "inline",
					c: 400,
					k: "div",
					z: 37,
					d: 112,
					e: 0
				},
				"280": {
					h: "139",
					p: "no-repeat",
					x: "visible",
					a: 109,
					q: "100% 100%",
					b: 286,
					j: "absolute",
					r: "inline",
					c: 189,
					k: "div",
					z: 15,
					d: 161,
					e: 0
				},
				"276": {
					h: "137",
					p: "no-repeat",
					x: "visible",
					a: 92,
					q: "100% 100%",
					b: 306,
					j: "absolute",
					r: "inline",
					c: 51,
					k: "div",
					z: 18,
					d: 91,
					e: 0
				},
				"279": {
					w: "",
					h: "133",
					p: "no-repeat",
					x: "visible",
					a: 17,
					q: "100% 100%",
					b: 322,
					j: "absolute",
					r: "inline",
					z: 16,
					k: "div",
					c: 27,
					d: 55,
					e: 0
				},
				"282": {
					h: "141",
					p: "no-repeat",
					x: "visible",
					a: 257,
					q: "100% 100%",
					b: 74,
					j: "absolute",
					r: "inline",
					c: 106,
					k: "div",
					z: 38,
					d: 315,
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
