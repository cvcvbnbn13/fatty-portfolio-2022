# Fatty-Portfolio

A Funny Repo using **TypeScript & React(Next.js)** , css framework **Tailwindcss**, Database **Sanity** , deploy by **Vercel**.

網站連結：[Fatty-Portfolio](https://fatty-portfolio-2022.vercel.app/)

### 目錄

- [專案簡介](#專案簡介)
- [目錄結構說明](#目錄結構說明)
- [第三方套件使用](#第三方套件使用)

## 專案簡介

```
2022年版的Portfolio
```

---

## 目錄結構說明

1. components

   - About

   - BackgroundCircles

   - Career

     - ExperienceCard

   - ContactMe

   - Header

   - Hero

   - Projects

   - Skills

     - Skill

   - index.js

2. fatty-portfolio **_sanity 後端_**

   - schemas

     - career.js

     - pageInfo.js

     - project.js

     - skill.js

     - social.js

     - scheam.js

3. pages

   - api

     - getCareer.ts

     - getPageInfo.ts

     - getProjects.ts

     - getSkills.ts

     - getSocials.ts

   - \_app.tsx

   - index.tsx

4. public

5. styles

6. utils

   - fetchCareer.ts

   - fetchPageInfo.ts

   - fetchProjects.ts

   - fetchSkills.ts

   - fetchSocials.ts

7. types.d.ts

8. .env.local

9. package.json

10. tailwind.config.js

11. tsconfig.json

12. next.config.js

---

## 第三方套件使用

- heroicons
- react-social-icons
- framer-motion
- react-simple-typewrite
- tailwind-scrollbar

---

## 🚀 如何執行

### 可以使用方向鍵控制左右

### Dev Server Guide

1. Clone the project from [Fatty-Portfolio](https://fatty-portfolio-2022.vercel.app/).
2. Move the root path in project folder.
3. Run `npm i` or `npm install` to install node_modules.
4. The default server is on `localhost:3000`, please check you don't have any server on it.
5. Run `npm run dev` to start dev server.

Steps

```git bash
git clone https://github.com/cvcvbnbn13/fatty-portfolio-2022
cd fatty-portfolio-2022
npm install && npm audit fix
npm run dev
```
