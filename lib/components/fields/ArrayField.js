"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  var id = idSchema.$id + "__title";
  return _react2.default.createElement(TitleField, { id: id, title: title, required: required });
}

function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  var id = idSchema.$id + "__description";
  return _react2.default.createElement(DescriptionField, { id: id, description: description });
}

function IconBtn(props) {
  var _props$type = props.type,
      type = _props$type === undefined ? "default" : _props$type,
      icon = props.icon,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["type", "icon", "className"]);

  return _react2.default.createElement(
    "button",
    _extends({
      type: "button",
      className: "rjsf-btn rjsf-btn-" + type + " " + className
    }, otherProps),
    _react2.default.createElement("i", { className: "rjsf-glyphicon rjsf-glyphicon-" + icon })
  );
}

// Used in the two templates
function DefaultArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return _react2.default.createElement(
    "div",
    { key: props.index, className: props.className },
    _react2.default.createElement(
      "div",
      { className: props.hasToolbar ? "rjsf-col-xs-9" : "rjsf-col-xs-12" },
      props.children
    ),
    props.hasToolbar && _react2.default.createElement(
      "div",
      { className: "rjsf-col-xs-3 rjsf-array-item-toolbox" },
      _react2.default.createElement(
        "div",
        {
          className: "rjsf-btn-group",
          style: { display: "flex", justifyContent: "space-around" } },
        (props.hasMoveUp || props.hasMoveDown) && _react2.default.createElement(IconBtn, {
          icon: "arrow-up",
          className: "rjsf-array-item-move-up",
          tabIndex: "-1",
          style: btnStyle,
          disabled: props.disabled || props.readonly || !props.hasMoveUp,
          onClick: props.onReorderClick(props.index, props.index - 1)
        }),
        (props.hasMoveUp || props.hasMoveDown) && _react2.default.createElement(IconBtn, {
          icon: "arrow-down",
          className: "rjsf-array-item-move-down",
          tabIndex: "-1",
          style: btnStyle,
          disabled: props.disabled || props.readonly || !props.hasMoveDown,
          onClick: props.onReorderClick(props.index, props.index + 1)
        }),
        props.hasRemove && _react2.default.createElement(IconBtn, {
          type: "danger",
          icon: "remove",
          className: "rjsf-array-item-remove",
          tabIndex: "-1",
          style: btnStyle,
          disabled: props.disabled || props.readonly,
          onClick: props.onDropIndexClick(props.index)
        })
      )
    )
  );
}

function DefaultFixedArrayFieldTemplate(props) {
  return _react2.default.createElement(
    "fieldset",
    { className: props.className },
    _react2.default.createElement(ArrayFieldTitle, {
      key: "array-field-title-" + props.idSchema.$id,
      TitleField: props.TitleField,
      idSchema: props.idSchema,
      title: props.title,
      required: props.required
    }),
    props.schema.description && _react2.default.createElement(
      "div",
      {
        className: "rjsf-field-description",
        key: "field-description-" + props.idSchema.$id },
      props.schema.description
    ),
    _react2.default.createElement(
      "div",
      {
        className: "rjsf-row rjsf-array-item-list",
        key: "array-item-list-" + props.idSchema.$id },
      props.items && props.items.map(DefaultArrayItem)
    ),
    props.canAdd && _react2.default.createElement(AddButton, {
      onClick: props.onAddClick,
      disabled: props.disabled || props.readonly
    })
  );
}

function DefaultNormalArrayFieldTemplate(props) {
  return _react2.default.createElement(
    "fieldset",
    { className: props.className },
    _react2.default.createElement(ArrayFieldTitle, {
      key: "array-field-title-" + props.idSchema.$id,
      TitleField: props.TitleField,
      idSchema: props.idSchema,
      title: props.title,
      required: props.required
    }),
    props.schema.description && _react2.default.createElement(ArrayFieldDescription, {
      key: "array-field-description-" + props.idSchema.$id,
      DescriptionField: props.DescriptionField,
      idSchema: props.idSchema,
      description: props.schema.description
    }),
    _react2.default.createElement(
      "div",
      {
        className: "rjsf-row array-item-list",
        key: "array-item-list-" + props.idSchema.$id },
      props.items && props.items.map(function (p) {
        return DefaultArrayItem(p);
      })
    ),
    props.canAdd && _react2.default.createElement(AddButton, {
      onClick: props.onAddClick,
      disabled: props.disabled || props.readonly
    })
  );
}

