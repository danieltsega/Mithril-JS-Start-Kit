var m = require("mithril");

var NewComp = function () {
  return {
    view: function () {
      return m("div", [
        m("h1", "New Component"),
        m("p", "This is a new component"),
      ]);
    },
  };
};

module.exports = NewComp;
