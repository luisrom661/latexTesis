# SISTEMA DE ESTIMACIÓN DE ITEMS SOCIALES: STORY POINTS SOCIALES (SPS)

## INTRODUCCIÓN

En Scrum estándar, items técnicos se estiman en **Story Points (SP)** usando la escala Fibonacci (1, 2, 3, 5, 8, 13, 21...). En SocialScrum, items de deuda social se estiman en **Story Points Sociales (SPS)** usando una escala equivalente.

**Principio fundamental**:
> "1 SPS (Social) ≈ 1 SP (Técnico) en términos de tiempo/esfuerzo consumido."

Este documento proporciona un framework completo para estimar, registrar y seguimiento de items sociales.

---

## PARTE 1: ESCALA DE ESTIMACIÓN (SPS)

### Tabla Maestra: SPS vs. Esfuerzo vs. Intervención

| SPS | Esfuerzo Estimado | Duración | Tipo de Intervención | Ejemplo |
|---|---|---|---|---|
| **1** | Mínimo | 1-2 horas | Conversación facilitada, ajuste menor de proceso | "Establecer acuerdo simple", "Feedback rápido" |
| **2** | Bajo | 2-4 horas | Mediación leve, establecer norma de equipo | "Norma de comunicación", "Ajuste de tooling" |
| **3** | Moderado | 4-8 horas (1 día) | Workshop de cohesión, retrospectiva profunda, código de conducta | "Workshop comunicación", "Retrospectiva social" |
| **5** | Alto | 1-2 días | Mediación de conflicto severo, reestructuración de comunicación | "Mediación interpersonal", "Restructuración roles" |
| **8** | Muy Alto | 2-3 días | Intervención organizacional, cambio de estructura de equipo | "Reubicación de personal", "Reestructuración equipos" |
| **13** | Crítico | 1 semana+ | Reestructuración completa, probable rotación de personal | "Cambio de liderazgo", "Rotación masiva" |

---

## PARTE 2: METODOLOGÍA DE ESTIMACIÓN

### Paso 1: Identificar el Community Smell

**Pregunta**: ¿Qué community smell se va a abordar?

**Ejemplos**:
- Radio Silence (falta de comunicación)
- Organizational Silo (aislamiento entre equipos)
- Lone Wolf (miembro trabajando aisladamente)
- Prima Donna (no se compromete con objetivos comunes)
- Conflicto no resuelto
- Burnout detectado
- Inseguridad psicológica

---

### Paso 2: Evaluar Severidad

**Escala de severidad**:

| Nivel | Descripción | Indicador | SPS Base |
|---|---|---|---|
| **LEVE** | Molestia, no bloquea trabajo | Afecta 1-2 personas ocasionalmente | 1-2 |
| **MODERADA** | Afecta calidad, retarsos mínimos | Afecta 3-5 personas, impacto mensurable | 3-5 |
| **SEVERA** | Bloquea trabajo, conflicto abierto | Afecta equipo entero, riesgo de rotación | 8-13 |
| **CRÍTICA** | Crisis, riesgo inmediato | Equipo disfuncional, rotación inminente | 13+ |

---

### Paso 3: Evaluar Complejidad de la Intervención

**Preguntas**:
1. ¿Es intervención **individual** (1:1) o **grupal** (equipo entero)?
2. ¿Requiere **mediación especializada** o es **autogestión**?
3. ¿Es intervención **puntual** (one-time) o **sostenida** (múltiples sesiones)?

**Matriz de complejidad**:

| Complejidad | Individual/1:1 | Grupal | Mediación | Duración | SPS Ajuste |
|---|---|---|---|---|---|
| Baja | Sí | No | No | Una sesión | +0 SPS |
| Media | Sí o No | Ocasional | Facilitación básica | 2-3 sesiones | +1 SPS |
| Alta | No | Sí | Mediación especializada | 3+ sesiones | +2 SPS |

---

### Paso 4: Calcular SPS Final

**Fórmula aproximada**:

```
SPS Final = SPS Base (por severidad) + Ajuste por Complejidad
```

