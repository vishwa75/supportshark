import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          🦈
          <span>SupportShark</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}