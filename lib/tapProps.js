'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

require('ramda');

var _reactUtil = require('react-util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tapProps = function tapProps(func) {
	return function (component) {
		if ((0, _reactUtil.isClassComponent)(component)) {
			return function (_component) {
				_inherits(_class, _component);

				function _class() {
					_classCallCheck(this, _class);

					return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
				}

				_createClass(_class, [{
					key: 'render',
					value: function render() {
						func(this.props);
						return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'render', this).call(this);
					}
				}]);

				return _class;
			}(component);
		} else {
			var wrapped = function wrapped(props) {
				func(props);return component(props);
			};

			wrapped.defaultProps = component.defaultProps;
			wrapped.propTypes = component.propTypes;
			wrapped.displayName = component.displayName || component.name;

			return wrapped;
		}
	};
};

exports.default = tapProps;