var m = require("mithril");
var root = document.body;

var NavBarComponent = require("../components/NavBar");
var NewComp = require("../components/newComp");
var Another = require("../components/anotherComp");
var FooterComponent = require("../components/FooterComp");

var App = function () {
  return {
    view: function (vnode) {
      return m("body", [
        m(NavBarComponent),
        m(vnode.attrs.content),
        m(FooterComponent),
      ]);
    },
  };
};

m.route(root, "/", {
  "/": {
    render: function () {
      return m(App, { content: NewComp });
    },
  },
  "/another": {
    render: function () {
      return m(App, { content: Another });
    },
  },
});
