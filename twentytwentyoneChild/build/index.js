/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var ALLOW_BLOCKS = ['core/button'];
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl;
registerBlockType('alocade/custom-cta', {
  title: 'Call to Action',
  description: 'Block showing a Book card.',
  icon: 'arrow-right-alt',
  category: 'layout',
  // Specifying my block attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2.cta-title'
    },
    titleColor: {
      type: 'string',
      default: 'black'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p.cta-description'
    },
    alignment: {
      type: 'string',
      default: 'none'
    },
    backgroundImage: {
      type: 'string',
      default: null
    },
    overlayColor: {
      type: 'string',
      default: 'black'
    },
    overlayOpacity: {
      type: 'number',
      default: 0.3
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        body = attributes.body,
        titleColor = attributes.titleColor,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity,
        alignment = attributes.alignment,
        backgroundImage = attributes.backgroundImage;
    var instructions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, 'To edit the background image, you need permission to upload media.');

    var onChangeTitle = function onChangeTitle(title) {
      setAttributes({
        title: title
      });
    };

    var onChangeBody = function onChangeBody(body) {
      setAttributes({
        body: body
      });
    };

    var onTitleColorChange = function onTitleColorChange(titleColor) {
      setAttributes({
        titleColor: titleColor
      });
    };

    var onSelectImage = function onSelectImage(_ref2) {
      var url = _ref2.url;
      // console.log( newImage );
      setAttributes({
        backgroundImage: url
      });
    };

    var overlayColorChange = function overlayColorChange(overlayColor) {
      // console.log( newImage );
      setAttributes({
        overlayColor: overlayColor
      });
    };

    var overlayOpacityChange = function overlayOpacityChange(overlayOpacity) {
      // console.log( newImage );
      setAttributes({
        overlayOpacity: overlayOpacity
      });
    };

    var onChangeAlignment = function onChangeAlignment(newAlignment) {
      setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Font Color Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, " Select a Title color")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: titleColor,
      onChange: onTitleColorChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background Image Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-block-image-selector-example-image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, {
      fallback: instructions
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      title: 'Background image',
      onSelect: onSelectImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: 'editor-post-featured-image__toggle',
          onClick: open
        }, 'Set background image');
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background overlay Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, " Select Background overlay color")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: overlayColor,
      onChange: overlayColorChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Opacity",
      value: overlayOpacity,
      onChange: overlayOpacityChange,
      min: 0.1,
      max: 1,
      step: 0.1
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overly-color ",
      style: {
        backgroundColor: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "titleeditable",
      className: "cta-title",
      tagName: "h2",
      placeholder: "Your Cta title",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor,
        textAlign: alignment
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "descriptioneditable",
      className: "cta-description",
      tagName: "p",
      placeholder: "CTA Description",
      value: body,
      onChange: onChangeBody,
      style: {
        textAlign: alignment
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOW_BLOCKS
    }))];
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var title = attributes.title,
        body = attributes.body,
        backgroundImage = attributes.backgroundImage,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity,
        alignment = attributes.alignment,
        titleColor = attributes.titleColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overly-color",
      style: {
        backgroundColor: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "cta-title",
      tagName: "h2",
      value: title,
      style: {
        color: titleColor,
        textAlign: alignment
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "cta-description",
      tagName: "p",
      value: body,
      style: {
        textAlign: alignment
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map