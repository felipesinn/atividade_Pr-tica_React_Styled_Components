
import { HeaderPage } from "./HomePage/HeaderPage";
import { SectionFeature } from "./HomePage/HeaderPage/SectionFeature";
import { MainPageEnd } from "./MainPage/mainEnd";
import { MainPage } from "./MainPage/mainPrimary";
import { MainPageSecundary } from "./MainPage/mainSecundary";




export function App() {
  return (
    <>
      <HeaderPage />
      <SectionFeature />
      <MainPage />
      <MainPageSecundary />
      <MainPageEnd />
    </>
  );
}
