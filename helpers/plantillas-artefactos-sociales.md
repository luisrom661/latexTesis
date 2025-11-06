# PLANTILLAS DE ARTEFACTOS SOCIALES PARA SOCIALSCRUM (CAP 4)

## INTRODUCCIÓN

Este documento proporciona **plantillas operacionales** de los artefactos sociales de SocialScrum, listas para usar en Sprint Planning, seguimiento, y retrospectivas.

**Objetivo**: Facilitar la implementación práctica sin que cada equipo tenga que "inventar" cómo registrar deuda social.

---

## ARTEFACTO 1: PRODUCT BACKLOG SOCIAL (INTEGRATION EN JIRA)

### Descripción

El **Product Backlog Social** no es un backlog separado. Es el mismo Product Backlog con items sociales marcados con etiqueta `[SOCIAL]`.

### Plantilla en Jira

```
┌─────────────────────────────────────────────────────────────────┐
│ PRODUCT BACKLOG - EQUIPO: [Equipo Name] - Sprint [N]           │
└─────────────────────────────────────────────────────────────────┘

# ITEMS TÉCNICOS

[ ] TECH-001 | Como usuario, quiero pagar con tarjeta
    └─ Valor: 9 | SP: 13 | Priority: 1

[ ] TECH-002 | Como admin, quiero ver reportes de ventas
    └─ Valor: 7 | SP: 8 | Priority: 3

# ITEMS SOCIALES

[✓] SOCIAL-001 | [SOCIAL] Mediación conflicto Dev A - Dev B
    └─ Valor Social: Restaurar Respeto | SPS: 5 | Priority: 2

[✓] SOCIAL-002 | [SOCIAL] Implementar daily async standup
    └─ Valor Social: Mejorar comunicación | SPS: 4 | Priority: 4

[ ] SOCIAL-003 | [SOCIAL] Workshop de seguridad psicológica
    └─ Valor Social: Fortalecer confianza | SPS: 3 | Priority: 5
```

### Configuración en Jira

```
Issue Type: Story
Custom Fields:
├─ Type: SOCIAL vs TECHNICAL
├─ Story Points (para items técnicos)
├─ Social Points (para items sociales, escala 1-13)
├─ Community Smell (dropdown: Radio Silence, Conflict, etc.)
├─ Health Impact (campo que dice qué valor de Scrum aborda)
└─ Social Guide Assigned
```

---

## ARTEFACTO 2: USER STORY SOCIAL (FORMATO ESTÁNDAR)

### Plantilla Base

