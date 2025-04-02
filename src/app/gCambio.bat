
@echo off
setlocal enabledelayedexpansion

set "search=src/"
set "replace=/ordinario/s04/jueves/"

for %%f in (laudes.htm oficio1.htm oficio2.htm) do (
    if exist "%%f" (
        (for /f "delims=" %%i in (%%f) do (
            set "line=%%i"
            set "line=!line:%search%=%replace%!"
            echo !line!
        )) > temp.txt
        move /y temp.txt "%%f" >nul
        echo Archivo actualizado: %%f
    ) else (
        echo El archivo %%f no existe.
    )
)

pause