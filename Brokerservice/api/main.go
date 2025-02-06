package main

import (
	"log"
	"net/http"
)

var port string = ":8080"
 type App struct{
	Domain string
 }
func main() {
	var app App;
	app.Domain="microservice"
	err:=http.ListenAndServe(port,app.router())
	if err!=nil{
		log.Println(" trouble starting broker service")
	}
}