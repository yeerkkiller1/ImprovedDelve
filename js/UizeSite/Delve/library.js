 /*______________
|       ______  |   B U I L T     O N     U I Z E     F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |   This JavaScript application is developed using the object
|   /    / /    |   oriented UIZE JavaScript framework as its foundation.
|  /    / /  /| |
| /____/ /__/_| |    ONLINE : http://www.uize.com
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Delve.library Library Module
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2010-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*?
	Introduction
		The =UizeSite.Delve.library= module is a library module that bundles together all the JavaScript modules needed by the DELVE tool.

		*DEVELOPERS:* `Chris van Rensburg`
*/


Uize.module('Uize.Array');

Uize.module({name: 'Uize.Array.Join',builder: function() {
        'use strict';
        return Uize.package({hugJoin: function(_a, _b, _c, _d) {
                return (_a.length ? ('' + _b + _a.join('' + _c + (_d != undefined ? _d : '') + _b) + _c) : '');
            }});
    }});

Uize.module({name: 'Uize.Array.Sort',builder: function() {
        'use strict';
        var _a = Function, _b = [], _c = _a('a,b', 'return a.v<b.v?-1:a.v>b.v?1:0'), _d = _a('a,b', 'return a.v<b.v?1:a.v>b.v?-1:0'), _e = _a('a,b', 'return a<b?-1:a>b?1:0'), _f = _a('a,b', 'return a<b?1:a>b?-1:0');
        return Uize.package({sortBy: function(_g, _h, _i) {
                var _j = _g.length;
                if (_j > 1) {
                    if (_h != null) {
                        var _k;
                        if (!Uize.isFunction(_h)) {
                            if (typeof _h == 'number')
                                _h = 'value [' + _h + ']';
                            _h = Uize.resolveTransformer(_h);
                        }
                        ;
                        for (var _l = _b.length = _j; --_l >= 0; ) {
                            (_k = _b[_l] || (_b[_l] = {})).v = _h(_k._m = _g[_k._l = _l], _l);
                        }
                        _b.sort(_i == -1 ? _d : _c);
                        for (var _l = _j; --_l >= 0; ) {
                            if (_l != (_k = _b[_l])._l)
                                _g[_l] = _k._m;
                            _k._m = _k.v = null;
                        }
                    } else {
                        _g.sort(_i == -1 ? _f : _e);
                    }
                }
                return _g;
            }});
    }});

Uize.module({name: 'Uize.Data',builder: function() {
        'use strict';
        var _a = 'string', _b = true, _c = false, _d = null, _e, _f = Infinity, _g = Uize.totalKeys;
        var _h, _i = {};
        return _h = Uize.package({getColumn: function(_j, _k, _l) {
                var _m = [];
                if (_j) {
                    var _n = _l ? {} : _d;
                    for (var _o = -1, _p = _j.length; ++_o < _p; ) {
                        var _q = _j[_o][_k];
                        if (!_l || (!_n[_q] && (_n[_q] = 1)))
                            _m.push(_q);
                    }
                }
                return _m;
            },findRecords: function(_r, _s) {
                var _t = [];
                if (_r) {
                    for (var _u = -1, _v = _r.length, _w; ++_u < _v; )
                        Uize.recordMatches(_w = _r[_u], _s) && _t.push(_w);
                }
                return _t;
            },filter: function(_x, _y) {
                var _m = {};
                if (_x && _y) {
                    for (var _z = -1, _A = _y.length; ++_z < _A; ) {
                        var _B = _y[_z];
                        if (_B in _x)
                            _m[_B] = _x[_B];
                    }
                }
                return _m;
            },identical: function(_C, _D, _E) {
                if (!_E)
                    _E = _i;
                var _F = _E.equality, _G = _F == 'loose', _H = !_G && _F == 'type', _I = !_G && !_H && _F == 'tree', _J = !_G && !_H && !_I, _K = _E.allowConjoined !== _c;
                function _L(_C, _D) {
                    var _M, _N = typeof _C, _O = _N == 'object', _P = _O && _C, _Q = _N == typeof _D;
                    function _R() {
                        if (_M = _g(_C) == _g(_D)) {
                            for (var _B in _C) {
                                if (!(_B in _D) || !_L(_C[_B], _D[_B])) {
                                    _M = _c;
                                    break;
                                }
                            }
                        }
                    }
                    if (_Q && _P && _D) {
                        var _S = _C.constructor;
                        if (_C == _D) {
                            _M = _K;
                        } else if (_M = _S == _D.constructor) {
                            if (_S == Date || _S == String || _S == Number || _S == Boolean || _S == RegExp) {
                                _M = _C + '' == _D + '';
                            } else {
                                if (typeof _C.splice == 'function' && typeof _D.splice == 'function') {
                                    if (_M = _C.length == _D.length) {
                                        for (var _T = _C.length; --_T >= 0; ) {
                                            if (!_L(_C[_T], _D[_T])) {
                                                _M = _c;
                                                break;
                                            }
                                        }
                                        if (_M) {
                                            var _U = _C.splice(0, _f), _V = _D.splice(0, _f);
                                            _R();
                                            Uize.push(_C, _U);
                                            Uize.push(_D, _V);
                                        }
                                    }
                                } else {
                                    _R();
                                }
                            }
                        }
                    } else {
                        _M = _I ? !_P && !(typeof _D == 'object' && _D) : ((_G ? _C == _D : (_Q && (_J ? _C === _D : (!_O || !_C == !_D)))) || (_Q && _N == 'number' && _C != _C && _D != _D));
                    }
                    return _M;
                }
                return _L(_C, _D);
            },conjoined: function(_C, _D) {
                function _W(_x) {
                    var _X = [];
                    function _Y(_x) {
                        if (typeof _x == 'object') {
                            if (!Uize.isIn(_X, _x)) {
                                _X.push(_x);
                                for (var _B in _x)
                                    _Y(_x[_B]);
                            }
                        }
                    }
                    _Y(_x);
                    return _X;
                }
                var _Z = _c, _0 = _W(_C), _1 = _0.length, _2 = _W(_D);
                for (var _3 = -1; ++_3 < _1 && !_Z; )
                    _Z = Uize.isIn(_2, _0[_3]);
                return _Z;
            },clones: function(_C, _D) {
                return (_h.identical(_C, _D, {allowConjoined: _c}) && !_h.conjoined(_C, _D));
            },intersection: function(_C, _D) {
                var _m = {};
                if (_C && _D) {
                    for (var _B in _C) {
                        var _4 = _C[_B];
                        if (_D[_B] === _4)
                            _m[_B] = _4;
                    }
                }
                return _m;
            }});
    }});

Uize.module({name: 'Uize.Data.Matches',builder: function() {
        'use strict';
        var _a = true, _b = false, _c, _d = Uize, _e = _d.resolveMatcher, _f;
        function _g(_h, _i, _j, _k, _l) {
            var _m = typeof _h == 'number', _n = _m || _d.isArray(_h);
            if (_j == _c)
                _j = Infinity;
            if (typeof _k != 'object')
                _k = _m ? [] : _k === _b ? _h : _n ? [] : {};
            var _o = _d.isArray(_k), _p = 0, _q = 0;
            if (!_o) {
                if (_k == _h)
                    _h = _d.copy(_k);
                _d.emptyOut(_k);
            }
            if (_l) {
                var _r = _e(_i);
                _i = function(_s, _t) {
                    var _u = _p < _j && _r(_s, _t);
                    _u && _p++;
                    return !_u;
                };
            }
            _f(_h, _i, function(_s, _t) {
                _k[_n ? _q++ : _t] = _s
            }, _l ? _c : _j);
            if (_n || _o)
                _k.length = _q;
            return _k;
        }
        function _v(_h, _i, _j, _w) {
            var _x = [];
            _f(_h, _i, function(_s, _t) {
                _x.push(_w ? _t : _s)
            }, _j);
            return _x;
        }
        return _d.package({forEach: _f = function(_h, _i, _y, _j) {
                if (_j == _c)
                    _j = Infinity;
                if (_j > 0) {
                    _i = _e(_i);
                    var _z = 0;
                    _d.forEach(_h, function(_s, _t) {
                        if (_z < _j && _i(_s, _t)) {
                            _z++;
                            _y(_s, _t);
                        }
                    }, 0, _a);
                }
            },remove: function(_h, _i, _j, _k) {
                return _g(_h, _i, _j, _k, _a);
            },retain: function(_h, _i, _j, _k) {
                return _g(_h, _i, _j, _k, _b);
            },count: function(_h, _i, _j) {
                var _x = 0;
                _f(_h, _i, function() {
                    _x++
                }, _j);
                return _x;
            },keys: function(_h, _i, _j) {
                return _v(_h, _i, _j, _a);
            },values: function(_h, _i, _j) {
                return _v(_h, _i, _j, _b);
            },firstKey: function(_h, _i) {
                return _v(_h, _i, 1, _a)[0];
            },firstValue: function(_h, _i) {
                return _v(_h, _i, 1, _b)[0];
            }});
    }});

Uize.module({name: 'Uize.Data.Flatten',builder: function() {
        'use strict';
        var _a, _b = Uize.isPlainObject, _c = Uize.isArray;
        function _d(_e) {
            return function(_f) {
                return _f.join(_e)
            };
        }
        function _g(_e) {
            return function(_h) {
                return _h.split(_e)
            };
        }
        var _i = _d('.'), _j = _g('.');
        return Uize.package({flatten: function(_k, _l, _m, _n) {
                _l = _l == _a ? _i : typeof _l == 'string' ? _d(_l) : _l;
                var _o = {};
                function _p(_q, _f) {
                    var _r = _b(_q);
                    if (_r || (_n && _c(_q))) {
                        if (_m && _f.length)
                            _o[_l(_f)] = _q;
                        if (_r) {
                            for (var _s in _q)
                                _p(_q[_s], _f.concat(_s));
                        } else {
                            for (var _t = -1, _u = _q.length; ++_t < _u; )
                                _t in _q && _p(_q[_t], _f.concat(_t));
                        }
                    } else {
                        _o[_l(_f)] = _q;
                    }
                }
                _p(_k, []);
                return _o;
            },unflatten: function(_o, _v, _n) {
                _v = _v == _a ? _j : typeof _v == 'string' ? _g(_v) : _v;
                var _k = {};
                for (var _h in _o) {
                    for (var _f = _v(_h), _w = -1, _x = _f.length, _y = _k, _z = 'root'; ++_w < _x; ) {
                        var _A = _f[_w], _B = _y[_z] || (_y[_z] = _n && typeof _A == 'number' ? [] : {});
                        if (_w < _x - 1) {
                            _y = _B;
                            _z = _A;
                        } else {
                            _B[_A] = _o[_h];
                        }
                    }
                }
                return _k.root || {};
            }});
    }});

Uize.module({name: 'Uize.Data.PathsTree',required: 'Uize.Data.Flatten',builder: function() {
        'use strict';
        return Uize.package({toList: function(_a, _b) {
                return Uize.keys(Uize.Data.Flatten.flatten(_a, _b, true));
            },fromList: function(_c, _b) {
                return Uize.Data.Flatten.unflatten(Uize.lookup(_c, 0), _b);
            }});
    }});

Uize.module('Uize.Dom');

Uize.module('Uize.Event');

Uize.module({name: 'Uize.Event.Bus',builder: function() {
        var _a = Uize.isFunction, _b = Uize.isObject, _c = {};
        return Uize.mergeInto(function() {
        }, {prototype: {fire: function(_d) {
                    var m = this, _e = m._e;
                    if (_e) {
                        if (typeof _d != 'object')
                            _d = {name: _d};
                        var _f = _e[_d.name], _g = _e['*'];
                        if (_f || _g) {
                            var _h = _g && _f ? _g.concat(_f) : _g || _f, _i = _h.length;
                            if (_i == 1) {
                                _h[0]._j(_d);
                            } else if (_i == 2) {
                                var _k = _h[0]._j, _l = _h[1]._j;
                                _k(_d);
                                _l(_d);
                            } else {
                                if (!_g || !_f)
                                    _h = _h.concat();
                                for (var _m = -1; ++_m < _i; )
                                    _h[_m]._j(_d);
                            }
                        }
                    }
                },wire: function(_n, _j) {
                    var m = this, _e = m._e || (m._e = {});
                    if (_b(_n)) {
                        for (var _o in _n)
                            m.wire(_o, _n[_o]);
                    } else {
                        m.wireUnwireWrapper(_n, function(_o) {
                            (_e[_o] || (_e[_o] = [])).push({_o: _o,_j: _a(_j) ? _j : typeof _j == 'string' ? Function(_j) : function(_d) {
                                    _j.fire(_d)
                                },_p: _j});
                        });
                    }
                },unwire: function(_n, _j) {
                    var m = this, _e = m._e;
                    if (_e) {
                        if (_b(_n)) {
                            for (var _o in _n)
                                m.unwire(_o, _n[_o]);
                        } else {
                            m.wireUnwireWrapper(_n, function(_o) {
                                var _q = _e[_o];
                                if (_q) {
                                    if (_j) {
                                        for (var _m = _q.length; --_m >= 0; )
                                            _q[_m]._p == _j && _q.splice(_m, 1);
                                    }
                                    (_j && _q.length) || delete _e[_o];
                                }
                            });
                        }
                    }
                },
                hasHandlers: function(_o) {
                    return !!(this._e || _c)[_o];
                },wireUnwireWrapper: function(_o, _r) {
                    _r(_o)
                }}});
    }});

Uize.module({name: 'Uize.Dom.Basics',required: 'Uize.Event.Bus',builder: function() {
        'use strict';
        var _a, _b = null, _c = true, _d = false, _e = 'string', _f = 'object', _g = Uize, _h = _g.copyInto, _i = _g.returnFalse, _j, _k, _l, _m, _n, _o, _p, _q, _r = typeof navigator != 'undefined', _s = _r ? navigator : {userAgent: '',appName: ''}, _t = _s.userAgent.toLowerCase(), _u = _s.appName == 'Microsoft Internet Explorer', _v = +(_u && (_t.match(/MSIE\s*(\d+)/i) || [0, 0])[1]), _w = _t.indexOf('gecko') > -1, _x = _t.indexOf('opera') > -1, _y = _w || _x, _z = {clientX: 0,clientY: 0,pageX: 0,pageY: 0}, _A = _u && ActiveXObject, _B = {}, _C = {}, _D = 0, _E = _u && _v < 7, _F = 'table-', _G = _F + 'row', _H = _F + 'cell', _I = _h({SPAN: 'inline',THEAD: _F + 'header-group',TFOOT: _F + 'footer-group',LI: 'list-item'}, _u && typeof DOMImplementation == 'undefined' ? _b : {TABLE: 'table',TR: _G,TH: _H,TD: _H,TBODY: _G + '-group',COLGROUP: _F + 'column-group',COL: _F + 'column',CAPTION: _F + 'caption'}), _J = {borderColor: ['border', 'Color'],borderWidth: ['border', 'Width'],padding: 1,margin: 1}, _K = {TABLE: _c,THEAD: _c,TFOOT: _c,TBODY: _c,TR: _c,COL: _c,COLGRPUP: _c,
            FRAMESET: _c,HEAD: _c,HTML: _c,STYLE: _c,TITLE: _c}, _L = {};
        function _M(_N) {
            var _O = document.getElementById(_N);
            return (!_u || (_O && _O.id == _N)) ? _O : _b;
        }
        function _P(_Q) {
            _z.clientX = _Q.clientX;
            _z.clientY = _Q.clientY;
            _z.pageX = _Q.pageX;
            _z.pageY = _Q.pageY;
        }
        function _R(_S) {
            var _T = _g.Dom.VirtualEvent;
            return (_T && _S.charCodeAt(_S.length - 1) == 41 ? _T.resolve(_S) : _S.charCodeAt(0) == 111 && _S.charCodeAt(1) == 110 ? _S.slice(2) : _S);
        }
        var _U = _g.package({_B: _B,_P: _P,display: function(_V, _W) {
                _W = _W === _a || !!_W;
                _k(_V, function(_X) {
                    _X.style.display = _W ? (_I[_X.tagName] || 'block') : 'none';
                });
            },find: function(_Y) {
                if (typeof _Y != _f || !_Y || typeof _Y.length == 'number' || _l(_Y))
                    return _Y;
                var _Z = document, _0 = _g.isPrimitive, _1 = [], _2 = _h({}, _Y), _3 = 'root' in _2 ? _j(_2.root) : _Z;
                delete _2.root;
                if (_3) {
                    var _4 = _2.tagName;
                    if ('id' in _2 && _0(_2.id)) {
                        var _X = _M(_2.id);
                        _X && _1.push(_X);
                        delete _2.id;
                    } else if ('name' in _2 && _0(_2.name)) {
                        _1 = _Z.getElementsByName(_2.name);
                        delete _2.name;
                    } else {
                        var _5 = _0(_4);
                        _5 && delete _2.tagName;
                        _1 = _3.getElementsByTagName(_4 && _5 ? _4 : '*');
                        _3 = _b;
                    }
                    if (_3 == _Z)
                        _3 = _b;
                    if (!_4 || _4 == '*')
                        delete _2.tagName;
                }
                var _6 = _1.length;
                for (var _7 in _2)
                    break;
                if (!_6 || (_7 == _a && !_3))
                    return _1;
                var _8 = [], _9;
                for (var _ba = -1; ++_ba < _6; ) {
                    var _X = _1[_ba];
                    if (_9 = _3 ? _n(_X, _3) : _c) {
                        for (var _bb in _2) {
                            var _bc = _X[_bb], _bd = _2[_bb], _be = _g.isFunction;
                            if (!(_0(_bd) ? _bc == _bd : (_bd instanceof RegExp ? _bd.test(_bc || '') : (_be(_bd) ? _bd.call(_X, _bc) : _c)))) {
                                _9 = _d;
                                break;
                            }
                        }
                    }
                    _9 && _8.push(_X);
                }
                return _8;
            },getById: _j = function(_X, _bf, _bg) {
                if (typeof _X != _e)
                    return _X;
                var _O = _bg ? _bg[_X] : _a;
                if (_O === _a) {
                    var _bh = _m(_bf, _X);
                    (_O = _M(_bh)) || ((_O = document.getElementsByName(_bh)).length < 2 && (_O = _O[0] || _b));
                    if (_bg)
                        _bg[_X] = _O;
                }
                return _O;
            },getStyle: _o = function(_X, _bi) {
                var _bj = typeof _bi == _e, _bk = _bj ? '' : {};
                if (_X = _j(_X)) {
                    if (_bj) {
                        var _bl = _u && _bi == 'opacity', _bm = document.defaultView, _bn = _bm && _bm.getComputedStyle(_X, '');
                        if (_bl)
                            _bi = 'filter';
                        if (_bn) {
                            if (!(_bk = _bn[_bi])) {
                                var _bo = _J[_bi];
                                if (_bo) {
                                    var _bp = _bo[0] || _bi, _bq = _bo[1] || '', _br = _bn[_bp + 'Top' + _bq], _bs = _bn[_bp + 'Right' + _bq], _bt = _bn[_bp + 'Bottom' + _bq], _bu = _bn[_bp + 'Left' + _bq];
                                    _bk = _br == _bs && _bs == _bt && _bt == _bu ? _bu : _br + ' ' + _bs + ' ' + _bt + ' ' + _bu;
                                }
                            }
                        } else {
                            var _bv = _X.currentStyle;
                            _bk = _bv ? _bv.getAttribute(_bi) : _X.style[_bi];
                        }
                        if (_bl) {
                            var _bw = (_bk || '').match(/alpha\s*\(\s*opacity\s*=([^\)]*)\)/i);
                            _bk = _bw ? _bw[1] / 100 : 1;
                        }
                    } else {
                        for (_bi in _bi)
                            _bk[_bi] = _o(_X, _bi);
                    }
                }
                return _bk;
            },getValue: function(_X) {
                var _bk;
                if (_X = _j(_X)) {
                    if (_l(_X)) {
                        var _bx = _X.tagName;
                        if (_bx == 'TEXTAREA') {
                            _bk = _X.value;
                        } else if (_bx == 'INPUT') {
                            _bk = _X.type == 'checkbox' ? _X.checked : _X.value;
                        } else if (_bx == 'SELECT') {
                            if (_X.multiple) {
                                _bk = [];
                                _g.forEach(_X.options, function(_by) {
                                    _by.selected && _bk.push(_by.value)
                                });
                            } else {
                                _bk = _X.value;
                            }
                        } else if (_bx == 'IMG') {
                            _bk = _X.src;
                        } else {
                            _bk = _X.innerHTML.replace(/<br\/?>/gi, '\n').replace(/&nbsp;/g, ' ');
                        }
                    } else {
                        _bk = (_g.findRecord(_X, {tagName: 'INPUT',type: 'radio',checked: _c}) || {}).value;
                    }
                }
                return _bk;
            },injectHtml: function(_V, _bz, _bA) {
                if (_bz != _b) {
                    var _bB, _bC, _bD, _bE, _bF, _bG, _bH = _g.isList(_bz) || (_l(_bz) && (_bz = [_bz]));
                    ((_bB = _bA == 'inner replace') || (_bC = _bA == 'outer replace') || (_bD = _bA == 'inner top') || 
                    (_bE = _bA == 'outer top') || (_bF = _bA == 'outer bottom') || (_bG = _c));
                    _bH || (_bz += '');
                    _k(_V, function(_X) {
                        var _bI = _X.childNodes;
                        function _bJ(_bK) {
                            return _bK && /<script/i.test(_bK)
                        }
                        function _bL() {
                            return _bJ(_bz)
                        }
                        if ((_bB || (!_bI.length && (_bD || _bG))) && !_l && !_bL()) {
                            _X.innerHTML = _bz;
                        } else if (_bC && _u && !_l && !_bL()) {
                            _X.outerHTML = _bz;
                        } else {
                            var _bM = [];
                            if (_bB)
                                if (_u && _K[_X.tagName]) {
                                    var _bN = _X.cloneNode();
                                    _X.replaceNode(_bN);
                                    _X = _bN;
                                } else
                                    _X.innerHTML = '';
                            if (_bH) {
                                for (var _ba = -1, _bO = _bz.length; ++_ba < _bO; ) {
                                    var _bP = _bz[_ba];
                                    if (_bP) {
                                        if (_bP.parentNode)
                                            _bP = _bP.cloneNode(_c);
                                        _bM.push(_bP);
                                    }
                                }
                            } else {
                                if (_A && _K[_X.tagName]) {
                                    var _bQ = new _A('Microsoft.XMLDOM');
                                    _bQ.async = _d;
                                    _bQ.loadXML('<foo>' + _bz.replace(/&/g, '&amp;') + '</foo>');
                                    var _bR = _bQ.documentElement.childNodes, _bS = function(_bT) {
                                        var _bU;
                                        switch (_bT.nodeType) {
                                            case 1:
                                                _bU = document.createElement(_bT.tagName);
                                                for (var _bV = _bT.attributes, _bW = _bV.length; --_bW >= 0; ) {
                                                    var _bX = _bV[_bW];
                                                    _bU.setAttribute(_bX.nodeName, _bX.nodeValue);
                                                }
                                                if (_bU.tagName == 'SCRIPT')
                                                    _bU.text = _bT.text;
                                                else {
                                                    for (var _bY = -1, 
                                                    _bZ = _bT.childNodes, _b0 = _bZ.length, _b1; ++_bY < _b0; )
                                                        (_b1 = _bS(_bZ[_bY])) && _bU.appendChild(_b1);
                                                }
                                                break;
                                            case 3:
                                                _bU = document.createTextNode(_bT.nodeValue);
                                                break;
                                            case 8:
                                                _bU = document.createComment(_bT.nodeValue);
                                                break;
                                        }
                                        return _bU;
                                    };
                                    for (var _ba = -1; ++_ba < _bR.length; )
                                        _bM.push(_bS(_bR[_ba]));
                                    _bH = _c;
                                } else {
                                    var _b2 = document.createElement(_X.tagName);
                                    _b2.innerHTML = '<i>e</i>' + _bz;
                                    _bM = _b2.childNodes;
                                }
                            }
                            var _b3 = _bD ? _bI[0] : _bF ? _X.nextSibling : _X, _b4 = _X.parentNode, _b5 = +!_bH, _b6 = function(_X) {
                                if (_X.tagName == 'SCRIPT') {
                                    var _b7 = document.createElement('script');
                                    if (_X.id)
                                        _b7.id = _X.id;
                                    if (_X.type)
                                        _b7.type = _X.type;
                                    _b7.text = _X.text;
                                    if (_X.src)
                                        _b7.src = _X.src;
                                    _X.parentNode.replaceChild(_b7, _X);
                                } else if (_bJ(_X.innerHTML)) {
                                    _g.forEach(_X.childNodes, _b6);
                                }
                            };
                            while (_bM.length > _b5) {
                                var _b8 = _bH ? _bM.shift() : _bM[_b5];
                                if (_bG || _bB) {
                                    _X.appendChild(_b8);
                                } else if (_bD) {
                                    _b3 ? _X.insertBefore(_b8, _b3) : _X.appendChild(_b8);
                                } else if (_bE || _bC) {
                                    _b4.insertBefore(_b8, _b3);
                                } else if (_bF) {
                                    _b3 ? _b4.insertBefore(_b8, _b3) : _b4.appendChild(_b8);
                                }
                                _bH || _b6(_b8);
                            }
                            _bC && _b4.removeChild(_X);
                        }
                    });
                }
            },isOnNodeTree: _n = function(_X, _b9) {
                _X = _j(_X);
                _b9 = _j(_b9);
                while (_X) {
                    if (_X == _b9)
                        return _c;
                    _X = _X.parentNode;
                }
                return _d;
            },isNode: _l = function(_X) {
                return !!(_X && typeof _X == _f && (_X.nodeType || _X.getAttribute || _X.documentElement || _X.self == _X));
            },joinIdPrefixAndNodeId: _m = function(_bf, _N) {
                return (_bf || '') + (_bf && _N ? '-' : '') + _N;
            },doForAll: _k = function(_V, _ca, _bf, _bg) {
                if (typeof _V == _e)
                    _V = _j(_V, _bf, _bg);
                if (_V != _a) {
                    if (_l(_V)) {
                        _ca(_V);
                    } else {
                        var _cb = typeof _V;
                        if ((_cb == _f || _cb == 'function') && typeof _V.length == 'number') {
                            for (var _cc = -1, _cd = _V.length; ++_cc < _cd; )
                                _k(_V[_cc], _ca, _bf, _bg);
                        } else if (_cb == _f) {
                            for (var _ce in _V)
                                _k(_V[_ce], _ca, _bf, _bg);
                        }
                    }
                }
            },remove: function(_V) {
                _k(_V, function(_X) {
                    _X.parentNode.removeChild(_X)
                });
            },setClipRect: function(_V, _br, _bs, _bt, _bu) {
                var _cf = 'rect(' + _br + 'px, ' + _bs + 'px, ' + _bt + 'px, ' + _bu + 'px)';
                _k(_V, function(_X) {
                    _X.style.clip = _cf
                });
            },setInnerHtml: function(_V, _bK) {
                _bK += '';
                _k(_V, function(_X) {
                    _X.innerHTML = _bK
                });
            },setOpacity: function(_V, _cg) {
                _L.opacity = _cg;
                _p(_V, _L);
            },
            setProperties: function(_V, _Y) {
                _k(_V, function(_X) {
                    _h(_X, _Y)
                });
            },setStyle: _p = function(_V, _Y) {
                _k(_V, function(_X) {
                    var _ch = _X.style, _ci;
                    if (_u && 'opacity' in _Y)
                        _ch.filter = (_ci = Math.round((_Y.opacity + '' || '#') * 100)) < 100 ? 'alpha(opacity=' + _ci + ')' : '';
                    for (var _bi in _Y)
                        _ch[_bi] = (typeof (_ci = _Y[_bi]) == _f && _ci ? (_ci = _ci.valueOf()) : _ci) != _a ? (typeof _ci == 'number' && _bi != 'opacity' && _bi != 'zIndex' ? Math.round(_ci) + 'px' : _ci + '') : '';
                });
            },setValue: function(_V, _bk) {
                _bk += '';
                _k(_V, function(_X) {
                    var _bx = _X.tagName, _cj = _X.readOnly;
                    if (_cj)
                        _X.readOnly = _d;
                    if (_bx == 'TEXTAREA') {
                        _X.value = _bk;
                    } else if (_bx == 'INPUT') {
                        var _ck = _X.type;
                        if (_ck == 'checkbox') {
                            _X.checked = _bk == 'true';
                        } else if (_ck == 'radio') {
                            _X.checked = _X.value == _bk;
                        } else {
                            _X.value = _bk;
                        }
                    } else if (_bx == 'SELECT') {
                        var _cl = _X.options;
                        if (_X.multiple && (_bk == '*' || _bk.indexOf(',') > -1)) {
                            var _cm = _bk != '*' ? _g.lookup(_bk.split(',')) : _a;
                            for (var _cn = _cl.length, _by; --_cn >= 0; )
                                (_by = _cl[_cn]).selected = !_cm || _cm[_by.value];
                        } else {
                            _X.selectedIndex = _g.findRecordNo(_cl, {value: _bk}, _bk ? _X.selectedIndex : -1);
                        }
                    } else if (_bx == 'IMG') {
                        if (_bk)
                            _X.src = _bk;
                    } else {
                        _bx == 'PRE' && _u ? (_X.innerText = _bk) : (_X.innerHTML = _bk.replace(/</g, '&lt;').replace(/\n/g, '<br/>'));
                    }
                    if (_cj)
                        _X.readOnly = _cj;
                });
            },show: function(_V, _co) {
                _p(_V, {visibility: _co || _co === _a ? 'inherit' : 'hidden'});
            },unwire: _q = function(_V, _cp, _cq, _cr) {
                if (typeof _cp == _f && _cp && !_cp.virtualDomEvent) {
                    for (var _S in _cp)
                        _q(_V, _S, _cp[_S], _cq);
                } else {
                    _U.unwireEventsByOwnerId(_cr, _V !== _a || _cp != _a || _cq != _a ? {node: _V,eventName: _cp,handler: _cq} : _a);
                }
            },unwireEventsByOwnerId: function(_cs, _ct) {
                var _cu = _C[_cs = _cs || ''];
                if (_cu) {
                    var _cv = function(_cw) {
                        if (_cw !== _b) {
                            var _cx = _ct && _ct.eventName, _cy = _ct && _ct.handler, _cz = _cw || _cx || _cy;
                            if (_cx && _cx.charCodeAt)
                                _cx = _R(_cx);
                            for (var _cA = _cu.length; --_cA >= 0; ) {
                                var _cB = _cu[_cA], _cC = _B[_cB], _X = _cC._X, _S = _cC._S;
                                if (!_cz || ((!_cw || _cw == (_cC._cD || _X)) && (!_cx || _cx == _S) && (!_cy || _cy == _cC._cE))) {
                                    _cz && _cu.splice(_cA, 1);
                                    if (_cC._cF) {
                                        _U.unwireEventsByOwnerId(_cC._cF)
                                    } else {
                                        try {
                                            _X == window && _E ? _cG.unwire(_S, _cC._cH) : _u ? _X.detachEvent('on' + _S, _cC._cH) 
                                            : _X.removeEventListener(_S, _cC._cH, _d);
                                        } catch (_cI) {
                                        }
                                    }
                                    delete _B[_cB];
                                }
                            }
                            (_cz && _cu.length) || delete _C[_cs];
                        }
                    };
                    _ct && _ct.node !== _a ? _k(_ct.node, _cv) : _cv();
                }
            },wire: (function() {
                var _cJ = _g.quarantine, _cK = _cJ(function(_cB) {
                    return (function(_Q) {
                        var _cC = window.Uize && Uize.Dom.Basics._B[_cB];
                        return _cC && _cC._cE.call(_cC._X, _Q.windowEvent);
                    });
                }), _cL = _cJ(function(_cB) {
                    return (function(_Q) {
                        var _cC = window.Uize && Uize.Dom.Basics._B[_cB];
                        return _cC && _cC._cE.call(_cC._X, _Q || window.event);
                    });
                }), _cM = {click: _cL,mouseover: _cJ(function(_cB) {
                        return (function(_Q) {
                            var _cN = Uize.Dom.Basics, _cC = window.Uize && _cN._B[_cB], _cO = (_Q || (_Q = window.event)).fromElement || _Q.relatedTarget;
                            if (_cC) {
                                if (_cO) {
                                    try {
                                        if (!_cO.Uize_Widget_Drag_shield && !_cN.isOnNodeTree(_cO, _cC._X))
                                            _cO = null;
                                    } catch (_cI) {
                                        _cO = null;
                                    }
                                }
                                if (!_cO) {
                                    _cN._P(_Q);
                                    return _cC._cE.call(_cC._X, _Q);
                                }
                            }
                        });
                    }),mouseout: _cJ(function(_cB) {
                        return (function(_Q) {
                            var _cN = Uize.Dom.Basics, _cC = window.Uize && _cN._B[_cB], _cP = (_Q || (_Q = window.event)).toElement || _Q.relatedTarget;
                            if (_cC) {
                                if (_cP) {
                                    try {
                                        if (
                                        !_cP.Uize_Widget_Drag_shield && !_cN.isOnNodeTree(_cP, _cC._X))
                                            _cP = null;
                                    } catch (_cI) {
                                        _cP = null;
                                    }
                                }
                                if (!_cP)
                                    return _cC._cE.call(_cC._X, _Q);
                            }
                        });
                    }),mousedown: _cL,mouseup: _cL};
                return function(_V, _S, _cE, _cs) {
                    if (!_S)
                        return;
                    if (_cs == _a)
                        _cs = '';
                    var _cQ;
                    if (_S.charCodeAt)
                        _S = _R(_S);
                    if (typeof _S == _f && !(_cQ = !!_S.virtualDomEvent)) {
                        _cs = arguments[2] || '';
                        for (var _Q in _S)
                            _U.wire(_V, _Q, _S[_Q], _cs);
                        return;
                    }
                    _k(_V, function(_X) {
                        var _bx = _X.tagName, _cR = _X == window && _E;
                        (_C[_cs] || (_C[_cs] = [])).push(_D);
                        var _cH = (_cQ ? _i : _cR ? _cK : _cM[_S] || _cL)(_D);
                        var _cC = _B[_D++] = {_X: _X,_S: _S,_cE: _cE,_cH: _cH};
                        if (_y && _bx == 'BODY' && _S == 'scroll') {
                            _cC._cD = _X;
                            _X = _cC._X = document;
                        }
                        if (_cH) {
                            var _cS = 'on' + _S;
                            _cR ? _cG.wire(_S, _cH) : _X.attachEvent ? _X.attachEvent(_cS, _cH) : _X.addEventListener(_S, _cH, _d);
                            if (_bx == 'A' && (_S == 'mousedown' || _S == 'click' || _S == 'touchstart') && !_X[_cS])
                                _X[_cS] = _i;
                        } else if (_cQ) {
                            _S.wire(_X, _cE, _cC._cF = _g.getGuid());
                        }
                    });
                }
            })(),ieMajorVersion: _v,isIe: _u,isSafari: _t.indexOf('applewebkit') > -1,isMozilla: _w,mousePos: _z});
        if (_r) {
            _U.wire(document.documentElement, 'mousemove', _P);
            if (_E) {
                var _cG = new _g.Event.Bus, _cT = setTimeout(function() {
                    _cG.fire('load')
                }, 15000);
                _g.forEach(['focus', 'blur', 'load', 'beforeunload', 'unload', 'resize', 'scroll', 'hashchange'], function(_cU) {
                    var _cV = 'on' + _cU, _cW = window[_cV] || _i;
                    window[_cV] = function(_Q) {
                        _cU == 'load' && clearTimeout(_cT);
                        _cW.call(window, _Q || (_Q = window.event));
                        _cG.fire({name: _cU,windowEvent: _Q});
                    };
                });
            }
        }
        return _U;
    }});

