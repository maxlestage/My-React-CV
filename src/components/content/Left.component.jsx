function HardSkills() {
  return (
    <>
      <p className="text-start">Compétences techniques (Hard Skills)</p>
    </>
  );
}

function CompPro() {
  return (
    <>
      <p className="text-start">
        Compétences professionnelles et linguistiques
      </p>
    </>
  );
}

function Software() {
  return (
    <>
      <p className="text-start">Logiciels et environnements</p>
    </>
  );
}

function SoftSkills() {
  return (
    <>
      <p className="text-start">Qualités humaines (Soft Skills)</p>
    </>
  );
}

function ContactMe() {
  return (
    <>
      <p className="text-start">
        CONTACTEZ-MOI EMAIL (lien) Téléphone portable CP - Ville Lien Linkedin
        simplifié Date de naissance Permis B - véhicule
      </p>
    </>
  );
}

function Left() {
  return (
    <>
      <HardSkills />
      <CompPro />
      <Software />
      <SoftSkills />
      <ContactMe />
    </>
  );
}
export default Left;
