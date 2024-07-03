package handlers

import (
	"sync"

	"github.com/gofiber/fiber/v2"
	"github.com/pashamakhilkumarreddy/golang-react-todo/server/src/models"
)

var (
	todos  = []models.Todo{}
	nextID = 1
	mu     sync.Mutex
)

func GetTodos(c *fiber.Ctx) error {
	mu.Lock()
	defer mu.Unlock()
	return c.Status(fiber.StatusOK).JSON(todos)
}

func GetTodo(c *fiber.Ctx) error {
	mu.Lock()
	defer mu.Unlock()

	id := c.Params("id")
	for _, todo := range todos {
		if string(rune(todo.ID)) == id {
			return c.JSON(todo)
		}
	}
	return c.Status(fiber.StatusNotFound).SendString("Todo not found")
}

func CreateTodo(c *fiber.Ctx) error {
	mu.Lock()
	defer mu.Unlock()

	var todo models.Todo
	if err := c.BodyParser(&todo); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	todo.ID = nextID
	nextID++
	todos = append(todos, todo)
	return c.Status(fiber.StatusCreated).JSON(todo)
}

func UpdateTodo(c *fiber.Ctx) error {
	mu.Lock()
	defer mu.Unlock()

	id := c.Params("id")
	var updatedTodo models.Todo
	if err := c.BodyParser(&updatedTodo); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}

	for i, todo := range todos {
		if string(rune(todo.ID)) == id {
			todos[i].Title = updatedTodo.Title
			todos[i].Done = updatedTodo.Done
			return c.Status(fiber.StatusOK).JSON(todos[i])
		}
	}
	return c.Status(fiber.StatusNotFound).SendString("Todo not found")
}

func DeleteTodo(c *fiber.Ctx) error {
	mu.Lock()
	defer mu.Unlock()

	id := c.Params("id")
	for i, todo := range todos {
		if string(rune(todo.ID)) == id {
			todos = append(todos[:i], todos[i+1:]...)
			return c.SendString("Todo deleted")
		}
	}
	return c.Status(fiber.StatusNotFound).SendString("Todo not found")
}