Uize.module({name: 'Uize.Json',builder: function() {
        'use strict';
        var _a, _b = 'string', _c = [], _d = {}, _e = '       ', _f = _e.replace(/ /g, _e).replace(/ /g, _e), _g = {RegExp: 1,Date: 1,String: 1,Number: 1,Boolean: 1}, _h = Uize.lookup(['break', 'boolean', 'case', 'catch', 'continue', 'const', 'debugger', 'default', 'delete', 'do', 'else', 'export', 'false', 'finally', 'for', 'function', 'if', 'import', 'in', 'instanceof', 'new', 'null', 'return', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'implements', 'interface', 'let', 'package', 'private', 'protected', 'public', 'static', 'yield'], _d), _i = {indentChars: '\t',keyAlign: 'left',keyDelimiter: ':',linebreakChars: '\n',padKeys: false,quoteChar: '\'',sortKeys: false,whenToQuoteKeys: 'auto'}, _j = {whenToQuoteKeys: 'always',quoteChar: '"'}, _k = {indentChars: '',linebreakChars: ''}, _l = {mini: Uize.copy(_i, _k),miniStrict: Uize.copy(_i, _k, _j),nice: _i,strict: Uize.copy(_i, _j)};
        return Uize.package({encodingOptionsPresets: _l,from: function(_m) {
                return _m ? Uize.eval('0,(' + _m + ')') : null;
            },to: function(_n, _o) {
                _o = 
                (typeof _o == 'string' ? _l[_o] : _o) || _l.nice;
                function _p(_q, _r) {
                    var _s = _o[_q];
                    return typeof _s == _b ? _s : _r;
                }
                var _t = [], _u = _p('indentChars', '\t'), _v = _p('linebreakChars', '\n'), _w = _p('quoteChar', '\''), _x = new RegExp(_w, 'g'), _y = '\\' + _w, _z = _o.sortKeys === true, _A = _o.padKeys === true, _B = _o.keyDelimiter || ':', _C = {left: 0,center: 0.5,right: 1}[_o.keyAlign || 'left'], _D = _o.whenToQuoteKeys || 'auto';
                function _E(_F) {
                    return _f.substr(0, _F)
                }
                function _G(_b) {
                    return (_w + _b.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(_x, _y) + _w);
                }
                function _H(_I, _J, _K, _L) {
                    var _M = 0, _N = typeof _I;
                    function _O(_P, _L) {
                        _t.push(_K + (_M++ ? '' : _J) + _P + (_L ? ',' : ''));
                    }
                    if (_I == _a || _N == 'number' || _N == 'boolean' || _N == 'function') {
                        _O(_I, _L);
                    } else if (_N == _b) {
                        _O(_G(_I), _L);
                    } else if (_N == 'object') {
                        var _Q = _I.constructor, _R = _Q == Object || _Q == Array, _S;
                        if (!_R)
                            _S = (((_Q + '').match(typeof _Q == 'object' ? /\[object\s+([^\]]+)\]/ : /^\s*function\s+([^\(]+)\s*\(/) || _c)[1]) || '';
                        if (_R || _S == 'Object' || _S == 'Array') {
                            var _T = _K + _u;
                            if (_I instanceof Array || (_I && Uize.isFunction(_I.splice))) {
                                var _U = _I.length;
                                if (_U) {
                                    var _V = _U - 1;
                                    _O('[');
                                    for (var _W = -1; ++_W < _U; )
                                        _H(_I[_W], '', _T, _W < _V);
                                    _O(']', _L);
                                } else {
                                    _O('[]', _L);
                                }
                            } else {
                                var _X = Uize.keys(_I), _Y = _X.length;
                                if (_Y) {
                                    _z && _X.sort();
                                    var _Z = function(_0) {
                                        return (isNaN(+_0) ? (/[^\w\$]|^\d/.test(_0) || _h[_0] == _d) : _0 != +_0 + '' || _0 < 0);
                                    };
                                    var _1 = _D == 'always';
                                    if (!_1 && _D == 'auto all') {
                                        for (var _2 = -1; ++_2 < _Y && !_1; )
                                            _1 = _1 || _Z(_X[_2]);
                                    }
                                    var _3 = [];
                                    for (var _2 = -1; ++_2 < _Y; ) {
                                        var _0 = _X[_2];
                                        _3[_2] = (_1 || _Z(_0)) ? _G(_0) : _0;
                                    }
                                    var _4 = 0;
                                    if (_A) {
                                        for (var _2 = -1; ++_2 < _Y; )
                                            _4 = Math.max(_4, _3[_2].length);
                                    }
                                    var _5 = _Y - 1;
                                    _O('{');
                                    for (var _2 = -1; ++_2 < _Y; ) {
                                        var _6 = '', _7 = _3[_2];
                                        if (_A) {
                                            var _8 = _4 - _7.length, _9 = Math.round(_C * _8);
                                            _6 = _E(_9);
                                            _7 += _E(_8 - _9);
                                        }
                                        _H(_I[_X[_2]], _7 + _B, _T + _6, _2 < _5);
                                    }
                                    _O('}', _L);
                                } else {
                                    _O('{}', _L);
                                }
                            }
                        } else {
                            if (_g[_S]) {
                                _O('new ' + _S + ' (' + (_S == 'String' ? _G(_I) : _I.valueOf()) + ')', _L);
                            } else {
                                _O('{}', _L);
                            }
                        }
                    }
                }
                _H(_n, '', '');
                return _t.join(_v);
            }});
    }});

Uize.module('Uize.Str');

Uize.module({name: 'Uize.Str.Has',builder: function() {
        'use strict';
        function _a(_b, _c, _d) {
            if (!_c)
                return true;
            var _e = _b.length, _f = _c.length, _g = _d ? _e - _f : 0, _h = _g + _f - 1;
            return (_f <= _e && _b.charCodeAt(_g) == _c.charCodeAt(0) && (_f == 1 || (_b.charCodeAt(_h) == _c.charCodeAt(_f - 1) && (_f == 2 || (_f == _e ? _c == _b : _d ? _b.indexOf(_c, _g) == _g : _b.lastIndexOf(_c, _h) == 0)))));
        }
        return Uize.package({has: function(_b, _c) {
                return (_c.length <= _b.length && (_a(_b, _c) || _a(_b, _c, true) || _b.indexOf(_c) > -1));
            },hasSuffix: function(_b, _c) {
                return _a(_b, _c, true);
            },hasPrefix: _a});
    }});

Uize.module({name: 'Uize.Str.Repeat',builder: function() {
        'use strict';
        var _a = [], _b, _c, _d;
        function _e(_f) {
            if (!_c)
                _c = (_b = '          '.replace(/ /g, '          ')).length;
            if (_f > _c)
                _c = (_b = _d(_b, Math.floor(_f / _c)) + _b.substr(0, _f % _c)).length;
            return _b.substr(0, _f);
        }
        return Uize.package({repeat: _d = function(_g, _h) {
                if (_h < 1 || !_g)
                    return '';
                if (_h == 1)
                    return _g;
                if (_g == ' ')
                    return _e(_h);
                _a.length = _h + 1;
                return _a.join(_g);
            }});
    }});

Uize.module({name: 'Uize.Str.Limit',required: 'Uize.Str.Repeat',builder: function() {
        'use strict';
        var _a = Uize.Str.Repeat.repeat, _b;
        return Uize.package({joinUsingSuffixPriority: function(_c, _d, _e) {
                var _f = _d.length;
                return (_e < _f ? _d.substr(0, _e) : _e == _f ? _d : _b(_c, _e - _f) + _d);
            },limitLength: _b = function(_g, _e) {
                var _h = '...', _i = _h.length;
                return (_e < 1 ? '' : _e <= _i ? _g.slice(0, _e) : _g.length > _e ? (_g.substr(0, _e - _i) + _h) : _g);
            },lengthize: function(_g, _j, _k) {
                if (_j < 1)
                    return '';
                var _l = _g.length, _m = _j - _l;
                if (_m) {
                    var _n = Math.floor(_m * (typeof _k == 'string' ? {left: 0,center: .5,right: 1}[_k] : +_k || 0)), _o = _m - _n;
                    return (_m > 0 ? _a(' ', _n) + _g + _a(' ', _o) : _g.slice(-_n, _l + _o));
                } else {
                    return _g;
                }
            }});
    }});

Uize.module({name: 'Uize.Dom.Pos',required: 'Uize.Dom.Basics',builder: function() {
        'use strict';
        var _a, _b = Uize, _c = Math, _d = Uize.Dom.Basics, _e, _f, _g, _h, _i, _j, _k, _l = _d.getStyle, _m = _d.doForAll, _n = _d.getById, _o = _d.isNode, _p = _d.isIe, _q = _d.setStyle, _r = ['left', 'top', 'width', 'height'];
        return _b.package({getDocumentScrollElement: _j = function() {
                return document[_d.isSafari ? 'body' : 'documentElement']
            },doRectanglesOverlap: _k = function(_s, _t, _u, _v, _w, _x, _y, _z) {
                return (_u - 1 + +_s >= _w && _y - 1 + +_w >= _s && _v - 1 + +_t >= _x && _z - 1 + +_x >= _t);
            },getCoords: _e = function(_A) {
                var _B = 0, _C = 0, _D = 0, _E = 0, _F = true, _G = 100, _H = _j(), _I = _g(window);
                function _J() {
                    _B += (window.pageXOffset || _H.scrollLeft);
                    _C += (window.pageYOffset || _H.scrollTop);
                }
                if (_A == window) {
                    _J();
                    _D = _I.width;
                    _E = _I.height;
                } else if (_o(_A = _n(_A))) {
                    _D = _A.offsetWidth;
                    _E = _A.offsetHeight;
                    if (!(_D && _E) && _A.tagName == 'DIV') {
                        for (var _K = _A.childNodes, _L = _K.length; --_L >= 0; ) {
                            if (_K[_L].nodeName.charAt(0) != '#') {
                                var _M = _e(_K[_L]);
                                if (_M.width || _M.height) {
                                    _D = _c.max(_D, _M.right - _B + 1);
                                    _E = _c.max(_E, _M.bottom - _C + 1);
                                }
                            }
                        }
                    }
                    if (_A.tagName == 'A' && _A.childNodes.length == 1 && _A.childNodes[0].tagName == 'IMG')
                        _A = _A.childNodes[0];
                    var _N = function(_A) {
                        return _l(_A, 'display') == 'none' || _l(_A, 'visibility') == 'hidden';
                    }, _O = _F = !_N(_A), _P = _A, _Q = _A, _R = _I.width, _S = _I.height, _T = _H.scrollLeft, _U = _H.scrollTop, _V = _T + _R, _W = _U + _S;
                    while (_Q.parentNode && typeof _Q.parentNode != 'unknown') {
                        var _X = _Q.offsetLeft || 0, _Y = _Q.offsetTop || 0, _Z = _Q.offsetWidth, _0 = _Q.offsetHeight;
                        if (_F && _N(_Q))
                            _F = false;
                        if (_Q == _P) {
                            _B += _X + (parseInt(_l(_Q, 'borderLeftWidth')) || 0);
                            _C += _Y + (parseInt(_l(_Q, 'borderTopWidth')) || 0);
                            _P = _Q.offsetParent;
                            _l(_Q, 'position') == 'fixed' && _J();
                        }
                        if (_Q != _A && _Q != document.body && _Q != document.documentElement && (_Q.scrollWidth > _Z || _Q.scrollHeight > _0)) {
                            _B -= _Q.scrollLeft;
                            _C -= _Q.scrollTop;
                            if (_p) {
                                _B += _Q.clientLeft;
                                _C += _Q.clientTop;
                            }
                            if (_F)
                                _F = _k(_B, _C, _D, _E, _X, _Y, _Z, _0);
                        }
                        var _1 = _Q.style, _2 = _1.transform || _1.webkitTransform;
                        if (_2) {
                            var _3 = _2.toLowerCase().replace(/ /g, '').match(/(translate[a-z0-9]*)\((-?[0-9a-z\.]+),?(-?[0-9a-z\.]+)?.*?\)/);
                            if (_3 !== null)
                                switch (_3[1]) {
                                    case 'translate':
                                    case 'translate3d':
                                        _B += parseInt(_3[2]);
                                        _C += parseInt(_3[3]);
                                        break;
                                    case 'translatex':
                                        _B += parseInt(_3[2]);
                                        break;
                                    case 'translatey':
                                        _C += parseInt(_3[2]);
                                        break;
                                }
                        }
                        _Q = _Q.parentNode;
                    }
                    if (_F)
                        _F = _k(_B, _C, _D, _E, _T, _U, _R, _S);
                    _G = _F ? ((_c.min(_B + _D, _V) - _c.min(_c.max(_B, _T), _V)) * (_c.min(_C + _E, _W) - _c.min(_c.max(_C, _U), _W))) / (_D * _E) * 100 : 0;
                }
                return {x: _B,y: _C,width: _D,height: _E,area: _D * _E,left: _B,top: _C,right: _B + _D - 1,bottom: _C + _E - 1,seen: _F,percentSeen: _G};
            },getDimensions: _g = function(_A) {
                if (_A == window) {
                    var _H = document.documentElement;
                    return {width: window.innerWidth || _H.clientWidth || _H.offsetWidth,height: window.innerHeight || _H.clientHeight || _H.offsetHeight};
                } else if (_A = _n(_A)) {
                    return {width: _A.offsetWidth || parseInt(_l(_A, 'width')) || 0,height: _A.offsetHeight || parseInt(_l(_A, 'height')) || 0};
                } else {
                    return {width: 0,height: 0};
                }
            },setCoords: _f = function(_4, _5) {
                _q(_4, _b.isArray(_5) ? _b.meldKeysValues(_r, _5) : _5);
            },centerInWindow: function(_4) {
                var _6 = _e(window);
                _m(_4, function(_A) {
                    var _7 = _g(_A);
                    _f(_A, {left: _6.x + ((_6.width - _7.width) >> 1),
                        top: _6.y + ((_6.height - _7.height) >> 1)});
                });
            },getEventAbsPos: _i = function(_8) {
                var _9 = (_8 || (_8 = _d.mousePos)).targetTouches;
                if (_9 && _9.length)
                    _8 = _9[0];
                if (_8.pageX != _a) {
                    return {left: _8.pageX,top: _8.pageY};
                } else {
                    var _H = _j();
                    return {left: _8.clientX + _H.scrollLeft,top: _8.clientY + _H.scrollTop};
                }
            },setAbsPos: _h = function(_4, _ba, _bb) {
                _bb = typeof _bb == 'number' ? {x: _bb,y: _bb} : (_bb || {x: 0,y: 0});
                var _H = _j(), _bc = _g(window);
                _m(_4, function(_A) {
                    function _bd(_be, _bf, _bg, _bh) {
                        var _bi = _ba[_be], _bj = _bb[_bh], _bk = _bi - _H[_bf], _bl = _bj + _7[_bg];
                        return (_bi + (_bk + _bl > _bc[_bg] ? _c.max(-_bl, -_bk) : _bj));
                    }
                    var _7 = _g(_A);
                    _q(_A, {left: _bd('left', 'scrollLeft', 'width', 'x'),top: _bd('top', 'scrollTop', 'height', 'y'),right: 'auto',bottom: 'auto'});
                });
            },setAbsPosAdjacentTo: function(_4, _bm, _bn) {
                _bm = _n(_bm);
                var _bo = _e(_bm), _bp = _bo.width / 2, _bq = _bo.height / 2, _br = _bn == 'x' ? -1 : 1;
                if (!_bp && !_bq)
                    _bo = _i();
                _m(_4, function(_A) {
                    _h(_A, {left: _bo.left + _bp,top: _bo.top + _bq}, {x: -_bp * _br,y: _bq * _br});
                });
            }});
    }});

Uize.module('Uize.Util');

Uize.module({name: 'Uize.Util.Dependencies',builder: function() {
        'use strict';
        var _a = {};
        function _b(_c) {
            return (!_c ? [] : typeof _c == 'string' ? _c.split(',') : _c);
        }
        return Uize.package({resolveDependenciesList: _b,traceDependencies: function(_d, _e, _f) {
                var _g = Uize.lookup(_b(_f), _a), _h = [];
                function _i(_c) {
                    Uize.forEach(_c.sort(), function(_j) {
                        if (_g[_j] != _a) {
                            _g[_j] = _a;
                            _i(_e(_j));
                            _h.push(_j);
                        }
                    });
                }
                _i(_b(_d));
                return _h;
            }});
    }});

Uize.module({name: 'Uize.Class',required: ['Uize.Util.Dependencies', 'Uize.Event.Bus'],builder: function() {
        'use strict';
        var a_a = 'string', a_b = Function, a_c = Uize, a_d = a_c.copyInto, a_e = a_c.forEach, a_f = a_c.map, a_g = a_c.lookup, a_h = a_c.getClass, a_i = a_c.isArray, a_j = a_c.isFunction, a_k = a_c.isInstance, a_l = a_c.isObject, a_m = a_c.Util.Dependencies.traceDependencies, a_n = a_c.applyAll, a_o = Uize.Event.Bus, a_p = [], a_q = {}, a_r = 1, a_s = 2, a_t = {};
        function a_u(a_v, a_w, a_x) {
            function a_y() {
                return this[a_z(this, 'value')];
            }
            var a_A = a_c.noNew(function() {
                var a_B = arguments;
                a_n(this, a_C, a_B);
                a_n(this, a_D, a_B);
            }), a_E = a_A.prototype;
            var a_F = a_v.nonInheritableStatics || a_q, a_G = a_c.clone;
            for (var a_H in a_v)
                if (!a_F[a_H] && a_H != 'prototype')
                    a_A[a_H] = a_G(a_v[a_H]);
            a_d(a_E, a_v.prototype);
            a_E.valueOf = a_y;
            a_E.Class = a_A;
            a_A.nonInheritableStatics = {a_I: 1,nonInheritableStatics: 1,valueOf: 0};
            a_A.superclass = a_v;
            a_A.valueOf = a_y;
            var a_C = a_A.a_C = (a_v.a_C || a_p).concat(), a_D = a_A.a_D = (a_v.a_D || a_p).concat();
            a_w && a_C.push(a_w);
            a_x && a_D.push(a_x);
            a_A.a_J || (a_A.a_J = {});
            a_A.a_K || (a_A.a_K = {});
            return a_A;
        }
        var a_v = a_u(function() {
        }, function() {
            var m = this;
            (m.a_L = new a_o).wireUnwireWrapper = function(a_M, a_N) {
                if (a_M.charCodeAt(0) == 67 && !a_M.indexOf('Changed.')) {
                    var a_O = a_M.slice(8), a_P = a_h(m).a_J[a_z(m, a_O)];
                    if (a_P && a_O != a_P.a_Q)
                        a_M = 'Changed.' + (a_O = a_P.a_Q);
                    a_N(a_M);
                    (m.a_R || (m.a_R = {}))[a_O] = this.hasHandlers(a_M);
                } else {
                    a_N(a_M);
                }
            };
            m.instanceId = a_c.getGuid();
        }, function(a_S) {
            a_S || (a_S = a_q);
            var a_T = {}, a_U = this.Class.a_U, a_H, a_V;
            for (a_H in a_U) {
                if (a_H in a_S)
                    a_T[a_H] = a_S[a_H];
                else if ((a_V = a_U[a_H]) !== undefined)
                    a_T[a_H] = a_V;
            }
            for (a_H in a_S)
                a_H in a_T || (a_T[a_H] = a_S[a_H]);
            this.set(a_T);
        });
        a_v.instanceMethods = a_v.instanceProperties = function(a_W) {
            a_d(this.prototype, a_W);
        };
        a_v.staticMethods = a_v.staticProperties = function(a_X) {
            a_d(this, a_X);
        };
        a_v.dualContextMethods = a_v.dualContextProperties = function(a_Y) {
            a_d(this, a_Y);
            a_d(this.prototype, a_Y);
        };
        a_v.declare = function(a_Z) {
            for (var a_0 in a_Z)
                this[a_0](a_Z[a_0]);
            return this;
        };
        a_v.mixins = function(a_1) {
            var m = this, a_2 = m.a_2 || (m.a_2 = []);
            function a_3(a_1) {
                if (!a_c.isIn(a_2, a_1)) {
                    a_2.push(a_1);
                    a_j(a_1) ? a_1(m) : a_i(a_1) ? a_e(a_1, a_3) : m.declare(a_1);
                }
            }
            a_3(a_1);
        };
        function a_z(m, a_4) {
            return (a_h(m).a_K[a_4] || a_4);
        }
        function a_5(a_6) {
            var a_7 = Uize.isPlainObject(a_6), a_8 = a_7 ? a_6.properties + ' : ' + a_6.derivation : a_6 + '', a_9 = a_t[a_8];
            function a_ba(a_bb) {
                return (a_bb.replace(/\s+/g, '').replace('', '').split(','));
            }
            if (!a_9) {
                var a_bc, a_bd;
                if (a_7) {
                    a_bc = a_6.properties;
                    if (typeof a_bc == a_a)
                        a_bc = a_ba(a_bc);
                    a_bd = a_6.derivation;
                } else if (a_j(a_6)) {
                    a_bc = a_ba((a_6 + '').match(/\(([^\)]*)\)/)[1]);
                    a_bd = a_6;
                } else {
                    if (typeof a_6 == a_a) {
                        var a_be = a_6.indexOf(':');
                        if (a_be > -1) {
                            a_bd = a_b(a_bc = a_ba(a_6.slice(0, a_be)), 'return ' + a_6.slice(a_be + 1));
                        } else {
                            a_6 = a_ba(a_6);
                        }
                    }
                    if (a_i(a_6)) {
                        a_bc = [];
                        if (a_6.length) {
                            var a_bf = [], a_bg = [];
                            a_e(a_6, function(a_bh, a_bi) {
                                var a_bj = a_bh.charCodeAt(0) == 33, a_bk = 'a' + a_bi;
                                a_bc.push(a_bj ? a_bh.slice(1) : a_bh);
                                a_bf.push(a_bk);
                                a_bg.push((a_bj ? '!' : '') + a_bk);
                            });
                            a_bd = a_b(a_bf, 'return ' + a_bg.join(' && '));
                        } else {
                            a_bd = a_c.returnTrue;
                        }
                    }
                }
                a_9 = a_t[a_8] = {a_bc: a_bc,a_bl: a_b(
                    'return [' + a_f(a_bc, '"this.get(\'" + value + "\')"').join(',') + ']'),a_bd: a_bd,a_bm: a_f(a_bc, '"Changed." + value')};
            }
            return a_9;
        }
        function a_bn(m, a_6, a_bo, a_bp) {
            var a_bq = a_bp == a_r, a_br = a_bp == a_s, a_6 = a_5(a_6), a_bl = a_6.a_bl, a_bd = a_6.a_bd, a_bs = true, a_bt, a_bu;
            function a_bv() {
                var a_bw = a_bl.call(m), a_bx = a_bd.apply(m, a_bw);
                if (a_bq || a_br)
                    a_bx = !!a_bx;
                if (a_bs || a_bx !== a_bt) {
                    a_bs = false;
                    a_bq && a_bx && a_bu && m.unwire(a_bu);
                    a_bq || a_br ? a_bx && (a_bq || !a_bx != !a_bt) && a_bo.apply(0, a_bw) : a_bo.call(0, a_bx, a_bw);
                    a_bt = a_bx;
                }
            }
            a_bv();
            a_bq && a_bt ? (a_bu = {}) : m.wire(a_bu = a_g(a_6.a_bm, a_bv));
            return a_bu;
        }
        return a_v.declare({instanceMethods: {onChange: function(a_6, a_bo) {
                    return a_bn(this, a_6, a_bo);
                },once: function(a_by, a_bo) {
                    return a_bn(this, a_by, a_bo, a_r);
                },whenever: function(a_by, a_bo) {
                    return a_bn(this, a_by, a_bo, a_s);
                },is: function(a_H) {
                    return !!this[a_z(this, a_H)];
                },isMet: function(a_by) {
                    var a_6 = a_5(a_by);
                    return a_6.a_bd.apply(this, a_6.a_bl.call(this));
                },met: function(a_bz) {
                    this.set(a_bz, true);
                },unmet: function(a_bz) {
                    this.set(a_bz, false);
                },
                kill: function() {
                    var a_bA = this.instanceId;
                    a_c.eval('if(typeof ' + a_bA + '!=\'undefined\')' + a_bA + '=null');
                }},staticMethods: {subclass: function(a_bB, a_bC) {
                    return (arguments.length == 1 && !a_j(a_bB) ? a_u(this).declare(a_bB) : a_u(this, a_bB, a_bC));
                },alphastructor: function(a_w) {
                    this.a_C.push(a_w);
                },omegastructor: function(a_x) {
                    this.a_D.push(a_x);
                },stateProperties: function(a_bD) {
                    var m = this, a_J = m.a_J, a_K = m.a_K, a_bE;
                    for (var a_bF in a_bD) {
                        var a_bG = a_bD[a_bF], a_bH = a_l(a_bG), a_bI = a_K[a_bF] || a_bF, a_O = (a_bH ? a_bG.name : a_bG) || a_bF, a_bJ = a_O, a_P = a_J[a_bI];
                        a_K[a_bI] = a_bI;
                        if (!a_P) {
                            a_P = a_J[a_bI] = {a_bK: a_bI};
                            if (a_O.indexOf('|') > -1) {
                                var a_bL = a_O.split('|');
                                a_bJ = a_bL[0];
                                a_g(a_bL, a_bI, a_K);
                            } else {
                                a_K[a_O] = a_bI;
                            }
                            a_P.a_Q = a_bJ;
                        }
                        if (a_bH) {
                            var a_bM = a_bG.onChange;
                            if (a_bM) {
                                var a_bN = a_P.a_bn;
                                a_P.a_bn = a_bN ? [].concat(a_bN, a_bM) : a_bM;
                            }
                            if (a_bG.conformer)
                                a_P.a_bO = a_bG.conformer;
                            if (a_bG.derived) {
                                a_bE = true;
                                var a_6 = a_5(a_bG.derived);
                                a_6.a_bP = a_b('o', 'return ' + a_f(a_6.a_bc, "'\"' + value + '\" in o'").join(' || '));
                                a_P.a_6 = a_6;
                            }
                            if ('value' in a_bG)
                                m[a_bI] = a_bG.value;
                        }
                    }
                    var a_U = m.a_U = m.get();
                    if (a_bE) {
                        for (var a_bQ = function(a_H) {
                            return (a_J[a_K[a_H]] || a_q).a_6;
                        }, a_bR = m.a_bR = [], a_S = a_m(a_c.keys(a_U), function(a_H) {
                            var a_6 = a_bQ(a_H);
                            return a_6 ? a_6.a_bc : a_p;
                        }), a_bS = a_S.length, a_O, a_bT = -1; ++a_bT < a_bS; ) {
                            a_bQ(a_O = a_S[a_bT]) && a_bR.push(a_O);
                        }
                    }
                },doMy: function(a_bU, a_bV, a_B) {
                    return this.prototype[a_bV].apply(a_bU, a_B || a_p);
                },singleton: function(a_bW, a_S) {
                    var m = this, a_I = m.a_I || (m.a_I = {}), a_bX = a_I[a_bW || (a_bW = '')];
                    a_bX ? a_S && a_bX.set(a_S) : (a_bX = a_I[a_bW] = m(a_S));
                    return a_bX;
                }},dualContextMethods: {get: function(a_H) {
                    if (typeof a_H == a_a) {
                        return this[a_z(this, a_H)];
                    } else {
                        var m = this, a_bY = {};
                        if (!a_H) {
                            var a_v = a_h(m), a_J = a_v.a_J;
                            for (var a_bI in a_J)
                                a_bY[a_J[a_bI].a_Q] = m[a_bI];
                            if (a_k(m)) {
                                var a_bZ = m.a_bZ;
                                if (a_bZ)
                                    for (a_H in a_bZ)
                                        a_bY[a_H] = m[a_H];
                            }
                        } else if (a_i(a_H)) {
                            for (var a_b0 = -1, a_b1 = a_H.length; ++a_b0 < a_b1; ) {
                                var a_b2 = a_H[a_b0];
                                a_bY[a_b2] = m[a_z(m, a_b2)];
                            }
                        } else {
                            for (var a_b2 in a_H)
                                a_bY[a_b2] = m[a_z(m, a_b2)];
                        }
                        return a_bY;
                    }
                },set: function(a_S) {
                    var m = this, a_B = arguments, a_b3 = a_B.length;
                    if (a_b3 > 1)
                        a_S = a_b3 > 2 || typeof a_S == a_a ? a_c.pairUp.apply(0, a_B) : a_g(a_S, a_B[1]);
                    var a_b4 = a_k(m), a_v = a_b4 ? m.Class : m, a_J = a_v.a_J, a_K = a_v.a_K, a_P, a_b5, a_b6 = {}, a_b7, a_b8, a_R = a_b4 && m.a_R, a_b9 = a_R && a_R['*'], a_ca, a_cb, a_bI, a_O, a_cc, a_cd, a_ce, a_bR = a_v.a_bR || a_p, a_cf = [], a_4;
                    for (a_4 in a_S) {
                        a_P = a_J[a_K[a_4] || a_4];
                        if (!a_P || !a_P.a_6)
                            a_cf.push(a_4);
                    }
                    for (var a_bT = -1, a_cg = a_cf.length, a_ch = a_cg + (a_b4 && a_bR.length); ++a_bT < a_ch; ) {
                        var a_ci = a_bT >= a_cg;
                        a_4 = a_ci ? a_bR[a_bT - a_cg] : a_cf[a_bT];
                        a_P = a_J[a_K[a_4] || a_4];
                        if (a_ci) {
                            var a_cj = a_P.a_6;
                            if (a_cj.a_bP(a_b6)) {
                                a_cd = a_cj.a_bd.apply(m, a_cj.a_bl.call(m));
                            } else {
                                continue;
                            }
                        } else {
                            a_cd = a_S[a_4];
                        }
                        if (a_P) {
                            a_bI = a_P.a_bK;
                            a_O = a_P.a_Q;
                        } else {
                            a_bI = a_O = a_4;
                            a_P = a_b4 ? {} : {value: a_cd};
                            a_b4 ? ((m.a_bZ || (m.a_bZ = {}))[a_4] = true) : ((a_cc || (a_cc = {}))[a_4] = a_P);
                        }
                        if (a_b4)
                            (a_ce || (a_ce = {}))[a_O] = a_P.a_bO ? (a_cd = a_P.a_bO.call(m, a_cd, m[a_bI])) : a_cd;
                        if (a_cd !== m[a_bI]) {
                            if (a_b4) {
                                a_b6[a_O] = a_b6[a_bI] = 1;
                                a_b9 && ((a_ca || (a_ca = {}))[a_O] = a_cd);
                                a_R && a_R[a_O] && (a_cb || (a_cb = [])).push(a_O, a_cd);
                                var a_ck = function(a_b8) {
                                    if (a_j(a_b8)) {
                                        if (!a_b5) {
                                            a_b5 = [];
                                            a_b7 = m.instanceId + '_handlerAlreadyAdded';
                                        }
                                        if (!a_b8[a_b7]) {
                                            a_b8[a_b7] = 1;
                                            a_b5.push(a_b8);
                                        }
                                    } else if (typeof a_b8 == a_a) {
                                        a_ck(m[a_b8]);
                                    } else if (a_i(a_b8)) {
                                        a_e(a_b8, a_ck);
                                    }
                                };
                                a_P.a_bn && a_ck(a_P.a_bn);
                            }
                            m[a_bI] = a_cd;
                        }
                    }
                    a_cc && a_v.stateProperties(a_cc);
                    if (a_b4) {
                        if (a_b5) {
                            for (var a_cl = -1, a_cm = a_b5.length; ++a_cl < a_cm; ) {
                                delete (a_b8 = a_b5[a_cl])[a_b7];
                                a_b8.call(m, a_ce);
                            }
                        }
                        a_ca && m.fire({name: 'Changed.*',properties: a_ca});
                        if (a_cb) {
                            for (var a_cn = -1, a_co = a_cb.length / 2; ++a_cn < a_co; )
                                m.fire({name: 'Changed.' + a_cb[a_cn * 2],newValue: a_cb[a_cn * 2 + 1]});
                        }
                    } else {
                        a_v.a_U = m.get();
                    }
                },toggle: function(a_bF) {
                    var a_cp = !this.get(a_bF);
                    this.set(a_bF, a_cp);
                    return a_cp;
                },wire: function() {
                    var a_L = this.a_L || (this.a_L = new a_o);
                    a_L.wire.apply(a_L, arguments);
                },fire: function(a_cq) {
                    var m = this;
                    if (typeof a_cq != 'object')
                        a_cq = {name: a_cq};
                    a_cq.source || (a_cq.source = m);
                    m.a_L && m.a_L.fire(a_cq);
                    a_cq.bubble && m.parent && a_k(m) && m.parent.fire(a_cq);
                    return a_cq;
                },unwire: function() {
                    var a_L = this.a_L;
                    a_L && a_L.unwire.apply(a_L, arguments);
                }}});
    }});

Uize.module('Uize.Math');

Uize.module({name: 'Uize.Math.Blend',builder: function(_a) {
        'use strict';
        var _b, _c = 'object', _d = Uize, _e = _d.constrain, _f = _d.isFunction, _g = _d.clone, _h;
        return _d.package({blend: _h = function(_i, _j, _k, _l, _m, _n, _o) {
                if (_i === _j) {
                    return _n !== _b && _i === _n ? _o : _g(_i);
                } else {
                    if (_f(_m)) {
                        _k = _m(_k);
                        _m = _b;
                    }
                    if (typeof _i == _c && _i && !(_i instanceof RegExp)) {
                        var _p = _n && typeof _n == _c, _q = _l && typeof _l == _c, _r = _m && typeof _m == _c, _s = _p ? _n : _d.isArray(_i) ? [] : {}, _t;
                        for (var _u in _i) {
                            var _v = _h(_i[_u], _j[_u], _k, _q ? _l[_u] : _l, _r ? _m[_u] : _m, _t = _s[_u], _o);
                            if (_p)
                                _p = _v == _o || (typeof _v != _c && _v == _t);
                            if (_v != _o)
                                _s[_u] = _v;
                        }
                        return _p ? _o : _s;
                    } else {
                        var _s = !_k ? _i : _k == 1 ? _j : !_l ? _i + (_j - _i) * _k : (_l < 0 ? (_l *= -1) : _l) && (_k < 0 || _k > 1) ? _i + Math.round((_j - _i) * _k / _l) * _l : _l != Infinity ? _e(_i + Math.round((_j - _i) * _k / _l) * _l, _i, _j) : _i;
                        return _n !== _b && _s === _n ? _o : _s;
                    }
                }
            }});
    }});

