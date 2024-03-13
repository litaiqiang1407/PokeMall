import React from "react";
import Swal from "sweetalert2";

const ConfirmDialog = ({ title, text, onConfirm }) => {
  const handleConfirm = () => {
    Swal.fire({
      title: title || "Are you sure?",
      text: text || "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    });
  };

  return null;
};

export default ConfirmDialog;
