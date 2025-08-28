# latexmkrc - Configuración para guardar archivos auxiliares y de salida en la carpeta build
$aux_dir = 'build';
$out_dir = 'build';

# Asegurarse de que los archivos temporales también vayan a build
$emulate_aux = 1;    # Emular el comportamiento de aux_dir para más tipos de archivos
$bibfile_dir = 'build';
$fls_dir = 'build';

# Archivos que queremos mantener en build
ensure_path( 'build' );
$clean_ext = 'aux bbl bcf blg brf fdb_latexmk fls glg glo gls idx ilg ind ist lof log lot out run.xml synctex.gz toc xdv';

# No borrar el PDF final del directorio principal
$pdf_mode = 1;
$clean_full_ext = $clean_ext;
