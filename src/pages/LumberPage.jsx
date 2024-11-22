import {useState} from "react";

export default function LumberPage() {
  const [showPads, setShowPads] = useState(false);

  return (
    <div className="lumber-container">
      <iframe
        style={{border: "none"}}
        title="Lumber Jack Game"
        src="https://tbot.xyz/lumber/"
        width="600"
        height="900"></iframe>

      <p style={{cursor: showPads ? "auto" :  "pointer", marginTop: 100, marginBottom: 20}} onClick={() => setShowPads(true)}>
        {
          showPads
            ? "Hacele hover, toca una letra (haciendole focus a este iframe), y disfrute."
            : "Tambien deje algo mio para que pruebes 💖 haciendo click a este texto."
        }
      </p>

      {showPads && (
        <iframe
          style={{border: "none", marginBottom: 100}}
          title="Lumber Jack Game"
          src="https://vittoopugliese.github.io/drumpads/"
          width="600"
          height="800"></iframe>
      )}
    </div>
  );
}
