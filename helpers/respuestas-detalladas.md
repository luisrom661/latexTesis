# RESPUESTAS DETALLADAS A TUS PREGUNTAS + SOLUCIONES PRÁCTICAS

## ORGANIZACIÓN GENERAL: CAPÍTULO 3 vs. CAPÍTULO 4

**Tu intuición es CORRECTA**. Basándome en lo que me dices:

- **Capítulo 3**: Fundamentos teóricos, justificación del marco, qué es SocialScrum y por qué existe
- **Capítulo 4**: Aplicación práctica, métricas, catálogos, plantillas, operacionalización detallada
- **Capítulo 5**: Validación con juicio de expertos

**Estructura recomendada**:

```
Cap 3: SocialScrum - Fundamentos y Diseño del Marco
├─ Qué es (conceptual)
├─ Por qué existe (justificación teórica: TAD, Mayer, Valores)
├─ Estructura general (roles, eventos, artefactos) → OVERVIEW, no detalle
└─ Fundamentos empíricos aplicados

Cap 4: Aplicación de SocialScrum en Equipos Ágiles
├─ Operacionalización de eventos (flujos detallados, tiempos, facilitadores)
├─ Métricas y dashboard de salud social
├─ Catálogo operacional de community smells (cheatsheet)
├─ Plantillas de artefactos (user stories sociales, estimation, DoD)
├─ Escalabilidad y adaptación a contextos
├─ Consideraciones de implementación (resistencias, ROI, ética)
└─ Caso de estudio o aplicación piloto

Cap 5: Validación por Juicio de Expertos
├─ Metodología de validación
├─ Panel de expertos (quiénes, criterios)
├─ Resultados y análisis
└─ Ajustes al marco basados en feedback
```

**Veredicto**: Tu estructura Cap 3 → Cap 4 → Cap 5 es **CORRECTA**. Mi evaluación ahora tiene más sentido: Cap 3 está bien como fundamentos, pero Cap 4 debe ser robusto en operacionalización.

---

## SECCIÓN 2: LO BUENO

### 2.1 Eventos Adaptados

**Tu decisión**: Dejar overview en Cap 3, detalle en Cap 4.

**Mi veredicto**: ✅ **CORRECTO**. Pero asegúrate de que en Cap 3 dejas claro que "el detalle operacional se desarrolla en Cap 4". Así el lector no siente que falta información.

**Sugerencia para Cap 3**: Agregar al final de cada descripción de evento:
> "La operacionalización detallada de este evento (flujo, tiempos, facilitadores, preguntas específicas) se presenta en la Sección 4.X"

Esto genera expectativa y coherencia estructural.

---

### 2.2 Otras Teorías (Bandura, Csikszentmihalyi)

**Tu pregunta**: ¿Debería ponerlas?

**Mi respuesta**: **OPCIONAL, pero recomendable para rigor académico**.

**Razón**:
- Un evaluador riguroso preguntará: "¿Por qué TAD y no Self-Efficacy (Bandura) o Flow (Csikszentmihalyi)?"
- Si no mencionas alternativas, parece que TAD fue tu única opción (no que la evaluaste vs. otras)

**Solución pragmática**: Agregar **una subsección corta (1-2 páginas)** en Cap 3:

```latex
\subsubsection{Alternativas Consideradas y Justificación de TAD}

Durante el diseño de SocialScrum, se consideraron tres marcos teóricos 
principales para explicar la motivación en equipos de desarrollo:

1. **Self-Efficacy Theory (Bandura, 1997)**: Se centra en la creencia 
   individual de capacidad para ejecutar tareas. Sin embargo, se enfoca 
   en competencia individual, no en dinámicas de equipo ni necesidades 
   sociales.

2. **Flow Theory (Csikszentmihalyi, 1990)**: Explica estados de inmersión 
   óptima en tareas desafiantes. Útil para entender engagement, pero no 
   proporciona marco para necesidades psicológicas específicas ni gestión 
   de deuda social.

3. **Self-Determination Theory (Deci & Ryan, 2000)**: Proporciona tres 
   necesidades psicológicas universales (Autonomía, Competencia, Relación) 
   que son directamente mapeables a community smells y valores de Scrum. 
   Además, ha sido validada específicamente en contextos de desarrollo 
   ágil (Arndt et al., 2020).

Por estas razones, TAD fue seleccionada como fundamento psicológico principal.
```

