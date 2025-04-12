package middleware

import (
	"heracles/mod/logger"
	"heracles/src/template/layout"
	"heracles/src/template/public"

	"github.com/gin-gonic/gin"
)

func ErrorServerInternal() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Next()

		if len(c.Errors) > 0 {
			errMsg := c.Errors[0].Error()
			logger.Errorf("Une erreur interne est survenue : %v", errMsg)

			if !c.Writer.Written() {
				layout.LayoutPublic(
					"Erreur 500", 
					public.ErrorServerInternal(
						"Une erreur interne est survenue.", 
						"Une erreur interne s'est produite sur notre serveur. Veuillez réessayer ultérieurement et, si le problème persiste, contacter notre support.",
					),
				).
				Render(
					c.Request.Context(), 
					c.Writer,
				)
			}

			c.Abort()
		}
	}
}