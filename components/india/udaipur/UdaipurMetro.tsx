import "../delhi/delhi-metro.css";
import { udaipurMetroHtml } from "./udaipurMetroHtml";

export default function UdaipurMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: udaipurMetroHtml }} />;
}