Uize.module({name: 'Uize.Fade',superclass: 'Uize.Class',required: 'Uize.Math.Blend',builder: function(b_a) {
        'use strict';
        var b_b = Uize.constrain, b_c = Uize.now, b_d = [], b_e = false, b_f, b_g = {}, b_h = Uize.Math.Blend.blend;
        function b_i() {
            if ((b_e = !!b_d.length) != !!b_f)
                b_f = b_e ? setInterval(b_j, 10) : clearInterval(b_f);
        }
        function b_j() {
            for (var b_k = -1, b_l; ++b_k < b_d.length; )
                (b_l = b_d[b_k]).b_m ? b_n(b_l) : b_d.splice(b_k--, 1);
            b_i();
        }
        function b_o() {
            var m = this, b_p = b_h(m.b_q, m.b_r, m.b_s, m.b_t, m.b_u, m.b_p, b_g);
            if (b_p != b_g)
                b_p != m.b_p ? m.set({b_p: b_p}) : m.fire({name: 'Changed.value',newValue: b_p});
        }
        ;
        function b_n(m) {
            var b_v = Math.min((b_c() - m.b_w) / m.b_x, 1);
            m.set({b_s: m.b_y ? 1 - b_v : b_v});
            if (b_v == 1) {
                m.stop();
                m.fire('Done');
            }
        }
        ;
        function b_z() {
            var m = this;
            m.set({b_u: m.b_A || m.b_B ? m.Class.celeration(m.b_A, m.b_B) : null});
        }
        function b_C() {
            this.b_p = null;
            b_o.call(this);
        }
        return Uize.mergeInto(b_a.subclass({instanceMethods: {stop: function() {
                    this.set({b_m: false});
                },start: function(b_D) {
                    this.stop();
                    this.set(Uize.copyInto({b_m: true}, b_D));
                }},staticMethods: {
                blendValues: b_h,celeration: function(b_A, b_B) {
                    var b_E = 1 - (b_A = b_A || 0) - (b_B = b_B || 0), b_F = 2 / (1 + b_E), b_G = b_A ? b_F / b_A : 0, b_H = b_G / 2, b_I = b_B ? -b_F / b_B : 0, b_J = b_I / 2, b_K = b_A * b_A, b_L;
                    return (b_E >= 1 ? Uize.returnX : function(b_p) {
                        return ((b_p = (b_A ? b_b(b_p * b_p, 0, b_K) * b_H : 0) + (b_E ? b_F * b_b(b_p - b_A, 0, b_E) : 0) + (b_B ? ((b_F + (b_L = b_b(b_p - b_A - b_E, 0, b_B)) * b_J) * b_L) : 0)) > 1 ? 1 : b_p);
                    });
                }},stateProperties: {b_A: {name: 'acceleration',onChange: b_z},b_u: {name: 'curve',onChange: b_C},b_B: {name: 'deceleration',onChange: b_z},b_x: {name: 'duration',value: 2000},b_r: {name: 'endValue',onChange: b_C,value: 100},b_m: {name: 'inProgress',onChange: function() {
                        var m = this;
                        if (m.b_m) {
                            m.b_w = b_c();
                            m.fire('Start');
                            m.b_p = m.b_s = null;
                            b_n(m);
                            b_d.push(m);
                            b_i();
                        }
                    },value: false},b_s: {name: 'progress',onChange: b_o,value: 0},b_y: 'reverse',b_q: {name: 'startValue',onChange: b_C,value: 0},b_t: 'quantization',b_p: {name: 'value',value: 0}}}), {nonInheritableStatics: {blendValues: 1,celeration: 1}});
    }});

Uize.module({name: 'Uize.Tooltip',required: ['Uize.Dom.Basics', 'Uize.Dom.Pos', 'Uize.Fade'],builder: function() {
        'use strict';
        var _a = function() {
        }, _b = true, _c = false, _d, _e = Uize.Dom.Basics, _f = Uize.Dom.Pos, _g = Uize.getGuid(), _h = [], _i, _j = 16;
        function _k(_l) {
            return _e.getById(Uize.isFunction(_l) ? _l() : _l);
        }
        function _m() {
            _n()
        }
        function _o(_p) {
            if (_p != _i) {
                if (_p) {
                    if (_i) {
                        _q.stop();
                        _r();
                    }
                    if (!_p._s) {
                        _e.wire(document.body, 'scroll', _m, _g);
                        _e.wire(document.documentElement, 'mousemove', _m, _g);
                    }
                    _i = _p;
                    _e.setStyle(_i._t, {position: 'absolute',zIndex: 5000,left: -50000,top: -50000});
                    _e.display(_i._t);
                    _n();
                } else {
                    _q.get('duration') > 0 ? _q.start() : _r();
                }
            } else if (_p) {
                _q.stop();
                _e.setOpacity(_i._t, 1);
            }
        }
        _a.showTooltip = function(_l, _u, _s) {
            if (_l = _k(_l)) {
                if (_u !== _c) {
                    _h.push({_t: _l,_s: _s});
                } else {
                    for (var _v = _h.length; --_v > -1; )
                        if (_h[_v]._t == _l)
                            break;
                    _v > -1 && _h.splice(_v, 1);
                }
                _o(_h[_h.length - 1]);
            }
        };
        _a.hideTooltip = function(_l) {
            _a.showTooltip(_l, _c)
        };
        var _n = _a.positionTooltip = function(_l, _w) {
            _i && (_l === _d ? (_l = _i._t) : _i._t == _k(_l)) && 
            _f.setAbsPos(_l, _f.getEventAbsPos(_w), _j);
        };
        var _q = _a.fade = Uize.Fade({duration: 0});
        function _r() {
            _i._s || _e.unwireEventsByOwnerId(_g);
            _e.display(_i._t, _c);
            _e.setOpacity(_i._t, 1);
            _i = null;
        }
        _q.wire({'Changed.value': function() {
                _e.setOpacity(_i._t, 1 - _q.get('progress'))
            },Done: _r});
        return _a;
    }});

Uize.module({name: 'Uize.Str.Replace',builder: function() {
        'use strict';
        var _a;
        return Uize.package({replacerByLookup: _a = function(_b) {
                var _c = [], _d = [];
                Uize.forEach(Uize.keys(_b), function(_e) {
                    if (_e)
                        (_e.length > 1 ? _c : _d).push(Uize.escapeRegExpLiteral(_e));
                });
                _d.length && _c.unshift('[' + _d.join('') + ']');
                var _f = new RegExp(_c.join('|'), 'g');
                return function(_g) {
                    return (_g += '') && _g.replace(_f, function(_h) {
                        return _b[_h]
                    });
                }
            },replaceByLookup: function(_i, _b) {
                return _a(_b)(_i);
            }});
    }});

Uize.module('Uize.Util.Html');

Uize.module({name: 'Uize.Util.Html.Entities',builder: function() {
        'use strict';
        var _a = {
            quot: 34,amp: 38,apos: 39,lt: 60,gt: 62,nbsp: 160,iexcl: 161,cent: 162,pound: 163,curren: 164,yen: 165,brvbar: 166,sect: 167,uml: 168,copy: 169,ordf: 170,laquo: 171,not: 172,shy: 173,reg: 174,macr: 175,deg: 176,plusmn: 177,sup2: 178,sup3: 179,acute: 180,micro: 181,para: 182,middot: 183,cedil: 184,sup1: 185,ordm: 186,raquo: 187,frac14: 188,frac12: 189,frac34: 190,iquest: 191,Agrave: 192,Aacute: 193,Acirc: 194,Atilde: 195,Auml: 196,Aring: 197,AElig: 198,CCedil: 199,Egrave: 200,Eacute: 201,Ecirc: 202,Euml: 203,Igrave: 204,Iacute: 205,Icirc: 206,Iuml: 207,ETH: 208,Ntilde: 209,Ograve: 210,Oacute: 211,Ocirc: 212,Otilde: 213,Ouml: 214,times: 215,Oslash: 216,Ugrave: 217,Uacute: 218,Ucirc: 219,Uuml: 220,Yacute: 221,THORN: 222,szlig: 223,agrave: 224,aacute: 225,acirc: 226,atilde: 227,auml: 228,aring: 229,aelig: 230,ccedil: 231,egrave: 232,eacute: 233,ecirc: 234,euml: 235,igrave: 236,iacute: 237,icirc: 238,iuml: 239,eth: 240,ntilde: 241,ograve: 242,oacute: 243,ocirc: 244,otilde: 245,ouml: 246,divide: 247,oslash: 248,ugrave: 249,uacute: 250,ucirc: 251,uuml: 252,yacute: 253,thorn: 254,yuml: 255,OElig: 338,oelig: 339,Scaron: 352,scaron: 353,Yuml: 376,fnof: 402,circ: 710,tilde: 732,Alpha: 913,Beta: 914,Gamma: 915,Delta: 916,Epsilon: 917,Zeta: 918,Eta: 919,Theta: 920,Iota: 921,Kappa: 922,Lambda: 923,Mu: 924,Nu: 925,Xi: 926,Omicron: 927,Pi: 928,Rho: 929,Sigma: 931,Tau: 932,Upsilon: 933,Phi: 934,Chi: 935,Psi: 936,Omega: 937,alpha: 945,beta: 946,gamma: 947,delta: 948,epsilon: 949,zeta: 950,eta: 951,theta: 952,iota: 953,kappa: 954,lambda: 955,mu: 956,nu: 957,xi: 958,omicron: 959,pi: 960,rho: 961,sigmaf: 962,sigma: 963,tau: 964,upsilon: 965,phi: 966,chi: 967,psi: 968,omega: 969,thetasym: 977,upsih: 978,piv: 982,ensp: 8194,emsp: 8195,thinsp: 8201,zwnj: 8204,zwj: 8205,lrm: 8206,rlm: 8207,ndash: 8211,mdash: 8212,lsquo: 8216,rsquo: 8217,sbquo: 8218,ldquo: 8220,rdquo: 8221,bdquo: 8222,dagger: 8224,Dagger: 8225,bull: 8226,hellip: 8230,permil: 8240,prime: 8242,Prime: 8243,lsaquo: 8249,rsaquo: 8250,oline: 8254,frasl: 8260,euro: 8364,image: 8465,weierp: 8472,real: 8476,trade: 8482,alefsym: 8501,larr: 8592,uarr: 8593,rarr: 8594,darr: 8595,harr: 8596,crarr: 8629,lArr: 8656,uArr: 8657,rArr: 8658,dArr: 8659,hArr: 8660,forall: 8704,part: 8706,exist: 8707,empty: 8709,nabla: 8711,isin: 8712,notin: 8713,ni: 8715,prod: 8719,sum: 8721,minus: 8722,lowast: 8727,radic: 8730,prop: 8733,infin: 8734,ang: 8736,and: 8743,or: 8744,cap: 8745,cup: 8746,int: 8747,there4: 8756,sim: 8764,cong: 8773,asymp: 8776,ne: 8800,equiv: 8801,le: 8804,ge: 8805,sub: 8834,sup: 8835,nsub: 8836,sube: 8838,supe: 8839,oplus: 8853,otimes: 8855,perp: 8869,sdot: 8901,lceil: 8968,rceil: 8969,lfloor: 8970,rfloor: 8971,lang: 9001,rang: 9002,loz: 9674,spades: 9824,clubs: 9827,hearts: 9829,diams: 9830
        };
        return Uize.package({entityNameToCharCodeLookup: _a,charCodeToEntityNameLookup: Uize.reverseLookup(_a)});
    }});

Uize.module({name: 'Uize.Util.Html.Encode',required: ['Uize.Str.Replace', 'Uize.Util.Html.Entities'],builder: function() {
        'use strict';
        var _a = Uize.Util.Html.Entities.entityNameToCharCodeLookup;
        return Uize.package({encode: Uize.Str.Replace.replacerByLookup({'&': '&amp;','"': '&quot;','\'': '&apos;','<': '&lt;','>': '&gt;','\n': '&#10;','\r': '&#13;'}),decode: function(_b) {
                return ((_b += '') && _b.replace(/&(?:(\w+)|#(\d{1,4}|x[0-9a-fA-F]{1,4}));/g, function(_c, _d, _e) {
                    return String.fromCharCode(_e ? +(_e.charAt(0) == 'x' ? ('0' + _e) : _e) : _a[_d]);
                }));
            },encodeTextNode: Uize.Str.Replace.replacerByLookup({'&': '&amp;','<': '&lt;','>': '&gt;'})});
    }});

Uize.module({name: 'Uize.Util.Oop',builder: function() {
        'use strict';
        var _a, _b = Uize.isFunction, _c, _d = [], _e = Uize.package(), _f = _e.prototype, _g = _e.toString, _h = _e.toString();
        function _i(_j) {
            return (_j != _a && (_b(_j) || (typeof _j == 'object' && !_j.constructor)));
        }
        return _c = Uize.package({getFeatures: function(_k) {
                var _l = _c.resolveToClass(_k), _m = [];
                if (_l) {
                    var _n = function(_o) {
                        var _p = _o == 'state', _q = _p ? _l.get() : _o == 'instance' ? _l.prototype : _l, _r = _o == 'static' ? _c.getClassName(_l) + '.' : '', _s = Uize.capFirstChar(_o), _t, _u;
                        for (var _v in _q)
                            (_u = _v.indexOf('_') < 0) && _m.push(Uize.copyInto(_c.getFeatureInfo(_l, _o, _v), {name: _r + _v,shortName: _v,access: _u ? 'Public' : 'Private',context: _s,type: _p || !_b(_t = _q[_v]) ? 'Property' : typeof _t.moduleName == 'string' ? 'Module' : 'Method'}));
                    };
                    _n('instance');
                    _n('static');
                    _c.isUizeClass(_l) && _n('state');
                    var _w = function(_x, _y) {
                        return _x < _y ? -1 : _x > _y ? 1 : 0;
                    };
                    _m.sort(function(_z, _A) {
                        return (_w(_z.access, _A.access) || _w(_z.context, _A.context) || _w(_z.type, _A.type) || _w(_z.name, _A.name));
                    });
                }
                return _m;
            },
            inheritsFrom: function(_B, _C) {
                if (_C == _a)
                    return _B == _a;
                if (_B == _a)
                    return _C == Object;
                var _D = _i(_B) ? _B : _B.constructor, _E = _i(_C) ? _C : _C.constructor;
                while (_D != _E && _b(_D = _D.superclass))
                    ;
                return _D == _E;
            },isClass: _i,isPackage: function(_j) {
                if (!_i(_j) || _g.call(_j) != _h)
                    return false;
                var _F = _j.prototype;
                for (var _v in _F)
                    if (_F[_v] !== _f[_v] || !(_v in _f))
                        return false;
                return true;
            },isUizeClass: function(_j) {
                return (_i(_j) && _b(_j.subclass) && _b(_j.superclass) && _b(_j.set) && _b(_j.get));
            },isUizeClassInstance: function(_G) {
                return Uize.isObject(_G) && _c.isUizeClass(_G.constructor);
            },getClassName: function(_l) {
                return ((_l != _a && _l.moduleName) || (((_l + '').match(typeof _l == 'object' ? /\[object\s+([^\]]+)\]/ : /^\s*function\s+([^\(]+)\s*\(/) || _d)[1]) || '');
            },getFeatureInfo: function(_l, _o, _H) {
                function _I() {
                    return _l
                }
                function _J() {
                    return _l.prototype
                }
                function _K() {
                    return _l.get()
                }
                var _L = _o == 'instance', _M = !_L && _o == 'state', _N = _L ? _J : _M ? _K : _I, _O = _N()[_H], _P, _Q = _l, _R = _l;
                while ((_l = _l.superclass) && _l.superclass && (_P = _N()) && _H in _P) {
                    if (_Q == _R && _P[_H] == _O)
                        _R = _l
                        ;
                    _Q = _l;
                }
                return {introducedIn: _Q,overriddenIn: _R};
            },getInheritanceChain: function(_l) {
                var _S = [];
                if (_c.isUizeClass(_l)) {
                    var _T = _l;
                    while (_T.moduleName) {
                        _S.unshift(_T);
                        _T = _T.superclass;
                    }
                }
                return _S;
            },resolveToClass: function(_k) {
                return (_k == _a || _b(_k) ? _k || _a : _k.constructor);
            }});
    }});

Uize.module({name: 'Uize.Dom.Classes',required: 'Uize.Dom.Basics',builder: function() {
        'use strict';
        var _a = Uize.Dom.Basics, _b = _a.isNode, _c = _a.getById, _d = _a.doForAll, _e, _f, _g = {}, _h = [''];
        function _i(_j) {
            var _k = _j + '', _l = _g[_k];
            if (!_l && _k) {
                (_j = _k.split(',')).length == 1 && _j.unshift('');
                var _m = '\\b(?:' + _j.join('|').replace(/\|{2,}/g, '|').replace(/^\||\|$/g, '') + ')\\b', _n = {'': -1}, _o = _j.length;
                for (var _p = _o; --_p > -1; )
                    _n[_j[_p]] = _o > 2 ? _p : !!_p;
                _l = _g[_k] = {_j: _j,_q: new RegExp(_m),_r: new RegExp('(\\s*)' + _m + '(\\s*)'),_n: _n};
            }
            return _l;
        }
        function _s(_t, _j) {
            var _l = _i(_j);
            if (_l) {
                _j = _l._j;
                _d(_t, function(_u) {
                    _f(_u, _j, (_e(_u, _j) + 1) % _j.length);
                });
            }
        }
        return Uize.package({getState: _e = function(_u, _j) {
                var _v = -1;
                if (_b(_u = _c(_u))) {
                    var _l = _i(_j);
                    if (_l)
                        _v = _l._n[(_u.className.match(_l._q) || _h)[0]];
                }
                return _v;
            },hasClass: function(_u, _w) {
                return _e(_u, _w) == 1;
            },setState: _f = function(_t, _j, _x) {
                var _l = _i(_j);
                if (!_l)
                    return;
                var _y = (_j = _l._j)[+_x] || '', _z;
                _d(_t, function(_u) {
                    if ((_z = _u.className) != _y) {
                        if (_z) {
                            _u.className = _y ? (_z.replace(_l._q, 
                            function() {
                                return _y + (_y = '')
                            }) + (_y && (' ' + _y))) : (_z.replace(_l._r, function(_A, _B, _C) {
                                return _B && _C;
                            }));
                        } else {
                            _u.className = _y;
                        }
                    }
                });
            },removeState: function(_t, _j) {
                _f(_t, _j, -1);
            },addClass: function(_t, _w) {
                _f(_t, _w, 1);
            },removeClass: function(_t, _w) {
                _f(_t, _w, 0);
            },toggleClass: _s,toggleState: _s});
    }});

Uize.module('Uize.Oop');

Uize.module({name: 'Uize.Oop.mTreeInheritance',builder: function() {
        'use strict';
        var _a, _b = Uize;
        return function(_c) {
            _c.staticMethods({treeInheritedStateProperties: function(_d) {
                    var _c = this;
                    _b.forEach(_d, function(_e, _f) {
                        var _g = _e.name || _f, _h = _g + 'Inherited', _i = _e.value;
                        function _j() {
                            var m = this, _k = m[_f];
                            if (_k == 'inherit' || _k === _a)
                                _k = m.parent ? m.parent[_h] : _i;
                            if (_k === _a)
                                _k = _i;
                            if (_k != m[_h])
                                m.set(_h, _k);
                        }
                        _c.stateProperties(_b.pairUp(_f, {name: _g,onChange: _j,value: 'inherit'}, _h, {onChange: function() {
                                _b.callOn(this.children, _j)
                            },value: _i}));
                    })
                }});
            _c.instanceMethods({getProvider: function(_l) {
                    var m = this, _k;
                    while (((_k = m.get(_l)) === 'inherit' || _k === _a) && (m = m.parent))
                        ;
                    return m;
                },getInherited: function(_l) {
                    var _m = this.getProvider(_l);
                    return _m && _m.get(_l);
                },setInherited: function(_d) {
                    var _m;
                    for (var _n in _d) {
                        if (_m = this.getProvider(_n))
                            _m.set(_n, _d[_n]);
                    }
                },callInherited: function(_l) {
                    var m = this;
                    return (function() {
                        var _m = m.getProvider(_l);
                        if (_m) {
                            var _o = _m.get(_l);
                            if (_b.isFunction(_o))
                                return _o.apply(_m, arguments);
                        }
                    });
                }});
        };
    }});

Uize.module({name: 'Uize.Widget',superclass: 'Uize.Class',required: ['Uize.Dom.Basics', 'Uize.Oop.mTreeInheritance'],builder: function(b_a) {
        'use strict';
        var b_b = null, b_c = true, b_d = false, b_e = 'string', b_f = Uize, b_g = b_f.copyInto, b_h = b_f.isFunction, b_i = 'concatenated', b_j, b_k = b_f.Dom.Basics, b_l = b_k.doForAll, b_m = b_f.callOn, b_n = b_f.substituteInto, b_o = b_f.global(), b_p = b_k.isNode, b_q = b_k.getById;
        function b_r(b_s, b_t) {
            var b_u = b_o.window, b_v, b_w;
            (b_u && b_s && (b_v = b_u[b_w = '$' + b_s]) && typeof b_v == 'object' && (!b_t || b_s != b_t.b_s)) ? (b_u[b_w] = b_j) : (b_v = b_j);
            return b_v;
        }
        function b_x(b_y, b_z, b_A, b_B) {
            return ((!b_B || b_B == b_i) && b_y != b_j ? (b_y + (b_A !== '' ? '_' : '') + b_A) : (b_B == 'same as parent' ? b_y : b_z));
        }
        function b_C(m) {
            var b_D = b_r(m.b_s, m.parent);
            b_D && m.set(b_D);
        }
        function b_E(m) {
            return (b_q(m.b_F) || m.getNode('shell') || m.getNode() || (m.parent && m.parent.getNode(m.b_G)));
        }
        function b_H(m, b_I, b_J, b_K) {
            var b_L = 'show' + b_f.capFirstChar(b_I);
            m.getProvider(b_L) ? m.callInherited(b_L)(b_J) : setTimeout(function() {
                var b_M = b_K();
                (b_J.callback || (b_M ? b_J.yesHandler : b_J.noHandler) || b_f.nop)(b_M);
            }, 0);
        }
        return b_a.subclass({mixins: b_f.Oop.mTreeInheritance,alphastructor: function(b_v) {
                var m = this;
                if (b_v) {
                    var b_D = b_r(b_v.idPrefix, b_v.parent);
                    b_D && b_g(b_v, b_D);
                    delete b_v.widgetClass;
                }
                m.b_N = {};
                m.children = m.b_O = {};
                m.addedChildren = m.b_P = b_f.Class();
            },instanceMethods: b_g(b_f.map({displayNode: 1,getNodeStyle: 1,getNodeValue: 1,injectNodeHtml: 1,setNodeClipRect: 1,setNodeInnerHtml: 1,setNodeOpacity: 1,setNodeProperties: 1,setNodeStyle: 1,setNodeValue: 1,showNode: 1}, function(b_Q, b_R) {
                return Function('arguments.length' + '?(arguments[0]=this.getNode(arguments[0]))' + ':(arguments[arguments.length++]=this.getNode());' + 'return Uize.Dom.Basics.' + b_R.replace('Node', '') + '.apply(0,arguments)');
            }), {showInform: b_j,showConfirm: b_j,confirm: function(b_J) {
                    b_H(this, 'confirm', b_J, function() {
                        return confirm(b_J.message)
                    });
                },inform: function(b_J) {
                    b_H(this, 'inform', b_J, function() {
                        alert(b_J.message);
                        return b_c
                    });
                },ajax: function(b_S, b_T) {
                    this.callInherited('performAjax')(b_S, 
                    b_h(b_T) ? {callback: b_T} : b_T || {});
                },localize: function(b_U, b_V, b_W) {
                    var b_X, b_Y = this;
                    while (!(b_X = b_Y.b_Z ? b_Y.b_Z[b_U] : b_j) && (b_Y = b_Y.parent))
                        ;
                    return (b_h(b_X) ? b_X.call(this, b_V) : b_n(b_X, b_V, b_W || '{KEY}'));
                },getHtml: function(b_0) {
                    var m = this, b_1 = m.b_1;
                    if (b_1) {
                        if (b_1 === b_c) {
                            var b_F = b_E(m);
                            b_1 = m.b_1 = b_f.Template && b_F ? {process: b_f.Template.compile((b_k.find({root: b_F,tagName: 'SCRIPT',type: 'text/jst'})[0] || b_F).innerHTML, {openerToken: '[%',closerToken: '%]'})} : b_j;
                            if (!b_1)
                                return;
                        }
                        m.b_s || m.set({b_s: m.instanceId});
                        var b_2 = b_g({pathToResources: b_f.pathToResources,blankGif: m.Class.getBlankImageUrl()}, b_0 || m.get()), b_3;
                        b_1 = typeof b_1 != b_e && b_h(b_1.process) ? b_1.process.call(m, b_2) : b_h(b_1) ? typeof (b_3 = b_1(b_2)) === 'string' ? b_n(b_3, b_2) : b_3 : b_n(b_1, b_2);
                    }
                    return b_1;
                },buildHtml: function(b_0) {
                    var m = this, b_1 = m.getHtml(b_0);
                    if (b_1 != b_j) {
                        var b_F = b_E(m);
                        b_k.injectHtml(b_F || document.body, b_1, m.b_4 || (b_F ? 'inner replace' : 'inner bottom'));
                        m.b_5 = b_b;
                        m.set({b_6: b_c});
                    }
                },nodeId: function(b_7) {
                    return b_k.joinIdPrefixAndNodeId(this.b_s, b_7 || '');
                },getNode: function(b_8) {
                    if (b_8 == b_b) {
                        if (b_8 === b_b)
                            return b_b;
                        b_8 = '';
                    }
                    var m = this;
                    if (m.b_9 && typeof b_8 == b_e) {
                        var b_ba = m.b_9[b_8];
                        if (b_ba !== b_j)
                            b_8 = b_ba;
                    }
                    if (typeof b_8 == b_e) {
                        return b_q(b_8, m.b_s, m.b_5 || (m.b_5 = {}));
                    } else if (b_p(b_8)) {
                        return b_8;
                    } else {
                        var b_bb = b_b;
                        b_l(b_8, function(b_bc) {
                            (b_bb || (b_bb = [])).push(b_bc)
                        }, m.b_s, m.b_5 || (m.b_5 = {}));
                        return b_bb;
                    }
                },getContainer: function() {
                    return b_E(this);
                },flushNodeCache: function(b_bd) {
                    if (this.b_5)
                        b_bd == b_j ? (this.b_5 = b_b) : delete this.b_5[b_bd];
                },globalizeNode: function(b_be) {
                    var m = this, b_bf = document.body;
                    b_l(m.getNode(b_be), function(b_bc) {
                        if (b_bc.parentNode != b_bf) {
                            (m.b_bg || (m.b_bg = [])).push(b_bc);
                            b_k.setStyle(b_bc, {position: 'absolute',left: -10000,top: -10000});
                            b_bf.appendChild(b_bc);
                        }
                    });
                },removeNode: function(b_be) {
                    b_k.remove(this.getNode(b_be));
                    this.flushNodeCache(b_be);
                },wireNode: function(b_be, b_bh, b_bi) {
                    var m = this;
                    arguments.length == 3 ? b_k.wire(m.getNode(b_be), b_bh, b_bi, m.instanceId) 
                    : b_k.wire(m.getNode(b_be), b_bh, m.instanceId);
                },unwireNode: function(b_be, b_bh, b_bi) {
                    if (b_be !== b_j)
                        b_be = this.getNode(b_be);
                    arguments.length == 2 && typeof b_bh == 'object' && b_bh && !b_bh.virtualDomEvent ? b_k.unwire(b_be, b_bh, this.instanceId) : b_k.unwire(b_be, b_bh, b_bi, this.instanceId);
                },unwireNodeEventsByMatch: function(b_be, b_bj) {
                    this.unwireNode(b_be, (b_bj || (b_bj = {})).eventName, b_bj.handler);
                },addChild: function(b_A, b_bk, b_v) {
                    b_v || (b_v = {});
                    var m = this, b_s = m.b_s, b_bl = b_f.isInstance(b_bk) ? b_bk : b_b, b_z = 'idPrefix' in b_v ? b_v.idPrefix : b_v.node, b_bm = b_v.idPrefixConstruction;
                    b_v.parent = m;
                    if (b_A == b_j)
                        b_A = b_v.name;
                    if (b_bl) {
                        if (b_A == b_j)
                            b_A = b_bl.b_G;
                        if (b_z == b_j)
                            b_z = b_bl.b_s;
                        if (!b_bm)
                            b_bm = b_bl.b_B;
                    }
                    b_v.idPrefix = b_x(b_s, b_z, b_v.name = b_A, b_v.idPrefixConstruction = b_bm || (b_z == b_j ? b_i : 'explicit'));
                    var b_N = m.b_N, b_bn = b_N[b_A];
                    if (b_bn) {
                        b_g(b_v, b_bn);
                        delete b_N[b_A];
                    }
                    b_bl && b_bl.set(b_v);
                    b_bl = m.b_O[b_A] = b_bl || new b_bk(b_v);
                    m.b_P.met(b_A);
                    return b_bl;
                },addChildren: function(b_O, b_bo) {
                    for (var b_A in b_O) {
                        var b_bp = b_f.copy(b_O[b_A], b_bo), 
                        b_bq = b_bp.widgetClass;
                        delete b_bp.widgetClass;
                        this.addChild(b_A, b_bq, b_bp);
                    }
                },removeChild: function(b_br) {
                    var m = this, b_O = m.b_O, b_A = typeof b_br == b_e || b_f.isNumber(b_br) ? b_br : b_br.b_G, b_bl = b_O[b_A];
                    if (b_bl) {
                        b_bl.unwireUi();
                        delete b_bl.parent;
                        delete b_O[b_A];
                        m.b_P.unmet(b_A);
                    }
                },childId: function(b_A) {
                    return b_x(this.b_s, this.b_s, b_A, this.b_B);
                },kill: function() {
                    b_m(this.b_O, 'kill');
                    b_a.doMy(this, 'kill');
                },insertOrWireUi: function() {
                    this.b_6 ? this.wireUi() : this.insertUi();
                },insertUi: function() {
                    this.buildHtml();
                    this.wireUi();
                },removeUi: function() {
                    var m = this;
                    m.unwireUi();
                    m.removeNode();
                    b_k.remove(m.b_bg);
                    m.b_bg = b_j;
                    b_m(m.b_O, 'removeUi');
                    m.set({b_6: b_d});
                },updateUi: function() {
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        b_C(m);
                        m.set({wired: b_c});
                        b_m(m.b_O, 'insertOrWireUi');
                        m.updateUi();
                    }
                },unwireUi: function() {
                    var m = this;
                    if (m.isWired) {
                        m.b_5 = b_b;
                        m.unwireNode();
                        b_m(m.b_O, 'unwireUi');
                        m.set({wired: b_d});
                    }
                }}),stateProperties: {b_6: {name: 'built',value: b_c},b_O: {name: 'children',conformer: function(b_bs) {
                        if (b_bs) {
                            var b_O = this.b_O, 
                            b_N = this.b_N;
                            for (var b_A in b_bs) {
                                var b_bp = b_bs[b_A];
                                b_O[b_A] ? b_O[b_A].set(b_bp) : b_N[b_A] = b_bp;
                            }
                        }
                        return this.b_O;
                    }},b_F: 'container',b_1: 'html',b_s: {name: 'idPrefix|node',conformer: function(b_s) {
                        return b_p(b_s) ? (b_s.id || (b_s.id = b_f.getGuid())) : b_s;
                    },onChange: function() {
                        var m = this, b_s = m.b_s;
                        m.b_5 = b_b;
                        if (b_s != b_j) {
                            b_C(m);
                            var b_O = m.b_O, b_bl;
                            for (var b_A in b_O)
                                (b_bl = b_O[b_A]).set({b_s: b_x(b_s, b_bl.b_s, b_A, b_bl.b_B)});
                            if (m.isWired) {
                                m.set({wired: b_d});
                                m.wireUi();
                            }
                        }
                    }},b_B: 'idPrefixConstruction',b_4: 'insertionMode',b_Z: 'localized',b_G: 'name',b_9: 'nodeMap',isWired: {name: 'wired',value: b_d}},treeInheritedStateProperties: {b_bt: {name: 'busy',value: b_d},b_bu: {name: 'enabled',value: b_c}},staticMethods: {getBlankImageUrl: function() {
                    return b_f.pathToResources + 'Uize/blank.gif';
                },spawn: function(b_v, b_t) {
                    var m = this, b_bv = [], b_bw, b_bx = b_t && b_t.b_s ? b_t.b_s + '_' : '', b_by = b_bx.length;
                    b_l(b_k.find(b_v.idPrefix), function(b_bc) {
                        b_v.idPrefix = b_bc;
                        b_t ? (b_bw = b_t.addChild(b_bc.id.slice(0, b_by) == b_bx ? b_bc.id.slice(b_by) 
                        : 'generatedChildName' + b_f.getGuid(), m, b_v)) : (b_bw = new m(b_v)).insertOrWireUi();
                        b_bv.push(b_bw);
                    });
                    return b_bv;
                }}});
    }});

Uize.module({name: 'Uize.Dom.Util',required: 'Uize.Dom.Basics',builder: function() {
        'use strict';
        var _a = Uize.Dom.Basics, _b, _c, _d = _a.isIe && _a.ieMajorVersion < 9;
        return Uize.package({getEffectiveBgColor: function(_e) {
                var _f = '';
                _e = _a.getById(_e);
                while ((!_f || _f == 'transparent' || _f == 'none') && _e) {
                    _f = _a.getStyle(_e, 'backgroundColor');
                    _e = _e.parentNode;
                }
                return _f;
            },getOpacityProperties: _b = function(_g) {
                return (_a.isIe ? {filter: 'alpha(opacity=' + Math.round(_g * 100) + ')'} : {opacity: _g + ''});
            },getOpacityStr: function(_g) {
                return _c(_b(_g));
            },showClickable: function(_h, _i) {
                _a.setStyle(_h, {cursor: _i || _i === undefined ? (_d ? 'hand' : 'pointer') : 'default'});
            },showInLayoutFlow: function(_h, _j) {
                _j = _j !== _k;
                _l(_h, {position: _j ? 'static' : 'absolute',visibility: _j ? 'inherit' : _m});
            },stylePropertiesAsStr: _c = function(_n) {
                var _o = [];
                for (var _p in _n)
                    _o.push(_p, ':', _n[_p], '; ');
                return _o.join('');
            }});
    }});

