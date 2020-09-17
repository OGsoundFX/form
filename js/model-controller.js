function ModelController () {
    this.track = {
        'title': '',
        'band': '',
        'genre': '' 
    };
};

angular
    .modlule('app')
    .controller('ModelController', ModelController)