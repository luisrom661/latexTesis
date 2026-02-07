# Propuesta de mejora: Cálculo del Health Score

## Contexto actual

El Health Score se calcula actualmente como una **media aritmética simple** de cinco dimensiones (Apertura, Compromiso, Respeto, Foco, Coraje), cada una en escala 1–10:

$$
\text{Health Score} = \frac{\text{Apertura} + \text{Compromiso} + \text{Respeto} + \text{Foco} + \text{Coraje}}{5}
$$

A continuación se presentan seis áreas de mejora concretas para fortalecer esta propuesta.

---

## 1. La media aritmética simple oculta dimensiones críticas

La fórmula actual trata las cinco dimensiones como igualmente importantes y permite que un puntaje alto en una compense uno bajo en otra. Un equipo con **Coraje = 2** y **Foco = 10** obtendría un Health Score de 6.4, quedando en zona "En riesgo" pero sin reflejar que hay una dimensión en estado **crítico**.

### Mejoras posibles

#### Opción A: Regla de piso dimensional

Ya se menciona parcialmente en alertas tempranas ("dimensión < 4.0"), pero debería formalizarse dentro de la ecuación. Por ejemplo, definir que el Health Score no puede ser mayor que $\min(D_i) + k$, donde $k$ es un tope (e.g., 3 puntos):

$$
HS = \min\left(\frac{1}{5}\sum_{i=1}^{5} D_i,\;\; \min(D_i) + 3\right)
$$

Esto impide que un equipo con una dimensión colapsada aparezca como "saludable".

#### Opción B: Media geométrica en lugar de aritmética

$$
\text{Health Score} = \left(\prod_{i=1}^{5} D_i\right)^{1/5}
$$

La media geométrica penaliza naturalmente los valores bajos: si una sola dimensión es 1, el score total colapsa. Esto es más coherente con la idea de que la salud social **no tolera puntos ciegos**.

#### Comparación práctica

| Escenario | Aritmética | Geométrica | Con piso (k=3) |
|-----------|-----------|-----------|----------------|
| Todas en 7 | 7.0 | 7.0 | 7.0 |
| Una en 2, resto en 9 | 7.6 | 5.9 | 5.0 |
| Una en 1, resto en 10 | 8.2 | 6.3 | 4.0 |
| Todas en 5 | 5.0 | 5.0 | 5.0 |

La media aritmética da 8.2 cuando una dimensión está en 1, lo cual es engañosamente optimista.

---

## 2. Falta justificación de la equiponderación

¿Por qué cada dimensión pesa exactamente lo mismo? En el propio marco de SocialScrum, el **Coraje** y la **Apertura** son prerrequisitos para que las otras dimensiones funcionen (sin seguridad psicológica no hay comunicación abierta ni compromiso genuino).

### Opciones

- **Justificar explícitamente** por qué se eligen pesos iguales (simplicidad, parsimonia, evitar arbitrariedad) citando precedentes como el *Spotify Squad Health Check* que también usa equiponderación.
- **O proponer pesos adaptativos** según el contexto del equipo. Por ejemplo, si un smell de tipo *fear-of-speaking-up* está activo, la dimensión Coraje podría pesar más temporalmente.

### Texto sugerido para el capítulo

> *Se adopta equiponderación por tres razones: (1) parsimonia —un indicador simple es más fácil de comunicar y adoptar—; (2) precedente empírico —el Spotify Squad Health Check Model utiliza dimensiones equiponderadas con resultados documentados—; y (3) evitar arbitrariedad —asignar pesos diferenciales requeriría evidencia empírica que aún no existe para el contexto de deuda social—. No obstante, equipos maduros pueden explorar ponderación diferencial basándose en su historial de Health Score.*

---

## 3. Falta operacionalización del "1 a 10"

Se dice que cada dimensión se mide en escala 1–10, pero **no se definen anclas** para los puntos de la escala. ¿Qué significa exactamente un 4 vs. un 5 en Apertura? Sin anclas, cada persona interpreta la escala diferente, introduciendo ruido significativo.

### Propuesta: Descriptores de anclaje por dimensión

#### Apertura

| Puntaje | Descriptor |
|---------|-----------|
| 1–2 | Nadie reporta riesgos; información se guarda activamente; los errores se ocultan |
| 3–4 | Solo se reportan riesgos cuando ya son inevitables; desacuerdo se evita |
| 5–6 | Se reportan riesgos pero con demora; hay conversaciones parciales sobre problemas |
| 7–8 | Riesgos se discuten proactivamente; hay desacuerdo constructivo frecuente |
| 9–10 | Cultura de transparencia total; errores se celebran como aprendizaje |

#### Compromiso

| Puntaje | Descriptor |
|---------|-----------|
| 1–2 | Cada persona trabaja solo en "lo suyo"; no hay sentido de Sprint Goal colectivo |
| 3–4 | Se cumplen tareas individuales pero no hay ayuda cruzada |
| 5–6 | Hay ayuda ocasional; el Sprint Goal se conoce pero no se vive |
| 7–8 | Ayuda proactiva a compañeros bloqueados; acuerdos se cumplen consistentemente |
| 9–10 | El equipo se autoorganiza para completar el Sprint Goal; sacrificio colectivo voluntario |

#### Respeto

| Puntaje | Descriptor |
|---------|-----------|
| 1–2 | Ataques personales frecuentes; ideas se descartan por quién las propone |
| 3–4 | Tensiones visibles; sarcasmo o microagresiones ocasionales |
| 5–6 | Trato correcto pero frío; reconocimiento ausente |
| 7–8 | Ideas evaluadas por mérito; reconocimiento explícito; desacuerdos sin ataques |
| 9–10 | Valoración genuina de perspectivas diversas; cultura de aprecio activo |

