import Background from "../components/Background";
import MinecraftButton from "../components/MinecraftButton";


export default function Home() {
  return (
    <main className="home">
      <Background />
      <section className="hero">
        <h1 className="title">¡Cumple de <span className="rainbow-text">DYLAN</span> en modo Survival! 🧱⛏️</h1>
        <p className="subtitle">
          Únete a nuestra la aventura de mis <span className="rainbow-text">8 AÑOS</span> en el bioma del festejo. Trae tu mejor skin y gana premios.
        </p>
        <div className="cta-row">
          <a href="#detalles">
            <MinecraftButton variant="secondary">Ver detalles</MinecraftButton>
          </a>
        </div>
      </section>

      <section id="detalles" className="panel">
        <h2>Detalles del Evento</h2>
        <ul className="grid">
          <li>
            <h3>📅 Fecha</h3>
            <p>Martes 14 de Octubre — 3:30 p.m.</p>
          </li>
          <li>
            <h3>📍 Lugar</h3>
            <p> Colegio Cultural Oriental</p>
          </li>
          <li>
            <h3>🎮 Reglas</h3>
            <p>Pasar una linda tarde de compartir</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