**¿Es crítico?** No. Pero mejora la percepción de rigor.

---

### 2.3 Modelo de Confianza (Mayer)

#### 2.3.1 ¿TAD + H-B-I son complementarios?

**Tu intuición**: Sí, trataste de justificarlo.

**Mi análisis**: Sí son complementarios **pero la diferencia es sutil y necesita ser explicitada**.

**El problema**:
- TAD: Autonomía, Competencia, Relación → Necesidades psicológicas
- H-B-I: Habilidad, Benevolencia, Integridad → Dimensiones de confianza

**Parecen solaparse**:
- Competencia (TAD) vs. Habilidad (H-B-I): ¿son iguales?
- Relación (TAD) vs. Benevolencia (H-B-I): ¿son iguales?

**La diferencia**:
- **TAD describe necesidades internas** (lo que una persona necesita para estar motivada)
- **H-B-I describe percepción externa** (lo que otros perciben de una persona para confiar en ella)

**Solución: Agregar párrafo explicativo**:

```latex
Es importante distinguir entre las necesidades psicológicas de TAD y las 
dimensiones de confianza de Mayer. Mientras que TAD describe necesidades 
internas (lo que cada persona requiere para mantener motivación intrínseca), 
el modelo H-B-I describe percepciones externas (lo que otros evalúan al decidir 
confiar).

Por ejemplo:
- **Competencia (TAD)** es la percepción interna de capacidad ("siento que 
  puedo hacer esto")
- **Habilidad (H-B-I)** es la percepción externa de capacidad ("creo que 
  [otra persona] puede hacer esto")

Esta distinción es crítica: un equipo puede tener alta competencia individual 
(TAD) pero baja confianza mutua (H-B-I) si no hay visibilidad de habilidades 
entre miembros (transparencia).
```

**Veredicto**: ✅ Son complementarios, pero necesitas explicitar la diferencia.

---

#### 2.3.2 ¿Es Mayer (1995) dated? ¿Kim et al. es mejor?

**Respuesta corta**: Mayer (1995) es clásico y ampliamente citado. Kim et al. (2006-2009) es más reciente y específico para equipos distribuidos.

**Comparación**:

| Aspecto | Mayer et al. (1995) | Kim et al. (2006-2009) |
|---|---|---|
| **Enfoque** | Confianza interpersonal general | Confianza en equipos virtuales/distribuidos |
| **Dimensiones** | Habilidad, Benevolencia, Integridad | Swift Trust, Knowledge-based Trust, Identification-based Trust |
| **Validación** | 15,000+ citaciones | 2,000+ citaciones |
| **Aplicabilidad** | Contextos presenciales y virtuales | Específico para equipos remotos |

**Mi recomendación**: 
- Si tus equipos objetivo son **presenciales o híbridos**: Mayer es suficiente y más reconocido.
- Si tus equipos objetivo son **100% distribuidos**: Agregar mención a Kim et al. fortalece.

**Solución pragmática**: Agregar nota al pie o párrafo corto:

```latex
Para equipos distribuidos, Kim et al. (2006, 2009) proponen una 
tipología específica de confianza (swift, knowledge-based, identification-based) 
que complementa el modelo H-B-I de Mayer. Sin embargo, dado que SocialScrum 
está diseñado para equipos tanto presenciales como distribuidos, el modelo 
de Mayer proporciona una base más generalizable.
```

**Veredicto**: Mayer está bien. Mención a Kim et al. es opcional pero recomendable.

---

### 2.4 Aplicación de Valores a Smells: ¿Métricas en Cap 3 o Cap 4?

**Tu decisión**: Métricas en Cap 4.

**Mi veredicto**: ✅ **CORRECTO**. Pero en Cap 3 debes **anunciar que existirán**.

**Solución**: Al final de la sección de Valores en Cap 3, agregar:

