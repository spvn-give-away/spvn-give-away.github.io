db.collection('users')
  .where('eliminated','==',false)
  .onSnapshot(s=>{
    users = s.docs.map(d=>d.data());
  });

db.collection('admin').doc('control')
  .onSnapshot(d=>{
    if(!d.exists) return;
    spinning = d.data().spinActive;
    if(d.data().currentWinner){
      document.getElementById('winnerText').innerText =
        'Winner: '+d.data().currentWinner;
    }
  });
