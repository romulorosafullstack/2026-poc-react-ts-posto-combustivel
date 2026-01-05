import './cards.scss'

interface CardsProps {
  children?: React.ReactNode;
}

export default function Cards({ children }: CardsProps) {
  return (
    <main className="cards--wrapper">
      <div className="cards--content">
        <h1>Cards</h1>
        {children}
      </div>
    </main>
  );
}