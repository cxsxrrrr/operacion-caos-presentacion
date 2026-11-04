# Guion para estudiar · Operación Caos

**Duración objetivo:** 25–30 min de exposición + práctica.
**Mensaje central:** la automatización no empieza en el código, empieza entendiendo el caos operativo del cliente.

> Cómo usar este documento: leé la columna **«Decir»** en voz alta dos veces. Después mirá solo los **bullets** y las **frases ancla**. El día de la clase, la diapositiva es el apoyo; vos sos el contenido.

---

## Mapa de la clase en 3 actos

| Acto | Diapositivas | Qué instala |
|---|---|---|
| 1. Diagnóstico | 01 – 03 | El proceso real no está en el manual. Hay que verlo y mapearlo. |
| 2. Decisión | 04 – 06 | No se automatiza el puesto: se decide tarea por tarea, con filtros. |
| 3. Justificación | 07 – 09 | Sin línea de base no hay ROI. Y sin práctica, esto no se aprende. |

**Tiempos (acumulados):**

| # | Diapositiva | Min | Acumulado |
|---|---|---|---|
| 01 | Portada | 1,5 | 1,5 |
| 02 | Vocabulario | 3,5 | 5,0 |
| 03 | Mapeo | 3,0 | 8,0 |
| 04 | Matriz | 4,0 | 12,0 |
| 05 | Ejemplo aplicado | 4,0 | 16,0 |
| 06 | Semáforo | 3,0 | 19,0 |
| 07 | Línea de base | 3,5 | 22,5 |
| 08 | Práctica | 5,0 | 27,5 |
| 09 | Cierre | 1,5 | 29,0 |

Si vas tarde: recortá **03** y **06** a la mitad. Nunca recortes **04**, **05** ni **07**: ahí está el valor de la clase.

---

## Antes de empezar (checklist de 2 minutos)

- Abrir `index.html` en Chrome o Edge y apretar `F` (pantalla completa).
- Probar `→` una vez para confirmar que el collage se genera bien.
- Tener a mano el ejemplo numérico de la slide 07 (12 min × 240 × $18 = **$864/mes**).
- Decidir si la práctica (08) es en parejas o individual, y cuántos minutos reales tenés.
- Si no hay internet: las tipografías caen a las de respaldo, no pasa nada. Avisalo solo si se ve raro.

---

# 01 · Portada
**Tiempo:** 1,5 min · **Objetivo:** instalar la tesis y el contrato de la clase.

### Decir

> «Buenas. Hoy no venimos a hablar de herramientas ni de prompts. Venimos a hablar de lo que pasa **antes** de escribir una sola línea de código.
>
> La idea que quiero que se lleven es esta: **la automatización no empieza en el código. Empieza entendiendo el caos operativo del cliente.**
>
> Miren el tablero de la derecha. Ese es el punto de partida real de casi cualquier proyecto: un audio de WhatsApp de tres minutos, un Excel que se llama `v7_FINAL(2)`, un mail sin asunto que dice "URGENTE", y un cuaderno personal donde vive el proceso de verdad. La pregunta no es "¿qué herramienta uso?". La pregunta es: **¿dónde vive el proceso?**.
>
> Al final de la clase van a poder desarmar un proceso en cinco tareas y decidir, para cada una, si se acelera, se aumenta, se automatiza con condiciones o se queda humana. Ese es el contrato.»

### Bullets para no olvidar
- No es una clase de herramientas. Es una clase de **diagnóstico**.
- El tablero de la portada es evidencia real, no decoración.
- Promesa concreta: mapa + 5 tareas + casillero + línea de base (se entrega en la 08).

### Frase ancla
> «El manual dice cómo debería funcionar. La operación dice cómo funciona.»

### Transición
> «Si el proceso no está en el manual, necesitamos otro vocabulario para nombrarlo.»

---

# 02 · Vocabulario de procesos
**Tiempo:** 3,5 min · **Objetivo:** dar tres lentes para mirar cualquier proceso.

