// =========== todo list ===========
let inp_box = document.querySelector(".inp_box");
let add_task_btn = document.querySelector(".add_task_btn");
let task_list = inp_box.value;
let modify_btn = document.querySelector(".modify_btn");
let error_text = document.querySelector(".error_text");
let list_wrapper = document.querySelector(".list_wrapper");
let list_arr = [];
let modify_index;

add_task_btn.addEventListener("click", function () {
  if (inp_box.value === "") {
    error_text.innerHTML = "Please enter some text or number";
  } else {
    error_text.innerHTML = "";
    list_wrapper.innerHTML = "";
    list_arr.push(inp_box.value);
    inp_box.value = "";
    displayShow();
  }
});

function displayShow() {
  list_wrapper.innerHTML = "";
  for (let i = 0; i < list_arr.length; i++) {
    list_wrapper.innerHTML += `<li>${list_arr[i]}<button class="delete_btn">Delete</button> <button class="edit_btn">Edit </button></li>`;

    let delete_btn = document.querySelectorAll(".delete_btn");
    let dlt_btn_arr = Array.from(delete_btn);
    let edit_btn = document.querySelectorAll(".edit_btn");
    let edit_btn_arr = Array.from(edit_btn);

    dlt_btn_arr.map((item) => {
      item.addEventListener("click", function () {
        list_arr.splice(item, 1);
        list_wrapper.innerHTML = "";
        displayShow();
      });
    });
    // ========= edit list ============
    for (let j = 0; j < edit_btn_arr.length; j++) {
      edit_btn_arr[j].addEventListener("click", function () {
        inp_box.value = list_arr[j];
        add_task_btn.style.display = "none";
        modify_btn.style.display = "inline-block";
        modify_index = j;
      });
    }
    // ========= edit list ============
  }
}
// ============ modify list ==========
modify_btn.addEventListener("click", () => {
  list_arr[modify_index] = inp_box.value;
  add_task_btn.style.display = "inline-block";
  modify_btn.style.display = "none";
  displayShow();
  inp_box.value = ""
});
// ============ modify list ==========

// =========== todo list ===========
