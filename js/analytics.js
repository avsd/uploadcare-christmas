(function() {
    var $d_encodeURIComponent = encodeURIComponent, $d_window = window, $d_setTimeout = setTimeout, $d_Math = Math;
    function Pc(a, b) {
        return a.href = b;
    }
    function fa(a, b) {
        return a.name = b;
    }
    var $d_Qc = "replace", $d_q = "data", $d_m = "match", $d_xc = "send", $d_ja = "port", $d_u = "createElement", $d_id = "setAttribute", $d_da = "getTime", $d_x = "host", $d_A = "split", $d_B = "location", $d_ra = "hasOwnProperty", $d_ma = "hostname", $d_ga = "search", $d_E = "protocol", $d_Ab = "href", $d_kd = "action", $d_G = "apply", $d_p = "push", $d_h = "hash", $d_s = "test", $d_ha = "slice", $d_r = "cookie", $d_t = "indexOf", $d_ia = "defaultValue", $d_v = "name", $d_y = "length", $d_z = "prototype", $d_la = "clientWidth", $d_jd = "target", $d_C = "call", $d_na = "clientHeight", $d_F = "substring", $d_oa = "navigator", $d_Ub = "parentNode", $d_H = "join", $d_I = "toLowerCase";
    var pa = new function() {
        var a = [];
        this.set = function(b) {
            a[b] = !0;
        };
        this.M = function() {
            for (var b = [], c = 0; c < a.length; c++) a[c] && (b[Math.floor(c / 6)] = b[Math.floor(c / 6)] ^ 1 << c % 6);
            for (c = 0; c < b.length; c++) b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c] || 0);
            return b.join("") + "~";
        };
    }();
    function J(a) {
        pa.set(a);
    }
    var ea = function(a) {
        return "function" == typeof a;
    }, ka = function(a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a));
    }, qa = function(a) {
        return void 0 != a && -1 < (a.constructor + "").indexOf("String");
    }, D = function(a, b) {
        return 0 == a.indexOf(b);
    }, sa = function(a) {
        return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
    }, ta = function(a) {
        var b = document.createElement("img");
        b.width = 1;
        b.height = 1;
        b.src = a;
        return b;
    }, ua = function() {}, K = function(a) {
        if (encodeURIComponent instanceof Function) return encodeURIComponent(a);
        J(28);
        return a;
    }, L = function(a, b, c, d) {
        try {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
        } catch (e) {
            J(27);
        }
    }, va = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    }, wa = function(a, b) {
        if (a) {
            var c = document.createElement("script");
            c.type = "text/javascript";
            c.async = !0;
            c.src = a;
            b && (c.id = b);
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(c, d);
        }
    }, xa = function() {
        var a = "" + document.location.hostname;
        return 0 == a.indexOf("www.") ? a.substring(4) : a;
    }, ya = function(a) {
        var b = document.referrer;
        if (/^https?:\/\//i.test(b)) {
            if (a) return b;
            a = "//" + document.location.hostname;
            var c = b.indexOf(a);
            if (5 == c || 6 == c) if (a = b.charAt(c + a.length), "/" == a || "?" == a || "" == a || ":" == a) return;
            return b;
        }
    }, za = function(a, b) {
        if (1 == b.length && null != b[0] && "object" === typeof b[0]) return b[0];
        for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++) if ("object" === typeof b[e]) {
            for (var g in b[e]) b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
            break;
        } else e < a.length && (c[a[e]] = b[e]);
        return c;
    };
    var N = function() {
        this.keys = [];
        this.w = {};
        this.m = {};
    };
    N.prototype.set = function(a, b, c) {
        this.keys.push(a);
        c ? this.m[":" + a] = b : this.w[":" + a] = b;
    };
    N.prototype.get = function(a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.w[":" + a];
    };
    N.prototype.map = function(a) {
        for (var b = 0; b < this.keys.length; b++) {
            var c = this.keys[b], d = this.get(c);
            d && a(c, d);
        }
    };
    var $d_$d_window = window, $d_document = document, fb = function(a) {
        setTimeout(a, 100);
    }, Mc = function() {
        for (var a = window.navigator.userAgent + (document.cookie ? document.cookie : "") + (document.referrer ? document.referrer : ""), b = a.length, c = window.history.length; 0 < c; ) a += c-- ^ b++;
        return La(a);
    };
    var Aa = function(a) {
        var b = window._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === window["ga-disable-" + a]) return !0;
        try {
            var c = window.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
        } catch (d) {}
        return !1;
    };
    var Ca = function(a) {
        var b = [], c = document.cookie.split(";");
        a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push(e[1]);
        }
        return b;
    }, zc = function(a, b, c, d, e, g) {
        e = Aa(e) ? !1 : eb.test(document.location.hostname) || "/" == c && vc.test(d) ? !1 : !0;
        if (!e) return !1;
        b && 1200 < b.length && (b = b.substring(0, 1200), J(24));
        c = a + "=" + b + "; path=" + c + "; ";
        g && (c += "expires=" + new Date(new Date().getTime() + g).toGMTString() + "; ");
        d && "none" != d && (c += "domain=" + d + ";");
        d = document.cookie;
        document.cookie = c;
        if (!(d = d != document.cookie)) t: {
            a = Ca(a);
            for (d = 0; d < a.length; d++) if (b == a[d]) {
                d = !0;
                break t;
            }
            d = !1;
        }
        return d;
    }, Cc = function(a) {
        return K(a).replace(/\(/g, "%28").replace(/\)/g, "%29");
    }, vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, eb = /(^|\.)doubleclick\.net$/i;
    var oc = function() {
        return (Ba || "https:" == document.location.protocol ? "https:" : "http:") + "//www.google-analytics.com";
    }, Da = function(a) {
        fa(this, "len");
        this.message = a + "-8192";
    }, Ea = function(a) {
        fa(this, "ff2post");
        this.message = a + "-2036";
    }, Ga = function(a, b, c, d) {
        c = c || ua;
        d && (d = c, window.navigator.sendBeacon ? window.navigator.sendBeacon(a, b) ? (d(), 
        d = !0) : d = !1 : d = !1);
        if (!d) if (2036 >= b.length) wc(a, b, c); else if (8192 >= b.length) {
            if (0 <= window.navigator.userAgent.indexOf("Firefox") && ![].reduce) throw new Ea(b.length);
            wd(a, b, c) || xd(a, b, c) || Fa(b, c) || c();
        } else throw new Da(b.length);
    }, wc = function(a, b, c) {
        var d = ta(a + "?" + b);
        d.onload = d.onerror = function() {
            d.onload = null;
            d.onerror = null;
            c();
        };
        if (typeof post_keen !== "undefined") post_keen(a, b);
    }, xd = function(a, b, c) {
        var d;
        d = window.XDomainRequest;
        if (!d) return !1;
        d = new d();
        d.open("POST", a);
        d.onerror = function() {
            c();
        };
        d.onload = c;
        d.send(b);
        if (typeof post_keen !== "undefined") post_keen(a, b);
        return !0;
    }, wd = function(a, b, c) {
        var d = window.XMLHttpRequest;
        if (!d) return !1;
        var e = new d();
        if (!("withCredentials" in e)) return !1;
        e.open("POST", a, !0);
        e.withCredentials = !0;
        e.setRequestHeader("Content-Type", "text/plain");
        e.onreadystatechange = function() {
            4 == e.readyState && (c(), e = null);
        };
        e.send(b);
        if (typeof post_keen !== "undefined") post_keen(a, b);
        return !0;
    }, Fa = function(a, b) {
        if (!document.body) return fb(function() {
            Fa(a, b);
        }), !0;
        a = encodeURIComponent(a);
        try {
            var c = document.createElement('<iframe name="' + a + '"></iframe>');
        } catch (d) {
            c = document.createElement("iframe"), fa(c, a);
        }
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var e = document.location, e = oc() + "/analytics_iframe.html#" + encodeURIComponent(e.protocol + "//" + e.host + "/favicon.ico"), g = function() {
            c.src = "";
            c.parentNode && c.parentNode.removeChild(c);
        };
        L(window, "beforeunload", g);
        var ca = !1, l = 0, k = function() {
            if (!ca) {
                try {
                    if (9 < l || c.contentWindow.location.host == document.location.host) {
                        ca = !0;
                        g();
                        va(window, "beforeunload", g);
                        b();
                        return;
                    }
                } catch (a) {}
                l++;
                setTimeout(k, 200);
            }
        };
        L(c, "load", k);
        document.body.appendChild(c);
        c.src = e;
        return !0;
    };
    var Ha = function() {
        this.t = [];
    };
    Ha.prototype.add = function(a) {
        this.t.push(a);
    };
    Ha.prototype.D = function(a) {
        try {
            for (var b = 0; b < this.t.length; b++) {
                var c = a.get(this.t[b]);
                c && ea(c) && c.call(window, a);
            }
        } catch (d) {}
        b = a.get(Ia);
        b != ua && ea(b) && (a.set(Ia, ua, !0), setTimeout(b, 10));
    };
    function Ja(a) {
        if (100 != a.get(Ka) && La(P(a, Q)) % 1e4 >= 100 * R(a, Ka)) throw "abort";
    }
    function Ma(a) {
        if (Aa(P(a, Na))) throw "abort";
    }
    function Oa() {
        var a = document.location.protocol;
        if ("http:" != a && "https:" != a) throw "abort";
    }
    function Pa(a) {
        try {
            window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest() ? J(40) : window.XDomainRequest && J(41), 
            window.navigator.sendBeacon && J(42);
        } catch (b) {}
        a.set(Ac, R(a, Ac) + 1);
        var c = [];
        Qa.map(function(b, e) {
            if (e.p) {
                var g = a.get(b);
                void 0 != g && g != e.defaultValue && ("boolean" == typeof g && (g *= 1), c.push(e.p + "=" + K("" + g)));
            }
        });
        c.push("z=" + Bd());
        a.set(Ra, c.join("&"), !0);
    }
    function Sa(a) {
        var b = P(a, gd) || oc() + "/collect";
        Ga(b, P(a, Ra), a.get(Ia), a.get(Vd));
        a.set(Ia, ua, !0);
    }
    function Hc(a) {
        var b = window.gaData;
        b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar));
    }
    function cd() {
        if (window.navigator && "preview" == window.navigator.loadPurpose) throw "abort";
    }
    function yd(a) {
        var b = window.gaDevIds;
        ka(b) && 0 != b.length && a.set("&did", b.join(","), !0);
    }
    function vb(a) {
        if (!a.get(Na)) throw "abort";
    }
    var hd = function() {
        return Math.round(2147483647 * Math.random());
    }, Bd = function() {
        try {
            var a = new Uint32Array(1);
            window.crypto.getRandomValues(a);
            return a[0] & 2147483647;
        } catch (b) {
            return hd();
        }
    };
    function Ta(a) {
        var b = R(a, Ua);
        500 <= b && J(15);
        var c = P(a, Va);
        if ("transaction" != c && "item" != c) {
            var c = R(a, Wa), d = new Date().getTime(), e = R(a, Xa);
            0 == e && a.set(Xa, d);
            e = Math.round(2 * (d - e) / 1e3);
            0 < e && (c = Math.min(c + e, 20), a.set(Xa, d));
            if (0 >= c) throw "abort";
            a.set(Wa, --c);
        }
        a.set(Ua, ++b);
    }
    var Ya = function() {
        this.data = new N();
    }, Qa = new N(), Za = [];
    Ya.prototype.get = function(a) {
        var b = $a(a), c = this.data.get(a);
        b && void 0 == c && (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue);
        return b && b.n ? b.n(this, a, c) : c;
    };
    var P = function(a, b) {
        var c = a.get(b);
        return void 0 == c ? "" : "" + c;
    }, R = function(a, b) {
        var c = a.get(b);
        return void 0 == c || "" === c ? 0 : 1 * c;
    };
    Ya.prototype.set = function(a, b, c) {
        if (a) if ("object" == typeof a) for (var d in a) a.hasOwnProperty(d) && ab(this, d, a[d], c); else ab(this, a, b, c);
    };
    var ab = function(a, b, c, d) {
        if (void 0 != c) switch (b) {
          case Na:
            wb.test(c);
        }
        var e = $a(b);
        e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d);
    }, bb = function(a, b, c, d, e) {
        fa(this, a);
        this.p = b;
        this.n = d;
        this.o = e;
        this.defaultValue = c;
    }, $a = function(a) {
        var b = Qa.get(a);
        if (!b) for (var c = 0; c < Za.length; c++) {
            var d = Za[c], e = d[0].exec(a);
            if (e) {
                b = d[1](e);
                Qa.set(b.name, b);
                break;
            }
        }
        return b;
    }, yc = function(a) {
        var b;
        Qa.map(function(c, d) {
            d.p == a && (b = d);
        });
        return b && b.name;
    }, S = function(a, b, c, d, e) {
        a = new bb(a, b, c, d, e);
        Qa.set(a.name, a);
        return a.name;
    }, cb = function(a, b) {
        Za.push([ new RegExp("^" + a + "$"), b ]);
    }, T = function(a, b, c) {
        return S(a, b, c, void 0, db);
    }, db = function() {};
    var gb = qa(window.GoogleAnalyticsObject) && sa(window.GoogleAnalyticsObject) || "ga", Ba = !1, hb = T("apiVersion", "v"), ib = T("clientVersion", "_v");
    S("anonymizeIp", "aip");
    var jb = S("adSenseId", "a"), Va = S("hitType", "t"), Ia = S("hitCallback"), Ra = S("hitPayload");
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    var Vd = S("useBeacon", void 0, !1);
    S("dataSource", "ds");
    S("sessionControl", "sc", "");
    S("sessionGroup", "sg");
    S("queueTime", "qt");
    var Ac = S("_s", "_s");
    S("screenName", "cd");
    var kb = S("location", "dl", ""), lb = S("referrer", "dr"), mb = S("page", "dp", "");
    S("hostname", "dh");
    var nb = S("language", "ul"), ob = S("encoding", "de");
    S("title", "dt", function() {
        return document.title || void 0;
    });
    cb("contentGroup([0-9]+)", function(a) {
        return new bb(a[0], "cg" + a[1]);
    });
    var pb = S("screenColors", "sd"), qb = S("screenResolution", "sr"), rb = S("viewportSize", "vp"), sb = S("javaEnabled", "je"), tb = S("flashVersion", "fl");
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    var ub = S("eventCategory", "ec"), xb = S("eventAction", "ea"), yb = S("eventLabel", "el"), zb = S("eventValue", "ev"), Bb = S("socialNetwork", "sn"), Cb = S("socialAction", "sa"), Db = S("socialTarget", "st"), Eb = S("l1", "plt"), Fb = S("l2", "pdt"), Gb = S("l3", "dns"), Hb = S("l4", "rrt"), Ib = S("l5", "srt"), Jb = S("l6", "tcp"), Kb = S("l7", "dit"), Lb = S("l8", "clt"), Mb = S("timingCategory", "utc"), Nb = S("timingVar", "utv"), Ob = S("timingLabel", "utl"), Pb = S("timingValue", "utt");
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    var Nc = S("expId", "xid"), Oc = S("expVar", "xvar"), Rc = S("_utma", "_utma"), Sc = S("_utmz", "_utmz"), Tc = S("_utmht", "_utmht"), Ua = S("_hc", void 0, 0), Xa = S("_ti", void 0, 0), Wa = S("_to", void 0, 20);
    cb("dimension([0-9]+)", function(a) {
        return new bb(a[0], "cd" + a[1]);
    });
    cb("metric([0-9]+)", function(a) {
        return new bb(a[0], "cm" + a[1]);
    });
    S("linkerParam", void 0, void 0, Bc, db);
    var ld = S("usage", "_u", void 0, function() {
        return pa.M();
    }, db);
    S("forceSSL", void 0, void 0, function() {
        return Ba;
    }, function(a, b, c) {
        J(34);
        Ba = !!c;
    });
    var ed = S("_j1", "jid"), Hd = S("_j2", "gjid");
    cb("\\&(.*)", function(a) {
        var b = new bb(a[0], a[1]), c = yc(a[0].substring(1));
        c && (b.n = function(a) {
            return a.get(c);
        }, b.o = function(a, b, g, ca) {
            a.set(c, g, ca);
        }, b.p = void 0);
        return b;
    });
    var Qb = T("_oot"), dd = S("previewTask"), Rb = S("checkProtocolTask"), md = S("validationTask"), Sb = S("checkStorageTask"), Uc = S("historyImportTask"), Tb = S("samplerTask"), Vb = T("_rlt"), Wb = S("buildHitTask"), Xb = S("sendHitTask"), Vc = S("ceTask"), zd = S("devIdTask"), Cd = S("timingTask"), Ld = S("displayFeaturesTask"), V = T("name"), Q = T("clientId", "cid"), Ad = S("userId", "uid"), Na = T("trackingId", "tid"), U = T("cookieName", void 0, "_ga"), W = T("cookieDomain"), Yb = T("cookiePath", void 0, "/"), Zb = T("cookieExpires", void 0, 63072e3), $b = T("legacyCookieDomain"), Wc = T("legacyHistoryImport", void 0, !0), ac = T("storage", void 0, "cookie"), bc = T("allowLinker", void 0, !1), cc = T("allowAnchor", void 0, !0), Ka = T("sampleRate", "sf", 100), dc = T("siteSpeedSampleRate", void 0, 1), ec = T("alwaysSendReferrer", void 0, !1), gd = S("transportUrl"), Md = S("_r", "_r");
    function X(a, b, c, d) {
        b[a] = function() {
            try {
                return d && J(d), c.apply(this, arguments);
            } catch (b) {
                var g = b && b.name;
                if (!(1 <= 100 * Math.random() || Aa("?"))) {
                    var ca = [ "t=error", "_e=exc", "_v=j31", "sr=1" ];
                    a && ca.push("_f=" + a);
                    g && ca.push("_m=" + K(g.substring(0, 100)));
                    ca.push("aip=1");
                    ca.push("z=" + hd());
                    Ga(oc() + "/collect", ca.join("&"));
                }
                throw b;
            }
        };
    }
    var Od = function() {
        this.V = 1e4;
        this.fa = void 0;
        this.$ = !1;
        this.ea = 1;
    }, Ed = function() {
        var a = new Od(), b;
        if (a.fa && a.$) return 0;
        a.$ = !0;
        if (0 == a.V) return 0;
        void 0 === b && (b = Bd());
        return 0 == b % a.V ? Math.floor(b / a.V) % a.ea + 1 : 0;
    };
    function fc() {
        var a, b, c;
        if ((c = (c = window.navigator) ? c.plugins : null) && c.length) for (var d = 0; d < c.length && !b; d++) {
            var e = c[d];
            -1 < e.name.indexOf("Shockwave Flash") && (b = e.description);
        }
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version");
        } catch (g) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", 
            b = a.GetVariable("$version");
        } catch (ca) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version");
        } catch (l) {}
        b && (a = b.match(/[\d]+/g)) && 3 <= a.length && (b = a[0] + "." + a[1] + " r" + a[2]);
        return b || void 0;
    }
    var gc = function(a, b) {
        var c = Math.min(R(a, dc), 100);
        if (!(La(P(a, Q)) % 100 >= c) && (c = {}, Ec(c) || Fc(c))) {
            var d = c[Eb];
            void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), 
            Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : L(window, "load", function() {
                gc(a, b);
            }, !1));
        }
    }, Ec = function(a) {
        var b = window.performance || window.webkitPerformance, b = b && b.timing;
        if (!b) return !1;
        var c = b.navigationStart;
        if (0 == c) return !1;
        a[Eb] = b.loadEventStart - c;
        a[Gb] = b.domainLookupEnd - b.domainLookupStart;
        a[Jb] = b.connectEnd - b.connectStart;
        a[Ib] = b.responseStart - b.requestStart;
        a[Fb] = b.responseEnd - b.responseStart;
        a[Hb] = b.fetchStart - c;
        a[Kb] = b.domInteractive - c;
        a[Lb] = b.domContentLoadedEventStart - c;
        return !0;
    }, Fc = function(a) {
        if (window.top != window) return !1;
        var b = window.external, c = b && b.onloadT;
        b && !b.isValidLoadTime && (c = void 0);
        2147483648 < c && (c = void 0);
        0 < c && b.setPageReadyTime();
        if (void 0 == c) return !1;
        a[Eb] = c;
        return !0;
    }, Y = function(a, b) {
        var c = a[b];
        if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0;
    }, Fd = function(a) {
        return function(b) {
            "pageview" != b.get(Va) || a.I || (a.I = !0, gc(b, function(b) {
                a.send("timing", b);
            }));
        };
    };
    var hc = !1, mc = function(a) {
        if ("cookie" == P(a, ac)) {
            var b = P(a, U), c = nd(a), d = kc(P(a, Yb)), e = lc(P(a, W)), g = 1e3 * R(a, Zb), ca = P(a, Na);
            if ("auto" != e) zc(b, c, d, e, ca, g) && (hc = !0); else {
                J(32);
                var l;
                t: {
                    c = [];
                    e = xa().split(".");
                    if (4 == e.length && (l = e[e.length - 1], parseInt(l, 10) == l)) {
                        l = [ "none" ];
                        break t;
                    }
                    for (l = e.length - 2; 0 <= l; l--) c.push(e.slice(l).join("."));
                    c.push("none");
                    l = c;
                }
                for (var k = 0; k < l.length; k++) if (e = l[k], a.data.set(W, e), c = nd(a), zc(b, c, d, e, ca, g)) {
                    hc = !0;
                    return;
                }
                a.data.set(W, "auto");
            }
        }
    }, nc = function(a) {
        if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)) throw "abort";
    }, Yc = function(a) {
        if (a.get(Wc)) {
            var b = P(a, W), c = P(a, $b) || xa(), d = Xc("__utma", c, b);
            d && (J(19), a.set(Tc, new Date().getTime(), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R));
        }
    }, nd = function(a) {
        var b = Cc(P(a, Q)), c = ic(P(a, W));
        a = jc(P(a, Yb));
        1 < a && (c += "-" + a);
        return [ "GA1", c, b ].join(".");
    }, Gc = function(a, b, c) {
        for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
            var l = a[ca];
            if (l.r[c] == b) d.push(l); else void 0 == g || l.r[c] < g ? (e = [ l ], g = l.r[c]) : l.r[c] == g && e.push(l);
        }
        return 0 < d.length ? d : e;
    }, lc = function(a) {
        return 0 == a.indexOf(".") ? a.substr(1) : a;
    }, ic = function(a) {
        return lc(a).split(".").length;
    }, kc = function(a) {
        if (!a) return "/";
        1 < a.length && a.lastIndexOf("/") == a.length - 1 && (a = a.substr(0, a.length - 1));
        0 != a.indexOf("/") && (a = "/" + a);
        return a;
    }, jc = function(a) {
        a = kc(a);
        return "/" == a ? 1 : a.split("/").length;
    };
    function Xc(a, b, c) {
        "none" == b && (b = "");
        var d = [], e = Ca(a);
        a = "__utma" == a ? 6 : 2;
        for (var g = 0; g < e.length; g++) {
            var ca = ("" + e[g]).split(".");
            ca.length >= a && d.push({
                hash: ca[0],
                R: e[g],
                O: ca
            });
        }
        return 0 == d.length ? void 0 : 1 == d.length ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0];
    }
    function Zc(a, b) {
        var c, d;
        null == a ? c = d = 1 : (c = La(a), d = La(D(a, ".") ? a.substring(1) : "." + a));
        for (var e = 0; e < b.length; e++) if (b[e].hash == c || b[e].hash == d) return b[e];
    }
    var od = new RegExp(/^https?:\/\/([^\/:]+)/), pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;
    function Bc(a) {
        a = a.get(Q);
        var b = Ic(a, 0);
        return "_ga=1." + K(b + "." + a);
    }
    function Ic(a, b) {
        for (var c = new Date(), d = window.navigator, e = d.plugins || [], c = [ a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b ], d = 0; d < e.length; ++d) c.push(e[d].description);
        return La(c.join("."));
    }
    var Dc = function(a) {
        J(48);
        this.target = a;
        this.T = !1;
    };
    Dc.prototype.Q = function(a, b) {
        if (a.tagName) {
            if ("a" == a.tagName.toLowerCase()) {
                a.href && Pc(a, qd(this, a.href, b));
                return;
            }
            if ("form" == a.tagName.toLowerCase()) return rd(this, a);
        }
        if ("string" == typeof a) return qd(this, a, b);
    };
    var qd = function(a, b, c) {
        var d = pd.exec(b);
        d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
        a = a.target.get("linkerParam");
        var e = b.indexOf("?"), d = b.indexOf("#");
        c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d));
        return b;
    }, rd = function(a, b) {
        if (b && b.action) {
            var c = a.target.get("linkerParam").split("=")[1];
            if ("get" == b.method.toLowerCase()) {
                for (var d = b.childNodes || [], e = 0; e < d.length; e++) if ("_ga" == d[e].name) {
                    d[e].setAttribute("value", c);
                    return;
                }
                d = document.createElement("input");
                d.setAttribute("type", "hidden");
                d.setAttribute("name", "_ga");
                d.setAttribute("value", c);
                b.appendChild(d);
            } else "post" == b.method.toLowerCase() && (b.action = qd(a, b.action));
        }
    };
    Dc.prototype.S = function(a, b, c) {
        function d(c) {
            try {
                c = c || window.event;
                var d;
                t: {
                    var g = c.target || c.srcElement;
                    for (c = 100; g && 0 < c; ) {
                        if (g.href && g.nodeName.match(/^a(?:rea)?$/i)) {
                            d = g;
                            break t;
                        }
                        g = g.parentNode;
                        c--;
                    }
                    d = {};
                }
                ("http:" == d.protocol || "https:" == d.protocol) && sd(a, d.hostname || "") && d.href && Pc(d, qd(self, d.href, b));
            } catch (w) {
                J(26);
            }
        }
        var self = this;
        this.T || (this.T = !0, L(document, "mousedown", d, !1), L(document, "touchstart", d, !1), 
        L(document, "keyup", d, !1));
        if (c) {
            c = function(b) {
                b = b || window.event;
                if ((b = b.target || b.srcElement) && b.action) {
                    var c = b.action.match(od);
                    c && sd(a, c[1]) && rd(self, b);
                }
            };
            for (var g = 0; g < document.forms.length; g++) L(document.forms[g], "submit", c);
        }
    };
    function sd(a, b) {
        if (b == document.location.hostname) return !1;
        for (var c = 0; c < a.length; c++) if (a[c] instanceof RegExp) {
            if (a[c].test(b)) return !0;
        } else if (0 <= b.indexOf(a[c])) return !0;
        return !1;
    }
    var Jd = function(a, b, c, d) {
        this.U = b;
        this.aa = c;
        (b = d) || (b = (b = P(a, V)) && "t0" != b ? Wd.test(b) ? "_gat_" + Cc(P(a, Na)) : "_gat_" + Cc(b) : "_gat");
        this.Y = b;
    }, Rd = function(a, b) {
        var c = b.get(Wb);
        b.set(Wb, function(b) {
            Pd(a, b);
            var d = c(b);
            Qd(a, b);
            return d;
        });
        var d = b.get(Xb);
        b.set(Xb, function(b) {
            var c = d(b);
            Id(a, b);
            return c;
        });
    }, Pd = function(a, b) {
        b.get(a.U) || ("1" == Ca(a.Y)[0] ? b.set(a.U, "", !0) : b.set(a.U, "" + hd(), !0));
    }, Qd = function(a, b) {
        b.get(a.U) && zc(a.Y, "1", b.get(Yb), b.get(W), b.get(Na), 6e5);
    }, Id = function(a, b) {
        if (b.get(a.U)) {
            var c = new N(), d = function(a) {
                c.set($a(a).p, b.get(a));
            };
            d(hb);
            d(ib);
            d(Na);
            d(Q);
            d(a.U);
            d(ld);
            var e = a.aa;
            c.map(function(a, b) {
                e += K(a) + "=";
                e += K("" + b) + "&";
            });
            e += "z=" + hd();
            ta(e);
            b.set(a.U, "", !0);
        }
    }, Wd = /^gtm\d+$/;
    var fd = function(a, b) {
        var c = a.b;
        if (!c.get("dcLoaded")) {
            J(29);
            window._gaq && J(52);
            b = b || {};
            var d;
            b[U] && (d = Cc(b[U]));
            d = new Jd(c, ed, "https://stats.g.doubleclick.net/collect?t=dc&aip=1&", d);
            Rd(d, c);
            c.set("dcLoaded", !0);
        }
    };
    var Sd = function(a) {
        var b;
        b = a.get("dcLoaded") ? !1 : "cookie" != a.get(ac) ? !1 : !0;
        b && (J(51), b = new Jd(a, ed), Pd(b, a), Qd(b, a), a.get(b.U) && (a.set(Md, 1, !0), 
        a.set(gd, oc() + "/r/collect", !0)));
    };
    var Kd = function(a, b) {
        var c = a.b;
        if (!c.get("_rlsaLoaded")) {
            J(38);
            b = b || {};
            if (b[U]) var d = Cc(b[U]);
            d = new Jd(c, Hd, "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", d);
            Rd(d, c);
            c.set("_rlsaLoaded", !0);
            tc("displayfeatures", a, b);
        }
    };
    var Lc = function() {
        var a = window.gaGlobal = window.gaGlobal || {};
        return a.hid = a.hid || hd();
    };
    var ad, bd = function(a, b, c) {
        if (!ad) {
            var d;
            d = document.location.hash;
            var e = window.name, g = /^#?gaso=([^&]*)/;
            if (e = (d = (d = d && d.match(g) || e && e.match(g)) ? d[1] : Ca("GASO")[0] || "") && d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) zc("GASO", "" + d, c, b, a, 0), 
            window._udo || (window._udo = b), window._utcp || (window._utcp = c), a = e[1], 
            wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + hd(), "_gasojs");
            ad = !0;
        }
    };
    var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, pc = function(a) {
        function b(a, b) {
            self.b.data.set(a, b);
        }
        function c(a, c) {
            b(a, c);
            self.filters.add(a);
        }
        var self = this;
        this.b = new Ya();
        this.filters = new Ha();
        b(V, a[V]);
        b(Na, sa(a[Na]));
        b(U, a[U]);
        b(W, a[W] || xa());
        b(Yb, a[Yb]);
        b(Zb, a[Zb]);
        b($b, a[$b]);
        b(Wc, a[Wc]);
        b(bc, a[bc]);
        b(cc, a[cc]);
        b(Ka, a[Ka]);
        b(dc, a[dc]);
        b(ec, a[ec]);
        b(ac, a[ac]);
        b(Ad, a[Ad]);
        b(hb, 1);
        b(ib, "j31");
        c(Qb, Ma);
        c(dd, cd);
        c(Rb, Oa);
        c(md, vb);
        c(Sb, nc);
        c(Uc, Yc);
        c(Tb, Ja);
        c(Vb, Ta);
        c(Vc, Hc);
        c(zd, yd);
        c(Ld, Sd);
        c(Wb, Pa);
        c(Xb, Sa);
        c(Cd, Fd(this));
        Jc(this.b, a[Q]);
        Kc(this.b);
        this.b.set(jb, Lc());
        bd(this.b.get(Na), this.b.get(W), this.b.get(Yb));
    }, Jc = function(a, b) {
        if ("cookie" == P(a, ac)) {
            hc = !1;
            var c;
            i: {
                var d = Ca(P(a, U));
                if (d && !(1 > d.length)) {
                    c = [];
                    for (var e = 0; e < d.length; e++) {
                        var g;
                        g = d[e].split(".");
                        var ca = g.shift();
                        ("GA1" == ca || "1" == ca) && 1 < g.length ? (ca = g.shift().split("-"), 1 == ca.length && (ca[1] = "1"), 
                        ca[0] *= 1, ca[1] *= 1, g = {
                            r: ca,
                            s: g.join(".")
                        }) : g = void 0;
                        g && c.push(g);
                    }
                    if (1 == c.length) {
                        J(13);
                        c = c[0].s;
                        break i;
                    }
                    if (0 == c.length) J(12); else {
                        J(14);
                        d = ic(P(a, W));
                        c = Gc(c, d, 0);
                        if (1 == c.length) {
                            c = c[0].s;
                            break i;
                        }
                        d = jc(P(a, Yb));
                        c = Gc(c, d, 1);
                        c = c[0] && c[0].s;
                        break i;
                    }
                }
                c = void 0;
            }
            c || (c = P(a, W), d = P(a, $b) || xa(), c = Xc("__utma", d, c), (c = void 0 == c ? void 0 : c.O[1] + "." + c.O[2]) && J(10));
            c && (a.data.set(Q, c), hc = !0);
        }
        c = a.get(cc);
        if (e = (c = document.location[c ? "href" : "search"].match("(?:&|#|\\?)" + K("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c.length ? c[1] : "") a.get(bc) ? (c = e.indexOf("."), 
        -1 == c ? J(22) : (d = e.substring(c + 1), "1" != e.substring(0, c) ? J(22) : (c = d.indexOf("."), 
        -1 == c ? J(22) : (e = d.substring(0, c), c = d.substring(c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), 
        a.data.set(Q, c)))))) : J(21);
        b && (J(9), a.data.set(Q, K(b)));
        a.get(Q) || ((c = (c = window.gaGlobal && window.gaGlobal.vid) && -1 != c.search(/^(?:utma\.)?\d+\.\d+$/) ? c : void 0) ? (J(17), 
        a.data.set(Q, c)) : (J(8), a.data.set(Q, [ hd() ^ Mc() & 2147483647, Math.round(new Date().getTime() / 1e3) ].join("."))));
        mc(a);
    }, Kc = function(a) {
        var b = window.navigator, c = window.screen, d = document.location;
        a.set(lb, ya(a.get(ec)));
        if (d) {
            var e = d.pathname || "";
            "/" != e.charAt(0) && (J(31), e = "/" + e);
            a.set(kb, d.protocol + "//" + d.hostname + e + d.search);
        }
        c && a.set(qb, c.width + "x" + c.height);
        c && a.set(pb, c.colorDepth + "-bit");
        var c = document.documentElement, g = (e = document.body) && e.clientWidth && e.clientHeight, ca = [];
        c && c.clientWidth && c.clientHeight && ("CSS1Compat" === document.compatMode || !g) ? ca = [ c.clientWidth, c.clientHeight ] : g && (ca = [ e.clientWidth, e.clientHeight ]);
        c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x");
        a.set(rb, c);
        a.set(tb, fc());
        a.set(ob, document.characterSet || document.charset);
        a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
        a.set(nb, (b && (b.language || b.browserLanguage) || "").toLowerCase());
        if (d && a.get(cc) && (b = document.location.hash)) {
            b = b.split(/[?&#]+/);
            d = [];
            for (c = 0; c < b.length; ++c) (D(b[c], "utm_id") || D(b[c], "utm_campaign") || D(b[c], "utm_source") || D(b[c], "utm_medium") || D(b[c], "utm_term") || D(b[c], "utm_content") || D(b[c], "gclid") || D(b[c], "dclid") || D(b[c], "gclsrc")) && d.push(b[c]);
            0 < d.length && (b = "#" + d.join("&"), a.set(kb, a.get(kb) + b));
        }
    };
    pc.prototype.get = function(a) {
        return this.b.get(a);
    };
    pc.prototype.set = function(a, b) {
        this.b.set(a, b);
    };
    var qc = {
        pageview: [ mb ],
        event: [ ub, xb, yb, zb ],
        social: [ Bb, Cb, Db ],
        timing: [ Mb, Nb, Pb, Ob ]
    };
    pc.prototype.send = function(a) {
        if (!(1 > arguments.length)) {
            var b, c;
            "string" === typeof arguments[0] ? (b = arguments[0], c = [].slice.call(arguments, 1)) : (b = arguments[0] && arguments[0][Va], 
            c = arguments);
            b && (c = za(qc[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.D(this.b), 
            this.b.data.m = {}, J(44));
        }
    };
    var rc = function(a) {
        if ("prerender" == document.visibilityState) return !1;
        a();
        return !0;
    };
    var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/, sc = function(a) {
        if (ea(a[0])) this.u = a[0]; else {
            var b = td.exec(a[0]);
            null != b && 4 == b.length && (this.c = b[1] || "t0", this.e = b[2] || "", this.d = b[3], 
            this.a = [].slice.call(a, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, 
            this.g = "provide" == this.d, this.ba = "remove" == this.d), this.i && (3 <= this.a.length ? (this.X = this.a[1], 
            this.W = this.a[2]) : this.a[1] && (qa(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1])));
            b = a[1];
            a = a[2];
            if (!this.d) throw "abort";
            if (this.i && (!qa(b) || "" == b)) throw "abort";
            if (this.g && (!qa(b) || "" == b || !ea(a))) throw "abort";
            if (ud(this.c) || ud(this.e)) throw "abort";
            if (this.g && "t0" != this.c) throw "abort";
        }
    };
    function ud(a) {
        return 0 <= a.indexOf(".") || 0 <= a.indexOf(":");
    }
    var Yd, Zd, $d;
    Yd = new N();
    $d = new N();
    Zd = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    var tc = function(a, b, c) {
        b == $ ? J(35) : b.get(V);
        var d = Yd.get(a);
        if (!ea(d)) return !1;
        b.plugins_ = b.plugins_ || new N();
        if (b.plugins_.get(a)) return !0;
        b.plugins_.set(a, new d(b, c || {}));
        return !0;
    }, ae = function(a) {
        function b(a) {
            var b = (a.hostname || "").split(":")[0].toLowerCase(), c = (a.protocol || "").toLowerCase(), c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "");
            a = a.pathname || "";
            D(a, "/") || (a = "/" + a);
            return [ b, "" + c, a ];
        }
        var c = document.createElement("a");
        Pc(c, document.location.href);
        var d = (c.protocol || "").toLowerCase(), e = b(c), g = c.search || "", ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
        D(a, "//") ? a = d + a : D(a, "/") ? a = ca + a : !a || D(a, "?") ? a = ca + e[2] + (a || g) : 0 > a.split("/")[0].indexOf(":") && (a = ca + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a);
        Pc(c, a);
        d = b(c);
        return {
            protocol: (c.protocol || "").toLowerCase(),
            host: d[0],
            port: d[1],
            path: d[2],
            G: c.search || "",
            url: a || ""
        };
    };
    var Z = {
        ga: function() {
            Z.f = [];
        }
    };
    Z.ga();
    Z.D = function(a) {
        var b = Z.J.apply(Z, arguments), b = Z.f.concat(b);
        for (Z.f = []; 0 < b.length && !Z.v(b[0]) && !(b.shift(), 0 < Z.f.length); ) ;
        Z.f = Z.f.concat(b);
    };
    Z.J = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) try {
            var d = new sc(arguments[c]);
            if (d.g) Yd.set(d.a[0], d.a[1]); else {
                if (d.i) {
                    var e = d, g = e.a[0];
                    if (!ea(Yd.get(g)) && !$d.get(g)) {
                        Zd.hasOwnProperty(g) && J(Zd[g]);
                        var ca = e.X;
                        !ca && Zd.hasOwnProperty(g) ? (J(39), ca = g + ".js") : J(43);
                        if (ca) {
                            ca && 0 <= ca.indexOf("/") || (ca = (Ba || "https:" == document.location.protocol ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + ca);
                            var l = ae(ca), e = void 0;
                            var k = l.protocol, w = document.location.protocol, e = "https:" == k || k == w ? !0 : "http:" != k ? !1 : "http:" == w;
                            var Xd;
                            if (Xd = e) {
                                var e = l, be = ae(document.location.href);
                                if (e.G || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://")) Xd = !1; else if (e.host == be.host && e.port == be.port) Xd = !0; else {
                                    var ce = "http:" == e.protocol ? 80 : 443;
                                    Xd = "www.google-analytics.com" == e.host && (e.port || ce) == ce && D(e.path, "/plugins/") ? !0 : !1;
                                }
                            }
                            Xd && (wa(l.url), $d.set(g, !0));
                        }
                    }
                }
                b.push(d);
            }
        } catch (de) {}
        return b;
    };
    Z.v = function(a) {
        try {
            if (a.u) a.u.call(window, $.j("t0")); else {
                var b = a.c == gb ? $ : $.j(a.c);
                if (a.A) "t0" == a.c && $.create.apply($, a.a); else if (a.ba) $.remove(a.c); else if (b) if (a.i) {
                    if (!tc(a.a[0], b, a.W)) return !0;
                } else if (a.e) {
                    var c = a.d, d = a.a, e = b.plugins_.get(a.e);
                    e[c].apply(e, d);
                } else b[a.d].apply(b, a.a);
            }
        } catch (g) {}
    };
    var $ = function(a) {
        J(1);
        Z.D.apply(Z, [ arguments ]);
    };
    $.h = {};
    $.P = [];
    $.L = 0;
    $.answer = 42;
    var uc = [ Na, W, V ];
    $.create = function(a) {
        var b = za(uc, [].slice.call(arguments));
        b[V] || (b[V] = "t0");
        var c = "" + b[V];
        if ($.h[c]) return $.h[c];
        b = new pc(b);
        $.h[c] = b;
        $.P.push(b);
        return b;
    };
    $.remove = function(a) {
        for (var b = 0; b < $.P.length; b++) if ($.P[b].get(V) == a) {
            $.P.splice(b, 1);
            $.h[a] = null;
            break;
        }
    };
    $.j = function(a) {
        return $.h[a];
    };
    $.K = function() {
        return $.P.slice(0);
    };
    $.N = function() {
        "ga" != gb && J(49);
        var a = window[gb];
        if (!a || 42 != a.answer) {
            $.L = a && a.l;
            $.loaded = !0;
            var b = window[gb] = $;
            X("create", b, b.create, 3);
            X("remove", b, b.remove);
            X("getByName", b, b.j, 5);
            X("getAll", b, b.K, 6);
            b = pc.prototype;
            X("get", b, b.get, 7);
            X("set", b, b.set, 4);
            X("send", b, b.send, 2);
            b = Ya.prototype;
            X("get", b, b.get);
            X("set", b, b.set);
            t: for (var b = document.getElementsByTagName("script"), c = 0; c < b.length && 100 > c; c++) {
                var d;
                d = (d = b[c].src) ? 0 != d.indexOf("https://www.google-analytics.com/analytics") ? !1 : !0 : !1;
                if (d) {
                    J(33);
                    break t;
                }
            }
            "https:" != document.location.protocol && !Ba && Ed() && (J(36), Ba = !0);
            (window.gaplugins = window.gaplugins || {}).Linker = Dc;
            b = Dc.prototype;
            Yd.set("linker", Dc);
            X("decorate", b, b.Q, 20);
            X("autoLink", b, b.S, 25);
            Yd.set("displayfeatures", fd);
            Yd.set("adfeatures", Kd);
            a = a && a.q;
            ka(a) ? Z.D.apply($, a) : J(50);
        }
    };
    $.k = function() {
        for (var a = $.K(), b = 0; b < a.length; b++) a[b].get(V);
    };
    (function() {
        var a = $.N;
        if (!rc(a)) {
            J(16);
            var b = !1, c = function() {
                !b && rc(a) && (b = !0, va(document, "visibilitychange", c));
            };
            L(document, "visibilitychange", c);
        }
    })();
    function La(a) {
        var b = 1, c = 0, d;
        if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), 
        c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b;
    }
})(window);
