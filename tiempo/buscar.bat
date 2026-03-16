@echo off
setlocal enabledelayedexpansion
title Buscador de Rutas - Proyecto Salterios

:: ========================================================
:: CONFIGURACIÓN
set "BUSCAR=src="footnote1"
:: ========================================================

echo =======================================================
echo      BUSCANDO COINCIDENCIAS EN ARCHIVOS HTM/HTML
echo =======================================================
echo Buscando: %BUSCAR%
echo Carpeta: %cd%
echo -------------------------------------------------------

:: Usamos comillas simples (') para envolver la ruta y evitar el error de parametros
powershell -Command ^
    "$buscar = 'src=\"src/lecturas.mp3\"';" ^
    "$archivos = Get-ChildItem -Path . -Include *.htm, *.html -Recurse -File;" ^
    "$encontrados = 0;" ^
    "foreach ($f in $archivos) {" ^
    "    $content = Get-Content $f.FullName -Raw;" ^
    "    if ($content.Contains('src=\"src/lecturas.mp3\"')) {" ^
    "        Write-Host '[ENCONTRADO] ' -NoNewline -ForegroundColor Yellow;" ^
    "        Write-Host $f.FullName;" ^
    "        $encontrados++;" ^
    "    }" ^
    "}" ^
    "if ($encontrados -eq 0) { Write-Host 'No se encontraron coincidencias.' -ForegroundColor Gray } else { Write-Host \"`nTotal de archivos encontrados: $encontrados\" -ForegroundColor Cyan }"

echo -------------------------------------------------------
echo Busqueda finalizada.
echo =======================================================
pause