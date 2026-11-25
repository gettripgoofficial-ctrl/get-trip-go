import "../delhi/delhi-metro.css";
import { varanasiMetroHtml } from "./varanasiMetroHtml";

export default function VaranasiMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: varanasiMetroHtml }} />;
}
