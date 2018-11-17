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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/websocket.service */ "./src/app/shared/websocket.service.ts");
/* harmony import */ var _shared_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/chat.service */ "./src/app/shared/chat.service.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/unit/unit.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.routes */ "./src/app.routes.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_units_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/units.service */ "./src/app/shared/units.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _unit_unit_component__WEBPACK_IMPORTED_MODULE_6__["UnitComponent"],
                _host_host_component__WEBPACK_IMPORTED_MODULE_7__["HostComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["routes"])
            ],
            providers: [_shared_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"], _shared_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _shared_units_service__WEBPACK_IMPORTED_MODULE_12__["UnitsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

module.exports = "<div class=\"wrapper\">\r\n<div class=\"overlay\" *ngIf=\"!started\">\r\n  <div class=\"info\">\r\n    <div class=\"rules\">\r\n      <h2>Правила:</h2>\r\n      <p>Каждому участнику доступно {{limit}} блоков.\r\n        Для создания блока используйте двойное нажите по полю или прикосновение на touch-устройстве.\r\n        Для перемещения блоков используйте drag & drop.\r\n        Перемещайте свои блоки на чужие для получения очков.</p>\r\n      <p>Побеждает игрок, первым уничтоживший все блоки соперника.</p>\r\n    </div>\r\n    <button (click)=\"started=!started\" class=\"btn btn-message\">Продолжить</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"overlay\" *ngIf=\"isWinner\">\r\n  <div class=\"rules\">\r\n    <h2>Поздравляем, вы победили!</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"overlay\" *ngIf=\"isLoser\">\r\n  <div class=\"rules\">\r\n    <h2>К сожалению, вы проиграли</h2>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  class=\"base\"\r\n  id=\"base\"\r\n  (drop)=\"drop($event)\"\r\n  (touchmove)=\"prevent($event)\"\r\n  (dragover)=\"dragover($event)\"\r\n  (dblclick)=\"baseDbClick($event)\"\r\n  (touchstart)=\"baseDbClick($event)\">\r\n  <ul class=\"messages help\">\r\n    <li>Очки игрока {{name}}: {{points}}</li>\r\n    <li>Юнитов создано {{unitCount}} из {{limit}}</li>\r\n  </ul>\r\n  <ul id=\"messages\" class=\"messages\"></ul>\r\n  <div *ngFor=\"let unit of units\"\r\n    class=\"unit\"\r\n    draggable=\"true\"\r\n    [id]=\"unit.target\"\r\n    [style.top]=unit.clientY\r\n    [style.left]=unit.clientX\r\n    (dragstart)=\"dragstart($event)\"\r\n    (touchstart)=\"dragstart($event)\"\r\n    (touchend)=\"drop($event)\">\r\n    {{unit.name}}\r\n  </div>\r\n</div>\r\n<div class=\"interface\">\r\n  <input\r\n  class=\"input-message\"\r\n  type=\"text\"\r\n  (keyup.enter)=\"sendHello()\"\r\n  (keyup.enter)=\"mInput.value=''\"\r\n  [(ngModel)]=\"text\"\r\n  #mInput>\r\n  <button class=\"btn-message btn\" (click)=\"sendHello()\" [disabled]=\"!mInput.value\" (click)=\"mInput.value=''\">Send message</button>\r\n  <button id=\"create-btn\" class=\"btn-create btn\" (click)=\"baseDbClick($event)\">Create new unit</button>\r\n</div>\r\n<audio id=\"audio-cr\" src=\"https://www.soundjay.com/button/beep-25.mp3\" autostart=\"false\" ></audio>\r\n<audio id=\"audio-er\" src=\"https://www.soundjay.com/button/button-42.mp3\" autostart=\"false\" ></audio>\r\n<audio id=\"audio-drag\" src=\"https://www.soundjay.com/button/button-43.mp3\" autostart=\"false\" ></audio>\r\n<audio id=\"audio-destroy\" src=\"https://www.soundjay.com/button/button-48.mp3\" autostart=\"false\" ></audio>\r\n</div>"

/***/ }),

