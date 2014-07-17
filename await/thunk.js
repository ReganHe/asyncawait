﻿var oldBuilder = require('../src/awaitBuilder');
var pipeline = require('../src/pipeline');

var builder = oldBuilder.derive(function () {
    return function (co, args) {
        if (args.length !== 1 || typeof args[0] !== 'function')
            return pipeline.notHandled;
        args[0](co.enter);
    };
});
module.exports = builder;
//# sourceMappingURL=thunk.js.map
