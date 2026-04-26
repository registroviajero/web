---
layout: ../../layouts/ContentPage.astro
title: Política de Privacidad
description: Cómo RegistroViajero trata tus datos y los de tus huéspedes en cumplimiento del RGPD y la normativa española de protección de datos personales.
---

# Política de Privacidad

## Responsable del tratamiento

- **Responsable**: <!-- TODO: nombre completo -->
- **Email**: legal@registroviajero.com
- **Sitio web**: https://registroviajero.com

## Datos que recogemos

**Datos de usuarios (administradores de agencia)**
- Nombre, email, contraseña (cifrada con argon2id)
- Nombre de la agencia, CIF
- Datos de facturación (gestionados por Polar, no almacenamos datos de pago)

**Datos de huéspedes (introducidos por los propios huéspedes)**
- Nombre completo, sexo, fecha de nacimiento, nacionalidad
- Tipo y número de documento de identidad, número de soporte (DNI)
- Dirección, teléfono, email
- Fotografías del documento de identidad (anverso y reverso)
- Para menores de 14-17 años: parentesco con adulto acompañante

## Finalidad y base legal

| Finalidad | Base legal |
|-----------|-----------|
| Gestión de cuentas de usuario | Ejecución del contrato (art. 6.1.b RGPD) |
| Recogida de datos de huéspedes | Cumplimiento de obligación legal: Real Decreto 933/2021 (art. 6.1.c RGPD) |
| Envío de comunicaciones al Ministerio del Interior (SES.HOSPEDAJES) | Cumplimiento de obligación legal (art. 6.1.c RGPD) |
| Facturación y gestión de suscripciones | Ejecución del contrato (art. 6.1.b RGPD) |
| Envío de emails transaccionales (invitaciones, restablecimiento de contraseña) | Interés legítimo (art. 6.1.f RGPD) |

## Destinatarios

- **Ministerio del Interior** (España): los datos de huéspedes se envían a la plataforma SES.HOSPEDAJES conforme al RD 933/2021.
- **Polar** (polar.sh): gestión de pagos y suscripciones.
- **Proveedor de hosting**: Contabo GmbH (Alemania, dentro del EEE).

No vendemos ni compartimos datos con terceros para fines comerciales.

## Plazo de conservación

- **Datos de huéspedes**: 3 años desde la fecha de registro, conforme al RD 933/2021. Transcurrido este plazo, se eliminan automáticamente.
- **Datos de usuarios**: mientras la cuenta esté activa. Tras la solicitud de eliminación, se borran en un plazo máximo de 30 días.
- **Documentos de identidad**: mismo plazo que los datos de huéspedes (3 años).

## Medidas de seguridad

- Contraseñas cifradas con argon2id
- Credenciales SES cifradas con AES-256-GCM
- Comunicaciones cifradas mediante HTTPS/TLS
- Almacenamiento de documentos en servidor S3 privado
- Aislamiento de datos por agencia (multi-tenancy)
- Registro de auditoría inmutable

## Derechos del interesado

Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento enviando un email a legal@registroviajero.com indicando tu nombre y email asociado.

Si eres un huésped cuyos datos han sido recogidos a través de la plataforma, contacta directamente con la agencia de alojamiento que gestionó tu registro. La agencia es la responsable del tratamiento de tus datos; RegistroViajero actúa como encargado del tratamiento.

Tienes derecho a presentar una reclamación ante la [Agencia Española de Protección de Datos](https://www.aepd.es).

## Almacenamiento local

Este sitio utiliza el almacenamiento local del navegador (localStorage) para la sesión de autenticación y la preferencia de idioma. No utilizamos cookies de análisis ni de terceros.

*Última actualización: abril 2026*
