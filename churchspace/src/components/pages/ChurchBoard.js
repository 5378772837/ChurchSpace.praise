// import React, { useEffect, useState } from 'react'

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../../css/pages/churchBoard.css'


// function ChurchBoard(props)  {

//   const navigator = useNavigate()

//   const [subjects, setSubjects]=useState([]);

//   useEffect(() => {
//     if (props.user && props.user.token) {
//       axios.get("http://localhost:8080/Subject/User/findActive", {
//         headers: {
//           Authorization: `Bearer ${props.user.token}`,
//         },
//       })
//         .then((response) => {
//           console.log("response data", response.data);
//           if (Array.isArray(response.data)) {
//             setSubjects(response.data);
//           } else {
//             setSubjects([response.data]);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [props.user]);


//   const handleSubjectClick = (subjectInst) => {
//     console.log("ChurchBoard")
//     console.log(subjectInst)
//     navigator('/Subject', { state: { subject: subjectInst } });
    

// };



    
//       if (subjects.length === 0) {
//         return (
//           <div>Loading Subjects now. If there are no subjects contact your Pastor..</div>
//         );
//       }
      
//       return (
//         <div className = "flex-col fill">
//           {subjects.map((subjectInst) => {
//             const { id, subject, creatorName, active } = subjectInst;
//             return (
              
//               <div className='subject-box' key={id} onClick={() => handleSubjectClick(subjectInst)}>
//                 <div className="flex-row fill">
//                   <div className="cb-info-col">
//                     <div className="flex-col fill">
//                       <div className="flex-row large"> ID: {subjectInst.id}</div>
//                       <div className="flex-row">Creator Name: {subjectInst.creatorName}</div>
//                     </div>
//                   </div>
//                   <div className="cb-blog-col">
//                     <div className='flex-row medium'>Subject: </div>
//                     <div className='flex-row large'>{subjectInst.subject}</div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       );
//         }
//       export default ChurchBoard




import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/churchBoard.css'


function ChurchBoard(props)  {

  const navigator = useNavigate()

  const [subjects, setSubjects]=useState([]);

  useEffect(() => {
    if (props.user && props.user.token) {
      axios.get("http://localhost:8080/Subject/User/findActive", {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
        .then((response) => {
          console.log("response data", response.data);
          if (Array.isArray(response.data)) {
            setSubjects(response.data);
          } else {
            setSubjects([response.data]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.user]);


  const handleSubjectClick = (subjectInst) => {
    console.log("ChurchBoard")
    console.log(subjectInst)
    navigator('/Subject', { state: { subject: subjectInst } });
    

};



    
      if (subjects.length === 0) {
        return (
          <div>Loading Subjects now. If there are no subjects contact your Pastor..</div>
        );
      }
      
      return (
        <div className = "flex-row fill background flex-wrap">
  
          {subjects.map((subjectInst) => {
            const { id, subject, creatorName, active } = subjectInst;
            return (
              
              <div className='subject-box' key={id} onClick={() => handleSubjectClick(subjectInst)}>
   
                  <div className="cb-info-row">
                    <div className="flex-col fill">
                      <div className='flex-row'>Author: </div>
                      <div className='flex-row large'> {subjectInst.creatorName}</div>
                    </div>
                  </div>
                  <div className="cb-blog-row">
                    <div className='flex-row xl'>Subject: </div>
                    <div className='flex-row xl'>{subjectInst.subject}</div>
  
                </div>
              </div>
              

            );
          })}
        </div>
      );
        }
      export default ChurchBoard