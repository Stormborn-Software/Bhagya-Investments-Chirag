import PoojaDetail from '@/components/PoojaDetail/PoojaDetail';
import poojas from '@/data/poojas.json';
import { redirect } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return poojas.poojas.map((pooja) => ({
    id: pooja.id,
  }));
}

export default async function Page({ params }) {
  let poojaParams = await params;
  const pooja = await poojas.poojas.find(p => p.id == poojaParams.id);

  if (!pooja) {
    redirect('/not-found');
  }

  return <PoojaDetail pooja={pooja} />;
} 