```
═══════════════════════════════════════════════════════════════
TÍTULO (User Story Social)
═══════════════════════════════════════════════════════════════

[SOCIAL] [Community Smell Name] - [Descripción Breve]

EJEMPLO:
[SOCIAL] Conflicto No Resuelto - Mediación Dev A y Dev B

───────────────────────────────────────────────────────────────
DESCRIPCIÓN
───────────────────────────────────────────────────────────────

Como [rol/equipo],
Quiero [acción social],
Para que [beneficio social que impacta al equipo].

EJEMPLO:
Como equipo de desarrollo,
Quiero resolver el conflicto entre Dev A y Dev B sobre estándares de código,
Para que el proceso de code review sea más constructivo y la relación 
interpersonal mejore.

───────────────────────────────────────────────────────────────
CONTEXT (Contexto del Smell)
───────────────────────────────────────────────────────────────

Community Smell Identificado: [Nombre exacto]
├─ Severidad: [LEVE / MODERADA / SEVERA / CRÍTICA]
├─ Indicador: [¿Cómo se manifestó?]
└─ Impacto en velocidad/calidad: [Cuantificable si es posible]

EJEMPLO:
Community Smell Identificado: Conflicto
├─ Severidad: MODERADA
├─ Indicador: Dev A y Dev B tienen tensión observable en code reviews,
│             comentarios se vuelven sarcásticos, pull requests se rechazan
│             sin retroalimentación constructiva
└─ Impacto: Code review tarda 2x más, calidad de cambios baja, 
            ambos Devs reportan frustración

───────────────────────────────────────────────────────────────
ACCEPTANCE CRITERIA (Criterios de Aceptación)
───────────────────────────────────────────────────────────────

☐ Sesión 1:1 con Dev A completada (facilitada por Social Guide)
  └─ Fecha: _____ | Duración: _____ | Notas: _____________

☐ Sesión 1:1 con Dev B completada (facilitada por Social Guide)
  └─ Fecha: _____ | Duración: _____ | Notas: _____________

☐ Sesión conjunta (mediación facilitada) completada
  └─ Fecha: _____ | Duración: _____ | Acuerdos documentados: ______

☐ Acuerdo explícito sobre estándares de código documentado
  └─ Ubicación: [Link a documento] | Firmado por ambas partes: SÍ/NO

☐ Código de conducta para code review establecido
  └─ Contenido: "Todo feedback será constructivo, específico, y sin tono punitivo"

☐ Seguimiento programado en próxima retrospectiva
  └─ Fecha: _____ | Preguntas: ¿Cómo evolucionó la relación? ¿Mejoraron PRs?

───────────────────────────────────────────────────────────────
DEFINITION OF DONE (Definición de Completado)
───────────────────────────────────────────────────────────────

Técnico (Aplicable):
☐ No aplica para items sociales puros

Proceso:
☐ Social Guide documentó el proceso de mediación
☐ Ambas partes consintieron los acuerdos
☐ Acuerdos fueron comunicados al equipo (sin detalles privados)
☐ Seguimiento fue programado

Medición:
☐ Encuesta a Dev A: "¿Cómo es la relación ahora?" (0-10 scale)
  └─ Antes: 3/10 | Después: 6+/10 ✓

☐ Encuesta a Dev B: "¿Cómo es la relación ahora?" (0-10 scale)
  └─ Antes: 3/10 | Después: 6+/10 ✓

☐ Métrica: Tiempo de code review ↓ 30% (antes: 2h, después: 1.2h)

☐ Health Score "Respeto": ↑ (antes 4/10, después 6/10)

───────────────────────────────────────────────────────────────
STORY POINTS SOCIAL (SPS)
───────────────────────────────────────────────────────────────

SPS Estimado: 5

Desglose:
├─ 1:1 Dev A: 1 hora
├─ 1:1 Dev B: 1 hora
├─ Sesión conjunta: 2 horas
├─ Documentación + seguimiento: 1 hora
└─ TOTAL: 5 SPS

───────────────────────────────────────────────────────────────
INFORMACIÓN OPERACIONAL
───────────────────────────────────────────────────────────────

Assigned to: [Social Guide Name]
Sprint: [Sprint N]
Priority: HIGH
Labels: SOCIAL, Conflict-Resolution, Respeto, Urgente

Community Smell Tags: Conflicto-No-Resuelto
Health Score Impact: Respeto (↑), Compromiso (↑)
Scrum Value Impactado: RESPETO

Target Completion: Antes de Day 5 del Sprint

───────────────────────────────────────────────────────────────
NOTAS Y REFERENCIAS
───────────────────────────────────────────────────────────────

Antecedentes:
- Sprint N-2: Dev A y Dev B comenzaron a tener diferencias
- Sprint N-1: Tensions visible en code reviews, 1 PR fue rechazado con tono áspero
- Sprint N: Social Guide identificó como Conflicto durante retrospectiva

Referencia a literatura:
- Mayer et al. (1995) - Confianza interpersonal
- Edmondson (1999) - Seguridad psicológica
- TAD - Dimensión de Relación (Relatedness)

Relacionado con:
- Item técnico: TECH-045 "Establecer code review standards"
- Item social anterior: SOCIAL-xxx "Radio Silence en equipo"

═══════════════════════════════════════════════════════════════
```

---

## ARTEFACTO 3: SPRINT BACKLOG SOCIAL

### Plantilla de Tracking Diario