```latex
La operacionalización de estos valores mediante indicadores cuantitativos 
y cualitativos (escalas de medición, preguntas de evaluación, umbrales de 
acción) se presenta en detalle en el Capítulo 4, Sección 4.X.
```

---

## SECCIÓN 3: LO REGULAR

### 3.1, 3.2, 3.3 Métricas, Escalabilidad, Catálogo de Smells

**Tu decisión**: Todo va en Cap 4.

**Mi veredicto**: ✅ **CORRECTO**. Cap 3 = fundamentos; Cap 4 = operacionalización.

**Pero**: Asegúrate de que Cap 4 sea **robusto**. Si Cap 4 también es superficial, entonces el problema persiste.

---

### 3.4 Rol del Product Owner: TUS PREGUNTAS

#### 3.4.1 ¿Cómo prioriza PO entre feature nuevo y mitigación de aislamiento social?

**Tu respuesta**: No sabes. Necesitas ayuda.

**Mi propuesta**: Crear un **framework de priorización social-técnica**.

**Solución: "Triángulo de Priorización SocialScrum"**

```
         VALOR DE NEGOCIO
              /\
             /  \
            /    \
           /      \
          /________\
    URGENCIA      SALUD
    TÉCNICA       SOCIAL
```

**Criterios de priorización**:

1. **Valor de Negocio** (clásico en Scrum): ¿Cuánto valor genera este ítem para el cliente/usuario?
2. **Urgencia Técnica**: ¿Es bloqueante? ¿Deuda técnica crítica?
3. **Salud Social**: ¿Es la deuda social tan crítica que afecta capacidad de entrega?

**Matriz de decisión**:

| Valor Negocio | Urgencia Técnica | Salud Social | Prioridad | Ejemplo |
|---|---|---|---|---|
| ALTO | ALTO | BAJO | **ALTA** | Feature crítico, sin impedimento social |
| ALTO | BAJO | ALTO | **ALTA** | Feature valioso pero equipo en crisis (burnout) → mitigar primero |
| BAJO | ALTO | ALTO | **MEDIA** | Bug técnico + conflicto no resuelto → ambos son urgentes |
| BAJO | BAJO | ALTO | **MEDIA-BAJA** | Deuda social moderada, no bloqueante |
| ALTO | BAJO | BAJO | **ALTA** | Feature valioso, equipo sano → avanzar |

**Regla de oro**:
> "Si la salud social está por debajo del umbral crítico (Health Score < 4/10), 
> NO se pueden comprometer features de alta complejidad. Primero se mitiga 
> la deuda social hasta Health Score ≥ 6/10."

**Ejemplo concreto**:

```
Sprint Planning:
- PO quiere priorizar "Integración con API de Pagos" (valor alto, complejidad alta)
- Social Guide reporta: "Equipo tiene conflicto no resuelto entre Dev A y Dev B. 
  Health Score actual = 3.5/10 (crítico)"

Decisión:
- PO + Social Guide + Scrum Master acuerdan:
  1. Sprint Goal principal: "Restaurar salud social del equipo"
  2. Incluir: "Mediación de conflicto A-B" (estimado: 4 horas facilitación)
  3. Incluir: "Código de conducta explícito" (estimado: 2 horas discusión)
  4. Feature de Pagos se POSPONE para siguiente Sprint

Justificación: Un equipo en crisis no puede entregar features complejas con calidad.
```

---

#### 3.4.2 ¿Quién tiene autoridad final—PO o Social Guide?

**Tu respuesta**: El Social Guide es experto pero no tiene "autoridad", da razones justificadas al PO.

**Mi análisis**: Esto es **colaboración tripartita: PO + Social Guide + Scrum Master**.

**Modelo propuesto**:

