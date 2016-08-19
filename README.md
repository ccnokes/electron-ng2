# electron-ng2
Demo app running ng2 in electron in the simplest way possible.

Running Angular2 in Electron is different than the web. We don't need a module loader/bundler because node.js handles module loading for us and because we'll compile our Electron app using `asar`, there won't be any overhead of all the `require`s because it'll already be concatenated into a flat file. All we need to do is compile TypeScript. 
