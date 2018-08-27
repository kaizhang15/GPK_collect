PUB_DIR =public#
FUNC_DIR =functions#
SRC_DIR =lambda#

deploy: $(PUB_DIR) build
	@echo "page deployed"
	

$(PUB_DIR): index.html
	@mkdir -p $(PUB_DIR)
	-@cp -r index.html jquery-1.11.1.min.js collect_data_style.css mobile_dev.html predict.js keyboard.min.js style.css buttons.css shuzhe.png pie.png heng.png hengzhe.png na.png ./music/keydown.mp3 $(PUB_DIR)/
	

run: $(SRC_DIR)
	@netlify-lambda serve $(SRC_DIR)

build: $(SRC_DIR)
	@which netlify-lambda || npm install netlify-lambda --save-dev
	@netlify-lambda build $(SRC_DIR)


.PHONY: clean install

clean:
	-@rm -rf $(PUB_DIR)/ $(FUNC_DIR)/

install:
	-@npm install --save-dev babel-core babel-loader webpack netlify-lambda