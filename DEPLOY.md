# Інструкція для деплою на GitHub Pages

## Налаштування GitHub Pages

1. **Створіть репозиторій** на GitHub (якщо ще не створено)

2. **Налаштуйте GitHub Pages:**
   - Перейдіть в Settings → Pages
   - Source: виберіть "GitHub Actions" (якщо використовуєте workflow) або "Deploy from a branch"
   - Branch: `gh-pages` або `main` (залежно від налаштувань)
   - Folder: `/` (root) або `/website/dist` (якщо проект в підпапці)

3. **Важливо:** Якщо репозиторій називається `Kaviaren_pod_vrbou`, то base path вже налаштований правильно в `vite.config.ts`

## Як деплоїти

### Варіант 1: Через GitHub Actions (рекомендовано)

1. Створіть файл `.github/workflows/deploy.yml` (вже створено)
2. Закомітьте та запуште код:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```
3. GitHub Actions автоматично збудує та задеплоїть проект

### Варіант 2: Ручний деплой

1. Збудуйте проект:
   ```bash
   cd website
   npm run build
   ```

2. Скопіюйте вміст папки `dist/` в корінь репозиторію або в гілку `gh-pages`

3. Закомітьте та запуште:
   ```bash
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## Перевірка

Після деплою сайт буде доступний за адресою:
- `https://yourusername.github.io/Kaviaren_pod_vrbou/`

## Важливі моменти

- ✅ Base path налаштований: `/Kaviaren_pod_vrbou/`
- ✅ React Router використовує правильний basename
- ✅ Всі зображення використовують BASE_URL
- ✅ Фото автоматично копіюються в `public/photos/` перед build

## Якщо змінити назву репозиторію

Якщо ви зміните назву репозиторію, оновіть:
1. `vite.config.ts` - змініть `base: '/Kaviaren_pod_vrbou/'` на нову назву
2. `src/App.tsx` - оновіть fallback в `basename`
3. `index.html` - оновіть шляхи до favicon та preload

