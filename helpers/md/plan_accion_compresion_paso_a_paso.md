# PLAN DE ACCIÓN: COMPRESIÓN CAPÍTULO 4
## Roadmap paso-a-paso | Diciembre 19, 2025

---

# RESUMEN EJECUTIVO

| Métrica | Actual | Target | Logro |
|---------|--------|--------|-------|
| Páginas Cap 4 | 125 | 90-95 | 24-28% ↓ |
| Redundancias | 8 secciones | 1 única | 100% ↓ |
| Tablas/Figuras | ~10 | ~25 | 150% ↑ |
| Anexos | 2 (E,F) | 4 (C,D,E,F) | Detalles preservados |
| Tiempo implementación | - | 8-10 horas | Semana 1 |

---

# FASE 1: PREPARACIÓN (1.5 HORAS)

## Tarea 1.1: Crear estructura de backup

```bash
# En tu repositorio local
cp capitulo4-nuevo.tex capitulo4-ORIGINAL.tex
cp capitulo4-nuevo.tex capitulo4-COMPRIMIDO.tex
# Trabajarás en capitulo4-COMPRIMIDO.tex
```

## Tarea 1.2: Importar archivos de referencia

- ✅ Descarga `analisis_critico_cap4_compresion.md`
- ✅ Descarga `ejemplos_antes_despues.md`
- ✅ Ten el PDF actual a la vista (para referencias cruzadas)

## Tarea 1.3: Crear checklist de secciones

| Sección | Tipo acción | Estado | Verificado |
|---------|-------------|--------|-----------|
| 4.1-4.3 | Consolidación | ☐ | ☐ |
| 4.4 | Reducción verbosidad | ☐ | ☐ |
| 4.5 | Mover plantillas | ☐ | ☐ |
| 4.6-4.8 | Tabla + síntesis | ☐ | ☐ |
| 4.9 | Tabla única | ☐ | ☐ |
| 4.10 | Consolidación overhead | ☐ | ☐ |
| 4.11 | Revisar redundancias | ☐ | ☐ |
| 4.12 | Tabla maestra + Anexo | ☐ | ☐ |
| Nuevos anexos | Crear C, D | ☐ | ☐ |

---

# FASE 2: ACCIÓN RÁPIDA (3-4 HORAS) - MÁXIMO IMPACTO

## Bloque A: Sección 4.8 → 10 páginas ahorradas

**UBICACIÓN EN PDF ACTUAL**: Páginas ~119-130

### Paso 2A.1: Identificar contenido a comprimir

En `capitulo4-COMPRIMIDO.tex`:

```
Buscar: \subsection{4.8.2 Metodología de estimación}
Hasta: \subsection{4.8.3 Conversión SPS}
```

Esto incluye:
- 4.8.2.1 (Identificar smell) - 2 pág
- 4.8.2.2 (Evaluar severidad) - 2 pág
- 4.8.2.3 (Evaluar complejidad) - 1.5 pág
- 4.8.2.4 (Cálculo SPS) - 1.5 pág
- 4.8.2.5 (Tabla referencia) - 1 pág
- 4.8.3 (Conversión) - 3.5 pág

**TOTAL: ~12 páginas**

### Paso 2A.2: Crear nueva sección 4.8 comprimida

**COPIAR** esto en lugar del contenido anterior:

