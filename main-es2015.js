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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"\n     [style.width]=\"width\"\n     [style.height]=\"height\">\n    <canvas id=\"canvas-draw\" #drawCanvas></canvas>\n    <canvas id=\"canvas-fill\" #fillCanvas></canvas>\n    <canvas id=\"canvas-zones\" appMandalaDrawZones #zonesCanvas></canvas>\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #container class=\"svg-container\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"undo-controls\">\n        <button \n            matTooltip=\"Undo\"\n            [disabled]=\"!hasUndo\"\n            mat-mini-fab\n            (click)=\"undo()\">\n            <mat-icon>undo</mat-icon>\n        </button>\n        <button \n            matTooltip=\"Redo\"\n            [disabled]=\"!hasRedo\"\n            mat-mini-fab\n            (click)=\"redo()\">\n            <mat-icon>redo</mat-icon>\n        </button>\n    </div>\n    <div class=\"tools\">\n        <div class=\"tools__item tools__item--zones\">\n            <button \n                matTooltip=\"Decrease Zones\"\n                mat-icon-button\n                (click)=\"decreaseZones()\">\n                <mat-icon>remove</mat-icon>\n            </button>\n            <span>{{zonesCount}}</span>\n            <button \n                matTooltip=\"Increase Zones\"\n                mat-icon-button\n                (click)=\"increaseZones()\">\n                <mat-icon>add</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Draw\"\n                mat-fab \n                [class.active]=\"isCurrentTool(TOOLS.DRAW_FREE)\"\n                (click)=\"enableTool(TOOLS.DRAW_FREE)\">\n                <mat-icon>gesture</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Line\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.DRAW_LINE)\"\n                [class.active]=\"isCurrentTool(TOOLS.DRAW_LINE)\">\n                <mat-icon>show_chart</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Draw with image\"\n                mat-fab \n                [class.active]=\"isCurrentTool(TOOLS.DRAW_IMAGE)\"\n                (click)=\"enableTool(TOOLS.DRAW_IMAGE)\">\n                <mat-icon>collections</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Background\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.FILL_BACKGROUND)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BACKGROUND)\">\n                <mat-icon>opacity</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Fill Bucket\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.FILL_BUCKET)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BUCKET)\">\n                <mat-icon>filter_b_and_w</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Pipette\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.PIPETTE)\"\n                [class.active]=\"isCurrentTool(TOOLS.PIPETTE)\">\n                <mat-icon>colorize</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Clear All\"\n                mat-fab \n                (click)=\"clear()\">\n                <mat-icon> layers_clear</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button\n                matTooltip=\"to SVG\"\n                mat-fab \n                (click)=\"toSVG()\">\n                <mat-icon> cloud_download</mat-icon>\n            </button>\n        </div>\n    </div>\n    <div class=\"sub-tools\">\n        <div\n            *ngIf=\"!isCurrentTool(TOOLS.DRAW_IMAGE)\" \n            class=\"sub-tools__item sub-tools__item--color\">\n            <div class=\"color-preview\"\n                 matTooltip=\"Change Color\"\n                 [style.background-color]=\"color$ | async\"\n                 (click)=\"toggleColorpicker()\"></div>\n        </div>\n        <div \n            *ngIf=\"isDrawTool\"\n            class=\"sub-tools__item\">\n            <mat-checkbox \n                matTooltip=\"Mirror Draw\"\n                [(ngModel)]=\"isMirrorEnabled\">mirror</mat-checkbox>\n        </div>\n        <div *ngIf=\"isCurrentTool(TOOLS.DRAW_FREE)\"\n             class=\"sub-tools__item sub-tools__item--smooth-type\">\n            <mat-select [(value)]=\"smoothType\">\n                <mat-option \n                    *ngFor=\"let smoothType of smoothTypes\" \n                    [value]=\"smoothType.type\">\n                  {{smoothType.name}}\n                </mat-option>\n              </mat-select>\n        </div>\n        <div \n            *ngIf=\"isDrawWithStrokeTool\"\n            class=\"sub-tools__item sub-tools__item--stroke-width\">\n            <mat-slider\n                [min]=\"1\"\n                [max]=\"30\"\n                [step]=\"1\"\n                [thumbLabel]=\"true\"\n                [vertical]=\"true\"\n                [(ngModel)]=\"strokeWidth\">\n            </mat-slider>\n        </div>\n        <div \n            *ngIf=\"isCurrentTool(TOOLS.DRAW_IMAGE)\"\n            class=\"sub-tools__item sub-tools__item--images\">\n            <div \n                *ngFor=\"let image of drawImages\"\n                [class.active]=\"isCurrentImageDraw(image.url)\"\n                (click)=\"setDrawImage($event)\">\n                <object [attr.data]=\"image.safeUrl\" [attr.data-url]=\"image.url\" type=\"image/svg+xml\"></object>\n            </div>\n        </div>\n    </div>\n</div>\n<div\n    class=\"colorpicker\"\n    [class.visible]=\"isVisibleColorpicker\">\n    <button \n        (click)=\"toggleColorpicker()\"\n        class=\"colorpicker__close\"\n        mat-fab \n        color=\"accent\">\n        <mat-icon>clear</mat-icon>\n    </button>\n    <app-mandala-editor-colorpicker \n        [color]=\"color$ | async\"\n        (changeColor)=\"onChangeColor($event)\">\n    </app-mandala-editor-colorpicker>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoaded\">\n    <app-mandala-editor-canvas [initState]=\"initState\"></app-mandala-editor-canvas>\n    <div \n        class=\"tools-container\"\n        [class.visible]=\"isVisibleTools\">\n        <app-mandala-editor-tools class=\"tools\"></app-mandala-editor-tools>\n        <div \n            class=\"toggle-tools\"\n            (click)=\"toggleTools()\">\n            <mat-icon>{{isVisibleTools ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}}</mat-icon>\n        </div>\n    </div>\n</div>\n<div\n    *ngIf=\"isEnabledLoader\"\n    class=\"loader\">\n    <mat-spinner></mat-spinner>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: relative; }\n  .container .editor {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #eaeaea;\n    overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZWRpdG9yIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn0iXX0= */");

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
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");











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
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]),
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
/*! exports provided: enableLoader, disableLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableLoader", function() { return enableLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLoader", function() { return disableLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


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
    isEnabledLoader: false
};
const updateProp = (prop, status) => (state) => (Object.assign({}, state, { [prop]: status }));
const contentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["enableLoader"], updateProp('isEnabledLoader', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["disableLoader"], updateProp('isEnabledLoader', false)));
function reducer(state, action) {
    return contentReducer(state, action);
}


/***/ }),

/***/ "./src/app/modules/common/store/selectors/layout.selectors.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/common/store/selectors/layout.selectors.ts ***!
  \********************************************************************/
/*! exports provided: isEnabledLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnabledLoader", function() { return isEnabledLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectLayout = (state) => state.common.layout;
const getSelector = (prop) => {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectLayout, (state) => state && state[prop]);
};
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
/*! exports provided: MandalaEditorComponent, MandalaEditorCanvasComponent, MandalaEditorColorpickerComponent, MandalaEditorToolsComponent, MandalaEditorExportSvgComponent */
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

/* harmony import */ var _mandala_editor_mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorExportSvgComponent", function() { return _mandala_editor_mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_5__["MandalaEditorExportSvgComponent"]; });









/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.container {\n  position: relative;\n  margin: 0 auto; }\n\n#canvas-zones,\n#canvas-fill {\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1jYW52YXMvbWFuZGFsYS1lZGl0b3ItY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2xCOztFQUVJLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5kYWxhL2NvbXBvbmVudHMvbWFuZGFsYS1lZGl0b3IvbWFuZGFsYS1lZGl0b3ItY2FudmFzL21hbmRhbGEtZWRpdG9yLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuI2NhbnZhcy16b25lcyxcbiNjYW52YXMtZmlsbCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */");

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tool.service */ "./src/app/modules/mandala/services/tool.service.ts");
/* harmony import */ var _tools_draw_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tools/draw.base */ "./src/app/modules/mandala/tools/draw.base.ts");
/* harmony import */ var _tools_tap_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../tools/tap.base */ "./src/app/modules/mandala/tools/tap.base.ts");
/* harmony import */ var src_app_modules_common_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/common/services */ "./src/app/modules/common/services/index.ts");









let MandalaEditorCanvasComponent = class MandalaEditorCanvasComponent {
    constructor(editorService, layoutService, canvasService, toolService, undoService) {
        this.editorService = editorService;
        this.layoutService = layoutService;
        this.canvasService = canvasService;
        this.toolService = toolService;
        this.undoService = undoService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get width() {
        return `${this.size.width}px`;
    }
    get height() {
        return `${this.size.height}px`;
    }
    ngOnInit() {
        this.editorService.getSize().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(size => this.onChangeEditorSize(size));
        this.canvasService.setZonesElement(this.zonesCanvas.nativeElement);
        this.canvasService.setFillElement(this.fillCanvas.nativeElement);
        this.canvasService.setDrawElement(this.drawCanvas.nativeElement);
        this.canvasService.updateCanvasesSize(this.size);
        this.layoutService.enableLoader();
        this.initDraw().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.undoService.clear();
            if (this.initState && this.initState.tool) {
                const { tool, color, strokeWidth, zonesCount, isDrawMirrored, smoothType } = this.initState;
                this.editorService.setTool(tool);
                this.editorService.setColor(color);
                this.editorService.setStrokeWidth(strokeWidth);
                this.editorService.setZonesCount(zonesCount);
                this.editorService.setSmoothType(smoothType);
                if (isDrawMirrored) {
                    this.editorService.enableDrawMirrored();
                }
                else {
                    this.editorService.disableDrawMirrored();
                }
            }
            this.editorService.inited();
            this.editorService.getTool()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(tool => this.toolService.createTool(tool))).subscribe((tool) => {
                if (this.tool) {
                    this.tool.disable();
                }
                this.tool = tool;
                this.toolService.setCurrentTool(tool);
                tool.enable();
            });
            this.layoutService.disableLoader();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    onChangeEditorSize(size) {
        this.size = size;
        this.canvasService.updateCanvasesSize(this.size);
    }
    initDraw() {
        const drawSteps = [];
        const steps = this.initState.steps || {};
        for (const key in steps) {
            if (steps.hasOwnProperty(key)) {
                drawSteps.push(() => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => {
                        const step = steps[key];
                        this.editorService.setTool(step.tool);
                        this.editorService.setColor(step.color);
                        this.editorService.setStrokeWidth(step.strokeWidth);
                        this.editorService.setZonesCount(step.zonesCount);
                        this.editorService.setSmoothType(step.smoothType);
                        if (step.isDrawMirrored) {
                            this.editorService.enableDrawMirrored();
                        }
                        else {
                            this.editorService.disableDrawMirrored();
                        }
                        return this.editorService.getTool()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(tool => this.toolService.createTool(tool))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((tool) => {
                            if (this.tool) {
                                this.tool.disable();
                            }
                            this.tool = tool;
                            tool.enable();
                            step.points.forEach((point, index) => {
                                if (tool instanceof _tools_draw_base__WEBPACK_IMPORTED_MODULE_6__["EditorDrawToolBase"]) {
                                    if (index === 0) {
                                        tool.drawStart(point);
                                    }
                                    else {
                                        tool.draw(point);
                                    }
                                }
                                else if (tool instanceof _tools_tap_base__WEBPACK_IMPORTED_MODULE_7__["EditorTapToolBase"]) {
                                    tool.tap(point);
                                }
                            });
                            if (tool instanceof _tools_draw_base__WEBPACK_IMPORTED_MODULE_6__["EditorDrawToolBase"]) {
                                tool.drawEnd();
                            }
                            if (step.transformPoints) {
                                const drawTool = tool;
                                step.transformPoints.forEach((points = []) => {
                                    points.forEach((point, index) => {
                                        if (index === 0) {
                                            drawTool.transformStart(point);
                                        }
                                        else {
                                            drawTool.transform(point);
                                        }
                                    });
                                    drawTool.transformEnd();
                                });
                            }
                            if (tool instanceof _tools_draw_base__WEBPACK_IMPORTED_MODULE_6__["EditorDrawToolBase"]) {
                                tool.finishDraw();
                            }
                            return tool;
                        }));
                    }));
                });
            }
        }
        return !drawSteps.length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"])(...drawSteps.map(step => step())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["last"])());
    }
};
MandalaEditorCanvasComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EditorService"] },
    { type: src_app_modules_common_services__WEBPACK_IMPORTED_MODULE_8__["LayoutService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["CanvasService"] },
    { type: _services_tool_service__WEBPACK_IMPORTED_MODULE_5__["ToolService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["UndoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MandalaEditorCanvasComponent.prototype, "initState", void 0);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _jaames_iro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jaames/iro */ "./node_modules/@jaames/iro/dist/iro.es.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/app/modules/mandala/services/index.ts");






let MandalaEditorColorpickerComponent = class MandalaEditorColorpickerComponent {
    constructor(editorService) {
        this.editorService = editorService;
        this.changeColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngAfterViewInit() {
        this.colorPicker = new _jaames_iro__WEBPACK_IMPORTED_MODULE_4__["default"].ColorPicker(this.picker.nativeElement, {
            width: 300,
            handleRadius: 12,
            sliderHeight: 30,
            color: this.color
        });
        this.colorPicker.on('color:change', color => this.changeColor.emit(color.rgbString));
        this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(color => this.onChangeColor(color));
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    onChangeColor(color) {
        if (this.colorPicker.color.rgbString !== color) {
            this.colorPicker.color.rgbString = color;
        }
    }
};
MandalaEditorColorpickerComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["EditorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MandalaEditorColorpickerComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MandalaEditorColorpickerComponent.prototype, "changeColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', { static: true })
], MandalaEditorColorpickerComponent.prototype, "picker", void 0);
MandalaEditorColorpickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mandala-editor-colorpicker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mandala-editor-colorpicker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mandala-editor-colorpicker.component.scss */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.scss")).default]
    })
], MandalaEditorColorpickerComponent);



