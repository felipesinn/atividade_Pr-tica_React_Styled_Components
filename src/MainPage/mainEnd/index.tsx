import { ImgCrianca, ImgEnd, MainEnd } from "../mainEnd/styles";
import imgSamrtphone from "../../assets/img/smartphone.jpg";

export function MainPageEnd() {
  return (
    <>
      <MainEnd>
        <ImgEnd>
          <h1>Lorem Ipsum</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            qui asperiores distinctio doloremque exercitationem aspernatur minus
            quia modi repellendus similique. Incidunt cum asperiores mollitia
            voluptates dignissimos temporibus maxime tempore unde!
          </p>
        </ImgEnd>

        <ImgCrianca src={imgSamrtphone} />


        
      </MainEnd>
    </>
  );
}
