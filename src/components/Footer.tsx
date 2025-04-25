export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-4 mt-auto text-center text-sm text-neutral-400">
      <p>
        Made by<span className=" font-medium">John Lira</span> —{" "}
        <a
          href="https://github.com/johnliradev/todoinprivate"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition"
        >
          Get code
        </a>
      </p>
    </footer>
  );
}
