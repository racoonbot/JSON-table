
## Operator Log Viewer

Программа отображает выбранный Operator Log в виде таблице на странице html .

Есть два пути:



**Путь первый.**  
(Рабочий и красивый, но не удобный.)  

*С конвертацией в JSON.*  

Инструкция:
1. Сначала используем костыль. При помощи  [log_to_jason_converter](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/log_to_jason_converter "log_to_jason_converter") конвертируем наш OperatorOfPlaylist.log в JSON.
 - Выбираем файл лога
 - Жмём "Обработать файл"
 - Жмём "Сохранить обработанные данные"
 - Автоматически загрузится JSON файл, для последующего использования 
2. Открываем [JSON-table.html](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/JSON-table.html "JSON-table.html")    и уже здесь открываем наш JSON  и получаем лог в виде таблицы.
3. Нажимаем кнопку "добавить файл" . Т.к сторочек лога не мало в работе будут наблюдаться некоторые задержки.
4. Ряд кнопок HIDE позволять скрыть строки с теми или иными событиями.  
5. "Искать" можно по любым наборам символов. Это просто поиск по странице который отобразит строки с найденными результатами.


**Путь второй.**  
(не рабочий и страшнный, но более удобный)  

*Без конвертации в JSON.*  

 [Log Viewer (regex)](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/Log%20Viewer%20(regex) "Log Viewer (regex)") Не доделанная отображалка OperatorOfPlaylist.log  которая работает с использованием регулярных выражений.  
  
 Отображает только события: Del/Cut_Primary,Del/Cut_Secondary, Copy_Primary, Copy_Secondary.




