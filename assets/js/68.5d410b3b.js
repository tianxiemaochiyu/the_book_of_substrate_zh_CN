(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{550:function(e,t,n){"use strict";n.r(t);var a=n(4),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"salt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#salt"}},[e._v("#")]),e._v(" Salt")]),e._v(" "),n("p",[e._v("Sometimes we require a unique identifier for items that may take the exact same form, but have\ndifferent block numbers. In the "),n("a",{attrs:{href:"https://github.com/nczhu/utxo-workshop",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("utxo-workshop")]),n("OutboundLink")],1),e._v(", the UTXO\nset included a "),n("code",[e._v("salt")]),e._v(" field for UTXO output to establish uniqueness for every transaction. This\nensures that, as long as the outputs are validated in different blocks, they can both be invoked\nindependently without leaking information regarding the "),n("code",[e._v("TransactionInput")]),e._v("'s "),n("code",[e._v("Signature")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TransactionOutput")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Value")]),e._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// u128 alias")]),e._v("\n    pubkey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("H256")]),e._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// public key")]),e._v("\n    salt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("u32")]),e._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// blocknummber")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[e._v("Setting "),n("code",[e._v("salt")]),e._v(" to something as inconspicuous as "),n("code",[e._v("BlockNumber")]),e._v(" still ensures that there arent enough\nof the same output in each block to open the "),n("em",[e._v("replay attack")]),e._v(" vector described above.")]),e._v(" "),n("h2",{attrs:{id:"encrypted-nonce-pattern"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-nonce-pattern"}},[e._v("#")]),e._v(" Encrypted Nonce Pattern")]),e._v(" "),n("blockquote",[n("p",[e._v("also known as epoch reclamation")])]),e._v(" "),n("p",[e._v("Peer to peer nodes connect over an encrypted communication channels referred to as "),n("em",[e._v("privatization")]),e._v("\nin protocols like Libp2p. An encrypted connection can simply be bootstrapped from simple public key\ncryptography.")]),e._v(" "),n("p",[e._v("I think we'll see this value used increasingly often in Layer 2 solutions which invoke the encrypted\nnonce to prove the order of off-chain messages. For this reason, I'll provide a sample here.")]),e._v(" "),n("ul",[n("li",[e._v("examples in the codebases ("),n("code",[e._v("Cumulus")]),e._v(", "),n("code",[e._v("Substrate")]),e._v(", "),n("code",[e._v("Polkadot")]),e._v(", "),n("code",[e._v("Rust-Libp2p")]),e._v(")")]),e._v(" "),n("li",[n("code",[e._v("evmap")]),e._v(" uses this pattern...go through that...")])])])}),[],!1,null,null,null);t.default=s.exports}}]);