package init

import "heracles/mod/logger"

func init() {
	initEnv()
	logger.Init()
	defer logger.Close()
}