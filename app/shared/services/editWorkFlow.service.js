(function () {


  App.factory('editWorkFlow', EditWorkFlow);

  function EditWorkFlow(SessionStorage) {
    var serviceObj = {};
    serviceObj.get = Get;

    function Get() {
      if (SessionStorage.get('currentApp') && SessionStorage.get('currentApp').editFlag) {
        return true;
      } else {
        return false;
      }
    }
    return serviceObj;
  }

})();
