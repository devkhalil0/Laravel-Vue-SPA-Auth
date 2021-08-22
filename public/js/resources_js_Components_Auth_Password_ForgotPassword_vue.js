(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Auth_Password_ForgotPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Forgot Password'
  },
  data: function data() {
    return {
      loadingSpinner: false,
      form: {
        email: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loadingSpinner = true;
      axios.post('/api/password/reset', this.form).then(function (res) {
        if (res.data.success) {
          _this.loadingSpinner = false;

          _this.$store.commit('SET_TOAST', 'Success');

          _this.$store.commit('SET_ToastMessage', res.data.success);

          setTimeout(function () {
            _this.$store.commit('SET_TOAST', false);
          }, 3000);
          _this.form.email = '';
        }

        if (res.data.errors) {
          _this.loadingSpinner = false;

          _this.$store.commit('SET_TOAST', 'Errors');

          _this.$store.commit('SET_ToastMessage', res.data.errors);

          setTimeout(function () {
            _this.$store.commit('SET_TOAST', false);
          }, 3000);
        }

        if (res.data.warning) {
          _this.loadingSpinner = false;

          _this.$store.commit('SET_TOAST', 'Warning');

          _this.$store.commit('SET_ToastMessage', res.data.warning);

          setTimeout(function () {
            _this.$store.commit('SET_TOAST', false);
          }, 3000);
        }
      })["catch"](function (e) {
        _this.loadingSpinner = false;

        _this.$store.commit('SET_TOAST', 'Warning');

        _this.$store.commit('SET_ToastMessage', 'Something Is Wrong');

        setTimeout(function () {
          _this.$store.commit('SET_TOAST', false);
        }, 3000);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Auth/Password/ForgotPassword.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Components/Auth/Password/ForgotPassword.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_d11d8c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=d11d8c94& */ "./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=template&id=d11d8c94&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ForgotPassword_vue_vue_type_template_id_d11d8c94___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForgotPassword_vue_vue_type_template_id_d11d8c94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Auth/Password/ForgotPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=template&id=d11d8c94&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=template&id=d11d8c94& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_d11d8c94___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_d11d8c94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_d11d8c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=d11d8c94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=template&id=d11d8c94&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=template&id=d11d8c94&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/Password/ForgotPassword.vue?vue&type=template&id=d11d8c94& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "mt-4 flex flex-col sm:justify-center items-center ml-2 mr-2"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "w-full sm:max-w-md bg-white shadow overflow-hidden rounded-lg"
        },
        [
          _c("div", { staticClass: "bg-gray-100 text-lg p-4 w-full" }, [
            _vm._v("\n            Password Reset\n        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-full px-6 py-4" }, [
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
                        staticClass: "block font-medium text-md text-gray-700"
                      },
                      [_vm._v("Your Account Email")]
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
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);