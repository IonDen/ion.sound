# Ion.Sound 1.0.2

> <a href="readme.md">English description</a> | Описание на русском

Плагин для воспроизведения звуков событий.
* <a href="http://ionden.com/a/plugins/ion.sound/index.html">Сайт проекта и демо</a>
* <a href="http://ionden.com/a/plugins/ion.sound/ion.sound-1.0.2.zip">Скачать ion.sound-1.0.2.zip</a>

***

## Описание
* Кроссбраузерная поддержка: Google Chrome, Mozilla Firefox, Opera, Safari, IE(9.0+) и мобильные браузеры
* Плагин свободно распространяется на условиях <a href="http://ionden.com/a/plugins/licence.html" target="_blank">лицензии MIT</a>.
* Ion.Sound включает в поставку 15 бесплатных звуковых файлов

Сегодня веб-сайты переполнены событиями (новое письмо, новое сообщение в чат, обновление контента и т.п.). Часто не достаточно одной визуальной индикации этих событий, что бы привлечь внимание пользователя. Необходимы звуки! В этом деле вам поможет эта библиотека для воспроизведения коротких звуков.


## Зависимости
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>


## Подключение
Подключаем библиотеки:
* jQuery
* ion.sound.min.js

Готовим звуковые файлы (15 звуков включены в поставку) и складываем их в какую-либо папку (например "sounds"):
* my_cool_sound.mp3
* my_cool_sound.ogg

Помимо Mp3-файла, нужно так же подготовить Ogg-файл, так как не все браузеры поддерживают mp3.<br/>
Конвертировать Mp3 в Ogg можно на <a href="http://media.io/" target="_blank">Media.io</a> или на <a href="https://cloudconvert.org/formats#audio" target="_blank">CloudConvert.org</a>.


## Инициализация
Инициализируем плагин:
```javascript
ion.sound.init();
```

Играем звук:
```javascript
ion.sound.play("my_cool_sound");
```

## Параметры
<table class="options">
    <thead>
        <tr>
            <th>Атрибут</th>
            <th>По умолчанию</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>sounds</td>
            <td>[Массив из 15 звуков]</td>
            <td>Не обязательный параметр, позволяет задать набор подключаемых звуков</td>
        </tr>
        <tr>
            <td>path</td>
            <td>"static/sounds/"</td>
            <td>Не обязательный параметр, указывает путь к папке со звуками</td>
        </tr>
        <tr>
            <td>multiPlay</td>
            <td>true</td>
            <td>Не обязательный параметр, если указать <code>false</code>, то звуки не будут воспроизводиться одновременно</td>
        </tr>
        <tr>
            <td>volume</td>
            <td>0.5</td>
            <td>Не обязательный параметр, задает базовую громкость от 0.0 до 1.0</td>
        </tr>
    </tbody>
</table>

Пример плагина подключенного с параметрами:
```javascript
ion.sound.init({
    sounds: [                       // указываем названия звуков
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
    path: "sounds/",                // указываем папку где они лежат
    multiPlay: false,               // запрещаем одновременное проигрывание
    volume: "0.3"                   // делаем по тише
});
```

Проигрываем один из звуков при нажатии на кнопку:
```javascript
$("#myButton").on("click", function(){
    ion.sound.play("button_tiny");
});
```


## История обновлений
* 08.09.2013 - исправлен баг в iOS
* 08.09.2013 - небольшое улучшение
* 07.09.2013 - релиз плагина