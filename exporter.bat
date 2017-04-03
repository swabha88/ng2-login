@echo off
set source=%~dp0
set destination=%cd%
xcopy %source%component %destination%\src\app\modules\login /i