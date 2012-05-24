( function() {
    
    MyClass.prototype.publicMember = "value";
    
    // public static member
    MyClass.STATIC_MEMBER = "value";
    
    var _privateMember;
    
    function MyClass( value ) {
        _privateMember = value;
        
        this.getPrivateMember = function() {
            return _privateMember;
        };
        
        this.setPrivateMember = function( value ) {
            _privateMember = value;
        };
    };
    
    MyClass.prototype.publicMethod = function() {
        privateMethod( this );
    };
    
    function privateMethod( context ) {
        console.log( context.publicMethod );
    };
    
    window.MyClass = Class.extend( MyClass );
    
})( window );