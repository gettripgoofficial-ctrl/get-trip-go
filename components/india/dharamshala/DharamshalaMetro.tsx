import "../delhi/delhi-metro.css";
import { dharamshalaMetroHtml } from "./dharamshalaMetroHtml";

export default function DharamshalaMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: dharamshalaMetroHtml }} />;
}
