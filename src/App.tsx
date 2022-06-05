import styles from "./app.module.css";
import { CraeteButton } from "./components/CreateButton";
import { Input } from "./components/Input";
import "./theme/global.css";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import logoImg from "./assets/logo.svg";
import { Task, TaskProps } from "./components/Task";

function App() {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([{
    id: uuid(),
    content: "Criar sua primeira tarefa",
    isCompleted: false
  }]);

  function handleChangeTaskStatus(id: string, isCompleted: boolean) {
    setTasks(l => {
      return l.map(t => {
        if(t.id === id) {
          t.isCompleted = isCompleted;
        };

        return t;
      })
    });
  };

  function handleOnRemoveTask(id: string) {
    setTasks(l => {
      return l.filter(t => t.id !== id)
    });
  };

  function handleCreateNewTask() {
    setNewTaskContent("");
    setTasks(l => [ ...l, {
      id: uuid(),
      content: newTaskContent,
      isCompleted: false
    }]);
  };

  const numberOfCompletedTasks = tasks.reduce((prev, cur) => {
    if(cur.isCompleted) {
      prev++;
    };

    return prev;
  }, 0);

  const newTaskContentIsEmpty = newTaskContent === "";

  return (
    <div className={styles.app}>
      <header>
        <img src={logoImg} alt="Logotipo do ToDo"/>
        <div>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskContent}
            onChange={e => setNewTaskContent(e.target.value)}
            required
          />
          <CraeteButton
            disabled={newTaskContentIsEmpty}
            onClick={handleCreateNewTask}
          />
        </div>
      </header>
      <section>
        <div className={styles.tasksInfo}>
          <p>Tarefas criadas <span>{tasks.length}</span></p>
          <p>Concluidas <span>{numberOfCompletedTasks} de {tasks.length}</span></p>
        </div>
        <div className={styles.taskList}>
          {tasks.map(t => {
            return (
              <Task
                key={t.id}
                onChangeIsCompleted={handleChangeTaskStatus}
                onRemoveTask={handleOnRemoveTask}
                {...t}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
