import React from 'react';

function TaskItem({task,doneTask,deleteTask
}) {

  return (
    <>
      <div className="border p-3 mb-2 rounded flex justify-between items-center">

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
            onClick={() => doneTask(task.id)}
            className="text-sm text-green-600"
          >
            {task.done ? 'Batal' : 'Selesai'}
          </button>


          <button
            onClick={() => deleteTask(task.id)}
            className="text-sm text-red-500"
          >
            Hapus
          </button>

        </div>

      </div>
    </>
  );
}

export default TaskItem;