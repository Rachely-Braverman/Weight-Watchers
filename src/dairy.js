const url = new URL(window.location.href);
let id = url.searchParams.get("id");
console.log(id)

const foodMeals = () => {
    const newDay = {
        date: document.getElementById("date").value,
        Breakfast: [
            document.getElementById("Breakfast1").value,
            document.getElementById("Breakfast2").value,
            document.getElementById("Breakfast3").value,
            document.getElementById("Breakfast4").value,
        ],
        Lunch: [
            document.getElementById("Lunch1").value,
            document.getElementById("Lunch2").value,
            document.getElementById("Lunch3").value,
            document.getElementById("Lunch4").value,
        ],
        Dinner: [
            document.getElementById("Dinner1").value,
            document.getElementById("Dinner2").value,
            document.getElementById("Dinner3").value,
            document.getElementById("Dinner4").value,
        ],
    };
    pushToServer(newDay);
}

dairies = [];

pushToServer = (day) => {
    console.log("pushToServer");
    console.log(day);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/users/${id}`);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let user = JSON.parse(xhr.responseText);
            dairies = user.mealsDairy;
            console.log(dairies);
            dairies.push(day);
            console.log(dairies);
            patch();
        }
    };
};

function patch() {
    fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            mealsDairy: dairies,
        }),
        headers: { "Content-type": `application/json; charset=UTF-8` },
    }).then((response) => {
        if (response.status !== 200 || response.status === undefined) {
            alert(response.message);
        }
    });
}

const myDairy = () => {
    console.log("myDairy");
    console.log(id);
    window.location.href = "dairyDisplay.html?id="+id;
};
