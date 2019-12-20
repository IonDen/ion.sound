![ion.sound](_tmp/logo-ion-sound.png)

JavaScript plugin for playing sounds on user actions and page events.

***

* Version: 3.0.7
* <a href="http://ionden.com/a/plugins/ion.sound/en.html">Project page and demos</a>
* <a href="http://ionden.com/a/plugins/ion.sound/ion.sound-3.0.7.zip">Download ZIP</a>
* [Support the plugin on GitHub sponsors](https://github.com/sponsors/IonDen)

## Description
* Ion.Sound — JavaScript-plugin for playing sounds based on Web Audio API.
* Plugin is working on most popular desktop and mobile browsers and can be used everywhere, from common web sites to browser games.
* For not so modern browsers plugin falls back to HTML5 audio.
* Audio-sprites support included.
* Ion.Sound freely distributed under terms of <a href="http://ionden.com/a/plugins/licence-en.html" target="_blank">MIT licence</a>.
* 25 free sounds included

Today websites are full of events (new mail, new chat-message, content update etc.). Often it is not enough to indicate this events only visually to get user attention. You need sounds! This library, made for playing small sounds, will help you with this task.
Also, new version of Ion.Sound is capable to handle browser games audio. It has full control of loading, playing and removing audio files. And audio-sprites support of course.


## Supported browsers
### Desktop Windows, OS X, Linux:

* Google Chrome
* Mozilla Firefox
* Microsoft Internet Explorer 9.0+
* Opera 12.16+
* Safari 5.1+ (Safari on Windows requires QuickTime to play sounds)

### Mobile:

* iOS Safari and others (with some <a href="https://developer.apple.com/library/safari/documentation/audiovideo/conceptual/using_html5_audio_video/device-specificconsiderations/device-specificconsiderations.html" target="_blank">restrictions</a>)
* Android Google Chrome and others (with some restrictions also)
* WP8 Internet Explorer

Can i use <a href="http://caniuse.com/#feat=audio-api" target="_blank">Web Audio API</a> and <a href="http://caniuse.com/audio" target="_blank">HTML5 Audio</a>?


## Demos
* <a href="http://ionden.com/a/plugins/ion.sound/demo.html">Basic demo</a>
* <a href="http://ionden.com/a/plugins/ion.sound/demo_advanced.html">Advanced demo</a>


## Dependencies
* None


## Usage
Import this library:
* ion.sound.min.js

Prepare sound-files (25 sounds are included) and put them in some folder (eg. "sounds"):
* my_cool_sound.mp3
* my_cool_sound.ogg
* my_cool_sound.aac

It is not enough to have only MP3-file, you should make OGG and AAC-file too, because not all browsers support MP3.<br/>
You can easily convert you MP3-s to OGG-s and AAC-s at <a href="http://media.io/" target="_blank">Media.io</a> or at <a href="https://cloudconvert.org/formats#audio" target="_blank">CloudConvert.org</a>.<br/>
<i>AAC support was added to improve cross browser support of iOS 8.x devices (iPhone, iPad)</i>


## Install with npm
Use [NPM](https://www.npmjs.com/package/ion-sound) to download latest version of a plugin and install it directly in to your project. 

* npm install ion-sound


## Install with Yarn

Use [Yarn](https://yarnpkg.com/en/package/ion-sound) to download latest version of a plugin and install it directly in to your project. 

* yarn add ion-sound


## Initialisation
To initialise plugin call this method:
```javascript
ion.sound({
    sounds: [
        {
            name: "my_cool_sound"
        },
        {
            name: "notify_sound",
            volume: 0.2
        },
        {
            name: "alert_sound",
            volume: 0.3,
            preload: false
        }
    ],
    volume: 0.5,
    path: "sounds/",
    preload: true
});
```

And play sound!
```javascript
// Simple
ion.sound.play("my_cool_sound");
```


## General settings

| Option | Defaults | Type | Description |
| --- | --- | --- | --- |
| `sounds` | `-` | `array` | Collection of sound objects. Each object contains information about sound file and (optional) individual settings |
| `path` | `-` | `string` | Path to file |
| `preload` | `false` | `boolean` | Preloading sounds |
| `multiplay` | `false` | `boolean` | Sound multi play. If set, will allow to play multiple instances of one sound at once |
| `loop` | `false` | `boolean/number` | If set to true will enable infinite loop. Or paste a number to set loop limit |
| `volume` | `1.0` | `number` | Playback volume from 0 to 1 |
| `scope` | `null` | `object` | Callbacks will be called in that object's scope |
| `ready_callback` | `null` | `function` | Called after sound file is fully uploaded (or ready to play for HTML5 audio) |
| `ended_callback` | `null` | function`` | Called each time then sound file will reach it's end |


## Sound object

| Option | Defaults | Type | Description |
| --- | --- | --- | --- |
| `name` | `-` | `string` | File name. Plugin will choose file extension automatically (.mp3, .ogg, .aac, .mp4 and etc.) |
| `alias` | `-` | `string` | Alias for sound call, optional. Normally is used to shorten ion.sound calls |
| `sprite` | `-` | `object` | Mark that sound is audio-sprite. This is an object. Example: <code>{"part_name_1": [0, 2], "part_name_2": [2, 2]}</code><br/>Part_name is a name of sprite piece (it is used instead of name to play a sound). And array with time marks: [start, duration] in seconds. |
                
And also individual: path, preload, multiplay, loop, volume, scope and callbacks


## Plugin can be launched in jQuery namespace
* Use aliases to call any plugin methods: ion.sound(); -> $.ionSound();
* ion.sound.play("sound_name"); -> $.ionSound.play("sound_name");
* Etc.


### <a href="history.md">Update history</a>

***

#### Support Ion-series plugins development:

* [Support the plugin on GitHub sponsors](https://github.com/sponsors/IonDen)

* Donate direct to my Paypal account: https://www.paypal.me/IonDen