/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".svg-container /deep/ svg {\n  max-width: calc(100vw - 120px) !important;\n  max-height: calc(100vh - 120px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1leHBvcnQtc3ZnL21hbmRhbGEtZWRpdG9yLWV4cG9ydC1zdmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSx5Q0FBeUM7RUFDekMsMENBQTBDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1leHBvcnQtc3ZnL21hbmRhbGEtZWRpdG9yLWV4cG9ydC1zdmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ZnLWNvbnRhaW5lciB7XG4gICAgL2RlZXAvIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDEyMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: MandalaEditorExportSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalaEditorExportSvgComponent", function() { return MandalaEditorExportSvgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MandalaEditorExportSvgComponent = class MandalaEditorExportSvgComponent {
    ngOnInit() {
        this.container.nativeElement.innerHTML = this.svg;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MandalaEditorExportSvgComponent.prototype, "svg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: true })
], MandalaEditorExportSvgComponent.prototype, "container", void 0);
MandalaEditorExportSvgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mandala-editor-export-svg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mandala-editor-export-svg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mandala-editor-export-svg.component.scss */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.scss")).default]
    })
], MandalaEditorExportSvgComponent);



/***/ }),

/***/ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.active {\n  background-color: #00bcd4;\n  color: white; }\n\nbutton:not(.active) {\n  background-color: white;\n  color: black; }\n\n.container {\n  display: -webkit-box;\n  display: flex; }\n\n.container .tools .tools__item {\n    margin-top: -3px; }\n\n.container .tools .tools__item--zones {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center;\n      border: 1px #cbcbcb dashed;\n      margin-bottom: 20px;\n      padding: 3px; }\n\n.container .tools .tools__item--zones button {\n        width: 15px;\n        height: 15px;\n        line-height: 15px; }\n\n.container .tools .tools__item--zones .mat-icon {\n        width: 15px;\n        height: 16px;\n        line-height: 15px;\n        font-size: 15px; }\n\n.container .sub-tools {\n    margin-left: 15px;\n    padding-left: 15px;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n\n.container .sub-tools::after {\n      content: ' ';\n      position: absolute;\n      width: 1px;\n      top: 40px;\n      bottom: 40px;\n      left: 0;\n      background: #e3dede; }\n\n.container .sub-tools__item {\n      margin-bottom: 15px; }\n\n.container .sub-tools__item--smooth-type {\n        width: 70px;\n        font-size: 13px; }\n\n.container .sub-tools__item--color .color-preview {\n        width: 70px;\n        height: 70px;\n        box-shadow: 0 0 5px grey;\n        border-radius: 3px;\n        cursor: pointer; }\n\n.container .sub-tools__item--stroke-width {\n        -webkit-box-flex: 1;\n                flex-grow: 1; }\n\n.container .sub-tools__item--stroke-width .mat-slider {\n          height: 100%; }\n\n.container .sub-tools__item--images .active {\n        border: 1px dashed #fb3939;\n        border-radius: 3px; }\n\n.container .sub-tools__item--images object {\n        width: 70px;\n        pointer-events: none; }\n\n.colorpicker {\n  display: block;\n  background: white;\n  padding: 20px;\n  box-shadow: 0 0 10px grey;\n  position: absolute;\n  top: 0px;\n  left: -350px;\n  bottom: 0px;\n  z-index: 2;\n  -webkit-transition: left 300ms;\n  transition: left 300ms; }\n\n.colorpicker.visible {\n    left: 0; }\n\n.colorpicker__close {\n    position: absolute;\n    right: -10px;\n    top: -10px; }\n\n.undo-controls {\n  position: absolute;\n  top: -28px;\n  left: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci10b29scy9tYW5kYWxhLWVkaXRvci10b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFEakI7SUFLWSxnQkFBZ0IsRUFBQTs7QUFMNUI7TUFRZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLDBCQUEwQjtNQUMxQixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBOztBQWI1QjtRQWdCb0IsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUIsRUFBQTs7QUFsQnJDO1FBcUJvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7O0FBeEJuQztJQStCUSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7O0FBcEM5QjtNQXVDWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1QsWUFBWTtNQUNaLE9BQU87TUFDUCxtQkFBbUIsRUFBQTs7QUE3Qy9CO01BaURZLG1CQUFtQixFQUFBOztBQWpEL0I7UUFtRGdCLFdBQVc7UUFDWCxlQUFlLEVBQUE7O0FBcEQvQjtRQXdEb0IsV0FBVztRQUNYLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLGVBQWUsRUFBQTs7QUE1RG5DO1FBZ0VnQixtQkFBWTtnQkFBWixZQUFZLEVBQUE7O0FBaEU1QjtVQW1Fb0IsWUFBWSxFQUFBOztBQW5FaEM7UUF3RW9CLDBCQUEwQjtRQUMxQixrQkFBa0IsRUFBQTs7QUF6RXRDO1FBNEVvQixXQUFXO1FBQ1gsb0JBQW9CLEVBQUE7O0FBT3hDO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsOEJBQXNCO0VBQXRCLHNCQUFzQixFQUFBOztBQVYxQjtJQVlRLE9BQU8sRUFBQTs7QUFHWDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVSxFQUFBOztBQUlsQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5kYWxhL2NvbXBvbmVudHMvbWFuZGFsYS1lZGl0b3IvbWFuZGFsYS1lZGl0b3ItdG9vbHMvbWFuZGFsYS1lZGl0b3ItdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICAudG9vbHMge1xuICAgICAgICAudG9vbHNfX2l0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcblxuICAgICAgICAgICAgJi0tem9uZXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggI2NiY2JjYiBkYXNoZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG5cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnN1Yi10b29scyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2RlZGU7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAmLS1zbW9vdGgtdHlwZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0tY29sb3Ige1xuICAgICAgICAgICAgICAgIC5jb2xvci1wcmV2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0tc3Ryb2tlLXdpZHRoIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgICAgICAgICAubWF0LXNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLS1pbWFnZXMge1xuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2ZiMzkzOTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3Qge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29sb3JwaWNrZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogLTM1MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAzMDBtcztcbiAgICAmLnZpc2libGUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICZfX2Nsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxufVxuXG4udW5kby1jb250cm9scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI4cHg7XG4gICAgbGVmdDogNjBweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");
/* harmony import */ var _mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mandala-editor-export-svg/mandala-editor-export-svg.component */ "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts");
/* harmony import */ var _enums_smooth_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../enums/smooth-types */ "./src/app/modules/mandala/enums/smooth-types.ts");












