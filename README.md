# roomBookingApp
UI programming problem

## 1. Setup
### 1.1 Compatibility
To run this mobile app, we need to have node `8.x.x` installed.
To install and manage multiple versions of node, we can use [nvm](https://github.com/creationix/nvm)

### 1.2 Install

Install [cocoapod](https://guides.cocoapods.org/using/getting-started.html)

**Clone the repository and then install all dependencies by running the following command**
  1. Download SourceTree in your machine by [click here](https://www.sourcetreeapp.com/)
  2. Copy Url of the repository from Clone button using HTTPS by making the branch as **master**
  3. Then in UI click New...  --> Clone from URL  -->  paste copied clone URL in **Source URL** & **Destination path** as your choice to locate in machine.
  4. Then Left panel choose under REMOTE  --> origin  -->  master to switch to master branch.
  5. Then move to the directory you cloned and run
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
