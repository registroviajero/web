---
title: "Menores en el registro de viajeros: qué datos pedir y quiénes están exentos"
description: "Cómo aplica el RD 933/2021 a niños y adolescentes: exención por debajo de 14 años, obligación de declarar parentesco entre 14 y 17, y qué documentos se aceptan en cada caso."
date: 2026-04-18
author: "RegistroViajero"
lang: "es"
translationKey: "minors"
---

Cuando llega una familia con niños a un apartamento o a un hotel, surgen siempre las mismas dudas en el check-in: ¿hay que registrar al bebé? ¿qué datos le pido a un adolescente de 15 años que viaja con sus padres? ¿necesita DNI un menor? ¿qué es eso del "parentesco" que pide el formulario?

El **Real Decreto 933/2021** tiene reglas específicas para menores de edad, pensadas para equilibrar el cumplimiento normativo con el sentido común. En este artículo las repasamos caso por caso.

## La regla general: tres tramos de edad

La normativa distingue tres situaciones según la edad del huésped:

| Edad | ¿Se registra? | Datos exigidos |
|------|--------------|----------------|
| **Menores de 14 años** | Exentos de registro individual | Solo constan como acompañantes |
| **Entre 14 y 17 años** | Obligatorio | Datos completos + **parentesco** con un adulto acompañante |
| **18 años o más** | Obligatorio | Datos completos (como cualquier adulto) |

Esta gradación aparece de forma directa en las especificaciones técnicas que el Ministerio publica para la plataforma SES.HOSPEDAJES y se traduce, en la práctica, en que cada software de cumplimiento debe pedir datos distintos según la edad del huésped.

## Menores de 14 años: exentos

Los niños por debajo de 14 años **no necesitan parte de viajeros individual**. Esto no significa que sean invisibles para el sistema: siguen contando para el **número total de plazas ocupadas** de la reserva de hospedaje, pero no se les pide DNI, no se les pide dirección, no se les pide número de teléfono y no se les pide firma.

En la práctica, el titular de la reserva indica que viajan con él/ella y el alojamiento registra la **ocupación total** correcta para la noche.

### ¿Por qué esta exención?

Por dos razones principales:

1. **Muchos menores no tienen DNI** hasta que cumplen 14 años. Exigir un documento oficial a un bebé o a un niño de 5 años carece de sentido operativo.
2. **Los menores viajan bajo responsabilidad de un adulto**, que ya está identificado y registrado. El control de seguridad ciudadana sobre el grupo se ejerce a través del adulto responsable.

## Entre 14 y 17 años: registro completo + parentesco

Los adolescentes de 14 a 17 años **sí se registran** como cualquier adulto, con una particularidad: debe declararse el **parentesco** con un adulto acompañante que figure en la misma reserva.

### ¿Qué documentos se aceptan?

En España, el DNI es obligatorio a partir de los 14 años. Por tanto, la gran mayoría de menores españoles de esta franja tienen DNI y se registran con él.

Los valores aceptados por el Ministerio son:

- **DNI** (exige también el **número de soporte** — el identificador que aparece detrás del DNI debajo del código IDESP).
- **NIE** (para extranjeros con residencia en España que tengan 14+).
- **Pasaporte** (habitual para viajeros extranjeros de esta edad).
- **Documento de identidad** del país de origen, si es un documento oficial reconocido.

Si el menor tiene DNI o NIE, es obligatorio además introducir el **segundo apellido**.

### ¿Qué es el parentesco?

Es la relación familiar o de tutela entre el menor y el adulto acompañante. Los valores que contempla la plataforma SES.HOSPEDAJES son, entre otros:

- Padre / Madre
- Tutor / Tutora
- Abuelo / Abuela
- Tío / Tía
- Hermano / Hermana
- Otros

El formulario de check-in debe permitir seleccionar uno de estos valores y enlazarlo con el **adulto concreto** que actúa como acompañante (no basta con decir "viaja con un adulto"; hay que decir **con quién**).

### ¿Y si viaja sin familiar directo?

Casos típicos: excursiones escolares, campamentos, equipos deportivos juveniles. En estos supuestos el acompañante es normalmente el **monitor, profesor o responsable del grupo**, que actúa como tutor temporal. El parentesco declarado es "tutor" u "otros" según la documentación aportada.

Si el menor viaja **solo** (caso infrecuente en este tramo de edad pero no imposible), debe consultarse con la autoridad competente. En general, la admisión de menores no acompañados en alojamientos turísticos está sujeta a autorización parental explícita y puede generar reticencias por parte del alojamiento, al margen de la normativa de registro.

