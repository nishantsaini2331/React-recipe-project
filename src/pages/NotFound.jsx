
function NotFound() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h1 className="font-serif text-5xl font-bold text-accent mb-2">404</h1>
      <h2 className="text-xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-muted mb-6">
        The page you are looking for does not exist.
      </p>
      <a
        href="#"
        className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 inline-block font-medium"
      >
        Back to Home
      </a>
    </main>
  );
}

export default NotFound;
