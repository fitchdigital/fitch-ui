
/*!
@fileoverview @fitch-digital/fitch-ui
@author FITCH DIGITAL
@version 0.0.51

Copyright (c) 2018-2019, FITCH DIGITAL.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
  (global = global || self, factory(global['@fitch-digital/fitch-ui'] = {}, global.React, global.PropTypes, global.classnames));
}(this, function (exports, React, PropTypes, classNames) { 'use strict';

  function ___$insertStyle(css) {
    if (!css) {
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }

    var style = document.createElement('style');

    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
  }

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.padding {\n  position: relative;\n  padding: 0 var(--padding-small);\n}\n.padding:before, .padding:after {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  font-family: monospace;\n  font-size: 8px;\n  color: black;\n  width: var(--padding-small);\n  content: \"S\";\n  opacity: 0;\n}\n.padding:before {\n  left: 0;\n}\n.padding:after {\n  right: 0;\n}\n@media only screen and (min-width: 768px) {\n  .padding {\n    padding: 0 var(--padding-medium);\n  }\n  .padding:before, .padding:after {\n    width: var(--padding-medium);\n    content: \"M\";\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .padding {\n    padding: 0 var(--padding-large);\n  }\n  .padding:before, .padding:after {\n    width: var(--padding-large);\n    content: \"L\";\n  }\n}\n.padding.debug:before, .padding.debug:after {\n  opacity: 1;\n  background-color: rgba(0, 255, 255, 0.3);\n}");

  var Padding =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Padding, _PureComponent);

    function Padding() {
      _classCallCheck(this, Padding);

      return _possibleConstructorReturn(this, _getPrototypeOf(Padding).apply(this, arguments));
    }

    _createClass(Padding, [{
      key: "render",
      value: function render() {
        var classes = classNames(_defineProperty({
          padding: true,
          debug: this.props.debug
        }, this.props.className, this.props.className !== undefined));
        return React__default.createElement("div", {
          className: classes
        }, this.props.children);
      }
    }]);

    return Padding;
  }(React.PureComponent);

  _defineProperty(Padding, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    debug: PropTypes.bool
  });

  _defineProperty(Padding, "defaultProps", {
    debug: false
  });

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.spacer.small {\n  height: var(--spacer-small);\n}\n.spacer.medium {\n  height: var(--spacer-medium);\n}\n.spacer.large {\n  height: var(--spacer-large);\n}\n.spacer.debug {\n  background-color: rgba(0, 255, 255, 0.3);\n}");

  var Spacer =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Spacer, _PureComponent);

    function Spacer() {
      _classCallCheck(this, Spacer);

      return _possibleConstructorReturn(this, _getPrototypeOf(Spacer).apply(this, arguments));
    }

    _createClass(Spacer, [{
      key: "render",
      value: function render() {
        var classes = classNames({
          spacer: true,
          debug: this.props.debug,
          small: !!this.props.small,
          medium: !!this.props.medium,
          large: !!this.props.large
        });
        return React__default.createElement("div", {
          className: classes
        });
      }
    }]);

    return Spacer;
  }(React.PureComponent);

  _defineProperty(Spacer, "propTypes", {
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    debug: PropTypes.bool
  });

  _defineProperty(Spacer, "defaultProps", {
    small: true,
    debug: false
  });

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.spinner {\n  border: var(--spinner-width) solid var(--spinner-color-secondary);\n  border-top: var(--spinner-width) solid var(--spinner-color-primary);\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}");

  var Spinner =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Spinner, _PureComponent);

    function Spinner() {
      _classCallCheck(this, Spinner);

      return _possibleConstructorReturn(this, _getPrototypeOf(Spinner).apply(this, arguments));
    }

    _createClass(Spinner, [{
      key: "render",
      value: function render() {
        return React__default.createElement("div", {
          className: "spinner"
        });
      }
    }]);

    return Spinner;
  }(React.PureComponent);

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.button {\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  vertical-align: top;\n  cursor: pointer;\n  text-align: left;\n  padding: 0;\n  margin: 0;\n  align-items: normal;\n  display: inline-flex;\n  font-family: var(--core-font-family);\n  font-weight: var(--core-font-weight);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: all 0.3s ease-in-out;\n}\n.button:focus {\n  outline: none;\n}\n.button .label {\n  z-index: 1;\n}\n.button .label p {\n  height: 20px;\n  line-height: 20px;\n  padding: 0;\n  margin: 0;\n}\n.button .label svg {\n  width: 20px;\n}");

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.button.primary {\n  position: relative;\n  color: var(--button-primary-color);\n  padding: var(--button-primary-padding);\n  background-color: var(--button-primary-background);\n  border-radius: var(--core-border-radius);\n  border: 1px solid transparent;\n}\n.button.primary:before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  border-radius: var(--core-border-radius);\n  background-color: #000000;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n  z-index: 0;\n}\n.button.primary.hover:not(.active):before {\n  opacity: 0.08;\n}\n@media (hover: hover) {\n  .button.primary:hover:not(.active):before {\n    opacity: 0.08;\n  }\n}\n.button.primary.disabled {\n  pointer-events: none;\n  opacity: var(--core-opacity-disabled);\n}");

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.button.secondary {\n  position: relative;\n  color: var(--button-secondary-color);\n  padding: var(--button-secondary-padding);\n  background-color: var(--button-secondary-background);\n  border-radius: var(--core-border-radius);\n  border: 1px solid transparent;\n}\n.button.secondary:before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  border-radius: var(--core-border-radius);\n  background-color: #000000;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n  z-index: 0;\n}\n.button.secondary.hover:not(.active):before {\n  opacity: 0.08;\n}\n@media (hover: hover) {\n  .button.secondary:hover:not(.active):before {\n    opacity: 0.08;\n  }\n}\n.button.secondary.disabled {\n  pointer-events: none;\n  opacity: var(--core-opacity-disabled);\n}\n.button.secondary.active {\n  color: var(--button-minimal-color-focus);\n}");

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.button.minimal {\n  position: relative;\n  color: var(--button-minimal-color);\n  padding: var(--button-minimal-padding);\n  background-color: var(--button-minimal-background);\n  border-radius: var(--core-border-radius);\n  border: 1px solid transparent;\n}\n.button.minimal.hover {\n  color: var(--button-minimal-color-focus);\n}\n@media (hover: hover) {\n  .button.minimal:hover:not(.active) {\n    color: var(--button-minimal-color-focus);\n  }\n}\n.button.minimal.disabled {\n  pointer-events: none;\n  opacity: var(--core-opacity-disabled);\n}\n.button.minimal.active {\n  color: var(--button-minimal-color-focus);\n}");

  var Button =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Button, _PureComponent);

    function Button() {
      _classCallCheck(this, Button);

      return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
    }

    _createClass(Button, [{
      key: "renderContent",
      value: function renderContent() {
        var _this$props = this.props,
            title = _this$props.title,
            icon = _this$props.icon;
        var Icon = icon;
        return React__default.createElement("div", {
          className: "label"
        }, title && React__default.createElement("p", null, title), icon && React__default.createElement(Icon, null));
      }
    }, {
      key: "render",
      value: function render() {
        var classes = classNames({
          button: true,
          hover: this.props.hover === true,
          disabled: this.props.disabled === true,
          primary: !!this.props.primary,
          secondary: !!this.props.secondary,
          minimal: !!this.props.minimal
        });

        if (!this.props.primary && !this.props.secondary && !this.props.minimal) {
          console.warn('No theme in button');
        }

        if (this.props.onClick) {
          return React__default.createElement("button", {
            type: this.props.type,
            className: classes,
            onClick: this.props.onClick
          }, this.renderContent());
        }

        if (this.props.href) {
          return React__default.createElement("a", {
            href: this.props.href,
            target: this.props.target,
            className: classes
          }, this.renderContent());
        }

        return React__default.createElement("button", {
          type: this.props.type,
          className: classes
        }, this.renderContent());
      }
    }]);

    return Button;
  }(React.PureComponent);

  _defineProperty(Button, "propTypes", {
    title: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button']),
    icon: PropTypes.func,
    onClick: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    minimal: PropTypes.bool,
    hover: PropTypes.bool,
    disabled: PropTypes.bool
  });

  _defineProperty(Button, "defaultProps", {
    target: '_blank',
    type: 'button'
  });

  var IconCheckmark = (function (props) {
    return React__default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, props), React__default.createElement("path", {
      d: "M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"
    }));
  });

  // used to exclude factory properties and returns all other properties.
  // this allows an input field to be passed any extra parameters without compromising
  // the component's logic.
  // example:
  // <TextInput name="test" aria-label="a test" />
  // will allow the non factory props `name` and `aria-label` to be added to the
  // resulting <input />
  var excludeFactoryProps = function excludeFactoryProps(excludes, factory) {
    var values = Object.assign({}, factory);

    for (var i = 0; i < excludes.length; i++) {
      delete values[excludes[i]];
    }

    return values;
  };

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.checkbox label {\n  display: flex;\n  align-items: center;\n}\n.checkbox .element {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  max-height: 16px;\n  background-color: var(--checkbox-background);\n  border: 1px solid var(--checkbox-border-color);\n  border-radius: var(--core-border-radius);\n}\n.checkbox .element input {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.checkbox .element input:focus {\n  outline: none;\n}\n.checkbox .element svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 12px;\n  transform: translateX(-50%) translateY(-50%);\n  fill: transparent;\n  pointer-events: none;\n}\n.checkbox .label {\n  margin-left: 0.5rem;\n  color: var(--checkbox-label);\n}\n.checkbox .error {\n  font-family: var(--core-font-family);\n  font-size: 11px;\n  margin-bottom: 0.5rem;\n  color: var(--core-color-error);\n  padding: var(--core-padding-error);\n}\n.checkbox.focus .element, .checkbox:focus-within .element, .checkbox:hover .element {\n  border: 1px solid var(--checkbox-border-color-focus);\n}\n.checkbox.disabled {\n  pointer-events: none;\n}\n.checkbox.disabled .element {\n  opacity: var(--core-opacity-disabled);\n}\n.checkbox.checked .element {\n  background-color: var(--checkbox-background-checked);\n  border: 1px solid transparent;\n}\n.checkbox.checked .element svg {\n  fill: var(--checkbox-indicator--checked);\n}");

  var Checkbox =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Checkbox, _PureComponent);

    function Checkbox() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Checkbox);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        checked: !!_this.props.checked
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        _this.setState(function (prevState) {
          return {
            checked: !prevState.checked
          };
        });

        if (_this.props.onChange) {
          _this.props.onChange(e);
        }
      });

      return _this;
    }

    _createClass(Checkbox, [{
      key: "render",
      value: function render() {
        var classes = classNames({
          checkbox: true,
          focus: !!this.props.focus,
          disabled: !!this.props.disabled,
          checked: this.state.checked
        });
        var props = excludeFactoryProps(['checked', 'disabled', 'focus', 'label', 'onChange', 'type'], this.props);
        return React__default.createElement("div", {
          className: classes
        }, React__default.createElement("label", null, React__default.createElement("div", {
          className: "element"
        }, React__default.createElement("input", _extends({
          type: "checkbox",
          checked: this.state.checked,
          onChange: this.handleChange,
          disabled: !!this.props.disabled
        }, props)), React__default.createElement(IconCheckmark, null)), this.props.label && React__default.createElement("div", {
          className: "label"
        }, this.props.label)), this.props.error && React__default.createElement("div", {
          className: "error"
        }, this.props.error));
      }
    }]);

    return Checkbox;
  }(React.PureComponent);

  _defineProperty(Checkbox, "propTypes", {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
  });

  var IconCloudUpload = (function (props) {
    return React__default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, props), React__default.createElement("path", {
      d: "M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM288 276v76h-64v-76h-68l100-100 100 100h-68z"
    }));
  });

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.input-file .element {\n  position: relative;\n  background-color: var(--file-background);\n  border: 1px solid var(--file-border-color);\n  border-radius: var(--core-border-radius);\n  padding: var(--file-padding);\n  color: var(--file-color);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n.input-file .element input.inputfile {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.input-file .element .placeholder {\n  display: inline-block;\n  font-family: var(--core-font-family);\n  font-size: 11px;\n  color: var(--file-border-color);\n}\n.input-file .element .upload-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: var(--search-icon-padding);\n}\n.input-file .element .upload-icon svg {\n  width: 100%;\n  fill: var(--file-icon-color);\n}\n.input-file .element:focus-within .placeholder {\n  color: var(--file-border-color-focus);\n}\n.input-file .element:focus-within .upload-icon svg {\n  fill: var(--file-border-color-focus);\n}\n.input-file .label {\n  font-family: var(--core-font-family);\n  margin-bottom: 0.5rem;\n  color: var(--file-label);\n}\n.input-file .error {\n  font-family: var(--core-font-family);\n  font-size: 11px;\n  margin-bottom: 0.5rem;\n  color: var(--core-color-error);\n  padding: var(--core-padding-error);\n}\n.input-file.focus .element, .input-file:focus-within .element {\n  border: 1px solid var(--file-border-color-focus);\n}\n.input-file.disabled {\n  pointer-events: none;\n}\n.input-file.disabled .element {\n  opacity: var(--core-opacity-disabled);\n}");

  var InputFile =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(InputFile, _PureComponent);

    function InputFile() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, InputFile);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputFile)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        placeholder: _this.props.placeholder
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        if (_this.props.onChange) {
          _this.props.onChange(e);
        }

        var placeholder = _this.props.placeholder;

        if (_this.input.files && _this.input.files.length > 1) {
          placeholder = (_this.input.getAttribute('data-multiple-caption') || '').replace('{count}', _this.input.files.length);
        } else {
          placeholder = _this.input.files[0].name.split('\\').pop();
        }

        _this.setState({
          placeholder: placeholder
        });
      });

      return _this;
    }

    _createClass(InputFile, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var classes = classNames({
          'input-file': true,
          focus: !!this.props.focus,
          disabled: !!this.props.disabled
        });
        var props = excludeFactoryProps(['disabled', 'focus', 'label', 'onChange', 'placeholder', 'placeholderMultiple', 'type'], this.props);
        return React__default.createElement("div", {
          className: classes
        }, React__default.createElement("label", null, this.props.label && React__default.createElement("div", {
          className: "label"
        }, this.props.label), React__default.createElement("div", {
          className: "element"
        }, React__default.createElement("input", _extends({
          ref: function ref(e) {
            _this2.input = e;
          },
          type: "file",
          className: "inputfile",
          "data-multiple-caption": this.props.placeholderMultiple,
          disabled: !!this.props.disabled,
          onChange: this.handleChange
        }, props)), React__default.createElement("div", {
          className: "upload-icon"
        }, React__default.createElement(IconCloudUpload, null)), React__default.createElement("div", {
          className: "placeholder"
        }, this.state.placeholder))), this.props.error && React__default.createElement("div", {
          className: "error"
        }, this.props.error));
      }
    }]);

    return InputFile;
  }(React.PureComponent);

  _defineProperty(InputFile, "propTypes", {
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    placeholderMultiple: PropTypes.string,
    error: PropTypes.string
  });

  _defineProperty(InputFile, "defaultProps", {
    placeholder: 'Choose a file...',
    placeholderMultiple: '{count} files selected'
  });

  var IconSearch = (function (props) {
    return React__default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, props), React__default.createElement("path", {
      d: "M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"
    }));
  });

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.input-search {\n  position: relative;\n  background-color: var(--search-background);\n  border: 1px solid var(--search-border-color);\n  border-radius: var(--core-border-radius);\n  padding: var(--search-padding);\n  color: var(--search-color);\n  display: flex;\n  align-items: center;\n}\n.input-search input {\n  width: calc(100% - 42px);\n  height: 20px;\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n}\n.input-search input:focus {\n  outline: none;\n}\n.input-search input::placeholder {\n  color: var(--search-border-color);\n}\n.input-search .search-icon {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-right: var(--search-icon-padding);\n}\n.input-search .search-icon svg {\n  width: 100%;\n  fill: var(--search-icon-color);\n}\n.input-search .icon {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  transform: translateX(-50%) translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-search .icon svg {\n  width: 100%;\n}\n.input-search.focus, .input-search:focus-within {\n  border: 1px solid var(--search-border-color-focus);\n}\n.input-search.disabled {\n  pointer-events: none;\n  opacity: var(--core-opacity-disabled);\n}");

  var InputSearch =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(InputSearch, _PureComponent);

    function InputSearch() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, InputSearch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        if (_this.props.onChange) {
          _this.props.onChange(e);
        }
      });

      return _this;
    }

    _createClass(InputSearch, [{
      key: "render",
      value: function render() {
        var classes = classNames({
          'input-search': true,
          focus: !!this.props.focus,
          disabled: !!this.props.disabled
        });
        var props = excludeFactoryProps(['defaultValue', 'disabled', 'focus', 'onChange', 'placeholder', 'progress', 'type'], this.props);
        return React__default.createElement("div", {
          className: classes
        }, React__default.createElement("div", {
          className: "search-icon"
        }, React__default.createElement(IconSearch, null)), React__default.createElement("input", _extends({
          type: this.props.type,
          placeholder: this.props.placeholder,
          defaultValue: this.props.defaultValue,
          disabled: !!this.props.disabled,
          onChange: this.handleChange
        }, props)), React__default.createElement("div", {
          className: "icon"
        }, this.props.progress && React__default.createElement(Spinner, null)));
      }
    }]);

    return InputSearch;
  }(React.PureComponent);

  _defineProperty(InputSearch, "propTypes", {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    progress: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'number'])
  });

  _defineProperty(InputSearch, "defaultProps", {
    type: 'text'
  });

  var IconEye = (function (props) {
    return React__default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, props), React__default.createElement("path", {
      d: "M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"
    }));
  });

  var IconEyeOff = (function (props) {
    return React__default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, props), React__default.createElement("path", {
      d: "M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"
    }));
  });

  var IconMdClose = (function (props) {
    return React__default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, props), React__default.createElement("path", {
      d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
    }));
  });

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.input-text .element {\n  position: relative;\n  background-color: var(--input-background);\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--core-border-radius);\n  padding: var(--input-padding);\n  color: var(--input-color);\n}\n.input-text .element input {\n  font-family: var(--core-font-family);\n  width: calc(100% - 16px);\n  height: 20px;\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n}\n.input-text .element input:focus {\n  outline: none;\n}\n.input-text .element input::placeholder {\n  color: var(--input-border-color);\n}\n.input-text .element .icon {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  transform: translateX(-50%) translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-text .element .icon svg {\n  width: 100%;\n}\n.input-text .label {\n  font-family: var(--core-font-family);\n  margin-bottom: 0.5rem;\n  color: var(--input-label);\n}\n.input-text .error {\n  font-family: var(--core-font-family);\n  font-size: 11px;\n  margin-bottom: 0.5rem;\n  color: var(--core-color-error);\n  padding: var(--core-padding-error);\n}\n.input-text.focus .element, .input-text:focus-within .element {\n  border: 1px solid var(--input-border-color-focus);\n}\n.input-text.disabled {\n  pointer-events: none;\n}\n.input-text.disabled .element {\n  opacity: var(--core-opacity-disabled);\n}\n.input-text.success .element .icon {\n  fill: var(--core-color-success);\n}\n.input-text.error .element .icon {\n  fill: var(--core-color-error);\n}\n.input-text.password .element .icon {\n  fill: var(--input-color);\n}");

  var InputText =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(InputText, _PureComponent);

    function InputText() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, InputText);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputText)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        valid: null,
        showPassword: false
      });

      _defineProperty(_assertThisInitialized(_this), "togglePasswordType", function () {
        _this.setState(function (prevState) {
          return {
            showPassword: !prevState.showPassword
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        var value = e.target.value; // validation just happens on non passwords

        if (!_this.props.password && _this.props.validate) {
          var valid = _this.props.validate(value);

          _this.setState({
            valid: value.length > 0 ? valid : null
          });
        }

        if (_this.props.onChange) {
          _this.props.onChange(e);
        }
      });

      return _this;
    }

    _createClass(InputText, [{
      key: "render",
      value: function render() {
        var classes = classNames({
          'input-text': true,
          password: !!this.props.password,
          focus: !!this.props.focus,
          disabled: !!this.props.disabled,
          success: this.state.valid === true || !!this.props.success,
          error: this.state.valid === false || !!this.props.error
        }); // if field is password, toggle visibility

        var type = this.props.type;

        if (this.props.password && !this.state.showPassword) {
          type = 'password';
        }

        var props = excludeFactoryProps(['defaultValue', 'disabled', 'error', 'focus', 'label', 'onChange', 'password', 'placeholder', 'progress', 'success', 'type'], this.props);
        return React__default.createElement("div", {
          className: classes
        }, React__default.createElement("label", null, this.props.label && React__default.createElement("div", {
          className: "label"
        }, this.props.label), React__default.createElement("div", {
          className: "element"
        }, React__default.createElement("input", _extends({
          type: type,
          placeholder: this.props.placeholder,
          defaultValue: this.props.defaultValue,
          disabled: !!this.props.disabled,
          onChange: this.handleChange
        }, props)), React__default.createElement("div", {
          className: "icon"
        }, this.props.password && this.state.showPassword && React__default.createElement(IconEyeOff, {
          onClick: this.togglePasswordType
        }), this.props.password && !this.state.showPassword && React__default.createElement(IconEye, {
          onClick: this.togglePasswordType
        }), !this.props.password && React__default.createElement(React__default.Fragment, null, (this.state.valid === true || this.props.success) && React__default.createElement(IconCheckmark, null), (this.state.valid === false || this.props.error) && React__default.createElement(IconMdClose, null), this.props.progress && React__default.createElement(Spinner, null)))), this.props.error && React__default.createElement("div", {
          className: "error"
        }, this.props.error)));
      }
    }]);

    return InputText;
  }(React.PureComponent);

  _defineProperty(InputText, "propTypes", {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    focus: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    password: PropTypes.bool,
    placeholder: PropTypes.string,
    progress: PropTypes.bool,
    success: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'number']),
    validate: PropTypes.func
  });

  _defineProperty(InputText, "defaultProps", {
    type: 'text'
  });

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.radio label {\n  display: flex;\n  align-items: center;\n}\n.radio .element {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  max-height: 16px;\n  background-color: var(--radio-background);\n  border: 1px solid var(--radio-border-color);\n  border-radius: 50%;\n}\n.radio .element input {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.radio .element input:focus {\n  outline: none;\n}\n.radio .element span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  pointer-events: none;\n  background-color: transparent;\n}\n.radio .label {\n  margin-left: 0.5rem;\n  color: var(--radio-label);\n}\n.radio .error {\n  font-family: var(--core-font-family);\n  font-size: 11px;\n  margin-bottom: 0.5rem;\n  color: var(--core-color-error);\n  padding: var(--core-padding-error);\n}\n.radio.focus .element, .radio:focus-within .element, .radio:hover .element {\n  border: 1px solid var(--radio-border-color-focus);\n}\n.radio.disabled {\n  pointer-events: none;\n}\n.radio.disabled .element {\n  opacity: var(--core-opacity-disabled);\n}\n.radio.checked .element {\n  background-color: var(--radio-background-checked);\n  border: 1px solid transparent;\n}\n.radio.checked .element span {\n  background-color: var(--radio-indicator--checked);\n}");

  var Radio =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Radio, _PureComponent);

    function Radio() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Radio);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        checked: !!_this.props.checked
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
        _this.setState(function (prevState) {
          return {
            checked: !prevState.checked
          };
        });

        if (_this.props.onChange) {
          _this.props.onChange(e);
        }
      });

      return _this;
    }

    _createClass(Radio, [{
      key: "render",
      value: function render() {
        var classes = classNames({
          radio: true,
          focus: !!this.props.focus,
          disabled: !!this.props.disabled,
          checked: this.state.checked
        });
        var props = excludeFactoryProps(['checked', 'disabled', 'focus', 'label', 'onChange', 'type'], this.props);
        return React__default.createElement("div", {
          className: classes
        }, React__default.createElement("label", null, React__default.createElement("div", {
          className: "element"
        }, React__default.createElement("input", _extends({
          type: "checkbox",
          checked: this.state.checked,
          onChange: this.onChange,
          disabled: !!this.props.disabled
        }, props)), React__default.createElement("span", null)), this.props.label && React__default.createElement("div", {
          className: "label"
        }, this.props.label)), this.props.error && React__default.createElement("div", {
          className: "error"
        }, this.props.error));
      }
    }]);

    return Radio;
  }(React.PureComponent);

  _defineProperty(Radio, "propTypes", {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
  });

  ___$insertStyle(":root {\n  --core-font-family: sans-serif;\n  --core-border-radius: 4px;\n  --core-opacity-disabled: 0.5;\n  --core-color-primary: #3880ff;\n  --core-color-success: #95dcb2;\n  --core-color-error: #db7f93;\n  --core-color-border: #dddddd;\n  --core-padding-error: 8px 0;\n  --button-primary-background: var(--core-color-primary);\n  --button-primary-padding: 8px 16px;\n  --button-primary-color: #ffffff;\n  --button-secondary-background: transparent;\n  --button-secondary-padding: 8px 16px;\n  --button-secondary-color: #666666;\n  --button-minimal-background: transparent;\n  --button-minimal-padding: 8px 16px;\n  --button-minimal-color: #666666;\n  --button-minimal-color-focus: #131313;\n  --input-background: #ffffff;\n  --input-background-disabled: #fcfcfc;\n  --input-border-color: #dddddd;\n  --input-border-color-focus: #888888;\n  --input-color: #666666;\n  --input-padding: 8px 16px;\n  --input-label: #666666;\n  --file-background: #ffffff;\n  --file-background-disabled: #fcfcfc;\n  --file-border-color: #dddddd;\n  --file-border-color-focus: #888888;\n  --file-color: #666666;\n  --file-padding: 8px 16px;\n  --file-label: #666666;\n  --file-icon-color: #dddddd;\n  --file-icon-padding: 8px;\n  --search-background: #ffffff;\n  --search-background-disabled: #fcfcfc;\n  --search-border-color: #dddddd;\n  --search-border-color-focus: #888888;\n  --search-color: #666666;\n  --search-padding: 8px 16px;\n  --search-icon-color: #dddddd;\n  --search-icon-padding: 8px;\n  --spinner-color-primary: var(--core-color-primary);\n  --spinner-color-secondary: #dddddd;\n  --spinner-width: 2px;\n  --radio-background: #ffffff;\n  --radio-background-checked: var(--core-color-primary);\n  --radio-border-color: #dddddd;\n  --radio-border-color-focus: #888888;\n  --radio-indicator: #dddddd;\n  --radio-indicator--checked: #ffffff;\n  --radio-label: #666666;\n  --checkbox-background: #ffffff;\n  --checkbox-background-checked: var(--core-color-primary);\n  --checkbox-border-color: #dddddd;\n  --checkbox-border-color-focus: #888888;\n  --checkbox-indicator: #dddddd;\n  --checkbox-indicator--checked: #ffffff;\n  --checkbox-label: #666666;\n  --switch-background: #ffffff;\n  --switch-background-checked: var(--core-color-primary);\n  --switch-border-color: #dddddd;\n  --switch-border-color-focus: #888888;\n  --switch-indicator: #dddddd;\n  --switch-indicator--checked: #ffffff;\n  --switch-label: #666666;\n  --spacer-small: 20px;\n  --spacer-medium: 40px;\n  --spacer-large: 60px;\n  --padding-small: 20px;\n  --padding-medium: 40px;\n  --padding-large: 60px;\n}\n\n.switch label {\n  display: flex;\n  align-items: center;\n}\n.switch .element {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  min-width: 44px;\n  max-width: 44px;\n  min-height: 24px;\n  max-height: 24px;\n  background-color: var(--switch-background);\n  border: 1px solid var(--switch-border-color);\n  border-radius: 16px;\n}\n.switch .element input {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.switch .element input:focus {\n  outline: none;\n}\n.switch .element span {\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: var(--switch-indicator);\n  transform: translateY(-50%);\n  pointer-events: none;\n  transition: left 0.2s ease-in-out;\n}\n.switch .label {\n  margin-left: 0.5rem;\n  color: var(--switch-label);\n}\n.switch .error {\n  font-family: var(--core-font-family);\n  font-size: 11px;\n  margin-bottom: 0.5rem;\n  color: var(--core-color-error);\n  padding: var(--core-padding-error);\n}\n.switch.focus .element, .switch:focus-within .element, .switch:hover .element {\n  border: 1px solid var(--switch-border-color-focus);\n}\n.switch.disabled {\n  pointer-events: none;\n}\n.switch.disabled .element {\n  opacity: var(--core-opacity-disabled);\n}\n.switch.checked .element {\n  background-color: var(--switch-background-checked);\n  border: 1px solid transparent;\n}\n.switch.checked .element span {\n  left: calc(100% - 16px - 4px);\n  background-color: var(--switch-indicator--checked);\n}");

  var Switch =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Switch, _PureComponent);

    function Switch() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Switch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        checked: !!_this.props.checked
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        _this.setState(function (prevState) {
          return {
            checked: !prevState.checked
          };
        });

        if (_this.props.onChange) {
          _this.props.onChange(e);
        }
      });

      return _this;
    }

    _createClass(Switch, [{
      key: "render",
      value: function render() {
        var classes = classNames({
          "switch": true,
          focus: !!this.props.focus,
          disabled: !!this.props.disabled,
          checked: this.state.checked
        });
        var props = excludeFactoryProps(['checked', 'disabled', 'focus', 'label', 'onChange', 'type'], this.props);
        return React__default.createElement("div", {
          className: classes
        }, React__default.createElement("label", null, React__default.createElement("div", {
          className: "element"
        }, React__default.createElement("input", _extends({
          type: "checkbox",
          checked: this.state.checked,
          onChange: this.handleChange,
          disabled: !!this.props.disabled
        }, props)), React__default.createElement("span", null)), this.props.label && React__default.createElement("div", {
          className: "label"
        }, this.props.label)), this.props.error && React__default.createElement("div", {
          className: "error"
        }, this.props.error));
      }
    }]);

    return Switch;
  }(React.PureComponent);

  _defineProperty(Switch, "propTypes", {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
  });

  exports.Button = Button;
  exports.Checkbox = Checkbox;
  exports.InputFile = InputFile;
  exports.InputSearch = InputSearch;
  exports.InputText = InputText;
  exports.Padding = Padding;
  exports.Radio = Radio;
  exports.Spacer = Spacer;
  exports.Spinner = Spinner;
  exports.Switch = Switch;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
