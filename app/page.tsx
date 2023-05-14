import MyTodoList from "./components/Date";
import Avatar from "./components/avatar";
import Gallery from "./components/gallery";
import { Profile } from "./components/profile";
import Todo from "./components/todos";
import { TodoList } from "./components/todolist";

export default function Home() {
  return (
    <div className="flex">
      {/* <Gallery />
      <Todo />
      <Avatar />
      <TodoList />
      <MyTodoList /> */}

      <Profile
        size={100}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fPs",
        }}
      />
    </div>
  );
}
