@echo off
setlocal enabledelayedexpansion

:inicio
cls
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo    ACTUALIZAR RUTAS EN ARCHIVOS HTM
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo.
set /p "semana=Ingresa el n£mero de semana (ej: s04, s05): "

:: Definir días de la semana
set "dias=lunes martes miercoles jueves viernes sabado domingo"

:: Procesar cada día
for %%d in (%dias%) do (
    set "archivo=%%d.htm"
    set "search=src/"
    set "replace=/ordinario/%semana%/%%d/"
    
    if exist "%semana%\%%d\%archivo%" (
        echo Actualizando: %semana%\%%d\%archivo%
        
        (for /f "usebackq delims=" %%i in ("%semana%\%%d\%archivo%") do (
            set "line=%%i"
            set "line=!line:%search%=%replace%!"
            echo !line!
        )) > "%semana%\%%d\temp.txt"
        
        move /y "%semana%\%%d\temp.txt" "%semana%\%%d\%archivo%" >nul
    ) else (
        echo El archivo %semana%\%%d\%archivo% no existe.
    )
)

echo.
echo Proceso completado para la semana %semana%
pause
goto inicio