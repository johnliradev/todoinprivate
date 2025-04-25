import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";

type Props = {
  createTask: (title: string) => void;
};

export default function ButtonCreateTask({ createTask }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const sendTitle = () => {
    if (taskTitle.trim() === "") return;
    createTask(taskTitle);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        document.getElementById("task-input")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);
  return (
    <motion.div
      ref={containerRef}
      className="absolute bottom-12 right-1/2 translate-x-1/2 w-[10%] bg-neutral-900 text-white p-3 shadow-lg "
      initial={{ width: "80%" }}
      animate={{
        width: expanded ? "60%" : "50%",
        borderRadius: expanded ? "10px" : "10px",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex items-center gap-2 w-full">
        <Plus className="opacity-60" />

        <Input
          id="task-input"
          placeholder="Create new task"
          className="bg-transparent border-none text-white placeholder:text-neutral-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          onFocus={() => setExpanded(true)}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendTitle();
              setTaskTitle("");
              setExpanded(false);
            }
            if (e.key === "Escape") {
              setExpanded(false);
              (e.target as HTMLInputElement).blur();
            }
          }}
        />

        <div className="text-xs bg-white text-black px-2 py-1 rounded-md ml-auto">
          ⌥+N
        </div>
      </div>

      {expanded && (
        <motion.div
          className="flex justify-end gap-2 mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ delay: 0.05 }}
        >
          <Button
            className="bg-red-500 hover:bg-red-700 text-white"
            onClick={() => setExpanded(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => {
              setTaskTitle("");
              setExpanded(false);
              sendTitle();
            }}
          >
            Create
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
