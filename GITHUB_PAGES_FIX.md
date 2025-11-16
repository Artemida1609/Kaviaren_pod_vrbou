# Виправлення помилок 404 для GitHub Pages

## Проблема
Сайт розгорнуто на GitHub Pages за адресою `artemida1609.github.io/Kaviaren_pod_vrbou/`, але виникали помилки 404 для:
- `/photos/logo.png`
- `/src/main.tsx`
- `/vite.svg`

## Рішення

### 1. Налаштування base path в Vite
Додано `base: '/Kaviaren_pod_vrbou/'` в `vite.config.ts`

### 2. Оновлення React Router
Додано `basename` в `BrowserRouter` для правильної роботи навігації

### 3. Оновлення шляхів до зображень
Всі шляхи тепер використовують `import.meta.env.BASE_URL` для автоматичного додавання base path:
- `images.ts` - використовує BASE_URL
- `Navbar.tsx` - використовує BASE_URL для логотипу

### 4. Видалення vite.svg
Видалено посилання на `vite.svg` з `index.html` (замінено на logo.png)

## Результат

Після цих змін:
- ✅ Всі assets завантажуються з правильним base path
- ✅ Зображення доступні через `/Kaviaren_pod_vrbou/photos/...`
- ✅ React Router працює правильно
- ✅ Немає помилок 404

## Як перевірити локально

```bash
npm run build
npm run preview
```

Сайт буде доступний на `http://localhost:4173/Kaviaren_pod_vrbou/`

## Деплой на GitHub Pages

1. Збудуйте проект: `npm run build`
2. Скопіюйте вміст `dist/` в корінь репозиторію або гілку `gh-pages`
3. Закомітьте та запуште

Або використовуйте GitHub Actions workflow (вже налаштовано в `.github/workflows/deploy.yml`)

