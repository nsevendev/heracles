package controller

import (
	"heracles/app/controller/homepage"
	"heracles/app/controller/notfoundpage"
)

type ContainerController struct {
	HomePageController homepage.HomePageControllerI
	NotFoundPageController notfoundpage.NotFoundPageControllerI
}

func NewContainerController() *ContainerController {
	homePageController := homepage.NewHomePageController()
	notFoundPageController := notfoundpage.NewNotFoundPageController()

	return &ContainerController{
		HomePageController: homePageController,
		NotFoundPageController: notFoundPageController,
	}
}
