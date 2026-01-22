# EJEMPLOS CONCRETOS: ANTES vs DESPUÉS COMPRESIÓN
## Capítulo 4 - SocialScrum | Diciembre 19, 2025

---

# EJEMPLO 1: SECCIÓN 4.8 - ESTIMACIÓN SPS (12 pág → 2 pág)

## ANTES (ACTUAL - Narrativa verbosa)

```latex
\subsection{4.8.2.1 Paso 1: Identificar el community smell}

Antes de poder estimar cualquier item social, es imperativo que el equipo 
o el Social Guide haya identificado de manera clara y sin ambigüedad cuál es 
el community smell que se desea abordar. Por ejemplo, si durante la retrospectiva 
social el equipo reportó que no hay suficiente comunicación entre el frontend 
y el backend, entonces el smell a abordar podría clasificarse como un smell 
de comunicación. 

De acuerdo con la taxonomía presentada en el Capítulo 2, los smells pueden 
clasificarse en varias categorías: smells de comunicación, smells de conocimiento, 
smells relacionales y smells organizacionales. Cada una de estas categorías 
requiere una intervención diferente, y por lo tanto, una complejidad de estimación 
también diferente.

Una vez identificado el smell, el Social Guide debe documentarlo en el Registro 
de Community Smells con claridad suficiente como para que cualquier miembro del 
equipo entienda exactamente cuál es el problema que se está abordando. Esta 
documentación es crítica porque permite que en futuras iteraciones, el equipo 
pueda hacer seguimiento del smell y determinar si la intervención fue efectiva.

[2 páginas más de narrativa similar...]
```

### Problemas:
- 2 páginas para decir: "Identifica el smell, documéntalo"
- Ejemplos dispersos
- Repetición de conceptos ya explicados en Cap 2
- No hay referencias visuales

---

## DESPUÉS (COMPRIMIDO - Tabla + Síntesis)

```latex
\subsection{4.8.2 Metodología de estimación}

La estimación SPS requiere tres evaluaciones secuenciales: 
identificación del smell, severidad y complejidad de intervención.

\begin{table}[h]
\centering
\caption{Proceso de estimación SPS: Pasos y criterios}
\begin{tabular}{|l|p{3cm}|p{3cm}|p{3cm}|}
\hline
\textbf{Paso} & \textbf{Criterio} & \textbf{Entrada} & \textbf{Salida} \\
\hline
1. Identificar & Categoría del smell & Registro Community Smells & Tipo confirmado \\
\hline
2. Evaluar severidad & Impacto en equipo & Health Score + observación & Bajo/Medio/Alto \\
\hline
3. Evaluar complejidad & Dificultad intervención & Historial + contexto & Sencilla/Moderada/Compleja \\
\hline
4. Calcular SPS & Fórmula: Tabla 4.41 & Severidad + Complejidad & SPS final (1-13) \\
\hline
\end{tabular}
\end{table}

\textbf{Ejemplo rápido}: Falta comunicación FE-BE (Comunicación, Severidad=Alta, 
Complejidad=Moderada) $\rightarrow$ SPS = 5.

Tabla 4.41 (al final de sección) proporciona referencia rápida por tipo de smell.
```

### Mejoras:
- ✅ De 2 páginas a 0.5 páginas
- ✅ Tabla clara muestra entrada/salida
- ✅ Ejemplo concreto al lado
- ✅ Referencias a tabla de consulta rápida

**AHORRO: 1.5 páginas SOLO en este paso**

---

# EJEMPLO 2: SECCIÓN 4.2.3 - GESTIÓN DE OBJECIONES (3 pág → 1 pág)

## ANTES (ACTUAL - Párrafos narrativos)

