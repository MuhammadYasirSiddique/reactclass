const today = new Date("2023-05-06");

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function MyTodoList() {
  const todoList = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];
  return (
    <>
      <h1>To Do List for {formatDate(today)}</h1>
      <ul style={{ backgroundColor: "black", color: "pink" }}>
        {todoList.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
