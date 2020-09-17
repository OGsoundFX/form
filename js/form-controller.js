function FormController () {
    this.onSubmit = () => {
        // console.log(this.data);
        this.submit();
    };
};

angular
    .module('app')
    .controller('FormController', FormController);