import "./delhi-metro.css";
import { delhiMetroHtml } from "./delhiMetroHtml";

export default function DelhiMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: delhiMetroHtml }} />;
}
