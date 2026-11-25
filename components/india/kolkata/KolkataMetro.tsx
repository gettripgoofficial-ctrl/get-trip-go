import "../delhi/delhi-metro.css";
import { kolkataMetroHtml } from "./kolkataMetroHtml";

export default function KolkataMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: kolkataMetroHtml }} />
  );
}
