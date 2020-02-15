(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"editor\">\n        <app-mandala-editor [fullScreen]=\"true\"></app-mandala-editor>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"\n     [style.width]=\"width\"\n     [style.height]=\"height\">\n    <canvas id=\"canvas-fill\" #fillCanvas></canvas>\n    <canvas id=\"canvas-draw\" #drawCanvas></canvas>\n    <canvas id=\"canvas-zones\" appMandalaDrawZones #zonesCanvas></canvas>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"colorpicker\">\n    <div #picker id=\"color-picker-container\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"undo-controls\">\n        <button \n            matTooltip=\"Undo\"\n            [disabled]=\"!hasUndo\"\n            mat-mini-fab\n            (click)=\"undo()\">\n            <mat-icon>undo</mat-icon>\n        </button>\n        <button \n            matTooltip=\"Redo\"\n            [disabled]=\"!hasRedo\"\n            mat-mini-fab\n            (click)=\"redo()\">\n            <mat-icon>redo</mat-icon>\n        </button>\n    </div>\n    <div class=\"tools\">\n        <div class=\"tools__item tools__item--zones\">\n            <button \n                matTooltip=\"Decrease Zones\"\n                mat-icon-button\n                (click)=\"decreaseZones()\">\n                <mat-icon>remove</mat-icon>\n            </button>\n            <span>{{zonesCount}}</span>\n            <button \n                matTooltip=\"Increase Zones\"\n                mat-icon-button\n                (click)=\"increaseZones()\">\n                <mat-icon>add</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Draw\"\n                mat-fab \n                [class.active]=\"isCurrentTool(TOOLS.DRAW_FREE)\"\n                (click)=\"enableTool(TOOLS.DRAW_FREE)\">\n                <mat-icon>gesture</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Line\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.DRAW_LINE)\"\n                [class.active]=\"isCurrentTool(TOOLS.DRAW_LINE)\">\n                <mat-icon>show_chart</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Background\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.FILL_BACKGROUND)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BACKGROUND)\">\n                <mat-icon>opacity</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Fill Bucket\"\n                mat-fab \n                disabled\n                (click)=\"enableTool(TOOLS.FILL_BUCKET)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BUCKET)\">\n                <mat-icon>filter_b_and_w</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Pipette\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.PIPETTE)\"\n                [class.active]=\"isCurrentTool(TOOLS.PIPETTE)\">\n                <mat-icon>colorize</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Clear All\"\n                mat-fab \n                (click)=\"clear()\">\n                <mat-icon> layers_clear</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button\n                matTooltip=\"to SVG\"\n                mat-fab \n                (click)=\"toSVG()\">\n                <mat-icon> cloud_download</mat-icon>\n            </button>\n        </div>\n    </div>\n    <div class=\"sub-tools\">\n        <div class=\"sub-tools__item sub-tools__item--color\">\n            <div class=\"color-preview\"\n                 matTooltip=\"Change Color\"\n                 [style.background-color]=\"color$ | async\"\n                 (click)=\"toggleColorpicker()\"></div>\n        </div>\n        <div \n            *ngIf=\"isDrawTool\"\n            class=\"sub-tools__item\">\n            <mat-checkbox \n                matTooltip=\"Mirror Draw\"\n                [(ngModel)]=\"isMirrorEnabled\">mirror</mat-checkbox>\n        </div>\n        <div \n            *ngIf=\"isDrawTool\"\n            class=\"sub-tools__item sub-tools__item--stroke-width\">\n            <mat-slider\n                [min]=\"1\"\n                [max]=\"30\"\n                [step]=\"1\"\n                [thumbLabel]=\"true\"\n                [vertical]=\"true\"\n                [(ngModel)]=\"strokeWidth\">\n            </mat-slider>\n        </div>\n    </div>\n</div>\n<div\n    class=\"colorpicker\"\n    [class.visible]=\"isVisibleColorpicker\">\n    <button \n        (click)=\"toggleColorpicker()\"\n        class=\"colorpicker__close\"\n        mat-fab \n        color=\"accent\">\n        <mat-icon>clear</mat-icon>\n    </button>\n    <app-mandala-editor-colorpicker \n        [color]=\"color$ | async\"\n        (changeColor)=\"onChangeColor($event)\">\n    </app-mandala-editor-colorpicker>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-mandala-editor-canvas [size]=\"canvasSize\"></app-mandala-editor-canvas>\n<div \n    class=\"tools-container\"\n    [class.visible]=\"isVisibleTools\">\n    <app-mandala-editor-tools class=\"tools\"></app-mandala-editor-tools>\n    <div \n        class=\"toggle-tools\"\n        (click)=\"toggleTools()\">\n        <mat-icon>{{isVisibleTools ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}}</mat-icon>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: relative; }\n  .container .editor {\n    position: fixed;\n    top: 0;\n    left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5lZGl0b3Ige1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'mandala-app';
        this.size = {
            width: 800,
            height: 800
        };
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules */ "./src/app/modules/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _modules__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
            _modules__WEBPACK_IMPORTED_MODULE_6__["MandalaModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/common/common.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/common/common.module.ts ***!
  \*************************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/layout */ "./src/app/modules/common/store/reducers/layout.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/modules/common/services/index.ts");





let AppCommonModule = class AppCommonModule {
};
AppCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('common', {
                layout: _store_reducers_layout__WEBPACK_IMPORTED_MODULE_3__["reducer"],
            })
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
        ]
    })
], AppCommonModule);



/***/ }),

/***/ "./src/app/modules/common/services/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/common/services/index.ts ***!
  \**************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.service */ "./src/app/modules/common/services/layout.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return _layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]; });





/***/ }),

/***/ "./src/app/modules/common/services/layout.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/common/services/layout.service.ts ***!
  \***********************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/layout.actions */ "./src/app/modules/common/store/actions/layout.actions.ts");
/* harmony import */ var _store_selectors_layout_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors/layout.selectors */ "./src/app/modules/common/store/selectors/layout.selectors.ts");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.service */ "./src/app/modules/common/services/store.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");






let LayoutService = class LayoutService extends _store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] {
    constructor(store) {
        super(store);
    }
    // SIDEBAR
    toggleSidebar() {
        this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["toggleSidebar"]());
    }
    openSidebar() {
        this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["openSidebar"]());
    }
    closeSidebar() {
        this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["closeSidebar"]());
    }
    isOpenSidebar() {
        return this.select(_store_selectors_layout_selectors__WEBPACK_IMPORTED_MODULE_3__["isOpenSidebar"]);
    }
    // LOADER
    enableLoader() {
        this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["enableLoader"]());
    }
    disableLoader() {
        this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["disableLoader"]());
    }
    isEnabledLoader() {
        return this.select(_store_selectors_layout_selectors__WEBPACK_IMPORTED_MODULE_3__["isEnabledLoader"]);
    }
};
LayoutService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LayoutService);



/***/ }),

/***/ "./src/app/modules/common/services/store.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/common/services/store.service.ts ***!
  \**********************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


class StoreService {
    constructor(store) {
        this.store = store;
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    select(selector) {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(selector));
    }
}


/***/ }),

