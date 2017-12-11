webpackJsonp([0],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedditService = (function () {
    function RedditService(http) {
        this.http = http;
        this.baseUrl = "https://www.reddit.com/r";
    }
    RedditService.prototype.getPosts = function (category, limit) {
        return this.http.get(this.baseUrl + '/' + category + '/top.json?limit=' + limit).map(function (res) { return res.json(); });
        // this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).subscribe((res:Response)=>{
        //     const wether=res.json();
        //     console.log(wether);
        // })
        // return this.http.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").subscribe((res:Response)=>{
        //         const wether=res.json();
        //         console.log(wether);
        //     })
    };
    RedditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RedditService);
    return RedditService;
}());

//# sourceMappingURL=redit.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_redit_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedditPage = (function () {
    function RedditPage(navCtrl, reditService) {
        this.navCtrl = navCtrl;
        this.reditService = reditService;
        this.getDefault();
        this.default = '../assets/imgs/default-placeholder.png';
    }
    RedditPage.prototype.ngOnInit = function () {
        this.getPosts(this.category, this.limit);
    };
    RedditPage.prototype.getDefault = function () {
        if (localStorage.getItem('category')) {
            this.category = localStorage.getItem('category');
        }
        else {
            this.category = "sports";
        }
        if (localStorage.getItem('limit')) {
            this.limit = localStorage.getItem('limit');
        }
        else {
            this.limit = 10;
        }
    };
    RedditPage.prototype.getPosts = function (category, limit) {
        var _this = this;
        this.reditService.getPosts(category, limit).subscribe(function (response) {
            _this.items = response.data.children;
            console.log(_this.items);
        });
    };
    RedditPage.prototype.viewItem = function (val) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            val: val
        });
    };
    RedditPage.prototype.changeCategory = function () {
        this.getPosts(this.category, this.limit);
    };
    RedditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reddit',template:/*ion-inline-start:"D:\ionic\socialReddit\src\pages\reddit\reddit.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-title>\n\n        IONReddit\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label fixed> Category</ion-label>\n\n        <ion-select (ionChange)="changeCategory()" [(ngModel)]="category" name="category">\n\n          <ion-option value="sports">Sports</ion-option>\n\n          <ion-option value="news">News</ion-option>\n\n          <ion-option value="food">Food</ion-option>\n\n          <ion-option value="music">Music</ion-option>\n\n          <ion-option value="funny">Funny</ion-option>\n\n          <ion-option value="gaming">Gaming</ion-option>\n\n          <ion-option value="art">Art</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-thumbnail  item-start>\n\n    </ion-thumbnail>\n\n    <ion-list>\n\n        <ion-item *ngFor="let x of items">\n\n          <ion-thumbnail *ngIf="x.data.thumbnail" item-start>\n\n            <img src="{{x.data.thumbnail || default }}">\n\n          </ion-thumbnail>\n\n          <h2>{{x.data.title}}</h2>\n\n          <span>\n\n            <ion-icon name="thumbs-up">{{x.data.score}}</ion-icon>&nbsp;&nbsp;\n\n            <ion-icon name="chatboxes">{{x.data.num_comments}}</ion-icon>\n\n          </span>\n\n          <button ion-button clear item-end (click)="viewItem(x.data)">View</button>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\ionic\socialReddit\src\pages\reddit\reddit.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_redit_service__["a" /* RedditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_redit_service__["a" /* RedditService */]) === "function" && _b || Object])
    ], RedditPage);
    return RedditPage;
    var _a, _b;
}());

//# sourceMappingURL=reddit.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reddit_reddit__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__reddit_reddit__["a" /* RedditPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\socialReddit\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Reddit" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="ios-information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic\socialReddit\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionic\socialReddit\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>RedditApp</h1>\n  <p>Created By Nandu K S</p>\n  <ion-item>Version:1.0.0</ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\socialReddit\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_redit_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reddit_reddit__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, reditService) {
        this.navCtrl = navCtrl;
        this.reditService = reditService;
        this.getDefault();
    }
    SettingsPage.prototype.getDefault = function () {
        if (localStorage.getItem('category')) {
            this.category = localStorage.getItem('category');
        }
        else {
            this.category = "sports";
        }
        if (localStorage.getItem('limit')) {
            this.limit = localStorage.getItem('limit');
        }
        else {
            this.limit = 10;
        }
    };
    SettingsPage.prototype.setDefault = function () {
        localStorage.setItem("category", this.category);
        localStorage.setItem("limit", this.limit);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reddit_reddit__["a" /* RedditPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\ionic\socialReddit\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-title>\n\n        Settings\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <form (submit)="setDefault()">\n\n        <ion-list>\n\n            <ion-item>\n\n              <ion-label fixed> Category</ion-label>\n\n              <ion-select  [(ngModel)]="category" name="category">\n\n                <ion-option value="sports">Sports</ion-option>\n\n                <ion-option value="news">News</ion-option>\n\n                <ion-option value="food">Food</ion-option>\n\n                <ion-option value="music">Music</ion-option>\n\n                <ion-option value="funny">Funny</ion-option>\n\n                <ion-option value="gaming">Gaming</ion-option>\n\n                <ion-option value="art">Art</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label fixed> Limit</ion-label>\n\n                <ion-select  [(ngModel)]="limit" name="limit">\n\n                  <ion-option value="5">5</ion-option>\n\n                  <ion-option value="10">10</ion-option>\n\n                  <ion-option value="15">15</ion-option>\n\n                  <ion-option value="20">20</ion-option>\n\n                  <ion-option value="25">25</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <button ion-button clear type="submit" block>Save Changes</button>\n\n          </ion-list>\n\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\ionic\socialReddit\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service_redit_service__["a" /* RedditService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParam) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.itemDetails = navParam.get('val');
    }
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"D:\ionic\socialReddit\src\pages\details\details.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n        {{itemDetails.title}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <img src="{{itemDetails.preview.images[0].source.url}}"/>\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                {{itemDetails.title}}\n\n            </ion-card-title>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-icon name="person" item-left></ion-icon>\n\n                    Author\n\n                    <ion-note>\n\n                        {{itemDetails.author}}\n\n                    </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-icon name="md-thumbs-up" item-left></ion-icon>\n\n                    Score\n\n                    <ion-note>\n\n                        {{itemDetails.score}}\n\n                    </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-icon name="chatboxes" item-left></ion-icon>\n\n                    Comment\n\n                    <ion-note>\n\n                        {{itemDetails.num_comments}}\n\n                    </ion-note>\n\n                </ion-item>\n\n            </ion-list>\n\n            <a ion-button target="_blank" href="http://reddit.com/{{itemDetails.permalink}}"  block>View on Reddit </a>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n      '/*ion-inline-end:"D:\ionic\socialReddit\src\pages\details\details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_reddit_reddit__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_reddit_reddit__["a" /* RedditPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_reddit_reddit__["a" /* RedditPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_redit_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\socialReddit\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\socialReddit\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_redit_service__["a" /* RedditService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map