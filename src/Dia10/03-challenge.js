/*
En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
*/

function createTaskPlanner() {
    let tasksList = [];
    return {
        addTask(task) {
            task.completed = false;
            tasksList.push(task);
        },
        removeTask(value) {
            if(typeof value === "number") {
                tasksList = tasksList.filter((task) => task.id !== value);
            }
            if(typeof value === "string") {
                tasksList = tasksList.filter((task) => task.name !== value);
            }
        },
        getTasks() {
            return tasksList;
        },
        getPendingTasks() {
            return tasksList.filter((task) => !task.completed);
        },
        getCompletedTasks() {
            return tasksList.filter((task) => task.completed);
        },
        markTaskAsCompleted(value) {
            let index;
            if(typeof value === "number") {
                index = tasksList.findIndex((task) => task.id === value);
            }
            if(typeof value === "string") {
                index = tasksList.findIndex((task) => task.name === value);
            }
            tasksList[index].completed = true;
        },
        getSortedTasksByPriority() {
            tasksPriority = [ ...tasksList].sort((a, b) => a.priority - b.priority );
            return tasksPriority;
        },
        filterTasksByTag(tag) {
            return tasksList.filter((task) => task.tags.includes(tag));
        },
        updateTask(taskId, updates) {
            const index = tasksList.findIndex((task) => task.id === taskId);

            tasksList[index] = { ...tasksList[index], ...updates};
        },
    }
}


const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 2,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal", "shopping"],
});

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["home"],
});

planner.addTask({
    id: 3,
    name: "Llamar a Pepito",
    priority: 3,
    tags: ["personal", "home"]
});

console.log(planner.getPendingTasks());
planner.markTaskAsCompleted("Llamar a Juan");
planner.markTaskAsCompleted(3);
console.log(planner.filterTasksByTag("shopping"));
console.log(planner.getCompletedTasks());
console.log(planner.getTasks());
console.log(planner.getPendingTasks());
console.log(planner.getSortedTasksByPriority());
