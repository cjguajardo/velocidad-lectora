import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default async function Page() {
  return <Card>
    <CardHeader></CardHeader>
    <CardContent>
      <CardDescription className="mb-4 text-slate-500">
        Fecha de entrada en vigor: 01/08/2024
      </CardDescription>

      <h2 className="text-lg text-bold mb-2">1. Introducción</h2>
      <CardDescription className="my-4">
        Esta Política de Privacidad describe cómo manejamos y protegemos su información cuando utiliza nuestra aplicación &quot;Velocidad Lectora&quot;. Nos comprometemos a proteger su privacidad y a manejar sus datos de manera transparente y segura.a
      </CardDescription>

      <h2 className="text-lg text-bold mb-2">2. Información Recopilada</h2>
      <CardDescription className="my-4">
        Nuestra Aplicación procesa grabaciones de audio con el fin de medir la velocidad del habla y generar texto utilizando modelos de inteligencia artificial (IA). No almacenamos ninguna grabación de audio ni ningún otro dato privado en nuestros servidores.
      </CardDescription>

      <h2 className="text-lg text-bold mb-2">3. Uso de la Información</h2>
      <CardDescription className="my-4">
        <ul>
          <li><strong>Procesamiento de Audio:</strong> Las grabaciones de audio proporcionadas por el usuario son procesadas exclusivamente para medir la velocidad del habla y generar texto mediante un modelo de IA.</li>
          <li><strong>No Almacenamiento de Datos:</strong> No almacenamos grabaciones de audio ni ningún otro tipo de datos privados. Todo el procesamiento se realiza en tiempo real y no se conserva ninguna información después del procesamiento.</li>
        </ul>
      </CardDescription>

      <h2 className="text-lg text-bold mb-2">4. Seguridad de la Información</h2>
      <CardDescription className="my-4">
        Implementamos medidas de seguridad adecuadas para proteger la información contra el acceso no autorizado y asegurar que la información proporcionada por los usuarios se maneje de manera segura y conforme a esta Política de Privacidad.
      </CardDescription>

      <h2 className="text-lg text-bold mb-2">5. Cambios en esta Política de Privacidad</h2>
      <CardDescription className="my-4">
        Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en esta página. Se recomienda revisar periódicamente esta Política de Privacidad para estar informado sobre cómo protegemos su información.
      </CardDescription>

      <h2 className="text-lg text-bold mb-2">6. Contacto</h2>
      <CardDescription className="my-4">
        Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o nuestras prácticas de manejo de datos, por favor contáctenos a través de [dev@cgcapps.cl].
      </CardDescription>

      <h2 className="text-lg text-bold mb-2">7. Aceptación de la Política de Privacidad</h2>
      <CardDescription className="my-4">

        Al utilizar nuestra Aplicación, usted acepta los términos de esta Política de Privacidad. Si no está de acuerdo con esta Política, por favor no utilice la Aplicación.
      </CardDescription>

      <hr />
      <CardDescription className="my-4 text-center">
        Esta política está diseñada para asegurar que los usuarios estén informados sobre cómo se maneja su información y garantizar su privacidad en todo momento.
      </CardDescription>

      <CardDescription className="my-4 text-center">
        <Link href="/" className="text-blue-600 hover:text-blue-200">Volver al Home</Link>
      </CardDescription>
    </CardContent>
  </Card>
}