```
┌─────────────────────────────────────────────────────────┐
│         TRIÁNGULO DE RESPONSABILIDAD                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│            PRODUCT OWNER                                │
│            Autoridad: Valor de Negocio                  │
│            Decide: Qué features entregar                │
│                       ▲                                 │
│                      / \                                │
│                     /   \                               │
│                    /     \                              │
│                   /       \                             │
│         SCRUM MASTER ◄──► SOCIAL GUIDE                 │
│         Autoridad:         Autoridad:                   │
│         Proceso Scrum      Salud Social                 │
│         Decide:            Decide:                      │
│         Cómo trabajar      Cuándo intervenir            │
│                            socialmente                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Reglas de colaboración**:

1. **PO tiene autoridad sobre QUÉ se entrega** (features, priorización de valor)
2. **Social Guide tiene autoridad sobre CUÁNDO el equipo puede comprometerse** (salud social mínima)
3. **Scrum Master tiene autoridad sobre CÓMO se trabaja** (proceso Scrum, facilitación)

**Protocolo de discrepancia**:

```
SI (PO quiere priorizar Feature X) Y (Social Guide dice "equipo no está listo"):
  ENTONCES:
    1. Social Guide presenta evidencia (Health Score, community smells críticos)
    2. PO presenta justificación (valor de negocio, urgencia cliente)
    3. Scrum Master facilita discusión
    4. Decisión consensuada basada en:
       - ¿El valor de negocio justifica el riesgo social?
       - ¿Podemos mitigar la deuda social EN PARALELO a la entrega?
       - ¿Hay alternativa (MVP más simple que reduce riesgo)?
    5. Si no hay consenso: ESCALA a nivel organizacional (CTO, VP Engineering)
```

**Veredicto**: No es "quién manda", es **colaboración con áreas de autoridad claras**.

---

#### 3.4.3 ¿Cómo se estiman items de deuda social? ¿Aparecen en Product Backlog?

**Tu respuesta**: Sí aparecen. Estimación según experiencia del Social Guide. Necesitas framework.

**Mi propuesta**: Crear **sistema de estimación para items sociales**.

**SOLUCIÓN: "Story Points Sociales" (SPS)**

**Escala de estimación social** (similar a Fibonacci):

| SPS | Esfuerzo | Duración | Tipo de Intervención |
|---|---|---|---|
| **1** | Mínimo | 1-2 horas | Conversación facilitada, ajuste menor de proceso |
| **2** | Bajo | 2-4 horas | Mediación de conflicto leve, establecer norma de equipo |
| **3** | Moderado | 4-8 horas (1 día) | Workshop de cohesión, retrospectiva profunda, código de conducta |
| **5** | Alto | 1-2 días | Mediación de conflicto severo, reestructuración de comunicación |
| **8** | Muy Alto | 2-3 días | Intervención organizacional, cambio de estructura de equipo |
| **13** | Crítico | 1 semana+ | Reestructuración completa, probable rotación de personal |

**Ejemplos de estimación**:

```
Item: "Resolver conflicto entre Dev A y Dev B sobre estándares de código"
├─ Severidad: Moderada (afecta code reviews, genera tensión)
├─ Intervención: Mediación facilitada por Social Guide
├─ Estimación: 3 SPS (4-8 horas)
├─ Incluye:
│  ├─ Sesión 1:1 con Dev A (1 hora)
│  ├─ Sesión 1:1 con Dev B (1 hora)
│  ├─ Sesión conjunta facilitada (2 horas)
│  ├─ Seguimiento en próxima retrospectiva (1 hora)
│  └─ Documentación de acuerdos (1 hora)
└─ Definition of Done:
   ├─ Ambos Devs acuerdan estándares comunes
   ├─ Code review funciona sin tensión
   └─ Health Score "Respeto" sube de 4 a 6+

---

Item: "Implementar comunicación asincrónica con equipo remoto de QA"
├─ Severidad: Alta (silos organizacionales, retrasos en deployment)
├─ Intervención: Reestructuración de comunicación
├─ Estimación: 5 SPS (1-2 días)
├─ Incluye:
│  ├─ Análisis de patrones actuales de comunicación (4 horas)
│  ├─ Diseño de nuevo flujo (Slack channels, daily async standup) (2 horas)
│  ├─ Workshop con ambos equipos (Dev + QA) (4 horas)
│  ├─ Implementación y ajuste (8 horas distribuidas)
│  └─ Evaluación después de 1 Sprint (2 horas)
└─ Definition of Done:
   ├─ Daily async standup funcionando
   ├─ Tiempo de respuesta QA ↓ 50%
   └─ Health Score "Foco" sube de 5 a 7+
