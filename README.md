# Hortagats

Web de l'associació Hortagats, protectora de gats del barri d'Horta (Barcelona). Una sola pàgina: qui som, els gats que busquen casa i com contactar-nos.

## Com obrir-la en local

No cal instal·lar res. Clona el repositori i obre `index.html` amb el navegador.

Si prefereixes un servidor local, des de la carpeta del projecte pots fer servir el que tinguis a mà, per exemple:

    python -m http.server 8000

i entrar a http://localhost:8000.

## Estructura

- `index.html`: tota la pàgina.
- `css/styles.css`: estils. El disseny de referència el té el Ramon.
- `js/main.js`: menú mòbil i validació del formulari.
- `img/`: fotos.

## Com es publica

Cada canvi a `main` es publica sol a Cloudflare Pages. Les pull requests generen una URL de prova pròpia que apareix als comentaris de la PR.

Per tocar `main` cal fer una pull request, que passi la validació d'HTML i que algú la revisi.

## Fotos

De moment són fotos d'Unsplash mentre la junta ens passa les dels gats de veritat. Autors: Paul Bryan (hero), Dimitar Meddling, Christopher Ruel, Ben Griffiths, Geoff Oliver, Olga Kononenko i Joshua Cabrera.

## Dubtes

Per qualsevol cosa del codi, pregunta al Ramon. Pels textos i les fotos, a la junta de l'associació.
