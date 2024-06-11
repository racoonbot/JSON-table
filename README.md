
## Operator Log Viewer

Программа отображает выбранный Operator Log в виде таблице на странице html.
Фичи:

 - Подсветка разных событий разным цветом
 - Фильтры, Возможность скрывать строки с теми или иными событиями.
 - Поиск. Поиск по символам. Отображает только строки с найденными символами. (альтернативна поиску по странице)

Инструкция:
1. Открываем файл [OperatorLogViewer.html](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/OperatorLogViewer.html "OperatorLogViewer.html"). Сначала используем костыль.  в левом углу выбираем интересующий нас OperatorLog файл. 
2. Нажатием кнопки "convert to JSON"  конвертируем наш .log файл в JSON. 
3. Нажатием  "Save JSON" сохраняем JSON  как файл. (обязательно)
4. Далее, Ниже добавляем JSON файл.
5. Нажимаем "Show Log!".
6. Через секунд пять появится таблица с логом. Надо понимать что сток в логе может быть весьма много  и скрытие/отображение таблицы происходит не мгновенно..


**Путь второй.**   В разработке....
(не рабочий и страшнный, но более удобный)  

*Без конвертации в JSON.*  

 [Log Viewer (regex)](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/Log%20Viewer%20(regex) "Log Viewer (regex)") Не доделанная отображалка OperatorOfPlaylist.log  которая работает с использованием регулярных выражений.  
 Инструкция:
 1. Просто открываем нужный нам OperatorLog файл.
 Отображает только события: Del/Cut_Primary,Del/Cut_Secondary, Copy_Primary, Copy_Secondary.
