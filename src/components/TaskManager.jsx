import React, { useEffect } from 'react';

function TaskManager() {
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState('');

  useEffect(() => {
    console.log('Task berubah:', tasks);
  }, [tasks]);


  const addTask = () => {
    if (task === '') return;

    const newTask = {
      id: Date.now(),
      name: task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };


  const doneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };


  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="border text-center rounded-lg w-100 bg-white p-6 shadow-sm">

        <h3 className="text-2xl font-bold mb-4">
            Task harian
        </h3>

        <div className="flex gap-2 mb-5">

          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Masukkan task..."
            className="border bg-white px-3 py-2 rounded-lg flex-1"
          />

          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={addTask}
          >
            Tambah
          </button>

        </div>


        {tasks.length === 0 ? (

          <p className="text-gray-400">
            Belum ada task
          </p>

        ) : (

          <div className="space-y-2">

            {tasks.map((task) => (

              <div
                key={task.id}
                className="bg-gray-50 border rounded-lg p-3 flex justify-between items-center"
              >

                <span
                  className={
                    task.done
                      ? 'line-through text-gray-400'
                      : ''
                  }
                >
                  {task.name}
                </span>


                <div className="flex gap-2">

                  <button
                    className="text-green-500"
                    onClick={() => doneTask(task.id)}
                  >
                    {task.done ? 'Batal' : 'Selesai'}
                  </button>

                  <button
                    className="text-red-500"
                    onClick={() => deleteTask(task.id)}
                  >
                    Hapus
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}


        <p className="text-sm text-gray-500 mt-5">
          Total task: {tasks.length}
        </p>

      </div>

    </div>
  );
}

export default TaskManager;