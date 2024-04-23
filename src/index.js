var m = require("mithril");
var root = document.body;
var NewComp = require("../components/newComp");
var Another = require("../components/anotherComp");

var App = function () {
  return {
    view: function () {
      return m("div", [m(NewComp), m(Another)]);
    },
  };
};

m.mount(root, App);
