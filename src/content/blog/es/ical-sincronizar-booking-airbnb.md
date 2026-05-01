---
title: "Sincronizar Booking, Airbnb y VRBO con iCal: guía para automatizar tus reservas"
description: "Qué es un iCal, dónde está el enlace en cada portal y cómo sincronizarlo con tu software de gestión para que las reservas entren solas sin tener que copiarlas a mano."
date: 2026-04-18
updated: 2026-05-01
author: "RegistroViajero"
lang: "es"
translationKey: "ical-sync"
---

Si gestionas un alojamiento turístico, conoces el dolor.

Una misma noche ocupada en Booking. Otra en Airbnb. Otra directa por WhatsApp. Y el miedo constante a la **doble reserva**.

La solución no es trabajar más rápido. Es **sincronizar** los calendarios entre sí. La industria lleva décadas usando un formato estándar para esto: el **iCal**.

Aquí explicamos qué es, dónde encontrar el enlace en cada portal (Booking.com, Airbnb, VRBO, Google Calendar) y cómo enlazarlo con tu software de registro de viajeros para que cada reserva genere automáticamente el check-in digital.

## Qué es un iCal

**iCal** (formato `.ics`, RFC 5545) es un estándar abierto para intercambiar información de calendario. Cada evento se describe con campos: fecha de inicio, fecha de fin, título, descripción y un identificador único.

Aplicado al hospedaje, un iCal es una **URL pública** —tipo `https://ical.booking.com/v1/export?token=...`— que devuelve un archivo de texto con todas las reservas del alojamiento. Cualquier software que lea iCal puede importar esas reservas y mantenerlas al día.

### Ventajas

- **Estándar abierto**: no depende de un acuerdo comercial específico entre portales.
- **Lectura universal**: Google Calendar, Outlook, Apple Calendar y la mayoría de PMS lo soportan.
- **Refresco automático**: el software consulta la URL periódicamente y detecta cambios.
- **Sin API ni claves complejas**: basta con la URL.

### Limitaciones

- **Información reducida**: el iCal te dice que hay reserva entre dos fechas, pero **no siempre** incluye nombre, email o teléfono. Para datos completos sigue haciendo falta el portal de origen o una integración API.
- **Frecuencia de refresco**: los portales no publican cambios al instante. Pueden pasar 5–30 minutos.
- **Sin escritura**: en la mayoría de casos el iCal es de solo lectura. Para **bloquear** fechas en el portal necesitas escribir de vuelta. Eso requiere sincronización bidireccional.

## Qué información trae y qué no

Un iCal típico de un portal OTA incluye:

- **Fecha de entrada** y **fecha de salida** (CHECKIN/CHECKOUT o DTSTART/DTEND).
- **Identificador único** de la reserva (UID).
- **Fuente** (Booking, Airbnb, VRBO, etc.).
- **Estado** (confirmado, cancelado).
- En algunos casos, **nombre del huésped** (parcial o completo) y **código de reserva**.

Lo que normalmente **no** trae: DNI, pasaporte, fecha de nacimiento, dirección. Es decir, no reemplaza al check-in. Solo te dice que hay estancia. Los datos personales para el parte de viajeros los recoges igual al huésped, con la diferencia de que ahora la reserva ya existe en tu sistema y solo queda mandarle el enlace.

## Cómo encontrar la URL iCal en cada portal

### Booking.com: dónde está el enlace para sincronizar

1. Accede a la **Extranet** con tu usuario de propietario.
2. Ve a **Tarifas y disponibilidad → Sincronización de calendarios** (puede aparecer como "Calendar sync" si tienes el panel en inglés).
3. Pulsa **"Exportar calendario"**.
4. Copia la **URL del iCal**.

Booking exporta un iCal **por alojamiento y por tipo de habitación**. Si tienes varias habitaciones o apartamentos, cada uno tiene su URL distinta.

### Airbnb: dónde está el enlace del calendario

1. Entra en tu cuenta de **anfitrión**.
2. Ve a **Anuncios → selecciona el alojamiento → Calendario → Disponibilidad**.
3. En **"Sincroniza calendarios"**, pulsa **"Exportar calendario"**.
4. Copia la **URL** que Airbnb te facilita.

Cada anuncio tiene su iCal. Si gestionas varios anuncios del mismo apartamento, una URL por cada uno.

