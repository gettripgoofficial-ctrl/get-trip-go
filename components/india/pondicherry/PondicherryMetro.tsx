import "../delhi/delhi-metro.css";
import { pondicherryMetroHtml } from "./pondicherryMetroHtml";

export default function PondicherryMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: pondicherryMetroHtml }} />
  );
}
