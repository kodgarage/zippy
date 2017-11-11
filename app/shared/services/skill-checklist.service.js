// var App = angular.module('praosHospitalPanel');

  App.service('skillChecklist', skillChecklist);

  function skillChecklist() {

      var optionArray = [
          {
              value: 'option1'
            }
          , {
              value: 'option2'
            }
          , {
              value: 'option3'
            }
          , {
              value: 'option4'
            }
          ];
      /* skill checklist */
      /* accordion list */
      
      var skilllist_Checkbox = [
          {
              "id": 'skilllist_c1'
              , "value": "1"
              , "label": "Cardiac Monitor Technician (non RNs) Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c2'
              , "value": "2"
              , "label": "Case Management/Utilization Review Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c3'
              , "value": "3"
              , "label": "Cath Lab/Interventional Radiology Nursing Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c4'
              , "value": "4"
              , "label": "Critical Care/ICU Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c5'
              , "value": "5"
              , "label": "Dialysis Nursing Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c6'
              , "value": "6"
              , "label": "Emergency Department Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c7'
              , "value": "7"
              , "label": "Home Health Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c8'
              , "value": "8"
              , "label": "Hospice Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c9'
              , "value": "9"
              , "label": "Informatics Skills Checklist"
              , "checked": false
          }
               , {
              "id": 'skilllist_c10'
              , "value": "10"
              , "label": "Intermediate Care/PCU/Stepdown/Telemetry Skills Checklists"
              , "checked": false
          }
          , {
              "id": 'skilllist_c11'
              , "value": "11"
              , "label": "Labor and Delivery Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c12'
              , "value": "12"
              , "label": "Medical/Surgical Skills Checklist"
              , "checked": false
          }
          , {
              "id": 'skilllist_c13'
              , "value": "13"
              , "label": "NICU Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c14'
              , "value": "14"
              , "label": "Operating Room Nursing Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c15'
              , "value": "15"
              , "label": "PACU Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c16'
              , "value": "16"
              , "label": " Pediatric Emergency Department Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c17'
              , "value": "17"
              , "label": " Pediatric Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c18'
              , "value": "18"
              , "label": "PICU Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c19'
              , "value": "19"
              , "label": "Post-partum/Nursery Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c20'
              , "value": "20"
              , "label": "Psychiatric Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c21'
              , "value": "21"
              , "label": "Sterile Processing Technologist Skills Checklist"
              , "checked": false
          }, {
              "id": 'skilllist_c22'
              , "value": "22"
              , "label": "Urgent Care/Clinic Skills Checklist"
              , "checked": false
          }
      
      
      
      ];
      
      var skilllist_Checkbox2 = [
          {
              "id": 'skilllist2_c1'
              , "value": "1"
              , "label": "Case Management/Utilization Review Skills Checklist"
              , "checked": false
          }
    ];
    var skilllist_Checkbox3 = [
          {
              "id": 'skilllist3_c1'
              , "value": "1"
              , "label": "PT/PTA Skills Checklist"
              , "checked": false
          }
    ];
      
     
      
      
      
      /* End accordion list */
      // Dialysis Nursing Skills Checklist page N0-5
      var workSetting = {
          questions: [
              {
                  description: 'Acute/Inpatient Dialysis'
                  , name: 'workSetting1'
                  , answer: 'option1'
        }
              , {
                  description: 'Chronic/Outpatient Dialysis'
                  , name: 'workSetting2'
                  , answer: 'option1'
        }
              , {
                  description: 'Dialysis Home Care'
                  , name: 'workSetting3'
                  , answer: 'option1'
        }
              , {
                  description: 'Pediatric Dialysis'
                  , name: 'workSetting4'
                  , answer: 'option1'
        }
              , {
                  description: 'Apheresis'
                  , name: 'workSetting5'
                  , answer: 'option1'
        }
              , {
                  description: 'Plasmapheresis'
                  , name: 'workSetting6'
                  , answer: 'option1'
        }
              , {
                  description: 'Predialysis Nursing Assessment'
                  , name: 'workSetting7'
                  , answer: 'option1'
        }
              , {
                  description: 'Charge Experience'
                  , name: 'workSetting8'
                  , answer: 'option1'
        }
      ]
      };
      var setupInitiateDialsysTreatment = {
          questions: [
              {
                  description: 'Bicarbonate Dialysate'
                  , name: 'setupInitiateDialsysTreatment1'
                  , answer: 'option1'
        }
              , {
                  description: 'Conductivity Testing'
                  , name: 'setupInitiateDialsysTreatment2'
                  , answer: 'option1'
        }
              , {
                  description: 'Priming Dialyzer'
                  , name: 'setupInitiateDialsysTreatment3'
                  , answer: 'option1'
        }
              , {
                  description: 'Prep Vascular Access'
                  , name: 'setupInitiateDialsysTreatment4'
                  , answer: 'option1'
        }
              , {
                  description: 'Fistula Gortex/Bovine Graft'
                  , name: 'setupInitiateDialsysTreatment5'
                  , answer: 'option1'
        }
              , {
                  description: 'Anticoagulation Management'
                  , name: 'setupInitiateDialsysTreatment6'
                  , answer: 'option1'
        }
              , {
                  description: 'Apheresis'
                  , name: 'setupInitiateDialsysTreatment7'
                  , answer: 'option1'
        }
              , {
                  description: 'Plasmapheresis'
                  , name: 'setupInitiateDialsysTreatment8'
                  , answer: 'option1'
        }
              , {
                  description: 'Cannulating Buttonholes'
                  , name: 'setupInitiateDialsysTreatment9'
                  , answer: 'option1'
        }
              , {
                  description: 'Continous Renal Replacement Therapy'
                  , name: 'setupInitiateDialsysTreatment10'
                  , answer: 'option1'
        }
              , {
                  description: 'Peritoneal Dialysis'
                  , name: 'setupInitiateDialsysTreatment11'
                  , answer: 'option1'
        }
      ]
      };
      var AssignementDuringDialsys = {
          questions: [
              {
                  description: 'Vascular Access Function'
                  , answer: 'option1'
        }
              , {
                  description: 'Arterial and Venous Pressures'
                  , answer: 'option1'
        }
              , {
                  description: 'Blood Flow Rate'
                  , answer: 'option1'
        }
              , {
                  description: 'Management of Anticoagulation'
                  , answer: 'option1'
        }
              , {
                  description: 'Conductivity'
                  , answer: 'option1'
        }
              , {
                  description: 'Ultra Filtration Calculation'
                  , answer: 'option1'
        }
              , {
                  description: 'Operation of Myron L. Meter'
                  , answer: 'option1'
        }
              , {
                  description: 'Administration of Blood and Blood Products'
                  , answer: 'option1'
        }
              , {
                  description: 'Administration of Mannitol'
                  , answer: 'option1'
        }
              , {
                  description: 'Sequential Ultrafiltration/PUF'
                  , answer: 'option1'
        }
      ]
      };
      var PatientManagement = {
          questions: [
              {
                  description: 'Fluid Overload'
                  , answer: 'option1'
        }
              , {
                  description: 'Hypertension'
                  , answer: 'option1'
        },{
                  description: 'Hypotension'
                  , answer: 'option1'
        },

              {
                  description: 'Disequilibrium Syndrome'
                  , answer: 'option1'
        }
              , {
                  description: 'Hyperkalemia'
                  , answer: 'option1'
        }
              , {
                  description: 'Seizures'
                  , answer: 'option1'
        }
              , {
                  description: 'Muscle Cramps'
                  , answer: 'option1'
        }
              , {
                  description: 'Clotted Access/Poor Blood Flow Rate from Catheter'
                  , answer: 'option1'
        }
              , {
                  description: 'Pyrogenic Reaction'
                  , answer: 'option1'
        }
              , {
                  description: 'Hemolysis'
                  , answer: 'option1'
        }
              , {
                  description: 'Air Embolus'
                  , answer: 'option1'
        }
              , {
                  description: 'Chest Pain'
                  , answer: 'option1'
        }
              , {
                  description: 'Anemia'
                  , answer: 'option1'
        }
              , {
                  description: 'Neuropathy'
                  , answer: 'option1'
        }
              , {
                  description: 'Pericarditis'
                  , answer: 'option1'
        }
              , {
                  description: 'Filter Blood Leak'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiopulmonary Arrest'
                  , answer: 'option1'
        }
              , {
                  description: 'Anticoagulation Emergencies'
                  , answer: 'option1'
        }
      ]
      };
      var DialysisEquipment = {
          questions: [
              {
                  description: 'Baxter'
                  , answer: 'option1'
        }
              , {
                  description: 'Cobe'
                  , answer: 'option1'
        }
              , {
                  description: 'Fresenius H/K'
                  , answer: 'option1'
        }
              , {
                  description: 'Gambro'
                  , answer: 'option1'
        }
              , {
                  description: 'Phoenix'
                  , answer: 'option1'
        }
              , {
                  description: 'T Machine'
                  , answer: 'option1'
        }
              , {
                  description: 'Other'
                  , answer: 'option1'
        }
      ]
      };
      var ProfessionKnowledgeAndSkills = {
          questions: [
              {
                  description: 'National Patient Safety Goals'
                  , answer: 'option1'
        }
              , {
                  description: 'Patient Isolation/Infection Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Management of Dialysis Equipment Alarms'
                  , answer: 'option1'
        }
              , {
                  description: 'Bedside Blood Glucose Monitoring'
                  , answer: 'option1'
        }
              , {
                  description: 'Computerized Charting'
                  , answer: 'option1'
        }
              , {
                  description: 'Proton Charting Experience'
                  , answer: 'option1'
        }
              , {
                  description: 'AMI Charting Experience'
                  , answer: 'option1'
        }
              , {
                  description: 'Ecube Charting Experience'
                  , answer: 'option1'
        }
      ]
      };
      // End-Dialysis Nursing Skills Checklist-page No-5    
      
      
      // Start-Cardiac Monitor Technician (non RNs) Skills Checklist-page No-1  
      var experiencefollowingsetting = {
          questions: [
              {
                  description: 'Telemetry Unit (located on the unit)'
                  , answer: 'option1'
        }
              , {
                  description: 'Remote Telemetry Office '
                  , answer: 'option1'
        }


      ]
      };
      var patientEquipmentPreparation = {
          questions: [
              {
                  description: 'Skin prep '
                  , answer: 'option1'
        }
              , {
                  description: 'Lead Placement - 3 Lead '
                  , answer: 'option1'
        },
        {
                  description: 'Lead Placement - 5 Lead '
                  , answer: 'option1'
        }
              , {
                  description: 'Set up MCL1 '
                  , answer: 'option1'
        }
              , {
                  description: 'Set up Lead II '
                  , answer: 'option1'
        }
              , {
                  description: 'Set up 12 Lead ECG'
                  , answer: 'option1'
        }
      ]
      };
      var interpretFollowingRhythms = {
          questions: [
              {
                  description: 'Normal Sinus Rhythm'
                  , answer: 'option1'
        }
              , {
                  description: 'Sinus Bradycardia/Sinus Tachycardia '
                  , answer: 'option1'
        }
              , {
                  description: 'Premature Atrial Contractions '
                  , answer: 'option1'
        }
              , {
                  description: 'Atrial Flutter '
                  , answer: 'option1'
        }
              , {
                  description: 'Atrial Fibrillation '
                  , answer: 'option1'
        }
              , {
                  description: 'Junctional Rhythms '
                  , answer: 'option1'
        }
              , {
                  description: 'PVC - Unifocal/Multifocal '
                  , answer: 'option1'
        }
              , {
                  description: 'PVC- Bigeminy/Trigeminy/Coupling '
                  , answer: 'option1'
        }
              , {
                  description: 'Ventricular Tachycardia '
                  , answer: 'option1'
        }
              , {
                  description: 'Ventricular Fibrillation'
                  , answer: 'option1'
        }
              , {
                  description: '1st Degree Heart Block '
                  , answer: 'option1'
        }
              , {
                  description: '2nd Degree Heart Block Type I '
                  , answer: 'option1'
        }
              , {
                  description: '2nd Degree Heart Block Type II '
                  , answer: 'option1'
        }
              , {
                  description: '3rd Degree Heart Block '
                  , answer: 'option1'
        }
              , {
                  description: 'Sinus Arrest '
                  , answer: 'option1'
        }
              , {
                  description: 'Asystole '
                  , answer: 'option1'
        }
              , {
                  description: 'Bundle Branch Block '
                  , answer: 'option1'
        }
              , {
                  description: 'Paced Rhythms - Atrial/Ventricular/AV '
                  , answer: 'option1'
        }
              , {
                  description: 'Pacemaker Misfire'
                  , answer: 'option1'
        }
              , {
                  description: 'Pacemaker- Failure to Capture'
                  , answer: 'option1'
        }
              , {
                  description: 'Measure Cardiac Rate'
                  , answer: 'option1'
        }
              , {
                  description: 'Measure Cardiac Intervals (PR, QRS, ST, etc.)'
                  , answer: 'option1'
        }
      ]
      };
      var monitoringSystemsUsed = {
          questions: [
              {
                  description: 'GE'
                  , answer: 'option1'
        }
              , {
                  description: 'Phillips'
                  , answer: 'option1'
        }
              , {
                  description: 'Spacelabs'
                  , answer: 'option1'
        }
              , {
                  description: 'Other'
                  , answer: 'option1'
        }
      ]
      };
      var miscellaneous = {
          questions: [
              {
                  description: 'Cardiac Arrest Protocol '
                  , answer: 'option1'
        }
              , {
                  description: 'Computerized Charting '
                  , answer: 'option1'
        }
      ]
      };
      /* end page1 */
      
      
      // Case Management/Utilization Review Skills Checklist Page No-2  
      var setting = {
          questions: [
              {
                  description: 'Acute Care'
                  , answer: 'option1'
        }
              , {
                  description: 'Skilled/LTAC'
                  , answer: 'option1'
        }
              , {
                  description: 'MDS Coordinator'
                  , answer: 'option1'
        }
              , {
                  description: 'Home Health'
                  , answer: 'option1'
        }
              , {
                  description: 'Telephonic'
                  , answer: 'option1'
        }
              , {
                  description: 'Workers Compensation'
                  , answer: 'option1'
        }
              , {
                  description: 'Insurance'
                  , answer: 'option1'
        }
              , {
                  description: 'Managed Care '
                  , answer: 'option1'
        }
              , {
                  description: 'Acute Rehab'
                  , answer: 'option1'
        }
      ]
      };
      var cmSoftware = {
          questions: [
              {
                  description: 'Interqual'
                  , name: 'cmSoftware1'
                  , answer: 'option1'
        }
              , {
                  description: 'Milliman'
                  , name: 'cmSoftware2'
                  , answer: 'option1'
        }
              , {
                  description: 'MIDAS'
                  , name: 'cmSoftware3'
                  , answer: 'option1'
        }
              , {
                  description: 'Allscripts UR'
                  , name: 'cmSoftware4'
                  , answer: 'option1'
        }
              , {
                  description: 'Word Processing Software'
                  , name: 'cmSoftware5'
                  , answer: 'option1'
        }
              , {
                  description: 'Other: Specify'
                  , name: 'cmSoftware6'
                  , answer: 'option1'
        }
              , {
                  description: 'Other: Specify'
                  , name: 'cmSoftware7'
                  , answer: 'option1'
        }
    ]
      };
      var regulatory = {
          questions: [
              {
                  description: 'CMS/Medicare'
                  , answer: 'option1'
        }
              , {
                  description: 'HEDIS Measures'
                  , answer: 'option1'
        }
              , {
                  description: 'Core Measures'
                  , answer: 'option1'
        }
              , {
                  description: 'Medicaid/Medical'
                  , answer: 'option1'
        }
              , {
                  description: 'DRG'
                  , answer: 'option1'
        }
              , {
                  description: 'ICD 9 Coding'
                  , answer: 'option1'
        }

              , {
                  description: 'ICD 10 Coding'
                  , answer: 'option1'
        }
              , {
                  description: 'CPT'
                  , answer: 'option1'
        }
    ]
      };
      var processes = {
          questions: [
              {
                  description: 'Benefits Eligibility'
                  , answer: 'option1'
        }
              , {
                  description: 'Pre-Certification Review'
                  , answer: 'option1'
        }
              , {
                  description: 'Review for Admission Criteria'
                  , answer: 'option1'
        }
              , {
                  description: 'Identify Appropriate Level of Care'
                  , answer: 'option1'
        }
              , {
                  description: 'Review Status During Stay'
                  , answer: 'option1'
        }
              , {
                  description: 'Discharge Planning'
                  , answer: 'option1'
        }
              , {
                  description: 'Physician Advisor'
                  , answer: 'option1'
        }

              , {
                  description: 'Clinical Documentation Improvement'
                  , answer: 'option1'
        }
              , {
                  description: 'Needs Assessment/Order DME'
                  , answer: 'option1'
        }

              , {
                  description: 'Needs Assessment/Home Health'
                  , answer: 'option1'
        }

              , {
                  description: 'Needs Assessment/Hospice'
                  , answer: 'option1'
        }

              , {
                  description: 'Needs Assessment/Skilled'
                  , answer: 'option1'
        }

              , {
                  description: 'Third Party Authorization Process'
                  , answer: 'option1'
        }

              , {
                  description: 'Concurrent Review'
                  , answer: 'option1'
        }

              , {
                  description: 'Retrospective Review'
                  , answer: 'option1'
        }
    ]
      };
      var peofessionalKnowledgeskills = {
          questions: [
              {
                  description: 'National Patient Safety Goals'
                  , answer: 'option1'
        }
              , {
                  description: 'Age Specific/Population Based Care'
                  , answer: 'option1'
        }
      ]
      };
      var emr = {
          questions: [
              {
                  description: 'Epic'
                  , answer: 'option1'
        }
              , {
                  description: 'Cerner'
                  , answer: 'option1'
        }
              , {
                  description: 'Eclipsys'
                  , answer: 'option1'
        }
              , {
                  description: 'McKesson'
                  , answer: 'option1'
        }
              , {
                  description: 'Meditech'
                  , answer: 'option1'
        }
              , {
                  description: 'Allscripts'
                  , answer: 'option1'
        }
              , {
                  description: 'Other: Specify'
                  , answer: 'option1'
        }
    ]
      };
      var emrConverion = {
          questions: [
              {
                  description: 'EMR Conversion'
                  , answer: 'option1'
        }
    ]
      };
      /* end page2 */
      
      
      
      // Cath Lab/Interventional Radiology Nursing Skills Checklist Page No-3           
      var cathWorkSetting = {
          questions: [
              {
                  description: 'Procedural Cath Lab'
                  , name: 'cathLabWorkingSetting'
                  , answer: 'option1'
        }
              , {
                  description: 'lnterventional Cath Lab'
                  , name: 'cathLabWorkingSetting2'
                  , answer: 'option1'
        }
              , {
                  description: 'EP Lab '
                  , name: 'cathLabWorkingSetting3'
                  , answer: 'option1'
        }
              , {
                  description: 'Interventional Radiology'
                  , name: 'cathLabWorkingSetting4'
                  , answer: 'option1'
        }
              , {
                  description: 'Pre/Post Procedural Setting'
                  , name: 'cathLabWorkingSetting5'
                  , answer: 'option1'
        }
              , {
                  description: 'Charge Experience'
                  , name: 'cathLabWorkingSetting8'
                  , answer: 'option1'
        }
              , {
                  description: 'Other Setting (List)'
                  , name: 'cathLabWorkingSetting7'
                  , answer: 'option1'
        }
      ]
      };
      var cathEquipment = {
          questions: [
              {
                  description: 'Automatic Implantable Cardiac Defibrillator'
                  , name: 'cathEquipment1'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardioversion'
                  , name: 'cathEquipment2'
                  , answer: 'option1'
        }
              , {
                  description: 'Defibrillation'
                  , name: 'cathEquipment3'
                  , answer: 'option1'
        }
              , {
                  description: 'Intra Aortic Balloon Pump (IABP)'
                  , name: 'cathEquipment4'
                  , answer: 'option1'
        }
              , {
                  description: 'SV02 Recording'
                  , name: 'cathEquipment5'
                  , answer: 'option1'
        }
              , {
                  description: 'Ventilator Management'
                  , name: 'cathEquipment6'
                  , answer: 'option1'
        }
      ]
      };
      var cathprocedures = {
          questions: [
              {
                  description: 'AICD Placement'
                  , answer: 'option1'
        }
              , {
                  description: 'Aortography'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiac Biopsy'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiac Implant Closure Device'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiac Stent Placement'
                  , answer: 'option1'
        }
              ,{
                  description: 'Diagnostic Cardiac Catherization Adult'
                  , answer: 'option1'
        }
              , {
                  description: 'Diagnostic Cardiac Catheterization-Pediatric/Neonatal'
                  , answer: 'option1'
        }
              , {
                  description: 'Directional Coronary Atherectomy'
                  , answer: 'option1'
        }
              , {
                  description: 'IABP Placement/Removal'
                  , answer: 'option1'
        }
              , {
                  description: 'Internal Mammary Angiography'
                  , answer: 'option1'
        }
              , {
                  description: 'Laser Assisted Procedures'
                  , answer: 'option1'
        }
              , {
                  description: 'Percutaneous Transluminal Coronary Angioplasty'
                  , answer: 'option1'
        }
              , {
                  description: 'Pericardiocentesis'
                  , answer: 'option1'
        }
              , {
                  description: 'Permanent Pacemaker Placement'
                  , answer: 'option1'
        }
              , {
                  description: 'Pulmonary Angiography'
                  , answer: 'option1'
        }
              , {
                  description: 'Rotational Coronary Atherectomy'
                  , answer: 'option1'
        }
              , {
                  description: 'Saphenous Vein Graft Angiography'
                  , answer: 'option1'
        }
              , {
                  description: 'Transluminal Extraction Catheter'
                  , answer: 'option1'
        }
              , {
                  description: 'Valvuloplasty'
                  , answer: 'option1'
        }
              , {
                  description: 'Ventricular Assist Device Insertion'
                  , answer: 'option1'
        }
      ]
      };
      var cathElectrophysiology = {
          questions: [
              {
                  description: 'Electrophysiology Evaluation'
                  , answer: 'option1'
        }
              , {
                  description: 'Baseline Measurements'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiac Ablation'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiac Mapping'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardioversion'
                  , answer: 'option1'
        }
              , {
                  description: 'Conduction Study'
                  , answer: 'option1'
        }
              , {
                  description: 'Internal Cardioverter Defibrillator Implant'
                  , answer: 'option1'
        }
              , {
                  description: 'Tilt Table Study'
                  , answer: 'option1'
        }
      ]
      };
      var cathGatrointrstinal = {
          questions: [
              {
                  description: 'Angioplasty'
                  , name: 'cathGatrointrstinal1'
                  , answer: 'option1'
        }
              , {
                  description: 'Chemoembolization'
                  , name: 'cathGatrointrstinal2'
                  , answer: 'option1'
        }
              , {
                  description: 'Cholecystostomy'
                  , name: 'cathGatrointrstinal3'
                  , answer: 'option1'
        }
              , {
                  description: 'Embolization'
                  , name: 'cathGatrointrstinal4'
                  , answer: 'option1'
        }
              , {
                  description: 'ERCP'
                  , name: 'cathGatrointrstinal5'
                  , answer: 'option1'
        }
              , {
                  description: 'Esophageal Stent Placement'
                  , name: 'cathGatrointrstinal6'
                  , answer: 'option1'
        }
              , {
                  description: 'Gastrojejunostomy'
                  , name: 'cathGatrointrstinal7'
                  , answer: 'option1'
        }
              , {
                  description: 'Gastrostomy Tube Placement'
                  , name: 'cathGatrointrstinal8'
                  , answer: 'option1'
        }
              , {
                  description: 'Liver Ablation'
                  , name: 'cathGatrointrstinal9'
                  , answer: 'option1'
        }
              , {
                  description: 'Pericentesis'
                  , name: 'cathGatrointrstinal10'
                  , answer: 'option1'
        }
              , {
                  description: 'Percutaneous Hepatic Angiography'
                  , name: 'cathGatrointrstinal11'
                  , answer: 'option1'
        }
              , {
                  description: 'TIPS'
                  , name: 'cathGatrointrstinal12'
                  , answer: 'option1'
        }
      ]
      };
      var cathGenitourinary = {
          questions: [
              {
                  description: 'Adrenal Angiography'
                  , answer: 'option1'
        }
              , {
                  description: 'Angiography of Female GU System'
                  , answer: 'option1'
        }
              , {
                  description: 'Angiography of Male GU System'
                  , answer: 'option1'
        }
              , {
                  description: 'Cystostomy'
                  , answer: 'option1'
        }
              , {
                  description: 'Embolization'
                  , answer: 'option1'
        }
              , {
                  description: 'Nephrostomy'
                  , answer: 'option1'
        }
              , {
                  description: 'Percutaneous Stone Extraction'
                  , answer: 'option1'
        }
              , {
                  description: 'Renal Angiography'
                  , answer: 'option1'
        }
              , {
                  description: 'Renal Artery Angioplasty'
                  , answer: 'option1'
        }
              , {
                  description: 'Renal Artery Stent Placement'
                  , answer: 'option1'
        }
              , {
                  description: 'Ureteral Stent'
                  , answer: 'option1'
        }

      ]
      };
      var cathNeurologic = {
          questions: [
              {
                  description: 'Cerebral Angiography'
                  , name: 'cathLabNeurologic1'
                  , answer: 'option1'
        }
              , {
                  description: 'Carotid Angiography'
                  , name: 'cathLabNeurologic2'
                  , answer: 'option1'
        }
              , {
                  description: 'Neurologic Angioplasty'
                  , name: 'cathLabNeurologic3'
                  , answer: 'option1'
        }
              , {
                  description: 'Neurologic Thrombolysis'
                  , name: 'cathLabNeurologic4'
                  , answer: 'option1'
        }
              , {
                  description: 'Vertebroplasty'
                  , name: 'cathLabNeurologic5'
                  , answer: 'option1'
        }
      ]
      };
      var cathPeripheral = {
          questions: [
              {
                  description: 'Abdominal Aortograph'
                  , name: 'cathLabPeripheral1'
                  , answer: 'option1'
        }
              , {
                  description: 'Angioplasty'
                  , name: 'cathLabPeripheral2'
                  , answer: 'option1'
        }
              , {
                  description: 'Central Venous Access/Port Placement'
                  , name: 'cathLabPeripheral3'
                  , answer: 'option1'
        }
              , {
                  description: 'Dialysis Graft Creation/Revision'
                  , name: 'cathLabPeripheral4'
                  , answer: 'option1'
        }
              , {
                  description: 'Dialysis Graft lnterventional'
                  , name: 'cathLabPeripheral5'
                  , answer: 'option1'
        }
              , {
                  description: 'Peripheral Vascular Embolization'
                  , name: 'cathLabPeripheral6'
                  , answer: 'option1'
        }
              , {
                  description: 'Stent Graft Placement'
                  , name: 'cathLabPeripheral7'
                  , answer: 'option1'
        }
              , {
                  description: 'SVC/IVC Venograph'
                  , name: 'cathLabPeripheral8'
                  , answer: 'option1'
        }
              , {
                  description: 'Thoracic Aortography'
                  , name: 'cathLabPeripheral9'
                  , answer: 'option1'
        }
              , {
                  description: 'Upper and Lower Extremity Angiography'
                  , name: 'cathLabPeripheral10'
                  , answer: 'option1'
        }
      ]
      };
      var cathknowledgeknowledge = {
          questions: [
              {
                  description: 'Conscious/Procedural Sedation'
                  , answer: 'option1'
        }
              , {
                  description: 'Assist w/Central Line/Venous Line Insertion'
                  , answer: 'option1'
        }
              , {
                  description: 'Venous Sampling'
                  , answer: 'option1'
        }
              , {
                  description: 'Topical Hemostasis (D-Stat, Chito-Seal, Syvek Patch, etc.)'
                  , answer: 'option1'
        }
              , {
                  description: 'Vascular Closure Systems (Perclose, StarClose, etc.)'
                  , answer: 'option1'
        }
              , {
                  description: 'External Compression Devices (C-Clamp, Sandbags,etc.)'
                  , answer: 'option1'
        }
              , {
                  description: 'Physiologic Monitoring/Recording'
                  , answer: 'option1'
        }
              , {
                  description: 'Sheath Removal and Monitoring'
                  , answer: 'option1'
        }
              , {
                  description: 'National Patient Safety Goals/Core Measures'
                  , answer: 'option1'
        }
              , {
                  description: 'Universal Protocol Procedures'
                  , answer: 'option1'
        }
              , {
                  description: 'Isolation Precautions'
                  , answer: 'option1'
        }
              , {
                  description: 'Infection Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Age Specific/Population-Based Care'
                  , answer: 'option1'
        }
              , {
                  description: 'Fall Risk Assessment/Prevention'
                  , answer: 'option1'
        }
      ]
      };
      var cathPulmonary = {
          questions: [
              {
                  description: 'Chest Tube Placement'
                  , name: 'cathPulmonary1'
                  , answer: 'option1'
        }
              , {
                  description: 'Pulmonary Embolization'
                  , name: 'cathPulmonary2'
                  , answer: 'option1'
        }
              , {
                  description: 'Pulmonary Angiography'
                  , name: 'cathPulmonary3'
                  , answer: 'option1'
        }
              , {
                  description: 'Thoracentesis'
                  , name: 'cathPulmonary4'
                  , answer: 'option1'
        }
      ]
      };
      var cathEmr = {
          questions: [
              {
                  description: 'Cerner'
                  , answer: 'option1'
        }
              , {
                  description: 'Eclipsys'
                  , answer: 'option1'
        }
              , {
                  description: 'Epic'
                  , answer: 'option1'
        }
              , {
                  description: 'GE'
                  , answer: 'option1'
        }
              , {
                  description: 'McKesson'
                  , answer: 'option1'
        }
              , {
                  description: 'Meditech'
                  , answer: 'option1'
        }
              , {
                  description: 'Other Computerized System'
                  , answer: 'option1'
        }
              , {
                  description: 'Computerized Physician Order Entry'
                  , answer: 'option1'
        }
              , {
                  description: 'Medication Administration using Bar Coding Technology'
                  , answer: 'option1'
        }
      ]
      };
      var cathNeurologicConversion = {
          questions: [
              {
                  description: 'EMR Conversion'
                  , answer: 'option1'
        }
      ]
      };
      /* end page3*/
      
      
      
      // Critical Care/ICU Skills Checklist Page No-4           
      var cardiac = {
          questions: [
              {
                  description: 'Acute Coronary Syndrome'
                  , answer: 'option1'
        }
              , {
                  description: 'Congestive Heart Failure'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiogenic Shock'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiac Tamponade'
                  , answer: 'option1'
        }
              , {
                  description: 'Heart Sounds'
                  , answer: 'option1'
        }
              , {
                  description: 'Immediate Post-Op Open Heart (directly from OR)'
                  , answer: 'option1'
        }
              , {
                  description: 'Immediate Post-Op Open Heart (NOT directly from OR)'
                  , answer: 'option1'
        }
              , {
                  description: 'Heart Transplant'
                  , answer: 'option1'
        }
              , {
                  description: 'Open Chest Emergency'
                  , answer: 'option1'
        }
              , {
                  description: 'Sheath Removal'
                  , answer: 'option1'
        }
              , {
                  description: 'Pacemaker - Temporary/Permanent'
                  , answer: 'option1'
        }
              , {
                  description: 'Pacemaker - Epicardial'
                  , answer: 'option1'
        }
              , {
                  description: 'Hemodynamic Monitoring'
                  , answer: 'option1'
        }
              , {
                  description: 'SVO2 Monitoring'
                  , answer: 'option1'
        }
              , {
                  description: 'Intra-Aortic Balloon Pump'
                  , answer: 'option1'
        }
              , {
                  description: 'Ventricular Assist Device'
                  , answer: 'option1'
        }
              , {
                  description: 'ECMO'
                  , answer: 'option1'
        }
      ]
      };
      var pulmonary = {
          questions: [
              {
                  description: 'Respiratory Failure'
                  , answer: 'option1'
        }
              , {
                  description: 'ARDS'
                  , answer: 'option1'
        }
              , {
                  description: 'Pneumothorax'
                  , answer: 'option1'
        }
              , {
                  description: 'Pulmonary Embolism'
                  , answer: 'option1'
        }
              , {
                  description: 'Pulmonary Edema'
                  , answer: 'option1'
        }
              , {
                  description: 'Fresh Tracheostomy'
                  , answer: 'option1'
        }
              , {
                  description: 'Chest Trauma'
                  , answer: 'option1'
        }
              , {
                  description: 'Post Thoracic Surgery'
                  , answer: 'option1'
        }
              , {
                  description: 'Lung Transplant'
                  , answer: 'option1'
        }
              , {
                  description: 'Intubation/Extubation'
                  , answer: 'option1'
        }
              , {
                  description: 'Modes of Ventilation (AC/PC/SIMV/CPAP)'
                  , answer: 'option1'
        }
              , {
                  description: 'Nitric Oxide'
                  , answer: 'option1'
        }
              , {
                  description: 'Interpretation of Arterial Blood Gases'
                  , answer: 'option1'
        }
              , {
                  description: 'Chest Tube Placement & Management'
                  , answer: 'option1'
        }
      ]
      };
      var neurologicalPsychiatric = {
          questions: [
              {
                  description: 'Stroke Scale Assessment'
                  , answer: 'option1'
        }
              , {
                  description: 'CVA'
                  , answer: 'option1'
        }
              , {
                  description: 'Brain Injury'
                  , answer: 'option1'
        }
              , {
                  description: 'Post Craniotomy'
                  , answer: 'option1'
        }
              , {
                  description: 'Spinal Cord Injury'
                  , answer: 'option1'
        }
              , {
                  description: 'Seizure Disorders'
                  , answer: 'option1'
        }
              , {
                  description: 'ICP Monitoring'
                  , answer: 'option1'
        }
              , {
                  description: 'Hypothermia Protocol'
                  , answer: 'option1'
        }
              , {
                  description: 'Substance Withdrawal'
                  , answer: 'option1'
        }
              , {
                  description: 'Suicide Precautions'
                  , answer: 'option1'
        }
      ]
      };
      var gastrointestinal = {
          questions: [
              {
                  description: 'GI Bleeding'
                  , answer: 'option1'
        }
              , {
                  description: 'GI Surgery'
                  , answer: 'option1'
        }
              , {
                  description: 'Liver Failure'
                  , answer: 'option1'
        }
              , {
                  description: 'Pancreatitis'
                  , answer: 'option1'
        }
              , {
                  description: 'Liver Transplant'
                  , answer: 'option1'
        }
              , {
                  description: 'Pancreas Transplant'
                  , answer: 'option1'
        }
      ]
      };
      var renalGenitourinary = {
          questions: [
              {
                  description: 'Renal Failure'
                  , answer: 'option1'
        }
              , {
                  description: 'Renal Surgery'
                  , answer: 'option1'
        }
              , {
                  description: 'TURP'
                  , answer: 'option1'
        }
              , {
                  description: 'Renal Transplant'
                  , answer: 'option1'
        }
              , {
                  description: 'Arteriovenous Fistula/Shunt'
                  , answer: 'option1'
        }
              , {
                  description: 'Nephrostomy Tubes'
                  , answer: 'option1'
        }

              , {
                  description: 'Peritoneal Dialysis'
                  , answer: 'option1'
        }

              , {
                  description: 'Continuous Renal Replacement Therapy'
                  , answer: 'option1'
        }
      ]
      };
      var endocrineMetabolic = {
          questions: [
              {
                  description: 'Diabetes - Hypo/Hyperglycemic Crisis'
                  , answer: 'option1'
        }
              , {
                  description: 'Diabetic Ketoacidosis'
                  , answer: 'option1'
        }
              , {
                  description: 'Pituitary Disorders'
                  , answer: 'option1'
        }
              , {
                  description: 'IV Insulin Protocols'
                  , answer: 'option1'
        }
              , {
                  description: 'Indwelling Insulin Pumps'
                  , answer: 'option1'
        }
      ]
      };
      var medications = {
          questions: [
              {
                  description: 'Anti-Arrhythmics'
                  , answer: 'option1'
        }
              , {
                  description: 'Anticoagulants (IV, oral, & injection)'
                  , answer: 'option1'
        }
              , {
                  description: 'Anti-Hypertensives'
                  , answer: 'option1'
        }
              , {
                  description: 'Anti-Psychotics'
                  , answer: 'option1'
        }
              , {
                  description: 'Anti-Seizure Medications'
                  , answer: 'option1'
        }
              , {
                  description: 'Benzodiazepines'
                  , answer: 'option1'
        }
              , {
                  description: 'Continuous IV Paralytics'
                  , answer: 'option1'
        }
              , {
                  description: 'Continuous IV Sedation'
                  , answer: 'option1'
        }
              , {
                  description: 'Procedural Sedation – Administration'
                  , answer: 'option1'
        }
              , {
                  description: 'Diuretics'
                  , answer: 'option1'
        }
              , {
                  description: 'Emergency Medications'
                  , answer: 'option1'
        }
              , {
                  description: 'Inhaled Medications'
                  , answer: 'option1'
        }
              , {
                  description: 'Insulin'
                  , answer: 'option1'
        }
              , {
                  description: 'IV Vasopressors'
                  , answer: 'option1'
        }
              , {
                  description: 'Narcotics/Opioid Analgesics (IV, oral, & injection)'
                  , answer: 'option1'
        }
              , {
                  description: 'Nitrates (Oral & Topical)'
                  , answer: 'option1'
        }
              , {
                  description: 'Non-Opioid Analgesics (IV, Oral, & Injection)'
                  , answer: 'option1'
        }
              , {
                  description: 'Reversal Agents'
                  , answer: 'option1'
        }
              , {
                  description: 'Steroids (IV, Oral, Inhaled)'
                  , answer: 'option1'
        }
              , {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell)'
                  , answer: 'option1'
        }
      ]
      };
      var ivtherapy = {
          questions: [
              {
                  description: 'Starting IVs'
                  , answer: 'option1'
        }
              , {
                  description: 'Central Line Blood Draws'
                  , answer: 'option1'
        }
              , {
                  description: 'Central Line/Implanted Line Care'
                  , answer: 'option1'
        }
              , {
                  description: 'TPN & Lipids'
                  , answer: 'option1'
        }
              , {
                  description: 'Blood Product Administration'
                  , answer: 'option1'
        }
              , {
                  description: 'Administration of Chemotherapy'
                  , answer: 'option1'
        }
      ]
      };
      
      var cardicMoitoring = {
          questions: [
              {
                  description: 'Dysrhythmia Interpretation'
                  , answer: 'option1'
        }
              , {
                  description: 'Dysrhythmia Management'
                  , answer: 'option1'
        }
              , {
                  description: 'Obtain 12 Lead EKG'
                  , answer: 'option1'
        }
              , {
                  description: 'Interpret 12 Lead EKG'
                  , answer: 'option1'
        }
              , {
                  description: 'Management of Cardiac Arrest'
                  , answer: 'option1'
        }
              , {
                  description: 'Shock Management'
                  , answer: 'option1'
        }
              , {
                  description: 'Malignant Hyperthermia'
                  , answer: 'option1'
        }
              , {
                  description: 'Multisystem Organ Failure'
                  , answer: 'option1'
        }
      ]
      };
      
      
      var professionalSkills = {
          questions: [
              {
                  description: 'National Patient Safety Goals/Core Measures'
                  , answer: 'option1'
        }
              , {
                  description: 'Fall Risk Assessment/Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Pressure Ulcer Risk Assessment/Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Restraints/Use of Least Restrictive Device'
                  , answer: 'option1'
        }
              , {
                  description: 'Patient/Family Teaching'
                  , answer: 'option1'
        }
              , {
                  description: 'Age Specific/Population-Based Care'
                  , answer: 'option1'
        }
              , {
                  description: 'Isolation Precautions'
                  , answer: 'option1'
        }
              , {
                  description: 'Infection Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Pain Assessment & Management'
                  , answer: 'option1'
        }
              , {
                  description: 'Charge Experience'
                  , answer: 'option1'
        }
              , {
                  description: 'Interpretation and Communication of Lab Values'
                  , answer: 'option1'
        }
              , {
                  description: 'Specialty Beds'
                  , answer: 'option1'
        }
      ]
      };
      var criticalEmr = {
          questions: [
              {
                  description: 'Epic'
                  , answer: 'option1'
        }
              , {
                  description: 'Cerner'
                  , answer: 'option1'
        }
              , {
                  description: 'Eclipsys'
                  , answer: 'option1'
        }
              , {
                  description: 'McKesson'
                  , answer: 'option1'
        }
              , {
                  description: 'Meditech'
                  , answer: 'option1'
        }
              , {
                  description: 'Other Computerized System'
                  , answer: 'option1'
        }
              , {
                  description: 'Computerized Physician Order Entry'
                  , answer: 'option1'
        }
              , {
                  description: 'Bar Coding for Medication Administration'
                  , answer: 'option1'
        }
      ]
      };
      /* end page4*/
      
      
      ////////////////////////////////////////////////////////////////////////////////////////////////////////
      // ========================Emergency Department Skills Checklist  Page No-6 ==========================//
      
      var emergencyWorkSetting = {
          questions: [
              {
                  description: 'Level I Trauma Center'
                  , name: 'workSetting1'
                  , answer: 'option1'
        }
              , {
                  description: 'Level II Trauma Center'
                  , name: 'workSetting2'
                  , answer: 'option1'
        }
              , {
                  description: 'Non-Trauma Center Emergency Department'
                  , name: 'workSetting3'
                  , answer: 'option1'
        }
              , {
                  description: 'Pediatric Emergency Department'
                  , name: 'workSetting4'
                  , answer: 'option1'
        }
              , {
                  description: 'Emergency Department - Combined Adult/Pediatric'
                  , name: 'workSetting5'
                  , answer: 'option1'
        }
              , {
                  description: 'Critical Care Transport'
                  , name: 'workSetting6'
                  , answer: 'option1'
        }
      ]
      };
      var emergencyCardiac = {
          questions: [
                {
                  description: 'Acute Coronary Syndrome'
                  , answer: 'option1'
        }
              , {
                  description: 'Congestive Heart Failure/Pulmonary Edema'
                  , answer: 'option1'
        }
              , {
                  description: 'Aneurysm'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardioversion'
                  , answer: 'option1'
        }
              , {
                  description: 'Transcutaneous Pacemaker'
                  , answer: 'option1'
        }
              , {
                  description: 'Heart Sounds'
                  , answer: 'option1'
        }
      ]
      };
      var emergencyPulmonary = {
          questions: [
              {
                  description: 'Respiratory Failure'
                  , answer: 'option1'
        }
              , {
                  description: 'COPD/Asthma'
                  , answer: 'option1'
        }
              , {
                  description: 'Aspiration'
                  , answer: 'option1'
        }
              , {
                  description: 'Pneumonia'
                  , answer: 'option1'
        }
              , {
                  description: 'Pneumo/Hemothorax'
                  , answer: 'option1'
        }
              , {
                  description: 'Chest Tube Insertion/Management'
                  , answer: 'option1'
        }
              , {
                  description: 'Pulmonary Embolism'
                  , answer: 'option1'
        }
              , {
                  description: 'Tuberculosis'
                  , answer: 'option1'
        }
              , {
                  description: 'External CPAP/BiPAP'
                  , answer: 'option1'
        }
              , {
                  description: 'Intubation'
                  , answer: 'option1'
        }
              , {
                  description: 'Ventilated Patients'
                  , answer: 'option1'
        }
              , {
                  description: 'ABG Interpretation'
                  , answer: 'option1'
        }


      ]
      };
      
      var emergencyNeurological = {
          questions: [
              {
                  description: 'CVA'
                  , answer: 'option1',
                  name:'emergencyNeurological1'
        }
              , {
                  description: 'Stroke Scale'
                  , answer: 'option1',
                   name:'emergencyNeurological2'
        }
              , {
                  description: 'Brain Injury'
                  , answer: 'option1',
                   name:'emergencyNeurological3'
        }
              , {
                  description: 'Glascow Coma Scale'
                  , answer: 'option1',
                   name:'emergencyNeurological4'
        }
              , {
                  description: 'Spinal Cord Injury'
                  , answer: 'option1',
                   name:'emergencyNeurological5'
        }
              , {
                  description: 'Meningitis'
                  , answer: 'option1',
                   name:'emergencyNeurological6'
        }
              , {
                  description: 'Seizures'
                  , answer: 'option1',
                   name:'emergencyNeurological7'
        }
      ]
      };
      var emergencyorthopedics = {
          questions: [
              {
                  description: 'Fractures/Casting'
                  , answer: 'option1'
        }
              , {
                  description: 'Open/Complex Fractures'
                  , answer: 'option1'
        }
              , {
                  description: 'Apply/Manage Splints'
                  , answer: 'option1'
        }
              , {
                  description: 'Circulation Checks'
                  , answer: 'option1'
        }


      ]
      };
      var emergencyGastrointestinal = {
          questions: [
              {
                  description: 'GI Bleeding'
                  , answer: 'option1'
        }
              , {
                  description: 'Liver Disease'
                  , answer: 'option1'
        }
              , {
                  description: 'GI Obstruction'
                  , answer: 'option1'
        }
              , {
                  description: 'Abdominal Pain/Distress'
                  , answer: 'option1'
        }, {
                  description: 'Gastric Tubes'
                  , answer: 'option1'
        }


      ]
      };
      
      var emergencyRenal = {
          questions: [
              {
                  description: 'Acute Renal Failure'
                  , answer: 'option1'
        }
              , {
                  description: 'Renal Calculi'
                  , answer: 'option1'
        }
              , {
                  description: 'Renal Trauma'
                  , answer: 'option1'
        }
              , {
                  description: 'Testicular Torsion'
                  , answer: 'option1'
        }
      ]
      };
      var emergencyEndocrine = {
          questions: [
              {
                  description: 'Hypoglycemia'
                  , answer: 'option1'
        }
              , {
                  description: 'Hyperglycemia'
                  , answer: 'option1'
        }
              , {
                  description: 'DKA'
                  , answer: 'option1'
        }
      ]
      };
      var emergencyWoundManagement = {
          questions: [
              {
                  description: 'Skin Integrity Assessment'
                  , answer: 'option1'
        }
              , {
                  description: 'Wound Repair'
                  , answer: 'option1'
        }
      ]
      };
      
      var emergencyShock = {
          questions: [
              {
                  description: 'Injury Severity Score'
                  , answer: 'option1'
        }
              , {
                  description: 'Trauma Code'
                  , answer: 'option1'
        }
              , {
                  description: 'Trauma Team Member'
                  , answer: 'option1'
        }
              , {
                  description: 'Major Trauma'
                  , answer: 'option1'
        }
              , {
                  description: 'Traumatic Amputation'
                  , answer: 'option1'
        }
              , {
                  description: 'Peritoneal Lavage'
                  , answer: 'option1'
        }
              , {
                  description: 'Hypovolemic Shock'
                  , answer: 'option1'
        }
              , {
                  description: 'Neurogenic Shock'
                  , answer: 'option1'
        }
              , {
                  description: 'Anaphylactic Shock'
                  , answer: 'option1'
        }
              , {
                  description: 'Septic Shock'
                  , answer: 'option1'
        }
              , {
                  description: 'Cardiogenic Shock'
                  , answer: 'option1'
        }
              , {
                  description: 'Burns - 2nd Degree'
                  , answer: 'option1'
        },

              {
                  description: 'Burns - 3rd Degree'
                  , answer: 'option1'
        }


      ]
      };
      var emergencyInfectious = {
          questions: [
              {
                  description: 'Contagious/Infectious Patients'
                  , answer: 'option1',
                   name:'emergencyInfectious1'
        }
              , {
                  description: 'Isolation'
                  , answer: 'option1',
                   name:'emergencyInfectious2'
        }
              , {
                  description: 'Neutropenia/Reverse Isolation'
                  , answer: 'option1',
                   name:'emergencyInfectious3'
        }
      ]
      };
      var emergencyWomenHealth = {
          questions: [
              {
                  description: 'Placenta Abruptio/Previa'
                  , answer: 'option1'
        }
              , {
                  description: 'Precipitous Delivery'
                  , answer: 'option1'
        }
              , {
                  description: 'Pregnancy Induced Hypertension'
                  , answer: 'option1'
        }
              , {
                  description: 'Fetal Heart Tones'
                  , answer: 'option1'
        }
              , {
                  description: 'Sexual Assault'
                  , answer: 'option1'
        }
              , {
                  description: 'Reporting Acts of Violence'
                  , answer: 'option1'
        }
      ]
      };
        
      var emergencyPediatrics = {
          questions: [
              {
                  description: 'Management of Pediatric Emergency Patients'
                  , answer: 'option1'
        }
              , {
                  description: 'Identification/Reporting Abuse'
                  , answer: 'option1'
        }
              , {
                  description: 'Abdominal Pain'
                  , answer: 'option1'
        }
              , {
                  description: 'Epiglottitis'
                  , answer: 'option1'
        }
              , {
                  description: 'Asthma/Reactive Airway Disease'
                  , answer: 'option1'
        }
              , {
                  description: 'Fractures'
                  , answer: 'option1'
        }

         , {
                  description: 'Head/Spinal Injury'
                  , answer: 'option1'
        }
              , {
                  description: 'Poison Ingestion'
                  , answer: 'option1'
        }
              , {
                  description: 'Seizures'
                  , answer: 'option1'
        }
              , {
                  description: 'Sickle Cell Crisis'
                  , answer: 'option1'
        }
      ]
      };
      var emergencyPsychiatric = {
          questions: [
              {
                  description: 'Acute Psychotic Patient'
                  , answer: 'option1'
        }
              , {
                  description: 'Managing Violent Behavior'
                  , answer: 'option1'
        }
              , {
                  description: 'Drug /ETOH Overdose/Withdrawal'
                  , answer: 'option1'
        }
              , {
                  description: 'Psychiatric Hold'
                  , answer: 'option1'
        }
              , {
                  description: 'Suicidal Patient'
                  , answer: 'option1'
        }
      ]
      };
      var emergencyMiscellaneous = {
          questions: [
              {
                  description: 'Bites- Animal/Snake/Human'
                  , answer: 'option1',
                  name:'emergencyMiscellaneous1'
        }
              , {
                  description: 'Hazardous Material Exposure'
                  , answer: 'option1',
                  name:'emergencyMiscellaneous2'
        }
              , {
                  description: 'Heat Exhaustion/Stroke'
                  , answer: 'option1',
                  name:'emergencyMiscellaneous3'
        }
              , {
                  description: 'Drowning'
                  , answer: 'option1',
                  name:'emergencyMiscellaneous4'
        }

      ]
      };
      
      var emergencyIvTherapy = {
          questions: [
              {
                  description: 'Starting IVs'
                  , answer: 'option1'
        }
              , {
                  description: 'Central Line Placement'
                  , answer: 'option1'
        }
              , {
                  description: 'Intraosseous Infusion'
                  , answer: 'option1'
        }
              , {
                  description: 'Blood Product Administration'
                  , answer: 'option1'
        }

      ]
      };
      var emergencyMedications = {
          questions: [
              {
                  description: 'Anti-Arrhythmics'
                  , answer: 'option1'
        }
              , {
                  description: 'Anticoagulants (IV, oral, & injection)'
                  , answer: 'option1'
        }
              , {
                  description: 'Anti-Hypertensives'
                  , answer: 'option1'
        }
              , {
                  description: 'Anti-Psychotics'
                  , answer: 'option1'
        }
              , {
                  description: 'Anti-Seizure Medications'
                  , answer: 'option1'
        }
              , {
                  description: 'Benzodiazepines'
                  , answer: 'option1'
        }

         , {
                  description: 'Continuous IV Paralytics'
                  , answer: 'option1'
        }
              , {
                  description: 'Continuous IV Sedation'
                  , answer: 'option1'
        }
              , {
                  description: 'Procedural Sedation - Administration'
                  , answer: 'option1'
        }
              , {
                  description: 'Emergency Medications'
                  , answer: 'option1'
        }, {
                  description: 'Inhaled Medications'
                  , answer: 'option1'
        }
              , {
                  description: 'Insulin'
                  , answer: 'option1'
        }
              , {
                  description: 'IV Vasopressors'
                  , answer: 'option1'
        }
              , {
                  description: 'Narcotics/Opioid Analgesics (IV, oral, & injection)'
                  , answer: 'option1'
        }
              , {
                  description: 'Nitrates (Oral & Topical)'
                  , answer: 'option1'
        }

         , {
                  description: 'Non-Opioid Analgesics (IV, Oral, & Injection)'
                  , answer: 'option1'
        }
              , {
                  description: 'Reversal Agents'
                  , answer: 'option1'
        }
              , {
                  description: 'Thrombolytic Therapy'
                  , answer: 'option1'
        }
              , {
                  description: 'Steroids (IV, Oral, Inhaled)'
                  , answer: 'option1'
        }
         , {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell))'
                  , answer: 'option1'
        }

       ]
      };
      var emergencyEmergResponse = {
          questions: [
              {
                  description: 'Dysrhythmia Interpretation'
                  , answer: 'option1'
        }
              , {
                  description: 'Dysrhythmia Management'
                  , answer: 'option1'
        }
              , {
                  description: 'Obtain 12 Lead EKG'
                  , answer: 'option1'
        }
              , {
                  description: 'Interpret 12 Lead EKG'
                  , answer: 'option1'
        }
           
              , {
                  description: 'Management of Cardiac Arrest'
                  , answer: 'option1'
        }

      ]
      };
      var emergencyKnowledgeSkills = {
          questions: [
              {
                  description: 'Triage'
                  , answer: 'option1'
        }
              , {
                  description: 'Ambulance/Paramedic Radio'
                  , answer: 'option1'
        }
              , {
                  description: 'Charge Experience'
                  , answer: 'option1'
        }
              , {
                  description: 'AMA procedures'
                  , answer: 'option1'
        }
              , {
                  description: 'EMTALA'
                  , answer: 'option1'
        }
              , {
                  description: 'National Patient Safety Goals/Core Measures'
                  , answer: 'option1'
        }

         , {
                  description: 'Fall Risk Assessment/Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Pressure Ulcer Risk Assessment/Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Restraints/Use of Least Restrictive Device'
                  , answer: 'option1'
        }
              , {
                  description: 'Patient/Family Teaching'
                  , answer: 'option1'
        }, {
                  description: 'Age Specific/Population-Based Care'
                  , answer: 'option1'
        }
              , {
                  description: 'Isolation Precautions'
                  , answer: 'option1'
        }
              , {
                  description: 'Infection Prevention'
                  , answer: 'option1'
        }
              , {
                  description: 'Pain Assessment & Management'
                  , answer: 'option1'
        }
              , {
                  description: 'Interpretation and Communication of Lab Values'
                  , answer: 'option1'
        }
       ]
      };
      var emergencyEmr = {
          questions: [
              {
                  description: 'Epic'
                  , answer: 'option1'
        }
              , {
                  description: 'Cerner'
                  , answer: 'option1'
        }
              , {
                  description: 'Eclipsys'
                  , answer: 'option1'
        }
              , {
                  description: 'McKesson'
                  , answer: 'option1'
        }
              , {
                  description: 'Meditech'
                  , answer: 'option1'
        }
              , {
                  description: 'Allscripts'
                  , answer: 'option1'
        }
           
              , {
                  description: 'Other Computerized System'
                  , answer: 'option1'
        }
           
              , {
                  description: 'Computerized Physician Order Entry'
                  , answer: 'option1'
        }
           
              , {
                  description: 'Bar Coding for Medication Administration'
                  , answer: 'option1'
        }

      ]
      };
      var emergencyEmrConversion = {
          questions: [
              {
                  description: 'Starting IVs'
                  , answer: 'option1'
        }
              , {
                  description: 'Central Line Placement'
                  , answer: 'option1'
        }

      ]
      };
      var emergencyConversion = {
          questions: [
              {
                  description: 'EMR Conversion'
                  , answer: 'option1'
        }
      ]
      };
      
      
      /* end page6*/
      
      
      
      
      
      
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
      // ========================Emergency Department Skills Checklist  Page No-7 ==========================//
      
    var homeHealthCardiovascular  = {
          questions: [
              {
                  description: 'ACS/Post MI', 
                  answer: 'option1'
              }, 
              {
                  description: ' Heart Failure', 
                  answer: 'option1'
              },  
              {
                  description: 'Post Cardiac Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Cardiac Auscultation (Rate/Rhythm)',  
                  answer: 'option1'
              }, 
              {
                  description: 'Peripheral Pulse/Circulation Checks',  
                  answer: 'option1'
              } 
      ]
      }; 
    var homeHealthPulmonary = {
          questions: [
              {
                  description: 'Asthma', 
                  answer: 'option1'
              }, 
              {
                  description: 'COPD', 
                  answer: 'option1'
              },  
              {
                  description: 'Pneumonia', 
                  answer: 'option1'
              },
              {
                  description: ' Lung Cancer',  
                  answer: 'option1'
              }, 
              {
                  description: ' Pulmonary Emboli',  
                  answer: 'option1'
              } , 
              {
                  description: '   Auscultate Lung Sounds', 
                  answer: 'option1'
              },  
              {
                  description: ' Oxygen Administration', 
                  answer: 'option1'
              },
              {
                  description: '  Oxygen Safety',  
                  answer: 'option1'
              }, 
              {
                  description: 'Oro / Nasotracheal Suctioning',  
                  answer: 'option1'
              } , 
              {
                  description: 'CPAP / BiPAP',  
                  answer: 'option1'
              } , 
              {
                  description: 'Ventilator Management (Specify):',  
                  answer: 'option1'
              } 
      ]
      };   
    var homeHealthNeurological = {
          questions: [
              {
                  description: 'CVA', 
                  answer: 'option1'
              }, 
              {
                  description: "Alzheimer's Disease/Dementia", 
                  answer: 'option1'
              },  
              {
                  description: "Parkinson's", 
                  answer: 'option1'
              },
              {
                  description: ' Degenerative Neurologic Disorders (ALS, MS, etc.)',  
                  answer: 'option1'
              }, 
              {
                  description: 'Brain Tumor',  
                  answer: 'option1'
              } , 
              {
                  description: 'Brain Injury', 
                  answer: 'option1'
              },  
              {
                  description: ' Para/Quadriplegia', 
                  answer: 'option1'
              },
              {
                  description: ' Seizure Disorder',  
                  answer: 'option1'
              }, 
              {
                  description: ' Level of Consciousness/Neuro Changes',  
                  answer: 'option1'
              } 
      ]
      };
    var homeHealthOrthopedics = {
          questions: [
              {
                  description: 'Joint Replacement', 
                  answer: 'option1'
              }, 
              {
                  description: 'DVT Prophylaxis/Recognition', 
                  answer: 'option1'
              },  
              {
                  description: 'Incision Checks', 
                  answer: 'option1'
              },
              {
                  description: 'Staple Removal',  
                  answer: 'option1'
              }, 
              {
                  description: 'Fractures',  
                  answer: 'option1'
              } , 
              {
                  description: 'Cast/Brace', 
                  answer: 'option1'
              },  
              {
                  description: 'Amputation', 
                  answer: 'option1'
              },
              {
                  description: 'Arthritis',  
                  answer: 'option1'
              }, 
              {
                  description: 'Assistive Equipment/Lift Devices',  
                  answer: 'option1'
              } , 
              {
                  description: 'In Home PT/INR (Specify):',  
                  answer: 'option1'
              } 
      ]
      };
    var homeHealthGastronitestinal = {
          questions: [
              {
                  description: 'Nutritional Assessment', 
                  answer: 'option1'
              }, 
              {
                  description: 'Colostomy/Ileostomy Management', 
                  answer: 'option1'
              },  
              {
                  description: 'Fecal Incontinence/Diarrhea', 
                  answer: 'option1'
              },
              {
                  description: 'Bowel Obstruction',  
                  answer: 'option1'
              }, 
              {
                  description: 'GI Bleed',  
                  answer: 'option1'
              } , 
              {
                  description: 'Post GI Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Hepatitis Liver Failure', 
                  answer: 'option1'
              },
              {
                  description: 'NG Tubes',  
                  answer: 'option1'
              }, 
              {
                  description: 'Feeding Tubes',  
                  answer: 'option1'
              } , 
              {
                  description: 'Feeding Pumps (Specify):',  
                  answer: 'option1'
              }, 
              {
                  description: 'Drainage Devices:',  
                  answer: 'option1'
              }  
      ]
      };
    var homeHealthRenal= {
          questions: [
              {
                  description: 'Hemodialysis', 
                  answer: 'option1'
              }, 
              {
                  description: 'AV Fistula/Shunt', 
                  answer: 'option1'
              },  
              {
                  description: 'Peritoneal Dialysis', 
                  answer: 'option1'
              },

              {
                  description: 'Post Bladder Surgery',  
                  answer: 'option1'
              } , 
              {
                  description: 'Post Prostate Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Urostomy', 
                  answer: 'option1'
              },
              {
                  description: 'Urinary Incontinence',  
                  answer: 'option1'
              }, 
              {
                  description: 'Bladder Catheter Insertion/Maintenance',  
                  answer: 'option1'
              } , 
              {
                  description: 'Suprapubic Catheter Insertion/Maintenance',  
                  answer: 'option1'
              } 
      ]
      };
    var homeHealthEndocrine= {
          questions: [
              {
                  description: 'Diabetes', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hyper/Hypoglycemia', 
                  answer: 'option1'
              },  
              {
                  description: 'Diabetic Skin Assessment', 
                  answer: 'option1'
              },
              {
                  description: "Cushing's / Addison's Disease",  
                  answer: 'option1'
              }, 
              {
                  description: 'Thyroid Disease',  
                  answer: 'option1'
              } , 
              {
                  description: 'Insulin Pumps', 
                  answer: 'option1'
              },  
              {
                  description: 'Glucometers', 
                  answer: 'option1'
              }
      ]
      };
    var homeHealthWoundSkin = {
          questions: [
              {
                  description: 'Braden Scale', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pressure Ulcer Prevention', 
                  answer: 'option1'
              },  
              {
                  description: 'Pressure Ulcer Staging', 
                  answer: 'option1'
              },
              {
                  description: 'Pressure Ulcer Management',  
                  answer: 'option1'
              }, 
              {
                  description: 'Burns',  
                  answer: 'option1'
              } , 
              {
                  description: 'Wound Care', 
                  answer: 'option1'
              },  
              {
                  description: 'Wound Cultures', 
                  answer: 'option1'
              },  
              {
                  description: 'Wound Vac', 
                  answer: 'option1'
              }
      ]
      };
    var homeHealthOncology = {
          questions: [
              {
                  description: 'Risk for Infection', 
                  answer: 'option1'
              }, 
              {
                  description: 'Symptom Management', 
                  answer: 'option1'
              },  
              {
                  description: 'Side Effects of Treatment', 
                  answer: 'option1'
              }
              ,  
              {
                  description: 'Terminal Disease', 
                  answer: 'option1'
              }
      ]
      };  
    var homeHealthInfections  = {
          questions: [
               
              {
                  description: 'MRSA', 
                  answer: 'option1'
              },  
              {
                  description: 'VRE', 
                  answer: 'option1'
              },
              {
                  description: 'C. Difficile',  
                  answer: 'option1'
              }, 
              {
                  description: 'HIV',  
                  answer: 'option1'
              } , 
              {
                  description: 'Tuberculosis', 
                  answer: 'option1'
              },  
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              }
      ]
      };
    var homeHealthPhlebotomy = {
          questions: [
               
              {
                  description: 'Peripheral Venipuncture for Labs', 
                  answer: 'option1'
              },  
              {
                  description: 'Start IVs', 
                  answer: 'option1'
              },
              {
                  description: 'Peripheral IVs',  
                  answer: 'option1'
              }, 
              {
                  description: 'PICC/CVP Lines',  
                  answer: 'option1'
              } , 
              {
                  description: 'Venous Access Ports', 
                  answer: 'option1'
              },  
              {
                  description: 'Infusion Pump Set up and Management', 
                  answer: 'option1'
              },  
              {
                  description: 'Specify Infusion Pump Type:', 
                  answer: 'option1'
              }
      ]
      };
    var homeHealthPsychiatric  = {
          questions: [
               
              {
                  description: 'Cognitive Disorders', 
                  answer: 'option1'
              },  
              {
                  description: 'Mood Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Schizophrenia/Psychotic Disorders',  
                  answer: 'option1'
              }, 
              {
                  description: 'Medication Compliance',  
                  answer: 'option1'
              } 
      ]
      };
    var homeHealthWomenHealth = {
          questions: [ 
              {
                  description: 'Pregnancy Related Complications', 
                  answer: 'option1'
              },  
              {
                  description: 'Fetal Heart Tones', 
                  answer: 'option1'
              },
              {
                  description: 'Contractions',  
                  answer: 'option1'
              }, 
              {
                  description: 'Post Partum Mother/Baby Visit',  
                  answer: 'option1'
              } , 
              {
                  description: 'Newborn Care', 
                  answer: 'option1'
              },  
              {
                  description: 'Phototherapy', 
                  answer: 'option1'
              },  
              {
                  description: 'Breast Feeding Support', 
                  answer: 'option1'
              }
      ]
      };   
    var homeHealthPediatrics = {
          questions: [ 
              {
                  description: 'Growth and Development', 
                  answer: 'option1'
              },  
              {
                  description: 'Respiratory Distress Syndrome', 
                  answer: 'option1'
              },
              {
                  description: 'Bronchopulmonary Dysplasia',  
                  answer: 'option1'
              }, 
              {
                  description: 'Cystic Fibrosis',  
                  answer: 'option1'
              } , 
              {
                  description: 'Muscular Dystrophy', 
                  answer: 'option1'
              },  
              {
                  description: 'Spina Bifida', 
                  answer: 'option1'
              },  
              {
                  description: 'Spinal Surgery', 
                  answer: 'option1'
              }, 
              {
                  description: 'Sickle Cell Disease',  
                  answer: 'option1'
              } , 
              {
                  description: 'Trach Care/Suctioning', 
                  answer: 'option1'
              },  
              {
                  description: 'Ventilator Management', 
                  answer: 'option1'
              },  
              {
                  description: 'Ventilator Type (Specify):', 
                  answer: 'option1'
              }
      ]
      };
    var homeHealthPainManagement = {
          questions: [ 
              {
                  description: 'Verbal/Nonverbal Pain Scales', 
                  answer: 'option1'
              },  
              {
                  description: 'Response to Pain Management Interventions', 
                  answer: 'option1'
              },
              {
                  description: 'PCA Pump',  
                  answer: 'option1'
              }, 
              {
                  description: 'Epidural Cath/Site Monitoring/Pump',  
                  answer: 'option1'
              }
              , 
              {
                  description: 'Non-Pharmacologic Pain Measures',  
                  answer: 'option1'
              }
      ]
      };
      
    var homeHealthPalliative = {
          questions: [ 
              {
                  description: 'Palliative Symptom Management ', 
                  answer: 'option1'
              },  
              {
                  description: 'Pain Management/Response', 
                  answer: 'option1'
              },
              {
                  description: 'Family Support/Teaching',  
                  answer: 'option1'
              }, 
              {
                  description: 'After Death Protocols',  
                  answer: 'option1'
              }
              
      ]
      };
    var homeHealthMedications = {
          questions: [ 
              {
                  description: "Alzheimer's Medications", 
                  answer: 'option1'
              },  
              {
                  description: 'Antiarrhythmics', 
                  answer: 'option1'
              },
              {
                  description: 'Antibiotics/Antivirals',  
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Depressants',  
                  answer: 'option1'
              },  
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Psychotics',  
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Seizure Medications',  
                  answer: 'option1'
              },  
              {
                  description: 'Benzodiazepines', 
                  answer: 'option1'
              },
              {
                  description: 'Calculation of Pediatric Dosages',  
                  answer: 'option1'
              }, 
              {
                  description: 'Coumadin',  
                  answer: 'option1'
              },  
              {
                  description: 'Diuretics', 
                  answer: 'option1'
              },
              {
                  description: 'Enoxaparin',  
                  answer: 'option1'
              }, 
              {
                  description: 'Inhaled Medications',  
                  answer: 'option1'
              }, 
              {
                  description: 'Nebulizer Medications',  
                  answer: 'option1'
              },  
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },
              {
                  description: 'Opioid and Non-Opioid Analgesics',  
                  answer: 'option1'
              }, 
              {
                  description: 'Oral Chemotherapy',  
                  answer: 'option1'
              },  
              {
                  description: 'Oral Hypoglycemics', 
                  answer: 'option1'
              },
              {
                  description: 'Oral & Topics Nitrates',  
                  answer: 'option1'
              }, 
              {
                  description: 'Rivaroxaban',  
                  answer: 'option1'
              }
              ,
              {
                  description: 'Sedative/Hypnotics',  
                  answer: 'option1'
              }, 
              {
                  description: 'Steroids',  
                  answer: 'option1'
              }
               
      ]
      };
    var homeHealthHomeheal = {
          questions: [ 
              {
                  description: 'Intake/Admissions', 
                  answer: 'option1'
              },  
              {
                  description: 'Case Manager', 
                  answer: 'option1'
              },
              {
                  description: 'Case Load - Pts/Day(specify)',  
                  answer: 'option1'
              }, 
              {
                  description: 'Supervise LVNs/HHAs',  
                  answer: 'option1'
              },  
              {
                  description: 'Medicare/Medicaid', 
                  answer: 'option1'
              },
              {
                  description: 'Long/Short Term Disability',  
                  answer: 'option1'
              }, 
              {
                  description: 'Private Insurance',  
                  answer: 'option1'
              },  
              {
                  description: 'Telephonic Assessments', 
                  answer: 'option1'
              },
              {
                  description: 'Management of Complaints',  
                  answer: 'option1'
              }, 
              {
                  description: 'APS Reports',  
                  answer: 'option1'
              },  
              {
                  description: 'OASIS', 
                  answer: 'option1'
              },
              {
                  description: 'Diagnosis Coding',  
                  answer: 'option1'
              }, 
              {
                  description: 'Document Plan of Care',  
                  answer: 'option1'
              }, 
              {
                  description: 'Clinical Assessment Documentation',  
                  answer: 'option1'
              },       
      ]
      }; 
      
    var homeHealthProfessional = {
          questions: [ 
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              },  
              {
                  description: 'Safety Assessment', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Assessment and Prevention',  
                  answer: 'option1'
              }, 
              {
                  description: 'Patient/Family Teaching',  
                  answer: 'option1'
              },  
              {
                  description: 'Age Specific/Population Based Care', 
                  answer: 'option1'
              }   
      ]
      };
    var homeHealthEMR = {
             questions: [ 
              {
                  description: 'Allscripts', 
                  answer: 'option1'
              },  
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },
              {
                  description: 'Epic',  
                  answer: 'option1'
              }, 
              {
                  description: 'HomeCare Home Base',  
                  answer: 'option1'
              },  
              {
                  description: 'McKesson', 
                  answer: 'option1'
              }   , 
              {
                  description: 'Meditech',  
                  answer: 'option1'
              },  
              {
                  description: 'Other Computerized Documentation System', 
                  answer: 'option1'
              }  
              
      ]
      };
    var homeHealthConversion = {
             questions: [ 
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              }  
      ]
      };
      
      
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
      // ========================Hospice Skills Checklist Page No-8 ==========================//
      
    var hspiceWork= {
          questions: [
              {
                  description: 'Home Hospice', 
                  answer: 'option1'
              }, 
              {
                  description: 'Inpatient Hospice', 
                  answer: 'option1'
              },  
              {
                  description: 'Pediatric Hospice', 
                  answer: 'option1'
              },
              {
                  description: 'Home Health/Hospice Setting',  
                  answer: 'option1'
              }   
      ]
      };  
    var hspiceAssessment= {
          questions: [
              {
                  description: 'Intake Assessment', 
                  answer: 'option1'
              }, 
              {
                  description: 'Assessment Interview', 
                  answer: 'option1'
              },  
              {
                  description: 'Physical Exam', 
                  answer: 'option1'
              },
              {
                  description: 'Coping Status',  
                  answer: 'option1'
              },  
               {
                  description: 'Environmental Status',  
                  answer: 'option1'
              } 
      ]
      };   
    var hspicePlanCare= {
          questions: [
              {
                  description: 'Set Goals with Pt/Family', 
                  answer: 'option1'
              }, 
              {
                  description: 'Collaborate with Other Team Members', 
                  answer: 'option1'
              },  
              {
                  description: 'Ensure Continuity of Care', 
                  answer: 'option1'
              },
               
      ]
      };  
    var hspiceSymptom  = {
          questions: [
              {
                  description: 'Urgent Assessment of Symptoms', 
                  answer: 'option1'
              }, 
              {
                  description: 'Reduce Symptoms to Level Acceptable to Pt', 
                  answer: 'option1'
              },  
              {
                  description: 'Report Symptoms/Management to Provider', 
                  answer: 'option1'
              },
              {
                  description: 'Treat Underlying Cause',  
                  answer: 'option1'
              },  
               {
                  description: 'Severity Scale',  
                  answer: 'option1'
              } , 
              {
                  description: 'Management of Nausea', 
                  answer: 'option1'
              },  
              {
                  description: 'Management of Constipation', 
                  answer: 'option1'
              },
              {
                  description: 'Management of Fatigue',  
                  answer: 'option1'
              },  
               {
                  description: 'Anorexia/Cachexia',  
                  answer: 'option1'
              } ,
              {
                  description: 'Restlessness',  
                  answer: 'option1'
              },  
               {
                  description: 'Educate Family on Symptom Management',  
                  answer: 'option1'
              } 
      ]
      }; 
    var hspicePainManagment = {
          questions: [
              {
                  description: 'Identify Source of Pain', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pain Severity', 
                  answer: 'option1'
              },  
              {
                  description: 'PAINAD Scale for Non Verbal Patient', 
                  answer: 'option1'
              },
              {
                  description: 'Reduce Pain to Level Acceptable to Patient',  
                  answer: 'option1'
              },  
               {
                  description: 'WHO 3 Step Ladder',  
                  answer: 'option1'
              } , 
              {
                  description: 'Non-Pharmacologic Management of Pain', 
                  answer: 'option1'
              },  
              {
                  description: 'Pharmacologic Management of Pain', 
                  answer: 'option1'
              },
              {
                  description: 'Effects of Pharmacologic Treatment',  
                  answer: 'option1'
              },  
               {
                  description: 'Nociceptive/Neuropathic/Mixed Pain',  
                  answer: 'option1'
              } ,
              {
                  description: 'Management of Nociceptive Pain',  
                  answer: 'option1'
              },  
               {
                  description: 'Management of Neuropathic Pain',  
                  answer: 'option1'
              } ,  
               {
                  description: 'Educate Family on Pain Management',  
                  answer: 'option1'
              } 
      ]
      }; 
    var hspiceWound= {
          questions: [
              {
                  description: 'Positioning Techniques', 
                  answer: 'option1'
              }, 
              {
                  description: 'Bed/Support Surface Selection', 
                  answer: 'option1'
              },  
              {
                  description: 'Pressure Ulcer Staging/Management', 
                  answer: 'option1'
              },
              {
                  description: 'Response to Treatment',  
                  answer: 'option1'
              },  
               {
                  description: 'Evaluate Factors that Impede Healing',  
                  answer: 'option1'
              },  
               {
                  description: 'Educate Family on Positioning/Shearing',  
                  answer: 'option1'
              }  
      ]
      };     
    var hspicePediatrics = {
          questions: [
              {
                  description: 'Developmentally Appropriate Assessment', 
                  answer: 'option1'
              }, 
              {
                  description: 'Parental/Sibling Support', 
                  answer: 'option1'
              },  
              {
                  description: 'Pediatric Support Team Collaboration', 
                  answer: 'option1'
              },
               
      ]
      }; 
    var hspiceMedication = {
          questions: [
              {
                  description: 'Equianalgesic Conversion Formula', 
                  answer: 'option1'
              }, 
              {
                  description: 'Titration of opioids', 
                  answer: 'option1'
              },  
              {
                  description: 'IV Pump Management', 
                  answer: 'option1'
              },
              {
                  description: 'Evaluate Effectiveness of Medications',  
                  answer: 'option1'
              },  
               {
                  description: 'Family Management of Medications',  
                  answer: 'option1'
              },  
               {
                  description: 'Disposal of Medications',  
                  answer: 'option1'
              }  
      ]
      };    
    var hspiceDeath = {
          questions: [
              {
                  description: 'Facility Family/Cultural Rituals/Rites', 
                  answer: 'option1'
              }, 
              {
                  description: 'Patient Care after Death', 
                  answer: 'option1'
              },  
              {
                  description: 'Coordinate Mortuary Services', 
                  answer: 'option1'
              },
              {
                  description: 'Bereavement Services',  
                  answer: 'option1'
              }
      ]
      }; 
    var hspiceCompliance = {
          questions: [
              {
                  description: 'Scope and Frequency of Services', 
                  answer: 'option1'
              }, 
              {
                  description: 'Medicare/State Regulations for Hospice', 
                  answer: 'option1'
              },  
              {
                  description: 'Document Progression of Decline', 
                  answer: 'option1'
              },
              {
                  description: 'DME Authorization & Documentation of Need/Order',  
                  answer: 'option1'
              },
              {
                  description: 'OASIS-C',  
                  answer: 'option1'
              }
      ]
      };  
    var hspiceSkills = {
          questions: [
              {
                  description: 'Identify Source of Suffering', 
                  answer: 'option1'
              }, 
              {
                  description: 'Palliative Care Philosophy', 
                  answer: 'option1'
              },  
              {
                  description: 'Patient/Family Directs Goals of Care', 
                  answer: 'option1'
              },
              {
                  description: 'Maximize Quality of Life',  
                  answer: 'option1'
              },  
               {
                  description: 'Cultural Diversity',  
                  answer: 'option1'
              } , 
              {
                  description: 'Supervision of Ancillary Staff', 
                  answer: 'option1'
              },  
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Risk Assessment/Prevention',  
                  answer: 'option1'
              },  
               {
                  description: 'Infection Prevention',  
                  answer: 'option1'
              } ,
              {
                  description: 'Isolation Precautions',  
                  answer: 'option1'
              },  
               {
                  description: 'Interpretation and Communication of Lab Values',  
                  answer: 'option1'
              } 
      ]
      };     
    var hspiceEmr= {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1',
                  name: 'hspiceEmr1'
              }, 
              {
                  description: 'Cerner', 
                  answer: 'option1',
                  name: 'hspiceEmr2'
              },  
              {
                  description: 'Eclipsys', 
                  answer: 'option1',
                  name: 'hspiceEmr3'
              },
              {
                  description: 'Allscripts',  
                  answer: 'option1',
                  name: 'hspiceEmr4'
              },  
               {
                  description: 'McKesson',  
                  answer: 'option1',
                  name: 'hspiceEmr5'
              } , 
              {
                  description: 'Meditech', 
                  answer: 'option1',
                  name: 'hspiceEmr6'
              },  
              {
                  description: 'Other Computerized System', 
                  answer: 'option1',
                  name: 'hspiceEmr7'
              },
              {
                  description: 'Computerized Physician Order Entry',  
                  answer: 'option1',
                  name: 'hspiceEmr8'
              },  
               {
                  description: 'Bar Coding for Medication Administration',  
                  answer: 'option1',
                  name: 'hspiceEmr9'
              } 
            
      ]
      };  
    var hspiceEmrConversion = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              }
      ]
      };   
      
      
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
      // ========================Informatics Skills Checklist Page No-9 ==========================//   
      
     
    var informaticsCerner= {
          questions: [
              {
                  description: 'Configuration', 
                  answer: 'option1',
                  name:'informaticsCerner1'
              }, 
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1',
                  name:'informaticsCerner2'
              },  
              {
                  description: 'Trainer - Ongoing Program', 
                  answer: 'option1',
                  name:'informaticsCerner3'
              },
              {
                  description: 'Super User',  
                  answer: 'option1',
                  name:'informaticsCerner4'
              }, 
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1',
                  name:'informaticsCerner5'
              },  
              {
                  description: 'Computerized Provider Order Entry (CPOE)', 
                  answer: 'option1',
                  name:'informaticsCerner6'
              },
              {
                  description: 'Nursing Assessment',  
                  answer: 'option1',
                  name:'informaticsCerner7'
              } , 
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1',
                  name:'informaticsCerner8'
              },  
              {
                  description: 'Labs and Radiology', 
                  answer: 'option1',
                  name:'informaticsCerner9'
              },
              {
                  description: 'MAR',  
                  answer: 'option1',
                  name:'informaticsCerner10'
              }, 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1',
                  name:'informaticsCerner11'
              } 
      ]
      };    
    var informaticsEclipsys= {
          questions: [
              {
                  description: 'Configuration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Trainer - Ongoing Program', 
                  answer: 'option1'
              },
              {
                  description: 'Super User',  
                  answer: 'option1'
              }, 
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Provider Order Entry (CPOE)', 
                  answer: 'option1'
              },
              {
                  description: 'Nursing Assessment',  
                  answer: 'option1'
              } , 
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1'
              },  
              {
                  description: 'Labs and Radiology', 
                  answer: 'option1'
              },
              {
                  description: 'MAR',  
                  answer: 'option1'
              }, 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1'
              } 
      ]
      };    

    var informaticsEpic= {
          questions: [
              {
                  description: 'Configuration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Trainer - Ongoing Program', 
                  answer: 'option1'
              },
              {
                  description: 'Super User',  
                  answer: 'option1'
              }, 
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Provider Order Entry (CPOE)', 
                  answer: 'option1'
              },
              {
                  description: 'Nursing Assessment',  
                  answer: 'option1'
              } , 
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1'
              },  
              {
                  description: 'Labs and Radiology', 
                  answer: 'option1'
              },
              {
                  description: 'MAR',  
                  answer: 'option1'
              }, 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1'
              } 
      ]
      };        
    var informaticsGeIdx= {
          questions: [
              {
                  description: 'Configuration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Trainer - Ongoing Program', 
                  answer: 'option1'
              },
              {
                  description: 'Super User',  
                  answer: 'option1'
              }, 
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Provider Order Entry (CPOE)', 
                  answer: 'option1'
              },
              {
                  description: 'Nursing Assessment',  
                  answer: 'option1'
              } , 
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1'
              },  
              {
                  description: 'Labs and Radiology', 
                  answer: 'option1'
              },
              {
                  description: 'MAR',  
                  answer: 'option1'
              }, 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1'
              } 
      ]
      };  
    var informaticsMckesson= {
          questions: [
              {
                  description: 'Configuration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Trainer - Ongoing Program', 
                  answer: 'option1'
              },
              {
                  description: 'Super User',  
                  answer: 'option1'
              }, 
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Provider Order Entry (CPOE)', 
                  answer: 'option1'
              },
              {
                  description: 'Nursing Assessment',  
                  answer: 'option1'
              } , 
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1'
              },  
              {
                  description: 'Labs and Radiology', 
                  answer: 'option1'
              },
              {
                  description: 'MAR',  
                  answer: 'option1'
              }, 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1'
              } 
      ]
      };   
    var informaticsMeditech= {
          questions: [
              {
                  description: 'Configuration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Trainer - Ongoing Program', 
                  answer: 'option1'
              },
              {
                  description: 'Super User',  
                  answer: 'option1'
              }, 
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Provider Order Entry (CPOE)', 
                  answer: 'option1'
              },
              {
                  description: 'Nursing Assessment',  
                  answer: 'option1'
              } , 
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1'
              },  
              {
                  description: 'Labs and Radiology', 
                  answer: 'option1'
              },
              {
                  description: 'MAR',  
                  answer: 'option1'
              }, 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1'
              } 
      ]
      }; 
    var informaticsOtherNameSec= {
          questions: [
              {
                  description: 'Other (specify here)', 
                  answer: 'option1'
              }, 
              {
                  description: 'Configuration', 
                  answer: 'option1'
              },  
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1'
              },
              {
                  description: 'Trainer - Ongoing Program',  
                  answer: 'option1'
              }, 
              {
                  description: 'Super User', 
                  answer: 'option1'
              },  
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1'
              },
              {
                  description: 'Computerized Provider Order Entry (CPOE)',  
                  answer: 'option1'
              } , 
              {
                  description: 'Nursing Assessment', 
                  answer: 'option1'
              },  
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1'
              },
              {
                  description: 'Labs and Radiology',  
                  answer: 'option1'
              }, 
              {
                  description: 'MAR', 
                  answer: 'option1'
              } , 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1'
              } 
      ]
      };  
    var informaticsOtherName= {
          questions: [
              {
                  description: 'Other (specify here)', 
                  answer: 'option1'
              }, 
              {
                  description: 'Configuration', 
                  answer: 'option1'
              },  
              {
                  description: 'Trainer - Implementation/Conversion', 
                  answer: 'option1'
              },
              {
                  description: 'Trainer - Ongoing Program',  
                  answer: 'option1'
              }, 
              {
                  description: 'Super User', 
                  answer: 'option1'
              },  
              {
                  description: 'Implementation/Conversion', 
                  answer: 'option1'
              },
              {
                  description: 'Computerized Provider Order Entry (CPOE)',  
                  answer: 'option1'
              } , 
              {
                  description: 'Nursing Assessment', 
                  answer: 'option1'
              },  
              {
                  description: 'Nursing Documentation', 
                  answer: 'option1'
              },
              {
                  description: 'Labs and Radiology',  
                  answer: 'option1'
              }, 
              {
                  description: 'MAR', 
                  answer: 'option1'
              } , 
              {
                  description: 'Bar Coded Medication Administration', 
                  answer: 'option1'
              } 
      ]
      };   
    
    var informaticsCertification= {
          questions: [
              {
                  description: 'Certification in Informatics', 
                  answer: 'option1'
              }
      ]
      };   
    var informaticsDegree= {
      questions: [
              {
                  description: 'Degree in Informatics', 
                  answer: 'option1'
              }
      ]
      };   
       
      
