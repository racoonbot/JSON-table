## Operator Log Viewer

Программа отображает выбранный Operator Log в виде таблице на странице html .
Есть два пути:



**Путь первый.**
*С конвертацией в JSON.*
Инструкция:
1. Сначала используем костыль. При помощи  [log_to_jason_converter](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/log_to_jason_converter "log_to_jason_converter") конвертируем наш OperatorOfPlaylist.log в JSON .
2. Открываем [JSON-table.html](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/JSON-table.html "JSON-table.html")    и уже здесь открываем наш JSON  и получаем лог в виде таблицы. 


**Путь второй.**
*Без конвертации в JSON.*
 [Log Viewer (regex)](https://github.com/racoonbot/OperatorLog-Viewer/blob/main/Log%20Viewer%20(regex) "Log Viewer (regex)") Не доделанная отображалка OperatorOfPlaylist.log  которая работает с использованием реугялярных выражений. 
 Отображает только события:




