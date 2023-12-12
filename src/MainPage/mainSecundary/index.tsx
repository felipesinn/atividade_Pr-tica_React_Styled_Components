
import { ImgSecundary, MainSecundary, ImgCode } from "./styles";
import imgCodigo from "../../assets/img/codigo.jpg";

export function MainPageSecundary() {
  return (
    <>
      <MainSecundary>
      <ImgCode src={imgCodigo} />
        <ImgSecundary>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            qui asperiores distinctio doloremque exercitationem aspernatur minus
            quia modi repellendus similique. Incidunt cum asperiores mollitia
            voluptates dignissimos temporibus maxime tempore unde!
          </p>
        </ImgSecundary>
      </MainSecundary>
    </>
  );
}