```

**¿Dónde aparecen en Product Backlog?**

**Opción 1: Backlog Unificado** (recomendado para equipos pequeños)
- Items técnicos + items sociales en el mismo backlog
- Etiqueta: [SOCIAL] para identificar

**Opción 2: Social Backlog Separado** (para equipos grandes)
- Backlog técnico gestionado por PO
- Backlog social gestionado por Social Guide
- Ambos se sincronizan en Sprint Planning

**Mi recomendación**: Opción 1 (Backlog Unificado), porque:
- Transparencia total
- PO ve impacto de deuda social en capacidad
- No crea silos

---

#### 3.4.4 ¿Qué si PO y Social Guide discrepan?

**Tu respuesta**: Scrum Master debe intervenir.

**Mi análisis**: ✅ Correcto. Scrum Master es facilitador neutral.

**Protocolo detallado** (ver 3.4.2 arriba). Resumiendo:
1. Social Guide presenta evidencia
2. PO presenta justificación
3. Scrum Master facilita
4. Decisión consensuada
5. Si no hay consenso: escalación organizacional

---

## SECCIÓN 4: LO MALO

### 4.1 Resistencia Organizacional

**Tu respuesta**: No sabes si debe ir aquí. Crees que puede ir en otro momento.

**Mi recomendación**: **Cap 4, Sección "Consideraciones de Implementación"**.

**Razón**: Cap 3 es fundamentos teóricos; Cap 4 es práctica real. En práctica real, resistencia ES un tema.

**Contenido sugerido para Cap 4**:

```latex
\subsection{Barreras de Implementación y Estrategias de Adopción}

La implementación de SocialScrum enfrenta resistencias organizacionales 
predecibles. Esta sección identifica las más comunes y propone estrategias 
de mitigación.

\subsubsection{Resistencia 1: "Esto es responsabilidad de HR, no de Ingeniería"}

**Origen**: Percepción de que dinámicas sociales son dominio de Recursos Humanos.

**Impacto**: Managers de ingeniería rechazan adopción.

**Estrategia de mitigación**:
- Presentar datos de correlación: Health Social Score vs. Velocidad
- Evidencia: Equipos con Health Score 8+ tienen 20-30% más velocidad
- Argumento: "No es HR, es ingeniería de procesos ágiles"

\subsubsection{Resistencia 2: "¿Cómo justificamos el ROI?"}

**Origen**: Costo de contratar/entrenar Social Guide.

**Estrategia de mitigación**:
- Calcular costo de rotación de personal (2-3x salario anual por persona)
- Mostrar que 1 Social Guide (salario X) previene rotación de 2-3 personas/año
- ROI positivo en 6-12 meses

\subsubsection{Resistencia 3: "Cultura de resultados a cualquier costo"}

**Origen**: Organizaciones que priorizan entrega sobre bienestar.