```latex
\subsubsection{4.2.3.1 Objetivos de la presentación}

Los objetivos de la presentación son múltiples y bien definidos. 
En primer lugar, se busca crear conciencia sobre la importancia de la deuda social 
en el desarrollo de software. Muchos equipos no reconocen cómo los problemas 
interpersonales afectan directamente la calidad del producto final y el bienestar 
de los profesionales...

\subsubsection{4.2.3.3 Gestión de objeciones comunes}

Es probable que durante la presentación surjan objeciones. Estos son algunos ejemplos 
y cómo responderlos:

\textbf{Objeción 1: ``Es mucho tiempo adicional''}

Esta es quizás la objeción más común. Los críticos frecuentemente argumentan que 
SocialScrum añade tiempo significativo a los eventos existentes, lo cual podría 
comprometer la velocidad del equipo. Sin embargo, este argumento se basa en una 
premisa incorrecta. Como se demostró en la Tabla 3.5 y se reitera en el Capítulo 4, 
Sección 4.10, el tiempo adicional es mínimo...

[2-3 páginas más de objeciones narrativas]
```

### Problemas:
- ~3 páginas de párrafos para listar objeciones
- Cada objeción ocupa 0.5-0.7 páginas
- Información repetida en Cap 4.10
- Difícil de consultar

---

## DESPUÉS (COMPRIMIDO - Tabla interactiva)

```latex
\subsubsection{4.2.3.3 Gestión de objeciones comunes}

Durante la presentación pueden surgir resistencias. La Tabla 4.XX sintetiza 
las más comunes con respuestas breves y referencias a secciones para profundizar.

\begin{table}[h]
\centering
\caption{Objeciones frecuentes y respuestas rápidas}
\small
\begin{tabular}{|p{2.5cm}|p{4cm}|p{2.5cm}|}
\hline
\textbf{Objeción} & \textbf{Respuesta} & \textbf{Ver} \\
\hline
``Mucho tiempo'' & 30 min/sprint = 1\% tiempo total, retorno es 5x & Cap 4.10.1 \\
\hline
``¿Quién lo dirige?'' & Social Guide (selección y capacitación en Sec 4.3) & Cap 4.3 \\
\hline
``Si no hay problemas?'' & Health Score positivo no elimina trabajo preventivo & Cap 4.6 \\
\hline
``¿Y si sale mal?'' & Salvaguardas éticas garantizan confidencialidad & Cap 4.11 \\
\hline
``¿Escala a otros equipos?'' & Sí, con adaptaciones según tamaño y contexto & Cap 4.12 \\
\hline
\end{tabular}
\end{table}

Nota: Si una objeción específica requiere mayor profundidad, utiliza las 
referencias en la columna ``Ver'' para dar detalles.
```

### Mejoras:
- ✅ De 3 páginas a 0.5 páginas
- ✅ Tabla escaneable
- ✅ Referencias directas a secciones
- ✅ Respuestas breves y claras

**AHORRO: 2.5 páginas**

---

# EJEMPLO 3: SECCIÓN 4.9 - ESTRATEGIAS DE MITIGACIÓN (8 pág → 2 pág)

## ANTES (ACTUAL - Narrativa por categoría)

```latex
\subsubsection{4.9.2.1 Estrategias para smells relacionales}

Los smells relacionales son aquellos que afectan la interacción interpersonal 
dentro del equipo. Algunos ejemplos incluyen tensiones entre miembros, falta de 
confianza, comunicación inefectiva y dinámicas de poder desequilibradas.

Para abordar estos smells, proponemos varias estrategias probadas:

\textbf{Estrategia 1: Sesiones de facilitación de diálogos difíciles}

Cuando hay tensiones interpersonales, es fundamental crear un espacio seguro 
donde los miembros puedan expresar sus preocupaciones sin temor a represalias. 
El Social Guide actúa como mediador neutral. Estas sesiones pueden llevarse a cabo 
en 30-45 minutos después de la retrospectiva social...

\textbf{Estrategia 2: Pair programming rotativo}

Una forma efectiva de construir confianza y mejorar la comunicación es implementar 
pair programming entre miembros que tienen tensiones. Esto permite que:
- Compartan conocimiento técnico
- Trabajen en tiempo real en un objetivo común
- Reduzcan silos de conocimiento
- Construyan relaciones basadas en trabajo colaborativo...

[Continúa con 6 estrategias más, ~5-6 páginas adicionales]
```

