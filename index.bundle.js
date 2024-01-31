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
    min-height: calc(100vh - 48px);
    width: calc(100vw - 16px);
    max-width: 100vw;
    overflow-y: scroll;
  }
  
  .content{
    display: grid;
    grid-template-rows: 15vh 1fr;
    width: calc(100vw - 16px);
    max-width: 100vw;
    min-height: calc(100vh - 48px);
    overflow-y: auto;
  }


/* Header */

header{
  background-color: var(--header-bg);
  color: var(--header-text);
  padding: 20px;
  display: flex;
  align-items: center;
}

h1{
  font-size: 2.5rem;
}
  

/* Main */

main{
  place-self: stretch;
  display: flex;
  background-color: var(--main-bg);
  color: var(--main-text);
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

.title, s{
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

#info-dialog{
  min-width: 30vw;
}
#info-dialog .dialog-container{
  padding-bottom: 10px ;
}

.info-wrapper{
  display: flex;
  padding: 3vh 0px;
  border-bottom: 1px solid var(--main-text);
  width: 90%;
  align-self: center;
  gap: 2vw;
}
#info-description{
  min-height: 4vw;
  overflow-y: scroll;
}

.info-wrapper:last-of-type{
  border-bottom: none;
}

.bold{
  flex: 1;
  font-weight: 800;
}
.info-content{
  flex: 1;
}

#info-dialog p{
  color: var(--main-text);
  text-align: start;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Css reset */\n*, *::before, *::after {\n    box-sizing: border-box;\n   }\n   \n   * {\n    margin: 0;\n    padding: 0;\n    font-family: \"Varela Round\", 'Courier New', Courier, monospace;\n    /* border: 1px solid red; */\n   }\n   \n   body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    /* border: 1px solid red; */\n   }\n   \n   img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n   }\n   \n   input, button, textarea, select {\n    font: inherit;\n   }\n   \n   p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n   }\n\n   button, a{\n     cursor: pointer;\n     }\n    button{\n      background-color: transparent;\n      color: inherit;\n      outline: none;\n      border: none;\n      padding: 0px;\n    }\n\n   a{\n       text-decoration: none;\n   }\n\n   fieldset{\n    border: none;\n   }\n   ul{\n    list-style: none;\n   }\n \n   \n/* Variables */\n\n:root {\n    --main-text: #2F4F4F;\n    --main-bg: #C0C0C0;\n    --main-hover:#b8b4b4;\n    --header-bg: #918f8f;\n    --header-text: #fff;\n    --sidebar-bg: #87CEEB;\n    --sidebar-hover:#b9dfe4;\n    --sidebar-border-hover: #00b3bb;\n    --button-bg:#b2def0;\n    --border-radius: 8px;\n    --input-hover:#e0dddd;\n    --input-focus:#d4d2d2;\n  }\n\n  /* Footer */\n\n\n  html {\n    /* footer support */\n    position: relative;\n    min-height: 100%;\n  }\n  \n  \n  \n  \n  body {\n  /* footer support */\n    margin-bottom: 48px;\n  }\n  \n  \n  .footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-size: 18px;\n  }\n  \n  \n  .fa-github {\n    color: white;\n    font-size: 22px;\n    transition: transform 0.3s ease-in-out;\n  }\n  \n  \n  .fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n  }\n\n/* Styling */\n\n  body{\n    min-height: calc(100vh - 48px);\n    width: calc(100vw - 16px);\n    max-width: 100vw;\n    overflow-y: scroll;\n  }\n  \n  .content{\n    display: grid;\n    grid-template-rows: 15vh 1fr;\n    width: calc(100vw - 16px);\n    max-width: 100vw;\n    min-height: calc(100vh - 48px);\n    overflow-y: auto;\n  }\n\n\n/* Header */\n\nheader{\n  background-color: var(--header-bg);\n  color: var(--header-text);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n\nh1{\n  font-size: 2.5rem;\n}\n  \n\n/* Main */\n\nmain{\n  place-self: stretch;\n  display: flex;\n  background-color: var(--main-bg);\n  color: var(--main-text);\n}\n\n.sidebar{\n  background-color: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 4vh 2vw;\n  gap: 5vh;\n}\n\n.sidebar .sections{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar .sections button{\n  background-color: var(--button-bg);\n  font-size: 1.1rem;\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  outline: none;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  \n}\n\n.sidebar .sections button:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.sidebar .sections button.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.sidebar .projects{\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar .projects-header{\n  display: flex;\n  align-items: center;\n  \n}\n\n.sidebar .projects-header p{\n  font-size: 1.3rem;\n}\n\n.sidebar .projects-header button{\n  font-size: 1.7rem;\n  border-radius: var(--border-radius);\n  margin-left: auto;\n}\n\n.sidebar .projects-container{\n  border-top: 2px solid var(--main-text);\n  border-bottom: 2px solid var(--main-text);\n  padding: 2vh 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  overflow: auto;\n}\n\n.projects-container .project{\n  background-color: var(--button-bg);\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  display: flex;\n  gap: 5px;\n  cursor: pointer;\n}\n\n.projects-container .project:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.projects-container .project.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.project .title-of-project{\n  margin-right:auto;\n  font-size: 1.1rem;\n}\n.project .project-button{\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.main-content{\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n  padding: 2vh 4vw;\n  gap: 4vh;\n}\n\n.main-content h2{\n  text-align: center;\n  font-size: 2rem;\n}\n\n.main-wrapper{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.main-wrapper .header-wrapper{\n  display: flex;\n  width: 100%;\n\n}\n\n\n.header-wrapper .header-p{\n  align-self: flex-start;\n  margin-right: auto;\n  font-size: 1.5rem;\n  --counter-value:\"\";\n\n}\n\n.header-wrapper .header-p::after{\n  content: var(--counter-value);\n  position: relative;\n  left:2px;\n}\n\n.header-wrapper > button{\n  font-size: 1.7rem;\n}\n\n\n.tasks{\n  border-top: 2px solid var(--main-text);\n  width: 100%;\n  padding: 2vh 1vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.task{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n}\n\n.task:hover{\n  background-color: var(--main-hover);\n}\n\n.title, s{\n  margin-right: auto;\n}\n\n.task img{\n  max-width: 20px;\n  max-height: 20px;\n  aspect-ratio: 1/1;\n}\n\n\ndialog{\n  margin: auto;\n  border:none;\n  border-radius: var(--border-radius);\n}\n\n.dialog-container{\n  display: flex;\n  flex-direction: column;\n  \n}\n\ndialog .header{\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  padding-bottom: 10px;\n  border-top-right-radius: var(--border-radius);\n  border-top-left-radius: var(--border-radius);\n  background-color: var(--main-bg);\n  color: #353333;\n}\n\ndialog .header h3{\n  margin-right: auto;\n  font-size: 1.5rem;\n}\n\ndialog .header .close{\n  font-size: 2rem;\n  align-self: flex-start;\n}\n\n\nform{\n  padding: 20px;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\ninput, textarea, select{\n  border-radius: var(--border-radius);\n  border: 2px ridge var(--header-bg);\n  padding: 4px;\n  transition: 0.4s;\n}\n\n input:hover, textarea:hover, select:hover{\n  background-color: var(--input-hover);\n}\ninput:focus, textarea:focus, select:focus{\n  background-color: var(--input-focus);\n}\n\n#task-dialog ul{\n  display: flex;\n  flex-direction: column;\n  gap: 3vh;\n}\n\n#task-dialog li{\n  display: flex;\n  flex-direction: column;\n}\n\n#project-dialog ul{\n  display: flex;\n  flex-wrap: wrap;\n  \n}\n\n#project-dialog li{\n  display: flex;\n}\n#project-dialog .project-title{\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n#project-dialog .project-title input{\n  width: 100%;\n}\n\ninput[type=\"radio\"]{\n  display: none;\n}\n\n.radio-label{\n  border: 2px solid var(--sidebar-border-hover);\n  color: rgb(6, 6, 105);\n  border-radius: var(--border-radius);\n  width: 45px;\n  height: 45px;\n  text-align: center;\n  font-size: 1.7rem;\n  transition: 0.3s;\n}\n\n.radio-label:hover{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.radio-label.active{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.dialog-buttons{\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.dialog-buttons button{\n  padding: 10px;\n  border: 2px solid var(--main-bg);\n  border-radius: var(--border-radius);\n  transition: 0.4s;\n  font-weight: 700;\n}\n\nbutton.submit{\n  color: var(--sidebar-border-hover);\n  \n}\n\nbutton.submit:hover{\n  background-color: var(--sidebar-border-hover);\n  color: var(--main-text);\n}\n\nbutton.cancel{\n  color: rgb(248, 163, 163);\n}\n\nbutton.cancel:hover{\n  background-color: rgb(245, 139, 139);\n  color: var(--main-text);\n}\n\n#info-dialog{\n  min-width: 30vw;\n}\n#info-dialog .dialog-container{\n  padding-bottom: 10px ;\n}\n\n.info-wrapper{\n  display: flex;\n  padding: 3vh 0px;\n  border-bottom: 1px solid var(--main-text);\n  width: 90%;\n  align-self: center;\n  gap: 2vw;\n}\n#info-description{\n  min-height: 4vw;\n  overflow-y: scroll;\n}\n\n.info-wrapper:last-of-type{\n  border-bottom: none;\n}\n\n.bold{\n  flex: 1;\n  font-weight: 800;\n}\n.info-content{\n  flex: 1;\n}\n\n#info-dialog p{\n  color: var(--main-text);\n  text-align: start;\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _images_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/circle.svg */ "./src/images/circle.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_info_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/info.svg */ "./src/images/info.svg");
/* harmony import */ var _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/check-circle.svg */ "./src/images/check-circle.svg");









