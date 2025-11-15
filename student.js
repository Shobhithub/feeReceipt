document.getElementById("searchBtn").onclick = () => {
  const roll = document.getElementById("roll").value.trim();
  const batch = document.getElementById("batch").value.trim();
  const semester = document.getElementById("semester").value;

  const key = `${batch}_${semester}_${roll}`;
  const receipts = JSON.parse(localStorage.getItem("receipts") || "{}");
  const receipt = receipts[key];
  const result = document.getElementById("result");

  if (!receipt) {
    result.innerHTML = "<p style='color:red'>Receipt not uploaded right now. Check after some time.</p>";
    return;
  }

  if (receipt.fileName.endsWith(".pdf")) {
    result.innerHTML = `
      <iframe src="${receipt.fileData}" width="100%" height="400"></iframe>
      <a href="${receipt.fileData}" download="${receipt.fileName}" class="btn">Download Receipt</a>
    `;
  } else {
    result.innerHTML = `
      <img src="${receipt.fileData}" style="max-width:100%">
      <a href="${receipt.fileData}" download="${receipt.fileName}" class="btn">Download Receipt</a>
    `;
  }
};
