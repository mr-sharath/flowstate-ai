"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_lib_utils_pdfGenerator_ts";
exports.ids = ["_ssr_src_lib_utils_pdfGenerator_ts"];
exports.modules = {

/***/ "(ssr)/./src/lib/utils/pdfGenerator.ts":
/*!***************************************!*\
  !*** ./src/lib/utils/pdfGenerator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePDF: () => (/* binding */ generatePDF)\n/* harmony export */ });\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ \"(ssr)/./node_modules/jspdf/dist/jspdf.es.min.js\");\n\nfunction generatePDF(report) {\n    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    doc.text(report, 10, 10);\n    doc.save(\"status-report.pdf\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvbGliL3V0aWxzL3BkZkdlbmVyYXRvci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQUVsQixTQUFTQyxZQUFZQyxNQUFjO0lBQ3hDLE1BQU1DLE1BQU0sSUFBSUgsNkNBQUtBO0lBQ3JCRyxJQUFJQyxJQUFJLENBQUNGLFFBQVEsSUFBSTtJQUNyQkMsSUFBSUUsSUFBSSxDQUFDO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG93c3RhdGUtYWkvLi9zcmMvbGliL3V0aWxzL3BkZkdlbmVyYXRvci50cz9iMjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqc1BERiBmcm9tICdqc3BkZidcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUERGKHJlcG9ydDogc3RyaW5nKSB7XG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERigpXG4gIGRvYy50ZXh0KHJlcG9ydCwgMTAsIDEwKVxuICBkb2Muc2F2ZSgnc3RhdHVzLXJlcG9ydC5wZGYnKVxufVxuIl0sIm5hbWVzIjpbImpzUERGIiwiZ2VuZXJhdGVQREYiLCJyZXBvcnQiLCJkb2MiLCJ0ZXh0Iiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./src/lib/utils/pdfGenerator.ts\n");

/***/ })

};
;