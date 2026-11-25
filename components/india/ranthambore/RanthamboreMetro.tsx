import "../delhi/delhi-metro.css";
import { ranthamboreMetroHtml } from "./ranthamboreMetroHtml";

export default function RanthamboreMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: ranthamboreMetroHtml }} />;
}
