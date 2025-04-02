@echo off
setlocal enabledelayedexpansion

:: Mostrar carpetas disponibles (s01, s02, ..., s34)
echo.
echo Carpetas de semanas disponibles:
echo ------------------------------
dir /b /ad s* | findstr /r "^s[0-9][0-9]$"
echo.

:ask_week
set /p "semana=Ingresa el numero de semana (ej. s01, s02... s34): "
if not defined semana goto ask_week

:: Validar formato (sXX)
echo %semana%|findstr /r "^s[0-9][0-9]$" >nul
if errorlevel 1 (
    echo Formato incorrecto. Debe ser s01, s02, etc.
    goto ask_week
)

:: Verificar si existe la carpeta
if not exist "%semana%\" (
    echo La carpeta "%semana%" no existe.
    goto ask_week
)

:: Procesar archivos
set dias=domingo lunes martes miercoles jueves viernes sabado
set archivos=laudes.htm oficio1.htm oficio2.htm

echo.
echo Procesando semana: %semana%
echo.

for %%d in (%dias%) do (
    if exist "%semana%\%%d\" (
        echo [DIA] %%d
        
        for %%a in (%archivos%) do (
            set "archivo=%semana%\%%d\%%a"
            
            if exist "!archivo!" (
                echo   - Modificando: %%a
                type "!archivo!" > "%temp%\tempfile.tmp"
                powershell -Command "(gc '%temp%\tempfile.tmp') -replace 'src/','/tordinario/%semana%/%%d/' | sc '!archivo!'"
                del "%temp%\tempfile.tmp"
            )
        )
    ) else (
        echo [AVISO] La carpeta "%semana%\%%d" no existe.
    )
    echo.
)

echo Proceso completado para la semana %semana%.
echo.

:ask_repeat
set /p "otra=¿Deseas procesar otra semana? (s/n): "
if /i "!otra!"=="s" goto ask_week
if /i "!otra!"=="n" exit /b
echo Por favor, ingresa "s" o "n".
goto ask_repeat