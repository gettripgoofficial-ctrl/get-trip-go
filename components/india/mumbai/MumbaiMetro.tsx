import "../delhi/delhi-metro.css";
import { mumbaiMetroHtml } from "./mumbaiMetroHtml";

export default function MumbaiMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: mumbaiMetroHtml }} />;
}
