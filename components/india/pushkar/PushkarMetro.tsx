import "../delhi/delhi-metro.css";
import { pushkarMetroHtml } from "./pushkarMetroHtml";

export default function PushkarMetro() {
  return (
    <div className="dm" dangerouslySetInnerHTML={{ __html: pushkarMetroHtml }} />
  );
}
