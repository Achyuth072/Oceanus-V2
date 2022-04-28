"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), loginDetails = ref[0], setloginDetails = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), username = ref1[0], setUsername = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), password = ref2[0], setPassword = ref2[1];\n    var addToast = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts)().addToast;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n    // fetch(\n    //    \"http://localhost:8080/login\", {\n    //        method: 'POST', body: {\n    //            \"uname\": \"user1\",\n    //            \"password\": 1223\n    //        }\n    //    }).then(res => res.json()).then(result => console.log(result))\n    // axios.post(\"http://localhost:8080/login\", {\n    //     \"uname\":\"user1\",\n    //     \"password\": 1223\n    //   })\n    //   .then(function (response) {\n    //     console.log(response.data.message);\n    //     if(response.data.message=='Authorized'){\n    //         window.location.href=\"/about\"\n    //     }\n    //   })\n    //   .catch(function (error) {\n    //     console.log(error);\n    //   });\n    });\n    var login = function(e) {\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:8080/login\", {\n            \"uname\": username,\n            \"password\": password\n        }).then(function(response) {\n            console.log(response.data.message);\n            if (response.data.message == 'Authorized') {\n                // window.location.href=\"/\"\n                next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');\n                addToast(\"Authorized\", {\n                    appearance: \"success\"\n                });\n            } else if (response.data.message == 'Unauthorized') {\n                addToast(\"Incorrect Password\", {\n                    appearance: \"error\"\n                });\n            } else if (response.data.message == 'User Not Found') {\n                addToast(\"User Not Found\", {\n                    appearance: \"error\"\n                });\n            } else {\n                addToast(\"Internal Server Error\", {\n                    appearance: \"error\"\n                });\n            }\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                        lineNumber: 81,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Oceanus Exports\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                        lineNumber: 82,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                        lineNumber: 85,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                lineNumber: 80,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().body),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().lbox),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://lh3.googleusercontent.com/pzUZ2qGEhsmPP69b-P6oH8SqoSkGDjjdr9KnRN5uYpKQf0NcJri_QB5PZqlHR4e4FGr4lrR9AiK5ZBMn1RH1556aucFLBFBUpGxez-3B9zmvpWB3DDV0kt-wpiHFPkv56jUxNbOp6Dg=w2400\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().rbox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://lh3.googleusercontent.com/LyIKxlC8U3FzfX_LbDB0SJjUFY3Pg6_9uIoSM9l87csKnoX2IsMiP6XR4LkmTRdxUhSfLGp--Qp0fPoAUFzVCuO3DtgklC4o6JsVTD1dSY-nEvMYiWbMUqSbBfys4oGl8-Fkxn1TbrM=w2400\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 27\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                lineNumber: 94,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().logint),\n                                children: \"LOGIN\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                lineNumber: 98,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().welcome),\n                                children: \"Welcome To Oceanus\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                lineNumber: 101,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                lineNumber: 103,\n                                columnNumber: 23\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                lineNumber: 103,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: login,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().email),\n                                            type: \"text\",\n                                            id: \"t1\",\n                                            value: username,\n                                            onChange: function(e) {\n                                                return setUsername(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 27\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().password),\n                                            type: \"password\",\n                                            id: \"p1\",\n                                            value: password,\n                                            onChange: function(e) {\n                                                return setPassword(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 27\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().pb),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().checkbox),\n                                                type: \"checkbox\",\n                                                id: \"cb1\",\n                                                value: \"Remember Me\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                                lineNumber: 112,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().label),\n                                                for: \"cb1\",\n                                                children: \"Remember Me\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().fp),\n                                                id: \"a1`\",\n                                                children: \"Forgot password?\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                        type: \"submit\",\n                                        id: \"b1\",\n                                        value: \"LOGIN\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                                lineNumber: 104,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                        lineNumber: 93,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n                lineNumber: 89,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Next Js\\\\Oceanus\\\\nextjs-oceanus\\\\pages\\\\login.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n};\n_s(Login, \"8iSz56WzDW1a9DnG7AeChDUJKHE=\", false, function() {\n    return [\n        react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRWpDLHlFQUFlOzRDQUFFZ0QsSUFBSSxFQUFDLENBQVU7NENBQUNDLEVBQUUsRUFBQyxDQUFJOzRDQUFDQyxLQUFLLEVBQUUxQyxRQUFROzRDQUFFMkMsUUFBUSxFQUFFdkMsUUFBUSxDQUFSQSxDQUFDO3VEQUFJSCxXQUFXLENBQUNHLENBQUMsQ0FBQ3dDLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7O2dIQUV4SFgsQ0FBQzt3Q0FBQ04sU0FBUyxFQUFFakMsbUVBQVM7O3dIQUNsQjhDLENBQUs7Z0RBQUNiLFNBQVMsRUFBRWpDLHlFQUFlO2dEQUFFZ0QsSUFBSSxFQUFDLENBQVU7Z0RBQUNDLEVBQUUsRUFBQyxDQUFLO2dEQUFDQyxLQUFLLEVBQUMsQ0FBYTs7Ozs7O3dIQUM5RUssQ0FBSztnREFBQ3RCLFNBQVMsRUFBRWpDLHNFQUFZO2dEQUFFd0QsR0FBRyxFQUFDLENBQUs7MERBQUMsQ0FBVzs7Ozs7O3dIQUNwREMsQ0FBQztnREFBQ3hCLFNBQVMsRUFBRWpDLG1FQUFTO2dEQUFFaUQsRUFBRSxFQUFDLENBQUs7MERBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7OztnSEFHckRILENBQUs7d0NBQUNiLFNBQVMsRUFBRWpDLHVFQUFhO3dDQUFFZ0QsSUFBSSxFQUFDLENBQVE7d0NBQUNDLEVBQUUsRUFBQyxDQUFJO3dDQUFDQyxLQUFLLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFGLENBQUM7R0FoSHVCL0MsS0FBSzs7UUFJSkQsZ0VBQVM7OztLQUpWQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3QgW2xvZ2luRGV0YWlscywgc2V0bG9naW5EZXRhaWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBmZXRjaChcclxuICAgICAgICAvLyAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpblwiLCB7XHJcbiAgICAgICAgLy8gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBib2R5OiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBcInVuYW1lXCI6IFwidXNlcjFcIixcclxuICAgICAgICAvLyAgICAgICAgICAgIFwicGFzc3dvcmRcIjogMTIyM1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcclxuICAgICAgICAvLyBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luXCIsIHtcclxuICAgICAgICAvLyAgICAgXCJ1bmFtZVwiOlwidXNlcjFcIixcclxuICAgICAgICAvLyAgICAgXCJwYXNzd29yZFwiOiAxMjIzXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gICAgIGlmKHJlc3BvbnNlLmRhdGEubWVzc2FnZT09J0F1dGhvcml6ZWQnKXtcclxuICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2Fib3V0XCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAvLyAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICApXHJcbiAgICAgICAgbGV0IGxvZ2luID0gKGUpPT57XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW5cIiwge1xyXG4gICAgICAgICAgICBcInVuYW1lXCI6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubWVzc2FnZT09J0F1dGhvcml6ZWQnKXtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdChcIkF1dGhvcml6ZWRcIix7YXBwZWFyYW5jZTogXCJzdWNjZXNzXCJ9KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2U9PSdVbmF1dGhvcml6ZWQnKXtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KFwiSW5jb3JyZWN0IFBhc3N3b3JkXCIse2FwcGVhcmFuY2U6IFwiZXJyb3JcIn0pICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2U9PSdVc2VyIE5vdCBGb3VuZCcpe1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoXCJVc2VyIE5vdCBGb3VuZFwiLHthcHBlYXJhbmNlOiBcImVycm9yXCJ9KSAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdChcIkludGVybmFsIFNlcnZlciBFcnJvclwiLHthcHBlYXJhbmNlOiBcImVycm9yXCJ9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICA8dGl0bGU+T2NlYW51cyBFeHBvcnRzPC90aXRsZT4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbi8+XHJcbiAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxib3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3B6VVoycUdFaHNtUFA2OWItUDZvSDhTcW9Ta0dEampkcjlLblJONXVZcEtRZjBOY0pyaV9RQjVQWnFsSFI0ZTRGR3I0bHJSOUFpSzVaQk1uMVJIMTU1NmF1Y0ZMQkZCVXBHeGV6LTNCOXptdnBXQjNERFYwa3Qtd3BpSEZQa3Y1NmpVeE5iT3A2RGc9dzI0MDBcIiAgLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJib3h9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9MeUlLeGxDOFUzRnpmWF9MYkRCMFNKalVGWTNQZzZfOXVJb1NNOWw4N2NzS25vWDJJc01pUDZYUjRMa21UUmR4VWhTZkxHcC0tUXAwZlBvQVVGelZDdU8zRHRna2xDNG82SnNWVEQxZFNZLW5Fdk1ZaVdiTVVxU2JCZnlzNG9HbDgtRmt4bjFUYnJNPXcyNDAwXCIgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2ludH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTE9HSU5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMud2VsY29tZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSBUbyBPY2VhbnVzXHJcbiAgICAgICAgICAgICAgICAgIDwvcD48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbH0gdHlwZT1cInRleHRcIiBpZD1cInQxXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicDFcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH0gdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjYjFcIiB2YWx1ZT1cIlJlbWVtYmVyIE1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9IGZvcj1cImNiMVwiPlJlbWVtYmVyIE1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5mcH0gaWQ9XCJhMWBcIj5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIiBpZD1cImIxXCIgdmFsdWU9XCJMT0dJTlwiIC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlJvdXRlciIsInVzZVRvYXN0cyIsIkxvZ2luIiwibG9naW5EZXRhaWxzIiwic2V0bG9naW5EZXRhaWxzIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJhZGRUb2FzdCIsImxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsInB1c2giLCJhcHBlYXJhbmNlIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsIm1ldGEiLCJjaGFyc2V0IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIiwiY2xhc3NOYW1lIiwiYm9keSIsImxib3giLCJpbWciLCJzcmMiLCJyYm94IiwicCIsImxvZ28iLCJsb2dpbnQiLCJ3ZWxjb21lIiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsImVtYWlsIiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBiIiwiY2hlY2tib3giLCJsYWJlbCIsImZvciIsImEiLCJmcCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});