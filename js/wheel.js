const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
let users = [];
let angle = 0;
let spinning = true;

function drawWheel(){
  if(!users.length) return;
  const r = canvas.width/2;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const slice = Math.PI*2/users.length;

  users.forEach((u,i)=>{
    ctx.beginPath();
    ctx.moveTo(r,r);
    ctx.arc(r,r,r,angle+i*slice,angle+(i+1)*slice);
    ctx.fillStyle=i%2?'#4f9cff':'#7cf3d0';
    ctx.fill();
  });
}

function animate(){
  if(spinning) angle+=0.01;
  drawWheel();
  requestAnimationFrame(animate);
}

animate();
