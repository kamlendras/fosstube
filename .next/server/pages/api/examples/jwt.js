"use strict";
(() => {
var exports = {};
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 5698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ jwt)
});

;// CONCATENATED MODULE: external "next-auth/jwt"
const jwt_namespaceObject = require("next-auth/jwt");
;// CONCATENATED MODULE: ./pages/api/examples/jwt.js
// This is an example of how to read a JSON Web Token from an API route

const secret = process.env.SECRET;
/* harmony default export */ const jwt = (async (req, res)=>{
    const token = await (0,jwt_namespaceObject.getToken)({
        req,
        secret
    });
    res.send(JSON.stringify(token, null, 2));
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5698));
module.exports = __webpack_exports__;

})();