import Swal from "sweetalert2";

const ConfirmDialog = async (confirmationMessage) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: confirmationMessage,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, proceed!",
  });
  return result.isConfirmed;
};

export default ConfirmDialog;
