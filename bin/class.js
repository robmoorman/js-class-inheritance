( function() {
    
    Class.extend = function( clazz ) {
        var parent = this.prototype;
        
        var prototype = clazz;
        prototype.extend = arguments.callee;
        prototype.prototype._super = this;
        
        for( var prop in parent ) {
            if( typeof prototype.prototype[ prop ] == "function" && typeof parent[ prop ] == "function" ) {
                prototype.prototype[ prop ] = ( function( parentMethod, method ) {
                    return function() {
                        var tmp = this._super;
                        
                        this._super = parentMethod;
                        
                        var returnValue = method.apply( this, arguments );
                        
                        this._super = tmp;
                        
                        return returnValue;
                    };
                })( parent[ prop ], prototype.prototype[ prop ] );
            }
            else {
                prototype.prototype[ prop ] = parent[ prop ];
            }
        }
        
        return prototype;
    };
    
    function Class() {};
    
    window.Class = Class;
    
})( window );