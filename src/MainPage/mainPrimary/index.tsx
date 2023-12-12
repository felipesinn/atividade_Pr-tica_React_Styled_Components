import { ImgPrimary, ImgSmart, MainPrimary } from "../mainPrimary/styles";
import imgSamrtphone from "../../assets/img/smartphone.jpg";

export function MainPage() {
  return (
    <>
      <MainPrimary>
        <ImgPrimary>
          <h1>Lorem Ipsum</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            qui asperiores distinctio doloremque exercitationem aspernatur minus
            quia modi repellendus similique. Incidunt cum asperiores mollitia
            voluptates dignissimos temporibus maxime tempore unde!
          </p>
        </ImgPrimary>

        <ImgSmart src={imgSamrtphone} />


        
      </MainPrimary>
    </>
  );
}
