/*! Create Html Elements With Object 1.0.0 | https://github.com/zulkarneynyavas/create-element-with-object | (c) 2021 Zülkarneyn Yavaş | MIT License */
HTMLElement.prototype.cewo = function(a, r) {
    var t = this;
    a.forEach(function(e) {
        r = document.createElement(e.tag);
        if (e.html) {
            r.innerHTML = e.html;
        }
        if (e.atts) {
            Object.keys(e.atts).forEach(function(k) {
                r.setAttribute(k, e.atts[k]);
            });
        }
        if (e.script) {
            Object.keys(e.script).forEach(function(k) {
                k === 'load' ? e.script[k]() : r.addEventListener(k, e.script[k]);
            });
        }
        if (e.child) {
            t.appendChild(r);
            r.cewo(e.child, r);
        } else {
            t.appendChild(r);
        }
    });
    return r;
}