**Ejemplo 1**:
```
Community Smell: Conflicto entre Dev A y Dev B
├─ Severidad: MODERADA (2 personas, afecta code review)
│  → SPS Base = 3
├─ Complejidad:
│  ├─ Individual: Sí (1:1 con cada dev)
│  ├─ Grupal: Sí (sesión conjunta)
│  ├─ Mediación: Sí (especializada)
│  ├─ Duración: 3 sesiones
│  → Ajuste = +2 SPS
└─ SPS Final = 3 + 2 = 5 SPS

Explicación:
- 1 hora: 1:1 con Dev A
- 1 hora: 1:1 con Dev B
- 2 horas: Sesión conjunta facilitada
- 1 hora: Seguimiento en próxima retro
= Total 5 horas ≈ 5 SPS
```

**Ejemplo 2**:
```
Community Smell: Radio Silence (comunicación centralizada)
├─ Severidad: MODERADA (afecta velocidad, malinterpretaciones)
│  → SPS Base = 3
├─ Complejidad:
│  ├─ Individual: No (es problema de equipo)
│  ├─ Grupal: Sí (workshop)
│  ├─ Mediación: No (es diseño de proceso)
│  ├─ Duración: 2 sesiones
│  → Ajuste = +1 SPS
└─ SPS Final = 3 + 1 = 4 SPS

Explicación:
- 2 horas: Workshop "Comunicación asincrónica"
- 1 hora: Implementación en Slack/Confluence
- 1 hora: Evaluación después de 1 sprint
= Total 4 horas ≈ 4 SPS
```

**Ejemplo 3**:
```
Community Smell: Burnout detectado en 3/5 miembros
├─ Severidad: SEVERA (afecta equipo, riesgo de rotación)
│  → SPS Base = 8
├─ Complejidad:
│  ├─ Individual: Sí (1:1 con cada afectado)
│  ├─ Grupal: Sí (sesión grupal)
│  ├─ Mediación: Sí (especializada, probablemente requiere psicólogo)
│  ├─ Duración: 4+ sesiones
│  → Ajuste = +2 SPS
└─ SPS Final = 8 + 2 = 10 SPS (redondeado a 13 SPS)

Explicación:
- 1 hora x3: 1:1 con cada persona en burnout
- 2 horas: Sesión grupal
- 2 horas: Análisis de carga de trabajo
- 2 horas: Implementación de cambios
- 2 horas: Seguimiento
= Total 10+ horas ≈ 13 SPS
```

---

## PARTE 3: TABLA DE REFERENCIA RÁPIDA (CHEATSHEET)

### Community Smells Comunes + Estimación

| # | Community Smell | Severidad | Intervención | SPS |
|---|---|---|---|---|
| 1 | Radio Silence (falta comunicación) | MOD | Workshop + proceso | 3-5 |
| 2 | Organizational Silo (equipos aislados) | MOD | Reestructuración comunicación | 5-8 |
| 3 | Lone Wolf (aislamiento individual) | LEVE-MOD | Mediación + reintegración | 3-5 |
| 4 | Prima Donna (no compromete objetivos) | MOD | Mediación + normas explícitas | 5 |
| 5 | Conflicto interpersonal no resuelto | LEVE-MOD | Mediación bilateral | 3-5 |
| 6 | Conflicto interpersonal severo | SEVERA | Mediación + 1:1 con psicólogo | 8 |
| 7 | Burnout leve | LEVE-MOD | Conversación + ajuste carga | 2-3 |
| 8 | Burnout moderado | MOD | Mediación + reestructuración de roles | 5-8 |
| 9 | Burnout severo | SEVERA | 1:1 + psicólogo + cambio de equipo | 13 |
| 10 | Miembros Pedantes (estándares excesivos) | LEVE | Normas de calidad explícitas | 2 |
| 11 | Inseguridad Psicológica | MOD-SEVERA | Workshop + retro facilitada | 5-8 |
| 12 | Falta de Visibilidad (personas invisibles) | LEVE | Retrospectiva inclusiva | 1-2 |
| 13 | Lack of Consensus (no hay acuerdos) | MOD-SEVERA | Workshops + facilitación | 5-8 |
| 14 | Decision Incommunicability (decisiones opacas) | LEVE-MOD | Documentación + sesión de clarificación | 2-3 |
| 15 | Sharing Villainy (retención intencional de conocimiento) | MOD | Mediación + documentación | 3-5 |

