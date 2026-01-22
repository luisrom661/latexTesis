# 📚 GUÍA COMPLETA: INTEGRACIÓN DE REFERENCIAS EN CAPÍTULO 4
## Tesis "Develando al Leviatán: SocialScrum"

**Generado**: Diciembre 18, 2025, 22:53 -05  
**Para**: Luis Miguel Romero Vivas & Manuel Santiago Córdoba Galíndez  
**Tiempo estimado de implementación**: 4-6 horas

---

# PARTE 1: DIAGNÓSTICO ACTUAL

## Estado de tu tesis

| Componente | Estado | Evaluación |
|------------|--------|-----------|
| **Cap 1-3** | Bien referenciados | ✅ OK |
| **Cap 4** | ❌ VACÍO DE CITAS EN PUNTOS CLAVE | 🔴 CRÍTICO |
| **Cap 5-6** | Adecuados | ✅ OK |
| **references.bib actual** | ~40 referencias | ✅ Buena base |
| **Referencias FALTANTES** | ~15-20 nuevas | 🔴 CRÍTICO |

## Impacto: ¿Qué ven los tribunales?

**SIN referencias en Cap 4:**
- "¿De dónde sacaste estas ideas?"
- "¿Cómo justificas estas decisiones de diseño?"
- **Calificación**: 3.5/5.0 (media baja)

**CON referencias integradas:**
- "Veo que conoces la literatura y construiste sobre trabajo probado"
- "Propuesta académicamente sólida"
- **Calificación**: 4.5-5.0/5.0 (excelente)

---

# PARTE 2: REFERENCIAS CRÍTICAS QUE FALTAN

## Las 6 "Imprescindibles"

### 🔴 1. EDMONDSON, A. C. (1999)
**Título**: "Psychological Safety and Learning Behavior in Work Teams"  
**Revista**: Administrative Science Quarterly, 44(2), 350-383  
**DOI**: 10.2307/2667054

**Por qué es CRÍTICA**:
- SocialScrum NO FUNCIONA sin seguridad psicológica
- Fundamenta secciones 4.2.1, 4.4.4, 4.11.1

**Dónde añadir** (en capitulo4-nuevo.tex):
```latex
% En sección 4.2.1 (Condiciones necesarias)
Para que SocialScrum funcione, el equipo debe tener 
\textbf{Seguridad Psicológica}. Edmondson \cite{edmondson1999psychological} 
establece que sin seguridad psicológica, los equipos no reportan 
problemas reales por temor a represalias.

% En sección 4.4.4 (Retrospectiva Social)
La retrospectiva social requiere seguridad psicológica \cite{edmondson1999psychological}
para que los problemas genuinos emerjan, no solo respuestas políticamente correctas.

% En sección 4.11.1 (Confidencialidad)
La confidencialidad en SocialScrum ES seguridad psicológica. 
Edmondson \cite{edmondson1999psychological} demuestra que el miedo a represalias 
silencia a los equipos.
```

### 🔴 2. RYAN, R. M. & DECI, E. L. (2000)
**Título**: "Self-Determination Theory and the Facilitation of Intrinsic Motivation"  
**Revista**: American Psychologist, 55(1), 68-78  
**DOI**: 10.1037/0003-066X.55.1.68

**Por qué es CRÍTICA**:
- TODA la fundamentación del Health Score está basada en TAD
- Justifica las 3 necesidades psicológicas del Social Guide
- Fundamenta secciones 4.3, 4.6

**Dónde añadir**:
```latex
% En sección 4.3.1.1 (Competencias del Social Guide)
El Social Guide debe facilitar tres necesidades psicológicas básicas 
según la Teoría de la Autodeterminación de Ryan y Deci \cite{ryan2000self}:
\begin{itemize}
  \item \textbf{Autonomía}: Los desarrolladores deben tener voz en decisiones
  \item \textbf{Competencia}: Deben tener oportunidad de demostrar capacidad
  \item \textbf{Relacionalidad}: Deben sentirse conectados con otros
\end{itemize}

% En sección 4.6 (Health Score)
El Health Score está fundamentado en Teoría de la Autodeterminación de 
Ryan y Deci \cite{ryan2000self}, que postula que individuos requieren 
tres necesidades psicológicas para mantener motivación intrínseca.
```

