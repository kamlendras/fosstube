"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 6970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/facebook"
const facebook_namespaceObject = require("next-auth/providers/facebook");
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/github"
const github_namespaceObject = require("next-auth/providers/github");
var github_default = /*#__PURE__*/__webpack_require__.n(github_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/twitter"
const twitter_namespaceObject = require("next-auth/providers/twitter");
var twitter_default = /*#__PURE__*/__webpack_require__.n(twitter_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/auth0"
const auth0_namespaceObject = require("next-auth/providers/auth0");
var auth0_default = /*#__PURE__*/__webpack_require__.n(auth0_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js






// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    // https://next-auth.js.org/configuration/providers
    providers: [
        /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
      
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */ facebook_default()({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        github_default()({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        google_default()({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        twitter_default()({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET
        }),
        auth0_default()({
            clientId: process.env.AUTH0_ID,
            clientSecret: process.env.AUTH0_SECRET,
            issuer: process.env.AUTH0_ISSUER
        }), 
    ],
    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a separate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,
    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `strategy` should be set to 'jwt' if no database is used.
        strategy: "jwt"
    },
    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
    },
    // You can define custom pages to override the built-in ones. These will be regular Next.js pages
    // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
    },
    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
    },
    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {
    },
    // You can set the theme to 'light', 'dark' or use 'auto' to default to the
    // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
    theme: {
        colorScheme: "light"
    },
    // Enable debug messages in the console if you are having problems
    debug: false
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6970));
module.exports = __webpack_exports__;

})();