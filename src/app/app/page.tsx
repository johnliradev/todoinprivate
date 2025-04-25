"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonDarkMode from "@/components/ButtonDarkMode";
import ButtonCreateTask from "@/components/ButtonCreateTask";
import ContainerNoTasks from "@/components/containerNoTasks";
import ContainerTasks from "@/components/containerTasks";
import ButtonDeleteAllTasks from "@/components/ButtonDeleteAllTasks";
import { useIsMobile } from "@/hooks/useIsMobile";
import Footer from "@/components/Footer";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function AppPage() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const storedName = localStorage.getItem("username");

    if (!storedName) {
      router.push("/");
    } else {
      setUsername(storedName);
    }
  }, [router]);
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const createTask = (title: string) => {
    if (title.trim() === "") return;
    const newItem: Task = {
      id: tasks.length + 1,
      title: title,
      completed: false,
    };
    setTasks([...tasks, newItem]);
  };
  const toggleCheck = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const removeAllTasks = () => {
    setTasks([]);
  };

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 text-white px-4 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">Not available on mobile</h1>
          <p className="text-neutral-300">
            For the best experience, please access this app from a desktop or
            laptop device.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative p-4 w-screen h-screen max-w-5xl mx-auto">
      <div className="flex  items-center flex-row justify-between">
        <h1 className="font-playfair text-xl">Silence, {username}</h1>
        <div className="flex items-center gap-2 ">
          <ButtonDeleteAllTasks deleteAllTasks={removeAllTasks} />
          <ButtonDarkMode />
        </div>
      </div>
      <p className="text-center font-playfair mt-5">
        "Stay focused, build great things, in silence.
        <span className="font-bold"> No procrastination </span>"
      </p>
      {/* container task  */}
      <div className="flex flex-1 flex-col mt-2 items-center md:max-h-[75%]">
        {tasks.length > 0 ? (
          <ContainerTasks
            toggleCheck={toggleCheck}
            removeTask={removeTask}
            tasks={tasks}
          />
        ) : (
          <ContainerNoTasks />
        )}
      </div>
      <Footer />
      <ButtonCreateTask createTask={createTask} />
    </div>
  );
}
