function PeopleController($scope){
    $scope.people=[
        {name:"john Doe", phone: 80195778968, city: "New york"},
        {name:"shaik imran", phone: 8019577065, city: "california"},
        {name:"imran khan", phone:9885758689, city: "las vegas" },
        {name:"Sarah Parker", phone: "1236548769", city:"Chicago"} 
    ];
    $scope.ShowForm = function(){
    $scope.formVisibility=true;
    
    }
    $scope.save = function(){
        $scope.people.push({
            name: $scope.newPerson.name,
            phone:$scope.newPerson.phone,
            city:$scope.newPerson.city
        });
        $scope.formVisibility = true;
    }
}

