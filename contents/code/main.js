'use strict';

const activeBlurEffect = {

  /**
   * default configuration value
   */
  duration: animationTime(400),
  blurRadius: 40,

  /**
   * load and set the configuration value
   */
  loadConfig: function () {
    console.log('#### ACTIVE BLUR : load config')
    activeBlurEffect.duration = effect.readConfig('Duration', 400);
    activeBlurEffect.blurRadius = effect.readConfig('BlurRadius', 40);
    console.log('#### ACTIVE BLUR : config value have changed [br d]', activeBlurEffect.blurRadius, activeBlurEffect.duration)
  },

  /**
   * init all the effect
   * - connect the loadConfig fc with the config changed event
   * - load the config (when the effect is activated by the user via the desktop effects window)
   */
  init: function () {
    console.log('#### ACTIVE BLUR : init launch')
    effect.configChanged.connect(activeBlurEffect.loadConfig);
    activeBlurEffect.loadConfig();
  }
};

activeBlurEffect.init();
