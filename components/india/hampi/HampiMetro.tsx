import "../delhi/delhi-metro.css";
import { hampiMetroHtml } from "./hampiMetroHtml";

export default function HampiMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: hampiMetroHtml }} />
  );
}
