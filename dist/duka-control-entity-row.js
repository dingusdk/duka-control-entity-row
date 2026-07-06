const LitElement = customElements.get("ha-panel-lovelace") ? Object.getPrototypeOf(customElements.get("ha-panel-lovelace")) : Object.getPrototypeOf(customElements.get("hc-lovelace"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

const styleOn = 'background-color: var(--ha-switch-checked-background-color, var(--ha-color-fill-primary-normal-resting)); border-color: var(--ha-switch-checked-border-color, var(--ha-color-border-primary-loud))';
const styleOff = 'background-color: var(--ha-switch-background-color, var(--ha-color-fill-disabled-quiet-resting)); border-color: var(--ha-switch-border-color, var(--ha-color-border-neutral-normal))';

class DukaCustomFanRow extends LitElement {
	constructor() {
		super();
		this._config = {
			width: '30',
			height: '30',
		};
	}
	
	static get properties() {
		return {
			hass: Object,
			_config: Object,
			_stateObj: Object,
			_width: String,
			_height: String,
			_mode: String,
			_percentage: String,
			_preset_mode: String,  
		};
	}

	static get styles() {
		return css`
			:host {
				line-height: inherit;
			}
			.box {
				display: flex;
				flex-direction: row;
			}
			.mode {
				margin-left: 2px;
				margin-right: 2px;
				border: 1px solid lightgrey; 
				border-radius: 4px;
				color: inherit;
				float: left !important;
				padding: 1px;
				cursor: pointer;
			}
			.button-column {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		`;
	}

	render() {
		return html`
		<hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
			<div class='button-column'>
				<div id='button-container' class='box'>
					${this.render_mode_buttons()}
					${this.render_speed_buttons()}
				</div>
			</div>
		</hui-generic-entity-row>
		`;
	}

	_handleModeChange(ev) {
		const newMode = ev.target.value;
		if (newMode === this._mode) return;
		console.log("Mode changed to: ", newMode);
		this.hass.callService('dukaone', 'set_mode', { entity_id: this._config.entity, mode: newMode });
	}

render_mode_buttons_select() {
	let iconwidth = this._config.width-6;
	let iconheight =this._config.height-6;
	return html`
		<ha-select
			label="Fan speed"
			.value=${this._mode || "in"}
			fixedMenuPosition
			naturalMenuWidth
			@action=${this._handleModeChange}
		>
			<ha-list-item value="in">
				<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
					<path fill="currentColor" d="M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z" />
				</svg>
			</ha-list-item>
			<ha-list-item value="inout">
				<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
					<path fill="currentColor" d="M6.45,17.45L1,12L6.45,6.55L7.86,7.96L4.83,11H19.17L16.14,7.96L17.55,6.55L23,12L17.55,17.45L16.14,16.04L19.17,13H4.83L7.86,16.04L6.45,17.45Z" />
				</svg>
			</ha-list-item>
			<ha-list-item value="out">
				<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
					<path fill="currentColor" d="M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z" />
				</svg>
			</ha-list-item>
		</ha-select>
	`;
}

	render_mode_buttons() {
		let iconwidth = this._config.width-6;
		let iconheight =this._config.height-6;
		return html`
			<button
				title='Air supply'
				class='mode'
				style='${this._mode === 'in' ? styleOn : styleOff}; min-width:${this._width}; max-width:${this._width}; height:${this._height}'
				toggles name="in"
				@click=${this.setMode}>
				<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
					<path fill="currentColor" d="M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z" />
				</svg>
			</button>
			<button
				title='Regeneration'
				class='mode'
				style='${this._mode === 'inout' ? styleOn : styleOff}; min-width:${this._width}; max-width:${this._width}; height:${this._height}'
				toggles name="inout"
				@click=${this.setMode}>
				<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
					<path fill="currentColor" d="M6.45,17.45L1,12L6.45,6.55L7.86,7.96L4.83,11H19.17L16.14,7.96L17.55,6.55L23,12L17.55,17.45L16.14,16.04L19.17,13H4.83L7.86,16.04L6.45,17.45Z" />
				</svg>
			</button>
			<button
				title='Ventilation'
				class='mode'
				style='${this._mode === 'out' ? styleOn : styleOff}; min-width:${this._width}; max-width:${this._width}; height:${this._height}'
				toggles name="out"
				@click=${this.setMode}>
				<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
					<path fill="currentColor" d="M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z" />
				</svg>
			</button>
		`;
	}

	render_speed_buttons() {
		let iconwidth = this._config.width-6;
		let iconheight =this._config.height-6;
		return html`
			<button
						title='Off'
						class='mode'
						style='${this._preset_mode === 'off' ? styleOn : styleOff}; min-width:${this._width}; max-width:${this._width}; height:${this._height}'
						toggles name="off"
						@click=${this.setMode}
						.disabled=${this._preset_mode === "off"}>
						<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
							<path fill="currentColor" d="M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z" />
						</svg>
			</button>
			<button
					title='Low'
					class='mode'
					style='${this._preset_mode === 'low' ? styleOn : styleOff}; min-width:${this._width}; max-width:${this._width}; height:${this._height}'
					toggles name="low"
					@click=${this.setMode}
					.disabled=${this._preset_mode === "low"}>
					<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
					<path fill="currentColor" d="M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M17 15V17H18V23H20V15H17Z" />
					</svg>
			</button>
			<button
					title='Medium'
					class='mode'
					style='${this._preset_mode === 'medium' ? styleOn : styleOff}; min-width:${this._width}; max-width:${this._width}; height:${this._height}'
					toggles name="medium"
					@click=${this.setMode}
					.disabled=${this._preset_mode === "medium"}>
					<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
						<path fill="currentColor" d="M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M16 15V17H19V18H18C16.9 18 16 18.9 16 20V23H21V21H18V20H19C20.11 20 21 19.11 21 18V17C21 15.9 20.11 15 19 15H16Z" />
					</svg>
			</button>
			<button
				title='High'
				class='mode'
				style='${this._preset_mode === 'high' ? styleOn : styleOff}; min-width:${this._width}; max-width:${this._width}; height:${this._height}'
				toggles name="high"
				@click=${this.setMode}
				.disabled=${this._preset_mode === "high"}>
					<svg style="width:${iconwidth}px; height:${iconheight}px" viewBox="0 0 24 24">
						<path fill="currentColor" d="M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M21 21V20.5C21 19.67 20.33 19 19.5 19C20.33 19 21 18.33 21 17.5V17C21 15.89 20.1 15 19 15H16V17H19V18H17V20H19V21H16V23H19C20.11 23 21 22.11 21 21" />
					</svg>
			</button>
		`;
	}

	firstUpdated() {
		super.firstUpdated();
		this.shadowRoot.getElementById('button-container').addEventListener('click', (ev) => ev.stopPropagation());
	}

	setConfig(config) {
		this._config = { ...this._config, ...config };
	}

	updated(changedProperties) {
		if (changedProperties.has("hass")) {
			this.hassChanged();
		}
	}

	hassChanged(hass) {
		const config = this._config;
		this._stateObj = this.hass.states[config.entity];
		this._width = config.width;
		this._height = config.height;
		this._mode = this._stateObj.attributes.mode;
		this._preset_mode = this._stateObj.attributes.preset_mode;
		this._percentage = this._stateObj.attributes.percentage;
	}
	
	setMode(e) {
    const mode = e.currentTarget.getAttribute('name');
		const param = {entity_id: this._config.entity};
		switch (mode) {
			case 'off':
				this.hass.callService('fan', 'turn_off', { entity_id: this._config.entity });
				break;
				case 'low':
			case 'medium':
			case 'high':
			case 'manual':
				this.hass.callService('fan', 'set_preset_mode', { entity_id: this._config.entity, preset_mode: mode });	
				break;
			case 'in':
			case 'inout':
			case 'out':
				this.hass.callService('dukaone', 'set_mode', { entity_id: this._config.entity, mode: mode });
				break;
		}
	}
}
	
customElements.define('duka-control-entity-row', DukaCustomFanRow);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "duka-control-entity-row",
  name: "Dukaone button row",
  description: "A plugin to display dukaone controls in a button row.",
  preview: true,
});