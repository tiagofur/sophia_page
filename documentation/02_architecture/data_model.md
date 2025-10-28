# Modelo de Datos

El modelo de datos de Sophia App está diseñado para soportar el crecimiento y la flexibilidad del producto. Las principales entidades son:

## 1. Usuario

- id
- nombre
- email
- fecha_registro
- progreso

## 2. Reto

- id
- título
- descripción
- fecha_creación
- usuario_id (relación)

## 3. Práctica

- id
- tipo
- fecha
- usuario_id (relación)
- reto_id (relación)

## 4. Análisis

- id
- usuario_id
- datos
- fecha

### Relaciones

- Un usuario puede tener múltiples retos y prácticas.
- Los análisis se asocian a usuarios y prácticas.

Este modelo permite agregar nuevas entidades y relaciones conforme evoluciona la app.
