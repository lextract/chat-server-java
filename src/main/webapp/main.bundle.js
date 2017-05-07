webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* unused harmony export CHAT_URL */
//export const API_URL = "http://localhost:4499/api";
var API_URL = "/messenger-backend-java";
var CHAT_URL = "ws://localhost:4499";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(59);
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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(321);
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
        if (!this.userEmail || !this.userPass) {
            this.errorMessage = "Datos invalidos";
        }
        this.authSrv.login(this.userEmail, this.userPass).subscribe(function (user) {
            var sUser = JSON.stringify(user);
            localStorage.setItem('userId', user.id);
            localStorage.setItem('user', sUser);
            localStorage.setItem('jwtToken', user.token);
            _this.router.navigate(['./messenger']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.signinSubmit = function () {
        var _this = this;
        if (!this.userEmail || !this.userPass || this.userName) {
            this.errorMessage = "Datos invalidos";
        }
        var user = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* User */]();
        user.name = this.userName;
        user.email = this.userEmail;
        user.password = this.userPass;
        this.authSrv.signin(user).subscribe(function (res) {
            _this.loginSubmit();
        }, function (error) {
            _this.errorMessage = "Datos invalidos";
            //console.log(error);
        });
    };
    LoginComponent.prototype.navToMessenger = function () {
        //this.router.navigate(['./messenger']);
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(568),
            styles: [__webpack_require__(560)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Message__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models__ = __webpack_require__(319);
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
        this.userName = JSON.parse(localStorage.getItem("user")).name;
        // TODO: fix machete!!!!!
        setTimeout(function () { return _this.ngOnInit(); }, 5);
    }
    MessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.convsSrv.getAll().subscribe(function (convs) { return _this.conversations = convs; });
        this.usersSrv.getFriends().subscribe(function (friends) { return _this.friends = friends; });
        //this.initlizeChatSocket();
    };
    MessengerComponent.prototype.ngOnDestroy = function () {
    };
    MessengerComponent.prototype.showConv = function (id) {
        var _this = this;
        console.log("cargando conversation: " + id);
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
        localStorage.removeItem('jwt_token');
        this.router.navigate(['./login']);
    };
    MessengerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-messenger',
            template: __webpack_require__(569),
            styles: [__webpack_require__(561)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__["a" /* ConversationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__["a" /* ConversationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */]) === 'function' && _d) || Object])
    ], MessengerComponent);
    return MessengerComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=messenger.component.js.map

/***/ }),

/***/ 318:
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(490);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Conversation__ = __webpack_require__(489);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Conversation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Message__ = __webpack_require__(318);
/* unused harmony namespace reexport */
// TODO: re-export all models



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requestOptionsHelper__ = __webpack_require__(135);
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







