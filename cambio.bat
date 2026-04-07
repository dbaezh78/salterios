@echo off
setlocal enabledelayedexpansion

:: 1. Cambiamos la consola a UTF-8
chcp 65001 > nul

:: ========================================================
:: CONFIGURACIÓN
:: IMPORTANTE: Guarda este archivo como UTF-8
set "BUSCAR=<option value="1">Pequeño</option>"
set "REEMPLAZAR=<option value="1.1">Pequeño</option>"
:: ========================================================

title Monitor de Cambios - Proyecto Salterios

echo =======================================================
echo     MONITOR DE REEMPLAZO DE RUTAS EN CURSO
echo =======================================================
echo Buscando: "%BUSCAR%"
echo Reemplazar por: "%REEMPLAZAR%"
echo -------------------------------------------------------

echo =======================================================
echo Se hara el siguiente cambio! si no quiere precioe CTRL+C
pause
echo =======================================================


:: Usamos [System.Environment] para leer las variables de forma segura sin que los símbolos rompan el comando
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$buscar = [System.Environment]::GetEnvironmentVariable('BUSCAR', 'Process');" ^
    "$reemplazar = [System.Environment]::GetEnvironmentVariable('REEMPLAZAR', 'Process');" ^
    "$archivos = Get-ChildItem -Path . -Include *.htm, *.html -Recurse -File;" ^
    "foreach ($f in $archivos) {" ^
    "    $content = Get-Content $f.FullName -Raw -Encoding UTF8;" ^
    "    if ($content.Contains($buscar)) {" ^
    "        $newContent = $content.Replace($buscar, $reemplazar);" ^
    "        [System.IO.File]::WriteAllText($f.FullName, $newContent, [System.Text.Encoding]::UTF8);" ^
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