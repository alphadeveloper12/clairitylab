/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (ie, e) {
    "use strict";
    var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function (e) {
            return oe.flat.call(e)
        } : function (e) {
            return oe.concat.apply([], e)
        }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object),
        le = {}, v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }, y = function (e) {
            return null != e && e === e.window
        }, C = ie.document, u = {type: !0, src: !0, nonce: !0, noModule: !0};

    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }

    var t = "3.7.1", l = /HTML$/i, ce = function (e, t) {
        return new ce.fn.init(e, t)
    };

    function c(e) {
        var t = !!e && "length" in e && e.length, n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    ce.fn = ce.prototype = {
        jquery: t, constructor: ce, length: 0, toArray: function () {
            return ae.call(this)
        }, get: function (e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return ce.each(this, e)
        }, map: function (n) {
            return this.pushStack(ce.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(ae.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(ce.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(ce.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: oe.sort, splice: oe.splice
    }, ce.extend = ce.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            m(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, r = 0;
            if (c(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, text: function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i) while (t = e[r++]) n += ce.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        }, isXMLDoc: function (e) {
            var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        }, guid: 1, support: le
    }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function (e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function p(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }

    ce.escapeSelector = function (e) {
        return (e + "").replace(f, p)
    };
    var ye = C, me = s;
    !function () {
        var e, b, w, o, a, T, r, C, d, i, k = me, S = ce.expando, E = 0, n = 0, s = W(), c = W(), u = W(), h = W(),
            l = function (e, t) {
                return e === t && (a = !0), 0
            },
            f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
            v = new RegExp(ge + "+", "g"), y = new RegExp("^" + ge + "*," + ge + "*"),
            m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x = new RegExp(ge + "|>"), j = new RegExp(g),
            A = new RegExp("^" + t + "$"), D = {
                ID: new RegExp("^#(" + t + ")"),
                CLASS: new RegExp("^\\.(" + t + ")"),
                TAG: new RegExp("^(" + t + "|[*])"),
                ATTR: new RegExp("^" + p),
                PSEUDO: new RegExp("^" + g),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
            }, N = /^(?:input|select|textarea|button)$/i, q = /^h\d$/i, L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H = /[+~]/,
            O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, M = function () {
                V()
            }, R = J(function (e) {
                return !0 === e.disabled && fe(e, "fieldset")
            }, {dir: "parentNode", next: "legend"});
        try {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function (e, t) {
                    me.apply(e, ae.call(t))
                }, call: function (e) {
                    me.apply(e, ae.call(arguments, 1))
                }
            }
        }

        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (V(e), e = e || T, C)) {
                if (11 !== p && (u = L.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return k.call(n, a), n
                    } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n
                } else {
                    if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n
                }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }

        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function F(e) {
            return e[S] = !0, e
        }

        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function B(t) {
            return function (e) {
                return fe(e, "input") && e.type === t
            }
        }

        function _(t) {
            return function (e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }

        function z(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function X(a) {
            return F(function (o) {
                return o = +o, F(function (e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function U(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) {
                return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }), le.disconnectedMatch = $(function (e) {
                return i.call(e, "*")
            }), le.scope = $(function () {
                return T.querySelectorAll(":scope")
            }), le.cssHas = $(function () {
                try {
                    return T.querySelector(":has(*,:jqfake)"), !1
                } catch (e) {
                    return !0
                }
            }), le.getById ? (b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }, b.find.CLASS = function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, d = [], $(function (e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function (e, t) {
                if (e === t) return a = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }), T
        }

        for (e in I.matches = function (e, t) {
            return I(e, null, null, t)
        }, I.matchesSelector = function (e, t) {
            if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
                var n = i.call(e, t);
                if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
                h(t, !0)
            }
            return 0 < I(t, T, null, [e]).length
        }, I.contains = function (e, t) {
            return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
        }, I.attr = function (e, t) {
            (e.ownerDocument || e) != T && V(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
            return void 0 !== r ? r : e.getAttribute(t)
        }, I.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ce.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) he.call(e, n[r], 1)
            }
            return o = null, e
        }, ce.fn.uniqueSort = function () {
            return this.pushStack(ce.uniqueSort(ae.apply(this)))
        }, (b = ce.expr = {
            cacheLength: 50,
            createPseudo: F,
            match: D,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(O, P).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return fe(e, t)
                    }
                }, CLASS: function (e) {
                    var t = s[e + " "];
                    return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = I.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (d, e, t, h, g) {
                    var v = "nth" !== d.slice(0, 3), y = "last" !== d.slice(-4), m = "of-type" === e;
                    return 1 === h && 0 === g ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling", l = e.parentNode,
                            c = m && e.nodeName.toLowerCase(), f = !n && !m, p = !1;
                        if (l) {
                            if (v) {
                                while (u) {
                                    o = e;
                                    while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                                    s = u = "only" === d && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [y ? l.firstChild : l.lastChild], y && f) {
                                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                                while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) {
                                    i[d] = [E, a, p];
                                    break
                                }
                            } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                            return (p -= g) === h || p % h == 0 && 0 <= p / h
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: F(function (e) {
                    var r = [], i = [], s = ne(e.replace(ve, "$1"));
                    return s[S] ? F(function (e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: F(function (t) {
                    return function (e) {
                        return 0 < I(t, e).length
                    }
                }), contains: F(function (t) {
                    return t = t.replace(O, P), function (e) {
                        return -1 < (e.textContent || ce.text(e)).indexOf(t)
                    }
                }), lang: F(function (n) {
                    return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = ie.location && ie.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === r
                }, focus: function (e) {
                    return e === function () {
                        try {
                            return T.activeElement
                        } catch (e) {
                        }
                    }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: z(!1), disabled: z(!0), checked: function (e) {
                    return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return q.test(e.nodeName)
                }, input: function (e) {
                    return N.test(e.nodeName)
                }, button: function (e) {
                    return fe(e, "input") && "button" === e.type || fe(e, "button")
                }, text: function (e) {
                    var t;
                    return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: X(function () {
                    return [0]
                }), last: X(function (e, t) {
                    return [t - 1]
                }), eq: X(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: X(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: X(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: X(function (e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: X(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = B(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = _(e);

        function G() {
        }

        function Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(ve, " ")
                }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }

        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function J(a, e, t) {
            var s = e.dir, u = e.next, l = u || s, c = t && "parentNode" === l, f = n++;
            return e.first ? function (e, t, n) {
                while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e; else {
                    if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
                    if ((i[l] = o)[2] = a(e, t, n)) return !0
                }
                return !1
            }
        }

        function K(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function ee(d, h, g, v, y, e) {
            return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) {
                var i, o, a, s, u = [], l = [], c = t.length, f = e || function (e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), p = !d || !e && h ? f : Z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
                    i = Z(s, l), v(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = s.length;
                            while (o--) (a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
            })
        }

        function te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) {
                return e === i
            }, a, !0), l = J(function (e) {
                return -1 < se.call(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                }
                c.push(t)
            }
            return K(c)
        }

        function ne(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), n = t.length;
                while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                        h = E += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == T || (V(o), n = !C);
                            while (s = v[a++]) if (s(o, t || T, n)) {
                                k.call(r, o);
                                break
                            }
                            i && (E = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (E = h, w = p), c
                }, m ? F(r) : r))).selector = e
            }
            return a
        }

        function re(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && Y(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n
        }

        G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
    }();
    var d = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && ce(e).is(n)) break;
            r.push(e)
        }
        return r
    }, h = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function T(e, n, r) {
        return v(n) ? ce.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function (e) {
            return -1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }

    ce.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ce.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
                for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(T(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(T(this, e || [], !0))
        }, is: function (e) {
            return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
    }).prototype = ce.fn, k = ce(C);
    var E = /^(?:parents|prev(?:Until|All))/, j = {children: !0, contents: !0, next: !0, prev: !0};

    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    ce.fn.extend({
        has: function (e) {
            var t = ce(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ce(e);
            if (!b.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return d(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return d(e, "parentNode", n)
        }, next: function (e) {
            return A(e, "nextSibling")
        }, prev: function (e) {
            return A(e, "previousSibling")
        }, nextAll: function (e) {
            return d(e, "nextSibling")
        }, prevAll: function (e) {
            return d(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return d(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return d(e, "previousSibling", n)
        }, siblings: function (e) {
            return h((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return h(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
        }
    }, function (r, i) {
        ce.fn[r] = function (e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    ce.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0
        }), n) : ce.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    ce.each(e, function (e, t) {
                        v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                    })
                }(arguments), t && !i && c()), this
            }, remove: function () {
                return ce.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < ce.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || i || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, ce.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return ce.Deferred(function (r) {
                            ce.each(o, function (e, t) {
                                var n = v(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
                            }
                        }

                        return ce.Deferred(function (e) {
                            o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? ce.extend(e, a) : a
                    }
                }, s = {};
            return ce.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = ae.call(arguments), o = ce.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
            while (t--) L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function (e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, ce.readyException = function (e) {
        ie.setTimeout(function () {
            throw e
        })
    };
    var O = ce.Deferred();

    function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
    }

    ce.fn.ready = function (e) {
        return O.then(e)["catch"](function (e) {
            ce.readyException(e)
        }), this
    }, ce.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
    var M = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(ce(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, R = /^-ms-/, I = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function F(e) {
        return e.replace(R, "ms-").replace(I, W)
    }

    var $ = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function B() {
        this.expando = ce.expando + B.uid++
    }

    B.uid = 1, B.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[F(t)] = n; else for (r in t) i[F(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B, z = new B, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;

    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            z.set(e, t, n)
        } else n = void 0;
        return n
    }

    ce.extend({
        hasData: function (e) {
            return z.hasData(e) || _.hasData(e)
        }, data: function (e, t, n) {
            return z.access(e, t, n)
        }, removeData: function (e, t) {
            z.remove(e, t)
        }, _data: function (e, t, n) {
            return _.access(e, t, n)
        }, _removeData: function (e, t) {
            _.remove(e, t)
        }
    }), ce.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                z.set(this, n)
            }) : M(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function () {
                    z.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                z.remove(this, e)
            })
        }
    }), ce.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ce.queue(e, t), r = n.length, i = n.shift(), o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                ce.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("once memory").add(function () {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }), ce.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ce.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = ce.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function (e) {
            return ce.contains(e.ownerDocument, e)
        }, Z = {composed: !0};
    J.getRootNode && (K = function (e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    });
    var ee = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };

    function te(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return ce.css(e, t, "")
            }, u = s(), l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, ce.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var ne = {};

    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    ce.fn.extend({
        show: function () {
            return re(this, !0)
        }, hide: function () {
            return re(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function Se(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }

    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }

    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;

    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o); else if (je.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o); else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
            c = 0;
            while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
        }
        return f
    }

    var De = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function qe() {
        return !1
    }

    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
            ce.event.add(this, t, i, r, n)
        })
    }

    function He(e, r, t) {
        t ? (_.set(e, r, !1), ce.event.add(e, r, {
            namespace: !1, handler: function (e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation(); else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
                } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }

    ce.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(D) || [""]).length;
                while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ce.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = ce.event.fix(e),
                l = (_.get(this, "events") || Object.create(null))[u.type] || [], c = ce.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: v(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[ce.expando] ? e : new ce.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ce.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ce.Event = function (e, t) {
        if (!(this instanceof ce.Event)) return new ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp), ce.each({focus: "focusin", blur: "focusout"}, function (r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle"), n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
            } else ce.event.simulate(i, e.target, ce.event.fix(e))
        }

        ce.event.special[r] = {
            setup: function () {
                var e;
                if (He(this, r, !0), !C.documentMode) return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
            }, trigger: function () {
                return He(this, r), !0
            }, teardown: function () {
                var e;
                if (!C.documentMode) return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i))
            }, _default: function (e) {
                return _.get(e.target, r)
            }, delegateType: i
        }, ce.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
            }
        }
    }), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        ce.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), ce.fn.extend({
        on: function (e, t, n, r) {
            return Le(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Re(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a))
        }
    }

    function $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
        });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l) : m(u.textContent.replace(Me, ""), u, l))
        }
        return n
    }

    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    ce.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]); else Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
                if (t = n[_.expando]) {
                    if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                    n[_.expando] = void 0
                }
                n[z.expando] && (n[z.expando] = void 0)
            }
        }
    }), ce.fn.extend({
        detach: function (e) {
            return Be(this, e, !0)
        }, remove: function (e) {
            return Be(this, e)
        }, text: function (e) {
            return M(this, function (e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return $e(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
            })
        }, prepend: function () {
            return $e(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return $e(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return $e(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ce.clone(this, e, t)
            })
        }, html: function (e) {
            return M(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return $e(this, arguments, function (e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        ce.fn[e] = function (e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = ie), t.getComputedStyle(e)
    }, Ue = function (e, t, n) {
        var r, i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.call(e), t) e.style[i] = o[i];
        return r
    }, Ve = new RegExp(Q.join("|"), "i");

    function Ge(e, t, n) {
        var r, i, o, a, s = ze.test(t), u = e.style;
        return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ye(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s, u = C.createElement("div"), l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), i
            }, reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};

    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = Qe.length;
            while (n--) if ((e = Qe[n] + t) in Je) return e
        }(e) || e)
    }

    var et = /^(none|table(?!-c[ea]).+)/, tt = {position: "absolute", visibility: "hidden", display: "block"},
        nt = {letterSpacing: "0", fontWeight: "400"};

    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0, l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
    }

    function ot(e, t, n) {
        var r = Xe(e), i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r), o = i,
            a = Ge(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }

    ce.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t), u = ze.test(t), l = e.style;
                if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = F(t);
            return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ce.each(["height", "width"], function (e, u) {
        ce.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () {
                    return ot(e, u, n)
                })
            }, set: function (e, t, n) {
                var r, i = Xe(e), o = !le.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i), s = n ? it(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
            }
        }
    }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ce.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        ce.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }), ce.fn.extend({
        css: function (e, t) {
            return M(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((ce.Tween = at).prototype = {
        constructor: at, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
        }
    }).init.prototype = at.prototype, (at.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, ce.fx = at.prototype.init, ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;

    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
    }

    function ht() {
        return ie.setTimeout(function () {
            st = void 0
        }), st = Date.now()
    }

    function gt(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function yt(o, e, t) {
        var n, a, r = 0, i = yt.prefilters.length, s = ce.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: ce.extend({}, e),
            opts: ce.extend(!0, {specialEasing: {}, easing: ce.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: st || ht(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(D);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && ee(e), v = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], ft.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || ce.style(e, r)
            }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
                for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
            })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), ce.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = ce.isEmptyObject(t), o = ce.speed(e, n, r), a = function () {
                var e = yt(this, ce.extend({}, t), o);
                (i || _.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = ce.timers, r = _.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = _.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = ce.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), ce.each(["toggle", "show", "hide"], function (e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }), ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        ce.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), ce.timers = [], ce.fx.tick = function () {
        var e, t = 0, n = ce.timers;
        for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(), st = void 0
    }, ce.fx.timer = function (e) {
        ce.timers.push(e), ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function () {
        ut || (ut = !0, dt())
    }, ce.fx.stop = function () {
        ut = null
    }, ce.fx.speeds = {slow: 600, fast: 200, _default: 400}, ce.fn.delay = function (r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function () {
                ie.clearTimeout(n)
            }
        })
    }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function (e, t) {
            return M(this, ce.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                ce.removeAttr(this, e)
            })
        }
    }), ce.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(D);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), mt = {
        set: function (e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = xt[t] || ce.find.attr;
        xt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;

    function Tt(e) {
        return (e.match(D) || []).join(" ")
    }

    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }

    ce.fn.extend({
        prop: function (e, t) {
            return M(this, ce.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[ce.propFix[e] || e]
            })
        }
    }), ce.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), le.optSelected || (ce.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ce.propFix[this.toLowerCase()] = this
    }), ce.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function (e) {
                ce(this).addClass(t.call(this, e, Ct(this)))
            }) : (e = kt(t)).length ? this.each(function () {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        }, removeClass: function (t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function (e) {
                ce(this).removeClass(t.call(this, e, Ct(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        }, toggleClass: function (t, n) {
            var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
            return v(t) ? this.each(function (e) {
                ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
                if (s) for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r); else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
            }))
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var St = /\r/g;
    ce.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : Tt(ce.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                        if (t = ce(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = ce.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ce.each(["radio", "checkbox"], function () {
        ce.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        }, le.checkOn || (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = ie.location, jt = {guid: Date.now()}, At = /\?/;
    ce.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function (e) {
        e.stopPropagation()
    };
    ce.extend(ce.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C], d = ue.call(e, "type") ? e.type : e,
                h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = ce.extend(new ce.Event, n, {type: e, isSimulated: !0});
            ce.event.trigger(r, null, t)
        }
    }), ce.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                ce.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ce.event.trigger(e, t, n, !0)
        }
    });
    var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;

    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) ce.each(e, function (e, t) {
            r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== x(e)) i(n, e); else for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
    }

    ce.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) Pt(n, e[n], t, i);
        return r.join("&")
    }, ce.fn.extend({
        serialize: function () {
            return ce.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
            }).map(function (e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) {
                    return {name: t.name, value: e.replace(Lt, "\r\n")}
                }) : {name: t.name, value: n.replace(Lt, "\r\n")}
            }).get()
        }
    });
    var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/,
        $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");

    function Ut(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(D) || [];
            if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Vt(t, i, o, a) {
        var s = {}, u = t === _t;

        function l(e) {
            var r;
            return s[e] = !0, ce.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Gt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r), e
    }

    Xt.href = Et.href, ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ce.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(Bt),
        ajaxTransport: Ut(_t),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t), y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event, x = ce.Deferred(),
                b = ce.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {
                }), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }), ce.each(["get", "post"], function (e, i) {
        ce[i] = function (e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }), ce.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), ce._evalUrl = function (e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                ce.globalEval(e, t, n)
            }
        })
    }, ce.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return v(n) ? this.each(function (e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = ce(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = v(t);
            return this.each(function (e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), ce.expr.pseudos.hidden = function (e) {
        return !ce.expr.pseudos.visible(e)
    }, ce.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ce.ajaxSettings.xhr = function () {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {
        }
    };
    var Yt = {0: 200, 1223: 204}, Qt = ce.ajaxSettings.xhr();
    le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
        var o, a;
        if (le.cors || Qt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && ie.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), ce.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), ce.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return ce.globalEval(e), e
            }
        }
    }), ce.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ce.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return this[e] = !0, e
        }
    }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
        }), "script"
    }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
        var r, i, o
    }, ce.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ce.expr.pseudos.animated = function (t) {
        return ce.grep(ce.timers, function (e) {
            return t === e.elem
        }).length
    }, ce.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = ce.css(e, "position"), c = ce(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, ce.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                ce.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                return e || J
            })
        }
    }), ce.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
            return M(this, function (e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), ce.each(["top", "left"], function (e, n) {
        ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
            if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t
        })
    }), ce.each({Height: "height", Width: "width"}, function (a, s) {
        ce.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            ce.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return M(this, function (e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ce.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ce.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        ce.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid = e.guid || ce.guid++, i
    }, ce.holdReady = function (e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, ce.trim = function (e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ce
    });
    var tn = ie.jQuery, nn = ie.$;
    return ce.noConflict = function (e) {
        return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
    }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
jQuery.noConflict();
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function (s, n) {
    "use strict";

    function e(e) {
        return 0 <= function (e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                if (+o[a] < +n[a]) return 1;
                if (+n[a] < +o[a]) return -1
            }
            return 0
        }(s.fn.jquery, e)
    }

    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    s.migrateDisablePatches = function () {
        for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
    }, s.migrateEnablePatches = function () {
        for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
    }, s.migrateIsPatchEnabled = function (e) {
        return !t[e]
    }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var o = {};

    function u(e, t) {
        var r = n.console;
        !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
    }

    function r(e, t, r, n, o) {
        Object.defineProperty(e, t, {
            configurable: !0, enumerable: !0, get: function () {
                return u(n, o), r
            }, set: function (e) {
                u(n, o), r = e
            }
        })
    }

    function a(e, t, r, n, o) {
        var a = e[t];
        e[t] = function () {
            return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        }
    }

    function c(e, t, r, n, o) {
        if (!o) throw new Error("No warning message provided");
        return a(e, t, r, n, o), 0
    }

    function i(e, t, r, n) {
        return a(e, t, r, n), 0
    }

    s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
        o = {}, s.migrateWarnings.length = 0
    }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
    var d, l, p, f = {}, m = s.fn.init, y = s.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
        v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in i(s.fn, "init", function (e) {
        var t = Array.prototype.slice.call(arguments);
        return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
    }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t)) try {
            n.document.querySelector(t)
        } catch (e) {
            t = t.replace(g, function (e, t, r, n) {
                return "[" + t + r + '"' + n + '"]'
            });
            try {
                n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
            } catch (e) {
                u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
            }
        }
        return y.apply(this, r)
    }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(s.fn, "size", function () {
        return this.length
    }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function () {
        return JSON.parse.apply(null, arguments)
    }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function (e) {
        return null == e ? "" : (e + "").replace(v, "$1")
    }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function (e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }), c(s, "type", function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function (e) {
        return "function" == typeof e
    }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function (e) {
        return null != e && e === e.window
    }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function () {
        var e = l.apply(this, arguments);
        return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
    }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
        !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
    }));
    var j = s.fn.removeAttr, b = s.fn.toggleClass, w = /\S+/g;

    function x(e) {
        return e.replace(/-([a-z])/g, function (e, t) {
            return t.toUpperCase()
        })
    }

    i(s.fn, "removeAttr", function (e) {
        var r = this, n = !1;
        return s.each(e.match(w), function (e, t) {
            s.expr.match.bool.test(t) && r.each(function () {
                if (!1 !== s(this).prop(t)) return !(n = !0)
            }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
        }), j.apply(this, arguments)
    }, "removeAttr-bool"), i(s.fn, "toggleClass", function (t) {
        return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }, "toggleClass-bool");
    var Q, A, R = !1, C = /^[a-z]/,
        N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function () {
            var e;
            return R = !0, e = r.apply(this, arguments), R = !1, e
        })
    }), i(s, "swap", function (e, t, r, n) {
        var o, a, i = {};
        for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
        for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
        return o
    }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
        set: function () {
            return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
        }
    })), e("4.0.0") ? (A = {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
        get: function () {
            return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
        }, set: function () {
            return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
        }
    }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function (e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function (e, t) {
            s.fn.css.call(o, e, t)
        }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
    }, "css-number");
    var S, P, k, H, E = s.data;
    i(s, "data", function (e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
            return E.call(this, e, o), t
        }
        return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments)
    }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function (e) {
        return e
    }, i(s.Tween.prototype, "run", function () {
        1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments)
    }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
        },
        set: function (e) {
            u("fx-interval", P), S = e
        }
    }));
    var M = s.fn.load, q = s.event.add, O = s.event.fix;
    s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function (e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length) s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length)) while (o.length) s.event.addProp(o.pop());
        return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t
    }, "event-old-patch"), i(s.event, "add", function (e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments)
    }, "load-after-event"), s.each(["load", "unload", "error"], function (e, t) {
        i(s.fn, t, function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
        }, "shorthand-removed-v3")
    }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
        c(s.fn, r, function (e, t) {
            return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
    }), s(function () {
        s(n.document).triggerHandler("ready")
    }), s.event.special.ready = {
        setup: function () {
            this === n.document && u("ready-event", "'ready' event is deprecated")
        }
    }, c(s.fn, "bind", function (e, t, r) {
        return this.on(e, null, t, r)
    }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function (e, t) {
        return this.off(e, null, t)
    }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function (e, t, r, n) {
        return this.on(t, e, r, n)
    }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function (e, t, r) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }, "pre-on-methods", "jQuery.fn.hover() is deprecated");

    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e, t.body && t.body.innerHTML
    }

    var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
        s.migrateEnablePatches("self-closed-tags")
    }, i(s, "htmlPrefilter", function (e) {
        var t, r;
        return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>")
    }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
    var D, W, _, I = s.fn.offset;
    return i(s.fn, "offset", function () {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
    }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function (e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
    }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]], i(s, "Deferred", function (e) {
        var a = W(), i = a.promise();

        function t() {
            var o = arguments;
            return s.Deferred(function (n) {
                s.each(_, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                    })
                }), o = null
            }).promise()
        }

        return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
    }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s
});
!function () {
    "use strict";

    function Waypoint(options) {
        if (!options) throw new Error("No options passed to Waypoint constructor");
        if (!options.element) throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
    }

    var keyCounter = 0, allWaypoints = {};
    Waypoint.prototype.queueTrigger = function (direction) {
        this.group.queueTrigger(this, direction)
    }, Waypoint.prototype.trigger = function (args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }, Waypoint.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
    }, Waypoint.prototype.disable = function () {
        return this.enabled = !1, this
    }, Waypoint.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, Waypoint.prototype.next = function () {
        return this.group.next(this)
    }, Waypoint.prototype.previous = function () {
        return this.group.previous(this)
    }, Waypoint.invokeAll = function (method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
    }, Waypoint.destroyAll = function () {
        Waypoint.invokeAll("destroy")
    }, Waypoint.disableAll = function () {
        Waypoint.invokeAll("disable")
    }, Waypoint.enableAll = function () {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
        return this
    }, Waypoint.refreshAll = function () {
        Waypoint.Context.refreshAll()
    }, Waypoint.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, Waypoint.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, Waypoint.adapters = [], Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, Waypoint.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = Waypoint
}(), function () {
    "use strict";

    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }

    function Context(element) {
        this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var keyCounter = 0, contexts = {}, Waypoint = window.Waypoint, oldWindowLoad = window.onload;
    Context.prototype.add = function (waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
    }, Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
            isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
    }, Context.prototype.createThrottledResizeHandler = function () {
        function resizeHandler() {
            self.handleResize(), self.didResize = !1
        }

        var self = this;
        this.adapter.on("resize.waypoints", function () {
            self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
        })
    }, Context.prototype.createThrottledScrollHandler = function () {
        function scrollHandler() {
            self.handleScroll(), self.didScroll = !1
        }

        var self = this;
        this.adapter.on("scroll.waypoints", function () {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
        })
    }, Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll()
    }, Context.prototype.handleScroll = function () {
        var triggeredGroups = {}, axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey], isForward = axis.newScroll > axis.oldScroll,
                direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
                        nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                        crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                        crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {x: axes.horizontal.newScroll, y: axes.vertical.newScroll}
    }, Context.prototype.innerHeight = function () {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }, Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
    }, Context.prototype.innerWidth = function () {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }, Context.prototype.destroy = function () {
        var allWaypoints = [];
        for (var axis in this.waypoints) for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
    }, Context.prototype.refresh = function () {
        var axes, isWindow = this.element == this.element.window,
            contextOffset = isWindow ? void 0 : this.adapter.offset(), triggeredGroups = {};
        this.handleScroll(), axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward,
                    waypoint = this.waypoints[axisKey][waypointKey], adjustment = waypoint.options.offset,
                    oldTriggerPoint = waypoint.triggerPoint, elementOffset = 0, freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
        }), this
    }, Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element)
    }, Context.refreshAll = function () {
        for (var contextId in contexts) contexts[contextId].refresh()
    }, Context.findByElement = function (element) {
        return contexts[element.waypointContextKey]
    }, window.onload = function () {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll()
    }, Waypoint.requestAnimationFrame = function (callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }, Waypoint.Context = Context
}(), function () {
    "use strict";

    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    function Group(options) {
        this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
    }

    var groups = {vertical: {}, horizontal: {}}, Waypoint = window.Waypoint;
    Group.prototype.add = function (waypoint) {
        this.waypoints.push(waypoint)
    }, Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction], reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }, Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints), isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }, Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }, Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }, Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }, Group.prototype.first = function () {
        return this.waypoints[0]
    }, Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options)
    }, Waypoint.Group = Group
}(), function () {
    "use strict";

    function JQueryAdapter(element) {
        this.$element = $(element)
    }

    var $ = window.jQuery, Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (i, method) {
        JQueryAdapter.prototype[method] = function () {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }), $.each(["extend", "inArray", "isEmptyObject"], function (i, method) {
        JQueryAdapter[method] = $[method]
    }), Waypoint.adapters.push({name: "jquery", Adapter: JQueryAdapter}), Waypoint.Adapter = JQueryAdapter
}(), function () {
    "use strict";

    function createExtension(framework) {
        return function () {
            var waypoints = [], overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function () {
                var options = framework.extend({}, overrides, {element: this});
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
            }), waypoints
        }
    }

    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
/*! preloader-plus 01-04-2018 */

jQuery(function ($) {
    var perfData = window.performance.timing, EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = 100 * parseInt(EstimatedTime / 1e3 % 60), preloader = document.querySelector(".preloader-plus");
    $("body").prepend(preloader);
    var progBar = document.querySelector(".prog-bar"), duration = time,
        counter = document.getElementById("preloader-counter");
    !function (element, start, end, duration) {
        var range = end - start, current = start, increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)), obj = element, timer = setInterval(function () {
                if (current < end && (current += increment), null !== obj && (obj.style["transition-duration"] = "0.001s", obj.style.width = current + "%"), null !== counter && (counter.innerHTML = current + "%"), current == end && perfData.loadEventEnd > 0 || perfData.loadEventEnd > 0) {
                    var endLoading = setInterval(function () {
                        current += increment, null !== obj && (obj.style.width = current + "%"), null !== counter && (counter.innerHTML = current + "%"), 100 == current && (setTimeout(function () {
                            $("body, .preloader-plus").addClass("complete")
                        }, preloader_plus.animation_delay), clearInterval(endLoading))
                    }, 1);
                    clearInterval(timer)
                }
            }, stepTime)
    }(progBar, 0, 70, duration)
});
jQuery(window).on('load', function () {

    jQuery('#wpcustom-plugin-preloader').delay(250).fadeOut("slow");

    setTimeout(wpcustom_plugin_remove_preloader, 2000);

    function wpcustom_plugin_remove_preloader() {
        jQuery('#wpcustom-plugin-preloader').remove();
    }

});
/*!

 * Name    : Just Another Parallax [Jarallax]

 * Version : 1.9.3

 * Author  : nK <https://nkdev.info>

 * GitHub  : https://github.com/nk-o/jarallax

 */