### VRBO / Expedia: cómo exportar el calendario

1. Accede al panel de **anfitrión de VRBO**.
2. Ve a **Calendario → Importar/Exportar** (o "Sincronización de calendario").
3. En la pestaña **"Exportar"**, copia la URL del iCal.

Expedia Traveler Connection tiene un flujo similar a través de su panel de partner.

### Google Calendar

Si llevas reservas directas o bloqueos manuales en un Google Calendar, puedes exponerlo:

1. Abre **Google Calendar**.
2. En la lista de calendarios a la izquierda, haz clic en los tres puntos del calendario → **"Configuración y uso compartido"**.
3. Baja hasta **"Dirección secreta en formato iCal"** y copia la URL.

> **Atención**: esta URL es secreta. Cualquiera que la tenga puede ver todos tus eventos. No la compartas fuera del software al que se la vas a dar.

### Otros portales

La mayoría de plataformas (HomeAway, Tripadvisor Rentals, Rentalia, SpainHolidays, etc.) tienen una sección similar: **"Sincronización"**, **"Export calendar"**, **"Calendar feed"**, **"iCal feed"**. Búscalo en el panel de anfitrión.

## Sincronizar Booking, Airbnb y VRBO en un solo calendario

Una vez tienes las URLs iCal, el flujo en [RegistroViajero](https://registroviajero.com) es directo:

1. **Panel → Alojamientos → selecciona la propiedad → pestaña "Calendarios"**.
2. Pulsa **"Añadir fuente iCal"**.
3. Pega la URL, elige el **nombre de la fuente** (Booking, Airbnb, VRBO, Google Calendar u "Otra") y guarda.
4. El sistema hace un **primer sync inmediato** y empieza a sincronizar automáticamente cada hora.

A partir de ahí, cada evento nuevo del iCal se convierte en una **reserva** en tu panel, con sus fechas. Si configuras **auto check-in link**, el sistema genera el enlace único para el huésped en cuanto aparece la reserva. Listo para reenviar o para que llegue por email automático.

## Cada cuánto se actualiza el iCal de Airbnb y Booking

La pregunta más frecuente. Respuesta corta: depende del portal.

- **Airbnb** publica cambios en su iCal con un retardo típico de **2–4 horas**. A veces más.
- **Booking** suele estar entre **30 minutos y 2 horas**.
- **VRBO** se mueve en rangos similares a Booking.
- **Google Calendar** se actualiza casi al instante, pero el cliente que consume el iCal puede tener su propia frecuencia de sondeo.

RegistroViajero consulta los iCal cada hora por defecto. Eso quiere decir que, en la práctica, una reserva tarda en aparecer en tu panel entre el retardo del portal y la siguiente vuelta de sondeo. Para volúmenes altos puedes forzar un sync manual desde el panel.

## Cancelaciones de Airbnb: ¿se reflejan en el iCal?

Sí. Cuando una reserva se cancela en el portal de origen, el iCal deja de incluirla y el sistema detecta la diferencia.

Si tienes activada la **auto-anulación**, la reserva en RegistroViajero pasa a estado cancelado. Si ya se había enviado al Ministerio, se manda la **comunicación de anulación** correspondiente.

Hay un detalle. Algunos portales no eliminan la entrada del iCal de inmediato. La cancelación puede tardar 1–2 ciclos de sync en propagarse. Si una reserva cancelada sigue apareciendo, fuerza un sync manual y revisa después de 30 minutos.

## Buenas prácticas para sincronizar varios portales

Conectar solo un iCal rara vez es suficiente. Querrás conectar todos los portales donde publicas el mismo alojamiento. Aquí empiezan los matices.

### 1. Una URL iCal por portal, no por habitación

Si tienes un apartamento entero en Booking y el mismo apartamento en Airbnb, necesitas **las dos URLs** conectadas a la misma propiedad en tu software. Así el calendario interno refleja las reservas de ambos.

### 2. Bloquear fechas en ambos lados

Una reserva entrante de Booking, en principio, no bloquea automáticamente la disponibilidad en Airbnb. Para eso necesitas una **sincronización bidireccional**:

- Con **iCal bidireccional** en ambos sentidos. Funciona, pero con retardo: una reserva de Booking puede tardar 15–30 minutos en aparecer como bloqueo en Airbnb.
- Con un **channel manager**. Más rápido y fiable, pero también más caro y complejo.

Para volúmenes medios, iCal bidireccional entre pares de portales suele bastar. Para volúmenes altos, channel manager.

### 3. Estandarizar el naming

Si el mismo apartamento tiene nombres distintos en cada portal ("Centro 1A", "Downtown Apartment 1A", "Apt 1A"), asegúrate de asociarlo al **mismo alojamiento** en tu software. Si no, acabas con reservas duplicadas en propiedades distintas del panel.

### 4. Revisar periódicamente

Los portales a veces **regeneran** la URL del iCal (sobre todo tras cambios de contraseña o reseteos de seguridad). Si el sync deja de funcionar, lo primero a revisar es si la URL sigue siendo válida. En RegistroViajero recibes una notificación automática cuando un sync falla varias veces seguidas.

## "El iCal no sincroniza reservas de Booking": solución

Síntoma típico: añades el iCal de Booking, pasan horas y no aparece nada en el panel.

Comprueba, por orden:

1. Que la URL es la del **iCal de exportación**, no la de importación. Booking ofrece las dos. La que necesitas es la que **sale** del portal.
2. Que el alojamiento tiene reservas confirmadas en el rango que el iCal exporta (Booking expone hasta 12 meses hacia adelante).
3. Que la URL no caducó. Tras un cambio de contraseña, regenera la URL desde la Extranet.
4. Que tu software no tiene un fallo de DNS o de salida HTTPS. Fuerza un sync manual y revisa el log.

Si los cuatro están bien y aún no entra nada, abre incidencia con tu proveedor.

## Otros casos frecuentes

### "La reserva aparece con fechas incorrectas"

Algunos portales reportan la fecha de fin como **el día siguiente al checkout** (convención "hasta pero sin incluir"). Otros reportan el mismo día del checkout. El software debe normalizar esto, pero si ves una noche de más, revisa la zona horaria y la convención del portal.

### "Quiero ver el nombre del huésped pero no aparece"

Muchos iCal de portales OTA omiten el nombre por **privacidad**. Los datos reales los obtienes cuando el huésped rellena el **enlace de check-in digital** conforme al RD 933/2021.

### "El iCal trae reservas muy antiguas"

Por defecto, la mayoría de iCal exportan un rango amplio (6–12 meses adelante y a veces algún mes atrás). Es normal. El software no importa todo a ciegas; solo las reservas futuras o en curso activan la creación de un registro nuevo.

## iCal y cumplimiento del RD 933/2021

Conectar iCal **no sustituye** la obligación de enviar el parte de viajeros al Ministerio. Lo que hace es **alimentar** tu sistema con las reservas para que:

1. La **estancia esté creada** con sus fechas correctas desde el primer minuto.
2. El **enlace de check-in** llegue al huésped sin que tengas que crearlo.
3. Cuando el huésped rellene sus datos y firme, la **reserva de hospedaje** y el **parte de viajeros** se generen y envíen automáticamente.
4. Si el huésped cancela, la **anulación** se comunique también de forma automática.

iCal es el **paso 0** de la automatización. Sin iCal, tienes que crear cada reserva a mano antes de poder enviarle el check-in al huésped.

## Siguientes pasos

- [Cómo automatizar el registro de viajeros](/blog/automatizar-registro-viajeros/) — el flujo completo, de la reserva al envío.
- [Qué exige el RD 933/2021](/blog/rd-933-2021-registro-viajeros/) — el marco normativo.
- [Cómo obtener las credenciales SES.HOSPEDAJES](/blog/credenciales-ses-hospedajes/) — sin credenciales no hay envío.
- [Sanciones por incumplimiento](/blog/sanciones-rd-933-2021/) — qué te juegas si no cumples.
- [Registro de menores](/blog/menores-registro-viajeros/) — reglas específicas para niños y adolescentes.

¿Quieres verlo funcionar? [Crea una cuenta gratuita](https://app.registroviajero.com/register) y conecta tu primer iCal en 5 minutos. 15 días, sin tarjeta.

---

*Los nombres exactos de los menús en Booking, Airbnb y otros portales pueden cambiar. Esta guía refleja el flujo general en la fecha de publicación.*
