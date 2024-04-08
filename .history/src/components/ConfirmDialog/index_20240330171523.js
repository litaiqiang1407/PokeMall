import Swal from "sweetalert2";

const ConfirmDialog = async (confirmationMessage) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: confirmationMessage,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
  });
  return result.isConfirmed;
};

const errorDialog = (errorMessage) => {
  Swal.fire({
    title: "Oops...",
    icon: "error",
    text: errorMessage,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
  });
};

export default ConfirmDialog;