!function () {
    "use strict";

    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, t, i) {
        e.addEventListener(t, i)
    }

    function i(e) {
        p = window.innerWidth || document.documentElement.clientWidth, d = window.innerHeight || document.documentElement.clientHeight, "object" !== ("undefined" == typeof e ? "undefined" : a(e)) || "load" !== e.type && "DOMContentLoaded" !== e.type || (f = !0)
    }

    function n() {
        if (g.length) {
            u = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var e = f || !y || y.width !== p || y.height !== d, t = e || !y || y.y !== u;
            f = !1, (e || t) && (g.forEach(function (i) {
                e && i.onResize(), t && i.onScroll()
            }), y = {width: p, height: d, y: u}), m(n)
        }
    }

    var o = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(), a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r = function () {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), i = 0; i < e.length; i++) if (t && void 0 !== t.style[e[i]]) return e[i];
            return !1
        }(), l = navigator.userAgent, s = l.toLowerCase().indexOf("android") > -1,
        c = /iPad|iPhone|iPod/.test(l) && !window.MSStream,
        m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        }, p = void 0, d = void 0, u = void 0, f = !1;
    i(), t(window, "resize", i), t(window, "orientationchange", i), t(window, "load", i), t(window, "DOMContentLoaded", i);
    var g = [], y = !1, h = 0, v = function () {
        function t(i, n) {
            e(this, t);
            var o = this;
            o.instanceID = h++, o.$item = i, o.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                noAndroid: !1,
                noIos: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoPlayOnlyVisible: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            var r = o.$item.getAttribute("data-jarallax"), l = JSON.parse(r || "{}");
            r && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
            var m = o.$item.dataset || {}, p = {};
            Object.keys(m).forEach(function (e) {
                var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                t && "undefined" != typeof o.defaults[t] && (p[t] = m[e])
            }), o.options = o.extend({}, o.defaults, l, p, n), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function (e) {
                "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
            }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
            var d = o.options.elementInViewport;
            d && "object" === ("undefined" == typeof d ? "undefined" : a(d)) && "undefined" != typeof d.length && (d = d[0]), d instanceof Element || (d = null), o.options.elementInViewport = d, o.image = {
                src: o.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: s || c ? "absolute" : "fixed"
            }, o.initImg() && o.canInitParallax() && o.init()
        }

        return o(t, [{
            key: "css", value: function (e, t) {
                return "string" == typeof t ? window.getComputedStyle(e).getPropertyValue(t) : (t.transform && r && (t[r] = t.transform), Object.keys(t).forEach(function (i) {
                    e.style[i] = t[i]
                }), e)
            }
        }, {
            key: "extend", value: function (e) {
                var t = arguments;
                return e = e || {}, Object.keys(arguments).forEach(function (i) {
                    t[i] && Object.keys(t[i]).forEach(function (n) {
                        e[n] = t[i][n]
                    })
                }), e
            }
        }, {
            key: "getWindowData", value: function () {
                return {width: p, height: d, y: u}
            }
        }, {
            key: "initImg", value: function () {
                var e = this, t = e.options.imgElement;
                return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src))
            }
        }, {
            key: "canInitParallax", value: function () {
                return r && !(s && this.options.noAndroid) && !(c && this.options.noIos)
            }
        }, {
            key: "init", value: function () {
                var e = this, t = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none"
                }, i = {};
                if (!e.options.keepImg) {
                    var n = e.$item.getAttribute("style");
                    if (n && e.$item.setAttribute("data-jarallax-original-styles", n), e.image.useImgTag) {
                        var o = e.image.$item.getAttribute("style");
                        o && e.image.$item.setAttribute("data-jarallax-original-styles", o)
                    }
                }
                if ("static" === e.css(e.$item, "position") && e.css(e.$item, {position: "relative"}), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {zIndex: 0}), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {"z-index": e.options.zIndex}), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? i = e.extend({
                    "object-fit": e.options.imgSize,
                    "object-position": e.options.imgPosition,
                    "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                    "max-width": "none"
                }, t, i) : (e.image.$item = document.createElement("div"), i = e.extend({
                    "background-position": e.options.imgPosition,
                    "background-size": e.options.imgSize,
                    "background-repeat": e.options.imgRepeat,
                    "background-image": 'url("' + e.image.src + '")'
                }, t, i)), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
                    var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
                    l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode
                }
                i.position = e.image.position, e.css(e.image.$item, i), e.image.$container.appendChild(e.image.$item), e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {"background-image": "none"}), e.addToParallaxList()
            }
        }, {
            key: "addToParallaxList", value: function () {
                g.push(this), 1 === g.length && n()
            }
        }, {
            key: "removeFromParallaxList", value: function () {
                var e = this;
                g.forEach(function (t, i) {
                    t.instanceID === e.instanceID && g.splice(i, 1)
                })
            }
        }, {
            key: "destroy", value: function () {
                var e = this;
                e.removeFromParallaxList();
                var t = e.$item.getAttribute("data-jarallax-original-styles");
                if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                    var i = e.image.$item.getAttribute("data-jarallax-original-styles");
                    e.image.$item.removeAttribute("data-jarallax-original-styles"), i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                }
                e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
            }
        }, {
            key: "clipContainer", value: function () {
                if ("fixed" === this.image.position) {
                    var e = this, t = e.image.$container.getBoundingClientRect(), i = t.width, n = t.height;
                    if (!e.$clipStyles) {
                        e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID);
                        var o = document.head || document.getElementsByTagName("head")[0];
                        o.appendChild(e.$clipStyles)
                    }
                    var a = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + i + "px " + n + "px 0);\n           clip: rect(0, " + i + "px, " + n + "px, 0);\n        }";
                    e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a
                }
            }
        }, {
            key: "coverImage", value: function () {
                var e = this, t = e.image.$container.getBoundingClientRect(), i = t.height, n = e.options.speed,
                    o = "scroll" === e.options.type || "scroll-opacity" === e.options.type, a = 0, r = i, l = 0;
                return o && (a = n < 0 ? n * Math.max(i, d) : n * (i + d), n > 1 ? r = Math.abs(a - d) : n < 0 ? r = a / n + Math.abs(a) : r += Math.abs(d - i) * (1 - n), a /= 2), e.parallaxScrollDistance = a, l = o ? (d - r) / 2 : (i - r) / 2, e.css(e.image.$item, {
                    height: r + "px",
                    marginTop: l + "px",
                    left: "fixed" === e.image.position ? t.left + "px" : "0",
                    width: t.width + "px"
                }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                    image: {height: r, marginTop: l},
                    container: t
                }
            }
        }, {
            key: "isVisible", value: function () {
                return this.isElementInViewport || !1
            }
        }, {
            key: "onScroll", value: function (e) {
                var t = this, i = t.$item.getBoundingClientRect(), n = i.top, o = i.height, a = {}, r = i;
                if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = r.bottom >= 0 && r.right >= 0 && r.top <= d && r.left <= p, e || t.isElementInViewport) {
                    var l = Math.max(0, n), s = Math.max(0, o + n), c = Math.max(0, -n), m = Math.max(0, n + o - d),
                        u = Math.max(0, o - (n + o - d)), f = Math.max(0, -n + d - o), g = 1 - 2 * (d - n) / (d + o),
                        y = 1;
                    if (o < d ? y = 1 - (c || m) / o : s <= d ? y = s / d : u <= d && (y = u / d), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = y), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                        var h = 1;
                        t.options.speed < 0 ? h -= t.options.speed * y : h += t.options.speed * (1 - y), a.transform = "scale(" + h + ") translate3d(0,0,0)"
                    }
                    if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                        var v = t.parallaxScrollDistance * g;
                        "absolute" === t.image.position && (v -= n), a.transform = "translate3d(0," + v + "px,0)"
                    }
                    t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
                        section: i,
                        beforeTop: l,
                        beforeTopEnd: s,
                        afterTop: c,
                        beforeBottom: m,
                        beforeBottomEnd: u,
                        afterBottom: f,
                        visiblePercent: y,
                        fromViewportCenter: g
                    })
                }
            }
        }, {
            key: "onResize", value: function () {
                this.coverImage(), this.clipContainer()
            }
        }]), t
    }(), b = function (e) {
        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : a(HTMLElement)) ? e instanceof HTMLElement : e && "object" === ("undefined" == typeof e ? "undefined" : a(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        var t = arguments[1], i = Array.prototype.slice.call(arguments, 2), n = e.length, o = 0, r = void 0;
        for (o; o < n; o++) if ("object" === ("undefined" == typeof t ? "undefined" : a(t)) || "undefined" == typeof t ? e[o].jarallax || (e[o].jarallax = new v(e[o], t)) : e[o].jarallax && (r = e[o].jarallax[t].apply(e[o].jarallax, i)), "undefined" != typeof r) return r;
        return e
    };
    b.constructor = v;
    var x = window.jarallax;
    if (window.jarallax = b, window.jarallax.noConflict = function () {
        return window.jarallax = x, this
    }, "undefined" != typeof jQuery) {
        var w = function () {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = b.apply(window, e);
            return "object" !== ("undefined" == typeof t ? "undefined" : a(t)) ? t : this
        };
        w.constructor = v;
        var $ = jQuery.fn.jarallax;
        jQuery.fn.jarallax = w, jQuery.fn.jarallax.noConflict = function () {
            return jQuery.fn.jarallax = $, this
        }
    }
    t(window, "DOMContentLoaded", function () {
        b(document.querySelectorAll("[data-jarallax]"))
    })
}();
(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.waypoint = function ($element, callback, options) {
            if ($element.length <= 0) return;
            const defaultOptions = {
                offset: '100%',
                triggerOnce: true
            };
            options = jQuery.extend(defaultOptions, options);
            const correctCallback = function () {
                const element = this.element || this,
                    result = callback.apply(element, arguments);

                // If is Waypoint new API and is frontend
                if (options.triggerOnce && this.destroy) {
                    this.destroy();
                }
                return result;
            };

            return $element.elementorWaypoint(correctCallback, options);
        }
    });

}(jQuery));
/*! This file is auto-generated */
(() => {
    "use strict";
    var t = {
        d: (e, n) => {
            for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: n[r]})
        }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e), r: t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }
    }, e = {};
    t.r(e), t.d(e, {
        actions: () => P,
        addAction: () => A,
        addFilter: () => m,
        applyFilters: () => w,
        applyFiltersAsync: () => I,
        createHooks: () => h,
        currentAction: () => x,
        currentFilter: () => T,
        defaultHooks: () => f,
        didAction: () => j,
        didFilter: () => z,
        doAction: () => g,
        doActionAsync: () => k,
        doingAction: () => O,
        doingFilter: () => S,
        filters: () => Z,
        hasAction: () => _,
        hasFilter: () => v,
        removeAction: () => p,
        removeAllActions: () => F,
        removeAllFilters: () => b,
        removeFilter: () => y
    });
    const n = function (t) {
        return "string" != typeof t || "" === t ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
    };
    const r = function (t) {
        return "string" != typeof t || "" === t ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(t) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
    };
    const o = function (t, e) {
        return function (o, i, s, c = 10) {
            const l = t[e];
            if (!r(o)) return;
            if (!n(i)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof c) return void console.error("If specified, the hook priority must be a number.");
            const a = {callback: s, priority: c, namespace: i};
            if (l[o]) {
                const t = l[o].handlers;
                let e;
                for (e = t.length; e > 0 && !(c >= t[e - 1].priority); e--) ;
                e === t.length ? t[e] = a : t.splice(e, 0, a), l.__current.forEach((t => {
                    t.name === o && t.currentIndex >= e && t.currentIndex++
                }))
            } else l[o] = {handlers: [a], runs: 0};
            "hookAdded" !== o && t.doAction("hookAdded", o, i, s, c)
        }
    };
    const i = function (t, e, o = !1) {
        return function (i, s) {
            const c = t[e];
            if (!r(i)) return;
            if (!o && !n(s)) return;
            if (!c[i]) return 0;
            let l = 0;
            if (o) l = c[i].handlers.length, c[i] = {runs: c[i].runs, handlers: []}; else {
                const t = c[i].handlers;
                for (let e = t.length - 1; e >= 0; e--) t[e].namespace === s && (t.splice(e, 1), l++, c.__current.forEach((t => {
                    t.name === i && t.currentIndex >= e && t.currentIndex--
                })))
            }
            return "hookRemoved" !== i && t.doAction("hookRemoved", i, s), l
        }
    };
    const s = function (t, e) {
        return function (n, r) {
            const o = t[e];
            return void 0 !== r ? n in o && o[n].handlers.some((t => t.namespace === r)) : n in o
        }
    };
    const c = function (t, e, n, r) {
        return function (o, ...i) {
            const s = t[e];
            s[o] || (s[o] = {handlers: [], runs: 0}), s[o].runs++;
            const c = s[o].handlers;
            if (!c || !c.length) return n ? i[0] : void 0;
            const l = {name: o, currentIndex: 0};
            return (r ? async function () {
                try {
                    s.__current.add(l);
                    let t = n ? i[0] : void 0;
                    for (; l.currentIndex < c.length;) {
                        const e = c[l.currentIndex];
                        t = await e.callback.apply(null, i), n && (i[0] = t), l.currentIndex++
                    }
                    return n ? t : void 0
                } finally {
                    s.__current.delete(l)
                }
            } : function () {
                try {
                    s.__current.add(l);
                    let t = n ? i[0] : void 0;
                    for (; l.currentIndex < c.length;) {
                        t = c[l.currentIndex].callback.apply(null, i), n && (i[0] = t), l.currentIndex++
                    }
                    return n ? t : void 0
                } finally {
                    s.__current.delete(l)
                }
            })()
        }
    };
    const l = function (t, e) {
        return function () {
            var n;
            const r = t[e], o = Array.from(r.__current);
            return null !== (n = o.at(-1)?.name) && void 0 !== n ? n : null
        }
    };
    const a = function (t, e) {
        return function (n) {
            const r = t[e];
            return void 0 === n ? r.__current.size > 0 : Array.from(r.__current).some((t => t.name === n))
        }
    };
    const u = function (t, e) {
        return function (n) {
            const o = t[e];
            if (r(n)) return o[n] && o[n].runs ? o[n].runs : 0
        }
    };

    class d {
        constructor() {
            this.actions = Object.create(null), this.actions.__current = new Set, this.filters = Object.create(null), this.filters.__current = new Set, this.addAction = o(this, "actions"), this.addFilter = o(this, "filters"), this.removeAction = i(this, "actions"), this.removeFilter = i(this, "filters"), this.hasAction = s(this, "actions"), this.hasFilter = s(this, "filters"), this.removeAllActions = i(this, "actions", !0), this.removeAllFilters = i(this, "filters", !0), this.doAction = c(this, "actions", !1, !1), this.doActionAsync = c(this, "actions", !1, !0), this.applyFilters = c(this, "filters", !0, !1), this.applyFiltersAsync = c(this, "filters", !0, !0), this.currentAction = l(this, "actions"), this.currentFilter = l(this, "filters"), this.doingAction = a(this, "actions"), this.doingFilter = a(this, "filters"), this.didAction = u(this, "actions"), this.didFilter = u(this, "filters")
        }
    }

    const h = function () {
        return new d
    }, f = h(), {
        addAction: A,
        addFilter: m,
        removeAction: p,
        removeFilter: y,
        hasAction: _,
        hasFilter: v,
        removeAllActions: F,
        removeAllFilters: b,
        doAction: g,
        doActionAsync: k,
        applyFilters: w,
        applyFiltersAsync: I,
        currentAction: x,
        currentFilter: T,
        doingAction: O,
        doingFilter: S,
        didAction: j,
        didFilter: z,
        actions: P,
        filters: Z
    } = f;
    (window.wp = window.wp || {}).hooks = e
})();
/*! This file is auto-generated */
(() => {
    var t = {
        2058: (t, e, r) => {
            var n;
            !function () {
                "use strict";
                var i = {
                    not_string: /[^s]/,
                    not_bool: /[^t]/,
                    not_type: /[^T]/,
                    not_primitive: /[^v]/,
                    number: /[diefg]/,
                    numeric_arg: /[bcdiefguxX]/,
                    json: /[j]/,
                    not_json: /[^j]/,
                    text: /^[^\x25]+/,
                    modulo: /^\x25{2}/,
                    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                    key: /^([a-z_][a-z_\d]*)/i,
                    key_access: /^\.([a-z_][a-z_\d]*)/i,
                    index_access: /^\[(\d+)\]/,
                    sign: /^[+-]/
                };

                function a(t) {
                    return function (t, e) {
                        var r, n, o, s, l, u, p, c, f, d = 1, h = t.length, g = "";
                        for (n = 0; n < h; n++) if ("string" == typeof t[n]) g += t[n]; else if ("object" == typeof t[n]) {
                            if ((s = t[n]).keys) for (r = e[d], o = 0; o < s.keys.length; o++) {
                                if (null == r) throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', s.keys[o], s.keys[o - 1]));
                                r = r[s.keys[o]]
                            } else r = s.param_no ? e[s.param_no] : e[d++];
                            if (i.not_type.test(s.type) && i.not_primitive.test(s.type) && r instanceof Function && (r = r()), i.numeric_arg.test(s.type) && "number" != typeof r && isNaN(r)) throw new TypeError(a("[sprintf] expecting number but found %T", r));
                            switch (i.number.test(s.type) && (c = r >= 0), s.type) {
                                case"b":
                                    r = parseInt(r, 10).toString(2);
                                    break;
                                case"c":
                                    r = String.fromCharCode(parseInt(r, 10));
                                    break;
                                case"d":
                                case"i":
                                    r = parseInt(r, 10);
                                    break;
                                case"j":
                                    r = JSON.stringify(r, null, s.width ? parseInt(s.width) : 0);
                                    break;
                                case"e":
                                    r = s.precision ? parseFloat(r).toExponential(s.precision) : parseFloat(r).toExponential();
                                    break;
                                case"f":
                                    r = s.precision ? parseFloat(r).toFixed(s.precision) : parseFloat(r);
                                    break;
                                case"g":
                                    r = s.precision ? String(Number(r.toPrecision(s.precision))) : parseFloat(r);
                                    break;
                                case"o":
                                    r = (parseInt(r, 10) >>> 0).toString(8);
                                    break;
                                case"s":
                                    r = String(r), r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case"t":
                                    r = String(!!r), r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case"T":
                                    r = Object.prototype.toString.call(r).slice(8, -1).toLowerCase(), r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case"u":
                                    r = parseInt(r, 10) >>> 0;
                                    break;
                                case"v":
                                    r = r.valueOf(), r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case"x":
                                    r = (parseInt(r, 10) >>> 0).toString(16);
                                    break;
                                case"X":
                                    r = (parseInt(r, 10) >>> 0).toString(16).toUpperCase()
                            }
                            i.json.test(s.type) ? g += r : (!i.number.test(s.type) || c && !s.sign ? f = "" : (f = c ? "+" : "-", r = r.toString().replace(i.sign, "")), u = s.pad_char ? "0" === s.pad_char ? "0" : s.pad_char.charAt(1) : " ", p = s.width - (f + r).length, l = s.width && p > 0 ? u.repeat(p) : "", g += s.align ? f + r + l : "0" === u ? f + l + r : l + f + r)
                        }
                        return g
                    }(function (t) {
                        if (s[t]) return s[t];
                        var e, r = t, n = [], a = 0;
                        for (; r;) {
                            if (null !== (e = i.text.exec(r))) n.push(e[0]); else if (null !== (e = i.modulo.exec(r))) n.push("%"); else {
                                if (null === (e = i.placeholder.exec(r))) throw new SyntaxError("[sprintf] unexpected placeholder");
                                if (e[2]) {
                                    a |= 1;
                                    var o = [], l = e[2], u = [];
                                    if (null === (u = i.key.exec(l))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                    for (o.push(u[1]); "" !== (l = l.substring(u[0].length));) if (null !== (u = i.key_access.exec(l))) o.push(u[1]); else {
                                        if (null === (u = i.index_access.exec(l))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                        o.push(u[1])
                                    }
                                    e[2] = o
                                } else a |= 2;
                                if (3 === a) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                                n.push({
                                    placeholder: e[0],
                                    param_no: e[1],
                                    keys: e[2],
                                    sign: e[3],
                                    pad_char: e[4],
                                    align: e[5],
                                    width: e[6],
                                    precision: e[7],
                                    type: e[8]
                                })
                            }
                            r = r.substring(e[0].length)
                        }
                        return s[t] = n
                    }(t), arguments)
                }

                function o(t, e) {
                    return a.apply(null, [t].concat(e || []))
                }

                var s = Object.create(null);
                e.sprintf = a, e.vsprintf = o, "undefined" != typeof window && (window.sprintf = a, window.vsprintf = o, void 0 === (n = function () {
                    return {sprintf: a, vsprintf: o}
                }.call(e, r, e, t)) || (t.exports = n))
            }()
        }
    }, e = {};

    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var a = e[n] = {exports: {}};
        return t[n](a, a.exports, r), a.exports
    }

    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {a: e}), e
    }, r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
    }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    };
    var n = {};
    (() => {
        "use strict";
        r.r(n), r.d(n, {
            __: () => F,
            _n: () => j,
            _nx: () => L,
            _x: () => S,
            createI18n: () => x,
            defaultI18n: () => _,
            getLocaleData: () => v,
            hasTranslation: () => D,
            isRTL: () => T,
            resetLocaleData: () => w,
            setLocaleData: () => m,
            sprintf: () => a,
            subscribe: () => k
        });
        var t = r(2058), e = r.n(t);
        const i = function (t, e) {
            var r, n, i = 0;

            function a() {
                var a, o, s = r, l = arguments.length;
                t:for (; s;) {
                    if (s.args.length === arguments.length) {
                        for (o = 0; o < l; o++) if (s.args[o] !== arguments[o]) {
                            s = s.next;
                            continue t
                        }
                        return s !== r && (s === n && (n = s.prev), s.prev.next = s.next, s.next && (s.next.prev = s.prev), s.next = r, s.prev = null, r.prev = s, r = s), s.val
                    }
                    s = s.next
                }
                for (a = new Array(l), o = 0; o < l; o++) a[o] = arguments[o];
                return s = {
                    args: a,
                    val: t.apply(null, a)
                }, r ? (r.prev = s, s.next = r) : n = s, i === e.maxSize ? (n = n.prev).next = null : i++, r = s, s.val
            }

            return e = e || {}, a.clear = function () {
                r = null, n = null, i = 0
            }, a
        }(console.error);

        function a(t, ...r) {
            try {
                return e().sprintf(t, ...r)
            } catch (e) {
                return e instanceof Error && i("sprintf error: \n\n" + e.toString()), t
            }
        }

        var o, s, l, u;
        o = {
            "(": 9,
            "!": 8,
            "*": 7,
            "/": 7,
            "%": 7,
            "+": 6,
            "-": 6,
            "<": 5,
            "<=": 5,
            ">": 5,
            ">=": 5,
            "==": 4,
            "!=": 4,
            "&&": 3,
            "||": 2,
            "?": 1,
            "?:": 1
        }, s = ["(", "?"], l = {
            ")": ["("],
            ":": ["?", "?:"]
        }, u = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
        var p = {
            "!": function (t) {
                return !t
            }, "*": function (t, e) {
                return t * e
            }, "/": function (t, e) {
                return t / e
            }, "%": function (t, e) {
                return t % e
            }, "+": function (t, e) {
                return t + e
            }, "-": function (t, e) {
                return t - e
            }, "<": function (t, e) {
                return t < e
            }, "<=": function (t, e) {
                return t <= e
            }, ">": function (t, e) {
                return t > e
            }, ">=": function (t, e) {
                return t >= e
            }, "==": function (t, e) {
                return t === e
            }, "!=": function (t, e) {
                return t !== e
            }, "&&": function (t, e) {
                return t && e
            }, "||": function (t, e) {
                return t || e
            }, "?:": function (t, e, r) {
                if (t) throw e;
                return r
            }
        };

        function c(t) {
            var e = function (t) {
                for (var e, r, n, i, a = [], p = []; e = t.match(u);) {
                    for (r = e[0], (n = t.substr(0, e.index).trim()) && a.push(n); i = p.pop();) {
                        if (l[r]) {
                            if (l[r][0] === i) {
                                r = l[r][1] || r;
                                break
                            }
                        } else if (s.indexOf(i) >= 0 || o[i] < o[r]) {
                            p.push(i);
                            break
                        }
                        a.push(i)
                    }
                    l[r] || p.push(r), t = t.substr(e.index + r.length)
                }
                return (t = t.trim()) && a.push(t), a.concat(p.reverse())
            }(t);
            return function (t) {
                return function (t, e) {
                    var r, n, i, a, o, s, l = [];
                    for (r = 0; r < t.length; r++) {
                        if (o = t[r], a = p[o]) {
                            for (n = a.length, i = Array(n); n--;) i[n] = l.pop();
                            try {
                                s = a.apply(null, i)
                            } catch (t) {
                                return t
                            }
                        } else s = e.hasOwnProperty(o) ? e[o] : +o;
                        l.push(s)
                    }
                    return l[0]
                }(e, t)
            }
        }

        var f = {contextDelimiter: "", onMissingKey: null};

        function d(t, e) {
            var r;
            for (r in this.data = t, this.pluralForms = {}, this.options = {}, f) this.options[r] = void 0 !== e && r in e ? e[r] : f[r]
        }

        d.prototype.getPluralForm = function (t, e) {
            var r, n, i, a = this.pluralForms[t];
            return a || ("function" != typeof (i = (r = this.data[t][""])["Plural-Forms"] || r["plural-forms"] || r.plural_forms) && (n = function (t) {
                var e, r, n;
                for (e = t.split(";"), r = 0; r < e.length; r++) if (0 === (n = e[r].trim()).indexOf("plural=")) return n.substr(7)
            }(r["Plural-Forms"] || r["plural-forms"] || r.plural_forms), i = function (t) {
                var e = c(t);
                return function (t) {
                    return +e({n: t})
                }
            }(n)), a = this.pluralForms[t] = i), a(e)
        }, d.prototype.dcnpgettext = function (t, e, r, n, i) {
            var a, o, s;
            return a = void 0 === i ? 0 : this.getPluralForm(t, i), o = r, e && (o = e + this.options.contextDelimiter + r), (s = this.data[t][o]) && s[a] ? s[a] : (this.options.onMissingKey && this.options.onMissingKey(r, t), 0 === a ? r : n)
        };
        const h = {plural_forms: t => 1 === t ? 0 : 1}, g = /^i18n\.(n?gettext|has_translation)(_|$)/,
            x = (t, e, r) => {
                const n = new d({}), i = new Set, a = () => {
                        i.forEach((t => t()))
                    }, o = (t, e = "default") => {
                        n.data[e] = {...n.data[e], ...t}, n.data[e][""] = {...h, ...n.data[e]?.[""]}, delete n.pluralForms[e]
                    }, s = (t, e) => {
                        o(t, e), a()
                    }, l = (t = "default", e, r, i, a) => (n.data[t] || o(void 0, t), n.dcnpgettext(t, e, r, i, a)),
                    u = (t = "default") => t, p = (t, e, n) => {
                        let i = l(n, e, t);
                        return r ? (i = r.applyFilters("i18n.gettext_with_context", i, t, e, n), r.applyFilters("i18n.gettext_with_context_" + u(n), i, t, e, n)) : i
                    };
                if (t && s(t, e), r) {
                    const t = t => {
                        g.test(t) && a()
                    };
                    r.addAction("hookAdded", "core/i18n", t), r.addAction("hookRemoved", "core/i18n", t)
                }
                return {
                    getLocaleData: (t = "default") => n.data[t],
                    setLocaleData: s,
                    addLocaleData: (t, e = "default") => {
                        n.data[e] = {
                            ...n.data[e], ...t,
                            "": {...h, ...n.data[e]?.[""], ...t?.[""]}
                        }, delete n.pluralForms[e], a()
                    },
                    resetLocaleData: (t, e) => {
                        n.data = {}, n.pluralForms = {}, s(t, e)
                    },
                    subscribe: t => (i.add(t), () => i.delete(t)),
                    __: (t, e) => {
                        let n = l(e, void 0, t);
                        return r ? (n = r.applyFilters("i18n.gettext", n, t, e), r.applyFilters("i18n.gettext_" + u(e), n, t, e)) : n
                    },
                    _x: p,
                    _n: (t, e, n, i) => {
                        let a = l(i, void 0, t, e, n);
                        return r ? (a = r.applyFilters("i18n.ngettext", a, t, e, n, i), r.applyFilters("i18n.ngettext_" + u(i), a, t, e, n, i)) : a
                    },
                    _nx: (t, e, n, i, a) => {
                        let o = l(a, i, t, e, n);
                        return r ? (o = r.applyFilters("i18n.ngettext_with_context", o, t, e, n, i, a), r.applyFilters("i18n.ngettext_with_context_" + u(a), o, t, e, n, i, a)) : o
                    },
                    isRTL: () => "rtl" === p("ltr", "text direction"),
                    hasTranslation: (t, e, i) => {
                        const a = e ? e + "" + t : t;
                        let o = !!n.data?.[null != i ? i : "default"]?.[a];
                        return r && (o = r.applyFilters("i18n.has_translation", o, t, e, i), o = r.applyFilters("i18n.has_translation_" + u(i), o, t, e, i)), o
                    }
                }
            }, y = window.wp.hooks, b = x(void 0, void 0, y.defaultHooks), _ = b, v = b.getLocaleData.bind(b),
            m = b.setLocaleData.bind(b), w = b.resetLocaleData.bind(b), k = b.subscribe.bind(b), F = b.__.bind(b),
            S = b._x.bind(b), j = b._n.bind(b), L = b._nx.bind(b), T = b.isRTL.bind(b), D = b.hasTranslation.bind(b)
    })(), (window.wp = window.wp || {}).i18n = n
})();
(() => {
    "use strict";
    var t = {
        d: (e, i) => {
            for (var s in i) t.o(i, s) && !t.o(e, s) && Object.defineProperty(e, s, {enumerable: !0, get: i[s]})
        }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e), r: t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }
    }, e = {};

    function i(t) {
        if (this.formData = {}, this.tree = {}, !(t instanceof FormData)) return this;
        this.formData = t;
        const e = () => {
            const t = new Map;
            return t.largestIndex = 0, t.set = function (e, i) {
                "" === e ? e = t.largestIndex++ : /^[0-9]+$/.test(e) && (e = parseInt(e), t.largestIndex <= e && (t.largestIndex = e + 1)), Map.prototype.set.call(t, e, i)
            }, t
        };
        this.tree = e();
        const i = /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
        for (const [t, s] of this.formData) {
            const o = t.match(i);
            if (o) if ("" === o.groups.array) this.tree.set(o.groups.name, s); else {
                const t = [...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t, e]) => e));
                t.unshift(o.groups.name);
                const i = t.pop();
                t.reduce(((t, i) => {
                    if (/^[0-9]+$/.test(i) && (i = parseInt(i)), t.get(i) instanceof Map) return t.get(i);
                    const s = e();
                    return t.set(i, s), s
                }), this.tree).set(i, s)
            }
        }
    }

    t.r(e), t.d(e, {
        all: () => D,
        any: () => M,
        date: () => m,
        dayofweek: () => u,
        email: () => r,
        enum: () => h,
        file: () => d,
        maxdate: () => z,
        maxfilesize: () => j,
        maxitems: () => v,
        maxlength: () => x,
        maxnumber: () => y,
        mindate: () => A,
        minfilesize: () => $,
        minitems: () => w,
        minlength: () => g,
        minnumber: () => b,
        number: () => c,
        required: () => n,
        requiredfile: () => a,
        stepnumber: () => I,
        tel: () => l,
        time: () => f,
        url: () => p
    }), i.prototype.entries = function () {
        return this.tree.entries()
    }, i.prototype.get = function (t) {
        return this.tree.get(t)
    }, i.prototype.getAll = function (t) {
        if (!this.has(t)) return [];
        const e = t => {
            const i = [];
            if (t instanceof Map) for (const [s, o] of t) i.push(...e(o)); else "" !== t && i.push(t);
            return i
        };
        return e(this.get(t))
    }, i.prototype.has = function (t) {
        return this.tree.has(t)
    }, i.prototype.keys = function () {
        return this.tree.keys()
    }, i.prototype.values = function () {
        return this.tree.values()
    };
    const s = i;

    function o({rule: t, field: e, error: i, ...s}) {
        this.rule = t, this.field = e, this.error = i, this.properties = s
    }

    const n = function (t) {
        if (0 === t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).length) throw new o(this)
    }, a = function (t) {
        if (0 === t.getAll(this.field).length) throw new o(this)
    }, r = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            if (t.length < 6) return !1;
            if (-1 === t.indexOf("@", 1)) return !1;
            if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
            const [e, i] = t.split("@", 2);
            if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
            if (/\.{2,}/.test(i)) return !1;
            if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i)) return !1;
            const s = i.split(".");
            if (s.length < 2) return !1;
            for (const t of s) {
                if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
                if (!/^[a-z0-9-]+$/i.test(t)) return !1
            }
            return !0
        }))) throw new o(this)
    }, p = function (t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        if (!e.every((t => {
            try {
                return (t => -1 !== ["http", "https", "ftp", "ftps", "mailto", "news", "irc", "irc6", "ircs", "gopher", "nntp", "feed", "telnet", "mms", "rtsp", "sms", "svn", "tel", "fax", "xmpp", "webcal", "urn"].indexOf(t))(new URL(t).protocol.replace(/:$/, ""))
            } catch {
                return !1
            }
        }))) throw new o(this)
    }, l = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => (((t = (t = t.replace(/[#*].*$/, "")).replaceAll(/[()/.*#\s-]+/g, "")).startsWith("+") || t.startsWith("00")) && (t = `+${t.replace(/^[+0]+/, "")}`), !!/^[+]?[0-9]+$/.test(t) && 5 < t.length && t.length < 16)))) throw new o(this)
    }, c = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) || !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)))) throw new o(this)
    }, m = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            if (!/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)) return !1;
            const e = new Date(t);
            return !Number.isNaN(e.valueOf())
        }))) throw new o(this)
    }, f = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            const e = t.match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
            if (!e) return !1;
            const i = parseInt(e[1]), s = parseInt(e[2]), o = e[3] ? parseInt(e[3]) : 0;
            return 0 <= i && i <= 23 && 0 <= s && s <= 59 && 0 <= o && o <= 59
        }))) throw new o(this)
    }, d = function (t) {
        if (!t.getAll(this.field).every((t => t instanceof File && this.accept?.some((e => /^\.[a-z0-9]+$/i.test(e) ? t.name.toLowerCase().endsWith(e.toLowerCase()) : (t => {
            const e = [], i = t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);
            if (i) {
                const t = i.groups.toplevel.toLowerCase(), s = i.groups.sub.toLowerCase();
                for (const [o, n] of (() => {
                    const t = new Map;
                    return t.set("jpg|jpeg|jpe", "image/jpeg"), t.set("gif", "image/gif"), t.set("png", "image/png"), t.set("bmp", "image/bmp"), t.set("tiff|tif", "image/tiff"), t.set("webp", "image/webp"), t.set("ico", "image/x-icon"), t.set("heic", "image/heic"), t.set("asf|asx", "video/x-ms-asf"), t.set("wmv", "video/x-ms-wmv"), t.set("wmx", "video/x-ms-wmx"), t.set("wm", "video/x-ms-wm"), t.set("avi", "video/avi"), t.set("divx", "video/divx"), t.set("flv", "video/x-flv"), t.set("mov|qt", "video/quicktime"), t.set("mpeg|mpg|mpe", "video/mpeg"), t.set("mp4|m4v", "video/mp4"), t.set("ogv", "video/ogg"), t.set("webm", "video/webm"), t.set("mkv", "video/x-matroska"), t.set("3gp|3gpp", "video/3gpp"), t.set("3g2|3gp2", "video/3gpp2"), t.set("txt|asc|c|cc|h|srt", "text/plain"), t.set("csv", "text/csv"), t.set("tsv", "text/tab-separated-values"), t.set("ics", "text/calendar"), t.set("rtx", "text/richtext"), t.set("css", "text/css"), t.set("htm|html", "text/html"), t.set("vtt", "text/vtt"), t.set("dfxp", "application/ttaf+xml"), t.set("mp3|m4a|m4b", "audio/mpeg"), t.set("aac", "audio/aac"), t.set("ra|ram", "audio/x-realaudio"), t.set("wav", "audio/wav"), t.set("ogg|oga", "audio/ogg"), t.set("flac", "audio/flac"), t.set("mid|midi", "audio/midi"), t.set("wma", "audio/x-ms-wma"), t.set("wax", "audio/x-ms-wax"), t.set("mka", "audio/x-matroska"), t.set("rtf", "application/rtf"), t.set("js", "application/javascript"), t.set("pdf", "application/pdf"), t.set("swf", "application/x-shockwave-flash"), t.set("class", "application/java"), t.set("tar", "application/x-tar"), t.set("zip", "application/zip"), t.set("gz|gzip", "application/x-gzip"), t.set("rar", "application/rar"), t.set("7z", "application/x-7z-compressed"), t.set("exe", "application/x-msdownload"), t.set("psd", "application/octet-stream"), t.set("xcf", "application/octet-stream"), t.set("doc", "application/msword"), t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"), t.set("wri", "application/vnd.ms-write"), t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"), t.set("mdb", "application/vnd.ms-access"), t.set("mpp", "application/vnd.ms-project"), t.set("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"), t.set("docm", "application/vnd.ms-word.document.macroEnabled.12"), t.set("dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"), t.set("dotm", "application/vnd.ms-word.template.macroEnabled.12"), t.set("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), t.set("xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"), t.set("xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"), t.set("xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"), t.set("xltm", "application/vnd.ms-excel.template.macroEnabled.12"), t.set("xlam", "application/vnd.ms-excel.addin.macroEnabled.12"), t.set("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"), t.set("pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"), t.set("ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"), t.set("ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"), t.set("potx", "application/vnd.openxmlformats-officedocument.presentationml.template"), t.set("potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"), t.set("ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"), t.set("sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"), t.set("sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"), t.set("onetoc|onetoc2|onetmp|onepkg", "application/onenote"), t.set("oxps", "application/oxps"), t.set("xps", "application/vnd.ms-xpsdocument"), t.set("odt", "application/vnd.oasis.opendocument.text"), t.set("odp", "application/vnd.oasis.opendocument.presentation"), t.set("ods", "application/vnd.oasis.opendocument.spreadsheet"), t.set("odg", "application/vnd.oasis.opendocument.graphics"), t.set("odc", "application/vnd.oasis.opendocument.chart"), t.set("odb", "application/vnd.oasis.opendocument.database"), t.set("odf", "application/vnd.oasis.opendocument.formula"), t.set("wp|wpd", "application/wordperfect"), t.set("key", "application/vnd.apple.keynote"), t.set("numbers", "application/vnd.apple.numbers"), t.set("pages", "application/vnd.apple.pages"), t
                })()) ("*" === s && n.startsWith(t + "/") || n === i[0]) && e.push(...o.split("|"))
            }
            return e
        })(e).some((e => (e = "." + e.trim(), t.name.toLowerCase().endsWith(e.toLowerCase()))))))))) throw new o(this)
    }, h = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => this.accept?.some((e => t === String(e)))))) throw new o(this)
    }, u = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            const e = 0 === (i = new Date(t).getDay()) ? 7 : i;
            var i;
            return this.accept?.some((t => e === parseInt(t)))
        }))) throw new o(this)
    }, w = function (t) {
        if (t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).length < parseInt(this.threshold)) throw new o(this)
    }, v = function (t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        if (parseInt(this.threshold) < e.length) throw new o(this)
    }, g = function (t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        let i = 0;
        if (e.forEach((t => {
            "string" == typeof t && (i += t.length)
        })), 0 !== i && i < parseInt(this.threshold)) throw new o(this)
    }, x = function (t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        let i = 0;
        if (e.forEach((t => {
            "string" == typeof t && (i += t.length)
        })), parseInt(this.threshold) < i) throw new o(this)
    }, b = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(parseFloat(t) < parseFloat(this.threshold))))) throw new o(this)
    }, y = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(parseFloat(this.threshold) < parseFloat(t))))) throw new o(this)
    }, A = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && t < this.threshold)))) throw new o(this)
    }, z = function (t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && this.threshold < t)))) throw new o(this)
    }, $ = function (t) {
        const e = t.getAll(this.field);
        let i = 0;
        if (e.forEach((t => {
            t instanceof File && (i += t.size)
        })), i < parseInt(this.threshold)) throw new o(this)
    }, j = function (t) {
        const e = t.getAll(this.field);
        let i = 0;
        if (e.forEach((t => {
            t instanceof File && (i += t.size)
        })), parseInt(this.threshold) < i) throw new o(this)
    }, I = function (t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)), i = parseFloat(this.base),
            s = parseFloat(this.interval);
        if (!(0 < s)) return !0;
        if (!e.every((t => {
            const e = (parseFloat(t) - i) % s;
            return "0.000000" === Math.abs(e).toFixed(6) || "0.000000" === Math.abs(e - s).toFixed(6)
        }))) throw new o(this)
    }, O = ({ruleObj: t, options: i}) => {
        const {rule: s, ...o} = t;
        return "function" == typeof e[s] && ("function" != typeof e[s].matches || e[s].matches(o, i))
    }, E = ({ruleObj: t, formDataTree: i, options: s}) => {
        const {rule: o} = t;
        e[o].call(t, i, s)
    }, k = [], F = t => [...k].reduce(((t, e) => i => e(i, t)), t), D = function (t, e = {}) {
        const i = (this.rules ?? []).filter((t => O({ruleObj: t, options: e}))), s = F(E);
        if (!i.every((i => {
            try {
                s({ruleObj: i, formDataTree: t, options: e})
            } catch (t) {
                if (!(t instanceof o)) throw t;
                if (void 0 !== t.error) throw t;
                return !1
            }
            return !0
        }))) throw new o(this)
    }, M = function (t, e = {}) {
        const i = (this.rules ?? []).filter((t => O({ruleObj: t, options: e}))), s = F(E);
        if (!i.some((i => {
            try {
                s({ruleObj: i, formDataTree: t, options: e})
            } catch (t) {
                if (!(t instanceof o)) throw t;
                return !1
            }
            return !0
        }))) throw new o(this)
    };
    var L;
    window.swv = {
        validators: e, validate: (t, e, i = {}) => {
            const n = (t.rules ?? []).filter((t => O({ruleObj: t, options: i})));
            if (!n.length) return new Map;
            const a = F(E), r = new s(e), p = n.reduce(((t, e) => {
                try {
                    a({ruleObj: e, formDataTree: r, options: i})
                } catch (e) {
                    if (!(e instanceof o)) throw e;
                    if (void 0 !== e.field && !t.has(e.field) && void 0 !== e.error) return t.set(e.field, e)
                }
                return t
            }), new Map);
            for (const t of r.keys()) p.has(t) || p.set(t, {validInputs: r.getAll(t)});
            return p
        }, use: t => {
            k.push(t)
        }, ...null !== (L = window.swv) && void 0 !== L ? L : {}
    }
})();
(() => {
    "use strict";
    const e = window.wp.i18n, t = e => Math.abs(parseInt(e, 10)), a = (e, t, a) => {
        const n = new CustomEvent(`wpcf7${t}`, {bubbles: !0, detail: a});
        "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(n)
    }, n = (e, t) => {
        const n = new Map([["init", "init"], ["validation_failed", "invalid"], ["acceptance_missing", "unaccepted"], ["spam", "spam"], ["aborted", "aborted"], ["mail_sent", "sent"], ["mail_failed", "failed"], ["submitting", "submitting"], ["resetting", "resetting"], ["validating", "validating"], ["payment_required", "payment-required"]]);
        n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = `custom-${t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-")}`);
        const r = e.getAttribute("data-status");
        if (e.wpcf7.status = t, e.setAttribute("data-status", t), e.classList.add(t), r && r !== t) {
            e.classList.remove(r);
            const t = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                prevStatus: r
            };
            a(e, "statuschanged", t)
        }
        return t
    }, r = e => {
        const {root: t, namespace: a = "contact-form-7/v1"} = wpcf7.api;
        return c.reduceRight(((e, t) => a => t(a, e)), (e => {
            let n, r, {url: c, path: o, endpoint: s, headers: i, body: l, data: p, ...d} = e;
            "string" == typeof s && (n = a.replace(/^\/|\/$/g, ""), r = s.replace(/^\//, ""), o = r ? n + "/" + r : n), "string" == typeof o && (-1 !== t.indexOf("?") && (o = o.replace("?", "&")), o = o.replace(/^\//, ""), c = t + o), i = {Accept: "application/json, */*;q=0.1", ...i}, delete i["X-WP-Nonce"], p && (l = JSON.stringify(p), i["Content-Type"] = "application/json");
            const f = {code: "fetch_error", message: "You are probably offline."},
                u = {code: "invalid_json", message: "The response is not a valid JSON response."};
            return window.fetch(c || o || window.location.href, {
                ...d,
                headers: i,
                body: l
            }).then((e => Promise.resolve(e).then((e => {
                if (e.status >= 200 && e.status < 300) return e;
                throw e
            })).then((e => {
                if (204 === e.status) return null;
                if (e && e.json) return e.json().catch((() => {
                    throw u
                }));
                throw u
            }))), (() => {
                throw f
            }))
        }))(e)
    }, c = [];

    function o(e, t = {}) {
        const {target: a, scope: r = e, ...c} = t;
        if (void 0 === e.wpcf7?.schema) return;
        const o = {...e.wpcf7.schema};
        if (void 0 !== a) {
            if (!e.contains(a)) return;
            if (!a.closest(".wpcf7-form-control-wrap[data-name]")) return;
            if (a.closest(".novalidate")) return
        }
        const p = r.querySelectorAll(".wpcf7-form-control-wrap"),
            d = Array.from(p).reduce(((e, t) => (t.closest(".novalidate") || t.querySelectorAll(":where( input, textarea, select ):enabled").forEach((t => {
                if (t.name) switch (t.type) {
                    case"button":
                    case"image":
                    case"reset":
                    case"submit":
                        break;
                    case"checkbox":
                    case"radio":
                        t.checked && e.append(t.name, t.value);
                        break;
                    case"select-multiple":
                        for (const a of t.selectedOptions) e.append(t.name, a.value);
                        break;
                    case"file":
                        for (const a of t.files) e.append(t.name, a);
                        break;
                    default:
                        e.append(t.name, t.value)
                }
            })), e)), new FormData), f = e.getAttribute("data-status");
        Promise.resolve(n(e, "validating")).then((n => {
            if (void 0 !== swv) {
                const n = swv.validate(o, d, t);
                for (const t of p) {
                    if (void 0 === t.dataset.name) continue;
                    const c = t.dataset.name;
                    if (n.has(c)) {
                        const {error: t, validInputs: a} = n.get(c);
                        i(e, c), void 0 !== t && s(e, c, t, {scope: r}), l(e, c, null != a ? a : [])
                    }
                    if (t.contains(a)) break
                }
            }
        })).finally((() => {
            n(e, f)
        }))
    }

    r.use = e => {
        c.unshift(e)
    };
    const s = (e, t, a, n) => {
        const {scope: r = e, ...c} = null != n ? n : {},
            o = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
            s = e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);
        (() => {
            const t = document.createElement("li");
            t.setAttribute("id", o), s && s.id ? t.insertAdjacentHTML("beforeend", `<a href="#${s.id}">${a}</a>`) : t.insertAdjacentText("beforeend", a), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)
        })(), r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
            const t = document.createElement("span");
            t.classList.add("wpcf7-not-valid-tip"), t.setAttribute("aria-hidden", "true"), t.insertAdjacentText("beforeend", a), e.appendChild(t), e.querySelectorAll("[aria-invalid]").forEach((e => {
                e.setAttribute("aria-invalid", "true")
            })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                e.classList.add("wpcf7-not-valid"), e.setAttribute("aria-describedby", o), "function" == typeof e.setCustomValidity && e.setCustomValidity(a), e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", (e => {
                    t.setAttribute("style", "display: none")
                })), t.addEventListener("click", (e => {
                    t.setAttribute("style", "display: none")
                })))
            }))
        }))
    }, i = (e, t) => {
        const a = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
        e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`)?.remove(), e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
            e.querySelector(".wpcf7-not-valid-tip")?.remove(), e.querySelectorAll("[aria-invalid]").forEach((e => {
                e.setAttribute("aria-invalid", "false")
            })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid"), "function" == typeof e.setCustomValidity && e.setCustomValidity("")
            }))
        }))
    }, l = (e, t, a) => {
        e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e => {
            if ("output" === e.tagName.toLowerCase()) {
                const t = e;
                0 === a.length && a.push(t.dataset.default), a.slice(0, 1).forEach((e => {
                    e instanceof File && (e = e.name), t.textContent = e
                }))
            } else e.querySelectorAll("output").forEach((e => {
                e.hasAttribute("data-default") ? 0 === a.length ? e.removeAttribute("hidden") : e.setAttribute("hidden", "hidden") : e.remove()
            })), a.forEach((a => {
                a instanceof File && (a = a.name);
                const n = document.createElement("output");
                n.setAttribute("name", t), n.textContent = a, e.appendChild(n)
            }))
        }))
    };



    const u = (e, t) => {
        for (const a in t) {
            const n = t[a];
            e.querySelectorAll(`input[name="${a}"]`).forEach((e => {
                e.value = ""
            })), e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`).forEach((e => {
                e.setAttribute("src", n)
            }));
            const r = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
            r && e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e => {
                e.value = r[1]
            }))
        }
    }, m = (e, t) => {
        for (const a in t) {
            const n = t[a][0], r = t[a][1];
            e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e => {
                e.querySelector(`input[name="${a}"]`).value = "", e.querySelector(".wpcf7-quiz-label").textContent = n, e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value = r
            }))
        }
    };

    function w(e) {
        const a = new FormData(e);
        e.wpcf7 = {
            id: t(a.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: a.get("_wpcf7_version"),
            locale: a.get("_wpcf7_locale"),
            unitTag: a.get("_wpcf7_unit_tag"),
            containerPost: t(a.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7"),
            get schema() {
                return wpcf7.schemas.get(this.id)
            }
        }, wpcf7.schemas.set(e.wpcf7.id, void 0), e.querySelectorAll(".has-spinner").forEach((e => {
            e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>')
        })), (e => {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t => {
                t.addEventListener("change", (t => {
                    const a = t.target.getAttribute("name");
                    e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e => {
                        e !== t.target && (e.checked = !1)
                    }))
                }))
            }))
        })(e), (e => {
            e.querySelectorAll(".has-free-text").forEach((t => {
                const a = t.querySelector("input.wpcf7-free-text"),
                    n = t.querySelector('input[type="checkbox"], input[type="radio"]');
                a.disabled = !n.checked, e.addEventListener("change", (e => {
                    a.disabled = !n.checked, e.target === n && n.checked && a.focus()
                }))
            }))
        })(e), (e => {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((e => {
                e.addEventListener("change", (t => {
                    let a = e.value.trim();
                    a && !a.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== a.indexOf(".") && (a = a.replace(/^\/+/, ""), a = "http://" + a), e.value = a
                }))
            }))
        })(e), (e => {
            if (!e.querySelector(".wpcf7-acceptance") || e.classList.contains("wpcf7-acceptance-as-validation")) return;
            const t = () => {
                let t = !0;
                e.querySelectorAll(".wpcf7-acceptance").forEach((e => {
                    if (!t || e.classList.contains("optional")) return;
                    const a = e.querySelector('input[type="checkbox"]');
                    (e.classList.contains("invert") && a.checked || !e.classList.contains("invert") && !a.checked) && (t = !1)
                })), e.querySelectorAll(".wpcf7-submit").forEach((e => {
                    e.disabled = !t
                }))
            };
            t(), e.addEventListener("change", (e => {
                t()
            })), e.addEventListener("wpcf7reset", (e => {
                t()
            }))
        })(e), (e => {
            const a = (e, a) => {
                const n = t(e.getAttribute("data-starting-value")), r = t(e.getAttribute("data-maximum-value")),
                    c = t(e.getAttribute("data-minimum-value")),
                    o = e.classList.contains("down") ? n - a.value.trim().length : a.value.trim().length;
                e.setAttribute("data-current-value", o), e.innerText = o, r && r < a.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"), c && a.value.length < c ? e.classList.add("too-short") : e.classList.remove("too-short")
            }, n = t => {
                t = {init: !1, ...t}, e.querySelectorAll(".wpcf7-character-count").forEach((n => {
                    const r = n.getAttribute("data-target-name"), c = e.querySelector(`[name="${r}"]`);
                    c && (c.value = c.defaultValue, a(n, c), t.init && c.addEventListener("keyup", (e => {
                        a(n, c)
                    })))
                }))
            };
            n({init: !0}), e.addEventListener("wpcf7reset", (e => {
                n()
            }))
        })(e), window.addEventListener("load", (t => {
            wpcf7.cached && e.reset()
        })), e.addEventListener("reset", (t => {
            wpcf7.reset(e)
        })), e.addEventListener("submit", (t => {
            wpcf7.submit(e, {submitter: t.submitter}), t.preventDefault()
        })), e.addEventListener("wpcf7submit", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        })), e.addEventListener("wpcf7reset", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        })), e.addEventListener("change", (t => {
            t.target.closest(".wpcf7-form-control") && wpcf7.validate(e, {target: t.target})
        })), e.addEventListener("wpcf7statuschanged", (t => {
            const a = t.detail.status;
            e.querySelectorAll(".active-on-any").forEach((e => {
                e.removeAttribute("inert"), e.classList.remove("active-on-any")
            })), e.querySelectorAll(`.inert-on-${a}`).forEach((e => {
                e.setAttribute("inert", "inert"), e.classList.add("active-on-any")
            }))
        }))
    }

    document.addEventListener("DOMContentLoaded", (t => {
        var a;
        if ("undefined" != typeof wpcf7) if (void 0 !== wpcf7.api) if ("function" == typeof window.fetch) if ("function" == typeof window.FormData) if ("function" == typeof NodeList.prototype.forEach) if ("function" == typeof String.prototype.replaceAll) {
            wpcf7 = {
                init: w,
                submit: p,
                reset: f,
                validate: o,
                schemas: new Map, ...null !== (a = wpcf7) && void 0 !== a ? a : {}
            }, document.querySelectorAll("form .wpcf7[data-wpcf7-id]").forEach((t => {
                const a = document.createElement("p");
                a.setAttribute("class", "wpcf7-form-in-wrong-place");
                const n = document.createElement("strong");
                n.append((0, e.__)("Error:", "contact-form-7"));
                const r = (0, e.__)("This contact form is placed in the wrong place.", "contact-form-7");
                a.append(n, " ", r), t.replaceWith(a)
            })), document.querySelectorAll(".wpcf7 > form").forEach((e => {
                wpcf7.init(e), e.closest(".wpcf7").classList.replace("no-js", "js")
            }));
            for (const e of wpcf7.schemas.keys()) r({
                endpoint: `contact-forms/${e}/feedback/schema`,
                method: "GET"
            }).then((t => {
                wpcf7.schemas.set(e, t)
            }))
        } else console.error("Your browser does not support String.replaceAll()."); else console.error("Your browser does not support NodeList.forEach()."); else console.error("Your browser does not support window.FormData()."); else console.error("Your browser does not support window.fetch()."); else console.error("wpcf7.api is not defined."); else console.error("wpcf7 is not defined.")
    }))
})();