---

## PARTE 4: ESTIMACIÓN EN SPRINT PLANNING

### Flujo Completo

#### Paso 1: Social Guide Prepara Items Sociales

**Antes del Sprint Planning** (1-2 días):
- Social Guide identifica community smells activos
- Estima SPS para cada uno
- Prepara propuesta de items sociales

**Documento preparado**:
```
PROPUESTA DE ITEMS SOCIALES - SPRINT [N]

Item 1: Mediación conflicto Dev A - Dev B
├─ Community Smell: Conflicto no resuelto
├─ Severidad: Moderada
├─ SPS Estimado: 5
└─ Justificación: Afecta code reviews, relación tensa desde Sprint N-2

Item 2: Establecer daily async standup
├─ Community Smell: Radio Silence
├─ Severidad: Moderada
├─ SPS Estimado: 4
└─ Justificación: Mejora comunicación equipo remoto, alinea con Foco

Item 3: Workshop de seguridad psicológica
├─ Community Smell: Inseguridad psicológica (leve)
├─ Severidad: Leve-Moderada
├─ SPS Estimado: 3
└─ Justificación: Preparación para próximas retrospectivas más auténticas
```

#### Paso 2: Sprint Planning - Sección Social (15 min)

```
Social Guide presenta:
"Tengo 3 items sociales estimados:
- Mediación (5 SPS)
- Daily async (4 SPS)
- Workshop seguridad psicológica (3 SPS)
Total: 12 SPS"

PO reacciona:
"¿Cuánto es 12 SPS en SP técnicos?"

Social Guide:
"Aproximadamente 12 SP. En términos de tiempo, son ~12 horas distribuidas."

Dev Team:
"Capacidad técnica: 40 SP. ¿Podemos hacer 28 SP técnico + 12 SPS social?"

SM:
"Sí, es factible si los items sociales se distribuyen bien en el Sprint."

Decisión:
- Comprometemos 5 SPS (mediación + daily async) este Sprint
- Pospone workshop 1 Sprint (para cuando Health Score haya mejorado)
```

---

### Paso 3: Registro en Jira/Backlog

**Los items sociales se registran en el mismo Backlog** con etiqueta `[SOCIAL]`.

**Formato de User Story Social**:

```
Title: [SOCIAL] Mediación conflicto Dev A - Dev B

Description:
Como [equipo de desarrollo],
Queremos [resolver conflicto constructivo entre Dev A y Dev B],
Para que [la colaboración mejore y el code review sea productivo].

Acceptance Criteria:
- [ ] Sesión 1:1 con Dev A completada (facilitada por Social Guide)
- [ ] Sesión 1:1 con Dev B completada (facilitada por Social Guide)
- [ ] Sesión conjunta con acuerdos documentados
- [ ] Acuerdos sobre estándares de código establecidos
- [ ] Retrospectiva de seguimiento programada para próximo Sprint

Story Points Social: 5 SPS

Definition of Done:
- Ambos devs refieren mejora en relación (0-10 scale: antes 3/10, después 6+/10)
- Code review es más constructivo (feedback de Dev A/B)
- Health Score "Respeto" sube de 4 a 6+

Assigned to: [Social Guide Name]
Sprint: [Sprint N]
Labels: SOCIAL, Conflict-Resolution, Priority-High
```

---

## PARTE 5: SEGUIMIENTO DE ITEMS SOCIALES

### Dashboard de Tracking

**En cada Daily Standup** (incluida pregunta social):

```
Daily Social Check-in (3 minutos):

Item en progreso: Mediación Dev A - Dev B (5 SPS)
├─ Status: IN_PROGRESS
├─ Completado:
│  ├─ 1:1 con Dev A ✓ (2 horas)
│  └─ 1:1 con Dev B ✓ (2 horas)
├─ En progreso:
│  └─ Sesión conjunta (programada para hoy, 3 PM, 2 horas)
├─ Bloqueantes: Ninguno
└─ Health Score (Respeto) actual: 4.5/10 (esperado 6+ después)

Item: Daily Async Standup (4 SPS)
├─ Status: READY_TO_START
├─ Comenzará: Mañana
├─ Duración: 2 horas (workshop + implementación)
└─ Responsable: SM + Social Guide
```

