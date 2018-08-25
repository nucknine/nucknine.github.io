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

/***/ "./src/app.routes.ts":
/*!***************************!*\
  !*** ./src/app.routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _app_host_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/client/client.component */ "./src/app/client/client.component.ts");



var routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: "host",
        component: _app_host_host_component__WEBPACK_IMPORTED_MODULE_0__["HostComponent"]
    },
    {
        path: "client",
        component: _app_client_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"]
    }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Brick game</h2>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/websocket.service */ "./src/app/shared/websocket.service.ts");
/* harmony import */ var _shared_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/chat.service */ "./src/app/shared/chat.service.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/unit/unit.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.routes */ "./src/app.routes.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_units_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/units.service */ "./src/app/shared/units.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _unit_unit_component__WEBPACK_IMPORTED_MODULE_5__["UnitComponent"],
                _host_host_component__WEBPACK_IMPORTED_MODULE_6__["HostComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_9__["ClientComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["routes"])
            ],
            providers: [_shared_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], _shared_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], _shared_units_service__WEBPACK_IMPORTED_MODULE_11__["UnitsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  (drop)=\"drop($event)\"\n  (dragover)=\"dragover($event)\"\n  class=\"base\"\n  id=\"base\"\n  (dblclick)=onDbClick($event) >\n  <ul class=\"messages help\">\n    <li>Welcome {{name}}!</li>\n    <li>doubleclick to create a unit</li>\n    <li>drag to move a unit</li>\n  </ul>\n  <ul id=\"messages\" class=\"messages\"></ul>\n  <div *ngFor=\"let unit of units\"\n    [id]=\"unit.target\"\n    class=\"unit\"\n    draggable=\"true\"\n    [style.top]=unit.clientY\n    [style.left]=unit.clientX\n    (dragstart)=\"dragstart($event)\"\n    >{{unit.name}}\n  </div>\n</div>\n<button (click)=\"sendHello(name)\">hello</button>\n<audio id=\"audio-cr\" src=\"https://www.soundjay.com/button/beep-25.mp3\" autostart=\"false\" ></audio>\n<audio id=\"audio-er\" src=\"https://www.soundjay.com/button/button-42.mp3\" autostart=\"false\" ></audio>\n<audio id=\"audio-drag\" src=\"https://www.soundjay.com/button/button-43.mp3\" autostart=\"false\" ></audio>\n"

/***/ }),

