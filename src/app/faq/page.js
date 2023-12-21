
export default function Page() {
  return (
    <div className="bg-white p-8 w-full">
      <h1 className="text-5xl font-bold mb-6">Preguntas frecuentes</h1>
      <div className="space-y-4 w-full">
        <details className="p-4 bg-gray-200 rounded w-full">
          <summary className="text-xl font-semibold cursor-pointer w-full">¿Como puedo comentar una publicacion?</summary>
          <p className="pt-2 w-full">
            Se puede comentar una publicacion seleccionando la publicacion, dirigiendose hacia las opciones de abajo y
            seleccionar la segunda opcion(la derecha del corazon).
          </p>
        </details>
        <details className="p-4 bg-gray-200 rounded">
          <summary className="text-xl font-semibold cursor-pointer">¿Como puedo unirme a un grupo?</summary>
          <p className="pt-2">
            Para unirse a un grupo, se tiene que dirigir al apartado de comunidad, seleccionar un grupo, y luego hacer
            click al boton de unirse.
          </p>
        </details>
        <details className="p-4 bg-gray-200 rounded">
          <summary className="text-xl font-semibold cursor-pointer">¿Como puedo crear una publicacion?</summary>
          <p className="pt-2">
            Para crear un publicacion se tiene que estar en el inicio de la red social, puede ir al inicio haciendo
            click a la izquierda en la opcion de inicio, luego hacer click en el boton crear publicacion y rellenar
            los datos que se soliciten.
          </p>
        </details>
        <details className="p-4 bg-gray-200 rounded">
          <summary className="text-xl font-semibold cursor-pointer">¿Como puedo cerrar sesion?</summary>
          <p className="pt-2">
            para cerrar sesion solo tienes que dirigirte a las opciones de la izquierda ,abajo , y hacer click en cerrar
            sesion
          </p>
        </details>
      </div>
    </div>
  )
}