////////////////////////////////////////////////////////////////////////////////////////////////////////
      // ========================Intermediate Care/PCU/Stepdown/Telemetry Skills Checklists Form No-10 ==========================//      
      
      
var intermediateCardiac= {
          questions: [
              {
                  description: 'Acute Coronary Syndrome', 
                  answer: 'option1'
              }, 
              {
                  description: 'Congestive Heart Failure', 
                  answer: 'option1'
              },  
              {
                  description: 'Post Open Heart (12-24 hours)', 
                  answer: 'option1'
              },
              {
                  description: 'Carotid Endarterectomy',  
                  answer: 'option1'
              }, 
              {
                  description: 'Post Vascular Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Heart Transplant', 
                  answer: 'option1'
              },
              {
                  description: 'Pacemaker - Temporary/Permanent',  
                  answer: 'option1'
              } , 
              {
                  description: 'Pacemaker - Epicardial', 
                  answer: 'option1'
              },  
              {
                  description: 'Sheath Removal', 
                  answer: 'option1'
              },
              {
                  description: 'Heart Sounds',  
                  answer: 'option1'
              }
      ]
      };      
var intermediatePulmonary = {
          questions: [
              {
                  description: 'Pneumonia', 
                  answer: 'option1'
              }, 
              {
                  description: 'Respiratory Distress', 
                  answer: 'option1'
              },  
              {
                  description: 'COPD', 
                  answer: 'option1'
              },
              {
                  description: 'Breath Sounds',  
                  answer: 'option1'
              }, 
              {
                  description: 'Post Thoracic Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Chest Tube Placement & Management', 
                  answer: 'option1'
              },
              {
                  description: 'Trach Management',  
                  answer: 'option1'
              } , 
              {
                  description: 'Modes of Ventilation (AC/PC/SIMV/CPAP)', 
                  answer: 'option1'
              },  
              {
                  description: 'Intubation/Extubation', 
                  answer: 'option1'
              },
              {
                  description: 'External CPAP/BiPAP',  
                  answer: 'option1'
              },
              {
                  description: 'Interpretation of Arterial Blood Gases',  
                  answer: 'option1'
              }
      ]
      };      