### Decir

> «Tres conceptos y seguimos. **Uno: disparador y entrada.** En la vida real un disparador no es un formulario limpio: es un audio, un mail mal escrito, un papel en el escritorio. La entrada es sucia, y si no la mirás, automatizás la basura más rápido.
>
> **Dos: tarea no es lo mismo que decisión.** El cliente te dice "es una sola tarea: responder consultas". Pero adentro hay decenas de micro-decisiones: ¿es mayorista o minorista? ¿hay stock? ¿aplica descuento? ¿quién paga el envío? La herramienta es preguntar **"¿qué pasa si…?"**. Cada respuesta es una regla que después vas a necesitar.
>
> **Tres: excepción y responsable.** La excepción es el enemigo de la automatización rentable. Si la persona responsable pasa el 80% de su tiempo apagando incendios o resolviendo casos raros, no tenés un proceso: tenés una emergencia con suerte. Y una emergencia no se automatiza, se arregla primero.
>
> Regla de campo: si el responsable vive apagando incendios, todavía no hay un proceso.»

### Bullets para no olvidar
- Entrada sucia → el ejemplo del audio de 3:07 y el mail sin asunto.
- Tarea ≠ decisión → la pregunta **«¿qué pasa si…?»** es la herramienta de Discovery.
- Excepción + responsable → el **80%** es la señal de alarma.
- No confundir "el cliente lo llama tarea" con "es una tarea simple".

### Frase ancla
> «Si el responsable vive apagando incendios, todavía no hay proceso: hay una emergencia con suerte.»

### Transición
> «Con este vocabulario, salimos a dibujar lo que realmente pasa.»

---

# 03 · Mapeo de supervivencia
**Tiempo:** 3 min · **Objetivo:** que pierdan el miedo a mapear y entiendan el Frankenstein digital.

### Decir

> «Para mapear no necesitan BPMN ni una ceremonia de dos semanas. Tres cajas: **quién hace qué, en qué sistema**. Se puede dibujar en una servilleta y cualquiera lo entiende. Ejemplo: comercial → registra pedido → ERP.
>
> ¿Por qué insisto con lo simple? Porque el síntoma más común es el **Frankenstein digital**: la información está partida entre un Excel, un CRM desactualizado y un grupo de WhatsApp. Cada herramienta tiene un pedazo de la verdad, y nadie tiene la verdad completa.
>
> Y acá va la regla de oro de toda la clase: **no se puede automatizar el caos**. Si automatizás un flujo disperso, lo único que lográs es que el desorden vaya más rápido. Primero se unifica y se mapea el flujo real de los datos; después se automatiza.
>
> Una advertencia: el mapa no es para decorar la pared. Es para encontrar dónde se rompe, quién copia y pega, y en qué punto se pierde el dato.»

### Bullets para no olvidar
- 3 cajas: **quién → qué → sistema**.
- Frankenstein digital: Excel + CRM desactualizado + WhatsApp.
- Regla de oro: **no se puede automatizar el caos**.
- El mapa sirve para encontrar la fricción, no para verse lindo.

### Frase ancla
> «No se puede automatizar el caos: primero se unifica, después se automatiza.»

### Transición
> «Ya tenemos el mapa. Ahora hay que decidir dónde metemos la IA… y dónde no.»

---

# 04 · La matriz de decisión
**Tiempo:** 4 min · **Objetivo:** instalar los cuatro casilleros y la unidad de análisis.

### Decir

