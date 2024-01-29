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


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Css reset */\n*, *::before, *::after {\n    box-sizing: border-box;\n   }\n   \n   * {\n    margin: 0;\n    padding: 0;\n    font-family: \"Varela Round\", 'Courier New', Courier, monospace;\n    /* border: 1px solid red; */\n   }\n   \n   body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    /* border: 1px solid red; */\n   }\n   \n   img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n   }\n   \n   input, button, textarea, select {\n    font: inherit;\n   }\n   \n   p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n   }\n\n   button, a{\n     cursor: pointer;\n     }\n    button{\n      background-color: transparent;\n      color: inherit;\n      outline: none;\n      border: none;\n      padding: 0px;\n    }\n\n   a{\n       text-decoration: none;\n   }\n\n   fieldset{\n    border: none;\n   }\n   ul{\n    list-style: none;\n   }\n \n   \n/* Variables */\n\n:root {\n    --main-text: #2F4F4F;\n    --main-bg: #C0C0C0;\n    --main-hover:#b8b4b4;\n    --header-bg: #918f8f;\n    --header-text: #fff;\n    --sidebar-bg: #87CEEB;\n    --sidebar-hover:#b9dfe4;\n    --sidebar-border-hover: #00b3bb;\n    --button-bg:#b2def0;\n    --border-radius: 8px;\n    --input-hover:#e0dddd;\n    --input-focus:#d4d2d2;\n  }\n\n  /* Footer */\n\n\n  html {\n    /* footer support */\n    position: relative;\n    min-height: 100%;\n  }\n  \n  \n  \n  \n  body {\n  /* footer support */\n    margin-bottom: 48px;\n  }\n  \n  \n  .footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-size: 18px;\n  }\n  \n  \n  .fa-github {\n    color: white;\n    font-size: 22px;\n    transition: transform 0.3s ease-in-out;\n  }\n  \n  \n  .fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n  }\n\n/* Styling */\n\n  body{\n    height: calc(100vh - 48px);\n    width: 100vw;\n    max-width: 100vw;\n  }\n  \n  .content{\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    max-width: 100vw;\n    height: calc(100vh - 48px);\n    /* border: 1px solid red; */\n  }\n\n\n/* Header */\n\nheader{\n  background-color: var(--header-bg);\n  color: var(--header-text);\n  padding: 20px;\n  height: 15%;\n  display: flex;\n  align-items: center;\n}\n\nh1{\n  font-size: 2.5rem;\n}\n  \n\n/* Main */\n\nmain{\n  display: flex;\n  background-color: var(--main-bg);\n  color: var(--main-text);\n  height: 85%;\n}\n\n.sidebar{\n  background-color: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 4vh 2vw;\n  gap: 5vh;\n}\n\n.sidebar .sections{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar .sections button{\n  background-color: var(--button-bg);\n  font-size: 1.1rem;\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  outline: none;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  \n}\n\n.sidebar .sections button:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.sidebar .sections button.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.sidebar .projects{\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar .projects-header{\n  display: flex;\n  align-items: center;\n  \n}\n\n.sidebar .projects-header p{\n  font-size: 1.3rem;\n}\n\n.sidebar .projects-header button{\n  font-size: 1.7rem;\n  border-radius: var(--border-radius);\n  margin-left: auto;\n}\n\n.sidebar .projects-container{\n  border-top: 2px solid var(--main-text);\n  border-bottom: 2px solid var(--main-text);\n  padding: 2vh 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  overflow: auto;\n}\n\n.projects-container .project{\n  background-color: var(--button-bg);\n  color: inherit;\n  border: 2px solid transparent;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n  padding: 3px;\n  text-align: left;\n  display: flex;\n  gap: 5px;\n  cursor: pointer;\n}\n\n.projects-container .project:hover{\n  background-color: var(--sidebar-hover);\n  border:2px solid var(--sidebar-border-hover);\n}\n\n.projects-container .project.active{\n  background-color: var(--sidebar-border-hover);\n  color: var(--header-text);\n}\n\n.project .title-of-project{\n  margin-right:auto;\n  font-size: 1.1rem;\n}\n.project .project-button{\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.main-content{\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n  padding: 2vh 4vw;\n  gap: 4vh;\n}\n\n.main-content h2{\n  text-align: center;\n  font-size: 2rem;\n}\n\n.main-wrapper{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.main-wrapper .header-wrapper{\n  display: flex;\n  width: 100%;\n\n}\n\n\n.header-wrapper .header-p{\n  align-self: flex-start;\n  margin-right: auto;\n  font-size: 1.5rem;\n  --counter-value:\"\";\n\n}\n\n.header-wrapper .header-p::after{\n  content: var(--counter-value);\n  position: relative;\n  left:2px;\n}\n\n.header-wrapper > button{\n  font-size: 1.7rem;\n}\n\n\n.tasks{\n  border-top: 2px solid var(--main-text);\n  width: 100%;\n  padding: 2vh 1vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.task{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px;\n  transition: 0.4s;\n  border-radius: var(--border-radius);\n}\n\n.task:hover{\n  background-color: var(--main-hover);\n}\n\n.title, s{\n  margin-right: auto;\n}\n\n.task img{\n  max-width: 20px;\n  max-height: 20px;\n  aspect-ratio: 1/1;\n}\n\n\ndialog{\n  margin: auto;\n  border:none;\n  border-radius: var(--border-radius);\n}\n\n.dialog-container{\n  display: flex;\n  flex-direction: column;\n  \n}\n\ndialog .header{\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  padding-bottom: 10px;\n  border-top-right-radius: var(--border-radius);\n  border-top-left-radius: var(--border-radius);\n  background-color: var(--main-bg);\n  color: #353333;\n}\n\ndialog .header h3{\n  margin-right: auto;\n  font-size: 1.5rem;\n}\n\ndialog .header .close{\n  font-size: 2rem;\n  align-self: flex-start;\n}\n\n\nform{\n  padding: 20px;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\ninput, textarea, select{\n  border-radius: var(--border-radius);\n  border: 2px ridge var(--header-bg);\n  padding: 4px;\n  transition: 0.4s;\n}\n\n input:hover, textarea:hover, select:hover{\n  background-color: var(--input-hover);\n}\ninput:focus, textarea:focus, select:focus{\n  background-color: var(--input-focus);\n}\n\n#task-dialog ul{\n  display: flex;\n  flex-direction: column;\n  gap: 3vh;\n}\n\n#task-dialog li{\n  display: flex;\n  flex-direction: column;\n}\n\n#project-dialog ul{\n  display: flex;\n  flex-wrap: wrap;\n  \n}\n\n#project-dialog li{\n  display: flex;\n}\n#project-dialog .project-title{\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n#project-dialog .project-title input{\n  width: 100%;\n}\n\ninput[type=\"radio\"]{\n  display: none;\n}\n\n.radio-label{\n  border: 2px solid var(--sidebar-border-hover);\n  color: rgb(6, 6, 105);\n  border-radius: var(--border-radius);\n  width: 45px;\n  height: 45px;\n  text-align: center;\n  font-size: 1.7rem;\n  transition: 0.3s;\n}\n\n.radio-label:hover{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.radio-label.active{\n  border: 2px solid rgb(6, 6, 105);\n}\n\n.dialog-buttons{\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.dialog-buttons button{\n  padding: 10px;\n  border: 2px solid var(--main-bg);\n  border-radius: var(--border-radius);\n  transition: 0.4s;\n  font-weight: 700;\n}\n\nbutton.submit{\n  color: var(--sidebar-border-hover);\n  \n}\n\nbutton.submit:hover{\n  background-color: var(--sidebar-border-hover);\n  color: var(--main-text);\n}\n\nbutton.cancel{\n  color: rgb(248, 163, 163);\n}\n\nbutton.cancel:hover{\n  background-color: rgb(245, 139, 139);\n  color: var(--main-text);\n}\n\n#info-dialog{\n  min-width: 30vw;\n}\n#info-dialog .dialog-container{\n  padding-bottom: 10px ;\n}\n\n.info-wrapper{\n  display: flex;\n  padding: 3vh 0px;\n  border-bottom: 1px solid var(--main-text);\n  width: 90%;\n  align-self: center;\n  gap: 2vw;\n}\n#info-description{\n  min-height: 4vw;\n  overflow-y: scroll;\n}\n\n.info-wrapper:last-of-type{\n  border-bottom: none;\n}\n\n.bold{\n  flex: 1;\n  font-weight: 800;\n}\n.info-content{\n  flex: 1;\n}\n\n#info-dialog p{\n  color: var(--main-text);\n  text-align: start;\n}\n\n\n"],"sourceRoot":""}]);
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

        const buttonComplete = document.createElement("button")
        const imgCircle = new Image()
        if(taskInfo.state === "done"){
            imgCircle.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_5__
            buttonComplete.appendChild(imgCircle)
            const strikethrough = document.createElement('s')
            strikethrough.appendChild(pTitle)
            mainDiv.appendChild(buttonComplete)
            mainDiv.appendChild(strikethrough)
        }
        else{
            imgCircle.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_1__
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

            const projectTitle= document.querySelector("h2").textContent.substring(2).trimStart()
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
        const projectTitle = document.querySelector("h2").textContent.substring('2').trimStart()
        _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.removeTaskFromProject(projectTitle,taskTitle)
        const divTasks = document.querySelector(".tasks")
        divTasks.innerHTML = ""
        const textHeader = document.querySelector(".header-p");
        let counter = 0
        Object.values(_logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.projects[projectTitle].tasks).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
        textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')
        
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
            imgCircle.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_1__
            const currentImage = event.currentTarget.firstElementChild.firstElementChild
            event.currentTarget.firstElementChild.replaceChild(imgCircle,currentImage)
        }
        else{
            const title = event.currentTarget.querySelector("p")
            const s = document.createElement("s")
            title.parentElement.insertBefore(s,title)
            s.appendChild(title)
            const imgCompleted = new Image()
            imgCompleted.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_5__
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
        const projectForm = document.querySelector("#project-form")
        function addProjectEventListener(event) {
            event.preventDefault()
            let projectTitle = event.target.elements["title"].value
            let projectSymbol = event.target.elements["projectSymbol"].value
            let newProject = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectTitle, projectSymbol)
            _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.addProject(newProject)
            dom.showProjectsInSidebar()
            const projectDialog = document.querySelector("#project-dialog")
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
        const projectForm = document.querySelector("#project-form")
        projectForm.elements["title"].value = projectInfo.projectTitle
        projectForm.elements["projectSymbol"].value = projectInfo.projectSymbol

        function editEventListener(event) {
            event.preventDefault()
            let newTitle = event.target.elements["title"].value
            let newSymbol = event.target.elements["projectSymbol"].value
            _logic__WEBPACK_IMPORTED_MODULE_0__.theGodContainerOfTheUniverse.modifyProject(projectInfo.projectTitle, newTitle, newSymbol)
            dom.showProjectsInSidebar()
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
    },

    closeDialog: function(event){
        let dialog = event.target.closest("dialog")
        let form = dialog.querySelector("form")
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
 
 
    return {changeTitle, changeDescription, changeDueDate, changePriority, changeState, getInfo}
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
 
 
   
    return {tasks, addTask, deleteTask, modifyTask, getTaskInfo, changeProjectTitle, changeProjectSymbol, getProjectInfo}
 }
 
 
 
 
 
 
 let theGodContainerOfTheUniverse = {
    projects: {},
   
    addProject: function(project){
        this.projects[project.getProjectInfo().projectTitle] = project
    },
 
 
    removeProject: function(projectTitle){
        delete this.projects[projectTitle];
    },
 
 
    modifyProject: function(currentTitle, newTitle, newSymbol){
        const newProject = this.projects[currentTitle]
        newProject.changeProjectTitle(newTitle)
        newProject.changeProjectSymbol(newSymbol)
        delete this.projects[currentTitle]
        this.projects[newTitle] = newProject
    },
 
 
    addTaskToProject: function(projectTitle, task){
        this.projects[projectTitle].addTask(task)
    },
 
 
    removeTaskFromProject: function(projectTitle, taskTitle){
        this.projects[projectTitle].deleteTask(taskTitle)
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
        this.projects[projectTitle].modifyTask(currentTitle,newTitle, newDescription, newDueDate, newPriority)
    },

    toggleTaskState: function(taskTitle){
        Object.values(this.projects).forEach(project => {
            if(project.tasks[taskTitle]){
                project.tasks[taskTitle].changeState()
            }
        });
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

// Adding Tasks to Projects
// project1.addTask(task1);
// project2.addTask(task2);

// // Testing Adding Tasks to Projects
// console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 failed");
// console.assert(project2.tasks[task2.getInfo().title] === task2, "Adding task2 to project2 failed");

// // Modifying Tasks within Projects
// project1.modifyTask(task1, "Task 1 Modified", "Updated Description 1", "2022-03-03", "Low");
// console.assert(project1.tasks["Task 1 Modified"] !== undefined, "Modifying task1 within project1 failed");


// // Deleting Tasks from Projects
// project1.deleteTask(task1);
// console.assert(project1.tasks["Task 1 Modified"] === undefined, "Deleting task1 from project1 failed");


// // Adding a Project to theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.addProject(project1);
// console.assert(theGodContainerOfTheUniverse.projects["Project 1"] === project1, "Adding project1 to theGodContainerOfTheUniverse failed");

// // Modifying a Project in theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.modifyProject(project1, "Project 1 Updated", "");
// console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"].getProjectInfo().projectSymbol === "", "Modifying project1 in theGodContainerOfTheUniverse failed");

// // Removing a Project from theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.removeProject(project1);
// console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"] === undefined, "Removing project1 from theGodContainerOfTheUniverse failed");

// Re-adding the Project and Task for Further Testing
// theGodContainerOfTheUniverse.addProject(project1);

// // Adding a Task to a Project through theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.addTaskToProject(project1, task1);
// console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 through theGodContainerOfTheUniverse failed");


// // Removing a Task from a Project through theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.removeTaskFromProject(project1, task1);
// console.assert(project1.tasks[task1.getInfo().title] === undefined, "Removing task1 from project1 through theGodContainerOfTheUniverse failed");

// // // Getting Task Info from a Project through

// theGodContainerOfTheUniverse.addTaskToProject(project1, task1); // Re-add task for testing
// const taskInfo = theGodContainerOfTheUniverse.getTaskInfoFromProject(project1, task1);
// console.assert(taskInfo && taskInfo.title === task1.getInfo().title, "Getting task info from project1 through theGodContainerOfTheUniverse failed");



// theGodContainerOfTheUniverse.modifyTaskFromProject(project1, task1,"Task 1 Modified", "Updated Description 1", "2024-01-20", "important")

// let task3 = createTask("Task 3", "Description 3", "2024-01-17", "important")
// theGodContainerOfTheUniverse.addTaskToProject("Project 1", task3)
// console.log(task1.getInfo().dueDate)



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU8scUZBQXFGLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxLQUFLLFlBQVksYUFBYSxhQUFhLFVBQVUsS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUs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QUVBLG1FQUFtRTtBQUNuRTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEscUNBQUc7QUFDSCxxQ0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZERheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzV2l0aGluSW50ZXJ2YWwubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDc3MgcmVzZXQgKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICB9XG4gICBcbiAgICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgfVxuICAgXG4gICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgIH1cbiAgIFxuICAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgIH1cbiAgIFxuICAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgIH1cbiAgIFxuICAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgIH1cblxuICAgYnV0dG9uLCBhe1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgIH1cbiAgICBidXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG5cbiAgIGF7XG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgfVxuXG4gICBmaWVsZHNldHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICB9XG4gICB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgfVxuIFxuICAgXG4vKiBWYXJpYWJsZXMgKi9cblxuOnJvb3Qge1xuICAgIC0tbWFpbi10ZXh0OiAjMkY0RjRGO1xuICAgIC0tbWFpbi1iZzogI0MwQzBDMDtcbiAgICAtLW1haW4taG92ZXI6I2I4YjRiNDtcbiAgICAtLWhlYWRlci1iZzogIzkxOGY4ZjtcbiAgICAtLWhlYWRlci10ZXh0OiAjZmZmO1xuICAgIC0tc2lkZWJhci1iZzogIzg3Q0VFQjtcbiAgICAtLXNpZGViYXItaG92ZXI6I2I5ZGZlNDtcbiAgICAtLXNpZGViYXItYm9yZGVyLWhvdmVyOiAjMDBiM2JiO1xuICAgIC0tYnV0dG9uLWJnOiNiMmRlZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1pbnB1dC1ob3ZlcjojZTBkZGRkO1xuICAgIC0taW5wdXQtZm9jdXM6I2Q0ZDJkMjtcbiAgfVxuXG4gIC8qIEZvb3RlciAqL1xuXG5cbiAgaHRtbCB7XG4gICAgLyogZm9vdGVyIHN1cHBvcnQgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgYm9keSB7XG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgfVxuICBcbiAgXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgXG4gIC5mYS1naXRodWIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIFxuICAuZmEtZ2l0aHViOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XG4gIH1cblxuLyogU3R5bGluZyAqL1xuXG4gIGJvZHl7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gIH1cbiAgXG4gIC5jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIH1cblxuXG4vKiBIZWFkZXIgKi9cblxuaGVhZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmcpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDF7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuICBcblxuLyogTWFpbiAqL1xuXG5tYWlue1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XG4gIGhlaWdodDogODUlO1xufVxuXG4uc2lkZWJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDR2aCAydnc7XG4gIGdhcDogNXZoO1xufVxuXG4uc2lkZWJhciAuc2VjdGlvbnN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgXG59XG5cbi5zaWRlYmFyIC5zZWN0aW9ucyBidXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXIpO1xuICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbn1cblxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbi5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcbn1cblxuLnNpZGViYXIgLnByb2plY3Rze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbn1cblxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciBwe1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciBidXR0b257XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0cy1jb250YWluZXJ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcbiAgcGFkZGluZzogMnZoIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3Q6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXIpO1xuICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdC5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcbn1cblxuLnByb2plY3QgLnRpdGxlLW9mLXByb2plY3R7XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5wcm9qZWN0IC5wcm9qZWN0LWJ1dHRvbntcbiAgaGVpZ2h0OiAyMHB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cblxuLm1haW4tY29udGVudHtcbiAgZmxleDogNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJ2aCA0dnc7XG4gIGdhcDogNHZoO1xufVxuXG4ubWFpbi1jb250ZW50IGgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm1haW4td3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLXdyYXBwZXIgLmhlYWRlci13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcblxufVxuXG5cbi5oZWFkZXItd3JhcHBlciAuaGVhZGVyLXB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC0tY291bnRlci12YWx1ZTpcIlwiO1xuXG59XG5cbi5oZWFkZXItd3JhcHBlciAuaGVhZGVyLXA6OmFmdGVye1xuICBjb250ZW50OiB2YXIoLS1jb3VudGVyLXZhbHVlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OjJweDtcbn1cblxuLmhlYWRlci13cmFwcGVyID4gYnV0dG9ue1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuXG4udGFza3N7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnZoIDF2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhc2t7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBwYWRkaW5nOiA2cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udGFzazpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ob3Zlcik7XG59XG5cbi50aXRsZSwgc3tcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udGFzayBpbWd7XG4gIG1heC13aWR0aDogMjBweDtcbiAgbWF4LWhlaWdodDogMjBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG59XG5cblxuZGlhbG9ne1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjpub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmRpYWxvZy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxufVxuXG5kaWFsb2cgLmhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xuICBjb2xvcjogIzM1MzMzMztcbn1cblxuZGlhbG9nIC5oZWFkZXIgaDN7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmRpYWxvZyAuaGVhZGVyIC5jbG9zZXtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG5cbmZvcm17XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlcjogMnB4IHJpZGdlIHZhcigtLWhlYWRlci1iZyk7XG4gIHBhZGRpbmc6IDRweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuIGlucHV0OmhvdmVyLCB0ZXh0YXJlYTpob3Zlciwgc2VsZWN0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1ob3Zlcik7XG59XG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xufVxuXG4jdGFzay1kaWFsb2cgdWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3ZoO1xufVxuXG4jdGFzay1kaWFsb2cgbGl7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNwcm9qZWN0LWRpYWxvZyB1bHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBcbn1cblxuI3Byb2plY3QtZGlhbG9nIGxpe1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI3Byb2plY3QtZGlhbG9nIC5wcm9qZWN0LXRpdGxle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jcHJvamVjdC1kaWFsb2cgLnByb2plY3QtdGl0bGUgaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYWRpby1sYWJlbHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xuICBjb2xvcjogcmdiKDYsIDYsIDEwNSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmFkaW8tbGFiZWw6aG92ZXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2LCA2LCAxMDUpO1xufVxuXG4ucmFkaW8tbGFiZWwuYWN0aXZle1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNiwgNiwgMTA1KTtcbn1cblxuLmRpYWxvZy1idXR0b25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG59XG5cbi5kaWFsb2ctYnV0dG9ucyBidXR0b257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uLnN1Ym1pdHtcbiAgY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbiAgXG59XG5cbmJ1dHRvbi5zdWJtaXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XG59XG5cbmJ1dHRvbi5jYW5jZWx7XG4gIGNvbG9yOiByZ2IoMjQ4LCAxNjMsIDE2Myk7XG59XG5cbmJ1dHRvbi5jYW5jZWw6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEzOSwgMTM5KTtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XG59XG5cbiNpbmZvLWRpYWxvZ3tcbiAgbWluLXdpZHRoOiAzMHZ3O1xufVxuI2luZm8tZGlhbG9nIC5kaWFsb2ctY29udGFpbmVye1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCA7XG59XG5cbi5pbmZvLXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDN2aCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xuICB3aWR0aDogOTAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdhcDogMnZ3O1xufVxuI2luZm8tZGVzY3JpcHRpb257XG4gIG1pbi1oZWlnaHQ6IDR2dztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uaW5mby13cmFwcGVyOmxhc3Qtb2YtdHlwZXtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmJvbGR7XG4gIGZsZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uaW5mby1jb250ZW50e1xuICBmbGV4OiAxO1xufVxuXG4jaW5mby1kaWFsb2cgcHtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxzQkFBc0I7R0FDdkI7O0dBRUE7SUFDQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLDhEQUE4RDtJQUM5RCwyQkFBMkI7R0FDNUI7O0dBRUE7SUFDQyxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLDJCQUEyQjtHQUM1Qjs7R0FFQTtJQUNDLGNBQWM7SUFDZCxlQUFlO0dBQ2hCOztHQUVBO0lBQ0MsYUFBYTtHQUNkOztHQUVBO0lBQ0MseUJBQXlCO0dBQzFCOztHQUVBO0tBQ0UsZUFBZTtLQUNmO0lBQ0Q7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztNQUNkLGFBQWE7TUFDYixZQUFZO01BQ1osWUFBWTtJQUNkOztHQUVEO09BQ0kscUJBQXFCO0dBQ3pCOztHQUVBO0lBQ0MsWUFBWTtHQUNiO0dBQ0E7SUFDQyxnQkFBZ0I7R0FDakI7OztBQUdILGNBQWM7O0FBRWQ7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7RUFFQSxXQUFXOzs7RUFHWDtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOzs7OztFQUtBO0VBQ0EsbUJBQW1CO0lBQ2pCLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJB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LGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQzs7QUFFcEM7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDc3MgcmVzZXQgKi9cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICB9XFxuICAgXFxuICAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJWYXJlbGEgUm91bmRcXFwiLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICB9XFxuICAgXFxuICAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgfVxcbiAgIFxcbiAgIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICB9XFxuICAgXFxuICAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgfVxcbiAgIFxcbiAgIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgIH1cXG5cXG4gICBidXR0b24sIGF7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG5cXG4gICBhe1xcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgfVxcblxcbiAgIGZpZWxkc2V0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgfVxcbiAgIHVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgIH1cXG4gXFxuICAgXFxuLyogVmFyaWFibGVzICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tdGV4dDogIzJGNEY0RjtcXG4gICAgLS1tYWluLWJnOiAjQzBDMEMwO1xcbiAgICAtLW1haW4taG92ZXI6I2I4YjRiNDtcXG4gICAgLS1oZWFkZXItYmc6ICM5MThmOGY7XFxuICAgIC0taGVhZGVyLXRleHQ6ICNmZmY7XFxuICAgIC0tc2lkZWJhci1iZzogIzg3Q0VFQjtcXG4gICAgLS1zaWRlYmFyLWhvdmVyOiNiOWRmZTQ7XFxuICAgIC0tc2lkZWJhci1ib3JkZXItaG92ZXI6ICMwMGIzYmI7XFxuICAgIC0tYnV0dG9uLWJnOiNiMmRlZjA7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAtLWlucHV0LWhvdmVyOiNlMGRkZGQ7XFxuICAgIC0taW5wdXQtZm9jdXM6I2Q0ZDJkMjtcXG4gIH1cXG5cXG4gIC8qIEZvb3RlciAqL1xcblxcblxcbiAgaHRtbCB7XFxuICAgIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgXFxuICBcXG4gIFxcbiAgYm9keSB7XFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbiAgfVxcbiAgXFxuICBcXG4gIC5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuZmEtZ2l0aHViIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgfVxcbiAgXFxuICBcXG4gIC5mYS1naXRodWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxuICB9XFxuXFxuLyogU3R5bGluZyAqL1xcblxcbiAgYm9keXtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIFxcbiAgLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIH1cXG5cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5oZWFkZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmcpO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4gIFxcblxcbi8qIE1haW4gKi9cXG5cXG5tYWlue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XFxuICBoZWlnaHQ6IDg1JTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDR2aCAydnc7XFxuICBnYXA6IDV2aDtcXG59XFxuXFxuLnNpZGViYXIgLnNlY3Rpb25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5zZWN0aW9ucyBidXR0b257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBcXG59XFxuXFxuLnNpZGViYXIgLnNlY3Rpb25zIGJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXIpO1xcbiAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxufVxcblxcbi5zaWRlYmFyIC5zZWN0aW9ucyBidXR0b24uYWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3Rze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciBidXR0b257XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cy1jb250YWluZXJ7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbWFpbi10ZXh0KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLXRleHQpO1xcbiAgcGFkZGluZzogMnZoIDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXIpO1xcbiAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QuYWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ib3JkZXItaG92ZXIpO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcXG59XFxuXFxuLnByb2plY3QgLnRpdGxlLW9mLXByb2plY3R7XFxuICBtYXJnaW4tcmlnaHQ6YXV0bztcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4ucHJvamVjdCAucHJvamVjdC1idXR0b257XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gIGZsZXg6IDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDJ2aCA0dnc7XFxuICBnYXA6IDR2aDtcXG59XFxuXFxuLm1haW4tY29udGVudCBoMntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1haW4td3JhcHBlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIC5oZWFkZXItd3JhcHBlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuXFxuLmhlYWRlci13cmFwcGVyIC5oZWFkZXItcHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIC0tY291bnRlci12YWx1ZTpcXFwiXFxcIjtcXG5cXG59XFxuXFxuLmhlYWRlci13cmFwcGVyIC5oZWFkZXItcDo6YWZ0ZXJ7XFxuICBjb250ZW50OiB2YXIoLS1jb3VudGVyLXZhbHVlKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6MnB4O1xcbn1cXG5cXG4uaGVhZGVyLXdyYXBwZXIgPiBidXR0b257XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuXFxuLnRhc2tze1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJ2aCAxdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2t7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4udGFzazpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taG92ZXIpO1xcbn1cXG5cXG4udGl0bGUsIHN7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrIGltZ3tcXG4gIG1heC13aWR0aDogMjBweDtcXG4gIG1heC1oZWlnaHQ6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuXFxuZGlhbG9ne1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOm5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIFxcbn1cXG5cXG5kaWFsb2cgLmhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gIGNvbG9yOiAjMzUzMzMzO1xcbn1cXG5cXG5kaWFsb2cgLmhlYWRlciBoM3tcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5kaWFsb2cgLmhlYWRlciAuY2xvc2V7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5cXG5mb3Jte1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0e1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXI6IDJweCByaWRnZSB2YXIoLS1oZWFkZXItYmcpO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuIGlucHV0OmhvdmVyLCB0ZXh0YXJlYTpob3Zlciwgc2VsZWN0OmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtaG92ZXIpO1xcbn1cXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcXG59XFxuXFxuI3Rhc2stZGlhbG9nIHVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDN2aDtcXG59XFxuXFxuI3Rhc2stZGlhbG9nIGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0LWRpYWxvZyB1bHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI3Byb2plY3QtZGlhbG9nIC5wcm9qZWN0LXRpdGxle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgLnByb2plY3QtdGl0bGUgaW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYWRpby1sYWJlbHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG4gIGNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1sYWJlbDpob3ZlcntcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2LCA2LCAxMDUpO1xcbn1cXG5cXG4ucmFkaW8tbGFiZWwuYWN0aXZle1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDYsIDYsIDEwNSk7XFxufVxcblxcbi5kaWFsb2ctYnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nLWJ1dHRvbnMgYnV0dG9ue1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdHtcXG4gIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJvcmRlci1ob3Zlcik7XFxuICBcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYm9yZGVyLWhvdmVyKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbn1cXG5cXG5idXR0b24uY2FuY2Vse1xcbiAgY29sb3I6IHJnYigyNDgsIDE2MywgMTYzKTtcXG59XFxuXFxuYnV0dG9uLmNhbmNlbDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEzOSwgMTM5KTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbn1cXG5cXG4jaW5mby1kaWFsb2d7XFxuICBtaW4td2lkdGg6IDMwdnc7XFxufVxcbiNpbmZvLWRpYWxvZyAuZGlhbG9nLWNvbnRhaW5lcntcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4IDtcXG59XFxuXFxuLmluZm8td3JhcHBlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzdmggMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4tdGV4dCk7XFxuICB3aWR0aDogOTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ2FwOiAydnc7XFxufVxcbiNpbmZvLWRlc2NyaXB0aW9ue1xcbiAgbWluLWhlaWdodDogNHZ3O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaW5mby13cmFwcGVyOmxhc3Qtb2YtdHlwZXtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5ib2xke1xcbiAgZmxleDogMTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5pbmZvLWNvbnRlbnR7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jaW5mby1kaWFsb2cgcHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLCBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCBjaXJjbGUgZnJvbSBcIi4vaW1hZ2VzL2NpcmNsZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuL2ltYWdlcy9lZGl0LnN2Z1wiO1xuaW1wb3J0IHRyYXNoQ2FuIGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCJcbmltcG9ydCBpbmZvIGZyb20gXCIuL2ltYWdlcy9pbmZvLnN2Z1wiXG5pbXBvcnQgY29tcGxldGVkIGZyb20gXCIuL2ltYWdlcy9jaGVjay1jaXJjbGUuc3ZnXCJcblxuXG5sZXQgZG9tID0ge1xuICAgIGRpc3BsYXlNYWluQ29udGVudDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIFxuICAgICAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluV3JhcHBlci5jbGFzc05hbWUgPSAnbWFpbi13cmFwcGVyJztcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJXcmFwcGVyLmNsYXNzTmFtZSA9ICdoZWFkZXItd3JhcHBlcic7XG4gICAgXG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuICAgICAgICBoZWFkZXJUZXh0LmNsYXNzTmFtZSA9IFwiaGVhZGVyLXBcIlxuICAgICAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgIFxuICAgICAgICBjb25zdCBhcnJheU5hbWVzID0gW1wiYWxsXCIsXCJ0b2RheVwiLCBcIndlZWtcIiwgXCJpbXBvcnRhbnRcIiwgXCJjb21wbGV0ZWRcIiwgXCJ0b2RvXCJdXG4gICAgICAgIGxldCBpc0luQXJyYXkgPSBhcnJheU5hbWVzLmluY2x1ZGVzKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgIGlmKGlzSW5BcnJheSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGQtdGFzayc7XG4gICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAn4oqVJztcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykpXG4gICAgICAgICAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGRpdlRhc2tzLmNsYXNzTmFtZSA9IFwidGFza3NcIlxuICBcbiAgICBcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoMik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbldyYXBwZXIpO1xuICAgICAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXJXcmFwcGVyKTtcbiAgICAgICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoZGl2VGFza3MpXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbldyYXBwZXIpXG4gICAgfSxcbiAgICBjcmVhdGVEb21UYXNrOiBmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrLmdldEluZm8oKVxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWFpbkRpdi5jbGFzc05hbWUgPSBcInRhc2tcIlxuICAgICAgICBtYWluRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZVN0YXRlLmJpbmQodGhpcykpO1xuICAgIFxuICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwVGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiXG4gICAgICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvLnRpdGxlXG4gICAgXG4gICAgICAgIGNvbnN0IHBEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcERhdGUuY2xhc3NOYW1lID0gXCJkYXRlXCJcbiAgICAgICAgcERhdGUudGV4dENvbnRlbnQgPSB0YXNrSW5mby5kdWVEYXRlXG4gICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbkVkaXQuY2xhc3NOYW1lID0gXCJsZWZ0IGVkaXRcIlxuICAgICAgICBjb25zdCBpbWdFZGl0ID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nRWRpdC5zcmMgPSBlZGl0XG4gICAgICAgIGJ1dHRvbkVkaXQuYXBwZW5kQ2hpbGQoaW1nRWRpdClcbiAgICAgICAgYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5lZGl0VGFzay5iaW5kKHRoaXMpKVxuICAgIFxuICAgICAgICBjb25zdCBidXR0b25UcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uVHJhc2guY2xhc3NOYW1lID0gXCJsZWZ0IHRyYXNoXCJcbiAgICAgICAgY29uc3QgaW1nVHJhc2ggPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWdUcmFzaC5zcmMgPSB0cmFzaENhblxuICAgICAgICBidXR0b25UcmFzaC5hcHBlbmRDaGlsZChpbWdUcmFzaClcbiAgICAgICAgYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVtb3ZlVGFzay5iaW5kKHRoaXMpKVxuICAgIFxuICAgICAgICBjb25zdCBidXR0b25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b25JbmZvLmNsYXNzTmFtZSA9IFwibGVmdCBpbmZvXCJcbiAgICAgICAgY29uc3QgaW1nSW5mbyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZ0luZm8uc3JjID0gaW5mb1xuICAgICAgICBidXR0b25JbmZvLmFwcGVuZENoaWxkKGltZ0luZm8pXG4gICAgICAgIGJ1dHRvbkluZm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd0luZm8uYmluZCh0aGlzKSlcblxuICAgICAgICBjb25zdCBidXR0b25Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgaW1nQ2lyY2xlID0gbmV3IEltYWdlKClcbiAgICAgICAgaWYodGFza0luZm8uc3RhdGUgPT09IFwiZG9uZVwiKXtcbiAgICAgICAgICAgIGltZ0NpcmNsZS5zcmMgPSBjb21wbGV0ZWRcbiAgICAgICAgICAgIGJ1dHRvbkNvbXBsZXRlLmFwcGVuZENoaWxkKGltZ0NpcmNsZSlcbiAgICAgICAgICAgIGNvbnN0IHN0cmlrZXRocm91Z2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzJylcbiAgICAgICAgICAgIHN0cmlrZXRocm91Z2guYXBwZW5kQ2hpbGQocFRpdGxlKVxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25Db21wbGV0ZSlcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc3RyaWtldGhyb3VnaClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaW1nQ2lyY2xlLnNyYyA9IGNpcmNsZVxuICAgICAgICAgICAgYnV0dG9uQ29tcGxldGUuYXBwZW5kQ2hpbGQoaW1nQ2lyY2xlKVxuXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbXBsZXRlKVxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwVGl0bGUpXG4gICAgICAgIH1cbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwRGF0ZSlcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidXR0b25FZGl0KVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvblRyYXNoKVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkluZm8pXG4gICAgICAgIHJldHVybiBtYWluRGl2XG4gICAgXG4gICAgfSxcbiAgICBkaXNwbGF5VGFza0RpYWxvZzogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kaWFsb2dcIilcbiAgICAgICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHRhc2tEaWFsb2cucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKVxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsb3NlRGlhbG9nKVxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0YXNrRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsb3NlRGlhbG9nKVxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSB0YXNrRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpXG4gICAgICAgIFxuICAgIH0sXG4gICAgYWRkVGFzazogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFza0RpYWxvZygpXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRhc2tFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGFza1RpdGxlXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGFza0Rlc2NyaXB0aW9uXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgdGFza0R1ZURhdGUgPSBldmVudC50YXJnZXQuZWxlbWVudHNbXCJ0YXNrRHVlRGF0ZVwiXS52YWx1ZVxuICAgICAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInRhc2tQcmlvcml0eVwiXS52YWx1ZVxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sdGFza0R1ZURhdGUsdGFza1ByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQuc3Vic3RyaW5nKDIpLnRyaW1TdGFydCgpXG4gICAgICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFRhc2tUb1Byb2plY3QoY3VycmVudFByb2plY3RUaXRsZSwgbmV3VGFzaylcblxuICAgICAgICAgICAgY29uc3QgZGl2VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG4gICAgICAgICAgICBkaXZUYXNrcy5hcHBlbmRDaGlsZChkb20uY3JlYXRlRG9tVGFzayhuZXdUYXNrKSlcblxuICAgICAgICAgICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXBcIik7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgICAgIGRpdlRhc2tzLmNoaWxkTm9kZXMuZm9yRWFjaCgoKSA9PiBjb3VudGVyKyspXG4gICAgICAgICAgICB0ZXh0SGVhZGVyLnN0eWxlLnNldFByb3BlcnR5KCctLWNvdW50ZXItdmFsdWUnLCAnXCIoJyArIGNvdW50ZXIgKyAnKVwiJylcblxuICAgICAgICAgICAgdGFza0Zvcm0ucmVzZXQoKVxuICAgICAgICAgICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kaWFsb2dcIilcbiAgICAgICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKVxuICAgICAgICAgICAgdGFza0Zvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRUYXNrRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpXG4gICAgICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixhZGRUYXNrRXZlbnRMaXN0ZW5lcilcblxuICAgIH0sXG4gICAgZWRpdFRhc2s6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFza0RpYWxvZygpXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIilcbiAgICAgICAgY29uc3QgY3VycmVudFRpdGxlID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IHRhc2tJbmZvID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5nZXRUYXNrSW5mb0Zyb21Qcm9qZWN0KGN1cnJlbnRUaXRsZSlcbiAgICAgICAgdGFza0Zvcm0uZWxlbWVudHNbXCJ0YXNrVGl0bGVcIl0udmFsdWUgPSB0YXNrSW5mby50aXRsZVxuICAgICAgICB0YXNrRm9ybS5lbGVtZW50c1tcInRhc2tEZXNjcmlwdGlvblwiXS52YWx1ZSA9IHRhc2tJbmZvLmRlc2NyaXB0aW9uXG4gICAgICAgIHRhc2tGb3JtLmVsZW1lbnRzW1widGFza0R1ZURhdGVcIl0udmFsdWUgPSB0YXNrSW5mby5kdWVEYXRlXG4gICAgICAgIHRhc2tGb3JtLmVsZW1lbnRzW1widGFza1ByaW9yaXR5XCJdLnZhbHVlID0gdGFza0luZm8ucHJpb3JpdHlcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGVkaXRUYXNrRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInRhc2tUaXRsZVwiXS52YWx1ZVxuICAgICAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInRhc2tEZXNjcmlwdGlvblwiXS52YWx1ZVxuICAgICAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1widGFza0R1ZURhdGVcIl0udmFsdWVcbiAgICAgICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBldmVudC50YXJnZXQuZWxlbWVudHNbXCJ0YXNrUHJpb3JpdHlcIl0udmFsdWVcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQuc3Vic3RyaW5nKDIpLnRyaW1TdGFydCgpXG4gICAgICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLm1vZGlmeVRhc2tGcm9tUHJvamVjdChwcm9qZWN0VGl0bGUsY3VycmVudFRpdGxlLHRhc2tUaXRsZSx0YXNrRGVzY3JpcHRpb24sdGFza0R1ZURhdGUsdGFza1ByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCBkaXZUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIilcbiAgICAgICAgICAgIGRpdlRhc2tzLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1wXCIpO1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHNbcHJvamVjdFRpdGxlXS50YXNrcykuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGl2VGFza3MuYXBwZW5kQ2hpbGQoZG9tLmNyZWF0ZURvbVRhc2sodGFzaykpXG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfSlcbiAgICAgICAgICAgIHRleHRIZWFkZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY291bnRlci12YWx1ZScsICdcIignICsgY291bnRlciArICcpXCInKVxuXG4gICAgICAgICAgICB0YXNrRm9ybS5yZXNldCgpXG4gICAgICAgICAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRpYWxvZ1wiKVxuICAgICAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICB0YXNrRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGVkaXRUYXNrRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgfVxuICAgICAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsZWRpdFRhc2tFdmVudExpc3RlbmVyKVxuICAgIH0sXG4gICAgXG4gICAgcmVtb3ZlVGFzazogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50LnN1YnN0cmluZygnMicpLnRyaW1TdGFydCgpXG4gICAgICAgIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3RUaXRsZSx0YXNrVGl0bGUpXG4gICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxuICAgICAgICBkaXZUYXNrcy5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1wXCIpO1xuICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzW3Byb2plY3RUaXRsZV0udGFza3MpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGRpdlRhc2tzLmFwcGVuZENoaWxkKGRvbS5jcmVhdGVEb21UYXNrKHRhc2spKVxuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH0pXG4gICAgICAgIHRleHRIZWFkZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY291bnRlci12YWx1ZScsICdcIignICsgY291bnRlciArICcpXCInKVxuICAgICAgICBcbiAgICB9LFxuICAgIHNob3dJbmZvOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IGluZm9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm8tZGlhbG9nXCIpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRQYXJhcyA9IGluZm9EaWFsb2cucXVlcnlTZWxlY3RvckFsbChcIi5pbmZvLWNvbnRlbnRcIilcbiAgICAgICAgY29uc3QgYnV0dG9uQ2FuY2VsID0gaW5mb0RpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudFxuICAgICAgICBjb25zdCBpbmZvVGFzayA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuZ2V0VGFza0luZm9Gcm9tUHJvamVjdCh0YXNrVGl0bGUpXG4gICAgICAgIGluZm9EaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7aW5mb0RpYWxvZy5jbG9zZSgpIFxuICAgICAgICBjb25zdCBuZXdCdXR0b24gPSBidXR0b25DYW5jZWwuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIGJ1dHRvbkNhbmNlbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdCdXR0b24sIGJ1dHRvbkNhbmNlbCk7fSlcblxuICAgICAgICBjb250ZW50UGFyYXMuZm9yRWFjaCgocGFyYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYUlkID0gcGFyYS5pZC5zdWJzdHJpbmcoNSlcbiAgICAgICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBpbmZvVGFza1twYXJhSWRdXG4gICAgICAgIH0pXG5cbiAgICB9LFxuICAgIHRvZ2dsZVN0YXRlOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50XG4gICAgICAgIFxuICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnRvZ2dsZVRhc2tTdGF0ZSh0YXNrVGl0bGUpXG4gICAgICAgIGlmKHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuZ2V0VGFza0luZm9Gcm9tUHJvamVjdCh0YXNrVGl0bGUpLnN0YXRlID09PSBcInRvLWRvXCIgKXtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwicFwiKVxuICAgICAgICAgICAgY29uc3QgcyA9IHRpdGxlLnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIHMucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodGl0bGUsIHMpXG4gICAgICAgICAgICBjb25zdCBpbWdDaXJjbGUgPSBuZXcgSW1hZ2UoKVxuICAgICAgICAgICAgaW1nQ2lyY2xlLnNyYyA9IGNpcmNsZVxuICAgICAgICAgICAgY29uc3QgY3VycmVudEltYWdlID0gZXZlbnQuY3VycmVudFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5yZXBsYWNlQ2hpbGQoaW1nQ2lyY2xlLGN1cnJlbnRJbWFnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpXG4gICAgICAgICAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNcIilcbiAgICAgICAgICAgIHRpdGxlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHMsdGl0bGUpXG4gICAgICAgICAgICBzLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgY29uc3QgaW1nQ29tcGxldGVkID0gbmV3IEltYWdlKClcbiAgICAgICAgICAgIGltZ0NvbXBsZXRlZC5zcmMgPSBjb21wbGV0ZWRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQucmVwbGFjZUNoaWxkKGltZ0NvbXBsZXRlZCxjdXJyZW50SW1hZ2UpXG4gICAgICAgIH1cbiAgICB9LFxuXG5cblxuXG5cbiAgICBkaXNwbGF5UHJvamVjdERpYWxvZzogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2dcIilcbiAgICAgICAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHByb2plY3REaWFsb2cucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKVxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsb3NlRGlhbG9nKVxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBwcm9qZWN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsb3NlRGlhbG9nKVxuICAgIH0sXG4gICAgYWRkUHJvamVjdDogZnVuY3Rpb24oKXtcbiAgICAgICAgZG9tLmRpc3BsYXlQcm9qZWN0RGlhbG9nKClcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybVwiKVxuICAgICAgICBmdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInRpdGxlXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgcHJvamVjdFN5bWJvbCA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInByb2plY3RTeW1ib2xcIl0udmFsdWVcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUsIHByb2plY3RTeW1ib2wpXG4gICAgICAgICAgICB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFByb2plY3QobmV3UHJvamVjdClcbiAgICAgICAgICAgIGRvbS5zaG93UHJvamVjdHNJblNpZGViYXIoKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2dcIilcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnJlc2V0KClcbiAgICAgICAgICAgIHByb2plY3REaWFsb2cuY2xvc2UoKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRQcm9qZWN0RXZlbnRMaXN0ZW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkUHJvamVjdEV2ZW50TGlzdGVuZXIpXG4gICAgfSxcblxuICAgIGVkaXRQcm9qZWN0OiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1tldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQuc3Vic3RyaW5nKDIpLnRyaW1TdGFydCgpXS5nZXRQcm9qZWN0SW5mbygpXG4gICAgICAgIGRvbS5kaXNwbGF5UHJvamVjdERpYWxvZygpXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm1cIilcbiAgICAgICAgcHJvamVjdEZvcm0uZWxlbWVudHNbXCJ0aXRsZVwiXS52YWx1ZSA9IHByb2plY3RJbmZvLnByb2plY3RUaXRsZVxuICAgICAgICBwcm9qZWN0Rm9ybS5lbGVtZW50c1tcInByb2plY3RTeW1ib2xcIl0udmFsdWUgPSBwcm9qZWN0SW5mby5wcm9qZWN0U3ltYm9sXG5cbiAgICAgICAgZnVuY3Rpb24gZWRpdEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGxldCBuZXdUaXRsZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInRpdGxlXCJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgbmV3U3ltYm9sID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzW1wicHJvamVjdFN5bWJvbFwiXS52YWx1ZVxuICAgICAgICAgICAgdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5tb2RpZnlQcm9qZWN0KHByb2plY3RJbmZvLnByb2plY3RUaXRsZSwgbmV3VGl0bGUsIG5ld1N5bWJvbClcbiAgICAgICAgICAgIGRvbS5zaG93UHJvamVjdHNJblNpZGViYXIoKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2dcIilcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnJlc2V0KClcbiAgICAgICAgICAgIHByb2plY3REaWFsb2cuY2xvc2UoKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0RXZlbnRMaXN0ZW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZWRpdEV2ZW50TGlzdGVuZXIpXG4gICAgfSxcbiAgICBkZWxldGVQcm9qZWN0OiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudC5zdWJzdHJpbmcoXCIyXCIpLnRyaW1TdGFydCgpXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50LnN1YnN0cmluZygnMicpLnRyaW1TdGFydCgpXG4gICAgICAgIGlmKGgyID09PSBwcm9qZWN0VGl0bGUpe1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxcIilcbiAgICAgICAgICAgIGJ1dHRvbkFsbC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucmVtb3ZlUHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIGRvbS5zaG93UHJvamVjdHNJblNpZGViYXIoKVxuICAgIH0sXG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tU2lkZWJhcjogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeS1idXR0b25cIilcbiAgICAgICAgY2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxuICAgICAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICByZW1vdmVBY3RpdmVDbGFzc0Zyb21TeW1ib2xzOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBidXR0b25TeW1ib2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWRpby1sYWJlbFwiKVxuICAgICAgICBidXR0b25TeW1ib2xzLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSxcblxuICAgIGRpc3BsYXlQcm9qZWN0SW5NYWluOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCBjb3VudGVyID0gMFxuICAgICAgICBkb20ucmVtb3ZlQWN0aXZlQ2xhc3NGcm9tU2lkZWJhcigpXG4gICAgICAgIGRvbS5kaXNwbGF5TWFpbkNvbnRlbnQoZXZlbnQpXG4gICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxuICAgICAgICBPYmplY3QudmFsdWVzKHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucHJvamVjdHNbZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMikudHJpbVN0YXJ0KCldLnRhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkaXZUYXNrcy5hcHBlbmRDaGlsZChkb20uY3JlYXRlRG9tVGFzayh0YXNrKSlcbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KVxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXBcIik7XG4gICAgICAgIHRleHRIZWFkZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY291bnRlci12YWx1ZScsICdcIignICsgY291bnRlciArICcpXCInKVxuICAgIH0sXG5cblxuICAgIGNyZWF0ZURvbVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICBjb25zdCBkaXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXZQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXG4gICAgICAgIGRpdlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZGlzcGxheVByb2plY3RJbk1haW4uYmluZCh0aGlzKSlcblxuICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLW9mLXByb2plY3RcIilcbiAgICAgICAgcFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLnByb2plY3RTeW1ib2x9ICR7cHJvamVjdC5nZXRQcm9qZWN0SW5mbygpLnByb2plY3RUaXRsZX1gXG5cbiAgICAgICAgY29uc3QgYnV0dG9uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uRWRpdC5jbGFzc05hbWUgPSBcInByb2plY3QtYnV0dG9uXCJcbiAgICAgICAgY29uc3QgaW1nRWRpdCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZ0VkaXQuc3JjID0gZWRpdFxuICAgICAgICBidXR0b25FZGl0LmFwcGVuZENoaWxkKGltZ0VkaXQpXG4gICAgICAgIGJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZWRpdFByb2plY3QuYmluZCh0aGlzKSlcblxuICAgICAgICBjb25zdCBidXR0b25UcmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYnV0dG9uVHJhc2guY2xhc3NOYW1lID0gXCJwcm9qZWN0LWJ1dHRvblwiXG4gICAgICAgIGNvbnN0IGltZ1RyYXNoID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nVHJhc2guc3JjID0gdHJhc2hDYW5cbiAgICAgICAgYnV0dG9uVHJhc2guYXBwZW5kQ2hpbGQoaW1nVHJhc2gpXG4gICAgICAgIGJ1dHRvblRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmRlbGV0ZVByb2plY3QuYmluZCh0aGlzKSlcblxuICAgICAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHBUaXRsZSlcbiAgICAgICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChidXR0b25FZGl0KVxuICAgICAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGJ1dHRvblRyYXNoKVxuXG4gICAgICAgIHJldHVybiBkaXZQcm9qZWN0XG4gICAgfSxcbiAgICBzaG93UHJvamVjdHNJblNpZGViYXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIilcbiAgICAgICAgd2hpbGUocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0cykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb21Qcm9qZWN0KHByb2plY3QpKVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBjbG9zZURpYWxvZzogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgZGlhbG9nID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJkaWFsb2dcIilcbiAgICAgICAgbGV0IGZvcm0gPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICAgICAgZm9ybS5yZXNldCgpXG4gICAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgfSxcblxuXG5cblxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnktYnV0dG9uXCIpXG4gICAgICAgIGNhdGVnb3J5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmRpc3BsYXlDYXRlZ29yeSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYnV0dG9uQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxcIilcbiAgICAgICAgYnV0dG9uQWxsLmNsaWNrKCk7XG5cblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKVxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uYWRkUHJvamVjdClcbiAgICAgICAgY29uc3QgYnV0dG9uU3ltYm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW8tbGFiZWxcIilcbiAgICAgICAgYnV0dG9uU3ltYm9scy5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvbS5yZW1vdmVBY3RpdmVDbGFzc0Zyb21TeW1ib2xzKClcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGRpc3BsYXlDYXRlZ29yeTogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgbGV0IHRhc2tzVG9EaXNwbGF5O1xuICAgICAgICBkb20ucmVtb3ZlQWN0aXZlQ2xhc3NGcm9tU2lkZWJhcigpXG4gICAgICAgIGRvbS5kaXNwbGF5TWFpbkNvbnRlbnQoZXZlbnQpXG4gICAgICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxuICAgICAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwiYWxsXCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldEFsbFRhc2tzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJ0b2RheVwiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5zb3J0QnlEYXRlKCkuZHVlVG9kYXlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJ3ZWVrXCIpe1xuICAgICAgICAgICAgdGFza3NUb0Rpc3BsYXkgPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnNvcnRCeURhdGUoKS5kdWVUaGlzV2Vla1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImltcG9ydGFudFwiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5nZXRJbXBvcnRhbnRUYXNrcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09IFwidG9kb1wiKXtcbiAgICAgICAgICAgIHRhc2tzVG9EaXNwbGF5ID0gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5zb3J0QnlTdGF0ZSgpLnRvZG9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJjb21wbGV0ZWRcIil7XG4gICAgICAgICAgICB0YXNrc1RvRGlzcGxheSA9IHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Uuc29ydEJ5U3RhdGUoKS5kb25lXG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0YXNrc1RvRGlzcGxheSkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZGl2VGFza3MuYXBwZW5kQ2hpbGQoZG9tLmNyZWF0ZURvbVRhc2sodGFzaykpXG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgY29uc3QgdGV4dEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXBcIik7XG4gICAgICAgIHRleHRIZWFkZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY291bnRlci12YWx1ZScsICdcIignICsgY291bnRlciArICcpXCInKVxuICAgIH0sXG59XG5cblxuXG5leHBvcnQge2RvbX1cblxuXG4iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1dpdGhpbkludGVydmFsLCBhZGREYXlzLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIlxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soaW5pdFRpdGxlLCBpbml0RGVzY3JpcHRpb24sIGluaXREdWVEYXRlLCBpbml0UHJpb3JpdHkpe1xuICAgIGxldCB0aXRsZSA9IGluaXRUaXRsZVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGluaXREZXNjcmlwdGlvblxuICAgIGxldCBkdWVEYXRlID0gaW5pdER1ZURhdGVcbiAgICBsZXQgcHJpb3JpdHkgPSBpbml0UHJpb3JpdHlcbiAgICBsZXQgc3RhdGUgPSBcInRvLWRvXCJcbiBcblxuIFxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGVcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VEdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGVcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYoc3RhdGUgPT09IFwidG8tZG9cIil7XG4gICAgICAgICAgICBzdGF0ZSA9IFwiZG9uZVwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHN0YXRlID0gXCJ0by1kb1wiXG4gICAgICAgIH1cbiAgICB9XG4gXG4gXG4gICAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0ZX07XG4gICAgfVxuIFxuIFxuICAgIHJldHVybiB7Y2hhbmdlVGl0bGUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcml0eSwgY2hhbmdlU3RhdGUsIGdldEluZm99XG4gfTtcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGluaXRQcm9qZWN0VGl0bGUsIGluaXRQcm9qZWN0U3ltYm9sKXtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gaW5pdFByb2plY3RUaXRsZVxuICAgIGxldCBwcm9qZWN0U3ltYm9sID0gaW5pdFByb2plY3RTeW1ib2xcbiAgICBsZXQgdGFza3MgPSB7fVxuXG4gXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrLmdldEluZm8oKS50aXRsZVxuICAgICAgICB0YXNrc1t0YXNrVGl0bGVdID0gdGFza1xuICAgIH1cbiBcbiBcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tUaXRsZSkgPT4ge1xuICAgICAgICBkZWxldGUgdGFza3NbdGFza1RpdGxlXVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBtb2RpZnlUYXNrID0gKGN1cnJlbnRUaXRsZSwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza3NbY3VycmVudFRpdGxlXTtcbiAgICAgICAgbmV3VGFzay5jaGFuZ2VUaXRsZShuZXdUaXRsZSk7XG4gICAgICAgIG5ld1Rhc2suY2hhbmdlRGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdUYXNrLmNoYW5nZUR1ZURhdGUobmV3RHVlRGF0ZSk7XG4gICAgICAgIG5ld1Rhc2suY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpO1xuICAgICAgICBkZWxldGUgdGFza3NbY3VycmVudFRpdGxlXTtcbiAgICAgICAgdGFza3NbbmV3VGl0bGVdID0gbmV3VGFzaztcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgZ2V0VGFza0luZm8gPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrc1t0YXNrVGl0bGVdLmdldEluZm8oKVxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gbmV3VGl0bGVcbiAgICB9XG4gXG4gXG4gICAgY29uc3QgY2hhbmdlUHJvamVjdFN5bWJvbCA9IChuZXdTeW1ib2wpID0+IHtcbiAgICAgICAgcHJvamVjdFN5bWJvbCA9IG5ld1N5bWJvbFxuICAgIH1cbiBcbiBcbiAgICBjb25zdCBnZXRQcm9qZWN0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0VGl0bGUsIHByb2plY3RTeW1ib2x9XG4gICAgfVxuIFxuIFxuICAgXG4gICAgcmV0dXJuIHt0YXNrcywgYWRkVGFzaywgZGVsZXRlVGFzaywgbW9kaWZ5VGFzaywgZ2V0VGFza0luZm8sIGNoYW5nZVByb2plY3RUaXRsZSwgY2hhbmdlUHJvamVjdFN5bWJvbCwgZ2V0UHJvamVjdEluZm99XG4gfVxuIFxuIFxuIFxuIFxuIFxuIFxuIGxldCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlID0ge1xuICAgIHByb2plY3RzOiB7fSxcbiAgIFxuICAgIGFkZFByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3QuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGVdID0gcHJvamVjdFxuICAgIH0sXG4gXG4gXG4gICAgcmVtb3ZlUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdFRpdGxlKXtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvamVjdHNbcHJvamVjdFRpdGxlXTtcbiAgICB9LFxuIFxuIFxuICAgIG1vZGlmeVByb2plY3Q6IGZ1bmN0aW9uKGN1cnJlbnRUaXRsZSwgbmV3VGl0bGUsIG5ld1N5bWJvbCl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSB0aGlzLnByb2plY3RzW2N1cnJlbnRUaXRsZV1cbiAgICAgICAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0VGl0bGUobmV3VGl0bGUpXG4gICAgICAgIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdFN5bWJvbChuZXdTeW1ib2wpXG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2plY3RzW2N1cnJlbnRUaXRsZV1cbiAgICAgICAgdGhpcy5wcm9qZWN0c1tuZXdUaXRsZV0gPSBuZXdQcm9qZWN0XG4gICAgfSxcbiBcbiBcbiAgICBhZGRUYXNrVG9Qcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0VGl0bGUsIHRhc2spe1xuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RUaXRsZV0uYWRkVGFzayh0YXNrKVxuICAgIH0sXG4gXG4gXG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSl7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdFRpdGxlXS5kZWxldGVUYXNrKHRhc2tUaXRsZSlcbiAgICB9LFxuIFxuIFxuICAgIGdldFRhc2tJbmZvRnJvbVByb2plY3Q6IGZ1bmN0aW9uKHRhc2tUaXRsZSl7XG4gICAgICAgIGxldCB0YXNrSW5mbztcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC50YXNrc1t0YXNrVGl0bGVdKXtcbiAgICAgICAgICAgICAgICB0YXNrSW5mbyA9IHByb2plY3QudGFza3NbdGFza1RpdGxlXS5nZXRJbmZvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrSW5mb1xuXG4gICAgfSxcbiBcbiBcbiAgICBtb2RpZnlUYXNrRnJvbVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3RUaXRsZSwgY3VycmVudFRpdGxlLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0VGl0bGVdLm1vZGlmeVRhc2soY3VycmVudFRpdGxlLG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpXG4gICAgfSxcblxuICAgIHRvZ2dsZVRhc2tTdGF0ZTogZnVuY3Rpb24odGFza1RpdGxlKXtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC50YXNrc1t0YXNrVGl0bGVdKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzW3Rhc2tUaXRsZV0uY2hhbmdlU3RhdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0QWxsVGFza3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBhbGxUYXNrcyA9IHt9XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdC50YXNrcykuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBhbGxUYXNrc1t0YXNrLmdldEluZm8oKS50aXRsZV0gPSB0YXNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGxUYXNrc1xuICAgIH0sXG4gXG4gXG4gICAgZ2V0SW1wb3J0YW50VGFza3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBpbXBvcnRhbnQgPSB7fTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2suZ2V0SW5mbygpLnByaW9yaXR5ID09PSBcImltcG9ydGFudFwiKXtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50W3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW1wb3J0YW50O1xuICAgIH0sXG5cblxuICAgIHNvcnRCeVN0YXRlOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZG9uZSA9IHt9O1xuICAgICAgICBsZXQgdG9kbyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvamVjdHMpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHByb2plY3QudGFza3MpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGFzay5nZXRJbmZvKCkuc3RhdGUgPT09IFwidG8tZG9cIil7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9bdGFzay5nZXRJbmZvKCkudGl0bGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb25lW3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge2RvbmUsIHRvZG99O1xuICAgIH0sXG4gICAgXG5cblxuICAgIHNvcnRCeURhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZHVlVG9kYXkgPSB7fTtcbiAgICAgICAgbGV0IGR1ZVRoaXNXZWVrID0ge307XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gYWRkRGF5cyh0b2RheSwgNyk7XG4gICAgXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdC50YXNrcykuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0SW5mbygpLmR1ZURhdGUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1RvZGF5KHRhc2tEdWVEYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkdWVUb2RheVt0YXNrLmdldEluZm8oKS50aXRsZV0gPSB0YXNrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaXRoaW5JbnRlcnZhbCh0YXNrRHVlRGF0ZSwgeyBzdGFydDogdG9kYXksIGVuZDogZW5kT2ZXZWVrIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1ZVRoaXNXZWVrW3Rhc2suZ2V0SW5mbygpLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4geyBkdWVUb2RheSwgZHVlVGhpc1dlZWsgfTtcbiAgICB9LFxuXG4gfVxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QsIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2V9IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBOYU4pO1xuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gX2RhdGU7XG4gIH1cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkRGF5cztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBpbnRlcnZhbCAtIFRoZSBpbnRlcnZhbCB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWxcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDMpLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIHN0YXJ0OlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0LCBlbmQ6IGRhdGUgfSlcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgZW5kOlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0OiBkYXRlLCBlbmQgfSlcbiAqIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgaW50ZXJ2YWwpIHtcbiAgY29uc3QgdGltZSA9ICt0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IFtzdGFydFRpbWUsIGVuZFRpbWVdID0gW1xuICAgICt0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpLFxuICAgICt0b0RhdGUoaW50ZXJ2YWwuZW5kKSxcbiAgXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1dpdGhpbkludGVydmFsO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQge2NyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QsIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2V9IGZyb20gXCIuL2xvZ2ljXCJcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi9kb21cIlxuXG5cblxuXG4vLyAgIC8vIENyZWF0aW5nIFRhc2tzXG4vLyBjb25zdCB0YXNrMSA9IGNyZWF0ZVRhc2soXCJUYXNrIDFcIiwgXCJEZXNjcmlwdGlvbiAxXCIsIFwiMjAyMi0wMS0wMVwiLCBcIkhpZ2hcIik7XG4vLyBjb25zdCB0YXNrMiA9IGNyZWF0ZVRhc2soXCJUYXNrIDJcIiwgXCJEZXNjcmlwdGlvbiAyXCIsIFwiMjAyMi0wMi0wMlwiLCBcIk1lZGl1bVwiKTtcblxuLy8gLy8gVGVzdGluZyBUYXNrIENyZWF0aW9uXG4vLyBjb25zb2xlLmFzc2VydCh0YXNrMS5nZXRJbmZvKCkudGl0bGUgPT09IFwiVGFzayAxXCIsIFwiVGFzayAxIGNyZWF0aW9uIGZhaWxlZFwiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHRhc2syLmdldEluZm8oKS50aXRsZSA9PT0gXCJUYXNrIDJcIiwgXCJUYXNrIDIgY3JlYXRpb24gZmFpbGVkXCIpO1xuXG4vLyAvLyBDcmVhdGluZyBQcm9qZWN0c1xuLy8gY29uc3QgcHJvamVjdDEgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxXCIsIFwiJFwiKTtcbi8vIGNvbnN0IHByb2plY3QyID0gY3JlYXRlUHJvamVjdChcIlByb2plY3QgMlwiLCBcIiRcIik7XG5cbi8vIC8vIFRlc3RpbmcgUHJvamVjdCBDcmVhdGlvblxuLy8gY29uc29sZS5hc3NlcnQocHJvamVjdDEuZ2V0UHJvamVjdEluZm8oKS5wcm9qZWN0VGl0bGUgPT09IFwiUHJvamVjdCAxXCIsIFwiUHJvamVjdCAxIGNyZWF0aW9uIGZhaWxlZFwiKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHByb2plY3QyLmdldFByb2plY3RJbmZvKCkucHJvamVjdFRpdGxlID09PSBcIlByb2plY3QgMlwiLCBcIlByb2plY3QgMiBjcmVhdGlvbiBmYWlsZWRcIik7XG5cbi8vIEFkZGluZyBUYXNrcyB0byBQcm9qZWN0c1xuLy8gcHJvamVjdDEuYWRkVGFzayh0YXNrMSk7XG4vLyBwcm9qZWN0Mi5hZGRUYXNrKHRhc2syKTtcblxuLy8gLy8gVGVzdGluZyBBZGRpbmcgVGFza3MgdG8gUHJvamVjdHNcbi8vIGNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW3Rhc2sxLmdldEluZm8oKS50aXRsZV0gPT09IHRhc2sxLCBcIkFkZGluZyB0YXNrMSB0byBwcm9qZWN0MSBmYWlsZWRcIik7XG4vLyBjb25zb2xlLmFzc2VydChwcm9qZWN0Mi50YXNrc1t0YXNrMi5nZXRJbmZvKCkudGl0bGVdID09PSB0YXNrMiwgXCJBZGRpbmcgdGFzazIgdG8gcHJvamVjdDIgZmFpbGVkXCIpO1xuXG4vLyAvLyBNb2RpZnlpbmcgVGFza3Mgd2l0aGluIFByb2plY3RzXG4vLyBwcm9qZWN0MS5tb2RpZnlUYXNrKHRhc2sxLCBcIlRhc2sgMSBNb2RpZmllZFwiLCBcIlVwZGF0ZWQgRGVzY3JpcHRpb24gMVwiLCBcIjIwMjItMDMtMDNcIiwgXCJMb3dcIik7XG4vLyBjb25zb2xlLmFzc2VydChwcm9qZWN0MS50YXNrc1tcIlRhc2sgMSBNb2RpZmllZFwiXSAhPT0gdW5kZWZpbmVkLCBcIk1vZGlmeWluZyB0YXNrMSB3aXRoaW4gcHJvamVjdDEgZmFpbGVkXCIpO1xuXG5cbi8vIC8vIERlbGV0aW5nIFRhc2tzIGZyb20gUHJvamVjdHNcbi8vIHByb2plY3QxLmRlbGV0ZVRhc2sodGFzazEpO1xuLy8gY29uc29sZS5hc3NlcnQocHJvamVjdDEudGFza3NbXCJUYXNrIDEgTW9kaWZpZWRcIl0gPT09IHVuZGVmaW5lZCwgXCJEZWxldGluZyB0YXNrMSBmcm9tIHByb2plY3QxIGZhaWxlZFwiKTtcblxuXG4vLyAvLyBBZGRpbmcgYSBQcm9qZWN0IHRvIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Vcbi8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkUHJvamVjdChwcm9qZWN0MSk7XG4vLyBjb25zb2xlLmFzc2VydCh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzW1wiUHJvamVjdCAxXCJdID09PSBwcm9qZWN0MSwgXCJBZGRpbmcgcHJvamVjdDEgdG8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cbi8vIC8vIE1vZGlmeWluZyBhIFByb2plY3QgaW4gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZVxuLy8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5tb2RpZnlQcm9qZWN0KHByb2plY3QxLCBcIlByb2plY3QgMSBVcGRhdGVkXCIsIFwiXCIpO1xuLy8gY29uc29sZS5hc3NlcnQodGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5wcm9qZWN0c1tcIlByb2plY3QgMSBVcGRhdGVkXCJdLmdldFByb2plY3RJbmZvKCkucHJvamVjdFN5bWJvbCA9PT0gXCJcIiwgXCJNb2RpZnlpbmcgcHJvamVjdDEgaW4gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZSBmYWlsZWRcIik7XG5cbi8vIC8vIFJlbW92aW5nIGEgUHJvamVjdCBmcm9tIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Vcbi8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucmVtb3ZlUHJvamVjdChwcm9qZWN0MSk7XG4vLyBjb25zb2xlLmFzc2VydCh0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLnByb2plY3RzW1wiUHJvamVjdCAxIFVwZGF0ZWRcIl0gPT09IHVuZGVmaW5lZCwgXCJSZW1vdmluZyBwcm9qZWN0MSBmcm9tIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG4vLyBSZS1hZGRpbmcgdGhlIFByb2plY3QgYW5kIFRhc2sgZm9yIEZ1cnRoZXIgVGVzdGluZ1xuLy8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5hZGRQcm9qZWN0KHByb2plY3QxKTtcblxuLy8gLy8gQWRkaW5nIGEgVGFzayB0byBhIFByb2plY3QgdGhyb3VnaCB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlXG4vLyB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmFkZFRhc2tUb1Byb2plY3QocHJvamVjdDEsIHRhc2sxKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHByb2plY3QxLnRhc2tzW3Rhc2sxLmdldEluZm8oKS50aXRsZV0gPT09IHRhc2sxLCBcIkFkZGluZyB0YXNrMSB0byBwcm9qZWN0MSB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG5cbi8vIC8vIFJlbW92aW5nIGEgVGFzayBmcm9tIGEgUHJvamVjdCB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2Vcbi8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UucmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3QxLCB0YXNrMSk7XG4vLyBjb25zb2xlLmFzc2VydChwcm9qZWN0MS50YXNrc1t0YXNrMS5nZXRJbmZvKCkudGl0bGVdID09PSB1bmRlZmluZWQsIFwiUmVtb3ZpbmcgdGFzazEgZnJvbSBwcm9qZWN0MSB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG4vLyAvLyAvLyBHZXR0aW5nIFRhc2sgSW5mbyBmcm9tIGEgUHJvamVjdCB0aHJvdWdoXG5cbi8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0MSwgdGFzazEpOyAvLyBSZS1hZGQgdGFzayBmb3IgdGVzdGluZ1xuLy8gY29uc3QgdGFza0luZm8gPSB0aGVHb2RDb250YWluZXJPZlRoZVVuaXZlcnNlLmdldFRhc2tJbmZvRnJvbVByb2plY3QocHJvamVjdDEsIHRhc2sxKTtcbi8vIGNvbnNvbGUuYXNzZXJ0KHRhc2tJbmZvICYmIHRhc2tJbmZvLnRpdGxlID09PSB0YXNrMS5nZXRJbmZvKCkudGl0bGUsIFwiR2V0dGluZyB0YXNrIGluZm8gZnJvbSBwcm9qZWN0MSB0aHJvdWdoIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UgZmFpbGVkXCIpO1xuXG5cblxuLy8gdGhlR29kQ29udGFpbmVyT2ZUaGVVbml2ZXJzZS5tb2RpZnlUYXNrRnJvbVByb2plY3QocHJvamVjdDEsIHRhc2sxLFwiVGFzayAxIE1vZGlmaWVkXCIsIFwiVXBkYXRlZCBEZXNjcmlwdGlvbiAxXCIsIFwiMjAyNC0wMS0yMFwiLCBcImltcG9ydGFudFwiKVxuXG4vLyBsZXQgdGFzazMgPSBjcmVhdGVUYXNrKFwiVGFzayAzXCIsIFwiRGVzY3JpcHRpb24gM1wiLCBcIjIwMjQtMDEtMTdcIiwgXCJpbXBvcnRhbnRcIilcbi8vIHRoZUdvZENvbnRhaW5lck9mVGhlVW5pdmVyc2UuYWRkVGFza1RvUHJvamVjdChcIlByb2plY3QgMVwiLCB0YXNrMylcbi8vIGNvbnNvbGUubG9nKHRhc2sxLmdldEluZm8oKS5kdWVEYXRlKVxuXG5cblxuZG9tLmFkZEV2ZW50TGlzdGVuZXJzKClcbmRvbS5zaG93UHJvamVjdHNJblNpZGViYXIoKVxuXG5cbi8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsXCIpXG4vLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4vLyAgICAgd2hpbGUobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKXtcbi8vICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKClcbi8vICAgICB9XG4vLyB9KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9