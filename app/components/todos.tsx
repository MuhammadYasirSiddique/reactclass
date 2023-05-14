const mydate = "2023-02-28";
const today = new Date(mydate);

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

type themeType = {
  bgColor: string;
  textcolor: string;
};
const theme: themeType[] = [
  {
    bgColor: "lightgreen",
    textcolor: "red",
  },
];

const themeId = 0;

const todos = [
  {
    id: 1,
    todo: "Invent new traffic lights",
  },
  {
    id: 2,
    todo: "Rehearse a movie scene ",
  },
  {
    id: 3,
    todo: "Improve the spectrum technology",
  },
];

export default function Todo() {
  const image = "https://i.imgur.com/yXOvdOSs.jpg";
  const name = "Hedy Lamarr";
  const clas = "photo";
  const todoList = todos.map((todos, id) => (
    <li key={todos.id}>{todos.todo}</li>
  ));

  return (
    <div className="text-center m-10">
      <h1 className="text-3xl">{name}</h1>
      <img
        class="mx-auto"
        src={image}
        alt={name}
        className={clas}
        width={100}
        height={100}
      />
      <h1>
        {name}&apos;s To Do List for : <br />{" "}
        <strong>{formatDate(today)}</strong>
      </h1>
      <br />
      <ul
        style={{
          backgroundColor: theme[themeId].bgColor,
          color: theme[themeId].textcolor,
        }}
      >
        {todoList}
      </ul>
    </div>
  );
}