> «Toda la decisión se ordena con una sola pregunta: **¿quién controla la tarea?**. De ahí salen cuatro casilleros.
>
> **Acelerar:** el humano mantiene el control y la IA le quita fricción. Por ejemplo, redacta el borrador de un mail repetitivo y el humano revisa y envía. La IA prepara, el humano decide.
>
> **Aumentar:** la IA trabaja como copiloto, en paralelo. Mientras el humano atiende la llamada, un agente busca el historial del cliente. Dos inteligencias, una conversación.
>
> **Automatizar con condiciones:** la IA asume el control bajo reglas estrictas. Clasifica y deriva tickets: si la confianza supera el 90%, se rutea solo; si no, pasa al humano. Regla más umbral, y siempre una válvula de escape.
>
> **Mantener humano:** decisiones con impacto financiero, cierres complejos, empatía o aprobación final. Quejas graves, negociaciones de plata y presupuestos finales no se delegan a un agente.
>
> Y el detalle más importante: **la unidad de análisis es la tarea, no el puesto**. No automatizamos "al comercial". Automatizamos "redactar el presupuesto". La misma persona puede tocar las cuatro columnas el mismo día.»

### Bullets para no olvidar
- Pregunta madre: **¿quién controla?**
- Acelerar = humano al mando · Aumentar = IA en paralelo · Automatizar con condiciones = regla + umbral · Humano = no negociable.
- Unidad de análisis: **tarea, no puesto**.
- Error típico: elegir casillero por moda ("todo agente") o por miedo ("todo humano").

### Frase ancla
> «No automatizamos al comercial: automatizamos *redactar el presupuesto*.»

### Transición
> «Veamos cómo se ve esto en un proceso real, de punta a punta.»

---

# 05 · Desarmar el proceso (ejemplo aplicado)
**Tiempo:** 4 min · **Objetivo:** mostrar la matriz funcionando sobre un caso concreto.

### Decir

> «Este es el ejemplo que van a replicar en la práctica. Entra un mensaje por Instagram o WhatsApp y sale una venta registrada. En el medio, cinco tareas.
>
> **Uno, clasificar la entrada:** automatizar con condiciones. La IA detecta si es consulta, reclamo o pedido; si la confianza supera el 90%, rutea sola al CRM. Si no, va a una persona.
>
> **Dos, buscar contexto:** aumentar. Un agente trae historial, compras y conversaciones previas a la pantalla del humano, en paralelo. No decide nada, solo le ahorra cinco minutos de búsqueda.
>
> **Tres, redactar la respuesta:** acelerar. La IA arma un borrador con el tono y los datos del cliente; el humano revisa y envía.
>
> **Cuatro, negociar el cierre:** mantener humano. Precio, excepciones y empatía. Acá hay dinero y criterio.
>
> **Cinco, registrar la venta:** automatizar con condiciones. Los datos se validan y pasan al ERP por API; si el dato falla, vuelve a un humano.
>
> Miren lo que tienen en común las cinco: **la misma persona sigue siendo el dueño del proceso**. Lo que cambió es el reparto del trabajo. Eso es automatizar bien: no reemplazar el puesto, redistribuir las tareas.»

### Bullets para no olvidar
- Rail: **entra un mensaje → 5 tareas → sale una venta registrada**.
- 01 Clasificar (auto condicional) · 02 Contexto (aumentar) · 03 Redactar (acelerar) · 04 Negociar (humano) · 05 Registrar (auto condicional).
- Las tareas 01 y 05 tienen **válvula de escape**: si el dato o la confianza fallan, vuelve al humano.
- El proceso es el mismo; cambia quién hace cada parte.

### Frase ancla
> «No reemplazamos el puesto: redistribuimos las tareas.»

### Transición
> «¿Cómo saber si un proceso califica para esto? Dos listas y una prueba.»

---

# 06 · Semáforo de automatización
**Tiempo:** 3 min · **Objetivo:** dar un filtro rápido y defendible.

### Decir

