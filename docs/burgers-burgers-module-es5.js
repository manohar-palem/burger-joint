function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["burgers-burgers-module"], {
  /***/
  "./src/app/burgers/burgers-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/burgers/burgers-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: BurgersRoutingModule */

  /***/
  function srcAppBurgersBurgersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgersRoutingModule", function () {
      return BurgersRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_burgers_burgers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/burgers/burgers.component */
    "./src/app/burgers/components/burgers/burgers.component.ts");
    /* harmony import */


    var _components_burgers_wrapper_burgers_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/burgers-wrapper/burgers-wrapper.component */
    "./src/app/burgers/components/burgers-wrapper/burgers-wrapper.component.ts");
    /* harmony import */


    var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/order-form/order-form.component */
    "./src/app/burgers/components/order-form/order-form.component.ts");

    var routes = [{
      path: '',
      component: _components_burgers_wrapper_burgers_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["BurgersWrapperComponent"],
      children: [{
        path: 'list',
        component: _components_burgers_burgers_component__WEBPACK_IMPORTED_MODULE_3__["BurgersComponent"]
      }, {
        path: ':burgerType',
        component: _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__["OrderFormComponent"]
      }, {
        path: '**',
        redirectTo: 'list'
      }]
    }];

    var BurgersRoutingModule = function BurgersRoutingModule() {
      _classCallCheck(this, BurgersRoutingModule);
    };

    BurgersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BurgersRoutingModule
    });
    BurgersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BurgersRoutingModule_Factory(t) {
        return new (t || BurgersRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BurgersRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/burgers/burgers.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/burgers/burgers.module.ts ***!
    \*******************************************/

  /*! exports provided: BurgersModule */

  /***/
  function srcAppBurgersBurgersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgersModule", function () {
      return BurgersModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../shared/pipes/pipes.module */
    "./src/app/shared/pipes/pipes.module.ts");
    /* harmony import */


    var _burgers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./burgers-routing.module */
    "./src/app/burgers/burgers-routing.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components */
    "./src/app/burgers/components/index.ts");
    /* harmony import */


    var _components_burgers_burgers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/burgers/burgers.component */
    "./src/app/burgers/components/burgers/burgers.component.ts");
    /* harmony import */


    var _components_burgers_wrapper_burgers_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/burgers-wrapper/burgers-wrapper.component */
    "./src/app/burgers/components/burgers-wrapper/burgers-wrapper.component.ts");
    /* harmony import */


    var _components_burger_customization_burger_customization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/burger-customization/burger-customization.component */
    "./src/app/burgers/components/burger-customization/burger-customization.component.ts");
    /* harmony import */


    var _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/customer-details/customer-details.component */
    "./src/app/burgers/components/customer-details/customer-details.component.ts");
    /* harmony import */


    var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/order-form/order-form.component */
    "./src/app/burgers/components/order-form/order-form.component.ts");
    /* harmony import */


    var _components_order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/order-preview/order-preview.component */
    "./src/app/burgers/components/order-preview/order-preview.component.ts");
    /* harmony import */


    var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/order-confirmation/order-confirmation.component */
    "./src/app/burgers/components/order-confirmation/order-confirmation.component.ts");

    var BurgersModule = function BurgersModule() {
      _classCallCheck(this, BurgersModule);
    };

    BurgersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BurgersModule
    });
    BurgersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BurgersModule_Factory(t) {
        return new (t || BurgersModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRatingModule"], _burgers_routing_module__WEBPACK_IMPORTED_MODULE_5__["BurgersRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BurgersModule, {
        declarations: [_components_burgers_burgers_component__WEBPACK_IMPORTED_MODULE_7__["BurgersComponent"], _components_burgers_wrapper_burgers_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["BurgersWrapperComponent"], _components_burger_customization_burger_customization_component__WEBPACK_IMPORTED_MODULE_9__["BurgerCustomizationComponent"], _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__["CustomerDetailsComponent"], _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_11__["OrderFormComponent"], _components_order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_12__["OrderPreviewComponent"], _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_13__["OrderConfirmationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRatingModule"], _burgers_routing_module__WEBPACK_IMPORTED_MODULE_5__["BurgersRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_6__["components"]),
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRatingModule"], _burgers_routing_module__WEBPACK_IMPORTED_MODULE_5__["BurgersRoutingModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/burgers/components/burger-customization/burger-customization.component.data.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/burgers/components/burger-customization/burger-customization.component.data.ts ***!
    \************************************************************************************************/

  /*! exports provided: IngredientOptions */

  /***/
  function srcAppBurgersComponentsBurgerCustomizationBurgerCustomizationComponentDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientOptions", function () {
      return IngredientOptions;
    });
    /* harmony import */


    var _shared_config_burger_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../shared/config/burger.config */
    "./src/app/shared/config/burger.config.ts");

    var IngredientOptions = Object.entries(_shared_config_burger_config__WEBPACK_IMPORTED_MODULE_0__["Ingredients"]).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          ingredintLabel = _ref2[0],
          ingredinetName = _ref2[1];

      var ingredient = ingredinetName;
      return {
        name: ingredient,
        title: _shared_config_burger_config__WEBPACK_IMPORTED_MODULE_0__["IngredientsTitle"][ingredient],
        quantity: 0,
        max: _shared_config_burger_config__WEBPACK_IMPORTED_MODULE_0__["MinMaxIngedients"][ingredient].max,
        resettable: ingredient !== _shared_config_burger_config__WEBPACK_IMPORTED_MODULE_0__["Ingredients"].Bun
      };
    });
    /***/
  },

  /***/
  "./src/app/burgers/components/burger-customization/burger-customization.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/burgers/components/burger-customization/burger-customization.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BurgerCustomizationComponent */

  /***/
  function srcAppBurgersComponentsBurgerCustomizationBurgerCustomizationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgerCustomizationComponent", function () {
      return BurgerCustomizationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_config_burger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/config/burger.config */
    "./src/app/shared/config/burger.config.ts");
    /* harmony import */


    var _shared_services_price_servie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/services/price.servie */
    "./src/app/shared/services/price.servie.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/pipes/burger-price.pipe */
    "./src/app/shared/pipes/burger-price.pipe.ts");

    function BurgerCustomizationComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2713 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fill_r223 = ctx.fill;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", fill_r223 === 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", fill_r223, "%");
      }
    }

    function BurgerCustomizationComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-rating", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function BurgerCustomizationComponent_li_16_Template_ngb_rating_rateChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r226);

          var ingredient_r224 = ctx.$implicit;
          return ingredient_r224.quantity = $event;
        })("rateChange", function BurgerCustomizationComponent_li_16_Template_ngb_rating_rateChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r226);

          var ingredient_r224 = ctx.$implicit;

          var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r227.onRateChange(ingredient_r224, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ingredient_r224 = ctx.$implicit;

        var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ingredient_r224.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ingredient_r224.max)("resettable", ingredient_r224.resettable)("rate", ingredient_r224.quantity)("starTemplate", _r220);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ingredient_r224.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, ingredient_r224.quantity * ctx_r222.ingredientPrice[ingredient_r224.name], "INR"), " ");
      }
    }

    var BurgerCustomizationComponent =
    /*#__PURE__*/
    function () {
      function BurgerCustomizationComponent(priceService) {
        _classCallCheck(this, BurgerCustomizationComponent);

        this.priceService = priceService;
        this.ingredientOptions = [];
        this.quantityChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentRate = 5;
        this.ingredientPrice = _shared_config_burger_config__WEBPACK_IMPORTED_MODULE_1__["IngredientsPrice"];
      }

      _createClass(BurgerCustomizationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRateChange",
        value: function onRateChange(ingredientOption, currentRateValue) {
          this.quantityChanged.emit({
            ingredient: ingredientOption.name,
            quantity: currentRateValue
          });
        }
      }, {
        key: "trackByIngredientName",
        value: function trackByIngredientName(index, option) {
          return option.name;
        }
      }]);

      return BurgerCustomizationComponent;
    }();

    BurgerCustomizationComponent.ɵfac = function BurgerCustomizationComponent_Factory(t) {
      return new (t || BurgerCustomizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_price_servie__WEBPACK_IMPORTED_MODULE_2__["PriceService"]));
    };

    BurgerCustomizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BurgerCustomizationComponent,
      selectors: [["app-burger-customization"]],
      inputs: {
        burger: "burger",
        ingredientOptions: "ingredientOptions"
      },
      outputs: {
        quantityChanged: "quantityChanged"
      },
      decls: 23,
      vars: 8,
      consts: [[1, "burger-customization", "container"], [1, "d-flex", "flex-row", "row", "justify-content-center"], [1, "d-flex-item", "col-xs-12", "col-sm-6", "col-md-4", "burger-preview"], [1, "card"], ["alt", "...", 1, "card-img-top", "burger-thumbnail", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex-item", "col-xs-12", "col-sm-6", "col-md-4", "ingredient-customization"], ["symbolTemplate", ""], [1, "list-group", "list-group-flush"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "total-price-item"], [1, "badge"], [1, "total-price"], [1, "star"], [1, "half"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [3, "max", "resettable", "rate", "starTemplate", "rateChange"], [1, "add-price"]],
      template: function BurgerCustomizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BurgerCustomizationComponent_ng_template_11_Template, 4, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Customize Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BurgerCustomizationComponent_li_16_Template, 7, 11, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Burger Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "burgerPrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.burger.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.burger.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.burger.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ingredientOptions)("ngForTrackBy", ctx.trackByIngredientName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 6, ctx.burger), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRating"]],
      pipes: [_shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_5__["BurgerPricePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".burger-customization[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n}\n\n.burger-preview[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.burger-preview[_ngcontent-%COMP%]   .burger-thumbnail[_ngcontent-%COMP%] {\n  max-width: 120px;\n  margin: 0px auto;\n}\n\n.burger-preview[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: #e5e7e8;\n}\n\n.ingredient-customization[_ngcontent-%COMP%], .burger-preview[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 300px;\n}\n\n.ingredient-customization[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  min-width: 200px;\n  padding: 4px 12px;\n  color: #6c757d;\n  border-bottom-style: dashed;\n  font-size: 0.8rem;\n}\n\n.ingredient-customization[_ngcontent-%COMP%]   .list-group-item.total-price-item[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n}\n\n.star[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 1.2rem;\n  color: #d3d3d3;\n}\n\n.full[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.half[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: green;\n}\n\n.add-price[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 10px;\n  color: lightgray;\n  font-weight: 400;\n}\n\n.add-price.active[_ngcontent-%COMP%] {\n  color: #bd2130;\n}\n\nngb-rating[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2J1cmdlci1jdXN0b21pemF0aW9uL0Q6XFxNYW5vaGFyXFxQcmFjdGljZVxcQW5ndWxhckxlYXJuaW5nXFxidXJnZXItam9pbnQvc3JjXFxhcHBcXGJ1cmdlcnNcXGNvbXBvbmVudHNcXGJ1cmdlci1jdXN0b21pemF0aW9uXFxidXJnZXItY3VzdG9taXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2J1cmdlci1jdXN0b21pemF0aW9uL2J1cmdlci1jdXN0b21pemF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNISjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FETUU7RUFDRSxjQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9idXJnZXJzL2NvbXBvbmVudHMvYnVyZ2VyLWN1c3RvbWl6YXRpb24vYnVyZ2VyLWN1c3RvbWl6YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVyZ2VyLWN1c3RvbWl6YXRpb24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4uYnVyZ2VyLXByZXZpZXcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gIC5idXJnZXItdGh1bWJuYWlsIHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlN2U4O1xyXG4gIH1cclxufVxyXG5cclxuLmluZ3JlZGllbnQtY3VzdG9taXphdGlvbiwgLmJ1cmdlci1wcmV2aWV3IHtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgLy8gbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuLmluZ3JlZGllbnQtY3VzdG9taXphdGlvbiB7XHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRhc2hlZDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbS50b3RhbC1wcmljZS1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICNkM2QzZDM7XHJcbn1cclxuXHJcbi5mdWxsIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5oYWxmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYWRkLXByaWNlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNiZDIxMzA7XHJcbiAgfVxyXG59XHJcblxyXG5uZ2ItcmF0aW5nOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiIsIi5idXJnZXItY3VzdG9taXphdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLmJ1cmdlci1wcmV2aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5idXJnZXItcHJldmlldyAuYnVyZ2VyLXRodW1ibmFpbCB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYnVyZ2VyLXByZXZpZXcgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlNWU3ZTg7XG59XG5cbi5pbmdyZWRpZW50LWN1c3RvbWl6YXRpb24sIC5idXJnZXItcHJldmlldyB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5pbmdyZWRpZW50LWN1c3RvbWl6YXRpb24gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5pbmdyZWRpZW50LWN1c3RvbWl6YXRpb24gLmxpc3QtZ3JvdXAtaXRlbS50b3RhbC1wcmljZS1pdGVtIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnN0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjZDNkM2QzO1xufVxuXG4uZnVsbCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmhhbGYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uYWRkLXByaWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYWRkLXByaWNlLmFjdGl2ZSB7XG4gIGNvbG9yOiAjYmQyMTMwO1xufVxuXG5uZ2ItcmF0aW5nOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgerCustomizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-burger-customization',
          templateUrl: './burger-customization.component.html',
          styleUrls: ['./burger-customization.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_price_servie__WEBPACK_IMPORTED_MODULE_2__["PriceService"]
        }];
      }, {
        burger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ingredientOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        quantityChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/burgers/components/burgers-wrapper/burgers-wrapper.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/burgers/components/burgers-wrapper/burgers-wrapper.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: BurgersWrapperComponent */

  /***/
  function srcAppBurgersComponentsBurgersWrapperBurgersWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgersWrapperComponent", function () {
      return BurgersWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BurgersWrapperComponent =
    /*#__PURE__*/
    function () {
      function BurgersWrapperComponent() {
        _classCallCheck(this, BurgersWrapperComponent);
      }

      _createClass(BurgersWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BurgersWrapperComponent;
    }();

    BurgersWrapperComponent.ɵfac = function BurgersWrapperComponent_Factory(t) {
      return new (t || BurgersWrapperComponent)();
    };

    BurgersWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BurgersWrapperComponent,
      selectors: [["app-burgers-wrapper"]],
      decls: 2,
      vars: 0,
      consts: [[1, "burgers-wrapper"]],
      template: function BurgersWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".burgers-wrapper[_ngcontent-%COMP%] {\n  padding: 50px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2J1cmdlcnMtd3JhcHBlci9EOlxcTWFub2hhclxcUHJhY3RpY2VcXEFuZ3VsYXJMZWFybmluZ1xcYnVyZ2VyLWpvaW50L3NyY1xcYXBwXFxidXJnZXJzXFxjb21wb25lbnRzXFxidXJnZXJzLXdyYXBwZXJcXGJ1cmdlcnMtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2J1cmdlcnMtd3JhcHBlci9idXJnZXJzLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2J1cmdlcnMtd3JhcHBlci9idXJnZXJzLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVyZ2Vycy13cmFwcGVyIHtcclxuICBwYWRkaW5nOiA1MHB4IDBweDtcclxuXHJcbn1cclxuIiwiLmJ1cmdlcnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgersWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-burgers-wrapper',
          templateUrl: './burgers-wrapper.component.html',
          styleUrls: ['./burgers-wrapper.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/burgers/components/burgers/burgers.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/burgers/components/burgers/burgers.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BurgersComponent */

  /***/
  function srcAppBurgersComponentsBurgersBurgersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgersComponent", function () {
      return BurgersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_burgers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/burgers.service */
    "./src/app/burgers/services/burgers.service.ts");
    /* harmony import */


    var _shared_services_price_servie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/services/price.servie */
    "./src/app/shared/services/price.servie.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/pipes/burger-price.pipe */
    "./src/app/shared/pipes/burger-price.pipe.ts");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function BurgersComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "burgerPrice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var burger_r219 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", burger_r219.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](burger_r219.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](burger_r219.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, burger_r219));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/burgers/" + burger_r219.type));
      }
    }

    var BurgersComponent =
    /*#__PURE__*/
    function () {
      function BurgersComponent(burgersService, priceService) {
        _classCallCheck(this, BurgersComponent);

        this.burgersService = burgersService;
        this.priceService = priceService;
        this.burgers = [];
      }

      _createClass(BurgersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.burgersService.query().subscribe(function (burgers) {
            _this.burgers = burgers;
          });
        }
      }, {
        key: "trackByBurgerTypeFn",
        value: function trackByBurgerTypeFn(index, burger) {
          return burger.type;
        }
      }]);

      return BurgersComponent;
    }();

    BurgersComponent.ɵfac = function BurgersComponent_Factory(t) {
      return new (t || BurgersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_burgers_service__WEBPACK_IMPORTED_MODULE_1__["BurgersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_price_servie__WEBPACK_IMPORTED_MODULE_2__["PriceService"]));
    };

    BurgersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BurgersComponent,
      selectors: [["app-burgers"]],
      decls: 5,
      vars: 2,
      consts: [[1, "burgers-component", "container"], [1, "row"], ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "card"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "float-left"], [1, "card-link", "float-right", 3, "routerLink"]],
      template: function BurgersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Burgers List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BurgersComponent_div_4_Template, 13, 9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.burgers)("ngForTrackBy", ctx.trackByBurgerTypeFn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_5__["BurgerPricePipe"]],
      styles: [".burgers-component[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  max-width: 250px;\n}\n.burgers-component[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.burgers-component[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: #e5e7e8;\n}\n.burgers-component[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  height: 50px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2J1cmdlcnMvRDpcXE1hbm9oYXJcXFByYWN0aWNlXFxBbmd1bGFyTGVhcm5pbmdcXGJ1cmdlci1qb2ludC9zcmNcXGFwcFxcYnVyZ2Vyc1xcY29tcG9uZW50c1xcYnVyZ2Vyc1xcYnVyZ2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2J1cmdlcnMvYnVyZ2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFO0VBRUUsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2J1cmdlcnMvY29tcG9uZW50cy9idXJnZXJzL2J1cmdlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVyZ2Vycy1jb21wb25lbnQge1xyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgLy8gd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU3ZTg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10ZXh0IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbn1cclxuIiwiLmJ1cmdlcnMtY29tcG9uZW50IC5jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG4uYnVyZ2Vycy1jb21wb25lbnQgLmNhcmQtaW1nLXRvcCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYnVyZ2Vycy1jb21wb25lbnQgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlNWU3ZTg7XG59XG4uYnVyZ2Vycy1jb21wb25lbnQgLmNhcmQtdGV4dCB7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-burgers',
          templateUrl: './burgers.component.html',
          styleUrls: ['./burgers.component.scss']
        }]
      }], function () {
        return [{
          type: _services_burgers_service__WEBPACK_IMPORTED_MODULE_1__["BurgersService"]
        }, {
          type: _shared_services_price_servie__WEBPACK_IMPORTED_MODULE_2__["PriceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/burgers/components/customer-details/customer-details.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/burgers/components/customer-details/customer-details.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CustomerDetailsComponent */

  /***/
  function srcAppBurgersComponentsCustomerDetailsCustomerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function () {
      return CustomerDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CustomerDetailsComponent =
    /*#__PURE__*/
    function () {
      function CustomerDetailsComponent() {
        _classCallCheck(this, CustomerDetailsComponent);

        this.customerDetailsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CustomerDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.customerDetails = Object.assign({}, this.customer);
        }
      }, {
        key: "onInputChange",
        value: function onInputChange() {
          this.customerDetailsChanged.emit(this.customerDetails);
        }
      }]);

      return CustomerDetailsComponent;
    }();

    CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) {
      return new (t || CustomerDetailsComponent)();
    };

    CustomerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerDetailsComponent,
      selectors: [["app-customer-details"]],
      inputs: {
        customer: "customer"
      },
      outputs: {
        customerDetailsChanged: "customerDetailsChanged"
      },
      decls: 18,
      vars: 3,
      consts: [[1, "customer-details", "container"], [1, "row"], [1, "col-sm-8", "col-md-8", "col-lg-8", "customer-details-form-wrapper"], [1, "form", "customer-details-form"], [1, "form-group"], [1, "form-label", "form-label-sm"], ["type", "text", "placeholder", "enter your name", "name", "name", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "input"], ["type", "text", "placeholder", "enter mobile number", "name", "phone", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "input"], [1, "text-muted"], ["type", "text", "placeholder", "enter email address", "name", "email", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "input"]],
      template: function CustomerDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDetailsComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.customerDetails.name = $event;
          })("input", function CustomerDetailsComponent_Template_input_input_7_listener() {
            return ctx.onInputChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDetailsComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.customerDetails.phone = $event;
          })("input", function CustomerDetailsComponent_Template_input_input_11_listener() {
            return ctx.onInputChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDetailsComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.customerDetails.email = $event;
          })("input", function CustomerDetailsComponent_Template_input_input_17_listener() {
            return ctx.onInputChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerDetails.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerDetails.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerDetails.email);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".customer-details-form-wrapper[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2N1c3RvbWVyLWRldGFpbHMvRDpcXE1hbm9oYXJcXFByYWN0aWNlXFxBbmd1bGFyTGVhcm5pbmdcXGJ1cmdlci1qb2ludC9zcmNcXGFwcFxcYnVyZ2Vyc1xcY29tcG9uZW50c1xcY3VzdG9tZXItZGV0YWlsc1xcY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2J1cmdlcnMvY29tcG9uZW50cy9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tZXItZGV0YWlscy1mb3JtLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogNTUwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4iLCIuY3VzdG9tZXItZGV0YWlscy1mb3JtLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customer-details',
          templateUrl: './customer-details.component.html',
          styleUrls: ['./customer-details.component.scss']
        }]
      }], function () {
        return [];
      }, {
        customer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customerDetailsChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/burgers/components/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/burgers/components/index.ts ***!
    \*********************************************/

  /*! exports provided: components */

  /***/
  function srcAppBurgersComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./order-form/order-form.component */
    "./src/app/burgers/components/order-form/order-form.component.ts");
    /* harmony import */


    var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./customer-details/customer-details.component */
    "./src/app/burgers/components/customer-details/customer-details.component.ts");
    /* harmony import */


    var _burger_customization_burger_customization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./burger-customization/burger-customization.component */
    "./src/app/burgers/components/burger-customization/burger-customization.component.ts");
    /* harmony import */


    var _burgers_wrapper_burgers_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./burgers-wrapper/burgers-wrapper.component */
    "./src/app/burgers/components/burgers-wrapper/burgers-wrapper.component.ts");
    /* harmony import */


    var _burgers_burgers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./burgers/burgers.component */
    "./src/app/burgers/components/burgers/burgers.component.ts");
    /* harmony import */


    var _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-confirmation/order-confirmation.component */
    "./src/app/burgers/components/order-confirmation/order-confirmation.component.ts");
    /* harmony import */


    var _order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-preview/order-preview.component */
    "./src/app/burgers/components/order-preview/order-preview.component.ts");

    var components = [_burgers_burgers_component__WEBPACK_IMPORTED_MODULE_4__["BurgersComponent"], _burgers_wrapper_burgers_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["BurgersWrapperComponent"], _burger_customization_burger_customization_component__WEBPACK_IMPORTED_MODULE_2__["BurgerCustomizationComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__["CustomerDetailsComponent"], _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_0__["OrderFormComponent"], _order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_6__["OrderPreviewComponent"], _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationComponent"]];
    /***/
  },

  /***/
  "./src/app/burgers/components/order-confirmation/order-confirmation.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/burgers/components/order-confirmation/order-confirmation.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: OrderConfirmationComponent */

  /***/
  function srcAppBurgersComponentsOrderConfirmationOrderConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function () {
      return OrderConfirmationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/pipes/burger-price.pipe */
    "./src/app/shared/pipes/burger-price.pipe.ts");
    /* harmony import */


    var _shared_pipes_order_price_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/pipes/order-price.pipe */
    "./src/app/shared/pipes/order-price.pipe.ts");

    var _c0 = function _c0() {
      return ["/burgers"];
    };

    var OrderConfirmationComponent =
    /*#__PURE__*/
    function () {
      function OrderConfirmationComponent() {
        _classCallCheck(this, OrderConfirmationComponent);
      }

      _createClass(OrderConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderConfirmationComponent;
    }();

    OrderConfirmationComponent.ɵfac = function OrderConfirmationComponent_Factory(t) {
      return new (t || OrderConfirmationComponent)();
    };

    OrderConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderConfirmationComponent,
      selectors: [["app-order-confirmation"]],
      inputs: {
        order: "order"
      },
      decls: 68,
      vars: 32,
      consts: [[1, "order-confirmation"], [1, "d-flex"], ["role", "button", 1, "btn", "btn-link", 3, "routerLink"], [1, "card"], [1, "card-body"], [1, "card-text", "row"], [1, "col-xs-6", "col-sm-7", "col-md-7"], [1, "customer-details"], [1, "data-title"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge"], [1, "order-details"], [1, "col-xs-6", "col-sm-5", "col-md-5", "price-details"], [1, "badge", "burger-price"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "total-price-item"], [1, "badge", "total-price"], [1, "succes-wrapper"], ["role", "alert", 1, "alert", "alert-success"], [1, "display-8"]],
      template: function OrderConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Goto Burgers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customer Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Order Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Burger Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Ingredients ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Price Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Burger Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "burgerPrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Tax ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Service Charges ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Discount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Total ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "orderPrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Your order is confirmed!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Order ID: JR445");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.customer.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.customer.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.burger.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 16, ctx.order.burger.ingredients), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 18, ctx.order.burger), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("charges", ctx.order.additionalCharges.tax);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 20, ctx.order.additionalCharges.tax, "INR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("charges", ctx.order.additionalCharges.tax);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 23, ctx.order.additionalCharges.serviceCharges, "INR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("discount", ctx.order.discount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](56, 26, ctx.order.discount, "INR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 29, ctx.order), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_3__["BurgerPricePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _shared_pipes_order_price_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPricePipe"]],
      styles: [".order-confirmation[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0px auto;\n}\n.order-confirmation[_ngcontent-%COMP%]   .data-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border-bottom: 1px dashed #ddd;\n  display: inline-block;\n}\n.order-confirmation[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  min-width: 150px;\n  padding: 4px 12px;\n  color: #6c757d;\n  border-bottom-style: dashed;\n  font-size: 0.9rem;\n  border-bottom: 0px;\n}\n.order-confirmation[_ngcontent-%COMP%]   .list-group-item.total-price-item[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n}\n.order-confirmation[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%] {\n  border-left: 1px dashed lightgray;\n}\n.order-confirmation[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n.order-confirmation[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.charges[_ngcontent-%COMP%] {\n  color: #bd2130;\n}\n.order-confirmation[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.discount[_ngcontent-%COMP%] {\n  color: #1e7e34;\n}\n.order-confirmation[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.burger-price[_ngcontent-%COMP%], .order-confirmation[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.total-price[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: inherit;\n}\n.order-confirmation[_ngcontent-%COMP%]   .order-btn-wrapper[_ngcontent-%COMP%] {\n  padding: 25px 0px 0px 0px;\n}\n.order-confirmation[_ngcontent-%COMP%]   .order-btn-wrapper[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.order-confirmation[_ngcontent-%COMP%]   .succes-wrapper[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9EOlxcTWFub2hhclxcUHJhY3RpY2VcXEFuZ3VsYXJMZWFybmluZ1xcYnVyZ2VyLWpvaW50L3NyY1xcYXBwXFxidXJnZXJzXFxjb21wb25lbnRzXFxvcmRlci1jb25maXJtYXRpb25cXG9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNESjtBRElFO0VBQ0UsaUNBQUE7QUNGSjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZOO0FESU07RUFDRSxjQUFBO0FDRlI7QURLTTtFQUNFLGNBQUE7QUNIUjtBRFFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDTko7QURTRTtFQUNFLHlCQUFBO0FDUEo7QURTSTtFQUNFLGdCQUFBO0FDUE47QURhRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItY29uZmlybWF0aW9uIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcblxyXG4gIC5kYXRhLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtLnRvdGFsLXByaWNlLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAucHJpY2UtZGV0YWlscyB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCBsaWdodGdyYXk7XHJcblxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcblxyXG4gICAgICAmLmNoYXJnZXMge1xyXG4gICAgICAgIGNvbG9yOiAjYmQyMTMwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmRpc2NvdW50IHtcclxuICAgICAgICBjb2xvcjogIzFlN2UzNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByaWNlLWRldGFpbHMgLmJhZGdlLmJ1cmdlci1wcmljZSwgLnByaWNlLWRldGFpbHMgLmJhZGdlLnRvdGFsLXByaWNlIHtcclxuICAgIGNvbG9yOmluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItYnRuLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMjVweCAwcHggMHB4IDBweDtcclxuXHJcbiAgICAuY29sIHtcclxuICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnN1Y2Nlcy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIub3JkZXItY29uZmlybWF0aW9uIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5vcmRlci1jb25maXJtYXRpb24gLmRhdGEtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5vcmRlci1jb25maXJtYXRpb24gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuLm9yZGVyLWNvbmZpcm1hdGlvbiAubGlzdC1ncm91cC1pdGVtLnRvdGFsLXByaWNlLWl0ZW0ge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLm9yZGVyLWNvbmZpcm1hdGlvbiAucHJpY2UtZGV0YWlscyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbn1cbi5vcmRlci1jb25maXJtYXRpb24gLnByaWNlLWRldGFpbHMgLmJhZGdlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4ub3JkZXItY29uZmlybWF0aW9uIC5wcmljZS1kZXRhaWxzIC5iYWRnZS5jaGFyZ2VzIHtcbiAgY29sb3I6ICNiZDIxMzA7XG59XG4ub3JkZXItY29uZmlybWF0aW9uIC5wcmljZS1kZXRhaWxzIC5iYWRnZS5kaXNjb3VudCB7XG4gIGNvbG9yOiAjMWU3ZTM0O1xufVxuLm9yZGVyLWNvbmZpcm1hdGlvbiAucHJpY2UtZGV0YWlscyAuYmFkZ2UuYnVyZ2VyLXByaWNlLCAub3JkZXItY29uZmlybWF0aW9uIC5wcmljZS1kZXRhaWxzIC5iYWRnZS50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG4ub3JkZXItY29uZmlybWF0aW9uIC5vcmRlci1idG4td3JhcHBlciB7XG4gIHBhZGRpbmc6IDI1cHggMHB4IDBweCAwcHg7XG59XG4ub3JkZXItY29uZmlybWF0aW9uIC5vcmRlci1idG4td3JhcHBlciAuY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5vcmRlci1jb25maXJtYXRpb24gLnN1Y2Nlcy13cmFwcGVyIHtcbiAgcGFkZGluZzogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-confirmation',
          templateUrl: './order-confirmation.component.html',
          styleUrls: ['./order-confirmation.component.scss']
        }]
      }], function () {
        return [];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/burgers/components/order-form/order-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/burgers/components/order-form/order-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrderFormComponent */

  /***/
  function srcAppBurgersComponentsOrderFormOrderFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function () {
      return OrderFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/models/order.model */
    "./src/app/shared/models/order.model.ts");
    /* harmony import */


    var _burger_customization_burger_customization_component_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../burger-customization/burger-customization.component.data */
    "./src/app/burgers/components/burger-customization/burger-customization.component.data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_burgers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/burgers.service */
    "./src/app/burgers/services/burgers.service.ts");
    /* harmony import */


    var _shared_services_price_servie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../shared/services/price.servie */
    "./src/app/shared/services/price.servie.ts");
    /* harmony import */


    var _shared_services_orders_servie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/orders.servie */
    "./src/app/shared/services/orders.servie.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../order-confirmation/order-confirmation.component */
    "./src/app/burgers/components/order-confirmation/order-confirmation.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _burger_customization_burger_customization_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../burger-customization/burger-customization.component */
    "./src/app/burgers/components/burger-customization/burger-customization.component.ts");
    /* harmony import */


    var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../customer-details/customer-details.component */
    "./src/app/burgers/components/customer-details/customer-details.component.ts");
    /* harmony import */


    var _order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../order-preview/order-preview.component */
    "./src/app/burgers/components/order-preview/order-preview.component.ts");

    function OrderFormComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function OrderFormComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-order-confirmation", 4);
      }

      if (rf & 2) {
        var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx_r230.order);
      }
    }

    function OrderFormComponent_ng_template_4_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-burger-customization", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("quantityChanged", function OrderFormComponent_ng_template_4_ng_template_5_Template_app_burger_customization_quantityChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r238);

          var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r237.onQuantityChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ingredientOptions", ctx_r234.customizationOptions)("burger", ctx_r234.order.burger);
      }
    }

    function OrderFormComponent_ng_template_4_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-customer-details", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("customerDetailsChanged", function OrderFormComponent_ng_template_4_ng_template_9_Template_app_customer_details_customerDetailsChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240);

          var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r239.onCustomerDetailsChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customer", ctx_r235.order.customer);
      }
    }

    function OrderFormComponent_ng_template_4_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-order-preview", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitOrder", function OrderFormComponent_ng_template_4_ng_template_13_Template_app_order_preview_submitOrder_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r242);

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r241.onSubmitOrder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx_r236.order);
      }
    }

    var _c0 = function _c0() {
      return ["/burgers"];
    };

    function OrderFormComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function OrderFormComponent_ng_template_4_Template_ul_activeIdChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r243.currentTab = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customize Burger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderFormComponent_ng_template_4_ng_template_5_Template, 1, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderFormComponent_ng_template_4_ng_template_9_Template, 1, 1, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Preview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrderFormComponent_ng_template_4_ng_template_13_Template, 1, 1, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderFormComponent_ng_template_4_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r245.prev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderFormComponent_ng_template_4_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r246.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx_r232.currentTab);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r233);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("hidden", ctx_r232.currentTab !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r232.currentTab === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r232.currentTab === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r232.currentTab !== 3);
      }
    }

    var OrderFormComponent =
    /*#__PURE__*/
    function () {
      function OrderFormComponent(activatedRoute, burgersService, priceService, orderssService) {
        _classCallCheck(this, OrderFormComponent);

        this.activatedRoute = activatedRoute;
        this.burgersService = burgersService;
        this.priceService = priceService;
        this.orderssService = orderssService;
        this.order = new _shared_models_order_model__WEBPACK_IMPORTED_MODULE_1__["Order"]();
        this.customizationOptions = [];
      }

      _createClass(OrderFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var burgerType = this.activatedRoute.snapshot.params.burgerType;
          /* TODO:: if the burgerType is not valid, should redirect to burgers list or show message in view */

          this.order.burger = this.burgersService.getBurgerByType(burgerType);
          this.customizationOptions = _burger_customization_burger_customization_component_data__WEBPACK_IMPORTED_MODULE_2__["IngredientOptions"].map(function (option) {
            return Object.assign(Object.assign({}, option), {
              quantity: _this2.order.burger.ingredients[option.name] || 0
            });
          });
        }
      }, {
        key: "onQuantityChanged",
        value: function onQuantityChanged(data) {
          this.order.burger.ingredients[data.ingredient] = data.quantity;
          this.order.burger = Object.assign({}, this.order.burger);
        }
      }, {
        key: "onCustomerDetailsChanged",
        value: function onCustomerDetailsChanged(customerDetails) {
          this.order.customer = customerDetails;
        }
      }, {
        key: "onSubmitOrder",
        value: function onSubmitOrder() {
          var _this3 = this;

          this.orderssService.post(this.order).subscribe(function (order) {
            _this3.isOrderSubmitted = true;
          });
        }
      }, {
        key: "prev",
        value: function prev() {
          this.currentTab = this.currentTab - 1;
        }
      }, {
        key: "next",
        value: function next() {
          this.currentTab = this.currentTab + 1;
        }
      }]);

      return OrderFormComponent;
    }();

    OrderFormComponent.ɵfac = function OrderFormComponent_Factory(t) {
      return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_burgers_service__WEBPACK_IMPORTED_MODULE_4__["BurgersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_price_servie__WEBPACK_IMPORTED_MODULE_5__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_orders_servie__WEBPACK_IMPORTED_MODULE_6__["OrderssService"]));
    };

    OrderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderFormComponent,
      selectors: [["app-order-form"]],
      decls: 6,
      vars: 3,
      consts: [[1, "order-form", "container"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["confirmationTemplate", ""], ["orderFormTemplate", ""], [3, "order"], ["ngbNav", "", 1, "nav", "nav-tabs", "justify-content-center", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "d-flex", "justify-content-around"], ["role", "button", 1, "btn", "btn-link", 3, "routerLink", "hidden"], ["role", "button", 1, "btn", "btn-link", 3, "hidden", "click"], [3, "hidden"], [3, "ingredientOptions", "burger", "quantityChanged"], [3, "customer", "customerDetailsChanged"], [3, "order", "submitOrder"]],
      template: function OrderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderFormComponent_ng_container_1_Template, 1, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderFormComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderFormComponent_ng_template_4_Template, 23, 11, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOrderSubmitted)("ngIfThen", _r229)("ngIfElse", _r231);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["OrderConfirmationComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _burger_customization_burger_customization_component__WEBPACK_IMPORTED_MODULE_10__["BurgerCustomizationComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_11__["CustomerDetailsComponent"], _order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_12__["OrderPreviewComponent"]],
      styles: [".amount-details[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  min-width: 250px;\n  padding: 4px 12px;\n  color: #6c757d;\n  border-bottom-style: dashed;\n  font-size: 0.8rem;\n  direction: rtl;\n}\n.amount-details[_ngcontent-%COMP%]   .list-group-item.total-price-item[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n}\n.amount-details[_ngcontent-%COMP%]   .order-confirmation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLWZvcm0vRDpcXE1hbm9oYXJcXFByYWN0aWNlXFxBbmd1bGFyTGVhcm5pbmdcXGJ1cmdlci1qb2ludC9zcmNcXGFwcFxcYnVyZ2Vyc1xcY29tcG9uZW50c1xcb3JkZXItZm9ybVxcb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDREo7QURJRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbW91bnQtZGV0YWlscyB7XHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRhc2hlZDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtLnRvdGFsLXByaWNlLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItY29uZmlybWF0aW9uIC5jYXJkIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCIuYW1vdW50LWRldGFpbHMgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG4uYW1vdW50LWRldGFpbHMgLmxpc3QtZ3JvdXAtaXRlbS50b3RhbC1wcmljZS1pdGVtIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5hbW91bnQtZGV0YWlscyAub3JkZXItY29uZmlybWF0aW9uIC5jYXJkIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgaGVpZ2h0OiAyNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-form',
          templateUrl: './order-form.component.html',
          styleUrls: ['./order-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_burgers_service__WEBPACK_IMPORTED_MODULE_4__["BurgersService"]
        }, {
          type: _shared_services_price_servie__WEBPACK_IMPORTED_MODULE_5__["PriceService"]
        }, {
          type: _shared_services_orders_servie__WEBPACK_IMPORTED_MODULE_6__["OrderssService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/burgers/components/order-preview/order-preview.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/burgers/components/order-preview/order-preview.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: OrderPreviewComponent */

  /***/
  function srcAppBurgersComponentsOrderPreviewOrderPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPreviewComponent", function () {
      return OrderPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_ingredients_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/pipes/ingredients.pipe */
    "./src/app/shared/pipes/ingredients.pipe.ts");
    /* harmony import */


    var _shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/pipes/burger-price.pipe */
    "./src/app/shared/pipes/burger-price.pipe.ts");
    /* harmony import */


    var _shared_pipes_order_price_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/pipes/order-price.pipe */
    "./src/app/shared/pipes/order-price.pipe.ts");

    function OrderPreviewComponent_p_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fill customer details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var OrderPreviewComponent =
    /*#__PURE__*/
    function () {
      function OrderPreviewComponent() {
        _classCallCheck(this, OrderPreviewComponent);

        this.submitOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(OrderPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateCustomerDetails();
        }
      }, {
        key: "initiatteOrder",
        value: function initiatteOrder() {
          this.submitted = true;

          if (this.areCustomerDetailsValid) {
            this.submitOrder.emit();
          }
        }
      }, {
        key: "validateCustomerDetails",
        value: function validateCustomerDetails() {
          var _this$order$customer = this.order.customer,
              name = _this$order$customer.name,
              phone = _this$order$customer.phone;
          this.areCustomerDetailsValid = Boolean(name && phone && phone.length === 10);
        }
      }]);

      return OrderPreviewComponent;
    }();

    OrderPreviewComponent.ɵfac = function OrderPreviewComponent_Factory(t) {
      return new (t || OrderPreviewComponent)();
    };

    OrderPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderPreviewComponent,
      selectors: [["app-order-preview"]],
      inputs: {
        order: "order"
      },
      outputs: {
        submitOrder: "submitOrder"
      },
      decls: 64,
      vars: 31,
      consts: [[1, "order-preview"], [1, "card"], [1, "card-body"], [1, "card-text", "row"], [1, "col-xs-6", "col-sm-7", "col-md-7"], [1, "customer-details"], [1, "data-title"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge"], [1, "order-details"], [1, "col-xs-6", "col-sm-5", "col-md-5", "price-details"], [1, "badge", "burger-price"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "total-price-item"], [1, "badge", "total-price"], [1, "row", "order-btn-wrapper"], [1, "col", "col-sm-6"], [1, "btn", "btn-primary", "btn-block", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function OrderPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Order Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Burger Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Ingredients ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "ingredients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Price Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Burger Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "burgerPrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Tax ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Service Charges ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Discount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Total ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "orderPrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderPreviewComponent_Template_button_click_61_listener() {
            return ctx.initiatteOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, OrderPreviewComponent_p_63_Template, 2, 0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.customer.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.customer.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.burger.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 16, ctx.order.burger), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 18, ctx.order.burger), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("charges", ctx.order.additionalCharges.tax);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 20, ctx.order.additionalCharges.tax, "INR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("charges", ctx.order.additionalCharges.tax);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 23, ctx.order.additionalCharges.serviceCharges, "INR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("discount", ctx.order.discount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 26, ctx.order.discount, "INR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 29, ctx.order), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.areCustomerDetailsValid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_shared_pipes_ingredients_pipe__WEBPACK_IMPORTED_MODULE_2__["IngredientsPipe"], _shared_pipes_burger_price_pipe__WEBPACK_IMPORTED_MODULE_3__["BurgerPricePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _shared_pipes_order_price_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPricePipe"]],
      styles: [".order-preview[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0px auto;\n}\n.order-preview[_ngcontent-%COMP%]   .data-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border-bottom: 1px dashed #ddd;\n  display: inline-block;\n}\n.order-preview[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  min-width: 150px;\n  padding: 4px 12px;\n  color: #6c757d;\n  border-bottom-style: dashed;\n  font-size: 0.9rem;\n  border-bottom: 0px;\n}\n.order-preview[_ngcontent-%COMP%]   .list-group-item.total-price-item[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n}\n.order-preview[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%] {\n  border-left: 1px dashed lightgray;\n}\n.order-preview[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n.order-preview[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.charges[_ngcontent-%COMP%] {\n  color: #bd2130;\n}\n.order-preview[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.discount[_ngcontent-%COMP%] {\n  color: #1e7e34;\n}\n.order-preview[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.burger-price[_ngcontent-%COMP%], .order-preview[_ngcontent-%COMP%]   .price-details[_ngcontent-%COMP%]   .badge.total-price[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: inherit;\n}\n.order-preview[_ngcontent-%COMP%]   .order-btn-wrapper[_ngcontent-%COMP%] {\n  padding: 25px 0px 0px 0px;\n}\n.order-preview[_ngcontent-%COMP%]   .order-btn-wrapper[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLXByZXZpZXcvRDpcXE1hbm9oYXJcXFByYWN0aWNlXFxBbmd1bGFyTGVhcm5pbmdcXGJ1cmdlci1qb2ludC9zcmNcXGFwcFxcYnVyZ2Vyc1xcY29tcG9uZW50c1xcb3JkZXItcHJldmlld1xcb3JkZXItcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVyZ2Vycy9jb21wb25lbnRzL29yZGVyLXByZXZpZXcvb3JkZXItcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSxpQ0FBQTtBQ0ZKO0FESUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDRk47QURJTTtFQUNFLGNBQUE7QUNGUjtBREtNO0VBQ0UsY0FBQTtBQ0hSO0FEUUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNFO0VBQ0UseUJBQUE7QUNQSjtBRFNJO0VBQ0UsZ0JBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL2J1cmdlcnMvY29tcG9uZW50cy9vcmRlci1wcmV2aWV3L29yZGVyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItcHJldmlldyB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG5cclxuICAuZGF0YS10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRhc2hlZDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbS50b3RhbC1wcmljZS1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgLnByaWNlLWRldGFpbHMge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgbGlnaHRncmF5O1xyXG5cclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG5cclxuICAgICAgJi5jaGFyZ2VzIHtcclxuICAgICAgICBjb2xvcjogI2JkMjEzMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kaXNjb3VudCB7XHJcbiAgICAgICAgY29sb3I6ICMxZTdlMzQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmljZS1kZXRhaWxzIC5iYWRnZS5idXJnZXItcHJpY2UsIC5wcmljZS1kZXRhaWxzIC5iYWRnZS50b3RhbC1wcmljZSB7XHJcbiAgICBjb2xvcjppbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWJ0bi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMHB4IDBweCAwcHg7XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiLm9yZGVyLXByZXZpZXcge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLm9yZGVyLXByZXZpZXcgLmRhdGEtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5vcmRlci1wcmV2aWV3IC5saXN0LWdyb3VwLWl0ZW0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGRhc2hlZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cbi5vcmRlci1wcmV2aWV3IC5saXN0LWdyb3VwLWl0ZW0udG90YWwtcHJpY2UtaXRlbSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ub3JkZXItcHJldmlldyAucHJpY2UtZGV0YWlscyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbn1cbi5vcmRlci1wcmV2aWV3IC5wcmljZS1kZXRhaWxzIC5iYWRnZSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuLm9yZGVyLXByZXZpZXcgLnByaWNlLWRldGFpbHMgLmJhZGdlLmNoYXJnZXMge1xuICBjb2xvcjogI2JkMjEzMDtcbn1cbi5vcmRlci1wcmV2aWV3IC5wcmljZS1kZXRhaWxzIC5iYWRnZS5kaXNjb3VudCB7XG4gIGNvbG9yOiAjMWU3ZTM0O1xufVxuLm9yZGVyLXByZXZpZXcgLnByaWNlLWRldGFpbHMgLmJhZGdlLmJ1cmdlci1wcmljZSwgLm9yZGVyLXByZXZpZXcgLnByaWNlLWRldGFpbHMgLmJhZGdlLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbi5vcmRlci1wcmV2aWV3IC5vcmRlci1idG4td3JhcHBlciB7XG4gIHBhZGRpbmc6IDI1cHggMHB4IDBweCAwcHg7XG59XG4ub3JkZXItcHJldmlldyAub3JkZXItYnRuLXdyYXBwZXIgLmNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-preview',
          templateUrl: './order-preview.component.html',
          styleUrls: ['./order-preview.component.scss']
        }]
      }], function () {
        return [];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        submitOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/burgers/services/burgers.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/burgers/services/burgers.service.ts ***!
    \*****************************************************/

  /*! exports provided: BurgersService */

  /***/
  function srcAppBurgersServicesBurgersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgersService", function () {
      return BurgersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_data_burgers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/data/burgers.data */
    "./src/app/shared/data/burgers.data.ts");

    var BurgersService =
    /*#__PURE__*/
    function () {
      function BurgersService() {
        _classCallCheck(this, BurgersService);
      }

      _createClass(BurgersService, [{
        key: "query",
        // query list of burgers
        value: function query() {
          // should make an API call
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_data_burgers_data__WEBPACK_IMPORTED_MODULE_2__["BURGERS"]);
        } // get a burger by id

      }, {
        key: "get",
        value: function get(burgerId) {} // save burger details

      }, {
        key: "post",
        value: function post(payload) {} // update burger details

      }, {
        key: "put",
        value: function put(id, payload) {} // delete burger details

      }, {
        key: "delete",
        value: function _delete(id) {}
      }, {
        key: "getBurgerByType",
        value: function getBurgerByType(burgerType) {
          return Object(_shared_data_burgers_data__WEBPACK_IMPORTED_MODULE_2__["getBurgerByType"])(burgerType);
        }
      }]);

      return BurgersService;
    }();

    BurgersService.ɵfac = function BurgersService_Factory(t) {
      return new (t || BurgersService)();
    };

    BurgersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BurgersService,
      factory: BurgersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/config/order.config.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/config/order.config.ts ***!
    \***********************************************/

  /*! exports provided: ADDITIONAL_CHARGES, DISCOUNT */

  /***/
  function srcAppSharedConfigOrderConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADDITIONAL_CHARGES", function () {
      return ADDITIONAL_CHARGES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DISCOUNT", function () {
      return DISCOUNT;
    });

    var ADDITIONAL_CHARGES = {
      TAX: 2,
      SERVIE_CHARGES: 1
    };
    var DISCOUNT = 1.5;
    /***/
  },

  /***/
  "./src/app/shared/data/burgers.data.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/data/burgers.data.ts ***!
    \*********************************************/

  /*! exports provided: getBurgerByType, BURGERS */

  /***/
  function srcAppSharedDataBurgersDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _ingredients, _ingredients2, _ingredients3, _ingredients4, _ingredients5, _ingredients6, _BURGERS_DESC;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBurgerByType", function () {
      return getBurgerByType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BURGERS", function () {
      return BURGERS;
    });
    /* harmony import */


    var _models_burger_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../models/burger.model */
    "./src/app/shared/models/burger.model.ts");
    /* harmony import */


    var _config_burger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../config/burger.config */
    "./src/app/shared/config/burger.config.ts");

    var placehoderImg = 'assets/images/burger-placeholder.xs.png';
    var burgerDesc = 'It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun.';
    var BURGERS_DESC = (_BURGERS_DESC = {}, _defineProperty(_BURGERS_DESC, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerType"].CheeseBurger, {
      img: placehoderImg,
      description: burgerDesc,
      ingredients: (_ingredients = {}, _defineProperty(_ingredients, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Bun, 1), _defineProperty(_ingredients, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Cheese, 1), _ingredients)
    }), _defineProperty(_BURGERS_DESC, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerType"].CutletBurger, {
      img: placehoderImg,
      description: burgerDesc,
      ingredients: (_ingredients2 = {}, _defineProperty(_ingredients2, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Bun, 1), _defineProperty(_ingredients2, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Cutlet, 1), _ingredients2)
    }), _defineProperty(_BURGERS_DESC, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerType"].SaladBurger, {
      img: placehoderImg,
      description: burgerDesc,
      ingredients: (_ingredients3 = {}, _defineProperty(_ingredients3, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Bun, 1), _defineProperty(_ingredients3, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Salad, 1), _ingredients3)
    }), _defineProperty(_BURGERS_DESC, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerType"].ChlliBurger, {
      img: placehoderImg,
      description: burgerDesc,
      ingredients: (_ingredients4 = {}, _defineProperty(_ingredients4, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Bun, 1), _defineProperty(_ingredients4, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Chilli, 1), _ingredients4)
    }), _defineProperty(_BURGERS_DESC, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerType"].PaneerBurger, {
      img: placehoderImg,
      description: burgerDesc,
      ingredients: (_ingredients5 = {}, _defineProperty(_ingredients5, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Bun, 1), _defineProperty(_ingredients5, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Paneer, 1), _ingredients5)
    }), _defineProperty(_BURGERS_DESC, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerType"].MashroomBurger, {
      img: placehoderImg,
      description: burgerDesc,
      ingredients: (_ingredients6 = {}, _defineProperty(_ingredients6, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Bun, 1), _defineProperty(_ingredients6, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Mashroom, 1), _ingredients6)
    }), _defineProperty(_BURGERS_DESC, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerType"].VanillaBurger, {
      img: placehoderImg,
      description: burgerDesc,
      ingredients: _defineProperty({}, _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["Ingredients"].Bun, 1)
    }), _BURGERS_DESC);

    function getBurgerByType(type) {
      var burger = new _models_burger_model__WEBPACK_IMPORTED_MODULE_0__["Burger"]();
      var desc = BURGERS_DESC[type];
      Object.entries(desc.ingredients).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            name = _ref4[0],
            value = _ref4[1];

        burger.ingredients[name] = value;
      });
      burger.type = type;
      burger.title = _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["BurgerTitle"][type];
      burger.description = desc.description;
      burger.thumbnail = placehoderImg;
      return burger;
    }

    ;
    var BURGERS = Object.keys(BURGERS_DESC).map(function (type) {
      return getBurgerByType(type);
    });
    /***/
  },

  /***/
  "./src/app/shared/models/burger.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/models/burger.model.ts ***!
    \***********************************************/

  /*! exports provided: Burger */

  /***/
  function srcAppSharedModelsBurgerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Burger", function () {
      return Burger;
    });
    /* harmony import */


    var _config_burger_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../config/burger.config */
    "./src/app/shared/config/burger.config.ts");

    var Burger = function Burger() {
      _classCallCheck(this, Burger);

      this.name = '';
      this.type = _config_burger_config__WEBPACK_IMPORTED_MODULE_0__["BurgerType"].CheeseBurger;
      this.ingredients = _defineProperty({}, _config_burger_config__WEBPACK_IMPORTED_MODULE_0__["Ingredients"].Bun, 1);
      this.title = '';
      this.thumbnail = '';
      this.description = '';
    };
    /***/

  },

  /***/
  "./src/app/shared/models/order.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/models/order.model.ts ***!
    \**********************************************/

  /*! exports provided: CustomerDetails, Order */

  /***/
  function srcAppSharedModelsOrderModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerDetails", function () {
      return CustomerDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });
    /* harmony import */


    var _burger_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./burger.model */
    "./src/app/shared/models/burger.model.ts");
    /* harmony import */


    var _config_order_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../config/order.config */
    "./src/app/shared/config/order.config.ts");

    var CustomerDetails = function CustomerDetails() {
      _classCallCheck(this, CustomerDetails);

      this.name = '';
      this.phone = '';
    };

    var Order = function Order() {
      _classCallCheck(this, Order);

      this.burger = new _burger_model__WEBPACK_IMPORTED_MODULE_0__["Burger"]();
      this.customer = new CustomerDetails();
      this.discount = _config_order_config__WEBPACK_IMPORTED_MODULE_1__["DISCOUNT"];
      this.additionalCharges = {
        tax: _config_order_config__WEBPACK_IMPORTED_MODULE_1__["ADDITIONAL_CHARGES"].TAX,
        serviceCharges: _config_order_config__WEBPACK_IMPORTED_MODULE_1__["ADDITIONAL_CHARGES"].SERVIE_CHARGES
      };
    };
    /***/

  }
}]);
//# sourceMappingURL=burgers-burgers-module-es5.js.map