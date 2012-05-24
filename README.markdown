# JS Class inheritance

## Requirements

* [class.js](https://github.com/moorinteractive/js-class-inheritance/blob/master/bin/class.js)

## Best practice of defining a Class

See the code example below how to define a Javascript Class with private, public and static members (according this [video](http://http://gotoandlearn.com/play.php?id=159)).
This format is used while using the [class.js](https://github.com/moorinteractive/js-class-inheritance/blob/master/bin/class.js) to make classic Class inheritance possible for your Javascript projects.

<pre>
// self executing function, so this Class has it's own scope
( function() {
    
    // public member
    MyClass.prototype.publicMember = "value";
    
    // public static member
    MyClass.STATIC_MEMBER = "value";
    
    // private member
    var _privateMember;
    
    // constructor
    function MyClass( value ) {
        _privateMember = value;
        
        // public getter
        this.getPrivateMember = function() {
            return _privateMember;
        };
        
        // public setter
        this.setPrivateMember = function( value ) {
            _privateMember = value;
        };
    };
    
    // public method
    MyClass.prototype.publicMethod = function() {
        privateMethod( this );
    };
    
    // private method
    function privateMethod( context ) {
        console.log( context.publicMethod );
    };
    
    // expose this Class for public usage
    window.MyClass = Class.extend( MyClass );
    
})( window );
</pre>