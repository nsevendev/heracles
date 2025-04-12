package init

import "heracles/mod/logger"

func init() {
	initEnv()
	logger.Init()
}