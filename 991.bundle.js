(()=>{"use strict";function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function n(n,t){if(n){if("string"==typeof n)return e(n,t);var r={}.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a,o,u=[],s=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(u.push(r.value),u.length!==n);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw i}}return u}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t){return function(n){if(Array.isArray(n))return e(n)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e){var n=function(e){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=a(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(n)?n:n+""}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function s(e,n,t){return n&&u(e.prototype,n),t&&u(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,n,t){return(n=o(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,n){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},f(e,n)}var d=function(e){return e[e.BanishFromDeck=0]="BanishFromDeck",e[e.BanishFromHand=1]="BanishFromHand",e[e.PayLife=2]="PayLife",e[e.Discard=3]="Discard",e}({}),h=function(e){return e[e.Discard=0]="Discard",e[e.BanishFromHand=1]="BanishFromHand",e[e.BanishFromDeck=2]="BanishFromDeck",e}({}),y=function(e){return e[e.NoSpecialSummon=0]="NoSpecialSummon",e[e.NoMoreDraws=1]="NoMoreDraws",e[e.NoPreviousDraws=2]="NoPreviousDraws",e}({});function v(e,n,t){return n=l(n),function(e,n){if(n&&("object"==a(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(n,t||[],l(e).constructor):n.apply(e,t))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var m=function(){return s((function e(n,t){i(this,e),c(this,"_name",void 0),c(this,"_details",void 0),c(this,"_tags",void 0),this._name=n,this._details=t,this._tags=t.tags||null}),[{key:"name",get:function(){return this._name}},{key:"nameLower",get:function(){return this.name.toLowerCase()}},{key:"tags",get:function(){return this._tags}},{key:"details",get:function(){return this._details}},{key:"isFree",get:function(){return!1}}])}(),g=function(e){function n(e,t){return i(this,n),v(this,n,[e,t])}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&f(e,n)}(n,e),s(n,[{key:"isFree",get:function(){return!0}},{key:"count",get:function(){return this.details.free.count?this.details.free.count:0}},{key:"oncePerTurn",get:function(){return this.details.free.oncePerTurn}},{key:"restrictions",get:function(){var e;return(null===(e=this.details.free)||void 0===e?void 0:e.restriction)||[]}},{key:"cost",get:function(){var e,n;return null!==(e=null===(n=this.details.free)||void 0===n?void 0:n.cost)&&void 0!==e?e:null}},{key:"condition",get:function(){var e,n;return null!==(e=null===(n=this.details.free)||void 0===n?void 0:n.condition)&&void 0!==e?e:null}},{key:"excavate",get:function(){var e,n;return null!==(e=null===(n=this.details.free)||void 0===n?void 0:n.excavate)&&void 0!==e?e:null}},{key:"activationCount",get:function(){var e,n,t=this.count;switch(null===(e=this.cost)||void 0===e?void 0:e.type){case d.BanishFromDeck:t+=null==(n=this.cost)?0:"number"==typeof n.value?n.value:"string"==typeof n.value?1:0;case d.BanishFromHand:case d.Discard:case d.PayLife:}return t}}])}(m);function b(e,n){return n.free?new g(e,n):new m(e,n)}function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var _=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;i(this,e),c(this,"_cards",void 0);var a=t-n.length;a>0&&n.push.apply(n,r(Array(a).fill(b("Empty Card",{tags:["Empty","Blank","Non Engine"]})))),this._cards=n.slice(),this.shuffle()}return s(e,[{key:"deepCopy",value:function(){var n=new e([],this._cards.length);return n._cards=this._cards.map((function(e){return b(e.name,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.details))})),n}},{key:"drawCard",value:function(){if(0===this._cards.length)throw new Error("Cannot draw from an empty deck");return this._cards.pop()}},{key:"shuffle",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random,n=this._cards.length-1;n>0;n--){var t=Math.floor(e()*(n+1)),r=[this._cards[t],this._cards[n]];this._cards[n]=r[0],this._cards[t]=r[1]}}},{key:"addToBottom",value:function(e){var n;(n=this._cards).push.apply(n,r(e))}},{key:"deckList",get:function(){return r(this._cards)}},{key:"deckCount",get:function(){return this._cards.length}}])}();function S(e){var n,i=[],a=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return k(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw a}}}}(e);try{for(a.s();!(n=a.n()).done;){var o,u=t(n.value,2),s=u[0],c=u[1],l=null!==(o=c.qty)&&void 0!==o?o:1;i.push.apply(i,r(Array(l).fill(b(s,c))))}}catch(e){a.e(e)}finally{a.f()}return new _(i)}function P(e){return function(e){var n=0;function t(){function t(e){if(!e||"location"!==(null==e?void 0:e.type))return j.Hand;switch(n++,e.value.toLowerCase()){case"deck":return j.Deck;case"hand":return j.Hand;default:throw new TypeError("Invalid location: "+e.value)}}var i=e[n];if("number"===i.type){n++;var a=e[n];if(a){if("name"===a.type){n++;var o=parseInt(i.value),u=i.value.includes("+")?">=":i.value.includes("-")?"<=":"=",s=t(e[n]);return new T(a.value,o,u,s)}throw new TypeError("Expected card name after number")}}if("name"===i.type){n++;var c=t(e[n]);return new T(i.value,1,">=",c)}if("paren"===i.type){if("("===i.value){n++;var l=r();if("paren"!==e[n].type||")"!==e[n].value)throw new SyntaxError("Expected closing parenthesis");return n++,l}throw new SyntaxError("Unexpected closing parenthesis")}throw new TypeError("Unexpected token type: ".concat(i.type))}function r(){for(var r=e[n-1],i="paren"===(null==r?void 0:r.type)&&"("===r.value,a=t();n<e.length&&"operator"===e[n].type;){var o=e[n].value;n++;var u=t();a="AND"===o?new D([a,u],i):new H([a,u],i)}return a}var i=r();if(n<e.length)throw"paren"===e[n].type&&")"===e[n].value?new SyntaxError("Unexpected closing parenthesis"):new SyntaxError("Unexpected token after valid expression");return i}(function(e){var n=[],t=0;function r(e){return e.match(/^IN /)}function i(){var r=/[0-9]/,i=e[t];if(/[0-9](\+||-)? /.test(e.slice(t,t+3))){for(var a="";r.test(i);)a+=i,i=e[++t];return"+"!==i&&"-"!==i||(a+=i,i=e[++t]),n.push({type:"number",value:a}),!0}return!1}function a(){var i,a=/[a-zA-Z0-9\s\-',.&:!?"]+$/,o=e[t];if(a.test(o)){for(var c="";t<e.length&&(a.test(o)||" "===o);){if(i=o,new RegExp("[^".concat(a.source.slice(1,-1),"]")).test(i))throw new TypeError("Illegal character in card name: "+o);if((" "!==o||c&&a.test(e[t+1]))&&(c+=o),o=e[++t],u(e.slice(t))||s(e.slice(t))||r(e.slice(t)))break}return n.push({type:"name",value:c.trim()}),!0}return!1}function o(i){if(r(i)){t+=3;var a=e.slice(t).match(/(deck|hand)/i)[0];if(!a)throw new TypeError('Expected location after "IN"');return n.push({type:"location",value:a}),t+=a.length,!0}return!1}function u(e){return e.match(/^AND\b/)}function s(e){return e.match(/^OR\b/)}for(;t<e.length;){var c=e[t];if("("!==c&&")"!==c)if(/\s/.test(c))t++;else if(u(e.slice(t)))n.push({type:"operator",value:"AND"}),t+=3;else if(s(e.slice(t)))n.push({type:"operator",value:"OR"}),t+=2;else{var l=n[n.length-1];if(!("number"===(null==l?void 0:l.type)&&a()||i()||o(e.slice(t))||a()))throw new TypeError("Unknown character: ".concat(c," at position ").concat(t," of ").concat(e))}else n.push({type:"paren",value:c}),t++}return n}(e))}function C(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return O(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw a}}}}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var j=function(e){return e[e.Hand=0]="Hand",e[e.Deck=1]="Deck",e}({});function A(e){return{condition:e.toString(),successes:e.successes,failures:e.failures}}function F(e){for(var n=P(e.condition),t=0;t<e.successes;t++)n.recordSuccess();for(var r=0;r<e.failures;r++)n.recordFailure();return n}function E(e,n){return n.filter((function(n){return n.name===e.cardName||n.tags&&n.tags.includes(e.cardName)}))}var T=function(){return s((function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:">=",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:j.Hand;i(this,e),this.cardName=n,this.quantity=t,this.operator=r,this.location=a,c(this,"_successes",0),c(this,"_failures",0)}),[{key:"successes",get:function(){return this._successes}},{key:"recordSuccess",value:function(){this._successes++}},{key:"failures",get:function(){return this._failures}},{key:"recordFailure",value:function(){this._failures++}},{key:"totalEvaluations",get:function(){return this.successes+this.failures}},{key:"requiredCards",value:function(e){for(var n=this,t=e.slice(),r=[],i=0;i<this.quantity;i++){var a=t.findIndex((function(e){return e.name===n.cardName||e.tags&&e.tags.includes(n.cardName)}));if(-1===a)return[];r.push(t[a]),t.splice(a,1)}return r}},{key:"toString",value:function(){return"".concat(this.quantity).concat(function(e){switch(e){case">=":return"+";case"=":return"";case"<=":return"-";default:return e}}(this.operator)," ").concat(this.cardName," IN ").concat(j[this.location])}}])}(),D=function(){return s((function e(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i(this,e),this.conditions=n,this.hasParentheses=t,c(this,"_successes",0),c(this,"_failures",0),n.some((function(e){return null==e}))&&console.error("Found a dead condition")}),[{key:"successes",get:function(){return this._successes}},{key:"recordSuccess",value:function(){this._successes++}},{key:"failures",get:function(){return this._failures}},{key:"recordFailure",value:function(){this._failures++}},{key:"totalEvaluations",get:function(){return this.successes+this.failures}},{key:"checkCombinations",value:function(e,n,t){var r=this;if(0===t.length)return!0;var i,a=t[0],o=t.slice(1),u=C(this.getPossibleCombinations(e,n,a));try{var s,c=function(){var t=i.value,a=e.filter((function(e){return!t.includes(e)}));if(r.checkCombinations(a,n,o))return{v:!0}};for(u.s();!(i=u.n()).done;)if(s=c())return s.v}catch(e){u.e(e)}finally{u.f()}return!1}},{key:"getPossibleCombinations",value:function(e,n,t){if(t instanceof T){var r=e.filter((function(e){return e.name===t.cardName||e.tags&&e.tags.includes(t.cardName)}));return this.getCombinations(r,t.quantity)}var i={get hand(){return e},get deck(){return n}};return N(t,i.hand,i.deck.deckList)?[t.requiredCards(e)]:[]}},{key:"getCombinations",value:function(e,n){var t=this;if(n>e.length||n<=0)return[];if(n===e.length)return[e];if(1===n)return e.map((function(e){return[e]}));for(var i=[],a=function(){var a=e[o];t.getCombinations(e.slice(o+1),n-1).forEach((function(e){i.push([a].concat(r(e)))}))},o=0;o<e.length-n+1;o++)a();return i}},{key:"requiredCards",value:function(e){var n=new Set;return this.checkCombinations(e,new _([]),this.conditions),Array.from(n)}},{key:"toString",value:function(){return"".concat(this.hasParentheses?"(":"").concat(this.conditions.map((function(e){return e.toString()})).join(" AND ")).concat(this.hasParentheses?")":"")}}])}(),H=function(){return s((function e(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i(this,e),this.conditions=n,this.hasParentheses=t,c(this,"_successes",0),c(this,"_failures",0),n.some((function(e){return null==e}))&&console.error("Found a dead condition")}),[{key:"successes",get:function(){return this._successes}},{key:"recordSuccess",value:function(){this._successes++}},{key:"failures",get:function(){return this._failures}},{key:"recordFailure",value:function(){this._failures++}},{key:"totalEvaluations",get:function(){return this.successes+this.failures}},{key:"requiredCards",value:function(e){var n=e.slice();return this.conditions.flatMap((function(e){var t=e.requiredCards(n);return n=n.filter((function(e){return!t.includes(e)})),t}))}},{key:"toString",value:function(){return"".concat(this.hasParentheses?"(":"").concat(this.conditions.map((function(e){return e.toString()})).join(" OR ")).concat(this.hasParentheses?")":"")}}])}();function B(e,n,t){var i;if(e instanceof T)i=function(e,n,t){return function(){var r=[];switch(e.location){case j.Deck:r=t;break;default:console.error("Unknown location: ".concat(e.location));case j.Hand:r=n}var i=E(e,r).length,a=!1,o=[];switch(e.operator){case">=":a=i>=e.quantity,o=E(e,r).slice(0,e.quantity);break;case"=":a=i===e.quantity,o=E(e,r).slice(0,e.quantity);break;case"<=":a=i<=e.quantity;break;default:throw new Error("Unknown operator: ".concat(e.operator))}return a?e.recordSuccess():e.recordFailure(),{success:a,usedCards:o}}()}(e,n,t);else if(e instanceof D)i=function(e,n,t){return i={success:!0,usedCards:[]},e.conditions.forEach((function(e){var a,o=B(e,n.filter((function(e){return!i.usedCards.includes(e)})),t);o.success?(a=i.usedCards).push.apply(a,r(o.usedCards)):i.success=!1})),i.success?e.recordSuccess():e.recordFailure(),i;var i}(e,n,t);else{if(!(e instanceof H))throw new Error("Unknown condition type: ".concat(e));i=function(e,n,t){return r={success:!1,usedCards:[]},e.conditions.forEach((function(e){B(e,n,t).success&&(r.success=!0)})),r.success?e.recordSuccess():e.recordFailure(),r;var r}(e,n,t)}return i}function N(e,n,t){var i,a=function(e){return function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t===n.length-1)return[n.slice()];for(var i=[],a=t;a<n.length;a++){var o=[n[a],n[t]];n[t]=o[0],n[a]=o[1],i.push.apply(i,r(e(n,t+1)));var u=[n[a],n[t]];n[t]=u[0],n[a]=u[1]}return i}(e)}(n),o=C(a);try{for(o.s();!(i=o.n()).done;)if(B(e,i.value,t).success)return!0}catch(e){o.e(e)}finally{o.f()}return!1}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n){return!(n.oncePerTurn&&e.cardsPlayedThisTurn.some((function(e){return e.name===n.name}))||e.deck.deckCount<n.activationCount||e.freeCardsPlayedThisTurn.some((function(e){var n;return null===(n=e.restrictions)||void 0===n?void 0:n.includes(y.NoMoreDraws)}))||!function(e,n){if(n.restrictions){var t,r=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return I(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?I(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw a}}}}(n.restrictions);try{for(r.s();!(t=r.n()).done;)switch(t.value){case y.NoSpecialSummon:case y.NoMoreDraws:break;case y.NoPreviousDraws:if(e.freeCardsPlayedThisTurn.length>0)return!1}}catch(e){r.e(e)}finally{r.f()}}return!0}(e,n)||!function(e,n){if(!n.cost)return!0;var t=e.hand.filter((function(e){return e!==n}));switch(n.cost.type){case d.BanishFromDeck:if("number"==typeof n.cost.value){if(e.deck.deckCount<n.cost.value)return!1}else if("string"==typeof n.cost.value)return!1;break;case d.BanishFromHand:if(t.length<n.cost.value)return!1;break;case d.Discard:if("number"==typeof n.cost.value&&t.length<n.cost.value)return!1;case d.PayLife:}return!0}(e,n))}function q(e,n,t){var r=n.deepCopy();return e instanceof T?(t&&r.hand.push(t),N(e,n.hand,n.deck.deckList)?1:0):e instanceof D?e.conditions.filter((function(e){return q(e,r,t)>0})).length:e instanceof H&&e.conditions.some((function(e){return q(e,r,t)>0}))?1:0}function M(e,n){if(e.gameState.hand.find((function(e){return e.name===n.name}))){var t=e.gameState.hand.find((function(e){return e.name===n.name}));x(e.gameState,t)&&function(e,n,t){if(e.hand.includes(n)){if(x(e,n)){var i;e.playCard(n),function(e,n,t){if(n.cost){var i=t.requiredCards(e.hand);switch(n.cost.type){case d.BanishFromDeck:e.banishFromHand(r(Array(n.cost.value)).map((function(){return e.deck.drawCard()})));break;case d.BanishFromHand:case d.Discard:var a=e.hand.filter((function(e){return!i.includes(e)})),o=[];if("number"==typeof n.cost.value){var u;if((u=o).push.apply(u,r(a.slice(0,n.cost.value))),o.length<n.cost.value)throw new Error("Not enough cards to pay cost")}else{var s=n.cost.value;if(!(o=a.filter((function(e){var n;return s.includes(e.name)||(null===(n=e.tags)||void 0===n?void 0:n.some((function(e){return s.includes(e)})))}))))throw new Error("No card to pay cost")}n.cost.type===d.BanishFromHand?e.banishFromHand(o):e.discardFromHand(o);case d.PayLife:}}}(e,n,t),n.count>0&&(i=e.hand).push.apply(i,r(r(Array(n.count)).map((function(){return e.deck.drawCard()})))),function(e,n,t){var i;if(n.excavate){var a=n.excavate,o=a.count,u=a.pick,s=r(Array(o)).map((function(){return e.deck.drawCard()})),c=q(t,e,null),l=s.sort((function(n,r){var i=q(t,e,n)-c;return q(t,e,r)-c-i}));(i=e.hand).push.apply(i,r(l.slice(0,u))),e.deck.addToBottom(l.slice(u))}}(e,n,t),function(e,n,t){if(!n.condition)return!0;var i=t.requiredCards(e.hand);switch(n.condition.type){case h.BanishFromDeck:e.banishFromHand(r(Array(n.condition.value)).map((function(){return e.deck.drawCard()})));break;case h.Discard:case h.BanishFromHand:var a=e.hand.filter((function(e){return!i.includes(e)}));if("number"!=typeof n.condition.value){var o=n.condition.value,u=a.find((function(e){var n;return(null===(n=e.tags)||void 0===n?void 0:n.includes(o))||e.name===o}));if(!u)return!1;n.condition.type===h.BanishFromHand?e.banishFromHand([u]):e.discardFromHand([u]),e.hand,e.hand.filter((function(e){return e===u}));break}var s=n.condition.value;if(a.length<s)return!1;var c=a.slice(0,s);n.condition.type===h.BanishFromHand?e.banishFromHand(c):e.discardFromHand(c),e.hand,e.hand.filter((function(e){return!c.includes(e)}))}return!0}(e,n,t)||e.discardFromHand(e.hand)}}else console.error("Card is not in the player's hand")}(e.gameState,t,e.condition)}else console.error("Card is not in the player's hand")}function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=function(){function e(n){i(this,e),c(this,"_deck",void 0),c(this,"_hand",[]),c(this,"_banishPile",[]),c(this,"_graveyard",[]),c(this,"_cardsPlayed",[]),this._deck=n.deepCopy(),this._deck.shuffle()}return s(e,[{key:"deepCopy",value:function(){var n=new e(this._deck);return this._deck=this._deck.deepCopy(),n._hand=this._hand.map((function(e){return b(e.name,U({},e.details))})),n._banishPile=this._banishPile.map((function(e){return b(e.name,U({},e.details))})),n._graveyard=this._graveyard.map((function(e){return b(e.name,U({},e.details))})),n}},{key:"serialise",value:function(){return{hand:this.hand.map((function(e){return{name:e.name,details:e.details}})),deck:this.deck.deckList.map((function(e){return{name:e.name,details:e.details}})),banishPile:this.banishPile.map((function(e){return{name:e.name,details:e.details}})),graveyard:this.graveyard.map((function(e){return{name:e.name,details:e.details}})),cardsPlayedThisTurn:this.cardsPlayedThisTurn.map((function(e){return{name:e.name,details:e.details}}))}}},{key:"drawHand",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;this._hand=Array(n).fill(null).map((function(){return e._deck.drawCard()}))}},{key:"playCard",value:function(e){this._hand.includes(e)?(e.isFree&&e.oncePerTurn&&this.cardsPlayedThisTurn.some((function(n){return n.name===e.name}))&&console.error("Card has already been played this turn and is only usable once per turn"),this._cardsPlayed.push(e),this._hand=this._hand.filter((function(n){return n!==e}))):console.error("Card is not in the player's hand")}},{key:"discardFromHand",value:function(e){var n;(n=this._graveyard).push.apply(n,r(e)),this._hand=this._hand.filter((function(n){return!e.includes(n)}))}},{key:"banishFromHand",value:function(e){var n;(n=this._banishPile).push.apply(n,r(e)),this._hand=this._hand.filter((function(n){return!e.includes(n)}))}},{key:"deck",get:function(){return this._deck}},{key:"hand",get:function(){return this._hand}},{key:"banishPile",get:function(){return this._banishPile}},{key:"graveyard",get:function(){return this._graveyard}},{key:"freeCardsInHand",get:function(){return this._hand.filter((function(e){return e.isFree}))}},{key:"cardsPlayedThisTurn",get:function(){return this._cardsPlayed}},{key:"freeCardsPlayedThisTurn",get:function(){return this.cardsPlayedThisTurn.filter((function(e){return e.isFree}))}}],[{key:"deserialize",value:function(n){var t=new e(S(new Map(n.deck.map((function(e){return[e.name,e.details]})))));return t._hand=n.hand.map((function(e){return b(e.name,e.details)})),t._banishPile=n.banishPile.map((function(e){return b(e.name,e.details)})),t._graveyard=n.graveyard.map((function(e){return b(e.name,e.details)})),t._cardsPlayed=n.cardsPlayedThisTurn.map((function(e){return b(e.name,e.details)})),t}}])}();function z(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return $(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?$(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw a}}}}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var J=function(){function e(n,t){i(this,e),c(this,"_gameState",void 0),c(this,"_result",void 0),c(this,"_condition",void 0),this._gameState=n.deepCopy(),this._result=!1,this._condition=t}return s(e,[{key:"run",value:function(){this._result=N(this._condition,this._gameState.hand,this._gameState.deck.deckList)}},{key:"serialise",value:function(){return{result:this.result,gameState:this._gameState.serialise(),condition:A(this._condition)}}},{key:"result",get:function(){return this._result}},{key:"condition",get:function(){return this._condition}},{key:"gameState",get:function(){return this._gameState}}],[{key:"deserialise",value:function(n){var t=new e(R.deserialize(n.gameState),F(n.condition));return t._result=n.result,t}}])}(),Z=function(){function e(n,t){i(this,e),c(this,"_gameState",void 0),c(this,"_branches",new Map),c(this,"_conditions",void 0),this._gameState=n.deepCopy(),this._conditions=t}return s(e,[{key:"runBranch",value:function(e){e.run(),this._branches.has(e.condition)||this._branches.set(e.condition,[]),(this._branches.get(e.condition)||[]).push(e)}},{key:"iterate",value:function(){var e=this;this._conditions.forEach((function(n){var t=new J(e._gameState,n);e.runBranch(t),e.result||e.generateFreeCardPermutations(e._gameState,n)}))}},{key:"generateFreeCardPermutations",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=e.freeCardsInHand.filter((function(n){return x(e,n)&&!t.includes(n)}));if(0!==i.length){var a,o=z(i);try{for(o.s();!(a=o.n()).done;){var u=a.value;if(x(e,u)){var s=e.deepCopy(),c=new J(s,n);if(M(c,u),this.runBranch(c),this.result)return;this.generateFreeCardPermutations(c.gameState,n,[].concat(r(t),[u]))}}}catch(e){o.e(e)}finally{o.f()}}}},{key:"serialise",value:function(){return{gameState:this._gameState.serialise(),conditions:this._conditions.map(A),branches:Array.from(this._branches).map((function(e){return t(e,2)[1].map((function(e){return e.serialise()}))})).flat()}}},{key:"result",get:function(){return this.successfulBranches.some((function(e){var n=t(e,2)[1],r=void 0!==n&&n.result;return r&&console.log(n),r}))}},{key:"conditions",get:function(){return this._conditions}},{key:"gameState",get:function(){return this._gameState}},{key:"branches",get:function(){return this._branches}},{key:"successfulBranches",get:function(){return Array.from(this._branches).map((function(e){var n=t(e,2);return[n[0],n[1].find((function(e){return e.result}))]}))}},{key:"failedBranches",get:function(){return Array.from(this._branches).map((function(e){var n=t(e,2);return[n[0],n[1].find((function(e){return!e.result}))]}))}}],[{key:"deserialise",value:function(n){var t,r=new e(R.deserialize(n.gameState),n.conditions.map(F)),i=z(n.branches.map(J.deserialise));try{for(i.s();!(t=i.n()).done;){var a,o=t.value;r._branches.has(o.condition)||r._branches.set(o.condition,[]),null===(a=r._branches.get(o.condition))||void 0===a||a.push(o)}}catch(e){i.e(e)}finally{i.f()}return r}}])}();self.onmessage=function(e){var n=e.data,t=n.cards,r=n.conditions,i=n.handSize,a=n.batchSize,o=[];console.log("Running simulation with ".concat(a," batches of ").concat(i," hands"));for(var u=0;u<a;u++){var s=S(new Map(t)),c=JSON.parse(r).map(P),l=new R(s);l.drawHand(i);var f=new Z(l.deepCopy(),c);f.iterate(),o.push(f.serialise())}self.postMessage(JSON.stringify(o))}})();
//# sourceMappingURL=991.bundle.js.map