![ion.sound](_tmp/logo-ion-sound.png)

> English description | <a href="readme.ru.md">Описание на русском</a>

[![OpenCollective](https://opencollective.com/ionsound/backers/badge.svg)](#backers) 
[![OpenCollective](https://opencollective.com/ionsound/sponsors/badge.svg)](#sponsors)


JavaScript plugin for playing sounds on user actions and page events.

***

* Version: 3.0.7
* <a href="http://ionden.com/a/plugins/ion.sound/en.html">Project page and demos</a>
* <a href="http://ionden.com/a/plugins/ion.sound/ion.sound-3.0.7.zip">Download ZIP</a>

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


## Install with bower
* bower install ionsound

## Install with npm
* npm install ion-sound

## Install with spm [![](http://spmjs.io/badge/ion-sound)](http://spmjs.io/package/ion-sound)
* spm install ion-sound


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

<table class="options">
    <thead>
        <tr>
            <th>Option</th>
            <th>Defaults</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="options__step">
            <td>sounds</td>
            <td>-</td>
            <td>array</td>
            <td>Collection of sound objects. Each object contains information about sound file and (optional) individual settings</td>
        </tr>

        <tr>
            <td>path</td>
            <td>-</td>
            <td>string</td>
            <td>Path to file</td>
        </tr>
        <tr>
            <td>preload</td>
            <td>false</td>
            <td>boolean</td>
            <td>Preloading sounds</td>
        </tr>
        <tr>
            <td>multiplay</td>
            <td>false</td>
            <td>boolean</td>
            <td>Sound multi play. If set, will allow to play multiple instances of one sound at once</td>
        </tr>
        <tr>
            <td>loop</td>
            <td>false</td>
            <td>boolean/number</td>
            <td>If set to true will enable infinite loop. Or paste a number to set loop limit</td>
        </tr>
        <tr class="options__step">
            <td>volume</td>
            <td>1.0</td>
            <td>number</td>
            <td>Playback volume from 0 to 1</td>
        </tr>

        <tr>
            <td>scope</td>
            <td>null</td>
            <td>object</td>
            <td>Callbacks will be called in that object's scope</td>
        </tr>
        <tr>
            <td>ready_callback</td>
            <td>null</td>
            <td>function</td>
            <td>Called after sound file is fully uploaded (or ready to play for HTML5 audio)</td>
        </tr>
        <tr>
            <td>ended_callback</td>
            <td>null</td>
            <td>function</td>
            <td>Called each time then sound file will reach it's end</td>
        </tr>
    </tbody>
</table>


## Sound object

<table class="options">
    <thead>
        <tr>
            <th>Option</th>
            <th>Defaults</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>-</td>
            <td>string</td>
            <td>File name. Plugin will choose file extension automatically (.mp3, .ogg, .aac, .mp4 and etc.)</td>
        </tr>
        <tr>
            <td>alias</td>
            <td>-</td>
            <td>string</td>
            <td>Alias for sound call, optional. Normally is used to shorten ion.sound calls</td>
        </tr>
        <tr>
            <td>sprite</td>
            <td>-</td>
            <td>object</td>
            <td>
                Mark that sound is audio-sprite.
                This is an object. Example: <code>{"part_name_1": [0, 2], "part_name_2": [2, 2]}</code><br/>
                Part_name is a name of sprite piece (it is used instead of name to play a sound). And array with time marks: [start, duration] in seconds.
            </td>
        </tr>
        <tr>
            <td colspan="4">And also individual: path, preload, multiplay, loop, volume, scope and callbacks</td>
        </tr>
    </tbody>
</table>


## Plugin can be launched in jQuery namespace
* Use aliases to call any plugin methods: ion.sound(); -> $.ionSound();
* ion.sound.play("sound_name"); -> $.ionSound.play("sound_name");
* Etc.


### <a href="history.md">Update history</a>

***

#### Support Ion-series plugins development:

* Donate through Pledgie service: [![](https://pledgie.com/campaigns/25694.png?skin_name=chrome)](https://pledgie.com/campaigns/25694)

* Donate direct to my Paypal account: https://www.paypal.me/IonDen

* Donate direct to my Yandex.Money account: http://yasobe.ru/na/razrabotku

### Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/ionsound#backer)]

<a href="https://opencollective.com/ionsound/backer/0/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/1/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/2/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/3/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/4/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/5/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/6/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/7/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/8/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/9/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/10/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/11/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/12/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/13/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/14/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/15/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/16/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/17/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/18/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/19/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/20/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/21/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/22/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/23/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/24/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/25/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/26/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/27/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/28/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/backer/29/website" target="_blank"><img src="https://opencollective.com/ionsound/backer/29/avatar.svg"></a>


### Sponsors
Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/ionsound#sponsor)]

<a href="https://opencollective.com/ionsound/sponsor/0/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/1/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/2/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/3/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/4/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/5/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/6/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/7/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/8/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/9/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/10/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/11/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/12/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/13/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/14/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/15/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/16/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/17/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/18/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/19/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/20/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/21/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/22/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/23/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/24/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/25/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/26/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/27/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/28/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/ionsound/sponsor/29/website" target="_blank"><img src="https://opencollective.com/ionsound/sponsor/29/avatar.svg"></a>
