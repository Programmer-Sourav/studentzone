// const studentsData = [
//             { id: 1, sname: "Sourav", dob: "1989-09-19", registrationNo: "s123", url: "https://www.travelsawari.com/brochures/00900dfde7d6d955.pdf" },
//             { id: 2, sname: "Suman", dob: "1989-06-14", registrationNo: "s222", url: "https://www.travelsawari.com/brochures/00900dfde7d6d955.pdf" },
//             { id: 3, sname: "Ari", dob: "1986-09-09", registrationNo: "s333", url: "https://www.travelsawari.com/brochures/00900dfde7d6d955.pdf" }
//         ];


  async function getStudentsMarksheetAndCertificates(regNo, dob) {
  try {
    const response = await fetch("https://www.travelsawari.com/index_course.php/get_students_certificates", {
      method: "POST",
      body: JSON.stringify({ studentRoll: regNo, dob: dob })
    });

    const data = await response.json();
    console.log("5555", data.response.data[0]);
    return data.response.data[0];
  } catch (error) {
    console.error("Error", error);
    return null;
  }
}

       window.searchStudentsResult = async function searchStudentsResult() {
            const dobInput = document.getElementById("dob").value;
            const regNoInput = document.getElementById("regNo").value.trim();

           const result = await getStudentsMarksheetAndCertificates(regNoInput, dobInput)
           console.log(5555, result)
            // const result = studentsData.find(
            //     student => student.dob === dobInput && student.registrationNo === regNoInput
            // );

            const resultDiv = document.getElementById("result");
            if (result) {
                resultDiv.innerHTML = `<p style="height: 40px; border: 1px solid grey; border-radius: 8px; width: 512px; margin: 16px; padding: 8px; text-align: center;
                 display: flex; justify-content: center; align-items: center;">
                         Result Found: Name - ${result.studentName}, Registration No - ${result.studentRollNo}</p>
                         
                         
        <iframe src="http://docs.google.com/gview?url=${result.certificateUrl}&embedded=true" 
        style="width:600px; height:500px; margin: 16px;" frameborder="0"></iframe>

          <iframe src="http://docs.google.com/gview?url=${result.marksheetUrl}&embedded=true" 
        style="width:600px; height:500px; margin: 16px;" frameborder="0"></iframe>
                         
                         `;
                
        
                       
            } else {
                resultDiv.innerHTML = `<p style="color:red;">No student found with the given details.</p>`;
            }
        }