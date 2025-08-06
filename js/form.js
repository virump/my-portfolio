const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response");
const sendBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Immediately change button text to "Thank You"
  sendBtn.innerText = "Thank You";
 sendBtn.classList.add("btn-thankyou");
  sendBtn.disabled = true;

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    await fetch("https://sheetdb.io/api/v1/qfuopj2xkghsy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    form.reset();
    responseMsg.innerText = "✅ Message sent!";
  } catch (err) {
    responseMsg.innerText = "❌ Failed to send.";
  }
});