let dom = {
    displayMainContent: function(event){
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
            addButton.addEventListener("click", this.addTask.bind(this))
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
        mainDiv.addEventListener("click", this.toggleState.bind(this));
    
        const pTitle = document.createElement("p")
        pTitle.className = "title"
        pTitle.textContent = taskInfo.title
    
        const pDate = document.createElement("p")
        pDate.className = "date"
        pDate.textContent = taskInfo.dueDate
    
        const buttonEdit = document.createElement("button")
        buttonEdit.className = "left edit"
        const imgEdit = new Image()
        imgEdit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_3__
        buttonEdit.appendChild(imgEdit)
        buttonEdit.addEventListener("click", this.editTask.bind(this))
    
        const buttonTrash = document.createElement("button")
        buttonTrash.className = "left trash"
        const imgTrash = new Image()
        imgTrash.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_4__
        buttonTrash.appendChild(imgTrash)
        buttonTrash.addEventListener("click", this.removeTask.bind(this))
    
        const buttonInfo = document.createElement("button")
        buttonInfo.className = "left info"
        const imgInfo = new Image()
        imgInfo.src = _images_info_svg__WEBPACK_IMPORTED_MODULE_5__
        buttonInfo.appendChild(imgInfo)
        buttonInfo.addEventListener("click", this.showInfo.bind(this))

        const buttonComplete = document.createElement("button")
        const imgCircle = new Image()
        if(taskInfo.state === "done"){
            imgCircle.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_6__
            buttonComplete.appendChild(imgCircle)
            const strikethrough = document.createElement('s')
            strikethrough.appendChild(pTitle)
            mainDiv.appendChild(buttonComplete)
            mainDiv.appendChild(strikethrough)
        }
        else{
            imgCircle.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_2__
            buttonComplete.appendChild(imgCircle)

            mainDiv.appendChild(buttonComplete)
            mainDiv.appendChild(pTitle)
        }
        mainDiv.appendChild(pDate)
        mainDiv.appendChild(buttonEdit)
        mainDiv.appendChild(buttonTrash)
        mainDiv.appendChild(buttonInfo)
        return mainDiv
    
    },
    displayTaskDialog: function(){
        const taskDialog = document.querySelector("#task-dialog")
        taskDialog.showModal()
        const closeButton = taskDialog.querySelector(".close")
        closeButton.addEventListener("click", dom.closeDialog)
        const cancelButton = taskDialog.querySelector(".cancel")
        cancelButton.addEventListener("click", dom.closeDialog)
        const addButton = taskDialog.querySelector(".add")
        
    },
    addTask: function(){
        this.displayTaskDialog()
        function addTaskEventListener(event) {
            event.preventDefault()
            let taskTitle = event.target.elements["taskTitle"].value
            let taskDescription = event.target.elements["taskDescription"].value
            let taskDueDate = event.target.elements["taskDueDate"].value
            let taskPriority = event.target.elements["taskPriority"].value
            const newTask = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskTitle, taskDescription,taskDueDate,taskPriority)

            const currentProjectTitle= document.querySelector("h2").textContent.substring(2).trimStart()
            _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.addTaskToProject(currentProjectTitle, newTask)
            

            const divTasks = document.querySelector(".tasks")
            divTasks.appendChild(dom.createDomTask(newTask))

            const textHeader = document.querySelector(".header-p");
            let counter = 0
            divTasks.childNodes.forEach(() => counter++)
            textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')

            taskForm.reset()
            const taskDialog = document.querySelector("#task-dialog")
            taskDialog.close()
            taskForm.removeEventListener("submit", addTaskEventListener)
        }
        const taskForm = document.querySelector("#task-form")
        taskForm.addEventListener("submit",addTaskEventListener)

    },
    editTask: function(event){
        event.stopPropagation()
        this.displayTaskDialog()
        const taskForm = document.querySelector("#task-form")
        const currentTitle = event.currentTarget.parentElement.querySelector("p").textContent
        const taskInfo = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.getTaskInfoFromProject(currentTitle)
        taskForm.elements["taskTitle"].value = taskInfo.title
        taskForm.elements["taskDescription"].value = taskInfo.description
        taskForm.elements["taskDueDate"].value = taskInfo.dueDate
        taskForm.elements["taskPriority"].value = taskInfo.priority
        
        function editTaskEventListener(event) {
            event.preventDefault()
            let taskTitle = event.target.elements["taskTitle"].value
            let taskDescription = event.target.elements["taskDescription"].value
            let taskDueDate = event.target.elements["taskDueDate"].value
            let taskPriority = event.target.elements["taskPriority"].value
            let projectTitle;
            Object.values(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects).forEach((project) => {
                Object.values(project.tasks).forEach((task) => {
                    if(currentTitle === task.title){
                        projectTitle = project.projectTitle  
                    }
                })
            } )
            
            _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.modifyTaskFromProject(projectTitle,currentTitle,taskTitle,taskDescription,taskDueDate,taskPriority)
            

            const divTasks = document.querySelector(".tasks")
            divTasks.innerHTML = ""
            const textHeader = document.querySelector(".header-p");
            let counter = 0
            Object.values(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects[projectTitle].tasks).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
            textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')

            taskForm.reset()
            const taskDialog = document.querySelector("#task-dialog")
            taskDialog.close()
            taskForm.removeEventListener("submit", editTaskEventListener)
        }
        taskForm.addEventListener("submit",editTaskEventListener)
    },
    
    removeTask: function(event){
        event.stopPropagation()
        const taskTitle = event.currentTarget.parentElement.querySelector("p").textContent
        const divTasks = document.querySelector(".tasks")
        const sidebar = document.querySelector(".sidebar")
        const buttonClick = sidebar.querySelector(".active")
        divTasks.innerHTML = ""
        Object.values(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects).forEach((project) => {
            if(project.tasks[taskTitle]){
                _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.removeTaskFromProject(taskTitle)
            }
        })
        buttonClick.click()
        
    },
    showInfo: function(event){
        event.stopPropagation()
        const infoDialog = document.querySelector("#info-dialog")
        const contentParas = infoDialog.querySelectorAll(".info-content")
        const buttonCancel = infoDialog.querySelector(".close")
        const taskTitle = event.currentTarget.parentElement.querySelector("p").textContent
        const infoTask = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.getTaskInfoFromProject(taskTitle)
        infoDialog.showModal()
        buttonCancel.addEventListener("click", () => {infoDialog.close() 
        const newButton = buttonCancel.cloneNode(true)
        buttonCancel.parentNode.replaceChild(newButton, buttonCancel);})

        contentParas.forEach((para) => {
            const paraId = para.id.substring(5)
            para.textContent = infoTask[paraId]
        })

    },
    toggleState: function(event){
        let taskTitle = event.currentTarget.querySelector("p").textContent
        
        _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.toggleTaskState(taskTitle)
        if(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.getTaskInfoFromProject(taskTitle).state === "to-do" ){
            const title = event.currentTarget.querySelector("p")
            const s = title.parentElement
            s.parentElement.replaceChild(title, s)
            const imgCircle = new Image()
            imgCircle.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_2__
            const currentImage = event.currentTarget.firstElementChild.firstElementChild
            event.currentTarget.firstElementChild.replaceChild(imgCircle,currentImage)
        }
        else{
            const title = event.currentTarget.querySelector("p")
            const s = document.createElement("s")
            title.parentElement.insertBefore(s,title)
            s.appendChild(title)
            const imgCompleted = new Image()
            imgCompleted.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_6__
            const currentImage = event.currentTarget.firstElementChild.firstElementChild
            event.currentTarget.firstElementChild.replaceChild(imgCompleted,currentImage)
        }
    },





    displayProjectDialog: function(){
        const projectDialog = document.querySelector("#project-dialog")
        projectDialog.showModal()
        const closeButton = projectDialog.querySelector(".close")
        closeButton.addEventListener("click", dom.closeDialog)
        const cancelButton = projectDialog.querySelector(".cancel")
        cancelButton.addEventListener("click", dom.closeDialog)
    },
    addProject: function(){
        dom.displayProjectDialog()
        document.querySelector("#backpack").previousElementSibling.classList.add("active")
        const projectForm = document.querySelector("#project-form")
        function addProjectEventListener(event) {
            event.preventDefault()
            let projectTitle = event.target.elements["title"].value
            let projectSymbol = event.target.elements["projectSymbol"].value
            let newProject = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectTitle, projectSymbol)
            _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.addProject(newProject)
            dom.showProjectsInSidebar()
            dom.removeActiveClassFromSymbols()
            const projectDialog = document.querySelector("#project-dialog")
            const projectParas = document.querySelectorAll("p.title-of-project")
            projectParas.forEach((p) => {
                if(p.textContent.substring(3) === projectTitle){
                    p.parentElement.click()
                }
            })
            projectForm.reset()
            projectDialog.close()
            projectForm.removeEventListener("submit", addProjectEventListener)
        }

        projectForm.addEventListener("submit", addProjectEventListener)
    },

    editProject: function(event){
        event.stopPropagation()
        const projectInfo = _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects[event.currentTarget.parentElement.querySelector("p").textContent.substring(2).trimStart()].getProjectInfo()
        dom.displayProjectDialog()
        const buttonActive = document.querySelector(`input[value='${projectInfo.projectSymbol}']`).previousElementSibling
        buttonActive.classList.add("active")
        const projectForm = document.querySelector("#project-form")
        projectForm.elements["title"].value = projectInfo.projectTitle
        projectForm.elements["projectSymbol"].value = projectInfo.projectSymbol

        function editEventListener(event) {
            event.preventDefault()
            let newTitle = event.target.elements["title"].value
            let newSymbol = event.target.elements["projectSymbol"].value
            _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.modifyProject(projectInfo.projectTitle, newTitle, newSymbol)
            dom.showProjectsInSidebar()
            dom.removeActiveClassFromSymbols()
            const projectDialog = document.querySelector("#project-dialog")
            projectForm.reset()
            projectDialog.close()
            projectForm.removeEventListener("submit", editEventListener)
        }

        projectForm.addEventListener("submit", editEventListener)
    },
    deleteProject: function(event){
        event.stopPropagation()
        const projectTitle = event.currentTarget.parentElement.querySelector("p").textContent.substring("2").trimStart()
        const h2 = document.querySelector("h2").textContent.substring('2').trimStart()
        if(h2 === projectTitle){
            const buttonAll = document.querySelector("#all")
            buttonAll.click();
        }
        _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.removeProject(projectTitle)
        dom.showProjectsInSidebar()
    },
    removeActiveClassFromSidebar: function(){
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.classList.remove("active")
        })
        const projectButtons= document.querySelectorAll(".project")
        projectButtons.forEach((button) => {
            button.classList.remove("active")
        })
    },
    removeActiveClassFromSymbols: function(){
        const buttonSymbols = document.querySelectorAll(".radio-label")
        buttonSymbols.forEach((button) => {
            button.classList.remove("active")
        })
        
    },

    displayProjectInMain: function(event){
        let counter = 0
        dom.removeActiveClassFromSidebar()
        dom.displayMainContent(event)
        const divTasks = document.querySelector(".tasks")
        Object.values(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects[event.currentTarget.querySelector("p").textContent.substring(2).trimStart()].tasks).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
        event.currentTarget.classList.add("active")
        const textHeader = document.querySelector(".header-p");
        textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')
    },


    createDomProject: function(project){
        const divProject = document.createElement("div")
        divProject.classList.add("project")
        divProject.addEventListener("click", this.displayProjectInMain.bind(this))

        const pTitle = document.createElement("p")
        pTitle.classList.add("title-of-project")
        pTitle.textContent = `${project.getProjectInfo().projectSymbol} ${project.getProjectInfo().projectTitle}`

        const buttonEdit = document.createElement("button")
        buttonEdit.className = "project-button"
        const imgEdit = new Image()
        imgEdit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_3__
        buttonEdit.appendChild(imgEdit)
        buttonEdit.addEventListener("click", this.editProject.bind(this))

        const buttonTrash = document.createElement("button")
        buttonTrash.className = "project-button"
        const imgTrash = new Image()
        imgTrash.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_4__
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
    },

    closeDialog: function(event){
        let dialog = event.target.closest("dialog")
        let form = dialog.querySelector("form")
        dom.removeActiveClassFromSymbols()
        form.reset()
        dialog.close()
    },





    addEventListeners: function(){
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.addEventListener("click", dom.displayCategory)
        })
        const buttonAll = document.querySelector("#all")
        buttonAll.click();


        const addProjectButton = document.querySelector("#add-project")
        addProjectButton.addEventListener("click", dom.addProject)


        const buttonSymbols = document.querySelectorAll(".radio-label")
        buttonSymbols.forEach((button)=>{
            button.addEventListener("click", (event) => {
                dom.removeActiveClassFromSymbols()
                event.target.classList.add("active")
            })
        })
    },
    displayCategory: function(event){
        let counter = 0
        let tasksToDisplay;
        dom.removeActiveClassFromSidebar()
        dom.displayMainContent(event)
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isWithinInterval.mjs");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




function createTask(initTitle, initDescription, initDueDate, initPriority, initState = "to-do"){
    let title = initTitle
    let description = initDescription
    let dueDate = initDueDate
    let priority = initPriority
    let state = initState
 

 
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
        if(state === "done"){
            state = "to-do"
        }
        else{
            state = "done"
        }
    }
 
 
    const getInfo = () => {
        return {title, description, dueDate, priority, state};
    }
 
 
    return {
        get title(){return title;}, 
        get description(){return description;},
        get dueDate(){return dueDate;},
        get priority(){return priority;},
        get state(){return state;},
        changeTitle, changeDescription, changeDueDate, changePriority, changeState, getInfo}
 };
 
 
 
 
 
 
 
 
 
 
 function createProject(initProjectTitle, initProjectSymbol){
    let projectTitle = initProjectTitle
    let projectSymbol = initProjectSymbol
    let tasks = {}

 
    const addTask = (task) => {
        let taskTitle = task.getInfo().title
        tasks[taskTitle] = task
    }
 
 
    const deleteTask = (taskTitle) => {
        delete tasks[taskTitle]
    }
 
 
    const modifyTask = (currentTitle, newTitle, newDescription, newDueDate, newPriority) => {
        const newTask = tasks[currentTitle];
        newTask.changeTitle(newTitle);
        newTask.changeDescription(newDescription);
        newTask.changeDueDate(newDueDate);
        newTask.changePriority(newPriority);
        delete tasks[currentTitle];
        tasks[newTitle] = newTask;
    }
 
 
    const getTaskInfo = (taskTitle) => {
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
   
    return {
        get tasks(){return tasks},
        get projectTitle(){return projectTitle;}, 
        get projectSymbol(){return projectSymbol;},
        addTask, deleteTask, modifyTask, getTaskInfo, changeProjectTitle, changeProjectSymbol, getProjectInfo}
 }
 
 
 
 
 
 
 let theGodContainerOfTheUniverse = {
    projects: {},
   
    addProject: function(project){
        this.projects[project.getProjectInfo().projectTitle] = project

        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.storeInfo()
    },
 
 
    removeProject: function(projectTitle){
        delete this.projects[projectTitle];

        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.storeInfo()
    },
 
 
    modifyProject: function(currentTitle, newTitle, newSymbol){
        const newProject = this.projects[currentTitle]
        newProject.changeProjectTitle(newTitle)
        newProject.changeProjectSymbol(newSymbol)
        delete this.projects[currentTitle]
        this.projects[newTitle] = newProject

        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.storeInfo()
    },
 
 
    addTaskToProject: function(projectTitle, task){
        const newProject = this.projects[projectTitle]
        newProject.addTask(task)
        delete this.projects[projectTitle]
        this.projects[newProject.projectTitle] = newProject

        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.storeInfo()
    },

    
    removeTaskFromProject: function(taskTitle){
        
        Object.values(this.projects).forEach(project => {
            if(project.tasks[taskTitle]){
                const newProject = project
                newProject.deleteTask(taskTitle)
                delete this.projects[project.projectTitle]
                this.projects[newProject.projectTitle] = newProject 
            }
        })

        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.storeInfo()
    },
 
 
    getTaskInfoFromProject: function(taskTitle){
        let taskInfo;
        Object.values(this.projects).forEach(project => {
            if(project.tasks[taskTitle]){
                taskInfo = project.tasks[taskTitle].getInfo()
            }
        });
        return taskInfo

    },
 
 
    modifyTaskFromProject: function(projectTitle, currentTitle, newTitle, newDescription, newDueDate, newPriority){
        const newProject = this.projects[projectTitle]
        newProject.modifyTask(currentTitle,newTitle, newDescription, newDueDate, newPriority)
        delete this.projects[projectTitle]
        this.projects[newProject.projectTitle] = newProject 

        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.storeInfo()
    },

    toggleTaskState: function(taskTitle){
        Object.values(this.projects).forEach(project => {
            if(project.tasks[taskTitle]){
                const newProject = project
                newProject.tasks[taskTitle].changeState()
                delete this.projects[project.projectTitle]
                this.projects[newProject.projectTitle] = newProject 
            }
            
        });

        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.storeInfo()
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
        const endOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.addDays)(today, 7);
    
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                const taskDueDate = new Date(task.getInfo().dueDate);
    
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(taskDueDate)) {
                    dueToday[task.getInfo().title] = task;
                } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isWithinInterval)(taskDueDate, { start: today, end: endOfWeek })) {
                    dueThisWeek[task.getInfo().title] = task;
                }
            });
        });
    
        return { dueToday, dueThisWeek };
    },

 }






