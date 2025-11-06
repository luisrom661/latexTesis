# SALVAGUARDAS ÉTICAS DE SOCIALSCRUM: Prevención de Manipulación y Mal Uso

## INTRODUCCIÓN

SocialScrum introduce el rol del Social Guide, quien tiene acceso a información sensible sobre dinámicas interpersonales, conflictos y vulnerabilidades del equipo. Sin salvaguardas explícitas, existe riesgo de que esta información sea mal utilizada para:
- Evaluaciones de desempeño punitivas
- Decisiones de despido
- Manipulación organizacional
- Destrucción de seguridad psicológica

Este documento establece **principios éticos obligatorios** para la implementación de SocialScrum.

---

## PRINCIPIO 1: CONFIDENCIALIDAD ABSOLUTA

### 1.1 Definición

> **Toda información compartida en eventos sociales (Daily Social, Sprint Retrospective Social, sesiones de mediación) es CONFIDENCIAL y NO puede ser utilizada para evaluaciones de desempeño, decisiones de contratación/despido, o cualquier acción que afecte el estatus laboral de un individuo.**

### 1.2 Alcance de la Confidencialidad

**LO QUE ES CONFIDENCIAL:**
- Declaraciones individuales en retrospectivas sociales
- Conflictos interpersonales reportados
- Información sobre estado emocional, burnout, o desmotivación
- Cualquier información que identifique a una persona específica

**LO QUE NO ES CONFIDENCIAL (puede reportarse):**
- **Datos agregados**: Health Score promedio del equipo
- **Community smells generales**: "El equipo presenta aislamiento social" (sin nombres)
- **Tendencias**: "La cohesión ha mejorado en últimos 3 sprints"

### 1.3 Ejemplo de Aplicación

#### ❌ PROHIBIDO (Violación de Confidencialidad):
```
Social Guide → HR:
"En la retrospectiva, María dijo que está considerando renunciar porque 
se siente excluida por el equipo."

→ HR usa esto para:
  - Evaluar negativamente al equipo
  - Presionar a María para que se quede
  - Despedir preventivamente a María antes de que renuncie
```

#### ✅ PERMITIDO (Reporte Agregado):
```
Social Guide → Scrum Master → CTO:
"El Health Score del equipo es 4.2/10 (crítico). El valor 'Respeto' está 
en 3/10. Existe un community smell activo: 'Aislamiento social'. Se requiere 
intervención inmediata para restaurar cohesión."

→ CTO autoriza:
  - Workshop de cohesión de equipo
  - Mediación facilitada por Social Guide
  - Ajuste de carga de trabajo para permitir tiempo de recuperación
```

### 1.4 Implementación Práctica

**Acuerdo de Confidencialidad del Social Guide:**
```latex
Yo, [Nombre del Social Guide], me comprometo a:

1. No compartir información individual fuera del equipo
2. Reportar solo datos agregados a nivel organizacional
3. No usar información para evaluaciones de desempeño
4. Proteger la seguridad psicológica del equipo
5. Rechazar solicitudes de información confidencial, incluso de gerencia

Firma: ________________  Fecha: __________
```

**Acuerdo del Equipo (Consentimiento Informado):**
```latex
El equipo [Nombre] acepta la implementación de SocialScrum bajo las 
siguientes condiciones:

1. Toda información compartida en sesiones sociales es confidencial
2. El Social Guide no reportará información individual a HR o gerencia
3. Solo se reportarán métricas agregadas (Health Score, tendencias)
4. El equipo tiene derecho a auditar reportes del Social Guide
5. Cualquier violación de confidencialidad resulta en remoción inmediata 
   del Social Guide

Firmas del equipo: ________________  Fecha: __________
```

---

## PRINCIPIO 2: RENDICIÓN DE CUENTAS Y ESTRUCTURA ORGANIZACIONAL

### 2.1 Definición

> **El Social Guide reporta al Scrum Master o CTO/VP de Ingeniería, NUNCA a Recursos Humanos (HR). Esto evita conflictos de interés, dado que HR gestiona evaluaciones de desempeño y decisiones de empleo.**

### 2.2 Estructura Organizacional Recomendada

