import "../delhi/delhi-metro.css";
import { maduraiMetroHtml } from "./maduraiMetroHtml";

export default function MaduraiMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: maduraiMetroHtml }} />
  );
}
