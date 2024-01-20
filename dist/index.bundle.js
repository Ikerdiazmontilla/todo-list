/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Css reset */
*, *::before, *::after {
    box-sizing: border-box;
   }
   
   * {
    margin: 0;
    padding: 0;
    font-family: "Varela Round", 'Courier New', Courier, monospace;
    /* border: 1px solid red; */
   }
   
   body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    /* border: 1px solid red; */
   }
   
   img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
   }
   
   input, button, textarea, select {
    font: inherit;
   }
   
   p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
   }

   button, a{
     cursor: pointer;
     }
    button{
      background-color: transparent;
      color: inherit;
      outline: none;
      border: none;
      padding: 0px;
    }

   a{
       text-decoration: none;
   }

   fieldset{
    border: none;
   }
   ul{
    list-style: none;
   }
 
   
/* Variables */

:root {
    --main-text: #2F4F4F;
    --main-bg: #C0C0C0;
    --main-hover:#b8b4b4;
    --header-bg: #918f8f;
    --header-text: #fff;
    --sidebar-bg: #87CEEB;
    --sidebar-hover:#b9dfe4;
    --sidebar-border-hover: #00b3bb;
    --button-bg:#b2def0;
    --border-radius: 8px;
    --input-hover:#e0dddd;
    --input-focus:#d4d2d2;
  }

  /* Footer */


  html {
    /* footer support */
    position: relative;
    min-height: 100%;
  }
  
  
  
  
  body {
  /* footer support */
    margin-bottom: 48px;
  }
  
  
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 18px;
  }
  
  
  .fa-github {
    color: white;
    font-size: 22px;
    transition: transform 0.3s ease-in-out;
  }
  
  
  .fa-github:hover {
    transform: rotate(360deg) scale(1.2);
  }

/* Styling */

  body{
    height: calc(100vh - 48px);
    width: 100vw;
    max-width: 100vw;
  }
  
  .content{
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100vw;
    height: calc(100vh - 48px);
    /* border: 1px solid red; */
  }


/* Header */

header{
  background-color: var(--header-bg);
  color: var(--header-text);
  padding: 20px;
  height: 15%;
  display: flex;
  align-items: center;
}

h1{
  font-size: 2.5rem;
}
  

/* Main */

main{
  display: flex;
  background-color: var(--main-bg);
  color: var(--main-text);
  height: 85%;
}

.sidebar{
  background-color: var(--sidebar-bg);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4vh 2vw;
  gap: 5vh;
}

.sidebar .sections{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar .sections button{
  background-color: var(--button-bg);
  font-size: 1.1rem;
  color: inherit;
  border: 2px solid transparent;
  transition: 0.4s;
  outline: none;
  border-radius: var(--border-radius);
  padding: 3px;
  text-align: left;
  
}

.sidebar .sections button:hover{
  background-color: var(--sidebar-hover);
  border:2px solid var(--sidebar-border-hover);
}

.sidebar .sections button.active{
  background-color: var(--sidebar-border-hover);
  color: var(--header-text);
}

.sidebar .projects{
  display: flex;
  flex-direction: column;
}

.sidebar .projects-header{
  display: flex;
  align-items: center;
  
}

.sidebar .projects-header p{
  font-size: 1.3rem;
}

.sidebar .projects-header button{
  font-size: 1.7rem;
  border-radius: var(--border-radius);
  margin-left: auto;
}

.sidebar .projects-container{
  border-top: 2px solid var(--main-text);
  border-bottom: 2px solid var(--main-text);
  padding: 2vh 0px;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  overflow: auto;
}

.projects-container .project{
  background-color: var(--button-bg);
  color: inherit;
  border: 2px solid transparent;
  transition: 0.4s;
  border-radius: var(--border-radius);
  padding: 3px;
  text-align: left;
  display: flex;
  gap: 5px;
  cursor: pointer;
}

.projects-container .project:hover{
  background-color: var(--sidebar-hover);
  border:2px solid var(--sidebar-border-hover);
}

.projects-container .project.active{
  background-color: var(--sidebar-border-hover);
  color: var(--header-text);
}

.project .title-of-project{
  margin-right:auto;
  font-size: 1.1rem;
}
.project .project-button{
  height: 20px;
  aspect-ratio: 1/1;
}

.main-content{
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 2vh 4vw;
  gap: 4vh;
}

.main-content h2{
  text-align: center;
  font-size: 2rem;
}

.main-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.main-wrapper .header-wrapper{
  display: flex;
  width: 100%;

}


.header-wrapper .header-p{
  align-self: flex-start;
  margin-right: auto;
  font-size: 1.5rem;
  --counter-value:"";

}

.header-wrapper .header-p::after{
  content: var(--counter-value);
  position: relative;
  left:2px;
}

.header-wrapper > button{
  font-size: 1.7rem;
}


.tasks{
  border-top: 2px solid var(--main-text);
  width: 100%;
  padding: 2vh 1vw;
  display: flex;
  flex-direction: column;
}

.task{
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px;
  transition: 0.4s;
  border-radius: var(--border-radius);
}

.task:hover{
  background-color: var(--main-hover);
}

.title{
  margin-right: auto;
}

.task img{
  max-width: 20px;
  max-height: 20px;
  aspect-ratio: 1/1;
}


dialog{
  margin: auto;
  border:none;
  border-radius: var(--border-radius);
}

.dialog-container{
  display: flex;
  flex-direction: column;
  
}

dialog .header{
  display: flex;
  align-items: center;
  padding: 20px;
  padding-bottom: 10px;
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  background-color: var(--main-bg);
  color: #353333;
}

dialog .header h3{
  margin-right: auto;
  font-size: 1.5rem;
}

dialog .header .close{
  font-size: 2rem;
  align-self: flex-start;
}


form{
  padding: 20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
input, textarea, select{
  border-radius: var(--border-radius);
  border: 2px ridge var(--header-bg);
  padding: 4px;
  transition: 0.4s;
}

 input:hover, textarea:hover, select:hover{
  background-color: var(--input-hover);
}
input:focus, textarea:focus, select:focus{
  background-color: var(--input-focus);
}

#task-dialog ul{
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

#task-dialog li{
  display: flex;
  flex-direction: column;
}

#project-dialog ul{
  display: flex;
  flex-wrap: wrap;
  
}

#project-dialog li{
  display: flex;
}
#project-dialog .project-title{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

#project-dialog .project-title input{
  width: 100%;
}

input[type="radio"]{
  display: none;
}

.radio-label{
  border: 2px solid var(--sidebar-border-hover);
  color: rgb(6, 6, 105);
  border-radius: var(--border-radius);
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 1.7rem;
  transition: 0.3s;
}

.radio-label:hover{
  border: 2px solid rgb(6, 6, 105);
}

.radio-label.active{
  border: 2px solid rgb(6, 6, 105);
}

