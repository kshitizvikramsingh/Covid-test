console.log("Script is loaded!")
const form=document.querySelector("form")
const pincode=document.querySelector("#pin")
const userDate=document.querySelector('#date')
const table=document.querySelector(".table")
let tbody=document.querySelector('#table')
const msg=document.querySelector("#error")
const radio1=document.querySelector("#age-18");
const radio2=document.querySelector("#age-45");
const datepicker=document.querySelector("#user1");
let sessionsLength=0;
let totalTR=0;
let trArray;
let tdArray;
let trname;
let tr,td;
let trCounter=1;
let loopcount=0;
let centers45=[];
let centers18=[];

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    sessionsLength=0;
     loopcount=0;
     trCounter=1
    totalTR=0;
    tbody.remove()
    tbody=document.createElement("tbody");
    table.appendChild(tbody)
   
    
    msg.textContent="Processing Data...";
    
    console.log(pincode.value)
    console.log(datepicker.value)
    fetch("/covid?pincode="+pincode.value+"&date="+datepicker.value).then((response)=>{
        response.json().then((data)=>{
          
          
          if(data.error){
              console.log("Error Happened!!",data.error)
              msg.textContent=data.error
          }
          else{

            if(radio1.checked===true){
                
                let centers=data.data;
                console.log(centers)
                //Calculating no. of rows to add
                for(let i=0;i<centers.length;i++){
                   for(let j=0;j<centers[i].sessions.length;j++){
                    if(centers[i].sessions[j].available_capacity!==0 && centers[i].sessions[j].min_age_limit===18){
                        sessionsLength+=centers[i].sessions.length
                    }
                   }
                    
                    //sessionsLength+=centers[i].sessions.length
                }
    
    
                 totalTR=sessionsLength
                console.log("Total rows=> ",totalTR)
                
                //Appending tr's and td's to webpage
                for(let i=0; i<totalTR;i++){
                    let tr=document.createElement("tr")
                    tbody.appendChild(tr)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                     loopcount=loopcount+1
                }
                console.log(loopcount)
                
                 trArray=document.querySelectorAll("tr");
                //Adding values to td's
                for(let i=0;i<centers.length;i++){
                    for(j=0;j<centers[i].sessions.length;j++){
                        if(centers[i].sessions[j].available_capacity!==0 && centers[i].sessions[j].min_age_limit===18){
                            tdArray=trArray[trCounter].childNodes
                            tdArray[0].textContent=centers[i].name;
                            tdArray[1].textContent=centers[i].fee_type;
                            tdArray[2].textContent=centers[i].address;
                            for(let j=0;j<centers[i].sessions.length;j++){
                                 tdArray=trArray[trCounter].childNodes;
                                tdArray[3].textContent=centers[i].sessions[j].date;
                                 tdArray[4].textContent=centers[i].sessions[j].min_age_limit;
                                tdArray[5].textContent=centers[i].sessions[j].available_capacity_dose1;
                                tdArray[6].textContent=centers[i].sessions[j].available_capacity_dose2;
                                tdArray[7].textContent=centers[i].sessions[j].vaccine;
                                trCounter++;
                       }
                        }
                    }
                }
                if(totalTR===0){
                    msg.textContent="No Vaccine slots available for Age-18 currently, try again later"
                }else{
                    msg.textContent="Processed Data";
                }
                
    
              
            }else if(radio2.checked===true){
                
                let centers=data.data;
                console.log(centers)
               
               
                
                //Calculating no. of rows to add
                for(let i=0;i<centers.length;i++){
                   for(let j=0;j<centers[i].sessions.length;j++){
                    if(centers[i].sessions[j].available_capacity!==0 && centers[i].sessions[j].min_age_limit===45){
                        sessionsLength+=centers[i].sessions.length
                    }
                   }
                    
                    //sessionsLength+=centers[i].sessions.length
                }
    
    
                 totalTR=sessionsLength
                console.log("Total rows=> ",totalTR)
                if(totalTR===0){
                    msg.textContent="No Vaccine slots available for age-45,try again later"
                }
                //Appending tr's and td's to webpage
                for(let i=0; i<totalTR;i++){
                    let tr=document.createElement("tr")
                    tbody.appendChild(tr)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                     loopcount=loopcount+1
                }
                console.log(loopcount)
                
                 trArray=document.querySelectorAll("tr");
                //Adding values to td's
                for(let i=0;i<centers.length;i++){
                    for(j=0;j<centers[i].sessions.length;j++){
                        if(centers[i].sessions[j].available_capacity!==0 && centers[i].sessions[j].min_age_limit===45){
                            tdArray=trArray[trCounter].childNodes
                            tdArray[0].textContent=centers[i].name;
                            tdArray[1].textContent=centers[i].fee_type;
                            tdArray[2].textContent=centers[i].address;
                            for(let j=0;j<centers[i].sessions.length;j++){
                                 tdArray=trArray[trCounter].childNodes;
                                tdArray[3].textContent=centers[i].sessions[j].date;
                                 tdArray[4].textContent=centers[i].sessions[j].min_age_limit;
                                tdArray[5].textContent=centers[i].sessions[j].available_capacity_dose1;
                                tdArray[6].textContent=centers[i].sessions[j].available_capacity_dose2;
                                tdArray[7].textContent=centers[i].sessions[j].vaccine;
                                trCounter++;
                       }
                        }
                    }
                }
                
                if(totalTR===0){
                    msg.textContent="No Vaccine slots available for Age-18 currently, try again later"
                }else{
                    msg.textContent="Processed Data";
                }
    
              
            }else{
                const filterby18= function(el){
                    if(el.min_age_limit===18 && el.available_capacity!==0){
                        return true
                    }else{
                        return false
                    }
                }
                const filterby45= function(el){
                    if(el.min_age_limit===45 && el.available_capacity!==0){
                        return true
                    }else{
                        return false
                    }
                }
                let centers=data.data;
                console.log(centers)
               
                for(let i=0;i<centers.length;i++){
                     centers18[i]=centers[i].sessions.filter(filterby18);
                }
                
                console.log("Array of filter 18>>",centers18);
                
                for(let i=0;i<centers.length;i++){
                     centers45[i]=centers[i].sessions.filter(filterby45);
                }
                
                console.log("Array of filter 45>>",centers45);
                
                //Calculating no. of rows to add
                for(let i=0;i<centers.length;i++){
                   for(let j=0;j<centers[i].sessions.length;j++){
                    if(centers[i].sessions[j].available_capacity!==0){
                        sessionsLength+=centers[i].sessions.length
                    }
                   }
                    
                    //sessionsLength+=centers[i].sessions.length
                }
    
    
                 totalTR=sessionsLength
                console.log("Total rows=> ",totalTR)
                //Appending tr's and td's to webpage
                for(let i=0; i<totalTR;i++){
                    let tr=document.createElement("tr")
                    tbody.appendChild(tr)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                    td=document.createElement("td")
                    tr.appendChild(td)
                     loopcount=loopcount+1
                }
                console.log(loopcount)
                
                 trArray=document.querySelectorAll("tr");
                //Adding values to td's
                for(let i=0;i<centers.length;i++){
                    for(j=0;j<centers[i].sessions.length;j++){
                        if(centers[i].sessions[j].available_capacity!==0){
                            tdArray=trArray[trCounter].childNodes
                            tdArray[0].textContent=centers[i].name;
                            tdArray[1].textContent=centers[i].fee_type;
                            tdArray[2].textContent=centers[i].address;
                            for(let j=0;j<centers[i].sessions.length;j++){
                                 tdArray=trArray[trCounter].childNodes;
                                tdArray[3].textContent=centers[i].sessions[j].date;
                                 tdArray[4].textContent=centers[i].sessions[j].min_age_limit;
                                tdArray[5].textContent=centers[i].sessions[j].available_capacity_dose1;
                                tdArray[6].textContent=centers[i].sessions[j].available_capacity_dose2;
                                tdArray[7].textContent=centers[i].sessions[j].vaccine;
                                trCounter++;
                       }
                        }
                    }
                }
                
                msg.textContent="Processed Data";
    
              }
            }

        //     const filterby18= function(el){
        //         if(el.min_age_limit===18 && el.available_capacity!==0){
        //             return true
        //         }else{
        //             return false
        //         }
        //     }
        //     const filterby45= function(el){
        //         if(el.min_age_limit===45 && el.available_capacity!==0){
        //             return true
        //         }else{
        //             return false
        //         }
        //     }
        //     let centers=data.data;
        //     console.log(centers)
           
        //     for(let i=0;i<centers.length;i++){
        //          centers18[i]=centers[i].sessions.filter(filterby18);
        //     }
            
        //     console.log("Array of filter 18>>",centers18);
            
        //     for(let i=0;i<centers.length;i++){
        //          centers45[i]=centers[i].sessions.filter(filterby45);
        //     }
            
        //     console.log("Array of filter 45>>",centers45);
            
        //     //Calculating no. of rows to add
        //     for(let i=0;i<centers.length;i++){
        //        for(let j=0;j<centers[i].sessions.length;j++){
        //         if(centers[i].sessions[j].available_capacity!==0){
        //             sessionsLength+=centers[i].sessions.length
        //         }
        //        }
                
        //         //sessionsLength+=centers[i].sessions.length
        //     }


        //      totalTR=sessionsLength
        //     console.log("Total rows=> ",totalTR)
        //     //Appending tr's and td's to webpage
        //     for(let i=0; i<totalTR;i++){
        //         let tr=document.createElement("tr")
        //         tbody.appendChild(tr)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //         td=document.createElement("td")
        //         tr.appendChild(td)
        //          loopcount=loopcount+1
        //     }
        //     console.log(loopcount)
            
        //      trArray=document.querySelectorAll("tr");
        //     //Adding values to td's
        //     for(let i=0;i<centers.length;i++){
        //         for(j=0;j<centers[i].sessions.length;j++){
        //             if(centers[i].sessions[j].available_capacity!==0){
        //                 tdArray=trArray[trCounter].childNodes
        //                 tdArray[0].textContent=centers[i].name;
        //                 tdArray[1].textContent=centers[i].fee_type;
        //                 tdArray[2].textContent=centers[i].address;
        //                 for(let j=0;j<centers[i].sessions.length;j++){
        //                      tdArray=trArray[trCounter].childNodes;
        //                     tdArray[3].textContent=centers[i].sessions[j].date;
        //                      tdArray[4].textContent=centers[i].sessions[j].min_age_limit;
        //                     tdArray[5].textContent=centers[i].sessions[j].available_capacity_dose1;
        //                     tdArray[6].textContent=centers[i].sessions[j].available_capacity_dose2;
        //                     tdArray[7].textContent=centers[i].sessions[j].vaccine;
        //                     trCounter++;
        //            }
        //             }
        //         }
        //     }
            
        //     msg.textContent="Processed Data";

        //   }
            




        })
    })
})