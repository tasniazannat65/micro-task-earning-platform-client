import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const { refetchUser } = useAuth();
  const navigate = useNavigate();

  const calledRef = useRef(false);

  const sessionId = params.get("session_id");

  useEffect(() => {
    if (!sessionId || calledRef.current) return;
    calledRef.current = true;

    axiosSecure
      .post("/payments/confirm", { sessionId })
      .then(() => {
        refetchUser();
        Swal.fire({
          icon: "success",
          title: "Payment Successful 🎉",
        });
        navigate("/dashboard");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Payment already processed",
        });
        navigate("/dashboard");
      });
  }, [sessionId]);

  return null;
};

export default PaymentSuccess;
