# Movies Explorer — fullstack приложение

> SPA с авторизацией, поиском и фильтрацией фильмов. React 18, React Router 6, собственный REST API на Node.js + Express + MongoDB, JWT-авторизация.

**Репозиторий фронтенда:** [movies-explorer-frontend](https://github.com/Yaroslav-Chertov/movies-explorer-frontend)

---

## О проекте

Movies Explorer — fullstack SPA для поиска и сохранения фильмов. Пользователь регистрируется, ищет фильмы через внешнее API, сохраняет избранное. Проект покрывает полный цикл: от UI до собственного бэкенда с авторизацией и базой данных.

Основная инженерная задача: реализовать безопасную JWT-авторизацию на фронте и бэке, защищённые роуты, взаимодействие с двумя API (внешнее и собственное).

---

## Стек

**Фронтенд:**

| Слой | Технология |
|---|---|
| UI | React 18 |
| Роутинг | React Router 6 |
| Валидация форм | Validator.js |
| Сборка | Create React App |

**Бэкенд (отдельный репозиторий):**

| Слой | Технология |
|---|---|
| Сервер | Node.js, Express |
| База данных | MongoDB (Mongoose) |
| Авторизация | JWT |
| Валидация | Celebrate / Joi |

---

## Архитектура фронтенда

```
src/
├── components/         # UI-компоненты (карточки, навбар, формы)
├── pages/              # Страницы (Main, Movies, SavedMovies, Profile, Auth)
├── contexts/           # React Context (CurrentUserContext)
├── hooks/              # Кастомные хуки (useFormValidation)
├── utils/
│   ├── MainApi.js      # Класс для работы с собственным API
│   ├── MoviesApi.js    # Класс для работы с внешним API фильмов
│   └── constants.js    # Константы приложения
└── App.js              # Роутинг, авторизация, глобальное состояние
```

**Ключевые решения:**

- **JWT в localStorage** — токен сохраняется на клиенте, передаётся в заголовке `Authorization: Bearer` при каждом запросе к собственному API.
- **Защищённые роуты** — компонент `ProtectedRoute` проверяет авторизацию перед рендером страницы. Неавторизованный пользователь редиректится на `/signin`.
- **Два API-класса** — `MainApi` для работы с собственным бэкендом, `MoviesApi` для внешнего API фильмов. Чистое разделение, удобное для замены источника данных.
- **React Context** — данные текущего пользователя доступны в любом компоненте без пробрасывания пропсов.
- **Фильтрация на клиенте** — фильмы загружаются один раз, фильтрация по ключевому слову и формату (короткометражки) происходит локально без повторных запросов.

---

## Авторизация

```
Регистрация / Вход
    ↓
POST /signup или /signin → сервер возвращает JWT
    ↓
Токен сохраняется в localStorage
    ↓
При каждом запросе → заголовок Authorization: Bearer <token>
    ↓
Сервер верифицирует токен → возвращает данные
```

При первой загрузке приложение проверяет токен в localStorage и автоматически авторизует пользователя если токен валиден.

---

## REST API (бэкенд)

| Метод | Эндпоинт | Описание |
|---|---|---|
| POST | `/signup` | Регистрация пользователя |
| POST | `/signin` | Вход, получение JWT |
| GET | `/users/me` | Данные текущего пользователя |
| PATCH | `/users/me` | Обновление профиля |
| GET | `/movies` | Сохранённые фильмы пользователя |
| POST | `/movies` | Сохранить фильм |
| DELETE | `/movies/:id` | Удалить из сохранённых |

---

## Локальный запуск

```bash
# Установка зависимостей
npm install

# Настройка окружения
cp .env.example .env
# Заполнить: REACT_APP_API_URL

# Dev-сервер
npm start

# Продакшн-сборка
npm run build
```

---

## Переменные окружения

| Переменная | Описание |
|---|---|
| `REACT_APP_API_URL` | URL собственного бэкенда |

---

## Что в планах

- Миграция с Create React App на Vite
- Замена localStorage на httpOnly cookies для хранения токена
- Добавление TypeScript
- Покрытие ключевых компонентов тестами (Jest + Testing Library)

---

## Другие проекты

- [Structura — SaaS-планер продуктивности](https://github.com/Yaroslav-Chertov/structura) — Next.js 16, React 19, TypeScript, ЮКасса, Resend
- [GALITSKIY & GALITSKIY](https://github.com/Yaroslav-Chertov/galitskiy-and-galitskiy) — JSX, кастомный scroll-controller, Lighthouse 90+
- [ONY Career Page](https://github.com/Yaroslav-Chertov/ony-agency) — JSX, SSR + интеграция Bitrix API, Telegram-уведомления
- [Стажер Онлайн — HR-платформа](https://github.com/Yaroslav-Chertov/hr-platform) — Vue 3, TypeScript, Pinia, REST API (Django)
