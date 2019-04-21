(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// import { AbonentsComponent } from './components/abonents/abonents.component';
var home_component_1 = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var abonentsRoutes = __webpack_require__(/*! ./components/abonents/abonents-routing.module */ "./src/app/components/abonents/abonents-routing.module.ts");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'abonents', component: AbonentsComponent },
    { path: 'home', component: home_component_1.HomeComponent }
].concat(abonentsRoutes.routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">ART-BANK TEST</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/abonents\">Abonents</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"row\">\n  <div class=\"col-sm abonents-page\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abonents-page {\n  margin: 20px 20px 0px 20px; }\n\n.navbar {\n  box-shadow: 0px 5px 5px #f1f1f1; }\n\n.bg-light {\n  background-color: #ffffff !important;\n  text-shadow: 1px 1px 1px #eaeaea; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxQaG9lbml4XFxEZXNrdG9wXFxXb3Jrc3BhY2VcXEFuZ3VsYXJKU1xcSm9iIHRlc3RzXFxhbmd1bGFyLWFyay10ZXN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IFwifmJvb3RzdHJhcFwiXG4uYWJvbmVudHMtcGFnZSB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDBweCAyMHB4OyB9XG5cbi5uYXZiYXIge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAjZjFmMWYxOyB9XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNlYWVhZWE7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.title = 'ArkBankTest';
        this.currentLink = 'true';
        // const id: Observable<string> = route.params.pipe(map(p => p.id));
        // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
        // route.data includes both `data` and `resolve`
        // const user = route.data.pipe(map(d => d.user));
        // console.log(url);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var home_component_1 = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var abonents_component_1 = __webpack_require__(/*! ./components/abonents/abonents.component */ "./src/app/components/abonents/abonents.component.ts");
var table_component_1 = __webpack_require__(/*! ./components/abonents/table/table.component */ "./src/app/components/abonents/table/table.component.ts");
var block_component_1 = __webpack_require__(/*! ./components/abonents/block/block.component */ "./src/app/components/abonents/block/block.component.ts");
var main_component_1 = __webpack_require__(/*! ./components/abonents/main/main.component */ "./src/app/components/abonents/main/main.component.ts");
var abonent_component_1 = __webpack_require__(/*! ./components/abonents/abonent/abonent.component */ "./src/app/components/abonents/abonent/abonent.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                abonents_component_1.AbonentsComponent,
                home_component_1.HomeComponent,
                table_component_1.TableComponent,
                block_component_1.BlockComponent,
                main_component_1.MainComponent,
                abonent_component_1.AbonentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/abonents/abonent/abonent.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/abonents/abonent/abonent.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Abonent block</h3>\n  <div class=\"abonent-card\">\n    <div class=\"block-id\">\n      ID. {{ id }}\n    </div>\n\n    <div class=\"block-data\">\n      <div class=\"block-data-content\" *ngFor=\"let coumnName of columns\">\n        <div class=\"data-name\">{{ coumnName }}</div>\n        <div class=\"data\">{{ abonent[coumnName] }}</div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/abonents/abonent/abonent.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/components/abonents/abonent/abonent.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-data-content {\n  background-color: #eaeaea;\n  margin-bottom: 5px; }\n\n.abonent-card {\n  width: 1110px;\n  background-color: #cbe3f9;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: flex; }\n\n.block-id {\n  width: 30%;\n  background-color: #f1f1f1;\n  display: block;\n  vertical-align: top; }\n\n.block-data {\n  background-color: #ffb8dc;\n  display: block; }\n\n.data-name {\n  display: inline-block;\n  vertical-align: top; }\n\n.data {\n  display: inline-block;\n  vertical-align: top; }\n\n.data-name {\n  width: calc(1100px * 0.3); }\n\n.data {\n  width: calc(1100px * 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm9uZW50cy9hYm9uZW50L0M6XFxVc2Vyc1xcUGhvZW5peFxcRGVza3RvcFxcV29ya3NwYWNlXFxBbmd1bGFySlNcXEpvYiB0ZXN0c1xcYW5ndWxhci1hcmstdGVzdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvbmVudHNcXGFib25lbnRcXGFib25lbnQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBRWhCO0VBRUUscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUVyQjtFQUVFLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvbmVudHMvYWJvbmVudC9hYm9uZW50LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWRhdGEtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxuXG4uYWJvbmVudC1jYXJkIHtcbiAgd2lkdGg6IDExMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZTNmOTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5ibG9jay1pZCB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5ibG9jay1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjhkYztcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmRhdGEtbmFtZSB7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2VhOTRhMFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLmRhdGEge1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNlMDgwZWFcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5kYXRhLW5hbWUge1xuICB3aWR0aDogY2FsYygxMTAwcHggKiAwLjMpOyB9XG5cbi5kYXRhIHtcbiAgd2lkdGg6IGNhbGMoMTEwMHB4ICogMC40KTsgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/abonents/abonent/abonent.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/abonents/abonent/abonent.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var scheme_1 = __webpack_require__(/*! ../table/data/scheme */ "./src/app/components/abonents/table/data/scheme.ts");
var AbonentComponent = /** @class */ (function () {
    function AbonentComponent() {
        this.columns = scheme_1.columns;
    }
    AbonentComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AbonentComponent.prototype, "abonent", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], AbonentComponent.prototype, "id", void 0);
    AbonentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-abonent',
            template: __webpack_require__(/*! ./abonent.component.html */ "./src/app/components/abonents/abonent/abonent.component.html"),
            styles: [__webpack_require__(/*! ./abonent.component.sass */ "./src/app/components/abonents/abonent/abonent.component.sass")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AbonentComponent);
    return AbonentComponent;
}());
exports.AbonentComponent = AbonentComponent;