/***/ "./src/app/client/client.component.scss":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes color-change {\n  0% {\n    background-color: crimson;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  25% {\n    background-color: mediumslateblue;\n    border-radius: 50%;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  50% {\n    background-color: mediumturquoise;\n    border-radius: 0;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  75% {\n    background-color: mediumpurple;\n    border-radius: 50%;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    background-color: crimson;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes color-change {\n  0% {\n    background-color: crimson;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  25% {\n    background-color: mediumslateblue;\n    border-radius: 50%;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  50% {\n    background-color: mediumturquoise;\n    border-radius: 0;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  75% {\n    background-color: mediumpurple;\n    border-radius: 50%;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    background-color: crimson;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.base {\n  background-color: mediumaquamarine;\n  position: relative;\n  width: 1000px;\n  height: 500px; }\n\n.messages {\n  color: white;\n  display: block;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  background-color: mediumvioletred;\n  max-height: 55px;\n  overflow-y: hidden; }\n\n.help {\n  background: transparent;\n  top: 0px;\n  color: black; }\n\n.unit {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 60px;\n  box-sizing: border-box;\n  padding: 5px;\n  color: whitesmoke;\n  text-align: center;\n  font-size: 1.2em;\n  border: 2px solid whitesmoke;\n  width: 80px;\n  height: 60px;\n  background-color: crimson;\n  position: absolute;\n  border-radius: 0;\n  transition: all .3s ease-in-out;\n  -webkit-animation: color-change 8s ease-in .5s infinite;\n          animation: color-change 8s ease-in .5s infinite; }\n"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/chat.service */ "./src/app/shared/chat.service.ts");
/* harmony import */ var _unit_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit/unit */ "./src/app/unit/unit.ts");
/* harmony import */ var _shared_units_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/units.service */ "./src/app/shared/units.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientComponent = /** @class */ (function () {
    function ClientComponent(chatService, unitService) {
        var _this = this;
        this.chatService = chatService;
        this.unitService = unitService;
        this.units = [];
        this.data = {
            target: '',
            name: '',
            clientX: '',
            clientY: ''
        };
        chatService.messages.subscribe(function (msg) {
            if (msg.type == 'unit-create') {
                _this.addMessage(msg);
                _this.createUnit(msg);
            }
            else if (msg.type == 'unit-click') {
                console.log('info about unit:' + msg);
            }
            else if (msg.type == 'hello') {
                _this.addMessage(msg);
            }
            else if (msg.type == 'unit-drop') {
                _this.addMessage(msg);
                _this.dropUnit(msg);
            }
        });
    }
    ClientComponent.prototype.askName = function () {
        this.name = prompt('Как вас зовут?');
        if (!this.name) {
            this.sendHello();
            this.units = this.unitService.getUnits();
        }
    };
    ClientComponent.prototype.sendToServer = function (message) {
        console.log("New message " + message.type);
        this.chatService.messages.next(message);
    };
    ClientComponent.prototype.onDbClick = function (e) {
        if (!this.name) {
            this.askName();
        }
        this.data.clientX = e.clientX;
        this.data.clientY = e.clientY;
        if (e.target.classList.contains('unit')) {
            this.data.target = e.target.id;
            var message = {
                type: 'unit-click',
                data: this.data
            };
            console.log('info about unit:');
            console.dir(message.data);
        }
        else {
            this.data.target = Date.now().toString();
            this.data.name = this.name;
            var message = {
                type: 'unit-create',
                data: this.data
            };
            this.createUnit(message);
        }
        this.sendToServer(message);
    };
    ClientComponent.prototype.createUnit = function (message) {
        var unit = document.createElement("div"), base = document.querySelector("#base");
        unit.classList.add("unit");
        unit.draggable = true;
        unit.textContent = this.name;
        unit.setAttribute('id', message.data.target);
        unit.style.top = message.data.clientY + 'px';
        unit.style.left = message.data.clientX + 'px';
        this.unitService.addUnit(new _unit_unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](message.data.target, message.data.name, unit.style.left, unit.style.top));
        this.units = this.unitService.getUnits();
        var audio = document.getElementById("audio-cr");
        audio.play();
    };
    ClientComponent.prototype.addMessage = function (message) {
        var messageContainer = document.querySelector('#messages'), messageItem = document.createElement('li');
        if (message.type == 'unit-drop') {
            messageItem.textContent = "Player " + message.data.name + " has moved a " + message.data.target + " unit!";
        }
        else if (message.type == 'hello') {
            messageItem.textContent = "hello from " + message.data.name + "!";
        }
        else if (message.type == 'unit-create') {
            messageItem.textContent = "Player " + message.data.name + " has created the " + message.data.target + " unit!";
        }
        else if (message.type == 'drag-err') {
            messageItem.textContent = "sorry, you can move only your own unit!";
        }
        messageContainer.appendChild(messageItem);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    };
    ClientComponent.prototype.sendHello = function () {
        var message = {
            type: 'hello',
            data: { name: this.name }
        };
        this.sendToServer(message);
    };
    ClientComponent.prototype.canDrag = function (e) {
        return this.units.find(function (x) { return x.target == e; }).name == this.data.name;
    };
    ClientComponent.prototype.dragstart = function (ev) {
        this.currentDrag = ev.target;
    };
    ClientComponent.prototype.dragover = function (ev) {
        ev.preventDefault();
    };
    ClientComponent.prototype.drop = function (ev) {
        if (!this.canDrag(this.currentDrag.id)) {
            var audio_1 = document.getElementById("audio-er");
            var message_1 = {
                type: 'drag-err'
            };
            this.addMessage(message_1);
            audio_1.play();
            return;
        }
        var audio = document.getElementById("audio-drag");
        audio.play();
        ev.preventDefault();
        this.currentDrag.style.top = ev.clientY + 'px';
        this.currentDrag.style.left = ev.clientX + 'px';
        this.data.target = this.currentDrag.id;
        this.data.clientX = ev.clientX;
        this.data.clientY = ev.clientY;
        var message = {
            type: 'unit-drop',
            data: this.data
        };
        this.unitService.updateUnit(new _unit_unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](message.data.target, message.data.name, this.currentDrag.style.left, this.currentDrag.style.top));
        this.sendToServer(message);
    };
    ClientComponent.prototype.dropUnit = function (message) {
        var unit = document.getElementById(message.data.target);
        unit.style.top = message.data.clientY + 'px';
        unit.style.left = message.data.clientX + 'px';
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/client/client.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"], _shared_units_service__WEBPACK_IMPORTED_MODULE_3__["UnitsService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<a class=\"btn btn-danger\" routerLink=\"/host\" routerLinkActive=\"active\">Host</a>\n\t<a class=\"btn btn-default\" routerLink=\"/client\" routerLinkActive=\"active\">Game client</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px; }\n\n.btn-default {\n  background-color: mediumseagreen; }\n\n.btn-danger {\n  background-color: crimson; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/host/host.component.html":
/*!******************************************!*\
  !*** ./src/app/host/host.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Game statistics\n</h2>\n<table class='table table-striped'>\n    <thead>\n        <tr>\n            <th>Player name</th>\n            <th>Units</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let player of players\">\n          <td>{{player.name}}</td>\n          <td>{{player.units}}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/host/host.component.scss":
/*!******************************************!*\
  !*** ./src/app/host/host.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  width: 50%; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\nth {\n  background-color: crimson;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/host/host.component.ts":
/*!****************************************!*\
  !*** ./src/app/host/host.component.ts ***!
  \****************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/chat.service */ "./src/app/shared/chat.service.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/app/host/player.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HostComponent = /** @class */ (function () {
    function HostComponent(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.players = [];
        this.currentUnits = 1;
        chatService.messages.subscribe(function (msg) {
            if (msg.type == 'unit-create') {
                console.log(msg);
                _this.updateStats(msg);
            }
        });
    }
    HostComponent.prototype.ngOnInit = function () {
    };
    HostComponent.prototype.updateStats = function (message) {
        var _this = this;
        this.currentName = message.data.name;
        if (!this.players.find(function (x) { return x.name == _this.currentName; })) {
            this.players.push(new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.currentName, this.currentUnits));
        }
        else {
            this.players.find(function (x) { return x.name == _this.currentName; }).units += this.currentUnits;
        }
    };
    HostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-host',
            template: __webpack_require__(/*! ./host.component.html */ "./src/app/host/host.component.html"),
            styles: [__webpack_require__(/*! ./host.component.scss */ "./src/app/host/host.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], HostComponent);
    return HostComponent;
}());



/***/ }),

/***/ "./src/app/host/player.ts":
/*!********************************!*\
  !*** ./src/app/host/player.ts ***!
  \********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(name, units) {
        if (units === void 0) { units = 0; }
        this.name = name;
        this.units = units;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/shared/chat.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/chat.service.ts ***!
  \****************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket.service */ "./src/app/shared/websocket.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(wsService) {
        this.wsService = wsService;
        this.messages = wsService
            .connect(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].WS_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            var data = JSON.parse(response.data);
            return {
                type: data.type,
                data: data.data
            };
        }));
    }
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/shared/units.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/units.service.ts ***!
  \*****************************************/
/*! exports provided: UnitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsService", function() { return UnitsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnitsService = /** @class */ (function () {
    function UnitsService() {
    }
    UnitsService.prototype.getUnits = function () {
        console.log(units);
        return units;
    };
    UnitsService.prototype.addUnit = function (un) {
        units.push(un);
    };
    UnitsService.prototype.updateUnit = function (un) {
        var index = units.findIndex(function (u) { return u.target == un.target; });
        units[index] = un;
        console.log(units);
    };
    UnitsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], UnitsService);
    return UnitsService;
}());

