function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _corona_sign_corona_sign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./corona-sign/corona-sign.component */
    "./src/app/corona-sign/corona-sign.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'CoronaSign';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "app-wrap"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-corona-sign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_corona_sign_corona_sign_component__WEBPACK_IMPORTED_MODULE_1__["CoronaSignComponent"]],
      styles: [".app-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n  flex: 1;\n  background: #0b76ba;\n  background: linear-gradient(180deg, #286a8d 0, #155475 100%);\n  margin: 0;\n}\n@media (max-width: 480px) {\n  .app-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmdleWovRGV2L0Nvcm9uYVNpZ24vZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FDQ0o7QURDSTtFQVhKO0lBWVEsV0FBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IHJnYigxMSwgMTE4LCAxODYpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzI4NmE4ZCAwLCMxNTU0NzUgMTAwJSk7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbn1cbiIsIi5hcHAtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6ICMwYjc2YmE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyODZhOGQgMCwgIzE1NTQ3NSAxMDAlKTtcbiAgbWFyZ2luOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hcHAtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _corona_sign_corona_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./corona-sign/corona-sign.component */
    "./src/app/corona-sign/corona-sign.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./confirm/confirm.component */
    "./src/app/confirm/confirm.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _corona_sign_corona_sign_component__WEBPACK_IMPORTED_MODULE_4__["CoronaSignComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _corona_sign_corona_sign_component__WEBPACK_IMPORTED_MODULE_4__["CoronaSignComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/confirm/confirm.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/confirm/confirm.component.ts ***!
    \**********************************************/

  /*! exports provided: ConfirmComponent */

  /***/
  function srcAppConfirmConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
      return ConfirmComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ConfirmComponent = /*#__PURE__*/function () {
      function ConfirmComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ConfirmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClose",
        value: function onClose() {
          this.dialogRef.close();
          location.reload();
        }
      }]);

      return ConfirmComponent;
    }();

    ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
      return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmComponent,
      selectors: [["app-confirm"]],
      decls: 7,
      vars: 1,
      consts: [[1, "backdrop", 3, "click"], [1, "confirm-box"], [1, "confirm-message"], ["mat-dialog-actions", "", 1, "confirm-box-actions"], ["mat-raised-button", "", "color", "warn", 1, "button", 3, "click"]],
      template: function ConfirmComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_Template_div_click_0_listener() {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_Template_button_click_5_listener() {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05E1\u05D2\u05D5\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".confirm-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  margin-top: 25px;\n}\n\n.confirm-message[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.confirm-box-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  width: 100px;\n  background-color: #286a8d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmdleWovRGV2L0Nvcm9uYVNpZ24vZnJvbnRlbmQvc3JjL2FwcC9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNvbmZpcm0tbWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbmZpcm0tYm94LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODZhOGQ7XG5cbiAgICAmLmJ1dHRvbjpob3ZlciB7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2IxMzcxMDtcbiAgICB9XG59XG4iLCIuY29uZmlybS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY29uZmlybS1tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbmZpcm0tYm94LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODZhOGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirm',
          templateUrl: './confirm.component.html',
          styleUrls: ['./confirm.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/corona-sign/corona-sign.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/corona-sign/corona-sign.component.ts ***!
    \******************************************************/

  /*! exports provided: CoronaSignComponent */

  /***/
  function srcAppCoronaSignCoronaSignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoronaSignComponent", function () {
      return CoronaSignComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../confirm/confirm.component */
    "./src/app/confirm/confirm.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/corona-sign/data.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CoronaSignComponent_mat_label_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05D8\u05D5\u05E2\u05DF...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CoronaSignComponent_mat_label_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DD \u05DE\u05DC\u05D0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CoronaSignComponent_mat_option_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoronaSignComponent_mat_option_39_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.setIdNumber(_r5.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var name_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", name_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", name_r4, " ");
      }
    }

    var CoronaSignComponent = /*#__PURE__*/function () {
      function CoronaSignComponent(formBuilder, el, dataService, dialog) {
        _classCallCheck(this, CoronaSignComponent);

        this.formBuilder = formBuilder;
        this.el = el;
        this.dataService = dataService;
        this.dialog = dialog;
        this.employees = [];
        this.names = [];
        this.selectedEmp = {};
        this.idNumber = '';
      }

      _createClass(CoronaSignComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.isloading = true;
          this.signForm = this.formBuilder.group({
            fullName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            employeeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
            signature: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          this.dataService.getEmployees().subscribe(function (response) {
            response.forEach(function (item) {
              var emp = {
                fullName: "".concat(item.fullName),
                idNumber: item.idNumber,
                signature: false
              };

              _this.employees.push(emp);

              _this.names.push(emp.fullName);
            });
            _this.filteredOptions = _this.formControls.fullName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return _this._filter(value);
            }));
            _this.isloading = false;
          });
        }
      }, {
        key: "setIdNumber",
        value: function setIdNumber(name) {
          this.selectedEmp = this.employees.filter(function (item) {
            return name === "".concat(item.fullName);
          });
          this.idNumber = this.selectedEmp[0].idNumber;
          this.formControls.employeeId.setValue(this.idNumber);
          this.selectedEmp = this.selectedEmp[0];
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.names.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "setSignature",
        value: function setSignature() {
          this.selectedEmp['signature'] = true;
        }
      }, {
        key: "onSign",
        value: function onSign() {
          var _this2 = this;

          this.isloading = true;
          var data = new FormData();
          Object.keys(this.selectedEmp).forEach(function (key) {
            data.append(key, _this2.selectedEmp[key]);
          });
          this.dataService.addSignature(this.selectedEmp).subscribe(function (response) {
            _this2.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
              height: '200px',
              width: '200px',
              data: 'תודה, יום טוב!'
            }); // this.signForm.reset();


            _this2.isloading = false;
          });
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.signForm.controls;
        }
      }]);

      return CoronaSignComponent;
    }();

    CoronaSignComponent.ɵfac = function CoronaSignComponent_Factory(t) {
      return new (t || CoronaSignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    CoronaSignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CoronaSignComponent,
      selectors: [["app-corona-sign"]],
      decls: 52,
      vars: 9,
      consts: [[1, "corona-sign-wrap"], [1, "panda-logo"], ["src", "../../assets/images/panda-logo-1920.png", "alt", "#", 1, "panda-logo"], [1, "form-container"], [1, "form-title"], [1, "form-info-text"], [1, "form-wrap"], [1, "form", 3, "formGroup"], [1, "inputs"], [1, "form-group", "form-group-first-child"], [1, "field-full-width"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "fullName", "name", "fullName", "placeholder", "\u05E9\u05DD \u05DE\u05DC\u05D0", "autocomplete", "off", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "form-group"], ["matInput", "", "type", "text", "id", "employeeId", "formControlName", "employeeId", "name", "employeeId", "placeholder", "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"], ["formControlName", "signature", "color", "primary", 1, "checkbox-approve", 3, "click"], [1, "sign-buttons"], ["mat-raised-button", "", "type", "submit", 1, "sign-button", 3, "ngClass", "disabled", "click"], [3, "value", "click"], ["selectedName", ""]],
      template: function CoronaSignComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05D8\u05D5\u05E4\u05E1 \u05D4\u05E6\u05D4\u05E8\u05EA \u05E7\u05D5\u05E8\u05D5\u05E0\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u05D0\u05E0\u05D9 \u05DE\u05E6\u05D4\u05D9\u05E8/\u05D4 \u05DB\u05D9 \u05E2\u05E8\u05DB\u05EA\u05D9 \u05D4\u05D9\u05D5\u05DD \u05D1\u05D3\u05D9\u05E7\u05D4 \u05DC\u05DE\u05D3\u05D9\u05D3\u05EA \u05D7\u05D5\u05DD \u05D2\u05D5\u05E3, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DB\u05D9 \u05D7\u05D5\u05DD \u05D2\u05D5\u05E4\u05D9 \u05D0\u05D9\u05E0\u05D5 \u05E2\u05D5\u05DC\u05D4 \u05E2\u05DC 38 \u05DE\u05E2\u05DC\u05D5\u05EA \u05E6\u05DC\u05E1\u05D9\u05D5\u05E1 \u05D5\u05DB\u05D9 \u05DC\u05D0 \u05D4\u05D9\u05D4 \u05DC\u05D9 \u05D7\u05D5\u05DD \u05DB\u05D0\u05DE\u05D5\u05E8 \u05D1\u05E9\u05D1\u05D5\u05E2 \u05D4\u05D0\u05D7\u05E8\u05D5\u05DF. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u05D0\u05E0\u05D9 \u05DE\u05E6\u05D4\u05D9\u05E8/\u05D4 \u05DB\u05D9 \u05DC\u05D0 \u05D4\u05D9\u05D9\u05EA\u05D9 \u05D1\u05DE\u05D2\u05E2 \u05E7\u05E8\u05D5\u05D1 \u05E2\u05DD \u05D7\u05D5\u05DC\u05D4 \u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05D1\u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u05D0\u05E0\u05D9 \u05DE\u05E6\u05D4\u05D9\u05E8/\u05D4 \u05DB\u05D9 \u05D0\u05E0\u05E0\u05D9 \u05DE\u05E9\u05EA\u05E2\u05DC/\u05EA \u05D5\u05DB\u05DF \u05DB\u05D9 \u05D0\u05D9\u05DF \u05DC\u05D9 \u05E7\u05E9\u05D9\u05D9\u05DD \u05D1\u05E0\u05E9\u05D9\u05DE\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(\u05DC\u05DE\u05E2\u05D8 \u05E9\u05D9\u05E2\u05D5\u05DC \u05D0\u05D5 \u05E7\u05D5\u05E9\u05D9 \u05D1\u05E0\u05E9\u05D9\u05DE\u05D4 \u05D4\u05E0\u05D5\u05D1\u05E2 \u05DE\u05DE\u05E6\u05D1 \u05DB\u05E8\u05D5\u05E0\u05D9 \u05DB\u05D2\u05D5\u05DF \u05D0\u05E1\u05D8\u05DE\u05D4 \u05D0\u05D5 \u05D0\u05DC\u05E8\u05D2\u05D9\u05D4 \u05D0\u05D7\u05E8\u05EA)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u05D0\u05E0\u05D9 \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1/\u05EA \u05DC\u05E9\u05DE\u05D5\u05E8 \u05DE\u05E8\u05D7\u05E7 \u05E9\u05DC \u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05DE\u05D8\u05E8\u05D9\u05DD \u05D1\u05D9\u05E0\u05D9 \u05DC\u05D1\u05D9\u05DF \u05D0\u05D3\u05DD \u05D0\u05D7\u05E8 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u05D9\u05D3\u05D5\u05E2 \u05DC\u05D9 \u05DB\u05D9 \u05D1\u05E2\u05D8 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05DE\u05E2\u05DC\u05D9\u05EA, \u05DC\u05D0 \u05D9\u05E9\u05D4\u05D5 \u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE2 \u05E0\u05D5\u05E1\u05E2\u05D9\u05DD \u05D1\u05D5-\u05D6\u05DE\u05E0\u05D9\u05EA.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u05D0\u05E0\u05D9 \u05DE\u05E6\u05D4\u05D9\u05E8/\u05D4 \u05DB\u05D9 \u05D4\u05D5\u05E7\u05E6\u05E2 \u05DC\u05D9 \u05E6\u05D9\u05D5\u05D3 \u05D0\u05D9\u05E9\u05D9 \u05E7\u05D1\u05D5\u05E2 \u05D5\u05D1\u05DB\u05DC\u05DC \u05DE\u05E7\u05DC\u05D3\u05EA, \u05E2\u05DB\u05D1\u05E8, \u05D8\u05DC\u05E4\u05D5\u05DF \u05E7\u05D5\u05D5\u05D9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05D0\u05E0\u05D9 \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1/\u05EA \u05E9\u05DC\u05D0 \u05DC\u05E2\u05E9\u05D5\u05EA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E6\u05D9\u05D5\u05D3 \u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC \u05E2\u05D5\u05D1\u05D3/\u05EA \u05D0\u05D7\u05E8/\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u05D0\u05E0\u05D9 \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1/\u05EA \u05DC\u05D7\u05D1\u05D5\u05E9 \u05DE\u05E1\u05D9\u05DB\u05D4 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05DB\u05DC \u05E2\u05EA.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u05D0\u05E0\u05D9 \u05DE\u05E6\u05D4\u05D9\u05E8/\u05D4 \u05DB\u05D9 \u05DC\u05D0 \u05D4\u05D9\u05D9\u05EA\u05D9 \u05D1\u05DE\u05D2\u05E2 \u05E2\u05DD \u05D7\u05D5\u05DC\u05D4 \u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05D1\u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CoronaSignComponent_mat_label_34_Template, 2, 0, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CoronaSignComponent_mat_label_35_Template, 2, 0, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-autocomplete", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CoronaSignComponent_mat_option_39_Template, 3, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-checkbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoronaSignComponent_Template_mat_checkbox_click_47_listener() {
            return ctx.setSignature();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u05D0\u05E0\u05D9 \u05DE\u05D0\u05E9\u05E8/\u05EA \u05DB\u05D9 \u05E7\u05E8\u05D0\u05EA\u05D9 \u05D5\u05DE\u05EA\u05D7\u05D9\u05D9\u05D1 \u05DC\u05E4\u05E2\u05D5\u05DC \u05DC\u05E4\u05D9 \u05D4\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E0''\u05DC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoronaSignComponent_Template_button_click_50_listener() {
            return ctx.onSign();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u05E9\u05DC\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 7, ctx.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.signForm.valid ? "active" : "")("disabled", !ctx.signForm.valid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["@media (max-width: 480px) {\n  .app-corona-sign[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100vh;\n    width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  font-family: \"Heebo\";\n  color: #4f4f4f;\n  padding: 55px 0;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    padding: 13px 0 25px 0;\n    box-shadow: none;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .panda-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .panda-logo[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .panda-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 156px;\n    margin: 10px 0;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 20px;\n  background-color: #0c405b;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 2px;\n  width: 600px;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  opacity: 0.88;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #4f4f4f;\n  font-weight: 700;\n  font-size: 30px;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-info-text[_ngcontent-%COMP%] {\n  font-family: \"Assistant\";\n  width: 71%;\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-info-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 0 14px;\n    width: 85%;\n    margin: 0;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-pad[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-pad[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-pad[_ngcontent-%COMP%]   .sign-pad-label-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-pad[_ngcontent-%COMP%]   .sign-pad-clear[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-pad[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-pad[_ngcontent-%COMP%]   .signature-pad[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: #d0d0d0 1px solid;\n  width: 400px;\n  height: 200px;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-pad[_ngcontent-%COMP%]   .signature-pad[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100px;\n  }\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-wrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 90vw;\n  }\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-wrap[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    margin: 0 20px;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .field-full-width[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 100%;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .form-group-first-child[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: #d0d0d0 !important;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-family: \"Heebo\";\n  font-weight: 700;\n  width: 100%;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: #d0d0d0 !important;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .checkbox-approve[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .checkbox-approve[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 0 0;\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-buttons[_ngcontent-%COMP%]   .sign-button[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 50px;\n  font-weight: 600;\n}\n\n@media (max-width: 480px) {\n  .corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-buttons[_ngcontent-%COMP%]   .sign-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.corona-sign-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .sign-buttons[_ngcontent-%COMP%]   .sign-button.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #286a8d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmdleWovRGV2L0Nvcm9uYVNpZ24vZnJvbnRlbmQvc3JjL2FwcC9jb3JvbmEtc2lnbi9jb3JvbmEtc2lnbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yb25hLXNpZ24vY29yb25hLXNpZ24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zZXJnZXlqL0Rldi9Db3JvbmFTaWduL2Zyb250ZW5kL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQURKO0lBRVEsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsT0FBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VDRE47QUFDRjs7QURLSTtFQURKO0lBRVEsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtFQ0ROO0FBQ0Y7O0FER0k7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRFI7O0FER1E7RUFMSjtJQU1RLHNCQUFBO0lBQ0EsZ0JBQUE7RUNBVjtBQUNGOztBREdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRFI7O0FER1E7RUFQSjtJQVFRLFNBQUE7RUNBVjtBQUNGOztBREdZO0VBREo7SUFFUSxZQUFBO0lBQ0EsY0FBQTtFQ0FkO0FBQ0Y7O0FESUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNGUjs7QURLSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNIUjs7QURLUTtFQVZKO0lBV1EsV0FBQTtFQ0ZWO0FBQ0Y7O0FESVE7RUFDSSxjRWpFQztFRmtFRCxnQkFBQTtFQUNBLGVBQUE7QUNGWjs7QURLUTtFQUNJLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0haOztBREtZO0VBTko7SUFPUSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VDRmQ7QUFDRjs7QURLUTtFQUNJLFVBQUE7QUNIWjs7QURLWTtFQUhKO0lBSVEsU0FBQTtFQ0ZkO0FBQ0Y7O0FES1E7RUFDSSxTQUFBO0FDSFo7O0FETVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0paOztBRE1ZO0VBTEo7SUFNUSxnQkFBQTtFQ0hkO0FBQ0Y7O0FES1k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDSGhCOztBRFVZO0VBQ0ksMEJBQUE7QUNSaEI7O0FEV1k7RUF4Qko7SUF5QlEsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtFQ1JkO0FBQ0Y7O0FEVVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUmhCOztBRFVnQjtFQVBKO0lBUVEsV0FBQTtJQUNBLGFBQUE7RUNQbEI7QUFDRjs7QURZWTtFQURKO0lBRVEsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtFQ1RkO0VEV2M7SUFDSSxjQUFBO0VDVGxCO0FBQ0Y7O0FEYVE7RUFDSSxhQUFBO0FDWFo7O0FEYVk7RUFISjtJQUlRLHNCQUFBO0VDVmQ7QUFDRjs7QURhZ0I7RUFESjtJQUVRLFNBQUE7SUFDQSxXQUFBO0VDVmxCO0FBQ0Y7O0FEYVk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNYaEI7O0FEY1k7RUFDSSxpQkFBQTtBQ1poQjs7QURnQlE7RUFDSSxvQ0FBQTtBQ2RaOztBRGlCUTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDZlo7O0FEaUJZO0VBQ0ksb0NBQUE7QUNmaEI7O0FEbUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2pCWjs7QURvQlE7RUFDSSxlQUFBO0FDbEJaOztBRG9CWTtFQUhKO0lBSVEsZUFBQTtFQ2pCZDtBQUNGOztBRG9CUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDbEJaOztBRG9CWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNsQmhCOztBRG9CZ0I7RUFMSjtJQU1RLFdBQUE7RUNqQmxCO0FBQ0Y7O0FEbUJnQjtFQUNJLGNFak5aO0VGa05ZLHlCRXhOUDtBRHVNYiIsImZpbGUiOiJzcmMvYXBwL2Nvcm9uYS1zaWduL2Nvcm9uYS1zaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xuXG4uYXBwLWNvcm9uYS1zaWduIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY29yb25hLXNpZ24td3JhcCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxuXG4gICAgLm1hdC1jYXJkIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgICAgICBwYWRkaW5nOiA1NXB4IDA7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDAgMjVweCAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wYW5kYS1sb2dvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1NnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxpbmUge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzQwNWI7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IDAuODg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1pbmZvLXRleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnQnO1xuICAgICAgICAgICAgd2lkdGg6IDcxJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lnbi1wYWQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNpZ24tcGFkLWxhYmVsLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaWduLXBhZC1sYWJlbCB7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNpZ24tcGFkLWNsZWFyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2lnbmF0dXJlLXBhZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogI2QwZDBkMCAxcHggc29saWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0td3JhcCB7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG5cbiAgICAgICAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZpZWxkLWZ1bGwtd2lkdGgge1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybS1ncm91cC1maXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3gtYXBwcm92ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWduLWJ1dHRvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuXG4gICAgICAgICAgICAuc2lnbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdGVtLWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXBwLWNvcm9uYS1zaWduIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29yb25hLXNpZ24td3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5tYXQtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBwYWRkaW5nOiA1NXB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvcm9uYS1zaWduLXdyYXAgLm1hdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxM3B4IDAgMjVweCAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5wYW5kYS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvcm9uYS1zaWduLXdyYXAgLnBhbmRhLWxvZ28ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb3JvbmEtc2lnbi13cmFwIC5wYW5kYS1sb2dvIGltZyB7XG4gICAgd2lkdGg6IDE1NnB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG59XG4uY29yb25hLXNpZ24td3JhcCAubGluZSB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDA1Yjtcbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciAuZm9ybS10aXRsZSB7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLmZvcm0taW5mby10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50XCI7XG4gIHdpZHRoOiA3MSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLmZvcm0taW5mby10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgdWwge1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgbGkge1xuICBtYXJnaW46IDA7XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLnNpZ24tcGFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5zaWduLXBhZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5zaWduLXBhZCAuc2lnbi1wYWQtbGFiZWwtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLnNpZ24tcGFkIC5zaWduLXBhZC1jbGVhciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciAuc2lnbi1wYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5zaWduLXBhZCAuc2lnbmF0dXJlLXBhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogI2QwZDBkMCAxcHggc29saWQ7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLnNpZ24tcGFkIC5zaWduYXR1cmUtcGFkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5mb3JtLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuICAuY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLmZvcm0td3JhcCAuZm9ybSB7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gIH1cbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciAuaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLmlucHV0cyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciAuaW5wdXRzIC5maWVsZC1mdWxsLXdpZHRoIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciAuaW5wdXRzIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciAuaW5wdXRzIC5mb3JtLWdyb3VwLWZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwICFpbXBvcnRhbnQ7XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMCAhaW1wb3J0YW50O1xufVxuLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3JvbmEtc2lnbi13cmFwIC5mb3JtLWNvbnRhaW5lciAuY2hlY2tib3gtYXBwcm92ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29yb25hLXNpZ24td3JhcCAuZm9ybS1jb250YWluZXIgLmNoZWNrYm94LWFwcHJvdmUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5zaWduLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xufVxuLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5zaWduLWJ1dHRvbnMgLnNpZ24tYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5zaWduLWJ1dHRvbnMgLnNpZ24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvcm9uYS1zaWduLXdyYXAgLmZvcm0tY29udGFpbmVyIC5zaWduLWJ1dHRvbnMgLnNpZ24tYnV0dG9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2YThkO1xufSIsIi8vIFRoZW1lIGNvbG9yc1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuJGRhcmstYmx1ZS1jb2xvcjogIzAzMzA1YztcbiRibHVlLWNvbG9yOiAjMTAzODUzO1xuJHRleHQtY29sb3I6ICM0ZjRmNGY7XG4kZGVzY3JpcHRpb24tY29sb3I6ICM4MjgyODI7XG4kcGxhY2Vob2xkZXItY29sb3I6ICNkMGQwZDA7XG4kcGFnZS1jb2xvcjogI2VkZWRlZDtcbiRsaW5rLWNvbG9yOiAjMmQ5Y2RiO1xuJGl0ZW0tY29sb3I6ICMyODZhOGQ7XG4kZGFuZ2VyLWNvbG9yOiAjZWI1NzU3O1xuJHBvc2l0aXZlLWNvbG9yOiAjODdjNjU2O1xuJG9ubGluZS1jb2xvcjogIzMwZjAwMDtcbiRjaGVja2JveC1jb2xvcjogI2ZmNTcyMjtcbiRiYWNrZ3JvdW5kLWV2ZW46ICNmNWY1ZjU7XG4kd2hpdGU6ICNmZmZmZmY7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoronaSignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corona-sign',
          templateUrl: './corona-sign.component.html',
          styleUrls: ['./corona-sign.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/corona-sign/data.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/corona-sign/data.service.ts ***!
    \*********************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppCoronaSignDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
      }

      _createClass(DataService, [{
        key: "getEmployees",
        value: function getEmployees() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendEndpoint, "/employees"));
        }
      }, {
        key: "addSignature",
        value: function addSignature(data) {
          // console.log(data);
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendEndpoint, "/signature"), data, {});
        }
      }, {
        key: "getSignatures",
        value: function getSignatures() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendEndpoint, "/signatures"), {
            responseType: 'blob'
          });
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      backendEndpoint: 'http://localhost:3000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/sergeyj/Dev/CoronaSign/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map