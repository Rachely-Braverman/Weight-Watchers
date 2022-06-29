class usersList {
    #usersList;

    constructor(users) {
        this.#usersList = users;
    }

    getUsersList() { return this.#usersList; }
    setUsersList(value) { this.#usersList = value; }

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
    search(name) {
        this.filterByFirstName(name);
        this.filterByLastName(document.getElementById("lastName").value);
    }
}
