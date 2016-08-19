# electron-ng2
Demo app running ng2 in electron in the simplest way possible.

Running Angular2 in Electron is different than the web. We don't need a module loader/bundler because node.js handles module loading for us, and because we'll compile our Electron app using `asar`, there won't be any overhead of all the `require`s because it'll already be concatenated into a flat file. All we need to do is compile TypeScript. 

Angular2 sample app from: https://coryrylan.com/blog/introduction-to-angular-2-routing (a great tutorial to ng2 routing)

Basically we compile the TS and copy all other assets in `src` folder to an ignored `app` folder. This way we can maintain the 2 package.json layout required by `electron-builder` and other Electron tools. The package.json in the root dir is not distributed, and the one in `app` is.
