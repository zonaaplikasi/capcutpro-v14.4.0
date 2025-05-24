let clicked = false;

const downloadBtn = document.getElementById("downloadBtn");
const customAlert = document.getElementById("customAlert");

function showAlert(message, duration = 10000) {
  customAlert.textContent = message;
  customAlert.classList.add("show");

  setTimeout(() => {
    customAlert.classList.remove("show");
  }, duration);
}

downloadBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!clicked) {
    showAlert("Silakan tutup iklan dan klik lagi tombol download", 2000);

    setTimeout(() => {
      window.open("https://www.profitableratecpm.com/msqwjv75bt?key=c8ff7a466c958bdd3d4115d429c62f3e", "_blank");
    }, 2100); // buka tab baru setelah alert selesai (sedikit delay)

    clicked = true;
    downloadBtn.textContent = "Klik lagi untuk mulai download";
    downloadBtn.classList.add("clicked");
  } else {
    window.open(
      "https://www.mediafire.com/file/gqy5ujtuykfhjfm/CapCut_v14.4.0_%255Bpro%255D.apk.zip/file",
      "_blank"
    );
  }
});
