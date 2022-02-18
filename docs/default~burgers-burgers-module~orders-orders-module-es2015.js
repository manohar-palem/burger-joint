(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~burgers-burgers-module~orders-orders-module"],{

/***/ "./src/app/shared/config/burger.config.ts":
/*!************************************************!*\
  !*** ./src/app/shared/config/burger.config.ts ***!
  \************************************************/
/*! exports provided: Ingredients, BurgerType, IngredientsPrice, IngredientsTitle, MinMaxIngedients, BurgerTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredients", function() { return Ingredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerType", function() { return BurgerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsPrice", function() { return IngredientsPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsTitle", function() { return IngredientsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinMaxIngedients", function() { return MinMaxIngedients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerTitle", function() { return BurgerTitle; });
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
const IngredientsPrice = {
    [Ingredients.Bun]: 5,
    [Ingredients.Salad]: 5,
    [Ingredients.Cutlet]: 2,
    [Ingredients.Cheese]: 1,
    [Ingredients.Chilli]: 1,
    [Ingredients.Paneer]: 3,
    [Ingredients.Mashroom]: 4,
};
const IngredientsTitle = {
    [Ingredients.Bun]: 'Bun',
    [Ingredients.Salad]: 'Salad',
    [Ingredients.Cutlet]: 'Cutlet',
    [Ingredients.Cheese]: 'Cheese',
    [Ingredients.Chilli]: 'Jalapeno',
    [Ingredients.Paneer]: 'Paneer',
    [Ingredients.Mashroom]: 'Mashroom',
};
const MinMaxIngedients = {
    [Ingredients.Bun]: { min: 1, max: 2 },
    [Ingredients.Salad]: { min: 0, max: 1 },
    [Ingredients.Cutlet]: { min: 0, max: 3 },
    [Ingredients.Cheese]: { min: 0, max: 5 },
    [Ingredients.Paneer]: { min: 0, max: 3 },
    [Ingredients.Mashroom]: { min: 0, max: 2 },
    [Ingredients.Chilli]: { min: 0, max: 4 }
};
const BurgerTitle = {
    [BurgerType.VanillaBurger]: 'Vanilla Burger',
    [BurgerType.CheeseBurger]: 'Cheese Burger',
    [BurgerType.CutletBurger]: 'Cutlet Burger',
    [BurgerType.SaladBurger]: 'Salad Burger',
    [BurgerType.PaneerBurger]: 'Paneer Burger',
    [BurgerType.ChlliBurger]: 'Chilli Burger',
    [BurgerType.MashroomBurger]: 'Mashroom Burger',
};


/***/ }),

/***/ "./src/app/shared/data/orders.data.ts":
/*!********************************************!*\
  !*** ./src/app/shared/data/orders.data.ts ***!
  \********************************************/
/*! exports provided: ORDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDERS", function() { return ORDERS; });
const ORDERS = [
    { "burger": { "name": "", "type": "cheese_burger", "ingredients": { "bun": 1, "cheese": 1 }, "title": "Cheese Burger", "thumbnail": "assets/images/burger-placeholder.xs.png", "description": "" }, "customer": { "name": "Prabhu", "phone": "9987868584" }, "discount": 2, "additionalCharges": { "tax": 3, "serviceCharges": 1 }, "time": "2020-03-29T05:54:13.700Z" },
    { "burger": { "name": "", "type": "cutlet_burger", "ingredients": { "bun": 1, "cutlet": 1, "cheese": 4, "mashroom": 1, "paneer": 2 }, "title": "Cutlet Burger", "thumbnail": "assets/images/burger-placeholder.xs.png", "description": "" }, "customer": { "name": "Manohar", "phone": "9742080968" }, "discount": 2, "additionalCharges": { "tax": 3, "serviceCharges": 1 }, "time": "2020-03-29T05:42:32.024Z" },
    { "burger": { "name": "", "type": "cheese_burger", "ingredients": { "bun": 1, "cheese": 1 }, "title": "Cheese Burger", "thumbnail": "assets/images/burger-placeholder.xs.png", "description": "" }, "customer": { "name": "Prabhu", "phone": "9987868584" }, "discount": 2, "additionalCharges": { "tax": 3, "serviceCharges": 1 }, "time": "2020-03-29T05:35:25.700Z" },
    { "burger": { "name": "", "type": "salad_burger", "ingredients": { "bun": 1, "salad": 1 }, "title": "Salad Burger", "thumbnail": "assets/images/burger-placeholder.xs.png", "description": "" }, "customer": { "name": "Soukarya", "phone": "9999887766" }, "discount": 2, "additionalCharges": { "tax": 3, "serviceCharges": 1 }, "time": "2020-03-29T05:30:05.042Z" },
    { "burger": { "name": "", "type": "chilli_burger", "ingredients": { "bun": 1, "chilli": 1, "cheese": 3, "paneer": 3, "cutlet": 2, "mashroom": 1 }, "title": "Chilli Burger", "thumbnail": "assets/images/burger-placeholder.xs.png", "description": "" }, "customer": { "name": "Pallav", "phone": "9976655443" }, "discount": 2, "additionalCharges": { "tax": 3, "serviceCharges": 1 }, "time": "2020-03-29T05:25:38.194Z" }
];


/***/ }),

/***/ "./src/app/shared/pipes/burger-price.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/burger-price.pipe.ts ***!
  \***************************************************/
