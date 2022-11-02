// Imports
import style from "../styles/Layout.module.scss";

// TypeScript
interface LayoutProps {
  children: React.ReactNode;
}

// Functions
function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={style.main}>{children}</main>
    </>
  );
}

// Exports
export default Layout;
