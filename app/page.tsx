export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <h1 className="text-6xl font-bold">
        Production Support
        <br />
        Developer Toolkit
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Fast browser-based tools for developers,
        DevOps engineers and production support teams.
      </p>

      <div className="mt-10 flex gap-4">

        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white">
          Explore Tools
        </button>

        <button className="rounded-lg border px-6 py-3">
          GitHub
        </button>

      </div>

    </section>
  );
}