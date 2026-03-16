@echo off
setlocal enabledelayedexpansion
title Monitor de Cambios (.htm / .html) - Proyecto Salterios

echo =======================================================
echo     MONITOR DE REEMPLAZO DE RUTAS EN CURSO
echo =======================================================
echo Buscando: "/salterios/"  --^>  Reemplazando por: "/"
echo Extensiones: .htm y .html
echo Carpeta raiz: %cd%
echo -------------------------------------------------------

:: Buscamos archivos que terminen en .htm* (esto cubre .htm y .html)
powershell -Command ^
    "$archivos = Get-ChildItem -Path . -Include *.htm, *.html -Recurse -File;" ^
    "foreach ($f in $archivos) {" ^
    "    $content = Get-Content $f.FullName -Raw;" ^
    "    if ($content -match '/salterios/') {" ^
    "        $newContent = $content -replace '/salterios/', '/';" ^
    "        [System.IO.File]::WriteAllText($f.FullName, $newContent);" ^
    "        Write-Host '[MODIFICADO] ' -NoNewline -ForegroundColor Green;" ^
    "        Write-Host $f.FullName;" ^
    "    } else {" ^
    "        Write-Host '[OMITIDO]    ' -NoNewline -ForegroundColor Gray;" ^
    "        Write-Host $f.FullName;" ^
    "    }" ^
    "}"

echo -------------------------------------------------------
echo Proceso completado.
echo =======================================================
pause