var pt_logout = {
	ret: 0,
	appDomain: "",
	mainDomain: "",
	httpWhiteDomain: {
		"qq.com": 1,
		"soso.com": 1,
		"paipai.com": 1,
		"tenpay.com": 1,
		"taotao.com": 1,
		"tencent.com": 1,
		"oa.com": 1,
		"webdev.com": 1,
		"3366.com": 1,
		"imqq.com": 1,
		"pengyou.com": 1,
		"qplus.com": 1,
		"qzone.com": 1,
		"server.com": 1,
		"myapp.com": 1,
		"kuyoo.cn": 1,
		"weiyun.com": 1,
		"wechatapp.com": 1,
		"51buy.com": 1,
		"yixun.com": 1,
		"qcloud.com": 1,
		"wechat.com": 1,
		"weishi.com": 1,
		"superfix.cn": 1,
		"bkcloud.cc": 1,
		"bkclouds.cc": 1
	},
	getCookie: function(o) {
		var t = document.cookie.match(new RegExp("(^| )" + o + "=([^;]*)(;|$)"));
		return t ? decodeURIComponent(t[2]) : ""
	},
	delCookie: function(o, t, n) {
		document.cookie = o + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (n ? n : "/") + "; " + (t ?
			"domain=" + t + ";" : "")
	},
	jsonp: function(o) {
		var t = document.createElement("script");
		t.setAttribute("src", o), document.getElementsByTagName("head")[0].appendChild(t), t.onerror =
		function() {
			t.onerror = null, pt_logout.set_ret(0, "")
		}
	},
	nlog: function(o, t, n) {
		if (Math.random() <= (n || 1)) {
			var e = "https:" == location.protocol ? "https://ssl.qq.com/ptlogin/cgi-bin/ptlogin_report?" :
				"http://log.wtlogin.qq.com/cgi-bin/ptlogin_report?",
				p = location.href,
				i = encodeURIComponent(o + "|_|" + p + "|_|" + window.navigator.userAgent),
				l = e + "mid=" + t + "&msg=" + i + "&v=" + Math.random(),
				u = new Image;
			u.src = l
		}
	},
	init: function() {
		var o = location.hostname.match(/\w*\.(cc|com|cn|com\.cn)$/);
		pt_logout.mainDomain = o ? o[0] : "", pt_logout.httpWhiteDomain[pt_logout.mainDomain] || pt_logout.nlog(
			"公司外部域名引用logout", "350448");
		var t = location.hostname.match(/\w+(\.\w+)\.(cc|com|cn|com\.cn)$/);
		pt_logout.appDomain = t ? t[0] : "", "qq.com" != pt_logout.mainDomain && (pt_logout.appDomain =
			pt_logout.mainDomain), pt_logout.nlog("logout pv", "365716", .05)
	},
	getLogoutUrl: function(o) {
		var t = pt_logout.getCookie("pt4_token"),
			n = pt_logout.getCookie("skey"),
			e = pt_logout.time33(n),
			p = pt_logout.getCookie("ptcz"),
			i = pt_logout.hash33(p),
			l = "",
			u = o ? "qq.com" : pt_logout.mainDomain;
		return l = ("https:" == location.protocol ? "https://ssl." : "http://") + "ptlogin2." + u + "/logout?",
			l += "pt4_token=" + t + "&pt4_hkey=" + e + "&pt4_ptcz=" + i + "&deep_logout=1"
	},
	time33: function(o) {
		for (var t = 0, n = 0, e = o.length; e > n; n++) t = 33 * t + o.charCodeAt(n);
		return t % 4294967296
	},
	hash33: function(o) {
		for (var t = 0, n = 0, e = o.length; e > n; ++n) t += (t << 5) + o.charCodeAt(n);
		return 2147483647 & t
	},
	clearCookie: function(o) {
		o = o || pt_logout.appDomain, pt_logout.delCookie("p_uin", o), pt_logout.delCookie("p_skey", o),
			pt_logout.delCookie("p_luin", o), pt_logout.delCookie("p_lskey", o), pt_logout.delCookie(
				"pt4_token", o), pt_logout.delCookie("pt_mbkey", pt_logout.mainDomain || "qq.com"), "" !=
			pt_logout.appDomain && "" != pt_logout.getCookie("skey_m") && (pt_logout.delCookie("uin_m",
				pt_logout.appDomain), pt_logout.delCookie("skey_m", pt_logout.appDomain))
	},
	set_ret: function(o, t) {
		try {
			var n = pt_logout.getCookie("pt4_token");
			pt_logout.clearCookie(t), o > 0 || (pt_logout.delCookie("uin", pt_logout.mainDomain), pt_logout
					.delCookie("skey", pt_logout.mainDomain), pt_logout.nlog("logout fail", "285851", .1)),
				"function" == typeof pt_logout.callback && pt_logout.callback(2), "" != t && t != pt_logout
				.appDomain && pt_logout.nlog("domain unsame:n=" + o + ":pt4_token=" + n + ":cgi_domain=" + t +
					":js_domain=" + pt_logout.appDomain, "285852", .1)
		} catch (e) {
			return
		}
	},
	logout: function(o, t) {
		pt_logout.init();
		var n = pt_logout.getCookie("pt4_token"),
			e = pt_logout.getCookie("skey"),
			p = pt_logout.getCookie("ptcz");
		"function" == typeof o && (pt_logout.callback = o);
		var i = pt_logout.getLogoutUrl(t);
		n || e || p ? pt_logout.jsonp(i) : ("function" == typeof o && o(2), pt_logout.nlog(
			"logout without cookie", 365715))
	},
	logoutQQCom: function(o) {
		pt_logout.logout(o, !0), pt_logout.delCookie("uin", pt_logout.mainDomain), pt_logout.delCookie("skey",
			pt_logout.mainDomain)
	}
};
