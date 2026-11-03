import KenyaMobileHeader from "@/components/KenyaMobileHeader"
import WhatsAppPopup from "../../components/WhatsAppPopup";

export default function KenyaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <KenyaMobileHeader />
      <div className="md:hidden h-14" />
      {children}
      <WhatsAppPopup />
    </>
  )
}