/***/ }),

/***/ "./src/app/components/abonents/abonents-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/abonents/abonents-routing.module.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abonents_component_1 = __webpack_require__(/*! ./abonents.component */ "./src/app/components/abonents/abonents.component.ts");
var main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/components/abonents/main/main.component.ts");
var table_component_1 = __webpack_require__(/*! ./table/table.component */ "./src/app/components/abonents/table/table.component.ts");
var block_component_1 = __webpack_require__(/*! ./block/block.component */ "./src/app/components/abonents/block/block.component.ts");
var abonent_component_1 = __webpack_require__(/*! ./abonent/abonent.component */ "./src/app/components/abonents/abonent/abonent.component.ts");
exports.routes = [
    { path: '', redirectTo: 'abonents', pathMatch: 'full' },
    { path: 'abonents', component: abonents_component_1.AbonentsComponent,
        children: [
            { path: '', redirectTo: 'table', pathMatch: 'full' },
            { path: 'main', component: main_component_1.MainComponent },
            { path: 'block', component: block_component_1.BlockComponent },
            { path: 'table', component: table_component_1.TableComponent,
                children: [
                    { path: ':id', component: abonent_component_1.AbonentComponent }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/components/abonents/abonents.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/abonents/abonents.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"abonents-nav\" class=\"nav\">\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/abonents/main\">Главная</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/abonents/table\">Таблица</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/abonents/block\">Блок</a></li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/abonents/abonents.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/abonents/abonents.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#abonents-nav {\n  margin-bottom: 20px; }\n\n#abonents-nav .nav-link {\n  transition: all 0.1s ease-out 0.1s;\n  color: #d81515; }\n\n#abonents-nav .nav-item.active .nav-link {\n  color: #d81515;\n  text-shadow: 1px 1px 1px #afafaf63; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm9uZW50cy9DOlxcVXNlcnNcXFBob2VuaXhcXERlc2t0b3BcXFdvcmtzcGFjZVxcQW5ndWxhckpTXFxKb2IgdGVzdHNcXGFuZ3VsYXItYXJrLXRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib25lbnRzXFxhYm9uZW50cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUVJLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7O0FBQ2xCO0VBR00sY0FBYztFQUNkLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm9uZW50cy9hYm9uZW50cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm9uZW50cy1uYXYge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbiNhYm9uZW50cy1uYXYge1xuICAubmF2LWxpbmsge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0IDAuMXM7XG4gICAgY29sb3I6ICNkODE1MTU7IH0gfVxuI2Fib25lbnRzLW5hdiB7XG4gIC5uYXYtaXRlbS5hY3RpdmUge1xuICAgIC5uYXYtbGluayB7XG4gICAgICBjb2xvcjogI2Q4MTUxNTtcbiAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjYWZhZmFmNjM7IH0gfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/abonents/abonents.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/abonents/abonents.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AbonentsComponent = /** @class */ (function () {
    function AbonentsComponent() {
        this.currentLink = 'true';
    }
    AbonentsComponent.prototype.ngOnInit = function () {
    };
    AbonentsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-abonents',
            template: __webpack_require__(/*! ./abonents.component.html */ "./src/app/components/abonents/abonents.component.html"),
            styles: [__webpack_require__(/*! ./abonents.component.sass */ "./src/app/components/abonents/abonents.component.sass")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AbonentsComponent);
    return AbonentsComponent;
}());
exports.AbonentsComponent = AbonentsComponent;


/***/ }),

/***/ "./src/app/components/abonents/block/block.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/abonents/block/block.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"abonent-card\" *ngFor=\"let abonent of abonents; let i = index; let last = last\">\n    <div class=\"block-id\">\n      ID. {{ i }}\n    </div>\n\n    <div class=\"block-data\">\n      <div class=\"block-data-content\" *ngFor=\"let coumnName of columnNames\">\n        <div class=\"data-name\">{{ coumnName }}</div>\n        <div class=\"data\">{{ abonent[coumnName] }}</div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/abonents/block/block.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/components/abonents/block/block.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-data-content {\n  background-color: #eaeaea;\n  margin-bottom: 5px; }\n\n.abonent-card {\n  width: 1110px;\n  background-color: #cbe3f9;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: flex; }\n\n.block-id {\n  width: 30%;\n  background-color: #f1f1f1;\n  display: block;\n  vertical-align: top; }\n\n.block-data {\n  background-color: #ffb8dc;\n  display: block; }\n\n.data-name {\n  display: inline-block;\n  vertical-align: top; }\n\n.data {\n  display: inline-block;\n  vertical-align: top; }\n\n.data-name {\n  width: calc(1100px * 0.3); }\n\n.data {\n  width: calc(1100px * 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm9uZW50cy9ibG9jay9DOlxcVXNlcnNcXFBob2VuaXhcXERlc2t0b3BcXFdvcmtzcGFjZVxcQW5ndWxhckpTXFxKb2IgdGVzdHNcXGFuZ3VsYXItYXJrLXRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib25lbnRzXFxibG9ja1xcYmxvY2suY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBRWhCO0VBRUUscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUVyQjtFQUVFLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvbmVudHMvYmxvY2svYmxvY2suY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stZGF0YS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG5cbi5hYm9uZW50LWNhcmQge1xuICB3aWR0aDogMTExMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JlM2Y5O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLmJsb2NrLWlkIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLmJsb2NrLWRhdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiOGRjO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uZGF0YS1uYW1lIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZWE5NGEwXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxuXG4uZGF0YSB7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2UwODBlYVxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLmRhdGEtbmFtZSB7XG4gIHdpZHRoOiBjYWxjKDExMDBweCAqIDAuMyk7IH1cblxuLmRhdGEge1xuICB3aWR0aDogY2FsYygxMTAwcHggKiAwLjQpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/abonents/block/block.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/abonents/block/block.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var converters_1 = __webpack_require__(/*! ../table/data/converters */ "./src/app/components/abonents/table/data/converters.ts");
var BlockComponent = /** @class */ (function () {
    function BlockComponent() {
        this.columnNames = [];
        this.abonents = [];
        this.tmpConverter = new converters_1.PersonRawConverter();
    }
    BlockComponent.prototype.ngOnInit = function () {
        this.columnNames = this.tmpConverter.displayedColumns;
        this.abonents = this.tmpConverter.namedArray;
    };
    BlockComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-block',
            template: __webpack_require__(/*! ./block.component.html */ "./src/app/components/abonents/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.sass */ "./src/app/components/abonents/block/block.component.sass")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BlockComponent);
    return BlockComponent;
}());
exports.BlockComponent = BlockComponent;


/***/ }),