/***/ "./src/app/modules/common/store/actions/layout.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/common/store/actions/layout.actions.ts ***!
  \****************************************************************/
/*! exports provided: toggleSidebar, openSidebar, closeSidebar, enableLoader, disableLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSidebar", function() { return toggleSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSidebar", function() { return openSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSidebar", function() { return closeSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableLoader", function() { return enableLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLoader", function() { return disableLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const toggleSidebar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Toggle Sidebar');
const openSidebar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Open Sidebar');
const closeSidebar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Close Sidebar');
const enableLoader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Enable Loader');
const disableLoader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Disable Loader');


/***/ }),

/***/ "./src/app/modules/common/store/reducers/layout.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/common/store/reducers/layout.ts ***!
  \*********************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/layout.actions */ "./src/app/modules/common/store/actions/layout.actions.ts");



const initState = {
    isOpenSidebar: true,
    isEnabledLoader: false
};
const updateProp = (prop, status) => (state) => (Object.assign({}, state, { [prop]: status }));
const contentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["toggleSidebar"], (state) => (Object.assign({}, state, { isOpenSidebar: !state.isOpenSidebar }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["openSidebar"], updateProp('isOpenSidebar', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["closeSidebar"], updateProp('isOpenSidebar', false)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["enableLoader"], updateProp('isEnabledLoader', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["disableLoader"], updateProp('isEnabledLoader', false)));
function reducer(state, action) {
    return contentReducer(state, action);
}


/***/ }),

/***/ "./src/app/modules/common/store/selectors/layout.selectors.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/common/store/selectors/layout.selectors.ts ***!
  \********************************************************************/
/*! exports provided: isOpenSidebar, isEnabledLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpenSidebar", function() { return isOpenSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnabledLoader", function() { return isEnabledLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectLayout = (state) => state.layout;
const getSelector = (prop) => {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectLayout, (state) => state[prop]);
};
const isOpenSidebar = getSelector('isOpenSidebar');
const isEnabledLoader = getSelector('isEnabledLoader');


/***/ }),

/***/ "./src/app/modules/index.ts":
/*!**********************************!*\
  !*** ./src/app/modules/index.ts ***!
  \**********************************/
/*! exports provided: MandalaModule, AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mandala_mandala_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mandala/mandala.module */ "./src/app/modules/mandala/mandala.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MandalaModule", function() { return _mandala_mandala_module__WEBPACK_IMPORTED_MODULE_1__["MandalaModule"]; });

/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/common.module */ "./src/app/modules/common/common.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return _common_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]; });






/***/ }),

/***/ "./src/app/modules/mandala/components/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/mandala/components/index.ts ***!
  \*****************************************************/
/*! exports provided: MandalaEditorComponent, MandalaEditorCanvasComponent, MandalaEditorColorpickerComponent, MandalaEditorToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mandala_editor_mandala_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mandala-editor/mandala-editor.component */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorComponent", function() { return _mandala_editor_mandala_editor_component__WEBPACK_IMPORTED_MODULE_1__["MandalaEditorComponent"]; });

/* harmony import */ var _mandala_editor_mandala_editor_canvas_mandala_editor_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorCanvasComponent", function() { return _mandala_editor_mandala_editor_canvas_mandala_editor_canvas_component__WEBPACK_IMPORTED_MODULE_2__["MandalaEditorCanvasComponent"]; });

/* harmony import */ var _mandala_editor_mandala_editor_colorpicker_mandala_editor_colorpicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorColorpickerComponent", function() { return _mandala_editor_mandala_editor_colorpicker_mandala_editor_colorpicker_component__WEBPACK_IMPORTED_MODULE_3__["MandalaEditorColorpickerComponent"]; });

/* harmony import */ var _mandala_editor_mandala_editor_tools_mandala_editor_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mandala-editor/mandala-editor-tools/mandala-editor-tools.component */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorToolsComponent", function() { return _mandala_editor_mandala_editor_tools_mandala_editor_tools_component__WEBPACK_IMPORTED_MODULE_4__["MandalaEditorToolsComponent"]; });








/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.container {\n  position: relative; }\n\n#canvas-zones,\n#canvas-fill {\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1jYW52YXMvbWFuZGFsYS1lZGl0b3ItY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGtCQUFrQixFQUFBOztBQUd0Qjs7RUFFSSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuZGFsYS9jb21wb25lbnRzL21hbmRhbGEtZWRpdG9yL21hbmRhbGEtZWRpdG9yLWNhbnZhcy9tYW5kYWxhLWVkaXRvci1jYW52YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG59XG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjYW52YXMtem9uZXMsXG4jY2FudmFzLWZpbGwge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MandalaEditorCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorCanvasComponent", function() { return MandalaEditorCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tool.service */ "./src/app/modules/mandala/services/tool.service.ts");







let MandalaEditorCanvasComponent = class MandalaEditorCanvasComponent {
    constructor(editorService, canvasService, toolService) {
        this.editorService = editorService;
        this.canvasService = canvasService;
        this.toolService = toolService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    get width() {
        return `${this.size.width}px`;
    }
    get height() {
        return `${this.size.height}px`;
    }
    ngOnInit() {
        this.canvasService.setDrawElement(this.drawCanvas.nativeElement);
        this.canvasService.setFillElement(this.fillCanvas.nativeElement);
        this.canvasService.setZonesElement(this.zonesCanvas.nativeElement);
        this.canvasService.updateCanvasesSize(this.size);
        this.initDraw();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    initDraw() {
        const canvas = document.getElementById('canvas-draw');
        paper__WEBPACK_IMPORTED_MODULE_2__["setup"](canvas);
        this.addBackgroundRect('white');
        this.editorService.getTool()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(tool => this.toolService.createTool(tool, this.backgroundRect))).subscribe((tool) => {
            if (this.tool) {
                this.tool.disable();
            }
            this.tool = tool;
            tool.enable();
        });
    }
    addBackgroundRect(color) {
        const startRect = this.createPoint(0, 0);
        const rectSize = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](this.size.width, this.size.height);
        const baseLayer = new paper__WEBPACK_IMPORTED_MODULE_2__["Layer"]();
        baseLayer.activate();
        this.backgroundRect = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Rectangle(startRect, rectSize);
        this.backgroundRect.fillColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](color);
        const drawLayer = new paper__WEBPACK_IMPORTED_MODULE_2__["Layer"]();
        drawLayer.activate();
    }
    createPoint(x, y) {
        return new paper__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y);
    }
};
MandalaEditorCanvasComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EditorService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["CanvasService"] },
    { type: _services_tool_service__WEBPACK_IMPORTED_MODULE_6__["ToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MandalaEditorCanvasComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawCanvas', { static: true })
], MandalaEditorCanvasComponent.prototype, "drawCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fillCanvas', { static: true })
], MandalaEditorCanvasComponent.prototype, "fillCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('zonesCanvas', { static: true })
], MandalaEditorCanvasComponent.prototype, "zonesCanvas", void 0);
MandalaEditorCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mandala-editor-canvas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mandala-editor-canvas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mandala-editor-canvas.component.scss */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss")).default]
    })
], MandalaEditorCanvasComponent);



