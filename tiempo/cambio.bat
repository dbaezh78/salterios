@echo off
setlocal enabledelayedexpansion
title Corrigiendo Enlaces - Proyecto Salterios

echo =======================================================
echo      CORRECCION DE ENLACES (Version Robusta)
echo =======================================================

powershell -Command "$archivos=Get-ChildItem -Path . -Include *.htm, *.html -Recurse -File; foreach ($f in $archivos) { $content = Get-Content $f.FullName -Raw; $m=$false; if ($content -match 'href=\"/?salterios\"/>') { $content = $content -replace 'href=\"/?salterios\"/>', 'href=\"/\"/>'; $m=$true; } if ($m) { [System.IO.File]::WriteAllText($f.FullName, $content); Write-Host '[CORREGIDO] ' -NoNewline -ForegroundColor Green; Write-Host $f.FullName; } else { Write-Host '[OMITIDO]   ' -NoNewline -ForegroundColor Gray; Write-Host $f.FullName; } }"

echo -------------------------------------------------------
echo Proceso completado.
echo =======================================================
pause