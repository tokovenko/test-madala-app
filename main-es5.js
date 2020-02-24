function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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


    __webpack_exports__["default"] = "<div class=\"container\"\n     [style.width]=\"width\"\n     [style.height]=\"height\">\n    <canvas id=\"canvas-draw\" #drawCanvas></canvas>\n    <canvas id=\"canvas-fill\" #fillCanvas [style.width]=\"width\" [style.height]=\"height\"></canvas>\n    <canvas id=\"canvas-zones\" appMandalaDrawZones #zonesCanvas></canvas>\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"undo-controls\">\n        <button \n            matTooltip=\"Undo\"\n            [disabled]=\"!hasUndo\"\n            mat-mini-fab\n            (click)=\"undo()\">\n            <mat-icon>undo</mat-icon>\n        </button>\n        <button \n            matTooltip=\"Redo\"\n            [disabled]=\"!hasRedo\"\n            mat-mini-fab\n            (click)=\"redo()\">\n            <mat-icon>redo</mat-icon>\n        </button>\n    </div>\n    <div class=\"tools\">\n        <div class=\"tools__item tools__item--zones\">\n            <button \n                matTooltip=\"Decrease Zones\"\n                mat-icon-button\n                (click)=\"decreaseZones()\">\n                <mat-icon>remove</mat-icon>\n            </button>\n            <span>{{zonesCount}}</span>\n            <button \n                matTooltip=\"Increase Zones\"\n                mat-icon-button\n                (click)=\"increaseZones()\">\n                <mat-icon>add</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Draw\"\n                mat-fab \n                [class.active]=\"isCurrentTool(TOOLS.DRAW_FREE)\"\n                (click)=\"enableTool(TOOLS.DRAW_FREE)\">\n                <mat-icon>gesture</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Line\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.DRAW_LINE)\"\n                [class.active]=\"isCurrentTool(TOOLS.DRAW_LINE)\">\n                <mat-icon>show_chart</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Draw with image\"\n                mat-fab \n                [class.active]=\"isCurrentTool(TOOLS.DRAW_IMAGE)\"\n                (click)=\"enableTool(TOOLS.DRAW_IMAGE)\">\n                <mat-icon>collections</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Background\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.FILL_BACKGROUND)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BACKGROUND)\">\n                <mat-icon>opacity</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                disabled\n                matTooltip=\"Fill Bucket\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.FILL_BUCKET)\"\n                [class.active]=\"isCurrentTool(TOOLS.FILL_BUCKET)\">\n                <mat-icon>filter_b_and_w</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Pipette\"\n                mat-fab \n                (click)=\"enableTool(TOOLS.PIPETTE)\"\n                [class.active]=\"isCurrentTool(TOOLS.PIPETTE)\">\n                <mat-icon>colorize</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button \n                matTooltip=\"Clear All\"\n                mat-fab \n                (click)=\"clear()\">\n                <mat-icon> layers_clear</mat-icon>\n            </button>\n        </div>\n        <div class=\"tools__item\">\n            <button\n                matTooltip=\"to SVG\"\n                mat-fab \n                (click)=\"toSVG()\">\n                <mat-icon> cloud_download</mat-icon>\n            </button>\n        </div>\n    </div>\n    <div class=\"sub-tools\">\n        <div\n            *ngIf=\"!isCurrentTool(TOOLS.DRAW_IMAGE)\" \n            class=\"sub-tools__item sub-tools__item--color\">\n            <div class=\"color-preview\"\n                 matTooltip=\"Change Color\"\n                 [style.background-color]=\"color$ | async\"\n                 (click)=\"toggleColorpicker()\"></div>\n        </div>\n        <div \n            *ngIf=\"isDrawTool\"\n            class=\"sub-tools__item\">\n            <mat-checkbox \n                matTooltip=\"Mirror Draw\"\n                [(ngModel)]=\"isMirrorEnabled\">mirror</mat-checkbox>\n        </div>\n        <div \n            *ngIf=\"isDrawWithStrokeTool\"\n            class=\"sub-tools__item sub-tools__item--stroke-width\">\n            <mat-slider\n                [min]=\"1\"\n                [max]=\"30\"\n                [step]=\"1\"\n                [thumbLabel]=\"true\"\n                [vertical]=\"true\"\n                [(ngModel)]=\"strokeWidth\">\n            </mat-slider>\n        </div>\n        <div \n            *ngIf=\"isCurrentTool(TOOLS.DRAW_IMAGE)\"\n            class=\"sub-tools__item sub-tools__item--images\">\n            <div \n                *ngFor=\"let image of drawImages\"\n                [class.active]=\"isCurrentImageDraw(image.url)\"\n                (click)=\"setDrawImage($event)\">\n                <object [attr.data]=\"image.safeUrl\" [attr.data-url]=\"image.url\" type=\"image/svg+xml\"></object>\n            </div>\n        </div>\n    </div>\n</div>\n<div\n    class=\"colorpicker\"\n    [class.visible]=\"isVisibleColorpicker\">\n    <button \n        (click)=\"toggleColorpicker()\"\n        class=\"colorpicker__close\"\n        mat-fab \n        color=\"accent\">\n        <mat-icon>clear</mat-icon>\n    </button>\n    <app-mandala-editor-colorpicker \n        [color]=\"color$ | async\"\n        (changeColor)=\"onChangeColor($event)\">\n    </app-mandala-editor-colorpicker>\n</div>";
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


    __webpack_exports__["default"] = "<div *ngIf=\"isLoaded\">\n    <app-mandala-editor-canvas [initState]=\"initState\"></app-mandala-editor-canvas>\n    <div \n        class=\"tools-container\"\n        [class.visible]=\"isVisibleTools\">\n        <app-mandala-editor-tools class=\"tools\"></app-mandala-editor-tools>\n        <div \n            class=\"toggle-tools\"\n            (click)=\"toggleTools()\">\n            <mat-icon>{{isVisibleTools ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}}</mat-icon>\n        </div>\n    </div>\n</div>\n<div\n    *ngIf=\"!isLoaded || (isEnabledLoader$ | async)\"\n    class=\"loader\">\n    <mat-spinner></mat-spinner>\n</div>";
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
      } // SIDEBAR


      _createClass(LayoutService, [{
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["toggleSidebar"]());
        }
      }, {
        key: "openSidebar",
        value: function openSidebar() {
          this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["openSidebar"]());
        }
      }, {
        key: "closeSidebar",
        value: function closeSidebar() {
          this.dispatch(_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["closeSidebar"]());
        }
      }, {
        key: "isOpenSidebar",
        value: function isOpenSidebar() {
          return this.select(_store_selectors_layout_selectors__WEBPACK_IMPORTED_MODULE_3__["isOpenSidebar"]);
        } // LOADER

      }, {
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

  /*! exports provided: toggleSidebar, openSidebar, closeSidebar, enableLoader, disableLoader */

  /***/
  function srcAppModulesCommonStoreActionsLayoutActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleSidebar", function () {
      return toggleSidebar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "openSidebar", function () {
      return openSidebar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "closeSidebar", function () {
      return closeSidebar;
    });
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

    var toggleSidebar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Toggle Sidebar');
    var openSidebar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Open Sidebar');
    var closeSidebar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Close Sidebar');
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
      isOpenSidebar: true,
      isEnabledLoader: false
    };

    var updateProp = function updateProp(prop, status) {
      return function (state) {
        return Object.assign({}, state, _defineProperty({}, prop, status));
      };
    };

    var contentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["toggleSidebar"], function (state) {
      return Object.assign({}, state, {
        isOpenSidebar: !state.isOpenSidebar
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["openSidebar"], updateProp('isOpenSidebar', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["closeSidebar"], updateProp('isOpenSidebar', false)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["enableLoader"], updateProp('isEnabledLoader', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["disableLoader"], updateProp('isEnabledLoader', false)));

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

  /*! exports provided: isOpenSidebar, isEnabledLoader */

  /***/
  function srcAppModulesCommonStoreSelectorsLayoutSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isOpenSidebar", function () {
      return isOpenSidebar;
    });
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
      return state.layout;
    };

    var getSelector = function getSelector(prop) {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectLayout, function (state) {
        return state && state[prop];
      });
    };

    var isOpenSidebar = getSelector('isOpenSidebar');
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


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/tool.service */
    "./src/app/modules/mandala/services/tool.service.ts");
    /* harmony import */


    var src_app_modules_common_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modules/common/services */
    "./src/app/modules/common/services/index.ts");
    /* harmony import */


    var _tools_draw_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../tools/draw.base */
    "./src/app/modules/mandala/tools/draw.base.ts");
    /* harmony import */


    var _tools_tap_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../tools/tap.base */
    "./src/app/modules/mandala/tools/tap.base.ts");

    var MandalaEditorCanvasComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorCanvasComponent(editorService, canvasService, layoutService, idbService, toolService, undoService) {
        _classCallCheck(this, MandalaEditorCanvasComponent);

        this.editorService = editorService;
        this.canvasService = canvasService;
        this.layoutService = layoutService;
        this.idbService = idbService;
        this.toolService = toolService;
        this.undoService = undoService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(MandalaEditorCanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.canvasService.setDrawElement(this.drawCanvas.nativeElement);
          this.canvasService.setFillElement(this.fillCanvas.nativeElement);
          this.canvasService.setZonesElement(this.zonesCanvas.nativeElement);
          this.editorService.getSize().subscribe(function (size) {
            if (size) {
              _this.size = size;

              _this.canvasService.updateCanvasesSize(_this.size);
            }
          });
          this.initDraw();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "initDraw",
        value: function initDraw() {
          var _this2 = this;

          var zonesProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](this.zonesCanvas.nativeElement);
          zonesProject.view.autoUpdate = false;
          var fillProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](this.fillCanvas.nativeElement);
          fillProject.view.autoUpdate = false;
          this.canvasService.fillProject = fillProject;
          var canvas = document.getElementById('canvas-draw');
          var drawProject = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](canvas);
          drawProject.view.autoUpdate = false;
          this.canvasService.drawProject = drawProject;
          this.addBackgroundRect('white');
          drawProject.view.update();

          for (var key in this.initState) {
            if (this.initState.hasOwnProperty(key)) {
              (function () {
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

                _this2.editorService.getTool().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (tool) {
                  return _this2.toolService.createTool(tool, _this2.backgroundRect);
                })).subscribe(function (tool) {
                  if (_this2.tool) {
                    _this2.tool.disable();
                  }

                  _this2.tool = tool;
                  tool.enable();
                  step.points.forEach(function (point, index) {
                    if (tool instanceof _tools_draw_base__WEBPACK_IMPORTED_MODULE_8__["EditorDrawToolBase"]) {
                      if (index === 0) {
                        tool.drawStart(point);
                      } else {
                        tool.draw(point);
                      }
                    } else if (tool instanceof _tools_tap_base__WEBPACK_IMPORTED_MODULE_9__["EditorTapToolBase"]) {
                      tool.tap(point);
                    }
                  });

                  if (tool instanceof _tools_draw_base__WEBPACK_IMPORTED_MODULE_8__["EditorDrawToolBase"]) {
                    tool.drawEnd();
                  }
                });
              })();
            }
          }

          this.editorService.inited();
          this.undoService.clear();
          this.editorService.getTool().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (tool) {
            return _this2.toolService.createTool(tool, _this2.backgroundRect);
          })).subscribe(function (tool) {
            if (_this2.tool) {
              _this2.tool.disable();
            }

            _this2.tool = tool;

            _this2.toolService.setCurrentTool(tool);

            tool.enable();
          });
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
        type: _services__WEBPACK_IMPORTED_MODULE_3__["EditorService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]
      }, {
        type: src_app_modules_common_services__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["IdbService"]
      }, {
        type: _services_tool_service__WEBPACK_IMPORTED_MODULE_6__["ToolService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UndoService"]
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


    var _jaames_iro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @jaames/iro */
    "./node_modules/@jaames/iro/dist/iro.es.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MandalaEditorColorpickerComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorColorpickerComponent(editorService) {
        _classCallCheck(this, MandalaEditorColorpickerComponent);

        this.editorService = editorService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MandalaEditorColorpickerComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.colorPicker = new _jaames_iro__WEBPACK_IMPORTED_MODULE_2__["default"].ColorPicker(this.picker.nativeElement, {
            width: 300,
            handleRadius: 12,
            sliderHeight: 30,
            color: this.color
          });
          this.colorPicker.on('color:change', function (color) {
            return _this3.changeColor.emit(color.rgbString);
          });
          this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (color) {
            if (_this3.colorPicker.color.rgbString !== color) {
              _this3.colorPicker.color.rgbString = color;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }]);

      return MandalaEditorColorpickerComponent;
    }();

    MandalaEditorColorpickerComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["EditorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', {
      static: true
    })], MandalaEditorColorpickerComponent.prototype, "picker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MandalaEditorColorpickerComponent.prototype, "changeColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MandalaEditorColorpickerComponent.prototype, "color", void 0);
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


    __webpack_exports__["default"] = "button.active {\n  background-color: #00bcd4;\n  color: white; }\n\nbutton:not(.active) {\n  background-color: white;\n  color: black; }\n\n.container {\n  display: -webkit-box;\n  display: flex; }\n\n.container .tools .tools__item {\n    margin-top: -3px; }\n\n.container .tools .tools__item--zones {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center;\n      border: 1px #cbcbcb dashed;\n      margin-bottom: 20px;\n      padding: 3px; }\n\n.container .tools .tools__item--zones button {\n        width: 15px;\n        height: 15px;\n        line-height: 15px; }\n\n.container .tools .tools__item--zones .mat-icon {\n        width: 15px;\n        height: 16px;\n        line-height: 15px;\n        font-size: 15px; }\n\n.container .sub-tools {\n    margin-left: 15px;\n    padding-left: 15px;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n\n.container .sub-tools::after {\n      content: ' ';\n      position: absolute;\n      width: 1px;\n      top: 40px;\n      bottom: 40px;\n      left: 0;\n      background: #e3dede; }\n\n.container .sub-tools__item {\n      margin-bottom: 15px; }\n\n.container .sub-tools__item--color .color-preview {\n        width: 70px;\n        height: 70px;\n        box-shadow: 0 0 5px grey;\n        border-radius: 3px;\n        cursor: pointer; }\n\n.container .sub-tools__item--stroke-width {\n        -webkit-box-flex: 1;\n                flex-grow: 1; }\n\n.container .sub-tools__item--stroke-width .mat-slider {\n          height: 100%; }\n\n.container .sub-tools__item--images .active {\n        border: 1px dashed #fb3939;\n        border-radius: 3px; }\n\n.container .sub-tools__item--images object {\n        width: 70px;\n        pointer-events: none; }\n\n.colorpicker {\n  display: block;\n  background: white;\n  padding: 20px;\n  box-shadow: 0 0 10px grey;\n  position: absolute;\n  top: 0px;\n  left: -350px;\n  bottom: 0px;\n  z-index: 2;\n  -webkit-transition: left 300ms;\n  transition: left 300ms; }\n\n.colorpicker.visible {\n    left: 0; }\n\n.colorpicker__close {\n    position: absolute;\n    right: -10px;\n    top: -10px; }\n\n.undo-controls {\n  position: absolute;\n  top: -28px;\n  left: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvbWFuZGFsYS1hcHAvc3JjL2FwcC9tb2R1bGVzL21hbmRhbGEvY29tcG9uZW50cy9tYW5kYWxhLWVkaXRvci9tYW5kYWxhLWVkaXRvci10b29scy9tYW5kYWxhLWVkaXRvci10b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFEakI7SUFLWSxnQkFBZ0IsRUFBQTs7QUFMNUI7TUFRZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLDBCQUEwQjtNQUMxQixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBOztBQWI1QjtRQWdCb0IsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUIsRUFBQTs7QUFsQnJDO1FBcUJvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7O0FBeEJuQztJQStCUSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7O0FBcEM5QjtNQXVDWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1QsWUFBWTtNQUNaLE9BQU87TUFDUCxtQkFBbUIsRUFBQTs7QUE3Qy9CO01BaURZLG1CQUFtQixFQUFBOztBQWpEL0I7UUFvRG9CLFdBQVc7UUFDWCxZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixlQUFlLEVBQUE7O0FBeERuQztRQTREZ0IsbUJBQVk7Z0JBQVosWUFBWSxFQUFBOztBQTVENUI7VUErRG9CLFlBQVksRUFBQTs7QUEvRGhDO1FBb0VvQiwwQkFBMEI7UUFDMUIsa0JBQWtCLEVBQUE7O0FBckV0QztRQXdFb0IsV0FBVztRQUNYLG9CQUFvQixFQUFBOztBQU94QztFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLDhCQUFzQjtFQUF0QixzQkFBc0IsRUFBQTs7QUFWMUI7SUFZUSxPQUFPLEVBQUE7O0FBR1g7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuZGFsYS9jb21wb25lbnRzL21hbmRhbGEtZWRpdG9yL21hbmRhbGEtZWRpdG9yLXRvb2xzL21hbmRhbGEtZWRpdG9yLXRvb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5idXR0b246bm90KC5hY3RpdmUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgLnRvb2xzIHtcbiAgICAgICAgLnRvb2xzX19pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG5cbiAgICAgICAgICAgICYtLXpvbmVzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4ICNjYmNiY2IgZGFzaGVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zdWItdG9vbHMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNkZWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgJi0tY29sb3Ige1xuICAgICAgICAgICAgICAgIC5jb2xvci1wcmV2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0tc3Ryb2tlLXdpZHRoIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgICAgICAgICAubWF0LXNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLS1pbWFnZXMge1xuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2ZiMzkzOTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3Qge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29sb3JwaWNrZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogLTM1MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAzMDBtcztcbiAgICAmLnZpc2libGUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICZfX2Nsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxufVxuXG4udW5kby1jb250cm9scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI4cHg7XG4gICAgbGVmdDogNjBweDtcbn0iXX0= */";
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


    var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../mandala-editor-export-svg/mandala-editor-export-svg.component */
    "./src/app/modules/mandala/components/mandala-editor/mandala-editor-export-svg/mandala-editor-export-svg.component.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);

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
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.TOOLS = _enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"];
        this.isVisibleColorpicker = false;
        this.drawImages = [];
      }

      _createClass(MandalaEditorToolsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.drawImages = _enums_tools__WEBPACK_IMPORTED_MODULE_6__["DRAW_IMAGES"].map(function (image) {
            return {
              url: image,
              safeUrl: _this4.domSanitizer.bypassSecurityTrustResourceUrl(image)
            };
          });
          this.editorService.getTool().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (tool) {
            return _this4.tool = tool;
          });
          this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (isDrawMirrored) {
            return _this4.isDrawMirrored = isDrawMirrored;
          });
          this.editorService.getStrokeWidth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (strokeWidth) {
            return _this4.currentStrokeWidth = strokeWidth;
          });
          this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (zonesCount) {
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
            paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.remove();
            var drawLayer = new paper__WEBPACK_IMPORTED_MODULE_2__["Layer"]();
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

          var size = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](width, height);
          var project = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](size);
          project.view.autoUpdate = false;
          var layerBg = this.canvasService.drawProject.layers[0].clone();
          project.addLayer(layerBg);
          var groups = this.canvasService.getCachedPaperGroups();
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
          Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(blob, "mandala-".concat(Date.now(), ".svg"));
        }
      }, {
        key: "openDialog",
        value: function openDialog(svg) {
          var dialogRef = this.dialog.open(_mandala_editor_export_svg_mandala_editor_export_svg_component__WEBPACK_IMPORTED_MODULE_9__["MandalaEditorExportSvgComponent"], {
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
          return this.tool && [_enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"].DRAW_FREE, _enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"].DRAW_LINE, _enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"].DRAW_IMAGE].includes(this.tool.type);
        }
      }, {
        key: "isDrawWithStrokeTool",
        get: function get() {
          return this.tool && [_enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"].DRAW_FREE, _enums_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"].DRAW_LINE].includes(this.tool.type);
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
        type: _services__WEBPACK_IMPORTED_MODULE_5__["EditorService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["CanvasService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["ToolService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UndoService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var _common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/services */
    "./src/app/modules/common/services/index.ts");

    var MandalaEditorComponent =
    /*#__PURE__*/
    function () {
      function MandalaEditorComponent(undoService, idbService, editorService, toolService, layoutService) {
        _classCallCheck(this, MandalaEditorComponent);

        this.undoService = undoService;
        this.idbService = idbService;
        this.editorService = editorService;
        this.toolService = toolService;
        this.layoutService = layoutService;
        this.isVisibleTools = false;
        this.isLoaded = false;
        this.initState = null;
      }

      _createClass(MandalaEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.isEnabledLoader$ = this.layoutService.isEnabledLoader();
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
            console.log('state size: ', state.size);

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
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UndoService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["IdbService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["EditorService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["ToolService"]
      }, {
        type: _common_services__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
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
            _this7.zonesCount = zonesCount;

            _this7.redrawZones();
          });
          this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (isDrawMirrored) {
            _this7.isDrawMirrored = isDrawMirrored;

            _this7.redrawZones();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "redrawZones",
        value: function redrawZones() {
          var _this$canvasService$g2 = this.canvasService.getCanvasSize(),
              width = _this$canvasService$g2.width,
              height = _this$canvasService$g2.height;

          this.ctx.clearRect(0, 0, width, height);
          this.ctx.beginPath();
          var x = width / 2;
          var y = height / 2;
          this.ctx.fillStyle = 'grey';
          this.ctx.strokeStyle = 'grey';
          this.ctx.setLineDash([]);
          this.ctx.arc(x, y, 4, 0, 2 * Math.PI);
          this.ctx.fill();

          if (this.zonesCount > 1) {
            var length = Math.sqrt(width * width + height * height);
            var step = 360 / this.zonesCount;

            for (var i = 0; i < this.zonesCount; i++) {
              var angle = 0 + i * step;
              var line = this.calcEndPoint(x, y, length, angle);
              var color = 'grey';
              this.drawAngledLine(x, y, line.endX, line.endY, color);

              if (this.isDrawMirrored) {
                var mirrorAngle = angle + step / 2;
                var mirrorLine = this.calcEndPoint(x, y, length, mirrorAngle);
                this.drawAngledLine(x, y, mirrorLine.endX, mirrorLine.endY, 'grey', [3, 30]);
              }
            }
          }
        }
      }, {
        key: "calcEndPoint",
        value: function calcEndPoint(x, y, length, angle) {
          var radians = angle / 180 * Math.PI;
          var endX = x + length * Math.cos(radians);
          var endY = y - length * Math.sin(radians);
          return {
            endX: endX,
            endY: endY
          };
        }
      }, {
        key: "drawAngledLine",
        value: function drawAngledLine(x, y, endX, endY, color) {
          var dashSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [5, 15];
          this.ctx.beginPath();
          this.ctx.strokeStyle = color;
          this.ctx.setLineDash(dashSize);
          this.ctx.moveTo(x, y);
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

    var DRAW_IMAGES = ['/test-madala-app/assets/circle.svg', '/test-madala-app/assets/test.svg', '/test-madala-app/assets/skull.svg'];
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

    var floodFill = function () {
      "use strict";

      var extent = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
      var keepMask = false; // if true then a mask of the filled area is returned as a canvas image

      var extentOnly = false; // if true then the extent of the fill is returned

      var copyPixels = false; // if true then creating a copy of filled pixels

      var cutPixels = false; // if true and copyPixels true then filled pixels are removed

      var useBoundingColor = false; // Set the colour to fill up to. Will not fill over this colour

      var useCompareColor = false; // Rather than get the pixel at posX,posY use the compareColours

      var red, green, blue, alpha; // compare colours if 

      var canvas, ctx;

      function floodFill(posX, posY, tolerance, context2D, diagonal, area, toleranceFade) {
        var w, h, painted, x, y, ind, sr, sg, sb, sa, imgData, data, data32, RGBA32, stack, stackPos, lookLeft, lookRight, i, colImgDat, differance, checkColour;
        toleranceFade = toleranceFade !== undefined && toleranceFade !== null ? toleranceFade : 0;
        diagonal = diagonal !== undefined && diagonal !== null ? diagonal : false;
        area = area !== undefined && area !== null ? area : {};
        area.x = area.x !== undefined ? area.x : 0;
        area.y = area.y !== undefined ? area.y : 0;
        area.w = area.w !== undefined ? area.w : context2D.canvas.width - area.x;
        area.h = area.h !== undefined ? area.h : context2D.canvas.height - area.y; // vet area is on the canvas.

        if (area.x < 0) {
          area.w = area.x + area.w;
          area.x = 0;
        }

        if (area.y < 0) {
          area.h = area.y + area.h;
          area.y = 0;
        }

        if (area.x >= context2D.canvas.width || area.y >= context2D.canvas.height) {
          return false;
        }

        if (area.x + area.w > context2D.canvas.width) {
          area.w = context2D.canvas.width - area.x;
        }

        if (area.y + area.h > context2D.canvas.height) {
          area.h = context2D.canvas.height - area.y;
        }

        if (area.w <= 0 || area.h <= 0) {
          return false;
        }

        w = area.w; // width and height

        h = area.h;
        x = posX - area.x;
        y = posY - area.y;

        if (extentOnly) {
          extent.left = x; // set up extent

          extent.right = x;
          extent.top = y;
          extent.bottom = y;
        }

        if (x < 0 || y < 0 || x >= w || y >= h) {
          return false; // fill start outside area. Don't do anything
        }

        if (tolerance === 255 && toleranceFade === 0 && !keepMask) {
          // fill all 
          if (extentOnly) {
            extent.left = area.x; // set up extent

            extent.right = area.x + w;
            extent.top = area.y;
            extent.bottom = area.y + h;
          }

          context2D.fillRect(area.x, area.y, w, h);
          return true;
        }

        if (toleranceFade > 0) {
          // add one if on to get correct number of steps
          toleranceFade += 1;
        }

        imgData = context2D.getImageData(area.x, area.y, area.w, area.h);
        data = imgData.data; // image data to fill;

        data32 = new Uint32Array(data.buffer);
        painted = new Uint8ClampedArray(w * h); // byte array to mark painted area;

        function checkColourAll(ind) {
          if (ind < 0 || painted[ind] > 0) {
            // test bounds
            return false;
          }

          var ind4 = ind << 2; // get index of pixel           

          if ((differance = Math.max( // get the max channel difference;
          Math.abs(sr - data[ind4++]), Math.abs(sg - data[ind4++]), Math.abs(sb - data[ind4++]), Math.abs(sa - data[ind4++]))) > tolerance) {
            return false;
          }

          return true;
        } // check to bounding colour


        function checkColourBound(ind) {
          if (ind < 0 || painted[ind] > 0) {
            // test bounds
            return false;
          }

          var ind4 = ind << 2; // get index of pixel

          differance = 0;

          if (sr === data[ind4] && sg === data[ind4 + 1] && sb === data[ind4 + 2] && sa === data[ind4 + 3]) {
            return false;
          }

          return true;
        } // this function checks the colour of only selected channels


        function checkColourLimited(ind) {
          var dr, dg, db, da;

          if (ind < 0 || painted[ind] > 0) {
            // test bounds
            return false;
          }

          var ind4 = ind << 2; // get index of pixel

          dr = dg = db = da = 0;

          if (sr !== null && (dr = Math.abs(sr - data[ind4])) > tolerance) {
            return false;
          }

          if (sg !== null && (dg = Math.abs(sg - data[ind4 + 1])) > tolerance) {
            return false;
          }

          if (sb !== null && (db = Math.abs(sb - data[ind4 + 2])) > tolerance) {
            return false;
          }

          if (sa !== null && (da = Math.abs(sa - data[ind4 + 3])) > tolerance) {
            return false;
          }

          differance = Math.max(dr, dg, db, da);
          return true;
        } // set which function to check colour with


        checkColour = checkColourAll;

        if (useBoundingColor) {
          sr = red;
          sg = green;
          sb = blue;

          if (alpha === null) {
            ind = y * w + x << 2; // get the starting pixel index

            sa = data[ind + 3];
          } else {
            sa = alpha;
          }

          checkColour = checkColourBound;
          useBoundingColor = false;
        } else if (useCompareColor) {
          sr = red;
          sg = green;
          sb = blue;
          sa = alpha;

          if (red === null || blue === null || green === null || alpha === null) {
            checkColour = checkColourLimited;
          }

          useCompareColor = false;
        } else {
          ind = y * w + x << 2; // get the starting pixel index

          sr = data[ind]; // get the start colour that we will use tolerance against.

          sg = data[ind + 1];
          sb = data[ind + 2];
          sa = data[ind + 3];
        }

        stack = []; // paint stack to find new pixels to paint

        lookLeft = false; // test directions

        lookRight = false;
        stackPos = 0;
        stack[stackPos++] = x;
        stack[stackPos++] = y;

        while (stackPos > 0) {
          // do while pixels on the stack
          y = stack[--stackPos]; // get the pixel y

          x = stack[--stackPos]; // get the pixel x

          ind = x + y * w;

          while (checkColour(ind - w)) {
            // find the top most pixel within tollerance;
            y -= 1;
            ind -= w;
          } //checkTop left and right if allowing diagonal painting


          if (diagonal && y > 0) {
            if (x > 0 && !checkColour(ind - 1) && checkColour(ind - w - 1)) {
              stack[stackPos++] = x - 1;
              stack[stackPos++] = y - 1;
            }

            if (x < w - 1 && !checkColour(ind + 1) && checkColour(ind - w + 1)) {
              stack[stackPos++] = x + 1;
              stack[stackPos++] = y - 1;
            }
          }

          lookLeft = false; // set look directions

          lookRight = false; // only look is a pixel left or right was blocked

          while (checkColour(ind) && y < h) {
            // move down till no more room
            if (toleranceFade > 0 && differance >= tolerance - toleranceFade) {
              painted[ind] = 255 - (differance - (tolerance - toleranceFade)) / toleranceFade * 255;
              painted[ind] = painted[ind] === 0 ? 1 : painted[ind]; // min value must be 1
            } else {
              painted[ind] = 255;
            }

            if (extentOnly) {
              extent.left = x < extent.left ? x : extent.left; // Faster than using Math.min

              extent.right = x > extent.right ? x : extent.right; // Faster than using Math.min

              extent.top = y < extent.top ? y : extent.top; // Faster than using Math.max

              extent.bottom = y > extent.bottom ? y : extent.bottom; // Faster than using Math.max
            }

            if (checkColour(ind - 1) && x > 0) {
              // check left is blocked
              if (!lookLeft) {
                stack[stackPos++] = x - 1;
                stack[stackPos++] = y;
                lookLeft = true;
              }
            } else if (lookLeft) {
              lookLeft = false;
            }

            if (checkColour(ind + 1) && x < w - 1) {
              // check right is blocked
              if (!lookRight) {
                stack[stackPos++] = x + 1;
                stack[stackPos++] = y;
                lookRight = true;
              }
            } else if (lookRight) {
              lookRight = false;
            }

            y += 1; // move down one pixel

            ind += w;
          }

          if (diagonal && y < h) {
            // check for diagonal areas and push them to be painted 
            if (checkColour(ind - 1) && !lookLeft && x > 0) {
              stack[stackPos++] = x - 1;
              stack[stackPos++] = y;
            }

            if (checkColour(ind + 1) && !lookRight && x < w - 1) {
              stack[stackPos++] = x + 1;
              stack[stackPos++] = y;
            }
          }
        }

        if (extentOnly) {
          extent.top += area.y;
          extent.bottom += area.y;
          extent.left += area.x;
          extent.right += area.x;
          return true;
        }

        canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        ctx = canvas.getContext("2d");
        ctx.fillStyle = context2D.fillStyle;
        ctx.fillRect(0, 0, w, h);
        colImgDat = ctx.getImageData(0, 0, w, h);

        if (copyPixels) {
          i = 0;
          ind = 0;

          if (cutPixels) {
            while (i < painted.length) {
              if (painted[i] > 0) {
                colImgDat.data[ind] = data[ind];
                colImgDat.data[ind + 1] = data[ind + 1];
                colImgDat.data[ind + 2] = data[ind + 2];
                colImgDat.data[ind + 3] = data[ind + 3] * (painted[i] / 255);
                data[ind + 3] = 255 - painted[i];
              } else {
                colImgDat.data[ind + 3] = 0;
              }

              i++;
              ind += 4;
            }

            context2D.putImageData(imgData, area.x, area.y);
          } else {
            while (i < painted.length) {
              if (painted[i] > 0) {
                colImgDat.data[ind] = data[ind];
                colImgDat.data[ind + 1] = data[ind + 1];
                colImgDat.data[ind + 2] = data[ind + 2];
                colImgDat.data[ind + 3] = data[ind + 3] * (painted[i] / 255);
              } else {
                colImgDat.data[ind + 3] = 0;
              }

              i++;
              ind += 4;
            }
          }

          ctx.putImageData(colImgDat, 0, 0);
          return true;
        } else {
          i = 0;
          ind = 3;

          while (i < painted.length) {
            colImgDat.data[ind] = painted[i];
            i++;
            ind += 4;
          }

          ctx.putImageData(colImgDat, 0, 0);
        }

        if (!keepMask) {
          context2D.drawImage(canvas, area.x, area.y, w, h);
        }

        return true;
      }

      return {
        fill: function fill(posX, posY, tolerance, context2D, diagonal, area, toleranceFade) {
          floodFill(posX, posY, tolerance, context2D, diagonal, area, toleranceFade);
          ctx = undefined;
          canvas = undefined;
        },
        getMask: function getMask(posX, posY, tolerance, context2D, diagonal, area, toleranceFade) {
          keepMask = true;
          floodFill(posX, posY, tolerance, context2D, diagonal, area, toleranceFade);
          ctx = undefined;
          keepMask = false;
          return canvas;
        },
        getExtent: function getExtent(posX, posY, tolerance, context2D, diagonal, area, toleranceFade) {
          extentOnly = true;

          if (floodFill(posX, posY, tolerance, context2D, diagonal, area, toleranceFade)) {
            extentOnly = false;
            return {
              top: extent.top,
              left: extent.left,
              right: extent.right,
              bottom: extent.bottom,
              width: extent.right - extent.left,
              height: extent.bottom - extent.top
            };
          }

          extentOnly = false;
          return null;
        },
        cut: function cut(posX, posY, tolerance, context2D, diagonal, area, toleranceFade) {
          cutPixels = true;
          copyPixels = true;
          floodFill(posX, posY, tolerance, context2D, diagonal, area, toleranceFade);
          cutPixels = false;
          copyPixels = false;
          ctx = undefined;
          return canvas;
        },
        copy: function copy(posX, posY, tolerance, context2D, diagonal, area, toleranceFade) {
          cutPixels = false;
          copyPixels = true;
          floodFill(posX, posY, tolerance, context2D, diagonal, area, toleranceFade);
          copyPixels = false;
          ctx = undefined;
          return canvas;
        },
        setCompareValues: function setCompareValues(R, G, B, A) {
          if (R === null && G === null && B === null && A === null) {
            return;
          }

          red = R;
          green = G;
          blue = B;
          alpha = A;
          useBoundingColor = false;
          useCompareColor = true;
        },
        setBoundingColor: function setBoundingColor(R, G, B, A) {
          red = R;
          green = G;
          blue = B;
          alpha = A;
          useCompareColor = false;
          useBoundingColor = true;
        }
      };
    }();
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


    var paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components */
    "./src/app/modules/mandala/components/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives */
    "./src/app/modules/mandala/directives/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services */
    "./src/app/modules/mandala/services/index.ts");
    /* harmony import */


    var _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./store/reducers/editor.reducer */
    "./src/app/modules/mandala/store/reducers/editor.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _store_effects_editor_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./store/effects/editor.effects */
    "./src/app/modules/mandala/store/effects/editor.effects.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MandalaModule = function MandalaModule() {
      _classCallCheck(this, MandalaModule);
    };

    MandalaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [_components__WEBPACK_IMPORTED_MODULE_14__["MandalaEditorExportSvgComponent"]],
      declarations: [_components__WEBPACK_IMPORTED_MODULE_14__["MandalaEditorComponent"], _components__WEBPACK_IMPORTED_MODULE_14__["MandalaEditorCanvasComponent"], _components__WEBPACK_IMPORTED_MODULE_14__["MandalaEditorColorpickerComponent"], _components__WEBPACK_IMPORTED_MODULE_14__["MandalaEditorToolsComponent"], _components__WEBPACK_IMPORTED_MODULE_14__["MandalaEditorExportSvgComponent"], _directives__WEBPACK_IMPORTED_MODULE_15__["MandalaDrawZonesDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('mandala', {
        editor: _store_reducers_editor_reducer__WEBPACK_IMPORTED_MODULE_17__["reducer"]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forFeature([_store_effects_editor_effects__WEBPACK_IMPORTED_MODULE_19__["EditorEffects"]])],
      exports: [_components__WEBPACK_IMPORTED_MODULE_14__["MandalaEditorComponent"]],
      providers: [_services__WEBPACK_IMPORTED_MODULE_16__["UndoService"], _services__WEBPACK_IMPORTED_MODULE_16__["EditorService"], _services__WEBPACK_IMPORTED_MODULE_16__["ToolService"], _services__WEBPACK_IMPORTED_MODULE_16__["CanvasService"], _services__WEBPACK_IMPORTED_MODULE_16__["IdbService"]]
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

        this.cachedPaperGroups = new Map();
        this.cachedPaperRasterizedGroups = new Map();
      }

      _createClass(CanvasService, [{
        key: "clear",
        value: function clear() {
          this.size = null;
          this.zonesElement = null;
          this.drawElement = null;
          this.fillElement = null;
          this.cachedCanvasRect = null;
          this.cachedPaperGroups.clear();
          this.cachedPaperRasterizedGroups.clear();
          this.fillProject = null;
          this.drawProject = null;
        }
      }, {
        key: "setZonesElement",
        value: function setZonesElement(zonesElement) {
          this.zonesElement = zonesElement;
        }
      }, {
        key: "setDrawElement",
        value: function setDrawElement(drawElement) {
          this.drawElement = drawElement;
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
          var canvases = [this.zonesElement, this.drawElement, this.fillElement];
          canvases.forEach(function (canvas) {
            if (canvas) {
              canvas.width = size.width;
              canvas.height = size.height;
            }
          });
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
        value: function addPaperItems(drawStepKey, items) {
          var group = new paper__WEBPACK_IMPORTED_MODULE_2__["Group"](items);
          var rasterize = group.rasterize();
          rasterize.remove();
          group.remove();
          this.cachedPaperGroups.set(drawStepKey, group);
          this.cachedPaperRasterizedGroups.set(group, rasterize);
          this.fillProject.activeLayer.addChild(rasterize);
          this.fillProject.view.update();
          this.drawProject.view.update();
        }
      }, {
        key: "removePaperItems",
        value: function removePaperItems(drawStepKey) {
          var group = this.cachedPaperGroups.get(drawStepKey);
          var rasterize = this.cachedPaperRasterizedGroups.get(group);
          this.cachedPaperRasterizedGroups.delete(group);
          this.cachedPaperGroups.delete(drawStepKey);
          group.remove();
          rasterize.remove();
          this.fillProject.view.update();
          this.drawProject.view.update();
          console.log('this.fillProject: ', this.fillProject);
        }
      }, {
        key: "getCachedPaperGroups",
        value: function getCachedPaperGroups() {
          return this.cachedPaperGroups;
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
        key: "getDrawState",
        value: function getDrawState() {
          return this.select(_store_selectors_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["editorState"]);
        }
      }, {
        key: "inited",
        value: function inited() {
          this.dispatch(_store_actions_editor_actions__WEBPACK_IMPORTED_MODULE_3__["inited"]({
            init: true
          }));
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
        value: function createTool(tool, backgroundRectangle) {
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
                observer.next(new _tools__WEBPACK_IMPORTED_MODULE_4__["FillBackgroundTool"](_this8.canvasService, backgroundRectangle, _this8.editorService, _this8.undoService));
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

  /*! exports provided: inited, zonesCount, enableDrawMirrored, disableDrawMirrored, tool, strokeWidth, color, addUserdDrawStep, removeUserdDrawStep, updateCanvasSize, clearUserdDrawSteps */

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


    __webpack_require__.d(__webpack_exports__, "updateCanvasSize", function () {
      return updateCanvasSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearUserdDrawSteps", function () {
      return clearUserdDrawSteps;
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
    var color = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Color', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var addUserdDrawStep = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Add user draw step', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var removeUserdDrawStep = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Remove user draw step', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var updateCanvasSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Update canvas size', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var clearUserdDrawSteps = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Mandala Editor] Clear user draw steps');
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
        return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["color"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["disableDrawMirrored"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["enableDrawMirrored"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["strokeWidth"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["tool"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["zonesCount"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["addUserdDrawStep"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["removeUserdDrawStep"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["clearUserdDrawSteps"], _actions_editor_actions__WEBPACK_IMPORTED_MODULE_5__["updateCanvasSize"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
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

    var initialState = {
      init: false,
      zonesCount: 10,
      isDrawMirrored: false,
      tool: {
        type: _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_FREE
      },
      strokeWidth: 6,
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

    var transformReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["zonesCount"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["enableDrawMirrored"], updatePropStatus('isDrawMirrored', true)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["disableDrawMirrored"], updatePropStatus('isDrawMirrored', false)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["tool"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["strokeWidth"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["color"], updateState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["addUserdDrawStep"], addUserDrawStep), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["removeUserdDrawStep"], removeUserDrawStep), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_editor_actions__WEBPACK_IMPORTED_MODULE_2__["clearUserdDrawSteps"], function (state) {
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

  /*! exports provided: selectMandalaEditor, zonesCount, size, isDrawMirrored, tool, strokeWidth, color, editorState */

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
        key: "drawStartIteration",
        value: function drawStartIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
          var _this12 = this;

          var createPath = function createPath(rotatePoint, rotate) {
            var path = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"]();
            path.moveTo(rotatePoint.rotate(rotate, _this12.centerPoint));
            path.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](_this12.color);
            path.strokeWidth = _this12.strokeWidth; // path.selected = true;

            return path;
          };

          var diff = angle + zoneStep / 2;
          var point = startPoint.rotate(zoneAngle, this.centerPoint); // const mirrorPoint = point.rotate(diff * 2, this.centerPoint);
          // const path2 = new paper.Path.Line(mirrorPoint, mirrorPoint);
          // path2.strokeColor = new paper.Color(this.color);
          // path2.strokeWidth = 4;

          this.drawPaths.push([createPath(startPoint, zoneAngle), this.isDrawMirrored ? createPath(point, diff * 2) : null]);
        }
      }, {
        key: "drawIteration",
        value: function drawIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
          var _this$drawPaths$zoneI = _slicedToArray(this.drawPaths[zoneIndex], 2),
              zonePath = _this$drawPaths$zoneI[0],
              mirrorPath = _this$drawPaths$zoneI[1];

          if (zonePath) {
            zonePath.add(startPoint.rotate(zoneAngle, this.centerPoint));
          }

          if (mirrorPath) {
            var diff = angle + zoneStep / 2;
            var point = startPoint.rotate(zoneAngle, this.centerPoint);
            var mirrorPoint = point.rotate(diff * 2, this.centerPoint);
            mirrorPath.add(mirrorPoint);
          }
        }
      }, {
        key: "drawEndIteration",
        value: function drawEndIteration(zoneIndex, zoneAngle, zoneStep) {
          var _this$drawPaths$zoneI2 = _slicedToArray(this.drawPaths[zoneIndex], 2),
              zonePath = _this$drawPaths$zoneI2[0],
              mirrorPath = _this$drawPaths$zoneI2[1];

          if (zonePath) {
            zonePath.simplify();
          }

          if (mirrorPath) {
            mirrorPath.simplify();
          }
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

    var DrawImageTool =
    /*#__PURE__*/
    function (_draw_base__WEBPACK_I2) {
      _inherits(DrawImageTool, _draw_base__WEBPACK_I2);

      function DrawImageTool(canvasService, editorService, undoService) {
        var _this13;

        _classCallCheck(this, DrawImageTool);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(DrawImageTool).call(this, editorService));
        _this13.canvasService = canvasService;
        _this13.editorService = editorService;
        _this13.undoService = undoService;
        _this13.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_IMAGE;
        return _this13;
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
          var scale = 500 / (isWidthBigger ? this.drawImage.size.width : this.drawImage.size.height);
          this.drawImage.size = new paper__WEBPACK_IMPORTED_MODULE_2__["Size"](scale * this.drawImage.size.width, scale * this.drawImage.size.height); // this.drawImage.scale(300 / (isWidthBigger ? this.drawImage.size.width : this.drawImage.size.height));

          console.log('this.drawImage: ', this.drawImage);
        }
      }, {
        key: "drawStartIteration",
        value: function drawStartIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
          var point = startPoint.rotate(zoneAngle, this.centerPoint);
          var path = this.drawImage.clone();
          path.position = point;
          path.scale(50 / path.size.width);
          paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(path);
          console.log('path: ', path);
          var diff = angle + zoneStep / 2;
          var mirrorPoint = point.rotate(diff * 2, this.centerPoint);
          var path2 = this.drawImage.clone();
          path2.position = mirrorPoint;

          if (this.isDrawMirrored) {
            paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(path2);
          }

          this.drawPaths.push([path, this.isDrawMirrored ? path2 : null]);
        }
      }, {
        key: "drawIteration",
        value: function drawIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
          var dist = startPoint.getDistance(this.drawStartPoint);

          var _this$drawPaths$zoneI3 = _slicedToArray(this.drawPaths[zoneIndex], 2),
              zonePath = _this$drawPaths$zoneI3[0],
              mirrorPath = _this$drawPaths$zoneI3[1]; // paper.project.clear();


          if (zonePath) {
            zonePath.remove();
            var position = zonePath.position;
            zonePath = this.drawImage.clone();
            zonePath.position = position;
            this.scale = (50 + dist * 2) / zonePath.width;
            zonePath.scale(this.scale);
            var vector = startPoint.subtract(this.drawStartPoint);
            zonePath.rotate(vector.angle);
            paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(zonePath);
          }

          if (mirrorPath) {
            mirrorPath.remove();
            var _position = mirrorPath.position;
            mirrorPath = this.drawImage.clone();
            mirrorPath.position = _position;
            mirrorPath.scale((50 + dist * 2) / mirrorPath.width);
            var diff = angle + zoneStep / 2;
            var point = startPoint.rotate(zoneAngle, this.centerPoint);
            var mirrorPoint = point.rotate(diff * 2, this.centerPoint);

            var _vector = mirrorPoint.subtract(mirrorPath.position);

            mirrorPath.rotate(_vector.angle);
            paper__WEBPACK_IMPORTED_MODULE_2__["project"].activeLayer.addChild(mirrorPath);
          }

          this.drawPaths[zoneIndex] = [zonePath, mirrorPath]; // if (mirrorPath) {
          //     mirrorPath.scale(.1 * zoneIndex, .1 * zoneIndex);
          // }
        }
      }, {
        key: "drawEndIteration",
        value: function drawEndIteration(zoneIndex, zoneAngle, zoneStep) {// let [zonePath, mirrorPath] = this.drawPaths[zoneIndex];
          // if (zonePath) {
          //     const drawImage = this.svgGroup.clone();
          //     drawImage.size = zonePath.size;
          //     drawImage.position = zonePath.position;
          //     drawImage.rotate(zonePath.rotation);
          //     // debugger;
          //     drawImage.scale(zonePath.scaling.x + zonePath.scaling.y);
          //     zonePath = drawImage;
          // }
          // if (mirrorPath) {
          //     const drawImage = this.svgGroup.clone();
          //     drawImage.size = mirrorPath.size;
          //     drawImage.position = mirrorPath.position;
          //     drawImage.scale = mirrorPath.scale;
          //     drawImage.rotate(mirrorPath.rotation);
          //     mirrorPath = drawImage;
          // }
          // this.drawPaths[zoneIndex] = [zonePath, mirrorPath];
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
        var _this14;

        _classCallCheck(this, DrawLineTool);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(DrawLineTool).call(this, editorService));
        _this14.canvasService = canvasService;
        _this14.editorService = editorService;
        _this14.undoService = undoService;
        _this14.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].DRAW_LINE;
        return _this14;
      }

      _createClass(DrawLineTool, [{
        key: "drawStartIteration",
        value: function drawStartIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
          var point = startPoint.rotate(zoneAngle, this.centerPoint);
          var path = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Line(point, point);
          path.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
          path.strokeWidth = this.strokeWidth;
          var diff = angle + zoneStep / 2;
          var mirrorPoint = point.rotate(diff * 2, this.centerPoint);
          var path2 = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Line(mirrorPoint, mirrorPoint);
          path2.strokeColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](this.color);
          path2.strokeWidth = this.strokeWidth;
          this.drawPaths.push([path, this.isDrawMirrored ? path2 : null]);
        }
      }, {
        key: "drawIteration",
        value: function drawIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle) {
          var _this$drawPaths$zoneI4 = _slicedToArray(this.drawPaths[zoneIndex], 2),
              zonePath = _this$drawPaths$zoneI4[0],
              mirrorPath = _this$drawPaths$zoneI4[1];

          if (zonePath) {
            var _zonePath$segments = _slicedToArray(zonePath.segments, 2),
                toSegment = _zonePath$segments[1];

            toSegment.point = startPoint.rotate(zoneAngle, this.centerPoint);
          }

          if (mirrorPath) {
            var _mirrorPath$segments = _slicedToArray(mirrorPath.segments, 2),
                _toSegment = _mirrorPath$segments[1];

            var diff = angle + zoneStep / 2;
            var point = startPoint.rotate(zoneAngle, this.centerPoint);
            var mirrorPoint = point.rotate(diff * 2, this.centerPoint);
            _toSegment.point = mirrorPoint;
          }
        }
      }, {
        key: "drawEndIteration",
        value: function drawEndIteration(zoneIndex, zoneAngle, zoneStep) {
          var _this$drawPaths$zoneI5 = _slicedToArray(this.drawPaths[zoneIndex], 2),
              zonePath = _this$drawPaths$zoneI5[0],
              mirrorPath = _this$drawPaths$zoneI5[1];

          if (zonePath) {
            zonePath.simplify();
          }

          if (mirrorPath) {
            mirrorPath.simplify();
          }
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

    var EditorDrawToolBase =
    /*#__PURE__*/
    function (_tool_base__WEBPACK_I) {
      _inherits(EditorDrawToolBase, _tool_base__WEBPACK_I);

      function EditorDrawToolBase() {
        var _this15;

        _classCallCheck(this, EditorDrawToolBase);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(EditorDrawToolBase).apply(this, arguments));
        _this15.drawPaths = [];
        _this15.drawPoints = [];
        return _this15;
      }

      _createClass(EditorDrawToolBase, [{
        key: "enable",
        value: function enable() {
          _get(_getPrototypeOf(EditorDrawToolBase.prototype), "enable", this).call(this);

          this.addSubscriptions();
        }
      }, {
        key: "disable",
        value: function disable() {
          _get(_getPrototypeOf(EditorDrawToolBase.prototype), "disable", this).call(this);

          this.hummerManager.destroy();
        }
      }, {
        key: "addSubscriptions",
        value: function addSubscriptions() {
          var _this16 = this;

          var pan = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Pan"]();
          this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Manager"](this.canvasService.getDrawElement());
          this.hummerManager.add([pan]);
          var pan$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this16.hummerManager.on('pan', function (e) {
              return observer.next(e);
            });
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(30));
          this.hummerManager.on('panstart', function (e) {
            var point = _this16.canvasService.normalizePoint(e.center);

            _this16.drawStart(point);
          });
          pan$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.clear$)).subscribe(function (e) {
            var point = _this16.canvasService.normalizePoint(e.center);

            _this16.draw(point);
          });
          this.hummerManager.on('panend', function () {
            return _this16.drawEnd();
          });
        }
      }, {
        key: "drawStart",
        value: function drawStart(_ref7) {
          var _this17 = this;

          var x = _ref7.x,
              y = _ref7.y;
          this.drawPoints.push({
            x: x,
            y: y
          });
          var size = this.canvasService.getCanvasSize();
          this.isDrawing = true;
          this.centerPoint = this.getCanvasCenterPoint();
          var startPoint = this.createPoint(x, y);
          this.drawStartPoint = startPoint;
          var halfHeight = size.height / 2;
          var point2 = new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](y > halfHeight ? 0 : size.height, halfHeight);
          var vector1 = startPoint.subtract(this.centerPoint);
          var vector2 = point2.subtract(this.centerPoint);
          var angle = vector1.getAngle(vector2);
          this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
            _this17.drawStartIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle);
          });
        }
      }, {
        key: "draw",
        value: function draw(_ref8) {
          var _this18 = this;

          var x = _ref8.x,
              y = _ref8.y;

          if (this.isDrawing) {
            this.drawPoints.push({
              x: x,
              y: y
            });
            var size = this.canvasService.getCanvasSize();
            var centerPoint = this.getCanvasCenterPoint();
            var startPoint = this.createPoint(x, y);
            var halfHeight = size.height / 2;
            var point2 = new paper__WEBPACK_IMPORTED_MODULE_5__["Point"](y > halfHeight ? 0 : size.height, halfHeight);
            var vector1 = startPoint.subtract(centerPoint);
            var vector2 = point2.subtract(centerPoint);
            var angle = vector1.getAngle(vector2);
            this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
              _this18.drawIteration(zoneIndex, zoneAngle, zoneStep, startPoint, angle);
            });
            this.canvasService.drawProject.view.update();
          }
        }
      }, {
        key: "drawEnd",
        value: function drawEnd() {
          var _this19 = this;

          this.zonesIteration(function (zoneIndex, zoneAngle, zoneStep) {
            _this19.drawEndIteration(zoneIndex, zoneAngle, zoneStep);
          });
          this.canvasService.drawProject.view.update();
          this.isDrawing = false;
          var drawStep = {
            tool: {
              type: this.tool,
              params: this.toolParams
            },
            color: this.color,
            zonesCount: this.zonesCount,
            isDrawMirrored: this.isDrawMirrored,
            strokeWidth: this.strokeWidth,
            points: this.drawPoints
          };
          var drawPaths = this.drawPaths;
          var allDrawPaths = drawPaths.reduce(function (list, paths) {
            paths.forEach(function (p) {
              return p && list.push(p);
            });
            return list;
          }, []);
          var drawStepKey = this.editorService.addUserDrawStep(drawStep);
          this.canvasService.addPaperItems(drawStepKey, allDrawPaths);
          this.undoService.addCommand({
            undo: function undo() {
              _this19.editorService.removeUserDrawStep(drawStepKey);

              _this19.canvasService.removePaperItems(drawStepKey);
            },
            redo: function redo() {
              _this19.editorService.addUserDrawStep(drawStep, drawStepKey);

              _this19.canvasService.addPaperItems(drawStepKey, allDrawPaths);
            }
          });
          this.drawPaths = [];
          this.drawPoints = [];
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

      function FillBackgroundTool(canvasService, backgroundRect, editorService, undoService) {
        var _this20;

        _classCallCheck(this, FillBackgroundTool);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(FillBackgroundTool).call(this, editorService));
        _this20.canvasService = canvasService;
        _this20.backgroundRect = backgroundRect;
        _this20.editorService = editorService;
        _this20.undoService = undoService;
        _this20.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS"].FILL_BACKGROUND;
        return _this20;
      }

      _createClass(FillBackgroundTool, [{
        key: "tap",
        value: function tap(point) {
          var _this21 = this;

          var drawStep = {
            tool: {
              type: this.tool
            },
            color: this.color,
            zonesCount: this.zonesCount,
            isDrawMirrored: this.isDrawMirrored,
            strokeWidth: this.strokeWidth,
            points: [point]
          };
          var drawStepKey = this.editorService.addUserDrawStep(drawStep);
          var prevColor = this.backgroundRect.fillColor;
          var currentColor = this.color;
          this.updateBackgroundColor(currentColor);
          this.undoService.addCommand({
            undo: function undo() {
              _this21.updateBackgroundColor(prevColor);

              _this21.editorService.removeUserDrawStep(drawStepKey);
            },
            redo: function redo() {
              _this21.updateBackgroundColor(currentColor);

              _this21.editorService.addUserDrawStep(drawStep, drawStepKey);
            }
          });
        }
      }, {
        key: "updateBackgroundColor",
        value: function updateBackgroundColor(color) {
          this.backgroundRect.fillColor = new paper__WEBPACK_IMPORTED_MODULE_2__["Color"](color);
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


    var paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! paper */
    "./node_modules/paper/dist/paper-full.js");
    /* harmony import */


    var paper__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _enums_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../enums/tools */
    "./src/app/modules/mandala/enums/tools.ts");

    var svg = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 595.28 841.89\" style=\"enable-background:new 0 0 595.28 841.89;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n.st0{stroke:#000000;stroke-miterlimit:10;}\n.st1{fill:none;stroke:#000000;stroke-width:4;stroke-miterlimit:10;}\n.st2{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}\n.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n.st4{fill:none;stroke:#000000;stroke-miterlimit:10;}\n.st5{stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n</style>\n<g id=\"\u0421\u043B\u043E\u0439_12\">\n<g>\n   <g>\n       <g>\n           <path d=\"M403.28,141.43c-0.6,0.88-1.34,2.05-2.67,3.04c-0.66,0.48-1.53,0.86-2.49,0.87c-0.94,0.04-2.04-0.34-2.67-1.21\n               c-0.63-0.84-0.84-1.88-0.93-2.86c-0.08-0.99-0.05-2,0.1-3c0.29-2,1.08-3.93,2.22-5.51c-0.92,1.71-1.51,3.64-1.67,5.57\n               c-0.09,0.96-0.06,1.93,0.05,2.86c0.11,0.92,0.35,1.81,0.85,2.44c0.49,0.63,1.26,0.89,2.02,0.86c0.76-0.02,1.45-0.32,2.02-0.73\n               c1.14-0.83,1.89-1.96,2.45-2.8c1.62-2.61,1.91-3.98,2.21-4.5l0.42,0.25c-0.35,0.23-0.45,0.2-0.51,0.13\n               c-0.07-0.07-0.09-0.17,0.16-0.5l0.53-0.7l-0.11,0.96c-0.04,0.31-0.13,0.81-0.4,1.6C404.59,138.98,404.15,140.07,403.28,141.43z\"\n               />\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M409.54,155.79c-2.02,1.7-5.01,3.61-9,4.11c-1.97,0.23-4.21,0.03-6.27-0.9c-2.06-0.91-3.89-2.43-5.35-4.26\n               c-2.93-3.68-4.49-8.5-4.79-13.37c-0.13-2.44,0.09-4.91,0.62-7.28c0.56-2.36,1.43-4.63,2.59-6.67c-0.89,2.18-1.5,4.48-1.83,6.81\n               c-0.3,2.34-0.32,4.71-0.05,7.02c0.58,4.6,2.26,9.04,4.96,12.27c1.34,1.61,2.94,2.87,4.66,3.6c1.71,0.75,3.53,0.91,5.21,0.71\n               c3.39-0.43,6.11-2.09,7.91-3.62c2.3-1.98,3.72-3.91,4.82-5.36c1.08-1.47,1.81-2.53,2.36-3.23c1.08-1.42,1.4-1.46,1.64-1.31\n               c0.24,0.15,0.37,0.44-0.4,2.07c-0.39,0.81-1,1.96-2.04,3.56C413.53,151.52,412.08,153.61,409.54,155.79z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M420.53,166.32c-2.09,0.76-4.44,1.91-7.19,3.14c-2.76,1.21-5.89,2.43-9.48,3.14c-3.56,0.69-7.72,0.85-11.76-0.58\n               c-4.03-1.38-7.58-4.13-10.37-7.5c-2.82-3.39-4.81-7.45-6.32-11.61c-1.52-4.18-2.57-8.49-3.73-12.75\n               c-1.16-4.25-2.44-8.47-4.4-12.38c-1.96-3.91-4.59-7.5-7.14-11.05c2.97,3.19,5.99,6.48,8.4,10.34c2.4,3.86,4.06,8.14,5.51,12.36\n               c1.45,4.23,2.72,8.43,4.32,12.33c1.6,3.9,3.55,7.53,6.1,10.43c2.53,2.91,5.6,5.16,8.85,6.22c3.24,1.1,6.65,0.99,9.79,0.38\n               c6.36-1.26,11.4-4.39,16.08-6.08c2.11-0.79,4.22-1.29,6.15-1.5c1.93-0.21,3.7-0.19,5.27-0.01c3.16,0.36,5.58,1.18,7.38,2.03\n               c1.81,0.84,3.03,1.69,3.86,2.4c0.85,0.68,1.29,1.26,1.56,1.64l0.37,0.52l-0.06,0.26c-0.05,0.2-0.18,0.43-0.38,0.57\n               c-0.2,0.14-0.38,0.16-0.52,0.16c-0.26-0.02-0.39-0.11-0.5-0.19c-0.21-0.17-0.32-0.4-0.31-0.64c0.02-0.23,0.17-0.31,0.24-0.31\n               c0.08-0.01,0.15,0.03,0.21,0.08c0.1,0.06,0.25,0.27,0.39,0.03c0.04-0.12,0.03-0.23,0.01-0.31c-0.02-0.04-0.03-0.09-0.16-0.12\n               c-0.07-0.01-0.18-0.01-0.32,0.08c-0.14,0.09-0.24,0.25-0.27,0.37l0.3,0.78c-0.44-0.11-1.02-0.4-1.91-0.8\n               c-0.88-0.41-2.06-0.97-3.71-1.54c-1.64-0.57-3.77-1.14-6.49-1.35C427.55,164.69,424.3,164.89,420.53,166.32z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M376.95,142.24c0.44-2.07,1.05-5.45-0.13-8.99c-0.57-1.74-1.63-3.48-3.23-4.67c-1.59-1.19-3.65-1.83-5.67-1.75\n               c2-0.34,4.22,0.11,6,1.27c1.8,1.16,3.04,3.01,3.69,4.86c0.68,1.86,0.85,3.74,0.78,5.37c-0.06,1.63-0.33,3.02-0.57,4.09\n               c-0.3,1.36-0.61,2.37-0.86,3.14c-0.26,0.78-0.42,1.25-0.63,1.68c-0.12,0.21-0.39,0.5-0.76,0.3c-0.24-0.25-0.14-0.38-0.09-0.5\n               c0.07-0.14,0.26-0.13,0.26-0.08c0.03,0.04,0.02,0.07,0.01,0.09l-0.04,0.08c-0.02,0.04,0.06,0.05,0.09,0.03\n               c0.01-0.02,0.09,0.06,0.04-0.04c-0.15-0.08-0.1-0.01-0.08-0.15C375.88,146.3,376.34,144.85,376.95,142.24z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M384.22,159.46c0.01-0.92,0.03-2.09-0.04-3.42c-0.07-1.32-0.25-2.82-0.84-4.26c-0.57-1.44-1.67-2.77-3.14-3.62\n               c-0.73-0.43-1.54-0.74-2.38-0.9c-0.42-0.08-0.85-0.15-1.26-0.09c-0.4,0.06-0.86,0.26-0.93,0.71c0.01-0.46,0.48-0.76,0.9-0.86\n               c0.44-0.12,0.9-0.09,1.34-0.05c0.89,0.09,1.77,0.35,2.57,0.76c1.62,0.79,2.9,2.22,3.55,3.77c0.68,1.55,0.87,3.14,0.95,4.5\n               c0.07,1.37,0.04,2.55,0.03,3.47c-0.02,2.27-0.07,3.5-0.15,4.16l-0.03,0.3l-0.25-0.03c-0.69-0.09-0.76-0.19-0.76-0.3\n               c0-0.11,0.08-0.2,0.78-0.24l-0.28,0.27C384.22,162.96,384.19,161.73,384.22,159.46z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M398.83,167.65c-0.97-1.35-2.89-3.25-5.69-4.22c-1.39-0.49-2.96-0.76-4.55-0.72c-0.8,0.02-1.6,0.11-2.39,0.28\n               c-0.38,0.08-0.76,0.23-1.07,0.46c-0.31,0.22-0.56,0.61-0.41,1.01c-0.21-0.37,0.01-0.85,0.32-1.11c0.31-0.29,0.69-0.49,1.09-0.61\n               c0.79-0.25,1.61-0.41,2.43-0.48c1.65-0.15,3.32,0.06,4.79,0.55c3,0.96,5.03,3.01,6.05,4.43c1.09,1.51,1.46,2.62,1.65,3.27\n               l0.05,0.18l-0.12,0.11c-0.2,0.18-0.17,0.44-0.17,0.53c0.01,0.11,0,0.17-0.05,0.21c-0.04,0.03-0.1,0.07-0.23-0.06\n               c-0.06-0.07-0.13-0.18-0.16-0.36c-0.03-0.18-0.02-0.45,0.21-0.71l-0.07,0.29C400.25,170.09,399.86,169.08,398.83,167.65z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M413.36,161.72c-0.78-0.32-1.85-0.58-3.08-0.52c-1.23,0.04-2.59,0.49-3.81,1.37c-1.23,0.87-2.3,2.11-3.17,3.51\n               c-0.88,1.4-1.59,2.95-2.29,4.43c0.51-1.56,1.08-3.18,1.89-4.67c0.8-1.49,1.88-2.85,3.18-3.82c1.29-0.98,2.81-1.51,4.17-1.55\n               c1.36-0.07,2.53,0.23,3.39,0.58c2.18,0.9,2.9,2.13,3.23,2.59c0.3,0.43,0.38,0.37,0.38,0.51c0,0.05-0.01,0.1-0.14,0.12\n               c-0.12,0.02-0.38-0.05-0.63-0.3c-0.25-0.25-0.51-0.55-0.98-0.97C415.02,162.6,414.35,162.12,413.36,161.72z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M428.46,160.59c-1.18-1.06-3.42-2.46-6.24-2.71c-0.69-0.05-1.37,0.07-1.98,0.44c-0.61,0.37-1.14,0.92-1.56,1.55\n               c-0.86,1.25-1.3,2.83-1.24,4.38c-0.26-1.52,0.03-3.22,0.86-4.61c0.41-0.7,0.95-1.33,1.64-1.79c0.68-0.47,1.55-0.65,2.31-0.6\n               c3.06,0.19,5.41,1.71,6.66,2.83c1.37,1.23,1.93,2.22,2.23,2.79l0.07,0.14l-0.06,0.12c-0.11,0.2-0.32,0.46-0.62,0.41\n               c-0.2-0.04-0.26-0.19-0.27-0.26c-0.02-0.08,0-0.15,0.02-0.21c0.05-0.13,0.21-0.16,0.24-0.12c0.03,0.03,0.03,0.06,0.02,0.08\n               c-0.03,0.04-0.05,0.12,0.04,0.1c0,0.01,0.11,0.06,0-0.02c-0.02-0.01,0.03-0.04,0.11-0.23l0.01,0.25\n               C430.31,162.64,429.75,161.74,428.46,160.59z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M389.23,146.14c0.34-0.56,0.71-1.3,1.01-2.21c0.29-0.9,0.58-1.98,0.2-3c-0.36-1.03-1.3-1.91-2.4-2.43\n               c-1.11-0.53-2.39-0.76-3.6-1c1.23,0.08,2.53,0.2,3.74,0.68c1.2,0.48,2.28,1.38,2.74,2.57c0.47,1.22,0.14,2.44-0.16,3.36\n               c-0.31,0.95-0.71,1.73-1.07,2.32c-0.92,1.47-1.69,2.04-2.07,2.32c-0.4,0.27-0.49,0.24-0.53,0.18c-0.05-0.06-0.04-0.14,0.28-0.47\n               C387.68,148.11,388.36,147.54,389.23,146.14z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M394.05,153.21c0.2-0.57,0.44-1.31,0.49-2.15c0.07-0.84-0.26-1.78-1.14-2.3c-0.85-0.54-1.99-0.72-3.11-0.67\n               c-1.12,0.05-2.27,0.36-3.22,0.98c0.87-0.74,2.03-1.17,3.2-1.3c1.16-0.12,2.39,0,3.38,0.59c0.49,0.29,0.9,0.72,1.14,1.22\n               c0.23,0.5,0.29,1.03,0.26,1.5c-0.06,0.94-0.31,1.69-0.51,2.27c-0.5,1.47-0.79,2.24-0.97,2.63c-0.05,0.1-0.14,0.23-0.29,0.26\n               c-0.16,0.01-0.21-0.07-0.24-0.13c-0.04-0.15,0.05-0.15,0.07-0.13c0.03,0.01,0.06,0.05,0.09,0.02c0.05-0.04-0.03,0.02,0.04-0.15\n               C393.32,155.42,393.55,154.65,394.05,153.21z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M403.46,154.67c-0.39-0.5-0.97-1.08-1.79-1.52c-0.81-0.42-1.87-0.71-2.97-0.53c-1.09,0.15-2.09,0.92-3.07,1.69\n               c-0.49,0.39-0.96,0.8-1.41,1.24c-0.23,0.22-0.46,0.43-0.64,0.67c-0.18,0.24-0.32,0.55-0.21,0.85c-0.15-0.29-0.04-0.64,0.12-0.91\n               c0.16-0.28,0.38-0.52,0.59-0.76c0.42-0.48,0.86-0.93,1.33-1.36c0.93-0.83,1.95-1.71,3.21-1.92c1.23-0.22,2.41,0.08,3.31,0.55\n               c0.91,0.48,1.54,1.13,1.97,1.68c1.05,1.43,1.1,2.45,1.14,2.91c0,0.49-0.08,0.54-0.15,0.54c-0.08,0-0.14-0.05-0.23-0.49\n               C404.52,156.88,404.41,155.97,403.46,154.67z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M410.2,150.04c-0.53-0.26-1.25-0.51-2.11-0.52c-0.85-0.03-1.83,0.22-2.62,0.87c-0.81,0.63-1.37,1.66-1.34,2.79\n               c0.01,1.13,0.45,2.25,0.86,3.32c-0.54-1-1.1-2.09-1.19-3.3c-0.12-1.22,0.48-2.45,1.37-3.16c0.88-0.75,1.99-1.05,2.93-1.02\n               c0.95,0.02,1.75,0.3,2.32,0.58c0.72,0.36,1.22,0.77,1.52,1.17c0.3,0.39,0.38,0.79,0.39,0.98c0.03,0.17,0.09,0.22,0.06,0.24\n               c0.01,0.03,0.06,0.03,0.08,0.06c0.01,0.02,0.06,0.07-0.06,0.13c-0.16,0.04-0.33-0.1-0.43-0.34c-0.07-0.23-0.15-0.47-0.42-0.8\n               C411.32,150.73,410.87,150.37,410.2,150.04z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M412.99,144.55c-0.5,0.42-1.1,1.29-1.28,2.46c-0.21,1.16-0.02,2.5,0.17,3.74c-0.35-1.21-0.62-2.56-0.43-3.78\n               c0.15-1.23,0.82-2.18,1.36-2.63c0.68-0.58,1.16-0.7,1.39-0.76c0.24-0.05,0.28-0.02,0.29,0.02c0.01,0.04-0.01,0.07-0.22,0.17\n               C414.06,143.87,413.62,144.01,412.99,144.55z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M390.02,131.92c-0.22,0.76-0.68,1.91-1.54,3.01c-0.85,1.1-2.1,2.1-3.46,2.61c1.28-0.68,2.42-1.71,3.22-2.79\n               c0.8-1.08,1.26-2.19,1.47-2.92c0.26-0.93,0.31-1.44,0.36-1.7c0.05-0.27,0.09-0.3,0.14-0.29s0.08,0.03,0.09,0.31\n               C390.32,130.43,390.29,130.96,390.02,131.92z\"/>\n       </g>\n   </g>\n</g>\n<circle class=\"st0\" cx=\"398.66\" cy=\"139.95\" r=\"1.53\"/>\n<circle class=\"st0\" cx=\"373.97\" cy=\"133.04\" r=\"1.07\"/>\n<circle class=\"st0\" cx=\"380.98\" cy=\"152.33\" r=\"1.04\"/>\n<circle class=\"st0\" cx=\"393.13\" cy=\"165.85\" r=\"1\"/>\n<circle class=\"st0\" cx=\"408.51\" cy=\"164.75\" r=\"1.07\"/>\n<circle class=\"st0\" cx=\"422\" cy=\"160.31\" r=\"0.73\"/>\n<circle class=\"st0\" cx=\"414.49\" cy=\"156.32\" r=\"1.14\"/>\n<circle class=\"st0\" cx=\"400.23\" cy=\"162.66\" r=\"1.14\"/>\n<circle class=\"st0\" cx=\"388.66\" cy=\"159.33\" r=\"1.14\"/>\n<circle class=\"st0\" cx=\"381.52\" cy=\"143.88\" r=\"1.14\"/>\n<circle class=\"st0\" cx=\"380.9\" cy=\"130.92\" r=\"1.14\"/>\n<g>\n   <g>\n       <g>\n           <path d=\"M380.82,189.43c0.16-1.99,0.2-4.28-0.02-6.74c-0.23-2.45-0.74-5.1-1.9-7.61c-0.58-1.26-1.31-2.47-2.24-3.55\n               c-0.93-1.09-2.06-2.06-3.35-2.82c-1.28-0.76-2.72-1.29-4.21-1.5c-1.48-0.18-3.11-0.07-4.21,0.59c-1.06,0.58-1.71,1.86-1.76,3.37\n               c-0.06,1.47,0.52,3.12,1.3,4.78c1.58,3.38,3.5,6.71,5.7,9.88c2.17,3.15,4.88,6.22,6.51,9.98c0.81,1.87,1.27,3.9,1.23,5.92\n               c-0.04,2.01-0.64,4.01-1.86,5.53c1.02-1.66,1.34-3.62,1.17-5.51c-0.17-1.89-0.78-3.72-1.69-5.38c-1.83-3.35-4.64-6.09-7.12-9.23\n               c-2.49-3.12-4.65-6.47-6.46-9.95c-0.9-1.75-1.78-3.74-1.79-6.05c0-1.13,0.22-2.29,0.73-3.37c0.5-1.07,1.38-2.07,2.4-2.68\n               c2.08-1.24,4.25-1.31,6.23-1.13c2.01,0.23,3.88,0.92,5.52,1.86c3.29,1.88,5.64,4.85,7,7.84c1.39,3.01,1.94,6.03,2.19,8.74\n               c0.24,2.72,0.18,5.16,0.01,7.32c-0.44,5.43-1.73,9.45-2.89,12.38c-1.2,2.94-2.34,4.82-3.19,6.07c-0.87,1.24-1.47,1.84-1.89,2.11\n               c-0.41,0.27-0.64,0.22-0.84,0.09c-0.42-0.27-0.53-0.74,0.62-3.36c0.54-1.33,1.39-3.2,2.36-6\n               C379.31,198.19,380.42,194.46,380.82,189.43z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M198.56,140.74c0.58,0.83,1.35,1.94,2.5,2.75c0.58,0.4,1.27,0.69,2.03,0.7c0.75,0.02,1.52-0.25,2-0.89\n               c0.49-0.63,0.71-1.53,0.81-2.45c0.1-0.93,0.11-1.9,0-2.86c-0.19-1.93-0.82-3.85-1.77-5.54c1.16,1.56,1.99,3.48,2.32,5.47\n               c0.17,0.99,0.22,2.01,0.16,2.99c-0.06,0.98-0.25,2.02-0.87,2.87c-0.62,0.88-1.71,1.28-2.65,1.26c-0.96,0-1.84-0.37-2.51-0.83\n               c-1.35-0.96-2.11-2.12-2.73-2.99c-0.9-1.34-1.35-2.42-1.64-3.2c-0.28-0.78-0.38-1.28-0.42-1.59l-0.13-0.95l0.54,0.69\n               c0.26,0.33,0.24,0.43,0.17,0.5c-0.06,0.07-0.16,0.1-0.51-0.12l0.42-0.26C196.58,136.8,196.9,138.16,198.56,140.74z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M193.16,154.1c1.82,1.49,4.57,3.11,7.97,3.47c1.68,0.16,3.5-0.03,5.2-0.81c1.71-0.76,3.29-2.06,4.6-3.69\n               c2.65-3.27,4.24-7.74,4.74-12.35c0.23-2.32,0.16-4.69-0.18-7.02c-0.37-2.33-1.02-4.62-1.95-6.78c1.2,2.02,2.11,4.27,2.71,6.62\n               c0.57,2.36,0.83,4.82,0.75,7.26c-0.21,4.88-1.69,9.72-4.55,13.46c-1.42,1.86-3.22,3.41-5.27,4.35\n               c-2.04,0.97-4.27,1.21-6.25,1.02c-4-0.43-7.03-2.28-9.08-3.95c-2.58-2.14-4.06-4.2-5.15-5.75c-1.07-1.57-1.7-2.71-2.11-3.52\n               c-0.8-1.61-0.68-1.91-0.44-2.06c0.24-0.15,0.56-0.12,1.67,1.28c0.56,0.69,1.31,1.73,2.42,3.19\n               C189.37,150.26,190.82,152.16,193.16,154.1z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M181.28,162.66c4.72,1.61,9.81,4.65,16.19,5.79c3.15,0.56,6.56,0.61,9.78-0.56c3.24-1.12,6.26-3.43,8.74-6.38\n               c2.49-2.95,4.38-6.61,5.91-10.54c1.54-3.94,2.73-8.16,4.1-12.41c1.37-4.24,2.96-8.55,5.28-12.45c2.33-3.9,5.29-7.25,8.21-10.49\n               c-2.48,3.59-5.05,7.23-6.93,11.18c-1.88,3.95-3.09,8.19-4.17,12.46c-1.08,4.27-2.06,8.61-3.5,12.81\n               c-1.43,4.19-3.34,8.28-6.1,11.72c-2.73,3.42-6.23,6.24-10.23,7.69c-4.01,1.5-8.18,1.42-11.75,0.79\n               c-3.6-0.64-6.75-1.81-9.54-2.97c-2.77-1.17-5.13-2.29-7.24-3c-3.8-1.36-7.06-1.51-9.79-1.27c-2.71,0.26-4.83,0.87-6.46,1.47\n               c-1.64,0.6-2.81,1.17-3.68,1.6c-0.89,0.41-1.46,0.72-1.9,0.84l-0.3-0.68c-0.14,0.04-0.04,0.04-0.05-0.07\n               c0-0.1-0.03-0.16-0.02-0.15c0.01,0.04,0.15,0.17,0.18,0.16c0.03,0-0.01,0-0.04,0.02c0.02-0.01,0.11-0.08,0.15-0.12\n               c0.06-0.04,0.12-0.09,0.2-0.08c0.08,0,0.22,0.07,0.25,0.3c0.02,0.23-0.09,0.47-0.3,0.64c-0.11,0.08-0.24,0.18-0.5,0.2\n               c-0.13,0-0.31-0.01-0.52-0.15c-0.21-0.13-0.34-0.36-0.39-0.56l-0.07-0.26l0.36-0.53c0.26-0.39,0.69-0.97,1.53-1.67\n               c0.82-0.72,2.02-1.59,3.82-2.46c1.79-0.88,4.18-1.74,7.34-2.16c1.57-0.21,3.34-0.26,5.27-0.09\n               C177.04,161.45,179.16,161.91,181.28,162.66z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M223.33,141.76c-0.25-1.07-0.55-2.46-0.64-4.08c-0.1-1.62,0.04-3.51,0.68-5.38c0.62-1.86,1.82-3.74,3.6-4.93\n               c1.76-1.2,3.97-1.69,5.97-1.38c-2.02-0.05-4.07,0.63-5.64,1.85c-1.58,1.22-2.61,2.97-3.15,4.72c-1.11,3.57-0.43,6.94,0.04,9\n               c0.66,2.6,1.14,4.05,1.27,4.72c0.02,0.06,0.04,0.08,0.02,0.1c-0.02,0.03-0.02,0.04-0.01,0.03l0,0l0,0l-0.01,0.12\n               c0,0,0,0.01,0,0.02c0,0,0,0.01,0-0.01c-0.12-0.09-0.08-0.04,0-0.08c0.1-0.06,0.05-0.04,0.06-0.02l-0.04-0.08\n               c-0.01-0.03-0.02-0.06,0.01-0.1c0.01-0.05,0.19-0.06,0.27,0.08c0.04,0.12,0.15,0.25-0.09,0.5c-0.37,0.21-0.64-0.07-0.77-0.28\n               c-0.21-0.43-0.38-0.89-0.66-1.67C223.98,144.12,223.66,143.11,223.33,141.76z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M216.48,158.93c-0.02-0.92-0.08-2.1-0.03-3.47c0.06-1.36,0.22-2.95,0.87-4.51c0.63-1.57,1.88-3.01,3.49-3.84\n               c0.79-0.42,1.67-0.7,2.55-0.8c0.44-0.05,0.89-0.09,1.34,0.02c0.42,0.09,0.9,0.38,0.91,0.84c-0.08-0.45-0.54-0.64-0.94-0.69\n               c-0.42-0.06-0.84,0.02-1.26,0.11c-0.84,0.18-1.64,0.51-2.36,0.95c-1.46,0.88-2.52,2.22-3.07,3.68\n               c-0.57,1.45-0.71,2.95-0.76,4.28c-0.04,1.33,0,2.5,0.02,3.42c0.06,2.27,0.06,3.5,0.01,4.17l-0.29-0.26\n               c0.7,0.03,0.78,0.12,0.78,0.23c0.01,0.11-0.06,0.21-0.75,0.31l-0.25,0.04l-0.04-0.3C216.62,162.43,216.55,161.2,216.48,158.93z\"\n               />\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M202.2,166.95c0.99-1.44,2.99-3.53,5.97-4.54c1.47-0.51,3.13-0.75,4.78-0.63c0.83,0.06,1.65,0.2,2.44,0.44\n               c0.41,0.11,0.79,0.31,1.11,0.59c0.31,0.26,0.54,0.73,0.34,1.11c0.14-0.4-0.12-0.78-0.43-1c-0.32-0.23-0.69-0.37-1.08-0.44\n               c-0.79-0.16-1.6-0.24-2.4-0.24c-1.6-0.01-3.16,0.28-4.54,0.8c-2.79,1.02-4.67,2.96-5.61,4.33c-1.01,1.45-1.38,2.47-1.64,3.06\n               l-0.07-0.29c0.23,0.26,0.25,0.53,0.22,0.71c-0.03,0.18-0.1,0.3-0.16,0.36c-0.13,0.13-0.19,0.1-0.23,0.06\n               c-0.05-0.04-0.06-0.09-0.05-0.2c0-0.09,0.03-0.35-0.18-0.53l-0.12-0.1l0.05-0.18C200.8,169.59,201.14,168.48,202.2,166.95z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M187.86,161.03c0.85-0.37,2.02-0.68,3.38-0.64c1.36,0.02,2.9,0.52,4.2,1.47c1.32,0.94,2.42,2.28,3.25,3.76\n               c0.84,1.48,1.43,3.08,1.97,4.64c-0.73-1.48-1.47-3.01-2.37-4.39c-0.9-1.38-1.99-2.6-3.24-3.45c-1.24-0.85-2.6-1.28-3.84-1.3\n               c-1.23-0.04-2.3,0.25-3.07,0.58c-0.98,0.42-1.64,0.91-2.11,1.33c-0.47,0.43-0.72,0.73-0.97,0.99c-0.24,0.25-0.5,0.33-0.62,0.31\n               c-0.13-0.02-0.14-0.08-0.14-0.12c0-0.14,0.08-0.08,0.37-0.52C185,163.21,185.69,161.97,187.86,161.03z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M172.56,160.33c1.23-1.15,3.55-2.7,6.61-2.95c0.76-0.06,1.63,0.11,2.32,0.56c0.7,0.44,1.25,1.07,1.67,1.76\n               c0.86,1.38,1.18,3.07,0.95,4.59c0.04-1.54-0.43-3.11-1.31-4.35c-0.44-0.62-0.97-1.16-1.59-1.52c-0.62-0.36-1.3-0.47-1.99-0.41\n               c-2.82,0.3-5.03,1.74-6.19,2.82c-1.27,1.18-1.81,2.08-2.17,2.59l0-0.25c0.04,0.09,0.07,0.15,0.09,0.18\n               c0.01,0.02,0.02,0.02,0.02,0.03l0,0.01l0,0l0,0l0,0l0.01,0.09l0,0c0.04,0.04-0.09-0.06-0.05-0.04c0.01-0.01,0.02-0.02,0.03-0.03\n               c0.09-0.04,0.07-0.05,0.07-0.03l-0.03-0.07c-0.01-0.03-0.01-0.05,0.02-0.08c0.03-0.04,0.19-0.02,0.24,0.11\n               c0.03,0.06,0.04,0.12,0.03,0.21c-0.01,0.07-0.07,0.23-0.27,0.27c-0.3,0.05-0.52-0.21-0.63-0.4l-0.07-0.12l0.07-0.14\n               C170.68,162.59,171.22,161.59,172.56,160.33z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M211.52,145.97c-0.37-0.58-0.78-1.35-1.11-2.3c-0.31-0.91-0.67-2.12-0.22-3.35c0.44-1.2,1.5-2.12,2.69-2.62\n               c1.2-0.5,2.5-0.64,3.73-0.75c-1.21,0.26-2.48,0.51-3.58,1.07c-1.09,0.54-2.01,1.43-2.35,2.47c-0.36,1.03-0.05,2.11,0.26,3\n               c0.32,0.9,0.71,1.64,1.05,2.19c0.9,1.38,1.58,1.94,1.9,2.28c0.33,0.32,0.34,0.41,0.29,0.47c-0.04,0.06-0.13,0.09-0.54-0.17\n               C213.24,147.98,212.47,147.43,211.52,145.97z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M206.82,152.98c-0.21-0.57-0.48-1.32-0.56-2.26c-0.03-0.47,0.01-1,0.23-1.5c0.22-0.5,0.62-0.94,1.11-1.24\n               c0.98-0.61,2.21-0.75,3.37-0.65c1.17,0.1,2.34,0.52,3.22,1.24c-0.97-0.6-2.12-0.89-3.24-0.92c-1.12-0.03-2.26,0.17-3.1,0.72\n               c-0.87,0.54-1.19,1.48-1.1,2.32c0.06,0.84,0.32,1.58,0.53,2.14c0.52,1.43,0.76,2.2,0.87,2.62c0.02,0.12,0.06,0.07,0.02,0.16\n               c-0.01-0.06,0.01,0,0.03-0.01c0.04,0.03,0.05,0,0.09-0.02c0.02-0.02,0.11-0.02,0.07,0.13c-0.03,0.06-0.08,0.14-0.24,0.13\n               c-0.15-0.02-0.24-0.15-0.29-0.25C207.65,155.21,207.35,154.44,206.82,152.98z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M197.47,154.14c0.41-0.56,1.04-1.21,1.94-1.71c0.89-0.48,2.06-0.81,3.3-0.61c1.27,0.19,2.3,1.06,3.25,1.86\n               c0.48,0.42,0.93,0.87,1.36,1.34c0.21,0.24,0.43,0.47,0.6,0.74c0.17,0.27,0.28,0.62,0.14,0.91c0.1-0.3-0.05-0.61-0.23-0.85\n               c-0.18-0.24-0.42-0.45-0.65-0.66c-0.46-0.42-0.94-0.83-1.44-1.21c-0.99-0.75-2-1.5-3.1-1.63c-1.1-0.15-2.15,0.15-2.96,0.59\n               c-0.81,0.45-1.39,1.04-1.76,1.56c-0.93,1.32-1.02,2.22-1.14,2.65c-0.09,0.45-0.15,0.5-0.22,0.5c-0.07,0-0.15-0.05-0.16-0.54\n               C196.42,156.61,196.45,155.59,197.47,154.14z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M190.85,149.51c0.57-0.29,1.36-0.59,2.31-0.62c0.94-0.05,2.06,0.23,2.95,0.96c0.9,0.7,1.52,1.92,1.42,3.14\n               c-0.07,1.22-0.61,2.31-1.13,3.32c0.39-1.07,0.82-2.2,0.8-3.33c0.01-1.13-0.57-2.15-1.39-2.76c-0.81-0.63-1.79-0.87-2.64-0.82\n               c-0.86,0.03-1.58,0.3-2.1,0.56c-0.66,0.34-1.1,0.71-1.36,1.03c-0.26,0.33-0.34,0.57-0.4,0.8c-0.09,0.24-0.26,0.38-0.42,0.34\n               c-0.12-0.06-0.07-0.11-0.06-0.13c0.02-0.03,0.07-0.03,0.08-0.07c-0.02-0.02,0.03-0.07,0.06-0.24c0.01-0.19,0.09-0.59,0.38-0.99\n               C189.64,150.31,190.14,149.89,190.85,149.51z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M188.38,144.31c0.55,0.43,1.23,1.38,1.4,2.6c0.21,1.22-0.04,2.58-0.36,3.79c0.17-1.25,0.34-2.59,0.11-3.75\n               c-0.2-1.16-0.82-2.03-1.33-2.44c-0.64-0.53-1.08-0.66-1.29-0.76c-0.22-0.09-0.24-0.13-0.23-0.17c0.01-0.04,0.04-0.07,0.29-0.02\n               C187.21,143.63,187.69,143.74,188.38,144.31z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M211.23,131.38c0.22,0.73,0.7,1.83,1.52,2.89c0.82,1.07,1.98,2.08,3.27,2.74c-1.37-0.49-2.64-1.47-3.5-2.55\n               c-0.88-1.08-1.36-2.23-1.59-2.98c-0.29-0.96-0.32-1.49-0.31-1.77c0-0.28,0.04-0.31,0.08-0.31c0.04,0,0.09,0.02,0.14,0.29\n               C210.89,129.95,210.96,130.46,211.23,131.38z\"/>\n       </g>\n   </g>\n</g>\n<circle class=\"st0\" cx=\"202.44\" cy=\"139.66\" r=\"1.53\"/>\n<circle class=\"st0\" cx=\"227\" cy=\"132.3\" r=\"1.07\"/>\n<circle class=\"st0\" cx=\"220.34\" cy=\"151.72\" r=\"1.04\"/>\n<circle class=\"st0\" cx=\"208.45\" cy=\"165.46\" r=\"1\"/>\n<circle class=\"st0\" cx=\"193.04\" cy=\"164.64\" r=\"1.07\"/>\n<circle class=\"st0\" cx=\"179.48\" cy=\"160.44\" r=\"0.73\"/>\n<circle class=\"st0\" cx=\"186.91\" cy=\"156.31\" r=\"1.14\"/>\n<circle class=\"st0\" cx=\"201.29\" cy=\"162.39\" r=\"1.14\"/>\n<circle class=\"st0\" cx=\"212.79\" cy=\"158.86\" r=\"1.14\"/>\n<circle class=\"st0\" cx=\"219.65\" cy=\"143.27\" r=\"1.14\"/>\n<g>\n   <g>\n       <g>\n           <path d=\"M213.53,191.12c-0.16-2-0.22-4.27-0.01-6.79c0.21-2.51,0.7-5.31,1.93-8.12c1.19-2.8,3.3-5.62,6.32-7.43\n               c1.5-0.92,3.24-1.58,5.12-1.82c1.85-0.18,3.89-0.11,5.82,1.1c0.95,0.6,1.73,1.55,2.16,2.55c0.45,1.01,0.63,2.07,0.63,3.12\n               c-0.03,2.13-0.83,3.97-1.64,5.61c-1.65,3.25-3.62,6.38-5.89,9.31c-2.27,2.94-4.83,5.52-6.49,8.66\n               c-0.82,1.55-1.37,3.26-1.52,5.02c-0.15,1.75,0.14,3.58,1.06,5.13c-1.11-1.42-1.66-3.28-1.7-5.14c-0.05-1.87,0.36-3.75,1.09-5.5\n               c1.46-3.51,3.94-6.4,5.92-9.35c2.01-2.97,3.75-6.08,5.18-9.24c0.71-1.55,1.23-3.08,1.19-4.47c-0.03-1.41-0.62-2.64-1.57-3.19\n               c-0.99-0.62-2.48-0.73-3.85-0.55c-1.38,0.2-2.7,0.71-3.87,1.45c-1.17,0.73-2.19,1.67-3.04,2.69c-0.83,1.03-1.5,2.17-2,3.36\n               c-1.03,2.36-1.48,4.83-1.68,7.12c-0.19,2.29-0.15,4.42,0,6.27c0.38,4.67,1.37,8.16,2.21,10.76c0.87,2.61,1.64,4.36,2.13,5.6\n               c1.04,2.45,0.93,2.89,0.54,3.13c-0.35,0.22-0.89,0.23-2.5-2.07c-0.77-1.17-1.81-2.93-2.9-5.67\n               C215.1,199.88,213.94,196.15,213.53,191.12z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M307.84,117.19c-1.22,0.98-2.89,2.18-5.12,3.01c-1.11,0.41-2.38,0.72-3.73,0.77c-1.36,0.08-2.75-0.13-4.08-0.46\n               c-2.66-0.67-5.38-1.86-7.71-3.64c-2.33-1.77-4.26-4.16-5.24-6.78c3.23,4.61,8.58,7.25,13.45,8.2c4.86,1.19,8.74-1.25,10.9-2.99\n               c2.77-2.3,3.89-3.79,4.55-4.5c0.65-0.74,0.94-0.76,1.27-0.62c0.3,0.13,0.59,0.36,0.24,1.47\n               C311.99,112.73,310.87,114.68,307.84,117.19z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M301.76,112.4c-0.39,0.5-0.97,1.13-1.8,1.61c-0.81,0.48-1.91,0.84-3.09,0.7c-1.19-0.16-2.21-0.73-3.17-1.39\n               c-0.47-0.35-0.92-0.75-1.27-1.23c-0.17-0.24-0.33-0.49-0.45-0.76c-0.06-0.13-0.11-0.27-0.15-0.4c-0.01-0.07-0.07-0.13-0.04-0.22\n               c0.01-0.04,0.03-0.07,0.06-0.1c0.02-0.04,0.09-0.03,0.08,0.02c-0.03-0.09-0.09,0.05-0.09,0.09c-0.01,0.05,0.05,0.11,0.08,0.17\n               c0.07,0.12,0.15,0.23,0.23,0.35c0.16,0.22,0.35,0.42,0.55,0.61c0.4,0.38,0.86,0.68,1.34,0.94c0.96,0.51,2,0.95,2.92,1.01\n               c0.93,0.06,1.82-0.23,2.5-0.64c0.69-0.4,1.18-0.92,1.52-1.36c0.84-1.13,1.1-1.88,1.33-2.23c0.22-0.36,0.34-0.37,0.47-0.33\n               c0.13,0.04,0.24,0.12,0.18,0.56C302.88,110.22,302.72,111.08,301.76,112.4z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M338.4,123.45c-1.4,1.47-3.43,3.18-6.18,4.41c-2.7,1.21-6.3,2-9.96,0.94c-1.79-0.52-3.55-1.48-4.93-2.93\n               c-1.39-1.44-2.28-3.28-2.69-5.16c-0.43-1.89-0.38-3.84-0.01-5.65c0.36-1.82,1.03-3.52,1.84-5.09\n               c-0.79,3.42-1.07,7.09,0.09,10.18c0.56,1.54,1.43,2.9,2.56,3.88c1.12,0.99,2.5,1.63,3.9,1.97c2.82,0.67,5.68,0.04,7.94-0.99\n               c2.29-1.04,4.03-2.45,5.22-3.71c1.5-1.59,2.4-3.02,3.05-4.13c0.63-1.12,1.05-1.92,1.35-2.48c0.62-1.12,1-1.2,1.42-1.1\n               c0.4,0.09,0.79,0.31,0.66,1.74c-0.06,0.72-0.31,1.73-0.9,3.12C341.15,119.84,340.17,121.58,338.4,123.45z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M332.03,116.05c-0.56,0.86-1.31,1.95-2.48,3c-0.59,0.52-1.29,1.01-2.1,1.38c-0.82,0.37-1.8,0.65-2.88,0.47\n               c-1.11-0.17-2.05-0.95-2.58-1.85c-0.55-0.92-0.73-1.98-0.72-2.96c0.07-1.96,0.54-3.82,1.24-5.54c-0.25,1.82-0.36,3.72-0.19,5.49\n               c0.1,0.87,0.35,1.68,0.8,2.29c0.45,0.62,1.06,1.02,1.69,1.08c1.32,0.13,2.73-0.74,3.68-1.58c0.98-0.88,1.69-1.86,2.2-2.65\n               c1.27-2.03,1.87-3.23,2.34-3.76c0.45-0.55,0.66-0.53,0.86-0.43c0.2,0.1,0.35,0.25,0.16,0.94\n               C333.81,112.62,333.4,113.87,332.03,116.05z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M258.7,122.62c1.19,1.25,2.93,2.67,5.22,3.71c2.27,1.03,5.13,1.66,7.94,0.99c1.4-0.33,2.78-0.98,3.9-1.97\n               c1.12-0.98,2-2.34,2.56-3.88c1.16-3.09,0.88-6.77,0.09-10.18c0.81,1.57,1.48,3.27,1.84,5.09c0.36,1.81,0.42,3.76-0.01,5.65\n               c-0.42,1.88-1.31,3.72-2.69,5.16c-1.38,1.45-3.14,2.4-4.93,2.93c-3.66,1.06-7.26,0.27-9.96-0.94c-2.75-1.23-4.78-2.94-6.18-4.41\n               c-1.77-1.87-2.75-3.62-3.36-4.98c-0.59-1.38-0.83-2.4-0.9-3.12c-0.13-1.44,0.26-1.65,0.66-1.74c0.43-0.1,0.81-0.02,1.42,1.1\n               c0.31,0.56,0.72,1.36,1.35,2.48C256.3,119.6,257.2,121.03,258.7,122.62z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M264.18,116.48c0.51,0.8,1.22,1.77,2.2,2.65c0.95,0.84,2.36,1.71,3.68,1.58c0.63-0.06,1.24-0.46,1.69-1.08\n               c0.45-0.61,0.69-1.42,0.8-2.29c0.17-1.76,0.05-3.67-0.19-5.49c0.7,1.72,1.17,3.58,1.24,5.54c0.01,0.98-0.17,2.05-0.72,2.96\n               c-0.53,0.9-1.47,1.68-2.58,1.85c-1.09,0.18-2.07-0.11-2.88-0.47c-0.81-0.37-1.51-0.86-2.1-1.38c-1.17-1.04-1.93-2.14-2.48-3\n               c-1.37-2.18-1.78-3.44-2-4.12c-0.19-0.69-0.04-0.84,0.16-0.94c0.2-0.1,0.42-0.12,0.86,0.43\n               C262.31,113.24,262.91,114.44,264.18,116.48z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M253.61,148.99c-1.22-0.45-2.57-1.02-4.02-1.77c-1.44-0.75-2.99-1.69-4.46-3c-1.45-1.29-2.87-3.04-3.5-5.28\n               c-0.31-1.11-0.43-2.36-0.11-3.62c0.16-0.62,0.41-1.23,0.81-1.8c0.4-0.56,0.97-1.08,1.68-1.36c1.47-0.56,2.88-0.17,4.03,0.4\n               c1.17,0.61,2.08,1.5,2.88,2.38c1.59,1.75,3.07,3.65,4.37,5.69c1.3,2.04,2.35,4.16,3.92,5.87c1.55,1.66,3.67,3.03,6.04,3.02\n               c-1.16,0.17-2.39-0.06-3.51-0.51c-1.12-0.46-2.16-1.13-3.08-1.96c-1.83-1.66-3.1-3.8-4.47-5.67c-1.38-1.89-2.9-3.65-4.5-5.27\n               c-0.79-0.8-1.6-1.5-2.46-1.92c-0.85-0.41-1.85-0.55-2.47-0.26c-0.63,0.26-1.11,1.03-1.3,1.86c-0.2,0.83-0.12,1.73,0.13,2.58\n               c0.51,1.73,1.65,3.16,2.93,4.29c2.6,2.26,5.55,3.51,7.81,4.38c2.89,1.06,5.22,1.53,6.99,1.83c1.78,0.29,3.03,0.4,3.9,0.51\n               c1.73,0.18,1.94,0.39,1.96,0.68c0.01,0.27-0.15,0.58-1.97,0.77c-0.91,0.08-2.24,0.12-4.14-0.08\n               C259.17,150.56,256.68,150.11,253.61,148.99z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M340.91,146.77c2.26-0.87,5.22-2.12,7.81-4.38c1.28-1.13,2.42-2.57,2.93-4.29c0.25-0.85,0.33-1.76,0.13-2.58\n               c-0.19-0.83-0.67-1.6-1.3-1.86c-0.61-0.29-1.61-0.15-2.47,0.26c-0.87,0.41-1.67,1.12-2.46,1.92c-1.6,1.62-3.12,3.38-4.5,5.27\n               c-1.37,1.87-2.64,4.01-4.47,5.67c-0.91,0.83-1.95,1.5-3.08,1.96c-1.12,0.46-2.34,0.69-3.51,0.51c2.37,0.01,4.49-1.36,6.04-3.02\n               c1.57-1.71,2.62-3.83,3.92-5.87c1.3-2.04,2.77-3.94,4.37-5.69c0.8-0.88,1.71-1.77,2.88-2.38c1.15-0.58,2.56-0.96,4.03-0.4\n               c0.71,0.29,1.28,0.8,1.68,1.36c0.4,0.56,0.65,1.17,0.81,1.8c0.32,1.26,0.2,2.51-0.11,3.62c-0.64,2.24-2.05,3.99-3.5,5.28\n               c-1.47,1.31-3.02,2.25-4.46,3c-1.45,0.75-2.8,1.32-4.02,1.77c-3.07,1.12-5.55,1.57-7.45,1.78c-1.9,0.2-3.23,0.16-4.14,0.08\n               c-1.82-0.19-1.99-0.5-1.97-0.77c0.01-0.3,0.23-0.5,1.96-0.68c0.87-0.11,2.11-0.22,3.9-0.51\n               C335.69,148.3,338.01,147.82,340.91,146.77z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M309.49,330.78c0.75-2.5,2.33-5.56,5.18-8.13c1.41-1.28,3.13-2.42,5.1-3.24c1.97-0.8,4.29-1.31,6.69-0.85\n               c1.18,0.23,2.39,0.75,3.37,1.6c0.95,0.85,1.71,1.93,2.08,3.2c0.38,1.25,0.34,2.72-0.33,3.93c-0.65,1.21-1.77,2.07-3,2.51\n               c-1.23,0.43-2.6,0.49-3.84,0.02c-0.61-0.23-1.2-0.6-1.63-1.13c-0.44-0.52-0.69-1.21-0.7-1.86c-0.03-1.33,0.66-2.53,1.65-3.24\n               c0.51-0.37,1.13-0.54,1.73-0.52c0.59,0.01,1.25,0.33,1.38,0.92c-0.22-0.56-0.85-0.76-1.38-0.71c-0.55,0.05-1.08,0.27-1.48,0.63\n               c-0.81,0.73-1.28,1.85-1.15,2.87c0.11,1.03,0.93,1.77,1.92,2.04c0.99,0.29,2.08,0.17,3.02-0.23c0.94-0.4,1.73-1.12,2.13-1.97\n               c0.41-0.85,0.39-1.85,0.08-2.75c-0.3-0.91-0.92-1.72-1.65-2.33c-0.73-0.59-1.61-0.95-2.56-1.11c-1.88-0.33-3.86,0.11-5.57,0.84\n               c-1.73,0.75-3.26,1.76-4.51,2.9c-2.53,2.29-3.95,5-4.61,7.21c-0.82,2.81-0.77,5.12-0.6,6.82c0.19,1.71,0.5,2.88,0.71,3.69\n               c0.45,1.61,0.39,1.87,0.12,2.01c-0.12,0.06-0.26,0.09-0.49-0.1c-0.23-0.19-0.55-0.59-0.97-1.4c-0.41-0.81-0.91-2.06-1.22-3.95\n               C308.69,336.55,308.56,333.96,309.49,330.78z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M317.43,338.89c0.76-0.3,1.59-1.3,1.23-2.54c-0.16-0.59-0.57-1.19-1.14-1.58c-0.57-0.38-1.36-0.55-2.11-0.42\n               c-0.75,0.13-1.48,0.58-2.05,1.2c-0.57,0.62-0.98,1.42-1.28,2.27c-0.29,0.86-0.56,1.76-0.65,2.65c-0.08,0.9,0.06,1.83,0.43,2.67\n               c-0.47-0.78-0.73-1.72-0.73-2.68c0.02-0.96,0.22-1.88,0.46-2.8c0.26-0.91,0.65-1.81,1.28-2.55c0.61-0.74,1.46-1.31,2.41-1.5\n               c0.94-0.18,1.92,0,2.68,0.5c0.76,0.5,1.27,1.24,1.49,2.03c0.22,0.78,0.1,1.63-0.27,2.25c-0.37,0.61-0.9,1.02-1.42,1.24\n               c-0.66,0.29-1.36,0.29-1.9,0.09c-0.54-0.2-0.94-0.57-1.14-1c-0.21-0.43-0.15-0.89-0.02-1.18c0.14-0.31,0.35-0.51,0.56-0.62\n               c0.2-0.1,0.39-0.15,0.6-0.07c0.1,0.03,0.22,0.16,0.22,0.27c0.02,0.07-0.04,0.2-0.11,0.22c-0.06,0.03-0.1,0.03-0.13,0.02\n               c-0.06-0.01-0.09-0.03-0.13-0.07c-0.04-0.03-0.06-0.15-0.02-0.16c0.06-0.04,0.07,0,0.09,0.02c0.02,0.02,0.02,0.06,0.06,0.05\n               c0.03,0,0.02-0.09,0-0.1c-0.01-0.02,0-0.03-0.01-0.04c0,0-0.01-0.01-0.05,0c-0.04,0.01-0.08,0.1-0.07,0.13\n               c-0.01,0.04,0.03,0.09,0.03,0.09c0.01,0.01-0.08,0.05-0.18,0.12c-0.16,0.13-0.41,0.54-0.17,0.99\n               C315.6,338.84,316.46,339.32,317.43,338.89z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M308.5,321.19c-0.95,2.06-2.02,5.53-1.87,9.56c0.11,4.02,1.53,8.49,3.98,12.09c-2.9-3.26-4.66-7.86-4.88-12.05\n               c-0.26-4.22,0.9-7.85,1.89-10c1.27-2.74,2.37-3.95,2.94-4.56c0.6-0.59,0.75-0.58,0.85-0.49c0.1,0.09,0.13,0.23-0.32,0.91\n               C310.69,317.36,309.72,318.57,308.5,321.19z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M311.7,319.16c0.92-1.41,1.83-3.28,1.42-5.41c-0.36-2.15-1.98-4.33-3.89-6.54l1.62-0.77c0.43,2.56-0.28,5.23-1.54,7.53\n               c-1.25,2.32-3.04,4.32-4.63,6.32c-0.78,1.01-1.47,2.06-1.81,3.24c-0.35,1.18-0.4,2.47-0.21,3.73c0.37,2.55,1.71,4.91,3.16,7.07\n               c-1.7-1.95-3.33-4.19-3.98-6.91c-0.32-1.34-0.39-2.78-0.07-4.18c0.31-1.41,1.04-2.66,1.8-3.76c1.56-2.18,3.17-4.15,4.24-6.3\n               c1.08-2.11,1.59-4.41,1.23-6.42l-0.6-3.29l2.21,2.52c0.99,1.13,1.94,2.27,2.73,3.49c0.77,1.23,1.4,2.55,1.63,3.94\n               c0.26,1.38,0.09,2.76-0.29,3.89c-0.38,1.14-0.91,2.09-1.42,2.88c-0.84,1.28-1.68,2.28-2.39,3.15c-0.71,0.86-1.28,1.61-1.73,2.28\n               c-0.91,1.33-1.32,2.33-1.56,3.03c-0.23,0.7-0.33,1.12-0.44,1.35c-0.11,0.23-0.23,0.29-0.36,0.29c-0.13,0.01-0.25-0.03-0.37-0.29\n               c-0.12-0.26-0.22-0.75-0.13-1.64c0.1-0.88,0.47-2.15,1.39-3.68c0.46-0.77,1.05-1.6,1.76-2.5\n               C310.15,321.29,310.95,320.32,311.7,319.16z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M291.17,331.27c-0.66-2.2-2.08-4.92-4.61-7.21c-1.25-1.15-2.78-2.16-4.51-2.9c-1.71-0.72-3.69-1.16-5.57-0.84\n               c-0.95,0.16-1.83,0.52-2.56,1.11c-0.73,0.6-1.34,1.42-1.65,2.33c-0.31,0.91-0.32,1.9,0.08,2.75c0.4,0.86,1.19,1.57,2.13,1.97\n               c0.94,0.4,2.03,0.52,3.02,0.23c0.99-0.27,1.81-1.01,1.92-2.04c0.13-1.02-0.34-2.14-1.15-2.87c-0.39-0.36-0.93-0.58-1.48-0.63\n               c-0.54-0.05-1.16,0.15-1.38,0.71c0.14-0.59,0.79-0.91,1.38-0.92c0.6-0.02,1.22,0.15,1.73,0.52c0.99,0.72,1.68,1.92,1.65,3.24\n               c-0.02,0.66-0.26,1.34-0.7,1.86c-0.44,0.53-1.02,0.89-1.63,1.13c-1.23,0.47-2.61,0.42-3.84-0.02c-1.22-0.44-2.35-1.29-3-2.51\n               c-0.67-1.21-0.71-2.69-0.33-3.93c0.37-1.27,1.13-2.35,2.08-3.2c0.97-0.85,2.19-1.37,3.37-1.6c2.41-0.47,4.72,0.05,6.69,0.85\n               c1.97,0.82,3.69,1.95,5.1,3.24c2.85,2.57,4.43,5.63,5.18,8.13c0.93,3.18,0.8,5.77,0.51,7.65c-0.32,1.89-0.81,3.14-1.22,3.95\n               c-0.41,0.81-0.74,1.21-0.97,1.4c-0.23,0.19-0.36,0.17-0.49,0.1c-0.27-0.14-0.33-0.4,0.12-2.01c0.21-0.81,0.53-1.98,0.71-3.69\n               C291.94,336.38,291.99,334.08,291.17,331.27z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M284.84,339.53c-0.52-0.23-1.05-0.63-1.42-1.24c-0.38-0.61-0.49-1.46-0.27-2.25c0.22-0.78,0.73-1.53,1.49-2.03\n               c0.77-0.5,1.74-0.68,2.68-0.5c0.95,0.19,1.79,0.77,2.41,1.5c0.63,0.74,1.02,1.64,1.28,2.55c0.24,0.91,0.45,1.84,0.46,2.8\n               c0,0.96-0.26,1.89-0.73,2.68c0.36-0.84,0.51-1.77,0.43-2.67c-0.09-0.9-0.37-1.8-0.65-2.65c-0.3-0.85-0.71-1.65-1.28-2.27\n               c-0.57-0.63-1.29-1.07-2.05-1.2c-0.75-0.13-1.54,0.04-2.11,0.42c-0.58,0.39-0.98,0.98-1.14,1.58c-0.36,1.24,0.46,2.24,1.23,2.54\n               c0.98,0.43,1.83-0.05,2.05-0.5c0.24-0.45-0.01-0.86-0.17-0.99c-0.1-0.08-0.18-0.1-0.18-0.14c-0.03-0.1-0.08-0.1-0.04-0.09\n               c-0.12-0.02-0.06,0.01-0.06-0.02c0.01-0.02,0.02-0.05,0.02-0.06c0-0.04,0,0.02,0.03,0.05c0.03,0.04,0.04,0.02,0.02,0.03\n               c-0.04,0.04,0.01-0.01,0.01-0.03c0.02-0.02,0.03-0.05,0.09-0.02c0.04,0.02,0.02,0.14-0.02,0.16c-0.04,0.04-0.07,0.06-0.13,0.07\n               c-0.03,0-0.07,0.01-0.13-0.02c-0.07-0.03-0.13-0.15-0.11-0.22c0-0.11,0.12-0.24,0.22-0.27c0.21-0.07,0.4-0.02,0.6,0.07\n               c0.21,0.1,0.42,0.31,0.56,0.62c0.13,0.29,0.19,0.75-0.02,1.18c-0.2,0.43-0.6,0.8-1.14,1\n               C286.2,339.83,285.5,339.82,284.84,339.53z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M294.96,320.7c0.99,2.15,2.15,5.78,1.89,10c-0.21,4.19-1.97,8.78-4.88,12.05c2.45-3.6,3.87-8.07,3.98-12.09\n               c0.15-4.03-0.92-7.5-1.87-9.56c-1.21-2.62-2.18-3.83-2.6-4.53c-0.45-0.68-0.42-0.83-0.32-0.91c0.1-0.09,0.24-0.1,0.85,0.49\n               C292.59,316.76,293.69,317.96,294.96,320.7z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M289.32,320.1c-0.52-0.79-1.05-1.74-1.42-2.88c-0.37-1.13-0.55-2.51-0.29-3.89c0.23-1.39,0.86-2.71,1.63-3.94\n               c0.79-1.22,1.74-2.37,2.73-3.49l2.21-2.52l-0.6,3.29c-0.37,2.02,0.14,4.31,1.23,6.42c1.07,2.15,2.68,4.12,4.24,6.3\n               c0.77,1.11,1.49,2.36,1.8,3.76c0.32,1.4,0.25,2.84-0.07,4.18c-0.65,2.72-2.27,4.96-3.98,6.91c1.45-2.15,2.78-4.52,3.16-7.07\n               c0.19-1.26,0.14-2.55-0.21-3.73c-0.35-1.17-1.03-2.23-1.81-3.24c-1.6-2-3.39-4-4.63-6.32c-1.26-2.3-1.97-4.97-1.54-7.53\n               l1.62,0.77c-1.92,2.21-3.53,4.39-3.89,6.54c-0.4,2.13,0.51,4,1.42,5.41c0.75,1.15,1.55,2.12,2.25,3.02\n               c0.71,0.9,1.3,1.73,1.76,2.5c0.93,1.53,1.29,2.8,1.39,3.68c0.09,0.89-0.01,1.38-0.13,1.64c-0.12,0.26-0.24,0.29-0.37,0.29\n               c-0.13-0.01-0.25-0.06-0.36-0.29c-0.1-0.23-0.21-0.65-0.44-1.35c-0.24-0.7-0.64-1.7-1.56-3.03c-0.45-0.67-1.03-1.42-1.73-2.28\n               C291,322.38,290.15,321.38,289.32,320.1z\"/>\n       </g>\n   </g>\n</g>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_14\">\n<circle cx=\"417.21\" cy=\"287.11\" r=\"6.79\"/>\n<circle cx=\"392.05\" cy=\"291.69\" r=\"4.58\"/>\n<circle cx=\"432.08\" cy=\"299.43\" r=\"4.58\"/>\n<circle cx=\"456.33\" cy=\"273.3\" r=\"6.37\"/>\n<circle cx=\"462\" cy=\"292.78\" r=\"3.3\"/>\n<circle cx=\"459.13\" cy=\"313.46\" r=\"2.28\"/>\n<circle cx=\"448.39\" cy=\"327.12\" r=\"2.17\"/>\n<circle cx=\"372.71\" cy=\"264.65\" r=\"3.47\"/>\n<circle cx=\"362.45\" cy=\"279.54\" r=\"1.92\"/>\n<circle cx=\"350\" cy=\"291.22\" r=\"0.97\"/>\n<circle cx=\"315.22\" cy=\"291.41\" r=\"3.43\"/>\n<circle cx=\"324.59\" cy=\"298.74\" r=\"2.46\"/>\n<circle cx=\"338.32\" cy=\"300.15\" r=\"1.41\"/>\n<ellipse cx=\"335.93\" cy=\"282.34\" rx=\"5.21\" ry=\"4.92\"/>\n<circle cx=\"184.12\" cy=\"286.71\" r=\"6.79\"/>\n<circle cx=\"209.28\" cy=\"291.3\" r=\"4.58\"/>\n<circle cx=\"169.25\" cy=\"299.03\" r=\"4.58\"/>\n<circle cx=\"145.01\" cy=\"272.9\" r=\"6.37\"/>\n<circle cx=\"139.34\" cy=\"292.39\" r=\"3.3\"/>\n<circle cx=\"142.2\" cy=\"313.07\" r=\"2.28\"/>\n<circle cx=\"152.94\" cy=\"326.73\" r=\"2.17\"/>\n<circle cx=\"228.62\" cy=\"264.26\" r=\"3.47\"/>\n<circle cx=\"238.89\" cy=\"279.14\" r=\"1.92\"/>\n<circle cx=\"251.33\" cy=\"290.83\" r=\"0.97\"/>\n<circle cx=\"286.11\" cy=\"291.01\" r=\"3.43\"/>\n<circle cx=\"276.74\" cy=\"298.34\" r=\"2.46\"/>\n<circle cx=\"263.02\" cy=\"299.75\" r=\"1.41\"/>\n<ellipse cx=\"265.4\" cy=\"281.94\" rx=\"5.21\" ry=\"4.92\"/>\n<circle cx=\"235.21\" cy=\"451.06\" r=\"4.11\"/>\n<circle cx=\"255.38\" cy=\"467.16\" r=\"3.42\"/>\n<circle cx=\"271.07\" cy=\"482.95\" r=\"2.81\"/>\n<circle cx=\"295.29\" cy=\"481.24\" r=\"2.29\"/>\n<circle cx=\"262.26\" cy=\"448.11\" r=\"3.31\"/>\n<circle cx=\"273.04\" cy=\"427.87\" r=\"1.8\"/>\n<circle cx=\"214.24\" cy=\"439.18\" r=\"1.77\"/>\n<circle cx=\"365.27\" cy=\"450.68\" r=\"4.11\"/>\n<circle cx=\"345.1\" cy=\"466.78\" r=\"3.42\"/>\n<circle cx=\"329.42\" cy=\"482.57\" r=\"2.81\"/>\n<circle cx=\"307.48\" cy=\"481.29\" r=\"2.29\"/>\n<circle cx=\"338.22\" cy=\"447.73\" r=\"3.31\"/>\n<circle cx=\"327.44\" cy=\"427.49\" r=\"1.8\"/>\n<circle cx=\"386.24\" cy=\"438.8\" r=\"1.77\"/>\n<circle cx=\"301.4\" cy=\"492.54\" r=\"2.81\"/>\n<ellipse transform=\"matrix(0.5 -0.866 0.866 0.5 -207.1437 375.6368)\" cx=\"221.74\" cy=\"367.21\" rx=\"31.81\" ry=\"40.41\"/>\n<ellipse transform=\"matrix(0.8452 -0.5344 0.5344 0.8452 -137.1551 260.4324)\" cx=\"381.01\" cy=\"366.99\" rx=\"40.41\" ry=\"31.81\"/>\n<circle cx=\"250.36\" cy=\"263.01\" r=\"3.47\"/>\n<circle cx=\"248.35\" cy=\"164.45\" r=\"3.47\"/>\n<circle cx=\"347.2\" cy=\"262.19\" r=\"3.47\"/>\n<circle cx=\"344.61\" cy=\"163.08\" r=\"3.47\"/>\n<circle cx=\"225.15\" cy=\"179.4\" r=\"3.47\"/>\n<ellipse cx=\"371.72\" cy=\"177.51\" rx=\"3.81\" ry=\"3.71\"/>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_1\">\n<path class=\"st1\" d=\"M162.15,455.65c5.57,8.64,6.19,17.65,6.28,18.4c0,0,0,0,0,0c3.1,23.84,7.76,67.62,7.76,67.62\n   c1.51,10.96,3.13,21.76,10.99,32.21c10.27,13.66,18.91,10.39,37.14,25.01c21.06,16.9,18.83,28.73,36,35.24\n   c5.33,2.02,14.29,2.11,32.21,2.27c21.08,0.2,31.62,0.29,38.27-1.89c17.09-5.62,15.5-15.31,40.55-34.48\n   c20.22-15.48,26.37-13.08,36.38-25.39c3.94-4.84,12.73-16.54,15.16-40.93c2.95-29.7-6.89-42.35,0.23-65.18\n   c1.97-6.33,4.19-10.4,6.06-12.88c4.22-5.6,8.45-7.55,13.73-11.4c1.82-1.32,12.17-8.85,17.99-18.67c9-15.16,5.32-32.62,4.93-34.35\n   c-3.26-14.5-11.65-17.17-11.12-28.8c0.47-10.2,6.77-17.39,8.59-19.71c15.54-19.74,27.59-94.66-2.53-151.07\n   c-43.85-82.14-154.63-82.92-161.18-82.86c-59.49,0.49-139.5,28.96-168.25,98.02c-16.86,40.51-16.5,106.55,3.54,131.87\n   c2.73,3.45,11.27,13.02,10.43,25.26c-0.79,11.43-9.79,13.33-13.84,28.04c-0.54,1.95-4.31,16.43,2.12,31.07\n   c3.91,8.9,10.5,15.35,14.54,19.3C155.46,449.53,158.08,449.34,162.15,455.65z\"/>\n<path class=\"st2\" d=\"M327.62,373.3c-0.65,5.87-1.95,17.68,4.42,27.41c12.03,18.38,45.14,19.73,67.07,8.72\n   c17.06-8.57,24.82-23.34,26.9-27.66c2.45-5.09,8.27-17.16,5.31-32.21c-0.73-3.71-2.63-12.73-10.3-20.74\n   c-8.93-9.33-19.82-11.18-23.3-11.72c-12.75-1.98-22.61,2.53-30.68,6.22c-14.65,6.7-23,16.38-24.85,18.59\n   C337.89,347.03,329.36,357.49,327.62,373.3z\"/>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_8\">\n<path class=\"st3\" d=\"M363.27,324.2c-0.12,1.77-2.77,1.88-8.99,6.18c-6.78,4.69-7.9,7.53-9.68,6.99c-3.69-1.12-6.52-15.64,0.3-20.16\n   C351.54,312.8,363.54,320.34,363.27,324.2z\"/>\n<path class=\"st3\" d=\"M343.41,339.63c0.47,1.71-2,2.69-6.45,8.8c-4.85,6.67-4.97,9.71-6.83,9.79c-3.86,0.16-11.31-12.62-6.37-19.14\n   C328.58,332.74,342.39,335.91,343.41,339.63z\"/>\n<path class=\"st3\" d=\"M329.13,361.13c1.2,1.31-0.56,3.3-1.73,10.77c-1.28,8.14,0,10.91-1.62,11.83c-3.36,1.9-15.82-6.08-14.39-14.13\n   C312.79,361.76,326.53,358.28,329.13,361.13z\"/>\n<path class=\"st3\" d=\"M325.75,386.08c1.71,0.48,1.28,3.1,4.23,10.05c3.22,7.59,5.77,9.26,4.88,10.89\n   c-1.85,3.39-16.64,3.21-19.68-4.39C312.21,395.26,322.03,385.04,325.75,386.08z\"/>\n<path class=\"st3\" d=\"M409.78,319.47c-1.32,1.19-3.3-0.58-10.76-1.8c-8.14-1.33-10.91-0.07-11.82-1.69\n   c-1.88-3.37,6.17-15.78,14.22-14.3C409.26,303.12,412.65,316.88,409.78,319.47z\"/>\n<path class=\"st3\" d=\"M385.8,316.37c-0.63,1.66-3.2,0.99-10.4,3.29c-7.85,2.52-9.75,4.9-11.29,3.87c-3.21-2.15-1.68-16.86,6.16-19.2\n   C377.89,302.05,387.17,312.76,385.8,316.37z\"/>\n<path class=\"st3\" d=\"M433.18,358.05c-1.62-0.72-0.82-3.25-2.75-10.55c-2.1-7.97-4.39-9.99-3.28-11.48\n   c2.31-3.09,16.93-0.8,18.86,7.15C447.89,350.9,436.71,359.61,433.18,358.05z\"/>\n<path class=\"st3\" d=\"M428.21,334.53c-1.74,0.37-2.57-2.15-8.41-6.94c-6.38-5.23-9.41-5.52-9.38-7.38\n   c0.06-3.86,13.24-10.57,19.47-5.26C435.94,320.12,431.99,333.73,428.21,334.53z\"/>\n<path class=\"st3\" d=\"M413.38,400.61c-0.46-1.71,2.01-2.68,6.48-8.77c4.88-6.65,5.01-9.69,6.87-9.76\n   c3.86-0.15,11.26,12.66,6.29,19.16C428.18,407.56,414.38,404.34,413.38,400.61z\"/>\n<path class=\"st3\" d=\"M427.81,381.15c-1.08-1.41,0.84-3.24,2.65-10.58c1.97-8.01,0.94-10.87,2.63-11.64\n   c3.51-1.61,15.24,7.41,13.12,15.31C444.15,381.93,430.16,384.22,427.81,381.15z\"/>\n<path class=\"st3\" d=\"M362.93,417.83c0.97-1.48,3.34-0.28,10.86-0.99c8.21-0.78,10.57-2.7,11.86-1.36\n   c2.67,2.78-1.97,16.83-10.13,17.44C367.58,433.51,360.81,421.06,362.93,417.83z\"/>\n<path class=\"st3\" d=\"M390.57,414.73c0.28-1.75,2.93-1.63,9.49-5.37c7.16-4.08,8.52-6.81,10.25-6.12\n   c3.58,1.44,5.13,16.15-2.06,20.06C401.26,427.11,389.97,418.55,390.57,414.73z\"/>\n<path class=\"st3\" d=\"M337.7,409.35c1.53-0.91,3.12,1.21,10.2,3.87c7.72,2.9,10.69,2.2,11.26,3.97c1.18,3.67-9.14,14.27-16.75,11.24\n   C335.02,425.49,334.39,411.33,337.7,409.35z\"/>\n<path class=\"st3\" d=\"M380.53,317.21c-0.34,0.9-1.74,0.54-5.66,1.79c-4.28,1.37-5.31,2.67-6.15,2.11\n   c-1.75-1.17-0.91-9.18,3.36-10.46C376.23,309.41,381.28,315.25,380.53,317.21z\"/>\n<path class=\"st3\" d=\"M358.59,326.25c-0.09,0.96-1.53,0.99-4.97,3.25c-3.75,2.47-4.39,4-5.35,3.69c-2-0.65-3.36-8.59,0.41-10.97\n   C352.34,319.9,358.78,324.15,358.59,326.25z\"/>\n<path class=\"st3\" d=\"M338.53,343.33c0.28,0.92-1.04,1.5-3.36,4.9c-2.53,3.71-2.54,5.37-3.55,5.45c-2.1,0.15-6.37-6.67-3.79-10.31\n   C330.34,339.83,337.91,341.32,338.53,343.33z\"/>\n<path class=\"st3\" d=\"M327.6,366.04c0.68,0.69-0.23,1.81-0.72,5.89c-0.53,4.46,0.22,5.94-0.64,6.47c-1.79,1.1-8.73-2.98-8.12-7.39\n   C318.72,366.72,326.13,364.54,327.6,366.04z\"/>\n<path class=\"st3\" d=\"M405,317.36c-0.73,0.63-1.79-0.36-5.83-1.13c-4.41-0.84-5.94-0.2-6.41-1.09c-0.97-1.86,3.59-8.5,7.95-7.58\n   C404.95,308.45,406.6,315.99,405,317.36z\"/>\n<path class=\"st3\" d=\"M424.73,330.9c-0.96,0.13-1.31-1.27-4.3-4.1c-3.26-3.09-4.9-3.36-4.81-4.37c0.18-2.09,7.6-5.23,10.78-2.1\n   C429.49,323.37,426.82,330.6,424.73,330.9z\"/>\n<path class=\"st3\" d=\"M432.55,352.97c-0.87-0.42-0.39-1.78-1.3-5.8c-1-4.38-2.2-5.52-1.57-6.31c1.32-1.64,9.23-0.12,10.13,4.25\n   C440.69,349.35,434.45,353.88,432.55,352.97z\"/>\n<path class=\"st3\" d=\"M428.99,376.18c-0.56-0.79,0.53-1.75,1.69-5.69c1.26-4.31,0.76-5.89,1.7-6.27c1.95-0.79,8.12,4.38,6.78,8.64\n   C437.86,376.99,430.2,377.91,428.99,376.18z\"/>\n<path class=\"st3\" d=\"M416.96,396.69c-0.26-0.93,1.08-1.47,3.47-4.82c2.61-3.65,2.67-5.31,3.68-5.36c2.1-0.1,6.21,6.82,3.55,10.39\n   C425.07,400.38,417.54,398.71,416.96,396.69z\"/>\n<path class=\"st3\" d=\"M395.7,411.87c0.2-0.94,1.64-0.79,5.33-2.62c4.02-2,4.85-3.44,5.76-3.01c1.9,0.89,2.28,8.94-1.75,10.84\n   C401.12,418.93,395.25,413.92,395.7,411.87z\"/>\n<path class=\"st3\" d=\"M367.9,417.71c0.55-0.8,1.82-0.12,5.92-0.42c4.48-0.33,5.78-1.35,6.47-0.61c1.42,1.55-1.26,9.14-5.71,9.38\n   C370.26,426.3,366.71,419.45,367.9,417.71z\"/>\n<path class=\"st3\" d=\"M326.44,391.48c0.93,0.28,0.66,1.7,2.19,5.52c1.67,4.17,3.04,5.1,2.54,5.98c-1.04,1.83-9.09,1.57-10.67-2.6\n   C318.97,396.32,324.43,390.87,326.44,391.48z\"/>\n<path class=\"st3\" d=\"M342.38,411.59c0.83-0.5,1.7,0.65,5.56,2.08c4.21,1.56,5.82,1.17,6.14,2.13c0.65,2-4.94,7.79-9.09,6.16\n   C340.96,420.38,340.58,412.67,342.38,411.59z\"/>\n<path class=\"st2\" d=\"M274.79,374c0.65,5.87,1.95,17.68-4.42,27.41c-12.03,18.38-45.14,19.73-67.07,8.72\n   c-17.06-8.57-24.82-23.34-26.9-27.66c-2.45-5.09-8.27-17.16-5.31-32.21c0.73-3.71,2.63-12.73,10.3-20.74\n   c8.93-9.33,19.82-11.18,23.3-11.72c12.75-1.98,22.61,2.53,30.68,6.22c14.65,6.7,23,16.38,24.85,18.59\n   C264.53,347.73,273.05,358.19,274.79,374z\"/>\n<path class=\"st3\" d=\"M239.14,324.9c0.12,1.77,2.77,1.88,8.99,6.18c6.78,4.69,7.9,7.53,9.68,6.99c3.69-1.12,6.52-15.64-0.3-20.16\n   C250.87,313.5,238.87,321.04,239.14,324.9z\"/>\n<path class=\"st3\" d=\"M259,340.33c-0.47,1.71,2,2.69,6.45,8.8c4.85,6.67,4.97,9.71,6.83,9.79c3.86,0.16,11.31-12.62,6.37-19.14\n   C273.84,333.44,260.02,336.61,259,340.33z\"/>\n<path class=\"st3\" d=\"M273.28,361.83c-1.2,1.31,0.56,3.3,1.73,10.77c1.28,8.14,0,10.91,1.62,11.83c3.36,1.9,15.82-6.08,14.39-14.13\n   C289.63,362.46,275.89,358.98,273.28,361.83z\"/>\n<path class=\"st3\" d=\"M276.66,386.78c-1.71,0.48-1.28,3.1-4.23,10.05c-3.22,7.59-5.77,9.26-4.88,10.89\n   c1.85,3.39,16.64,3.21,19.68-4.39C290.2,395.96,280.38,385.74,276.66,386.78z\"/>\n<path class=\"st3\" d=\"M192.63,320.17c1.32,1.19,3.3-0.58,10.76-1.8c8.14-1.33,10.91-0.07,11.82-1.69\n   c1.88-3.37-6.17-15.78-14.22-14.3C193.15,303.82,189.76,317.58,192.63,320.17z\"/>\n<path class=\"st3\" d=\"M216.62,317.07c0.63,1.66,3.2,0.99,10.4,3.29c7.85,2.52,9.75,4.9,11.29,3.87c3.21-2.15,1.68-16.86-6.16-19.2\n   C224.52,302.75,215.24,313.46,216.62,317.07z\"/>\n<path class=\"st3\" d=\"M169.24,358.75c1.62-0.72,0.82-3.25,2.75-10.55c2.1-7.97,4.39-9.99,3.28-11.48\n   c-2.31-3.09-16.93-0.8-18.86,7.15C154.53,351.6,165.71,360.31,169.24,358.75z\"/>\n<path class=\"st3\" d=\"M174.2,335.23c1.74,0.37,2.57-2.15,8.41-6.94c6.38-5.23,9.41-5.52,9.38-7.38\n   c-0.06-3.86-13.24-10.57-19.47-5.26C166.48,320.82,170.43,334.43,174.2,335.23z\"/>\n<path class=\"st3\" d=\"M189.04,401.31c0.46-1.71-2.01-2.68-6.48-8.77c-4.88-6.65-5.01-9.69-6.87-9.76\n   c-3.86-0.15-11.26,12.66-6.29,19.16C174.23,408.26,188.03,405.04,189.04,401.31z\"/>\n<path class=\"st3\" d=\"M174.6,381.85c1.08-1.41-0.84-3.24-2.65-10.58c-1.97-8.01-0.94-10.87-2.63-11.64\n   c-3.51-1.61-15.24,7.41-13.12,15.31C158.26,382.63,172.25,384.92,174.6,381.85z\"/>\n<path class=\"st3\" d=\"M239.49,418.53c-0.97-1.48-3.34-0.28-10.86-0.99c-8.21-0.78-10.57-2.7-11.86-1.36\n   c-2.67,2.78,1.97,16.83,10.13,17.44C234.84,434.21,241.61,421.76,239.49,418.53z\"/>\n<path class=\"st3\" d=\"M211.85,415.43c-0.28-1.75-2.93-1.63-9.49-5.37c-7.16-4.08-8.52-6.81-10.25-6.12\n   c-3.58,1.44-5.13,16.15,2.06,20.06C201.15,427.81,212.45,419.25,211.85,415.43z\"/>\n<path class=\"st3\" d=\"M264.71,410.05c-1.53-0.91-3.12,1.21-10.2,3.87c-7.72,2.9-10.69,2.2-11.26,3.97\n   c-1.18,3.67,9.14,14.27,16.75,11.24C267.4,426.19,268.03,412.03,264.71,410.05z\"/>\n<path class=\"st3\" d=\"M221.89,317.91c0.34,0.9,1.74,0.54,5.66,1.79c4.28,1.37,5.31,2.67,6.15,2.11c1.75-1.17,0.91-9.18-3.36-10.46\n   C226.19,310.11,221.14,315.95,221.89,317.91z\"/>\n<path class=\"st3\" d=\"M243.83,326.95c0.09,0.96,1.53,0.99,4.97,3.25c3.75,2.47,4.39,4,5.35,3.69c2-0.65,3.36-8.59-0.41-10.97\n   C250.07,320.6,243.63,324.85,243.83,326.95z\"/>\n<path class=\"st3\" d=\"M263.88,344.03c-0.28,0.92,1.04,1.5,3.36,4.9c2.53,3.71,2.54,5.37,3.55,5.45c2.1,0.15,6.37-6.67,3.79-10.31\n   C272.08,340.53,264.5,342.02,263.88,344.03z\"/>\n<path class=\"st3\" d=\"M274.81,366.74c-0.68,0.69,0.23,1.81,0.72,5.89c0.53,4.46-0.22,5.94,0.64,6.47c1.79,1.1,8.73-2.98,8.12-7.39\n   C283.69,367.42,276.29,365.24,274.81,366.74z\"/>\n<path class=\"st3\" d=\"M197.41,318.06c0.73,0.63,1.79-0.36,5.83-1.13c4.41-0.84,5.94-0.2,6.41-1.09c0.97-1.86-3.59-8.5-7.95-7.58\n   C197.46,309.15,195.82,316.69,197.41,318.06z\"/>\n<path class=\"st3\" d=\"M177.68,331.59c0.96,0.13,1.31-1.27,4.3-4.1c3.26-3.09,4.9-3.36,4.81-4.37c-0.18-2.09-7.6-5.23-10.78-2.1\n   C172.92,324.07,175.6,331.3,177.68,331.59z\"/>\n<path class=\"st3\" d=\"M169.86,353.67c0.87-0.42,0.39-1.78,1.3-5.8c1-4.38,2.2-5.52,1.57-6.31c-1.32-1.64-9.23-0.12-10.13,4.25\n   C161.72,350.05,167.97,354.58,169.86,353.67z\"/>\n<path class=\"st3\" d=\"M173.42,376.88c0.56-0.79-0.53-1.75-1.69-5.69c-1.26-4.31-0.76-5.89-1.7-6.27c-1.95-0.79-8.12,4.38-6.78,8.64\n   C164.55,377.69,172.22,378.61,173.42,376.88z\"/>\n<path class=\"st3\" d=\"M185.45,397.39c0.26-0.93-1.08-1.47-3.47-4.82c-2.61-3.65-2.67-5.31-3.68-5.36c-2.1-0.1-6.21,6.82-3.55,10.39\n   C177.34,401.08,184.88,399.41,185.45,397.39z\"/>\n<path class=\"st3\" d=\"M206.72,412.57c-0.2-0.94-1.64-0.79-5.33-2.62c-4.02-2-4.85-3.44-5.76-3.01c-1.9,0.89-2.28,8.94,1.75,10.84\n   C201.29,419.63,207.16,414.62,206.72,412.57z\"/>\n<path class=\"st3\" d=\"M234.52,418.41c-0.55-0.8-1.82-0.12-5.92-0.42c-4.48-0.33-5.78-1.35-6.47-0.61c-1.42,1.55,1.26,9.14,5.71,9.38\n   C232.16,427,235.71,420.15,234.52,418.41z\"/>\n<path class=\"st3\" d=\"M275.97,392.17c-0.93,0.28-0.66,1.7-2.19,5.52c-1.67,4.17-3.04,5.1-2.54,5.98c1.04,1.83,9.09,1.57,10.67-2.6\n   C283.44,397.02,277.98,391.57,275.97,392.17z\"/>\n<path class=\"st3\" d=\"M260.03,412.29c-0.83-0.5-1.7,0.65-5.56,2.08c-4.21,1.56-5.82,1.17-6.14,2.13c-0.65,2,4.94,7.79,9.09,6.16\n   C261.45,421.08,261.83,413.37,260.03,412.29z\"/>\n<path class=\"st4\" d=\"M300.4,388.1c2.49,0.02,4.37,5.17,5.31,7.96c1.03,3.05,25.43,75.53,12.88,80.15c-2.73,1-7.64-1.03-17.24-13.64\n   c-9.77,11.97-14.9,13.8-17.82,12.71c-12.79-4.78,7.91-69.4,11.56-79.59C296.14,392.74,298.02,388.08,300.4,388.1z\"/>\n<path class=\"st4\" d=\"M300.52,397.74c1.71,0.01,2.99,4.03,3.64,6.2c0.7,2.38,17.43,58.85,8.83,62.45\n   c-1.87,0.78-5.24-0.8-11.82-10.63c-6.7,9.33-10.22,10.75-12.21,9.9c-8.77-3.73,5.42-54.08,7.93-62.02\n   C297.6,401.36,298.89,397.73,300.52,397.74z\"/>\n<path class=\"st0\" d=\"M300.61,406.86c1.1,0.01,1.93,3.14,2.35,4.83c0.46,1.85,11.26,45.84,5.71,48.65\n   c-1.21,0.61-3.39-0.63-7.64-8.28c-4.33,7.27-6.6,8.37-7.89,7.71c-5.67-2.9,3.5-42.12,5.12-48.31\n   C298.73,409.68,299.56,406.85,300.61,406.86z\"/>\n<g>\n   <g>\n       <g>\n           <path d=\"M165.48,273.4c2.96-2.85,6.96-5.62,11.84-7.36c4.85-1.81,10.54-2.55,16.45-2.04c2.97,0.28,5.93,0.82,9.01,1.79\n               c1.59,0.5,3.2,1.26,4.61,2.09c1.43,0.83,2.75,1.72,4.04,2.63c2.58,1.82,5.08,3.74,7.63,5.7c2.53,1.95,5.1,3.95,7.71,5.97\n               c5.23,4.02,10.64,8.14,16.17,12.31c2.77,2.08,5.56,4.17,8.37,6.28c2.81,2.07,5.62,4.2,8.53,5.81c1.45,0.8,2.93,1.44,4.5,1.85\n               c1.56,0.41,3.25,0.64,4.92,0.7c3.36,0.13,6.78-0.38,10.04-1.46c1.63-0.55,3.22-1.19,4.64-2.1c1.46-0.9,2.82-1.97,4.09-3.15\n               c2.52-2.38,4.59-5.26,6.1-8.42c-1.1,3.32-2.84,6.51-5.2,9.28c-1.18,1.37-2.5,2.65-3.96,3.78c-1.48,1.17-3.15,2.04-4.83,2.78\n               c-3.39,1.49-7.09,2.38-10.88,2.52c-1.89,0.07-3.79-0.03-5.71-0.4c-1.92-0.35-3.79-1.02-5.5-1.83c-3.43-1.64-6.41-3.66-9.38-5.6\n               c-2.95-1.96-5.84-3.94-8.71-5.91c-5.73-3.95-11.29-7.92-16.65-11.83c-2.66-1.97-5.28-3.91-7.85-5.82\n               c-2.56-1.89-5.07-3.76-7.52-5.45c-1.22-0.84-2.43-1.63-3.6-2.3c-1.18-0.67-2.27-1.18-3.46-1.55c-2.49-0.77-5.15-1.26-7.65-1.48\n               c-5.06-0.42-9.81,0.2-13.8,1.68c-4.02,1.43-7.22,3.64-9.69,6c-0.78,0.75-1.5,1.52-2.2,2.31c-0.69,0.79-1.41,1.63-2,2.37\n               c-1.21,1.51-2.2,3-3.01,4.46c-1.62,2.92-2.46,5.68-2.91,8.12c-0.84,4.92-0.22,8.46,0.2,10.87c0.47,2.43,0.82,3.82,0.82,4.68\n               c0.02,0.86-0.26,1.18-0.64,1.38c-0.37,0.2-0.8,0.28-1.51-0.31c-0.69-0.59-1.72-1.83-2.84-4.48c-0.55-1.33-1.1-3.02-1.47-5.16\n               c-0.37-2.14-0.53-4.76-0.18-7.81c0.38-3.04,1.31-6.54,3.21-10.15c0.95-1.8,2.12-3.63,3.52-5.41c0.72-0.91,1.4-1.72,2.18-2.62\n               C163.69,275.21,164.54,274.29,165.48,273.4z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M300.09,364.11c-0.3-2.37-0.81-6.04-2.2-9.97c-1.39-3.91-3.86-8.05-7.44-10.78c1.94,1.13,3.67,2.75,5.07,4.58\n               c1.4,1.83,2.45,3.88,3.24,5.88c1.54,4.02,2.02,7.78,2.32,10.17c0.64,6.07,0.35,6.44,0.11,6.46\n               C300.87,370.48,300.72,370.11,300.09,364.11z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M292.92,359.82c1.08,0.77,2.69,2.06,4.19,3.84c1.51,1.77,2.88,4.03,3.69,6.33c-1.1-2.18-2.55-4.31-4.07-6.01\n               c-1.51-1.71-3.07-2.98-4.13-3.73c-1.34-0.94-2.09-1.37-2.47-1.63c-0.38-0.26-0.4-0.34-0.36-0.41c0.03-0.07,0.11-0.1,0.54,0.08\n               C290.75,358.47,291.55,358.86,292.92,359.82z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M294.97,359.12c0.68,0.53,1.74,1.35,2.8,2.44c1.06,1.09,2.09,2.49,2.67,3.99c-1.5-2.85-4.34-5.12-5.68-6.16\n               c-1.72-1.31-1.8-1.43-1.73-1.51C293.07,357.82,293.24,357.81,294.97,359.12z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M294.32,356.26c1.35,0.96,4.02,3.24,5.76,5.8c-2.04-2.3-4.62-4.57-5.96-5.53c-1.68-1.21-1.77-1.3-1.72-1.39\n               C292.44,355.07,292.62,355.03,294.32,356.26z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M294.84,353.5c1.09,0.88,3.27,2.88,4.79,5.01c-1.77-1.91-3.89-3.9-4.98-4.79c-1.36-1.12-1.43-1.21-1.37-1.28\n               C293.32,352.39,293.47,352.37,294.84,353.5z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M292.3,349.85c0.64,0.3,1.61,0.8,2.62,1.5c1.02,0.7,2.08,1.61,2.93,2.58c-1.92-1.75-4.4-3.26-5.68-3.82\n               c-1.59-0.72-1.69-0.76-1.66-0.85C290.54,349.21,290.68,349.13,292.3,349.85z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M291.59,347.31c0.92,0.23,2.81,1.02,4.08,2.26c-1.41-1.06-3.23-1.84-4.14-2.08c-1.14-0.31-1.22-0.31-1.2-0.38\n               C290.34,347.08,290.43,347,291.59,347.31z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M301.59,364.18c0.3-2.39,0.78-6.15,2.32-10.17c0.78-2,1.83-4.04,3.24-5.88c1.39-1.84,3.13-3.45,5.07-4.58\n               c-3.58,2.73-6.05,6.88-7.44,10.78c-1.4,3.93-1.91,7.6-2.2,9.97c-0.63,6-0.79,6.37-1.09,6.34\n               C301.24,370.62,300.95,370.24,301.59,364.18z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M310.05,360.45c-1.06,0.75-2.61,2.03-4.13,3.73c-1.52,1.7-2.97,3.83-4.07,6.01c0.81-2.3,2.19-4.56,3.69-6.33\n               c1.5-1.78,3.11-3.07,4.19-3.84c1.37-0.96,2.17-1.35,2.6-1.53c0.43-0.18,0.51-0.14,0.54-0.08c0.03,0.07,0.02,0.15-0.36,0.41\n               C312.13,359.07,311.38,359.51,310.05,360.45z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M307.9,359.59c-1.34,1.04-4.17,3.3-5.68,6.16c0.57-1.5,1.61-2.9,2.67-3.99c1.06-1.09,2.12-1.91,2.8-2.44\n               c1.73-1.31,1.9-1.3,1.95-1.23C309.7,358.16,309.62,358.28,307.9,359.59z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M308.54,356.72c-1.34,0.96-3.92,3.22-5.96,5.52c1.74-2.56,4.41-4.84,5.76-5.8c1.7-1.23,1.88-1.19,1.92-1.12\n               C310.31,355.42,310.22,355.5,308.54,356.72z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M308,353.91c-1.09,0.88-3.2,2.88-4.98,4.79c1.52-2.13,3.7-4.12,4.79-5.01c1.37-1.13,1.52-1.11,1.56-1.06\n               C309.43,352.7,309.36,352.79,308,353.91z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M310.48,350.3c-1.27,0.56-3.75,2.07-5.68,3.82c0.86-0.98,1.91-1.88,2.93-2.58c1.02-0.7,1.99-1.2,2.62-1.5\n               c1.62-0.73,1.76-0.65,1.78-0.59C312.17,349.55,312.07,349.58,310.48,350.3z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M310.65,349.47c-0.91,0.24-2.72,1.02-4.14,2.08c1.28-1.24,3.17-2.03,4.08-2.26c1.16-0.31,1.25-0.23,1.26-0.19\n               C311.86,349.16,311.79,349.16,310.65,349.47z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M327.81,593.89c-1.91,0.13-4.33,0.26-6.92,0.98c-2.56,0.77-5.41,2.18-8.19,3.94c-2.77,1.78-5.46,4.11-7.45,7.05\n               c-1.99,2.92-3.24,6.47-3.19,10.06c-0.52-3.56,0.43-7.41,2.33-10.6c1.89-3.23,4.65-5.8,7.49-7.73c1.43-0.97,2.88-1.8,4.31-2.51\n               c1.42-0.71,2.85-1.31,4.26-1.73c2.83-0.79,5.34-0.9,7.26-1.03c2.43-0.14,4.24-0.26,5.6-0.45c1.36-0.19,2.29-0.37,2.93-0.52\n               c1.28-0.3,1.48-0.22,1.58-0.01c0.08,0.18,0.05,0.46-1.23,1.06c-0.64,0.3-1.62,0.62-3.05,0.9\n               C332.11,593.58,330.22,593.75,327.81,593.89z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M325.77,628.09c-0.61-1.31-1.44-2.94-2.59-4.67c-1.16-1.72-2.69-3.52-4.74-4.92c-2.02-1.4-4.57-2.4-7.23-2.3\n               c-2.64,0.09-5.38,1.25-7.01,3.44c1.34-2.4,4.13-3.94,6.96-4.21c2.87-0.3,5.71,0.68,7.91,2.14c2.23,1.45,3.89,3.38,5.11,5.18\n               c1.22,1.81,2.06,3.51,2.68,4.84c1.73,3.78,2.23,5.7,2.42,6.61l0.12,0.58l-0.48-0.07c-0.55-0.08-0.71-0.39-0.75-0.52\n               c-0.04-0.15,0.02-0.21,0.08-0.24c0.13-0.11,0.28,0.05,0.68,0l-0.36,0.5C328.12,633.62,327.47,631.79,325.77,628.09z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M336.71,599.17c-0.33,1.42-0.86,3.26-2.04,5.11c-1.15,1.89-3.13,3.48-5.24,4.83c-2.1,1.38-4.43,2.68-6.11,4.68\n               c-0.83,0.99-1.35,2.21-1.36,3.53c-0.02,1.31,0.34,2.63,0.81,3.87c-0.62-1.17-1.14-2.46-1.25-3.86c-0.05-0.7,0.02-1.42,0.23-2.1\n               c0.22-0.68,0.56-1.32,0.97-1.89c1.68-2.29,4.07-3.71,6.1-5.13c2.06-1.4,3.83-2.85,4.86-4.56c1.07-1.68,1.59-3.39,1.89-4.74\n               c0.39-1.71,0.52-3.07,0.64-4.1c0.12-1.04,0.19-1.76,0.27-2.26c0.15-1,0.3-1.1,0.46-1.09c0.16,0.01,0.3,0.12,0.36,1.13\n               c0.03,0.51,0.04,1.24-0.02,2.31C337.22,595.96,337.12,597.36,336.71,599.17z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M315.82,608.73c1.56-1.27,3.58-2.85,6.01-4.51c0.61-0.41,1.24-0.84,1.89-1.26c0.66-0.44,1.39-0.83,1.61-1.22\n               c0.1-0.14,0.13-0.39,0.09-0.48c-0.03-0.06-0.01-0.09-0.32-0.15c-0.65-0.05-1.51,0.05-2.28,0.24c-3.2,0.88-6.44,2.76-9.03,5.36\n               c-2.6,2.6-4.6,5.92-5.58,9.51c0.51-3.68,2.26-7.33,4.81-10.23c2.56-2.91,5.88-5.05,9.41-6.12c0.92-0.24,1.8-0.4,2.84-0.34\n               c0.28,0.03,0.6,0.1,0.93,0.29c0.33,0.19,0.6,0.54,0.72,0.88c0.24,0.7,0.1,1.35-0.23,1.89c-0.31,0.5-0.73,0.82-1.09,1.07\n               c-0.34,0.22-0.67,0.44-1,0.66c-0.64,0.42-1.26,0.84-1.86,1.24c-2.38,1.64-4.38,3.17-5.91,4.42c-3.85,3.17-5.76,5.01-6.86,5.88\n               c-1.09,0.89-1.34,0.86-1.5,0.7c-0.16-0.16-0.21-0.41,0.68-1.52C310.08,613.97,311.9,611.96,315.82,608.73z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M320.83,598.15c-2.43,0.88-6.15,2.69-9.26,6.06c-3.11,3.31-5.4,8.25-5.35,13.23c-0.33-2.45-0.01-5.08,0.83-7.49\n               c0.83-2.42,2.19-4.62,3.76-6.41c3.19-3.62,7.12-5.48,9.64-6.4c3.23-1.15,5.07-1.27,6.01-1.33c0.96-0.02,1.07,0.11,1.08,0.26\n               s-0.07,0.3-0.98,0.51C325.68,596.81,323.93,597.05,320.83,598.15z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M335.14,607.93c-0.33,1.02-1.09,2.28-2.32,3.23c-1.21,0.98-2.75,1.72-4.28,2.6c-1.53,0.86-3,2.01-3.83,3.7\n               c-0.84,1.66-1.09,3.66-0.61,5.5c-0.71-1.76-0.66-3.9,0.13-5.73c0.4-0.91,0.95-1.76,1.66-2.44c0.7-0.69,1.48-1.23,2.25-1.71\n               c1.55-0.94,3.05-1.68,4.15-2.59c1.13-0.88,1.76-1.94,2.06-2.85c0.38-1.15,0.43-2.11,0.48-2.84c0.03-0.65,0.05-1.15,0.07-1.61\n               c0.05-0.72,0.14-0.8,0.26-0.81c0.11-0.01,0.22,0.06,0.33,0.78c0.05,0.36,0.1,0.88,0.11,1.65\n               C335.6,605.6,335.57,606.63,335.14,607.93z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M338.7,605.12c0.12,1.37-0.15,3.21-1.23,4.93c-0.53,0.86-1.29,1.66-2.19,2.31c-0.9,0.65-1.91,1.16-2.93,1.66\n               c-1.02,0.5-2.06,0.99-3.01,1.64c-0.95,0.63-1.77,1.48-2.46,2.44c-1.35,1.93-2.04,4.41-1.77,6.81c-0.58-2.34-0.12-5.02,1.2-7.18\n               c0.66-1.07,1.52-2.04,2.52-2.78c1-0.74,2.07-1.28,3.07-1.81c1.01-0.52,1.96-1.03,2.76-1.62c0.8-0.59,1.45-1.28,1.91-2.03\n               c0.94-1.5,1.18-3.09,1.08-4.28c-0.14-1.52-0.57-2.7-0.81-3.61c-0.26-0.92-0.43-1.56-0.52-2.01c-0.18-0.9-0.09-1.03,0.05-1.08\n               c0.14-0.04,0.29,0.01,0.66,0.85c0.18,0.42,0.42,1.04,0.73,1.94C338.05,602.19,338.54,603.38,338.7,605.12z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M313.04,625.38c-1.58,0.06-4.1,0.7-6.24,2.59c-1.07,0.92-2.05,2.1-2.84,3.42c-0.74,1.33-1.56,2.76-1.51,4.31\n               c-0.14-0.76-0.01-1.57,0.22-2.33c0.24-0.76,0.54-1.49,0.9-2.2c0.72-1.41,1.69-2.68,2.8-3.68c1.1-1,2.34-1.74,3.51-2.16\n               c1.17-0.43,2.26-0.6,3.11-0.64c2.17-0.07,3.28,0.45,3.81,0.7c0.53,0.29,0.54,0.4,0.5,0.48c-0.04,0.09-0.14,0.13-0.68-0.04\n               C316.09,625.72,315.06,625.32,313.04,625.38z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M312.87,627.92c-1.16-0.05-2.97,0.76-4.64,2.05c-1.65,1.31-2.8,3.64-2.74,5.96c-0.36-2.3,0.7-4.88,2.44-6.32\n               c0.85-0.73,1.78-1.23,2.61-1.62c0.84-0.4,1.68-0.58,2.33-0.57c0.93,0,1.59,0.24,2.04,0.45c0.45,0.22,0.69,0.43,0.84,0.57\n               l0.32,0.3l-0.39-0.01c-0.3-0.01-0.34-0.06-0.35-0.12c-0.01-0.06,0.02-0.12,0.31-0.2l-0.08,0.29\n               C315.23,628.56,314.56,627.97,312.87,627.92z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M318.13,632.48c-0.81-0.52-2.33-1.03-4.04-0.6c-0.84,0.21-1.76,0.48-2.46,1.07c-0.71,0.59-1.2,1.47-1.31,2.41\n               c-0.01-0.94,0.41-1.93,1.13-2.61c0.74-0.7,1.68-1.01,2.55-1.25c0.88-0.23,1.77-0.25,2.53-0.09c0.75,0.16,1.37,0.44,1.82,0.72\n               c1.12,0.72,1.49,1.37,1.67,1.69c0.16,0.33,0.13,0.39,0.08,0.42c-0.05,0.03-0.11,0.02-0.33-0.26\n               C319.54,633.72,319.17,633.14,318.13,632.48z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M323.7,630.32c-0.78-1.56-2.04-3.97-4.05-6.26c-1-1.13-2.23-2.21-3.73-2.82c-1.48-0.6-3.25-0.73-4.75-0.04\n               c1.4-0.89,3.3-0.95,4.91-0.4c1.64,0.55,2.99,1.66,4.06,2.8c2.15,2.33,3.4,4.81,4.2,6.39c1.92,4.04,1.79,4.37,1.63,4.44\n               C325.77,634.54,325.59,634.31,323.7,630.32z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M323.45,633.96c-0.23-0.52-0.65-1.3-1.27-2.1c-0.62-0.8-1.43-1.59-2.3-2.23c0.94,0.52,1.82,1.3,2.47,2.09\n               c0.65,0.8,1.08,1.61,1.31,2.14c0.56,1.37,0.45,1.5,0.41,1.5C323.99,635.4,324,635.3,323.45,633.96z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M322.36,634.7c-0.24-0.47-0.67-1.17-1.3-1.86c-0.62-0.69-1.44-1.36-2.3-1.86c0.92,0.39,1.8,1.03,2.45,1.72\n               c0.66,0.69,1.1,1.42,1.34,1.9c0.59,1.24,0.48,1.37,0.44,1.37C322.92,636,322.93,635.9,322.36,634.7z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M332.1,630.74c-0.36-0.7-0.97-1.49-1.78-2.36c-0.79-0.87-1.77-1.82-2.6-3.05c-0.83-1.23-1.34-2.79-1.34-4.38\n               c-0.01-1.58,0.46-3.17,1.33-4.42c-1.43,2.7-1.13,6.22,0.53,8.44c0.8,1.13,1.77,2.06,2.58,2.95c0.82,0.88,1.47,1.74,1.87,2.5\n               c1.02,1.91,0.81,3.23,0.64,3.78c-0.2,0.58-0.34,0.59-0.41,0.56c-0.1-0.04-0.12-0.12-0.05-0.66\n               C332.9,633.59,333.04,632.5,332.1,630.74z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M276.34,592.32c1.92,0.13,4.43,0.24,7.26,1.03c1.41,0.41,2.83,1.02,4.26,1.73c1.43,0.71,2.88,1.54,4.31,2.51\n               c2.85,1.93,5.6,4.51,7.49,7.73c1.9,3.19,2.85,7.04,2.33,10.6c0.05-3.59-1.2-7.14-3.19-10.06c-1.99-2.94-4.68-5.26-7.45-7.05\n               c-2.78-1.76-5.63-3.17-8.19-3.94c-2.59-0.72-5.01-0.85-6.92-0.98c-2.41-0.14-4.3-0.31-5.73-0.58c-1.43-0.28-2.41-0.6-3.05-0.9\n               c-1.28-0.6-1.31-0.88-1.23-1.06c0.09-0.21,0.3-0.29,1.58,0.01c0.64,0.15,1.57,0.33,2.93,0.52\n               C272.11,592.06,273.91,592.19,276.34,592.32z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M277.2,627.58c0.63-1.33,1.46-3.03,2.68-4.84c1.22-1.8,2.88-3.72,5.11-5.18c2.2-1.45,5.03-2.44,7.91-2.14\n               c2.83,0.27,5.62,1.81,6.96,4.21c-1.64-2.19-4.38-3.35-7.01-3.44c-2.66-0.11-5.21,0.9-7.23,2.3c-2.04,1.4-3.57,3.21-4.74,4.92\n               c-1.16,1.73-1.98,3.37-2.59,4.67c-1.7,3.7-2.34,5.53-2.78,6.35l-0.36-0.5c0.4,0.05,0.55-0.11,0.68,0\n               c0.06,0.04,0.12,0.09,0.08,0.24c-0.05,0.13-0.2,0.44-0.75,0.52l-0.48,0.07l0.12-0.58C274.97,633.28,275.46,631.36,277.2,627.58z\n               \"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M268.48,598.91c0.31,1.35,0.82,3.06,1.89,4.74c1.03,1.71,2.8,3.16,4.86,4.56c2.03,1.42,4.42,2.84,6.1,5.13\n               c0.41,0.57,0.75,1.21,0.97,1.89c0.21,0.69,0.28,1.41,0.23,2.1c-0.11,1.4-0.62,2.69-1.25,3.86c0.47-1.24,0.83-2.55,0.81-3.87\n               c-0.01-1.32-0.53-2.54-1.36-3.53c-1.67-2-4.01-3.3-6.11-4.68c-2.11-1.35-4.09-2.94-5.24-4.83c-1.18-1.85-1.72-3.69-2.04-5.11\n               c-0.41-1.81-0.51-3.21-0.58-4.27c-0.06-1.06-0.05-1.8-0.02-2.31c0.06-1.02,0.2-1.13,0.36-1.13c0.16-0.01,0.31,0.1,0.46,1.09\n               c0.08,0.5,0.15,1.22,0.27,2.26C267.96,595.84,268.09,597.2,268.48,598.91z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M287.2,610c-1.54-1.25-3.53-2.78-5.91-4.42c-0.6-0.41-1.21-0.83-1.86-1.24c-0.33-0.22-0.66-0.44-1-0.66\n               c-0.36-0.25-0.77-0.57-1.09-1.07c-0.33-0.54-0.47-1.18-0.23-1.89c0.12-0.35,0.4-0.69,0.72-0.88c0.33-0.2,0.65-0.26,0.93-0.29\n               c1.04-0.06,1.92,0.1,2.84,0.34c3.54,1.06,6.86,3.21,9.41,6.12c2.55,2.9,4.3,6.55,4.81,10.23c-0.98-3.59-2.98-6.91-5.58-9.51\n               c-2.59-2.6-5.83-4.48-9.03-5.36c-0.77-0.2-1.63-0.3-2.28-0.24c-0.31,0.06-0.29,0.09-0.32,0.15c-0.04,0.09-0.01,0.33,0.09,0.48\n               c0.23,0.39,0.96,0.78,1.61,1.22c0.66,0.42,1.29,0.85,1.89,1.26c2.43,1.66,4.45,3.24,6.01,4.51c3.92,3.23,5.74,5.24,6.65,6.33\n               c0.89,1.11,0.85,1.36,0.68,1.52c-0.16,0.16-0.41,0.19-1.5-0.7C292.96,615.01,291.05,613.17,287.2,610z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M283.59,597.14c2.52,0.91,6.45,2.77,9.64,6.4c1.58,1.8,2.93,3.99,3.76,6.41c0.84,2.41,1.16,5.04,0.83,7.49\n               c0.05-4.98-2.23-9.92-5.35-13.23c-3.11-3.36-6.83-5.17-9.26-6.06c-3.1-1.1-4.85-1.34-5.74-1.59c-0.91-0.21-0.99-0.36-0.98-0.51\n               c0.02-0.15,0.13-0.27,1.08-0.26C278.53,595.86,280.37,595.99,283.59,597.14z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M269.7,607.66c0.3,0.91,0.93,1.96,2.06,2.85c1.1,0.91,2.6,1.64,4.15,2.59c0.77,0.48,1.56,1.02,2.25,1.71\n               c0.71,0.68,1.26,1.53,1.66,2.44c0.79,1.83,0.84,3.97,0.13,5.73c0.48-1.84,0.22-3.84-0.61-5.5c-0.82-1.7-2.3-2.84-3.83-3.7\n               c-1.52-0.88-3.07-1.62-4.28-2.6c-1.23-0.95-1.99-2.21-2.32-3.23c-0.42-1.3-0.45-2.33-0.46-3.09c0-0.77,0.06-1.29,0.11-1.65\n               c0.11-0.72,0.22-0.79,0.33-0.78c0.12,0.01,0.21,0.09,0.26,0.81c0.02,0.46,0.04,0.96,0.07,1.61\n               C269.26,605.55,269.32,606.51,269.7,607.66z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M266.41,605.2c-0.1,1.19,0.14,2.78,1.08,4.28c0.46,0.75,1.11,1.44,1.91,2.03c0.8,0.6,1.75,1.1,2.76,1.62\n               c1,0.52,2.08,1.06,3.07,1.81c1.01,0.74,1.86,1.7,2.52,2.78c1.32,2.16,1.78,4.83,1.2,7.18c0.27-2.4-0.42-4.87-1.77-6.81\n               c-0.68-0.96-1.51-1.8-2.46-2.44c-0.94-0.65-1.99-1.13-3.01-1.64c-1.02-0.5-2.03-1.01-2.93-1.66c-0.9-0.65-1.66-1.45-2.19-2.31\n               c-1.08-1.72-1.35-3.56-1.23-4.93c0.16-1.73,0.65-2.92,0.94-3.83c0.31-0.9,0.55-1.52,0.73-1.94c0.37-0.84,0.52-0.89,0.66-0.85\n               c0.14,0.04,0.24,0.18,0.05,1.08c-0.09,0.45-0.25,1.09-0.52,2.01C266.97,602.5,266.54,603.68,266.41,605.2z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M291.04,624.71c0.85,0.04,1.94,0.21,3.11,0.64c1.18,0.42,2.41,1.16,3.51,2.16c1.11,1,2.08,2.27,2.8,3.68\n               c0.36,0.71,0.67,1.44,0.9,2.2c0.23,0.76,0.36,1.56,0.22,2.33c0.05-1.55-0.77-2.98-1.51-4.31c-0.79-1.32-1.76-2.5-2.84-3.42\n               c-2.14-1.9-4.66-2.54-6.24-2.59c-2.02-0.06-3.05,0.34-3.59,0.47c-0.54,0.17-0.64,0.12-0.68,0.04c-0.04-0.08-0.03-0.19,0.5-0.48\n               C287.77,625.16,288.88,624.64,291.04,624.71z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M291.18,627.42c0.65-0.01,1.49,0.17,2.33,0.57c0.83,0.39,1.75,0.89,2.61,1.62c1.73,1.44,2.8,4.02,2.44,6.32\n               c0.06-2.32-1.09-4.64-2.74-5.96c-1.67-1.28-3.48-2.09-4.64-2.05c-1.69,0.06-2.36,0.64-2.69,0.77l-0.08-0.29\n               c0.29,0.08,0.32,0.14,0.31,0.2s-0.05,0.11-0.35,0.12l-0.39,0.01l0.32-0.3c0.15-0.14,0.39-0.35,0.84-0.57\n               C289.59,627.66,290.25,627.42,291.18,627.42z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M285.71,632.13c0.45-0.28,1.06-0.56,1.82-0.72c0.75-0.16,1.65-0.14,2.53,0.09c0.87,0.24,1.82,0.55,2.55,1.25\n               c0.72,0.68,1.14,1.66,1.13,2.61c-0.11-0.94-0.6-1.82-1.31-2.41c-0.7-0.59-1.63-0.86-2.46-1.07c-1.71-0.43-3.23,0.08-4.04,0.6\n               c-1.04,0.66-1.41,1.24-1.64,1.49c-0.21,0.28-0.27,0.29-0.33,0.26c-0.05-0.03-0.08-0.09,0.08-0.42\n               C284.22,633.51,284.58,632.85,285.71,632.13z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M279.71,630.01c0.79-1.58,2.05-4.06,4.2-6.39c1.07-1.14,2.42-2.25,4.06-2.8c1.62-0.55,3.51-0.49,4.91,0.4\n               c-1.5-0.69-3.27-0.57-4.75,0.04c-1.5,0.61-2.72,1.7-3.73,2.82c-2.01,2.29-3.27,4.7-4.05,6.26c-1.89,3.99-2.08,4.21-2.28,4.12\n               C277.92,634.38,277.79,634.04,279.71,630.01z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M280.38,633.87c0.24-0.53,0.66-1.34,1.31-2.14c0.65-0.8,1.53-1.57,2.47-2.09c-0.87,0.64-1.68,1.44-2.3,2.23\n               c-0.62,0.8-1.04,1.58-1.27,2.1c-0.55,1.33-0.54,1.43-0.63,1.41C279.93,635.37,279.82,635.24,280.38,633.87z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M281.49,634.6c0.25-0.48,0.68-1.21,1.34-1.9c0.66-0.69,1.53-1.33,2.45-1.72c-0.86,0.5-1.68,1.17-2.3,1.86\n               c-0.63,0.69-1.06,1.39-1.3,1.86c-0.57,1.2-0.56,1.3-0.64,1.27C281.02,635.97,280.91,635.84,281.49,634.6z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M271.36,630.43c0.39-0.75,1.05-1.62,1.87-2.5c0.81-0.89,1.78-1.81,2.58-2.95c1.65-2.22,1.96-5.74,0.53-8.44\n               c0.87,1.25,1.34,2.84,1.33,4.42c0.01,1.58-0.51,3.15-1.34,4.38c-0.83,1.23-1.81,2.18-2.6,3.05c-0.81,0.87-1.41,1.66-1.78,2.36\n               c-0.93,1.76-0.8,2.85-0.76,3.37c0.07,0.54,0.04,0.62-0.05,0.66c-0.07,0.03-0.21,0.02-0.41-0.56\n               C270.55,633.66,270.34,632.34,271.36,630.43z\"/>\n       </g>\n   </g>\n</g>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_13\">\n<g>\n   <g>\n       <g>\n           <path d=\"M246.23,565.9c-2.24-1.78-4.93-3.63-8.12-5.26c-0.81-0.38-1.62-0.81-2.48-1.17c-0.87-0.35-1.74-0.72-2.65-1.07\n               c-1.83-0.67-3.83-1.27-5.93-1.99c-2.09-0.71-4.32-1.61-6.44-2.83c-2.13-1.21-4.15-2.71-6.02-4.45\n               c-3.73-3.48-6.81-7.93-8.95-12.93c-2.16-5.01-3.28-10.55-3.52-16.17c-0.26-5.63,0.37-11.32,1.58-16.88\n               c1.22-5.56,3.02-10.89,3.67-16.39c0.32-2.74,0.33-5.52-0.13-8.23c-0.46-2.71-1.42-5.35-3.02-7.61c1.81,2.1,3.04,4.71,3.74,7.46\n               c0.7,2.75,0.91,5.64,0.78,8.5c-0.28,5.74-1.81,11.28-2.73,16.73c-0.92,5.45-1.3,10.94-0.89,16.25c0.4,5.3,1.58,10.44,3.64,14.98\n               c2.05,4.55,4.91,8.56,8.28,11.65c1.68,1.55,3.49,2.86,5.37,3.92c1.87,1.06,3.82,1.86,5.83,2.54c2,0.69,4.03,1.29,5.99,2.01\n               c0.98,0.37,1.93,0.78,2.86,1.15c0.93,0.4,1.8,0.86,2.67,1.27c3.44,1.76,6.33,3.76,8.74,5.68c3.03,2.43,5.43,4.89,7.34,7.23\n               c1,1.13,1.77,2.32,2.57,3.36c0.7,1.11,1.41,2.11,1.96,3.1c2.27,3.93,3.34,6.9,3.92,8.97c0.62,2.07,0.68,3.29,0.68,3.96\n               c-0.03,0.68-0.23,0.84-0.47,0.91c-0.24,0.06-0.51,0.02-0.9-0.53c-0.41-0.54-0.83-1.6-1.73-3.44c-0.85-1.86-2.09-4.54-4.36-8.12\n               c-0.55-0.91-1.24-1.81-1.93-2.83c-0.77-0.95-1.51-2.04-2.47-3.08C251.31,570.44,249.05,568.16,246.23,565.9z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M229.85,575.3c-0.31-1.17-0.65-2.7-0.64-4.49c-0.02-1.82,0.51-3.74,0.7-5.76c0.2-2.03,0.16-4.22-0.47-6.31\n               c-0.63-2.08-1.89-4.05-3.72-5.3c1.98,1,3.51,2.95,4.31,5.09c0.81,2.16,0.94,4.48,0.79,6.59c-0.15,2.13-0.65,4.03-0.62,5.69\n               c0,1.67,0.3,3.12,0.6,4.24c0.81,2.81,1.48,4.26,1.7,5.07c0.25,0.8,0.17,0.93,0.05,0.99c-0.12,0.05-0.27,0.02-0.68-0.72\n               C231.47,579.64,230.69,578.23,229.85,575.3z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M240.95,597.76c-1.64-1.25-3.93-2.47-6.89-3.31c-1.48-0.46-3.16-0.91-4.81-1.84c-1.68-0.91-3.1-2.47-4.02-4.23\n               c-1.85-3.52-2.39-7.9-1.41-11.96c0.94-4.05,3.32-7.81,6.58-10.12c-2.93,2.71-4.83,6.48-5.48,10.34\n               c-0.68,3.87,0.01,7.84,1.74,10.94c0.87,1.54,2.03,2.76,3.44,3.51c1.41,0.77,2.97,1.21,4.47,1.66c3.07,0.87,5.66,2.24,7.42,3.59\n               c2.26,1.7,3.63,3.46,4.45,4.91c0.81,1.46,1.15,2.59,1.27,3.38c0.24,1.58-0.03,1.77-0.25,1.8c-0.26,0.04-0.44-0.12-0.95-1.47\n               c-0.25-0.67-0.66-1.63-1.46-2.88C244.26,600.85,243.01,599.31,240.95,597.76z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M248,596.02c0.13-1.76,0.01-4.05-0.74-6.54c-0.73-2.48-2.1-5.16-4.22-7.46c-2.08-2.33-5.11-4.02-7.85-6.27\n               c-1.37-1.13-2.64-2.46-3.55-4c-0.91-1.53-1.45-3.32-1.29-5.04c0.06,1.73,0.77,3.36,1.77,4.73c1,1.39,2.29,2.55,3.67,3.54\n               c2.76,2,5.93,3.59,8.28,6.07c2.35,2.43,3.85,5.31,4.65,7.99c0.82,2.69,0.93,5.17,0.79,7.09c-0.2,2.42-0.67,4.15-0.95,5.48\n               c-0.3,1.33-0.54,2.24-0.73,2.87c-0.39,1.25-0.6,1.35-0.8,1.31c-0.2-0.04-0.36-0.21-0.25-1.52c0.06-0.65,0.19-1.59,0.41-2.93\n               C247.39,599.99,247.81,598.24,248,596.02z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M200.32,549.76c0.86,1.06,2.06,2.31,3.7,3.45c1.62,1.15,3.66,2.16,5.95,2.88c2.29,0.72,4.85,1.14,7.46,1.17\n               c2.59,0.03,5.28-0.42,7.53-1.76c-2.07,1.62-4.84,2.36-7.52,2.5c-2.69,0.13-5.36-0.19-7.78-0.89c-2.42-0.7-4.59-1.74-6.31-2.97\n               c-1.74-1.2-3.02-2.56-3.93-3.67c-1.13-1.42-1.84-2.6-2.36-3.5c-0.51-0.91-0.83-1.56-1.03-2.01c-0.4-0.91-0.32-1.08-0.18-1.15\n               c0.14-0.08,0.31-0.05,0.89,0.75c0.29,0.4,0.67,1,1.23,1.86C198.53,547.29,199.24,548.42,200.32,549.76z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M197.98,540.25c-1.17-2.05-2.88-4.47-5.35-6.72c-1.24-1.12-2.65-2.18-4.27-3.11c-1.62-0.96-3.57-1.88-5.26-3.55\n               l1.73-1.28c2.54,4.87,3.2,10.62,5.22,15.86c1.01,2.61,2.42,5.12,4.47,7.07c2.03,1.94,4.66,3.36,7.51,3.65\n               c-2.87,0.09-5.8-1.08-8.12-2.95c-2.37-1.87-4.08-4.47-5.3-7.15c-1.24-2.69-2.04-5.49-2.86-8.12c-0.82-2.64-1.68-5.15-2.85-7.33\n               l-3.33-6.19l5.07,4.92c1.33,1.29,3.13,2.16,4.85,3.14c1.75,0.99,3.33,2.16,4.67,3.38c2.69,2.45,4.52,5.08,5.78,7.28\n               c1.78,3.14,2.64,5.77,3.2,7.77c0.55,2.01,0.76,3.44,0.87,4.42c0.19,1.98-0.08,2.23-0.38,2.28c-0.32,0.05-0.6-0.11-1.18-1.96\n               c-0.3-0.92-0.67-2.26-1.3-4.14C200.51,545.63,199.64,543.17,197.98,540.25z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M200.27,486.88c1.05,0.65,2.61,1.89,3.76,3.77c1.16,1.86,1.8,4.35,1.59,6.62c-0.08-2.28-0.83-4.61-1.98-6.37\n               c-1.14-1.78-2.61-2.97-3.63-3.6c-1.29-0.79-2.06-1.05-2.44-1.24c-0.39-0.17-0.42-0.24-0.4-0.31s0.08-0.11,0.51-0.03\n               C198.1,485.84,198.93,486.06,200.27,486.88z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M198.22,488.77c-0.91-0.03-2.09,0.01-3.47-0.29c-1.38-0.29-2.81-1.12-3.95-2.33c-1.15-1.2-2.02-2.77-2.58-4.42\n               c-0.57-1.65-0.89-3.38-1.17-5.06c0.49,1.63,0.95,3.31,1.62,4.88c0.65,1.57,1.53,3.01,2.63,4.1c1.09,1.1,2.38,1.82,3.62,2.08\n               c1.24,0.27,2.4,0.25,3.31,0.28c1.15,0.02,2.06,0.09,2.75,0.25c0.69,0.16,1.14,0.36,1.44,0.53c0.58,0.36,0.57,0.49,0.52,0.57\n               c-0.06,0.09-0.16,0.11-0.74-0.09C201.62,489.08,200.52,488.77,198.22,488.77z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M200.89,484.85c-0.37-0.75-0.92-1.67-1.76-2.55c-0.83-0.89-1.94-1.74-3.27-2.35c-1.33-0.61-2.9-0.92-4.49-1.27\n               c-0.8-0.18-1.6-0.37-2.38-0.65c-0.39-0.14-0.77-0.28-1.14-0.48c-0.36-0.2-0.7-0.49-0.8-0.89c0.15,0.38,0.5,0.61,0.86,0.77\n               c0.37,0.15,0.76,0.25,1.15,0.35c0.78,0.2,1.59,0.33,2.39,0.45c1.6,0.25,3.23,0.5,4.67,1.12c1.44,0.62,2.64,1.52,3.53,2.47\n               c0.9,0.95,1.48,1.94,1.87,2.73c0.94,2.01,1.24,3.13,1.32,3.78c0.05,0.65-0.08,0.71-0.17,0.72\n               C202.4,489.04,202.69,488.78,200.89,484.85z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M180.98,504.23c-1.08,0.45-2.76,1.19-4.33,2.5c-1.55,1.3-2.95,3.3-3.18,5.52c-0.07-2.25,1.29-4.48,2.88-5.86\n               c1.61-1.41,3.35-2.15,4.45-2.61c2.82-1.08,3.04-0.95,3.07-0.85C183.93,503.08,183.76,503.17,180.98,504.23z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M191.91,496.64c-0.8,0.3-1.88,0.6-3.11,0.73c-1.23,0.14-2.58,0.21-3.97,0.61c-1.36,0.4-2.89,0.91-3.86,2.06\n               c-0.97,1.17-1.13,2.87-1.15,4.4c-0.17-1.51-0.19-3.27,0.8-4.67c0.49-0.68,1.18-1.18,1.88-1.55c0.71-0.37,1.43-0.64,2.15-0.86\n               c1.44-0.45,2.87-0.54,4.06-0.68c1.2-0.13,2.19-0.4,2.95-0.69c1.91-0.75,2.78-1.45,3.27-1.75c0.49-0.32,0.59-0.31,0.65-0.23\n               c0.06,0.07,0.08,0.18-0.35,0.61C194.81,495.03,193.93,495.84,191.91,496.64z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M194.99,499.35c-0.19,0.99-0.46,2.3-1.21,3.65c-0.74,1.35-2.08,2.61-3.78,3.31c-1.7,0.71-3.74,0.82-5.6,0.28\n               c-1.88-0.52-3.42-1.76-5.32-1.84c1.91-0.17,3.68,0.97,5.45,1.33c1.79,0.39,3.65,0.21,5.17-0.47c1.53-0.68,2.71-1.81,3.36-3.01\n               c0.67-1.21,0.94-2.43,1.12-3.39c0.38-2.44,0.56-3.81,0.81-4.48c0.22-0.69,0.35-0.73,0.46-0.7c0.11,0.03,0.18,0.13,0.11,0.82\n               C195.46,495.53,195.38,496.82,194.99,499.35z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M204.47,573.96c-0.2,0.59-0.27,1.28-0.1,2.04c0.16,0.75,0.57,1.55,1.15,2.32c1.18,1.53,2.92,3.07,4.84,4.5\n               c0.97,0.72,2.01,1.39,3.12,2.03c1.11,0.64,2.31,1.39,3.18,2.49c1.76,2.19,2.28,4.95,2.72,7.48c-0.75-2.47-1.54-5.12-3.27-7\n               c-0.85-0.94-1.95-1.55-3.09-2.15c-1.15-0.6-2.26-1.27-3.28-1.98c-1.03-0.71-1.97-1.47-2.84-2.25c-0.86-0.77-1.66-1.57-2.31-2.43\n               c-0.65-0.86-1.14-1.8-1.35-2.76c-0.21-0.96-0.12-1.9,0.14-2.64c0.66-1.88,1.88-2.84,2.74-3.46c0.89-0.61,1.56-0.92,2.02-1.12\n               c0.93-0.38,1.08-0.3,1.16-0.16c0.08,0.14,0.04,0.31-0.77,0.87c-0.4,0.28-1,0.65-1.78,1.26\n               C206,571.59,204.99,572.46,204.47,573.96z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M216.24,566.34c-1.41,0.16-3.21-0.17-5.05-0.74c-1.84-0.52-3.94-1.26-6.02-0.72c-2.05,0.53-3.96,2.41-4.34,4.74\n               c-0.39,2.32,0.75,4.94,2.83,6.26c-2.25-1.05-3.79-3.7-3.52-6.36c0.27-2.68,2.34-4.93,4.76-5.62c1.22-0.36,2.46-0.31,3.57-0.12\n               c1.11,0.19,2.11,0.5,3.03,0.77c1.84,0.56,3.42,0.85,4.65,0.71c1.56-0.14,2.7-0.64,3.53-1.05c0.82-0.43,1.35-0.81,1.72-1.06\n               c0.73-0.53,0.88-0.54,0.99-0.43c0.1,0.09,0.16,0.28-0.49,1.01c-0.34,0.35-0.86,0.83-1.74,1.36\n               C219.27,565.59,218.01,566.18,216.24,566.34z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M221.95,569.18c-0.25,1.17-0.52,2.73-1.38,4.38c-0.44,0.82-1.04,1.64-1.89,2.28c-0.83,0.66-1.96,1.08-3.1,1.09\n               c-1.15,0.01-2.26-0.3-3.31-0.73c-1.06-0.44-2.02-1.04-3.02-1.47c-0.99-0.43-2.1-0.74-3.13-0.38c-0.99,0.32-1.98,1.22-1.85,2.38\n               c-0.13-0.55,0.01-1.15,0.35-1.63c0.34-0.48,0.82-0.85,1.37-1.09c1.12-0.51,2.42-0.25,3.49,0.13c1.1,0.4,2.08,0.95,3.08,1.31\n               c1,0.37,2.02,0.61,2.99,0.57c1.96-0.04,3.4-1.49,4.14-2.92c0.76-1.47,1.04-2.96,1.29-4.11c0.57-2.93,0.72-4.51,0.89-5.34\n               c0.15-0.83,0.28-0.91,0.41-0.9c0.13,0.01,0.26,0.11,0.28,0.96C222.58,564.56,222.53,566.19,221.95,569.18z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M286.45,574.76c-3.32-2.45-8.88-5.77-15.88-7.82c-3.49-1.04-7.29-1.78-11.22-2.07c-3.93-0.32-7.96-0.32-11.87-0.39\n               c3.89-0.42,7.91-0.79,11.92-0.72c4.01,0.04,7.98,0.65,11.6,1.64c7.29,1.94,13.03,5.45,16.45,7.98c4.33,3.23,6.17,5.48,7.09,6.66\n               c0.89,1.22,0.84,1.48,0.66,1.63c-0.18,0.16-0.45,0.18-1.55-0.81C292.54,579.91,290.64,577.88,286.45,574.76z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M290.91,585.77c-1.44-0.61-3.47-0.94-5.89-1.35c-2.4-0.45-5.26-1.14-7.71-3.12c-1.22-0.98-2.17-2.34-2.8-3.8\n               c-0.64-1.46-1.04-2.99-1.45-4.5c-0.4-1.51-0.85-2.99-1.55-4.37c-0.7-1.36-1.68-2.62-3.03-3.38c1.44,0.59,2.62,1.78,3.48,3.13\n               c0.86,1.36,1.45,2.88,1.94,4.37c0.5,1.49,0.97,2.96,1.63,4.28c0.65,1.32,1.5,2.45,2.58,3.28c2.18,1.68,4.84,2.33,7.15,2.76\n               c2.36,0.4,4.52,0.75,6.15,1.44c2.08,0.83,3.38,2.13,4.11,3.19c0.75,1.08,1.05,1.95,1.2,2.55c0.26,1.22,0.05,1.38-0.12,1.41\n               c-0.2,0.04-0.34-0.08-0.79-1.09c-0.24-0.5-0.59-1.22-1.3-2.12C293.82,587.56,292.74,586.5,290.91,585.77z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M298.18,582.13c-0.08-1.73-0.39-3.96-1.42-6.28c-0.51-1.14-1.17-2.36-2.03-3.43c-0.83-1.08-2.02-1.81-3.44-2.51\n               c-2.77-1.4-5.93-2.36-9.31-2.13c-1.69,0.06-3.48,0.12-5.19-0.2c-1.72-0.3-3.37-0.86-4.86-1.63c1.58,0.58,3.25,0.95,4.93,1.08\n               c1.69,0.16,3.35-0.03,5.07-0.2c1.71-0.18,3.52-0.16,5.21,0.21c1.69,0.35,3.29,0.94,4.76,1.63c0.73,0.34,1.46,0.71,2.15,1.17\n               c0.69,0.46,1.32,1.04,1.82,1.65c1,1.22,1.7,2.5,2.26,3.77c1.13,2.53,1.45,4.95,1.53,6.82c0.06,2.38-0.3,4.18-0.69,5.51\n               c-0.39,1.33-0.84,2.19-1.16,2.77c-0.7,1.12-0.94,1.14-1.12,1.04c-0.18-0.1-0.26-0.31,0.17-1.48c0.19-0.59,0.51-1.43,0.79-2.68\n               C297.95,585.99,298.24,584.32,298.18,582.13z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M356.59,562.34c2.41-1.92,5.3-3.91,8.74-5.68c0.87-0.41,1.75-0.87,2.67-1.27c0.94-0.38,1.88-0.79,2.86-1.15\n               c1.96-0.72,3.99-1.32,5.99-2.01c2.02-0.68,3.96-1.47,5.83-2.54c1.88-1.06,3.69-2.38,5.37-3.92c3.37-3.09,6.23-7.09,8.28-11.65\n               c2.06-4.54,3.24-9.68,3.64-14.98c0.42-5.31,0.03-10.8-0.89-16.25c-0.91-5.45-2.44-10.99-2.73-16.73\n               c-0.14-2.86,0.07-5.75,0.78-8.5c0.7-2.75,1.93-5.36,3.74-7.46c-1.6,2.26-2.56,4.91-3.02,7.61c-0.46,2.71-0.45,5.5-0.13,8.23\n               c0.65,5.5,2.45,10.83,3.67,16.39c1.21,5.56,1.84,11.26,1.58,16.88c-0.25,5.62-1.36,11.16-3.52,16.17\n               c-2.14,5-5.22,9.44-8.95,12.93c-1.87,1.74-3.89,3.24-6.02,4.45c-2.13,1.22-4.35,2.13-6.44,2.83c-2.1,0.72-4.1,1.32-5.93,1.99\n               c-0.91,0.34-1.78,0.72-2.65,1.07c-0.86,0.37-1.67,0.79-2.48,1.17c-3.19,1.63-5.88,3.48-8.12,5.26\n               c-2.82,2.26-5.07,4.54-6.88,6.69c-0.95,1.04-1.69,2.13-2.47,3.08c-0.68,1.02-1.38,1.93-1.93,2.83\n               c-2.27,3.58-3.52,6.26-4.36,8.12c-0.89,1.85-1.32,2.91-1.73,3.44c-0.39,0.54-0.65,0.59-0.9,0.53c-0.24-0.06-0.44-0.23-0.47-0.91\n               c-0.01-0.67,0.05-1.89,0.68-3.96c0.58-2.08,1.65-5.05,3.92-8.97c0.55-0.99,1.25-1.99,1.96-3.1c0.8-1.04,1.57-2.23,2.57-3.36\n               C351.16,567.24,353.56,564.77,356.59,562.34z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M374.05,572.34c0.25-0.95,0.51-2.17,0.51-3.58c0.02-1.4-0.4-3.01-0.53-4.81c-0.13-1.78-0.02-3.74,0.66-5.57\n               c0.67-1.81,1.97-3.46,3.65-4.31c-1.55,1.06-2.61,2.72-3.14,4.48c-0.54,1.77-0.57,3.62-0.4,5.33c0.16,1.71,0.6,3.33,0.59,4.87\n               c0.01,1.52-0.28,2.81-0.54,3.8c-0.72,2.48-1.37,3.67-1.69,4.3c-0.35,0.62-0.47,0.65-0.57,0.61c-0.1-0.04-0.17-0.15,0.04-0.83\n               C372.8,575.95,373.37,574.72,374.05,572.34z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M364.57,590.36c1.49-1.15,3.68-2.31,6.28-3.04c1.27-0.39,2.59-0.75,3.78-1.41c1.19-0.63,2.17-1.66,2.9-2.97\n               c1.46-2.62,2.04-5.98,1.47-9.25c-0.55-3.27-2.15-6.45-4.63-8.75c2.76,1.96,4.77,5.13,5.57,8.56c0.83,3.43,0.37,7.13-1.19,10.11\n               c-0.78,1.49-1.98,2.81-3.4,3.57c-1.4,0.78-2.81,1.17-4.07,1.56c-2.5,0.71-4.44,1.74-5.82,2.8c-1.74,1.31-2.8,2.61-3.48,3.67\n               c-0.67,1.06-1.02,1.87-1.23,2.44c-0.43,1.14-0.58,1.27-0.8,1.24c-0.18-0.02-0.41-0.19-0.21-1.52c0.1-0.67,0.38-1.62,1.07-2.86\n               C361.5,593.28,362.66,591.79,364.57,590.36z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M358.22,590.17c-0.12-1.62-0.02-3.72,0.67-5.99c0.67-2.26,1.95-4.7,3.93-6.76c1.99-2.1,4.66-3.44,7-5.13\n               c1.17-0.84,2.26-1.82,3.11-3c0.84-1.16,1.44-2.54,1.49-4c0.14,1.46-0.32,2.97-1.09,4.27c-0.77,1.31-1.84,2.43-3,3.39\n               c-2.32,1.91-4.88,3.33-6.64,5.3c-1.79,1.94-2.95,4.21-3.57,6.3c-0.64,2.1-0.73,4.04-0.63,5.53c0.16,1.88,0.51,3.36,0.68,4.5\n               c0.19,1.14,0.3,1.93,0.35,2.48c0.1,1.1-0.03,1.25-0.21,1.28c-0.17,0.03-0.35-0.05-0.68-1.11c-0.16-0.53-0.36-1.3-0.62-2.43\n               C358.79,593.68,358.39,592.22,358.22,590.17z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M405.45,549.74c-0.95,1.12-2.3,2.48-4.1,3.67c-1.79,1.21-4.02,2.24-6.51,2.91c-2.49,0.68-5.22,0.99-7.97,0.85\n               c-2.74-0.15-5.57-0.88-7.72-2.51c2.33,1.33,5.08,1.77,7.74,1.75c2.67-0.03,5.29-0.44,7.65-1.15c2.36-0.71,4.47-1.7,6.15-2.84\n               c1.7-1.12,2.96-2.37,3.86-3.44c1.13-1.35,1.88-2.5,2.47-3.36c0.58-0.87,0.98-1.48,1.29-1.89c0.6-0.82,0.78-0.84,0.92-0.76\n               c0.14,0.08,0.21,0.25-0.21,1.18c-0.21,0.46-0.54,1.12-1.09,2.05C407.39,547.12,406.65,548.32,405.45,549.74z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M404.12,541.49c1-1.71,2.44-3.75,4.56-5.64c1.05-0.94,2.29-1.84,3.67-2.61c1.35-0.76,2.75-1.42,3.8-2.43l3.96-3.79\n               l-2.61,4.79c-0.93,1.7-1.61,3.65-2.25,5.71c-0.65,2.05-1.28,4.23-2.26,6.33c-0.97,2.09-2.33,4.1-4.19,5.54\n               c-1.83,1.44-4.12,2.32-6.35,2.26c2.23-0.22,4.28-1.31,5.88-2.81c1.62-1.5,2.74-3.44,3.54-5.47c1.6-4.07,2.13-8.56,4.13-12.35\n               l1.35,1.01c-1.33,1.3-2.85,2-4.12,2.75c-1.27,0.72-2.38,1.53-3.35,2.4c-1.94,1.74-3.29,3.62-4.22,5.21\n               c-1.31,2.27-2,4.18-2.51,5.64c-0.5,1.47-0.79,2.51-1.02,3.23c-0.46,1.44-0.68,1.57-0.93,1.52c-0.23-0.04-0.45-0.24-0.29-1.78\n               c0.09-0.77,0.26-1.88,0.69-3.45C402.03,545.98,402.71,543.93,404.12,541.49z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M404.44,486.99c-0.92,0.63-2.24,1.81-3.23,3.53c-1,1.71-1.64,3.9-1.72,6.04c-0.2-2.13,0.34-4.46,1.34-6.25\n               c0.99-1.82,2.39-3.05,3.35-3.71c1.23-0.83,2-1.05,2.4-1.16c0.4-0.09,0.46-0.05,0.48,0.01c0.02,0.06-0.01,0.13-0.37,0.3\n               C406.33,485.94,405.62,486.2,404.44,486.99z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M406.22,487.65c0.84-0.03,1.92-0.01,3.04-0.32c1.12-0.3,2.26-1.07,3.2-2.15c1.94-2.17,2.81-5.47,3.64-8.48\n               c-0.23,1.55-0.5,3.15-0.98,4.7c-0.47,1.54-1.19,3.02-2.17,4.2c-0.97,1.18-2.23,2.06-3.5,2.4c-1.26,0.35-2.37,0.31-3.21,0.34\n               c-2.13,0-3.14,0.29-3.67,0.5c-0.53,0.2-0.62,0.19-0.68,0.11c-0.05-0.07-0.06-0.2,0.47-0.55c0.27-0.17,0.69-0.36,1.32-0.51\n               C404.31,487.74,405.15,487.67,406.22,487.65z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M403.08,484.44c0.62-1.47,2.07-3.78,4.72-5.06c1.31-0.65,2.82-0.91,4.29-1.16c0.74-0.13,1.48-0.26,2.2-0.45\n               c0.69-0.21,1.53-0.36,1.82-1.09c-0.08,0.37-0.38,0.66-0.71,0.86c-0.33,0.19-0.69,0.33-1.04,0.47c-0.71,0.27-1.46,0.45-2.19,0.63\n               c-1.46,0.34-2.91,0.66-4.1,1.29c-2.44,1.25-3.8,3.37-4.4,4.78c-1.54,3.68-1.29,3.91-1.55,3.91c-0.08,0-0.19-0.07-0.16-0.66\n               C402.02,487.36,402.28,486.32,403.08,484.44z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M417.73,507.54c0.94,0.39,2.42,1.02,3.8,2.22c1.36,1.17,2.52,3.07,2.47,5c-0.19-1.9-1.39-3.6-2.72-4.7\n               c-1.34-1.12-2.78-1.75-3.7-2.13c-2.37-0.9-2.51-0.98-2.47-1.11C415.14,506.73,415.33,506.62,417.73,507.54z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M408.44,500.91c0.65,0.24,1.5,0.47,2.52,0.58c1.01,0.12,2.24,0.19,3.47,0.58c1.2,0.39,2.57,0.88,3.45,2.05\n               c0.86,1.19,0.83,2.69,0.69,3.98c-0.02-1.31-0.15-2.75-0.99-3.75c-0.83-0.98-2.14-1.41-3.3-1.75c-1.18-0.34-2.33-0.4-3.39-0.52\n               c-1.05-0.11-1.97-0.36-2.66-0.62c-1.73-0.68-2.48-1.37-2.85-1.71c-0.37-0.37-0.35-0.46-0.3-0.52c0.06-0.06,0.14-0.07,0.56,0.2\n               C406.07,499.68,406.81,500.27,408.44,500.91z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M406.29,503.65c0.16,0.82,0.39,1.86,0.96,2.89c0.57,1.02,1.57,1.98,2.88,2.56c1.3,0.58,2.89,0.73,4.42,0.39\n               c1.51-0.31,3.02-1.27,4.65-1.13c-1.62,0.07-2.94,1.12-4.54,1.56c-1.59,0.46-3.33,0.37-4.78-0.23c-1.45-0.59-2.6-1.66-3.24-2.81\n               c-0.65-1.15-0.88-2.26-1.04-3.11c-0.58-4.29-0.6-4.47-0.4-4.55C405.38,499.16,405.72,499.43,406.29,503.65z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M402.72,569.64c0.22,0.61,0.3,1.4,0.12,2.2c-0.18,0.8-0.6,1.59-1.14,2.3c-1.12,1.42-2.61,2.67-4.32,3.88\n               c-0.86,0.59-1.79,1.14-2.75,1.64c-0.95,0.5-1.88,1-2.59,1.77c-1.47,1.55-2.14,3.76-2.77,5.82c0.37-2.11,0.82-4.41,2.31-6.22\n               c0.74-0.91,1.75-1.52,2.67-2.05c0.93-0.53,1.8-1.08,2.62-1.68c1.61-1.19,3.08-2.46,4.07-3.73c0.49-0.64,0.83-1.3,0.97-1.93\n               c0.14-0.63,0.08-1.21-0.09-1.69c-0.44-1.24-1.29-1.96-1.92-2.46c-0.65-0.5-1.16-0.8-1.49-1.04c-0.68-0.46-0.71-0.6-0.65-0.72\n               c0.06-0.11,0.19-0.19,0.97,0.13c0.38,0.17,0.94,0.41,1.69,0.92C401.13,567.29,402.16,568.08,402.72,569.64z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M391.98,562.74c1.04,0.12,2.36-0.12,3.9-0.58c0.78-0.22,1.61-0.48,2.54-0.64c0.92-0.16,1.95-0.21,2.98,0.07\n               c2.03,0.55,3.8,2.4,4.05,4.64c0.25,2.23-1.07,4.45-2.96,5.31c1.75-1.1,2.72-3.28,2.38-5.22c-0.34-1.95-1.97-3.49-3.69-3.91\n               c-1.75-0.43-3.51,0.19-5.05,0.62c-1.55,0.47-3.05,0.74-4.23,0.6c-1.48-0.14-2.53-0.62-3.28-1.04c-0.74-0.44-1.18-0.84-1.47-1.13\n               c-0.55-0.6-0.5-0.76-0.42-0.84c0.1-0.09,0.22-0.09,0.83,0.35c0.32,0.21,0.76,0.52,1.45,0.88\n               C389.72,562.21,390.67,562.62,391.98,562.74z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M387.92,565.87c0.21,0.96,0.45,2.21,1.1,3.42c0.64,1.19,1.86,2.36,3.5,2.37c0.81,0.02,1.66-0.18,2.5-0.48\n               c0.84-0.3,1.66-0.75,2.58-1.08c0.9-0.32,1.98-0.53,2.91-0.11c0.46,0.2,0.86,0.5,1.15,0.9c0.29,0.39,0.41,0.9,0.3,1.36\n               c0.1-0.97-0.73-1.71-1.56-1.97c-0.86-0.29-1.78-0.04-2.61,0.31c-0.84,0.36-1.64,0.86-2.53,1.22c-0.87,0.36-1.81,0.62-2.76,0.62\n               c-0.95,0.01-1.9-0.33-2.6-0.86c-0.71-0.53-1.24-1.2-1.61-1.88c-0.74-1.37-0.97-2.68-1.18-3.65c-0.49-2.5-0.54-3.86-0.53-4.57\n               c0.02-0.71,0.12-0.8,0.23-0.8c0.11-0.01,0.22,0.06,0.35,0.75C387.31,562.1,387.44,563.42,387.92,565.87z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M318.05,574.02c3.43-2.53,9.17-6.04,16.45-7.98c3.62-0.98,7.59-1.59,11.6-1.64c4.01-0.07,8.04,0.29,11.92,0.72\n               c-3.91,0.07-7.94,0.07-11.87,0.39c-3.93,0.29-7.73,1.04-11.22,2.07c-7,2.05-12.56,5.37-15.88,7.82\n               c-4.19,3.11-6.09,5.15-7.22,6.1c-1.1,0.98-1.37,0.96-1.55,0.81c-0.18-0.16-0.24-0.41,0.66-1.63\n               C311.88,579.49,313.72,577.24,318.05,574.02z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M314.1,585.16c1.63-0.69,3.8-1.04,6.15-1.44c2.32-0.42,4.98-1.08,7.15-2.76c1.08-0.83,1.94-1.96,2.58-3.28\n               c0.65-1.32,1.12-2.79,1.63-4.28c0.5-1.49,1.08-3.01,1.94-4.37c0.85-1.35,2.03-2.54,3.48-3.13c-1.35,0.77-2.33,2.02-3.03,3.38\n               c-0.7,1.38-1.15,2.86-1.55,4.37c-0.41,1.51-0.8,3.04-1.45,4.5c-0.63,1.45-1.58,2.82-2.8,3.8c-2.44,1.97-5.31,2.67-7.71,3.12\n               c-2.41,0.41-4.44,0.74-5.89,1.35c-1.83,0.73-2.91,1.79-3.62,2.68c-0.7,0.9-1.05,1.62-1.3,2.12c-0.45,1.01-0.59,1.13-0.79,1.09\n               c-0.16-0.03-0.38-0.19-0.12-1.41c0.15-0.6,0.45-1.47,1.2-2.55C310.72,587.29,312.02,585.98,314.1,585.16z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M305.85,582.72c0.09-1.87,0.41-4.29,1.53-6.82c0.57-1.26,1.27-2.55,2.26-3.77c0.5-0.61,1.13-1.19,1.82-1.65\n               c0.69-0.46,1.42-0.83,2.15-1.17c1.47-0.69,3.06-1.28,4.76-1.63c1.68-0.37,3.5-0.39,5.21-0.21c1.71,0.17,3.38,0.35,5.07,0.2\n               c1.68-0.13,3.35-0.5,4.93-1.08c-1.49,0.78-3.14,1.34-4.86,1.63c-1.72,0.32-3.51,0.26-5.19,0.2c-3.38-0.23-6.53,0.73-9.31,2.13\n               c-1.41,0.69-2.61,1.43-3.44,2.51c-0.86,1.07-1.52,2.28-2.03,3.43c-1.03,2.32-1.34,4.55-1.42,6.28c-0.05,2.19,0.24,3.86,0.53,5.1\n               c0.29,1.25,0.61,2.09,0.79,2.68c0.42,1.17,0.35,1.38,0.17,1.48c-0.17,0.1-0.41,0.08-1.12-1.04c-0.32-0.57-0.77-1.43-1.16-2.77\n               C306.15,586.91,305.8,585.1,305.85,582.72z\"/>\n       </g>\n   </g>\n</g>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_4\">\n<path class=\"st4\" d=\"M301.4,501.91c0.02,4.95,0.06,9.92,0.11,14.92c0.05,4.46,0.11,8.9,0.18,13.31c1.22,1.04,6.3,5.14,13.88,4.97\n   c6.94-0.15,11.57-3.77,12.88-4.88c-0.11-9.44-0.22-18.88-0.33-28.33c-0.9-0.98-5.24-5.47-12.32-5.87\n   C307.47,495.56,302.13,501.13,301.4,501.91z\"/>\n<path class=\"st4\" d=\"M274.36,501.82c0.02,4.95,0.06,9.92,0.11,14.92c0.05,4.46,0.11,8.9,0.18,13.31c1.22,1.04,6.3,5.14,13.88,4.97\n   c6.94-0.15,11.57-3.77,12.88-4.88c-0.11-9.44-0.22-18.88-0.33-28.33c-0.9-0.98-5.24-5.47-12.32-5.87\n   C280.43,495.47,275.09,501.03,274.36,501.82z\"/>\n<path class=\"st4\" d=\"M258.24,502.24c0.01,4.8,0.03,9.63,0.07,14.49c0.03,4.33,0.06,8.64,0.11,12.93c0.74,1.01,3.81,4.99,8.39,4.83\n   c4.19-0.14,6.99-3.66,7.79-4.74c-0.07-9.17-0.13-18.34-0.2-27.51c-0.55-0.95-3.17-5.31-7.44-5.7\n   C261.92,496.08,258.68,501.48,258.24,502.24z\"/>\n<path class=\"st4\" d=\"M243.42,501.33c0.01,3.9,0.03,7.82,0.06,11.75c0.03,3.51,0.06,7.01,0.1,10.49c0.67,0.82,3.49,4.05,7.68,3.92\n   c3.84-0.12,6.4-2.97,7.13-3.84c-0.06-7.44-0.12-14.88-0.18-22.32c-0.5-0.77-2.9-4.31-6.82-4.63\n   C246.78,496.33,243.82,500.71,243.42,501.33z\"/>\n<path class=\"st4\" d=\"M230.96,497.79c0.01,3.45,0.03,6.92,0.05,10.41c0.02,3.11,0.05,6.21,0.08,9.29c0.56,0.72,2.9,3.58,6.39,3.47\n   c3.2-0.1,5.33-2.63,5.93-3.4c-0.05-6.59-0.1-13.17-0.15-19.76c-0.42-0.68-2.41-3.82-5.67-4.1\n   C233.76,493.36,231.29,497.24,230.96,497.79z\"/>\n<path class=\"st4\" d=\"M222.03,493.59c0.01,3.34,0.02,6.7,0.04,10.08c0.02,3.01,0.03,6.01,0.06,9c0.4,0.7,2.08,3.47,4.58,3.36\n   c2.29-0.1,3.82-2.55,4.26-3.3c-0.04-6.38-0.07-12.76-0.11-19.14c-0.3-0.66-1.73-3.7-4.07-3.97\n   C224.03,489.3,222.27,493.06,222.03,493.59z\"/>\n<path class=\"st4\" d=\"M215.27,490.88c0.01,3.45,0.01,6.92,0.03,10.41c0.01,3.11,0.03,6.21,0.04,9.29c0.31,0.72,1.58,3.58,3.49,3.47\n   c1.75-0.1,2.91-2.63,3.24-3.4c-0.03-6.59-0.06-13.17-0.08-19.76c-0.23-0.68-1.32-3.82-3.1-4.1\n   C216.8,486.45,215.46,490.33,215.27,490.88z\"/>\n<path class=\"st4\" d=\"M344.79,502.03c-0.01,4.8-0.03,9.63-0.07,14.49c-0.03,4.33-0.06,8.64-0.11,12.93\n   c-0.74,1.01-3.81,4.99-8.39,4.83c-4.19-0.14-6.99-3.66-7.79-4.74c0.07-9.17,0.13-18.34,0.2-27.51c0.55-0.95,3.17-5.31,7.44-5.7\n   C341.12,495.87,344.35,501.27,344.79,502.03z\"/>\n<path class=\"st4\" d=\"M359.62,501.67c-0.01,3.9-0.03,7.82-0.06,11.75c-0.03,3.51-0.06,7.01-0.1,10.49\n   c-0.67,0.82-3.49,4.05-7.68,3.92c-3.84-0.12-6.4-2.97-7.13-3.84c0.06-7.44,0.12-14.88,0.18-22.32c0.5-0.77,2.9-4.31,6.82-4.63\n   C356.25,496.66,359.21,501.05,359.62,501.67z\"/>\n<path class=\"st4\" d=\"M372.07,498.12c-0.01,3.45-0.03,6.92-0.05,10.41c-0.02,3.11-0.05,6.21-0.08,9.29\n   c-0.56,0.72-2.9,3.58-6.39,3.47c-3.2-0.1-5.33-2.63-5.93-3.4c0.05-6.59,0.1-13.17,0.15-19.76c0.42-0.68,2.41-3.82,5.67-4.1\n   C369.28,493.69,371.74,497.57,372.07,498.12z\"/>\n<path class=\"st4\" d=\"M381.01,493.92c-0.01,3.34-0.02,6.7-0.04,10.08c-0.02,3.01-0.03,6.01-0.06,9c-0.4,0.7-2.08,3.47-4.58,3.36\n   c-2.29-0.1-3.82-2.55-4.26-3.3c0.04-6.38,0.07-12.76,0.11-19.14c0.3-0.66,1.73-3.7,4.07-3.97\n   C379,489.63,380.77,493.39,381.01,493.92z\"/>\n<path class=\"st4\" d=\"M387.76,491.21c-0.01,3.45-0.01,6.92-0.03,10.41c-0.01,3.11-0.03,6.21-0.04,9.29\n   c-0.31,0.72-1.58,3.58-3.49,3.47c-1.75-0.1-2.91-2.63-3.24-3.4c0.03-6.59,0.06-13.17,0.08-19.76c0.23-0.68,1.32-3.82,3.1-4.1\n   C386.23,486.79,387.58,490.67,387.76,491.21z\"/>\n<path class=\"st4\" d=\"M274.32,530.97c0.03,8.79,0.07,17.58,0.1,26.38c0.54,0.25,3.25,1.44,6.44,0.32c3.33-1.17,4.69-3.98,4.93-4.49\n   c0.02-5.94,0.04-11.87,0.06-17.81c-1.98-0.41-4.31-1.06-6.82-2.08C277.24,532.55,275.67,531.75,274.32,530.97z\"/>\n<path class=\"st4\" d=\"M327.9,530.57c0.25,8.95,0.5,17.9,0.76,26.86c-0.54,0.25-3.25,1.44-6.44,0.32c-3.33-1.17-4.69-3.98-4.93-4.49\n   c-0.02-5.94-0.04-11.87-0.06-17.81c1.62-0.16,4.13-0.63,6.82-2.08C325.71,532.46,326.98,531.44,327.9,530.57z\"/>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_15\">\n<path class=\"st0\" d=\"M306.78,507.35c0.01,2.98,0.03,5.97,0.07,8.97c0.03,2.68,0.06,5.35,0.11,8.01c0.73,0.62,3.79,3.09,8.35,2.99\n   c4.17-0.09,6.96-2.27,7.75-2.94c-0.07-5.68-0.13-11.36-0.2-17.04c-0.54-0.59-3.15-3.29-7.41-3.53\n   C310.44,503.53,307.22,506.88,306.78,507.35z\"/>\n<path class=\"st0\" d=\"M279.74,507.35c0.01,2.98,0.03,5.97,0.07,8.97c0.03,2.68,0.06,5.35,0.11,8.01c0.73,0.62,3.79,3.09,8.35,2.99\n   c4.17-0.09,6.96-2.27,7.75-2.94c-0.07-5.68-0.13-11.36-0.2-17.04c-0.54-0.59-3.15-3.29-7.41-3.53\n   C283.4,503.53,280.18,506.88,279.74,507.35z\"/>\n<path class=\"st0\" d=\"M260.94,506.5c0.01,3.19,0.02,6.39,0.04,9.61c0.02,2.87,0.04,5.73,0.07,8.58c0.49,0.67,2.52,3.31,5.56,3.2\n   c2.78-0.1,4.64-2.43,5.16-3.14c-0.04-6.08-0.09-12.16-0.13-18.24c-0.36-0.63-2.1-3.52-4.94-3.78\n   C263.38,502.41,261.24,505.99,260.94,506.5z\"/>\n<path class=\"st0\" d=\"M331.2,506.5c0.01,3.19,0.02,6.39,0.04,9.61c0.02,2.87,0.04,5.73,0.07,8.58c0.49,0.67,2.52,3.31,5.56,3.2\n   c2.78-0.1,4.64-2.43,5.16-3.14c-0.04-6.08-0.09-12.16-0.13-18.24c-0.36-0.63-2.1-3.52-4.94-3.78\n   C333.63,502.41,331.49,505.99,331.2,506.5z\"/>\n<path class=\"st0\" d=\"M356.57,504.77c-0.01,2.27-0.02,4.56-0.04,6.86c-0.01,2.05-0.03,4.09-0.06,6.12\n   c-0.39,0.48-2.03,2.36-4.48,2.29c-2.24-0.07-3.74-1.73-4.16-2.24c0.04-4.34,0.07-8.68,0.11-13.03c0.29-0.45,1.69-2.51,3.98-2.7\n   C354.61,501.86,356.33,504.41,356.57,504.77z\"/>\n<path class=\"st0\" d=\"M255.2,504.07c-0.01,2.27-0.02,4.56-0.04,6.86c-0.01,2.05-0.03,4.09-0.06,6.12c-0.39,0.48-2.03,2.36-4.48,2.29\n   c-2.24-0.07-3.74-1.73-4.16-2.24c0.04-4.34,0.07-8.68,0.11-13.03c0.29-0.45,1.69-2.51,3.98-2.7\n   C253.23,501.15,254.96,503.71,255.2,504.07z\"/>\n<path class=\"st0\" d=\"M369.35,500.94c-0.01,2.43-0.01,4.87-0.03,7.32c-0.01,2.19-0.03,4.37-0.05,6.54\n   c-0.31,0.51-1.62,2.52-3.58,2.44c-1.79-0.07-2.98-1.85-3.32-2.4c0.03-4.64,0.06-9.27,0.09-13.91c0.23-0.48,1.35-2.69,3.18-2.88\n   C367.78,497.83,369.16,500.56,369.35,500.94z\"/>\n<path class=\"st0\" d=\"M240.61,501.08c-0.01,2.43-0.01,4.87-0.03,7.32c-0.01,2.19-0.03,4.37-0.05,6.54\n   c-0.31,0.51-1.62,2.52-3.58,2.44c-1.79-0.07-2.98-1.85-3.32-2.4c0.03-4.64,0.06-9.27,0.09-13.91c0.23-0.48,1.35-2.69,3.18-2.88\n   C239.04,497.96,240.42,500.69,240.61,501.08z\"/>\n<path class=\"st0\" d=\"M227.97,496.82c0,2.21-0.01,4.43-0.01,6.66c-0.01,1.99-0.01,3.97-0.02,5.94c-0.14,0.46-0.72,2.29-1.58,2.22\n   c-0.79-0.07-1.32-1.68-1.47-2.18c0.01-4.22,0.03-8.43,0.04-12.65c0.1-0.44,0.6-2.44,1.4-2.62\n   C227.27,493.98,227.88,496.47,227.97,496.82z\"/>\n<path class=\"st0\" d=\"M219.94,494.7c0,2.21-0.01,4.43-0.01,6.66c0,1.99-0.01,3.97-0.02,5.94c-0.11,0.46-0.59,2.29-1.3,2.22\n   c-0.65-0.07-1.08-1.68-1.2-2.18c0.01-4.22,0.02-8.43,0.03-12.65c0.08-0.44,0.49-2.44,1.15-2.62\n   C219.37,491.87,219.87,494.35,219.94,494.7z\"/>\n<path class=\"st0\" d=\"M385.73,494.21c0,2.21-0.01,4.43-0.01,6.66c0,1.99-0.01,3.97-0.02,5.94c-0.11,0.46-0.59,2.29-1.3,2.22\n   c-0.65-0.07-1.08-1.68-1.2-2.18c0.01-4.22,0.02-8.43,0.03-12.65c0.08-0.44,0.49-2.44,1.15-2.62\n   C385.16,491.38,385.66,493.86,385.73,494.21z\"/>\n<path class=\"st0\" d=\"M378.06,496.65c0,2.21-0.01,4.43-0.01,6.66c-0.01,1.99-0.01,3.97-0.02,5.94c-0.14,0.46-0.72,2.29-1.58,2.22\n   c-0.79-0.07-1.32-1.68-1.47-2.18c0.01-4.22,0.03-8.43,0.04-12.65c0.1-0.44,0.6-2.44,1.4-2.62\n   C377.36,493.82,377.97,496.3,378.06,496.65z\"/>\n<path class=\"st0\" d=\"M289.55,540.39c0.01,2.19,0.02,4.39,0.03,6.6c0.01,1.97,0.03,3.94,0.05,5.89c0.37,0.46,1.93,2.27,4.25,2.2\n   c2.13-0.07,3.54-1.67,3.95-2.16c-0.03-4.18-0.07-8.35-0.1-12.53c-0.28-0.43-1.61-2.42-3.77-2.6\n   C291.41,537.58,289.77,540.04,289.55,540.39z\"/>\n<path class=\"st0\" d=\"M277.3,540.73c0,1.83,0.01,3.67,0.02,5.52c0.01,1.65,0.02,3.29,0.04,4.92c0.25,0.38,1.29,1.9,2.84,1.84\n   c1.42-0.05,2.37-1.39,2.64-1.8c-0.02-3.49-0.05-6.98-0.07-10.48c-0.19-0.36-1.07-2.02-2.52-2.17\n   C278.55,538.39,277.45,540.44,277.3,540.73z\"/>\n<path class=\"st0\" d=\"M261.84,540.37c0.01,2.17,0.02,4.36,0.04,6.55c0.02,1.96,0.04,3.91,0.06,5.85c0.41,0.46,2.13,2.26,4.7,2.18\n   c2.35-0.07,3.92-1.66,4.36-2.14c-0.04-4.15-0.07-8.29-0.11-12.44c-0.31-0.43-1.77-2.4-4.17-2.58\n   C263.9,537.58,262.09,540.02,261.84,540.37z\"/>\n<path class=\"st0\" d=\"M255.15,533.96c-0.01,1.85-0.02,3.71-0.03,5.57c-0.01,1.67-0.03,3.32-0.05,4.97\n   c-0.38,0.39-1.94,1.92-4.29,1.86c-2.14-0.06-3.57-1.41-3.98-1.82c0.03-3.53,0.07-7.06,0.1-10.58c0.28-0.37,1.62-2.04,3.8-2.19\n   C253.28,531.59,254.93,533.66,255.15,533.96z\"/>\n<path class=\"st0\" d=\"M240.46,525.81c-0.01,1.97-0.01,3.96-0.03,5.95c-0.01,1.78-0.03,3.55-0.04,5.31c-0.3,0.41-1.55,2.05-3.42,1.98\n   c-1.71-0.06-2.85-1.5-3.18-1.95c0.03-3.77,0.05-7.53,0.08-11.3c0.22-0.39,1.29-2.18,3.04-2.34\n   C238.96,523.28,240.28,525.5,240.46,525.81z\"/>\n<path class=\"st0\" d=\"M227.9,522.64c0,1.79-0.01,3.6-0.01,5.41c-0.01,1.62-0.01,3.23-0.02,4.83c-0.13,0.38-0.69,1.86-1.51,1.8\n   c-0.76-0.05-1.26-1.37-1.4-1.77c0.01-3.43,0.02-6.85,0.04-10.28c0.1-0.36,0.57-1.98,1.34-2.13\n   C227.24,520.34,227.82,522.35,227.9,522.64z\"/>\n<path class=\"st0\" d=\"M219.88,520.09c0,1.79-0.01,3.6-0.01,5.41c0,1.62-0.01,3.23-0.02,4.83c-0.11,0.38-0.56,1.86-1.24,1.8\n   c-0.62-0.05-1.03-1.37-1.15-1.77c0.01-3.43,0.02-6.85,0.03-10.28c0.08-0.36,0.47-1.98,1.1-2.13\n   C219.34,517.79,219.82,519.81,219.88,520.09z\"/>\n<path class=\"st0\" d=\"M313.41,540.38c-0.01,2.19-0.02,4.39-0.03,6.6c-0.01,1.97-0.03,3.94-0.05,5.89c-0.37,0.46-1.93,2.27-4.25,2.2\n   c-2.13-0.07-3.54-1.67-3.95-2.16c0.03-4.18,0.07-8.35,0.1-12.53c0.28-0.43,1.61-2.42,3.77-2.6\n   C311.55,537.57,313.19,540.03,313.41,540.38z\"/>\n<path class=\"st0\" d=\"M325.66,540.72c0,1.83-0.01,3.67-0.02,5.52c-0.01,1.65-0.02,3.29-0.04,4.92c-0.25,0.38-1.29,1.9-2.84,1.84\n   c-1.42-0.05-2.37-1.39-2.64-1.8c0.02-3.49,0.05-6.98,0.07-10.48c0.19-0.36,1.07-2.02,2.52-2.17\n   C324.41,538.37,325.51,540.43,325.66,540.72z\"/>\n<path class=\"st0\" d=\"M341.12,540.36c-0.01,2.17-0.02,4.36-0.04,6.55c-0.02,1.96-0.04,3.91-0.06,5.85c-0.41,0.46-2.13,2.26-4.7,2.18\n   c-2.35-0.06-3.92-1.66-4.36-2.14c0.04-4.15,0.07-8.29,0.11-12.44c0.31-0.43,1.77-2.4,4.17-2.58\n   C339.06,537.57,340.87,540.01,341.12,540.36z\"/>\n<path class=\"st0\" d=\"M347.81,533.95c0.01,1.85,0.02,3.71,0.03,5.57c0.01,1.67,0.03,3.32,0.05,4.97c0.38,0.39,1.94,1.92,4.29,1.86\n   c2.14-0.06,3.57-1.41,3.98-1.82c-0.03-3.53-0.07-7.06-0.1-10.58c-0.28-0.37-1.62-2.04-3.8-2.19\n   C349.68,531.57,348.03,533.65,347.81,533.95z\"/>\n<path class=\"st0\" d=\"M362.5,525.8c0.01,1.97,0.01,3.96,0.03,5.95c0.01,1.78,0.03,3.55,0.04,5.31c0.3,0.41,1.55,2.05,3.42,1.98\n   c1.71-0.06,2.85-1.5,3.18-1.95c-0.03-3.77-0.05-7.53-0.08-11.3c-0.22-0.39-1.29-2.18-3.04-2.34\n   C364,523.27,362.68,525.49,362.5,525.8z\"/>\n<path class=\"st0\" d=\"M375.06,522.63c0,1.79,0.01,3.6,0.01,5.41c0.01,1.62,0.01,3.23,0.02,4.83c0.13,0.38,0.69,1.86,1.51,1.8\n   c0.76-0.05,1.26-1.37,1.4-1.77c-0.01-3.43-0.02-6.85-0.04-10.28c-0.1-0.36-0.57-1.98-1.34-2.13\n   C375.72,520.32,375.14,522.34,375.06,522.63z\"/>\n<path class=\"st0\" d=\"M383.08,520.09c0,1.79,0.01,3.6,0.01,5.41c0,1.62,0.01,3.23,0.02,4.83c0.11,0.38,0.56,1.86,1.24,1.8\n   c0.62-0.05,1.03-1.37,1.15-1.77c-0.01-3.43-0.02-6.85-0.03-10.28c-0.08-0.36-0.47-1.98-1.1-2.13\n   C383.62,517.79,383.14,519.81,383.08,520.09z\"/>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_5\">\n<path class=\"st4\" d=\"M316.9,534.99c0.11,6.08,0.22,12.17,0.33,18.25c-0.15,0.25-2.76,4.41-7.77,4.49c-5.2,0.08-7.94-4.3-8.05-4.49\n   c0.13-7.58,0.25-15.17,0.38-22.75c1.84,1.33,4.97,3.21,9.25,4.07C313.29,535.01,315.3,535.07,316.9,534.99z\"/>\n<path class=\"st4\" d=\"M286.11,534.99c-0.11,6.08-0.22,12.17-0.33,18.25c0.15,0.25,2.76,4.41,7.77,4.49c5.2,0.08,7.94-4.3,8.05-4.49\n   c-0.13-7.58-0.25-15.17-0.38-22.75c-1.84,1.33-4.97,3.21-9.25,4.07C289.72,535.01,287.71,535.07,286.11,534.99z\"/>\n<path class=\"st4\" d=\"M274.32,530.11c-0.03,7.88-0.05,15.75-0.08,23.63c-0.15,0.25-2.76,4.41-7.77,4.49\n   c-5.2,0.08-7.94-4.3-8.05-4.49c0-7.9-0.01-15.8-0.01-23.69c0.25,0.39,2.76,4.11,7.46,4.37\n   C271.16,534.69,274.18,530.31,274.32,530.11z\"/>\n<path class=\"st4\" d=\"M243.57,523.58c0,7.69,0,15.39,0,23.08c1.12,2.85,3.71,4.84,6.69,5.14c3.29,0.34,6.52-1.45,8.05-4.49\n   c0.02-7.89,0.05-15.77,0.07-23.66c-0.17,0.24-3.11,4.16-8.02,3.82C246.18,527.18,243.87,524.01,243.57,523.58z\"/>\n<path class=\"st4\" d=\"M328.53,530.09c0.03,7.88,0.05,15.75,0.08,23.63c0.15,0.25,2.76,4.41,7.77,4.49c5.2,0.08,7.94-4.3,8.05-4.49\n   c0-7.9,0.01-15.8,0.01-23.69c-0.25,0.39-2.76,4.11-7.46,4.37C331.69,534.67,328.67,530.29,328.53,530.09z\"/>\n<path class=\"st4\" d=\"M359.46,523.83c0,7.69,0,15.39,0,23.08c-1.12,2.85-3.71,4.84-6.69,5.14c-3.29,0.34-6.52-1.45-8.05-4.49\n   c-0.02-7.89-0.05-15.77-0.07-23.66c0.17,0.24,3.11,4.16,8.02,3.82C356.86,527.43,359.16,524.26,359.46,523.83z\"/>\n<path class=\"st4\" d=\"M371.98,517.66c0.04,8.04,0.08,16.09,0.12,24.13c-0.92,2.5-3.19,4.24-5.75,4.39\n   c-2.93,0.18-5.71-1.73-6.66-4.67c-0.02-7.89-0.05-15.77-0.07-23.66c1.37,2.21,3.83,3.52,6.41,3.42\n   C369.9,521.13,371.85,517.87,371.98,517.66z\"/>\n<path class=\"st4\" d=\"M380.92,513c0.03,8.04,0.06,16.09,0.09,24.13c-0.65,2.5-2.28,4.24-4.1,4.39c-2.09,0.18-4.07-1.73-4.75-4.67\n   c-0.02-7.89-0.03-15.77-0.05-23.66c0.98,2.21,2.73,3.52,4.57,3.42C379.44,516.47,380.83,513.22,380.92,513z\"/>\n<path class=\"st4\" d=\"M387.69,510.91c0.02,6.66,0.04,13.33,0.07,19.99c-0.5,2.07-1.73,3.51-3.11,3.64c-1.58,0.15-3.09-1.43-3.6-3.87\n   c-0.01-6.53-0.03-13.07-0.04-19.6c0.74,1.83,2.07,2.92,3.47,2.83C386.57,513.78,387.63,511.08,387.69,510.91z\"/>\n<path class=\"st4\" d=\"M231,516.99c-0.04,8.04-0.08,16.09-0.12,24.13c0.92,2.5,3.19,4.24,5.75,4.39c2.93,0.18,5.71-1.73,6.66-4.67\n   c0.02-7.89,0.05-15.77,0.07-23.66c-1.37,2.21-3.83,3.52-6.41,3.42C233.08,520.45,231.13,517.2,231,516.99z\"/>\n<path class=\"st4\" d=\"M222.06,512.33c-0.03,8.04-0.06,16.09-0.09,24.13c0.65,2.5,2.28,4.24,4.1,4.39c2.09,0.18,4.07-1.73,4.75-4.67\n   c0.02-7.89,0.03-15.77,0.05-23.66c-0.98,2.21-2.73,3.52-4.57,3.42C223.54,515.79,222.15,512.54,222.06,512.33z\"/>\n<path class=\"st4\" d=\"M215.39,511.04c-0.02,6.66-0.04,13.33-0.07,19.99c0.5,2.07,1.73,3.51,3.11,3.64c1.58,0.15,3.09-1.43,3.6-3.87\n   c0.01-6.53,0.03-13.07,0.04-19.6c-0.74,1.83-2.07,2.92-3.47,2.83C216.51,513.91,215.45,511.22,215.39,511.04z\"/>\n<circle class=\"st3\" cx=\"298.73\" cy=\"216.56\" r=\"14.07\"/>\n<circle class=\"st3\" cx=\"298.67\" cy=\"216.71\" r=\"11.31\"/>\n<circle class=\"st5\" cx=\"298.83\" cy=\"216.56\" r=\"5.36\"/>\n<circle class=\"st5\" cx=\"300.63\" cy=\"267.54\" r=\"5.36\"/>\n<circle class=\"st5\" cx=\"297.18\" cy=\"164.96\" r=\"5.36\"/>\n<path class=\"st5\" d=\"M297.96,196.74c-0.54-2.65-1.16-6.73-1.03-11.76c0.09-3.38,0.53-7.46,0.94-7.46c0.42,0,0.77,4.27,0.86,7.31\n   C298.88,189.89,298.4,194.01,297.96,196.74z\"/>\n<path class=\"st5\" d=\"M295.23,196.88c-1.59-2.19-3.84-5.65-5.79-10.29c-1.31-3.12-2.6-7.02-2.22-7.19c0.39-0.17,2.46,3.58,3.8,6.31\n   C293.25,190.26,294.51,194.21,295.23,196.88z\"/>\n<path class=\"st5\" d=\"M300.71,196.91c0.68-2.62,1.93-6.55,4.27-11c1.57-2.99,3.77-6.46,4.14-6.28c0.38,0.19-1.2,4.17-2.46,6.94\n   C304.57,191.18,302.31,194.66,300.71,196.91z\"/>\n<path class=\"st3\" d=\"M282.24,173.83c-0.04,0.23,0.77,0.31,1.52,1.05c0.8,0.8,0.87,1.72,1.12,1.68c0.23-0.04,0.07-0.87,0.51-1.98\n   c0.39-1,0.95-1.41,0.8-1.6c-0.15-0.2-0.75,0.22-2,0.49C283,173.72,282.28,173.61,282.24,173.83z\"/>\n<path class=\"st3\" d=\"M308.15,172.35c-0.15,0.17,0.5,0.67,0.74,1.69c0.26,1.1-0.17,1.92,0.06,2.02c0.22,0.09,0.52-0.7,1.48-1.41\n   c0.86-0.64,1.55-0.7,1.53-0.94c-0.02-0.25-0.75-0.21-1.95-0.64C308.85,172.66,308.3,172.19,308.15,172.35z\"/>\n<g>\n   <g>\n       <path d=\"M297.37,163.52c-0.59-0.26-0.79-0.95-1.04-1.5c-0.29-0.62-0.58-1.25-0.85-1.88c-0.24-0.54-0.34-0.79-0.56-1.33\n           c-0.34-0.87-0.72-1.75-0.94-2.66c-0.02-0.09-0.03-0.19-0.06-0.29c-0.03-0.13,0.01,0.29,0.01,0.03c-0.01-0.59-0.05-1.12,0.12-1.7\n           c0.3-1.03,1.1-1.75,2.06-2.17c-0.25,0.11,0.25-0.08,0.32-0.1c0.23-0.07,0.46-0.12,0.69-0.14c0.53-0.05,1.09,0.03,1.58,0.24\n           c0.55,0.23,1.03,0.64,1.33,1.15c0.14,0.24,0.24,0.48,0.32,0.74c0.03,0.1,0.05,0.2,0.07,0.31c0.01,0.07,0.02,0.13,0.03,0.2\n           c-0.02-0.14-0.02-0.15-0.01-0.05c0.09,1.21-0.31,2.51-0.64,3.66c-0.31,1.1-0.84,2.12-1.17,3.21c-0.2,0.65-0.4,1.3-0.74,1.89\n           c-0.06,0.1-0.11,0.19-0.18,0.28c0.08-0.11-0.17,0.05-0.01,0c0.24-0.07-0.14,0.03-0.07,0.02c-0.2,0.01-0.31,0.03-0.51-0.03\n           c-1.23-0.38-1.76,1.55-0.53,1.93c1.6,0.49,2.72-0.43,3.34-1.8c0.34-0.76,0.55-1.54,0.82-2.32c0.18-0.5,0.42-0.98,0.62-1.52\n           c0.53-1.42,0.89-2.98,1.06-4.49c0.15-1.38-0.33-2.79-1.24-3.82c-1.93-2.17-5.34-2.01-7.45-0.23c-2.06,1.73-2.14,4.42-1.3,6.75\n           c0.34,0.94,0.72,1.87,1.12,2.79c0.34,0.78,0.69,1.55,1.04,2.32c0.41,0.87,0.83,1.8,1.76,2.22c0.49,0.22,1.07,0.14,1.37-0.36\n           C297.97,164.47,297.86,163.74,297.37,163.52z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M296.18,164.91c-0.27,0.51-0.95,0.66-1.45,0.86c-0.61,0.24-1.22,0.47-1.83,0.69c-0.53,0.19-1.06,0.38-1.6,0.55\n           c-0.88,0.28-1.75,0.56-2.65,0.75c-0.07,0.01-0.14,0.02-0.2,0.03c0.3-0.05,0.17-0.02,0.11-0.02c-0.07,0-0.14,0.01-0.2,0.01\n           c-0.48,0.02-0.96-0.02-1.42-0.15c-2.01-0.57-2.99-3.02-2.12-4.78c1.24-2.53,4.03-1.51,6.1-0.79c1.04,0.36,1.97,0.93,2.99,1.32\n           c0.68,0.26,1.36,0.5,1.96,0.91c-0.01-0.01,0.15,0.1,0.13,0.08c0.12,0.1,0.19,0.3,0.11,0.09c0.09,0.24,0.07,0.43-0.03,0.69\n           c-0.45,1.21,1.48,1.73,1.93,0.53c0.61-1.64-0.4-2.78-1.76-3.47c-0.69-0.35-1.43-0.58-2.13-0.89c-0.51-0.23-0.99-0.51-1.51-0.74\n           c-2.61-1.12-5.92-2.28-8.37-0.22c-2.23,1.87-2.19,5.32-0.44,7.49c1.1,1.36,2.79,1.98,4.51,1.94c0.75-0.02,1.5-0.23,2.22-0.44\n           c0.89-0.26,1.77-0.55,2.64-0.87c0.81-0.29,1.61-0.6,2.42-0.91c0.92-0.36,1.84-0.72,2.33-1.65\n           C298.5,164.78,296.78,163.77,296.18,164.91z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M298.12,165.15c0.17-0.48,0.99-0.77,1.38-0.99c0.59-0.33,1.18-0.66,1.78-0.97c0.48-0.26,0.96-0.5,1.45-0.74\n           c1.37-0.67,2.8-1.5,4.39-1.13c1.99,0.46,3.16,2.76,2.42,4.64c-0.95,2.42-3.8,1.8-5.77,1.41c-1.12-0.22-2.18-0.68-3.29-0.92\n           c-0.68-0.15-1.39-0.3-2.01-0.61c-0.08-0.04-0.15-0.08-0.22-0.12c-0.23-0.13,0.08,0.1-0.08-0.07c-0.01-0.01-0.01-0.01-0.02-0.02\n           c0.13,0.18,0.13,0.17,0-0.03C298.13,165.42,298.09,165.31,298.12,165.15c0.28-1.25-1.64-1.79-1.93-0.53\n           c-0.19,0.82-0.07,1.72,0.5,2.37c0.39,0.44,0.95,0.67,1.49,0.88c0.76,0.29,1.55,0.43,2.34,0.64c0.56,0.15,1.09,0.37,1.64,0.53\n           c1.45,0.41,3.04,0.67,4.55,0.71c1.35,0.04,2.73-0.51,3.66-1.48c2.02-2.09,1.71-5.52-0.28-7.51c-1.28-1.28-3.01-1.68-4.77-1.45\n           c-0.79,0.11-1.5,0.42-2.23,0.75c-0.87,0.39-1.74,0.82-2.58,1.27c-0.78,0.41-1.55,0.84-2.32,1.27c-0.89,0.5-1.65,1.02-2,2.02\n           C295.76,165.83,297.7,166.35,298.12,165.15z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M297.36,166.06c0.58,0.26,0.78,0.96,1.03,1.51c0.29,0.63,0.57,1.25,0.84,1.89c0.19,0.43,0.37,0.87,0.55,1.34\n           c0.34,0.87,0.71,1.75,0.92,2.66c0.02,0.09,0.03,0.19,0.06,0.29c-0.08-0.34-0.01-0.14-0.01-0.03c0.02,0.59,0.04,1.13-0.14,1.7\n           c-0.19,0.64-0.59,1.2-1.11,1.61c-0.15,0.12-0.32,0.22-0.49,0.32c-0.07,0.04-0.59,0.27-0.29,0.15c-0.9,0.35-1.86,0.45-2.77,0.06\n           c-0.55-0.24-1.02-0.64-1.33-1.16c-0.14-0.24-0.24-0.48-0.31-0.75c-0.03-0.1-0.05-0.2-0.07-0.31c-0.01-0.07-0.02-0.13-0.03-0.2\n           c0.02,0.14,0.02,0.15,0.01,0.05c-0.07-1.21,0.33-2.5,0.66-3.66c0.32-1.1,0.85-2.11,1.19-3.21c0.2-0.65,0.41-1.29,0.75-1.88\n           c0.01-0.02,0.16-0.27,0.09-0.16c0.03-0.05,0.26-0.22,0.11-0.12c-0.17,0.11,0.07-0.02,0.08-0.02c0.2-0.01,0.31-0.03,0.51,0.04\n           c1.23,0.39,1.76-1.54,0.53-1.93c-1.6-0.5-2.72,0.42-3.34,1.79c-0.34,0.75-0.56,1.54-0.83,2.31c-0.18,0.51-0.44,1-0.63,1.52\n           c-0.54,1.42-0.91,2.98-1.08,4.48c-0.16,1.38,0.31,2.79,1.23,3.83c1.91,2.18,5.33,2.03,7.45,0.27c2.07-1.72,2.16-4.41,1.33-6.74\n           c-0.33-0.95-0.71-1.88-1.1-2.8c-0.33-0.78-0.68-1.55-1.03-2.33c-0.4-0.88-0.82-1.8-1.75-2.22c-0.49-0.22-1.08-0.14-1.37,0.36\n           C296.75,165.12,296.86,165.84,297.36,166.06z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M288.45,155.83c0.02-0.02,0.04-0.04,0.06-0.06c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39\n           c0.01-0.14-0.02-0.27-0.09-0.39c-0.04-0.12-0.11-0.23-0.21-0.32c-0.07-0.05-0.13-0.1-0.2-0.16c-0.16-0.09-0.32-0.14-0.5-0.14\n           c-0.09,0.01-0.18,0.02-0.27,0.04c-0.17,0.05-0.32,0.13-0.44,0.26c-0.02,0.02-0.04,0.04-0.06,0.06c-0.1,0.09-0.17,0.2-0.21,0.32\n           c-0.06,0.12-0.09,0.25-0.09,0.39c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32c0.07,0.05,0.13,0.1,0.2,0.16\n           c0.16,0.09,0.32,0.14,0.5,0.14c0.09-0.01,0.18-0.02,0.27-0.04C288.18,156.04,288.33,155.95,288.45,155.83L288.45,155.83z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M279.36,163.01c0-0.02,0-0.04,0-0.06c0.01-0.14-0.02-0.27-0.09-0.39c-0.04-0.12-0.11-0.23-0.21-0.32\n           c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.09,0.01-0.18,0.02-0.27,0.04c-0.17,0.05-0.32,0.13-0.44,0.26\n           c-0.05,0.07-0.1,0.13-0.16,0.2c-0.09,0.16-0.14,0.32-0.14,0.5c0,0.02,0,0.04,0,0.06c-0.01,0.14,0.02,0.27,0.09,0.39\n           c0.04,0.12,0.11,0.23,0.21,0.32c0.09,0.1,0.2,0.17,0.32,0.21c0.12,0.06,0.25,0.09,0.39,0.09c0.09-0.01,0.18-0.02,0.27-0.04\n           c0.17-0.05,0.32-0.13,0.44-0.26c0.05-0.07,0.1-0.13,0.16-0.2C279.32,163.36,279.36,163.2,279.36,163.01L279.36,163.01z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M280.55,170.91c0.04,0.02,0.17,0.07,0.12,0.05c-0.02-0.01,0.08,0.04,0.12,0.05c0.09,0.03,0.18,0.04,0.27,0.04\n           c0.01,0,0.26-0.03,0.27-0.04c0,0,0.24-0.1,0.24-0.1c0.08-0.04,0.15-0.1,0.21-0.16c0,0,0.16-0.2,0.16-0.2c0,0,0,0,0,0\n           c0-0.01,0.1-0.23,0.1-0.24c0,0,0,0,0,0c0.01-0.04,0.02-0.15,0.02-0.14c-0.01,0.06,0.02-0.1,0.02-0.14c0,0,0,0,0,0\n           c0-0.01-0.03-0.26-0.04-0.27c0,0,0,0,0-0.01c0,0,0,0,0,0c-0.02-0.04-0.03-0.08-0.05-0.12c-0.02-0.04-0.03-0.08-0.05-0.12\n           c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.16-0.2-0.16-0.2c-0.03-0.03-0.22-0.17-0.1-0.08c-0.01-0.01-0.07-0.06-0.1-0.08\n           c0,0-0.24-0.1-0.24-0.1c0,0,0,0,0,0c-0.09-0.02-0.18-0.03-0.27-0.04c-0.09,0-0.18,0.01-0.27,0.04c-0.01,0-0.23,0.1-0.24,0.1\n           c0,0,0,0,0,0c-0.12,0.06-0.21,0.15-0.28,0.26c-0.09,0.1-0.15,0.21-0.18,0.34c-0.04,0.13-0.05,0.27-0.02,0.4\n           c0.01,0.13,0.05,0.26,0.12,0.37c0.05,0.07,0.1,0.13,0.16,0.2c0.12,0.12,0.27,0.21,0.44,0.26c0.09,0.01,0.18,0.02,0.27,0.04\n           c0.18,0,0.35-0.05,0.5-0.14c0,0,0,0,0,0c-0.08,0.03-0.16,0.07-0.24,0.1c0,0,0,0,0,0c-0.09,0.01-0.18,0.02-0.27,0.04c0,0,0,0,0,0\n           c-0.09-0.01-0.18-0.02-0.27-0.04c0,0,0,0,0,0c-0.08-0.03-0.16-0.07-0.24-0.1c0,0,0,0,0,0c-0.07-0.05-0.13-0.1-0.2-0.16\n           c0,0,0,0,0,0c-0.05-0.07-0.1-0.13-0.16-0.2c0,0,0,0,0,0.01c-0.03-0.08-0.07-0.16-0.1-0.24c0,0,0,0.01,0,0.01\n           c-0.01-0.09-0.02-0.18-0.04-0.27c0,0,0,0.01,0,0.01c0.01-0.09,0.02-0.18,0.04-0.27c0,0,0,0.01,0,0.01\n           c0.03-0.08,0.07-0.16,0.1-0.24c0,0,0,0,0,0c0.05-0.07,0.1-0.13,0.16-0.2c0,0,0,0,0,0c0.07-0.05,0.13-0.1,0.2-0.16c0,0,0,0,0,0\n           c0.08-0.03,0.16-0.07,0.24-0.1c0,0,0,0,0,0c0.09-0.01,0.18-0.02,0.27-0.04c0,0,0,0,0,0c0.09,0.01,0.18,0.02,0.27,0.04\n           c0,0,0,0,0,0c0.08,0.03,0.16,0.07,0.24,0.1c0,0,0,0,0,0c-0.11-0.07-0.24-0.11-0.37-0.12c-0.13-0.03-0.27-0.02-0.4,0.02\n           c-0.13,0.03-0.24,0.09-0.34,0.18c-0.11,0.07-0.19,0.16-0.26,0.28c-0.03,0.08-0.07,0.16-0.1,0.24c-0.05,0.18-0.05,0.35,0,0.53\n           c0.03,0.08,0.07,0.16,0.1,0.24C280.28,170.7,280.4,170.82,280.55,170.91L280.55,170.91z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M313,169.42c0,0.01,0,0.02,0,0.04c0,1.29,2,1.29,2,0c0-0.01,0-0.02,0-0.04C315,168.13,313,168.13,313,169.42\n           c0,0.01,0,0.02,0,0.04c0,1.29,2,1.29,2,0c0-0.01,0-0.02,0-0.04C315,168.13,313,168.13,313,169.42L313,169.42z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M315.66,162.81c1.29,0,1.29-2,0-2C314.37,160.81,314.37,162.81,315.66,162.81L315.66,162.81z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M307.08,154.93c0.02,0,0.04,0,0.06,0c0.07,0,0.13-0.01,0.19-0.04c0.06-0.02,0.12-0.05,0.16-0.1\n           c0.05-0.05,0.08-0.1,0.1-0.16c0.03-0.06,0.05-0.12,0.04-0.19c-0.01-0.04-0.01-0.09-0.02-0.13c-0.02-0.08-0.07-0.16-0.13-0.22\n           c-0.03-0.03-0.07-0.05-0.1-0.08c-0.08-0.05-0.16-0.07-0.25-0.07c-0.02,0-0.04,0-0.06,0c-0.07,0-0.13,0.01-0.19,0.04\n           c-0.06,0.02-0.12,0.05-0.16,0.1c-0.05,0.05-0.08,0.1-0.1,0.16c-0.03,0.06-0.05,0.12-0.04,0.19c0.01,0.04,0.01,0.09,0.02,0.13\n           c0.02,0.08,0.07,0.16,0.13,0.22c0.03,0.03,0.07,0.05,0.1,0.08C306.91,154.91,306.99,154.93,307.08,154.93L307.08,154.93z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M297.13,158.92c1.29,0,1.29-2,0-2C295.84,156.92,295.84,158.92,297.13,158.92L297.13,158.92z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M290.21,165.62c1.29,0,1.29-2,0-2C288.92,163.62,288.92,165.62,290.21,165.62L290.21,165.62z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M298.53,172.11c0-0.01,0-0.02,0-0.04c0-1.29-2-1.29-2,0c0,0.01,0,0.02,0,0.04C296.53,173.4,298.53,173.4,298.53,172.11\n           c0-0.01,0-0.02,0-0.04c0-1.29-2-1.29-2,0c0,0.01,0,0.02,0,0.04C296.53,173.4,298.53,173.4,298.53,172.11L298.53,172.11z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M304.28,165.9c0.02,0,0.04,0,0.06,0c0.14,0.01,0.27-0.02,0.39-0.09c0.12-0.04,0.23-0.11,0.32-0.21\n           c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39c-0.01-0.09-0.02-0.18-0.04-0.27c-0.05-0.17-0.13-0.32-0.26-0.44\n           c-0.07-0.05-0.13-0.1-0.2-0.16c-0.16-0.09-0.32-0.14-0.5-0.14c-0.02,0-0.04,0-0.06,0c-0.14-0.01-0.27,0.02-0.39,0.09\n           c-0.12,0.04-0.23,0.11-0.32,0.21c-0.1,0.09-0.17,0.2-0.21,0.32c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.09,0.02,0.18,0.04,0.27\n           c0.05,0.17,0.13,0.32,0.26,0.44c0.07,0.05,0.13,0.1,0.2,0.16C303.93,165.86,304.1,165.9,304.28,165.9L304.28,165.9z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M296.79,151.69c0.06,0.53,0.09,1.07,0.1,1.6c0.01,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.51-0.22,0.5-0.5\n           c-0.01-0.53-0.05-1.07-0.1-1.6c-0.01-0.14-0.05-0.25-0.15-0.35c-0.09-0.09-0.23-0.15-0.35-0.15c-0.13,0.01-0.26,0.05-0.35,0.15\n           C296.85,151.43,296.78,151.56,296.79,151.69L296.79,151.69z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M284.58,165.09c0.11-0.02,0.22-0.03,0.32-0.05c-0.09,0.01-0.18,0.02-0.27,0.04c0.44-0.06,0.89-0.09,1.33-0.11\n           c0.26-0.01,0.52-0.11,0.71-0.29c0.17-0.17,0.3-0.46,0.29-0.71c-0.01-0.26-0.1-0.53-0.29-0.71c-0.19-0.18-0.44-0.3-0.71-0.29\n           c-0.64,0.02-1.29,0.09-1.92,0.19c-0.13,0.03-0.24,0.09-0.34,0.18c-0.11,0.07-0.19,0.16-0.26,0.28c-0.13,0.21-0.18,0.53-0.1,0.77\n           c0.08,0.24,0.23,0.48,0.46,0.6c0.08,0.03,0.16,0.07,0.24,0.1C284.23,165.14,284.41,165.14,284.58,165.09L284.58,165.09z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M310.28,164.03c-0.48,0.03-0.95,0.05-1.43,0.08c-0.26,0.01-0.52,0.1-0.71,0.29c-0.1,0.09-0.17,0.2-0.21,0.32\n           c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.26,0.1,0.53,0.29,0.71c0.19,0.17,0.44,0.31,0.71,0.29c0.48-0.03,0.95-0.05,1.43-0.08\n           c0.26-0.01,0.52-0.1,0.71-0.29c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39c-0.01-0.26-0.1-0.53-0.29-0.71\n           C310.8,164.14,310.55,164.01,310.28,164.03L310.28,164.03z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M240.78,211.04c-0.01,0-0.02,0-0.04,0c-1.29,0-1.29,2,0,2c0.01,0,0.02,0,0.04,0\n           C242.07,213.04,242.07,211.04,240.78,211.04c-0.01,0-0.02,0-0.04,0c-1.29,0-1.29,2,0,2c0.01,0,0.02,0,0.04,0\n           C242.07,213.04,242.07,211.04,240.78,211.04L240.78,211.04z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M235.29,212.73c0.35-0.04,0.71-0.03,1.06,0.02c-0.09-0.01-0.18-0.02-0.27-0.04c0.08,0.01,0.17,0.03,0.25,0.04\n           c0.13,0.04,0.27,0.05,0.4,0.02c0.13-0.01,0.26-0.05,0.37-0.12c0.12-0.06,0.21-0.15,0.28-0.26c0.09-0.1,0.15-0.21,0.18-0.34\n           c0.06-0.26,0.05-0.54-0.1-0.77c-0.13-0.21-0.34-0.41-0.6-0.46c-0.52-0.1-1.05-0.15-1.58-0.1c-0.14-0.01-0.27,0.02-0.39,0.09\n           c-0.12,0.04-0.23,0.11-0.32,0.21c-0.1,0.09-0.17,0.2-0.21,0.32c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.26,0.1,0.53,0.29,0.71\n           C234.76,212.61,235.03,212.76,235.29,212.73L235.29,212.73z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M237.24,202.14c0,0.03,0,0.06,0,0.09c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32\n           c0.09,0.1,0.2,0.17,0.32,0.21c0.12,0.06,0.25,0.09,0.39,0.09c0.09-0.01,0.18-0.02,0.27-0.04c0.17-0.05,0.32-0.13,0.44-0.26\n           c0.05-0.07,0.1-0.13,0.16-0.2c0.09-0.16,0.14-0.32,0.14-0.5c0-0.03,0-0.06,0-0.09c0.01-0.14-0.02-0.27-0.09-0.39\n           c-0.04-0.12-0.11-0.23-0.21-0.32c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.09,0.01-0.18,0.02-0.27,0.04\n           c-0.17,0.05-0.32,0.13-0.44,0.26c-0.05,0.07-0.1,0.13-0.16,0.2C237.28,201.79,237.24,201.96,237.24,202.14L237.24,202.14z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M238.17,221.08c-0.03-0.03-0.06-0.06-0.09-0.09c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09\n           c-0.14-0.01-0.27,0.02-0.39,0.09c-0.12,0.04-0.23,0.11-0.32,0.21c-0.05,0.07-0.1,0.13-0.16,0.2c-0.09,0.16-0.14,0.32-0.14,0.5\n           c0.01,0.09,0.02,0.18,0.04,0.27c0.05,0.17,0.13,0.32,0.26,0.44c0.03,0.03,0.06,0.06,0.09,0.09c0.09,0.1,0.2,0.17,0.32,0.21\n           c0.12,0.06,0.25,0.09,0.39,0.09c0.14,0.01,0.27-0.02,0.39-0.09c0.12-0.04,0.23-0.11,0.32-0.21c0.05-0.07,0.1-0.13,0.16-0.2\n           c0.09-0.16,0.14-0.32,0.14-0.5c-0.01-0.09-0.02-0.18-0.04-0.27C238.38,221.36,238.29,221.21,238.17,221.08L238.17,221.08z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M253.42,197.05c1.29,0,1.29-2,0-2C252.14,195.05,252.13,197.05,253.42,197.05L253.42,197.05z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M248.9,194.27c0.03-0.03,0.06-0.06,0.09-0.09c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39\n           c0.01-0.14-0.02-0.27-0.09-0.39c-0.04-0.12-0.11-0.23-0.21-0.32c-0.07-0.05-0.13-0.1-0.2-0.16c-0.16-0.09-0.32-0.14-0.5-0.14\n           c-0.09,0.01-0.18,0.02-0.27,0.04c-0.17,0.05-0.32,0.13-0.44,0.26c-0.03,0.03-0.06,0.06-0.09,0.09c-0.1,0.09-0.17,0.2-0.21,0.32\n           c-0.06,0.12-0.09,0.25-0.09,0.39c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32c0.07,0.05,0.13,0.1,0.2,0.16\n           c0.16,0.09,0.32,0.14,0.5,0.14c0.09-0.01,0.18-0.02,0.27-0.04C248.62,194.48,248.77,194.39,248.9,194.27L248.9,194.27z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M288.53,205.64c0.16-0.12,0.64-0.1,0.68-0.09c0.16,0.03,0.27,0.11,0.14,0.05c-0.24-0.12,0.14,0.15-0.04-0.03\n           c-0.23-0.22-0.46-0.42-0.69-0.64c-0.74-0.71-1.47-1.43-2.23-2.13c-2.47-2.28-5.11-4.36-7.92-6.21c-2.33-1.53-4.96-2.77-6.93-4.79\n           c-1.74-1.79-2.7-3.96-3.82-6.16c-1.81-3.52-3.89-6.89-6.22-10.09c-0.52,0.4-1.05,0.81-1.57,1.21c2.69,2.13,5.45,4.17,8.3,6.07\n           c1.99,1.33,4.31,2.51,6,4.05c1.04,0.95,1.95,2.01,2.68,3.21c0.76,1.24,1.36,2.56,2.02,3.85c1.6,3.15,3.51,6.1,5.73,8.85\n           c0.81,1.01,1.67,1.98,2.53,2.93c0.27,0.29,0.54,0.59,0.8,0.89c0.04,0.05,0.09,0.1,0.13,0.16c-0.18-0.22-0.02-0.06-0.03-0.04\n           c-0.01,0.01,0.06,0.08,0.06,0.1c0.03-0.38-0.36-0.4,0.18-1.05c-0.81,0.99,0.6,2.41,1.41,1.41c0.6-0.73,0.17-1.4-0.34-2\n           c-0.56-0.66-1.16-1.29-1.73-1.93c-2.21-2.5-4.17-5.19-5.81-8.09c-1.57-2.76-2.69-5.8-4.78-8.24c-1.75-2.05-3.98-3.34-6.22-4.78\n           c-3.28-2.11-6.45-4.39-9.51-6.81c-0.39-0.31-0.89-0.41-1.31-0.08c-0.36,0.28-0.56,0.88-0.26,1.29c2.13,2.93,4.06,6,5.76,9.21\n           c1.29,2.44,2.32,4.93,4.19,7.01c2,2.23,4.69,3.59,7.17,5.18c2.94,1.88,5.69,4.04,8.25,6.41c0.81,0.75,1.58,1.53,2.39,2.29\n           c0.48,0.45,1.29,1.23,2,0.7c0.43-0.32,0.65-0.87,0.36-1.37C289.65,205.57,288.97,205.31,288.53,205.64z\"/>\n   </g>\n</g>\n<circle class=\"st3\" cx=\"272.51\" cy=\"189.33\" r=\"1.58\"/>\n<circle class=\"st3\" cx=\"257.82\" cy=\"185.41\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"270.09\" cy=\"173.83\" r=\"2.73\"/>\n<g>\n   <g>\n       <path d=\"M286.94,226.72c-0.12-0.16-0.1-0.64-0.1-0.68c0.02-0.14,0.11-0.27,0.05-0.14c-0.11,0.24,0.14-0.14-0.04,0.05\n           c-0.2,0.22-0.4,0.45-0.6,0.66c-0.65,0.7-1.31,1.39-1.94,2.1c-2.1,2.35-4.02,4.86-5.7,7.51c-1.41,2.22-2.54,4.72-4.43,6.59\n           c-1.62,1.61-3.6,2.52-5.59,3.57c-3.29,1.75-6.43,3.76-9.41,5.99c0.46,0.46,0.91,0.91,1.37,1.37c1.94-2.53,3.79-5.13,5.51-7.81\n           c1.2-1.87,2.28-4.05,3.7-5.63c1.85-2.07,4.18-3.2,6.59-4.48c2.89-1.53,5.6-3.35,8.11-5.44c0.91-0.76,1.79-1.56,2.66-2.37\n           c0.27-0.25,0.53-0.51,0.81-0.75c0.05-0.04,0.09-0.08,0.14-0.12c0.19-0.17-0.13,0.05-0.01,0.01c0.03-0.01,0.06-0.05,0.09-0.06\n           c-0.22,0.1-0.54,0.22-1.05-0.19c0.42,0.33,1,0.41,1.41,0c0.35-0.35,0.43-1.08,0-1.41c-0.73-0.57-1.36-0.2-1.95,0.32\n           c-0.62,0.54-1.2,1.12-1.81,1.67c-2.32,2.11-4.83,4-7.54,5.58c-2.59,1.52-5.44,2.62-7.7,4.65c-1.88,1.7-3.05,3.83-4.38,5.95\n           c-1.95,3.13-4.07,6.15-6.31,9.07c-0.6,0.78,0.59,1.95,1.37,1.37c2.75-2.06,5.64-3.94,8.66-5.59c2.23-1.22,4.49-2.2,6.38-3.94\n           c2.07-1.9,3.31-4.43,4.76-6.79c1.74-2.81,3.73-5.44,5.94-7.89c0.68-0.76,1.4-1.48,2.08-2.24c0.43-0.48,1.17-1.27,0.66-1.96\n           c-0.32-0.43-0.86-0.65-1.37-0.36C286.87,225.61,286.61,226.29,286.94,226.72z\"/>\n   </g>\n</g>\n\n   <ellipse transform=\"matrix(0.9999 -0.0134 0.0134 0.9999 -3.2149 3.6625)\" class=\"st3\" cx=\"271.94\" cy=\"241.95\" rx=\"1.47\" ry=\"1.48\"/>\n<circle class=\"st3\" cx=\"257.16\" cy=\"239.73\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"272.51\" cy=\"256.89\" r=\"2.73\"/>\n<g>\n   <g>\n       <path d=\"M310.42,227.04c-0.29,0.26-0.64,0.3-0.86,0.25c-0.38-0.08-0.19-0.11-0.12-0.05c0.06,0.06,0.17,0.1,0.24,0.15\n           c0.09,0.06,0.17,0.13,0.26,0.19c0.03,0.02,0.23,0.18,0.04,0.03c0.09,0.07,0.19,0.15,0.28,0.22c0.79,0.62,1.58,1.25,2.38,1.85\n           c2.51,1.88,5.17,3.56,7.96,5c2.32,1.19,4.9,2.11,6.89,3.84c1.75,1.52,2.79,3.38,4.04,5.31c2.04,3.13,4.33,6.11,6.82,8.89\n           c0.4-0.52,0.81-1.05,1.21-1.57c-2.66-1.7-5.39-3.31-8.19-4.79c-1.99-1.05-4.18-1.89-6.01-3.22c-2.18-1.59-3.51-3.77-4.94-6\n           c-1.79-2.79-3.85-5.4-6.18-7.76c-0.85-0.86-1.74-1.68-2.64-2.49c-0.27-0.25-0.55-0.49-0.82-0.75c-0.09-0.09-0.17-0.19-0.26-0.27\n           c-0.12-0.11,0.13,0.22,0.07,0.09c0.09,0.19,0.15,0.59-0.03,0.87c0.71-1.08-1.03-2.08-1.73-1.01c-0.44,0.67,0.12,1.34,0.59,1.78\n           c0.64,0.61,1.31,1.18,1.95,1.78c2.34,2.19,4.48,4.59,6.3,7.22c1.65,2.39,2.97,5.05,5.15,7.02c1.83,1.67,3.98,2.63,6.16,3.74\n           c3.28,1.68,6.47,3.52,9.58,5.51c0.99,0.64,1.94-0.75,1.21-1.57c-2.29-2.55-4.39-5.27-6.28-8.13c-1.38-2.1-2.56-4.27-4.46-5.96\n           c-2.11-1.88-4.74-2.89-7.23-4.16c-2.95-1.51-5.76-3.28-8.4-5.28c-0.81-0.62-1.6-1.26-2.41-1.88c-0.6-0.45-1.31-0.89-2-0.28\n           C308.04,226.48,309.46,227.89,310.42,227.04z\"/>\n   </g>\n</g>\n\n   <ellipse transform=\"matrix(0.9951 -0.0993 0.0993 0.9951 -22.287 33.6232)\" class=\"st3\" cx=\"326.75\" cy=\"240.78\" rx=\"1.48\" ry=\"1.47\"/>\n<circle class=\"st3\" cx=\"326.75\" cy=\"255.6\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"343.21\" cy=\"239.73\" r=\"2.73\"/>\n<g>\n   <g>\n       <path d=\"M308.86,204.67c0.26,0.28,0.3,0.64,0.25,0.86c-0.08,0.38-0.11,0.19-0.05,0.13c0.06-0.06,0.1-0.16,0.15-0.24\n           c0.16-0.24,0.34-0.47,0.52-0.71c0.15-0.19,0.46-0.59,0.71-0.92c0.33-0.43,0.66-0.87,0.98-1.31c1.88-2.55,3.54-5.25,4.96-8.08\n           c1.15-2.3,2.03-4.87,3.71-6.87c1.51-1.8,3.37-2.87,5.32-4.17c3.11-2.07,6.06-4.39,8.82-6.92c-0.52-0.4-1.05-0.81-1.57-1.21\n           c-1.68,2.68-3.25,5.43-4.7,8.24c-1.03,2-1.85,4.2-3.16,6.04c-1.56,2.2-3.73,3.56-5.94,5.01c-2.77,1.82-5.36,3.9-7.69,6.26\n           c-0.85,0.86-1.67,1.76-2.47,2.67c-0.24,0.28-0.48,0.56-0.74,0.83c-0.09,0.09-0.19,0.17-0.27,0.27c-0.11,0.13,0.22-0.13,0.09-0.07\n           c-0.01,0.01-0.03,0.02-0.05,0.03c0.28-0.16,0.59-0.16,0.91,0c-1.09-0.69-2.09,1.04-1.01,1.73c0.69,0.44,1.33-0.11,1.78-0.59\n           c0.6-0.64,1.16-1.32,1.76-1.97c2.16-2.36,4.54-4.53,7.15-6.38c2.37-1.68,5.02-3.03,6.97-5.22c1.65-1.85,2.59-4,3.68-6.2\n           c1.64-3.3,3.45-6.51,5.4-9.64c0.62-0.99-0.75-1.96-1.57-1.21c-2.56,2.34-5.27,4.49-8.15,6.43c-2.1,1.42-4.27,2.63-5.93,4.59\n           c-1.84,2.16-2.82,4.83-4.07,7.34c-1.46,2.92-3.19,5.7-5.14,8.32c-0.64,0.86-1.19,1.54-1.82,2.38c-0.44,0.59-0.87,1.32-0.26,1.99\n           C308.31,207.04,309.72,205.62,308.86,204.67z\"/>\n   </g>\n</g>\n\n   <ellipse transform=\"matrix(0.9939 -0.1101 0.1101 0.9939 -18.7623 36.6477)\" class=\"st3\" cx=\"322.41\" cy=\"188.19\" rx=\"1.47\" ry=\"1.48\"/>\n<circle class=\"st3\" cx=\"324.02\" cy=\"172.92\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"339.07\" cy=\"186.34\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"297.83\" cy=\"131.97\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"307.85\" cy=\"125.38\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"287.75\" cy=\"125.38\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"263.71\" cy=\"138.09\" r=\"2.73\"/>\n<circle class=\"st3\" cx=\"330.86\" cy=\"138.46\" r=\"2.73\"/>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_6\">\n<path class=\"st3\" d=\"M298.73,216.56l-25.91-53.2c0.33-0.69,7.14-14.38,22.42-15.85c10.36-0.99,20.49,4.02,26.14,12.93\n   C313.83,179.15,306.28,197.85,298.73,216.56\"/>\n<path class=\"st3\" d=\"M299.01,216.3l51.86-28.49c0.71,0.3,14.71,6.42,16.93,21.62c1.5,10.3-3.01,20.67-11.63,26.74\n   C337.12,229.55,318.07,222.93,299.01,216.3\"/>\n<path class=\"st3\" d=\"M299.36,216.3l-51.86-28.49c-0.71,0.3-14.71,6.42-16.93,21.62c-1.5,10.3,3.01,20.67,11.63,26.74\n   C261.25,229.55,280.3,222.93,299.36,216.3\"/>\n<path class=\"st3\" d=\"M299.17,216.56l25.91,53.2c-0.33,0.69-7.14,14.38-22.42,15.85c-10.36,0.99-20.49-4.02-26.14-12.93\n   C284.07,253.97,291.62,235.26,299.17,216.56\"/>\n\n   <ellipse transform=\"matrix(0.0148 -0.9999 0.9999 0.0148 28.0161 564.7697)\" class=\"st5\" cx=\"300.59\" cy=\"268.17\" rx=\"5.36\" ry=\"5.36\"/>\n<path class=\"st5\" d=\"M300.29,236.39c0.5,2.66,1.07,6.75,0.86,11.77c-0.14,3.38-0.64,7.45-1.05,7.45c-0.42-0.01-0.7-4.28-0.75-7.32\n   C299.26,243.22,299.81,239.1,300.29,236.39z\"/>\n<path class=\"st5\" d=\"M303.01,236.28c1.56,2.21,3.75,5.71,5.63,10.37c1.27,3.13,2.49,7.06,2.11,7.22c-0.39,0.17-2.41-3.61-3.7-6.36\n   C304.9,242.93,303.69,238.96,303.01,236.28z\"/>\n<path class=\"st5\" d=\"M297.53,236.17c-0.72,2.61-2.03,6.52-4.43,10.94c-1.62,2.97-3.87,6.4-4.24,6.21c-0.38-0.19,1.26-4.15,2.56-6.9\n   C293.6,241.84,295.9,238.39,297.53,236.17z\"/>\n<path class=\"st3\" d=\"M315.66,259.52c0.04-0.23-0.77-0.32-1.5-1.07c-0.79-0.81-0.85-1.73-1.09-1.7c-0.23,0.03-0.09,0.87-0.54,1.97\n   c-0.41,0.99-0.97,1.4-0.82,1.59c0.15,0.2,0.76-0.21,2-0.46C314.9,259.62,315.62,259.73,315.66,259.52z\"/>\n<path class=\"st3\" d=\"M289.73,260.62c0.16-0.17-0.49-0.68-0.71-1.7c-0.24-1.1,0.2-1.92-0.03-2.02c-0.22-0.1-0.53,0.7-1.5,1.39\n   c-0.87,0.63-1.56,0.67-1.54,0.91c0.02,0.25,0.75,0.22,1.94,0.67C289.03,260.3,289.58,260.78,289.73,260.62z\"/>\n<g>\n   <g>\n       <path d=\"M300.4,269.61c0.55,0.25,0.73,0.89,0.97,1.41c0.28,0.62,0.56,1.25,0.82,1.88c0.2,0.48,0.4,0.97,0.59,1.46\n           c0.33,0.87,0.7,1.76,0.9,2.67c0.02,0.1,0.03,0.19,0.05,0.29c-0.07-0.35-0.01-0.14-0.01-0.05c0,0.55,0.03,1.07-0.12,1.61\n           c-0.17,0.62-0.54,1.18-1.04,1.59c-0.18,0.15-0.37,0.27-0.57,0.39c-0.08,0.05-0.57,0.27-0.28,0.15c-0.91,0.37-1.91,0.46-2.83,0.05\n           c-2.54-1.13-1.62-3.95-1.01-6.04c0.33-1.1,0.87-2.1,1.21-3.2c0.21-0.67,0.43-1.34,0.81-1.94c0.08-0.13,0.21-0.22,0.08-0.15\n           c0.24-0.12,0.41-0.11,0.66-0.03c1.23,0.4,1.75-1.53,0.53-1.93c-1.59-0.52-2.72,0.41-3.36,1.77c-0.34,0.72-0.55,1.48-0.82,2.22\n           c-0.19,0.54-0.46,1.05-0.68,1.59c-0.53,1.36-0.89,2.84-1.09,4.28c-0.21,1.48,0.22,2.99,1.24,4.11c1.95,2.13,5.33,1.96,7.44,0.19\n           c2.06-1.74,2.11-4.42,1.3-6.76c-0.31-0.88-0.64-1.75-1-2.61c-0.34-0.82-0.7-1.64-1.06-2.45c-0.4-0.88-0.8-1.81-1.73-2.24\n           c-0.49-0.23-1.08-0.14-1.37,0.36C299.79,268.67,299.91,269.38,300.4,269.61z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M301.6,268.22c0.27-0.5,0.97-0.64,1.47-0.83c0.61-0.23,1.22-0.45,1.84-0.66c0.53-0.18,1.07-0.36,1.6-0.53\n           c0.88-0.27,1.76-0.53,2.67-0.71c0.31-0.06-0.14-0.01,0.1-0.01c0.07,0,0.14-0.01,0.2-0.01c0.48-0.01,0.96,0.04,1.42,0.18\n           c1.02,0.31,1.84,1.22,2.13,2.08c0.13,0.38,0.22,0.76,0.24,1.16c0.01,0.34-0.02,0.67-0.11,1c-0.04,0.14-0.08,0.28-0.14,0.42\n           c0.07-0.17-0.06,0.14-0.08,0.17c-1.32,2.49-4.04,1.45-6.12,0.69c-1.03-0.38-1.96-0.96-2.97-1.37c-0.67-0.27-1.36-0.52-1.95-0.94\n           c0.02,0.01-0.15-0.1-0.13-0.09c-0.05-0.04-0.1-0.09-0.14-0.13c0.07,0.11,0.09,0.12,0.03,0.04c-0.08-0.24-0.05-0.43,0.05-0.69\n           c0.2-0.5-0.22-1.1-0.7-1.23c-0.57-0.16-1.03,0.19-1.23,0.7c-0.63,1.63,0.38,2.78,1.73,3.49c0.68,0.36,1.42,0.59,2.12,0.92\n           c0.51,0.24,0.99,0.53,1.5,0.76c2.6,1.15,5.88,2.36,8.36,0.32c2.24-1.84,2.26-5.3,0.53-7.48c-1.09-1.37-2.76-2.01-4.48-2\n           c-0.75,0-1.51,0.21-2.23,0.41c-0.89,0.25-1.78,0.53-2.65,0.83c-0.81,0.28-1.62,0.57-2.43,0.87c-0.93,0.35-1.84,0.7-2.34,1.63\n           C299.26,268.34,300.98,269.35,301.6,268.22z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M299.65,267.98c-0.17,0.46-1.02,0.76-1.41,0.97c-0.59,0.32-1.19,0.64-1.79,0.95c-0.48,0.25-0.97,0.49-1.46,0.72\n           c-0.79,0.37-1.58,0.78-2.42,1.02c-0.13,0.04-0.67,0.12-0.19,0.06c-0.6,0.07-1.2,0.12-1.79-0.03c-1.99-0.51-3.11-2.82-2.33-4.68\n           c1-2.4,3.84-1.73,5.8-1.31c1.12,0.24,2.17,0.71,3.28,0.97c0.68,0.16,1.38,0.32,2,0.64c0.08,0.04,0.15,0.08,0.22,0.13\n           c0.22,0.14-0.07-0.1,0.08,0.08c0.01,0.01,0.01,0.01,0.02,0.02c-0.13-0.18-0.13-0.17-0.01,0.03\n           C299.65,267.71,299.69,267.82,299.65,267.98c-0.3,1.25,1.63,1.78,1.93,0.53c0.2-0.81,0.08-1.72-0.48-2.37\n           c-0.39-0.44-0.95-0.68-1.48-0.9c-0.76-0.3-1.54-0.45-2.33-0.67c-0.55-0.16-1.08-0.39-1.63-0.55c-1.45-0.43-3.03-0.71-4.54-0.78\n           c-1.35-0.06-2.73,0.48-3.68,1.44c-2.06,2.06-1.77,5.5,0.19,7.51c1.24,1.27,2.96,1.72,4.68,1.51c0.82-0.1,1.55-0.4,2.3-0.73\n           c0.88-0.38,1.75-0.79,2.6-1.23c0.79-0.4,1.57-0.81,2.34-1.24c0.9-0.49,1.65-1,2.02-2C302.03,267.31,300.09,266.79,299.65,267.98z\n           \"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M300.42,267.06c-0.55-0.26-0.73-0.9-0.96-1.42c-0.27-0.61-0.53-1.22-0.79-1.83c-0.21-0.5-0.41-1.01-0.6-1.52\n           c-0.33-0.88-0.66-1.76-0.88-2.68c-0.02-0.1-0.05-0.44-0.02-0.07c0-0.06-0.01-0.12-0.02-0.17c-0.01-0.55-0.02-1.08,0.13-1.61\n           c0.18-0.62,0.55-1.17,1.05-1.58c0.18-0.15,0.37-0.27,0.57-0.38c0.08-0.05,0.57-0.26,0.28-0.15c0.92-0.36,1.91-0.45,2.83-0.03\n           c0.56,0.26,1.03,0.68,1.33,1.22c0.13,0.23,0.21,0.47,0.28,0.73c0.02,0.09,0.04,0.17,0.06,0.26c0.02,0.14,0.03,0.15,0.01,0.04\n           c0.01,0.07,0.01,0.14,0.02,0.21c0.04,1.19-0.38,2.45-0.72,3.58c-0.33,1.1-0.88,2.1-1.23,3.19c-0.22,0.67-0.44,1.34-0.82,1.93\n           c0,0-0.1,0.19-0.05,0.09c-0.08,0.16-0.14,0.11-0.03,0.06c-0.24,0.12-0.41,0.11-0.67,0.02c-1.22-0.4-1.75,1.53-0.53,1.93\n           c1.59,0.53,2.72-0.4,3.36-1.76c0.34-0.72,0.56-1.47,0.83-2.22c0.19-0.54,0.47-1.05,0.68-1.59c0.54-1.36,0.91-2.83,1.12-4.28\n           c0.21-1.48-0.21-2.99-1.22-4.11c-1.94-2.14-5.32-1.99-7.44-0.22c-2.07,1.73-2.13,4.41-1.33,6.75c0.3,0.88,0.63,1.76,0.99,2.62\n           c0.34,0.82,0.69,1.64,1.05,2.46c0.39,0.89,0.79,1.81,1.72,2.24c0.49,0.23,1.08,0.14,1.37-0.36\n           C301.03,268,300.91,267.29,300.42,267.06z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M318.38,270.39c0,0.02,0,0.04,0,0.06c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32\n           c0.09,0.1,0.2,0.17,0.32,0.21c0.12,0.06,0.25,0.09,0.39,0.09c0.09-0.01,0.18-0.02,0.27-0.04c0.17-0.05,0.32-0.13,0.44-0.26\n           c0.05-0.07,0.1-0.13,0.16-0.2c0.09-0.16,0.14-0.32,0.14-0.5c0-0.02,0-0.04,0-0.06c0.01-0.14-0.02-0.27-0.09-0.39\n           c-0.04-0.12-0.11-0.23-0.21-0.32c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.09,0.01-0.18,0.02-0.27,0.04\n           c-0.17,0.05-0.32,0.13-0.44,0.26c-0.05,0.07-0.1,0.13-0.16,0.2C318.42,270.04,318.38,270.21,318.38,270.39L318.38,270.39z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M317.29,262.46c-0.08-0.05-0.16-0.08-0.24-0.1c-0.04-0.01-0.18-0.02-0.14-0.02c-0.22-0.03-0.09-0.02-0.14-0.02\n           c-0.01,0-0.26,0.04-0.27,0.04c0,0,0,0,0,0c-0.08,0.03-0.16,0.07-0.24,0.1c-0.07,0.04-0.15,0.1-0.21,0.16c0,0-0.16,0.2-0.16,0.2\n           c0,0,0,0,0,0c0,0,0,0,0,0c0,0.01-0.1,0.23-0.1,0.24c-0.01,0.04-0.02,0.12-0.02,0.14c0.01-0.06-0.02,0.1-0.02,0.14\n           c0,0.09,0.01,0.19,0.04,0.28c0,0,0,0,0,0c0.01,0.04,0.03,0.08,0.05,0.12c0.02,0.04,0.03,0.08,0.05,0.12c0,0,0,0,0,0c0,0,0,0,0,0\n           c0,0,0.16,0.2,0.16,0.2c0.03,0.03,0.17,0.13,0.1,0.08c-0.06-0.05,0.07,0.06,0.1,0.08c0,0,0.24,0.1,0.24,0.1c0,0,0,0,0,0\n           c0.09,0.02,0.18,0.03,0.27,0.04c0,0,0,0,0,0c0,0,0.26-0.04,0.27-0.04c0,0,0,0,0,0c0.08-0.03,0.16-0.07,0.24-0.1c0,0,0,0,0,0\n           c0.12-0.06,0.21-0.15,0.28-0.26c0.09-0.1,0.15-0.21,0.18-0.34c0.04-0.13,0.05-0.27,0.02-0.4c-0.01-0.13-0.05-0.26-0.12-0.37\n           c-0.05-0.07-0.1-0.13-0.16-0.2c-0.12-0.12-0.27-0.21-0.44-0.26c-0.09-0.01-0.18-0.02-0.27-0.04c-0.18,0-0.35,0.05-0.5,0.14\n           c0,0,0,0,0,0c0.08-0.03,0.16-0.07,0.24-0.1c0,0,0,0,0,0c0.09-0.01,0.18-0.02,0.27-0.04c0,0,0,0,0,0\n           c0.09,0.01,0.18,0.02,0.27,0.04c0,0,0,0,0,0c0.08,0.03,0.16,0.07,0.24,0.1c0,0,0,0,0,0c0.07,0.05,0.13,0.1,0.2,0.16c0,0,0,0,0,0\n           c0.05,0.07,0.1,0.13,0.16,0.2c0,0,0,0,0-0.01c0.03,0.08,0.07,0.16,0.1,0.24c0,0,0-0.01,0-0.01c0.01,0.09,0.02,0.18,0.04,0.27\n           c0,0,0-0.01,0-0.01c-0.01,0.09-0.02,0.18-0.04,0.27c0,0,0-0.01,0-0.01c-0.03,0.08-0.07,0.16-0.1,0.24c0,0,0,0,0-0.01\n           c-0.05,0.07-0.1,0.13-0.16,0.2c0,0,0,0,0,0c-0.07,0.05-0.13,0.1-0.2,0.16c0,0,0,0,0,0c-0.08,0.03-0.16,0.07-0.24,0.1c0,0,0,0,0,0\n           c-0.09,0.01-0.18,0.02-0.27,0.04c0,0,0,0,0,0c-0.09-0.01-0.18-0.02-0.27-0.04c0,0,0,0,0,0c-0.08-0.03-0.16-0.07-0.24-0.1\n           c0,0,0,0,0,0c0.11,0.07,0.24,0.11,0.37,0.12c0.13,0.03,0.27,0.02,0.4-0.02c0.13-0.03,0.24-0.09,0.34-0.18\n           c0.11-0.07,0.19-0.16,0.26-0.28c0.03-0.08,0.07-0.16,0.1-0.24c0.05-0.18,0.05-0.35,0-0.53c-0.03-0.08-0.07-0.16-0.1-0.24\n           C317.56,262.67,317.44,262.55,317.29,262.46L317.29,262.46z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M307.56,269.61c1.29,0,1.29-2,0-2C306.28,267.61,306.27,269.61,307.56,269.61L307.56,269.61z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M299.35,261.01c0,0.01,0,0.02,0,0.04c-0.02,1.29,1.98,1.29,2,0c0-0.01,0-0.02,0-0.04\n           C301.37,259.73,299.37,259.73,299.35,261.01c0,0.01,0,0.02,0,0.04c-0.02,1.29,1.98,1.29,2,0c0-0.01,0-0.02,0-0.04\n           C301.37,259.73,299.37,259.73,299.35,261.01L299.35,261.01z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M293.5,267.12c-0.02,0-0.04,0-0.06,0c-0.14-0.01-0.27,0.02-0.39,0.09c-0.12,0.04-0.23,0.11-0.32,0.21\n           c-0.1,0.09-0.17,0.2-0.21,0.32c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.09,0.02,0.18,0.04,0.27c0.05,0.17,0.13,0.32,0.26,0.44\n           c0.07,0.05,0.13,0.1,0.2,0.16c0.16,0.09,0.32,0.14,0.5,0.14c0.02,0,0.04,0,0.06,0c0.14,0.01,0.27-0.02,0.39-0.09\n           c0.12-0.04,0.23-0.11,0.32-0.21c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39c-0.01-0.09-0.02-0.18-0.04-0.27\n           c-0.05-0.17-0.13-0.32-0.26-0.44c-0.07-0.05-0.13-0.1-0.2-0.16C293.84,267.17,293.68,267.12,293.5,267.12L293.5,267.12z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M313.18,268.23c-0.04,0.01-0.09,0.01-0.13,0.02c0.09-0.01,0.18-0.02,0.27-0.04c-0.51,0.07-1.02,0.11-1.53,0.11\n           c-0.26,0-0.52,0.11-0.71,0.29c-0.17,0.17-0.3,0.46-0.29,0.71c0.01,0.26,0.1,0.53,0.29,0.71c0.19,0.18,0.44,0.3,0.71,0.29\n           c0.65-0.01,1.29-0.08,1.92-0.17c0.13-0.03,0.24-0.09,0.34-0.18c0.11-0.07,0.19-0.16,0.26-0.28c0.13-0.21,0.18-0.53,0.1-0.77\n           c-0.08-0.24-0.23-0.48-0.46-0.6c-0.08-0.03-0.16-0.07-0.24-0.1C313.53,268.18,313.35,268.18,313.18,268.23L313.18,268.23z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M287.49,268.91c0.48-0.02,0.96-0.04,1.43-0.05c0.26-0.01,0.52-0.1,0.71-0.29c0.1-0.09,0.17-0.2,0.21-0.32\n           c0.06-0.12,0.09-0.25,0.09-0.39c-0.01-0.26-0.1-0.53-0.29-0.71c-0.19-0.18-0.44-0.3-0.71-0.29c-0.48,0.02-0.96,0.04-1.43,0.05\n           c-0.26,0.01-0.52,0.1-0.71,0.29c-0.1,0.09-0.17,0.2-0.21,0.32c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.26,0.1,0.53,0.29,0.71\n           C286.98,268.79,287.22,268.92,287.49,268.91L287.49,268.91z\"/>\n   </g>\n</g>\n\n   <ellipse transform=\"matrix(0.9994 -0.0337 0.0337 0.9994 -6.9519 11.9235)\" class=\"st5\" cx=\"350.19\" cy=\"212.16\" rx=\"5.36\" ry=\"5.36\"/>\n<path class=\"st5\" d=\"M318.45,214c2.63-0.63,6.69-1.39,11.72-1.43c3.38-0.02,7.48,0.28,7.49,0.69c0.01,0.42-4.24,0.91-7.28,1.1\n   C325.33,214.69,321.19,214.35,318.45,214z\"/>\n<path class=\"st5\" d=\"M318.22,211.29c2.14-1.66,5.52-4.02,10.08-6.13c3.07-1.42,6.93-2.83,7.11-2.46c0.19,0.38-3.49,2.58-6.17,4.01\n   C324.77,209.08,320.86,210.47,318.22,211.29z\"/>\n<path class=\"st5\" d=\"M318.37,216.76c2.64,0.6,6.61,1.71,11.14,3.9c3.04,1.47,6.58,3.55,6.41,3.93c-0.18,0.38-4.21-1.06-7.02-2.23\n   C324.23,220.42,320.67,218.29,318.37,216.76z\"/>\n<path class=\"st3\" d=\"M340.82,197.52c-0.23-0.03-0.28,0.78-1,1.55c-0.77,0.83-1.69,0.93-1.64,1.17c0.04,0.23,0.88,0.04,2,0.44\n   c1.01,0.36,1.44,0.9,1.63,0.75c0.19-0.16-0.25-0.74-0.56-1.98C340.95,198.28,341.03,197.55,340.82,197.52z\"/>\n<path class=\"st3\" d=\"M343.17,223.37c-0.18-0.15-0.65,0.52-1.67,0.79c-1.09,0.3-1.93-0.1-2.01,0.13c-0.09,0.22,0.72,0.5,1.46,1.43\n   c0.67,0.84,0.75,1.53,0.99,1.49c0.25-0.03,0.19-0.76,0.57-1.97C342.89,224.08,343.34,223.51,343.17,223.37z\"/>\n<g>\n   <g>\n       <path d=\"M351.71,212.08c0.18-0.44,1.08-0.73,1.45-0.92c0.6-0.3,1.21-0.6,1.82-0.9c0.35-0.17,0.7-0.33,1.05-0.49\n           c0.13-0.06,0.66-0.29,0.2-0.09c0.88-0.37,1.76-0.8,2.68-1.04c0.09-0.02,0.18-0.03,0.26-0.06c0.23-0.07-0.26,0.01-0.07,0.01\n           c0.61-0.01,1.18-0.09,1.79,0.08c1.96,0.56,2.98,2.85,2.21,4.67c-1.04,2.45-3.91,1.7-5.89,1.21c-1.11-0.27-2.14-0.77-3.25-1.06\n           c-0.68-0.18-1.37-0.36-1.98-0.71c-0.07-0.04-0.14-0.09-0.22-0.13c0.12,0.07-0.08-0.16-0.01,0c0.1,0.22-0.05-0.13-0.04-0.07\n           C351.68,212.38,351.65,212.3,351.71,212.08c0.34-1.24-1.59-1.77-1.93-0.53c-0.2,0.74-0.13,1.57,0.32,2.22\n           c0.38,0.55,0.99,0.84,1.59,1.09c0.75,0.31,1.53,0.49,2.31,0.73c0.55,0.17,1.07,0.42,1.62,0.6c1.44,0.47,3.01,0.79,4.52,0.89\n           c1.35,0.09,2.74-0.43,3.71-1.36c2.12-2.01,1.87-5.46-0.03-7.51c-1.19-1.29-2.93-1.8-4.64-1.62c-0.79,0.08-1.5,0.34-2.24,0.64\n           c-0.94,0.38-1.79,0.75-2.72,1.19c-0.8,0.38-1.59,0.77-2.37,1.17c-0.92,0.47-1.66,0.96-2.06,1.96c-0.2,0.5,0.22,1.1,0.7,1.23\n           C351.05,212.94,351.51,212.59,351.71,212.08z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M350.23,211.17c-0.54-0.26-0.71-0.91-0.94-1.44c-0.25-0.59-0.5-1.18-0.74-1.78c-0.21-0.52-0.41-1.05-0.61-1.58\n           c-0.31-0.86-0.65-1.73-0.84-2.63c-0.02-0.1-0.04-0.21-0.06-0.31c0.07,0.35,0.01,0.11,0.01,0.01c0-0.48-0.02-0.95,0.1-1.42\n           c0.17-0.67,0.53-1.26,1.06-1.71c0.17-0.14,0.35-0.26,0.54-0.37c0.09-0.05,0.17-0.09,0.26-0.14c0.08-0.04,0.27-0.12,0.08-0.04\n           c0.89-0.36,1.88-0.43,2.75-0.07c2.62,1.09,1.68,3.98,1.04,6.05c-0.33,1.05-0.86,2-1.22,3.04c-0.24,0.69-0.46,1.37-0.84,2\n           c-0.05,0.08-0.11,0.16-0.16,0.25c0.02-0.03-0.26,0.15,0.01,0.02c-0.25,0.13-0.43,0.11-0.69,0.02c-1.22-0.41-1.75,1.52-0.53,1.93\n           c1.65,0.55,2.77-0.44,3.43-1.84c0.35-0.74,0.56-1.51,0.86-2.26c0.21-0.51,0.47-0.99,0.67-1.5c0.55-1.37,0.95-2.86,1.15-4.32\n           c0.2-1.43-0.24-2.9-1.21-3.99c-1.94-2.18-5.37-2.03-7.5-0.24c-2.07,1.75-2.08,4.42-1.3,6.77c0.29,0.88,0.61,1.75,0.95,2.61\n           c0.32,0.81,0.66,1.61,1,2.41c0.38,0.9,0.77,1.81,1.7,2.26C350.38,213.46,351.39,211.73,350.23,211.17z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M350,213.1c0.51,0.16,0.81,0.92,1.06,1.33c0.35,0.58,0.69,1.16,1.03,1.74c0.27,0.47,0.54,0.95,0.79,1.43\n           c0.75,1.41,1.61,2.66,1.3,4.35c-0.36,1.99-2.55,3.21-4.44,2.64c-2.55-0.77-2.06-3.73-1.73-5.72c0.19-1.13,0.6-2.2,0.81-3.32\n           c0.13-0.68,0.25-1.4,0.54-2.04c0.03-0.08,0.08-0.15,0.12-0.23c0.1-0.19-0.1,0.01,0.06-0.09C349.62,213.12,349.8,213.06,350,213.1\n           c1.26,0.24,1.8-1.69,0.53-1.93c-0.82-0.16-1.72-0.04-2.36,0.55c-0.43,0.4-0.66,0.97-0.85,1.51c-0.27,0.77-0.38,1.57-0.56,2.36\n           c-0.13,0.56-0.34,1.1-0.47,1.66c-0.36,1.47-0.58,3.06-0.57,4.57c0.01,1.34,0.58,2.72,1.58,3.62c2.15,1.94,5.57,1.58,7.49-0.49\n           c1.26-1.35,1.59-3.09,1.31-4.87c-0.12-0.76-0.47-1.46-0.8-2.14c-0.42-0.86-0.88-1.71-1.35-2.54c-0.44-0.77-0.89-1.52-1.35-2.28\n           c-0.53-0.86-1.07-1.64-2.07-1.95C349.3,210.78,348.77,212.71,350,213.1z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M349.01,212.58c-0.18,0.43-1.09,0.72-1.46,0.9c-0.6,0.3-1.21,0.6-1.82,0.89c-0.35,0.16-0.7,0.33-1.05,0.48\n           c-0.09,0.04-0.19,0.08-0.28,0.12c-0.21,0.1,0.23-0.1,0.08-0.03c-0.88,0.37-1.76,0.79-2.69,1.03c-0.09,0.02-0.18,0.03-0.26,0.06\n           c-0.14,0.04,0.29-0.02,0.07-0.01c-0.61,0.03-1.19,0.08-1.79-0.1c-1-0.29-1.7-1.04-2.13-1.95c-0.1-0.21,0.08,0.24-0.03-0.08\n           c-0.04-0.1-0.07-0.2-0.1-0.3c-0.07-0.23-0.13-0.47-0.15-0.71c-0.05-0.55,0.03-1.13,0.25-1.64c1.07-2.47,3.87-1.68,5.9-1.17\n           c1.11,0.28,2.14,0.78,3.25,1.08c0.68,0.18,1.36,0.37,1.98,0.72c0.07,0.04,0.14,0.09,0.22,0.13c-0.12-0.07,0.07,0.16,0.01,0\n           c-0.09-0.23,0.04,0.13,0.03,0.07C349.05,212.29,349.07,212.36,349.01,212.58c-0.34,1.24,1.58,1.77,1.93,0.53\n           c0.21-0.74,0.13-1.57-0.31-2.22c-0.37-0.54-0.97-0.83-1.55-1.08c-0.76-0.33-1.55-0.51-2.34-0.76c-0.55-0.17-1.07-0.43-1.62-0.61\n           c-1.44-0.48-3-0.8-4.51-0.92c-1.35-0.1-2.74,0.42-3.72,1.34c-2.13,2-1.89,5.45-0.01,7.51c1.18,1.3,2.92,1.81,4.64,1.65\n           c0.79-0.08,1.51-0.34,2.24-0.63c0.93-0.37,1.8-0.75,2.73-1.18c0.8-0.37,1.59-0.76,2.38-1.16c0.93-0.47,1.66-0.96,2.07-1.95\n           c0.2-0.5-0.22-1.1-0.7-1.23C349.67,211.73,349.22,212.08,349.01,212.58z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M351.49,194.29c0.02,0,0.04,0,0.06,0c0.14,0.01,0.27-0.02,0.39-0.09c0.12-0.04,0.23-0.11,0.32-0.21\n           c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39c-0.01-0.09-0.02-0.18-0.04-0.27c-0.05-0.17-0.13-0.32-0.26-0.44\n           c-0.07-0.05-0.13-0.1-0.2-0.16c-0.16-0.09-0.32-0.14-0.5-0.14c-0.02,0-0.04,0-0.06,0c-0.14-0.01-0.27,0.02-0.39,0.09\n           c-0.12,0.04-0.23,0.11-0.32,0.21c-0.1,0.09-0.17,0.2-0.21,0.32c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.09,0.02,0.18,0.04,0.27\n           c0.05,0.17,0.13,0.32,0.26,0.44c0.07,0.05,0.13,0.1,0.2,0.16C351.15,194.24,351.31,194.28,351.49,194.29L351.49,194.29z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M343.7,195.71c-0.02,0.04-0.07,0.16-0.05,0.12c0.04-0.09-0.04,0.08-0.05,0.12c0,0-0.04,0.27-0.04,0.27c0,0,0,0,0,0\n           c0,0.01,0.04,0.26,0.04,0.27c0.02,0.08,0.05,0.17,0.1,0.24c0.02,0.04,0.05,0.07,0.08,0.1c0.08,0.11,0.05,0.07,0.08,0.1\n           c0.1,0.11,0.3,0.23,0.45,0.26c0,0,0,0,0,0c0.01,0,0.26,0.04,0.27,0.04c0,0,0,0,0.01,0c0,0,0,0,0,0c0.01,0,0.26-0.03,0.27-0.04\n           c0,0,0,0,0.01,0c0,0,0.24-0.1,0.24-0.1c0,0,0,0,0,0c0.08-0.04,0.15-0.1,0.21-0.16c0.01-0.01,0.15-0.2,0.16-0.2c0,0,0,0,0,0\n           c0.05-0.07,0.08-0.16,0.1-0.24c0,0,0.04-0.26,0.04-0.27c0,0,0,0,0,0c0,0-0.04-0.26-0.04-0.27c0,0-0.1-0.24-0.1-0.24c0,0,0,0,0,0\n           c-0.06-0.12-0.15-0.21-0.26-0.28c-0.1-0.09-0.21-0.15-0.34-0.18c-0.13-0.04-0.27-0.05-0.4-0.02c-0.13,0.01-0.26,0.05-0.37,0.12\n           c-0.07,0.05-0.13,0.1-0.2,0.16c-0.12,0.12-0.21,0.27-0.26,0.44c-0.01,0.09-0.02,0.18-0.04,0.27c0,0.18,0.05,0.35,0.14,0.5\n           c0,0,0,0,0,0c-0.03-0.08-0.07-0.16-0.1-0.24c0,0,0,0,0,0c-0.01-0.09-0.02-0.18-0.04-0.27c0,0,0,0,0,0\n           c0.01-0.09,0.02-0.18,0.04-0.27c0,0,0,0,0,0c0.03-0.08,0.07-0.16,0.1-0.24c0,0,0,0,0,0c0.05-0.07,0.1-0.13,0.16-0.2c0,0,0,0,0,0\n           c0.07-0.05,0.13-0.1,0.2-0.16c0,0,0,0-0.01,0c0.08-0.03,0.16-0.07,0.24-0.1c0,0-0.01,0-0.01,0c0.09-0.01,0.18-0.02,0.27-0.04\n           c0,0-0.01,0-0.01,0c0.09,0.01,0.18,0.02,0.27,0.04c0,0,0,0-0.01,0c0.08,0.03,0.16,0.07,0.24,0.1c0,0,0,0,0,0\n           c0.07,0.05,0.13,0.1,0.2,0.16c0,0,0,0,0,0c0.05,0.07,0.1,0.13,0.16,0.2c0,0,0,0,0,0c0.03,0.08,0.07,0.16,0.1,0.24c0,0,0,0,0,0\n           c0.01,0.09,0.02,0.18,0.04,0.27c0,0,0,0,0,0c-0.01,0.09-0.02,0.18-0.04,0.27c0,0,0,0,0,0c-0.03,0.08-0.07,0.16-0.1,0.24\n           c0,0,0,0,0,0c0.07-0.11,0.11-0.24,0.12-0.37c0.03-0.13,0.02-0.27-0.02-0.4c-0.03-0.13-0.09-0.24-0.18-0.34\n           c-0.07-0.11-0.16-0.19-0.28-0.26c-0.08-0.03-0.16-0.07-0.24-0.1c-0.18-0.05-0.35-0.05-0.53,0c-0.08,0.03-0.16,0.07-0.24,0.1\n           C343.91,195.44,343.79,195.56,343.7,195.71L343.7,195.71z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M350.29,206.17c1.29,0,1.29-2,0-2C349.01,204.17,349,206.17,350.29,206.17L350.29,206.17z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M343.05,213.74c0.01,0,0.02,0,0.04,0c1.28-0.04,1.29-2.04,0-2c-0.01,0-0.02,0-0.04,0\n           C341.77,211.79,341.76,213.79,343.05,213.74c0.01,0,0.02,0,0.04,0c1.28-0.04,1.29-2.04,0-2c-0.01,0-0.02,0-0.04,0\n           C341.77,211.79,341.76,213.79,343.05,213.74L343.05,213.74z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M349.48,219.25c0,0.02,0,0.04,0,0.06c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32\n           c0.09,0.1,0.2,0.17,0.32,0.21c0.12,0.06,0.25,0.09,0.39,0.09c0.09-0.01,0.18-0.02,0.27-0.04c0.17-0.05,0.32-0.13,0.44-0.26\n           c0.05-0.07,0.1-0.13,0.16-0.2c0.09-0.16,0.14-0.32,0.14-0.5c0-0.02,0-0.04,0-0.06c0.01-0.14-0.02-0.27-0.09-0.39\n           c-0.04-0.12-0.11-0.23-0.21-0.32c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.09,0.01-0.18,0.02-0.27,0.04\n           c-0.17,0.05-0.32,0.13-0.44,0.26c-0.05,0.07-0.1,0.13-0.16,0.2C349.53,218.9,349.48,219.07,349.48,219.25L349.48,219.25z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M351.56,225.25c-0.04-0.48-0.08-0.95-0.12-1.43c0.01-0.14-0.02-0.27-0.09-0.39c-0.04-0.12-0.11-0.23-0.21-0.32\n           c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.26,0.01-0.53,0.1-0.71,0.29c-0.17,0.19-0.32,0.45-0.29,0.71\n           c0.04,0.48,0.08,0.95,0.12,1.43c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32c0.09,0.1,0.2,0.17,0.32,0.21\n           c0.12,0.06,0.25,0.09,0.39,0.09c0.26-0.01,0.53-0.1,0.71-0.29C351.44,225.78,351.58,225.52,351.56,225.25L351.56,225.25z\"/>\n   </g>\n</g>\n<path class=\"st3\" d=\"M298.67,215.44l52.3-27.69c0.7,0.31,14.61,6.65,16.59,21.88c1.34,10.32-3.33,20.62-12.04,26.56\n   C336.57,229.28,317.62,222.36,298.67,215.44\"/>\n<g>\n   <g>\n       <path d=\"M349.26,199.1c0.07,0.54,0.11,1.09,0.11,1.63c0,0.26,0.11,0.52,0.29,0.71c0.17,0.17,0.46,0.3,0.71,0.29\n           c0.26-0.01,0.53-0.1,0.71-0.29c0.18-0.19,0.3-0.44,0.29-0.71c-0.01-0.55-0.04-1.09-0.11-1.63c0.01-0.14-0.02-0.27-0.09-0.39\n           c-0.04-0.12-0.11-0.23-0.21-0.32c-0.17-0.17-0.46-0.3-0.71-0.29c-0.26,0.01-0.53,0.1-0.71,0.29c-0.05,0.07-0.1,0.13-0.16,0.2\n           C349.31,198.75,349.26,198.91,349.26,199.1L349.26,199.1z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M364.33,211.03c-0.64,0.04-1.29,0.07-1.93,0.11c-0.27,0.02-0.52,0.1-0.71,0.29c-0.17,0.17-0.3,0.46-0.29,0.71\n           c0.01,0.26,0.1,0.53,0.29,0.71c0.19,0.17,0.44,0.31,0.71,0.29c0.64-0.04,1.29-0.07,1.93-0.11c0.27-0.02,0.52-0.1,0.71-0.29\n           c0.17-0.17,0.3-0.46,0.29-0.71c-0.01-0.26-0.1-0.53-0.29-0.71C364.85,211.15,364.59,211.01,364.33,211.03L364.33,211.03z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M362.25,203.54c0.03-0.03,0.06-0.06,0.09-0.09c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39\n           c0.01-0.14-0.02-0.27-0.09-0.39c-0.04-0.12-0.11-0.23-0.21-0.32c-0.07-0.05-0.13-0.1-0.2-0.16c-0.16-0.09-0.32-0.14-0.5-0.14\n           c-0.09,0.01-0.18,0.02-0.27,0.04c-0.17,0.05-0.32,0.13-0.44,0.26c-0.03,0.03-0.06,0.06-0.09,0.09c-0.1,0.09-0.17,0.2-0.21,0.32\n           c-0.06,0.12-0.09,0.25-0.09,0.39c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32c0.07,0.05,0.13,0.1,0.2,0.16\n           c0.16,0.09,0.32,0.14,0.5,0.14c0.09-0.01,0.18-0.02,0.27-0.04C361.97,203.75,362.12,203.66,362.25,203.54L362.25,203.54z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M363.91,220.33c0-0.02,0-0.04,0-0.05c0-1.29-2-1.29-2,0c0,0.02,0,0.04,0,0.05C361.91,221.62,363.91,221.62,363.91,220.33\n           c0-0.02,0-0.04,0-0.05c0-1.29-2-1.29-2,0c0,0.02,0,0.04,0,0.05C361.91,221.62,363.91,221.62,363.91,220.33L363.91,220.33z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M347.82,229.7c0.03-0.03,0.05-0.06,0.08-0.09c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39\n           c0.01-0.14-0.02-0.27-0.09-0.39c-0.04-0.12-0.11-0.23-0.21-0.32c-0.07-0.05-0.13-0.1-0.2-0.16c-0.16-0.09-0.32-0.14-0.5-0.14\n           c-0.09,0.01-0.18,0.02-0.27,0.04c-0.17,0.05-0.32,0.13-0.44,0.26c-0.03,0.03-0.05,0.06-0.08,0.09c-0.1,0.09-0.17,0.2-0.21,0.32\n           c-0.06,0.12-0.09,0.25-0.09,0.39c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32c0.07,0.05,0.13,0.1,0.2,0.16\n           c0.16,0.09,0.32,0.14,0.5,0.14c0.09-0.01,0.18-0.02,0.27-0.04C347.55,229.91,347.7,229.83,347.82,229.7L347.82,229.7z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M354.69,230.82c0.02-0.02,0.04-0.04,0.05-0.05c0.91-0.91-0.5-2.33-1.41-1.41c-0.02,0.02-0.04,0.04-0.05,0.05\n           C352.37,230.32,353.78,231.73,354.69,230.82c0.02-0.02,0.04-0.04,0.05-0.05c0.91-0.91-0.5-2.33-1.41-1.41\n           c-0.02,0.02-0.04,0.04-0.05,0.05C352.37,230.32,353.78,231.73,354.69,230.82L354.69,230.82z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M311.34,278.67c-0.01,0-0.03,0-0.04,0c-0.14-0.01-0.27,0.02-0.39,0.09c-0.12,0.04-0.23,0.11-0.32,0.21\n           c-0.1,0.09-0.17,0.2-0.21,0.32c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.09,0.02,0.18,0.04,0.27c0.05,0.17,0.13,0.32,0.26,0.44\n           c0.07,0.05,0.13,0.1,0.2,0.16c0.16,0.09,0.32,0.14,0.5,0.14c0.01,0,0.03,0,0.04,0c0.14,0.01,0.27-0.02,0.39-0.09\n           c0.12-0.04,0.23-0.11,0.32-0.21c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39c-0.01-0.09-0.02-0.18-0.04-0.27\n           c-0.05-0.17-0.13-0.32-0.26-0.44c-0.07-0.05-0.13-0.1-0.2-0.16C311.69,278.71,311.52,278.67,311.34,278.67L311.34,278.67z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M290.4,279.35c-0.01,0-0.03,0-0.04,0.01c-0.13,0.03-0.24,0.09-0.34,0.18c-0.11,0.07-0.19,0.16-0.26,0.28\n           c-0.07,0.11-0.11,0.24-0.12,0.37c-0.03,0.13-0.02,0.27,0.02,0.4c0.03,0.08,0.07,0.16,0.1,0.24c0.09,0.15,0.21,0.27,0.36,0.36\n           c0.08,0.03,0.16,0.07,0.24,0.1c0.18,0.05,0.35,0.05,0.53,0c0.01,0,0.03,0,0.04-0.01c0.13-0.03,0.24-0.09,0.34-0.18\n           c0.11-0.07,0.19-0.16,0.26-0.28c0.07-0.11,0.11-0.24,0.12-0.37c0.03-0.13,0.02-0.27-0.02-0.4c-0.03-0.08-0.07-0.16-0.1-0.24\n           c-0.09-0.15-0.21-0.27-0.36-0.36c-0.08-0.03-0.16-0.07-0.24-0.1C290.75,279.3,290.57,279.3,290.4,279.35L290.4,279.35z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M301.31,281.86c0.01-0.49,0.01-0.97-0.01-1.46c-0.01-0.26-0.1-0.52-0.29-0.71c-0.17-0.17-0.46-0.3-0.71-0.29\n           c-0.26,0.01-0.53,0.1-0.71,0.29c-0.18,0.19-0.3,0.44-0.29,0.71c0.02,0.49,0.02,0.97,0.01,1.46c-0.01,0.25,0.12,0.53,0.29,0.71\n           c0.17,0.17,0.46,0.3,0.71,0.29c0.26-0.01,0.53-0.1,0.71-0.29C301.2,282.36,301.31,282.13,301.31,281.86L301.31,281.86z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M283.75,263.62c0,0.01,0,0.03,0,0.04c-0.01,0.14,0.02,0.27,0.09,0.39c0.04,0.12,0.11,0.23,0.21,0.32\n           c0.09,0.1,0.2,0.17,0.32,0.21c0.12,0.06,0.25,0.09,0.39,0.09c0.09-0.01,0.18-0.02,0.27-0.04c0.17-0.05,0.32-0.13,0.44-0.26\n           c0.05-0.07,0.1-0.13,0.16-0.2c0.09-0.16,0.14-0.32,0.14-0.5c0-0.01,0-0.03,0-0.04c0.01-0.14-0.02-0.27-0.09-0.39\n           c-0.04-0.12-0.11-0.23-0.21-0.32c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.09,0.01-0.18,0.02-0.27,0.04\n           c-0.17,0.05-0.32,0.13-0.44,0.26c-0.05,0.07-0.1,0.13-0.16,0.2C283.79,263.27,283.75,263.44,283.75,263.62L283.75,263.62z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M282.64,272.22c1.29,0,1.29-2,0-2C281.35,270.22,281.35,272.22,282.64,272.22L282.64,272.22z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M300.58,276.39C300.58,276.39,300.59,276.39,300.58,276.39c-0.08,0.01-0.17,0.02-0.26,0.03c0,0,0.01,0,0.01,0\n           c-0.09-0.01-0.18-0.02-0.27-0.04c0,0,0,0,0.01,0c-0.08-0.03-0.16-0.07-0.24-0.1c0,0,0.01,0,0.01,0.01\n           c-0.07-0.05-0.13-0.1-0.2-0.16c0,0,0,0,0.01,0.01c-0.05-0.07-0.1-0.13-0.16-0.2c0,0,0,0.01,0.01,0.01\n           c-0.03-0.08-0.07-0.16-0.1-0.24c0,0,0,0,0,0.01c-0.01-0.09-0.02-0.18-0.04-0.27c0,0,0,0.01,0,0.01c0.01-0.09,0.02-0.18,0.04-0.27\n           c0,0,0,0,0,0c-0.04,0.13-0.05,0.27-0.02,0.4c0.01,0.13,0.05,0.26,0.12,0.37c0.06,0.12,0.15,0.21,0.26,0.28\n           c0.1,0.09,0.21,0.15,0.34,0.18c0.09,0.01,0.18,0.02,0.27,0.04c0.18,0,0.35-0.05,0.5-0.14c0.07-0.05,0.13-0.1,0.2-0.16\n           c0.12-0.12,0.21-0.27,0.26-0.44c0,0,0,0,0,0c0.01-0.09,0.02-0.18,0.04-0.27c0,0,0,0,0-0.01c0-0.09-0.01-0.19-0.04-0.27\n           c0-0.01-0.1-0.24-0.1-0.24c0,0,0,0,0,0c0,0,0,0,0,0c-0.03-0.03-0.05-0.07-0.08-0.1c-0.01-0.02-0.05-0.07-0.08-0.11c0,0,0,0,0,0\n           c-0.07-0.05-0.13-0.1-0.2-0.16c0,0,0,0,0,0s0,0,0,0c-0.08-0.03-0.16-0.07-0.24-0.1c0,0,0,0,0,0c-0.09-0.02-0.18-0.04-0.27-0.04\n           c-0.05,0-0.03,0-0.14,0.02c0.04-0.01-0.1,0.01-0.14,0.02c-0.13,0.03-0.24,0.09-0.34,0.18c-0.11,0.07-0.19,0.16-0.26,0.28\n           c-0.07,0.11-0.11,0.24-0.12,0.37c-0.03,0.13-0.02,0.27,0.02,0.4c0.03,0.08,0.07,0.16,0.1,0.24c0.09,0.15,0.21,0.27,0.36,0.36\n           c0.08,0.03,0.16,0.07,0.24,0.1C300.23,276.44,300.41,276.44,300.58,276.39L300.58,276.39z\"/>\n   </g>\n</g>\n\n   <ellipse transform=\"matrix(0.0475 -0.9989 0.9989 0.0475 24.1074 450.127)\" class=\"st5\" cx=\"248.06\" cy=\"212.42\" rx=\"5.36\" ry=\"5.36\"/>\n<path class=\"st5\" d=\"M279.84,213.16c-2.67,0.42-6.78,0.84-11.79,0.47c-3.37-0.25-7.43-0.88-7.41-1.3c0.02-0.42,4.3-0.56,7.34-0.51\n   C273.05,211.91,277.14,212.59,279.84,213.16z\"/>\n<path class=\"st5\" d=\"M279.85,215.89c-2.26,1.48-5.83,3.56-10.55,5.29c-3.17,1.16-7.13,2.26-7.28,1.87\n   c-0.15-0.39,3.69-2.29,6.48-3.49C273.15,217.55,277.16,216.48,279.85,215.89z\"/>\n<path class=\"st5\" d=\"M280.15,210.42c-2.58-0.81-6.45-2.24-10.79-4.79c-2.91-1.71-6.27-4.08-6.07-4.44c0.21-0.37,4.11,1.4,6.81,2.79\n   C274.6,206.29,277.98,208.71,280.15,210.42z\"/>\n<path class=\"st3\" d=\"M256.21,227.77c0.22,0.05,0.34-0.76,1.12-1.47c0.84-0.76,1.76-0.79,1.73-1.03c-0.03-0.23-0.87-0.11-1.95-0.6\n   c-0.98-0.44-1.36-1.01-1.56-0.88c-0.21,0.14,0.18,0.76,0.39,2.02C256.14,227.01,256,227.73,256.21,227.77z\"/>\n<path class=\"st3\" d=\"M255.96,201.82c0.16,0.16,0.69-0.46,1.72-0.65c1.11-0.21,1.91,0.26,2.02,0.04c0.1-0.21-0.68-0.56-1.34-1.54\n   c-0.6-0.89-0.62-1.58-0.86-1.57c-0.25,0.01-0.25,0.74-0.73,1.92C256.31,201.13,255.81,201.67,255.96,201.82z\"/>\n<g>\n   <g>\n       <path d=\"M246.61,212.21c-0.26,0.52-0.92,0.69-1.43,0.89c-0.6,0.25-1.21,0.49-1.82,0.72c-0.53,0.2-1.05,0.4-1.59,0.58\n           c-0.87,0.3-1.74,0.62-2.64,0.8c-0.14,0.03-0.38,0.04-0.1,0.02c-0.07,0-0.14,0.01-0.2,0.01c-0.48,0.01-0.95,0-1.42-0.12\n           c-2.02-0.54-3.06-2.87-2.23-4.74c1.15-2.59,4-1.6,6.08-0.92c1.04,0.34,1.99,0.89,3.02,1.27c0.68,0.25,1.36,0.48,1.98,0.87\n           c0.08,0.05,0.16,0.11,0.24,0.16c-0.03-0.02,0.13,0.26,0.01,0c0.12,0.25,0.09,0.43,0,0.69c-0.43,1.22,1.5,1.74,1.93,0.53\n           c0.58-1.65-0.42-2.78-1.8-3.45c-0.71-0.35-1.47-0.56-2.19-0.87c-0.52-0.22-1.02-0.5-1.54-0.72c-1.34-0.56-2.8-0.99-4.24-1.21\n           c-1.46-0.22-2.94,0.18-4.06,1.15c-2.2,1.91-2.11,5.35-0.33,7.49c1.73,2.09,4.39,2.14,6.75,1.4c0.88-0.28,1.76-0.58,2.62-0.91\n           c0.8-0.31,1.6-0.62,2.4-0.95c0.91-0.38,1.84-0.75,2.3-1.68C248.92,212.08,247.19,211.06,246.61,212.21z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M248.01,213.59c0.48,0.28,0.6,1.03,0.76,1.51c0.21,0.62,0.41,1.24,0.6,1.86c0.17,0.54,0.33,1.08,0.48,1.62\n           c0.13,0.49,0.27,0.99,0.39,1.49c0.05,0.22,0.1,0.45,0.15,0.68c0.02,0.08,0.1,0.6,0.06,0.33c0.07,0.6,0.01,1.22-0.17,1.79\n           c-0.32,1.03-1.21,1.82-2.14,2.13c-0.34,0.11-0.69,0.19-1.05,0.21c-0.33,0.01-0.64-0.01-0.96-0.09c-0.19-0.05-0.38-0.11-0.57-0.19\n           c0.23,0.09-0.07-0.04-0.12-0.06c-0.99-0.54-1.6-1.47-1.61-2.61c-0.01-1.15,0.58-2.41,0.99-3.47c0.33-0.84,0.99-1.87,1.42-2.83\n           c0.3-0.69,0.58-1.38,1.02-2.01c0.04-0.06,0.08-0.12,0.12-0.18c0.07-0.09,0.34-0.25,0.13-0.16\n           C247.66,213.56,247.82,213.51,248.01,213.59c0.5,0.21,1.07,0.15,1.37-0.36c0.25-0.42,0.14-1.16-0.36-1.37\n           c-0.79-0.34-1.69-0.46-2.47,0c-0.55,0.33-0.92,0.9-1.24,1.44c-0.39,0.66-0.65,1.37-0.98,2.06c-0.26,0.52-0.58,1-0.83,1.53\n           c-0.65,1.33-1.21,2.79-1.53,4.24c-0.32,1.46,0,3.01,0.93,4.19c1.81,2.28,5.26,2.43,7.49,0.71c1.36-1.05,1.99-2.6,2.08-4.28\n           c0.04-0.77-0.15-1.54-0.32-2.28c-0.22-0.91-0.47-1.81-0.74-2.7c-0.26-0.84-0.53-1.68-0.81-2.52c-0.32-0.95-0.66-1.85-1.57-2.38\n           C247.9,211.21,246.9,212.94,248.01,213.59z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M248.25,211.48c-0.43-0.18-0.72-1.09-0.91-1.46c-0.3-0.6-0.6-1.21-0.89-1.82c-0.16-0.35-0.33-0.7-0.48-1.05\n           c-0.04-0.09-0.08-0.19-0.12-0.28c-0.1-0.21,0.1,0.23,0.03,0.08c-0.37-0.88-0.79-1.76-1.03-2.69c-0.02-0.09-0.03-0.18-0.06-0.26\n           c-0.04-0.14,0.02,0.29,0.01,0.07c-0.03-0.61-0.08-1.19,0.1-1.79c0.29-1,1.04-1.7,1.95-2.13c0.21-0.1-0.24,0.08,0.08-0.03\n           c0.1-0.04,0.2-0.07,0.3-0.1c0.23-0.07,0.47-0.13,0.71-0.15c0.55-0.05,1.13,0.03,1.64,0.25c2.47,1.07,1.68,3.87,1.17,5.9\n           c-0.28,1.11-0.78,2.14-1.08,3.25c-0.18,0.68-0.37,1.36-0.72,1.98c-0.04,0.07-0.09,0.14-0.13,0.22c0.07-0.12-0.16,0.07,0,0.01\n           c0.23-0.09-0.13,0.04-0.07,0.03C248.54,211.52,248.47,211.54,248.25,211.48c-1.24-0.34-1.77,1.58-0.53,1.93\n           c0.74,0.21,1.57,0.13,2.22-0.31c0.54-0.37,0.83-0.97,1.08-1.55c0.33-0.76,0.51-1.55,0.76-2.34c0.17-0.55,0.43-1.07,0.61-1.62\n           c0.48-1.44,0.8-3,0.92-4.51c0.1-1.35-0.42-2.74-1.34-3.72c-2-2.13-5.45-1.89-7.51-0.01c-1.3,1.18-1.81,2.92-1.64,4.64\n           c0.08,0.79,0.34,1.51,0.63,2.24c0.37,0.93,0.75,1.8,1.18,2.73c0.37,0.8,0.76,1.59,1.16,2.38c0.47,0.93,0.96,1.66,1.95,2.07\n           c0.5,0.2,1.1-0.22,1.23-0.7C249.11,212.14,248.75,211.69,248.25,211.48z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M249.19,212.26c0.27-0.52,0.93-0.68,1.44-0.88c0.6-0.24,1.21-0.48,1.82-0.71c0.53-0.2,1.06-0.39,1.59-0.57\n           c0.87-0.29,1.75-0.58,2.65-0.78c0.07-0.02,0.14-0.02,0.2-0.04c-0.29,0.06-0.17,0.02-0.11,0.01c0.07,0,0.14-0.01,0.2-0.01\n           c0.48-0.02,0.96,0.01,1.42,0.13c0.67,0.18,1.25,0.57,1.68,1.11c0.14,0.17,0.25,0.36,0.35,0.55c0.05,0.09,0.09,0.18,0.13,0.27\n           c0.12,0.26-0.04-0.11,0.03,0.08c0.33,0.91,0.36,1.96,0,2.75c-1.2,2.57-3.99,1.58-6.08,0.88c-1.04-0.35-1.98-0.9-3.01-1.29\n           c-0.68-0.25-1.36-0.49-1.98-0.88c-0.08-0.05-0.16-0.11-0.24-0.16c0.02,0.02-0.13-0.27-0.01,0c-0.11-0.26-0.08-0.43,0.01-0.69\n           c0.43-1.21-1.5-1.74-1.93-0.53c-0.59,1.64,0.42,2.78,1.79,3.46c0.71,0.35,1.46,0.57,2.19,0.88c0.52,0.23,1.01,0.51,1.54,0.73\n           c2.6,1.08,5.9,2.16,8.3,0.1c2.21-1.9,2.13-5.34,0.37-7.49c-1.11-1.35-2.82-1.95-4.53-1.89c-0.76,0.02-1.5,0.25-2.22,0.47\n           c-0.88,0.27-1.76,0.57-2.63,0.9c-0.81,0.3-1.61,0.62-2.4,0.94c-0.92,0.37-1.84,0.74-2.31,1.67\n           C246.89,212.4,248.61,213.41,249.19,212.26z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M245.23,230.13c-0.02,0-0.04,0-0.06,0c-0.14-0.01-0.27,0.02-0.39,0.09c-0.12,0.04-0.23,0.11-0.32,0.21\n           c-0.1,0.09-0.17,0.2-0.21,0.32c-0.06,0.12-0.09,0.25-0.09,0.39c0.01,0.09,0.02,0.18,0.04,0.27c0.05,0.17,0.13,0.32,0.26,0.44\n           c0.07,0.05,0.13,0.1,0.2,0.16c0.16,0.09,0.32,0.14,0.5,0.14c0.02,0,0.04,0,0.06,0c0.14,0.01,0.27-0.02,0.39-0.09\n           c0.12-0.04,0.23-0.11,0.32-0.21c0.1-0.09,0.17-0.2,0.21-0.32c0.06-0.12,0.09-0.25,0.09-0.39c-0.01-0.09-0.02-0.18-0.04-0.27\n           c-0.05-0.17-0.13-0.32-0.26-0.44c-0.07-0.05-0.13-0.1-0.2-0.16C245.58,230.18,245.41,230.13,245.23,230.13L245.23,230.13z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M253.24,229.28c0.05-0.07,0.08-0.16,0.1-0.24c0.01-0.05,0-0.03,0.02-0.14c0.02-0.12,0.02-0.09,0.02-0.14\n           c0-0.09-0.01-0.18-0.04-0.27c0-0.01-0.1-0.23-0.1-0.24c-0.04-0.08-0.1-0.15-0.16-0.21c-0.03-0.03-0.09-0.07-0.1-0.08\n           c-0.03-0.03-0.07-0.05-0.1-0.08c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.24-0.1-0.24-0.1c-0.09-0.03-0.18-0.03-0.28-0.04c0,0,0,0-0.01,0\n           c-0.01,0-0.26,0.03-0.27,0.04c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.24,0.1-0.24,0.1c0,0,0,0,0,0c0,0-0.2,0.16-0.2,0.16\n           c-0.06,0.06-0.12,0.13-0.16,0.21c0,0-0.1,0.24-0.1,0.24c-0.01,0.04-0.01,0.08-0.02,0.13c-0.02,0.16-0.04,0.22,0.02,0.4\n           c0,0,0,0,0,0c0.03,0.08,0.07,0.16,0.1,0.24c0,0,0,0,0,0c0.06,0.12,0.15,0.21,0.26,0.28c0.1,0.09,0.21,0.15,0.34,0.18\n           c0.13,0.04,0.27,0.05,0.4,0.02c0.13-0.01,0.26-0.05,0.37-0.12c0.07-0.05,0.13-0.1,0.2-0.16c0.12-0.12,0.21-0.27,0.26-0.44\n           c0.01-0.09,0.02-0.18,0.04-0.27c0-0.18-0.05-0.35-0.14-0.5c0,0,0,0,0,0c0.03,0.08,0.07,0.16,0.1,0.24c0,0,0,0,0,0\n           c0.01,0.09,0.02,0.18,0.04,0.27c0,0,0,0,0,0c-0.01,0.09-0.02,0.18-0.04,0.27c0,0,0,0,0,0c-0.03,0.08-0.07,0.16-0.1,0.24\n           c0,0,0,0,0,0c-0.05,0.07-0.1,0.13-0.16,0.2c0,0,0,0,0,0c-0.07,0.05-0.13,0.1-0.2,0.16c0,0,0,0,0,0c-0.08,0.03-0.16,0.07-0.24,0.1\n           c0,0,0.01,0,0.01,0c-0.09,0.01-0.18,0.02-0.27,0.04c0,0,0.01,0,0.01,0c-0.09-0.01-0.18-0.02-0.27-0.04c0,0,0.01,0,0.01,0\n           c-0.08-0.03-0.16-0.07-0.24-0.1c0,0,0,0,0.01,0c-0.07-0.05-0.13-0.1-0.2-0.16c0,0,0,0,0,0c-0.05-0.07-0.1-0.13-0.16-0.2\n           c0,0,0,0,0,0c-0.03-0.08-0.07-0.16-0.1-0.24c0,0,0,0,0,0c-0.01-0.09-0.02-0.18-0.04-0.27c0,0,0,0,0,0\n           c0.01-0.09,0.02-0.18,0.04-0.27c0,0,0,0,0,0c0.03-0.08,0.07-0.16,0.1-0.24c0,0,0,0,0,0c-0.07,0.11-0.11,0.24-0.12,0.37\n           c-0.03,0.13-0.02,0.27,0.02,0.4c0.03,0.13,0.09,0.24,0.18,0.34c0.07,0.11,0.16,0.19,0.28,0.26c0.08,0.03,0.16,0.07,0.24,0.1\n           c0.18,0.05,0.35,0.05,0.53,0c0.08-0.03,0.16-0.07,0.24-0.1C253.03,229.55,253.15,229.43,253.24,229.28L253.24,229.28z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M247.39,220.38c1.29,0,1.29-2,0-2C246.1,218.38,246.1,220.38,247.39,220.38L247.39,220.38z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M255.22,211.42c-0.01,0-0.02,0-0.04,0c-1.29-0.06-1.28,1.94,0,2c0.01,0,0.02,0,0.04,0\n           C256.51,213.48,256.51,211.48,255.22,211.42c-0.01,0-0.02,0-0.04,0c-1.29-0.06-1.28,1.94,0,2c0.01,0,0.02,0,0.04,0\n           C256.51,213.48,256.51,211.48,255.22,211.42L255.22,211.42z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M249.34,205.34c0-0.02,0-0.04,0-0.06c0.01-0.14-0.02-0.27-0.09-0.39c-0.04-0.12-0.11-0.23-0.21-0.32\n           c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.09,0.01-0.18,0.02-0.27,0.04c-0.17,0.05-0.32,0.13-0.44,0.26\n           c-0.05,0.07-0.1,0.13-0.16,0.2c-0.09,0.16-0.14,0.32-0.14,0.5c0,0.02,0,0.04,0,0.06c-0.01,0.14,0.02,0.27,0.09,0.39\n           c0.04,0.12,0.11,0.23,0.21,0.32c0.09,0.1,0.2,0.17,0.32,0.21c0.12,0.06,0.25,0.09,0.39,0.09c0.09-0.01,0.18-0.02,0.27-0.04\n           c0.17-0.05,0.32-0.13,0.44-0.26c0.05-0.07,0.1-0.13,0.16-0.2C249.3,205.68,249.34,205.52,249.34,205.34L249.34,205.34z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M247.62,225.24c-0.06-0.55-0.09-1.11-0.08-1.66c0-0.25-0.11-0.53-0.29-0.71c-0.17-0.17-0.46-0.3-0.71-0.29\n           c-0.26,0.01-0.53,0.1-0.71,0.29c-0.18,0.2-0.29,0.43-0.29,0.71c-0.01,0.56,0.02,1.11,0.08,1.66c-0.01,0.14,0.02,0.27,0.09,0.39\n           c0.04,0.12,0.11,0.23,0.21,0.32c0.17,0.17,0.46,0.3,0.71,0.29c0.26-0.01,0.53-0.1,0.71-0.29\n           C247.49,225.76,247.65,225.5,247.62,225.24L247.62,225.24z\"/>\n   </g>\n</g>\n<g>\n   <g>\n       <path d=\"M247.75,199.34c0,0.48,0.01,0.96,0.01,1.43c0,0.26,0.11,0.52,0.29,0.71c0.09,0.1,0.2,0.17,0.32,0.21\n           c0.12,0.06,0.25,0.09,0.39,0.09c0.26-0.01,0.53-0.1,0.71-0.29c0.18-0.2,0.29-0.44,0.29-0.71c0-0.48-0.01-0.96-0.01-1.43\n           c0-0.26-0.11-0.52-0.29-0.71c-0.09-0.1-0.2-0.17-0.32-0.21c-0.12-0.06-0.25-0.09-0.39-0.09c-0.26,0.01-0.53,0.1-0.71,0.29\n           C247.87,198.83,247.75,199.07,247.75,199.34L247.75,199.34z\"/>\n   </g>\n</g>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_7\">\n<path class=\"st3\" d=\"M352,181.47c0.78-10.23,1.56-20.46,2.34-30.68c-9.24,2.44-18.49,4.89-27.73,7.33\n   C335.08,165.9,343.54,173.68,352,181.47z\"/>\n<path class=\"st3\" d=\"M331.17,269.56c8.96,0.25,17.92,0.51,26.87,0.76c-1.46-9.04-2.91-18.08-4.37-27.12\n   C346.17,251.98,338.67,260.77,331.17,269.56z\"/>\n<path class=\"st3\" d=\"M268.28,157.66c-10.62-1.57-21.24-3.14-31.86-4.71c1.87,9.83,3.74,19.66,5.61,29.49\n   C250.79,174.18,259.53,165.92,268.28,157.66z\"/>\n<path class=\"st3\" d=\"M244.21,244.2c-1.14,9.52-2.29,19.04-3.43,28.56c9.13-0.71,18.26-1.42,27.39-2.13\n   C260.18,261.82,252.2,253.01,244.21,244.2z\"/>\n<path class=\"st3\" d=\"M347.6,439.86c3.81,0.07,7.62,0.14,11.44,0.21c-0.62-2.52-1.24-5.03-1.86-7.55\n   C353.98,434.96,350.79,437.41,347.6,439.86z\"/>\n<path class=\"st3\" d=\"M341.36,489.02c5.96,0.07,11.93,0.14,17.89,0.21c-0.97-2.52-1.94-5.03-2.91-7.55\n   C351.35,484.13,346.35,486.57,341.36,489.02z\"/>\n<path class=\"st3\" d=\"M337.92,475.16c-1.67-5.73-3.34-11.45-5.01-17.18c-2.12,1.66-4.25,3.32-6.37,4.98\n   C330.33,467.03,334.12,471.09,337.92,475.16z\"/>\n<path class=\"st3\" d=\"M315.77,491.9c2.7-0.35,5.4-0.7,8.1-1.05c-0.71-1.76-1.42-3.52-2.13-5.28\n   C319.75,487.68,317.76,489.79,315.77,491.9z\"/>\n<path class=\"st3\" d=\"M331.77,439.82c2.09-1.74,4.19-3.48,6.28-5.22c-1.54-1.11-3.08-2.22-4.62-3.32\n   C332.88,434.12,332.32,436.97,331.77,439.82z\"/>\n<path class=\"st3\" d=\"M345.86,455.78c2.71-0.29,5.42-0.57,8.12-0.85c-0.67-1.78-1.33-3.55-2-5.33\n   C349.94,451.66,347.9,453.72,345.86,455.78z\"/>\n<path class=\"st3\" d=\"M252.17,440.52c-3.81,0.07-7.62,0.14-11.44,0.21c0.62-2.52,1.24-5.03,1.86-7.55\n   C245.78,435.63,248.98,438.08,252.17,440.52z\"/>\n<path class=\"st3\" d=\"M258.41,489.69c-5.96,0.07-11.93,0.14-17.89,0.21c0.97-2.52,1.94-5.03,2.91-7.55\n   C248.42,484.8,253.42,487.24,258.41,489.69z\"/>\n<path class=\"st3\" d=\"M261.85,475.83c1.67-5.73,3.34-11.45,5.01-17.18c2.13,1.66,4.25,3.32,6.37,4.98\n   C269.44,467.69,265.64,471.76,261.85,475.83z\"/>\n<path class=\"st3\" d=\"M284,492.57c-2.7-0.35-5.4-0.7-8.1-1.05c0.71-1.76,1.42-3.52,2.13-5.28\n   C280.02,488.35,282.01,490.46,284,492.57z\"/>\n<path class=\"st3\" d=\"M268,440.49c-2.09-1.74-4.19-3.48-6.28-5.22c1.54-1.11,3.08-2.22,4.62-3.32\n   C266.89,434.79,267.44,437.64,268,440.49z\"/>\n<path class=\"st3\" d=\"M253.91,456.45c-2.71-0.28-5.42-0.57-8.12-0.85c0.67-1.78,1.33-3.55,2-5.33\n   C249.83,452.33,251.87,454.39,253.91,456.45z\"/>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_9\">\n<g>\n   <g>\n       <g>\n           <path d=\"M432.13,277.85c-2.46-2.36-5.66-4.57-9.69-6c-3.99-1.48-8.74-2.1-13.8-1.68c-2.5,0.23-5.17,0.71-7.65,1.48\n               c-1.19,0.37-2.28,0.88-3.46,1.55c-1.17,0.67-2.38,1.45-3.6,2.3c-2.45,1.69-4.96,3.56-7.52,5.45c-2.57,1.91-5.19,3.85-7.85,5.82\n               c-5.36,3.92-10.92,7.88-16.65,11.83c-2.86,1.98-5.76,3.95-8.71,5.91c-2.97,1.94-5.94,3.96-9.38,5.6\n               c-1.71,0.81-3.58,1.48-5.5,1.83c-1.92,0.36-3.81,0.46-5.71,0.4c-3.79-0.14-7.48-1.03-10.88-2.52c-1.68-0.75-3.35-1.62-4.83-2.78\n               c-1.46-1.12-2.78-2.4-3.96-3.78c-2.36-2.76-4.1-5.95-5.2-9.28c1.51,3.16,3.58,6.04,6.1,8.42c1.26,1.18,2.63,2.25,4.09,3.15\n               c1.42,0.91,3.01,1.55,4.64,2.1c3.26,1.08,6.68,1.59,10.04,1.46c1.67-0.07,3.36-0.29,4.92-0.7c1.57-0.41,3.04-1.04,4.5-1.85\n               c2.9-1.61,5.71-3.74,8.53-5.81c2.81-2.11,5.61-4.21,8.37-6.28c5.53-4.17,10.94-8.29,16.17-12.31c2.61-2.02,5.19-4.01,7.71-5.97\n               c2.55-1.96,5.05-3.87,7.63-5.7c1.29-0.91,2.61-1.8,4.04-2.63c1.42-0.82,3.02-1.59,4.61-2.09c3.08-0.98,6.04-1.51,9.01-1.79\n               c5.9-0.51,11.6,0.23,16.45,2.04c4.88,1.74,8.88,4.52,11.84,7.36c0.94,0.9,1.79,1.81,2.57,2.7c0.78,0.9,1.46,1.71,2.18,2.62\n               c1.4,1.78,2.58,3.61,3.52,5.41c1.9,3.6,2.83,7.1,3.21,10.15c0.36,3.05,0.2,5.67-0.18,7.81c-0.37,2.15-0.93,3.84-1.47,5.16\n               c-1.12,2.65-2.15,3.89-2.84,4.48c-0.71,0.58-1.14,0.51-1.51,0.31c-0.38-0.2-0.66-0.52-0.64-1.38c0-0.86,0.35-2.25,0.82-4.68\n               c0.42-2.42,1.04-5.96,0.2-10.87c-0.45-2.44-1.29-5.2-2.91-8.12c-0.81-1.46-1.8-2.95-3.01-4.46c-0.59-0.74-1.31-1.58-2-2.37\n               C433.64,279.36,432.91,278.6,432.13,277.85z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M355.07,236.57c0.03-0.19,2.64,0.02,7.35,0.42c4.71,0.4,11.53,1,19.96,1.51c8.42,0.49,18.49,0.93,29.58,0.4\n               c1.38-0.1,2.78-0.19,4.2-0.29c1.41-0.12,2.83-0.32,4.26-0.47c2.83-0.29,5.58-1.07,8.25-2.25c2.67-1.18,5.12-2.81,7.33-4.86\n               c2.16-2,3.82-4.51,3.98-7.32c0.06-0.77,0.06-1.47-0.03-2.11c-0.09-0.63-0.31-1.15-0.59-1.45c-0.16-0.48-1.78-0.33-3.16,0.06\n               c-1.42,0.37-2.84,0.92-4.24,1.5c-1.4,0.57-2.78,1.21-4.13,1.86c-2.73,1.28-5.22,2.74-7.84,4.2c-2.63,1.43-5.32,2.64-8.01,3.6\n               c-2.69,0.97-5.37,1.7-7.94,2.36c-2.59,0.69-5.15,1.24-7.63,1.66c-4.98,0.85-9.66,1.14-13.89,1.37\n               c-8.48,0.46-15.35,0.41-20.09,0.32c-1.18-0.04-2.24-0.07-3.15-0.1c-0.89-0.04-1.74-0.06-2.23-0.13c-0.53-0.08-1-0.19-1.37-0.22\n               C355.33,236.57,355.12,236.57,355.07,236.57c-0.05,0,0.07,0,0.35-0.04c0.28-0.03,0.75-0.14,1.47-0.22\n               c0.76-0.07,1.45-0.1,2.38-0.15c0.91-0.04,1.96-0.1,3.14-0.15c4.73-0.24,11.56-0.48,19.98-1.18c4.21-0.34,8.8-0.75,13.62-1.67\n               c2.41-0.45,4.88-1.03,7.41-1.75c2.55-0.71,5.14-1.45,7.7-2.41c2.56-0.95,5.11-2.13,7.62-3.52c2.48-1.42,5.15-3.01,7.93-4.33\n               c1.39-0.67,2.8-1.33,4.26-1.94c1.46-0.61,2.95-1.2,4.58-1.63c0.81-0.22,1.66-0.4,2.62-0.45c0.48-0.03,1.01-0.01,1.61,0.15\n               c0.29,0.07,0.62,0.22,0.92,0.41c0.29,0.19,0.49,0.39,0.7,0.6c0.81,0.89,1.14,1.95,1.29,2.89c0.14,0.95,0.12,1.87,0.06,2.71\n               c-0.12,1.82-0.7,3.62-1.6,5.14c-0.88,1.54-2.03,2.84-3.25,3.98c-2.4,2.22-5.18,4.07-8.1,5.32c-2.91,1.27-5.99,2.11-9,2.39\n               c-1.48,0.15-2.94,0.33-4.38,0.44c-1.44,0.08-2.87,0.17-4.28,0.25c-11.28,0.4-21.39-0.24-29.84-0.98\n               c-8.45-0.75-15.26-1.65-19.95-2.38C357.61,237.32,355.05,236.75,355.07,236.57z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M355,237.15c-0.07-0.08,1.03-1.09,3.11-2.78c2.08-1.69,5.14-4.07,9.05-6.86c3.91-2.78,8.64-6,14.23-9.08\n               c0.71-0.37,1.42-0.75,2.15-1.13c0.73-0.37,1.49-0.71,2.25-1.07c1.53-0.74,3.25-1.26,5.02-1.54c1.77-0.29,3.64-0.3,5.47-0.02\n               c0.93,0.14,1.88,0.38,2.78,0.81c0.9,0.41,1.78,1.09,2.38,1.91c0.3,0.39,0.6,0.83,0.8,1.37c0.21,0.53,0.29,1.25-0.02,1.92\n               c-0.41,0.75-0.97,0.96-1.42,1.18c-0.47,0.21-0.92,0.35-1.37,0.48c-1.8,0.49-3.56,0.72-5.29,0.93c-1.73,0.22-3.48,0.27-5.08,0.38\n               c-1.62,0.12-3.19,0.35-4.71,0.68c-1.52,0.32-2.98,0.75-4.42,1.17c-1.42,0.42-2.78,0.88-4.08,1.37c-2.6,0.99-4.94,2.13-7.08,3.19\n               c-4.28,2.11-7.67,3.98-10.04,5.23c-1.2,0.64-2.06,1.1-2.77,1.45C355.2,237.07,354.97,237.17,355,237.15\n               c0.04-0.01,0.44-0.29,0.89-0.7c0.49-0.37,1.43-0.96,2.55-1.67c2.28-1.41,5.6-3.43,9.84-5.68c2.12-1.13,4.46-2.35,7.11-3.42\n               c1.32-0.53,2.71-1.03,4.16-1.48c1.43-0.45,2.93-0.91,4.5-1.26c1.57-0.36,3.21-0.61,4.9-0.76c1.7-0.13,3.33-0.19,5.02-0.41\n               c1.68-0.21,3.41-0.45,5.05-0.9c0.41-0.11,0.8-0.24,1.15-0.4c0.35-0.15,0.65-0.38,0.66-0.45c0.19-0.31-0.09-1.05-0.62-1.69\n               c-0.94-1.28-2.53-1.89-4.18-2.14c-1.69-0.26-3.36-0.26-5-0.01c-1.63,0.26-3.2,0.71-4.65,1.39c-0.74,0.34-1.48,0.67-2.2,1.02\n               c-0.72,0.36-1.42,0.72-2.12,1.08c-5.54,2.96-10.32,6.07-14.28,8.72c-3.96,2.66-7.12,4.91-9.31,6.45\n               C356.29,236.39,355.07,237.24,355,237.15z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M353.65,235.55c0.07-0.08,1.23,0.84,3.31,2.52c2.08,1.68,5.09,4.12,8.87,7.04c3.79,2.91,8.35,6.31,13.69,9.63\n               c0.67,0.4,1.36,0.81,2.05,1.22c0.7,0.4,1.41,0.77,2.13,1.16c1.41,0.78,2.94,1.33,4.55,1.69c1.62,0.36,3.28,0.47,4.99,0.32\n               c1.66-0.14,3.29-0.65,4.31-1.87c0.57-0.61,0.89-1.33,0.73-1.65c0-0.07-0.29-0.32-0.63-0.49c-0.34-0.18-0.73-0.34-1.12-0.48\n               c-1.6-0.55-3.31-0.91-4.98-1.23c-1.67-0.33-3.3-0.5-4.99-0.73c-1.67-0.25-3.29-0.61-4.84-1.07c-1.55-0.46-3.01-1.01-4.41-1.55\n               c-1.42-0.54-2.77-1.13-4.05-1.75c-2.57-1.24-4.83-2.61-6.87-3.87c-4.09-2.52-7.27-4.75-9.45-6.31\n               c-1.07-0.78-1.96-1.43-2.43-1.83C354.06,235.87,353.68,235.56,353.65,235.55c-0.04-0.01,0.19,0.1,0.93,0.46\n               c0.69,0.4,1.52,0.91,2.67,1.63c2.28,1.4,5.54,3.48,9.68,5.87c2.07,1.2,4.33,2.49,6.86,3.65c1.26,0.58,2.59,1.13,3.99,1.63\n               c1.41,0.52,2.84,1.04,4.33,1.46c1.49,0.42,3.05,0.75,4.65,0.98c1.6,0.21,3.34,0.38,5.05,0.71c1.71,0.32,3.45,0.67,5.22,1.27\n               c0.44,0.15,0.89,0.33,1.34,0.57c0.43,0.26,0.97,0.5,1.34,1.27c0.27,0.69,0.14,1.4-0.11,1.92c-0.24,0.53-0.57,0.95-0.89,1.32\n               c-0.66,0.79-1.58,1.4-2.5,1.75c-0.93,0.37-1.9,0.54-2.83,0.63c-1.84,0.16-3.71,0.03-5.45-0.37c-1.74-0.4-3.42-1.03-4.91-1.86\n               c-0.73-0.41-1.47-0.8-2.17-1.21c-0.7-0.43-1.39-0.85-2.07-1.26c-5.38-3.44-9.9-6.95-13.61-9.98c-3.72-3.04-6.62-5.61-8.59-7.44\n               C354.6,236.7,353.58,235.63,353.65,235.55z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M400.75,210.21c0.2,0.1,0.3-3,0.37-7.96c0.02-1.24,0.05-2.6,0.03-4.05c-0.01-0.72-0.05-1.47-0.14-2.2\n               c-0.05-0.37-0.12-0.73-0.22-1.08c-0.11-0.38-0.23-0.76-0.36-1.13c-0.53-1.5-1.23-3.07-2.33-4.3c-0.55-0.6-1.22-1.09-1.97-1.29\n               c-0.74-0.21-1.65-0.15-2.45,0.08c-0.81,0.25-1.47,0.7-1.9,1.38c-0.45,0.69-0.76,1.5-0.92,2.31c-0.17,0.81-0.21,1.64-0.11,2.44\n               c0.08,0.82,0.32,1.45,0.75,2.12c0.85,1.3,1.94,2.45,2.89,3.54c0.97,1.1,1.88,2.09,2.74,2.99c0.85,0.9,1.65,1.75,2.17,2.66\n               c0.51,0.9,0.78,1.74,0.96,2.42c0.18,0.69,0.26,1.23,0.33,1.58C400.66,210.09,400.73,210.18,400.75,210.21\n               c0.01,0.02-0.08,0.05-0.16-0.04c-0.08-0.08-0.15-0.21-0.22-0.39c-0.14-0.35-0.3-0.86-0.54-1.51c-0.25-0.64-0.57-1.42-1.09-2.21\n               c-0.51-0.79-1.31-1.55-2.2-2.42c-0.89-0.86-1.87-1.85-2.87-2.91c-1-1.08-2.11-2.18-3.09-3.62c-0.24-0.37-0.47-0.76-0.64-1.21\n               c-0.18-0.46-0.26-0.92-0.32-1.37c-0.12-0.92-0.09-1.87,0.1-2.81c0.19-0.94,0.52-1.88,1.08-2.74c0.55-0.9,1.54-1.58,2.55-1.87\n               c1.02-0.29,2.06-0.37,3.1-0.09c1.05,0.28,1.89,0.93,2.54,1.65c1.28,1.46,1.98,3.14,2.51,4.74c0.13,0.4,0.25,0.8,0.35,1.2\n               c0.11,0.42,0.17,0.84,0.22,1.25c0.08,0.81,0.1,1.58,0.09,2.33c-0.02,1.48-0.1,2.84-0.18,4.09c-0.15,2.48-0.31,4.5-0.52,5.89\n               c-0.1,0.69-0.21,1.23-0.34,1.59c-0.06,0.18-0.13,0.32-0.2,0.4C400.84,210.25,400.74,210.23,400.75,210.21z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M400.77,210.2c-0.2-0.04-0.21-0.95-0.7-2.21c-0.56-1.45-1.2-1.94-3.01-4.33c-1.67-2.2-2.5-3.31-2.7-4.32\n       c-0.24-1.21-0.02-2.5,0.56-3.38c0.23-0.35,0.44-0.5,0.51-0.56c0.82-0.58,2.02-0.39,2.69-0.12c2.18,0.9,3.06,4.54,3.23,5.25\n       c0.28,1.14,0.17,2.78-0.05,5.99C401.08,209.95,400.89,210.23,400.77,210.2z\"/>\n   <g>\n       <g>\n           <path d=\"M400.77,210.2c0.14,0.09,0.24-1.95,0.36-5.19c0.03-0.81,0.07-1.7,0.06-2.64c-0.01-0.47-0.03-0.95-0.11-1.42\n               c-0.08-0.46-0.24-0.98-0.4-1.46c-0.34-0.99-0.78-2.01-1.47-2.86c-0.35-0.42-0.76-0.78-1.25-0.97c-0.49-0.19-1.07-0.28-1.59-0.2\n               c-1.07,0.11-1.55,1.3-1.7,2.34c-0.07,0.53-0.04,1.09,0.07,1.58c0.12,0.47,0.37,0.94,0.65,1.38c1.16,1.76,2.36,3.31,3.34,4.59\n               c0.49,0.64,0.95,1.26,1.23,1.87c0.29,0.61,0.44,1.16,0.54,1.61C400.69,209.75,400.72,210.22,400.77,210.2\n               c-0.01,0.05-0.17-0.06-0.24-0.29c-0.09-0.23-0.18-0.57-0.32-1c-0.14-0.42-0.33-0.94-0.64-1.49c-0.3-0.55-0.75-1.1-1.27-1.73\n               c-1.05-1.26-2.27-2.74-3.52-4.55c-0.3-0.46-0.6-0.97-0.76-1.59c-0.14-0.61-0.18-1.22-0.11-1.85c0.07-0.63,0.25-1.26,0.61-1.84\n               c0.18-0.29,0.39-0.57,0.72-0.8c0.31-0.21,0.66-0.34,1.02-0.39c0.71-0.1,1.38,0,2.01,0.25c0.64,0.27,1.15,0.72,1.54,1.2\n               c0.78,0.98,1.23,2.08,1.56,3.13c0.16,0.54,0.3,1.03,0.39,1.58c0.08,0.54,0.09,1.05,0.08,1.53c-0.02,0.97-0.09,1.86-0.16,2.68\n               c-0.14,1.62-0.27,2.94-0.43,3.84c-0.08,0.45-0.16,0.8-0.24,1.04c-0.04,0.12-0.09,0.2-0.14,0.26\n               C400.82,210.25,400.76,210.22,400.77,210.2z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M431.64,207.99c0.05,0.22,2.44-1.76,6.21-5c0.94-0.81,1.98-1.69,3.05-2.66c0.53-0.49,1.07-1.01,1.55-1.57\n               c0.24-0.28,0.47-0.57,0.67-0.88c0.21-0.33,0.42-0.67,0.61-1.02c0.77-1.39,1.48-2.96,1.67-4.6c0.09-0.81,0.01-1.64-0.35-2.33\n               c-0.33-0.7-0.98-1.34-1.68-1.77c-0.73-0.44-1.5-0.64-2.29-0.51c-0.82,0.12-1.62,0.43-2.34,0.84c-0.72,0.42-1.37,0.94-1.9,1.53\n               c-0.56,0.6-0.88,1.21-1.09,1.97c-0.41,1.5-0.55,3.08-0.73,4.52c-0.18,1.45-0.31,2.79-0.42,4.03c-0.11,1.23-0.22,2.4-0.56,3.39\n               c-0.34,0.98-0.78,1.73-1.17,2.32c-0.39,0.59-0.74,1.01-0.97,1.29C431.67,207.84,431.65,207.96,431.64,207.99\n               c-0.01,0.02-0.09-0.03-0.08-0.15c0-0.12,0.06-0.25,0.14-0.42c0.16-0.34,0.45-0.8,0.77-1.4c0.31-0.61,0.68-1.37,0.93-2.28\n               c0.25-0.91,0.29-2.01,0.35-3.25c0.05-1.24,0.14-2.62,0.28-4.08c0.14-1.46,0.23-3.02,0.66-4.72c0.11-0.42,0.26-0.85,0.48-1.28\n               c0.23-0.43,0.51-0.8,0.81-1.15c0.61-0.7,1.34-1.3,2.17-1.79c0.83-0.48,1.75-0.85,2.77-1.01c1.04-0.18,2.2,0.11,3.09,0.67\n               c0.9,0.57,1.65,1.3,2.13,2.26c0.49,0.97,0.56,2.04,0.45,2.99c-0.24,1.93-1.04,3.57-1.88,5.03c-0.21,0.36-0.44,0.72-0.66,1.06\n               c-0.24,0.36-0.51,0.69-0.79,0.99c-0.55,0.6-1.12,1.12-1.68,1.61c-1.12,0.97-2.2,1.81-3.18,2.58c-1.96,1.53-3.58,2.75-4.75,3.52\n               c-0.59,0.38-1.06,0.66-1.41,0.8c-0.18,0.07-0.32,0.11-0.43,0.11C431.67,208.08,431.62,208,431.64,207.99z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M431.66,208c-0.1-0.17,0.57-0.79,1.19-1.99c0.71-1.38,0.66-2.18,1.24-5.13c0.54-2.7,0.82-4.07,1.44-4.89\n       c0.74-0.98,1.85-1.68,2.9-1.82c0.42-0.06,0.67,0,0.76,0.02c0.97,0.23,1.63,1.25,1.87,1.94c0.77,2.23-1.37,5.3-1.78,5.9\n       c-0.67,0.97-1.96,1.97-4.51,3.94C432.05,208.07,431.72,208.1,431.66,208z\"/>\n   <g>\n       <g>\n           <path d=\"M431.66,208c0.02,0.16,1.62-1.11,4.13-3.17c0.63-0.51,1.32-1.07,2.02-1.7c0.34-0.32,0.69-0.65,0.99-1.03\n               c0.28-0.36,0.57-0.83,0.83-1.27c0.52-0.91,0.99-1.92,1.17-3c0.08-0.54,0.07-1.09-0.1-1.58c-0.18-0.49-0.5-0.99-0.91-1.32\n               c-0.79-0.73-2-0.3-2.88,0.28c-0.44,0.3-0.84,0.69-1.13,1.1c-0.28,0.4-0.46,0.9-0.6,1.4c-0.54,2.04-0.91,3.96-1.22,5.55\n               c-0.15,0.8-0.31,1.54-0.58,2.16c-0.26,0.62-0.58,1.09-0.84,1.47C431.95,207.64,431.61,207.98,431.66,208\n               c-0.05,0.02-0.07-0.17,0.06-0.37c0.11-0.22,0.31-0.51,0.53-0.9c0.22-0.39,0.48-0.87,0.69-1.46c0.21-0.59,0.33-1.29,0.45-2.1\n               c0.25-1.62,0.54-3.52,1.07-5.65c0.15-0.53,0.33-1.09,0.68-1.63c0.36-0.51,0.79-0.94,1.31-1.31c0.52-0.36,1.11-0.65,1.78-0.77\n               c0.33-0.06,0.68-0.09,1.07,0.01c0.36,0.09,0.69,0.27,0.97,0.5c0.55,0.46,0.92,1.03,1.15,1.67c0.23,0.66,0.22,1.34,0.12,1.95\n               c-0.22,1.24-0.74,2.3-1.3,3.25c-0.29,0.48-0.57,0.91-0.92,1.34c-0.35,0.42-0.73,0.76-1.09,1.08c-0.74,0.63-1.46,1.17-2.11,1.66\n               c-1.31,0.97-2.38,1.75-3.16,2.23c-0.39,0.24-0.7,0.42-0.94,0.51c-0.12,0.04-0.21,0.07-0.29,0.07\n               C431.66,208.07,431.64,208,431.66,208z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M451.33,224.71c0.04,0.17,1.88-1.36,4.77-3.85c0.73-0.62,1.53-1.3,2.35-2.05c0.41-0.38,0.82-0.77,1.2-1.21\n               c0.19-0.22,0.36-0.44,0.51-0.68c0.16-0.26,0.32-0.52,0.47-0.78c0.59-1.07,1.14-2.27,1.28-3.54c0.07-0.63,0.01-1.26-0.27-1.79\n               c-0.26-0.54-0.76-1.03-1.3-1.37c-0.56-0.33-1.15-0.49-1.76-0.39c-0.63,0.09-1.25,0.33-1.8,0.65c-0.55,0.32-1.05,0.72-1.46,1.18\n               c-0.43,0.47-0.67,0.93-0.84,1.52c-0.31,1.15-0.42,2.37-0.56,3.48c-0.13,1.12-0.24,2.15-0.32,3.1c-0.09,0.95-0.17,1.85-0.43,2.61\n               c-0.26,0.75-0.6,1.33-0.9,1.79C451.65,224.28,451.25,224.68,451.33,224.71c0,0.01-0.07-0.02-0.06-0.11\n               c0-0.09,0.05-0.19,0.11-0.33c0.13-0.26,0.35-0.61,0.59-1.08c0.24-0.47,0.52-1.05,0.72-1.75c0.19-0.7,0.23-1.54,0.27-2.5\n               c0.04-0.96,0.11-2.02,0.21-3.14c0.11-1.13,0.18-2.33,0.51-3.63c0.15-0.64,0.52-1.36,0.99-1.87c0.47-0.54,1.03-1,1.67-1.38\n               c0.64-0.37,1.35-0.66,2.13-0.77c0.8-0.14,1.69,0.08,2.38,0.51c0.69,0.44,1.27,1,1.64,1.74c0.37,0.74,0.43,1.57,0.34,2.3\n               c-0.19,1.49-0.8,2.74-1.45,3.87c-0.16,0.28-0.34,0.55-0.51,0.81c-0.19,0.28-0.39,0.53-0.6,0.76c-0.42,0.46-0.86,0.86-1.29,1.24\n               c-0.86,0.74-1.69,1.39-2.44,1.99c-1.51,1.18-2.75,2.12-3.66,2.71c-0.45,0.3-0.82,0.51-1.09,0.62c-0.14,0.05-0.25,0.09-0.33,0.09\n               C451.34,224.78,451.31,224.71,451.33,224.71z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M451.33,224.72c-0.08-0.13,0.44-0.61,0.92-1.53c0.55-1.06,0.5-1.68,0.96-3.94c0.41-2.08,0.63-3.13,1.11-3.76\n       c0.57-0.75,1.43-1.29,2.23-1.4c0.32-0.04,0.51,0,0.58,0.01c0.75,0.18,1.26,0.96,1.44,1.49c0.59,1.71-1.05,4.08-1.37,4.54\n       c-0.52,0.74-1.51,1.52-3.47,3.03C451.64,224.77,451.38,224.79,451.33,224.72z\"/>\n   <g>\n       <g>\n           <path d=\"M451.33,224.72c0.02,0.12,1.25-0.86,3.17-2.44c0.94-0.82,2.22-1.64,2.95-3.08c0.4-0.7,0.76-1.48,0.9-2.31\n               c0.06-0.41,0.06-0.84-0.08-1.21c-0.14-0.38-0.39-0.76-0.7-1.02c-0.61-0.56-1.54-0.23-2.22,0.22c-0.34,0.23-0.64,0.53-0.87,0.85\n               c-0.21,0.31-0.35,0.69-0.46,1.08c-0.42,1.57-0.7,3.05-0.94,4.27c-0.12,0.61-0.24,1.19-0.45,1.66c-0.2,0.47-0.44,0.84-0.65,1.13\n               C451.56,224.44,451.3,224.7,451.33,224.72c-0.13-0.02,0.11-0.41,0.46-0.98c0.17-0.3,0.37-0.67,0.53-1.13\n               c0.16-0.45,0.25-0.99,0.34-1.61c0.19-1.24,0.42-2.71,0.82-4.35c0.12-0.41,0.25-0.84,0.53-1.25c0.28-0.39,0.61-0.72,1.01-1\n               c0.4-0.28,0.86-0.5,1.37-0.59c0.26-0.04,0.53-0.07,0.82,0.01c0.28,0.07,0.53,0.21,0.74,0.38c0.42,0.36,0.71,0.8,0.89,1.29\n               c0.18,0.51,0.17,1.03,0.09,1.5c-0.17,0.95-0.57,1.77-1,2.5c-0.23,0.37-0.44,0.7-0.71,1.03c-0.27,0.32-0.56,0.58-0.84,0.83\n               c-0.57,0.49-1.12,0.9-1.62,1.27C452.79,224.11,451.41,225,451.33,224.72z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M406.45,226.02c0.06,0.25,3.06-2.06,7.79-5.87c1.19-0.95,2.49-1.98,3.84-3.13c0.67-0.57,1.36-1.18,1.99-1.83\n               c0.65-0.65,1.16-1.37,1.68-2.23c1.01-1.66,1.96-3.54,2.25-5.53c0.14-0.99,0.06-1.99-0.37-2.82c-0.4-0.84-1.22-1.61-2.08-2.14\n               c-0.88-0.53-1.88-0.81-2.84-0.7c-1.01,0.1-2.02,0.42-2.93,0.87c-0.91,0.45-1.75,1.03-2.46,1.71c-0.35,0.33-0.68,0.71-0.94,1.07\n               c-0.25,0.36-0.45,0.76-0.6,1.19c-0.6,1.76-0.77,3.71-1.01,5.46c-0.23,1.78-0.41,3.41-0.55,4.93c-0.14,1.5-0.27,2.93-0.7,4.14\n               c-0.43,1.2-1,2.1-1.5,2.81c-0.5,0.71-0.95,1.21-1.23,1.54c-0.14,0.17-0.25,0.3-0.29,0.38\n               C406.45,225.95,406.47,225.99,406.45,226.02c-0.01,0.02-0.11-0.03-0.1-0.18c0.01-0.14,0.08-0.31,0.19-0.51\n               c0.21-0.41,0.58-0.96,0.99-1.69c0.4-0.73,0.88-1.65,1.2-2.75c0.32-1.1,0.37-2.45,0.45-3.97c0.07-1.52,0.2-3.21,0.37-4.98\n               c0.2-1.79,0.3-3.7,0.95-5.77c0.18-0.52,0.41-1.04,0.75-1.53c0.34-0.48,0.7-0.89,1.1-1.29c0.81-0.79,1.75-1.46,2.79-1.99\n               c1.05-0.52,2.19-0.91,3.44-1.04c1.3-0.14,2.63,0.24,3.73,0.9c1.09,0.68,2.04,1.54,2.63,2.74c0.6,1.19,0.66,2.52,0.49,3.68\n               c-0.38,2.36-1.44,4.32-2.53,6.06c-0.54,0.85-1.19,1.73-1.91,2.41c-0.71,0.7-1.43,1.3-2.14,1.87c-1.41,1.13-2.76,2.11-3.99,3.01\n               c-2.46,1.79-4.48,3.22-5.95,4.11c-0.73,0.45-1.33,0.76-1.76,0.93c-0.22,0.08-0.4,0.12-0.53,0.12\n               C406.48,226.13,406.43,226.03,406.45,226.02z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M406.47,226.03c-0.13-0.2,0.73-0.94,1.52-2.37c0.91-1.65,0.84-2.6,1.58-6.11c0.69-3.22,1.04-4.85,1.83-5.82\n       c0.95-1.17,2.36-2,3.7-2.17c0.53-0.07,0.85,0,0.97,0.02c1.24,0.27,2.08,1.49,2.39,2.31c0.99,2.65-1.74,6.31-2.27,7.03\n       c-0.86,1.15-2.5,2.35-5.76,4.7C406.97,226.1,406.54,226.15,406.47,226.03z\"/>\n   <g>\n       <g>\n           <path d=\"M406.47,226.03c0.03,0.19,2.02-1.3,5.17-3.71c0.79-0.6,1.66-1.26,2.54-2c0.44-0.37,0.88-0.76,1.28-1.2\n               c0.38-0.42,0.74-0.96,1.08-1.49c0.68-1.08,1.31-2.29,1.56-3.6c0.12-0.65,0.13-1.32-0.08-1.91c-0.2-0.6-0.62-1.19-1.12-1.6\n               c-0.52-0.42-1.08-0.59-1.74-0.49c-0.65,0.08-1.29,0.33-1.86,0.66c-0.57,0.33-1.08,0.76-1.49,1.25c-0.4,0.45-0.64,1.03-0.84,1.63\n               c-0.39,1.21-0.65,2.44-0.92,3.57c-0.27,1.14-0.49,2.19-0.69,3.17c-0.2,0.97-0.4,1.88-0.75,2.64c-0.34,0.75-0.74,1.32-1.08,1.77\n               C406.83,225.6,406.4,225.99,406.47,226.03c-0.01,0.01-0.06-0.03-0.05-0.13c0.01-0.09,0.06-0.2,0.14-0.33\n               c0.15-0.26,0.4-0.61,0.69-1.08c0.28-0.47,0.62-1.05,0.89-1.76c0.27-0.71,0.42-1.57,0.58-2.55c0.16-0.98,0.34-2.06,0.58-3.21\n               c0.24-1.15,0.46-2.38,0.85-3.68c0.21-0.64,0.48-1.35,0.98-1.94c0.47-0.57,1.05-1.07,1.71-1.46c0.66-0.39,1.4-0.69,2.22-0.8\n               c0.4-0.05,0.85-0.06,1.3,0.08c0.43,0.12,0.82,0.34,1.16,0.62c0.67,0.55,1.14,1.24,1.42,2.04c0.27,0.81,0.24,1.65,0.1,2.4\n               c-0.31,1.51-1.02,2.78-1.75,3.9c-0.38,0.56-0.74,1.09-1.21,1.58c-0.45,0.48-0.93,0.87-1.4,1.24c-0.93,0.73-1.83,1.36-2.65,1.93\n               c-1.63,1.13-2.97,2.04-3.95,2.6c-0.49,0.28-0.88,0.48-1.16,0.58c-0.14,0.05-0.26,0.08-0.35,0.07\n               C406.47,226.11,406.45,226.03,406.47,226.03z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M437.37,253.91c-0.04,0.27,4.03-0.91,10.53-2.94c1.63-0.5,3.41-1.04,5.3-1.67c1.89-0.66,3.86-1.3,5.57-2.61\n               c1.77-1.27,3.57-2.79,4.78-4.7c0.59-0.95,0.99-2.02,0.9-3.05c-0.04-1.01-0.6-2.14-1.3-3.03c-0.72-0.9-1.67-1.58-2.71-1.87\n               c-1.09-0.31-2.28-0.38-3.42-0.3c-1.15,0.08-2.26,0.33-3.29,0.71c-0.52,0.19-1.01,0.42-1.47,0.68c-0.44,0.24-0.82,0.55-1.17,0.92\n               c-1.4,1.51-2.39,3.47-3.38,5.18c-0.98,1.75-1.86,3.37-2.63,4.89c-0.78,1.5-1.5,2.94-2.46,4.02c-0.95,1.06-1.93,1.76-2.74,2.29\n               c-0.82,0.52-1.49,0.85-1.92,1.08c-0.22,0.12-0.38,0.21-0.46,0.27C437.4,253.84,437.4,253.89,437.37,253.91\n               c-0.02,0.02-0.11-0.08-0.02-0.23c0.07-0.14,0.22-0.28,0.41-0.45c0.39-0.33,1-0.75,1.74-1.33c0.73-0.59,1.61-1.34,2.41-2.35\n               c0.79-1.01,1.4-2.39,2.12-3.94c0.71-1.55,1.55-3.25,2.48-5.02c0.47-0.89,0.95-1.82,1.5-2.76c0.55-0.94,1.15-1.91,1.99-2.82\n               c0.42-0.45,0.93-0.88,1.49-1.21c0.54-0.32,1.1-0.59,1.69-0.81c1.17-0.45,2.43-0.75,3.73-0.85c1.3-0.1,2.64-0.04,4,0.33\n               c1.41,0.39,2.64,1.29,3.55,2.41c0.87,1.15,1.56,2.42,1.65,3.96c0.11,1.51-0.46,2.9-1.17,4.01c-1.45,2.23-3.4,3.78-5.29,5.1\n               c-0.92,0.65-2.02,1.26-3.03,1.64c-1.02,0.41-2.03,0.73-2.99,1.03c-1.94,0.58-3.75,1.06-5.4,1.49c-3.3,0.86-6,1.51-7.89,1.84\n               c-0.95,0.16-1.69,0.25-2.21,0.25c-0.26-0.01-0.47-0.03-0.6-0.09C437.36,254.04,437.34,253.91,437.37,253.91z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M437.38,253.93c-0.06-0.26,1.16-0.68,2.58-1.83c1.64-1.33,1.95-2.32,4.17-5.6c2.04-3.01,3.08-4.53,4.32-5.21\n       c1.49-0.82,3.34-1.12,4.84-0.78c0.6,0.14,0.91,0.32,1.02,0.39c1.22,0.76,1.63,2.31,1.62,3.27c-0.02,3.08-4.42,5.75-5.28,6.27\n       c-1.38,0.84-3.63,1.42-8.06,2.56C437.89,254.2,437.41,254.08,437.38,253.93z\"/>\n   <g>\n       <g>\n           <path d=\"M437.38,253.93c-0.04,0.19,2.64-0.54,6.92-1.77c1.07-0.31,2.25-0.63,3.48-1.03c0.61-0.2,1.24-0.42,1.85-0.7\n               c0.59-0.27,1.17-0.65,1.77-1.06c1.17-0.82,2.35-1.8,3.21-3.03c0.42-0.61,0.73-1.29,0.78-1.99c0.07-0.69-0.14-1.48-0.5-2.1\n               c-0.39-0.64-0.9-1.04-1.63-1.2c-0.72-0.18-1.49-0.18-2.22-0.08c-0.74,0.11-1.45,0.33-2.09,0.64c-0.63,0.29-1.12,0.75-1.6,1.29\n               c-0.93,1.07-1.71,2.24-2.47,3.31c-0.75,1.07-1.43,2.07-2.05,3c-0.61,0.92-1.21,1.79-1.89,2.42c-0.67,0.63-1.33,1.06-1.87,1.38\n               C437.94,253.64,437.33,253.87,437.38,253.93c-0.01,0.01-0.05-0.06,0-0.15c0.05-0.09,0.15-0.18,0.28-0.28\n               c0.26-0.21,0.67-0.47,1.17-0.83c0.49-0.37,1.09-0.83,1.67-1.45c0.58-0.62,1.1-1.45,1.67-2.41c0.57-0.95,1.23-2,1.95-3.09\n               c0.73-1.09,1.47-2.28,2.46-3.46c0.48-0.58,1.11-1.19,1.88-1.56c0.74-0.37,1.55-0.64,2.39-0.77c0.85-0.13,1.74-0.13,2.64,0.08\n               c0.44,0.11,0.92,0.28,1.33,0.59c0.4,0.3,0.73,0.69,0.97,1.1c0.48,0.85,0.72,1.76,0.64,2.73c-0.08,0.96-0.49,1.81-0.98,2.51\n               c-1,1.41-2.27,2.4-3.52,3.25c-0.62,0.41-1.25,0.82-1.94,1.11c-0.67,0.29-1.33,0.5-1.97,0.69c-1.27,0.37-2.46,0.66-3.55,0.91\n               c-2.17,0.51-3.94,0.9-5.18,1.09c-0.62,0.09-1.11,0.14-1.45,0.13c-0.17-0.01-0.3-0.02-0.39-0.07\n               C437.36,254.02,437.36,253.92,437.38,253.93z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M406.47,249.89c-0.14,0.14,2.56,1.13,6.92,2.63c1.09,0.38,2.28,0.8,3.56,1.2c0.64,0.2,1.31,0.4,1.98,0.54\n               c0.68,0.15,1.35,0.19,2.11,0.18c1.47-0.02,3.07-0.17,4.46-0.79c0.69-0.31,1.3-0.77,1.66-1.38c0.38-0.6,0.54-1.43,0.53-2.2\n               c-0.02-0.78-0.24-1.53-0.7-2.11c-0.47-0.61-1.08-1.13-1.74-1.53c-0.66-0.4-1.37-0.71-2.09-0.89c-0.74-0.19-1.4-0.25-2.08-0.08\n               c-1.37,0.33-2.69,1-3.92,1.56c-1.23,0.57-2.36,1.11-3.39,1.64c-1.02,0.52-1.99,1.02-2.94,1.23c-0.94,0.21-1.76,0.21-2.41,0.18\n               C407.11,249.96,406.45,249.79,406.47,249.89c-0.02,0.01-0.03-0.08,0.08-0.14c0.09-0.05,0.23-0.07,0.41-0.09\n               c0.35-0.03,0.85-0.01,1.48-0.05c0.63-0.03,1.41-0.1,2.25-0.35c0.84-0.24,1.72-0.75,2.73-1.32c1-0.57,2.14-1.17,3.35-1.78\n               c1.23-0.59,2.5-1.31,4.09-1.73c0.4-0.1,0.84-0.16,1.29-0.14c0.44,0.02,0.85,0.09,1.27,0.19c0.83,0.2,1.65,0.53,2.41,0.99\n               c0.76,0.46,1.47,1.04,2.06,1.79c0.62,0.78,0.91,1.78,0.93,2.76c0,0.98-0.17,1.93-0.69,2.8c-0.52,0.87-1.35,1.45-2.17,1.81\n               c-1.67,0.71-3.35,0.82-4.92,0.82c-0.77,0-1.59-0.06-2.32-0.25c-0.73-0.17-1.41-0.39-2.06-0.62c-1.3-0.45-2.47-0.92-3.55-1.34\n               c-2.15-0.85-3.88-1.58-5.05-2.16c-0.58-0.29-1.03-0.54-1.31-0.76c-0.14-0.11-0.24-0.21-0.29-0.29\n               C406.41,249.95,406.45,249.87,406.47,249.89z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M406.47,249.9c0.08-0.17,0.9,0.09,2.14,0.02c1.43-0.08,2.01-0.51,4.57-1.46c2.35-0.86,3.54-1.29,4.48-1.18\n       c1.13,0.14,2.24,0.71,2.89,1.5c0.26,0.31,0.35,0.55,0.38,0.63c0.33,0.91-0.11,1.94-0.52,2.47c-1.31,1.71-4.76,1.43-5.43,1.38\n       c-1.09-0.09-2.52-0.66-5.35-1.8C406.62,250.26,406.42,250,406.47,249.9z\"/>\n   <g>\n       <g>\n           <path d=\"M406.47,249.9c-0.11,0.09,1.65,0.77,4.47,1.82c0.71,0.26,1.48,0.56,2.31,0.83c0.42,0.13,0.85,0.26,1.29,0.34\n               c0.43,0.07,0.91,0.09,1.4,0.09c0.97,0,2-0.08,2.94-0.45c0.46-0.18,0.9-0.45,1.2-0.82c0.3-0.37,0.52-0.88,0.57-1.37\n               c0.18-0.99-0.69-1.77-1.56-2.24c-0.45-0.23-0.93-0.38-1.4-0.45c-0.45-0.07-0.92,0.01-1.39,0.12c-1.87,0.52-3.57,1.18-4.98,1.7\n               c-0.7,0.27-1.37,0.51-2,0.59c-0.62,0.08-1.15,0.06-1.57,0.02C406.89,249.96,406.46,249.85,406.47,249.9\n               c-0.04-0.03,0.1-0.14,0.33-0.13c0.23-0.01,0.55,0.01,0.97,0c0.41-0.01,0.93-0.02,1.49-0.14c0.57-0.11,1.18-0.37,1.87-0.66\n               c1.4-0.58,3.04-1.28,5-1.87c0.5-0.13,1.06-0.24,1.65-0.15c0.56,0.07,1.11,0.24,1.63,0.51c0.52,0.26,1.01,0.62,1.41,1.1\n               c0.42,0.46,0.66,1.22,0.55,1.86c-0.08,0.65-0.34,1.24-0.73,1.74c-0.41,0.5-0.96,0.82-1.5,1.03c-1.1,0.41-2.19,0.47-3.21,0.46\n               c-0.51-0.02-1-0.04-1.51-0.13c-0.49-0.1-0.94-0.24-1.36-0.39c-0.85-0.3-1.61-0.63-2.31-0.92c-1.39-0.59-2.51-1.09-3.26-1.48\n               c-0.38-0.2-0.66-0.37-0.84-0.51C406.45,250.08,406.4,249.89,406.47,249.9z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M241.4,236.62c0.03,0.19-2.54,0.75-7.23,1.48c-4.69,0.72-11.49,1.62-19.95,2.38c-8.45,0.74-18.56,1.38-29.84,0.98\n               c-1.41-0.08-2.84-0.17-4.28-0.25c-1.45-0.11-2.91-0.29-4.38-0.44c-3.01-0.28-6.09-1.12-9-2.39c-2.92-1.26-5.7-3.1-8.1-5.32\n               c-1.22-1.14-2.37-2.44-3.25-3.98c-0.9-1.52-1.48-3.32-1.6-5.14c-0.06-0.84-0.08-1.76,0.06-2.71c0.15-0.94,0.48-2.01,1.29-2.89\n               c0.21-0.21,0.41-0.41,0.7-0.6c0.29-0.19,0.62-0.34,0.92-0.41c0.6-0.16,1.13-0.18,1.61-0.15c0.96,0.05,1.81,0.24,2.62,0.45\n               c1.63,0.43,3.12,1.02,4.58,1.63c1.46,0.61,2.87,1.27,4.26,1.94c2.78,1.32,5.45,2.91,7.93,4.33c2.51,1.39,5.05,2.57,7.62,3.52\n               c2.56,0.96,5.15,1.7,7.7,2.41c2.53,0.71,4.99,1.29,7.41,1.75c4.82,0.92,9.41,1.32,13.62,1.67c8.41,0.7,15.25,0.94,19.98,1.18\n               c1.18,0.06,2.23,0.11,3.14,0.15c0.93,0.05,1.63,0.09,2.38,0.15c0.72,0.08,1.19,0.19,1.47,0.22\n               C241.33,236.61,241.45,236.61,241.4,236.62c-0.05,0-0.26,0-0.62,0.04c-0.36,0.03-0.84,0.14-1.37,0.22\n               c-0.49,0.07-1.33,0.09-2.23,0.13c-0.91,0.03-1.97,0.06-3.15,0.1c-4.74,0.09-11.61,0.14-20.09-0.32\n               c-4.23-0.22-8.91-0.52-13.89-1.37c-2.49-0.42-5.05-0.97-7.63-1.66c-2.57-0.67-5.25-1.39-7.94-2.36\n               c-2.69-0.96-5.38-2.17-8.01-3.6c-2.62-1.46-5.1-2.92-7.84-4.2c-1.36-0.65-2.73-1.28-4.13-1.86c-1.4-0.58-2.82-1.12-4.24-1.5\n               c-1.38-0.39-2.99-0.54-3.16-0.06c-0.28,0.3-0.49,0.81-0.59,1.45c-0.1,0.64-0.09,1.34-0.03,2.11c0.16,2.81,1.82,5.32,3.98,7.32\n               c2.21,2.05,4.66,3.69,7.33,4.86c2.67,1.18,5.42,1.96,8.25,2.25c1.44,0.16,2.85,0.35,4.26,0.47c1.42,0.1,2.81,0.2,4.2,0.29\n               c11.09,0.53,21.16,0.09,29.58-0.4c8.43-0.5,15.25-1.11,19.96-1.51C238.76,236.64,241.37,236.43,241.4,236.62z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M241.47,237.2c-0.07,0.08-1.28-0.76-3.47-2.3c-2.19-1.54-5.34-3.78-9.31-6.45c-3.97-2.66-8.74-5.76-14.28-8.72\n               c-0.7-0.36-1.41-0.72-2.12-1.08c-0.72-0.35-1.46-0.67-2.2-1.02c-1.46-0.69-3.02-1.14-4.65-1.39c-1.64-0.26-3.3-0.25-5,0.01\n               c-1.65,0.25-3.24,0.86-4.18,2.14c-0.53,0.65-0.8,1.38-0.62,1.69c0.01,0.07,0.31,0.3,0.66,0.45c0.35,0.16,0.75,0.29,1.15,0.4\n               c1.63,0.45,3.36,0.69,5.05,0.9c1.69,0.22,3.33,0.28,5.02,0.41c1.68,0.14,3.32,0.4,4.9,0.76c1.57,0.36,3.07,0.82,4.5,1.26\n               c1.45,0.45,2.84,0.95,4.16,1.48c2.65,1.07,4.99,2.29,7.11,3.42c4.24,2.25,7.56,4.26,9.84,5.68c1.12,0.7,2.05,1.3,2.55,1.67\n               C241.03,236.91,241.43,237.19,241.47,237.2c0.04,0.01-0.2-0.09-0.96-0.4c-0.72-0.35-1.57-0.81-2.77-1.45\n               c-2.36-1.25-5.76-3.12-10.04-5.23c-2.14-1.06-4.48-2.21-7.08-3.19c-1.3-0.5-2.66-0.96-4.08-1.37c-1.44-0.42-2.9-0.85-4.42-1.17\n               c-1.52-0.33-3.09-0.55-4.71-0.68c-1.61-0.11-3.36-0.16-5.08-0.38c-1.73-0.21-3.49-0.44-5.29-0.93\n               c-0.45-0.12-0.91-0.27-1.37-0.48c-0.44-0.23-1-0.43-1.42-1.18c-0.31-0.67-0.23-1.39-0.02-1.92c0.2-0.54,0.5-0.98,0.8-1.37\n               c0.61-0.83,1.48-1.5,2.38-1.91c0.91-0.43,1.86-0.67,2.78-0.81c1.82-0.28,3.7-0.28,5.47,0.02c1.76,0.28,3.48,0.8,5.02,1.54\n               c0.76,0.36,1.52,0.7,2.25,1.07c0.72,0.38,1.44,0.76,2.15,1.13c5.59,3.08,10.33,6.29,14.23,9.08c3.9,2.79,6.97,5.17,9.05,6.86\n               C240.44,236.12,241.54,237.12,241.47,237.2z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M242.83,235.6c0.07,0.08-0.96,1.15-2.92,2.98c-1.97,1.82-4.87,4.4-8.59,7.44c-3.72,3.03-8.24,6.55-13.61,9.98\n               c-0.68,0.42-1.37,0.84-2.07,1.26c-0.71,0.41-1.44,0.8-2.17,1.21c-1.48,0.84-3.16,1.47-4.91,1.86c-1.74,0.41-3.61,0.53-5.45,0.37\n               c-0.93-0.08-1.9-0.26-2.83-0.63c-0.93-0.35-1.84-0.97-2.5-1.75c-0.32-0.37-0.65-0.79-0.89-1.32c-0.24-0.51-0.37-1.23-0.11-1.92\n               c0.36-0.78,0.91-1.02,1.34-1.27c0.45-0.24,0.9-0.41,1.34-0.57c1.77-0.6,3.5-0.95,5.22-1.27c1.71-0.33,3.45-0.49,5.05-0.71\n               c1.61-0.23,3.16-0.56,4.65-0.98c1.49-0.42,2.93-0.94,4.33-1.46c1.39-0.51,2.72-1.05,3.99-1.63c2.53-1.15,4.79-2.45,6.86-3.65\n               c4.14-2.39,7.4-4.47,9.68-5.87c1.16-0.72,1.98-1.23,2.67-1.63C242.63,235.7,242.86,235.58,242.83,235.6s-0.42,0.32-0.84,0.76\n               c-0.47,0.4-1.36,1.05-2.43,1.83c-2.18,1.56-5.36,3.79-9.45,6.31c-2.04,1.26-4.3,2.63-6.87,3.87c-1.28,0.62-2.64,1.21-4.05,1.75\n               c-1.4,0.54-2.86,1.09-4.41,1.55c-1.55,0.46-3.17,0.82-4.84,1.07c-1.68,0.24-3.31,0.4-4.99,0.73c-1.67,0.32-3.38,0.68-4.98,1.23\n               c-0.4,0.14-0.79,0.3-1.12,0.48c-0.34,0.17-0.63,0.42-0.63,0.49c-0.17,0.32,0.16,1.04,0.73,1.65c1.02,1.22,2.64,1.72,4.31,1.87\n               c1.71,0.15,3.37,0.05,4.99-0.32c1.61-0.36,3.14-0.91,4.55-1.69c0.72-0.39,1.44-0.76,2.13-1.16c0.69-0.41,1.37-0.82,2.05-1.22\n               c5.34-3.32,9.9-6.72,13.69-9.63c3.78-2.91,6.79-5.36,8.87-7.04C241.6,236.44,242.76,235.52,242.83,235.6z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M195.72,210.25c0.01,0.02-0.08,0.05-0.16-0.05c-0.08-0.08-0.14-0.22-0.2-0.4c-0.12-0.36-0.23-0.9-0.34-1.59\n               c-0.21-1.39-0.37-3.41-0.52-5.89c-0.08-1.24-0.16-2.61-0.18-4.09c-0.01-0.74,0-1.51,0.09-2.33c0.05-0.41,0.11-0.82,0.22-1.25\n               c0.1-0.39,0.22-0.8,0.35-1.2c0.53-1.6,1.23-3.28,2.51-4.74c0.64-0.72,1.49-1.37,2.54-1.65c1.04-0.28,2.08-0.2,3.1,0.09\n               c1,0.29,1.99,0.97,2.55,1.87c0.56,0.86,0.9,1.8,1.08,2.74c0.18,0.94,0.22,1.89,0.1,2.81c-0.06,0.45-0.15,0.91-0.32,1.37\n               c-0.17,0.45-0.4,0.84-0.64,1.21c-0.98,1.44-2.09,2.54-3.09,3.62c-1,1.07-1.97,2.05-2.87,2.91c-0.89,0.87-1.69,1.63-2.2,2.42\n               c-0.52,0.79-0.84,1.57-1.09,2.21c-0.24,0.64-0.4,1.16-0.54,1.51c-0.07,0.17-0.14,0.31-0.22,0.39\n               C195.8,210.3,195.71,210.27,195.72,210.25c0.02-0.03,0.1-0.12,0.15-0.5c0.07-0.35,0.15-0.89,0.33-1.58\n               c0.19-0.68,0.45-1.52,0.96-2.42c0.51-0.91,1.32-1.76,2.17-2.66c0.86-0.9,1.77-1.89,2.74-2.99c0.96-1.09,2.05-2.24,2.89-3.54\n               c0.43-0.67,0.67-1.3,0.75-2.12c0.09-0.79,0.05-1.62-0.11-2.44c-0.17-0.81-0.47-1.62-0.92-2.31c-0.43-0.68-1.09-1.13-1.9-1.38\n               c-0.79-0.23-1.7-0.3-2.45-0.08c-0.75,0.2-1.42,0.68-1.97,1.29c-1.11,1.23-1.81,2.8-2.33,4.3c-0.13,0.38-0.25,0.76-0.36,1.13\n               c-0.1,0.35-0.17,0.72-0.22,1.08c-0.1,0.74-0.13,1.48-0.14,2.2c-0.02,1.45,0.01,2.81,0.03,4.05\n               C195.42,207.26,195.52,210.36,195.72,210.25z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M195.7,210.25c0.2-0.04,0.21-0.95,0.7-2.21c0.56-1.45,1.2-1.94,3.01-4.33c1.67-2.2,2.5-3.31,2.7-4.32\n       c0.24-1.21,0.02-2.5-0.56-3.38c-0.23-0.35-0.44-0.5-0.51-0.56c-0.82-0.58-2.02-0.39-2.69-0.12c-2.18,0.9-3.06,4.54-3.23,5.25\n       c-0.28,1.14-0.17,2.78,0.05,5.99C195.39,210,195.59,210.27,195.7,210.25z\"/>\n   <g>\n       <g>\n           <path d=\"M195.7,210.25c0.01,0.01-0.05,0.04-0.11-0.02c-0.05-0.05-0.1-0.14-0.14-0.26c-0.09-0.23-0.17-0.58-0.24-1.04\n               c-0.16-0.9-0.29-2.22-0.43-3.84c-0.07-0.81-0.14-1.7-0.16-2.68c0-0.49,0-1,0.08-1.53c0.09-0.55,0.23-1.04,0.39-1.58\n               c0.34-1.05,0.78-2.14,1.56-3.13c0.39-0.48,0.9-0.94,1.54-1.2c0.63-0.25,1.31-0.35,2.01-0.25c0.35,0.05,0.71,0.18,1.02,0.39\n               c0.33,0.23,0.54,0.51,0.72,0.8c0.35,0.58,0.53,1.22,0.61,1.84c0.07,0.63,0.04,1.24-0.11,1.85c-0.16,0.62-0.47,1.13-0.76,1.59\n               c-1.24,1.81-2.47,3.29-3.52,4.55c-0.52,0.62-0.98,1.18-1.27,1.73c-0.3,0.55-0.49,1.06-0.64,1.49c-0.14,0.43-0.23,0.77-0.32,1\n               C195.88,210.2,195.72,210.31,195.7,210.25c0.05,0.02,0.08-0.46,0.26-1.37c0.1-0.45,0.25-1,0.54-1.61\n               c0.28-0.61,0.74-1.23,1.23-1.87c0.98-1.29,2.18-2.83,3.34-4.59c0.27-0.44,0.53-0.91,0.65-1.38c0.11-0.49,0.14-1.04,0.07-1.58\n               c-0.15-1.04-0.63-2.24-1.7-2.34c-0.52-0.08-1.1,0-1.59,0.2c-0.48,0.2-0.9,0.55-1.25,0.97c-0.69,0.85-1.13,1.87-1.47,2.86\n               c-0.16,0.49-0.32,1.01-0.4,1.46c-0.08,0.47-0.1,0.95-0.11,1.42c-0.01,0.94,0.03,1.83,0.06,2.64\n               C195.46,208.3,195.57,210.34,195.7,210.25z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M164.83,208.04c0.02,0.01-0.02,0.09-0.14,0.09c-0.11,0-0.26-0.04-0.43-0.11c-0.35-0.15-0.83-0.42-1.41-0.8\n               c-1.18-0.77-2.79-1.99-4.75-3.52c-0.98-0.77-2.06-1.61-3.18-2.58c-0.56-0.49-1.13-1.01-1.68-1.61c-0.27-0.3-0.54-0.63-0.79-0.99\n               c-0.23-0.34-0.45-0.69-0.66-1.06c-0.84-1.46-1.64-3.1-1.88-5.03c-0.11-0.96-0.04-2.02,0.45-2.99c0.48-0.97,1.23-1.69,2.13-2.26\n               c0.89-0.56,2.05-0.85,3.09-0.67c1.01,0.15,1.94,0.52,2.77,1.01c0.83,0.49,1.56,1.09,2.17,1.79c0.3,0.35,0.59,0.72,0.81,1.15\n               c0.22,0.42,0.37,0.86,0.48,1.28c0.42,1.69,0.51,3.25,0.66,4.72c0.13,1.46,0.22,2.84,0.28,4.08c0.06,1.25,0.1,2.34,0.35,3.25\n               c0.25,0.91,0.62,1.67,0.93,2.28c0.32,0.61,0.6,1.06,0.77,1.4c0.08,0.17,0.14,0.31,0.14,0.42\n               C164.92,208.02,164.84,208.06,164.83,208.04c-0.01-0.03-0.02-0.15-0.27-0.44c-0.22-0.28-0.57-0.7-0.97-1.29\n               c-0.39-0.59-0.83-1.35-1.17-2.32c-0.34-0.99-0.44-2.16-0.56-3.39c-0.11-1.24-0.24-2.58-0.42-4.03\n               c-0.18-1.44-0.32-3.02-0.73-4.52c-0.21-0.76-0.53-1.37-1.09-1.97c-0.53-0.59-1.18-1.12-1.9-1.53c-0.72-0.41-1.52-0.72-2.34-0.84\n               c-0.8-0.13-1.57,0.07-2.29,0.51c-0.7,0.44-1.35,1.08-1.68,1.77c-0.35,0.69-0.43,1.52-0.35,2.33c0.19,1.64,0.9,3.21,1.67,4.6\n               c0.2,0.35,0.4,0.69,0.61,1.02c0.2,0.31,0.43,0.6,0.67,0.88c0.49,0.56,1.02,1.08,1.55,1.57c1.07,0.98,2.11,1.86,3.05,2.66\n               C162.39,206.28,164.78,208.26,164.83,208.04z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M164.82,208.05c0.1-0.17-0.57-0.79-1.19-1.99c-0.71-1.38-0.66-2.18-1.24-5.13c-0.54-2.7-0.82-4.07-1.44-4.89\n       c-0.74-0.98-1.85-1.68-2.9-1.82c-0.42-0.06-0.67,0-0.76,0.02c-0.97,0.23-1.63,1.25-1.87,1.94c-0.77,2.23,1.37,5.3,1.78,5.9\n       c0.67,0.97,1.96,1.97,4.51,3.94C164.42,208.12,164.76,208.15,164.82,208.05z\"/>\n   <g>\n       <g>\n           <path d=\"M164.82,208.05c0.02,0,0,0.07-0.09,0.07c-0.08,0.01-0.17-0.02-0.29-0.07c-0.23-0.09-0.55-0.26-0.94-0.51\n               c-0.78-0.48-1.85-1.26-3.16-2.23c-0.65-0.49-1.37-1.02-2.11-1.66c-0.37-0.32-0.75-0.66-1.09-1.08\n               c-0.35-0.43-0.63-0.86-0.92-1.34c-0.56-0.95-1.09-2.01-1.3-3.25c-0.1-0.62-0.11-1.3,0.12-1.95c0.23-0.64,0.6-1.21,1.15-1.67\n               c0.27-0.23,0.61-0.41,0.97-0.5c0.39-0.09,0.74-0.07,1.07-0.01c0.67,0.12,1.26,0.41,1.78,0.77c0.52,0.37,0.95,0.8,1.31,1.31\n               c0.36,0.53,0.53,1.1,0.68,1.63c0.53,2.13,0.82,4.03,1.07,5.65c0.12,0.81,0.23,1.51,0.45,2.1c0.21,0.59,0.47,1.07,0.69,1.46\n               c0.22,0.39,0.42,0.68,0.53,0.9C164.89,207.88,164.87,208.08,164.82,208.05c0.05-0.03-0.29-0.36-0.85-1.11\n               c-0.27-0.38-0.58-0.85-0.84-1.47c-0.27-0.62-0.43-1.37-0.58-2.16c-0.31-1.59-0.68-3.51-1.22-5.55c-0.15-0.5-0.33-1-0.6-1.4\n               c-0.3-0.41-0.69-0.8-1.13-1.1c-0.88-0.58-2.09-1.01-2.88-0.28c-0.41,0.34-0.73,0.83-0.91,1.32c-0.17,0.49-0.18,1.04-0.1,1.58\n               c0.18,1.08,0.65,2.09,1.17,3c0.26,0.44,0.55,0.91,0.83,1.27c0.3,0.37,0.65,0.71,0.99,1.03c0.7,0.63,1.39,1.19,2.02,1.7\n               C163.2,206.94,164.8,208.21,164.82,208.05z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M145.15,224.76c0.02,0-0.02,0.07-0.11,0.07c-0.09,0-0.2-0.03-0.33-0.09c-0.27-0.11-0.64-0.32-1.09-0.62\n               c-0.9-0.59-2.15-1.53-3.66-2.71c-0.75-0.59-1.58-1.24-2.44-1.98c-0.43-0.37-0.87-0.77-1.29-1.24c-0.21-0.23-0.42-0.48-0.6-0.76\n               c-0.17-0.26-0.35-0.53-0.51-0.81c-0.65-1.12-1.26-2.38-1.45-3.87c-0.08-0.74-0.03-1.56,0.34-2.3c0.37-0.74,0.95-1.3,1.64-1.74\n               c0.68-0.43,1.58-0.65,2.38-0.51c0.78,0.12,1.49,0.4,2.13,0.77c0.64,0.38,1.2,0.84,1.67,1.38c0.48,0.51,0.85,1.23,0.99,1.87\n               c0.33,1.3,0.39,2.5,0.51,3.63c0.1,1.12,0.17,2.18,0.21,3.14c0.04,0.96,0.08,1.8,0.27,2.5c0.19,0.7,0.47,1.29,0.72,1.75\n               c0.25,0.47,0.46,0.82,0.59,1.08c0.06,0.13,0.11,0.24,0.11,0.33C145.22,224.74,145.15,224.77,145.15,224.76\n               c0.08-0.03-0.32-0.43-0.95-1.34c-0.3-0.46-0.64-1.03-0.9-1.79c-0.26-0.76-0.34-1.66-0.43-2.61c-0.08-0.96-0.19-1.99-0.32-3.1\n               c-0.14-1.11-0.25-2.32-0.56-3.48c-0.16-0.59-0.41-1.05-0.84-1.52c-0.41-0.46-0.91-0.86-1.46-1.18c-0.55-0.32-1.17-0.55-1.8-0.65\n               c-0.61-0.1-1.21,0.06-1.76,0.39c-0.54,0.34-1.04,0.83-1.3,1.37c-0.27,0.53-0.33,1.17-0.27,1.79c0.14,1.26,0.69,2.47,1.28,3.54\n               c0.15,0.27,0.31,0.53,0.47,0.78c0.15,0.24,0.33,0.46,0.51,0.68c0.38,0.43,0.79,0.83,1.2,1.21c0.82,0.75,1.62,1.43,2.35,2.05\n               C143.27,223.4,145.11,224.92,145.15,224.76z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M145.14,224.77c0.08-0.13-0.44-0.61-0.92-1.53c-0.55-1.06-0.5-1.68-0.96-3.94c-0.41-2.08-0.63-3.13-1.11-3.76\n       c-0.57-0.75-1.43-1.29-2.23-1.4c-0.32-0.04-0.51,0-0.58,0.01c-0.75,0.18-1.26,0.96-1.44,1.49c-0.59,1.71,1.05,4.08,1.37,4.54\n       c0.52,0.74,1.51,1.52,3.47,3.03C144.84,224.82,145.09,224.84,145.14,224.77z\"/>\n   <g>\n       <g>\n           <path d=\"M145.14,224.77c-0.08,0.28-1.45-0.61-3.44-2.1c-0.5-0.38-1.05-0.79-1.62-1.27c-0.28-0.25-0.57-0.51-0.84-0.83\n               c-0.27-0.33-0.48-0.66-0.71-1.03c-0.43-0.73-0.84-1.54-1-2.5c-0.08-0.47-0.08-1,0.09-1.5c0.18-0.49,0.46-0.93,0.89-1.29\n               c0.21-0.17,0.47-0.31,0.74-0.38c0.3-0.07,0.57-0.05,0.82-0.01c0.51,0.09,0.97,0.31,1.37,0.59c0.4,0.28,0.73,0.61,1.01,1\n               c0.27,0.41,0.41,0.84,0.53,1.25c0.41,1.64,0.63,3.1,0.82,4.35c0.09,0.62,0.18,1.16,0.34,1.61c0.16,0.45,0.36,0.83,0.53,1.13\n               C145.03,224.36,145.27,224.75,145.14,224.77c0.04-0.02-0.22-0.28-0.66-0.85c-0.21-0.29-0.45-0.66-0.65-1.13\n               c-0.21-0.48-0.33-1.05-0.45-1.66c-0.24-1.22-0.52-2.7-0.94-4.27c-0.11-0.38-0.25-0.77-0.46-1.08c-0.23-0.31-0.53-0.61-0.87-0.85\n               c-0.68-0.45-1.61-0.78-2.22-0.22c-0.31,0.26-0.56,0.64-0.7,1.02c-0.13,0.38-0.14,0.8-0.08,1.21c0.14,0.83,0.5,1.61,0.9,2.31\n               c0.74,1.44,2.01,2.26,2.95,3.08C143.9,223.91,145.12,224.89,145.14,224.77z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M190.02,226.07c0.03,0.01-0.03,0.11-0.17,0.11c-0.13,0.01-0.31-0.04-0.53-0.12c-0.43-0.17-1.03-0.48-1.76-0.93\n               c-1.47-0.89-3.49-2.31-5.95-4.11c-1.23-0.9-2.58-1.88-3.99-3.01c-0.7-0.57-1.43-1.17-2.14-1.87c-0.72-0.68-1.37-1.56-1.91-2.41\n               c-1.1-1.74-2.16-3.7-2.53-6.06c-0.17-1.17-0.11-2.49,0.49-3.68c0.6-1.2,1.54-2.06,2.63-2.74c1.1-0.66,2.43-1.04,3.73-0.9\n               c1.25,0.13,2.39,0.51,3.44,1.04c1.04,0.53,1.99,1.2,2.79,1.99c0.41,0.4,0.77,0.81,1.1,1.29c0.34,0.49,0.57,1.02,0.75,1.53\n               c0.65,2.07,0.75,3.99,0.95,5.77c0.18,1.78,0.3,3.46,0.37,4.98c0.08,1.52,0.13,2.87,0.45,3.97c0.32,1.11,0.79,2.02,1.2,2.75\n               c0.41,0.73,0.78,1.28,0.99,1.69c0.11,0.2,0.18,0.37,0.19,0.51C190.13,226.04,190.03,226.09,190.02,226.07\n               c-0.02-0.03,0-0.07-0.05-0.15c-0.04-0.08-0.15-0.21-0.29-0.38c-0.28-0.34-0.73-0.84-1.23-1.54c-0.5-0.71-1.07-1.62-1.5-2.81\n               c-0.43-1.21-0.55-2.64-0.7-4.14c-0.14-1.52-0.32-3.15-0.55-4.93c-0.24-1.75-0.42-3.7-1.01-5.46c-0.16-0.43-0.35-0.84-0.6-1.19\n               c-0.26-0.36-0.6-0.73-0.94-1.07c-0.71-0.67-1.55-1.25-2.46-1.71c-0.91-0.45-1.92-0.77-2.93-0.87c-0.96-0.11-1.96,0.17-2.84,0.7\n               c-0.87,0.53-1.68,1.3-2.08,2.14c-0.43,0.84-0.51,1.84-0.37,2.82c0.29,1.99,1.24,3.87,2.25,5.53c0.53,0.85,1.03,1.58,1.68,2.23\n               c0.64,0.66,1.32,1.26,1.99,1.83c1.35,1.15,2.66,2.18,3.84,3.13C186.97,224.01,189.96,226.32,190.02,226.07z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M190.01,226.08c0.13-0.2-0.73-0.94-1.52-2.37c-0.91-1.65-0.84-2.6-1.58-6.11c-0.69-3.22-1.04-4.85-1.83-5.82\n       c-0.95-1.17-2.36-2-3.7-2.17c-0.53-0.07-0.85,0-0.97,0.02c-1.24,0.27-2.08,1.49-2.39,2.31c-0.99,2.65,1.74,6.31,2.27,7.03\n       c0.86,1.15,2.5,2.35,5.76,4.7C189.5,226.15,189.93,226.2,190.01,226.08z\"/>\n   <g>\n       <g>\n           <path d=\"M190.01,226.08c0.02,0-0.01,0.08-0.11,0.08c-0.09,0.01-0.21-0.02-0.35-0.07c-0.29-0.1-0.68-0.3-1.16-0.58\n               c-0.97-0.56-2.31-1.46-3.95-2.6c-0.82-0.57-1.71-1.19-2.65-1.93c-0.47-0.37-0.94-0.77-1.4-1.24c-0.46-0.49-0.83-1.03-1.21-1.58\n               c-0.73-1.13-1.44-2.39-1.75-3.9c-0.15-0.75-0.18-1.59,0.1-2.4c0.28-0.8,0.75-1.48,1.42-2.04c0.34-0.27,0.73-0.5,1.16-0.62\n               c0.45-0.14,0.9-0.12,1.3-0.08c0.82,0.11,1.56,0.41,2.22,0.8c0.66,0.4,1.24,0.89,1.71,1.46c0.51,0.6,0.78,1.3,0.98,1.94\n               c0.4,1.3,0.62,2.53,0.85,3.68c0.23,1.15,0.42,2.23,0.58,3.21c0.16,0.98,0.3,1.85,0.58,2.55c0.27,0.71,0.61,1.29,0.89,1.76\n               c0.29,0.47,0.54,0.82,0.69,1.08c0.07,0.13,0.12,0.24,0.14,0.33C190.07,226.05,190.02,226.09,190.01,226.08\n               c0.06-0.03-0.37-0.43-1.08-1.32c-0.34-0.45-0.74-1.02-1.08-1.77c-0.35-0.75-0.55-1.67-0.75-2.64c-0.2-0.98-0.42-2.03-0.69-3.17\n               c-0.27-1.13-0.52-2.36-0.92-3.57c-0.21-0.6-0.45-1.18-0.84-1.63c-0.41-0.48-0.92-0.91-1.49-1.25c-0.57-0.33-1.21-0.58-1.86-0.66\n               c-0.66-0.1-1.21,0.07-1.74,0.49c-0.5,0.41-0.92,1-1.12,1.6c-0.2,0.59-0.2,1.26-0.08,1.91c0.25,1.31,0.89,2.52,1.56,3.6\n               c0.35,0.53,0.7,1.07,1.08,1.49c0.39,0.44,0.84,0.83,1.28,1.2c0.88,0.74,1.75,1.39,2.54,2\n               C187.99,224.78,189.98,226.27,190.01,226.08z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M159.11,253.96c0.03,0,0.01,0.13-0.14,0.18c-0.14,0.06-0.34,0.08-0.6,0.09c-0.52,0-1.27-0.08-2.21-0.25\n               c-1.89-0.33-4.59-0.97-7.89-1.84c-1.65-0.43-3.46-0.91-5.4-1.49c-0.97-0.3-1.97-0.62-2.99-1.03c-1.01-0.38-2.11-0.99-3.03-1.64\n               c-1.89-1.32-3.83-2.86-5.29-5.1c-0.71-1.11-1.27-2.49-1.17-4.01c0.09-1.54,0.77-2.81,1.65-3.96c0.9-1.13,2.14-2.02,3.55-2.41\n               c1.35-0.37,2.69-0.43,4-0.33c1.3,0.1,2.56,0.4,3.73,0.85c0.59,0.23,1.15,0.49,1.69,0.81c0.57,0.33,1.07,0.76,1.49,1.21\n               c0.84,0.91,1.44,1.89,1.99,2.82c0.55,0.94,1.03,1.87,1.5,2.76c0.93,1.78,1.77,3.47,2.48,5.02c0.72,1.55,1.33,2.93,2.12,3.94\n               c0.79,1.01,1.68,1.76,2.41,2.35c0.74,0.58,1.35,1,1.74,1.33c0.2,0.17,0.34,0.31,0.41,0.45\n               C159.21,253.88,159.12,253.99,159.11,253.96c-0.03-0.02-0.03-0.07-0.11-0.13c-0.08-0.07-0.25-0.16-0.46-0.27\n               c-0.44-0.23-1.11-0.56-1.92-1.08c-0.81-0.53-1.79-1.22-2.74-2.29c-0.96-1.07-1.68-2.51-2.46-4.02\n               c-0.77-1.52-1.65-3.14-2.63-4.89c-0.99-1.71-1.98-3.67-3.38-5.18c-0.36-0.37-0.73-0.67-1.17-0.92\n               c-0.46-0.27-0.96-0.49-1.47-0.68c-1.03-0.38-2.15-0.63-3.29-0.71c-1.14-0.08-2.33-0.01-3.42,0.3c-1.04,0.29-1.99,0.97-2.71,1.87\n               c-0.7,0.89-1.26,2.02-1.3,3.03c-0.09,1.03,0.31,2.1,0.9,3.05c1.21,1.91,3.01,3.43,4.78,4.7c1.72,1.31,3.68,1.95,5.57,2.61\n               c1.88,0.63,3.67,1.17,5.3,1.67C155.07,253.05,159.14,254.23,159.11,253.96z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M159.1,253.98c0.06-0.26-1.16-0.68-2.58-1.83c-1.64-1.33-1.95-2.32-4.17-5.6c-2.04-3.01-3.08-4.53-4.32-5.21\n       c-1.49-0.82-3.34-1.12-4.84-0.78c-0.6,0.14-0.91,0.32-1.02,0.39c-1.22,0.76-1.63,2.31-1.62,3.27c0.02,3.08,4.42,5.75,5.28,6.27\n       c1.38,0.84,3.63,1.42,8.06,2.56C158.59,254.25,159.06,254.13,159.1,253.98z\"/>\n   <g>\n       <g>\n           <path d=\"M159.1,253.98c0.02-0.01,0.02,0.09-0.08,0.13c-0.09,0.04-0.22,0.06-0.39,0.07c-0.34,0.01-0.83-0.04-1.45-0.13\n               c-1.24-0.19-3.01-0.58-5.18-1.09c-1.09-0.26-2.28-0.54-3.55-0.91c-0.64-0.19-1.3-0.4-1.97-0.69c-0.69-0.29-1.32-0.7-1.94-1.11\n               c-1.24-0.85-2.52-1.84-3.52-3.25c-0.49-0.7-0.9-1.54-0.98-2.51c-0.08-0.96,0.17-1.88,0.64-2.73c0.25-0.42,0.57-0.8,0.97-1.1\n               c0.41-0.31,0.89-0.49,1.33-0.59c0.89-0.21,1.79-0.21,2.64-0.08c0.85,0.13,1.66,0.4,2.39,0.77c0.77,0.37,1.4,0.98,1.88,1.56\n               c0.98,1.18,1.73,2.36,2.46,3.46c0.72,1.09,1.38,2.14,1.95,3.09c0.58,0.96,1.09,1.79,1.67,2.41c0.58,0.62,1.18,1.09,1.67,1.45\n               c0.5,0.36,0.9,0.62,1.17,0.83c0.13,0.11,0.23,0.19,0.28,0.28C159.15,253.92,159.11,253.99,159.1,253.98\n               c0.05-0.06-0.56-0.29-1.68-0.91c-0.54-0.32-1.2-0.75-1.87-1.38c-0.68-0.63-1.27-1.5-1.89-2.42c-0.62-0.93-1.29-1.93-2.05-3\n               c-0.76-1.06-1.54-2.24-2.47-3.31c-0.47-0.53-0.96-1-1.6-1.29c-0.64-0.31-1.35-0.54-2.09-0.64c-0.74-0.11-1.5-0.1-2.22,0.08\n               c-0.73,0.16-1.25,0.56-1.63,1.2c-0.36,0.62-0.57,1.41-0.5,2.1c0.05,0.7,0.36,1.38,0.78,1.99c0.85,1.23,2.04,2.2,3.21,3.03\n               c0.6,0.41,1.18,0.8,1.77,1.06c0.61,0.28,1.23,0.5,1.85,0.7c1.23,0.4,2.41,0.72,3.48,1.03\n               C156.45,253.44,159.14,254.17,159.1,253.98z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M190.01,249.94c0.02-0.01,0.06,0.06,0,0.16c-0.05,0.09-0.15,0.19-0.29,0.29c-0.28,0.21-0.72,0.47-1.31,0.76\n               c-1.16,0.58-2.9,1.31-5.05,2.16c-1.08,0.43-2.25,0.89-3.55,1.34c-0.65,0.22-1.33,0.44-2.06,0.62c-0.73,0.19-1.55,0.25-2.32,0.25\n               c-1.56,0-3.25-0.11-4.92-0.82c-0.82-0.36-1.64-0.94-2.17-1.81c-0.53-0.87-0.7-1.82-0.69-2.8c0.02-0.97,0.31-1.98,0.93-2.76\n               c0.59-0.75,1.3-1.33,2.06-1.79c0.76-0.46,1.57-0.79,2.41-0.99c0.42-0.1,0.83-0.16,1.27-0.19c0.45-0.02,0.88,0.04,1.29,0.14\n               c1.6,0.42,2.86,1.13,4.09,1.73c1.21,0.61,2.35,1.21,3.35,1.78c1.01,0.57,1.89,1.08,2.73,1.32c0.84,0.24,1.62,0.31,2.25,0.35\n               c0.64,0.03,1.14,0.02,1.48,0.05c0.17,0.01,0.31,0.03,0.41,0.09C190.03,249.86,190.02,249.94,190.01,249.94\n               c0.02-0.1-0.64,0.07-1.97,0.17c-0.66,0.03-1.47,0.03-2.41-0.18c-0.95-0.21-1.92-0.71-2.94-1.23c-1.03-0.53-2.15-1.07-3.39-1.64\n               c-1.22-0.55-2.54-1.23-3.92-1.56c-0.68-0.17-1.34-0.11-2.08,0.08c-0.72,0.18-1.43,0.49-2.09,0.89c-0.66,0.4-1.27,0.92-1.74,1.53\n               c-0.46,0.57-0.68,1.33-0.7,2.11c-0.01,0.77,0.15,1.61,0.53,2.2c0.36,0.61,0.98,1.07,1.66,1.38c1.4,0.62,2.99,0.77,4.46,0.79\n               c0.76,0.01,1.43-0.03,2.11-0.18c0.68-0.14,1.34-0.34,1.98-0.54c1.28-0.4,2.47-0.83,3.56-1.2\n               C187.45,251.07,190.14,250.08,190.01,249.94z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M190.01,249.95c-0.08-0.17-0.9,0.09-2.14,0.02c-1.43-0.08-2.01-0.51-4.57-1.46c-2.35-0.86-3.54-1.29-4.48-1.18\n       c-1.13,0.14-2.24,0.71-2.89,1.5c-0.26,0.31-0.35,0.55-0.38,0.63c-0.33,0.91,0.11,1.94,0.52,2.47c1.31,1.71,4.76,1.43,5.43,1.38\n       c1.09-0.09,2.52-0.66,5.35-1.8C189.85,250.31,190.05,250.05,190.01,249.95z\"/>\n   <g>\n       <g>\n           <path d=\"M190.01,249.95c0.06-0.01,0.02,0.18-0.18,0.3c-0.18,0.14-0.47,0.31-0.84,0.51c-0.75,0.4-1.87,0.89-3.26,1.48\n               c-0.7,0.29-1.46,0.62-2.31,0.92c-0.43,0.15-0.87,0.3-1.36,0.39c-0.5,0.1-0.99,0.12-1.51,0.13c-1.02,0.01-2.12-0.05-3.21-0.46\n               c-0.54-0.21-1.09-0.53-1.5-1.03c-0.4-0.5-0.65-1.08-0.73-1.74c-0.11-0.64,0.13-1.4,0.55-1.86c0.4-0.48,0.89-0.84,1.41-1.1\n               c0.52-0.26,1.07-0.43,1.63-0.51c0.59-0.08,1.15,0.03,1.65,0.15c1.96,0.59,3.6,1.29,5,1.87c0.69,0.3,1.31,0.55,1.87,0.66\n               c0.57,0.12,1.08,0.13,1.49,0.14c0.42,0,0.74-0.02,0.97,0C189.91,249.81,190.05,249.93,190.01,249.95c0-0.05-0.43,0.06-1.28,0.16\n               c-0.43,0.04-0.96,0.06-1.57-0.02c-0.62-0.08-1.29-0.32-2-0.59c-1.4-0.52-3.11-1.17-4.98-1.7c-0.47-0.11-0.94-0.19-1.39-0.12\n               c-0.48,0.07-0.96,0.22-1.4,0.45c-0.87,0.47-1.74,1.24-1.56,2.24c0.06,0.49,0.27,0.99,0.57,1.37c0.3,0.37,0.73,0.64,1.2,0.82\n               c0.94,0.37,1.98,0.45,2.94,0.45c0.48-0.01,0.97-0.02,1.4-0.09c0.44-0.08,0.87-0.2,1.29-0.34c0.83-0.27,1.6-0.56,2.31-0.83\n               C188.36,250.73,190.12,250.05,190.01,249.95z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M324.6,150.06c0.16,0.02-0.58-2.46-1.83-6.42c-0.31-0.99-0.65-2.08-1.04-3.23c-0.41-1.15-0.81-2.34-1.62-3.4\n               c-0.77-1.09-1.7-2.19-2.85-2.96c-0.57-0.38-1.22-0.65-1.86-0.63c-0.62-0.01-1.32,0.3-1.86,0.72c-0.55,0.43-0.96,0.99-1.11,1.64\n               c-0.17,0.67-0.2,1.4-0.13,2.09c0.16,1.37,0.63,2.78,1.52,3.59c0.95,0.86,2.12,1.49,3.15,2.12c1.05,0.63,2.03,1.19,2.94,1.69\n               c0.91,0.5,1.77,0.97,2.41,1.57c0.63,0.59,1.05,1.19,1.37,1.69C324.32,149.54,324.54,150.12,324.6,150.06\n               c0.01,0.01-0.05,0.06-0.14,0.01c-0.09-0.04-0.17-0.13-0.27-0.25c-0.2-0.24-0.46-0.61-0.81-1.07c-0.36-0.45-0.81-0.99-1.42-1.49\n               c-0.61-0.5-1.43-0.9-2.37-1.37c-0.94-0.46-1.96-1-3.03-1.59c-1.07-0.61-2.24-1.2-3.37-2.17c-0.28-0.25-0.54-0.54-0.76-0.88\n               c-0.21-0.33-0.38-0.67-0.53-1.02c-0.3-0.71-0.49-1.47-0.58-2.26c-0.09-0.79-0.06-1.62,0.14-2.45c0.2-0.87,0.77-1.65,1.47-2.19\n               c0.72-0.53,1.52-0.91,2.47-0.92c0.93-0.02,1.74,0.36,2.41,0.81c1.34,0.91,2.27,2.1,3.07,3.26c0.85,1.17,1.28,2.51,1.65,3.67\n               c0.36,1.18,0.66,2.29,0.93,3.29c0.54,2.01,0.94,3.66,1.15,4.81c0.1,0.58,0.16,1.03,0.16,1.35\n               C324.79,149.91,324.65,150.12,324.6,150.06z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M324.62,150.05c-0.16,0.03-0.41-0.71-1.12-1.6c-0.81-1.02-1.42-1.23-3.42-2.65c-1.84-1.3-2.76-1.97-3.18-2.73\n       c-0.5-0.91-0.69-2.03-0.49-2.92c0.08-0.35,0.19-0.54,0.23-0.61c0.46-0.71,1.4-0.92,1.98-0.89c1.87,0.09,3.51,2.8,3.83,3.33\n       c0.51,0.85,0.88,2.21,1.58,4.91C324.78,149.75,324.71,150.03,324.62,150.05z\"/>\n   <g>\n       <g>\n           <path d=\"M324.62,150.05c0.12,0.03-0.34-1.61-1.11-4.22c-0.19-0.65-0.39-1.37-0.64-2.12c-0.24-0.77-0.56-1.48-1.09-2.21\n               c-0.5-0.72-1.1-1.44-1.84-1.98c-0.37-0.26-0.79-0.47-1.21-0.51c-0.42-0.06-0.91,0.05-1.29,0.26c-0.8,0.39-0.85,1.47-0.71,2.35\n               c0.08,0.45,0.23,0.88,0.43,1.27c0.19,0.37,0.49,0.68,0.81,0.97c1.35,1.12,2.71,2.05,3.81,2.84c0.56,0.39,1.08,0.77,1.45,1.19\n               c0.38,0.42,0.64,0.82,0.83,1.15C324.44,149.7,324.58,150.08,324.62,150.05c-0.08,0.12-0.35-0.29-0.77-0.89\n               c-0.22-0.3-0.5-0.67-0.88-1.03c-0.37-0.36-0.87-0.69-1.45-1.06c-1.15-0.75-2.51-1.61-3.95-2.77c-0.35-0.3-0.72-0.66-0.97-1.13\n               c-0.24-0.44-0.41-0.93-0.51-1.45c-0.09-0.52-0.12-1.06,0-1.61c0.08-0.55,0.49-1.16,1.03-1.43c0.53-0.28,1.1-0.4,1.68-0.33\n               c0.59,0.07,1.09,0.34,1.51,0.64c0.85,0.62,1.45,1.4,1.97,2.16c0.25,0.38,0.5,0.76,0.68,1.18c0.18,0.41,0.31,0.81,0.43,1.2\n               c0.23,0.78,0.41,1.5,0.57,2.17C324.61,148.33,324.92,150.09,324.62,150.05z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M270.08,150.06c-0.04,0.07-0.18-0.14-0.16-0.46c0-0.32,0.06-0.77,0.16-1.35c0.21-1.16,0.61-2.8,1.15-4.81\n               c0.27-1.01,0.56-2.11,0.93-3.29c0.37-1.16,0.79-2.5,1.65-3.67c0.8-1.16,1.74-2.34,3.07-3.26c0.67-0.44,1.48-0.82,2.41-0.81\n               c0.94,0.01,1.75,0.39,2.47,0.92c0.71,0.54,1.27,1.32,1.47,2.19c0.2,0.83,0.23,1.65,0.14,2.45c-0.09,0.79-0.28,1.56-0.58,2.26\n               c-0.15,0.36-0.32,0.69-0.53,1.02c-0.22,0.34-0.49,0.63-0.76,0.88c-1.12,0.97-2.3,1.55-3.37,2.17c-1.07,0.59-2.09,1.13-3.03,1.59\n               c-0.94,0.46-1.76,0.86-2.37,1.37c-0.61,0.5-1.06,1.05-1.42,1.49c-0.35,0.45-0.61,0.83-0.81,1.07c-0.1,0.12-0.19,0.21-0.27,0.25\n               C270.13,150.12,270.07,150.07,270.08,150.06c0.06,0.06,0.29-0.51,0.9-1.54c0.32-0.5,0.74-1.1,1.37-1.69\n               c0.64-0.6,1.5-1.07,2.41-1.57c0.91-0.5,1.89-1.06,2.94-1.69c1.04-0.63,2.21-1.27,3.15-2.12c0.89-0.81,1.36-2.21,1.52-3.59\n               c0.07-0.69,0.04-1.42-0.13-2.09c-0.15-0.65-0.56-1.21-1.11-1.64c-0.55-0.41-1.25-0.72-1.86-0.72c-0.64-0.02-1.28,0.25-1.86,0.63\n               c-1.16,0.77-2.08,1.88-2.85,2.96c-0.8,1.06-1.21,2.25-1.62,3.4c-0.39,1.15-0.73,2.24-1.04,3.23\n               C270.66,147.6,269.92,150.08,270.08,150.06z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M270.07,150.05c0.16,0.03,0.41-0.71,1.12-1.6c0.81-1.02,1.42-1.23,3.42-2.65c1.84-1.3,2.76-1.97,3.18-2.73\n       c0.5-0.91,0.69-2.03,0.49-2.92c-0.08-0.35-0.19-0.54-0.23-0.61c-0.46-0.71-1.4-0.92-1.98-0.89c-1.87,0.09-3.51,2.8-3.83,3.33\n       c-0.51,0.85-0.88,2.21-1.58,4.91C269.91,149.75,269.98,150.03,270.07,150.05z\"/>\n   <g>\n       <g>\n           <path d=\"M270.07,150.05c-0.3,0.04,0.01-1.72,0.66-4.34c0.16-0.66,0.34-1.39,0.57-2.17c0.12-0.39,0.25-0.79,0.43-1.2\n               c0.18-0.42,0.43-0.8,0.68-1.18c0.52-0.76,1.12-1.54,1.97-2.16c0.42-0.3,0.93-0.57,1.51-0.64c0.58-0.07,1.15,0.05,1.68,0.33\n               c0.54,0.26,0.94,0.88,1.03,1.43c0.12,0.55,0.1,1.1,0,1.61c-0.1,0.52-0.27,1-0.51,1.45c-0.25,0.47-0.62,0.83-0.97,1.13\n               c-1.44,1.16-2.8,2.02-3.95,2.77c-0.58,0.37-1.08,0.69-1.45,1.06c-0.38,0.36-0.66,0.73-0.88,1.03\n               C270.42,149.76,270.15,150.17,270.07,150.05c0.04,0.03,0.18-0.35,0.55-1.03c0.2-0.33,0.45-0.74,0.83-1.15\n               c0.38-0.42,0.9-0.8,1.46-1.19c1.1-0.78,2.46-1.71,3.81-2.84c0.32-0.29,0.63-0.6,0.81-0.97c0.2-0.39,0.35-0.82,0.43-1.27\n               c0.14-0.88,0.09-1.96-0.71-2.35c-0.38-0.21-0.87-0.32-1.29-0.26c-0.43,0.05-0.84,0.25-1.21,0.51c-0.74,0.54-1.34,1.26-1.84,1.98\n               c-0.53,0.72-0.85,1.44-1.09,2.21c-0.25,0.75-0.45,1.47-0.64,2.12C270.41,148.44,269.95,150.08,270.07,150.05z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M171.63,193.33c-0.02,0.07-0.21-0.09-0.29-0.39c-0.09-0.3-0.18-0.75-0.25-1.34c-0.15-1.16-0.27-2.86-0.37-4.94\n               c-0.05-1.04-0.1-2.18-0.12-3.42c0-1.22-0.03-2.61,0.4-4c0.39-1.35,0.89-2.77,1.84-4.08c0.48-0.64,1.11-1.27,1.99-1.59\n               c0.91-0.3,1.81-0.18,2.65,0.11c0.84,0.31,1.59,0.89,2.05,1.66c0.44,0.73,0.7,1.51,0.87,2.29c0.16,0.78,0.21,1.56,0.15,2.33\n               c-0.03,0.38-0.08,0.76-0.17,1.13c-0.09,0.39-0.24,0.76-0.42,1.09c-0.74,1.3-1.68,2.22-2.5,3.14c-0.83,0.9-1.63,1.74-2.37,2.47\n               c-0.74,0.73-1.4,1.37-1.82,2.04c-0.42,0.67-0.68,1.33-0.88,1.87c-0.19,0.54-0.32,0.97-0.44,1.27c-0.06,0.15-0.11,0.26-0.18,0.33\n               C171.7,193.37,171.62,193.34,171.63,193.33c0.07,0.04,0.11-0.58,0.38-1.74c0.15-0.57,0.36-1.27,0.77-2.04\n               c0.42-0.77,1.09-1.49,1.79-2.25c0.71-0.76,1.46-1.6,2.26-2.53c0.78-0.92,1.7-1.9,2.3-3.01c0.14-0.28,0.26-0.57,0.32-0.86\n               c0.07-0.32,0.11-0.65,0.13-0.99c0.04-0.67-0.01-1.37-0.16-2.06c-0.15-0.68-0.39-1.37-0.75-1.97c-0.34-0.57-0.9-1-1.55-1.24\n               c-0.65-0.23-1.4-0.31-1.97-0.11c-0.59,0.21-1.11,0.69-1.53,1.24c-0.83,1.12-1.35,2.46-1.74,3.74c-0.41,1.25-0.42,2.53-0.45,3.75\n               c-0.02,1.22-0.01,2.36,0,3.4C171.45,190.8,171.49,193.39,171.63,193.33z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M171.62,193.32c0.15-0.02,0.17-0.81,0.57-1.88c0.45-1.23,0.95-1.6,2.39-3.56c1.32-1.8,1.99-2.71,2.15-3.57\n       c0.2-1.03,0.04-2.17-0.41-2.97c-0.18-0.32-0.34-0.47-0.4-0.52c-0.64-0.56-1.58-0.48-2.11-0.28c-1.71,0.64-2.43,3.74-2.57,4.35\n       c-0.23,0.98-0.16,2.4-0.01,5.21C171.38,193.08,171.53,193.34,171.62,193.32z\"/>\n   <g>\n       <g>\n           <path d=\"M171.62,193.32c-0.27,0.12-0.5-1.64-0.68-4.34c-0.05-0.68-0.1-1.43-0.12-2.24c-0.01-0.41-0.01-0.83,0.03-1.27\n               c0.04-0.45,0.15-0.9,0.27-1.34c0.25-0.89,0.57-1.82,1.16-2.69c0.3-0.43,0.68-0.85,1.21-1.11c0.54-0.27,1.12-0.32,1.72-0.21\n               c0.59,0.1,1.16,0.56,1.4,1.06c0.27,0.49,0.42,1.02,0.48,1.54c0.07,0.52,0.05,1.04-0.03,1.53c-0.08,0.52-0.31,0.99-0.55,1.38\n               c-1,1.56-2.02,2.81-2.88,3.88c-0.43,0.53-0.81,1-1.04,1.46c-0.24,0.46-0.39,0.9-0.51,1.26\n               C171.87,192.94,171.73,193.41,171.62,193.32c0.04,0.02,0.06-0.39,0.21-1.15c0.08-0.38,0.2-0.84,0.43-1.35\n               c0.23-0.52,0.6-1.04,1.01-1.59c0.8-1.09,1.8-2.4,2.72-3.9c0.22-0.38,0.39-0.76,0.45-1.18c0.07-0.43,0.08-0.89,0.01-1.35\n               c-0.14-0.88-0.5-1.9-1.38-2.04c-0.42-0.08-0.92-0.04-1.29,0.16c-0.38,0.19-0.71,0.52-0.97,0.89c-0.52,0.76-0.85,1.64-1.1,2.48\n               c-0.28,0.86-0.33,1.64-0.34,2.45c-0.01,0.79,0.02,1.54,0.03,2.22C171.47,191.68,171.52,193.38,171.62,193.32z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M424.5,193.33c0.14,0.07,0.19-2.52,0.19-6.68c0.01-1.04,0.02-2.18,0-3.4c-0.04-1.22-0.04-2.5-0.45-3.75\n               c-0.39-1.28-0.9-2.62-1.74-3.74c-0.42-0.55-0.93-1.02-1.53-1.24c-0.57-0.2-1.32-0.12-1.97,0.11c-0.65,0.24-1.21,0.67-1.55,1.24\n               c-0.36,0.59-0.61,1.28-0.75,1.97c-0.15,0.69-0.2,1.39-0.16,2.06c0.02,0.34,0.06,0.67,0.13,0.99c0.06,0.3,0.18,0.58,0.32,0.86\n               c0.61,1.11,1.52,2.09,2.3,3.01c0.8,0.93,1.55,1.77,2.26,2.53c0.7,0.76,1.38,1.48,1.79,2.25c0.41,0.76,0.62,1.47,0.77,2.04\n               C424.39,192.75,424.43,193.37,424.5,193.33c0.01,0.02-0.07,0.04-0.14-0.04c-0.07-0.07-0.12-0.18-0.18-0.33\n               c-0.12-0.29-0.24-0.73-0.44-1.27c-0.2-0.54-0.46-1.2-0.88-1.87c-0.42-0.67-1.08-1.31-1.82-2.04c-0.74-0.73-1.55-1.56-2.37-2.47\n               c-0.82-0.92-1.76-1.84-2.5-3.14c-0.18-0.33-0.33-0.69-0.42-1.09c-0.09-0.37-0.14-0.75-0.17-1.13c-0.06-0.76,0-1.55,0.15-2.33\n               c0.16-0.78,0.42-1.56,0.87-2.29c0.45-0.77,1.21-1.35,2.05-1.66c0.84-0.29,1.74-0.41,2.65-0.11c0.88,0.32,1.51,0.95,1.99,1.59\n               c0.95,1.31,1.45,2.73,1.84,4.08c0.42,1.39,0.4,2.78,0.4,4c-0.02,1.24-0.07,2.38-0.12,3.42c-0.1,2.08-0.21,3.77-0.37,4.94\n               c-0.08,0.58-0.16,1.03-0.25,1.34C424.71,193.24,424.53,193.4,424.5,193.33z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <path d=\"M424.51,193.32c-0.15-0.02-0.17-0.81-0.57-1.88c-0.45-1.23-0.95-1.6-2.39-3.56c-1.32-1.8-1.99-2.71-2.15-3.57\n       c-0.2-1.03-0.04-2.17,0.41-2.97c0.18-0.32,0.34-0.47,0.4-0.52c0.64-0.56,1.58-0.48,2.11-0.28c1.71,0.64,2.43,3.74,2.57,4.35\n       c0.23,0.98,0.16,2.4,0.01,5.21C424.75,193.08,424.6,193.34,424.51,193.32z\"/>\n   <g>\n       <g>\n           <path d=\"M424.51,193.32c0.1,0.06,0.15-1.65,0.22-4.37c0.02-0.68,0.04-1.43,0.03-2.22c0-0.81-0.06-1.59-0.34-2.45\n               c-0.25-0.84-0.58-1.72-1.1-2.48c-0.26-0.37-0.59-0.71-0.97-0.89c-0.37-0.19-0.87-0.24-1.29-0.16c-0.88,0.14-1.24,1.16-1.38,2.04\n               c-0.06,0.45-0.06,0.91,0.01,1.35c0.06,0.42,0.24,0.8,0.45,1.18c0.92,1.5,1.92,2.81,2.72,3.9c0.41,0.54,0.78,1.07,1.01,1.59\n               c0.23,0.51,0.35,0.98,0.43,1.35C424.45,192.94,424.47,193.34,424.51,193.32c-0.11,0.09-0.25-0.38-0.45-1.09\n               c-0.12-0.36-0.27-0.79-0.51-1.26c-0.24-0.46-0.61-0.93-1.04-1.46c-0.86-1.07-1.88-2.32-2.88-3.88c-0.24-0.4-0.47-0.86-0.55-1.38\n               c-0.08-0.5-0.1-1.01-0.03-1.53c0.07-0.52,0.21-1.04,0.48-1.54c0.24-0.5,0.81-0.97,1.4-1.06c0.59-0.11,1.18-0.06,1.72,0.21\n               c0.53,0.26,0.91,0.69,1.21,1.11c0.59,0.87,0.91,1.8,1.16,2.69c0.12,0.44,0.23,0.89,0.27,1.34c0.04,0.44,0.04,0.87,0.03,1.27\n               c-0.02,0.81-0.07,1.56-0.12,2.24C425.02,191.68,424.79,193.44,424.51,193.32z\"/>\n       </g>\n   </g>\n</g>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_10\">\n<g>\n   <g>\n       <g>\n           <path d=\"M344.61,478.33c-0.15-0.15,1.27-2.05,4.38-4.99c1.56-1.46,3.58-3.16,6.15-4.86c2.57-1.67,5.76-3.39,9.75-4.14\n               c1.98-0.36,4.17-0.45,6.39-0.02c2.24,0.41,4.32,1.32,6.35,2.1c4.04,1.61,8.53,2.74,13.36,3.48c2.39,0.33,4.87,0.57,7.17,0.27\n               c0.57-0.08,1.12-0.19,1.68-0.35c0.56-0.17,1.14-0.36,1.68-0.6c1.1-0.46,2.17-1.05,3.15-1.77c1.96-1.43,3.59-3.37,4.53-5.62\n               c0.97-2.29,1.31-5.05,2.04-8c1.48-5.93,4.55-11.26,8.57-15.36c4.04-4.1,8.68-6.94,12.97-9.52c4.31-2.56,8.35-4.93,11.71-7.61\n               c3.34-2.68,5.95-5.71,7.56-8.89c0.81-1.59,1.39-3.21,1.77-4.79c0.39-1.57,0.62-3.1,0.68-4.54c0.17-2.88-0.17-5.39-0.65-7.39\n               c-0.99-4-2.3-6-2.02-6.16c0.14-0.12,1.89,1.64,3.39,5.76c0.72,2.05,1.31,4.7,1.33,7.83c0.03,1.56-0.12,3.24-0.46,4.99\n               c-0.32,1.75-0.88,3.58-1.71,5.4c-1.65,3.66-4.46,7.13-7.96,10.12c-3.52,2.97-7.66,5.52-11.88,8.14\n               c-4.21,2.63-8.56,5.42-12.15,9.13c-3.56,3.7-6.28,8.48-7.6,13.76c-0.67,2.64-1.01,5.61-2.23,8.53\n               c-1.24,2.94-3.34,5.37-5.78,7.11c-1.22,0.88-2.54,1.6-3.9,2.15c-0.69,0.28-1.37,0.51-2.08,0.71c-0.72,0.2-1.46,0.34-2.19,0.43\n               c-2.91,0.32-5.58-0.01-8.13-0.41c-5.04-0.86-9.79-2.19-13.97-4c-2.09-0.88-3.95-1.75-5.78-2.15c-1.83-0.42-3.67-0.42-5.41-0.19\n               c-3.5,0.49-6.56,1.91-9.1,3.34c-2.54,1.45-4.63,2.94-6.3,4.2C346.58,476.98,344.81,478.54,344.61,478.33z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M366.69,474.8c0-0.02,0.15-0.01,0.43,0.03l-0.04,0.1c-0.88-0.53-3.35-2.06-6.63-2.78c-2.06-0.46-3.99-0.5-5.36-0.37\n               c-0.7,0.05-1.23,0.16-1.64,0.2c-0.1,0-0.22-0.02-0.28-0.11c-0.02-0.03-0.05-0.11,0-0.15c0.04-0.04,0.07-0.04,0.1-0.05\n               c0.05,0,0.12,0.01,0.12,0.07c-0.01,0.04-0.03,0.04-0.03,0.04c-0.01-0.01,0.03-0.06-0.08-0.03c-0.11,0.02-0.02,0.14,0.16,0.11\n               c0.36-0.07,0.93-0.22,1.62-0.3c1.39-0.19,3.36-0.19,5.46,0.28c3.34,0.74,5.81,2.38,6.62,3.02l0.21,0.17l-0.25-0.07\n               C366.83,474.87,366.69,474.82,366.69,474.8z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M361.11,472.24c-0.02-0.01-0.03-0.14,0.11-0.36c0.14-0.22,0.42-0.44,0.79-0.69c0.74-0.53,2.08-0.97,3.72-0.86\n               c0.82,0.05,1.7,0.18,2.63,0.44c0.95,0.25,1.88,0.74,2.81,1.18c0.95,0.44,1.96,0.86,3.05,1.12c1.08,0.26,2.24,0.34,3.33,0.01\n               l1.53-0.47l-1.1,1.16c-0.36,0.38-0.74,0.74-1.13,1.09c-2.05,1.79-4.43,2.96-6.73,3.52c-1.15,0.29-2.41,0.25-3.41-0.18\n               c-1-0.4-1.81-0.94-2.52-1.45c-1.42-1.03-2.45-2.07-2.93-2.98c-0.23-0.45-0.33-0.86-0.29-1.13\n               C361.01,472.35,361.09,472.23,361.11,472.24c0.07,0.01-0.13,0.57,0.43,1.35c0.51,0.78,1.56,1.72,2.98,2.66\n               c0.71,0.46,1.52,0.96,2.43,1.29c0.9,0.35,1.92,0.36,2.99,0.08c2.15-0.57,4.41-1.7,6.35-3.4c0.38-0.33,0.74-0.68,1.08-1.04\n               l0.43,0.69c-1.29,0.39-2.61,0.27-3.77-0.02c-1.17-0.3-2.21-0.75-3.18-1.22c-0.97-0.48-1.82-0.95-2.68-1.21\n               c-0.87-0.27-1.72-0.44-2.48-0.52c-1.54-0.17-2.77,0.15-3.52,0.56c-0.39,0.2-0.67,0.37-0.83,0.52\n               C361.19,472.14,361.14,472.25,361.11,472.24z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M227.99,475.3c0,0.02-0.14,0.07-0.41,0.14l-0.25,0.07l0.21-0.17c0.81-0.64,3.27-2.28,6.62-3.02\n               c2.1-0.47,4.07-0.47,5.46-0.28c0.69,0.08,1.26,0.23,1.62,0.3c0.18,0.03,0.28-0.09,0.16-0.11c-0.1-0.03-0.07,0.02-0.08,0.03\n               c0,0-0.02,0-0.03-0.04c0-0.06,0.07-0.07,0.12-0.07c0.03,0,0.07,0.01,0.1,0.05c0.04,0.04,0.02,0.12,0,0.15\n               c-0.06,0.09-0.18,0.11-0.28,0.11c-0.41-0.04-0.94-0.15-1.64-0.2c-1.37-0.13-3.3-0.09-5.36,0.37c-3.28,0.72-5.74,2.25-6.63,2.78\n               l-0.04-0.1C227.84,475.29,227.99,475.28,227.99,475.3z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M233.57,472.74c-0.03,0.01-0.08-0.1-0.23-0.26c-0.15-0.15-0.44-0.32-0.83-0.52c-0.75-0.41-1.98-0.74-3.52-0.56\n               c-0.76,0.08-1.61,0.25-2.48,0.52c-0.87,0.26-1.72,0.73-2.68,1.21c-0.96,0.47-2.01,0.92-3.18,1.22\n               c-1.16,0.29-2.48,0.41-3.77,0.02l0.43-0.69c0.34,0.36,0.7,0.7,1.08,1.04c1.94,1.7,4.21,2.84,6.35,3.4\n               c1.07,0.28,2.09,0.27,2.99-0.08c0.91-0.34,1.72-0.83,2.43-1.29c1.42-0.94,2.47-1.88,2.98-2.66\n               C233.7,473.31,233.5,472.75,233.57,472.74c0.02-0.01,0.1,0.11,0.14,0.38c0.04,0.28-0.05,0.68-0.29,1.13\n               c-0.48,0.9-1.5,1.94-2.93,2.98c-0.72,0.51-1.53,1.05-2.52,1.45c-1,0.43-2.26,0.47-3.41,0.18c-2.3-0.56-4.67-1.73-6.73-3.52\n               c-0.4-0.35-0.78-0.72-1.13-1.09l-1.1-1.16l1.53,0.47c1.09,0.33,2.25,0.25,3.33-0.01c1.08-0.26,2.1-0.68,3.05-1.12\n               c0.94-0.44,1.87-0.93,2.81-1.18c0.93-0.26,1.81-0.39,2.63-0.44c1.64-0.11,2.98,0.34,3.72,0.86c0.37,0.25,0.65,0.47,0.79,0.69\n               C233.6,472.6,233.6,472.73,233.57,472.74z\"/>\n       </g>\n   </g>\n</g>\n</g>\n<g id=\"\u0421\u043B\u043E\u0439_11\">\n<g>\n   <g>\n       <g>\n           <path d=\"M435.33,414.1c0.08-0.02,0.17,1.62-1.08,3.81c-0.61,1.08-1.55,2.25-2.75,3.36c-1.19,1.12-2.62,2.17-4.08,3.3\n               c-1.46,1.12-2.79,2.24-3.63,3.53c-0.86,1.27-1.11,2.68-1.04,3.84c0.06,1.17,0.41,2.08,0.69,2.67c0.29,0.6,0.51,0.9,0.46,0.94\n               c-0.03,0.03-0.34-0.21-0.73-0.79c-0.38-0.58-0.84-1.52-0.98-2.78c-0.15-1.24,0.07-2.85,0.99-4.27c0.89-1.44,2.29-2.63,3.76-3.76\n               c1.47-1.13,2.9-2.16,4.07-3.21c1.19-1.04,2.11-2.12,2.76-3.11C435.08,415.62,435.2,414.07,435.33,414.1z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M426.4,424.69c0.08-0.18,0.91,0.39,2.47,0c1.54-0.32,3.62-1.52,5.88-3.37c2.2-1.9,4.94-4.27,6.56-7.63\n               c1.67-3.34,2.09-7.7,0.76-11.83l-0.05-0.15l1.86-0.11c-0.49,2.41-1.63,4.58-3.14,6.31c-0.76,0.86-1.61,1.62-2.52,2.25\n               c-0.46,0.32-0.93,0.57-1.39,0.81c-0.46,0.24-0.91,0.48-1.36,0.72c-1.76,0.87-3.43,1.69-5,2.46c-1.53,0.77-2.8,1.62-3.82,2.61\n               c-1.01,0.96-1.62,2.03-1.78,3.08c-0.17,1.05,0.01,2.03,0.26,2.75C425.64,424.08,426.49,424.56,426.4,424.69\n               c-0.03,0.05-0.27,0.01-0.67-0.25c-0.38-0.26-0.89-0.76-1.29-1.56c-0.39-0.79-0.73-1.86-0.64-3.17c0.07-1.32,0.79-2.75,1.87-3.9\n               c1.05-1.15,2.48-2.2,4.04-3.07c1.56-0.87,3.2-1.71,4.95-2.64c0.42-0.23,0.84-0.47,1.27-0.7c0.43-0.23,0.86-0.47,1.24-0.75\n               c0.77-0.56,1.5-1.22,2.15-1.97c1.29-1.51,2.26-3.4,2.68-5.45l0.74-3.63l1.12,3.51l0.05,0.17c1.49,4.6,0.96,9.52-1.01,13.21\n               c-0.96,1.86-2.22,3.41-3.51,4.68c-1.3,1.26-2.57,2.32-3.81,3.23c-2.47,1.79-4.8,2.9-6.61,3.03c-0.44,0.06-0.85,0-1.19-0.03\n               c-0.34-0.1-0.63-0.15-0.83-0.26C426.54,424.9,426.36,424.75,426.4,424.69z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M395.06,450.04c0.06,0.02,0,0.46-0.17,1.25c-0.18,0.79-0.45,1.94-1.07,3.28c-0.62,1.32-1.65,2.91-3.48,3.87\n               c-0.91,0.47-1.94,0.71-2.98,0.87c-1.04,0.16-2.12,0.26-3.22,0.34c-2.19,0.16-4.26,0.28-6.07,0.69c-1.81,0.39-3.34,1.1-4.48,1.89\n               c-2.32,1.62-2.8,3.48-2.95,3.39c-0.05-0.01,0-0.47,0.34-1.23c0.35-0.75,1.05-1.77,2.22-2.69c1.17-0.92,2.77-1.74,4.68-2.2\n               c1.89-0.48,4.02-0.63,6.19-0.79c2.16-0.19,4.29-0.29,5.89-1.05c1.6-0.78,2.62-2.18,3.28-3.4c0.66-1.24,1.03-2.34,1.31-3.09\n               C394.83,450.44,395,450.02,395.06,450.04z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M380.04,459.48c0.04,0.07-0.18,0.27-0.64,0.58l0.02-0.41c0.83,0.39,2.34,1.06,4.55,1.46c1.1,0.2,2.37,0.35,3.79,0.45\n               c1.43,0.09,2.99,0.21,4.59,0.08c1.59-0.12,3.24-0.52,4.46-1.59c1.22-1.06,2.01-2.78,2.26-4.66c0.26-1.9,0.01-3.99-0.31-6.21\n               c-0.31-2.23-0.63-4.53-0.96-6.88c-0.25-1.87-0.5-3.72-0.75-5.52l2.25-0.01c-0.69,5.03-3.24,9.36-6.42,12.21\n               c-3.19,2.88-6.86,4.32-9.95,4.83c-1.51,0.23-2.7,0.51-3.43,1.21c-0.75,0.66-0.82,1.56-0.66,2.31c0.16,0.75,0.45,1.33,0.61,1.73\n               c0.17,0.4,0.24,0.63,0.18,0.67c-0.06,0.04-0.25-0.11-0.54-0.45c-0.28-0.35-0.71-0.87-1.04-1.73c-0.15-0.43-0.29-0.96-0.22-1.57\n               c0.05-0.61,0.34-1.27,0.82-1.79c0.47-0.53,1.1-0.94,1.81-1.23c0.7-0.29,1.44-0.46,2.17-0.63c2.83-0.67,6.09-2.15,8.88-4.83\n               c2.77-2.65,4.97-6.57,5.54-11.03l1.08-8.45l1.17,8.44c0.25,1.8,0.51,3.64,0.77,5.52c0.32,2.35,0.63,4.65,0.93,6.89\n               c0.3,2.24,0.56,4.55,0.2,6.83c-0.35,2.26-1.37,4.45-3.12,5.87c-1.76,1.43-3.89,1.78-5.65,1.83c-1.8,0.05-3.39-0.18-4.83-0.36\n               c-1.45-0.2-2.77-0.45-3.91-0.78c-2.3-0.64-3.81-1.61-4.53-2.23l-0.33-0.29l0.36-0.12C379.72,459.46,380.01,459.41,380.04,459.48\n               z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M426,446c0.04,0.05-0.62,0.45-1.78,0.65c-1.13,0.24-2.71,0.57-4.31,1.27c-1.61,0.69-2.87,1.7-3.62,2.56\n               c-0.76,0.86-1.07,1.52-1.12,1.49c-0.02-0.01,0.03-0.19,0.17-0.48c0.14-0.3,0.38-0.71,0.75-1.18c0.72-0.93,2.01-2.02,3.68-2.73\n               c1.65-0.72,3.27-1.02,4.42-1.19C425.33,446.25,425.97,445.96,426,446z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M421.01,447.3c0.11-0.05,0.32,0.6,1.29,1.14c0.48,0.26,1.12,0.5,1.9,0.63c0.77,0.14,1.63,0.08,2.62-0.15\n               c1.93-0.42,4.05-1.67,5.78-3.67c1.75-1.98,3.03-4.69,4.06-7.64c0.17-0.5,0.34-1,0.51-1.49l1.07,0.72\n               c-1.19,1.01-2.49,1.82-3.82,2.43c-1.33,0.61-2.69,0.98-3.95,1.28c-1.26,0.3-2.43,0.56-3.49,0.89c-0.26,0.08-0.52,0.17-0.77,0.26\n               c-0.21,0.07-0.45,0.19-0.67,0.31c-0.45,0.23-0.88,0.48-1.28,0.73c-1.59,0.99-2.68,2.09-3.02,3.02\n               C420.86,446.67,421.12,447.28,421.01,447.3c-0.04,0.01-0.14-0.11-0.24-0.39c-0.1-0.28-0.15-0.74-0.01-1.31\n               c0.25-1.17,1.37-2.49,2.98-3.63c0.4-0.29,0.84-0.58,1.31-0.85c0.24-0.13,0.47-0.28,0.78-0.4c0.26-0.11,0.53-0.21,0.81-0.31\n               c1.1-0.39,2.3-0.7,3.53-1.04c1.23-0.34,2.49-0.71,3.7-1.29c1.22-0.58,2.41-1.33,3.49-2.27l1.86-1.6l-0.79,2.32\n               c-0.17,0.5-0.34,1.01-0.52,1.52c-1.06,3.03-2.44,5.9-4.41,8.02c-1.93,2.13-4.35,3.43-6.52,3.78c-1.05,0.19-2.11,0.19-2.96-0.04\n               c-0.84-0.21-1.53-0.55-2.03-0.93C420.99,448.1,420.94,447.29,421.01,447.3z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M455.15,402.82c-0.12-0.05,0.12-0.83,0.54-2.23c0.4-1.4,1.01-3.43,1.29-5.99c0.29-2.54,0.18-5.66-1.23-8.7\n               c-0.69-1.52-1.67-3.01-2.87-4.41c-0.6-0.72-1.24-1.37-1.96-2.08c-0.7-0.72-1.51-1.57-1.94-2.77l1.75-0.21\n               c-0.08,0.64-0.19,1.28-0.37,1.89c-0.61,2.22-1.67,4.1-2.52,5.9c-0.87,1.79-1.56,3.51-1.76,5.24c-0.45,3.48,0.63,6.68,2.16,8.84\n               c1.55,2.2,3.44,3.46,4.78,4.18c1.36,0.72,2.2,0.97,2.16,1.11c-0.02,0.1-0.93,0.09-2.45-0.47c-1.5-0.56-3.66-1.73-5.52-4.05\n               c-1.84-2.29-3.21-5.84-2.8-9.8c0.19-1.99,0.94-3.96,1.82-5.81c0.87-1.86,1.85-3.68,2.38-5.61c0.15-0.54,0.25-1.08,0.32-1.61\n               l0.51-3.77l1.24,3.56c0.26,0.74,0.85,1.43,1.52,2.12c0.68,0.69,1.4,1.44,2.02,2.21c1.26,1.53,2.3,3.18,3.02,4.88\n               c0.73,1.7,1.09,3.45,1.21,5.07c0.11,1.62-0.02,3.13-0.25,4.47c-0.47,2.68-1.28,4.7-1.89,6.06\n               C455.7,402.18,455.25,402.86,455.15,402.82z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M249.61,480.14c-0.21,0.19-1.88-1.46-5.05-4.21c-1.59-1.36-3.58-2.97-6.03-4.57c-2.45-1.58-5.42-3.17-8.88-3.88\n               c-1.72-0.34-3.56-0.45-5.41-0.14c-1.85,0.28-3.76,1.04-5.9,1.79c-4.28,1.55-9.1,2.59-14.18,3.15c-2.57,0.24-5.25,0.42-8.14-0.08\n               c-0.72-0.13-1.45-0.32-2.16-0.56c-0.69-0.24-1.37-0.51-2.03-0.83c-1.33-0.63-2.6-1.42-3.77-2.38c-2.33-1.89-4.29-4.44-5.35-7.45\n               c-1.05-2.99-1.21-5.97-1.72-8.64c-1-5.35-3.43-10.29-6.76-14.19c-3.36-3.92-7.53-6.96-11.58-9.85\n               c-4.06-2.87-8.03-5.66-11.37-8.84c-3.32-3.19-5.92-6.83-7.34-10.58c-0.72-1.86-1.16-3.72-1.38-5.49\n               c-0.23-1.77-0.28-3.45-0.15-5.01c0.21-3.12,0.95-5.74,1.8-7.74c1.74-4.03,3.59-5.67,3.73-5.55c0.26,0.18-1.16,2.09-2.39,6.03\n               c-0.6,1.96-1.09,4.44-1.09,7.33c-0.02,1.44,0.11,2.98,0.41,4.58c0.28,1.6,0.76,3.25,1.48,4.88c1.41,3.27,3.84,6.46,7.01,9.33\n               c3.2,2.87,7.08,5.48,11.24,8.3c4.12,2.83,8.58,5.95,12.38,10.28c3.77,4.34,6.51,9.84,7.63,15.85c0.54,2.99,0.72,5.77,1.55,8.11\n               c0.8,2.31,2.31,4.34,4.19,5.88c0.93,0.78,1.96,1.43,3.03,1.96c0.53,0.27,1.09,0.5,1.65,0.7c0.54,0.19,1.09,0.34,1.65,0.45\n               c2.28,0.43,4.77,0.35,7.17,0.16c4.86-0.45,9.41-1.31,13.54-2.67c2.07-0.65,4.2-1.44,6.46-1.71c2.24-0.29,4.42-0.07,6.37,0.4\n               c3.94,0.99,7.01,2.9,9.48,4.72c2.47,1.85,4.38,3.67,5.85,5.22C248.47,478.02,249.77,480,249.61,480.14z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M171.19,421.68c0.03,0.06-0.16,0.2-0.58,0.41c-0.21,0.1-0.5,0.13-0.85,0.21c-0.34,0.01-0.75,0.04-1.19-0.04\n               c-1.79-0.24-4.06-1.49-6.41-3.42c-1.18-0.98-2.39-2.12-3.61-3.46c-1.22-1.35-2.38-2.97-3.22-4.89\n               c-1.74-3.8-1.98-8.75-0.21-13.25l0.06-0.17l1.33-3.44l0.52,3.66c0.29,2.08,1.15,4.02,2.34,5.6c0.6,0.79,1.29,1.5,2.02,2.1\n               c0.36,0.3,0.77,0.56,1.19,0.82c0.41,0.26,0.82,0.52,1.22,0.78c1.69,1.03,3.28,1.97,4.78,2.93c1.5,0.95,2.86,2.09,3.84,3.3\n               c1.02,1.21,1.64,2.69,1.64,4.01c0.01,1.32-0.39,2.36-0.83,3.13c-0.45,0.77-0.99,1.24-1.38,1.48\n               C171.46,421.71,171.21,421.74,171.19,421.68c-0.08-0.13,0.79-0.57,1.4-2.03c0.29-0.71,0.53-1.68,0.42-2.73\n               c-0.09-1.06-0.64-2.16-1.59-3.18c-0.96-1.05-2.18-1.97-3.66-2.84c-1.52-0.86-3.13-1.78-4.84-2.75c-0.43-0.26-0.87-0.53-1.32-0.8\n               c-0.45-0.26-0.9-0.54-1.34-0.89c-0.87-0.68-1.67-1.49-2.38-2.39c-1.41-1.81-2.41-4.05-2.76-6.49l1.85,0.22l-0.06,0.15\n               c-1.58,4.03-1.42,8.42,0.05,11.85c1.42,3.46,4.01,5.99,6.09,8.01c2.15,1.98,4.15,3.3,5.67,3.71\n               C170.26,422.02,171.12,421.5,171.19,421.68z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M143.14,399.38c-0.11,0.04-0.51-0.67-1.05-2.06c-0.53-1.39-1.21-3.46-1.52-6.16c-0.15-1.35-0.19-2.86,0.02-4.47\n               c0.22-1.61,0.69-3.33,1.52-4.98c0.82-1.65,1.95-3.24,3.31-4.69c0.67-0.72,1.43-1.44,2.15-2.08c0.71-0.65,1.34-1.3,1.64-2.03\n               l1.45-3.48l0.28,3.79c0.04,0.54,0.1,1.08,0.22,1.63c0.41,1.96,1.28,3.84,2.04,5.74c0.76,1.89,1.4,3.91,1.46,5.91\n               c0.18,3.98-1.41,7.44-3.38,9.62c-1.99,2.21-4.22,3.25-5.75,3.72c-1.56,0.47-2.46,0.42-2.48,0.32c-0.03-0.14,0.83-0.34,2.23-0.98\n               c1.38-0.64,3.34-1.78,5.02-3.88c1.66-2.06,2.93-5.2,2.69-8.7c-0.1-1.74-0.68-3.49-1.44-5.33c-0.75-1.84-1.69-3.79-2.17-6.04\n               c-0.14-0.63-0.21-1.27-0.25-1.91l1.74,0.31c-0.51,1.17-1.36,1.97-2.11,2.65c-0.76,0.67-1.44,1.28-2.08,1.96\n               c-1.28,1.33-2.35,2.76-3.13,4.23c-1.58,2.95-1.88,6.06-1.75,8.61c0.13,2.57,0.61,4.64,0.93,6.06\n               C143.07,398.54,143.26,399.34,143.14,399.38z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M160.67,410.15c0.13-0.03,0.25,1.52,1.55,3.52c0.64,1,1.57,2.07,2.76,3.11c1.18,1.05,2.6,2.08,4.07,3.21\n               c1.47,1.13,2.87,2.32,3.76,3.76c0.92,1.43,1.14,3.03,0.99,4.27c-0.14,1.26-0.6,2.2-0.98,2.78c-0.39,0.58-0.69,0.82-0.73,0.79\n               c-0.05-0.04,0.17-0.35,0.46-0.94c0.28-0.59,0.63-1.5,0.69-2.67c0.06-1.16-0.18-2.57-1.04-3.84c-0.84-1.29-2.17-2.41-3.63-3.53\n               c-1.46-1.12-2.89-2.18-4.08-3.3c-1.2-1.11-2.13-2.28-2.75-3.36C160.5,411.77,160.59,410.13,160.67,410.15z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M172.47,447.85c0.02-0.04,0.67,0.25,1.82,0.39c1.15,0.17,2.76,0.47,4.42,1.19c1.66,0.71,2.95,1.8,3.68,2.73\n               c0.37,0.46,0.61,0.88,0.75,1.18c0.14,0.3,0.19,0.47,0.17,0.48c-0.06,0.03-0.36-0.63-1.12-1.49c-0.75-0.86-2.01-1.86-3.62-2.56\n               c-1.61-0.7-3.18-1.04-4.31-1.27C173.09,448.29,172.44,447.9,172.47,447.85z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M177.46,449.15c0.07-0.01,0.02,0.8-1,1.58c-0.5,0.37-1.19,0.71-2.03,0.93c-0.85,0.24-1.91,0.23-2.96,0.04\n               c-2.17-0.35-4.59-1.65-6.52-3.78c-1.96-2.12-3.35-4.99-4.41-8.02c-0.17-0.51-0.35-1.02-0.52-1.52l-0.79-2.32l1.86,1.6\n               c1.09,0.93,2.27,1.69,3.49,2.27c1.21,0.58,2.47,0.95,3.7,1.29c1.23,0.33,2.43,0.64,3.53,1.04c0.28,0.1,0.54,0.2,0.81,0.31\n               c0.3,0.12,0.54,0.27,0.78,0.4c0.47,0.27,0.91,0.56,1.31,0.85c1.61,1.15,2.73,2.47,2.98,3.63c0.14,0.57,0.09,1.03-0.01,1.31\n               C177.61,449.05,177.5,449.17,177.46,449.15c-0.11-0.02,0.15-0.63-0.23-1.56c-0.34-0.93-1.43-2.03-3.02-3.02\n               c-0.39-0.25-0.82-0.5-1.28-0.73c-0.23-0.11-0.46-0.24-0.67-0.31c-0.25-0.09-0.51-0.17-0.77-0.26c-1.06-0.33-2.23-0.59-3.49-0.89\n               c-1.25-0.3-2.61-0.67-3.95-1.28c-1.33-0.6-2.63-1.41-3.82-2.43l1.07-0.72c0.17,0.49,0.34,0.99,0.51,1.49\n               c1.03,2.96,2.31,5.66,4.06,7.64c1.73,2,3.85,3.25,5.78,3.67c0.99,0.23,1.85,0.29,2.62,0.15c0.78-0.13,1.42-0.37,1.9-0.63\n               C177.14,449.76,177.36,449.1,177.46,449.15z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M200.25,449.74c0.06-0.02,0.24,0.4,0.51,1.15c0.29,0.75,0.65,1.85,1.31,3.09c0.66,1.21,1.68,2.62,3.28,3.4\n               c1.6,0.76,3.73,0.86,5.89,1.05c2.18,0.16,4.3,0.31,6.19,0.79c1.9,0.46,3.51,1.28,4.68,2.2c1.17,0.92,1.87,1.95,2.22,2.69\n               c0.34,0.76,0.39,1.22,0.34,1.23c-0.15,0.09-0.63-1.77-2.95-3.39c-1.14-0.79-2.67-1.51-4.48-1.89c-1.81-0.41-3.88-0.54-6.07-0.69\n               c-1.1-0.08-2.18-0.18-3.22-0.34c-1.04-0.16-2.07-0.4-2.98-0.87c-1.83-0.96-2.86-2.55-3.48-3.87c-0.62-1.34-0.89-2.49-1.07-3.28\n               C200.25,450.21,200.19,449.76,200.25,449.74z\"/>\n       </g>\n   </g>\n</g>\n<g>\n   <g>\n       <g>\n           <path d=\"M215.27,459.18c0.04-0.07,0.33-0.02,0.85,0.16l0.36,0.12l-0.33,0.29c-0.72,0.62-2.23,1.59-4.53,2.23\n               c-1.14,0.33-2.46,0.58-3.91,0.78c-1.44,0.18-3.03,0.4-4.83,0.36c-1.76-0.05-3.89-0.4-5.65-1.83c-1.75-1.42-2.76-3.61-3.12-5.87\n               c-0.36-2.28-0.09-4.59,0.2-6.83c0.3-2.24,0.61-4.54,0.93-6.89c0.26-1.87,0.52-3.72,0.77-5.52l1.17-8.44l1.08,8.45\n               c0.57,4.47,2.77,8.39,5.54,11.03c2.79,2.68,6.05,4.16,8.88,4.83c0.73,0.18,1.47,0.35,2.17,0.63c0.7,0.28,1.33,0.7,1.8,1.23\n               c0.48,0.52,0.77,1.19,0.82,1.79c0.07,0.61-0.07,1.14-0.22,1.57c-0.33,0.86-0.76,1.38-1.04,1.73c-0.29,0.34-0.48,0.49-0.54,0.45\n               c-0.06-0.04,0.01-0.27,0.18-0.67c0.16-0.4,0.45-0.99,0.61-1.73c0.16-0.74,0.09-1.65-0.66-2.31c-0.73-0.7-1.92-0.98-3.43-1.21\n               c-3.08-0.51-6.76-1.96-9.95-4.83c-3.18-2.85-5.74-7.18-6.42-12.21l2.25,0.01c-0.24,1.8-0.49,3.65-0.75,5.52\n               c-0.33,2.35-0.65,4.65-0.96,6.88c-0.32,2.22-0.57,4.31-0.31,6.21c0.25,1.88,1.04,3.6,2.26,4.66c1.22,1.07,2.88,1.47,4.46,1.59\n               c1.6,0.12,3.16,0,4.59-0.08c1.42-0.1,2.69-0.24,3.79-0.45c2.21-0.4,3.71-1.08,4.55-1.46l0.02,0.41\n               C215.45,459.45,215.23,459.25,215.27,459.18z\"/>\n       </g>\n   </g>\n</g>\n</g>\n</svg>";

    var FillBucketTool =
    /*#__PURE__*/
    function (_tap_base__WEBPACK_IM2) {
      _inherits(FillBucketTool, _tap_base__WEBPACK_IM2);

      function FillBucketTool(canvasService, editorService, undoService) {
        var _this22;

        _classCallCheck(this, FillBucketTool);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(FillBucketTool).call(this, editorService));
        _this22.canvasService = canvasService;
        _this22.editorService = editorService;
        _this22.undoService = undoService;
        _this22.rasters = [];
        _this22.tool = _enums_tools__WEBPACK_IMPORTED_MODULE_4__["TOOLS"].FILL_BUCKET;
        var svgGroup = paper__WEBPACK_IMPORTED_MODULE_3__["project"].importSVG(svg, {
          insert: false
        });
        var raster = svgGroup.rasterize();

        for (var i = 0; i < 10; i++) {
          var clone = raster.clone();
          paper__WEBPACK_IMPORTED_MODULE_3__["project"].activeLayer.addChild(clone);

          _this22.rasters.push(clone);
        }

        var i2 = 0;
        setInterval(function () {
          i2 += 10;

          _this22.rasters.forEach(function (r) {
            return r.rotate(i2);
          });
        }, 100);
        return _this22;
      }

      _createClass(FillBucketTool, [{
        key: "tap",
        value: function tap(_ref9) {
          var x = _ref9.x,
              y = _ref9.y;
          console.log('tap: ', x, y);
          var canvas = document.getElementById('canvas-draw');
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = 'red'; // floodFill(x, y, this.color, ctx, canvas.width, canvas.height, 0);

          _helpers_flood_fill__WEBPACK_IMPORTED_MODULE_2__["floodFill"].fill(x, y, 190, ctx, null, null, 90); // this.rasters.forEach((r, i) => r.position = new paper.Point(x + i * 100, y + i * 100));
          // const canvas: any = document.getElementById('canvas-draw');
          // const ctx = canvas.getContext('2d');
          // const canvasFill: any = document.getElementById('canvas-fill');
          // canvasFill.width = canvas.width;
          // canvasFill.height = canvas.height;
          // const ctxFill = canvasFill.getContext('2d');
          // const vCanvas = document.createElement('canvas');
          // vCanvas.width = canvas.width;
          // vCanvas.height = canvas.height;
          // const vCtx = vCanvas.getContext('2d');
          // const bitmap = ctx.getImageData(0, 0, canvas.width, canvas.height);
          // ctxFill.clearRect(0, 0, canvas.width, canvas.height);
          // ctxFill.putImageData(bitmap, 0, 0);
          // ctxFill.globalCompositeOperation = 'source-in';
          // floodFill(bitmap, {r: 0xff, g: 0xff, b: 0x0, a: 0xff}, x * 2, y * 2);
          // vCtx.putImageData(bitmap, 0, 0);
          // ctxFill.drawImage(vCanvas, 10, 10);
          // console.log('bitmap: ', bitmap);
          // const raster = new paper.Raster(new paper.Size(1000, 1000));
          // raster.setImageData(ctxFill.getImageData(0, 0, canvas.width, canvas.height), new paper.Point(0, 0));
          // ctxFill.clearRect(0, 0, canvas.width, canvas.height);

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
        var _this23;

        _classCallCheck(this, PipetteTool);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(PipetteTool).call(this, editorService));
        _this23.canvasService = canvasService;
        _this23.editorService = editorService;
        _this23.undoService = undoService;
        return _this23;
      }

      _createClass(PipetteTool, [{
        key: "tap",
        value: function tap(_ref10) {
          var x = _ref10.x,
              y = _ref10.y;
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
        key: "enable",
        value: function enable() {
          _get(_getPrototypeOf(EditorTapToolBase.prototype), "enable", this).call(this);

          this.addSubscriptions();
        }
      }, {
        key: "disable",
        value: function disable() {
          _get(_getPrototypeOf(EditorTapToolBase.prototype), "disable", this).call(this);

          this.hummerManager.destroy();
        }
      }, {
        key: "addSubscriptions",
        value: function addSubscriptions() {
          var _this24 = this;

          var tap = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Tap"]();
          this.hummerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Manager"](this.canvasService.getDrawElement());
          this.hummerManager.add([tap]);
          this.hummerManager.on('tap', function (e) {
            var point = _this24.canvasService.normalizePoint(e.center);

            _this24.tap(point);
          });
        }
      }, {
        key: "tap",
        value: function tap(point) {}
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
          var _this25 = this;

          this.clear$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.editorService.getColor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (color) {
            return _this25.onChangeColor(color);
          });
          this.editorService.getZonesCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (zonesCount) {
            return _this25.zonesCount = zonesCount;
          });
          this.editorService.isDrawMirrored().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (isDrawMirrored) {
            return _this25.isDrawMirrored = isDrawMirrored;
          });
          this.editorService.getStrokeWidth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.clear$)).subscribe(function (strokeWidth) {
            return _this25.strokeWidth = strokeWidth;
          });
        }
      }, {
        key: "disable",
        value: function disable() {
          this.clear$.next(true);
          this.clear$.unsubscribe();
          this.clear$ = null;
        }
      }, {
        key: "addDrawStep",
        value: function addDrawStep() {}
      }, {
        key: "removeDrawStep",
        value: function removeDrawStep() {}
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
