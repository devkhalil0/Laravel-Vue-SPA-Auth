(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Auth_VerifyEmail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Verify Email Address'
  },
  methods: {
    ResendLink: function ResendLink() {
      var _this = this;

      axios.post('/api/email/verify/resendlink').then(function (res) {
        _this.$store.commit('SET_TOAST', 'Success');

        _this.$store.commit('SET_ToastMessage', res.data.success);

        setTimeout(function () {
          _this.$store.commit('SET_TOAST', false);
        }, 3000);

        _this.Logout();
      })["catch"](function (e) {
        _this.$store.commit('SET_TOAST', 'Warning');

        _this.$store.commit('SET_ToastMessage', 'Something Is Wrong');

        setTimeout(function () {
          _this.$store.commit('SET_TOAST', false);
        }, 3000);
      });
    },
    Logout: function Logout() {
      var _this2 = this;

      axios.post('/api/logout').then(function (res) {
        _this2.$store.commit('SET_AUTHENTICATED', false);

        if (_this2.CurrentRoute != 'Login') {
          _this2.$router.push({
            name: 'Login'
          });
        }

        localStorage.removeItem("auth", false);

        _this2.$store.commit('SET_ADMIN', false);
      })["catch"](function (e) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Auth/VerifyEmail.vue":
/*!******************************************************!*\
  !*** ./resources/js/Components/Auth/VerifyEmail.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerifyEmail_vue_vue_type_template_id_1227b8e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=template&id=1227b8e7& */ "./resources/js/Components/Auth/VerifyEmail.vue?vue&type=template&id=1227b8e7&");
/* harmony import */ var _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=script&lang=js& */ "./resources/js/Components/Auth/VerifyEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VerifyEmail_vue_vue_type_template_id_1227b8e7___WEBPACK_IMPORTED_MODULE_0__.render,
  _VerifyEmail_vue_vue_type_template_id_1227b8e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Auth/VerifyEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/Auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/VerifyEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Auth/VerifyEmail.vue?vue&type=template&id=1227b8e7&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Auth/VerifyEmail.vue?vue&type=template&id=1227b8e7& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_1227b8e7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_1227b8e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_1227b8e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=template&id=1227b8e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/VerifyEmail.vue?vue&type=template&id=1227b8e7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/VerifyEmail.vue?vue&type=template&id=1227b8e7&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Auth/VerifyEmail.vue?vue&type=template&id=1227b8e7& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
              _vm._v(
                "\n                Verify Your Email Address !\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "bg-white p-4" }, [
              _c("div", { staticClass: "text-md font-semibold" }, [
                _c("div", [
                  _vm._v(
                    "if you are not received verification email , click verify email below !!"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "ml-2 mt-2 text-blue-400 hover:underline",
                    on: { click: _vm.ResendLink }
                  },
                  [_vm._v("Verify Email")]
                )
              ])
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