let MandalaEditorToolsComponent = class MandalaEditorToolsComponent {
    constructor(editorService, canvasService, toolService, undoService, domSanitizer, dialog) {
        this.editorService = editorService;
        this.canvasService = canvasService;
        this.toolService = toolService;
        this.undoService = undoService;
        this.domSanitizer = domSanitizer;
        this.dialog = dialog;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isVisibleColorpicker = false;
        this.drawImages = [];
        this.TOOLS = _enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"];
        this.smoothTypes = _enums_smooth_types__WEBPACK_IMPORTED_MODULE_11__["smoothTypesList"];
    }
    get isDrawTool() {
        return this.tool && [_enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_FREE, _enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_LINE, _enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_IMAGE].includes(this.tool.type);
    }
    get isDrawWithStrokeTool() {
        return this.tool && [_enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_FREE, _enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_LINE].includes(this.tool.type);
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
    get smoothType() {
        return this.currentSmoothType;
    }
    set smoothType(type) {
        this.editorService.setSmoothType(type);
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
        this.drawImages = _enums_tools__WEBPACK_IMPORTED_MODULE_9__["DRAW_IMAGES"]
            .map((image) => ({
            url: image,
            safeUrl: this.domSanitizer.bypassSecurityTrustResourceUrl(image)
        }));
        this.editorService.getTool()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(tool => this.tool = tool);
        this.editorService.isDrawMirrored()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(isDrawMirrored => this.isDrawMirrored = isDrawMirrored);
        this.editorService.getStrokeWidth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(strokeWidth => this.currentStrokeWidth = strokeWidth);
        this.editorService.getSmoothType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(type => this.currentSmoothType = type);
        this.editorService.getZonesCount()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(zonesCount => this.zonesCount = zonesCount);
        this.color$ = this.editorService.getColor();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    isCurrentTool(tool) {
        return this.tool && this.tool.type === tool;
    }
    isCurrentImageDraw(imagePath) {
        const tool = (this.toolService.getCurrentTool() || {});
        return tool.toolParams && tool.toolParams.imagePath === imagePath;
    }
    enableTool(tool) {
        this.editorService.setTool({ type: tool });
    }
    decreaseZones() {
        this.editorService.setZonesCount(this.zonesCount - 1);
    }
    increaseZones() {
        this.editorService.setZonesCount(this.zonesCount + 1);
    }
    clear() {
        if (confirm('Are you sure?')) {
            paper__WEBPACK_IMPORTED_MODULE_6__["project"].activeLayer.remove();
            const drawLayer = new paper__WEBPACK_IMPORTED_MODULE_6__["Layer"]();
            drawLayer.activate();
            this.canvasService.clear();
            this.undoService.clear();
            this.editorService.updateSize(null);
            this.editorService.clearUserDrawSteps();
        }
    }
    toSVG() {
        const { width, height } = this.canvasService.getCanvasRect();
        const size = new paper__WEBPACK_IMPORTED_MODULE_6__["Size"](width, height);
        const project = new paper__WEBPACK_IMPORTED_MODULE_6__["Project"](size);
        project.view.autoUpdate = false;
        const layerBg = this.canvasService.drawProject.layers[0].clone();
        project.addLayer(layerBg);
        const groups = this.canvasService.getExportPaperGroups();
        groups.forEach(group => project.activeLayer.addChild(group));
        const svg = project.exportSVG({ asString: true });
        project.remove();
        this.canvasService.drawProject.activate();
        const blob = new Blob([svg], { type: 'image/svg+xmltext/plain;charset=utf-8' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, `mandala-${Date.now()}.svg`);
    }
    openDialog(svg) {
        const dialogRef = this.dialog.open(_mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_10__["MandalaEditorExportSvgComponent"], {
            maxWidth: 'calc(100vw - 50px)',
            maxHeight: 'calc(100vh - 50px)'
        });
        dialogRef.componentInstance.svg = svg;
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
    setDrawImage({ target }) {
        const objElement = target.firstElementChild;
        const imgPath = objElement.dataset.url;
        const svg = objElement.contentDocument.firstElementChild;
        const tool = this.toolService.getCurrentTool();
        tool.setDrawImage(svg, imgPath);
    }
};
MandalaEditorToolsComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["EditorService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["CanvasService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["ToolService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["UndoService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".tools-container {\n  display: block;\n  background: white;\n  position: fixed;\n  top: 40px;\n  left: -198px;\n  -webkit-transition: left 300ms;\n  transition: left 300ms; }\n  .tools-container.visible {\n    left: -1px; }\n  .tools-container .tools {\n    display: block;\n    padding: 20px;\n    box-shadow: 0 0 10px grey;\n    position: relative;\n    z-index: 2;\n    background: white; }\n  .tools-container .toggle-tools {\n    position: absolute;\n    right: -47px;\n    top: 30px;\n    background: #b24f47;\n    color: white;\n    padding: 9px;\n    box-shadow: 0 0 4px grey;\n    border-radius: 3px;\n    z-index: 1;\n    cursor: pointer; }\n  .tools-container .toggle-tools .mat-icon {\n      font-size: 35px;\n      line-height: 35px;\n      width: 35px;\n      height: 35px; }\n  .loader {\n  right: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 3;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osOEJBQXNCO0VBQXRCLHNCQUFzQixFQUFBO0VBTjFCO0lBUVEsVUFBVSxFQUFBO0VBUmxCO0lBV1EsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQWhCekI7SUFtQlEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZSxFQUFBO0VBNUJ2QjtNQStCWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFLeEI7RUFDSSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29scy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwcHg7XG4gICAgbGVmdDogLTE5OHB4O1xuICAgIHRyYW5zaXRpb246IGxlZnQgMzAwbXM7XG4gICAgJi52aXNpYmxlIHtcbiAgICAgICAgbGVmdDogLTFweDtcbiAgICB9XG4gICAgLnRvb2xzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIC50b2dnbGUtdG9vbHMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtNDdweDtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjI0ZjQ3O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCBncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvYWRlciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

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
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services */ "./src/app/modules/common/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let MandalaEditorComponent = class MandalaEditorComponent {
    constructor(undoService, idbService, editorService, layoutService) {
        this.undoService = undoService;
        this.idbService = idbService;
        this.editorService = editorService;
        this.layoutService = layoutService;
        this.isVisibleTools = false;
        this.isLoaded = false;
    }
    get canvasSize() {
        return this.fullScreen && !this.size ? this.fullScreenSize : this.size;
    }
    ngOnInit() {
        paper__WEBPACK_IMPORTED_MODULE_2__["settings"].handleSize = 10;
        paper__WEBPACK_IMPORTED_MODULE_2__["settings"].hitTolerance = 3;
        this.isEnabledLoader$ = this.layoutService.isEnabledLoader();
        this.isEnabledLoader$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0)).subscribe((isEnabledLoader) => {
            this.isEnabledLoader = isEnabledLoader;
        });
        this.undoService.enable();
        this.editorService.getSize().pipe().subscribe((size) => {
            if (!size) {
                this.isLoaded = false;
                this.size = null;
                setTimeout(() => this.initEditor(), 1000);
            }
        });
    }
    ngOnDestroy() {
        this.undoService.disable();
    }
    toggleTools() {
        this.isVisibleTools = !this.isVisibleTools;
    }
    initEditor() {
        this.isLoaded = false;
        this.fullScreenSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        this.idbService.getUserDrawState('current-state')
            .then((state) => {
            this.initState = state;
            if (state.size) {
                this.size = state.size;
            }
            else {
                state.size = this.canvasSize;
                this.idbService.saveUserDrawState('current-state', state);
            }
            this.editorService.updateSize(this.canvasSize);
            this.isLoaded = true;
        });
    }
};
MandalaEditorComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UndoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["IdbService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EditorService"] },
    { type: _common_services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }
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
            .subscribe(zonesCount => this.onChangeZonesCount(zonesCount));
        this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(isDrawMirrored => this.onChangeIsDrawMirrored(isDrawMirrored));
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    onChangeZonesCount(zonesCount) {
        this.zonesCount = zonesCount;
        this.redrawZones();
    }
    onChangeIsDrawMirrored(isDrawMirrored) {
        this.isDrawMirrored = isDrawMirrored;
        this.redrawZones();
    }
    redrawZones() {
        const { width, height } = this.canvasService.getCanvasSize();
        this.ctx.clearRect(0, 0, width, height);
        const x = width / 2;
        const y = height / 2;
        this.drawCenterCircle(x, y);
        if (this.zonesCount > 1) {
            const length = Math.sqrt((width * width) + (height * height));
            const step = 360 / this.zonesCount;
            for (let i = 0; i < this.zonesCount; i++) {
                const angle = 0 + i * step;
                const line = this.calcEndPoint(x, y, length, angle);
                this.drawAngledLine(x, y, line.x, line.y);
                if (this.isDrawMirrored) {
                    const mirrorAngle = angle + (step / 2);
                    const mirrorLine = this.calcEndPoint(x, y, length, mirrorAngle);
                    this.drawAngledLine(x, y, mirrorLine.x, mirrorLine.y, [3, 30]);
                }
            }
        }
    }
    calcEndPoint(x, y, length, angle) {
        const radians = angle / 180 * Math.PI;
        return {
            x: x + length * Math.cos(radians),
            y: y - length * Math.sin(radians)
        };
    }
    drawCenterCircle(x, y, lineWidth = 4, color = 'grey') {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
        this.ctx.setLineDash([]);
        this.ctx.arc(x, y, lineWidth, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    drawAngledLine(startX, startY, endX, endY, dashSize = [5, 15], color = 'grey') {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.setLineDash(dashSize);
        this.ctx.moveTo(startX, startY);
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

/***/ "./src/app/modules/mandala/enums/smooth-types.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/mandala/enums/smooth-types.ts ***!
  \*******************************************************/
/*! exports provided: SMOOTH_TYPES, smoothTypesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMOOTH_TYPES", function() { return SMOOTH_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothTypesList", function() { return smoothTypesList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SMOOTH_TYPES;
(function (SMOOTH_TYPES) {
    SMOOTH_TYPES[SMOOTH_TYPES["WITHOUT_SMOOTH"] = 0] = "WITHOUT_SMOOTH";
    SMOOTH_TYPES[SMOOTH_TYPES["LIGHT_SMOOTH"] = 1] = "LIGHT_SMOOTH";
    SMOOTH_TYPES[SMOOTH_TYPES["HARD_SMOOTH"] = 2] = "HARD_SMOOTH";
})(SMOOTH_TYPES || (SMOOTH_TYPES = {}));
const smoothTypesList = [{
        type: SMOOTH_TYPES.WITHOUT_SMOOTH,
        name: 'Without smooth'
    }, {
        type: SMOOTH_TYPES.LIGHT_SMOOTH,
        name: 'Light smooth'
    }, {
        type: SMOOTH_TYPES.HARD_SMOOTH,
        name: 'Hard smooth'
    }];


/***/ }),

/***/ "./src/app/modules/mandala/enums/tools.ts":
/*!************************************************!*\
  !*** ./src/app/modules/mandala/enums/tools.ts ***!
  \************************************************/
/*! exports provided: TOOLS, DRAW_IMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLS", function() { return TOOLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAW_IMAGES", function() { return DRAW_IMAGES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TOOLS;
(function (TOOLS) {
    TOOLS[TOOLS["DRAW_FREE"] = 0] = "DRAW_FREE";
    TOOLS[TOOLS["DRAW_LINE"] = 1] = "DRAW_LINE";
    TOOLS[TOOLS["DRAW_IMAGE"] = 2] = "DRAW_IMAGE";
    TOOLS[TOOLS["FILL_BACKGROUND"] = 3] = "FILL_BACKGROUND";
    TOOLS[TOOLS["FILL_BUCKET"] = 4] = "FILL_BUCKET";
    TOOLS[TOOLS["PIPETTE"] = 5] = "PIPETTE";
})(TOOLS || (TOOLS = {}));
const DRAW_IMAGES = [
    '/test-madala-app/assets/circle.svg',
    '/test-madala-app/assets/test.svg',
    '/test-madala-app/assets/skull.svg',
    '/test-madala-app/assets/lego.svg'
];


/***/ }),

/***/ "./src/app/modules/mandala/helpers/magic-wand.js":
/*!*******************************************************!*\
  !*** ./src/app/modules/mandala/helpers/magic-wand.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 Magic wand tool (fuzzy selection) by color

 @package magic-wand-tool
 @author Ryasnoy Paul <ryasnoypaul@gmail.com>
 @version 1.1.4
 @license MIT
 @copyright (c) 2014-2019, Ryasnoy Paul <ryasnoypaul@gmail.com>

*/

    var lib = {};

    /** Create a binary mask on the image by color threshold
      * Algorithm: Scanline flood fill (http://en.wikipedia.org/wiki/Flood_fill)
      * @param {Object} image: {Uint8Array} data, {int} width, {int} height, {int} bytes
      * @param {int} x of start pixel
      * @param {int} y of start pixel
      * @param {int} color threshold
      * @param {Uint8Array} mask of visited points (optional) 
      * @param {boolean} [includeBorders=false] indicate whether to include borders pixels
      * @return {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      */
    lib.floodFill = function(image, px, py, colorThreshold, mask, includeBorders) {
        return includeBorders
            ? floodFillWithBorders(image, px, py, colorThreshold, mask)
            : floodFillWithoutBorders(image, px, py, colorThreshold, mask);
    };

    function floodFillWithoutBorders(image, px, py, colorThreshold, mask) {

        var c, x, newY, el, xr, xl, dy, dyl, dyr, checkY,
            data = image.data,
            w = image.width,
            h = image.height,
            bytes = image.bytes, // number of bytes in the color
            maxX = -1, minX = w + 1, maxY = -1, minY = h + 1,
            i = py * w + px, // start point index in the mask data
            result = new Uint8Array(w * h), // result mask
            visited = new Uint8Array(mask ? mask : w * h); // mask of visited points

        if (visited[i] === 1) return null;

        i = i * bytes; // start point index in the image data
        var sampleColor = [data[i], data[i + 1], data[i + 2], data[i + 3]]; // start point color (sample)

        var stack = [{ y: py, left: px - 1, right: px + 1, dir: 1 }]; // first scanning line
        do {
            el = stack.shift(); // get line for scanning

            checkY = false;
            for (x = el.left + 1; x < el.right; x++) {
                dy = el.y * w;
                i = (dy + x) * bytes; // point index in the image data

                if (visited[dy + x] === 1) continue; // check whether the point has been visited
                // compare the color of the sample
                c = data[i] - sampleColor[0]; // check by red
                if (c > colorThreshold || c < -colorThreshold) continue;
                c = data[i + 1] - sampleColor[1]; // check by green
                if (c > colorThreshold || c < -colorThreshold) continue;
                c = data[i + 2] - sampleColor[2]; // check by blue
                if (c > colorThreshold || c < -colorThreshold) continue;

                checkY = true; // if the color of the new point(x,y) is similar to the sample color need to check minmax for Y 

                result[dy + x] = 1; // mark a new point in mask
                visited[dy + x] = 1; // mark a new point as visited

                xl = x - 1;
                // walk to left side starting with the left neighbor
                while (xl > -1) {
                    dyl = dy + xl;
                    i = dyl * bytes; // point index in the image data
                    if (visited[dyl] === 1) break; // check whether the point has been visited
                    // compare the color of the sample
                    c = data[i] - sampleColor[0]; // check by red
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 1] - sampleColor[1]; // check by green
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 2] - sampleColor[2]; // check by blue
                    if (c > colorThreshold || c < -colorThreshold) break;

                    result[dyl] = 1;
                    visited[dyl] = 1;

                    xl--;
                }
                xr = x + 1;
                // walk to right side starting with the right neighbor
                while (xr < w) {
                    dyr = dy + xr;
                    i = dyr * bytes; // index point in the image data
                    if (visited[dyr] === 1) break; // check whether the point has been visited
                    // compare the color of the sample
                    c = data[i] - sampleColor[0]; // check by red
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 1] - sampleColor[1]; // check by green
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 2] - sampleColor[2]; // check by blue
                    if (c > colorThreshold || c < -colorThreshold) break;

                    result[dyr] = 1;
                    visited[dyr] = 1;

                    xr++;
                }

                // check minmax for X
                if (xl < minX) minX = xl + 1;
                if (xr > maxX) maxX = xr - 1;

                newY = el.y - el.dir;
                if (newY >= 0 && newY < h) { // add two scanning lines in the opposite direction (y - dir) if necessary
                    if (xl < el.left) stack.push({ y: newY, left: xl, right: el.left, dir: -el.dir }); // from "new left" to "current left"
                    if (el.right < xr) stack.push({ y: newY, left: el.right, right: xr, dir: -el.dir }); // from "current right" to "new right"
                }
                newY = el.y + el.dir;
                if (newY >= 0 && newY < h) { // add the scanning line in the direction (y + dir) if necessary
                    if (xl < xr) stack.push({ y: newY, left: xl, right: xr, dir: el.dir }); // from "new left" to "new right"
                }
            }
            // check minmax for Y if necessary
            if (checkY) {
                if (el.y < minY) minY = el.y;
                if (el.y > maxY) maxY = el.y;
            }
        } while (stack.length > 0);

        return {
            data: result,
            width: image.width,
            height: image.height,
            bounds: {
                minX: minX,
                minY: minY,
                maxX: maxX,
                maxY: maxY
            }
        };
    }
    function floodFillWithBorders(image, px, py, colorThreshold, mask) {

        var c, x, newY, el, xr, xl, dy, dyl, dyr, checkY,
            data = image.data,
            w = image.width,
            h = image.height,
            bytes = image.bytes, // number of bytes in the color
            maxX = -1, minX = w + 1, maxY = -1, minY = h + 1,
            i = py * w + px, // start point index in the mask data
            result = new Uint8Array(w * h), // result mask
            visited = new Uint8Array(mask ? mask : w * h); // mask of visited points

        if (visited[i] === 1) return null;

        i = i * bytes; // start point index in the image data
        var sampleColor = [data[i], data[i + 1], data[i + 2], data[i + 3]]; // start point color (sample)

        var stack = [{ y: py, left: px - 1, right: px + 1, dir: 1 }]; // first scanning line
        do {
            el = stack.shift(); // get line for scanning

            checkY = false;
            for (x = el.left + 1; x < el.right; x++) {
                dy = el.y * w;
                i = (dy + x) * bytes; // point index in the image data

                if (visited[dy + x] === 1) continue; // check whether the point has been visited

                checkY = true; // if the color of the new point(x,y) is similar to the sample color need to check minmax for Y 

                result[dy + x] = 1; // mark a new point in mask
                visited[dy + x] = 1; // mark a new point as visited

                // compare the color of the sample
                c = data[i] - sampleColor[0]; // check by red
                if (c > colorThreshold || c < -colorThreshold) continue;
                c = data[i + 1] - sampleColor[1]; // check by green
                if (c > colorThreshold || c < -colorThreshold) continue;
                c = data[i + 2] - sampleColor[2]; // check by blue
                if (c > colorThreshold || c < -colorThreshold) continue;

                xl = x - 1;
                // walk to left side starting with the left neighbor
                while (xl > -1) {
                    dyl = dy + xl;
                    i = dyl * bytes; // point index in the image data
                    if (visited[dyl] === 1) break; // check whether the point has been visited

                    result[dyl] = 1;
                    visited[dyl] = 1;
                    xl--;

                    // compare the color of the sample
                    c = data[i] - sampleColor[0]; // check by red
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 1] - sampleColor[1]; // check by green
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 2] - sampleColor[2]; // check by blue
                    if (c > colorThreshold || c < -colorThreshold) break;
                }
                xr = x + 1;
                // walk to right side starting with the right neighbor
                while (xr < w) {
                    dyr = dy + xr;
                    i = dyr * bytes; // index point in the image data
                    if (visited[dyr] === 1) break; // check whether the point has been visited

                    result[dyr] = 1;
                    visited[dyr] = 1;
                    xr++;

                    // compare the color of the sample
                    c = data[i] - sampleColor[0]; // check by red
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 1] - sampleColor[1]; // check by green
                    if (c > colorThreshold || c < -colorThreshold) break;
                    c = data[i + 2] - sampleColor[2]; // check by blue
                    if (c > colorThreshold || c < -colorThreshold) break;
                }

                // check minmax for X
                if (xl < minX) minX = xl + 1;
                if (xr > maxX) maxX = xr - 1;

                newY = el.y - el.dir;
                if (newY >= 0 && newY < h) { // add two scanning lines in the opposite direction (y - dir) if necessary
                    if (xl < el.left) stack.push({ y: newY, left: xl, right: el.left, dir: -el.dir }); // from "new left" to "current left"
                    if (el.right < xr) stack.push({ y: newY, left: el.right, right: xr, dir: -el.dir }); // from "current right" to "new right"
                }
                newY = el.y + el.dir;
                if (newY >= 0 && newY < h) { // add the scanning line in the direction (y + dir) if necessary
                    if (xl < xr) stack.push({ y: newY, left: xl, right: xr, dir: el.dir }); // from "new left" to "new right"
                }
            }
            // check minmax for Y if necessary
            if (checkY) {
                if (el.y < minY) minY = el.y;
                if (el.y > maxY) maxY = el.y;
            }
        } while (stack.length > 0);

        return {
            data: result,
            width: image.width,
            height: image.height,
            bounds: {
                minX: minX,
                minY: minY,
                maxX: maxX,
                maxY: maxY
            }
        };
    }
    /** Apply the gauss-blur filter to binary mask
      * Algorithms: http://blog.ivank.net/fastest-gaussian-blur.html
      * http://www.librow.com/articles/article-9
      * http://elynxsdk.free.fr/ext-docs/Blur/Fast_box_blur.pdf
      * @param {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      * @param {int} blur radius
      * @return {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      */
    lib.gaussBlur = function(mask, radius) {

        var i, k, k1, x, y, val, start, end,
            n = radius * 2 + 1, // size of the pattern for radius-neighbors (from -r to +r with the center point)
            s2 = radius * radius,
            wg = new Float32Array(n), // weights
            total = 0, // sum of weights(used for normalization)
            w = mask.width,
            h = mask.height,
            data = mask.data,
            minX = mask.bounds.minX,
            maxX = mask.bounds.maxX,
            minY = mask.bounds.minY,
            maxY = mask.bounds.maxY;

        // calc gauss weights
        for (i = 0; i < radius; i++) {
            var dsq = (radius - i) * (radius - i);
            var ww = Math.exp(-dsq / (2.0 * s2)) / (2 * Math.PI * s2);
            wg[radius + i] = wg[radius - i] = ww;
            total += 2 * ww;
        }
        // normalization weights
        for (i = 0; i < n; i++) {
            wg[i] /= total;
        }

        var result = new Uint8Array(w * h), // result mask
            endX = radius + w,
            endY = radius + h;

        //walk through all source points for blur
        for (y = minY; y < maxY + 1; y++)
            for (x = minX; x < maxX + 1; x++) {
                val = 0;
                k = y * w + x; // index of the point
                start = radius - x > 0 ? radius - x : 0;
                end = endX - x < n ? endX - x : n; // Math.min((((w - 1) - x) + radius) + 1, n);
                k1 = k - radius;
                // walk through x-neighbors
                for (i = start; i < end; i++) {
                    val += data[k1 + i] * wg[i];
                }
                start = radius - y > 0 ? radius - y : 0;
                end = endY - y < n ? endY - y : n; // Math.min((((h - 1) - y) + radius) + 1, n);
                k1 = k - radius * w;
                // walk through y-neighbors
                for (i = start; i < end; i++) {
                    val += data[k1 + i * w] * wg[i];
                }
                result[k] = val > 0.5 ? 1 : 0;
            }

        return {
            data: result,
            width: w,
            height: h,
            bounds: {
                minX: minX,
                minY: minY,
                maxX: maxX,
                maxY: maxY
            }
        };
    };

    /** Create a border index array of boundary points of the mask with radius-neighbors
      * @param {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      * @param {int} blur radius
      * @param {Uint8Array} visited: mask of visited points (optional) 
      * @return {Array} border index array of boundary points with radius-neighbors (only points need for blur)
      */
    function createBorderForBlur(mask, radius, visited) {

        var x, i, j, y, k, k1, k2,
            w = mask.width,
            h = mask.height,
            data = mask.data,
            visitedData = new Uint8Array(data),
            minX = mask.bounds.minX,
            maxX = mask.bounds.maxX,
            minY = mask.bounds.minY,
            maxY = mask.bounds.maxY,
            len = w * h,
            temp = new Uint8Array(len), // auxiliary array to check uniqueness
            border = [], // only border points
            x0 = Math.max(minX, 1),
            x1 = Math.min(maxX, w - 2),
            y0 = Math.max(minY, 1),
            y1 = Math.min(maxY, h - 2);

        if (visited && visited.length > 0) {
            // copy visited points (only "black")
            for (k = 0; k < len; k++) {
                if (visited[k] === 1) visitedData[k] = 1;
            }
        }

        // walk through inner values except points on the boundary of the image
        for (y = y0; y < y1 + 1; y++)
            for (x = x0; x < x1 + 1; x++) {
                k = y * w + x;
                if (data[k] === 0) continue; // "white" point isn't the border
                k1 = k + w; // y + 1
                k2 = k - w; // y - 1
                // check if any neighbor with a "white" color
                if (visitedData[k + 1] === 0 || visitedData[k - 1] === 0 ||
                    visitedData[k1] === 0 || visitedData[k1 + 1] === 0 || visitedData[k1 - 1] === 0 ||
                    visitedData[k2] === 0 || visitedData[k2 + 1] === 0 || visitedData[k2 - 1] === 0) {
                    //if (visitedData[k + 1] + visitedData[k - 1] + 
                    //    visitedData[k1] + visitedData[k1 + 1] + visitedData[k1 - 1] +
                    //    visitedData[k2] + visitedData[k2 + 1] + visitedData[k2 - 1] == 8) continue;
                    border.push(k);
                }
            }

        // walk through points on the boundary of the image if necessary
        // if the "black" point is adjacent to the boundary of the image, it is a border point
        if (minX == 0)
            for (y = minY; y < maxY + 1; y++)
                if (data[y * w] === 1)
                    border.push(y * w);

        if (maxX == w - 1)
            for (y = minY; y < maxY + 1; y++)
                if (data[y * w + maxX] === 1)
                    border.push(y * w + maxX);

        if (minY == 0)
            for (x = minX; x < maxX + 1; x++)
                if (data[x] === 1)
                    border.push(x);

        if (maxY == h - 1)
            for (x = minX; x < maxX + 1; x++)
                if (data[maxY * w + x] === 1)
                    border.push(maxY * w + x);

        var result = [], // border points with radius-neighbors
            start, end,
            endX = radius + w,
            endY = radius + h,
            n = radius * 2 + 1; // size of the pattern for radius-neighbors (from -r to +r with the center point)

        len = border.length;
        // walk through radius-neighbors of border points and add them to the result array
        for (j = 0; j < len; j++) {
            k = border[j]; // index of the border point
            temp[k] = 1; // mark border point
            result.push(k); // save the border point
            x = k % w; // calc x by index
            y = (k - x) / w; // calc y by index
            start = radius - x > 0 ? radius - x : 0;
            end = endX - x < n ? endX - x : n; // Math.min((((w - 1) - x) + radius) + 1, n);
            k1 = k - radius;
            // walk through x-neighbors
            for (i = start; i < end; i++) {
                k2 = k1 + i;
                if (temp[k2] === 0) { // check the uniqueness
                    temp[k2] = 1;
                    result.push(k2);
                }
            }
            start = radius - y > 0 ? radius - y : 0;
            end = endY - y < n ? endY - y : n; // Math.min((((h - 1) - y) + radius) + 1, n);
            k1 = k - radius * w;
            // walk through y-neighbors
            for (i = start; i < end; i++) {
                k2 = k1 + i * w;
                if (temp[k2] === 0) { // check the uniqueness
                    temp[k2] = 1;
                    result.push(k2);
                }
            }
        }

        return result;
    }
    /** Apply the gauss-blur filter ONLY to border points with radius-neighbors
      * Algorithms: http://blog.ivank.net/fastest-gaussian-blur.html
      * http://www.librow.com/articles/article-9
      * http://elynxsdk.free.fr/ext-docs/Blur/Fast_box_blur.pdf
      * @param {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      * @param {int} blur radius
      * @param {Uint8Array} visited: mask of visited points (optional) 
      * @return {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      */
    lib.gaussBlurOnlyBorder = function(mask, radius, visited) {

        var border = createBorderForBlur(mask, radius, visited), // get border points with radius-neighbors
            ww, dsq, i, j, k, k1, x, y, val, start, end,
            n = radius * 2 + 1, // size of the pattern for radius-neighbors (from -r to +r with center point)
            s2 = 2 * radius * radius,
            wg = new Float32Array(n), // weights
            total = 0, // sum of weights(used for normalization)
            w = mask.width,
            h = mask.height,
            data = mask.data,
            minX = mask.bounds.minX,
            maxX = mask.bounds.maxX,
            minY = mask.bounds.minY,
            maxY = mask.bounds.maxY,
            len = border.length;

        // calc gauss weights
        for (i = 0; i < radius; i++) {
            dsq = (radius - i) * (radius - i);
            ww = Math.exp(-dsq / s2) / Math.PI;
            wg[radius + i] = wg[radius - i] = ww;
            total += 2 * ww;
        }
        // normalization weights
        for (i = 0; i < n; i++) {
            wg[i] /= total;
        }

        var result = new Uint8Array(data), // copy the source mask
            endX = radius + w,
            endY = radius + h;

        //walk through all border points for blur
        for (i = 0; i < len; i++) {
            k = border[i]; // index of the border point
            val = 0;
            x = k % w; // calc x by index
            y = (k - x) / w; // calc y by index
            start = radius - x > 0 ? radius - x : 0;
            end = endX - x < n ? endX - x : n; // Math.min((((w - 1) - x) + radius) + 1, n);
            k1 = k - radius;
            // walk through x-neighbors
            for (j = start; j < end; j++) {
                val += data[k1 + j] * wg[j];
            }
            if (val > 0.5) {
                result[k] = 1;
                // check minmax
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
                continue;
            }
            start = radius - y > 0 ? radius - y : 0;
            end = endY - y < n ? endY - y : n; // Math.min((((h - 1) - y) + radius) + 1, n);
            k1 = k - radius * w;
            // walk through y-neighbors
            for (j = start; j < end; j++) {
                val += data[k1 + j * w] * wg[j];
            }
            if (val > 0.5) {
                result[k] = 1;
                // check minmax
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            } else {
                result[k] = 0;
            }
        }

        return {
            data: result,
            width: w,
            height: h,
            bounds: {
                minX: minX,
                minY: minY,
                maxX: maxX,
                maxY: maxY
            }
        };
    };

    /** Create a border mask (only boundary points)
      * @param {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      * @return {Object} border mask: {Uint8Array} data, {int} width, {int} height, {Object} offset
      */
    lib.createBorderMask = function(mask) {

        var x, y, k, k1, k2,
            w = mask.width,
            h = mask.height,
            data = mask.data,
            minX = mask.bounds.minX,
            maxX = mask.bounds.maxX,
            minY = mask.bounds.minY,
            maxY = mask.bounds.maxY,
            rw = maxX - minX + 1, // bounds size
            rh = maxY - minY + 1,
            result = new Uint8Array(rw * rh), // reduced mask (bounds size)
            x0 = Math.max(minX, 1),
            x1 = Math.min(maxX, w - 2),
            y0 = Math.max(minY, 1),
            y1 = Math.min(maxY, h - 2);

        // walk through inner values except points on the boundary of the image
        for (y = y0; y < y1 + 1; y++)
            for (x = x0; x < x1 + 1; x++) {
                k = y * w + x;
                if (data[k] === 0) continue; // "white" point isn't the border
                k1 = k + w; // y + 1
                k2 = k - w; // y - 1
                // check if any neighbor with a "white" color
                if (data[k + 1] === 0 || data[k - 1] === 0 ||
                    data[k1] === 0 || data[k1 + 1] === 0 || data[k1 - 1] === 0 ||
                    data[k2] === 0 || data[k2 + 1] === 0 || data[k2 - 1] === 0) {
                    //if (data[k + 1] + data[k - 1] + 
                    //    data[k1] + data[k1 + 1] + data[k1 - 1] +
                    //    data[k2] + data[k2 + 1] + data[k2 - 1] == 8) continue;
                    result[(y - minY) * rw + (x - minX)] = 1;
                }
            }

        // walk through points on the boundary of the image if necessary
        // if the "black" point is adjacent to the boundary of the image, it is a border point
        if (minX == 0)
            for (y = minY; y < maxY + 1; y++)
                if (data[y * w] === 1)
                    result[(y - minY) * rw] = 1;

        if (maxX == w - 1)
            for (y = minY; y < maxY + 1; y++)
                if (data[y * w + maxX] === 1)
                    result[(y - minY) * rw + (maxX - minX)] = 1;

        if (minY == 0)
            for (x = minX; x < maxX + 1; x++)
                if (data[x] === 1)
                    result[x - minX] = 1;

        if (maxY == h - 1)
            for (x = minX; x < maxX + 1; x++)
                if (data[maxY * w + x] === 1)
                    result[(maxY - minY) * rw + (x - minX)] = 1;

        return {
            data: result,
            width: rw,
            height: rh,
            offset: { x: minX, y: minY }
        };
    };
    
    /** Create a border index array of boundary points of the mask
      * @param {Object} mask: {Uint8Array} data, {int} width, {int} height
      * @return {Array} border index array boundary points of the mask
      */
    lib.getBorderIndices = function(mask) {

        var x, y, k, k1, k2,
            w = mask.width,
            h = mask.height,
            data = mask.data,
            border = [], // only border points
            x1 = w - 1,
            y1 = h - 1;

        // walk through inner values except points on the boundary of the image
        for (y = 1; y < y1; y++)
            for (x = 1; x < x1; x++) {
                k = y * w + x;
                if (data[k] === 0) continue; // "white" point isn't the border
                k1 = k + w; // y + 1
                k2 = k - w; // y - 1
                // check if any neighbor with a "white" color
                if (data[k + 1] === 0 || data[k - 1] === 0 ||
                    data[k1] === 0 || data[k1 + 1] === 0 || data[k1 - 1] === 0 ||
                    data[k2] === 0 || data[k2 + 1] === 0 || data[k2 - 1] === 0) {
                    //if (data[k + 1] + data[k - 1] + 
                    //    data[k1] + data[k1 + 1] + data[k1 - 1] +
                    //    data[k2] + data[k2 + 1] + data[k2 - 1] == 8) continue;
                    border.push(k);
                }
            }

        // walk through points on the boundary of the image if necessary
        // if the "black" point is adjacent to the boundary of the image, it is a border point
        for (y = 0; y < h; y++)
            if (data[y * w] === 1)
                border.push(y * w);

        for (x = 0; x < w; x++)
            if (data[x] === 1)
                border.push(x);

        k = w - 1;
        for (y = 0; y < h; y++)
            if (data[y * w + k] === 1)
                border.push(y * w + k);

        k = (h - 1) * w;
        for (x = 0; x < w; x++)
            if (data[k + x] === 1)
                border.push(k + x);

        return border;
    };
    
    /** Create a compressed mask with a "white" border (1px border with zero values) for the contour tracing
      * @param {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      * @return {Object} border mask: {Uint8Array} data, {int} width, {int} height, {Object} offset
      */
    function prepareMask(mask) {
        var x, y,
            w = mask.width,
            data = mask.data,
            minX = mask.bounds.minX,
            maxX = mask.bounds.maxX,
            minY = mask.bounds.minY,
            maxY = mask.bounds.maxY,
            rw = maxX - minX + 3, // bounds size +1 px on each side (a "white" border)
            rh = maxY - minY + 3,
            result = new Uint8Array(rw * rh); // reduced mask (bounds size)

        // walk through inner values and copy only "black" points to the result mask
        for (y = minY; y < maxY + 1; y++)
            for (x = minX; x < maxX + 1; x++) {
                if (data[y * w + x] === 1)
                    result[(y - minY + 1) * rw + (x - minX + 1)] = 1;
            }

        return {
            data: result,
            width: rw,
            height: rh,
            offset: { x: minX - 1, y: minY - 1 }
        };
    }        
    /** Create a contour array for the binary mask
      * Algorithm: http://www.sciencedirect.com/science/article/pii/S1077314203001401
      * @param {Object} mask: {Uint8Array} data, {int} width, {int} height, {Object} bounds
      * @return {Array} contours: {Array} points, {bool} inner, {int} label
      */
    lib.traceContours = function(mask) {
        var m = prepareMask(mask),
            contours = [],
            label = 0,
            w = m.width,
            w2 = w * 2,
            h = m.height,
            src = m.data,
            dx = m.offset.x,
            dy = m.offset.y,
            dest = new Uint8Array(src), // label matrix
            i, j, x, y, k, k1, c, inner, dir, first, second, current, previous, next, d;

        // all [dx,dy] pairs (array index is the direction)
        // 5 6 7
        // 4 X 0
        // 3 2 1
        var directions = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

        for (y = 1; y < h - 1; y++)
            for (x = 1; x < w - 1; x++) {
                k = y * w + x;
                if (src[k] === 1) {
                    for (i = -w; i < w2; i += w2) { // k - w: outer tracing (y - 1), k + w: inner tracing (y + 1)
                        if (src[k + i] === 0 && dest[k + i] === 0) { // need contour tracing
                            inner = i === w; // is inner contour tracing ?
                            label++; // label for the next contour

                            c = [];
                            dir = inner ? 2 : 6; // start direction
                            current = previous = first = { x: x, y: y };
                            second = null;
                            while (true) {
                                dest[current.y * w + current.x] = label; // mark label for the current point 
                                // bypass all the neighbors around the current point in a clockwise
                                for (j = 0; j < 8; j++) {
                                    dir = (dir + 1) % 8;

                                    // get the next point by new direction
                                    d = directions[dir]; // index as direction
                                    next = { x: current.x + d[0], y: current.y + d[1] };

                                    k1 = next.y * w + next.x;
                                    if (src[k1] === 1) // black boundary pixel
                                    {
                                        dest[k1] = label; // mark a label
                                        break;
                                    }
                                    dest[k1] = -1; // mark a white boundary pixel
                                    next = null;
                                }
                                if (next === null) break; // no neighbours (one-point contour)
                                current = next;
                                if (second) {
                                    if (previous.x === first.x && previous.y === first.y && current.x === second.x && current.y === second.y) {
                                        break; // creating the contour completed when returned to original position
                                    }
                                } else {
                                    second = next;
                                }
                                c.push({ x: previous.x + dx, y: previous.y + dy });
                                previous = current;
                                dir = (dir + 4) % 8; // next dir (symmetrically to the current direction)
                            }

                            if (next != null) {
                                c.push({ x: first.x + dx, y: first.y + dy }); // close the contour
                                contours.push({ inner: inner, label: label, points: c }); // add contour to the list
                            }
                        }
                    }
                }
            }

        return contours;
    };
    
    /** Simplify contours
      * Algorithms: http://psimpl.sourceforge.net/douglas-peucker.html 
      * http://neerc.ifmo.ru/wiki/index.php?title=%D0%A3%D0%BF%D1%80%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D1%86%D0%B5%D0%BF%D0%B8
      * @param {Array} contours: {Array} points, {bool} inner, {int} label
      * @param {float} simplify tolerant
      * @param {int} simplify count: min number of points when the contour is simplified
      * @return {Array} contours: {Array} points, {bool} inner, {int} label, {int} initialCount
      */
    lib.simplifyContours = function(contours, simplifyTolerant, simplifyCount) {
        var lenContours = contours.length,
            result = [],
            i, j, k, c, points, len, resPoints, lst, stack, ids,
            maxd, maxi, dist, r1, r2, r12, dx, dy, pi, pf, pl;

        // walk through all contours 
        for (j = 0; j < lenContours; j++) {
            c = contours[j];
            points = c.points;
            len = c.points.length;

            if (len < simplifyCount) { // contour isn't simplified
                resPoints = [];
                for (k = 0; k < len; k++) {
                    resPoints.push({ x: points[k].x, y: points[k].y });
                }
                result.push({ inner: c.inner, label: c.label, points: resPoints, initialCount: len });
                continue;
            }

            lst = [0, len - 1]; // always add first and last points
            stack = [{ first: 0, last: len - 1 }]; // first processed edge

            do {
                ids = stack.shift();
                if (ids.last <= ids.first + 1) // no intermediate points
                {
                    continue;
                }

                maxd = -1.0; // max distance from point to current edge
                maxi = ids.first; // index of maximally distant point

                for (i = ids.first + 1; i < ids.last; i++) // bypass intermediate points in edge
                {
                    // calc the distance from current point to edge
                    pi = points[i];
                    pf = points[ids.first];
                    pl = points[ids.last];
                    dx = pi.x - pf.x;
                    dy = pi.y - pf.y;
                    r1 = Math.sqrt(dx * dx + dy * dy);
                    dx = pi.x - pl.x;
                    dy = pi.y - pl.y;
                    r2 = Math.sqrt(dx * dx + dy * dy);
                    dx = pf.x - pl.x;
                    dy = pf.y - pl.y;
                    r12 = Math.sqrt(dx * dx + dy * dy);
                    if (r1 >= Math.sqrt(r2 * r2 + r12 * r12)) dist = r2;
                    else if (r2 >= Math.sqrt(r1 * r1 + r12 * r12)) dist = r1;
                    else dist = Math.abs((dy * pi.x - dx * pi.y + pf.x * pl.y - pl.x * pf.y) / r12);

                    if (dist > maxd) {
                        maxi = i; // save the index of maximally distant point
                        maxd = dist;
                    }
                }

                if (maxd > simplifyTolerant) // if the max "deviation" is larger than allowed then...
                {
                    lst.push(maxi); // add index to the simplified list
                    stack.push({ first: ids.first, last: maxi }); // add the left part for processing
                    stack.push({ first: maxi, last: ids.last }); // add the right part for processing
                }

            } while (stack.length > 0);

            resPoints = [];
            len = lst.length;
            lst.sort(function(a, b) { return a - b; }); // restore index order
            for (k = 0; k < len; k++) {
                resPoints.push({ x: points[lst[k]].x, y: points[lst[k]].y }); // add result points to the correct order
            }
            result.push({ inner: c.inner, label: c.label, points: resPoints, initialCount: c.points.length });
        }

        return result;
    };

    /* harmony default export */ __webpack_exports__["default"] = (lib);
