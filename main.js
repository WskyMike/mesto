(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._image=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._cardSelector=n,this._handleImgClick=r,this._handleDelClick=o,this._handleLikeClick=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._elementTrash.addEventListener("click",(function(){return e._handleDelClick(e._id)})),this._elementImg.addEventListener("click",(function(){return e._handleImgClick()}))}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._elementLikeCount.textContent=this._likes.length,this.isLiked()?this._blackLikeIcon():this._whiteLikeIcon()}},{key:"_blackLikeIcon",value:function(){this._elementLike.classList.add("elements__like-icon_active")}},{key:"_whiteLikeIcon",value:function(){this._elementLike.classList.remove("elements__like-icon_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementName=this._element.querySelector(".elements__text"),this._elementImg=this._element.querySelector(".elements__picture"),this._elementLike=this._element.querySelector(".elements__like-icon"),this._elementTrash=this._element.querySelector(".elements__trash"),this._elementLikeCount=this._element.querySelector(".elements__like-count"),this._setEventListeners(),this.setLikes(this._likes),this._elementName.textContent=this._name,this._elementImg.src=this._image,this._elementImg.alt=this._name,this._userId!==this._ownerId&&(this._elementTrash.style.display="none"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__form",inputSelector:".popup__input",inputInvalidClass:"popup__input_type_invalid",inputSpanErrorClass:"popup__input-error_visible",submitButtonSelector:".popup__submit",submitButtonInactiveClass:"popup__submit_inactive"},r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__avatar-button"),a=(document.querySelector(".profile__user-name"),document.querySelector(".profile__user-about"),document.querySelector(".profile__avatar-src"),document.querySelectorAll(".popup"),document.querySelector(".popup_style_fullscreen-img")),u=document.querySelector(".popup_style_edit-profile"),s=document.querySelector(".popup__input_data_user-name"),c=document.querySelector(".popup__input_data_user-about"),l=document.querySelector(".popup__form_type_profile"),f=document.querySelector(".popup_style_add-photo"),p=(document.querySelector(".popup__input_data_title-photo"),document.querySelector(".popup__input_data_link-to-pic"),document.querySelector(".popup__form_type_photo")),h=document.querySelector(".popup_style_delete"),_=document.querySelector(".popup_style_avatar"),d=document.querySelector(".elements__container");function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputInvalidClass),t.textContent=e.validationMessage,t.classList.add(this._settings.inputSpanErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputInvalidClass),t.classList.remove(this._settings.inputSpanErrorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_submitButtonInactive",value:function(){this._buttonElement.classList.add(this._settings.submitButtonInactiveClass),this._buttonElement.disabled=!0}},{key:"_submitButtonActive",value:function(){this._buttonElement.classList.remove(this._settings.submitButtonInactiveClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._submitButtonInactive():this._submitButtonActive()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=o,this._items=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function O(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._img=t._popup.querySelector(".popup__fullscreen-img"),t._title=t._popup.querySelector(".popup__fullscreen-title"),t}return t=a,(n=[{key:"open",value:function(e,t){L(C(a.prototype),"open",this).call(this),this._img.src=t,this._img.alt=e,this._title.textContent=e}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function A(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._handleSubmitForm=t,n._inputs=function(e){if(Array.isArray(e))return q(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._popupSubmitButton=n._popup.querySelector(".popup__submit"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"close",value:function(){T(x(a.prototype),"close",this).call(this),this._form.reset()}},{key:"changeSubmitHandler",value:function(e){this._handleSubmitForm=e}},{key:"setEventListeners",value:function(){var e=this;T(x(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"renderLoading",value:function(e){this._popupSubmitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._ava=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._about.textContent=t,this._ava.src=n}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F,J=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deletelike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addlike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"654b92bf-739a-4fff-ad65-57ae2eab02aa","Content-Type":"application/json"}});J.getProfile().then((function(e){G.setUserInfo(e.name,e.about,e.avatar),F=e._id})).catch((function(e){return alert(e)})),J.getInitialCards().then((function(e){e.reverse().forEach((function(e){var t=M({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:F,ownerId:e.owner._id});z.addItem(t)}))})).catch((function(e){return alert(e)}));var M=function(e){var n=new t(e,"#template__card",(function(){Z.open(e.name,e.link)}),(function(e){ee.open(),ee.changeSubmitHandler((function(){ee.renderLoading(!0),J.deleteCard(e).then((function(){n.deleteCard(),ee.close()})).catch((function(e){return alert(e)})).finally((function(){return $.renderLoading(!1)}))}))}),(function(e){n.isLiked()?J.deletelike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){return alert(e)})):J.addlike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){return alert(e)}))}));return n.generateCard()},z=new b({items:[]},d);z.renderItems(),r.addEventListener("click",(function(){var e=G.getUserInfo(),t=e.name,n=e.about;s.value=t,c.value=n,$.open(),K.resetValidation()}));var $=new V(u,(function(e){$.renderLoading(!0),J.editProfile(e.name,e.about).then((function(e){G.setUserInfo(e.name,e.about),$.close()})).catch((function(e){return alert(e)})).finally((function(){return $.renderLoading(!1)}))}));$.setEventListeners();var G=new N({nameSelector:".profile__user-name",aboutSelector:".profile__user-about",avatarSelector:".profile__avatar-src"}),K=new m(n,l);K.enableValidation(),o.addEventListener("click",(function(){Q.open(),W.resetValidation()}));var Q=new V(f,(function(e){Q.renderLoading(!0),J.addCard(e.name,e.link).then((function(e){var t=M({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:F,ownerId:e.owner._id});z.addItem(t),Q.close()})).catch((function(e){return alert(e)})).finally((function(){return Q.renderLoading(!1)}))}));Q.setEventListeners();var W=new m(n,p);W.enableValidation(),i.addEventListener("click",(function(){X.open(),Y.resetValidation()}));var X=new V(_,(function(e){X.renderLoading(!0),J.updateAvatar(e.avatar).then((function(e){G.setUserInfo(e.name,e.about,e.avatar),X.close()})).catch((function(e){return alert(e)})).finally((function(){return X.renderLoading(!1)}))}));X.setEventListeners();var Y=new m(n,_);Y.enableValidation();var Z=new j(a);Z.setEventListeners();var ee=new V(h);ee.setEventListeners()})();