/*-------------------------------------------------------------------------------*
 * Script for onClick trigger functionality used by flag images
 * Script modified from original GTranslate plugin created by Edvard Ananyan at http://edo.webmaster.am
 * GTranslate Free Version is licensed under GNU/GPL license
 *-------------------------------------------------------------------------------*/

function GLTFireEvent(lang_pair, lang_dest) {
    try {
        if (document.createEvent) {
            var event = document.createEvent("HTMLEvents");
            event.initEvent(lang_dest, true, true);
            lang_pair.dispatchEvent(event)
        } else {
            var event = document.createEventObject();
            lang_pair.fireEvent('on' + lang_dest, event)
        }
    } catch (e) {
    }
}

function GLTGetCurrentLang() {
    var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');
    return keyValue ? keyValue[2].split('/')[2] : null;
}

function doGoogleLanguageTranslator(lang_pair) {
    if (window.glt_request_uri)
        return true;

    if (lang_pair.value)
        lang_pair = lang_pair.value;

    if (lang_pair == '')
        return;

    var lang = lang_pair.split('|')[1];

    if (GLTGetCurrentLang() == null && lang == lang_pair.split('|')[0])
        return;

    var teCombo = document.querySelector('select.goog-te-combo');
    var teWrapper = document.getElementById('google_language_translator');

    if (teWrapper == null || teWrapper.innerHTML.length == 0 || teCombo == null || teCombo.innerHTML.length == 0) {
        setTimeout(function () {
            doGoogleLanguageTranslator(lang_pair)
        }, 500);
    } else {
        teCombo.value = lang;
        GLTFireEvent(teCombo, 'change');
        GLTFireEvent(teCombo, 'change');
    }
}

jQuery(document).ready(function ($) {
    $('#glt-translate-trigger,#glt-translate-trigger font').toolbar({
        content: '#flags',
        position: 'top',
        hideOnClick: true,
        event: 'click',
        style: 'primary'
    });

    $('#glt-translate-trigger').on('toolbarItemClick', function (event) {
        $(this).removeClass('pressed');
    });
});

/**
 * Toolbar.js
 *
 * @fileoverview  jQuery plugin that creates tooltip style toolbars.
 * @link          http://paulkinzett.github.com/toolbar/
 * @author        Paul Kinzett (http://kinzett.co.nz/)
 * @version       1.1.0
 * @requires      jQuery 1.7+
 *
 * @license jQuery Toolbar Plugin v1.1.0
 * http://paulkinzett.github.com/toolbar/
 * Copyright 2013 - 2015 Paul Kinzett (http://kinzett.co.nz/)
 * Released under the MIT license.
 * <https://raw.github.com/paulkinzett/toolbar/master/LICENSE.txt>
 */

if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {
        }

        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {

    var ToolBar = {
        init: function (options, elem) {
            var self = this;
            self.elem = elem;
            self.$elem = $(elem);
            self.options = $.extend({}, $.fn.toolbar.options, options);
            self.metadata = self.$elem.data();
            self.overrideOptions();
            self.toolbar = $('<div class="tool-container" />')
                .addClass('tool-' + self.options.position)
                .addClass('toolbar-' + self.options.style)
                .append('<div class="tool-items" />')
                .append('<div class="arrow" />')
                .appendTo('body')
                .css('opacity', 0)
                .hide();
            self.toolbar_arrow = self.toolbar.find('.arrow');
            self.initializeToolbar();
        },

        overrideOptions: function () {
            var self = this;

            $.each(self.options, function ($option) {
                if (typeof (self.$elem.data('toolbar-' + $option)) != "undefined") {
                    self.options[$option] = self.$elem.data('toolbar-' + $option);
                }
            });
        },

        initializeToolbar: function () {
            var self = this;
            self.populateContent();
            self.setTrigger();
            self.toolbarWidth = self.toolbar.width();
        },

        setTrigger: function () {
            var self = this;

            if (self.options.event == 'onload') {
                $(window).load(function (event) {
                    event.preventDefault();
                    self.show();
                });
            }

            if (self.options.event == 'click') {
                self.$elem.on('click', function (event) {
                    event.preventDefault();
                    if (self.$elem.hasClass('pressed')) {
                        self.hide();
                    } else {
                        self.show();
                    }
                });

                if (self.options.hideOnClick) {
                    $('html').on("click.toolbar", function (event) {
                        if (event.target != self.elem &&
                            self.$elem.has(event.target).length === 0 &&
                            self.toolbar.has(event.target).length === 0 &&
                            self.toolbar.is(":visible")) {
                            self.hide();
                        }
                    });
                }
            }

            if (self.options.hover) {
                var moveTime;

                function decideTimeout() {
                    if (self.$elem.hasClass('pressed')) {
                        moveTime = setTimeout(function () {
                            self.hide();
                        }, 150);
                    } else {
                        clearTimeout(moveTime);
                    }
                    ;
                };

                self.$elem.on({
                    mouseenter: function (event) {
                        if (self.$elem.hasClass('pressed')) {
                            clearTimeout(moveTime);
                        } else {
                            self.show();
                        }
                    }
                });

                self.$elem.parent().on({
                    mouseleave: function (event) {
                        decideTimeout();
                    }
                });

                $('.tool-container').on({
                    mouseenter: function (event) {
                        clearTimeout(moveTime);
                    },
                    mouseleave: function (event) {
                        decideTimeout();
                    }
                });
            }

            $(window).resize(function (event) {
                event.stopPropagation();

                if (self.toolbar.is(":visible")) {
                    self.toolbarCss = self.getCoordinates(self.options.position, 20);
                    self.collisionDetection();
                    self.toolbar.css(self.toolbarCss);
                    self.toolbar_arrow.css(self.arrowCss);
                }
            });
        },

        populateContent: function () {
            var self = this;
            var location = self.toolbar.find('.tool-items');
            var content = $(self.options.content).clone(true).find('a').addClass('tool-item');

            location.html(content);
            location.find('.tool-item').on('click', function (event) {
                if (typeof window.glt_request_uri == 'undefined')
                    event.preventDefault();
                self.$elem.trigger('toolbarItemClick', this);
            });
        },

        calculatePosition: function () {
            var self = this;
            self.arrowCss = {};
            self.toolbarCss = self.getCoordinates(self.options.position, self.options.adjustment);
            self.toolbarCss.position = 'fixed';
            self.toolbarCss.zIndex = self.options.zIndex;
            self.collisionDetection();
            self.toolbar.css(self.toolbarCss);
            self.toolbar_arrow.css(self.arrowCss);
        },

        getCoordinates: function (position, adjustment) {
            var self = this;

            self.coordinates = self.$elem.offset();

            if (self.options.adjustment && self.options.adjustment[self.options.position]) {
                adjustment = self.options.adjustment[self.options.position] + adjustment;
            }

            switch (self.options.position) {
                case 'top':
                    return {
                        left: self.coordinates.left - (self.toolbar.width() / 2) + (self.$elem.outerWidth() / 2),
                        top: self.coordinates.top - self.$elem.outerHeight() - adjustment,
                        right: 'auto'
                    };

                case 'left':
                    return {
                        left: self.coordinates.left - (self.toolbar.width() / 2) - (self.$elem.outerWidth() / 2) - adjustment,
                        top: self.coordinates.top - (self.toolbar.height() / 2) + (self.$elem.outerHeight() / 2),
                        right: 'auto'
                    };

                case 'right':
                    return {
                        left: self.coordinates.left + (self.toolbar.width() / 2) + (self.$elem.outerWidth() / 2) + adjustment,
                        top: self.coordinates.top - (self.toolbar.height() / 2) + (self.$elem.outerHeight() / 2),
                        right: 'auto'
                    };

                case 'bottom':
                    return {
                        left: self.coordinates.left - (self.toolbar.width() / 2) + (self.$elem.outerWidth() / 2),
                        top: self.coordinates.top + self.$elem.outerHeight() + adjustment,
                        right: 'auto'
                    };
            }
        },

        collisionDetection: function () {
            var self = this;
            var edgeOffset = 20;

            if (self.options.position == 'top' || self.options.position == 'bottom') {
                self.arrowCss = {left: '50%', right: '50%'};
                if (self.toolbarCss.left < edgeOffset) {
                    self.toolbarCss.left = edgeOffset;
                    self.arrowCss.left = self.$elem.offset().left + self.$elem.width() / 2 - (edgeOffset);
                } else if (($(window).width() - (self.toolbarCss.left + self.toolbarWidth)) < edgeOffset) {
                    self.toolbarCss.right = edgeOffset;
                    self.toolbarCss.left = 'auto';
                    self.arrowCss.left = 'auto';
                    self.arrowCss.right = ($(window).width() - self.$elem.offset().left) - (self.$elem.width() / 2) - (edgeOffset) - 5;
                }
            }
        },

        show: function () {
            var self = this;
            self.$elem.addClass('pressed');
            self.calculatePosition();
            self.toolbar.show().css({'opacity': 1}).addClass('animate-' + self.options.animation);
            self.$elem.trigger('toolbarShown');
        },

        hide: function () {
            var self = this;
            var animation = {'opacity': 0};
            self.$elem.removeClass('pressed');
            switch (self.options.position) {
                case 'top':
                    animation.top = '+=20';
                    break;
                case 'left':
                    animation.left = '+=20';
                    break;
                case 'right':
                    animation.left = '-=20';
                    break;
                case 'bottom':
                    animation.top = '-=20';
                    break;
            }
            self.toolbar.animate(animation, 200, function () {
                self.toolbar.hide();
            });
            self.$elem.trigger('toolbarHidden');
        },

        getToolbarElement: function () {
            return this.toolbar.find('.tool-items');
        }
    };

    $.fn.toolbar = function (options) {
        if ($.isPlainObject(options)) {
            return this.each(function () {
                var toolbarObj = Object.create(ToolBar);
                toolbarObj.init(options, this);
                $(this).data('toolbarObj', toolbarObj);
            });
        } else if (typeof options === 'string' && options.indexOf('_') !== 0) {
            var toolbarObj = $(this).data('toolbarObj');
            var method = toolbarObj[options];
            return method.apply(toolbarObj, $.makeArray(arguments).slice(1));
        }
    };

    $.fn.toolbar.options = {
        content: '#myContent',
        position: 'top',
        hideOnClick: false,
        zIndex: 120,
        hover: false,
        style: 'default',
        animation: 'standard',
        adjustment: 10
    };
})(jQuery, window, document);

