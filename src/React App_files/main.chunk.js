(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-screen{\n  background: url(" + escape(__webpack_require__(/*! ../src/imgs/Login-bg.jpg */ "./src/imgs/Login-bg.jpg")) + ") no-repeat center center;\n  background-size: cover;\n}\n.add-trip-bg{\n  background: url(" + escape(__webpack_require__(/*! ../src/imgs/addteam-bg.jpg */ "./src/imgs/addteam-bg.jpg")) + ") no-repeat center center;\n  background-size: cover;\n}\n\n.feed-bg{\n  background: url(" + escape(__webpack_require__(/*! ../src/imgs/newsfeed-bg.jpg */ "./src/imgs/newsfeed-bg.jpg")) + ") no-repeat center center;\n  background-size: cover;\n}\n.trip-card{\n  width: 30%;\n}\n\n.h-pro-header{\n  height: 500px;\n  background: url(" + escape(__webpack_require__(/*! ../src/imgs/addteam-bg.jpg */ "./src/imgs/addteam-bg.jpg")) + ") no-repeat center center;\n  background-size: cover;\n}\n.h-pro-image{\n  height: 400px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _views_LadingPageView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/LadingPageView */ "./src/views/LadingPageView.js");
/* harmony import */ var _views_LoginView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/LoginView */ "./src/views/LoginView.js");
/* harmony import */ var _views_RegisterView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/RegisterView */ "./src/views/RegisterView.js");
/* harmony import */ var _views_NewsFeedView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/NewsFeedView */ "./src/views/NewsFeedView.js");
/* harmony import */ var _views_UserProfileView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/UserProfileView */ "./src/views/UserProfileView.js");
/* harmony import */ var _views_AddTripView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/AddTripView */ "./src/views/AddTripView.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/App.js";

 //Views






 // CSS