### Sprint Retrospective - Evaluación de Items Sociales

**Parte de la retrospectiva social** (20 minutos):

```
Social Guide presenta:
"Items sociales completados este Sprint:
1. Mediación Dev A - Dev B (5 SPS) - DONE
   - Dev A/B reportan mejora (3/10 → 6/10 relación)
   - Code review es más constructivo
   - Próximo: Seguimiento en 2 sprints

2. Daily Async Standup (4 SPS) - DONE
   - Implementado en Slack
   - Participación: 100% en primeros 2 días
   - Tiempo de respuesta QA: ↓ 40% (antes 24h, ahora 14h)

Impacto en Health Score:
- Respeto: 4/10 → 6/10 ✓ (mejora esperada)
- Foco: 5/10 → 6/10 ✓ (comunicación mejorada)
- General: 5.8/10 → 6.2/10"

Equipo reflexiona:
"¿Qué funcionó bien?"
"¿Qué haríamos diferente?"
"¿Qué items sociales para próximo Sprint?"
```

---

## PARTE 6: CONVERSIÓN SPS ↔ SP

### Tabla de Conversión

**Premisa**: 1 SPS ≈ 1 SP (en términos de tiempo)

**Cálculo de capacidad**:

```
Capacidad del equipo: 40 SP
Items técnicos comprometidos: 28 SP
Items sociales comprometidos: 12 SPS
────────────────────────────
Total: 28 + 12 = 40 equivalentes
→ Capacidad utilizada: 100% ✓
```

**Ejemplo de Sprint Planning**:

```
PO: "Tengo features que suman 35 SP. ¿Las tomamos?"
Dev Team: "Sí, pero Social Guide tiene items sociales."
Social Guide: "Propongo 5 SPS (5 horas)."

Cálculo:
- Capacidad: 40 SP
- Features: 35 SP
- Items sociales: 5 SPS
- Total: 35 + 5 = 40
→ Capacidad completa, aceptable

Dev Team: "Comprometemos 35 SP técnico + 5 SPS social."
```

---

## PARTE 7: CALIBRACIÓN POR EQUIPO

### Cada equipo debe calibrar SPS según contexto

**Factores de calibración**:
1. **Tamaño del equipo**: Equipos grandes requieren más tiempo en mediación
2. **Distributed vs. Co-located**: Equipos remotos requieren más comunicación
3. **Madurez emocional del equipo**: Equipos nuevos en SocialScrum requieren más facilitación
4. **Complejidad organizacional**: Organizaciones grandes requieren más coordinación

**Ejemplo de calibración**:

```
EQUIPO A (5 personas, co-located, experimentado con SocialScrum)
├─ 1 SPS = 1 hora (estimaciones más ajustadas)
├─ Mediación leve: 1-2 SPS (vs. 2-3 en otros equipos)
└─ Overhead de facilitación: bajo

EQUIPO B (15 personas, 100% remoto, nuevo en SocialScrum)
├─ 1 SPS = 1.5 horas (requiere overhead de coordinación)
├─ Mediación leve: 3-5 SPS (más complicado)
└─ Overhead de facilitación: alto

EQUIPO C (8 personas, híbrido, experimentado)
├─ 1 SPS = 1 hora
├─ Mediación leve: 2-3 SPS
└─ Overhead de facilitación: medio
```

**Proceso de calibración**:
1. Estimar 3-5 items sociales
2. Ejecutarlos durante 2-3 sprints
3. Comparar estimación vs. real
4. Ajustar factor de conversión

---

## PARTE 8: ERRORES COMUNES EN ESTIMACIÓN

### ❌ Error 1: Sobrestimar items sociales

**Problema**:
```
Social Guide estima "Workshop de cohesión" en 21 SPS
Dev Team: "¡Eso es una semana! No cabe en el Sprint"

Realidad: Workshop + implementación debería ser 3-5 SPS (4-8 horas)
```

**Solución**: Descomponer en items más pequeños.

---

### ❌ Error 2: Subestimar complejidad

