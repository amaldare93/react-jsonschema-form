"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorList;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorList(props) {
  var errors = props.errors;

  return _react2.default.createElement(
    "div",
    { className: "rjsf-panel rjsf-panel-danger rjsf-errors" },
    _react2.default.createElement(
      "div",
      { className: "rjsf-panel-heading" },
      _react2.default.createElement(
        "h3",
        { className: "rjsf-panel-title" },
        "Errors"
      )
    ),
    _react2.default.createElement(
      "ul",
      { className: "rjsf-list-group" },
      errors.map(function (error, i) {
        return _react2.default.createElement(
          "li",
          { key: i, className: "rjsf-list-group-item rjsf-text-danger" },
          error.stack
        );
      })
    )
  );
}