var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/",
        component: _views_LoginView__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/register",
        component: _views_RegisterView__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/newsfeed",
        component: _views_NewsFeedView__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/user/:id",
        component: _views_UserProfileView__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/addTrip",
        component: _views_AddTripView__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: FETCH_NEWSFEED_START, FETCH_NEWSFEED_SUCCESS, FETCH_NEWSFEED_FAIL, FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAIL, USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, userLogin, getNewsFeed, getUsers, addUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWSFEED_START", function() { return FETCH_NEWSFEED_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWSFEED_SUCCESS", function() { return FETCH_NEWSFEED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWSFEED_FAIL", function() { return FETCH_NEWSFEED_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_START", function() { return FETCH_USERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_SUCCESS", function() { return FETCH_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_FAIL", function() { return FETCH_USERS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER_START", function() { return ADD_USER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER_SUCCESS", function() { return ADD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER_FAIL", function() { return ADD_USER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_START", function() { return USER_LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_SUCCESS", function() { return USER_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_FAIL", function() { return USER_LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsFeed", function() { return getNewsFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var FETCH_NEWSFEED_START = "FETCH_NEWSFEED_START";
var FETCH_NEWSFEED_SUCCESS = "FETCH_NEWSFEED_SUCCESS";
var FETCH_NEWSFEED_FAIL = "FETCH_NEWSFEED_FAIL";
var FETCH_USERS_START = "FETCH_USERS_START";
var FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
var FETCH_USERS_FAIL = "FETCH_USERS_FAIL";
var ADD_USER_START = "ADD_USER_START";
var ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
var ADD_USER_FAIL = "ADD_USER_FAIL";
var USER_LOGIN_START = "USER_LOGIN_START";
var USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
var USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
var userLogin = function userLogin(user) {
  return function (dispatch) {
    dispatch({
      type: USER_LOGIN_START
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("https://localhost:5000/user", user).then(function (res) {
      if (res.status === 200 && res.data) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res.data.username
        }); // localStorage.setItem('jwt', res.data.token)
      } else {
        throw new Error();
      }
    }).then(getNewsFeed()).then(getUsers()).catch(function (err) {
      return console.log(err);
    });
  };
};
var getNewsFeed = function getNewsFeed() {
  return function (dispatch) {
    dispatch({
      type: FETCH_NEWSFEED_START
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://guidr2.herokuapp.com/adventures").then(function (res) {
      return dispatch({
        type: FETCH_NEWSFEED_SUCCESS,
        payload: res.data
      });
    }).catch(function (err) {
      return dispatch({
        type: FETCH_NEWSFEED_FAIL,
        payload: err
      });
    });
  };
}; // export const getNewsFeed = () => dispatch =>{
//     const token = localStorage.getItem('jwt')
//     console.log(token)
//     const headers = { headers: { Authorization: token } }
//     console.log(headers)
//     // dispatch({type: FETCH_NEWSFEED_START});
//     if(token){
//       console.log('we are fetching our ventures')
//       axios.get(`https://guidr2.herokuapp.com/adventures`, headers)
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
//     }
//   }

var getUsers = function getUsers() {
  return function (dispatch) {
    dispatch({
      type: FETCH_USERS_START
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://guidr2.herokuapp.com/user").then(function (res) {
      return dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    }).catch(function (err) {
      return dispatch({
        type: FETCH_USERS_FAIL,
        payload: err
      });
    });
  };
};
var addUser = function addUser(user) {
  return function (dispatch) {
    console.log(user);
    dispatch({
      type: ADD_USER_START
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("https://guidr2.herokuapp.com/user", user) // .then(res => console.log(res))
    .then(function (res) {
      return dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data
      });
    }).catch(function (err) {
      return dispatch({
        type: ADD_USER_FAIL,
        payload: err
      });
    });
  };
}; // addUser = (user) => {
//   const token = localStorage.getItem('token')
//   const headers = { headers: { 'Authorization': `Token ${token}` } }
//   axios.post('http://127.0.0.1:8000/api/countries/', newCountry, headers)
//     .then(resp => this.getData())
//     .catch(function (error) {
//       console.log(error);
//     })
// }
// export const getSingleUser = user => dispatch =>{
//   dispatch({type: FETCH_SINGLE_USER_START});
//   axios.
// }

/***/ }),

/***/ "./src/components/AddTrip.js":
/*!***********************************!*\
  !*** ./src/components/AddTrip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/AddTrip.js";


var AddTrip = function AddTrip(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-2/5 my-8 mx-auto flex flex-col justify-center h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit() {
      return console.log("submitting");
    },
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Add an Adventure!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    for: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    name: "title",
    placeholder: "Name Your Trip ex. Two Day Hike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    for: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
    type: "date",
    name: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    for: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    name: "location",
    placeholder: "Where'd You Go?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    for: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Duration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    name: "duration",
    placeholder: "How many Days was your trip?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    for: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    type: "radio",
    name: "adventure_type",
    value: "Back Packing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ml-2 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Back Packing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    type: "radio",
    name: "adventure_type",
    value: "Hiking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Hiking")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    type: "radio",
    name: "adventure_type",
    value: "Cycling",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Cycling")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    type: "radio",
    name: "adventure_type",
    value: "Climbing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Climbing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    type: "radio",
    name: "adventure_type",
    value: "Diving",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Diving"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    for: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Professional or Pleasure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "mr-2",
    type: "radio",
    name: "professional",
    value: "professional",
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Professional"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "mr-2",
    type: "radio",
    name: "professional",
    value: "personal",
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Pleasure"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    for: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Description/Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    rows: "4",
    onChange: function onChange(e) {
      return props.handleChanges(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    name: "description",
    spellcheck: "true",
    placeholder: "Any thoughts about your Trip?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-green-dark hover:bg-green-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddTrip);

/***/ }),

/***/ "./src/components/LandingPage.js":
/*!***************************************!*\
  !*** ./src/components/LandingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/LandingPage.js";

function LandingPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "LadingPage"));
}

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _imgs_mocklogo2_0_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/mocklogo2.0.png */ "./src/imgs/mocklogo2.0.png");
/* harmony import */ var _imgs_mocklogo2_0_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imgs_mocklogo2_0_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/Login.js";



function Login(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full max-w-xs mx-auto flex flex-col justify-center h-screen ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _imgs_mocklogo2_0_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return props.submitLogin(e);
    },
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-bold mb-2 text-left",
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    name: "username",
    placeholder: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "text-left block text-grey-darker text-sm font-bold mb-2",
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline",
    id: "password",
    type: "password",
    name: "password",
    placeholder: "******************",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-green-dark hover:bg-green-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/register",
    className: "inline-block align-baseline font-bold text-sm text-green-dark hover:text-green-darker",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Need to Register?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center text-grey text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\xA9", new Date().getFullYear(), " Guidr. All rights reserved."));
}

