let person = {
    name: "Kamal",
    age: 9,
    isAdult: function() {
        if (this.age > 10) {
            console.log("You are an adult man");
        } else {
            console.log("You are a child");
        }
    }
};
person.age = 60;
person.isAdult();