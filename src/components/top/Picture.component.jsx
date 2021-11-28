import { Figure } from "react-bootstrap";
import me from "../../assets/img/me.JPG";
function Picture() {
  return (
    <>
      <Figure className="mt-3">
        <Figure.Image
          width={120}
          alt="Profil de Maxime LESTAGE"
          src={me}
          rounded
        />
      </Figure>
    </>
  );
}

export default Picture;