//# sourceMappingURL=magic-wand.js.map


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
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components */ "./src/app/modules/mandala/components/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives */ "./src/app/modules/mandala/directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services */ "./src/app/modules/mandala/services/index.ts");
/* harmony import */ var _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/reducers/editor.reducer */ "./src/app/modules/mandala/store/reducers/editor.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_effects_editor_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/effects/editor.effects */ "./src/app/modules/mandala/store/effects/editor.effects.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






















let MandalaModule = class MandalaModule {
};
MandalaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorExportSvgComponent"]
        ],
        declarations: [
            _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorComponent"],
            _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorCanvasComponent"],
            _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorColorpickerComponent"],
            _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorToolsComponent"],
            _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorExportSvgComponent"],
            _directives__WEBPACK_IMPORTED_MODULE_16__["MandalaDrawZonesDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _common_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('mandala', {
                editor: _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsModule"].forFeature([_store_effects_editor_effects__WEBPACK_IMPORTED_MODULE_20__["EditorEffects"]]),
        ],
        exports: [
            _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorComponent"]
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_17__["UndoService"],
            _services__WEBPACK_IMPORTED_MODULE_17__["EditorService"],
            _services__WEBPACK_IMPORTED_MODULE_17__["ToolService"],
            _services__WEBPACK_IMPORTED_MODULE_17__["CanvasService"],
            _services__WEBPACK_IMPORTED_MODULE_17__["IdbService"]
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
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);



let CanvasService = class CanvasService {
    constructor() {
        this.exportPaperGroups = new Map();
        this.cachedPaperGroups = new Map();
        this.cachedPaperRasterizedGroups = new Map();
    }
    clear() {
        this.cachedPaperGroups.clear();
        this.cachedPaperRasterizedGroups.clear();
        this.exportPaperGroups.clear();
        this.fillProject.remove();
        this.drawProject.remove();
        this.zonesProject.remove();
        this.size = null;
        this.drawElement = null;
        this.fillElement = null;
        this.cachedCanvasRect = null;
        this.fillProject = null;
        this.drawProject = null;
        this.zonesProject = null;
    }
    setZonesElement(zonesElement) {
        this.zonesProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](zonesElement);
        this.zonesProject.view.autoUpdate = false;
    }
    setDrawElement(drawElement) {
        this.drawElement = drawElement;
        this.drawProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](drawElement);
        this.drawProject.view.autoUpdate = false;
        this.addBackgroundRect('white');
        this.drawProject.view.update();
    }
    getDrawElement() {
        return this.drawElement;
    }
    setFillElement(fillElement) {
        this.fillElement = fillElement;
        this.fillProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](fillElement);
        this.fillProject.view.autoUpdate = false;
    }
    getFillElement() {
        return this.fillElement;
    }
    getCanvasSize() {
        return this.size;
    }
    updateCanvasesSize(size) {
        this.size = size;
        if (size) {
            const canvases = [this.fillProject, this.drawProject, this.zonesProject];
            canvases.forEach((project) => {
                if (project) {
                    project.view.viewSize = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](size.width, size.height);
                }
            });
        }
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
    addPaperItems(drawStepKey, items, exportItems) {
        const group = new paper__WEBPACK_IMPORTED_MODULE_2__["Group"](items);
        const rasterize = group.rasterize();
        group.remove();
        rasterize.remove();
        this.cachedPaperGroups.set(drawStepKey, group);
        this.cachedPaperRasterizedGroups.set(group, rasterize);
        this.fillProject.activeLayer.addChild(rasterize);
        this.fillProject.view.update();
        this.drawProject.view.update();
        const exportGroup = new paper__WEBPACK_IMPORTED_MODULE_2__["Group"](exportItems);
        exportGroup.remove();
        this.exportPaperGroups.set(drawStepKey, exportGroup);
    }
    removePaperItems(drawStepKey) {
        const group = this.cachedPaperGroups.get(drawStepKey);
        const rasterize = this.cachedPaperRasterizedGroups.get(group);
        this.cachedPaperRasterizedGroups.delete(group);
        this.cachedPaperGroups.delete(drawStepKey);
        this.exportPaperGroups.delete(drawStepKey);
        group.remove();
        rasterize.remove();
        this.fillProject.view.update();
        this.drawProject.view.update();
    }
    getExportPaperGroups() {
        return this.exportPaperGroups;
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
        setTimeout(() => this.drawProject.view.update());
    }
    createPoint(x, y) {
        return new paper__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y);
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
    inited() {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["inited"]({ init: true }));
    }
    getDrawState() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["editorState"]);
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
    setSmoothType(smoothType) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["smoothType"]({ smoothType }));
    }
    getSmoothType() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["smoothType"]);
    }
    setColor(color) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["color"]({ color }));
    }
    getColor() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["color"]);
    }
    addUserDrawStep(step, key = Date.now()) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["addUserdDrawStep"]({ step, key }));
        return key;
    }
    removeUserDrawStep(key) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["removeUserdDrawStep"]({ key }));
    }
    clearUserDrawSteps() {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["clearUserdDrawSteps"]());
    }
    updateSize(size) {
        this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["updateCanvasSize"]({ size }));
    }
    getSize() {
        return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["size"]);
    }
};
EditorService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EditorService);



