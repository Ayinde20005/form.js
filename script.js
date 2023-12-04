const displayScreen = document.querySelector(".screen");
const form = document.querySelector(".form-tag");
const fullName = document.querySelector("#fullName");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const dateOfBirth = document.querySelector("#date");
const country = document.querySelector("#country");
const phoneNumber = document.querySelector("#phone");
const password = document.querySelector("#password");
const submitBTN = document.querySelector("#submit");
const tableContainer = document.getElementById("table-container");

// const namePrt = document.querySelector(".nameprt");
// const agePrt = document.querySelector(".ageprt");
// const emailPrt = document.querySelector(".emailprt");
// const genderPrt = document.querySelector(".genderprt");
// const datePrt = document.querySelector(".dateprt");
// const statePrt = document.querySelector(".stateprt");
// const phonePrt = document.querySelector(".phoneprt");

let serialNumber = 1;

const detailsSort = (z) => {
  z.preventDefault();

  if (
    fullName.value === "" ||
    email.value === "" ||
    phoneNumber.value === "" ||
    gender.value === "" ||
    country.value === "" ||
    age.value === "" ||
    dateOfBirth.value === ""
  ) {
    alert("all fields must be filled");
  } else {
    const newTableRow = document.createElement("tr");
    newTableRow.classList.add("bg-danger");
    tableContainer.appendChild(newTableRow);

    const forSerialNumber = document.createElement("td");
    newTableRow.appendChild(forSerialNumber);

    const forName = document.createElement("td");
    forName.classList.add("nameprt");
    newTableRow.appendChild(forName);

    const forEmail = document.createElement("td");
    forEmail.classList.add("emailprt");
    newTableRow.appendChild(forEmail);

    const forPhone = document.createElement("td");
    forPhone.classList.add("phoneprt");
    newTableRow.appendChild(forPhone);

    const forGender = document.createElement("td");
    forGender.classList.add("genderprt");
    newTableRow.appendChild(forGender);

    const forState = document.createElement("td");
    forState.classList.add("stateprt");
    newTableRow.appendChild(forState);

    const forAge = document.createElement("td");
    forAge.classList.add("ageprt");
    newTableRow.appendChild(forAge);

    const forDate = document.createElement("td");
    forDate.classList.add("dateprt");
    newTableRow.appendChild(forDate);

    // namePrt.innerHTML = fullName.value;
    // agePrt.textContent = age.value;
    // emailPrt.innerHTML = email.value;
    // genderPrt.innerHTML = gender.value;
    // datePrt.innerHTML = dateOfBirth.value;
    // statePrt.innerHTML = country.value;
    // phonePrt.innerHTML = phoneNumber.value;

    forSerialNumber.innerHTML = serialNumber++;
    forName.innerHTML = fullName.value;
    forEmail.innerHTML = email.value;
    forPhone.innerHTML = phoneNumber.value;
    forGender.innerHTML = gender.value;
    forState.innerHTML = country.value;
    forAge.innerHTML = age.value;
    forDate.innerHTML = dateOfBirth.value;

    // declear fields empty after submit
    fullName.value = "";
    email.value = "";
    phoneNumber.value = "";
    gender.value = "";
    country.value = "";
    age.value = "";
    dateOfBirth.value = "";
  }
};

// const detailsSort = (z) => {
//   z.preventDefault();
//   const userDetails = {
//     userName: fullName.value,
//     age: age.value,
//     email: email.value,
//     gender: gender.value,
//     date: dateOfBirth.value,
//     state: country.value,
//     phone: phoneNumber.value,
//   };

//   namePrt.innerHTML = userDetails.userName;
//   agePrt.textContent = userDetails.age;
//   emailPrt.innerHTML = userDetails.email;
//   genderPrt.innerHTML = userDetails.gender;
//   datePrt.innerHTML = userDetails.date;
//   statePrt.innerHTML = userDetails.state;
//   phonePrt.innerHTML = userDetails.phone;
//   return userDetails;
//   // saveData();
// };

submitBTN.addEventListener("click", detailsSort);