var intermediateNeurologic = {
          questions: [
              {
                  description: 'Stroke Scale Assessment', 
                  answer: 'option1'
              }, 
              {
                  description: 'CVA', 
                  answer: 'option1'
              },  
              {
                  description: 'Brain Injury', 
                  answer: 'option1'
              },
              {
                  description: 'Post Craniotomy',  
                  answer: 'option1'
              }, 
              {
                  description: 'Spinal Cord Injury', 
                  answer: 'option1'
              },  
              {
                  description: 'Seizure Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'ETOH/Drug Withdrawal',  
                  answer: 'option1'
              } 
      ]
      }; 

var intermediateGastroin= {
          questions: [
              {
                  description: 'GI Bleeding', 
                  answer: 'option1'
              }, 
              {
                  description: 'GI Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Liver Failure', 
                  answer: 'option1'
              },
              {
                  description: 'Pancreatitis',  
                  answer: 'option1'
              }, 
              {
                  description: 'Liver Transplant', 
                  answer: 'option1'
              },  
              {
                  description: 'Pancreas Transplant', 
                  answer: 'option1'
              } 
      ]
      };        
var intermediateRenal= {
          questions: [
              {
                  description: 'Renal Failure', 
                  answer: 'option1'
              }, 
              {
                  description: 'Renal Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Renal Transplant', 
                  answer: 'option1'
              },
              {
                  description: 'Arteriovenous Fistula/Shunt',  
                  answer: 'option1'
              }, 
              {
                  description: 'Nephrostomy Tubes', 
                  answer: 'option1'
              },  
              {
                  description: 'Peritoneal Dialysis', 
                  answer: 'option1'
              } 
      ]
      };     
var intermediateEndocrine = {
          questions: [
              {
                  description: 'Diabetes - Hypo/Hyperglycemic Crisis', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pituitary Disorders', 
                  answer: 'option1'
              },  
              {
                  description: 'IV Insulin Protocols', 
                  answer: 'option1'
              },
              {
                  description: 'Indwelling Insulin Pumps',  
                  answer: 'option1'
              }
      ]
      }; 
        
var intermediateMedications = {
          questions: [
              {
                  description: 'Anti-Arrhythmics', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anticoagulants (IV, oral, & injection)', 
                  answer: 'option1'
              },  
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Psychotics',  
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Seizure Medications', 
                  answer: 'option1'
              },  
              {
                  description: 'Benzodiazepines', 
                  answer: 'option1'
              },
              {
                  description: 'Procedural Sedation',  
                  answer: 'option1'
              }, 
              {
                  description: 'Diuretics', 
                  answer: 'option1'
              },  
              {
                  description: 'Emergency Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Inhaled Medications',  
                  answer: 'option1'
              }, 
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },  
              {
                  description: 'Titrate Vasoactive Drips', 
                  answer: 'option1'
              },
              {
                  description: 'Manage Vasoactive Drips - No Titration',  
                  answer: 'option1'
              }, 
              {
                  description: 'Narcotics/Opioid Analgesics (IV, oral, & injection)', 
                  answer: 'option1'
              },  
              {
                  description: 'Nitrates (Oral & Topical)', 
                  answer: 'option1'
              },
              {
                  description: 'Non-Opioid Analgesics (IV, Oral, & Injection)',  
                  answer: 'option1'
              }, 
              {
                  description: 'Reversal Agents', 
                  answer: 'option1'
              },  
              {
                  description: 'Steroids (IV, Oral, Inhaled)', 
                  answer: 'option1'
              },
              {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell)',  
                  answer: 'option1'
              }
               
      ]
      };        
var intermediateTherapy= {
          questions: [
              {
                  description: 'Starting IVs', 
                  answer: 'option1'
              }, 
              {
                  description: 'Central Line Blood Draws', 
                  answer: 'option1'
              },  
              {
                  description: 'Central Line/Implanted Line Care', 
                  answer: 'option1'
              },
              {
                  description: 'Arterial Line Management',  
                  answer: 'option1'
              }, 
              {
                  description: 'TPN & Lipids', 
                  answer: 'option1'
              },  
              {
                  description: 'Blood Product Administration', 
                  answer: 'option1'
              },  
              {
                  description: 'Administration of Chemotherapy', 
                  answer: 'option1'
              }  
      ]
      };       
var intermediateResponse= {
          questions: [
              {
                  description: 'Dysrhythmia Interpretation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Dysrhythmia Management', 
                  answer: 'option1'
              },  
              {
                  description: 'Obtain 12 Lead EKG', 
                  answer: 'option1'
              },
              {
                  description: 'Interpret 12 Lead EKG',  
                  answer: 'option1'
              }, 
              {
                  description: 'Cardioversion', 
                  answer: 'option1'
              },  
              {
                  description: 'Defibrillation', 
                  answer: 'option1'
              },  
              {
                  description: 'Malignant Hyperthermia', 
                  answer: 'option1'
              }  
      ]
      }; 
      
var intermediateSkills= {
          questions: [
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              },  
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Restraints/Use of Least Restrictive Device',  
                  answer: 'option1'
              }, 
              {
                  description: 'Patient/Family Teaching', 
                  answer: 'option1'
              },  
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              },  
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              },  
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pain Assessment & Management',  
                  answer: 'option1'
              }, 
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              },  
              {
                  description: 'Interpretation and Communication of Lab Values', 
                  answer: 'option1'
              },  
              {
                  description: 'Specialty Beds', 
                  answer: 'option1'
              } 
              
              
              
      ]
      };     
var intermediateEmr= {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },  
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },
              {
                  description: 'McKesson',  
                  answer: 'option1'
              }, 
              {
                  description: 'Meditech', 
                  answer: 'option1'
              },  
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              },  
              {
                  description: 'Bar Coding for Medication Administration', 
                  answer: 'option1'
              }  
      ]
      };      
var intermediateEmrConversion= {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              }
      ]
      }; 
      
 
      
////////////////////////////////////////////////////////////////////////////////////////////////////////
// ======================== Labor and Delivery Skills Checklist Form No-11 ==========================//       
      
var laborskillsWORK = {
          questions: [
              {
                  description: 'L and D', 
                  answer: 'option1'
              }, 
              {
                  description: 'LDRP', 
                  answer: 'option1'
              },  
              {
                  description: 'Antepartum', 
                  answer: 'option1'
              },  
              {
                  description: 'Mother Baby', 
                  answer: 'option1'
              }    
      ]
      };  
var laborskillsANTEPARTUM = {
          questions: [
              {
                  description: 'Diabetes', 
                  answer: 'option1'
              }, 
              {
                  description: 'Fetal Demise', 
                  answer: 'option1'
              },  
              {
                  description: 'HELLP Syndrome', 
                  answer: 'option1'
              },  
              {
                  description: 'Hyperemesis', 
                  answer: 'option1'
              }, 
              {
                  description: 'Immunologic Disorder', 
                  answer: 'option1'
              },  
              {
                  description: 'Infectious Disease', 
                  answer: 'option1'
              },  
              {
                  description: 'Multiple Gestation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Placenta Previa/Abruptio', 
                  answer: 'option1'
              },  
              {
                  description: 'Pre-Term Labor', 
                  answer: 'option1'
              },  
              {
                  description: 'Premature Rupture of Membranes', 
                  answer: 'option1'
              }          
      ]
      };    
