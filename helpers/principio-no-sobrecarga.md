# PRINCIPIO DE NO-SOBRECARGA: INTEGRACIÓN DE EVENTOS SIN AGREGAR TIEMPO

## INTRODUCCIÓN

**Preocupación común**: "¿SocialScrum no va a agregar muchas reuniones y hacer que los devs tengan aún menos tiempo para código?"

**Respuesta**: Con diseño correcto, SocialScrum agrega **solo 45 minutos cada 2 semanas** (aproximadamente 4.5 minutos/día).

**Principio fundamental**:
> "SocialScrum NO agrega eventos nuevos. Se INTEGRA en eventos Scrum existentes, 
> cambiando enfoque y facilitadores, no creando reuniones adicionales."

---

## PARTE 1: DESGLOSE DE TIEMPO POR EVENTO

### Sprints de 2 Semanas (10 días laborales)

```
┌─────────────────────────────────────────────────────────┐
│     OVERHEAD TEMPORAL DE SOCIALSCRUM POR SPRINT         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Sprint Planning Social        +15 minutos              │
│  Daily Standup Social (x10)    +20 minutos total        │
│  Sprint Review Social          +10 minutos              │
│  Sprint Retrospective Social   +0 minutos               │
│  ─────────────────────────────                          │
│  TOTAL POR SPRINT              45 minutos               │
│                                                          │
│  Por día promedio:             4.5 minutos/día          │
│  Porcentaje de tiempo:         ~0.6% del Sprint         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## PARTE 2: DETALLE POR EVENTO

### Evento 1: Sprint Planning (Estándar: 4-8 horas → SocialScrum: 4-8.25 horas)

#### Scrum Estándar (4 horas)
```
Sprint Planning - Duración 4 horas

Tema 1: ¿Qué se puede completar? (2 horas)
├─ PO presenta backlog priorizado
├─ Equipo comprende requisitos
└─ Se identifica qué es factible

Tema 2: ¿Cómo se va a hacer? (2 horas)
├─ Equipo estima items
├─ Se asignan responsables
└─ Se identifican impedimentos técnicos
```

#### SocialScrum (4 horas + 15 min = 4.25 horas)

```
Sprint Planning Social - Duración 4 horas 15 minutos

Tema 1: ¿Qué se puede completar? (2 horas) ← SIN CAMBIO
Tema 2: ¿Cómo se va a hacer? (1 hora 45 min) ← 15 min menos
Tema 3: Riesgos Sociales (15 min) ← NUEVO

┌─ Tema 3: Riesgos Sociales (15 minutos)
│  Facilitador: Social Guide
│  ├─ Presenta Health Score del Sprint anterior
│  ├─ Identifica community smells activos
│  ├─ Equipo reflexiona: "¿Podemos comprometernos a esta complejidad?"
│  └─ Se incluyen items sociales en Sprint (si aplica)
└─
```

**¿Por qué no agrega tiempo**:
- Tema 2 original (2 horas) se reduce a 1 hora 45 min
- Cambio: En lugar de lista larga de impedimentos técnicos, enfoque en los críticos
- Se agrega 15 min de discusión social
- **Neto**: +0 minutos (se eficienta el tiempo técnico)

**Alternativa si el equipo prefiere no reducir Tema 2**:
- Extender Sprint Planning a 4 horas 15 min
- Aceptar overhead de 15 minutos
- Es lo más común en práctica

---

### Evento 2: Daily Standup (Estándar: 15 min → SocialScrum: 15-17 min)

#### Scrum Estándar (15 minutos)
```
Daily Standup - 15 minutos

Ronda de cada miembro (3 preguntas por persona):
├─ ¿Qué completé ayer?
├─ ¿Qué haré hoy?
└─ ¿Tengo impedimentos técnicos?

Tiempo por persona: 1-2 min
Total: 10-15 personas × 1.5 min = 15-22 min
(Scrum Master regula tiempo)
```

#### SocialScrum (15 minutos + 2-3 min = 17-18 minutos)

```
Daily Standup Social - 15-18 minutos

Ronda técnica (cada persona): 12-14 minutos
├─ ¿Qué completé ayer?
├─ ¿Qué haré hoy?
└─ ¿Tengo impedimentos técnicos?