Uize.module({name: 'Uize.Widget.Button',required: ['Uize.Dom.Util', 'Uize.Dom.Pos', 'Uize.Dom.Basics'],builder: function(c_a) {
        'use strict';
        var c_b, c_c = true, c_d = false, c_e, c_f, c_g = {}, c_h = {grayed: 16,'': 8,over: 4,active: 2,playing: 1}, c_i = '(Grayed|Over|Active|Playing)', c_j = new RegExp(c_i), c_k = new RegExp('(?:(?:(\\S+)\\s+\\1' + c_i + '))', 'g'), c_l = new RegExp('\\S*' + c_i + '\\b', 'g'), c_m = /\b(disabled|over|active|playing)\b/, c_n = {}, c_o = {mouseover: ['over', 'Over'],mouseout: ['', 'Out'],mousedown: ['down', 'Down'],mouseup: ['over', 'Up'],click: ['over', 'Click'],dblclick: ['over', 'Double Click']};
        function c_p(m, c_q) {
            return !!(m.get('enabledInherited') && !m.get('busyInherited') && (c_q || !m.c_r || m.c_s || m.c_t));
        }
        function c_u() {
            var m = this;
            m.c_v != c_b && m.isWired && m.setNodeInnerHtml('text', m.c_v);
        }
        function c_w() {
            var m = this;
            if (m.isWired) {
                var c_x = m.c_x, c_y = m.get('enabledInherited'), c_z = m.get('busyInherited'), c_A = (!c_y ? 16 : 0) | (!m.c_B || c_z ? 8 : 0) | (m == c_f ? 4 : 0) | (m.c_B == 'down' || m.c_r ? 2 : 0) | (m.c_C ? 1 : 0), c_D = m.c_E[c_A];
                if (c_D == c_b) {
                    for (var c_F = -1, c_G = m.c_G, 
                    c_H = c_G.length; ++c_F < c_H; ) {
                        var c_I = c_G[c_F];
                        if (c_A & c_h[c_I]) {
                            c_D = c_I;
                            break;
                        }
                    }
                    m.c_E[c_A] = c_D;
                }
                if (m.c_J == 'classes') {
                    var c_K = c_x.className, c_L = '';
                    if (m.c_M == 'disambiguated') {
                        var c_N = m.c_N;
                        if (c_N == c_b) {
                            var c_O = c_K.match(c_k);
                            if (c_O) {
                                c_N = c_O[c_O.length - 1].split(' ', 2)[0];
                            } else {
                                c_O = c_K.replace(c_l, '').match(/(\S+)\s*$/);
                                if (c_O)
                                    c_N = c_O[c_O.length - 1];
                            }
                            if (m.c_N = c_N = c_N || '')
                                m.c_P = c_n[c_N] || (c_n[c_N] = new RegExp(c_N + '(\\s+' + c_N + c_i + ')?'));
                        }
                        var c_Q = c_D ? ' ' + c_N + Uize.capFirstChar(c_D) : '';
                        c_L = c_N ? c_K.replace(m.c_P, c_N + c_Q) : c_K.replace(c_j, '') + c_Q;
                    } else {
                        var c_R = c_D == 'grayed' ? 'disabled' : c_D;
                        c_L = c_m.test(c_K) ? c_K.replace(c_m, c_R) : c_K + (c_R ? ' ' : '') + c_R;
                    }
                    if (c_L != c_K)
                        c_x.className = c_L;
                } else if (m.c_J == 'frames') {
                    m.c_S.style.top = '-' + (m.c_T.c_U[c_D] * m.c_V.height) + 'px';
                }
                if (m.c_W && Uize.Tooltip) {
                    var c_X = m.c_B == 'over' && c_y && !m.c_r;
                    c_X != m.c_Y && Uize.Tooltip.showTooltip(m.c_W, m.c_Y = c_X);
                }
                m.get('busyInherited') ? m.setNodeStyle(c_x, {cursor: 'wait'}) : Uize.Dom.Util.showClickable(c_x, c_p(m));
                m.setNodeProperties(c_x, {disabled: !c_y});
            }
        }
        function c_Z(c_0) {
            var m = this;
            if (m.isWired) {
                var c_1 = c_0.type, c_2 = c_1 == 'click';
                if (!m.c_3) {
                    m.c_3 = c_c;
                    var c_4 = function(c_0) {
                        c_Z.call(m, c_0)
                    };
                    m.wireNode(m.c_x, {mouseout: c_4,mousedown: c_4,mouseup: c_4,dblclick: c_4});
                }
                if (c_2)
                    c_0.cancelBubble = c_c;
                if (c_p(m, c_1 == 'dblclick')) {
                    var c_5 = c_o[c_1];
                    m.set({c_B: c_5[0]});
                    m.fire({name: c_5[1],domEvent: c_0});
                    if (c_2) {
                        m.c_6 && m.c_6(c_0);
                        (m.c_r ? m.c_s : m.c_7) && m.toggle('selected');
                    }
                }
            }
        }
        return c_e = c_a.subclass({omegastructor: function() {
                var m = this;
                function c_8() {
                    if (m.isWired) {
                        c_p(m) || m.set({c_B: ''});
                        c_w.call(m);
                    }
                }
                m.wire({'Changed.busyInherited': c_8,'Changed.enabledInherited': c_8});
            },instanceProperties: {c_Y: c_d},instanceMethods: {setStateAndFireEvent: c_Z,updateUi: function() {
                    if (this.isWired) {
                        c_w.call(this);
                        c_u.call(this);
                    }
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        m.c_S = c_b;
                        var c_x = m.c_x = m.getNode();
                        if (c_x) {
                            var c_9 = c_x.childNodes;
                            if (c_9.length && (c_9.length > 1 || c_9[0].nodeType != 3) && (m.c_S = m.getNode('frames'))) {
                                m.c_J = 'frames';
                                m.c_V = Uize.Dom.Pos.getDimensions(m.c_S.parentNode);
                            }
                            if (m.c_ba && c_x.tagName == 'A' && !c_x.onclick)
                                c_x.onclick = Uize.returnTrue;
                            var c_4 = function(c_0) {
                                c_Z.call(m, c_0)
                            };
                            m.wireNode(c_x, {mouseover: c_4,click: c_4});
                            m.c_v == c_b && m.set({c_v: m.getNodeValue('text')});
                            c_a.doMy(m, 'wireUi');
                        }
                    }
                }},staticMethods: {addChildButton: function(c_bb, c_bc) {
                    var m = this, c_bd;
                    function c_be() {
                        c_bd.wire('Click', function(c_bf) {
                            if (c_bc)
                                typeof c_bc == 'string' ? m.fire(c_bc) : c_bc(c_bf);
                            m.fire(c_bf);
                        });
                    }
                    if (m == c_e) {
                        c_bd = new c_e({idPrefix: c_bb,name: c_bb,c_ba: c_c});
                        c_be();
                        (window[c_bd.instanceId] = c_bd).wireUi();
                    } else {
                        c_bd = m.children[c_bb];
                        if (!c_bd) {
                            c_bd = m.addChild(c_bb, c_e);
                            c_be();
                        }
                    }
                    return c_bd;
                }},stateProperties: {c_6: 'action',c_t: {name: 'allowClickWhenSelected',onChange: c_w},c_7: 'clickToSelect',c_s: {name: 'clickToDeselect',onChange: c_w},c_M: {name: 'classNamingForStates',value: 'disambiguated'},c_T: {name: 'frameOrder',onChange: function() {
                        var c_T = this.c_T;
                        c_T.c_U || (c_T.c_U = Uize.reverseLookup(c_T));
                    },value: ['grayed', '', 'over', 'active', 'playing']},c_ba: {name: 'followLink',value: c_d},c_J: {name: 'mode',value: 'classes'
                },c_C: {name: 'playing',onChange: c_w,value: c_d},c_r: {name: 'selected',onChange: c_w,value: c_d},c_B: {name: 'state',onChange: function() {
                        var m = this;
                        if (!m.c_B) {
                            if (c_f == m)
                                c_f = c_b;
                        } else if (m.c_B == 'over') {
                            c_f && c_f != m && c_f.set({c_B: ''});
                            c_f = m;
                        }
                        m.isWired && c_w.call(m);
                    },value: ''},c_G: {name: 'statePrecedence',onChange: function() {
                        var m = this, c_bg = m.c_G.c_bh || (m.c_G.c_bh = m.c_G.join(','));
                        m.c_E = c_g[c_bg] || (c_g[c_bg] = {});
                        m.isWired && c_w.call(m);
                    },value: ['playing', 'active', 'grayed', 'over', '']},c_v: {name: 'text',onChange: c_u},c_W: 'tooltip'}});
    }});

Uize.module({name: 'Uize.Widget.Options',required: 'Uize.Widget.Button',builder: function(c_a) {
        'use strict';
        var c_b = false, c_c = null, c_d;
        function c_e(m) {
            if (m.isWired && m.c_f != m.c_g) {
                var c_h = function(c_i, c_j) {
                    c_i >= 0 && Uize.callOn(m.children['option' + c_i], 'set', [{selected: c_j}]);
                };
                c_h(m.c_g, c_b);
                c_h(m.c_g = m.c_f, true);
            }
        }
        function c_k(m) {
            var c_f = m.getValueNoFromValue(m.c_l);
            m.set({c_f: c_f,c_m: c_f});
            c_e(m);
        }
        function c_n(c_l) {
            var m = this, c_o = this.c_o;
            return (!m.c_p || !c_o || !c_o.length || m.getValueNoFromValue(c_l) > -1 ? c_l : (typeof c_o[0] == 'object' ? c_o[0].name : c_o[0]));
        }
        return c_a.subclass({omegastructor: function() {
                this.c_g = -1;
                this.c_q = 0;
            },instanceMethods: {forAll: function(c_r) {
                    for (var c_f = -1, c_s = this.c_o.length, c_t = this.children; ++c_f < c_s; )
                        if (c_r(c_t['option' + c_f], c_f) === c_b)
                            break;
                },getValueNoFromValue: function(c_l) {
                    var c_o = this.c_o;
                    return (c_o.length ? (typeof c_o[0] == 'object' ? Uize.findRecordNo(c_o, {name: c_l}) : Uize.indexIn(c_o, c_l, c_b, c_b)) : -1);
                },getValueObject: function(c_l) {
                    var m = this, 
                    c_f = m.getValueNoFromValue(c_l === c_d ? m.c_l : c_l);
                    return c_f > -1 ? m.c_o[c_f] : c_c;
                },getOptionProperties: function() {
                    return c_c;
                },updateUi: function() {
                    var m = this;
                    if (m.isWired) {
                        c_e(m);
                        c_a.doMy(m, 'updateUi');
                    }
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        m.c_f = -1;
                        var c_u = m.c_u || Uize.Widget.Button, c_v = m.c_v, c_o = m.c_o, c_s = m.c_q = c_o.length, c_w, c_x, c_y = function() {
                            c_w = c_c;
                            m.set({c_z: m.c_l,c_m: m.c_f});
                        }, c_A = function() {
                            c_w && clearTimeout(c_w);
                            c_x && clearTimeout(c_x);
                        };
                        Uize.forEach(c_o, function c_B(c_C, c_f) {
                            var c_l = ((typeof c_C == 'object' && c_C) || (c_C = {name: c_C})).name, c_D = function() {
                                m.set(m.c_E ? {c_l: c_l} : {c_z: c_l,c_m: c_f});
                            };
                            m.addChild('option' + c_f, c_u, Uize.copy(c_v, m.getOptionProperties(c_f, c_C))).wire('*', function(c_F) {
                                if (c_F.name == 'Click') {
                                    m.fire({name: 'Before Value Change',value: c_l,valueNo: c_f}).cancel || m.set({c_l: c_l});
                                    m.fire(c_F);
                                } else if (c_F.name == 'Over') {
                                    c_A();
                                    m.c_G ? (c_x = setTimeout(c_D, m.c_G)) : c_D();
                                } else if (c_F.name == 'Out') {
                                    c_A();
                                    c_w = setTimeout(c_y, 50);
                                }
                                m.fire({name: 'Option Event',value: c_l,childEvent: c_F});
                            });
                        });
                        if (c_s) {
                            var c_H = m.getNode();
                            if (c_H) {
                                for (var c_I = -1, c_J, c_K, c_L, c_M = c_H.childNodes || [], c_N = c_M.length, c_t = m.children, c_O = m.get('idPrefix'), c_P = c_O.length; ++c_I < c_N; ) {
                                    if ((c_K = (c_J = c_M[c_I]).id) && !c_K.indexOf(c_O) && (c_L = c_t[c_K.slice(c_P + 1)]))
                                        c_L.set({nodeMap: {'': c_J,shell: c_c,bed: c_c}});
                                }
                            }
                        }
                        c_a.doMy(m, 'wireUi');
                        c_k(m);
                    }
                }},stateProperties: {c_p: {name: 'ensureValueInValues',onChange: function() {
                        var m = this;
                        m.set({c_l: c_n.call(m, m.c_l)});
                    },value: c_b},c_u: 'optionWidgetClass',c_v: 'optionWidgetProperties',c_E: 'setValueOnMouseover',c_G: {name: 'tentativeRestTime',value: 0},c_z: {name: 'tentativeValue',value: c_c},c_m: {name: 'tentativeValueNo',value: -1},c_l: {name: 'value',conformer: c_n,onChange: function() {
                        var m = this;
                        c_k(m);
                        m.set({c_m: m.c_f,c_z: m.c_l});
                    },value: c_c},c_f: {name: 'valueNo',value: -1},c_o: {name: 'values',onChange: function() {
                        var m = this;
                        if (m.isWired) {
                            for (var c_f = -1, c_q = m.c_q || 0; ++c_f < c_q; )
                                m.removeChild('option' + c_f);
                            m.unwireUi();
                            m.get('html') != c_d && m.set({built: c_b});
                            m.set({c_l: c_n.call(m, m.c_l)});
                            m.insertOrWireUi();
                        }
                    },
                    value: []}}});
    }});

Uize.module({name: 'Uize.Widget.Options.Tabbed',required: 'Uize.Dom.Classes',builder: function(d_a) {
        'use strict';
        var d_b = Uize.Dom.Classes;
        function d_c(m, d_d) {
            return Uize.isNumber(d_d) ? d_d : m.getValueNoFromValue(d_d);
        }
        function d_e(m, d_d) {
            return m.getNode('option' + d_c(m, d_d) + 'TabBody');
        }
        function d_f(m, d_g) {
            return m.tabExists(d_g) && m.getOptionButton(d_g).get('enabled');
        }
        function d_h(m, d_i, d_j) {
            if (d_i > -1) {
                var d_k = d_i == d_j, d_l = m.d_l, d_m = m.d_m, d_n = d_e(m, d_i);
                d_b.addClass(d_n, d_k ? d_l : d_m);
                d_b.removeClass(d_n, d_k ? d_m : d_l);
            }
        }
        function d_o(m) {
            if (m.isWired) {
                var d_j = m.get('valueNo');
                if (d_f(m, d_j)) {
                    m.updateUiTabState(m.d_p, d_j);
                    m.d_p = d_j;
                } else if (m.d_q) {
                    for (var d_i = -1, d_r = m.get('values'), d_s = d_r.length; ++d_i < d_s; ) {
                        if (d_f(m, d_i)) {
                            m.set({value: d_r[d_i]});
                            break;
                        }
                    }
                }
            }
        }
        return d_a.subclass({omegastructor: function() {
                var m = this;
                m.wire('Changed.value', function() {
                    d_o(m)
                });
            },instanceMethods: {enableTab: function(d_g, d_t) {
                    this.getOptionButton(d_g).set({enabled: d_t ? 'inherit' : false});
                    d_o(this);
                },getOptionButton: function(d_d) {
                    return this.children['option' + d_c(this, d_d)];
                },getTabBodyNode: function(d_d) {
                    return d_e(this, d_d)
                },tabExists: function(d_d) {
                    var d_u = this.getOptionButton(d_d);
                    return (d_u && (d_u.getNode() || d_e(this, d_d)) ? true : false);
                },updateUiTabState: function(d_p, d_j) {
                    d_h(this, d_p, d_j);
                    d_h(this, d_j, d_j);
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        d_a.doMy(m, 'wireUi');
                        var d_i = m.d_p = m.get('valueNo');
                        Uize.forEach(m.get('values'), function(d_g, d_v) {
                            d_h(m, d_v, d_i)
                        });
                    }
                }},stateProperties: {d_l: 'bodyClassActive',d_m: 'bodyClassInactive',d_q: {name: 'mustHaveSelectedTab',value: true}}});
    }});

Uize.module({name: 'Uize.Widget.Page',required: 'Uize.Dom.Basics',builder: function(c_a) {
        'use strict';
        var c_b = true, c_c = false, c_d = null, c_e, c_f = Uize, c_g = c_f.Dom.Basics, c_h = {yes: 1,on: 1,1: 1,'true': 1};
        function c_i(c_j) {
            return (c_f.isFunction(c_j) && c_j) || (c_j && c_j.callback) || Object;
        }
        function c_k(m, c_l, c_m, c_n) {
            m.useDialog({component: m.c_o.component,widgetClassName: m.c_o.widgetClassName || 'Uize.Widget.Dialog.Confirm',widgetProperties: {name: 'confirmDialog',title: c_n.title || '',message: (c_n.message + '').replace(/\n/g, '<br/>'),mode: c_l,state: c_n.state || c_m,okText: c_n.okText || c_d,cancelText: c_n.cancelText || c_d,mooringNode: c_n.mooringNode || c_d,offsetX: c_n.offsetX || c_d,offsetY: c_n.offsetY || c_d},submitHandler: function(c_p) {
                    var c_q = c_n.callback || (c_p ? c_n.yesHandler : c_n.noHandler);
                    c_q && c_q(c_p);
                }});
        }
        function c_r(m, c_s) {
            c_s = c_s || Object;
            var c_t = m.get('idPrefix'), c_u = window;
            var c_v = {}, c_w = c_c, c_x = '$' + c_t + '_', c_y = c_x.length, c_z;
            for (var c_A in c_u) {
                if (c_A.charAt(0) == '$' && c_A.substr(0, c_y) == c_x && typeof (c_z = c_u[c_A]) == 'object' && c_z && 
                c_z.widgetClass) {
                    c_w = c_b;
                    for (var c_B = -1, c_C = c_v, c_D = c_A.substr(c_y).split('_'), c_E, c_F = c_D.length; ++c_B < c_F; ) {
                        var c_G = c_C[c_E = c_D[c_B]];
                        if (c_B < c_F - 1) {
                            c_C = (c_G || (c_G = c_C[c_E] = {})).children || (c_G.children = {});
                        } else {
                            c_G ? c_f.mergeInto(c_G, c_z) : (c_C[c_E] = c_z);
                            c_u[c_A] = c_e;
                        }
                    }
                }
            }
            if (c_w) {
                var c_H = function(c_I, c_J) {
                    function c_K(c_L, c_M, c_N) {
                        var c_O = c_N.children, c_P = c_I(c_L, c_M, c_N);
                        c_O && c_Q(c_P, c_O);
                        c_J && c_J(c_P);
                    }
                    function c_Q(c_L, c_R) {
                        for (var c_M in c_R)
                            c_K(c_L, c_M, c_R[c_M]);
                    }
                    c_Q(m, c_v);
                };
                var c_S = {}, c_T = [];
                c_H(function(c_L, c_M, c_N) {
                    var c_U = c_N.widgetClass;
                    if (c_U && !c_S[c_U]) {
                        c_S[c_U] = 1;
                        c_T.push(c_U);
                    }
                });
                c_f.require(c_T, function() {
                    m.set({children: c_v});
                    c_H(function(c_L, c_M, c_N) {
                        var c_P = c_L.children[c_M];
                        if (!c_P) {
                            var c_U = c_f.getModuleByName(c_N.widgetClass) || c_f.Widget;
                            c_P = c_M.charCodeAt(0) == 36 && c_M.charCodeAt(1) == 36 ? c_U.spawn(c_N, c_L) : c_L.addChild(c_M, c_U);
                        }
                        return c_P;
                    }, m.isWired && function(c_P) {
                        c_f.callOn(c_P, 'insertOrWireUi')
                    });
                    c_s();
                });
            } else {
                c_s();
            }
        }
        return c_a.subclass({
            omegastructor: function() {
                this.wireDeferredLinks && this.wireDeferredLinks()
            },instanceMethods: {loadHtmlIntoNode: function(c_V, c_W, c_X) {
                    var m = this, c_Y = c_V.rootNodeId, c_s = c_i(c_X);
                    if (typeof c_X !== 'object') {
                        c_X = {};
                    }
                    c_X.callback = function(c_Z) {
                        function c_0() {
                            var c_1 = document.body, c_2 = c_V.node != undefined ? m.getNode(c_V.node) : (c_Y ? c_g.getById(c_Y + '-shell') : c_d) || c_1;
                            c_g.injectHtml(c_2, c_Z, c_V.injectMode || (c_2 == c_1 ? 'inner bottom' : 'inner replace'));
                            setTimeout(function() {
                                c_r(m, c_s)
                            }, 0);
                        }
                        c_X.beforeInject ? c_X.beforeInject(c_0, c_Z) : c_0();
                    };
                    c_V.alwaysReplace === c_c && c_Y && c_g.getById(c_Y) ? c_s() : m.loadHtml(c_W, c_X);
                },performAjax: function() {
                },flushAjaxCache: function() {
                },useDialog: function(c_n) {
                    var m = this, c_3 = c_f.copy(m.c_4, c_n.widgetProperties), c_5 = c_3.parent || m, c_6 = c_3.name, c_7 = c_5.children[c_6], c_8 = c_n.component, c_9 = m.c_9 = m.c_9 || {}, c_ba;
                    if (c_8) {
                        var c_Y = c_3.idPrefix || (c_5.get('idPrefix') + '_' + c_6);
                        c_ba = {name: c_8.name,node: c_8.rootNode,rootNodeId: c_Y,params: c_f.copyInto({idPrefix: c_Y}, c_8.params)};
                    }
                    function c_bb() {
                        setTimeout(
                        function() {
                            function c_bc(c_bd, c_be) {
                                var c_q = c_n[c_bd];
                                c_q && c_q.apply(0, c_be);
                            }
                            function c_bf(c_bg) {
                                var c_be = [c_bg];
                                c_bc(c_bg.name.toLowerCase() + 'Handler', c_be);
                                c_bc('dismissHandler', c_be);
                            }
                            function c_bh(c_bg) {
                                var c_bi = c_bg.name;
                                c_bc(c_bi, [c_bg]);
                                m.fire({name: 'Dialog ' + c_bi,dialogWidget: c_bg.source});
                            }
                            c_7.set({shown: c_c});
                            c_7.unwire(c_7.eventHandlersForUseDialog || {});
                            c_7.eventHandlersForUseDialog = c_f.copyInto({'Submission Complete': function(c_bg) {
                                    c_bc('submitHandler', [c_bg.result, c_bg])
                                },Close: c_bf,Cancel: c_bf,'Before Show': c_bh,'After Show': c_bh,'Before Hide': c_bh,'After Hide': c_bh}, c_n.widgetEventHandlers);
                            c_7.wire(c_7.eventHandlersForUseDialog);
                            c_7.set(c_3);
                            c_7.set({shown: c_b});
                        }, 0);
                    }
                    function c_bj() {
                        function c_bk() {
                            var c_bl = c_n.widgetClassName;
                            c_f.require(c_bl, function(c_bm) {
                                (c_7 = c_5.children[c_6]) ? c_7.set(c_3) : (c_7 = c_5.addChild(c_6, c_bm, c_3));
                                c_7.Page_componentProfile = c_ba;
                                c_7.insertOrWireUi();
                                c_bb(c_bn ? 'refetched' : 'initial');
                                c_9[c_6] = c_c;
                            });
                        }
                        function c_bo(c_bp) {
                            var c_bq = c_n && c_n.widgetEventHandlers;
                            c_9[c_6] = c_c;
                            if (c_bq && c_bq.Error)
                                c_bq.Error(c_bp);
                            else if (c_bq && c_bq.Cancel)
                                c_bq.Cancel(c_bp);
                        }
                        if (!c_9[c_6]) {
                            c_9[c_6] = c_b;
                            var c_bn = c_ba && !!c_7;
                            if (c_bn) {
                                c_7.removeUi();
                                c_5.removeChild(c_6);
                            }
                            c_ba ? m.loadHtmlIntoNode({node: c_ba.node,rootNodeId: c_ba.rootNodeId,injectMode: 'inner bottom',alwaysReplace: c_c}, c_f.copyInto({cp: c_ba.name}, c_ba.params), {cache: 'memory',callback: c_bk,errorCallback: c_bo}) : c_bk();
                        }
                    }
                    if (c_7) {
                        if (c_7.Page_componentProfile == c_ba)
                            c_bb('subsequent');
                        else {
                            c_f.require('Uize.Data.Compare', function(c_br) {
                                c_br.identical(c_7.Page_componentProfile, c_ba) ? c_bb('subsequent') : c_bj();
                            });
                        }
                    } else {
                        c_bj()
                    }
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        c_r(m);
                        c_a.doMy(m, 'wireUi');
                    }
                },loadHtml: function(c_W, c_j) {
                    c_i(c_j)('');
                },showConfirm: function(c_n) {
                    c_k(this, 'confirm', 'confirm', c_n);
                },showInform: function(c_n) {
                    c_k(this, 'alert', 'info', c_n);
                }},dualContextMethods: {launchPopup: function(c_n) {
                    if (!c_n)
                        c_n = {};
                    if (c_n.width == c_e)
                        c_n.width = 850;
                    if (c_n.height == c_e)
                        c_n.height = 600;
                    var c_bs = window.screen;
                    if (c_n.left == c_e)
                        c_n.left = Math.max((c_bs.width - c_n.width - 10) >> 1, 0);
                    if (c_n.top == c_e)
                        c_n.top = Math.max((c_bs.height - c_n.height - 40) >> 1, 0);
                    function c_bt(c_bu) {
                        return c_bu + '=' + c_n[c_bu];
                    }
                    function c_bv(c_bu, c_bw) {
                        return (c_bu + '=' + (c_h[c_n[c_bu] == c_e ? c_bw : c_n[c_bu] + ''] ? 'yes' : 'no'));
                    }
                    var c_bx = window.open(c_n.url || '', c_n.name == c_e ? 'popupWindow' : c_n.name, [c_bt('width'), c_bt('height'), c_bt('top'), c_bt('left'), c_bv('toolbar', 0), c_bv('location', 0), c_bv('directories', 0), c_bv('status', 0), c_bv('menubar', 0), c_bv('scrollbars', 1), c_bv('resizable', 1)].join(','));
                    c_bx && c_bx.focus();
                    return c_bx;
                }},stateProperties: {c_o: {name: 'confirmDialog',value: {}},c_4: 'dialogProperties'},set: {idPrefix: 'page'}});
    }});

Uize.module({name: 'Uize.Dom.Text',required: 'Uize.Dom.Basics',builder: function() {
        'use strict';
        var _a = Uize, _b = _a.Dom.Basics.getById;
        return _a.package({getText: function(_c) {
                var _d = '';
                if (_c = _b(_c)) {
                    var _e = function(_c) {
                        if (typeof _c.innerText == 'string') {
                            _d += _c.innerText.replace(/\r|\n|\r\n/g, '');
                        } else if (typeof _c.textContent == 'string') {
                            _d += _c.textContent;
                        } else {
                            if (_c.nodeType == 3)
                                _d += _c.data;
                            _c.childNodes && _a.forEach(_c.childNodes, _e);
                        }
                    };
                    _e(_c);
                }
                return _d;
            }});
    }});

Uize.module({name: 'Uize.Widget.TableSort',required: ['Uize.Dom.Basics', 'Uize.Dom.Text'],builder: function(c_a) {
        'use strict';
        var c_b = null, c_c = true, c_d = 'updateUi', c_e = Uize.Dom.Basics.getById, c_f = Uize.Dom.Text.getText;
        function c_g(c_h, c_i) {
            var c_j = [], c_k = c_h.childNodes, c_l = c_k.length;
            for (var c_m = -1; ++c_m < c_l; ) {
                var c_n = c_k[c_m];
                c_n.tagName == c_i && c_j.push(c_n);
            }
            return c_j;
        }
        function c_o(c_h) {
            return c_e(c_h).getElementsByTagName('tbody')[0];
        }
        function c_p(c_q) {
            var c_r = c_g(c_q, 'TD');
            if (!c_r.length)
                c_r = c_g(c_q, 'TH');
            return c_r;
        }
        function c_s(m, c_t) {
            return (c_t == m.c_u ? !m.c_v : ((m.c_w && m.c_w[c_t]) || m.c_x) == 'ascending');
        }
        function c_y(m, c_t) {
            if (m.isWired) {
                var c_z = m.c_A[c_t];
                c_z.className = (c_t == m.c_u ? m.c_B : (c_t == m.c_C ? m.c_D : m.c_E[c_t])) || '';
                c_z.title = c_s(m, c_t) ? m.c_F : m.c_G;
            }
        }
        function c_H(m, c_q) {
            if (m.isWired && c_q)
                c_q.className = (c_q == m.c_I ? m.c_J : c_q.Uize_Widget_TableSort_a) || '';
        }
        function c_K(m, c_t) {
            c_L(m);
            m.c_C = c_t;
            c_y(m, c_t);
        }
        function c_L(m) {
            if (m.c_C != c_b) {
                var c_M = m.c_C;
                m.c_C = c_b;
                c_y(m, c_M);
            }
        }
        function c_N(m, c_q) {
            c_O(m);
            m.c_I = c_q;
            c_H(m, c_q);
        }
        function c_O(m) {
            if (m.c_I) {
                var c_P = m.c_I;
                m.c_I = c_b;
                c_H(m, c_P);
            }
        }
        return c_a.subclass({instanceMethods: {sort: function(c_t) {
                    var m = this, c_Q = m.getNode();
                    if (c_Q) {
                        var c_R = c_o(c_Q), c_S = c_g(c_R, 'TR'), c_T = c_S.length, c_U = [], c_V = [], c_W = c_c, c_X = c_c, c_Y = c_c;
                        m.c_v = c_s(m, c_t);
                        for (var c_Z = -1; ++c_Z < c_T; ) {
                            c_V[c_Z] = c_Z;
                            if (c_Z != m.c_0) {
                                var c_r = c_p(c_S[c_Z]);
                                if (c_r.length == m.c_A.length) {
                                    var c_1 = c_f(c_r[c_t]);
                                    if (c_1) {
                                        var c_2 = !Uize.isNaN(+c_1);
                                        c_X = c_X && c_2;
                                        c_Y = c_Y && !c_2 && !Uize.isNaN(+new Date(c_1));
                                        c_W = c_W && (c_2 || /\d/.test(c_1));
                                        c_U[c_Z] = c_1;
                                    }
                                }
                            }
                        }
                        c_Y = c_Y && !c_X;
                        var c_3 = function(c_4, c_5) {
                            return c_4 == c_5 ? 0 : (c_4 < c_5 ? -1 : 1);
                        }, c_6 = c_3, c_7 = c_Y || c_W, c_8 = c_7 ? c_6 : c_3, c_9 = m.c_v ? 1 : -1, c_ba = function(c_bb) {
                            return c_U[c_V[c_bb]] === undefined;
                        }, c_bc;
                        if (c_7) {
                            for (var c_Z = -1; ++c_Z < c_T; ) {
                                if (!c_ba(c_Z)) {
                                    c_bc = c_U[c_Z];
                                    c_U[c_Z] = +(c_X ? c_bc : c_Y ? new Date(c_bc) : c_bc.replace(/[^\d\.]/g, ''));
                                }
                            }
                        }
                        var c_bd = c_T - 1;
                        for (var c_be = -1; ++c_be < c_bd; ) {
                            if (!c_ba(c_be)) {
                                for (var c_bf = c_be; ++c_bf < c_T; ) {
                                    if (!c_ba(c_bf)) {
                                        if (c_9 == c_8(c_U[c_V[c_be]], 
                                        c_U[c_V[c_bf]])) {
                                            var c_bg = c_V[c_be];
                                            c_V[c_be] = c_V[c_bf];
                                            c_V[c_bf] = c_bg;
                                        }
                                    }
                                }
                            }
                        }
                        for (var c_Z = -1; ++c_Z < c_T; )
                            c_R.appendChild(c_S[c_V[c_Z]]);
                        if (c_t != m.c_u) {
                            if (m.c_u != c_b) {
                                var c_bh = m.c_u;
                                m.c_u = c_b;
                                c_y(m, c_bh);
                            }
                            m.c_u = c_t;
                            c_y(m, c_t);
                        }
                    }
                },updateUi: function() {
                    var m = this;
                    if (m.isWired) {
                        for (var c_t = -1; ++c_t < m.c_A.length; )
                            c_y(m, c_t);
                        c_H(m, m.c_I);
                    }
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        m.c_A = [];
                        m.c_E = [];
                        m.c_C = m.c_u = m.c_I = c_b;
                        m.c_v = c_c;
                        var c_Q = m.getNode();
                        if (c_Q) {
                            var c_R = c_o(m.getNode()), c_bi = c_g(c_R, 'TR');
                            var c_bj = 0, c_bk = c_bi.length;
                            for (var c_Z = -1; ++c_Z < c_bk; )
                                c_bj = Math.max(c_bj, c_p(c_bi[c_Z]).length);
                            var c_bl = function(c_S) {
                                for (var c_Z = -1, c_T = c_S.length; ++c_Z < c_T; ) {
                                    var c_bm = c_p(c_S[c_Z]);
                                    if (c_bm.length == c_bj) {
                                        m.c_A = c_bm;
                                        m.c_0 = c_Z;
                                        break;
                                    }
                                }
                            }, c_bn = c_Q.getElementsByTagName('thead');
                            if (c_bn.length > 0) {
                                var c_bo = c_g(c_bn[0], 'TR');
                                if (!c_bo.length)
                                    c_bo = [c_bn[0]];
                                c_bl(c_bo);
                            }
                            m.c_0 = -1;
                            m.c_A.length || c_bl(c_bi);
                            Uize.forEach(m.c_A, function(c_z, c_bp) {
                                m.c_E[c_bp] = c_z.className;
                                m.wireNode(c_z, {mouseover: function() {
                                        c_K(m, c_bp)
                                    },
                                    mouseout: function() {
                                        c_L(m)
                                    },click: function() {
                                        m.sort(c_bp)
                                    }});
                            });
                            for (var c_Z = -1, c_bk = c_bi.length, c_bq = Uize.map(m.c_A, function(c_z) {
                                return c_f(c_z)
                            }), c_br = function(c_q) {
                                c_q.Uize_Widget_TableSort_a = c_q.className;
                                m.wireNode(c_q, {mouseover: function() {
                                        c_N(m, c_q)
                                    },mouseout: function() {
                                        c_O(m)
                                    }});
                            }; ++c_Z < c_bk; ) {
                                if (c_Z != m.c_0) {
                                    var c_q = c_bi[c_Z], c_r = c_p(c_q);
                                    c_r.length == m.c_A.length && c_br(c_q);
                                    for (var c_bs = -1; ++c_bs < c_r.length; ) {
                                        if (m.c_bt && c_bs in m.c_bt ? m.c_bt[c_bs] : m.c_bu)
                                            c_r[c_bs].title = c_bq[c_bs];
                                    }
                                }
                            }
                        }
                        c_a.doMy(m, 'wireUi');
                    }
                }},stateProperties: {c_bu: {name: 'cellTooltips',value: c_c},c_bt: 'cellTooltipsByColumn',c_x: {name: 'dominantSortOrder',value: 'ascending'},c_w: 'dominantSortOrderByColumn',c_D: {name: 'headingOverClass',onChange: c_d},c_B: {name: 'headingLitClass',onChange: c_d},c_F: {name: 'languageSortAscending',onChange: c_d,value: 'Click to sort in ascending order'},c_G: {name: 'languageSortDescending',onChange: c_d,value: 'Click to sort in descending order'},c_J: {name: 'rowOverClass',onChange: c_d}}});
    }});

Uize.module({name: 'Uize.Dom.Event',builder: function() {
        'use strict';
        function _a() {
            this.returnValue = false;
        }
        function _b() {
            this.cancelBubble = true;
        }
        var _c = Uize.copyInto(function(_d) {
            return _d || event
        }, {abort: function(_d) {
                _c.preventDefault(_d = _c(_d));
                _c.stopPropagation(_d);
            },charCode: function(_d) {
                _d = _c(_d);
                if (_d.ctrlKey || _d.altKey || _d.which < 1)
                    return 0;
                return 'charCode' in _d ? _d.charCode : _c.keyCode(_d);
            },fix: function(_d) {
                _d = _c(_d);
                for (var _e in {target: 1,relatedTarget: 1,charCode: 1,keyCode: 1})
                    _e in _d || (_d[_e] = _c[_e](_d));
                _d.preventDefault || (_d.preventDefault = _a);
                _d.stopPropagation || (_d.stopPropagation = _b);
                return _d;
            },keyCode: function(_d) {
                return 'which' in (_d = _c(_d)) ? _d.which : _d.keyCode;
            },preventDefault: function(_d) {
                (_d = _c(_d)).preventDefault ? _d.preventDefault() : _a.call(_d);
            },relatedTarget: function(_d) {
                return ('relatedTarget' in (_d = _c(_d)) ? _d.relatedTarget : (_d.type == 'mouseout' ? _d.toElement : _d.fromElement));
            },stopPropagation: function(_d) {
                (_d = _c(_d)).stopPropagation ? _d.stopPropagation() : _b.call(_d);
            },target: function(_d) {
                return (_d = _c(_d)).target || _d.srcElement;
            }});
        Uize.map({Backspace: 8,Delete: 46,Insert: 45,Enter: 13,Escape: 27,Space: 32,Tab: 9,PageUp: 33,PageDown: 34,End: 35,Home: 36,LeftArrow: 37,RightArrow: 39,UpArrow: 38,DownArrow: 40}, function(_f, _g) {
            _c['isKey' + _g] = function(_d) {
                return _c.keyCode(_d) == _f
            };
        });
        return _c;
    }});

