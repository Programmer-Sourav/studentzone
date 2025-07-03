const studentsData = [
            { id: 1, sname: "Sourav", dob: "1989-09-19", registrationNo: "s123", url: "https://www.travelsawari.com/brochures/00900dfde7d6d955.pdf" },
            { id: 2, sname: "Suman", dob: "1989-06-14", registrationNo: "s222", url: "https://www.travelsawari.com/brochures/00900dfde7d6d955.pdf" },
            { id: 3, sname: "Ari", dob: "1986-09-09", registrationNo: "s333", url: "https://www.travelsawari.com/brochures/00900dfde7d6d955.pdf" }
        ];

       window.searchStudentsResult = function () {
            const dobInput = document.getElementById("dob").value;
            const regNoInput = document.getElementById("regNo").value.trim();

         

            const result = studentsData.find(
                student => student.dob === dobInput && student.registrationNo === regNoInput
            );

            const resultDiv = document.getElementById("result");
            if (result) {
                resultDiv.innerHTML = `<p style="height: 40px; border: 1px solid grey; border-radius: 8px; width: 512px; margin: 16px; padding: 8px; text-align: center;
                 display: flex; justify-content: center; align-items: center;">
                         Result Found: Name - ${result.sname}, Registration No - ${result.registrationNo}</p>
                         
                         
                         <iframe src="http://docs.google.com/gview?url=${result.url}&embedded=true" 
        style="width:600px; height:500px;" frameborder="0"></iframe>
                         
                         `;
                
        
                       
            } else {
                resultDiv.innerHTML = `<p style="color:red;">No student found with the given details.</p>`;
            }
        }