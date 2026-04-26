---
title: "Cómo obtener las credenciales de SES.HOSPEDAJES paso a paso"
description: "Guía práctica para solicitar el código de arrendador, dar de alta tus establecimientos y conseguir el usuario y contraseña que necesitas para enviar partes de viajeros al Ministerio del Interior."
date: 2026-04-18
author: "RegistroViajero"
lang: "es"
translationKey: "ses-credentials"
---

Antes de poder enviar un solo parte de viajeros al Ministerio del Interior, necesitas tres cosas: un **código de arrendador**, un **código de establecimiento** por cada propiedad, y **credenciales de acceso** (usuario y contraseña) a la plataforma SES.HOSPEDAJES. Sin estos tres elementos, cualquier software de cumplimiento — incluido el nuestro — es incapaz de conectarse.

Esta guía explica qué son, cómo se solicitan y en qué orden, para que puedas empezar a cumplir con el RD 933/2021 sin dar vueltas.

## Qué es cada credencial y para qué sirve

Vale la pena aclarar los conceptos antes de entrar en el trámite, porque los tres términos se mezclan con frecuencia y no son lo mismo.

### Código de arrendador

Es el identificador único de la **persona física o jurídica** que explota el alojamiento. Si eres autónomo con varios apartamentos, tú tienes un único código de arrendador. Si gestionas a través de una sociedad, la sociedad tiene uno. Este código es el que enlaza todas tus comunicaciones a tu titularidad legal.

### Código de establecimiento

Es el identificador de **cada propiedad física** que opera como alojamiento. Un hotel con 40 habitaciones tiene **un único** código de establecimiento. Un gestor con 12 apartamentos tiene **12 códigos de establecimiento**, todos vinculados al mismo código de arrendador.

### Usuario y contraseña

Son las credenciales técnicas con las que el software (el tuyo, el nuestro, o el que uses) se autentica contra el endpoint SOAP de SES.HOSPEDAJES. Sin ellas, no hay envío posible.

## Requisitos previos

Antes de iniciar el trámite, asegúrate de tener:

- **Certificado digital** válido (FNMT, Cl@ve PIN o DNI electrónico) de la persona o entidad titular.
- **Datos de identificación fiscal**: NIF o CIF según corresponda.
- **Licencia o número de registro turístico** de cada propiedad (los requisitos varían por comunidad autónoma).
- **Dirección postal completa** de cada establecimiento, con referencia catastral si está disponible.
- **Tipología del alojamiento** según la clasificación del Ministerio (hotel, apartamento turístico, casa rural, etc.).
- **Capacidad** declarada (número de habitaciones/apartamentos y plazas).

Tener esto preparado evita tener que abandonar el formulario a medias.

## Paso 1: Alta como arrendador

El alta inicial se hace a través del **portal web de SES.HOSPEDAJES** del Ministerio del Interior (hospedajes.ses.mir.es). El flujo es el siguiente:

1. Accede al portal con tu **certificado digital**. No se puede empezar el trámite sin certificado — es el mecanismo de autenticación oficial.
2. Selecciona **"Alta nueva de arrendador"**.
3. Rellena los datos de titularidad: nombre o razón social, NIF/CIF, domicilio fiscal, teléfono y email de contacto.
4. Acepta las condiciones de uso de la plataforma.
5. Al finalizar, el sistema te asigna un **código de arrendador** que queda asociado a tu certificado.

Guarda este código en lugar seguro. Lo vas a necesitar para el siguiente paso y para configurar tu software de gestión.

## Paso 2: Alta de cada establecimiento

Con el código de arrendador ya emitido, puedes dar de alta los establecimientos uno a uno:

1. Desde el portal de SES.HOSPEDAJES, entra en **"Establecimientos"** → **"Nuevo"**.
2. Selecciona la **tipología** (hotel, hostal, pensión, apartamento turístico, vivienda de uso turístico, camping, casa rural, albergue, etc.).
3. Introduce:
   - **Nombre comercial** del establecimiento.
   - **Dirección completa** (calle, número, piso si aplica, código postal, municipio, provincia).
   - **Número de registro turístico** emitido por la comunidad autónoma.
   - **Capacidad**: número de unidades de alojamiento y plazas máximas.
   - **Coordenadas** (opcional pero recomendado).
4. Confirma el alta.

El sistema asigna un **código de establecimiento** a cada propiedad. Si tienes 10 apartamentos, repites el proceso 10 veces y obtienes 10 códigos distintos.

### Consejo: nombra los establecimientos de forma consistente

Si gestionas varias propiedades, es útil usar una convención de nombres clara ("Apartamento Centro 1A", "Apartamento Centro 1B"…) que luego puedas replicar en tu software de gestión. Así evitas confusiones al asignar reservas.

## Paso 3: Solicitud de credenciales técnicas

