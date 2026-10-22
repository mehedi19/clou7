(()=>{"use strict";module.exports = [
"[project]/src/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "ButtonLink",
    ()=>ButtonLink,
    "SectionHead",
    ()=>SectionHead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
;
;
function ButtonLink({ variant = "primary", arrow, children, className = "", ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: `btn btn--${variant} ${className}`,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Button.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: "arrow",
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/components/Button.tsx",
                lineNumber: 18,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function Button({ variant = "primary", arrow, children, className = "", ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `btn btn--${variant} ${className}`,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Button.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: "arrow",
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/components/Button.tsx",
                lineNumber: 33,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function SectionHead({ eyebrow, title, sub, center = false, light = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `section-head ${center ? "is-center" : ""} ${light ? "is-light" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/Button.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "display h2",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Button.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "lead",
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/components/Button.tsx",
                lineNumber: 55,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Capabilities.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Capabilities",
    ()=>Capabilities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/** Small illustrative UI mock per capability (purely presentational). */ function Visual({ id }) {
    switch(id){
        case "dcb":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mock mock--phone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__bar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mock__title",
                        children: "Confirm purchase"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mock__amount",
                        children: [
                            "৳ 199",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "/month"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 17,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Charge to"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 18,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Mobile balance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 18,
                                columnNumber: 60
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Operator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 19,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Auto-detected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 19,
                                columnNumber: 59
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__btn",
                        children: "Pay with mobile balance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Capabilities.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this);
        case "mfs":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mock mock--list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mock__title",
                        children: "Choose a wallet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    [
                        "bKash",
                        "Nagad",
                        "Rocket"
                    ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mock__option ${i === 0 ? "is-selected" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mock__dot"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                w,
                                i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 31,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, w, true, {
                            fileName: "[project]/src/components/Capabilities.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Capabilities.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this);
        case "cards":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mock mock--card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "creditcard",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "creditcard__chip"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "•••• •••• •••• 4242"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "creditcard__net",
                                children: "Visa · Mastercard · UnionPay · Amex"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "3-D Secure"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 44,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Verified"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 44,
                                columnNumber: 61
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Capabilities.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this);
        case "banking":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mock mock--list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mock__title",
                        children: "Bank transfer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Amount"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 51,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "৳ 1,250,000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 51,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 52,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "ok",
                                children: "Instant · Confirmed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 52,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__progress",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                            fileName: "[project]/src/components/Capabilities.tsx",
                            lineNumber: 53,
                            columnNumber: 43
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Capabilities.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this);
        case "settlement":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mock mock--table",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mock__title",
                        children: "Settlement report"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    [
                        [
                            "Gross collected",
                            "৳ 4.2M"
                        ],
                        [
                            "Fees & tax",
                            "− ৳ 0.4M"
                        ],
                        [
                            "Net payout",
                            "USD 31,480"
                        ]
                    ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mock__row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: a
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 65,
                                    columnNumber: 48
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: b
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 65,
                                    columnNumber: 64
                                }, this)
                            ]
                        }, a, true, {
                            fileName: "[project]/src/components/Capabilities.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock__tag",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/Capabilities.tsx",
                                lineNumber: 67,
                                columnNumber: 38
                            }, this),
                            " Reconciled"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Capabilities.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mock mock--list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mock__title",
                        children: "Compliance status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    [
                        "KYC",
                        "AML screening",
                        "Bangladesh Bank",
                        "VAT & tax"
                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mock__option is-selected",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                " ",
                                c
                            ]
                        }, c, true, {
                            fileName: "[project]/src/components/Capabilities.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Capabilities.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this);
    }
}
function Capabilities() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const tabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capabilities"][active];
    // Roving-tabindex keyboard support (arrows / Home / End).
    const onKey = (e)=>{
        const last = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capabilities"].length - 1;
        let next = active;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = last;
        else return;
        e.preventDefault();
        setActive(next);
        tabsRef.current[next]?.focus();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "capabilities",
        className: "section capabilities",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                        eyebrow: "What We Do",
                        title: "Every way Bangladesh pays, behind one integration",
                        sub: "DCB is one channel among several. Cloud 7 unifies payments, settlement and compliance so you only integrate once."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Capabilities.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Capabilities.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tabs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tabs__list",
                            role: "tablist",
                            "aria-orientation": "vertical",
                            onKeyDown: onKey,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capabilities"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: (el)=>{
                                        tabsRef.current[i] = el;
                                    },
                                    role: "tab",
                                    id: `tab-${c.id}`,
                                    "aria-selected": i === active,
                                    "aria-controls": `panel-${c.id}`,
                                    tabIndex: i === active ? 0 : -1,
                                    className: `tab ${i === active ? "is-active" : ""}`,
                                    onClick: ()=>setActive(i),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab__icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: c.icon,
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Capabilities.tsx",
                                                lineNumber: 130,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab__text",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: c.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Capabilities.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: c.short
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Capabilities.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "arrow",
                                            size: 18,
                                            className: "tab__arrow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Capabilities.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tabs__panel",
                            role: "tabpanel",
                            id: `panel-${current.id}`,
                            "aria-labelledby": `tab-${current.id}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel__copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "panel__icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: current.icon,
                                                size: 26
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Capabilities.tsx",
                                                lineNumber: 148,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "display h3",
                                            children: current.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: current.body
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        current.meta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "panel__label",
                                                    children: current.metaLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Capabilities.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "chips",
                                                    children: current.meta.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: m
                                                        }, m, false, {
                                                            fileName: "[project]/src/components/Capabilities.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Capabilities.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "link-arrow",
                                            children: [
                                                "Talk to our team ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "arrowUpRight",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Capabilities.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Capabilities.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel__visual",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Visual, {
                                        id: current.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Capabilities.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Capabilities.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, current.id, true, {
                            fileName: "[project]/src/components/Capabilities.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Capabilities.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Capabilities.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Capabilities.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Contact() {
    const [route, setRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].routes[0].id);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const onSubmit = async (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    route
                })
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            form.reset();
        } catch  {
            setStatus("error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "section section--soft",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container contact",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                            eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].eyebrow,
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].title,
                            sub: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].sub
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "radiogroup",
                            "aria-label": "Who would you like to reach?",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "routes",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].routes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            role: "radio",
                                            "aria-checked": route === r.id,
                                            className: `route-card ${route === r.id ? "is-active" : ""}`,
                                            onClick: ()=>setRoute(r.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "route-card__icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: r.icon,
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 54
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: r.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: r.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    }, r.id, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 100,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "form",
                        onSubmit: onSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form__to",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "mail",
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    "Sending to ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].routes.find((r)=>r.id === route)?.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 66,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form__row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Full name",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "name",
                                                required: true,
                                                autoComplete: "name",
                                                placeholder: "Jane Doe"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Work email",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "email",
                                                type: "email",
                                                required: true,
                                                autoComplete: "email",
                                                placeholder: "jane@company.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Company",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "company",
                                        autoComplete: "organization",
                                        placeholder: "Your company"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "How can we help?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "message",
                                        rows: 4,
                                        required: true,
                                        placeholder: "Tell us about your service and the market you want to reach…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                arrow: true,
                                disabled: status === "sending",
                                children: status === "sending" ? "Sending…" : "Send message"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `form__msg ${status}`,
                                role: "status",
                                "aria-live": "polite",
                                children: [
                                    status === "sent" && "Thanks — your message is on its way to the right team.",
                                    status === "error" && "Something went wrong. Please try again or email us directly."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Counter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Counter",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReducedMotion.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Counter({ value, suffix = "", duration = 1600 }) {
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.6,
        once: true
    });
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        if (reduced) {
            setN(value);
            return;
        }
        let raf = 0;
        const start = performance.now();
        const tick = (now)=>{
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 4); // easeOutQuart
            setN(Math.round(value * eased));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(raf);
    }, [
        inView,
        value,
        duration,
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            n,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Counter.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/DevPortal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevPortal",
    ()=>DevPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// NOTE: endpoint + package names are illustrative placeholders. Replace with real values.
const SNIPPETS = {
    JavaScript: `import { Cloud7 } from "@cloud7/sdk";

const cloud7 = new Cloud7(process.env.CLOUD7_API_KEY);

const payment = await cloud7.payments.create({
  amount: 199,
  currency: "BDT",
  channel: "dcb", // dcb | mfs | card | bank
  customer: { msisdn: "+8801XXXXXXXXX" },
  returnUrl: "https://example.com/thanks",
});

console.log(payment.status); // "pending_confirmation"`,
    Python: `from cloud7 import Cloud7

client = Cloud7(api_key=os.environ["CLOUD7_API_KEY"])

payment = client.payments.create(
    amount=199,
    currency="BDT",
    channel="dcb",  # dcb | mfs | card | bank
    customer={"msisdn": "+8801XXXXXXXXX"},
    return_url="https://example.com/thanks",
)

print(payment.status)  # "pending_confirmation"`,
    PHP: `<?php
$cloud7 = new \\Cloud7\\Client(getenv('CLOUD7_API_KEY'));

$payment = $cloud7->payments->create([
    'amount'    => 199,
    'currency'  => 'BDT',
    'channel'   => 'dcb', // dcb | mfs | card | bank
    'customer'  => ['msisdn' => '+8801XXXXXXXXX'],
    'returnUrl' => 'https://example.com/thanks',
]);

echo $payment->status; // pending_confirmation`,
    Java: `Cloud7 cloud7 = new Cloud7(System.getenv("CLOUD7_API_KEY"));

Payment payment = cloud7.payments().create(
    PaymentRequest.builder()
        .amount(199)
        .currency("BDT")
        .channel("dcb") // dcb | mfs | card | bank
        .customerMsisdn("+8801XXXXXXXXX")
        .returnUrl("https://example.com/thanks")
        .build());

System.out.println(payment.getStatus()); // pending_confirmation`
};
function DevPortal() {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("JavaScript");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const copy = async ()=>{
        try {
            await navigator.clipboard.writeText(SNIPPETS[lang]);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1600);
        } catch  {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "developers",
        className: "section dev",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container dev__grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                            eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["developers"].eyebrow,
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["developers"].title,
                            sub: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["developers"].sub,
                            light: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/DevPortal.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "dev__links",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["developers"].links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#developers",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: l.icon,
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DevPortal.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            l.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "arrowUpRight",
                                                size: 14,
                                                className: "dev__go"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DevPortal.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DevPortal.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                }, l.label, false, {
                                    fileName: "[project]/src/components/DevPortal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DevPortal.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "status",
                            role: "status",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "status__dot"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DevPortal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                " All systems operational"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DevPortal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DevPortal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 120,
                    className: "code",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "code__bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "code__lights",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/src/components/DevPortal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 63
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/src/components/DevPortal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 68
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/src/components/DevPortal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 73
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DevPortal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code__tabs",
                                    role: "tablist",
                                    "aria-label": "SDK language",
                                    children: Object.keys(SNIPPETS).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            role: "tab",
                                            "aria-selected": l === lang,
                                            className: l === lang ? "is-active" : "",
                                            onClick: ()=>setLang(l),
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/src/components/DevPortal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DevPortal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "code__copy",
                                    onClick: copy,
                                    "aria-label": "Copy code",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: copied ? "check" : "copy",
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DevPortal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        copied ? "Copied" : "Copy"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DevPortal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DevPortal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "code__body",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: SNIPPETS[lang]
                            }, void 0, false, {
                                fileName: "[project]/src/components/DevPortal.tsx",
                                lineNumber: 113,
                                columnNumber: 39
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DevPortal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DevPortal.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DevPortal.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DevPortal.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        setDark(document.documentElement.dataset.theme === "dark");
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = open ? "hidden" : "";
    }, [
        open
    ]);
    const toggleTheme = ()=>{
        const next = dark ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("c7-theme", next);
        } catch  {}
        setDark(!dark);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `header ${scrolled ? "is-scrolled" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container header__inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "header__logo",
                        "aria-label": "Cloud 7 home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "header__nav",
                        "aria-label": "Primary",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((item)=>item.label === "Solutions" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        className: "header__link",
                                        children: [
                                            item.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "chevron",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown__panel",
                                        role: "menu",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solutions"].items.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#solutions`,
                                                role: "menuitem",
                                                className: "dropdown__item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dropdown__icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: s.icon,
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 23
                                                    }, this),
                                                    s.title.replace("Cloud 7 for ", "")
                                                ]
                                            }, s.id, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: "header__link",
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-btn",
                                onClick: toggleTheme,
                                "aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: dark ? "sun" : "moon",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                href: "#contact",
                                className: "header__cta",
                                children: "Become a Partner"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-btn header__burger",
                                "aria-label": open ? "Close menu" : "Open menu",
                                "aria-expanded": open,
                                onClick: ()=>setOpen((v)=>!v),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: open ? "close" : "menu",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `drawer ${open ? "is-open" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container drawer__nav",
                    "aria-label": "Mobile",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: ()=>setOpen(false),
                                children: [
                                    item.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrow",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            href: "#contact",
                            onClick: ()=>setOpen(false),
                            arrow: true,
                            children: "Become a Partner"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorldMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorldMap.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Hero() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Soft pointer-follow glow (disabled for reduced motion via CSS).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const onMove = (e)=>{
            const r = el.getBoundingClientRect();
            el.style.setProperty("--mx", `${(e.clientX - r.left) / r.width * 100}%`);
            el.style.setProperty("--my", `${(e.clientY - r.top) / r.height * 100}%`);
        };
        el.addEventListener("pointermove", onMove);
        return ()=>el.removeEventListener("pointermove", onMove);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "top",
        ref: ref,
        className: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero__glow",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container hero__inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow hero__eyebrow rise",
                        style: {
                            ["--d"]: "0ms"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow__dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].eyebrow
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "display h1 rise",
                        style: {
                            ["--d"]: "80ms"
                        },
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].titleBefore,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].titleAccent
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 34,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lead hero__sub rise",
                        style: {
                            ["--d"]: "180ms"
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero__ctas rise",
                        style: {
                            ["--d"]: "280ms"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].ctas.primary.href,
                                arrow: true,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].ctas.primary.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].ctas.secondary.href,
                                variant: "secondary",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].ctas.secondary.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].ctas.tertiary.href,
                                className: "link-arrow",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].ctas.tertiary.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrowUpRight",
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero__stage rise",
                    style: {
                        ["--d"]: "380ms"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorldMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorldMap"], {}, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "hero__channels",
                            "aria-label": "Supported payment channels",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hero"].channels.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    style: {
                                        ["--i"]: i
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: c.icon,
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        c.label
                                    ]
                                }, c.label, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
/** Minimal stroke icon set (24x24, Lucide-style). Add an icon by adding a key below. */ const PATHS = {
    carrier: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    bank: '<path d="M3 22h18"/><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2 20 7H4z"/>',
    settle: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    compliance: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    play: '<path d="M6 3 20 12 6 21z"/>',
    gamepad: '<path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="2"/>',
    sparkles: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0l1.58 6.13a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    cap: '<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8M16 13H8M16 17H8"/>',
    tower: '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    plug: '<path d="M12 22v-5M9 8V2M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    headset: '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
    pin: '<path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
    undo: '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
    trend: '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
    flask: '<path d="M10 2v7.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V2M8.5 2h7M7 16h10"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    send: '<path d="M14.54 21.69a.5.5 0 0 0 .94-.03L22 2.5a.5.5 0 0 0-.64-.64L2.34 8.5a.5.5 0 0 0-.03.94l7.93 3.18a2 2 0 0 1 1.11 1.11z"/><path d="m21.85 2.15-10.94 10.94"/>',
    activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    arrowUpRight: '<path d="M7 7h10v10M7 17 17 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-15.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    copy: '<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'
};
function Icon({ name, size = 24, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.75,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false",
        ...rest,
        dangerouslySetInnerHTML: {
            __html: PATHS[name]
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Icon.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Journey.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Journey",
    ()=>Journey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReducedMotion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Journey() {
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.35,
        once: true
    });
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [reached, setReached] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const total = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["journey"].steps.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        if (reduced) {
            setReached(total - 1);
            return;
        }
        let i = -1;
        const id = setInterval(()=>{
            i += 1;
            setReached(i);
            setSelected(i);
            if (i >= total - 1) clearInterval(id);
        }, 480);
        return ()=>clearInterval(id);
    }, [
        inView,
        reduced,
        total
    ]);
    const pct = reached < 0 ? 0 : reached / (total - 1) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "journey",
        className: "section section--soft",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                        eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["journey"].eyebrow,
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["journey"].title,
                        center: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Journey.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Journey.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "timeline",
                    ref: ref,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline__scroll",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "timeline__track",
                                style: {
                                    ["--n"]: total
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "timeline__rail",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            style: {
                                                width: `${pct}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Journey.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Journey.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["journey"].steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `step ${i <= reached ? "is-reached" : ""} ${i === selected ? "is-selected" : ""}`,
                                                onClick: ()=>setSelected(i),
                                                "aria-current": i === selected ? "step" : undefined,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "step__dot",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Journey.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "step__title",
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Journey.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Journey.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        }, s.title, false, {
                                            fileName: "[project]/src/components/Journey.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Journey.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Journey.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline__detail",
                            "aria-live": "polite",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "timeline__num display",
                                    "aria-hidden": "true",
                                    children: [
                                        "0",
                                        selected + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Journey.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "display h3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["journey"].steps[selected].title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Journey.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["journey"].steps[selected].text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Journey.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Journey.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, selected, true, {
                            fileName: "[project]/src/components/Journey.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Journey.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Journey.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Journey.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "LogoMark",
    ()=>LogoMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LogoMark({ size = 32 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 40 40",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "c7g",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#7DD3FC"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Logo.tsx",
                            lineNumber: 6,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#0284C7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Logo.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Logo.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Logo.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "40",
                height: "40",
                rx: "12",
                fill: "url(#c7g)"
            }, void 0, false, {
                fileName: "[project]/src/components/Logo.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.5 27a5 5 0 0 1-.7-9.95A7 7 0 0 1 26.4 15.6 4.7 4.7 0 0 1 26 27z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/src/components/Logo.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Logo.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function Logo({ light = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `logo ${light ? "logo--light" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoMark, {}, void 0, false, {
                fileName: "[project]/src/components/Logo.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "logo__word",
                children: [
                    "Cloud",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "logo__seven",
                        children: "7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.tsx",
                        lineNumber: 24,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Logo.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Logo.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Platform.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Platform",
    ()=>Platform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const STEP_MS = 900;
const LOG = [
    "POST /v1/payments → request received",
    "Risk score 0.02 · routed to best channel",
    "Channel authorised the payment",
    "Funds captured · reconciliation queued",
    "Consumer confirmed · webhook delivered ✓"
];
function Platform() {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1); // -1 idle, 0..4 running
    const [running, setRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [picked, setPicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const run = ()=>{
        if (running) return;
        setPicked(null);
        setRunning(true);
        setStep(0);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!running) return;
        if (step >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].stages.length - 1) {
            timer.current = setTimeout(()=>setRunning(false), STEP_MS + 400);
        } else {
            timer.current = setTimeout(()=>setStep((s)=>s + 1), STEP_MS);
        }
        return ()=>{
            if (timer.current) clearTimeout(timer.current);
        };
    }, [
        running,
        step
    ]);
    const highlight = running || step >= 0 ? step : -1;
    const shown = picked ?? (step >= 0 ? step : null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "platform",
        className: "section platform",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                        eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].eyebrow,
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].title,
                        sub: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].sub,
                        center: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Platform.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Platform.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    className: "flow-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flow",
                            role: "list",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].stages.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flow__item",
                                    role: "listitem",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `flow__node ${i <= highlight && highlight >= 0 ? "is-lit" : ""} ${i === highlight && running ? "is-current" : ""} ${picked === i ? "is-picked" : ""}`,
                                            onClick: ()=>{
                                                if (!running) setPicked(i);
                                            },
                                            "aria-pressed": picked === i,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flow__icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: s.icon,
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Platform.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 48
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Platform.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Platform.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                s.id === "channels" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flow__chips",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].channelList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            children: c
                                                        }, c, false, {
                                                            fileName: "[project]/src/components/Platform.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Platform.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Platform.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].stages.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flow__link ${i < highlight ? "is-lit" : ""}`,
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/src/components/Platform.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Platform.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/components/Platform.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Platform.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flow__foot",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flow__console",
                                    "aria-live": "polite",
                                    children: shown === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "muted",
                                        children: "Select a stage, or run a simulated payment to watch it travel through the platform."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Platform.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flow__console-title",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].stages[shown].title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Platform.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].stages[shown].text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Platform.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            step >= 0 && picked === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: LOG[shown]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Platform.tsx",
                                                lineNumber: 95,
                                                columnNumber: 52
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Platform.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Platform.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: run,
                                    disabled: running,
                                    arrow: true,
                                    children: running ? "Processing…" : step >= 0 ? "Run again" : "Simulate a payment"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Platform.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Platform.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Platform.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "cap-grid",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platform"].capabilities.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            as: "li",
                            delay: i % 4 * 70,
                            className: "cap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cap__icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: c.icon,
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Platform.tsx",
                                        lineNumber: 108,
                                        columnNumber: 43
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Platform.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                c.title
                            ]
                        }, c.title, true, {
                            fileName: "[project]/src/components/Platform.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Platform.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Platform.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Platform.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.15,
        once: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: `reveal ${inView ? "is-in" : ""} ${className}`,
        style: {
            "--reveal-delay": `${delay}ms`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Solutions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Solutions",
    ()=>Solutions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Solutions() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solutions"].items[0].id);
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solutions"].items.find((s)=>s.id === active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solutions",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                        eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solutions"].eyebrow,
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solutions"].title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Solutions.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Solutions.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pills",
                    role: "tablist",
                    "aria-label": "Solutions by industry",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solutions"].items.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            role: "tab",
                            "aria-selected": s.id === active,
                            "aria-controls": "solution-panel",
                            className: `pill ${s.id === active ? "is-active" : ""}`,
                            onClick: ()=>setActive(s.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: s.icon,
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                s.title.replace("Cloud 7 for ", "")
                            ]
                        }, s.id, true, {
                            fileName: "[project]/src/components/Solutions.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Solutions.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "solution",
                    id: "solution-panel",
                    role: "tabpanel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "solution__head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "solution__icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: item.icon,
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Solutions.tsx",
                                        lineNumber: 38,
                                        columnNumber: 46
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "display h3",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Solutions.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "solution__cols",
                            children: [
                                [
                                    "Challenges",
                                    item.challenges
                                ],
                                [
                                    "Solutions",
                                    item.solutions
                                ],
                                [
                                    "Benefits",
                                    item.benefits
                                ]
                            ].map(([label, list])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "solution__col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Solutions.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: list.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "check",
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Solutions.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 23
                                                        }, this),
                                                        l
                                                    ]
                                                }, l, true, {
                                                    fileName: "[project]/src/components/Solutions.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Solutions.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Solutions.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "link-arrow",
                            children: [
                                "Talk to us about ",
                                item.title.replace("Cloud 7 for ", ""),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "arrowUpRight",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 63,
                                    columnNumber: 71
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Solutions.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/components/Solutions.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Solutions.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Solutions.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WhyBangladesh.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyBangladesh",
    ()=>WhyBangladesh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Counter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Counter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function WhyBangladesh() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Light parallax on decorative orbs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let raf = 0;
        const update = ()=>{
            const r = el.getBoundingClientRect();
            const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
            el.style.setProperty("--py", `${(progress - 0.5) * 120}px`);
            raf = 0;
        };
        const onScroll = ()=>{
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "why-bangladesh",
        ref: ref,
        className: "section bd",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bd__orb bd__orb--1",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/WhyBangladesh.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bd__orb bd__orb--2",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/WhyBangladesh.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "section-head is-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bangladesh"].eyebrow
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyBangladesh.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "display h2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bangladesh"].title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyBangladesh.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WhyBangladesh.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bd__counters",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bangladesh"].counters.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 100,
                                className: "bd__counter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "display",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Counter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Counter"], {
                                            value: c.value,
                                            suffix: c.suffix
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WhyBangladesh.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.label, true, {
                                fileName: "[project]/src/components/WhyBangladesh.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "bd__tiles",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bangladesh"].tiles.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                as: "li",
                                delay: i * 70,
                                className: "bd__tile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: t.icon,
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: t.big
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.label, true, {
                                fileName: "[project]/src/components/WhyBangladesh.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        className: "bd__cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "display h3",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bangladesh"].cta.label,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WhyBangladesh.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bangladesh"].cta.href,
                                variant: "light",
                                arrow: true,
                                children: "Start the conversation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WhyBangladesh.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WhyBangladesh.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WhyBangladesh.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WhyBangladesh.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WorldMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorldMap",
    ()=>WorldMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$worldDots$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/worldDots.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Must match scripts/generate-world-dots.mjs
const W = 1000, H = 480, LON0 = -170, LON1 = 190, LAT0 = 84, LAT1 = -58;
const project = (lon, lat)=>[
        (lon - LON0) / (LON1 - LON0) * W,
        (LAT0 - lat) / (LAT0 - LAT1) * H
    ];
function WorldMap() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dx, dy] = project(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dhaka"].lon, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dhaka"].lat);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapNodes"].map((n, i)=>{
            const [x, y] = project(n.lon, n.lat);
            const mx = (x + dx) / 2;
            const my = Math.min(y, dy) - 60 - Math.abs(x - dx) * 0.12; // arc height
            return {
                ...n,
                x,
                y,
                d: `M${x},${y} Q${mx},${my} ${dx},${dy}`,
                delay: i * 0.45
            };
        }), [
        dx,
        dy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "worldmap",
        viewBox: `0 0 ${W} ${H}`,
        role: "img",
        "aria-label": "Global merchants connected to Bangladesh through Cloud 7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "worldmap__dots",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$worldDots$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORLD_DOTS"].map(([x, y], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: x,
                        cy: y,
                        r: 2.1
                    }, i, false, {
                        fileName: "[project]/src/components/WorldMap.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/WorldMap.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            routes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: `route ${active === r.name ? "is-active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: `route-${r.name}`,
                            d: r.d,
                            className: "route__line",
                            style: {
                                animationDelay: `${r.delay}s`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorldMap.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "3.4",
                            className: "route__packet",
                            opacity: "0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("set", {
                                    attributeName: "opacity",
                                    to: "1",
                                    begin: `${r.delay + 1.2}s`,
                                    fill: "freeze"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorldMap.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                    dur: "3.6s",
                                    begin: `${r.delay + 1.2}s`,
                                    repeatCount: "indefinite",
                                    path: r.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorldMap.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorldMap.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, r.name, true, {
                    fileName: "[project]/src/components/WorldMap.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)),
            routes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "node",
                    transform: `translate(${r.x} ${r.y})`,
                    onMouseEnter: ()=>setActive(r.name),
                    onMouseLeave: ()=>setActive(null),
                    onFocus: ()=>setActive(r.name),
                    onBlur: ()=>setActive(null),
                    tabIndex: 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "11",
                            className: "node__halo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorldMap.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "4.5",
                            className: "node__core"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorldMap.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            className: "node__label",
                            transform: "translate(0 -18)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: -r.name.length * 3.6 - 8,
                                    y: -13,
                                    width: r.name.length * 7.2 + 16,
                                    height: 22,
                                    rx: 11
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorldMap.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    textAnchor: "middle",
                                    y: 2,
                                    children: r.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorldMap.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorldMap.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, r.name, true, {
                    fileName: "[project]/src/components/WorldMap.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `translate(${dx} ${dy})`,
                className: "hub",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "26",
                        className: "hub__pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorldMap.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "26",
                        className: "hub__pulse hub__pulse--2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorldMap.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "9",
                        className: "hub__core"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorldMap.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(0 -26)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-34",
                                y: "-14",
                                width: "68",
                                height: "24",
                                rx: "12",
                                className: "hub__tag"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorldMap.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                textAnchor: "middle",
                                y: "3",
                                children: "Dhaka"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorldMap.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorldMap.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorldMap.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorldMap.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * All marketing copy lives here (sourced from the Cloud 7 Website Content Blueprint).
 * Edit text in this file — components stay presentational.
 */ __turbopack_context__.s([
    "about",
    ()=>about,
    "bangladesh",
    ()=>bangladesh,
    "capabilities",
    ()=>capabilities,
    "caseStudy",
    ()=>caseStudy,
    "contact",
    ()=>contact,
    "developers",
    ()=>developers,
    "dhaka",
    ()=>dhaka,
    "footer",
    ()=>footer,
    "hero",
    ()=>hero,
    "industries",
    ()=>industries,
    "insights",
    ()=>insights,
    "journey",
    ()=>journey,
    "mapNodes",
    ()=>mapNodes,
    "nav",
    ()=>nav,
    "platform",
    ()=>platform,
    "site",
    ()=>site,
    "solutions",
    ()=>solutions,
    "trusted",
    ()=>trusted,
    "whyChoose",
    ()=>whyChoose
]);
const site = {
    name: "Cloud 7",
    legalName: "Cloud 7 Limited",
    tagline: "Powering Global Digital Commerce in Bangladesh",
    description: "Cloud 7 enables international digital platforms to launch, collect payments, stay compliant, settle funds and scale in Bangladesh through one trusted integration."
};
const nav = [
    {
        label: "Capabilities",
        href: "#capabilities"
    },
    {
        label: "Industries",
        href: "#industries"
    },
    {
        label: "Platform",
        href: "#platform"
    },
    {
        label: "Solutions",
        href: "#solutions"
    },
    {
        label: "Developers",
        href: "#developers"
    },
    {
        label: "Insights",
        href: "#insights"
    }
];
const hero = {
    eyebrow: "Digital Commerce Infrastructure",
    titleBefore: "Powering Global Digital Commerce in",
    titleAccent: "Bangladesh",
    sub: "Cloud 7 enables international digital platforms to launch, collect payments, remain compliant, settle funds, and scale in Bangladesh through a single trusted integration. From Direct Carrier Billing and Mobile Financial Services to cards, banking, tax compliance, and local operations — we simplify market entry.",
    ctas: {
        primary: {
            label: "Become a Partner",
            href: "#contact"
        },
        secondary: {
            label: "Schedule a Meeting",
            href: "#contact"
        },
        tertiary: {
            label: "Contact Sales",
            href: "#contact"
        }
    },
    channels: [
        {
            label: "Carrier Billing",
            icon: "carrier"
        },
        {
            label: "Mobile Wallets",
            icon: "wallet"
        },
        {
            label: "Cards",
            icon: "card"
        },
        {
            label: "Internet Banking",
            icon: "bank"
        }
    ]
};
const mapNodes = [
    {
        name: "San Francisco",
        lon: -122.4,
        lat: 37.8
    },
    {
        name: "New York",
        lon: -74,
        lat: 40.7
    },
    {
        name: "São Paulo",
        lon: -46.6,
        lat: -23.5
    },
    {
        name: "London",
        lon: -0.1,
        lat: 51.5
    },
    {
        name: "Stockholm",
        lon: 18,
        lat: 59.3
    },
    {
        name: "Dubai",
        lon: 55.3,
        lat: 25.2
    },
    {
        name: "Singapore",
        lon: 103.8,
        lat: 1.3
    },
    {
        name: "Tokyo",
        lon: 139.7,
        lat: 35.7
    },
    {
        name: "Sydney",
        lon: 151.2,
        lat: -33.9
    }
];
const dhaka = {
    name: "Dhaka",
    lon: 90.4,
    lat: 23.8
};
const trusted = {
    eyebrow: "Trusted by global platforms & local networks",
    merchants: [
        "Spotify",
        "Sony LIV",
        "Boku",
        "Starlink",
        "dLocal",
        "BeMobi",
        "Tpay",
        "Digital Virgo",
        "Hungama"
    ],
    mobile: [
        "Grameenphone",
        "Banglalink",
        "Robi",
        "bKash",
        "Nagad",
        "Visa",
        "Mastercard",
        "UnionPay"
    ],
    banks: 6
};
const about = {
    eyebrow: "About Cloud 7",
    title: "Connecting global digital businesses with Bangladesh",
    body: [
        "Cloud 7 is a leading digital payment enablement company helping international digital platforms establish and scale their business in Bangladesh.",
        "We bridge the gap between global merchants and local consumers by delivering secure payment collection, carrier billing, mobile wallet integration, settlement, compliance, customer operations, and regulatory support — all through one unified platform."
    ],
    quote: "Our mission is simple: enable global digital services to succeed locally.",
    facts: [
        {
            value: "15+",
            label: "Years serving Bangladesh's digital & payments ecosystem"
        },
        {
            value: "3",
            label: "Mobile operators — Grameenphone, Robi, Banglalink"
        },
        {
            value: "4",
            label: "Payment channels behind one integration"
        },
        {
            value: "PCI DSS",
            label: "Certified, with 24/7 monitoring"
        }
    ]
};
const capabilities = [
    {
        id: "dcb",
        icon: "carrier",
        title: "Direct Carrier Billing",
        short: "Pay with mobile balance",
        body: "Enable consumers to purchase digital services using their mobile balance — no card, no wallet required. The most inclusive payment method in Bangladesh.",
        metaLabel: "Supported operators",
        meta: [
            "Grameenphone",
            "Robi",
            "Banglalink"
        ]
    },
    {
        id: "mfs",
        icon: "wallet",
        title: "Mobile Financial Services",
        short: "Wallets people already use",
        body: "Accept payments through Bangladesh's leading mobile wallets — the country's dominant digital payment behaviour.",
        metaLabel: "Channels",
        meta: [
            "bKash",
            "Nagad",
            "Rocket"
        ]
    },
    {
        id: "cards",
        icon: "card",
        title: "Card Acceptance",
        short: "Local & international cards",
        body: "Accept international and local card payments through a fully compliant gateway.",
        metaLabel: "Networks",
        meta: [
            "Visa",
            "Mastercard",
            "UnionPay",
            "American Express"
        ]
    },
    {
        id: "banking",
        icon: "bank",
        title: "Internet Banking",
        short: "Bank-grade collections",
        body: "Direct integration with bank APIs for instant payments and large-value fund collection from consumer and enterprise accounts.",
        metaLabel: "Best for",
        meta: [
            "Instant payments",
            "Large-value collection",
            "Enterprise accounts"
        ]
    },
    {
        id: "settlement",
        icon: "settle",
        title: "Merchant Settlement",
        short: "Cross-border, multi-currency",
        body: "Cross-border settlement with multi-currency support, automated reconciliation, and reporting delivered on your preferred cadence.",
        metaLabel: "Includes",
        meta: [
            "Multi-currency",
            "Auto reconciliation",
            "Custom cadence"
        ]
    },
    {
        id: "compliance",
        icon: "compliance",
        title: "Compliance & Regulatory",
        short: "Audit-ready, end to end",
        body: "End-to-end regulatory coverage — KYC, AML, Bangladesh Bank compliance, VAT, tax, and audit-ready settlement reports.",
        metaLabel: "Coverage",
        meta: [
            "KYC",
            "AML",
            "Bangladesh Bank",
            "VAT & tax"
        ]
    }
];
const industries = [
    {
        icon: "play",
        title: "OTT & Video Streaming"
    },
    {
        icon: "gamepad",
        title: "Gaming"
    },
    {
        icon: "sparkles",
        title: "Artificial Intelligence Platforms"
    },
    {
        icon: "cloud",
        title: "Cloud & SaaS"
    },
    {
        icon: "grid",
        title: "App Stores & Digital Marketplaces"
    },
    {
        icon: "cap",
        title: "Education & EdTech"
    },
    {
        icon: "music",
        title: "Music & Audio Streaming"
    },
    {
        icon: "file",
        title: "Digital Content & Publishing"
    },
    {
        icon: "tower",
        title: "Telecommunications"
    },
    {
        icon: "building",
        title: "Government Digital Services"
    },
    {
        icon: "briefcase",
        title: "Enterprise Software"
    },
    {
        icon: "repeat",
        title: "Subscription Commerce"
    }
];
const bangladesh = {
    eyebrow: "Why Bangladesh",
    title: "A digital-first market of 170 million people",
    cta: {
        label: "Expand into Bangladesh with one integration",
        href: "#contact"
    },
    counters: [
        {
            value: 170,
            suffix: "M+",
            label: "Population"
        },
        {
            value: 120,
            suffix: "M+",
            label: "Internet users"
        },
        {
            value: 210,
            suffix: "M+",
            label: "Mobile connections"
        }
    ],
    tiles: [
        {
            icon: "trend",
            big: "Fast-growing",
            label: "Digital economy"
        },
        {
            icon: "carrier",
            big: "High",
            label: "Smartphone adoption"
        },
        {
            icon: "wallet",
            big: "Fastest-growing",
            label: "Mobile payments market in South Asia"
        },
        {
            icon: "users",
            big: "Large",
            label: "Youth population"
        },
        {
            icon: "repeat",
            big: "Rapidly expanding",
            label: "Subscription economy"
        }
    ]
};
const platform = {
    eyebrow: "Our Platform",
    title: "One integration. Every channel. Fully settled.",
    sub: "Follow a payment from a global merchant, through Cloud 7, to a consumer in Bangladesh — and back as settled funds.",
    stages: [
        {
            id: "merchant",
            icon: "globe",
            title: "Global Merchant",
            text: "Your app or service calls one API."
        },
        {
            id: "platform",
            icon: "cloud",
            title: "Cloud 7 Platform",
            text: "Routing, risk scoring and orchestration in real time."
        },
        {
            id: "channels",
            icon: "plug",
            title: "Payment Channels",
            text: "Carrier Billing · MFS · Cards · Internet Banking"
        },
        {
            id: "settlement",
            icon: "settle",
            title: "Settlement Engine",
            text: "Reconciled, reported and paid out on your cadence."
        },
        {
            id: "consumer",
            icon: "carrier",
            title: "Consumer",
            text: "Pays the way they already do."
        }
    ],
    channelList: [
        "Carrier Billing",
        "MFS",
        "Cards",
        "Internet Banking"
    ],
    capabilities: [
        {
            icon: "bolt",
            title: "Real-time transaction processing"
        },
        {
            icon: "shield",
            title: "Fraud detection and risk scoring"
        },
        {
            icon: "chart",
            title: "Analytics and business intelligence"
        },
        {
            icon: "settle",
            title: "Automated settlement"
        },
        {
            icon: "undo",
            title: "Refunds and dispute management"
        },
        {
            icon: "plug",
            title: "Webhook APIs and event streaming"
        },
        {
            icon: "file",
            title: "Comprehensive reporting"
        },
        {
            icon: "grid",
            title: "Unified merchant dashboard"
        }
    ]
};
const whyChoose = {
    eyebrow: "Why Cloud 7",
    title: "The local partner global platforms rely on",
    items: [
        {
            icon: "pin",
            title: "Local Market Expertise",
            text: "15+ years serving Bangladesh's digital and payments ecosystem."
        },
        {
            icon: "plug",
            title: "One Integration",
            text: "Connect once. Reach every payment channel in the country."
        },
        {
            icon: "rocket",
            title: "Faster Market Entry",
            text: "Launch in weeks, not months — with a partner who has done it before."
        },
        {
            icon: "compliance",
            title: "Regulatory Expertise",
            text: "Bangladesh Bank, BTRC, VAT, and tax compliance handled end-to-end."
        },
        {
            icon: "lock",
            title: "Enterprise Security",
            text: "PCI DSS certified, end-to-end encryption, 24/7 monitoring, high availability."
        },
        {
            icon: "headset",
            title: "Dedicated Support",
            text: "Named technical, commercial, and operational contacts throughout the partnership."
        }
    ]
};
const journey = {
    eyebrow: "Global Merchant Journey",
    title: "From first conversation to live revenue",
    steps: [
        {
            title: "Discovery",
            text: "We map your product, audience and goals for Bangladesh and recommend the right channel mix."
        },
        {
            title: "Commercial Agreement",
            text: "Pricing, revenue share and settlement terms agreed with a named commercial contact."
        },
        {
            title: "Technical Integration",
            text: "Connect once to the Cloud 7 API using SDKs, sandbox credentials and webhooks."
        },
        {
            title: "Testing & Certification",
            text: "End-to-end test flows across operators, wallets, cards and banks before launch."
        },
        {
            title: "Go-Live",
            text: "Production launch with monitoring and operational support on hand from day one."
        },
        {
            title: "Settlement",
            text: "Automated reconciliation and cross-border payout in your preferred currency and cadence."
        },
        {
            title: "Business Growth",
            text: "Analytics, optimisation and new channels as your subscriber base scales."
        }
    ]
};
const solutions = {
    eyebrow: "Solutions",
    title: "Built for how your industry earns in Bangladesh",
    items: [
        {
            id: "ott",
            icon: "play",
            title: "Cloud 7 for OTT & Streaming",
            challenges: [
                "Low card penetration among subscribers",
                "Churn from failed or declined renewals",
                "Multiple operator integrations"
            ],
            solutions: [
                "Direct Carrier Billing across all three MNOs",
                "Wallet and card fallbacks",
                "Automated renewal & retry logic"
            ],
            benefits: [
                "Wider subscriber reach",
                "Higher conversion at checkout",
                "Lower customer acquisition cost"
            ]
        },
        {
            id: "ai",
            icon: "sparkles",
            title: "Cloud 7 for AI Platforms",
            challenges: [
                "No local way to pay for AI subscriptions",
                "Currency and cross-border friction",
                "Regulatory uncertainty"
            ],
            solutions: [
                "Local payment channels behind one API",
                "Multi-currency settlement",
                "Compliance handled by Cloud 7"
            ],
            benefits: [
                "Monetise a new, young user base",
                "Predictable payouts",
                "Faster launch"
            ]
        },
        {
            id: "gaming",
            icon: "gamepad",
            title: "Cloud 7 for Gaming",
            challenges: [
                "Players without cards",
                "Small-ticket, high-frequency purchases",
                "Fraud and chargeback exposure"
            ],
            solutions: [
                "Instant mobile-balance and wallet payments",
                "Risk scoring on every transaction",
                "Refund & dispute tooling"
            ],
            benefits: [
                "More paying players",
                "Lower fraud losses",
                "Frictionless top-ups"
            ]
        },
        {
            id: "saas",
            icon: "cloud",
            title: "Cloud 7 for SaaS",
            challenges: [
                "Enterprise invoicing across banks",
                "Local tax and VAT requirements",
                "Reconciliation overhead"
            ],
            solutions: [
                "Internet banking for large-value collection",
                "VAT and tax compliance",
                "Automated reconciliation"
            ],
            benefits: [
                "Faster collections",
                "Audit-ready reporting",
                "Less finance admin"
            ]
        },
        {
            id: "media",
            icon: "file",
            title: "Cloud 7 for Digital Media",
            challenges: [
                "Micro-payments for content",
                "Fragmented payment preferences",
                "Limited local analytics"
            ],
            solutions: [
                "Pay-per-content & subscription billing",
                "Unified channels",
                "Merchant dashboard & reporting"
            ],
            benefits: [
                "New revenue from local audiences",
                "Clear performance insight",
                "Simple operations"
            ]
        },
        {
            id: "telecom",
            icon: "tower",
            title: "Cloud 7 for Telecom",
            challenges: [
                "Launching partner services at pace",
                "Billing integrations per partner",
                "Settlement transparency"
            ],
            solutions: [
                "Standardised carrier-billing flows",
                "Partner onboarding tooling",
                "Automated settlement reports"
            ],
            benefits: [
                "More digital services on-network",
                "Shorter partner onboarding",
                "Trusted reporting"
            ]
        },
        {
            id: "government",
            icon: "building",
            title: "Cloud 7 for Government",
            challenges: [
                "Citizens paying across many channels",
                "Security and audit requirements",
                "Reconciliation across agencies"
            ],
            solutions: [
                "Single collection layer for every channel",
                "PCI DSS-grade security",
                "Audit-ready reports"
            ],
            benefits: [
                "Broader citizen access",
                "Transparent records",
                "Lower operating cost"
            ]
        },
        {
            id: "education",
            icon: "cap",
            title: "Cloud 7 for Education",
            challenges: [
                "Parents and students without cards",
                "Seasonal payment peaks",
                "Manual fee reconciliation"
            ],
            solutions: [
                "Mobile balance & wallet payments",
                "High-availability processing",
                "Automated reconciliation"
            ],
            benefits: [
                "More enrolments completed",
                "Reliable at peak load",
                "Time saved for admin teams"
            ]
        }
    ]
};
const caseStudy = {
    eyebrow: "Success Stories",
    title: "How an international OTT platform went live in six weeks",
    client: "International OTT Platform",
    challenge: "No reliable local payment method to reach subscription customers in Bangladesh.",
    solution: "Direct Carrier Billing across all three MNOs, integrated in six weeks.",
    result: "Subscription revenue grew, conversion improved, customer acquisition cost fell significantly.",
    highlights: [
        {
            value: "6",
            label: "weeks to integrate"
        },
        {
            value: "3",
            label: "mobile operators live"
        }
    ]
};
const insights = {
    eyebrow: "Insights",
    title: "Thought leadership on Bangladesh's digital economy",
    articles: [
        {
            title: "How to Enter the Bangladesh Digital Market",
            tag: "Guide",
            icon: "rocket"
        },
        {
            title: "Direct Carrier Billing Explained",
            tag: "Explainer",
            icon: "carrier"
        },
        {
            title: "The Bangladesh Payment Landscape",
            tag: "Report",
            icon: "bank"
        },
        {
            title: "Mobile Payments in Bangladesh — Annual Report",
            tag: "Report",
            icon: "wallet"
        },
        {
            title: "The Rise of the Subscription Economy",
            tag: "Insight",
            icon: "repeat"
        },
        {
            title: "Bangladesh OTT Market Outlook",
            tag: "Outlook",
            icon: "play"
        },
        {
            title: "Monetising AI Subscriptions in Emerging Markets",
            tag: "Insight",
            icon: "sparkles"
        },
        {
            title: "Bangladesh Gaming Market Report",
            tag: "Report",
            icon: "gamepad"
        },
        {
            title: "Bangladesh Digital Economy — A Global Merchant's Guide",
            tag: "Guide",
            icon: "globe"
        }
    ]
};
const developers = {
    eyebrow: "Developer Portal",
    title: "Built by engineers, for engineers",
    sub: "Sandbox, SDKs and clear docs so your team can go from API key to live payments quickly.",
    links: [
        {
            icon: "book",
            label: "API Documentation"
        },
        {
            icon: "flask",
            label: "Sandbox Environment"
        },
        {
            icon: "code",
            label: "SDKs (JavaScript, Python, PHP, Java)"
        },
        {
            icon: "plug",
            label: "Webhooks & Event Reference"
        },
        {
            icon: "lock",
            label: "Authentication & Security Guide"
        },
        {
            icon: "list",
            label: "Step-by-step Integration Guide"
        },
        {
            icon: "send",
            label: "Postman Collection"
        },
        {
            icon: "activity",
            label: "Live System Status Page"
        }
    ]
};
const contact = {
    eyebrow: "Contact",
    title: "Let's bring your service to Bangladesh",
    sub: "Choose the team you need and we'll route your message to the right people on the first click.",
    routes: [
        {
            id: "sales",
            icon: "briefcase",
            title: "Sales & Business Development",
            text: "Pricing, scope and commercial terms."
        },
        {
            id: "partnerships",
            icon: "users",
            title: "Global Partnerships",
            text: "Market-entry and strategic partnerships."
        },
        {
            id: "support",
            icon: "headset",
            title: "Technical Support",
            text: "Integration help and incident support."
        },
        {
            id: "media",
            icon: "file",
            title: "Media & Press",
            text: "Interviews, briefings and assets."
        },
        {
            id: "careers",
            icon: "rocket",
            title: "Careers",
            text: "Join the Cloud 7 team."
        },
        {
            id: "offices",
            icon: "pin",
            title: "Office Locations",
            text: "Find us in Dhaka and beyond."
        }
    ]
};
const footer = {
    columns: [
        {
            title: "Solutions",
            links: solutions.items.map((s)=>s.title.replace("Cloud 7 for ", ""))
        },
        {
            title: "Industries",
            links: [
                "OTT & Streaming",
                "Gaming",
                "AI Platforms",
                "SaaS",
                "Education",
                "Government"
            ]
        },
        {
            title: "Resources",
            links: [
                "Insights",
                "Case Studies",
                "Reports",
                "Guides"
            ]
        },
        {
            title: "Company",
            links: [
                "About",
                "Careers",
                "Press",
                "Contact"
            ]
        },
        {
            title: "Partners",
            links: [
                "Become a Partner",
                "Operators",
                "Wallets & Banks",
                "Global Merchants"
            ]
        },
        {
            title: "Developers",
            links: [
                "API Docs",
                "Sandbox",
                "SDKs",
                "Status"
            ]
        }
    ],
    legal: [
        "Privacy Policy",
        "Terms of Service",
        "Security",
        "Regulatory Disclosures"
    ],
    social: [
        "LinkedIn",
        "X",
        "YouTube"
    ]
};
}),
"[project]/src/data/worldDots.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// AUTO-GENERATED by scripts/generate-world-dots.mjs — do not edit by hand.
// Stylised dotted world map, coordinates in a 1000 x 480 viewBox.
__turbopack_context__.s([
    "WORLD_DOTS",
    ()=>WORLD_DOTS
]);
const WORLD_DOTS = [
    [
        302,
        11
    ],
    [
        311,
        11
    ],
    [
        320,
        11
    ],
    [
        329,
        11
    ],
    [
        338,
        11
    ],
    [
        347,
        11
    ],
    [
        356,
        11
    ],
    [
        364,
        11
    ],
    [
        293,
        22
    ],
    [
        302,
        22
    ],
    [
        311,
        22
    ],
    [
        320,
        22
    ],
    [
        329,
        22
    ],
    [
        338,
        22
    ],
    [
        347,
        22
    ],
    [
        356,
        22
    ],
    [
        364,
        22
    ],
    [
        373,
        22
    ],
    [
        382,
        22
    ],
    [
        391,
        22
    ],
    [
        400,
        22
    ],
    [
        409,
        22
    ],
    [
        747,
        22
    ],
    [
        756,
        22
    ],
    [
        284,
        32
    ],
    [
        293,
        32
    ],
    [
        302,
        32
    ],
    [
        311,
        32
    ],
    [
        320,
        32
    ],
    [
        329,
        32
    ],
    [
        338,
        32
    ],
    [
        347,
        32
    ],
    [
        356,
        32
    ],
    [
        364,
        32
    ],
    [
        373,
        32
    ],
    [
        382,
        32
    ],
    [
        391,
        32
    ],
    [
        400,
        32
    ],
    [
        409,
        32
    ],
    [
        702,
        32
    ],
    [
        711,
        32
    ],
    [
        720,
        32
    ],
    [
        729,
        32
    ],
    [
        738,
        32
    ],
    [
        747,
        32
    ],
    [
        756,
        32
    ],
    [
        764,
        32
    ],
    [
        773,
        32
    ],
    [
        782,
        32
    ],
    [
        791,
        32
    ],
    [
        800,
        32
    ],
    [
        809,
        32
    ],
    [
        178,
        43
    ],
    [
        187,
        43
    ],
    [
        196,
        43
    ],
    [
        204,
        43
    ],
    [
        213,
        43
    ],
    [
        293,
        43
    ],
    [
        302,
        43
    ],
    [
        311,
        43
    ],
    [
        320,
        43
    ],
    [
        329,
        43
    ],
    [
        338,
        43
    ],
    [
        347,
        43
    ],
    [
        356,
        43
    ],
    [
        364,
        43
    ],
    [
        373,
        43
    ],
    [
        382,
        43
    ],
    [
        391,
        43
    ],
    [
        400,
        43
    ],
    [
        409,
        43
    ],
    [
        658,
        43
    ],
    [
        667,
        43
    ],
    [
        676,
        43
    ],
    [
        684,
        43
    ],
    [
        693,
        43
    ],
    [
        702,
        43
    ],
    [
        711,
        43
    ],
    [
        720,
        43
    ],
    [
        729,
        43
    ],
    [
        738,
        43
    ],
    [
        747,
        43
    ],
    [
        756,
        43
    ],
    [
        764,
        43
    ],
    [
        773,
        43
    ],
    [
        782,
        43
    ],
    [
        791,
        43
    ],
    [
        800,
        43
    ],
    [
        809,
        43
    ],
    [
        818,
        43
    ],
    [
        827,
        43
    ],
    [
        836,
        43
    ],
    [
        844,
        43
    ],
    [
        853,
        43
    ],
    [
        862,
        43
    ],
    [
        871,
        43
    ],
    [
        880,
        43
    ],
    [
        27,
        54
    ],
    [
        36,
        54
    ],
    [
        44,
        54
    ],
    [
        53,
        54
    ],
    [
        62,
        54
    ],
    [
        71,
        54
    ],
    [
        80,
        54
    ],
    [
        89,
        54
    ],
    [
        98,
        54
    ],
    [
        107,
        54
    ],
    [
        116,
        54
    ],
    [
        124,
        54
    ],
    [
        133,
        54
    ],
    [
        142,
        54
    ],
    [
        151,
        54
    ],
    [
        160,
        54
    ],
    [
        169,
        54
    ],
    [
        178,
        54
    ],
    [
        187,
        54
    ],
    [
        196,
        54
    ],
    [
        204,
        54
    ],
    [
        213,
        54
    ],
    [
        222,
        54
    ],
    [
        231,
        54
    ],
    [
        240,
        54
    ],
    [
        302,
        54
    ],
    [
        311,
        54
    ],
    [
        320,
        54
    ],
    [
        329,
        54
    ],
    [
        338,
        54
    ],
    [
        347,
        54
    ],
    [
        356,
        54
    ],
    [
        364,
        54
    ],
    [
        373,
        54
    ],
    [
        382,
        54
    ],
    [
        391,
        54
    ],
    [
        400,
        54
    ],
    [
        516,
        54
    ],
    [
        524,
        54
    ],
    [
        533,
        54
    ],
    [
        542,
        54
    ],
    [
        551,
        54
    ],
    [
        560,
        54
    ],
    [
        569,
        54
    ],
    [
        604,
        54
    ],
    [
        613,
        54
    ],
    [
        622,
        54
    ],
    [
        631,
        54
    ],
    [
        640,
        54
    ],
    [
        649,
        54
    ],
    [
        658,
        54
    ],
    [
        667,
        54
    ],
    [
        676,
        54
    ],
    [
        684,
        54
    ],
    [
        693,
        54
    ],
    [
        702,
        54
    ],
    [
        711,
        54
    ],
    [
        720,
        54
    ],
    [
        729,
        54
    ],
    [
        738,
        54
    ],
    [
        747,
        54
    ],
    [
        756,
        54
    ],
    [
        764,
        54
    ],
    [
        773,
        54
    ],
    [
        782,
        54
    ],
    [
        791,
        54
    ],
    [
        800,
        54
    ],
    [
        809,
        54
    ],
    [
        818,
        54
    ],
    [
        827,
        54
    ],
    [
        836,
        54
    ],
    [
        844,
        54
    ],
    [
        853,
        54
    ],
    [
        862,
        54
    ],
    [
        871,
        54
    ],
    [
        880,
        54
    ],
    [
        889,
        54
    ],
    [
        898,
        54
    ],
    [
        907,
        54
    ],
    [
        916,
        54
    ],
    [
        924,
        54
    ],
    [
        933,
        54
    ],
    [
        942,
        54
    ],
    [
        951,
        54
    ],
    [
        960,
        54
    ],
    [
        969,
        54
    ],
    [
        9,
        65
    ],
    [
        18,
        65
    ],
    [
        27,
        65
    ],
    [
        36,
        65
    ],
    [
        44,
        65
    ],
    [
        53,
        65
    ],
    [
        62,
        65
    ],
    [
        71,
        65
    ],
    [
        80,
        65
    ],
    [
        89,
        65
    ],
    [
        98,
        65
    ],
    [
        107,
        65
    ],
    [
        116,
        65
    ],
    [
        124,
        65
    ],
    [
        133,
        65
    ],
    [
        142,
        65
    ],
    [
        151,
        65
    ],
    [
        160,
        65
    ],
    [
        169,
        65
    ],
    [
        178,
        65
    ],
    [
        187,
        65
    ],
    [
        196,
        65
    ],
    [
        204,
        65
    ],
    [
        213,
        65
    ],
    [
        222,
        65
    ],
    [
        231,
        65
    ],
    [
        240,
        65
    ],
    [
        249,
        65
    ],
    [
        258,
        65
    ],
    [
        267,
        65
    ],
    [
        311,
        65
    ],
    [
        320,
        65
    ],
    [
        329,
        65
    ],
    [
        338,
        65
    ],
    [
        347,
        65
    ],
    [
        356,
        65
    ],
    [
        364,
        65
    ],
    [
        373,
        65
    ],
    [
        498,
        65
    ],
    [
        507,
        65
    ],
    [
        516,
        65
    ],
    [
        524,
        65
    ],
    [
        533,
        65
    ],
    [
        542,
        65
    ],
    [
        551,
        65
    ],
    [
        560,
        65
    ],
    [
        569,
        65
    ],
    [
        578,
        65
    ],
    [
        587,
        65
    ],
    [
        596,
        65
    ],
    [
        604,
        65
    ],
    [
        613,
        65
    ],
    [
        622,
        65
    ],
    [
        631,
        65
    ],
    [
        640,
        65
    ],
    [
        649,
        65
    ],
    [
        658,
        65
    ],
    [
        667,
        65
    ],
    [
        676,
        65
    ],
    [
        684,
        65
    ],
    [
        693,
        65
    ],
    [
        702,
        65
    ],
    [
        711,
        65
    ],
    [
        720,
        65
    ],
    [
        729,
        65
    ],
    [
        738,
        65
    ],
    [
        747,
        65
    ],
    [
        756,
        65
    ],
    [
        764,
        65
    ],
    [
        773,
        65
    ],
    [
        782,
        65
    ],
    [
        791,
        65
    ],
    [
        800,
        65
    ],
    [
        809,
        65
    ],
    [
        818,
        65
    ],
    [
        827,
        65
    ],
    [
        836,
        65
    ],
    [
        844,
        65
    ],
    [
        853,
        65
    ],
    [
        862,
        65
    ],
    [
        871,
        65
    ],
    [
        880,
        65
    ],
    [
        889,
        65
    ],
    [
        898,
        65
    ],
    [
        907,
        65
    ],
    [
        916,
        65
    ],
    [
        924,
        65
    ],
    [
        933,
        65
    ],
    [
        942,
        65
    ],
    [
        951,
        65
    ],
    [
        18,
        76
    ],
    [
        27,
        76
    ],
    [
        36,
        76
    ],
    [
        44,
        76
    ],
    [
        53,
        76
    ],
    [
        62,
        76
    ],
    [
        71,
        76
    ],
    [
        80,
        76
    ],
    [
        89,
        76
    ],
    [
        98,
        76
    ],
    [
        107,
        76
    ],
    [
        116,
        76
    ],
    [
        124,
        76
    ],
    [
        133,
        76
    ],
    [
        142,
        76
    ],
    [
        151,
        76
    ],
    [
        160,
        76
    ],
    [
        169,
        76
    ],
    [
        178,
        76
    ],
    [
        187,
        76
    ],
    [
        196,
        76
    ],
    [
        204,
        76
    ],
    [
        213,
        76
    ],
    [
        222,
        76
    ],
    [
        231,
        76
    ],
    [
        240,
        76
    ],
    [
        249,
        76
    ],
    [
        258,
        76
    ],
    [
        267,
        76
    ],
    [
        276,
        76
    ],
    [
        284,
        76
    ],
    [
        320,
        76
    ],
    [
        329,
        76
    ],
    [
        338,
        76
    ],
    [
        347,
        76
    ],
    [
        356,
        76
    ],
    [
        489,
        76
    ],
    [
        498,
        76
    ],
    [
        507,
        76
    ],
    [
        516,
        76
    ],
    [
        524,
        76
    ],
    [
        533,
        76
    ],
    [
        542,
        76
    ],
    [
        551,
        76
    ],
    [
        560,
        76
    ],
    [
        569,
        76
    ],
    [
        578,
        76
    ],
    [
        587,
        76
    ],
    [
        596,
        76
    ],
    [
        604,
        76
    ],
    [
        613,
        76
    ],
    [
        622,
        76
    ],
    [
        631,
        76
    ],
    [
        640,
        76
    ],
    [
        649,
        76
    ],
    [
        658,
        76
    ],
    [
        667,
        76
    ],
    [
        676,
        76
    ],
    [
        684,
        76
    ],
    [
        693,
        76
    ],
    [
        702,
        76
    ],
    [
        711,
        76
    ],
    [
        720,
        76
    ],
    [
        729,
        76
    ],
    [
        738,
        76
    ],
    [
        747,
        76
    ],
    [
        756,
        76
    ],
    [
        764,
        76
    ],
    [
        773,
        76
    ],
    [
        782,
        76
    ],
    [
        791,
        76
    ],
    [
        800,
        76
    ],
    [
        809,
        76
    ],
    [
        818,
        76
    ],
    [
        827,
        76
    ],
    [
        836,
        76
    ],
    [
        844,
        76
    ],
    [
        853,
        76
    ],
    [
        862,
        76
    ],
    [
        871,
        76
    ],
    [
        880,
        76
    ],
    [
        889,
        76
    ],
    [
        898,
        76
    ],
    [
        907,
        76
    ],
    [
        916,
        76
    ],
    [
        924,
        76
    ],
    [
        933,
        76
    ],
    [
        98,
        87
    ],
    [
        107,
        87
    ],
    [
        116,
        87
    ],
    [
        124,
        87
    ],
    [
        133,
        87
    ],
    [
        142,
        87
    ],
    [
        151,
        87
    ],
    [
        160,
        87
    ],
    [
        169,
        87
    ],
    [
        178,
        87
    ],
    [
        187,
        87
    ],
    [
        196,
        87
    ],
    [
        204,
        87
    ],
    [
        213,
        87
    ],
    [
        222,
        87
    ],
    [
        231,
        87
    ],
    [
        240,
        87
    ],
    [
        249,
        87
    ],
    [
        258,
        87
    ],
    [
        267,
        87
    ],
    [
        276,
        87
    ],
    [
        284,
        87
    ],
    [
        293,
        87
    ],
    [
        302,
        87
    ],
    [
        507,
        87
    ],
    [
        516,
        87
    ],
    [
        524,
        87
    ],
    [
        533,
        87
    ],
    [
        542,
        87
    ],
    [
        551,
        87
    ],
    [
        560,
        87
    ],
    [
        569,
        87
    ],
    [
        578,
        87
    ],
    [
        587,
        87
    ],
    [
        596,
        87
    ],
    [
        604,
        87
    ],
    [
        613,
        87
    ],
    [
        622,
        87
    ],
    [
        631,
        87
    ],
    [
        640,
        87
    ],
    [
        649,
        87
    ],
    [
        658,
        87
    ],
    [
        667,
        87
    ],
    [
        676,
        87
    ],
    [
        684,
        87
    ],
    [
        693,
        87
    ],
    [
        702,
        87
    ],
    [
        711,
        87
    ],
    [
        720,
        87
    ],
    [
        729,
        87
    ],
    [
        738,
        87
    ],
    [
        747,
        87
    ],
    [
        756,
        87
    ],
    [
        764,
        87
    ],
    [
        773,
        87
    ],
    [
        782,
        87
    ],
    [
        791,
        87
    ],
    [
        800,
        87
    ],
    [
        809,
        87
    ],
    [
        818,
        87
    ],
    [
        827,
        87
    ],
    [
        836,
        87
    ],
    [
        844,
        87
    ],
    [
        853,
        87
    ],
    [
        862,
        87
    ],
    [
        871,
        87
    ],
    [
        880,
        87
    ],
    [
        889,
        87
    ],
    [
        898,
        87
    ],
    [
        907,
        87
    ],
    [
        916,
        87
    ],
    [
        107,
        97
    ],
    [
        116,
        97
    ],
    [
        124,
        97
    ],
    [
        133,
        97
    ],
    [
        142,
        97
    ],
    [
        151,
        97
    ],
    [
        160,
        97
    ],
    [
        169,
        97
    ],
    [
        178,
        97
    ],
    [
        187,
        97
    ],
    [
        196,
        97
    ],
    [
        204,
        97
    ],
    [
        213,
        97
    ],
    [
        222,
        97
    ],
    [
        231,
        97
    ],
    [
        240,
        97
    ],
    [
        249,
        97
    ],
    [
        258,
        97
    ],
    [
        267,
        97
    ],
    [
        276,
        97
    ],
    [
        284,
        97
    ],
    [
        293,
        97
    ],
    [
        302,
        97
    ],
    [
        462,
        97
    ],
    [
        471,
        97
    ],
    [
        498,
        97
    ],
    [
        507,
        97
    ],
    [
        516,
        97
    ],
    [
        524,
        97
    ],
    [
        533,
        97
    ],
    [
        542,
        97
    ],
    [
        551,
        97
    ],
    [
        560,
        97
    ],
    [
        569,
        97
    ],
    [
        578,
        97
    ],
    [
        587,
        97
    ],
    [
        596,
        97
    ],
    [
        604,
        97
    ],
    [
        613,
        97
    ],
    [
        622,
        97
    ],
    [
        631,
        97
    ],
    [
        640,
        97
    ],
    [
        649,
        97
    ],
    [
        658,
        97
    ],
    [
        667,
        97
    ],
    [
        676,
        97
    ],
    [
        684,
        97
    ],
    [
        693,
        97
    ],
    [
        702,
        97
    ],
    [
        711,
        97
    ],
    [
        720,
        97
    ],
    [
        729,
        97
    ],
    [
        738,
        97
    ],
    [
        747,
        97
    ],
    [
        756,
        97
    ],
    [
        764,
        97
    ],
    [
        773,
        97
    ],
    [
        782,
        97
    ],
    [
        791,
        97
    ],
    [
        800,
        97
    ],
    [
        809,
        97
    ],
    [
        818,
        97
    ],
    [
        827,
        97
    ],
    [
        836,
        97
    ],
    [
        844,
        97
    ],
    [
        853,
        97
    ],
    [
        862,
        97
    ],
    [
        871,
        97
    ],
    [
        880,
        97
    ],
    [
        889,
        97
    ],
    [
        124,
        108
    ],
    [
        133,
        108
    ],
    [
        142,
        108
    ],
    [
        151,
        108
    ],
    [
        160,
        108
    ],
    [
        169,
        108
    ],
    [
        178,
        108
    ],
    [
        187,
        108
    ],
    [
        196,
        108
    ],
    [
        204,
        108
    ],
    [
        213,
        108
    ],
    [
        222,
        108
    ],
    [
        231,
        108
    ],
    [
        240,
        108
    ],
    [
        249,
        108
    ],
    [
        258,
        108
    ],
    [
        267,
        108
    ],
    [
        276,
        108
    ],
    [
        284,
        108
    ],
    [
        293,
        108
    ],
    [
        302,
        108
    ],
    [
        311,
        108
    ],
    [
        462,
        108
    ],
    [
        471,
        108
    ],
    [
        489,
        108
    ],
    [
        498,
        108
    ],
    [
        507,
        108
    ],
    [
        516,
        108
    ],
    [
        524,
        108
    ],
    [
        533,
        108
    ],
    [
        542,
        108
    ],
    [
        551,
        108
    ],
    [
        560,
        108
    ],
    [
        569,
        108
    ],
    [
        578,
        108
    ],
    [
        587,
        108
    ],
    [
        596,
        108
    ],
    [
        604,
        108
    ],
    [
        613,
        108
    ],
    [
        622,
        108
    ],
    [
        631,
        108
    ],
    [
        640,
        108
    ],
    [
        649,
        108
    ],
    [
        658,
        108
    ],
    [
        667,
        108
    ],
    [
        676,
        108
    ],
    [
        684,
        108
    ],
    [
        693,
        108
    ],
    [
        702,
        108
    ],
    [
        711,
        108
    ],
    [
        720,
        108
    ],
    [
        729,
        108
    ],
    [
        738,
        108
    ],
    [
        747,
        108
    ],
    [
        756,
        108
    ],
    [
        764,
        108
    ],
    [
        773,
        108
    ],
    [
        782,
        108
    ],
    [
        791,
        108
    ],
    [
        800,
        108
    ],
    [
        809,
        108
    ],
    [
        818,
        108
    ],
    [
        827,
        108
    ],
    [
        836,
        108
    ],
    [
        844,
        108
    ],
    [
        853,
        108
    ],
    [
        862,
        108
    ],
    [
        133,
        119
    ],
    [
        142,
        119
    ],
    [
        151,
        119
    ],
    [
        160,
        119
    ],
    [
        169,
        119
    ],
    [
        178,
        119
    ],
    [
        187,
        119
    ],
    [
        196,
        119
    ],
    [
        204,
        119
    ],
    [
        213,
        119
    ],
    [
        222,
        119
    ],
    [
        231,
        119
    ],
    [
        240,
        119
    ],
    [
        249,
        119
    ],
    [
        258,
        119
    ],
    [
        267,
        119
    ],
    [
        276,
        119
    ],
    [
        284,
        119
    ],
    [
        293,
        119
    ],
    [
        302,
        119
    ],
    [
        471,
        119
    ],
    [
        480,
        119
    ],
    [
        489,
        119
    ],
    [
        498,
        119
    ],
    [
        507,
        119
    ],
    [
        516,
        119
    ],
    [
        524,
        119
    ],
    [
        533,
        119
    ],
    [
        542,
        119
    ],
    [
        551,
        119
    ],
    [
        560,
        119
    ],
    [
        569,
        119
    ],
    [
        578,
        119
    ],
    [
        587,
        119
    ],
    [
        596,
        119
    ],
    [
        604,
        119
    ],
    [
        613,
        119
    ],
    [
        622,
        119
    ],
    [
        631,
        119
    ],
    [
        640,
        119
    ],
    [
        649,
        119
    ],
    [
        658,
        119
    ],
    [
        667,
        119
    ],
    [
        676,
        119
    ],
    [
        684,
        119
    ],
    [
        693,
        119
    ],
    [
        702,
        119
    ],
    [
        711,
        119
    ],
    [
        720,
        119
    ],
    [
        729,
        119
    ],
    [
        738,
        119
    ],
    [
        747,
        119
    ],
    [
        756,
        119
    ],
    [
        764,
        119
    ],
    [
        773,
        119
    ],
    [
        782,
        119
    ],
    [
        791,
        119
    ],
    [
        800,
        119
    ],
    [
        809,
        119
    ],
    [
        818,
        119
    ],
    [
        827,
        119
    ],
    [
        836,
        119
    ],
    [
        844,
        119
    ],
    [
        853,
        119
    ],
    [
        133,
        130
    ],
    [
        142,
        130
    ],
    [
        151,
        130
    ],
    [
        160,
        130
    ],
    [
        169,
        130
    ],
    [
        178,
        130
    ],
    [
        187,
        130
    ],
    [
        196,
        130
    ],
    [
        204,
        130
    ],
    [
        213,
        130
    ],
    [
        222,
        130
    ],
    [
        231,
        130
    ],
    [
        240,
        130
    ],
    [
        249,
        130
    ],
    [
        258,
        130
    ],
    [
        267,
        130
    ],
    [
        276,
        130
    ],
    [
        284,
        130
    ],
    [
        462,
        130
    ],
    [
        471,
        130
    ],
    [
        480,
        130
    ],
    [
        489,
        130
    ],
    [
        498,
        130
    ],
    [
        507,
        130
    ],
    [
        516,
        130
    ],
    [
        524,
        130
    ],
    [
        533,
        130
    ],
    [
        542,
        130
    ],
    [
        551,
        130
    ],
    [
        560,
        130
    ],
    [
        569,
        130
    ],
    [
        578,
        130
    ],
    [
        587,
        130
    ],
    [
        596,
        130
    ],
    [
        604,
        130
    ],
    [
        613,
        130
    ],
    [
        622,
        130
    ],
    [
        631,
        130
    ],
    [
        640,
        130
    ],
    [
        649,
        130
    ],
    [
        658,
        130
    ],
    [
        667,
        130
    ],
    [
        676,
        130
    ],
    [
        684,
        130
    ],
    [
        693,
        130
    ],
    [
        702,
        130
    ],
    [
        711,
        130
    ],
    [
        720,
        130
    ],
    [
        729,
        130
    ],
    [
        738,
        130
    ],
    [
        747,
        130
    ],
    [
        756,
        130
    ],
    [
        764,
        130
    ],
    [
        773,
        130
    ],
    [
        782,
        130
    ],
    [
        791,
        130
    ],
    [
        800,
        130
    ],
    [
        809,
        130
    ],
    [
        818,
        130
    ],
    [
        827,
        130
    ],
    [
        836,
        130
    ],
    [
        844,
        130
    ],
    [
        133,
        141
    ],
    [
        142,
        141
    ],
    [
        151,
        141
    ],
    [
        160,
        141
    ],
    [
        169,
        141
    ],
    [
        178,
        141
    ],
    [
        187,
        141
    ],
    [
        196,
        141
    ],
    [
        204,
        141
    ],
    [
        213,
        141
    ],
    [
        222,
        141
    ],
    [
        231,
        141
    ],
    [
        240,
        141
    ],
    [
        249,
        141
    ],
    [
        258,
        141
    ],
    [
        267,
        141
    ],
    [
        276,
        141
    ],
    [
        453,
        141
    ],
    [
        462,
        141
    ],
    [
        471,
        141
    ],
    [
        480,
        141
    ],
    [
        498,
        141
    ],
    [
        507,
        141
    ],
    [
        516,
        141
    ],
    [
        524,
        141
    ],
    [
        533,
        141
    ],
    [
        542,
        141
    ],
    [
        551,
        141
    ],
    [
        560,
        141
    ],
    [
        569,
        141
    ],
    [
        578,
        141
    ],
    [
        587,
        141
    ],
    [
        596,
        141
    ],
    [
        604,
        141
    ],
    [
        613,
        141
    ],
    [
        622,
        141
    ],
    [
        631,
        141
    ],
    [
        640,
        141
    ],
    [
        649,
        141
    ],
    [
        658,
        141
    ],
    [
        667,
        141
    ],
    [
        676,
        141
    ],
    [
        684,
        141
    ],
    [
        693,
        141
    ],
    [
        702,
        141
    ],
    [
        711,
        141
    ],
    [
        720,
        141
    ],
    [
        729,
        141
    ],
    [
        738,
        141
    ],
    [
        747,
        141
    ],
    [
        756,
        141
    ],
    [
        764,
        141
    ],
    [
        773,
        141
    ],
    [
        782,
        141
    ],
    [
        791,
        141
    ],
    [
        800,
        141
    ],
    [
        809,
        141
    ],
    [
        818,
        141
    ],
    [
        827,
        141
    ],
    [
        836,
        141
    ],
    [
        844,
        141
    ],
    [
        862,
        141
    ],
    [
        133,
        151
    ],
    [
        142,
        151
    ],
    [
        151,
        151
    ],
    [
        160,
        151
    ],
    [
        169,
        151
    ],
    [
        178,
        151
    ],
    [
        187,
        151
    ],
    [
        196,
        151
    ],
    [
        204,
        151
    ],
    [
        213,
        151
    ],
    [
        222,
        151
    ],
    [
        231,
        151
    ],
    [
        240,
        151
    ],
    [
        249,
        151
    ],
    [
        258,
        151
    ],
    [
        267,
        151
    ],
    [
        453,
        151
    ],
    [
        462,
        151
    ],
    [
        471,
        151
    ],
    [
        507,
        151
    ],
    [
        516,
        151
    ],
    [
        524,
        151
    ],
    [
        533,
        151
    ],
    [
        542,
        151
    ],
    [
        560,
        151
    ],
    [
        569,
        151
    ],
    [
        578,
        151
    ],
    [
        587,
        151
    ],
    [
        596,
        151
    ],
    [
        604,
        151
    ],
    [
        613,
        151
    ],
    [
        622,
        151
    ],
    [
        631,
        151
    ],
    [
        640,
        151
    ],
    [
        649,
        151
    ],
    [
        658,
        151
    ],
    [
        667,
        151
    ],
    [
        676,
        151
    ],
    [
        684,
        151
    ],
    [
        693,
        151
    ],
    [
        702,
        151
    ],
    [
        711,
        151
    ],
    [
        720,
        151
    ],
    [
        729,
        151
    ],
    [
        738,
        151
    ],
    [
        747,
        151
    ],
    [
        756,
        151
    ],
    [
        764,
        151
    ],
    [
        773,
        151
    ],
    [
        782,
        151
    ],
    [
        791,
        151
    ],
    [
        800,
        151
    ],
    [
        809,
        151
    ],
    [
        818,
        151
    ],
    [
        827,
        151
    ],
    [
        836,
        151
    ],
    [
        142,
        162
    ],
    [
        151,
        162
    ],
    [
        160,
        162
    ],
    [
        169,
        162
    ],
    [
        178,
        162
    ],
    [
        187,
        162
    ],
    [
        196,
        162
    ],
    [
        204,
        162
    ],
    [
        213,
        162
    ],
    [
        222,
        162
    ],
    [
        231,
        162
    ],
    [
        240,
        162
    ],
    [
        249,
        162
    ],
    [
        258,
        162
    ],
    [
        462,
        162
    ],
    [
        471,
        162
    ],
    [
        480,
        162
    ],
    [
        489,
        162
    ],
    [
        498,
        162
    ],
    [
        578,
        162
    ],
    [
        587,
        162
    ],
    [
        596,
        162
    ],
    [
        604,
        162
    ],
    [
        613,
        162
    ],
    [
        622,
        162
    ],
    [
        631,
        162
    ],
    [
        640,
        162
    ],
    [
        649,
        162
    ],
    [
        658,
        162
    ],
    [
        667,
        162
    ],
    [
        676,
        162
    ],
    [
        684,
        162
    ],
    [
        693,
        162
    ],
    [
        702,
        162
    ],
    [
        711,
        162
    ],
    [
        720,
        162
    ],
    [
        729,
        162
    ],
    [
        738,
        162
    ],
    [
        747,
        162
    ],
    [
        756,
        162
    ],
    [
        764,
        162
    ],
    [
        773,
        162
    ],
    [
        782,
        162
    ],
    [
        791,
        162
    ],
    [
        800,
        162
    ],
    [
        809,
        162
    ],
    [
        818,
        162
    ],
    [
        827,
        162
    ],
    [
        151,
        173
    ],
    [
        160,
        173
    ],
    [
        169,
        173
    ],
    [
        178,
        173
    ],
    [
        187,
        173
    ],
    [
        196,
        173
    ],
    [
        204,
        173
    ],
    [
        213,
        173
    ],
    [
        222,
        173
    ],
    [
        231,
        173
    ],
    [
        240,
        173
    ],
    [
        249,
        173
    ],
    [
        453,
        173
    ],
    [
        462,
        173
    ],
    [
        471,
        173
    ],
    [
        480,
        173
    ],
    [
        489,
        173
    ],
    [
        498,
        173
    ],
    [
        507,
        173
    ],
    [
        516,
        173
    ],
    [
        578,
        173
    ],
    [
        587,
        173
    ],
    [
        596,
        173
    ],
    [
        604,
        173
    ],
    [
        613,
        173
    ],
    [
        622,
        173
    ],
    [
        631,
        173
    ],
    [
        640,
        173
    ],
    [
        649,
        173
    ],
    [
        658,
        173
    ],
    [
        667,
        173
    ],
    [
        676,
        173
    ],
    [
        684,
        173
    ],
    [
        693,
        173
    ],
    [
        702,
        173
    ],
    [
        711,
        173
    ],
    [
        720,
        173
    ],
    [
        729,
        173
    ],
    [
        738,
        173
    ],
    [
        747,
        173
    ],
    [
        756,
        173
    ],
    [
        764,
        173
    ],
    [
        773,
        173
    ],
    [
        782,
        173
    ],
    [
        791,
        173
    ],
    [
        800,
        173
    ],
    [
        809,
        173
    ],
    [
        818,
        173
    ],
    [
        169,
        184
    ],
    [
        178,
        184
    ],
    [
        187,
        184
    ],
    [
        196,
        184
    ],
    [
        204,
        184
    ],
    [
        213,
        184
    ],
    [
        222,
        184
    ],
    [
        231,
        184
    ],
    [
        240,
        184
    ],
    [
        444,
        184
    ],
    [
        453,
        184
    ],
    [
        462,
        184
    ],
    [
        471,
        184
    ],
    [
        480,
        184
    ],
    [
        489,
        184
    ],
    [
        498,
        184
    ],
    [
        507,
        184
    ],
    [
        516,
        184
    ],
    [
        524,
        184
    ],
    [
        533,
        184
    ],
    [
        542,
        184
    ],
    [
        551,
        184
    ],
    [
        560,
        184
    ],
    [
        578,
        184
    ],
    [
        587,
        184
    ],
    [
        596,
        184
    ],
    [
        604,
        184
    ],
    [
        622,
        184
    ],
    [
        631,
        184
    ],
    [
        640,
        184
    ],
    [
        649,
        184
    ],
    [
        658,
        184
    ],
    [
        667,
        184
    ],
    [
        676,
        184
    ],
    [
        684,
        184
    ],
    [
        693,
        184
    ],
    [
        702,
        184
    ],
    [
        711,
        184
    ],
    [
        720,
        184
    ],
    [
        729,
        184
    ],
    [
        738,
        184
    ],
    [
        747,
        184
    ],
    [
        756,
        184
    ],
    [
        764,
        184
    ],
    [
        773,
        184
    ],
    [
        782,
        184
    ],
    [
        791,
        184
    ],
    [
        800,
        184
    ],
    [
        809,
        184
    ],
    [
        169,
        195
    ],
    [
        178,
        195
    ],
    [
        187,
        195
    ],
    [
        196,
        195
    ],
    [
        204,
        195
    ],
    [
        249,
        195
    ],
    [
        444,
        195
    ],
    [
        453,
        195
    ],
    [
        462,
        195
    ],
    [
        471,
        195
    ],
    [
        480,
        195
    ],
    [
        489,
        195
    ],
    [
        498,
        195
    ],
    [
        507,
        195
    ],
    [
        516,
        195
    ],
    [
        524,
        195
    ],
    [
        533,
        195
    ],
    [
        542,
        195
    ],
    [
        551,
        195
    ],
    [
        560,
        195
    ],
    [
        569,
        195
    ],
    [
        578,
        195
    ],
    [
        587,
        195
    ],
    [
        596,
        195
    ],
    [
        604,
        195
    ],
    [
        631,
        195
    ],
    [
        640,
        195
    ],
    [
        649,
        195
    ],
    [
        658,
        195
    ],
    [
        667,
        195
    ],
    [
        676,
        195
    ],
    [
        684,
        195
    ],
    [
        693,
        195
    ],
    [
        702,
        195
    ],
    [
        711,
        195
    ],
    [
        720,
        195
    ],
    [
        729,
        195
    ],
    [
        738,
        195
    ],
    [
        747,
        195
    ],
    [
        756,
        195
    ],
    [
        764,
        195
    ],
    [
        773,
        195
    ],
    [
        782,
        195
    ],
    [
        791,
        195
    ],
    [
        800,
        195
    ],
    [
        809,
        195
    ],
    [
        178,
        206
    ],
    [
        187,
        206
    ],
    [
        196,
        206
    ],
    [
        436,
        206
    ],
    [
        444,
        206
    ],
    [
        453,
        206
    ],
    [
        462,
        206
    ],
    [
        471,
        206
    ],
    [
        480,
        206
    ],
    [
        489,
        206
    ],
    [
        498,
        206
    ],
    [
        507,
        206
    ],
    [
        516,
        206
    ],
    [
        524,
        206
    ],
    [
        533,
        206
    ],
    [
        542,
        206
    ],
    [
        551,
        206
    ],
    [
        560,
        206
    ],
    [
        569,
        206
    ],
    [
        578,
        206
    ],
    [
        587,
        206
    ],
    [
        596,
        206
    ],
    [
        604,
        206
    ],
    [
        613,
        206
    ],
    [
        622,
        206
    ],
    [
        631,
        206
    ],
    [
        667,
        206
    ],
    [
        676,
        206
    ],
    [
        684,
        206
    ],
    [
        693,
        206
    ],
    [
        702,
        206
    ],
    [
        711,
        206
    ],
    [
        720,
        206
    ],
    [
        729,
        206
    ],
    [
        738,
        206
    ],
    [
        747,
        206
    ],
    [
        756,
        206
    ],
    [
        764,
        206
    ],
    [
        773,
        206
    ],
    [
        782,
        206
    ],
    [
        791,
        206
    ],
    [
        800,
        206
    ],
    [
        809,
        206
    ],
    [
        187,
        216
    ],
    [
        196,
        216
    ],
    [
        231,
        216
    ],
    [
        427,
        216
    ],
    [
        436,
        216
    ],
    [
        444,
        216
    ],
    [
        453,
        216
    ],
    [
        462,
        216
    ],
    [
        471,
        216
    ],
    [
        480,
        216
    ],
    [
        489,
        216
    ],
    [
        498,
        216
    ],
    [
        507,
        216
    ],
    [
        516,
        216
    ],
    [
        524,
        216
    ],
    [
        533,
        216
    ],
    [
        542,
        216
    ],
    [
        551,
        216
    ],
    [
        560,
        216
    ],
    [
        569,
        216
    ],
    [
        578,
        216
    ],
    [
        587,
        216
    ],
    [
        596,
        216
    ],
    [
        604,
        216
    ],
    [
        613,
        216
    ],
    [
        622,
        216
    ],
    [
        676,
        216
    ],
    [
        684,
        216
    ],
    [
        693,
        216
    ],
    [
        702,
        216
    ],
    [
        738,
        216
    ],
    [
        747,
        216
    ],
    [
        756,
        216
    ],
    [
        764,
        216
    ],
    [
        773,
        216
    ],
    [
        782,
        216
    ],
    [
        791,
        216
    ],
    [
        204,
        227
    ],
    [
        213,
        227
    ],
    [
        222,
        227
    ],
    [
        231,
        227
    ],
    [
        427,
        227
    ],
    [
        436,
        227
    ],
    [
        444,
        227
    ],
    [
        453,
        227
    ],
    [
        462,
        227
    ],
    [
        471,
        227
    ],
    [
        480,
        227
    ],
    [
        489,
        227
    ],
    [
        498,
        227
    ],
    [
        507,
        227
    ],
    [
        516,
        227
    ],
    [
        524,
        227
    ],
    [
        533,
        227
    ],
    [
        542,
        227
    ],
    [
        551,
        227
    ],
    [
        560,
        227
    ],
    [
        569,
        227
    ],
    [
        578,
        227
    ],
    [
        587,
        227
    ],
    [
        596,
        227
    ],
    [
        604,
        227
    ],
    [
        613,
        227
    ],
    [
        684,
        227
    ],
    [
        693,
        227
    ],
    [
        738,
        227
    ],
    [
        747,
        227
    ],
    [
        756,
        227
    ],
    [
        764,
        227
    ],
    [
        222,
        238
    ],
    [
        231,
        238
    ],
    [
        240,
        238
    ],
    [
        427,
        238
    ],
    [
        436,
        238
    ],
    [
        444,
        238
    ],
    [
        453,
        238
    ],
    [
        462,
        238
    ],
    [
        471,
        238
    ],
    [
        480,
        238
    ],
    [
        489,
        238
    ],
    [
        498,
        238
    ],
    [
        507,
        238
    ],
    [
        516,
        238
    ],
    [
        524,
        238
    ],
    [
        533,
        238
    ],
    [
        542,
        238
    ],
    [
        551,
        238
    ],
    [
        560,
        238
    ],
    [
        569,
        238
    ],
    [
        578,
        238
    ],
    [
        587,
        238
    ],
    [
        596,
        238
    ],
    [
        684,
        238
    ],
    [
        747,
        238
    ],
    [
        756,
        238
    ],
    [
        764,
        238
    ],
    [
        240,
        249
    ],
    [
        249,
        249
    ],
    [
        267,
        249
    ],
    [
        276,
        249
    ],
    [
        284,
        249
    ],
    [
        293,
        249
    ],
    [
        436,
        249
    ],
    [
        444,
        249
    ],
    [
        453,
        249
    ],
    [
        462,
        249
    ],
    [
        471,
        249
    ],
    [
        480,
        249
    ],
    [
        489,
        249
    ],
    [
        498,
        249
    ],
    [
        507,
        249
    ],
    [
        516,
        249
    ],
    [
        524,
        249
    ],
    [
        533,
        249
    ],
    [
        542,
        249
    ],
    [
        551,
        249
    ],
    [
        560,
        249
    ],
    [
        569,
        249
    ],
    [
        578,
        249
    ],
    [
        587,
        249
    ],
    [
        596,
        249
    ],
    [
        604,
        249
    ],
    [
        684,
        249
    ],
    [
        747,
        249
    ],
    [
        258,
        260
    ],
    [
        267,
        260
    ],
    [
        276,
        260
    ],
    [
        284,
        260
    ],
    [
        293,
        260
    ],
    [
        302,
        260
    ],
    [
        311,
        260
    ],
    [
        444,
        260
    ],
    [
        453,
        260
    ],
    [
        462,
        260
    ],
    [
        471,
        260
    ],
    [
        480,
        260
    ],
    [
        489,
        260
    ],
    [
        498,
        260
    ],
    [
        507,
        260
    ],
    [
        516,
        260
    ],
    [
        524,
        260
    ],
    [
        533,
        260
    ],
    [
        542,
        260
    ],
    [
        551,
        260
    ],
    [
        560,
        260
    ],
    [
        569,
        260
    ],
    [
        578,
        260
    ],
    [
        587,
        260
    ],
    [
        596,
        260
    ],
    [
        747,
        260
    ],
    [
        258,
        270
    ],
    [
        267,
        270
    ],
    [
        276,
        270
    ],
    [
        284,
        270
    ],
    [
        293,
        270
    ],
    [
        302,
        270
    ],
    [
        311,
        270
    ],
    [
        320,
        270
    ],
    [
        329,
        270
    ],
    [
        498,
        270
    ],
    [
        507,
        270
    ],
    [
        516,
        270
    ],
    [
        524,
        270
    ],
    [
        533,
        270
    ],
    [
        542,
        270
    ],
    [
        551,
        270
    ],
    [
        560,
        270
    ],
    [
        569,
        270
    ],
    [
        578,
        270
    ],
    [
        587,
        270
    ],
    [
        596,
        270
    ],
    [
        756,
        270
    ],
    [
        258,
        281
    ],
    [
        267,
        281
    ],
    [
        276,
        281
    ],
    [
        284,
        281
    ],
    [
        293,
        281
    ],
    [
        302,
        281
    ],
    [
        311,
        281
    ],
    [
        320,
        281
    ],
    [
        329,
        281
    ],
    [
        498,
        281
    ],
    [
        507,
        281
    ],
    [
        516,
        281
    ],
    [
        524,
        281
    ],
    [
        533,
        281
    ],
    [
        542,
        281
    ],
    [
        551,
        281
    ],
    [
        560,
        281
    ],
    [
        569,
        281
    ],
    [
        578,
        281
    ],
    [
        587,
        281
    ],
    [
        258,
        292
    ],
    [
        267,
        292
    ],
    [
        276,
        292
    ],
    [
        284,
        292
    ],
    [
        293,
        292
    ],
    [
        302,
        292
    ],
    [
        311,
        292
    ],
    [
        320,
        292
    ],
    [
        329,
        292
    ],
    [
        338,
        292
    ],
    [
        347,
        292
    ],
    [
        507,
        292
    ],
    [
        516,
        292
    ],
    [
        524,
        292
    ],
    [
        533,
        292
    ],
    [
        542,
        292
    ],
    [
        551,
        292
    ],
    [
        560,
        292
    ],
    [
        569,
        292
    ],
    [
        578,
        292
    ],
    [
        764,
        292
    ],
    [
        249,
        303
    ],
    [
        258,
        303
    ],
    [
        267,
        303
    ],
    [
        276,
        303
    ],
    [
        284,
        303
    ],
    [
        293,
        303
    ],
    [
        302,
        303
    ],
    [
        311,
        303
    ],
    [
        320,
        303
    ],
    [
        329,
        303
    ],
    [
        338,
        303
    ],
    [
        347,
        303
    ],
    [
        356,
        303
    ],
    [
        364,
        303
    ],
    [
        507,
        303
    ],
    [
        516,
        303
    ],
    [
        524,
        303
    ],
    [
        533,
        303
    ],
    [
        542,
        303
    ],
    [
        551,
        303
    ],
    [
        560,
        303
    ],
    [
        569,
        303
    ],
    [
        578,
        303
    ],
    [
        773,
        303
    ],
    [
        258,
        314
    ],
    [
        267,
        314
    ],
    [
        276,
        314
    ],
    [
        284,
        314
    ],
    [
        293,
        314
    ],
    [
        302,
        314
    ],
    [
        311,
        314
    ],
    [
        320,
        314
    ],
    [
        329,
        314
    ],
    [
        338,
        314
    ],
    [
        347,
        314
    ],
    [
        356,
        314
    ],
    [
        364,
        314
    ],
    [
        507,
        314
    ],
    [
        516,
        314
    ],
    [
        524,
        314
    ],
    [
        533,
        314
    ],
    [
        542,
        314
    ],
    [
        551,
        314
    ],
    [
        560,
        314
    ],
    [
        569,
        314
    ],
    [
        578,
        314
    ],
    [
        267,
        325
    ],
    [
        276,
        325
    ],
    [
        284,
        325
    ],
    [
        293,
        325
    ],
    [
        302,
        325
    ],
    [
        311,
        325
    ],
    [
        320,
        325
    ],
    [
        329,
        325
    ],
    [
        338,
        325
    ],
    [
        347,
        325
    ],
    [
        356,
        325
    ],
    [
        364,
        325
    ],
    [
        507,
        325
    ],
    [
        516,
        325
    ],
    [
        524,
        325
    ],
    [
        533,
        325
    ],
    [
        542,
        325
    ],
    [
        551,
        325
    ],
    [
        560,
        325
    ],
    [
        569,
        325
    ],
    [
        578,
        325
    ],
    [
        836,
        325
    ],
    [
        844,
        325
    ],
    [
        853,
        325
    ],
    [
        862,
        325
    ],
    [
        267,
        335
    ],
    [
        276,
        335
    ],
    [
        284,
        335
    ],
    [
        293,
        335
    ],
    [
        302,
        335
    ],
    [
        311,
        335
    ],
    [
        320,
        335
    ],
    [
        329,
        335
    ],
    [
        338,
        335
    ],
    [
        347,
        335
    ],
    [
        356,
        335
    ],
    [
        507,
        335
    ],
    [
        516,
        335
    ],
    [
        524,
        335
    ],
    [
        533,
        335
    ],
    [
        542,
        335
    ],
    [
        551,
        335
    ],
    [
        560,
        335
    ],
    [
        569,
        335
    ],
    [
        578,
        335
    ],
    [
        827,
        335
    ],
    [
        836,
        335
    ],
    [
        844,
        335
    ],
    [
        853,
        335
    ],
    [
        862,
        335
    ],
    [
        871,
        335
    ],
    [
        276,
        346
    ],
    [
        284,
        346
    ],
    [
        293,
        346
    ],
    [
        302,
        346
    ],
    [
        311,
        346
    ],
    [
        320,
        346
    ],
    [
        329,
        346
    ],
    [
        338,
        346
    ],
    [
        347,
        346
    ],
    [
        356,
        346
    ],
    [
        516,
        346
    ],
    [
        524,
        346
    ],
    [
        533,
        346
    ],
    [
        542,
        346
    ],
    [
        551,
        346
    ],
    [
        560,
        346
    ],
    [
        569,
        346
    ],
    [
        809,
        346
    ],
    [
        818,
        346
    ],
    [
        827,
        346
    ],
    [
        836,
        346
    ],
    [
        844,
        346
    ],
    [
        853,
        346
    ],
    [
        862,
        346
    ],
    [
        871,
        346
    ],
    [
        276,
        357
    ],
    [
        284,
        357
    ],
    [
        293,
        357
    ],
    [
        302,
        357
    ],
    [
        311,
        357
    ],
    [
        320,
        357
    ],
    [
        329,
        357
    ],
    [
        338,
        357
    ],
    [
        347,
        357
    ],
    [
        516,
        357
    ],
    [
        524,
        357
    ],
    [
        533,
        357
    ],
    [
        542,
        357
    ],
    [
        551,
        357
    ],
    [
        560,
        357
    ],
    [
        569,
        357
    ],
    [
        791,
        357
    ],
    [
        800,
        357
    ],
    [
        809,
        357
    ],
    [
        818,
        357
    ],
    [
        827,
        357
    ],
    [
        836,
        357
    ],
    [
        844,
        357
    ],
    [
        853,
        357
    ],
    [
        862,
        357
    ],
    [
        871,
        357
    ],
    [
        880,
        357
    ],
    [
        276,
        368
    ],
    [
        284,
        368
    ],
    [
        293,
        368
    ],
    [
        302,
        368
    ],
    [
        311,
        368
    ],
    [
        320,
        368
    ],
    [
        329,
        368
    ],
    [
        338,
        368
    ],
    [
        516,
        368
    ],
    [
        524,
        368
    ],
    [
        533,
        368
    ],
    [
        542,
        368
    ],
    [
        551,
        368
    ],
    [
        560,
        368
    ],
    [
        791,
        368
    ],
    [
        800,
        368
    ],
    [
        809,
        368
    ],
    [
        818,
        368
    ],
    [
        827,
        368
    ],
    [
        836,
        368
    ],
    [
        844,
        368
    ],
    [
        853,
        368
    ],
    [
        862,
        368
    ],
    [
        871,
        368
    ],
    [
        880,
        368
    ],
    [
        889,
        368
    ],
    [
        276,
        379
    ],
    [
        284,
        379
    ],
    [
        293,
        379
    ],
    [
        302,
        379
    ],
    [
        311,
        379
    ],
    [
        320,
        379
    ],
    [
        329,
        379
    ],
    [
        524,
        379
    ],
    [
        533,
        379
    ],
    [
        542,
        379
    ],
    [
        551,
        379
    ],
    [
        791,
        379
    ],
    [
        800,
        379
    ],
    [
        809,
        379
    ],
    [
        818,
        379
    ],
    [
        827,
        379
    ],
    [
        836,
        379
    ],
    [
        844,
        379
    ],
    [
        853,
        379
    ],
    [
        862,
        379
    ],
    [
        871,
        379
    ],
    [
        880,
        379
    ],
    [
        889,
        379
    ],
    [
        276,
        389
    ],
    [
        284,
        389
    ],
    [
        293,
        389
    ],
    [
        302,
        389
    ],
    [
        311,
        389
    ],
    [
        320,
        389
    ],
    [
        524,
        389
    ],
    [
        533,
        389
    ],
    [
        542,
        389
    ],
    [
        791,
        389
    ],
    [
        800,
        389
    ],
    [
        809,
        389
    ],
    [
        818,
        389
    ],
    [
        827,
        389
    ],
    [
        836,
        389
    ],
    [
        844,
        389
    ],
    [
        853,
        389
    ],
    [
        862,
        389
    ],
    [
        871,
        389
    ],
    [
        880,
        389
    ],
    [
        889,
        389
    ],
    [
        276,
        400
    ],
    [
        284,
        400
    ],
    [
        293,
        400
    ],
    [
        302,
        400
    ],
    [
        311,
        400
    ],
    [
        853,
        400
    ],
    [
        862,
        400
    ],
    [
        871,
        400
    ],
    [
        880,
        400
    ],
    [
        889,
        400
    ],
    [
        276,
        411
    ],
    [
        284,
        411
    ],
    [
        293,
        411
    ],
    [
        302,
        411
    ],
    [
        862,
        411
    ],
    [
        871,
        411
    ],
    [
        276,
        422
    ],
    [
        284,
        422
    ],
    [
        276,
        433
    ],
    [
        284,
        433
    ],
    [
        276,
        443
    ],
    [
        284,
        443
    ],
    [
        276,
        454
    ]
];
}),
"[project]/src/hooks/useInView.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useInView(options = {
    threshold: 0.2,
    once: true
}) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { once = true, threshold = 0.2, rootMargin } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const io = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setInView(true);
                if (once) io.disconnect();
            } else if (!once) {
                setInView(false);
            }
        }, {
            threshold,
            rootMargin
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, [
        once,
        threshold,
        rootMargin
    ]);
    return [
        ref,
        inView
    ];
}
}),
"[project]/src/hooks/useReducedMotion.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useReducedMotion() {
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const onChange = ()=>setReduced(mq.matches);
        mq.addEventListener("change", onChange);
        return ()=>mq.removeEventListener("change", onChange);
    }, []);
    return reduced;
}
}),
];})()

//# sourceMappingURL=src_1kw2ft-83r7cu._.js.map