---
title: "Quiénes somos y por qué construimos RegistroViajero"
description: "RegistroViajero lo construimos gestores de alojamiento turístico que estaban hartos de las soluciones existentes. Esta es nuestra historia, nuestra misión y lo que nos distingue de las alternativas."
date: 2026-04-16
updated: 2026-05-03
author: "RegistroViajero"
lang: "es"
translationKey: "welcome"
cover: "/blog/bienvenido-a-registroviajero.webp"
coverAlt: "Ilustración editorial: un gestor se despierta en una habitación mediterránea soleada con contraventanas de madera, listo para empezar el día"
---

No somos una empresa de software que descubrió un nicho en el alojamiento turístico. Somos gestores de alojamiento turístico que durante demasiado tiempo dependieron de herramientas que no estaban pensadas para ellos, y que al final decidieron construir la suya propia.

## El problema que vivíamos cada noche

Si gestionas propiedades en España, conoces el ritual. Llega la reserva. El huésped aparece. Antes de que pueda subir al apartamento, alguien — tú, un recepcionista, una persona de confianza — tiene que abrir SES.HOSPEDAJES, entrar con las credenciales del servicio web, rellenar un formulario con los datos del documento, enviarlo, esperar el acuse, y rezar para que no salga un código de error sin explicación.

Multiplicado por cuatro propiedades, por quince noches de julio, por el huésped que llegó tarde y el sistema que tardó treinta segundos en responder, eso es fácilmente una hora de trabajo administrativo nocturno que no le aporta valor a nadie.

Las herramientas que existían no resolvían esto. Las plataformas grandes para hoteles estaban diseñadas para PMS de 200 habitaciones, con contratos anuales y formaciones de dos días. Los plugins de navegador eran parches que automatizaban clics pero seguían dependiendo de que alguien estuviera delante del ordenador. Y ninguna de ellas había pensado en el gestor que tiene tres apartamentos en Booking, trabaja solo, y a las once de la noche está gestionando una incidencia en el piso de abajo.

## La decisión

A finales de 2024, con la entrada en vigor del [Real Decreto 933/2021](/blog/rd-933-2021-registro-viajeros/) y la obligación definitiva de comunicar a SES.HOSPEDAJES, la situación llegó a un punto de no retorno. Las sanciones por incumplimiento son reales. El sistema es real. Y las herramientas seguían siendo inadecuadas.

Así que empezamos a construir lo que queríamos usar nosotros mismos.

La decisión de diseño más importante llegó pronto: **el check-in tiene que ser del huésped, no del gestor**. El problema de fondo no era "cómo enviar más rápido los datos al Ministerio". Era "por qué sigue siendo responsabilidad del gestor recopilar los datos del huésped en primer lugar". Si el huésped puede hacer el check-in en el hotel desde el móvil, puede hacerlo también en un apartamento turístico.

De ahí nació RegistroViajero tal como es hoy: el gestor crea la reserva, el sistema genera un enlace único para el huésped, el huésped completa sus datos en su idioma desde cualquier dispositivo, firma la declaración de veracidad, y el sistema envía la comunicación a SES.HOSPEDAJES sin que nadie tenga que entrar al portal del Ministerio.

## Lo que aprendimos construyéndolo

Trabajar directamente con la API de SES.HOSPEDAJES — no a través del portal web, sino con el servicio SOAP del Ministerio — fue revelador. La documentación es inconsistente. Las respuestas de error [son crípticas o inexistentes](/blog/errores-ses-hospedajes-codigos/). El sistema rechaza comunicaciones por razones que no aparecen en ningún manual (el formato del prefijo telefónico, el número de soporte del DNI, el código ISO de la nacionalidad en tres letras y no en dos).

Comprendimos que el problema no es solo la interfaz de SES.HOSPEDAJES. Es que el proceso completo — desde la recogida del dato hasta la confirmación del Ministerio — tiene demasiadas cosas que pueden salir mal en silencio. Un envío aceptado no es lo mismo que un huésped registrado. La diferencia puede aparecer horas después, en un resultado asíncrono que nadie consulta.

Construir el sistema para gestores que lo viven en primera persona nos obligó a resolver esas partes invisibles: notificarte cuando un huésped no ha completado el check-in, mostrarte exactamente qué dato rechazó el Ministerio y por qué, y no marcarte una comunicación como enviada hasta que tengamos confirmación real.

## Nuestra misión

La misión de RegistroViajero es eliminar el trabajo administrativo de cumplimiento que no añade valor. El [Real Decreto 933/2021](/blog/rd-933-2021-registro-viajeros/) existe por razones legítimas — la seguridad pública requiere que los alojamientos comuniquen quién se hospeda. Pero que ese proceso requiera una hora de trabajo manual nocturno es un problema de herramientas, no un requisito legal.

Queremos que el gestor dedique su tiempo a sus huéspedes y sus propiedades, no a un formulario del Ministerio.

## Para quién es RegistroViajero

Para cualquier alojamiento que use SES.HOSPEDAJES como canal de envío: apartamentos turísticos, viviendas de uso turístico, hoteles pequeños, hostales, casas rurales. Funciona desde una sola propiedad hasta carteras de varias decenas. Si tienes propiedades exclusivamente en Cataluña o País Vasco, hoy aún no somos para ti — esas comunidades tienen sus propios sistemas ([Mossos d'Esquadra y Ertzaintza](/blog/cataluna-pais-vasco-registro-viajeros/)) y aún estamos trabajando en esas integraciones.

Lo que sí puedes esperar:

- **Check-in digital en 9 idiomas.** El huésped completa sus datos desde el móvil. Sin PDFs, sin formularios de papel, sin WhatsApps con fotos de documentos.
- **Sincronización de reservas.** Conecta los calendarios de Booking.com, Airbnb, VRBO, Expedia o cualquier fuente iCal. Las reservas entran solas.
- **Envío directo a SES.HOSPEDAJES.** XML generado y firmado automáticamente. El acuse del Ministerio queda guardado.
- **Notificaciones en tiempo real.** Sabes en el momento en que un huésped completa el check-in — o cuando no lo ha hecho y la entrada es mañana.
- **Registro de auditoría completo.** Cada operación queda registrada, lista para cualquier inspección.

## Una cosa que nos importa especialmente

No bloqueamos el check-in del huésped si tu suscripción caduca. Nuestra posición es que el cumplimiento legal no puede quedar rehén de un pago retrasado. Si alguna vez hay un problema con tu facturación, la plataforma sigue funcionando mientras lo resolvemos.

---

Si tienes preguntas o quieres ver cómo funciona antes de registrarte, pásate por nuestro [Centro de Ayuda](https://help.registroviajero.com) o inicia una [prueba gratuita de 15 días](https://app.registroviajero.com/register) — sin tarjeta de crédito.
