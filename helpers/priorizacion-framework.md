# FRAMEWORK DE PRIORIZACIÓN SOCIAL-TÉCNICA PARA SOCIALSCRUM

## INTRODUCCIÓN

En SocialScrum, el Product Owner (PO) y el Social Guide deben colaborar para priorizar items del Product Backlog que balanceen:
- **Valor de negocio** (entrega de features)
- **Salud técnica** (mitigación de deuda técnica)
- **Salud social** (mitigación de deuda social)

Este documento proporciona un framework riguroso para esa priorización.

---

## PARTE 1: TRIÁNGULO DE PRIORIZACIÓN SOCIALSCRUM

### Concepto Visual

```
              VALOR DE NEGOCIO
                     /\
                    /  \
                   /    \
                  /      \
                 /        \
                /          \
               /            \
              /              \
             /________________\
       URGENCIA              SALUD
       TÉCNICA               SOCIAL
```

**Interpretación**:
- **Cada ítem del Product Backlog se evalúa en las tres dimensiones.**
- La priorización final depende del balance de las tres.
- NO existe fórmula matemática rígida; se usa juicio colaborativo entre PO + Social Guide + Scrum Master.

---

### Dimensión 1: Valor de Negocio (Responsabilidad: Product Owner)

**Definición**: ¿Cuánto valor genera este ítem para el cliente/usuario o para el negocio?

**Escala de evaluación**:
- **10**: Crítico para el negocio (sin esto, negocio se detiene o cliente clave se pierde)
- **7-9**: Alto valor (impacto significativo en ingresos, satisfacción, competitividad)
- **4-6**: Valor moderado (mejora incremental, nice-to-have importante)
- **1-3**: Valor bajo (mejora marginal, puede esperar)

**Criterios**:
- Impacto en ingresos
- Satisfacción del cliente
- Ventaja competitiva
- Cumplimiento regulatorio

**Ejemplos**:
```
"Integración con API de Pagos" → Valor 9/10 (sin esto, no podemos cobrar)
"Botón de logout más grande" → Valor 2/10 (cosmético, no crítico)
"Cumplimiento GDPR" → Valor 10/10 (regulatorio, obligatorio)
```

---

### Dimensión 2: Urgencia Técnica (Responsabilidad: Development Team + Scrum Master)

**Definición**: ¿Cuán urgente es abordar este ítem desde perspectiva técnica?

**Escala de evaluación**:
- **10**: Bloqueante (sin esto, sistema no funciona o deuda técnica colapsa)
- **7-9**: Crítico (deuda técnica grave, arquitectura comprometida)
- **4-6**: Importante (refactorización necesaria, deuda técnica moderada)
- **1-3**: Deseable (mejora técnica, no urgente)

**Criterios**:
- ¿Es bloqueante para otras features?
- ¿Hay riesgo de colapso técnico?
- ¿Cuánto crece la deuda técnica si se pospone?
- ¿Impacta seguridad o performance?

**Ejemplos**:
```
"Refactorizar módulo de autenticación" → Urgencia 8/10 (código frágil, bugs frecuentes)
"Actualizar librería de testing" → Urgencia 4/10 (mejora, no crítico)
"Bug crítico: usuarios no pueden login" → Urgencia 10/10 (bloqueante)
```

---

### Dimensión 3: Salud Social (Responsabilidad: Social Guide)

**Definición**: ¿Es necesario abordar este ítem para restaurar o mantener la salud social del equipo?

**Escala de evaluación**:
- **10**: Crisis social (burnout, conflicto severo, riesgo de rotación inmediata)
- **7-9**: Crítico (community smells graves, Health Score < 4)
- **4-6**: Importante (community smells moderados, Health Score 4-6)
- **1-3**: Mantenimiento (mejoras incrementales, Health Score > 7)

**Criterios**:
- Health Score actual del equipo
- Severidad de community smells activos
- Tendencia (¿está empeorando?)
- Impacto en capacidad de entrega

**Ejemplos**:
```
"Resolver conflicto Dev A vs. Dev B" → Salud Social 8/10 (afecta code reviews, genera tensión)
"Implementar daily async standup" → Salud Social 5/10 (mejora comunicación, no crítico)
"Mediación urgente: burnout detectado" → Salud Social 10/10 (riesgo de renuncia)
"Team building event" → Salud Social 3/10 (nice-to-have, equipo ya sano)
```

---

## PARTE 2: MATRIZ DE DECISIÓN

### Regla General

```
Prioridad = f(Valor Negocio, Urgencia Técnica, Salud Social)
```

**NO es una fórmula matemática.** Es una **conversación estructurada** entre:
- **PO**: Argumenta por Valor de Negocio
- **Dev Team + SM**: Argumentan por Urgencia Técnica
- **Social Guide**: Argumenta por Salud Social