/***/ }),

/***/ "./src/app/modules/mandala/services/idb.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/mandala/services/idb.service.ts ***!
  \*********************************************************/
/*! exports provided: IdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdbService", function() { return IdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




const IDB_USER_DRAW_KEY = 'user-draw';
let IdbService = class IdbService {
    constructor(platformId) {
        this.idb = idb__WEBPACK_IMPORTED_MODULE_2__;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(platformId)) {
            this.connectToIDB();
        }
    }
    connectToIDB() {
        this.dbPromise = this.idb.openDB('mandala-app', 1.0, {
            upgrade: (db) => {
                if (!db.objectStoreNames.contains(IDB_USER_DRAW_KEY)) {
                    db.createObjectStore(IDB_USER_DRAW_KEY);
                }
            }
        });
    }
    saveUserDrawState(key, state) {
        const saveState = Object.assign({}, state);
        delete saveState[`init`];
        return this.dbPromise.then((db) => {
            return db.put(IDB_USER_DRAW_KEY, saveState, key);
        });
    }
    getUserDrawState(key) {
        return this.dbPromise.then((db) => {
            return db.get(IDB_USER_DRAW_KEY, key).then(res => res || {});
        });
    }
    clearUserDrawState(key) {
        return this.dbPromise.then((db) => {
            return db.delete(IDB_USER_DRAW_KEY, key);
        });
    }
};
IdbService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
IdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], IdbService);



/***/ }),

