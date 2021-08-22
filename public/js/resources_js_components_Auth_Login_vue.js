(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Login'
  },
  data: function data() {
    return {
      loadingSpinner: false,
      warningMessage: '',
      form: {
        email: 'dexoga@mailinator.com',
        password: '11111111',
        remember: false
      }
    };
  },
  computed: {
    EmailVerifyMessage: function EmailVerifyMessage() {
      return this.$store.getters.EmailVerifyMessage;
    }
  },
  methods: {
    GetUser: function GetUser() {
      var _this = this;

      axios.get('/api/user').then(function (res) {
        _this.$store.commit('SET_AUTHUSER', res.data);

        _this.$store.commit('SET_AUTHENTICATED', true);

        localStorage.setItem("auth", true);
      });
    },
    submit: function submit() {
      var _this2 = this;

      this.loadingSpinner = true;
      axios.post('api/login', this.form).then(function (res) {
        if (res.data.success) {
          _this2.loadingSpinner = false;

          _this2.$store.commit('SET_TOAST', 'Success');

          _this2.$store.commit('SET_ToastMessage', res.data.success);

          setTimeout(function () {
            _this2.$store.commit('SET_TOAST', false);
          }, 3000);
          _this2.form.email = '';
          _this2.form.password = '';

          _this2.GetUser();

          if (_this2.$store.getters.AdminStatus) {
            if (_this2.$store.getters.AuthUser.role === 'admin') {
              _this2.$router.push({
                name: 'Admin-Dashboard'
              });
            } else {
              _this2.$router.push({
                name: 'Dashboard'
              });
            }
          } else {
            _this2.$router.push({
              name: 'Dashboard'
            });
          }

          _this2.$store.dispatch('checkAdmin');
        }

        if (res.data.warning) {
          _this2.loadingSpinner = false;
          _this2.warningMessage = res.data.warning;
          _this2.form.password = '';
        }

        if (res.data.errors) {
          _this2.loadingSpinner = false;
          _this2.form.password = '';

          _this2.$store.commit('SET_TOAST', 'Errors');

          _this2.$store.commit('SET_ToastMessage', res.data.errors);

          setTimeout(function () {
            _this2.$store.commit('SET_TOAST', false);
          }, 3000);
        }
      })["catch"](function (e) {
        _this2.loadingSpinner = false;

        _this2.$store.commit('SET_TOAST', 'Warning');

        _this2.$store.commit('SET_ToastMessage', 'Something Is Wrong !');

        setTimeout(function () {
          _this2.$store.commit('SET_TOAST', false);
        }, 3000);
      });
    },
    EmailVerifyMessageHide: function EmailVerifyMessageHide() {
      this.$store.state.EmailVerifyMessage = false;
    },
    EmailVerifyWarningHide: function EmailVerifyWarningHide() {
      this.warningMessage = '';
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/Auth/Login.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_ff4220a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ff4220a6& */ "./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_ff4220a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_ff4220a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ff4220a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ff4220a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ff4220a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=ff4220a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "w-ful mt-2 px-6 py-4" }, [
            _vm.EmailVerifyMessage
              ? _c(
                  "div",
                  {
                    staticClass:
                      "text-md font-semibold p-1 bg-green-500 rounded text-white mt-2 mb-3"
                  },
                  [
                    _c("div", { staticClass: "flex justify-between" }, [
                      _c("div", { staticClass: "ml-4 p-1" }, [
                        _vm._v(
                          "\n                        Verify Your Email !\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "mr-2 mt-1",
                          on: { click: _vm.EmailVerifyMessageHide }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "bi bi-x",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "25",
                                height: "25",
                                fill: "currentColor",
                                viewBox: "0 0 16 16"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.warningMessage
              ? _c(
                  "div",
                  {
                    staticClass:
                      "text-md font-semibold p-1 bg-red-400 rounded text-white mt-2 mb-3"
                  },
                  [
                    _c("div", { staticClass: "flex justify-between" }, [
                      _c(
                        "div",
                        { staticClass: "ml-4 p-1" },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.warningMessage) +
                              "\n                        "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                        For Verify Your Email -\n                        "
                          ),
                          _c(
                            "router-link",
                            {
                              staticClass: "text-green-200 underline font-bold",
                              attrs: { to: { name: "Verify-Email" } }
                            },
                            [_vm._v("Click Here")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "mr-2 mt-1",
                          on: { click: _vm.EmailVerifyWarningHide }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "bi bi-x",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "25",
                                height: "25",
                                fill: "currentColor",
                                viewBox: "0 0 16 16"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
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
                        staticClass: "block font-medium text-sm text-gray-700"
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
                        "mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow",
                      attrs: {
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
                        staticClass: "block font-medium text-sm text-gray-700"
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
                          _vm.$set(_vm.form, "password", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "block mt-4" }, [
                    _c("label", { staticClass: "flex items-center" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.remember,
                            expression: "form.remember"
                          }
                        ],
                        staticClass:
                          "rounded border-gray-300 text-indigo-600 shadow focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.form.remember)
                            ? _vm._i(_vm.form.remember, null) > -1
                            : _vm.form.remember
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.remember,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "remember",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "remember",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "remember", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "ml-2 text-sm text-gray-600" },
                        [_vm._v("Remember me")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center justify-between mt-4" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-blue-500 font-medium",
                          attrs: { to: { name: "Forgot-Password" } }
                        },
                        [
                          _vm._v(
                            "\n                            Forgot Password ?\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
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
                        [_vm._v("Login")]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full bg-gray-100 p-3 text-lg" }, [
      _c("div", { staticClass: "ml-4" }, [_vm._v("Login")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);