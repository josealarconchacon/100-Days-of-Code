// Object Literal
let person = {
    name: 'Tom',
    email: 'tomax@gmail.com',
    location: 'Texas',
    age: 99,
    book: ['Why I am living Texas', 'How to be nice'],
    sigin: function() {
        console.log('person sigin');
    },
    signout: function() {
        console.log('person sign out');
    },
    logBooks:function() {
    // access book with this keyword
    console.log('2 book written by this user');
    this.person.forEach(book => {
        console.log(book);
    })
  }
};

person.sigin();
person.signout();

person.logBooks();
console.log(this);






