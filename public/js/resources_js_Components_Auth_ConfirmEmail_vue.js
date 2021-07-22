(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Auth_ConfirmEmail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Confirm Your Email'
  },
  data: function data() {
    return {
      Response: '',
      WaitTime: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.EmailVerify();
    setTimeout(function () {
      _this.WaitTime = false;
    }, 3000);
  },
  methods: {
    EmailVerify: function EmailVerify() {
      var _this2 = this;

      axios.get('/api/email/verify/' + this.$route.params.token).then(function (res) {
        _this2.Response = res.data;
      })["catch"](function (e) {
        _this2.$store.commit('SET_TOAST', 'Warning');

        _this2.$store.commit('SET_ToastMessage', 'Something Is Wrong');

        setTimeout(function () {
          _this2.$store.commit('SET_TOAST', false);
        }, 3000);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Auth/ConfirmEmail.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/Auth/ConfirmEmail.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfirmEmail_vue_vue_type_template_id_409e24b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmEmail.vue?vue&type=template&id=409e24b0& */ "./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=template&id=409e24b0&");
/* harmony import */ var _ConfirmEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmEmail.vue?vue&type=script&lang=js& */ "./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ConfirmEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ConfirmEmail_vue_vue_type_template_id_409e24b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfirmEmail_vue_vue_type_template_id_409e24b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Auth/ConfirmEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=template&id=409e24b0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=template&id=409e24b0& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmEmail_vue_vue_type_template_id_409e24b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmEmail_vue_vue_type_template_id_409e24b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmEmail_vue_vue_type_template_id_409e24b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmEmail.vue?vue&type=template&id=409e24b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=template&id=409e24b0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=template&id=409e24b0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/ConfirmEmail.vue?vue&type=template&id=409e24b0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex flex-col sm:justify-center items-center ml-2 mr-2" },
    [
      _c(
        "div",
        {
          staticClass: "w-full sm:max-w-lg mt-2 bg-white shadow overflow-hidden"
        },
        [
          _c("div", { staticClass: "w-full" }, [
            _c("div", { staticClass: "w-full bg-gray-100 p-4 text-lg" }, [
              _vm._v("\n                Email Verification\n            ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "bg-white p-4" },
              [
                _vm.WaitTime
                  ? _c(
                      "div",
                      { staticClass: "flex text-md mt-4 mb-4 font-semibold" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "w-full text-md font-semibold p-1 rounded mt-2 mb-3"
                          },
                          [
                            _c("div", { staticClass: "w-full" }, [
                              _c(
                                "div",
                                { staticClass: "flex justify-center p-4" },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "text-green-500 bi bi-stopwatch",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        height: "40",
                                        fill: "currentColor",
                                        viewBox: "0 0 16 16"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "ml-4 p-1 text-center" },
                                [
                                  _vm._v(
                                    "\n                                 Please Wait...\n                            "
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  : _vm._l(_vm.Response, function(res, i) {
                      return _c(
                        "div",
                        {
                          key: i,
                          staticClass: "flex text-md mt-4 mb-4 font-semibold"
                        },
                        [
                          _vm.Response.warning
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "w-full text-md font-semibold p-1 bg-red-500 rounded text-white mt-2 mb-3"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "flex justify-between" },
                                    [
                                      _c("div", { staticClass: "ml-4 p-1" }, [
                                        _vm._v(
                                          "\n                                 " +
                                            _vm._s(res) +
                                            "!\n                            "
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.Response.success
                            ? _c(
                                "div",
                                { staticClass: "w-full" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "w-full text-md font-semibold p-1 bg-green-500 rounded text-white mt-2 mb-3"
                                    },
                                    [
                                      _c("div", { staticClass: "ml-4 p-1" }, [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(res) +
                                            "!\n                            "
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "flex justify-center bg-white p-4 mt-2 mb-2",
                                      attrs: { to: { name: "Login" } }
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "bg-blue-500 hover:bg-blue-400 mt-4 px-4 rounded text-white p-1 font-semibold"
                                        },
                                        [
                                          _vm._v(
                                            "\n                               Now Login\n                            "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      )
                    })
              ],
              2
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);