```
CEO
 │
 ├─── CTO / VP Engineering
 │     │
 │     ├─── Scrum Master (Líder de Proceso)
 │     │     │
 │     │     └─── Social Guide ← REPORTA AQUÍ
 │     │           (Experto en Dinámicas Sociales)
 │     │
 │     └─── Product Owner (Líder de Producto)
 │
 └─── CHRO / VP de Recursos Humanos
       │
       └─── NO tiene autoridad sobre Social Guide
            NO recibe reportes individuales del Social Guide
```

### 2.3 Por Qué Esta Estructura

**Razón 1: Conflicto de Interés**
- HR evalúa desempeño, gestiona despidos/contrataciones
- Si Social Guide reporta a HR → información social se convierte en "evidencia" para decisiones laborales
- Resultado: Equipo pierde confianza, seguridad psicológica colapsa

**Razón 2: Alineación de Objetivos**
- CTO/Scrum Master: Objetivo = Equipos sanos y productivos
- Social Guide: Objetivo = Mitigar deuda social
- Alineación natural

**Razón 3: Protección Legal**
- En algunas jurisdicciones, información sensible de empleados requiere protección
- Si Social Guide es parte de Engineering (no HR), información se trata como "datos operacionales", no "datos de personal"

### 2.4 ¿Qué Pasa Si HR Solicita Información?

**Protocolo Obligatorio:**

```
SI (HR solicita información individual del Social Guide):
  ENTONCES:
    1. Social Guide RECHAZA la solicitud
    2. Social Guide informa al Scrum Master + CTO
    3. CTO/Scrum Master evalúan si hay justificación legal (e.g., investigación de acoso)
    4. SI (hay justificación legal):
         - Social Guide proporciona SOLO información relevante
         - Con consentimiento explícito del afectado
         - Documentado formalmente
       SINO:
         - Solicitud es denegada
         - HR recibe explicación: "Información protegida por confidencialidad de SocialScrum"
```

---

## PRINCIPIO 3: TRANSPARENCIA DE REPORTES

### 3.1 Definición

> **Todo reporte que el Social Guide genera debe ser accesible para el equipo. No existen "reportes secretos".**

### 3.2 Implementación

**Dashboard de Salud Social (Público para el Equipo):**
- Health Score actual y trending
- Community smells identificados
- Acciones de mitigación en progreso
- **Disponible en**: Confluence, Jira, dashboard digital visible

**Reporte Mensual del Social Guide:**
```markdown
# Reporte Social - Equipo [Nombre] - Mes [X]

## Métricas Agregadas
- Health Score promedio: 6.8/10 (↑ desde 5.2 el mes anterior)
- Valores críticos: Coraje (4/10), Foco (5/10)
- Community smells activos: 
  - Radio Silence (moderado)
  - Silos organizacionales (leve)

## Acciones Implementadas
1. Mediación de conflicto entre áreas de Dev y QA (completada)
2. Workshop de comunicación asincrónica (en progreso)
3. Código de conducta establecido (completado)

## Próximos Pasos
- Continuar seguimiento de "Radio Silence"
- Evaluar efectividad de comunicación asincrónica en Sprint +2

---
Este reporte es PÚBLICO para el equipo y stakeholders autorizados.
El Social Guide NO genera reportes privados adicionales.
```

**Principio: "Si no puede ser público, no se reporta"**

---

## PRINCIPIO 4: CONSENTIMIENTO INFORMADO

### 4.1 Definición

> **El equipo debe consentir explícitamente la adopción de SocialScrum. Nadie puede ser forzado a participar.**

### 4.2 Proceso de Adopción

#### Fase 1: Explicación (1 hora)
- Social Guide + Scrum Master explican:
  - Qué es SocialScrum
  - Cómo funciona
  - Qué información se recopila
  - Cómo se protege la confidencialidad
  - Derecho a opt-out

#### Fase 2: Votación (anónima)
- Pregunta: "¿Apruebas la adopción de SocialScrum en este equipo?"
- Opciones: Sí / No / Abstención
- **Umbral de adopción: ≥ 70% vota "Sí"**

#### Fase 3: Consentimiento Individual
- Cada miembro firma acuerdo de consentimiento
- Derecho a retractarse en cualquier momento

