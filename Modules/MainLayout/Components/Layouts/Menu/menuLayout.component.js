mainLayoutApp.component("menuLayout", {
    templateUrl: "Modules/MainLayout/Components/Layouts/Menu/menuLayout.component.html",
    controller: function($scope) {
        $scope.goSection=function(type) {
         
            $(".navbar-nav li").removeClass("active");
            $('.' + type).addClass('active');
                $('html, body').animate({
                    scrollTop: $('#' + type).offset().top 
                }, 'slow');
        }

        $('body').click(function () { 
            $(".navbar-collapse").removeClass("in");    
        });
    }
});