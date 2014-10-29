/**
 * jQuery.Ion.Sound
 * version 2.1.3 Build 47
 * © 2014 Denis Ineshin | IonDen.com
 *
 * Project page:    http://ionden.com/a/plugins/ion.sound/en.html
 * GitHub page:     https://github.com/IonDen/ion.sound
 *
 * Released under MIT licence:
 * http://ionden.com/a/plugins/licence-en.html
 */

(function ($) {

    var warn = function (text) {
        if (text && console) {
            if (console.warn && typeof console.warn === "function") {
                console.warn(text);
            } else if (console.log && typeof console.log === "function") {
                console.log(text);
            }
        }
    };

    if ($.ionSound) {
        warn("$.ionSound already exists!");
        return;
    }

    if (typeof Audio !== "function" && typeof Audio !== "object") {
        var func = function () {
            warn("HTML5 Audio is not supported in this browser");
        };
        $.ionSound = function () {};
        $.ionSound.play = func;
        $.ionSound.stop = func;
        $.ionSound.destroy = func;
        func();
        return;
    }



    var Sound,
        is_iOS = /iPad|iPhone/.test(navigator.appVersion),
        global_sound,
        settings = {},
        sounds = {},
        sounds_num,
        ext,
        i;



    if (is_iOS) {

        Sound = function (options) {
            this.name = options.name;
            this.loop = false;
            this.paused = false;
            this.sound = null;
            this.callback = null;
        };

        Sound.prototype = {
            init: function () {
                this.sound = global_sound;
            },

            play: function (obj) {
                if (!obj) {
                    obj = {};
                }

                if (obj.loop) {
                    if (this.paused) {
                        this._playLoop(this.loop + 1);
                    } else {
                        this._playLoop(obj.loop);
                    }
                } else {
                    this.loop = false;
                    this._play();
                }

                if (obj.onEnded && typeof obj.onEnded === "function") {
                    this.callback = obj.onEnded;
                }
            },

            _play: function () {
                if (this.paused) {
                    this.paused = false;
                } else {
                    try {
                        this.sound.currentTime = 0;
                    } catch (e) {}
                }

                this.sound.removeEventListener("ended");
                this.sound.addEventListener("ended", this._ended.bind(this), false);
                this.sound.src = settings.path + this.name + ext;
                this.sound.load();
                this.sound.play();
            }
        }

    } else {

        Sound = function (options) {
            this.name = options.name;
            this.volume = settings.volume || 0.5;
            this.preload = settings.preload ? "auto" : "none";
            this.loop = false;
            this.paused = false;
            this.sound = null;
            this.callback = null;

            if ("volume" in options) {
                this.volume = +options.volume;
            }

            if ("preload" in options) {
                this.preload = options.preload ? "auto" : "none"
            }
        };

        Sound.prototype = {
            init: function () {
                this.sound = new Audio();
                this.sound.src = settings.path + this.name + ext;
                this.sound.load();
                this.sound.preload = this.preload;
                this.sound.volume = this.volume;

                this.sound.addEventListener("ended", this._ended.bind(this), false);
            },

            play: function (obj) {
                if (!obj) {
                    obj = {};
                }

                if (obj.volume || obj.volume === 0) {
                    this.volume = +obj.volume;
                    this.sound.volume = this.volume;
                }

                if (obj.loop) {
                    if (this.paused) {
                        this._playLoop(this.loop + 1);
                    } else {
                        this._playLoop(obj.loop);
                    }
                } else {
                    this.loop = false;
                    this._play();
                }

                if (obj.onEnded && typeof obj.onEnded === "function") {
                    this.callback = obj.onEnded;
                }
            },

            _play: function () {
                if (this.paused) {
                    this.paused = false;
                } else {
                    try {
                        this.sound.currentTime = 0;
                    } catch (e) {}
                }

                this.sound.play();
            }
        };

    }

    Sound.prototype._playLoop = function (loop) {
        if (typeof loop === "boolean") {
            // FF 3.6 and iOS,
            // sound.loop = true not supported or buggy
            this.loop = 9999999;
            this._play();
        } else if (typeof loop === "number") {
            this.loop = loop - 1;
            this._play();
        }
    };

    Sound.prototype._ended = function () {
        if (this.loop > 0) {
            this.loop -= 1;
            this._play();
        }

        if (this.callback) {
            this.callback(this.name);
        }
    };

    Sound.prototype.pause = function () {
        this.paused = true;
        this.sound.pause();
    };

    Sound.prototype.stop = function () {
        this.loop = false;
        this.sound.pause();

        try {
            this.sound.currentTime = 0;
        } catch (e) {}
    };

    Sound.prototype.destroy = function () {
        this.stop();
        this.sound.removeEventListener("ended", this._ended.bind(this), false);
        this.sound.src = "";
        this.sound = null;
    };



    var checkSupport = function () {
        global_sound = new Audio();

        var can_play_mp3 = global_sound.canPlayType('audio/mpeg'),
            can_play_ogg = global_sound.canPlayType('audio/ogg'),
            can_play_aac = global_sound.canPlayType('audio/mp4; codecs="mp4a.40.2"');

        if (is_iOS) {

            if (can_play_mp3 === "probably") {
                ext = ".mp3";
            } else if (can_play_aac === "probably") {
                ext = ".aac";
            } else if (can_play_mp3 === "maybe") {
                ext = ".mp3";
            } else if (can_play_aac === "maybe") {
                ext = ".aac";
            }

        } else {

            if (can_play_mp3 === "probably") {
                ext = ".mp3";
            } else if (can_play_ogg === "probably") {
                ext = ".ogg";
            } else if (can_play_mp3 === "maybe") {
                ext = ".mp3";
            } else if (can_play_ogg === "maybe") {
                ext = ".ogg";
            } else {
                ext = ".wav";
            }

        }
    };

    var createSound = function (obj) {
        sounds[obj.name] = new Sound(obj);
        sounds[obj.name].init();
    };

    $.ionSound = function (options) {
        settings = JSON.parse(JSON.stringify(options));
        settings.path = settings.path || "";
        settings.volume = settings.volume || 0.5;
        settings.preload = settings.preload || false;
        settings.mix = settings.mix || true;

        sounds_num = settings.sounds.length;

        if (!sounds_num) {
            warn("No sound-files provided!");
            return;
        }

        checkSupport();

        for (i = 0; i < sounds_num; i++) {
            createSound(settings.sounds[i]);
        }
    };

    $.ionSound.version = "2.1.3";

    $.ionSound.play = function (name, options) {
        if (sounds[name]) {
            sounds[name].play(options);
        }
    };

    $.ionSound.pause = function (name) {
        if (name && sounds[name]) {
            sounds[name].pause();
        } else {
            for (i in sounds) {
                if (!sounds.hasOwnProperty(i)) {
                    continue;
                }
                if (sounds[i]) {
                    sounds[i].pause();
                }
            }
        }
    };

    $.ionSound.stop = function (name) {
        if (name && sounds[name]) {
            sounds[name].stop();
        } else {
            for (i in sounds) {
                if (!sounds.hasOwnProperty(i)) {
                    continue;
                }
                if (sounds[i]) {
                    sounds[i].stop();
                }
            }
        }
    };

    $.ionSound.destroy = function (name) {
        if (name && sounds[name]) {
            sounds[name].destroy();
            sounds[name] = null;
        } else {
            for (i in sounds) {
                if (!sounds.hasOwnProperty(i)) {
                    continue;
                }
                if (sounds[i]) {
                    sounds[i].destroy();
                    sounds[i] = null;
                }
            }
        }
    };

} (jQuery));
