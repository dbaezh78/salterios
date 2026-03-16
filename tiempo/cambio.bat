@echo off
setlocal enabledelayedexpansion

:: ========================================================
:: CONFIGURACIÓN
set "BUSCAR=/https://tp.resucito.do//"
set "REEMPLAZAR=https://tp.resucito.do/"
:: ========================================================

title Eliminando linea: %BUSCAR%

echo =======================================================
echo      BORRADO DE LINEAS EN CURSO
echo =======================================================
echo Buscando: "%BUSCAR%"
echo Accion: ELIMINAR (reemplazar por nada)
echo -------------------------------------------------------

:: Usamos [Regex]::Escape para que los parentesis () y el punto . 
:: se busquen como texto literal y no como comandos.
powershell -Command ^
    "$buscar = [Regex]::Escape('%BUSCAR%');" ^
    "$reemplazar = '%REEMPLAZAR%';" ^
    "$archivos = Get-ChildItem -Path . -Include *.htm, *.html -Recurse -File;" ^
    "foreach ($f in $archivos) {" ^
    "    $content = Get-Content $f.FullName -Raw;" ^
    "    if ($content -match $buscar) {" ^
    "        $newContent = $content -replace $buscar, $reemplazar;" ^
    "        [System.IO.File]::WriteAllText($f.FullName, $newContent);" ^
    "        Write-Host '[ELIMINADO]   ' -NoNewline -ForegroundColor Cyan;" ^
    "        Write-Host $f.FullName;" ^
    "    } else {" ^
    "        Write-Host '[OMITIDO]    ' -NoNewline -ForegroundColor Gray;" ^
    "        Write-Host $f.FullName;" ^
    "    }" ^
    "}"

echo -------------------------------------------------------
echo Proceso de limpieza completado.
echo =======================================================
pause