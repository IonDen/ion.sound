# Ion.Sound 1.3.0

> <a href="readme.md">English description</a> | Описание на русском

Плагин для воспроизведения звуков событий.
* <a href="http://ionden.com/a/plugins/ion.sound/index.html">Сайт проекта и демо</a>
* <a href="http://ionden.com/a/plugins/ion.sound/ion.sound-1.3.0.zip">Скачать ion.sound-1.3.0.zip</a>

***

## Описание
* Кроссбраузерная поддержка: Google Chrome, Mozilla Firefox, Opera, Safari, IE(9.0+) и мобильные браузеры
* Плагин свободно распространяется на условиях <a href="http://ionden.com/a/plugins/licence.html" target="_blank">лицензии MIT</a>.
* Ion.Sound включает в поставку 15 бесплатных звуковых файлов

Сегодня веб-сайты переполнены событиями (новое письмо, новое сообщение в чат, обновление контента и т.п.). Часто не достаточно одной визуальной индикации этих событий, что бы привлечь внимание пользователя. Необходимы звуки! В этом деле вам поможет эта библиотека для воспроизведения коротких звуков.


## Зависимости
* <a href="http://jquery.com/" target="_blank">jQuery 1.6+</a>


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
$.ionSound({
    sounds: [
        "my_cool_sound"
    ]
});
```

Играем звук:
```javascript
$.ionSound.play("my_cool_sound");
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
            <td>["water_droplet:0.5"]</td>
            <td>Не обязательный параметр, позволяет задать набор подключаемых звуков в виде массива.<br/>:0.5 - не обязательный параметр, задает индивидуальную громкость. Например <code>Sound_name:0.8</code></td>
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
$.ionSound({
    sounds: [                       // указываем нужные названия звуков
        "beer_can_opening",
        "bell_ring:0.3",            // индивидуальная громкость 0.3
        "branch_break",
        "metal_plate:0.4",          // индивидуальная громкость 0.4
        "pop_cork",
        "staple_gun",
        "water_droplet"
    ],
    path: "sounds/",                // указываем папку где они лежат
    multiPlay: false,               // запрещаем одновременное проигрывание
    volume: "0.3"                   // делаем по тише
});
```

## Методы

Проигрываем звук:
```javascript
$.ionSound.play("button_tiny");

// Например воспроизведение при нажатии на кнопку

$("#myButton").on("click", function(){
    $.ionSound.play("button_tiny");
});

// Или заодно изменим громкость звука

$("#myButton").on("click", function(){
    $.ionSound.play("button_tiny:0.5");
});
```

Остановка воспроизведения конкретного звука:
```javascript
$.ionSound.stop("button_tiny");
```

Удаление звука из памяти:
```javascript
$.ionSound.kill("button_tiny");
```

Прекращаем работу плагина:
```javascript
$.ionSound.destroy();
```


## История обновлений
* 30 ноября 2013 - новые методы "stop" и "kill". Возможность изменять громкость звука при каждом запуске.
* 13 октября 2013 - добавлена возмоность устанавливать индивидуальную громкость для каждого звука. Улучшено тестовое окружение
* 21 сентября 2013 - плагин переехал в простарнство имен jQuery, добавлен новый метод, добавлено 10 звуков
* 08 сентября 2013 - исправлен баг в iOS
* 08 сентября 2013 - небольшое улучшение
* 07 сентября 2013 - релиз плагина