var ArrayField = function (_Component) {
  _inherits(ArrayField, _Component);

  function ArrayField() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, ArrayField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = ArrayField.__proto__ || Object.getPrototypeOf(ArrayField)).call.apply(_ref3, [this].concat(args))), _this), _this.onAddClick = function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          schema = _this$props.schema,
          registry = _this$props.registry,
          formData = _this$props.formData;
      var definitions = registry.definitions;

      var itemSchema = schema.items;
      if ((0, _utils.isFixedItems)(schema) && (0, _utils.allowAdditionalItems)(schema)) {
        itemSchema = schema.additionalItems;
      }
      _this.props.onChange([].concat(_toConsumableArray(formData), [(0, _utils.getDefaultFormState)(itemSchema, undefined, definitions)]), { validate: false });
    }, _this.onDropIndexClick = function (index) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }
        var _this$props2 = _this.props,
            formData = _this$props2.formData,
            onChange = _this$props2.onChange;
        // refs #195: revalidate to ensure properly reindexing errors

        onChange(formData.filter(function (_, i) {
          return i !== index;
        }), { validate: true });
      };
    }, _this.onReorderClick = function (index, newIndex) {
      return function (event) {
        if (event) {
          event.preventDefault();
          event.target.blur();
        }
        var _this$props3 = _this.props,
            formData = _this$props3.formData,
            onChange = _this$props3.onChange;

        onChange(formData.map(function (item, i) {
          if (i === newIndex) {
            return formData[index];
          } else if (i === index) {
            return formData[newIndex];
          } else {
            return item;
          }
        }), { validate: true });
      };
    }, _this.onChangeForIndex = function (index) {
      return function (value) {
        var _this$props4 = _this.props,
            formData = _this$props4.formData,
            onChange = _this$props4.onChange;

        var newFormData = formData.map(function (item, i) {
          // We need to treat undefined items as nulls to have validation.
          // See https://github.com/tdegrunt/jsonschema/issues/206
          var jsonValue = typeof value === "undefined" ? null : value;
          return index === i ? jsonValue : item;
        });
        onChange(newFormData, { validate: false });
      };
    }, _this.onSelectChange = function (value) {
      _this.props.onChange(value, { validate: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ArrayField, [{
    key: "isItemRequired",
    value: function isItemRequired(itemSchema) {
      if (Array.isArray(itemSchema.type)) {
        // While we don't yet support composite/nullable jsonschema types, it's
        // future-proof to check for requirement against these.
        return !itemSchema.type.includes("null");
      }
      // All non-null array item types are inherently required by design
      return itemSchema.type !== "null";
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          uiSchema = _props.uiSchema;

      if ((0, _utils.isFilesArray)(schema, uiSchema)) {
        return this.renderFiles();
      }
      if ((0, _utils.isFixedItems)(schema)) {
        return this.renderFixedArray();
      }
      if ((0, _utils.isMultiSelect)(schema)) {
        return this.renderMultiSelect();
      }
      return this.renderNormalArray();
    }
  }, {
    key: "renderNormalArray",
    value: function renderNormalArray() {
      var _this2 = this;

      var _props2 = this.props,
          schema = _props2.schema,
          uiSchema = _props2.uiSchema,
          formData = _props2.formData,
          errorSchema = _props2.errorSchema,
          idSchema = _props2.idSchema,
          name = _props2.name,
          required = _props2.required,
          disabled = _props2.disabled,
          readonly = _props2.readonly,
          autofocus = _props2.autofocus,
          registry = _props2.registry,
          formContext = _props2.formContext,
          onBlur = _props2.onBlur;

      var title = schema.title === undefined ? name : schema.title;
      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
          definitions = registry.definitions,
          fields = registry.fields;
      var TitleField = fields.TitleField,
          DescriptionField = fields.DescriptionField;

      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions);

      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions$addable = _getUiOptions.addable,
          addable = _getUiOptions$addable === undefined ? true : _getUiOptions$addable;

      var arrayProps = {
        canAdd: addable,
        items: formData.map(function (item, index) {
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          var itemIdPrefix = idSchema.$id + "_" + index;
          var itemIdSchema = (0, _utils.toIdSchema)(itemsSchema, itemIdPrefix, definitions);
          return _this2.renderArrayFieldItem({
            index: index,
            canMoveUp: index > 0,
            canMoveDown: index < formData.length - 1,
            itemSchema: itemsSchema,
            itemIdSchema: itemIdSchema,
            itemErrorSchema: itemErrorSchema,
            itemData: formData[index],
            itemUiSchema: uiSchema.items,
            autofocus: autofocus && index === 0,
            onBlur: onBlur
          });
        }),
        className: "rjsf-field rjsf-field-array rjsf-field-array-of-" + itemsSchema.type,
        DescriptionField: DescriptionField,
        disabled: disabled,
        idSchema: idSchema,
        onAddClick: this.onAddClick,
        readonly: readonly,
        required: required,
        schema: schema,
        title: title,
        TitleField: TitleField,
        formContext: formContext
      };

      // Check if a custom render function was passed in
      var Component = ArrayFieldTemplate || DefaultNormalArrayFieldTemplate;
      return _react2.default.createElement(Component, arrayProps);
    }
  }, {
    key: "renderMultiSelect",
    value: function renderMultiSelect() {
      var _props3 = this.props,
          schema = _props3.schema,
          idSchema = _props3.idSchema,
          uiSchema = _props3.uiSchema,
          disabled = _props3.disabled,
          readonly = _props3.readonly,
          autofocus = _props3.autofocus,
          onBlur = _props3.onBlur;

      var items = this.props.formData;
      var _props$registry = this.props.registry,
          widgets = _props$registry.widgets,
          definitions = _props$registry.definitions,
          formContext = _props$registry.formContext;

      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions);
      var enumOptions = (0, _utils.optionsList)(itemsSchema);

      var _getUiOptions$enumOpt = _extends({}, (0, _utils.getUiOptions)(uiSchema), {
        enumOptions: enumOptions
      }),
          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
          widget = _getUiOptions$enumOpt2 === undefined ? "select" : _getUiOptions$enumOpt2,
          options = _objectWithoutProperties(_getUiOptions$enumOpt, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react2.default.createElement(Widget, {
        id: idSchema && idSchema.$id,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        options: options,
        schema: schema,
        value: items,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus
      });
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _props4 = this.props,
          schema = _props4.schema,
          uiSchema = _props4.uiSchema,
          idSchema = _props4.idSchema,
          name = _props4.name,
          disabled = _props4.disabled,
          readonly = _props4.readonly,
          autofocus = _props4.autofocus,
          onBlur = _props4.onBlur;

      var title = schema.title || name;
      var items = this.props.formData;
      var _props$registry2 = this.props.registry,
          widgets = _props$registry2.widgets,
          formContext = _props$registry2.formContext;

      var _getUiOptions2 = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions2$widget = _getUiOptions2.widget,
          widget = _getUiOptions2$widget === undefined ? "files" : _getUiOptions2$widget,
          options = _objectWithoutProperties(_getUiOptions2, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react2.default.createElement(Widget, {
        options: options,
        id: idSchema && idSchema.$id,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        schema: schema,
        title: title,
        value: items,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus
      });
    }
  }, {
    key: "renderFixedArray",
    value: function renderFixedArray() {
      var _this3 = this;

      var _props5 = this.props,
          schema = _props5.schema,
          uiSchema = _props5.uiSchema,
          errorSchema = _props5.errorSchema,
          idSchema = _props5.idSchema,
          name = _props5.name,
          required = _props5.required,
          disabled = _props5.disabled,
          readonly = _props5.readonly,
          autofocus = _props5.autofocus,
          registry = _props5.registry,
          onBlur = _props5.onBlur;

      var title = schema.title || name;
      var items = this.props.formData;
      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
          definitions = registry.definitions,
          fields = registry.fields;
      var TitleField = fields.TitleField;

      var itemSchemas = schema.items.map(function (item) {
        return (0, _utils.retrieveSchema)(item, definitions);
      });
      var additionalSchema = (0, _utils.allowAdditionalItems)(schema) ? (0, _utils.retrieveSchema)(schema.additionalItems, definitions) : null;

      var _getUiOptions3 = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions3$addabl = _getUiOptions3.addable,
          addable = _getUiOptions3$addabl === undefined ? true : _getUiOptions3$addabl;

      var canAdd = addable && additionalSchema;

      if (!items || items.length < itemSchemas.length) {
        // to make sure at least all fixed items are generated
        items = items || [];
        items = items.concat(new Array(itemSchemas.length - items.length));
      }

      // These are the props passed into the render function
      var arrayProps = {
        canAdd: canAdd,
        className: "rjsf-field rjsf-field-array rjsf-field-array-fixed-items",
        disabled: disabled,
        idSchema: idSchema,
        items: items.map(function (item, index) {
          var additional = index >= itemSchemas.length;
          var itemSchema = additional ? additionalSchema : itemSchemas[index];
          var itemIdPrefix = idSchema.$id + "_" + index;
          var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, definitions);
          var itemUiSchema = additional ? uiSchema.additionalItems || {} : Array.isArray(uiSchema.items) ? uiSchema.items[index] : uiSchema.items || {};
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;

          return _this3.renderArrayFieldItem({
            index: index,
            canRemove: additional,
            canMoveUp: index >= itemSchemas.length + 1,
            canMoveDown: additional && index < items.length - 1,
            itemSchema: itemSchema,
            itemData: item,
            itemUiSchema: itemUiSchema,
            itemIdSchema: itemIdSchema,
            itemErrorSchema: itemErrorSchema,
            autofocus: autofocus && index === 0,
            onBlur: onBlur
          });
        }),
        onAddClick: this.onAddClick,
        readonly: readonly,
        required: required,
        schema: schema,
        title: title,
        TitleField: TitleField
      };

      // Check if a custom template template was passed in
      var renderFunction = ArrayFieldTemplate || DefaultFixedArrayFieldTemplate;
      return renderFunction(arrayProps);
    }
  }, {
    key: "renderArrayFieldItem",
    value: function renderArrayFieldItem(props) {
      var index = props.index,
          _props$canRemove = props.canRemove,
          canRemove = _props$canRemove === undefined ? true : _props$canRemove,
          _props$canMoveUp = props.canMoveUp,
          canMoveUp = _props$canMoveUp === undefined ? true : _props$canMoveUp,
          _props$canMoveDown = props.canMoveDown,
          canMoveDown = _props$canMoveDown === undefined ? true : _props$canMoveDown,
          itemSchema = props.itemSchema,
          itemData = props.itemData,
          itemUiSchema = props.itemUiSchema,
          itemIdSchema = props.itemIdSchema,
          itemErrorSchema = props.itemErrorSchema,
          autofocus = props.autofocus,
          onBlur = props.onBlur;
      var SchemaField = this.props.registry.fields.SchemaField;
      var _props6 = this.props,
          disabled = _props6.disabled,
          readonly = _props6.readonly,
          uiSchema = _props6.uiSchema;

      var _orderable$removable$ = _extends({
        orderable: true,
        removable: true
      }, uiSchema["ui:options"]),
          orderable = _orderable$removable$.orderable,
          removable = _orderable$removable$.removable;

      var has = {
        moveUp: orderable && canMoveUp,
        moveDown: orderable && canMoveDown,
        remove: removable && canRemove
      };
      has.toolbar = Object.keys(has).some(function (key) {
        return has[key];
      });

      return {
        children: _react2.default.createElement(SchemaField, {
          schema: itemSchema,
          uiSchema: itemUiSchema,
          formData: itemData,
          errorSchema: itemErrorSchema,
          idSchema: itemIdSchema,
          required: this.isItemRequired(itemSchema),
          onChange: this.onChangeForIndex(index),
          onBlur: onBlur,
          registry: this.props.registry,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          autofocus: autofocus
        }),
        className: "rjsf-array-item",
        disabled: disabled,
        hasToolbar: has.toolbar,
        hasMoveUp: has.moveUp,
        hasMoveDown: has.moveDown,
        hasRemove: has.remove,
        index: index,
        onDropIndexClick: this.onDropIndexClick,
        onReorderClick: this.onReorderClick,
        readonly: readonly
      };
    }
  }, {
    key: "itemTitle",
    get: function get() {
      var schema = this.props.schema;

      return schema.items.title || schema.items.description || "Item";
    }
  }]);

  return ArrayField;
}(_react.Component);

