import InfoClient from '../../src/components/InfoClient';
import { fetchProperty } from '../../src/lib/propertyData';
export default async function InfoPage() {
  const data = await fetchProperty(1);
  return <div className="container-xl"><InfoClient initialData={data} /></div>;
}
