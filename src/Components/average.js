import { useEffect } from "react";
import db from "../../../../firebase";
import {oee, oeecount, avail,availcount, qual,qualcount, per, percount} from "./Ws1ParaInfo";

export function sendAverage(){

    if(oee && oeecount && avail && availcount && qual && qualcount && per && percount){
    let oldOee;
    let oldAvail;
    let oldQual;
    let oldPer;
    
    let newOee = Math.round((oee/oeecount)*100)/100;
    let newAvail = Math.round((avail/availcount)*100)/100;
    let newQual = Math.round((qual/qualcount)*100)/100;
    let newPer = Math.round((per/percount)*100)/100;


    db.collection('Analytics').doc('Parameters').onSnapshot((snap) => {
        oldOee = snap.data().oee;
        oldAvail= snap.data().availability;
        oldQual = snap.data().quality;
        oldPer = snap.data().performance;

        newOee = (newOee + oldOee)/2;
        newPer = (newPer + oldPer)/2;
        newQual = (newQual + oldQual)/2;
        newAvail = (newAvail+ oldAvail)/2;
    
        console.log(newOee + " " + newAvail + " " + newPer + " " +newQual);
        
    //     if(newOee && newAvail && newPer && newQual){
    //     db.collection('Analytics').doc('Parameters').update({
    //         "oee" : Math.round(newOee * 100)/100,
    //         'availability' : Math.round(newAvail * 100 )/100,
    //         'quality' : Math.round(newQual * 100 )/100,
    //         'performance' : Math.round(newPer * 100)/100,
    //     })
    // }
    
    })

    
 

}

}