```
┌─────────────────────────────────────────────────────────────────┐
│ SPRINT [N] - SOCIAL BACKLOG TRACKING                           │
│ Sprint Dates: [Inicio] - [Fin]                                 │
│ Team: [Equipo] | Social Guide: [Nombre]                       │
└─────────────────────────────────────────────────────────────────┘

ITEMS SOCIALES EN SPRINT
═════════════════════════════════════════════════════════════════

Item 1: Mediación Dev A - Dev B (SOCIAL-001)
├─ SPS: 5
├─ Status: 
│  ├─ Day 1-2: TODO
│  ├─ Day 3: 1:1 Dev A [✓] DONE (2h)
│  ├─ Day 3: 1:1 Dev B [✓] DONE (1h)
│  ├─ Day 4: Sesión conjunta [→] IN_PROGRESS
│  └─ Day 5: Documentación [□] TODO
├─ Bloqueantes: NINGUNO
├─ Progress: 3/5 SPS completados (60%)
└─ Health Score Impact:
   └─ Respeto: 4/10 → 6/10 (✓ objetivo alcanzado)

Item 2: Daily Async Standup (SOCIAL-002)
├─ SPS: 4
├─ Status:
│  ├─ Day 1: Diseño [✓] DONE (1h)
│  ├─ Day 2: Implementación en Slack [✓] DONE (1.5h)
│  ├─ Day 3-5: Testing y mejoras [→] IN_PROGRESS (1h/día)
│  └─ Day 5: Evaluación [□] TODO
├─ Bloqueantes: NINGUNO
├─ Progress: 2.5/4 SPS completados (62%)
└─ Health Score Impact:
   └─ Foco: 5/10 → 6/10 (en progreso)

Item 3: Workshop Seguridad Psicológica (SOCIAL-003)
├─ SPS: 3
├─ Status: POSTPONED (pospuesto para Sprint N+1)
├─ Razón: Health Score mejoró sin workshop. Mejor enfocar recursos 
│         en otros items. Se reevaluará en Sprint N+1.
├─ Progress: 0/3 SPS
└─ Decision: REMOVE FROM SPRINT

═════════════════════════════════════════════════════════════════

TOTAL ITEMS COMPROMETIDOS: 2 (Item 3 fue pospuesto)
TOTAL SPS COMPROMETIDOS: 9 SPS
TOTAL SPS COMPLETADOS: 5.5 SPS (hasta Day 4)
COMPLETITUD: 61% (esperar completitud 85-90% al final)

═════════════════════════════════════════════════════════════════
```

---

## ARTEFACTO 4: HEALTH SCORE DASHBOARD (SEMANAL)

### Plantilla de Seguimiento

