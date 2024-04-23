var m = require("mithril");
var root = document.body;
var NewComp = require("../components/newComp");
var Another = require("../components/anotherComp");
var NavBarComponent = require("../components/NavBar");

var App = function () {
  return {
    view: function () {
      return m("body", [m(NavBarComponent), m(NewComp), m(Another)]);
    },
  };
};

m.mount(root, App);