> «Antes de escribir una línea de código, dos listas.
>
> **Banderas verdes:** alta frecuencia y volumen, los datos ya están en formato digital, y las reglas son claras. Claras significa explicables a un niño en cinco minutos.
>
> **Banderas rojas:** excepciones constantes, decisiones que involucran negociaciones de dinero, y datos clave que solo viven en la cabeza de un empleado histórico. Ese último es el más peligroso, porque cuando esa persona se va, el proceso se va con ella.
>
> Ojo con una cosa: **rojo no significa "nunca"**. Significa "todavía no". Primero se arregla el proceso, se documenta la excepción, se baja el conocimiento a un sistema. Después se automatiza.
>
> Y la prueba final, la de los cinco minutos: si no podés explicar la regla a un niño en cinco minutos, no podés automatizarla.»

### Bullets para no olvidar
- Verdes: frecuencia/volumen · datos digitales · reglas explicables.
- Rojas: excepciones constantes · dinero y negociación · conocimiento en la cabeza de alguien.
- **Rojo = todavía no**, no = nunca.
- Prueba de 5 min como filtro de cierre.

### Frase ancla
> «Si no podés explicar la regla a un niño en cinco minutos, no podés automatizarla.»

### Transición
> «Si el proceso pasa el filtro, hay que justificarlo en plata. Para eso está la línea de base.»

---

# 07 · Línea de base
**Tiempo:** 3,5 min · **Objetivo:** que sepan calcular el "antes" y defender el ROI.

### Decir

> «Este es el argumento que convence a un dueño de negocio, y es una multiplicación de tres términos: **tiempo por tarea, por frecuencia mensual, por costo hora de la persona**. Eso da el **costo invisible**: lo que la empresa ya está pagando por hacer las cosas como las hace hoy.
>
> Ejemplo concreto: 12 minutos por tarea, 240 veces por mes, 18 dólares la hora. Doce minutos son 0,2 horas; por 240, son 48 horas al mes; por 18, son **864 dólares por mes**. Es más de una semana de trabajo de una persona, todos los meses, en una tarea que nadie está mirando.
>
> Dos reglas para usarla bien. Primera: **los números salen del cliente, no del PowerPoint**. Se piden en la entrevista, con la planilla abierta. Segunda: la línea de base es el **"antes"**. Sin antes no hay ROI, solo promesas.
>
> Si el cliente no tiene el número exacto, no lo inventes: pedí una estimación y anotá que es estimación. Un rango honesto vale más que una precisión falsa.»

### Bullets para no olvidar
- Fórmula: **tiempo × frecuencia × costo hora = costo invisible**.
- Ejemplo: 12 min × 240/mes × $18/h = **$864/mes** (48 h/mes).
- Números del cliente, no del PPT.
- Sin "antes" no hay ROI.

### Frase ancla
> «La línea de base es el único argumento válido para demostrar el ROI.»

### Transición
> «Con esto ya tienen todo para hacerlo ustedes. Vamos a la práctica.»

---

# 08 · Práctica en vivo
**Tiempo:** 5 min de consigna + el tiempo que tengas · **Objetivo:** que produzcan el entregable.

### Decir

> «Se divide en dos carriles y después se cruzan.
>
> **Carril negocios:** role-play. Reconstruyan la realidad, no el manual. La pregunta que abre todo es: *"¿dónde anotás las cosas en tu cuaderno personal porque el sistema de la empresa es muy lento?"*. Esa pregunta incomoda y por eso funciona.
>
> **Carril técnico:** sigan el dato. Marquen las fronteras: qué entra, qué sale y quién lo cruza. Instagram → ¿quién copia? → ERP. Identifiquen exactamente a la persona que copia y pega, y por dónde debería viajar una API o un webhook.
>
> El entregable tiene cuatro partes: **mapa de punta a punta, cinco tareas priorizadas, el casillero de la matriz para cada una, y la línea de base estimada**. No hace falta que sea perfecto; hace falta que sea honesto y que los números se puedan defender.
>
> Tienen [X] minutos. Al volver, tres grupos cuentan la tarea que más les costó clasificar.»

