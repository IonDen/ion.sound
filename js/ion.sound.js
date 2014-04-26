// Ion.Sound
// version 1.3.0 Build: 20
// © 2013 Denis Ineshin | IonDen.com
//
// Project page:    http://ionden.com/a/plugins/ion.sound/en.html
// GitHub page:     https://github.com/IonDen/ion.sound
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

(function ($) {

    if ($.ionSound) {
        return;
    }


    var settings = {},
        soundsNum,
        canMp3,
        url,
        i,

        sounds = {},
        playing = false,

        VERSION = "1.3.0";


    var createSound = function (soundInfo) {
        var name,
            volume;

        if (soundInfo.indexOf(":") !== -1) {
            name = soundInfo.split(":")[0];
            volume = soundInfo.split(":")[1];
        } else {
            name = soundInfo;
        }

        sounds[name] = new Audio();
        canMp3 = sounds[name].canPlayType("audio/mp3");
        if (canMp3 === "probably" || canMp3 === "maybe") {
            url = settings.path + name + ".mp3";
        } else {
            url = settings.path + name + ".ogg";
        }

        $(sounds[name]).prop("src", url);
        sounds[name].load();
        sounds[name].preload = "auto";
        sounds[name].volume = volume || settings.volume;
    };


    var playSound = function (info) {
        // Builded a playInfo object instead of seperate vars
        var playInfo = {};

        // Check if we have a string (the old way) or a object, we can now specify both
        if (typeof info == "string") {
            //it's a string
            if (info.indexOf(":") !== -1) {
                playInfo.name = info.split(":")[0];
                playInfo.volume = info.split(":")[1];
            } else {
                playInfo.name = info;
            }
        }
        else if (info != null && typeof info == "object") {
            //it's an object
            playInfo = info;
        }
        else {
            //it's null or something else
            return;
        }

        // Continue normal operations
        playInfo.$sound = sounds[playInfo.name];

        if (typeof playInfo.$sound !== "object" || playInfo.$sound === null) {
            return;
        }

        if (playInfo.volume) {
            playInfo.$sound.volume = volume;
        }

        // Added Looping support
        if (playInfo.loop) {
            // TODO somehow in Firefox there is a larger delay between 2 playbacks: Chrome is much faster playing the second sample
            if (typeof playInfo.$sound.loop == 'boolean')
            {
                playInfo.$sound.loop = true;
            }
            else
            {
                playInfo.$sound.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
        }

        if (!settings.multiPlay && !playing) {

            playInfo.$sound.play();
            playing = true;

            // Subscribe to event
            playInfo.$sound.addEventListener('ended', function() {
                playing = false;
            }, false);

        } else if (settings.multiPlay) {

            if (playInfo.$sound.ended) {
                playInfo.$sound.play();
            } else {
                try {
                    playInfo.$sound.currentTime = 0;
                } catch (e) {}
                playInfo.$sound.play();
            }

        }
    };


    var stopSound = function (name) {
        var $sound = sounds[name];

        if (typeof $sound !== "object" || $sound === null) {
            return;
        }

        $sound.pause();
        try {
            $sound.currentTime = 0;
        } catch (e) {}
    };


    var killSound = function (name) {
        var $sound = sounds[name];

        if (typeof $sound !== "object" || $sound === null) {
            return;
        }

        try {
            sounds[name].src = "";
        } catch (e) {}
        sounds[name] = null;
    };


    // Plugin methods
    $.ionSound = function (options) {

        settings = $.extend({
            sounds: [
                "water_droplet"
            ],
            path: "static/sounds/",
            multiPlay: true,
            volume: "0.5"
        }, options);

        soundsNum = settings.sounds.length;

        if (typeof Audio === "function" || typeof Audio === "object") {
            for (i = 0; i < soundsNum; i += 1) {
                createSound(settings.sounds[i]);
            }
        }

        $.ionSound.play = function (name) {
            playSound(name);
        };

        $.ionSound.loop = function (info) {
            info.loop = true;
            playSound(info);
        };

        $.ionSound.stop = function (name) {
            stopSound(name);
        };
        $.ionSound.kill = function (name) {
            killSound(name);
        };
    };


    $.ionSound.destroy = function () {
        for (i = 0; i < soundsNum; i += 1) {
            sounds[settings.sounds[i]] = null;
        }
        soundsNum = 0;
        $.ionSound.play = function () {};
        $.ionSound.stop = function () {};
        $.ionSound.kill = function () {};
    };

}(jQuery));