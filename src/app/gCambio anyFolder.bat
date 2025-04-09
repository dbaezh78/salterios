@echo off
setlocal enabledelayedexpansion

:show_folders
:: Mostrar todas las carpetas disponibles
echo.
echo Carpetas disponibles:
echo ------------------------------
dir /b /ad
echo.

:ask_folder
set /p "carpeta=Ingresa el nombre de la carpeta a procesar: "
if not defined carpeta goto ask_folder

:: Verificar si existe la carpeta
if not exist "%carpeta%\" (
    echo La carpeta "%carpeta%" no existe.
    goto ask_folder
)

:: Archivos a modificar
set archivos=laudes.htm oficio1.htm oficio2.htm

echo.
echo Procesando carpeta: %carpeta%
echo.

:: Procesar cada archivo en la carpeta principal
for %%a in (%archivos%) do (
    set "archivo=%carpeta%\%%a"
    
    if exist "!archivo!" (
        echo - Modificando: %%a
        type "!archivo!" > "%temp%\tempfile.tmp"
        powershell -Command "(gc '%temp%\tempfile.tmp') -replace 'src/','/tnavidad/dias/%carpeta%/' | sc '!archivo!'"
        del "%temp%\tempfile.tmp"
    ) else (
        echo [AVISO] El archivo "%%a" no existe en %carpeta%.
    )
)

echo.
echo Proceso completado para la carpeta %carpeta%.
echo.

:ask_repeat
set /p "otra=¿Deseas procesar otra carpeta? (s/n): "
if /i "!otra!"=="s" goto show_folders
if /i "!otra!"=="n" exit /b
echo Por favor, ingresa "s" o "n".
goto ask_repeat