/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  width: 500px;\n  height: 500px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.container {\n  position: relative;\n  width: 500px;\n  height: 500px; }\n\n#canvas-zones,\n#canvas-fill {\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBRVg7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7O0VBRUksb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4jY2FudmFzLXpvbmVzLFxuI2NhbnZhcy1maWxsIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: MandalaEditorColorpickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorColorpickerComponent", function() { return MandalaEditorColorpickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jaames_iro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jaames/iro */ "./node_modules/@jaames/iro/dist/iro.es.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let MandalaEditorColorpickerComponent = class MandalaEditorColorpickerComponent {
    constructor(editorService) {
        this.editorService = editorService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.colorPicker = new _jaames_iro__WEBPACK_IMPORTED_MODULE_2__["default"].ColorPicker(this.picker.nativeElement, {
            width: 300,
            handleRadius: 12,
            sliderHeight: 30,
            color: this.color
        });
        this.colorPicker.on('color:change', (color) => this.changeColor.emit(color.rgbString));
        this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((color) => {
            if (this.colorPicker.color.rgbString !== color) {
                this.colorPicker.color.rgbString = color;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
};
MandalaEditorColorpickerComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EditorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', { static: true })
], MandalaEditorColorpickerComponent.prototype, "picker", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MandalaEditorColorpickerComponent.prototype, "changeColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MandalaEditorColorpickerComponent.prototype, "color", void 0);
MandalaEditorColorpickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mandala-editor-colorpicker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mandala-editor-colorpicker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mandala-editor-colorpicker.component.scss */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.scss")).default]
    })
], MandalaEditorColorpickerComponent);



/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.active {\n  background-color: #00bcd4;\n  color: white; }\n\nbutton:not(.active) {\n  background-color: white;\n  color: black; }\n\n.container {\n  display: -webkit-box;\n  display: flex; }\n\n.container .tools .tools__item {\n    margin-top: -3px; }\n\n.container .tools .tools__item--zones {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center;\n      border: 1px #cbcbcb dashed;\n      margin-bottom: 20px;\n      padding: 3px; }\n\n.container .tools .tools__item--zones button {\n        width: 15px;\n        height: 15px;\n        line-height: 15px; }\n\n.container .tools .tools__item--zones .mat-icon {\n        width: 15px;\n        height: 16px;\n        line-height: 15px;\n        font-size: 15px; }\n\n.container .sub-tools {\n    margin-left: 15px;\n    padding-left: 15px;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n\n.container .sub-tools::after {\n      content: ' ';\n      position: absolute;\n      width: 1px;\n      top: 40px;\n      bottom: 40px;\n      left: 0;\n      background: #e3dede; }\n\n.container .sub-tools__item {\n      margin-bottom: 15px; }\n\n.container .sub-tools__item--color .color-preview {\n        width: 70px;\n        height: 70px;\n        box-shadow: 0 0 5px grey;\n        border-radius: 3px;\n        cursor: pointer; }\n\n.container .sub-tools__item--stroke-width {\n        -webkit-box-flex: 1;\n                flex-grow: 1; }\n\n.container .sub-tools__item--stroke-width .mat-slider {\n          height: 100%; }\n\n.colorpicker {\n  display: block;\n  background: white;\n  padding: 20px;\n  box-shadow: 0 0 10px grey;\n  position: absolute;\n  top: 0px;\n  left: -350px;\n  bottom: 0px;\n  z-index: 2;\n  -webkit-transition: left 300ms;\n  transition: left 300ms; }\n\n.colorpicker.visible {\n    left: 0; }\n\n.colorpicker__close {\n    position: absolute;\n    right: -10px;\n    top: -10px; }\n\n.undo-controls {\n  position: absolute;\n  top: -28px;\n  left: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci10b29scy9tYW5kYWxhLWVkaXRvci10b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFEakI7SUFLWSxnQkFBZ0IsRUFBQTs7QUFMNUI7TUFRZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLDBCQUEwQjtNQUMxQixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBOztBQWI1QjtRQWdCb0IsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUIsRUFBQTs7QUFsQnJDO1FBcUJvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7O0FBeEJuQztJQStCUSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7O0FBcEM5QjtNQXVDWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1QsWUFBWTtNQUNaLE9BQU87TUFDUCxtQkFBbUIsRUFBQTs7QUE3Qy9CO01BaURZLG1CQUFtQixFQUFBOztBQWpEL0I7UUFvRG9CLFdBQVc7UUFDWCxZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixlQUFlLEVBQUE7O0FBeERuQztRQTREZ0IsbUJBQVk7Z0JBQVosWUFBWSxFQUFBOztBQTVENUI7VUErRG9CLFlBQVksRUFBQTs7QUFPaEM7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDViw4QkFBc0I7RUFBdEIsc0JBQXNCLEVBQUE7O0FBVjFCO0lBWVEsT0FBTyxFQUFBOztBQUdYO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci10b29scy9tYW5kYWxhLWVkaXRvci10b29scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIC50b29scyB7XG4gICAgICAgIC50b29sc19faXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuXG4gICAgICAgICAgICAmLS16b25lcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCAjY2JjYmNiIGRhc2hlZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc3ViLXRvb2xzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZGVkZTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICYtLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAuY29sb3ItcHJldmlldyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OztcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtLXN0cm9rZS13aWR0aCB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuXG4gICAgICAgICAgICAgICAgLm1hdC1zbGlkZXIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29sb3JwaWNrZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogLTM1MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAzMDBtcztcbiAgICAmLnZpc2libGUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICZfX2Nsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxufVxuXG4udW5kby1jb250cm9scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI4cHg7XG4gICAgbGVmdDogNjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: MandalaEditorToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorToolsComponent", function() { return MandalaEditorToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");







let MandalaEditorToolsComponent = class MandalaEditorToolsComponent {
    constructor(editorService, undoService) {
        this.editorService = editorService;
        this.undoService = undoService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.TOOLS = _enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"];
        this.isVisibleColorpicker = false;
    }
    get isDrawTool() {
        return [_enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"].DRAW_FREE, _enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"].DRAW_LINE].includes(this.tool);
    }
    get isMirrorEnabled() {
        return this.isDrawMirrored;
    }
    set isMirrorEnabled(state) {
        if (state) {
            this.editorService.enableDrawMirrored();
        }
        else {
            this.editorService.disableDrawMirrored();
        }
    }
    get strokeWidth() {
        return this.currentStrokeWidth;
    }
    set strokeWidth(width) {
        this.editorService.setStrokeWidth(width);
    }
    get hasUndo() {
        return this.undoService.hasUndo();
    }
    get hasRedo() {
        return this.undoService.hasRedo();
    }
    ngOnInit() {
        this.editorService.getTool()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(tool => this.tool = tool);
        this.editorService.isDrawMirrored()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(isDrawMirrored => this.isDrawMirrored = isDrawMirrored);
        this.editorService.getStrokeWidth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(strokeWidth => this.currentStrokeWidth = strokeWidth);
        this.editorService.getZonesCount()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(zonesCount => this.zonesCount = zonesCount);
        this.color$ = this.editorService.getColor();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    isCurrentTool(tool) {
        return this.tool === tool;
    }
    enableTool(tool) {
        this.editorService.setTool(tool);
    }
    decreaseZones() {
        this.editorService.setZonesCount(this.zonesCount - 1);
    }
    increaseZones() {
        this.editorService.setZonesCount(this.zonesCount + 1);
    }
    clear() {
        if (confirm('Are you sure?')) {
            paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.remove();
            const drawLayer = new paper__WEBPACK_IMPORTED_MODULE_2__["Layer"]();
            drawLayer.activate();
            this.undoService.clear();
        }
    }
    toSVG() {
        const fileName = 'custom.svg';
        const svgString = paper__WEBPACK_IMPORTED_MODULE_2__["project"].exportSVG({ asString: true });
        const url = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = url;
        link.click();
    }
    onChangeColor(color) {
        this.editorService.setColor(color);
    }
    toggleColorpicker() {
        this.isVisibleColorpicker = !this.isVisibleColorpicker;
    }
    undo() {
        this.undoService.undo();
    }
    redo() {
        this.undoService.redo();
    }
};
MandalaEditorToolsComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["EditorService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UndoService"] }
];
MandalaEditorToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mandala-editor-tools',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mandala-editor-tools.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mandala-editor-tools.component.scss */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss")).default]
    })
], MandalaEditorToolsComponent);



