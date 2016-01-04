var app = angular.module("app", []);

app.controller("MainController", function(){
  var vm = this;
  vm.title = "TV Shows Directory";
  vm.searchInput = "";
  vm.new = {};

  vm.addShow = function(){
    vm.shows.push(vm.new);
    vm.new = {};
  };

  vm.toggle = function(show){
    show.favorite = !show.favorite;
    console.log(show.favorite);
  }

  vm.shows = [
        {
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];

    vm.orders = [
      {
       title: 'Year Ascending',
       key: 'year',
       reverse: false
     },
     {
         title: 'Year Descending',
         key: 'year',
         reverse: true
     },
     {
         title: 'Title Ascending',
         key: 'title',
         reverse: false
     },
     {
         title: 'Title Descending',
         key: 'title',
         reverse: true
     }
   ];
   vm.order = vm.orders[0];
});
