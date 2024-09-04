import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-3xl bg-orange-500 py-5 text-black text-center">
      User: {userid}
    </div>
  );
}

export default User;