---

### Casos de Priorización (18 Escenarios Comunes)

| # | Valor Negocio | Urgencia Técnica | Salud Social | Prioridad | Decisión | Ejemplo |
|---|---|---|---|---|---|---|
| 1 | 10 | 10 | 1 | **MÁXIMA** | Entregar YA | Feature crítica + bug bloqueante, equipo sano |
| 2 | 10 | 1 | 10 | **ALTA** | Mitigar social primero | Feature crítica pero equipo en crisis → no puede entregarla |
| 3 | 1 | 10 | 10 | **ALTA** | Resolver ambos | Bug técnico + crisis social → ambos urgentes |
| 4 | 10 | 10 | 10 | **MÁXIMA** | Crisis total | TODO es urgente → escalar a CTO |
| 5 | 10 | 5 | 5 | **ALTA** | Entregar con precaución | Feature valiosa, equipo OK pero no óptimo |
| 6 | 5 | 10 | 5 | **ALTA** | Resolver técnico primero | Deuda técnica bloquea progreso |
| 7 | 5 | 5 | 10 | **ALTA** | Resolver social primero | Equipo en crisis no puede entregar bien |
| 8 | 8 | 2 | 8 | **MEDIA-ALTA** | Balancear ambos | Feature valiosa + equipo necesita atención |
| 9 | 2 | 8 | 2 | **MEDIA** | Resolver técnico | Deuda técnica importante, poco valor negocio |
| 10 | 2 | 2 | 8 | **MEDIA** | Resolver social | Salud social es prioridad |
| 11 | 7 | 7 | 3 | **MEDIA-ALTA** | Entregar | Equipo sano, feature valiosa |
| 12 | 3 | 3 | 3 | **BAJA** | Posponer | Nada es urgente |
| 13 | 9 | 1 | 1 | **ALTA** | Entregar | Feature valiosa, sin impedimentos |
| 14 | 1 | 9 | 1 | **MEDIA** | Resolver técnico | Deuda técnica urgente aunque no hay valor negocio |
| 15 | 1 | 1 | 9 | **MEDIA** | Resolver social | Equipo necesita atención |
| 16 | 6 | 6 | 6 | **MEDIA** | Balancear | Todo es moderado → decisión caso por caso |
| 17 | 10 | 3 | 7 | **ALTA** | Feature + social en paralelo | MVP de feature mientras se atiende social |
| 18 | 7 | 10 | 1 | **ALTA** | Resolver técnico primero | Bug crítico bloquea, equipo sano |

---

### Reglas de Oro para Casos Extremos

#### Regla 1: **Salud Social < 4/10 → NO comprometer features de alta complejidad**

**Justificación**: Un equipo en crisis no puede entregar calidad.

**Ejemplo**:
```
Sprint Planning:
- PO quiere: "Migración completa de base de datos a PostgreSQL" (Valor 8, Complejidad 13)
- Social Guide reporta: Health Score = 3.5/10 (crítico)

Decisión:
- NO se compromete la migración
- Sprint Goal: "Restaurar salud social a ≥ 6/10"
- Items del Sprint:
  1. Mediación de conflicto [SOCIAL]
  2. Workshop de comunicación [SOCIAL]
  3. Features simples (valor 5, complejidad 3) [TÉCNICO]
```

---

#### Regla 2: **Valor Negocio 10 + Salud Social 10 → Escalar a CTO**

**Justificación**: Hay conflicto entre entregar valor crítico y proteger al equipo. Decisión organizacional.

**Ejemplo**:
```
Situación:
- Cliente clave exige feature en 2 semanas (Valor 10, Urgencia 10)
- Equipo está en burnout (Salud Social 10)

Opciones:
A. Entregar feature → riesgo de rotación de personal
B. No entregar feature → riesgo de perder cliente

Decisión:
- Escalar a CTO + VP Sales + CHRO
- Evaluar: ¿Podemos traer recursos externos temporales?
- ¿Podemos negociar con cliente 1 semana adicional?
- ¿El valor del cliente justifica el riesgo?
```

---

#### Regla 3: **Health Score ≥ 8 → Priorizar por Valor de Negocio + Urgencia Técnica (Scrum clásico)**

**Justificación**: Si el equipo está sano, SocialScrum se comporta como Scrum estándar.

**Ejemplo**:
```
Sprint Planning:
- Health Score = 8.5/10 (excelente)
- Community smells: Ninguno activo

Decisión:
- Priorizar features por valor de negocio
- No se requieren items sociales en este Sprint
- Social Guide monitorea pero no interviene
```

---

## PARTE 3: PROTOCOLO DE PRIORIZACIÓN (Paso a Paso)

