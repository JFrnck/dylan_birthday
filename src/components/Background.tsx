export default function Background() {
  return (
    <div className="mc-bg" aria-hidden>
      <div className="mc-sky" />
      <div className="mc-cloud mc-cloud-1" />
      <div className="mc-cloud mc-cloud-2" />
      <div className="mc-cloud mc-cloud-3" />
      <div className="mc-ground">
        <div className="mc-grass" />
        <div className="mc-dirt" />
      </div>
      {/* bloques flotantes */}
      <div className="mc-block b1" />
      <div className="mc-block b2" />
      <div className="mc-block b3" />
    </div>
  );
}
