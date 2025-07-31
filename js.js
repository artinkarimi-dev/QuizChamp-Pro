
let divText = document.getElementById("divText");
let input = document.getElementById("input");

// بار اول صفحه، اطلاعات قبلی رو لود می‌کنیم
divText.innerHTML = localStorage.getItem("seting") || "";

// وقتی Enter رو بزنی، یه آیتم اضافه میشه
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let value = input.value.trim();
    if (value === "") return;

    divText.innerHTML += `
      <div class="Text">
        <div class="icon-wrapper">
          <svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24" style="fill: white; cursor: pointer;">
            <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/>
          </svg>
        </div>
        <div class="text-content">${value}</div>
      </div>
    `;

    localStorage.setItem("seting", divText.innerHTML);
    input.value = "";
  }
});

// حذف آیتمی که روش کلیک شد
divText.addEventListener("click", function(e) {
  if (e.target.closest(".trash-icon")) {
    const item = e.target.closest(".Text");
    if (item) {
      item.remove();
      localStorage.setItem("seting", divText.innerHTML);
    }
  }
});