```
┌─────────────────────────────────────────────────────────────────┐
│ HEALTH SCORE DASHBOARD - EQUIPO: [Name]                       │
│ Período: [Semana X] | Actualizado: [Fecha Hora]               │
└─────────────────────────────────────────────────────────────────┘

VALORES DE SCRUM - EVALUACIÓN SEMANAL
═════════════════════════════════════════════════════════════════

Openness/Franqueza: [████░░░░░] 6/10
├─ Tendencia: ↑ (era 5/10 semana anterior)
├─ Comunidad Smell Activo: Radio Silence (moderado)
├─ Indicador positivo: Equipo compartió en retrospectiva problemas de comunicación
└─ Acción: Implementar daily async standup

Compromiso: [████████░░] 8/10
├─ Tendencia: ↔ (estable)
├─ Comunidad Smell: NINGUNO
├─ Indicador positivo: Dev A y Dev B colaboraron en mediación
└─ Acción: Mantener apoyo mutuo

Respeto: [█████░░░░░] 5/10
├─ Tendencia: ↑ (era 4/10 semana anterior)
├─ Comunidad Smell Activo: Conflicto (moderado)
├─ Indicador positivo: Sesión 1:1 completadas, sesión conjunta en progreso
└─ Acción: Completar mediación, seguimiento en próxima retro

Foco: [███████░░░] 7/10
├─ Tendencia: ↑ (era 6/10)
├─ Comunidad Smell: NINGUNO detectado
├─ Indicador positivo: Equipo alineado en objetivo Sprint
└─ Acción: Mantener cohesión

Coraje: [██░░░░░░░░] 2/10
├─ Tendencia: ↓ (era 3/10)
├─ Comunidad Smell Activo: Lack of Conflict Resolution (severo)
├─ Indicador negativo: Equipo evita hablar de problemas difíciles
└─ Acción: URGENTE - Workshop de "Disagree and Commit"

───────────────────────────────────────────────────────────────────
RESUMEN GENERAL
───────────────────────────────────────────────────────────────────

HEALTH SCORE PROMEDIO: 5.6/10 (ACEPTABLE, MEJORANDO)
├─ Semana anterior: 5.1/10
├─ Tendencia: ↑ MEJORA
└─ Capacidad Estimada: ~80% de normal

CRÍTICO (Score < 4): CORAJE (2/10)
PREOCUPANTE (Score 4-5): RESPETO (5/10)
BUENO (Score 6-7): OPENNESS (6/10), FOCO (7/10)
EXCELENTE (Score 8+): COMPROMISO (8/10)

───────────────────────────────────────────────────────────────────
COMMUNITY SMELLS ACTIVOS
───────────────────────────────────────────────────────────────────

Severity | Smell Name | Manifestación | Item Social | Owner | ETA Fix
---------|------------|---------------|-------------|-------|----------
MODERADA | Radio Silence | Comunicación lenta | SOCIAL-002 | SM | Day 5
MODERADA | Conflicto | Tensión A-B | SOCIAL-001 | SG | Day 4
SEVERA   | Lack of Conflict Resolution | Evasión | TBD | SG | Sprint N+1

───────────────────────────────────────────────────────────────────
ACCIONES TOMADAS ESTA SEMANA
───────────────────────────────────────────────────────────────────

✓ 1:1 Dev A (completado) - Mejora en comunicación
✓ 1:1 Dev B (completado) - Clarificación de expectativas
→ Sesión conjunta (programada para mañana)
□ Daily async setup (en progreso)
□ Workshop de Coraje (pendiente para próxima semana)

───────────────────────────────────────────────────────────────────
CORRELACIÓN CON MÉTRICAS TÉCNICAS
───────────────────────────────────────────────────────────────────

Health Score: 5.6/10
Velocidad Predicha: 30-32 SP (vs. 40 SP normal)
Razón: Equipo en mediación reduce disponibilidad ~20%

Defects/1000 LOC: 2.3 (vs. 1.8 promedio)
Razón: Comunicación pobre (Radio Silence) causa malentendidos

Code Review Time: 1.8 horas/PR (vs. 1.2 horas normal)
Razón: Tensión A-B ralentiza reviews

┌─ CONCLUSIÓN: Invertir en mediación (SOCIAL-001) tendrá ROI 
│  positivo. Velocidad mejorará cuando Health Score ↑ 7+
└─

═════════════════════════════════════════════════════════════════
```

---

## ARTEFACTO 5: COMMUNITY SMELL REGISTRY (HISTÓRICO)

### Plantilla de Documentación

