package router

import (
	"heracles/app/controller"

	"github.com/gin-gonic/gin"
)

func Router(r *gin.Engine) {
	controllers := controller.NewContainerController()

	r.GET("/", controllers.HomePageController.Home)

	login := r.Group("/login")
	login.GET("/", controllers.LoginPageController.LoginPage)
	login.POST("/", controllers.LoginPageController.Login)
	
	r.NoRoute(controllers.NotFoundPageController.NotFoundPage)
}