jQuery(function ($) {
    $('#flags a, a.single-language, .tool-items a').each(function () {
        $(this).attr('data-lang', $(this).attr('title'));
    });

    $(document.body).on("click", "a.flag", function () {
        lang_text = $(this).attr('data-lang');
        default_lang = window.glt_default_lang || $('#google_language_translator').attr('class').split("-").pop();
        lang_prefix = $(this).attr("class").split(" ")[2];
        lang_prefix == default_lang ? l() : n();

        function l() {
            doGoogleLanguageTranslator(default_lang + "|" + default_lang);
        }

        function n() {
            doGoogleLanguageTranslator(default_lang + "|" + lang_prefix);
        }

        $(".tool-container").hide();
    });

    if (window.glt_request_uri) {
        $('#google_language_translator select').on('change', function () {
            doGLTTranslate($(this).val());
        })
    }
});
!function (t) {
    t.fn.WordpressUlikeTooltip = function (e) {
        if (this.length > 1) return this.each((function () {
            t(this).WordpressUlikeTooltip(e)
        })), this;
        if (void 0 === this || 1 !== this.length) return !1;
        const i = t(this);
        e = t.extend({}, t.WordpressUlikeTooltip.defaults, e, i.data());
        let s = i.attr("title");
        void 0 !== s && s.length && (e.title = s), e.class += " ulf-" + e.theme + "-theme", e.class += " ulf-" + e.size, e.trigger = e.trigger.toLowerCase().trim();
        let n = {
            dom: this,
            dom_wrapped: i,
            position_debug: e.position_debug,
            trigger: e.trigger,
            id: e.id,
            title: e.title,
            content: e.title,
            child_class: e.child,
            theme: e.theme,
            class: e.class,
            position: e.position,
            close_on_outside_click: e.close_on_outside_click,
            singleton: e.singleton,
            dataAttr: "ulike-tooltip",
            createTooltipHTML: function () {
                return `<div class='ulf-tooltip ${n.class}' role='tooltip'><div class='ulf-arrow'></div><div class='ulf-content'>${n.content}</div></div>`
            },
            destroy: function () {
                const e = n.dom_wrapped.data(n.dataAttr);
                null != e && (e.dom_wrapped.off("touchstart mouseenter", e.show), e.dom_wrapped.off("click", e.preventDefaultHandler), t(window).off("resize", e.onResize), e.isVisible() && e.hide(), e.dom_wrapped.data(e.dataAttr, null))
            },
            initialize: function () {
                return n.dom_wrapped.on("touchstart mouseenter", n.show), n.dom_wrapped.on("click", n.preventDefaultHandler), t.WordpressUlikeTooltip.body_click_initialized || (t(document).on("touchstart mousedown", n.onClickOutside), t.WordpressUlikeTooltip.bodyClickInitialized = !0), n.dom_wrapped.data(n.dataAttr, n), t(document).on("WordpressUlikeLikersMarkupUpdated", (function (t, e, i, s) {
                    if ("popover" == i) if (s.length) n.show(); else {
                        let t = e.data(n.dataAttr);
                        null != t && t.destroy()
                    }
                })), n.dom
            },
            preventDefaultHandler: function (t) {
                return t.preventDefault(), !1
            },
            show: function (e) {
                if (n.isVisible()) return !1;
                n.singleton && n.hideAllVisible();
                const i = t("body");
                (void 0 === e || e) && "function" == typeof n.title && (n.content = n.title(n.dom_wrapped, n)), i.append(n.createTooltipHTML()), n.tooltip = t(".ulf-tooltip:last"), n.positionTooltip(), t(window).on("resize", n.onResize);
                const s = "ulp-dom-" + n.id;
                n.tooltip.attr("id", s), n.dom.attr("aria-describedby", s), t.WordpressUlikeTooltip.visible.push(n), (void 0 === e || e) && n.dom.trigger("ulf-show", [n.tooltip, n.hide]), n.observer = new MutationObserver((function (t) {
                    n.positionTooltip()
                }));
                n.observer.observe(document.body, {attributes: !0, childList: !0, subtree: !0})
            },
            isVisible: function () {
                return t.inArray(n, t.WordpressUlikeTooltip.visible) > -1
            },
            hideAllVisible: function () {
                return t.each(t.WordpressUlikeTooltip.visible, (function (t, e) {
                    e.dom_wrapped.hasClass("ulf-focused") || e.hide()
                })), this
            },
            hide: function (e) {
                n.observer && (n.observer.disconnect(), n.observer = null), t(window).off("resize", n.onResize), n.dom.attr("aria-describedby", null), n.tooltip && n.tooltip.length && n.tooltip.remove(), (void 0 === e || e) && n.dom.trigger("ulf-hide"), "click" !== n.trigger && n.dom_wrapped.off("touchstart mousedown", n.hide);
                var i = t.inArray(n, t.WordpressUlikeTooltip.visible);
                return t.WordpressUlikeTooltip.visible.splice(i, 1), n.dom
            },
            onResize: function () {
                n.hide(!1), n.show(!1)
            },
            onClickOutside: function (e) {
                const i = t(e.target);
                i.hasClass("ulf-tooltip") || i.parents(".ulf-tooltip:first").length || t.each(t.WordpressUlikeTooltip.visible, (function (t, e) {
                    void 0 !== e && e.close_on_outside_click && (i !== e.dom_wrapped || "focus" !== e.trigger && "hoverfocus" !== e.trigger) && e.hide()
                }))
            },
            positionTooltip: function () {
                n.positionDebug("-- Start positioning --"), n.dom_wrapped.length && n.dom_wrapped.is(":visible") || (n.positionDebug("Elem no longer exists. Removing tooltip"), n.hide(!0));
                let t = n.tooltip.find(".ulf-arrow"), [e, i, s, o, l, a] = n.calculateSafePosition(n.position);
                return void 0 === l && "auto" !== n.position && (n.positionDebug("Couldn't fit preferred position"), [e, i, s, o, l, a] = n.calculateSafePosition("auto")), void 0 === l ? (n.positionDebug("Doesn't appear to fit. Displaying centered"), n.tooltip.addClass("ulf-centered").css({
                    top: "50%",
                    left: "50%",
                    "margin-left": -s / 2,
                    "margin-top": -o / 2
                }), t && t.length && t.remove(), void n.positionDebug("-- Done positioning --")) : (n.positionDebug({
                    "Setting Position": {
                        Left: l,
                        Top: a
                    }
                }), n.tooltip.css("left", l), n.tooltip.css("top", a), i < 60 && (n.positionDebug("Element is less than " + i + "px. Setting arrow to hug the side tighter"), e += " ulf-arrow-super-hug"), t.addClass("ulf-arrow-" + e), n.positionDebug("-- Done positioning --"), n)
            },
            calculateSafePosition: function (t) {
                let e, i, s, o = n.tooltip.find(".ulf-arrow"), l = n.dom_wrapped.offset(),
                    a = n.dom_wrapped.outerHeight(), r = n.dom_wrapped.outerWidth(), d = n.tooltip.outerWidth(),
                    u = n.tooltip.outerHeight(), p = document.querySelector("body").offsetWidth,
                    h = document.querySelector("body").offsetHeight, g = o.is(":visible") ? o.outerHeight() : 0,
                    c = o.is(":visible") ? o.outerWidth() : 0, m = {};
                if (m.below = h - (u + a + l.top) > 5, m.above = l.top - u > 5, m.vertical_half = l.top + r / 2 - u / 2 > 5, m.right = p - (d + r + l.left) > 5, m.right_half = p - l.left - r / 2 - d / 2 > 5, m.right_full = p - l.left - d > 5, m.left = l.left - d > 5, m.left_half = l.left + r / 2 - d / 2 > 5, m.left_full = l.left - d > 5, n.positionDebug({
                    "Clicked Element": {
                        Left: l.left,
                        Top: l.top
                    }
                }), n.positionDebug({
                    "Element Dimensions": {Height: a, Width: r},
                    "Tooltip Dimensions": {Height: u, Width: d},
                    "Window Dimensions": {Height: h, Width: p},
                    "Arrow Dimensions": {Height: g, Width: c}
                }), n.positionDebug(m), ("auto" === t || "bottom" === t) && m.below && m.left_half && m.right_half) n.positionDebug("Displaying below, centered"), e = "top", i = l.left - d / 2 + r / 2, s = l.top + a + g / 2; else if (("auto" === t || "top" === t) && m.above && m.left_half && m.right_half) {
                    if (n.positionDebug("Displaying above, centered"), e = "bottom", n.child_class) {
                        let t = n.dom_wrapped.find(n.child_class).first();
                        i = t.offset().left - d / 2 + t.width() / 2
                    } else i = l.left - d / 2 + r / 2;
                    s = l.top - u - g / 2
                } else ("auto" === t || "left" === t) && m.left && m.vertical_half ? (n.positionDebug("Displaying left, centered"), e = "right", i = l.left - d - c / 2, s = l.top + a / 2 - u / 2) : ("auto" === t || "right" === t) && m.right && m.vertical_half ? (n.positionDebug("Displaying right, centered"), e = "left", i = l.left + r + c / 2, s = l.top + a / 2 - u / 2) : ("auto" === t || "bottom" === t) && m.below && m.right_full ? (n.positionDebug("Displaying below, to the right"), e = "top ulf-arrow-hug-left", i = l.left, s = l.top + a + g / 2) : ("auto" === t || "bottom" === t) && m.below && m.left_full ? (n.positionDebug("Displaying below, to the left"), e = "top ulf-arrow-hug-right", i = l.left + r - d, s = l.top + a + g / 2) : ("auto" === t || "top" === t) && m.above && m.right_full ? (n.positionDebug("Displaying above, to the right"), e = "bottom ulf-arrow-hug-left", i = l.left, s = l.top - u - g / 2) : ("auto" === t || "top" === t) && m.above && m.left_full && (n.positionDebug("Displaying above, to the left"), e = "bottom ulf-arrow-hug-right", i = l.left + r - d, s = l.top - u - g / 2);
                return [e, r, d, u, i, s]
            },
            positionDebug: function (t) {
                return !!n.position_debug && ("object" == typeof t ? console.table(t) : console.log(`Position: ${t}`))
            }
        };
        return n.destroy(), n.initialize()
    }, t.WordpressUlikeTooltip = {}, t.WordpressUlikeTooltip.visible = [], t.WordpressUlikeTooltip.body_click_initialized = !1, t.WordpressUlikeTooltip.defaults = {
        id: Date.now(),
        title: "",
        trigger: "hoverfocus",
        position: "auto",
        class: "",
        theme: "black",
        size: "small",
        singleton: !0,
        close_on_outside_click: !0
    }
}(jQuery), function (t) {
    "use strict";
    var e = "WordpressUlikeNotifications", i = {
        messageType: "success",
        messageText: "Hello World!",
        timeout: 8e3,
        messageElement: "wpulike-message",
        notifContainer: "wpulike-notification"
    };

    function s(s, n) {
        this.element = s, this.$element = t(s), this.settings = t.extend({}, i, n), this._defaults = i, this._name = e, this.init()
    }

    t.extend(s.prototype, {
        init: function () {
            this._message(), this._container(), this._append(), this._remove()
        }, _message: function () {
            this.$messageElement = t("<div/>").addClass(this.settings.messageElement + " wpulike-" + this.settings.messageType).text(this.settings.messageText)
        }, _container: function () {
            t("." + this.settings.notifContainer).length || this.$element.append(t("<div/>").addClass(this.settings.notifContainer)), this.$notifContainer = this.$element.find("." + this.settings.notifContainer)
        }, _append: function () {
            this.$notifContainer.append(this.$messageElement).trigger("WordpressUlikeNotificationAppend")
        }, _remove: function () {
            var e = this;
            this.$messageElement.on("click", (function () {
                t(this).fadeOut(300, (function () {
                    t(this).remove(), t("." + e.settings.messageElement).length || e.$notifContainer.remove()
                })).trigger("WordpressUlikeRemoveNotification")
            })), e.settings.timeout && setTimeout((function () {
                e.$messageElement.fadeOut(300, (function () {
                    t(this).remove(), t("." + e.settings.messageElement).length || e.$notifContainer.remove()
                })).trigger("WordpressUlikeRemoveNotification")
            }), e.settings.timeout)
        }
    }), t.fn[e] = function (t) {
        return this.each((function () {
            new s(this, t)
        }))
    }
}(jQuery, window, document), function (t, e, i) {
    "use strict";
    var s = "WordpressUlike", n = (t(e), t(i)), o = {
        ID: 0,
        nonce: 0,
        type: "",
        append: "",
        appendTimeout: 2e3,
        displayLikers: !1,
        likersTemplate: "default",
        disablePophover: !0,
        isTotal: !1,
        factor: "",
        template: "",
        counterSelector: ".count-box",
        generalSelector: ".wp_ulike_general_class",
        buttonSelector: ".wp_ulike_btn",
        likersSelector: ".wp_ulike_likers_wrapper"
    }, l = {
        "ulike-id": "ID",
        "ulike-nonce": "nonce",
        "ulike-type": "type",
        "ulike-append": "append",
        "ulike-is-total": "isTotal",
        "ulike-display-likers": "displayLikers",
        "ulike-likers-style": "likersTemplate",
        "ulike-disable-pophover": "disablePophover",
        "ulike-append-timeout": "appendTimeout",
        "ulike-factor": "factor",
        "ulike-template": "template"
    };

    function a(e, i) {
        for (var n in this.element = e, this.$element = t(e), this.settings = t.extend({}, o, i), this._defaults = o, this._name = s, this.buttonElement = this.$element.find(this.settings.buttonSelector), l) {
            var a = this.buttonElement.data(n);
            undefined !== a && (this.settings[l[n]] = a)
        }
        this.generalElement = this.$element.find(this.settings.generalSelector), this.counterElement = this.generalElement.find(this.settings.counterSelector), this.counterElement.length && this.counterElement.each(function (e, i) {
            void 0 !== t(i).data("ulike-counter-value") && t(i).html(t(i).data("ulike-counter-value"))
        }.bind(this)), this.likersElement = this.$element.find(this.settings.likersSelector), this.init()
    }

    t.extend(a.prototype, {
        init: function () {
            this.buttonElement.on("click", this._initLike.bind(this)), this.generalElement.one("mouseenter", this._updateLikers.bind(this))
        }, _ajax: function (e, i) {
            t.ajax({url: wp_ulike_params.ajax_url, type: "POST", dataType: "json", data: e}).done(i)
        }, _initLike: function (t) {
            t.stopPropagation(), this._maybeUpdateElements(t), this._updateSameButtons(), this._updateSameLikers(), this.buttonElement.prop("disabled", !0), n.trigger("WordpressUlikeLoading", this.element), this.generalElement.addClass("wp_ulike_is_loading"), this._ajax({
                action: "wp_ulike_process",
                id: this.settings.ID,
                nonce: this.settings.nonce,
                factor: this.settings.factor,
                type: this.settings.type,
                template: this.settings.template,
                displayLikers: this.settings.displayLikers,
                likersTemplate: this.settings.likersTemplate
            }, function (t) {
                this.generalElement.removeClass("wp_ulike_is_loading"), t.success ? (this._updateMarkup(t), this._appendChild()) : t.data.hasToast && this._sendNotification("error", t.data.message), this.buttonElement.prop("disabled", !1), n.trigger("WordpressUlikeUpdated", this.element)
            }.bind(this))
        }, _maybeUpdateElements: function (e) {
            this.buttonElement = t(e.currentTarget), this.generalElement = this.buttonElement.closest(this.settings.generalSelector), this.counterElement = this.generalElement.find(this.settings.counterSelector), this.settings.factor = this.buttonElement.data("ulike-factor")
        }, _appendChild: function () {
            if ("" !== this.settings.append) {
                var e = t(this.settings.append);
                this.buttonElement.append(e), this.settings.appendTimeout && setTimeout((function () {
                    e.detach()
                }), this.settings.appendTimeout)
            }
        }, _updateMarkup: function (t) {
            this._setSbilingElement(), this._setSbilingButtons(), this._updateGeneralClassNames(t.data.status), null !== t.data.data && (5 != t.data.status && (this.__updateCounter(t.data.data), this.settings.displayLikers && void 0 !== t.data.likers && this._updateLikersMarkup(t.data.likers)), this._updateButton(t.data.btnText, t.data.status)), t.data.hasToast && this._sendNotification(t.data.messageType, t.data.message)
        }, _updateGeneralClassNames: function (t) {
            var e = "wp_ulike_is_not_liked", i = "wp_ulike_is_liked", s = "wp_ulike_is_unliked",
                n = "wp_ulike_click_is_disabled";
            switch (this.siblingElement.length && this.siblingElement.removeClass(this._arrayToString([i, s])), t) {
                case 1:
                    this.generalElement.addClass(i).removeClass(e), this.generalElement.children().first().addClass(n);
                    break;
                case 2:
                    this.generalElement.addClass(s).removeClass(i);
                    break;
                case 3:
                    this.generalElement.addClass(i).removeClass(s);
                    break;
                case 0:
                case 5:
                    this.generalElement.addClass(n), this.siblingElement.length && this.siblingElement.addClass(n)
            }
        }, _arrayToString: function (t) {
            return t.join(" ")
        }, _setSbilingElement: function () {
            this.siblingElement = this.generalElement.siblings()
        }, _setSbilingButtons: function () {
            this.siblingButton = this.buttonElement.siblings(this.settings.buttonSelector)
        }, __updateCounter: function (t) {
            this.counterElement.attr("data-ulike-counter-value", t).html(t), n.trigger("WordpressUlikeCounterUpdated", [this.buttonElement])
        }, _updateLikers: function (t) {
            if (this.settings.displayLikers) {
                if ("popover" == this.settings.likersTemplate && this.$element.data("ulike-tooltip")) return;
                if ("default" == this.settings.likersTemplate && this.likersElement.length) return;
                return this.generalElement.addClass("wp_ulike_is_getting_likers_list"), this._ajax({
                    action: "wp_ulike_get_likers",
                    id: this.settings.ID,
                    nonce: this.settings.nonce,
                    type: this.settings.type,
                    displayLikers: this.settings.displayLikers,
                    likersTemplate: this.settings.likersTemplate
                }, function (t) {
                    this.generalElement.removeClass("wp_ulike_is_getting_likers_list"), t.success && this._updateLikersMarkup(t.data)
                }.bind(this)), t.stopImmediatePropagation(), !1
            }
        }, _updateLikersMarkup: function (e) {
            "popover" == this.settings.likersTemplate ? (this.likersElement = this.$element, e.template && this.likersElement.WordpressUlikeTooltip({
                id: this.settings.type.toLowerCase() + "-" + this.settings.ID,
                title: e.template,
                position: "top",
                child: this.settings.generalSelector,
                theme: "white",
                size: "tiny",
                trigger: "hover"
            })) : (this.likersElement.length || (this.likersElement = t(e.template).appendTo(this.$element)), e.template ? this.likersElement.show().html(e.template) : this.likersElement.hide().empty()), n.trigger("WordpressUlikeLikersMarkupUpdated", [this.likersElement, this.settings.likersTemplate, e.template])
        }, _updateSameButtons: function () {
            var t = void 0 !== this.settings.factor ? "_" + this.settings.factor : "";
            this.sameButtons = n.find(".wp_" + this.settings.type.toLowerCase() + t + "_btn_" + this.settings.ID), this.sameButtons.length > 1 && (this.buttonElement = this.sameButtons, this.generalElement = this.buttonElement.closest(this.settings.generalSelector), this.counterElement = this.generalElement.find(this.settings.counterSelector))
        }, _updateSameLikers: function () {
            this.sameLikers = n.find(".wp_" + this.settings.type.toLowerCase() + "_likers_" + this.settings.ID), this.sameLikers.length > 1 && (this.likersElement = this.sameLikers)
        }, _getLikersElement: function () {
            return this.likersElement
        }, _updateButton: function (t, e) {
            this.buttonElement.hasClass("wp_ulike_put_image") ? (4 == e ? this.buttonElement.addClass("image-unlike wp_ulike_btn_is_active") : this.buttonElement.toggleClass("image-unlike wp_ulike_btn_is_active"), this.siblingElement.length && this.siblingElement.find(this.settings.buttonSelector).removeClass("image-unlike wp_ulike_btn_is_active"), this.siblingButton.length && this.siblingButton.removeClass("image-unlike wp_ulike_btn_is_active")) : this.buttonElement.hasClass("wp_ulike_put_text") && null !== t && this.buttonElement.find("span").html(t)
        }, _sendNotification: function (e, s) {
            t(i.body).WordpressUlikeNotifications({messageType: e, messageText: s})
        }
    }), t.fn[s] = function (e) {
        return this.each((function () {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new a(this, e))
        }))
    }
}(jQuery, window, document), function (t) {
    var e, i, s;
    t(".wpulike").WordpressUlike(), e = ".wpulike", i = function (e) {
        t(e).WordpressUlike()
    }, s = t("body")[0], new (window.MutationObserver || window.WebKitMutationObserver)((function (s) {
        s.forEach((function (s) {
            if (s.addedNodes.length) for (var n = t(s.addedNodes).find(e), o = 0, l = n.length; o < l; o++) i(n[o])
        }))
    })).observe(s, {childList: !0, subtree: !0})
}(jQuery);
/*! elementor - v3.30.0 - 09-07-2025 */
(self.webpackChunkelementorFrontend = self.webpackChunkelementorFrontend || []).push([[941], {
    5213: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = (e, t) => {
            t = Array.isArray(t) ? t : [t];
            for (const r of t) if (e.constructor.name === r.prototype[Symbol.toStringTag]) return !0;
            return !1
        }
    }, 2890: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, r(4846), r(6211);

        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        elements: ".elementor-element",
                        nestedDocumentElements: ".elementor .elementor-element"
                    }, classes: {editMode: "elementor-edit-mode"}
                }
            }

            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {$elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}
            }

            getDocumentSettings(e) {
                let t;
                if (this.isEdit) {
                    t = {};
                    const e = elementor.settings.page.model;
                    jQuery.each(e.getActiveControls(), (r => {
                        t[r] = e.attributes[r]
                    }))
                } else t = this.$element.data("elementor-settings") || {};
                return this.getItems(t, e)
            }

            runElementsHandlers() {
                this.elements.$elements.each(((e, t) => setTimeout((() => elementorFrontend.elementsHandler.runReadyTrigger(t)))))
            }

            onInit() {
                this.$element = this.getSettings("$element"), super.onInit(), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.on("document:loaded", (() => {
                    elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                })) : this.runElementsHandlers()
            }

            onSettingsChange() {
            }
        }

        t.default = _default
    }, 9603: (e, t, r) => {
        "use strict";
        var n = r(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, r(4846), r(6211), r(9655);
        var i = n(r(5633));

        class CarouselHandlerBase extends i.default {
            getDefaultSettings() {
                return {
                    selectors: {
                        carousel: ".swiper",
                        swiperWrapper: ".swiper-wrapper",
                        slideContent: ".swiper-slide",
                        swiperArrow: ".elementor-swiper-button",
                        paginationWrapper: ".swiper-pagination",
                        paginationBullet: ".swiper-pagination-bullet",
                        paginationBulletWrapper: ".swiper-pagination-bullets"
                    }
                }
            }

            getDefaultElements() {
                const e = this.getSettings("selectors"), t = {
                    $swiperContainer: this.$element.find(e.carousel),
                    $swiperWrapper: this.$element.find(e.swiperWrapper),
                    $swiperArrows: this.$element.find(e.swiperArrow),
                    $paginationWrapper: this.$element.find(e.paginationWrapper),
                    $paginationBullets: this.$element.find(e.paginationBullet),
                    $paginationBulletWrapper: this.$element.find(e.paginationBulletWrapper)
                };
                return t.$slides = t.$swiperContainer.find(e.slideContent), t
            }

            getSwiperSettings() {
                const e = this.getElementSettings(), t = +e.slides_to_show || 3, r = 1 === t,
                    n = elementorFrontend.config.responsive.activeBreakpoints, i = {mobile: 1, tablet: r ? 1 : 2}, s = {
                        slidesPerView: t,
                        loop: "yes" === e.infinite,
                        speed: e.speed,
                        handleElementorBreakpoints: !0,
                        breakpoints: {}
                    };
                let o = t;
                Object.keys(n).reverse().forEach((t => {
                    const r = i[t] ? i[t] : o;
                    s.breakpoints[n[t].value] = {
                        slidesPerView: +e["slides_to_show_" + t] || r,
                        slidesPerGroup: +e["slides_to_scroll_" + t] || 1
                    }, e.image_spacing_custom && (s.breakpoints[n[t].value].spaceBetween = this.getSpaceBetween(t)), o = +e["slides_to_show_" + t] || r
                })), "yes" === e.autoplay && (s.autoplay = {
                    delay: e.autoplay_speed,
                    disableOnInteraction: "yes" === e.pause_on_interaction
                }), r ? (s.effect = e.effect, "fade" === e.effect && (s.fadeEffect = {crossFade: !0})) : s.slidesPerGroup = +e.slides_to_scroll || 1, e.image_spacing_custom && (s.spaceBetween = this.getSpaceBetween());
                const a = "arrows" === e.navigation || "both" === e.navigation,
                    c = "dots" === e.navigation || "both" === e.navigation || e.pagination;
                return a && (s.navigation = {
                    prevEl: ".elementor-swiper-button-prev",
                    nextEl: ".elementor-swiper-button-next"
                }), c && (s.pagination = {
                    el: `.elementor-element-${this.getID()} .swiper-pagination`,
                    type: e.pagination ? e.pagination : "bullets",
                    clickable: !0,
                    renderBullet: (e, t) => `<span class="${t}" role="button" tabindex="0" data-bullet-index="${e}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${e + 1}"></span>`
                }), "yes" === e.lazyload && (s.lazy = {loadPrevNext: !0, loadPrevNextAmount: 1}), s.a11y = {
                    enabled: !0,
                    prevSlideMessage: elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
                    nextSlideMessage: elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
                    firstSlideMessage: elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
                    lastSlideMessage: elementorFrontend.config.i18n.a11yCarouselLastSlideMessage
                }, s.on = {
                    slideChange: () => {
                        this.a11ySetPaginationTabindex(), this.handleElementHandlers(), this.a11ySetSlideAriaHidden()
                    }, init: () => {
                        this.a11ySetPaginationTabindex(), this.a11ySetSlideAriaHidden("initialisation")
                    }
                }, this.applyOffsetSettings(e, s, t), s
            }

            getOffsetWidth() {
                const e = elementorFrontend.getCurrentDeviceMode();
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "offset_width", "size", e) || 0
            }

            applyOffsetSettings(e, t, r) {
                const n = e.offset_sides;
                if (!(elementorFrontend.isEditMode() && "NestedCarousel" === this.constructor.name) && n && "none" !== n) switch (n) {
                    case"right":
                        this.forceSliderToShowNextSlideWhenOnLast(t, r), this.addClassToSwiperContainer("offset-right");
                        break;
                    case"left":
                        this.addClassToSwiperContainer("offset-left");
                        break;
                    case"both":
                        this.forceSliderToShowNextSlideWhenOnLast(t, r), this.addClassToSwiperContainer("offset-both")
                }
            }

            forceSliderToShowNextSlideWhenOnLast(e, t) {
                e.slidesPerView = t + .001
            }

            addClassToSwiperContainer(e) {
                this.getDefaultElements().$swiperContainer[0].classList.add(e)
            }

            async onInit() {
                if (super.onInit(...arguments), !this.elements.$swiperContainer.length || 2 > this.elements.$slides.length) return;
                await this.initSwiper();
                "yes" === this.getElementSettings().pause_on_hover && this.togglePauseOnHover(!0)
            }

            async initSwiper() {
                const e = elementorFrontend.utils.swiper;
                this.swiper = await new e(this.elements.$swiperContainer, this.getSwiperSettings()), this.elements.$swiperContainer.data("swiper", this.swiper)
            }

            bindEvents() {
                this.elements.$swiperArrows.on("keydown", this.onDirectionArrowKeydown.bind(this)), this.elements.$paginationWrapper.on("keydown", ".swiper-pagination-bullet", this.onDirectionArrowKeydown.bind(this)), this.elements.$swiperContainer.on("keydown", ".swiper-slide", this.onDirectionArrowKeydown.bind(this)), this.$element.find(":focusable").on("focus", this.onFocusDisableAutoplay.bind(this)), elementorFrontend.elements.$window.on("resize", this.getSwiperSettings.bind(this))
            }

            unbindEvents() {
                this.elements.$swiperArrows.off(), this.elements.$paginationWrapper.off(), this.elements.$swiperContainer.off(), this.$element.find(":focusable").off(), elementorFrontend.elements.$window.off("resize")
            }

            onDirectionArrowKeydown(e) {
                const t = elementorFrontend.config.is_rtl, r = e.originalEvent.code, n = t ? "ArrowLeft" : "ArrowRight";
                if (!(-1 !== ["ArrowLeft", "ArrowRight"].indexOf(r))) return !0;
                (t ? "ArrowRight" : "ArrowLeft") === r ? this.swiper.slidePrev() : n === r && this.swiper.slideNext()
            }

            onFocusDisableAutoplay() {
                this.swiper.autoplay.stop()
            }

            updateSwiperOption(e) {
                const t = this.getElementSettings()[e], r = this.swiper.params;
                switch (e) {
                    case"autoplay_speed":
                        r.autoplay.delay = t;
                        break;
                    case"speed":
                        r.speed = t
                }
                this.swiper.update()
            }

            getChangeableProperties() {
                return {
                    pause_on_hover: "pauseOnHover",
                    autoplay_speed: "delay",
                    speed: "speed",
                    arrows_position: "arrows_position"
                }
            }

            onElementChange(e) {
                if (0 === e.indexOf("image_spacing_custom")) return void this.updateSpaceBetween(e);
                if (this.getChangeableProperties()[e]) if ("pause_on_hover" === e) {
                    const e = this.getElementSettings("pause_on_hover");
                    this.togglePauseOnHover("yes" === e)
                } else this.updateSwiperOption(e)
            }

            onEditSettingsChange(e) {
                "activeItemIndex" === e && this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1)
            }

            getSpaceBetween() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                const t = elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "image_spacing_custom", "size", e);
                return Number(t) || 0
            }

            updateSpaceBetween(e) {
                const t = e.match("image_spacing_custom_(.*)"), r = t ? t[1] : "desktop", n = this.getSpaceBetween(r);
                "desktop" !== r && (this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[r].value].spaceBetween = n), this.swiper.params.spaceBetween = n, this.swiper.update()
            }

            getPaginationBullets() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "array";
                const t = this.$element.find(this.getSettings("selectors").paginationBullet);
                return "array" === e ? Array.from(t) : t
            }

            a11ySetPaginationTabindex() {
                const e = this.swiper?.params?.pagination.bulletClass,
                    t = this.swiper?.params?.pagination.bulletActiveClass;
                this.getPaginationBullets().forEach((e => {
                    e.classList?.contains(t) || e.removeAttribute("tabindex")
                }));
                const r = "ArrowLeft" === event?.code || "ArrowRight" === event?.code;
                event?.target?.classList?.contains(e) && r && this.$element.find(`.${t}`).trigger("focus")
            }

            getSwiperWrapperTranformXValue() {
                let e = this.elements.$swiperWrapper[0]?.style.transform;
                return e = e.replace("translate3d(", ""), e = e.split(","), e = parseInt(e[0].replace("px", "")), e || 0
            }

            a11ySetSlideAriaHidden() {
                if ("number" != typeof ("initialisation" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") ? 0 : this.swiper?.activeIndex)) return;
                const e = this.getSwiperWrapperTranformXValue(), t = this.elements.$swiperWrapper[0].clientWidth;
                this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each(((r, n) => {
                    0 <= n.offsetLeft + e && t > n.offsetLeft + e ? (n.removeAttribute("aria-hidden"), n.removeAttribute("inert")) : (n.setAttribute("aria-hidden", !0), n.setAttribute("inert", ""))
                }))
            }

            handleElementHandlers() {
            }
        }

        t.default = CarouselHandlerBase
    }, 5633: (e, t, r) => {
        "use strict";
        var n = r(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = n(r(7224));

        class SwiperHandlerBase extends i.default {
            getInitialSlide() {
                const e = this.getEditSettings();
                return e.activeItemIndex ? e.activeItemIndex - 1 : 0
            }

            getSlidesCount() {
                return this.elements.$slides.length
            }

            togglePauseOnHover(e) {
                e ? this.elements.$swiperContainer.on({
                    mouseenter: () => {
                        this.swiper.autoplay.stop()
                    }, mouseleave: () => {
                        this.swiper.autoplay.start()
                    }
                }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
            }

            handleKenBurns() {
                const e = this.getSettings();
                this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive), this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(), this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground), this.$activeImageBg.addClass(e.classes.kenBurnsActive)
            }
        }

        t.default = SwiperHandlerBase
    }, 7224: (e, t, r) => {
        "use strict";
        r(5724), r(4846), r(7458), r(6211), r(9655), e.exports = elementorModules.ViewModule.extend({
            $element: null,
            editorListeners: null,
            onElementChange: null,
            onEditSettingsChange: null,
            onPageSettingsChange: null,
            isEdit: null,
            __construct(e) {
                this.isActive(e) && (this.$element = e.$element, this.isEdit = this.$element.hasClass("elementor-element-edit-mode"), this.isEdit && this.addEditorListeners())
            },
            isActive: () => !0,
            isElementInTheCurrentDocument() {
                return !!elementorFrontend.isEditMode() && elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId
            },
            findElement(e) {
                var t = this.$element;
                return t.find(e).filter((function () {
                    return jQuery(this).parent().closest(".elementor-element").is(t)
                }))
            },
            getUniqueHandlerID(e, t) {
                return e || (e = this.getModelCID()), t || (t = this.$element), e + t.attr("data-element_type") + this.getConstructorID()
            },
            initEditorListeners() {
                var e = this;
                if (e.editorListeners = [{
                    event: "element:destroy", to: elementor.channels.data, callback(t) {
                        t.cid === e.getModelCID() && e.onDestroy()
                    }
                }], e.onElementChange) {
                    const t = e.getWidgetType() || e.getElementType();
                    let r = "change";
                    "global" !== t && (r += ":" + t), e.editorListeners.push({
                        event: r,
                        to: elementor.channels.editor,
                        callback(t, r) {
                            e.getUniqueHandlerID(r.model.cid, r.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, r)
                        }
                    })
                }
                e.onEditSettingsChange && e.editorListeners.push({
                    event: "change:editSettings",
                    to: elementor.channels.editor,
                    callback(t, r) {
                        if (r.model.cid !== e.getModelCID()) return;
                        const n = Object.keys(t.changed)[0];
                        e.onEditSettingsChange(n, t.changed[n])
                    }
                }), ["page"].forEach((function (t) {
                    var r = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                    e[r] && e.editorListeners.push({
                        event: "change", to: elementor.settings[t].model, callback(t) {
                            e[r](t.changed)
                        }
                    })
                }))
            },
            getEditorListeners() {
                return this.editorListeners || this.initEditorListeners(), this.editorListeners
            },
            addEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function (t) {
                    elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                }))
            },
            removeEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function (t) {
                    elementorFrontend.removeListeners(e, t.event, null, t.to)
                }))
            },
            getElementType() {
                return this.$element.data("element_type")
            },
            getWidgetType() {
                const e = this.$element.data("widget_type");
                if (e) return e.split(".")[0]
            },
            getID() {
                return this.$element.data("id")
            },
            getModelCID() {
                return this.$element.data("model-cid")
            },
            getElementSettings(e) {
                let t = {};
                const r = this.getModelCID();
                if (this.isEdit && r) {
                    const e = elementorFrontend.config.elements.data[r], n = e.attributes;
                    let i = n.widgetType || n.elType;
                    n.isInner && (i = "inner-" + i);
                    let s = elementorFrontend.config.elements.keys[i];
                    s || (s = elementorFrontend.config.elements.keys[i] = [], jQuery.each(e.controls, ((e, t) => {
                        (t.frontend_available || t.editor_available) && s.push(e)
                    }))), jQuery.each(e.getActiveControls(), (function (e) {
                        if (-1 !== s.indexOf(e)) {
                            let r = n[e];
                            r.toJSON && (r = r.toJSON()), t[e] = r
                        }
                    }))
                } else t = this.$element.data("settings") || {};
                return this.getItems(t, e)
            },
            getEditSettings(e) {
                var t = {};
                return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes), this.getItems(t, e)
            },
            getCurrentDeviceSetting(e) {
                return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
            },
            onInit() {
                this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            },
            onDestroy() {
                this.isEdit && this.removeEditorListeners(), this.unbindEvents && this.unbindEvents()
            }
        })
    }, 8140: (e, t, r) => {
        "use strict";
        var n = r(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, r(4846), r(6211);
        var i = n(r(7224));

        class StretchedElement extends i.default {
            getStretchedClass() {
                return "e-stretched"
            }

            getStretchSettingName() {
                return "stretch_element"
            }

            getStretchActiveValue() {
                return "yes"
            }

            bindEvents() {
                const e = this.getUniqueHandlerID();
                elementorFrontend.addListenerOnce(e, "resize", this.stretch), elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element), elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element), elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this), elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
            }

            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch), elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
            }

            isActive(e) {
                return elementorFrontend.isEditMode() || e.$element.hasClass(this.getStretchedClass())
            }

            getStretchElementForConfig() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e ? this.$element.find(e) : this.$element
            }

            getStretchElementConfig() {
                return {
                    element: this.getStretchElementForConfig(),
                    selectors: {container: this.getStretchContainer()},
                    considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
                }
            }

            initStretch() {
                this.stretch = this.stretch.bind(this), this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())
            }

            getStretchContainer() {
                return elementorFrontend.getKitSettings("stretched_section_container") || window
            }

            isStretchSettingEnabled() {
                return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue()
            }

            stretch() {
                this.isStretchSettingEnabled() && this.stretchElement.stretch()
            }

            onInit() {
                this.isActive(this.getSettings()) && (this.initStretch(), super.onInit(...arguments), this.stretch())
            }

            onElementChange(e) {
                this.getStretchSettingName() === e && (this.isStretchSettingEnabled() ? this.stretch() : this.stretchElement.reset())
            }

            onKitChangeStretchContainerChange() {
                this.stretchElement.setSettings("selectors.container", this.getStretchContainer()), this.stretch()
            }
        }

        t.default = StretchedElement
    }, 4946: (e, t, r) => {
        "use strict";
        var n = r(6784), i = n(r(1265)), s = n(r(2890)), o = n(r(7955)), a = n(r(8140)), c = n(r(7224)), l = n(r(5633)),
            u = n(r(9603));
        i.default.frontend = {
            Document: s.default,
            tools: {StretchElement: o.default},
            handlers: {Base: c.default, StretchedElement: a.default, SwiperBase: l.default, CarouselBase: u.default}
        }
    }, 7955: e => {
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: () => ({
                element: null,
                direction: elementorFrontend.config.is_rtl ? "right" : "left",
                selectors: {container: window},
                considerScrollbar: !1,
                cssOutput: "inline"
            }), getDefaultElements() {
                return {$element: jQuery(this.getSettings("element"))}
            }, stretch() {
                const e = this.getSettings();
                let t;
                try {
                    t = jQuery(e.selectors.container)
                } catch (e) {
                }
                t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)), this.reset();
                var r = this.elements.$element, n = t.innerWidth(), i = r.offset().left,
                    s = "fixed" === r.css("position"), o = s ? 0 : i, a = window === t[0];
                if (!a) {
                    var c = t.offset().left;
                    s && (o = c), i > c && (o = i - c)
                }
                if (e.considerScrollbar && a) {
                    o -= window.innerWidth - n
                }
                s || (elementorFrontend.config.is_rtl && (o = n - (r.outerWidth() + o)), o = -o), e.margin && (o += e.margin);
                var l = {};
                let u = n;
                e.margin && (u -= 2 * e.margin), l.width = u + "px", l[e.direction] = o + "px", "variables" !== e.cssOutput ? r.css(l) : this.applyCssVariables(r, l)
            }, reset() {
                const e = {}, t = this.getSettings(), r = this.elements.$element;
                "variables" !== t.cssOutput ? (e.width = "", e[t.direction] = "", r.css(e)) : this.resetCssVariables(r)
            }, applyCssVariables(e, t) {
                e.css("--stretch-width", t.width), t.left ? e.css("--stretch-left", t.left) : e.css("--stretch-right", t.right)
            }, resetCssVariables(e) {
                e.css({"--stretch-width": "", "--stretch-left": "", "--stretch-right": ""})
            }
        })
    }, 2946: (e, t, r) => {
        "use strict";
        var n = r(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = n(r(751)), s = n(r(5213));

        class ArgsObject extends i.default {
            static getInstanceType() {
                return "ArgsObject"
            }

            constructor(e) {
                super(), this.args = e
            }

            requireArgument(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.args;
                if (!Object.prototype.hasOwnProperty.call(t, e)) throw Error(`${e} is required.`)
            }

            requireArgumentType(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, r), typeof r[e] !== t) throw Error(`${e} invalid type: ${t}.`)
            }

            requireArgumentInstance(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, r), !(r[e] instanceof t || (0, s.default)(r[e], t))) throw Error(`${e} invalid instance.`)
            }

            requireArgumentConstructor(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, r), r[e].constructor.toString() !== t.prototype.constructor.toString()) throw Error(`${e} invalid constructor type.`)
            }
        }

        t.default = ArgsObject
    }, 8685: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = t.ForceMethodImplementation = void 0, r(6281);

        class ForceMethodImplementation extends Error {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(`${e.isStatic ? "static " : ""}${e.fullName}() should be implemented, please provide '${e.functionName || e.fullName}' functionality.`, t), Object.keys(t).length && console.error(t), Error.captureStackTrace(this, ForceMethodImplementation)
            }
        }

        t.ForceMethodImplementation = ForceMethodImplementation;
        t.default = e => {
            const t = Error().stack.split("\n")[2].trim(), r = t.startsWith("at new") ? "constructor" : t.split(" ")[1],
                n = {};
            if (n.functionName = r, n.fullName = r, n.functionName.includes(".")) {
                const e = n.functionName.split(".");
                n.className = e[0], n.functionName = e[1]
            } else n.isStatic = !0;
            throw new ForceMethodImplementation(n, e)
        }
    }, 751: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, r(5724), r(4846), r(9655);

        class InstanceType {
            static [Symbol.hasInstance](e) {
                let t = super[Symbol.hasInstance](e);
                if (e && !e.constructor.getInstanceType) return t;
                if (e && (e.instanceTypes || (e.instanceTypes = []), t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0), t)) {
                    const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
                    -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                }
                return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())), t
            }

            static getInstanceType() {
                elementorModules.ForceMethodImplementation()
            }

            constructor() {
                let e = new.target;
                const t = [];
                for (; e.__proto__ && e.__proto__.name;) t.push(e.__proto__), e = e.__proto__;
                t.reverse().forEach((e => this instanceof e))
            }
        }

        t.default = InstanceType
    }, 641: (e, t, r) => {
        "use strict";
        r(5724), r(4846), r(7458), r(9655);
        const Module = function () {
            const e = jQuery, t = arguments, r = this, n = {};
            let i;
            this.getItems = function (e, t) {
                if (t) {
                    const r = t.split("."), n = r.splice(0, 1);
                    if (!r.length) return e[n];
                    if (!e[n]) return;
                    return this.getItems(e[n], r.join("."))
                }
                return e
            }, this.getSettings = function (e) {
                return this.getItems(i, e)
            }, this.setSettings = function (t, n, s) {
                if (s || (s = i), "object" == typeof t) return e.extend(s, t), r;
                const o = t.split("."), a = o.splice(0, 1);
                return o.length ? (s[a] || (s[a] = {}), r.setSettings(o.join("."), n, s[a])) : (s[a] = n, r)
            }, this.getErrorMessage = function (e, t) {
                let r;
                if ("forceMethodImplementation" === e) r = `The method '${t}' must to be implemented in the inheritor child.`; else r = "An error occurs";
                return r
            }, this.forceMethodImplementation = function (e) {
                throw new Error(this.getErrorMessage("forceMethodImplementation", e))
            }, this.on = function (t, i) {
                if ("object" == typeof t) return e.each(t, (function (e) {
                    r.on(e, this)
                })), r;
                return t.split(" ").forEach((function (e) {
                    n[e] || (n[e] = []), n[e].push(i)
                })), r
            }, this.off = function (e, t) {
                if (!n[e]) return r;
                if (!t) return delete n[e], r;
                const i = n[e].indexOf(t);
                return -1 !== i && (delete n[e][i], n[e] = n[e].filter((e => e))), r
            }, this.trigger = function (t) {
                const i = "on" + t[0].toUpperCase() + t.slice(1), s = Array.prototype.slice.call(arguments, 1);
                r[i] && r[i].apply(r, s);
                const o = n[t];
                return o ? (e.each(o, (function (e, t) {
                    t.apply(r, s)
                })), r) : r
            }, r.__construct.apply(r, t), e.each(r, (function (e) {
                const t = r[e];
                "function" == typeof t && (r[e] = function () {
                    return t.apply(r, arguments)
                })
            })), function () {
                i = r.getDefaultSettings();
                const n = t[0];
                n && e.extend(!0, i, n)
            }(), r.trigger("init")
        };
        Module.prototype.__construct = function () {
        }, Module.prototype.getDefaultSettings = function () {
            return {}
        }, Module.prototype.getConstructorID = function () {
            return this.constructor.name
        }, Module.extend = function (e) {
            const t = jQuery, r = this, child = function () {
                return r.apply(this, arguments)
            };
            return t.extend(child, r), (child.prototype = Object.create(t.extend({}, r.prototype, e))).constructor = child, child.__super__ = r.prototype, child
        }, e.exports = Module
    }, 3980: (e, t, r) => {
        "use strict";
        var n = r(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, r(5724);
        var i = n(r(2425));
        t.default = i.default.extend({
            getDefaultSettings: () => ({
                container: null,
                items: null,
                columnsCount: 3,
                verticalSpaceBetween: 30
            }), getDefaultElements() {
                return {$container: jQuery(this.getSettings("container")), $items: jQuery(this.getSettings("items"))}
            }, run() {
                var e = [], t = this.elements.$container.position().top, r = this.getSettings(), n = r.columnsCount;
                t += parseInt(this.elements.$container.css("margin-top"), 10), this.elements.$items.each((function (i) {
                    var s = Math.floor(i / n), o = jQuery(this),
                        a = o[0].getBoundingClientRect().height + r.verticalSpaceBetween;
                    if (s) {
                        var c = o.position(), l = i % n, u = c.top - t - e[l];
                        u -= parseInt(o.css("margin-top"), 10), u *= -1, o.css("margin-top", u + "px"), e[l] += a
                    } else e.push(a)
                }))
            }
        })
    }, 2970: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, r(5724);
        t.default = class Scroll {
            static scrollObserver(e) {
                let t = 0;
                const r = {
                    root: e.root || null, rootMargin: e.offset || "0px", threshold: function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        const t = [];
                        if (e > 0 && e <= 100) {
                            const r = 100 / e;
                            for (let e = 0; e <= 100; e += r) t.push(e / 100)
                        } else t.push(0);
                        return t
                    }(e.sensitivity)
                };
                return new IntersectionObserver((function handleIntersect(r) {
                    const n = r[0].boundingClientRect.y, i = r[0].isIntersecting, s = n < t ? "down" : "up",
                        o = Math.abs(parseFloat((100 * r[0].intersectionRatio).toFixed(2)));
                    e.callback({
                        sensitivity: e.sensitivity,
                        isInViewport: i,
                        scrollPercentage: o,
                        intersectionScrollDirection: s
                    }), t = n
                }), r)
            }

            static getElementViewportPercentage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const r = e[0].getBoundingClientRect(), n = t.start || 0, i = t.end || 0,
                    s = window.innerHeight * n / 100, o = window.innerHeight * i / 100, a = r.top - window.innerHeight,
                    c = 0 - a + s, l = r.top + s + e.height() - a + o, u = Math.max(0, Math.min(c / l, 1));
                return parseFloat((100 * u).toFixed(2))
            }

            static getPageScrollPercentage() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                const r = e.start || 0, n = e.end || 0,
                    i = t || document.documentElement.scrollHeight - document.documentElement.clientHeight,
                    s = i * r / 100, o = i + s + i * n / 100;
                return (document.documentElement.scrollTop + document.body.scrollTop + s) / o * 100
            }
        }
    }, 2425: (e, t, r) => {
        "use strict";
        var n = r(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = n(r(641));
        t.default = i.default.extend({
            elements: null, getDefaultElements: () => ({}), bindEvents() {
            }, onInit() {
                this.initElements(), this.bindEvents()
            }, initElements() {
                this.elements = this.getDefaultElements()
            }
        })
    }, 1265: (e, t, r) => {
        "use strict";
        var n = r(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = n(r(641)), s = n(r(2425)), o = n(r(2946)), a = n(r(3980)), c = n(r(2970)), l = n(r(8685));
        t.default = window.elementorModules = {
            Module: i.default,
            ViewModule: s.default,
            ArgsObject: o.default,
            ForceMethodImplementation: l.default,
            utils: {Masonry: a.default, Scroll: c.default}
        }
    }, 6784: e => {
        e.exports = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {default: e}
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, 8120: (e, t, r) => {
        "use strict";
        var n = r(1483), i = r(8761), s = TypeError;
        e.exports = function (e) {
            if (n(e)) return e;
            throw new s(i(e) + " is not a function")
        }
    }, 7095: (e, t, r) => {
        "use strict";
        var n = r(1), i = r(5290), s = r(5835).f, o = n("unscopables"), a = Array.prototype;
        void 0 === a[o] && s(a, o, {configurable: !0, value: i(null)}), e.exports = function (e) {
            a[o][e] = !0
        }
    }, 6021: (e, t, r) => {
        "use strict";
        var n = r(4815), i = TypeError;
        e.exports = function (e, t) {
            if (n(t, e)) return e;
            throw new i("Incorrect invocation")
        }
    }, 2293: (e, t, r) => {
        "use strict";
        var n = r(1704), i = String, s = TypeError;
        e.exports = function (e) {
            if (n(e)) return e;
            throw new s(i(e) + " is not an object")
        }
    }, 6651: (e, t, r) => {
        "use strict";
        var n = r(5599), i = r(3392), s = r(6960), createMethod = function (e) {
            return function (t, r, o) {
                var a = n(t), c = s(a);
                if (0 === c) return !e && -1;
                var l, u = i(o, c);
                if (e && r != r) {
                    for (; c > u;) if ((l = a[u++]) != l) return !0
                } else for (; c > u; u++) if ((e || u in a) && a[u] === r) return e || u || 0;
                return !e && -1
            }
        };
        e.exports = {includes: createMethod(!0), indexOf: createMethod(!1)}
    }, 9273: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(4914), s = TypeError, o = Object.getOwnPropertyDescriptor, a = n && !function () {
            if (void 0 !== this) return !0;
            try {
                Object.defineProperty([], "length", {writable: !1}).length = 1
            } catch (e) {
                return e instanceof TypeError
            }
        }();
        e.exports = a ? function (e, t) {
            if (i(e) && !o(e, "length").writable) throw new s("Cannot set read only .length");
            return e.length = t
        } : function (e, t) {
            return e.length = t
        }
    }, 8901: (e, t, r) => {
        "use strict";
        var n = r(2293), i = r(6721);
        e.exports = function (e, t, r, s) {
            try {
                return s ? t(n(r)[0], r[1]) : t(r)
            } catch (t) {
                i(e, "throw", t)
            }
        }
    }, 1278: (e, t, r) => {
        "use strict";
        var n = r(4762), i = n({}.toString), s = n("".slice);
        e.exports = function (e) {
            return s(i(e), 8, -1)
        }
    }, 6145: (e, t, r) => {
        "use strict";
        var n = r(4338), i = r(1483), s = r(1278), o = r(1)("toStringTag"), a = Object,
            c = "Arguments" === s(function () {
                return arguments
            }());
        e.exports = n ? s : function (e) {
            var t, r, n;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = a(e), o)) ? r : c ? s(t) : "Object" === (n = s(t)) && i(t.callee) ? "Arguments" : n
        }
    }, 6726: (e, t, r) => {
        "use strict";
        var n = r(5755), i = r(9497), s = r(4961), o = r(5835);
        e.exports = function (e, t, r) {
            for (var a = i(t), c = o.f, l = s.f, u = 0; u < a.length; u++) {
                var d = a[u];
                n(e, d) || r && n(r, d) || c(e, d, l(t, d))
            }
        }
    }, 9441: (e, t, r) => {
        "use strict";
        var n = r(8473);
        e.exports = !n((function () {
            function F() {
            }

            return F.prototype.constructor = null, Object.getPrototypeOf(new F) !== F.prototype
        }))
    }, 5247: e => {
        "use strict";
        e.exports = function (e, t) {
            return {value: e, done: t}
        }
    }, 9037: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(5835), s = r(7738);
        e.exports = n ? function (e, t, r) {
            return i.f(e, t, s(1, r))
        } : function (e, t, r) {
            return e[t] = r, e
        }
    }, 7738: e => {
        "use strict";
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, 670: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(5835), s = r(7738);
        e.exports = function (e, t, r) {
            n ? i.f(e, t, s(0, r)) : e[t] = r
        }
    }, 3864: (e, t, r) => {
        "use strict";
        var n = r(169), i = r(5835);
        e.exports = function (e, t, r) {
            return r.get && n(r.get, t, {getter: !0}), r.set && n(r.set, t, {setter: !0}), i.f(e, t, r)
        }
    }, 7914: (e, t, r) => {
        "use strict";
        var n = r(1483), i = r(5835), s = r(169), o = r(2095);
        e.exports = function (e, t, r, a) {
            a || (a = {});
            var c = a.enumerable, l = void 0 !== a.name ? a.name : t;
            if (n(r) && s(r, l, a), a.global) c ? e[t] = r : o(t, r); else {
                try {
                    a.unsafe ? e[t] && (c = !0) : delete e[t]
                } catch (e) {
                }
                c ? e[t] = r : i.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !a.nonConfigurable,
                    writable: !a.nonWritable
                })
            }
            return e
        }
    }, 2313: (e, t, r) => {
        "use strict";
        var n = r(7914);
        e.exports = function (e, t, r) {
            for (var i in t) n(e, i, t[i], r);
            return e
        }
    }, 2095: (e, t, r) => {
        "use strict";
        var n = r(5578), i = Object.defineProperty;
        e.exports = function (e, t) {
            try {
                i(n, e, {value: t, configurable: !0, writable: !0})
            } catch (r) {
                n[e] = t
            }
            return t
        }
    }, 382: (e, t, r) => {
        "use strict";
        var n = r(8473);
        e.exports = !n((function () {
            return 7 !== Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }))
    }, 3145: (e, t, r) => {
        "use strict";
        var n = r(5578), i = r(1704), s = n.document, o = i(s) && i(s.createElement);
        e.exports = function (e) {
            return o ? s.createElement(e) : {}
        }
    }, 1091: e => {
        "use strict";
        var t = TypeError;
        e.exports = function (e) {
            if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
            return e
        }
    }, 4741: e => {
        "use strict";
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, 9461: (e, t, r) => {
        "use strict";
        var n = r(5578).navigator, i = n && n.userAgent;
        e.exports = i ? String(i) : ""
    }, 6477: (e, t, r) => {
        "use strict";
        var n, i, s = r(5578), o = r(9461), a = s.process, c = s.Deno, l = a && a.versions || c && c.version,
            u = l && l.v8;
        u && (i = (n = u.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && o && (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (i = +n[1]), e.exports = i
    }, 8612: (e, t, r) => {
        "use strict";
        var n = r(5578), i = r(4961).f, s = r(9037), o = r(7914), a = r(2095), c = r(6726), l = r(8730);
        e.exports = function (e, t) {
            var r, u, d, p, h, f = e.target, g = e.global, m = e.stat;
            if (r = g ? n : m ? n[f] || a(f, {}) : n[f] && n[f].prototype) for (u in t) {
                if (p = t[u], d = e.dontCallGetSet ? (h = i(r, u)) && h.value : r[u], !l(g ? u : f + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
                    if (typeof p == typeof d) continue;
                    c(p, d)
                }
                (e.sham || d && d.sham) && s(p, "sham", !0), o(r, u, p, e)
            }
        }
    }, 8473: e => {
        "use strict";
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, 2914: (e, t, r) => {
        "use strict";
        var n = r(3786), i = r(8120), s = r(274), o = n(n.bind);
        e.exports = function (e, t) {
            return i(e), void 0 === t ? e : s ? o(e, t) : function () {
                return e.apply(t, arguments)
            }
        }
    }, 274: (e, t, r) => {
        "use strict";
        var n = r(8473);
        e.exports = !n((function () {
            var e = function () {
            }.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        }))
    }, 1807: (e, t, r) => {
        "use strict";
        var n = r(274), i = Function.prototype.call;
        e.exports = n ? i.bind(i) : function () {
            return i.apply(i, arguments)
        }
    }, 2048: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(5755), s = Function.prototype, o = n && Object.getOwnPropertyDescriptor, a = i(s, "name"),
            c = a && "something" === function something() {
            }.name, l = a && (!n || n && o(s, "name").configurable);
        e.exports = {EXISTS: a, PROPER: c, CONFIGURABLE: l}
    }, 3786: (e, t, r) => {
        "use strict";
        var n = r(1278), i = r(4762);
        e.exports = function (e) {
            if ("Function" === n(e)) return i(e)
        }
    }, 4762: (e, t, r) => {
        "use strict";
        var n = r(274), i = Function.prototype, s = i.call, o = n && i.bind.bind(s, s);
        e.exports = n ? o : function (e) {
            return function () {
                return s.apply(e, arguments)
            }
        }
    }, 1409: (e, t, r) => {
        "use strict";
        var n = r(5578), i = r(1483);
        e.exports = function (e, t) {
            return arguments.length < 2 ? (r = n[e], i(r) ? r : void 0) : n[e] && n[e][t];
            var r
        }
    }, 41: e => {
        "use strict";
        e.exports = function (e) {
            return {iterator: e, next: e.next, done: !1}
        }
    }, 6665: (e, t, r) => {
        "use strict";
        var n = r(6145), i = r(2564), s = r(5983), o = r(6775), a = r(1)("iterator");
        e.exports = function (e) {
            if (!s(e)) return i(e, a) || i(e, "@@iterator") || o[n(e)]
        }
    }, 4887: (e, t, r) => {
        "use strict";
        var n = r(1807), i = r(8120), s = r(2293), o = r(8761), a = r(6665), c = TypeError;
        e.exports = function (e, t) {
            var r = arguments.length < 2 ? a(e) : t;
            if (i(r)) return s(n(r, e));
            throw new c(o(e) + " is not iterable")
        }
    }, 2564: (e, t, r) => {
        "use strict";
        var n = r(8120), i = r(5983);
        e.exports = function (e, t) {
            var r = e[t];
            return i(r) ? void 0 : n(r)
        }
    }, 5578: function (e, t, r) {
        "use strict";
        var check = function (e) {
            return e && e.Math === Math && e
        };
        e.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof r.g && r.g) || check("object" == typeof this && this) || function () {
            return this
        }() || Function("return this")()
    }, 5755: (e, t, r) => {
        "use strict";
        var n = r(4762), i = r(2347), s = n({}.hasOwnProperty);
        e.exports = Object.hasOwn || function hasOwn(e, t) {
            return s(i(e), t)
        }
    }, 1507: e => {
        "use strict";
        e.exports = {}
    }, 2811: (e, t, r) => {
        "use strict";
        var n = r(1409);
        e.exports = n("document", "documentElement")
    }, 1799: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(8473), s = r(3145);
        e.exports = !n && !i((function () {
            return 7 !== Object.defineProperty(s("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, 2121: (e, t, r) => {
        "use strict";
        var n = r(4762), i = r(8473), s = r(1278), o = Object, a = n("".split);
        e.exports = i((function () {
            return !o("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" === s(e) ? a(e, "") : o(e)
        } : o
    }, 7268: (e, t, r) => {
        "use strict";
        var n = r(4762), i = r(1483), s = r(1831), o = n(Function.toString);
        i(s.inspectSource) || (s.inspectSource = function (e) {
            return o(e)
        }), e.exports = s.inspectSource
    }, 4483: (e, t, r) => {
        "use strict";
        var n, i, s, o = r(4644), a = r(5578), c = r(1704), l = r(9037), u = r(5755), d = r(1831), p = r(5409),
            h = r(1507), f = "Object already initialized", g = a.TypeError, m = a.WeakMap;
        if (o || d.state) {
            var v = d.state || (d.state = new m);
            v.get = v.get, v.has = v.has, v.set = v.set, n = function (e, t) {
                if (v.has(e)) throw new g(f);
                return t.facade = e, v.set(e, t), t
            }, i = function (e) {
                return v.get(e) || {}
            }, s = function (e) {
                return v.has(e)
            }
        } else {
            var y = p("state");
            h[y] = !0, n = function (e, t) {
                if (u(e, y)) throw new g(f);
                return t.facade = e, l(e, y, t), t
            }, i = function (e) {
                return u(e, y) ? e[y] : {}
            }, s = function (e) {
                return u(e, y)
            }
        }
        e.exports = {
            set: n, get: i, has: s, enforce: function (e) {
                return s(e) ? i(e) : n(e, {})
            }, getterFor: function (e) {
                return function (t) {
                    var r;
                    if (!c(t) || (r = i(t)).type !== e) throw new g("Incompatible receiver, " + e + " required");
                    return r
                }
            }
        }
    }, 5299: (e, t, r) => {
        "use strict";
        var n = r(1), i = r(6775), s = n("iterator"), o = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (i.Array === e || o[s] === e)
        }
    }, 4914: (e, t, r) => {
        "use strict";
        var n = r(1278);
        e.exports = Array.isArray || function isArray(e) {
            return "Array" === n(e)
        }
    }, 1483: e => {
        "use strict";
        var t = "object" == typeof document && document.all;
        e.exports = void 0 === t && void 0 !== t ? function (e) {
            return "function" == typeof e || e === t
        } : function (e) {
            return "function" == typeof e
        }
    }, 8730: (e, t, r) => {
        "use strict";
        var n = r(8473), i = r(1483), s = /#|\.prototype\./, isForced = function (e, t) {
            var r = a[o(e)];
            return r === l || r !== c && (i(t) ? n(t) : !!t)
        }, o = isForced.normalize = function (e) {
            return String(e).replace(s, ".").toLowerCase()
        }, a = isForced.data = {}, c = isForced.NATIVE = "N", l = isForced.POLYFILL = "P";
        e.exports = isForced
    }, 5983: e => {
        "use strict";
        e.exports = function (e) {
            return null == e
        }
    }, 1704: (e, t, r) => {
        "use strict";
        var n = r(1483);
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : n(e)
        }
    }, 9557: e => {
        "use strict";
        e.exports = !1
    }, 1423: (e, t, r) => {
        "use strict";
        var n = r(1409), i = r(1483), s = r(4815), o = r(5022), a = Object;
        e.exports = o ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            var t = n("Symbol");
            return i(t) && s(t.prototype, a(e))
        }
    }, 1506: (e, t, r) => {
        "use strict";
        var n = r(2914), i = r(1807), s = r(2293), o = r(8761), a = r(5299), c = r(6960), l = r(4815), u = r(4887),
            d = r(6665), p = r(6721), h = TypeError, Result = function (e, t) {
                this.stopped = e, this.result = t
            }, f = Result.prototype;
        e.exports = function (e, t, r) {
            var g, m, v, y, w, b, S, x = r && r.that, E = !(!r || !r.AS_ENTRIES), I = !(!r || !r.IS_RECORD),
                C = !(!r || !r.IS_ITERATOR), _ = !(!r || !r.INTERRUPTED), O = n(t, x), stop = function (e) {
                    return g && p(g, "normal", e), new Result(!0, e)
                }, callFn = function (e) {
                    return E ? (s(e), _ ? O(e[0], e[1], stop) : O(e[0], e[1])) : _ ? O(e, stop) : O(e)
                };
            if (I) g = e.iterator; else if (C) g = e; else {
                if (!(m = d(e))) throw new h(o(e) + " is not iterable");
                if (a(m)) {
                    for (v = 0, y = c(e); y > v; v++) if ((w = callFn(e[v])) && l(f, w)) return w;
                    return new Result(!1)
                }
                g = u(e, m)
            }
            for (b = I ? e.next : g.next; !(S = i(b, g)).done;) {
                try {
                    w = callFn(S.value)
                } catch (e) {
                    p(g, "throw", e)
                }
                if ("object" == typeof w && w && l(f, w)) return w
            }
            return new Result(!1)
        }
    }, 6721: (e, t, r) => {
        "use strict";
        var n = r(1807), i = r(2293), s = r(2564);
        e.exports = function (e, t, r) {
            var o, a;
            i(e);
            try {
                if (!(o = s(e, "return"))) {
                    if ("throw" === t) throw r;
                    return r
                }
                o = n(o, e)
            } catch (e) {
                a = !0, o = e
            }
            if ("throw" === t) throw r;
            if (a) throw o;
            return i(o), r
        }
    }, 8660: (e, t, r) => {
        "use strict";
        var n = r(1807), i = r(5290), s = r(9037), o = r(2313), a = r(1), c = r(4483), l = r(2564),
            u = r(1851).IteratorPrototype, d = r(5247), p = r(6721), h = a("toStringTag"), f = "IteratorHelper",
            g = "WrapForValidIterator", m = c.set, createIteratorProxyPrototype = function (e) {
                var t = c.getterFor(e ? g : f);
                return o(i(u), {
                    next: function next() {
                        var r = t(this);
                        if (e) return r.nextHandler();
                        try {
                            var n = r.done ? void 0 : r.nextHandler();
                            return d(n, r.done)
                        } catch (e) {
                            throw r.done = !0, e
                        }
                    }, return: function () {
                        var r = t(this), i = r.iterator;
                        if (r.done = !0, e) {
                            var s = l(i, "return");
                            return s ? n(s, i) : d(void 0, !0)
                        }
                        if (r.inner) try {
                            p(r.inner.iterator, "normal")
                        } catch (e) {
                            return p(i, "throw", e)
                        }
                        return i && p(i, "normal"), d(void 0, !0)
                    }
                })
            }, v = createIteratorProxyPrototype(!0), y = createIteratorProxyPrototype(!1);
        s(y, h, "Iterator Helper"), e.exports = function (e, t) {
            var r = function Iterator(r, n) {
                n ? (n.iterator = r.iterator, n.next = r.next) : n = r, n.type = t ? g : f, n.nextHandler = e, n.counter = 0, n.done = !1, m(this, n)
            };
            return r.prototype = t ? v : y, r
        }
    }, 1851: (e, t, r) => {
        "use strict";
        var n, i, s, o = r(8473), a = r(1483), c = r(1704), l = r(5290), u = r(3181), d = r(7914), p = r(1),
            h = r(9557), f = p("iterator"), g = !1;
        [].keys && ("next" in (s = [].keys()) ? (i = u(u(s))) !== Object.prototype && (n = i) : g = !0), !c(n) || o((function () {
            var e = {};
            return n[f].call(e) !== e
        })) ? n = {} : h && (n = l(n)), a(n[f]) || d(n, f, (function () {
            return this
        })), e.exports = {IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: g}
    }, 6775: e => {
        "use strict";
        e.exports = {}
    }, 6960: (e, t, r) => {
        "use strict";
        var n = r(8324);
        e.exports = function (e) {
            return n(e.length)
        }
    }, 169: (e, t, r) => {
        "use strict";
        var n = r(4762), i = r(8473), s = r(1483), o = r(5755), a = r(382), c = r(2048).CONFIGURABLE, l = r(7268),
            u = r(4483), d = u.enforce, p = u.get, h = String, f = Object.defineProperty, g = n("".slice),
            m = n("".replace), v = n([].join), y = a && !i((function () {
                return 8 !== f((function () {
                }), "length", {value: 8}).length
            })), w = String(String).split("String"), b = e.exports = function (e, t, r) {
                "Symbol(" === g(h(t), 0, 7) && (t = "[" + m(h(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!o(e, "name") || c && e.name !== t) && (a ? f(e, "name", {
                    value: t,
                    configurable: !0
                }) : e.name = t), y && r && o(r, "arity") && e.length !== r.arity && f(e, "length", {value: r.arity});
                try {
                    r && o(r, "constructor") && r.constructor ? a && f(e, "prototype", {writable: !1}) : e.prototype && (e.prototype = void 0)
                } catch (e) {
                }
                var n = d(e);
                return o(n, "source") || (n.source = v(w, "string" == typeof t ? t : "")), e
            };
        Function.prototype.toString = b((function toString() {
            return s(this) && p(this).source || l(this)
        }), "toString")
    }, 1703: e => {
        "use strict";
        var t = Math.ceil, r = Math.floor;
        e.exports = Math.trunc || function trunc(e) {
            var n = +e;
            return (n > 0 ? r : t)(n)
        }
    }, 5290: (e, t, r) => {
        "use strict";
        var n, i = r(2293), s = r(5799), o = r(4741), a = r(1507), c = r(2811), l = r(3145), u = r(5409),
            d = "prototype", p = "script", h = u("IE_PROTO"), EmptyConstructor = function () {
            }, scriptTag = function (e) {
                return "<" + p + ">" + e + "</" + p + ">"
            }, NullProtoObjectViaActiveX = function (e) {
                e.write(scriptTag("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }, NullProtoObject = function () {
                try {
                    n = new ActiveXObject("htmlfile")
                } catch (e) {
                }
                var e, t, r;
                NullProtoObject = "undefined" != typeof document ? document.domain && n ? NullProtoObjectViaActiveX(n) : (t = l("iframe"), r = "java" + p + ":", t.style.display = "none", c.appendChild(t), t.src = String(r), (e = t.contentWindow.document).open(), e.write(scriptTag("document.F=Object")), e.close(), e.F) : NullProtoObjectViaActiveX(n);
                for (var i = o.length; i--;) delete NullProtoObject[d][o[i]];
                return NullProtoObject()
            };
        a[h] = !0, e.exports = Object.create || function create(e, t) {
            var r;
            return null !== e ? (EmptyConstructor[d] = i(e), r = new EmptyConstructor, EmptyConstructor[d] = null, r[h] = e) : r = NullProtoObject(), void 0 === t ? r : s.f(r, t)
        }
    }, 5799: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(3896), s = r(5835), o = r(2293), a = r(5599), c = r(3658);
        t.f = n && !i ? Object.defineProperties : function defineProperties(e, t) {
            o(e);
            for (var r, n = a(t), i = c(t), l = i.length, u = 0; l > u;) s.f(e, r = i[u++], n[r]);
            return e
        }
    }, 5835: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(1799), s = r(3896), o = r(2293), a = r(3815), c = TypeError, l = Object.defineProperty,
            u = Object.getOwnPropertyDescriptor, d = "enumerable", p = "configurable", h = "writable";
        t.f = n ? s ? function defineProperty(e, t, r) {
            if (o(e), t = a(t), o(r), "function" == typeof e && "prototype" === t && "value" in r && h in r && !r[h]) {
                var n = u(e, t);
                n && n[h] && (e[t] = r.value, r = {
                    configurable: p in r ? r[p] : n[p],
                    enumerable: d in r ? r[d] : n[d],
                    writable: !1
                })
            }
            return l(e, t, r)
        } : l : function defineProperty(e, t, r) {
            if (o(e), t = a(t), o(r), i) try {
                return l(e, t, r)
            } catch (e) {
            }
            if ("get" in r || "set" in r) throw new c("Accessors not supported");
            return "value" in r && (e[t] = r.value), e
        }
    }, 4961: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(1807), s = r(7611), o = r(7738), a = r(5599), c = r(3815), l = r(5755), u = r(1799),
            d = Object.getOwnPropertyDescriptor;
        t.f = n ? d : function getOwnPropertyDescriptor(e, t) {
            if (e = a(e), t = c(t), u) try {
                return d(e, t)
            } catch (e) {
            }
            if (l(e, t)) return o(!i(s.f, e, t), e[t])
        }
    }, 2278: (e, t, r) => {
        "use strict";
        var n = r(6742), i = r(4741).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
            return n(e, i)
        }
    }, 4347: (e, t) => {
        "use strict";
        t.f = Object.getOwnPropertySymbols
    }, 3181: (e, t, r) => {
        "use strict";
        var n = r(5755), i = r(1483), s = r(2347), o = r(5409), a = r(9441), c = o("IE_PROTO"), l = Object,
            u = l.prototype;
        e.exports = a ? l.getPrototypeOf : function (e) {
            var t = s(e);
            if (n(t, c)) return t[c];
            var r = t.constructor;
            return i(r) && t instanceof r ? r.prototype : t instanceof l ? u : null
        }
    }, 4815: (e, t, r) => {
        "use strict";
        var n = r(4762);
        e.exports = n({}.isPrototypeOf)
    }, 6742: (e, t, r) => {
        "use strict";
        var n = r(4762), i = r(5755), s = r(5599), o = r(6651).indexOf, a = r(1507), c = n([].push);
        e.exports = function (e, t) {
            var r, n = s(e), l = 0, u = [];
            for (r in n) !i(a, r) && i(n, r) && c(u, r);
            for (; t.length > l;) i(n, r = t[l++]) && (~o(u, r) || c(u, r));
            return u
        }
    }, 3658: (e, t, r) => {
        "use strict";
        var n = r(6742), i = r(4741);
        e.exports = Object.keys || function keys(e) {
            return n(e, i)
        }
    }, 7611: (e, t) => {
        "use strict";
        var r = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, i = n && !r.call({1: 2}, 1);
        t.f = i ? function propertyIsEnumerable(e) {
            var t = n(this, e);
            return !!t && t.enumerable
        } : r
    }, 348: (e, t, r) => {
        "use strict";
        var n = r(1807), i = r(1483), s = r(1704), o = TypeError;
        e.exports = function (e, t) {
            var r, a;
            if ("string" === t && i(r = e.toString) && !s(a = n(r, e))) return a;
            if (i(r = e.valueOf) && !s(a = n(r, e))) return a;
            if ("string" !== t && i(r = e.toString) && !s(a = n(r, e))) return a;
            throw new o("Can't convert object to primitive value")
        }
    }, 9497: (e, t, r) => {
        "use strict";
        var n = r(1409), i = r(4762), s = r(2278), o = r(4347), a = r(2293), c = i([].concat);
        e.exports = n("Reflect", "ownKeys") || function ownKeys(e) {
            var t = s.f(a(e)), r = o.f;
            return r ? c(t, r(e)) : t
        }
    }, 3312: (e, t, r) => {
        "use strict";
        var n = r(5983), i = TypeError;
        e.exports = function (e) {
            if (n(e)) throw new i("Can't call method on " + e);
            return e
        }
    }, 5409: (e, t, r) => {
        "use strict";
        var n = r(7255), i = r(1866), s = n("keys");
        e.exports = function (e) {
            return s[e] || (s[e] = i(e))
        }
    }, 1831: (e, t, r) => {
        "use strict";
        var n = r(9557), i = r(5578), s = r(2095), o = "__core-js_shared__", a = e.exports = i[o] || s(o, {});
        (a.versions || (a.versions = [])).push({
            version: "3.39.0",
            mode: n ? "pure" : "global",
            copyright: "Â© 2014-2024 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }, 7255: (e, t, r) => {
        "use strict";
        var n = r(1831);
        e.exports = function (e, t) {
            return n[e] || (n[e] = t || {})
        }
    }, 6029: (e, t, r) => {
        "use strict";
        var n = r(6477), i = r(8473), s = r(5578).String;
        e.exports = !!Object.getOwnPropertySymbols && !i((function () {
            var e = Symbol("symbol detection");
            return !s(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
        }))
    }, 3392: (e, t, r) => {
        "use strict";
        var n = r(3005), i = Math.max, s = Math.min;
        e.exports = function (e, t) {
            var r = n(e);
            return r < 0 ? i(r + t, 0) : s(r, t)
        }
    }, 5599: (e, t, r) => {
        "use strict";
        var n = r(2121), i = r(3312);
        e.exports = function (e) {
            return n(i(e))
        }
    }, 3005: (e, t, r) => {
        "use strict";
        var n = r(1703);
        e.exports = function (e) {
            var t = +e;
            return t != t || 0 === t ? 0 : n(t)
        }
    }, 8324: (e, t, r) => {
        "use strict";
        var n = r(3005), i = Math.min;
        e.exports = function (e) {
            var t = n(e);
            return t > 0 ? i(t, 9007199254740991) : 0
        }
    }, 2347: (e, t, r) => {
        "use strict";
        var n = r(3312), i = Object;
        e.exports = function (e) {
            return i(n(e))
        }
    }, 2355: (e, t, r) => {
        "use strict";
        var n = r(1807), i = r(1704), s = r(1423), o = r(2564), a = r(348), c = r(1), l = TypeError,
            u = c("toPrimitive");
        e.exports = function (e, t) {
            if (!i(e) || s(e)) return e;
            var r, c = o(e, u);
            if (c) {
                if (void 0 === t && (t = "default"), r = n(c, e, t), !i(r) || s(r)) return r;
                throw new l("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"), a(e, t)
        }
    }, 3815: (e, t, r) => {
        "use strict";
        var n = r(2355), i = r(1423);
        e.exports = function (e) {
            var t = n(e, "string");
            return i(t) ? t : t + ""
        }
    }, 4338: (e, t, r) => {
        "use strict";
        var n = {};
        n[r(1)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
    }, 8761: e => {
        "use strict";
        var t = String;
        e.exports = function (e) {
            try {
                return t(e)
            } catch (e) {
                return "Object"
            }
        }
    }, 1866: (e, t, r) => {
        "use strict";
        var n = r(4762), i = 0, s = Math.random(), o = n(1..toString);
        e.exports = function (e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++i + s, 36)
        }
    }, 5022: (e, t, r) => {
        "use strict";
        var n = r(6029);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, 3896: (e, t, r) => {
        "use strict";
        var n = r(382), i = r(8473);
        e.exports = n && i((function () {
            return 42 !== Object.defineProperty((function () {
            }), "prototype", {value: 42, writable: !1}).prototype
        }))
    }, 4644: (e, t, r) => {
        "use strict";
        var n = r(5578), i = r(1483), s = n.WeakMap;
        e.exports = i(s) && /native code/.test(String(s))
    }, 1: (e, t, r) => {
        "use strict";
        var n = r(5578), i = r(7255), s = r(5755), o = r(1866), a = r(6029), c = r(5022), l = n.Symbol, u = i("wks"),
            d = c ? l.for || l : l && l.withoutSetter || o;
        e.exports = function (e) {
            return s(u, e) || (u[e] = a && s(l, e) ? l[e] : d("Symbol." + e)), u[e]
        }
    }, 6281: (e, t, r) => {
        "use strict";
        var n = r(8612), i = r(6651).includes, s = r(8473), o = r(7095);
        n({
            target: "Array", proto: !0, forced: s((function () {
                return !Array(1).includes()
            }))
        }, {
            includes: function includes(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), o("includes")
    }, 5724: (e, t, r) => {
        "use strict";
        var n = r(8612), i = r(2347), s = r(6960), o = r(9273), a = r(1091);
        n({
            target: "Array", proto: !0, arity: 1, forced: r(8473)((function () {
                return 4294967297 !== [].push.call({length: 4294967296}, 1)
            })) || !function () {
                try {
                    Object.defineProperty([], "length", {writable: !1}).push()
                } catch (e) {
                    return e instanceof TypeError
                }
            }()
        }, {
            push: function push(e) {
                var t = i(this), r = s(t), n = arguments.length;
                a(r + n);
                for (var c = 0; c < n; c++) t[r] = arguments[c], r++;
                return o(t, r), r
            }
        })
    }, 3617: (e, t, r) => {
        "use strict";
        var n = r(8612), i = r(5578), s = r(6021), o = r(2293), a = r(1483), c = r(3181), l = r(3864), u = r(670),
            d = r(8473), p = r(5755), h = r(1), f = r(1851).IteratorPrototype, g = r(382), m = r(9557),
            v = "constructor", y = "Iterator", w = h("toStringTag"), b = TypeError, S = i[y],
            x = m || !a(S) || S.prototype !== f || !d((function () {
                S({})
            })), E = function Iterator() {
                if (s(this, f), c(this) === f) throw new b("Abstract class Iterator not directly constructable")
            }, defineIteratorPrototypeAccessor = function (e, t) {
                g ? l(f, e, {
                    configurable: !0, get: function () {
                        return t
                    }, set: function (t) {
                        if (o(this), this === f) throw new b("You can't redefine this property");
                        p(this, e) ? this[e] = t : u(this, e, t)
                    }
                }) : f[e] = t
            };
        p(f, w) || defineIteratorPrototypeAccessor(w, y), !x && p(f, v) && f[v] !== Object || defineIteratorPrototypeAccessor(v, E), E.prototype = f, n({
            global: !0,
            constructor: !0,
            forced: x
        }, {Iterator: E})
    }, 1975: (e, t, r) => {
        "use strict";
        var n = r(8612), i = r(1807), s = r(8120), o = r(2293), a = r(41), c = r(8660), l = r(8901), u = r(9557),
            d = c((function () {
                for (var e, t, r = this.iterator, n = this.predicate, s = this.next; ;) {
                    if (e = o(i(s, r)), this.done = !!e.done) return;
                    if (t = e.value, l(r, n, [t, this.counter++], !0)) return t
                }
            }));
        n({target: "Iterator", proto: !0, real: !0, forced: u}, {
            filter: function filter(e) {
                return o(this), s(e), new d(a(this), {predicate: e})
            }
        })
    }, 3242: (e, t, r) => {
        "use strict";
        var n = r(8612), i = r(1506), s = r(8120), o = r(2293), a = r(41);
        n({target: "Iterator", proto: !0, real: !0}, {
            find: function find(e) {
                o(this), s(e);
                var t = a(this), r = 0;
                return i(t, (function (t, n) {
                    if (e(t, r++)) return n(t)
                }), {IS_RECORD: !0, INTERRUPTED: !0}).result
            }
        })
    }, 9930: (e, t, r) => {
        "use strict";
        var n = r(8612), i = r(1506), s = r(8120), o = r(2293), a = r(41);
        n({target: "Iterator", proto: !0, real: !0}, {
            forEach: function forEach(e) {
                o(this), s(e);
                var t = a(this), r = 0;
                i(t, (function (t) {
                    e(t, r++)
                }), {IS_RECORD: !0})
            }
        })
    }, 4846: (e, t, r) => {
        "use strict";
        r(3617)
    }, 7458: (e, t, r) => {
        "use strict";
        r(1975)
    }, 6211: (e, t, r) => {
        "use strict";
        r(3242)
    }, 9655: (e, t, r) => {
        "use strict";
        r(9930)
    }
}, e => {
    var t;
    t = 4946, e(e.s = t)
}]);
/*! jQuery UI - v1.13.3 - 2024-04-26
* https://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;

    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }

    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }

    function N(t) {
        return null != t && t === t.window
    }

    x.ui = x.ui || {}, x.ui.version = "1.13.3",
        /*!
 * jQuery UI :data 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.extend(x.expr.pseudos, {
            data: x.expr.createPseudo ? x.expr.createPseudo(function (e) {
                return function (t) {
                    return !!x.data(t, e)
                }
            }) : function (t, e, i) {
                return !!x.data(t, i[3])
            }
        }),
        /*!
 * jQuery UI Disable Selection 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
                return this.on(t + ".ui-disableSelection", function (t) {
                    t.preventDefault()
                })
            }), enableSelection: function () {
                return this.off(".ui-disableSelection")
            }
        }),
        /*!
 * jQuery UI Focusable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.ui.focusable = function (t, e) {
            var i, n, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (o = (i = t.parentNode).name, !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && 0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e, n && x(t).is(":visible") && function (t) {
                var e = t.css("visibility");
                for (; "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "visible" === e
            }(x(t)))
        }, x.extend(x.expr.pseudos, {
        focusable: function (t) {
            return x.ui.focusable(t, null != x.attr(t, "tabindex"))
        }
    }), x.fn._form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
    },
        /*!
 * jQuery UI Form Reset Mixin 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = x(this);
                setTimeout(function () {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function () {
                        this.refresh()
                    })
                })
            }, _bindFormResetHandler: function () {
                var t;
                this.form = this.element._form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
            }, _unbindFormResetHandler: function () {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
            }
        }, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        /*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]), x.uniqueSort || (x.uniqueSort = x.unique), x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, i = function (t, e) {
        return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    }, x.escapeSelector = function (t) {
        return (t + "").replace(e, i)
    }), x.fn.even && x.fn.odd || x.fn.extend({
        even: function () {
            return this.filter(function (t) {
                return t % 2 == 0
            })
        }, odd: function () {
            return this.filter(function (t) {
                return t % 2 == 1
            })
        }
    }),
        /*!
 * jQuery UI Keycode 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        /*!
 * jQuery UI Labels 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.fn.labels = function () {
            var t, e, i;
            return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), t = "label[for='" + x.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), this.pushStack(e)) : this.pushStack([])
        }, x.ui.plugin = {
        add: function (t, e, i) {
            var n, o = x.ui[t].prototype;
            for (n in i) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([e, i[n]])
        }, call: function (t, e, i, n) {
            var o, s = t.plugins[e];
            if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (o = 0; o < s.length; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
        }
    },
        /*!
 * jQuery UI Position 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 * https://api.jqueryui.com/position/
 */
        W = Math.max, C = Math.abs, o = /left|center|right/, s = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, h = x.fn.position, x.position = {
        scrollbarWidth: function () {
            var t, e, i;
            return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0], x("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i)
        }, getScrollInfo: function (t) {
            var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                height: e ? x.position.scrollbarWidth() : 0
            }
        }, getWithinInfo: function (t) {
            var e = x(t || window), i = N(e[0]), n = !!e[0] && 9 === e[0].nodeType;
            return {
                element: e,
                isWindow: i,
                isDocument: n,
                offset: !i && !n ? x(t).offset() : {left: 0, top: 0},
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: e.outerWidth(),
                height: e.outerHeight()
            }
        }
    }, x.fn.position = function (f) {
        var c, d, p, g, m, v, y, w, b, _, t, e;
        return f && f.of ? (v = "string" == typeof (f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of), y = x.position.getWithinInfo(f.within), w = x.position.getScrollInfo(y), b = (f.collision || "flip").split(" "), _ = {}, e = 9 === (e = (t = v)[0]).nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {top: 0, left: 0}
        } : N(e) ? {
            width: t.width(),
            height: t.height(),
            offset: {top: t.scrollTop(), left: t.scrollLeft()}
        } : e.preventDefault ? {width: 0, height: 0, offset: {top: e.pageY, left: e.pageX}} : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }, v[0].preventDefault && (f.at = "left top"), d = e.width, p = e.height, m = x.extend({}, g = e.offset), x.each(["my", "at"], function () {
            var t, e, i = (f[this] || "").split(" ");
            (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center", i[1] = s.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), _[this] = [t ? t[0] : 0, e ? e[0] : 0], f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
        }), 1 === b.length && (b[1] = b[0]), "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2), "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2), c = E(_.at, d, p), m.left += c[0], m.top += c[1], this.each(function () {
            var i, t, r = x(this), l = r.outerWidth(), a = r.outerHeight(), e = L(this, "marginLeft"),
                n = L(this, "marginTop"), o = l + e + L(this, "marginRight") + w.width,
                s = a + n + L(this, "marginBottom") + w.height, h = x.extend({}, m),
                u = E(_.my, r.outerWidth(), r.outerHeight());
            "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2), "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2), h.left += u[0], h.top += u[1], i = {
                marginLeft: e,
                marginTop: n
            }, x.each(["left", "top"], function (t, e) {
                x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                    targetWidth: d,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: a,
                    collisionPosition: i,
                    collisionWidth: o,
                    collisionHeight: s,
                    offset: [c[0] + u[0], c[1] + u[1]],
                    my: f.my,
                    at: f.at,
                    within: y,
                    elem: r
                })
            }), f.using && (t = function (t) {
                var e = g.left - h.left, i = e + d - l, n = g.top - h.top, o = n + p - a, s = {
                    target: {element: v, left: g.left, top: g.top, width: d, height: p},
                    element: {element: r, left: h.left, top: h.top, width: l, height: a},
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                };
                d < l && C(e + i) < d && (s.horizontal = "center"), p < a && C(n + o) < p && (s.vertical = "middle"), W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical", f.using.call(this, t, s)
            }), r.offset(x.extend(h, {using: t}))
        })) : h.apply(this, arguments)
    }, x.ui.position = {
        fit: {
            left: function (t, e) {
                var i, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, n = n.width,
                    s = t.left - e.collisionPosition.marginLeft, r = o - s, l = s + e.collisionWidth - n - o;
                n < e.collisionWidth ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o, t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
            }, top: function (t, e) {
                var i, n = e.within, n = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height,
                    s = t.top - e.collisionPosition.marginTop, r = n - s, l = s + e.collisionHeight - o - n;
                o < e.collisionHeight ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
            }
        }, flip: {
            left: function (t, e) {
                var i = e.within, n = i.offset.left + i.scrollLeft, o = i.width,
                    i = i.isWindow ? i.scrollLeft : i.offset.left, s = t.left - e.collisionPosition.marginLeft,
                    r = s - i, s = s + e.collisionWidth - o - i,
                    l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                    a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                    h = -2 * e.offset[0];
                r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
            }, top: function (t, e) {
                var i = e.within, n = i.offset.top + i.scrollTop, o = i.height,
                    i = i.isWindow ? i.scrollTop : i.offset.top, s = t.top - e.collisionPosition.marginTop, r = s - i,
                    s = s + e.collisionHeight - o - i,
                    l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                    a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                    h = -2 * e.offset[1];
                r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
            }
        }, flipfit: {
            left: function () {
                x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, x.ui.safeActiveElement = function (e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return i = (i = i || e.body).nodeName ? i : e.body
    }, x.ui.safeBlur = function (t) {
        t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
    },
        /*!
 * jQuery UI Scroll Parent 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.fn.scrollParent = function (t) {
            var e = this.css("position"), i = "absolute" === e, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function () {
                    var t = x(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
        },
        /*!
 * jQuery UI Tabbable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.extend(x.expr.pseudos, {
            tabbable: function (t) {
                var e = x.attr(t, "tabindex"), i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i)
            }
        }),
        /*!
 * jQuery UI Unique ID 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
        x.fn.extend({
            uniqueId: (u = 0, function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++u)
                })
            }), removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
                })
            }
        });
    /*!
 * jQuery UI Widget 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
    var f, c = 0, d = Array.prototype.hasOwnProperty, p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData, function (t) {
        for (var e, i, n = 0; null != (i = t[n]); n++) (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        f(t)
    }), x.widget = function (t, i, e) {
        var n, o, s, r = {}, l = t.split(".")[0], a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = x.Widget), Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))), x.expr.pseudos[a.toLowerCase()] = function (t) {
            return !!x.data(t, a)
        }, x[l] = x[l] || {}, n = x[l][t], o = x[l][t] = function (t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }), (s = new i).options = x.widget.extend({}, s.options), x.each(e, function (e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }

            function s(t) {
                return i.prototype[e].apply(this, t)
            }

            r[e] = "function" != typeof n ? n : function () {
                var t, e = this._super, i = this._superApply;
                return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            }
        }), o.prototype = x.widget.extend(s, {widgetEventPrefix: n && s.widgetEventPrefix || t}, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), n ? (x.each(n._childConstructors, function (t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), x.widget.bridge(t, o), o
    }, x.widget.extend = function (t) {
        for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++) for (e in n[o]) i = n[o][e], d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }, x.widget.bridge = function (s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function (i) {
            var t = "string" == typeof i, n = p.call(arguments, 1), o = this;
            return t ? this.length || "instance" !== i ? this.each(function () {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e, !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t, !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))), this.each(function () {
                var t = x.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : x.data(this, r, new e(i, this))
            })), o
        }
    }, x.Widget = function () {
    }, x.Widget._childConstructors = [], x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (t, e) {
            e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === e && this.destroy()
                }
            }), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function () {
            var i = this;
            this._destroy(), x.each(this.classesElementLookup, function (t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function () {
            return this.element
        },
        option: function (t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length) return x.widget.extend({}, this.options);
            if ("string" == typeof t) if (s = {}, t = (i = t.split(".")).shift(), i.length) {
                for (n = s[t] = x.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) n[i[o]] = n[i[o]] || {}, n = n[i[o]];
                if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                n[t] = e
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                s[t] = e
            }
            return this._setOptions(s), this
        },
        _setOptions: function (t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (t) {
            var e, i, n;
            for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (o) {
            var s = [], r = this;

            function t(t, e) {
                for (var i, n = 0; n < t.length; n++) i = r.classesElementLookup[t[n]] || x(), i = o.add ? (function () {
                    var i = [];
                    o.element.each(function (t, e) {
                        x.map(r.classesElementLookup, function (t) {
                            return t
                        }).some(function (t) {
                            return t.is(e)
                        }) || i.push(e)
                    }), r._on(x(i), {remove: "_untrackClassesElement"})
                }(), x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()), r.classesElementLookup[t[n]] = i, s.push(t[n]), e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }

            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0), o.extra && t(o.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function (i) {
            var n = this;
            x.each(n.classesElementLookup, function (t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            }), this._off(x(i.target))
        },
        _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function (t, e, i, n) {
            var o = "string" == typeof t || null === t, e = {
                extra: o ? e : i,
                keys: o ? t : e,
                element: o ? this.element : t,
                add: n = "boolean" == typeof n ? n : i
            };
            return e.element.toggleClass(this._classes(e), n), this
        },
        _on: function (o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s, s = o, o = !1), t ? (s = r = x(s), this.bindings = this.bindings.add(s)) : (t = s, s = this.element, r = this.widget()), x.each(t, function (t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }

                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var t = t.match(/^([\w:-]*)\s*(.*)$/), n = t[1] + l.eventNamespace, t = t[2];
                t ? r.on(n, t, i) : s.on(n, i)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function (t, e) {
            var i = this;
            return setTimeout(function () {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                }, focusout: function (t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], o = e.originalEvent) for (n in o) n in e || (e[n] = o[n]);
            return this.element.trigger(e, i), !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, x.each({show: "fadeIn", hide: "fadeOut"}, function (s, r) {
        x.Widget.prototype["_" + s] = function (e, t, i) {
            var n,
                o = (t = "string" == typeof t ? {effect: t} : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof (t = t || {}) ? t = {duration: t} : !0 === t && (t = {}), n = !x.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function (t) {
                x(this)[s](), i && i.call(e[0]), t()
            })
        }
    })
});
/*! elementor - v3.30.0 - 09-07-2025 */
"use strict";
(self.webpackChunkelementorFrontend = self.webpackChunkelementorFrontend || []).push([[313], {
    4047: (e, t, n) => {
        var r = n(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var o = r(n(2890));

        class _default extends elementorModules.ViewModule {
            constructor() {
                super(...arguments), this.documents = {}, this.initDocumentClasses(), this.attachDocumentsClasses()
            }

            getDefaultSettings() {
                return {selectors: {document: ".elementor"}}
            }

            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {$documents: jQuery(e.document)}
            }

            initDocumentClasses() {
                this.documentClasses = {base: o.default}, elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
            }

            addDocumentClass(e, t) {
                this.documentClasses[e] = t
            }

            attachDocumentsClasses() {
                this.elements.$documents.each(((e, t) => this.attachDocumentClass(jQuery(t))))
            }

            attachDocumentClass(e) {
                const t = e.data(), n = t.elementorId, r = t.elementorType,
                    o = this.documentClasses[r] || this.documentClasses.base;
                this.documents[n] = new o({$element: e, id: n})
            }
        }

        t.default = _default
    }, 7248: (e, t, n) => {
        var r = n(6784);
        n(4846), n(9655);
        var o = r(n(4970)), s = r(n(3678)), i = r(n(2126)), a = r(n(8891));
        e.exports = function (e) {
            var t = this;
            const r = {};
            this.elementsHandlers = {
                "accordion.default": () => n.e(131).then(n.bind(n, 9675)),
                "alert.default": () => n.e(707).then(n.bind(n, 7243)),
                "counter.default": () => n.e(457).then(n.bind(n, 3905)),
                "progress.default": () => n.e(234).then(n.bind(n, 9754)),
                "tabs.default": () => n.e(575).then(n.bind(n, 3485)),
                "toggle.default": () => n.e(775).then(n.bind(n, 3049)),
                "video.default": () => n.e(180).then(n.bind(n, 3774)),
                "image-carousel.default": () => n.e(177).then(n.bind(n, 4315)),
                "text-editor.default": () => n.e(212).then(n.bind(n, 5362)),
                "wp-widget-media_audio.default": () => n.e(211).then(n.bind(n, 2793)),
                container: s.default,
                section: i.default,
                column: a.default
            }, elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-tabs.default"] = () => n.e(215).then(n.bind(n, 4328))), elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-accordion.default"] = () => n.e(915).then(n.bind(n, 8216))), elementorFrontendConfig.experimentalFeatures.container && (this.elementsHandlers["contact-buttons.default"] = () => n.e(1).then(n.bind(n, 6285)), this.elementsHandlers["floating-bars-var-1.default"] = () => n.e(336).then(n.bind(n, 5199)));
            const addElementsHandlers = () => {
                e.each(this.elementsHandlers, ((e, t) => {
                    const n = e.split(".");
                    e = n[0];
                    const r = n[1] || null;
                    this.attachHandler(e, t, r)
                }))
            }, isClassHandler = e => e.prototype?.getUniqueHandlerID;
            this.addHandler = function (t, n) {
                const o = n.$element.data("model-cid");
                let s;
                if (o) {
                    s = t.prototype.getConstructorID(), r[o] || (r[o] = {});
                    const e = r[o][s];
                    e && e.onDestroy()
                }
                const i = new t(n);
                elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`, n.$element, e), o && (r[o][s] = i)
            }, this.attachHandler = (e, n, r) => {
                Array.isArray(n) || (n = [n]), n.forEach((n => function (e, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                    r = r ? "." + r : "";
                    const o = e + r;
                    elementorFrontend.hooks.addAction(`frontend/element_ready/${o}`, (e => {
                        if (isClassHandler(n)) t.addHandler(n, {$element: e, elementName: o}, !0); else {
                            const r = n();
                            if (!r) return;
                            r instanceof Promise ? r.then((n => {
                                let {default: r} = n;
                                t.addHandler(r, {$element: e, elementName: o}, !0)
                            })) : t.addHandler(r, {$element: e, elementName: o}, !0)
                        }
                    }))
                }(e, n, r)))
            }, this.getHandler = function (e) {
                const t = this.elementsHandlers[e];
                return isClassHandler(t) ? t : new Promise((e => {
                    t().then((t => {
                        let {default: n} = t;
                        e(n)
                    }))
                }))
            }, this.getHandlers = function (e) {
                return elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"), e ? this.getHandler(e) : this.elementsHandlers
            }, this.runReadyTrigger = function (t) {
                const n = !!t.closest('[data-delay-child-handlers="true"]') && 0 !== t.closest('[data-delay-child-handlers="true"]').length;
                if (elementorFrontend.config.is_static || n) return;
                const r = jQuery(t), o = r.attr("data-element_type");
                if (o && (elementorFrontend.hooks.doAction("frontend/element_ready/global", r, e), elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`, r, e), "widget" === o)) {
                    const t = r.attr("data-widget_type");
                    elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, r, e)
                }
            }, this.init = () => {
                elementorFrontend.hooks.addAction("frontend/element_ready/global", o.default), addElementsHandlers()
            }
        }
    }, 7603: (e, t, n) => {
        var r = n(6784);
        n(4846), n(6211), n(9655), n(8309);
        var o = r(n(4047)), s = r(n(8767)), i = r(n(5115)), a = r(n(5073)), l = r(n(3126)), d = r(n(8427)),
            c = r(n(3582)), u = r(n(4901)), h = r(n(4252)), m = r(n(8422)), f = r(n(5896)), g = r(n(4799)),
            p = r(n(7842)), v = r(n(607)), y = r(n(9807)), b = n(7672);
        const w = n(5956), _ = n(7248);

        class Frontend extends elementorModules.ViewModule {
            constructor() {
                super(...arguments), this.config = elementorFrontendConfig, this.config.legacyMode = {
                    get elementWrappers() {
                        return elementorFrontend.isEditMode() && window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0"), !1
                    }
                }, this.populateActiveBreakpointsConfig()
            }

            get Module() {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"), elementorModules.frontend.handlers.Base
            }

            getDefaultSettings() {
                return {selectors: {elementor: ".elementor", adminBar: "#wpadminbar"}}
            }

            getDefaultElements() {
                const e = {
                    window,
                    $window: jQuery(window),
                    $document: jQuery(document),
                    $head: jQuery(document.head),
                    $body: jQuery(document.body),
                    $deviceMode: jQuery("<span>", {id: "elementor-device-mode", class: "elementor-screen-only"})
                };
                return e.$body.append(e.$deviceMode), e
            }

            bindEvents() {
                this.elements.$window.on("resize", (() => this.setDeviceModeData()))
            }

            getElements(e) {
                return this.getItems(this.elements, e)
            }

            getPageSettings(e) {
                const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                return this.getItems(t, e)
            }

            getGeneralSettings(e) {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()", "3.0.0", "getKitSettings() and remove the `elementor_` prefix"), this.getKitSettings(`elementor_${e}`)
            }

            getKitSettings(e) {
                return this.getItems(this.config.kit, e)
            }

            getCurrentDeviceMode() {
                return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
            }

            getDeviceSetting(e, t, n) {
                if ("widescreen" === e) return this.getWidescreenSetting(t, n);
                const r = elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall: !0, withDesktop: !0});
                let o = r.indexOf(e);
                for (; o > 0;) {
                    const e = t[n + "_" + r[o]];
                    if (e || 0 === e) return e;
                    o--
                }
                return t[n]
            }

            getWidescreenSetting(e, t) {
                const n = t + "_widescreen";
                let r;
                return r = e[n] ? e[n] : e[t], r
            }

            getCurrentDeviceSetting(e, t) {
                return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
            }

            isEditMode() {
                return this.config.environmentMode.edit
            }

            isWPPreviewMode() {
                return this.config.environmentMode.wpPreview
            }

            initDialogsManager() {
                let e;
                this.getDialogsManager = () => (e || (e = new DialogsManager.Instance), e)
            }

            initOnReadyComponents() {
                this.utils = {
                    youtube: new a.default,
                    vimeo: new l.default,
                    baseVideoLoader: new d.default,
                    get lightbox() {
                        return h.default.getLightbox()
                    },
                    urlActions: new c.default,
                    swiper: u.default,
                    environment: i.default,
                    assetsLoader: new m.default,
                    escapeHTML: b.escapeHTML,
                    events: g.default,
                    controls: new v.default,
                    anchor_scroll_margin: new y.default
                }, this.modules = {
                    StretchElement: elementorModules.frontend.tools.StretchElement,
                    Masonry: elementorModules.utils.Masonry
                }, this.elementsHandler.init(), this.isEditMode() ? elementor.once("document:loaded", (() => this.onDocumentLoaded())) : this.onDocumentLoaded()
            }

            initOnReadyElements() {
                this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
            }

            addUserAgentClasses() {
                for (const [e, t] of Object.entries(i.default)) t && this.elements.$body.addClass("e--ua-" + e)
            }

            setDeviceModeData() {
                this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
            }

            addListenerOnce(e, t, n, r) {
                if (r || (r = this.elements.$window), this.isEditMode()) if (this.removeListeners(e, t, r), r instanceof jQuery) {
                    const o = t + "." + e;
                    r.on(o, n)
                } else r.on(t, n, e); else r.on(t, n)
            }

            removeListeners(e, t, n, r) {
                if (r || (r = this.elements.$window), r instanceof jQuery) {
                    const o = t + "." + e;
                    r.off(o, n)
                } else r.off(t, n, e)
            }

            debounce(e, t) {
                let n;
                return function () {
                    const r = this, o = arguments, s = !n;
                    clearTimeout(n), n = setTimeout((() => {
                        n = null, e.apply(r, o)
                    }), t), s && e.apply(r, o)
                }
            }

            muteMigrationTraces() {
                jQuery.migrateMute = !0, jQuery.migrateTrace = !1
            }

            initModules() {
                const e = {shapes: p.default};
                elementorFrontend.trigger("elementor/modules/init:before"), elementorFrontend.trigger("elementor/modules/init/before"), Object.entries(e).forEach((e => {
                    let [t, n] = e;
                    this.modulesHandlers[t] = new n
                }))
            }

            populateActiveBreakpointsConfig() {
                this.config.responsive.activeBreakpoints = {}, Object.entries(this.config.responsive.breakpoints).forEach((e => {
                    let [t, n] = e;
                    n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n)
                }))
            }

            init() {
                this.hooks = new w, this.breakpoints = new f.default(this.config.responsive), this.storage = new s.default, this.elementsHandler = new _(jQuery), this.modulesHandlers = {}, this.addUserAgentClasses(), this.setDeviceModeData(), this.initDialogsManager(), this.isEditMode() && this.muteMigrationTraces(), g.default.dispatch(this.elements.$window, "elementor/frontend/init"), this.initModules(), this.initOnReadyElements(), this.initOnReadyComponents()
            }

            onDocumentLoaded() {
                this.documentsManager = new o.default, this.trigger("components:init"), new h.default
            }
        }

        window.elementorFrontend = new Frontend, elementorFrontend.isEditMode() || jQuery((() => elementorFrontend.init()))
    }, 8891: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = [() => n.e(557).then(n.bind(n, 628))]
    }, 3678: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = n(3002);
        t.default = [() => n.e(557).then(n.bind(n, 628)), () => n.e(557).then(n.bind(n, 3031)), (0, r.createEditorHandler)((() => n.e(396).then(n.bind(n, 9956)))), (0, r.createEditorHandler)((() => n.e(768).then(n.bind(n, 8847)))), (0, r.createEditorHandler)((() => n.e(768).then(n.bind(n, 3323))))]
    }, 3002: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.createEditorHandler = function createEditorHandler(e) {
            return () => new Promise((t => {
                elementorFrontend.isEditMode() && e().then(t)
            }))
        }
    }, 4970: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;

        class GlobalHandler extends elementorModules.frontend.handlers.Base {
            getWidgetType() {
                return "global"
            }

            animate() {
                const e = this.$element, t = this.getAnimation();
                if ("none" === t) return void e.removeClass("elementor-invisible");
                const n = this.getElementSettings(), r = n._animation_delay || n.animation_delay || 0;
                e.removeClass(t), this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = t, setTimeout((() => {
                    e.removeClass("elementor-invisible").addClass("animated " + t)
                }), r)
            }

            getAnimation() {
                return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
            }

            onInit() {
                if (super.onInit(...arguments), this.getAnimation()) {
                    const e = elementorModules.utils.Scroll.scrollObserver({
                        callback: t => {
                            t.isInViewport && (this.animate(), e.unobserve(this.$element[0]))
                        }
                    });
                    e.observe(this.$element[0])
                }
            }

            onElementChange(e) {
                /^_?animation/.test(e) && this.animate()
            }
        }

        t.default = e => {
            elementorFrontend.elementsHandler.addHandler(GlobalHandler, {$element: e})
        }
    }, 2126: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = n(3002);
        t.default = [() => n.e(77).then(n.bind(n, 2439)), () => n.e(557).then(n.bind(n, 628)), () => n.e(557).then(n.bind(n, 3031)), (0, r.createEditorHandler)((() => n.e(396).then(n.bind(n, 9956)))), (0, r.createEditorHandler)((() => n.e(220).then(n.bind(n, 3243))))]
    }, 9807: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(5724), n(4846), n(7458), n(9655);

        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        links: '.elementor-element a[href*="#"]',
                        stickyElements: ".elementor-element.elementor-sticky"
                    }
                }
            }

            onInit() {
                this.observeStickyElements((() => {
                    this.initializeStickyAndAnchorTracking()
                }))
            }

            observeStickyElements(e) {
                new MutationObserver((t => {
                    for (const n of t) ("childList" === n.type || "attributes" === n.type && n.target.classList.contains("elementor-sticky")) && e()
                })).observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["class", "style"]
                })
            }

            initializeStickyAndAnchorTracking() {
                const e = this.getAllAnchorLinks(), t = this.getAllStickyElements(), n = [];
                !t.length > 0 && !e.length > 0 || (this.trackStickyElements(t, n), this.trackAnchorLinks(e, n), this.organizeStickyAndAnchors(n))
            }

            trackAnchorLinks(e, t) {
                e.forEach((e => {
                    const n = this.getAnchorTarget(e), r = this.getScrollPosition(n);
                    t.push({element: n, type: "anchor", scrollPosition: r})
                }))
            }

            trackStickyElements(e, t) {
                e.forEach((e => {
                    const n = this.getElementSettings(e);
                    if (!n || !n.sticky_anchor_link_offset) return;
                    const {sticky_anchor_link_offset: r} = n;
                    if (0 === r) return;
                    const o = this.getScrollPosition(e);
                    t.push({scrollMarginTop: r, type: "sticky", scrollPosition: o})
                }))
            }

            organizeStickyAndAnchors(e) {
                const t = this.filterAndSortElementsByType(e, "sticky"),
                    n = this.filterAndSortElementsByType(e, "anchor");
                t.forEach(((e, r) => {
                    this.defineCurrentStickyRange(e, r, t, n)
                }))
            }

            defineCurrentStickyRange(e, t, n, r) {
                const o = t + 1 < n.length ? n[t + 1].scrollPosition : 1 / 0;
                e.anchor = r.filter((t => {
                    const n = t.scrollPosition > e.scrollPosition && t.scrollPosition < o;
                    return n && (t.element.style.scrollMarginTop = `${e.scrollMarginTop}px`), n
                }))
            }

            getScrollPosition(e) {
                let t = 0;
                for (; e;) t += e.offsetTop, e = e.offsetParent;
                return t
            }

            getAllStickyElements() {
                const e = document.querySelectorAll(this.getSettings("selectors.stickyElements"));
                return Array.from(e).filter(((e, t, n) => t === n.findIndex((t => t.getAttribute("data-id") === e.getAttribute("data-id")))))
            }

            getAllAnchorLinks() {
                const e = document.querySelectorAll(this.getSettings("selectors.links"));
                return Array.from(e).filter(((e, t, n) => t === n.findIndex((t => t.getAttribute("href") === e.getAttribute("href")))))
            }

            filterAndSortElementsByType(e, t) {
                return e.filter((e => t === e.type)).sort(((e, t) => e.scrollPosition - t.scrollPosition))
            }

            isValidSelector(e) {
                return /^#[A-Za-z_][\w-]*$/.test(e)
            }

            getAnchorTarget(e) {
                const t = e?.hash;
                return this.isValidSelector(t) ? document.querySelector(t) : null
            }

            getElementSettings(e) {
                return JSON.parse(e.getAttribute("data-settings"))
            }
        }

        t.default = _default
    }, 8422: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;

        class AssetsLoader {
            getScriptElement(e) {
                const t = document.createElement("script");
                return t.src = e, t
            }

            getStyleElement(e) {
                const t = document.createElement("link");
                return t.rel = "stylesheet", t.href = e, t
            }

            load(e, t) {
                const n = AssetsLoader.assets[e][t];
                return n.loader || (n.loader = this.isAssetLoaded(n, e) ? Promise.resolve(!0) : this.loadAsset(n, e)), n.loader
            }

            isAssetLoaded(e, t) {
                const n = "script" === t ? `script[src="${e.src}"]` : `link[href="${e.src}"]`;
                return !!document.querySelectorAll(n)?.length
            }

            loadAsset(e, t) {
                return new Promise((n => {
                    const r = "style" === t ? this.getStyleElement(e.src) : this.getScriptElement(e.src);
                    r.onload = () => n(!0), this.appendAsset(e, r)
                }))
            }

            appendAsset(e, t) {
                const n = document.querySelector(e.before);
                if (n) return void n.insertAdjacentElement("beforebegin", t);
                const r = "head" === e.parent ? e.parent : "body";
                document[r].appendChild(t)
            }
        }

        t.default = AssetsLoader;
        const n = elementorFrontendConfig.urls.assets,
            r = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min",
            o = elementorFrontendConfig.version;
        AssetsLoader.assets = {
            script: {
                dialog: {src: `${n}lib/dialog/dialog${r}.js?ver=4.9.3`},
                "share-link": {src: `${n}lib/share-link/share-link${r}.js?ver=${o}`},
                swiper: {src: `${n}lib/swiper/v8/swiper${r}.js?ver=8.4.5`}
            },
            style: {
                swiper: {src: `${n}lib/swiper/v8/css/swiper${r}.css?ver=8.4.5`, parent: "head"},
                "e-lightbox": {src: elementorFrontendConfig?.responsive?.hasCustomBreakpoints ? `${elementorFrontendConfig.urls.uploadUrl}/elementor/css/custom-lightbox.min.css?ver=${o}` : `${n}css/conditionals/lightbox${r}.css?ver=${o}`},
                dialog: {
                    src: `${n}css/conditionals/dialog${r}.css?ver=${o}`,
                    parent: "head",
                    before: "#elementor-frontend-css"
                }
            }
        }
    }, 607: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = class Controls {
            getControlValue(e, t, n) {
                let r;
                return r = "object" == typeof e[t] && n ? e[t][n] : e[t], r
            }

            getResponsiveControlValue(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                const r = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || elementorFrontend.getCurrentDeviceMode(),
                    o = this.getControlValue(e, t, n);
                if ("widescreen" === r) {
                    const r = this.getControlValue(e, `${t}_widescreen`, n);
                    return r || 0 === r ? r : o
                }
                const s = elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop: !0});
                let i = r, a = s.indexOf(r), l = "";
                for (; a <= s.length;) {
                    if ("desktop" === i) {
                        l = o;
                        break
                    }
                    const r = `${t}_${i}`, d = this.getControlValue(e, r, n);
                    if (d || 0 === d) {
                        l = d;
                        break
                    }
                    a++, i = s[a]
                }
                return l
            }
        }
    }, 4252: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(4846), n(6211);

        class LightboxManager extends elementorModules.ViewModule {
            static getLightbox() {
                const e = new Promise((e => {
                        n.e(216).then(n.t.bind(n, 3942, 23)).then((t => {
                            let {default: n} = t;
                            return e(new n)
                        }))
                    })), t = elementorFrontend.utils.assetsLoader.load("script", "dialog"),
                    r = elementorFrontend.utils.assetsLoader.load("style", "dialog"),
                    o = elementorFrontend.utils.assetsLoader.load("script", "share-link"),
                    s = elementorFrontend.utils.assetsLoader.load("style", "swiper"),
                    i = elementorFrontend.utils.assetsLoader.load("style", "e-lightbox");
                return Promise.all([e, t, r, o, s, i]).then((() => e))
            }

            getDefaultSettings() {
                return {
                    selectors: {
                        links: "a, [data-elementor-lightbox]",
                        slideshow: "[data-elementor-lightbox-slideshow]"
                    }
                }
            }

            getDefaultElements() {
                return {
                    $links: jQuery(this.getSettings("selectors.links")),
                    $slideshow: jQuery(this.getSettings("selectors.slideshow"))
                }
            }

            isLightboxLink(e) {
                if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo) return !1;
                const t = elementorFrontend.getKitSettings("global_image_lightbox"),
                    n = e.dataset.elementorOpenLightbox;
                return "yes" === n || t && "no" !== n
            }

            isLightboxSlideshow() {
                return 0 !== this.elements.$slideshow.length
            }

            async onLinkClick(e) {
                const t = e.currentTarget, n = jQuery(e.target), r = elementorFrontend.isEditMode(),
                    o = r && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),
                    s = !!n.closest(".elementor-edit-area").length;
                if (!this.isLightboxLink(t)) return void (r && s && e.preventDefault());
                if (e.preventDefault(), r && !elementor.getPreferences("lightbox_in_editor")) return;
                if (o) return;
                (await LightboxManager.getLightbox()).createLightbox(t)
            }

            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e => this.onLinkClick(e)))
            }

            onInit() {
                super.onInit(...arguments), elementorFrontend.isEditMode() || this.maybeActivateLightboxOnLink()
            }

            maybeActivateLightboxOnLink() {
                this.elements.$links.each(((e, t) => {
                    if (this.isLightboxLink(t)) return LightboxManager.getLightbox(), !1
                }))
            }
        }

        t.default = LightboxManager
    }, 4901: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(4846), n(9655);
        t.default = class SwiperHandler {
            constructor(e, t) {
                return this.config = t, this.config.breakpoints && (this.config = this.adjustConfig(t)), e instanceof jQuery && (e = e[0]), e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"), e.closest(".elementor-widget")?.classList.add("e-widget-swiper"), new Promise((t => {
                    "undefined" != typeof Swiper ? ("function" == typeof Swiper && void 0 === window.Swiper && (window.Swiper = Swiper), t(this.createSwiperInstance(e, this.config))) : elementorFrontend.utils.assetsLoader.load("script", "swiper").then((() => t(this.createSwiperInstance(e, this.config))))
                }))
            }

            createSwiperInstance(e, t) {
                const n = window.Swiper;
                return n.prototype.adjustConfig = this.adjustConfig, new n(e, t)
            }

            adjustConfig(e) {
                if (!e.handleElementorBreakpoints) return e;
                const t = elementorFrontend.config.responsive.activeBreakpoints,
                    n = elementorFrontend.breakpoints.getBreakpointValues();
                return Object.keys(e.breakpoints).forEach((r => {
                    const o = parseInt(r);
                    let s;
                    if (o === t.mobile.value || o + 1 === t.mobile.value) s = 0; else if (!t.widescreen || o !== t.widescreen.value && o + 1 !== t.widescreen.value) {
                        const e = n.findIndex((e => o === e || o + 1 === e));
                        s = n[e - 1]
                    } else s = o;
                    e.breakpoints[s] = e.breakpoints[r], e.breakpoints[r] = {
                        slidesPerView: e.slidesPerView,
                        slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                    }
                })), e
            }
        }
    }, 3582: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(6409);

        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {selectors: {links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}
            }

            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
            }

            initActions() {
                this.actions = {
                    lightbox: async e => {
                        const t = await elementorFrontend.utils.lightbox;
                        e.slideshow ? t.openSlideshow(e.slideshow, e.url) : (e.id && (e.type = "image"), t.showModal(e))
                    }
                }
            }

            addAction(e, t) {
                this.actions[e] = t
            }

            runAction(e) {
                e = decodeURI(e);
                const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
                if (!t) return;
                const n = this.actions[t[1]];
                if (!n) return;
                let r = {};
                const o = e.match(/settings=(.+)/);
                o && (r = JSON.parse(atob(o[1]))), r.previousEvent = event;
                for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) i[a - 1] = arguments[a];
                n(r, ...i)
            }

            runLinkAction(e) {
                e.preventDefault(), this.runAction(jQuery(e.currentTarget).attr("href"), e)
            }

            runHashAction() {
                if (!location.hash) return;
                const e = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                e && this.runAction(e.getAttribute("data-e-action-hash"))
            }

            createActionHash(e, t) {
                return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
            }

            onInit() {
                super.onInit(), this.initActions(), elementorFrontend.on("components:init", this.runHashAction.bind(this))
            }
        }

        t.default = _default
    }, 7672: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.isScrollSnapActive = t.escapeHTML = void 0;
        t.escapeHTML = e => {
            const t = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"};
            return e.replace(/[&<>'"]/g, (e => t[e] || e))
        };
        t.isScrollSnapActive = () => "yes" === (elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes?.scroll_snap : elementorFrontend.config.settings.page?.scroll_snap)
    }, 8427: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;

        class BaseLoader extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {isInserted: !1, selectors: {firstScript: "script:first"}}
            }

            getDefaultElements() {
                return {$firstScript: jQuery(this.getSettings("selectors.firstScript"))}
            }

            insertAPI() {
                this.elements.$firstScript.before(jQuery("<script>", {src: this.getApiURL()})), this.setSettings("isInserted", !0)
            }

            getVideoIDFromURL(e) {
                const t = e.match(this.getURLRegex());
                return t && t[1]
            }

            onApiReady(e) {
                this.getSettings("isInserted") || this.insertAPI(), this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((() => {
                    this.onApiReady(e)
                }), 350)
            }

            getAutoplayURL(e) {
                return e.replace("&autoplay=0", "") + "&autoplay=1"
            }
        }

        t.default = BaseLoader
    }, 3126: (e, t, n) => {
        var r = n(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var o = r(n(8427));

        class VimeoLoader extends o.default {
            getApiURL() {
                return "https://player.vimeo.com/api/player.js"
            }

            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
            }

            isApiLoaded() {
                return window.Vimeo
            }

            getApiObject() {
                return Vimeo
            }

            getAutoplayURL(e) {
                const t = e.match(/#t=[^&]*/);
                return e.replace(t[0], "") + t
            }
        }

        t.default = VimeoLoader
    }, 5073: (e, t, n) => {
        var r = n(6784);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var o = r(n(8427));

        class YoutubeLoader extends o.default {
            getApiURL() {
                return "https://www.youtube.com/iframe_api"
            }

            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user|shorts)\/))([^?&"'>]+)/
            }

            isApiLoaded() {
                return window.YT && YT.loaded
            }

            getApiObject() {
                return YT
            }
        }

        t.default = YoutubeLoader
    }, 8309: (e, t, n) => {
        n.p = elementorFrontendConfig.urls.assets + "js/"
    }, 5896: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(5724), n(4846), n(9655), n(4364);

        class Breakpoints extends elementorModules.Module {
            constructor(e) {
                super(), this.responsiveConfig = e
            }

            getActiveBreakpointsList() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = {largeToSmall: !1, withDesktop: !1, ...e};
                const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                if (e.withDesktop) {
                    const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                    t.splice(e, 0, "desktop")
                }
                return e.largeToSmall && t.reverse(), t
            }

            getBreakpointValues() {
                const {activeBreakpoints: e} = this.responsiveConfig, t = [];
                return Object.values(e).forEach((e => {
                    t.push(e.value)
                })), t
            }

            getDesktopPreviousDeviceKey() {
                let e = "";
                const {activeBreakpoints: t} = this.responsiveConfig, n = Object.keys(t), r = n.length;
                return e = "min" === t[n[r - 1]].direction ? n[r - 2] : n[r - 1], e
            }

            getDesktopMinPoint() {
                const {activeBreakpoints: e} = this.responsiveConfig;
                return e[this.getDesktopPreviousDeviceKey()].value + 1
            }

            getDeviceMinBreakpoint(e) {
                if ("desktop" === e) return this.getDesktopMinPoint();
                const {activeBreakpoints: t} = this.responsiveConfig, n = Object.keys(t);
                let r;
                if (n[0] === e) r = 320; else if ("widescreen" === e) r = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen; else {
                    const o = n.indexOf(e);
                    r = t[n[o - 1]].value + 1
                }
                return r
            }

            getActiveMatchRegex() {
                return new RegExp(this.getActiveBreakpointsList().map((e => "_" + e)).join("|") + "$")
            }
        }

        t.default = Breakpoints
    }, 4799: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = t.Events = void 0;

        class Events {
            static dispatch(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                e = e instanceof jQuery ? e[0] : e, r && e.dispatchEvent(new CustomEvent(r, {detail: n})), e.dispatchEvent(new CustomEvent(t, {detail: n}))
            }
        }

        t.Events = Events;
        t.default = Events
    }, 5956: (e, t, n) => {
        n(5724);
        e.exports = function () {
            var e, t = Array.prototype.slice, n = {actions: {}, filters: {}};

            function _removeHook(e, t, r, o) {
                var s, i, a;
                if (n[e][t]) if (r) if (s = n[e][t], o) for (a = s.length; a--;) (i = s[a]).callback === r && i.context === o && s.splice(a, 1); else for (a = s.length; a--;) s[a].callback === r && s.splice(a, 1); else n[e][t] = []
            }

            function _addHook(e, t, r, o, s) {
                var i = {callback: r, priority: o, context: s}, a = n[e][t];
                if (a) {
                    var l = !1;
                    if (jQuery.each(a, (function () {
                        if (this.callback === r) return l = !0, !1
                    })), l) return;
                    a.push(i), a = function _hookInsertSort(e) {
                        for (var t, n, r, o = 1, s = e.length; o < s; o++) {
                            for (t = e[o], n = o; (r = e[n - 1]) && r.priority > t.priority;) e[n] = e[n - 1], --n;
                            e[n] = t
                        }
                        return e
                    }(a)
                } else a = [i];
                n[e][t] = a
            }

            function _runHook(e, t, r) {
                var o, s, i = n[e][t];
                if (!i) return "filters" === e && r[0];
                if (s = i.length, "filters" === e) for (o = 0; o < s; o++) r[0] = i[o].callback.apply(i[o].context, r); else for (o = 0; o < s; o++) i[o].callback.apply(i[o].context, r);
                return "filters" !== e || r[0]
            }

            return e = {
                removeFilter: function removeFilter(t, n) {
                    return "string" == typeof t && _removeHook("filters", t, n), e
                }, applyFilters: function applyFilters() {
                    var n = t.call(arguments), r = n.shift();
                    return "string" == typeof r ? _runHook("filters", r, n) : e
                }, addFilter: function addFilter(t, n, r, o) {
                    return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, r = parseInt(r || 10, 10), o), e
                }, removeAction: function removeAction(t, n) {
                    return "string" == typeof t && _removeHook("actions", t, n), e
                }, doAction: function doAction() {
                    var n = t.call(arguments), r = n.shift();
                    return "string" == typeof r && _runHook("actions", r, n), e
                }, addAction: function addAction(t, n, r, o) {
                    return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, r = parseInt(r || 10, 10), o), e
                }
            }, e
        }
    }, 5115: (e, t) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        const matchUserAgent = e => n.indexOf(e) >= 0, n = navigator.userAgent,
            r = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/"),
            o = matchUserAgent("Firefox"),
            s = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
            i = /Trident|MSIE/.test(n) && !!document.documentMode,
            a = !i && !!window.StyleMedia || matchUserAgent("Edg"),
            l = !!window.chrome && matchUserAgent("Chrome") && !(a || r), d = matchUserAgent("Chrome") && !!window.CSS,
            c = matchUserAgent("AppleWebKit") && !d, u = {
                isTouchDevice: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
                appleWebkit: c,
                blink: d,
                chrome: l,
                edge: a,
                firefox: o,
                ie: i,
                mac: matchUserAgent("Macintosh"),
                opera: r,
                safari: s,
                webkit: matchUserAgent("AppleWebKit")
            };
        t.default = u
    }, 8767: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(4846), n(9655);

        class _default extends elementorModules.Module {
            get(e, t) {
                let n;
                t = t || {};
                try {
                    n = t.session ? sessionStorage : localStorage
                } catch (t) {
                    return e ? void 0 : {}
                }
                let r = n.getItem("elementor");
                r = r ? JSON.parse(r) : {}, r.__expiration || (r.__expiration = {});
                const o = r.__expiration;
                let s = [];
                e ? o[e] && (s = [e]) : s = Object.keys(o);
                let i = !1;
                return s.forEach((e => {
                    new Date(o[e]) < new Date && (delete r[e], delete o[e], i = !0)
                })), i && this.save(r, t.session), e ? r[e] : r
            }

            set(e, t, n) {
                n = n || {};
                const r = this.get(null, n);
                if (r[e] = t, n.lifetimeInSeconds) {
                    const t = new Date;
                    t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds), r.__expiration[e] = t.getTime()
                }
                this.save(r, n.session)
            }

            save(e, t) {
                let n;
                try {
                    n = t ? sessionStorage : localStorage
                } catch (e) {
                    return
                }
                n.setItem("elementor", JSON.stringify(e))
            }
        }

        t.default = _default
    }, 7842: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;

        class _default extends elementorModules.Module {
            constructor() {
                super(), elementorFrontend.elementsHandler.attachHandler("text-path", (() => n.e(30).then(n.bind(n, 241))))
            }
        }

        t.default = _default
    }, 3852: (e, t, n) => {
        var r = n(735), o = String, s = TypeError;
        e.exports = function (e) {
            if (r(e)) return e;
            throw new s("Can't set " + o(e) + " as a prototype")
        }
    }, 1780: e => {
        e.exports = {
            IndexSizeError: {s: "INDEX_SIZE_ERR", c: 1, m: 1},
            DOMStringSizeError: {s: "DOMSTRING_SIZE_ERR", c: 2, m: 0},
            HierarchyRequestError: {s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1},
            WrongDocumentError: {s: "WRONG_DOCUMENT_ERR", c: 4, m: 1},
            InvalidCharacterError: {s: "INVALID_CHARACTER_ERR", c: 5, m: 1},
            NoDataAllowedError: {s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0},
            NoModificationAllowedError: {s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1},
            NotFoundError: {s: "NOT_FOUND_ERR", c: 8, m: 1},
            NotSupportedError: {s: "NOT_SUPPORTED_ERR", c: 9, m: 1},
            InUseAttributeError: {s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1},
            InvalidStateError: {s: "INVALID_STATE_ERR", c: 11, m: 1},
            SyntaxError: {s: "SYNTAX_ERR", c: 12, m: 1},
            InvalidModificationError: {s: "INVALID_MODIFICATION_ERR", c: 13, m: 1},
            NamespaceError: {s: "NAMESPACE_ERR", c: 14, m: 1},
            InvalidAccessError: {s: "INVALID_ACCESS_ERR", c: 15, m: 1},
            ValidationError: {s: "VALIDATION_ERR", c: 16, m: 0},
            TypeMismatchError: {s: "TYPE_MISMATCH_ERR", c: 17, m: 1},
            SecurityError: {s: "SECURITY_ERR", c: 18, m: 1},
            NetworkError: {s: "NETWORK_ERR", c: 19, m: 1},
            AbortError: {s: "ABORT_ERR", c: 20, m: 1},
            URLMismatchError: {s: "URL_MISMATCH_ERR", c: 21, m: 1},
            QuotaExceededError: {s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1},
            TimeoutError: {s: "TIMEOUT_ERR", c: 23, m: 1},
            InvalidNodeTypeError: {s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1},
            DataCloneError: {s: "DATA_CLONE_ERR", c: 25, m: 1}
        }
    }, 8223: (e, t, n) => {
        var r = n(4762), o = Error, s = r("".replace), i = String(new o("zxcasd").stack), a = /\n\s*at [^:]*:[^\n]*/,
            l = a.test(i);
        e.exports = function (e, t) {
            if (l && "string" == typeof e && !o.prepareStackTrace) for (; t--;) e = s(e, a, "");
            return e
        }
    }, 680: (e, t, n) => {
        var r = n(4762), o = n(8120);
        e.exports = function (e, t, n) {
            try {
                return r(o(Object.getOwnPropertyDescriptor(e, t)[n]))
            } catch (e) {
            }
        }
    }, 2429: (e, t, n) => {
        var r = n(1483), o = n(1704), s = n(1953);
        e.exports = function (e, t, n) {
            var i, a;
            return s && r(i = t.constructor) && i !== n && o(a = i.prototype) && a !== n.prototype && s(e, a), e
        }
    }, 735: (e, t, n) => {
        var r = n(1704);
        e.exports = function (e) {
            return r(e) || null === e
        }
    }, 3963: (e, t, n) => {
        var r = n(1807), o = n(8120), s = n(2293), i = n(41), a = n(8660), l = n(8901), d = a((function () {
            var e = this.iterator, t = s(r(this.next, e));
            if (!(this.done = !!t.done)) return l(e, this.mapper, [t.value, this.counter++], !0)
        }));
        e.exports = function map(e) {
            return s(this), o(e), new d(i(this), {mapper: e})
        }
    }, 7969: (e, t, n) => {
        var r = n(6261);
        e.exports = function (e, t) {
            return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
        }
    }, 1953: (e, t, n) => {
        var r = n(680), o = n(1704), s = n(3312), i = n(3852);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1, n = {};
            try {
                (e = r(Object.prototype, "__proto__", "set"))(n, []), t = n instanceof Array
            } catch (e) {
            }
            return function setPrototypeOf(n, r) {
                return s(n), i(r), o(n) ? (t ? e(n, r) : n.__proto__ = r, n) : n
            }
        }() : void 0)
    }, 6261: (e, t, n) => {
        var r = n(6145), o = String;
        e.exports = function (e) {
            if ("Symbol" === r(e)) throw new TypeError("Cannot convert a Symbol value to a string");
            return o(e)
        }
    }, 3991: (e, t, n) => {
        var r = n(8612), o = n(3963);
        r({target: "Iterator", proto: !0, real: !0, forced: n(9557)}, {map: o})
    }, 4364: (e, t, n) => {
        n(3991)
    }, 6409: (e, t, n) => {
        var r = n(8612), o = n(5578), s = n(1409), i = n(7738), a = n(5835).f, l = n(5755), d = n(6021), c = n(2429),
            u = n(7969), h = n(1780), m = n(8223), f = n(382), g = n(9557), p = "DOMException", v = s("Error"),
            y = s(p), b = function DOMException() {
                d(this, w);
                var e = arguments.length, t = u(e < 1 ? void 0 : arguments[0]),
                    n = u(e < 2 ? void 0 : arguments[1], "Error"), r = new y(t, n), o = new v(t);
                return o.name = p, a(r, "stack", i(1, m(o.stack, 1))), c(r, this, b), r
            }, w = b.prototype = y.prototype, _ = "stack" in new v(p), E = "stack" in new y(1, 2),
            k = y && f && Object.getOwnPropertyDescriptor(o, p), A = !(!k || k.writable && k.configurable),
            S = _ && !A && !E;
        r({global: !0, constructor: !0, forced: g || S}, {DOMException: S ? b : y});
        var M = s(p), C = M.prototype;
        if (C.constructor !== M) for (var L in g || a(C, "constructor", i(1, M)), h) if (l(h, L)) {
            var D = h[L], R = D.s;
            l(M, R) || a(M, R, i(6, D.c))
        }
    }
}, e => {
    e.O(0, [941], (() => {
        return t = 7603, e(e.s = t);
        var t
    }));
    e.O()
}]);
/**
 * Swiper 5.3.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 29, 2020
 */

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function () {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, t = "undefined" == typeof window ? {
        document: e,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window, i = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function s(s, a) {
        var r = [], n = 0;
        if (s && !a && s instanceof i) return s;
        if (s) if ("string" == typeof s) {
            var o, l, d = s.trim();
            if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                var h = "div";
                for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
            } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
        } else if (s.nodeType || s === t || s === e) r.push(s); else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t); else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0], r = t[1], n = t[2], o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i); else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }

            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (h = 0; h < p.length; h += 1) {
                    var v = p[h];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(v, l, o)
                } else for (h = 0; h < p.length; h += 1) {
                    var f = p[h];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                        listener: n,
                        proxyListener: d
                    }), u.addEventListener(f, d, o)
                }
            }
            return this
        }, off: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
                var p = this[h], c = void 0;
                if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
                    var v = c[u];
                    r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], l = 0; l < this.length; l += 1) {
                var d = this[l], h = void 0;
                try {
                    h = new t.CustomEvent(o, {detail: r, bubbles: !0, cancelable: !0})
                } catch (t) {
                    (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                }
                d.dom7EventData = i.filter((function (e, t) {
                    return t > 0
                })), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
            }
            return this
        }, transitionEnd: function (e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;

            function a(r) {
                if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }

            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                var i = this[0], s = i.getBoundingClientRect(), a = e.body, r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0, o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {top: s.top + o - r, left: s.left + l - n}
            }
            return null
        }, css: function (e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1) if ("string" == typeof t) {
                    var o = e.createElement("div");
                    for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]); else this[n].appendChild(t)
            }
            return this
        }, prepend: function (t) {
            var s, a;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
                var r = e.createElement("div");
                for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
            } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]); else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        }, nextAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        }, prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        }, prevAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        }, children: function (e) {
            for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        }, filter: function (e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t)
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach((function (e) {
        s.fn[e] = s.fn[e] || r[e]
    }));
    var n = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach((function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            }))
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function (e) {
                return e.replace(",", ".")
            })).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
        }, parseUrlQuery: function (e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
                return "" !== e
            }))).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a) for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                    var d = r[o], h = Object.getOwnPropertyDescriptor(a, d);
                    void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d])
                }
            }
            return i
        }
    }, o = {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function () {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                t.addEventListener("testPassiveListener", null, i)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in t
    }, l = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
            t.on(e, t.params.on[e])
        }))
    }, d = {components: {configurable: !0}};
    l.prototype.on = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        })), s
    }, l.prototype.once = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
        }

        return a.f7proxy = t, s.on(e, a, i)
    }, l.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function (s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }))
        })), i) : i
    }, l.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function (e) {
                    t.push(e)
                })), t.forEach((function (e) {
                    e.apply(a, s)
                }))
            }
        })), r
    }, l.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params)
        }))
    }, l.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var s = t.modules[i], a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function (e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            })), s.on && t.on && Object.keys(s.on).forEach((function (e) {
                t.on(e, s.on[e])
            })), s.create && s.create.bind(t)(a)
        }))
    }, d.components.set = function (e) {
        this.use && this.use(e)
    }, l.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function (t) {
            s.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function (t) {
            s[t] = e.static[t]
        })), e.install && e.install.apply(s, t), s
    }, l.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function (e) {
            return s.installModule(e)
        })), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(l, d);
    var h = {
        updateSize: function () {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL,
                o = this.virtual && e.virtual.enabled, l = o ? this.virtual.slides.length : this.slides.length,
                d = i.children("." + this.params.slideClass), h = o ? this.virtual.slides.length : d.length, p = [],
                c = [], u = [];

            function v(t) {
                return !e.cssMode || t !== d.length - 1
            }

            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length, b = this.snapGrid.length, w = e.spaceBetween, y = -f, x = 0, T = 0;
            if (void 0 !== s) {
                var E, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
                    marginLeft: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = d.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0, I = void 0, D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = t.getComputedStyle($[0], null), B = $[0].style.transform,
                                N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0); else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width")),
                                    V = parseFloat(H.getPropertyValue("padding-left")),
                                    Y = parseFloat(H.getPropertyValue("padding-right")),
                                    F = parseFloat(H.getPropertyValue("margin-left")),
                                    W = parseFloat(H.getPropertyValue("margin-right")),
                                    R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height")),
                                    j = parseFloat(H.getPropertyValue("padding-top")),
                                    K = parseFloat(H.getPropertyValue("padding-bottom")),
                                    U = parseFloat(H.getPropertyValue("margin-top")),
                                    _ = parseFloat(H.getPropertyValue("margin-bottom")),
                                    Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
                        } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                        d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({width: this.virtualSize + e.spaceBetween + "px"}), e.setWrapperSize && (this.isHorizontal() ? i.css({width: this.virtualSize + e.spaceBetween + "px"}) : i.css({height: this.virtualSize + e.spaceBetween + "px"})), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({width: this.virtualSize + e.spaceBetween + "px"}) : i.css({height: this.virtualSize + e.spaceBetween + "px"}), e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te)
                    }
                    p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                }
                if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({marginLeft: w + "px"}) : d.filter(v).css({marginRight: w + "px"}) : d.filter(v).css({marginBottom: w + "px"})), e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function (t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }));
                    var se = (ie -= e.spaceBetween) - s;
                    p = p.map((function (e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function (t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    })), (ae -= e.spaceBetween) < s) {
                        var re = (s - ae) / 2;
                        p.forEach((function (e, t) {
                            p[t] = e - re
                        })), c.forEach((function (e, t) {
                            c[t] = e + re
                        }))
                    }
                }
                n.extend(this, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) if (this.params.centeredSlides) i.push.apply(i, this.visibleSlides); else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0])
            } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s
            }
            s && this.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.slides, a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(r - o.swiperSlideOffset), h = d + this.slidesSizesGrid[n];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
                    }
                    o.progress = a ? -l : l
                }
                this.visibleSlides = s(this.visibleSlides)
            }
        }, updateProgress: function (e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params, s = this.maxTranslate() - this.minTranslate(), a = this.progress, r = this.isBeginning,
                o = this.isEnd, l = r, d = o;
            0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: o
            }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a)
        }, updateSlidesClasses: function () {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid,
                r = this.params, o = this.activeIndex, l = this.realIndex, d = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i); else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1), h !== o) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                n.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
            } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this.params, i = s(e.target).closest("." + t.slideClass)[0], a = !1;
            if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.wrapperEl, n = this.progress,
                o = 0, l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var n = this, o = n.params, l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
        }
    };
    var c = {
        setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                    if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex, a = this.params;
            if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var u = {
        slideTo: function (e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this, n = e;
            n < 0 && (n = 0);
            var o = r.params, l = r.snapGrid, d = r.slidesGrid, h = r.previousIndex, p = r.activeIndex,
                c = r.rtlTranslate, u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n), f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g), o.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
            if (o.cssMode) {
                var w = r.isHorizontal();
                return 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = -g : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = -g, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = -g, !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
        }, slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        }, slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        }, slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }

            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var d, h = l(o ? this.translate : -this.translate), p = r.map((function (e) {
                return l(e)
            })), c = (n.map((function (e) {
                return l(e)
            })), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function (e) {
                !c && h >= e && (c = e)
            })), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
        }, slideReset: function (e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        }, slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex, r = Math.min(this.params.slidesPerGroupSkip, a),
                n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
        }, slideToClickedSlide: function () {
            var e, t = this, i = t.params, a = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, o = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function () {
                    t.slideTo(o)
                }))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function () {
                    t.slideTo(o)
                }))) : t.slideTo(o)
            } else t.slideTo(o)
        }
    };
    var v = {
        loopCreate: function () {
            var t = this, i = t.params, a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [], h = [];
            r.each((function (e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
            }));
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        }, loopFix: function () {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev,
                r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l); else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var f = {
        setGrabCursor: function (e) {
            if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
        appendSlide: function (e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]); else t.append(e);
            i.loop && this.loopCreate(), i.observer && o.observer || this.update()
        }, prependSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                a = s + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
        }, addSlide: function (e, t) {
            var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t); else if (e >= r) this.appendSlide(t); else {
                for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                    var h = this.slides.eq(d);
                    h.remove(), l.unshift(h)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else i.append(t);
                for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0)
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!t.cordova && !t.phonegap),
        phonegap: !(!t.cordova && !t.phonegap),
        electron: !1
    }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);

    function D(i) {
        var a = this.touchEventsData, r = this.params, o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved))) if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0; else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var h = o.currentX, p = o.currentY, c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (!c || !(h <= u || h >= t.screen.width - u)) {
                    if (n.extend(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                        var v = !0;
                        d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                        var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || f) && l.preventDefault()
                    }
                    this.emit("touchStart", l)
                }
            }
        }
    }

    function O(t) {
        var i = this.touchEventsData, a = this.params, r = this.touches, o = this.rtlTranslate, l = t;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    h = "touchmove" === l.type ? d.pageX : l.pageX, p = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p);
                if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (n.extend(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }), i.touchStartTime = n.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
                    if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    r.currentX = h, r.currentY = p;
                    var c = r.currentX - r.startX, u = r.currentY - r.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                            this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                            var m = !0, g = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                time: n.now()
                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }

    function A(e) {
        var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, o = t.$wrapperEl,
            l = t.slidesGrid, d = t.snapGrid, h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = n.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick((function () {
            t.destroyed || (t.allowClick = !0)
        })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position,
                        g = v.time - f.time;
                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w;
                r && (y = -y);
                var x, T, E = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0); else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0); else if (s.freeModeSticky) {
                    for (var C, M = 0; M < d.length; M += 1) if (d[M] > -y) {
                        C = M;
                        break
                    }
                    y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                }
                if (T && t.once("transitionEnd", (function () {
                    t.loopFix()
                })), 0 !== t.velocity) {
                    if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                        var P = Math.abs((r ? -y : y) - t.translate), z = t.slidesSizesGrid[t.activeIndex];
                        b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                    }
                } else if (s.freeModeSticky) return void t.slideToClosest();
                s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd((function () {
                        t && !t.destroyed && t.transitionEnd()
                    })))
                }))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function () {
                    t && !t.destroyed && t.transitionEnd()
                })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (s.freeModeSticky) return void t.slideToClosest();
            (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
            for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2])
            }
            var D = (p - l[k]) / $, O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (u > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k))
            }
        }
    }

    function G() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function H(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function B() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
    }

    var N = !1;

    function X() {
    }

    var V = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, Y = {
            update: h, translate: p, transition: c, slide: u, loop: v, grabCursor: f, manipulation: L, events: {
                attachEvents: function () {
                    var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl;
                    this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = H.bind(this);
                    var r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1); else {
                        if (o.touch) {
                            var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                                passive: !1,
                                capture: r
                            } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0)
                        }
                        (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
                }, detachEvents: function () {
                    var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1); else {
                        if (o.touch) {
                            var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                        }
                        (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    var e = this.activeIndex, t = this.initialized, i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params, a = this.$el, r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = this.getBreakpoint(r);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in r ? r[o] : void 0;
                            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
                                var t = l[e];
                                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var d = l || this.originalParams, h = s.slidesPerColumn > 1, p = d.slidesPerColumn > 1;
                            h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                            var c = d.direction && d.direction !== s.direction,
                                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                            c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
                        }
                    }
                }, getBreakpoint: function (e) {
                    if (e) {
                        var i = !1, s = Object.keys(e).map((function (e) {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                var i = parseFloat(e.substr(1));
                                return {value: t.innerHeight * i, point: e}
                            }
                            return {value: e, point: e}
                        }));
                        s.sort((function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var a = 0; a < s.length; a += 1) {
                            var r = s[a], n = r.point;
                            r.value <= t.innerWidth && (i = n)
                        }
                        return i || "max"
                    }
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    var e = this.params, t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            }, classes: {
                addClasses: function () {
                    var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = [];
                    a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function (i) {
                        e.push(t.containerModifierClass + i)
                    })), s.addClass(e.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            }, images: {
                loadImage: function (e, i, s, a, r, n) {
                    var o;

                    function l() {
                        n && n()
                    }

                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, F = {}, W = function (e) {
            function t() {
                for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
                1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach((function (e) {
                    Object.keys(Y[e]).forEach((function (i) {
                        t.prototype[i] || (t.prototype[i] = Y[e][i])
                    }))
                }));
                var h = this;
                void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach((function (e) {
                    var t = h.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0], s = t.params[i];
                        if ("object" != typeof s || null === s) return;
                        if (!(i in r && "enabled" in s)) return;
                        !0 === r[i] && (r[i] = {enabled: !0}), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {enabled: !1})
                    }
                }));
                var p = n.extend({}, V);
                h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
                var c = s(h.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each((function (e, i) {
                            var s = n.extend({}, r, {el: i});
                            u.push(new t(s))
                        })), u
                    }
                    var v, f, m;
                    return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (e) {
                        return c.children(e)
                    } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                        $el: c,
                        el: a,
                        $wrapperEl: v,
                        wrapperEl: v[0],
                        classNames: [],
                        slides: s(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === h.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === h.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === v.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: h.params.allowSlideNext,
                        allowSlidePrev: h.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2],
                            cancel: f[3]
                        }, h.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: n.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: h.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), h.useModules(), h.params.init && h.init(), h
                }
            }

            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return t.prototype.slidesPerViewDynamic = function () {
                var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function () {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid, i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.changeDirection = function (e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function (t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                })), this.emit("changeDirection"), t && this.update(), this)
            }, t.prototype.init = function () {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, o = i.slides;
                return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null)
            }, t.extendDefaults = function (e) {
                n.extend(F, e)
            }, i.extendedDefaults.get = function () {
                return F
            }, i.defaults.get = function () {
                return V
            }, i.Class.get = function () {
                return e
            }, i.$.get = function () {
                return s
            }, Object.defineProperties(t, i), t
        }(l), R = {name: "device", proto: {device: I}, static: {device: I}},
        q = {name: "support", proto: {support: o}, static: {support: o}}, j = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g), isSafari: function () {
                var e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        }, K = {name: "browser", proto: {browser: j}, static: {browser: j}}, U = {
            name: "resize", create: function () {
                var e = this;
                n.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, _ = {
            func: t.MutationObserver || t.WebkitMutationObserver, attach: function (e, i) {
                void 0 === i && (i = {});
                var s = this, a = new (0, _.func)((function (e) {
                    if (1 !== e.length) {
                        var i = function () {
                            s.emit("observerUpdate", e[0])
                        };
                        t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                    } else s.emit("observerUpdate", e[0])
                }));
                a.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), s.observer.observers.push(a)
            }, init: function () {
                if (o.observer && this.params.observer) {
                    if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {childList: this.params.observeSlideChildren}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach((function (e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        }, Z = {
            name: "observer",
            params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
            create: function () {
                n.extend(this, {
                    observer: {
                        init: _.init.bind(this),
                        attach: _.attach.bind(this),
                        destroy: _.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, Q = {
            update: function (e) {
                var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides,
                    o = t.params.virtual, l = o.addSlidesBefore, d = o.addSlidesAfter, h = t.virtual, p = h.from, c = h.to,
                    u = h.slides, v = h.slidesGrid, f = h.renderSlide, m = h.offset;
                t.updateActiveIndex();
                var g, b, w, y = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
                var x = Math.max((y || 0) - w, 0), T = Math.min((y || 0) + b, u.length - 1),
                    E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

                function S() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (n.extend(t.virtual, {
                    from: x,
                    to: T,
                    offset: E,
                    slidesGrid: t.slidesGrid
                }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: x,
                    to: T,
                    slides: function () {
                        for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void S();
                var C = [], M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var P = p; P <= c; P += 1) (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
                M.forEach((function (e) {
                    t.$wrapperEl.append(f(u[e], e))
                })), C.sort((function (e, t) {
                    return t - e
                })).forEach((function (e) {
                    t.$wrapperEl.prepend(f(u[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
            }, renderSlide: function (e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
            }, appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
                this.virtual.update(!0)
            }, prependSlide: function (e) {
                var t = this.activeIndex, i = t + 1, s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                    i = t + e.length, s = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache, n = {};
                    Object.keys(r).forEach((function (e) {
                        var t = r[e], i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                    })), this.virtual.cache = n
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            }, removeSlide: function (e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0); else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            }, removeAllSlides: function () {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        }, J = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                n.extend(this, {
                    virtual: {
                        update: Q.update.bind(this),
                        appendSlide: Q.appendSlide.bind(this),
                        prependSlide: Q.prependSlide.bind(this),
                        removeSlide: Q.removeSlide.bind(this),
                        removeAllSlides: Q.removeAllSlides.bind(this),
                        renderSlide: Q.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {watchSlidesProgress: !0};
                        n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, ee = {
            handle: function (i) {
                var s = this.rtlTranslate, a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth, l = t.innerHeight, d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
                }
            }, enable: function () {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, te = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                n.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: ee.enable.bind(this),
                        disable: ee.disable.bind(this),
                        handle: ee.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var ie = {
        lastScrollTime: n.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function () {
            return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var t = "onwheel" in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel"
        }, normalize: function (e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        }, handleMouseEnter: function () {
            this.mouseEntered = !0
        }, handleMouseLeave: function () {
            this.mouseEntered = !1
        }, handle: function (e) {
            var t = e, i = this, a = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var r = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var o = 0, l = i.rtlTranslate ? -1 : 1, d = ie.normalize(t);
            if (a.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                o = d.pixelX * l
            } else {
                if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                o = d.pixelY
            } else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
            if (0 === o) return !0;
            if (a.invert && (o = -o), i.params.freeMode) {
                var h = {time: n.now(), delta: Math.abs(o), direction: Math.sign(o)},
                    p = i.mousewheel.lastEventBeforeSnap,
                    c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                if (!c) {
                    i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                    var u = i.getTranslate() + o * a.sensitivity, v = i.isBeginning, f = i.isEnd;
                    if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                        var m = i.mousewheel.recentWheelEvents;
                        m.length >= 15 && m.shift();
                        var g = m.length ? m[m.length - 1] : void 0, b = m[0];
                        if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0); else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                            var w = o > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick((function () {
                                i.slideToClosest(i.params.speed, !0, void 0, w)
                            }), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((function () {
                            i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                }
            } else {
                var y = {time: n.now(), delta: Math.abs(o), direction: Math.sign(o), raw: e},
                    x = i.mousewheel.recentWheelEvents;
                x.length >= 2 && x.shift();
                var T = x.length ? x[x.length - 1] : void 0;
                if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }, animateSlider: function (e) {
            return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
        }, releaseScroll: function (e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
            return !1
        }, enable: function () {
            var e = ie.event();
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
        }, disable: function () {
            var e = ie.event();
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
        }
    }, se = {
        update: function () {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        }, onPrevClick: function (e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        }, onNextClick: function (e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        }, init: function () {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
        }
    }, ae = {
        update: function () {
            var e = this.rtl, t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i,
                    a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                    r = this.pagination.$el,
                    n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each((function (e, a) {
                        var r = s(a), n = r.index();
                        n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                    })); else {
                        var p = h.eq(i), c = p.index();
                        if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop) if (c >= h.length - t.dynamicMainBullets) {
                                for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                            } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"); else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4),
                            b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                            w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / n, T = 1, E = 1;
                    "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        }, render: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                    i = this.pagination.$el, s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        }, init: function () {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                })), n.extend(e.pagination, {$el: i, el: i[0]}))
            }
        }, destroy: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }, re = {
        setTranslate: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize,
                    r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
                    n[0].style.opacity = 0, n.transition(400)
                }), 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize,
                    o = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: o,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        }, getPointerPosition: function (e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }, setDragPosition: function (e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize,
                o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick((function () {
                a.css("opacity", 0), a.transition(400)
            }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        }, enableDraggable: function () {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params,
                    r = t.$el[0], n = !(!o.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    l = !(!o.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
            }
        }, disableDraggable: function () {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params,
                    r = t.$el[0], n = !(!o.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    l = !(!o.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
            }
        }, init: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && e.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, ne = {
        setTransform: function (e, t) {
            var i = this.rtl, a = s(e), r = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0",
                o = a.attr("data-swiper-parallax-x"), l = a.attr("data-swiper-parallax-y"),
                d = a.attr("data-swiper-parallax-scale"), h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p
            }
            if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)"); else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        }, setTranslate: function () {
            var e = this, t = e.$el, i = e.slides, a = e.progress, r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                e.parallax.setTransform(i, a)
            })), i.each((function (t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                    e.parallax.setTransform(i, n)
                }))
            }))
        }, setTransition: function (e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                var a = s(i), r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r)
            }))
        }
    }, oe = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        }, onGestureStart: function (e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e)
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!o.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!o.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, o = s.height * t.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom, b = this.params.zoom, w = g.gesture,
                y = g.image;
            (w.$slideEl || (w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        }, out: function () {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !o.passiveListener || {passive: !1, capture: !0}, s = "." + this.params.slideClass;
                o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }, disable: function () {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !o.passiveListener || {passive: !1, capture: !0}, s = "." + this.params.slideClass;
                o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }, le = {
        loadInSlide: function (e, t) {
            void 0 === t && (t = !0);
            var i = this, a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                    n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each((function (e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"),
                        p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, (function () {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1)
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
                        }
                    })), i.emit("lazyImageLoad", r[0], o[0])
                }))
            }
        }, load: function () {
            var e = this, t = e.$wrapperEl, i = e.params, a = e.slides, r = e.activeIndex,
                n = e.virtual && i.virtual.enabled, o = i.lazy, l = i.slidesPerView;

            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (a[e]) return !0;
                return !1
            }

            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
            }

            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t, i) {
                var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                e.lazy.loadInSlide(a)
            })); else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p); else e.lazy.loadInSlide(r);
            if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
            } else {
                var b = t.children("." + i.slideNextClass);
                b.length > 0 && e.lazy.loadInSlide(h(b));
                var w = t.children("." + i.slidePrevClass);
                w.length > 0 && e.lazy.loadInSlide(h(w))
            }
        }
    }, de = {
        LinearSpline: function (e, t) {
            var i, s, a, r, n, o = function (e, t) {
                for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var i, s, a = this, r = a.controller.control;

            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]); else r instanceof W && t !== r && n(r)
        }, setTransition: function (e, t) {
            var i, s = this, a = s.controller.control;

            function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick((function () {
                    t.updateAutoHeight()
                })), t.$wrapperEl.transitionEnd((function () {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                })))
            }

            if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]); else a instanceof W && t !== a && r(a)
        }
    }, he = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        }, updatePagination: function () {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            }))
        }, init: function () {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }, destroy: function () {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }, pe = {
        init: function () {
            if (this.params.history) {
                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = t.location.pathname.slice(1).split("/").filter((function (e) {
                return "" !== e
            })), i = e.length;
            return {key: e[i - 2], value: e[i - 1]}
        }, setHistory: function (e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i), a = pe.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({value: a}, null, a) : t.history.pushState({value: a}, null, a))
            }
        }, slugify: function (e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, i) {
            if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var r = this.slides.eq(s);
                if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i)
                }
            } else this.slideTo(0, e, i)
        }
    }, ce = {
        onHashCange: function () {
            var t = e.location.hash.replace("#", "");
            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === i) return;
                this.slideTo(i)
            }
        }, setHash: function () {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                e.location.hash = s || ""
            }
        }, init: function () {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
                    var n = this.slides.eq(a);
                    if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                        var o = n.index();
                        this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                    }
                }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, ue = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick((function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }), i)
        }, start: function () {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop: function () {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        }, pause: function (e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
        }
    }, ve = {
        setTranslate: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: r}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.$wrapperEl;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function () {
                    if (!a && t && !t.destroyed) {
                        a = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                    }
                }))
            }
        }
    }, fe = {
        setTranslate: function () {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height,
                o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(),
                p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: r + "px"})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
            for (var u = 0; u < a.length; u += 1) {
                var v = a.eq(u), f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                    var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                    M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                    P = d.shadowScale, z = d.shadowScale / M, k = d.shadowOffset;
                e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
            }
            var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, me = {
        setTranslate: function () {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i), r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -a[0].swiperSlideOffset, d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                        p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function () {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                    }
                }))
            }
        }
    }, ge = {
        setTranslate: function () {
            for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u), m = r[u], g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier, b = l ? p * g : 0,
                    w = l ? 0 : p * g, y = -c * Math.abs(g), x = n.stretch;
                "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(n.stretch) / 100 * m);
                var T = l ? 0 : x * g, E = l ? x * g : 0;
                Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                var S = "translate3d(" + E + "px," + T + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                    var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                        M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, be = {
        init: function () {
            var e = this.params.thumbs, t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), n.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        }, onThumbClick: function () {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex, i = e.clickedSlide;
                if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var a;
                    if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                        var r = this.activeIndex;
                        this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                        var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                            o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                        a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    this.slideTo(a)
                }
            }
        }, update: function (e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                if (this.realIndex !== t.realIndex) {
                    var s, a = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                        var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                            n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                    } else s = this.realIndex;
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                }
                var o = 1, l = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l); else for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
            }
        }
    }, we = [R, q, K, U, Z, J, te, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            n.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: ie.enable.bind(this),
                    disable: ie.disable.bind(this),
                    handle: ie.handle.bind(this),
                    handleMouseEnter: ie.handleMouseEnter.bind(this),
                    handleMouseLeave: ie.handleMouseLeave.bind(this),
                    animateSlider: ie.animateSlider.bind(this),
                    releaseScroll: ie.releaseScroll.bind(this),
                    lastScrollTime: n.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init: function () {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            n.extend(this, {
                navigation: {
                    init: se.init.bind(this),
                    update: se.update.bind(this),
                    destroy: se.destroy.bind(this),
                    onNextClick: se.onNextClick.bind(this),
                    onPrevClick: se.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t, i = this.navigation, a = i.$nextEl, r = i.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            n.extend(this, {
                pagination: {
                    init: ae.init.bind(this),
                    render: ae.render.bind(this),
                    update: ae.update.bind(this),
                    destroy: ae.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            n.extend(this, {
                scrollbar: {
                    init: re.init.bind(this),
                    destroy: re.destroy.bind(this),
                    updateSize: re.updateSize.bind(this),
                    setTranslate: re.setTranslate.bind(this),
                    setTransition: re.setTransition.bind(this),
                    enableDraggable: re.enableDraggable.bind(this),
                    disableDraggable: re.disableDraggable.bind(this),
                    setDragPosition: re.setDragPosition.bind(this),
                    getPointerPosition: re.getPointerPosition.bind(this),
                    onDragStart: re.onDragStart.bind(this),
                    onDragMove: re.onDragMove.bind(this),
                    onDragEnd: re.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            n.extend(this, {
                parallax: {
                    setTransform: ne.setTransform.bind(this),
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var e = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (i) {
                t[i] = oe[i].bind(e)
            })), n.extend(e, {zoom: t});
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function () {
                    return i
                }, set: function (t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                            a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }, slideChange: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            n.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: le.load.bind(this),
                    loadInSlide: le.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }, slideChange: function () {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            n.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: de.getInterpolateFunction.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var e = this;
            n.extend(e, {a11y: {liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(he).forEach((function (t) {
                e.a11y[t] = he[t].bind(e)
            }))
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            n.extend(this, {
                history: {
                    init: pe.init.bind(this),
                    setHistory: pe.setHistory.bind(this),
                    setHistoryPopState: pe.setHistoryPopState.bind(this),
                    scrollToSlide: pe.scrollToSlide.bind(this),
                    destroy: pe.destroy.bind(this)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }, slideChange: function () {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            n.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: ce.init.bind(this),
                    destroy: ce.destroy.bind(this),
                    setHash: ce.setHash.bind(this),
                    onHashCange: ce.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }, slideChange: function () {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            var e = this;
            n.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: ue.run.bind(e),
                    start: ue.start.bind(e),
                    stop: ue.stop.bind(e),
                    pause: ue.pause.bind(e),
                    onVisibilityChange: function () {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                    },
                    onTransitionEnd: function (t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, touchEnd: function () {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            n.extend(this, {
                fadeEffect: {
                    setTranslate: ve.setTranslate.bind(this),
                    setTransition: ve.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            n.extend(this, {
                cubeEffect: {
                    setTranslate: fe.setTranslate.bind(this),
                    setTransition: fe.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            n.extend(this, {
                flipEffect: {
                    setTranslate: me.setTranslate.bind(this),
                    setTransition: me.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            n.extend(this, {
                coverflowEffect: {
                    setTranslate: ge.setTranslate.bind(this),
                    setTransition: ge.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                multipleActiveThumbs: !0,
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function () {
            n.extend(this, {
                thumbs: {
                    swiper: null,
                    init: be.init.bind(this),
                    update: be.update.bind(this),
                    onThumbClick: be.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W
}));
(function ($) {

    function aizan_css_inline_js() {
        var _inline_css = "<style>";
        $(document).find('.pxl-inline-css').each(function () {
            var _this = $(this);
            _inline_css += _this.attr("data-css") + " ";
            _this.remove();
        });
        _inline_css += "</style>";
        $('head').append(_inline_css);
    }

    function aizan_zoom_point_js() {
        elementorFrontend.waypoint($(document).find('.pxl-zoom-point'), function () {
            var offset = $(this).offset();
            var offset_top = offset.top;
            var scroll_top = $(window).scrollTop();
        }, {
            offset: -100,
            triggerOnce: true
        });
    }

    function aizan_section_before_render() {
        var _elementor = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        _elementor.hooks.addFilter('pxl-custom-section/before-render', function (html, settings, el) {
            if (typeof settings['row_divider'] !== 'undefined') {
                if (settings['row_divider'] == 'angle-top' || settings['row_divider'] == 'angle-bottom' || settings['row_divider'] == 'angle-top-right' || settings['row_divider'] == 'angle-bottom-left') {
                    html = '<svg class="pxl-row-angle" style="fill:#121518" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>';
                    return html;
                }
                if (settings['row_divider'] == 'angle-top-bottom' || settings['row_divider'] == 'angle-top-bottom-left') {
                    html = '<svg class="pxl-row-angle pxl-row-angle-top" style="fill:#121518" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg><svg class="pxl-row-angle pxl-row-angle-bottom" style="fill:#121518" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>';
                    return html;
                }
                if (settings['row_divider'] == 'wave-animation-top' || settings['row_divider'] == 'wave-animation-bottom') {
                    html = '<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150" fill="#fff"><path d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"><animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"></animate></path></svg>';
                    return html;
                }
                if (settings['row_divider'] == 'curved-top' || settings['row_divider'] == 'curved-bottom') {
                    html = '<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1920 128" version="1.1" preserveAspectRatio="none" style="fill:#121518"><path stroke-width="0" d="M-1,126a3693.886,3693.886,0,0,1,1921,2.125V-192H-7Z"></path></svg>';
                    return html;
                }
            }
        });
    }

    var PXL_Icon_Contact_Form = function ($scope, $) {

        setTimeout(function () {
            $('.pxl--item').each(function () {
                var icon_input = $(this).find(".pxl--form-icon"),
                    control_wrap = $(this).find('.wpcf7-form-control');
                control_wrap.before(icon_input.clone());
                icon_input.remove();
            });
        }, 50);

    };


    $(window).on('elementor/frontend/init', function () {
        aizan_css_inline_js();
        aizan_zoom_point_js();
        aizan_section_before_render();
        elementorFrontend.hooks.addAction('frontend/element_ready/contact_form.default', PXL_Icon_Contact_Form);
    });

})(jQuery);
(function ($) {

    function aizan_section_start_render() {
        var _elementor = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        _elementor.hooks.addFilter('pxl_section_start_render', function (html, settings, el) {
            if (typeof settings.pxl_parallax_bg_img != 'undefined' && settings.pxl_parallax_bg_img.url != '') {
                html += '<div class="pxl-section-bg-parallax"></div>';
            }
            return html;
        });
    }

    $(window).on('elementor/frontend/init', function () {
        aizan_section_start_render();
    });

})(jQuery);
(function ($) {
    //animation
    function aizan_animation_handler($scope) {
        elementorFrontend.waypoint($scope.find('.pxl-animate'), function () {
            var $animate_el = $(this),
                data = $animate_el.data('settings');
            if (typeof data != 'undefined' && typeof data['animation'] != 'undefined') {
                setTimeout(function () {
                    $animate_el.removeClass('pxl-invisible').addClass('animated ' + data['animation']);
                }, data['animation_delay']);
            } else {
                setTimeout(function () {
                    $animate_el.removeClass('pxl-invisible').addClass('animated fadeInUp');
                }, 300);
            }
        });


        elementorFrontend.waypoint($scope.find('.pxl-border-animated'), function () {
            $(this).addClass('pxl-animated');
        });

        elementorFrontend.waypoint($scope.find('.elementor-widget-divider'), function () {
            $(this).addClass('pxl-animated');
        });

        elementorFrontend.waypoint($scope.find('.pxl-divider.animated'), function () {
            $(this).addClass('pxl-animated');
        });

        elementorFrontend.waypoint($scope.find('.pxl-bd-anm'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-hd-bd-left'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-hd-bd-right'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-section-line-item'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-image-wg.move-from-left'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-image-wg.move-from-right'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-image-wg.skew-in'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-wg-move-from-left>.elementor-widget-container'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.pxl-wg-move-from-right>.elementor-widget-container'), function () {
            $(this).addClass('pxl-animated');
        });
        elementorFrontend.waypoint($scope.find('.layout-portfolio-list-1 .grid-item .item-title'), function () {
            $(this).addClass('pxl-animated');
        });
        $(document).ajaxComplete(function (event, xhr, settings) {
            "use strict";
            elementorFrontend.waypoint($scope.find('.pxl-bd-anm'), function () {
                $(this).addClass('pxl-animated');
            });
            elementorFrontend.waypoint($scope.find('.layout-portfolio-list-1 .grid-item .item-title'), function () {
                $(this).addClass('pxl-animated');
            });
        });
    }

    function aizan_gsap_scroll_trigger($scope) {
        gsap.registerPlugin(ScrollTrigger);
        const images = gsap.utils.toArray('img');
        const showDemo = () => {
            document.body.style.overflow = 'auto';
            gsap.utils.toArray($scope.find('.pxl-horizontal-scroll .scroll-trigger')).forEach((section, index) => {
                const w = section;
                var x = w.scrollWidth * -1;
                var xEnd = 0;
                if ($(section).closest('.pxl-horizontal-scroll').hasClass('revesal')) {
                    x = '100%';
                    xEnd = (w.scrollWidth - section.offsetWidth) * -1;
                }
                gsap.fromTo(w, {x}, {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 0.5
                    }
                });
            });
        }
        showDemo();
    }

    //video button svg
    function aizan_scroll_progress_svg($scope) {
        if ($scope.find('.progress-wrap').length > 0) {
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(window).height() * 1.8;
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);

        }
    }

    function aizan_map_var_css() {
        var posX = 0,
            posY = 0;
        var mouseX = 0,
            mouseY = 0;

        var offset_left = 0;
        var offset_right = 0;
        var offset_top = 0;
        var offset_bottom = 0;

        $(document).on("mousemove", function (e) {
            offset_left = e.clientX;
            offset_right = $(window).width() - offset_left;

            offset_top = e.clientY;
            offset_bottom = $(window).height() - offset_top;
        });

        $('.cursor-map-target').mousemove(function (e) {
            var offset = $(this).offset();
            mouseX = (e.pageX - offset.left);
            mouseY = (e.pageY - offset.top);
        });

        var map_content_width = $('.pxl-map-wrap').width();
        var map_content_height = $('.pxl-map-wrap').height();

        TweenMax.to({}, 0.01, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX);
                posY += (mouseY - posY);
                if ($('.pxl-map-wrap').length > 0) {
                    var base_left = posX - (map_content_width / 2) - map_content_width;
                    if (offset_left < (base_left * -1) + mouseX) {
                        base_left = posX + (map_content_width / 2);
                    }

                    var top_pos = posY - (map_content_width / 2);
                    if ($(window).innerWidth() <= 767) {
                        base_left = (offset_left * -1) + mouseX + 15;
                        top_pos = (map_content_height * -1) + mouseY - 15;
                    }
                    TweenMax.set($('.pxl-map-wrap:not(.clicked)'), {
                        css: {
                            left: base_left,
                            top: top_pos
                        }
                    });
                }
            }
        });
        $('.cursor-map-target').on("mouseenter", function () {
            $(this).find(".pxl-map-wrap").removeClass("deactive").addClass("active");
        });
        $('.cursor-map-target').on("mouseleave", function () {
            $(this).find(".pxl-map-wrap").removeClass("active").addClass("deactive");
        });

        $(document).on('mousedown', '.cursor-map-target.show-popup', function () {
            $(this).find(".pxl-map-wrap").addClass("clicked");
            var p_left = 0;
            var p_top = 0;
            var zoom_w = ($(window).width() / 2);
            var zoom_h = ($(window).height() / 1.8);

            if (offset_right < (zoom_w / 2)) {
                p_left = (zoom_w / -2) + mouseX + 15;

            }
            if (offset_bottom < (zoom_h / 2)) {
                p_top = (zoom_h / -2) + mouseY + 30;
            }

            if (offset_left < (zoom_w / 2)) {
                p_left = (zoom_w / 2) - 15;
            }

            if ($(window).innerWidth() <= 767) {
                p_left = (offset_left * -1) + mouseX + 30;
                zoom_w = ($(window).width() - 60);
                zoom_h = ($(window).height() - 200);
            }

            $(this).find(".pxl-map-wrap").css({
                left: p_left,
                top: p_top,
                width: zoom_w,
                height: zoom_h
            });
            $(".pxl-cursor-map").addClass('hide');
        });

        $(document).on('mouseout', '.pxl-map-wrap', function () {
            $(this).removeClass("clicked");
            $(".pxl-cursor-map").removeClass('hide');
            $(this).css({
                width: map_content_width,
                height: map_content_height
            });
        });

    }

    function aizan_text_hover_image($scope) {
        if ($scope.find('.pxl-text-img-wrap').length <= 0) return;
        var mouseX = 0,
            mouseY = 0;

        $scope.find('.pxl-text-img-wrap .content-inner').mousemove(function (e) {
            var offset = $(this).offset();
            mouseX = (e.pageX - offset.left);
            mouseY = (e.pageY - offset.top);

        });


        $scope.find('.pxl-text-img-wrap ul>li').on("mouseenter", function () {
            $(this).removeClass('deactive').addClass('active');
            var target = $(this).attr('data-target');
            $(this).closest('.content-inner').find(target).removeClass('deactive').addClass('active');
        });
        $scope.find('.pxl-text-img-wrap ul>li').on("mouseleave", function () {
            $(this).addClass('deactive').removeClass('active');
            var target = $(this).attr('data-target');
            $(this).closest('.content-inner').find(target).addClass('deactive').removeClass('active');
        });
        const s = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            },
            t = gsap.quickSetter($scope.find('.pxl-text-img-wrap .content-inner'), "css"),
            e = gsap.quickSetter($scope.find('.pxl-text-img-wrap .content-inner'), "css");

        gsap.ticker.add((() => {
            const o = .15,
                i = 1 - Math.pow(.85, gsap.ticker.deltaRatio());
            s.x += (mouseX - s.x) * i,
                s.y += (mouseY - s.y) * i,
                t({
                    "--pxl-mouse-x": `${s.x}px`
                }), e({
                "--pxl-mouse-y": `${s.y}px`
            })
        }))
    }

    function aizan_parallax_bg() {
        $(document).find('.pxl-parallax-background').parallaxBackground({
            event: 'mouse_move',
            animation_type: 'shift',
            animate_duration: 2
        });
        $(document).find('.pxl-pll-basic').parallaxBackground();
        $(document).find('.pxl-pll-rotate').parallaxBackground({
            animation_type: 'rotate',
            zoom: 50,
            rotate_perspective: 500
        });
        $(document).find('.pxl-pll-mouse-move').parallaxBackground({
            event: 'mouse_move',
            animation_type: 'shift',
            animate_duration: 2
        });
        $(document).find('.pxl-pll-mouse-move-rotate').parallaxBackground({
            event: 'mouse_move',
            animation_type: 'rotate',
            animate_duration: 1,
            zoom: 70,
            rotate_perspective: 1000
        });
    }

    function aizan_split_text($scope) {
        var st = $scope.find(".pxl-split-text");
        if (st.length == 0) return;
        gsap.registerPlugin(SplitText);
        st.each(function (index, el) {
            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });
            gsap.set(el, {perspective: 400});

            if ($(el).hasClass('split-in-fade')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    ease: "Back.easeOut",
                });
            }
            if ($(el).hasClass('split-in-right')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "50",
                    ease: "Back.easeOut",
                });
            }
            if ($(el).hasClass('split-in-left')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('split-in-up')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "80",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('split-in-down')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('split-in-rotate')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    rotateX: "50deg",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('split-in-scale')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    scale: "0.5",
                    ease: "circ.out",
                });
            }
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "restart pause resume reverse",
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.02,
            });
        });
        $('.has-mask').each(function () {
            var words = $(this).text().split(" ");
            var total = words.length;
            $(this).empty();
            for (index = 0; index < total; index++) {
                $(this).append($("<span /> ").text(words[index]));
            }
        });

        $('.has-mask span').each(function () {
            var words = $(this).text().split(" ");
            var total = words.length;
            $(this).empty();
            for (index = 0; index < total; index++) {
                $(this).append($("<span /> ").text(words[index]));
            }
        });

        var hasMask = gsap.utils.toArray('.has-mask');
        hasMask.forEach(function (hMask) {
            var delayValue = parseInt(hMask.getAttribute("data-delay")) || 0;
            var spanMask = hMask.querySelectorAll("span > span");
            gsap.to(spanMask, {
                scrollTrigger: {
                    trigger: hMask,
                    start: "top 85%",
                    onEnter: function () {
                        hMask.classList.add('animated');
                    },
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: Power2.easeOut,
                delay: delayValue / 1000,
            });
        });

        $('.has-mask-fill').each(function () {
            var words = $(this).text();
            var total = words;
            $(this).empty();
            $(this).append($("<span /> ").text(words));
        });

        $('.has-mask-fill.block-title').each(function () {
            var words = $(this).text().split(" ");
            var total = words.length;
            $(this).empty();
            for (index = 0; index < total; index++) {
                $(this).append($("<span /> ").text(words[index]));
            }
        });

        var hasMaskFill = gsap.utils.toArray('.has-mask-fill');
        hasMaskFill.forEach(function (hMaskFill) {
            var spanFillMask = hMaskFill.querySelectorAll("span");
            gsap.to(spanFillMask, {
                scrollTrigger: {
                    trigger: hMaskFill,
                    start: "top 60%",
                    end: () => `+=${hMaskFill.offsetHeight * 2}`,
                    scrub: 1,
                },
                duration: 1,
                backgroundSize: "200% 100%",
                stagger: 0.5,
                ease: Linear.easeNone,
            });
        });

        $('.split-text-opacity').each(function () {
            var words = $(this).text().split(" ");
            var total = words.length;
            $(this).empty();
            for (index = 0; index < total; index++) {
                $(this).append($("<span /> ").text(words[index] + " "));
            }
        });

        var hasOpacity = gsap.utils.toArray('.split-text-opacity');
        hasOpacity.forEach(function (hOpacity) {
            var spanOpacity = hOpacity.querySelectorAll("span");
            gsap.to(spanOpacity, {
                scrollTrigger: {
                    trigger: hOpacity,
                    start: "top 85%",
                    end: () => `+=${hOpacity.offsetHeight}`,
                    scrub: 1,
                },
                duration: 1,
                opacity: 1,
                stagger: 0.5,
                ease: Linear.easeNone,
            });
        });
        // $('.split-line').each(function(){
        //     if (!$(this).find('.line-mask').length) {
        //         $(this).append("<div class='line-mask'></div>");
        //     }
        //     $(".split-line").each(function (index) {
        //         let triggerElement = $(this);
        //         let targetElement = $(this).find('.line-mask');

        //         let tl = gsap.timeline({
        //             scrollTrigger: {
        //                 trigger: triggerElement,
        //                 start: "top center",
        //                 end: "bottom center",
        //                 scrub: 1
        //             }
        //         });
        //         tl.to(targetElement, {
        //             width: "0%",
        //             duration: 20
        //         });
        //     });
        // });
    }


    $(window).on('elementor/frontend/init', function () {

        elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($scope) {
            aizan_animation_handler($scope);
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_horizontal_scroll.default', function ($scope) {
            aizan_gsap_scroll_trigger($scope);
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_video.default', function ($scope) {
            aizan_scroll_progress_svg($scope);
        });

        aizan_map_var_css();

        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_text_image.default', function ($scope) {
            aizan_text_hover_image($scope);
        });

        //aizan_parallax_bg();

        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_heading.default', function ($scope) {
            aizan_split_text($scope);
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_text_editor.default', function ($scope) {
            aizan_split_text($scope);
        });
    });

})(jQuery);

(function ($) {
    "use strict";

    $(window).on('elementor/frontend/init', function () {

        const sections = document.querySelectorAll(".pxl-portfolio-spilt .portfolio-item");
        const images = document.querySelectorAll(".pxl-portfolio-spilt .item-image");
        const headings = gsap.utils.toArray(".pxl-portfolio-spilt .item-title");
        const excerpts = gsap.utils.toArray(".pxl-portfolio-spilt .item-excerpt");
        const readmores = gsap.utils.toArray(".pxl-portfolio-spilt .item-readmore");
        const outerWrappers = gsap.utils.toArray(".pxl-portfolio-spilt .item-wrap");
        const innerWrappers = gsap.utils.toArray(".pxl-portfolio-spilt .item-inner");

        document.addEventListener("wheel", handleWheel);
        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);

        let listening = false,
            direction = "down",
            current,
            next = 0;

        const touch = {
            startX: 0,
            startY: 0,
            dx: 0,
            dy: 0,
            startTime: 0,
            dt: 0
        };

        const tlDefaults = {
            ease: "slow.inOut",
            duration: 1.25
        };

        const splitHeadings = headings.map((heading) => {
            return new SplitText(heading, {
                type: "chars, words, lines",
                linesClass: "split-line" //clip-text
            });
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_portfolio_spilt.default', function ($scope) {
            setTimeout(function () {
                if ($(document).find('.elementor-editor-active').length > 0) return true;
                gsap.set(outerWrappers, {yPercent: 100});
                gsap.set(innerWrappers, {yPercent: -100});
                slideIn();
                if ($(window).outerWidth() >= 768) {
                    $('.pxl-header').css({"position": "relative", "z-index": "3"});
                    $('.pxl-header-transparent').css({"position": "fixed", "top": "0"});
                }
            }, 500);
            $(window).on('resize', function () {
                if ($(window).outerWidth() <= 767) {
                    $('.pxl-header-transparent').css({"position": "absolute", "top": "0"});
                }
            });
        });

        function revealSectionHeading() {
            return gsap.to(splitHeadings[next].chars, {
                autoAlpha: 1,
                yPercent: 0,
                duration: 1.2,
                ease: "power2",
                stagger: {
                    each: 0.02,
                    from: "random"
                }
            });
        }

        function slideIn() {
            // The first time this function runs, current is undefined
            if (current !== undefined) gsap.set(sections[current], {zIndex: 0});

            gsap.set(sections[next], {autoAlpha: 1, zIndex: 1});
            gsap.set(images[next], {yPercent: 0});
            gsap.set(excerpts[next], {opacity: 1, yPercent: 0});
            gsap.set(readmores[next], {opacity: 1, yPercent: 0});
            gsap.set(splitHeadings[next].chars, {autoAlpha: 0, yPercent: 100});

            const tl = gsap
                .timeline({
                    paused: true,
                    defaults: tlDefaults,
                    onComplete: () => {
                        listening = true;
                        current = next;
                    }
                })
                .to([outerWrappers[next], innerWrappers[next]], {yPercent: 0}, 0)
                .from(images[next], {yPercent: 15}, 0)
                .from(excerpts[next], {opacity: 0, yPercent: 35}, 0)
                .from(readmores[next], {opacity: 0, yPercent: 50}, 0)
                .add(revealSectionHeading(), 0)

            if (current !== undefined) {
                tl.add(
                    gsap.to(images[current], {
                        yPercent: -15,
                        ...tlDefaults
                    }),
                    0
                ).add(
                    gsap
                        .timeline()
                        .set(outerWrappers[current], {yPercent: 100})
                        .set(innerWrappers[current], {yPercent: -100})
                        .set(images[current], {yPercent: 0})
                        .set(excerpts[current], {opacity: 1, yPercent: 0})
                        .set(readmores[current], {opacity: 1, yPercent: 0})
                        .set(sections[current], {autoAlpha: 0})
                );
            }

            tl.play(0);
        }


        // Slides a section out on scroll up
        function slideOut() {
            gsap.set(sections[current], {zIndex: 1});
            gsap.set(sections[next], {autoAlpha: 1, zIndex: 0});
            gsap.set(splitHeadings[next].chars, {autoAlpha: 0, yPercent: 100});
            gsap.set([outerWrappers[next], innerWrappers[next]], {yPercent: 0});
            gsap.set(images[next], {yPercent: 0});
            gsap.set(excerpts[next], {opacity: 1, yPercent: 0});
            gsap.set(readmores[next], {opacity: 1, yPercent: 0});

            gsap
                .timeline({
                    defaults: tlDefaults,
                    onComplete: () => {
                        listening = true;
                        current = next;
                    }
                })
                .to(outerWrappers[current], {yPercent: 100}, 0)
                .to(innerWrappers[current], {yPercent: -100}, 0)
                .to(images[current], {yPercent: 15}, 0)
                .from(images[next], {yPercent: -15}, 0)
                .from(excerpts[next], {opacity: 0, yPercent: 35}, 0)
                .from(readmores[next], {opacity: 0, yPercent: 50}, 0)
                .add(revealSectionHeading(), ">-1")
                .set(images[current], {yPercent: 0})
                .set(excerpts[current], {opacity: 0, yPercent: -35})
                .set(readmores[current], {opacity: 0, yPercent: -50});
        }

        function handleDirection() {
            listening = false;

            if (direction === "down") {
                next = current + 1;
                if (next >= sections.length) next = 0;
                slideIn();
            }

            if (direction === "up") {
                next = current - 1;
                if (next < 0) next = sections.length - 1;
                slideOut();
            }
        }

        function handleWheel(e) {
            if (!listening) return;

            direction = e.wheelDeltaY < 0 ? "down" : "up";
            handleDirection();
        }

        function handleTouchStart(e) {
            if (!listening) return;
            const t = e.changedTouches[0];
            touch.startX = t.pageX;
            touch.startY = t.pageY;
        }

        function handleTouchMove(e) {
            if (!listening) return;
            e.preventDefault();
        }

        function handleTouchEnd(e) {
            if (!listening) return;
            const t = e.changedTouches[0];
            touch.dx = t.pageX - touch.startX;
            touch.dy = t.pageY - touch.startY;
            if (touch.dy > 10) direction = "up";
            if (touch.dy < -10) direction = "down";
            handleDirection();
        }

    });
    jQuery(document).ready(function ($) {
        //set animation timing
        var animationDelay = 500,
            //loading bar effect
            barAnimationDelay = 3800,
            barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
            //letters effect
            lettersDelay = 50,
            //type effect
            typeLettersDelay = 150,
            selectionDuration = 500,
            typeAnimationDelay = selectionDuration + 800,
            //clip effect
            revealDuration = 1000,
            revealAnimationDelay = 2000;

        initHeadline();


        function initHeadline() {
            $(".tf-text .item-text:nth-child(1)").removeClass("is-hidden");
            $(".tf-text .item-text:nth-child(1)").addClass("is-visible");
            //insert <i> element for each letter of a changing word
            singleLetters($('.animationtext.letters').find('.item-text'));
            //initialise headline animation
            animateHeadline($('.animationtext'));
        }

        function singleLetters($words) {
            $words.each(function () {
                var word = $(this),
                    letters = word.text().split(''),
                    selected = word.hasClass('is-visible');
                for (i in letters) {
                    if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                    letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
                }
                var newLetters = letters.join('');
                word.html(newLetters).css('opacity', 1);
            });
        }

        function animateHeadline($headlines) {
            var duration = animationDelay;
            $headlines.each(function () {
                var headline = $(this);

                if (headline.hasClass('loading-bar')) {
                    duration = barAnimationDelay;
                    setTimeout(function () {
                        headline.find('.cd-words-wrapper').addClass('is-loading')
                    }, barWaiting);
                } else if (headline.hasClass('clip')) {
                    var spanWrapper = headline.find('.cd-words-wrapper'),
                        newWidth = spanWrapper.width() + 10
                    spanWrapper.css('width', newWidth);
                } else if (!headline.hasClass('type')) {
                    //assign to .cd-words-wrapper the width of its longest word
                    var words = headline.find('.cd-words-wrapper .item-text'),
                        width = 0;
                    words.each(function () {
                        var wordWidth = $(this).width();
                        if (wordWidth > width) width = wordWidth;
                    });
                    headline.find('.cd-words-wrapper').css('width', width);
                }
                ;

                //trigger animation
                setTimeout(function () {
                    hideWord(headline.find('.is-visible').eq(0))
                }, duration);
            });
        }


        function hideWord($word) {
            var nextWord = takeNext($word);

            if ($word.parents('.animationtext').hasClass('type')) {
                var parentSpan = $word.parent('.cd-words-wrapper');
                parentSpan.addClass('selected').removeClass('waiting');
                setTimeout(function () {
                    parentSpan.removeClass('selected');
                    $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
                }, selectionDuration);
                setTimeout(function () {
                    showWord(nextWord, typeLettersDelay)
                }, typeAnimationDelay);

            } else if ($word.parents('.animationtext').hasClass('letters')) {
                var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
                hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
                showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

            } else if ($word.parents('.animationtext').hasClass('clip')) {
                $word.parents('.cd-words-wrapper').animate({width: '2px'}, revealDuration, function () {
                    switchWord($word, nextWord);
                    showWord(nextWord);
                });

            } else if ($word.parents('.animationtext').hasClass('loading-bar')) {
                $word.parents('.cd-words-wrapper').removeClass('is-loading');
                switchWord($word, nextWord);
                setTimeout(function () {
                    hideWord(nextWord)
                }, barAnimationDelay);
                setTimeout(function () {
                    $word.parents('.cd-words-wrapper').addClass('is-loading')
                }, barWaiting);

            } else {
                switchWord($word, nextWord);
                setTimeout(function () {
                    hideWord(nextWord)
                }, animationDelay);
            }
        }

        function showWord($word, $duration) {
            if ($word.parents('.animationtext').hasClass('type')) {
                showLetter($word.find('i').eq(0), $word, false, $duration);
                $word.addClass('is-visible').removeClass('is-hidden');

            } else if ($word.parents('.animationtext').hasClass('clip')) {
                $word.parents('.cd-words-wrapper').animate({'width': $word.width() + 10}, revealDuration, function () {
                    setTimeout(function () {
                        hideWord($word)
                    }, revealAnimationDelay);
                });
            }
        }

        function takeNext($word) {
            return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
        }

        function takePrev($word) {
            return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
        }

        function switchWord($oldWord, $newWord) {
            $oldWord.removeClass('is-visible').addClass('is-hidden');
            $newWord.removeClass('is-hidden').addClass('is-visible');
        }
    });
}(jQuery));