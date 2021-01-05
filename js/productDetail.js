function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}
var app= angular.module("contentApp", [])
app.controller('detailProduct', function ($scope, $http) {
$http({
    method:"GET",
    url:"/json/product.json"
}) .then(function mySucces(respone){
    $scope.products=respone.data
    $scope.idproduct=unescape(getUrlVars()["id"])
    $scope.photos=function(item){
        return item.photos
    }    
})
})
app.filter('filterProduct',function(){
    return function(input,id){
        var output=[]
        angular.forEach(input,function(item){
            if(item.id==id){
                output.push(item)
            }
        })
        return output
    }
})
app.filter('filterCategory',function(){
    return function(input,category){
        var output=[]
        angular.forEach(input,function(item){
            if(item.category==category){
                output.push(item)
            }
        })
        return output
    }
})
