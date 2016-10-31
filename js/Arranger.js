//Arranger
(function (window){
    
    'use strict';
    
    function define_main(){
        var Arranger = {};
        
        Arranger.load = function(data){
            this.data = data;
            this.mapData();
            //console.log(this.data);
        }
        
        Arranger.getKeys = function(){
            
            if(!Array.isArray(this.keys)){
                //console.log("No keys yet");
                this.mapData();
                //return this.keys;
            }else {
                //console.log(this.keys);
                return this.keys;
            }
        }
        
        Arranger.buildIndex = function(){
            
        }
        Arranger.mapData = function(){
            var d = this.data;
            
            if(Array.isArray(d)){
                this.keys = [];
                for(var p in d[0]){
                    this.keys.push(p);   
                }
                
            }else{
                console.los("Is not Array");
            }
            
        }
        Arranger.view = function(){
            console.log(this.data);
        }
        
        
        //Return the object
        return Arranger;
    }
    
    if(typeof(Arranger) === 'undefined'){
        window.Arranger = define_main();        
    }else {
        console.log("Arranger exists");
    }
    
})(window);