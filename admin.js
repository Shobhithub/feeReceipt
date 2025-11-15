function setStatus(msg, err=false) {
  const s=document.getElementById("status");
  s.textContent=msg; s.style.color=err?"red":"green";
}

document.getElementById("uploadBtn").onclick = () => {
  const roll=document.getElementById("roll").value.trim();
  const batch=document.getElementById("batch").value.trim();
  const semester=document.getElementById("semester").value;
  const file=document.getElementById("file").files[0];
  if(!roll||!batch||!file) return setStatus("Fill all fields",true);

  const reader=new FileReader();
  reader.onload=()=>{
    const receipts=JSON.parse(localStorage.getItem("receipts")||"{}");
    const key=`${batch}_${semester}_${roll}`;
    receipts[key]={
      batch,semester,roll,
      fileName:file.name,
      fileData:reader.result
    };
    localStorage.setItem("receipts",JSON.stringify(receipts));
    setStatus("Upload successful!");
  };
  reader.readAsDataURL(file);
};