var endPoint = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* API_URL */] + '/auth';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        var url = endPoint + '?email=' + email + '&password=' + password;
        return this.http.get(url).map(function (res) {
            // TODO: change to send status code (see catch() method of http.get() )
            console.log(res);
            return res.json();
        }).catch(this.handleError);
    };
    AuthService.prototype.signin = function (user) {
        return this.http.post(endPoint, JSON.stringify(user), __WEBPACK_IMPORTED_MODULE_6__requestOptionsHelper__["c" /* jsonHeader */]())
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('jwtToken');
    };
    AuthService.prototype.handleError = function (error) {
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
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("errMsg");
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
// login2(email: string, password: string) {
//     let postData = JSON.stringify({ email: email, password: password });
//     return this.http.post(endPoint, postData, roh.jsonHeader()).map((res: Response) => {
//       // login successful if there's a jwt token in the response
//       let r = res.json();
//       console.log(r);
//       if (r && r.token) {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem('jwt_token', r.token);
//       }
//       else {
//         //
//       }
//       return r;
//     });
//   }
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__ = __webpack_require__(135);
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






var endPoint = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* API_URL */] + '/conversation';
var endPointUsers = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* API_URL */] + '/conversation/:id/users';
var ConversationService = (function () {
    function ConversationService(http) {
        this.http = http;
    }
    ConversationService.prototype.getAll = function () {
        //return this.http.get(apiUrl, jwtHeader()).map((response: Response) => response.json());
        var url = endPoint + "?idUser=" + localStorage.getItem("userId");
        return this.http.get(url, __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__["a" /* jwtHeader */]())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ConversationService.prototype.create = function (conv) {
        // TODO: set de jwt token header
        conv.idCreator = parseInt(localStorage.getItem("userId"));
        return this.http.post(endPoint, conv, __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__["b" /* jwtAndJson */]())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
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
    // update(user: User) {
    //   return this.http.put(apiUrl + '/' + user.id, user, jwtHeader()).map((response: Response) => response.json());
    // }
    // delete(id: number) {
    //   //return this.http.delete(endPoint + '/' + id, jwtHeader()).map(res => res.json());
    //   return this.http.delete(endPoint + '/' + id).map(res => res.json());
    // }
    ConversationService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    ConversationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ConversationService);
    return ConversationService;
    var _a;
}());
// let convs: Conversation[] = [
//       { id: 101, name: "Conversation 1", users: [{id:123,name:"Al Hassem"}]},
//       { id: 102, name: "Conversation 2", users: [{id:123,name:"Mohamed"}]},
//       { id: 103, name: "Conversation 3", users: [{id:123,name:"Nostradamus"}]}
//     ]
//     ;
//let params = new URLSearchParams();
// //params.set('search', term); // the user's search value
// params.set('action', 'opensearch');
// params.set('format', 'json');
//params.set('callback', 'JSONP_CALLBACK');
// getAllOwn(){
//   let params = new URLSearchParams();
//   params.set('callback', 'JSONP_CALLBACK');
//   return this.http.get(apiUrl, { search: params }).map(res => res.json());
// }
//# sourceMappingURL=conversation.service.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__ = __webpack_require__(135);
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
            .catch(this.handleError);
    };
    MessageService.prototype.create = function (message) {
        message.idUser = parseInt(localStorage.getItem("userId"));
        return this.http.post(endPoint, message, __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__["b" /* jwtAndJson */]())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__ = __webpack_require__(135);
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






var endPoint = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* API_URL */] + '/user';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getFriends = function () {
        //return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
        // TODO: con jwt el server conoce el id del usuario actual, devuelve la lista de amigos
        var url = endPoint + "?idUser=" + localStorage.getItem("userId");
        return this.http.get(url, __WEBPACK_IMPORTED_MODULE_5__requestOptionsHelper__["a" /* jwtHeader */]())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        // return new Promise<User[]>((resolve)=> {
        //   //resolve(friends);
        //   let params = new URLSearchParams();
        // //params.set('search', term); // the user's search value
        // params.set('action', 'opensearch');
        // params.set('format', 'json');
        // params.set('callback', 'JSONP_CALLBACK');
        //   this.jsonp.get(apiUrl, { search: params }
        //   ).subscribe(res => {
        //     console.log(res);
        //     resolve(res.json());
        //   })
        // });
        //return
        // .subscribe((response: Response) => {
        //   console.log("LA GRAN PYTA MUERDA");
        //   console.log(response);
        //   let result = response.json();
        //   console.log(result);
        //   return result;
        // });//.catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        // let errMsg: string;
        // if (error instanceof Response) {
        //   const body = error.json() || '';
        //   const err = body.error || JSON.stringify(body);
        //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        // } else {
        //   errMsg = error.message ? error.message : error.toString();
        // }
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
// let current: User = {
//   id: 21,
//   name: "Alex"
// }
// let friends: User[] = [
//   { id: 11, name: "Goku" },
//   { id: 12, name: "Alf" },
//   { id: 12, name: "Homero" }
// ]
function handleError(error) {
    // In a real world app, you might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
}
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 367;


/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(491);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messenger_messenger_component__ = __webpack_require__(317);
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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(567),
            styles: [__webpack_require__(559)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_conversation_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messenger_messenger_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(486);
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
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__messenger_messenger_component__["a" /* MessengerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__services_conversation_service__["a" /* ConversationService */], __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 489:
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

/***/ 490:
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

/***/ 491:
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

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".logoPanel, .formsPanel{\n  float:left;\n  width: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "/*\n    Created on : Mar 5, 2017, 9:11:12 AM\n    Author     : alex\n*/\n.areaMain{\n    height: 100%;\n    padding-top: 70px;\n}\n.areaMain .areaConversations{\n    width: 32%;\n    height: 100%;\n    float: left;\n    padding: 0 29px 23px;\n    overflow-y: auto;\n    position: relative;\n}\n.newPanel{\n  position: absolute;\n  bottom: 14px;\n  right: 29px;\n}\n.areaMain .areaChat{\n    width: 65%;\n    display: inline-block;\n    position: relative;\n    height: 95%;\n}\n.areaMessage{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n.messagesArea{\n  height: 80%;\n  overflow-y: auto;\n  padding-bottom: 40px;\n}\n.areaNewConv{\n    height: 100%;\n    float: left;\n    padding: 0 29px 23px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div class=\"h100\">\n  <div class=\"logoPanel\">\n    <div class=\"logoP1\">LOGO</div>\n    <!--<button>Nota importante</button>\n    <p>Aclaración nota importante</p>-->\n  </div>\n  <div class=\"formsPanel\">\n    <div *ngIf=\"showLogin\">\n      <form (submit)=\"loginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"emailTxt\">Correo</label>\n          <input type=\"email\" class=\"form-control\" id=\"emailTxt\" placeholder=\"yisus@gmail.com\"\n            [(ngModel)]=\"userEmail\" name=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordTxt\">Contraseña</label>\n          <input type=\"password\" class=\"form-control\" id=\"passwordTxt\" placeholder=\"****\"\n            [(ngModel)]=\"userPass\" name=\"password\" required>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\"> Recordarme\n          </label>\n        </div>\n        <div>\n          <button class=\"btn btn-primary\">Ingresar</button>\n          <a class=\"btn btn-default\" (click)=\"showLogin = false\">Registrarse</a>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"!showLogin\">\n      <form (submit)=\"signinSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"nombreTxt\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" id=\"nombreTxt\" placeholder=\"Yisus Christ\"\n            [(ngModel)]=\"userName\" name=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"emailTxt\">Correo</label>\n          <input type=\"email\" class=\"form-control\" id=\"emailTxt\" placeholder=\"yisus@gmail.com\"\n            [(ngModel)]=\"userEmail\" name=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordTxt\">Contraseña</label>\n          <input type=\"password\" class=\"form-control\" id=\"passwordTxt\" placeholder=\"****\"\n            [(ngModel)]=\"userPass\" name=\"password\" required>\n        </div>\n        <div>\n          <button type=\"submit\" class=\"btn btn-primary\">Registrar</button>\n          <a class=\"btn btn-default\" role=\"button\" (click)=\"showLogin = true\">Ingresar</a>\n        </div>\n      </form>\n      <span style=\"color:red;\">{{errorMessage}}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"h100\">\n  <div class=\"areaMain\">\n    <div class=\"areaConversations\">\n      <div *ngIf=\"!creatingConv\" class=\"list-group\">\n        <a *ngFor=\"let conv of conversations\"\n          (click)=\"showConv(conv.id)\"\n          class=\"list-group-item\">\n          <strong>{{ conv.name }}</strong>  {{ conv.lastMessageText }}\n        </a>\n      </div>\n      <div *ngIf=\"!creatingConv\" class=\"newPanel\">\n        <button (click)=\"newConv()\" class=\"btn btn-success\">Nueva</button>\n      </div>\n      <div *ngIf=\"creatingConv\" class=\"areaNewConv\">\n        <div *ngFor=\"let friend of friends\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"friend.checked\">\n            <span>{{ friend.name }}</span>\n          </label>\n        </div>\n        <div class=\"newPanel\">\n          <button (click)=\"cancelNewConv()\" class=\"btn btn-danger\">Cancelar</button>\n          <button (click)=\"createConv()\" class=\"btn btn-success\">Crear</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"areaChat\">\n      <div *ngIf=\"currentConversation\" class=\"panel panel-default h100\">\n        <div class=\"panel-heading\">\n          <span >{{currentConversation.name}},</span>\n        </div>\n        <div class=\"panel-body messagesArea\">\n          <div *ngFor=\"let message of messages\">\n            <strong>{{ message.userName }}:  </strong>{{ message.text }}\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!currentConversation\">\n        <h2>Conversacion no seleccionada</h2>\n      </div>\n      <div class=\"areaMessage\">\n        <form class=\"form-inline\" (submit)=\"sendMessage()\">\n          <div class=\"input-group\">\n            <input [value]=\"newMessage\" (input)=\"newMessage=$event.target.value\"\n              type=\"text\" class=\"form-control\" placeholder=\"Mensaje\" >\n            <div class=\"input-group-btn\">\n              <button type=\"submit\" class=\"btn btn-success\">Enviar</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">UN Messenger</a>\n      <strong>{{userName}}</strong>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"logout()\">Cerrar sesión</button>\n      </ul>\n    </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(368);


/***/ })

},[598]);
//# sourceMappingURL=main.bundle.js.map