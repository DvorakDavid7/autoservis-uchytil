const t="https://dvorakdavid.info";async function e(){return await(await fetch(`${t}/api/reservation/all`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}})).json()}export{t as A,e as g};
