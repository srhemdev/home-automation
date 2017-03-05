/**
 * Control Panel
 */


(function($){
    $(document).ready(function(){

        var lights = switchControl.build('lightsControl',{
                id:'#light',
                stateUrl: './data/light-state.json',
                state: false,
                toggleElement: '#light .toggle',
                displayElement:'#light .display',
                parent: '.control-options'

            }),curtains = switchControl.build('curtainsControl',{
            id:'#curtain',
            stateUrl: './data/curtain-state.json',
            state: false,
            toggleElement: '#curtain .toggle',
            displayElement:'#curtain .display',
            parent: '.control-options'
        }),
            temperature = switchControl.build('temperatureControl',{
            id:'#temperature',
            stateUrl: './data/temperature-state.json',
            state: false,
            temperature: 24,
            toggleElement: '#temperature .toggle',
            displayElement:'#temperature .display',
            parent: '.control-options'
        });
    })

})($);