/***/ "./src/app/components/abonents/main/main.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/abonents/main/main.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/abonents/main/main.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/components/abonents/main/main.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/abonents/main/main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/abonents/main/main.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/abonents/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.sass */ "./src/app/components/abonents/main/main.component.sass")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "./src/app/components/abonents/table/data/converters.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/abonents/table/data/converters.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = __webpack_require__(/*! ./person */ "./src/app/components/abonents/table/data/person.ts");
var PersonRawConverter = /** @class */ (function () {
    function PersonRawConverter() {
        this.displayedColumns = [];
        this.namedArray = [];
        this.displayedColumns = this.buildColumnNames();
        this.namedArray = this.buildNamedArray();
    }
    PersonRawConverter.prototype.buildColumnNames = function () {
        var names = person_1.RawAbonentsData[0]["data"]["metaData"].map(function (el) {
            return el.name;
        });
        return names;
    };
    PersonRawConverter.prototype.buildNamedArray = function () {
        var _this = this;
        var named_array = [];
        var data = person_1.RawAbonentsData[0]["data"]["rows"];
        data.forEach(function (row) {
            var named_row = {};
            row.forEach(function (element, index) {
                named_row[_this.displayedColumns[index]] = element;
            });
            named_array.push(named_row);
        });
        return named_array;
    };
    PersonRawConverter.prototype.newData = function () {
        return {
            ACC1NUM: "acc num",
            BIRTHDATE: "birth date",
            CARD: "card",
            CARDTEMPLNAME: " card temp name",
            CURRNAME: "cur name",
            DOCNUM: "doc num",
            DOCSERIES: "series",
            DOCTYPENAME: "type",
            FIRSTNAME: "first name",
            IDCARD: Math.floor(Math.random() * 100) + 1,
            IDPERSON: Math.floor(Math.random() * 100) + 1,
            IDTASKAUTHSTATUS: Math.floor(Math.random() * 100) + 1,
            LASTNAME: "last name",
            ORGNAMESHORT: "org short name",
            PATRONYMIC: "patr name",
            PERSONTYPENAME: "person type name",
            STATUSNAME: "status name"
        };
    };
    return PersonRawConverter;
}());
exports.PersonRawConverter = PersonRawConverter;


