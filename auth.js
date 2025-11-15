function showMsg(m, err=false) {
  const msg = document.getElementById("messages");
  msg.textContent = m;
  msg.style.color = err ? "red" : "green";
}

document.getElementById("signupBtn").onclick = async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    localStorage.setItem("role", role);
    showMsg("Account created!");
  } catch(err) { showMsg(err.message, true); }
};

document.getElementById("loginBtn").onclick = async () => {
  try {
    await auth.signInWithEmailAndPassword(
      document.getElementById("email").value.trim(),
      document.getElementById("password").value
    );
    const role = localStorage.getItem("role");
    if(role === "admin") location.href="admin.html";
    else location.href="student.html";
  } catch(err) { showMsg(err.message, true); }
};