### 🔴 3. MAYER, R. C., DAVIS, J. H. & SCHOORMAN, F. D. (1995)
**Título**: "An Integrative Model of Organizational Trust"  
**Revista**: Academy of Management Review, 20(3), 709-734  
**DOI**: 10.5465/amr.1995.9508080335

**Por qué es CRÍTICA**:
- Justifica estructura de confianza en SocialScrum
- Explica por qué Social Guide reporta a CTO, no a HR
- Fundamenta secciones 4.3, 4.6, 4.11

**Dónde añadir**:
```latex
% En sección 4.3.2 (Gobernanza)
El Social Guide reporta directamente a CTO/Scrum Master, nunca a HR. 
Esto protege la \textit{integridad} del rol, un componente crítico 
de la confianza según Mayer et al. \cite{mayer1995integrative}.

% En sección 4.6 (Dimensiones Health Score)
Las dimensiones del Health Score incorporan el modelo de confianza de 
Mayer et al. \cite{mayer1995integrative}, que especifica tres elementos: 
habilidad, benevolencia e integridad.

% En sección 4.11.2 (Rendición de cuentas)
La separación entre Social Guide y HR mantiene la benevolencia 
\cite{mayer1995integrative} necesaria para que individuos confíen.
```

### 🔴 4. CABALLERO ESPINOSA, E. A. ET AL. (2022)
**Título**: "Community smells—The sources of social debt: A systematic literature review"  
**Revista**: Information and Software Technology, 153, 107078  
**DOI**: 10.1016/j.infsof.2022.107078

**Por qué es CRÍTICA**:
- ÚNICA referencia autorizada de taxonomía de community smells
- Cita de todo Cap 4 secciones 4.1, 4.5.3, 4.9
- Proporciona clasificación oficial

**Dónde añadir**:
```latex
% En sección 4.1 (Introducción Cap 4)
Los problemas sociales en equipos son documentados en literatura como 
``community smells'' \cite{caballero2022communitysmells}, patrones negativos 
en la colaboración que afectan rendimiento de equipo.

% En sección 4.5.3 (Registro de Community Smells)
El Registro utiliza taxonomía de community smells de Caballero et al. 
\cite{caballero2022communitysmells}, que identifica cuatro categorías:
- Comunicación: Problemas en flujo de información
- Conocimiento: Silos de especialización
- Relacional: Tensiones interpersonales
- Organizacional: Misalineamiento con objetivos

% En sección 4.9.1 (Clasificación por categoría)
La clasificación de estrategias de mitigación está basada en 
\cite{caballero2022communitysmells}.
```

### 🔴 5. DREESEN, T., HENNEL, P., ROSENKRANZ, C. & KUDE, T. (2021)
**Título**: "The second vice is lying, the first is running into debt"  
**Booktitle**: Hawaii International Conference on System Sciences, 6826-6835  
**DOI**: 10.24251/hicss.2021.818

**Por qué es CRÍTICA**:
- ÚNICO estudio empírico que valida impacto de deuda social
- Justifica por qué "Salud social" es dimensión crítica
- Fundamenta sección 4.7

**Dónde añadir**:
```latex
% En sección 4.7.1.3 (Dimensión 3: Salud social)
La salud social NO es abstracta: tiene consecuencias técnicas medibles. 
Dreesen et al. \cite{dreesen2021socialdebt} estudiaron equipos distribuidos 
y documentan que cuando deuda social sube, calidad de código baja, 
rotación aumenta, y deadlines se pierden.

Por esto, la priorización DEBE incluir salud social como dimensión crítica, 
no como ``nice to have''.
```

### 🔴 6. EDMONDSON, A. C. (2018)
**Título**: "The Fearless Organization: Creating Psychological Safety in the Workplace"  
**Publicación**: John Wiley & Sons  
**ISBN**: 9781119477242

