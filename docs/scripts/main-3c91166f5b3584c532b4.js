/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/acceleration/acceleration.scss":
/*!***************************************************!*\
  !*** ./components/acceleration/acceleration.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/acceleration/acceleration.scss?");

/***/ }),

/***/ "./components/advantages/advantages.scss":
/*!***********************************************!*\
  !*** ./components/advantages/advantages.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/advantages/advantages.scss?");

/***/ }),

/***/ "./components/button/button.scss":
/*!***************************************!*\
  !*** ./components/button/button.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/button/button.scss?");

/***/ }),

/***/ "./components/consultation/consultation.scss":
/*!***************************************************!*\
  !*** ./components/consultation/consultation.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/consultation/consultation.scss?");

/***/ }),

/***/ "./components/description/description.scss":
/*!*************************************************!*\
  !*** ./components/description/description.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/description/description.scss?");

/***/ }),

/***/ "./components/dropshipping/dropshipping.scss":
/*!***************************************************!*\
  !*** ./components/dropshipping/dropshipping.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/dropshipping/dropshipping.scss?");

/***/ }),

/***/ "./components/header/header.scss":
/*!***************************************!*\
  !*** ./components/header/header.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/header/header.scss?");

/***/ }),

/***/ "./components/marketplaces-icons/marketplaces-icons.scss":
/*!***************************************************************!*\
  !*** ./components/marketplaces-icons/marketplaces-icons.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/marketplaces-icons/marketplaces-icons.scss?");

/***/ }),

/***/ "./components/marketplaces/marketplaces.scss":
/*!***************************************************!*\
  !*** ./components/marketplaces/marketplaces.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/marketplaces/marketplaces.scss?");

/***/ }),

/***/ "./components/navigation/navigation.scss":
/*!***********************************************!*\
  !*** ./components/navigation/navigation.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/navigation/navigation.scss?");

/***/ }),

/***/ "./components/possibilities/possibilities.scss":
/*!*****************************************************!*\
  !*** ./components/possibilities/possibilities.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/possibilities/possibilities.scss?");

/***/ }),

/***/ "./components/statistics/statistics.scss":
/*!***********************************************!*\
  !*** ./components/statistics/statistics.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/statistics/statistics.scss?");

/***/ }),

/***/ "./components/updates/updates.scss":
/*!*****************************************!*\
  !*** ./components/updates/updates.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/updates/updates.scss?");

/***/ }),

/***/ "./components/video/video.scss":
/*!*************************************!*\
  !*** ./components/video/video.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/video/video.scss?");

/***/ }),

/***/ "./components/acceleration/acceleration.js":
/*!*************************************************!*\
  !*** ./components/acceleration/acceleration.js ***!
  \*************************************************/
/***/ (() => {

eval("\n\nclass Acceleration {\n    constructor(element) {\n        let button = element.querySelector('.acceleration__button');\n        let text = element.querySelector('.acceleration__text');\n\n        button.addEventListener('click', () => this.toggle(element, text));\n    }\n\n    toggle(element, text) {\n        let open = document.querySelector('.acceleration__item_open');\n        if (open !== element && open) {\n            open.classList.remove('acceleration__item_open');\n            let visibleText = open.querySelector('.acceleration__text');\n            visibleText.classList.remove('acceleration__text_open');\n            element.classList.add('acceleration__item_open');\n            text.classList.add('acceleration__text_open');\n        } else {\n            element.classList.toggle('acceleration__item_open');\n            text.classList.toggle('acceleration__text_open');\n        }\n    }\n}\n\nlet elements = Array.from(document.querySelectorAll('.acceleration__item'));\nelements.forEach(element => new Acceleration(element));\n\n//# sourceURL=webpack:///./components/acceleration/acceleration.js?");

/***/ }),

/***/ "./components/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/navigation.js ***!
  \*********************************************/
/***/ (() => {

eval("\n\nclass Menu {\n    constructor() {\n        this.burger = document.querySelector('.header__burger');\n        this.navigation = document.querySelector('.navigation');\n        this.closeButton = document.querySelector('.navigation__close');\n\n        this.burger.addEventListener('click', () => this.open());\n        this.closeButton.addEventListener('click', () => this.close());\n        document.addEventListener('click', (event) => {\n            if (!event.target.closest('.navigation') && !event.target.closest('.header__burger')) \n                this.close();\n        });\n    }\n\n    close() {\n        this.navigation.classList.remove('navigation_open');\n    }\n\n    open() {\n        this.navigation.classList.add('navigation_open');\n    }\n}\n\nnew Menu();\n\n//# sourceURL=webpack:///./components/navigation/navigation.js?");

/***/ }),

