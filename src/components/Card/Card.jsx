import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  // estado que mostra e some com o input de texto
  const [showInput, setShowInput] = useState(false);
  // esse estado é responsável por pegar o valor do input (o que está sendo digitado)
  const [taskText, setTaskText] = useState("");
  // esse estado inicia uma lista de tarefas vazia
  const [tasks, setTasks] = useState([]);

  // função para sumir e aparecer com o input de texto
  const handleAddClick = () => {
    setShowInput(true);
  };

  //
  const handleAddTask = () => {
    // remove os espaços do começo e do final
    if (taskText.trim()) {
      setTasks([
        // pega as tasks anteriores
        ...tasks,
        { id: Date.now(), text: taskText, completed: false }, // e adiciona ao final as tasks novas
      ]);
      setTaskText(""); // retorna o valor do input para uma string vazia
      // setShowInput(false);
    }
  };

  // clicar em cancelar soma com o input de texto
  const handleCancel = () => {
    setTaskText("");
    setShowInput(false);
  };

  // quando clica em concluir a task ele coloca a propriedade completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        // operador ternario se for verdade ? alguma ação : outra ação
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // botão para deletar a task
  const deleteTask = (id) => {
    // ele vai rerenderizar todas as tasks que não tem o id que você clicou pra excluir
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <article className={styles.cards}>
      <h4>{props.title}</h4>

      {/* Lista de tarefas */}
      {/* Primeiro componente condicional */}
      {/* Se o tamanho do array de tasks for maior que 0 ele vai renderizar o componente */}
      {tasks.length > 0 && (
        // lista
        <ul className={styles.taskList}>
          {/* Fazendo um map por toda a lista e retornando cada uma individualmente (assim que criada) */}
          {tasks.map((task) => (
            // propriedade key para tornar cada renderização de task unica
            <li key={task.id} className={styles.taskItem}>
              <div className={styles.taskContent}>
                <input
                  type="checkbox"
                  checked={task.completed} // task começa como completed e é verificada na função toggleTask
                  onChange={() => toggleTask(task.id)} // função para alterar uma task completa ou não completa
                  className={styles.checkbox}
                />
                {/* Se a task estiver com um valor ela vai aparecer dentro do span */}
                <span className={task.completed ? styles.completed : ""}>
                  {task.text}
                </span>
              </div>
              <button
                // botão de deletar a task chamando a funão de deletar
                onClick={() => deleteTask(task.id)}
                className={styles.deleteBtn}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Input para adicionar nova tarefa */}
      {/* showInput(false) -> nada ? caso passe 
        a ser true vai renderizar o html em questão 
        : se continuar false ele exibe apenas o botão 
        */}
      {showInput ? (
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Digite sua meta..."
            className={styles.taskInput}
            autoFocus
            onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
          />
          <div className={styles.buttonGroup}>
            <button onClick={handleAddTask} className={styles.addBtn}>
              Adicionar
            </button>
            <button onClick={handleCancel} className={styles.cancelBtn}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleAddClick} className={styles.card}>
          + Adicionar meta
        </button>
      )}
    </article>
  );
};

export default Card;
