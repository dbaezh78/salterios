@echo off
setlocal enabledelayedexpansion

:: ========================================================
:: CONFIGURACIÓN
set "BUSCAR=PequeÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o"
set "REEMPLAZAR=Pequeño"
:: ========================================================

title Monitor de Cambios - Proyecto Salterios

echo =======================================================
echo     MONITOR DE REEMPLAZO DE RUTAS EN CURSO
echo =======================================================
echo Buscando: "%BUSCAR%"
echo Reemplazar por: "%REEMPLAZAR%"
echo -------------------------------------------------------

:: He cambiado .Contains por una comparacion que ignora mayusculas
powershell -Command ^
    "$buscar = '%BUSCAR%';" ^
    "$reemplazar = '%REEMPLAZAR%';" ^
    "$archivos = Get-ChildItem -Path . -Include *.htm, *.html -Recurse -File;" ^
    "foreach ($f in $archivos) {" ^
    "    $content = Get-Content $f.FullName -Raw;" ^
    "    if ($content -match $buscar) {" ^
    "        $newContent = $content -replace $buscar, $reemplazar;" ^
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