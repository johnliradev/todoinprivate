export default function ContainerNoTasks() {
  return (
    <div className="dark:text-white text-neutral-500 text-center mt-32 space-y-5">
      <p>No tasks yet. Come on, create a new task!</p>
      <p className="bg-neutral-900 text-sm py-2 rounded-lg text-white">
        Press Alt + N or ⌥+N
      </p>
    </div>
  );
}
