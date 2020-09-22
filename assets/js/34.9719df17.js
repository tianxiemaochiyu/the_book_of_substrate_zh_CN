(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{516:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transaction-fees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-fees"}},[t._v("#")]),t._v(" Transaction Fees")]),t._v(" "),s("p",[s("code",[t._v("runtimes/weight-fee-runtime")]),t._v(" "),s("a",{attrs:{href:"https://playground-staging.substrate.dev/?deploy=recipes&files=%2Fhome%2Fsubstrate%2Fworkspace%2Fruntimes%2Fweight-fee-runtime%2Fsrc%2Flib.rs",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Playground-Try%20it!-brightgreen?logo=Parity%20Substrate",alt:"Try on playground"}}),t._v(" "),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/substrate-developer-hub/recipes/tree/master/runtimes/weight-fee-runtime/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Github-View%20Code-brightgreen?logo=github",alt:"View on GitHub"}}),t._v(" "),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Substrate provides the\n"),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/pallet_transaction_payment/index.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("transaction_payment")]),t._v(" pallet"),s("OutboundLink")],1),t._v(" for\ncalculating and collecting fees for executing transactions. Fees are broken down into two\ncomponents:")]),t._v(" "),s("ul",[s("li",[t._v("Byte fee - A fee proportional to the transaction's length in bytes. The proportionality constant\nis a parameter in the "),s("code",[t._v("transaction_payment")]),t._v(" pallet.")]),t._v(" "),s("li",[t._v("Weight fee - A fee calculated from the transaction's weight. Weights quantify the time spent\nexecuting the transaction. Learn more in the "),s("RouterLink",{attrs:{to:"/3-entrees/weights.html"}},[t._v("recipe on weights")]),t._v(". The conversion\ndoesn't need to be linear, although it often is. The same conversion function is applied across\nall transactions from all pallets in the runtime.")],1),t._v(" "),s("li",[t._v("Fee Multiplier - A multiplier for the computed fee, that can change as the chain progresses.\nThis topic is not (yet) covered further in the recipes.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("total_fee = transaction_length * length_fee + weight_to_fee(total_weight)\n")])])]),s("h2",{attrs:{id:"setting-the-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-parameters"}},[t._v("#")]),t._v(" Setting the Parameters")]),t._v(" "),s("p",[t._v("Each of the parameters described above is set in the\n"),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/pallet_transaction_payment/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("transaction payment pallet"),s("OutboundLink")],1),t._v("'s\nconfiguration trait. For example, the "),s("code",[t._v("super-runtime")]),t._v(" sets these parameters as follows.")]),t._v(" "),s("p",[t._v("src:\n"),s("a",{attrs:{href:"https://github.com/substrate-developer-hub/recipes/tree/master/runtimes/super-runtime/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("runtimes/super-runtime/src/lib.rs")]),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("parameter_types!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionByteFee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u128")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("transaction_payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Currency")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("balances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnTransactionPayment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionByteFee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionByteFee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IdentityFee")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeeMultiplierUpdate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_1-to-1-conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-to-1-conversion"}},[t._v("#")]),t._v(" 1 to 1 Conversion")]),t._v(" "),s("p",[t._v("In many cases converting weight to fees one-to-one, as shown above, will suffice and can be\naccomplished with\n"),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/frame_support/weights/struct.IdentityFee.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("IdentityFee")]),s("OutboundLink")],1),t._v(". This\napproach is also taken in the\n"),s("a",{attrs:{href:"https://github.com/paritytech/substrate/blob/2d39ec2c4aaec1cc0f91fcb91734de8f408dc1b2/bin/node-template/runtime/src/lib.rs#L246",target:"_blank",rel:"noopener noreferrer"}},[t._v("node template"),s("OutboundLink")],1),t._v(".\nIt is also possible to provide a type that makes a more complex calculation. Any type that\nimplements\n"),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/frame_support/weights/trait.WeightToFeePolynomial.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("WeightToFeePolynomial")]),s("OutboundLink")],1),t._v("\nwill suffice.")]),t._v(" "),s("h2",{attrs:{id:"linear-conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linear-conversion"}},[t._v("#")]),t._v(" Linear Conversion")]),t._v(" "),s("p",[t._v("Another common way to convert weight to fees is linearly. When converting linearly, the weight is\nmultiplied by a constant coefficient to determine the fee to charge. This is demonstrated in the\n"),s("code",[t._v("weight-fee-runtime")]),t._v(" with the "),s("code",[t._v("LinearWeightToFee")]),t._v(" struct.")]),t._v(" "),s("p",[t._v("We declare the struct with an associated type "),s("code",[t._v("C")]),t._v(", which will provide the coefficient.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("LinearWeightToFee")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sp_std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("marker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhantomData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Then we implement "),s("code",[t._v("WeightToFeePolynomial")]),t._v(" for it. When implementing this trait, your main job is to\nreturn a set of\n"),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/frame_support/weights/struct.WeightToFeeCoefficient.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("WeightToFeeCoefficient")]),s("OutboundLink")],1),t._v("s.\nThese coefficients can have integer and fractional parts and be positive or negative. In our\n"),s("code",[t._v("LinearWeightToFee")]),t._v(" there is a single integer coefficient supplied by the associated type.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFeePolynomial")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearWeightToFee")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("polynomial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFeeCoefficients")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" coefficient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFeeCoefficient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tcoeff_integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tcoeff_frac"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Perbill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zero")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tnegative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tdegree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return a smallvec of coefficients. Order does not need to match degrees")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// because each coefficient has an explicit degree annotation.")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("smallvec!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coefficient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This struct is reusable, and works with different coefficients. Using it looks like this.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("parameter_types!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used with LinearWeightToFee conversion. Leaving this constant intact when using other")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// conversion techniques is harmless.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeeWeightRatio")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u128")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1_000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --snip--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("transaction_payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert dispatch weight to a chargeable fee.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearWeightToFee")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeeWeightRatio")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --snip--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"quadratic-conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quadratic-conversion"}},[t._v("#")]),t._v(" Quadratic Conversion")]),t._v(" "),s("p",[t._v("More complex polynomials can also be used. When using complex polynomials, it is unlikely that your\nlogic will be reused among multiple chains, so it is generally not worth the overhead of making the\ncoefficients configurable. The "),s("code",[t._v("QuadraticWeightToFee")]),t._v(" demonstrates a 2nd-degree polynomial with\nhard-coded non-integer signed coefficients.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("QuadraticWeightToFee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFeePolynomial")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QuadraticWeightToFee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("polynomial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFeeCoefficients")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" linear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFeeCoefficient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tcoeff_integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tcoeff_frac"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Perbill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_percent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tnegative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tdegree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" quadratic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeightToFeeCoefficient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tcoeff_integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tcoeff_frac"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Perbill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zero")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tnegative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tdegree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return a smallvec of coefficients. Order does not need to match degrees")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// because each coefficient has an explicit degree annotation. In fact, any")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// negative coefficients should be saved for last regardless of their degree")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// because large negative coefficients will likely cause saturation (to zero)")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if they happen early on.")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("smallvec!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("quadratic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"collecting-fees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collecting-fees"}},[t._v("#")]),t._v(" Collecting Fees")]),t._v(" "),s("p",[t._v("Having calculated the amount of fees due, runtime authors must decide which asset the fees should be\npaid in. A common choice is the use the\n"),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/pallet_balances/index.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Balances")]),t._v(" pallet"),s("OutboundLink")],1),t._v(", but any type that\nimplements the "),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/frame_support/traits/trait.Currency.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Currency")]),t._v(" trait"),s("OutboundLink")],1),t._v("\ncan be used. The weight-fee-runtime demonstrates how to use an asset provided by the\n"),s("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/pallet_generic_asset/index.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Generic Asset")]),t._v(" pallet"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("src:\n"),s("a",{attrs:{href:"https://github.com/substrate-developer-hub/recipes/tree/master/runtimes/weight-fee-runtime/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("runtimes/weight-fee-runtime/src/lib.rs")]),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("transaction_payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A generic asset whose ID is stored in the generic_asset pallet's runtime storage")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Currency")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpendingAssetCurrency")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --snip--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);