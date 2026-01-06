import './footer.scss'

export default function Footer() {
  const copyrightText = "©Todos os direitos reservados";
  
  return (
    <footer className="footer--wrapper">
      <div className="footer--content">
        <p className="footer--copyright">{copyrightText}</p>
      </div>
    </footer>
  );
}