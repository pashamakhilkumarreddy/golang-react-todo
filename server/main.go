package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	routes "github.com/pashamakhilkumarreddy/golang-react-todo/server/src/routes"
)

func main() {
	fmt.Println("Welcome to Go Web App")

	app := fiber.New()

	routes.SetupRoutes(app)

	fmt.Println("App is up and running on http://127.0.0.1:3000")

	err := app.Listen(":3000")
	if err != nil {
		panic(err)
	}
}
