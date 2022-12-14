import {
    audio,
    loader,
    state,
    device,
    video,
    utils,
    plugin,
    pool
} from 'melonjs/dist/melonjs.module.js';

import 'index.css';

import TitleScreen from 'js/stage/title.js';
import PlayScreen from 'js/stage/play.js';
import PlayerEntity from 'js/renderables/player.js';
import EnemyEntity from './js/renderables/enemy.js';
import EnemyManager from './js/managers/enemy-manager.js';
import Laser from './js/renderables/laser.js';


import DataManifest from 'manifest.js';


device.onReady(() => {

    // initialize the display canvas once the device/browser is ready
    if (!video.init(1218, 562, { parent: "screen", scale: "auto", scaleMethod: "flex-width" })) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // initialize the debug plugin in development mode.
    if (process.env.NODE_ENV === 'development') {
        import('js/plugin/debug/debugPanel.js').then((debugPlugin) => {
            // automatically register the debug panel
            utils.function.defer(plugin.register, this, debugPlugin.DebugPanelPlugin, "debugPanel");
        });

    }

    // Initialize the audio.
    audio.init("mp3,ogg");

    // allow cross-origin for image/texture loading
    loader.crossOrigin = "anonymous";

    // set and load all resources.
    loader.preload(DataManifest, function () {
        // set the user defined game stages
        state.set(state.MENU, new TitleScreen());
        state.set(state.PLAY, new PlayScreen());

        // add our player entity in the entity pool
        pool.register("mainPlayer", PlayerEntity);
        pool.register("laser", Laser, true);

        // Start the game.
        state.change(state.PLAY);
    });
});
