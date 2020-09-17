const socket = io.connect(":4000");

const chatBody = document.getElementsByClassName("chat-body")[0];
const chatText = document.getElementsByClassName("chat-message-write")[0];
const avatar = document.getElementsByClassName("avatar")[0];
const receivedMessage = document.getElementsByClassName("chat-message-read")[0];
const user = `U${Math.floor(Math.random() * 100)}`;

/***********************************/

function sendMessage() {
  if (event.keyCode === 13 && event.target.value !== "") {
    socket.emit("chat", {
      from: user,
      msg: chatText.value,
      senderSocket: socket.id,
    });
    chatText.value = "";
  }
}

socket.on("chat", function (data) {
  if (data.senderSocket === socket.id) {
    chatBody.innerHTML += ` <div class="income-chat-container sender"><p class="income-chat-msg">${data.msg}</p></div>`;
  } else {
    chatBody.innerHTML += ` <div class="income-chat-container receiver"><div class="avatar">${data.from}</div><p class="income-chat-msg">${data.msg}</p></div>`;
  }
});
