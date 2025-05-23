let clicked = false;

document.getElementById("downloadBtn").addEventListener("click", function (e) {
  e.preventDefault();

  if (!clicked) {
    // Klik pertama: buka Adsterra
    window.open("https://adsterra.com/redirect123", "_blank"); // GANTI dengan link Adsterra kamu
    clicked = true;
    alert("Klik tombol lagi untuk mulai mendownload.");
  } else {
    // Klik kedua: langsung ke link download
    window.location.href = "https://www.mediafire.com/file/gqy5ujtuykfhjfm/CapCut_v14.4.0_%255Bpro%255D.apk.zip/file";
  }
});
