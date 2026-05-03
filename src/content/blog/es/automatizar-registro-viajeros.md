---
title: "Cómo automatizar el registro de viajeros (RD 933/2021) sin papeleo ni envíos manuales"
description: "Guía práctica para automatizar el check-in de huéspedes, la importación de reservas y el envío a SES.HOSPEDAJES. Qué automatizar y qué tiene que seguir validando una persona."
date: 2026-04-26
updated: 2026-05-01
author: "RegistroViajero"
lang: "es"
translationKey: "automate"
cover: "/blog/automatizar-registro-viajeros.webp"
coverAlt: "Un personaje junto a una pequeña máquina de manivela en un patio español; papeles entran por un lado y salen ordenados y atados con hilo"
---

Si gestionas un alojamiento turístico en España, ya conoces la rutina. El **RD 933/2021** te obliga a recoger una lista larga de datos de cada huésped y mandarlos al Ministerio del Interior por **SES.HOSPEDAJES**.

Hacerlo a mano es viable con una propiedad y dos noches al mes. Para cualquier volumen real, es la receta perfecta para olvidos, errores de transcripción y, a la larga, [una sanción de seguridad ciudadana](/blog/sanciones-rd-933-2021/).

La buena noticia es que casi todo el flujo se puede automatizar. Desde que el huésped reserva hasta que el parte queda registrado en el Ministerio. La menos buena: automatizar no es lo mismo que olvidarse. Hay pasos que tienen que seguir bajo tu control.

Aquí desglosamos qué automatizar, qué no, y cómo encadenarlo.

## Qué significa automatizar el parte de viajeros para apartamentos turísticos

El registro tiene tres bloques operativos:

1. **Capturar los datos** del huésped (documento, fecha de nacimiento, dirección, contacto, parentesco si aplica).
2. **Crear la reserva** (alojamiento, fechas, importe, medio de pago).
3. **Enviar al Ministerio** el parte de viajeros y, si es vivienda turística, también la reserva de hospedaje.

Automatizar significa, para cada uno, eliminar la introducción manual sin perder la validación humana donde la ley la exige. La firma de la declaración. La comprobación visual del documento. La decisión sobre incidencias.

## El flujo manual que queremos sustituir

Conoces la película:

1. El huésped reserva por Booking, Airbnb o teléfono.
2. Apuntas la reserva en una hoja o agenda.
3. El día del check-in, le pides el DNI y le haces firmar un papel.
4. Esa noche entras al portal SES.HOSPEDAJES y rellenas todos los campos a mano.
5. Te equivocas en una letra. El envío se rechaza. Vuelves a empezar.
6. Archivas papeles que tienes que conservar **3 años**.

Cada paso es tiempo, riesgo y exposición legal.

## 1. Captura automática: check-in digital y escaneo del DNI del huésped

El bloque que más tiempo ahorra. En lugar de rellenar el formulario tú, le mandas al huésped un **enlace de check-in único**. Lo completa desde el móvil antes de llegar.

- Sube la foto del documento desde la cámara.
- El sistema reconoce el tipo de documento (DNI, NIE, pasaporte) y le muestra solo los campos que aplican.
- Cuando llega al alojamiento, los datos ya están en tu panel, validados.

Aquí entra el OCR del DNI para el parte de viajeros de la vivienda turística. Una buena lectura ahorra al huésped tener que teclear nombre, apellidos, número y fecha de nacimiento. Lo importante es que el OCR esté pensado para los documentos que la norma admite, no para tarjetas genéricas.

El formulario tiene que estar adaptado al RD 933/2021. No vale un check-in genérico. Hablamos de los **18 campos exigidos**, incluido el segundo apellido y el número de soporte para DNI/NIE, el parentesco para menores, y los datos de pago para la reserva de hospedaje. Si el formulario no respeta estos campos, el envío al Ministerio falla.

Para grupos y familias —el caso más conflictivo— funcionan dos patrones complementarios:

- **Un enlace por viajero**: cada adulto rellena el suyo desde su móvil.
- **Un enlace grupal**: el responsable los completa todos en una sesión, indicando los parentescos.

El segundo patrón es especialmente útil para [registrar menores](/blog/menores-registro-viajeros/), donde además necesitas los datos del adulto acompañante.

## 2. Importación automática de reservas: iCal

El segundo bloque grande. Que las reservas entren solas a tu sistema. La vía estándar de la industria son las **fuentes iCal** que cada portal expone.

Conectas las URLs iCal de Booking, Airbnb, VRBO, Expedia, Tripadvisor y Google Calendar. Las reservas aparecen automáticamente en tu panel. Cada vez que un portal recibe una reserva nueva, la sincronización (idealmente cada 15 minutos) la trae a tu sistema con el nombre del titular, las fechas y, en algunos casos, email o teléfono.

Lo que iCal no trae:

- El documento de identidad del huésped (los portales no lo comparten por privacidad).
- Los datos del resto de viajeros que vienen con el titular.
- La firma de la declaración de veracidad.

Por eso la importación iCal no sustituye al check-in digital. Lo complementa. La reserva entra sola; el huésped completa su parte desde el móvil. Profundizamos en cómo configurar cada portal en [Sincronizar Booking, Airbnb, VRBO y otros vía iCal](/blog/ical-sincronizar-booking-airbnb/).

## 3. Enviar parte de viajeros automáticamente a SES.HOSPEDAJES