```latex
\subsection{4.8 Sistema de estimación de items sociales (Story Points Sociales)}

\subsubsection{4.8.1 Escala de estimación SPS}

La escala SPS (1, 2, 3, 5, 8, 13) refleja la complejidad y severidad 
de una intervención social. Ver Tabla 4.38.

\begin{table}[h]
\centering
\caption{Escala de Story Points Sociales (SPS)}
\small
\begin{tabular}{|c|p{5cm}|p{2cm}|}
\hline
\textbf{SPS} & \textbf{Descripción} & \textbf{Categoría} \\
\hline
1 & Problema menor, intervención sencilla, bajo impacto & Trivial \\
\hline
2-3 & Problema moderado, intervención estructurada & Menor \\
\hline
5 & Problema importante, intervención moderadamente compleja & Mayor \\
\hline
8 & Problema crítico, intervención compleja, multi-sesiones & Crítico \\
\hline
13 & Problema sistémico, requiere reestructuración organizacional & Sistémico \\
\hline
\end{tabular}
\end{table}

\subsubsection{4.8.2 Metodología de estimación}

La estimación SPS requiere evaluar tres dimensiones en secuencia.

\begin{table}[h]
\centering
\caption{Proceso SPS: Pasos y criterios}
\tiny
\begin{tabular}{|p{1.2cm}|p{2cm}|p{2.5cm}|p{2.5cm}|}
\hline
\textbf{Paso} & \textbf{Qué evaluar} & \textbf{Valores posibles} & \textbf{Salida} \\
\hline
1 & Categoría smell & Comunicación, Conocimiento, Relacional, Org. & Tipo confirmado \\
\hline
2 & Severidad & Bajo, Medio, Alto & Factor 1-3 \\
\hline
3 & Complejidad intervención & Sencilla, Moderada, Compleja & Factor 1-3 \\
\hline
4 & Cálculo & SPS = Base[Categoria] × Severidad × Complejidad & SPS final \\
\hline
\end{tabular}
\end{table}

\textbf{Ejemplo}: Falta comunicación FE-BE (categoría: Comunicación) con 
alto impacto (severidad: 3) pero intervención moderada (complejidad: 2) 
$\rightarrow$ SPS = 3 × 2 = 6 (aproximar a 5).

\subsubsection{4.8.2.5 Tabla de referencia rápida}

\begin{table}[h]
\centering
\caption{Referencia rápida de estimación SPS por categoría}
\small
\begin{tabular}{|p{2.2cm}|p{2cm}|p{2cm}|p{2cm}|}
\hline
\textbf{Community Smell} & \textbf{Bajo/Sencillo} & \textbf{Medio/Moderado} & 
\textbf{Alto/Complejo} \\
\hline
Falta comunicación & 1-2 & 3-5 & 8 \\
\hline
Silos de conocimiento & 2-3 & 5 & 8-13 \\
\hline
Tensión interpersonal & 2 & 5 & 8 \\
\hline
Misalineamiento OKR & 3 & 5-8 & 13 \\
\hline
\end{tabular}
\end{table}

\subsubsection{4.8.3 Conversión SPS ↔ SP y gestión de capacidad}

El Product Owner integra SPS con Story Points técnicos (SP) 
en el Product Backlog. Principio: 1 SPS = 1 SP en cálculo de capacidad.

\begin{table}[h]
\centering
\caption{Gestión de capacidad combinada (ejemplo)}
\small
\begin{tabular}{|p{2.5cm}|p{1.5cm}|p{1.5cm}|}
\hline
\textbf{Sprint} & \textbf{Capacidad técnica} & \textbf{Capacidad social} \\
\hline
Sprint 1 & 40 SP (técnico) & +10 SPS (social) \\
\hline
Sprint 2 & 35 SP & +15 SPS (más trabajo social) \\
\hline
Sprint 3 & 40 SP & +5 SPS (mejora esperada) \\
\hline
\end{tabular}
\end{table}

\textbf{Mejores prácticas}:
\begin{itemize}
  \item No excedas 15 SPS por Sprint (máximo 30\% de capacidad)
  \item Califica en conjunto PO + Social Guide
  \item Revisa en Sprint Retrospective si estimación fue precisa
  \item Ajusta baseline conforme aprende el equipo
\end{itemize}

Para detalle de implementación: Anexo C.
```

**RESULTADO**: 
- De 12 páginas → 2.5 páginas
- ✅ TODO el contenido esencial preservado
- ✅ Tablas claras
- ✅ Ejemplos concretos
- ✅ Referencias a anexo para profundidad

---

## Bloque B: Sección 4.10 → 9 páginas ahorradas

**UBICACIÓN EN PDF ACTUAL**: Páginas ~139-151 (aproximadamente)

### Paso 2B.1: Localizar en documento

```
Buscar: \section{4.10 Principio de No-Sobrecarga}
Hasta: \section{4.11 Salvaguardas éticas}
```

### Paso 2B.2: Reemplazar con versión comprimida

**COPIAR** esto en lugar del actual:

