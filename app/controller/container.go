package controller

import (
	"heracles/app/controller/homepage"
	"heracles/app/controller/loginpage"
	"heracles/app/controller/notfoundpage"
)

type ContainerController struct {
	HomePageController homepage.HomePageControllerI
	NotFoundPageController notfoundpage.NotFoundPageControllerI
	LoginPageController loginpage.LoginPageControllerI
}

func NewContainerController() *ContainerController {
	homePageController := homepage.NewHomePageController()
	notFoundPageController := notfoundpage.NewNotFoundPageController()
	loginPageController := loginpage.NewLoginPageController()

	return &ContainerController{
		HomePageController: homePageController,
		NotFoundPageController: notFoundPageController,
		LoginPageController: loginPageController,
	}
}
