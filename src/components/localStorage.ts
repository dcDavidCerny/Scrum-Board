import { useEffect, useState } from "react";

export interface Task {
    status: "todo" | "inProgress" | "done";
    id: string;
    title: string;
    description: string;
    storyPoint: number;
}

export const saveNewTask = (title: string, description: string, storyPoint: number) => {
    const tasks = getTasks();
    const id = generateId();
    tasks.unshift({ title, description, storyPoint, id, status: "todo" });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    notifyTasksChanged();
}

export const deleteTask = (id: string) => {
    const tasks = getTasks();
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    notifyTasksChanged();

}

export const getTasks = (): Task[] => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
        return JSON.parse(tasks);
    } else {
        return [];
    }
}

export const editTask = ({
    id,
    title,
    description,
    storyPoint,
    status
}: Task
) => {
    const tasks = getTasks();
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index] = { id, title, description, storyPoint, status };
    localStorage.setItem("tasks", JSON.stringify(tasks));
    notifyTasksChanged();
}

export const getTaskByID = (id: string): Task | undefined => {
    const tasks = getTasks();
    return tasks.find((task) => task.id === id);
}

const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
}

const changeListeners = new Set<any>();

export const useTasksChanged = () => {
    const [, setFlip] = useState(false);
    useEffect(() => {
        changeListeners.add(setFlip);
        return () => {
            changeListeners.delete(setFlip);
        }
    }, []);
}

export const notifyTasksChanged = () => {
    changeListeners.forEach((listener) => {
        listener((flip: boolean) => !flip);
    });
}