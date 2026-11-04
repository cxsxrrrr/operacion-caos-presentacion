# Operación Caos · presentación

Clase puente DAIA · Discovery · Tramo 1 · Semana 2

**Mensaje central:** la automatización no empieza en el código, empieza entendiendo el caos operativo del cliente.

La diapositiva 05 es un ejemplo aplicado: una consulta comercial desarmada en cinco tareas, cada una clasificada como acelerar, aumentar, automatizar con condiciones o mantener humana.

## Cómo abrirla

Abrí `index.html` con Chrome o Edge. No necesita servidor local.

El caso didáctico complementario está en `caso-atencion-comercial.html`: problema, desglose en cinco tareas y solución final con calculador de ROI.

Las tipografías se cargan desde Google Fonts. Si no hay conexión, el sistema usa las fuentes de respaldo y la presentación sigue funcionando.

## Cómo presentarla

| Acción | Tecla |
|---|---|
| Siguiente | `→`, `↓`, `Av Pág`, `Espacio` |
| Anterior | `←`, `↑`, `Re Pág` |
| Primera diapositiva | `Inicio` |
| Última diapositiva | `Fin` |
| Pantalla completa | `F` |

También se puede navegar con la tira de papel de la izquierda (en móvil, abajo).

La presentación ajusta automáticamente la hoja al alto de la ventana: en pantallas bajas reduce la escala completa en vez de cortar contenido.

## Estructura

```
presentacion-caos-operativo/
  index.html                   ← las 9 diapositivas
  caso-atencion-comercial.html ← caso didáctico: problema → desglose → solución
  assets/
    ransom-collage.css       ← sistema base de letras recortadas
    ransom-global.js         ← generador determinista de recortes
    deck.css                 ← tema frío #a3ccdd + layout de la presentación
    deck.js                  ← navegación, ajuste al alto, collage y espiral
    caso.css                 ← estilos del caso didáctico
    caso.js                  ← navegación, collage y calculador de ROI
```

## Para imprimir o guardar en PDF

`Ctrl + P` → A4 horizontal → activar «Gráficos de fondo» → «Ajustar a la página».

## Paleta

- Azul clave: `#a3ccdd`
- Papel helado: `#e6f1f4`
- Tinta azul-noche: `#0b1f29`
- Azul profundo: `#17465c`
- Verde y rojo desaturados: solo para el semáforo.
