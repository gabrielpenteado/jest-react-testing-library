import { useState } from "react";
import axios from "axios";
import Button from "./Button";

interface ITasks {
  id: string;
  title: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const handleClick = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    setTasks(data);
  };

  return (
    <div className="tasks">
      <h1>Tasks from API</h1>
      <Button onClick={handleClick}>Get Tasks from API</Button>

      {tasks.map((tasks) => (
        <p key={tasks.id}>{tasks.title}</p>
      ))}
    </div>
  );
};

export default Tasks;
