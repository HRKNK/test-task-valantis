# Valantis

Начало работы/Запуск:

- `npm install` - Установка зависимостей;
- `npm run start` - Запуск dev_server-a;
- `npm run build:dev` - Developer-mode сборка;

# Задание

Используя предоставленный апи создать страницу, которая отображает список товаров.  
Для каждого товара должен отображаться его id, название, цена и бренд.

## Требования:

- выводить по 50 товаров на страницу с возможностью постраничного перехода (пагинация) в обе стороны.
- возможность фильтровать выдачу используя предоставленное апи по названию, цене и бренду

Если API возвращает дубли по id, то следует их считать одним товаром и выводить только первый, даже если другие поля различаются.
Если API возвращает ошибку, следует вывести идентификатор ошибки в консоль, если он есть и повторить запрос.

Задание можно выполнять на **React** или на **нативном JS**.  
Оцениваться будет правильность работы сайта и качество кода.  
**Внешний вид** сайта оставляем на Ваше усмотрение.

Пароль для доступа к апи: **Valantis**  
API доступно по адресам:

- http://api.valantis.store:40000/
- https://api.valantis.store:41000/

[Документация по работе с **API** прилагается](https://github.com/ValantisJewelry/TestTaskValantis/blob/main/API.md)