```latex
\section{4.10 Principio de No-Sobrecarga: Integración sin agregar tiempo}

\subsection{4.10.1 Overhead temporal por evento}

\textbf{Pregunta clave}: ¿Cuánto tiempo adicional requiere SocialScrum?

\textbf{Respuesta}: Menos del 1\% del Sprint (aproximadamente 30-35 minutos 
en un Sprint de dos semanas).

\begin{table}[h]
\centering
\caption{Tabla maestra de overhead por evento}
\small
\begin{tabular}{|l|c|c|c|}
\hline
\textbf{Evento} & \textbf{Duración base} & \textbf{Overhead social} & \textbf{Facilitador} \\
\hline
Daily Standup & 15 min & +2-3 min & Social Guide \\
\hline
Sprint Planning & 4 h & +15 min & Social Guide \\
\hline
Sprint Review & 2 h & +10 min & Social Guide \\
\hline
Sprint Retrospective & 1.5 h & 0 min suma & SM + SG (rebalance) \\
\hline
\textbf{Total/Sprint} & & \textbf{~30 min} & \\
\hline
\end{tabular}
\end{table}

Esta tabla es la fuente única de verdad para comunicaciones con stakeholders. 
Todos los eventos se explican en Cap 4.4; aquí solo mostramos overhead temporal.

\subsection{4.10.2 Optimizaciones prácticas}

Si las restricciones temporales son severas, estas optimizaciones pueden 
reducir overhead sin comprometer resultados:

\begin{table}[h]
\centering
\caption{Optimizaciones posibles de overhead}
\small
\begin{tabular}{|p{2.5cm}|p{2.5cm}|p{1.5cm}|}
\hline
\textbf{Optimización} & \textbf{Contexto ideal} & \textbf{Ahorro} \\
\hline
Daily Standup asincrónico & Equipos distribuidos & -5 min \\
\hline
Sprint Retrospective alternada & Sprints muy cortos & -15 min alternos \\
\hline
Social Guide rotativo & Equipos pequeños & Distribuye carga \\
\hline
Product Backlog Social integrado en técnico & Equipos maduro Scrum & Integración, sin suma \\
\hline
\end{tabular}
\end{table}

\textbf{Importante}: Optimizar sin sacrificar seguridad psicológica o visibilidad.

\subsection{4.10.3 Gestión de expectativas organizacionales}

\subsubsection{4.10.3.1 El framing correcto}

No es ``costo'', es \textbf{inversión}. El overhead de 30 min/sprint retorna:

\begin{itemize}
  \item -40\% rotación (reducción turnover)
  \item +20\% productividad sostenida (velocidad a largo plazo)
  \item -30\% incidentes críticos (defectos)
  \item +25\% satisfacción de equipo
\end{itemize}

ROI estimado: 1 hora invested : 5-10 horas recovered en calidad y velocidad.

\subsubsection{4.10.3.2 Comunicación al equipo}

Mensaje clave: ``Dedicamos 30 minutos/sprint para que el equipo sostenible 
entregue calidad consistente. Es parte del Increment, no ``extra''.'

\subsubsection{4.10.3.3 Comunicación a stakeholders}

Métrica visible: ``Velocidad técnica + Estabilidad social = Predictibilidad.''

Reporta junto: \# SP completados + Health Score + Rotación % + Defectos.

Esto demuestra que la ``lentitud'' aparente (menos SP en algunos sprints 
por asignación de SPS) compensa con menos crisis y retrabajos.

Para implementación: Anexo C, sección sobre stakeholder management.
```

**RESULTADO**: 
- De 12 páginas → 2 páginas
- ✅ TODO lo esencial preservado
- ✅ Tabla maestra clara
- ✅ Métricas ROI concretas
- ✅ Menos narrativa, más datos

---

## Bloque C: Sección 4.12 → 14 páginas ahorradas (MÁXIMA GANANCIA)

**UBICACIÓN EN PDF ACTUAL**: Páginas ~167-183 (aproximadamente)

### Paso 2C.1: Localizar

```
Buscar: \section{4.12 Adaptación contextual y escalabilidad}
Hasta: \section{4.13 Herramientas y tecnología}
```

### Paso 2C.2: Reemplazar contenido extenso

**COPIAR** esto (tablas maestra + decisiones):

