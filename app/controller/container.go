package controller

import "heracles/app/controller/homepage"

type ContainerController struct {
	HomePageController homepage.HomePageControllerI
}

func NewContainerController() *ContainerController {
	homePageController := homepage.NewHomePageController()

	return &ContainerController{
		HomePageController: homePageController,
	}
}
