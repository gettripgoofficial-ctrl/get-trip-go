import "../delhi/delhi-metro.css";
import { jaisalmerMetroHtml } from "./jaisalmerMetroHtml";

export default function JaisalmerMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: jaisalmerMetroHtml }} />
  );
}
