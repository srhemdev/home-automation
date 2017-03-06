/**
 * Control Panel to add new controls
 */


(function($){
    $(document).ready(function(){

        //Create the controls you want to see in the control panel

        //Adding some default controls
//        var lights = switchControl.build('lightsControl',{
//                id:'light',
//                name: 'Lights',
//                stateUrl: MockData.lightStatusUrl,
//                state: false,
//                toggleClassName: '.toggle',
//                displayClassName:'.display',
//                parent: '.control-options'
//            }),
//            curtains = switchControl.build('curtainsControl',{
//                id:'curtain',
//                name: 'Curtains',
//                stateUrl: MockData.curtainStatusUrl,
//                state: false,
//                toggleClassName: '.toggle',
//                displayClassName: '.display',
//                parent: '.control-options'
//            }),
//            temperature = switchControl.build('temperatureControl',{
//                id:'temperature',
//                name: 'Thermometer',
//                stateUrl: MockData.temperatureUrl,
//                state: false,
//                temperature: 24,
//                toggleClassName: '.toggle',
//                displayClassName:'.display',
//                parent: '.control-options'
//            });
//
        var configObject = {
            state: false,
            toggleClassName: '.toggle',
            displayClassName:'.display',
            parent: '.control-options'
        };
        var obj = {};

        function selectChoice(choice) {
            var control = '';
            var config = Object.create(configObject);
            config.id = choice + Math.floor((Math.random() * 1000000) + 1);

            switch(choice) {
                case 'light':
                    config.range = 20;
                    config.stateUrl = MockData.lightStatusUrl;
                    control = 'lightsControl';
                    break;
                case 'curtain':
                    config.range = 50;
                    config.stateUrl = MockData.curtainStatusUrl;
                    control = 'curtainsControl'
                    break;
                case 'temperature':
                    config.temperature = 22;
                    config.stateUrl = MockData.temperatureUrl;
                    control = 'temperatureControl';
                    break;
            }

            switchControl.build(control, config);
        }

        $('#control-choice-add').click(function(){
            var value = $('.control-choice').val();
            selectChoice(value)

        });

        function init() {
            selectChoice('light');
            selectChoice('curtain');
            selectChoice('temperature');
        }

        init();


    })

})($);