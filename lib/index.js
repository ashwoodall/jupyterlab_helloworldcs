"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
/**
 * A plugin for Hello World CS
 */
const plugin = {
  id: "jupyterlab_helloworldcs:plugin",
  requires: [apputils_1.IThemeManager],
  activate: function(app, manager) {
    const style = "@ashwoodall/jupyterlab_helloworldcs/index.css";
    manager.register({
      name: "Hello World CS",
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};
exports.default = plugin;
