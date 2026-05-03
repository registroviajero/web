---
title: "Cómo obtener las credenciales de SES.HOSPEDAJES paso a paso"
description: "Guía práctica para solicitar el código de arrendador, dar de alta tus establecimientos y conseguir el usuario y contraseña que necesitas para enviar partes de viajeros al Ministerio del Interior."
date: 2026-04-18
updated: 2026-05-01
author: "RegistroViajero"
lang: "es"
translationKey: "ses-credentials"
cover: "/blog/credenciales-ses-hospedajes.webp"
coverAlt: "Un viajero frente a una puerta de madera española con tres grandes llaves de hierro flotando en arco alrededor de su mano; un gato observa desde una maceta"
---

Antes de poder enviar un solo parte de viajeros, necesitas tres cosas. Un **código de arrendador**. Un **código de establecimiento** por cada propiedad. Y **credenciales de acceso** (usuario y contraseña) a la plataforma SES.HOSPEDAJES.

Sin estos tres elementos, cualquier software de cumplimiento —incluido el nuestro— es incapaz de conectarse.

Esta guía explica qué son, cómo se solicitan y en qué orden. Para que puedas empezar a cumplir con el RD 933/2021 sin dar vueltas.

## Qué es cada credencial y para qué sirve

Vale la pena aclarar los conceptos. Los tres términos se mezclan con frecuencia y no son lo mismo.

### Código de arrendador: dónde se obtiene

Es el identificador único de la **persona física o jurídica** que explota el alojamiento. Si eres autónomo con varios apartamentos, tú tienes un único código. Si gestionas a través de una sociedad, lo tiene la sociedad.

Este código enlaza todas tus comunicaciones a tu titularidad legal. **Cómo solicitar el código de arrendador al Ministerio del Interior**: lo asigna SES.HOSPEDAJES automáticamente cuando completas el alta como arrendador con tu certificado digital. No hay un formulario aparte.

### Código de establecimiento: qué es

Identifica **cada propiedad física** que opera como alojamiento. Un hotel con 40 habitaciones tiene **un único** código de establecimiento. Un gestor con 12 apartamentos tiene **12 códigos**, todos vinculados al mismo código de arrendador.

### Usuario y contraseña

Las credenciales técnicas con las que el software se autentica contra el endpoint SOAP de SES.HOSPEDAJES. Sin ellas, no hay envío posible.

## Requisitos previos

Antes de iniciar, asegúrate de tener:

- **Certificado digital** válido (FNMT, Cl@ve PIN o DNI electrónico) de la persona o entidad titular.
- **Datos de identificación fiscal**: NIF o CIF según corresponda.
- **Licencia o número de registro turístico** de cada propiedad (varía por comunidad autónoma).
- **Dirección postal completa** de cada establecimiento, con referencia catastral si la tienes.
- **Tipología del alojamiento** según la clasificación del Ministerio (hotel, apartamento turístico, casa rural, etc.).
- **Capacidad** declarada (número de habitaciones/apartamentos y plazas).

Tener esto preparado evita abandonar el formulario a medias.

## SES.HOSPEDAJES: cómo darse de alta paso a paso

El alta inicial se hace en el **portal web** del Ministerio del Interior (`hospedajes.ses.mir.es`).

### Paso 1: Alta como arrendador

1. Accede al portal con tu **certificado digital**. Sin certificado no se puede empezar el trámite. Es el mecanismo de autenticación oficial.
2. Selecciona **"Alta nueva de arrendador"**.
3. Rellena los datos: nombre o razón social, NIF/CIF, domicilio fiscal, teléfono y email.
4. Acepta las condiciones de uso.
5. Al finalizar, el sistema te asigna un **código de arrendador** asociado a tu certificado.

Guarda este código en lugar seguro.

### Paso 2: Alta de cada establecimiento

Con el código de arrendador emitido, das de alta los establecimientos uno a uno:

1. Desde el portal, entra en **"Establecimientos"** → **"Nuevo"**.
2. Selecciona la **tipología** (hotel, hostal, pensión, apartamento turístico, vivienda de uso turístico, camping, casa rural, albergue, etc.).
3. Introduce:
   - **Nombre comercial** del establecimiento.
   - **Dirección completa** (calle, número, piso si aplica, código postal, municipio, provincia).
   - **Número de registro turístico** emitido por la comunidad autónoma.
   - **Capacidad**: unidades de alojamiento y plazas máximas.
   - **Coordenadas** (opcional pero recomendable).
4. Confirma el alta.

El sistema asigna un **código de establecimiento** a cada propiedad. Si tienes 10 apartamentos, repites 10 veces y obtienes 10 códigos distintos.

#### Consejo: nombra los establecimientos de forma consistente

Si gestionas varias propiedades, una convención clara ("Apartamento Centro 1A", "Apartamento Centro 1B"…) que luego replicas en tu software de gestión te ahorra confusiones al asignar reservas.

### Paso 3: Solicitud de credenciales técnicas

Las credenciales para el envío automático son distintas del acceso al portal web. Se solicitan una vez que el arrendador y al menos un establecimiento están dados de alta.

1. Dentro del portal, entra en **"Servicios telemáticos"** o **"Integraciones"** (el nombre puede variar).
2. Solicita el **alta de credenciales SOAP** indicando que vas a usar software de terceros o desarrollo propio.
3. El sistema genera un **usuario** y te permite fijar una **contraseña**.

