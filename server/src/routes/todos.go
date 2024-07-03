package routes

import (
	"github.com/gofiber/fiber/v2"
	handlers "github.com/pashamakhilkumarreddy/golang-react-todo/server/src/handlers"
)

const apiV1Prefix = "/api/v1"

func SetupRoutes(app *fiber.App) {
    app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Welcome to the TODO API!")
	})

	api := app.Group(apiV1Prefix)

	api.Get("/todos", handlers.GetTodos)
	api.Get("/todos/:id", handlers.GetTodo)
	api.Post("/todos", handlers.CreateTodo)
	api.Put("/todos/:id", handlers.UpdateTodo)
	api.Delete("/todos/:id", handlers.DeleteTodo)
}
