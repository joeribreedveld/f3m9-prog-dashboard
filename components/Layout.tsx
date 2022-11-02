// Imports

// TypeScript
interface LayoutProps {
  children: React.ReactNode;
}

// Functions
function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <p>Header</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

// Exports
export default Layout;