/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tools-container {\n  display: block;\n  background: white;\n  position: absolute;\n  top: 40px;\n  left: -198px;\n  -webkit-transition: left 300ms;\n  transition: left 300ms; }\n  .tools-container.visible {\n    left: -1px; }\n  .tools-container .tools {\n    display: block;\n    padding: 20px;\n    box-shadow: 0 0 10px grey;\n    position: relative;\n    z-index: 2;\n    background: white; }\n  .tools-container .toggle-tools {\n    position: absolute;\n    right: -47px;\n    top: 30px;\n    background: #b24f47;\n    color: white;\n    padding: 9px;\n    box-shadow: 0 0 4px grey;\n    border-radius: 3px;\n    z-index: 1;\n    cursor: pointer; }\n  .tools-container .toggle-tools .mat-icon {\n      font-size: 35px;\n      line-height: 35px;\n      width: 35px;\n      height: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osOEJBQXNCO0VBQXRCLHNCQUFzQixFQUFBO0VBTjFCO0lBUVEsVUFBVSxFQUFBO0VBUmxCO0lBV1EsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQWhCekI7SUFtQlEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZSxFQUFBO0VBNUJ2QjtNQStCWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29scy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgbGVmdDogLTE5OHB4O1xuICAgIHRyYW5zaXRpb246IGxlZnQgMzAwbXM7XG4gICAgJi52aXNpYmxlIHtcbiAgICAgICAgbGVmdDogLTFweDtcbiAgICB9XG4gICAgLnRvb2xzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIC50b2dnbGUtdG9vbHMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtNDdweDtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjI0ZjQ3O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCBncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MandalaEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorComponent", function() { return MandalaEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/modules/mandala/services/index.ts");



let MandalaEditorComponent = class MandalaEditorComponent {
    constructor(undoService) {
        this.undoService = undoService;
        this.isVisibleTools = false;
    }
    get canvasSize() {
        return this.fullScreen || !this.size ? this.fullScreenSize : this.size;
    }
    ngOnInit() {
        this.undoService.enable();
        this.fullScreenSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    ngOnDestroy() {
        this.undoService.disable();
    }
    toggleTools() {
        this.isVisibleTools = !this.isVisibleTools;
    }
};
MandalaEditorComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["UndoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MandalaEditorComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MandalaEditorComponent.prototype, "fullScreen", void 0);
MandalaEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mandala-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mandala-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mandala-editor.component.scss */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.scss")).default]
    })
], MandalaEditorComponent);



/***/ }),

/***/ "./src/app/modules/mandala/directives/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/mandala/directives/index.ts ***!
  \*****************************************************/
/*! exports provided: MandalaDrawZonesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mandala_draw_zones_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mandala-draw-zones.directive */ "./src/app/modules/mandala/directives/mandala-draw-zones.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MandalaDrawZonesDirective", function() { return _mandala_draw_zones_directive__WEBPACK_IMPORTED_MODULE_1__["MandalaDrawZonesDirective"]; });





/***/ }),

/***/ "./src/app/modules/mandala/directives/mandala-draw-zones.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/mandala/directives/mandala-draw-zones.directive.ts ***!
  \****************************************************************************/
/*! exports provided: MandalaDrawZonesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalaDrawZonesDirective", function() { return MandalaDrawZonesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/modules/mandala/services/index.ts");





let MandalaDrawZonesDirective = class MandalaDrawZonesDirective {
    constructor(editorService, canvasService, el) {
        this.editorService = editorService;
        this.canvasService = canvasService;
        this.el = el;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngAfterViewInit() {
        this.ctx = this.el.nativeElement.getContext('2d');
        this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((zonesCount) => {
            this.zonesCount = zonesCount;
            this.redrawZones();
        });
        this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((isDrawMirrored) => {
            this.isDrawMirrored = isDrawMirrored;
            this.redrawZones();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    redrawZones() {
        const { width, height } = this.canvasService.getCanvasSize();
        this.ctx.clearRect(0, 0, width, height);
        if (this.zonesCount > 1) {
            const x = width / 2;
            const y = height / 2;
            const length = Math.sqrt((width * width) + (height * height));
            const step = 360 / this.zonesCount;
            for (let i = 0; i < this.zonesCount; i++) {
                const angle = 0 + i * step;
                const line = this.calcEndPoint(x, y, length, angle);
                const color = 'grey';
                this.drawAngledLine(x, y, line.endX, line.endY, color);
                if (this.isDrawMirrored) {
                    const mirrorAngle = angle + (step / 2);
                    const mirrorLine = this.calcEndPoint(x, y, length, mirrorAngle);
                    this.drawAngledLine(x, y, mirrorLine.endX, mirrorLine.endY, 'grey', [3, 30]);
                }
            }
        }
    }
    calcEndPoint(x, y, length, angle) {
        const radians = angle / 180 * Math.PI;
        const endX = x + length * Math.cos(radians);
        const endY = y - length * Math.sin(radians);
        return {
            endX,
            endY
        };
    }
    drawAngledLine(x, y, endX, endY, color, dashSize = [5, 15]) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.setLineDash(dashSize);
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(endX, endY);
        this.ctx.closePath();
        this.ctx.stroke();
    }
};
MandalaDrawZonesDirective.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EditorService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["CanvasService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MandalaDrawZonesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appMandalaDrawZones]'
    })
], MandalaDrawZonesDirective);



/***/ }),

/***/ "./src/app/modules/mandala/enums/tools.ts":
/*!************************************************!*\
  !*** ./src/app/modules/mandala/enums/tools.ts ***!
  \************************************************/
/*! exports provided: TOOLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLS", function() { return TOOLS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TOOLS;
(function (TOOLS) {
    TOOLS[TOOLS["DRAW_FREE"] = 0] = "DRAW_FREE";
    TOOLS[TOOLS["DRAW_LINE"] = 1] = "DRAW_LINE";
    TOOLS[TOOLS["FILL_BACKGROUND"] = 2] = "FILL_BACKGROUND";
    TOOLS[TOOLS["FILL_BUCKET"] = 3] = "FILL_BUCKET";
    TOOLS[TOOLS["PIPETTE"] = 4] = "PIPETTE";
})(TOOLS || (TOOLS = {}));


/***/ }),

