 function onBtnClick (e){
            e.preventDefault();
            console.log("Btn Click")
        const inputValue = document.getElementById("username").value;
        const selected = document.getElementById("country").value;
        const checkedValues = document.getElementById("terms").checked;
            console.log(inputValue)
            console.log(selected)
            console.log(checkedValues)
        }
        