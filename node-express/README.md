# Node-Express

Simple NodeJS, Express Framework RESTful server boilerplate runnig in a Docker container, ready to be connected with both SQL and NoSQL

## TODO
- [x] Docker config
- [x] ESLint config
- [x] Database connections
- [ ] REST CRUD
- [ ] Test

## Run

Navigate to the project folder and build the docker image using the below command
```sh
docker build -t node-express .
```

to start the built docker image and mount the local project folder into the docker image use the below command
```sh
docker run -p 3000:3000 -v /project/folder/location/:/usr/src/app node-express
```