/***/ "./components/possibilities/possibilities.js":
/*!***************************************************!*\
  !*** ./components/possibilities/possibilities.js ***!
  \***************************************************/
/***/ (() => {

eval("\n\nclass Possibiity {\n    constructor(element) {\n        let button = element.querySelector('.possibilities__button');\n        let text = element.querySelector('.possibilities__text');\n\n        button.addEventListener('click', () => this.toggle(element, text));\n    }\n\n    toggle(element, text) {\n        let open = document.querySelector('.possibilities__item_open');\n        if (open !== element && open) {\n            open.classList.remove('possibilities__item_open');\n            let visibleText = open.querySelector('.possibilities__text');\n            visibleText.classList.remove('possibilities__text_open');\n            element.classList.add('possibilities__item_open');\n            text.classList.add('possibilities__text_open');\n        } else {\n            element.classList.toggle('possibilities__item_open');\n            text.classList.toggle('possibilities__text_open');\n        }\n    }\n}\n\nlet elements = Array.from(document.querySelectorAll('.possibilities__item'));\nelements.forEach(element => new Possibiity(element));\n\n//# sourceURL=webpack:///./components/possibilities/possibilities.js?");

/***/ }),

/***/ "./components/video/video.js":
/*!***********************************!*\
  !*** ./components/video/video.js ***!
  \***********************************/
/***/ (() => {

eval("\n\nclass Video {\n    constructor(element) {\n        this.element = element;\n        let play = this.element.querySelector('.video__play');\n        this.player = this.element.querySelector('.video__player');\n\n        play.addEventListener('click', () => this.onPlay());\n        this.player.addEventListener('pause', () => this.pause());\n    }\n\n    onPlay() {\n        if (this.element.classList.contains('video_active')) {\n            this.player.pause();\n        } else {\n            this.element.classList.add('video_active');\n            this.player.setAttribute('controls', true);\n            this.player.play();\n        }\n    }\n\n    pause() {\n        this.element.classList.remove('video_active');\n    }\n}\n\nlet element = document.querySelector('.video');\nnew Video(element);\n\n//# sourceURL=webpack:///./components/video/video.js?");

/***/ }),

/***/ "./javascript/main.js":
/*!****************************!*\
  !*** ./javascript/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header.scss */ \"./components/header/header.scss\");\n/* harmony import */ var _components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation/navigation.scss */ \"./components/navigation/navigation.scss\");\n/* harmony import */ var _components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navigation/navigation.js */ \"./components/navigation/navigation.js\");\n/* harmony import */ var _components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_video_video_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/video/video.scss */ \"./components/video/video.scss\");\n/* harmony import */ var _components_video_video_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/video/video.js */ \"./components/video/video.js\");\n/* harmony import */ var _components_video_video_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_video_video_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_description_description_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/description/description.scss */ \"./components/description/description.scss\");\n/* harmony import */ var _components_marketplaces_marketplaces_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/marketplaces/marketplaces.scss */ \"./components/marketplaces/marketplaces.scss\");\n/* harmony import */ var _components_marketplaces_icons_marketplaces_icons_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/marketplaces-icons/marketplaces-icons.scss */ \"./components/marketplaces-icons/marketplaces-icons.scss\");\n/* harmony import */ var _components_button_button_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button/button.scss */ \"./components/button/button.scss\");\n/* harmony import */ var _components_statistics_statistics_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/statistics/statistics.scss */ \"./components/statistics/statistics.scss\");\n/* harmony import */ var _components_updates_updates_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/updates/updates.scss */ \"./components/updates/updates.scss\");\n/* harmony import */ var _components_consultation_consultation_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/consultation/consultation.scss */ \"./components/consultation/consultation.scss\");\n/* harmony import */ var _components_possibilities_possibilities_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/possibilities/possibilities.scss */ \"./components/possibilities/possibilities.scss\");\n/* harmony import */ var _components_possibilities_possibilities_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/possibilities/possibilities.js */ \"./components/possibilities/possibilities.js\");\n/* harmony import */ var _components_possibilities_possibilities_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_possibilities_possibilities_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_advantages_advantages_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/advantages/advantages.scss */ \"./components/advantages/advantages.scss\");\n/* harmony import */ var _components_acceleration_acceleration_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/acceleration/acceleration.scss */ \"./components/acceleration/acceleration.scss\");\n/* harmony import */ var _components_acceleration_acceleration_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/acceleration/acceleration.js */ \"./components/acceleration/acceleration.js\");\n/* harmony import */ var _components_acceleration_acceleration_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_acceleration_acceleration_js__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _components_dropshipping_dropshipping_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/dropshipping/dropshipping.scss */ \"./components/dropshipping/dropshipping.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./javascript/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/main.js");
/******/ 	
/******/ })()
;