/***/ "./src/app/modules/mandala/services/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/mandala/services/index.ts ***!
  \***************************************************/
/*! exports provided: UndoService, EditorService, CanvasService, ToolService, IdbService */
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

/* harmony import */ var _idb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idb.service */ "./src/app/modules/mandala/services/idb.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdbService", function() { return _idb_service__WEBPACK_IMPORTED_MODULE_5__["IdbService"]; });









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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let ToolService = class ToolService {
    constructor(editorService, canvasService, undoService, http) {
        this.editorService = editorService;
        this.canvasService = canvasService;
        this.undoService = undoService;
        this.http = http;
    }
    createTool(tool) {
        return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create((observer) => {
            switch (tool.type) {
                case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_FREE:
                    observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawFreeTool"](this.canvasService, this.editorService, this.undoService));
                    break;
                case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_LINE:
                    observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawLineTool"](this.canvasService, this.editorService, this.undoService));
                    break;
                case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_IMAGE:
                    const imagePath = tool.params && tool.params.imagePath ? tool.params.imagePath : _enums_tools__WEBPACK_IMPORTED_MODULE_2__["DRAW_IMAGES"][0];
                    const responseType = 'text';
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]();
                    headers.set('Accept', 'image/svg+xml');
                    this.http.get(imagePath, { headers, responseType })
                        .subscribe(data => {
                        const imageDrawTool = new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawImageTool"](this.canvasService, this.editorService, this.undoService);
                        imageDrawTool.setDrawImage(data, imagePath);
                        observer.next(imageDrawTool);
                        observer.complete();
                    });
                    return;
                case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].FILL_BACKGROUND:
                    observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["FillBackgroundTool"](this.canvasService, this.editorService, this.undoService));
                    break;
                case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].FILL_BUCKET:
                    observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["FillBucketTool"](this.canvasService, this.editorService, this.undoService));
                    break;
                case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].PIPETTE:
                    observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["PipetteTool"](this.canvasService, this.editorService, this.undoService));
                    break;
            }
            observer.complete();
        });
    }
    getCurrentTool() {
        return this.currentTool;
    }
    setCurrentTool(tool) {
        this.currentTool = tool;
    }
};
ToolService.ctorParameters = () => [
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"] },
    { type: _canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"] },
    { type: _undo_undo_service__WEBPACK_IMPORTED_MODULE_5__["UndoService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
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
        return undoStackItem;
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
    remove(item) {
        const index = this.stack.indexOf(item);
        if (index > -1) {
            this.stack.splice(index, 1);
            if (this.index >= index) {
                this.index--;
            }
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
/*! exports provided: inited, zonesCount, enableDrawMirrored, disableDrawMirrored, tool, strokeWidth, smoothType, color, addUserdDrawStep, removeUserdDrawStep, clearUserdDrawSteps, updateCanvasSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inited", function() { return inited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zonesCount", function() { return zonesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableDrawMirrored", function() { return enableDrawMirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDrawMirrored", function() { return disableDrawMirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tool", function() { return tool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeWidth", function() { return strokeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothType", function() { return smoothType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserdDrawStep", function() { return addUserdDrawStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserdDrawStep", function() { return removeUserdDrawStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUserdDrawSteps", function() { return clearUserdDrawSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCanvasSize", function() { return updateCanvasSize; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const inited = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] editor inited', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const zonesCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Zones Count', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const enableDrawMirrored = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Enable Draw Mirrored');
const disableDrawMirrored = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Disable Draw Mirrored');
const tool = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Tool', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const strokeWidth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Stroke Width', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const smoothType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Smooth Type', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const color = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Color', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const addUserdDrawStep = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Add user draw step', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const removeUserdDrawStep = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Remove user draw step', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const clearUserdDrawSteps = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Clear user draw steps');
const updateCanvasSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Update canvas size', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/modules/mandala/store/effects/editor.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/mandala/store/effects/editor.effects.ts ***!
  \*****************************************************************/
/*! exports provided: EditorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorEffects", function() { return EditorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/editor.actions */ "./src/app/modules/mandala/store/actions/editor.actions.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/app/modules/mandala/services/index.ts");







let EditorEffects = class EditorEffects {
    constructor(actions$, editorService, idbService) {
        this.actions$ = actions$;
        this.editorService = editorService;
        this.idbService = idbService;
        this.drawState$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["color"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["disableDrawMirrored"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["enableDrawMirrored"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["strokeWidth"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["smoothType"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["tool"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["zonesCount"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["addUserdDrawStep"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["removeUserdDrawStep"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["clearUserdDrawSteps"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["updateCanvasSize"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => {
            return this.editorService.getDrawState()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((state) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(!state.init ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null) : this.idbService.saveUserDrawState('current-state', state))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)));
            }));
        })), { dispatch: false });
    }
};
EditorEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["EditorService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["IdbService"] }
];
EditorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EditorEffects);



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
/* harmony import */ var _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/smooth-types */ "./src/app/modules/mandala/enums/smooth-types.ts");





const initialState = {
    init: false,
    zonesCount: 10,
    isDrawMirrored: false,
    tool: {
        type: _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_FREE
    },
    strokeWidth: 6,
    smoothType: _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__["SMOOTH_TYPES"].LIGHT_SMOOTH,
    color: 'rgb(0, 0, 0)',
    size: null,
    steps: {}
};
const updateState = (state, props) => (Object.assign({}, state, props));
const updatePropStatus = (prop, status) => (state) => (Object.assign({}, state, { [prop]: status }));
const addUserDrawStep = (state, { step, key }) => (Object.assign({}, state, { steps: Object.assign({}, state.steps, { [key]: step }) }));
const removeUserDrawStep = (state, { key }) => {
    const steps = Object.assign({}, state.steps);
    delete steps[key];
    return Object.assign({}, state, { steps });
};
const transformReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["zonesCount"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["enableDrawMirrored"], updatePropStatus('isDrawMirrored', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["disableDrawMirrored"], updatePropStatus('isDrawMirrored', false)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["tool"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["strokeWidth"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["smoothType"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["color"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["addUserdDrawStep"], addUserDrawStep), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["removeUserdDrawStep"], removeUserDrawStep), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["clearUserdDrawSteps"], state => (Object.assign({}, state, { steps: [] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["updateCanvasSize"], (state, { size }) => (Object.assign({}, state, { size }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["inited"], (state, { init }) => (Object.assign({}, state, { init }))));
function reducer(state, action) {
    return transformReducer(state, action);
}


/***/ }),

/***/ "./src/app/modules/mandala/store/selectors/editor.selectors.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/mandala/store/selectors/editor.selectors.ts ***!
  \*********************************************************************/
/*! exports provided: selectMandalaEditor, zonesCount, size, isDrawMirrored, tool, strokeWidth, smoothType, color, editorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMandalaEditor", function() { return selectMandalaEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zonesCount", function() { return zonesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDrawMirrored", function() { return isDrawMirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tool", function() { return tool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeWidth", function() { return strokeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothType", function() { return smoothType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorState", function() { return editorState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectMandalaEditor = (state) => state.mandala.editor;
const getSelector = (prop) => {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMandalaEditor, (state) => state[prop]);
};
const zonesCount = getSelector('zonesCount');
const size = getSelector('size');
const isDrawMirrored = getSelector('isDrawMirrored');
const tool = getSelector('tool');
const strokeWidth = getSelector('strokeWidth');
const smoothType = getSelector('smoothType');
const color = getSelector('color');
const editorState = selectMandalaEditor;


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
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");
/* harmony import */ var _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/smooth-types */ "./src/app/modules/mandala/enums/smooth-types.ts");





class DrawFreeTool extends _draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super(editorService);
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
        this.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_FREE;
    }
    drawZoneStartIteration({ drawZonePoint }) {
        return this.createPath(drawZonePoint);
    }
    drawZoneIteration({ drawZonePath, drawZonePoint }) {
        drawZonePath.add(drawZonePoint);
        return drawZonePath;
    }
    drawZoneEndIteration({ drawZonePath }) {
        if (this.smoothType === _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__["SMOOTH_TYPES"].HARD_SMOOTH) {
            drawZonePath.simplify();
            drawZonePath.smooth();
        }
        else if (this.smoothType === _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__["SMOOTH_TYPES"].LIGHT_SMOOTH) {
            drawZonePath.simplify();
        }
        return drawZonePath.clone({ insert: false });
    }
    createPath(position) {
        const path = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"]();
        path.moveTo(position);
        path.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
        path.strokeWidth = this.strokeWidth;
        path.strokeCap = 'round';
        return path;
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/draw-image.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/mandala/tools/draw-image.ts ***!
  \*****************************************************/
/*! exports provided: DrawImageTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawImageTool", function() { return DrawImageTool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.base */ "./src/app/modules/mandala/tools/draw.base.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");




const MAX_IMAGE_WIDTH = 500;
const START_DRAW_WIDTH = 50;
class DrawImageTool extends _draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super(editorService);
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
        this.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_IMAGE;
    }
    setDrawImage(svg, imagePath) {
        this.toolParams = { imagePath };
        this.svgGroup = paper__WEBPACK_IMPORTED_MODULE_2__["project"].importSVG(svg, { insert: false });
        this.drawImage = this.svgGroup.rasterize();
        const isWidthBigger = this.drawImage.size.width > this.drawImage.size.height;
        const scale = MAX_IMAGE_WIDTH / (isWidthBigger ? this.drawImage.size.width : this.drawImage.size.height);
        this.initScale = scale;
        this.drawImage.size = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](scale * this.drawImage.size.width, scale * this.drawImage.size.height);
    }
    drawZoneStartIteration({ drawZonePoint }) {
        const mainImage = this.createImage(drawZonePoint);
        paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(mainImage);
        return mainImage;
    }
    drawZoneIteration({ drawZonePath, drawPoint, zoneAngle, isMirror }) {
        drawZonePath = this.updateImage(drawPoint, drawZonePath, isMirror ? zoneAngle + 180 : zoneAngle);
        paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(drawZonePath);
        return drawZonePath;
    }
    drawZoneEndIteration({ drawZonePath }) {
        return this.createExportImage(drawZonePath);
    }
    createExportImage(image) {
        const exportImage = this.svgGroup.clone();
        exportImage.position = image.position;
        exportImage.rotate(image.rotation);
        // exportImage.style.strokeWidth = null;
        // exportImage.style.strokeCap = null;
        // exportImage.style.strokeJoin = null;
        // exportImage.style.strokeScaling = false;
        exportImage.scale((image.scaling.x + image.scaling.y) * this.initScale);
        return exportImage;
    }
    createImage(position, dist = 0) {
        const path = this.drawImage.clone();
        path.position = position;
        path.scale((START_DRAW_WIDTH + dist * 2) / path.size.width);
        return path;
    }
    updateImage(drawPoint, oldImage, rotation) {
        oldImage.remove();
        const dist = drawPoint.getDistance(this.drawStartPoint);
        const image = this.createImage(oldImage.position, dist);
        const vector = drawPoint.subtract(this.drawStartPoint);
        image.rotate(vector.angle + rotation);
        return image;
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
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");




class DrawLineTool extends _draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super(editorService);
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
        this.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_LINE;
    }
    drawZoneStartIteration({ drawZonePoint }) {
        return this.createLine(drawZonePoint);
    }
    drawZoneIteration({ drawZonePath, drawZonePoint }) {
        const [, toSegment] = drawZonePath.segments;
        toSegment.point = drawZonePoint;
        return drawZonePath;
    }
    drawZoneEndIteration({ drawZonePath }) {
        drawZonePath.simplify();
        return drawZonePath.clone({ insert: false });
    }
    createLine(position) {
        const line = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Line(position, position);
        line.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
        line.strokeWidth = this.strokeWidth;
        line.strokeCap = 'round';
        return line;
    }
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
/* harmony import */ var _helpers_transformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/transformer */ "./src/app/modules/mandala/tools/helpers/transformer.ts");







class EditorDrawToolBase extends _tool_base__WEBPACK_IMPORTED_MODULE_2__["EditorToolBase"] {
    constructor() {
        super(...arguments);
        this.drawPaths = [];
        this.hitPaths = [];
        this.exportPaths = [];
        this.drawPoints = [];
        this.transformPoints = [];
        this.currentTransformPoints = [];
        this.transformUndoItems = [];
    }
    addSubscriptions(isTransformMode) {
        super.addSubscriptions();
        const pan = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Pan"]({ threshold: 0 });
        const press = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Press"]({ time: 1 });
        this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Manager"](this.canvasService.getDrawElement());
        this.hummerManager.add([pan, press]);
        this.hummerManager.on(isTransformMode ? 'press' : 'panstart', (e) => {
            const point = this.canvasService.normalizePoint(e.center);
            isTransformMode ? this.transformStart(point) : this.drawStart(point);
        });
        if (isTransformMode) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
                .subscribe((e) => {
                if (e.target !== this.canvasService.drawProject.view.element) {
                    this.switchFromTransformToDraw();
                }
            });
        }
        const pan$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            this.hummerManager.on('pan', e => observer.next(e));
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(30));
        pan$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$))
            .subscribe(e => {
            const point = this.canvasService.normalizePoint(e.center);
            isTransformMode ? this.transform(point) : this.draw(point);
        });
        this.hummerManager.on('panend', () => isTransformMode ? this.transformEnd() : this.drawEnd());
    }
    clearSubscriptions() {
        super.clearSubscriptions();
        this.hummerManager.destroy();
    }
    drawStart({ x, y }) {
        this.drawPoints.push({ x, y });
        this.isDrawing = true;
        this.centerPoint = this.getCanvasCenterPoint();
        this.drawStartPoint = this.createPoint(x, y);
        const drawAngle = this.getDrawAngle(this.drawStartPoint);
        this.zonesIteration((zoneIndex, zoneAngle, zoneStep) => {
            const params = { zoneIndex, zoneAngle, zoneStep, drawPoint: this.drawStartPoint, drawAngle };
            const [mainPoint, mirrorPoint] = this.getDrawPoints(this.drawStartPoint, zoneStep, zoneAngle, drawAngle);
            this.drawPaths.push([
                this.drawZoneStartIteration(Object.assign({ drawZonePoint: mainPoint }, params)),
                this.isDrawMirrored ? this.drawZoneStartIteration(Object.assign({ drawZonePoint: mirrorPoint }, params)) : null
            ]);
        });
        this.draw({ x, y });
    }
    draw({ x, y }) {
        if (this.isDrawing) {
            this.drawPoints.push({ x, y });
            const drawPoint = this.createPoint(x, y);
            const drawAngle = this.getDrawAngle(drawPoint);
            this.zonesIteration((zoneIndex, zoneAngle, zoneStep) => {
                const params = { zoneIndex, zoneAngle, zoneStep, drawPoint, drawAngle };
                const [mainPoint, mirrorPoint] = this.getDrawPoints(drawPoint, zoneStep, zoneAngle, drawAngle);
                let [zonePath, mirrorPath] = this.drawPaths[zoneIndex];
                if (zonePath) {
                    zonePath = this.drawZoneIteration(Object.assign({ isMirror: false, drawZonePath: zonePath, drawZonePoint: mainPoint }, params));
                }
                if (mirrorPath) {
                    mirrorPath = this.drawZoneIteration(Object.assign({ isMirror: true, drawZonePath: mirrorPath, drawZonePoint: mirrorPoint }, params));
                }
                this.drawPaths[zoneIndex] = [zonePath, mirrorPath];
            });
            this.canvasService.drawProject.view.update();
        }
    }
    drawEnd() {
        const drawPaths = this.drawPaths;
        const addPaths = () => {
            this.zonesIteration((zoneIndex, zoneAngle, zoneStep) => {
                const params = { zoneIndex, zoneAngle, zoneStep };
                const [zonePath, mirrorPath] = drawPaths[zoneIndex];
                const exportPaths = [null, null];
                const hitPaths = [null, null];
                if (zonePath) {
                    exportPaths[0] = this.drawZoneEndIteration(Object.assign({ drawZonePath: zonePath }, params));
                    hitPaths[0] = this.createHitRect(zonePath);
                }
                if (mirrorPath) {
                    exportPaths[1] = this.drawZoneEndIteration(Object.assign({ drawZonePath: mirrorPath }, params));
                    hitPaths[1] = this.createHitRect(mirrorPath);
                }
                this.exportPaths[zoneIndex] = exportPaths;
                this.hitPaths[zoneIndex] = hitPaths;
            });
            this.redraw();
            this.clearSubscriptions();
            this.addSubscriptions(true);
        };
        addPaths();
        const undoItem = this.undoService.addCommand({
            undo: () => {
                const removePath = path => path.remove();
                this.pathsApply(this.drawPaths, removePath);
                this.pathsApply(this.hitPaths, removePath);
                this.redraw();
                this.drawPaths = [];
                this.exportPaths = [];
                this.hitPaths = [];
                this.clearSubscriptions();
                this.addSubscriptions();
            },
            redo: () => {
                this.drawPaths = drawPaths;
                this.pathsApply(this.drawPaths, path => paper__WEBPACK_IMPORTED_MODULE_5__["project"].activeLayer.addChild(path));
                addPaths();
                this.redraw();
            }
        });
        this.transformUndoItems.push(undoItem);
        this.isDrawing = false;
    }
    transformStart(point) {
        const tPoint = this.createPoint(point.x, point.y);
        this.currentTransformPoints.push(point);
        this.isTransforming = false;
        const checkForHit = (path, isMirror) => {
            if (this.isTransforming) {
                return;
            }
            const hitResult = path.hitTest(tPoint);
            if (hitResult || tPoint.isInside(path.bounds)) {
                this.isTransforming = true;
                this.hitedPath(tPoint, path, hitResult, isMirror);
            }
        };
        this.pathsApply(this.hitPaths, checkForHit, tPoint);
        if (!this.isTransforming) {
            this.switchFromTransformToDraw();
        }
        else {
            this.pathsApplyWithRedraw(this.hitPaths, (path) => {
                path.selected = false;
                path.opacity = 0;
            });
        }
    }
    switchFromTransformToDraw() {
        this.finishDraw();
        this.clearSubscriptions();
        this.addSubscriptions();
    }
    finishDraw() {
        this.pathsApplyWithRedraw(this.hitPaths, path => path.remove());
        const drawStep = this.getState(this.drawPoints, this.toolParams);
        const drawStepKey = this.editorService.addUserDrawStep(drawStep);
        const allDrawPaths = this.getAllPaths(this.drawPaths);
        const allExportPaths = this.getAllPaths(this.exportPaths);
        this.canvasService.addPaperItems(drawStepKey, allDrawPaths, allExportPaths);
        this.undoService.addCommand({
            undo: () => {
                this.editorService.removeUserDrawStep(drawStepKey);
                this.canvasService.removePaperItems(drawStepKey);
            },
            redo: () => {
                this.editorService.addUserDrawStep(drawStep, drawStepKey);
                this.canvasService.addPaperItems(drawStepKey, allDrawPaths, allExportPaths);
            }
        });
        this.transformUndoItems.forEach(undoItem => this.undoService.remove(undoItem));
        this.transformUndoItems = [];
        this.drawPaths = [];
        this.exportPaths = [];
        this.drawPoints = [];
        this.transformPoints = [];
        this.hitPaths = [];
    }
    transform({ x, y }) {
        if (!this.isTransforming) {
            return;
        }
        this.currentTransformPoints.push({ x, y });
        const tPoint = this.createPoint(x, y);
        if (this.transformer.transfromType === _helpers_transformer__WEBPACK_IMPORTED_MODULE_6__["TRANSFORM_TYPES"].MOVE) {
            const pathMove = (path, isMirror, [mainPoint, mirrorPoint]) => {
                path.position = isMirror ? mirrorPoint : mainPoint;
            };
            const point = this.transformer.updateTransformLastPoint(tPoint);
            this.applyTransform(pathMove, point);
        }
        else if (this.transformer.transfromType === _helpers_transformer__WEBPACK_IMPORTED_MODULE_6__["TRANSFORM_TYPES"].ROTATE) {
            const rotation = this.transformer.updateTransformRotation(tPoint);
            this.applyTransform(path => path.rotate(rotation));
        }
        else {
            const prevWidth = this.transformer.transformWidth;
            const transformWidth = this.transformer.updateTransformWidth(tPoint);
            const scale = transformWidth / prevWidth;
            this.applyTransform(path => path.scale(scale));
        }
    }
    applyTransform(applyFunc, point) {
        this.pathsApply(this.hitPaths, applyFunc, point);
        this.pathsApply(this.drawPaths, applyFunc, point);
        this.pathsApply(this.exportPaths, applyFunc, point);
        this.redraw();
    }
    transformEnd() {
        if (this.isTransforming) {
            this.transformPoints.push(this.currentTransformPoints);
            this.currentTransformPoints = [];
            this.isTransforming = false;
            this.pathsApplyWithRedraw(this.hitPaths, (path) => {
                path.selected = true;
                path.opacity = 1;
            });
        }
    }
    hitedPath(point, path, hitResult, isMirrorTransform) {
        this.transformer = new _helpers_transformer__WEBPACK_IMPORTED_MODULE_6__["Transformer"](point, path, hitResult, isMirrorTransform);
    }
    createHitRect(path) {
        const size = path instanceof paper__WEBPACK_IMPORTED_MODULE_5__["Raster"] ? path.size : new paper__WEBPACK_IMPORTED_MODULE_5__["Size"](path.bounds.width, path.bounds.height);
        const rect = new paper__WEBPACK_IMPORTED_MODULE_5__["Path"].Rectangle(path.position, size);
        rect.transform(path.matrix);
        rect.position = path.position;
        rect.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_5__["Color"]('red');
        rect.strokeWidth = 2;
        rect.selected = true;
        rect.selectedColor = new paper__WEBPACK_IMPORTED_MODULE_5__["Color"]('red');
        return rect;
    }
    getCanvasCenterPoint() {
        const size = this.canvasService.getCanvasSize();
        return this.createPoint(size.width / 2, size.height / 2);
    }
    pathsApplyWithRedraw(zones, applyFunc, point) {
        this.pathsApply(zones, applyFunc, point);
        this.redraw();
    }
    pathsApply(paths, applyFunc, point) {
        if (point) {
            const angle = this.getDrawAngle(point);
            this.zonesIteration((zoneIndex, zoneAngle, zoneStep) => {
                const points = this.getDrawPoints(point, zoneStep, zoneAngle, angle);
                const [zonePath, mirrorPath] = paths[zoneIndex];
                if (zonePath) {
                    applyFunc(zonePath, false, points);
                }
                if (mirrorPath) {
                    applyFunc(mirrorPath, true, points);
                }
            });
        }
        else {
            paths.forEach(([zonePath, mirrorPath]) => {
                if (zonePath) {
                    applyFunc(zonePath, false);
                }
                if (mirrorPath) {
                    applyFunc(mirrorPath, true);
                }
            });
        }
    }
    redraw() {
        this.canvasService.drawProject.view.update();
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
    getDrawAngle(drawPoint) {
        const centerPoint = this.getCanvasCenterPoint();
        const size = this.canvasService.getCanvasSize();
        const halfHeight = size.height / 2;
        const point2 = new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](drawPoint.y > halfHeight ? 0 : size.height, halfHeight);
        const vector1 = drawPoint.subtract(centerPoint);
        const vector2 = point2.subtract(centerPoint);
        return vector1.getAngle(vector2);
    }
    getDrawPoints(drawPoint, zoneStep, zoneAngle, drawAngle) {
        const diff = drawAngle + zoneStep / 2;
        return [
            this.getDrawPointWithRotation(drawPoint, zoneAngle),
            this.getDrawPointWithRotation(drawPoint, zoneAngle + diff * 2)
        ];
    }
    getDrawPointWithRotation(drawPoint, rotateAngle) {
        return drawPoint.rotate(rotateAngle, this.centerPoint);
    }
    getAllPaths(paths) {
        return paths.reduce((list, zonePaths) => {
            zonePaths.forEach(p => p && list.push(p));
            return list;
        }, []);
    }
    getState(points = [], toolParams = {}) {
        const state = super.getState(points, toolParams);
        const transformPoints = this.transformPoints;
        return Object.assign({}, state, { transformPoints });
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
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");




class FillBackgroundTool extends _tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super(editorService);
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
        this.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].FILL_BACKGROUND;
    }
    tap(point) {
        const drawStep = this.getState([point]);
        const drawStepKey = this.editorService.addUserDrawStep(drawStep);
        const prevColor = this.canvasService.backgroundRect.fillColor;
        const currentColor = this.color;
        this.updateBackgroundColor(currentColor);
        this.undoService.addCommand({
            undo: () => {
                this.updateBackgroundColor(prevColor);
                this.editorService.removeUserDrawStep(drawStepKey);
            },
            redo: () => {
                this.updateBackgroundColor(currentColor);
                this.editorService.addUserDrawStep(drawStep, drawStepKey);
            }
        });
    }
    updateBackgroundColor(color) {
        this.canvasService.backgroundRect.fillColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](color);
        this.canvasService.drawProject.view.update();
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
/* harmony import */ var _helpers_magic_wand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/magic-wand.js */ "./src/app/modules/mandala/helpers/magic-wand.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _enums_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/tools */ "./src/app/modules/mandala/enums/tools.ts");





class FillBucketTool extends _tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"] {
    constructor(canvasService, editorService, undoService) {
        super(editorService);
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
        this.rasters = [];
        this.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_4__["TOOLS"].FILL_BUCKET;
    }
    tap({ x, y }) {
        const cvs = this.canvasService.fillProject.view.element;
        const imageInfo = {
            data: null,
            width: cvs.width,
            height: cvs.height,
            context: cvs.getContext('2d')
        };
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.canvas.width = imageInfo.width;
        tempCtx.canvas.height = imageInfo.height;
        tempCtx.fillStyle = 'white';
        tempCtx.fillRect(0, 0, imageInfo.width, imageInfo.height);
        tempCtx.drawImage(cvs, 0, 0);
        imageInfo.data = tempCtx.getImageData(0, 0, imageInfo.width, imageInfo.height);
        const image = {
            data: imageInfo.data.data,
            width: imageInfo.width,
            height: imageInfo.height,
            bytes: 4
        };
        let mask = _helpers_magic_wand_js__WEBPACK_IMPORTED_MODULE_2__["default"].floodFill(image, x * 2, y * 2, 15);
        mask = _helpers_magic_wand_js__WEBPACK_IMPORTED_MODULE_2__["default"].gaussBlurOnlyBorder(mask, 5);
        const simplifyTolerant = 0;
        const simplifyCount = 30;
        let cs = _helpers_magic_wand_js__WEBPACK_IMPORTED_MODULE_2__["default"].traceContours(mask);
        cs = _helpers_magic_wand_js__WEBPACK_IMPORTED_MODULE_2__["default"].simplifyContours(cs, simplifyTolerant, simplifyCount);
        mask = null;
        const group = new paper__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        // outer
        for (const csItem of cs) {
            if (csItem.inner) {
                continue;
            }
            let myPath = new paper__WEBPACK_IMPORTED_MODULE_3__["Path"]();
            myPath.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_3__["Color"](this.color);
            myPath.fillColor = new paper__WEBPACK_IMPORTED_MODULE_3__["Color"](this.color);
            const ps = csItem.points;
            myPath.position = new paper__WEBPACK_IMPORTED_MODULE_3__["Point"](ps[0].x / 2, ps[0].y / 2);
            for (let j = 1; j < ps.length; j++) {
                myPath.add(new paper__WEBPACK_IMPORTED_MODULE_3__["Point"](ps[j].x / 2, ps[j].y / 2));
            }
            myPath.closed = true;
            // inner
            for (const csItem2 of cs) {
                if (!csItem2.inner) {
                    continue;
                }
                const myPath2 = new paper__WEBPACK_IMPORTED_MODULE_3__["Path"]();
                myPath2.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_3__["Color"]('red');
                myPath2.fillColor = new paper__WEBPACK_IMPORTED_MODULE_3__["Color"]('green');
                const ps2 = csItem2.points;
                myPath2.position = new paper__WEBPACK_IMPORTED_MODULE_3__["Point"](ps2[0].x / 2, ps2[0].y / 2);
                for (let j = 1; j < ps2.length; j++) {
                    myPath2.add(new paper__WEBPACK_IMPORTED_MODULE_3__["Point"](ps2[j].x / 2, ps2[j].y / 2));
                }
                myPath2.closed = true;
                const newPath = myPath.exclude(myPath2);
                myPath.remove();
                myPath2.remove();
                myPath = newPath;
            }
            myPath.remove();
            group.addChild(myPath);
        }
        const drawStep = this.getState([{ x, y }]);
        const drawStepKey = this.editorService.addUserDrawStep(drawStep);
        this.canvasService.addPaperItems(drawStepKey, [group], [group]);
        this.undoService.addCommand({
            undo: () => {
                this.editorService.removeUserDrawStep(drawStepKey);
                this.canvasService.removePaperItems(drawStepKey);
            },
            redo: () => {
                this.editorService.addUserDrawStep(drawStep, drawStepKey);
                this.canvasService.addPaperItems(drawStepKey, [group], [group]);
            }
        });
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/helpers/transformer.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/mandala/tools/helpers/transformer.ts ***!
  \**************************************************************/
/*! exports provided: TRANSFORM_TYPES, Transformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORM_TYPES", function() { return TRANSFORM_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transformer", function() { return Transformer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TRANSFORM_TYPES;
(function (TRANSFORM_TYPES) {
    TRANSFORM_TYPES[TRANSFORM_TYPES["RESIZE"] = 0] = "RESIZE";
    TRANSFORM_TYPES[TRANSFORM_TYPES["MOVE"] = 1] = "MOVE";
    TRANSFORM_TYPES[TRANSFORM_TYPES["ROTATE"] = 2] = "ROTATE";
})(TRANSFORM_TYPES || (TRANSFORM_TYPES = {}));
class Transformer {
    constructor(transfromStartPoint, path, hitResult, isMirrorTransform) {
        this.transfromStartPoint = transfromStartPoint;
        this.path = path;
        this.hitResult = hitResult;
        this.isMirrorTransform = isMirrorTransform;
        this.isLeftSizeTransform = false;
        if (!hitResult) {
            this.transfromType = TRANSFORM_TYPES.MOVE;
        }
        else if (hitResult.type === 'segment') {
            this.transfromType = TRANSFORM_TYPES.ROTATE;
        }
        else {
            this.transfromType = TRANSFORM_TYPES.RESIZE;
        }
        this.transfromStartSize = this.path.bounds.clone();
        this.transformWidth = this.transfromStartSize.width;
        this.transformCenter = path.position;
        this.transformRotation = this.transfromStartPoint.subtract(this.transformCenter).angle;
        this.transformOffsetPoint = this.transfromStartPoint.subtract(this.transformCenter);
        this.isLeftSizeTransform = this.transformCenter.x > this.transfromStartPoint.x;
    }
    updateTransformLastPoint(tPoint) {
        const point = tPoint.subtract(this.transformOffsetPoint);
        this.transformLastPoint = point;
        return point;
    }
    updateTransformRotation(tPoint) {
        const v1 = tPoint.subtract(this.transformCenter);
        const rotation = v1.angle - this.transformRotation;
        this.transformRotation += rotation;
        return rotation;
    }
    updateTransformWidth(tPoint) {
        const vector = tPoint.subtract(this.transfromStartPoint);
        const distance = (vector.x < 0 ? -1 : 1) * tPoint.getDistance(this.transfromStartPoint, false);
        const transformWidth = this.isLeftSizeTransform
            ? this.transfromStartSize.width - distance
            : this.transfromStartSize.width + distance;
        this.transformWidth = transformWidth;
        return transformWidth;
    }
}


/***/ }),