```latex
\section{4.12 Adaptación contextual y escalabilidad}

SocialScrum se adapta a diversos contextos. La Tabla 4.64 resume las 
configuraciones principales; implementaciones detalladas en Anexo C.

\subsection{4.12.1 Matriz de configuración por contexto}

\begin{table}[h]
\centering
\caption{Configuraciones de SocialScrum por tamaño y distribución}
\tiny
\begin{tabular}{|p{1.2cm}|p{1.2cm}|p{1.8cm}|p{1.3cm}|p{1.5cm}|p{1.2cm}|p{0.8cm}|}
\hline
\textbf{Tamaño} & \textbf{Ubicación} & \textbf{Social Guide} & 
\textbf{Health Score} & \textbf{Daily Social} & \textbf{Retrospectiva} & 
\textbf{Overhead} \\
\hline
5-7 & Co-loc & Rotativo (10\% c/u) & Básico 3D & Síncrono 5m & Mensual & Bajo \\
\hline
8-15 & Híbrido & Dedicado 50\% & Full 5D & Síncrono 7m & Bi-semanal & Medio \\
\hline
16+ & Distribuido & Dedicado 100\% & Agregado & Asincrónico & Semanal & Alto \\
\hline
\end{tabular}
\end{table}

\subsection{4.12.2 Árbol de decisión: Elegir tu configuración}

\begin{enumerate}
  \item \textbf{¿Cuál es el tamaño del equipo?}
  \begin{itemize}
    \item 5-7 → Fila 1 (Pequeño)
    \item 8-15 → Fila 2 (Mediano)
    \item 16+ → Fila 3 (Grande)
  \end{itemize}
  
  \item \textbf{¿Dónde está ubicado? (mayormente)}
  \begin{itemize}
    \item Una oficina → Co-localizado
    \item 1-2 ciudades → Híbrido
    \item 3+ ciudades/países → Distribuido
  \end{itemize}
  
  \item \textbf{¿Madurez Scrum del equipo?}
  \begin{itemize}
    \item Principiante → Simplifica secciones (ver Anexo C)
    \item Experimentado → Implementa full SocialScrum
  \end{itemize}
  
  \item \textbf{¿Cultura organizacional?}
  \begin{itemize}
    \item Confianza alta → Adopta directamente
    \item Confianza media → Requiere patrocinio ejecutivo
    \item Confianza baja → Precisa transformación previa (fuera alcance SocialScrum)
  \end{itemize}
\end{enumerate}

\subsection{4.12.3 Notas por configuración}

\textbf{Equipos pequeños (5-7):} Social Guide es rol rotativo. Cada miembro 
dedica ~10\% tiempo. Simplificaciones permitidas: Health Score de 3 dimensiones 
en lugar de 5; Retrospectiva social cada 2-3 sprints en lugar de cada sprint.

\textbf{Equipos medianos (8-15):} Social Guide es dedicado pero no full-time 
(50-70\%). Implementación estándar. Si presupuesto permite, considera dedicación 
100\% a partir de 15+ personas.

\textbf{Equipos grandes (16+):} Un Social Guide por 8-10 personas idealmente. 
Health Score es agregado (equipo padre reporta síntesis). Coordinación entre 
Social Guides en reunión mensual.

\textbf{Equipos distribuidos:} Daily Standup Social es asincrónico (Slack, 
email thread). Retrospectiva social es síncrona (respetar time-zone del 
social guide principal). Herramientas críticas: Jira, Google Sheets, Slack.

Para casos específicos (híbrido con 1-2 remotos, multiple teams, subcontratación, 
etc.): ver Anexo C.

\subsection{4.12.4 Adaptabilidad vs. rigidez}

Pregunta de oro: \textbf{``¿Esta configuración respeta nuestro contexto real?''}

Si la respuesta es ``no'', adapta. Lo importante es preservar:
\begin{itemize}
  \item \textbf{Seguridad psicológica} (no negonable)
  \item \textbf{Frecuencia mínima de inspección social} (al menos 1× por sprint)
  \item \textbf{Confidencialidad absoluta} (no negonable)
  \item \textbf{Rol de Social Guide claro} (responsabilidad explícita)
\end{itemize}

Todo lo demás es flexible.
```

**RESULTADO**: 
- De 16 páginas → 3 páginas
- ✅ Tabla maestra clara
- ✅ Árbol de decisión
- ✅ Notas prácticas
- ✅ Detalles extensos preservados en Anexo C

---

## Bloque D: Otros ajustes rápidos (Secciones 4.9, 4.2.3)

### Sección 4.9: Estrategias → Tabla única (8 pág → 2 pág)

**LOCALIZAR**: Páginas ~132-140 (aproximadamente)

**REEMPLAZAR CON**:

