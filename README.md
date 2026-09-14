# 🎭 Mímica - Landing Page

Landing page oficial de mimicas.netlify.app, orientada a vender la app Android de Mímica y mantener la versión web como prueba rápida desde el navegador.

Este directorio contiene exclusivamente la landing pública, cuya función es presentar el juego, explicar su propuesta de valor y redirigir a los usuarios principalmente a Google Play.

## ✨ Descripción

Mímica es un juego social de charadas en grupo enfocado en reuniones, fiestas y noches con amigos.
La landing page actúa como el punto de entrada principal, mostrando de forma clara y atractiva:

- Qué es el juego
- Cómo se juega
- Por qué es ideal para jugar en grupo
- Acceso directo a Google Play
- Acceso secundario a la versión web

La landing está optimizada para SEO, rendimiento y experiencia de usuario, con un diseño moderno y totalmente responsive.

## 🌐 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Juego demo aparte en React + Vite (`../web-game/`)
- Diseño responsive (mobile-first)
- Buenas prácticas de accesibilidad y SEO

## 📱 Enfoque de producto

Aunque este directorio corresponde solo a la landing page, Mímica tiene dos puntos de entrada:

- ✔️ Android app como experiencia principal
- ✔️ Web app como demo rápida y ancla SEO

La app Android incluye la experiencia completa: modo Mímica y ¿Quién soy?, 600 personajes, packs de cine, series, anime y famosos, y juego en español e inglés.

## 📁 Contenido

```
web/
  index.html   # Landing ES
  en.html      # Landing EN
  styles.css   # Tokens del design-system + responsive
  main.js      # Mejora progresiva (la página funciona sin JS)
  assets/      # icon.png, feature-graphic-es.png, *.wav (copias; el origen vive en /assets)
  sitemap.xml  # URLs absolutas a https://mimicas.netlify.app
  robots.txt
```

El juego compilado sale en `web-game/dist/` (`dist/juego/` + landing en raíz),
listo para publicar tal cual. No commitear `dist/` (gitignorado).

## 🚀 Previsualizar en local

```bash
# Landing (desde la raíz del repo)
python3 -m http.server 8931
# → http://localhost:8931/web/index.html

# Sitio completo (landing + juego)
npm run build --prefix web-game
python3 -m http.server 8932 --directory web-game/dist
# → http://localhost:8932/ y http://localhost:8932/juego/
```

> Servir por HTTP (no `file://`): el juego usa módulos ES y audio.

## 📏 Reglas del contenido web

- **Solo contenido gratis** en la web: categorías `base_free`, modo Mímica.
- **Packs de pago**: solo ilustrativos (nombre + badge "Solo en la app"), sin precios
  ni botones de compra. Todo CTA apunta a Google Play:
  `https://play.google.com/store/apps/details?id=com.docsant.charadas`
- **Idiomas**: ES + EN siempre sincronizados (`index.html` ↔ `en.html`,
  `?lang=es|en` en el juego).
- **Placeholders**: reemplazar `PRIVACY_URL` cuando esté la URL real de privacidad.
- **Copy fuente**: `i18n/locales/{es,en}.js` de la app. Si cambia allá, replicar aquí.

## ☁️ Deploy (Netlify)

Funciona con los valores por defecto de Netlify (`npm run build` + `dist`),
sin tocar la UI: el `postbuild` de `web-game` empaqueta el sitio completo
(landing + `/juego/`) en `web-game/dist/`.

`netlify.toml` (raíz) existe como alternativa con `publish = "web-game/dist"`;
si lo usas, deja **Base directory**, **Build command** y **Publish directory**
vacíos en la UI (los valores manuales pisan al archivo).

## 🔄 Sincronizar datos del juego web

`web-game` es autocontenido: copia de `Characters.js`, `CharacterSchema.js`
y locales en `web-game/src/vendor/`. Si cambian personajes o copy en la app:

```bash
npm run sync:vendor --prefix web-game && npm run build --prefix web-game
```

```bash
# Probar el build local antes de pushear
npm run build --prefix web-game
```

## 🎨 Regenerar assets

```bash
cp assets/icon.png web/assets/icon.png            # icono nuevo (ya en 512px)
cp "Feature graphics/feature-graphic-es.png" web/assets/
cp assets/sounds/{correct,skip,tick}.wav web/assets/
```

No commitear `web/juego/` (está en `.gitignore`).
