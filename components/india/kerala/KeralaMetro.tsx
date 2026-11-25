import "../delhi/delhi-metro.css";
import { keralaMetroHtml } from "./keralaMetroHtml";

export default function KeralaMetro() {
  return <div className="dm" dangerouslySetInnerHTML={{ __html: keralaMetroHtml }} />;
}