```latex
\section{4.9 Estrategias de mitigación de community smells}

SocialScrum ofrece un catálogo de intervenciones probadas. La Tabla 4.42 
resume por categoría de smell; detalles de implementación y casos de estudio 
en Anexo F.

\begin{table}[h]
\centering
\caption{Intervenciones recomendadas por categoría de community smell}
\small
\begin{tabular}{|p{1.8cm}|p{2.5cm}|p{2.5cm}|p{1.5cm}|}
\hline
\textbf{Categoría} & \textbf{Ejemplo Smell} & \textbf{Intervención típica} & 
\textbf{Ref. anexo} \\
\hline
Comunicación & Silos FE-BE & Pair programming rotativo, Daily cross-team & F.1 \\
\hline
Conocimiento & Experto único & Sesiones transfer., documentación wiki & F.2 \\
\hline
Relacional & Tensión A-B & Mediación SG, retro psicológica & F.3 \\
\hline
Organización & PO no alineado & OKR realignment, Sprint Goal dual & F.4 \\
\hline
Escalamiento & Conflicto PO-SG & Protocolo a CTO (Cap 4.11.3) & 4.11.3 \\
\hline
\end{tabular}
\end{table}

\subsection{4.9.1 Cómo seleccionar estrategia en Sprint Planning}

\begin{enumerate}
  \item Identifica community smell en Registro (Cap 4.5.3)
  \item Clasifica en categoría (Comunicación, Conocimiento, etc.)
  \item Consulta Tabla 4.42 para intervención recomendada
  \item Estima SPS según complejidad (Tabla 4.41)
  \item Prioriza en Product Backlog Social (Cap 4.5.1.4)
  \item Asigna en Sprint Backlog Social (Cap 4.5.2)
\end{enumerate}

Para diseño de experimentos, métricas de éxito y seguimiento: Anexo F.
```

**RESULTADO**: 8 páginas → 1 página + detalles preservados en Anexo F

---

### Sección 4.2.3: Gestión de objeciones → Tabla (3 pág → 0.5 pág)

**LOCALIZAR**: Páginas ~73-76

**REEMPLAZAR CON**:

```latex
\subsubsection{4.2.3.3 Gestión de objeciones comunes}

Es probable que durante la presentación surjan resistencias. La Tabla 4.XX 
agrupa las más comunes con respuestas breves y referencias.

\begin{table}[h]
\centering
\caption{Objeciones frecuentes: respuestas rápidas}
\small
\begin{tabular}{|p{2.5cm}|p{4cm}|p{2cm}|}
\hline
\textbf{Objeción} & \textbf{Respuesta} & \textbf{Ver} \\
\hline
``Mucho tiempo adicional'' & 30 min/sprint = 1\% del tiempo; ROI 5-10× & Cap 4.10 \\
\hline
``¿Quién lo dirige?'' & Social Guide (proceso selección Cap 4.3) & Cap 4.3 \\
\hline
``Si no hay problemas?'' & Work social preventivo sigue siendo crítico & Cap 4.6 \\
\hline
``¿Y confidencialidad?'' & Salvaguardas éticas garantizan protección & Cap 4.11 \\
\hline
``¿Escala?'' & Sí, con adaptaciones por tamaño/contexto & Cap 4.12 \\
\hline
\end{tabular}
\end{table}

Si objeción específica requiere profundidad, consulta referencias en columna ``Ver''.
```

**RESULTADO**: 3 páginas → 0.5 páginas

---

## RESUMEN FASE 2

| Bloque | Sección | De | A | Ahorro | Tiempo |
|--------|---------|----|----|--------|--------|
| A | 4.8 (SPS) | 12 | 2.5 | 9.5 | 1.5h |
| B | 4.10 (Overhead) | 12 | 2 | 10 | 1.5h |
| C | 4.12 (Adaptación) | 16 | 3 | 13 | 1.5h |
| D | 4.9 (Estrategias) | 8 | 1 | 7 | 1h |
| D | 4.2.3 (Objeciones) | 3 | 0.5 | 2.5 | 0.5h |
| **SUBTOTAL** | | **51** | **9** | **42** | **6h** |

**Página inicial Cap 4**: 125  
**Después Fase 2**: ~83 páginas  
**Reducción**: 42 páginas (33% compresión) ✅

---

# FASE 3: CREAR/ACTUALIZAR ANEXOS (2-3 HORAS)

## Tarea 3.1: Crear Anexo C "Adaptaciones por contexto"

**Contenido**: Traer TODO de sección 4.12 anterior + expandir

