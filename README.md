## NestJS - Basic API
NestJS - API with a basic authentication system, JWT Token and a ping request that answers pong in json.

# .env example :
```
JWT_SECRET="8efb720c4c2c17ac7cc95a2b2948bbf5ce978d4be6288a6b6b91b5cae67b59b385e1e85bfab5ffdf693155b9049f008a03f13c862c6953ba7a2dd67ecc7543c9"
```

> http://localhost:3000/auth/login
> ```
> Body: {"username": "maria", "password": "guess"}
> ```

> http://localhost:3000/auth/profile
> 
> http://localhost:3000/api/v1/ping
> ```
> Headers:
> Authorization: Bearer {token}
> ```
