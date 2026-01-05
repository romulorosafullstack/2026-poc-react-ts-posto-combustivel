import './card.scss'

interface CardProps {
  name: string;
  age: number;
  city?: string;
}

export function Card({ name, age, city }: CardProps) {
  return (
    <main className="card--wrapper">
      <div className="card--content">
        <div className="card--top"
>          <h2 className="card--name">{name}</h2>
        </div>
        <div className="card--bottom">
          <p className="card--info">Idade: <span>{age}</span></p>
          {city && <p className="card--info">Cidade: <span>{city}</span></p>}
        </div>
      </div>
    </main>
  );
}