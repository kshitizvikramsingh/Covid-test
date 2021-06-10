const request=require("request");
let loc={};
let data={};
const slotsByPinWeek=function(pincode,date,callback){
   const options={
       headers:{
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
       }
   }
    request({
        url:"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+pincode+"&date="+date,
        json:true,
    },(error,response)=>{
        
       
        
        //console.log(arrayOfPlaces);
        if(error){
            callback(`Cannot connect to Co-win API server ${error}`,undefined);
        }
        else if(response.body.error){
            callback("Not a valid entry, Please check the input and try again",undefined);

        }else if(response.body.centers===undefined){
            callback(response.body,undefined);

        }else if(response.body.centers.length===0){
            callback("No vaccination centers available for this zip code with the date selected currently,please try again later",undefined);
        }else{
            const arrayOfPlaces=response.body.centers;
            callback(undefined,arrayOfPlaces);
            
        }
    
        
        
    });
}
// slotsByPinWeek('110001','8-6-2021',(error,data)=>{
//     console.log(error)
//     console.log(data)
// })

module.exports={slotsByPinWeek};