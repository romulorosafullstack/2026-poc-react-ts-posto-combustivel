import './footer.scss'

interface FooterProps {
  copyright: string;
}

export default function Footer({copyright}: FooterProps) {
  return (
    <footer className="footer--wrapper">
      <div className="footer--content">
        <p className="footer--copyright">
          {copyright}
        </p>
      </div>
    </footer>
  );
}