/***/ }),

/***/ "./src/components/NewsFeed/NewsFeed.js":
/*!*********************************************!*\
  !*** ./src/components/NewsFeed/NewsFeed.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsFeed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _TripCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TripCard */ "./src/components/NewsFeed/TripCard.js");
/* harmony import */ var _imgs_adventure_title_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../imgs/adventure-title.png */ "./src/imgs/adventure-title.png");
/* harmony import */ var _imgs_adventure_title_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_adventure_title_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/NewsFeed/NewsFeed.js";




function NewsFeed(props) {
  console.log(props.users);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "w-full flex justify-end h-12 border border-blue items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "no-underline mx-2 text-lg text-green-dark hover:text-green-darker",
    to: '/user/:id',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: function onClick() {
      return props.logout();
    },
    className: "no-underline mx-4 text-lg text-red hover:text-red-darker",
    to: '/login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Logout")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-64 flex items-center justify-center feed-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _imgs_adventure_title_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter w-full flex justify-center h-12 border border-blue items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Filter Trip Type:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Hiking"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Back Packing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Rock Climbing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Cycling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Scuba Diving")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex flex-wrap justify-around mt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.adventures.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TripCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: props.users.find(function (user) {
        return user.id === item.user_id;
      }),
      adventure: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    });
  })));
}

/***/ }),

/***/ "./src/components/NewsFeed/TripCard.js":
/*!*********************************************!*\
  !*** ./src/components/NewsFeed/TripCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/NewsFeed/TripCard.js";


function TripCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trip-card my-2 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-black font-bold text-xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.adventure.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-grey-darker text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Location: ", props.adventure.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-grey-darker text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Type: ", props.adventure.adventure_type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-grey-darker text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Duration: ", props.adventure.duration), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-grey-darker text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Work or Pleasure: ", props.adventure.professional ? 'Professional' : 'Pleasure'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/user/:id",
    className: "text-black leading-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-grey-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.adventure.date))));
}

/***/ }),

/***/ "./src/components/Register.js":
/*!************************************!*\
  !*** ./src/components/Register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/Register.js";

function Register(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mx-auto flex flex-col justify-center h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return props.handleSubmit(e);
    },
    className: "w-4/5 mx-auto bg-white shadow-md px-8 pt-6 mb-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Registration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-around rounded px-8 pt-6 pb-8 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center",
    id: "username",
    type: "text",
    name: "username",
    placeholder: "Username",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center",
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Email",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center",
    id: "password",
    type: "password",
    name: "password",
    placeholder: "Password",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center",
    id: "password2",
    type: "password",
    name: "password2",
    placeholder: "Retype Password",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center",
    id: "name",
    type: "text",
    name: "name",
    placeholder: "Full Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center",
    id: "location",
    type: "text",
    name: "location",
    placeholder: "Location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center",
    id: "bio",
    type: "text",
    name: "bio",
    placeholder: "Bio",
    maxLength: "400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4 w-4/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "text-center block text-grey-darker text-sm font-bold mb-2",
    htmlFor: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Professional? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return props.handleChange(e);
    },
    className: "shadow",
    id: "professional",
    type: "checkbox",
    name: "professional",
    placeholder: "Professional",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick(e) {
      return props.handleSubmit(e);
    },
    className: "bg-green-dark hover:bg-green-darker text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick(e) {
      return props.clearForm(e);
    },
    className: "bg-grey hover:bg-green-darker text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center text-grey text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\xA9", new Date().getFullYear(), " Guidr. All rights reserved."));
}

/***/ }),

