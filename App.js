"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _main = _interopRequireDefault(require("./main.css"));

var _axios = _interopRequireDefault(require("axios"));

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*const App = () => {
  return (
    <div>
      <p>Welcome to React here!</p>
    </div>
  );
}*/
var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      count: 0,
      persons: [],
      searchText: ""
    };
    _this.increment = _this.increment.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.decrement = _this.decrement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.searchUsers = _this.searchUsers.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.searchInput = _react.default.createRef();
    return _this;
  }

  _createClass(App, [{
    key: "increment",
    value: function increment() {
      this.setState({
        count: this.state.count + 1
      });
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.setState({
        count: this.state.count - 1
      });
    }
  }, {
    key: "searchUsers",
    value: function searchUsers(e) {
      this.searchInput.current.focus();
      this.setState({
        searchText: this.searchInput.current.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("First Render...!");
      this.searchInput.current.focus();
      /*fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => res.map( user => user.username ))
        .then(userNames => console.log(userNames));*/

      _axios.default.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
        var persons = res.data;

        _this2.setState({
          persons: persons
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _persons = this.state.persons;

      var _personsSearch = this.state.searchText.trim().toLowerCase();

      if (_personsSearch.length > 0) {
        _persons = _persons.filter(function (person) {
          return person.name.toLowerCase().match(_personsSearch);
        });
      }

      return _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("h1", null, "Simple Counter"), _react.default.createElement("div", null, _react.default.createElement(Time, {
        countData: this.state.count,
        incrementClick: this.increment,
        decrementClick: this.decrement
      }), _react.default.createElement(SearchBar, {
        searchData: this.searchUsers,
        myRefs: this.searchInput,
        searchTxtName: this.searchText,
        searchOnchange: this.searchUsers
      }), _react.default.createElement(Userlist, {
        myUserData: _persons
      })));
    }
  }]);

  return App;
}(_react.default.Component);

var Time =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Time, _React$Component2);

  function Time() {
    _classCallCheck(this, Time);

    return _possibleConstructorReturn(this, _getPrototypeOf(Time).apply(this, arguments));
  }

  _createClass(Time, [{
    key: "render",
    value: function render() {
      var pStyle = {
        color: 'red',
        float: 'right'
      };
      return _react.default.createElement("div", {
        className: "TimeCount",
        style: pStyle
      }, _react.default.createElement("button", {
        onClick: this.props.incrementClick
      }, " + "), _react.default.createElement("span", null, _react.default.createElement("b", null, "Count:"), " ", this.props.countData, " "), _react.default.createElement("button", {
        onClick: this.props.decrementClick
      }, " - "));
    }
  }]);

  return Time;
}(_react.default.Component);

var SearchBar =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SearchBar, _React$Component3);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).apply(this, arguments));
  }

  _createClass(SearchBar, [{
    key: "render",
    value: function render() {
      var pStyle = {
        float: 'right',
        paddingRight: 33
      };
      return _react.default.createElement("div", {
        className: "SearchBar",
        style: pStyle
      }, _react.default.createElement("input", {
        type: "text",
        placeholder: "Search User",
        className: "search",
        ref: this.props.myRefs,
        value: this.props.searchTxtName,
        onChange: this.props.searchOnchange
      }), _react.default.createElement("button", {
        onClick: this.props.searchData
      }, " Search "));
    }
  }]);

  return SearchBar;
}(_react.default.Component);

var Userlist =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Userlist, _React$Component4);

  function Userlist() {
    _classCallCheck(this, Userlist);

    return _possibleConstructorReturn(this, _getPrototypeOf(Userlist).apply(this, arguments));
  }

  _createClass(Userlist, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Users List"), _react.default.createElement("table", {
        className: "table table-striped"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "ID"), _react.default.createElement("td", null, "UserName"), _react.default.createElement("td", null, "City"))), _react.default.createElement("tbody", null, this.props.myUserData.map(function (person, i) {
        return _react.default.createElement(TableRow, {
          obj: person,
          id: i
        });
      }))));
    }
  }]);

  return Userlist;
}(_react.default.Component);

var TableRow =
/*#__PURE__*/
function (_Userlist) {
  _inherits(TableRow, _Userlist);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableRow).apply(this, arguments));
  }

  _createClass(TableRow, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("tr", {
        key: this.props.id.toString(),
        id: this.props.id
      }, _react.default.createElement("td", null, this.props.id), _react.default.createElement("td", null, this.props.obj.name), _react.default.createElement("td", null, this.props.obj.name));
    }
  }]);

  return TableRow;
}(Userlist);

var _default = App;
exports.default = _default;