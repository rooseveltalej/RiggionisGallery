// src/mini-components/Button/ButtonExample.tsx
import React, { useState } from "react";
import Button from "./Button";
import {
  FaWhatsapp,
  FaShoppingCart,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const ButtonExample: React.FC = () => {
  const [muted, setMuted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const onPurchase = () => {
    setStatusMsg("Producto agregado al carrito.");
    setTimeout(() => setStatusMsg(""), 3000);
  };

  const onSubmitAsync = async () => {
    setLoading(true);
    setStatusMsg("Procesando…");
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setStatusMsg("Acción completada.");
    setTimeout(() => setStatusMsg(""), 3000);
  };

  const hintId = "primary-hint";

  return (
    <div style={{ padding: 24, display: "grid", gap: 20 }}>
      <h1>Demo accesibilidad Button</h1>

      {/* 1. Botón con texto + descripción adicional */}
      <div>
        <p id={hintId} style={{ margin: "4px 0", color: "#555" }}>
          Este botón agrega el producto al carrito.
        </p>
        <Button
          text="Agregar al carrito"
          icon={<FaShoppingCart size={18} />}
          color="#5c0a0a"
          aria-describedby={hintId}
          onClick={onPurchase}
        />
      </div>

      {/* 2. Botón solo ícono → requiere aria-label */}
      <div>
        <Button
          text=""
          icon={<FaWhatsapp size={18} />}
          color="#25D366"
          aria-label="Abrir chat de WhatsApp"
          title="Abrir chat de WhatsApp"
          onClick={() => setStatusMsg("Abriendo WhatsApp…")}
        />
      </div>

      {/* 3. Botón toggle con aria-pressed */}
      <div>
        <Button
          text={muted ? "Activar sonido" : "Silenciar"}
          icon={muted ? <FaVolumeUp size={18} /> : <FaVolumeMute size={18} />}
          color={muted ? "#0a7a2a" : "#7a0a0a"}
          aria-pressed={muted}
          onClick={() => {
            setMuted((m) => !m);
            setStatusMsg(!muted ? "Sonido silenciado." : "Sonido activado.");
          }}
        />
      </div>

      {/* 4. Botón con carga asíncrona */}
      <div>
        <Button
          text={loading ? "Procesando…" : "Acción asíncrona"}
          color="#005bbb"
          aria-busy={loading}
          disabled={loading}
          onClick={onSubmitAsync}
        />
      </div>

      {/* 5. Botón submit en un form accesible */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStatusMsg("Formulario enviado.");
          setTimeout(() => setStatusMsg(""), 3000);
        }}
        aria-labelledby="form-title"
        style={{ display: "grid", gap: 8, maxWidth: 360 }}
      >
        <h2 id="form-title">Suscripción</h2>
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@correo.com"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <Button text="Enviar" type="submit" color="#0a5" />
      </form>

      {/* Región viva para feedback */}
      <div
        role="status"
        aria-live="polite"
        style={{ minHeight: 20, color: "#333" }}
      >
        {statusMsg}
      </div>
    </div>
  );
};

export default ButtonExample;