/***/ "./src/app/modules/mandala/helpers/flood-fill.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/mandala/helpers/flood-fill.ts ***!
  \*******************************************************/
/*! exports provided: floodFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floodFill", function() { return floodFill; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getColorAtPixel(imageData, x, y) {
    const { width, data } = imageData;
    return {
        r: data[4 * (width * y + x) + 0],
        g: data[4 * (width * y + x) + 1],
        b: data[4 * (width * y + x) + 2],
        a: data[4 * (width * y + x) + 3]
    };
}
function setColorAtPixel(imageData, color, x, y) {
    const { width, data } = imageData;
    data[4 * (width * y + x) + 0] = color.r & 0xff;
    data[4 * (width * y + x) + 1] = color.g & 0xff;
    data[4 * (width * y + x) + 2] = color.b & 0xff;
    data[4 * (width * y + x) + 3] = color.a & 0xff;
}
function colorMatch(a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
}
function floodFill(imageData, newColor, x, y) {
    const { width, height, data } = imageData;
    const stack = [];
    const baseColor = getColorAtPixel(imageData, x, y);
    let operator = { x, y };
    // Check if base color and new color are the same
    if (colorMatch(baseColor, newColor)) {
        return;
    }
    // Add the clicked location to stack
    stack.push({ x: operator.x, y: operator.y });
    while (stack.length) {
        operator = stack.pop();
        let contiguousDown = true; // Vertical is assumed to be true
        let contiguousUp = true; // Vertical is assumed to be true
        let contiguousLeft = false;
        let contiguousRight = false;
        // Move to top most contiguousDown pixel
        while (contiguousUp && operator.y >= 0) {
            operator.y--;
            contiguousUp = colorMatch(getColorAtPixel(imageData, operator.x, operator.y), baseColor);
        }
        // Move downward
        while (contiguousDown && operator.y < height) {
            setColorAtPixel(imageData, newColor, operator.x, operator.y);
            // Check left
            if (operator.x - 1 >= 0 && colorMatch(getColorAtPixel(imageData, operator.x - 1, operator.y), baseColor)) {
                if (!contiguousLeft) {
                    contiguousLeft = true;
                    stack.push({ x: operator.x - 1, y: operator.y });
                }
            }
            else {
                contiguousLeft = false;
            }
            // Check right
            if (operator.x + 1 < width && colorMatch(getColorAtPixel(imageData, operator.x + 1, operator.y), baseColor)) {
                if (!contiguousRight) {
                    stack.push({ x: operator.x + 1, y: operator.y });
                    contiguousRight = true;
                }
            }
            else {
                contiguousRight = false;
            }
            operator.y++;
            contiguousDown = colorMatch(getColorAtPixel(imageData, operator.x, operator.y), baseColor);
        }
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/mandala.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/mandala/mandala.module.ts ***!
  \***************************************************/
/*! exports provided: MandalaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalaModule", function() { return MandalaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/common.module */ "./src/app/modules/common/common.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./src/app/modules/mandala/components/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives */ "./src/app/modules/mandala/directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/reducers/editor.reducer */ "./src/app/modules/mandala/store/reducers/editor.reducer.ts");
















let MandalaModule = class MandalaModule {
};
MandalaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components__WEBPACK_IMPORTED_MODULE_12__["MandalaEditorComponent"],
            _components__WEBPACK_IMPORTED_MODULE_12__["MandalaEditorCanvasComponent"],
            _components__WEBPACK_IMPORTED_MODULE_12__["MandalaEditorColorpickerComponent"],
            _components__WEBPACK_IMPORTED_MODULE_12__["MandalaEditorToolsComponent"],
            _directives__WEBPACK_IMPORTED_MODULE_13__["MandalaDrawZonesDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _common_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('mandala', {
                editor: _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_15__["reducer"],
            })
        ],
        exports: [
            _components__WEBPACK_IMPORTED_MODULE_12__["MandalaEditorComponent"]
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_14__["UndoService"],
            _services__WEBPACK_IMPORTED_MODULE_14__["EditorService"],
            _services__WEBPACK_IMPORTED_MODULE_14__["ToolService"],
            _services__WEBPACK_IMPORTED_MODULE_14__["CanvasService"]
        ]
    })
], MandalaModule);



/***/ }),

/***/ "./src/app/modules/mandala/services/canvas.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/mandala/services/canvas.service.ts ***!
  \************************************************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CanvasService = class CanvasService {
    setZonesElement(zonesElement) {
        this.zonesElement = zonesElement;
    }
    setDrawElement(drawElement) {
        this.drawElement = drawElement;
    }
    getDrawElement() {
        return this.drawElement;
    }
    setFillElement(fillElement) {
        this.fillElement = fillElement;
    }
    getCanvasSize() {
        return this.size;
    }
    updateCanvasesSize(size) {
        this.size = size;
        const canvases = [this.zonesElement, this.drawElement, this.fillElement];
        canvases.forEach((canvas) => {
            if (canvas) {
                canvas.width = size.width;
                canvas.height = size.height;
            }
        });
    }
    getCanvasRect(useCachedCanvasRect) {
        if (useCachedCanvasRect && this.cachedCanvasRect) {
            return this.cachedCanvasRect;
        }
        this.cachedCanvasRect = this.drawElement.getBoundingClientRect();
        return this.cachedCanvasRect;
    }
    normalizePoint(point, useCachedCanvasRect) {
        const rect = this.getCanvasRect(useCachedCanvasRect);
        return {
            x: point.x - rect.left,
            y: point.y - rect.top
        };
    }
};
CanvasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CanvasService);



/***/ }),

/***/ "./src/app/modules/mandala/services/editor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/mandala/services/editor.service.ts ***!
  \************************************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/editor.actions */ "./src/app/modules/mandala/store/actions/editor.actions.ts");
/* harmony import */ var _store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors/editor.selectors */ "./src/app/modules/mandala/store/selectors/editor.selectors.ts");
/* harmony import */ var _common_services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/store.service */ "./src/app/modules/common/services/store.service.ts");






const MIN_ZONES_COUNT = 1;
const MAX_ZONES_COUNT = 30;
let EditorService = class EditorService extends _common_services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] {
    constructor(store) {
        super(store);
    }
    setZonesCount(count) {
        const zonesCount = Math.min(MAX_ZONES_COUNT, Math.max(MIN_ZONES_COUNT, count));
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["zonesCount"]({ zonesCount }));
    }
    getZonesCount() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["zonesCount"]);
    }
    setTool(tool) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["tool"]({ tool }));
    }
    getTool() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["tool"]);
    }
    enableDrawMirrored() {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["enableDrawMirrored"]());
    }
    disableDrawMirrored() {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["disableDrawMirrored"]());
    }
    isDrawMirrored() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["isDrawMirrored"]);
    }
    setStrokeWidth(strokeWidth) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["strokeWidth"]({ strokeWidth }));
    }
    getStrokeWidth() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["strokeWidth"]);
    }
    setColor(color) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["color"]({ color }));
    }
    getColor() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["color"]);
    }
};
EditorService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EditorService);



