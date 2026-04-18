---
title: "Sincronizar Booking, Airbnb y VRBO con iCal: guía para automatizar tus reservas"
description: "Qué es un iCal, cómo obtener el enlace en cada portal y cómo sincronizarlo con tu software de gestión para que las reservas entren solas sin tener que copiarlas a mano."
date: 2026-04-18
author: "RegistroViajero"
---

Si gestionas un alojamiento turístico, probablemente conoces el dolor: una misma noche ocupada en Booking, otra en Airbnb, otra directa por WhatsApp, y el miedo constante a la **doble reserva**. La solución no es trabajar más rápido: es **sincronizar** los calendarios entre sí a través de un formato estándar que la industria lleva usando desde hace décadas — el **iCal**.

En este artículo explicamos qué es el iCal, cómo se obtiene el enlace en los principales portales (Booking.com, Airbnb, VRBO, Google Calendar) y cómo enlazarlo con tu software de registro de viajeros para que cada reserva genere automáticamente el check-in digital correspondiente.

## Qué es un iCal

**iCal** (formato `.ics`, RFC 5545) es un estándar abierto para intercambiar información de calendario. Cada evento del calendario se describe con campos como fecha de inicio, fecha de fin, título, descripción y un identificador único.

Aplicado al mundo del hospedaje, un iCal se traduce en una **URL pública** (tipo `https://ical.booking.com/v1/export?token=...`) que, al consultarse, devuelve un archivo de texto con todas las reservas del alojamiento. Cualquier software capaz de leer iCal puede importar esas reservas y mantenerlas actualizadas.

### Ventajas del iCal

- **Estándar abierto**: no depende de un acuerdo comercial específico entre portales.
- **Lectura universal**: Google Calendar, Outlook, Apple Calendar y la mayoría de PMS lo soportan.
- **Refresco automático**: una vez configurada la URL, el software la consulta periódicamente y detecta cambios.
- **Sin API ni claves complejas**: basta con una URL.

### Limitaciones

- **Información reducida**: el iCal te dice que hay reserva entre dos fechas, pero **no siempre** incluye nombre del huésped, email o teléfono. Para datos completos, sigue necesitándose el portal de origen o una integración directa por API.
- **Frecuencia de refresco**: los portales no publican cambios al instante; puede haber retardos de 5–30 minutos.
- **Sin escritura**: en la mayoría de casos el iCal es de solo lectura. Para **bloquear** fechas en el portal necesitas escribir de vuelta, lo que requiere una sincronización bidireccional más compleja.

## Qué información trae y qué no

En la práctica, un iCal típico de un portal OTA incluye:

- **Fecha de entrada** y **fecha de salida** (CHECKIN/CHECKOUT o DTSTART/DTEND).
- **Identificador único** de la reserva (UID).
- **Fuente** (Booking, Airbnb, VRBO, etc.).
- **Estado** (confirmado, cancelado).
- En algunos casos, **nombre del huésped** (parcial o completo) y **código de reserva**.

Lo que normalmente **no** trae: DNI, pasaporte, fecha de nacimiento, dirección. Es decir, **no reemplaza al check-in**: solo te dice que hay una estancia. Los datos personales para el parte de viajeros los tienes que recoger igualmente al huésped, con la diferencia de que ahora la reserva **ya existe** en tu sistema y solo queda mandarle el enlace.

## Cómo obtener el enlace iCal en cada portal

### Booking.com

1. Accede a la **Extranet** de Booking con tu usuario de propietario.
2. Navega a **Tarifas y disponibilidad → Sincronización de calendarios** (el nombre exacto puede variar según versión: "Calendar sync" en inglés).
3. Pulsa **"Exportar calendario"**.
4. Copia la **URL del iCal** que te muestra.

Booking exporta un iCal **por alojamiento y por tipo de habitación**, así que si tienes varias habitaciones o apartamentos, cada uno tiene su URL distinta.

### Airbnb

1. Entra en tu cuenta de **anfitrión** en Airbnb.
2. Ve a **Anuncios → selecciona el alojamiento → Calendario → Disponibilidad**.
3. En la sección **"Sincroniza calendarios"**, pulsa **"Exportar calendario"**.
4. Copia la **URL** que Airbnb te proporciona.

Cada anuncio de Airbnb tiene su propio iCal. Si gestionas varios, tendrás una URL por cada uno.

### VRBO / Expedia

1. Accede al panel de **anfitrión de VRBO**.
2. Ve a **Calendario → Importar/Exportar** (o "Sincronización de calendario").
3. En la pestaña **"Exportar"**, copia la URL del iCal.

Expedia Traveler Connection tiene un flujo similar a través de su panel de partner.

### Google Calendar

Si llevas reservas directas o bloqueos manuales en un Google Calendar, también puedes exponerlo como iCal:

1. Abre **Google Calendar**.
2. En la lista de calendarios a la izquierda, haz clic en los tres puntos del calendario que quieres exponer → **"Configuración y uso compartido"**.
3. Baja hasta **"Dirección secreta en formato iCal"** y copia la URL.

> **Atención:** esta URL es secreta. Cualquiera que la tenga puede ver todos tus eventos. No la compartas fuera del software al que la vas a dar.

### Otros portales

La mayoría de plataformas especializadas (HomeAway, Tripadvisor Rentals, Rentalia, SpainHolidays, etc.) tienen una sección similar bajo nombres como **"Sincronización", "Export calendar", "Calendar feed"** o **"iCal feed"**. Busca en el panel de anfitrión.

## Cómo conectar el iCal a RegistroViajero

