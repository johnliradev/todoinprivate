export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-4 mt-auto text-center text-sm text-neutral-400">
      <p>
        Made by{" "}
        <a
          href="https://blog-five-xi-46.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          John Lira
        </a>{" "}
        —{" "}
        <a
          href="https://github.com/johnliradev/todoinprivate"
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          Get code
        </a>
      </p>
    </footer>
  );
}