/***/ }),

/***/ "./src/app/modules/mandala/services/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/mandala/services/index.ts ***!
  \***************************************************/
/*! exports provided: UndoService, EditorService, CanvasService, ToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _undo_undo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./undo/undo.service */ "./src/app/modules/mandala/services/undo/undo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UndoService", function() { return _undo_undo_service__WEBPACK_IMPORTED_MODULE_1__["UndoService"]; });

/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "./src/app/modules/mandala/services/editor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"]; });

/* harmony import */ var _canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas.service */ "./src/app/modules/mandala/services/canvas.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return _canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]; });

/* harmony import */ var _tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tool.service */ "./src/app/modules/mandala/services/tool.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolService", function() { return _tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"]; });








/***/ }),

/***/ "./src/app/modules/mandala/services/tool.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/mandala/services/tool.service.ts ***!
  \**********************************************************/
/*! exports provided: ToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolService", function() { return ToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.service */ "./src/app/modules/mandala/services/editor.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools */ "./src/app/modules/mandala/tools/index.ts");
/* harmony import */ var _undo_undo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./undo/undo.service */ "./src/app/modules/mandala/services/undo/undo.service.ts");
/* harmony import */ var _canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas.service */ "./src/app/modules/mandala/services/canvas.service.ts");







let ToolService = class ToolService {
    constructor(editorService, canvasService, undoService) {
        this.editorService = editorService;
        this.canvasService = canvasService;
        this.undoService = undoService;
    }
    createTool(tool, backgroundRectangle) {
        switch (tool) {
            case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_FREE:
                return new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawFreeTool"](this.canvasService, this.editorService, this.undoService);
            case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_LINE:
                return new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawLineTool"](this.canvasService, this.editorService, this.undoService);
            case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].FILL_BACKGROUND:
                return new _tools__WEBPACK_IMPORTED_MODULE_4__["FillBackgroundTool"](this.canvasService, backgroundRectangle, this.editorService, this.undoService);
            case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].FILL_BUCKET:
                return new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawFreeTool"](this.canvasService, this.editorService, this.undoService);
            case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].PIPETTE:
                return new _tools__WEBPACK_IMPORTED_MODULE_4__["PipetteTool"](this.canvasService, this.editorService, this.undoService);
        }
    }
};
ToolService.ctorParameters = () => [
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"] },
    { type: _canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"] },
    { type: _undo_undo_service__WEBPACK_IMPORTED_MODULE_5__["UndoService"] }
];
ToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ToolService);



/***/ }),

/***/ "./src/app/modules/mandala/services/undo/undo-stack-item.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/mandala/services/undo/undo-stack-item.ts ***!
  \******************************************************************/
/*! exports provided: UndoStackItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoStackItem", function() { return UndoStackItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UndoStackItem {
    constructor() {
        this.commands = [];
    }
    static createUndoStackItem({ redo, undo }) {
        const undoStackItem = new UndoStackItem();
        undoStackItem.add(redo, undo);
        return undoStackItem;
    }
    add(redo, undo) {
        this.commands.push({ redo, undo });
    }
    undo() {
        for (let index = this.commands.length - 1; index >= 0; index--) {
            const command = this.commands[index];
            command.undo();
        }
    }
    redo() {
        for (let index = 0, length = this.commands.length; index < length; index++) {
            const command = this.commands[index];
            command.redo();
        }
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/services/undo/undo.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/mandala/services/undo/undo.service.ts ***!
  \***************************************************************/
/*! exports provided: UndoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoService", function() { return UndoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _undo_stack_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./undo-stack-item */ "./src/app/modules/mandala/services/undo/undo-stack-item.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UndoService = class UndoService {
    constructor(router) {
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.stack = [];
        this.index = -1;
        this.limit = 50;
        this.isEnabled = false;
    }
    enable() {
        if (this.isEnabled) {
            return;
        }
        this.isEnabled = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((e) => this.onKeydown(e));
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]))
            .subscribe((() => this.clear()));
    }
    disable() {
        this.destroy$.next(true);
        this.isEnabled = false;
    }
    hasUndo() {
        return this.index > -1;
    }
    hasRedo() {
        return this.index < (this.stack.length - 1);
    }
    add(item) {
        this.stack.splice(this.index + 1, this.stack.length - this.index);
        this.stack.push(item);
        if (this.stack.length > this.limit) {
            this.stack.splice(0, this.stack.length - this.limit);
        }
        this.index = this.stack.length - 1;
    }
    addCommand(command) {
        const undoStackItem = _undo_stack_item__WEBPACK_IMPORTED_MODULE_2__["UndoStackItem"].createUndoStackItem(command);
        this.add(undoStackItem);
    }
    undo() {
        const item = this.stack[this.index];
        if (item) {
            item.undo();
            this.index -= 1;
        }
    }
    redo() {
        const item = this.stack[this.index + 1];
        if (item) {
            item.redo();
            this.index += 1;
        }
    }
    setLimit(limit) {
        this.limit = limit;
    }
    clear() {
        this.stack = [];
        this.index = -1;
    }
    onKeydown(event) {
        const isCtrlZ = (e) => (e.metaKey || e.ctrlKey) && e.keyCode === 90;
        if (event.shiftKey && isCtrlZ(event)) {
            this.redo();
        }
        else if (isCtrlZ(event)) {
            this.undo();
        }
    }
};
UndoService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UndoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UndoService);



/***/ }),

/***/ "./src/app/modules/mandala/store/actions/editor.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/mandala/store/actions/editor.actions.ts ***!
  \*****************************************************************/
/*! exports provided: zonesCount, enableDrawMirrored, disableDrawMirrored, tool, strokeWidth, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zonesCount", function() { return zonesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableDrawMirrored", function() { return enableDrawMirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDrawMirrored", function() { return disableDrawMirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tool", function() { return tool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeWidth", function() { return strokeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const zonesCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Zones Count', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const enableDrawMirrored = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Enable Draw Mirrored');
const disableDrawMirrored = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Disable Draw Mirrored');
const tool = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Tool', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const strokeWidth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Stroke Width', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const color = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Color', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/modules/mandala/store/reducers/editor.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/mandala/store/reducers/editor.reducer.ts ***!
  \******************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/editor.actions */ "./src/app/modules/mandala/store/actions/editor.actions.ts");
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");




const initialState = {
    zonesCount: 10,
    isDrawMirrored: false,
    tool: _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_FREE,
    strokeWidth: 6,
    color: 'rgb(0, 0, 0)'
};
const updateState = (state, props) => (Object.assign({}, state, props));
const updatePropStatus = (prop, status) => (state) => (Object.assign({}, state, { [prop]: status }));
const transformReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["zonesCount"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["enableDrawMirrored"], updatePropStatus('isDrawMirrored', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["disableDrawMirrored"], updatePropStatus('isDrawMirrored', false)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["tool"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["strokeWidth"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["color"], updateState));
function reducer(state, action) {
    return transformReducer(state, action);
}


/***/ }),

