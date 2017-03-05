/**
 * Control Panel
 */


(function($){
    $(document).ready(function(){

        var curtains = switchControl.build('curtainsControl',{
            id:'#curtain',
            stateUrl: './data/curtain-state.json',
            state: false,
            toggleElement: '#curtain .toggle',
            displayElement:'#curtain .display'
        }),
            lights = switchControl.build('lightsControl',{
            id:'#light',
            stateUrl: './data/light-state.json',
            state: false,
            toggleElement: '#light .toggle',
            displayElement:'#light .display'
        }),
            temperature = switchControl.build('temperatureControl',{
            id:'#temperature',
            stateUrl: './data/temperature-state.json',
            state: false,
            temperature: 24,
            toggleElement: '#temperature .toggle',
            displayElement:'#temperature .display'
        });


        $(".controlPanel" ).on( "click", ".control, input[type=range]", function( evt ) {
            evt.preventDefault();

            var target = evt.currentTarget.id,
                toggle = $(evt.target).hasClass('toggle'),
                arrowUp = $(evt.target).hasClass('arrow-up'),
                arrowDown = $(evt.target).hasClass('arrow-down'),
                eventType  = {
                              toggle: toggle,
                              arrowUp: arrowUp,
                              arrowDown: arrowDown
                             };
            if(target == 'input.lightRange' || target == 'input.curtainRange') return;

            switch(target) {
                case 'light':
                    handleAction(lights, eventType);
                    break;
                case 'curtain':
                    handleAction(curtains, eventType);
                    break;
                case 'temperature':
                    handleAction(temperature, eventType);
                    break;

            }

        });

        $(".controlPanel" ).on( "click", "input[type=range]", function( evt ) {
            var lightInput = $(evt.target).hasClass('lightRange'),
                curtainInput = $(evt.target).hasClass('curtainRange');
            if(lightInput) {
                lights.adjustLightRange()
            } else if(curtainInput) {
                curtains.adjustCurtain();
            }
        });


        function handleAction(control, event) {
            if(event.toggle) {
                control.toggle(control.config)
            } else if(event.arrowUp) {
                control.increaseTemperature(control.config);
            } else if(event.arrowDown) {
                control.decreaseTemperature(control.config);
            }
        }


        //init fn
        function init() {
            curtains.get(curtains.config);
            lights.get(lights.config);
            temperature.get(temperature.config);
            temperature.updateTemperature();
        }

        init();
    })

})($);