/***/ }),

/***/ "./src/app/components/abonents/table/data/person.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/abonents/table/data/person.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RawAbonentsData = [
    {
        "actionSentRaw": "api.mobile.sqlService",
        "code": 1,
        "status": 1,
        "description": "Request Ok",
        "data": {
            "metaData": [
                { "name": "CARD" },
                { "name": "LASTNAME" },
                { "name": "FIRSTNAME" },
                { "name": "PATRONYMIC" },
                { "name": "IDPERSON" },
                { "name": "STATUSNAME" },
                { "name": "ACC1NUM" },
                { "name": "CARDTEMPLNAME" },
                { "name": "ORGNAMESHORT" },
                { "name": "PERSONTYPENAME" },
                { "name": "CURRNAME" },
                { "name": "IDCARD" },
                { "name": "BIRTHDATE" },
                { "name": "DOCSERIES" },
                { "name": "DOCNUM" },
                { "name": "IDTASKAUTHSTATUS" },
                { "name": "DOCTYPENAME" }
            ],
            "rows": [
                [
                    "481/YY-�",
                    "������",
                    "����",
                    "����������",
                    102,
                    "�����������",
                    "00000810000000014817",
                    "������������ ������ ���� (��������� ������ ���)",
                    "���� � ������",
                    "���. ����",
                    "RUR",
                    32703,
                    "1979-12-15T00:00:00.000Z",
                    "2222",
                    "444444",
                    10,
                    "������� ��"
                ],
                [
                    "4295079000001342",
                    "����������",
                    "��������",
                    "������������",
                    102,
                    "�����",
                    "40817810601234904162",
                    "VISA GOLD RUR 2 ����",
                    "���� � ������",
                    "���. ����",
                    "RUR",
                    31302,
                    "1967-01-15T00:00:00.000Z",
                    "4455",
                    "771277",
                    10,
                    "������� ��"
                ],
                [
                    "4295079000001262",
                    "�������",
                    "�����",
                    "����������",
                    102,
                    "�����",
                    "40817810401234904061",
                    "VISA GOLD RUR 2 ����",
                    "���� � ������",
                    "���. ����",
                    "RUR",
                    31002,
                    "1989-05-14T00:00:00.000Z",
                    "5123",
                    "099975",
                    10,
                    "������� ��"
                ],
                [
                    "341/YY-�",
                    "��������",
                    "�����",
                    "��������",
                    102,
                    "�����������",
                    "00000810100000013417",
                    null,
                    "���� � ������",
                    "���. ����",
                    "RUR",
                    28902,
                    "1984-06-26T00:00:00.000Z",
                    "7143",
                    "704556",
                    10,
                    "������� ��"
                ],
                [
                    "461/YY-�",
                    "�����",
                    "�����",
                    "����������",
                    102,
                    "�����������",
                    "00000810200000014617",
                    "������������ ������ ���� (��������� ������ ���)",
                    "���� � ������",
                    "���. ����",
                    "RUR",
                    32602,
                    "1991-11-12T00:00:00.000Z",
                    "4765",
                    "569867",
                    10,
                    "������� ��"
                ]
            ]
        }
    }
];


