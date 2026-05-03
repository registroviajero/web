---
title: "Errores de SES.HOSPEDAJES: los códigos más frecuentes y cómo resolverlos"
description: "SES puede rechazar tu comunicación en dos momentos distintos: al instante o horas después, en silencio. Entender la diferencia te ahorra reenvíos innecesarios y huéspedes sin registrar. Causas y soluciones de los errores más habituales."
date: 2026-05-10
updated: 2026-05-10
author: "RegistroViajero"
lang: "es"
translationKey: "ses-error-codes"
cover: "/blog/errores-ses-hospedajes-codigos.webp"
coverAlt: "Ilustración editorial: un viajero estudia una pared de casilleros de madera, dos de ellos con un suave resplandor naranja; expresa curiosidad serena mientras sostiene un sobre"
---

Envías el parte de viajeros a SES.HOSPEDAJES y ves "enviado". Horas después, el huésped sigue sin estar registrado. O peor: el portal te devuelve un código numérico críptico y no hay ningún texto de ayuda cerca.

El problema más habitual no es que hayas cometido un error grave. Es que SES puede rechazar una comunicación en **dos momentos completamente distintos** — y la mayoría de propietarios no saben que existen ambos.

## Los dos momentos en que SES puede rechazarte

### Primer momento: rechazo al enviar

Este rechazo ocurre en segundos, antes de que el Ministerio lea siquiera los datos del huésped. SES devuelve un código numérico de error en el momento del envío. Si ves uno de estos, el envío entero fue rechazado — ningún huésped quedó registrado.

| Código | Qué dice SES | Causa habitual | Solución |
|--------|-------------|---------------|----------|
| `10103` | Código de arrendador no registrado | El código de arrendador introducido no coincide con el registrado en SES | Cópialo exactamente desde el portal SES; un espacio extra basta para fallar |
| `10107` | Usuario incorrecto | Usuario o contraseña del servicio web SES incorrectos | El usuario del servicio web termina en `_WS`; no confundas con las credenciales del portal web |
| `10119` | Sin permisos | La cuenta no tiene permisos para enviar comunicaciones | Contactar soporte SES.HOSPEDAJES |
| `10120` | Servicio web no habilitado | No tienes activado el envío por servicio web | Hay que solicitarlo expresamente en el portal — no se activa por defecto al registrarse |
| `10121` | Comunicación duplicada | El Ministerio ya recibió esta comunicación | Ver sección siguiente — no reenvíes |

El código `0` significa que el envío fue **aceptado** para revisión. No significa que los datos son correctos — eso lo sabrás en el segundo momento.

### Segundo momento: rechazo silencioso horas después

Este es el rechazo que más sorprende. Cuando el primer momento no da error, el Ministerio revisa los datos de cada huésped por separado. Ese proceso puede tardar **minutos o varias horas**. Para saber el resultado real hay que comprobar el estado del envío más tarde.

Cada huésped puede quedar correctamente registrado o ser rechazado con un mensaje que describe qué dato estaba mal. El envío en su conjunto puede mostrar "aceptado" aunque varios huéspedes individuales hayan sido rechazados.

**Esto significa que "enviado" no es igual a "registrado".** Un envío aceptado en el primer momento puede tener huéspedes rechazados en el segundo, sin que nada en la pantalla de envío te lo indique.

---

## Errores frecuentes en el segundo momento y cómo resolverlos

### Número de soporte inválido

**La causa número uno de denegación según la propia plataforma.**

El número de soporte es la cadena de caracteres que aparece en el **reverso del DNI** (para documentos españoles tipo DNI) o en la zona inferior del NIE. Es obligatorio para todos los documentos de identidad españoles.

Errores comunes: leerlo del anverso, confundirlo con el número de serie del documento, introducirlo con espacios o guiones.

### Segundo apellido obligatorio

Cuando el huésped tiene DNI o NIE, el segundo apellido es **obligatorio** aunque el huésped use habitualmente solo uno. Si falta, el parte será rechazado con el mensaje "Segundo apellido obligatorio".

### Tipo de documento no coincide con la nacionalidad

SES valida que el tipo de documento sea coherente con la nacionalidad del huésped. Enviar un DNI para un ciudadano extranjero, o un pasaporte extranjero para un residente español, genera este error.

Regla práctica: DNI y NIE solo para quienes tienen esos documentos específicos. Para el resto, pasaporte o tarjeta de identidad nacional.

### Formato de teléfono incorrecto

SES exige que el teléfono lleve el prefijo internacional en formato `0034`, **nunca con el símbolo `+`**. Un número válido para el Ministerio:

```
0034612345678   ✓
+34612345678    ✗
```

### Nacionalidad en formato incorrecto

El Ministerio exige el código de país de tres letras (no dos). Los errores más habituales:

| País | Incorrecto | Correcto |
|------|-----------|---------|
| Reino Unido | GB | GBR |
| Alemania | DE | DEU |
| Francia | FR | FRA |
| Estados Unidos | US | USA |

### Código de establecimiento no encontrado

El código de establecimiento del alojamiento no existe en SES para ese arrendador. Causas habituales:

- Copiado con errores desde el portal
- Alojamiento dado de alta recientemente y aún no activo
- Alojamiento asociado a otro código de arrendador

Verificar en la ficha del alojamiento dentro del portal SES.HOSPEDAJES.

---

## El código 10121: no reenvíes

El error `10121 — Comunicación duplicada` es el único que **no requiere reenvío**. Significa que el Ministerio ya tiene esa comunicación. Reenviar el mismo parte generará otro 10121 en bucle.

La acción correcta es comprobar el estado del envío original para saber si los huéspedes quedaron registrados.

---

## Cómo saber en qué momento está el problema

| Síntoma | Dónde buscar |
|---------|-------------|
| Código de error al momento de enviar | Tabla de la sección anterior |
| Confirmación de envío pero huéspedes sin registrar | Revisar el resultado individual de cada huésped |
| Algunos huéspedes registrados, otros no | Revisar el mensaje de error de los huéspedes rechazados |
| Sin respuesta tras más de 30 segundos | Problema de conectividad — reintenta sin duplicar el parte |

---

## Lo que RegistroViajero hace por ti

[RegistroViajero](/blog/automatizar-registro-viajeros/) gestiona ambas situaciones automáticamente: comprueba el estado del envío tras cada comunicación, identifica qué huéspedes fueron rechazados y te notifica con el motivo específico.

Si tienes dudas sobre [las credenciales de SES.HOSPEDAJES](/blog/credenciales-ses-hospedajes/), ese artículo explica en detalle la diferencia entre las credenciales del portal y las del servicio web, y cómo configurar el código de arrendador correctamente.
