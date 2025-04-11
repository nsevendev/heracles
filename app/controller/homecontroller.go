package controller

import (
	"heracles/src/template/layout"
	"heracles/src/template/public"

	"github.com/gin-gonic/gin"
)

func Home(c *gin.Context) {
	layout.LayoutPublic(public.Home()).Render(c.Request.Context(), c.Writer)
} 