Uize.module({name: 'Uize.Node',required: ['Uize.Dom.Basics', 'Uize.Dom.Pos', 'Uize.Dom.Text', 'Uize.Dom.Util'],builder: function() {
        'use strict';
        var _a, _b = Uize, _c = _b.Dom, _d = _c.Basics;
        return _b.package(_b.copyInto({showClickable: _c.Util.showClickable}, _d, _c.Pos, _c.Text));
    }});

Uize.module({name: 'Uize.Widget.TextInput',required: ['Uize.Node', 'Uize.Dom.Event', 'Uize.Tooltip'],builder: function(c_a) {
        'use strict';
        var c_b = true, c_c = false, c_d;
        function c_e() {
            var m = this, c_f = m.c_f, c_g = m + '', c_h = c_g.length, c_i = c_h >= m.c_j && c_h <= m.c_k && (c_f == null || (c_f instanceof RegExp ? c_f.test(c_g) : (Uize.isFunction(c_f) ? c_f(c_g) : c_g == c_f))), c_l = !c_i && m.c_i == c_i;
            m.c_i != c_i ? m.set({c_i: c_i}) : c_i ? 0 : c_m(m);
        }
        function c_m(m) {
            if (m.isWired) {
                var c_n = m.c_o && !m.c_i;
                m.setNodeProperties([m.c_p, 'label'], {className: c_n ? 'error' : 'good'});
                m.setNodeStyle('warningIcon', {display: c_n ? 'inline' : 'none'});
            }
        }
        return c_a.subclass({instanceMethods: {validate: c_e,blur: function() {
                    this.c_p && this.c_p.blur()
                },focus: function() {
                    this.c_p && this.c_p.focus()
                },selectWarningMessage: function() {
                    return this.c_q()
                },updateUi: function() {
                    var m = this, c_p = m.c_p;
                    if (m.isWired && c_p) {
                        c_p.disabled = !m.get('enabled');
                        if (c_p.value != m.c_g)
                            c_p.value = m.c_g;
                    }
                    (m.c_r ^ m.c_s) || c_e.call(m);
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        m.c_p = m.getNode('input');
                        if (m.c_p) {
                            m.c_t = m.c_p.tagName == 'INPUT';
                            m.wireNode(m.c_p, {keydown: function(c_u) {
                                    if (m.c_t && Uize.Dom.Event.isKeyEnter(c_u) && m.fire({name: 'Ok',domEvent: c_u}).cancelSubmit) {
                                        var c_v = m.c_p.form;
                                        if (c_v) {
                                            m.c_w = c_v.onsubmit;
                                            m.c_x = c_b;
                                            c_v.onsubmit = Uize.returnFalse;
                                        }
                                    }
                                },keypress: function(c_u) {
                                    m.c_y = m.fire({name: 'Key Press',domEvent: c_u}).abort && Uize.Dom.Event.abort(c_u);
                                },keyup: function(c_u) {
                                    if (m.c_y) {
                                        m.c_y = c_c;
                                    } else {
                                        if (m.c_x) {
                                            m.c_p.form.onsubmit = m.c_w;
                                            m.c_w = m.c_x = c_d;
                                        }
                                        Uize.Dom.Event.isKeyEscape(c_u) && m.fire({name: 'Cancel',domEvent: c_u});
                                        m.set({c_g: m.c_p.value});
                                        m.updateUi();
                                        m.c_z && m.set({showWarning: c_b});
                                    }
                                    m.fire({name: 'Key Up',domEvent: c_u});
                                },blur: function() {
                                    m.c_A && m.setNodeProperties(m.c_p, {className: m.c_p.className.replace(m.c_B, m.c_A)});
                                    m.c_s = c_b;
                                    m.c_r && m.c_g == m.c_p.value ? c_e.call(m) : m.set({c_g: m.c_p.value});
                                    m.set({c_C: c_c});
                                    m.fire('Blur');
                                    m.c_s = c_c;
                                },focus: function() {
                                    m.c_B && m.setNodeProperties(m.c_p, {className: m.c_p.className.replace(m.c_A, m.c_B)});
                                    m.c_p.value && m.set({c_g: m.c_p.value});
                                    m.set({c_C: c_b});
                                    m.fire('Focus');
                                }});
                        }
                        m.wireNode('warningIcon', {mouseover: function() {
                                Uize.Node.setInnerHtml(m.c_D, m.c_q());
                                Uize.Tooltip.showTooltip(m.c_D, c_b);
                            },mouseout: function() {
                                Uize.Tooltip.hideTooltip(m.c_D)
                            }});
                        c_a.doMy(m, 'wireUi');
                    }
                }},stateProperties: {c_A: {name: 'blurClass',value: ''},c_z: {name: 'deferUiWarning',value: c_c},c_B: {name: 'focusClass',value: ''},c_C: {name: 'inFocus',value: c_c},c_i: {name: 'isValid',onChange: function() {
                        c_m(this)
                    },value: c_c},c_k: {name: 'maxLength',value: Infinity},c_j: {name: 'minLength',value: 0},c_q: {name: 'selectWarningMessage'},c_o: {name: 'showWarning',onChange: function() {
                        c_m(this)
                    },value: c_c},c_D: 'tooltip',c_r: {name: 'validateOnExit',value: c_c},c_f: {name: 'validator',value: null},c_g: {name: 'value',conformer: function(c_g) {
                        c_g += '';
                        var m = this, c_k = m.c_k;
                        if (m.c_E == 'LAN' && /[^a-z0-9]/.test(c_g))
                            c_g = c_g.toLowerCase().replace(/[^a-z0-9]/g, '');
                        if (c_g.length > c_k)
                            c_g = c_g.slice(0, c_k);
                        return c_g;
                    },onChange: 'updateUi',value: ''},c_F: {name: 'warningMessages',value: null},c_E: 'filterType'}});
    }});

Uize.module('Uize.Widgets');

Uize.module('Uize.Widgets.Log');

Uize.module('Uize.Widgets.Log.InstanceEvents');

Uize.module({name: 'Uize.Date',builder: function() {
        'use strict';
        var _a, _b = function(_c, _d, _e, _f, _g, _h, _i) {
            var _j = new Date(+_c + (_c < 100 && 400), (+_d || 1) - 1, +_e || 1, +_f || 0, +_g || 0, +_h || 0, +_i || 0);
            _c < 100 && _j.setFullYear(_c);
            return _j;
        };
        function _k(_l) {
            return isNaN(_l) ? '??' : (_l < 10 ? '0' : '') + _l
        }
        function _m(_l) {
            return (isNaN(_l) ? '???' : (_l < 10 ? '00' : _l < 100 ? '0' : '') + _l);
        }
        function _n(_l) {
            return (isNaN(_l) ? '????' : (_l < 10 ? '000' : _l < 100 ? '00' : _l < 1000 ? '0' : '') + _l);
        }
        var _o = {ms: 1,seconds: 1000,minutes: 60000,hours: 3600000,days: 86400000,weeks: 604800000,months: 2629743840,years: 31556926080};
        var _p = _b.convert = function(_q, _r, _s) {
            return _q * _o[_r + ''] / _o[_s + ''];
        };
        var _t = _b.resolve = function(_j, _u) {
            return (_j instanceof Date ? _j : _j == null || _j === '' ? (_u !== _a ? _u : new Date) : typeof _j == 'string' ? _b.fromIso8601(_j) || new Date(_j) : new Date(+_j));
        };
        _b.equal = function(_v, _w, _x) {
            return _b.inRange(_v, _b.getRangeAround(_w, _x || 'day'));
        };
        _b.toIso8601 = function(_j) {
            return (_n((_j = _t(_j)).getFullYear()) + '-' + _k(_j.getMonth() + 1) + '-' + _k(_j.getDate()));
        };
        _b.fromIso8601 = function(_y) {
            var _z = _y.match(/(\d{2,})-(\d\d?)-(\d\d?)(?:\D|$)/);
            return (_z ? _b(+_z[1] + (_z[1].length < 3) * 1900, _z[2], _z[3]) : _a);
        };
        var _A = {date: 'Invalid Date',YYYY: '????',YY: '??',MM: '??',monthNo: '?',monthName: '?????????',shortMonthName: '???',DD: '??',dayNo: '?',dayNoSuffix: '??',dayName: '????????',shortDayName: '???',hh: '??',h12: '?',hh12: '??',mm: '??',minutes: '?',ss: '??',seconds: '?',zzz: '???',milliseconds: '?',ampm: '??'};
        _b.format = _b.toPretty = function(_j, _B) {
            var _C = _A;
            if (!isNaN(_j = _t(_j))) {
                var _D = _n(_j.getFullYear()), _E = _j.getMonth() + 1, _e = _j.getDate(), _F = _e % 10, _G = _j.getDay(), _H = _j.getHours(), _I = _H > 11, _J = (_H - (_I && 12)) || 12, _g = _j.getMinutes(), _h = _j.getSeconds(), _i = _j.getMilliseconds();
                _C = {date: _j,YYYY: _D,YY: _D.slice(-2),MM: _k(_E),monthNo: _E,monthName: _b.monthNames[_E - 1],shortMonthName: _b.shortMonthNames[_E - 1],DD: _k(_e),dayNo: _e,dayNoSuffix: _b.dayNoSuffixes[(_F < 4 && Math.floor(_e / 10) % 10 != 1) * _F],dayName: _b.dayNames[_G],shortDayName: _b.shortDayNames[_G],hh: _k(_H),h12: _J,hh12: _k(_J),mm: _k(_g),minutes: _g,ss: _k(_h),seconds: _h,zzz: _m(_i),
                    milliseconds: _i,ampm: _I ? 'pm' : 'am'};
            }
            return Uize.substituteInto(_B || '{dayName}, {dayNo}{dayNoSuffix} {monthName} {YYYY}', _C, '{KEY}');
        };
        _b.getRangeAround = function(_j, _K) {
            var _L = new Date(_j = _t(_j)), _M = new Date(_L);
            function _N(_O, _P, _Q) {
                _L[_O](_P);
                _M[_O](_Q);
            }
            function _R(_S, _T) {
                var _U = Math.floor(_j['get' + _S]() / _T) * _T;
                _N('set' + _S, _U, _U + _T - 1);
            }
            switch (_K || (_K = 'month')) {
                case 'millennium':
                case 'century':
                case 'decade':
                    _R('FullYear', _K == 'millennium' ? 1000 : _K == 'century' ? 100 : 10);
                case 'year':
                case 'quarter':
                    _K == 'quarter' ? _R('Month', 3) : _N('setMonth', 0, 11);
                case 'month':
                case 'week':
                    if (_K == 'week') {
                        var _V = _j.getDate() - _j.getDay();
                        _N('setDate', _V, _V + 6);
                    } else {
                        _N('setDate', 1, _b.getDaysInMonth(_M.getMonth(), _M.getFullYear()));
                    }
                case 'day':
                case 'am/pm':
                    _K == 'am/pm' ? _R('Hours', 12) : _N('setHours', 0, 23);
                case 'hour':
                    _N('setMinutes', 0, 59);
                case 'minute':
                    _N('setSeconds', 0, 59);
                case 'second':
                    _N('setMilliseconds', 0, 999);
            }
            return {minValue: _L,maxValue: _M};
        };
        _b.inRange = function(_j, _W) {
            if (typeof _j != 'number')
                _j = +_t(_j);
            return _j >= _t(_W.minValue, -Infinity) && _j <= _t(_W.maxValue, Infinity);
        };
        _b.isLeapYear = function(_c) {
            return _c % 4 == 0 && (_c % 100 != 0 || _c % 400 == 0);
        };
        _b.getDaysInMonth = function(_d, _c) {
            return 30 + ((2773 >> _d) & 1) - (_d == 1 && (2 - _b.isLeapYear(_c)));
        };
        _b.isRecent = function(_j, _X, _Y) {
            return _b.inRange(_j, {minValue: _t(_Y) - _p(_X, 'days', 'ms')});
        };
        _b.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        _b.dayNoSuffixes = ['th', 'st', 'nd', 'rd'];
        _b.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        _b.shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        _b.shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return _b;
    }});

Uize.module({name: 'Uize.Date.Formatter',builder: function() {
        'use strict';
        var _a = Uize.Date, _b = _a.format, _c, _d = {YYYY: '\\d{4}',YY: '\\d\\d',MM: '1[0-2]|0[1-9]',monthNo: '1[0-2]|0?[1-9]',DD: '30|31|[1-2]\\d|0[1-9]',dayNo: '30|31|[1-2]\\d|0?[1-9]',dayNoSuffix: _a.dayNoSuffixes.join('|'),hh: '[0-1]\\d|2[0-3]',h12: '1[0-2]|0?[1-9]',hh12: '1[0-2]|0[1-9]',mm: '[0-5]\\d',minutes: '[0-5]?\\d',ss: '[0-5]\\d',seconds: '[0-5]?\\d',zzz: '\\d{3}',milliseconds: '\\d{1,3}',ampm: 'am|pm'}, _e = ['monthName', 'shortMonthName', 'dayName', 'shortDayName'], _f = String.fromCharCode(7);
        function _g(_h, _i) {
            _i = _i.toLowerCase();
            for (var _j = -1, _k = _h.length; ++_j < _k; )
                if (_i == _h[_j].toLowerCase())
                    return _j;
            return -1;
        }
        return Uize.package({format: _b,toPretty: _b,parse: function(_l, _b) {
                var _m;
                if (typeof _l == 'object' && _l && !(_l instanceof Date))
                    _l = _l.valueOf();
                if (_l instanceof Date)
                    return _l;
                if (_l == null || _l == '')
                    return;
                if (typeof _l == 'number')
                    return new Date(_l);
                if (!_b)
                    return _a.resolve(_l);
                Uize.lookup(_e, null, _d);
                if (!_c)
                    _c = new RegExp('\\{(' + Uize.keys(_d).join('|') + ')\\}', 'g')
                    ;
                var _n = [], _o = 0, _p = new RegExp(Uize.escapeRegExpLiteral(_b.replace(_c, function(_q, _m) {
                    _n.push(_m);
                    return _f;
                })).replace(/\s+/g, '\\s+').replace(/\x07/g, function() {
                    return ('\\s*(' + (_d[_m = _n[_o++]] || (_d[_m] = _a[_m + 's'].join('|'))) + ')\\s*');
                }), 'i'), _r = (_l + '').match(_p);
                if (_r) {
                    var _s = 0, _t = 1, _u = 1, _v, _w = 0, _x = 0, _y = 0, _z = 0, _A = false;
                    for (var _B = 0, _C = _r.length; ++_B < _C; ) {
                        var _D = _r[_B];
                        switch (_n[_B - 1]) {
                            case 'YYYY':
                                _s = +_D;
                                break;
                            case 'YY':
                                _s = 1900 + +_D;
                                break;
                            case 'MM':
                            case 'monthNo':
                                _t = +_D;
                                break;
                            case 'monthName':
                                _t = _g(_a.monthNames, _D) + 1;
                                break;
                            case 'shortMonthName':
                                _t = _g(_a.shortMonthNames, _D) + 1;
                                break;
                            case 'DD':
                            case 'dayNo':
                                _u = +_D;
                                break;
                            case 'hh':
                                _v = +_D;
                                break;
                            case 'h12':
                            case 'hh12':
                                _w = +_D;
                                break;
                            case 'mm':
                            case 'minutes':
                                _x = +_D;
                                break;
                            case 'ss':
                            case 'seconds':
                                _y = +_D;
                                break;
                            case 'zzz':
                            case 'milliseconds':
                                _z = +_D;
                            case 'ampm':
                                _A = /^pm$/i.test(_D)
                        }
                    }
                    return _a(_s, _t, _u, _v !== undefined ? _v : _w * (_w != 12) + _A * 12, _x, _y, _z);
                }
            }});
    }});

Uize.module({name: 'Uize.Widget.mChildBindings',builder: function() {
        'use strict';
        var _a, _b = Uize, _c = _b.forEach, _d = _b.isString, _e = _b.isArray, _f = _b.isPlainObject, _g = _b.resolveTransformer, _h = _b.pairUp, _i = /^([<\->]+)?(\w+)(\.(.+))?$/;
        function _j(_k, _l, _m, _n, _o) {
            var _p = _k.get(_l);
            _m.set(_n, _o ? _o(_p, _k, _m) : _p);
        }
        return function(_q) {
            _q.declare({alphastructor: function() {
                    var m = this, _r = m.addedChildren;
                    _c(m.Class.mChildBindings_bindings, function(_s, _t) {
                        _r.whenever(_t, function() {
                            for (var _u in _s)
                                _s[_u](m);
                        });
                    });
                },staticMethods: {childBindings: function(_v) {
                        var _w = this.mChildBindings_bindings;
                        _c(_v, function(_x, _y) {
                            function _z(_A) {
                                var _B = _d(_A) && _A.match(_i);
                                if (_B)
                                    _A = {child: _B[2],property: _B[4],direction: _B[1]};
                                if (_f(_A) && _A.child) {
                                    var _t = _A.child, _C = _A.property || _y, _D = _A.direction || '<->', _E = _D.length, _F = _A.valueAdapter, _G = _F && _F.aToB && _g(_F.aToB), _H = _F && _F.bToA && _g(_F.bToA), _I = _D.indexOf('->') == (_E - 2), _J = !_D.indexOf('<-'), _K = _D.indexOf('<->'), _L = 'Changed.' + _y, _M = 'Changed.' + _C;
                                    (_w[_t] = _w[_t] || {})[_y + '/' + _C] = function(m) {
                                        var 
                                        _N = m.children[_t], _O, _P;
                                        function _Q() {
                                            _j(m, _y, _N, _C, _G)
                                        }
                                        function _R() {
                                            _j(_N, _C, m, _y, _H)
                                        }
                                        if (_I) {
                                            (_K || m.get(_y) !== _a) && _Q();
                                            m.wire(_O = _h(_L, _Q));
                                        }
                                        if (_J) {
                                            _R();
                                            _N.wire(_P = _h(_M, _R));
                                        }
                                        m.addedChildren.whenever('!' + _t, function() {
                                            if (_N) {
                                                _O && m.unwire(_O);
                                                _P && _N && _N.unwire(_P);
                                                _N = undefined;
                                            }
                                        });
                                    };
                                }
                            }
                            _e(_x) ? _c(_x, _z) : _z(_x);
                        });
                    }},staticProperties: {mChildBindings_bindings: {}}});
        };
    }});

Uize.module({name: 'Uize.Widget.mChildrenLinked',builder: function() {
        'use strict';
        return function(_a) {
            _a.declare({alphastructor: function() {
                    this.linkedChildren = Uize.Class();
                },omegastructor: function() {
                    var m = this, _b = m.Class.mChildrenLinked_childrenLinked, _c = m.linkedChildren;
                    Uize.isEmpty(_b) || Uize.forEach(_b, function(_d, _e) {
                        var _f = '~' + _e;
                        _c.set(_f, m.isMet(_d));
                        m.onChange(_d, function(_g) {
                            _c.set(_f, _g)
                        });
                    });
                },staticProperties: {mChildrenLinked_childrenLinked: {}},staticMethods: {childrenLinked: function(_b) {
                        Uize.copyInto(this.mChildrenLinked_childrenLinked, _b);
                    }}});
        };
    }});

Uize.module({name: 'Uize.Widget.mHtmlBindings',builder: function() {
        'use strict';
        var _a = Uize, _b = _a.forEach, _c = _a.pairUp, _d = _a.applyAll;
        return function(_e) {
            _e.declare({alphastructor: function() {
                    var m = this;
                    m.whenever('wired', function() {
                        var _f = m.Class.mHtmlBindings_bindings;
                        for (var _g in _f)
                            _d(m, _f[_g], [m.get(_g)]);
                    });
                },staticMethods: {htmlBindings: function(_h) {
                        var m = this, _f = m.mHtmlBindings_bindings;
                        _b(_h, function(_i, _g) {
                            var _j = _f[_g] || (_f[_g] = []);
                            function _k(_i) {
                                if (typeof _i == 'string') {
                                    var _l = _i.split(':'), _m = _l[0], _n = _l[1] || 'value';
                                    if (_n == 'value') {
                                        _i = function(_o) {
                                            this.setNodeValue(_m, _o == null ? '' : _o);
                                        };
                                    } else if (_n == 'html' || _n == 'innerHTML') {
                                        _i = function(_o) {
                                            this.setNodeInnerHtml(_m, _o == null ? '' : _o);
                                        };
                                    } else if (_n == '?') {
                                        _i = function(_o) {
                                            this.displayNode(_m, !!_o)
                                        };
                                    } else if (_n == 'show' || _n == 'hide') {
                                        _i = function(_o) {
                                            this.setNodeStyle(_m, {display: !!_o == (_n == 'show') ? '' : 'none'});
                                        };
                                    } else if (_n.charCodeAt(0) == 64) {
                                        var _p = _n.slice(1);
                                        _i = function(_o) {
                                            var _q = this.getNode(_m);
                                            _q && _q.setAttribute(_p, _o);
                                        };
                                    } else if (_n.slice(0, 6) == 'style.') {
                                        var _r = _n.slice(6);
                                        _i = function(_o) {
                                            this.setNodeStyle(_m, _c(_r, _o));
                                        };
                                    } else {
                                        _i = function(_o) {
                                            this.setNodeProperties(_m, _c(_n, _o));
                                        };
                                    }
                                    _i.propertyName = _g;
                                    _i.nodeName = _m;
                                    _i.bindingType = _n;
                                }
                                _j.push(_i);
                                m.stateProperties(Uize.pairUp(_g, {onChange: function(_s) {
                                        this.isWired && _i.call(this, _s[_g]);
                                    }}));
                            }
                            _a.isArray(_i) ? _b(_i, _k) : _k(_i);
                        });
                    }},staticProperties: {mHtmlBindings_bindings: {}}});
        };
    }});

Uize.module({name: 'Uize.Widget.mCssBindings',required: 'Uize.Widget.mHtmlBindings',builder: function() {
        'use strict';
        var _a, _b = Uize, _c = 'mCssBindings_bindings', _d = {}, _e = {}, _f = {}, _g = {}, _h = {}, _i = {};
        function _j(m) {
            var _k = m[_c], _l = _b.keys(_k), _m = _l.join();
            m.stateProperties({mCssBindings_rootNodeClasses: {derived: _i[_m] || (_i[_m] = Function.apply(0, _l.concat('extraClasses', 'var ' + 'm=this,c=m.Class,b=c.' + _c + Uize.map(_l, function(_n, _o) {
                        return ',p' + _o + '=b[\'' + _n + '\'](m.get(\'' + _n + '\')),c' + _o + '=p' + _o + '&&m.cssClass(p' + _o + ')';
                    }).join('') + ',e=m.extraClasses' + ';' + 'return ' + 'm.cssClass(\'\')' + Uize.map(_l, function(_n, _o) {
                        return '+(c' + _o + '?\' \'+c' + _o + ':\'\')';
                    }).join('') + '+(e?\' \'+e:\'\')' + ';')))}});
        }
        return function(_p) {
            _p.declare({mixins: Uize.Widget.mHtmlBindings,alphastructor: function() {
                    function _q(m) {
                        var _r = m.moduleName;
                        if (_e[_r] != _d) {
                            _e[_r] = _d;
                            m.superclass && _q(m.superclass);
                            m.cssModule && m.cssModule.add();
                        }
                    }
                    _q(this.Class);
                },instanceMethods: {rootNodeCssClasses: function() {
                        return this.mCssBindings_rootNodeClasses;
                    },
                    cssClass: function(_s) {
                        var _t = this.Class, _u = _t.moduleName, _v = _h[_u] || (_h[_u] = {}), _w = _v[_s];
                        if (!_w) {
                            var _x = _g[_u];
                            if (!_x) {
                                var _y = _t, _z, _A = [], _B = {};
                                while (_y) {
                                    if ((_z = _t.cssClassPrefix.call(_y)) != _a && !_B[_z]) {
                                        _B[_z] = 1;
                                        _A.unshift('"' + _z + '"+cs');
                                    }
                                    _y = _y.superclass;
                                }
                                _x = _g[_u] = Function('cn', 'var cs=(cn||"")&&"-"+cn;return ' + _A.join('+" "+') + ';');
                            }
                            _w = _v[_s] = _x(_s);
                        }
                        return _w;
                    }},staticMethods: {cssClassPrefix: function() {
                        var _C = this.cssModule, _D;
                        return (_C && (_f[_D = _C.moduleName] || (_f[_D] = _D.replace(/\./g, '_'))));
                    },cssBindings: function(_E) {
                        _b.copyInto(this[_c], _b.map(_E, _b.resolveTransformer));
                        _j(this);
                    }},staticProperties: {mCssBindings_bindings: {}},stateProperties: {extraClasses: {value: ''}},htmlBindings: {mCssBindings_rootNodeClasses: ':@class'}});
            _j(_p);
        };
    }});

Uize.module({name: 'Uize.Widget.mDeclarativeChildren',required: 'Uize.Widget.mChildrenLinked',builder: function() {
        'use strict';
        var _a = Uize;
        return function(_b) {
            _b.declare({mixins: _a.Widget.mChildrenLinked,omegastructor: function() {
                    var m = this, _c = m.linkedChildren;
                    Uize.forEach(m.Class.mDeclarativeChildren_children, function(_d, _e) {
                        function _f() {
                            var _g = _d._h, _i = _d._j;
                            if (_d._k) {
                                _i = _a.copy(_i.call(m, _e));
                                _g = _i.widgetClass;
                                delete _i.widgetClass;
                            }
                            return _g && m.mDeclarativeChildren_getContainer(_e).addChild(_e, _g, _i);
                        }
                        var _l = '~' + _e;
                        if (_c.get(_l) === false) {
                            _c.once(_l, function() {
                                var _m = _f();
                                m.isWired && _m.insertUi();
                            });
                        } else {
                            _f();
                        }
                    });
                },staticMethods: {children: function(_n) {
                        var _o = this.mDeclarativeChildren_children;
                        for (var _e in _n) {
                            var _p = _n[_e], _q = _a.isFunction(_p) && !_p.declare, _r = _a.isPlainObject(_p), _i = !_q && !_r ? {widgetClass: _p} : _p, _g = !_q && _i.widgetClass;
                            if (!_q && _r && _g) {
                                _i = _a.copy(_i);
                                delete _i.widgetClass;
                            }
                            _o[_e] = _a.copyInto(_o[_e] || {}, {_h: _g,_j: _i,_k: _q});
                        }
                    }},staticProperties: {mDeclarativeChildren_children: {}},
                instanceMethods: {mDeclarativeChildren_getContainer: function() {
                        return this
                    }}});
        };
    }});

Uize.module({name: 'Uize.Widget.mEventBindings',builder: function() {
        'use strict';
        var _a = Uize, _b = _a.forEach, _c = _a.returnTrue, _d = _a.isFunction, _e = _a.isPlainObject, _f = _a.pairUp;
        return function(_g) {
            _g.declare({alphastructor: function() {
                    var m = this, _h = m.Class, _i = _h.mEventBindings_dom, _j = m.addedChildren, _k = m.children, _l = {};
                    function _m(_n, _o, _p, _q) {
                        return function(_r) {
                            (!_o.required || _j.isMet(_o.required)) && m.isMet(_o.fireIf || _q) && _o.handler.call(_n, _r, _p);
                        };
                    }
                    m.whenever('wired', function() {
                        for (var _s in _i) {
                            for (var _t = _i[_s], _u = m.getNode(_s), _v = -1, _w = _t.length; ++_v < _w; ) {
                                var _x = _t[_v];
                                m.wireNode(_u, _x[0], _m(m, _x[1], _u, 'enabledInherited,!busyInherited'));
                            }
                        }
                    });
                    _b(_h.mEventBindings_widget, function(_t, _y) {
                        function _z(_A) {
                            for (var _v = -1, _w = _t.length; ++_v < _w; ) {
                                var _x = _t[_v], _B = _f(_x[0], _m(m, _x[1], _A, _c));
                                _A.wire(_B);
                                (_l[_y] || (_l[_y] = [])).push(_B);
                            }
                        }
                        if (_y) {
                            var _C;
                            _j.wire('Changed.' + _y, function() {
                                if (_j.get(_y))
                                    _z(_C = _k[_y]);
                                else {
                                    for (var _D = _l[_y], _E = -1; ++_E < _D.length; )
                                        _C.unwire(_D[_E]);
                                    delete _l[_y];
                                    _C = undefined;
                                }
                            });
                        } else
                            _z(m);
                    });
                },staticMethods: {eventBindings: function(_t) {
                        var _F = this, _G = _F.mEventBindings_dom, _H = _F.mEventBindings_widget, _I;
                        _b(_t, function(_J, _K) {
                            var _L = _K.split(':'), _M = _L[0], _N = (!_M.indexOf('#') ? (_M = _M.substr(1)) : _I) != _I ? _G : _H;
                            function _O(_o, _P) {
                                if (!_M && _N == _H && _d(_o) && !_P.indexOf('Changed.')) {
                                    var _Q = _P.slice(8);
                                    _F.stateProperties(_f(_Q, {onChange: function() {
                                            var m = this;
                                            _o.call(m, {name: _P,source: m,newValue: m.get(_Q)}, m);
                                        }}));
                                } else
                                    (_N[_M] || (_N[_M] = [])).push([_P, _e(_o) ? _o : {handler: _o}]);
                            }
                            _L.length > 1 ? _O(_J, _L[1]) : _b(_J, _O);
                        });
                    }},staticProperties: {mEventBindings_dom: {},mEventBindings_widget: {}}});
        };
    }});

Uize.module({name: 'Uize.Widget.mLoc',builder: function() {
        'use strict';
        var _a = {};
        function _b(_c, _d, _e) {
            if (_c) {
                var _f = _c.moduleName, _g = _f + ':' + _d;
                if (_a[_g]) {
                    _e(_a[_g]);
                } else {
                    _b(_c.superclass, _d, function(_h) {
                        function _i(_j) {
                            _e(_a[_g] = Uize.copy(_h, _j));
                        }
                        if (_c.mLoc_hasLoc) {
                            var _k = _d == 'pseudo', _l = _f.replace(/\.Widget$/, '.Loc.');
                            _k ? Uize.require(['Uize.Loc.Pseudo', _l + 'en_US'], function(_m, _j) {
                                _i(Uize.map(_j, function(_n) {
                                    return _m.pseudoLocalize(_n)
                                }));
                            }) : Uize.require(_l + _d.replace('-', '_'), _i);
                        } else {
                            _i();
                        }
                    });
                }
            } else {
                _e({});
            }
        }
        return function(_o) {
            _o.declare({instanceMethods: {loc: function(_p, _q) {
                        return this.get('loc_' + _p)(_q);
                    }},treeInheritedStateProperties: {locale: {value: 'en-US'}},staticMethods: {hasLoc: function(_r) {
                        this.nonInheritableStatics.mLoc_hasLoc = 1;
                        this.mLoc_hasLoc = _r;
                    }},stateProperties: {localeInherited: {onChange: function() {
                            var m = this;
                            _b(m.Class, m.localeInherited, function(_s) {
                                m.set(_s)
                            });
                        }}}});
        };
    }});

Uize.module({name: 'Uize.Widget.mV2',required: ['Uize.Widget.mHtmlBindings', 'Uize.Widget.mCssBindings', 'Uize.Widget.mChildrenLinked', 'Uize.Widget.mEventBindings', 'Uize.Widget.mChildBindings', 'Uize.Widget.mDeclarativeChildren', 'Uize.Widget.mLoc'],builder: function() {
        'use strict';
        var _a = Uize, _b = _a.Widget;
        return function(_c) {
            _c.declare({mixins: [_b.mHtmlBindings, _b.mCssBindings, _b.mChildrenLinked, _b.mEventBindings, _b.mChildBindings, _b.mDeclarativeChildren, _b.mLoc],instanceMethods: {childHtml: function(_d) {
                        var m = this, _e = _d.name || ('generatedChildName' + (m.mV2_generatedChildNames = (m.mV2_generatedChildNames || 0) + 1)), _f = _a.getModuleByName(_d.widgetClass), _g = m.children[_e], _h = '';
                        if (_g || _f) {
                            _d = _a.copy(_d);
                            delete _d.name;
                            delete _d.widgetClass;
                            _g ? _g.set(_d) : (_g = m.addChild(_e, _f, _d));
                            _h = _g.get('built') ? _g.getHtml() : '<div id="' + m.nodeId(_e) + '"></div>';
                        }
                        return _h;
                    },superHtml: function(_i, _j) {
                        return this.Class.superclass.get('html').process.call(this, _a.copy(_i, _j));
                    }},treeInheritedStateProperties: {size: {value: 'medium'}},
                cssBindings: {sizeInherited: 'value'},set: {html: ''}});
        };
    }});

Uize.module({name: 'Uize.Widget.V2',required: 'Uize.Widget.mV2',builder: function(c_a) {
        'use strict';
        return c_a.subclass({mixins: Uize.Widget.mV2});
    }});

Uize.module('Uize.Widgets.BoxWithHeading');

Uize.module({name: 'Uize.Dom.CssModule',superclass: 'Uize.Class',builder: function(b_a) {
        'use strict';
        var b_b = typeof navigator != 'undefined' && navigator.appName == 'Microsoft Internet Explorer', b_c = b_b ? navigator.appVersion.match(/MSIE (\d+(\.\d*)?)/)[1] < 10 ? 4095 : 65534 : Infinity;
        return b_a.subclass({staticMethods: {add: function() {
                    var m = this;
                    if (!m.added) {
                        var b_d = document, b_e = b_d.styleSheets, b_f = b_d.head || b_d.getElementsByTagName('head')[0], b_g = m.css, b_h = b_e.length, b_i = b_d.createElement('style');
                        if (Uize.isFunction(b_g))
                            b_g = b_g.call(m, {pathToModules: Uize.pathToResources});
                        b_i.type = 'text/css';
                        b_i.textContent = b_g;
                        b_i.id = 'UIZE_' + Uize.getGuid();
                        b_f.appendChild(b_i);
                        if (b_e.length == b_h) {
                            if (b_b) {
                                var b_j = [], b_k = 0;
                                for (var b_l = -1, b_m; ++b_l < b_h; ) {
                                    if ((b_m = b_e[b_l]).id.slice(0, 5) == 'UIZE_')
                                        b_j[b_k++] = b_m;
                                }
                                if (b_k) {
                                    var b_n, b_o = function() {
                                        for (b_n = b_k; --b_n >= 0 && !b_j[b_n].cssRules.length; )
                                            ;
                                        var b_p = b_n + 1 < b_k;
                                        if (b_p)
                                            b_j[b_n + 1].cssText = b_g;
                                        return b_p;
                                    };
                                    if (!b_o()) {
                                        for (var b_q = -1; ++b_q < b_k && b_j[b_q].cssRules.length >= b_c; )
                                            ;
                                        if (b_q < b_k) {
                                            var 
                                            b_r = [], b_s = 0;
                                            for (b_n = b_q - 1; ++b_n < b_k; ) {
                                                for (var b_t = -1, b_u = b_j[b_n].cssRules, b_v = b_u.length; ++b_t < b_v; )
                                                    b_r[b_s++] = b_u[b_t].cssText;
                                            }
                                            for (b_n = b_q - 1; ++b_n < b_k; )
                                                b_j[b_n].cssText = b_r.splice(0, b_c).join('');
                                            b_o();
                                        }
                                    }
                                }
                            }
                        }
                        m.added = true;
                    }
                }},staticProperties: {added: false,css: ''}});
    }});

