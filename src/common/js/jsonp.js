/*
* @Author: Marte
* @Date:   2017-08-09 12:05:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-09 12:26:58
*/

'use strict';
import OriginJsonp from 'jsonp'

export default function jsonp (url,data,option) {

    url += (url.indexOf('?')>0) ? '&'+ params(data) : '?' + params(data);

    return new Promise((resolve,reject)=>{
        OriginJsonp(url,option,(err,data)=>{
            if(!err){
               resolve(data);
            }else{
               reject(err);
            }
        });
    });

}

function params (data) {
    let ret = [];
    for(let key in data){
        ret.push(key+'='+encodeURIComponent(data[key]));
    }

    return data?ret.join('&'):''
}