/***/ "./src/app/modules/mandala/store/selectors/editor.selectors.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/mandala/store/selectors/editor.selectors.ts ***!
  \*********************************************************************/
/*! exports provided: selectMandalaEditor, zonesCount, isDrawMirrored, tool, strokeWidth, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMandalaEditor", function() { return selectMandalaEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zonesCount", function() { return zonesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDrawMirrored", function() { return isDrawMirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tool", function() { return tool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeWidth", function() { return strokeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectMandalaEditor = (state) => state.mandala.editor;
const getSelector = (prop) => {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMandalaEditor, (state) => state[prop]);
};
const zonesCount = getSelector('zonesCount');
const isDrawMirrored = getSelector('isDrawMirrored');
const tool = getSelector('tool');
const strokeWidth = getSelector('strokeWidth');
const color = getSelector('color');


/***/ }),

/***/ "./src/app/modules/mandala/tools/draw-free.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/mandala/tools/draw-free.ts ***!
  \****************************************************/
/*! exports provided: DrawFreeTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawFreeTool", function() { return DrawFreeTool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.base */ "./src/app/modules/mandala/tools/draw.base.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);



class DrawFreeTool extends _draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super();
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
    }
    drawStartIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
        const createPath = (rotatePoint, rotate) => {
            const path = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"]();
            path.moveTo(rotatePoint.rotate(rotate, this.centerPoint));
            path.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
            path.strokeWidth = this.stokeWidth;
            // path.selected = true;
            return path;
        };
        const diff = angle + zoneStep / 2;
        const point = startPoint.rotate(zoneAngle, this.centerPoint);
        // const mirrorPoint = point.rotate(diff * 2, this.centerPoint);
        // const path2 = new paper.Path.Line(mirrorPoint, mirrorPoint);
        // path2.strokeColor = new paper.Color(this.color);
        // path2.strokeWidth = 4;
        this.drawPaths.push([
            createPath(startPoint, zoneAngle),
            this.isDrawMirrored ? createPath(point, diff * 2) : null
        ]);
    }
    drawIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
        const [zonePath, mirrorPath] = this.drawPaths[zoneIndex];
        if (zonePath) {
            zonePath.add(startPoint.rotate(zoneAngle, this.centerPoint));
        }
        if (mirrorPath) {
            const diff = angle + zoneStep / 2;
            const point = startPoint.rotate(zoneAngle, this.centerPoint);
            const mirrorPoint = point.rotate(diff * 2, this.centerPoint);
            mirrorPath.add(mirrorPoint);
        }
    }
    drawEndIteration(zoneIndex, zoneAngle, zoneStep) {
        const [zonePath, mirrorPath] = this.drawPaths[zoneIndex];
        if (zonePath) {
            // zonePath.smooth();
        }
        if (mirrorPath) {
            // mirrorPath.smooth();
        }
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/draw-line.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/mandala/tools/draw-line.ts ***!
  \****************************************************/
/*! exports provided: DrawLineTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawLineTool", function() { return DrawLineTool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.base */ "./src/app/modules/mandala/tools/draw.base.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);



class DrawLineTool extends _draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super();
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
    }
    drawStartIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
        const point = startPoint.rotate(zoneAngle, this.centerPoint);
        const path = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Line(point, point);
        path.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
        path.strokeWidth = this.stokeWidth;
        const diff = angle + zoneStep / 2;
        const mirrorPoint = point.rotate(diff * 2, this.centerPoint);
        const path2 = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Line(mirrorPoint, mirrorPoint);
        path2.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
        path2.strokeWidth = this.stokeWidth;
        this.drawPaths.push([
            path,
            this.isDrawMirrored ? path2 : null
        ]);
    }
    drawIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
        const [zonePath, mirrorPath] = this.drawPaths[zoneIndex];
        if (zonePath) {
            const [, toSegment] = zonePath.segments;
            toSegment.point = startPoint.rotate(zoneAngle, this.centerPoint);
        }
        if (mirrorPath) {
            const [, toSegment] = mirrorPath.segments;
            const diff = angle + zoneStep / 2;
            const point = startPoint.rotate(zoneAngle, this.centerPoint);
            const mirrorPoint = point.rotate(diff * 2, this.centerPoint);
            toSegment.point = mirrorPoint;
        }
    }
    drawEndIteration(zoneIndex, zoneAngle, zoneStep) { }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/draw.base.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/mandala/tools/draw.base.ts ***!
  \****************************************************/
/*! exports provided: EditorDrawToolBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDrawToolBase", function() { return EditorDrawToolBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _tool_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool.base */ "./src/app/modules/mandala/tools/tool.base.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_5__);






class EditorDrawToolBase extends _tool_base__WEBPACK_IMPORTED_MODULE_2__["EditorToolBase"] {
    constructor() {
        super(...arguments);
        this.drawPaths = [];
    }
    enable() {
        super.enable();
        this.addSubscriptions();
    }
    disable() {
        super.disable();
        this.hummerManager.destroy();
    }
    addSubscriptions() {
        const pan = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Pan"]();
        this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Manager"](this.canvasService.getDrawElement());
        this.hummerManager.add([pan]);
        const pan$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            this.hummerManager.on('pan', e => observer.next(e));
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(0));
        this.hummerManager.on('panstart', (e) => {
            const point = this.canvasService.normalizePoint(e.center);
            this.drawStart(point);
        });
        pan$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
            .subscribe(e => {
            const point = this.canvasService.normalizePoint(e.center);
            this.draw(point);
        });
        this.hummerManager.on('panend', () => this.drawEnd());
        this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
            .subscribe(color => this.color = color);
        this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
            .subscribe(zonesCount => this.zonesCount = zonesCount);
        this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
            .subscribe(isDrawMirrored => this.isDrawMirrored = isDrawMirrored);
        this.editorService.getStrokeWidth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
            .subscribe(stokeWidth => this.stokeWidth = stokeWidth);
    }
    drawStart({ x, y }) {
        const size = this.canvasService.getCanvasSize();
        this.isDrawing = true;
        this.centerPoint = this.getCanvasCenterPoint();
        const startPoint = this.createPoint(x, y);
        const halfHeight = size.height / 2;
        const point2 = new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](y > halfHeight ? 0 : size.height, halfHeight);
        const vector1 = startPoint.subtract(this.centerPoint);
        const vector2 = point2.subtract(this.centerPoint);
        const angle = vector1.getAngle(vector2);
        this.zonesIteration((zoneIndex, zoneAngle, zoneStep) => {
            this.drawStartIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle);
        });
    }
    draw({ x, y }) {
        if (this.isDrawing) {
            const size = this.canvasService.getCanvasSize();
            const centerPoint = this.getCanvasCenterPoint();
            const startPoint = this.createPoint(x, y);
            const halfHeight = size.height / 2;
            const point2 = new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](y > halfHeight ? 0 : size.height, halfHeight);
            const vector1 = startPoint.subtract(centerPoint);
            const vector2 = point2.subtract(centerPoint);
            const angle = vector1.getAngle(vector2);
            this.zonesIteration((zoneIndex, zoneAngle, zoneStep) => {
                this.drawIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle);
            });
        }
    }
    drawEnd() {
        this.zonesIteration((zoneIndex, zoneAngle, zoneStep) => {
            this.drawEndIteration(zoneIndex, zoneAngle, zoneStep);
        });
        this.isDrawing = false;
        const drawPaths = this.drawPaths;
        this.undoService.addCommand({
            undo: () => drawPaths.forEach(paths => paths.forEach(path => path && path.remove())),
            redo: () => drawPaths.forEach(paths => paths.forEach(path => path && path.addTo(paper__WEBPACK_IMPORTED_MODULE_5__["project"])))
        });
        this.drawPaths = [];
    }
    getCanvasCenterPoint() {
        const size = this.canvasService.getCanvasSize();
        return this.createPoint(size.width / 2, size.height / 2);
    }
    zonesIteration(cb) {
        const step = 360 / this.zonesCount;
        for (let i = 0; i < this.zonesCount; i++) {
            cb(i, step * i, step);
        }
    }
    createPoint(x, y) {
        return new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](x, y);
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/fill-background.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/mandala/tools/fill-background.ts ***!
  \**********************************************************/