var laborskillsSPECIAL  = {
          questions: [
              {
                  description: 'Conduct Stress Test', 
                  answer: 'option1'
              }, 
              {
                  description: 'Conduct Non-Stress Test', 
                  answer: 'option1'
              },  
              {
                  description: 'Assist with External Version', 
                  answer: 'option1'
              },  
              {
                  description: 'Assist with Umbilical Blood Sampling', 
                  answer: 'option1'
              },  
              {
                  description: 'Use of Nitrazine/Fern Test', 
                  answer: 'option1'
              }      
      ]
      };  
      
var laborskillsPAIN= {
          questions: [
              {
                  description: 'Epidural Anesthesia', 
                  answer: 'option1'
              }, 
              {
                  description: 'General Anesthesia', 
                  answer: 'option1'
              },  
              {
                  description: 'Spinal Anesthesia', 
                  answer: 'option1'
              },  
              {
                  description: 'Response to Pain Management', 
                  answer: 'option1'
              }    
      ]
      };  
var laborskillsFETAL= {
          questions: [
              {
                  description: '  External', 
                  answer: 'option1'
              }, 
              {
                  description: 'IUPC Placement/Monitoring', 
                  answer: 'option1'
              },  
              {
                  description: 'Spiral Electrode Placement', 
                  answer: 'option1'
              },  
              {
                  description: 'Identify, Document & Treat Abnormal FHR Patterns', 
                  answer: 'option1'
              }    
      ]
      };  
var laborskillsLABOR  = {
          questions: [
              {
                  description: 'Auscultate Fetal Heart Tones', 
                  answer: 'option1'
              }, 
              {
                  description: 'Determine Fetal Position', 
                  answer: 'option1'
              },  
              {
                  description: 'Assess Contraction Characteristics', 
                  answer: 'option1'
              },  
              {
                  description: 'Assess Status of Membranes', 
                  answer: 'option1'
              },  
              {
                  description: 'Assess Station/Dilation/Effacement', 
                  answer: 'option1'
              }, 
              {
                  description: 'Positioning', 
                  answer: 'option1'
              },  
              {
                  description: "Leopold's Maneuver", 
                  answer: 'option1'
              },  
              {
                  description: 'Assess for Reflexes/Clonus', 
                  answer: 'option1'
              },  
              {
                  description: 'Bladder Catheterization', 
                  answer: 'option1'
              },  
              {
                  description: 'Amnioinfusion (Assist or Perform)', 
                  answer: 'option1'
              },  
              {
                  description: 'Recognize Complications of AROM', 
                  answer: 'option1'
              }         
      ]
      }; 
      
var laborskillsDELIVERY= {
          questions: [
              {
                  description: 'Delivery Table Set Up', 
                  answer: 'option1'
              }, 
              {
                  description: 'Circulate Vaginal Delivery', 
                  answer: 'option1'
              },  
              {
                  description: 'Circulate C - Section', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub C - Section', 
                  answer: 'option1'
              }    
      ]
      };  
var laborskillsNEONATAL= {
          questions: [
              {
                  description: 'Radiant Warmer', 
                  answer: 'option1'
              }, 
              {
                  description: 'APGAR Scores', 
                  answer: 'option1'
              },  
              {
                  description: 'Neonatal Vital Signs', 
                  answer: 'option1'
              },  
              {
                  description: 'Neonatal Resuscitation', 
                  answer: 'option1'
              },  
              {
                  description: 'Naso/Oropharyngeal Suctioning', 
                  answer: 'option1'
              },  
              {
                  description: 'Bulb Syringe Suction', 
                  answer: 'option1'
              }      
      ]
      };     
var laborskillsCOMPLICATIONS  = {
          questions: [
              {
                  description: ' Placenta Previa/Abruptio', 
                  answer: 'option1'
              }, 
              {
                  description: 'Asthma', 
                  answer: 'option1'
              },  
              {
                  description: 'Cardiac Disease', 
                  answer: 'option1'
              },  
              {
                  description: 'Chorioamnionitis', 
                  answer: 'option1'
              },  
              {
                  description: 'Diabetes', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pregnancy Induced Hypertension', 
                  answer: 'option1'
              },  
              {
                  description: 'HELLP', 
                  answer: 'option1'
              },  
              {
                  description: 'Hemolytic Anemia', 
                  answer: 'option1'
              },  
              {
                  description: 'Hemorrhage', 
                  answer: 'option1'
              },  
              {
                  description: 'HIV Positive', 
                  answer: 'option1'
              },  
              {
                  description: 'HBV Disease', 
                  answer: 'option1'
              },  
              {
                  description: 'Malpresentations', 
                  answer: 'option1'
              },  
              {
                  description: 'Multiple Gestation', 
                  answer: 'option1'
              },  
              {
                  description: 'Pre-Term Labor', 
                  answer: 'option1'
              },  
              {
                  description: 'Fetal Demise', 
                  answer: 'option1'
              },  
              {
                  description: 'Rh Disease', 
                  answer: 'option1'
              }             
      ]
      }; 
var laborskillsPARTUM  = {
          questions: [
              {
                  description: 'Vaginal Delivery', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cesarean Section', 
                  answer: 'option1'
              },  
              {
                  description: 'Anesthesia - General', 
                  answer: 'option1'
              },  
              {
                  description: 'Anesthesia - Spinal', 
                  answer: 'option1'
              },  
              {
                  description: 'Bladder Distention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Breast Milk Collection and Storage', 
                  answer: 'option1'
              },  
              {
                  description: 'Breast Pump', 
                  answer: 'option1'
              },  
              {
                  description: 'Breastfeeding - Latch Score', 
                  answer: 'option1'
              },  
              {
                  description: 'Breastfeeding - Supplemental Feeding', 
                  answer: 'option1'
              },  
              {
                  description: 'Breastfeeding Support', 
                  answer: 'option1'
              },  
              {
                  description: 'Contraceptive Education', 
                  answer: 'option1'
              },  
              {
                  description: 'Epidural/PCA', 
                  answer: 'option1'
              },  
              {
                  description: "Homan's Sign", 
                  answer: 'option1'
              },  
              {
                  description: 'Multiple Births', 
                  answer: 'option1'
              },  
              {
                  description: 'Parent/Infant Interaction/Attachment', 
                  answer: 'option1'
              },  
              {
                  description: 'Post Partum Hemorrhage', 
                  answer: 'option1'
              },  
              {
                  description: 'Pregnancy Induced Hypertension', 
                  answer: 'option1'
              }               
      ]
      }; 
      
      
var laborskillsMEDICATIONS= {
          questions: [
              {
                  description: 'Antibiotics/Antivirals', 
                  answer: 'option1'
              }, 
              {
                  description: 'Antihypertensives', 
                  answer: 'option1'
              },  
              {
                  description: 'Antiseizure', 
                  answer: 'option1'
              },  
              {
                  description: 'Betamethasone', 
                  answer: 'option1'
              }, 
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },  
              {
                  description: 'Magnesium Sulfate', 
                  answer: 'option1'
              },  
              {
                  description: 'Methergine', 
                  answer: 'option1'
              }, 
              {
                  description: 'Opioids and Reversal Agents', 
                  answer: 'option1'
              },  
              {
                  description: 'Pitocin', 
                  answer: 'option1'
              },  
              {
                  description: 'Terbutaline', 
                  answer: 'option1'
              }       
      ]
      };  
var laborskillsTHERAPY= {
          questions: [
              {
                  description: 'Start IVs', 
                  answer: 'option1'
              }, 
              {
                  description: 'IV Management', 
                  answer: 'option1'
              },  
              {
                  description: 'Blood Product Administration', 
                  answer: 'option1'
              }  
      ]
      };  
var laborskillsNEWBORN = {
          questions: [
              {
                  description: ' Newborn Assessment', 
                  answer: 'option1'
              }, 
              {
                  description: 'Infant Vital Signs', 
                  answer: 'option1'
              },  
              {
                  description: 'Ballard Scale/Dubowitz', 
                  answer: 'option1'
              }, 
              {
                  description: 'Car Seat Education', 
                  answer: 'option1'
              },  
              {
                  description: 'Circumcision Care/Teach to Parents', 
                  answer: 'option1'
              } , 
              {
                  description: 'Cord Care/Teach to Parents', 
                  answer: 'option1'
              },  
              {
                  description: 'Immunizations - Infant', 
                  answer: 'option1'
              },  
              {
                  description: 'Infant Caretaking Skills', 
                  answer: 'option1'
              },  
              {
                  description: 'Infant Identification and Security', 
                  answer: 'option1'
              },  
              {
                  description: 'Metabolic Screen', 
                  answer: 'option1'
              },  
              {
                  description: 'Jaundice/Bilirubin', 
                  answer: 'option1'
              },  
              {
                  description: 'Phototherapy', 
                  answer: 'option1'
              },  
              {
                  description: 'Thermoregulation', 
                  answer: 'option1'
              }     
      ]
      };  
      
var laborskillsPROFESSIONAL = {
          questions: [
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Experience in a "Baby Friendly" Facility', 
                  answer: 'option1'
              },  
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              },  
              {
                  description: 'Parent/Family Teaching', 
                  answer: 'option1'
              } , 
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              },  
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              },  
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              },  
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              },  
              {
                  description: 'Interpretation and Communication of Lab Values', 
                  answer: 'option1'
              }     
      ]
      };  
var laborskillsEMR= {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },  
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              }, 
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },  
              {
                  description: 'Meditech', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              },  
              {
                  description: 'Bar Coding for Medication Administration', 
                  answer: 'option1'
              }     
      ]
      };  
var laborskillsEMRConversion= {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              } 
      ]
      };  
     
    

      
      
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ======================== Medical/Surgical Skills Checklist Form No-12 ==========================//    
      
var medicalCardiac = {
          questions: [
              {
                  description: 'Angina', 
                  answer: 'option1'
              },
              {
                  description: 'Post Acute MI', 
                  answer: 'option1'
              },
              
              {
                  description: 'Congestive Heart Failure', 
                  answer: 'option1'
              },
              {
                  description: 'Post Cardiac Cath', 
                  answer: 'option1'
              },
              {
                  description: 'Post Cardiac Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Aneurysm', 
                  answer: 'option1'
              },
              {
                  description: 'Carotid Endarterectomy', 
                  answer: 'option1'
              },
              {
                  description: 'Post Vascular Surgery', 
                  answer: 'option1'
              },
{
                  description: 'Post Cardiac Transplant', 
                  answer: 'option1'
              }            
      ]
      };      
var medicalPULMONARY = {
          questions: [
              {
                  description: 'Pneumonia', 
                  answer: 'option1'
              },
              {
                  description: 'COPD', 
                  answer: 'option1'
              },
              {
                  description: 'Tuberculosis', 
                  answer: 'option1'
              },
              {
                  description: 'Pulmonary Embolism', 
                  answer: 'option1'
              },
              {
                  description: 'Tracheostomy Management', 
                  answer: 'option1'
              },
              {
                  description: 'CPAP/BiPAP', 
                  answer: 'option1'
              },
              {
                  description: 'Interpretation of Arterial Blood Gases', 
                  answer: 'option1'
              },
              {
                  description: 'Post Lung Transplant', 
                  answer: 'option1'
              }    
      ]
      };      
var medicalNeurological  = {
          questions: [
              {
                  description: 'Stroke Scale Assessment', 
                  answer: 'option1'
              },
              {
                  description: 'Traumatic Brain Injury', 
                  answer: 'option1'
              },
              {
                  description: 'CVA', 
                  answer: 'option1'
              },
              {
                  description: 'Post Craniotomy', 
                  answer: 'option1'
              },
              {
                  description: 'Seizure Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Spinal Cord Injuries', 
                  answer: 'option1'
              },
              {
                  description: 'Mood Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Substance Withdrawal  ', 
                  answer: 'option1'
              }   
      ]
      }; 
      
var medicalORTHOPEDICS = {
          questions: [
              {
                  description: 'Circulation/Skin Checks', 
                  answer: 'option1'
              },
              {
                  description: 'Continuous Passive Motion Devices', 
                  answer: 'option1'
              },
              {
                  description: 'Ambulation Assistive Devices', 
                  answer: 'option1'
              },
              {
                  description: 'Prosthetics', 
                  answer: 'option1'
              },
              {
                  description: 'Cast Care', 
                  answer: 'option1'
              },
              {
                  description: 'Pin Care', 
                  answer: 'option1'
              },
              {
                  description: 'Traction', 
                  answer: 'option1'
              },
              {
                  description: 'Total Joint Replacement', 
                  answer: 'option1'
              },
              {
                  description: 'Amputation  ', 
                  answer: 'option1'
              }
      ]
      };     
var medicalGASTROINTESTINAL = {
          questions: [
              {
                  description: 'Bariatrics', 
                  answer: 'option1'
              },
              {
                  description: 'Feeding Tubes', 
                  answer: 'option1'
              },
              {
                  description: 'GI Bleeding', 
                  answer: 'option1'
              },
              {
                  description: 'Bowel Obstruction', 
                  answer: 'option1'
              },
              {
                  description: 'GI Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Liver Disease', 
                  answer: 'option1'
              },
              {
                  description: 'Pancreatitis', 
                  answer: 'option1'
              },
              {
                  description: 'Post Liver Transplant', 
                  answer: 'option1'
              },
              {
                  description: 'Post Pancreas Transplant ', 
                  answer: 'option1'
              }  
      ]
      };   
var medicalRENALEndocrine = {
          questions: [
              {
                  description: 'Arteriovenous Fistula/Shunt', 
                  answer: 'option1'
              },
               {
                  description: '3 Way Catheter & Bladder Irrigation', 
                  answer: 'option1'
              },
               {
                  description: 'Suprapubic Catheter', 
                  answer: 'option1'
              },
               {
                  description: 'Renal Failure', 
                  answer: 'option1'
              },
               {
                  description: 'Peritoneal Dialysis', 
                  answer: 'option1'
              },
               {
                  description: 'GU Surgery', 
                  answer: 'option1'
              },
               {
                  description: 'Nephrostomy Tubes', 
                  answer: 'option1'
              },
               {
                  description: 'Renal Transplant', 
                  answer: 'option1'
              },
               {
                  description: 'Management Pre/Post Hemodialysis', 
                  answer: 'option1'
              },
               {
                  description: 'Gyn Surgery  ', 
                  answer: 'option1'
              }
      ]
      };  
      
var medicalEndocrine = {
          questions: [
              {
                  description: 'Diabetes Type I', 
                  answer: 'option1'
              },
              {
                  description: 'Diabetes Type II', 
                  answer: 'option1'
              },
              {
                  description: 'Blood Glucose Monitoring', 
                  answer: 'option1'
              },
              {
                  description: 'IV Insulin Protocols', 
                  answer: 'option1'
              },
              {
                  description: 'Management of Hypoglycemia', 
                  answer: 'option1'
              },
              {
                  description: 'Indwelling Insulin Pumps', 
                  answer: 'option1'
              },
              {
                  description: 'Pituitary Disorders ', 
                  answer: 'option1'
              }   
      ]
      };      
var medicalONCOLOGY = {
          questions: [
              {
                  description: 'Chemotherapy Administration', 
                  answer: 'option1'
              },{
                  description: 'Radiation Therapy', 
                  answer: 'option1'
              },{
                  description: 'Medical Oncology', 
                  answer: 'option1'
              },{
                  description: 'Surgical Oncology', 
                  answer: 'option1'
              },{
                  description: 'Radiation Implants', 
                  answer: 'option1'
              },{
                  description: 'Bone Marrow Transplant ', 
                  answer: 'option1'
              }  
      ]
      };         
var medicalMEDICATIONS = {
          questions: [
              {
                  description: 'Antiarrhythmics', 
                  answer: 'option1'
              },
              {
                  description: 'Anticoagulants (IV, oral, & injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Depressants', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Psychotics', 
                  answer: 'option1'
              },
              {
                  description: 'Benzodiazepines', 
                  answer: 'option1'
              },
              {
                  description: 'Emergency Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Epidural Analgesia', 
                  answer: 'option1'
              },
              {
                  description: 'Inhaled Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },
              {
                  description: 'Narcotics/Opioid Analgesics (IV, oral, & injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Nitrates (Oral & Topical)', 
                  answer: 'option1'
              },
              {
                  description: 'Non-Opioid Analgesics (IV, Oral, & Injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Oral Hypoglycemics', 
                  answer: 'option1'
              },
              {
                  description: 'Patient Controlled Analgesia', 
                  answer: 'option1'
              },
              {
                  description: 'Procedural Sedation Administration', 
                  answer: 'option1'
              },
              {
                  description: 'Reversal Agents', 
                  answer: 'option1'
              },
              {
                  description: 'Steroids (IV, Oral, Inhaled)', 
                  answer: 'option1'
              },
              {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell)    ', 
                  answer: 'option1'
              }
      ]
      }; 
      
var medicalTHERAPY = {
          questions: [
              {
                  description: 'Starting IVs', 
                  answer: 'option1'
              },
              {
                  description: 'Central Line Blood Draws', 
                  answer: 'option1'
              },
              {
                  description: 'Central Line/Implanted Line Care', 
                  answer: 'option1'
              },
              {
                  description: 'TPN & Lipids', 
                  answer: 'option1'
              },
              {
                  description: 'Blood Product Administration', 
                  answer: 'option1'
              },
              {
                  description: 'Monitoring of Chemotherapy  ', 
                  answer: 'option1'
              } 
      ]
      };  
var medicalRESPONSE = {
          questions: [
              {
                  description: 'Placement of Telemetry Leads', 
                  answer: 'option1'
              },
              {
                  description: 'Rhythm Interpretation', 
                  answer: 'option1'
              },
              {
                  description: 'Dysrhythmia Management', 
                  answer: 'option1'
              },
              {
                  description: 'Obtain 12 Lead EKG', 
                  answer: 'option1'
              },
              {
                  description: 'Use of Rapid Response Teams ', 
                  answer: 'option1'
              } 
      ]
      };       
var medicalPROFESSIONAL = {
          questions: [
              {
                  description: 'Nation Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              }, 
              {
                  description: 'Patient/Family Teaching', 
                  answer: 'option1'
              }, 
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              }, 
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              }, 
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pain Assessment & Management', 
                  answer: 'option1'
              }, 
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              }, 
              {
                  description: 'Interpretation and Communication of Lab Values', 
                  answer: 'option1'
              }, 
              {
                  description: 'Wound Care /Wound Vac', 
                  answer: 'option1'
              }, 
              {
                  description: 'Specialty Beds', 
                  answer: 'option1'
              }
      ]
      };  
      
var medicalEMR = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
              },
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },
              {
                  description: 'Meditech', 
                  answer: 'option1'
              },
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              },
              {
                  description: 'Bar Coding for Medication Administration ', 
                  answer: 'option1'
              }  
      ]
      }; 
var medicalEMRConversion = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              }  
      ]
      }; 

   
      
 
////////////////////////////////////////////////////////////////////////////////////////////////////////
      // ========================  NICU Skills Checklist Skills Checklists Form No-13 ==========================//      
      
 var nicuskillsPattient = {
          questions: [
              {
                  description: 'Neonates < 28 Weeks', 
                  answer: 'option1'
              }, 
              {
                  description: 'Neonates 29 - 34 Weeks', 
                  answer: 'option1'
              },  
              {
                  description: 'Neonates > 34 Weeks', 
                  answer: 'option1'
              }  
      ]
      };               
 var nicuskillsWorksetting = {
          questions: [
              {
                  description: 'Level II NICU', 
                  answer: 'option1'
              }, 
              {
                  description: 'Level III NICU', 
                  answer: 'option1'
              },  
              {
                  description: 'Level IV NICU', 
                  answer: 'option1'
              }  
      ]
      };            
 var nicuskillsCard = {
          questions: [
              {
                  description: 'Cardiac Surgery - Pre-op', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cardiac Surgery - Immediate Post-op', 
                  answer: 'option1'
              },  
              {
                  description: 'Congenital Heart Disease/Defects', 
                  answer: 'option1'
              } , 
              {
                  description: 'CHF/Pulmonary Edema', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hemodynamic Instability', 
                  answer: 'option1'
              } 
      ]
      };  
      
 var nicuskillsPULMONARY = {
          questions: [
              {
                  description: 'Bronchopulmonary Dysplasia', 
                  answer: 'option1'
              }, 
              {
                  description: 'Diaphragmatic Hernia', 
                  answer: 'option1'
              },  
              {
                  description: 'Fresh Tracheostomy', 
                  answer: 'option1'
              } , 
              {
                  description: 'Meconium Aspiration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Persistent Pulmonary Hypertension', 
                  answer: 'option1'
              } , 
              {
                  description: 'Pneumonia', 
                  answer: 'option1'
              } , 
              {
                  description: 'Respiratory Distress Syndrome/Failure', 
                  answer: 'option1'
              } , 
              {
                  description: 'Interpretation of ABGs', 
                  answer: 'option1'
              } , 
              {
                  description: 'Assist with Intubation/Extubation', 
                  answer: 'option1'
              } , 
              {
                  description: 'Endotracheal Suctioning', 
                  answer: 'option1'
              } , 
              {
                  description: 'Chest Tube Placement and Management', 
                  answer: 'option1'
              } , 
              {
                  description: 'Modes of Ventilation (AC/PC/SIMV/CPAP/BiPAP)', 
                  answer: 'option1'
              } , 
              {
                  description: 'High Frequency Ventilation', 
                  answer: 'option1'
              } , 
              {
                  description: 'Inhaled NO', 
                  answer: 'option1'
              } , 
              {
                  description: 'ECMO ', 
                  answer: 'option1'
              } 
              
              ]
      };   
 var nicuskillsNEUROLOGIC = {
          questions: [
              {
                  description: 'Ballard/Dubowitz', 
                  answer: 'option1'
              }, 
              {
                  description: 'Reflexes Based on Gestational Age', 
                  answer: 'option1'
              },  
              {
                  description: 'Hydrocephalus', 
                  answer: 'option1'
              },  
              {
                  description: 'Intraventricular Hemorrhage', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Meningocele/Myelomeningocele', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Neonatal Abstinence Score/Syndrome', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Seizures', 
                  answer: 'option1'
              }    
      ]
      };            
 var nicuskillsGASTROINTESTINAL = {
          questions: [
              {
                  description: 'Colostomy/Ileostomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Gastroschisis/Omphalocele', 
                  answer: 'option1'
              },  
              {
                  description: 'GI Bleeding', 
                  answer: 'option1'
              },  
              {
                  description: 'Necrotizing Enterocolitis', 
                  answer: 'option1'
              }  ,  
              
              {
                  description: 'Post Abdominal Procedure', 
                  answer: 'option1'
              }    
      ]
      };  
         
 var nicuskillsFEEDINGS = {
          questions: [
              {
                  description: 'Breast Milk Handling/Storage', 
                  answer: 'option1'
              }, 
              {
                  description: 'Breast Pump', 
                  answer: 'option1'
              },  
              {
                  description: 'Gavage Feedings', 
                  answer: 'option1'
              },  
              {
                  description: 'NG/OG/NJ Tube Placement and Management', 
                  answer: 'option1'
              }  
      ]
      };  
 var nicuskillsRENAL = {
          questions: [
              {
                  description: 'Circumcision Care', 
                  answer: 'option1'
              }, 
              {
                  description: 'Genetic Disorders', 
                  answer: 'option1'
              },  
              {
                  description: 'Hypo/Hyperglycemia', 
                  answer: 'option1'
              },  
              {
                  description: 'Infant of Diabetic Mother', 
                  answer: 'option1'
              },  
              {
                  description: 'Malformations of the GU Tract/Kidney', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Phototherapy', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Renal Failure', 
                  answer: 'option1'
              }    
      ]
      };  
 var nicuskillsINFECTIOUS = {
          questions: [
              {
                  description: 'Neonatal Sepsis', 
                  answer: 'option1'
              }, 
              {
                  description: 'Septic Work Up', 
                  answer: 'option1'
              },  
              {
                  description: 'Assist with Lumbar Puncture', 
                  answer: 'option1'
              },  
              
      ]
      };  
      
 var nicuskillsMEDICATIONS= {
          questions: [
              {
                  description: 'Calculation of Neonatal Dosages', 
                  answer: 'option1'
              }, 
              {
                  description: 'Antibiotics/Antivirals', 
                  answer: 'option1'
              },  
              {
                  description: 'Anticonvulsants', 
                  answer: 'option1'
              },  
              {
                  description: 'Immunizations', 
                  answer: 'option1'
              },  
              {
                  description: 'Digoxin', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'IV Vasopressors', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Prostaglandin', 
                  answer: 'option1'
              },  
              {
                  description: 'Bronchodilators', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Steroids', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Caffeine', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Surfactant', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell)', 
                  answer: 'option1'
              }        
      ]
      };  
 var nicuskillsTHERAPY = {
          questions: [
              {
                  description: 'Administration of Blood/Blood Products', 
                  answer: 'option1'
              }, 
              {
                  description: 'Central Line Catheter/Dressings', 
                  answer: 'option1'
              },  
              {
                  description: 'Management of UAC/UVC Lines', 
                  answer: 'option1'
              },  
              {
                  description: 'Radial Arterial Lines', 
                  answer: 'option1'
              },  
              {
                  description: 'Start IVs', 
                  answer: 'option1'
              }     
              
      ]
      }; 
 var nicuskillsCARDIAC = {
          questions: [
              {
                  description: 'Attend High Risk Deliveries', 
                  answer: 'option1'
              }, 
              {
                  description: 'Preparation for Transport', 
                  answer: 'option1'
              },  
              {
                  description: 'Transport Neonate', 
                  answer: 'option1'
              },  
              {
                  description: 'Rhythm Interpretation', 
                  answer: 'option1'
              },  
              {
                  description: 'Dysrhythmia Management', 
                  answer: 'option1'
              }     
              
      ]
      }; 
      
 var nicuskillsKNOWLEDGE = {
          questions: [
              {
                  description: ' National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Bereavement/Postmortem Care', 
                  answer: 'option1'
              },  
              {
                  description: 'Neonatal Skin Care', 
                  answer: 'option1'
              },  
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              },  
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              },  
              {
                  description: 'Patient/Family Teaching', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Pain Assessment & Management', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              }  ,  
              {
                  description: 'Interpretation and Communication of Lab Values', 
                  answer: 'option1'
              }           
      ]
      };    
 var nicuskillsEMR = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },  
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },  
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },  
              {
                  description: 'Meditech', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              },  
              {
                  description: 'Bar Coding for Medication Administration', 
                  answer: 'option1'
              }          
              
      ]
      }; 
 var nicuskillsEMRConversion= {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              } 
      ]
      };   
 
  
 
      
      
      
 
      
       
      
////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========================  PACU Skills Checklist Form No-15 ==========================//         
      
  
      
var  pacuCARDIOVASCULAR = {
          questions: [
              {
                  description: '  Open Heart Recovery', 
                  answer: 'option1'
              }, 
              {
                  description: 'AAA Repair', 
                  answer: 'option1'
              }, 
              {
                  description: 'Vascular Surgery', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pacemaker-Permanent & Temporary', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cardioversion', 
                  answer: 'option1'
              }, 
              {
                  description: 'AICD Insertion', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cardiac Arrest', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cardiac Tamponade', 
                  answer: 'option1'
              }, 
              {
                  description: 'CHF/Pulmonary Edema', 
                  answer: 'option1'
              }, 
              {
                  description: 'Abnormal Heart Sounds/Murmurs', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pulses/Circulation Checks  ', 
                  answer: 'option1'
              }
      ]
      };          
var  pacuPULMONARY = {
          questions: [
              {
                  description: 'Ventilator Management', 
                  answer: 'option1'
              }, 
              {
                  description: 'Fresh Tracheostomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Thoracotomy/Lobectomy/Pneumonectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pneumothorax/Hemothorax', 
                  answer: 'option1'
              }, 
              {
                  description: 'Laryngospasm', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pulmonary Embolism', 
                  answer: 'option1'
              }, 

              {
                  description: 'COPD', 
                  answer: 'option1'
              }, 
              {
                  description: 'ABG Interpretation', 
                  answer: 'option1'
              } 
      ]
      };  
var  pacuNEUROLOGIC = {
          questions: [
              {
                  description: 'Post Craniotomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anterior/Posterior Spinal Fusion', 
                  answer: 'option1'
              }, 
              {
                  description: 'Carotid Endardarectomy', 
                  answer: 'option1'
              }, 

              {
                  description: 'Spine Surgery', 
                  answer: 'option1'
              }, 
              {
                  description: 'CVA', 
                  answer: 'option1'
              }, 
              {
                  description: 'Stroke Scale', 
                  answer: 'option1'
              }, 
              {
                  description: 'Glascow Coma Scale', 
                  answer: 'option1'
              }, 
              {
                  description: 'Spinal Precautions', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hypothermia Protocol', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hypo/Hyperthermia Blanket', 
                  answer: 'option1'
              }, 
              {
                  description: 'Sedation Scales/Levels ', 
                  answer: 'option1'
              }    
      ]
      };
      
      
var  pacuGASTROINTESTINAL = {
          questions: [
              {
                  description: 'Pancreas/Liver Transplant', 
                  answer: 'option1'
              }, 
              {
                  description: 'Colon Surgery', 
                  answer: 'option1'
              }, 
              {
                  description: 'Colostomy/Ileostomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'ERCP', 
                  answer: 'option1'
              }, 
              {
                  description: 'G Tube/J Tube Management', 
                  answer: 'option1'
              }, 
              {
                  description: 'T Tube Management ', 
                  answer: 'option1'
              } 
      ]
      };     
var  pacuRENAL = {
          questions: [
              {
                  description: 'Renal Surgery', 
                  answer: 'option1'
              }, 
              {
                  description: 'TURP', 
                  answer: 'option1'
              }, 
              {
                  description: 'Arteriovenous Fistula/Shunt', 
                  answer: 'option1'
              }, 
              {
                  description: 'Nephrostomy Tubes ', 
                  answer: 'option1'
              } 
      ]
      };     
var  pacuEndocrine = {
          questions: [
              {
                  description: 'Diabetes - Hypo/Hyperglycemic Crisis', 
                  answer: 'option1'
              }, 
              {
                  description: 'IV Insulin Protocols', 
                  answer: 'option1'
              } 
      ]
      };     
  

var pacuORTHOPEDIC = {
          questions: [
              {
                  description: 'Laminectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Total Joint Replacement', 
                  answer: 'option1'
              }, 
              {
                  description: 'Amputation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Open Reduction/Internal Fixation', 
                  answer: 'option1'
              }, 
              {
                  description: 'General Orthopedic Surgeries', 
                  answer: 'option1'
              }, 
              {
                  description: 'CPM/Traction', 
                  answer: 'option1'
              }, 
              {
                  description: 'Circulation Checks ', 
                  answer: 'option1'
              } 
      ]
      };        
var  pacuWOUND = {questions: [
              {
                  description: 'Surgical Drains', 
                  answer: 'option1'
              }, 
              {
                  description: 'Wound Vac', 
                  answer: 'option1'
              }, 
              {
                  description: 'Surgical Wound Assessment', 
                  answer: 'option1'
              }, 
              {
                  description: 'Skin Assessment for Breakdown', 
                  answer: 'option1'
              }, 
              {
                  description: 'Staging Decubitus Ulcers', 
                  answer: 'option1'
              } 
      ]
      };     
