const obj = {
    name: 'WFM',

    logName: function () {
        setTimeout(() => {
            console.log('Name: ', this.name);
        }, 2000)
    }
};

obj.logName();