exports.id = "main";
exports.modules = {

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\n__webpack_require__(/*! dotenv/config */ \"dotenv/config\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst port = process.env.PORT || 8080;\nfunction bootstrap() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const app = yield core_1.NestFactory.create(app_module_1.AppModule, new core_1.FastifyAdapter());\n        yield app.listen(port);\n        const url = path.resolve(`${__dirname}build`);\n        common_1.Logger.log(`The server is running: http://localhost:${port}`, `Bootstrap`);\n        common_1.Logger.log(`serving folder:${url}`, `Bootstrap`);\n        app.useStaticAssets({\n            root: path.resolve(__dirname + \"../public\")\n        });\n        common_1.Logger.log(`The server is running: http://localhost:${port}`, `Bootstrap`);\n        if (true) {\n            module.hot.accept();\n            module.hot.dispose(() => app.close());\n        }\n    });\n}\nbootstrap();\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

};