import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
type Props = {
  deleteAllTasks: () => void;
};

export default function ButtonDeleteAllTasks({ deleteAllTasks }: Props) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteAllTasks();
    setOpen(false); // Fecha o diálogo
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-red-500 text-white hover:bg-red-700">
          <Trash className="mr-2" />
          Remove all tasks
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete all your
            tasks.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Keep tasks
          </Button>
          <Button
            className="bg-red-600 text-white hover:bg-red-700"
            onClick={handleDelete}
          >
            Delete tasks
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
