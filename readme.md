# Ion.Sound 1.0.0

> English description | <a href="readme.ru.md">Описание на русском</a>

Plugin for playing sounds on events.
* <a href="http://ionden.com/a/plugins/ion.sound/index.html">Project page and demos</a>
* <a href="http://ionden.com/a/plugins/ion.sound/ion.sound-1.0.0.zip">Download ion.sound-1.0.0.zip</a>

***

## Description
* Crossbrowser support: Google Chrome, Mozilla Firefox, Opera, Safari, IE(9.0+) and mobile browsers
* <a href="https://github.com/IonDen/ion.sound">GitHub Page</a>.
* Ion.Sound freely distributed under terms of <a href="http://ionden.com/a/plugins/licence-en.html" target="_blank">MIT licence</a>.
* Ion.Sound includes 15 free sounds

Today websites are full of events (new mail, new chat-message, content update etc.). Often it is not enough to indicate this events only visually to get user attention. You need sounds! This library, made for playing small sounds, will help you with this task.


## Dependencies
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>


## Usage
Import this libraries:
* jQuery
* ion.sound.min.js

Prepare sound-files (15 sounds are included) and put them in some folder (eg. "sounds"):
* my_cool_sound.mp3
* my_cool_sound.ogg
It is not enough to have only Mp3-file, you should make Ogg-file too, because not all browsers support Mp3. You can easily convert you Mp3-s to Ogg-s <a href="http://media.io/" target="_blank">online</a>.


## Initialisation
To initialise plugin call this method:
```javascript
ion.sound.init();
```

And play sound!
```javascript
ion.sound.play("my_cool_sound");
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
            <td>[Array of 15 sounds]</td>
            <td>Optional property, you can set your own sounds collection here.</td>
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
ion.sound.init({
    sounds: [                       // set sounds names
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
    path: "sounds/",                // set path to sounds
    multiPlay: false,               // playing only 1 sound at once
    volume: "0.3"                   // not so loud please
});
```


Playing sound on button click:
```javascript
$("#myButton").on("click", function(){
    ion.sound.play("button_tiny");
});
```


## Update history
* September 07, 2013 - Plugin release