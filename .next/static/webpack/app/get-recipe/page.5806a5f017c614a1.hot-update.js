"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/get-recipe/page",{

/***/ "(app-pages-browser)/./src/app/get-recipe/page.tsx":
/*!*************************************!*\
  !*** ./src/app/get-recipe/page.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRecipe)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _barrel_optimize_names_Camera_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Camera,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/camera.js\");\n/* harmony import */ var _barrel_optimize_names_Camera_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Camera,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction GetRecipe() {\n    _s();\n    const [ingredients, setIngredients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ''\n    ]);\n    const [isScanning, setIsScanning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [stream, setStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const addIngredient = ()=>{\n        setIngredients([\n            ...ingredients,\n            ''\n        ]);\n    };\n    const removeIngredient = (index)=>{\n        const newIngredients = ingredients.filter((_, i)=>i !== index);\n        setIngredients(newIngredients);\n    };\n    const updateIngredient = (index, value)=>{\n        const newIngredients = [\n            ...ingredients\n        ];\n        newIngredients[index] = value;\n        setIngredients(newIngredients);\n    };\n    const startScanning = async ()=>{\n        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n            try {\n                const videoStream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                console.log(\"Video stream initialized:\", videoStream);\n                setStream(videoStream);\n                if (videoRef.current) {\n                    videoRef.current.srcObject = videoStream;\n                }\n                setIsScanning(true);\n            } catch (error) {\n                console.error(\"Error starting camera:\", error);\n                alert(\"Unable to access camera. Please check permissions.\");\n            }\n        } else {\n            alert(\"Camera is not supported on this device.\");\n        }\n    };\n    const stopScanning = ()=>{\n        if (stream) {\n            stream.getTracks().forEach((track)=>track.stop());\n        }\n        setIsScanning(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-8 max-w-4xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-center mb-8\",\n                children: \"Get Recipe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                            children: \"Scan Recipe\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                        className: \"flex flex-col items-center space-y-4\",\n                        children: !isScanning ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center justify-center space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    className: \"w-full\",\n                                    onClick: startScanning,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Camera_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"mr-2 h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" Scan Recipe\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg text-gray-500\",\n                                    children: \"Click to scan your recipe\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    ref: videoRef,\n                                    autoPlay: true,\n                                    className: \"w-full h-auto rounded-lg border border-gray-200\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"outline\",\n                                    size: \"icon\",\n                                    className: \"absolute top-4 right-4\",\n                                    onClick: stopScanning,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Camera_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center text-lg mt-4\",\n                                    children: \"Scanning in progress...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                            children: \"Ingredients\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                        className: \"space-y-4\",\n                        children: [\n                            ingredients.map((ingredient, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                            value: ingredient,\n                                            onChange: (e)=>updateIngredient(index, e.target.value),\n                                            placeholder: \"Ingredient \".concat(index + 1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            variant: \"outline\",\n                                            size: \"icon\",\n                                            onClick: ()=>removeIngredient(index),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Camera_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                className: \"h-4 w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: addIngredient,\n                                className: \"w-full\",\n                                children: \"Add Ingredient\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"outline\",\n                        className: \"w-full md:w-auto\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: \"bg-green-600 hover:bg-green-700 text-white w-full md:w-auto\",\n                        children: \"Find Recipes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ALI\\\\Desktop\\\\More\\\\Ali\\\\College\\\\IPD\\\\Green Score\\\\eco-bite\\\\src\\\\app\\\\get-recipe\\\\page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(GetRecipe, \"QesJNpym3BlCuXe6Ow94IhxV1cU=\");\n_c = GetRecipe;\nvar _c;\n$RefreshReg$(_c, \"GetRecipe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2V0LXJlY2lwZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUV3QztBQUNPO0FBQ0Y7QUFDa0M7QUFDdkM7QUFFekIsU0FBU1U7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFDO0tBQUc7SUFDbkQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1lLFdBQVdkLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFxQjtJQUV6RCxNQUFNa0IsZ0JBQWdCO1FBQ3BCTixlQUFlO2VBQUlEO1lBQWE7U0FBRztJQUNyQztJQUVBLE1BQU1RLG1CQUFtQixDQUFDQztRQUN4QixNQUFNQyxpQkFBaUJWLFlBQVlXLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxNQUFNSjtRQUMxRFIsZUFBZVM7SUFDakI7SUFFQSxNQUFNSSxtQkFBbUIsQ0FBQ0wsT0FBZU07UUFDdkMsTUFBTUwsaUJBQWlCO2VBQUlWO1NBQVk7UUFDdkNVLGNBQWMsQ0FBQ0QsTUFBTSxHQUFHTTtRQUN4QmQsZUFBZVM7SUFDakI7SUFFQSxNQUFNTSxnQkFBZ0I7UUFDcEIsSUFBSUMsVUFBVUMsWUFBWSxJQUFJRCxVQUFVQyxZQUFZLENBQUNDLFlBQVksRUFBRTtZQUNqRSxJQUFJO2dCQUNGLE1BQU1DLGNBQWMsTUFBTUgsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQUVFLE9BQU87Z0JBQUs7Z0JBQzVFQyxRQUFRQyxHQUFHLENBQUMsNkJBQTZCSDtnQkFDekNkLFVBQVVjO2dCQUNWLElBQUloQixTQUFTb0IsT0FBTyxFQUFFO29CQUNwQnBCLFNBQVNvQixPQUFPLENBQUNDLFNBQVMsR0FBR0w7Z0JBQy9CO2dCQUNBakIsY0FBYztZQUNoQixFQUFFLE9BQU91QixPQUFPO2dCQUNkSixRQUFRSSxLQUFLLENBQUMsMEJBQTBCQTtnQkFDeENDLE1BQU07WUFDUjtRQUNGLE9BQU87WUFDTEEsTUFBTTtRQUNSO0lBQ0Y7SUFHQSxNQUFNQyxlQUFlO1FBQ25CLElBQUl2QixRQUFRO1lBQ1ZBLE9BQU93QixTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTUMsSUFBSTtRQUNoRDtRQUNBN0IsY0FBYztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDOEI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQzs7Ozs7OzBCQUdwRCw4REFBQ3pDLHFEQUFJQTs7a0NBQ0gsOERBQUNFLDJEQUFVQTtrQ0FDVCw0RUFBQ0MsMERBQVNBO3NDQUFDOzs7Ozs7Ozs7OztrQ0FFYiw4REFBQ0YsNERBQVdBO3dCQUFDd0MsV0FBVTtrQ0FDcEIsQ0FBQ2hDLDJCQUNBLDhEQUFDK0I7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDM0MseURBQU1BO29DQUFDMkMsV0FBVTtvQ0FBU0UsU0FBU3BCOztzREFDbEMsOERBQUNuQixvRkFBTUE7NENBQUNxQyxXQUFVOzs7Ozs7d0NBQWlCOzs7Ozs7OzhDQUVyQyw4REFBQ0c7b0NBQUVILFdBQVU7OENBQXdCOzs7Ozs7Ozs7OztpREFHdkM7OzhDQUNFLDhEQUFDYjtvQ0FDQ2lCLEtBQUtsQztvQ0FDTG1DLFFBQVE7b0NBQ1JMLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQzNDLHlEQUFNQTtvQ0FBQ2lELFNBQVE7b0NBQVVDLE1BQUs7b0NBQU9QLFdBQVU7b0NBQXlCRSxTQUFTUjs4Q0FDaEYsNEVBQUM5QixvRkFBQ0E7d0NBQUNvQyxXQUFVOzs7Ozs7Ozs7Ozs4Q0FFZiw4REFBQ0c7b0NBQUVILFdBQVU7OENBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9oRCw4REFBQ3pDLHFEQUFJQTs7a0NBQ0gsOERBQUNFLDJEQUFVQTtrQ0FDVCw0RUFBQ0MsMERBQVNBO3NDQUFDOzs7Ozs7Ozs7OztrQ0FFYiw4REFBQ0YsNERBQVdBO3dCQUFDd0MsV0FBVTs7NEJBQ3BCbEMsWUFBWTBDLEdBQUcsQ0FBQyxDQUFDQyxZQUFZbEMsc0JBQzVCLDhEQUFDd0I7b0NBQWdCQyxXQUFVOztzREFDekIsOERBQUMxQyx1REFBS0E7NENBQ0p1QixPQUFPNEI7NENBQ1BDLFVBQVUsQ0FBQ0MsSUFBTS9CLGlCQUFpQkwsT0FBT29DLEVBQUVDLE1BQU0sQ0FBQy9CLEtBQUs7NENBQ3ZEZ0MsYUFBYSxjQUF3QixPQUFWdEMsUUFBUTs7Ozs7O3NEQUVyQyw4REFBQ2xCLHlEQUFNQTs0Q0FBQ2lELFNBQVE7NENBQVVDLE1BQUs7NENBQU9MLFNBQVMsSUFBTTVCLGlCQUFpQkM7c0RBQ3BFLDRFQUFDWCxvRkFBQ0E7Z0RBQUNvQyxXQUFVOzs7Ozs7Ozs7Ozs7bUNBUFB6Qjs7Ozs7MENBV1osOERBQUNsQix5REFBTUE7Z0NBQUM2QyxTQUFTN0I7Z0NBQWUyQixXQUFVOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3ZELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUMzQyx5REFBTUE7d0JBQUNpRCxTQUFRO3dCQUFVTixXQUFVO2tDQUFtQjs7Ozs7O2tDQUd2RCw4REFBQzNDLHlEQUFNQTt3QkFBQzJDLFdBQVU7a0NBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEY7R0FwSHdCbkM7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQUxJXFxEZXNrdG9wXFxNb3JlXFxBbGlcXENvbGxlZ2VcXElQRFxcR3JlZW4gU2NvcmVcXGVjby1iaXRlXFxzcmNcXGFwcFxcZ2V0LXJlY2lwZVxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IENhbWVyYSwgWCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0UmVjaXBlKCkge1xuICBjb25zdCBbaW5ncmVkaWVudHMsIHNldEluZ3JlZGllbnRzXSA9IHVzZVN0YXRlKFsnJ10pXG4gIGNvbnN0IFtpc1NjYW5uaW5nLCBzZXRJc1NjYW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKVxuICBjb25zdCBbc3RyZWFtLCBzZXRTdHJlYW1dID0gdXNlU3RhdGU8TWVkaWFTdHJlYW0gfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGFkZEluZ3JlZGllbnQgPSAoKSA9PiB7XG4gICAgc2V0SW5ncmVkaWVudHMoWy4uLmluZ3JlZGllbnRzLCAnJ10pXG4gIH1cblxuICBjb25zdCByZW1vdmVJbmdyZWRpZW50ID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdJbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpXG4gICAgc2V0SW5ncmVkaWVudHMobmV3SW5ncmVkaWVudHMpXG4gIH1cblxuICBjb25zdCB1cGRhdGVJbmdyZWRpZW50ID0gKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdJbmdyZWRpZW50cyA9IFsuLi5pbmdyZWRpZW50c11cbiAgICBuZXdJbmdyZWRpZW50c1tpbmRleF0gPSB2YWx1ZVxuICAgIHNldEluZ3JlZGllbnRzKG5ld0luZ3JlZGllbnRzKVxuICB9XG5cbiAgY29uc3Qgc3RhcnRTY2FubmluZyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmlkZW9TdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IHZpZGVvOiB0cnVlIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmlkZW8gc3RyZWFtIGluaXRpYWxpemVkOlwiLCB2aWRlb1N0cmVhbSlcbiAgICAgICAgc2V0U3RyZWFtKHZpZGVvU3RyZWFtKVxuICAgICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gdmlkZW9TdHJlYW1cbiAgICAgICAgfVxuICAgICAgICBzZXRJc1NjYW5uaW5nKHRydWUpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgY2FtZXJhOlwiLCBlcnJvcilcbiAgICAgICAgYWxlcnQoXCJVbmFibGUgdG8gYWNjZXNzIGNhbWVyYS4gUGxlYXNlIGNoZWNrIHBlcm1pc3Npb25zLlwiKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIkNhbWVyYSBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgZGV2aWNlLlwiKVxuICAgIH1cbiAgfVxuICBcblxuICBjb25zdCBzdG9wU2Nhbm5pbmcgPSAoKSA9PiB7XG4gICAgaWYgKHN0cmVhbSkge1xuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKVxuICAgIH1cbiAgICBzZXRJc1NjYW5uaW5nKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOCBtYXgtdy00eGwgbXgtYXV0byBwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItOFwiPkdldCBSZWNpcGU8L2gxPlxuXG4gICAgICB7LyogU2NhbiBSZWNpcGUgQ2FyZCAqL31cbiAgICAgIDxDYXJkPlxuICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZFRpdGxlPlNjYW4gUmVjaXBlPC9DYXJkVGl0bGU+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktNFwiPlxuICAgICAgICAgIHshaXNTY2FubmluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsXCIgb25DbGljaz17c3RhcnRTY2FubmluZ30+XG4gICAgICAgICAgICAgICAgPENhbWVyYSBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPiBTY2FuIFJlY2lwZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNTAwXCI+Q2xpY2sgdG8gc2NhbiB5b3VyIHJlY2lwZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00XCIgb25DbGljaz17c3RvcFNjYW5uaW5nfT5cbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgbXQtNFwiPlNjYW5uaW5nIGluIHByb2dyZXNzLi4uPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIEluZ3JlZGllbnRzIFNlY3Rpb24gKi99XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRUaXRsZT5JbmdyZWRpZW50czwvQ2FyZFRpdGxlPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICB7aW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2luZ3JlZGllbnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVJbmdyZWRpZW50KGluZGV4LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BJbmdyZWRpZW50ICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwiaWNvblwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUluZ3JlZGllbnQoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZEluZ3JlZGllbnR9IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgQWRkIEluZ3JlZGllbnRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIEFjdGlvbiBCdXR0b25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC00XCI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1hdXRvXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSB3LWZ1bGwgbWQ6dy1hdXRvXCI+XG4gICAgICAgICAgRmluZCBSZWNpcGVzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIkJ1dHRvbiIsIklucHV0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhbWVyYSIsIlgiLCJHZXRSZWNpcGUiLCJpbmdyZWRpZW50cyIsInNldEluZ3JlZGllbnRzIiwiaXNTY2FubmluZyIsInNldElzU2Nhbm5pbmciLCJ2aWRlb1JlZiIsInN0cmVhbSIsInNldFN0cmVhbSIsImFkZEluZ3JlZGllbnQiLCJyZW1vdmVJbmdyZWRpZW50IiwiaW5kZXgiLCJuZXdJbmdyZWRpZW50cyIsImZpbHRlciIsIl8iLCJpIiwidXBkYXRlSW5ncmVkaWVudCIsInZhbHVlIiwic3RhcnRTY2FubmluZyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvU3RyZWFtIiwidmlkZW8iLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNyY09iamVjdCIsImVycm9yIiwiYWxlcnQiLCJzdG9wU2Nhbm5pbmciLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIiwicCIsInJlZiIsImF1dG9QbGF5IiwidmFyaWFudCIsInNpemUiLCJtYXAiLCJpbmdyZWRpZW50Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/get-recipe/page.tsx\n"));

/***/ })

});