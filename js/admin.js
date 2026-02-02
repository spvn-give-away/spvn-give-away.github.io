const adminRef = db.collection('admin').doc('state');

startSpin.onclick = () => {
  adminRef.set({ spinActive: true }, { merge: true });
};

stopSpin.onclick = () => {
  adminRef.set({ spinActive: false }, { merge: true });
};

setWinner.onclick = () => {
  adminRef.set({
    currentWinner: winnerInput.value,
    spinActive: false
  }, { merge: true });
};

