package notfoundpage

import (
	"heracles/mod/logger"
	"heracles/src/template/layout"
	"heracles/src/template/public"
	"time"

	"github.com/gin-gonic/gin"
)

type data struct {
	Title string
	ErrorMessage string
	ErrorMessageLong string
}

type notFoundPageController struct {
	d *data
}

type NotFoundPageControllerI interface {
	NotFoundPage(c *gin.Context)
}

func NewNotFoundPageController() NotFoundPageControllerI {
	return &notFoundPageController{
		d: &data{
			Title: "Erreur 404",
			ErrorMessage: "La page demandée est introuvable.",
			ErrorMessageLong: "Oups ! La page que vous recherchez n’existe pas ou a été déplacée. Veuillez vérifier l’URL ou revenir à la page d’accueil.",
		},
	}
}

func (co *notFoundPageController) NotFoundPage(c *gin.Context) {	
	logger.Warnf("Demande de page introuvable: %s - %v", c.Request.URL.Path, time.Now().Format("02/01/2006 - 15:04:05"))
	
	if err := layout.LayoutPublic(
			co.d.Title, 
			public.NotFound(co.d.ErrorMessage, co.d.ErrorMessageLong),
		).
		Render(
			c.Request.Context(), 
			c.Writer,
		); err != nil {
		c.Error(err)
		return
	}
}