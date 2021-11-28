import { Accordion } from "react-bootstrap";
import Exp from "./ExpPros/Exp.component";
import StudentSucess from "./Formations/StudentSucess.component";

function Formation() {
  return (
    <>
      <h3> FORMATION</h3>
      <StudentSucess />
    </>
  );
}

function ExpPro() {
  return (
    <>
      <h3>EXPÉRIENCES ET PROJETS PROFESSIONNELS</h3>
      <Exp />
    </>
  );
}

function AboutMe() {
  return (
    <>
      <h3> UN PEU PLUS SUR MOI </h3>
      <p className="text-start">
        (par exemple, vous pouvez mettre au choix : ) Voyages (Pays et format
        voyage) Lecture (dernier livre lu ou livre préféré) Cinéma (quel type de
        films, film préféré) Musique (quel type, chanteur/groupe préféré)
        Cuisine (quel type, vous cuisinez quoi) Sports (lesquels? Votre niveau?
        Depuis combien de temps? (ce que cela vous apporte/valeurs que vous
        aimez dans ce sport)
      </p>
    </>
  );
}

function Right() {
  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>FORMATION</Accordion.Header>
          <Accordion.Body>
            <Formation />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            EXPÉRIENCES ET PROJETS PROFESSIONNELS
          </Accordion.Header>
          <Accordion.Body>
            <ExpPro />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>UN PEU PLUS SUR MOI</Accordion.Header>
          <Accordion.Body>
            <AboutMe />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      ;
    </>
  );
}
export default Right;
