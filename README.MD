# Prerequisites
- needs docker to be installed
- set up application urls at urls/urls

# Run all tests
```
npx wdio
```

# Peek at how tests are running at the docker container
1. Install some VNC client, like [this one](https://www.realvnc.com/en/connect/download/viewer/)
3. run manually docker image - 
```
docker run -d -p 4444:4444 -p 5900:5900 -v /dev/shm:/dev/shm selenium/standalone-chrome-debug
```
2. Connect with VNC to localhost:5900 with "secret" as password
[see](https://github.com/stsvilik/wdio-docker-service/wiki/Selenium-Docker:-Viewing-tests-as-they-run)