### Problemas:
- 8 páginas describen esencialmente: "Haz esto para este tipo de smell"
- Muchas palabras, poca síntesis
- Difícil de consultar rápido en Sprint Planning
- Redundancia con Cap 3 y Anexo F

---

## DESPUÉS (COMPRIMIDO - Tabla + Anexo)

```latex
\subsubsection{4.9 Estrategias de mitigación de community smells}

SocialScrum ofrece un catálogo de estrategias probadas organizadas por 
categoría de smell. La Tabla 4.42 resume las intervenciones principales; 
para implementaciones detalladas, consulta Anexo F.

\begin{table}[h]
\centering
\caption{Estrategias por categoría de community smell}
\tiny
\begin{tabular}{|p{1.8cm}|p{2.5cm}|p{2.5cm}|p{1.5cm}|}
\hline
\textbf{Categoría} & \textbf{Ejemplo Smell} & \textbf{Intervención} & \textbf{Ref.} \\
\hline
Comunicación & Silos FE-BE & Pair prog., Daily cross-team & Anexo F.1 \\
\hline
Conocimiento & Experto único & Sesiones transfer., wiki & Anexo F.2 \\
\hline
Relacional & Tensión A-B & Mediación SG, retro psicológica & Anexo F.3 \\
\hline
Organización & PO no alineado & OKR realignment, Sprint Goal & Anexo F.4 \\
\hline
Escalamiento & Conflicto PO-SG & Protocolo a CTO & Cap 4.11.3 \\
\hline
\end{tabular}
\end{table}

Para seleccionar estrategia en un Sprint:
\begin{enumerate}
  \item Identifica categoría del smell (Tabla 4.42)
  \item Consulta intervención recomendada
  \item Estima SPS según complejidad (Tabla 4.41)
  \item Prioriza en Product Backlog Social
\end{enumerate}

Detalles de implementación: ver Anexo F.
```

### Mejoras:
- ✅ De 8 páginas a 1.5 páginas (cap)
- ✅ Tabla resumen clara
- ✅ Referencias a anexo para profundidad
- ✅ Algoritmo de decisión paso-a-paso
- ✅ Fácil de consultar en Sprint Planning

**AHORRO: 6.5 páginas (+ todo el detalle se preserva en anexo)**

---

# EJEMPLO 4: SECCIÓN 4.10 - NO-SOBRECARGA (12 pág → 3 pág)

## ANTES (ACTUAL - Repeticiones y expectativas narrativas)

```latex
\subsubsection{4.10.1 Overhead temporal por evento}

La pregunta fundamental es: ¿cuánto tiempo adicional requiere SocialScrum?

Tal como se presentó en la Tabla 3.5, el overhead es mínimo. Sin embargo, 
en esta sección profundizamos sobre cómo se distribuye este tiempo...

\begin{table}
\centering
\caption{Overhead temporal de SocialScrum}
\begin{tabular}{|l|c|c|}
\hline
Evento & Duración base & Overhead social \\
\hline
Daily & 15 min & +2-3 min \\
Sprint Planning & 4 h & +15 min \\
Sprint Review & 2 h & +10 min \\
Retrospective & 1.5 h & Rebalance (sin suma) \\
\hline
\textbf{Total} & & \textbf{~30 min/sprint} \\
\hline
\end{tabular}
\end{table}

Esta tabla es fundamental para las conversaciones con stakeholders...

\subsubsection{4.10.2 Optimizaciones prácticas}

Si aún 30 minutos parecen demasiado, aquí hay 4 optimizaciones prácticas:

\textbf{Optimización 1: Daily Standup asincrónico}

En equipos distribuidos, el Daily Standup puede llevarse a cabo de manera 
asincrónica usando Slack o herramientas similares. El Social Guide revisa 
los mensajes del día anterior y sintetiza cualquier signal social relevante 
para la retrospectiva. Ventaja: ahorra 5-10 minutos. 
Desventaja: se pierden señales en tiempo real...

[Continúa con 3 optimizaciones más = 2-3 páginas]

\subsubsection{4.10.3 Gestión de expectativas organizacionales}

Este es un punto delicado. Es importante que los stakeholders entiendan que 
SocialScrum no es un ``costo'' sino una inversión. La investigación muestra que:

- Equipos con menor deuda social tienen 40\% menos rotación
- Productividad sostenida es 20\% mayor a largo plazo
- Satisfacción de equipo correlaciona con calidad de producto

Por lo tanto, un investimiento de 30 minutos/sprint retorna 5-10 veces 
en calidad y velocidad sostenida...

[2-3 páginas más de argumentación]
```