.dialog-buttons{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.dialog-buttons button{
  padding: 10px;
  border: 2px solid var(--main-bg);
  border-radius: var(--border-radius);
  transition: 0.4s;
  font-weight: 700;
}

button.submit{
  color: var(--sidebar-border-hover);
  
}

button.submit:hover{
  background-color: var(--sidebar-border-hover);
  color: var(--main-text);
}

button.cancel{
  color: rgb(248, 163, 163);
}

button.cancel:hover{
  background-color: rgb(245, 139, 139);
  color: var(--main-text);
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Css reset */\n*, *::before, *::after {\n    box-sizing: border-box;\n   }\n   \n   * {\n    margin: 0;\n    padding: 0;\n    font-family: \"Varela Round\", 'Courier New', Courier, monospace;\n    /* border: 1px solid red; */\n   }\n   \n   body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    /* border: 1px solid red; */\n   }\n   \n   img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n   }\n   \n   input, button, textarea, select {\n    font: inherit;\n   }\n   \n   p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n   }\n\n   button, a{\n     cursor: pointer;\n     }\n    button{\n      background-color: transparent;\n      color: inherit;\n      outline: none;\n      border: none;\n      padding: 0px;\n    }\n\n   a{\n       text-decoration: none;\n   }\n\n   fieldset{\n    border: none;\n   }\n   ul{\n    list-style: none;\n   }\n \n   \n/* Variables */\n\n:root {\n    --main-text: #2F4F4F;\n    --main-bg: #C0C0C0;\n    --main-hover:#b8b4b4;\n    --header-bg: #918f8f;\n    --header-text: #fff;\n    --sidebar-bg: #87CEEB;\n    --sidebar-hover:#b9dfe4;\n    --sidebar-border-hover: #00b3bb;\n    --button-bg:#b2def0;\n    --border-radius: 8px;\n    --input-hover:#e0dddd;\n    --input-focus:#d4d2d2;\n  }\n\n  /* Footer */\n\n\n  html {\n    /* footer support */\n    position: relative;\n    min-height: 100%;\n  }\n  \n  \n  \n  \n  body {\n  /* footer support */\n    margin-bottom: 48px;\n  }\n  \n  \n  .footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-size: 18px;\n  }\n  \n  \n  .fa-github {\n    color: white;\n    font-size: 22px;\n    transition: transform 0.3s ease-in-out;\n  }\n  \n  \n  .fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n  }\n\n/* Styling */\n\n  body{\n    height: calc(100vh - 48px);\n    width: 100vw;\n    max-width: 100vw;\n  }\n  \n  .content{\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    max-width: 100vw;\n    height: calc(100vh - 48px);\n    /* border: 1px solid red; */\n  }\n\n\n/* Header */\n\nheader{\n  background-color: var(--header-bg);\n  color: var(--header-text);\n  padding: 20px;\n  height: 15%;\n  display: flex;\n  align-items: center;\n}\n\nh1{\n  font-size: 2.5rem;\n}\n  \n\n/* Main */\n\nmain{\n  display: flex;\n  background-color: var(--main-bg);\n  color: var(--main-text);\n  height: 85%;\n}\n\n.sidebar{\n  background-color: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 4vh 2vw;\n  gap: 5vh;\n}\n\n.sidebar .sections{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar .sections button{\n  background-color: var(--button-bg);\n  font-size: 1.1rem;\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  outline: none;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  \n}\n\n.sidebar .sections button:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.sidebar .sections button.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.sidebar .projects{\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar .projects-header{\n  display: flex;\n  align-items: center;\n  \n}\n\n.sidebar .projects-header p{\n  font-size: 1.3rem;\n}\n\n.sidebar .projects-header button{\n  font-size: 1.7rem;\n  border-radius: var(--border-radius);\n  margin-left: auto;\n}\n\n.sidebar .projects-container{\n  border-top: 2px solid var(--main-text);\n  border-bottom: 2px solid var(--main-text);\n  padding: 2vh 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  overflow: auto;\n}\n\n.projects-container .project{\n  background-color: var(--button-bg);\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  display: flex;\n  gap: 5px;\n  cursor: pointer;\n}\n\n.projects-container .project:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.projects-container .project.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.project .title-of-project{\n  margin-right:auto;\n  font-size: 1.1rem;\n}\n.project .project-button{\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.main-content{\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n  padding: 2vh 4vw;\n  gap: 4vh;\n}\n\n.main-content h2{\n  text-align: center;\n  font-size: 2rem;\n}\n\n.main-wrapper{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.main-wrapper .header-wrapper{\n  display: flex;\n  width: 100%;\n\n}\n\n\n.header-wrapper .header-p{\n  align-self: flex-start;\n  margin-right: auto;\n  font-size: 1.5rem;\n  --counter-value:\"\";\n\n}\n\n.header-wrapper .header-p::after{\n  content: var(--counter-value);\n  position: relative;\n  left:2px;\n}\n\n.header-wrapper > button{\n  font-size: 1.7rem;\n}\n\n\n.tasks{\n  border-top: 2px solid var(--main-text);\n  width: 100%;\n  padding: 2vh 1vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.task{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n}\n\n.task:hover{\n  background-color: var(--main-hover);\n}\n\n.title{\n  margin-right: auto;\n}\n\n.task img{\n  max-width: 20px;\n  max-height: 20px;\n  aspect-ratio: 1/1;\n}\n\n\ndialog{\n  margin: auto;\n  border:none;\n  border-radius: var(--border-radius);\n}\n\n.dialog-container{\n  display: flex;\n  flex-direction: column;\n  \n}\n\ndialog .header{\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  padding-bottom: 10px;\n  border-top-right-radius: var(--border-radius);\n  border-top-left-radius: var(--border-radius);\n  background-color: var(--main-bg);\n  color: #353333;\n}\n\ndialog .header h3{\n  margin-right: auto;\n  font-size: 1.5rem;\n}\n\ndialog .header .close{\n  font-size: 2rem;\n  align-self: flex-start;\n}\n\n\nform{\n  padding: 20px;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\ninput, textarea, select{\n  border-radius: var(--border-radius);\n  border: 2px ridge var(--header-bg);\n  padding: 4px;\n  transition: 0.4s;\n}\n\n input:hover, textarea:hover, select:hover{\n  background-color: var(--input-hover);\n}\ninput:focus, textarea:focus, select:focus{\n  background-color: var(--input-focus);\n}\n\n#task-dialog ul{\n  display: flex;\n  flex-direction: column;\n  gap: 3vh;\n}\n\n#task-dialog li{\n  display: flex;\n  flex-direction: column;\n}\n\n#project-dialog ul{\n  display: flex;\n  flex-wrap: wrap;\n  \n}\n\n#project-dialog li{\n  display: flex;\n}\n#project-dialog .project-title{\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n#project-dialog .project-title input{\n  width: 100%;\n}\n\ninput[type=\"radio\"]{\n  display: none;\n}\n\n.radio-label{\n  border: 2px solid var(--sidebar-border-hover);\n  color: rgb(6, 6, 105);\n  border-radius: var(--border-radius);\n  width: 45px;\n  height: 45px;\n  text-align: center;\n  font-size: 1.7rem;\n  transition: 0.3s;\n}\n\n.radio-label:hover{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.radio-label.active{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.dialog-buttons{\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.dialog-buttons button{\n  padding: 10px;\n  border: 2px solid var(--main-bg);\n  border-radius: var(--border-radius);\n  transition: 0.4s;\n  font-weight: 700;\n}\n\nbutton.submit{\n  color: var(--sidebar-border-hover);\n  \n}\n\nbutton.submit:hover{\n  background-color: var(--sidebar-border-hover);\n  color: var(--main-text);\n}\n\nbutton.cancel{\n  color: rgb(248, 163, 163);\n}\n\nbutton.cancel:hover{\n  background-color: rgb(245, 139, 139);\n  color: var(--main-text);\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dom: () => (/* binding */ dom)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _images_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/circle.svg */ "./src/images/circle.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_info_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/info.svg */ "./src/images/info.svg");







let dom = {
    createMainContent: function(event){
        const mainContainer = document.querySelector('.main-content');

        while(mainContainer.firstChild){
            mainContainer.removeChild(mainContainer.firstChild)
        }
    
        const h2 = document.createElement('h2');
        h2.textContent = event.target.textContent;
    
        const mainWrapper = document.createElement('div');
        mainWrapper.className = 'main-wrapper';
    
        const headerWrapper = document.createElement('div');
        headerWrapper.className = 'header-wrapper';
    
        const headerText = document.createElement('p');
        headerText.textContent = 'Tasks';
        headerText.className = "header-p"
        headerWrapper.appendChild(headerText);
    
        const arrayNames = ["all","today", "week", "important", "completed", "todo"]
        let isInArray = arrayNames.includes(event.target.id);
        if(isInArray == false){
            const addButton = document.createElement('button');
            addButton.id = 'add-task';
            addButton.textContent = '⊕';
            headerWrapper.appendChild(addButton);
        }
    
        const divTasks = document.createElement("div")
        divTasks.className = "tasks"
  
    
        mainContainer.appendChild(h2);
        mainContainer.appendChild(mainWrapper);
        mainWrapper.appendChild(headerWrapper);
        mainWrapper.appendChild(divTasks)
        mainContainer.appendChild(mainWrapper)
    },


    createDomTask: function(task){
        const taskInfo = task.getInfo()
        const mainDiv = document.createElement('div')
        mainDiv.className = "task"
    
        const buttonComplete = document.createElement("button")
        const imgCircle = new Image()
        imgCircle.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_1__
        buttonComplete.appendChild(imgCircle)
        buttonComplete.addEventListener("click", this.toggleState.bind(this));
    
        const pTitle = document.createElement("p")
        pTitle.className = "title"
        pTitle.textContent = taskInfo.title
    
        const pDate = document.createElement("p")
        pDate.className = "date"
        pDate.textContent = taskInfo.dueDate
    
        const buttonEdit = document.createElement("button")
        buttonEdit.className = "left edit"
        const imgEdit = new Image()
        imgEdit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__
        buttonEdit.appendChild(imgEdit)
        buttonEdit.addEventListener("click", this.editTask.bind(this))
    
        const buttonTrash = document.createElement("button")
        buttonTrash.className = "left trash"
        const imgTrash = new Image()
        imgTrash.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__
        buttonTrash.appendChild(imgTrash)
        buttonTrash.addEventListener("click", this.removeTask.bind(this))
    
        const buttonInfo = document.createElement("button")
        buttonInfo.className = "left info"
        const imgInfo = new Image()
        imgInfo.src = _images_info_svg__WEBPACK_IMPORTED_MODULE_4__
        buttonInfo.appendChild(imgInfo)
        buttonInfo.addEventListener("click", this.showInfo.bind(this))
    
        mainDiv.appendChild(buttonComplete)
        mainDiv.appendChild(pTitle)
        mainDiv.appendChild(pDate)
        mainDiv.appendChild(buttonEdit)
        mainDiv.appendChild(buttonTrash)
        mainDiv.appendChild(buttonInfo)
        return mainDiv
    
    },
    editTask: function(){},
    removeTask: function(){},
    showInfo: function(){},
    toggleState: function(){},
    displayProjectInMain: function(event){
        let counter = 0
        const projectButtons= document.querySelectorAll(".project")
        projectButtons.forEach((button) => {
            button.classList.remove("active")
        })
        dom.createMainContent(event)
        const divTasks = document.querySelector(".tasks")
        Object.values(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects[event.target.textContent].tasks).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
        event.target.parentElement.classList.add("active")
        const textHeader = document.querySelector(".header-p");
        textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')
    },
    editProject: function(){},
    deleteProject: function(){},
    addEventListeners: function(){
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.addEventListener("click", dom.displayCategory)
        })
        const buttonAll = document.querySelector("#all")
        buttonAll.click();
    },
    displayCategory: function(event){
        let counter = 0
        let tasksToDisplay;
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.classList.remove("active")
        })

        dom.createMainContent(event)
        const divTasks = document.querySelector(".tasks")
        if(event.target.id === "all"){
            tasksToDisplay = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.getAllTasks()
        }
        else if(event.target.id === "today"){
            tasksToDisplay = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.sortByDate().dueToday
        }
        else if(event.target.id === "week"){
            tasksToDisplay = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.sortByDate().dueThisWeek
        }
        else if(event.target.id === "important"){
            tasksToDisplay = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.getImportantTasks()
        }
        else if(event.target.id === "todo"){
            tasksToDisplay = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.sortByState().todo
        }
        else if(event.target.id === "completed"){
            tasksToDisplay = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.sortByState().done
        }
        Object.values(tasksToDisplay).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
        event.target.classList.add("active")
        const textHeader = document.querySelector(".header-p");
        textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')
    },
    createDomProject: function(project){
        const divProject = document.createElement("div")
        divProject.classList.add("project")

        const pTitle = document.createElement("p")
        pTitle.classList.add("title-of-project")
        pTitle.textContent = project.getProjectInfo().projectTitle
        pTitle.addEventListener("click", this.displayProjectInMain.bind(this))

        const buttonEdit = document.createElement("button")
        buttonEdit.className = "project-button"
        const imgEdit = new Image()
        imgEdit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__
        buttonEdit.appendChild(imgEdit)
        buttonEdit.addEventListener("click", this.editProject.bind(this))

        const buttonTrash = document.createElement("button")
        buttonTrash.className = "project-button"
        const imgTrash = new Image()
        imgTrash.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__
        buttonTrash.appendChild(imgTrash)
        buttonTrash.addEventListener("click", this.deleteProject.bind(this))

        divProject.appendChild(pTitle)
        divProject.appendChild(buttonEdit)
        divProject.appendChild(buttonTrash)

        return divProject
    },
    showProjectsInSidebar: function(){
        const projectsContainer = document.querySelector(".projects-container")
        while(projectsContainer.firstChild){
            projectsContainer.removeChild(projectsContainer.firstChild)
        }
        Object.values(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects).forEach((project) => {
            projectsContainer.appendChild(this.createDomProject(project))
        })
    }
}