/***/ }),

/***/ "./src/app/components/abonents/table/data/scheme.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/abonents/table/data/scheme.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = [
    "CARD",
    "LASTNAME",
    "FIRSTNAME",
    "PATRONYMIC",
    "IDPERSON",
    "STATUSNAME",
    "ACC1NUM",
    "CARDTEMPLNAME",
    "ORGNAMESHORT",
    "PERSONTYPENAME",
    "CURRNAME",
    "IDCARD",
    "BIRTHDATE",
    "DOCSERIES",
    "DOCNUM",
    "IDTASKAUTHSTATUS",
    "DOCTYPENAME"
];


/***/ }),

/***/ "./src/app/components/abonents/table/table.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/abonents/table/table.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\" *ngIf=\"openedAbonent()\">\n  <thead class=\"thead-dark\">\n  <tr>\n    <th scope=\"col\" *ngFor=\"let element of displayedColumns\">\n      {{ element }}\n    </th>\n    <th></th>\n  </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let row of dataSource; let i = index\" (click)=\"openAbonent(i)\">\n      <td *ngFor=\"let el of displayedColumns; let iClass = index\" [className]=\"setClass(iClass)\">{{ row[el] }}</td>\n      <td><button class=\"btn btn-primary btn-sm\" (click)=\"deleteContentRow(i)\">Delete</button></td>\n    </tr>\n  </tbody>\n\n  <tfoot>\n    <tr>\n      <td colspan=\"18\"><button class=\"btn btn-primary btn-sm\" (click)=\"addFieldValue()\">Add</button></td>\n    </tr>\n  </tfoot>\n</table>\n\n<!--<router-outlet [abonent]=\"abonent\"></router-outlet>-->\n<app-abonent [abonent]=\"abonent\" [id]=\"id\" *ngIf=\"!openedAbonent()\"></app-abonent>\n\n<!--<table mat-table [dataSource]=\"dataSource\" [className]=\"'table table-hover'\">\n  <ng-container *ngFor=\"let name of displayedColumns; let iCell = index\" [matColumnDef]=\"name\">\n    <th mat-header-cell *matHeaderCellDef [className]=\"''\">{{ name }}</th>\n    <td mat-cell *matCellDef=\"let element\" [className]=\"setClass(iCell)\"> {{ element[name] }} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" [className]=\"'thead-dark'\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [className]=\"'abonents-tbody-tr'\"></tr>\n</table>-->\n\n\n"

/***/ }),