var  pacuMEDICATIONS = {
          questions: [
              {
                  description: 'Procedural Sedation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anesthesia Medications', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Arrhythmics', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anticoagulants', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Seizure Medications', 
                  answer: 'option1'
              }, 
              {
                  description: 'Benzodiazepines', 
                  answer: 'option1'
              }, 
              {
                  description: 'Emergency Medications', 
                  answer: 'option1'
              }, 
              {
                  description: 'Insulin', 
                  answer: 'option1'
              }, 
              {
                  description: 'Narcotics/Opioid Analgesics', 
                  answer: 'option1'
              }, 
              {
                  description: 'Nitrates', 
                  answer: 'option1'
              }, 
              {
                  description: 'Non-Opioid Analgesics', 
                  answer: 'option1'
              }, 
              {
                  description: 'Reversal Agents', 
                  answer: 'option1'
              }, 
              {
                  description: 'Steroids', 
                  answer: 'option1'
              }, 
              {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell) ', 
                  answer: 'option1'
              } 
      ]
      };     
   
var  pacuTHERAPY = {
          questions: [
              {
                  description: 'Starting IVs', 
                  answer: 'option1'
              }, 
              {
                  description: 'Central Line Blood Draws', 
                  answer: 'option1'
              }, 
              {
                  description: 'Central Line/Implanted Line Care', 
                  answer: 'option1'
              }, 
              {
                  description: 'Blood Product Administration', 
                  answer: 'option1'
              } 
      ]
      };           
var  pacuCARDIAC = {
          questions: [
              {
                  description: 'Malignant Hyperthermia', 
                  answer: 'option1'
              }, 
              {
                  description: 'Dysrhythmia Interpretation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Dysrhythmia Management', 
                  answer: 'option1'
              }, 
              {
                  description: '12 Lead EKG', 
                  answer: 'option1'
              } 
      ]
      };     
var  pacuPROFESSIONAL = {
          questions: [
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pain Assessment & Management', 
                  answer: 'option1'
              }, 
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              }, 
              {
                  description: 'Interpretation and Communication of Lab Values', 
                  answer: 'option1'
              }, 
              {
                  description: 'Specialty Beds', 
                  answer: 'option1'
              } 
      ]
      };     
      

var  pacuEMR = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cerner', 
                  answer: 'option1'
              }, 
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              }, 
              {
                  description: 'McKesson', 
                  answer: 'option1'
              }, 
              {
                  description: 'Meditech', 
                  answer: 'option1'
              }, 
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              }, 
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              }, 
              {
                  description: 'Bar Coding for Medication Administration  ', 
                  answer: 'option1'
              } 
      ]
      };        
var  pacuEMRConversion = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              }
      ]
      };     
      
  
      
      
        

      
      
      
      
       ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========================  Pediatric Emergency Department Skills Checklist Form No-16==========================//         
      
    
var pediatricCARDIOVASCULAR = {
          questions: [
              {
                  description: 'Cardiac Anomalies', 
                  answer: 'option1'
              }, 
              {
                  description: 'CHF/Pulmonary Edema', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cardiogenic Shock', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cardioversion', 
                  answer: 'option1'
              }, 
              {
                  description: 'Heart Sounds', 
                  answer: 'option1'
              } 
      ]
      };        
var pediatricPULMONARY = {
          questions: [
              {
                  description: 'Reactive Airway Disease', 
                  answer: 'option1'
              }, 
              {
                  description: 'Croup', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pneumonia', 
                  answer: 'option1'
              }, 
              {
                  description: 'Epiglottitis', 
                  answer: 'option1'
              }, 
              {
                  description: 'Aspiration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Airway Obstruction', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hemo/Pneumothorax', 
                  answer: 'option1'
              }, 
              {
                  description: 'Chest Tube Placement/Management', 
                  answer: 'option1'
              }, 
              {
                  description: 'ABG Interpretation', 
                  answer: 'option1'
              } 
      ]
      };       
var pediatricNEUROLOGICAL = {
          questions: [
              {
                  description: 'Meningitis/Encephalitis', 
                  answer: 'option1'
              }, 
              {
                  description: 'Seizures-Febrile/Epileptic', 
                  answer: 'option1'
              }, 
              {
                  description: 'Lumbar Puncture', 
                  answer: 'option1'
              }, 
              {
                  description: 'Migraine ', 
                  answer: 'option1'
              } 
      ]
      };  
      
      
      
var pediatricORTHOPEDIC = {
          questions: [
              {
                  description: 'Fractures/Casting', 
                  answer: 'option1'
              }, 
              {
                  description: 'Open/Complex Fractures', 
                  answer: 'option1'
              }, 
              {
                  description: "Nursemaid's Elbow", 
                  answer: 'option1'
              }, 
              {
                  description: 'Apply/Manage Splints', 
                  answer: 'option1'
              }, 
              {
                  description: 'Circulation Checks', 
                  answer: 'option1'
              }, 
              {
                  description: 'Crutch Walking', 
                  answer: 'option1'
              }, 
              {
                  description: 'Car Seat Instruction for Casted Patient ', 
                  answer: 'option1'
              }
      ]
      };  
var pediatricGASTROINTESTINAL = {
          questions: [
              {
                  description: 'Abdominal Trauma/Peritoneal Lavage', 
                  answer: 'option1'
              }, 
              {
                  description: 'Abdominal Pain', 
                  answer: 'option1'
              }, 
              {
                  description: 'Constipation', 
                  answer: 'option1'
              }, 
              {
                  description: 'GI Bleeding', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hepatitis/Liver Failure', 
                  answer: 'option1'
              }, 
              {
                  description: 'Poison Ingestion ', 
                  answer: 'option1'
              } 
      ]
      };      
var pediatricENDOCRINE = {
    questions: [
              {
                  description: 'Hypoglycemia', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hyperglycemia', 
                  answer: 'option1'
              }, 
              {
                  description: 'DKA', 
                  answer: 'option1'
              }
      ]
      };   
      
      
      
     
var pediatricGENITOURINARY = {
          questions: [
              {
                  description: 'Acute Renal Failure', 
                  answer: 'option1'
              }, 
              {
                  description: 'UTI/Pyelonephritis', 
                  answer: 'option1'
              }, 
              {
                  description: 'Renal Trauma', 
                  answer: 'option1'
              }, 
              {
                  description: 'Testicular Torsion ', 
                  answer: 'option1'
              } 
      ]
      };         
var pediatricOBGYN = {
          questions: [
              {
                  description: 'Menstrual Pain', 
                  answer: 'option1'
              }, 
              {
                  description: 'Ovarian Cyst', 
                  answer: 'option1'
              }, 
              {
                  description: 'Ectopic Pregnancy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pelvic Inflammatory Disease/STD', 
                  answer: 'option1'
              }, 
              {
                  description: 'Sexual Assault', 
                  answer: 'option1'
              }, 
              {
                  description: 'Reporting Acts of Violence ', 
                  answer: 'option1'
              } 
      ]
      };        
var pediatricEENT = {
          questions: [
              {
                  description: 'Foreign Body - Eye', 
                  answer: 'option1'
              }, 
              {
                  description: 'Foreign Body - Ear', 
                  answer: 'option1'
              }, 
              {
                  description: 'Foreign Body - Nose', 
                  answer: 'option1'
              }, 
              {
                  description: 'Epistaxis', 
                  answer: 'option1'
              } 
      ]
      };   
      
      
            
     
var pediatricTRAUMA = {
          questions: [
              {
                  description: 'Glasgow Coma/Pediatric Trauma Scale', 
                  answer: 'option1'
              }, 
              {
                  description: 'Trauma Code', 
                  answer: 'option1'
              }, 
              {
                  description: 'Trauma Team Member', 
                  answer: 'option1'
              }, 
              {
                  description: 'Brain Injury', 
                  answer: 'option1'
              }, 
              {
                  description: 'Spinal Cord Injury', 
                  answer: 'option1'
              }, 
              {
                  description: 'Spinal Precautions', 
                  answer: 'option1'
              }, 
              {
                  description: 'Facial/Dental Trauma', 
                  answer: 'option1'
              }, 
              {
                  description: 'Penetrating Trauma', 
                  answer: 'option1'
              }, 
              {
                  description: 'Blunt Trauma', 
                  answer: 'option1'
              }, 
              {
                  description: 'Traumatic Amputation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Hypovolemic Shock', 
                  answer: 'option1'
              }, 
              {
                  description: 'Neurogenic Shock', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anaphylactic Shock', 
                  answer: 'option1'
              }, 
              {
                  description: 'Septic Shock', 
                  answer: 'option1'
              }, 
              {
                  description: 'Burns - 2nd Degree', 
                  answer: 'option1'
              }, 
              {
                  description: 'Burns - 3rd Degree', 
                  answer: 'option1'
              } 
      ]
      };  
var pediatricInfectious = {
          questions: [
              {
                  description: 'Contagious/Infectious Patients', 
                  answer: 'option1'
              }, 
              {
                  description: 'Isolation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Reporting Communicable Disease', 
                  answer: 'option1'
              }, 
              {
                  description: 'Neutropenia/Reverse Isolation', 
                  answer: 'option1'
              } 
      ]
      };  
var pediatricPSYCHIATRIC = {
          questions: [
              {
                  description: 'Drug /ETOH Overdose/Withdrawal', 
                  answer: 'option1'
              }, 
              {
                  description: 'Psychiatric Hold', 
                  answer: 'option1'
              }, 
              {
                  description: 'Suicidal Patient ', 
                  answer: 'option1'
              } 
      ]
      };  
      
      
     
var pediatricMEDICATIONS = {
          questions: [
              {
                  description: 'Pediatric Dosage Calculations', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Arrhythmics', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anticoagulants (IV, Oral & Injection)', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Psychotics', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anti-Seizure Medications', 
                  answer: 'option1'
              }, 
              {
                  description: 'Benzodiazepines', 
                  answer: 'option1'
              }, 
              {
                  description: 'Continuous IV Paralytics', 
                  answer: 'option1'
              }, 
              {
                  description: 'Continuous IV Sedation', 
                  answer: 'option1'
              }, 
              {
                  description: 'Procedural Sedation - Administration', 
                  answer: 'option1'
              }, 
              {
                  description: 'Ketamine', 
                  answer: 'option1'
              }, 
              {
                  description: 'Emergency Medications', 
                  answer: 'option1'
              }, 
              {
                  description: 'Inhaled Medications', 
                  answer: 'option1'
              }, 
              {
                  description: 'Insulin', 
                  answer: 'option1'
              }, 
              {
                  description: 'IV Vasopressors', 
                  answer: 'option1'
              }, 
              {
                  description: 'Narcotics/Opioid Analgesics (IV, Oral & Injection)', 
                  answer: 'option1'
              }, 
              {
                  description: 'Reversal Agents', 
                  answer: 'option1'
              }, 
              {
                  description: 'Steroids (IV, Oral & Inhaled)', 
                  answer: 'option1'
              }, 
              {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell) ', 
                  answer: 'option1'
              }  
      ]
      };         
var pediatricPROFESSIONAL = {
          questions: [
              {
                  description: 'Recognizing/Reporting Abuse', 
                  answer: 'option1'
              }, 
              {
                  description: 'Triage', 
                  answer: 'option1'
              }, 
              {
                  description: 'Ambulance/Paramedic Radio', 
                  answer: 'option1'
              }, 
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              }, 
              {
                  description: 'EMTALA', 
                  answer: 'option1'
              }, 
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              }, 
              {
                  description: 'Patient Family Teaching', 
                  answer: 'option1'
              }, 
              {
                  description: 'Car Seat Specific Standards/Teaching', 
                  answer: 'option1'
              }, 
              {
                  description: 'Age/Developmentally Specific/Population Based Care', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pain Assessment and Management - Verbal/Non-Verbal', 
                  answer: 'option1'
              }, 
              {
                  description: 'Interpretation and Communication of Lab Values ', 
                  answer: 'option1'
              } 
      ]
      };      
var pediatricEMR = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cerner', 
                  answer: 'option1'
              }, 
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              }, 
              {
                  description: 'Meditech', 
                  answer: 'option1'
              }, 
              {
                  description: 'McKesson', 
                  answer: 'option1'
              }, 
              {
                  description: 'Allscripts', 
                  answer: 'option1'
              }, 
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              }, 
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              }, 
              {
                  description: 'Bar Coding for Medication Administration  ', 
                  answer: 'option1'
              }
      ]
      };      
var pediatricEMRConversion = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1',
                  name:'emrname'
              }
      ]
      };  
     
      
      
      
      
      
      
////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========================  Pediatric Emergency Department Skills Checklist Form No-17==========================//          
       
var skillspediatricWORK  = {
          questions: [
              {
                  description: 'Pediatric MedSurg', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Pediatric Step Down/Telemetry', 
                  answer: 'option1'
              },
              {
                  description: 'Pediatric Oncology', 
                  answer: 'option1'
              },
              {
                  description: 'Pediatric Ortho', 
                  answer: 'option1'
              },
              {
                  description: 'Pediatric Neuro ', 
                  answer: 'option1'
              }
      ]
      };   
var skillspediatricCARDIOVASCULAR  = {
          questions: [
              {
                  description: 'Congenital Heart Disease/Repair', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Pre Cardiac Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Post Cardiac Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Heart Sounds', 
                  answer: 'option1'
              }
      ]
      };      
var skillspediatricPULMONARY  = {
          questions: [
              {
                  description: 'Reactive Airway Disease', 
                  answer: 'option1'
              },
              {
                  description: 'RSV', 
                  answer: 'option1'
              },
              {
                  description: 'Tuberculosis', 
                  answer: 'option1'
              },
              {
                  description: 'Esophageal Atresia', 
                  answer: 'option1'
              },
              {
                  description: 'Epiglottitis', 
                  answer: 'option1'
              },
              {
                  description: 'Tonsillitis', 
                  answer: 'option1'
              },
              {
                  description: 'Laryngotracheobronchitis (Croup)', 
                  answer: 'option1'
              },
              {
                  description: 'ENT Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Oxygen Delivery Systems', 
                  answer: 'option1'
              },
              {
                  description: 'Tracheostomy Management', 
                  answer: 'option1'
              },
              {
                  description: 'Oral Suctioning', 
                  answer: 'option1'
              },
              {
                  description: 'Deep Suctioning', 
                  answer: 'option1'
              },
              {
                  description: 'Management of Chest Tubes', 
                  answer: 'option1'
              },
              {
                  description: 'Apnea Monitor', 
                  answer: 'option1'
              },
              {
                  description: 'Home Ventilator Therapy ', 
                  answer: 'option1'
              }
      ]
      };  
    
var skillspediatricNEUROLOGIC  = {
          questions: [
              {
                  description: 'Brain Injury', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Spinal Cord Injury', 
                  answer: 'option1'
              },
              {
                  description: 'Seizure Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Meningitis', 
                  answer: 'option1'
              },
              {
                  description: 'Neuromuscular Disease', 
                  answer: 'option1'
              },
              {
                  description: 'Extremity Fracture/Cast', 
                  answer: 'option1'
              },
              {
                  description: 'Post Vertebral Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Traction - General', 
                  answer: 'option1'
              },
              {
                  description: 'Traction - Halo', 
                  answer: 'option1'
              },
              {
                  description: 'Pin Care', 
                  answer: 'option1'
              },
              {
                  description: 'VP Shunts/Internal/External ', 
                  answer: 'option1'
              }
      ]
      };      
var skillspediatricGASTROINTESTINAL  = {
          questions: [
              {
                  description: 'Cleft Lip/Palate', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Inflammatory Bowel Disease', 
                  answer: 'option1'
              },
              {
                  description: 'Colostomy/Ileostomy', 
                  answer: 'option1'
              },
              {
                  description: 'Surgical Drains', 
                  answer: 'option1'
              },
              {
                  description: 'Failure to Thrive', 
                  answer: 'option1'
              },
              {
                  description: 'Feeding Intolerance', 
                  answer: 'option1'
              },
              {
                  description: 'Gastroenteritis/Dehydration', 
                  answer: 'option1'
              },
              {
                  description: 'Bowel Obstruction', 
                  answer: 'option1'
              },
              {
                  description: 'Short Gut Syndrome', 
                  answer: 'option1'
              },
              {
                  description: 'Breastfeeding Support/Handling of Breast Milk  ', 
                  answer: 'option1'
              }
      ]
      };     
var skillspediatricRENAL  = {
          questions: [
              {
                  description: ' Circumcision', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Testicular Torsion', 
                  answer: 'option1'
              },
              {
                  description: 'Glomerulonephritis', 
                  answer: 'option1'
              },
              {
                  description: 'Renal Failure', 
                  answer: 'option1'
              },
              {
                  description: 'Renal Transplant', 
                  answer: 'option1'
              },
              {
                  description: 'Urinary Retention', 
                  answer: 'option1'
              },
              {
                  description: 'Bladder Scan', 
                  answer: 'option1'
              },
              {
                  description: 'Insertion/Management of Bladder Catheters', 
                  answer: 'option1'
              },
              {
                  description: 'Management of Suprapubic Catheters ', 
                  answer: 'option1'
              }
      ]
      }; 
   
var skillspediatricENDOCRINE  = {
          questions: [
              {
                  description: 'Diabetes - Hypo/Hyperglycemia', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Diabetic Ketoacidosis', 
                  answer: 'option1'
              },
              {
                  description: 'IV Insulin Pumps', 
                  answer: 'option1'
              },
              {
                  description: 'Indwelling Insulin Pumps', 
                  answer: 'option1'
              },
              {
                  description: 'Hyperbilirubinemia', 
                  answer: 'option1'
              },
              {
                  description: 'Bili Bed ', 
                  answer: 'option1'
              }
      ]
      };      
var skillspediatricONCOLOGY  = {
          questions: [
              {
                  description: 'Chemotherapy Administration', 
                  answer: 'option1'
                  
              },
              {
                  description: "Hodgkin's Disease", 
                  answer: 'option1'
              },
              {
                  description: 'Hemophilia', 
                  answer: 'option1'
              },
              {
                  description: 'Sickle Cell Anemia', 
                  answer: 'option1'
              },
              {
                  description: 'Leukemia', 
                  answer: 'option1'
              },
              {
                  description: 'Solid Tumors', 
                  answer: 'option1'
              },
              {
                  description: 'Bone Marrow Transplant ', 
                  answer: 'option1'
              }
      ]
      };  
var skillspediatricINFECTIOUS  = {
          questions: [
              {
                  description: 'Childhood Communicable Diseases', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Hepatitis', 
                  answer: 'option1'
              },
              {
                  description: 'HIV', 
                  answer: 'option1'
              },
              {
                  description: 'Kawasaki Disease ', 
                  answer: 'option1'
              }
      ]
      }; 
      
var skillspediatricMEDICATIONS  = {
          questions: [
              {
                  description: ' Pediatric Dosage Calculations', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              },
              {
                  description: 'Anticoagulants', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Seizure Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Benzodiazepines', 
                  answer: 'option1'
              },
              {
                  description: 'Digoxin', 
                  answer: 'option1'
              },
              {
                  description: 'Diurectics', 
                  answer: 'option1'
              },
              {
                  description: 'Emergency Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Inhaled Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },
              {
                  description: 'Narcotics/Opioid Analgesics (IV/Oral/Injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Non-Opioid Analgesics (IV/Oral/Injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Procedural Sedation - Recovery', 
                  answer: 'option1'
              },
              {
                  description: 'Reversal Agents', 
                  answer: 'option1'
              },
              {
                  description: 'Steroids (IV/Oral/Inhaled)', 
                  answer: 'option1'
              },
              {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell)  ', 
                  answer: 'option1'
              }
      ]
      };     
var skillspediatricIVTHERAPY  = {
          questions: [
              {
                  description: 'Starting IVs', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Central Line Blood Draw', 
                  answer: 'option1'
              },
              {
                  description: 'Central Line/Implanted Line Care', 
                  answer: 'option1'
              },
              {
                  description: 'TPN/Lipids', 
                  answer: 'option1'
              },
              {
                  description: 'Blood Product Administration', 
                  answer: 'option1'
              },
              {
                  description: 'Administration of Chemotherapy ', 
                  answer: 'option1'
              }
      ]
      };
var skillspediatricRESPONSE  = {
          questions: [
              {
                  description: 'Pediatric Early Warning Score (PEWS)/Rapid Response Team', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Dysrhythmia Interpretation', 
                  answer: 'option1'
              },
              {
                  description: 'Dysrhythmia Management  ', 
                  answer: 'option1'
              }
      ]
      };  
      
var skillspediatricPROFESSIONAL  = {
          questions: [
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Recognize/Report Signs of Abuse', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              },
              {
                  description: 'Normal Growth and Development', 
                  answer: 'option1'
              },
              {
                  description: 'Age Specific/Population Based Care', 
                  answer: 'option1'
              },
              {
                  description: 'Patient Family Teaching', 
                  answer: 'option1'
              },
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              },
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Reporting Communicable Diseases', 
                  answer: 'option1'
              },
              {
                  description: 'Pain Assessment & Management', 
                  answer: 'option1'
              },
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              },
              {
                  description: 'Interpretation and Communication of Lab Values  ', 
                  answer: 'option1'
              }
      ]
      };       
var skillspediatricEMR  = {
          questions: [
              {
                  description: ' Epic', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },
              {
                  description: 'Meditech', 
                  answer: 'option1'
              },
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              },
              {
                  description: 'Bar Coding for Medication Administration ', 
                  answer: 'option1'
              }
      ]
      };        
var skillspediatricEMRConversion  = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
                  
              }
      ]
      }; 
      
          
/* page17 */
this.skillspediatricWORK = skillspediatricWORK;
this.skillspediatricCARDIOVASCULAR = skillspediatricCARDIOVASCULAR;
this.skillspediatricPULMONARY = skillspediatricPULMONARY;
      
this.skillspediatricNEUROLOGIC = skillspediatricNEUROLOGIC;
this.skillspediatricGASTROINTESTINAL = skillspediatricGASTROINTESTINAL;
this.skillspediatricRENAL = skillspediatricRENAL;
      
this.skillspediatricENDOCRINE = skillspediatricENDOCRINE;
this.skillspediatricONCOLOGY = skillspediatricONCOLOGY;
this.skillspediatricINFECTIOUS = skillspediatricINFECTIOUS;
      
this.skillspediatricMEDICATIONS = skillspediatricMEDICATIONS;
this.skillspediatricIVTHERAPY = skillspediatricIVTHERAPY;
this.skillspediatricRESPONSE = skillspediatricRESPONSE;
      
this.skillspediatricPROFESSIONAL = skillspediatricPROFESSIONAL;
this.skillspediatricEMR = skillspediatricEMR;
this.skillspediatricEMRConversion = skillspediatricEMRConversion;
/* end page17*/    
      
      
 
      
      
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========================  PICU Skills Checklist Checklist Form No-18==========================//        
      
      
var PICUSkillsWORKSETTINGS   = {
          questions: [
              {
                  description: 'PICU', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Pediatric CVICU', 
                  answer: 'option1'
              },
              {
                  description: 'Pediatric Step Down', 
                  answer: 'option1'
              },
              {
                  description: 'Pediatric PACU ', 
                  answer: 'option1'
              }
      ]
      }; 
var PICUSkillsCARDIOVASCULAR   = {
          questions: [
              {
                  description: 'Congenital Heart Disease/Repair', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Post Cardiac Surgery (Directly from OR)', 
                  answer: 'option1'
              },
              {
                  description: 'Post Cardiac Surgery (NOT Directly from OR)', 
                  answer: 'option1'
              },
              {
                  description: 'Post Diagnostic/Interventional Cardiac Cath', 
                  answer: 'option1'
              },
              {
                  description: 'Heart Failure/Cardiogenic Shock', 
                  answer: 'option1'
              },
              {
                  description: 'Cardiac Transplant', 
                  answer: 'option1'
              },
              {
                  description: 'Hemodynamic Monitoring', 
                  answer: 'option1'
              },
              {
                  description: 'Arrhythmia Interpretation', 
                  answer: 'option1'
              },
              {
                  description: 'Pacemaker - Temporary/Permanent', 
                  answer: 'option1'
              },
              {
                  description: 'SVO2 Monitoring', 
                  answer: 'option1'
              },
              {
                  description: 'Intra-Aortic Balloon Pump', 
                  answer: 'option1'
              },
              {
                  description: 'Ventricular Assist Device', 
                  answer: 'option1'
              },
              {
                  description: 'ECMO  ', 
                  answer: 'option1'
              }
      ]
      };     
var PICUSkillsPULMONARY   = {
          questions: [
              {
                  description: ' Respiratory Distress Syndrome/Resp. Failure', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Reactive Airway Disease', 
                  answer: 'option1'
              },
              {
                  description: 'ENT Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Epiglottis', 
                  answer: 'option1'
              },
              {
                  description: 'Cystic Fibrosis', 
                  answer: 'option1'
              },
              {
                  description: 'Tuberculosis', 
                  answer: 'option1'
              },
              {
                  description: 'Intubation/Extubation', 
                  answer: 'option1'
              },
              {
                  description: 'Endotracheal Tube Management', 
                  answer: 'option1'
              },
              {
                  description: 'Tracheostomy Management', 
                  answer: 'option1'
              },
              {
                  description: 'Modes of Ventilation: AC/PC/SIMV/CPAP', 
                  answer: 'option1'
              },
              {
                  description: 'Modes of Ventilation: Jet/Oscillator', 
                  answer: 'option1'
              },
              {
                  description: 'Nitric Oxide', 
                  answer: 'option1'
              },
              {
                  description: 'Hemo/Pneumothorax ', 
                  answer: 'option1'
              }
      ]
      };      
var PICUSkillsNEUROLOGIC   = {
          questions: [
              {
                  description: 'Brain Injury', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Craniotomy', 
                  answer: 'option1'
              },
              {
                  description: 'Spinal Cord Injury', 
                  answer: 'option1'
              },
              {
                  description: 'Seizure Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'ICP Monitoring', 
                  answer: 'option1'
              },
              {
                  description: 'VP Shunt', 
                  answer: 'option1'
              },
              {
                  description: 'Meningitis', 
                  answer: 'option1'
              },
              {
                  description: 'Neuromuscular Disease', 
                  answer: 'option1'
              },
              {
                  description: 'Post Vertebral Surgery', 
                  answer: 'option1'
              },
              {
                  description: 'Traction - General', 
                  answer: 'option1'
              },
              {
                  description: 'Traction - Halo ', 
                  answer: 'option1'
              }
      ]
      };      
           
var PICUSkillsGASTROINTESTINAL   = {
          questions: [
              {
                  description: 'Acute Surgical Abdomen', 
                  answer: 'option1'
                  
              },
              {
                  description: 'GI Bleeding', 
                  answer: 'option1'
              },
              {
                  description: 'Pancreatitis', 
                  answer: 'option1'
              },
              {
                  description: 'Hepatic Failure', 
                  answer: 'option1'
              },
              {
                  description: 'Ostomy Management', 
                  answer: 'option1'
              },
              {
                  description: 'Management of Gastric Tubes', 
                  answer: 'option1'
              },
              {
                  description: 'Breast Milk Handling/Storage', 
                  answer: 'option1'
              }
      ]
      };      
var PICUSkillsRENAL   = {
          questions: [
              {
                  description: 'Nephrotic Syndrome', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Renal Transplant', 
                  answer: 'option1'
              },
              {
                  description: 'Renal Replacement Therapy', 
                  answer: 'option1'
              },
              {
                  description: 'Peritoneal Dialysis ', 
                  answer: 'option1'
              }
      ]
      };         
var PICUSkillsENDOCRINE   = {
          questions: [
              {
                  description: 'Diabetes - Hypo/Hyperglycemic Crisis', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Diabetic Ketoacidosis', 
                  answer: 'option1'
              },
              {
                  description: 'IV Insulin Pumps', 
                  answer: 'option1'
              },
              {
                  description: 'Indwelling Insulin Pumps ', 
                  answer: 'option1'
              }
      ]
      }; 
      
var PICUSkillsTRAUMA   = {
          questions: [
              {
                  description: 'Blunt/Penetrating Trauma', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Burns', 
                  answer: 'option1'
              },
              {
                  description: 'Craniofacial Reconstruction', 
                  answer: 'option1'
              },
              {
                  description: 'Near Drowning', 
                  answer: 'option1'
              },
              {
                  description: 'Poison Ingestion/Overdose', 
                  answer: 'option1'
              },
              {
                  description: 'Bites-Animal/Snake/Human', 
                  answer: 'option1'
              },
              {
                  description: 'Suicide Precautions', 
                  answer: 'option1'
              },
              {
                  description: 'Wound Management/VAC', 
                  answer: 'option1'
              },
              {
                  description: 'Specialty Beds', 
                  answer: 'option1'
              }
      ]
      };  
var PICUSkillsONCOLOGY   = {
          questions: [
              {
                  description: 'Bone Marrow Transplant', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Immunosuppressive Disorder', 
                  answer: 'option1'
              },
              {
                  description: 'Hemophilia Crisis', 
                  answer: 'option1'
              },
              {
                  description: 'Sickle Cell Crisis ', 
                  answer: 'option1'
              }
      ]
      };          
var PICUSkillsMEDICATIONS  = {
          questions: [
              {
                  description: 'Pediatric Dosage Calculations', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Anti-Arrhythmics', 
                  answer: 'option1'
              },
              {
                  description: 'Anticoagulants (IV, Oral & Injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Seizure Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Benzodiazepines', 
                  answer: 'option1'
              },
              {
                  description: 'Continuous IV Paralytics', 
                  answer: 'option1'
              },
              {
                  description: 'Continuous IV Sedation', 
                  answer: 'option1'
              },
              {
                  description: 'Procedural Sedation - Administration', 
                  answer: 'option1'
              },
              {
                  description: 'Diuretics', 
                  answer: 'option1'
              },
              {
                  description: 'Emergency Medication', 
                  answer: 'option1'
              },
              {
                  description: 'Inhaled Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },
              {
                  description: 'IV Vasopressors', 
                  answer: 'option1'
              },
              {
                  description: 'Narcotics/Opioid Analgesics (IV, Oral & Injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Non-Opioid Analgesics (IV, Oral & Injection)', 
                  answer: 'option1'
              },
              {
                  description: 'Reversal Agents', 
                  answer: 'option1'
              },
              {
                  description: 'Steroids (IV, Oral, Inhaled)', 
                  answer: 'option1'
              },
              {
                  description: 'Automated Medication Dispensing (i.e. Pyxis, Omnicell) ', 
                  answer: 'option1'
              }
      ]
      };   
      
var PICUSkillsTHERAPY   = {
          questions: [
              {
                  description: 'Starting IVs', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Central Line Blood Draw', 
                  answer: 'option1'
              },
              {
                  description: 'Central Line/Implanted Line Care', 
                  answer: 'option1'
              },
              {
                  description: 'TPN/Lipids', 
                  answer: 'option1'
              },
              {
                  description: 'Blood Product Administration', 
                  answer: 'option1'
              },
              {
                  description: 'Administration of Chemotherapy ', 
                  answer: 'option1'
              }
      ]
      };      
var PICUSkillsCARDIAC   = {
          questions: [
              {
                  description: 'Dysrhythmia Interpretation', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Dysrhythmia Management', 
                  answer: 'option1'
              },
              {
                  description: 'Management of Cardiac Arrest', 
                  answer: 'option1'
              },
              {
                  description: 'Shock Management', 
                  answer: 'option1'
              },
              {
                  description: 'Malignant Hyperthermia', 
                  answer: 'option1'
              },
              {
                  description: 'Multisystem Organ Failure ', 
                  answer: 'option1'
              }
      ]
      };     
var PICUSkillsPROFESSIONAL   = {
          questions: [
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Recognize/Report Signs of Abuse', 
                  answer: 'option1'
              },
              {
                  description: 'EMTALA', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              },
              {
                  description: 'Normal Growth and Development', 
                  answer: 'option1'
              },
              {
                  description: 'Age Specific/Population Based Care', 
                  answer: 'option1'
              },
              {
                  description: 'Patient Family Teaching', 
                  answer: 'option1'
              },
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              },
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Reporting Communicable Diseases', 
                  answer: 'option1'
              },
              {
                  description: 'Pain Assessment & Management', 
                  answer: 'option1'
              },
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              },
              {
                  description: 'Interpretation and Communication of Lab Values', 
                  answer: 'option1'
              }
      ]
      }; 
      