### 4.3 Derecho a Opt-Out

**Un miembro puede decidir NO participar en sesiones sociales.**

Ejemplo:
```
Juan decide no participar en Sprint Retrospective Social porque no se 
siente cómodo compartiendo información personal.

Opciones:
1. Juan asiste pero no participa activamente (observador)
2. Juan no asiste a la sección social (pero sí a la técnica)
3. Juan proporciona feedback escrito anónimo

El Social Guide NO puede forzar participación.
El equipo NO puede penalizar a Juan por no participar.
```

**Límite del Opt-Out:**
- Si >30% del equipo opta por no participar → SocialScrum no se implementa
- Razón: Sin participación mayoritaria, el marco no funciona

---

## PRINCIPIO 5: AUDITORÍA INDEPENDIENTE

### 5.1 Definición

> **Cada 6 meses, un auditor independiente (sin conflicto de interés) evalúa si el Social Guide está cumpliendo los principios éticos de SocialScrum.**

### 5.2 Proceso de Auditoría

#### Paso 1: Selección de Auditor
- Auditor externo a la organización (consultor, académico, organización neutral)
- NO puede ser:
  - Empleado de la empresa
  - Amigo/familiar del Social Guide
  - Consultor contratado por la misma empresa para otros proyectos

#### Paso 2: Entrevistas Confidenciales
Auditor entrevista (anónimamente) a:
- 100% del equipo
- Scrum Master
- Product Owner
- Stakeholders (opcional)

**Preguntas clave:**
1. ¿Sientes que tu información es confidencial?
2. ¿El Social Guide ha usado información en tu contra?
3. ¿Te sientes seguro para ser auténtico en sesiones sociales?
4. ¿Has sido presionado a compartir información personal?
5. ¿Conoces tus derechos bajo SocialScrum?

#### Paso 3: Revisión de Reportes
Auditor revisa:
- Todos los reportes generados por el Social Guide
- Comunicaciones entre Social Guide y gerencia/HR
- Evidencia de reportes "secretos"

#### Paso 4: Reporte de Auditoría
Auditor emite reporte con:
- Cumplimiento de principios éticos: Sí / No / Parcial
- Hallazgos específicos (violaciones, si existen)
- Recomendaciones de mejora

**Reporte es PÚBLICO para el equipo.**

### 5.3 Consecuencias de Auditoría Negativa

**SI (auditor encuentra violación ética):**
```
ENTONCES:
  1. Investigación formal por CTO + auditor
  2. SI (violación confirmada):
       - Social Guide es REMOVIDO inmediatamente del rol
       - NO puede volver a ser Social Guide en esa organización
       - Equipo recibe disculpa formal de la organización
       - Nuevo Social Guide con re-entrenamiento ético completo
     SINO:
       - Social Guide recibe feedback de mejora
       - Re-auditoría en 3 meses
```

---

## PRINCIPIO 6: PROTOCOLO DE WHISTLEBLOWING (DENUNCIA)

### 6.1 Definición

> **Cualquier miembro del equipo puede denunciar violaciones éticas del Social Guide sin temor a represalias.**

### 6.2 Canales de Denuncia

**Opción 1: Canal Interno**
- Denuncia al Scrum Master
- Scrum Master escala a CTO
- Investigación interna

**Opción 2: Canal Externo (para casos graves)**
- Denuncia a auditor independiente (contacto proporcionado al inicio de SocialScrum)
- Auditor investiga sin involucrar a la organización inicialmente

**Opción 3: Anónimo**
- Formulario web anónimo
- Revisado por CTO + auditor

### 6.3 Protección contra Represalias

**Política de Tolerancia Cero:**
```
SI (alguien denuncia violación ética) Y (sufre represalias):
  ENTONCES:
    1. Investigación inmediata
    2. Persona que tomó represalias es sancionada (despido si es grave)
    3. Denunciante recibe protección formal (no puede ser despedido sin 
       aprobación del CTO y auditor externo)
```

---

## PRINCIPIO 7: SEPARACIÓN ENTRE SALUD SOCIAL Y EVALUACIÓN DE DESEMPEÑO

### 7.1 Definición

