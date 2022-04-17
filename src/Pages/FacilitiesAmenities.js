import React from 'react';
import img1 from "../assets/images/faciliaties.jpg"
import img2 from "../assets/images/faciliaties2.jpg"
import img3 from "../assets/images/facilities3.jpg"

const FacilitiesAmenities = () => {
    return (
        <div>
         <div className="text-center py-5">
         <h2 className="text-primary fw-bolder">Facilities & Amenities</h2>
         </div>

         <div className="container">
             <div className="row">
                 <div className="col-lg-4">
                     <img className="img-fluid" src={img1} alt="" />
                      <h5 className="text-info fw-bolder text-center mt-5">
                      Clinical Laboratory
                     </h5>
                     <p className="">
                     We are supported by Pantai Premier Pathology for our clinical laboratory and pathology services. Located within our hospital, the laboratory is managed by an experienced team of pathologists, laboratory manager, scientists and medical technologists, and we also operate outpatient clinics in the fields of biochemistry, haematology, immunology, microbiology and histopathology. Our pathologists and technologists work closely with our clinicians to provide accurate and prompt results.
                     </p>

                 </div>
                 <div className="col-lg-4">
                     <img className="img-fluid" src={img2} alt="" />
                      <h5 className="text-info fw-bolder text-center mt-5">
                      Health Screening Packages
                     </h5>
                     <p className="">
                     Our health screening packages are tailor made based on your age, medical history, risk factors, family history and health concerns for the best result possible. As our patient, you'll be assured that you are in good hands with personal, attentive care. Our professional medical team is dedicated in helping you to understand your body and health throughout the process. You will receive a detailed report of your health screening results within 3 - 4 working days. 
                     </p>
                 </div>
                 <div className="col-lg-4">
                     <img className="img-fluid" src={img3} alt="" />
                     <h5 className="text-info fw-bolder text-center mt-5">
                     Rooms and Services
                     </h5>
                     <p className="">
                     Pantai Hospital Kuala Lumpur offers a selection of rooms and services with high quality, personalised care. Every effort will be made to provide patients with their desired room type. However, due to the uncertainty of discharges and emergency admissions, your requested room type may sometimes be unavailable. In this case, we will arrange for a room transfer as soon as your requested room type is available.
                     </p>
                 </div>
             </div>
         </div>
         <div className="container">
         <div className="text-center py-5 mb-5">
         <h2 className="text-primary fw-bolder"> Other Facilities </h2>
         </div>
             <div className="row">
                 <div className="col">
                    <h5 className="fw-bolder text-info">1. Emergency Department</h5>
                    <p className="">
                    In March 2015 the Region’s first Private Emergency Department was opened at , providing another option for people requiring emergency care. The Emergency Department has 6 beds including a state of the art resuscitation room, triage room and procedure room. The enthusiastic team of emergency trained doctors and nurses provide prompt and professional care 24 hours a day, 365 days of the year.
                    </p>
                 </div>
             </div>
             <div className="row">
                 <div className="col">
                    <h5 className="fw-bolder text-info">2. Coronary Care Unit</h5>
                    <p className="">
                    10 monitored beds with 24 hour medical cover – specialising in chest pain management, the before and after care related to interventional and diagnostic cardiac procedures.
                    </p>
                 </div>
             </div>
             <div className="row">
                 <div className="col">
                    <h5 className="fw-bolder text-info">3. Intensive Care Unit</h5>
                    <p className="">
                    12 beds with haemodynamic monitoring. Staffed by Intensivists, experienced ICU trained nursing staff and 24 hour dedicated medical cover.  The ICU specialises in post operative care for cardiothoracic and other advanced surgical procedures.
                    </p>
                 </div>
             </div>
             <div className="row">
                 <div className="col">
                    <h5 className="fw-bolder text-info">4. Coronary Angiography Suite</h5>
                    <p className="">
                    Comprises two Cardiac Catheterisation Laboratories providing the latest equipment for both diagnostic and interventional procedures including Coronary Angioplasty, stenting and Electrophysiology Studies.
                    </p>
                 </div>
             </div>
             <div className="row">
                 <div className="col">
                    <h5 className="fw-bolder text-info">5. GP - Pre Admission Medical Clinic</h5>
                    <p className="">
                    The aim of the PAMC is to improve our pre-admission process and obtain a more comprehensive medical history for patients admitted to Lake Macquarie Private Hospital. Patient’s current medications are fully documented and their medical history forms part of the Hospital’s medical record for that admission.
                    </p>
                 </div>
             </div>
         </div>

        </div>
    );
};

export default FacilitiesAmenities;