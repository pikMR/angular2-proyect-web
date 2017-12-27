# angular2-proyect-web
test proyect with angular 2 need a api web

Entorno de desarrollo, uso de proxy.config para el uso conjunto de la api, pasos para la configuración del entorno :


#generar app web

  ng build
    -> 		¿ dotnet restore ?
  dotnet run
    ->ver localhost:5000 ( Aplicación web a secas )

#generar app web y api -- cerrar todo y abrir 2 consolas nuevas.

  dotnet watch run
    ->ng server --proxy-config proxy.config.json
    ->ver localhost:4200
