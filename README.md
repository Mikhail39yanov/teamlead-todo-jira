# Тестовое задание JS разработчик

## Для выполнения задания вам потребуется ознакомиться с базовыми возможностями Atlassian [Atlassian Connect Express](https://bitbucket.org/atlassian/atlassian-connect-express/src/master/ "Atlassian Connect Express") и компонентов [Atlaskit](https://atlassian.design/components/ "Atlaskit").

> Atlassian Connect Express - это фреймворк на базе Express, который был предконфигурирован для разработчиков Atlassian Cloud.

> Atlaskit - набор компонентов интерфейса, созданные для React и удовлетворяющие требованиям Atlassian Design Guideline.
> (Использование любых сторонних компонентов для построения интерфейса запрещено).

## Задание

1. Задача заключается в разработке и демонстрации рабочего базового приложения в среде Jira Cloud. Вам необходимо создать клиентское приложение на главной странице Jira Cloud во вкладке Apps (модуль "[generalPages](https://developer.atlassian.com/cloud/confluence/modules/page/ "generalPages").") с названием "Teamlead TodoList", который будет взаимодействовать с Atlassian Connect Express посредствам эндпоинтов. Страница имеет заголовок с названием: "TodoList Tasks".

2. Теперь нам необходимо наполнить жизнью нашу страницу.
   Вывести список задач далее по тексту Todolist, на каждой из которых выводится checkbox, информация задачи и иконка удаления, которые пришли с эндпоинта сервера.
   Для получения Todolist воспользуйтесь rest api jira cloud "Поиск задач используя JQL_request [JQL_request](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-get "JQL_request").". Данный запрос выполняется на сервере, а ответ приходит на клиент в формате JSON. Запрос содержит обязательный параметр project. Для этого создайте форму, в которой будут указаны поля список проектов, максимальное количество элементов возвращаемых на страницу и другие на ваше усмотрение.

3. Пришедшие данные хранятся в сторе.
   В Todolist если checkbox активен задача подкрашивается, и переноситься в конец списка. При нажатии иконки удаления задача удаляется из списка. Сверху должна быть кнопка фильтра, которая по нажатию показывает только задачи отмеченные в checkbox. При отжатии опять показываются все задачи.

> Дизайн приблизительно должен соответствовать atlassian. По стэку ориентируемся на список ниже. Остальные решения на ваше усмотрение.

Стэк:

- Клиентская часть:
  React,
  Redux желательно, но можно выбрать другой стейт-менеджер,
  Atlaskit.

- Серверная часть:
  Atlassian Connect Express

## Заключение

По результату выполнения тестового задания от вас ожидается ссылка на ваше работающее приложение в сети (вы можете бесплатно разместить его при помощи Heroku). А также ссылка на git в публичном репозитории github. Рассмотрение работы приложения происходит на нашем экземпляре Jira Cloud. Ожидается его работа согласно описанным требованиям.

Если у вас возникнут любые вопросы по тестовому заданию, мы всегда рады на них ответить.
# teamlead-todo-jira