**Estrategia de mitigación**:
- No forzar adopción en organizaciones tóxicas (es inútil)
- Piloto en equipos voluntarios
- Evidencia de que equipos sanos entregan MÁS y MEJOR
```

---

### 4.2 Validación Empírica

**Tu respuesta**: Cap 4 tiene caso de estudio. Cap 5 tiene juicio de expertos.

**Mi veredicto**: ✅ **PERFECTO**. Eso es exactamente lo que necesitas.

**Asegúrate de que Cap 4 incluya**:
- Estudio con al menos 1 equipo real (idealmente 2-3)
- Datos pre/post (Health Score antes y después)
- Correlación con métricas técnicas (velocidad, bugs, etc.)

---

### 4.3 Artefactos

**Tu respuesta**: Se desarrolla en Cap 4.

**Mi veredicto**: ✅ Correcto.

---

## SECCIÓN 5: LO PERVERSO

### 5.1 Potencial de Manipulación Social

**Tu respuesta**: "Me has dado en el clavo. Necesito ayuda para crear prevención."

**SOLUCIÓN: Salvaguardas Éticas para SocialScrum**

Esto es **CRÍTICO**. Voy a crear un framework completo.

#### **Principio 1: Confidencialidad de Sesiones Sociales**

**Regla**:
> "Toda información compartida en eventos sociales (Daily Social, Retro Social) 
> es CONFIDENCIAL. No puede usarse para evaluaciones de desempeño ni decisiones 
> de contratación/despido."

**Implementación**:
- Social Guide firma acuerdo de confidencialidad
- Sesiones sociales son "espacio seguro" (similar a terapia)
- Solo se reportan AGREGADOS (Health Score promedio), nunca información individual

**Ejemplo**:
```
❌ PROHIBIDO: "Dev A dijo en Retro Social que está desmotivado" → reportar a HR
✅ PERMITIDO: "Health Score del equipo es 4.5. Valor 'Compromiso' está crítico"
```

---

#### **Principio 2: Rendición de Cuentas del Social Guide**

**Regla**:
> "El Social Guide reporta al Scrum Master o CTO, NO a Recursos Humanos."

**Razón**: Si reporta a HR, hay conflicto de interés (HR evalúa desempeño).

**Estructura organizacional**:
```
CEO
 ├─ CTO/VP Engineering
 │   ├─ Scrum Master
 │   │   └─ Social Guide (reporta aquí)
 │   └─ Product Owner
 │
 └─ CHRO (Recursos Humanos)
     └─ NO tiene autoridad sobre Social Guide
```

---

#### **Principio 3: Transparencia de Reportes**

**Regla**:
> "El equipo tiene acceso completo a todos los reportes que el Social Guide genera."

**Implementación**:
- Dashboard de Health Score es visible para el equipo
- Community smells identificados son discutidos abiertamente
- No hay "reportes secretos"

---

#### **Principio 4: Consentimiento Informado**

**Regla**:
> "El equipo debe consentir explícitamente la adopción de SocialScrum."

**Implementación**:
- Antes de implementar, sesión de explicación
- Equipo vota (mayoría ≥ 70% aprueba → se implementa)
- Derecho a opt-out individual (alguien puede no participar en sesiones sociales)

---

#### **Principio 5: Auditoría Externa**

**Regla**:
> "Cada 6 meses, auditoría independiente evalúa si el Social Guide está 
> cumpliendo principios éticos."

**Implementación**:
- Auditor externo (sin conflicto de interés) entrevista al equipo
- Preguntas:
  - ¿Sientes que tu información es confidencial?
  - ¿El Social Guide ha usado información en tu contra?
  - ¿Te sientes seguro para ser auténtico?

---

#### **Protocolo ante Violación Ética**

```
SI (alguien reporta violación de confidencialidad):
  ENTONCES:
    1. Investigación inmediata por CTO + auditor externo
    2. Si confirmada: Social Guide es removido del rol (inmediato)
    3. Equipo recibe disculpa formal
    4. Nuevo Social Guide con re-entrenamiento ético