/*! exports provided: FillBackgroundTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillBackgroundTool", function() { return FillBackgroundTool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tap_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tap.base */ "./src/app/modules/mandala/tools/tap.base.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);



class FillBackgroundTool extends _tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"] {
    constructor(canvasService, backgroundRect, editorService, undoService) {
        super();
        this.canvasService = canvasService;
        this.backgroundRect = backgroundRect;
        this.editorService = editorService;
        this.undoService = undoService;
    }
    tap(point) {
        const prevColor = this.backgroundRect.fillColor;
        const currentColor = this.color;
        this.updateBackgroundColor(currentColor);
        this.undoService.addCommand({
            undo: () => this.updateBackgroundColor(prevColor),
            redo: () => this.updateBackgroundColor(currentColor)
        });
    }
    updateBackgroundColor(color) {
        this.backgroundRect.fillColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](color);
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/fill-bucket.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/mandala/tools/fill-bucket.ts ***!
  \******************************************************/
/*! exports provided: FillBucketTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillBucketTool", function() { return FillBucketTool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tap_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tap.base */ "./src/app/modules/mandala/tools/tap.base.ts");
/* harmony import */ var _helpers_flood_fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/flood-fill */ "./src/app/modules/mandala/helpers/flood-fill.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_3__);




class FillBucketTool extends _tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super();
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
    }
    tap({ x, y }) {
        const canvas = document.getElementById('canvas-draw');
        const ctx = canvas.getContext('2d');
        const canvasFill = document.getElementById('canvas-fill');
        canvasFill.width = canvas.width;
        canvasFill.height = canvas.height;
        const ctxFill = canvasFill.getContext('2d');
        const vCanvas = document.createElement('canvas');
        vCanvas.width = canvas.width;
        vCanvas.height = canvas.height;
        const vCtx = vCanvas.getContext('2d');
        const bitmap = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctxFill.clearRect(0, 0, canvas.width, canvas.height);
        ctxFill.putImageData(bitmap, 0, 0);
        ctxFill.globalCompositeOperation = 'source-in';
        Object(_helpers_flood_fill__WEBPACK_IMPORTED_MODULE_2__["floodFill"])(bitmap, { r: 0xff, g: 0xff, b: 0x0, a: 0xff }, x * 2, y * 2);
        vCtx.putImageData(bitmap, 0, 0);
        ctxFill.drawImage(vCanvas, 10, 10);
        console.log('bitmap: ', bitmap);
        const raster = new paper__WEBPACK_IMPORTED_MODULE_3__["Raster"](new paper__WEBPACK_IMPORTED_MODULE_3__["Size"](1000, 1000));
        raster.setImageData(ctxFill.getImageData(0, 0, canvas.width, canvas.height), new paper__WEBPACK_IMPORTED_MODULE_3__["Point"](0, 0));
        ctxFill.clearRect(0, 0, canvas.width, canvas.height);
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/mandala/tools/index.ts ***!
  \************************************************/
/*! exports provided: DrawFreeTool, DrawLineTool, FillBackgroundTool, FillBucketTool, PipetteTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_free__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-free */ "./src/app/modules/mandala/tools/draw-free.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawFreeTool", function() { return _draw_free__WEBPACK_IMPORTED_MODULE_1__["DrawFreeTool"]; });

/* harmony import */ var _draw_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw-line */ "./src/app/modules/mandala/tools/draw-line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawLineTool", function() { return _draw_line__WEBPACK_IMPORTED_MODULE_2__["DrawLineTool"]; });

/* harmony import */ var _fill_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fill-background */ "./src/app/modules/mandala/tools/fill-background.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FillBackgroundTool", function() { return _fill_background__WEBPACK_IMPORTED_MODULE_3__["FillBackgroundTool"]; });

/* harmony import */ var _fill_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fill-bucket */ "./src/app/modules/mandala/tools/fill-bucket.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FillBucketTool", function() { return _fill_bucket__WEBPACK_IMPORTED_MODULE_4__["FillBucketTool"]; });

/* harmony import */ var _pipette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipette */ "./src/app/modules/mandala/tools/pipette.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipetteTool", function() { return _pipette__WEBPACK_IMPORTED_MODULE_5__["PipetteTool"]; });









/***/ }),

/***/ "./src/app/modules/mandala/tools/pipette.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/mandala/tools/pipette.ts ***!
  \**************************************************/
/*! exports provided: PipetteTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipetteTool", function() { return PipetteTool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tap_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tap.base */ "./src/app/modules/mandala/tools/tap.base.ts");


class PipetteTool extends _tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super();
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
    }
    tap({ x, y }) {
        const context = this.canvasService.getDrawElement().getContext('2d');
        const pixel = context.getImageData(x * 2, y * 2, 1, 1);
        const rgb = pixel.data;
        this.editorService.setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/tap.base.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/mandala/tools/tap.base.ts ***!
  \***************************************************/
/*! exports provided: EditorTapToolBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTapToolBase", function() { return EditorTapToolBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tool_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool.base */ "./src/app/modules/mandala/tools/tool.base.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class EditorTapToolBase extends _tool_base__WEBPACK_IMPORTED_MODULE_1__["EditorToolBase"] {
    enable() {
        super.enable();
        this.addSubscriptions();
    }
    disable() {
        super.disable();
        this.hummerManager.destroy();
    }
    addSubscriptions() {
        const tap = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Tap"]();
        this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Manager"](this.canvasService.getDrawElement());
        this.hummerManager.add([tap]);
        this.hummerManager.on('tap', e => {
            const point = this.canvasService.normalizePoint(e.center);
            this.tap(point);
        });
        this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
            .subscribe(color => this.color = color);
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/tool.base.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/mandala/tools/tool.base.ts ***!
  \****************************************************/
/*! exports provided: EditorToolBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorToolBase", function() { return EditorToolBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class EditorToolBase {
    enable() {
        this.clear$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    disable() {
        this.clear$.next(true);
        this.clear$.unsubscribe();
        this.clear$ = null;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/etokovenko/Desktop/projects/mandala-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./node/self.js (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************************!*\
  !*** ./node/extend.js (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map