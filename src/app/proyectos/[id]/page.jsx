import ProyectoIndividual from './ProyectoIndividual'
import proyectos from '../../mockdata/proyectos'

export async function generateStaticParams() {
  return proyectos.map((p) => ({ id: p.id }))
}

export default async function Page({ params }) {
  const proyecto = proyectos.find((p) => p.id === params.id)

  if (!proyecto) return <div>Proyecto no encontrado</div>

  return <ProyectoIndividual proyecto={proyecto} />
}
