
class DukaCustomFanRow extends Polymer.Element {

  static get template() {
    return Polymer.html`
            <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
            <style>
                :host { line-height: inherit;}
                .button {
                    min-width: 30px;
										max-width: 30px;
										height: 30px;
										margin-left: 2px;
										margin-right: 2px;
	    	            background-color: #759aaa;
				            border: 1px solid lightgrey;
								    border-radius: 4px;
								    color: inherit;
		    						text-align: center;
	            			float: right !important;
		    						padding: 1px;
								}
								.buttonspacer {
									min-width:10px;
								}
						</style>
         	  <hui-generic-entity-row hass="[[hass]]" config="[[_config]]">
								<div class='horizontal justified layout' on-click="stopPropagation">
										<button
											class='button'
											style='[[_modeInColor]]'
											toggles name="in"
											on-click='setMode'>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="currentColor" d="M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z" />
											</svg>
										</button>
										<button
											class='button'
											style='[[_modeInOutColor]]'
											toggles name="inout"
											on-click='setMode'>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="currentColor" d="M6.45,17.45L1,12L6.45,6.55L7.86,7.96L4.83,11H19.17L16.14,7.96L17.55,6.55L23,12L17.55,17.45L16.14,16.04L19.17,13H4.83L7.86,16.04L6.45,17.45Z" />
											</svg>
										</button>
										<button
											class='button'
											style='[[_modeOutColor]]'
											toggles name="out"
											on-click='setMode'>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    										<path fill="currentColor" d="M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z" />
											</svg>
										</button>
										<span class="buttonspacer"></span>
										<button
											class='button'
											style='[[_offColor]]'
											name="off"
											on-click='setSpeed'
											disabled='[[_isOffState]]'>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    										<path fill="currentColor" d="M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z" />
											</svg>
										</button>
 										<button
											class='button'
											style='[[_lowOnColor]]'
											name="low"
											on-click='setSpeed'
											disabled='[[_isOnLow]]'>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    											<path fill="currentColor" d="M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M17 15V17H18V23H20V15H17Z" />
											</svg>
										</button>
										<button
											class='button'
											style='[[_medOnColor]]'
											name="medium"
											on-click='setSpeed'
											disabled='[[_isOnMed]]'>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="currentColor" d="M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M16 15V17H19V18H18C16.9 18 16 18.9 16 20V23H21V21H18V20H19C20.11 20 21 19.11 21 18V17C21 15.9 20.11 15 19 15H16Z" />
											</svg>
										</button>
										<button
											class='button'
											style='[[_highOnColor]]'
											name="high"
											on-click='setSpeed'
											disabled='[[_isOnHigh]]'>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
										    <path fill="currentColor" d="M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M21 21V20.5C21 19.67 20.33 19 19.5 19C20.33 19 21 18.33 21 17.5V17C21 15.89 20.1 15 19 15H16V17H19V18H17V20H19V21H16V23H19C20.11 23 21 22.11 21 21" />
											</svg>
										</button>
								</div>
             </hui-generic-entity-row>
        `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        observer: 'hassChanged'
      },
      _config: Object,
      _stateObj: Object,
      _lowOnColor: String,
      _medOnColor: String,
      _highOnColor: String,
      _offColor: String,
      _modeInColor: String,
      _modeInOutColor: String,
      _modeOutColor: String,
      _isOffState: Boolean,
      _isOnState: Boolean,
      _isOnLow: Boolean,
      _isOnMed: Boolean,
      _isOnHigh: Boolean,
    }
  }

  setConfig(config) {
    this._config = config;
    this._config = {
      customTheme: false,
      customIsOffColor: '#f44c09',
      customIsOnLowColor: '#43A047',
      customIsOnMedColor: '#43A047',
      customIsOnHiColor: '#43A047',
      customIsOffSpdColor: '#759aaa',
      customIsModeOnColor: '#43A047',
      ...config
    };
  }

  hassChanged(hass) {
    const config = this._config;
    const stateObj = hass.states[config.entity];

    let speed;
    let mode;
    let modeincolor;
    let modeinoutcolor;
    let modeoutcolor;

    let lowcolor;
    let medcolor;
    let hicolor;
    let offcolor;

    if (stateObj && stateObj.attributes) {
      speed = stateObj.attributes.preset_mode || 'off';
      console.log("speed: " + speed);
      mode = stateObj.attributes.mode || 'inout';
      if (config.customTheme) {
        modeincolor = 'background-color:' + (mode == 'in' ? config.customIsModeOnColor : config.customIsOffSpdColor);
        modeinoutcolor = 'background-color:' + (mode == 'inout' ? config.customIsModeOnColor : config.customIsOffSpdColor);
        modeoutcolor = 'background-color:' + (mode == 'out' ? config.customIsModeOnColor : config.customIsOffSpdColor);

        lowcolor = 'background-color:' + (speed == 'low' ? config.customIsOnLowColor : config.customIsOffSpdColor);
        medcolor = 'background-color:' + (speed == 'medium' ? config.customIsOnMedColor : config.customIsOffSpdColor);
        hicolor = 'background-color:' + (speed == 'high' ? config.customIsOnHiColor : config.customIsOffSpdColor);
        offcolor = 'background-color:' + (speed == 'off' ? config.customIsOffColor : config.customIsOffSpdColor);
      }
      else {
        modeincolor = 'background-color:' + (mode == 'in' ? 'var(--primary-color)' : 'var(--disabled-text-color)');
        modeinoutcolor = 'background-color:' + (mode == 'inout' ? 'var(--primary-color)' : 'var(--disabled-text-color)');
        modeoutcolor = 'background-color:' + (mode == 'out' ? 'var(--primary-color)' : 'var(--disabled-text-color)');

        lowcolor = 'background-color:' + (speed == 'low' ? 'var(--primary-color)' : 'var(--disabled-text-color)');
        medcolor = 'background-color:' + (speed == 'medium' ? 'var(--primary-color)' : 'var(--disabled-text-color)');
        hicolor = 'background-color:' + (speed == 'high' ? 'var(--primary-color)' : 'var(--disabled-text-color)');
        offcolor = 'background-color:' + (speed == 'off' ? 'var(--primary-color)' : 'var(--disabled-text-color)');
      }
    }
    this.setProperties({
      _stateObj: stateObj,
      _isOffState: stateObj.state ? stateObj.state == 'off' : true,
      _isOnLow: speed === 'low',
      _isOnMed: speed === 'medium',
      _isOnHigh: speed === 'high',
      _lowOnColor: lowcolor,
      _medOnColor: medcolor,
      _highOnColor: hicolor,
      _offColor: offcolor,
      _modeInColor: modeincolor,
      _modeInOutColor: modeinoutcolor,
      _modeOutColor: modeoutcolor,
    });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  setSpeed(e) {
    const speed = e.currentTarget.getAttribute('name');
    if (speed == 'off') {
      this.hass.callService('fan', 'turn_off', { entity_id: this._config.entity });
    } else {
      this.hass.callService('fan', 'set_preset_mode', { entity_id: this._config.entity, preset_mode: speed });
    }
  }

  setMode(e) {
    const mode = e.currentTarget.getAttribute('name');
    this.hass.callService('dukaone', 'set_mode', { entity_id: this._config.entity, mode: mode });
  }
}

customElements.define('duka-control-entity-row', DukaCustomFanRow);
