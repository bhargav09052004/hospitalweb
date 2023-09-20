import './hospital.css'
let availabledoctorId = document.getElementById("doctoravailability");
let bookingscheduleId = document.getElementById("bookingschedule");
let rescheduleId = document.getElementById("reschedule");
let homeBodyId = document.getElementById("homeBody");
let doctoravailpageId = document.getElementById("doctoravailpage");
let bookingschedule = document.getElementById("bookingschedulepage");
let requestscheduleEl = document.getElementById("requestschedule");
let viewappointmentlistEl = document.getElementById("viewappointmentlist");
let reschedulepageEl = document.getElementById("reschedulepage");
let patientgatewayEl = document.getElementById("patientgateway");
bookingscheduleId.classList.remove("underliner");
doctoravailpageId.classList.add("display");
bookingschedule.classList.add("display");
reschedulepageEl.classList.add("display");
patientgatewayEl.classList.add("display");

function Home() {
    homeBodyId.classList.remove("display");
    doctoravailpageId.classList.add("display");
    bookingschedule.classList.add("display");
    availabledoctorId.classList.remove("underliner");
    bookingscheduleId.classList.remove("underliner");
    reschedulepageEl.classList.add("display");
    rescheduleId.classList.remove("underliner");
    patientgatewayEl.classList.add("display");
}

function onDoctorAvailability() {
    homeBodyId.classList.add("display");
    doctoravailpageId.classList.remove("display");
    availabledoctorId.classList.add("underliner");
    bookingscheduleId.classList.remove("underliner");
    bookingschedule.classList.add("display");
    reschedulepageEl.classList.add("display");
    rescheduleId.classList.remove("underliner");
    patientgatewayEl.classList.add("display");
}

function onBookingSchedule() {
    homeBodyId.classList.add("display");
    doctoravailpageId.classList.add("display");
    bookingscheduleId.classList.add("underliner");
    availabledoctorId.classList.remove("underliner");
    bookingschedule.classList.remove("display");
    reschedulepageEl.classList.add("display");
    viewappointmentlistEl.classList.add("display");
    rescheduleId.classList.remove("underliner");
    patientgatewayEl.classList.add("display");
}

function onReschedulePage() {
    reschedulepageEl.classList.remove("display");
    homeBodyId.classList.add("display");
    doctoravailpageId.classList.add("display");
    bookingscheduleId.classList.remove("underliner");
    rescheduleId.classList.add("underliner");
    availabledoctorId.classList.remove("underliner");
    bookingschedule.classList.add("display");
    patientgatewayEl.classList.add("display");
}

function viewSchedule() {
    requestscheduleEl.classList.add("display");
    viewappointmentlistEl.classList.remove("display");
}

function onRequest() {
    requestscheduleEl.classList.remove("display");
}

function OnPatientGateWay() {
    homeBodyId.classList.add("display");
    doctoravailpageId.classList.add("display");
    bookingschedule.classList.add("display");
    availabledoctorId.classList.remove("underliner");
    bookingscheduleId.classList.remove("underliner");
    reschedulepageEl.classList.add("display");
    rescheduleId.classList.remove("underliner");

    patientgatewayEl.classList.remove("display");
}

let firstnameEl = document.getElementById("firstname");
let firstnameErrMsgEl = document.getElementById("firstnameErrMsg");
let lastnameEl = document.getElementById("lastname");
let lastnameErrMsgEl = document.getElementById("lastnameErrMsg");
let phonenumberEl = document.getElementById("phonenumber");
let phonenumberErrMsgEl = document.getElementById("phonenumberErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let dobEl = document.getElementById("dob");
let dobErrMsgEl = document.getElementById("dobErrMsg");
let departmentcodeEl = document.getElementById("departmentcode");
let departmentcodeErrMsgEl = document.getElementById("departmentcodeErrMsg");
let myFormEl = document.getElementById("myForm");
let checkBoxEl = document.getElementById("checkbox");

let formData = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    dob: "",
    departmentcode: "",
};

firstnameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        firstnameErrMsgEl.textContent = "Required*";
    } else {
        firstnameErrMsgEl.textContent = "";
    }

    formData.firstname = event.target.value;
});

lastnameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        lastnameErrMsgEl.textContent = "Required*";
    } else {
        lastnameErrMsgEl.textContent = "";
    }

    formData.lastname = event.target.value;
});
phonenumberEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        phonenumberErrMsgEl.textContent = "Required*";
    } else {
        phonenumberErrMsgEl.textContent = "";
    }
    formData.phonenumber = event.target.value;
});
dobEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        dobErrMsgEl.textContent = "Required*";
    } else {
        dobErrMsgEl.textContent = "";
    }
    formData.dob = event.target.value;
});
departmentcodeEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        departmntcodeErrMsgEl.textContent = "Required*";
    } else {
        departmentcodeErrMsgEl.textContent = "";
    }

    formData.departmentcode = event.target.value;
});
emailEl.addEventListener("change", function(event) {
    formData.email = event.target.value;
})

function validateFormData(formData) {
    let {
        firstname,
        lastname,
        phonenumber,
        dob,
        departmentcode
    } = formData;
    if (firstname === "") {
        firstnameErrMsgEl.textContent = "Required*";
    }
    if (lastname === "") {
        lastnameErrMsgEl.textContent = "Required*";
    }
    if (phonenumber === "") {
        phonenumberErrMsgEl.textContent = "Required*";
    }
    if (dob === "") {
        dobErrMsgEl.textContent = "Required*"
    }
    if (departmentcode === "") {
        departmentcodeEl.textContent = "Required*"
    }
}
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
});
console.log(formData)