/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   theGodContainerOfTheUniverse: () => (/* binding */ theGodContainerOfTheUniverse)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isWithinInterval.mjs");



function createTask(initTitle, initDescription, initDueDate, initPriority){
    let title = initTitle
    let description = initDescription
    let dueDate = initDueDate
    let priority = initPriority
    let state = "to-do"
 

 
    const changeTitle = (newTitle) => {
        title = newTitle
    }
 
 
    const changeDescription = (newDescription) => {
        description = newDescription
    }
 
 
    const changeDueDate = (newDueDate) => {
        dueDate = newDueDate
    }
 
 
    const changePriority = (newPriority) => {
        priority = newPriority
    }
 
 
    const changeState = () => {
        if(state === "to-do"){
            state = "done"
        }
        else{
            state = "to-do"
        }
    }
 
 
    const getInfo = () => {
        return {title, description, dueDate, priority, state};
    }
 
 
    return {title, description,dueDate, priority, state, changeTitle, changeDescription, changeDueDate, changePriority, changeState, getInfo}
 };
 
 
 
 
 
 
 
 
 
 
 function createProject(initProjectTitle, initProjectSymbol){
    let projectTitle = initProjectTitle
    let projectSymbol = initProjectSymbol
    let tasks = {}

 
    const addTask = (task) => {
        let taskTitle = task.getInfo().title
        tasks[taskTitle] = task
    }
 
 
    const deleteTask = (task) => {
        let taskTitle = task.getInfo().title
        delete tasks[taskTitle]
    }
 
 
    const modifyTask = (task, newTitle, newDescription, newDueDate, newPriority) => {
        const currentTitle = task.getInfo().title
        const newTask = tasks[currentTitle];
        newTask.changeTitle(newTitle);
        newTask.changeDescription(newDescription);
        newTask.changeDueDate(newDueDate);
        newTask.changePriority(newPriority);
        delete tasks[currentTitle];
        tasks[newTitle] = newTask;
    }
 
 
    const getTaskInfo = (task) => {
        let taskTitle = task.getInfo().title
        return tasks[taskTitle].getInfo()
    }
 
 
    const changeProjectTitle = (newTitle) => {
        projectTitle = newTitle
    }
 
 
    const changeProjectSymbol = (newSymbol) => {
        projectSymbol = newSymbol
    }
 
 
    const getProjectInfo = () => {
        return {projectTitle, projectSymbol}
    }
 
 
   
    return {tasks, addTask, deleteTask, modifyTask, getTaskInfo, changeProjectTitle, changeProjectSymbol, getProjectInfo}
 }
 
 
 
 
 
 
 let theGodContainerOfTheUniverse = {
    projects: {},
   
    addProject: function(project){
        this.projects[project.getProjectInfo().projectTitle] = project
    },
 
 
    removeProject: function(project){
        const projectTitle = project.getProjectInfo().projectTitle
        delete this.projects[projectTitle];
    },
 
 
    modifyProject: function(project, newTitle, newSymbol){
        const currentTitle = project.getProjectInfo().projectTitle
        const newProject = this.projects[currentTitle]
        newProject.changeProjectTitle(newTitle)
        newProject.changeProjectSymbol(newSymbol)
        delete this.projects[currentTitle]
        this.projects[newTitle] = newProject
    },
 
 
    addTaskToProject: function(project, task){
        const projectTitle = project.getProjectInfo().projectTitle
        this.projects[projectTitle].addTask(task)
    },
 
 
    removeTaskFromProject: function(project, task){
        const projectTitle = project.getProjectInfo().projectTitle
        this.projects[projectTitle].deleteTask(task)
    },
 
 
    getTaskInfoFromProject: function(project, task){
        const projectTitle = project.getProjectInfo().projectTitle
        return this.projects[projectTitle].getTaskInfo(task)
    },
 
 
    modifyTaskFromProject: function(project, task, newTitle, newDescription, newDueDate, newPriority){
        const projectTitle = project.getProjectInfo().projectTitle
        this.projects[projectTitle].modifyTask(task ,newTitle, newDescription, newDueDate, newPriority)
    },

    getAllTasks: function(){
        let allTasks = {}
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                allTasks[task.getInfo().title] = task
            });
        });
        return allTasks
    },
 
 
    getImportantTasks: function(){
        let important = {};
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                if(task.getInfo().priority === "important"){
                    important[task.getInfo().title] = task;
                }
            });
        });
        return important;
    },


    sortByState: function(){
        let done = {};
        let todo = {};
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                if(task.getInfo().state === "to-do"){
                    todo[task.getInfo().title] = task;
                } else {
                    done[task.getInfo().title] = task;
                }
            });
        });
        return {done, todo};
    },
    


    sortByDate: function() {
        let dueToday = {};
        let dueThisWeek = {};
        const today = new Date();
        const endOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.addDays)(today, 7);
    
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                const taskDueDate = new Date(task.getInfo().dueDate);
    
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isToday)(taskDueDate)) {
                    dueToday[task.getInfo().title] = task;
                } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isWithinInterval)(taskDueDate, { start: today, end: endOfWeek })) {
                    dueThisWeek[task.getInfo().title] = task;
                }
            });
        });
    
        return { dueToday, dueThisWeek };
    },

 }






/***/ }),

/***/ "./src/images/circle.svg":
/*!*******************************!*\
  !*** ./src/images/circle.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c78c233e4ffebcfc1dd.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "212c8821d736f8b11fbe.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cca96bbf4bff6375bc6.svg";

/***/ }),

/***/ "./src/images/info.svg":
/*!*****************************!*\
  !*** ./src/images/info.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44ceda953cc7cba519cd.svg";

/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isWithinInterval.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isWithinInterval.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isWithinInterval: () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param interval - The interval to check
 *
 * @returns The date is within the interval
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date })
 * // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end })
 * // => true
 */
function isWithinInterval(date, interval) {
  const time = +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const [startTime, endTime] = [
    +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.start),
    +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.end),
  ].sort((a, b) => a - b);

  return time >= startTime && time <= endTime;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isWithinInterval);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");







  // Creating Tasks