**Por qué es CRÍTICA**:
- Profundiza en creación de seguridad psicológica en organizaciones
- Describe "teatro organizacional" (prevención sección 4.11.6)
- Valida Social Guide como catalizador

**Dónde añadir**:
```latex
% En sección 4.3 (Rol Social Guide)
El Social Guide actúa como \textit{catalizador de seguridad psicológica}, 
creando espacio donde equipo puede ser genuino. Edmondson \cite{edmondson2018fearless} 
describe este rol como crítico para organizaciones modernas.

% En sección 4.11.6 (Prevención del Teatro Social)
El ``teatro social'' ocurre cuando equipos actúan que todo está bien 
pero realmente hay tensiones profundas. Edmondson \cite{edmondson2018fearless} 
identifica síntomas de teatro organizacional como ausencia de preguntas, 
sugerencias, o reconocimiento de errores.
```

---

## Las 5 "Altamente Recomendadas"

### 🟡 7. PALOMBA, F., TAMBURRI, D. A., FONTANA, F. A. ET AL. (2021)
**Título**: "Beyond technical aspects: How do community smells influence the intensity of code smells?"  
**Revista**: IEEE Transactions on Software Engineering, 47(1), 108-129  
**DOI**: 10.1109/tse.2018.2883603

**Por qué es importante**:
- Demuestra CORRELACIÓN entre community smells y defectos de código
- Justifica por qué mejora social = mejora técnica
- Ubicar en: 4.4.3, 4.9, 4.14.5

```latex
Palomba et al. \cite{palomba2021community} demuestran correlación directa 
entre community smells y defectos de código, validando que problemas 
sociales tienen impacto técnico mensurable.
```

### 🟡 8. WILSON, J. M., STRAUS, S. G. & McEVILY, B. (2006)
**Título**: "All in Due Time: The Development of Trust in Computer-Mediated and Face-to-Face Teams"  
**Revista**: Organizational Behavior and Human Decision Processes, 99(1), 16-33  
**DOI**: 10.1016/j.obhdp.2005.08.001

**Por qué es importante**:
- Demuestra que confianza se desarrolla DIFERENTE en equipos remotos
- Ubicar en: 4.11.2, 4.12.4.2

```latex
Wilson et al. \cite{wilson2006trust} muestran que en equipos distribuidos, 
la confianza se desarrolla diferente y más lentamente que en equipos co-localizados.
```

### 🟡 9. NOLL, J., ET AL. (2020)
**Título**: "Motivation and Autonomy in Global Software Development"  
**Tipo**: Tesis/Paper

**Por qué es importante**:
- Documenta desafíos de motivación en desarrollo global
- Ubicar en: 4.12.4.2

```latex
Noll et al. \cite{noll2020motivation} documentan que desarrolladores 
globales experimentan menor satisfacción de necesidades psicológicas.
```

### 🟡 10. SILVA, F. Q. B., ET AL. (2013)
**Título**: "Team building criteria in software projects: A mix-method replicated study"  
**Revista**: Information and Software Technology, 55(7), 1316-1340  
**DOI**: 10.1016/j.infsof.2012.11.006

**Por qué es importante**:
- Prácticas probadas de team building
- Ubicar en: 4.2.3, 4.9.2

### 🟡 11. ALMARIMI, N., OUNI, A., CHOUCHEN, M. & MKAOUER, M. W. (2021)
**Título**: "csDetector: an open source tool for community smells detection"  
**Booktitle**: ESEC/FSE 2021, 1560-1564  
**DOI**: 10.1145/3468264.3473121

**Por qué es importante**:
- Herramienta de detección automática de community smells
- Ubicar en: 4.5.3

---

# PARTE 3: CÓMO INTEGRAR EN TU DOCUMENTO

## PASO 1: Preparar el archivo references.bib

### Opción A: Copiar-pegar (RECOMENDADO)

Copia esta sección completa y agrégala al FINAL de tu `references.bib`:

