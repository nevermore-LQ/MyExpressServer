// async function deleteFlight(id) {
//   console.log("delete func is called");
//   let result = await (
//     await fetch(`/admin/flight/${id}`, { method: "DELETE" })
//   ).json();
//   console.log(result);
//   if (result.status === "OK") {
//     window.open("/admin/flights");
//     document.getElementById(id).remove();
//   } else {
//     alert("delete failed");
//   }
// }

// async function deleteBooking(id) {
//   console.log("delete booking is called");
//   let result = await (
//     await fetch(`/admin/booking/${id}`, { method: "DELETE" })
//   ).json();
//   console.log(result);
//   if (result.status === "OK") {
//     document.getElementById(id).remove();
//   } else {
//     alert("delete failed");
//   }
// }
