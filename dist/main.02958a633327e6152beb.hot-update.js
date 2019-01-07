exports.id = "main";
exports.modules = {

/***/ "./src/filters/NotFoundExeptionFilter.ts":
/*!***********************************************!*\
  !*** ./src/filters/NotFoundExeptionFilter.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet NotFoundExceptionFilter = class NotFoundExceptionFilter {\n    catch(exception, host) {\n        const ctx = host.switchToHttp();\n        const response = ctx.getResponse();\n        const request = ctx.getRequest();\n        const status = exception.getStatus();\n        response.sendFile(\"index.html\");\n    }\n};\nNotFoundExceptionFilter = __decorate([\n    common_1.Catch(common_1.NotFoundException)\n], NotFoundExceptionFilter);\nexports.NotFoundExceptionFilter = NotFoundExceptionFilter;\n\n\n//# sourceURL=webpack:///./src/filters/NotFoundExeptionFilter.ts?");

/***/ })

};