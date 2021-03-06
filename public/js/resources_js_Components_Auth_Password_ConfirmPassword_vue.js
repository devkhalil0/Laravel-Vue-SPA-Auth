(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Auth_Password_ConfirmPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    title: 'Confirm Password'
  },
  data: function data() {
    return {
      loadingSpinner: false,
      WaitTime: true,
      Response: '',
      form: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.ConfirmPassword();
    setTimeout(function () {
      _this.WaitTime = false;
    }, 3000);
  },
  methods: {
    ConfirmPassword: function ConfirmPassword() {
      var _this2 = this;

      axios.get('/api/password/confirmation/' + this.$route.params.token).then(function (res) {
        _this2.Response = res.data;

        if (res.data.user) {
          _this2.form.email = res.data.user.email;
        }
      })["catch"](function (e) {});
    },
    submit: function submit() {
      var _this3 = this;

      this.loadingSpinner = true;
      axios.post('/api/password/change', this.form).then(function (res) {
        if (res.data.success) {
          _this3.loadingSpinner = false;

          _this3.$store.commit('SET_TOAST', 'Success');

          _this3.$store.commit('SET_ToastMessage', res.data.success);

          setTimeout(function () {
            _this3.$store.commit('SET_TOAST', false);
          }, 3000);

          if (_this3.CurrentRoute != 'Login') {
            _this3.$router.push({
              name: 'Login'
            });
          }

          _this3.form.password = '';
          _this3.form.password_confirmation = '';
        }

        if (res.data.errors) {
          _this3.loadingSpinner = false;

          _this3.$store.commit('SET_TOAST', 'Errors');

          _this3.$store.commit('SET_ToastMessage', res.data.errors);

          setTimeout(function () {
            _this3.$store.commit('SET_TOAST', false);
          }, 3000);
          _this3.form.password = '';
          _this3.form.password_confirmation = '';
        }
      })["catch"](function (e) {
        _this3.loadingSpinner = false;
        _this3.form.password = '';
        _this3.form.password_confirmation = '';
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Auth/Password/ConfirmPassword.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Auth/Password/ConfirmPassword.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfirmPassword_vue_vue_type_template_id_5e95b353___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmPassword.vue?vue&type=template&id=5e95b353& */ "./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=template&id=5e95b353&");
/* harmony import */ var _ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmPassword.vue?vue&type=script&lang=js& */ "./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ConfirmPassword_vue_vue_type_template_id_5e95b353___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfirmPassword_vue_vue_type_template_id_5e95b353___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Auth/Password/ConfirmPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=template&id=5e95b353&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=template&id=5e95b353& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_template_id_5e95b353___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_template_id_5e95b353___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_template_id_5e95b353___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmPassword.vue?vue&type=template&id=5e95b353& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=template&id=5e95b353&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=template&id=5e95b353&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ConfirmPassword.vue?vue&type=template&id=5e95b353& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "mt-3 flex flex-col sm:justify-center items-center ml-2 mr-2"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "w-full sm:max-w-md bg-white shadow overflow-hidden rounded-lg"
        },
        [
          _c("div", { staticClass: "w-full bg-gray-100 p-3 text-lg" }, [
            _vm._v("\n            Confirm Password\n        ")
          ]),
          _vm._v(" "),
          _vm.WaitTime
            ? _c("div", { staticClass: "bg-white p-4" }, [
                _c(
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
                                  staticClass: "text-green-500 bi bi-stopwatch",
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
                          _c("div", { staticClass: "ml-4 p-1 text-center" }, [
                            _vm._v(
                              "\n                                Please Wait...\n                        "
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ])
            : _vm.Response.user
            ? _c("div", { staticClass: "w-full mt-2 px-6 py-4" }, [
                _c("div", { staticClass: "container my-2 mx-auto px-2" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submit.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("div", {}, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block font-medium text-sm text-gray-700"
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass:
                            "bg-gray-50 mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow",
                          attrs: {
                            disabled: "",
                            type: "email",
                            required: "",
                            autocomplete: "current-email"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-1" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block font-medium text-sm text-gray-700"
                          },
                          [_vm._v("Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass:
                            "mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow",
                          attrs: {
                            placeholder: "Your Password",
                            type: "password",
                            required: "",
                            autocomplete: "current-password"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-1" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block font-medium text-sm text-gray-700"
                          },
                          [_vm._v("Confirm Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          staticClass:
                            "mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow",
                          attrs: {
                            placeholder: "Confirm Password",
                            type: "password",
                            required: "",
                            autocomplete: "current-password"
                          },
                          domProps: { value: _vm.form.password_confirmation },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex items-center justify-end mt-4" },
                        [
                          _c(
                            "loading-spinner",
                            {
                              staticClass:
                                "ml-4 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",
                              attrs: {
                                loadingSpinner: _vm.loadingSpinner,
                                type: "submit"
                              }
                            },
                            [_vm._v("Submit")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ])
              ])
            : _vm._l(_vm.Response, function(res, i) {
                return _c(
                  "div",
                  {
                    key: i,
                    staticClass:
                      "flex text-md mt-8 mb-8 ml-4 mr-4 font-semibold"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-full text-md font-semibold p-1 bg-red-500 rounded text-white mt-2 mb-3"
                      },
                      [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c("div", { staticClass: "ml-4 p-1" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(res) +
                                "!\n                    "
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                )
              })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);