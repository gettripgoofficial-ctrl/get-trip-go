import "../delhi/delhi-metro.css";
import { goaMetroHtml } from "./goaMetroHtml";

export default function GoaMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: goaMetroHtml }} />;
}