/***/ "./src/app/client/client.component.scss":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes color-change {\n  0% {\n    background-color: #1d3557;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  25% {\n    background-color: #457b9d;\n    border-radius: 50%;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  50% {\n    background-color: #f1faee;\n    border-radius: 0;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  75% {\n    background-color: #e63946;\n    border-radius: 50%;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    background-color: #a8dadc;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes color-change {\n  0% {\n    background-color: #1d3557;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  25% {\n    background-color: #457b9d;\n    border-radius: 50%;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  50% {\n    background-color: #f1faee;\n    border-radius: 0;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  75% {\n    background-color: #e63946;\n    border-radius: 50%;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    background-color: #a8dadc;\n    border-radius: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.wrapper {\n  position: relative;\n  font-family: 'Roboto', sans-serif; }\n\n.overlay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.info {\n  text-align: center; }\n\n.rules {\n  max-width: 700px;\n  margin-top: 20px;\n  color: #f1faee;\n  font-size: 16px;\n  text-align: center; }\n\n.base {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #1d3557;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  overflow: hidden; }\n\n.messages {\n  padding: 0 0 0 10px;\n  font-size: 16px;\n  list-style: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #1d3557;\n  display: block;\n  position: absolute;\n  top: 40px;\n  left: 0;\n  background-color: #a8dadc;\n  max-height: 75px;\n  overflow-y: hidden; }\n\n.help {\n  background: transparent;\n  top: 0px;\n  color: #f1faee; }\n\n.unit {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 60px;\n  box-sizing: border-box;\n  padding: 5px;\n  color: #f1faee;\n  text-align: center;\n  font-size: 1.2em;\n  border: 2px solid #f1faee;\n  width: 80px;\n  height: 60px;\n  background-color: #e63946;\n  position: absolute;\n  border-radius: 0;\n  transition: all .3s ease-in-out;\n  -webkit-animation: color-change 8s ease-in .5s infinite;\n          animation: color-change 8s ease-in .5s infinite; }\n\n.unit-name {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.interface {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap; }\n\n.input-message {\n  flex: 2; }\n"

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
        this.limit = 3;
        this.unitCount = 0;
        this.points = 0;
        this.started = false;
        this.isWinner = false;
        this.isLoser = false;
        this.data = {
            target: null,
            name: null,
            clientX: null,
            clientY: null,
            deletedName: null,
            points: 0,
            units: null
        };
        this.dragInfo = {
            offsetX: null,
            offsetY: null
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
            else if (msg.type == 'unit-delete') {
                _this.addMessage(msg);
                _this.deleteUnit(msg);
            }
            else if (msg.type == 'winner') {
                _this.gameResult(msg.data.name);
            }
        });
    }
    //обновление массива блоков
    ClientComponent.prototype.updateUnits = function () {
        this.units = this.unitService.getUnits();
    };
    // запрос имени игрока
    ClientComponent.prototype.askName = function () {
        this.name = prompt('Как вас зовут?');
        if (this.name) {
            this.updateUnits();
        }
        else {
            this.askName();
        }
    };
    // отправка данных websocket на сервер
    ClientComponent.prototype.sendToServer = function (message) {
        console.log("New message " + message.type);
        this.chatService.messages.next(message);
    };
    // обработка двойного нажатия по полю, либо прикосновения на touch-устройствах
    ClientComponent.prototype.baseDbClick = function (e) {
        if (!this.name) {
            this.askName();
        }
        if (e.type == 'touchstart') {
            e = e.changedTouches[0];
        }
        //создание блока по кнопке "create"
        if (e.target.id == 'create-btn') {
            this.data.clientX = this.getRandomCoords('x');
            this.data.clientY = this.getRandomCoords('y');
        }
        else {
            this.data.clientX = e.clientX - 60 + '';
            this.data.clientY = e.clientY - 80 + '';
        }
        if (e.target.classList.contains('unit')) {
            this.data.target = e.target.id;
            var message = {
                type: 'unit-click',
                data: this.data
            };
            console.log('info about unit:');
            console.dir(message.data);
            this.sendToServer(message);
        }
        else {
            this.data.target = Date.now().toString();
            this.data.name = this.name;
            // this.data.units = this.units;
            var message = {
                type: 'unit-create',
                data: this.data
            };
            if (this.createUnit(message)) {
                this.sendToServer(message);
            }
        }
    };
    // создание нового блока
    ClientComponent.prototype.createUnit = function (message) {
        if (this.getUnitsCount(message.data.name) >= this.limit || this.unitCount >= this.limit) {
            if (this.name == message.data.name) {
                var audio = document.getElementById("audio-er");
                audio.play();
                return false;
            }
            else {
                this.unitService.addUnit(new _unit_unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](message.data.target, message.data.name, message.data.clientX + 'px', message.data.clientY + 'px'));
                this.updateUnits();
                var audio = document.getElementById("audio-cr");
                audio.play();
                return true;
            }
        }
        else {
            if (this.name == message.data.name) {
                this.unitCount++;
            }
            this.unitService.addUnit(new _unit_unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](message.data.target, message.data.name, message.data.clientX + 'px', message.data.clientY + 'px'));
            this.updateUnits();
            var audio = document.getElementById("audio-cr");
            audio.play();
            return true;
        }
    };
    // проверка превышения допустимого количества блоков
    ClientComponent.prototype.getUnitsCount = function (name) {
        return this.unitService.checkLimit(name);
    };
    // добавление лога поле информации
    ClientComponent.prototype.addMessage = function (message) {
        var messageContainer = document.querySelector('#messages'), messageItem = document.createElement('li');
        if (message.type == 'unit-drop') {
            messageItem.textContent = "Player " + message.data.name + " has moved a " + message.data.target + " unit!";
        }
        else if (message.type == 'hello') {
            if (message.data.text) {
                messageItem.textContent = message.data.name + " said: " + message.data.text;
            }
        }
        else if (message.type == 'unit-create') {
            messageItem.textContent = "Player " + message.data.name + " has created the " + message.data.target + " unit!";
        }
        else if (message.type == 'drag-err') {
            messageItem.textContent = "sorry, you can move only your own unit!";
        }
        else if (message.type == 'unit-delete') {
            messageItem.textContent = "Player " + message.data.name + " destroyed " + message.data.target + " unit!";
        }
        messageContainer.appendChild(messageItem);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    };
    // отправка сообщения в чат
    ClientComponent.prototype.sendHello = function () {
        if (this.text && this.name) {
            var message = {
                type: 'hello',
                data: {
                    name: this.name,
                    text: this.text
                }
            };
            this.addMessage(message);
            this.sendToServer(message);
        }
    };
    ClientComponent.prototype.prevent = function (e) {
        e.preventDefault();
    };
    // проверка на возможность перетасивать блок
    ClientComponent.prototype.canDrag = function (e) {
        return this.units.find(function (x) { return x.target == e; }).name == this.data.name;
    };
    //обработка начала перемещения блока
    ClientComponent.prototype.dragstart = function (ev) {
        this.currentDrag = ev.target;
        if (ev.type !== 'touchstart') {
            this.dragInfo.offsetX = ev.offsetX;
            this.dragInfo.offsetY = ev.offsetY;
        }
    };
    ClientComponent.prototype.dragover = function (ev) {
        ev.preventDefault();
    };
    // обработка события drop или touchend для touch устройств
    ClientComponent.prototype.drop = function (ev) {
        ev.preventDefault();
        var base = document.querySelector("#base");
        if (ev.type == 'touchend') {
            ev = ev.changedTouches[0];
            var touchTarget = document.elementFromPoint(ev.clientX, ev.clientY);
            if (touchTarget.classList.contains('unit') && this.currentDrag.id != touchTarget.id) {
                this.destroyUnit(touchTarget.id);
            }
        }
        else if (ev.target.classList.contains('unit')) {
            this.destroyUnit(ev.target.id);
        }
        if (!this.canDrag(this.currentDrag.id)) {
            var message_1 = {
                type: 'drag-err'
            };
            this.addMessage(message_1);
            var audio_1 = document.getElementById("audio-er");
            audio_1.play();
            return;
        }
        var audio = document.getElementById("audio-drag");
        audio.play();
        // проверка нижней/верхней границы игрового поля
        if (base.clientHeight < ev.clientY + this.currentDrag.offsetHeight) {
            this.currentDrag.style.top = base.clientHeight - this.currentDrag.offsetHeight + 'px';
        }
        else if (ev.clientY < this.currentDrag.offsetHeight + this.dragInfo.offsetY) {
            this.currentDrag.style.top = 0 + 'px';
        }
        else {
            this.currentDrag.style.top = ev.clientY - 67 - this.dragInfo.offsetY + 'px';
        }
        // проверка левой/правой границы игрового поля
        if (base.clientWidth < ev.clientX + this.currentDrag.offsetWidth) {
            this.currentDrag.style.left = base.clientWidth - this.currentDrag.offsetWidth + 'px';
        }
        else if (ev.clientX < this.currentDrag.offsetWidth) {
            this.currentDrag.style.left = 0 + 'px';
        }
        else {
            this.currentDrag.style.left = ev.clientX - 7 - this.dragInfo.offsetX + 'px';
        }
        this.data.target = this.currentDrag.id;
        this.data.clientX = this.currentDrag.style.left;
        this.data.clientY = this.currentDrag.style.top;
        var message = {
            type: 'unit-drop',
            data: this.data
        };
        this.unitService.updateUnit(new _unit_unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](this.currentDrag.id, this.name, this.currentDrag.style.left, this.currentDrag.style.top));
        this.updateUnits();
        this.sendToServer(message);
    };
    // обработка события drop при получении сообщения от сервера
    ClientComponent.prototype.dropUnit = function (message) {
        this.unitService.updateUnit(new _unit_unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](message.data.target, message.data.name, message.data.clientX, message.data.clientY));
        this.updateUnits();
    };
    // удаление определенного блока
    ClientComponent.prototype.destroyUnit = function (id) {
        var unit = this.units.find(function (x) { return x.target == id; });
        if (unit.name !== this.name) {
            this.data.target = unit.target;
            this.data.deletedName = this.units.find(function (x) { return x.target == unit.target; }).name;
            this.data.points = ++this.points;
            this.checkPoints();
            var message = {
                type: 'unit-delete',
                data: this.data
            };
            this.unitService.deleteUnit(unit.target);
            this.updateUnits();
            var audio = document.getElementById("audio-destroy");
            audio.play();
            this.sendToServer(message);
        }
    };
    // обработка события "удаление определенного блока" при получении сообщения от сервера
    ClientComponent.prototype.deleteUnit = function (message) {
        this.unitService.deleteUnit(message.data.target);
        this.updateUnits();
    };
    // возврат случайной координаты для нового блока
    ClientComponent.prototype.getRandomCoords = function (x) {
        var base = document.querySelector("#base");
        var res = x == 'x' ? Math.floor(Math.random() * (base.clientWidth - 80) + 1) : Math.floor(Math.random() * (base.clientHeight - 80) + 1);
        return res + '';
    };
    //проверка набора очков
    ClientComponent.prototype.checkPoints = function () {
        if (this.points == this.limit) {
            this.isWinner = true;
            this.data.name = this.name;
            var message = {
                type: 'winner',
                data: this.data
            };
            this.sendToServer(message);
        }
    };
    // проверка при окончании игры
    ClientComponent.prototype.gameResult = function (name) {
        if (name != this.name) {
            this.isLoser = true;
        }
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

module.exports = ""

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

module.exports = "<h2>\r\n  Game statistics\r\n</h2>\r\n<table class='table table-striped'>\r\n    <thead>\r\n        <tr>\r\n            <th>Player name</th>\r\n            <th>Units</th>\r\n            <th>Score</th>\r\n            <th *ngIf=\"winner\">Result</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let player of players\">\r\n          <td>{{player.name}}</td>\r\n          <td>{{player.units}}</td>\r\n          <td>{{player.points}}</td>\r\n          <td *ngIf=\"winner\">{{player.winStatus}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

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




var HostComponent = /** @class */ (function () {
    function HostComponent(chatService, unitService) {
        var _this = this;
        this.chatService = chatService;
        this.unitService = unitService;
        this.players = [];
        this.currentUnits = 1;
        this.winner = false;
        chatService.messages.subscribe(function (msg) {
            _this.units = _this.unitService.getUnits();
            if (msg.type == 'unit-create') {
                _this.addUnit(msg);
            }
            else if (msg.type == 'unit-delete') {
                _this.removeUnit(msg);
            }
            else if (msg.type == 'winner') {
                _this.gameResult(msg.data.name);
            }
        });
    }
    HostComponent.prototype.addUnit = function (message) {
        if (!this.players.find(function (x) { return x.name == message.data.name; })) {
            this.players.push(new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](message.data.name, this.currentUnits));
        }
        else {
            this.players.find(function (x) { return x.name == message.data.name; }).units += 1;
        }
    };
    HostComponent.prototype.removeUnit = function (message) {
        this.players.find(function (x) { return x.name == message.data.deletedName; }).units -= 1;
        this.players.find(function (x) { return x.name == message.data.name; }).points = message.data.points;
    };
    HostComponent.prototype.gameResult = function (name) {
        this.winner = true;
        this.players.find(function (x) { return x.name == name; }).winStatus = 'победа';
    };
    HostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-host',
            template: __webpack_require__(/*! ./host.component.html */ "./src/app/host/host.component.html"),
            styles: [__webpack_require__(/*! ./host.component.scss */ "./src/app/host/host.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"], _shared_units_service__WEBPACK_IMPORTED_MODULE_3__["UnitsService"]])
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
    function Player(name, units, points, winStatus) {
        if (units === void 0) { units = 0; }
        if (points === void 0) { points = 0; }
        if (winStatus === void 0) { winStatus = 'поражение'; }
        this.name = name;
        this.units = units;
        this.points = points;
        this.winStatus = winStatus;
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
            return data;
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
        this.units = [];
    }
    UnitsService.prototype.getUnits = function () {
        console.log(this.units);
        return this.units;
    };
    UnitsService.prototype.addUnit = function (un) {
        this.units.push(un);
    };
    UnitsService.prototype.deleteOne = function () {
        this.units.splice(0, 1);
    };
    UnitsService.prototype.deleteUnit = function (id) {
        var delId = [id];
        for (var i = 0; i < this.units.length; i++) {
            var unit = this.units[i];
            if (delId.indexOf(unit.target) !== -1) {
                this.units.splice(i, 1);
                i--;
            }
        }
    };
    UnitsService.prototype.updateUnit = function (un) {
        var index = this.units.findIndex(function (u) { return u.target == un.target; });
        this.units[index] = un;
    };
    UnitsService.prototype.checkLimit = function (name) {
        return this.units.filter(function (x) { return x.name == name; }).length;
    };
    UnitsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UnitsService);
    return UnitsService;
}());



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

module.exports = ""

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