El último paso —el que más miedo da— es el que más se beneficia de la automatización. **SES.HOSPEDAJES** expone una API. Un programa para registrar viajeros automáticamente en SES envía las comunicaciones sin pasar por el formulario web.

Si tu plataforma está integrada, marcas la reserva como validada y pulsas "enviar". El sistema:

1. Construye el XML con los datos de la reserva y los viajeros.
2. Lo firma y lo envía a SES.HOSPEDAJES.
3. Recibe el acuse y lo guarda en el registro de auditoría.
4. Si hay un error de validación, te lo muestra con el mensaje del Ministerio.

Esto es, en la práctica, **SES.HOSPEDAJES como registrar viajeros sin entrar al portal**. La integración necesita tres credenciales del Ministerio: usuario, contraseña y código de arrendador. Sin ellas no hay envío posible. Lo explicamos paso a paso en [Cómo obtener tus credenciales SES.HOSPEDAJES](/blog/credenciales-ses-hospedajes/).

## Qué datos del parte de viajeros requieren revisión manual

No todo se debe automatizar. Hay cuatro cosas que siguen bajo control humano, aunque la herramienta las facilite:

1. **La firma de la declaración de veracidad**. La ley exige que el huésped declare bajo su responsabilidad que los datos son correctos. La firma puede ser digital, en pantalla. Pero tiene que ser un acto consciente.
2. **La comprobación visual del documento**. Si la foto del DNI está borrosa o no coincide con la persona, no envíes el parte. La herramienta avisa de incidencias; la decisión es tuya.
3. **El alta inicial del alojamiento**. El código de establecimiento te lo asigna el Ministerio. Eso se introduce a mano una vez al configurar la propiedad.
4. **Las incidencias con el Ministerio** (rechazos, datos faltantes, dudas de clasificación). El sistema te avisa; tú decides cómo resolverlo.

Pretender que el sistema "envía solo todo sin que mires" es, además de irresponsable, ilegal. El titular del alojamiento es siempre el responsable de la veracidad.

## El flujo automatizado completo

Encadenando los tres bloques, así queda el día a día con un check-in online del apartamento turístico y envío automático a SES:

1. **El huésped reserva** en Booking, Airbnb o donde sea.
2. La reserva **entra sola** vía iCal en menos de 15 minutos.
3. El sistema **manda el enlace de check-in** al huésped.
4. El huésped **rellena sus datos** desde el móvil, sube la foto del DNI y firma.
5. Llega al alojamiento. **Tú validas** que los datos cuadran.
6. **Un clic envía el parte** a SES.HOSPEDAJES. Recibes el acuse.
7. Los datos se conservan **automáticamente 3 años** y se eliminan después.

Tiempo total de trabajo manual por reserva: **30–60 segundos** (la validación). Frente a los 10–15 minutos del flujo manual, la diferencia se nota la primera semana.

## Qué buscar en una herramienta

Si estás evaluando opciones, los puntos no negociables son:

- **Envío directo a SES.HOSPEDAJES**, no exportar un fichero que luego subes tú a mano.
- **Cobertura completa de los 18 campos** del RD 933/2021, parentescos y datos de pago incluidos.
- **Importación iCal** desde los portales que uses (al menos Booking y Airbnb).
- **Check-in en varios idiomas**. Un formulario solo en español multiplica los abandonos con huéspedes extranjeros.
- **Registro de auditoría inmutable** y retención de 3 años.
- **Cumplimiento RGPD**, datos cifrados, hosting en el EEE.
- Que **no bloquee el check-in** si tu suscripción caduca. Tus huéspedes deben poder completarlo igualmente.

[RegistroViajero](/) cumple los siete. 15 días de prueba sin tarjeta. Montas el flujo completo en una tarde.

## Conectar tu PMS o channel manager con SES.HOSPEDAJES

Si ya trabajas con un PMS o un channel manager, lo razonable es que reciba las reservas y mande los datos del huésped a la herramienta de cumplimiento sin que tú tengas que tocar nada. Esto se hace por integración API o por iCal compartido.

El PMS no sustituye al envío al Ministerio. Lo alimenta. La firma del huésped y el envío firmado siguen ocurriendo en la herramienta de cumplimiento.

## ¿Y si solo gestionas un alojamiento, merece la pena?

Sí, por dos motivos.

**Sanción potencial vs. coste**. Una sola sanción por incumplimiento empieza en 601 € (tramo grave de la LO 4/2015). El coste mensual de una herramienta de cumplimiento es de unos 5 € por alojamiento. La cuenta sale a las primeras de cambio.

**Tiempo recuperado**. Aunque solo tengas 5 reservas al mes, eso son 5 envíos manuales de unos 10 minutos. Casi una hora al mes que recuperas.

Para volúmenes mayores, el cálculo no admite discusión.

## Próximos pasos

- ¿Aún no tienes claro qué exige la norma? Empieza por [qué exige el RD 933/2021](/blog/rd-933-2021-registro-viajeros/).
- ¿Te falta el último paso? [Aquí explicamos cómo conseguir las credenciales](/blog/credenciales-ses-hospedajes/).
- ¿Gestionas familias o grupos? Conviene leer [el caso de los menores](/blog/menores-registro-viajeros/) antes de configurar el flujo.
- ¿Quieres ver el sistema funcionando? [Crea una cuenta gratuita de 15 días](https://app.registroviajero.com/register) y prueba el envío con tu próxima reserva.