/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



let storage = {
    storageAvailable: function(){
        let storage;
        try {
            storage = window["localStorage"];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    },
    storeInfo: function(){
        if(this.storageAvailable()){
            localStorage.clear()
            const info = JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects);
            localStorage.setItem("projects", info)
        } 
    },
    getInfo: function(){
        const info = JSON.parse(localStorage.getItem("projects"))
        return info;
    },
    updateBackend: function(){
        if(this.storageAvailable()){
            if(localStorage.getItem("projects")){
                const info = this.getInfo()
                Object.values(info).forEach((project) => {
                    let newProject = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)(project.projectTitle, project.projectSymbol)
                    _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.addProject(newProject)
                    Object.values(project.tasks).forEach((task) => {
                        let newTask = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(task.title, task.description, task.dueDate, task.priority, task.state)
                        _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.addTaskToProject(project.projectTitle, newTask)
                    })
                }
                )
            }
        } 
    },
    displayContent: function(){
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.showProjectsInSidebar()
        const buttonAll = document.querySelector("#all")
        buttonAll.click();
    }
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");








//   // Creating Tasks
// const task1 = createTask("Task 1", "Description 1", "2022-01-01", "High");
// const task2 = createTask("Task 2", "Description 2", "2022-02-02", "Medium");

// // Testing Task Creation
// console.assert(task1.getInfo().title === "Task 1", "Task 1 creation failed");
// console.assert(task2.getInfo().title === "Task 2", "Task 2 creation failed");

// // Creating Projects
// const project1 = createProject("Project 1", "$");
// const project2 = createProject("Project 2", "$");

// // Testing Project Creation
// console.assert(project1.getProjectInfo().projectTitle === "Project 1", "Project 1 creation failed");
// console.assert(project2.getProjectInfo().projectTitle === "Project 2", "Project 2 creation failed");

// // Adding Tasks to Projects
// project1.addTask(task1);
// project2.addTask(task2);

// // Testing Adding Tasks to Projects
// console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 failed");
// console.assert(project2.tasks[task2.getInfo().title] === task2, "Adding task2 to project2 failed");

// // Modifying Tasks within Projects
// project1.modifyTask("Task 1", "Task 1 Modified", "Updated Description 1", "2022-03-03", "Low");
// console.assert(project1.tasks["Task 1 Modified"] !== undefined, "Modifying task1 within project1 failed");


// // Deleting Tasks from Projects
// project1.deleteTask("Task 1 Modified");
// console.assert(project1.tasks["Task 1 Modified"] === undefined, "Deleting task1 from project1 failed");


// // Adding a Project to theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.addProject(project1);
// console.assert(theGodContainerOfTheUniverse.projects["Project 1"] === project1, "Adding project1 to theGodContainerOfTheUniverse failed");

// // Modifying a Project in theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.modifyProject("Project 1", "Project 1 Updated", "");
// console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"].getProjectInfo().projectSymbol === "", "Modifying project1 in theGodContainerOfTheUniverse failed");

// console.log(theGodContainerOfTheUniverse.projects["Project 1 Updated"].projectTitle)
// // Removing a Project from theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.removeProject("Project 1 Updated");
// console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"] === undefined, "Removing project1 from theGodContainerOfTheUniverse failed");


// // Re-adding the Project and Task for Further Testing
// theGodContainerOfTheUniverse.addProject(project1);
// theGodContainerOfTheUniverse.addProject(project2)

// // Adding a Task to a Project through theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.addTaskToProject("Project 1 Updated", task1);
// console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 through theGodContainerOfTheUniverse failed");


// console.log(theGodContainerOfTheUniverse)
// // // Removing a Task from a Project through theGodContainerOfTheUniverse
// // theGodContainerOfTheUniverse.removeTaskFromProject("Project 1 Updated", 'Task 1 Modified');
// // console.assert(project1.tasks[task1.getInfo().title] === undefined, "Removing task1 from project1 through theGodContainerOfTheUniverse failed");

// // // Getting Task Info from a Project through

// console.log("task1",task1)
// theGodContainerOfTheUniverse.addTaskToProject(project1, task1); // Re-add task for testing

// const taskInfo = theGodContainerOfTheUniverse.getTaskInfoFromProject("Project 1 Updated", "Task 1");
// console.assert(taskInfo && taskInfo.title === task1.getInfo().title, "Getting task info from project1 through theGodContainerOfTheUniverse failed");



// theGodContainerOfTheUniverse.modifyTaskFromProject("Project 1", "Task 1","Task 1 Modified", "Updated Description 1", "2024-01-20", "important")

// let task3 = createTask("Task 3", "Description 3", "2024-01-17", "important")
// theGodContainerOfTheUniverse.addTaskToProject("Project 1", task3)
// console.log(task1.getInfo().dueDate)

window.addEventListener("load", () => {
    _storage__WEBPACK_IMPORTED_MODULE_3__.storage.updateBackend()
    _storage__WEBPACK_IMPORTED_MODULE_3__.storage.displayContent()
})

_dom__WEBPACK_IMPORTED_MODULE_2__.dom.addEventListeners()
_dom__WEBPACK_IMPORTED_MODULE_2__.dom.showProjectsInSidebar()




// // const button = document.querySelector("#all")
// // button.addEventListener("click", () => {
// //     const mainContainer = document.querySelector('.main-content');

