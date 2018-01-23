const app = angular.module("Exercise", []);
app.controller("GameController", ['$scope', ($scope) => {
    //2^x=answer
    var Num2t8a = Math.floor(Math.random() * 7) + 2

    Num2t8t2a = () => number = Math.pow(2, Num2t8a);

    $scope.Num2t8a = Num2t8a;
    $scope.Num2t8t2a = Num2t8t2a();

    $scope.answer = 'x';
    $scope.showAnswer = () => {
        $scope.answer = $scope.Num2t8a;
    };

    //20^2-6^2 
    var Num6t20 = Math.floor(Math.random() * 15) + 6

    Num6t20t2 = () => number = Math.pow(Num6t20, 2);

    $scope.Num6t20 = Num6t20;
    $scope.Num6t20t2 = Num6t20t2();

    $scope.answer1 = 'x';
    $scope.showAnswer1 = () => {
        $scope.answer1 = $scope.Num6t20t2;
    };

    //2^2-2^8
    var Num2t8 = Math.floor(Math.random() * 7) + 2

    var twotNum2t8 = () => number = Math.pow(2, Num2t8);

    $scope.Num2t8 = Num2t8;
    $scope.twotNum2t8 = twotNum2t8();
    $scope.answer2 = 'x';
    $scope.showAnswer2 = () => {
        $scope.answer2 = $scope.twotNum2t8;
    };

    //3^2-3^4
    var Num2t4 = Math.floor(Math.random() * 3) + 2

    var threetNum2t4 = () => number = Math.pow(3, Num2t4);

    $scope.Num2t4 = Num2t4;
    $scope.threetNum2t4 = threetNum2t4();
    $scope.answer3 = 'x';
    $scope.showAnswer3 = () => {
        $scope.answer3 = $scope.threetNum2t4;
    };

    //4^2-4^4
    var Num2t4b = Math.floor(Math.random() * 3) + 2

    fourtNum2t4 = () => number = Math.pow(4, Num2t4b);

    $scope.Num2t4b = Num2t4b;
    $scope.fourtNum2t4 = fourtNum2t4();
    $scope.answer4 = 'x';
    $scope.showAnswer4 = () => {
        $scope.answer4 = $scope.fourtNum2t4;
    };

    //5^2-5^4
    var Num2t4c = Math.floor(Math.random() * 3) + 2

    var fivetNum2t4 = () => number = Math.pow(5, Num2t4c);

    $scope.Num2t4c = Num2t4c;
    $scope.fivetNum2t4 = fivetNum2t4();
    $scope.answer5 = 'x';
    $scope.showAnswer5 = () => {
        $scope.answer5 = $scope.fivetNum2t4;
    };

    //2!-6!
    var Num2t6 = Math.floor(Math.random() * 5) + 2

    function factorialize(num) {
        if (num === 0) { return 1; }
        return num * factorialize(num - 1);
    }

    factorialize(Num2t6);
    $scope.factorialize = factorialize(Num2t6);
    $scope.Num2t6 = Num2t6;
    $scope.answer6 = 'x';
    $scope.showAnswer6 = () => {
        $scope.answer6 = $scope.factorialize;
    };
}]);