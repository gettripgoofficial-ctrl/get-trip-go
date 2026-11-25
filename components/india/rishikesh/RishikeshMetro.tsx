import "../delhi/delhi-metro.css";
import { rishikeshMetroHtml } from "./rishikeshMetroHtml";

export default function RishikeshMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: rishikeshMetroHtml }} />;
}
