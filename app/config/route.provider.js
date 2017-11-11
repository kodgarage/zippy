/**
 * Created by cl-macmini-34 on 24/05/17.
 */
(function () {
    App.provider('RouteHelpers', ['APP_REQUIRES', function (appRequires) {

        this.resolveFor = function () {
            var _args = arguments;
            return {
                deps: ['$ocLazyLoad', '$q', function ($ocLL, $q) {
                    var promise = $q.when(1); // empty promise
                    for (var i = 0, len = _args.length; i < len; i++) {
                        promise = andThen(_args[i]);
                    }
                    return promise;
                    function andThen(_arg) {
                        if (typeof _arg == 'function')
                            return promise.then(_arg);
                        else
                            return promise.then(function () {
                                var whatToLoad = getRequired(_arg);
                                if (!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                                return $ocLL.load(whatToLoad);
                            });
                    }
                    function getRequired(name) {
                        if (appRequires.modules)
                            for (var m in appRequires.modules)
                                if (appRequires.modules[m].name && appRequires.modules[m].name === name)
                                    return appRequires.modules[m];
                        return appRequires.scripts && appRequires.scripts[name];
                    }

                }]
            };
        };
        this.$get = function () {
        };

    }]);

    App.config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

    }])

})();