### Problemas:
- 12 páginas para comunicar: "30 min/sprint, es inversión que vale la pena"
- Repeticiones de la tabla 3.5
- Mucha narrativa que podría ser síntesis

---

## DESPUÉS (COMPRIMIDO - Tabla + Síntesis)

```latex
\subsubsection{4.10 Principio de No-Sobrecarga}

\textbf{Pregunta clave}: ¿Cuánto tiempo adicional requiere SocialScrum?

\textbf{Respuesta}: Menos del 1\% de tiempo de Sprint (aproximadamente 30 minutos 
en un Sprint de dos semanas).

\begin{table}[h]
\centering
\caption{Overhead de SocialScrum por evento}
\small
\begin{tabular}{|l|r|r|}
\hline
\textbf{Evento} & \textbf{Duración base} & \textbf{Overhead} \\
\hline
Daily Standup & 15 min & +2-3 min \\
Sprint Planning & 4 h & +15 min \\
Sprint Review & 2 h & +10 min \\
Sprint Retrospective & 1.5 h & Rebalance (0 min suma) \\
\hline
\textbf{Total por Sprint} & & \textbf{~30 min} \\
\hline
\end{tabular}
\end{table}

\textbf{¿Es sostenible?} Sí. 30 min/sprint equivalen a 1\% del tiempo disponible. 
El retorno es 5-10x: menos rotación (40\%), mayor calidad, sostenibilidad a largo plazo.

\textbf{Optimizaciones si hay restricciones}:
\begin{itemize}
  \item Equipos remotos: Daily asincrónico (Slack) = -5 min
  \item Sprints cortos: Retrospectiva alternada = -15 min en algunos sprints
  \item Equipos pequeños: Social Guide rotativo = distribución de carga
\end{itemize}

Para profundidad: ver Anexo C (Adaptaciones por contexto).
```

### Mejoras:
- ✅ De 12 páginas a 1.5 páginas
- ✅ Respuesta clara en primeras líneas
- ✅ Tabla única (sin repetición de Cap 3)
- ✅ Síntesis de optimizaciones
- ✅ Referencia a anexo para detalles

**AHORRO: 10.5 páginas**

---

# EJEMPLO 5: SECCIÓN 4.12 - ADAPTACIÓN CONTEXTUAL (16 pág → 2 pág + Anexo)

## ANTES (ACTUAL - Descripción exhaustiva por contexto)

```latex
\subsection{4.12.1 Equipos pequeños (5-7 personas)}

\subsubsection{4.12.1.1 Características del contexto}

Los equipos pequeños tienen dinámicas únicas que deben considerarse al 
adoptar SocialScrum. Primero, el nivel de interacción es más alto porque 
todos trabajan juntos día a día. Esto significa que cualquier fricción 
interpersonal es más visible y más difícil de ocultar...

[0.5 pág de descripción]

\subsubsection{4.12.1.2 Configuración recomendada}

Para un equipo pequeño, recomendamos una configuración específica. 
El Social Guide NO debe ser un rol exclusivo de una persona. En su lugar, 
sugerimos que el rol sea rotativo, donde cada miembro del equipo dedica 
un pequeño porcentaje de su tiempo (aproximadamente 10\%) para facilitar 
las responsabilidades sociales...

[1 pág de descripción]

\subsubsection{4.12.1.3 Overhead esperado}

Para un equipo pequeño, el overhead es menor porque el Social Guide es rotativo...

[0.5 pág]

\subsubsection{4.12.1.4 Simplificaciones permitidas}

En un equipo pequeño, algunos elementos de SocialScrum pueden simplificarse...

[1 pág]

\subsubsection{4.12.1.5 Cuándo escalar a Social Guide dedicado}

A medida que el equipo crece...

[0.5 pág]

% Total sección 4.12.1: ~3.5 páginas

% Luego: 4.12.2 (Equipos medianos = 2.5 pág)
%        4.12.3 (Equipos grandes = 2.5 pág)  
%        4.12.4 (Distribuidos = 8 pág !!!)

[Total sección 4.12 = 16 páginas]
```