/***/ "./src/components/UserProfile/Trip.js":
/*!********************************************!*\
  !*** ./src/components/UserProfile/Trip.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/UserProfile/Trip.js";



var showDescription = function showDescription(e) {
  e.preventDefault();
  var target = e.target.nextSibling;

  if (target.classList.contains('hidden')) {
    target.classList.toggle("hidden");
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].from(target, .75, {
      yPercent: -20,
      opacity: 0
    });
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to(target, .5, {
      yPercent: 0,
      opacity: 1
    });
  } else {
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].from(target, 1, {
      yPercent: 0,
      opacity: 1
    });
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to(target, 1, {
      yPercent: -20,
      opacity: 0
    });
    setTimeout(function () {
      target.classList.toggle("hidden");
    }, 650);
  }
};

function Trip() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick(e) {
      return showDescription(e);
    },
    className: "z-20 relative rounded-sm bg-green-dark text-white collapsible border w-full h-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Title   \u25CA  Date   \u25CA   Duration   \u25CA   Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden z-0 content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: " border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Title: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, " Backyard Hike")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Location: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, " Appalachian Trail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Duration: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " 2 Nights")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Type of Trip: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, " Back Packing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Professional or Pleasure: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, " Pleasure")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Notes: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "We didn't go far to experience the great outdoors. Walked 5 miles and camped three nights. Enjoyed meals of hotdogs and marshmellows. Encountered a coyote... how neat! "))))));
}

/***/ }),

/***/ "./src/components/UserProfile/TripList.js":
/*!************************************************!*\
  !*** ./src/components/UserProfile/TripList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trip */ "./src/components/UserProfile/Trip.js");
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/UserProfile/TripList.js";


function TripList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-3/5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Matt Basile's Adventures"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/components/UserProfile/UserProfile.js":
/*!***************************************************!*\
  !*** ./src/components/UserProfile/UserProfile.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _imgs_hiker_pro_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../imgs/hiker-pro-img.jpg */ "./src/imgs/hiker-pro-img.jpg");
/* harmony import */ var _imgs_hiker_pro_img_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imgs_hiker_pro_img_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TripList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TripList */ "./src/components/UserProfile/TripList.js");
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/components/UserProfile/UserProfile.js";




function UserProfile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "w-full bg-green-dark flex justify-end h-12 border  items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "no-underline mx-2 text-lg text-white hover:text-green-darker",
    to: '/newsfeed',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "AdventureFeed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "no-underline mx-2 text-lg text-white hover:text-green-darker",
    to: '/addTrip',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Add Trip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "no-underline mx-4 text-lg text-red hover:text-red-darker",
    to: '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Logout")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex h-pro-header items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 flex px-4 flex-col justify-center items-center h-pro-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-lg rounded border border-8 border-white",
    src: _imgs_hiker_pro_img_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "bg-white w-4/5 rounded  p-4 flex flex-col justify-between leading-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "self-end far fa-edit text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Name: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Matt Basile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Email: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "mbhiker@gmail.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Location: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Hudson, NY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Bio: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Born and raised in New England I've always had an affinity for the outdoors. Whether that's Kayaking, Free Climbing or going on an overnight trip, I'm down! I've logged over 300 hours of outdoor trainings and this spring will be my 15th season guiding trips. If you want to learn more about me or my trip curation please shoot me an email!"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TripList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/imgs/Login-bg.jpg":
/*!*******************************!*\
  !*** ./src/imgs/Login-bg.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Login-bg.98bc01b2.jpg";

/***/ }),

/***/ "./src/imgs/addteam-bg.jpg":
/*!*********************************!*\
  !*** ./src/imgs/addteam-bg.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/addteam-bg.8fd310a4.jpg";

/***/ }),

/***/ "./src/imgs/adventure-title.png":
/*!**************************************!*\
  !*** ./src/imgs/adventure-title.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/adventure-title.acf0ff2d.png";

/***/ }),

/***/ "./src/imgs/hiker-pro-img.jpg":
/*!************************************!*\
  !*** ./src/imgs/hiker-pro-img.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hiker-pro-img.78981ad3.jpg";

/***/ }),

/***/ "./src/imgs/mocklogo2.0.png":
/*!**********************************!*\
  !*** ./src/imgs/mocklogo2.0.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/imgs/newsfeed-bg.jpg":
/*!**********************************!*\
  !*** ./src/imgs/newsfeed-bg.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/newsfeed-bg.c91bf09c.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/ */ "./src/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/index.js";


 // CSS Stylings


 // Provider/Loggers






var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_6__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers___WEBPACK_IMPORTED_MODULE_7__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_9___default.a)));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}))), document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");


