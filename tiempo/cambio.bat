@echo off
:: Cambiamos la consola a UTF-8 para que entienda los acentos
chcp 65001 >nul
setlocal enabledelayedexpansion

:: ========================================================
:: CONFIGURACIÓN
set "BUSCAR=MiÃ©rcoles"
set "REEMPLAZAR=Miércoles"
:: ========================================================

title Monitor de Cambios - Proyecto Salterios

echo =======================================================
echo      MONITOR DE REEMPLAZO DE RUTAS EN CURSO
echo =======================================================
echo Buscando: "%BUSCAR%"
echo Reemplazar por: "%REEMPLAZAR%"
echo -------------------------------------------------------

:: Forzamos a PowerShell a usar UTF8 para leer y escribir
powershell -Command ^
    "$OutputEncoding = [System.Text.Encoding]::UTF8;" ^
    "$buscar = '%BUSCAR%';" ^
    "$reemplazar = '%REEMPLAZAR%';" ^
    "$archivos = Get-ChildItem -Path . -Include *.htm, *.html -Recurse -File;" ^
    "foreach ($f in $archivos) {" ^
    "    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8);" ^
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