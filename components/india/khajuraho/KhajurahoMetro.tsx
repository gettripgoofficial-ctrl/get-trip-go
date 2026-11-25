import "../delhi/delhi-metro.css";
import { khajurahoMetroHtml } from "./khajurahoMetroHtml";

export default function KhajurahoMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: khajurahoMetroHtml }} />;
}
