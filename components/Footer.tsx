export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-gray-500">
        © {new Date().getFullYear()} SupportShark
      </div>
    </footer>
  );
}