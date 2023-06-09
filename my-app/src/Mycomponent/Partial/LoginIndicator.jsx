import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const LoginIndicator = () => {
  const navigate = useNavigate();

  return (
    <div className="text-end mt-3 mb-4">
      <Button
        className="d-inline-flex align-items-center py-2 px-3 myindicator border-0 "
        onClick={() => navigate("/login")}
      >
        <AiOutlineUser className="" />
      </Button>
    </div>
  );
};

export default LoginIndicator;
