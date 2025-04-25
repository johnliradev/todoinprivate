import { Button } from "./ui/button";
import { Check } from "lucide-react";

type Tasks = {
  id: number;
  title: string;
  completed: boolean;
};
type Props = {
  task: Tasks;
  toggleCheck: (id: number) => void;

  removeTask: (id: number) => void;
};

export default function Task({ task, toggleCheck, removeTask }: Props) {
  return (
    <div className="flex justify-between items-center py-1 px-5 rounded-md   w-full  border-1 border-neutral-500">
      {task.completed ? (
        <Button
          onClick={() => toggleCheck(task.id)}
          className="group w-[15%]"
          variant="link"
        >
          <p className="text-neutral-500 group-hover:text-yellow-500 transition-all duration-50">
            Uncheck
          </p>
        </Button>
      ) : (
        <Button
          onClick={() => toggleCheck(task.id)}
          className="group w-[15%]"
          variant="link"
        >
          <p className="text-neutral-500 group-hover:text-green-700 transition-all duration-50">
            Check
          </p>
        </Button>
      )}
      <p
        className={
          task.completed
            ? "line-through text-center font-medium text-md flex items-center"
            : "text-center font-medium text-md "
        }
      >
        {task.completed ? <Check size={20} /> : ""}
        {task.title}
      </p>
      <Button
        onClick={() => removeTask(task.id)}
        className="group"
        variant="link"
      >
        <p className="text-neutral-500 group-hover:text-red-500 transition-all duration-50">
          Remove
        </p>
      </Button>
    </div>
  );
}
