// Count characters in your string

function count (string) {  
 let count= {}
 for ( const s of string){
   if (count[s]) {
     count[s] += 1;
   } else {
     count[s] = 1
   }
 }
   return (count);
}

//Who's online

const whosOnline = (friends) => {
    let obj = {}
    let online = []
    let offline = []
    let away = []
    friends.forEach( user => {
      if (user.status === 'offline'){
       offline.push(user.username)
        obj.offline = offline
        //console.log(offline)
      }
      if (user.status === 'online' && (user.lastActivity > 10)){
        away.push(user.username)
        obj.away = away
      } 
      if (user.status === 'online' && (user.lastActivity <= 10)){
        online.push(user.username)
        obj.online = online
      // console.log(online)
      }
    })
      return obj
    }