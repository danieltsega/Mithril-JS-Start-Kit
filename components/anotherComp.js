var m = require("mithril");

var Another = function () {
  return {
    view: function () {
      return m("h1", "Another Component");
    },
  };
};

module.exports = Another;
