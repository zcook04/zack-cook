dev.up:
	docker-compose -f docker-compose-dev.yml up --build

dev.down:
	docker-compose -f docker-compose-dev.yml down

prod.up:
	docker-compose up --build

prod.down:
	docker-compose down