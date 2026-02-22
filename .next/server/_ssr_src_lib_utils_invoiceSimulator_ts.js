"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_lib_utils_invoiceSimulator_ts";
exports.ids = ["_ssr_src_lib_utils_invoiceSimulator_ts"];
exports.modules = {

/***/ "(ssr)/./src/lib/utils/invoiceSimulator.ts":
/*!*******************************************!*\
  !*** ./src/lib/utils/invoiceSimulator.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateInvoice: () => (/* binding */ generateInvoice)\n/* harmony export */ });\nfunction generateInvoice(invoice) {\n    const content = `Invoice\\nAmount: $${invoice.amount}\\nItems:\\n${invoice.items.map((i)=>`${i.description}: $${i.amount}`).join(\"\\n\")}`;\n    const blob = new Blob([\n        content\n    ], {\n        type: \"text/plain\"\n    });\n    const url = URL.createObjectURL(blob);\n    const a = document.createElement(\"a\");\n    a.href = url;\n    a.download = \"invoice.txt\";\n    a.click();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvbGliL3V0aWxzL2ludm9pY2VTaW11bGF0b3IudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLGdCQUFnQkMsT0FBNkU7SUFDM0csTUFBTUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFRCxRQUFRRSxNQUFNLENBQUMsVUFBVSxFQUFFRixRQUFRRyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSyxDQUFDLEVBQUVBLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLEVBQUVELEVBQUVILE1BQU0sQ0FBQyxDQUFDLEVBQUVLLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckksTUFBTUMsT0FBTyxJQUFJQyxLQUFLO1FBQUNSO0tBQVEsRUFBRTtRQUFFUyxNQUFNO0lBQWE7SUFDdEQsTUFBTUMsTUFBTUMsSUFBSUMsZUFBZSxDQUFDTDtJQUNoQyxNQUFNTSxJQUFJQyxTQUFTQyxhQUFhLENBQUM7SUFDakNGLEVBQUVHLElBQUksR0FBR047SUFDVEcsRUFBRUksUUFBUSxHQUFHO0lBQ2JKLEVBQUVLLEtBQUs7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb3dzdGF0ZS1haS8uL3NyYy9saWIvdXRpbHMvaW52b2ljZVNpbXVsYXRvci50cz9lOWFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUludm9pY2UoaW52b2ljZTogeyBhbW91bnQ6IG51bWJlcjsgaXRlbXM6IHsgZGVzY3JpcHRpb246IHN0cmluZzsgYW1vdW50OiBudW1iZXIgfVtdIH0pIHtcbiAgY29uc3QgY29udGVudCA9IGBJbnZvaWNlXFxuQW1vdW50OiAkJHtpbnZvaWNlLmFtb3VudH1cXG5JdGVtczpcXG4ke2ludm9pY2UuaXRlbXMubWFwKGkgPT4gYCR7aS5kZXNjcmlwdGlvbn06ICQke2kuYW1vdW50fWApLmpvaW4oJ1xcbicpfWBcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50XSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSlcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGEuaHJlZiA9IHVybFxuICBhLmRvd25sb2FkID0gJ2ludm9pY2UudHh0J1xuICBhLmNsaWNrKClcbn1cbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUludm9pY2UiLCJpbnZvaWNlIiwiY29udGVudCIsImFtb3VudCIsIml0ZW1zIiwibWFwIiwiaSIsImRlc2NyaXB0aW9uIiwiam9pbiIsImJsb2IiLCJCbG9iIiwidHlwZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./src/lib/utils/invoiceSimulator.ts\n");

/***/ })

};
;