import { Metadata } from "next";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  // return <Layout>{children}</Layout>;

  return <> {children} </>;
}
