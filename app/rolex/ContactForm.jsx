import React, { useState } from "react";

/**
 * @param {{
 *  content: {
 *    epigrafe: string;
 *    headline: string;
 *    text: string;
 *    primaryCtaText?: string;
 *    epigrafe2: string;
 *    headline2: string;
 *    text2: string;
 *    submitCtaText?: string;
 *    epigrafe3: string;
 *    headline3: string;
 *    text3a: string;
 *    text3b: string;
 *    successCtaText?: string;
 *  };
 *  onSuccess?: () => void;
 * }}
 */
export default function ContactForm({ content, onSuccess }) {
  // Estado del primer textarea
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  // Mostrar/ocultar formulario final
  const [showFinalForm, setShowFinalForm] = useState(false);

  // Estados del formulario final
  const [formData, setFormData] = useState({
    title: "Sr.",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    boutique: "Parque Arauco",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const [showSuccessBlock, setShowSuccessBlock] = useState(false);

  // --- VALIDAR PRIMER TEXTAREA ---
  const handlePrimaryCTA = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setMessageError(true);
      return;
    }

    setMessageError(false);
    setShowFinalForm(true);
  };

  // --- VALIDACIÓN FORMULARIO FINAL ---
  const handleSubmitFinal = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Ingrese Nombre";
    if (!formData.lastName.trim()) newErrors.lastName = "Ingrese Apellido";

    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = "Ingrese email o teléfono";
      newErrors.phone = "Ingrese email o teléfono";
    }

    if (!formData.terms) newErrors.terms = "Por favor acepte los Términos y Condiciones";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // ✔ Formulario exitoso
    setShowSuccessBlock(true);
    setShowFinalForm(false);

    // Llamar callback si existe
    if (onSuccess) {
      onSuccess({ message, ...formData });
    }
  };

  return (
    <div className="accordion-content-inner rolex-grid center">
      <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12"></div>

      {/* BLOQUE IZQUIERDO - Primer textarea */}
      {!showFinalForm && !showSuccessBlock && (
        <div className="rolex-col-sm-6 rolex-col-md-10 rolex-col-lg-6 fade-in">
          <h5 className="body20-bold conEpigrafe">{content.epigrafe}</h5>
          <h3 className="headline70 conHeadline">{content.headline}</h3>
          <p className="body20-light conText">{content.text}</p>

          <form>
            <div className="form-field">
              <textarea
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {messageError && (
                <p className="error-text">Escribe tu mensaje</p>
              )}
            </div>

            <a href="#" className="rolex-btn primary" onClick={handlePrimaryCTA}>
              {content.primaryCtaText || "Primary CTA"}
            </a>
          </form>
        </div>
      )}

      <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12"></div>

      {/* BLOQUE DERECHO - SOLO SE MUESTRA AL VALIDAR EL PRIMER TEXTAREA */}
      {showFinalForm && !showSuccessBlock && (
        <div className="rolex-col-sm-6 rolex-col-md-10 rolex-col-lg-6 fade-in">
          <h5 className="body20-bold conEpigrafe">{content.epigrafe2}</h5>
          <h3 className="headline70 conHeadline">{content.headline2}</h3>
          <p className="body20-light conText">{content.text2}</p>

          <form className="rolex-form" noValidate onSubmit={handleSubmitFinal}>

            {/* Texto proveniente del primer textarea */}
            <textarea className="textareaTarget" value={message} readOnly />

            {/* --- Fila: Título, Nombre, Apellido --- */}
            <div className="form-row">
              <div className="form-field small">
                <label className="legend20-bold">Tto</label>
                <select
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                >
                  <option value="Sr.">Sr.</option>
                  <option value="Sra.">Sra.</option>
                  <option value="Srta.">Srta.</option>
                </select>
              </div>

              <div className="form-field">
                <label className="legend20-bold">
                  Nombre <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className={errors.firstName ? "error" : ""}
                />
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
              </div>

              <div className="form-field">
                <label className="legend20-bold">
                  Apellido <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className={errors.lastName ? "error" : ""}
                />
                {errors.lastName && (
                  <p className="error-text">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="form-field">
              <label className="legend20-bold">
                Dirección de email <span className="required">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <p className="error-text">{errors.email}</p>
              )}
            </div>

            <div className="form-field">
              <p className="text-center">y/o</p>
            </div>

            {/* Teléfono */}
            <div className="form-field">
              <label className="legend20-bold">
                Número de teléfono <span className="required">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <p className="error-text">{errors.phone}</p>
              )}
            </div>

            {/* Checkbox términos */}
            <div className="checkbox-list">
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) =>
                    setFormData({ ...formData, terms: e.target.checked })
                  }
                />
                <span>
                  He leído y acepto los <a href="#">Términos y Condiciones</a> y la <a href="#">Política de
                Privacidad. </a><span className="required">*</span>
                </span>
              </label>

              {errors.terms && (
                <p className="error-text">{errors.terms}</p>
              )}

              <label className="checkbox-item">
                <input type="checkbox" />
                <span>
                  Acepto recibir información comercial.
                </span>
              </label>
              <span class="obligatorio">
                * Obligatorio
              </span>
            </div>

            <button type="submit" className="rolex-btn primary">
              {content.submitCtaText || "Primary CTA"}
            </button>
          </form>
        </div>
      )}

      <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12"></div>

      {showSuccessBlock && (
        <div className="rolex-col-sm-6 rolex-col-md-10 rolex-col-lg-4 fade-in">
          <h5 className="body20-bold conEpigrafe">{content.epigrafe3}</h5>
          <h3 className="headline70 conHeadline">{content.headline3}</h3>
          <p className="body20-bold conText">{content.text3a}</p>
          <p className="body20-light conText">{content.text3b}</p>

          {/* <a href="#" className="rolex-btn primary">
            {content.successCtaText || "Primary CTA"}
          </a> */}
        </div>
      )}
    </div>
  );
}
