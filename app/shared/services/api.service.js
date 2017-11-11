/**
 * Created by cl-macmini-34 on 03/04/17.
 */
(function () {


    App.factory('ApiService',ApiService);

    function ApiService($http, $q, SessionStorage,MY_CONSTANT,responseCode){
        var serviceObj = {};
        serviceObj.apiCall = ApiCall;

        function ApiCall(url,method,serviceType,data){
            var httpObj = {
                method:method,
                url:MY_CONSTANT.url + url,
                headers:{
                    'Content-Type':"application/x-www-form-urlencoded"
                },
                transformRequest: angular.identity
            };
            switch (serviceType){
                case 0: // no authorization and no  data in api
                    break;
                case 1: // no authorization and  data in api
                    httpObj.data = data;
                    break;
                case 2: // authorization and no data in api
                    // httpObj.headers['authorization'] = JSON.parse(localStorage.getItem('obj')).access_token;
                    httpObj.headers['authorization'] = SessionStorage.get('obj').access_token;
                    break;
                case 3: // authorization and  data in api
                    //  httpObj.headers['Authorization'] = JSON.parse(localStorage.getItem('obj')).access_token;
                      httpObj.headers['Authorization'] = SessionStorage.get('obj').access_token;
                    console.log("third case",SessionStorage.get('obj').access_token);                  
                    httpObj.data = data;
                    console.log('auth',httpObj);
                    break;
                default:
                    break;
            }
            var http = $http(httpObj);
            return http;
        }

        return serviceObj;
    }

})();