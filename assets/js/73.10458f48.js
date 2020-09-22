(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{555:function(t,e,r){"use strict";r.r(e);var n=r(4),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"optimization-tricks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optimization-tricks"}},[t._v("#")]),t._v(" Optimization Tricks")]),t._v(" "),r("p",[t._v("Runtime overhead in Substrate corresponds to the efficiency of the underlying Rust code. Therefore,\nit is essential to use clean, efficient Rust patterns for performance releases. This section\nintroduces common approaches for optimizing Rust code in general and links to resources that may\nguide further investigation.")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#premature"}},[t._v("Premature Optimization")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#sec"}},[t._v("Efficiency => Security")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#zero"}},[t._v("Zero-Cost Abstractions")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#unsafe"}},[t._v("Entering "),r("code",[t._v("unsafe")]),t._v(" Waters 🏴‍☠️")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#more"}},[t._v("Fearless Concurrency && Asynchrony")])])]),t._v(" "),r("p",[r("strong",[t._v("This section was inspired by and pulls heavily from")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://troubles.md/posts/rust-optimization/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Achieving Warp Speed with Rust"),r("OutboundLink")],1),t._v(" by Jack Fransham,\n"),r("a",{attrs:{href:"http://troubles.md/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("troubles.md")]),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.packtpub.com/application-development/rust-high-performance",target:"_blank",rel:"noopener noreferrer"}},[t._v("High Performance Rust"),r("OutboundLink")],1),t._v("\nby Iban Eguia Moraza")])]),t._v(" "),r("h2",{attrs:{id:"premature-optimization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#premature-optimization"}},[t._v("#")]),t._v(" Premature Optimization "),r("a",{attrs:{name:"premature"}})]),t._v(" "),r("p",[r("em",[t._v("Programmers waste enormous amounts of time thinking about, or worrying about, the speed of\nnoncritical parts of their programs, and these attempts at efficiency actually have a strong\nnegative impact when debugging and maintenance are considered. We should forget about small\nefficiencies, say about 97% of the time: premature optimization is the root of all evil.")]),t._v(" - Page 268\nof\n"),r("a",{attrs:{href:"http://wiki.c2.com/?StructuredProgrammingWithGoToStatements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Structured Programming with "),r("code",[t._v("goto")]),t._v(" Statements"),r("OutboundLink")],1),t._v("\nby Donald Knuth")]),t._v(" "),r("p",[t._v("Before worrying about performance optimizations, focus on "),r("em",[t._v("optimizing")]),t._v(" for readability, simplicity,\nand maintainability. The first step when building anything is achieving basic functionality. Only\nafter establishing a minimal viable sample is it appropriate to consider performance-based\nenhancements. With that said, severe inefficiency does open attack vectors for Substrate runtimes\n("),r("em",[t._v("see "),r("a",{attrs:{href:"#sec"}},[t._v("the next section")])]),t._v("). Moreover, the tradeoff between optimization and simplicity is not\nalways so clear...")]),t._v(" "),r("p",[r("em",[t._v("A common misconception is that optimized code is necessarily more complicated, and that therefore\noptimization always represents a trade-off. However, in practice, better factored code often runs\nfaster and uses less memory as well. In this regard, optimization is closely related to refactoring,\nsince in both cases we are paying into the code so that we may draw back out again later if we need\nto.")]),t._v(" - "),r("a",{attrs:{href:"http://wiki.c2.com/?PrematureOptimization",target:"_blank",rel:"noopener noreferrer"}},[t._v("src"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("Rust API Guidelines")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://rust-lang-nursery.github.io/api-guidelines/about.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Rust API Guidelines"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/rust-unofficial/patterns",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust Unofficial Design Patterns"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://deterministic.space/elegant-apis-in-rust.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elegant Library API Guidelines"),r("OutboundLink")],1),t._v(" by\nPascal Hertleif")])]),t._v(" "),r("p",[t._v("Also, use "),r("a",{attrs:{href:"https://github.com/rust-lang/rust-clippy",target:"_blank",rel:"noopener noreferrer"}},[t._v("clippy"),r("OutboundLink")],1),t._v("!")]),t._v(" "),r("h2",{attrs:{id:"efficiency-security-in-substrate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#efficiency-security-in-substrate"}},[t._v("#")]),t._v(" Efficiency => Security in Substrate "),r("a",{attrs:{name:"sec"}})]),t._v(" "),r("p",[t._v("We call an algorithm "),r("em",[t._v("efficient")]),t._v(" if its running time is polynomial in the size of the input, and\n"),r("em",[t._v("highly efficient")]),t._v(" if its running time is linear in the size of the input. It is important for all\non-chain algorithms to be highly efficient, because they must scale linearly as the size of the\nPolkadot network grows. In contrast, off-chain algorithms are only required to be efficient. -\n"),r("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/NPoS/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web3 Research"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("Related Reading")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.parity.io/onwards/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Onwards; Underpriced EVM Operations"),r("OutboundLink")],1),t._v(", September 2016")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www4.comp.polyu.edu.hk/~csxluo/DoSEVM.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Under-Priced DOS Attacks on Ethereum"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"rust-zero-cost-abstractions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rust-zero-cost-abstractions"}},[t._v("#")]),t._v(" Rust Zero-Cost Abstractions "),r("a",{attrs:{name:"zero"}})]),t._v(" "),r("p",[t._v("Substrate developers should take advantage of Rust's zero cost abstractions.")]),t._v(" "),r("p",[r("em",[t._v("Articles")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.rust-lang.org/2015/05/11/traits.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Abstraction without overhead: traits in Rust"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hermanradtke.com/2015/06/22/effectively-using-iterators-in-rust.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Effectively Using Iterators in Rust"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://rust-embedded.github.io/book/static-guarantees/zero-cost-abstractions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Type States"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[t._v("Tweets")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://twitter.com/heinz_gies/status/1121490424739303425",target:"_blank",rel:"noopener noreferrer"}},[t._v("iterate over a slice rather than a "),r("code",[t._v("vec!")]),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[t._v("Video")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=Sn3JklPAVLk",target:"_blank",rel:"noopener noreferrer"}},[t._v("An introduction to structs, traits, and zero-cost abstractions"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"entering-unsafe-waters-🏴‍☠️"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#entering-unsafe-waters-🏴‍☠️"}},[t._v("#")]),t._v(" Entering "),r("code",[t._v("unsafe")]),t._v(" Waters 🏴‍☠️ "),r("a",{attrs:{name:"unsafe"}})]),t._v(" "),r("p",[r("em",[t._v("Please read "),r("a",{attrs:{href:"https://doc.rust-lang.org/nomicon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Rustonomicon"),r("OutboundLink")],1),t._v(" before experimenting with the\ndark magic that is "),r("code",[t._v("unsafe")])])]),t._v(" "),r("p",[t._v("To access an element in a specific position, use the "),r("code",[t._v("get()")]),t._v(" method. This method performs a double\nbound check.")]),t._v(" "),r("div",{staticClass:"language-rust extra-class"},[r("pre",{pre:!0,attrs:{class:"language-rust"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" arr "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" array_of_arrays "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1738")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{}"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elem"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("The "),r("code",[t._v(".get()")]),t._v(" call performs two checks:")]),t._v(" "),r("ol",[r("li",[t._v("checks that the index will return "),r("code",[t._v("Some(elem)")]),t._v(" or "),r("code",[t._v("None")])]),t._v(" "),r("li",[t._v("checks that the returned element is of type "),r("code",[t._v("Some")]),t._v(" or "),r("code",[t._v("None")])])]),t._v(" "),r("p",[t._v("If bound checking has already been performed independently of the call, we can invoke\n"),r("code",[t._v(".getunchecked()")]),t._v(" to access the element. Although this is "),r("code",[t._v("unsafe")]),t._v(" to use, it is equivalent to C/C++\nindexing, thereby improving performance when we already know the element's location.")]),t._v(" "),r("div",{staticClass:"language-rust extra-class"},[r("pre",{pre:!0,attrs:{class:"language-rust"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" arr "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" array_of_arrays "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{}"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsafe")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" arr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_unchecked")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1738")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[r("strong",[t._v("NOTE")]),t._v(": if we don't verify the input to "),r("code",[t._v(".getunchecked()")]),t._v(", the caller may access whatever is\nstored in the location even if it is a memory address outside the slice")]),t._v(" "),r("h2",{attrs:{id:"fearless-concurrency-asynchrony"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fearless-concurrency-asynchrony"}},[t._v("#")]),t._v(" Fearless Concurrency && Asynchrony "),r("a",{attrs:{name:"more"}})]),t._v(" "),r("p",[t._v("As a systems programming language, Rust provides significant flexibility with respect to low-level\noptimizations. Specifically, Rust provides fine-grain control over how you perform computation,\ndelegate said computation to the OS's threads, and schedule state transitions within a given thread.\nThere isn't space in this book to go into significant detail, but I'll try to provide\nresources/reading that have helped me get up to speed. For a high-level overview, Stjepan Glavina\nprovides the following descriptions in\n"),r("a",{attrs:{href:"https://stjepang.github.io/2019/01/29/lock-free-rust-crossbeam-in-2019.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lock-free Rust: Crossbeam in 2019"),r("OutboundLink")],1),t._v(":")]),t._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/rayon-rs/rayon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rayon"),r("OutboundLink")],1)]),t._v(" splits your data into distinct pieces, gives each\npiece to a thread to do some kind of computation on it, and finally aggregates results. Its goal\nis to distribute CPU-intensive tasks onto a thread pool.")]),t._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/tokio-rs/tokio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tokio"),r("OutboundLink")],1)]),t._v(" runs tasks which sometimes need to be paused in\norder to wait for asynchronous events. Handling tons of such tasks is no problem. Its goal is to\ndistribute IO-intensive tasks onto a thread pool.")]),t._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/crossbeam-rs/crossbeam",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crossbeam"),r("OutboundLink")],1)]),t._v(" is all about low-level concurrency:\natomics, concurrent data structures, synchronization primitives. Same idea as the "),r("code",[t._v("std::sync")]),t._v("\nmodule, but bigger. Its goal is to provide tools on top of which libraries like Rayon and Tokio\ncan be built.")])]),t._v(" "),r("p",[t._v("To dive deeper down these 🐰 holes")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#async"}},[t._v("Asynchrony")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#concurrency"}},[t._v("Concurrency")])])]),t._v(" "),r("h3",{attrs:{id:"asynchrony"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asynchrony"}},[t._v("#")]),t._v(" Asynchrony "),r("a",{attrs:{name:"async"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://areweasyncyet.rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Are we "),r("code",[t._v("async")]),t._v(" yet?"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("Conceptual")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=skos4B5x7qE",target:"_blank",rel:"noopener noreferrer"}},[t._v("RustLatam 2019 - Without Boats: Zero-Cost Async IO"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://boats.gitlab.io/blog/post/wakers-i/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to Async/Await Programming (withoutboats/wakers-i):"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Projects")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/rustasync",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust Asynchronous Ecosystem Working Group"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/withoutboats/romio",target:"_blank",rel:"noopener noreferrer"}},[t._v("romio"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://tokio.rs/tokio/tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tokio Tutorials"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"concurrency"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concurrency"}},[t._v("#")]),t._v(" Concurrency "),r("a",{attrs:{name:"concurrency"}})]),t._v(" "),r("p",[r("strong",[t._v("Conceptual")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=Dbytx0ivH7Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust Concurrency Explained"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://stjepang.github.io/2019/01/29/lock-free-rust-crossbeam-in-2019.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lock-free Rust: Crossbeam in 2019"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/crossbeam-rs/rfcs/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crossbeam Research Meta-link"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Projects")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/spacejam/sled",target:"_blank",rel:"noopener noreferrer"}},[t._v("sled"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/servo/servo",target:"_blank",rel:"noopener noreferrer"}},[t._v("servo"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/tikv/tikv",target:"_blank",rel:"noopener noreferrer"}},[t._v("TiKV"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);