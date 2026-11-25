import "../delhi/delhi-metro.css";
import { jodhpurMetroHtml } from "./jodhpurMetroHtml";

export default function JodhpurMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: jodhpurMetroHtml }} />;
}
