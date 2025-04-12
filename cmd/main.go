package main

import (
	"heracles/app/router"
	_ "heracles/internal/init"
	"heracles/mod/logger"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

func main() {
	defer logger.Close()
	s := gin.Default()
	router.Router(s)
	run(s)
}

// run and log the server
func run(s *gin.Engine) {
	port := os.Getenv("PORT")
	hostTraefik := extractStringInBacktick(os.Getenv("HOST_TRAEFIK"))
	host := "0.0.0.0"

	logger.Success("Server is running on in container docker : " + host + ":" + port)
	logger.Successf("Server is running on navigator on : https://%v", hostTraefik)

	logger.Info("Démarrage du serveur ...")
	if err := s.Run(host + ":" + port); err != nil {
		logger.Fatalf("Erreur lors du démarrage du serveur : %v", err)
	}
}

// utiliser pour recuperer une string entre des backtick
func extractStringInBacktick(s string) string {
	start := strings.Index(s, "`")
	end := strings.LastIndex(s, "`")

	if start == -1 || end == -1 || start == end {
		return ""
	}

	return s[start+1 : end]
}
