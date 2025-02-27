<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```

3. Tener  Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __env.template__ y renombrar a __env__

6. LLenar variables de entorno definidas en el __env__

6. Reconstruir la base de datos mediante seed (postman)
```
http://localhost:3001/api/v2/seed
```

8. Ejecutar aplicación
```
yarn start:dev
```

## Stack usado
* MongoDB
* Nest js