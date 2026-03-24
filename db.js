export function getDB(){
let db = JSON.parse(localStorage.getItem("db") || '{"eventi":{}}');

if(!db.eventi) db.eventi = {};

return db;
}

export function saveDB(db){
localStorage.setItem("db", JSON.stringify(db));
}

export function addFoto(evento,url){

let db = getDB();

if(!db.eventi[evento]){
db.eventi[evento] = {
nome: evento.toUpperCase(),
foto: []
};
}

db.eventi[evento].foto.push({
url:url,
approvata:false
});

saveDB(db);

}