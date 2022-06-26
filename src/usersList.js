class usersList {
    #usersList;

    constructor(users) {
        this.#usersList = users;
    }

    get usersList() { return this.#usersList; }
    set usersList(value) { this.#usersList = value; }

    streets() {
        let streets = [];
        this.#usersList.forEach(element => {
            streets.push(element.address.street);
        });
        console.log(streets);
        return streets;
    }

    filterByFirstName(name) {
        var newArr = this.#usersList.filter(u => u.firstName() == name);
        this.#usersList = newArr;
    }
    filterByLastName(name) {
        var newArr = this.#usersList.filter(u => u.lastName() == name);
        return newArr;
    }
    search() {
        filterByFirstName(document.getElementById("firstName").value);
        filterByLastName(document.getElementById("lastName").value);
    }
}
