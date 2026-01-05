import './cards.scss'

interface CardsProps {
  children?: React.ReactNode;
}

export default function Cards({ children }: CardsProps) {
  return (
    <main className="cards--wrapper">
      <div className="cards--content">
        {children}
      </div>
    </main>
  );
}