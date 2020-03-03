function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"editor\">\n        <app-mandala-editor [fullScreen]=\"true\"></app-mandala-editor>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMandalaComponentsMandalaEditorMandalaEditorCanvasMandalaEditorCanvasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\"\n     [style.width]=\"width\"\n     [style.height]=\"height\">\n    <canvas id=\"canvas-draw\" #drawCanvas></canvas>\n    <canvas id=\"canvas-fill\" #fillCanvas></canvas>\n    <canvas id=\"canvas-zones\" appMandalaDrawZones #zonesCanvas></canvas>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMandalaComponentsMandalaEditorMandalaEditorColorpickerMandalaEditorColorpickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"colorpicker\">\n    <div #picker id=\"color-picker-container\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMandalaComponentsMandalaEditorMandalaEditorExportSvgMandalaEditorExportSvgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #container class=\"svg-container\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMandalaComponentsMandalaEditorMandalaEditorToolsMandalaEditorToolsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"undo-controls\">\n        <button \n            matTooltip=\"Undo\"\n            [disabled]=\"!hasUndo\"\n            mat-mini-fab\n            (click)=\"undo()\">\n            <mat-icon>undo</mat-icon>\n        </button>\n        <button \n            matTooltip=\"Redo\"\n            [disabled]=\"!hasRedo\"\n            mat-mini-fab\n            (click)=\"redo()\">\n            <mat-icon>redo</mat-icon>\n        </button>\n    </div>\n    <div class=\"tools\">\n        <div class=\"tools__item tools__item--zones\">\n            <button \n                matTooltip=\"Decrease Zones\"\n                mat-icon-button\n                (click)=\"decreaseZones()\">\n                <mat-icon>remove</mat-icon>\n            </button>\n            <span>{{zonesCount}}</span>\n            <button \n                matTooltip=\"Increase Zones\"\n                mat-icon-button\n                (click)=\"increaseZones()\">\n                <mat-icon>add</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Draw\"\n                mat-fab \n                [class.active]=\"isCurrentTool(TOOLS.DRAW_FREE)\"\n                (click)=\"enableTool(TOOLS.DRAW_FREE)\">\n                <mat-icon>gesture</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Line\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.DRAW_LINE)\"\n                [class.active]=\"isCurrentTool(TOOLS.DRAW_LINE)\">\n                <mat-icon>show_chart</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Draw with image\"\n                mat-fab \n                [class.active]=\"isCurrentTool(TOOLS.DRAW_IMAGE)\"\n                (click)=\"enableTool(TOOLS.DRAW_IMAGE)\">\n                <mat-icon>collections</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Background\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.FILL_BACKGROUND)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BACKGROUND)\">\n                <mat-icon>opacity</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                disabled\n                matTooltip=\"Fill Bucket\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.FILL_BUCKET)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BUCKET)\">\n                <mat-icon>filter_b_and_w</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Pipette\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.PIPETTE)\"\n                [class.active]=\"isCurrentTool(TOOLS.PIPETTE)\">\n                <mat-icon>colorize</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Clear All\"\n                mat-fab \n                (click)=\"clear()\">\n                <mat-icon> layers_clear</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button\n                matTooltip=\"to SVG\"\n                mat-fab \n                (click)=\"toSVG()\">\n                <mat-icon> cloud_download</mat-icon>\n            </button>\n        </div>\n    </div>\n    <div class=\"sub-tools\">\n        <div\n            *ngIf=\"!isCurrentTool(TOOLS.DRAW_IMAGE)\" \n            class=\"sub-tools__item sub-tools__item--color\">\n            <div class=\"color-preview\"\n                 matTooltip=\"Change Color\"\n                 [style.background-color]=\"color$ | async\"\n                 (click)=\"toggleColorpicker()\"></div>\n        </div>\n        <div \n            *ngIf=\"isDrawTool\"\n            class=\"sub-tools__item\">\n            <mat-checkbox \n                matTooltip=\"Mirror Draw\"\n                [(ngModel)]=\"isMirrorEnabled\">mirror</mat-checkbox>\n        </div>\n        <div *ngIf=\"isCurrentTool(TOOLS.DRAW_FREE)\"\n             class=\"sub-tools__item sub-tools__item--smooth-type\">\n            <mat-select [(value)]=\"smoothType\">\n                <mat-option \n                    *ngFor=\"let smoothType of smoothTypes\" \n                    [value]=\"smoothType.type\">\n                  {{smoothType.name}}\n                </mat-option>\n              </mat-select>\n        </div>\n        <div \n            *ngIf=\"isDrawWithStrokeTool\"\n            class=\"sub-tools__item sub-tools__item--stroke-width\">\n            <mat-slider\n                [min]=\"1\"\n                [max]=\"30\"\n                [step]=\"1\"\n                [thumbLabel]=\"true\"\n                [vertical]=\"true\"\n                [(ngModel)]=\"strokeWidth\">\n            </mat-slider>\n        </div>\n        <div \n            *ngIf=\"isCurrentTool(TOOLS.DRAW_IMAGE)\"\n            class=\"sub-tools__item sub-tools__item--images\">\n            <div \n                *ngFor=\"let image of drawImages\"\n                [class.active]=\"isCurrentImageDraw(image.url)\"\n                (click)=\"setDrawImage($event)\">\n                <object [attr.data]=\"image.safeUrl\" [attr.data-url]=\"image.url\" type=\"image/svg+xml\"></object>\n            </div>\n        </div>\n    </div>\n</div>\n<div\n    class=\"colorpicker\"\n    [class.visible]=\"isVisibleColorpicker\">\n    <button \n        (click)=\"toggleColorpicker()\"\n        class=\"colorpicker__close\"\n        mat-fab \n        color=\"accent\">\n        <mat-icon>clear</mat-icon>\n    </button>\n    <app-mandala-editor-colorpicker \n        [color]=\"color$ | async\"\n        (changeColor)=\"onChangeColor($event)\">\n    </app-mandala-editor-colorpicker>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMandalaComponentsMandalaEditorMandalaEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoaded\">\n    <app-mandala-editor-canvas [initState]=\"initState\"></app-mandala-editor-canvas>\n    <div \n        class=\"tools-container\"\n        [class.visible]=\"isVisibleTools\">\n        <app-mandala-editor-tools class=\"tools\"></app-mandala-editor-tools>\n        <div \n            class=\"toggle-tools\"\n            (click)=\"toggleTools()\">\n            <mat-icon>{{isVisibleTools ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}}</mat-icon>\n        </div>\n    </div>\n</div>\n<div\n    *ngIf=\"isEnabledLoader$ | async as loading\"\n    class=\"loader\">\n    <mat-spinner></mat-spinner>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  position: relative; }\n  .container .editor {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #eaeaea;\n    overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZWRpdG9yIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn0iXX0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mandala-app';
      this.size = {
        width: 800,
        height: 800
      };
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules */
    "./src/app/modules/index.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _modules__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"], _modules__WEBPACK_IMPORTED_MODULE_6__["MandalaModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}, {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modules/common/common.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/common/common.module.ts ***!
    \*************************************************/

  /*! exports provided: AppCommonModule */

  /***/
  function srcAppModulesCommonCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCommonModule", function () {
      return AppCommonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_reducers_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store/reducers/layout */
    "./src/app/modules/common/store/reducers/layout.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services */
    "./src/app/modules/common/services/index.ts");

    var AppCommonModule = function AppCommonModule() {
      _classCallCheck(this, AppCommonModule);
    };

    AppCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('common', {
        layout: _store_reducers_layout__WEBPACK_IMPORTED_MODULE_3__["reducer"]
      })],
      providers: [_services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]]
    })], AppCommonModule);
    /***/
  },

  /***/
  "./src/app/modules/common/services/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/common/services/index.ts ***!
    \**************************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppModulesCommonServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout.service */
    "./src/app/modules/common/services/layout.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return _layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"];
    });
    /***/

  },

  /***/
  "./src/app/modules/common/services/layout.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/common/services/layout.service.ts ***!
    \***********************************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppModulesCommonServicesLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/actions/layout.actions */
    "./src/app/modules/common/store/actions/layout.actions.ts");
    /* harmony import */


    var _store_selectors_layout_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/selectors/layout.selectors */
    "./src/app/modules/common/store/selectors/layout.selectors.ts");
    /* harmony import */


    var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store.service */
    "./src/app/modules/common/services/store.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var LayoutService =
    /*#__PURE__*/
    function (_store_service__WEBPA) {
      _inherits(LayoutService, _store_service__WEBPA);

      function LayoutService(store) {
        _classCallCheck(this, LayoutService);

        return _possibleConstructorReturn(this, _getPrototypeOf(LayoutService).call(this, store));
      }

      _createClass(LayoutService, [{
        key: "enableLoader",
        value: function enableLoader() {
          this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["enableLoader"]());
        }
      }, {
        key: "disableLoader",
        value: function disableLoader() {
          this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["disableLoader"]());
        }
      }, {
        key: "isEnabledLoader",
        value: function isEnabledLoader() {
          return this.select(_store_selectors_layout_selectors__WEBPACK_IMPORTED_MODULE_3__["isEnabledLoader"]);
        }
      }]);

      return LayoutService;
    }(_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]);

    LayoutService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }];
    };

    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LayoutService);
    /***/
  },

  /***/
  "./src/app/modules/common/services/store.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/common/services/store.service.ts ***!
    \**********************************************************/

  /*! exports provided: StoreService */

  /***/
  function srcAppModulesCommonServicesStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreService", function () {
      return StoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var StoreService =
    /*#__PURE__*/
    function () {
      function StoreService(store) {
        _classCallCheck(this, StoreService);

        this.store = store;
      }

      _createClass(StoreService, [{
        key: "dispatch",
        value: function dispatch(action) {
          this.store.dispatch(action);
        }
      }, {
        key: "select",
        value: function select(selector) {
          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(selector));
        }
      }]);

      return StoreService;
    }();
    /***/

  },

  /***/
  "./src/app/modules/common/store/actions/layout.actions.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/common/store/actions/layout.actions.ts ***!
    \****************************************************************/

  /*! exports provided: enableLoader, disableLoader */

  /***/
  function srcAppModulesCommonStoreActionsLayoutActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "enableLoader", function () {
      return enableLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "disableLoader", function () {
      return disableLoader;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var enableLoader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Enable Loader');
    var disableLoader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Disable Loader');
    /***/
  },

  /***/
  "./src/app/modules/common/store/reducers/layout.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/common/store/reducers/layout.ts ***!
    \*********************************************************/

  /*! exports provided: reducer */

  /***/
  function srcAppModulesCommonStoreReducersLayoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/layout.actions */
    "./src/app/modules/common/store/actions/layout.actions.ts");

    var initState = {
      isEnabledLoader: false
    };

    var updateProp = function updateProp(prop, status) {
      return function (state) {
        return Object.assign({}, state, _defineProperty({}, prop, status));
      };
    };

    var contentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["enableLoader"], updateProp('isEnabledLoader', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["disableLoader"], updateProp('isEnabledLoader', false)));

    function reducer(state, action) {
      return contentReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/modules/common/store/selectors/layout.selectors.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/common/store/selectors/layout.selectors.ts ***!
    \********************************************************************/

  /*! exports provided: isEnabledLoader */

  /***/
  function srcAppModulesCommonStoreSelectorsLayoutSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isEnabledLoader", function () {
      return isEnabledLoader;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectLayout = function selectLayout(state) {
      return state.common.layout;
    };

    var getSelector = function getSelector(prop) {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectLayout, function (state) {
        return state && state[prop];
      });
    };

    var isEnabledLoader = getSelector('isEnabledLoader');
    /***/
  },

  /***/
  "./src/app/modules/index.ts":
  /*!**********************************!*\
    !*** ./src/app/modules/index.ts ***!
    \**********************************/

  /*! exports provided: MandalaModule, AppCommonModule */

  /***/
  function srcAppModulesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mandala_mandala_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mandala/mandala.module */
    "./src/app/modules/mandala/mandala.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MandalaModule", function () {
      return _mandala_mandala_module__WEBPACK_IMPORTED_MODULE_1__["MandalaModule"];
    });
    /* harmony import */


    var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common/common.module */
    "./src/app/modules/common/common.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppCommonModule", function () {
      return _common_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"];
    });
    /***/

  },

  /***/
  "./src/app/modules/mandala/components/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/mandala/components/index.ts ***!
    \*****************************************************/

  /*! exports provided: MandalaEditorComponent, MandalaEditorCanvasComponent, MandalaEditorColorpickerComponent, MandalaEditorToolsComponent, MandalaEditorExportSvgComponent */

  /***/
  function srcAppModulesMandalaComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mandala_editor_mandala_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mandala-editor/mandala-editor.component */
    "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorComponent", function () {
      return _mandala_editor_mandala_editor_component__WEBPACK_IMPORTED_MODULE_1__["MandalaEditorComponent"];
    });
    /* harmony import */


    var _mandala_editor_mandala_editor_canvas_mandala_editor_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component */
    "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorCanvasComponent", function () {
      return _mandala_editor_mandala_editor_canvas_mandala_editor_canvas_component__WEBPACK_IMPORTED_MODULE_2__["MandalaEditorCanvasComponent"];
    });
    /* harmony import */


    var _mandala_editor_mandala_editor_colorpicker_mandala_editor_colorpicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component */
    "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorColorpickerComponent", function () {
      return _mandala_editor_mandala_editor_colorpicker_mandala_editor_colorpicker_component__WEBPACK_IMPORTED_MODULE_3__["MandalaEditorColorpickerComponent"];
    });
    /* harmony import */


    var _mandala_editor_mandala_editor_tools_mandala_editor_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mandala-editor/mandala-editor-tools/mandala-editor-tools.component */
    "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorToolsComponent", function () {
      return _mandala_editor_mandala_editor_tools_mandala_editor_tools_component__WEBPACK_IMPORTED_MODULE_4__["MandalaEditorToolsComponent"];
    });
    /* harmony import */


    var _mandala_editor_mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component */
    "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorExportSvgComponent", function () {
      return _mandala_editor_mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_5__["MandalaEditorExportSvgComponent"];
    });
    /***/

  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorCanvasMandalaEditorCanvasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.container {\n  position: relative;\n  margin: 0 auto; }\n\n#canvas-zones,\n#canvas-fill {\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1jYW52YXMvbWFuZGFsYS1lZGl0b3ItY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2xCOztFQUVJLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5kYWxhL2NvbXBvbmVudHMvbWFuZGFsYS1lZGl0b3IvbWFuZGFsYS1lZGl0b3ItY2FudmFzL21hbmRhbGEtZWRpdG9yLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuI2NhbnZhcy16b25lcyxcbiNjYW52YXMtZmlsbCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: MandalaEditorCanvasComponent */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorCanvasMandalaEditorCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorCanvasComponent", function () {
      return MandalaEditorCanvasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/tool.service */
    "./src/app/modules/mandala/services/tool.service.ts");
    /* harmony import */


    var _tools_draw_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../tools/draw.base */
    "./src/app/modules/mandala/tools/draw.base.ts");
    /* harmony import */


    var _tools_tap_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../tools/tap.base */
    "./src/app/modules/mandala/tools/tap.base.ts");
    /* harmony import */


    var src_app_modules_common_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modules/common/services */
    "./src/app/modules/common/services/index.ts");

    var MandalaEditorCanvasComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorCanvasComponent(editorService, layoutService, canvasService, toolService, undoService) {
        _classCallCheck(this, MandalaEditorCanvasComponent);

        this.editorService = editorService;
        this.layoutService = layoutService;
        this.canvasService = canvasService;
        this.toolService = toolService;
        this.undoService = undoService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(MandalaEditorCanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.editorService.getSize().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (size) {
            return _this.onChangeEditorSize(size);
          });
          this.canvasService.setZonesElement(this.zonesCanvas.nativeElement);
          this.canvasService.setFillElement(this.fillCanvas.nativeElement);
          this.canvasService.setDrawElement(this.drawCanvas.nativeElement);
          this.canvasService.updateCanvasesSize(this.size);
          this.initDraw().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function () {
            _this.editorService.inited();

            _this.undoService.clear();

            _this.editorService.getTool().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (tool) {
              return _this.toolService.createTool(tool);
            })).subscribe(function (tool) {
              if (_this.tool) {
                _this.tool.disable();
              }

              _this.tool = tool;

              _this.toolService.setCurrentTool(tool);

              tool.enable();
            });

            _this.layoutService.disableLoader();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "onChangeEditorSize",
        value: function onChangeEditorSize(size) {
          this.size = size;
          this.canvasService.updateCanvasesSize(this.size);
        }
      }, {
        key: "initDraw",
        value: function initDraw() {
          var _this2 = this;

          var drawSteps = [];

          var _loop = function _loop(key) {
            if (_this2.initState.hasOwnProperty(key)) {
              drawSteps.push(function () {
                var step = _this2.initState[key];

                _this2.editorService.setTool(step.tool);

                _this2.editorService.setColor(step.color);

                _this2.editorService.setStrokeWidth(step.strokeWidth);

                _this2.editorService.setZonesCount(step.zonesCount);

                if (step.isDrawMirrored) {
                  _this2.editorService.enableDrawMirrored();
                } else {
                  _this2.editorService.disableDrawMirrored();
                }

                return _this2.editorService.getTool().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (tool) {
                  return _this2.toolService.createTool(tool);
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tool) {
                  if (_this2.tool) {
                    _this2.tool.disable();
                  }

                  _this2.tool = tool;
                  _this2.tool.isEnabledTransform = false;
                  tool.enable();
                  step.points.forEach(function (point, index) {
                    if (tool instanceof _tools_draw_base__WEBPACK_IMPORTED_MODULE_6__["EditorDrawToolBase"]) {
                      if (index === 0) {
                        tool.drawStart(point);
                      } else {
                        tool.draw(point);
                      }
                    } else if (tool instanceof _tools_tap_base__WEBPACK_IMPORTED_MODULE_7__["EditorTapToolBase"]) {
                      tool.tap(point);
                    }
                  });

                  if (tool instanceof _tools_draw_base__WEBPACK_IMPORTED_MODULE_6__["EditorDrawToolBase"]) {
                    tool.drawEnd();
                  }

                  return tool;
                }));
              });
            }
          };

          for (var key in this.initState) {
            _loop(key);
          }

          return !drawSteps.length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"]).apply(void 0, _toConsumableArray(drawSteps.map(function (step) {
            return step();
          }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["last"])());
        }
      }, {
        key: "width",
        get: function get() {
          return "".concat(this.size.width, "px");
        }
      }, {
        key: "height",
        get: function get() {
          return "".concat(this.size.height, "px");
        }
      }]);

      return MandalaEditorCanvasComponent;
    }();

    MandalaEditorCanvasComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["EditorService"]
      }, {
        type: src_app_modules_common_services__WEBPACK_IMPORTED_MODULE_8__["LayoutService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["CanvasService"]
      }, {
        type: _services_tool_service__WEBPACK_IMPORTED_MODULE_5__["ToolService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UndoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MandalaEditorCanvasComponent.prototype, "initState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawCanvas', {
      static: true
    })], MandalaEditorCanvasComponent.prototype, "drawCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fillCanvas', {
      static: true
    })], MandalaEditorCanvasComponent.prototype, "fillCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('zonesCanvas', {
      static: true
    })], MandalaEditorCanvasComponent.prototype, "zonesCanvas", void 0);
    MandalaEditorCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mandala-editor-canvas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mandala-editor-canvas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mandala-editor-canvas.component.scss */
      "./src/app/modules/mandala/components/mandala-editor/mandala-editor-canvas/mandala-editor-canvas.component.scss")).default]
    })], MandalaEditorCanvasComponent);
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.scss ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorColorpickerMandalaEditorColorpickerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "canvas {\n  width: 500px;\n  height: 500px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.container {\n  position: relative;\n  width: 500px;\n  height: 500px; }\n\n#canvas-zones,\n#canvas-fill {\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBRVg7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7O0VBRUksb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci9tYW5kYWxhLWVkaXRvci1jb2xvcnBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4jY2FudmFzLXpvbmVzLFxuI2NhbnZhcy1maWxsIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: MandalaEditorColorpickerComponent */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorColorpickerMandalaEditorColorpickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorColorpickerComponent", function () {
      return MandalaEditorColorpickerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _jaames_iro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @jaames/iro */
    "./node_modules/@jaames/iro/dist/iro.es.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/modules/mandala/services/index.ts");

    var MandalaEditorColorpickerComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorColorpickerComponent(editorService) {
        _classCallCheck(this, MandalaEditorColorpickerComponent);

        this.editorService = editorService;
        this.changeColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MandalaEditorColorpickerComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.colorPicker = new _jaames_iro__WEBPACK_IMPORTED_MODULE_4__["default"].ColorPicker(this.picker.nativeElement, {
            width: 300,
            handleRadius: 12,
            sliderHeight: 30,
            color: this.color
          });
          this.colorPicker.on('color:change', function (color) {
            return _this3.changeColor.emit(color.rgbString);
          });
          this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (color) {
            return _this3.onChangeColor(color);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "onChangeColor",
        value: function onChangeColor(color) {
          if (this.colorPicker.color.rgbString !== color) {
            this.colorPicker.color.rgbString = color;
          }
        }
      }]);

      return MandalaEditorColorpickerComponent;
    }();

    MandalaEditorColorpickerComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_5__["EditorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MandalaEditorColorpickerComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MandalaEditorColorpickerComponent.prototype, "changeColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', {
      static: true
    })], MandalaEditorColorpickerComponent.prototype, "picker", void 0);
    MandalaEditorColorpickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mandala-editor-colorpicker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mandala-editor-colorpicker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mandala-editor-colorpicker.component.scss */
      "./src/app/modules/mandala/components/mandala-editor/mandala-editor-colorpicker/mandala-editor-colorpicker.component.scss")).default]
    })], MandalaEditorColorpickerComponent);
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.scss":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.scss ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorExportSvgMandalaEditorExportSvgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".svg-container /deep/ svg {\n  max-width: calc(100vw - 120px) !important;\n  max-height: calc(100vh - 120px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1leHBvcnQtc3ZnL21hbmRhbGEtZWRpdG9yLWV4cG9ydC1zdmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSx5Q0FBeUM7RUFDekMsMENBQTBDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci1leHBvcnQtc3ZnL21hbmRhbGEtZWRpdG9yLWV4cG9ydC1zdmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ZnLWNvbnRhaW5lciB7XG4gICAgL2RlZXAvIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDEyMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: MandalaEditorExportSvgComponent */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorExportSvgMandalaEditorExportSvgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorExportSvgComponent", function () {
      return MandalaEditorExportSvgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MandalaEditorExportSvgComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorExportSvgComponent() {
        _classCallCheck(this, MandalaEditorExportSvgComponent);
      }

      _createClass(MandalaEditorExportSvgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.container.nativeElement.innerHTML = this.svg;
        }
      }]);

      return MandalaEditorExportSvgComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MandalaEditorExportSvgComponent.prototype, "svg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', {
      static: true
    })], MandalaEditorExportSvgComponent.prototype, "container", void 0);
    MandalaEditorExportSvgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mandala-editor-export-svg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mandala-editor-export-svg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mandala-editor-export-svg.component.scss */
      "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.scss")).default]
    })], MandalaEditorExportSvgComponent);
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorToolsMandalaEditorToolsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.active {\n  background-color: #00bcd4;\n  color: white; }\n\nbutton:not(.active) {\n  background-color: white;\n  color: black; }\n\n.container {\n  display: -webkit-box;\n  display: flex; }\n\n.container .tools .tools__item {\n    margin-top: -3px; }\n\n.container .tools .tools__item--zones {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center;\n      border: 1px #cbcbcb dashed;\n      margin-bottom: 20px;\n      padding: 3px; }\n\n.container .tools .tools__item--zones button {\n        width: 15px;\n        height: 15px;\n        line-height: 15px; }\n\n.container .tools .tools__item--zones .mat-icon {\n        width: 15px;\n        height: 16px;\n        line-height: 15px;\n        font-size: 15px; }\n\n.container .sub-tools {\n    margin-left: 15px;\n    padding-left: 15px;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n\n.container .sub-tools::after {\n      content: ' ';\n      position: absolute;\n      width: 1px;\n      top: 40px;\n      bottom: 40px;\n      left: 0;\n      background: #e3dede; }\n\n.container .sub-tools__item {\n      margin-bottom: 15px; }\n\n.container .sub-tools__item--smooth-type {\n        width: 70px;\n        font-size: 13px; }\n\n.container .sub-tools__item--color .color-preview {\n        width: 70px;\n        height: 70px;\n        box-shadow: 0 0 5px grey;\n        border-radius: 3px;\n        cursor: pointer; }\n\n.container .sub-tools__item--stroke-width {\n        -webkit-box-flex: 1;\n                flex-grow: 1; }\n\n.container .sub-tools__item--stroke-width .mat-slider {\n          height: 100%; }\n\n.container .sub-tools__item--images .active {\n        border: 1px dashed #fb3939;\n        border-radius: 3px; }\n\n.container .sub-tools__item--images object {\n        width: 70px;\n        pointer-events: none; }\n\n.colorpicker {\n  display: block;\n  background: white;\n  padding: 20px;\n  box-shadow: 0 0 10px grey;\n  position: absolute;\n  top: 0px;\n  left: -350px;\n  bottom: 0px;\n  z-index: 2;\n  -webkit-transition: left 300ms;\n  transition: left 300ms; }\n\n.colorpicker.visible {\n    left: 0; }\n\n.colorpicker__close {\n    position: absolute;\n    right: -10px;\n    top: -10px; }\n\n.undo-controls {\n  position: absolute;\n  top: -28px;\n  left: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci10b29scy9tYW5kYWxhLWVkaXRvci10b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFEakI7SUFLWSxnQkFBZ0IsRUFBQTs7QUFMNUI7TUFRZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLDBCQUEwQjtNQUMxQixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBOztBQWI1QjtRQWdCb0IsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUIsRUFBQTs7QUFsQnJDO1FBcUJvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7O0FBeEJuQztJQStCUSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7O0FBcEM5QjtNQXVDWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1QsWUFBWTtNQUNaLE9BQU87TUFDUCxtQkFBbUIsRUFBQTs7QUE3Qy9CO01BaURZLG1CQUFtQixFQUFBOztBQWpEL0I7UUFtRGdCLFdBQVc7UUFDWCxlQUFlLEVBQUE7O0FBcEQvQjtRQXdEb0IsV0FBVztRQUNYLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLGVBQWUsRUFBQTs7QUE1RG5DO1FBZ0VnQixtQkFBWTtnQkFBWixZQUFZLEVBQUE7O0FBaEU1QjtVQW1Fb0IsWUFBWSxFQUFBOztBQW5FaEM7UUF3RW9CLDBCQUEwQjtRQUMxQixrQkFBa0IsRUFBQTs7QUF6RXRDO1FBNEVvQixXQUFXO1FBQ1gsb0JBQW9CLEVBQUE7O0FBT3hDO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsOEJBQXNCO0VBQXRCLHNCQUFzQixFQUFBOztBQVYxQjtJQVlRLE9BQU8sRUFBQTs7QUFHWDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVSxFQUFBOztBQUlsQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5kYWxhL2NvbXBvbmVudHMvbWFuZGFsYS1lZGl0b3IvbWFuZGFsYS1lZGl0b3ItdG9vbHMvbWFuZGFsYS1lZGl0b3ItdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICAudG9vbHMge1xuICAgICAgICAudG9vbHNfX2l0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcblxuICAgICAgICAgICAgJi0tem9uZXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggI2NiY2JjYiBkYXNoZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG5cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnN1Yi10b29scyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2RlZGU7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAmLS1zbW9vdGgtdHlwZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0tY29sb3Ige1xuICAgICAgICAgICAgICAgIC5jb2xvci1wcmV2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0tc3Ryb2tlLXdpZHRoIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgICAgICAgICAubWF0LXNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLS1pbWFnZXMge1xuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2ZiMzkzOTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3Qge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29sb3JwaWNrZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogLTM1MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAzMDBtcztcbiAgICAmLnZpc2libGUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICZfX2Nsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxufVxuXG4udW5kby1jb250cm9scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI4cHg7XG4gICAgbGVmdDogNjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: MandalaEditorToolsComponent */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorToolsMandalaEditorToolsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorToolsComponent", function () {
      return MandalaEditorToolsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");
    /* harmony import */


    var _mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../mandala-editor-export-svg/mandala-editor-export-svg.component */
    "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts");
    /* harmony import */


    var _enums_smooth_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../enums/smooth-types */
    "./src/app/modules/mandala/enums/smooth-types.ts");

    var MandalaEditorToolsComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorToolsComponent(editorService, canvasService, toolService, undoService, domSanitizer, dialog) {
        _classCallCheck(this, MandalaEditorToolsComponent);

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

      _createClass(MandalaEditorToolsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.drawImages = _enums_tools__WEBPACK_IMPORTED_MODULE_9__["DRAW_IMAGES"].map(function (image) {
            return {
              url: image,
              safeUrl: _this4.domSanitizer.bypassSecurityTrustResourceUrl(image)
            };
          });
          this.editorService.getTool().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (tool) {
            return _this4.tool = tool;
          });
          this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (isDrawMirrored) {
            return _this4.isDrawMirrored = isDrawMirrored;
          });
          this.editorService.getStrokeWidth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (strokeWidth) {
            return _this4.currentStrokeWidth = strokeWidth;
          });
          this.editorService.getSmoothType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (type) {
            return _this4.currentSmoothType = type;
          });
          this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (zonesCount) {
            return _this4.zonesCount = zonesCount;
          });
          this.color$ = this.editorService.getColor();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "isCurrentTool",
        value: function isCurrentTool(tool) {
          return this.tool && this.tool.type === tool;
        }
      }, {
        key: "isCurrentImageDraw",
        value: function isCurrentImageDraw(imagePath) {
          var tool = this.toolService.getCurrentTool() || {};
          return tool.toolParams && tool.toolParams.imagePath === imagePath;
        }
      }, {
        key: "enableTool",
        value: function enableTool(tool) {
          this.editorService.setTool({
            type: tool
          });
        }
      }, {
        key: "decreaseZones",
        value: function decreaseZones() {
          this.editorService.setZonesCount(this.zonesCount - 1);
        }
      }, {
        key: "increaseZones",
        value: function increaseZones() {
          this.editorService.setZonesCount(this.zonesCount + 1);
        }
      }, {
        key: "clear",
        value: function clear() {
          if (confirm('Are you sure?')) {
            paper__WEBPACK_IMPORTED_MODULE_6__["project"].activeLayer.remove();
            var drawLayer = new paper__WEBPACK_IMPORTED_MODULE_6__["Layer"]();
            drawLayer.activate();
            this.canvasService.clear();
            this.undoService.clear();
            this.editorService.updateSize(null);
            this.editorService.clearUserDrawSteps();
          }
        }
      }, {
        key: "toSVG",
        value: function toSVG() {
          var _this$canvasService$g = this.canvasService.getCanvasRect(),
              width = _this$canvasService$g.width,
              height = _this$canvasService$g.height;

          var size = new paper__WEBPACK_IMPORTED_MODULE_6__["Size"](width, height);
          var project = new paper__WEBPACK_IMPORTED_MODULE_6__["Project"](size);
          project.view.autoUpdate = false;
          var layerBg = this.canvasService.drawProject.layers[0].clone();
          project.addLayer(layerBg);
          var groups = this.canvasService.getExportPaperGroups();
          groups.forEach(function (group) {
            return project.activeLayer.addChild(group);
          });
          var svg = project.exportSVG({
            asString: true
          });
          project.remove();
          this.canvasService.drawProject.activate();
          var blob = new Blob([svg], {
            type: 'image/svg+xmltext/plain;charset=utf-8'
          });
          Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, "mandala-".concat(Date.now(), ".svg"));
        }
      }, {
        key: "openDialog",
        value: function openDialog(svg) {
          var dialogRef = this.dialog.open(_mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_10__["MandalaEditorExportSvgComponent"], {
            maxWidth: 'calc(100vw - 50px)',
            maxHeight: 'calc(100vh - 50px)'
          });
          dialogRef.componentInstance.svg = svg;
        }
      }, {
        key: "onChangeColor",
        value: function onChangeColor(color) {
          this.editorService.setColor(color);
        }
      }, {
        key: "toggleColorpicker",
        value: function toggleColorpicker() {
          this.isVisibleColorpicker = !this.isVisibleColorpicker;
        }
      }, {
        key: "undo",
        value: function undo() {
          this.undoService.undo();
        }
      }, {
        key: "redo",
        value: function redo() {
          this.undoService.redo();
        }
      }, {
        key: "setDrawImage",
        value: function setDrawImage(_ref) {
          var target = _ref.target;
          var objElement = target.firstElementChild;
          var imgPath = objElement.dataset.url;
          var svg = objElement.contentDocument.firstElementChild;
          var tool = this.toolService.getCurrentTool();
          tool.setDrawImage(svg, imgPath);
        }
      }, {
        key: "isDrawTool",
        get: function get() {
          return this.tool && [_enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_FREE, _enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_LINE, _enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_IMAGE].includes(this.tool.type);
        }
      }, {
        key: "isDrawWithStrokeTool",
        get: function get() {
          return this.tool && [_enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_FREE, _enums_tools__WEBPACK_IMPORTED_MODULE_9__["TOOLS"].DRAW_LINE].includes(this.tool.type);
        }
      }, {
        key: "isMirrorEnabled",
        get: function get() {
          return this.isDrawMirrored;
        },
        set: function set(state) {
          if (state) {
            this.editorService.enableDrawMirrored();
          } else {
            this.editorService.disableDrawMirrored();
          }
        }
      }, {
        key: "smoothType",
        get: function get() {
          return this.currentSmoothType;
        },
        set: function set(type) {
          this.editorService.setSmoothType(type);
        }
      }, {
        key: "strokeWidth",
        get: function get() {
          return this.currentStrokeWidth;
        },
        set: function set(width) {
          this.editorService.setStrokeWidth(width);
        }
      }, {
        key: "hasUndo",
        get: function get() {
          return this.undoService.hasUndo();
        }
      }, {
        key: "hasRedo",
        get: function get() {
          return this.undoService.hasRedo();
        }
      }]);

      return MandalaEditorToolsComponent;
    }();

    MandalaEditorToolsComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_8__["EditorService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_8__["CanvasService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_8__["ToolService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_8__["UndoService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    MandalaEditorToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mandala-editor-tools',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mandala-editor-tools.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mandala-editor-tools.component.scss */
      "./src/app/modules/mandala/components/mandala-editor/mandala-editor-tools/mandala-editor-tools.component.scss")).default]
    })], MandalaEditorToolsComponent);
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tools-container {\n  display: block;\n  background: white;\n  position: fixed;\n  top: 40px;\n  left: -198px;\n  -webkit-transition: left 300ms;\n  transition: left 300ms; }\n  .tools-container.visible {\n    left: -1px; }\n  .tools-container .tools {\n    display: block;\n    padding: 20px;\n    box-shadow: 0 0 10px grey;\n    position: relative;\n    z-index: 2;\n    background: white; }\n  .tools-container .toggle-tools {\n    position: absolute;\n    right: -47px;\n    top: 30px;\n    background: #b24f47;\n    color: white;\n    padding: 9px;\n    box-shadow: 0 0 4px grey;\n    border-radius: 3px;\n    z-index: 1;\n    cursor: pointer; }\n  .tools-container .toggle-tools .mat-icon {\n      font-size: 35px;\n      line-height: 35px;\n      width: 35px;\n      height: 35px; }\n  .loader {\n  right: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 3;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osOEJBQXNCO0VBQXRCLHNCQUFzQixFQUFBO0VBTjFCO0lBUVEsVUFBVSxFQUFBO0VBUmxCO0lBV1EsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQWhCekI7SUFtQlEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZSxFQUFBO0VBNUJ2QjtNQStCWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFLeEI7RUFDSSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29scy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwcHg7XG4gICAgbGVmdDogLTE5OHB4O1xuICAgIHRyYW5zaXRpb246IGxlZnQgMzAwbXM7XG4gICAgJi52aXNpYmxlIHtcbiAgICAgICAgbGVmdDogLTFweDtcbiAgICB9XG4gICAgLnRvb2xzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIC50b2dnbGUtdG9vbHMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtNDdweDtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjI0ZjQ3O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCBncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvYWRlciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: MandalaEditorComponent */

  /***/
  function srcAppModulesMandalaComponentsMandalaEditorMandalaEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandalaEditorComponent", function () {
      return MandalaEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var _common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../common/services */
    "./src/app/modules/common/services/index.ts");

    var MandalaEditorComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorComponent(undoService, idbService, editorService, layoutService) {
        _classCallCheck(this, MandalaEditorComponent);

        this.undoService = undoService;
        this.idbService = idbService;
        this.editorService = editorService;
        this.layoutService = layoutService;
        this.isVisibleTools = false;
        this.isLoaded = false;
      }

      _createClass(MandalaEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          paper__WEBPACK_IMPORTED_MODULE_2__["settings"].handleSize = 10;
          paper__WEBPACK_IMPORTED_MODULE_2__["settings"].hitTolerance = 10;
          this.isEnabledLoader$ = this.layoutService.isEnabledLoader();
          this.layoutService.enableLoader();
          this.undoService.enable();
          this.editorService.getSize().pipe().subscribe(function (size) {
            if (!size) {
              _this5.isLoaded = false;
              _this5.size = null;
              setTimeout(function () {
                return _this5.initEditor();
              }, 1000);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.undoService.disable();
        }
      }, {
        key: "toggleTools",
        value: function toggleTools() {
          this.isVisibleTools = !this.isVisibleTools;
        }
      }, {
        key: "initEditor",
        value: function initEditor() {
          var _this6 = this;

          this.isLoaded = false;
          this.fullScreenSize = {
            width: window.innerWidth,
            height: window.innerHeight
          };
          this.idbService.getUserDrawState('current-state').then(function (state) {
            _this6.initState = state.steps;

            if (state.size) {
              _this6.size = state.size;
            } else {
              state.size = _this6.canvasSize;

              _this6.idbService.saveUserDrawState('current-state', state);
            }

            _this6.editorService.updateSize(_this6.canvasSize);

            _this6.isLoaded = true;
          });
        }
      }, {
        key: "canvasSize",
        get: function get() {
          return this.fullScreen && !this.size ? this.fullScreenSize : this.size;
        }
      }]);

      return MandalaEditorComponent;
    }();

    MandalaEditorComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UndoService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["IdbService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["EditorService"]
      }, {
        type: _common_services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MandalaEditorComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MandalaEditorComponent.prototype, "fullScreen", void 0);
    MandalaEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mandala-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mandala-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mandala-editor.component.scss */
      "./src/app/modules/mandala/components/mandala-editor/mandala-editor.component.scss")).default]
    })], MandalaEditorComponent);
    /***/
  },

  /***/
  "./src/app/modules/mandala/directives/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/mandala/directives/index.ts ***!
    \*****************************************************/

  /*! exports provided: MandalaDrawZonesDirective */

  /***/
  function srcAppModulesMandalaDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mandala_draw_zones_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mandala-draw-zones.directive */
    "./src/app/modules/mandala/directives/mandala-draw-zones.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MandalaDrawZonesDirective", function () {
      return _mandala_draw_zones_directive__WEBPACK_IMPORTED_MODULE_1__["MandalaDrawZonesDirective"];
    });
    /***/

  },

  /***/
  "./src/app/modules/mandala/directives/mandala-draw-zones.directive.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/mandala/directives/mandala-draw-zones.directive.ts ***!
    \****************************************************************************/

  /*! exports provided: MandalaDrawZonesDirective */

  /***/
  function srcAppModulesMandalaDirectivesMandalaDrawZonesDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandalaDrawZonesDirective", function () {
      return MandalaDrawZonesDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services */
    "./src/app/modules/mandala/services/index.ts");

    var MandalaDrawZonesDirective =
    /*#__PURE__*/
    function () {
      function MandalaDrawZonesDirective(editorService, canvasService, el) {
        _classCallCheck(this, MandalaDrawZonesDirective);

        this.editorService = editorService;
        this.canvasService = canvasService;
        this.el = el;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MandalaDrawZonesDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.ctx = this.el.nativeElement.getContext('2d');
          this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (zonesCount) {
            return _this7.onChangeZonesCount(zonesCount);
          });
          this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (isDrawMirrored) {
            return _this7.onChangeIsDrawMirrored(isDrawMirrored);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "onChangeZonesCount",
        value: function onChangeZonesCount(zonesCount) {
          this.zonesCount = zonesCount;
          this.redrawZones();
        }
      }, {
        key: "onChangeIsDrawMirrored",
        value: function onChangeIsDrawMirrored(isDrawMirrored) {
          this.isDrawMirrored = isDrawMirrored;
          this.redrawZones();
        }
      }, {
        key: "redrawZones",
        value: function redrawZones() {
          var _this$canvasService$g2 = this.canvasService.getCanvasSize(),
              width = _this$canvasService$g2.width,
              height = _this$canvasService$g2.height;

          this.ctx.clearRect(0, 0, width, height);
          var x = width / 2;
          var y = height / 2;
          this.drawCenterCircle(x, y);

          if (this.zonesCount > 1) {
            var length = Math.sqrt(width * width + height * height);
            var step = 360 / this.zonesCount;

            for (var i = 0; i < this.zonesCount; i++) {
              var angle = 0 + i * step;
              var line = this.calcEndPoint(x, y, length, angle);
              this.drawAngledLine(x, y, line.x, line.y);

              if (this.isDrawMirrored) {
                var mirrorAngle = angle + step / 2;
                var mirrorLine = this.calcEndPoint(x, y, length, mirrorAngle);
                this.drawAngledLine(x, y, mirrorLine.x, mirrorLine.y, [3, 30]);
              }
            }
          }
        }
      }, {
        key: "calcEndPoint",
        value: function calcEndPoint(x, y, length, angle) {
          var radians = angle / 180 * Math.PI;
          return {
            x: x + length * Math.cos(radians),
            y: y - length * Math.sin(radians)
          };
        }
      }, {
        key: "drawCenterCircle",
        value: function drawCenterCircle(x, y) {
          var lineWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
          var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'grey';
          this.ctx.beginPath();
          this.ctx.fillStyle = color;
          this.ctx.strokeStyle = color;
          this.ctx.setLineDash([]);
          this.ctx.arc(x, y, lineWidth, 0, 2 * Math.PI);
          this.ctx.fill();
        }
      }, {
        key: "drawAngledLine",
        value: function drawAngledLine(startX, startY, endX, endY) {
          var dashSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [5, 15];
          var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'grey';
          this.ctx.beginPath();
          this.ctx.strokeStyle = color;
          this.ctx.setLineDash(dashSize);
          this.ctx.moveTo(startX, startY);
          this.ctx.lineTo(endX, endY);
          this.ctx.closePath();
          this.ctx.stroke();
        }
      }]);

      return MandalaDrawZonesDirective;
    }();

    MandalaDrawZonesDirective.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_4__["EditorService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["CanvasService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    MandalaDrawZonesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appMandalaDrawZones]'
    })], MandalaDrawZonesDirective);
    /***/
  },

  /***/
  "./src/app/modules/mandala/enums/smooth-types.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/mandala/enums/smooth-types.ts ***!
    \*******************************************************/

  /*! exports provided: SMOOTH_TYPES, smoothTypesList */

  /***/
  function srcAppModulesMandalaEnumsSmoothTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SMOOTH_TYPES", function () {
      return SMOOTH_TYPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "smoothTypesList", function () {
      return smoothTypesList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SMOOTH_TYPES;

    (function (SMOOTH_TYPES) {
      SMOOTH_TYPES[SMOOTH_TYPES["WITHOUT_SMOOTH"] = 0] = "WITHOUT_SMOOTH";
      SMOOTH_TYPES[SMOOTH_TYPES["LIGHT_SMOOTH"] = 1] = "LIGHT_SMOOTH";
      SMOOTH_TYPES[SMOOTH_TYPES["HARD_SMOOTH"] = 2] = "HARD_SMOOTH";
    })(SMOOTH_TYPES || (SMOOTH_TYPES = {}));

    var smoothTypesList = [{
      type: SMOOTH_TYPES.WITHOUT_SMOOTH,
      name: 'Without smooth'
    }, {
      type: SMOOTH_TYPES.LIGHT_SMOOTH,
      name: 'Light smooth'
    }, {
      type: SMOOTH_TYPES.HARD_SMOOTH,
      name: 'Hard smooth'
    }];
    /***/
  },

  /***/
  "./src/app/modules/mandala/enums/tools.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/mandala/enums/tools.ts ***!
    \************************************************/

  /*! exports provided: TOOLS, DRAW_IMAGES */

  /***/
  function srcAppModulesMandalaEnumsToolsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOOLS", function () {
      return TOOLS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DRAW_IMAGES", function () {
      return DRAW_IMAGES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TOOLS;

    (function (TOOLS) {
      TOOLS[TOOLS["DRAW_FREE"] = 0] = "DRAW_FREE";
      TOOLS[TOOLS["DRAW_LINE"] = 1] = "DRAW_LINE";
      TOOLS[TOOLS["DRAW_IMAGE"] = 2] = "DRAW_IMAGE";
      TOOLS[TOOLS["FILL_BACKGROUND"] = 3] = "FILL_BACKGROUND";
      TOOLS[TOOLS["FILL_BUCKET"] = 4] = "FILL_BUCKET";
      TOOLS[TOOLS["PIPETTE"] = 5] = "PIPETTE";
    })(TOOLS || (TOOLS = {}));

    var DRAW_IMAGES = ['/assets/circle.svg', '/assets/test.svg', '/assets/skull.svg'];
    /***/
  },

  /***/
  "./src/app/modules/mandala/helpers/flood-fill.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/mandala/helpers/flood-fill.ts ***!
    \*******************************************************/

  /*! exports provided: floodFill */

  /***/
  function srcAppModulesMandalaHelpersFloodFillTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "floodFill", function () {
      return floodFill;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var floodFill = function floodFill(x, y) {
      console.log('flood fill: ', x, y);
    };
    /***/

  },

  /***/
  "./src/app/modules/mandala/mandala.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/mandala/mandala.module.ts ***!
    \***************************************************/

  /*! exports provided: MandalaModule */

  /***/
  function srcAppModulesMandalaMandalaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandalaModule", function () {
      return MandalaModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/common.module */
    "./src/app/modules/common/common.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components */
    "./src/app/modules/mandala/components/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./directives */
    "./src/app/modules/mandala/directives/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./store/reducers/editor.reducer */
    "./src/app/modules/mandala/store/reducers/editor.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _store_effects_editor_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./store/effects/editor.effects */
    "./src/app/modules/mandala/store/effects/editor.effects.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MandalaModule = function MandalaModule() {
      _classCallCheck(this, MandalaModule);
    };

    MandalaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [_components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorExportSvgComponent"]],
      declarations: [_components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorComponent"], _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorCanvasComponent"], _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorColorpickerComponent"], _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorToolsComponent"], _components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorExportSvgComponent"], _directives__WEBPACK_IMPORTED_MODULE_16__["MandalaDrawZonesDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('mandala', {
        editor: _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsModule"].forFeature([_store_effects_editor_effects__WEBPACK_IMPORTED_MODULE_20__["EditorEffects"]])],
      exports: [_components__WEBPACK_IMPORTED_MODULE_15__["MandalaEditorComponent"]],
      providers: [_services__WEBPACK_IMPORTED_MODULE_17__["UndoService"], _services__WEBPACK_IMPORTED_MODULE_17__["EditorService"], _services__WEBPACK_IMPORTED_MODULE_17__["ToolService"], _services__WEBPACK_IMPORTED_MODULE_17__["CanvasService"], _services__WEBPACK_IMPORTED_MODULE_17__["IdbService"]]
    })], MandalaModule);
    /***/
  },

  /***/
  "./src/app/modules/mandala/services/canvas.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/mandala/services/canvas.service.ts ***!
    \************************************************************/

  /*! exports provided: CanvasService */

  /***/
  function srcAppModulesMandalaServicesCanvasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasService", function () {
      return CanvasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);

    var CanvasService =
    /*#__PURE__*/
    function () {
      function CanvasService() {
        _classCallCheck(this, CanvasService);

        this.exportPaperGroups = new Map();
        this.cachedPaperGroups = new Map();
        this.cachedPaperRasterizedGroups = new Map();
      }

      _createClass(CanvasService, [{
        key: "clear",
        value: function clear() {
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
      }, {
        key: "setZonesElement",
        value: function setZonesElement(zonesElement) {
          this.zonesProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](zonesElement);
          this.zonesProject.view.autoUpdate = false;
        }
      }, {
        key: "setDrawElement",
        value: function setDrawElement(drawElement) {
          this.drawElement = drawElement;
          this.drawProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](drawElement);
          this.drawProject.view.autoUpdate = false;
          this.addBackgroundRect('white');
          this.drawProject.view.update();
        }
      }, {
        key: "getDrawElement",
        value: function getDrawElement() {
          return this.drawElement;
        }
      }, {
        key: "setFillElement",
        value: function setFillElement(fillElement) {
          this.fillElement = fillElement;
          this.fillProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](fillElement);
          this.fillProject.view.autoUpdate = false;
        }
      }, {
        key: "getFillElement",
        value: function getFillElement() {
          return this.fillElement;
        }
      }, {
        key: "getCanvasSize",
        value: function getCanvasSize() {
          return this.size;
        }
      }, {
        key: "updateCanvasesSize",
        value: function updateCanvasesSize(size) {
          this.size = size;

          if (size) {
            var canvases = [this.fillProject, this.drawProject, this.zonesProject];
            canvases.forEach(function (project) {
              if (project) {
                project.view.viewSize = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](size.width, size.height);
              }
            });
          }
        }
      }, {
        key: "getCanvasRect",
        value: function getCanvasRect(useCachedCanvasRect) {
          if (useCachedCanvasRect && this.cachedCanvasRect) {
            return this.cachedCanvasRect;
          }

          this.cachedCanvasRect = this.drawElement.getBoundingClientRect();
          return this.cachedCanvasRect;
        }
      }, {
        key: "normalizePoint",
        value: function normalizePoint(point, useCachedCanvasRect) {
          var rect = this.getCanvasRect(useCachedCanvasRect);
          return {
            x: point.x - rect.left,
            y: point.y - rect.top
          };
        }
      }, {
        key: "addPaperItems",
        value: function addPaperItems(drawStepKey, items, exportItems) {
          var group = new paper__WEBPACK_IMPORTED_MODULE_2__["Group"](items);
          var rasterize = group.rasterize();
          rasterize.remove();
          group.remove();
          this.cachedPaperGroups.set(drawStepKey, group);
          this.cachedPaperRasterizedGroups.set(group, rasterize);
          this.fillProject.activeLayer.addChild(rasterize);
          this.fillProject.view.update();
          this.drawProject.view.update();
          var exportGroup = new paper__WEBPACK_IMPORTED_MODULE_2__["Group"](exportItems);
          this.exportPaperGroups.set(drawStepKey, exportGroup);
        }
      }, {
        key: "removePaperItems",
        value: function removePaperItems(drawStepKey) {
          var group = this.cachedPaperGroups.get(drawStepKey);
          var rasterize = this.cachedPaperRasterizedGroups.get(group);
          this.cachedPaperRasterizedGroups.delete(group);
          this.cachedPaperGroups.delete(drawStepKey);
          this.exportPaperGroups.delete(drawStepKey);
          group.remove();
          rasterize.remove();
          this.fillProject.view.update();
          this.drawProject.view.update();
          console.log('this.fillProject: ', this.fillProject);
        }
      }, {
        key: "getExportPaperGroups",
        value: function getExportPaperGroups() {
          return this.exportPaperGroups;
        }
      }, {
        key: "addBackgroundRect",
        value: function addBackgroundRect(color) {
          var startRect = this.createPoint(0, 0);
          var rectSize = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](this.size.width, this.size.height);
          var baseLayer = new paper__WEBPACK_IMPORTED_MODULE_2__["Layer"]();
          baseLayer.activate();
          this.backgroundRect = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Rectangle(startRect, rectSize);
          this.backgroundRect.fillColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](color);
          var drawLayer = new paper__WEBPACK_IMPORTED_MODULE_2__["Layer"]();
          drawLayer.activate();
        }
      }, {
        key: "createPoint",
        value: function createPoint(x, y) {
          return new paper__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y);
        }
      }]);

      return CanvasService;
    }();

    CanvasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CanvasService);
    /***/
  },

  /***/
  "./src/app/modules/mandala/services/editor.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/mandala/services/editor.service.ts ***!
    \************************************************************/

  /*! exports provided: EditorService */

  /***/
  function srcAppModulesMandalaServicesEditorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorService", function () {
      return EditorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/actions/editor.actions */
    "./src/app/modules/mandala/store/actions/editor.actions.ts");
    /* harmony import */


    var _store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/selectors/editor.selectors */
    "./src/app/modules/mandala/store/selectors/editor.selectors.ts");
    /* harmony import */


    var _common_services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../common/services/store.service */
    "./src/app/modules/common/services/store.service.ts");

    var MIN_ZONES_COUNT = 1;
    var MAX_ZONES_COUNT = 30;

    var EditorService =
    /*#__PURE__*/
    function (_common_services_stor) {
      _inherits(EditorService, _common_services_stor);

      function EditorService(store) {
        _classCallCheck(this, EditorService);

        return _possibleConstructorReturn(this, _getPrototypeOf(EditorService).call(this, store));
      }

      _createClass(EditorService, [{
        key: "inited",
        value: function inited() {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["inited"]({
            init: true
          }));
        }
      }, {
        key: "getDrawState",
        value: function getDrawState() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["editorState"]);
        }
      }, {
        key: "setZonesCount",
        value: function setZonesCount(count) {
          var zonesCount = Math.min(MAX_ZONES_COUNT, Math.max(MIN_ZONES_COUNT, count));
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["zonesCount"]({
            zonesCount: zonesCount
          }));
        }
      }, {
        key: "getZonesCount",
        value: function getZonesCount() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["zonesCount"]);
        }
      }, {
        key: "setTool",
        value: function setTool(tool) {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["tool"]({
            tool: tool
          }));
        }
      }, {
        key: "getTool",
        value: function getTool() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["tool"]);
        }
      }, {
        key: "enableDrawMirrored",
        value: function enableDrawMirrored() {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["enableDrawMirrored"]());
        }
      }, {
        key: "disableDrawMirrored",
        value: function disableDrawMirrored() {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["disableDrawMirrored"]());
        }
      }, {
        key: "isDrawMirrored",
        value: function isDrawMirrored() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["isDrawMirrored"]);
        }
      }, {
        key: "setStrokeWidth",
        value: function setStrokeWidth(strokeWidth) {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["strokeWidth"]({
            strokeWidth: strokeWidth
          }));
        }
      }, {
        key: "getStrokeWidth",
        value: function getStrokeWidth() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["strokeWidth"]);
        }
      }, {
        key: "setSmoothType",
        value: function setSmoothType(smoothType) {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["smoothType"]({
            smoothType: smoothType
          }));
        }
      }, {
        key: "getSmoothType",
        value: function getSmoothType() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["smoothType"]);
        }
      }, {
        key: "setColor",
        value: function setColor(color) {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["color"]({
            color: color
          }));
        }
      }, {
        key: "getColor",
        value: function getColor() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["color"]);
        }
      }, {
        key: "addUserDrawStep",
        value: function addUserDrawStep(step) {
          var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["addUserdDrawStep"]({
            step: step,
            key: key
          }));
          return key;
        }
      }, {
        key: "removeUserDrawStep",
        value: function removeUserDrawStep(key) {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["removeUserdDrawStep"]({
            key: key
          }));
        }
      }, {
        key: "clearUserDrawSteps",
        value: function clearUserDrawSteps() {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["clearUserdDrawSteps"]());
        }
      }, {
        key: "updateSize",
        value: function updateSize(size) {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["updateCanvasSize"]({
            size: size
          }));
        }
      }, {
        key: "getSize",
        value: function getSize() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["size"]);
        }
      }]);

      return EditorService;
    }(_common_services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]);

    EditorService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EditorService);
    /***/
  },

  /***/
  "./src/app/modules/mandala/services/idb.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/mandala/services/idb.service.ts ***!
    \*********************************************************/

  /*! exports provided: IdbService */

  /***/
  function srcAppModulesMandalaServicesIdbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdbService", function () {
      return IdbService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! idb */
    "./node_modules/idb/build/esm/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var IDB_USER_DRAW_KEY = 'user-draw';

    var IdbService =
    /*#__PURE__*/
    function () {
      function IdbService(platformId) {
        _classCallCheck(this, IdbService);

        this.idb = idb__WEBPACK_IMPORTED_MODULE_2__;

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(platformId)) {
          this.connectToIDB();
        }
      }

      _createClass(IdbService, [{
        key: "connectToIDB",
        value: function connectToIDB() {
          this.dbPromise = this.idb.openDB('mandala-app', 1.0, {
            upgrade: function upgrade(db) {
              if (!db.objectStoreNames.contains(IDB_USER_DRAW_KEY)) {
                db.createObjectStore(IDB_USER_DRAW_KEY);
              }
            }
          });
        }
      }, {
        key: "saveUserDrawState",
        value: function saveUserDrawState(key, state) {
          return this.dbPromise.then(function (db) {
            return db.put(IDB_USER_DRAW_KEY, state, key);
          });
        }
      }, {
        key: "getUserDrawState",
        value: function getUserDrawState(key) {
          return this.dbPromise.then(function (db) {
            return db.get(IDB_USER_DRAW_KEY, key).then(function (res) {
              return res || {};
            });
          });
        }
      }, {
        key: "clearUserDrawState",
        value: function clearUserDrawState(key) {
          return this.dbPromise.then(function (db) {
            return db.delete(IDB_USER_DRAW_KEY, key);
          });
        }
      }]);

      return IdbService;
    }();

    IdbService.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    IdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], IdbService);
    /***/
  },

  /***/
  "./src/app/modules/mandala/services/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/mandala/services/index.ts ***!
    \***************************************************/

  /*! exports provided: UndoService, EditorService, CanvasService, ToolService, IdbService */

  /***/
  function srcAppModulesMandalaServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _undo_undo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./undo/undo.service */
    "./src/app/modules/mandala/services/undo/undo.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UndoService", function () {
      return _undo_undo_service__WEBPACK_IMPORTED_MODULE_1__["UndoService"];
    });
    /* harmony import */


    var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./editor.service */
    "./src/app/modules/mandala/services/editor.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EditorService", function () {
      return _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"];
    });
    /* harmony import */


    var _canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./canvas.service */
    "./src/app/modules/mandala/services/canvas.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CanvasService", function () {
      return _canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"];
    });
    /* harmony import */


    var _tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tool.service */
    "./src/app/modules/mandala/services/tool.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToolService", function () {
      return _tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"];
    });
    /* harmony import */


    var _idb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./idb.service */
    "./src/app/modules/mandala/services/idb.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdbService", function () {
      return _idb_service__WEBPACK_IMPORTED_MODULE_5__["IdbService"];
    });
    /***/

  },

  /***/
  "./src/app/modules/mandala/services/tool.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/mandala/services/tool.service.ts ***!
    \**********************************************************/

  /*! exports provided: ToolService */

  /***/
  function srcAppModulesMandalaServicesToolServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolService", function () {
      return ToolService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");
    /* harmony import */


    var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editor.service */
    "./src/app/modules/mandala/services/editor.service.ts");
    /* harmony import */


    var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tools */
    "./src/app/modules/mandala/tools/index.ts");
    /* harmony import */


    var _undo_undo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./undo/undo.service */
    "./src/app/modules/mandala/services/undo/undo.service.ts");
    /* harmony import */


    var _canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./canvas.service */
    "./src/app/modules/mandala/services/canvas.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ToolService =
    /*#__PURE__*/
    function () {
      function ToolService(editorService, canvasService, undoService, http) {
        _classCallCheck(this, ToolService);

        this.editorService = editorService;
        this.canvasService = canvasService;
        this.undoService = undoService;
        this.http = http;
      }

      _createClass(ToolService, [{
        key: "createTool",
        value: function createTool(tool) {
          var _this8 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (observer) {
            switch (tool.type) {
              case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_FREE:
                observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawFreeTool"](_this8.canvasService, _this8.editorService, _this8.undoService));
                break;

              case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_LINE:
                observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawLineTool"](_this8.canvasService, _this8.editorService, _this8.undoService));
                break;

              case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].DRAW_IMAGE:
                var imagePath = tool.params && tool.params.imagePath ? tool.params.imagePath : _enums_tools__WEBPACK_IMPORTED_MODULE_2__["DRAW_IMAGES"][0];
                var responseType = 'text';
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]();
                headers.set('Accept', 'image/svg+xml');

                _this8.http.get(imagePath, {
                  headers: headers,
                  responseType: responseType
                }).subscribe(function (data) {
                  var imageDrawTool = new _tools__WEBPACK_IMPORTED_MODULE_4__["DrawImageTool"](_this8.canvasService, _this8.editorService, _this8.undoService);
                  imageDrawTool.setDrawImage(data, imagePath);
                  observer.next(imageDrawTool);
                  observer.complete();
                });

                return;

              case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].FILL_BACKGROUND:
                observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["FillBackgroundTool"](_this8.canvasService, _this8.editorService, _this8.undoService));
                break;

              case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].FILL_BUCKET:
                observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["FillBucketTool"](_this8.canvasService, _this8.editorService, _this8.undoService));
                break;

              case _enums_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS"].PIPETTE:
                observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["PipetteTool"](_this8.canvasService, _this8.editorService, _this8.undoService));
                break;
            }

            observer.complete();
          });
        }
      }, {
        key: "getCurrentTool",
        value: function getCurrentTool() {
          return this.currentTool;
        }
      }, {
        key: "setCurrentTool",
        value: function setCurrentTool(tool) {
          this.currentTool = tool;
        }
      }]);

      return ToolService;
    }();

    ToolService.ctorParameters = function () {
      return [{
        type: _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"]
      }, {
        type: _canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"]
      }, {
        type: _undo_undo_service__WEBPACK_IMPORTED_MODULE_5__["UndoService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }];
    };

    ToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ToolService);
    /***/
  },

  /***/
  "./src/app/modules/mandala/services/undo/undo-stack-item.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/mandala/services/undo/undo-stack-item.ts ***!
    \******************************************************************/

  /*! exports provided: UndoStackItem */

  /***/
  function srcAppModulesMandalaServicesUndoUndoStackItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UndoStackItem", function () {
      return UndoStackItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UndoStackItem =
    /*#__PURE__*/
    function () {
      function UndoStackItem() {
        _classCallCheck(this, UndoStackItem);

        this.commands = [];
      }

      _createClass(UndoStackItem, [{
        key: "add",
        value: function add(redo, undo) {
          this.commands.push({
            redo: redo,
            undo: undo
          });
        }
      }, {
        key: "undo",
        value: function undo() {
          for (var index = this.commands.length - 1; index >= 0; index--) {
            var command = this.commands[index];
            command.undo();
          }
        }
      }, {
        key: "redo",
        value: function redo() {
          for (var index = 0, length = this.commands.length; index < length; index++) {
            var command = this.commands[index];
            command.redo();
          }
        }
      }], [{
        key: "createUndoStackItem",
        value: function createUndoStackItem(_ref2) {
          var redo = _ref2.redo,
              undo = _ref2.undo;
          var undoStackItem = new UndoStackItem();
          undoStackItem.add(redo, undo);
          return undoStackItem;
        }
      }]);

      return UndoStackItem;
    }();
    /***/

  },

  /***/
  "./src/app/modules/mandala/services/undo/undo.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/mandala/services/undo/undo.service.ts ***!
    \***************************************************************/

  /*! exports provided: UndoService */

  /***/
  function srcAppModulesMandalaServicesUndoUndoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UndoService", function () {
      return UndoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _undo_stack_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./undo-stack-item */
    "./src/app/modules/mandala/services/undo/undo-stack-item.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UndoService =
    /*#__PURE__*/
    function () {
      function UndoService(router) {
        _classCallCheck(this, UndoService);

        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.stack = [];
        this.index = -1;
        this.limit = 50;
        this.isEnabled = false;
      }

      _createClass(UndoService, [{
        key: "enable",
        value: function enable() {
          var _this9 = this;

          if (this.isEnabled) {
            return;
          }

          this.isEnabled = true;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (e) {
            return _this9.onKeydown(e);
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"];
          })).subscribe(function () {
            return _this9.clear();
          });
        }
      }, {
        key: "disable",
        value: function disable() {
          this.destroy$.next(true);
          this.isEnabled = false;
        }
      }, {
        key: "hasUndo",
        value: function hasUndo() {
          return this.index > -1;
        }
      }, {
        key: "hasRedo",
        value: function hasRedo() {
          return this.index < this.stack.length - 1;
        }
      }, {
        key: "add",
        value: function add(item) {
          this.stack.splice(this.index + 1, this.stack.length - this.index);
          this.stack.push(item);

          if (this.stack.length > this.limit) {
            this.stack.splice(0, this.stack.length - this.limit);
          }

          this.index = this.stack.length - 1;
        }
      }, {
        key: "addCommand",
        value: function addCommand(command) {
          var undoStackItem = _undo_stack_item__WEBPACK_IMPORTED_MODULE_2__["UndoStackItem"].createUndoStackItem(command);

          this.add(undoStackItem);
        }
      }, {
        key: "undo",
        value: function undo() {
          var item = this.stack[this.index];

          if (item) {
            item.undo();
            this.index -= 1;
          }
        }
      }, {
        key: "redo",
        value: function redo() {
          var item = this.stack[this.index + 1];

          if (item) {
            item.redo();
            this.index += 1;
          }
        }
      }, {
        key: "setLimit",
        value: function setLimit(limit) {
          this.limit = limit;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.stack = [];
          this.index = -1;
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          var isCtrlZ = function isCtrlZ(e) {
            return (e.metaKey || e.ctrlKey) && e.keyCode === 90;
          };

          if (event.shiftKey && isCtrlZ(event)) {
            this.redo();
          } else if (isCtrlZ(event)) {
            this.undo();
          }
        }
      }]);

      return UndoService;
    }();

    UndoService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    UndoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UndoService);
    /***/
  },

  /***/
  "./src/app/modules/mandala/store/actions/editor.actions.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/mandala/store/actions/editor.actions.ts ***!
    \*****************************************************************/

  /*! exports provided: inited, zonesCount, enableDrawMirrored, disableDrawMirrored, tool, strokeWidth, smoothType, color, addUserdDrawStep, removeUserdDrawStep, clearUserdDrawSteps, updateCanvasSize */

  /***/
  function srcAppModulesMandalaStoreActionsEditorActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "inited", function () {
      return inited;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zonesCount", function () {
      return zonesCount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "enableDrawMirrored", function () {
      return enableDrawMirrored;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "disableDrawMirrored", function () {
      return disableDrawMirrored;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tool", function () {
      return tool;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "strokeWidth", function () {
      return strokeWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "smoothType", function () {
      return smoothType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "color", function () {
      return color;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addUserdDrawStep", function () {
      return addUserdDrawStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeUserdDrawStep", function () {
      return removeUserdDrawStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearUserdDrawSteps", function () {
      return clearUserdDrawSteps;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCanvasSize", function () {
      return updateCanvasSize;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var inited = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] editor inited', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var zonesCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Zones Count', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var enableDrawMirrored = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Enable Draw Mirrored');
    var disableDrawMirrored = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Disable Draw Mirrored');
    var tool = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Tool', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var strokeWidth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Stroke Width', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var smoothType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Smooth Type', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var color = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Color', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var addUserdDrawStep = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Add user draw step', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var removeUserdDrawStep = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Remove user draw step', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var clearUserdDrawSteps = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Clear user draw steps');
    var updateCanvasSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Update canvas size', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/modules/mandala/store/effects/editor.effects.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/mandala/store/effects/editor.effects.ts ***!
    \*****************************************************************/

  /*! exports provided: EditorEffects */

  /***/
  function srcAppModulesMandalaStoreEffectsEditorEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorEffects", function () {
      return EditorEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/editor.actions */
    "./src/app/modules/mandala/store/actions/editor.actions.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services */
    "./src/app/modules/mandala/services/index.ts");

    var EditorEffects = function EditorEffects(actions$, editorService, idbService) {
      var _this10 = this;

      _classCallCheck(this, EditorEffects);

      this.actions$ = actions$;
      this.editorService = editorService;
      this.idbService = idbService;
      this.drawState$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["color"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["disableDrawMirrored"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["enableDrawMirrored"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["strokeWidth"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["smoothType"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["tool"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["zonesCount"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["addUserdDrawStep"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["removeUserdDrawStep"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["clearUserdDrawSteps"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["updateCanvasSize"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
          return _this10.editorService.getDrawState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (state) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(!state.init ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null) : _this10.idbService.saveUserDrawState('current-state', state)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
          }));
        }));
      }, {
        dispatch: false
      });
    };

    EditorEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["EditorService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["IdbService"]
      }];
    };

    EditorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EditorEffects);
    /***/
  },

  /***/
  "./src/app/modules/mandala/store/reducers/editor.reducer.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/mandala/store/reducers/editor.reducer.ts ***!
    \******************************************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppModulesMandalaStoreReducersEditorReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../actions/editor.actions */
    "./src/app/modules/mandala/store/actions/editor.actions.ts");
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");
    /* harmony import */


    var _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../enums/smooth-types */
    "./src/app/modules/mandala/enums/smooth-types.ts");

    var initialState = {
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

    var updateState = function updateState(state, props) {
      return Object.assign({}, state, props);
    };

    var updatePropStatus = function updatePropStatus(prop, status) {
      return function (state) {
        return Object.assign({}, state, _defineProperty({}, prop, status));
      };
    };

    var addUserDrawStep = function addUserDrawStep(state, _ref3) {
      var step = _ref3.step,
          key = _ref3.key;
      return Object.assign({}, state, {
        steps: Object.assign({}, state.steps, _defineProperty({}, key, step))
      });
    };

    var removeUserDrawStep = function removeUserDrawStep(state, _ref4) {
      var key = _ref4.key;
      var steps = Object.assign({}, state.steps);
      delete steps[key];
      return Object.assign({}, state, {
        steps: steps
      });
    };

    var transformReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["zonesCount"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["enableDrawMirrored"], updatePropStatus('isDrawMirrored', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["disableDrawMirrored"], updatePropStatus('isDrawMirrored', false)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["tool"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["strokeWidth"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["smoothType"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["color"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["addUserdDrawStep"], addUserDrawStep), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["removeUserdDrawStep"], removeUserDrawStep), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["clearUserdDrawSteps"], function (state) {
      return Object.assign({}, state, {
        steps: []
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["updateCanvasSize"], function (state, _ref5) {
      var size = _ref5.size;
      return Object.assign({}, state, {
        size: size
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["inited"], function (state, _ref6) {
      var init = _ref6.init;
      return Object.assign({}, state, {
        init: init
      });
    }));

    function reducer(state, action) {
      return transformReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/modules/mandala/store/selectors/editor.selectors.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/mandala/store/selectors/editor.selectors.ts ***!
    \*********************************************************************/

  /*! exports provided: selectMandalaEditor, zonesCount, size, isDrawMirrored, tool, strokeWidth, smoothType, color, editorState */

  /***/
  function srcAppModulesMandalaStoreSelectorsEditorSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectMandalaEditor", function () {
      return selectMandalaEditor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zonesCount", function () {
      return zonesCount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "size", function () {
      return size;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDrawMirrored", function () {
      return isDrawMirrored;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tool", function () {
      return tool;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "strokeWidth", function () {
      return strokeWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "smoothType", function () {
      return smoothType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "color", function () {
      return color;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "editorState", function () {
      return editorState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectMandalaEditor = function selectMandalaEditor(state) {
      return state.mandala.editor;
    };

    var getSelector = function getSelector(prop) {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMandalaEditor, function (state) {
        return state[prop];
      });
    };

    var zonesCount = getSelector('zonesCount');
    var size = getSelector('size');
    var isDrawMirrored = getSelector('isDrawMirrored');
    var tool = getSelector('tool');
    var strokeWidth = getSelector('strokeWidth');
    var smoothType = getSelector('smoothType');
    var color = getSelector('color');
    var editorState = selectMandalaEditor;
    /***/
  },

  /***/
  "./src/app/modules/mandala/tools/draw-free.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/mandala/tools/draw-free.ts ***!
    \****************************************************/

  /*! exports provided: DrawFreeTool */

  /***/
  function srcAppModulesMandalaToolsDrawFreeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawFreeTool", function () {
      return DrawFreeTool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _draw_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./draw.base */
    "./src/app/modules/mandala/tools/draw.base.ts");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");
    /* harmony import */


    var _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../enums/smooth-types */
    "./src/app/modules/mandala/enums/smooth-types.ts");

    var DrawFreeTool =
    /*#__PURE__*/
    function (_draw_base__WEBPACK_I) {
      _inherits(DrawFreeTool, _draw_base__WEBPACK_I);

      function DrawFreeTool(canvasService, editorService, undoService) {
        var _this11;

        _classCallCheck(this, DrawFreeTool);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(DrawFreeTool).call(this, editorService));
        _this11.canvasService = canvasService;
        _this11.editorService = editorService;
        _this11.undoService = undoService;
        _this11.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_FREE;
        return _this11;
      }

      _createClass(DrawFreeTool, [{
        key: "drawZoneStartIteration",
        value: function drawZoneStartIteration(_ref7) {
          var drawZonePoint = _ref7.drawZonePoint;
          return this.createPath(drawZonePoint);
        }
      }, {
        key: "drawZoneIteration",
        value: function drawZoneIteration(_ref8) {
          var drawZonePath = _ref8.drawZonePath,
              drawZonePoint = _ref8.drawZonePoint;
          drawZonePath.add(drawZonePoint);
          return drawZonePath;
        }
      }, {
        key: "drawZoneEndIteration",
        value: function drawZoneEndIteration(_ref9) {
          var drawZonePath = _ref9.drawZonePath;
          console.log('smoothType: ', this.smoothType);

          if (this.smoothType === _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__["SMOOTH_TYPES"].HARD_SMOOTH) {
            drawZonePath.simplify();
            drawZonePath.smooth();
          } else if (this.smoothType === _enums_smooth_types__WEBPACK_IMPORTED_MODULE_4__["SMOOTH_TYPES"].LIGHT_SMOOTH) {
            drawZonePath.simplify();
          }

          return drawZonePath;
        }
      }, {
        key: "createPath",
        value: function createPath(position) {
          var path = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"]();
          path.moveTo(position);
          path.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
          path.strokeWidth = this.strokeWidth;
          path.strokeCap = 'round';
          return path;
        }
      }]);

      return DrawFreeTool;
    }(_draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/draw-image.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/mandala/tools/draw-image.ts ***!
    \*****************************************************/

  /*! exports provided: DrawImageTool */

  /***/
  function srcAppModulesMandalaToolsDrawImageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawImageTool", function () {
      return DrawImageTool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _draw_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./draw.base */
    "./src/app/modules/mandala/tools/draw.base.ts");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");

    var MAX_IMAGE_WIDTH = 500;
    var START_DRAW_WIDTH = 50;

    var DrawImageTool =
    /*#__PURE__*/
    function (_draw_base__WEBPACK_I2) {
      _inherits(DrawImageTool, _draw_base__WEBPACK_I2);

      function DrawImageTool(canvasService, editorService, undoService) {
        var _this12;

        _classCallCheck(this, DrawImageTool);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(DrawImageTool).call(this, editorService));
        _this12.canvasService = canvasService;
        _this12.editorService = editorService;
        _this12.undoService = undoService;
        _this12.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_IMAGE;
        return _this12;
      }

      _createClass(DrawImageTool, [{
        key: "setDrawImage",
        value: function setDrawImage(svg, imagePath) {
          this.toolParams = {
            imagePath: imagePath
          };
          this.svgGroup = paper__WEBPACK_IMPORTED_MODULE_2__["project"].importSVG(svg, {
            insert: false
          });
          this.drawImage = this.svgGroup.rasterize();
          var isWidthBigger = this.drawImage.size.width > this.drawImage.size.height;
          var scale = MAX_IMAGE_WIDTH / (isWidthBigger ? this.drawImage.size.width : this.drawImage.size.height);
          this.initScale = scale;
          this.drawImage.size = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](scale * this.drawImage.size.width, scale * this.drawImage.size.height);
        }
      }, {
        key: "drawZoneStartIteration",
        value: function drawZoneStartIteration(_ref10) {
          var drawZonePoint = _ref10.drawZonePoint;
          var mainImage = this.createImage(drawZonePoint);
          paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(mainImage);
          return mainImage;
        }
      }, {
        key: "drawZoneIteration",
        value: function drawZoneIteration(_ref11) {
          var drawZonePath = _ref11.drawZonePath,
              drawPoint = _ref11.drawPoint,
              zoneAngle = _ref11.zoneAngle,
              isMirror = _ref11.isMirror;
          drawZonePath = this.updateImage(drawPoint, drawZonePath, isMirror ? zoneAngle + 180 : zoneAngle);
          paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(drawZonePath);
          return drawZonePath;
        }
      }, {
        key: "drawZoneEndIteration",
        value: function drawZoneEndIteration(_ref12) {
          var drawZonePath = _ref12.drawZonePath;
          return this.createExportImage(drawZonePath);
        }
      }, {
        key: "createExportImage",
        value: function createExportImage(image) {
          var exportImage = this.svgGroup.clone();
          exportImage.position = image.position;
          exportImage.rotate(image.rotation);
          exportImage.style.strokeWidth = null;
          exportImage.style.strokeCap = null;
          exportImage.style.strokeJoin = null;
          exportImage.style.strokeScaling = false;
          exportImage.scale((image.scaling.x + image.scaling.y) * this.initScale);
          return exportImage;
        }
      }, {
        key: "createImage",
        value: function createImage(position) {
          var dist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var path = this.drawImage.clone();
          path.position = position;
          path.scale((START_DRAW_WIDTH + dist * 2) / path.size.width);
          return path;
        }
      }, {
        key: "updateImage",
        value: function updateImage(drawPoint, oldImage, rotation) {
          oldImage.remove();
          var dist = drawPoint.getDistance(this.drawStartPoint);
          var image = this.createImage(oldImage.position, dist);
          var vector = drawPoint.subtract(this.drawStartPoint);
          image.rotate(vector.angle + rotation);
          return image;
        }
      }]);

      return DrawImageTool;
    }(_draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/draw-line.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/mandala/tools/draw-line.ts ***!
    \****************************************************/

  /*! exports provided: DrawLineTool */

  /***/
  function srcAppModulesMandalaToolsDrawLineTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawLineTool", function () {
      return DrawLineTool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _draw_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./draw.base */
    "./src/app/modules/mandala/tools/draw.base.ts");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");

    var DrawLineTool =
    /*#__PURE__*/
    function (_draw_base__WEBPACK_I3) {
      _inherits(DrawLineTool, _draw_base__WEBPACK_I3);

      function DrawLineTool(canvasService, editorService, undoService) {
        var _this13;

        _classCallCheck(this, DrawLineTool);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(DrawLineTool).call(this, editorService));
        _this13.canvasService = canvasService;
        _this13.editorService = editorService;
        _this13.undoService = undoService;
        _this13.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_LINE;
        return _this13;
      }

      _createClass(DrawLineTool, [{
        key: "drawZoneStartIteration",
        value: function drawZoneStartIteration(_ref13) {
          var drawZonePoint = _ref13.drawZonePoint;
          return this.createLine(drawZonePoint);
        }
      }, {
        key: "drawZoneIteration",
        value: function drawZoneIteration(_ref14) {
          var drawZonePath = _ref14.drawZonePath,
              drawZonePoint = _ref14.drawZonePoint;

          var _drawZonePath$segment = _slicedToArray(drawZonePath.segments, 2),
              toSegment = _drawZonePath$segment[1];

          toSegment.point = drawZonePoint;
          return drawZonePath;
        }
      }, {
        key: "drawZoneEndIteration",
        value: function drawZoneEndIteration(_ref15) {
          var drawZonePath = _ref15.drawZonePath;
          drawZonePath.simplify();
          return drawZonePath;
        }
      }, {
        key: "createLine",
        value: function createLine(position) {
          var line = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Line(position, position);
          line.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
          line.strokeWidth = this.strokeWidth;
          line.strokeCap = 'round';
          return line;
        }
      }]);

      return DrawLineTool;
    }(_draw_base__WEBPACK_IMPORTED_MODULE_1__["EditorDrawToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/draw.base.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/mandala/tools/draw.base.ts ***!
    \****************************************************/

  /*! exports provided: EditorDrawToolBase */

  /***/
  function srcAppModulesMandalaToolsDrawBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorDrawToolBase", function () {
      return EditorDrawToolBase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _tool_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tool.base */
    "./src/app/modules/mandala/tools/tool.base.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_5__);

    var TRANSFORM_TYPES;

    (function (TRANSFORM_TYPES) {
      TRANSFORM_TYPES[TRANSFORM_TYPES["RESIZE"] = 0] = "RESIZE";
      TRANSFORM_TYPES[TRANSFORM_TYPES["MOVE"] = 1] = "MOVE";
    })(TRANSFORM_TYPES || (TRANSFORM_TYPES = {}));

    var EditorDrawToolBase =
    /*#__PURE__*/
    function (_tool_base__WEBPACK_I) {
      _inherits(EditorDrawToolBase, _tool_base__WEBPACK_I);

      function EditorDrawToolBase() {
        var _this14;

        _classCallCheck(this, EditorDrawToolBase);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(EditorDrawToolBase).apply(this, arguments));
        _this14.drawPaths = [];
        _this14.hitPaths = [];
        _this14.exportPaths = [];
        _this14.drawPoints = [];
        _this14.isEnabledTransform = true;
        _this14.isMirrorTransform = false;
        _this14.isLeftSizeTransform = false;
        return _this14;
      }

      _createClass(EditorDrawToolBase, [{
        key: "addSubscriptions",
        value: function addSubscriptions(isTransformMode) {
          var _this15 = this;

          _get(_getPrototypeOf(EditorDrawToolBase.prototype), "addSubscriptions", this).call(this);

          var pan = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Pan"]({
            threshold: 0
          });
          var press = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Press"]({
            time: 1
          });
          this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Manager"](this.canvasService.getDrawElement());
          this.hummerManager.add([pan, press]);
          this.hummerManager.on(isTransformMode ? 'press' : 'panstart', function (e) {
            var point = _this15.canvasService.normalizePoint(e.center);

            isTransformMode ? _this15.transformStart(point) : _this15.drawStart(point);
          });
          var pan$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this15.hummerManager.on('pan', function (e) {
              return observer.next(e);
            });
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(30));
          pan$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$)).subscribe(function (e) {
            var point = _this15.canvasService.normalizePoint(e.center);

            isTransformMode ? _this15.transform(point) : _this15.draw(point);
          });
          this.hummerManager.on('panend', function () {
            return isTransformMode ? _this15.transformEnd() : _this15.drawEnd();
          });
        }
      }, {
        key: "clearSubscriptions",
        value: function clearSubscriptions() {
          _get(_getPrototypeOf(EditorDrawToolBase.prototype), "clearSubscriptions", this).call(this);

          this.hummerManager.destroy();
        }
      }, {
        key: "drawStart",
        value: function drawStart(_ref16) {
          var _this16 = this;

          var x = _ref16.x,
              y = _ref16.y;
          this.drawPoints.push({
            x: x,
            y: y
          });
          this.isDrawing = true;
          this.centerPoint = this.getCanvasCenterPoint();
          this.drawStartPoint = this.createPoint(x, y);
          var drawAngle = this.getDrawAngle(this.drawStartPoint);
          this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
            var params = {
              zoneIndex: zoneIndex,
              zoneAngle: zoneAngle,
              zoneStep: zoneStep,
              drawPoint: _this16.drawStartPoint,
              drawAngle: drawAngle
            };

            var _this16$getDrawPoints = _this16.getDrawPoints(_this16.drawStartPoint, zoneStep, zoneAngle, drawAngle),
                _this16$getDrawPoints2 = _slicedToArray(_this16$getDrawPoints, 2),
                mainPoint = _this16$getDrawPoints2[0],
                mirrorPoint = _this16$getDrawPoints2[1];

            _this16.drawPaths.push([_this16.drawZoneStartIteration(Object.assign({
              drawZonePoint: mainPoint
            }, params)), _this16.isDrawMirrored ? _this16.drawZoneStartIteration(Object.assign({
              drawZonePoint: mirrorPoint
            }, params)) : null]);
          });
          this.draw({
            x: x,
            y: y
          });
        }
      }, {
        key: "draw",
        value: function draw(_ref17) {
          var _this17 = this;

          var x = _ref17.x,
              y = _ref17.y;

          if (this.isDrawing) {
            this.drawPoints.push({
              x: x,
              y: y
            });
            var drawPoint = this.createPoint(x, y);
            var drawAngle = this.getDrawAngle(drawPoint);
            this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
              var params = {
                zoneIndex: zoneIndex,
                zoneAngle: zoneAngle,
                zoneStep: zoneStep,
                drawPoint: drawPoint,
                drawAngle: drawAngle
              };

              var _this17$getDrawPoints = _this17.getDrawPoints(drawPoint, zoneStep, zoneAngle, drawAngle),
                  _this17$getDrawPoints2 = _slicedToArray(_this17$getDrawPoints, 2),
                  mainPoint = _this17$getDrawPoints2[0],
                  mirrorPoint = _this17$getDrawPoints2[1];

              var _this17$drawPaths$zon = _slicedToArray(_this17.drawPaths[zoneIndex], 2),
                  zonePath = _this17$drawPaths$zon[0],
                  mirrorPath = _this17$drawPaths$zon[1];

              if (zonePath) {
                zonePath = _this17.drawZoneIteration(Object.assign({
                  isMirror: false,
                  drawZonePath: zonePath,
                  drawZonePoint: mainPoint
                }, params));
              }

              if (mirrorPath) {
                mirrorPath = _this17.drawZoneIteration(Object.assign({
                  isMirror: true,
                  drawZonePath: mirrorPath,
                  drawZonePoint: mirrorPoint
                }, params));
              }

              _this17.drawPaths[zoneIndex] = [zonePath, mirrorPath];
            });
            this.canvasService.drawProject.view.update();
          }
        }
      }, {
        key: "drawEnd",
        value: function drawEnd() {
          var _this18 = this;

          this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
            var params = {
              zoneIndex: zoneIndex,
              zoneAngle: zoneAngle,
              zoneStep: zoneStep
            };

            var _this18$drawPaths$zon = _slicedToArray(_this18.drawPaths[zoneIndex], 2),
                zonePath = _this18$drawPaths$zon[0],
                mirrorPath = _this18$drawPaths$zon[1];

            var exportPaths = [null, null];
            var hitPaths = [null, null];

            if (zonePath) {
              exportPaths[0] = _this18.drawZoneEndIteration(Object.assign({
                drawZonePath: zonePath
              }, params));
              hitPaths[0] = _this18.createHitRect(zonePath);
            }

            if (mirrorPath) {
              exportPaths[1] = _this18.drawZoneEndIteration(Object.assign({
                drawZonePath: mirrorPath
              }, params));
              hitPaths[1] = _this18.createHitRect(mirrorPath);
            }

            _this18.exportPaths[zoneIndex] = exportPaths;
            _this18.hitPaths[zoneIndex] = hitPaths;
          });
          this.canvasService.drawProject.view.update();
          this.isDrawing = false;

          if (this.isEnabledTransform) {
            this.clearSubscriptions();
            this.addSubscriptions(true);
          } else {
            this.finishDraw();
          }
        }
      }, {
        key: "transformStart",
        value: function transformStart(point) {
          var _this19 = this;

          var isHited = false;
          this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
            if (isHited) {
              return;
            }

            var _this19$hitPaths$zone = _slicedToArray(_this19.hitPaths[zoneIndex], 2),
                zonePath = _this19$hitPaths$zone[0],
                mirrorPath = _this19$hitPaths$zone[1];

            if (zonePath) {
              var hitResult = zonePath.hitTest(point);

              if (hitResult) {
                isHited = true;
                _this19.isMirrorTransform = false;

                _this19.hitedPath(point, zonePath, hitResult);
              }
            }

            if (mirrorPath) {
              var _hitResult = mirrorPath.hitTest(point);

              if (_hitResult) {
                isHited = true;
                _this19.isMirrorTransform = true;

                _this19.hitedPath(point, mirrorPath, _hitResult);
              }
            }
          });
          var hitResults = paper__WEBPACK_IMPORTED_MODULE_5__["project"].hitTestAll(new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](point));
          console.log('hitResults: ', hitResults);
          console.log('isHited: ', isHited);

          if (!isHited) {
            this.finishDraw();
            this.clearSubscriptions();
            this.addSubscriptions();
          }
        }
      }, {
        key: "finishDraw",
        value: function finishDraw() {
          var _this20 = this;

          this.hitPaths.forEach(function (_ref18) {
            var _ref19 = _slicedToArray(_ref18, 2),
                zonePath = _ref19[0],
                mirrorPath = _ref19[1];

            if (zonePath) {
              zonePath.remove();
            }

            if (mirrorPath) {
              mirrorPath.remove();
            }
          });
          this.canvasService.drawProject.view.update();
          var drawStep = this.getState(this.drawPoints, this.toolParams);
          var drawStepKey = this.editorService.addUserDrawStep(drawStep);
          var allDrawPaths = this.getAllPaths(this.drawPaths);
          var allExportPaths = this.getAllPaths(this.exportPaths);
          this.canvasService.addPaperItems(drawStepKey, allDrawPaths, allExportPaths);
          this.undoService.addCommand({
            undo: function undo() {
              _this20.editorService.removeUserDrawStep(drawStepKey);

              _this20.canvasService.removePaperItems(drawStepKey);
            },
            redo: function redo() {
              _this20.editorService.addUserDrawStep(drawStep, drawStepKey);

              _this20.canvasService.addPaperItems(drawStepKey, allDrawPaths, allExportPaths);
            }
          });
          this.drawPaths = [];
          this.exportPaths = [];
          this.drawPoints = [];
          this.hitPaths = [];
        }
      }, {
        key: "transform",
        value: function transform(_ref20) {
          var _this21 = this;

          var x = _ref20.x,
              y = _ref20.y;
          var tPoint = this.createPoint(x, y); // tPoint.rotate()

          var point = tPoint.subtract(this.transformOffsetPoint);

          if (this.transfromType === TRANSFORM_TYPES.MOVE) {
            var drawAngle = this.getDrawAngle(point);
            console.log('drawAngle: ', drawAngle);
            this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
              var _this21$getDrawPoints = _this21.getDrawPoints(point, zoneStep, zoneAngle, drawAngle),
                  _this21$getDrawPoints2 = _slicedToArray(_this21$getDrawPoints, 2),
                  mainPoint = _this21$getDrawPoints2[0],
                  mirrorPoint = _this21$getDrawPoints2[1];

              var _this21$hitPaths$zone = _slicedToArray(_this21.hitPaths[zoneIndex], 2),
                  zoneHitPath = _this21$hitPaths$zone[0],
                  mirrorHitPath = _this21$hitPaths$zone[1];

              if (zoneHitPath) {
                zoneHitPath.position = _this21.isMirrorTransform ? mirrorPoint : mainPoint;
              }

              if (mirrorHitPath) {
                console.log(mirrorHitPath.position, mirrorPoint);
                mirrorHitPath.position = _this21.isMirrorTransform ? mainPoint : mirrorPoint;
              }

              var _this21$drawPaths$zon = _slicedToArray(_this21.drawPaths[zoneIndex], 2),
                  zonePath = _this21$drawPaths$zon[0],
                  mirrorPath = _this21$drawPaths$zon[1];

              if (zonePath) {
                zonePath.position = _this21.isMirrorTransform ? mirrorPoint : mainPoint;
              }

              if (mirrorPath) {
                mirrorPath.position = _this21.isMirrorTransform ? mainPoint : mirrorPoint;
              }
            });
            this.canvasService.drawProject.view.update();
          } else {
            // const point = tPoint.subtract(this.transformOffsetPoint);
            var vector = tPoint.subtract(this.transfromStartPoint);
            console.log('vector: ', vector);
            var distance = (vector.x < 0 ? -1 : 1) * tPoint.getDistance(this.transfromStartPoint, false);

            var _drawAngle = this.getDrawAngle(tPoint);

            var transformRotation = point.subtract(this.transformCenter).angle;
            var transformWidth = this.isLeftSizeTransform ? this.transfromStartSize.width - distance : this.transfromStartSize.width + distance;
            console.log('transformWidth: ', transformWidth);
            var scale = transformWidth / this.transformWidth;
            var rotation = transformRotation - this.transformRotation;
            this.transformWidth = transformWidth;
            this.transformRotation = rotation;
            this.transformRotation++;
            console.log(''); // console.log('width: ', width);
            // console.log(' this.transfromStartSize.width: ',  this.transfromStartSize.width);
            // console.log(' this.transformScale: ',  this.transformScale);

            this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
              var _this21$getDrawPoints3 = _this21.getDrawPoints(point, zoneStep, zoneAngle, _drawAngle),
                  _this21$getDrawPoints4 = _slicedToArray(_this21$getDrawPoints3, 2),
                  mainPoint = _this21$getDrawPoints4[0],
                  mirrorPoint = _this21$getDrawPoints4[1];

              var _this21$hitPaths$zone2 = _slicedToArray(_this21.hitPaths[zoneIndex], 2),
                  zoneHitPath = _this21$hitPaths$zone2[0],
                  mirrorHitPath = _this21$hitPaths$zone2[1];

              var _this21$drawPaths$zon2 = _slicedToArray(_this21.drawPaths[zoneIndex], 2),
                  zonePath = _this21$drawPaths$zon2[0],
                  mirrorPath = _this21$drawPaths$zon2[1];

              if (zoneHitPath) {
                console.log('zoneHitPath: ', zoneHitPath); // zoneHitPath.rotate(rotation, zoneHitPath.position);

                zoneHitPath.scale(scale);
              }

              if (mirrorHitPath) {
                mirrorHitPath.scale(scale);
              }

              if (zonePath) {
                // zonePath.rotate(rotation, zoneHitPath.position);
                zonePath.scale(scale);
              }

              if (mirrorPath) {
                mirrorPath.scale(scale);
              }
            });
            this.canvasService.drawProject.view.update();
            console.log('distance: ', distance);
          }
        }
      }, {
        key: "transformEnd",
        value: function transformEnd() {
          console.log('transform end');
        }
      }, {
        key: "hitedPath",
        value: function hitedPath(_ref21, path, hitResult) {
          var x = _ref21.x,
              y = _ref21.y;
          console.log('hitResult.type: ', hitResult.type);

          if (hitResult.type === 'segment') {
            this.transfromType = TRANSFORM_TYPES.RESIZE;
          } else {
            this.transfromType = TRANSFORM_TYPES.MOVE;
          }

          this.transfromStartPoint = this.createPoint(x, y);
          this.transfromStartSize = path.bounds.clone();
          this.transformWidth = this.transfromStartSize.width;
          this.transformRotation = path.rotation;
          this.transformCenter = path.position;
          this.transformOffsetPoint = this.transfromStartPoint.subtract(this.transformCenter);
          this.isLeftSizeTransform = this.transformCenter.x > this.transfromStartPoint.x;
        }
      }, {
        key: "createHitRect",
        value: function createHitRect(path) {
          var size = path instanceof paper__WEBPACK_IMPORTED_MODULE_5__["Raster"] ? path.size : new paper__WEBPACK_IMPORTED_MODULE_5__["Size"](path.bounds.width, path.bounds.height);
          var rect = new paper__WEBPACK_IMPORTED_MODULE_5__["Path"].Rectangle(path.position, size);
          rect.transform(path.matrix);
          rect.position = path.position;
          rect.fillColor = new paper__WEBPACK_IMPORTED_MODULE_5__["Color"]('red');
          rect.opacity = 0;
          rect.selected = true;
          rect.selectedColor = new paper__WEBPACK_IMPORTED_MODULE_5__["Color"]('red');
          return rect;
        }
      }, {
        key: "getCanvasCenterPoint",
        value: function getCanvasCenterPoint() {
          var size = this.canvasService.getCanvasSize();
          return this.createPoint(size.width / 2, size.height / 2);
        }
      }, {
        key: "zonesIteration",
        value: function zonesIteration(cb) {
          var step = 360 / this.zonesCount;

          for (var i = 0; i < this.zonesCount; i++) {
            cb(i, step * i, step);
          }
        }
      }, {
        key: "createPoint",
        value: function createPoint(x, y) {
          return new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](x, y);
        }
      }, {
        key: "getDrawAngle",
        value: function getDrawAngle(drawPoint) {
          var centerPoint = this.getCanvasCenterPoint();
          var size = this.canvasService.getCanvasSize();
          var halfHeight = size.height / 2;
          var point2 = new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](drawPoint.y > halfHeight ? 0 : size.height, halfHeight);
          var vector1 = drawPoint.subtract(centerPoint);
          var vector2 = point2.subtract(centerPoint);
          return vector1.getAngle(vector2);
        }
      }, {
        key: "getDrawPoints",
        value: function getDrawPoints(drawPoint, zoneStep, zoneAngle, drawAngle) {
          var diff = drawAngle + zoneStep / 2;
          return [this.getDrawPointWithRotation(drawPoint, zoneAngle), this.getDrawPointWithRotation(drawPoint, zoneAngle + diff * 2)];
        }
      }, {
        key: "getDrawPointWithRotation",
        value: function getDrawPointWithRotation(drawPoint, rotateAngle) {
          return drawPoint.rotate(rotateAngle, this.centerPoint);
        }
      }, {
        key: "getAllPaths",
        value: function getAllPaths(paths) {
          return paths.reduce(function (list, zonePaths) {
            zonePaths.forEach(function (p) {
              return p && list.push(p);
            });
            return list;
          }, []);
        }
      }]);

      return EditorDrawToolBase;
    }(_tool_base__WEBPACK_IMPORTED_MODULE_2__["EditorToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/fill-background.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/mandala/tools/fill-background.ts ***!
    \**********************************************************/

  /*! exports provided: FillBackgroundTool */

  /***/
  function srcAppModulesMandalaToolsFillBackgroundTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FillBackgroundTool", function () {
      return FillBackgroundTool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tap_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tap.base */
    "./src/app/modules/mandala/tools/tap.base.ts");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");

    var FillBackgroundTool =
    /*#__PURE__*/
    function (_tap_base__WEBPACK_IM) {
      _inherits(FillBackgroundTool, _tap_base__WEBPACK_IM);

      function FillBackgroundTool(canvasService, editorService, undoService) {
        var _this22;

        _classCallCheck(this, FillBackgroundTool);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(FillBackgroundTool).call(this, editorService));
        _this22.canvasService = canvasService;
        _this22.editorService = editorService;
        _this22.undoService = undoService;
        _this22.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].FILL_BACKGROUND;
        return _this22;
      }

      _createClass(FillBackgroundTool, [{
        key: "tap",
        value: function tap(point) {
          var _this23 = this;

          var drawStep = this.getState([point]);
          var drawStepKey = this.editorService.addUserDrawStep(drawStep);
          var prevColor = this.canvasService.backgroundRect.fillColor;
          var currentColor = this.color;
          this.updateBackgroundColor(currentColor);
          this.undoService.addCommand({
            undo: function undo() {
              _this23.updateBackgroundColor(prevColor);

              _this23.editorService.removeUserDrawStep(drawStepKey);
            },
            redo: function redo() {
              _this23.updateBackgroundColor(currentColor);

              _this23.editorService.addUserDrawStep(drawStep, drawStepKey);
            }
          });
        }
      }, {
        key: "updateBackgroundColor",
        value: function updateBackgroundColor(color) {
          this.canvasService.backgroundRect.fillColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](color);
          this.canvasService.drawProject.view.update();
        }
      }]);

      return FillBackgroundTool;
    }(_tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/fill-bucket.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/mandala/tools/fill-bucket.ts ***!
    \******************************************************/

  /*! exports provided: FillBucketTool */

  /***/
  function srcAppModulesMandalaToolsFillBucketTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FillBucketTool", function () {
      return FillBucketTool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tap_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tap.base */
    "./src/app/modules/mandala/tools/tap.base.ts");
    /* harmony import */


    var _helpers_flood_fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../helpers/flood-fill */
    "./src/app/modules/mandala/helpers/flood-fill.ts");
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");

    var FillBucketTool =
    /*#__PURE__*/
    function (_tap_base__WEBPACK_IM2) {
      _inherits(FillBucketTool, _tap_base__WEBPACK_IM2);

      function FillBucketTool(canvasService, editorService, undoService) {
        var _this24;

        _classCallCheck(this, FillBucketTool);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(FillBucketTool).call(this, editorService));
        _this24.canvasService = canvasService;
        _this24.editorService = editorService;
        _this24.undoService = undoService;
        _this24.rasters = [];
        _this24.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].FILL_BUCKET;
        return _this24;
      }

      _createClass(FillBucketTool, [{
        key: "tap",
        value: function tap(_ref22) {
          var x = _ref22.x,
              y = _ref22.y;
          Object(_helpers_flood_fill__WEBPACK_IMPORTED_MODULE_2__["floodFill"])(x, y);
        }
      }]);

      return FillBucketTool;
    }(_tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/index.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/mandala/tools/index.ts ***!
    \************************************************/

  /*! exports provided: DrawFreeTool, DrawLineTool, DrawImageTool, FillBackgroundTool, FillBucketTool, PipetteTool */

  /***/
  function srcAppModulesMandalaToolsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _draw_free__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./draw-free */
    "./src/app/modules/mandala/tools/draw-free.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DrawFreeTool", function () {
      return _draw_free__WEBPACK_IMPORTED_MODULE_1__["DrawFreeTool"];
    });
    /* harmony import */


    var _draw_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./draw-line */
    "./src/app/modules/mandala/tools/draw-line.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DrawLineTool", function () {
      return _draw_line__WEBPACK_IMPORTED_MODULE_2__["DrawLineTool"];
    });
    /* harmony import */


    var _draw_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./draw-image */
    "./src/app/modules/mandala/tools/draw-image.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DrawImageTool", function () {
      return _draw_image__WEBPACK_IMPORTED_MODULE_3__["DrawImageTool"];
    });
    /* harmony import */


    var _fill_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fill-background */
    "./src/app/modules/mandala/tools/fill-background.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FillBackgroundTool", function () {
      return _fill_background__WEBPACK_IMPORTED_MODULE_4__["FillBackgroundTool"];
    });
    /* harmony import */


    var _fill_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fill-bucket */
    "./src/app/modules/mandala/tools/fill-bucket.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FillBucketTool", function () {
      return _fill_bucket__WEBPACK_IMPORTED_MODULE_5__["FillBucketTool"];
    });
    /* harmony import */


    var _pipette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pipette */
    "./src/app/modules/mandala/tools/pipette.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PipetteTool", function () {
      return _pipette__WEBPACK_IMPORTED_MODULE_6__["PipetteTool"];
    });
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/pipette.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/mandala/tools/pipette.ts ***!
    \**************************************************/

  /*! exports provided: PipetteTool */

  /***/
  function srcAppModulesMandalaToolsPipetteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipetteTool", function () {
      return PipetteTool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tap_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tap.base */
    "./src/app/modules/mandala/tools/tap.base.ts");

    var PipetteTool =
    /*#__PURE__*/
    function (_tap_base__WEBPACK_IM3) {
      _inherits(PipetteTool, _tap_base__WEBPACK_IM3);

      function PipetteTool(canvasService, editorService, undoService) {
        var _this25;

        _classCallCheck(this, PipetteTool);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(PipetteTool).call(this, editorService));
        _this25.canvasService = canvasService;
        _this25.editorService = editorService;
        _this25.undoService = undoService;
        return _this25;
      }

      _createClass(PipetteTool, [{
        key: "tap",
        value: function tap(_ref23) {
          var x = _ref23.x,
              y = _ref23.y;
          var context = this.canvasService.getFillElement().getContext('2d');
          var pixel = context.getImageData(x * 2, y * 2, 1, 1);
          var rgb = pixel.data;
          this.editorService.setColor("rgb(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ")"));
        }
      }]);

      return PipetteTool;
    }(_tap_base__WEBPACK_IMPORTED_MODULE_1__["EditorTapToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/tap.base.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/mandala/tools/tap.base.ts ***!
    \***************************************************/

  /*! exports provided: EditorTapToolBase */

  /***/
  function srcAppModulesMandalaToolsTapBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorTapToolBase", function () {
      return EditorTapToolBase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tool_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tool.base */
    "./src/app/modules/mandala/tools/tool.base.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);

    var EditorTapToolBase =
    /*#__PURE__*/
    function (_tool_base__WEBPACK_I2) {
      _inherits(EditorTapToolBase, _tool_base__WEBPACK_I2);

      function EditorTapToolBase() {
        _classCallCheck(this, EditorTapToolBase);

        return _possibleConstructorReturn(this, _getPrototypeOf(EditorTapToolBase).apply(this, arguments));
      }

      _createClass(EditorTapToolBase, [{
        key: "addSubscriptions",
        value: function addSubscriptions() {
          var _this26 = this;

          _get(_getPrototypeOf(EditorTapToolBase.prototype), "addSubscriptions", this).call(this);

          var tap = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Tap"]();
          this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Manager"](this.canvasService.getDrawElement());
          this.hummerManager.add([tap]);
          this.hummerManager.on('tap', function (e) {
            var point = _this26.canvasService.normalizePoint(e.center);

            _this26.tap(point);
          });
        }
      }, {
        key: "clearSubscriptions",
        value: function clearSubscriptions() {
          _get(_getPrototypeOf(EditorTapToolBase.prototype), "clearSubscriptions", this).call(this);

          this.hummerManager.destroy();
        }
      }]);

      return EditorTapToolBase;
    }(_tool_base__WEBPACK_IMPORTED_MODULE_1__["EditorToolBase"]);
    /***/

  },

  /***/
  "./src/app/modules/mandala/tools/tool.base.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/mandala/tools/tool.base.ts ***!
    \****************************************************/

  /*! exports provided: EditorToolBase */

  /***/
  function srcAppModulesMandalaToolsToolBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorToolBase", function () {
      return EditorToolBase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EditorToolBase =
    /*#__PURE__*/
    function () {
      function EditorToolBase(editorService) {
        _classCallCheck(this, EditorToolBase);

        this.editorService = editorService;
      }

      _createClass(EditorToolBase, [{
        key: "enable",
        value: function enable() {
          this.addSubscriptions();
        }
      }, {
        key: "disable",
        value: function disable() {
          this.clearSubscriptions();
        }
      }, {
        key: "addSubscriptions",
        value: function addSubscriptions() {
          var _this27 = this;

          this.clear$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (color) {
            return _this27.onChangeColor(color);
          });
          this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (zonesCount) {
            return _this27.zonesCount = zonesCount;
          });
          this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (isDrawMirrored) {
            return _this27.isDrawMirrored = isDrawMirrored;
          });
          this.editorService.getStrokeWidth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (strokeWidth) {
            return _this27.strokeWidth = strokeWidth;
          });
          this.editorService.getSmoothType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (smoothType) {
            return _this27.smoothType = smoothType;
          });
        }
      }, {
        key: "clearSubscriptions",
        value: function clearSubscriptions() {
          this.clear$.next(true);
          this.clear$.unsubscribe();
          this.clear$ = null;
        }
      }, {
        key: "getState",
        value: function getState() {
          var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var toolParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            tool: Object.assign({
              type: this.tool
            }, toolParams),
            color: this.color,
            zonesCount: this.zonesCount,
            isDrawMirrored: this.isDrawMirrored,
            strokeWidth: this.strokeWidth,
            smoothType: this.smoothType,
            points: points
          };
        }
      }, {
        key: "onChangeColor",
        value: function onChangeColor(color) {
          this.color = color;
        }
      }]);

      return EditorToolBase;
    }();
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! /Users/etokovenko/Desktop/projects/mandala-app/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************************!*\
    !*** ./node/self.js (ignored) ***!
    \********************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************************!*\
    !*** ./node/extend.js (ignored) ***!
    \**********************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map