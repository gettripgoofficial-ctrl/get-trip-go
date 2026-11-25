import "../delhi/delhi-metro.css";
import { darjeelingMetroHtml } from "./darjeelingMetroHtml";

export default function DarjeelingMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: darjeelingMetroHtml }} />;
}