var initialState = {
  isFetchingFeed: false,
  isFetchingUsers: false,
  isLoggingIn: false,
  isLoggedIn: false,
  adventures: [],
  error: null,
  users: [],
  username: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEWSFEED_START"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        isFetchingFeed: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEWSFEED_SUCCESS"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        isFetchingFeed: false,
        adventures: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEWSFEED_FAIL"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isFetchingFeed: false,
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS_START"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isFetchingUsers: true,
        error: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS_SUCCESS"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        isFetchingFeed: false,
        users: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS_FAIL"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isFetchingFeed: false,
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_USER_START"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAddingUser: true,
        error: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_USER_SUCCESS"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        users: payload,
        error: null,
        isAddingUser: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_USER_FAIL"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: payload,
        isAddingUser: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGIN_START"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        isLoggingIn: true,
        isLoggedIn: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGIN_SUCCESS"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        isLoggedIn: true,
        isLoggingIn: false,
        username: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGIN_FAIL"]:
      return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: payload,
        isLoggedIn: false,
        isLoggingIn: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/views/AddTripView.js":
/*!**********************************!*\
  !*** ./src/views/AddTripView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTripView; });
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AddTrip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AddTrip */ "./src/components/AddTrip.js");







var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/views/AddTripView.js";



var AddTripView =
/*#__PURE__*/
function (_Component) {
  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddTripView, _Component);

  function AddTripView(props) {
    var _this;

    Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddTripView);

    _this = Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddTripView).call(this, props));

    _this.handleChanges = function (e) {
      console.log(e.target.value);

      if (e.target.name === 'adventure_type') {
        _this.setState({
          newTrip: Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.newTrip, {
            "adventure_type": e.target.value
          })
        });
      } else if (e.target.value === "professional") {
        _this.setState({
          newTrip: Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.newTrip, {
            "professional": true
          })
        });
      } else if (e.target.value === "personal") {
        _this.setState({
          newTrip: Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.newTrip, {
            "professional": false
          })
        });
      } else {
        _this.setState({
          newTrip: Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.newTrip, Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value))
        });
      }
    };

    _this.state = {
      newTrip: {
        "adventure_type": "",
        "title": "",
        "location": "",
        "duration": "",
        "description": " ",
        "professional": false,
        "date": null
      }
    };
    return _this;
  }

  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddTripView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "py-12 add-trip-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_AddTrip__WEBPACK_IMPORTED_MODULE_8__["default"], {
        handleChanges: this.handleChanges,
        newTrip: this.state.newTrip,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }]);

  return AddTripView;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/views/LadingPageView.js":
/*!*************************************!*\
  !*** ./src/views/LadingPageView.js ***!
  \*************************************/
/*! exports provided: LadingPageView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LadingPageView", function() { return LadingPageView; });
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LandingPage */ "./src/components/LandingPage.js");





var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/views/LadingPageView.js";



var LadingPageView =
/*#__PURE__*/
function (_Component) {
  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LadingPageView, _Component);

  function LadingPageView() {
    Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LadingPageView);

    return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LadingPageView).apply(this, arguments));
  }

  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LadingPageView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_LandingPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return LadingPageView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(LadingPageView));

/***/ }),

/***/ "./src/views/LoginView.js":
/*!********************************!*\
  !*** ./src/views/LoginView.js ***!
  \********************************/
/*! exports provided: LoginView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginView", function() { return LoginView; });
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Login */ "./src/components/Login.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");







var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/views/LoginView.js";




var LoginView =
/*#__PURE__*/
function (_Component) {
  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginView, _Component);

  function LoginView() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LoginView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      userLoggingIn: {
        username: '',
        password: ''
      }
    };

    _this.handleChange = function (e) {
      console.log(e.target.name, e.target.value);

      _this.setState({
        userLoggingIn: Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.userLoggingIn, Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value))
      });
    };

    _this.submitLogin = function (e) {
      e.preventDefault();

      _this.props.userLogin(_this.state.userLoggingIn);

      _this.props.error ? alert(_this.props.error) : _this.props.history.push('/newsfeed');
    };

    return _this;
  }

  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "w-screen login-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_9__["default"], {
        submitLogin: this.submitLogin,
        handleChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }));
    }
  }]);

  return LoginView;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    error: state.error
  };
};

var mapDispatchToProps = {
  userLogin: _actions__WEBPACK_IMPORTED_MODULE_10__["userLogin"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(LoginView));

/***/ }),

/***/ "./src/views/NewsFeedView.js":
/*!***********************************!*\
  !*** ./src/views/NewsFeedView.js ***!
  \***********************************/
