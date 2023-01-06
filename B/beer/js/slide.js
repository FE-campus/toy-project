let count = 1;

setInterval(function () {
  document.getElementById('radio' + count).checked = true;
  count++;
  if (count > 4) count = 1;
}, 4000);

let c_count = 1;

setInterval(function () {
  document.getElementById('e_radio' + c_count).checked = true;
  c_count++;
  if (c_count > 4) c_count = 1;
}, 4000);
