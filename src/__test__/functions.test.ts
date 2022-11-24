import { addTodo } from "../ts/functions";
import { Todo } from "../ts/models/Todo"

test("should add task", () =>{
  //ARRANGE
  let todos:Todo[] = [new Todo("Hand in assignment", false)]; 
  let length = todos.length;
  let text = "Hand in assignment";


  //ACT
  addTodo(text, todos);

  //ASSERT

  expect(todos.length).toBe(length +1);
  expect(todos [todos.length -1].text).toBe(text);
})

