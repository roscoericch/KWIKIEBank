import SVG from "./sprite.svg";
// import "./LetterSvg.scss";

const IconSvg = ({ icon, color, size, decor }) => (
  <svg className={decor} fill={color} width={size} height={size}>
    <use href={`${SVG}#${icon}`} />
  </svg>
);

IconSvg.defaultProps = {
  size: 30,
  color: "black",
};

export default IconSvg;
