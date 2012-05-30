( function() {
    
    BaseClass.STATIC_MEMBER = "value";
    
    var privateMember;
    
    var privateMethod = function() {
        return "value";
    };
    
    function BaseClass() {
        
    };
    
    window.BaseClass = Class.extend( BaseClass );
    
    BaseClass.prototype.publicMember = "value";
    
    BaseClass.prototype.publicMethod = function() {
        return this.publicMember;
    };
    
    BaseClass.prototype.setPublicMember = function( value ) {
        this.publicMember = value;
    };
    
})( window );

( function() {
    
    function SubClass() {};
    
    window.SubClass = BaseClass.extend( SubClass );
    
})( window );

( function() {
    
    module( "Class" );
    
    test( "subClassIsInstanceOfBaseClass", 2, function() {
        var subClass = new SubClass();
        
        ok( subClass instanceof BaseClass, "SubClass is instanceof BaseClass" );
        ok( subClass instanceof Class, "SubClass is instanceof Class" );
    });
    
    test( "publicMembersAreCopied", 1, function() {
        var subClass = new SubClass();
        
        equal( "value", subClass.publicMember, "public member is copied" );
    });
    
    test( "publicMethodsAreCopied", 2, function() {
        var subClass = new SubClass();
        
        equal( "function", typeof subClass.publicMethod, "public method is copied" );
        equal( "value", subClass.publicMethod(), "public method implementation is copied" );
    });
    
    test( "privateMembersAreNotCopied", 1, function() {
        var subClass = new SubClass();
        
        ok( !subClass.privateMember, "private member is not copied" );
    });
    
    test( "privateMethodsAreNotCopied", 1, function() {
        var subClass = new SubClass();
        
        ok( !subClass.privateMethod, "private method is not copied" );
    });
    
    test( "staticMembersAreNotCopied", 2, function() {
        ok( BaseClass.STATIC_MEMBER, "static member exists on BaseClass" );
        ok( !SubClass.STATIC_MEMBER, "static member is not copied" );
    });
    
    test( "propertiesAreNotOverriddenAtMultipleInstantiation", 3, function() {
        var instanceOne = new SubClass();
        instanceOne.setPublicMember( "one" );
        
        var instanceTwo = new SubClass();
        instanceTwo.setPublicMember( "two" );
        
        var instanceThree = new SubClass();
        instanceThree.setPublicMember( "three" );
        
        equal( "one", instanceOne.publicMember, "property is not overridden" );
        equal( "two", instanceTwo.publicMember, "property is not overridden" );
        equal( "three", instanceThree.publicMember, "property is not overridden" );
    });
    
})( window );