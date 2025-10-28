# API Overview

Sophia App utiliza APIs RESTful proporcionadas por Supabase y endpoints propios para futuras integraciones. Los principales endpoints incluyen:

## Autenticación

- POST /auth/signup
- POST /auth/login
- POST /auth/logout

## Usuarios

- GET /users/{id}
- PUT /users/{id}

## Retos

- GET /challenges
- POST /challenges
- GET /challenges/{id}

## Prácticas

- GET /practices
- POST /practices

## Análisis

- GET /analysis/{user_id}

### Ejemplo de uso

```http
POST /auth/signup
{
	"email": "usuario@ejemplo.com",
	"password": "********"
}
```

La documentación completa de la API estará disponible en futuras versiones, incluyendo autenticación, errores y ejemplos avanzados.