Una vez tienes las URLs iCal de cada portal, el flujo en [RegistroViajero](https://registroviajero.com) es directo:

1. **Panel → Alojamientos → selecciona la propiedad → pestaña "Calendarios"**.
2. Pulsa **"Añadir fuente iCal"**.
3. Pega la URL, elige el **nombre de la fuente** (Booking, Airbnb, VRBO, Google Calendar u "Otra") y guarda.
4. El sistema hace un **primer sync inmediato** y empieza a sincronizar automáticamente cada hora.

A partir de ese momento, cada evento nuevo del iCal se transforma en una **reserva** en tu panel, con sus fechas de entrada y salida ya preconfiguradas. Si configuras **auto check-in link**, el sistema genera automáticamente el enlace único para el huésped en cuanto aparece la reserva, listo para que tú lo reenvíes o para que llegue por email si tienes configurada esa opción.

Cuando una reserva se cancela en el portal de origen, el iCal deja de incluirla y el sistema detecta la diferencia. Si tienes activada la **auto-anulación**, la reserva en RegistroViajero pasa a estado cancelado y, si ya se había enviado al Ministerio, se envía la comunicación de anulación correspondiente.

## Buenas prácticas para sincronizar varios portales

Conectar solo un iCal rara vez es suficiente. Normalmente querrás conectar todos los portales donde publicas el mismo alojamiento, y aquí empiezan los matices:

### 1. Una URL iCal por portal, no por habitación

Si tienes un apartamento entero en Booking y el mismo apartamento en Airbnb, necesitas **las dos URLs** conectadas a la misma propiedad en tu software. Así el calendario interno refleja las reservas de ambos portales.

### 2. Bloquear fechas en ambos lados

Una reserva entrante de Booking, en principio, no bloquea automáticamente la disponibilidad en Airbnb. Para eso necesitas una **sincronización bidireccional**, que tradicionalmente se consigue:

- Con **iCal bidireccional** en ambos sentidos (cada portal consume el iCal del otro). Esto funciona pero con **retardo**: una reserva de Booking puede tardar 15–30 minutos en aparecer como bloqueo en Airbnb.
- Con un **channel manager** (integración directa vía API). Es más rápido y fiable, pero también más caro y complejo.

Para volúmenes medios, iCal bidireccional entre pares de portales suele ser suficiente. Para volúmenes altos o propiedades muy disputadas, conviene un channel manager.

### 3. Estandarizar el naming del alojamiento

Si el mismo apartamento tiene nombres distintos en cada portal ("Centro 1A", "Downtown Apartment 1A", "Apt 1A"), asegúrate de que lo asocias al **mismo alojamiento** en tu software. Si no, acabas con reservas duplicadas en propiedades distintas del panel.

### 4. Revisar periódicamente

Los portales a veces **regeneran** la URL del iCal (sobre todo tras cambios de contraseña o reseteos de seguridad). Si el sync deja de funcionar, lo primero que hay que revisar es si la URL sigue siendo válida. En RegistroViajero recibes una notificación automática cuando un sync falla repetidamente.

## Casos frecuentes y cómo resolverlos

### "La reserva aparece con fechas incorrectas"

Algunos portales reportan la fecha de fin como **el día siguiente al checkout** (convención "hasta pero sin incluir"). Otros reportan el mismo día del checkout. El software debe normalizar esto, pero si ves una noche de más, revisa la zona horaria y la convención del portal.

### "Un huésped canceló pero sigue apareciendo"

Puede ser por dos razones: el portal tarda en publicar la cancelación en su iCal (hasta 1–2 ciclos de sync), o bien el iCal está cacheado. Fuerza un **sync manual** desde el panel para resolver el segundo caso.

### "Quiero ver el nombre del huésped pero no aparece"

Muchos iCal de portales OTA omiten el nombre por **privacidad**. El titular y los datos reales los obtienes al enviar al huésped el **enlace de check-in digital**, que es donde rellena sus datos personales conforme al RD 933/2021.

### "El iCal trae reservas muy antiguas"

Por defecto, la mayoría de iCal exportan un rango amplio (6–12 meses hacia adelante y a veces algún mes hacia atrás). Esto es normal: no se importa todo a ciegas; solo las reservas futuras o en curso activan la creación de un registro nuevo.

## iCal y cumplimiento del RD 933/2021

Conectar iCal **no sustituye** la obligación de enviar el parte de viajeros al Ministerio. Lo que hace es **alimentar** tu sistema con las reservas para que:

1. La **estancia esté creada** con sus fechas correctas desde el primer minuto.
2. El **enlace de check-in** llegue al huésped sin que tengas que crearlo manualmente.
3. Cuando el huésped rellene sus datos y firme, la **reserva de hospedaje** y el **parte de viajeros** se generen y envíen automáticamente.
4. Si el huésped cancela, la **anulación** se comunique también de forma automática.

En otras palabras, iCal es el **paso 0** de la automatización. Sin iCal, tienes que crear cada reserva a mano antes de poder enviarle el check-in al huésped.

## Siguientes pasos

Para sacar el máximo partido a iCal, conviene tener también claros los puntos adyacentes:

- [Qué exige el RD 933/2021](/blog/rd-933-2021-registro-viajeros) — el marco normativo completo.
- [Cómo obtener las credenciales SES.HOSPEDAJES](/blog/credenciales-ses-hospedajes) — sin credenciales no hay envío posible.
- [Sanciones por incumplimiento](/blog/sanciones-rd-933-2021) — qué te juegas si no cumples.
- [Registro de menores](/blog/menores-registro-viajeros) — reglas específicas para niños y adolescentes.

Y si lo quieres ver funcionar de extremo a extremo, [crea una cuenta gratuita](https://app.registroviajero.com/register) y conecta tu primer iCal en 5 minutos. 15 días de prueba, sin tarjeta.

---

*Los nombres exactos de los menús en Booking, Airbnb y otros portales pueden cambiar. Esta guía refleja el flujo general en la fecha de publicación.*
