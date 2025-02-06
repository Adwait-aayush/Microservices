package main

import (
	"encoding/json"
	"net/http"
)
type jsonresponse struct{
	Message string `json:"message"`
	Error bool `json:"error"`
	Data interface{} `json:"data"`
}
func (app *App) Broker(w http.ResponseWriter,r *http.Request){
	payload:=jsonresponse{
		Message: "Broker is working",
		Error: false,
		Data: nil,
	}
	w.Header().Set("Content-Type","application/json")
	err:=json.NewEncoder(w).Encode(payload)
	if err!=nil{
		http.Error(w,err.Error(),http.StatusInternalServerError)
	}
}