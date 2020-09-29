(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{538:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"using-vectors-as-sets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-vectors-as-sets"}},[t._v("#")]),t._v(" Using Vectors as Sets")]),t._v(" "),e("p",[e("code",[t._v("pallets/vec-set")]),t._v(" "),e("a",{attrs:{href:"https://playground-staging.substrate.dev/?deploy=recipes&files=%2Fhome%2Fsubstrate%2Fworkspace%2Fpallets%2Fvec-set%2Fsrc%2Flib.rs",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/Playground-Try%20it!-brightgreen?logo=Parity%20Substrate",alt:"Try on playground"}}),t._v(" "),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/substrate-developer-hub/recipes/tree/master/pallets/vec-set/src/lib.rs",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/Github-View%20Code-brightgreen?logo=github",alt:"View on GitHub"}}),t._v(" "),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("A "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Set"),e("OutboundLink")],1),t._v(" is an unordered data structure\nthat stores entries without duplicates. Substrate's storage API does not provide a way to declare\nsets explicitly, but they can be implemented using either vectors or maps.")]),t._v(" "),e("p",[t._v("This recipe demonstrates how to implement a storage set on top of a vector, and explores the\nperformance of the implementation. When implementing a set in your own runtime, you should compare\nthis technique to implementing a "),e("RouterLink",{attrs:{to:"/3-entrees/storage-api/map-set.html"}},[e("code",[t._v("map-set")])]),t._v(".")],1),t._v(" "),e("p",[t._v("In this pallet we implement a set of "),e("code",[t._v("AccountId")]),t._v("s. We do not use the set for anything in this\npallet; we simply maintain the set. Using the set is demonstrated in the recipe on\n"),e("RouterLink",{attrs:{to:"/3-entrees/pallet-coupling.html"}},[t._v("pallet coupling")]),t._v(". We provide dispatchable calls to add and remove members,\nensuring that the number of members never exceeds a hard-coded maximum.")],1),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// A maximum number of members. When membership reaches this number, no new members may join.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_MEMBERS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usize")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"storage-item"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage-item"}},[t._v("#")]),t._v(" Storage Item")]),t._v(" "),e("p",[t._v("We will store the members of our set in a Rust\n"),e("a",{attrs:{href:"https://doc.rust-lang.org/std/vec/struct.Vec.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Vec")]),e("OutboundLink")],1),t._v(". A "),e("code",[t._v("Vec")]),t._v(" is a collection of elements that\nis ordered and may contain duplicates. Because the "),e("code",[t._v("Vec")]),t._v(" provides more functionality than our set\nneeds, we are able to build a set from the "),e("code",[t._v("Vec")]),t._v(". We declare our single storage item as so")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("decl_storage!")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Store")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Module")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Trait")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VecSet")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The set of all members. Stored as a single vec")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Members")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("members")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("In order to use the "),e("code",[t._v("Vec")]),t._v(" successfully as a set, we will need to manually ensure that no duplicate\nentries are added. To ensure reasonable performance, we will enforce that the "),e("code",[t._v("Vec")]),t._v(" always remains\nsorted. This allows for quickly determining whether an item is present using a\n"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Binary_search_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("binary search"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"adding-members"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-members"}},[t._v("#")]),t._v(" Adding Members")]),t._v(" "),e("p",[t._v("Any user may join the membership set by calling the "),e("code",[t._v("add_member")]),t._v(' dispatchable, providing they are\nnot already a member and the membership limit has not been reached. We check for these two\nconditions first, and then insert the new member only after we are sure it is safe to do so. This is\nan example of the mnemonic idiom, "'),e("strong",[t._v("verify first write last")]),t._v('".')]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("add_member")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatchResult")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" new_member "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensure_signed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" members "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Members")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("ensure!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("members"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_MEMBERS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MembershipLimitReached")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We don't want to add duplicate members, so we check whether the potential new")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// member is already present in the list. Because the list is always ordered, we can")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// leverage the binary search which makes this check O(log n).")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" members"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("binary_search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("new_member"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the search succeeds, the caller is already a member, so just return")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Err")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AlreadyMember")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("into")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the search fails, the caller is not a member and we learned the index where")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// they should be inserted")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Err")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tmembers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_member"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Members")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("members"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit_event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RawEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemberAdded")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_member"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If it turns out that the caller is not already a member, the binary search will fail. In this case\nit still returns the index into the "),e("code",[t._v("Vec")]),t._v(" at which the member would have been stored had they been\npresent. We then use this information to insert the member at the appropriate location, thus\nmaintaining a sorted "),e("code",[t._v("Vec")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"removing-a-member"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removing-a-member"}},[t._v("#")]),t._v(" Removing a Member")]),t._v(" "),e("p",[t._v("Removing a member is straightforward. We begin by looking for the caller in the list. If not\npresent, there is no work to be done. If the caller is present, the search algorithm returns her\nindex, and she can be removed.")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("remove_member")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatchResult")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" old_member "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensure_signed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" members "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Members")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We have to find out where, in the sorted vec the member is, if anywhere.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" members"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("binary_search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("old_member"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the search succeeds, the caller is a member, so remove her")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tmembers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Members")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("members"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit_event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RawEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemberRemoved")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old_member"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the search fails, the caller is not a member, so just return")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Err")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Err")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotMember")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("into")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[t._v("#")]),t._v(" Performance")]),t._v(" "),e("p",[t._v("Now that we have built our set, let's analyze its performance in some common operations.")]),t._v(" "),e("h3",{attrs:{id:"membership-check"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#membership-check"}},[t._v("#")]),t._v(" Membership Check")]),t._v(" "),e("p",[t._v("In order to check for the presence of an item in a "),e("code",[t._v("vec-set")]),t._v(", we make a single storage read, decode\nthe entire vector, and perform a binary search.")]),t._v(" "),e("p",[t._v("DB Reads: O(1) Decoding: O(n) Search: O(log n)")]),t._v(" "),e("h3",{attrs:{id:"updating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating"}},[t._v("#")]),t._v(" Updating")]),t._v(" "),e("p",[t._v("Updates to the set, such as adding and removing members as we demonstrated, requires first\nperforming a membership check. It also requires re-encoding the entire "),e("code",[t._v("Vec")]),t._v(" and storing it back in\nthe database. Finally, it still costs the normal\n"),e("a",{attrs:{href:"https://stackoverflow.com/q/200384/4184410",target:"_blank",rel:"noopener noreferrer"}},[t._v("amortized constant time"),e("OutboundLink")],1),t._v(" associated with mutating a\n"),e("code",[t._v("Vec")]),t._v(".")]),t._v(" "),e("p",[t._v("DB Writes: O(1) Encoding: O(n)")]),t._v(" "),e("h3",{attrs:{id:"iteration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iteration"}},[t._v("#")]),t._v(" Iteration")]),t._v(" "),e("p",[t._v("Iterating over all items in a "),e("code",[t._v("vec-set")]),t._v(" is achieved by using the "),e("code",[t._v("Vec")]),t._v("'s own\n"),e("a",{attrs:{href:"https://doc.rust-lang.org/std/vec/struct.Vec.html#method.iter",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("iter")]),t._v(" method"),e("OutboundLink")],1),t._v(". The entire set can\nbe read from storage in one go, and each item must be decoded. Finally, the actual processing you do\non the items will take some time.")]),t._v(" "),e("p",[t._v("DB Reads: O(1) Decoding: O(n) Processing: O(n)")]),t._v(" "),e("p",[t._v("Because accessing the database is a relatively slow operation, reading the entire list in a single\nread is a big win. If you need to iterate over the data frequently, you may want a "),e("code",[t._v("vec-set")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"a-note-on-weights"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-weights"}},[t._v("#")]),t._v(" A Note on Weights")]),t._v(" "),e("p",[t._v("It is always important that the weight associated with your dispatchables represent the actual time\nit takes to execute them. In this pallet, we have provided an upper bound on the size of the set,\nwhich places an upper bound on the computation - this means we can use constant weight annotations.\nYour set operations should either have a maximum size or a "),e("RouterLink",{attrs:{to:"/3-entrees/weights.html"}},[t._v("custom weight function")]),t._v("\nthat captures the computation appropriately.")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);