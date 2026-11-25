import "../delhi/delhi-metro.css";
import { ajantaElloraMetroHtml } from "./ajantaElloraMetroHtml";

export default function AjantaElloraMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: ajantaElloraMetroHtml }} />
  );
}
