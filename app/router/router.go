package router

import (
	"heracles/app/controller"

	"github.com/gin-gonic/gin"
)

func Router(r *gin.Engine) {
	r.GET("/", controller.Home)
}