const url = new URL(window.location.href);
let userId = url.searchParams.get("id");

const onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/users/${userId}`);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let table = "";
            user = JSON.parse(xhr.responseText);
            dairy = user.mealsDairy;
            if (dairy.length === 0) {
                alert("oops... dairy is null!!!");
                window.location.href = `dairy.html?userId=${userId}`;
            }
            dairy.forEach((element) => {
                table += `
                    <th>${"Date: " + element.date}</th>
                     
                    <tr>
                     <th scope="row">${"Breakfast: "}</th>
                     <th scope="row">${"Lunch: "}</th>
                     <th scope="row">${"Dinner: "}</th>
                    </tr>
                     
                    <tr>
                     <th>${element.Breakfast[0]},</th> 
                     <th>${element.Lunch[0]},</th> 
                     <th>${element.Dinner[0]},</th>  
                    </tr>
                    
                    <tr>
                     <th>${element.Breakfast[1]},</th> 
                     <th>${element.Lunch[1]},</th> 
                     <th>${element.Dinner[1]},</th>  
                    </tr>

                   <tr>
                     <th>${element.Breakfast[2]},</th> 
                     <th>${element.Lunch[2]},</th> 
                     <th>${element.Dinner[2]},</th>  
                    </tr>
                     
                    <tr>
                     <th>${element.Breakfast[3]},</th> 
                     <th>${element.Lunch[3]},</th> 
                     <th>${element.Dinner[3]},</th>  
                    </tr>
                    `;
            });
            const container = document.getElementById("table");
            container.innerHTML += table;
        }
    };
};

newDay = () => {
    window.location.href = `dairy.html?userId=${userId}`;
};
