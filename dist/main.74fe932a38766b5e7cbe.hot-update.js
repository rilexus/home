exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nlet AppModule = class AppModule {\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [],\n        controllers: [app_controller_1.AppController],\n        providers: [\n            app_service_1.AppService,\n        ],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\n__webpack_require__(/*! dotenv/config */ \"dotenv/config\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst NotFoundExeptionFilter_1 = __webpack_require__(/*! ./filters/NotFoundExeptionFilter */ \"./src/filters/NotFoundExeptionFilter.ts\");\nconst port = process.env.PORT || 8080;\nfunction bootstrap() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const app = yield core_1.NestFactory.create(app_module_1.AppModule, new core_1.FastifyAdapter());\n        yield app.listen(port);\n        app.useGlobalFilters(new NotFoundExeptionFilter_1.NotFoundExceptionFilter());\n        const url = path.resolve(`client/build`);\n        common_1.Logger.log(`The server is running: http://localhost:${port}`, `Bootstrap`);\n        common_1.Logger.log(`serving folder:${url}`, `Bootstrap`);\n        app.useStaticAssets({\n            root: path.resolve(url)\n        });\n        common_1.Logger.log(`The server is running: http://localhost:${port}`, `Bootstrap`);\n        if (true) {\n            module.hot.accept();\n            module.hot.dispose(() => app.close());\n        }\n    });\n}\nbootstrap();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

};