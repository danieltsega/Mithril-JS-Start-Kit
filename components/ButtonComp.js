var m = require("mithril");

var Button = function () {
  return {
    view: function () {
      return m(
        "button",
        {
          class:
            "bg-black text-white px-8 py-2 font-bold text-lg hover:bg-inherit hover:border-2 hover:border-black hover:text-black uppercase",
        },
        "join"
      );
    },
  };
};

module.exports = Button;