```
┌─────────────────────────────────────────────────────────────────┐
│ COMMUNITY SMELL REGISTRY - EQUIPO: [Name]                      │
│ Propósito: Histórico de smells, cómo fueron abordados          │
└─────────────────────────────────────────────────────────────────┘

SMELL #001: CONFLICTO (Dev A vs. Dev B)
═════════════════════════════════════════════════════════════════

Identificado en: Sprint N, Retrospectiva
Identificado por: Social Guide

Definición del Smell:
├─ Manifestación: Tensión visible entre Dev A y Dev B en code reviews,
│                  comentarios sarcásticos, PRs rechazadas sin retroalimentación
├─ Causa Raíz (5 Whys):
│  └─ Por qué están tensos?
│     └─ Diferencias sobre estándares de código
│        └─ Nunca discutieron explícitamente qué era aceptable
│           └─ Falta de claridad en Definition of Done
│              └─ PO no fue consultado antes de que devs asumieran estándares
└─ Community Smell Type: Conflicto (per Caballero-Espinosa et al.)

Severidad: MODERADA
├─ Afecta: 2 personas (Dev A, Dev B)
├─ Impacto: Code review lento (2x), calidad baja, relación interpersonal mala
└─ Riesgo: Si no se resuelve, puede escalar a SEVERA en 2-3 sprints

Aligned Health Score:
├─ Respeto: ↓ (4/10)
├─ Compromiso: ↓ (6/10)
└─ Coraje: ↓ (2/10) - nadie quiere hablar

Acción Tomada: SOCIAL-001 (Mediación)
├─ Item Social: SOCIAL-001 (Mediación Dev A - Dev B)
├─ SPS Estimado: 5
├─ Iniciado: Sprint N, Day 3
├─ Facilitador: [Social Guide Name]
└─ Resultado: En progreso

Resolución Esperada:
├─ Sesiones 1:1 completadas? [✓] Dev A [✓] Dev B
├─ Sesión conjunta? [→] En progreso (mañana)
├─ Acuerdos documentados? [□] Pendiente
├─ Seguimiento en retro? [□] Programado para Sprint N+1
└─ ETA Cierre: Sprint N, Day 5

Post-Mortem (después de resolver):
├─ ¿Qué funcionó?
├─ ¿Qué no funcionó?
└─ ¿Cómo prevenimos recurrencia?

═════════════════════════════════════════════════════════════════

SMELL #002: RADIO SILENCE
═════════════════════════════════════════════════════════════════

[Formato igual al anterior...]

═════════════════════════════════════════════════════════════════
```

---

## ARTEFACTO 6: RETROSPECTIVA SOCIAL - NOTAS DE FACILITACIÓN

### Plantilla para Social Guide

