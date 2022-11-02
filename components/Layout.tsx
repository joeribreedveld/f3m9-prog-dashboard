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
      <header className={style.header}>
        <p>Header</p>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>
        <p>Footer</p>
      </footer>
    </>
  );
}

// Exports
export default Layout;
