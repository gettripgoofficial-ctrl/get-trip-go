import "../delhi/delhi-metro.css";
import { agraMetroHtml } from "./agraMetroHtml";

export default function AgraMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: agraMetroHtml }} />;
}