// //     while(mainContainer.firstChild){
// //     mainContainer.removeChild()
// //     }
// // })




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPLHFGQUFxRixLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxRQUFRLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxVQUFVLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFB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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUVBQW1FOztBQUVuRTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2Q0FBTztBQUNYLElBQUksNkNBQU87QUFDWCxDQUFDOztBQUVELHFDQUFHO0FBQ0gscUNBQUc7Ozs7O0FBS0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZERheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzV2l0aGluSW50ZXJ2YWwubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDc3MgcmVzZXQgKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICB9XG4gICBcbiAgICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgfVxuICAgXG4gICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgIH1cbiAgIFxuICAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgIH1cbiAgIFxuICAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgIH1cbiAgIFxuICAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgIH1cblxuICAgYnV0dG9uLCBhe1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgIH1cbiAgICBidXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG5cbiAgIGF7XG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgfVxuXG4gICBmaWVsZHNldHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICB9XG4gICB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgfVxuIFxuICAgXG4vKiBWYXJpYWJsZXMgKi9cblxuOnJvb3Qge1xuICAgIC0tbWFpbi10ZXh0OiAjMkY0RjRGO1xuICAgIC0tbWFpbi1iZzogI0MwQzBDMDtcbiAgICAtLW1haW4taG92ZXI6I2I4YjRiNDtcbiAgICAtLWhlYWRlci1iZzogIzkxOGY4ZjtcbiAgICAtLWhlYWRlci10ZXh0OiAjZmZmO1xuICAgIC0tc2lkZWJhci1iZzogIzg3Q0VFQjtcbiAgICAtLXNpZGViYXItaG92ZXI6I2I5ZGZlNDtcbiAgICAtLXNpZGViYXItYm9yZGVyLWhvdmVyOiAjMDBiM2JiO1xuICAgIC0tYnV0dG9uLWJnOiNiMmRlZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1pbnB1dC1ob3ZlcjojZTBkZGRkO1xuICAgIC0taW5wdXQtZm9jdXM6I2Q0ZDJkMjtcbiAgfVxuXG4gIC8qIEZvb3RlciAqL1xuXG5cbiAgaHRtbCB7XG4gICAgLyogZm9vdGVyIHN1cHBvcnQgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgYm9keSB7XG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgfVxuICBcbiAgXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgXG4gIC5mYS1naXRodWIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIFxuICAuZmEtZ2l0aHViOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XG4gIH1cblxuLyogU3R5bGluZyAqL1xuXG4gIGJvZHl7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCk7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgXG4gIC5jb250ZW50e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDFmcjtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cHgpO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuXG4vKiBIZWFkZXIgKi9cblxuaGVhZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmcpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMXtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG4gIFxuXG4vKiBNYWluICovXG5cbm1haW57XG4gIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcbn1cblxuLnNpZGViYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA0dmggMnZ3O1xuICBnYXA6IDV2aDtcbn1cblxuLnNpZGViYXIgLnNlY3Rpb25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5zaWRlYmFyIC5zZWN0aW9ucyBidXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIFxufVxuXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyKTtcbiAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XG59XG5cbi5zaWRlYmFyIC5zZWN0aW9ucyBidXR0b24uYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0c3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgcHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgYnV0dG9ue1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc2lkZWJhciAucHJvamVjdHMtY29udGFpbmVye1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XG4gIHBhZGRpbmc6IDJ2aCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyKTtcbiAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QuYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XG59XG5cbi5wcm9qZWN0IC50aXRsZS1vZi1wcm9qZWN0e1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ucHJvamVjdCAucHJvamVjdC1idXR0b257XG4gIGhlaWdodDogMjBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG59XG5cbi5tYWluLWNvbnRlbnR7XG4gIGZsZXg6IDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAydmggNHZ3O1xuICBnYXA6IDR2aDtcbn1cblxuLm1haW4tY29udGVudCBoMntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5tYWluLXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi13cmFwcGVyIC5oZWFkZXItd3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuXG4uaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1we1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICAtLWNvdW50ZXItdmFsdWU6XCJcIjtcblxufVxuXG4uaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1wOjphZnRlcntcbiAgY29udGVudDogdmFyKC0tY291bnRlci12YWx1ZSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDoycHg7XG59XG5cbi5oZWFkZXItd3JhcHBlciA+IGJ1dHRvbntcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cblxuLnRhc2tze1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2aCAxdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNre1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgcGFkZGluZzogNnB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnRhc2s6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taG92ZXIpO1xufVxuXG4udGl0bGUsIHN7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRhc2sgaW1ne1xuICBtYXgtd2lkdGg6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDIwcHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG5cbmRpYWxvZ3tcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5kaWFsb2ctY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbn1cblxuZGlhbG9nIC5oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbiAgY29sb3I6ICMzNTMzMzM7XG59XG5cbmRpYWxvZyAuaGVhZGVyIGgze1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5kaWFsb2cgLmhlYWRlciAuY2xvc2V7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuXG5mb3Jte1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3R7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXI6IDJweCByaWRnZSB2YXIoLS1oZWFkZXItYmcpO1xuICBwYWRkaW5nOiA0cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbiBpbnB1dDpob3ZlciwgdGV4dGFyZWE6aG92ZXIsIHNlbGVjdDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtaG92ZXIpO1xufVxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbn1cblxuI3Rhc2stZGlhbG9nIHVse1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDN2aDtcbn1cblxuI3Rhc2stZGlhbG9nIGxpe1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jcHJvamVjdC1kaWFsb2cgdWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgXG59XG5cbiNwcm9qZWN0LWRpYWxvZyBsaXtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNwcm9qZWN0LWRpYWxvZyAucHJvamVjdC10aXRsZXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3Byb2plY3QtZGlhbG9nIC5wcm9qZWN0LXRpdGxlIGlucHV0e1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJde1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmFkaW8tbGFiZWx7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbiAgY29sb3I6IHJnYig2LCA2LCAxMDUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnJhZGlvLWxhYmVsOmhvdmVye1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNiwgNiwgMTA1KTtcbn1cblxuLnJhZGlvLWxhYmVsLmFjdGl2ZXtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDYsIDYsIDEwNSk7XG59XG5cbi5kaWFsb2ctYnV0dG9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZGlhbG9nLWJ1dHRvbnMgYnV0dG9ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmJ1dHRvbi5zdWJtaXR7XG4gIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XG4gIFxufVxuXG5idXR0b24uc3VibWl0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xufVxuXG5idXR0b24uY2FuY2Vse1xuICBjb2xvcjogcmdiKDI0OCwgMTYzLCAxNjMpO1xufVxuXG5idXR0b24uY2FuY2VsOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMzksIDEzOSk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xufVxuXG4jaW5mby1kaWFsb2d7XG4gIG1pbi13aWR0aDogMzB2dztcbn1cbiNpbmZvLWRpYWxvZyAuZGlhbG9nLWNvbnRhaW5lcntcbiAgcGFkZGluZy1ib3R0b206IDEwcHggO1xufVxuXG4uaW5mby13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAzdmggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcbiAgd2lkdGg6IDkwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBnYXA6IDJ2dztcbn1cbiNpbmZvLWRlc2NyaXB0aW9ue1xuICBtaW4taGVpZ2h0OiA0dnc7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmluZm8td3JhcHBlcjpsYXN0LW9mLXR5cGV7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5ib2xke1xuICBmbGV4OiAxO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmluZm8tY29udGVudHtcbiAgZmxleDogMTtcbn1cblxuI2luZm8tZGlhbG9nIHB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0lBQ0ksc0JBQXNCO0dBQ3ZCOztHQUVBO0lBQ0MsU0FBUztJQUNULFVBQVU7SUFDViw4REFBOEQ7SUFDOUQsMkJBQTJCO0dBQzVCOztHQUVBO0lBQ0MsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQywyQkFBMkI7R0FDNUI7O0dBRUE7SUFDQyxjQUFjO0lBQ2QsZUFBZTtHQUNoQjs7R0FFQTtJQUNDLGFBQWE7R0FDZDs7R0FFQTtJQUNDLHlCQUF5QjtHQUMxQjs7R0FFQTtLQUNFLGVBQWU7S0FDZjtJQUNEO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7TUFDZCxhQUFhO01BQ2IsWUFBWTtNQUNaLFlBQVk7SUFDZDs7R0FFRDtPQUNJLHFCQUFxQjtHQUN6Qjs7R0FFQTtJQUNDLFlBQVk7R0FDYjtHQUNBO0lBQ0MsZ0JBQWdCO0dBQ2pCOzs7QUFHSCxjQUFjOztBQUVkO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIs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QUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7O0FBRXBDOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6QyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3NzIHJlc2V0ICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgfVxcbiAgIFxcbiAgICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVmFyZWxhIFJvdW5kXFxcIiwgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgfVxcbiAgIFxcbiAgIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgIH1cXG4gICBcXG4gICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgfVxcbiAgIFxcbiAgIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgIH1cXG4gICBcXG4gICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICB9XFxuXFxuICAgYnV0dG9uLCBhe1xcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgfVxcbiAgICBidXR0b257XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuXFxuICAgYXtcXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgIH1cXG5cXG4gICBmaWVsZHNldHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgIH1cXG4gICB1bHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICB9XFxuIFxcbiAgIFxcbi8qIFZhcmlhYmxlcyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLXRleHQ6ICMyRjRGNEY7XFxuICAgIC0tbWFpbi1iZzogI0MwQzBDMDtcXG4gICAgLS1tYWluLWhvdmVyOiNiOGI0YjQ7XFxuICAgIC0taGVhZGVyLWJnOiAjOTE4ZjhmO1xcbiAgICAtLWhlYWRlci10ZXh0OiAjZmZmO1xcbiAgICAtLXNpZGViYXItYmc6ICM4N0NFRUI7XFxuICAgIC0tc2lkZWJhci1ob3ZlcjojYjlkZmU0O1xcbiAgICAtLXNpZGViYXItYm9yZGVyLWhvdmVyOiAjMDBiM2JiO1xcbiAgICAtLWJ1dHRvbi1iZzojYjJkZWYwO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgLS1pbnB1dC1ob3ZlcjojZTBkZGRkO1xcbiAgICAtLWlucHV0LWZvY3VzOiNkNGQyZDI7XFxuICB9XFxuXFxuICAvKiBGb290ZXIgKi9cXG5cXG5cXG4gIGh0bWwge1xcbiAgICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIFxcbiAgXFxuICBcXG4gIGJvZHkge1xcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICBcXG4gIFxcbiAgLmZhLWdpdGh1YiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbiAgfVxcblxcbi8qIFN0eWxpbmcgKi9cXG5cXG4gIGJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnB4KTtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgfVxcbiAgXFxuICAuY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDFmcjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnB4KTtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4gIFxcblxcbi8qIE1haW4gKi9cXG5cXG5tYWlue1xcbiAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogNHZoIDJ2dztcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4uc2lkZWJhciAuc2VjdGlvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIFxcbn1cXG5cXG4uc2lkZWJhciAuc2VjdGlvbnMgYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XFxuICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG59XFxuXFxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbi5hY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgcHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGJ1dHRvbntcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWNvbnRhaW5lcntcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XFxuICBwYWRkaW5nOiAydmggMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDF2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0OmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlcik7XFxuICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdC5hY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xcbn1cXG5cXG4ucHJvamVjdCAudGl0bGUtb2YtcHJvamVjdHtcXG4gIG1hcmdpbi1yaWdodDphdXRvO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi5wcm9qZWN0IC5wcm9qZWN0LWJ1dHRvbntcXG4gIGhlaWdodDogMjBweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgZmxleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMnZoIDR2dztcXG4gIGdhcDogNHZoO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIgLmhlYWRlci13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG5cXG4uaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1we1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgLS1jb3VudGVyLXZhbHVlOlxcXCJcXFwiO1xcblxcbn1cXG5cXG4uaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1wOjphZnRlcntcXG4gIGNvbnRlbnQ6IHZhcigtLWNvdW50ZXItdmFsdWUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDoycHg7XFxufVxcblxcbi5oZWFkZXItd3JhcHBlciA+IGJ1dHRvbntcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG5cXG4udGFza3N7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMnZoIDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFza3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ob3Zlcik7XFxufVxcblxcbi50aXRsZSwgc3tcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2sgaW1ne1xcbiAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgbWF4LWhlaWdodDogMjBweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG5cXG5kaWFsb2d7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6bm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgXFxufVxcblxcbmRpYWxvZyAuaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgY29sb3I6ICMzNTMzMzM7XFxufVxcblxcbmRpYWxvZyAuaGVhZGVyIGgze1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmRpYWxvZyAuaGVhZGVyIC5jbG9zZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcblxcbmZvcm17XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3R7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlcjogMnB4IHJpZGdlIHZhcigtLWhlYWRlci1iZyk7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4gaW5wdXQ6aG92ZXIsIHRleHRhcmVhOmhvdmVyLCBzZWxlY3Q6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1ob3Zlcik7XFxufVxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3Vze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xcbn1cXG5cXG4jdGFzay1kaWFsb2cgdWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3ZoO1xcbn1cXG5cXG4jdGFzay1kaWFsb2cgbGl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIHVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIFxcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgbGl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jcHJvamVjdC1kaWFsb2cgLnByb2plY3QtdGl0bGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0LWRpYWxvZyAucHJvamVjdC10aXRsZSBpbnB1dHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJde1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJhZGlvLWxhYmVse1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xcbiAgY29sb3I6IHJnYig2LCA2LCAxMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJhZGlvLWxhYmVsOmhvdmVye1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDYsIDYsIDEwNSk7XFxufVxcblxcbi5yYWRpby1sYWJlbC5hY3RpdmV7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNiwgNiwgMTA1KTtcXG59XFxuXFxuLmRpYWxvZy1idXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kaWFsb2ctYnV0dG9ucyBidXR0b257XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1iZyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5idXR0b24uc3VibWl0e1xcbiAgY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG4gIFxcbn1cXG5cXG5idXR0b24uc3VibWl0OmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XFxufVxcblxcbmJ1dHRvbi5jYW5jZWx7XFxuICBjb2xvcjogcmdiKDI0OCwgMTYzLCAxNjMpO1xcbn1cXG5cXG5idXR0b24uY2FuY2VsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTM5LCAxMzkpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XFxufVxcblxcbiNpbmZvLWRpYWxvZ3tcXG4gIG1pbi13aWR0aDogMzB2dztcXG59XFxuI2luZm8tZGlhbG9nIC5kaWFsb2ctY29udGFpbmVye1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHggO1xcbn1cXG5cXG4uaW5mby13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDN2aCAwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcXG4gIHdpZHRoOiA5MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBnYXA6IDJ2dztcXG59XFxuI2luZm8tZGVzY3JpcHRpb257XFxuICBtaW4taGVpZ2h0OiA0dnc7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5pbmZvLXdyYXBwZXI6bGFzdC1vZi10eXBle1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLmJvbGR7XFxuICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmluZm8tY29udGVudHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNpbmZvLWRpYWxvZyBwe1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVRhc2ssIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UsIGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBjaXJjbGUgZnJvbSBcIi4vaW1hZ2VzL2NpcmNsZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuL2ltYWdlcy9lZGl0LnN2Z1wiO1xuaW1wb3J0IHRyYXNoQ2FuIGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCJcbmltcG9ydCBpbmZvIGZyb20gXCIuL2ltYWdlcy9pbmZvLnN2Z1wiXG5pbXBvcnQgY29tcGxldGVkIGZyb20gXCIuL2ltYWdlcy9jaGVjay1jaXJjbGUuc3ZnXCJcblxuXG5sZXQgZG9tID0ge1xuICAgIGRpc3BsYXlNYWluQ29udGVudDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIFxuICAgICAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluV3JhcHBlci5jbGFzc05hbWUgPSAnbWFpbi13cmFwcGVyJztcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJXcmFwcGVyLmNsYXNzTmFtZSA9ICdoZWFkZXItd3JhcHBlcic7XG4gICAgXG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuICAgICAgICBoZWFkZXJUZXh0LmNsYXNzTmFtZSA9IFwiaGVhZGVyLXBcIlxuICAgICAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgIFxuICAgICAgICBjb25zdCBhcnJheU5hbWVzID0gW1wiYWxsXCIsXCJ0b2RheVwiLCBcIndlZWtcIiwgXCJpbXBvcnRhbnRcIiwgXCJjb21wbGV0ZWRcIiwgXCJ0b2RvXCJdXG4gICAgICAgIGxldCBpc0luQXJyYXkgPSBhcnJheU5hbWVzLmluY2x1ZGVzKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgIGlmKGlzSW5BcnJheSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGQtdGFzayc7XG4gICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAn4oqVJztcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykpXG4gICAgICAgICAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGRpdlRhc2tzLmNsYXNzTmFtZSA9IFwidGFza3NcIlxuICBcbiAgICBcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoMik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbldyYXBwZXIpO1xuICAgICAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXJXcmFwcGVyKTtcbiAgICAgICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoZGl2VGFza3MpXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbldyYXBwZXIpXG4gICAgfSxcbiAgICBjcmVhdGVEb21UYXNrOiBmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrLmdldEluZm8oKVxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWFpbkRpdi5jbGFzc05hbWUgPSBcInRhc2tcIlxuICAgICAgICBtYWluRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZVN0YXRlLmJpbmQodGhpcykpO1xuICAgIFxuICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwVGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiXG4gICAgICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvLnRpdGxlXG4gICAgXG4gICAgICAgIGNvbnN0IHBEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcERhdGUuY2xhc3NOYW1lID0gXCJkYXRlXCJcbiAgICAgICAgcERhdGUudGV4dENvbnRlbnQgPSB0YXNrSW5mby5kdWVEYXRlXG4gICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbkVkaXQuY2xhc3NOYW1lID0gXCJsZWZ0IGVkaXRcIlxuICAgICAgICBjb25zdCBpbWdFZGl0ID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nRWRpdC5zcmMgPSBlZGl0XG4gICAgICAgIGJ1dHRvbkVkaXQuYXBwZW5kQ2hpbGQoaW1nRWRpdClcbiAgICAgICAgYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5lZGl0VGFzay5iaW5kKHRoaXMpKVxuICAgIFxuICAgICAgICBjb25zdCBidXR0b25UcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uVHJhc2guY2xhc3NOYW1lID0gXCJsZWZ0IHRyYXNoXCJcbiAgICAgICAgY29uc3QgaW1nVHJhc2ggPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWdUcmFzaC5zcmMgPSB0cmFzaENhblxuICAgICAgICBidXR0b25UcmFzaC5hcHBlbmRDaGlsZChpbWdUcmFzaClcbiAgICAgICAgYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVtb3ZlVGFzay5iaW5kKHRoaXMpKVxuICAgIFxuICAgICAgICBjb25zdCBidXR0b25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b25JbmZvLmNsYXNzTmFtZSA9IFwibGVmdCBpbmZvXCJcbiAgICAgICAgY29uc3QgaW1nSW5mbyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZ0luZm8uc3JjID0gaW5mb1xuICAgICAgICBidXR0b25JbmZvLmFwcGVuZENoaWxkKGltZ0luZm8pXG4gICAgICAgIGJ1dHRvbkluZm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd0luZm8uYmluZCh0aGlzKSlcblxuICAgICAgICBjb25zdCBidXR0b25Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgaW1nQ2lyY2xlID0gbmV3IEltYWdlKClcbiAgICAgICAgaWYodGFza0luZm8uc3RhdGUgPT09IFwiZG9uZVwiKXtcbiAgICAgICAgICAgIGltZ0NpcmNsZS5zcmMgPSBjb21wbGV0ZWRcbiAgICAgICAgICAgIGJ1dHRvbkNvbXBsZXRlLmFwcGVuZENoaWxkKGltZ0NpcmNsZSlcbiAgICAgICAgICAgIGNvbnN0IHN0cmlrZXRocm91Z2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzJylcbiAgICAgICAgICAgIHN0cmlrZXRocm91Z2guYXBwZW5kQ2hpbGQocFRpdGxlKVxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25Db21wbGV0ZSlcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc3RyaWtldGhyb3VnaClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaW1nQ2lyY2xlLnNyYyA9IGNpcmNsZVxuICAgICAgICAgICAgYnV0dG9uQ29tcGxldGUuYXBwZW5kQ2hpbGQoaW1nQ2lyY2xlKVxuXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbXBsZXRlKVxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwVGl0bGUpXG4gICAgICAgIH1cbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwRGF0ZSlcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25FZGl0KVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvblRyYXNoKVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkluZm8pXG4gICAgICAgIHJldHVybiBtYWluRGl2XG4gICAgXG4gICAgfSxcbiAgICBkaXNwbGF5VGFza0RpYWxvZzogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kaWFsb2dcIilcbiAgICAgICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHRhc2tEaWFsb2cucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKVxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsb3NlRGlhbG9nKVxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0YXNrRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsb3NlRGlhbG9nKVxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSB0YXNrRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpXG4gICAgICAgIFxuICAgIH0sXG4gICAgYWRkVGFzazogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFza0RpYWxvZygpXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRhc2tFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGFza1RpdGxlXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGFza0Rlc2NyaXB0aW9uXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgdGFza0R1ZURhdGUgPSBldmVudC50YXJnZXQuZWxlbWVudHNbXCJ0YXNrRHVlRGF0ZVwiXS52YWx1ZVxuICAgICAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInRhc2tQcmlvcml0eVwiXS52YWx1ZVxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sdGFza0R1ZURhdGUsdGFza1ByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQuc3Vic3RyaW5nKDIpLnRyaW1TdGFydCgpXG4gICAgICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFRhc2tUb1Byb2plY3QoY3VycmVudFByb2plY3RUaXRsZSwgbmV3VGFzaylcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjb25zdCBkaXZUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIilcbiAgICAgICAgICAgIGRpdlRhc2tzLmFwcGVuZENoaWxkKGRvbS5jcmVhdGVEb21UYXNrKG5ld1Rhc2spKVxuXG4gICAgICAgICAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItcFwiKTtcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMFxuICAgICAgICAgICAgZGl2VGFza3MuY2hpbGROb2Rlcy5mb3JFYWNoKCgpID0+IGNvdW50ZXIrKylcbiAgICAgICAgICAgIHRleHRIZWFkZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY291bnRlci12YWx1ZScsICdcIignICsgY291bnRlciArICcpXCInKVxuXG4gICAgICAgICAgICB0YXNrRm9ybS5yZXNldCgpXG4gICAgICAgICAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRpYWxvZ1wiKVxuICAgICAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICB0YXNrRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZFRhc2tFdmVudExpc3RlbmVyKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIilcbiAgICAgICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLGFkZFRhc2tFdmVudExpc3RlbmVyKVxuXG4gICAgfSxcbiAgICBlZGl0VGFzazogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLmRpc3BsYXlUYXNrRGlhbG9nKClcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKVxuICAgICAgICBjb25zdCBjdXJyZW50VGl0bGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgdGFza0luZm8gPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldFRhc2tJbmZvRnJvbVByb2plY3QoY3VycmVudFRpdGxlKVxuICAgICAgICB0YXNrRm9ybS5lbGVtZW50c1tcInRhc2tUaXRsZVwiXS52YWx1ZSA9IHRhc2tJbmZvLnRpdGxlXG4gICAgICAgIHRhc2tGb3JtLmVsZW1lbnRzW1widGFza0Rlc2NyaXB0aW9uXCJdLnZhbHVlID0gdGFza0luZm8uZGVzY3JpcHRpb25cbiAgICAgICAgdGFza0Zvcm0uZWxlbWVudHNbXCJ0YXNrRHVlRGF0ZVwiXS52YWx1ZSA9IHRhc2tJbmZvLmR1ZURhdGVcbiAgICAgICAgdGFza0Zvcm0uZWxlbWVudHNbXCJ0YXNrUHJpb3JpdHlcIl0udmFsdWUgPSB0YXNrSW5mby5wcmlvcml0eVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZWRpdFRhc2tFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGFza1RpdGxlXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGFza0Rlc2NyaXB0aW9uXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgdGFza0R1ZURhdGUgPSBldmVudC50YXJnZXQuZWxlbWVudHNbXCJ0YXNrRHVlRGF0ZVwiXS52YWx1ZVxuICAgICAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInRhc2tQcmlvcml0eVwiXS52YWx1ZVxuICAgICAgICAgICAgbGV0IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0cykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdC50YXNrcykuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50VGl0bGUgPT09IHRhc2sudGl0bGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlID0gcHJvamVjdC5wcm9qZWN0VGl0bGUgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLm1vZGlmeVRhc2tGcm9tUHJvamVjdChwcm9qZWN0VGl0bGUsY3VycmVudFRpdGxlLHRhc2tUaXRsZSx0YXNrRGVzY3JpcHRpb24sdGFza0R1ZURhdGUsdGFza1ByaW9yaXR5KVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxuICAgICAgICAgICAgZGl2VGFza3MuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXBcIik7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1twcm9qZWN0VGl0bGVdLnRhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXZUYXNrcy5hcHBlbmRDaGlsZChkb20uY3JlYXRlRG9tVGFzayh0YXNrKSlcbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KVxuICAgICAgICAgICAgdGV4dEhlYWRlci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb3VudGVyLXZhbHVlJywgJ1wiKCcgKyBjb3VudGVyICsgJylcIicpXG5cbiAgICAgICAgICAgIHRhc2tGb3JtLnJlc2V0KClcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGlhbG9nXCIpXG4gICAgICAgICAgICB0YXNrRGlhbG9nLmNsb3NlKClcbiAgICAgICAgICAgIHRhc2tGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZWRpdFRhc2tFdmVudExpc3RlbmVyKVxuICAgICAgICB9XG4gICAgICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixlZGl0VGFza0V2ZW50TGlzdGVuZXIpXG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVUYXNrOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudFxuICAgICAgICBjb25zdCBkaXZUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIilcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKVxuICAgICAgICBjb25zdCBidXR0b25DbGljayA9IHNpZGViYXIucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIilcbiAgICAgICAgZGl2VGFza3MuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBPYmplY3QudmFsdWVzKHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmKHByb2plY3QudGFza3NbdGFza1RpdGxlXSl7XG4gICAgICAgICAgICAgICAgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5yZW1vdmVUYXNrRnJvbVByb2plY3QodGFza1RpdGxlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBidXR0b25DbGljay5jbGljaygpXG4gICAgICAgIFxuICAgIH0sXG4gICAgc2hvd0luZm86IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgaW5mb0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5mby1kaWFsb2dcIilcbiAgICAgICAgY29uc3QgY29udGVudFBhcmFzID0gaW5mb0RpYWxvZy5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZm8tY29udGVudFwiKVxuICAgICAgICBjb25zdCBidXR0b25DYW5jZWwgPSBpbmZvRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIilcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IGluZm9UYXNrID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5nZXRUYXNrSW5mb0Zyb21Qcm9qZWN0KHRhc2tUaXRsZSlcbiAgICAgICAgaW5mb0RpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgICBidXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtpbmZvRGlhbG9nLmNsb3NlKCkgXG4gICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IGJ1dHRvbkNhbmNlbC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgYnV0dG9uQ2FuY2VsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0J1dHRvbiwgYnV0dG9uQ2FuY2VsKTt9KVxuXG4gICAgICAgIGNvbnRlbnRQYXJhcy5mb3JFYWNoKChwYXJhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhSWQgPSBwYXJhLmlkLnN1YnN0cmluZyg1KVxuICAgICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGluZm9UYXNrW3BhcmFJZF1cbiAgICAgICAgfSlcblxuICAgIH0sXG4gICAgdG9nZ2xlU3RhdGU6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnRcbiAgICAgICAgXG4gICAgICAgIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UudG9nZ2xlVGFza1N0YXRlKHRhc2tUaXRsZSlcbiAgICAgICAgaWYodGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5nZXRUYXNrSW5mb0Zyb21Qcm9qZWN0KHRhc2tUaXRsZSkuc3RhdGUgPT09IFwidG8tZG9cIiApe1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpXG4gICAgICAgICAgICBjb25zdCBzID0gdGl0bGUucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgcy5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aXRsZSwgcylcbiAgICAgICAgICAgIGNvbnN0IGltZ0NpcmNsZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgICAgICBpbWdDaXJjbGUuc3JjID0gY2lyY2xlXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW1hZ2UgPSBldmVudC5jdXJyZW50VGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLnJlcGxhY2VDaGlsZChpbWdDaXJjbGUsY3VycmVudEltYWdlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcInBcIilcbiAgICAgICAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic1wiKVxuICAgICAgICAgICAgdGl0bGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocyx0aXRsZSlcbiAgICAgICAgICAgIHMuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgICAgICBjb25zdCBpbWdDb21wbGV0ZWQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICAgICAgaW1nQ29tcGxldGVkLnNyYyA9IGNvbXBsZXRlZFxuICAgICAgICAgICAgY29uc3QgY3VycmVudEltYWdlID0gZXZlbnQuY3VycmVudFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5yZXBsYWNlQ2hpbGQoaW1nQ29tcGxldGVkLGN1cnJlbnRJbWFnZSlcbiAgICAgICAgfVxuICAgIH0sXG5cblxuXG5cblxuICAgIGRpc3BsYXlQcm9qZWN0RGlhbG9nOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRpYWxvZ1wiKVxuICAgICAgICBwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gcHJvamVjdERpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpXG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uY2xvc2VEaWFsb2cpXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHByb2plY3REaWFsb2cucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIilcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uY2xvc2VEaWFsb2cpXG4gICAgfSxcbiAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbigpe1xuICAgICAgICBkb20uZGlzcGxheVByb2plY3REaWFsb2coKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2twYWNrXCIpLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtXCIpXG4gICAgICAgIGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGl0bGVcIl0udmFsdWVcbiAgICAgICAgICAgIGxldCBwcm9qZWN0U3ltYm9sID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1wicHJvamVjdFN5bWJvbFwiXS52YWx1ZVxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSwgcHJvamVjdFN5bWJvbClcbiAgICAgICAgICAgIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkUHJvamVjdChuZXdQcm9qZWN0KVxuICAgICAgICAgICAgZG9tLnNob3dQcm9qZWN0c0luU2lkZWJhcigpXG4gICAgICAgICAgICBkb20ucmVtb3ZlQWN0aXZlQ2xhc3NGcm9tU3ltYm9scygpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRpYWxvZ1wiKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFBhcmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInAudGl0bGUtb2YtcHJvamVjdFwiKVxuICAgICAgICAgICAgcHJvamVjdFBhcmFzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICBpZihwLnRleHRDb250ZW50LnN1YnN0cmluZygzKSA9PT0gcHJvamVjdFRpdGxlKXtcbiAgICAgICAgICAgICAgICAgICAgcC5wYXJlbnRFbGVtZW50LmNsaWNrKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKVxuICAgICAgICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZFByb2plY3RFdmVudExpc3RlbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRQcm9qZWN0RXZlbnRMaXN0ZW5lcilcbiAgICB9LFxuXG4gICAgZWRpdFByb2plY3Q6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzW2V2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMikudHJpbVN0YXJ0KCldLmdldFByb2plY3RJbmZvKClcbiAgICAgICAgZG9tLmRpc3BsYXlQcm9qZWN0RGlhbG9nKClcbiAgICAgICAgY29uc3QgYnV0dG9uQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9JyR7cHJvamVjdEluZm8ucHJvamVjdFN5bWJvbH0nXWApLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICAgICAgYnV0dG9uQWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybVwiKVxuICAgICAgICBwcm9qZWN0Rm9ybS5lbGVtZW50c1tcInRpdGxlXCJdLnZhbHVlID0gcHJvamVjdEluZm8ucHJvamVjdFRpdGxlXG4gICAgICAgIHByb2plY3RGb3JtLmVsZW1lbnRzW1wicHJvamVjdFN5bWJvbFwiXS52YWx1ZSA9IHByb2plY3RJbmZvLnByb2plY3RTeW1ib2xcblxuICAgICAgICBmdW5jdGlvbiBlZGl0RXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IG5ld1RpdGxlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGl0bGVcIl0udmFsdWVcbiAgICAgICAgICAgIGxldCBuZXdTeW1ib2wgPSBldmVudC50YXJnZXQuZWxlbWVudHNbXCJwcm9qZWN0U3ltYm9sXCJdLnZhbHVlXG4gICAgICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLm1vZGlmeVByb2plY3QocHJvamVjdEluZm8ucHJvamVjdFRpdGxlLCBuZXdUaXRsZSwgbmV3U3ltYm9sKVxuICAgICAgICAgICAgZG9tLnNob3dQcm9qZWN0c0luU2lkZWJhcigpXG4gICAgICAgICAgICBkb20ucmVtb3ZlQWN0aXZlQ2xhc3NGcm9tU3ltYm9scygpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRpYWxvZ1wiKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKVxuICAgICAgICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGVkaXRFdmVudExpc3RlbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0RXZlbnRMaXN0ZW5lcilcbiAgICB9LFxuICAgIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50LnN1YnN0cmluZyhcIjJcIikudHJpbVN0YXJ0KClcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQuc3Vic3RyaW5nKCcyJykudHJpbVN0YXJ0KClcbiAgICAgICAgaWYoaDIgPT09IHByb2plY3RUaXRsZSl7XG4gICAgICAgICAgICBjb25zdCBidXR0b25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKVxuICAgICAgICAgICAgYnV0dG9uQWxsLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5yZW1vdmVQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgZG9tLnNob3dQcm9qZWN0c0luU2lkZWJhcigpXG4gICAgfSxcbiAgICByZW1vdmVBY3RpdmVDbGFzc0Zyb21TaWRlYmFyOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjYXRlZ29yeUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LWJ1dHRvblwiKVxuICAgICAgICBjYXRlZ29yeUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpXG4gICAgICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUFjdGl2ZUNsYXNzRnJvbVN5bWJvbHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJ1dHRvblN5bWJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvLWxhYmVsXCIpXG4gICAgICAgIGJ1dHRvblN5bWJvbHMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9LFxuXG4gICAgZGlzcGxheVByb2plY3RJbk1haW46IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgICAgIGRvbS5yZW1vdmVBY3RpdmVDbGFzc0Zyb21TaWRlYmFyKClcbiAgICAgICAgZG9tLmRpc3BsYXlNYWluQ29udGVudChldmVudClcbiAgICAgICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1tldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50LnN1YnN0cmluZygyKS50cmltU3RhcnQoKV0udGFza3MpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpdlRhc2tzLmFwcGVuZENoaWxkKGRvbS5jcmVhdGVEb21UYXNrKHRhc2spKVxuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH0pXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItcFwiKTtcbiAgICAgICAgdGV4dEhlYWRlci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb3VudGVyLXZhbHVlJywgJ1wiKCcgKyBjb3VudGVyICsgJylcIicpXG4gICAgfSxcblxuXG4gICAgY3JlYXRlRG9tUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IGRpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGRpdlByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcbiAgICAgICAgZGl2UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5kaXNwbGF5UHJvamVjdEluTWFpbi5iaW5kKHRoaXMpKVxuXG4gICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHBUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtb2YtcHJvamVjdFwiKVxuICAgICAgICBwVGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LmdldFByb2plY3RJbmZvKCkucHJvamVjdFN5bWJvbH0gJHtwcm9qZWN0LmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlfWBcblxuICAgICAgICBjb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b25FZGl0LmNsYXNzTmFtZSA9IFwicHJvamVjdC1idXR0b25cIlxuICAgICAgICBjb25zdCBpbWdFZGl0ID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nRWRpdC5zcmMgPSBlZGl0XG4gICAgICAgIGJ1dHRvbkVkaXQuYXBwZW5kQ2hpbGQoaW1nRWRpdClcbiAgICAgICAgYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5lZGl0UHJvamVjdC5iaW5kKHRoaXMpKVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvblRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b25UcmFzaC5jbGFzc05hbWUgPSBcInByb2plY3QtYnV0dG9uXCJcbiAgICAgICAgY29uc3QgaW1nVHJhc2ggPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWdUcmFzaC5zcmMgPSB0cmFzaENhblxuICAgICAgICBidXR0b25UcmFzaC5hcHBlbmRDaGlsZChpbWdUcmFzaClcbiAgICAgICAgYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpKVxuXG4gICAgICAgIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQocFRpdGxlKVxuICAgICAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGJ1dHRvbkVkaXQpXG4gICAgICAgIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoYnV0dG9uVHJhc2gpXG5cbiAgICAgICAgcmV0dXJuIGRpdlByb2plY3RcbiAgICB9LFxuICAgIHNob3dQcm9qZWN0c0luU2lkZWJhcjogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKVxuICAgICAgICB3aGlsZShwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURvbVByb2plY3QocHJvamVjdCkpXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGNsb3NlRGlhbG9nOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCBkaWFsb2cgPSBldmVudC50YXJnZXQuY2xvc2VzdChcImRpYWxvZ1wiKVxuICAgICAgICBsZXQgZm9ybSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgICAgICBkb20ucmVtb3ZlQWN0aXZlQ2xhc3NGcm9tU3ltYm9scygpXG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgICAgICBkaWFsb2cuY2xvc2UoKVxuICAgIH0sXG5cblxuXG5cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjYXRlZ29yeUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LWJ1dHRvblwiKVxuICAgICAgICBjYXRlZ29yeUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbS5kaXNwbGF5Q2F0ZWdvcnkpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsXCIpXG4gICAgICAgIGJ1dHRvbkFsbC5jbGljaygpO1xuXG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIilcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmFkZFByb2plY3QpXG5cblxuICAgICAgICBjb25zdCBidXR0b25TeW1ib2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWRpby1sYWJlbFwiKVxuICAgICAgICBidXR0b25TeW1ib2xzLmZvckVhY2goKGJ1dHRvbik9PntcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZUFjdGl2ZUNsYXNzRnJvbVN5bWJvbHMoKVxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgZGlzcGxheUNhdGVnb3J5OiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCBjb3VudGVyID0gMFxuICAgICAgICBsZXQgdGFza3NUb0Rpc3BsYXk7XG4gICAgICAgIGRvbS5yZW1vdmVBY3RpdmVDbGFzc0Zyb21TaWRlYmFyKClcbiAgICAgICAgZG9tLmRpc3BsYXlNYWluQ29udGVudChldmVudClcbiAgICAgICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJhbGxcIil7XG4gICAgICAgICAgICB0YXNrc1RvRGlzcGxheSA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuZ2V0QWxsVGFza3MoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcInRvZGF5XCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnNvcnRCeURhdGUoKS5kdWVUb2RheVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcIndlZWtcIil7XG4gICAgICAgICAgICB0YXNrc1RvRGlzcGxheSA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Uuc29ydEJ5RGF0ZSgpLmR1ZVRoaXNXZWVrXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09IFwiaW1wb3J0YW50XCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldEltcG9ydGFudFRhc2tzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJ0b2RvXCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnNvcnRCeVN0YXRlKCkudG9kb1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImNvbXBsZXRlZFwiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5zb3J0QnlTdGF0ZSgpLmRvbmVcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QudmFsdWVzKHRhc2tzVG9EaXNwbGF5KS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXZUYXNrcy5hcHBlbmRDaGlsZChkb20uY3JlYXRlRG9tVGFzayh0YXNrKSlcbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KVxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBjb25zdCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItcFwiKTtcbiAgICAgICAgdGV4dEhlYWRlci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb3VudGVyLXZhbHVlJywgJ1wiKCcgKyBjb3VudGVyICsgJylcIicpXG4gICAgfSxcbn1cblxuXG5cbmV4cG9ydCB7ZG9tfVxuXG5cbiIsImltcG9ydCB7IGlzVG9kYXksIGlzV2l0aGluSW50ZXJ2YWwsIGFkZERheXMsIGZvcm1hdCwgc2V0IH0gZnJvbSBcImRhdGUtZm5zXCJcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soaW5pdFRpdGxlLCBpbml0RGVzY3JpcHRpb24sIGluaXREdWVEYXRlLCBpbml0UHJpb3JpdHksIGluaXRTdGF0ZSA9IFwidG8tZG9cIil7XG4gICAgbGV0IHRpdGxlID0gaW5pdFRpdGxlXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gaW5pdERlc2NyaXB0aW9uXG4gICAgbGV0IGR1ZURhdGUgPSBpbml0RHVlRGF0ZVxuICAgIGxldCBwcmlvcml0eSA9IGluaXRQcmlvcml0eVxuICAgIGxldCBzdGF0ZSA9IGluaXRTdGF0ZVxuIFxuXG4gXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5XG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGNoYW5nZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZihzdGF0ZSA9PT0gXCJkb25lXCIpe1xuICAgICAgICAgICAgc3RhdGUgPSBcInRvLWRvXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3RhdGUgPSBcImRvbmVcIlxuICAgICAgICB9XG4gICAgfVxuIFxuIFxuICAgIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdGV9O1xuICAgIH1cbiBcbiBcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgdGl0bGUoKXtyZXR1cm4gdGl0bGU7fSwgXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpe3JldHVybiBkZXNjcmlwdGlvbjt9LFxuICAgICAgICBnZXQgZHVlRGF0ZSgpe3JldHVybiBkdWVEYXRlO30sXG4gICAgICAgIGdldCBwcmlvcml0eSgpe3JldHVybiBwcmlvcml0eTt9LFxuICAgICAgICBnZXQgc3RhdGUoKXtyZXR1cm4gc3RhdGU7fSxcbiAgICAgICAgY2hhbmdlVGl0bGUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcml0eSwgY2hhbmdlU3RhdGUsIGdldEluZm99XG4gfTtcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGluaXRQcm9qZWN0VGl0bGUsIGluaXRQcm9qZWN0U3ltYm9sKXtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gaW5pdFByb2plY3RUaXRsZVxuICAgIGxldCBwcm9qZWN0U3ltYm9sID0gaW5pdFByb2plY3RTeW1ib2xcbiAgICBsZXQgdGFza3MgPSB7fVxuXG4gXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrLmdldEluZm8oKS50aXRsZVxuICAgICAgICB0YXNrc1t0YXNrVGl0bGVdID0gdGFza1xuICAgIH1cbiBcbiBcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tUaXRsZSkgPT4ge1xuICAgICAgICBkZWxldGUgdGFza3NbdGFza1RpdGxlXVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBtb2RpZnlUYXNrID0gKGN1cnJlbnRUaXRsZSwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza3NbY3VycmVudFRpdGxlXTtcbiAgICAgICAgbmV3VGFzay5jaGFuZ2VUaXRsZShuZXdUaXRsZSk7XG4gICAgICAgIG5ld1Rhc2suY2hhbmdlRGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdUYXNrLmNoYW5nZUR1ZURhdGUobmV3RHVlRGF0ZSk7XG4gICAgICAgIG5ld1Rhc2suY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpO1xuICAgICAgICBkZWxldGUgdGFza3NbY3VycmVudFRpdGxlXTtcbiAgICAgICAgdGFza3NbbmV3VGl0bGVdID0gbmV3VGFzaztcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgZ2V0VGFza0luZm8gPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrc1t0YXNrVGl0bGVdLmdldEluZm8oKVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gbmV3VGl0bGVcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlUHJvamVjdFN5bWJvbCA9IChuZXdTeW1ib2wpID0+IHtcbiAgICAgICAgcHJvamVjdFN5bWJvbCA9IG5ld1N5bWJvbFxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBnZXRQcm9qZWN0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0VGl0bGUsIHByb2plY3RTeW1ib2x9XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHRhc2tzKCl7cmV0dXJuIHRhc2tzfSxcbiAgICAgICAgZ2V0IHByb2plY3RUaXRsZSgpe3JldHVybiBwcm9qZWN0VGl0bGU7fSwgXG4gICAgICAgIGdldCBwcm9qZWN0U3ltYm9sKCl7cmV0dXJuIHByb2plY3RTeW1ib2w7fSxcbiAgICAgICAgYWRkVGFzaywgZGVsZXRlVGFzaywgbW9kaWZ5VGFzaywgZ2V0VGFza0luZm8sIGNoYW5nZVByb2plY3RUaXRsZSwgY2hhbmdlUHJvamVjdFN5bWJvbCwgZ2V0UHJvamVjdEluZm99XG4gfVxuIFxuIFxuIFxuIFxuIFxuIFxuIGxldCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlID0ge1xuICAgIHByb2plY3RzOiB7fSxcbiAgIFxuICAgIGFkZFByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVdID0gcHJvamVjdFxuXG4gICAgICAgIHN0b3JhZ2Uuc3RvcmVJbmZvKClcbiAgICB9LFxuIFxuIFxuICAgIHJlbW92ZVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3RUaXRsZSl7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV07XG5cbiAgICAgICAgc3RvcmFnZS5zdG9yZUluZm8oKVxuICAgIH0sXG4gXG4gXG4gICAgbW9kaWZ5UHJvamVjdDogZnVuY3Rpb24oY3VycmVudFRpdGxlLCBuZXdUaXRsZSwgbmV3U3ltYm9sKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHRoaXMucHJvamVjdHNbY3VycmVudFRpdGxlXVxuICAgICAgICBuZXdQcm9qZWN0LmNoYW5nZVByb2plY3RUaXRsZShuZXdUaXRsZSlcbiAgICAgICAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0U3ltYm9sKG5ld1N5bWJvbClcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvamVjdHNbY3VycmVudFRpdGxlXVxuICAgICAgICB0aGlzLnByb2plY3RzW25ld1RpdGxlXSA9IG5ld1Byb2plY3RcblxuICAgICAgICBzdG9yYWdlLnN0b3JlSW5mbygpXG4gICAgfSxcbiBcbiBcbiAgICBhZGRUYXNrVG9Qcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0VGl0bGUsIHRhc2spe1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdGhpcy5wcm9qZWN0c1twcm9qZWN0VGl0bGVdXG4gICAgICAgIG5ld1Byb2plY3QuYWRkVGFzayh0YXNrKVxuICAgICAgICBkZWxldGUgdGhpcy5wcm9qZWN0c1twcm9qZWN0VGl0bGVdXG4gICAgICAgIHRoaXMucHJvamVjdHNbbmV3UHJvamVjdC5wcm9qZWN0VGl0bGVdID0gbmV3UHJvamVjdFxuXG4gICAgICAgIHN0b3JhZ2Uuc3RvcmVJbmZvKClcbiAgICB9LFxuXG4gICAgXG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0OiBmdW5jdGlvbih0YXNrVGl0bGUpe1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC50YXNrc1t0YXNrVGl0bGVdKXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuZGVsZXRlVGFzayh0YXNrVGl0bGUpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvamVjdHNbcHJvamVjdC5wcm9qZWN0VGl0bGVdXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0c1tuZXdQcm9qZWN0LnByb2plY3RUaXRsZV0gPSBuZXdQcm9qZWN0IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHN0b3JhZ2Uuc3RvcmVJbmZvKClcbiAgICB9LFxuIFxuIFxuICAgIGdldFRhc2tJbmZvRnJvbVByb2plY3Q6IGZ1bmN0aW9uKHRhc2tUaXRsZSl7XG4gICAgICAgIGxldCB0YXNrSW5mbztcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC50YXNrc1t0YXNrVGl0bGVdKXtcbiAgICAgICAgICAgICAgICB0YXNrSW5mbyA9IHByb2plY3QudGFza3NbdGFza1RpdGxlXS5nZXRJbmZvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrSW5mb1xuXG4gICAgfSxcbiBcbiBcbiAgICBtb2RpZnlUYXNrRnJvbVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3RUaXRsZSwgY3VycmVudFRpdGxlLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHRoaXMucHJvamVjdHNbcHJvamVjdFRpdGxlXVxuICAgICAgICBuZXdQcm9qZWN0Lm1vZGlmeVRhc2soY3VycmVudFRpdGxlLG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpXG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV1cbiAgICAgICAgdGhpcy5wcm9qZWN0c1tuZXdQcm9qZWN0LnByb2plY3RUaXRsZV0gPSBuZXdQcm9qZWN0IFxuXG4gICAgICAgIHN0b3JhZ2Uuc3RvcmVJbmZvKClcbiAgICB9LFxuXG4gICAgdG9nZ2xlVGFza1N0YXRlOiBmdW5jdGlvbih0YXNrVGl0bGUpe1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvamVjdHMpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZihwcm9qZWN0LnRhc2tzW3Rhc2tUaXRsZV0pe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC50YXNrc1t0YXNrVGl0bGVdLmNoYW5nZVN0YXRlKClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wcm9qZWN0c1twcm9qZWN0LnByb2plY3RUaXRsZV1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzW25ld1Byb2plY3QucHJvamVjdFRpdGxlXSA9IG5ld1Byb2plY3QgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RvcmFnZS5zdG9yZUluZm8oKVxuICAgIH0sXG5cbiAgICBnZXRBbGxUYXNrczogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGFsbFRhc2tzID0ge31cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGFsbFRhc2tzW3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzXG4gICAgfSxcbiBcbiBcbiAgICBnZXRJbXBvcnRhbnRUYXNrczogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGltcG9ydGFudCA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvamVjdHMpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHByb2plY3QudGFza3MpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGFzay5nZXRJbmZvKCkucHJpb3JpdHkgPT09IFwiaW1wb3J0YW50XCIpe1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRbdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbXBvcnRhbnQ7XG4gICAgfSxcblxuXG4gICAgc29ydEJ5U3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBkb25lID0ge307XG4gICAgICAgIGxldCB0b2RvID0ge307XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdC50YXNrcykuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmdldEluZm8oKS5zdGF0ZSA9PT0gXCJ0by1kb1wiKXtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1t0YXNrLmdldEluZm8oKS50aXRsZV0gPSB0YXNrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmVbdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7ZG9uZSwgdG9kb307XG4gICAgfSxcbiAgICBcblxuXG4gICAgc29ydEJ5RGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBkdWVUb2RheSA9IHt9O1xuICAgICAgICBsZXQgZHVlVGhpc1dlZWsgPSB7fTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBlbmRPZldlZWsgPSBhZGREYXlzKHRvZGF5LCA3KTtcbiAgICBcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5nZXRJbmZvKCkuZHVlRGF0ZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzVG9kYXkodGFza0R1ZURhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1ZVRvZGF5W3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1dpdGhpbkludGVydmFsKHRhc2tEdWVEYXRlLCB7IHN0YXJ0OiB0b2RheSwgZW5kOiBlbmRPZldlZWsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZHVlVGhpc1dlZWtbdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiB7IGR1ZVRvZGF5LCBkdWVUaGlzV2VlayB9O1xuICAgIH0sXG5cbiB9XG5cblxuXG5cbmV4cG9ydCB7Y3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCwgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZX0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUYXNrLCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi9kb21cIlxuXG5sZXQgc3RvcmFnZSA9IHtcbiAgICBzdG9yYWdlQXZhaWxhYmxlOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgc3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbXCJsb2NhbFN0b3JhZ2VcIl07XG4gICAgICAgICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0b3JlSW5mbzogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5zdG9yYWdlQXZhaWxhYmxlKCkpe1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgaW5mbylcbiAgICAgICAgfSBcbiAgICB9LFxuICAgIGdldEluZm86IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH0sXG4gICAgdXBkYXRlQmFja2VuZDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5zdG9yYWdlQXZhaWxhYmxlKCkpe1xuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0SW5mbygpXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhpbmZvKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0LnByb2plY3RUaXRsZSwgcHJvamVjdC5wcm9qZWN0U3ltYm9sKVxuICAgICAgICAgICAgICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFByb2plY3QobmV3UHJvamVjdClcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2sodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCB0YXNrLnN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QucHJvamVjdFRpdGxlLCBuZXdUYXNrKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfSxcbiAgICBkaXNwbGF5Q29udGVudDogZnVuY3Rpb24oKXtcbiAgICAgICAgZG9tLnNob3dQcm9qZWN0c0luU2lkZWJhcigpXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsXCIpXG4gICAgICAgIGJ1dHRvbkFsbC5jbGljaygpO1xuICAgIH1cbn1cblxuXG5leHBvcnR7c3RvcmFnZX1cblxuXG5cbiAgIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBOYU4pO1xuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gX2RhdGU7XG4gIH1cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkRGF5cztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBpbnRlcnZhbCAtIFRoZSBpbnRlcnZhbCB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWxcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDMpLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIHN0YXJ0OlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0LCBlbmQ6IGRhdGUgfSlcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgZW5kOlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0OiBkYXRlLCBlbmQgfSlcbiAqIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgaW50ZXJ2YWwpIHtcbiAgY29uc3QgdGltZSA9ICt0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IFtzdGFydFRpbWUsIGVuZFRpbWVdID0gW1xuICAgICt0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpLFxuICAgICt0b0RhdGUoaW50ZXJ2YWwuZW5kKSxcbiAgXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1dpdGhpbkludGVydmFsO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQge2NyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QsIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2V9IGZyb20gXCIuL2xvZ2ljXCJcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIlxuXG5cblxuXG4vLyAgIC8vIENyZWF0aW5nIFRhc2tzXG4vLyBjb25zdCB0YXNrMSA9IGNyZWF0ZVRhc2soXCJUYXNrIDFcIiwgXCJEZXNjcmlwdGlvbiAxXCIsIFwiMjAyMi0wMS0wMVwiLCBcIkhpZ2hcIik7XG4vLyBjb25zdCB0YXNrMiA9IGNyZWF0ZVRhc2soXCJUYXNrIDJcIiwgXCJEZXNjcmlwdGlvbiAyXCIsIFwiMjAyMi0wMi0wMlwiLCBcIk1lZGl1bVwiKTtcblxuLy8gLy8gVGVzdGluZyBUYXNrIENyZWF0aW9uXG4vLyBjb25zb2xlLmFzc2VydCh0YXNrMS5nZXRJbmZvKCkudGl0bGUgPT09IFwiVGFzayAxXCIsIFwiVGFzayAxIGNyZWF0aW9uIGZhaWxlZFwiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHRhc2syLmdldEluZm8oKS50aXRsZSA9PT0gXCJUYXNrIDJcIiwgXCJUYXNrIDIgY3JlYXRpb24gZmFpbGVkXCIpO1xuXG4vLyAvLyBDcmVhdGluZyBQcm9qZWN0c1xuLy8gY29uc3QgcHJvamVjdDEgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxXCIsIFwiJFwiKTtcbi8vIGNvbnN0IHByb2plY3QyID0gY3JlYXRlUHJvamVjdChcIlByb2plY3QgMlwiLCBcIiRcIik7XG5cbi8vIC8vIFRlc3RpbmcgUHJvamVjdCBDcmVhdGlvblxuLy8gY29uc29sZS5hc3NlcnQocHJvamVjdDEuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGUgPT09IFwiUHJvamVjdCAxXCIsIFwiUHJvamVjdCAxIGNyZWF0aW9uIGZhaWxlZFwiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHByb2plY3QyLmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlID09PSBcIlByb2plY3QgMlwiLCBcIlByb2plY3QgMiBjcmVhdGlvbiBmYWlsZWRcIik7XG5cbi8vIC8vIEFkZGluZyBUYXNrcyB0byBQcm9qZWN0c1xuLy8gcHJvamVjdDEuYWRkVGFzayh0YXNrMSk7XG4vLyBwcm9qZWN0Mi5hZGRUYXNrKHRhc2syKTtcblxuLy8gLy8gVGVzdGluZyBBZGRpbmcgVGFza3MgdG8gUHJvamVjdHNcbi8vIGNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW3Rhc2sxLmdldEluZm8oKS50aXRsZV0gPT09IHRhc2sxLCBcIkFkZGluZyB0YXNrMSB0byBwcm9qZWN0MSBmYWlsZWRcIik7XG4vLyBjb25zb2xlLmFzc2VydChwcm9qZWN0Mi50YXNrc1t0YXNrMi5nZXRJbmZvKCkudGl0bGVdID09PSB0YXNrMiwgXCJBZGRpbmcgdGFzazIgdG8gcHJvamVjdDIgZmFpbGVkXCIpO1xuXG4vLyAvLyBNb2RpZnlpbmcgVGFza3Mgd2l0aGluIFByb2plY3RzXG4vLyBwcm9qZWN0MS5tb2RpZnlUYXNrKFwiVGFzayAxXCIsIFwiVGFzayAxIE1vZGlmaWVkXCIsIFwiVXBkYXRlZCBEZXNjcmlwdGlvbiAxXCIsIFwiMjAyMi0wMy0wM1wiLCBcIkxvd1wiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW1wiVGFzayAxIE1vZGlmaWVkXCJdICE9PSB1bmRlZmluZWQsIFwiTW9kaWZ5aW5nIHRhc2sxIHdpdGhpbiBwcm9qZWN0MSBmYWlsZWRcIik7XG5cblxuLy8gLy8gRGVsZXRpbmcgVGFza3MgZnJvbSBQcm9qZWN0c1xuLy8gcHJvamVjdDEuZGVsZXRlVGFzayhcIlRhc2sgMSBNb2RpZmllZFwiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW1wiVGFzayAxIE1vZGlmaWVkXCJdID09PSB1bmRlZmluZWQsIFwiRGVsZXRpbmcgdGFzazEgZnJvbSBwcm9qZWN0MSBmYWlsZWRcIik7XG5cblxuLy8gLy8gQWRkaW5nIGEgUHJvamVjdCB0byB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlXG4vLyB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFByb2plY3QocHJvamVjdDEpO1xuLy8gY29uc29sZS5hc3NlcnQodGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1tcIlByb2plY3QgMVwiXSA9PT0gcHJvamVjdDEsIFwiQWRkaW5nIHByb2plY3QxIHRvIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG4vLyAvLyBNb2RpZnlpbmcgYSBQcm9qZWN0IGluIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Vcbi8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UubW9kaWZ5UHJvamVjdChcIlByb2plY3QgMVwiLCBcIlByb2plY3QgMSBVcGRhdGVkXCIsIFwiXCIpO1xuLy8gY29uc29sZS5hc3NlcnQodGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1tcIlByb2plY3QgMSBVcGRhdGVkXCJdLmdldFByb2plY3RJbmZvKCkucHJvamVjdFN5bWJvbCA9PT0gXCJcIiwgXCJNb2RpZnlpbmcgcHJvamVjdDEgaW4gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cbi8vIGNvbnNvbGUubG9nKHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHNbXCJQcm9qZWN0IDEgVXBkYXRlZFwiXS5wcm9qZWN0VGl0bGUpXG4vLyAvLyBSZW1vdmluZyBhIFByb2plY3QgZnJvbSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlXG4vLyB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnJlbW92ZVByb2plY3QoXCJQcm9qZWN0IDEgVXBkYXRlZFwiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHNbXCJQcm9qZWN0IDEgVXBkYXRlZFwiXSA9PT0gdW5kZWZpbmVkLCBcIlJlbW92aW5nIHByb2plY3QxIGZyb20gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cblxuLy8gLy8gUmUtYWRkaW5nIHRoZSBQcm9qZWN0IGFuZCBUYXNrIGZvciBGdXJ0aGVyIFRlc3Rpbmdcbi8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkUHJvamVjdChwcm9qZWN0MSk7XG4vLyB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFByb2plY3QocHJvamVjdDIpXG5cbi8vIC8vIEFkZGluZyBhIFRhc2sgdG8gYSBQcm9qZWN0IHRocm91Z2ggdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZVxuLy8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5hZGRUYXNrVG9Qcm9qZWN0KFwiUHJvamVjdCAxIFVwZGF0ZWRcIiwgdGFzazEpO1xuLy8gY29uc29sZS5hc3NlcnQocHJvamVjdDEudGFza3NbdGFzazEuZ2V0SW5mbygpLnRpdGxlXSA9PT0gdGFzazEsIFwiQWRkaW5nIHRhc2sxIHRvIHByb2plY3QxIHRocm91Z2ggdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cblxuLy8gY29uc29sZS5sb2codGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSlcbi8vIC8vIC8vIFJlbW92aW5nIGEgVGFzayBmcm9tIGEgUHJvamVjdCB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Vcbi8vIC8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucmVtb3ZlVGFza0Zyb21Qcm9qZWN0KFwiUHJvamVjdCAxIFVwZGF0ZWRcIiwgJ1Rhc2sgMSBNb2RpZmllZCcpO1xuLy8gLy8gY29uc29sZS5hc3NlcnQocHJvamVjdDEudGFza3NbdGFzazEuZ2V0SW5mbygpLnRpdGxlXSA9PT0gdW5kZWZpbmVkLCBcIlJlbW92aW5nIHRhc2sxIGZyb20gcHJvamVjdDEgdGhyb3VnaCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlIGZhaWxlZFwiKTtcblxuLy8gLy8gLy8gR2V0dGluZyBUYXNrIEluZm8gZnJvbSBhIFByb2plY3QgdGhyb3VnaFxuXG4vLyBjb25zb2xlLmxvZyhcInRhc2sxXCIsdGFzazEpXG4vLyB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFRhc2tUb1Byb2plY3QocHJvamVjdDEsIHRhc2sxKTsgLy8gUmUtYWRkIHRhc2sgZm9yIHRlc3RpbmdcblxuLy8gY29uc3QgdGFza0luZm8gPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldFRhc2tJbmZvRnJvbVByb2plY3QoXCJQcm9qZWN0IDEgVXBkYXRlZFwiLCBcIlRhc2sgMVwiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHRhc2tJbmZvICYmIHRhc2tJbmZvLnRpdGxlID09PSB0YXNrMS5nZXRJbmZvKCkudGl0bGUsIFwiR2V0dGluZyB0YXNrIGluZm8gZnJvbSBwcm9qZWN0MSB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG5cblxuLy8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5tb2RpZnlUYXNrRnJvbVByb2plY3QoXCJQcm9qZWN0IDFcIiwgXCJUYXNrIDFcIixcIlRhc2sgMSBNb2RpZmllZFwiLCBcIlVwZGF0ZWQgRGVzY3JpcHRpb24gMVwiLCBcIjIwMjQtMDEtMjBcIiwgXCJpbXBvcnRhbnRcIilcblxuLy8gbGV0IHRhc2szID0gY3JlYXRlVGFzayhcIlRhc2sgM1wiLCBcIkRlc2NyaXB0aW9uIDNcIiwgXCIyMDI0LTAxLTE3XCIsIFwiaW1wb3J0YW50XCIpXG4vLyB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFRhc2tUb1Byb2plY3QoXCJQcm9qZWN0IDFcIiwgdGFzazMpXG4vLyBjb25zb2xlLmxvZyh0YXNrMS5nZXRJbmZvKCkuZHVlRGF0ZSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBzdG9yYWdlLnVwZGF0ZUJhY2tlbmQoKVxuICAgIHN0b3JhZ2UuZGlzcGxheUNvbnRlbnQoKVxufSlcblxuZG9tLmFkZEV2ZW50TGlzdGVuZXJzKClcbmRvbS5zaG93UHJvamVjdHNJblNpZGViYXIoKVxuXG5cblxuXG4vLyAvLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKVxuLy8gLy8gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAvLyAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuLy8gLy8gICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XG4vLyAvLyAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZCgpXG4vLyAvLyAgICAgfVxuLy8gLy8gfSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==