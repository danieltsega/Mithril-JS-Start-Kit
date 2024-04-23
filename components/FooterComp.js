var m = require("mithril");

var FooterComponent = {
  view: function () {
    return m(
      "footer",
      {
        class:
          "bg-gray-800 p-8 flex justify-center items-center text-xl font-bold text-white fixed bottom-0 left-0 right-0",
      },
      [m("span", "Copyright @ Mithril")]
    );
  },
};

module.exports = FooterComponent;