/***/ "./src/app/components/abonents/table/table.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/components/abonents/table/table.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border: 1px solid #212529;\n  font-size: 12px;\n  border-collapse: unset !important;\n  border-radius: 10px 10px 10px 10px; }\n  table th {\n    font-size: 10px; }\n  table tbody .center {\n    text-align: center; }\n  table tbody .left {\n    text-align: left; }\n  table tbody tr {\n    transition: all 100ms ease-out 20ms;\n    -webkit-transition: all 100ms ease-out 20ms;\n    -moz-transition: all 100ms ease-out 20ms; }\n  table tbody tr:hover {\n    background-color: rgba(255, 184, 220, 0.52) !important;\n    cursor: pointer; }\n  table thead > tr:last-child > th:first-child {\n    border-radius: 10px 0px 0px 0px; }\n  table thead > tr:last-child > th:last-child {\n    border-radius: 0px 10px 0px 0px; }\n  table tbody > tr:last-child > td:first-child {\n    border-radius: 0px 0px 0px 10px; }\n  table tbody > tr:last-child > td:last-child {\n    border-radius: 0px 0px 10px 0px; }\n  .table th, .table td {\n  vertical-align: baseline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm9uZW50cy90YWJsZS9DOlxcVXNlcnNcXFBob2VuaXhcXERlc2t0b3BcXFdvcmtzcGFjZVxcQW5ndWxhckpTXFxKb2IgdGVzdHNcXGFuZ3VsYXItYXJrLXRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib25lbnRzXFx0YWJsZVxcdGFibGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxrQ0FBa0MsRUFBQTtFQVBwQztJQUVJLGVBQWUsRUFBQTtFQUZuQjtJQVdNLGtCQUFrQixFQUFBO0VBWHhCO0lBYU0sZ0JBQWdCLEVBQUE7RUFidEI7SUFnQk0sbUNBQW1DO0lBQ25DLDJDQUEyQztJQUMzQyx3Q0FBd0MsRUFBQTtFQWxCOUM7SUFxQk0sc0RBQXNEO0lBQ3RELGVBQWUsRUFBQTtFQXRCckI7SUF5QkksK0JBQStCLEVBQUE7RUF6Qm5DO0lBNEJJLCtCQUErQixFQUFBO0VBNUJuQztJQStCSSwrQkFBK0IsRUFBQTtFQS9CbkM7SUFrQ0ksK0JBQStCLEVBQUE7RUFFbkM7RUFDRSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHRoIHtcbiAgICBmb250LXNpemU6IDEwcHg7IH1cblxuICBib3JkZXI6IDFweCBzb2xpZCAjMjEyNTI5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1jb2xsYXBzZTogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcblxuICB0Ym9keSB7XG4gICAgLmNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAubGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbiAgICB0ciB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQgMjBtcztcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0IDIwbXM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dCAyMG1zOyB9XG5cbiAgICB0cjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTg0LCAyMjAsIDAuNTIpICFpbXBvcnRhbnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH0gfVxuXG4gIHRoZWFkID4gdHI6bGFzdC1jaGlsZCA+IHRoOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMHB4OyB9XG5cbiAgdGhlYWQgPiB0cjpsYXN0LWNoaWxkID4gdGg6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMHB4IDBweDsgfVxuXG4gIHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAxMHB4OyB9XG5cbiAgdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDBweDsgfSB9XG5cbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/abonents/table/table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/abonents/table/table.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var converters_1 = __webpack_require__(/*! ./data/converters */ "./src/app/components/abonents/table/data/converters.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var TableComponent = /** @class */ (function () {
    function TableComponent(router) {
        var _this = this;
        this.router = router;
        this.displayedColumns = [];
        this.dataSource = [];
        this.newAttribute = {};
        this.abonent_opened = false;
        this.tmpConverter = new converters_1.PersonRawConverter();
        this.abonent_opened = false;
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (event.url === '/abonents/table')
                    _this.abonent_opened = true;
                else
                    _this.abonent_opened = false;
            }
            if (event instanceof router_1.NavigationError)
                console.log(event.error);
        });
    }
    TableComponent.prototype.ngOnInit = function () {
        this.displayedColumns = this.tmpConverter.displayedColumns;
        this.dataSource = this.tmpConverter.namedArray;
    };
    TableComponent.prototype.setClass = function (iCell) {
        return iCell == 1 || iCell == 2 || iCell == 3 ? 'center' : 'left';
    };
    TableComponent.prototype.addFieldValue = function () {
        this.dataSource.push(this.tmpConverter.newData());
        this.newAttribute = {};
        // console.log(this.dataSource);
    };
    TableComponent.prototype.deleteContentRow = function (i) {
        this.dataSource.splice(i, 1);
    };
    TableComponent.prototype.openAbonent = function (id) {
        this.abonent = this.dataSource[id];
        this.id = id;
        this.router.navigate(['/abonents/table', id]);
    };
    TableComponent.prototype.openedAbonent = function () {
        return this.abonent_opened;
    };
    TableComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/abonents/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.sass */ "./src/app/components/abonents/table/table.component.sass")]
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;


/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/components/home/home.component.sass")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Phoenix\Desktop\Workspace\AngularJS\Job tests\angular-ark-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map