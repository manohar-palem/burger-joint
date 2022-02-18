function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~burgers-burgers-module~orders-orders-module"], {
  /***/
  "./src/app/shared/config/burger.config.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/config/burger.config.ts ***!
    \************************************************/

  /*! exports provided: Ingredients, BurgerType, IngredientsPrice, IngredientsTitle, MinMaxIngedients, BurgerTitle */

  /***/
  function srcAppSharedConfigBurgerConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _IngredientsPrice, _IngredientsTitle, _MinMaxIngedients, _BurgerTitle;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ingredients", function () {
      return Ingredients;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgerType", function () {
      return BurgerType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientsPrice", function () {
      return IngredientsPrice;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientsTitle", function () {
      return IngredientsTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinMaxIngedients", function () {
      return MinMaxIngedients;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgerTitle", function () {
      return BurgerTitle;
    });

    var Ingredients;

    (function (Ingredients) {
      Ingredients["Bun"] = "bun";
      Ingredients["Salad"] = "salad";
      Ingredients["Cheese"] = "cheese";
      Ingredients["Cutlet"] = "cutlet";
      Ingredients["Paneer"] = "paneer";
      Ingredients["Mashroom"] = "mashroom";
      Ingredients["Chilli"] = "chilli";
    })(Ingredients || (Ingredients = {}));

    var BurgerType;

    (function (BurgerType) {
      BurgerType["VanillaBurger"] = "vanilla_burger";
      BurgerType["CheeseBurger"] = "cheese_burger";
      BurgerType["SaladBurger"] = "salad_burger";
      BurgerType["CutletBurger"] = "cutlet_burger";
      BurgerType["PaneerBurger"] = "paneer_burger";
      BurgerType["ChlliBurger"] = "chilli_burger";
      BurgerType["MashroomBurger"] = "mashroom_burger";
    })(BurgerType || (BurgerType = {}));

    var IngredientsPrice = (_IngredientsPrice = {}, _defineProperty(_IngredientsPrice, Ingredients.Bun, 5), _defineProperty(_IngredientsPrice, Ingredients.Salad, 5), _defineProperty(_IngredientsPrice, Ingredients.Cutlet, 2), _defineProperty(_IngredientsPrice, Ingredients.Cheese, 1), _defineProperty(_IngredientsPrice, Ingredients.Chilli, 1), _defineProperty(_IngredientsPrice, Ingredients.Paneer, 3), _defineProperty(_IngredientsPrice, Ingredients.Mashroom, 4), _IngredientsPrice);
    var IngredientsTitle = (_IngredientsTitle = {}, _defineProperty(_IngredientsTitle, Ingredients.Bun, 'Bun'), _defineProperty(_IngredientsTitle, Ingredients.Salad, 'Salad'), _defineProperty(_IngredientsTitle, Ingredients.Cutlet, 'Cutlet'), _defineProperty(_IngredientsTitle, Ingredients.Cheese, 'Cheese'), _defineProperty(_IngredientsTitle, Ingredients.Chilli, 'Jalapeno'), _defineProperty(_IngredientsTitle, Ingredients.Paneer, 'Paneer'), _defineProperty(_IngredientsTitle, Ingredients.Mashroom, 'Mashroom'), _IngredientsTitle);
    var MinMaxIngedients = (_MinMaxIngedients = {}, _defineProperty(_MinMaxIngedients, Ingredients.Bun, {
      min: 1,
      max: 2
    }), _defineProperty(_MinMaxIngedients, Ingredients.Salad, {
      min: 0,
      max: 1
    }), _defineProperty(_MinMaxIngedients, Ingredients.Cutlet, {
      min: 0,
      max: 3
    }), _defineProperty(_MinMaxIngedients, Ingredients.Cheese, {
      min: 0,
      max: 5
    }), _defineProperty(_MinMaxIngedients, Ingredients.Paneer, {
      min: 0,
      max: 3
    }), _defineProperty(_MinMaxIngedients, Ingredients.Mashroom, {
      min: 0,
      max: 2
    }), _defineProperty(_MinMaxIngedients, Ingredients.Chilli, {
      min: 0,
      max: 4
    }), _MinMaxIngedients);
    var BurgerTitle = (_BurgerTitle = {}, _defineProperty(_BurgerTitle, BurgerType.VanillaBurger, 'Vanilla Burger'), _defineProperty(_BurgerTitle, BurgerType.CheeseBurger, 'Cheese Burger'), _defineProperty(_BurgerTitle, BurgerType.CutletBurger, 'Cutlet Burger'), _defineProperty(_BurgerTitle, BurgerType.SaladBurger, 'Salad Burger'), _defineProperty(_BurgerTitle, BurgerType.PaneerBurger, 'Paneer Burger'), _defineProperty(_BurgerTitle, BurgerType.ChlliBurger, 'Chilli Burger'), _defineProperty(_BurgerTitle, BurgerType.MashroomBurger, 'Mashroom Burger'), _BurgerTitle);
    /***/
  },

  /***/
  "./src/app/shared/data/orders.data.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/data/orders.data.ts ***!
    \********************************************/

  /*! exports provided: ORDERS */

  /***/
  function srcAppSharedDataOrdersDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORDERS", function () {
      return ORDERS;
    });

    var ORDERS = [{
      "burger": {
        "name": "",
        "type": "cheese_burger",
        "ingredients": {
          "bun": 1,
          "cheese": 1
        },
        "title": "Cheese Burger",
        "thumbnail": "assets/images/burger-placeholder.xs.png",
        "description": ""
      },
      "customer": {
        "name": "Prabhu",
        "phone": "9987868584"
      },
      "discount": 2,
      "additionalCharges": {
        "tax": 3,
        "serviceCharges": 1
      },
      "time": "2020-03-29T05:54:13.700Z"
    }, {
      "burger": {
        "name": "",
        "type": "cutlet_burger",
        "ingredients": {
          "bun": 1,
          "cutlet": 1,
          "cheese": 4,
          "mashroom": 1,
          "paneer": 2
        },
        "title": "Cutlet Burger",
        "thumbnail": "assets/images/burger-placeholder.xs.png",
        "description": ""
      },
      "customer": {
        "name": "Manohar",
        "phone": "9742080968"
      },
      "discount": 2,
      "additionalCharges": {
        "tax": 3,
        "serviceCharges": 1
      },
      "time": "2020-03-29T05:42:32.024Z"
    }, {
      "burger": {
        "name": "",
        "type": "cheese_burger",
        "ingredients": {
          "bun": 1,
          "cheese": 1
        },
        "title": "Cheese Burger",
        "thumbnail": "assets/images/burger-placeholder.xs.png",
        "description": ""
      },
      "customer": {
        "name": "Prabhu",
        "phone": "9987868584"
      },
      "discount": 2,
      "additionalCharges": {
        "tax": 3,
        "serviceCharges": 1
      },
      "time": "2020-03-29T05:35:25.700Z"
    }, {
      "burger": {
        "name": "",
        "type": "salad_burger",
        "ingredients": {
          "bun": 1,
          "salad": 1
        },
        "title": "Salad Burger",
        "thumbnail": "assets/images/burger-placeholder.xs.png",
        "description": ""
      },
      "customer": {
        "name": "Soukarya",
        "phone": "9999887766"
      },
      "discount": 2,
      "additionalCharges": {
        "tax": 3,
        "serviceCharges": 1
      },
      "time": "2020-03-29T05:30:05.042Z"
    }, {
      "burger": {
        "name": "",
        "type": "chilli_burger",
        "ingredients": {
          "bun": 1,
          "chilli": 1,
          "cheese": 3,
          "paneer": 3,
          "cutlet": 2,
          "mashroom": 1
        },
        "title": "Chilli Burger",
        "thumbnail": "assets/images/burger-placeholder.xs.png",
        "description": ""
      },
      "customer": {
        "name": "Pallav",
        "phone": "9976655443"
      },
      "discount": 2,
      "additionalCharges": {
        "tax": 3,
        "serviceCharges": 1
      },
      "time": "2020-03-29T05:25:38.194Z"
    }];
    /***/
  },

  /***/
  "./src/app/shared/pipes/burger-price.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/pipes/burger-price.pipe.ts ***!
    \***************************************************/

  /*! exports provided: BurgerPricePipe */

  /***/
  function srcAppSharedPipesBurgerPricePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BurgerPricePipe", function () {
      return BurgerPricePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_price_servie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/price.servie */
    "./src/app/shared/services/price.servie.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var BurgerPricePipe =
    /*#__PURE__*/
    function () {
      function BurgerPricePipe(priceService, currencyPipe) {
        _classCallCheck(this, BurgerPricePipe);

        this.priceService = priceService;
        this.currencyPipe = currencyPipe;
      }

      _createClass(BurgerPricePipe, [{
        key: "transform",
        value: function transform(burger) {
          var price = this.priceService.getBurgerPrice(burger);
          return this.currencyPipe.transform(price, 'INR');
        }
      }]);

      return BurgerPricePipe;
    }();

    BurgerPricePipe.ɵfac = function BurgerPricePipe_Factory(t) {
      return new (t || BurgerPricePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]));
    };

    BurgerPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "burgerPrice",
      type: BurgerPricePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgerPricePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'burgerPrice'
        }]
      }], function () {
        return [{
          type: _services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/filter.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/pipes/filter.pipe.ts ***!
    \*********************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppSharedPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe =
    /*#__PURE__*/
    function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(list, searchStr) {
          var searchProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

          if (!searchStr || !list || list.length === 0) {
            return list;
          }

          searchStr = searchStr.toLowerCase();

          if (searchProps.length) {
            return list.filter(function (item) {
              return searchProps.some(function (prop) {
                var val = prop.split('.').reduce(function (dataObj, subPro) {
                  return dataObj[subPro];
                }, item);
                return val.toString().toLowerCase().includes(searchStr);
              });
            });
          } else {
            return list.filter(function (item) {
              return Object.keys(item).some(function (prop) {
                return item[prop].toString().toLowerCase().includes(searchStr);
              });
            });
          }
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/ingredients.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/pipes/ingredients.pipe.ts ***!
    \**************************************************/

  /*! exports provided: IngredientsPipe */

  /***/
  function srcAppSharedPipesIngredientsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientsPipe", function () {
      return IngredientsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_burger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../config/burger.config */
    "./src/app/shared/config/burger.config.ts");

    var IngredientsPipe =
    /*#__PURE__*/
    function () {
      function IngredientsPipe() {
        _classCallCheck(this, IngredientsPipe);
      }

      _createClass(IngredientsPipe, [{
        key: "transform",
        value: function transform(burger) {
          return Object.entries(burger.ingredients).filter(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                ingredName = _ref2[0],
                quantity = _ref2[1];

            return quantity;
          }).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                ingredName = _ref4[0],
                quantity = _ref4[1];

            return "".concat(_config_burger_config__WEBPACK_IMPORTED_MODULE_1__["IngredientsTitle"][ingredName], ":").concat(quantity);
          }).join(', ');
        }
      }]);

      return IngredientsPipe;
    }();

    IngredientsPipe.ɵfac = function IngredientsPipe_Factory(t) {
      return new (t || IngredientsPipe)();
    };

    IngredientsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ingredients",
      type: IngredientsPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'ingredients'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/order-price.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/pipes/order-price.pipe.ts ***!
    \**************************************************/

  /*! exports provided: OrderPricePipe */

  /***/
  function srcAppSharedPipesOrderPricePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPricePipe", function () {
      return OrderPricePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_price_servie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/price.servie */
    "./src/app/shared/services/price.servie.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var OrderPricePipe =
    /*#__PURE__*/
    function () {
      function OrderPricePipe(priceService, currencyPipe) {
        _classCallCheck(this, OrderPricePipe);

        this.priceService = priceService;
        this.currencyPipe = currencyPipe;
      }

      _createClass(OrderPricePipe, [{
        key: "transform",
        value: function transform(order) {
          var price = this.priceService.getOrderPrice(order);
          return this.currencyPipe.transform(price, 'INR');
        }
      }]);

      return OrderPricePipe;
    }();

    OrderPricePipe.ɵfac = function OrderPricePipe_Factory(t) {
      return new (t || OrderPricePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]));
    };

    OrderPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "orderPrice",
      type: OrderPricePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPricePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'orderPrice'
        }]
      }], function () {
        return [{
          type: _services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/pipes.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/pipes/pipes.module.ts ***!
    \**********************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppSharedPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./burger-price.pipe */
    "./src/app/shared/pipes/burger-price.pipe.ts");
    /* harmony import */


    var _order_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-price.pipe */
    "./src/app/shared/pipes/order-price.pipe.ts");
    /* harmony import */


    var _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ingredients.pipe */
    "./src/app/shared/pipes/ingredients.pipe.ts");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/shared/pipes/filter.pipe.ts");

    var pipes = [_order_price_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPricePipe"], _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__["BurgerPricePipe"], _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__["IngredientsPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]];

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_order_price_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPricePipe"], _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__["BurgerPricePipe"], _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__["IngredientsPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_order_price_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPricePipe"], _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__["BurgerPricePipe"], _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__["IngredientsPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [].concat(pipes),
          exports: [].concat(pipes),
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/orders.servie.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/orders.servie.ts ***!
    \**************************************************/

  /*! exports provided: OrderssService */

  /***/
  function srcAppSharedServicesOrdersServieTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderssService", function () {
      return OrderssService;
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


    var _data_orders_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/orders.data */
    "./src/app/shared/data/orders.data.ts");

    var OrderssService =
    /*#__PURE__*/
    function () {
      function OrderssService() {
        _classCallCheck(this, OrderssService);
      }

      _createClass(OrderssService, [{
        key: "query",
        // query list of burgers
        value: function query() {
          // API call
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_data_orders_data__WEBPACK_IMPORTED_MODULE_2__["ORDERS"]);
        } // get an order by id

      }, {
        key: "get",
        value: function get(burgerId) {} // API call
        // save order details

      }, {
        key: "post",
        value: function post(payload) {
          // API call
          var order = Object.assign(Object.assign({}, payload), {
            time: new Date()
          });

          _data_orders_data__WEBPACK_IMPORTED_MODULE_2__["ORDERS"].push(order);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(order);
        } // delete order by id

      }, {
        key: "delete",
        value: function _delete(id) {// API call
        }
      }]);

      return OrderssService;
    }();

    OrderssService.ɵfac = function OrderssService_Factory(t) {
      return new (t || OrderssService)();
    };

    OrderssService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderssService,
      factory: OrderssService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderssService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/price.servie.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/price.servie.ts ***!
    \*************************************************/

  /*! exports provided: PriceService */

  /***/
  function srcAppSharedServicesPriceServieTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceService", function () {
      return PriceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_burger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../config/burger.config */
    "./src/app/shared/config/burger.config.ts");

    var PriceService =
    /*#__PURE__*/
    function () {
      function PriceService() {
        _classCallCheck(this, PriceService);
      }

      _createClass(PriceService, [{
        key: "getBurgerPrice",
        value: function getBurgerPrice(burger) {
          return Object.entries(burger.ingredients).reduce(function (totalPrice, _ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                ingredName = _ref6[0],
                quantity = _ref6[1];

            return totalPrice + _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["IngredientsPrice"][ingredName] * quantity;
          }, 0);
        }
      }, {
        key: "getOrderPrice",
        value: function getOrderPrice(_ref7) {
          var burger = _ref7.burger,
              _ref7$additionalCharg = _ref7.additionalCharges,
              tax = _ref7$additionalCharg.tax,
              serviceCharges = _ref7$additionalCharg.serviceCharges,
              discount = _ref7.discount;
          return this.getBurgerPrice(burger) + (tax + serviceCharges) - discount;
        }
      }]);

      return PriceService;
    }();

    PriceService.ɵfac = function PriceService_Factory(t) {
      return new (t || PriceService)();
    };

    PriceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PriceService,
      factory: PriceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~burgers-burgers-module~orders-orders-module-es5.js.map