## Desde los 18 años: régimen ordinario

A partir de la mayoría de edad, el registro es idéntico al de cualquier adulto. No se declara parentesco, no hay acompañante obligatorio, los datos se recogen por completo y el firmante de la declaración de veracidad es el propio huésped.

## El caso del "Huésped 1" (titular de la reserva)

Una particularidad del flujo: el **primer huésped registrado** de cada reserva es, por convención, el **titular de la reserva**. Esta persona es quien contrata el alojamiento y sobre quien recae la responsabilidad principal de que los datos del resto de huéspedes sean correctos.

El titular **siempre es mayor de edad** en la práctica, porque es quien firma el contrato de hospedaje. Los menores nunca figuran como titulares.

## Errores frecuentes en el registro de menores

Después de procesar miles de check-ins, estos son los errores más comunes que vemos en este terreno:

### 1. Registrar a un menor de 14 como adulto

Por hábito, algunos operadores rellenan un parte para cada persona de la reserva, incluidos los niños pequeños. Esto no es necesario y puede generar rechazos del Ministerio si los datos del DNI no son válidos (porque el niño no lo tiene).

**Solución**: marcar al menor como acompañante y dejar que el sistema lo contabilice en la ocupación total sin pedir documento.

### 2. Olvidar el parentesco entre 14 y 17

Si se registra a un adolescente sin declarar parentesco con un adulto de la misma reserva, el Ministerio devuelve un error de validación y la comunicación no se considera completa.

**Solución**: el formulario debe forzar la selección de parentesco cuando la fecha de nacimiento del huésped cae en este tramo.

### 3. Confundir DNI y número de soporte

El **número de soporte** es un identificador adicional que aparece en el DNI español (formato alfanumérico tipo "AAA123456"). Es distinto del número del DNI y es **obligatorio** cuando el documento es DNI.

**Solución**: el formulario debe preguntarlo explícitamente con un ejemplo visual de dónde aparece en el documento.

### 4. Apellido 2 ausente en DNI/NIE

Los documentos españoles (DNI, NIE) siempre llevan dos apellidos. Si el formulario no lo exige y se envía con un solo apellido, la validación del Ministerio falla.

**Solución**: el campo "segundo apellido" debe ser obligatorio siempre que el tipo de documento sea DNI o NIE.

## Protección de datos y menores

Un asunto que se olvida con frecuencia: el **RGPD** y la **LOPDGDD** dan una protección reforzada a los datos de menores. Aunque la base de tratamiento en el registro de viajeros es el **cumplimiento de una obligación legal** (RD 933/2021), no una base de consentimiento, conviene tener en cuenta algunas buenas prácticas:

- **Minimización**: no pedir más datos de los exigidos por el Ministerio.
- **Retención limitada**: la norma fija **3 años** de conservación; pasado ese plazo, los datos deben eliminarse o anonimizarse.
- **Acceso restringido**: solo el personal del alojamiento autorizado debe ver los datos personales.
- **Firma del adulto responsable**: la declaración de veracidad sobre los datos de un menor la firma el adulto acompañante, no el propio menor.

## Cómo lo resuelve RegistroViajero

En [RegistroViajero](https://registroviajero.com) el flujo de registro de menores está preparado de serie:

- **Detección automática por edad**: el formulario detecta que el huésped es menor de 14, entre 14 y 17, o adulto, y adapta los campos obligatorios en tiempo real.
- **Parentesco obligatorio** cuando procede, con enlace al adulto acompañante concreto de la reserva.
- **Validaciones en cadena**: si eliges DNI, pide segundo apellido y número de soporte; si eliges pasaporte, no los pide.
- **Firma del acompañante** para menores, con la declaración de veracidad correspondiente.
- **Retención configurable** conforme al RGPD y al RD 933/2021 (por defecto, borrado automático a los 3 años).

Puedes ampliar contexto con [qué exige el RD 933/2021](/blog/rd-933-2021-registro-viajeros), [qué sanciones contempla la ley](/blog/sanciones-rd-933-2021) y [cómo obtener las credenciales SES.HOSPEDAJES](/blog/credenciales-ses-hospedajes).

Si gestionas un alojamiento con alta rotación familiar, [crear una cuenta gratuita](https://app.registroviajero.com/register) te permite probar el flujo completo durante 15 días sin tarjeta.

---

*Este artículo es informativo. Para casos específicos (menores no acompañados, tutela judicial, alojamientos de emergencia, etc.), consulta con tu asesor jurídico o con la autoridad competente.*
