# This Makefile is used for bundling the project

.PHONY: all build prod cleanall clean

all: build

prod:	dist/%
	yarn run prod
dist/%:
	yarn run build

cleanall: clean:
	- rm -rf node_modules/
	@echo "ALL CLEANED!"

clean:
	-rm -rf dist/

build:
	docker build -t freljord .
