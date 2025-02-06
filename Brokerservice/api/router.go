package main

import (
	"net/http"

	"github.com/go-chi/chi"
	
	"github.com/go-chi/chi/v5/middleware"
)

func router() http.Handler{
	mux:=chi.NewRouter()
	mux.Use(middleware.Heartbeat("/ping"))
	return mux
}