**ESTRUCTURA**:
```
Anexo C: Adaptaciones SocialScrum por contexto
├─ C.1 Equipos pequeños (5-7)
│  ├─ Configuración completa
│  ├─ Simplificaciones permitidas
│  └─ Ejemplos de rol rotativo
│
├─ C.2 Equipos medianos (8-15)
│  ├─ Configuración recomendada
│  ├─ Health Score full
│  └─ Practicas adicionales
│
├─ C.3 Equipos grandes (16+)
│  ├─ Multiple Social Guides
│  ├─ Health Score agregado
│  └─ Coordinación inter-equipos
│
├─ C.4 Equipos distribuidos vs co-localizados
│  ├─ Co-localizados (100%)
│  ├─ Híbridos (50-50 remoto)
│  └─ Completamente distribuidos (100% remoto)
│
├─ C.5 Adaptación por madurez Scrum
│  ├─ Principiantes
│  ├─ Intermedios
│  └─ Expertos
│
└─ C.6 Adaptación por cultura organizacional
   ├─ Confianza alta
   ├─ Confianza media
   └─ Confianza baja (limitaciones)
```

**Aproximado**: 8-10 páginas

---

## Tarea 3.2: Expandir Anexo F "Intervenciones detalladas"

**Agregar**:
- F.1 Estrategias comunicación (Pair programming, Daily cross-team, etc.)
- F.2 Estrategias conocimiento (Transfer sessions, wiki, documentación)
- F.3 Estrategias relacionales (Mediación, retrospectiva psicológica)
- F.4 Estrategias organizacionales (OKR, Sprint Goal, realineamiento)
- F.5 Casos de estudio por smell (con ejemplos de equipo Real/simulado)

**Aproximado**: 10-12 páginas (ya existe, solo expandir)

---

## Tarea 3.3: Crear Anexo D "Ejemplos verbosos"

**Contenido**: Todo lo que quitamos de Cap 4 pero que tiene valor pedagógico

**ESTRUCTURA**:
```
Anexo D: Ejemplos detallados y casos de estudio expandidos
├─ D.1 Ejemplo completo: Priorización en 18 escenarios
│  ├─ Cómo el equipo Phoenix priorizó en Sprint 2
│  ├─ Tabla de decisión completada
│  └─ Flujo de conversación real
│
├─ D.2 Ejemplos Daily Standup Social
│  ├─ Daily "normal" (sin issues)
│  ├─ Daily con una señal (impedimento social)
│  └─ Daily en crisis (conflicto emergente)
│
├─ D.3 Ejemplo completo: Retrospectiva Social
│  ├─ Facilitation notes paso-a-paso
│  ├─ Diálogo de mediación real
│  └─ Formulation de experimentos
│
└─ D.4 Tabla exhaustiva: Community Smells vs Intervenciones
   └─ 30+ smells con tratamiento completo
```

**Aproximado**: 8-10 páginas

---

# FASE 4: CONSOLIDACIÓN Y VERIFICACIÓN (1.5-2 HORAS)

## Tarea 4.1: Buscar redundancias residuales

En `capitulo4-COMPRIMIDO.tex`:

```bash
# Buscar palabras clave repetidas
grep -n "Health Score" capitulo4-COMPRIMIDO.tex | wc -l
grep -n "community smell" capitulo4-COMPRIMIDO.tex | wc -l
grep -n "overhead" capitulo4-COMPRIMIDO.tex | wc -l
```

**Objetivo**: Cada concepto MENCIONADO máximo 2-3 veces, DEFINIDO 1× única.

---

## Tarea 4.2: Verificar referencias internas

Checklist:
- ✅ Todo `\ref{tab:X}` y `\ref{sec:X}` existe
- ✅ Todas las referencias a Anexo C/D son correctas
- ✅ Tabla 4.51 (overhead) es ÚNICA fuente de verdad
- ✅ Tabla 4.64 (adaptación) reemplazó narrativa de 4.12

---

## Tarea 4.3: Compilar y verificar PDF

```bash
pdflatex capitulo4-COMPRIMIDO.tex
bibtex capitulo4-COMPRIMIDO.aux
pdflatex capitulo4-COMPRIMIDO.tex
pdflatex capitulo4-COMPRIMIDO.tex
```

**Verificar**:
- ✅ NO hay `[?]` en referencias
- ✅ Números de página correctos en tabla de contenido
- ✅ Índice de figuras/tablas actualizado
- ✅ Página count: ~85-95 (target alcanzado)