var PICUSkillsEMR  = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },
              {
                  description: 'Meditech', 
                  answer: 'option1'
              },
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option3'
              },
              {
                  description: 'Bar Coding for Medication Administration ', 
                  answer: 'option1'
              }
      ]
      };       
var PICUSkillsONCOLOGYEMRConversion   = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
                  
              }
      ]
      };      
         
           

this.PICUSkillsWORKSETTINGS = PICUSkillsWORKSETTINGS;
this.PICUSkillsCARDIOVASCULAR = PICUSkillsCARDIOVASCULAR; 
this.PICUSkillsPULMONARY = PICUSkillsPULMONARY;
      
this.PICUSkillsNEUROLOGIC = PICUSkillsNEUROLOGIC;      
this.PICUSkillsGASTROINTESTINAL = PICUSkillsGASTROINTESTINAL;
this.PICUSkillsRENAL = PICUSkillsRENAL; 
      
      
this.PICUSkillsENDOCRINE = PICUSkillsENDOCRINE;     
this.PICUSkillsTRAUMA = PICUSkillsTRAUMA;
this.PICUSkillsONCOLOGY = PICUSkillsONCOLOGY;
      
      
this.PICUSkillsMEDICATIONS = PICUSkillsMEDICATIONS;  
this.PICUSkillsTHERAPY = PICUSkillsTHERAPY;
this.PICUSkillsCARDIAC = PICUSkillsCARDIAC; 
      
      
this.PICUSkillsPROFESSIONAL = PICUSkillsPROFESSIONAL;       
this.PICUSkillsEMR = PICUSkillsEMR; 
this.PICUSkillsONCOLOGYEMRConversion = PICUSkillsONCOLOGYEMRConversion;       
       
 
      
      
      
      
      
      
         
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========================  Post-partum/Nursery Skills Checklist Form No-19==========================//        
      
      
var partumWORKSETTINGS   = {
          questions: [
              {
                  description: 'Couplet Care', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Antepartum', 
                  answer: 'option1'
              },
              {
                  description: 'Postpartum', 
                  answer: 'option1'
              },
              {
                  description: 'Newborn Nursery', 
                  answer: 'option1'
              },
              {
                  description: 'LDRP', 
                  answer: 'option1'
              }
      ]
      };       
var partumPOSTPARTUM   = {
          questions: [
              {
                  description: 'Vaginal Delivery', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Cesarian Section', 
                  answer: 'option1'
              },
              {
                  description: 'Anesthesia - General', 
                  answer: 'option1'
              },
              {
                  description: 'Anesthesia - Local', 
                  answer: 'option1'
              },
              {
                  description: 'Anesthesia - Spinal', 
                  answer: 'option1'
              },
              {
                  description: 'Bladder Distention', 
                  answer: 'option1'
              },
              {
                  description: 'Breast Milk Collection and Storage', 
                  answer: 'option1'
              },
              {
                  description: 'Breast Pump', 
                  answer: 'option1'
              },
              {
                  description: 'Breastfeeding - Latch Score', 
                  answer: 'option1'
              },
              {
                  description: 'Breastfeeding - Supplemental Feeding', 
                  answer: 'option1'
              },
              {
                  description: 'Breastfeeding Support', 
                  answer: 'option1'
              },
              {
                  description: 'Contraceptive Education', 
                  answer: 'option1'
              },
              {
                  description: 'Epidural/PCA', 
                  answer: 'option1'
              },
              {
                  description: "Homan's Sign", 
                  answer: 'option1'
              },
              {
                  description: 'Multiple Births', 
                  answer: 'option1'
              },
              {
                  description: 'Parent/Infant Interaction/Attachment', 
                  answer: 'option1'
              },
              {
                  description: 'Post Partum Hemorrhage', 
                  answer: 'option1'
              },
              {
                  description: 'Pregnancy Induced Hypertension', 
                  answer: 'option1'
              },
              {
                  description: 'Tubal Ligation  ', 
                  answer: 'option1'
              }
      ]
      };        
var partumANTEPARTUM   = {
          questions: [
              {
                  description: 'Amniocentesis', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Cardiac Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Diabetes', 
                  answer: 'option1'
              },
              {
                  description: 'Hyperemesis', 
                  answer: 'option1'
              },
              {
                  description: 'Multiple Gestation', 
                  answer: 'option1'
              },
              {
                  description: 'Non-Stress Test', 
                  answer: 'option1'
              },
              {
                  description: 'PIH/HELLP', 
                  answer: 'option1'
              },
              {
                  description: 'Placenta Previa/Abruptio', 
                  answer: 'option1'
              },
              {
                  description: 'Post- Trauma', 
                  answer: 'option1'
              },
              {
                  description: 'Pre-Term Labor/Premature Rupture of Membranes', 
                  answer: 'option1'
              },
              {
                  description: 'Substance Abuse', 
                  answer: 'option1'
              },
              {
                  description: 'FHM Interpretaton and Management', 
                  answer: 'option1'
              },
              {
                  description: 'Fetal Assessment', 
                  answer: 'option1'
              },
              {
                  description: 'Labor Assessment', 
                  answer: 'option1'
              },
              {
                  description: 'Assist with Ultrasound ', 
                  answer: 'option1'
              }
      ]
      };  
      
var partumMEDICATIONS   = {
          questions: [
              {
                  description: ' Antibiotics/Antivirals', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Antihypertensives', 
                  answer: 'option1'
              },
              {
                  description: 'Antiseizure', 
                  answer: 'option1'
              },
              {
                  description: 'Cervical Ripening Agents', 
                  answer: 'option1'
              },
              {
                  description: 'Immunizations - Mother', 
                  answer: 'option1'
              },
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },
              {
                  description: 'Magnesium Sulfate', 
                  answer: 'option1'
              },
              {
                  description: 'Methergine', 
                  answer: 'option1'
              },
              {
                  description: 'Opioids and Reversal Agents', 
                  answer: 'option1'
              },
              {
                  description: 'Pitocin', 
                  answer: 'option1'
              },
              {
                  description: 'Terbutaline ', 
                  answer: 'option1'
              }
      ]
      };          
var partumIVTHERAPY   = {
          questions: [
              {
                  description: 'Starting IVs', 
                  answer: 'option1'
                  
              },
              {
                  description: 'IV Management', 
                  answer: 'option1'
              },
              {
                  description: 'Blood Product Administration', 
                  answer: 'option1'
              }
      ]
      };        
var partumNEWBORN   = {
          questions: [
              {
                  description: ' Newborn Assessment', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Ballard Scale/Dubowitz', 
                  answer: 'option1'
              },
              {
                  description: 'Car Seat Education', 
                  answer: 'option1'
              },
              {
                  description: 'Circumcision Care/Teach to Parents', 
                  answer: 'option1'
              },
              {
                  description: 'Cord Care/Teach to Parents', 
                  answer: 'option1'
              },
              {
                  description: 'Immunizations - Infant', 
                  answer: 'option1'
              },
              {
                  description: 'Infant Caretaking Skills', 
                  answer: 'option1'
              },
              {
                  description: 'Infant Identification and Security', 
                  answer: 'option1'
              },
              {
                  description: 'Metabolic Screen', 
                  answer: 'option1'
              },
              {
                  description: 'Phototherapy', 
                  answer: 'option1'
              },
              {
                  description: 'Thermoregulation', 
                  answer: 'option1'
              }
      ]
      };   
         
var partumPROFESSIONAL   = {
          questions: [
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Experience in a "Baby Friendly" Facility', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              },
              {
                  description: 'Parent/Family Teaching', 
                  answer: 'option1'
              },
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              },
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              },
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pain Assessment & Management - Adult', 
                  answer: 'option1'
              },
              {
                  description: 'Pain Assessment & Management - Neonate', 
                  answer: 'option1'
              },
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              },
              {
                  description: 'Interpretation and Communication of Lab Values   ', 
                  answer: 'option1'
              }
      ]
      };    
var partumEMR   = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },
              {
                  description: 'Meditech', 
                  answer: 'option1'
              },
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              },
              {
                  description: 'Bar Coding for Medication Administration ', 
                  answer: 'option1'
              }
      ]
      };    
var partumEMRConversion   = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
                  
              }
      ]
      };    
  
    
 
this.partumWORKSETTINGS = partumWORKSETTINGS;       
this.partumPOSTPARTUM = partumPOSTPARTUM; 
this.partumANTEPARTUM = partumANTEPARTUM;  
      
this.partumMEDICATIONS = partumMEDICATIONS;       
this.partumIVTHERAPY = partumIVTHERAPY; 
this.partumNEWBORN = partumNEWBORN; 
      
      
this.partumPROFESSIONAL = partumPROFESSIONAL;       
this.partumEMR = partumEMR; 
this.partumEMRConversion = partumEMRConversion; 
      
      
     
      
      
          
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========================  Post-partum/Nursery Skills Checklist Form No-20==========================//        
      
      
var PsychiatricTREATMENT   = {
          questions: [
              {
                  description: 'Inpatient', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Outpatient', 
                  answer: 'option1'
              },
              {
                  description: 'Adolescent/Pediatrics', 
                  answer: 'option1'
              },
              {
                  description: 'Substance Abuse/Rehab', 
                  answer: 'option1'
              },
              {
                  description: 'Special Care Unit', 
                  answer: 'option1'
              },
              {
                  description: 'Eating Disorders Unit', 
                  answer: 'option1'
              },
              {
                  description: 'Locked Unit  ', 
                  answer: 'option1'
              }
      ]
      };        
var PsychiatricADULTDISORDERS   = {
          questions: [
              {
                  description: 'Violent Behavior', 
                  answer: 'option1'
              },
              {
                  description: 'Suicidal Ideation', 
                  answer: 'option1'
              },
              {
                  description: 'Suicidal Attempt', 
                  answer: 'option1'
              },
              {
                  description: 'Depression', 
                  answer: 'option1'
              },
              {
                  description: 'Bipolar Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Anxiety/Panic Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Psychotic Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Schizophrenia', 
                  answer: 'option1'
              },
              {
                  description: 'Post Traumatic Stress Disorder', 
                  answer: 'option1'
              },
              {
                  description: 'History of Physical/Sexual Abuse', 
                  answer: 'option1'
              },
              {
                  description: 'Alcohol/Drug Abuse', 
                  answer: 'option1'
              },
              {
                  description: "Alzheimer's Disease/Dementia", 
                  answer: 'option1'
              },
              {
                  description: 'Anorexia/Bulimia ', 
                  answer: 'option1'
              }
      ]
      };         
var partumCHILDADOLESCENT    = {
          questions: [
              {
                  description: 'Violent Behavior', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Suicidal Ideation/Self Destructive Behavior', 
                  answer: 'option1'
              },
              {
                  description: 'Suicidal Attempt', 
                  answer: 'option1'
              },
              {
                  description: 'Depression', 
                  answer: 'option1'
              },
              {
                  description: 'Bipolar Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Anxiety/Panic Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Psychotic Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Schizophrenia', 
                  answer: 'option1'
              },
              {
                  description: 'History of Physical/Sexual Abuse', 
                  answer: 'option1'
              },
              {
                  description: 'Alcohol/Drug Abuse', 
                  answer: 'option1'
              },
              {
                  description: 'Anorexia/Bulimia', 
                  answer: 'option1'
              },
              {
                  description: 'Autism', 
                  answer: 'option1'
              }
      ]
      }; 
      
var PsychiatricTREATMENTMODALITIES   = {
          questions: [
              {
                  description: 'Conduct Group Therapy', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Therapeutic Limit Setting', 
                  answer: 'option1'
              },
              {
                  description: 'Follow Behavior Modification Plans', 
                  answer: 'option1'
              },
              {
                  description: 'Medication Management', 
                  answer: 'option1'
              },
              {
                  description: 'Supervise Ancillary staff  ', 
                  answer: 'option1'
              }
      ]
      };     
var PsychiatricEQUIPMENT    = {
          questions: [
              {
                  description: 'Managing Assaultive Behavior', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Crisis Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Electroconvulsive Therapy', 
                  answer: 'option1'
              },
              {
                  description: 'Restraints', 
                  answer: 'option1'
              },
              {
                  description: 'Seclusion', 
                  answer: 'option1'
              },
              {
                  description: 'Suicide Precautions', 
                  answer: 'option1'
              },
              {
                  description: 'Knowledge of State Specific Regulations on Emergency Medications', 
                  answer: 'option1'
              },
              {
                  description: 'Head to Toe Assessment', 
                  answer: 'option1'
              },
              {
                  description: 'IV Start', 
                  answer: 'option1'
              },
              {
                  description: 'IV Maintenance ', 
                  answer: 'option1'
              }
      ]
      };            
var PsychiatricMEDICATIONS   = {
          questions: [
              {
                  description: 'Antianxiety', 
                  answer: 'option1'
              },
              {
                  description: 'Anticonvulsants', 
                  answer: 'option1'
              },
              {
                  description: 'Antidepressants', 
                  answer: 'option1'
              },
              {
                  description: 'Antipsychotics', 
                  answer: 'option1'
              },
              {
                  description: 'Lithium', 
                  answer: 'option1'
              },
              {
                  description: 'Cholinesterase Inhibitors/Memantine (Aracept/Namenda)', 
                  answer: 'option1'
              },
              {
                  description: 'Sedative/Analgesics', 
                  answer: 'option1'
              },
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },
              {
                  description: 'Anticoagulants', 
                  answer: 'option1'
              },
              {
                  description: 'Digoxin', 
                  answer: 'option1'
              },
              {
                  description: 'Antihypertensives', 
                  answer: 'option1'
              },
              {
                  description: 'Automated Medication Dispensing Systems (i.e. Pyxis, Omnicell)', 
                  answer: 'option1'
              }
      ]
      };  
         
var PsychiatricPROFESSIONAL    = {
          questions: [
              {
                  description: ' National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Use of Rapid Response Teams', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Patient/Family Teaching', 
                  answer: 'option1'
              },
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              },
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              },
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pain Assessment & Management', 
                  answer: 'option1'
              },
              {
                  description: 'Charge Experience', 
                  answer: 'option1'
              },
              {
                  description: 'Interpretation and Communication of Lab Values  ', 
                  answer: 'option1'
              }
      ]
      };      
var PsychiatricEMR   = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },
              {
                  description: 'Meditech', 
                  answer: 'option1'
              },
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },
              {
                  description: 'Computerized Physician Order Entry', 
                  answer: 'option1'
              },
              {
                  description: 'Bar Coding for Medication Administration  ', 
                  answer: 'option1'
              }
      ]
      };       
var PsychiatricEMRConversion   = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
                  
              }
      ]
      };       

    
this.PsychiatricTREATMENT = PsychiatricTREATMENT;       
this.PsychiatricADULTDISORDERS = PsychiatricADULTDISORDERS; 
this.partumCHILDADOLESCENT = partumCHILDADOLESCENT;     
      
this.PsychiatricTREATMENTMODALITIES = PsychiatricTREATMENTMODALITIES;       
this.PsychiatricEQUIPMENT = PsychiatricEQUIPMENT; 
this.PsychiatricMEDICATIONS = PsychiatricMEDICATIONS;        
      
this.PsychiatricPROFESSIONAL = PsychiatricPROFESSIONAL;       
this.PsychiatricEMR = PsychiatricEMR; 
this.PsychiatricEMRConversion = PsychiatricEMRConversion;        
          
           
////////////////////////////////////////////////////////////////////////////////////////////////////////
// ======================== Case Management/Utilization Review Skills Checklist Form No-22==========================//  
      

var managementSETTING  = {
          questions: [
              {
                  description: 'Acute Care', 
                  answer: 'option1'
              },
              {
                  description: 'Skilled/LTAC', 
                  answer: 'option1'
              },
              {
                  description: 'MDS Coordinator', 
                  answer: 'option1'
              },
              {
                  description: 'Home Health', 
                  answer: 'option1'
              },
              {
                  description: 'Telephonic', 
                  answer: 'option1'
              },
              {
                  description: 'Workers Compensation', 
                  answer: 'option1'
              },
              {
                  description: 'Insurance', 
                  answer: 'option1'
              },
              {
                  description: 'Managed Care', 
                  answer: 'option1'
              },
              {
                  description: 'Acute Rehab ', 
                  answer: 'option1'
              }
      ]
      };      
var managementSOFTWARE  = {
          questions: [
              {
                  description: 'Interqual', 
                  answer: 'option1',
                  name: 'Interqual'
                  
              },
              {
                  description: 'Milliman', 
                  answer: 'option1',
                  name: 'Milliman'
              },
              {
                  description: 'MIDAS', 
                  answer: 'option1',
                  name: 'MIDAS'
              },
              {
                  description: 'Allscripts UR', 
                  answer: 'option1',
                  name: 'Allscripts'
              },
              {
                  description: 'Word Processing Software', 
                  answer: 'option1',
                  name: 'Processing'
              },
              {
                  description: 'Other: Specify', 
                  answer: 'option1',
                  name: 'OtherSpecify1'
              },
              {
                  description: 'Other: Specify', 
                  answer: 'option1',
                  name: 'OtherSpecify2'
              }
      ]
      };     
var managementREGULATORY  = {
          questions: [
              {
                  description: 'CMS/Medicare', 
                  answer: 'option1'
                  
              },
              {
                  description: 'HEDIS Measures', 
                  answer: 'option1'
              },
              {
                  description: 'Core Measures', 
                  answer: 'option1'
              },
              {
                  description: 'Medicaid/Medical', 
                  answer: 'option1'
              },
              {
                  description: 'DRG', 
                  answer: 'option1'
              },
              {
                  description: 'ICD 9 Coding', 
                  answer: 'option1'
              },
              {
                  description: 'ICD 10 Coding', 
                  answer: 'option1'
              },
              {
                  description: 'CPT ', 
                  answer: 'option1'
              }
      ]
      };
      
var managementPROCESSES  = {
          questions: [
              {
                  description: 'Benefits Eligibility', 
                  answer: 'option1'
              },
              {
                  description: 'Pre-Certification Review', 
                  answer: 'option1'
              },
              {
                  description: 'Review for Admission Criteria', 
                  answer: 'option1'
              },
              {
                  description: 'Identify Appropriate Level of Care', 
                  answer: 'option1'
              },
              {
                  description: 'Review Status During Stay', 
                  answer: 'option1'
              },
              {
                  description: 'Discharge Planning', 
                  answer: 'option1'
              },
              {
                  description: 'Physician Advisor', 
                  answer: 'option1'
              },
              {
                  description: 'Clinical Documentation Improvement', 
                  answer: 'option1'
              },
              {
                  description: 'Needs Assessment/Order DME', 
                  answer: 'option1'
              },
              {
                  description: 'Needs Assessment/Home Health', 
                  answer: 'option1'
              },
              {
                  description: 'Needs Assessment/Hospice', 
                  answer: 'option1'
              },
              {
                  description: 'Needs Assessment/Skilled', 
                  answer: 'option1'
              },
              {
                  description: 'Third Party Authorization Process', 
                  answer: 'option1'
              },
              {
                  description: 'Concurrent Review', 
                  answer: 'option1'
              },
              {
                  description: 'Retrospective Review ', 
                  answer: 'option1'
              }
      ]
      };  
var managementPROFESSIONAL  = {
          questions: [
              {
                  description: 'National Patient Safety Goals', 
                  answer: 'option1'
                  
              },
              {
                  description: 'Age Specific/Population Based Care ', 
                  answer: 'option1'
              }
      ]
      };     
var managementEMR  = {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1',
                  name: 'Epic1'
                  
              },
              {
                  description: 'Cerner', 
                  answer: 'option1',
                  name: 'Cerner1'
              },
              {
                  description: 'Eclipsys', 
                  answer: 'option1',
                  name: 'Eclipsys1'
              },
              {
                  description: 'McKesson', 
                  answer: 'option1',
                  name: 'McKesson1'
              },
              {
                  description: 'Meditech', 
                  answer: 'option1',
                  name: 'Meditech1'
              },
              {
                  description: 'Allscripts', 
                  answer: 'option1',
                  name: 'Allscripts1'
              },
              {
                  description: 'Other: Specify', 
                  answer: 'option1',
                  name: 'emrOther: Specify'
              }
      ]
      };       
var managementEMRConversion  = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
                  
              }
      ]
      }; 
      
          
this.managementSETTING = managementSETTING;       
this.managementSOFTWARE = managementSOFTWARE;  
this.managementREGULATORY = managementREGULATORY;  
      
