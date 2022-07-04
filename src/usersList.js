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
        return streets;
    }

    filterByFirstName(name) {
        let filteredList = this.#usersList.filter(user => user.firstName == name);
        return filteredList;
    }
    filterByLastName(name) {
        let filteredList = this.#usersList.filter(user => user.lastName == name);
        return filteredList;
    }
    search() {
        this.filterByFirstName(document.getElementById('inputFirstName').value);
        this.filterByLastName(document.getElementById('inputLastName').value);
        this.streets();
    }
}