```
┌─────────────────────────────────────────────────────────────────┐
│ SPRINT RETROSPECTIVE SOCIAL - NOTAS FACILITACIÓN               │
│ Sprint: [N] | Date: [Fecha] | Facilitador: [SG Name]          │
└─────────────────────────────────────────────────────────────────┘

PRE-RETROSPECTIVA (Preparación)
═════════════════════════════════════════════════════════════════

Health Score Actual: 5.6/10
├─ Crítico: Coraje (2/10)
├─ Preocupante: Respeto (5/10)
└─ Items completados: SOCIAL-001 (mediación en progreso), 
                      SOCIAL-002 (daily async implementado)

Community Smells para Discutir:
├─ Conflicto (Dev A-B) → ¿Mejoras?
├─ Radio Silence → Evaluación de daily async
└─ Lack of Conflict Resolution → Exploración profunda

Preguntas Preparadas:
├─ "¿Qué pasó con la tensión A-B? ¿Mejora?"
├─ "¿El daily async está ayudando?"
├─ "¿Por qué la gente evita hablar de problemas difíciles?"
└─ "¿Qué necesitamos para tener más Coraje?"

Participantes Esperados: 5 (Team + SG + SM)
Duración: 1.5 horas (45 min técnico, 45 min social)

═════════════════════════════════════════════════════════════════

DURANTE RETROSPECTIVA
═════════════════════════════════════════════════════════════════

PARTE TÉCNICA (45 min - SM facilita):
├─ ¿Qué fue bien técnicamente?
│  └─ Feature A entregada con calidad
│  └─ Velocity mejoró respecto a Sprint N-1
│
├─ ¿Qué fue difícil?
│  └─ Bug en deployment retrasó release
│  └─ Testing tomo más tiempo del estimado
│
└─ Acciones propuestas:
   └─ (Registrar aquí después)

PARTE SOCIAL (45 min - SG facilita):
├─ Dashboard presentado: Health Score 5.6/10
│
├─ Análisis de items completados:
│  ├─ SOCIAL-001 (Mediación A-B): "¿Cambios en relación?"
│  │  └─ Dev A: "Sí, es mejor. Aclaramos qué esperaba cada uno."
│  │  └─ Dev B: "De acuerdo. Espero que se mantenga."
│  │
│  └─ SOCIAL-002 (Daily async): "¿Funciona?"
│     └─ Team: "Sí, es mejor que reunión. +Flexibilidad."
│     └─ SG: "Medimos: Respuesta QA ↓ 40%, particip ↑ 100%"
│
├─ Análisis de community smells:
│  ├─ Conflicto (A-B): Status = MEJORANDO (was 1/10, now 6/10)
│  ├─ Radio Silence: Status = RESUELTO (was 3/10, now 6/10)
│  └─ Lack of Conflict Resolution: Status = CRÍTICO (2/10)
│     └─ Pregunta: "¿Por qué no hablamos de problemas difíciles?"
│     └─ Dev C: "Tengo miedo de que se vea como queja."
│     └─ SG: "Eso es Falta de Seguridad Psicológica. Necesitamos trabajar en eso."
│
├─ Hipótesis de causa raíz:
│  └─ Lack of Conflict Resolution ← Inseguridad Psicológica
│     └─ "Si hablo, ¿me va a castigar?"
│     └─ Anterior: Manager fue punitivo con feedback
│     └─ Ahora: Nuevo manager es neutral, pero team aún tiene memoria
│
└─ Acciones propuestas:
   └─ SOCIAL-004: Workshop "Disagree and Commit" (3 SPS)
   └─ SOCIAL-005: Establecer Código de Conducta explícito (2 SPS)

═════════════════════════════════════════════════════════════════

POST-RETROSPECTIVA (Compilación de acciones)
═════════════════════════════════════════════════════════════════

Items Sociales para próximo Sprint (N+1):
├─ [SOCIAL-004] Workshop "Disagree and Commit" (SPS: 3)
│  └─ Owner: SG | Priority: HIGH
│
└─ [SOCIAL-005] Código de Conducta Explícito (SPS: 2)
   └─ Owner: Team + SG | Priority: MEDIUM

Items Técnicos (responsabilidad SM + PO):
├─ [TECH-xxx] Mejorar testing process (SP: 5)
├─ [TECH-xxx] Fix deployment pipeline (SP: 8)
└─ ...

Health Score Esperado Sprint N+1:
├─ Openness: 6/10 → 7/10 (estable con daily async)
├─ Compromiso: 8/10 → 8/10 (estable)
├─ Respeto: 5/10 → 6+/10 (mediante workshop + código)
├─ Foco: 7/10 → 7/10 (estable)
└─ Coraje: 2/10 → 4-5/10 (goal: sacar de crítico)

PROMEDIO ESPERADO: 5.6/10 → 6.6/10

Seguimiento Próxima Retro:
├─ Preguntar a Dev A/B: "¿Se mantiene la mejora?"
├─ Evaluar efectividad de daily async (2 semanas después)
└─ Medir Coraje después de workshop (proxies: "¿me siento seguro para hablar?")

═════════════════════════════════════════════════════════════════

NOTAS ADICIONALES

Observaciones del Facilitador:
├─ El equipo está más abierto que hace 2 sprints (positivo)
├─ Aún hay miedo subyacente (negativo)
├─ Dev C verbalizó miedo de represalias (importante atender)
└─ Mediación A-B fue exitosa, puede ser modelo para otros conflictos

Decisiones Tomadas:
├─ Priorizar Coraje en Sprint N+1 (es el más crítico)
├─ Combinar Respeto + Coraje = Workshop combinado
└─ Considerar sesión con manager anterior sobre su estilo de feedback

Escalaciones (si aplica):
├─ N/A esta retro

═════════════════════════════════════════════════════════════════
```

---

## ARTEFACTO 7: ONE-PAGER PARA STAKEHOLDERS (Reporte Mensual)

### Plantilla de Comunicación Ejecutiva