ArrayField.defaultProps = {
  uiSchema: {},
  formData: [],
  idSchema: {},
  registry: (0, _utils.getDefaultRegistry)(),
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};


function AddButton(_ref4) {
  var onClick = _ref4.onClick,
      disabled = _ref4.disabled;

  return _react2.default.createElement(
    "div",
    { className: "rjsf-row" },
    _react2.default.createElement(
      "p",
      {
        className: "rjsf-col-xs-3 rjsf-col-xs-offset-9 rjsf-array-item-add rjsf-text-right" },
      _react2.default.createElement(IconBtn, {
        type: "info",
        icon: "plus",
        className: "rjsf-btn-add rjsf-col-xs-12",
        tabIndex: "0",
        onClick: onClick,
        disabled: disabled
      })
    )
  );
}

if (process.env.NODE_ENV !== "production") {
  ArrayField.propTypes = {
    schema: _react.PropTypes.object.isRequired,
    uiSchema: _react.PropTypes.shape({
      "ui:options": _react.PropTypes.shape({
        addable: _react.PropTypes.bool,
        orderable: _react.PropTypes.bool,
        removable: _react.PropTypes.bool
      })
    }),
    idSchema: _react.PropTypes.object,
    errorSchema: _react.PropTypes.object,
    onChange: _react.PropTypes.func.isRequired,
    onBlur: _react.PropTypes.func,
    formData: _react.PropTypes.array,
    required: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    readonly: _react.PropTypes.bool,
    autofocus: _react.PropTypes.bool,
    registry: _react.PropTypes.shape({
      widgets: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])).isRequired,
      fields: _react.PropTypes.objectOf(_react.PropTypes.func).isRequired,
      definitions: _react.PropTypes.object.isRequired,
      formContext: _react.PropTypes.object.isRequired
    })
  };
}

exports.default = ArrayField;