### Sprint Planning: Sección de Priorización

**Duración**: 15-20 minutos

**Participantes**: PO + Social Guide + Scrum Master + Development Team

**Pasos**:

#### Paso 1: Social Guide presenta Health Score (5 min)
```
Social Guide:
"Health Score actual: 6.2/10
- Valores críticos: Coraje (4/10), Foco (5/10)
- Community smells activos: Radio Silence (moderado), Silos (leve)
- Tendencia: Mejorando (era 5.1 Sprint anterior)
- Capacidad estimada: ~80% de la normal"
```

#### Paso 2: PO presenta features priorizadas (5 min)
```
PO:
"Tengo 5 features de alto valor:
1. Integración API Pagos (Valor 9)
2. Dashboard de Analytics (Valor 7)
3. Mejora de UX en login (Valor 5)
4. Exportar reportes PDF (Valor 6)
5. Notificaciones push (Valor 8)"
```

#### Paso 3: Social Guide identifica necesidades sociales (5 min)
```
Social Guide:
"Tengo 3 items sociales sugeridos:
1. Mediación conflicto Dev-QA (Salud 7, Estimado: 5 SPS)
2. Establecer daily async standup (Salud 5, Estimado: 3 SPS)
3. Workshop de cohesión (Salud 3, Estimado: 2 SPS)"
```

#### Paso 4: Discusión y priorización colaborativa (5-10 min)
```
Conversación:

SM: "¿Cuál es la capacidad del equipo este Sprint?"
Dev Team: "Normalmente 40 story points. Con Health 6.2, estimamos 32 SP."

PO: "Necesito urgente Integración API Pagos (Valor 9). ¿Es factible?"
Dev Team: "Sí, pero es 13 SP. Compleja."

Social Guide: "Health Score 6.2 es moderado. Feature compleja tiene riesgo. 
Recomiendo: Incluir mediación Dev-QA (5 SPS) para subir a Health 7+. 
Luego podemos comprometernos mejor."

PO: "¿Cuánto mejora Health Score con la mediación?"
Social Guide: "Estimado: de 6.2 a 7.0-7.5 (si funciona)."

Decisión consensuada:
- Sprint Goal: "Integrar API Pagos + Mejorar comunicación Dev-QA"
- Items comprometidos:
  1. Integración API Pagos [TÉCNICO: 13 SP]
  2. Mediación Dev-QA [SOCIAL: 5 SPS]
  3. Dashboard Analytics (MVP) [TÉCNICO: 8 SP]
  4. Daily async standup [SOCIAL: 3 SPS]
- Total: 21 SP + 8 SPS ≈ 29 SP equivalentes (dentro de capacidad 32 SP)
```

---

## PARTE 4: CONVERSIÓN ENTRE STORY POINTS SOCIALES (SPS) Y STORY POINTS TÉCNICOS (SP)

### Problema

Development Team estima en SP (técnicos). Social Guide estima en SPS (sociales). ¿Cómo comparar?

### Solución: Equivalencia Aproximada

**1 SPS (Social) ≈ 1 SP (Técnico)** en términos de **tiempo/esfuerzo**.

**Razón**:
- 1 SPS = 1-2 horas
- 1 SP (técnico, Fibonacci) = ~1-2 horas para equipo calibrado
- Ambos consumen capacidad del Sprint

**Ejemplo de Sprint Planning**:
```
Capacidad del equipo: 40 SP

Items comprometidos:
- Feature A [TÉCNICO: 13 SP]
- Feature B [TÉCNICO: 8 SP]
- Mediación [SOCIAL: 5 SPS]
- Workshop [SOCIAL: 3 SPS]

Total: 13 + 8 + 5 + 3 = 29 "puntos" (técnicos + sociales)
→ Dentro de capacidad de 40 SP
```

**Nota**: Esta conversión es aproximada. Cada equipo debe calibrar según su contexto.

---

## PARTE 5: ROLES Y AUTORIDAD EN PRIORIZACIÓN

### Quién Decide Qué