**Problema**:
```
Social Guide estima "Resolver conflicto A-B" en 2 SPS
Realidad: Requiere 3 sesiones de mediación + 1:1 + seguimiento = 5+ SPS

Item no se completa en Sprint.
```

**Solución**: Considerar complejidad (individual vs. grupal, mediación vs. facilitación).

---

### ❌ Error 3: Mezclar items diferentes bajo mismo Story Point

**Problema**:
```
"Resolver comunicación del equipo" = 5 SPS
Pero incluye:
- Establecer normas (1 SPS)
- Implementar tool (2 SPS)
- Mediación de conflicto (5 SPS)
- Evaluación (1 SPS)
Total: 9 SPS, no 5
```

**Solución**: Descomponer en items más granulares.

---

### ✅ Mejores prácticas

1. **Estimar conservadoramente**: +20% buffer en estimaciones inciertas
2. **Descomponer items grandes**: Si > 8 SPS, descomponer
3. **Registrar real vs. estimado**: Aprender cada Sprint
4. **Ajustar calibración**: Después de 3-5 Sprints

---

## PARTE 9: TEMPLATE PARA CAP 4 (USO DIRECTO EN TESIS)

```latex
\subsection{Sistema de Estimación de Items Sociales (Story Points Sociales)}

En SocialScrum, items de deuda social se estiman en Story Points Sociales (SPS), 
utilizando una escala equivalente a la de Story Points técnicos. El principio 
fundamental es que 1 SPS consume aproximadamente el mismo tiempo que 1 SP técnico.

\subsubsection{Escala de Estimación}

La escala de SPS se basa en severidad de community smells y complejidad de 
intervención:

\begin{table}[h]
\centering
\begin{tabular}{|c|c|c|c|}
\hline
\textbf{SPS} & \textbf{Esfuerzo} & \textbf{Duración} & \textbf{Intervención} \\
\hline
1 & Mínimo & 1-2 horas & Conversación facilitada \\
2 & Bajo & 2-4 horas & Mediación leve \\
3 & Moderado & 4-8 horas & Workshop, retrospectiva \\
5 & Alto & 1-2 días & Mediación severa \\
8 & Muy Alto & 2-3 días & Intervención organizacional \\
13 & Crítico & 1 semana+ & Reestructuración completa \\
\hline
\end{tabular}
\end{table}

\subsubsection{Metodología de Estimación}

La estimación sigue tres pasos:

\begin{enumerate}
\item Identificar community smell a abordar
\item Evaluar severidad (leve/moderada/severa/crítica)
\item Evaluar complejidad (individual vs grupal, mediación especializada o no)
\end{enumerate}

\subsubsection{Ejemplos de Estimación}

Ejemplo 1: Conflicto interpersonal moderado
\begin{itemize}
\item Severidad: Moderada (2 personas)
\item Complejidad: Mediación requerida
\item SPS: 5 (3 horas de mediación directa + seguimiento)
\end{itemize}

Ejemplo 2: Establecer comunicación asincrónica
\begin{itemize}
\item Severidad: Moderada (mejora de proceso)
\item Complejidad: Workshop + implementación
\item SPS: 4 (2 horas de workshop + 2 de implementación)
\end{itemize}

\subsubsection{Registro de Items Sociales en Product Backlog}

Los items sociales se registran en el mismo Product Backlog que items técnicos, 
con etiqueta [SOCIAL] para identificación. Se utiliza formato de user story:

``Como [rol], Quiero [acción social], Para que [beneficio para equipo].''

\subsubsection{Seguimiento en Sprint}

En cada Daily Standup, se incluye breve check-in de items sociales. En Sprint 
Retrospective, se evalúa impacto de items completados en Health Score del equipo.

```

---

## CONCLUSIÓN

El sistema de estimación SPS permite:
1. **Comparabilidad**: Items sociales pueden priorizarse vs. técnicos
2. **Transparencia**: Equipo ve cuánto esfuerzo requiere deuda social
3. **Accountability**: Social Guide es responsable de estimaciones
4. **Mejora continua**: Real vs. estimado permite calibración

**Regla de oro**: "Las estimaciones malas mejoran con data real. Después de 3-5 Sprints, el equipo será experto."

