// We will define the end points for the CRUD operations

const express = require("express"); 
const router = express.Router();

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");

/**  
 * Define a GET method to read all the todo
 * @route GET api/todo
*/
router.get("/", getAllTodo);

/**  
 * Define a POST method to create a new todo
 * @route GET api/todo
*/
router.post("/", postCreateTodo);

/**  
 * Define a PUT method to update a existing todo
 * @route GET api/todo/:id
*/
router.put("/:id", putUpdateTodo);

/**  
 * Define a DELETE method to delete a existing todo
 * @route GET api/todo/:id
*/ 
router.delete("/:id", deleteTodo);

module.exports = router;