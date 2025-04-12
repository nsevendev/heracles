package controller

import (
	"heracles/src/template/layout"
	"heracles/src/template/public"

	"github.com/gin-gonic/gin"
)

func Home(c *gin.Context) {
	if err := layout.LayoutPublic(public.Home()).Render(c.Request.Context(), c.Writer); err != nil {
		return
	}
}
