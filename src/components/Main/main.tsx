import './main.scss'

interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="main--wrapper">
      <div className="main--content">
        {children}
      </div>
    </main>
  );
}