this.managementPROCESSES = managementPROCESSES;       
this.managementPROFESSIONAL = managementPROFESSIONAL;  
this.managementEMR = managementEMR; 
this.managementEMRConversion = managementEMRConversion;  
      

      // ========================  Operating Room Nursing Skills Checklist Form No-14 ==========================//      
      
      var OperatingWORKSETTING= {
          questions: [
              {
                  description: 'General OR', 
                  answer: 'option1'
              }, 
              {
                  description: 'CVOR', 
                  answer: 'option1'
              },  
              {
                  description: 'Outpatient', 
                  answer: 'option1'
              },  
              {
                  description: 'Trauma', 
                  answer: 'option1'
              },  
              {
                  description: 'Peds-General OR', 
                  answer: 'option1'
              }, 
              {
                  description: 'Peds-CVOR', 
                  answer: 'option1'
              },  
              {
                  description: 'First Assist', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Experience ', 
                  answer: 'option1'
              } 
      ]
      };    
      var OperatingGENERAL = {
          questions: [
              {
                  description: 'Abdominal Perineal Resection', 
                  answer: 'option1'
              }, 
              {
                  description: 'Appendectomy/Cholescystectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Breast Biopsy', 
                  answer: 'option1'
              },  
              {
                  description: 'Colon Resection/Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Gastrectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Gastric Bypass/Roux-en-Y', 
                  answer: 'option1'
              },  
              {
                  description: 'Hemorrhoidectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Herniorrhaphy - Inguinal, Ventral, Femoral, Umbilical', 
                  answer: 'option1'
              },  
              {
                  description: 'Laparoscopic General Surgeries', 
                  answer: 'option1'
              },  
              {
                  description: 'Laparoscopic Nissen Fundoplication', 
                  answer: 'option1'
              },  
              {
                  description: 'Mastectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Splenectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Thyroidectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub General Surgery ', 
                  answer: 'option1'
              }  
      ]
      };
      var OperatingCARDIOVASCULAR= {
          questions: [
              {
                  description: 'Aorta Repair', 
                  answer: 'option1'
              }, 
              {
                  description: 'Aorto-Bifemoral/Femoral-Pop Bypass Graft', 
                  answer: 'option1'
              },  
              {
                  description: 'Cardiac Bypass Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Carotid Endarterectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Endoscopic Vascular Procedures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Femoral Popliteal Bypass Graft', 
                  answer: 'option1'
              },  
              {
                  description: 'Laparascopic Cardiac Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Robotic Assisted Cardiac Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Valve Replacement/Repair', 
                  answer: 'option1'
              },  
              {
                  description: 'Ventricular Assist Device', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub CV Surgery ', 
                  answer: 'option1'
              }  
      ]
      };    
      var OperatingTHORACIC= {
          questions: [
              {
                  description: 'Endoscopic Thoracic Procedures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Esophagoogastrectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Mediastinotomy/Sternotomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Thoracoscopy/Nuss Procedure', 
                  answer: 'option1'
              },  
              {
                  description: 'Thoracotomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Scrub Thoracic Surgery  ', 
                  answer: 'option1'
              }
      ]
      };     
      var OperatingORTHOPEDIC= {
          questions: [
              {
                  description: 'Total Joint Replacement', 
                  answer: 'option1'
              }, 
              {
                  description: 'Closed Reduction of Fracture', 
                  answer: 'option1'
              },  
              {
                  description: 'External Fixator', 
                  answer: 'option1'
              },  
              {
                  description: 'Cannulated Hip Screws', 
                  answer: 'option1'
              },  
              {
                  description: 'Bankhart Procedure', 
                  answer: 'option1'
              }, 
              {
                  description: 'Birmingham Procedure', 
                  answer: 'option1'
              },  
              {
                  description: 'Carpal Tunnel Release', 
                  answer: 'option1'
              },  
              {
                  description: 'Arthroscopy', 
                  answer: 'option1'
              },  
              {
                  description: 'Anterior Cruciate Ligament Reconstruction', 
                  answer: 'option1'
              },  
              {
                  description: 'Open Reduction Internal Fixation', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Orthopedics', 
                  answer: 'option1'
              }   
      ]
      };      
      var OperatingNEUROLOGICAL= {
          questions: [
              {
                  description: 'Craniotomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Steriotactic Guided Brain Biopsy', 
                  answer: 'option1'
              },  
              {
                  description: 'Laminectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Laparoscopic Anterior Laminectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Insertion of Vagal Nerve Stimulator', 
                  answer: 'option1'
              }, 
              {
                  description: 'Insertion of VP Shunt', 
                  answer: 'option1'
              },  
              {
                  description: 'Spinal Fusion', 
                  answer: 'option1'
              },  
              {
                  description: 'Anterior Cervical Discectomy with Fusion', 
                  answer: 'option1'
              },  
              {
                  description: 'Posterior Cervical Laminectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Neurological Surgery', 
                  answer: 'option1'
              }    
      ]
      };        
      var OperatingGENITOURINARY= {
          questions: [
              {
                  description: 'Vasicaurethropexy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Marshall Marchetti', 
                  answer: 'option1'
              },  
              {
                  description: 'Circumcision', 
                  answer: 'option1'
              },  
              {
                  description: 'Cystoscopy/Cystogram/Pyelogram', 
                  answer: 'option1'
              },  
              {
                  description: 'Prostatectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Nephrectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Orchidectomy/Orchidopexy', 
                  answer: 'option1'
              },  
              {
                  description: 'Ureterostomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Laparoscopic Assisted GU Procedures', 
                  answer: 'option1'
              },  
              {
                  description: 'Robotic Assisted GU Procedures', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub GU Surgery ', 
                  answer: 'option1'
              }  
      ]
      }; 
   
      var OperatingGYNECOLOGICAL= {
          questions: [
              {
                  description: 'Abdominal Hysterectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Anterior Posterior Repair', 
                  answer: 'option1'
              },  
              {
                  description: 'C-Section', 
                  answer: 'option1'
              },  
              {
                  description: 'D & C', 
                  answer: 'option1'
              },  
              {
                  description: 'Laparoscopic Assisted Hysterectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Laparotomy with Microtuboplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Robotic Assisted GYN Procedures', 
                  answer: 'option1'
              },  
              {
                  description: 'Vaginal Delivery', 
                  answer: 'option1'
              },  
              {
                  description: 'Vaginal Hysterectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Gyn Surgery ', 
                  answer: 'option1'
              }   
      ]
      };        
      var OperatingEAR= {
          questions: [
              {
                  description: 'Endoscopic ENT Procedures', 
                  answer: 'option1'
              }, 
              {
                  description: 'Laryngectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Mastoidectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Myringotomy with Insertion of Tubes', 
                  answer: 'option1'
              },  
              {
                  description: 'Radical Neck', 
                  answer: 'option1'
              }, 
              {
                  description: 'Septoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Tonsillectomy & Adenoidectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Tracheostomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Tympanoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub ENT Surgery ', 
                  answer: 'option1'
              }   
      ]
      };    
    var OperatingCRANIOFACIAL= {
          questions: [
              {
                  description: 'Craniectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Craniofacial Reconstruction', 
                  answer: 'option1'
              },  
              {
                  description: 'Dental Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Leforte 1 Maxillary/Sagittal Osteotomy', 
                  answer: 'option1'
              },  
              {
                  description: 'ORIF Mandibular Fracture', 
                  answer: 'option1'
              }, 
              {
                  description: 'Otoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Reconstruction of Ear', 
                  answer: 'option1'
              },  
              {
                  description: 'Removal of Arch Bars', 
                  answer: 'option1'
              },  
              {
                  description: 'Repair of Cleft Lip, Nose, Palate', 
                  answer: 'option1'
              },  
              {
                  description: 'Rhinoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Craniofacial/Oral ', 
                  answer: 'option1'
              }  
      ]
      };      
      var OperatingPLASTIC= {
          questions: [
              {
                  description: 'Blephoroplasty', 
                  answer: 'option1'
              }, 
              {
                  description: 'Breast Reconstruction with Implant', 
                  answer: 'option1'
              },  
              {
                  description: 'Breast Reduction Mammoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Face Lift', 
                  answer: 'option1'
              },  
              {
                  description: 'Mastectomy with Tram Flap Reconstruction', 
                  answer: 'option1'
              }, 
              {
                  description: 'Split Thickness Skin Graft', 
                  answer: 'option1'
              },  
              {
                  description: 'Suction Lipectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Plastics ', 
                  answer: 'option1'
              }  
      ]
      };  
      var OperatingTRANSPLANTS= {
          questions: [
              {
                  description: 'Heart', 
                  answer: 'option1'
              }, 
              {
                  description: 'Lung', 
                  answer: 'option1'
              },  
              {
                  description: 'Liver', 
                  answer: 'option1'
              },  
              {
                  description: 'Pancreas', 
                  answer: 'option1'
              },  
              {
                  description: 'Eye', 
                  answer: 'option1'
              }, 
              {
                  description: 'Organ Donation', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Transplants ', 
                  answer: 'option1'
              }
      ]
      };  
      var OperatingOPHTHALMOLOGY= {
          questions: [
              {
                  description: 'Cataract Extraction with Implant', 
                  answer: 'option1'
              }, 
              {
                  description: 'Vitrectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scleral Buckle', 
                  answer: 'option1'
              },  
              {
                  description: 'Cataract Aspiration; Anterior Vitrectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Corneal Transplant', 
                  answer: 'option1'
              }, 
              {
                  description: 'Scrub Ophthalmology ', 
                  answer: 'option1'
              }
      ]
      };   
      var OperatingGENERALSURGERY= {
          questions: [
              {
                  description: 'Anal Fistulectomy/Anoplasty', 
                  answer: 'option1'
              }, 
              {
                  description: 'Appendectomy/Cholecystectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Biopsy (Mass, Muscle, Lymph Node)', 
                  answer: 'option1'
              },  
              {
                  description: 'Bronchoscopy', 
                  answer: 'option1'
              },  
              {
                  description: 'Colostomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Esophagogastroduodenoscopy w/ Biopsy', 
                  answer: 'option1'
              },  
              {
                  description: 'Esophagoscopy', 
                  answer: 'option1'
              },  
              {
                  description: 'Exploratory Laparotomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Flexible Sigmoidoscopy', 
                  answer: 'option1'
              },  
              {
                  description: 'Fundoplication', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Gastrostomy', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Herniorrhaphy', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Insertion of Port-a-Cath, Hickman, Broviac', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Laparascopic General Surgery Procedures', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Liver Biopsy', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Percutaneous Endoscopic Gastrostomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Thoracoscopy/Nuss Procedure', 
                  answer: 'option1'
              } ,  
              {
                  description: 'Scrub Peds General Surgery ', 
                  answer: 'option1'
              }    
      ]
      }; 
      var OperatingGENITOURINARY= {
          questions: [
              {
                  description: 'Vasicaurethropexy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Marshall Marchetti', 
                  answer: 'option1'
              }, 
              {
                  description: 'Circumcision', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cystoscopy/Cystogram/Pyelogram', 
                  answer: 'option1'
              },  
              {
                  description: 'Prostatectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Nephrectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Orchidectomy/Orchidopexy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Ureterostomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Laparascopic Assisted GU Procedure', 
                  answer: 'option1'
              },  
              {
                  description: 'Rebotic Assisted GU Procedure', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Peds GU ', 
                  answer: 'option1'
              }  
      ]
      }; 
      var OperatingNEURO= {
          questions: [
              {
                  description: 'Craniotomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Insertion of Vagal Nerve Stimulator', 
                  answer: 'option1'
              },  
              {
                  description: 'Insertion of VP Shunt', 
                  answer: 'option1'
              },  
              {
                  description: 'Laminectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Peds Neuro  ', 
                  answer: 'option1'
              }
      ]
      }; 
      
      
   
      
      
      
      
      var OperatingCARDIAC= {
          questions: [
              {
                  description: 'Arterial Switch', 
                  answer: 'option1'
              }, 
              {
                  description: 'ASD/VSD Repair', 
                  answer: 'option1'
              },  
              {
                  description: 'Atrial Septectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Bidirectional Glenn', 
                  answer: 'option1'
              },  
              {
                  description: 'BT Shunt', 
                  answer: 'option1'
              }, 
              {
                  description: 'ECMO Insertion/Decannulation (Cardiac)', 
                  answer: 'option1'
              },  
              {
                  description: 'Fontan Procedure', 
                  answer: 'option1'
              },  
              {
                  description: 'Norwood Procedure', 
                  answer: 'option1'
              },  
              {
                  description: 'Pacemaker', 
                  answer: 'option1'
              },  
              {
                  description: 'PDA Ligation', 
                  answer: 'option1'
              },  
              {
                  description: 'Repair of Coarctation of Aorta', 
                  answer: 'option1'
              },  
              {
                  description: 'Ross Procedure', 
                  answer: 'option1'
              },  
              {
                  description: 'Tetralogy of Fallot Repair', 
                  answer: 'option1'
              },  
              {
                  description: 'Valve Repair/Replacement', 
                  answer: 'option1'
              },  
              {
                  description: 'Ventricular Assist Device', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Peds Cardiac/Vascular ', 
                  answer: 'option1'
              }   
      ]
      };       
      var OperatingTRANSPLANT= {
          questions: [
              {
                  description: 'Heart', 
                  answer: 'option1',
                  name:'otHeart'
              }, 
              {
                  description: 'Kidney', 
                  answer: 'option1',
                  name:'otKidney'
              },  
              {
                  description: 'Liver/Pancreas', 
                  answer: 'option1',
                  name:'otLiver'
              },  
              {
                  description: 'Lung', 
                  answer: 'option1',
                  name:'otLung'
              },  
              {
                  description: 'Organ Donation', 
                  answer: 'option1',
                  name:'otOrgan'
              }, 
              {
                  description: 'Scrub Peds Transplant ', 
                  answer: 'option1',
                  name:'otScrub'
              }
      ]
      };
      var OperatingOPHTHALMOLOGY= {
          questions: [
              {
                  description: 'Cataract Extraction with Implant', 
                  answer: 'option1'
              }, 
              {
                  description: 'Vitrectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scleral Buckle', 
                  answer: 'option1'
              },  
              {
                  description: 'Cataract Aspiration; Anterior Vitrectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Corneal Transplant', 
                  answer: 'option1'
              }, 
              {
                  description: 'Scrub Opthalmology', 
                  answer: 'option1'
              }
      ]
      }; 
      var OperatingEARNOSE= {
          questions: [
              {
                  description: 'Cochlear Implant', 
                  answer: 'option1'
              }, 
              {
                  description: 'Laryngotracheoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Myringotomy with Tubes', 
                  answer: 'option1'
              },  
              {
                  description: 'Septoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Suspension Microlaryngoscopy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Tonsillectomy & Adenoidectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Tracheostomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Turbinate Reduction', 
                  answer: 'option1'
              },  
              {
                  description: 'Tympanoplasty/Typanomastoidectomy', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Peds ENT ', 
                  answer: 'option1'
              }   
      ]
      }; 
      
      var OperatingCRANIOFACIAL= {
          questions: [
              {
                  description: 'Craniectomy', 
                  answer: 'option1'
              }, 
              {
                  description: 'Craniofacial Reconstruction', 
                  answer: 'option1'
              },  
              {
                  description: 'Dental Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'Leforte 1 Maxillary/Sagittal Osteotomy', 
                  answer: 'option1'
              },  
              {
                  description: 'ORIF Mandibular Fracture', 
                  answer: 'option1'
              },  
              {
                  description: 'Otoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Reconstruction of Ear', 
                  answer: 'option1'
              },
              {
                  description: 'Removal of Arch Bars', 
                  answer: 'option1'
              },    
              {
                  description: 'Repair of Cleft Lip, Nose, Palate', 
                  answer: 'option1'
              },  
              {
                  description: 'Rhinoplasty', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Craniofacial/Oral', 
                  answer: 'option1'
              }  
      ]
      }; 
      var OperatingORTHOPEDICS= {
          questions: [
              {
                  description: 'Acetabuloplasty/Triple Innominate', 
                  answer: 'option1'
              }, 
              {
                  description: 'Arthroscopy of Knee, Wrist, Shoulder', 
                  answer: 'option1'
              },  
              {
                  description: 'Closed Reduction, Percutaneous Pin', 
                  answer: 'option1'
              },  
              {
                  description: 'External Fixator (Ilizarov/Orthofix)', 
                  answer: 'option1'
              },  
              {
                  description: 'ORIF Shoulder, Humerus, Tibia, Femur', 
                  answer: 'option1'
              }, 
              {
                  description: 'Osteotomy/VDRD/Calcaneal/Metatarsal', 
                  answer: 'option1'
              },  
              {
                  description: 'Spinal Fusion/Spinal with Instrumentation', 
                  answer: 'option1'
              },  
              {
                  description: 'Tendoachilles Lengthening', 
                  answer: 'option1'
              },  
              {
                  description: 'Scrub Peds Ortho ', 
                  answer: 'option1'
              }  
      ]
      }; 
      var OperatingEQUIPMENT= {
          questions: [
              {
                  description: 'Electrocautery (ESU)', 
                  answer: 'option1'
              }, 
              {
                  description: 'Laparoscopy Systems', 
                  answer: 'option1'
              },  
              {
                  description: 'Neuro', 
                  answer: 'option1'
              },  
              {
                  description: 'OR Fracture Tables (List Types)', 
                  answer: 'option1'
              },  
              {
                  description: 'Orthopedic Total Joint Systems', 
                  answer: 'option1'
              }, 
              {
                  description: 'Power Equipment', 
                  answer: 'option1'
              },  
              {
                  description: 'Robotics Systems (List types)', 
                  answer: 'option1'
              },  
              {
                  description: 'Spinal Fusion Instrumentation ', 
                  answer: 'option1'
              } 
      ]
      };  
      
      
      var OperatingPROFESSIONAL= {
          questions: [
              {
                  description: 'Malignant Hyperthermia Protocol', 
                  answer: 'option1'
              }, 
              {
                  description: 'Administer and Monitor Moderate Sedation', 
                  answer: 'option1'
              },  
              {
                  description: 'Universal Protocol for Wrong Site Surgery', 
                  answer: 'option1'
              },  
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              },  
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              }, 
              {
                  description: 'Pressure Ulcer Risk Assessment/Prevention', 
                  answer: 'option1'
              },  
              {
                  description: 'Restraints/Use of Least Restrictive Device', 
                  answer: 'option1'
              },  
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              },  
              {
                  description: 'Isolation Precautions', 
                  answer: 'option1'
              },  
              {
                  description: 'Infection Prevention ', 
                  answer: 'option1'
              }   
      ]
      };  
      var OperatingEMR= {
          questions: [
              {
                  description: 'Epic', 
                  answer: 'option1'
              }, 
              {
                  description: 'Cerner', 
                  answer: 'option1'
              },  
              {
                  description: 'Eclipsys', 
                  answer: 'option1'
              },  
              {
                  description: 'McKesson', 
                  answer: 'option1'
              },  
              {
                  description: 'Meditech', 
                  answer: 'option1'
              }, 
              {
                  description: 'Other Computerized System', 
                  answer: 'option1'
              },  
              {
                  description: 'Computerized Physician Order Entry ', 
                  answer: 'option1'
              }
      ]
      }; 
      var OperatingEMRConversion= {
                questions: [
                    {
                        description: 'EMR Conversion', 
                        answer: 'option1'
                    }
            ]
      };         
   
      
      
    
      //=================page14      
      this.OperatingWORKSETTING = OperatingWORKSETTING;    
      this.OperatingGENERAL = OperatingGENERAL;  
      this.OperatingCARDIOVASCULAR = OperatingCARDIOVASCULAR;  
      this.OperatingTHORACIC = OperatingTHORACIC;  
      this.OperatingORTHOPEDIC = OperatingORTHOPEDIC;  
      this.OperatingNEUROLOGICAL = OperatingNEUROLOGICAL;  
      this.OperatingGENITOURINARY = OperatingGENITOURINARY;       
            
            
      this.OperatingGYNECOLOGICAL = OperatingGYNECOLOGICAL;     
      this.OperatingEAR = OperatingEAR;  
      this.OperatingCRANIOFACIAL = OperatingCRANIOFACIAL;    
      this.OperatingPLASTIC = OperatingPLASTIC;  
      this.OperatingTRANSPLANTS = OperatingTRANSPLANTS;  
      this.OperatingOPHTHALMOLOGY = OperatingOPHTHALMOLOGY;    
      this.OperatingGENERALSURGERY = OperatingGENERALSURGERY;  
      this.OperatingGENITOURINARY = OperatingGENITOURINARY;  
      this.OperatingNEURO = OperatingNEURO; 
            
            
      this.OperatingCARDIAC = OperatingCARDIAC;     
      this.OperatingTRANSPLANT = OperatingTRANSPLANT;  
      this.OperatingOPHTHALMOLOGY = OperatingOPHTHALMOLOGY;
      this.OperatingEARNOSE = OperatingEARNOSE; 
            
            
      this.OperatingCRANIOFACIAL = OperatingCRANIOFACIAL;  
      this.OperatingORTHOPEDICS = OperatingORTHOPEDICS;  
      this.OperatingEQUIPMENT = OperatingEQUIPMENT;  
            
            
      this.OperatingPROFESSIONAL = OperatingPROFESSIONAL;  
      this.OperatingEMR = OperatingEMR;  
      this.OperatingEMRConversion = OperatingEMRConversion;           
      //=================End page14 


    // ======================== Sterile Processing Technologist Skills Checklist Form No-21==========================//  
      
    var SterileProcessing = {
          questions: [
              {
                  description: 'Single Instruments', 
                  answer: 'option1'
              },
              {
                  description: 'Wrapped Sets', 
                  answer: 'option1'
              },
              {
                  description: 'Instrument Containers', 
                  answer: 'option1'
              },
              {
                  description: "Endoscopes (indicate types)", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: 'Repairs  ', 
                  answer: 'option1'
              }
      ]
      }; 
    var SterileSafety  = {
          questions: [
              {
                  description: 'Protective Attire', 
                  answer: 'option1'
              },
              {
                  description: 'Standard Precautions', 
                  answer: 'option1'
              },
              {
                  description: 'Sharps Handling', 
                  answer: 'option1'
              },
              {
                  description: "Managing Biohazardous Waste  ", 
                  answer: 'option1'
              }
      ]
      };   
      var SterileDecontamination = {
          questions: [
              {
                  description: 'Use of Washers', 
                  answer: 'option1'
              },
              {
                  description: 'Washer/Disinfectors', 
                  answer: 'option1'
              },
              {
                  description: 'Washer/Sterilizers', 
                  answer: 'option1'
              },
              {
                  description: "Detergent Use and Refills", 
                  answer: 'option1'
              },
              {
                  description: 'Chemical Agents for Decontamination', 
                  answer: 'option1'
              },
              {
                  description: 'Ultrasonic Cleaner', 
                  answer: 'option1'
              },
              {
                  description: 'Equipment (e.g. crash carts, IV pumps)', 
                  answer: 'option1'
              }
      ]
      }; 
             
      var SterileAutoclave = {
                questions: [
                    {
                        description: 'Gravity Displacement', 
                        answer: 'option1'
                    },
                    {
                        description: 'Prevacuum', 
                        answer: 'option1'
                    },
                    {
                        description: 'Flash ', 
                        answer: 'option1'
                    }
            ]
      };     
      var SterileAssurance = {
                questions: [
                    {
                        description: 'Bowie Dick', 
                        answer: 'option1'
                    },
                    {
                        description: 'Biological', 
                        answer: 'option1'
                    },
                    {
                        description: 'Chemical ', 
                        answer: 'option1'
                    }
            ]
      };          
      var SterileSterilization = {
                questions: [
                    {
                        description: 'Load Documentation', 
                        answer: 'option1'
                    },
                    {
                        description: 'Cart Loading', 
                        answer: 'option1'
                    },
                    {
                        description: 'Testing Validation Procedures', 
                        answer: 'option1'
                    },
                    {
                        description: 'Trouble Shooting ', 
                        answer: 'option1'
                    }
            ]
      }; 
      
      var SterileGas  = {
                questions: [
                    {
                        description: 'Load Documentation', 
                        answer: 'option1'
                    },
                    {
                        description: 'Loading Procedures', 
                        answer: 'option1'
                    },
                    {
                        description: 'Testing Validation Procedures', 
                        answer: 'option1'
                    },
                    {
                        description: 'Trouble Shooting', 
                        answer: 'option1'
                    }
            ]
      };     
      var SterileSterrad = {
                questions: [
                    {
                        description: 'Load Documentation', 
                        answer: 'option1'
                    },
                    {
                        description: 'Loading Procedures', 
                        answer: 'option1'
                    },
                    {
                        description: 'Testing Validation Procedures', 
                        answer: 'option1'
                    },
                    {
                        description: 'Trouble Shooting ', 
                        answer: 'option1'
                    }
            ]
      };    
      var SterileSteris = {
                questions: [
                    {
                        description: 'Load Documentation', 
                        answer: 'option1'
                    },
                    {
                        description: 'Tray Loading', 
                        answer: 'option1'
                    },
                    {
                        description: 'Testing Validation Procedures', 
                        answer: 'option1'
                    },
                    {
                        description: 'Trouble Shooting ', 
                        answer: 'option1'
                    }
            ]
      };       
      
     
      var SterileAssembly = {
          questions: [
              {
                  description: 'Instrument Set Assembly', 
                  answer: 'option1'
              },
              {
                  description: 'Selection of Appropriate Wrapping Material', 
                  answer: 'option1'
              },
              {
                  description: 'Assembly of Peel Pack Items', 
                  answer: 'option1'
              },
              {
                  description: "Preparation of Hard Instrument Containers", 
                  answer: 'option1'
              },
              {
                  description: 'Wrapping Procedure', 
                  answer: 'option1'
              },
              {
                  description: 'Selection of Sterilization Tapes', 
                  answer: 'option1'
              },
              {
                  description: 'Towel/Linen Folding', 
                  answer: 'option1'
              },
              {
                  description: 'Labeling Standards', 
                  answer: 'option1'
              },
              {
                  description: 'Peel Pack/Heat Sealing', 
                  answer: 'option1'
              },
              {
                  description: 'Instrument Count Sheets', 
                  answer: 'option1'
              },
              {
                  description: 'Physician Preference Cards', 
                  answer: 'option1'
              },
              {
                  description: 'Case Picking', 
                  answer: 'option1'
              },
              {
                  description: 'Sterile Storage Standards ', 
                  answer: 'option1'
              }
      ]
      };           
      var SterileSpecialty = {
          questions: [
              {
                  description: ' General', 
                  answer: 'option1'
              },
              {
                  description: 'Cardiac', 
                  answer: 'option1'
              },
              {
                  description: 'Endoscopy', 
                  answer: 'option1'
              },
              {
                  description: "Laparoscopic", 
                  answer: 'option1'
              },
              {
                  description: 'Neurology', 
                  answer: 'option1'
              },
              {
                  description: 'OB/GYN', 
                  answer: 'option1'
              },
              {
                  description: 'Ophthalmology', 
                  answer: 'option1'
              },
              {
                  description: 'Orthopedics', 
                  answer: 'option1'
              },
              {
                  description: 'Plastics', 
                  answer: 'option1'
              },
              {
                  description: 'Robotics', 
                  answer: 'option1'
              },
              {
                  description: 'Urology', 
                  answer: 'option1'
              },
              {
                  description: 'Other Specialty Service', 
                  answer: 'option1'
              },
              {
                  description: 'Other Specialty Service ', 
                  answer: 'option1'
              }
      ]
      }; 
      
      var experienceWithAG  = [{
          'description':'Able to adapt care to incorporate normal growth and development',
          'checkbox':[{"id": 'a1'},{ "id": 'a2'},{"id": 'a3'},{"id": 'a4'},{ "id": 'a5'},{"id": 'a6'},{"id": 'a7'},{ "id": 'a8'},{"id": 'a9'}]
      },{
          'description':'Able to adapt method and terminology of patient instructions to their age, comprehension, and maturity level',
          'checkbox':[{"id": 'b1'},{ "id": 'b2'},{"id": 'b3'},{"id": 'b4'},{ "id": 'b5'},{"id": 'b6'},{"id": 'b7'},{ "id": 'b8'},{"id": 'b9'}]
      },
      {
          'description':'Can ensure a safe environment reflecting specific needs of various age groups',
          'checkbox':[{"id": 'c1'},{ "id": 'c2'},{"id": 'c3'},{"id": 'c4'},{ "id": 'c5'},{"id": 'c6'},{"id": 'c7'},{ "id": 'c8'},{"id": 'c9'}]
      }];  

      this.SterileProcessing = SterileProcessing;     
      this.SterileSafety = SterileSafety; 
      this.SterileDecontamination = SterileDecontamination; 
            
      this.SterileAutoclave = SterileAutoclave;     
      this.SterileAssurance = SterileAssurance; 
      this.SterileSterilization = SterileSterilization; 
            
      this.SterileGas = SterileGas;     
      this.SterileSterrad = SterileSterrad; 
      this.SterileSteris = SterileSteris;      
            
      this.SterileAssembly = SterileAssembly; 
      this.SterileSpecialty = SterileSpecialty;       
            
      this.experienceWithAG = experienceWithAG;
      //=================End page21 


////////////////////////////////////////////////////////////////////////////////////////////////////////
// ======================== Urgent Care/Clinic Skills Checklist Form No-22==========================//  
      
var UrgentAssessment = {
          questions: [
              {
                  description: 'Auscultation/Irregular Heart Sounds', 
                  answer: 'option1'
              },
              {
                  description: 'Peripheral Edema', 
                  answer: 'option1'
              },
              {
                  description: 'PQRST Assessment', 
                  answer: 'option1'
              }      
      ]
      };    
var UrgentInterpretation = {
          questions: [
              {
                  description: 'EKG', 
                  answer: 'option1'
              },
              {
                  description: 'Lab Tests (Cardiac Enzymes, Troponin, BNP)', 
                  answer: 'option1'
              }
      ]
      };  