```
┌──────────────────────────────────────────────────────────────┐
│                 TRIÁNGULO DE AUTORIDAD                       │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│                 PRODUCT OWNER                                │
│           Decide: QUÉ entregar                               │
│           Autoridad: Valor de Negocio                        │
│                        ▲                                     │
│                       / \                                    │
│                      /   \                                   │
│                     /     \                                  │
│                    /       \                                 │
│          SCRUM MASTER ◄──► SOCIAL GUIDE                     │
│          Decide:            Decide:                          │
│          CÓMO trabajar      CUÁNDO el equipo                │
│          Autoridad:         puede comprometerse             │
│          Proceso Scrum      Autoridad:                       │
│                             Salud Social                     │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### Protocolo de Discrepancia (Cuando No Hay Consenso)

```
SI (PO, SM, Social Guide NO están de acuerdo en priorización):
  ENTONCES:
    1. Cada uno presenta su argumento (3 min cada uno)
       - PO: "Esta feature es crítica porque..."
       - Social Guide: "El equipo no está listo porque..."
       - SM: "Desde perspectiva de proceso..."
    
    2. Development Team opina (5 min)
       - "¿Nos sentimos capaces de comprometerla?"
    
    3. Votación informal (show of hands)
       - Opción A: Priorizar feature
       - Opción B: Priorizar salud social
       - Opción C: Híbrido (MVP + mitigación social)
    
    4. SI (no hay mayoría clara):
         ESCALAR a CTO/VP Engineering
         - Decisión en 24 horas
         - Sprint Planning continúa con items de consenso
       SINO:
         Implementar opción con mayoría
```

---

## PARTE 6: EJEMPLOS COMPLETOS DE PRIORIZACIÓN

### Ejemplo 1: Salud Social Crítica

**Contexto**:
- Health Score: 3.8/10 (crítico)
- Community smells: Conflicto severo, Burnout detectado
- PO quiere: Feature de alto valor (9/10, complejidad 21 SP)

**Priorización**:
```
Social Guide: "Health Score 3.8 es crítico. Valor 'Respeto' = 2/10. 
              Hay conflicto no resuelto entre 2 devs clave. 
              Burnout detectado en 3/5 miembros del equipo.
              
              Recomendación: NO comprometer features complejas. 
              Sprint Goal debe ser: 'Restaurar salud social a ≥ 6/10'."

PO: "Pero esta feature es crítica para el negocio. Cliente la necesita."

Dev Team: "Honestamente, no nos sentimos capaces de entregar calidad ahora."

Decisión:
- Sprint Goal: "Estabilizar equipo"
- Items:
  1. Mediación de conflicto [SOCIAL: 8 SPS]
  2. Reducción de carga de trabajo 30%
  3. Workshop de burnout prevention [SOCIAL: 5 SPS]
  4. Features simples (valor 4, complejidad 3-5 SP) [TÉCNICO: 10 SP]
  
- Feature crítica se POSPONE para Sprint +1
- PO negocia con cliente 2 semanas adicionales
```

---

### Ejemplo 2: Salud Social Buena

**Contexto**:
- Health Score: 8.2/10 (excelente)
- No hay community smells críticos
- PO tiene backlog priorizado por valor

**Priorización**:
```
Social Guide: "Health Score 8.2. Equipo está sano. 
              No se requieren items sociales este Sprint."

PO: "Perfecto. Priorizo por valor de negocio:
     1. Feature A (Valor 9, 13 SP)
     2. Feature B (Valor 8, 8 SP)
     3. Feature C (Valor 7, 5 SP)"

Dev Team: "Capacidad: 40 SP. Comprometemos las 3 features."

Decisión:
- Sprint Goal: "Entregar features A, B, C"
- SocialScrum funciona como Scrum estándar
- Social Guide monitorea pero no interviene activamente
```

---

### Ejemplo 3: Balance (Caso Típico)

**Contexto**:
- Health Score: 6.5/10 (aceptable, con margen de mejora)
- Community smell: Silos organizacionales (moderado)
- PO tiene features priorizadas

**Priorización**:
```
Social Guide: "Health Score 6.5. Aceptable pero no óptimo. 
              Tenemos 'Silos organizacionales' entre Dev y QA. 
              Recomiendo: Incluir 1 item social para mejorar comunicación."

PO: "¿Cuánto esfuerzo?"
Social Guide: "3-5 SPS (aproximadamente 1 día de trabajo distribuido)."

PO: "OK. Incluyo features de valor medio-alto."

Decisión:
- Sprint Goal: "Entregar features + Mejorar comunicación Dev-QA"
- Items:
  1. Feature A (Valor 8, 13 SP)
  2. Feature B (Valor 6, 8 SP)
  3. Implementar daily async standup [SOCIAL: 5 SPS]
  4. Bug fix (Urgencia 7, 5 SP)
  
- Total: 13 + 8 + 5 (social) + 5 = 31 SP
- Capacidad: 40 SP → Dentro de rango
```

---

## CONCLUSIÓN

El Framework de Priorización Social-Técnica permite:
1. **Balancear** valor de negocio, urgencia técnica, y salud social
2. **Colaboración estructurada** entre PO, Social Guide, Scrum Master
3. **Transparencia** en decisiones de priorización
4. **Protección del equipo** sin sacrificar valor de negocio

**Principio central**:
> "No hay fórmula mágica. La priorización es conversación estructurada 
> basada en evidencia (Health Score, valor, urgencia) y consenso del equipo."

