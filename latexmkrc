# latexmkrc - Configuración simplificada (sin directorios separados)
# Esto genera todos los archivos en el directorio raíz para máxima compatibilidad

$pdf_mode = 1;
$pdflatex = 'pdflatex -shell-escape -interaction=nonstopmode %O %S';

# Extensiones de archivos a limpiar
$clean_ext = 'aux bbl bcf blg brf fdb_latexmk fls glg glo gls acn acr alg idx ilg ind ist lof log lot out run.xml synctex.gz toc xdv glsdefs';

# Glosarios - configuración estándar
add_cus_dep('glo', 'gls', 0, 'run_makeglossaries');
add_cus_dep('acn', 'acr', 0, 'run_makeglossaries');

sub run_makeglossaries {
    if ( $silent ) {
        return system "makeglossaries -q \"$_[0]\"";
    } else {
        return system "makeglossaries \"$_[0]\"";
    }
}

push @generated_exts, 'glo', 'gls', 'glg', 'acn', 'acr', 'alg', 'ist';
