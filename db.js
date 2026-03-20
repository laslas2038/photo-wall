export function getDB(){
return JSON.parse(localStorage.getItem("db")||"{}");
}

export function saveDB(db){
localStorage.setItem("db",JSON.stringify(db));
}

export function addFoto(evento,url){
let db=getDB();
if(!db[evento]) db[evento]=[];
db[evento].push({
url:url,
approvata:false,
id:Date.now()
});
saveDB(db);
}

export function approva(evento,id){
let db=getDB();
db[evento]=db[evento].map(f=>{
if(f.id==id) f.approvata=true;
return f;
});
saveDB(db);
}

export function elimina(evento,id){
let db=getDB();
db[evento]=db[evento].filter(f=>f.id!=id);
saveDB(db);
}
