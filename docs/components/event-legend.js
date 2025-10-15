class EventLegend extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const interactive = this.hasAttribute("interactive");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin: 20px 0;
          padding: 15px;
          border: thin solid var(--background-gray);
          border-radius: 8px;
          width: fit-content;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          ${
            interactive
              ? "cursor: pointer; transition: opacity 0.2s; user-select: none;"
              : ""
          }
        }
        
        ${
          interactive
            ? `
        .legend-item:hover {
          opacity: 0.8;
        }
        
        .legend-item.active {
          font-weight: bold;
          text-decoration: underline;
        }
        `
            : ""
        }
        
        .legend-color {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }

        @media print {
          .legend {
            margin: 0;
            border: none;
            padding: 0;
        }
        div[data-filter="all"], .label {
            display: none;
        }
    }
      </style>
      
      <nav class="legend" role="navigation" aria-label="Légende des types d'événements">
        ${
          interactive
            ? `
          <b class="label">Filtrer :</b>
        <div class="legend-item active" data-filter="all">
          <div class="legend-color" style="background: #999;" aria-hidden="true"></div>
          <span>Tous</span>
        </div>
        `
            : ""
        }
        <div class="legend-item" data-filter="welcome">
          <div class="legend-color" style="background: var(--background-gray)" aria-hidden="true"></div>
          <span>Accueil</span>
        </div>
        <div class="legend-item" data-filter="talk">
          <div class="legend-color" style="background: var(--event-type-talk-primary)" aria-hidden="true"></div>
          <span>Conférence</span>
        </div>
        <div class="legend-item" data-filter="hands-on">
          <div class="legend-color" style="background: var(--event-type-hands-on-primary)" aria-hidden="true"></div>
          <span>Atelier pratique</span>
        </div>
        <div class="legend-item" data-filter="maker">
          <div class="legend-color" style="background: var(--event-type-maker-primary)" aria-hidden="true"></div>
          <span>Maker</span>
        </div>
        <div class="legend-item" data-filter="outdoor">
          <div class="legend-color" style="background: var(--event-type-outdoor-primary)" aria-hidden="true"></div>
          <span>Extérieur</span>
        </div>
        <div class="legend-item" data-filter="repas">
          <div class="legend-color" style="background: var(--background-gray)" aria-hidden="true"></div>
          <span>Repas</span>
        </div>
      </nav>
    `;

    if (interactive) {
      this.setupInteractivity();
    }
  }

  setupInteractivity() {
    const legendItems = this.shadowRoot.querySelectorAll(".legend-item");

    legendItems.forEach((item) => {
      item.addEventListener("click", () => {
        const filter = item.getAttribute("data-filter");

        // Mise à jour de l'état actif dans le shadow DOM
        legendItems.forEach((li) => li.classList.remove("active"));
        item.classList.add("active");

        // Dispatch custom event pour filtrer les événements
        this.dispatchEvent(
          new CustomEvent("filter-change", {
            bubbles: true,
            composed: true,
            detail: { filter },
          })
        );
      });
    });
  }
}

customElements.define("event-legend", EventLegend);
