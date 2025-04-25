import Task from "./task";

type Tasks = {
  id: number;
  title: string;
  completed: boolean;
};
type Props = {
  tasks: Tasks[];
  toggleCheck: (id: number) => void;
  removeTask: (id: number) => void;
};
export default function ContainerTasks({
  tasks,
  toggleCheck,
  removeTask,
}: Props) {
  return (
    <div className="flex flex-col md:w-2/3 h-full overflow-x-scroll  gap-2 px-5">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleCheck={toggleCheck}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}
