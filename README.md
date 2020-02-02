This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
Run ```npm i create-react-app -g``` to install

# Pizza project frontend

Frontend for pizza project. You should deploy it after deploying backend.

## Getting Started

clone this repository:

```
$ git clone https://github.com/HuHguZ/pizza-project-frontend.git
```

### Prerequisites

* Node.js

### Installing

```
$ npm install
```

Configure ```.env``` file. File structure:

```
PORT=3000
REACT_APP_SERVER_URL=http://192.168.100.3:5000
```
```REACT_APP_SERVER_URL``` must consider the path to the server from the client.

 ### Deployment
 
 Run dev server:<br>
 ```$ npm start```<br>
 create production build: ```$ npm run build```<br>
 You may serve it with a static server:
```$ npm i -g serve```
```$ serve -s build```


### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

