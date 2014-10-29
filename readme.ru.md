# Ion.Sound 2.1.3

> <a href="readme.md">English description</a> | Описание на русском

JavaScript-плагин для воспроизведения звуков
* <a href="http://ionden.com/a/plugins/ion.sound/index.html">Сайт проекта и демо</a>
* <a href="http://ionden.com/a/plugins/ion.sound/ion.sound-2.1.3.zip">Скачать ion.sound-2.1.3.zip</a>

***

## Описание
Сегодня веб-сайты переполнены событиями (новое письмо, новое сообщение в чат, обновление контента и т.п.). Часто не достаточно одной визуальной индикации этих событий, что бы привлечь внимание пользователя. Необходимы звуки! В этом деле вам поможет эта библиотека для воспроизведения коротких звуков.
* Плагин свободно распространяется на условиях <a href="http://ionden.com/a/plugins/licence.html" target="_blank">лицензии MIT</a>.
* Ion.Sound включает в поставку 25 бесплатных звуковых файлов


## Поддерживаемые браузеры
### Desktop Windows, OS X, Linux:

* Google Chrome
* Mozilla Firefox
* Microsoft Internet Explorer 9.0+
* Opera 12.16+
* Safari 5.1+ (Safari на Windows требует установленный QuickTime для воспроизведения звуков)

### Mobile:

* iOS Safari и другие (с некоторыми <a href="https://developer.apple.com/library/safari/documentation/audiovideo/conceptual/using_html5_audio_video/device-specificconsiderations/device-specificconsiderations.html" target="_blank">ограничениями</a>)
* Android Google Chrome и другие (тоже с некоторыми ограничениями)
* WP8 Internet Explorer

<a href="http://caniuse.com/audio" target="_blank">Подробнее о кроссбраузерной поддержке</a>


## Зависимости
* 2 версии плагина, с зависимостью от jQuery и без


## Подключение
Подключаем библиотеки:
* jquery.js - опционально
* ion.sound.min.js

Готовим звуковые файлы (15 звуков включены в поставку) и складываем их в какую-либо папку (например "sounds"):
* my_cool_sound.mp3
* my_cool_sound.ogg
* my_cool_sound.aac

Помимо MP3-файла, нужно так же подготовить OGG и AAC-файл, так как не все браузеры поддерживают MP3.<br/>
Конвертировать MP3 в OGG и AAC можно на <a href="http://media.io/" target="_blank">Media.io</a> или на <a href="https://cloudconvert.org/formats#audio" target="_blank">CloudConvert.org</a>.<br/>
<i>Поддержка формата AAC была добавлена для улучшения совместимости с iOS 8.x устройствами (iPhone, iPad)</i>


## Устанавливаем с помощью bower
* bower install ionsound


## Устанавливаем с помощью spm [![](http://spmjs.io/badge/ion-sound)](http://spmjs.io/package/ion-sound)
* spm install ion-sound


## Инициализация
Инициализируем плагин:
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

Играем звук:
```javascript
// Самый простой вызов
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
            <td>-</td>
            <td>
                Не обязательный параметр, позволяет задать набор подключаемых звуков в виде массива объектов. Структура объекта звука:<br/>
                <code>name: "название звука"</code> имя звукового файла, без расширения, !обязательное поле<br/>
                <code>volume: 0.2</code> перезаписать базовую громкость<br/>
                <code>preload: true</code> перезаписать базовый параметр предзагрузки звуков<br/>
            </td>
        </tr>
        <tr>
            <td>path</td>
            <td>-</td>
            <td>Пример: <code>"sounds/"</code>. Не обязательный параметр, указывает путь к папке со звуками. Если не указать то совпадает с директорией html файла</td>
        </tr>
        <tr>
            <td>preload</td>
            <td>false</td>
            <td>Не обязательный параметр, если указать <code>true</code>, то попробует предзагрузить звуки, после загрузки страницы</td>
        </tr>
        <tr>
            <td>volume</td>
            <td>0.5</td>
            <td>Не обязательный параметр, задает базовую громкость от 0.0 до 1.0</td>
        </tr>
    </tbody>
</table>

Еще один пример подключения плагина с параметрами
```javascript
ion.sound({
    sounds: [
        {
            name: "message_alert",
            volume: 1.0
        },
    ],
    path: "sounds/",
    preload: true
});
```

## Методы

### ion.sound.play
```javascript
// Простое проигрывание звука
ion.sound.play("my_cool_sound");

// Меняем громкость и проигрываем
ion.sound.play("my_cool_sound", {
    volume: 0.9
});

// Бесконечное воспроизведение
ion.sound.play("my_cool_sound", {
    loop: true
});

// Изменим громкость и проиграем звук 3 раза
ion.sound.play("my_cool_sound", {
    volume: 0.2,
    loop: 3
});

// Отслеживаем окончание воспроизведения звука
ion.sound.play("my_cool_sound", {
    onEnded: function (name) {
        console.log("Just finished: " + name);
    }
});
```

### ion.sound.pause
```javascript
// поставим на паузу звук по имени
ion.sound.pause("my_cool_sound");

// поставим на паузу все звуки
ion.sound.pause();
```

### ion.sound.stop
```javascript
// остановим звук по имени
ion.sound.stop("my_cool_sound");

// остановим все звуки
ion.sound.stop();
```

### ion.sound.destroy
```javascript
// удалим звук по имени
ion.sound.destroy("my_cool_sound");

// удалим все звуки
ion.sound.destroy();
```


## Отличия jQuery-версии плагина от обычной
* jQuery вызов метода: <code>$.ionSound.method(...);</code>
* не-jQuery вызов метода: <code>ion.sound.method(...);</code>


## История обновлений
* 2.1.3: 29 октября 2014 - исправлен баг в FF и IE #18
* 2.1.2: 26 октября 2014 - исправлен баг в iOS 8.x #15
* 2.1.1: 25 октября 2014 - мини-фикс.
* 2.1.0: 25 октября 2014 - исправлен баг #12. Добавлена поддержка .aac. Добавен коллбэк onEnded.
* 2.0.2: 08 августа 2014 - новый метод - пауза. Добавлена поддержка bower
* 2.0.1: 01 августа 2014 - 2 версии плагина, с jQuery-зависимостью и без
* 2.0.0: 31 июня 2014 - убрана зависимость от jQuery. Новое API. Возможность повторного воспроизведения звуков
* 1.3.0: 30 ноября 2013 - новые методы "stop" и "kill". Возможность изменять громкость звука при каждом запуске
* 13 октября 2013 - добавлена возмоность устанавливать индивидуальную громкость для каждого звука. Улучшено тестовое окружение
* 21 сентября 2013 - плагин переехал в простарнство имен jQuery, добавлен новый метод, добавлено 10 звуков
* 08 сентября 2013 - исправлен баг в iOS
* 08 сентября 2013 - небольшое улучшение
* 07 сентября 2013 - релиз плагина