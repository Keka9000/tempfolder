import camelCase from "lodash.camelcase";
const requireModule = require.context("./device", false, /\.vue$/); //extract js files inside modules folder
const modules = {};

requireModule.keys().forEach(fileName => {
    if (fileName === "./index.js") return; //reject the index.js file

    const moduleName = camelCase(fileName.replace(/(\.\/|\.vue)/g, "")); //

    // console.log('Index js LOADER - ', fileName, ' - ', moduleName)

    modules[moduleName] = requireModule(fileName).default;

    });

export default modules
