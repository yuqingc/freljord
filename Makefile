# This Makefile is used for bundling the project

.PHONY: all build prod

all: build

prod:	dist/%
	yarn run prod
dist/%:
	yarn run build

build:
	docker build -t freljord .
