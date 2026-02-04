# latexmkrc - Configuración con directorio de salida separado
# Archivos temporales van a "build/", el PDF final queda en el directorio raíz

$pdf_mode = 1;
$pdflatex = 'pdflatex -shell-escape -interaction=nonstopmode %O %S';

# Directorio de salida para archivos auxiliares/temporales
$aux_dir = 'build';

# Extensiones de archivos a limpiar
$clean_ext = 'aux bbl bcf blg brf fdb_latexmk fls glg glo gls acn acr alg idx ilg ind ist lof log lot out run.xml synctex.gz toc xdv glsdefs';

# Copiar el PDF al directorio raíz después de cada compilación exitosa
$success_cmd = 'copy /Y build\\%R.pdf . >nul 2>&1';

# Limpiar archivos temporales antes de cada compilación
$compiling_cmd = "latexmk -C -outdir=build 2>nul; if not exist build mkdir build";
$pre_tex_code = '';

# Hook para limpiar antes de compilar
END {
    # Este bloque se ejecuta al finalizar
}

# Función para limpiar archivos temporales del directorio build
sub clean_build_dir {
    my $build_dir = 'build';
    if (-d $build_dir) {
        unlink glob("$build_dir/*.aux");
        unlink glob("$build_dir/*.bbl");
        unlink glob("$build_dir/*.bcf");
        unlink glob("$build_dir/*.blg");
        unlink glob("$build_dir/*.fdb_latexmk");
        unlink glob("$build_dir/*.fls");
        unlink glob("$build_dir/*.glg");
        unlink glob("$build_dir/*.glo");
        unlink glob("$build_dir/*.gls");
        unlink glob("$build_dir/*.acn");
        unlink glob("$build_dir/*.acr");
        unlink glob("$build_dir/*.alg");
        unlink glob("$build_dir/*.ist");
        unlink glob("$build_dir/*.lof");
        unlink glob("$build_dir/*.lot");
        unlink glob("$build_dir/*.toc");
        unlink glob("$build_dir/*.run.xml");
        unlink glob("$build_dir/*.glsdefs");
        unlink glob("$build_dir/*.log");
        unlink glob("$build_dir/*.out");
        unlink glob("$build_dir/*.synctex.gz");
    }
}

# Ejecutar limpieza al inicio si se pasa la opción -gg o siempre
# Para forzar limpieza antes de cada build, descomentar la siguiente línea:
clean_build_dir();

# Glosarios - configuración para directorio build
add_cus_dep('glo', 'gls', 0, 'run_makeglossaries');
add_cus_dep('acn', 'acr', 0, 'run_makeglossaries');

sub run_makeglossaries {
    my ($base_name) = @_;
    my $dir = dirname($base_name);
    my $file = basename($base_name);
    
    if ( $silent ) {
        return system "makeglossaries -d \"$dir\" -q \"$file\"";
    } else {
        return system "makeglossaries -d \"$dir\" \"$file\"";
    }
}

push @generated_exts, 'glo', 'gls', 'glg', 'acn', 'acr', 'alg', 'ist';

# Asegurar que el directorio build existe
unless (-d 'build') {
    mkdir 'build' or warn "No se pudo crear el directorio build: $!";
}