#### Foco

| Puntaje | Descriptor |
|---------|-----------|
| 1–2 | Multitasking constante; reuniones sin propósito; interrupciones continuas |
| 3–4 | Frecuentes cambios de contexto; reuniones excesivas |
| 5–6 | Se intenta mantener foco pero hay interrupciones externas regulares |
| 7–8 | Una tarea a la vez; reuniones con propósito claro; protección contra demandas externas |
| 9–10 | Deep work protegido; cero reuniones innecesarias; equipo defiende su foco activamente |

#### Coraje

| Puntaje | Descriptor |
|---------|-----------|
| 1–2 | Nadie cuestiona decisiones; feedback ascendente inexistente; cultura de silencio |
| 3–4 | Solo las personas con más antigüedad expresan desacuerdo |
| 5–6 | Hay feedback pero solo en canales privados; no se confrontan problemas en grupo |
| 7–8 | Ideas no convencionales se proponen abiertamente; errores se reportan voluntariamente |
| 9–10 | Feedback a líderes es normal; se desafían decisiones con datos; vulnerabilidad celebrada |

> **Recomendación**: Incluir estos descriptores como tabla en un Anexo y referenciarlos desde la sección del Health Score.

---

## 4. Considerar la varianza entre respondientes

Si 3 personas responden 9 y 3 responden 3, la media es 6 pero la realidad es muy diferente a un equipo donde todos responden 6. La **desviación estándar intra-dimensión** es un dato valioso que la fórmula actual descarta.

### Propuesta: Índice de Consenso

Reportar junto al Health Score un **índice de consenso** o la desviación estándar por dimensión:

$$
\sigma_i = \sqrt{\frac{1}{n}\sum_{j=1}^{n}(r_{ij} - \bar{D}_i)^2}
$$

Donde $r_{ij}$ es la respuesta del miembro $j$ en la dimensión $i$, y $\bar{D}_i$ es la media de esa dimensión.

### Interpretación

| $\sigma$ | Interpretación |
|----------|---------------|
| 0–1.0 | Alto consenso: el equipo percibe la dimensión de forma homogénea |
| 1.1–2.0 | Consenso moderado: diferencias normales de percepción |
| 2.1–3.0 | Bajo consenso: posible *clique* o subgrupo con experiencia muy diferente |
| > 3.0 | Sin consenso: investigar fragmentación del equipo |

### Valor agregado

Una alta dispersión en una dimensión con media "aceptable" (e.g., Respeto = 6.0, $\sigma$ = 2.8) es una **alerta invisible** que la media por sí sola no captura, sugiriendo que algunos miembros experimentan falta de respeto mientras otros no.

---

## 5. Formalizar la notación matemática

El texto actual presenta la fórmula de forma informal. Para una tesis, conviene formalizar.

### Texto sugerido

> Sea $D_i$ la puntuación de la dimensión $i$, con $i \in \{1, 2, 3, 4, 5\}$ correspondiente a Apertura, Compromiso, Respeto, Foco y Coraje, respectivamente. Cada $D_i \in [1, 10]$ se obtiene como la mediana de las respuestas individuales del equipo. El Health Score se define como:
>
> $$HS = \frac{1}{5}\sum_{i=1}^{5} D_i, \quad D_i \in [1,10], \quad HS \in [1,10]$$
>
> **Propiedades del indicador:**
> - **Rango definido**: $HS \in [1, 10]$, lo que permite interpretación intuitiva.
> - **Interpretabilidad directa**: cada punto representa un incremento uniforme en salud percibida.
> - **Sensibilidad**: un cambio de 1 punto en cualquier dimensión produce un cambio de 0.2 en el Health Score.
> - **Limitación**: la media aritmética permite compensación entre dimensiones (ver Sección X.X.X para mitigación).

### Nota adicional: ¿Media o mediana?

Considerar usar **mediana** en lugar de **media** para calcular $D_i$ a partir de respuestas individuales. La mediana es más robusta ante valores atípicos (e.g., un respondiente que siempre califica 1 por descontento personal no arrastra toda la dimensión).

---

## 6. Reconciliar con la filosofía "conversación, no fórmula"

### El problema de coherencia interna

En la sección del Framework de priorización (§4.7) se escribe explícitamente que **no se usan fórmulas** porque "la precisión sería falsa" y "los pesos serían arbitrarios". Sin embargo, el Health Score **sí es una fórmula con pesos iguales**. Esto genera una contradicción aparente.

### Resolución sugerida

Explicar que el Health Score es un **indicador de monitoreo** (descriptivo), no un **mecanismo de decisión** (prescriptivo):

> *El Health Score opera como un termómetro: indica temperatura, no prescribe tratamiento. A diferencia del framework de priorización —donde una fórmula sería inadecuada porque pretendería automatizar una decisión que requiere juicio contextual—, el Health Score cumple una función descriptiva: señala tendencias, activa alertas y proporciona un lenguaje común para discutir la salud del equipo. Su valor no reside en la precisión del número, sino en su capacidad para hacer visible lo que de otro modo permanecería invisible.*

---

## Resumen de acciones

| # | Acción | Prioridad | Esfuerzo |
|---|--------|-----------|----------|
| 1 | Justificar la equiponderación con texto argumentativo | Alta | Bajo |
| 2 | Considerar media geométrica o regla de piso | Media | Medio |
| 3 | Crear tabla de anclas descriptivas por dimensión (Anexo) | Alta | Medio |
| 4 | Agregar índice de consenso/dispersión como métrica complementaria | Media | Medio |
| 5 | Formalizar notación matemática ($D_i$, propiedades, rango) | Alta | Bajo |
| 6 | Reconciliar con filosofía "conversación, no fórmula" | Alta | Bajo |
