import swal from "sweetalert";

export const sweetalertBasic = msg => {
  swal(msg);
};

export const sweetalertStandard = (msg, type = "success") => {
  swal(msg.title, msg.msg, type);
};

export const sweetalertConfirm = msg => {
  swal({
    title: msg.title,
    text: msg.msg,
    icon: msg.icon,
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success"
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
};
