---
title: "Cómo automatizar el registro de viajeros (RD 933/2021) sin papeleo ni envíos manuales"
description: "Guía práctica para automatizar el check-in de huéspedes, la importación de reservas y el envío a SES.HOSPEDAJES. Qué automatizar y qué tiene que seguir validando una persona."
date: 2026-04-26
author: "RegistroViajero"
lang: "es"
translationKey: "automate"
---

Si gestionas un alojamiento turístico en España, sabes que el **RD 933/2021** te obliga a recoger una lista larga de datos de cada huésped y a enviarlos al Ministerio del Interior a través de **SES.HOSPEDAJES**. Hacerlo a mano —fotocopias del DNI, hoja Excel, formulario web del Ministerio una reserva tras otra— es viable para una propiedad y dos noches al mes. Para cualquier volumen real, es la receta perfecta para olvidos, errores de transcripción y, eventualmente, [una sanción de seguridad ciudadana](/blog/sanciones-rd-933-2021/).

La buena noticia es que **prácticamente todo el flujo se puede automatizar**, desde que el huésped reserva hasta que el parte queda registrado en el Ministerio. La menos buena es que automatizar no es lo mismo que olvidarse: hay pasos que tienen que seguir bajo tu control. En este artículo desglosamos qué se puede automatizar, qué no, y cómo encadenarlo todo.

## Qué significa "automatizar el registro de viajeros"

El registro de viajeros tiene tres bloques operativos:

1. **Capturar los datos** del huésped (documento, fecha de nacimiento, dirección, datos de contacto, parentesco si aplica).
2. **Crear la reserva** en tu sistema (alojamiento, fechas, importe, medio de pago).
3. **Enviar al Ministerio** el parte de viajeros y, si es una vivienda turística o un apartamento, también la comunicación de hospedaje.

"Automatizar" significa, para cada uno de esos tres bloques, **eliminar la introducción manual de datos** sin perder validación humana donde la ley lo exige (firma de la declaración de veracidad, comprobación visual del documento, decisión sobre incidencias).

## El flujo manual que queremos sustituir

El flujo manual típico se parece a esto:

1. El huésped reserva por Booking, Airbnb o teléfono.
2. Apuntas la reserva en una hoja o agenda.
3. El día del check-in, recoges fotocopia del DNI/pasaporte y haces firmar un papel.
4. Esa noche o al día siguiente, te conectas a SES.HOSPEDAJES, abres el formulario y rellenas todos los campos a mano para cada viajero.
5. Si te equivocas en una letra, el envío se rechaza y vuelves a empezar.
6. Archivas papeles que tienes que conservar **3 años** para auditoría.

Cada paso es tiempo, riesgo de error y exposición legal. Veamos qué se puede automatizar en cada uno.

## 1. Captura automática de datos: check-in digital

El bloque que más tiempo ahorra. En lugar de que el huésped llegue y rellenes el formulario por él, le envías un **enlace de check-in único** y lo completa desde su móvil **antes de la llegada**:

- Sube la foto del documento desde la cámara.
- El sistema reconoce el tipo de documento (DNI, NIE, pasaporte, etc.) y le presenta solo los campos relevantes.
- Cuando llega al alojamiento, la información ya está en tu panel, validada y lista para el envío.

Lo importante: el formulario tiene que estar **adaptado al RD 933/2021**, no a un check-in genérico. Eso implica recoger los **18 campos exigidos** por la normativa, incluyendo segundo apellido y número de soporte para DNI/NIE, parentesco para menores, y los datos de pago en el caso de las comunicaciones de hospedaje. Si el formulario es genérico y no respeta estos campos, el envío al Ministerio fallará.

Para grupos y familias —el caso más conflictivo— funcionan dos patrones complementarios:

- **Un enlace por viajero**: cada adulto rellena el suyo desde su móvil.
- **Un enlace grupal único**: el responsable de la reserva los completa todos en una sesión, indicando los parentescos.

El segundo es especialmente útil para [registrar menores](/blog/menores-registro-viajeros/), donde necesitas además los datos del adulto acompañante.

## 2. Importación automática de reservas: iCal

El segundo bloque grande: que las reservas entren solas a tu sistema. La vía estándar de la industria son las **fuentes iCal** que cada portal expone para tu alojamiento.

Si conectas las URLs iCal de Booking, Airbnb, VRBO, Expedia, Tripadvisor y Google Calendar, las reservas aparecen automáticamente en tu panel sin que tú las copies. Cada vez que un portal recibe una reserva nueva, la sincronización (idealmente cada 15 minutos) la trae a tu sistema con el nombre del huésped principal, las fechas y, en algunos casos, el email o teléfono.

Lo que iCal **no** trae es:

- El documento de identidad del huésped (los portales no lo comparten por privacidad).
- Los datos del resto de viajeros que vienen con el titular.
- La firma de la declaración de veracidad.

Por eso la importación iCal **no sustituye al check-in digital**: lo complementa. La reserva entra sola; el huésped completa su parte desde el móvil. Profundizamos en cómo configurar cada portal en [Sincronizar Booking, Airbnb, VRBO y otros vía iCal](/blog/ical-sincronizar-booking-airbnb/).

## 3. Envío automático a SES.HOSPEDAJES