### Problemas:
- 16 páginas (!!!) para describir variaciones contextuales
- Cada tamaño de equipo tiene subsecciones redundantes
- 4.12.4 es desproporcionadamente larga (8 páginas)
- Mucho texto que es esencialmente "configura así porque..."

---

## DESPUÉS (COMPRIMIDO - Tabla maestra + Anexo)

```latex
\subsection{4.12 Adaptación contextual y escalabilidad}

SocialScrum se adapta a diferentes contextos. La Tabla 4.64 muestra 
las configuraciones principales; detalles extensos se encuentran en Anexo C.

\begin{table}[h]
\centering
\caption{Configuraciones de SocialScrum por contexto}
\tiny
\begin{tabular}{|p{1.5cm}|p{1.5cm}|p{2.2cm}|p{1.3cm}|p{1.3cm}|p{1.2cm}|p{0.8cm}|}
\hline
\textbf{Tamaño} & \textbf{Ubicación} & \textbf{Social Guide} & \textbf{Health Score} 
& \textbf{Daily} & \textbf{Retro} & \textbf{Overhead} \\
\hline
Pequeño (5-7) & Co-loc & Rotativo 10\% & Simplificado & Síncrono & Mensual & Bajo \\
\hline
Mediano (8-15) & Híbrido & Dedicado 50\% & Full & Síncrono & Bi-semanal & Medio \\
\hline
Grande (16+) & Distribuido & Dedicado 100\% & Agregado & Asincrónico & Semanal & Alto \\
\hline
\end{tabular}
\end{table}

\textbf{Preguntas para elegir configuración}:
\begin{enumerate}
  \item ¿Tamaño del equipo? (fila en Tabla 4.64)
  \item ¿Distribución geográfica? (co-loc, híbrido, distribuido)
  \item ¿Madurez en Scrum? (ajustar rigor)
  \item ¿Cultura organizacional? (restrictiva = requiere patrocinio fuerte)
\end{enumerate}

Para implementación detallada y casos específicos: Anexo C.
```

### Mejoras:
- ✅ De 16 páginas a 1 página (cap)
- ✅ Tabla maestra clara
- ✅ 4 preguntas de decisión
- ✅ Toda la riqueza en Anexo C (preservada)
- ✅ Fácil de consultar

**AHORRO: 15 páginas (+ anexo preserva todos los detalles)**

---

# RESUMEN: IMPACTO TOTAL

| Sección | Antes | Después | Ahorro | Método |
|---------|-------|---------|--------|--------|
| 4.8 (SPS) | 12 pág | 2 pág | 10 pág | Tabla |
| 4.2.3 (Objeciones) | 3 pág | 0.5 pág | 2.5 pág | Tabla |
| 4.9 (Estrategias) | 8 pág | 1.5 pág | 6.5 pág | Tabla + Anexo |
| 4.10 (Overhead) | 12 pág | 1.5 pág | 10.5 pág | Síntesis |
| 4.12 (Adaptación) | 16 pág | 1 pág | 15 pág | Tabla + Anexo |
| **SUBTOTAL** | **51 pág** | **6.5 pág** | **44.5 pág** | |
| **Cap 4 total** | 125 pág | ~82 pág | ~43 pág | |

---

# NOTA IMPORTANTE

**Nada se pierde, todo se reorganiza**:
- Ejemplos verbosos → Anexo F
- Adaptaciones detalladas → Anexo C
- Estrategias por caso → Anexo F
- El tribunal SIGUE VIENDO todo el contenido
- Solo reorganizamos para legibilidad

**Tiempo de implementación**: 8-10 horas

**Impacto en tribunal**: "Tesis bien estructurada y accesible" vs. "Tesis extensa y verbosa"
