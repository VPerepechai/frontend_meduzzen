# Frontend Meduzzen application

## Project setup
```sh
npm install
```

### Compiles and hot-reloads for development
```sh
npm run serve
```

### Compiles and minifies for production
```sh
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Launch the app within Docker

The first thing to do is to clone the repository:
```sh
$ git clone https://github.com/VPerepechai/frontend_meduzzen
$ cd frontend_meduzzen
```

Before running the container, you need to create an image
```sh
$ docker build -t frontendmeduzzen:dev .
```

Build the image and fire up the container::
```sh
$ docker-compose up -d --build
```

And navigate to `http://localhost:8080/`.

To check the operation of containers:
```sh
$ docker-compose logs -f
```
To disable containers:
```sh
$ docker-compose down
```