Uize.module({name: 'Uize.Widgets.BoxWithHeading.Css',superclass: 'Uize.Dom.CssModule',builder: function(c_a) {
        'use strict';
        return c_a.subclass({staticProperties: {css: function(c_b) {
                    return ' .Uize_Widgets_BoxWithHeading_Css { margin-bottom: 10px; font-family: Arial, Helvetica, Verdana } .Uize_Widgets_BoxWithHeading_Css-contents { border: 1px solid #f4f4f4; border-radius: 3px; overflow: hidden; box-shadow: 0 0 7px rgba(0,0,0,.2); } .Uize_Widgets_BoxWithHeading_Css-heading { font-weight: bold; padding: 4px 5px 8px 5px; background: #f4f4f4; } .Uize_Widgets_BoxWithHeading_Css-body { background: #fff; padding: 8px; } ';
                }}});
    }});

Uize.module({name: 'Uize.Widgets.BoxWithHeading.Html',builder: function() {
        'use strict';
        return Uize.package({process: function(input) {
                var m = this, output = [];
                output.push('<div id="', input.idPrefix, '" class="', m.rootNodeCssClasses(), '">\r\n	<div class="', m.cssClass('contents'), '">\r\n		<div id="', input.idPrefix, '-heading" class="', m.cssClass('heading'), '">', input.heading, '</div>\r\n		<div id="', input.idPrefix, '-body" class="', m.cssClass('body'), '">\r\n			', input.body, '\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n');
                return output.join('');
            },input: {heading: 'string',body: 'string'}});
    }});

Uize.module({name: 'Uize.Widgets.BoxWithHeading.Widget',superclass: 'Uize.Widget.V2',required: ['Uize.Widgets.BoxWithHeading.Html', 'Uize.Widgets.BoxWithHeading.Css'],builder: function(d_a) {
        'use strict';
        return d_a.subclass({set: {html: Uize.Widgets.BoxWithHeading.Html},staticProperties: {cssModule: Uize.Widgets.BoxWithHeading.Css}});
    }});

Uize.module('Uize.Widgets.Button');

Uize.module({name: 'Uize.Widgets.Button.Css',superclass: 'Uize.Dom.CssModule',builder: function(c_a) {
        'use strict';
        return c_a.subclass({staticProperties: {css: function(c_b) {
                    return ' .Uize_Widgets_Button_Css, .Uize_Widgets_Button_Css:link, .Uize_Widgets_Button_Css:visited, .Uize_Widgets_Button_Css:hover, .Uize_Widgets_Button_Css:active { font-family: Arial, Helvetica, Verdana; font-weight: bold; display: inline-block; border-width: 1px; border-style: solid; border-radius: 3px; text-decoration: none; cursor: pointer; } .Uize_Widgets_Button_Css-normal, .Uize_Widgets_Button_Css-normal:link, .Uize_Widgets_Button_Css-normal:visited, .Uize_Widgets_Button_Css-normal:hover, .Uize_Widgets_Button_Css-normal:active { border-color: #ccc #999 #999 #ccc; color: #444; text-shadow: 1px -1px 0 #fff, 1px 0px 0 #fff, 1px 1px 0 #fff; background: #eeeeee; background: -moz-linear-gradient(top, #ffffff 0%, #e0e0e0 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#e0e0e0)); background: -webkit-linear-gradient(top, #ffffff 0%,#e0e0e0 100%); background: -o-linear-gradient(top, #ffffff 0%,#e0e0e0 100%); background: -ms-linear-gradient(top, #ffffff 0%,#e0e0e0 100%); background: linear-gradient(to bottom, #ffffff 0%,#e0e0e0 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#e0e0e0\',GradientType=0 ); } .Uize_Widgets_Button_Css-normal-over, .Uize_Widgets_Button_Css-normal-over:link, .Uize_Widgets_Button_Css-normal-over:visited, .Uize_Widgets_Button_Css-normal-over:hover, .Uize_Widgets_Button_Css-normal-over:active { border-color: #aaa #777 #777 #aaa; color: #222; text-shadow: 1px -1px 0 #fff, 1px 0px 0 #fff, 1px 1px 0 #fff; background: #efefef; filter: none; } .Uize_Widgets_Button_Css-normal-active, .Uize_Widgets_Button_Css-normal-active:link, .Uize_Widgets_Button_Css-normal-active:visited, .Uize_Widgets_Button_Css-normal-active:hover, .Uize_Widgets_Button_Css-normal-active:active { border-color: #666; color: #000; text-shadow: 1px -1px 0 #fff, 1px 0px 0 #fff, 1px 1px 0 #fff; box-shadow: inset 0 2px 4px rgba(0,0,0,.1); background: #fff; filter: none; } .Uize_Widgets_Button_Css-normal-disabled, .Uize_Widgets_Button_Css-normal-disabled:link, .Uize_Widgets_Button_Css-normal-disabled:visited, .Uize_Widgets_Button_Css-normal-disabled:hover, .Uize_Widgets_Button_Css-normal-disabled:active { border-color: #d3d3d3; background: #e6e6e6; filter: none; color: #bbb; text-shadow: none; cursor: default; } .Uize_Widgets_Button_Css-subdued, .Uize_Widgets_Button_Css-subdued:link, .Uize_Widgets_Button_Css-subdued:visited, .Uize_Widgets_Button_Css-subdued:hover, .Uize_Widgets_Button_Css-subdued:active { border-color: transparent; color: #444; text-shadow: none; background; none; } .Uize_Widgets_Button_Css-subdued-over, .Uize_Widgets_Button_Css-subdued-over:link, .Uize_Widgets_Button_Css-subdued-over:visited, .Uize_Widgets_Button_Css-subdued-over:hover, .Uize_Widgets_Button_Css-subdued-over:active { border-color: #aaa #777 #777 #aaa; color: #222; text-shadow: 1px -1px 0 #fff, 1px 0px 0 #fff, 1px 1px 0 #fff; background: #efefef; filter: none; } .Uize_Widgets_Button_Css-subdued-active, .Uize_Widgets_Button_Css-subdued-active:link, .Uize_Widgets_Button_Css-subdued-active:visited, .Uize_Widgets_Button_Css-subdued-active:hover, .Uize_Widgets_Button_Css-subdued-active:active { border-color: #666; color: #000; text-shadow: 1px -1px 0 #fff, 1px 0px 0 #fff, 1px 1px 0 #fff; box-shadow: inset 0 2px 4px rgba(0,0,0,.1); background: #fff; filter: none; } .Uize_Widgets_Button_Css-subdued-disabled, .Uize_Widgets_Button_Css-subdued-disabled:link, .Uize_Widgets_Button_Css-subdued-disabled:visited, .Uize_Widgets_Button_Css-subdued-disabled:hover, .Uize_Widgets_Button_Css-subdued-disabled:active { border-color: transparent; background: none; filter: none; color: #bbb; text-shadow: none; cursor: default; } .Uize_Widgets_Button_Css-positive, .Uize_Widgets_Button_Css-positive:link, .Uize_Widgets_Button_Css-positive:visited, .Uize_Widgets_Button_Css-positive:hover, .Uize_Widgets_Button_Css-positive:active { border-color: #9c9 #696 #585 #9c9; color: #fff; background: #55aa22; background: -moz-linear-gradient(top, #88dd44 0%, #559922 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#88dd44), color-stop(100%,#559922)); background: -webkit-linear-gradient(top, #88dd44 0%,#559922 100%); background: -o-linear-gradient(top, #88dd44 0%,#559922 100%); background: -ms-linear-gradient(top, #88dd44 0%,#559922 100%); background: linear-gradient(to bottom, #88dd44 0%,#559922 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#88dd44\', endColorstr=\'#559922\',GradientType=0 ); } .Uize_Widgets_Button_Css-positive-over, .Uize_Widgets_Button_Css-positive-over:link, .Uize_Widgets_Button_Css-positive-over:visited, .Uize_Widgets_Button_Css-positive-over:hover, .Uize_Widgets_Button_Css-positive-over:active { border-color: #7a7 #474 #474 #7a7; color: #fff; text-shadow: 1px -1px 1px rgba(0,0,0,.1), 1px 0px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,.1); background: #6b3; filter: none; } .Uize_Widgets_Button_Css-positive-active, .Uize_Widgets_Button_Css-positive-active:link, .Uize_Widgets_Button_Css-positive-active:visited, .Uize_Widgets_Button_Css-positive-active:hover, .Uize_Widgets_Button_Css-positive-active:active { border-color: #584; color: #fff; text-shadow: 1px -1px 1px rgba(0,0,0,.1), 1px 0px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,.1); box-shadow: inset 0 4px 6px rgba(0,0,0,.1); background: #7c4; filter: none; } .Uize_Widgets_Button_Css-positive-disabled, .Uize_Widgets_Button_Css-positive-disabled:link, .Uize_Widgets_Button_Css-positive-disabled:visited, .Uize_Widgets_Button_Css-positive-disabled:hover, .Uize_Widgets_Button_Css-positive-disabled:active { border-color: #bc9; background: #bd8; filter: none; color: rgba(255,255,255,.5); text-shadow: none; cursor: default; } .Uize_Widgets_Button_Css-negative, .Uize_Widgets_Button_Css-negative:link, .Uize_Widgets_Button_Css-negative:visited, .Uize_Widgets_Button_Css-negative:hover, .Uize_Widgets_Button_Css-negative:active { border-color: #cc9999 #996666 #875454 #cc9999; color: #fff; background: ##aa2222; background: -moz-linear-gradient(top, #dd4646 0%, #9b2222 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#dd4646), color-stop(100%,#9b2222)); background: -webkit-linear-gradient(top, #dd4646 0%,#9b2222 100%); background: -o-linear-gradient(top, #dd4646 0%,#9b2222 100%); background: -ms-linear-gradient(top, #dd4646 0%,#9b2222 100%); background: linear-gradient(to bottom, #dd4646 0%,#9b2222 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#dd4646\', endColorstr=\'#9b2222\',GradientType=0 ); } .Uize_Widgets_Button_Css-negative-over, .Uize_Widgets_Button_Css-negative-over:link, .Uize_Widgets_Button_Css-negative-over:visited, .Uize_Widgets_Button_Css-negative-over:hover, .Uize_Widgets_Button_Css-negative-over:active { border-color: #ab7878 #784545 #784545 #ab7878; color: #fff; text-shadow: 1px -1px 1px rgba(0,0,0,.1), 1px 0px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,.1); background: #bc3434; filter: none; } .Uize_Widgets_Button_Css-negative-active, .Uize_Widgets_Button_Css-negative-active:link, .Uize_Widgets_Button_Css-negative-active:visited, .Uize_Widgets_Button_Css-negative-active:hover, .Uize_Widgets_Button_Css-negative-active:active { border-color: #884444; color: #fff; text-shadow: 1px -1px 1px rgba(0,0,0,.1), 1px 0px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,.1); box-shadow: inset 0 4px 6px rgba(0,0,0,.1); background: #cb4343; filter: none; } .Uize_Widgets_Button_Css-negative-disabled, .Uize_Widgets_Button_Css-negative-disabled:link, .Uize_Widgets_Button_Css-negative-disabled:visited, .Uize_Widgets_Button_Css-negative-disabled:hover, .Uize_Widgets_Button_Css-negative-disabled:active { border-color: #cc9999; background: #dd8888; filter: none; color: rgba(255,255,255,.5); text-shadow: none; cursor: default; } .Uize_Widgets_Button_Css-primary, .Uize_Widgets_Button_Css-primary:link, .Uize_Widgets_Button_Css-primary:visited, .Uize_Widgets_Button_Css-primary:hover, .Uize_Widgets_Button_Css-primary:active { border-color: #99bbcc #668899 #547687 #99bbcc; color: #fff; background: #227daa; background: -moz-linear-gradient(top, #46abdd 0%, #22729b 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#46abdd), color-stop(100%,#22729b)); background: -webkit-linear-gradient(top, #46abdd 0%,#22729b 100%); background: -o-linear-gradient(top, #46abdd 0%,#22729b 100%); background: -ms-linear-gradient(top, #46abdd 0%,#22729b 100%); background: linear-gradient(to bottom, #46abdd 0%,#22729b 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#46abdd\', endColorstr=\'#22729b\',GradientType=0 ); } .Uize_Widgets_Button_Css-primary-over, .Uize_Widgets_Button_Css-primary-over:link, .Uize_Widgets_Button_Css-primary-over:visited, .Uize_Widgets_Button_Css-primary-over:hover, .Uize_Widgets_Button_Css-primary-over:active { border-color: #789aab #456778 #456778 #789aab; color: #fff; text-shadow: 1px -1px 1px rgba(0,0,0,.1), 1px 0px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,.1); background: #348fbc; filter: none; } .Uize_Widgets_Button_Css-primary-active, .Uize_Widgets_Button_Css-primary-active:link, .Uize_Widgets_Button_Css-primary-active:visited, .Uize_Widgets_Button_Css-primary-active:hover, .Uize_Widgets_Button_Css-primary-active:active { border-color: #447188; color: #fff; text-shadow: 1px -1px 1px rgba(0,0,0,.1), 1px 0px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,.1); box-shadow: inset 0 4px 6px rgba(0,0,0,.1); background: #439ecb; filter: none; } .Uize_Widgets_Button_Css-primary-disabled, .Uize_Widgets_Button_Css-primary-disabled:link, .Uize_Widgets_Button_Css-primary-disabled:visited, .Uize_Widgets_Button_Css-primary-disabled:hover, .Uize_Widgets_Button_Css-primary-disabled:active { border-color: #99bbcc; background: #88c1dd; filter: none; color: rgba(255,255,255,.5); text-shadow: none; cursor: default; } .Uize_Widgets_Button_Css-busy, .Uize_Widgets_Button_Css-busy:link, .Uize_Widgets_Button_Css-busy:visited, .Uize_Widgets_Button_Css-busy:hover, .Uize_Widgets_Button_Css-busy:active { cursor: wait; } .Uize_Widgets_Button_Css-tiny {font-size: 12px; line-height: 12px; padding: 4px 8px 5px 8px; } .Uize_Widgets_Button_Css-small {font-size: 13px; line-height: 13px; padding: 6px 9px 7px 9px; } .Uize_Widgets_Button_Css-medium {font-size: 15px; line-height: 15px; padding: 10px 14px 11px 14px; } .Uize_Widgets_Button_Css-large {font-size: 21px; line-height: 21px; padding: 14px 17px 14px 17px; } ';
                }}});
    }});

Uize.module({name: 'Uize.Widgets.Button.Html',builder: function() {
        'use strict';
        return Uize.package({process: function(i) {
                var m = this, i = arguments[0], _a = i.idPrefix;
                return ('<a id="' + _a + '" class="' + i['mCssBindings_rootNodeClasses'] + '"><span id="' + _a + '-text' + '">' + i['text'] + '</span></a>\r\n');
            }});
    }});

Uize.module({name: 'Uize.Widgets.Button.Widget',superclass: 'Uize.Widget.V2',required: ['Uize.Widgets.Button.Html', 'Uize.Widgets.Button.Css'],builder: function(d_a) {
        'use strict';
        var d_b, d_c, d_d = true, d_e = false, d_f, d_g = {}, d_h = {disabled: 16,'': 8,over: 4,active: 2,playing: 1}, d_i = {mouseover: ['over', 'Over'],mouseout: ['', 'Out'],mousedown: ['down', 'Down'],mouseup: ['over', 'Up'],click: ['over', 'Click'],dblclick: ['over', 'Double Click']};
        return d_b = d_a.subclass({instanceMethods: {wireUi: function() {
                    function d_j(d_k) {
                        if (m.isWired) {
                            var d_l = d_k.type, d_m = d_l == 'click';
                            if (!m.d_n) {
                                m.d_n = d_d;
                                m.wireNode(m.d_o, {mouseout: d_j,mousedown: d_j,mouseup: d_j,dblclick: d_j});
                            }
                            if (d_m)
                                d_k.cancelBubble = d_d;
                            if (m.get('enabledInherited') && !m.get('busyInherited') && (d_l == 'dblclick' || !m.d_p || m.d_q || m.d_r)) {
                                var d_s = d_i[d_l];
                                m.set({d_t: d_s[0]});
                                m.fire({name: d_s[1],domEvent: d_k});
                                if (d_m) {
                                    m.d_u && m.d_u(d_k);
                                    (m.d_p ? m.d_q : m.d_v) && m.toggle('selected');
                                }
                            }
                        }
                    }
                    var m = this;
                    if (!m.isWired) {
                        var d_o = m.d_o = m.getNode();
                        if (d_o) {
                            m.wireNode(d_o, {mouseover: d_j,click: d_j});
                            d_a.doMy(m, 'wireUi');
                        }
                    }
                }},staticProperties: {cssModule: Uize.Widgets.Button.Css,addChildButton: function(d_w, d_x) {
                    var m = this, d_y = m.addChild(d_w, d_b);
                    d_y.wire('Click', function(d_z) {
                        if (d_x)
                            typeof d_x == 'string' ? m.fire(d_x) : d_x(d_z);
                        m.fire(d_z);
                    });
                    return d_y;
                }},stateProperties: {d_u: 'action',d_r: 'allowClickWhenSelected',d_v: 'clickToSelect',d_q: 'clickToDeselect',d_A: {name: 'displayState',derived: function(state, isOver, selected, playing, flavor, enabledInherited, busyInherited, statePrecedence, statePrecedenceMap) {
                        var m = this, d_t = state, d_B = !enabledInherited * 16 | (!d_t || busyInherited) * 8 | isOver * 4 | (d_t == 'down' || selected) * 2 | +playing, d_C = statePrecedenceMap, d_A = d_C[d_B];
                        if (d_A == d_c) {
                            for (var d_D = -1, d_E = statePrecedence, d_F = d_E.length; ++d_D < d_F; ) {
                                var d_G = d_E[d_D];
                                if (d_B & d_h[d_G]) {
                                    d_A = d_G;
                                    break;
                                }
                            }
                            d_C[d_B] = d_A;
                        }
                        return flavor + (d_A && ('-' + d_A));
                    }},d_H: {name: 'playing',value: d_e},d_p: {name: 'selected',value: d_e},d_t: {name: 'state',onChange: function() {
                        var m = this;
                        if (!m.d_t) {
                            if (d_f == m)
                                d_f = d_c;
                        } else if (m.d_t == 'over') {
                            d_f && d_f != m && d_f.set({d_t: ''});
                            d_f = m;
                        }
                    },value: ''},d_I: {name: 'isOver',derived: 'state: state == "over" || state == "down"'},d_E: {name: 'statePrecedence',value: ['playing', 'active', 'disabled', 'over', '']},d_C: {name: 'statePrecedenceMap',derived: function(statePrecedence) {
                        var d_E = statePrecedence, d_J = d_E.d_K || (d_E.d_K = d_E.join(','));
                        return (d_g[d_J] || (d_g[d_J] = {}));
                    }},d_L: {name: 'text',value: ''},d_M: {name: 'displayedTipText',derived: 'tipText,enabledInherited,busyInherited: enabledInherited && !busyInherited ? tipText : ""'},d_N: {name: 'tipText',value: ''},d_O: 'tooltip',d_P: {name: 'tooltipShown',derived: function(tooltip, wired, state, enabledInherited, selected) {
                        return !!(tooltip && wired && state == 'over' && enabledInherited && !selected);
                    },onChange: function() {
                        Uize.Tooltip && Uize.Tooltip.showTooltip(this.d_O, this.d_P);
                    }},d_Q: {name: 'flavor',value: 'normal'}},set: {html: Uize.Widgets.Button.Html},cssBindings: {displayState: 'value',busyInherited: ['', 'busy']},htmlBindings: {text: 'text:html',displayedTipText: ':title'}});
    }});

Uize.module('Uize.Widgets.Buttons');

Uize.module('Uize.Widgets.Buttons.Clear');

Uize.module({name: 'Uize.Widgets.Buttons.Clear.Widget',superclass: 'Uize.Widgets.Button.Widget',builder: function(e_a) {
        'use strict';
        return e_a.subclass({hasLoc: true,stateProperties: {text: {derived: 'loc_label'}}});
    }});

Uize.module({name: 'Uize.Widgets.Log.Css',superclass: 'Uize.Dom.CssModule',builder: function(c_a) {
        'use strict';
        return c_a.subclass({staticProperties: {css: function(c_b) {
                    return '.Uize_Widgets_Log_Css { position: relative; width: 100%; height: 185px; } .Uize_Widgets_Log_Css-contents { position: absolute; left: 0; top: 0; right: 0; bottom: 0; } .Uize_Widgets_Log_Css-heading { position: relative; text-align: center; height: 17px; } .Uize_Widgets_Log_Css-heading span { letter-spacing: 2px; } .Uize_Widgets_Log_Css-topRightButton { position: absolute; right: 2px; top: 2px; } .Uize_Widgets_Log_Css-body { position: absolute; padding: 0; left: 0; top: 29px; right: 0; bottom: 0; } .Uize_Widgets_Log_Css-messages { position: absolute; left: 2px; top: 0; right: 2px; bottom: 2px; tab-size: 3; font-size: 12px; color: #000; border: 1px solid #ddd; padding: 4px; overflow: auto; } ';
                }}});
    }});

Uize.module({name: 'Uize.Widgets.Log.Html',builder: function() {
        'use strict';
        return Uize.package({process: function(i) {
                function _a(_b) {
                    return m.cssClass(_b)
                }
                function _c(_d) {
                    return m.childHtml(_d)
                }
                var m = this, i = arguments[0], _e = i.idPrefix, _f = '" class="';
                return ('<div id="' + _e + _f + i['mCssBindings_rootNodeClasses'] + '">\r\n	<div class="' + _a('contents') + '">\r\n		<div class="' + _a('heading') + '"><span id="' + _e + '-title' + '">' + i['title'] + '</span>' + _c({name: 'clear',size: 'tiny',extraClasses: _a('topRightButton')}) + '</div>\r\n		<div id="' + _e + '-body' + _f + _a('body') + '"><div id="' + _e + '-messages' + _f + _a('messages') + '"></div></div>\r\n	</div>\r\n</div>\r\n\r\n');
            }});
    }});

Uize.module({name: 'Uize.Widgets.Log.Widget',superclass: 'Uize.Widgets.BoxWithHeading.Widget',required: ['Uize.Widgets.Buttons.Clear.Widget', 'Uize.Util.Html.Encode', 'Uize.Date.Formatter', 'Uize.Widgets.Log.Html', 'Uize.Widgets.Log.Css'],builder: function(e_a) {
        'use strict';
        var e_b = Uize.Util.Html.Encode.encode;
        function e_c(m) {
            var e_d = m.children.clear;
            e_d && e_d.set({enabled: m.e_e ? false : 'inherit'});
        }
        return e_a.subclass({omegastructor: function() {
                var m = this;
                m.addChild('clear', Uize.Widgets.Buttons.Clear.Widget).wire('Click', function() {
                    m.clear()
                });
                e_c(m);
            },instanceMethods: {clear: function() {
                    var m = this;
                    m.isWired ? m.setNodeInnerHtml('messages', '') : (m.e_f = null);
                    m.set({e_e: true});
                },log: function(e_g) {
                    var m = this, e_h = (m.e_i ? (Uize.Date.Formatter.format(null, m.e_j) + ' : ') : '') + e_b(e_g) + '<br/>';
                    if (m.isWired) {
                        m.injectNodeHtml('messages', e_h);
                        m.setNodeProperties('messages', {scrollTop: 1000000});
                    } else {
                        (m.e_f || (m.e_f = [])).push(e_h);
                    }
                    m.set({e_e: false});
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        e_a.doMy(m, 'wireUi');
                        m.setNodeInnerHtml('messages', (m.e_f || []).join(''));
                        m.setNodeProperties('messages', {scrollTop: 1000000});
                        m.e_f = null;
                    }
                }},stateProperties: {e_e: {name: 'isEmpty',onChange: function() {
                        e_c(this)
                    },value: true},e_i: {name: 'showTimestamp',value: true},e_k: {name: 'title',value: ''},e_j: {name: 'timestampFormat',value: '{hh}:{mm}:{ss}.{zzz}'}},set: {html: Uize.Widgets.Log.Html},staticProperties: {cssModule: Uize.Widgets.Log.Css},htmlBindings: {title: 'title:html'}});
    }});

Uize.module({name: 'Uize.Widgets.Log.InstanceEvents.Widget',superclass: 'Uize.Widgets.Log.Widget',required: ['Uize.Json', 'Uize.Str.Has'],builder: function(f_a) {
        
        var f_b;
        return f_a.subclass({stateProperties: {f_c: {name: 'instance',conformer: function(f_d) {
                        return (f_d != f_b && typeof f_d == 'object' && Uize.isFunction(f_d.wire) && Uize.isFunction(f_d.unwire) ? f_d : undefined);
                    },onChange: function() {
                        var m = this, f_e = m.f_e, f_c = m.f_c;
                        f_e && f_e.f_c.unwire(f_e.f_f);
                        m.clear();
                        m.log(m.localize(f_c ? 'startedWatching' : 'nothingToWatch'));
                        m.f_e = f_c ? {f_c: f_c,f_f: {'*': function(f_g) {
                                    if (!Uize.Str.Has.hasPrefix(f_g.name, 'Changed.')) {
                                        m.log(m.localize('customInstanceEvent') + ': ' + Uize.Json.to(f_g, 'mini'));
                                    }
                                },'Changed.*': function(f_g) {
                                    
                                    //My log is better, so ima use it
                                    //m.log();

                                    //injectNodeHtml didn't work, and this is a better solution anyway.
                                    var callstackUI = makeCallstackUI(m.localize('propertiesChangedEvent') + ': ' + Uize.Json.to(f_g.properties, 'mini'), getCallstack());

                                    var messages = document.getElementById(m.nodeId() + "-messages");

                                    messages.appendChild(callstackUI.html);

                                    var script = document.createElement('script');
                                    script.text = callstackUI.script;

                                    messages.appendChild(script);


                                }}} : f_b;
                        f_c && f_c.wire(m.f_e.f_f);
                    }}},set: {localized: {customInstanceEvent: 'INSTANCE EVENT',nothingToWatch: 'No valid object to watch',propertiesChangedEvent: 'PROPERTIES CHANGED',startedWatching: 'Started watching events'}}});
    }});

Uize.module({name: 'Uize.Widget.Tree',builder: function(c_a) {
        'use strict';
        var c_b, c_c = false;
        function c_d(m, c_e) {
            return (typeof c_e == 'string' ? c_e : m.getItemInfoFromSpecifier(c_e).itemSpecifier);
        }
        return c_a.subclass({instanceMethods: {getItemFromSpecifier: function(c_e) {
                    return this.getItemInfoFromSpecifier(c_e).item;
                },getItemInfoFromSpecifier: function(c_e) {
                    var m = this, c_f, c_g = m.c_g, c_h = [], c_i = [], c_j = Uize.isArray(c_e), c_k = m.c_k, c_l = c_j ? c_e : c_e.split(c_k), c_m = c_l.length;
                    for (var c_n = -1; ++c_n < c_m; ) {
                        var c_o = c_l[c_n];
                        if (c_j && typeof c_o == 'string')
                            c_o = Uize.findRecordNo(c_g, {title: c_o});
                        c_f = c_g[c_o];
                        if (c_f) {
                            c_g = c_f.items;
                            c_h.push(c_o);
                            c_i.push(c_f.title);
                        } else {
                            break;
                        }
                    }
                    return {item: c_f,titleParts: c_i,itemSpecifier: c_f ? c_h.join(c_k) : ''};
                },setExpandedDepth: function(c_p, c_e) {
                    var m = this;
                    m.traverseTree({itemHandler: function(c_f, c_e, c_q) {
                            m.setItemExpanded(c_e, c_q < c_p);
                        },itemSpecifier: c_e});
                },setItemExpanded: function(itemSpecifier, expanded) {
                    var item = this.getItemFromSpecifier(itemSpecifier);
                    //Set the given value, or toggle it if nothing is given
                    item.expanded = typeof expanded == 'boolean' ? expanded : !item.expanded;
                },
                collapseAllBut: function(c_s) {
                    var m = this, c_k = m.c_k;
                    c_s = c_d(m, c_s);
                    m.traverseTree({itemHandler: function(c_f, c_e) {
                            m.setItemExpanded(c_e, !(c_s + c_k).indexOf(c_e + c_k));
                        }});
                },traverseTree: function(c_t) {
                    var m = this, c_e = c_t.itemSpecifier, c_k = m.c_k, c_u = Uize.nop, c_v = c_t.itemHandler || c_u, c_w = c_t.beforeSubItemsHandler || c_u, c_x = c_t.afterSubItemsHandler || c_u;
                    function c_y(c_f, c_e, c_q) {
                        c_v(c_f, c_e, c_q);
                        var c_z = c_f.items;
                        if (c_z && c_z.length) {
                            c_w(c_f, c_e, c_q);
                            c_A(c_z, c_e + c_k, c_q + 1);
                            c_x(c_f, c_e, c_q);
                        }
                    }
                    function c_A(c_g, c_B, c_q) {
                        for (var c_C = -1, c_D = c_g.length; ++c_C < c_D; )
                            c_y(c_g[c_C], c_B + c_C, c_q);
                    }
                    if (c_e) {
                        c_e = c_d(m, c_e);
                        c_y(m.getItemFromSpecifier(c_e), c_e, 0);
                    } else {
                        c_A(m.c_g, '', 0);
                    }
                }},staticMethods: {itemHasChildren: function(c_f) {
                    return !!(c_f && c_f.items && c_f.items.length);
                },itemIsDivider: function(c_f) {
                    return !!c_f && c_f.title == '-' && !this.itemHasChildren(c_f);
                }},stateProperties: {c_k: {name: 'itemDelimiter',value: 'x'},c_g: {name: 'items',value: [],onChange: function() {
                        var m = this;
                        if (m.isWired) {
                            m.removeUi();
                            m.insertUi();
                        }
                    }},c_E: {name: 'value',
                    value: []}},set: {built: false}});
    }});

Uize.module({name: 'Uize.Widget.Tree.ListAbstract',required: ['Uize.Dom.Basics', 'Uize.Tooltip', 'Uize.Util.Html.Encode'],builder: function(d_a) {
        'use strict';
        var d_b = true, d_c = false, d_d = Uize.Dom.Basics, d_e = Uize.Tooltip, d_f = Uize.Util.Html.Encode.encode;
        return d_a.subclass({instanceMethods: {getTogglerTitle: function(d_g) {
                    return 'Click to ' + (d_g.expanded === d_c ? 'expand' : 'collapse');
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        var d_h = m.d_h, d_i = Uize.isPlainObject(d_h), d_j = d_d.getById(d_i ? d_h.node : d_h);
                        m.traverseTree({itemHandler: function(d_g, d_k) {
                                d_h && m.wireNode(d_k + 'TitleLink', {mouseover: function() {
                                        if (d_j) {
                                            var d_l;
                                            if (d_i) {
                                                d_l = d_h.show(d_g);
                                            } else {
                                                var d_m = m.d_m;
                                                if (d_m) {
                                                    d_l = d_m.call(m, d_g);
                                                } else {
                                                    var d_n = d_g.description;
                                                    if (d_n)
                                                        d_l = d_f(d_n);
                                                }
                                                d_l && d_d.setInnerHtml(d_j, d_l);
                                            }
                                            if (d_l) {
                                                d_e.showTooltip(d_j, d_b);
                                                m.fire({name: 'After Show Tooltip',item: d_g});
                                            }
                                        }
                                    },mouseout: function() {
                                        d_e.showTooltip(d_j, d_c);
                                        m.fire({name: 'After Hide Tooltip',item: d_g});
                                    }});
                            },beforeSubItemsHandler: function(d_g, d_k) {
                                m.wireNode([d_k + 'TogglerLink', 
                                    !d_g.link || m.d_o ? (d_k + 'TitleLink') : undefined], {click: function(d_p) {
                                        if (d_p.shiftKey || d_p.ctrlKey || d_p.metaKey) {
                                            m.setExpandedDepth(m.getItemFromSpecifier(d_k).expanded !== d_c ? 0 : (d_p.shiftKey ? 1 : 1000), d_k);
                                            d_p.cancelBubble = d_b;
                                        } else {
                                            m.setItemExpanded(d_k);
                                        }
                                    },focus: function() {
                                        this.blur()
                                    }});
                            }});
                        d_a.doMy(m, 'wireUi');
                    }
                }},stateProperties: {d_q: {name: 'alwaysLinkHeadings',value: d_c},d_o: {name: 'linksAlwaysToggleExpanded',value: d_c},d_h: 'tooltip',d_m: 'tooltipTemplate'}});
    }});

Uize.module('Uize.Widgets.NavTree');

Uize.module('Uize.Widgets.NavTree.List');

Uize.module({name: 'Uize.Widgets.NavTree.List.Css',superclass: 'Uize.Dom.CssModule',builder: function(c_a) {
        'use strict';
        return c_a.subclass({staticProperties: {css: function(c_b) {
                    return '.Uize_Widgets_NavTree_List_Css *, .Uize_Widgets_NavTree_List_Css *:link, .Uize_Widgets_NavTree_List_Css *:visited, .Uize_Widgets_NavTree_List_Css *:hover, .Uize_Widgets_NavTree_List_Css *:active { font-family: Arial; font-style: normal; border-bottom: none; color: #444; text-decoration: none; } a.Uize_Widgets_NavTree_List_Css-item:hover { border-bottom: 1px solid #ffa200; } .Uize_Widgets_NavTree_List_Css-item { font-size: 11px; } .Uize_Widgets_NavTree_List_Css-depthSpacer { display: inline-block; width: 15px; height: 10px; } .Uize_Widgets_NavTree_List_Css-divider { display: inline-block; border-top: 1px dotted #555; width: 150px; height: 0; margin-bottom: 4px; } .Uize_Widgets_NavTree_List_Css-bulletShell { width: 10px; height: 10px; padding-right: 5px; } .Uize_Widgets_NavTree_List_Css-bullet { display: inline-block; width: 10px; height: 10px; background: url(' + c_b.pathToModules + 'Uize/Widgets/NavTree/List/Css/bullet.gif) left top no-repeat; } .Uize_Widgets_NavTree_List_Css-togglerLink { display: inline-block; width: 9px; height: 9px; background-position: 0 0; background-repeat: no-repeat; } .Uize_Widgets_NavTree_List_Css-expanded { background-image: url(' + c_b.pathToModules + 'Uize/Widgets/NavTree/List/Css/expanded.gif); } .Uize_Widgets_NavTree_List_Css-collapsed { background-image: url(' + c_b.pathToModules + 'Uize/Widgets/NavTree/List/Css/collapsed.gif); } .Uize_Widgets_NavTree_List_Css-depth0, .Uize_Widgets_NavTree_List_Css-depth0:link, .Uize_Widgets_NavTree_List_Css-depth0:visited, .Uize_Widgets_NavTree_List_Css-depth0:hover, .Uize_Widgets_NavTree_List_Css-depth0:active { font-size: 14px; } .Uize_Widgets_NavTree_List_Css-depth1, .Uize_Widgets_NavTree_List_Css-depth1:link, .Uize_Widgets_NavTree_List_Css-depth1:visited, .Uize_Widgets_NavTree_List_Css-depth1:hover, .Uize_Widgets_NavTree_List_Css-depth1:active { font-size: 14px; } .Uize_Widgets_NavTree_List_Css-depth2, .Uize_Widgets_NavTree_List_Css-depth2:link, .Uize_Widgets_NavTree_List_Css-depth2:visited, .Uize_Widgets_NavTree_List_Css-depth2:hover, .Uize_Widgets_NavTree_List_Css-depth2:active { font-size: 13px; } .Uize_Widgets_NavTree_List_Css-depth3, .Uize_Widgets_NavTree_List_Css-depth3:link, .Uize_Widgets_NavTree_List_Css-depth3:visited, .Uize_Widgets_NavTree_List_Css-depth3:hover, .Uize_Widgets_NavTree_List_Css-depth3:active { font-size: 12px; } .Uize_Widgets_NavTree_List_Css-depth4, .Uize_Widgets_NavTree_List_Css-depth4:link, .Uize_Widgets_NavTree_List_Css-depth4:visited, .Uize_Widgets_NavTree_List_Css-depth4:hover, .Uize_Widgets_NavTree_List_Css-depth4:active { font-size: 11px; } ';
                }}});
    }});

