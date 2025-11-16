# Інструкції з виправлення помилок 404 на GitHub Pages

## Проблема
Після деплою на GitHub Pages виникали помилки 404 для:
- `/photos/logo.png`
- `/src/main.tsx`
- `/vite.svg`

## Виправлення

### 1. Створено GitHub Actions workflow
Файл `.github/workflows/deploy.yml` автоматично:
- Збирає проект з правильним base path
- Деплоїть `dist/` папку на GitHub Pages

### 2. Очищено index.html
Видалено посилання на старі зібрані файли з `index.html`. Тепер Vite автоматично додає правильні посилання під час збірки.

### 3. Налаштування base path
- `vite.config.ts`: `base: '/Kaviaren_pod_vrbou/'`
- `App.tsx`: `basename={import.meta.env.BASE_URL || '/Kaviaren_pod_vrbou/'}`
- Всі зображення використовують `import.meta.env.BASE_URL`

## Як задеплоїти

### Варіант 1: Автоматичний деплой через GitHub Actions (рекомендовано)

1. Закомітьте всі зміни:
```bash
git add .
git commit -m "Fix 404 errors for GitHub Pages"
git push origin main
```

2. GitHub Actions автоматично:
   - Збере проект
   - Задеплоїть на GitHub Pages

3. Перевірте статус деплою:
   - Перейдіть на вкладку "Actions" у вашому репозиторії
   - Дочекайтеся завершення workflow "Deploy to GitHub Pages"

### Варіант 2: Ручний деплой

1. Зберіть проект:
```bash
cd website
npm run build
```

2. Налаштуйте GitHub Pages:
   - Перейдіть до Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (створіть цю гілку, якщо її немає)
   - Folder: `/ (root)`

3. Скопіюйте вміст `dist/` в корінь гілки `gh-pages`:
```bash
git checkout -b gh-pages
git rm -rf .
cp -r website/dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## Перевірка

Після деплою перевірте:
1. Відкрийте `https://artemida1609.github.io/Kaviaren_pod_vrbou/`
2. Відкрийте Developer Tools (F12) → Console
3. Переконайтеся, що немає помилок 404

## Важливо

- **НЕ** змінюйте налаштування GitHub Pages на "Deploy from a branch" з гілки `main` - використовуйте GitHub Actions
- Переконайтеся, що в Settings → Pages → Source вибрано "GitHub Actions"
- Після кожного push до `main` GitHub Actions автоматично задеплоїть нову версію