/*! exports provided: NewsFeedView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedView", function() { return NewsFeedView; });
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_NewsFeed_NewsFeed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NewsFeed/NewsFeed */ "./src/components/NewsFeed/NewsFeed.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");





var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/views/NewsFeedView.js";




var NewsFeedView =
/*#__PURE__*/
function (_Component) {
  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsFeedView, _Component);

  function NewsFeedView() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewsFeedView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NewsFeedView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.logout = function () {
      // localStorage.removeItem('jwt')
      _this.props.history.push('/');
    };

    return _this;
  }

  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NewsFeedView, [{
    key: "componentDidMount",
    //   static propTypes = {
    //     prop: PropTypes
    //   }
    value: function componentDidMount() {
      this.props.getNewsFeed();
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.users);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NewsFeed_NewsFeed__WEBPACK_IMPORTED_MODULE_7__["default"], {
        adventures: this.props.adventures,
        users: this.props.users,
        logout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return NewsFeedView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetchingFeed: state.isFetchingFeed,
    adventures: state.adventures,
    error: state.error,
    users: state.users,
    isLoggedIn: state.isLoggedIn
  };
};

var mapDispatchToProps = {
  getNewsFeed: _actions__WEBPACK_IMPORTED_MODULE_8__["getNewsFeed"],
  getUsers: _actions__WEBPACK_IMPORTED_MODULE_8__["getUsers"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(NewsFeedView));

/***/ }),

/***/ "./src/views/RegisterView.js":
/*!***********************************!*\
  !*** ./src/views/RegisterView.js ***!
  \***********************************/
/*! exports provided: RegisterView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterView", function() { return RegisterView; });
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Register */ "./src/components/Register.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");







var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/views/RegisterView.js";




var RegisterView =
/*#__PURE__*/
function (_Component) {
  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RegisterView, _Component);

  function RegisterView() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RegisterView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RegisterView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      newUser: {
        username: "",
        email: "",
        password: "",
        password2: "",
        name: "",
        location: "",
        bio: "",
        professional: false
      }
    };

    _this.clearForm = function (e) {
      e.preventDefault();

      _this.setState({
        username: "",
        email: "",
        password: "",
        password2: "",
        name: "",
        location: "",
        bio: "",
        professional: false
      });

      _this.props.history.push('/');
    };

    _this.handleSubmit = function (e) {
      var newUserLocal = {
        username: _this.state.newUser.username,
        email: _this.state.newUser.email,
        password: _this.state.newUser.password,
        name: _this.state.newUser.name,
        location: _this.state.newUser.location,
        bio: _this.state.newUser.bio,
        professional: _this.state.newUser.professional
      };
      e.preventDefault();

      if (_this.state.password === _this.state.password2) {
        //send the data via axios
        _this.props.addUser(newUserLocal);

        _this.props.error ? alert(_this.props.error) : _this.clearForm(e);
      } else {
        alert("You're passwords don't match.");
      }
    };

    _this.handleChange = function (e) {
      console.log(e.target.name, e.target.value);

      if (e.target.name === "professional") {
        _this.setState({
          newUser: Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.newUser, {
            professional: !_this.state.professional
          })
        });
      } else {
        _this.setState({
          newUser: Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.newUser, Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value))
        });
      }
    };

    return _this;
  }

  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RegisterView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "w-screen login-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange,
        clearForm: this.clearForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    }
  }]);

  return RegisterView;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.error
  };
};

var mapDispatchToProps = {
  addUser: _actions__WEBPACK_IMPORTED_MODULE_10__["addUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(RegisterView));

/***/ }),

/***/ "./src/views/UserProfileView.js":
/*!**************************************!*\
  !*** ./src/views/UserProfileView.js ***!
  \**************************************/
/*! exports provided: UserProfileView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileView", function() { return UserProfileView; });
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserProfile/UserProfile */ "./src/components/UserProfile/UserProfile.js");





var _jsxFileName = "/Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/views/UserProfileView.js";



var UserProfileView =
/*#__PURE__*/
function (_Component) {
  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProfileView, _Component);

  function UserProfileView() {
    Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProfileView);

    return Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProfileView).apply(this, arguments));
  }

  Object(_Users_matthewbasile_Desktop_Build_Week_guidr_client_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProfileView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }
  }]);

  return UserProfileView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(UserProfileView));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/matthewbasile/Desktop/Build_Week/guidr-client-deploy/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map