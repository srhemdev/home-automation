/**
 * Control Panel
 */


(function($){
    $(document).ready(function(){

        //Create the controls you want to see in the control panel

        var lights = switchControl.build('lightsControl',{
                id:'light',
                stateUrl: './data/light-state.json',
                state: false,
                toggleClassName: '.toggle',
                displayClassName:'.display',
                parent: '.control-options'
            }),
            curtains = switchControl.build('curtainsControl',{
                id:'curtain',
                stateUrl: './data/curtain-state.json',
                state: false,
                toggleClassName: '.toggle',
                displayClassName: '.display',
                parent: '.control-options'
            }),
            temperature = switchControl.build('temperatureControl',{
                id:'temperature',
                stateUrl: './data/temperature-state.json',
                state: false,
                temperature: 24,
                toggleClassName: '.toggle',
                displayClassName:'.display',
                parent: '.control-options'
            });
    })

})($);