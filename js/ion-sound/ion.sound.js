// Ion.Sound
// version 1.0.2 Build: 6
// © 2013 Denis Ineshin | IonDen.com
//
// Project page:    http://ionden.com/a/plugins/ion.sound/en.html
// GitHub page:     https://github.com/IonDen/ion.sound
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

var ion = ion || {};

ion.sound = {
    init: function(options){
        var settings = $.extend({
            sounds: [
                "beer_can_opening",
                "bell_ring",
                "branch_break",
                "button_click",
                "button_click_on",
                "button_push",
                "button_tiny",
                "camera_flashing",
                "computer_error",
                "door_bell",
                "light_bulb_breaking",
                "metal_plate",
                "pop_cork",
                "staple_gun",
                "water_droplet"
            ],
            path: "static/sounds/",
            multiPlay: true,
            volume: "0.5"
        }, options);

        var i,
            soundsNum = settings.sounds.length,
            self = this,
            canMp3,
            url;

        this.sounds = {};
        this.playing = false;
        this.multiPlay = settings.multiPlay;

        var createSound = function(name){
            self.sounds[name] = new Audio();
            canMp3 = self.sounds[name].canPlayType("audio/mp3");
            if(canMp3 === "probably" || canMp3 === "maybe") {
                url = settings.path + name + ".mp3";
            } else {
                url = settings.path + name + ".ogg";
            }

            $(self.sounds[name]).prop("src", url);
            self.sounds[name].load();
            self.sounds[name].volume = settings.volume;
        };

        if(typeof Audio === "function" || typeof Audio === "object") {
            for(i = 0; i < soundsNum; i += 1){
                createSound(settings.sounds[i]);
            }
        }
    },
    play: function(name){
        var $sound = this.sounds[name],
            playingInt,
            self = this;

        if(typeof $sound === "object") {

            if(!this.multiPlay && !this.playing) {
                $sound.play();
                this.playing = true;

                playingInt = setInterval(function(){
                    if($sound.ended) {
                        clearInterval(playingInt);
                        self.playing = false;
                    }
                }, 250);
            } else if(this.multiPlay) {
                if($sound.ended) {
                    $sound.play();
                } else {
                    try {
                        $sound.currentTime = 0;
                    } catch (e) {}
                    $sound.play();
                }
            }

        }
    }
};