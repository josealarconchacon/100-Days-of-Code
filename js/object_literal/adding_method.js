// Object Literal
let person = {
    name: 'Tom',
    email: 'tomax@gmail.com',
    location: 'Texas',
    age: 99,
    books: [
        {title: 'Why I am living Texas', likes: 100, review: 400},
        {title: 'How to be nice', likes: 1000, review: 230}
    ],
    sigin: function() {
        console.log('person sigin');
    },
    signout: function() {
        console.log('person sign out');
    },
    logBooks:function() {
    // access book with this keyword
    console.log('2 book written by this user');
    this.books.forEach(book => {
        console.log(book.title, book.likes, book.review);
    })
  }
};

person.sigin();
person.signout();

person.logBooks();




