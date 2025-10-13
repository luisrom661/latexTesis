# Tesis en LaTeX

Este proyecto contiene la tesis desarrollada en LaTeX con una estructura organizada para facilitar la escritura y mantenimiento.

## Estructura del Proyecto

```
latexTesis/
├── main.tex                 # Archivo principal de la tesis
├── references.bib           # Referencias bibliográficas
├── latexmkrc               # Configuración de latexmk
├── latexindent.yaml        # Configuración de formateo
├── .gitignore              # Archivos ignorados por Git
├── README.md               # Este archivo
│
├── capitulos/              # Capítulos de la tesis
│   ├── capitulo1.tex
│   ├── capitulo2.tex
│   ├── capitulo3.tex
│   ├── capitulo4.tex
│   ├── capitulo5.tex
│   └── capitulo6.tex
│
├── complementos/           # Elementos complementarios
│   ├── abstract.tex        # Resumen en inglés
│   ├── resumen.tex         # Resumen en español
│   ├── agradecimientos-*.tex
│   └── portadas.tex
│
├── recursos/              # Imágenes y recursos
│   ├── *.png              # Imágenes del proyecto
│   └── *.jpg
│
├── bpmn/                  # Archivos BPMN
│   ├── CompleteSocialScrum.xml
│   ├── Developers.xml
│   ├── Product Owner.xml
│   ├── Scrum Master.xml
│   └── Social Guide.xml
│
├── build/                 # Archivos de compilación temporal
│   └── *.bbl
│
└── output/                # Archivos de salida final
    └── main.pdf           # PDF generado
```

## Compilación

Para compilar la tesis:

```bash
# Usando latexmk (recomendado)
latexmk -pdf main.tex

# O manualmente
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

## Notas

- Los archivos temporales de compilación se almacenan en `build/`
- El PDF final se genera en `output/`
- Las imágenes deben colocarse en `recursos/`
- Los archivos BPMN están organizados en `bpmn/`