Uize.module({name: 'Uize.Widgets.NavTree.List.Html',required: ['Uize.Str.Repeat'],builder: function() {
        'use strict';
        return Uize.package({process: function(input) {
                var m = this, output = [];
                var _a = m.Class, _b = [], _c = input.idPrefix, _d = '<div class="' + m.cssClass('divider') + '"></div>', _e = '<div class="' + m.cssClass('depthSpacer') + '"></div>';
                m.traverseTree({itemHandler: function(_f, _g, _h) {
                        var _i = _f.link, _j = _a.itemHasChildren(_f), _k = m.cssClass('item') + ' ' + m.cssClass('depth' + _h);
                        _b.push('<nobr>' + Uize.Str.Repeat.repeat(_e, _h) + (_a.itemIsDivider(_f) ? _d : ('<span class="' + m.cssClass('bulletShell') + '">' + (_j ? ('<a id="' + _c + '-' + _g + 'TogglerLink" href="javascript://" class="' + m.cssClass('togglerLink') + ' ' + m.cssClass(_f.expanded !== false ? 'expanded' : 'collapsed') + '" title="' + m.getTogglerTitle(_f) + '"></a>') : '<div class="' + m.cssClass('bullet') + '"></div>') + '</span>' + (_i || (_j && input.alwaysLinkHeadings) ? ('<a id="' + _c + '-' + _g + 'TitleLink" class="' + _k + '" href="' + (_i || 'javascript://') + '">' + _f.title + '</a>') : ('<span class="' + _k + '">' + _f.title + '</span>')))) + 
                        '</nobr><br/>');
                    },beforeSubItemsHandler: function(_f, _g) {
                        _b.push('<span id="' + _c + '-' + _g + 'Children" style="display:' + (_f.expanded !== false ? 'block' : 'none') + ';">');
                    },afterSubItemsHandler: function() {
                        _b.push('</span>\n')
                    }});
                output.push('<div id="', input.idPrefix, '" class="', m.rootNodeCssClasses(), '">\r\n', _b.join(''), '\r\n</div>');
                return output.join('');
            },input: {idPrefix: 'string'}});
    }});

Uize.module({name: 'Uize.Widgets.NavTree.List.Widget',superclass: 'Uize.Widget.Tree.ListAbstract',required: ['Uize.Widget.mV2', 'Uize.Widgets.NavTree.List.Html', 'Uize.Widgets.NavTree.List.Css', 'Uize.Dom.Classes'],builder: function(e_a) {
        'use strict';
        var e_b = Uize.Dom.Classes;
        return e_a.subclass({mixins: Uize.Widget.mV2,instanceMethods: {
            setItemExpanded: function(e_c, e_d) {
                    var m = this;

                    e_a.doMy(m, 'setItemExpanded', [e_c, e_d]);

                    if (m.isWired) {
                        var e_e = m.getItemFromSpecifier(e_c), e_f = m.getNode(e_c + 'TogglerLink');
                        e_d = e_e.expanded;
                        m.setNodeProperties(e_f, {title: m.getTogglerTitle(e_e)});
                        e_b.setState(e_f, [m.cssClass('collapsed'), m.cssClass('expanded')], e_d);
                        m.displayNode(e_c + 'Children', e_d);
                    }
                }
            },
            set: {
                built: true,html: Uize.Widgets.NavTree.List.Html
            },
            staticProperties: {
                cssModule: Uize.Widgets.NavTree.List.Css
            }
        });
    }});

Uize.module('Uize.Widgets.Tooltip');

Uize.module('Uize.Widgets.Tooltip.KeysValues');

Uize.module({name: 'Uize.Widgets.Tooltip.KeysValues.Css',superclass: 'Uize.Dom.CssModule',builder: function(c_a) {
        'use strict';
        return c_a.subclass({staticProperties: {css: function(c_b) {
                    return '.Uize_Widgets_Tooltip_KeysValues_Css { max-width: 600px; _width: 600px; max-height: 600px; _height: 600px; overflow: hidden; } .Uize_Widgets_Tooltip_KeysValues_Css-heading { text-align: center; white-space: nowrap; overflow: hidden; } .Uize_Widgets_Tooltip_KeysValues_Css-body { padding: 2px; } .Uize_Widgets_Tooltip_KeysValues_Css-table { width: 100%; background: #ddd; } .Uize_Widgets_Tooltip_KeysValues_Css-tableKey, .Uize_Widgets_Tooltip_KeysValues_Css-tableValue { font-size: 10px; color: #000; } .Uize_Widgets_Tooltip_KeysValues_Css-tableKey { text-align: right; text-transform: uppercase; background: #fff; padding-left: 6px; padding-right: 4px; } .Uize_Widgets_Tooltip_KeysValues_Css-tableValue { text-align: left; background: #f4f4f4; padding-left: 4px; padding-right: 6px; } ';
                }}});
    }});

Uize.module({name: 'Uize.Widgets.Tooltip.Css',superclass: 'Uize.Dom.CssModule',builder: function(c_a) {
        'use strict';
        return c_a.subclass({staticProperties: {css: function(c_b) {
                    return '.Uize_Widgets_Tooltip_Css { display: inline-block; padding: 10px; max-width: 400px; _width: 400px; margin: 0; } .Uize_Widgets_Tooltip_Css-contents { box-shadow: 0 0 10px rgba(0,0,0,.5); } ';
                }}});
    }});

Uize.module({name: 'Uize.Widgets.Tooltip.Widget',superclass: 'Uize.Widgets.BoxWithHeading.Widget',required: ['Uize.Widgets.Tooltip.Css'],builder: function(e_a) {
        'use strict';
        return e_a.subclass({staticProperties: {cssModule: Uize.Widgets.Tooltip.Css},htmlBindings: {heading: ['heading:html', 'heading:?'],body: ['body:html', 'body:?']}});
    }});

Uize.module({name: 'Uize.Widgets.Tooltip.KeysValues.Widget',superclass: 'Uize.Widgets.Tooltip.Widget',required: 'Uize.Widgets.Tooltip.KeysValues.Css',builder: function(f_a) {
        'use strict';
        return f_a.subclass({stateProperties: {f_b: 'data',body: {derived: function(data) {
                        var m = this, f_c = [];
                        if (data) {
                            f_c.push('<table class="' + m.cssClass('table') + '" cellspacing="1">');
                            var f_d = m.cssClass('tableKey'), f_e = m.cssClass('tableValue');
                            for (var f_f in data)
                                f_c.push('<tr valign="top">' + '<td class="' + f_d + '">' + f_f + '</td>' + '<td class="' + f_e + '">' + data[f_f] + '</td>' + '</tr>');
                            f_c.push('</table>');
                        }
                        return f_c.join('');
                    }}},staticProperties: {cssModule: Uize.Widgets.Tooltip.KeysValues.Css}});
    }});

Uize.module('UizeSite');

Uize.module({name: 'UizeSite.ModulesTree',builder: function() {
        return function() {
            return {Uize: {Array: {Dupes: 0,Join: 0,Order: 0,Sort: 0,Util: 0},Build: {All: 0,AuditStrings: 0,BuildStateCombinationLibraries: 0,Deploy: 0,Deps: 0,FileBuilders: {BuiltLibraryModules: 0,BuiltModules: 0,CompiledCss: 0,CompiledCssModules: 0,CompiledJstModules: 0,CompiledLocModules: 0,CompiledSimpleDataModules: 0,CompiledWidgetHtmltModules: 0,CompressedCssFiles: 0,CompressedModules: 0,InMemoryCompiledJstTemplates: 0,InMemoryHtmlInfo: 0,InMemoryModuleBuiltSize: 0,InMemoryModuleDirectDependencies: 0,InMemoryModuleMetadata: 0,InMemoryParsedSimpleDataFiles: 0,JstDerivedPages: 0,SimpleDataHtmlPages: 0,SimpleDataPages: 0,SimpleDocPages: 0,SourceFiles: 0,TempGeneratedNamespaceModules: 0,TempJsModules: 0,TempUizeModule: 0,UnprocessedFiles: 0},Files: {JsModules: 0,JstDerivedPages: 0,UnprocessedFiles: 0},FolderOrganizeJsModules: 0,ListJsModules: 0,Loc: 0,ModuleInfo: 0,NeatenJsFiles: 0,PluralsModules: 0,RunUnitTest: 0,RunUnitTests: 0,Scruncher: 0,Search: 0,ServicesSetup: 0,Templates: {Module: {
                                HeadComment: 0,ScrunchedHeadComment: 0,Widget: {VisualSampler: 0,VisualTests: 0,Widget: 0}}},Test: 0,TraceDependencies: 0,UpdateCopyrightNotices: 0,Util: {Whitespace: 0},WebServer: 0,Widget: 0,Wsh: 0},Class: {Value: 0},Color: {ColorsHslTransformer: 0,xCmyk: 0,xHsv: 0,xSvgColors: 0,xUtil: 0},Comm: {Ajax: 0,Iframe: {Upload: 0},Script: 0},Cookie: 0,Curve: {Examples: 0,Mod: 0,Rubber: 0},Data: {Combinations: 0,Compare: 0,Csv: 0,Diff: 0,Flatten: 0,JavaProperties: 0,MacStrings: 0,Mappings: 0,Matches: 0,NameValueRecords: 0,PathsTree: {CompactString: 0},Simple: 0,Util: 0},Date: {Formatter: 0},Doc: {Simple: 0,Sucker: 0},Dom: {Basics: 0,Classes: 0,CssModule: 0,Event: 0,Form: 0,Pos: 0,Text: 0,Tree: 0,Util: 0,VirtualEvent: 0,VirtualEvents: {Edge: 0,ModClick: 0,Remain: 0}},Event: {Bus: 0},Fade: {xFactory: 0,xSeries: 0},Flo: 0,Fx: {Scroll: 0,xShadows: 0},Json: {MultiLineStringLiteral: 0},Loc: {FileFormats: {AndroidStrings: 0,JavaProperties: 0,MacStrings: 0,Po: 0,ProjectStrings: {Csv: 0,Util: 0,Xliff: 0},QtTs: 0},Plurals: {Langs: {af: 0,ak: 0,am: 0,ar: 0,asa: 0,ast: 0,az: 0,be: 0,bem: 0,bez: 0,bg: 0,bh: 0,bm: 0,bn: 0,bo: 0,br: 0,
                                brx: 0,bs: 0,ca: 0,cgg: 0,chr: 0,ckb: 0,cs: 0,cy: 0,da: 0,de: 0,dv: 0,dz: 0,ee: 0,el: 0,en: 0,eo: 0,es: 0,et: 0,eu: 0,fa: 0,ff: 0,fi: 0,fil: 0,fo: 0,fr: 0,fur: 0,fy: 0,ga: 0,gd: 0,gl: 0,gsw: 0,gu: 0,guw: 0,gv: 0,ha: 0,haw: 0,he: 0,hi: 0,hr: 0,hu: 0,hy: 0,id: 0,ig: 0,ii: 0,'in': 0,is: 0,it: 0,iu: 0,iw: 0,ja: 0,jbo: 0,jgo: 0,ji: 0,jmc: 0,jv: 0,jw: 0,ka: 0,kab: 0,kaj: 0,kcg: 0,kde: 0,kea: 0,kk: 0,kkj: 0,kl: 0,km: 0,kn: 0,ko: 0,ks: 0,ksb: 0,ksh: 0,ku: 0,kw: 0,ky: 0,lag: 0,lb: 0,lg: 0,lkt: 0,ln: 0,lo: 0,lt: 0,lv: 0,mas: 0,mg: 0,mgo: 0,mk: 0,ml: 0,mn: 0,mo: 0,mr: 0,ms: 0,mt: 0,my: 0,nah: 0,naq: 0,nb: 0,nd: 0,ne: 0,nl: 0,nn: 0,nnh: 0,no: 0,nqo: 0,nr: 0,nso: 0,ny: 0,nyn: 0,om: 0,or: 0,os: 0,pa: 0,pap: 0,pl: 0,ps: 0,pt: 0,pt_PT: 0,rm: 0,ro: 0,rof: 0,ru: 0,rwk: 0,sah: 0,saq: 0,se: 0,seh: 0,ses: 0,sg: 0,sh: 0,shi: 0,si: 0,sk: 0,sl: 0,sma: 0,smi: 0,smj: 0,smn: 0,sms: 0,sn: 0,so: 0,sq: 0,sr: 0,ss: 0,ssy: 0,st: 0,sv: 0,sw: 0,syr: 0,ta: 0,te: 0,teo: 0,th: 0,ti: 0,tig: 0,tk: 0,tl: 0,tn: 0,to: 0,tr: 0,ts: 0,tzm: 0,uk: 0,ur: 0,uz: 0,ve: 0,vi: 0,vo: 0,vun: 0,wa: 0,wae: 0,wo: 0,xh: 0,xog: 0,yi: 0,yo: 0,zh: 0,zu: 0},ModuleTemplate: 0,RuleParser: 0,Util: 0},Pseudo: 0,Strings: {Metrics: 0,Util: 0}},Math: {
                        Blend: 0,LogicalPos: 0,Matrix2D: 0},Node: {Classes: 0,Event: 0,Form: 0,Tree: 0,Util: 0,VirtualEvent: {Edge: 0}},Oop: {mTreeInheritance: 0},Parse: {Code: {CStyleMultiLineComment: 0,CStyleSingleLineComment: 0,PoundComment: 0,StringLiteral: 0,Whitespace: 0},Items: 0,JavaProperties: {Document: 0,Property: 0,PropertyName: 0,PropertyValue: 0,UnicodeEscaped: 0},Po: {Document: 0,Name: 0,NameValue: 0,Value: 0},Xml: {Cdata: 0,Comment: 0,NodeList: 0,Tag: 0,TagAttribute: 0,TagAttributeValue: 0,TagAttributes: 0,TagOrAttributeName: 0,Text: 0,Util: 0}},Service: {Adapter: 0},Services: {FileBuilder: 0,FileBuilderAdapter: {Basic: 0},FileSystem: 0,FileSystemAdapter: {Node: 0,Wsh: 0},Loc: 0,LocAdapter: {Uize: 0},Setup: 0,Store: 0,StoreAdapter: {BrowserLocalStorage: 0,Memory: 0}},Str: {BackslashEscapedLinebreaks: 0,Builder: 0,Camel: 0,CharClass: 0,Discombobulator: 0,Has: 0,Limit: 0,Lines: 0,Repeat: 0,Replace: 0,Search: 0,SegmentHighlighter: 0,Split: 0,Trim: 0,Whitespace: 0},Template: {Module: 0},Templates: {Adoptable: 0,Calculator: 0,Calendar: 0,Collection: 0,CollectionItem: 0,ColorGrid: 0,List: 0,ProgressBar: 0,
                        SimpleDoc: 0,Text: {ProgressBar: 0,Table: 0,Tables: {Breakdown: 0,Histogram: 0,YinYangBreakdown: 0}}},Test: {Class: {mSpy: 0},ParserTest: 0,Performance: {ArrayBuildingStyles: 0,ArrayIterationStyles: 0,ArraySummingApproaches: 0,ConstrainImplementationApproaches: 0,TestingForUndefined: 0},Runner: 0,TestData: {Animals: 0,AnimalsAndPlants: 0,Plants: 0},Uize: {Array: {Dupes: 0,Join: 0,Order: 0,Sort: 0,Util: 0},Build: {Util: {Whitespace: 0}},Class: 0,Data: {Combinations: 0,Compare: 0,Csv: 0,Diff: 0,Flatten: 0,Mappings: 0,Matches: 0,NameValueRecords: 0,PathsTree: {CompactString: 0},Util: 0},Date: {Formatter: 0},Dom: {Classes: 0},Flo: 0,Loc: {FileFormats: {AndroidStrings: 0,JavaProperties: 0,MacStrings: 0,Po: 0,ProjectStrings: {Csv: 0,Xliff: 0},QtTs: 0},Plurals: {RuleParser: 0,Util: 0},Pseudo: 0,Strings: {Metrics: 0,Util: 0},Xliff: 0},Math: {Blend: 0},Node: {Classes: 0,Event: 0,Form: 0,Tree: 0,Util: 0,VirtualEvent: {Edge: 0}},Parse: {Code: {CStyleMultiLineComment: 0,CStyleSingleLineComment: 0,PoundComment: 0,StringLiteral: 0,Whitespace: 0},JavaProperties: {Document: 0,Property: 0,PropertyName: 0,
                                    PropertyValue: 0,UnicodeEscaped: 0},Po: {Document: 0,Name: 0,NameValue: 0,Value: 0},Xml: {Cdata: 0,Comment: 0,NodeList: 0,Tag: 0,TagAttribute: 0,TagAttributeValue: 0,TagAttributes: 0,TagOrAttributeName: 0,Text: 0}},Service: 0,Services: {FileSystem: 0,LocAdapter: 0},Str: {BackslashEscapedLinebreaks: 0,Builder: 0,Camel: 0,Has: 0,Limit: 0,Lines: 0,Repeat: 0,Replace: 0,Split: 0,Trim: 0,Whitespace: 0},Template: 0,Templates: {Calculator: 0,Calendar: 0,Collection: 0,CollectionItem: 0,List: 0,Text: {ProgressBar: 0,Table: 0}},Url: 0,Util: {Html: {Encode: 0,Entities: 0,EntityInfo: 0},ModuleNaming: 0,PropertyAdapter: 0,RegExpComposition: {Printf: 0},Spy: 0},Widget: {Form: {mDeclarativeElements: 0},mChildBindings: 0,mCssBindings: 0,mDeclarativeChildren: 0,mEventBindings: 0},Xml: 0},Widget: {mChildBindings: 0,mCssBindings: 0,mDeclarativeChildren: 0,mEventBindings: 0,mHtmlBindings: 0}},Tooltip: 0,Url: 0,Util: {Bucket: 0,Coupler: 0,Cycle: 0,Debug: 0,Dependencies: {Analyzer: 0,Async: 0},Html: {Encode: 0,Entities: 0,EntityInfo: 0},ModuleNameMatcher: 0,ModuleNaming: 0,Needs: 0,Oop: 0,PropertyAdapter: 0,
                        RegExpComposition: {Printf: 0},Spy: 0},Web: {library: 0,xDom: 0,xEffects: 0,xFilters: 0,xSelector: 0},Widget: {AutoSuggest: 0,AutoTooltip: 0,Bar: {Progress: 0,Slider: {Plus: 0,xSkin: 0}},Beam: 0,Bevel: 0,Button: {Checkbox: 0,Filter: 0,Toggle: 0,ValueDisplay: {Selector: 0}},Calculator: 0,CalculatorAbstract: 0,Calendar: 0,Captcha: {Recaptcha: 0},Collapsy: 0,Collection: {Dynamic: {Table: 0,xDialogEditable: 0}},CollectionItem: {Zooming: 0},ColorGrid: {Draggable: 0},Committer: 0,Count: 0,Dialog: {Confirm: 0,Form: 0,Iframe: 0,Picker: {Date: 0,Palette: {Selector: 0}},xResizable: 0},DirectionalPad: 0,Drag: {Move: {Drop: 0}},EdgeHugger: 0,EggTimer: 0,FilterGroups: 0,Fleeting: 0,Flip: 0,Form: {mDeclarativeElements: 0},FormDialog: 0,FormElement: {Captcha: {Recaptcha: 0},Select: 0,Text: 0},FormElementWarning: 0,FormElements: 0,FormWarnings: 0,HoverFader: 0,HtmltCompiler: 0,ImagePort: {Draggable: 0},ImageWipe: {xPresets: 0},InlinePicker: {Selector: 0},ListEditor: 0,Log: 0,MagView: 0,Mask: 0,Options: {Accordion: 0,FilterGroup: 0,Popup: 0,Selector: 0,Tabbed: {Fading: 0}},Page: {xDeferredLinks: 0},Pagination: 0,
                        Picker: {Date: 0,Palette: {Selector: 0}},Population: 0,PopupPalette: 0,Resizer: {Marquee: 0},Scrolly: 0,SegmentDisplay: {Matrix3x5: 0,Seven: 0},SlideShow: {AutoAdvance: {WithSlideSelectors: 0}},Stretchy: 0,Swap: {Deck: 0,Html: 0,Image: {Cycle: 0},xPresets: 0},TableSort: 0,TextInput: 0,TextInputBasic: 0,ThumbZoom: 0,Tree: {List: 0,ListAbstract: 0,Menu: 0,MenuAbstract: 0,Select: 0},V2: 0,mBindings: 0,mChildBindings: 0,mChildrenLinked: 0,mCssBindings: 0,mDeclarativeChildren: 0,mEventBindings: 0,mHtmlBindings: 0,mLoc: 0,mV2: 0,mWeb: 0,mWebBindings: 0,mWidthHeight: 0},Widgets: {BoxWithHeading: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Button: {Css: 0,Html: 0,Square: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Toggle: {OnOff: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0}},VisualSampler: 0,VisualTests: 0,Widget: 0},Buttons: {Char: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Clear: {Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},Directional: {Css: 0,Html: 0,VisualSampler: 0,
                                VisualTests: 0,Widget: 0},Reset: {Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},ViewSizeToggler: {Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},VisualSampler: 0,VisualTests: 0,Widget: 0}},Calculator: {Css: 0,Entry: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Calendar: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},ColorInfo: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},ColorSwatch: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},ColorsTransformer: {Html: 0,Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},ShiftAndRange: {Css: 0,Html: 0,Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},Container: {Html: 0,Widget: 0},CssUtil: 0,Dialog: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},DigitalClock: {Base: {Widget: 0},Hm: {Css: 0,Html: 0,VisualSampler: 0,
                                VisualTests: 0,Widget: 0},Hms: {Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0}},ImagePort: {Css: 0,Html: 0,TestAssets: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Log: {Css: 0,Html: 0,InstanceEvents: {VisualSampler: 0,VisualTests: 0,Widget: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},NavTree: {List: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Menu: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0}},ProgressBar: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},RatingStars: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},RgbSliders: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},SegmentDisplay: {Matrix3x5: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Separator: {Css: 0,Html: 0,Matrix3x5: {VisualSampler: 0,VisualTests: 0,Widget: 0},Seven: {VisualSampler: 0,VisualTests: 0,Widget: 0},Widget: 0},Seven: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},mSegmentColor: 0},SimpleStatsTable: {Css: 0,Html: 0,Sortable: {Css: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},TestsData: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},
                        Slider: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},StateValues: 0,Tools: {JsonSerializer: {Css: 0,Html: 0,Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},TestData: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},MultiLineStringSerializer: {Css: 0,Html: 0,Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},PseudoLocalizer: {Css: 0,Html: 0,Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},SourceVsResult: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0}},Tooltip: {Css: 0,KeysValues: {Css: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},VisualSampler: 0,VisualTests: 0,Widget: 0},VisualSampler: {Html: 0,Widget: 0},VisualTests: {TestCase: {Html: 0,Widget: 0},Widget: 0},WidgetViewer: {Css: 0,Html: 0,VisualSamplersViewer: {Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},Widget: 0},VisualTestsViewer: {Loc: {de_DE: 0,en_US: 0,en_ZZ: 0,fr_FR: 0,ja_JP: 0,nl_NL: 0,ru_RU: 0,zh_CN: 0},Widget: 0},Widget: 0}
                    },Xml: 0},UizeSite: {Build: {File: 0,FileBuilders: {DirectoryPage: 0,ExampleSourceCodePages: 0,ExamplesByKeywordIndexPages: 0,GoogleCodeSitemap: 0,Homepage: 0,InMemoryExamplesByKeywordLookup: 0,InMemoryExamplesInfoForSiteMap: 0,InMemoryModulesTree: 0,InMemoryNewsByYearLookup: 0,InMemoryUrlDictionary: 0,IndexPages: {Appendixes: 0,InMemoryHtmlFiles: 0,InMemoryNews: 0,JavaScriptGuides: 0,JavaScriptModules: 0,JavaScriptModulesToDo: 0,JavaScriptReference: 0,JavaScriptWhitePapers: 0},JavaScriptExamplesByModule: 0,JavaScriptModulesToDoPages: 0,LatestNewsRssFeed: 0,ModuleInfoModules: 0,ModuleReferencePages: 0,ModuleSourceCodePages: 0,NewsByYearIndexPages: 0,TempExamplesInfoForSiteMapModule: 0,TempExamplesModule: 0,TempModulesTreeModule: 0,TempSotuModule: 0,WidgetsToGo: {GoogleGadgetXmlPages: 0,IndexPage: 0,WidgetHomepages: 0,WidgetIframePages: 0}},Files: {GeneratedJsModules: 0,IndexPages: 0,JavaScriptModulesToDoPages: 0,SimpleDataPages: 0,SimpleDocPages: 0,SourceCodePages: 0,WidgetPages: 0},ServicesSetup: 0,Templates: {Module: {ScrunchedHeadComment: 0}},Util: 0},
                    Delve: {library: 0},DelvePageWriter: 0,DialogConfirm: 0,DialogDate: 0,Examples: 0,ExamplesInfoForSiteMap: 0,ModuleInfo: 0,ModulesTree: 0,Page: {Doc: {library: 0},Example: {Test: {library: 0},library: 0},Home: {library: 0},library: 0},ParamsInspector: {InlinePresets: 0},SiteMap: 0,Templates: {DataBar: 0,DelvePageHtml: 0,DelveUiHtml: 0,Dialog: {Confirm: 0,Picker: {Date: 0}},IndexPage: 0,JavaScriptSourceSample: 0,ListingsPage: 0,ParamsInspector: 0,ParamsTable: 0,SimpleDoc: 0,SimpleDocSample: 0,SlideShow: {Basic: 0,Wipes: 0},WidgetToGoTitle: 0},TestData: {Fruits: 0,Photos: 0},WidgetToGoPage: {Calculator: {library: 0},Calendar: {library: 0}},Widgets: {EnabledBusyDemo: {Css: 0,Html: 0,VisualSampler: 0,Widget: 0},ExampleInfoTooltip: {Css: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Follow: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},Footer: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},GetInvolved: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},LikeThis: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},ShareThis: {Css: 0,Html: 0,VisualSampler: 0,
                            VisualTests: 0,Widget: 0},SiteAssistant: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},SiteMenu: {Css: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},SiteNav: {Css: 0,VisualSampler: 0,VisualTests: 0,Widget: 0},TourBar: {Css: 0,Html: 0,VisualSampler: 0,VisualTests: 0,Widget: 0}}}};
        };
    }});

