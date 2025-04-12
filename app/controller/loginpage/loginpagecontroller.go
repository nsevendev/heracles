package loginpage

import (
	"heracles/mod/logger"
	"heracles/src/template/layout"
	"heracles/src/template/public"

	"github.com/gin-gonic/gin"
)

type data struct {
	Title string
}

type loginPageController struct {
	d *data
}

type LoginPageControllerI interface {
	LoginPage(c *gin.Context)
	Login(c *gin.Context)
}

func NewLoginPageController() LoginPageControllerI {
	return &loginPageController{
		d: &data{
			Title: "Login",
		},
	}
}

func (co *loginPageController) LoginPage(c *gin.Context) {
	if err := layout.LayoutPublic(co.d.Title, public.Login()).Render(c.Request.Context(), c.Writer); err != nil {
		c.Error(err)
		return
	}
}

func (co *loginPageController) Login(c *gin.Context) {
	logger.Info("Login à été appeller")
}