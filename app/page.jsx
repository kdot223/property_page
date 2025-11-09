import Link from 'next/link';
export default function HomePage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      <h1 className="mb-4 fw-bold text-primary">🏡 Property Info Page</h1>
      <p className="mb-4 text-muted">Explore property details and contact agents easily.</p>
      <Link href="/info" className="btn btn-dark px-4 py-2">View Property Info</Link>
    </div>
  );
}