const task1 = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createTask)("Task 1", "Description 1", "2022-01-01", "High");
const task2 = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createTask)("Task 2", "Description 2", "2022-02-02", "Medium");

// Testing Task Creation
console.assert(task1.getInfo().title === "Task 1", "Task 1 creation failed");
console.assert(task2.getInfo().title === "Task 2", "Task 2 creation failed");

// Creating Projects
const project1 = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project 1", "#");
const project2 = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project 2", "$");

// Testing Project Creation
console.assert(project1.getProjectInfo().projectTitle === "Project 1", "Project 1 creation failed");
console.assert(project2.getProjectInfo().projectTitle === "Project 2", "Project 2 creation failed");

// Adding Tasks to Projects
project1.addTask(task1);
project2.addTask(task2);

// Testing Adding Tasks to Projects
console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 failed");
console.assert(project2.tasks[task2.getInfo().title] === task2, "Adding task2 to project2 failed");

// Modifying Tasks within Projects
project1.modifyTask(task1, "Task 1 Modified", "Updated Description 1", "2022-03-03", "Low");
console.assert(project1.tasks["Task 1 Modified"] !== undefined, "Modifying task1 within project1 failed");


// Deleting Tasks from Projects
project1.deleteTask(task1);
console.assert(project1.tasks["Task 1 Modified"] === undefined, "Deleting task1 from project1 failed");


// Adding a Project to theGodContainerOfTheUniverse
_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.addProject(project1);
console.assert(_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.projects["Project 1"] === project1, "Adding project1 to theGodContainerOfTheUniverse failed");

// Modifying a Project in theGodContainerOfTheUniverse
_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.modifyProject(project1, "Project 1 Updated", "");
console.assert(_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.projects["Project 1 Updated"].getProjectInfo().projectSymbol === "", "Modifying project1 in theGodContainerOfTheUniverse failed");

// Removing a Project from theGodContainerOfTheUniverse
_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.removeProject(project1);
console.assert(_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.projects["Project 1 Updated"] === undefined, "Removing project1 from theGodContainerOfTheUniverse failed");

// Re-adding the Project and Task for Further Testing
_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.addProject(project1);

// Adding a Task to a Project through theGodContainerOfTheUniverse
_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.addTaskToProject(project1, task1);
console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 through theGodContainerOfTheUniverse failed");


// Removing a Task from a Project through theGodContainerOfTheUniverse
_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.removeTaskFromProject(project1, task1);
console.assert(project1.tasks[task1.getInfo().title] === undefined, "Removing task1 from project1 through theGodContainerOfTheUniverse failed");

// // Getting Task Info from a Project through

_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.addTaskToProject(project1, task1); // Re-add task for testing
const taskInfo = _logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.getTaskInfoFromProject(project1, task1);
console.assert(taskInfo && taskInfo.title === task1.getInfo().title, "Getting task info from project1 through theGodContainerOfTheUniverse failed");



_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.modifyTaskFromProject(project1, task1,"Task 1 Modified", "Updated Description 1", "2024-01-20", "important")

let task3 = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createTask)("Task 3", "Description 3", "2024-01-17", "important")
task3.changeState()
_logic__WEBPACK_IMPORTED_MODULE_1__.theGodContainerOfTheUniverse.addTaskToProject(project1, task3)
console.log(task1.getInfo().dueDate)



_dom__WEBPACK_IMPORTED_MODULE_2__.dom.addEventListeners()
_dom__WEBPACK_IMPORTED_MODULE_2__.dom.showProjectsInSidebar()

// const button = document.querySelector("#all")
// button.addEventListener("click", () => {
//     const mainContainer = document.querySelector('.main-content');