El último paso —el que más miedo da— es el que más se beneficia de la automatización: el **envío directo al Ministerio**. SES.HOSPEDAJES expone una API para que un sistema integrado envíe las comunicaciones sin pasar por el formulario web. Si tu plataforma está integrada, basta con marcar la reserva como validada y pulsar "enviar" para que el sistema:

1. Construya el XML con los datos de la reserva y los viajeros.
2. Lo firme y lo envíe a SES.HOSPEDAJES.
3. Reciba el acuse y lo guarde en el registro de auditoría.
4. Si hay un error de validación, te lo muestre con el mensaje del Ministerio para que lo corrijas.

Para esta integración necesitas tres credenciales que te entrega el Ministerio (usuario, contraseña y código de arrendador). Sin ellas no hay envío posible. La obtención no es trivial la primera vez —explicamos el procedimiento paso a paso en [Cómo obtener tus credenciales SES.HOSPEDAJES](/blog/credenciales-ses-hospedajes/).

## Qué no se puede (ni se debe) automatizar

Hay cuatro cosas que tienen que seguir bajo control humano, aunque la herramienta las facilite:

1. **La firma de la declaración de veracidad**. La ley exige que el huésped declare bajo su responsabilidad que los datos son correctos. La firma puede ser digital (en pantalla), pero tiene que ser un acto consciente.
2. **La comprobación visual del documento**. Si la foto del DNI está borrosa o no coincide con la persona, no envíes el parte. Una buena herramienta te avisará de incidencias, pero la decisión de validar es tuya.
3. **El alta inicial del alojamiento**. Cada alojamiento tiene un código de establecimiento que el Ministerio asigna y que debes introducir una vez. Eso se hace manualmente al configurar la propiedad.
4. **La gestión de incidencias** con el Ministerio (rechazos, datos faltantes, dudas sobre clasificación de viajeros). El sistema te avisa; tú decides cómo resolverlo.

Pretender que el sistema "envía solo todo sin que mires nada" es, además de irresponsable, ilegal: el titular del alojamiento es siempre el responsable de la veracidad de los datos comunicados.

## El flujo automatizado completo

Encadenando los tres bloques, así queda el día a día con un sistema que automatiza el RD 933/2021:

1. **El huésped reserva** en Booking/Airbnb/etc.
2. La reserva **entra sola** en tu panel vía iCal (en menos de 15 minutos).
3. El sistema **envía un enlace de check-in** al huésped.
4. El huésped **rellena sus datos** desde el móvil, sube la foto del DNI y firma.
5. Llega al alojamiento. **Tú validas** que los datos son correctos.
6. **Un clic envía el parte** a SES.HOSPEDAJES. Recibes el acuse.
7. Los datos se conservan **automáticamente 3 años** y se eliminan después.

Tiempo total de trabajo manual por reserva: del orden de **30–60 segundos** (la validación). Comparado con los 10–15 minutos del flujo manual, la diferencia se nota en la primera semana.

## Qué buscar en una herramienta

Si estás evaluando opciones para automatizar el RD 933/2021, los puntos no negociables son:

- **Envío directo a SES.HOSPEDAJES**, no exportación de un fichero que luego subes tú a mano.
- **Cobertura completa de los 18 campos** del RD 933/2021, incluyendo parentescos y datos de pago.
- **Importación iCal** desde los portales que uses (al menos Booking y Airbnb).
- **Check-in en varios idiomas** —si tus huéspedes son extranjeros, un formulario solo en español multiplica los abandonos.
- **Registro de auditoría inmutable** y retención de 3 años conforme a la normativa.
- **Cumplimiento RGPD**, datos cifrados, hosting en el EEE.
- Que **no bloquee el check-in** si tu suscripción caduca, para que tus huéspedes puedan completarlo aunque haya una incidencia administrativa por tu lado.

[RegistroViajero](/) cumple los siete puntos. Puedes probarlo durante 15 días sin tarjeta de crédito y montar el flujo completo en una tarde.

## Y si solo gestionas un alojamiento, ¿merece la pena?

Sí, por dos motivos:

- **Sanción potencial vs. coste**. Una sola sanción por incumplimiento empieza en 601 € (tramo grave de la LO 4/2015). El coste mensual de una herramienta de cumplimiento es de unos 5 € por alojamiento. La cuenta sale a las primeras de cambio.
- **Tiempo recuperado**. Aunque solo tengas 5 reservas al mes, eso son 5 envíos manuales de unos 10 minutos cada uno. Casi una hora al mes que recuperas para hacer otra cosa.

Para volúmenes mayores, el cálculo no admite discusión.

## Próximos pasos

- Si aún no tienes claro qué exige la norma, empieza por [qué exige el RD 933/2021](/blog/rd-933-2021-registro-viajeros/).
- Si te falta el último paso (las credenciales), [aquí explicamos cómo obtenerlas](/blog/credenciales-ses-hospedajes/).
- Si gestionas familias o grupos, conviene leer [el caso de los menores](/blog/menores-registro-viajeros/) antes de configurar el flujo.
- Y si quieres ver el sistema funcionando, [crea una cuenta gratuita de 15 días](https://app.registroviajero.com/register) y prueba el envío real con tu primera reserva.
