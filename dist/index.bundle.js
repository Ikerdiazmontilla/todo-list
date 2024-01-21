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

.title, .strikethrough{
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


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Css reset */\n*, *::before, *::after {\n    box-sizing: border-box;\n   }\n   \n   * {\n    margin: 0;\n    padding: 0;\n    font-family: \"Varela Round\", 'Courier New', Courier, monospace;\n    /* border: 1px solid red; */\n   }\n   \n   body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    /* border: 1px solid red; */\n   }\n   \n   img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n   }\n   \n   input, button, textarea, select {\n    font: inherit;\n   }\n   \n   p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n   }\n\n   button, a{\n     cursor: pointer;\n     }\n    button{\n      background-color: transparent;\n      color: inherit;\n      outline: none;\n      border: none;\n      padding: 0px;\n    }\n\n   a{\n       text-decoration: none;\n   }\n\n   fieldset{\n    border: none;\n   }\n   ul{\n    list-style: none;\n   }\n \n   \n/* Variables */\n\n:root {\n    --main-text: #2F4F4F;\n    --main-bg: #C0C0C0;\n    --main-hover:#b8b4b4;\n    --header-bg: #918f8f;\n    --header-text: #fff;\n    --sidebar-bg: #87CEEB;\n    --sidebar-hover:#b9dfe4;\n    --sidebar-border-hover: #00b3bb;\n    --button-bg:#b2def0;\n    --border-radius: 8px;\n    --input-hover:#e0dddd;\n    --input-focus:#d4d2d2;\n  }\n\n  /* Footer */\n\n\n  html {\n    /* footer support */\n    position: relative;\n    min-height: 100%;\n  }\n  \n  \n  \n  \n  body {\n  /* footer support */\n    margin-bottom: 48px;\n  }\n  \n  \n  .footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-size: 18px;\n  }\n  \n  \n  .fa-github {\n    color: white;\n    font-size: 22px;\n    transition: transform 0.3s ease-in-out;\n  }\n  \n  \n  .fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n  }\n\n/* Styling */\n\n  body{\n    height: calc(100vh - 48px);\n    width: 100vw;\n    max-width: 100vw;\n  }\n  \n  .content{\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    max-width: 100vw;\n    height: calc(100vh - 48px);\n    /* border: 1px solid red; */\n  }\n\n\n/* Header */\n\nheader{\n  background-color: var(--header-bg);\n  color: var(--header-text);\n  padding: 20px;\n  height: 15%;\n  display: flex;\n  align-items: center;\n}\n\nh1{\n  font-size: 2.5rem;\n}\n  \n\n/* Main */\n\nmain{\n  display: flex;\n  background-color: var(--main-bg);\n  color: var(--main-text);\n  height: 85%;\n}\n\n.sidebar{\n  background-color: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 4vh 2vw;\n  gap: 5vh;\n}\n\n.sidebar .sections{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar .sections button{\n  background-color: var(--button-bg);\n  font-size: 1.1rem;\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  outline: none;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  \n}\n\n.sidebar .sections button:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.sidebar .sections button.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.sidebar .projects{\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar .projects-header{\n  display: flex;\n  align-items: center;\n  \n}\n\n.sidebar .projects-header p{\n  font-size: 1.3rem;\n}\n\n.sidebar .projects-header button{\n  font-size: 1.7rem;\n  border-radius: var(--border-radius);\n  margin-left: auto;\n}\n\n.sidebar .projects-container{\n  border-top: 2px solid var(--main-text);\n  border-bottom: 2px solid var(--main-text);\n  padding: 2vh 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  overflow: auto;\n}\n\n.projects-container .project{\n  background-color: var(--button-bg);\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  display: flex;\n  gap: 5px;\n  cursor: pointer;\n}\n\n.projects-container .project:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.projects-container .project.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.project .title-of-project{\n  margin-right:auto;\n  font-size: 1.1rem;\n}\n.project .project-button{\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.main-content{\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n  padding: 2vh 4vw;\n  gap: 4vh;\n}\n\n.main-content h2{\n  text-align: center;\n  font-size: 2rem;\n}\n\n.main-wrapper{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.main-wrapper .header-wrapper{\n  display: flex;\n  width: 100%;\n\n}\n\n\n.header-wrapper .header-p{\n  align-self: flex-start;\n  margin-right: auto;\n  font-size: 1.5rem;\n  --counter-value:\"\";\n\n}\n\n.header-wrapper .header-p::after{\n  content: var(--counter-value);\n  position: relative;\n  left:2px;\n}\n\n.header-wrapper > button{\n  font-size: 1.7rem;\n}\n\n\n.tasks{\n  border-top: 2px solid var(--main-text);\n  width: 100%;\n  padding: 2vh 1vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.task{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n}\n\n.task:hover{\n  background-color: var(--main-hover);\n}\n\n.title, .strikethrough{\n  margin-right: auto;\n}\n\n.task img{\n  max-width: 20px;\n  max-height: 20px;\n  aspect-ratio: 1/1;\n}\n\n\ndialog{\n  margin: auto;\n  border:none;\n  border-radius: var(--border-radius);\n}\n\n.dialog-container{\n  display: flex;\n  flex-direction: column;\n  \n}\n\ndialog .header{\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  padding-bottom: 10px;\n  border-top-right-radius: var(--border-radius);\n  border-top-left-radius: var(--border-radius);\n  background-color: var(--main-bg);\n  color: #353333;\n}\n\ndialog .header h3{\n  margin-right: auto;\n  font-size: 1.5rem;\n}\n\ndialog .header .close{\n  font-size: 2rem;\n  align-self: flex-start;\n}\n\n\nform{\n  padding: 20px;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\ninput, textarea, select{\n  border-radius: var(--border-radius);\n  border: 2px ridge var(--header-bg);\n  padding: 4px;\n  transition: 0.4s;\n}\n\n input:hover, textarea:hover, select:hover{\n  background-color: var(--input-hover);\n}\ninput:focus, textarea:focus, select:focus{\n  background-color: var(--input-focus);\n}\n\n#task-dialog ul{\n  display: flex;\n  flex-direction: column;\n  gap: 3vh;\n}\n\n#task-dialog li{\n  display: flex;\n  flex-direction: column;\n}\n\n#project-dialog ul{\n  display: flex;\n  flex-wrap: wrap;\n  \n}\n\n#project-dialog li{\n  display: flex;\n}\n#project-dialog .project-title{\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n#project-dialog .project-title input{\n  width: 100%;\n}\n\ninput[type=\"radio\"]{\n  display: none;\n}\n\n.radio-label{\n  border: 2px solid var(--sidebar-border-hover);\n  color: rgb(6, 6, 105);\n  border-radius: var(--border-radius);\n  width: 45px;\n  height: 45px;\n  text-align: center;\n  font-size: 1.7rem;\n  transition: 0.3s;\n}\n\n.radio-label:hover{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.radio-label.active{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.dialog-buttons{\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.dialog-buttons button{\n  padding: 10px;\n  border: 2px solid var(--main-bg);\n  border-radius: var(--border-radius);\n  transition: 0.4s;\n  font-weight: 700;\n}\n\nbutton.submit{\n  color: var(--sidebar-border-hover);\n  \n}\n\nbutton.submit:hover{\n  background-color: var(--sidebar-border-hover);\n  color: var(--main-text);\n}\n\nbutton.cancel{\n  color: rgb(248, 163, 163);\n}\n\nbutton.cancel:hover{\n  background-color: rgb(245, 139, 139);\n  color: var(--main-text);\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/check-circle.svg */ "./src/images/check-circle.svg");








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
    toggleState: function(event){
        if(event.target.parentElement.nextElementSibling.className !== "title" ){
            const title = event.target.parentElement.nextElementSibling.querySelector("p")
            const s = title.parentElement
            s.parentElement.replaceChild(title, s)
            const imgCircle = new Image()
            imgCircle.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_1__
            event.target.parentElement.replaceChild(imgCircle,event.target)
        }
        else{
            const title = event.target.parentElement.nextElementSibling
            const s = document.createElement("s")
            s.className = "strikethrough"
            title.parentElement.insertBefore(s,title)
            s.appendChild(title)
            const imgCompleted = new Image()
            imgCompleted.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_5__
            event.target.parentElement.replaceChild(imgCompleted,event.target )
        }
    },
    editProject: function(){},
    deleteProject: function(){},
    removeActiveClass: function(){
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.classList.remove("active")
        })
        const projectButtons= document.querySelectorAll(".project")
        projectButtons.forEach((button) => {
            button.classList.remove("active")
        })
    },
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
        dom.removeActiveClass()
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
    displayProjectInMain: function(event){
        let counter = 0
        dom.removeActiveClass()
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

/***/ "./src/images/check-circle.svg":
/*!*************************************!*\
  !*** ./src/images/check-circle.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a71c1ee107a20b35fc0a.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU8scUZBQXFGLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxLQUFLLFlBQVksYUFBYSxhQUFhLFVBQVUsS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVks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ZUFBZSxnRUFBNEI7O0FBRTNDO0FBQ0EsZ0VBQTRCOztBQUU1QjtBQUNBLGdFQUE0QjtBQUM1Qjs7O0FBR0E7QUFDQSxnRUFBNEI7QUFDNUI7O0FBRUE7O0FBRUEsZ0VBQTRCLG9DQUFvQztBQUNoRSxpQkFBaUIsZ0VBQTRCO0FBQzdDOzs7O0FBSUEsZ0VBQTRCOztBQUU1QixZQUFZLGtEQUFVO0FBQ3RCO0FBQ0EsZ0VBQTRCO0FBQzVCOzs7O0FBSUEscUNBQUc7QUFDSCxxQ0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNXaXRoaW5JbnRlcnZhbC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENzcyByZXNldCAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIH1cbiAgIFxuICAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCIsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gICB9XG4gICBcbiAgIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgfVxuICAgXG4gICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgfVxuICAgXG4gICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xuICAgfVxuICAgXG4gICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgfVxuXG4gICBidXR0b24sIGF7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgfVxuICAgIGJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgYXtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICB9XG5cbiAgIGZpZWxkc2V0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgIH1cbiAgIHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICB9XG4gXG4gICBcbi8qIFZhcmlhYmxlcyAqL1xuXG46cm9vdCB7XG4gICAgLS1tYWluLXRleHQ6ICMyRjRGNEY7XG4gICAgLS1tYWluLWJnOiAjQzBDMEMwO1xuICAgIC0tbWFpbi1ob3ZlcjojYjhiNGI0O1xuICAgIC0taGVhZGVyLWJnOiAjOTE4ZjhmO1xuICAgIC0taGVhZGVyLXRleHQ6ICNmZmY7XG4gICAgLS1zaWRlYmFyLWJnOiAjODdDRUVCO1xuICAgIC0tc2lkZWJhci1ob3ZlcjojYjlkZmU0O1xuICAgIC0tc2lkZWJhci1ib3JkZXItaG92ZXI6ICMwMGIzYmI7XG4gICAgLS1idXR0b24tYmc6I2IyZGVmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWlucHV0LWhvdmVyOiNlMGRkZGQ7XG4gICAgLS1pbnB1dC1mb2N1czojZDRkMmQyO1xuICB9XG5cbiAgLyogRm9vdGVyICovXG5cblxuICBodG1sIHtcbiAgICAvKiBmb290ZXIgc3VwcG9ydCAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICBib2R5IHtcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG4gIFxuICBcbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICBcbiAgLmZhLWdpdGh1YiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgXG4gIC5mYS1naXRodWI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcbiAgfVxuXG4vKiBTdHlsaW5nICovXG5cbiAgYm9keXtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgfVxuICBcbiAgLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgfVxuXG5cbi8qIEhlYWRlciAqL1xuXG5oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMXtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG4gIFxuXG4vKiBNYWluICovXG5cbm1haW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcbiAgaGVpZ2h0OiA4NSU7XG59XG5cbi5zaWRlYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogNHZoIDJ2dztcbiAgZ2FwOiA1dmg7XG59XG5cbi5zaWRlYmFyIC5zZWN0aW9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBcbn1cblxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xufVxuXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9uLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xufVxuXG4uc2lkZWJhciAucHJvamVjdHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGJ1dHRvbntcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnNpZGViYXIgLnByb2plY3RzLWNvbnRhaW5lcntcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xuICBwYWRkaW5nOiAydmggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDF2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3R7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0LmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xufVxuXG4ucHJvamVjdCAudGl0bGUtb2YtcHJvamVjdHtcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnByb2plY3QgLnByb2plY3QtYnV0dG9ue1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICBmbGV4OiA0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMnZoIDR2dztcbiAgZ2FwOiA0dmg7XG59XG5cbi5tYWluLWNvbnRlbnQgaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubWFpbi13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4td3JhcHBlciAuaGVhZGVyLXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG5cblxuLmhlYWRlci13cmFwcGVyIC5oZWFkZXItcHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgLS1jb3VudGVyLXZhbHVlOlwiXCI7XG5cbn1cblxuLmhlYWRlci13cmFwcGVyIC5oZWFkZXItcDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IHZhcigtLWNvdW50ZXItdmFsdWUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6MnB4O1xufVxuXG4uaGVhZGVyLXdyYXBwZXIgPiBidXR0b257XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG5cbi50YXNrc3tcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAydmggMXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFza3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi50YXNrOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhvdmVyKTtcbn1cblxuLnRpdGxlLCAuc3RyaWtldGhyb3VnaHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udGFzayBpbWd7XG4gIG1heC13aWR0aDogMjBweDtcbiAgbWF4LWhlaWdodDogMjBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG59XG5cblxuZGlhbG9ne1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjpub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmRpYWxvZy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxufVxuXG5kaWFsb2cgLmhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xuICBjb2xvcjogIzM1MzMzMztcbn1cblxuZGlhbG9nIC5oZWFkZXIgaDN7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmRpYWxvZyAuaGVhZGVyIC5jbG9zZXtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG5cbmZvcm17XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlcjogMnB4IHJpZGdlIHZhcigtLWhlYWRlci1iZyk7XG4gIHBhZGRpbmc6IDRweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuIGlucHV0OmhvdmVyLCB0ZXh0YXJlYTpob3Zlciwgc2VsZWN0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1ob3Zlcik7XG59XG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xufVxuXG4jdGFzay1kaWFsb2cgdWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3ZoO1xufVxuXG4jdGFzay1kaWFsb2cgbGl7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNwcm9qZWN0LWRpYWxvZyB1bHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBcbn1cblxuI3Byb2plY3QtZGlhbG9nIGxpe1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI3Byb2plY3QtZGlhbG9nIC5wcm9qZWN0LXRpdGxle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jcHJvamVjdC1kaWFsb2cgLnByb2plY3QtdGl0bGUgaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYWRpby1sYWJlbHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBjb2xvcjogcmdiKDYsIDYsIDEwNSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmFkaW8tbGFiZWw6aG92ZXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2LCA2LCAxMDUpO1xufVxuXG4ucmFkaW8tbGFiZWwuYWN0aXZle1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNiwgNiwgMTA1KTtcbn1cblxuLmRpYWxvZy1idXR0b25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG59XG5cbi5kaWFsb2ctYnV0dG9ucyBidXR0b257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uLnN1Ym1pdHtcbiAgY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbiAgXG59XG5cbmJ1dHRvbi5zdWJtaXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XG59XG5cbmJ1dHRvbi5jYW5jZWx7XG4gIGNvbG9yOiByZ2IoMjQ4LCAxNjMsIDE2Myk7XG59XG5cbmJ1dHRvbi5jYW5jZWw6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEzOSwgMTM5KTtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtJQUNJLHNCQUFzQjtHQUN2Qjs7R0FFQTtJQUNDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsOERBQThEO0lBQzlELDJCQUEyQjtHQUM1Qjs7R0FFQTtJQUNDLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsMkJBQTJCO0dBQzVCOztHQUVBO0lBQ0MsY0FBYztJQUNkLGVBQWU7R0FDaEI7O0dBRUE7SUFDQyxh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QUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0NBRUM7RUFDQyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDOztBQUVwQzs7QUFFQTtFQUNFLDZDQUE2QztFQUM3Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENzcyByZXNldCAqL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgIH1cXG4gICBcXG4gICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlZhcmVsYSBSb3VuZFxcXCIsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgIH1cXG4gICBcXG4gICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICB9XFxuICAgXFxuICAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgIH1cXG4gICBcXG4gICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICB9XFxuICAgXFxuICAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgfVxcblxcbiAgIGJ1dHRvbiwgYXtcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcblxcbiAgIGF7XFxuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICB9XFxuXFxuICAgZmllbGRzZXR7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICB9XFxuICAgdWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgfVxcbiBcXG4gICBcXG4vKiBWYXJpYWJsZXMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi10ZXh0OiAjMkY0RjRGO1xcbiAgICAtLW1haW4tYmc6ICNDMEMwQzA7XFxuICAgIC0tbWFpbi1ob3ZlcjojYjhiNGI0O1xcbiAgICAtLWhlYWRlci1iZzogIzkxOGY4ZjtcXG4gICAgLS1oZWFkZXItdGV4dDogI2ZmZjtcXG4gICAgLS1zaWRlYmFyLWJnOiAjODdDRUVCO1xcbiAgICAtLXNpZGViYXItaG92ZXI6I2I5ZGZlNDtcXG4gICAgLS1zaWRlYmFyLWJvcmRlci1ob3ZlcjogIzAwYjNiYjtcXG4gICAgLS1idXR0b24tYmc6I2IyZGVmMDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIC0taW5wdXQtaG92ZXI6I2UwZGRkZDtcXG4gICAgLS1pbnB1dC1mb2N1czojZDRkMmQyO1xcbiAgfVxcblxcbiAgLyogRm9vdGVyICovXFxuXFxuXFxuICBodG1sIHtcXG4gICAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICBcXG4gIFxcbiAgXFxuICBib2R5IHtcXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxuICB9XFxuICBcXG4gIFxcbiAgLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgXFxuICBcXG4gIC5mYS1naXRodWIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICBcXG4gIFxcbiAgLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG4gIH1cXG5cXG4vKiBTdHlsaW5nICovXFxuXFxuICBib2R5e1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgXFxuICAuY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgfVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxe1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcbiAgXFxuXFxuLyogTWFpbiAqL1xcblxcbm1haW57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcXG4gIGhlaWdodDogODUlO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogNHZoIDJ2dztcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4uc2lkZWJhciAuc2VjdGlvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIFxcbn1cXG5cXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XFxuICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG59XFxuXFxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbi5hY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgcHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGJ1dHRvbntcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWNvbnRhaW5lcntcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XFxuICBwYWRkaW5nOiAydmggMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDF2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0OmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XFxuICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdC5hY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xcbn1cXG5cXG4ucHJvamVjdCAudGl0bGUtb2YtcHJvamVjdHtcXG4gIG1hcmdpbi1yaWdodDphdXRvO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi5wcm9qZWN0IC5wcm9qZWN0LWJ1dHRvbntcXG4gIGhlaWdodDogMjBweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgZmxleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMnZoIDR2dztcXG4gIGdhcDogNHZoO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIgLmhlYWRlci13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG5cXG4uaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1we1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgLS1jb3VudGVyLXZhbHVlOlxcXCJcXFwiO1xcblxcbn1cXG5cXG4uaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1wOjphZnRlcntcXG4gIGNvbnRlbnQ6IHZhcigtLWNvdW50ZXItdmFsdWUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDoycHg7XFxufVxcblxcbi5oZWFkZXItd3JhcHBlciA+IGJ1dHRvbntcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG5cXG4udGFza3N7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMnZoIDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFza3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ob3Zlcik7XFxufVxcblxcbi50aXRsZSwgLnN0cmlrZXRocm91Z2h7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrIGltZ3tcXG4gIG1heC13aWR0aDogMjBweDtcXG4gIG1heC1oZWlnaHQ6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuXFxuZGlhbG9ne1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOm5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIFxcbn1cXG5cXG5kaWFsb2cgLmhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gIGNvbG9yOiAjMzUzMzMzO1xcbn1cXG5cXG5kaWFsb2cgLmhlYWRlciBoM3tcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5kaWFsb2cgLmhlYWRlciAuY2xvc2V7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5cXG5mb3Jte1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0e1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXI6IDJweCByaWRnZSB2YXIoLS1oZWFkZXItYmcpO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuIGlucHV0OmhvdmVyLCB0ZXh0YXJlYTpob3Zlciwgc2VsZWN0OmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtaG92ZXIpO1xcbn1cXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcXG59XFxuXFxuI3Rhc2stZGlhbG9nIHVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDN2aDtcXG59XFxuXFxuI3Rhc2stZGlhbG9nIGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0LWRpYWxvZyB1bHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI3Byb2plY3QtZGlhbG9nIC5wcm9qZWN0LXRpdGxle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgLnByb2plY3QtdGl0bGUgaW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYWRpby1sYWJlbHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG4gIGNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1sYWJlbDpob3ZlcntcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2LCA2LCAxMDUpO1xcbn1cXG5cXG4ucmFkaW8tbGFiZWwuYWN0aXZle1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDYsIDYsIDEwNSk7XFxufVxcblxcbi5kaWFsb2ctYnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nLWJ1dHRvbnMgYnV0dG9ue1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdHtcXG4gIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbn1cXG5cXG5idXR0b24uY2FuY2Vse1xcbiAgY29sb3I6IHJnYigyNDgsIDE2MywgMTYzKTtcXG59XFxuXFxuYnV0dG9uLmNhbmNlbDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEzOSwgMTM5KTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgY2lyY2xlIGZyb20gXCIuL2ltYWdlcy9jaXJjbGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi9pbWFnZXMvZWRpdC5zdmdcIjtcbmltcG9ydCB0cmFzaENhbiBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiXG5pbXBvcnQgaW5mbyBmcm9tIFwiLi9pbWFnZXMvaW5mby5zdmdcIlxuaW1wb3J0IGNvbXBsZXRlZCBmcm9tIFwiLi9pbWFnZXMvY2hlY2stY2lyY2xlLnN2Z1wiXG5cblxubGV0IGRvbSA9IHtcbiAgICBjcmVhdGVNYWluQ29udGVudDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIFxuICAgICAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluV3JhcHBlci5jbGFzc05hbWUgPSAnbWFpbi13cmFwcGVyJztcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJXcmFwcGVyLmNsYXNzTmFtZSA9ICdoZWFkZXItd3JhcHBlcic7XG4gICAgXG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuICAgICAgICBoZWFkZXJUZXh0LmNsYXNzTmFtZSA9IFwiaGVhZGVyLXBcIlxuICAgICAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgIFxuICAgICAgICBjb25zdCBhcnJheU5hbWVzID0gW1wiYWxsXCIsXCJ0b2RheVwiLCBcIndlZWtcIiwgXCJpbXBvcnRhbnRcIiwgXCJjb21wbGV0ZWRcIiwgXCJ0b2RvXCJdXG4gICAgICAgIGxldCBpc0luQXJyYXkgPSBhcnJheU5hbWVzLmluY2x1ZGVzKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgIGlmKGlzSW5BcnJheSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGQtdGFzayc7XG4gICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAn4oqVJztcbiAgICAgICAgICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBkaXZUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGl2VGFza3MuY2xhc3NOYW1lID0gXCJ0YXNrc1wiXG4gIFxuICAgIFxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluV3JhcHBlcik7XG4gICAgICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcldyYXBwZXIpO1xuICAgICAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChkaXZUYXNrcylcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluV3JhcHBlcilcbiAgICB9LFxuXG5cbiAgICBjcmVhdGVEb21UYXNrOiBmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrLmdldEluZm8oKVxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWFpbkRpdi5jbGFzc05hbWUgPSBcInRhc2tcIlxuICAgIFxuICAgICAgICBjb25zdCBidXR0b25Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgaW1nQ2lyY2xlID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nQ2lyY2xlLnNyYyA9IGNpcmNsZVxuICAgICAgICBidXR0b25Db21wbGV0ZS5hcHBlbmRDaGlsZChpbWdDaXJjbGUpXG4gICAgICAgIGJ1dHRvbkNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZVN0YXRlLmJpbmQodGhpcykpO1xuICAgIFxuICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwVGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiXG4gICAgICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvLnRpdGxlXG4gICAgXG4gICAgICAgIGNvbnN0IHBEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcERhdGUuY2xhc3NOYW1lID0gXCJkYXRlXCJcbiAgICAgICAgcERhdGUudGV4dENvbnRlbnQgPSB0YXNrSW5mby5kdWVEYXRlXG4gICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbkVkaXQuY2xhc3NOYW1lID0gXCJsZWZ0IGVkaXRcIlxuICAgICAgICBjb25zdCBpbWdFZGl0ID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nRWRpdC5zcmMgPSBlZGl0XG4gICAgICAgIGJ1dHRvbkVkaXQuYXBwZW5kQ2hpbGQoaW1nRWRpdClcbiAgICAgICAgYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5lZGl0VGFzay5iaW5kKHRoaXMpKVxuICAgIFxuICAgICAgICBjb25zdCBidXR0b25UcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uVHJhc2guY2xhc3NOYW1lID0gXCJsZWZ0IHRyYXNoXCJcbiAgICAgICAgY29uc3QgaW1nVHJhc2ggPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWdUcmFzaC5zcmMgPSB0cmFzaENhblxuICAgICAgICBidXR0b25UcmFzaC5hcHBlbmRDaGlsZChpbWdUcmFzaClcbiAgICAgICAgYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVtb3ZlVGFzay5iaW5kKHRoaXMpKVxuICAgIFxuICAgICAgICBjb25zdCBidXR0b25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b25JbmZvLmNsYXNzTmFtZSA9IFwibGVmdCBpbmZvXCJcbiAgICAgICAgY29uc3QgaW1nSW5mbyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZ0luZm8uc3JjID0gaW5mb1xuICAgICAgICBidXR0b25JbmZvLmFwcGVuZENoaWxkKGltZ0luZm8pXG4gICAgICAgIGJ1dHRvbkluZm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd0luZm8uYmluZCh0aGlzKSlcbiAgICBcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25Db21wbGV0ZSlcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwVGl0bGUpXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQocERhdGUpXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRWRpdClcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25UcmFzaClcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25JbmZvKVxuICAgICAgICByZXR1cm4gbWFpbkRpdlxuICAgIFxuICAgIH0sXG4gICAgZWRpdFRhc2s6IGZ1bmN0aW9uKCl7fSxcbiAgICByZW1vdmVUYXNrOiBmdW5jdGlvbigpe30sXG4gICAgc2hvd0luZm86IGZ1bmN0aW9uKCl7fSxcbiAgICB0b2dnbGVTdGF0ZTogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZihldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lICE9PSBcInRpdGxlXCIgKXtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpXG4gICAgICAgICAgICBjb25zdCBzID0gdGl0bGUucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgcy5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aXRsZSwgcylcbiAgICAgICAgICAgIGNvbnN0IGltZ0NpcmNsZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgICAgICBpbWdDaXJjbGUuc3JjID0gY2lyY2xlXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoaW1nQ2lyY2xlLGV2ZW50LnRhcmdldClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic1wiKVxuICAgICAgICAgICAgcy5jbGFzc05hbWUgPSBcInN0cmlrZXRocm91Z2hcIlxuICAgICAgICAgICAgdGl0bGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocyx0aXRsZSlcbiAgICAgICAgICAgIHMuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgICAgICBjb25zdCBpbWdDb21wbGV0ZWQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICAgICAgaW1nQ29tcGxldGVkLnNyYyA9IGNvbXBsZXRlZFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKGltZ0NvbXBsZXRlZCxldmVudC50YXJnZXQgKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBlZGl0UHJvamVjdDogZnVuY3Rpb24oKXt9LFxuICAgIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uKCl7fSxcbiAgICByZW1vdmVBY3RpdmVDbGFzczogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeS1idXR0b25cIilcbiAgICAgICAgY2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxuICAgICAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeS1idXR0b25cIilcbiAgICAgICAgY2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uZGlzcGxheUNhdGVnb3J5KVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBidXR0b25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKVxuICAgICAgICBidXR0b25BbGwuY2xpY2soKTtcbiAgICB9LFxuICAgIGRpc3BsYXlDYXRlZ29yeTogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgbGV0IHRhc2tzVG9EaXNwbGF5O1xuICAgICAgICBkb20ucmVtb3ZlQWN0aXZlQ2xhc3MoKVxuICAgICAgICBkb20uY3JlYXRlTWFpbkNvbnRlbnQoZXZlbnQpXG4gICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxuICAgICAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwiYWxsXCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldEFsbFRhc2tzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJ0b2RheVwiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5zb3J0QnlEYXRlKCkuZHVlVG9kYXlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJ3ZWVrXCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnNvcnRCeURhdGUoKS5kdWVUaGlzV2Vla1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImltcG9ydGFudFwiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5nZXRJbXBvcnRhbnRUYXNrcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09IFwidG9kb1wiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5zb3J0QnlTdGF0ZSgpLnRvZG9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJjb21wbGV0ZWRcIil7XG4gICAgICAgICAgICB0YXNrc1RvRGlzcGxheSA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Uuc29ydEJ5U3RhdGUoKS5kb25lXG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0YXNrc1RvRGlzcGxheSkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGl2VGFza3MuYXBwZW5kQ2hpbGQoZG9tLmNyZWF0ZURvbVRhc2sodGFzaykpXG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXBcIik7XG4gICAgICAgIHRleHRIZWFkZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY291bnRlci12YWx1ZScsICdcIignICsgY291bnRlciArICcpXCInKVxuICAgIH0sXG4gICAgZGlzcGxheVByb2plY3RJbk1haW46IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgICAgIGRvbS5yZW1vdmVBY3RpdmVDbGFzcygpXG4gICAgICAgIGRvbS5jcmVhdGVNYWluQ29udGVudChldmVudClcbiAgICAgICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1tldmVudC50YXJnZXQudGV4dENvbnRlbnRdLnRhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXZUYXNrcy5hcHBlbmRDaGlsZChkb20uY3JlYXRlRG9tVGFzayh0YXNrKSlcbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KVxuICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1wXCIpO1xuICAgICAgICB0ZXh0SGVhZGVyLnN0eWxlLnNldFByb3BlcnR5KCctLWNvdW50ZXItdmFsdWUnLCAnXCIoJyArIGNvdW50ZXIgKyAnKVwiJylcbiAgICB9LFxuICAgIGNyZWF0ZURvbVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICBjb25zdCBkaXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXZQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXG5cbiAgICAgICAgY29uc3QgcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1vZi1wcm9qZWN0XCIpXG4gICAgICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVcbiAgICAgICAgcFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmRpc3BsYXlQcm9qZWN0SW5NYWluLmJpbmQodGhpcykpXG5cbiAgICAgICAgY29uc3QgYnV0dG9uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uRWRpdC5jbGFzc05hbWUgPSBcInByb2plY3QtYnV0dG9uXCJcbiAgICAgICAgY29uc3QgaW1nRWRpdCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZ0VkaXQuc3JjID0gZWRpdFxuICAgICAgICBidXR0b25FZGl0LmFwcGVuZENoaWxkKGltZ0VkaXQpXG4gICAgICAgIGJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZWRpdFByb2plY3QuYmluZCh0aGlzKSlcblxuICAgICAgICBjb25zdCBidXR0b25UcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uVHJhc2guY2xhc3NOYW1lID0gXCJwcm9qZWN0LWJ1dHRvblwiXG4gICAgICAgIGNvbnN0IGltZ1RyYXNoID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nVHJhc2guc3JjID0gdHJhc2hDYW5cbiAgICAgICAgYnV0dG9uVHJhc2guYXBwZW5kQ2hpbGQoaW1nVHJhc2gpXG4gICAgICAgIGJ1dHRvblRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmRlbGV0ZVByb2plY3QuYmluZCh0aGlzKSlcblxuICAgICAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHBUaXRsZSlcbiAgICAgICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChidXR0b25FZGl0KVxuICAgICAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGJ1dHRvblRyYXNoKVxuXG4gICAgICAgIHJldHVybiBkaXZQcm9qZWN0XG4gICAgfSxcbiAgICBzaG93UHJvamVjdHNJblNpZGViYXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIilcbiAgICAgICAgd2hpbGUocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0cykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb21Qcm9qZWN0KHByb2plY3QpKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IHtkb219XG5cblxuIiwiaW1wb3J0IHsgaXNUb2RheSwgaXNXaXRoaW5JbnRlcnZhbCwgYWRkRGF5cywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCJcblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGluaXRUaXRsZSwgaW5pdERlc2NyaXB0aW9uLCBpbml0RHVlRGF0ZSwgaW5pdFByaW9yaXR5KXtcbiAgICBsZXQgdGl0bGUgPSBpbml0VGl0bGVcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBpbml0RGVzY3JpcHRpb25cbiAgICBsZXQgZHVlRGF0ZSA9IGluaXREdWVEYXRlXG4gICAgbGV0IHByaW9yaXR5ID0gaW5pdFByaW9yaXR5XG4gICAgbGV0IHN0YXRlID0gXCJ0by1kb1wiXG4gXG5cbiBcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlXG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlRHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlXG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHlcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHN0YXRlID09PSBcInRvLWRvXCIpe1xuICAgICAgICAgICAgc3RhdGUgPSBcImRvbmVcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdGF0ZSA9IFwidG8tZG9cIlxuICAgICAgICB9XG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdGV9O1xuICAgIH1cbiBcbiBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbixkdWVEYXRlLCBwcmlvcml0eSwgc3RhdGUsIGNoYW5nZVRpdGxlLCBjaGFuZ2VEZXNjcmlwdGlvbiwgY2hhbmdlRHVlRGF0ZSwgY2hhbmdlUHJpb3JpdHksIGNoYW5nZVN0YXRlLCBnZXRJbmZvfVxuIH07XG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpbml0UHJvamVjdFRpdGxlLCBpbml0UHJvamVjdFN5bWJvbCl7XG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGluaXRQcm9qZWN0VGl0bGVcbiAgICBsZXQgcHJvamVjdFN5bWJvbCA9IGluaXRQcm9qZWN0U3ltYm9sXG4gICAgbGV0IHRhc2tzID0ge31cblxuIFxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgdGFza1RpdGxlID0gdGFzay5nZXRJbmZvKCkudGl0bGVcbiAgICAgICAgdGFza3NbdGFza1RpdGxlXSA9IHRhc2tcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrLmdldEluZm8oKS50aXRsZVxuICAgICAgICBkZWxldGUgdGFza3NbdGFza1RpdGxlXVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBtb2RpZnlUYXNrID0gKHRhc2ssIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpdGxlID0gdGFzay5nZXRJbmZvKCkudGl0bGVcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tzW2N1cnJlbnRUaXRsZV07XG4gICAgICAgIG5ld1Rhc2suY2hhbmdlVGl0bGUobmV3VGl0bGUpO1xuICAgICAgICBuZXdUYXNrLmNoYW5nZURlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgbmV3VGFzay5jaGFuZ2VEdWVEYXRlKG5ld0R1ZURhdGUpO1xuICAgICAgICBuZXdUYXNrLmNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgICAgICAgZGVsZXRlIHRhc2tzW2N1cnJlbnRUaXRsZV07XG4gICAgICAgIHRhc2tzW25ld1RpdGxlXSA9IG5ld1Rhc2s7XG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGdldFRhc2tJbmZvID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IHRhc2suZ2V0SW5mbygpLnRpdGxlXG4gICAgICAgIHJldHVybiB0YXNrc1t0YXNrVGl0bGVdLmdldEluZm8oKVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gbmV3VGl0bGVcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlUHJvamVjdFN5bWJvbCA9IChuZXdTeW1ib2wpID0+IHtcbiAgICAgICAgcHJvamVjdFN5bWJvbCA9IG5ld1N5bWJvbFxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBnZXRQcm9qZWN0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0VGl0bGUsIHByb2plY3RTeW1ib2x9XG4gICAgfVxuIFxuIFxuICAgXG4gICAgcmV0dXJuIHt0YXNrcywgYWRkVGFzaywgZGVsZXRlVGFzaywgbW9kaWZ5VGFzaywgZ2V0VGFza0luZm8sIGNoYW5nZVByb2plY3RUaXRsZSwgY2hhbmdlUHJvamVjdFN5bWJvbCwgZ2V0UHJvamVjdEluZm99XG4gfVxuIFxuIFxuIFxuIFxuIFxuIFxuIGxldCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlID0ge1xuICAgIHByb2plY3RzOiB7fSxcbiAgIFxuICAgIGFkZFByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVdID0gcHJvamVjdFxuICAgIH0sXG4gXG4gXG4gICAgcmVtb3ZlUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvamVjdHNbcHJvamVjdFRpdGxlXTtcbiAgICB9LFxuIFxuIFxuICAgIG1vZGlmeVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3QsIG5ld1RpdGxlLCBuZXdTeW1ib2wpe1xuICAgICAgICBjb25zdCBjdXJyZW50VGl0bGUgPSBwcm9qZWN0LmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSB0aGlzLnByb2plY3RzW2N1cnJlbnRUaXRsZV1cbiAgICAgICAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0VGl0bGUobmV3VGl0bGUpXG4gICAgICAgIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdFN5bWJvbChuZXdTeW1ib2wpXG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2plY3RzW2N1cnJlbnRUaXRsZV1cbiAgICAgICAgdGhpcy5wcm9qZWN0c1tuZXdUaXRsZV0gPSBuZXdQcm9qZWN0XG4gICAgfSxcbiBcbiBcbiAgICBhZGRUYXNrVG9Qcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0LCB0YXNrKXtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLnByb2plY3RUaXRsZVxuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV0uYWRkVGFzayh0YXNrKVxuICAgIH0sXG4gXG4gXG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0LCB0YXNrKXtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLnByb2plY3RUaXRsZVxuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV0uZGVsZXRlVGFzayh0YXNrKVxuICAgIH0sXG4gXG4gXG4gICAgZ2V0VGFza0luZm9Gcm9tUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCwgdGFzayl7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNbcHJvamVjdFRpdGxlXS5nZXRUYXNrSW5mbyh0YXNrKVxuICAgIH0sXG4gXG4gXG4gICAgbW9kaWZ5VGFza0Zyb21Qcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0LCB0YXNrLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLnByb2plY3RUaXRsZVxuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV0ubW9kaWZ5VGFzayh0YXNrICxuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KVxuICAgIH0sXG5cbiAgICBnZXRBbGxUYXNrczogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGFsbFRhc2tzID0ge31cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGFsbFRhc2tzW3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzXG4gICAgfSxcbiBcbiBcbiAgICBnZXRJbXBvcnRhbnRUYXNrczogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGltcG9ydGFudCA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvamVjdHMpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHByb2plY3QudGFza3MpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGFzay5nZXRJbmZvKCkucHJpb3JpdHkgPT09IFwiaW1wb3J0YW50XCIpe1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRbdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbXBvcnRhbnQ7XG4gICAgfSxcblxuXG4gICAgc29ydEJ5U3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBkb25lID0ge307XG4gICAgICAgIGxldCB0b2RvID0ge307XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdC50YXNrcykuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmdldEluZm8oKS5zdGF0ZSA9PT0gXCJ0by1kb1wiKXtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1t0YXNrLmdldEluZm8oKS50aXRsZV0gPSB0YXNrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmVbdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7ZG9uZSwgdG9kb307XG4gICAgfSxcbiAgICBcblxuXG4gICAgc29ydEJ5RGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBkdWVUb2RheSA9IHt9O1xuICAgICAgICBsZXQgZHVlVGhpc1dlZWsgPSB7fTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBlbmRPZldlZWsgPSBhZGREYXlzKHRvZGF5LCA3KTtcbiAgICBcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5nZXRJbmZvKCkuZHVlRGF0ZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzVG9kYXkodGFza0R1ZURhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1ZVRvZGF5W3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1dpdGhpbkludGVydmFsKHRhc2tEdWVEYXRlLCB7IHN0YXJ0OiB0b2RheSwgZW5kOiBlbmRPZldlZWsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZHVlVGhpc1dlZWtbdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiB7IGR1ZVRvZGF5LCBkdWVUaGlzV2VlayB9O1xuICAgIH0sXG5cbiB9XG5cblxuXG5cbmV4cG9ydCB7Y3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCwgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZX0iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBhZGREYXlzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1dpdGhpbkludGVydmFsXG4gKiBAY2F0ZWdvcnkgSW50ZXJ2YWwgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/IChJbmNsdWRpbmcgc3RhcnQgYW5kIGVuZC4pXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGludGVydmFsIC0gVGhlIGludGVydmFsIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgd2l0aGluIHRoZSBpbnRlcnZhbFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMyksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMTApLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgc3RhcnQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQsIGVuZDogZGF0ZSB9KVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBlbmQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQ6IGRhdGUsIGVuZCB9KVxuICogLy8gPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNXaXRoaW5JbnRlcnZhbChkYXRlLCBpbnRlcnZhbCkge1xuICBjb25zdCB0aW1lID0gK3RvRGF0ZShkYXRlKTtcbiAgY29uc3QgW3N0YXJ0VGltZSwgZW5kVGltZV0gPSBbXG4gICAgK3RvRGF0ZShpbnRlcnZhbC5zdGFydCksXG4gICAgK3RvRGF0ZShpbnRlcnZhbC5lbmQpLFxuICBdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICByZXR1cm4gdGltZSA+PSBzdGFydFRpbWUgJiYgdGltZSA8PSBlbmRUaW1lO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzV2l0aGluSW50ZXJ2YWw7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7Y3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCwgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZX0gZnJvbSBcIi4vbG9naWNcIlxuaW1wb3J0IHtkb219IGZyb20gXCIuL2RvbVwiXG5cblxuXG5cbiAgLy8gQ3JlYXRpbmcgVGFza3NcbmNvbnN0IHRhc2sxID0gY3JlYXRlVGFzayhcIlRhc2sgMVwiLCBcIkRlc2NyaXB0aW9uIDFcIiwgXCIyMDIyLTAxLTAxXCIsIFwiSGlnaFwiKTtcbmNvbnN0IHRhc2syID0gY3JlYXRlVGFzayhcIlRhc2sgMlwiLCBcIkRlc2NyaXB0aW9uIDJcIiwgXCIyMDIyLTAyLTAyXCIsIFwiTWVkaXVtXCIpO1xuXG4vLyBUZXN0aW5nIFRhc2sgQ3JlYXRpb25cbmNvbnNvbGUuYXNzZXJ0KHRhc2sxLmdldEluZm8oKS50aXRsZSA9PT0gXCJUYXNrIDFcIiwgXCJUYXNrIDEgY3JlYXRpb24gZmFpbGVkXCIpO1xuY29uc29sZS5hc3NlcnQodGFzazIuZ2V0SW5mbygpLnRpdGxlID09PSBcIlRhc2sgMlwiLCBcIlRhc2sgMiBjcmVhdGlvbiBmYWlsZWRcIik7XG5cbi8vIENyZWF0aW5nIFByb2plY3RzXG5jb25zdCBwcm9qZWN0MSA9IGNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IDFcIiwgXCIjXCIpO1xuY29uc3QgcHJvamVjdDIgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAyXCIsIFwiJFwiKTtcblxuLy8gVGVzdGluZyBQcm9qZWN0IENyZWF0aW9uXG5jb25zb2xlLmFzc2VydChwcm9qZWN0MS5nZXRQcm9qZWN0SW5mbygpLnByb2plY3RUaXRsZSA9PT0gXCJQcm9qZWN0IDFcIiwgXCJQcm9qZWN0IDEgY3JlYXRpb24gZmFpbGVkXCIpO1xuY29uc29sZS5hc3NlcnQocHJvamVjdDIuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGUgPT09IFwiUHJvamVjdCAyXCIsIFwiUHJvamVjdCAyIGNyZWF0aW9uIGZhaWxlZFwiKTtcblxuLy8gQWRkaW5nIFRhc2tzIHRvIFByb2plY3RzXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbnByb2plY3QyLmFkZFRhc2sodGFzazIpO1xuXG4vLyBUZXN0aW5nIEFkZGluZyBUYXNrcyB0byBQcm9qZWN0c1xuY29uc29sZS5hc3NlcnQocHJvamVjdDEudGFza3NbdGFzazEuZ2V0SW5mbygpLnRpdGxlXSA9PT0gdGFzazEsIFwiQWRkaW5nIHRhc2sxIHRvIHByb2plY3QxIGZhaWxlZFwiKTtcbmNvbnNvbGUuYXNzZXJ0KHByb2plY3QyLnRhc2tzW3Rhc2syLmdldEluZm8oKS50aXRsZV0gPT09IHRhc2syLCBcIkFkZGluZyB0YXNrMiB0byBwcm9qZWN0MiBmYWlsZWRcIik7XG5cbi8vIE1vZGlmeWluZyBUYXNrcyB3aXRoaW4gUHJvamVjdHNcbnByb2plY3QxLm1vZGlmeVRhc2sodGFzazEsIFwiVGFzayAxIE1vZGlmaWVkXCIsIFwiVXBkYXRlZCBEZXNjcmlwdGlvbiAxXCIsIFwiMjAyMi0wMy0wM1wiLCBcIkxvd1wiKTtcbmNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW1wiVGFzayAxIE1vZGlmaWVkXCJdICE9PSB1bmRlZmluZWQsIFwiTW9kaWZ5aW5nIHRhc2sxIHdpdGhpbiBwcm9qZWN0MSBmYWlsZWRcIik7XG5cblxuLy8gRGVsZXRpbmcgVGFza3MgZnJvbSBQcm9qZWN0c1xucHJvamVjdDEuZGVsZXRlVGFzayh0YXNrMSk7XG5jb25zb2xlLmFzc2VydChwcm9qZWN0MS50YXNrc1tcIlRhc2sgMSBNb2RpZmllZFwiXSA9PT0gdW5kZWZpbmVkLCBcIkRlbGV0aW5nIHRhc2sxIGZyb20gcHJvamVjdDEgZmFpbGVkXCIpO1xuXG5cbi8vIEFkZGluZyBhIFByb2plY3QgdG8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZVxudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5hZGRQcm9qZWN0KHByb2plY3QxKTtcbmNvbnNvbGUuYXNzZXJ0KHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHNbXCJQcm9qZWN0IDFcIl0gPT09IHByb2plY3QxLCBcIkFkZGluZyBwcm9qZWN0MSB0byB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlIGZhaWxlZFwiKTtcblxuLy8gTW9kaWZ5aW5nIGEgUHJvamVjdCBpbiB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlXG50aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLm1vZGlmeVByb2plY3QocHJvamVjdDEsIFwiUHJvamVjdCAxIFVwZGF0ZWRcIiwgXCJcIik7XG5jb25zb2xlLmFzc2VydCh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzW1wiUHJvamVjdCAxIFVwZGF0ZWRcIl0uZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0U3ltYm9sID09PSBcIlwiLCBcIk1vZGlmeWluZyBwcm9qZWN0MSBpbiB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlIGZhaWxlZFwiKTtcblxuLy8gUmVtb3ZpbmcgYSBQcm9qZWN0IGZyb20gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZVxudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5yZW1vdmVQcm9qZWN0KHByb2plY3QxKTtcbmNvbnNvbGUuYXNzZXJ0KHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHNbXCJQcm9qZWN0IDEgVXBkYXRlZFwiXSA9PT0gdW5kZWZpbmVkLCBcIlJlbW92aW5nIHByb2plY3QxIGZyb20gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cbi8vIFJlLWFkZGluZyB0aGUgUHJvamVjdCBhbmQgVGFzayBmb3IgRnVydGhlciBUZXN0aW5nXG50aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFByb2plY3QocHJvamVjdDEpO1xuXG4vLyBBZGRpbmcgYSBUYXNrIHRvIGEgUHJvamVjdCB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2VcbnRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0MSwgdGFzazEpO1xuY29uc29sZS5hc3NlcnQocHJvamVjdDEudGFza3NbdGFzazEuZ2V0SW5mbygpLnRpdGxlXSA9PT0gdGFzazEsIFwiQWRkaW5nIHRhc2sxIHRvIHByb2plY3QxIHRocm91Z2ggdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cblxuLy8gUmVtb3ZpbmcgYSBUYXNrIGZyb20gYSBQcm9qZWN0IHRocm91Z2ggdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZVxudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5yZW1vdmVUYXNrRnJvbVByb2plY3QocHJvamVjdDEsIHRhc2sxKTtcbmNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW3Rhc2sxLmdldEluZm8oKS50aXRsZV0gPT09IHVuZGVmaW5lZCwgXCJSZW1vdmluZyB0YXNrMSBmcm9tIHByb2plY3QxIHRocm91Z2ggdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cbi8vIC8vIEdldHRpbmcgVGFzayBJbmZvIGZyb20gYSBQcm9qZWN0IHRocm91Z2hcblxudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QxLCB0YXNrMSk7IC8vIFJlLWFkZCB0YXNrIGZvciB0ZXN0aW5nXG5jb25zdCB0YXNrSW5mbyA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuZ2V0VGFza0luZm9Gcm9tUHJvamVjdChwcm9qZWN0MSwgdGFzazEpO1xuY29uc29sZS5hc3NlcnQodGFza0luZm8gJiYgdGFza0luZm8udGl0bGUgPT09IHRhc2sxLmdldEluZm8oKS50aXRsZSwgXCJHZXR0aW5nIHRhc2sgaW5mbyBmcm9tIHByb2plY3QxIHRocm91Z2ggdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cblxuXG50aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLm1vZGlmeVRhc2tGcm9tUHJvamVjdChwcm9qZWN0MSwgdGFzazEsXCJUYXNrIDEgTW9kaWZpZWRcIiwgXCJVcGRhdGVkIERlc2NyaXB0aW9uIDFcIiwgXCIyMDI0LTAxLTIwXCIsIFwiaW1wb3J0YW50XCIpXG5cbmxldCB0YXNrMyA9IGNyZWF0ZVRhc2soXCJUYXNrIDNcIiwgXCJEZXNjcmlwdGlvbiAzXCIsIFwiMjAyNC0wMS0xN1wiLCBcImltcG9ydGFudFwiKVxudGFzazMuY2hhbmdlU3RhdGUoKVxudGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QxLCB0YXNrMylcbmNvbnNvbGUubG9nKHRhc2sxLmdldEluZm8oKS5kdWVEYXRlKVxuXG5cblxuZG9tLmFkZEV2ZW50TGlzdGVuZXJzKClcbmRvbS5zaG93UHJvamVjdHNJblNpZGViYXIoKVxuXG4vLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKVxuLy8gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuLy8gICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XG4vLyAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZCgpXG4vLyAgICAgfVxuLy8gfSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==