( function() {
    
    function Class() {};
    
    window.Class = Class;
    
    Class.extend = function( child ) {
        child.prototype = new this;
        child.prototype.constructor = child;
        child.prototype.parent = this.prototype;
        child.extend = arguments.callee;
        
        return child;
    };
    
})( window );