import { useQuery } from 'react-query';
import { obtenerTemas } from '@/queries/foro';
import { useSession } from 'next-auth/react'; // Importa useSession de Next.js
import FotoForo from './FotoForo'
const ForoPost = ({ className }) => {
  const { data, isLoading } = useQuery(['get-foros'], () => obtenerTemas());
  const { data: session } = useSession(); // Obtener los datos de quien lo esta usando ahora

  console.log('data', data)
  return (
    <div className={className}>
      <div className="flex flex-col w-full">
        <div className="relative w-full">
          <div className="flex flex-col w-full">
            {data?.data.data.map((item, index) => (
              <div className="w-full px-4 mt-4" key={index}>
                <a href={`/Tema/${item.id}`} onClick={console.log("El ID del tema seleccionado es: ", item.id)}>
                <FotoForo
                  nombre={<strong>{item.usuario_tema.nombre + ' ' + item.usuario_tema.apellido}</strong>} description={item.nombre} idT={item.id} correo={item.usuario_tema.email} usuarioCorreo={session?.user?.email}
                /></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForoPost;
