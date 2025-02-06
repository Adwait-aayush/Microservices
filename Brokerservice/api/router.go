package main

import (
	"net/http"

	"github.com/go-chi/chi"
	
	"github.com/go-chi/chi/v5/middleware"
)

func(app *App) router() http.Handler{
	mux:=chi.NewRouter()
	mux.Use(middleware.Heartbeat("/ping"))
	mux.Use(enableCORS)
	mux.Get("/Broker",app.Broker)
	return mux
}