import React from 'react';
import Doctor from '../../Pages/Doctor';


const doctors = [

    {
        "key": 1,
        "img": "https://wedev0.netlify.app/img-10/img%20(9).jpg",
        "name": "Kurian Abraham",
        "desc": "Pathology-Anatomic/Pathology-Clinical, Cytopathology, Pathology ",
        "ClinicalArea":"Pathology Services" ,
        "rating": 5,
        "ratingCount": "320"
      },
  
  
      {
        "key": 2,
        "img": "https://wedev0.netlify.app/img-10/img%20(10).jpg",
        "name": "Dr Tai Lai Yong",
        "desc": "Gastroenterology is the branch of medicine focused on the digestive system and its disorders.  ",
        "ClinicalArea":"Gastroenterology Services" ,
        "rating": 5,
        "ratingCount": "320"
      }
      ,
  
      {
        "key": 3,
        "img": "https://wedev0.netlify.app/img-10/img%20(1).jpg",
        "name": "Veera Ramani",
        "desc": "Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles.  ",
        "ClinicalArea":"Neurology Services" ,
        "rating": 5,
        "ratingCount": "320"
      },
  
      {
        "key": 4,
        "img": "https://wedev0.netlify.app/img-10/img%20(4).jpg",
        "name": "Richard Abrams",
        "desc": "Pathology-Anatomic/Pathology-Clinical, Cytopathology, Pathology ",
        "ClinicalArea":" Hospital Medicine; Primary Care" ,
        "rating": 5,
        "ratingCount": "320"
      },
  
  
      {
        "key": 5,
        "img": "https://wedev0.netlify.app/img-10/img%20(3).jpg",
        "name": "Sol Abreu-Sosa",
        "desc": "The three main types of rehabilitation therapy are occupational, physical and speech ",
        "ClinicalArea":"Physical Rehabilitation Services" ,
        "rating": 5,
        "ratingCount": "320"
      },
  
  
      {
        "key": 6,
        "img": "https://wedev0.netlify.app/img-10/img%20(7).jpg",
        "name": "Nadia Abu-Nijmeh",
        "desc": "he branch of medicine that focuses on helping children, including the conditions or diseases they might have. General Medicine is a specialty that focuses on adult care.",
        "ClinicalArea":"Pediatrics (General Medicine) " ,
        "rating": 5,
        "ratingCount": "320"
      },
  
  
      {
        "key": 7,
        "img": "https://wedev0.netlify.app/img-10/img%20(6).jpg",
        "name": "Dr Sivamalar",
        "desc": "Pathology-Anatomic/Pathology-Clinical, Cytopathology, Pathology ",
        "ClinicalArea":"Pathology Services" ,
        "rating": 5,
        "ratingCount": "320"
      },
  
  
  
      {
        "key": 8,
        "img": "https://wedev0.netlify.app/img-10/img%20(2).jpg",
        "name": "Dr thaaz jin",
        "desc": "Pathology-Anatomic/Pathology-Clinical, Cytopathology, Pathology ",
        "ClinicalArea":"Pathology Services" ,
        "rating": 5,
        "ratingCount": "320"
      }


]

const Doctors = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center pt-5">
                    <h2 className="fw-bolder text-primary">
                        Our Speialist
                    </h2>
                    
            <div className="text-center pt-5">
                <h5>Make An Appointment Now!</h5>
                <p className="fw-bolder">
                Appointment lines are open Monday – Friday: 8.30am – 5.30pm, <br /> Saturday: 8.30am – 12.30pm
                </p>
            </div>
                </div>

                <div className="row">
                    {
                       doctors.map(doctor => <Doctor
                       key ={doctor.key}
                       doctor ={doctor}
                       ></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;