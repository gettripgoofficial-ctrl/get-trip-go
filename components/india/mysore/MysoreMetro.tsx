import "../delhi/delhi-metro.css";
import { mysoreMetroHtml } from "./mysoreMetroHtml";

export default function MysoreMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: mysoreMetroHtml }} />
  );
}
