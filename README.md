# roomBookingApp
UI programming problem

## 1. Setup
### 1.1 Compatibility
To run this mobile app, we need to have node `8.x.x` installed.
To install and manage multiple versions of node, we can use [nvm](https://github.com/creationix/nvm)

### 1.2 Install

Install [cocoapod](https://guides.cocoapods.org/using/getting-started.html)

Clone the repository and then install all dependencies by running the following command
```
npm install
```
### 1.3 Run
**To run on iOS simulator**

```
cd ios
pod install
cd ../
npm run ios
```
and to run the metro server

```
npm start
```
**To run on Android emulator**
```
npm run android
```

**To run the unit tests**

```
npm test
```

**To clear the server cache**

```
npm start --reset-cache
```
