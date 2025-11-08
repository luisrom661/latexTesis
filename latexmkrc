# latexmkrc - Configuración para directorios organizados
$aux_dir = 'build';      # Archivos auxiliares en build/
$out_dir = 'output';     # PDF final en output/

# Asegurar que los archivos temporales vayan a build
$emulate_aux = 1;
$bibfile_dir = 'build';
$fls_dir = 'build';

# Crear directorios si no existen
ensure_path( 'build' );
ensure_path( 'output' );

# Extensiones de archivos a limpiar
$clean_ext = 'aux bbl bcf blg brf fdb_latexmk fls glg glo gls idx ilg ind ist lof log lot out run.xml synctex.gz toc xdv';

# Configuración PDF
$pdf_mode = 1;
$clean_full_ext = $clean_ext;

# Habilitar shell escape para paquetes como svg, minted, etc.
$pdflatex = 'pdflatex -shell-escape -interaction=nonstopmode %O %S';

# -------------------------------
# Glosarios (makeglossaries/xindy)
# -------------------------------
use File::Basename;

# Reglas personalizadas para que latexmk ejecute makeglossaries automáticamente
add_cus_dep('glo', 'gls', 0, 'makeglossaries');
add_cus_dep('acn', 'acr', 0, 'makeglossaries');

sub makeglossaries {
	my ($base, $path) = fileparse($_[0]);
	# Con aux_dir (build), indicar a makeglossaries dónde están los .aux/.glo
	my $dir = $aux_dir || '.';
	my $cmd = "makeglossaries -q -d \"$dir\" \"$base\"";
	return system($cmd);
}
