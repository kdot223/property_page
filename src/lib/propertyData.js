export async function fetchProperty(id = 1) {
  const res = await fetch(`http://localhost:4000/api/property/${id}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return await res.json();
}
