import React from 'react';

import { Button } from './ui/button';


// COMPONENT
//
// PROPS
// task
// doneTask
// deleteTask
function TaskItem({ task,doneTask,deleteTask}) {

  return (

    // FRAGMENT
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

          {/* SHADCN BUTTON */}

          <Button
            variant="outline"
            size="sm"
            onClick={() => doneTask(task.id)}
          >

            {/* CONDITIONAL RENDERING */}

            {task.done ? 'Batal' : 'Selesai'}

          </Button>


          {/* SHADCN BUTTON */}

          <Button
            variant="destructive"
            size="sm"
            onClick={() => deleteTask(task.id)}
          >
            Hapus
          </Button>

        </div>

      </div>
    </>

  );
}

export default TaskItem;