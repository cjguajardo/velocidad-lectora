import Page from "@/components/other/page";
import { CustomHeader } from "@/components/other/page-header";

export default async function Layout( { children }: { children: React.ReactNode } ) {
  return <Page>
    <CustomHeader title="Políticas de Privacidad" />
    {children}
  </Page>
}