import SVG from "./sprite2.svg";
// import "./LetterSvg.scss";

const IconSvg2 = ({ icon, color, size, decor }) => (
  <svg className={decor} fill={color} width={size} height={size}>
    <use href={`${SVG}#${icon}`} />
  </svg>
);

IconSvg2.defaultProps = {
  size: 30,
  color: "black",
};

export default IconSvg2;
