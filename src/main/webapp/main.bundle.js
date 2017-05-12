webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* unused harmony export CHAT_URL */
//export const API_URL = "http://localhost:4499/api";
var API_URL = "/messenger-backend-java";
var CHAT_URL = "ws://localhost:4499";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(61);
/* harmony export (immutable) */ __webpack_exports__["c"] = jsonHeader;
/* harmony export (immutable) */ __webpack_exports__["a"] = jwtHeader;
/* harmony export (immutable) */ __webpack_exports__["b"] = jwtAndJson;

function jsonHeader() {
    var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({ headers: headers });
}
function jwtHeader() {
    var token = localStorage.getItem('jwtToken');
    var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + token });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({ headers: headers });
}
function jwtAndJson() {
    var token = localStorage.getItem('jwtToken');
    var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({ headers: headers });
}
//# sourceMappingURL=requestOptionsHelper.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sessionCtrl__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.userName = "";
        this.userEmail = "";
        this.userPass = "";
        this.showLogin = true;
        this.errorMessage = "";
    }
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.authSrv.login(this.userEmail, this.userPass).subscribe(function (user) {
            __WEBPACK_IMPORTED_MODULE_4__sessionCtrl__["c" /* setUser */](user);
            __WEBPACK_IMPORTED_MODULE_4__sessionCtrl__["d" /* set */]('jwtToken', user.token);
            // let sUser = JSON.stringify(user);
            // localStorage.setItem('userId',user.id);
            // localStorage.setItem('user',sUser);
            _this.router.navigate(['./messenger']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.signinSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* User */]();
        user.name = this.userName;
        user.email = this.userEmail;
        user.password = this.userPass;
        this.authSrv.signin(user).subscribe(function (res) {
            _this.loginSubmit();
        }, function (error) {
            _this.errorMessage = "Datos invalidos";
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(612),
            styles: [__webpack_require__(604)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Message__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sessionCtrl__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessengerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MessengerComponent = (function () {
    function MessengerComponent(router, usersSrv, convsSrv, mesageSrv) {
        var _this = this;
        this.router = router;
        this.usersSrv = usersSrv;
        this.convsSrv = convsSrv;
        this.mesageSrv = mesageSrv;
        this.creatingConv = false;
        this.conversations = [];
        this.messages = [];
        this.newMessage = "";
        this.friends = [];
        this.userName = __WEBPACK_IMPORTED_MODULE_8__sessionCtrl__["a" /* getUser */]().name;
        // TODO: fix machete!!!!!
        this.timer = setInterval(function () {
            _this.convsSrv.getAll().subscribe(function (convs) { return _this.conversations = convs; });
            if (_this.currentConversation)
                _this.mesageSrv.getByConversation(_this.currentConversation.id)
                    .subscribe(function (messages) { return _this.messages = messages; });
        }, 7000);
    }
    MessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.convsSrv.getAll().subscribe(function (convs) { return _this.conversations = convs; });
        this.usersSrv.getFriends().subscribe(function (friends) { return _this.friends = friends; });
        //this.initlizeChatSocket();
    };
    MessengerComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    MessengerComponent.prototype.showConv = function (id) {
        var _this = this;
        var conv = this.conversations.find(function (conv) { return conv.id == id; });
        this.currentConversation = conv;
        this.mesageSrv.getByConversation(id).subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessengerComponent.prototype.newConv = function () {
        this.creatingConv = true;
    };
    MessengerComponent.prototype.sendMessage = function () {
        var _this = this;
        // console.log("enviando mensaje: " + this.newMessage);
        if (!this.newMessage)
            return;
        //this.chatSocket.send(this.newMessage);
        var m = new __WEBPACK_IMPORTED_MODULE_6__models_Message__["a" /* Message */]();
        m.idConversation = this.currentConversation.id;
        m.text = this.newMessage;
        // this.messages.push(m);
        this.mesageSrv.create(m).subscribe(function (message) {
            // TODO: ineficient way, fix!, replace for websocket
            _this.showConv(_this.currentConversation.id);
            _this.convsSrv.getAll().subscribe(function (convs) { return _this.conversations = convs; });
        });
        this.newMessage = "";
    };
    MessengerComponent.prototype.cancelNewConv = function () {
        this.creatingConv = false;
    };
    MessengerComponent.prototype.createConv = function () {
        var _this = this;
        var newConv = new __WEBPACK_IMPORTED_MODULE_7__models__["a" /* Conversation */]();
        var participants = this.friends.filter(function (friend) { return friend.checked; });
        newConv.name = participants.map(function (u) { return u.name; }).join(", ");
        newConv.usersIds = participants.map(function (r) { return r.id; }).join(',');
        this.creatingConv = false;
        this.convsSrv.create(newConv).subscribe(function (conv) {
            //console.log("luego dre crear Conv: " + re);
            newConv.id = conv.id;
            _this.currentConversation = newConv;
            _this.conversations.push(newConv);
            _this.messages.splice(0);
            _this.convsSrv.getAll().subscribe(function (convs) { return _this.conversations = convs; });
        });
    };
    MessengerComponent.prototype.initlizeChatSocket = function () {
        // TODO:
        //let cli = SocketIO
        this.chatSocket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__('http://localhost:4499');
        // //socket.on('message')
        // // this.chatSocket = new WebSo(CHAT_URL);
        // //   // , {
        // //   //   headers: {
        // //   //     Authorization: 'Bearer ' + localStorage.getItem('jwt_token')
        // //   //   }
        // //   // });
        this.chatSocket.on("message", function (data) {
            console.log("recibiendo datos WSS");
            console.log(data);
        });
    };
    MessengerComponent.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_8__sessionCtrl__["b" /* remUser */]();
        this.router.navigate(['./login']);
    };
    MessengerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-messenger',
            template: __webpack_require__(613),
            styles: [__webpack_require__(605)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__["a" /* ConversationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__["a" /* ConversationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */]) === 'function' && _d) || Object])
    ], MessengerComponent);
    return MessengerComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=messenger.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message() {
    }
    return Message;
}());
//# sourceMappingURL=Message.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(533);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Conversation__ = __webpack_require__(532);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Conversation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Message__ = __webpack_require__(347);
/* unused harmony namespace reexport */
// TODO: re-export all models



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'not-found',
            template: '<h1 class="text-center">Pagina No Econtrada</h1>',
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var endPoint = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* API_URL */] + '/auth';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        var url = endPoint + '?email=' + email + '&password=' + password;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    AuthService.prototype.signin = function (user) {
        return this.http.post(endPoint, JSON.stringify(user), __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__["c" /* jsonHeader */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
function handleError(error) {
    // In a real world app, you might use a remote logging infrastructure
    // let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
    //   errMsg = error.message ? error.message : error.toString();
    // }
    // console.error(errMsg);
    return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw("errMsg Auth Service");
}
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var endPoint = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* API_URL */] + '/conversation';
var endPointUsers = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* API_URL */] + '/conversation/:id/users';
var ConversationService = (function () {
    function ConversationService(http) {
        this.http = http;
    }
    ConversationService.prototype.getAll = function () {
        //let url = endPoint + "?idUser=" + localStorage.getItem("userId");
        return this.http.get(endPoint, __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__["a" /* jwtHeader */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    ConversationService.prototype.create = function (conv) {
        // TODO: set idCreator inside backend
        conv.idCreator = parseInt(localStorage.getItem("userId"));
        return this.http.post(endPoint, conv, __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__["b" /* jwtAndJson */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    /**
     * Agrega usuarios a una conversación en particular
     * @param idConv id de la conversación
     * @param idsUsers lista de los ids de usuarios que va agregar
     */
    ConversationService.prototype.addUsers = function (idConv, idsUsers) {
        var url = endPointUsers.replace(":id", idConv.toString());
        return this.http.post(url, { idsUsers: idsUsers }).map(function (res) { return res.json(); });
    };
    /**
     * Abandona la conversación (no la elimina)
     * @param idConv id de la conversación
     */
    ConversationService.prototype.exit = function (idConv) {
        // TODO: set de jwt token header
        var url = endPointUsers.replace(":id", idConv.toString());
        return this.http.delete(url).map(function (res) { return res.json(); });
    };
    ConversationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ConversationService);
    return ConversationService;
    var _a;
}());
function handleError(error) {
    return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw("errMsg Conversation Service");
}
//# sourceMappingURL=conversation.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var endPoint = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* API_URL */] + '/message';
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getByConversation = function (idConv) {
        var url = endPoint + "?idConv=" + idConv;
        return this.http.get(url, __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__["a" /* jwtHeader */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    MessageService.prototype.create = function (message) {
        message.idUser = parseInt(localStorage.getItem("userId"));
        return this.http.post(endPoint, message, __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__["b" /* jwtAndJson */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());
function handleError(error) {
    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("errMsg Message Service");
}
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var endPoint = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* API_URL */] + '/user';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getFriends = function () {
        // TODO: con jwt el server conoce el id del usuario actual, devuelve la lista de amigos
        return this.http.get(endPoint, __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__["a" /* jwtHeader */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
function handleError(error) {
    return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw("errMsg User Service");
}
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = setUser;
/* harmony export (immutable) */ __webpack_exports__["a"] = getUser;
/* harmony export (immutable) */ __webpack_exports__["b"] = remUser;
/* harmony export (immutable) */ __webpack_exports__["d"] = set;
/* unused harmony export get */
/* unused harmony export remove */
var cache = new Map();
var userKey = 'user';
function setUser(user) {
    cache.set(userKey, user);
    localStorage.setItem(userKey, JSON.stringify(user));
}
function getUser() {
    if (cache.has(userKey))
        return cache.get(userKey);
    else {
        return JSON.parse(localStorage.getItem(userKey));
    }
}
function remUser() {
    localStorage.removeItem(userKey);
}
function set(key, data, cached) {
    if (cached === void 0) { cached = true; }
    if (typeof data == 'object') {
        localStorage.setItem(key, JSON.stringify(data));
        if (cached)
            cache.set(key, data);
    }
    else {
        localStorage.setItem(key, data);
        if (cached)
            cache.set(key, data);
    }
}
function get(key) {
    if (cache.has(key))
        return cache.get(key);
    else
        return JSON.parse(localStorage.getItem(key));
}
function remove(key) {
    cache.delete(key);
    localStorage.removeItem(key);
}
//# sourceMappingURL=sessionCtrl.js.map

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 410;


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(535);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messenger_messenger_component__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HeroDetailComponent }  from './hero-detail.component';
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    { path: 'messenger', component: __WEBPACK_IMPORTED_MODULE_4__messenger_messenger_component__["a" /* MessengerComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(611),
            styles: [__webpack_require__(603)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_conversation_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_event_service__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__messenger_messenger_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__messenger_messenger_component__["a" /* MessengerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__services_conversation_service__["a" /* ConversationService */], __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_8__services_event_service__["a" /* EventService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversation; });
var Conversation = (function () {
    function Conversation() {
    }
    return Conversation;
}());
//# sourceMappingURL=Conversation.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=User.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var endPoint = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* API_URL */] + '/event';
var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getPublic = function () {
        return this.http.get(endPoint, __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__["a" /* jwtHeader */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    EventService.prototype.invite = function (idsFriends, idEvent) {
        return this.http.post(endPoint, __WEBPACK_IMPORTED_MODULE_4__requestOptionsHelper__["a" /* jwtHeader */]())
            .map(function (res) { return res.json(); })
            .catch(handleError);
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], EventService);
    return EventService;
    var _a;
}());
function handleError(error) {
    return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw("errMsg Event Service");
}
//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, ".logoPanel, .formsPanel{\n  float:left;\n  width: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, "/*\n    Created on : Mar 5, 2017, 9:11:12 AM\n    Author     : alex\n*/\n.areaMain{\n    height: 100%;\n    padding-top: 70px;\n}\n.areaMain .areaConversations{\n    width: 32%;\n    height: 100%;\n    float: left;\n    padding: 0 29px 23px;\n    overflow-y: auto;\n    position: relative;\n}\n.newPanel{\n  position: absolute;\n  bottom: 14px;\n  right: 29px;\n}\n.areaMain .areaChat{\n    width: 65%;\n    display: inline-block;\n    position: relative;\n    height: 95%;\n}\n.areaMessage{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n.messagesArea{\n  height: 80%;\n  overflow-y: auto;\n  padding-bottom: 40px;\n}\n.areaNewConv{\n    height: 100%;\n    float: left;\n    padding: 0 29px 23px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<div class=\"h100\">\n  <div class=\"logoPanel\">\n    <div class=\"logoP1\">LOGO</div>\n    <!--<button>Nota importante</button>\n    <p>Aclaración nota importante</p>-->\n  </div>\n  <div class=\"formsPanel\">\n    <div *ngIf=\"showLogin\">\n      <form (submit)=\"loginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"emailTxt\">Correo</label>\n          <input type=\"email\" class=\"form-control\" id=\"emailTxt\" placeholder=\"yisus@gmail.com\"\n            [(ngModel)]=\"userEmail\" name=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordTxt\">Contraseña</label>\n          <input type=\"password\" class=\"form-control\" id=\"passwordTxt\" placeholder=\"****\"\n            [(ngModel)]=\"userPass\" name=\"password\" required>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\"> Recordarme\n          </label>\n        </div>\n        <div>\n          <button class=\"btn btn-primary\">Ingresar</button>\n          <a class=\"btn btn-default\" (click)=\"showLogin = false\">Registrarse</a>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"!showLogin\">\n      <form (submit)=\"signinSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"nombreTxt\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" id=\"nombreTxt\" placeholder=\"Yisus Christ\"\n            [(ngModel)]=\"userName\" name=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"emailTxt\">Correo</label>\n          <input type=\"email\" class=\"form-control\" id=\"emailTxt\" placeholder=\"yisus@gmail.com\"\n            [(ngModel)]=\"userEmail\" name=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordTxt\">Contraseña</label>\n          <input type=\"password\" class=\"form-control\" id=\"passwordTxt\" placeholder=\"****\"\n            [(ngModel)]=\"userPass\" name=\"password\" required>\n        </div>\n        <div>\n          <button type=\"submit\" class=\"btn btn-primary\">Registrar</button>\n          <a class=\"btn btn-default\" role=\"button\" (click)=\"showLogin = true\">Ingresar</a>\n        </div>\n      </form>\n      <span style=\"color:red;\">{{errorMessage}}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<div class=\"h100\">\n  <div class=\"areaMain\">\n    <div class=\"areaConversations\">\n      <div *ngIf=\"!creatingConv\" class=\"list-group\">\n        <a *ngFor=\"let conv of conversations\"\n          (click)=\"showConv(conv.id)\"\n          class=\"list-group-item\">\n          <strong>{{ conv.name }}</strong>  {{ conv.lastMessageText }}\n        </a>\n      </div>\n      <div *ngIf=\"!creatingConv\" class=\"newPanel\">\n        <button (click)=\"newConv()\" class=\"btn btn-success\">Nueva</button>\n      </div>\n      <div *ngIf=\"creatingConv\" class=\"areaNewConv\">\n        <div *ngFor=\"let friend of friends\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"friend.checked\">\n            <span>{{ friend.name }}</span>\n          </label>\n        </div>\n        <div class=\"newPanel\">\n          <button (click)=\"cancelNewConv()\" class=\"btn btn-danger\">Cancelar</button>\n          <button (click)=\"createConv()\" class=\"btn btn-success\">Crear</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"areaChat\">\n      <div *ngIf=\"currentConversation\" class=\"panel panel-default h100\">\n        <div class=\"panel-heading\">\n          <span >{{currentConversation.name}},</span>\n        </div>\n        <div class=\"panel-body messagesArea\">\n          <div *ngFor=\"let message of messages\">\n            <strong>{{ message.userName }}:  </strong>{{ message.text }}\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!currentConversation\">\n        <h2>Conversacion no seleccionada</h2>\n      </div>\n      <div class=\"areaMessage\">\n        <form class=\"form-inline\" (submit)=\"sendMessage()\">\n          <div class=\"input-group\">\n            <input [value]=\"newMessage\" (input)=\"newMessage=$event.target.value\"\n              type=\"text\" class=\"form-control\" placeholder=\"Mensaje\" >\n            <div class=\"input-group-btn\">\n              <button type=\"submit\" class=\"btn btn-success\">Enviar</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">UN Messenger</a>\n      <strong>{{userName}}</strong>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"logout()\">Cerrar sesión</button>\n      </ul>\n    </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(411);


/***/ })

},[889]);
//# sourceMappingURL=main.bundle.js.map