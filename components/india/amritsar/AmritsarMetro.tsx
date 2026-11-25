import "../delhi/delhi-metro.css";
import { amritsarMetroHtml } from "./amritsarMetroHtml";

export default function AmritsarMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: amritsarMetroHtml }} />;
}
