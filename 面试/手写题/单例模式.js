var getSingleInstance = (
    function(){
        var instance = null;
        function SIngle(){
            this.name = 'Single';
        }
        return function(){
            if(!instance){
                instance = new SIngle();
            }
            return instance; 
        }

    }
    
)()