/***/ "./src/app/modules/mandala/tools/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/mandala/tools/index.ts ***!
  \************************************************/
/*! exports provided: DrawFreeTool, DrawLineTool, DrawImageTool, FillBackgroundTool, FillBucketTool, PipetteTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_free__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-free */ "./src/app/modules/mandala/tools/draw-free.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawFreeTool", function() { return _draw_free__WEBPACK_IMPORTED_MODULE_1__["DrawFreeTool"]; });

/* harmony import */ var _draw_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw-line */ "./src/app/modules/mandala/tools/draw-line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawLineTool", function() { return _draw_line__WEBPACK_IMPORTED_MODULE_2__["DrawLineTool"]; });

/* harmony import */ var _draw_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw-image */ "./src/app/modules/mandala/tools/draw-image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawImageTool", function() { return _draw_image__WEBPACK_IMPORTED_MODULE_3__["DrawImageTool"]; });

/* harmony import */ var _fill_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fill-background */ "./src/app/modules/mandala/tools/fill-background.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FillBackgroundTool", function() { return _fill_background__WEBPACK_IMPORTED_MODULE_4__["FillBackgroundTool"]; });

/* harmony import */ var _fill_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fill-bucket */ "./src/app/modules/mandala/tools/fill-bucket.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FillBucketTool", function() { return _fill_bucket__WEBPACK_IMPORTED_MODULE_5__["FillBucketTool"]; });

