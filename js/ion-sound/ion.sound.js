// Ion.Sound
// version 1.2.0 Build: 16
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
        playing = false;


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
        sounds[name].volume = volume || settings.volume;
    };


    var playSound = function (name) {
        var $sound = sounds[name],
            playingInt;

        if (typeof $sound === "object" && $sound !== null) {

            if (!settings.multiPlay && !playing) {
                $sound.play();
                playing = true;

                playingInt = setInterval(function () {
                    if ($sound.ended) {
                        clearInterval(playingInt);
                        playing = false;
                    }
                }, 250);
            } else if (settings.multiPlay) {
                if ($sound.ended) {
                    $sound.play();
                } else {
                    try {
                        $sound.currentTime = 0;
                    } catch (e) {}
                    $sound.play();
                }
            }

        }
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
    };


    $.ionSound.destroy = function () {
        for (i = 0; i < soundsNum; i += 1) {
            sounds[settings.sounds[i]] = null;
        }
        soundsNum = 0;
        $.ionSound.play = function () {};
    };

}(jQuery));