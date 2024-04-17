let cat = {
  name: 'Luna',
  age: 3,
  gender: 'female',
  breed: 'bombay',
  getInfo: function() {
    for (let key in cat) {
      if (typeof cat[key] !== 'function') { 
        console.log(`${key}: ${cat[key]}`);
      }
    }
  }
};

cat.getInfo();

cat.origin = 'U.S';
cat.getInfo();