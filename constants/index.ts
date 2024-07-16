export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Aadhaar Card",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr.Anil Kumar Singh",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr.Priya Sharma",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr.Rajesh Gupta",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr.Kavita Joshi",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr.Sunila Verma",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr.Pankaj Patel",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr.Sujita Reddy",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr.Meena Chopra",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr.Arvind Mehta",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
