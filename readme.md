# Ion.Sound 1.3.0

> English description | <a href="readme.ru.md">Описание на русском</a>

Plugin for playing sounds on events.
* <a href="http://ionden.com/a/plugins/ion.sound/en.html">Project page and demos</a>
* <a href="http://ionden.com/a/plugins/ion.sound/ion.sound-1.3.0.zip">Download ion.sound-1.3.0.zip</a>

***

## Description
* Crossbrowser support: Google Chrome, Mozilla Firefox, Opera, Safari, IE(9.0+) and mobile browsers
* <a href="https://github.com/IonDen/ion.sound">GitHub Page</a>.
* Ion.Sound freely distributed under terms of <a href="http://ionden.com/a/plugins/licence-en.html" target="_blank">MIT licence</a>.
* Ion.Sound includes 25 free sounds

Today websites are full of events (new mail, new chat-message, content update etc.). Often it is not enough to indicate this events only visually to get user attention. You need sounds! This library, made for playing small sounds, will help you with this task.


## Dependencies
* <a href="http://jquery.com/" target="_blank">jQuery 1.6+</a>


## Usage
Import this libraries:
* jQuery
* ion.sound.min.js

Prepare sound-files (25 sounds are included) and put them in some folder (eg. "sounds"):
* my_cool_sound.mp3
* my_cool_sound.ogg

It is not enough to have only Mp3-file, you should make Ogg-file too, because not all browsers support Mp3.<br/>
You can easily convert you Mp3-s to Ogg-s at <a href="http://media.io/" target="_blank">Media.io</a> or at <a href="https://cloudconvert.org/formats#audio" target="_blank">CloudConvert.org</a>.


## Initialisation
To initialise plugin call this method:
```javascript
$.ionSound({
    sounds: [
        "my_cool_sound"
    ]
});
```

And play sound!
```javascript
$.ionSound.play("my_cool_sound");
```


## Settings
<table class="options">
    <thead>
        <tr>
            <th>Settings</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>sounds</td>
            <td>["water_droplet:0.5"]</td>
            <td>Optional property, you can set your own sounds collection here. It is array.<br/>:0.5 - optional individual volume. Example: <code>sound_name:0.2</code></td>
        </tr>
        <tr>
            <td>path</td>
            <td>"static/sounds/"</td>
            <td>Optional property, set path to folder with sounds.</td>
        </tr>
        <tr>
            <td>multiPlay</td>
            <td>true</td>
            <td>Optional property, if set to <code>false</code>, will allow plugin to play only 1 sound at once.</td>
        </tr>
        <tr>
            <td>volume</td>
            <td>0.5</td>
            <td>Optional property, will set base volume from 0.0 to 1.0</td>
        </tr>
    </tbody>
</table>

An example of a customised plugin:
```javascript
$.ionSound({
    sounds: [                       // set needed sounds names
        "beer_can_opening",
        "bell_ring:0.3",            // :0.3 - individual volume
        "branch_break",
        "metal_plate",
        "pop_cork:0.8",             // :0.8 - individual volume
        "staple_gun",
        "water_droplet:0.4"         // :0.4 - individual volume
    ],
    path: "sounds/",                // set path to sounds
    multiPlay: false,               // playing only 1 sound at once
    volume: "0.3"                   // not so loud please
});
```


## Methods

Playing sound:
```javascript
$.ionSound.play("button_tiny");

// For example playing sound on button click

$("#myButton").on("click", function(){
    $.ionSound.play("button_tiny");
});

// or reset the sound volume

$("#myButton").on("click", function(){
    $.ionSound.play("button_tiny:0.5");
});
```

Stop sound playback:
```javascript
$.ionSound.stop("button_tiny");
```

Remove sound from memory:
```javascript
$.ionSound.kill("button_tiny");
```

Destroying the plugin:
```javascript
$.ionSound.destroy();
```


## Update history
* November 30, 2013 - new methods "stop" and "kill". Ability to reset sound volume.
* October 13, 2013 - now you can set individual volume for any sound. Improved test environment.
* September 21, 2013 - plugin moved to jQuery namespace, new method and 10 new sounds
* September 08, 2013 - iOS not playing sound bug fix
* September 08, 2013 - Little enhancement
* September 07, 2013 - Plugin release