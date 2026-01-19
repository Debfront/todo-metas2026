// O estilo é chamado no componente que é utilizado
import style from "./Titulo.module.scss";

const Titulo = () => {
  return (
    <h1 className={style}>
      Suas Metas para <span>2026</span>{" "}
    </h1>
  );
};

export default Titulo;