//     while(mainContainer.firstChild){
//     mainContainer.removeChild()
//     }
// })




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU8scUZBQXFGLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxLQUFLLFlBQVksYUFBYSxhQUFhLFVBQVUsS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVks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QUFVO0FBQ3RCO0FBQ0EsZ0VBQTRCO0FBQzVCOzs7O0FBSUEscUNBQUc7QUFDSCxxQ0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNXaXRoaW5JbnRlcnZhbC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENzcyByZXNldCAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIH1cbiAgIFxuICAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCIsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gICB9XG4gICBcbiAgIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgfVxuICAgXG4gICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgfVxuICAgXG4gICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xuICAgfVxuICAgXG4gICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgfVxuXG4gICBidXR0b24sIGF7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgfVxuICAgIGJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgYXtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICB9XG5cbiAgIGZpZWxkc2V0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgIH1cbiAgIHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICB9XG4gXG4gICBcbi8qIFZhcmlhYmxlcyAqL1xuXG46cm9vdCB7XG4gICAgLS1tYWluLXRleHQ6ICMyRjRGNEY7XG4gICAgLS1tYWluLWJnOiAjQzBDMEMwO1xuICAgIC0tbWFpbi1ob3ZlcjojYjhiNGI0O1xuICAgIC0taGVhZGVyLWJnOiAjOTE4ZjhmO1xuICAgIC0taGVhZGVyLXRleHQ6ICNmZmY7XG4gICAgLS1zaWRlYmFyLWJnOiAjODdDRUVCO1xuICAgIC0tc2lkZWJhci1ob3ZlcjojYjlkZmU0O1xuICAgIC0tc2lkZWJhci1ib3JkZXItaG92ZXI6ICMwMGIzYmI7XG4gICAgLS1idXR0b24tYmc6I2IyZGVmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWlucHV0LWhvdmVyOiNlMGRkZGQ7XG4gICAgLS1pbnB1dC1mb2N1czojZDRkMmQyO1xuICB9XG5cbiAgLyogRm9vdGVyICovXG5cblxuICBodG1sIHtcbiAgICAvKiBmb290ZXIgc3VwcG9ydCAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICBib2R5IHtcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG4gIFxuICBcbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICBcbiAgLmZhLWdpdGh1YiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgXG4gIC5mYS1naXRodWI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcbiAgfVxuXG4vKiBTdHlsaW5nICovXG5cbiAgYm9keXtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgfVxuICBcbiAgLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgfVxuXG5cbi8qIEhlYWRlciAqL1xuXG5oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMXtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG4gIFxuXG4vKiBNYWluICovXG5cbm1haW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcbiAgaGVpZ2h0OiA4NSU7XG59XG5cbi5zaWRlYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogNHZoIDJ2dztcbiAgZ2FwOiA1dmg7XG59XG5cbi5zaWRlYmFyIC5zZWN0aW9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBcbn1cblxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xufVxuXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9uLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xufVxuXG4uc2lkZWJhciAucHJvamVjdHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGJ1dHRvbntcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnNpZGViYXIgLnByb2plY3RzLWNvbnRhaW5lcntcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xuICBwYWRkaW5nOiAydmggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDF2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3R7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0LmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xufVxuXG4ucHJvamVjdCAudGl0bGUtb2YtcHJvamVjdHtcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnByb2plY3QgLnByb2plY3QtYnV0dG9ue1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICBmbGV4OiA0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMnZoIDR2dztcbiAgZ2FwOiA0dmg7XG59XG5cbi5tYWluLWNvbnRlbnQgaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubWFpbi13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4td3JhcHBlciAuaGVhZGVyLXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG5cblxuLmhlYWRlci13cmFwcGVyIC5oZWFkZXItcHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgLS1jb3VudGVyLXZhbHVlOlwiXCI7XG5cbn1cblxuLmhlYWRlci13cmFwcGVyIC5oZWFkZXItcDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IHZhcigtLWNvdW50ZXItdmFsdWUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6MnB4O1xufVxuXG4uaGVhZGVyLXdyYXBwZXIgPiBidXR0b257XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG5cbi50YXNrc3tcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAydmggMXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFza3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi50YXNrOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhvdmVyKTtcbn1cblxuLnRpdGxle1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50YXNrIGltZ3tcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cblxuXG5kaWFsb2d7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOm5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG59XG5cbmRpYWxvZyAuaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XG4gIGNvbG9yOiAjMzUzMzMzO1xufVxuXG5kaWFsb2cgLmhlYWRlciBoM3tcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuZGlhbG9nIC5oZWFkZXIgLmNsb3Nle1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cblxuZm9ybXtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0e1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyOiAycHggcmlkZ2UgdmFyKC0taGVhZGVyLWJnKTtcbiAgcGFkZGluZzogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4gaW5wdXQ6aG92ZXIsIHRleHRhcmVhOmhvdmVyLCBzZWxlY3Q6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWhvdmVyKTtcbn1cbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG59XG5cbiN0YXNrLWRpYWxvZyB1bHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzdmg7XG59XG5cbiN0YXNrLWRpYWxvZyBsaXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3Byb2plY3QtZGlhbG9nIHVse1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIFxufVxuXG4jcHJvamVjdC1kaWFsb2cgbGl7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jcHJvamVjdC1kaWFsb2cgLnByb2plY3QtdGl0bGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNwcm9qZWN0LWRpYWxvZyAucHJvamVjdC10aXRsZSBpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJhZGlvLWxhYmVse1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XG4gIGNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5yYWRpby1sYWJlbDpob3ZlcntcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDYsIDYsIDEwNSk7XG59XG5cbi5yYWRpby1sYWJlbC5hY3RpdmV7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2LCA2LCAxMDUpO1xufVxuXG4uZGlhbG9nLWJ1dHRvbnN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbn1cblxuLmRpYWxvZy1idXR0b25zIGJ1dHRvbntcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b24uc3VibWl0e1xuICBjb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBcbn1cblxuYnV0dG9uLnN1Ym1pdDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcbn1cblxuYnV0dG9uLmNhbmNlbHtcbiAgY29sb3I6IHJnYigyNDgsIDE2MywgMTYzKTtcbn1cblxuYnV0dG9uLmNhbmNlbDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTM5LCAxMzkpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0lBQ0ksc0JBQXNCO0dBQ3ZCOztHQUVBO0lBQ0MsU0FBUztJQUNULFVBQVU7SUFDViw4REFBOEQ7SUFDOUQsMkJBQTJCO0dBQzVCOztHQUVBO0lBQ0MsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQywyQkFBMkI7R0FDNUI7O0dBRUE7SUFDQyxjQUFjO0lBQ2QsZUFBZTtHQUNoQjs7R0FFQTtJQUNDLGFBQWE7R0FDZDs7R0FFQTtJQUNDLHlCQUF5QjtHQUMxQjs7R0FFQTtLQUNFLGVBQWU7S0FDZjtJQUNEO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7TUFDZCxhQUFhO01BQ2IsWUFBWTtNQUNaLFlBQVk7SUFDZDs7R0FFRDtPQUNJLHFCQUFxQjtHQUN6Qjs7R0FFQTtJQUNDLFlBQVk7R0FDYjtHQUNBO0lBQ0MsZ0JBQWdC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QUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7O0FBRXBDOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3NzIHJlc2V0ICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgfVxcbiAgIFxcbiAgICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVmFyZWxhIFJvdW5kXFxcIiwgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgfVxcbiAgIFxcbiAgIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgIH1cXG4gICBcXG4gICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgfVxcbiAgIFxcbiAgIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgIH1cXG4gICBcXG4gICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICB9XFxuXFxuICAgYnV0dG9uLCBhe1xcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgfVxcbiAgICBidXR0b257XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuXFxuICAgYXtcXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgIH1cXG5cXG4gICBmaWVsZHNldHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgIH1cXG4gICB1bHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICB9XFxuIFxcbiAgIFxcbi8qIFZhcmlhYmxlcyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLXRleHQ6ICMyRjRGNEY7XFxuICAgIC0tbWFpbi1iZzogI0MwQzBDMDtcXG4gICAgLS1tYWluLWhvdmVyOiNiOGI0YjQ7XFxuICAgIC0taGVhZGVyLWJnOiAjOTE4ZjhmO1xcbiAgICAtLWhlYWRlci10ZXh0OiAjZmZmO1xcbiAgICAtLXNpZGViYXItYmc6ICM4N0NFRUI7XFxuICAgIC0tc2lkZWJhci1ob3ZlcjojYjlkZmU0O1xcbiAgICAtLXNpZGViYXItYm9yZGVyLWhvdmVyOiAjMDBiM2JiO1xcbiAgICAtLWJ1dHRvbi1iZzojYjJkZWYwO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgLS1pbnB1dC1ob3ZlcjojZTBkZGRkO1xcbiAgICAtLWlucHV0LWZvY3VzOiNkNGQyZDI7XFxuICB9XFxuXFxuICAvKiBGb290ZXIgKi9cXG5cXG5cXG4gIGh0bWwge1xcbiAgICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIFxcbiAgXFxuICBcXG4gIGJvZHkge1xcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICBcXG4gIFxcbiAgLmZhLWdpdGh1YiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbiAgfVxcblxcbi8qIFN0eWxpbmcgKi9cXG5cXG4gIGJvZHl7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICB9XFxuICBcXG4gIC5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICB9XFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDF7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuICBcXG5cXG4vKiBNYWluICovXFxuXFxubWFpbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbiAgaGVpZ2h0OiA4NSU7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiA0dmggMnZ3O1xcbiAgZ2FwOiA1dmg7XFxufVxcblxcbi5zaWRlYmFyIC5zZWN0aW9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgXFxufVxcblxcbi5zaWRlYmFyIC5zZWN0aW9ucyBidXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyKTtcXG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xcbn1cXG5cXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9uLmFjdGl2ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0c3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciBwe1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgYnV0dG9ue1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMtY29udGFpbmVye1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcXG4gIHBhZGRpbmc6IDJ2aCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3R7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3Q6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyKTtcXG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0LmFjdGl2ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XFxufVxcblxcbi5wcm9qZWN0IC50aXRsZS1vZi1wcm9qZWN0e1xcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuLnByb2plY3QgLnByb2plY3QtYnV0dG9ue1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5tYWluLWNvbnRlbnR7XFxuICBmbGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAydmggNHZ3O1xcbiAgZ2FwOiA0dmg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgaDJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tYWluLXdyYXBwZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4td3JhcHBlciAuaGVhZGVyLXdyYXBwZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcblxcbi5oZWFkZXItd3JhcHBlciAuaGVhZGVyLXB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICAtLWNvdW50ZXItdmFsdWU6XFxcIlxcXCI7XFxuXFxufVxcblxcbi5oZWFkZXItd3JhcHBlciAuaGVhZGVyLXA6OmFmdGVye1xcbiAgY29udGVudDogdmFyKC0tY291bnRlci12YWx1ZSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OjJweDtcXG59XFxuXFxuLmhlYWRlci13cmFwcGVyID4gYnV0dG9ue1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcblxcbi50YXNrc3tcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAydmggMXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLnRhc2s6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhvdmVyKTtcXG59XFxuXFxuLnRpdGxle1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGFzayBpbWd7XFxuICBtYXgtd2lkdGg6IDIwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcblxcbmRpYWxvZ3tcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjpub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5kaWFsb2ctY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG59XFxuXFxuZGlhbG9nIC5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuICBjb2xvcjogIzM1MzMzMztcXG59XFxuXFxuZGlhbG9nIC5oZWFkZXIgaDN7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuZGlhbG9nIC5oZWFkZXIgLmNsb3Nle1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuXFxuZm9ybXtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyOiAycHggcmlkZ2UgdmFyKC0taGVhZGVyLWJnKTtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbiBpbnB1dDpob3ZlciwgdGV4dGFyZWE6aG92ZXIsIHNlbGVjdDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWhvdmVyKTtcXG59XFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XFxufVxcblxcbiN0YXNrLWRpYWxvZyB1bHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzdmg7XFxufVxcblxcbiN0YXNrLWRpYWxvZyBsaXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgdWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgXFxufVxcblxcbiNwcm9qZWN0LWRpYWxvZyBsaXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNwcm9qZWN0LWRpYWxvZyAucHJvamVjdC10aXRsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIC5wcm9qZWN0LXRpdGxlIGlucHV0e1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmFkaW8tbGFiZWx7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBjb2xvcjogcmdiKDYsIDYsIDEwNSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmFkaW8tbGFiZWw6aG92ZXJ7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNiwgNiwgMTA1KTtcXG59XFxuXFxuLnJhZGlvLWxhYmVsLmFjdGl2ZXtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2LCA2LCAxMDUpO1xcbn1cXG5cXG4uZGlhbG9nLWJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRpYWxvZy1idXR0b25zIGJ1dHRvbntcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWJnKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXR7XFxuICBjb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xcbiAgXFxufVxcblxcbmJ1dHRvbi5zdWJtaXQ6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcXG59XFxuXFxuYnV0dG9uLmNhbmNlbHtcXG4gIGNvbG9yOiByZ2IoMjQ4LCAxNjMsIDE2Myk7XFxufVxcblxcbmJ1dHRvbi5jYW5jZWw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMzksIDEzOSk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVRhc2ssIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IGNpcmNsZSBmcm9tIFwiLi9pbWFnZXMvY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IGVkaXQgZnJvbSBcIi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgdHJhc2hDYW4gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIlxuaW1wb3J0IGluZm8gZnJvbSBcIi4vaW1hZ2VzL2luZm8uc3ZnXCJcblxuXG5sZXQgZG9tID0ge1xuICAgIGNyZWF0ZU1haW5Db250ZW50OiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5cbiAgICAgICAgd2hpbGUobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgICAgIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5XcmFwcGVyLmNsYXNzTmFtZSA9ICdtYWluLXdyYXBwZXInO1xuICAgIFxuICAgICAgICBjb25zdCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlcldyYXBwZXIuY2xhc3NOYW1lID0gJ2hlYWRlci13cmFwcGVyJztcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgICAgIGhlYWRlclRleHQuY2xhc3NOYW1lID0gXCJoZWFkZXItcFwiXG4gICAgICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGFycmF5TmFtZXMgPSBbXCJhbGxcIixcInRvZGF5XCIsIFwid2Vla1wiLCBcImltcG9ydGFudFwiLCBcImNvbXBsZXRlZFwiLCBcInRvZG9cIl1cbiAgICAgICAgbGV0IGlzSW5BcnJheSA9IGFycmF5TmFtZXMuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LmlkKTtcbiAgICAgICAgaWYoaXNJbkFycmF5ID09IGZhbHNlKXtcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmlkID0gJ2FkZC10YXNrJztcbiAgICAgICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICfiipUnO1xuICAgICAgICAgICAgaGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXZUYXNrcy5jbGFzc05hbWUgPSBcInRhc2tzXCJcbiAgXG4gICAgXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5XcmFwcGVyKTtcbiAgICAgICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyV3JhcHBlcik7XG4gICAgICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGRpdlRhc2tzKVxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5XcmFwcGVyKVxuICAgIH0sXG5cblxuICAgIGNyZWF0ZURvbVRhc2s6IGZ1bmN0aW9uKHRhc2spe1xuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IHRhc2suZ2V0SW5mbygpXG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtYWluRGl2LmNsYXNzTmFtZSA9IFwidGFza1wiXG4gICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBjb25zdCBpbWdDaXJjbGUgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWdDaXJjbGUuc3JjID0gY2lyY2xlXG4gICAgICAgIGJ1dHRvbkNvbXBsZXRlLmFwcGVuZENoaWxkKGltZ0NpcmNsZSlcbiAgICAgICAgYnV0dG9uQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudG9nZ2xlU3RhdGUuYmluZCh0aGlzKSk7XG4gICAgXG4gICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHBUaXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCJcbiAgICAgICAgcFRpdGxlLnRleHRDb250ZW50ID0gdGFza0luZm8udGl0bGVcbiAgICBcbiAgICAgICAgY29uc3QgcERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwRGF0ZS5jbGFzc05hbWUgPSBcImRhdGVcIlxuICAgICAgICBwRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvLmR1ZURhdGVcbiAgICBcbiAgICAgICAgY29uc3QgYnV0dG9uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uRWRpdC5jbGFzc05hbWUgPSBcImxlZnQgZWRpdFwiXG4gICAgICAgIGNvbnN0IGltZ0VkaXQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWdFZGl0LnNyYyA9IGVkaXRcbiAgICAgICAgYnV0dG9uRWRpdC5hcHBlbmRDaGlsZChpbWdFZGl0KVxuICAgICAgICBidXR0b25FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmVkaXRUYXNrLmJpbmQodGhpcykpXG4gICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvblRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b25UcmFzaC5jbGFzc05hbWUgPSBcImxlZnQgdHJhc2hcIlxuICAgICAgICBjb25zdCBpbWdUcmFzaCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZ1RyYXNoLnNyYyA9IHRyYXNoQ2FuXG4gICAgICAgIGJ1dHRvblRyYXNoLmFwcGVuZENoaWxkKGltZ1RyYXNoKVxuICAgICAgICBidXR0b25UcmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZW1vdmVUYXNrLmJpbmQodGhpcykpXG4gICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbkluZm8uY2xhc3NOYW1lID0gXCJsZWZ0IGluZm9cIlxuICAgICAgICBjb25zdCBpbWdJbmZvID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nSW5mby5zcmMgPSBpbmZvXG4gICAgICAgIGJ1dHRvbkluZm8uYXBwZW5kQ2hpbGQoaW1nSW5mbylcbiAgICAgICAgYnV0dG9uSW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93SW5mby5iaW5kKHRoaXMpKVxuICAgIFxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbXBsZXRlKVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHBUaXRsZSlcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwRGF0ZSlcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25FZGl0KVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvblRyYXNoKVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkluZm8pXG4gICAgICAgIHJldHVybiBtYWluRGl2XG4gICAgXG4gICAgfSxcbiAgICBlZGl0VGFzazogZnVuY3Rpb24oKXt9LFxuICAgIHJlbW92ZVRhc2s6IGZ1bmN0aW9uKCl7fSxcbiAgICBzaG93SW5mbzogZnVuY3Rpb24oKXt9LFxuICAgIHRvZ2dsZVN0YXRlOiBmdW5jdGlvbigpe30sXG4gICAgZGlzcGxheVByb2plY3RJbk1haW46IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIilcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBkb20uY3JlYXRlTWFpbkNvbnRlbnQoZXZlbnQpXG4gICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxuICAgICAgICBPYmplY3QudmFsdWVzKHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHNbZXZlbnQudGFyZ2V0LnRleHRDb250ZW50XS50YXNrcykuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGl2VGFza3MuYXBwZW5kQ2hpbGQoZG9tLmNyZWF0ZURvbVRhc2sodGFzaykpXG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItcFwiKTtcbiAgICAgICAgdGV4dEhlYWRlci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb3VudGVyLXZhbHVlJywgJ1wiKCcgKyBjb3VudGVyICsgJylcIicpXG4gICAgfSxcbiAgICBlZGl0UHJvamVjdDogZnVuY3Rpb24oKXt9LFxuICAgIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uKCl7fSxcbiAgICBhZGRFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeS1idXR0b25cIilcbiAgICAgICAgY2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uZGlzcGxheUNhdGVnb3J5KVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBidXR0b25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKVxuICAgICAgICBidXR0b25BbGwuY2xpY2soKTtcbiAgICB9LFxuICAgIGRpc3BsYXlDYXRlZ29yeTogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgbGV0IHRhc2tzVG9EaXNwbGF5O1xuICAgICAgICBjb25zdCBjYXRlZ29yeUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LWJ1dHRvblwiKVxuICAgICAgICBjYXRlZ29yeUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvbS5jcmVhdGVNYWluQ29udGVudChldmVudClcbiAgICAgICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJhbGxcIil7XG4gICAgICAgICAgICB0YXNrc1RvRGlzcGxheSA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuZ2V0QWxsVGFza3MoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcInRvZGF5XCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnNvcnRCeURhdGUoKS5kdWVUb2RheVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcIndlZWtcIil7XG4gICAgICAgICAgICB0YXNrc1RvRGlzcGxheSA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Uuc29ydEJ5RGF0ZSgpLmR1ZVRoaXNXZWVrXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09IFwiaW1wb3J0YW50XCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldEltcG9ydGFudFRhc2tzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJ0b2RvXCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnNvcnRCeVN0YXRlKCkudG9kb1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImNvbXBsZXRlZFwiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5zb3J0QnlTdGF0ZSgpLmRvbmVcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QudmFsdWVzKHRhc2tzVG9EaXNwbGF5KS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXZUYXNrcy5hcHBlbmRDaGlsZChkb20uY3JlYXRlRG9tVGFzayh0YXNrKSlcbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KVxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItcFwiKTtcbiAgICAgICAgdGV4dEhlYWRlci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb3VudGVyLXZhbHVlJywgJ1wiKCcgKyBjb3VudGVyICsgJylcIicpXG4gICAgfSxcbiAgICBjcmVhdGVEb21Qcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGl2UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxuXG4gICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHBUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtb2YtcHJvamVjdFwiKVxuICAgICAgICBwVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlXG4gICAgICAgIHBUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5kaXNwbGF5UHJvamVjdEluTWFpbi5iaW5kKHRoaXMpKVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbkVkaXQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWJ1dHRvblwiXG4gICAgICAgIGNvbnN0IGltZ0VkaXQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWdFZGl0LnNyYyA9IGVkaXRcbiAgICAgICAgYnV0dG9uRWRpdC5hcHBlbmRDaGlsZChpbWdFZGl0KVxuICAgICAgICBidXR0b25FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmVkaXRQcm9qZWN0LmJpbmQodGhpcykpXG5cbiAgICAgICAgY29uc3QgYnV0dG9uVHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvblRyYXNoLmNsYXNzTmFtZSA9IFwicHJvamVjdC1idXR0b25cIlxuICAgICAgICBjb25zdCBpbWdUcmFzaCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZ1RyYXNoLnNyYyA9IHRyYXNoQ2FuXG4gICAgICAgIGJ1dHRvblRyYXNoLmFwcGVuZENoaWxkKGltZ1RyYXNoKVxuICAgICAgICBidXR0b25UcmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5kZWxldGVQcm9qZWN0LmJpbmQodGhpcykpXG5cbiAgICAgICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChwVGl0bGUpXG4gICAgICAgIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoYnV0dG9uRWRpdClcbiAgICAgICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChidXR0b25UcmFzaClcblxuICAgICAgICByZXR1cm4gZGl2UHJvamVjdFxuICAgIH0sXG4gICAgc2hvd1Byb2plY3RzSW5TaWRlYmFyOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpXG4gICAgICAgIHdoaWxlKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QudmFsdWVzKHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRG9tUHJvamVjdChwcm9qZWN0KSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7ZG9tfVxuXG5cbiIsImltcG9ydCB7IGlzVG9kYXksIGlzV2l0aGluSW50ZXJ2YWwsIGFkZERheXMsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiXG5cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhpbml0VGl0bGUsIGluaXREZXNjcmlwdGlvbiwgaW5pdER1ZURhdGUsIGluaXRQcmlvcml0eSl7XG4gICAgbGV0IHRpdGxlID0gaW5pdFRpdGxlXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gaW5pdERlc2NyaXB0aW9uXG4gICAgbGV0IGR1ZURhdGUgPSBpbml0RHVlRGF0ZVxuICAgIGxldCBwcmlvcml0eSA9IGluaXRQcmlvcml0eVxuICAgIGxldCBzdGF0ZSA9IFwidG8tZG9cIlxuIFxuXG4gXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5XG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGNoYW5nZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZihzdGF0ZSA9PT0gXCJ0by1kb1wiKXtcbiAgICAgICAgICAgIHN0YXRlID0gXCJkb25lXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3RhdGUgPSBcInRvLWRvXCJcbiAgICAgICAgfVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXRlfTtcbiAgICB9XG4gXG4gXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXRlLCBjaGFuZ2VUaXRsZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZUR1ZURhdGUsIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VTdGF0ZSwgZ2V0SW5mb31cbiB9O1xuIFxuIFxuIFxuIFxuIFxuIFxuIFxuIFxuIFxuIFxuIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaW5pdFByb2plY3RUaXRsZSwgaW5pdFByb2plY3RTeW1ib2wpe1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBpbml0UHJvamVjdFRpdGxlXG4gICAgbGV0IHByb2plY3RTeW1ib2wgPSBpbml0UHJvamVjdFN5bWJvbFxuICAgIGxldCB0YXNrcyA9IHt9XG5cbiBcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IHRhc2suZ2V0SW5mbygpLnRpdGxlXG4gICAgICAgIHRhc2tzW3Rhc2tUaXRsZV0gPSB0YXNrXG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgdGFza1RpdGxlID0gdGFzay5nZXRJbmZvKCkudGl0bGVcbiAgICAgICAgZGVsZXRlIHRhc2tzW3Rhc2tUaXRsZV1cbiAgICB9XG4gXG4gXG4gICAgY29uc3QgbW9kaWZ5VGFzayA9ICh0YXNrLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaXRsZSA9IHRhc2suZ2V0SW5mbygpLnRpdGxlXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrc1tjdXJyZW50VGl0bGVdO1xuICAgICAgICBuZXdUYXNrLmNoYW5nZVRpdGxlKG5ld1RpdGxlKTtcbiAgICAgICAgbmV3VGFzay5jaGFuZ2VEZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XG4gICAgICAgIG5ld1Rhc2suY2hhbmdlRHVlRGF0ZShuZXdEdWVEYXRlKTtcbiAgICAgICAgbmV3VGFzay5jaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSk7XG4gICAgICAgIGRlbGV0ZSB0YXNrc1tjdXJyZW50VGl0bGVdO1xuICAgICAgICB0YXNrc1tuZXdUaXRsZV0gPSBuZXdUYXNrO1xuICAgIH1cbiBcbiBcbiAgICBjb25zdCBnZXRUYXNrSW5mbyA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrLmdldEluZm8oKS50aXRsZVxuICAgICAgICByZXR1cm4gdGFza3NbdGFza1RpdGxlXS5nZXRJbmZvKClcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlUHJvamVjdFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IG5ld1RpdGxlXG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGNoYW5nZVByb2plY3RTeW1ib2wgPSAobmV3U3ltYm9sKSA9PiB7XG4gICAgICAgIHByb2plY3RTeW1ib2wgPSBuZXdTeW1ib2xcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgZ2V0UHJvamVjdEluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7cHJvamVjdFRpdGxlLCBwcm9qZWN0U3ltYm9sfVxuICAgIH1cbiBcbiBcbiAgIFxuICAgIHJldHVybiB7dGFza3MsIGFkZFRhc2ssIGRlbGV0ZVRhc2ssIG1vZGlmeVRhc2ssIGdldFRhc2tJbmZvLCBjaGFuZ2VQcm9qZWN0VGl0bGUsIGNoYW5nZVByb2plY3RTeW1ib2wsIGdldFByb2plY3RJbmZvfVxuIH1cbiBcbiBcbiBcbiBcbiBcbiBcbiBsZXQgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSA9IHtcbiAgICBwcm9qZWN0czoge30sXG4gICBcbiAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0LmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlXSA9IHByb2plY3RcbiAgICB9LFxuIFxuIFxuICAgIHJlbW92ZVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlXG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV07XG4gICAgfSxcbiBcbiBcbiAgICBtb2RpZnlQcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0LCBuZXdUaXRsZSwgbmV3U3ltYm9sKXtcbiAgICAgICAgY29uc3QgY3VycmVudFRpdGxlID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLnByb2plY3RUaXRsZVxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdGhpcy5wcm9qZWN0c1tjdXJyZW50VGl0bGVdXG4gICAgICAgIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdFRpdGxlKG5ld1RpdGxlKVxuICAgICAgICBuZXdQcm9qZWN0LmNoYW5nZVByb2plY3RTeW1ib2wobmV3U3ltYm9sKVxuICAgICAgICBkZWxldGUgdGhpcy5wcm9qZWN0c1tjdXJyZW50VGl0bGVdXG4gICAgICAgIHRoaXMucHJvamVjdHNbbmV3VGl0bGVdID0gbmV3UHJvamVjdFxuICAgIH0sXG4gXG4gXG4gICAgYWRkVGFza1RvUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCwgdGFzayl7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0VGl0bGVdLmFkZFRhc2sodGFzaylcbiAgICB9LFxuIFxuIFxuICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCwgdGFzayl7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0VGl0bGVdLmRlbGV0ZVRhc2sodGFzaylcbiAgICB9LFxuIFxuIFxuICAgIGdldFRhc2tJbmZvRnJvbVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3QsIHRhc2spe1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV0uZ2V0VGFza0luZm8odGFzaylcbiAgICB9LFxuIFxuIFxuICAgIG1vZGlmeVRhc2tGcm9tUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCwgdGFzaywgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0VGl0bGVdLm1vZGlmeVRhc2sodGFzayAsbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSlcbiAgICB9LFxuXG4gICAgZ2V0QWxsVGFza3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBhbGxUYXNrcyA9IHt9XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdC50YXNrcykuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBhbGxUYXNrc1t0YXNrLmdldEluZm8oKS50aXRsZV0gPSB0YXNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGxUYXNrc1xuICAgIH0sXG4gXG4gXG4gICAgZ2V0SW1wb3J0YW50VGFza3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBpbXBvcnRhbnQgPSB7fTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2suZ2V0SW5mbygpLnByaW9yaXR5ID09PSBcImltcG9ydGFudFwiKXtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50W3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW1wb3J0YW50O1xuICAgIH0sXG5cblxuICAgIHNvcnRCeVN0YXRlOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZG9uZSA9IHt9O1xuICAgICAgICBsZXQgdG9kbyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvamVjdHMpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHByb2plY3QudGFza3MpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGFzay5nZXRJbmZvKCkuc3RhdGUgPT09IFwidG8tZG9cIil7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9bdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb25lW3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge2RvbmUsIHRvZG99O1xuICAgIH0sXG4gICAgXG5cblxuICAgIHNvcnRCeURhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZHVlVG9kYXkgPSB7fTtcbiAgICAgICAgbGV0IGR1ZVRoaXNXZWVrID0ge307XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gYWRkRGF5cyh0b2RheSwgNyk7XG4gICAgXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdC50YXNrcykuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0SW5mbygpLmR1ZURhdGUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1RvZGF5KHRhc2tEdWVEYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkdWVUb2RheVt0YXNrLmdldEluZm8oKS50aXRsZV0gPSB0YXNrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaXRoaW5JbnRlcnZhbCh0YXNrRHVlRGF0ZSwgeyBzdGFydDogdG9kYXksIGVuZDogZW5kT2ZXZWVrIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1ZVRoaXNXZWVrW3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4geyBkdWVUb2RheSwgZHVlVGhpc1dlZWsgfTtcbiAgICB9LFxuXG4gfVxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QsIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2V9IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBOYU4pO1xuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gX2RhdGU7XG4gIH1cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkRGF5cztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBpbnRlcnZhbCAtIFRoZSBpbnRlcnZhbCB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWxcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDMpLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIHN0YXJ0OlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0LCBlbmQ6IGRhdGUgfSlcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgZW5kOlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0OiBkYXRlLCBlbmQgfSlcbiAqIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgaW50ZXJ2YWwpIHtcbiAgY29uc3QgdGltZSA9ICt0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IFtzdGFydFRpbWUsIGVuZFRpbWVdID0gW1xuICAgICt0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpLFxuICAgICt0b0RhdGUoaW50ZXJ2YWwuZW5kKSxcbiAgXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1dpdGhpbkludGVydmFsO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQge2NyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QsIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2V9IGZyb20gXCIuL2xvZ2ljXCJcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi9kb21cIlxuXG5cblxuXG4gIC8vIENyZWF0aW5nIFRhc2tzXG5jb25zdCB0YXNrMSA9IGNyZWF0ZVRhc2soXCJUYXNrIDFcIiwgXCJEZXNjcmlwdGlvbiAxXCIsIFwiMjAyMi0wMS0wMVwiLCBcIkhpZ2hcIik7XG5jb25zdCB0YXNrMiA9IGNyZWF0ZVRhc2soXCJUYXNrIDJcIiwgXCJEZXNjcmlwdGlvbiAyXCIsIFwiMjAyMi0wMi0wMlwiLCBcIk1lZGl1bVwiKTtcblxuLy8gVGVzdGluZyBUYXNrIENyZWF0aW9uXG5jb25zb2xlLmFzc2VydCh0YXNrMS5nZXRJbmZvKCkudGl0bGUgPT09IFwiVGFzayAxXCIsIFwiVGFzayAxIGNyZWF0aW9uIGZhaWxlZFwiKTtcbmNvbnNvbGUuYXNzZXJ0KHRhc2syLmdldEluZm8oKS50aXRsZSA9PT0gXCJUYXNrIDJcIiwgXCJUYXNrIDIgY3JlYXRpb24gZmFpbGVkXCIpO1xuXG4vLyBDcmVhdGluZyBQcm9qZWN0c1xuY29uc3QgcHJvamVjdDEgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxXCIsIFwiI1wiKTtcbmNvbnN0IHByb2plY3QyID0gY3JlYXRlUHJvamVjdChcIlByb2plY3QgMlwiLCBcIiRcIik7XG5cbi8vIFRlc3RpbmcgUHJvamVjdCBDcmVhdGlvblxuY29uc29sZS5hc3NlcnQocHJvamVjdDEuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGUgPT09IFwiUHJvamVjdCAxXCIsIFwiUHJvamVjdCAxIGNyZWF0aW9uIGZhaWxlZFwiKTtcbmNvbnNvbGUuYXNzZXJ0KHByb2plY3QyLmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlID09PSBcIlByb2plY3QgMlwiLCBcIlByb2plY3QgMiBjcmVhdGlvbiBmYWlsZWRcIik7XG5cbi8vIEFkZGluZyBUYXNrcyB0byBQcm9qZWN0c1xucHJvamVjdDEuYWRkVGFzayh0YXNrMSk7XG5wcm9qZWN0Mi5hZGRUYXNrKHRhc2syKTtcblxuLy8gVGVzdGluZyBBZGRpbmcgVGFza3MgdG8gUHJvamVjdHNcbmNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW3Rhc2sxLmdldEluZm8oKS50aXRsZV0gPT09IHRhc2sxLCBcIkFkZGluZyB0YXNrMSB0byBwcm9qZWN0MSBmYWlsZWRcIik7XG5jb25zb2xlLmFzc2VydChwcm9qZWN0Mi50YXNrc1t0YXNrMi5nZXRJbmZvKCkudGl0bGVdID09PSB0YXNrMiwgXCJBZGRpbmcgdGFzazIgdG8gcHJvamVjdDIgZmFpbGVkXCIpO1xuXG4vLyBNb2RpZnlpbmcgVGFza3Mgd2l0aGluIFByb2plY3RzXG5wcm9qZWN0MS5tb2RpZnlUYXNrKHRhc2sxLCBcIlRhc2sgMSBNb2RpZmllZFwiLCBcIlVwZGF0ZWQgRGVzY3JpcHRpb24gMVwiLCBcIjIwMjItMDMtMDNcIiwgXCJMb3dcIik7XG5jb25zb2xlLmFzc2VydChwcm9qZWN0MS50YXNrc1tcIlRhc2sgMSBNb2RpZmllZFwiXSAhPT0gdW5kZWZpbmVkLCBcIk1vZGlmeWluZyB0YXNrMSB3aXRoaW4gcHJvamVjdDEgZmFpbGVkXCIpO1xuXG5cbi8vIERlbGV0aW5nIFRhc2tzIGZyb20gUHJvamVjdHNcbnByb2plY3QxLmRlbGV0ZVRhc2sodGFzazEpO1xuY29uc29sZS5hc3NlcnQocHJvamVjdDEudGFza3NbXCJUYXNrIDEgTW9kaWZpZWRcIl0gPT09IHVuZGVmaW5lZCwgXCJEZWxldGluZyB0YXNrMSBmcm9tIHByb2plY3QxIGZhaWxlZFwiKTtcblxuXG4vLyBBZGRpbmcgYSBQcm9qZWN0IHRvIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2VcbnRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkUHJvamVjdChwcm9qZWN0MSk7XG5jb25zb2xlLmFzc2VydCh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzW1wiUHJvamVjdCAxXCJdID09PSBwcm9qZWN0MSwgXCJBZGRpbmcgcHJvamVjdDEgdG8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cbi8vIE1vZGlmeWluZyBhIFByb2plY3QgaW4gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZVxudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5tb2RpZnlQcm9qZWN0KHByb2plY3QxLCBcIlByb2plY3QgMSBVcGRhdGVkXCIsIFwiXCIpO1xuY29uc29sZS5hc3NlcnQodGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1tcIlByb2plY3QgMSBVcGRhdGVkXCJdLmdldFByb2plY3RJbmZvKCkucHJvamVjdFN5bWJvbCA9PT0gXCJcIiwgXCJNb2RpZnlpbmcgcHJvamVjdDEgaW4gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cbi8vIFJlbW92aW5nIGEgUHJvamVjdCBmcm9tIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2VcbnRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucmVtb3ZlUHJvamVjdChwcm9qZWN0MSk7XG5jb25zb2xlLmFzc2VydCh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzW1wiUHJvamVjdCAxIFVwZGF0ZWRcIl0gPT09IHVuZGVmaW5lZCwgXCJSZW1vdmluZyBwcm9qZWN0MSBmcm9tIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG4vLyBSZS1hZGRpbmcgdGhlIFByb2plY3QgYW5kIFRhc2sgZm9yIEZ1cnRoZXIgVGVzdGluZ1xudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5hZGRQcm9qZWN0KHByb2plY3QxKTtcblxuLy8gQWRkaW5nIGEgVGFzayB0byBhIFByb2plY3QgdGhyb3VnaCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlXG50aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFRhc2tUb1Byb2plY3QocHJvamVjdDEsIHRhc2sxKTtcbmNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW3Rhc2sxLmdldEluZm8oKS50aXRsZV0gPT09IHRhc2sxLCBcIkFkZGluZyB0YXNrMSB0byBwcm9qZWN0MSB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG5cbi8vIFJlbW92aW5nIGEgVGFzayBmcm9tIGEgUHJvamVjdCB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2VcbnRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3QxLCB0YXNrMSk7XG5jb25zb2xlLmFzc2VydChwcm9qZWN0MS50YXNrc1t0YXNrMS5nZXRJbmZvKCkudGl0bGVdID09PSB1bmRlZmluZWQsIFwiUmVtb3ZpbmcgdGFzazEgZnJvbSBwcm9qZWN0MSB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG4vLyAvLyBHZXR0aW5nIFRhc2sgSW5mbyBmcm9tIGEgUHJvamVjdCB0aHJvdWdoXG5cbnRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0MSwgdGFzazEpOyAvLyBSZS1hZGQgdGFzayBmb3IgdGVzdGluZ1xuY29uc3QgdGFza0luZm8gPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldFRhc2tJbmZvRnJvbVByb2plY3QocHJvamVjdDEsIHRhc2sxKTtcbmNvbnNvbGUuYXNzZXJ0KHRhc2tJbmZvICYmIHRhc2tJbmZvLnRpdGxlID09PSB0YXNrMS5nZXRJbmZvKCkudGl0bGUsIFwiR2V0dGluZyB0YXNrIGluZm8gZnJvbSBwcm9qZWN0MSB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG5cblxudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5tb2RpZnlUYXNrRnJvbVByb2plY3QocHJvamVjdDEsIHRhc2sxLFwiVGFzayAxIE1vZGlmaWVkXCIsIFwiVXBkYXRlZCBEZXNjcmlwdGlvbiAxXCIsIFwiMjAyNC0wMS0yMFwiLCBcImltcG9ydGFudFwiKVxuXG5sZXQgdGFzazMgPSBjcmVhdGVUYXNrKFwiVGFzayAzXCIsIFwiRGVzY3JpcHRpb24gM1wiLCBcIjIwMjQtMDEtMTdcIiwgXCJpbXBvcnRhbnRcIilcbnRhc2szLmNoYW5nZVN0YXRlKClcbnRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0MSwgdGFzazMpXG5jb25zb2xlLmxvZyh0YXNrMS5nZXRJbmZvKCkuZHVlRGF0ZSlcblxuXG5cbmRvbS5hZGRFdmVudExpc3RlbmVycygpXG5kb20uc2hvd1Byb2plY3RzSW5TaWRlYmFyKClcblxuLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxcIilcbi8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5cbi8vICAgICB3aGlsZShtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuLy8gICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoKVxuLy8gICAgIH1cbi8vIH0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=