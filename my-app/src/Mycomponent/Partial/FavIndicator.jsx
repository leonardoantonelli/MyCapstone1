import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";

const FavIndicator = () => {
  const navigate = useNavigate();

  const favLength = useSelector((state) => state.fav.content.length);
  // favLength è inizialmente 0, ma rispecchierà in qualsiasi momento la lunghezza di state.fav.content

  return (
    <div className="text-end mt-3 mb-4">
      <Button
        className="d-inline-flex align-items-center py-2 px-3 myWhiteBg text-dark border-0 "
        onClick={() => navigate("/fav")}
      >
        <AiOutlineHeart className="myTextBlack" />
        <span className="ms-2">{favLength}</span>
      </Button>
    </div>
  );
};

export default FavIndicator;
