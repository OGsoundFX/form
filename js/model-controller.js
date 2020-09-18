function ModelController () {
    this.catalog = [];
    this.newTrack = {
        'title': '',
        'band': '',
        'genre': '' 
    };
    this.trackSubmit = () => {
        this.catalog.push(this.newTrack);
        console.log(this.catalog)
        this.newTrack = {
            'title': '',
            'band': '',
            'genre': '' 
        };
    };
};

angular
    .module('app')
    .controller('ModelController', ModelController)