---

## Tarea 4.4: Comparar antes vs después

```bash
# Contar palabras
wc -w capitulo4-ORIGINAL.tex  # ~30,000 palabras esperadas
wc -w capitulo4-COMPRIMIDO.tex  # ~18,000-20,000 esperadas

# Contar páginas
# Abre en PDF viewer y mira número final
```

**Esperado**:
- Palabras: -30-40%
- Páginas: -24-28%

---

# FASE 5: INTEGRACIÓN EN MAIN.PDF (30 MIN)

## Tarea 5.1: Reemplazar main.pdf

```bash
# En tu main.tex (o donde incluyas Cap 4)
\include{capitulo4-COMPRIMIDO}  # En lugar de capitulo4-nuevo.tex

# Si es archivo separado, actualizar en main.tex
```

## Tarea 5.2: Compilar main.tex completo

```bash
pdflatex main.tex
bibtex main.aux
pdflatex main.tex
pdflatex main.tex
```

## Tarea 5.3: Verificar integridad

- ✅ Índice general (ToC) correcto
- ✅ Referencias bibliográficas funcionales
- ✅ Números de sección correctos
- ✅ Saltos de página apropiados

---

# TIMELINE ESTIMADO

| Fase | Tarea | Duración | Inicio | Fin |
|------|-------|----------|--------|-----|
| 1 | Preparación | 1.5h | Día 1, 9am | 10:30am |
| 2 | Bloque A+B+C (Máx impacto) | 3h | 10:30am | 1:30pm |
| 2 | Bloque D (Otros ajustes) | 1h | 1:30pm | 2:30pm |
| 3 | Crear/actualizar Anexos | 2.5h | 2:30pm | 5pm |
| 4 | Consolidación + Verificación | 1.5h | Día 2, 9am | 10:30am |
| 5 | Integración + Compilación | 0.5h | 10:30am | 11am |
| | **TOTAL** | **~10 horas** | | |

**Recomendación**: 2 días, 5 horas por día (con breaks)

---

# CHECKLIST FINAL

**Antes de compilar final main.tex**:

- [ ] Cap 4 comprimido de 125 → ~85-95 páginas
- [ ] Tabla 4.51 es ÚNICA fuente de overhead
- [ ] Tabla 4.64 es ÚNICA referencia de adaptación
- [ ] Sección 4.8 en 2.5 páginas (tablas, no narrativa)
- [ ] Sección 4.10 en 2 páginas (tablas, ROI claro)
- [ ] Sección 4.12 en 3 páginas + Anexo C
- [ ] Anexo C creado (adaptaciones contextuales)
- [ ] Anexo D creado (ejemplos verbosos)
- [ ] Anexo F expandido (intervenciones detalladas)
- [ ] NO hay redundancias visibles (4 menciones máximo por concepto)
- [ ] Todas referencias internas funcionan (\ref, \cite)
- [ ] PDF compila sin errores
- [ ] Página count verificada (≤ 95 páginas Cap 4)

---

# PREGUNTAS Y RESPUESTAS

### P: ¿Pierdo contenido importante?
**R**: NO. Todo se redistribuye a anexos. El tribunal SIGUE viendo todo, 
solo que mejor organizado. Mejor para defensa porque tienes "profundidad bajo demanda".

### P: ¿Qué si meto la pata en LaTeX?
**R**: Por eso hiciste backup: `capitulo4-ORIGINAL.tex`. Reviertes en 5 min.

### P: ¿Cuánto debe reducir mínimamente?
**R**: MÍNIMO 20% (25 páginas). Si solo logras eso, ya es victoria. 
Target es 28% (35 páginas). Ambicioso es 35% (43 páginas, pero probablemente 
demasiado comprimido para pregrado).

### P: ¿Y si no tengo 10 horas esta semana?
**R**: Prioriza FASE 2 Bloques A+B+C (6 horas = 42 páginas). 
Eso ya te lleva de 125 → 83. LUEGO, en siguiente sesión, Anexos.

### P: ¿Cómo vendo la compresión al tribunal?
**R**: "Reorganicé el Cap 4 para máxima claridad: contenido esencial en capítulo, 
detalles y casos extensos en anexos. Accesibilidad sin sacrificar rigor."

Tribunal APRECIARÁ la estructura clara, NO VERÁ "tesis reducida".

---

**Buena suerte. Tienes esto. ¡Implementa!** 🚀
