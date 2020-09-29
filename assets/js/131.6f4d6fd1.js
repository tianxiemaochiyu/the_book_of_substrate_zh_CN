(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{618:function(e,t,a){"use strict";a.r(t);var o=a(4),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"misc-optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#misc-optimizations"}},[e._v("#")]),e._v(" Misc Optimizations")]),e._v(" "),a("blockquote",[a("p",[e._v("cache for unfinished ideas")])]),e._v(" "),a("h2",{attrs:{id:"random"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random"}},[e._v("#")]),e._v(" Random")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("a loop over a vector is significantly slower than over the vector as slice; it's noticeably\nfaster to iterate over a slice rather than a "),a("code",[e._v("vec!")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v(".iter.map(|x| x.0.into()).collect")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("using "),a("code",[e._v("BtreeMap<T, ()>")]),e._v(" to test for deduplication")]),e._v(" for cache optimality (trading search\nefficiency in some cases...)")]),e._v(" "),a("ul",[a("li",[e._v("using a different scope for this pattern")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("format!")]),e._v(" macro to "),a("code",[e._v("write!")]),e._v(" macro to make it so that you don't have to create new objects in the\nheap")])]),e._v(" "),a("li",[a("p",[e._v("maps use "),a("code",[e._v("Blake2")]),e._v(" hash")])]),e._v(" "),a("li",[a("p",[e._v("storage values use "),a("code",[e._v("twox")]),e._v(" hash")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Blake2")]),e._v(" is ~6x slower than "),a("code",[e._v("twox")])])]),e._v(" "),a("li",[a("p",[e._v("if you have keys in your map, that can be manipulated from the outside; an attacker could try to\ncreate hash collisions.")])]),e._v(" "),a("li",[a("p",[e._v("for the map, you can set the hasher you want to use => look up the correct hash for your type in\nthe metadata.")])])]),e._v(" "),a("h3",{attrs:{id:"small-vector-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#small-vector-optimization"}},[e._v("#")]),e._v(" Small Vector Optimization")]),e._v(" "),a("p",[e._v("By default, the value-set for each key in the map uses the "),a("code",[e._v("smallvec")]),e._v(" crate to keep a maximum of one\nelement stored inline with the map, as opposed to separately heap-allocated with a plain "),a("code",[e._v("Vec")]),e._v(".\nOperations such as "),a("code",[e._v("Fit")]),e._v(" and "),a("code",[e._v("Replace")]),e._v(" will automatically switch back to the inline storage if\npossible. This is ideal for maps that mostly use one element per key, as it can improvate memory\nlocality with less indirection.")])])}),[],!1,null,null,null);t.default=i.exports}}]);