/* harmony import */ var _pipette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipette */ "./src/app/modules/mandala/tools/pipette.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipetteTool", function() { return _pipette__WEBPACK_IMPORTED_MODULE_6__["PipetteTool"]; });










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
        super(editorService);
        this.canvasService = canvasService;
        this.editorService = editorService;
        this.undoService = undoService;
    }
    tap({ x, y }) {
        const context = this.canvasService.getFillElement().getContext('2d');
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



class EditorTapToolBase extends _tool_base__WEBPACK_IMPORTED_MODULE_1__["EditorToolBase"] {
    addSubscriptions() {
        super.addSubscriptions();
        const tap = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Tap"]();
        this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Manager"](this.canvasService.getDrawElement());
        this.hummerManager.add([tap]);
        this.hummerManager.on('tap', e => {
            const point = this.canvasService.normalizePoint(e.center);
            this.tap(point);
        });
    }
    clearSubscriptions() {
        super.clearSubscriptions();
        this.hummerManager.destroy();
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class EditorToolBase {
    constructor(editorService) {
        this.editorService = editorService;
    }
    enable() {
        this.addSubscriptions();
    }
    disable() {
        this.clearSubscriptions();
    }
    addSubscriptions() {
        this.clear$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$))
            .subscribe(color => this.onChangeColor(color));
        this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$))
            .subscribe(zonesCount => this.zonesCount = zonesCount);
        this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$))
            .subscribe(isDrawMirrored => this.isDrawMirrored = isDrawMirrored);
        this.editorService.getStrokeWidth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$))
            .subscribe(strokeWidth => this.strokeWidth = strokeWidth);
        this.editorService.getSmoothType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$))
            .subscribe(smoothType => this.smoothType = smoothType);
    }
    clearSubscriptions() {
        this.clear$.next(true);
        this.clear$.unsubscribe();
        this.clear$ = null;
    }
    getState(points = [], toolParams = {}) {
        return {
            tool: {
                type: this.tool,
                params: Object.assign({}, toolParams)
            },
            color: this.color,
            zonesCount: this.zonesCount,
            isDrawMirrored: this.isDrawMirrored,
            strokeWidth: this.strokeWidth,
            smoothType: this.smoothType,
            points
        };
    }
    onChangeColor(color) {
        this.color = color;
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