Las credenciales para el **envío automático** (el que hace tu software) son distintas del acceso al portal web. Se solicitan una vez que el arrendador y al menos un establecimiento están dados de alta:

1. Dentro del portal, entra en la sección de **"Servicios telemáticos"** o **"Integraciones"** (el nombre exacto puede variar según actualizaciones del portal).
2. Solicita el **alta de credenciales SOAP** indicando que vas a utilizar un software de terceros o desarrollo propio.
3. El sistema genera un **usuario** y te permite fijar una **contraseña**.

Estas son las credenciales que introduces en tu software. A partir de ese momento, cualquier envío queda autenticado contra tu cuenta.

> **Importante:** las credenciales técnicas son tan sensibles como un usuario administrador de tu correo o banca online. Cualquiera que las tenga puede enviar partes en tu nombre. Guárdalas cifradas y no las compartas por email ni mensajería.

## Paso 4: Configurar tu software

Con los tres elementos en la mano — código de arrendador, códigos de establecimiento y credenciales — ya puedes configurar la herramienta de envío. En [RegistroViajero](https://registroviajero.com) el flujo es:

1. **Panel → Configuración → SES.HOSPEDAJES**: introduces el código de arrendador, el usuario y la contraseña. El sistema cifra las credenciales con AES-256 antes de almacenarlas.
2. **Panel → Alojamientos → Editar**: en cada propiedad, introduces su **código de establecimiento**.
3. **Test de conexión**: antes de operar en producción, lanza una prueba de conexión desde el panel. Si todo es correcto, ves la respuesta del Ministerio confirmando que las credenciales funcionan.
4. A partir de ese momento, cada registro validado se envía automáticamente sin más intervención.

Puedes consultar la [guía detallada en nuestro centro de ayuda](https://help.registroviajero.com) para cada paso con capturas de pantalla.

## Errores comunes al tramitar

### "El certificado no corresponde al titular del alta"

El certificado digital que usas para autenticarte debe pertenecer a **la misma persona o entidad** que figura como titular. Si el alojamiento está a nombre de una sociedad y te autenticas con tu certificado personal, el trámite se rechaza. Solución: usar el certificado de representante de la sociedad o solicitar un certificado específico.

### "Número de registro turístico no encontrado"

Algunas comunidades tardan en sincronizar su registro autonómico con el del Ministerio. Si acabas de obtener tu número y el sistema no lo reconoce, espera 48–72 horas o contacta con la autoridad turística de tu comunidad para verificar que tu alta está publicada.

### "Código de establecimiento duplicado"

Suele ocurrir cuando intentas dar de alta el mismo alojamiento dos veces con pequeñas variaciones en la dirección. Revisa si ya existe una entrada para esa propiedad antes de crear una nueva.

### "Credenciales incorrectas" al configurar el software

Verifica que estás usando las **credenciales SOAP** (las de servicios telemáticos) y no las del portal web. Son distintas. También revisa que no hay espacios en blanco al copiar la contraseña.

## ¿Cuánto tarda el proceso completo?

En la mayoría de casos:

- **Alta como arrendador**: inmediata si el certificado es válido.
- **Alta de establecimiento**: inmediata por cada propiedad.
- **Credenciales técnicas**: inmediatas en la mayoría de perfiles; en algunos casos requiere validación manual que puede tardar **1–3 días hábiles**.

En total, es razonable tener todo operativo en **menos de una semana** desde que inicias el trámite, siempre que la documentación autonómica esté en orden.

## ¿Y si opero en Cataluña o el País Vasco?

Estas dos comunidades tienen sistemas propios para la comunicación de viajeros:

- **Cataluña**: la comunicación se envía a los **Mossos d'Esquadra** a través del sistema de la Generalitat. El alta y las credenciales se tramitan con la Consejería competente, no con el Ministerio.
- **País Vasco**: la comunicación se envía a la **Ertzaintza** a través del sistema del Gobierno Vasco.

Si operas en estas comunidades, consulta con la autoridad autonómica correspondiente. En RegistroViajero estamos trabajando para integrar estos sistemas cuando las especificaciones técnicas estén disponibles.

## Siguientes pasos

Una vez tengas las credenciales, lo que sigue es **no enviar partes a mano nunca más**. Automatizar el flujo desde el check-in del huésped hasta el envío al Ministerio es la diferencia entre cumplir con tranquilidad y vivir pendiente de un formulario.

Si quieres empezar, puedes:

- Leer [qué exige el RD 933/2021](/blog/rd-933-2021-registro-viajeros/) para ver el panorama completo.
- Revisar las [sanciones aplicables](/blog/sanciones-rd-933-2021/) por incumplimiento.
- [Crear una cuenta gratuita](https://app.registroviajero.com/register) y probar el sistema 15 días sin tarjeta.

---

*Los nombres exactos de los menús del portal SES.HOSPEDAJES pueden variar entre actualizaciones del Ministerio. Esta guía refleja el flujo general en la fecha de publicación.*