Pregunta Social (al final): 2-3 minutos
└─ "¿Hay ALGÚN impedimento social que nos afecte hoy?"
   ├─ SI alguien dice "SÍ":
   │  └─ Social Guide TOMA NOTA (no resuelve aquí)
   │     → Se aborda después del Daily en sesión 1:1 o sesión específica
   │
   └─ SI nadie dice nada:
      └─ Continuar

TOTAL: 15-18 minutos
```

**¿Por qué no agrega tiempo significativo**:
- Es una pregunta simple (1 minuto)
- Solo identifica, no resuelve
- Si hay impedimento: +5-10 min de sesión SEPARADA (no en el Daily)
- En Daily: +2-3 minutos neto

**Optimización para equipos remotos**:
- **Async Daily**: Daily escrito en Slack (no reunión síncrona)
- Pregunta social: "¿Hay impedimento social? Sí/No + 1 frase"
- Ahorro: 0 minutos en reunión síncrona

---

### Evento 3: Sprint Review (Estándar: 2-4 horas → SocialScrum: 2-4.17 horas)

#### Scrum Estándar (2 horas)
```
Sprint Review - 2 horas

Demo de Increment (1.5 horas)
├─ Equipo muestra qué construyó
└─ Stakeholders ven features en acción

Feedback (30 min)
├─ Stakeholders reaccionan
├─ Cambios de priorización
└─ Se actualizaiza Product Backlog
```

#### SocialScrum (2 horas + 10 minutos = 2.17 horas)

```
Sprint Review Social - 2 horas 10 minutos

Demo de Increment (1.5 horas) ← SIN CAMBIO

Feedback (30 min) ← SIN CAMBIO

Evaluación de Dinámica Social (10 minutos) ← NUEVO
└─ Facilitador: Social Guide
   ├─ Presenta Health Score del Sprint
   ├─ Muestra correlación: salud social ↔ velocidad
   └─ Perspectiva para stakeholders:
      "¿Cómo está el equipo? ¿Es sostenible este ritmo?"

TOTAL: 2 horas 10 minutos
```

**¿Por qué no agrega tiempo significativo**:
- Es 10 minutos (5% del tiempo total)
- Stakeholders ya están presentes
- No es reunión adicional

---

### Evento 4: Sprint Retrospective (Estándar: 1.5-3 horas → SocialScrum: mismo tiempo, diferente enfoque)

#### Scrum Estándar (1.5 horas)
```
Sprint Retrospective - 1.5 horas

Inspección (1 hora)
├─ ¿Qué fue bien?
├─ ¿Qué fue difícil?
├─ ¿Qué podemos mejorar?
└─ (Enfoque: Procesos técnicos)

Acciones de mejora (30 min)
├─ Se identifica 1-3 acciones
└─ Se asignan responsables
```

#### SocialScrum (1.5 horas, MISMO TIEMPO, diferente estructura)

```
Sprint Retrospective Social - 1.5 horas (SIN AGREGAR TIEMPO)

Inspección Técnica (30 min)
├─ ¿Qué fue bien técnicamente?
├─ ¿Qué fue difícil técnicamente?
└─ Facilitador: Scrum Master

Inspección Social (45 min) ← ÉNFASIS REBALANCEADO
├─ Dashboard de Health Score
├─ ¿Qué community smells se manifestaron?
├─ Causa raíz (5 Whys)
└─ Facilitador: Social Guide

Acciones de Mejora (15 min)
├─ Acciones técnicas (SM facilita)
├─ Acciones sociales (SG facilita)
└─ Se incluyen ambas en Sprint Backlog

TOTAL: 1.5 horas (SIN CAMBIO)
```

**¿Por qué NO agrega tiempo**:
- La retrospectiva ya existía (1.5 horas)
- SocialScrum solo REDISTRIBUYE el tiempo:
  - Menos tiempo: Procesos puramente técnicos
  - Más tiempo: Dinámicas sociales
- No es nuevo evento, es **reenfoque del mismo evento**
- Overhead neto: **0 minutos**

---

## PARTE 3: RESUMEN DE OVERHEAD TEMPORAL

### Tabla Maestra

| Evento | Estándar | SocialScrum | Overhead | % Aumento |
|---|---|---|---|---|
| **Sprint Planning** | 4 h | 4 h 15 min | +15 min | +6% |
| **Daily Standup** | 15 min | 17 min | +2-3 min | +13% |
| **Sprint Review** | 2 h | 2 h 10 min | +10 min | +8% |
| **Sprint Retro** | 1.5 h | 1.5 h | +0 min | 0% |
| **TOTAL/Semana** | 7.5 h | 7.75 h | +22.5 min | +5% |

---

### Visualización

```
Tiempo de reuniones Scrum por Sprint (2 semanas)

