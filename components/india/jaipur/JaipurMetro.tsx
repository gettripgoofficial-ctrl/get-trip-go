import "../delhi/delhi-metro.css";
import { jaipurMetroHtml } from "./jaipurMetroHtml";

export default function JaipurMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: jaipurMetroHtml }} />;
}