> **La participación en SocialScrum NO afecta evaluaciones de desempeño. Compartir vulnerabilidades NO es penalizado.**

### 7.2 Implementación

**Política Organizacional Obligatoria:**
```latex
Esta organización establece que:

1. La información compartida en eventos de SocialScrum NO será usada en 
   evaluaciones de desempeño (performance reviews).

2. Reportar burnout, conflictos o desmotivación NO es señal de "bajo desempeño".

3. Managers NO recibirán información individual del Social Guide para 
   evaluaciones de desempeño.

4. La participación activa en SocialScrum es VOLUNTARIA y no afecta promociones.

Firma del CEO: ________________  Fecha: __________
```

### 7.3 Ejemplo de Separación

#### ❌ PROHIBIDO:
```
Evaluación de desempeño de María (por su Manager):
"María reportó en retrospectiva social que se siente aislada. 
Esto indica falta de habilidades interpersonales. Calificación: 3/5."
```

#### ✅ CORRECTO:
```
Evaluación de desempeño de María (por su Manager):
"María entregó 8/10 stories comprometidas. Código de alta calidad. 
Colaboró efectivamente en pair programming. Calificación: 4.5/5."

(La información de retrospectiva social NO aparece en la evaluación)
```

---

## RESUMEN: CHECKLIST DE IMPLEMENTACIÓN ÉTICA

Antes de implementar SocialScrum, la organización debe:

- [ ] **1. Política de Confidencialidad**: Documentar y publicar
- [ ] **2. Estructura Organizacional**: Social Guide reporta a CTO/SM, NO a HR
- [ ] **3. Acuerdo de Confidencialidad**: Social Guide firma
- [ ] **4. Consentimiento del Equipo**: ≥70% aprueba adopción
- [ ] **5. Transparencia de Reportes**: Dashboard público para el equipo
- [ ] **6. Auditor Independiente**: Contratado para auditoría semestral
- [ ] **7. Canal de Denuncia**: Establecido y comunicado
- [ ] **8. Política de Separación**: Desempeño vs. Salud Social documentada
- [ ] **9. Protección contra Represalias**: Política de tolerancia cero publicada
- [ ] **10. Entrenamiento Ético**: Social Guide recibe formación en ética

---

## CASO DE USO: VIOLACIÓN ÉTICA REAL Y CÓMO SE PREVIENE

### Escenario Perverso (Sin Salvaguardas)

```
1. Empresa implementa "SocialScrum" sin ética clara
2. Social Guide reporta a HR
3. En retrospectiva, Pedro dice: "Estoy quemado. Pienso renunciar."
4. Social Guide reporta esto a HR
5. HR decide: "Pedro ya va a renunciar. Despidámoslo antes para ahorrar indemnización."
6. Pedro es despedido 2 semanas después
7. Equipo descubre la traición → Nadie vuelve a ser auténtico
8. Health Score colapsa a 1/10
9. SocialScrum se convierte en herramienta de vigilancia, no de salud
```

### Escenario Correcto (Con Salvaguardas)

```
1. Empresa implementa SocialScrum con salvaguardas éticas
2. Social Guide reporta a CTO (NO a HR)
3. En retrospectiva, Pedro dice: "Estoy quemado. Pienso renunciar."
4. Social Guide:
   - NO reporta esto a HR
   - Facilita 1:1 con Pedro: "¿Qué te ayudaría?"
   - Pedro dice: "Necesito reducir carga de trabajo 20% por 2 sprints"
5. Social Guide reporta (agregado): "Health Score del equipo es 5. Burnout detectado."
6. CTO autoriza: Reducción de carga 20% para TODO el equipo (no solo Pedro)
7. Después de 2 sprints, Pedro se recupera
8. Health Score sube a 7/10
9. Pedro decide quedarse
10. Equipo confía en SocialScrum
```

---

## CONCLUSIÓN

Las salvaguardas éticas NO son opcionales. Son **condición sine qua non** para implementar SocialScrum. Sin ellas, el marco se convierte en herramienta de control y vigilancia, destruyendo la seguridad psicológica que pretende construir.

**Regla de oro**: 
> "Si hay duda sobre si algo es ético, NO se hace."