### Bullets para no olvidar
- Carril negocios: role-play + pregunta del cuaderno personal.
- Carril técnico: seguir el dato y encontrar al que copia y pega.
- Entregable: **mapa + 5 tareas + casillero + línea de base**.
- Consigna de cierre: "la tarea que más les costó clasificar".

### Frase ancla
> «Busquen el momento en que alguien dice: "esto lo hago yo porque el sistema no me deja".»

### Transición
> «Cierro con la única idea que quiero que se lleven.»

---

# 09 · Cierre
**Tiempo:** 1,5 min · **Objetivo:** dejar tres ideas y abrir preguntas.

### Decir

> «El caos primero. El código después.
>
> Tres cosas para llevarse. **Una:** el proceso antes que la herramienta; la herramienta sin diagnóstico es solo una forma más cara de hacer lo mismo. **Dos:** la tarea antes que el puesto; automatizar no es reemplazar personas, es redistribuir trabajo. **Tres:** los números del cliente antes que las promesas; sin línea de base no hay ROI, y sin ROI esto es una opinión.
>
> La automatización que funciona empieza en el campo, no en el editor. Gracias. ¿Preguntas?»

### Bullets para no olvidar
- Repetir el eslogan: **el caos primero, el código después**.
- 3 ideas: proceso > herramienta · tarea > puesto · números del cliente > promesas.
- Cerrar con la puerta abierta a preguntas, no con un resumen largo.

### Frase ancla
> «La automatización que funciona empieza en el campo, no en el editor.»

---

# Preguntas que te pueden hacer (y respuestas cortas)

| Pregunta | Respuesta |
|---|---|
| «¿No es más rápido automatizar todo de una?» | No: automatizar un proceso roto acelera el error. Primero se unifica y se mapea; después se automatiza por tareas. |
| «¿Y si el cliente no tiene números?» | Se pide una estimación en la entrevista y se anota como estimación. Un rango honesto es mejor que una precisión inventada. |
| «¿La IA no se va a equivocar?» | Sí. Por eso existen los umbrales y las válvulas de escape: si la confianza baja del 90%, vuelve al humano. |
| «¿Esto aplica solo a empresas grandes?» | Aplica más a las PyMEs: tienen menos proceso formal y más caos concentrado en pocas personas. |
| «¿Qué herramienta uso?» | Es la última pregunta, no la primera. La herramienta sale del mapa, no al revés. |
| «¿Cuánto tarda un Discovery así?» | Depende del alcance, pero el entregable de esta clase (mapa + 5 tareas + línea de base) se puede armar en una o dos sesiones de campo. |

---

# Si te quedás sin tiempo: versión de 10 minutos

1. **01** Portada: solo la tesis y la pregunta «¿dónde vive el proceso?» (30 s).
2. **02** Vocabulario: entrada sucia + tarea ≠ decisión + el 80% (2 min).
3. **04** Matriz: los cuatro casilleros, con la pregunta «¿quién controla?» (3 min).
4. **05** Ejemplo: recorrer las cinco tareas de un tirón (2,5 min).
5. **07** Línea de base: fórmula y el ejemplo de $864 (1,5 min).
6. **09** Cierre: las tres ideas (30 s).

Salteá **03** y **06** sin culpa: son refuerzos, no columnas.

---

# Cómo ensayar (3 pasadas)

1. **Pasada de estructura (15 min):** leé solo los títulos, los bullets y las frases ancla. Contá la historia sin mirar el guion. Si te trabás, no es memoria: es que falta un puente entre dos slides.
2. **Pasada de tiempos (20 min):** cronometrá con el celular. Si una slide se pasa 30 s, recortá un ejemplo, no una idea.
3. **Pasada de campo (10 min):** decilo de pie, sin leer, con el `index.html` en pantalla completa y pasando con `→`. Grabate 2 minutos y escuchate: si decís «ehhh» o «bueno» tres veces, reemplazalo por una pausa.

**Regla de oro de la exposición:** nunca leas la diapositiva. La diapositiva muestra; vos explicás lo que no está escrito.