```

---

### 5.2 ¿Crea Burocracia? (Overhead de Reuniones)

**Tu respuesta**: "No debería. Eventos deben integrarse con Scrum existente. Ayuda a manejar esto."

**SOLUCIÓN: "Principio de No-Sobrecarga"**

#### **Regla de oro**:
> "SocialScrum NO agrega tiempo neto de reuniones. Se integra en eventos existentes."

#### **Implementación por Evento**:

##### **1. Sprint Planning Social**
- **Tiempo Scrum estándar**: 4-8 horas (para Sprint de 2 semanas)
- **Tiempo SocialScrum**: +15 minutos (máximo)
- **Integración**:
  ```
  Sprint Planning (total: 4 horas)
  ├─ Parte 1: ¿Qué se puede hacer? (2 horas) ← estándar
  ├─ Parte 2: ¿Cómo se hará? (1.75 horas) ← estándar
  └─ Parte 3: Revisión de Riesgos Sociales (15 min) ← NUEVO
      ├─ Social Guide presenta Health Score del Sprint anterior
      ├─ Identifica community smells activos
      └─ Equipo + PO ajustan compromiso si es necesario
  ```

---

##### **2. Daily Standup Social**
- **Tiempo Scrum estándar**: 15 minutos
- **Tiempo SocialScrum**: +2-3 minutos (máximo)
- **Integración**:
  ```
  Daily Standup (total: 15 min)
  ├─ Ronda técnica (cada dev: ¿qué hice? ¿qué haré? ¿impedimentos?) (12 min)
  └─ Pregunta social (Social Guide, al final): (3 min)
      "¿Hay impedimento social que nos afecte hoy?"
      SI (alguien dice "sí"):
        Social Guide toma nota → aborda después del Daily (NO durante)
      SINO:
        Continuar
  ```

**Clave**: NO resolver problemas sociales en el Daily. Solo identificar.

---

##### **3. Sprint Review Social**
- **Tiempo Scrum estándar**: 2-4 horas
- **Tiempo SocialScrum**: +10 minutos
- **Integración**:
  ```
  Sprint Review (total: 2 horas)
  ├─ Demo de Increment (1.5 horas) ← estándar
  ├─ Feedback de stakeholders (20 min) ← estándar
  └─ Evaluación de Dinámica Social (10 min) ← NUEVO
      Social Guide presenta:
      - Health Score del Sprint
      - Cómo dinámicas sociales influyeron en entrega
      - Perspectiva para stakeholders sobre capacidad futura
  ```

---

##### **4. Sprint Retrospective Social**
- **Tiempo Scrum estándar**: 1.5-3 horas
- **Tiempo SocialScrum**: SIN cambio (se usa el mismo tiempo)
- **Integración**:
  ```
  Sprint Retrospective (total: 1.5 horas)
  ├─ Parte 1: Inspección Técnica (30 min)
  │   ├─ ¿Qué fue bien técnicamente?
  │   ├─ ¿Qué fue difícil técnicamente?
  │   └─ Facilitado por Scrum Master
  │
  ├─ Parte 2: Inspección Social (45 min) ← ÉNFASIS NUEVO
  │   ├─ Dashboard de Health Social
  │   ├─ Análisis de community smells
  │   ├─ Causa raíz (5 Whys)
  │   └─ Facilitado por Social Guide
  │
  └─ Parte 3: Acciones de Mejora (15 min)
      ├─ Diseño de intervenciones (técnicas + sociales)
      └─ Compromiso del equipo
  ```

**Clave**: La Retrospective ya existía. SocialScrum solo cambia el ENFOQUE (más tiempo a lo social).

---

#### **Tiempo Total Agregado por Sprint**:

```
Sprint Planning Social:    +15 min
Daily Standup Social:       +2 min/día × 10 días = +20 min
Sprint Review Social:       +10 min
Sprint Retrospective Social: 0 min (mismo tiempo, diferente enfoque)
────────────────────────────
TOTAL:                      +45 minutos por Sprint (2 semanas)
                            = +22.5 min/semana
                            = +4.5 min/día
```

**Veredicto**: SocialScrum agrega ~45 minutos cada 2 semanas. **Es mínimo**.

---

#### **Optimizaciones Adicionales**:

1. **Async Social Standups** (para equipos remotos):
   - Daily escrito en Slack (no reunión)
   - Formato: "¿Impedimento social hoy?" → Sí/No + breve descripción
   - Reduce tiempo a 0

2. **Retrospectivas Focalizadas**:
   - No todas las retros necesitan ser 100% sociales
   - Alternar: Sprint N (énfasis técnico), Sprint N+1 (énfasis social)
   - Reduce tiempo social en 50%

3. **Social Guide Parcial**:
   - Para equipos pequeños (≤5 personas): Social Guide puede ser rol rotativo (cada Sprint un miembro diferente)
   - Reduce costo organizacional

---

## DOCUMENTOS QUE VOY A CREAR PARA TI

Basándome en tus necesidades, voy a generar:

1. **Framework de Priorización Social-Técnica** (para PO + Social Guide)
2. **Sistema de Estimación de Items Sociales** (Story Points Sociales)
3. **Salvaguardas Éticas de SocialScrum** (confidencialidad, rendición de cuentas)
4. **Principio de No-Sobrecarga** (integración de eventos sin agregar tiempo)
5. **Plantillas de Artefactos Sociales** (para Cap 4)

Los creo ahora.