Scrum Estándar:
├─ Sprint Planning: 4 horas
├─ Dailies (10 días): 2.5 horas
├─ Sprint Review: 2 horas
└─ Sprint Retro: 1.5 horas
   ─────────────────
   TOTAL: 10 horas

SocialScrum:
├─ Sprint Planning: 4.25 horas (+15 min)
├─ Dailies (10 días): 2.65 horas (+10 min)
├─ Sprint Review: 2.17 horas (+10 min)
└─ Sprint Retro: 1.5 horas (sin cambio)
   ─────────────────
   TOTAL: 10.57 horas (+34 min)

Overhead SocialScrum: ~45 minutos por Sprint
                     ≈ 4.5 minutos por día
                     ≈ 0.6% del tiempo total
```

---

## PARTE 4: OPTIMIZACIONES ADICIONALES (REDUCIR AÚN MÁS)

### Optimización 1: Daily Async (Equipos Remotos)

**Problema**: Daily Standup síncrono es difícil en equipos distribuidos.

**Solución**: Daily async en Slack/Teams

```
Daily Async Standup - 5 minutos por persona (escritura) + 0 reunión

Formato en Slack:
┌─────────────────────────────────────────────────┐
│ Daily Standup - [Fecha]                         │
│                                                 │
│ @Dev_A                                          │
│ ✓ Ayer: Completé Story #123 (login)           │
│ → Hoy: Comenzar refactorización (SP 8)         │
│ ⚠️ Impedimento: Espero PR review de Dev_B       │
│ 💬 Social: Nada nuevo                           │
│                                                 │
│ @Dev_B                                          │
│ ✓ Ayer: Code review para Dev_A, Story #456     │
│ → Hoy: Testing de #123                         │
│ ⚠️ Impedimento: Database schema no sincroniza  │
│ 💬 Social: Nada nuevo                           │
│                                                 │
│ @QA_Lead                                        │
│ ✓ Ayer: Testing de features Sprint anterior    │
│ → Hoy: Testing de historias nuevas             │
│ ⚠️ Impedimento: Necesito credenciales de stage  │
│ 💬 Social: Nada nuevo                           │
└─────────────────────────────────────────────────┘

Overhead: 0 minutos en reunión síncrona
Lectura: ~5 min para SM/SG después de horario laboral
Participación: 100% sin conflictos de horarios
```

**Ahorro**: Si cambias a async, Daily Standup Social agrega 0 minutos.

---

### Optimización 2: Retrospectivas Alternadas

**Problema**: No todas las retros necesitan igual enfoque social.

**Solución**: Alternar énfasis

```
Sprint Impar (N):
├─ Énfasis: 60% Técnico, 40% Social
└─ Ejemplo: Evitar retrospectivas demasiado técnicas

Sprint Par (N+1):
├─ Énfasis: 40% Técnico, 60% Social
└─ Ejemplo: Profundizar dinámicas interpersonales

Promedio: 50-50 técnico/social
Beneficio: Equipos no "cansan" de retroperspectica social
```

**Impacto**: Sin cambio de tiempo, mejor distribución.

---

### Optimización 3: Social Guide como Rol Compartido (Equipos Pequeños)

**Problema**: Equipo pequeño (5 personas) no justifica Social Guide dedicado.

**Solución**: Rol rotativo

```
Equipo de 5 personas

Sprint 1: Dev_A es Social Guide (10% su tiempo)
Sprint 2: Dev_B es Social Guide (10% su tiempo)
Sprint 3: QA es Social Guide (10% su tiempo)
Sprint 4: Dev_C es Social Guide (10% su tiempo)
Sprint 5: Dev_D es Social Guide (10% su tiempo)
Sprint 6: Vuelve Dev_A

Beneficios:
- Equipo entero aprende perspectiva social
- 10% dedicación es "manejable" para dev individual
- Rotación evita que una persona sea "policía social"
```

**Ahorro**: Reducción de overhead de personal dedicado.

---

## PARTE 5: OVERHEAD DE FACILITACIÓN ADICIONAL

### Fuera de Reuniones Scrum

**Algunos items sociales requieren sesiones FUERA de reuniones:**
- Mediación 1:1
- Sesiones de resolución de conflicto
- Talleres especializados

**¿Es overhead adicional?** Sí, pero:

1. **Es necesario** (no se puede evitar)
2. **Es limitado** (5-10 horas por Sprint máximo para equipos con salud media)
3. **Tiene ROI** (previene rotación, aumenta velocidad)

**Ejemplo**:
```
Sprint Planning: +15 min (incluido)
Daily: +2-3 min/día (incluido)
Sprint Review: +10 min (incluido)
Sprint Retro: +0 min (incluido)