Estas son las credenciales que introduces en tu software. Cualquier envío queda autenticado contra tu cuenta.

> **Importante:** las credenciales técnicas son tan sensibles como un usuario administrador de tu correo o banca online. Cualquiera que las tenga puede enviar partes en tu nombre. Guárdalas cifradas. No las compartas por email ni mensajería.

## Configurar tu software

Con los tres elementos en la mano —código de arrendador, códigos de establecimiento y credenciales— configuras la herramienta de envío. En [RegistroViajero](https://registroviajero.com) el flujo es:

1. **Panel → Configuración → SES.HOSPEDAJES**: introduces el código de arrendador, el usuario y la contraseña. El sistema cifra las credenciales con AES-256 antes de almacenarlas.
2. **Panel → Alojamientos → Editar**: en cada propiedad introduces su **código de establecimiento**.
3. **Test de conexión**: antes de operar en producción, lanzas una prueba. Si todo es correcto, ves la respuesta del Ministerio confirmando que las credenciales funcionan.
4. A partir de ahí, cada registro validado se envía automáticamente sin más intervención.

La [guía detallada con capturas](https://help.registroviajero.com) está en el centro de ayuda.

## Errores comunes al tramitar

### "El certificado no corresponde al titular del alta"

El certificado debe pertenecer a **la misma persona o entidad** que figura como titular. Si el alojamiento está a nombre de una sociedad y te autenticas con tu certificado personal, el trámite se rechaza.

Solución: usa el certificado de representante de la sociedad o pide un certificado específico. **SES.HOSPEDAJES con certificado digital no funciona** suele resolverse aquí, en el 80% de los casos.

### "Número de registro turístico no encontrado"

Algunas comunidades tardan en sincronizar su registro autonómico con el del Ministerio. Si acabas de obtener tu número y SES.HOSPEDAJES no lo reconoce, espera 48–72 horas o contacta con la autoridad turística autonómica.

### "Código de establecimiento duplicado"

Suele ocurrir cuando intentas dar de alta el mismo alojamiento dos veces con pequeñas variaciones en la dirección. Revisa si ya existe una entrada antes de crear una nueva.

### Error 10107: credenciales incorrectas

Es uno de los códigos más frecuentes. Significa que el usuario, la contraseña o el código de arrendador no encajan.

Comprueba, por orden:

1. Que estás usando las **credenciales SOAP** (las de servicios telemáticos), no las del portal web. Son distintas.
2. Que no hay espacios en blanco al copiar la contraseña.
3. Que el código de arrendador en el software es exactamente el que SES te asignó.
4. Que no has cambiado la contraseña en el portal y has olvidado actualizarla en el software.

### "SES.HOSPEDAJES no me deja entrar" o error 500 al iniciar sesión

Causa habitual: incidencia temporal del portal o del servicio de autenticación con certificado. Si pasa pocos minutos y vuelves a probar, suele resolverse. Si persiste, prueba con otro navegador o limpia la caché. Tener el certificado caducado también devuelve un 500 sin explicación.

### Contraseña olvidada: cómo recuperarla

Desde el portal, hay un enlace de "Cambiar contraseña" que requiere autenticarte con el certificado. Una vez dentro, fijas una nueva. **Importante**: si cambias la contraseña en el portal, tienes que actualizarla en tu software. Si no, el siguiente envío fallará con error 10107.

## Cuánto tarda el proceso completo

En la mayoría de casos:

- **Alta como arrendador**: inmediata si el certificado es válido.
- **Alta de establecimiento**: inmediata por cada propiedad.
- **Credenciales técnicas**: inmediatas en la mayoría de perfiles. En algunos casos requieren validación manual que puede tardar **1–3 días hábiles**.

Es razonable tener todo operativo en **menos de una semana** desde que inicias el trámite, siempre que la documentación autonómica esté en orden.

## ¿Y si opero en Cataluña o el País Vasco?

Estas comunidades tienen sistemas propios:

- **Cataluña**: la comunicación se envía a los **Mossos d'Esquadra** a través del sistema de la Generalitat. El alta y las credenciales se tramitan con la consejería competente.
- **País Vasco**: la comunicación se envía a la **Ertzaintza** a través del sistema del Gobierno Vasco.

Si operas allí, consulta la [particularidad regional con detalle](/blog/cataluna-pais-vasco-registro-viajeros/). En RegistroViajero estamos trabajando para integrar estos sistemas cuando las especificaciones técnicas estén disponibles.

## Siguientes pasos

Una vez tengas las credenciales, lo que sigue es **no enviar partes a mano nunca más**. Automatizar el flujo desde el check-in del huésped hasta el envío al Ministerio es la diferencia entre cumplir con tranquilidad y vivir pendiente de un formulario.

Si quieres empezar:

- Lee [qué exige el RD 933/2021](/blog/rd-933-2021-registro-viajeros/) para tener el panorama completo.
- Revisa las [sanciones aplicables](/blog/sanciones-rd-933-2021/) por incumplimiento.
- [Crea una cuenta gratuita](https://app.registroviajero.com/register) y prueba el sistema 15 días sin tarjeta.

---

*Los nombres exactos de los menús del portal SES.HOSPEDAJES pueden variar entre actualizaciones del Ministerio. Esta guía refleja el flujo general en la fecha de publicación.*
