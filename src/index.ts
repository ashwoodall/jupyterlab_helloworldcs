import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import { IThemeManager } from "@jupyterlab/apputils";

/**
 * A plugin for Hello World CS
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: "jupyterlab_helloworldcs:plugin",
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
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

export default plugin;