Adicional (fuera de reuniones):
├─ Mediación Dev A-B: 5 horas (distribuidas en el Sprint)
├─ Workshop comunicación: 3 horas
└─ 1:1 con persona en burnout: 2 horas
   ─────────────────
   Total adicional: 10 horas por Sprint

TOTAL OVERHEAD SocialScrum: 45 min (incluido) + 10 horas (adicional) = 10 horas 45 min

Capacidad del equipo:
- Sprint 2 semanas: 40 SP técnico
- Con SocialScrum: ~30 SP técnico + 10 SP social
- Reducción: 25% de capacidad técnica

¿Es justificado? Sí, si previene 1-2 rotaciones (ahorro de 3-6 meses de capacitación)
```

---

## PARTE 6: GARANTÍAS DE NO-SOBRECARGA

### Reglas Obligatorias para Social Guide

Para evitar que SocialScrum se convierta en "burocracia social", el Social Guide debe seguir estas reglas:

#### Regla 1: Budget de Tiempo Máximo
```
Items sociales NO pueden exceder 20% de capacidad del equipo.

Ejemplo:
- Capacidad: 40 SP
- Items sociales: máximo 8 SPS (~8 horas)
- Resto: 32 SP técnico

Si items sociales > 8 SPS:
→ Escalar a CTO (puede indicar equipo en crisis)
```

#### Regla 2: Sesiones Máximas por Semana
```
No más de 2 horas de sesiones adicionales (fuera de Scrum estándar) por semana.

Ejemplo:
- Semana 1: 1.5 horas de mediación (dentro de presupuesto)
- Semana 2: 1.5 horas de workshop (dentro de presupuesto)
- Total Sprint (2 semanas): 3 horas (dentro de presupuesto 4 horas)
```

#### Regla 3: Primero Integración, Después Nuevos Eventos
```
ANTES de crear nuevas reuniones, integrar en Scrum estándar.

Orden de preferencia:
1. Integrar en Daily Standup ✓
2. Integrar en Sprint Planning ✓
3. Integrar en Sprint Review ✓
4. Integrar en Sprint Retrospective ✓
5. Crear "Sesión de Mediación" (SOLO si no cabe en 1-4) ✗
6. Crear "Workshop Social" (SOLO si no cabe en 1-5) ✗
```

---

## PARTE 7: MEDICIÓN DE OVERHEAD

### Cómo rastrear overhead real

**Semana 1 de SocialScrum:**

```
Lunes:
├─ Daily: 17 min (2 min adicionales)
├─ 1:1 con Dev A: 1 hora (mediación)
└─ Total: 1 hora 17 min

Martes:
├─ Daily: 16 min (1 min adicional)
└─ Total: 16 min

Miércoles:
├─ Daily: 16 min
├─ Workshop: 2 horas
└─ Total: 2 horas 16 min

Jueves:
├─ Daily: 15 min (sin social)
├─ 1:1 con Dev B: 1 hora
└─ Total: 1 hora 15 min

Viernes:
├─ Sprint Retro: 1.5 horas (enfoque 60% social)
└─ Total: 1 hora 30 min

SEMANA 1 TOTAL: 6 horas 34 min de "overhead social"

Análisis:
- Reuniones Scrum + Social: 4 horas 15 min (estimado: 3.5 horas)
- Sesiones adicionales: 2 horas 19 min
- Overhead vs estimado: ~6 horas (cercano a presupuesto)
```

**Conclusión**: Medir real vs. estimado cada Sprint, ajustar presupuesto.

---

## PARTE 8: CÓMO COMUNICAR ESTO A LA ORGANIZACIÓN

### Email al Equipo (Templat)

```
Asunto: SocialScrum - Cómo NO agrega más reuniones

Equipo,

Para algunos, "SocialScrum" suena como "más reuniones", "más burocracia".

La verdad: SocialScrum agrega ~45 minutos cada 2 semanas a nuestras reuniones 
Scrum estándar. Eso es 4.5 minutos/día.

