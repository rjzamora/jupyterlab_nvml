import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_nvml extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_nvml',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_nvml is activated!');
  }
};

export default extension;
