package homepage

import (
	"heracles/src/template/layout"
	"heracles/src/template/public"

	"github.com/gin-gonic/gin"
)

type data struct {
	Title string
}

type homePageController struct {
	d *data
}

type HomePageControllerI interface {
	Home(c *gin.Context)
}

func NewHomePageController() HomePageControllerI {
	return &homePageController{
		d: &data{
			Title: "LM4",
		},
	}
}

func (co *homePageController) Home(c *gin.Context) {
	if err := layout.LayoutPublic(
		co.d.Title,
		 public.Home()).
	Render(
		c.Request.Context(), 
		c.Writer,
	); err != nil {
		return
	}
}