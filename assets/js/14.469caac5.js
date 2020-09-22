(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{409:function(t,s,e){t.exports=e.p+"assets/img/substrate-architecture.165c3188.png"},507:function(t,s,e){"use strict";e.r(s);var n=e(4),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"basic-proof-of-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-proof-of-work"}},[t._v("#")]),t._v(" Basic Proof of Work")]),t._v(" "),n("p",[n("code",[t._v("nodes/basic-pow")]),t._v(" "),n("a",{attrs:{href:"https://playground-staging.substrate.dev/?deploy=recipes&files=%2Fhome%2Fsubstrate%2Fworkspace%2Fnodes%2Fbasic-pow%2Fsrc%2Flib.rs",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/badge/Playground-Try%20it!-brightgreen?logo=Parity%20Substrate",alt:"Try on playground"}}),t._v(" "),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://github.com/substrate-developer-hub/recipes/tree/master/nodes/basic-pow/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/badge/Github-View%20Code-brightgreen?logo=github",alt:"View on GitHub"}}),t._v(" "),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("basic-pow")]),t._v(" node demonstrates how to wire up a custom consensus engine into the Substrate\nService. It uses a minimal proof of work consensus engine to reach agreement over the blockchain. It\nwill teach us many useful aspects of dealing with consensus and prepare us to understand more\nadvanced consensus engines in the future. In particular we will learn about:")]),t._v(" "),n("ul",[n("li",[t._v("Substrate's\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sp_consensus/block_import/trait.BlockImport.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("BlockImport")]),t._v(" trait"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Substrate's "),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sp_consensus/import_queue/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("import pipeline"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Structure of a typical "),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_service/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate Service"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Configuration of\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sp_authorship/struct.InherentDataProvider.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("InherentDataProvider")]),n("OutboundLink")],1),t._v("s")])]),t._v(" "),n("h2",{attrs:{id:"the-structure-of-a-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-structure-of-a-node"}},[t._v("#")]),t._v(" The Structure of a Node")]),t._v(" "),n("p",[t._v("You may remember from the "),n("RouterLink",{attrs:{to:"/2-appetizers/1-hello-substrate.html"}},[t._v("hello-substrate recipe")]),t._v(" that a\nSubstrate node has two parts. An outer part that is responsible for gossiping transactions and\nblocks, handling "),n("RouterLink",{attrs:{to:"/3-entrees/custom-rpc.html"}},[t._v("rpc requests")]),t._v(", and reaching consensus. And a runtime that is\nresponsible for the business logic of the chain. This architecture diagram illustrates the\ndistinction.")],1),t._v(" "),n("p",[n("img",{attrs:{src:e(409),alt:"Substrate Architecture Diagram"}})]),t._v(" "),n("p",[t._v("In principle, the consensus engine (part of the outer node) is agnostic to the runtime that is used\nwith it. But in practice, most consensus engines will require the runtime to provide certain\n"),n("RouterLink",{attrs:{to:"/3-entrees/runtime-api.html"}},[t._v("runtime APIs")]),t._v(" that affect the engine. For example, Aura and Babe query the\nruntime for the set of validators. A more real-world PoW consensus would query the runtime for the\nblock difficulty. Additionally, some runtimes rely on the consensus engine to provide\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sp_runtime/generic/enum.DigestItem.html#variant.PreRuntime",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-runtime digests"),n("OutboundLink")],1),t._v(".\nFor example, runtimes that include the Babe pallet expect a pre-runtime digest containing\ninformation about the current babe slot.")],1),t._v(" "),n("p",[t._v("In this recipe we will avoid those practical complexities by using the\n"),n("RouterLink",{attrs:{to:"/3-entrees/sha3-pow-consensus.html"}},[t._v("Minimal Sha3 Proof of Work")]),t._v(" consensus engine, and a dedicated\n"),n("code",[t._v("pow-runtime")]),t._v(" which are truly isolated from each other. The contents of the runtime should be\nfamiliar, and will not be discussed here.")],1),t._v(" "),n("h2",{attrs:{id:"the-service-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-service-builder"}},[t._v("#")]),t._v(" The Service Builder")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_service/trait.AbstractService.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate Service"),n("OutboundLink")],1),t._v(" is the main\ncoordinator of the various parts of a Substrate node, including consensus. The service is large and\ntakes many parameters, so it is built with a\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_service/struct.ServiceBuilder.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceBuilder"),n("OutboundLink")],1),t._v(" following\n"),n("a",{attrs:{href:"https://doc.rust-lang.org/1.0.0/style/ownership/builders.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust's builder pattern"),n("OutboundLink")],1),t._v(". This code\nis demonstrated in the nodes "),n("code",[t._v("src/service.rs")]),t._v(" file.")]),t._v(" "),n("p",[t._v("The particular builder method that is relevant here is\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_service/struct.ServiceBuilder.html#method.with_import_queue",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("with_import_queue")]),n("OutboundLink")],1),t._v(".\nHere we construct an instance of the\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_consensus_pow/struct.PowBlockImport.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("PowBlockImport")]),t._v(" struct"),n("OutboundLink")],1),t._v(",\nproviding it with references to our client, our "),n("code",[t._v("MinimalSha3Algorithm")]),t._v(", and some other necessary\ndata.")]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[t._v("builder\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("with_import_queue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token closure-params"}},[n("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),t._v("_config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" select_chain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _transaction_pool"),n("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pow_block_import "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sc_consensus_pow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PowBlockImport")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tclient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tclient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sha3pow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sha3Algorithm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check inherents starting at block 0")]),t._v("\n\t\t\tselect_chain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tinherent_data_providers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" import_queue "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sc_consensus_pow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import_queue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pow_block_import"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sha3pow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sha3Algorithm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tinherent_data_providers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\timport_setup "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pow_block_import"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("import_queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Once the "),n("code",[t._v("PowBlockImport")]),t._v(" is constructed, we can use it to create an actual import queue that the\nservice will use for importing blocks into the client.")]),t._v(" "),n("h3",{attrs:{id:"the-block-import-pipeline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-block-import-pipeline"}},[t._v("#")]),t._v(" The Block Import Pipeline")]),t._v(" "),n("p",[t._v("You may have noticed that when we created the "),n("code",[t._v("PowBlockImport")]),t._v(" we gave it two separate references to\nthe client. The second reference will always be to a client. But the first is interesting. The\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_consensus_pow/struct.PowBlockImport.html#method.new",target:"_blank",rel:"noopener noreferrer"}},[t._v("rustdocs tell us"),n("OutboundLink")],1),t._v("\nthat the first parameter is "),n("code",[t._v("inner: BlockImport<B, Transaction = TransactionFor<C, B>>")]),t._v('. Why would a\nblock import have a reference to another block import? Because the "block import pipeline" is\nconstructed in an onion-like fashion, where one layer of block import wraps the next. Learn more\nabout this pattern in the knowledgebase article on the\n'),n("a",{attrs:{href:"https://substrate.dev/docs/en/knowledgebase/advanced/block-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("block import pipeline"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"inherent-data-providers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inherent-data-providers"}},[t._v("#")]),t._v(" Inherent Data Providers")]),t._v(" "),n("p",[t._v("Both the BlockImport and the "),n("code",[t._v("import_queue")]),t._v(" are given an instance called "),n("code",[t._v("inherent_data_providers")]),t._v(".\nThis object is created in a helper function defined at the beginning of "),n("code",[t._v("service.rs")])]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("build_inherent_data_providers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InherentDataProviders")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceError")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" providers "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InherentDataProviders")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tproviders\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register_provider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sp_timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InherentDataProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map_err")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Into")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("into"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map_err")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sp_consensus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InherentData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Anything that implements the\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sp_inherents/trait.ProvideInherentData.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ProvideInherentData")]),t._v(" trait"),n("OutboundLink")],1),t._v("\nmay be used here. The block authoring logic must supply all inherents that the runtime expects. In\nthe case of this basic-pow chain, that is just the\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sp_timestamp/trait.TimestampInherentData.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("TimestampInherentData")]),n("OutboundLink")],1),t._v("\nexpected by the "),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/pallet_timestamp/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("timestamp pallet"),n("OutboundLink")],1),t._v(". In order\nto register other inherents, you would call "),n("code",[t._v("register_provider")]),t._v(" multiple times, and map errors\naccordingly.")]),t._v(" "),n("h2",{attrs:{id:"mining"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mining"}},[t._v("#")]),t._v(" Mining")]),t._v(" "),n("p",[t._v("We've already implemented a mining algorithm as part of our\n"),n("RouterLink",{attrs:{to:"/3-entrees/sha3-pow-consensus.html"}},[n("code",[t._v("MinimalSha3Algorithm")])]),t._v(", but we haven't yet told our service to actually\nmine with that algorithm. This is our last task in the "),n("code",[t._v("new_full")]),t._v(" function.")],1),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" participates_in_consensus "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" proposer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sc_basic_authorship"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProposerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tservice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tservice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transaction_pool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of rounds of mining to try in a single call")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rounds "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" client "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" select_chain "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("select_chain")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ok_or")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectChainRequired")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" can_author_with "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sp_consensus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CanAuthorWithNativeVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("executor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sc_consensus_pow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start_mine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("block_import"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tclient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MinimalSha3Algorithm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tproposer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No preruntime digests")]),t._v("\n\t\trounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tservice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("network")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select_chain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tinherent_data_providers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcan_author_with"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("We begin by testing whether this node participates in consensus, which is to say we check whether\nthe user wants the node to act as a miner. If this node is to be a miner, we gather references to\nvarious parts of the node that the\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_consensus_pow/fn.start_mine.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("start_mine")]),t._v(" function"),n("OutboundLink")],1),t._v(" requires, and\ndefine that we will attempt 500 rounds of mining for each block before pausing. Finally we call\n"),n("code",[t._v("start_mine")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"the-light-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-light-client"}},[t._v("#")]),t._v(" The Light Client")]),t._v(" "),n("p",[t._v("The last thing in the "),n("code",[t._v("service.rs")]),t._v(" file is constructing the\n"),n("a",{attrs:{href:"https://www.parity.io/what-is-a-light-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("light client"),n("OutboundLink")],1),t._v("'s service. This code is quite similar\nto the construction of the full service.")]),t._v(" "),n("p",[t._v("Instead of using the "),n("code",[t._v("with_import_queue")]),t._v(" function we used previously, we use the\n"),n("code",[t._v("with_import_queue_and_fprb")]),t._v(" function. FPRB stand for\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_network/config/trait.FinalityProofRequestBuilder.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("FinalityProofRequestBuilder")]),n("OutboundLink")],1),t._v(".\nIn chains with deterministic finality, light clients must request proofs of finality from full\nnodes. But in our chain, we do not have deterministic finality, so we can use the\n"),n("a",{attrs:{href:"https://substrate.dev/rustdocs/v2.0.0-rc4/sc_network/config/struct.DummyFinalityProofRequestBuilder.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("DummyFinalityProofRequestBuilder")]),n("OutboundLink")],1),t._v("\nwhich does nothing except satisfying Rust's type checker.")]),t._v(" "),n("p",[t._v("Once the dummy request builder is configured, the "),n("code",[t._v("BlockImport")]),t._v(" and import queue are configured\nexactly as they were in the full node.")]),t._v(" "),n("h2",{attrs:{id:"note-of-finality"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#note-of-finality"}},[t._v("#")]),t._v(" Note of Finality")]),t._v(" "),n("p",[t._v("If we run the "),n("code",[t._v("basic-pow")]),t._v(" node now, we see in console logs, that the finalized block always remains\nat 0.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("...\n2020-03-22 12:50:09 Starting consensus session on top of parent 0x85811577d1033e918b425380222fd8c5aef980f81fa843d064d80fe027c79f5a\n2020-03-22 12:50:09 Imported #189 (0x8581…9f5a)\n2020-03-22 12:50:09 Prepared block for proposing at 190 [hash: 0xdd83ba96582acbed59aacd5304a9258962d1d4c2180acb8b77f725bd81461c4f; parent_hash: 0x8581…9f5a; extrinsics (1): [0x77a5…f7ad]]\n2020-03-22 12:50:10 Idle (1 peers), best: #189 (0x8581…9f5a), finalized #0 (0xff0d…5cb9), ⬇ 0.2kiB/s ⬆ 0.4kiB/s\n2020-03-22 12:50:15 Idle (1 peers), best: #189 (0x8581…9f5a), finalized #0 (0xff0d…5cb9), ⬇ 0 ⬆ 0\n")])])]),n("p",[t._v("This is expected because Proof of Work is a consensus mechanism with probabilistic finality. This\nmeans a block is never truly finalized and can always be reverted. The further behind the blockchain\nhead a block is, the less likely it is going to be reverted.")])])}),[],!1,null,null,null);s.default=a.exports}}]);