var UrgentEquipment  = {
          questions: [
              {
                  description: 'Arrhythmia Interpretation', 
                  answer: 'option1'
              },
              {
                  description: '12-Lead Set Up ', 
                  answer: 'option1'
              },
              {
                  description: '12-Lead Basic Interpretation', 
                  answer: 'option1'
              },
              {
                  description: "Defibrillation", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "External Pacer", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };           
var UrgentCareof = {
          questions: [
              {
                  description: 'Chest Pain/ACS', 
                  answer: 'option1'
              },
              {
                  description: 'Arrhythmias', 
                  answer: 'option1'
              },
              {
                  description: 'CHF', 
                  answer: 'option1'
              },
              {
                  description: "AED", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Cardiac Arrest/CPR", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentMedications = {
          questions: [
              {
                  description: 'Nitroglycerin', 
                  answer: 'option1'
              },
              {
                  description: 'Morphine', 
                  answer: 'option1'
              },
              {
                  description: 'Heparin', 
                  answer: 'option1'
              },
              {
                  description: "ALS (Epinephrine, Atropine, Anti-Arrhythmics)", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
     
var UrgentPULAssessment = {
          questions: [
              {
                  description: 'Abnormal Breath Sounds (Wheezing, Stridor, Crackles)', 
                  answer: 'option1'
              },
              {
                  description: 'Abnormal Breathing Pattern (Rapid, Labored, Slow)', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentPULInterpretation  = {
          questions: [
              {
                  description: 'Pulse Oximetry', 
                  answer: 'option1'
              },
              {
                  description: 'ABGs', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentPULEquipment   = {
          questions: [
              {
                  description: 'Oxygen Therapy (Nasal Cannula, Face Mask)', 
                  answer: 'option1'
              },
              {
                  description: 'Manual Resuscitation Bag (MRB, Ambu Bag)', 
                  answer: 'option1'
              },
              {
                  description: 'Metered-Dose Inhaler (MDI)', 
                  answer: 'option1'
              },
              {
                  description: "Nebulizers", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentPULCare = {
          questions: [
              {
                  description: 'Aspiration', 
                  answer: 'option1'
              },
              {
                  description: 'Asthma/Reactive Airway Disease', 
                  answer: 'option1'
              },
              {
                  description: 'COPD', 
                  answer: 'option1'
              },
              {
                  description: "Pneumonia", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Pulmonary Edema", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Pulmonary Embolism", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentPULMedications = {
          questions: [
              {
                  description: 'Bronchodilators', 
                  answer: 'option1'
              },
              {
                  description: 'Steroids', 
                  answer: 'option1'
              },
              {
                  description: 'Diuretics', 
                  answer: 'option1'
              }
      ]
      };   
       
var UrgentNEUAssessment = {
          questions: [
              {
                  description: 'Signs & Symptoms of Stroke', 
                  answer: 'option1'
              },
              {
                  description: 'Altered LOC', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentNEUEquipment  = {
          questions: [
              {
                  description: 'Assist with Lumbar Puncture', 
                  answer: 'option1'
              },
              {
                  description: 'Cervical Collar', 
                  answer: 'option1'
              },
              {
                  description: 'Spinal Immobilization', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentNEUCare   = {
          questions: [
              {
                  description: 'Head Injury', 
                  answer: 'option1'
              },
              {
                  description: 'Meningitis', 
                  answer: 'option1'
              },
              {
                  description: 'Migraine', 
                  answer: 'option1'
              },
              {
                  description: "Seizures", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "TIA/Stroke", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentNEUMedications = {
          questions: [
              {
                  description: 'Imitrex (Sumatriptan Succinate) ', 
                  answer: 'option1'
              },
              {
                  description: 'Phenobarbitol', 
                  answer: 'option1'
              },
              {
                  description: 'Dilantin ', 
                  answer: 'option1'
              },
              {
                  description: "Depakote", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Analgesics", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };    
var UrgentORTAssessment = {
          questions: [
              {
                  description: 'Range of Motion', 
                  answer: 'option1'
              },
              {
                  description: 'Color, Warmth, Movement, Sensation', 
                  answer: 'option1'
              },
              {
                  description: 'Fracture/Dislocation', 
                  answer: 'option1'
              }
            
      ]
      };      
var UrgentORTEquipment  = {
          questions: [
              {
                  description: "Apply Splints", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: 'Assist with Casting', 
                  answer: 'option1'
              },
              {
                  description: "Assist with Reduction of Dislocation", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Spinal Immobilization", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Transfer Boards", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };      
var UrgentORTCare   = {
          questions: [
              {
                  description: 'Cast/Splint ', 
                  answer: 'option1'
              },
              {
                  description: 'Dislocation', 
                  answer: 'option1'
              },
              {
                  description: 'External Appliance', 
                  answer: 'option1'
              },
              {
                  description: "Sprain/Fracture ", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };       
var UrgentORTMedications = {
          questions: [
              {
                  description: 'Analgesia/Sedation', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentGASTAssessment = {
          questions: [
              {
                  description: 'Bowel Sounds', 
                  answer: 'option1'
              },
              {
                  description: 'Distention', 
                  answer: 'option1'
              },
              {
                  description: 'Fluid Balance', 
                  answer: 'option1'
              },
              {
                  description: "Nutritional Status", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentGASTEquipment   = {
          questions: [
              {
                  description: 'Enemas', 
                  answer: 'option1'
              },
              {
                  description: 'Gastric Lavage', 
                  answer: 'option1'
              },
              {
                  description: 'G-Tubes', 
                  answer: 'option1'
              },
              {
                  description: "NG Tubes", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentGASTCare   = {
          questions: [
              {
                  description: ' Colostomy', 
                  answer: 'option1'
              },
              {
                  description: 'Constipation/Impaction', 
                  answer: 'option1'
              },
              {
                  description: 'Diarrhea', 
                  answer: 'option1'
              },
              {
                  description: "G-Tube (Reinsertion/Replacement)", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Nausea/Vomiting", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };           
var UrgentGASTMedications = {
          questions: [
              {
                  description: 'Ipecac', 
                  answer: 'option1'
              },
              {
                  description: 'Charcoal', 
                  answer: 'option1'
              },
              {
                  description: 'Antiemetics', 
                  answer: 'option1'
              },
              {
                  description: "Antispasmodics", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };    
var UrgentRENALAssessment = {
          questions: [
              {
                  description: 'Fluid Status', 
                  answer: 'option1'
              },
              {
                  description: 'Shunt/Fistula (Thrill/Bruit)', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentRENALInterpretation   = {
          questions: [
              {
                  description: 'BUN/Creatinine/Electrolytes', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentRENALEquipment   = {
          questions: [
              {
                  description: 'Urine Dipstick/C&S', 
                  answer: 'option1'
              },
              {
                  description: 'Placement & Management of Bladder Catheters', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentRENALCare = {
          questions: [
              {
                  description: 'Pyelonephritis/UTI', 
                  answer: 'option1'
              },
              {
                  description: 'Obstruction', 
                  answer: 'option1'
              },
              {
                  description: 'Renal Calculi', 
                  answer: 'option1'
              },
              {
                  description: "Renal Trauma", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Testicular Torsion", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Priapism", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };     
var UrgentRENALMedications = {
          questions: [
              {
                  description: 'Antibiotics', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentENDOCRAssessment = {
          questions: [
              {
                  description: 'Hypo/Hyperglycemia', 
                  answer: 'option1'
              }        
      ]
      };   
var UrgentENDOCRInterpretation   = {
          questions: [
              {
                  description: 'Blood Glucose', 
                  answer: 'option1'
              },
              {
                  description: 'Urine Ketones', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentENDOCREquipment   = {
          questions: [
             {
                  description: "Bedside Blood Glucose Monitoring", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentENDOCRCareof  = {
          questions: [
              {
                  description: 'Hypoglycemia/Insulin Shock', 
                  answer: 'option1'
              },
              {
                  description: "Hyperglycemia/DKA", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };     
var UrgentENDOCRMedications = {
          questions: [
              {
                  description: 'Dextrose', 
                  answer: 'option1'
              },
              {
                  description: 'Insulin', 
                  answer: 'option1'
              },
              {
                  description: 'Oral Hypoglycemics', 
                  answer: 'option1'
              }
      ]
      };          
var UrgentEENTAssessment = {
          questions: [
              {
                  description: 'Visual Acuity', 
                  answer: 'option1'
              },
              {
                  description: 'Foreign Body', 
                  answer: 'option1'
              },
              {
                  description: 'Enlarged Tonsils', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentEENTEquipment   = {
          questions: [
              {
                  description: 'Ear Irrigation/Removal Foreign Body', 
                  answer: 'option1'
              },
              {
                  description: 'Eye Injury/Foreign Body/Detached Retina', 
                  answer: 'option1'
              },
              {
                  description: 'Assist with Removal of Nasal Foreign Body ', 
                  answer: 'option1'
              },
              {
                  description: "Epistaxis", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Set Up/Assist Cautery", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Set Up Slit Lamp", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentEENTMedications   = {
          questions: [
              {
                  description: ' Silver Nitrate', 
                  answer: 'option1'
              },
              {
                  description: 'Liquid Cocaine', 
                  answer: 'option1'
              },
              {
                  description: 'Anti-Hypertensives', 
                  answer: 'option1'
              }
      ]
      };    
var UrgentINFECTIOUSAssessment = {
          questions: [
              {
                  description: 'Communicable Disease', 
                  answer: 'option1'
              },
              {
                  description: 'Interpret Culture Results', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentINFECTIOUSEquipment    = {
          questions: [
              {
                  description: 'Obtain Cultures', 
                  answer: 'option1'
              },
              {
                  description: 'Fever Management', 
                  answer: 'option1'
              },
              {
                  description: 'Isolation', 
                  answer: 'option1'
              },
              {
                  description: "Reverse Isolation/Hepa Filter", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Use of Personal Protective Equipment", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentINFECTIOUSCare    = {
          questions: [
              {
                  description: 'Communicable Disease', 
                  answer: 'option1'
              },
              {
                  description: 'Infectious Disease', 
                  answer: 'option1'
              },
              {
                  description: 'Immunosuppression/Neutropenia', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentINFECTIOUSMedications  = {
          questions: [
              {
                  description: 'Antibiotics', 
                  answer: 'option1'
              },
              {
                  description: 'Antivirals', 
                  answer: 'option1'
              }
      ]
      };     
var UrgentWOUND = {
          questions: [
              {
                  description: 'Burn Care', 
                  answer: 'option1'
              },
              {
                  description: 'Dressing Change', 
                  answer: 'option1'
              },
              {
                  description: 'Ostomy Care', 
                  answer: 'option1'
              },
              {
                  description: "Wound Repair (Staples/Sutures, etc.)", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };      
var UrgentPAINMANAGEMENT = {
          questions: [
              {
                  description: 'Assessment of Pain Level/Use of Pain Scale', 
                  answer: 'option1'
              },
              {
                  description: 'Assessment of Response to Pain Management Interventions', 
                  answer: 'option1'
              },
              {
                  description: 'Monitoring of Patients after Pain Medication', 
                  answer: 'option1'
              },
              {
                  description: "Comfort Care", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: 'Moderate Sedation', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentPSYCHIATRICAssessment = {
          questions: [
              {
                  description: 'Behavior', 
                  answer: 'option1'
              },
              {
                  description: 'Drug/ETOH', 
                  answer: 'option1'
              },
              {
                  description: 'Risk for Violence', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentPSYCHIATRICEquipment    = {
          questions: [
              {
                  description: 'Managing Threatening/Violent Behavior', 
                  answer: 'option1'
              },
              {
                  description: ' Psychiatric Hold', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentPSYCHIATRICCareof    = {
          questions: [
              {
                  description: 'Drug OD', 
                  answer: 'option1'
              },
              {
                  description: 'ETOH OD', 
                  answer: 'option1'
              },
              {
                  description: 'Depression/Anxiety ', 
                  answer: 'option1'
              },
              {
                  description: "Restraints", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Suicide Risk", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentPSYCHIATRICMedications  = {
          questions: [
              {
                  description: 'Antipsychotics/Antidepressants', 
                  answer: 'option1'
              },
              {
                  description: 'Reversal Agents', 
                  answer: 'option1'
              }
      ]
      };      
var UrgentWOMENAssessment = {
          questions: [
              {
                  description: 'Vaginal Bleeding', 
                  answer: 'option1'
              },
              {
                  description: 'Doppler/Fetal Heart Tones', 
                  answer: 'option1'
              },
              {
                  description: 'Ectopic Pregnancy', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentWOMENEquipment    = {
          questions: [
              {
                  description: 'Obtain Cultures', 
                  answer: 'option1'
              },
              {
                  description: 'Pelvic Tray', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentWOMENCareof    = {
          questions: [
              {
                  description: 'Ectopic Pregnancy', 
                  answer: 'option1'
              },
              {
                  description: 'Hemorrhage', 
                  answer: 'option1'
              },
              {
                  description: 'Pelvic Inflammatory Disease', 
                  answer: 'option1'
              },
              {
                  description: "Placenta Abruptio/Previa ", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Precipitous Delivery", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Pregnancy-Induced Hypertension", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Spontaneous Abortion", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };      
var UrgentPEDIATRICS = {
          questions: [
              {
                  description: 'Child Abuse Recognition/Reporting', 
                  answer: 'option1'
              },
              {
                  description: 'Shaken Baby Syndrome', 
                  answer: 'option1'
              },
              {
                  description: 'Obtaining Consent to Treat', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentPEDIATRICSAssessment    = {
          questions: [
              {
                  description: 'Normal VS for age groups ', 
                  answer: 'option1'
              },
              {
                  description: 'Use of Dynamap/Doppler Leg Cuffs for B/P', 
                  answer: 'option1'
              },
              {
                  description: 'Failure to Thrive', 
                  answer: 'option1'
              }
      ]
      };   
var UrgentPEDIATRICSEquipment    = {
          questions: [
              {
                  description: 'Assist with Fracture Stabilization ', 
                  answer: 'option1'
              },
              {
                  description: 'Cooling/Warming Measures ', 
                  answer: 'option1'
              },
              {
                  description: 'Draw Labs (Venous/Butterfly) ', 
                  answer: 'option1'
              },
              {
                  description: "Ear Care-Assist with Cleaning/Wash, Insert Ear Drops", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "IM/SQ Medications in Pediatric Patients", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: 'Obtain RSV Culture', 
                  answer: 'option1'
              },
              {
                  description: 'Obtain Urine Culture (Cath/Bag) ', 
                  answer: 'option1'
              },
              {
                  description: "Lumbar Puncture", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Papoose Board/Therapeutic Hold", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Start IV in Pediatric Patient", 
                  answer: 'option1',
                  name:'input'
              }
              
              
              
              
              
              
              
      ]
      };      
var UrgentPEDIATRICSCareof    = {
          questions: [
              {
                  description: 'Abdominal Pain', 
                  answer: 'option1'
              },
              {
                  description: 'Aspiration', 
                  answer: 'option1'
              },
              {
                  description: 'Asthma/Reactive Airway Disease', 
                  answer: 'option1'
              },
              {
                  description: "Burns", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Dehydration", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: 'Epiglottitis', 
                  answer: 'option1'
              },
              {
                  description: 'Fever', 
                  answer: 'option1'
              },
              {
                  description: "Foreign Object", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Fracture", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: 'Head Injury', 
                  answer: 'option1'
              },
              {
                  description: "Hypo/Hyperglycemia", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Hypo/Hyperthermia", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: 'Lacerations', 
                  answer: 'option1'
              },
              {
                  description: "Near Drowning", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Nursemaid's Elbow", 
                  answer: 'option1',
                  name:'input'
              }       
      ]
      };   
var UrgentPEDIATRICSMedications    = {
          questions: [
              {
                  description: 'Ipecac/Charcoal', 
                  answer: 'option1'
              },
              {
                  description: 'Bronchodilators/Nebulizers', 
                  answer: 'option1'
              },
              {
                  description: 'Fluid Replacement', 
                  answer: 'option1'
              }
      ]
      };    
var UrgentMISCELLANEOUS     = {
          questions: [
              {
                  description: 'Intake and Triage', 
                  answer: 'option1'
              },
              {
                  description: 'National Patient Safety Goals', 
                  answer: 'option1'
              },
              {
                  description: 'AMA procedures', 
                  answer: 'option1'
              },
              {
                  description: "Disaster Management", 
                  answer: 'option1',
                  name:'input'
              },
              {
                  description: "Computerized Charting", 
                  answer: 'option1',
                  name:'input'
              }
      ]
      };   
var UrgentMISCELLANEOUSCareof  = {
          questions: [
              {
                  description: 'Bites', 
                  answer: 'option1'
              },
              {
                  description: 'Hazardous Materials Exposure', 
                  answer: 'option1'
              },
              {
                  description: 'Victims of Acts of Violence', 
                  answer: 'option1'
              }
      ]
      };   
        
this.UrgentAssessment = UrgentAssessment;
this.UrgentInterpretation = UrgentInterpretation;
this.UrgentEquipment = UrgentEquipment;
this.UrgentCareof = UrgentCareof;
this.UrgentMedications = UrgentMedications;
this.UrgentPULAssessment = UrgentPULAssessment;
this.UrgentPULInterpretation = UrgentPULInterpretation;
this.UrgentPULEquipment = UrgentPULEquipment;
this.UrgentPULCare = UrgentPULCare;
this.UrgentPULMedications = UrgentPULMedications;
this.UrgentNEUAssessment = UrgentNEUAssessment;
this.UrgentNEUEquipment = UrgentNEUEquipment;
this.UrgentNEUCare = UrgentNEUCare;
this.UrgentNEUMedications = UrgentNEUMedications;
this.UrgentORTAssessment = UrgentORTAssessment;
this.UrgentORTEquipment = UrgentORTEquipment;
this.UrgentORTCare = UrgentORTCare;
this.UrgentORTMedications = UrgentORTMedications;
this.UrgentGASTAssessment = UrgentGASTAssessment;
this.UrgentGASTEquipment = UrgentGASTEquipment;
this.UrgentGASTCare = UrgentGASTCare;
this.UrgentGASTMedications = UrgentGASTMedications;
this.UrgentRENALAssessment = UrgentRENALAssessment;
this.UrgentRENALInterpretation = UrgentRENALInterpretation;
this.UrgentRENALEquipment = UrgentRENALEquipment;
this.UrgentRENALCare = UrgentRENALCare;
this.UrgentRENALMedications = UrgentRENALMedications;
this.UrgentENDOCRAssessment = UrgentENDOCRAssessment;
this.UrgentENDOCRInterpretation = UrgentENDOCRInterpretation;
this.UrgentENDOCREquipment = UrgentENDOCREquipment;
this.UrgentENDOCRCareof = UrgentENDOCRCareof;
this.UrgentENDOCRMedications = UrgentENDOCRMedications;
this.UrgentEENTAssessment = UrgentEENTAssessment;
this.UrgentEENTEquipment = UrgentEENTEquipment;
this.UrgentEENTMedications = UrgentEENTMedications;
this.UrgentINFECTIOUSAssessment = UrgentINFECTIOUSAssessment;
this.UrgentINFECTIOUSEquipment = UrgentINFECTIOUSEquipment;
this.UrgentINFECTIOUSCare = UrgentINFECTIOUSCare;
this.UrgentINFECTIOUSMedications = UrgentINFECTIOUSMedications;
this.UrgentWOUND = UrgentWOUND;
this.UrgentPAINMANAGEMENT = UrgentPAINMANAGEMENT;
this.UrgentPSYCHIATRICAssessment = UrgentPSYCHIATRICAssessment;
this.UrgentPSYCHIATRICEquipment = UrgentPSYCHIATRICEquipment;
this.UrgentPSYCHIATRICCareof = UrgentPSYCHIATRICCareof;
this.UrgentPSYCHIATRICMedications = UrgentPSYCHIATRICMedications;
this.UrgentPEDIATRICS = UrgentPEDIATRICS;
this.UrgentPEDIATRICSAssessment = UrgentPEDIATRICSAssessment;
this.UrgentPEDIATRICSEquipment = UrgentPEDIATRICSEquipment;
this.UrgentPEDIATRICSCareof = UrgentPEDIATRICSCareof;
this.UrgentPEDIATRICSMedications = UrgentPEDIATRICSMedications;
this.UrgentMISCELLANEOUS = UrgentMISCELLANEOUS;
this.UrgentMISCELLANEOUSCareof = UrgentMISCELLANEOUSCareof;
this.UrgentWOMENAssessment = UrgentWOMENAssessment;
this.UrgentWOMENEquipment = UrgentWOMENEquipment;
this.UrgentWOMENCareof = UrgentWOMENCareof;
// ============ Checklist Form No-22 =========== //////////

       ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ======================== PT/PTA Skills Checklist Form No-24==========================//  
      

var ptaSkillsWORKSETTINGS  = {
          questions: [
              {
                  description: 'Acute Care', 
                  answer: 'option1'
              },
              {
                  description: 'Rehabilitation Facility', 
                  answer: 'option1'
              },
              {
                  description: 'Outpatient', 
                  answer: 'option1'
              },
              {
                  description: "Children's Hospital", 
                  answer: 'option1'
              },
              {
                  description: 'Home Health Care', 
                  answer: 'option1'
              },
              {
                  description: 'Skilled Nursing Care', 
                  answer: 'option1'
              },
              {
                  description: 'Long Term Acute Care (LTAC)', 
                  answer: 'option1'
              },
              {
                  description: 'School', 
                  answer: 'option1'
              }
      ]
      };      
var ptaSkillsMODALITIES  = {
          questions: [
              {
                  description: 'Manual Therapy', 
                  answer: 'option1'
              },
              {
                  description: 'Taping/Strapping', 
                  answer: 'option1'
              },
              {
                  description: 'Bracing/Joint Immobilization', 
                  answer: 'option1'
              },
              {
                  description: 'Spinal Mobilization', 
                  answer: 'option1'
              },
              {
                  description: 'Extremity Mobilization', 
                  answer: 'option1'
              },
              {
                  description: 'Mechanical Traction', 
                  answer: 'option1'
              },
              {
                  description: 'Strength and Endurance Training', 
                  answer: 'option1'
              },
              {
                  description: 'Compression Stockings', 
                  answer: 'option1'
              },
              {
                  description: 'Gait Analysis', 
                  answer: 'option1'
              },
              {
                  description: 'Adaptive Equipment', 
                  answer: 'option1'
              },
              {
                  description: 'Therapeutic Exercise/Home Programs', 
                  answer: 'option1'
              },
              {
                  description: 'Aquatic Therapy', 
                  answer: 'option1'
              },
              {
                  description: 'Muscle Energy Techniques', 
                  answer: 'option1'
              },
              {
                  description: 'Continuous Passive Motion Machine', 
                  answer: 'option1'
              },
              {
                  description: 'Ultrasound', 
                  answer: 'option1'
              },
              {
                  description: 'Diathermy', 
                  answer: 'option1'
              },
              {
                  description: 'Myofascial Release', 
                  answer: 'option1'
              },
              {
                  description: 'Electrical Stimulation', 
                  answer: 'option1'
              },
              {
                  description: 'Biofeedback', 
                  answer: 'option1'
              },
              {
                  description: 'TENS ', 
                  answer: 'option1'
              }
      ]
      };   
var ptaSkillsEVALUATION   = {
          questions: [
              {
                  description: ' Evaluation for Treatment/Services', 
                  answer: 'option1'
              },
              {
                  description: 'Biodex', 
                  answer: 'option1'
              },
              {
                  description: 'Fatigue Characteristics', 
                  answer: 'option1'
              },
              {
                  description: 'Fiber Type', 
                  answer: 'option1'
              },
              {
                  description: 'Work Capacity', 
                  answer: 'option1'
              },
              
              {
                  description: 'NeuroCom Balance', 
                  answer: 'option1'
              },
              {
                  description: 'Wheelchair/Equipment Assessment ', 
                  answer: 'option1'
              }
      ]
      };
var ptaSkillsORTHOPEDICS  = {
          questions: [
              {
                  description: 'Total Joint Replacement', 
                  answer: 'option1'
              },
              {
                  description: 'Back Syndromes', 
                  answer: 'option1'
              },
              {
                  description: 'Neck Injury', 
                  answer: 'option1'
              },
              {
                  description: 'Hand Injury', 
                  answer: 'option1'
              },
              {
                  description: 'Arthritis', 
                  answer: 'option1'
              },
              {
                  description: 'Transmandibular Joint Dysfunction ', 
                  answer: 'option1'
              }
      ]
      };      
var ptaSkillsNEUROLOGIC  = {
          questions: [
              {
                  description: 'Brain Injury', 
                  answer: 'option1'
              },
              {
                  description: 'SCI', 
                  answer: 'option1'
              },
              {
                  description: 'CVA', 
                  answer: 'option1'
              },
              {
                  description: 'Degenerative Diseases', 
                  answer: 'option1'
              },
              {
                  description: 'Head Trauma/Concussion', 
                  answer: 'option1'
              },
              {
                  description: 'Vertigo', 
                  answer: 'option1'
              },
              {
                  description: 'BPPV', 
                  answer: 'option1'
              }
      ]
      };    
var ptaSkillsPROSTHETICS  = {
          questions: [
              {
                  description: 'Above/Below Knee Prosthetics', 
                  answer: 'option1'
              },
              {
                  description: 'Ankle/Foot Orthosis', 
                  answer: 'option1'
              },
              {
                  description: 'Static Splints', 
                  answer: 'option1'
              },
              {
                  description: 'Dynamic Splints ', 
                  answer: 'option1'
              }
      ]
      };    
var ptaSkillsPEDIATRICS  = {
          questions: [
              {
                  description: 'Early Intervention Programs', 
                  answer: 'option1'
              },
              {
                  description: 'Gross Motor Assessments', 
                  answer: 'option1'
              },
              {
                  description: 'Neurodevelopmental Treatment', 
                  answer: 'option1'
              },
              {
                  description: 'Cerebral Palsy ', 
                  answer: 'option1'
              }
      ]
      };      
var ptaSkillsWOUNDCARE  = {
          questions: [
              {
                  description: 'Pressure Ulcers', 
                  answer: 'option1'
              },
              {
                  description: 'Arterial Ulcers', 
                  answer: 'option1'
              },
              {
                  description: 'Venous Ulcers', 
                  answer: 'option1'
              },
              {
                  description: 'Diabetic Ulcers', 
                  answer: 'option1'
              },
              {
                  description: 'Burn Management ', 
                  answer: 'option1'
              }
      ]
      };     
var ptaSkillsCARDIOPULMONARY  = {
          questions: [
              {
                  description: 'Cardiac Rehab', 
                  answer: 'option1'
              },
              {
                  description: 'Post Surgical', 
                  answer: 'option1'
              },
              {
                  description: 'Chest Physiotherapy', 
                  answer: 'option1'
              },
              {
                  description: 'Cardiac Disorders', 
                  answer: 'option1'
              },
              {
                  description: 'Pulmonary Disorders ', 
                  answer: 'option1'
              }
      ]
      };             
var ptaSkillsTECHNOLOGY  = {
          questions: [
              {
                  description: 'Casamba (Smart)', 
                  answer: 'option1',
                  name:'ptaSkillsTECHNOLOGY1'
              },
              {
                  description: 'Care Manager', 
                  answer: 'option1',
                  name:'ptaSkillsTECHNOLOGY2'
              },
              {
                  description: 'Cerner', 
                  answer: 'option1',
                  name:'ptaSkillsTECHNOLOGY3'
              },
              {
                  description: 'Epic', 
                  answer: 'option1',
                  name:'ptaSkillsTECHNOLOGY4'
              },
              {
                  description: 'McKesson', 
                  answer: 'option1',
                  name:'ptaSkillsTECHNOLOGY5'
              },
              {
                  description: 'Meditech', 
                  answer: 'option1',
                  name:'ptaSkillsTECHNOLOGY6'
              },
              {
                  description: 'Rehab Optima', 
                  answer: 'option1',
                  name:'ptaSkillsTECHNOLOGY7'
              },
              {
                  description: 'Other (fill in the blank )', 
                  answer: 'option1',
                  name:'OtherSpecify1'
              },
              {
                  description: 'Other (fill in the blank )', 
                  answer: 'option1',
                  name:'OtherSpecify2'
              }
      ]
      };      
var ptaSkillsEMRConversion  = {
          questions: [
              {
                  description: 'EMR Conversion', 
                  answer: 'option1'
              }
      ]
      };           
var ptaSkillsBILLING = {
          questions: [
              {
                  description: 'RUG Levels', 
                  answer: 'option1'
              },
              {
                  description: 'Medicare Part A', 
                  answer: 'option1'
              },
              {
                  description: 'Medicare Part B', 
                  answer: 'option1'
              },
              {
                  description: 'Medicaid/Medical', 
                  answer: 'option1'
              },
              {
                  description: 'OASIS ', 
                  answer: 'option1'
              }
      ]
      };     
var ptaSkillsPROFESSIONAL   = {
          questions: [
              {
                  description: 'Supervisory/Management Experience', 
                  answer: 'option1'
              },
              {
                  description: 'Screening/Adding Caseload', 
                  answer: 'option1'
              },
              {
                  description: 'National Patient Safety Goals/Core Measures', 
                  answer: 'option1'
              },
              {
                  description: 'Fall Risk Assessment/Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Age Specific/Population-Based Care', 
                  answer: 'option1'
              },
              {
                  description: 'Infection Prevention', 
                  answer: 'option1'
              },
              {
                  description: 'Pain Assessment & Management ', 
                  answer: 'option1'
              }
      ]
      };        
var ptaSkillsCERTIFICATIONS   = {
          questions: [
              
              {
                  description: '"BIG" Certification', 
                  answer: 'option1'
              },
              {
                  description: 'Lymphedema Management', 
                  answer: 'option1'
              },
              {
                  description: 'ATC', 
                  answer: 'option1'
              },
              {
                  description: 'NDT', 
                  answer: 'option1'
              },
              {
                  description: 'BLS', 
                  answer: 'option1'
              }
              
      ]
      };       
      
      this.ptaSkillsWORKSETTINGS = ptaSkillsWORKSETTINGS;       
      this.ptaSkillsMODALITIES = ptaSkillsMODALITIES;  
      this.ptaSkillsEVALUATION = ptaSkillsEVALUATION;     
      this.ptaSkillsORTHOPEDICS = ptaSkillsORTHOPEDICS;       
      this.ptaSkillsNEUROLOGIC = ptaSkillsNEUROLOGIC;  
      this.ptaSkillsPROSTHETICS = ptaSkillsPROSTHETICS; 
      this.ptaSkillsPEDIATRICS = ptaSkillsPEDIATRICS;  
      this.ptaSkillsWOUNDCARE = ptaSkillsWOUNDCARE;       
      this.ptaSkillsCARDIOPULMONARY = ptaSkillsCARDIOPULMONARY;  
      this.ptaSkillsTECHNOLOGY = ptaSkillsTECHNOLOGY;  
      this.ptaSkillsEMRConversion = ptaSkillsEMRConversion;       
      this.ptaSkillsBILLING = ptaSkillsBILLING;  
      this.ptaSkillsPROFESSIONAL = ptaSkillsPROFESSIONAL;   
      this.ptaSkillsCERTIFICATIONS = ptaSkillsCERTIFICATIONS;  
// ======================== PT/PTA Skills Checklist Form No-24==========================//  
      
//=============== 
      this.optionArray = optionArray;
      //page5 
      this.workSetting = workSetting;
      this.setupInitiateDialsysTreatment = setupInitiateDialsysTreatment;
      this.AssignementDuringDialsys = AssignementDuringDialsys;
      this.PatientManagement = PatientManagement;
      this.DialysisEquipment = DialysisEquipment;
      this.ProfessionKnowledgeAndSkills = ProfessionKnowledgeAndSkills;
      /* accordion list */
      this.skilllist_Checkbox = skilllist_Checkbox;
      this.skilllist_Checkbox2 = skilllist_Checkbox2;
      this.skilllist_Checkbox3 = skilllist_Checkbox3;
      /* page1 */
      this.experiencefollowingsetting = experiencefollowingsetting;
      this.patientEquipmentPreparation = patientEquipmentPreparation;
      this.interpretFollowingRhythms = interpretFollowingRhythms;
      this.monitoringSystemsUsed = monitoringSystemsUsed;
      this.miscellaneous = miscellaneous;
      /* page2 */
      this.setting = setting;
      this.cmSoftware = cmSoftware;
      this.regulatory = regulatory;
      this.processes = processes;
      this.peofessionalKnowledgeskills = peofessionalKnowledgeskills;
      this.emr = emr;
      this.emrConverion = emrConverion;
      /* page3 */
      this.cathWorkSetting = cathWorkSetting;
      this.cathEquipment = cathEquipment;
      this.cathprocedures = cathprocedures;
      this.cathElectrophysiology = cathElectrophysiology;
      this.cathGatrointrstinal = cathGatrointrstinal;
      this.cathGenitourinary = cathGenitourinary;
      this.cathNeurologic = cathNeurologic;
      this.cathPeripheral = cathPeripheral;
      this.cathPulmonary = cathPulmonary;
      this.cathknowledgeknowledge = cathknowledgeknowledge;
      this.cathEmr = cathEmr;
      this.cathNeurologicConversion = cathNeurologicConversion;
      /* page4 */
      this.cardiac = cardiac;
      this.pulmonary = pulmonary;
      this.neurologicalPsychiatric = neurologicalPsychiatric;
      this.gastrointestinal = gastrointestinal;
      this.renalGenitourinary = renalGenitourinary;
      this.endocrineMetabolic = endocrineMetabolic;
      this.medications = medications;
      this.ivtherapy = ivtherapy;
      this.cardicMoitoring = cardicMoitoring;
      this.professionalSkills = professionalSkills;
      this.criticalEmr = criticalEmr;

     /* page6 */
      this.emergencyWorkSetting = emergencyWorkSetting;
      this.emergencyCardiac = emergencyCardiac;
      this.emergencyPulmonary = emergencyPulmonary;
    
      this.emergencyNeurological = emergencyNeurological;
      this.emergencyorthopedics = emergencyorthopedics;
      this.emergencyGastrointestinal = emergencyGastrointestinal;
      
      this.emergencyRenal = emergencyRenal;
      this.emergencyEndocrine = emergencyEndocrine;
      this.emergencyWoundManagement = emergencyWoundManagement;
      
      this.emergencyShock = emergencyShock;
      this.emergencyInfectious = emergencyInfectious;
      this.emergencyWomenHealth = emergencyWomenHealth;
      
      this.emergencyPediatrics = emergencyPediatrics;
      this.emergencyPsychiatric = emergencyPsychiatric;
      this.emergencyMiscellaneous = emergencyMiscellaneous;
      
      this.emergencyIvTherapy = emergencyIvTherapy;
      this.emergencyMedications = emergencyMedications;
      this.emergencyEmergResponse = emergencyEmergResponse;
      
      this.emergencyKnowledgeSkills = emergencyKnowledgeSkills;
      this.emergencyEmr = emergencyEmr;
      this.emergencyConversion = emergencyConversion;
     
      /* end page6*/
      
      
      /* page7 */
      this.homeHealthCardiovascular = homeHealthCardiovascular;
      this.homeHealthPulmonary = homeHealthPulmonary;
      this.homeHealthNeurological = homeHealthNeurological;
      this.homeHealthOrthopedics = homeHealthOrthopedics;
      this.homeHealthGastronitestinal = homeHealthGastronitestinal;
      this.homeHealthRenal = homeHealthRenal;
      this.homeHealthEndocrine = homeHealthEndocrine;
      this.homeHealthWoundSkin = homeHealthWoundSkin;
      this.homeHealthOncology = homeHealthOncology;
      this.homeHealthInfections = homeHealthInfections;
      this.homeHealthPhlebotomy = homeHealthPhlebotomy;
      this.homeHealthPsychiatric = homeHealthPsychiatric;
      this.homeHealthWomenHealth = homeHealthWomenHealth;
      this.homeHealthPediatrics = homeHealthPediatrics;
      this.homeHealthPainManagement = homeHealthPainManagement;
      this.homeHealthPalliative = homeHealthPalliative;
      this.homeHealthMedications = homeHealthMedications;
      this.homeHealthHomeheal = homeHealthHomeheal;
      this.homeHealthProfessional = homeHealthProfessional;
      this.homeHealthEMR = homeHealthEMR;
      this.homeHealthConversion = homeHealthConversion;
      /* end page7*/
      
      
    /* page8 */
    this.hspiceWork = hspiceWork;
    this.hspiceAssessment = hspiceAssessment;
    this.hspicePlanCare = hspicePlanCare;
    this.hspiceSymptom = hspiceSymptom;
    this.hspicePainManagment = hspicePainManagment;
    this.hspiceWound = hspiceWound;
    this.hspicePediatrics = hspicePediatrics;
    this.hspiceMedication = hspiceMedication;
    this.hspiceDeath = hspiceDeath;
    this.hspiceCompliance = hspiceCompliance;
    this.hspiceSkills = hspiceSkills;
    this.hspiceEmr = hspiceEmr;
    this.hspiceEmrConversion = hspiceEmrConversion;
    /* end page8*/ 
      
      
      
     /* page9 */  
    this.informaticsCerner = informaticsCerner;
    this.informaticsEclipsys = informaticsEclipsys;
    this.informaticsEpic = informaticsEpic;
    this.informaticsGeIdx = informaticsGeIdx; 
    this.informaticsMckesson = informaticsMckesson;
    this.informaticsMeditech = informaticsMeditech;
    this.informaticsOtherNameSec = informaticsOtherNameSec;
    this.informaticsOtherName = informaticsOtherName;
    this.informaticsCertification = informaticsCertification;
    this.informaticsDegree = informaticsDegree;
      
/* end page9*/ 
      
      
      
      
      
      
      
/* page10 */ 
this.intermediateCardiac = intermediateCardiac;
this.intermediatePulmonary = intermediatePulmonary;   
this.intermediateNeurologic = intermediateNeurologic;      
this.intermediateGastroin = intermediateGastroin;   
this.intermediateRenal = intermediateRenal;   
this.intermediateEndocrine = intermediateEndocrine;      
this.intermediateMedications = intermediateMedications;   
this.intermediateTherapy = intermediateTherapy;   
this.intermediateResponse = intermediateResponse;    
this.intermediateEmr = intermediateEmr;       
this.intermediateSkills = intermediateSkills; 
this.intermediateEmrConversion = intermediateEmrConversion;   
/* end page10*/
      
  
 /* page11 */  
    this.laborskillsWORK = laborskillsWORK;
    this.laborskillsANTEPARTUM = laborskillsANTEPARTUM;
    this.laborskillsSPECIAL = laborskillsSPECIAL;
      
    this.laborskillsPAIN = laborskillsPAIN; 
    this.laborskillsFETAL = laborskillsFETAL;
    this.laborskillsLABOR = laborskillsLABOR;
      
    this.laborskillsDELIVERY = laborskillsDELIVERY;
    this.laborskillsNEONATAL = laborskillsNEONATAL;
    this.laborskillsCOMPLICATIONS = laborskillsCOMPLICATIONS;
    this.laborskillsPARTUM = laborskillsPARTUM;   
           
    this.laborskillsMEDICATIONS = laborskillsMEDICATIONS; 
    this.laborskillsTHERAPY = laborskillsTHERAPY;
    this.laborskillsNEWBORN = laborskillsNEWBORN;
      
    this.laborskillsPROFESSIONAL = laborskillsPROFESSIONAL; 
    this.laborskillsEMR = laborskillsEMR;
    this.laborskillsEMRConversion = laborskillsEMRConversion;
      
           
            
/* page12 */ 
this.medicalCardiac = medicalCardiac;
this.medicalPULMONARY = medicalPULMONARY;   
this.medicalNeurological = medicalNeurological; 
            
this.medicalORTHOPEDICS = medicalORTHOPEDICS;   
this.medicalGASTROINTESTINAL = medicalGASTROINTESTINAL;   
this.medicalRENALEndocrine = medicalRENALEndocrine;
           
this.medicalEndocrine = medicalEndocrine;   
this.medicalONCOLOGY = medicalONCOLOGY;   
this.medicalMEDICATIONS = medicalMEDICATIONS; 
           
this.medicalTHERAPY = medicalTHERAPY;       
this.medicalRESPONSE = medicalRESPONSE; 
this.medicalPROFESSIONAL = medicalPROFESSIONAL; 
          
this.medicalEMR = medicalEMR;       
this.medicalEMRConversion = medicalEMRConversion;        
/* end page12*/  
    
      
      
/* page13 */ 
this.nicuskillsPattient = nicuskillsPattient;
this.nicuskillsWorksetting = nicuskillsWorksetting;   
this.nicuskillsCard = nicuskillsCard; 
            
this.nicuskillsPULMONARY = nicuskillsPULMONARY;   
this.nicuskillsNEUROLOGIC = nicuskillsNEUROLOGIC;   
this.nicuskillsGASTROINTESTINAL = nicuskillsGASTROINTESTINAL;
           
this.nicuskillsFEEDINGS = nicuskillsFEEDINGS;   
this.nicuskillsRENAL = nicuskillsRENAL;   
this.nicuskillsINFECTIOUS = nicuskillsINFECTIOUS; 
           
this.nicuskillsMEDICATIONS = nicuskillsMEDICATIONS;       
this.nicuskillsTHERAPY = nicuskillsTHERAPY; 
this.nicuskillsCARDIAC = nicuskillsCARDIAC; 
          
this.nicuskillsKNOWLEDGE = nicuskillsKNOWLEDGE;       
this.nicuskillsEMR = nicuskillsEMR; 
this.nicuskillsEMRConversion = nicuskillsEMRConversion;             
/* end page13*/      
            

      
    /* page15 */ 
this.pacuCARDIOVASCULAR = pacuCARDIOVASCULAR;
this.pacuPULMONARY = pacuPULMONARY;
this.pacuNEUROLOGIC = pacuNEUROLOGIC;
      
this.pacuGASTROINTESTINAL = pacuGASTROINTESTINAL;
this.pacuRENAL = pacuRENAL;
this.pacuEndocrine = pacuEndocrine;
       
this.pacuORTHOPEDIC = pacuORTHOPEDIC;
this.pacuWOUND = pacuWOUND;
this.pacuMEDICATIONS = pacuMEDICATIONS;
      
this.pacuTHERAPY = pacuTHERAPY;
this.pacuCARDIAC = pacuCARDIAC;
this.pacuPROFESSIONAL = pacuPROFESSIONAL;
           
this.pacuEMR = pacuEMR;
this.pacuEMRConversion = pacuEMRConversion; 
/* end page15*/          
    
      
       /* page15 */ 
//this.ppacuCARDIOVASCULAR = ppacuCARDIOVASCULAR;
//this.ppacuPULMONARY = pacuCARDIACpacuPULMONARY;
//this.ppacuNEUROLOGIC = pacuCARDIACpacuNEUROLOGIC;
//      
//this.ppacuGASTROINTESTINAL = ppacuGASTROINTESTINAL;
//this.ppacuRENAL = ppacuRENAL;
//this.ppacuEndocrine = pacuCARDIACpacuEndocrine;
//       
//this.ppacuORTHOPEDIC = ppacuORTHOPEDIC;
//this.ppacuWOUND = ppacuWOUND;
//this.ppacuMEDICATIONS = ppacuMEDICATIONS;
//      
//this.ppacuTHERAPY = ppacuTHERAPY;
//this.ppacuCARDIAC = ppacuCARDIAC;
//this.ppacuPROFESSIONAL = ppacuPROFESSIONAL;
//           
//this.ppacuEMR = ppacuEMR;
//this.ppacuEMRConversion = ppacuEMRConversion; 
/* end page15*/     
      
      
       
      
      
      
      
/* page16 */ 
this.pediatricCARDIOVASCULAR = pediatricCARDIOVASCULAR;
this.pediatricPULMONARY = pediatricPULMONARY;
this.pediatricNEUROLOGICAL = pediatricNEUROLOGICAL;
      
this.pediatricORTHOPEDIC = pediatricORTHOPEDIC;
this.pediatricGASTROINTESTINAL = pediatricGASTROINTESTINAL;
this.pediatricENDOCRINE = pediatricENDOCRINE;
       
this.pediatricGENITOURINARY = pediatricGENITOURINARY;
this.pediatricOBGYN = pediatricOBGYN;
this.pediatricEENT = pediatricEENT;
      
this.pediatricTRAUMA = pediatricTRAUMA;
this.pediatricInfectious = pediatricInfectious;
this.pediatricPSYCHIATRIC = pediatricPSYCHIATRIC;
           
this.pediatricMEDICATIONS = pediatricMEDICATIONS;
this.pediatricPROFESSIONAL = pediatricPROFESSIONAL;
this.pediatricEMR = pediatricEMR;
this.pediatricEMRConversion = pediatricEMRConversion;   
/* end page16*/    
         
}