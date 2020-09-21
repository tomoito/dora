import React, { useState } from "react";
import initialData from "../data/initialData";

//creating new context
const DrgDrpContext = React.createContext();

const DragDropProvider = ({ children }) => {
  let [state, setState] = useState(initialData);

  const handleEditing = (columnId) => {
    const column = state.columns[columnId];
    column.isEditing = true;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [column.id]: {
          ...column,
        },
      },
    };

    setState(newState);
  };

  const endEditing = (columnId) => {
    const column = state.columns[columnId];
    column.isEditing = false;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [column.id]: {
          ...column,
        },
      },
    };

    setState(newState);
  };

  //handling adding new Tasks to columns
  const addData = (columnId, newTask, e) => {
    const column = state.columns[columnId];
    //adding new tasks
    const tasks = state.tasks;
    const tasksLength = Object.keys(tasks).length;
    const newTaskId = `task-${tasksLength + 1}`;
    const taskContent = { id: newTaskId, content: newTask };

    tasks[newTaskId] = taskContent;
    // adding the new task id to the column object
    const newTasksOrder = [...column.tasksOrder];
    newTasksOrder.push(newTaskId);
    console.log("newTasksOrder");
    console.log(newTasksOrder);

    const newColumn = {
      ...column,
      tasksOrder: newTasksOrder,
    };

    const newState = {
      ...state,
      tasks,
      columns: {
        ...state.columns,
        [column.id]: {
          ...newColumn,
        },
      },
    };
    console.log("AddData_NewState");
    console.log(newState);

    setState(newState);
  };

  // handling the dragend method on DragDropContext
  const onDragEnd = (result) => {
    const { draggableId, destination, source } = result;

    console.log("Newカラム追加");
    console.log(draggableId);
    console.log(destination);
    console.log(source);

    if (!state.columns[destination.droppableId]) {
      const newColumn = {
        draggableId,
        tasksOrder: [],
      };

      const newColumns = {
        id: destination.droppableId,
        title: destination.droppableId,
        tasksOrder: [],
        isEditing: false,
      };
      console.log(newColumns);
      const clms = state.columns;
      clms[destination.droppableId] = newColumns;
      console.log(clms);

      // clms[destination] = newColumns;
      // console.log(clms);

      const clmOrder = state.columnsOrder;
      clmOrder.push(destination.droppableId);

      const newState_before = {
        ...state,
        columns: clms,
        columnsOrder: clmOrder,
      };
      setState(newState_before);
    }
    // console.log(state.tasks[draggableId].content);

    // avoid dropping on an a invalid drop area
    if (!destination) {
      return;
    }

    // avoid dropping on the original place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];
    //reordering tasks in the same column
    if (start === end) {
      const column = state.columns[source.droppableId];
      const newTasksOrder = [...column.tasksOrder];
      const aaa = [...column.tasksOrder][1];

      newTasksOrder.splice(source.index, 1);

      newTasksOrder.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        tasksOrder: newTasksOrder,
      };

      const newColumns = {
        ...state.columns,
        [column.id]: {
          ...newColumn,
        },
      };

      const newState = {
        ...state,
        columns: newColumns,
      };
      setState(newState);
      return;
    }

    const numTask = state.columns[destination.droppableId].tasksOrder.length;
    console.log(numTask);
    if (numTask > 3) {
      return;
    }

    const startColumn = state.columns[source.droppableId];
    const endColumn = state.columns[destination.droppableId];

    const newStartTasksOrder = [...startColumn.tasksOrder];
    const newEndTasksOrder = [...endColumn.tasksOrder];

    console.log(state.columns[source.droppableId].id);
    console.log(state.tasks[draggableId].content);

    // addData(
    //   state.columns[source.droppableId].id,
    //   state.tasks[draggableId].content
    // );
    newStartTasksOrder.splice(source.index, 1);
    newEndTasksOrder.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...startColumn,
      tasksOrder: newStartTasksOrder,
    };

    const newEndColumn = {
      ...endColumn,
      tasksOrder: newEndTasksOrder,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [startColumn.id]: {
          ...newStartColumn,
        },
        [endColumn.id]: {
          ...newEndColumn,
        },
      },
    };
    // console.log(newState);
    setState(newState);
    addData(
      state.columns[destination.droppableId].id,
      state.tasks[draggableId].content
    );

    console.log("After_Move");
    console.log(newState);

    // addData(
    //   state.columns[source.droppableId].id,
    //   state.tasks[draggableId].content
    // );
  };

  return (
    <DrgDrpContext.Provider
      value={{
        state,
        onDragEnd,
        addData,
        handleEditing,
        endEditing,
      }}
    >
      {children}
    </DrgDrpContext.Provider>
  );
};

export { DragDropProvider };

export default DrgDrpContext;