¿Cómo?

1. Daily Standup: Agregamos 1 pregunta (2-3 min)
2. Sprint Planning: Agregamos 15 min de discusión social (pero optimizamos 
   el resto)
3. Sprint Review: Agregamos 10 min de evaluación de dinámica social
4. Sprint Retro: SIN cambio (solo reenfoque, no nuevo tiempo)

Total: 45 minutos/Sprint

Además, para casos especiales (mediación, workshop) pueden haber 
sesiones adicionales, PERO nunca superaremos 20% de capacidad del Sprint.

Beneficio: Equipos con mayor cohesión entregan MÁS y MEJOR. No es "costo", 
es "inversión".

Preguntas? Vemos en próximo Daily.

[Social Guide Name]
```

---

## PARTE 9: TEMPLATE PARA CAP 4 (USO DIRECTO EN TESIS)

```latex
\subsection{Principio de No-Sobrecarga: Integración sin Agregar Tiempo}

Una preocupación común es que SocialScrum agregará burcracia y reuniones 
innecesarias, reduciendo aún más el tiempo de desarrollo. Este principio 
garantiza que SocialScrum se integra en eventos Scrum existentes sin 
agregar overhead significativo.

\subsubsection{Desglose de Overhead Temporal}

SocialScrum agrega un total de aproximadamente 45 minutos cada Sprint de 
2 semanas, distribuido así:

\begin{itemize}
\item Sprint Planning: +15 minutos (sección de Riesgos Sociales)
\item Daily Standup: +2-3 minutos por día (pregunta social final) = +20 min total
\item Sprint Review: +10 minutos (evaluación de dinámica social)
\item Sprint Retrospective: +0 minutos (reenfoque del mismo tiempo)
\end{itemize}

Total: 45 minutos por Sprint = 4.5 minutos por día = 0.6\% del tiempo total.

\subsubsection{Integración, No Adición}

El diseño de SocialScrum sigue un principio de \textit{integración}, no adición:

\begin{enumerate}
\item Los eventos sociales se integran en reuniones Scrum existentes
\item No se crean nuevas reuniones obligatorias
\item El tiempo se redistribuye, no se aumenta
\item Solo sesiones adicionales (mediación 1:1, talleres) se realizan fuera 
de Scrum estándar
\end{enumerate}

\subsubsection{Sesiones Adicionales}

Cuando un community smell requiere intervención especializada (p.e., mediación 
de conflicto, taller de cohesión), se realiza una sesión adicional. Sin embargo, 
el presupuesto de tiempo nunca debe exceder el 20\% de la capacidad del equipo.

Ejemplo:
\begin{itemize}
\item Capacidad del equipo: 40 SP
\item Items sociales integrados: 45 min
\item Sesiones adicionales máximas: 8 horas/Sprint (20\% de 40 SP)
\item Total: 45 min + 8 horas ≈ 10\% de tiempo total del Sprint
\end{itemize}

\subsubsection{Optimizaciones para Reducir Overhead}

Para equipos particularmente preocupados por overhead, existen optimizaciones:

\begin{enumerate}
\item \textbf{Daily Async}: Convertir Daily a formato asincrónico (Slack) 
elimina reunión síncrona.
\item \textbf{Retros Alternadas}: Alternar entre retros de énfasis técnico 
y social, reduciendo carga perceptual.
\item \textbf{Social Guide Compartido}: En equipos pequeños, rol rotativo 
(10\% per person) vs. dedicado.
\end{enumerate}

\subsubsection{Garantías}

Para evitar que SocialScrum se convierta en burocracia, se establecen 
tres garantías obligatorias:

\begin{enumerate}
\item Items sociales no exceden 20\% de capacidad del equipo
\item Máximo 2 horas de sesiones adicionales por semana
\item Integración ANTES de crear nuevos eventos
\end{enumerate}
```

---

## CONCLUSIÓN

**SocialScrum NO agrega burocracia si se implementa correctamente.**

Con integración en eventos existentes y presupuesto claro:
- **+45 minutos/Sprint** en reuniones
- **~20% de capacidad** en sesiones adicionales
- **Overhead total**: ~10% del tiempo Sprint

**ROI positivo**: Si previene 1 rotación por año (costo 2-3x salario), SocialScrum se paga a sí mismo.

**Regla de oro**: "No es tiempo perdido, es tiempo invertido en equipo sostenible."