/*! exports provided: BurgerPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerPricePipe", function() { return BurgerPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_price_servie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/price.servie */ "./src/app/shared/services/price.servie.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class BurgerPricePipe {
    constructor(priceService, currencyPipe) {
        this.priceService = priceService;
        this.currencyPipe = currencyPipe;
    }
    transform(burger) {
        const price = this.priceService.getBurgerPrice(burger);
        return this.currencyPipe.transform(price, 'INR');
    }
}
BurgerPricePipe.ɵfac = function BurgerPricePipe_Factory(t) { return new (t || BurgerPricePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"])); };
BurgerPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "burgerPrice", type: BurgerPricePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgerPricePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'burgerPrice'
            }]
    }], function () { return [{ type: _services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(list, searchStr, searchProps = []) {
        if (!searchStr || !list || list.length === 0) {
            return list;
        }
        searchStr = searchStr.toLowerCase();
        if (searchProps.length) {
            return list.filter((item) => {
                return searchProps.some(prop => {
                    const val = prop.split('.').reduce((dataObj, subPro) => {
                        return dataObj[subPro];
                    }, item);
                    return val.toString().toLowerCase().includes(searchStr);
                });
            });
        }
        else {
            return list.filter((item) => {
                return Object.keys(item)
                    .some(prop => item[prop].toString().toLowerCase().includes(searchStr));
            });
        }
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/ingredients.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/ingredients.pipe.ts ***!
  \**************************************************/
/*! exports provided: IngredientsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsPipe", function() { return IngredientsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_burger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/burger.config */ "./src/app/shared/config/burger.config.ts");



class IngredientsPipe {
    constructor() {
    }
    transform(burger) {
        return Object.entries(burger.ingredients)
            .filter(([ingredName, quantity]) => quantity)
            .map(([ingredName, quantity]) => {
            return `${_config_burger_config__WEBPACK_IMPORTED_MODULE_1__["IngredientsTitle"][ingredName]}:${quantity}`;
        }).join(', ');
    }
}
IngredientsPipe.ɵfac = function IngredientsPipe_Factory(t) { return new (t || IngredientsPipe)(); };
IngredientsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ingredients", type: IngredientsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'ingredients'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/order-price.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/order-price.pipe.ts ***!
  \**************************************************/
/*! exports provided: OrderPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPricePipe", function() { return OrderPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_price_servie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/price.servie */ "./src/app/shared/services/price.servie.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class OrderPricePipe {
    constructor(priceService, currencyPipe) {
        this.priceService = priceService;
        this.currencyPipe = currencyPipe;
    }
    transform(order) {
        const price = this.priceService.getOrderPrice(order);
        return this.currencyPipe.transform(price, 'INR');
    }
}
OrderPricePipe.ɵfac = function OrderPricePipe_Factory(t) { return new (t || OrderPricePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"])); };
OrderPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderPrice", type: OrderPricePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPricePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'orderPrice'
            }]
    }], function () { return [{ type: _services_price_servie__WEBPACK_IMPORTED_MODULE_1__["PriceService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/pipes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger-price.pipe */ "./src/app/shared/pipes/burger-price.pipe.ts");
/* harmony import */ var _order_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-price.pipe */ "./src/app/shared/pipes/order-price.pipe.ts");
/* harmony import */ var _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingredients.pipe */ "./src/app/shared/pipes/ingredients.pipe.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");







const pipes = [
    _order_price_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPricePipe"],
    _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__["BurgerPricePipe"],
    _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__["IngredientsPipe"],
    _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]
];
class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_order_price_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPricePipe"],
        _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__["BurgerPricePipe"],
        _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__["IngredientsPipe"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_order_price_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPricePipe"],
        _burger_price_pipe__WEBPACK_IMPORTED_MODULE_2__["BurgerPricePipe"],
        _ingredients_pipe__WEBPACK_IMPORTED_MODULE_4__["IngredientsPipe"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    ...pipes
                ],
                exports: [
                    ...pipes
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/orders.servie.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/orders.servie.ts ***!
  \**************************************************/
/*! exports provided: OrderssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderssService", function() { return OrderssService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _data_orders_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/orders.data */ "./src/app/shared/data/orders.data.ts");




class OrderssService {
    // query list of burgers
    query() {
        // API call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_data_orders_data__WEBPACK_IMPORTED_MODULE_2__["ORDERS"]);
    }
    // get an order by id
    get(burgerId) {
        // API call
    }
    // save order details
    post(payload) {
        // API call
        const order = Object.assign(Object.assign({}, payload), { time: new Date() });
        _data_orders_data__WEBPACK_IMPORTED_MODULE_2__["ORDERS"].push(order);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(order);
    }
    // delete order by id
    delete(id) {
        // API call
    }
}
OrderssService.ɵfac = function OrderssService_Factory(t) { return new (t || OrderssService)(); };
OrderssService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderssService, factory: OrderssService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderssService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/price.servie.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/price.servie.ts ***!
  \*************************************************/
/*! exports provided: PriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceService", function() { return PriceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_burger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/burger.config */ "./src/app/shared/config/burger.config.ts");



class PriceService {
    getBurgerPrice(burger) {
        return Object.entries(burger.ingredients).reduce((totalPrice, [ingredName, quantity]) => {
            return totalPrice + _config_burger_config__WEBPACK_IMPORTED_MODULE_1__["IngredientsPrice"][ingredName] * quantity;
        }, 0);
    }
    getOrderPrice({ burger, additionalCharges: { tax, serviceCharges }, discount }) {
        return this.getBurgerPrice(burger) + (tax + serviceCharges) - discount;
    }
}
PriceService.ɵfac = function PriceService_Factory(t) { return new (t || PriceService)(); };
PriceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PriceService, factory: PriceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~burgers-burgers-module~orders-orders-module-es2015.js.map