```
┌─────────────────────────────────────────────────────────────────┐
│ REPORTE DE SALUD SOCIAL - EQUIPO: [Name]                      │
│ Mes: [Mes/Año] | Para: CTO / VP Engineering                   │
└─────────────────────────────────────────────────────────────────┘

EXECUTIVE SUMMARY (Párrafo 1-2)
═════════════════════════════════════════════════════════════════

El equipo [Name] ha mejorado su Health Score de 4.8/10 (mes anterior) 
a 5.8/10 (mes actual). Se han completado 2 items sociales críticos 
(mediación de conflicto, implementación de comunicación async), 
lo que resultó en mejora observable de colaboración y velocidad.

Velocidad Técnica:
├─ Mes anterior: 35 SP (Health Score 4.8, equipo bajo presión)
└─ Mes actual: 38 SP (Health Score 5.8, equipo estabilizado)
   └─ Correlación: Health Score ↑ 1 punto = Velocity ↑ 3 SP (~8% mejora)

═════════════════════════════════════════════════════════════════

HEALTH METRICS
═════════════════════════════════════════════════════════════════

[GRÁFICO] Health Score Trending (3 meses)

  10 |
     |           ← OBJETIVO
   9 |      
   8 |      
   7 |
   6 |          ╱╱
   5 |      ╱╱╱
   4 |  ╱╱╱
   3 |
   2 |
   1 |
     └─────────────────
       M-2   M-1   M0

Valores por Componente (Mes Actual):

Openness/Franqueza:     [████████░░] 6/10 ↑
Compromiso:             [██████████] 8/10 ↑
Respeto:                [██████░░░░] 6/10 ↑
Foco:                   [███████░░░] 7/10 ↔
Coraje:                 [███░░░░░░░] 3/10 ↓

PROMEDIO: 5.8/10

═════════════════════════════════════════════════════════════════

ITEMS SOCIALES COMPLETADOS ESTE MES
═════════════════════════════════════════════════════════════════

✓ Mediación de conflicto Dev A - Dev B
  └─ Resultado: Relación mejoró 3/10 → 6/10 en 1 semana
  └─ Impacto: Code review volvió a ritmo normal

✓ Implementación de daily async standup
  └─ Resultado: Respuesta QA ↓ 40%, participación 100%
  └─ Impacto: Comunicación más fluida

PRESUPUESTO SOCIAL (mes):
├─ Items sociales: 9 SPS (~9 horas)
├─ Sesiones adicionales: 3 horas
└─ TOTAL: 12 horas (~3% de capacidad mensual)

═════════════════════════════════════════════════════════════════

PRÓXIMAS ACCIONES (Próximo Mes)
═════════════════════════════════════════════════════════════════

CRÍTICO (hacer inmediatamente):
├─ [ ] Workshop "Disagree and Commit" para elevar Coraje
└─ [ ] Establecer Código de Conducta Explícito

IMPORTANTE (semanas 2-3):
├─ [ ] Seguimiento mediación A-B (sostener mejora)
└─ [ ] Evaluación de daily async (ajustes si es necesario)

DESEABLE (mes siguiente):
└─ [ ] Team building event (reforzar cohesión)

═════════════════════════════════════════════════════════════════

RIESGOS Y MITIGACIONES
═════════════════════════════════════════════════════════════════

Riesgo: Si Coraje permanece en 3/10, equipo no aceptará cambios
Mitigación: Workshop dedicado + seguimiento semanal

Riesgo: Mediación A-B no se mantiene si hay presión nueva
Mitigación: Seguimiento en próximas 2 retrospectivas

═════════════════════════════════════════════════════════════════

RECOMENDACIÓN
═════════════════════════════════════════════════════════════════

CONTINUAR con inversión en SocialScrum. ROI es claro:
- Health Score ↑ 1 punto = Velocity ↑ ~3 SP (~8% mejora)
- Rotation risk ↓ (team está más motivado)
- Quality likely ↑ (mejor comunicación = menos bugs)

Siguiente Revisión: [Fecha mes siguiente]

═════════════════════════════════════════════════════════════════
```

---

## CONCLUSIÓN

Estas plantillas pueden ser copiadas directamente en:
- **Jira**: Para items y seguimiento
- **Confluence**: Para documentación
- **Google Sheets/Excel**: Para dashboards
- **GitHub**: Para historial de decisiones

**Recomendación**: Personaliza según tu contexto, pero mantén la estructura core para consistencia.

