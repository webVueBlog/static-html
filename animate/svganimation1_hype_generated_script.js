//	HYPE.documents["svg_animation_1"]

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
		var h = "svg_animation_1.hyperesources",
			c = "svg_animation_1",
			e = "svganimation1_hype_container";
		if (false == !1) try {
			for (var f = document.getElementsByTagName("script"),
					a = 0; a < f.length; a++) {
				var b = f[a].src;
				if (null != b && -1 != b.indexOf("svganimation1_hype_generated_script.js")) {
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
				n: "dyson.svg",
				g: "109",
				t: "image/svg+xml"
			},
			"3": {
				p: 1,
				n: "book3.svg",
				g: "101",
				t: "image/svg+xml"
			},
			"8": {
				p: 1,
				n: "box.svg",
				g: "111",
				t: "image/svg+xml"
			},
			"4": {
				p: 1,
				n: "device.svg",
				g: "103",
				t: "image/svg+xml"
			},
			"0": {
				p: 1,
				n: "plant2.svg",
				g: "95",
				t: "image/svg+xml"
			},
			"9": {
				p: 1,
				n: "bugly.svg",
				g: "113",
				t: "image/svg+xml"
			},
			"5": {
				p: 1,
				n: "trash.svg",
				g: "105",
				t: "image/svg+xml"
			},
			"1": {
				p: 1,
				n: "book2.svg",
				g: "97",
				t: "image/svg+xml"
			},
			"6": {
				p: 1,
				n: "locker.svg",
				g: "107",
				t: "image/svg+xml"
			},
			"2": {
				p: 1,
				n: "clock.svg",
				g: "99",
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
			Y: 1500,
			c: "rgba(255,255,255,0)",
			L: [],
			bY: 1,
			d: 1500,
			U: {},
			T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier",
					n: "\u4e3b\u65f6\u95f4\u7ebf",
					z: 3,
					b: [],
					a: [{
						f: "c",
						y: 0,
						z: 0.1,
						i: "c",
						e: 1400,
						s: 0,
						o: "279"
					}, {
						f: "c",
						y: 0,
						z: 0.1,
						i: "a",
						e: 50,
						s: 700,
						o: "279"
					}, {
						y: 0.1,
						i: "c",
						s: 1400,
						z: 0,
						o: "279",
						f: "c"
					}, {
						y: 0.1,
						i: "a",
						s: 50,
						z: 0,
						o: "279",
						f: "c"
					}, {
						f: "h",
						y: 1,
						z: 0.15,
						i: "b",
						e: 27,
						s: -64,
						o: "284"
					}, {
						f: "c",
						y: 1,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "286"
					}, {
						f: "c",
						y: 1,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "283"
					}, {
						f: "c",
						y: 1,
						z: 0.15,
						i: "e",
						e: 1,
						s: 0,
						o: "284"
					}, {
						f: "c",
						y: 1.05,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "285"
					}, {
						f: "c",
						y: 1.1,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "282"
					}, {
						y: 1.15,
						i: "b",
						s: 27,
						z: 0,
						o: "284",
						f: "c"
					}, {
						y: 1.15,
						i: "e",
						s: 1,
						z: 0,
						o: "284",
						f: "c"
					}, {
						f: "c",
						y: 1.2,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "280"
					}, {
						y: 1.2,
						i: "e",
						s: 1,
						z: 0,
						o: "286",
						f: "c"
					}, {
						y: 1.2,
						i: "e",
						s: 1,
						z: 0,
						o: "283",
						f: "c"
					}, {
						y: 1.25,
						i: "e",
						s: 1,
						z: 0,
						o: "285",
						f: "c"
					}, {
						f: "c",
						y: 2,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "278"
					}, {
						f: "c",
						y: 2,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "276"
					}, {
						f: "c",
						y: 2,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "277"
					}, {
						y: 2,
						i: "e",
						s: 1,
						z: 0,
						o: "282",
						f: "c"
					}, {
						f: "c",
						y: 2.1,
						z: 0.2,
						i: "e",
						e: 1,
						s: 0,
						o: "281"
					}, {
						y: 2.1,
						i: "e",
						s: 1,
						z: 0,
						o: "280",
						f: "c"
					}, {
						y: 2.2,
						i: "e",
						s: 1,
						z: 0,
						o: "278",
						f: "c"
					}, {
						y: 2.2,
						i: "e",
						s: 1,
						z: 0,
						o: "276",
						f: "c"
					}, {
						y: 2.2,
						i: "e",
						s: 1,
						z: 0,
						o: "277",
						f: "c"
					}, {
						y: 3,
						i: "e",
						s: 1,
						z: 0,
						o: "281",
						f: "c"
					}],
					f: 30
				}
			},
			bZ: 180,
			O: ["279", "284", "285", "277", "281", "283", "280", "276", "282", "278", "286"],
			v: {
				"278": {
					h: "101",
					p: "no-repeat",
					x: "visible",
					a: 520,
					q: "100% 100%",
					b: 273,
					j: "absolute",
					r: "inline",
					c: 124,
					k: "div",
					z: 5,
					d: 56,
					e: 0
				},
				"281": {
					h: "113",
					p: "no-repeat",
					x: "visible",
					a: 1043,
					q: "100% 100%",
					b: 365,
					j: "absolute",
					r: "inline",
					c: 52,
					k: "div",
					z: 10,
					d: 72,
					e: 0
				},
				"284": {
					h: "99",
					p: "no-repeat",
					x: "visible",
					a: 209,
					q: "100% 100%",
					b: -64,
					j: "absolute",
					r: "inline",
					c: 80,
					k: "div",
					z: 13,
					d: 80,
					e: 0
				},
				"277": {
					h: "111",
					p: "no-repeat",
					x: "visible",
					a: 1071,
					q: "100% 100%",
					b: 399,
					j: "absolute",
					r: "inline",
					c: 81,
					k: "div",
					z: 11,
					d: 38,
					e: 0
				},
				"280": {
					h: "107",
					p: "no-repeat",
					x: "visible",
					a: 947,
					q: "100% 100%",
					b: 341,
					j: "absolute",
					r: "inline",
					c: 66,
					k: "div",
					z: 8,
					d: 96,
					e: 0
				},
				"283": {
					h: "109",
					p: "no-repeat",
					x: "visible",
					a: 1367,
					q: "100% 100%",
					b: 297,
					j: "absolute",
					r: "inline",
					c: 40,
					k: "div",
					z: 9,
					d: 140,
					e: 0
				},
				"286": {
					h: "95",
					p: "no-repeat",
					x: "visible",
					a: 75,
					q: "100% 100%",
					b: 354,
					j: "absolute",
					r: "inline",
					c: 62,
					k: "div",
					z: 4,
					d: 83,
					e: 0
				},
				"276": {
					h: "105",
					p: "no-repeat",
					x: "visible",
					a: 756,
					q: "100% 100%",
					b: 390,
					j: "absolute",
					r: "inline",
					c: 40,
					k: "div",
					z: 7,
					d: 47,
					e: 0
				},
				"279": {
					c: 0,
					bS: 36,
					d: 2,
					I: "None",
					J: "None",
					K: "None",
					g: "#1A2430",
					L: "None",
					bM: "0",
					M: 0,
					N: 0,
					A: "#D8DDE4",
					x: "visible",
					j: "absolute",
					B: "#D8DDE4",
					k: "div",
					O: 0,
					C: "#D8DDE4",
					z: 41,
					P: 0,
					D: "#D8DDE4",
					a: 700,
					b: 435
				},
				"282": {
					h: "103",
					p: "no-repeat",
					x: "visible",
					a: 580,
					q: "100% 100%",
					b: 181,
					j: "absolute",
					r: "inline",
					c: 120,
					k: "div",
					z: 6,
					d: 56,
					e: 0
				},
				"285": {
					h: "97",
					p: "no-repeat",
					x: "visible",
					a: 423,
					q: "100% 100%",
					b: 344,
					j: "absolute",
					r: "inline",
					c: 57,
					k: "div",
					z: 12,
					d: 93,
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
