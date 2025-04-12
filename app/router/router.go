package router

import (
	"heracles/app/controller"

	"github.com/gin-gonic/gin"
)

func Router(r *gin.Engine) {
	controllers := controller.NewContainerController()

	r.GET("/", controllers.HomePageController.Home)
	
	r.NoRoute()
}