var units = [];


/***/ }),

/***/ "./src/app/shared/websocket.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/websocket.service.ts ***!
  \*********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("connected" + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/unit/unit.component.html":
/*!******************************************!*\
  !*** ./src/app/unit/unit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"unit\" (click)=\"test()\"></div> -->\n"

/***/ }),

/***/ "./src/app/unit/unit.component.scss":
/*!******************************************!*\
  !*** ./src/app/unit/unit.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/unit/unit.component.ts":
/*!****************************************!*\
  !*** ./src/app/unit/unit.component.ts ***!
  \****************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnitComponent = /** @class */ (function () {
    function UnitComponent() {
    }
    UnitComponent.prototype.ngOnInit = function () {
        console.log(this);
    };
    UnitComponent.prototype.test = function () {
        console.log("hello");
    };
    UnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'unit',
            template: __webpack_require__(/*! ./unit.component.html */ "./src/app/unit/unit.component.html"),
            styles: [__webpack_require__(/*! ./unit.component.scss */ "./src/app/unit/unit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnitComponent);
    return UnitComponent;
}());



/***/ }),

/***/ "./src/app/unit/unit.ts":
/*!******************************!*\
  !*** ./src/app/unit/unit.ts ***!
  \******************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
var Unit = /** @class */ (function () {
    function Unit(target, name, clientX, clientY) {
        this.target = target;
        this.name = name;
        this.clientX = clientX;
        this.clientY = clientY;
    }
    return Unit;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    WS_URL: 'wss://do.brainfaq.ru/chat?token=g6vvucKrCUZ3PTvL0F8R6cjdFi0qGyEgrdvEzVgFsRyBE1FEticHiGHTgWVJetq3',
    CHAT_URL: 'ws://echo.websocket.org'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programming\my-sites\angular6-websocket-test\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map