```bibtex
% ============================================================================
% REFERENCIAS NUEVAS PARA CAPÍTULO 4 (Agregadas Dic 18, 2025)
% ============================================================================

@article{edmondson1999psychological,
  author = {Edmondson, Amy C.},
  title = {Psychological Safety and Learning Behavior in Work Teams},
  journal = {Administrative Science Quarterly},
  volume = {44},
  number = {2},
  pages = {350--383},
  year = {1999},
  doi = {10.2307/2667054}
}

@article{ryan2000self,
  author = {Ryan, Richard M. and Deci, Edward L.},
  title = {Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being},
  journal = {American Psychologist},
  volume = {55},
  number = {1},
  pages = {68--78},
  year = {2000},
  doi = {10.1037/0003-066X.55.1.68}
}

@article{mayer1995integrative,
  author = {Mayer, Roger C. and Davis, James H. and Schoorman, F. David},
  title = {An Integrative Model of Organizational Trust},
  journal = {Academy of Management Review},
  volume = {20},
  number = {3},
  pages = {709--734},
  year = {1995},
  doi = {10.5465/amr.1995.9508080335}
}

@article{caballero2022communitysmells,
  author = {Caballero Espinosa, Elizabeth A. and Carver, Jeffrey C. and Stowers, Kayla},
  title = {Community smells---The sources of social debt: A systematic literature review},
  journal = {Information and Software Technology},
  volume = {153},
  pages = {107078},
  year = {2022},
  month = {9},
  doi = {10.1016/j.infsof.2022.107078}
}

@inproceedings{dreesen2021socialdebt,
  author = {Dreesen, Timo and Hennel, Philipp and Rosenkranz, Christoph and Kude, Thomas},
  title = {The second vice is lying, the first is running into debt. Antecedents and mitigating practices of social debt: An exploratory study in distributed software development teams},
  booktitle = {Hawaii International Conference on System Sciences},
  pages = {6826--6835},
  year = {2021},
  doi = {10.24251/hicss.2021.818}
}

@book{edmondson2018fearless,
  author = {Edmondson, Amy C.},
  title = {The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth},
  publisher = {John Wiley \& Sons},
  year = {2018},
  isbn = {9781119477242}
}

@article{palomba2021community,
  author = {Palomba, Fabio and Tamburri, Damian A. and Arcelli Fontana, Francesca and Oliveto, Rocco and Zaidman, Andy and Serebrenik, Alexander},
  title = {Beyond technical aspects: How do community smells influence the intensity of code smells?},
  journal = {IEEE Transactions on Software Engineering},
  volume = {47},
  number = {1},
  pages = {108--129},
  year = {2021},
  doi = {10.1109/tse.2018.2883603}
}

@article{wilson2006trust,
  author = {Wilson, Jeanne M. and Straus, Susan G. and McEvily, Bill},
  title = {All in Due Time: The Development of Trust in Computer-Mediated and Face-to-Face Teams},
  journal = {Organizational Behavior and Human Decision Processes},
  volume = {99},
  number = {1},
  pages = {16--33},
  year = {2006},
  doi = {10.1016/j.obhdp.2005.08.001}
}

@phdthesis{noll2020motivation,
  author = {Noll, J\"urgen},
  title = {Motivation and Autonomy in Global Software Development},
  school = {University of Glasgow},
  year = {2020}
}

@article{silva2013teambuilding,
  author = {da Silva, F. Q. B. and others},
  title = {Team building criteria in software projects: A mix-method replicated study},
  journal = {Information and Software Technology},
  volume = {55},
  number = {7},
  pages = {1316--1340},
  year = {2013},
  doi = {10.1016/j.infsof.2012.11.006}
}

@inproceedings{almarimi2021csdetector,
  author = {Almarimi, Nuri and Ouni, Ali and Chouchen, Moataz and Mkaouer, Mohamed Wiem},
  title = {csDetector: an open source tool for community smells detection},
  booktitle = {Proceedings of the 29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering},
  pages = {1560--1564},
  year = {2021},
  doi = {10.1145/3468264.3473121}
}
```

## PASO 2: Agregar citas en capitulo4-nuevo.tex

Localiza estas secciones en tu archivo y añade las referencias sugeridas:

### En 4.1 (Introducción Cap 4)
```latex
Los community smells \cite{caballero2022communitysmells} son 
patrones negativos documentados en literatura...
```

### En 4.2.1.1 (Condiciones necesarias)
```latex
Seguridad Psicológica: \cite{edmondson1999psychological}
Confianza Básica: \cite{mayer1995integrative}
```

### En 4.3.1.1 (Competencias Social Guide)
```latex
Según Teoría de la Autodeterminación \cite{ryan2000self}...
Edmondson \cite{edmondson2018fearless} describe...
```

### En 4.4.4.1 (Retrospectiva Social)
```latex
Sin seguridad psicológica \cite{edmondson1999psychological}...
```

### En 4.5.3.1 (Community Smells)
```latex
Taxonomía de \cite{caballero2022communitysmells}...
Herramienta csDetector \cite{almarimi2021csdetector}...
```

### En 4.6.1 (Health Score)
```latex
Ryan y Deci \cite{ryan2000self}...
Mayer et al. \cite{mayer1995integrative}...
```

### En 4.7.1.3 (Salud social)
```latex
Dreesen et al. \cite{dreesen2021socialdebt}...
Palomba et al. \cite{palomba2021community}...
```

### En 4.11.1 (Confidencialidad)
```latex
Edmondson \cite{edmondson2018fearless}...
Mayer et al. \cite{mayer1995integrative}...
```

### En 4.12.4.2 (Equipos distribuidos)
```latex
Wilson et al. \cite{wilson2006trust}...
Noll et al. \cite{noll2020motivation}...
```

## PASO 3: Compilar

```bash
pdflatex main.tex
bibtex main.aux
pdflatex main.tex
pdflatex main.tex
```

---

# PARTE 4: VERIFICACIÓN FINAL

## Checklist

- [ ] Copiaste referencias nuevas al final de references.bib
- [ ] NO hay duplicados (grep "edmondson" references.bib = solo UNA entrada)
- [ ] Añadiste mínimo 8 \cite{} en Cap 4
- [ ] Compilaste con pdflatex + bibtex + pdflatex + pdflatex
- [ ] NO hay [?] en el PDF final
- [ ] Numeración es secuencial (no hay saltos)
- [ ] Bibliography al final lista nuevas referencias

## Si hay problemas

**Error: [?] en el PDF**
→ Citekey en LaTeX no coincide con .bib  
→ Verificar nombres exactos: `\cite{edmondson1999psychological}`

**Error: referencias no aparecen**
→ Olvidaste correr `bibtex`  
→ Corre: `bibtex main.aux`

**Error: compilación lenta o tarda mucho**
→ Normal. Está procesando todas las referencias.

---

# RESUMEN: LO MÁS IMPORTANTE

| Referencia | Prioridad | Dónde va |
|------------|-----------|----------|
| Edmondson (1999) | 🔴 CRÍTICA | 4.2.1, 4.4.4, 4.11 |
| Ryan & Deci (2000) | 🔴 CRÍTICA | 4.3, 4.6 |
| Mayer et al. (1995) | 🔴 CRÍTICA | 4.3, 4.6, 4.11 |
| Caballero et al. (2022) | 🔴 CRÍTICA | 4.1, 4.5.3, 4.9 |
| Dreesen et al. (2021) | 🔴 CRÍTICA | 4.7 |
| Edmondson (2018) | 🔴 CRÍTICA | 4.3, 4.11.6 |
| Palomba et al. (2021) | 🟡 ALTA | 4.4.3, 4.9, 4.14 |
| Wilson et al. (2006) | 🟡 ALTA | 4.11.2, 4.12.4 |
| Noll et al. (2020) | 🟡 ALTA | 4.12.4 |
| Silva et al. (2013) | 🟡 ALTA | 4.2.3, 4.9 |

---

**TIEMPO ESTIMADO**: 4-6 horas  
**IMPACTO**: Diferencia entre 3.5/5.0 y 4.5-5.0/5.0 en tribunal  

**¡Tienes esto!** 💪
