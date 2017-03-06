
let phoneBookData = [
  {name: "Superman", phonenumber: "212-123-1111", affiliation: "dc", image_url: "http://bit.ly/2mXWRkX"},
  {name: "Wonder Woman", phonenumber: "212-222-2222", affiliation: "dc", image_url: "http://bit.ly/2lUkp9j"},
  {name: "Cyborg", phonenumber: "212-333-3333", affiliation: "dc", image_url: "http://bit.ly/2mO696j"},
  {name: "Batman", phonenumber: "212-444-4444", affiliation: "dc", image_url: "http://bit.ly/2lP8AAN"},
  {name: "Iron Man", phonenumber: "212-555-5555", affiliation: "marvel", image_url: "http://bit.ly/2mf5cCs"},
  {name: "Hulk", phonenumber: "212-666-6666", affiliation: "marvel", image_url: "http://bit.ly/2mui4Fh"},
  {name: "Thor", phonenumber: "212-777-7777", affiliation: "marvel", image_url: "http://bit.ly/2lwOgsh"},
  {name: "Ultron", phonenumber: "212-888-8888", affiliation: "marvel", image_url: "http://bit.ly/2lx1TYH"},
  {name: "Beast", phonenumber: "212-999-9999", affiliation: "marvel", image_url: "http://bit.ly/2mY7rbS"},
]


angular
  .module("PhoneBookApp", [])
  .controller("PhoneBookCtrl", [PhoneBookController])

  function PhoneBookController() {
    this.phoneBookNumbers = phoneBookData;

    this.NewHero = function() {
      let hero = {name: this.newphoneBookNumbers.name, phonenumber: this.newphoneBookNumbers.phonenumber, affiliation: this.newphoneBookNumbers.affiliation, image_url: this.newphoneBookNumbers.image_url}

      this.phoneBookNumbers.push(hero)

      console.log("New Hero Added");
    }
  }