Uize.module({name: 'UizeSite.Delve',required: ['UizeSite.ModulesTree', 'Uize.Widgets.NavTree.List.Widget', 'Uize.Widget.TextInput', 'Uize.Widget.Options.Tabbed', 'Uize.Widgets.Log.InstanceEvents.Widget', 'Uize.Widget.TableSort', 'Uize.Util.Html.Encode', 'Uize.Util.Oop', 'Uize.Dom.Basics', 'Uize.Str.Has', 'Uize.Str.Limit', 'Uize.Str.Repeat', 'Uize.Array.Join', 'Uize.Data.PathsTree', 'Uize.Array.Sort', 'Uize.Json', 'Uize.Widgets.Tooltip.KeysValues.Widget', 'Uize.Tooltip', 'Uize.Data.Matches'],superclass: 'Uize.Widget.Page',builder: function(d_a) {
        'use strict';
        var d_b, d_c = Uize.Util.Html.Encode.encode, d_d = Uize.Dom.Basics;
        function d_e(d_f) {
            return 'outerHTML' in d_f ? d_f.outerHTML : new XMLSerializer().serializeToString(d_f);
        }

        var d_g = {}, d_h = {}, d_i = Uize.lookup(Uize.Data.PathsTree.toList(UizeSite.ModulesTree(), '.'), 1, true), d_j = Uize.lookup(['Array', 'Boolean', 'Function', 'Number', 'Object', 'RegExp', 'String', 'Window', 'XMLHttpRequest'], 1, true), d_k = '-- object is undefined, not valid, or is not loaded on page --', 
        d_l = '------------------------------------------------------------------------------', d_m = {d_n: '- - - - - - - - - - - - - - - - - - - - - - - - - - - -'}, d_o = 'javascript:page.treeItemClicked ()', d_p = {widgetsOnPageTree: {d_n: 'All widgets on the page, as a tree',d_q: function() {
                    var m = this, d_r = [], d_s = d_t(m);
                    if (d_s) {
                        var d_u = function(d_v, d_w, itemSpecifier) {
                            var d_x = d_v.children, d_y = Uize.keys(d_x).sort();
                            d_w++;
                            var obj = {
                                    title: d_z(m, d_v),
                                    link: d_o,
                                    expanded: d_w == 1,
                                    objectPath: d_A(m, d_v),
                                    items: d_y.length ? Uize.map(d_y, function(d_B, index) {
                                        return d_u(d_x[d_B], d_w, itemSpecifier + "x" + index);
                                    }) : undefined
                                };
                            forceObservable(obj, "expanded");
                            //TODO: Persist entire pinned path and display to user so they can remove/add them
                            persistObserv(obj.expandedObserv, obj.objectPath);

                            //And don't forget to make sure the observable causes the proper function to be called

                            obj.expandedObserv.subscribe(function() {
                                //Because of loops in our subscription logic... fuuuuu
                                m.children.treeList.setItemExpanded(itemSpecifier, obj.expandedObserv());
                            });

                            return obj;
                        };
                        d_r[0] = d_u(d_s, 0, "0");
                    }
                    return d_r;
                }},widgetsOnPageList: {d_n: 'All widgets on the page',d_q: function() {
                    return d_C(this)
                }},widgetsOnPageGroupedByClass: {d_n: 'All widgets on the page, grouped by class',d_q: function() {
                    var m = this, d_D = d_E(m);
                    return Uize.map(Uize.Array.Sort.sortBy(Uize.Data.Matches.values(Uize.keys(d_D), function(d_F) {
                        return d_D[d_F].length
                    }), function(d_F) {
                        return (((10000 - d_D[d_F].length) + '').slice(1) + d_F);
                    }), function(d_F) {
                        var d_G = d_D[d_F];
                        return {
                            title: d_F + ' (' + d_G.length + ')',link: d_o,expanded: false,objectPath: d_F,items: Uize.map(d_G, function(d_H) {
                                var d_I = d_A(m, d_H);
                                return {title: d_I,link: d_o,objectPath: d_I};
                            })};
                    });
                }},widgetsDisabled: {d_n: 'Widgets that are in the disabled state',d_q: function() {
                    return d_C(this, function(d_v) {
                        return !d_v.get('enabledInherited')
                    });
                }},widgetsNotWired: {d_n: 'Widgets that are not wired',d_q: function() {
                    return d_C(this, function(d_v) {
                        return !d_v.isWired
                    });
                }},wiredWidgetsMissingSomeNodeDOM: {d_n: 'Wired widgets that are missing some DOM nodes',d_q: function() {
                    var m = this;
                    return d_C(m, function(d_v) {
                        var d_J = false;
                        if (d_v.isWired) {
                            var d_K = d_L(m, d_v);
                            for (var d_M in d_K) {
                                if (!d_K[d_M]) {
                                    d_J = true;
                                    break;
                                }
                            }
                        }
                        return d_J;
                    });
                }},wiredWidgetsMissingAllNodeDOM: {d_n: 'Wired widgets that appear to missing all DOM nodes',d_q: function() {
                    var m = this;
                    return d_C(m, function(d_v) {
                        var d_J = false;
                        if (d_v.isWired) {
                            var d_K = d_L(m, d_v);
                            for (var d_M in d_K) {
                                d_J = true;
                                if (d_K[d_M]) {
                                    d_J = false;
                                    break;
                                }
                            }
                        }
                        return d_J;
                    });
                }},widgetsWithLocalizedStringsSpecified: {
                d_n: 'Widgets for which localized strings are specified',d_q: function() {
                    return d_C(this, function(d_v) {
                        return !Uize.isEmpty(d_v.get('localized'))
                    });
                }},widgetsWithRemappedNodes: {d_n: 'Widgets that have some remapped DOM nodes',d_q: function() {
                    return d_C(this, function(d_v) {
                        return !Uize.isEmpty(d_v.get('nodeMap'))
                    });
                }},widgetsWithValueInterface: {d_n: 'Widgets that implement the value interface',d_q: function() {
                    return d_C(this, function(d_v) {
                        return 'value' in d_v.get()
                    });
                }},divider1: d_m,loadedModulesTree: {d_n: 'All loaded modules, as a tree',d_q: function() {
                    var m = this;
                    function d_N(d_O, d_P, d_w) {
                        return d_P && Uize.map(Uize.keys(d_P).sort(), function(d_Q) {
                            var d_R = d_O + (d_O && '.') + d_Q;
                            return {title: d_R,link: d_o,expanded: !d_w,objectPath: d_R,items: d_N(d_R, d_P[d_Q], d_w + 1)};
                        });
                    }
                    return d_N('', Uize.Data.PathsTree.fromList(d_S(m), '.'), 0);
                }},loadedModulesList: {d_n: 'All loaded modules (listed in build order)',d_q: function() {
                    return d_T(this)
                }},widgetClasses: {d_n: 'All widgets classes',d_q: function() {
                    return d_U(this);
                }},
            widgetClassesInstancesCreated: {d_n: 'Widget classes with instances created',d_q: function() {
                    return d_U(this, true);
                }},widgetClassesNoInstancesCreated: {d_n: 'Widget classes with no instances created',d_q: function() {
                    return d_U(this, false);
                }},nonWidgetClasses: {d_n: 'All non-widget loaded modules',d_q: function() {
                    var m = this;
                    return d_T(m, function(d_R) {
                        return !d_V(m, d_R)
                    });
                }},uizeModules: {d_n: 'All UIZE loaded modules',d_q: function() {
                    return d_T(this, d_W)
                }},nonUizeModules: {d_n: 'All non-UIZE loaded modules',d_q: function() {
                    return d_T(this, function(d_R) {
                        return !d_W(d_R)
                    });
                }},divider2: d_m,allWidgetDomNodes: {d_n: 'All accessed widget DOM nodes',d_q: function() {
                    return d_X(this);
                }},allPresentWidgetDomNodes: {d_n: 'All present accessed widget DOM nodes',d_q: function() {
                    return d_X(this, function(d_f) {
                        return d_f
                    });
                }},allMissingWidgetDomNodes: {d_n: 'All missing accessed widget DOM nodes',d_q: function() {
                    return d_X(this, function(d_f) {
                        return !d_f
                    });
                }},unaccessedWidgetDomNodes: {d_n: 'All unaccessed widget DOM nodes',
                d_q: function() {
                    return d_Y(this, true)
                }},domNodesWithIdsNotBelongingToWidgets: {d_n: 'DOM nodes with IDs not belonging to widgets',d_q: function() {
                    return d_Y(this, false)
                }}};
        var d_Z = '.children.';
        function d_0(d_1, d_2) {
            return ('<a' + ' href="javascript://"' + ' class="objectLink"' + ' title="' + d_c(d_2 || d_1) + '"' + '>' + (d_1.indexOf(d_Z) > -1 ? Uize.Array.Join.hugJoin(d_1.split(d_Z), '<b>', '</b>', d_Z) : d_1) + '</a>');
        }
        function d_W(d_R) {
            return Uize.Str.Has.hasPrefix(d_R, 'Uize');
        }
        function d_3(d_4, d_n, d_5, d_6, d_7, d_8) {
            d_4.push('<div class="objectInspectorTabContentsSectionTitle">' + d_n + (d_5 ? ('<span class="objectInspectorTabContentsSectionSubtitle">&nbsp;&nbsp;-&nbsp;&nbsp;' + d_5 + '</span>') : '') + '</div>', d_8 ? '<pre>' : '', ((Uize.isArray(d_6) ? d_6.join('\n') : d_6) || d_7) + '\n', d_8 ? '</pre>' : '');
        }
        function d_9() {
            var m = this;
            if (m.isWired && m.children.objectInspectorTabs + '' == 'documentation') {
                var d_ba = m.d_ba;
                if (d_ba != m.d_bb) {
                    var d_bc = m.getNode('documentation').contentWindow;
                    if (d_bc)
                        d_bc.location.href = d_ba;
                    m.d_bb = d_ba;
                }
            }
        }
        function d_bd() {
            var m = this;
            d_be(m);
            d_bf(m);
            d_bg(m);
            d_9.call(m);
        }
        function d_bh() {
            var d_bi = this.children.objectInspectorEventsLog;
            d_bi && d_bi.set({instance: this.d_bj});
        }
        function d_bk() {
            var d_bl = this.children.objectEntry;
            d_bl && d_bl.set({value: this.d_bm});
        }
        function d_bn() {
            var m = this, d_bo = m.children.treeList;
            if (d_bo) {
                var d_q = d_p[m.d_bp].d_q;
                d_bo.set({items: d_q ? d_q.call(m) : []})
            }
        }
        function d_bq() {
            var m = this;
            if (m.isWired) {
                m.setNodeValue('treeListDropdown', m.d_bp);
            }
        }
        function d_br() {
            var m = this;
            if (m.isWired) {
                var d_bs = m.d_bs;
                m.setNodeValue('windowInspected', d_bs ? Uize.Str.Limit.limitLength(d_bs.location.href, 120) : 'no window being inspected');
                m.setNodeProperties('windowInspected', {title: d_bs ? d_bs.document.title : ''});
            }
        }
        function evalInContext(context, expression) {
            var d_bs = context.d_bs;
            if (d_bs && expression) {
                try {
                    return d_bs.eval('(' + expression + ')')
                } catch (d_bv) {
                }
            }
        }
        function d_bw(m, d_2) {
            var d_bx = d_by(m, d_2), d_bz = d_bx == d_b ? d_bz + '' : d_bA(m, d_bx) ? 'widget' : Uize.Util.Oop.isUizeClass(d_bx) ? 'class' : d_d.isNode(d_bx) ? 'DOM node' : d_bx.constructor == m.d_bs.Object ? 'simple object' : typeof d_bx, d_bB = {'what it is': d_bz};
            if (d_bx != d_b)
                d_bB['instance of'] = Uize.Util.Oop.getClassName(d_bx.constructor);
            if (d_bz == 'widget') {
                var d_bC = 0, d_bD = d_bx;
                while (d_bD = d_bD.parent)
                    d_bC++;
                d_bB['depth in tree'] = d_bC || 'this is the root widget';
                d_bB.children = Uize.totalKeys(d_bx.children) || 'no children';
                d_bB.siblings = (d_bx.parent && (Uize.totalKeys(d_bx.parent.children) - 1)) || 'no siblings';
                d_bB['localized strings'] = Uize.totalKeys(d_bx.get('localized')) || 'no localized strings';
                d_bB['DOM nodes'] = d_bE(m, d_bx).d_bF;
            } else if (d_bz == 'class') {
                d_bB.superclass = Uize.Util.Oop.getClassName(d_bx.superclass) || 'this is the root class';
                d_bB['inheritance depth'] = Uize.Util.Oop.getInheritanceChain(d_bx).length - 1 || 'this is the root class';
                d_bB.subclasses = d_bG(m, d_bx).length || 'no subclasses on this page';
                if (d_V(m, d_bx))
                    d_bB['widget instances'] = d_bH(m, function(d_v) {
                        return d_v.constructor == d_bx
                    }).length || 'no instances of this class';
            } else if (d_bz == 'DOM node') {
                d_bB.id = d_bx.id;
                d_bB.tag = d_bx.tagName;
                var d_v = d_bI(m, d_bx.id);
                d_bB['owner widget'] = d_v ? d_A(m, d_v) : 'not owned by a widget'
                ;
                d_bB['owner widget class'] = d_v ? Uize.Util.Oop.getClassName(d_v.constructor) : 'not owned by a widget';
            }
            if (Uize.Util.Oop.isUizeClassInstance(d_bx) && 'value' in d_bx.get())
                d_bB.value = d_bx.valueOf();
            m.children.infoTooltip.set({heading: d_2,data: d_bB});
        }
        function d_bJ(m, d_bK) {
            Uize.Tooltip.showTooltip(m.children.infoTooltip.getNode(), d_bK);
        }
        function d_t(m) {
            var d_bs = m.d_bs;
            return d_bs && (d_bs.zPage || d_bs.page);
        }
        function d_bL(m) {
            var d_s = d_t(m);
            return d_s && (d_s == m.d_bs.zPage ? 'zPage' : 'page');
        }
        function d_z(m, d_v) {
            return (d_v.get('name') || (d_v == d_t(m) ? d_bL(m) : ''));
        }
        function d_S(m) {
            var d_bM = m.d_bs.Uize;
            return ((d_bM.getModulesBuilt && d_bM.getModulesBuilt()) || Uize.keys(d_bM.getModuleByName('*')));
        }
        function d_A(m, d_v) {
            var d_I = [];
            while (d_v) {
                d_I.unshift(d_z(m, d_v));
                d_v = d_v.parent
            }
            return d_I.join('.children.');
        }
        function d_L(m, d_v) {
            if (!m.d_bN) {
                var d_bO = 'THIS_IS_THE_NAME_FOR_A_NODE_THAT_SHOULD_NEVER_EXIST_IN_PRACTICE', d_K;
                d_v.getNode(d_bO);
                for (var d_bP in d_v) {
                    var d_bQ = d_v[d_bP];
                    if (d_bQ != d_b && typeof d_bQ == 'object' && d_bO in d_bQ) {
                        m.d_bN = d_bP;
                        delete d_bQ[d_bO];
                        break;
                    }
                }
            }
            return d_v[m.d_bN] || {};
        }
        function d_bR(m) {
            var d_bS = m.d_bs.Uize;
            return (d_bS.Node || d_bS.Dom.Basics).find;
        }
        function d_bT(m) {
            var d_bS = m.d_bs.Uize;
            return (d_bS.Node || d_bS.Dom.Pos).getCoords;
        }
        function d_bE(m, d_v) {
            var d_K = d_L(m, d_v), d_bU = Uize.copy(d_K), d_bV = d_v.get('idPrefix'), d_bW = d_bV + '-', d_bX = d_bW.length, d_bY = {}, d_bZ = 0, d_b0 = 0, d_b1 = 0, d_f;
            for (var d_M in d_K) {
                if (d_f = d_K[d_M]) {
                    d_bY[d_f.id] = 1;
                    d_bZ++;
                } else {
                    d_b0++;
                }
            }
            d_bR(m)({id: function(d_b2) {
                    if (d_b2 && !(d_b2 in d_bY) && (d_b2 == d_bV || Uize.Str.Has.hasPrefix(d_b2, d_bW))) {
                        d_b1++;
                        d_bU[d_b2.slice(d_bX)] = this;
                    }
                }});
            var d_b3 = d_bZ + d_b0, d_b4 = d_b3 + d_b1, d_b5 = d_b3 == d_b4;
            return {d_K: d_K,d_bU: d_bU,d_b4: d_b4,d_b3: d_b3,d_b1: d_b1,d_bZ: d_bZ,d_b0: d_b0,d_bF: d_b4 ? d_b4 + ' (' + (d_b5 ? 'all accessed' : d_b1 == d_b4 ? 'none accessed' : d_b3 + ' accessed, ' + d_b1 + ' unaccessed') + (d_b3 ? (', ' + (d_b5 && (!d_bZ || !d_b0) ? (d_bZ ? 'all present' : 'all missing') : d_b0 + ' known missing')) : '') + ')' : 'no DOM nodes'};
        }
        function d_bI(m, d_b2) {
            if (d_b2) {
                var d_b6 = function(d_bD) {
                    if (d_bD.get('idPrefix') == d_bV) {
                        return d_bD;
                    } else {
                        var d_x = d_bD.children, d_v;
                        for (var d_B in d_x) {
                            if (d_v = d_b6(d_x[d_B]))
                                return d_v;
                        }
                    }
                }, d_b7 = d_b2.indexOf('-'), d_bV = d_b7 > -1 ? d_b2.slice(0, d_b7) : d_b2;
                return d_b6(d_t(m));
            }
        }
        function d_by(m, d_bx) {
            return typeof d_bx == 'string' ? evalInContext(m, d_bx) : d_bx;
        }
        function d_T(m, d_b8) {
            var d_r = [], d_b9 = d_S(m);
            Uize.forEach(d_b8 ? d_b9.sort() : d_b9, function(d_ca) {
                d_ca && (!d_b8 || d_b8(d_ca)) && d_r.push({title: d_ca,link: d_o,objectPath: d_ca});
            });
            return d_r;
        }
        function d_bG(m, d_cb) {
            return d_T(m, function(d_R) {
                var d_ca = d_by(m, d_R);
                return d_ca != d_cb && Uize.Util.Oop.inheritsFrom(d_ca, d_cb);
            });
        }
        function d_E(m) {
            var d_D = {};
            d_bH(m, function(d_v) {
                var d_F = d_v.constructor.moduleName;
                (d_D[d_F] || (d_D[d_F] = [])).push(d_v);
            });
            return d_D;
        }
        function d_U(m, d_cc) {
            var d_D = d_E(m);
            return d_T(m, function(d_R) {
                return ((d_cc == d_b || !!(d_D[d_R] || d_g).length == d_cc) && d_V(m, d_R));
            });
        }
        function d_bH(m, d_cd) {
            var d_ce = [];
            function d_cf(d_v, d_I) {
                d_I += d_z(m, d_v);
                (!d_cd || d_cd(d_v)) && d_ce.push(d_I);
                d_I += '.children.';
                var d_x = d_v.children;
                for (var d_B in d_x)
                    d_cf(d_x[d_B], d_I);
            }
            d_cf(d_t(m), '');
            return d_ce;
        }
        function d_C(m, d_cd) {
            return Uize.map(d_bH(m, d_cd).sort(), function(d_2) {
                return {title: d_2,link: d_o,objectPath: d_2};
            });
        }
        function d_X(m, d_cg) {
            var d_r = [];
            function d_cf(d_v) {
                if (d_v) {
                    var d_K = d_L(m, d_v), d_ch;
                    for (var d_M in d_K) {
                        var d_f = d_K[d_M];
                        (!d_cg || d_cg(d_f)) && d_r.push({title: '#' + (d_f ? d_f.id || ' [DOM NODE WITH NO ID]' : d_v.get('idPrefix') + (d_M && ('-' + d_M)) + ' [MISSING]'),link: d_o,objectPath: (d_ch || (d_ch = d_A(m, d_v) + '.getNode (\'')) + d_M + '\')'});
                    }
                    var d_x = d_v.children;
                    for (var d_B in d_x)
                        d_cf(d_x[d_B]);
                }
            }
            d_cf(d_t(m));
            return d_r;
        }
        function d_Y(m, d_ci) {
            var d_cj = {}, d_ck = {};
            function d_cf(d_v) {
                if (d_v) {
                    d_ck[d_v.get('idPrefix')] = 1;
                    var d_K = d_L(m, d_v), d_f, d_b2;
                    for (var d_M in d_K) {
                        if ((d_f = d_K[d_M]) && (d_b2 = d_f.id))
                            d_cj[d_b2] = 1;
                    }
                    var d_x = d_v.children;
                    for (var d_B in d_x)
                        d_cf(d_x[d_B]);
                }
            }
            d_cf(d_t(m));
            return Uize.Array.Sort.sortBy(Uize.map(d_bR(m)({id: function(d_b2) {
                    if (!d_b2 || d_cj[d_b2])
                        return false;
                    var d_cl = d_ck[d_b2];
                    if (!d_cl) {
                        var d_b7 = d_b2.indexOf('-');
                        d_cl = d_b7 > -1 && d_ck[d_b2.slice(0, d_b7)];
                    }
                    return d_cl == d_ci;
                }}), function(d_f) {
                var d_b2 = d_f.id;
                return {title: '#' + d_b2,link: d_o,objectPath: 'document.getElementById (\'' + d_b2 + '\')'};
            }), 'value.title');
        }
        function d_V(m, d_cb) {
            return Uize.Util.Oop.inheritsFrom(d_by(m, d_cb), m.d_bs.Uize.Widget);
        }
        function d_bA(m, d_bx) {
            return Uize.isInstance(d_bx) && d_V(m, d_bx);
        }
        function d_cm(m, d_n, d_cn) {
            var d_bs = m.launchPopup({name: 'delveReport',width: 980,height: 650}), d_co = d_bs.document;
            d_co.open('text/html');
            d_co.writeln(['<html>', '<head>', '<title>REPORT: ' + d_n + '</title>', '</head>', '<body>', '<pre>' + d_c(d_cn) + '</pre>', '</body>', '</html>'].join('\n'));
            d_co.close();
            d_bs.focus();
        }
        function d_be(m) {
            var d_bx = m.d_bj;
            if (m.isWired && m.children.objectInspectorTabs + '' == 'summary' && d_bx !== m.d_cp) {
                var d_bm = m.d_bm, d_4 = [];
                if (d_bx != d_b) {
                    var d_cq = d_bA(m, d_bx), d_cr = !d_cq && d_V(m, d_bx);
                    d_3(d_4, 'SUMMARY FOR', '', d_0(d_bm), '', true);
                    d_3(d_4, 'INSTANCE OF', '', d_0(Uize.Util.Oop.getClassName(d_bx.constructor)), '', true);
                    var d_cs = function(d_n, d_ce, d_7) {
                        d_3(d_4, d_n, 
                        d_ce.length + ' widgets', d_ce.length ? ('<table class="objectInspectorTabContentsInfoTable">' + '<tr class="heading">' + '<td>WIDGET PATH</td>' + '<td>CLASS</td>' + '</tr>' + Uize.map(d_ce, function(d_v) {
                            d_v = d_by(m, d_v);
                            return ('<tr>' + '<td>' + d_0(d_A(m, d_v)) + '</td>' + '<td>' + d_0(Uize.Util.Oop.getClassName(d_v.constructor)) + '</td>' + '</tr>');
                        }).join('') + '</table>') : ('<pre>' + d_7 + '</pre>'));
                    };
                    if (d_cq) {
                        var d_bD = d_bx.parent, d_ct = [];
                        while (d_bD) {
                            d_ct.push(d_bD);
                            d_bD = d_bD.parent;
                        }
                        d_cs('PARENTAGE', d_ct, 'no parents');
                        var d_cu = [], d_x = d_bx.children;
                        for (var d_B in d_x)
                            d_cu.push(d_x[d_B]);
                        d_cs('CHILDREN', d_cu, 'no children');
                        var d_cv = [], d_cw = d_bx.parent && d_bx.parent.children, d_cx;
                        for (var d_cy in d_cw)
                            (d_cx = d_cw[d_cy]) != d_bx && d_cv.push(d_cx);
                        d_cs('SIBLINGS', d_cv, 'no siblings');
                        var d_cz = d_bE(m, d_bx), d_K = d_cz.d_K, d_bU = d_cz.d_bU, d_cA = Uize.keys(d_bU).sort(), d_cB = d_A(m, d_bx) + '.getNode (\'';
                        d_3(d_4, 'DOM NODES', d_cz.d_bF, d_cA.length ? ('<table class="objectInspectorTabContentsInfoTable">' + '<tr class="heading">' + '<td>NODE NAME</td>' + '<td>ACCESSED</td>' + 
                        '<td>EXISTS</td>' + '<td>ID</td>' + '<td>TAG</td>' + '</tr>' + Uize.map(d_cA, function(d_M) {
                            var d_f = d_bU[d_M], d_cC = d_M in d_K;
                            return ('<tr>' + '<td>' + d_0(d_M || '[ROOT NODE]', d_cC ? d_cB + d_M + '\')' : 'document.getElementById (\'' + d_f.id + '\')') + '</td>' + '<td style="text-align:center;">' + (d_cC ? 'yes' : '<b>NO</b>') + '</td>' + '<td style="text-align:center;">' + (d_f ? 'present' : '<b>MISSING</b>') + '</td>' + '<td>' + (d_f ? d_f.id : '-----') + '</td>' + '<td style="text-align:center;">' + (d_f ? d_f.tagName : '-----') + '</td>' + '</tr>');
                        }).join('') + '</table>') : '<pre>no DOM nodes</pre>');
                        var d_cD = d_bx.get('localized'), d_cE = Uize.keys(d_cD).sort(), d_cF = d_bm + '.localize (', d_cG = function(d_cH) {
                            var d_cI = d_cD[d_cH], d_cJ = 0, d_cK = {}, d_cL = /\{([^\}]+)\}/g, d_cM;
                            while (d_cM = d_cL.exec(d_cI)) {
                                d_cK[d_cM[1]] = '';
                                d_cJ++;
                            }
                            return (d_cF + Uize.Json.to(d_cH) + (d_cJ ? ',' + Uize.Json.to(d_cK, 'mini') : '') + ')');
                        };
                        d_3(d_4, 'LOCALIZED STRINGS', d_cE.length + ' strings', d_cE.length ? ('<table class="objectInspectorTabContentsInfoTable">' + '<tr class="heading">' + '<td>NAME</td>' + '<td>VALUE</td>' + '</tr>' + 
                        Uize.map(d_cE, function(d_cH) {
                            return ('<tr>' + '<td>' + d_0(d_cH, d_cG(d_cH)) + '</td>' + '<td>' + d_cD[d_cH] + '</td>' + '</tr>');
                        }).join('') + '</table>') : '<pre>no localized strings specified for this widget</pre>');
                        var d_cN = d_bx.get('container') || d_bx.getNode('shell') || d_bx.getNode() || (d_bx.parent && d_bx.parent.getNode(d_bx.get('name')));
                        d_3(d_4, 'HTML', '', d_c(d_cN ? d_e(d_cN) : 'this widget has no container node, shell node, or root node'), '', true);
                    } else if (Uize.Util.Oop.isUizeClass(d_bx)) {
                        var d_cO = Uize.Util.Oop.getInheritanceChain(d_bx);
                        d_3(d_4, 'INHERITANCE CHAIN', 'inheritance depth: ' + (d_cO.length - 1), Uize.map(d_cO, function(d_cb) {
                            return d_0(d_cb.moduleName)
                        }).join(' &minus;> '), 'this is the root class', true);
                        var d_cP = d_bG(m, d_bx);
                        d_3(d_4, 'SUBCLASSES (ON THIS PAGE)', d_cP.length + ' subclasses', Uize.map(d_cP, function(d_cQ) {
                            return (d_0(d_cQ.title) + (d_by(m, d_cQ.objectPath).superclass == d_bx ? ' - <b>DIRECT SUBCLASS</b>' : ''));
                        }), 'no subclasses on this page', true);
                        d_cr && d_cs('INSTANCES OF THIS WIDGET CLASS', d_bH(m, 
                        function(d_v) {
                            return d_v.constructor == d_bx
                        }), 'no widgets of this class instantiated');
                    } else if (d_d.isNode(d_bx)) {
                        var d_v = d_bI(m, d_bx.id);
                        d_3(d_4, 'OWNER WIDGET', '', d_v ? d_0(d_A(m, d_v)) : '', 'this node does not appear to belong to a widget', true);
                        d_3(d_4, 'ID', '', d_bx.id, 'no id specified for this node', true);
                        d_3(d_4, 'TAG', '', d_bx.tagName, '', true);
                        d_3(d_4, 'HTML', '', d_c(d_e(d_bx)), '', true);
                    } else if (Uize.Util.Oop.isUizeClass(d_bx) || Uize.Util.Oop.isUizeClassInstance(d_bx)) {
                    } else if (Uize.isFunction(d_bx)) {
                        d_3(d_4, 'CODE', '', d_c(d_bx.toString()), '', true);
                    } else {
                        d_3(d_4, 'TO STRING', '', d_c(d_bx.toString()), '', true);
                        d_3(d_4, 'JSON SERIALIZATION', '', d_c(Uize.Json.to(d_bx)), '', true);
                    }
                } else {
                    d_4.push('<br/>' + d_k);
                }
                d_cR(m, m.children.objectInspectorSummary, d_4);
                m.d_cp = d_bx;
            }
        }
        function d_bf(m) {
            var d_bx = m.d_bj;
            if (m.isWired && m.children.objectInspectorTabs + '' == 'state' && d_bx !== m.d_cS) {
                var d_4 = [];
                if (Uize.Util.Oop.isUizeClass(d_bx) || Uize.Util.Oop.isUizeClassInstance(d_bx)) {
                    var d_bm = m.d_bm, d_cT = [
                        '<table class="objectInspectorTabContentsInfoTable">' + '<tr class="heading">', '<td>NAME</td>', '<td>ACTIONS</td>', '<td>VALUE</td>', '</tr>'];
                    for (var d_cU = -1, d_cV = d_bx.get(), d_cW = Uize.keys(d_cV).sort(), d_cX = d_cW.length, d_cY = d_bm + '.get (\'', d_cZ = d_bm + '.set (\'', d_Q; ++d_cU < d_cX; )
                        (d_Q = d_cW[d_cU]).indexOf('_') < 0 && d_cT.push('<tr>', '<td>', d_0(d_Q, d_cY + d_Q + '\')'), '</td>', '<td style="white-space:nowrap; text-align:center;">', d_0('get', d_cY + d_Q + '\')'), ' | ', d_0('set', d_cZ + d_Q + '\',#)'), '</td>', '<td>' + d_c(d_cV[d_Q]) + '</td>', '</tr>');
                    d_cT.push('</table>');
                    d_3(d_4, 'STATE PROPERTIES', d_cX + ' properties', d_cX ? d_cT.join('') : '<pre>this class has no state properties</pre>');
                } else {
                    d_4.push('<br/>' + '-- object does not support a state properties state interface --');
                }
                d_cR(m, m.children.objectInspectorState, d_4);
                m.d_cS = d_bx;
            }
        }
        function d_bg(m) {
            var d_bx = m.d_bj;
            if (m.isWired && m.children.objectInspectorTabs + '' == 'features' && d_bx !== m.d_c0) {
                var d_4 = [];
                if (d_bx != d_b) {
                    var d_c1 = Uize.Util.Oop.getFeatures(d_bx), d_c2 = d_c1.length;
                    if (d_c2) {
                        var 
                        d_2 = Uize.Util.Oop.getClassName(d_bx = Uize.Util.Oop.resolveToClass(d_bx)), d_c3 = function(d_bx) {
                            return ('<td class="moduleName">' + d_0(Uize.Util.Oop.getClassName(d_bx), '', true) + '</td>');
                        };
                        d_4.push('<table id="' + m.children.objectInspectorFeatures.children.table.get('idPrefix') + '" class="data">', '<tr class="title">', '<td colspan="6">', 'Features detected for ' + d_2, '</td>', '</tr>', '<tr class="heading">', '<td>NAME</td>', '<td>ACCESS</td>', '<td>CONTEXT</td>', '<td>TYPE</td>', '<td>INTRODUCED IN</td>', '<td>LAST OVERRIDDEN IN</td>', '</tr>');
                        for (var d_c4 = -1, d_c5 = d_2 + '.prototype.'; ++d_c4 < d_c2; ) {
                            var d_c6 = d_c1[d_c4];
                            d_4.push('<tr>', '<td class="featureName">' + (d_c6.context == 'State' ? d_c6.name : d_0(d_c6.name, d_c6.context == 'Instance' ? d_c5 + d_c6.name : '', true)) + '</td>', '<td>' + d_c6.access + '</td>', '<td>' + d_c6.context + '</td>', '<td>' + d_c6.type + '</td>', d_c3(d_c6.introducedIn), d_c3(d_c6.overriddenIn), '</tr>');
                        }
                        d_4.push('</table>');
                    } else {
                        d_4.push('<br/>-- no features could be automatically detected for this object');
                    }
                } else {
                    d_4.push('<br/>' + d_k);
                }
                d_cR(m, m.children.objectInspectorFeatures, d_4);
                m.d_c0 = d_bx;
            }
        }
        function d_c7(m) {
            var d_bj = m.d_bj, d_bm = m.d_bm, d_c8 = d_i[d_bm] && d_bm;
            if (!d_c8 && d_bj != d_b) {
                d_c8 = Uize.Util.Oop.getClassName(Uize.Util.Oop.resolveToClass(d_bj));
                if (!d_W(d_c8)) {
                    var d_cb = d_by(m, d_c8);
                    if (Uize.Util.Oop.isUizeClass(d_cb))
                        while ((d_c8 = (d_cb = d_cb.superclass).moduleName) && !d_W(d_c8))
                            ;
                }
            }
            m.set({d_ba: m.d_c9 + '/' + ((d_c8 && (d_W(d_c8) ? 'reference/' + d_c8 + '.html' : d_j[d_c8] ? 'javascript-reference/' + d_c8 + '.html' : null)) || 'guides/using-the-delve-tool.html')});
        }
        function d_da(m) {
            var d_bm = m.d_bm;
            d_bn.call(m);
            d_br.call(m);
            m.set({d_bm: ''});
            m.set({d_bm: d_bm});
        }
        function d_db(m, d_2) {
            var d_bx = d_by(m, d_2), d_cq = d_bA(m, d_bx), d_dc = !d_cq && d_d.isNode(d_bx);
            if (d_cq || d_dc) {
                var d_bs = m.d_bs, d_dd = d_bT(m), d_de;
                if (d_dc) {
                    d_de = d_dd(d_bx);
                } else {
                    var d_df = Infinity, d_dg = -Infinity, d_dh = Infinity, d_di = -Infinity, d_dj = function(d_dk) {
                        if (d_dk.area && d_dk.seen) {
                            if (d_dk.left < d_df)
                                d_df = d_dk.left;
                            if (d_dk.top < d_dh)
                                d_dh = d_dk.top;
                            if (d_dk.right > d_dg)
                                d_dg = d_dk.right;
                            if (d_dk.bottom > d_di)
                                d_di = d_dk.bottom;
                        }
                    }, d_cf = function(d_v) {
                        var d_K = d_L(m, d_v), d_f;
                        for (var d_M in d_K)
                            if (d_f = d_K[d_M])
                                d_dj(d_dd(d_f));
                        var d_x = d_v.children;
                        for (var d_B in d_x)
                            d_cf(d_x[d_B]);
                    };
                    d_cf(d_bx);
                    if (d_df != Infinity) {
                        var d_dl = d_dg - d_df + 1, d_dm = d_di - d_dh + 1;
                        d_de = {left: d_df,right: d_dg,top: d_dh,bottom: d_di,width: d_dl,height: d_dm,area: d_dl * d_dm,seen: true};
                    }
                }
                if (d_de && d_de.area && d_de.seen) {
                    var d_co = d_bs.document;
                    d_co.body.appendChild(m.d_dn = d_co.createElement('DIV'));
                    d_d.setStyle(m.d_dn, {position: 'absolute',zIndex: 1000000,left: d_de.left,top: d_de.top,width: d_de.width,height: d_de.height,background: '#ffa200'});
                    d_d.setOpacity(m.d_dn, .5);
                }
            }
        }
        function d_do(m) {
            d_d.remove(m.d_dn);
            m.d_dn = null;
        }
        function d_cR(m, d_dp, d_4) {
            function d_dq(d_dr) {
                if (!d_dr.title) {
                    d_dr.title = d_dr.UizeSite_Delve_a;
                    d_bJ(m, false);
                    d_do(m);
                }
            }
            d_dp.unwireUi();
            d_dp.setNodeInnerHtml('', d_4.join(''));
            d_dp.setNodeProperties('', {scrollTop: 0});
            d_dp.wireUi();
            d_dp.wireNode(d_d.find({root: d_dp.getNode(),tagName: 'a',className: 'objectLink'}), {mouseover: function() {
                    var d_n = this.UizeSite_Delve_a = this.title;
                    this.title = '';
                    d_bw(m, d_n);
                    d_bJ(m, true);
                    d_db(m, d_n);
                },mouseout: function() {
                    d_dq(this)
                },click: function() {
                    d_dq(this);
                    m.children.objectInspectorTabs.set({value: 'summary'});
                    m.set({d_bm: this.title || this.title});
                }});
        }
        return d_a.subclass({alphastructor: function() {
                var m = this;
                m.d_cp = m.d_c0 = d_h;
            },omegastructor: function() {
                var m = this;
                var d_ds = m.addChild('infoTooltip', Uize.Widgets.Tooltip.KeysValues.Widget, {built: false});
                m.addChild('treeList', Uize.Widgets.NavTree.List.Widget, {tooltip: {node: d_ds.nodeId(),show: function(d_cQ) {
                            d_bw(m, m.d_dt = d_cQ.objectPath);
                            return true;
                        }},built: false}).wire({'After Show Tooltip': function(d_du) {
                        d_db(m, d_du.item.objectPath)
                    },'After Hide Tooltip': function() {
                        d_do(m)
                    }});
                m.addChild('objectEntry', Uize.Widget.TextInput).wire('Changed.value', function(d_du) {
                    m.set({d_bm: d_du.newValue});
                    d_c7(m);
                });
                m.addChild('objectInspectorTabs', Uize.Widget.Options.Tabbed, {bodyClassActive: 'tabBodyActive',bodyClassInactive: 'tabBodyInactive',value: 'summary',
                    values: ['summary', 'state', 'features', 'documentation', 'eventsLog']}).wire('Changed.value', function() {
                    d_bd.call(m)
                });
                m.addChild('objectInspectorSummary', Uize.Widget);
                m.addChild('objectInspectorState', Uize.Widget);
                m.addChild('objectInspectorFeatures', Uize.Widget).addChild('table', Uize.Widget.TableSort, {headingOverClass: 'headingOver',headingLitClass: 'headingLit',rowOverClass: 'rowOver',cellTooltips: true});
                m.addChild('objectInspectorEventsLog', Uize.Widgets.Log.InstanceEvents.Widget, {built: false,extraClasses: 'objectInspectorEventsLog'});
                d_bn.call(m);
                d_bk.call(m);
                d_bh.call(m);
            },instanceMethods: {updateUi: function() {
                    var m = this;
                    if (m.isWired) {
                        d_br.call(m);
                        d_bq.call(m);
                        d_bd.call(m);
                        d_a.doMy(m, 'updateUi');
                    }
                },wireUi: function() {
                    var m = this;
                    if (!m.isWired) {
                        m.wireNode(window, 'unload', function() {
                            d_do(m);
                            //Uhh? Why?
                            //m.set({objectInspectedPath: ''});
                        });
                        m.wireNode('refresh', 'click', function() {
                            d_da(m)
                        });
                        m.wireNode('getWidgetFromNodeId', 'click', function() {
                            var d_b2 = prompt('Enter a DOM node id...', '');
                            if (d_b2) {
                                var d_v = d_bI(m, d_b2);
                                d_v 
                                ? m.set({d_bm: d_A(m, d_v)}) : alert('The DOM node with the ID "' + d_b2 + '" does not appear belong to a widget.');
                            }
                        });
                        m.wireNode('help', 'click', function() {
                            m.children.objectInspectorTabs.set({value: 'documentation'});
                            m.set({d_bm: ''});
                        });
                        m.wireNode('close', 'click', function() {
                            top.close()
                        });
                        var d_dv = m.getNode('treeListDropdown');
                        if (d_dv) {
                            var d_dw = d_dv.options;
                            for (var d_dx in d_p)
                                d_dw[d_dw.length] = new Option(d_p[d_dx].d_n, d_dx);
                        }
                        m.wireNode(d_dv, 'onchange', function() {
                            m.set({treeListQuery: m.getNodeValue(d_dv)})
                        });
                        m.wireNode('expandTreeListOneLevel', 'click', function() {
                            m.children.treeList.setExpandedDepth(1)
                        });
                        m.wireNode('expandTreeListTwoLevels', 'click', function() {
                            m.children.treeList.setExpandedDepth(2)
                        });
                        m.wireNode('expandTreeListThreeLevels', 'click', function() {
                            m.children.treeList.setExpandedDepth(3)
                        });
                        m.wireNode('expandTreeListAll', 'click', function() {
                            m.children.treeList.setExpandedDepth(Infinity)
                        });
                        m.wireNode('getTreeListItemsAsReport', 'click', function() {
                            var d_dy = d_p[m.d_bp].d_n, d_dz = [];
                            m.children.treeList.traverseTree({
                                itemHandler: function(d_cQ, d_dA, d_bC) {
                                    d_dz.push(Uize.Str.Repeat.repeat('\t', d_bC) + d_cQ.title);
                                }});
                            d_cm(m, d_dy, 'REPORT FOR: ' + m.d_bs.location.href + '\n' + d_l + '\n' + 'REPORT TYPE: ' + d_dy + ' (' + d_dz.length + ' items)\n' + d_l + '\n' + d_dz.join('\n'));
                        });
                        m.wireNode('getAllQueriesSummary', 'click', function() {
                            var d_dB = [];
                            for (var d_dx in d_p) {
                                var d_bp = d_p[d_dx], d_q = d_bp.d_q, d_dC = function(d_r) {
                                    if (!d_r)
                                        return 0;
                                    var d_dD = d_r.length;
                                    for (var d_dE = d_dD; --d_dE > -1; )
                                        d_dD += d_dC(d_r[d_dE].items);
                                    return d_dD;
                                };
                                d_dB.push(d_bp.d_n + (d_q ? (' -- ' + d_dC(d_q.call(m)) + ' items') : ''));
                            }
                            d_cm(m, 'Summary of all available queries', 'SUMMARY OF ALL AVAILABLE QUERIES FOR: ' + m.d_bs.location.href + '\n' + d_l + '\n' + d_dB.join('\n'));
                        });
                        d_a.doMy(m, 'wireUi');
                        addObservToUize(m, 'objectInspectedPath', function filter(x){!x;});
                        persistObserv(m.objectInspectedPathObserv, 'objectInspectedPath');
                        if(!m.objectInspectedPathObserv()) {
                            m.objectInspectedPathObserv(d_bL(m));
                        }
                    }
                },treeItemClicked: function() {
                    this.set({d_bm: this.d_dt});
                    var objectPath = this.get('objectInspectedPath');
                    //May be a faster way to do this, but speed doesn't really matter in this case
                    this.children.treeList.traverseTree({itemHandler: function(obj, id) {
                        if(obj.objectPath === objectPath) {
                            obj.expandedObserv(!obj.expandedObserv());
                        }
                    }});
                }},stateProperties: {
                    d_c9: {name: 'baseUrl',value: ''},
                    d_ba: {onChange: d_9},
                    d_bj: {name: 'objectInspected',onChange: [d_bd, d_bh]},
                    d_bm: {
                        name: 'objectInspectedPath',
                        conformer: function(d_dF) {
                            return (!d_by(this, d_dF) && this.d_bs && this.d_bs.document.getElementById(d_dF) ? 'document.getElementById (\'' + d_dF + '\')' : d_dF);
                        },onChange: [function() {
                            this.set({d_bj: d_by(this, this.d_bm)})
                        }, d_bk],value: ''
                    },
                    d_bp: {
                        name: 'treeListQuery',
                        onChange: [d_bn, d_bq],
                        value: 'widgetsOnPageTree'
                    },
                    d_bs: {
                        name: 'window',
                        onChange: [function() {
                            this.d_bN = d_b
                        }, d_bn, d_br]
                    }
                }
            });
    }});

Uize.module('UizeSite.Delve.library');

