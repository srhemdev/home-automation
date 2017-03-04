/**
 * Control Panel
 */


(function($){
    $(document).ready(function(){
        var curtains = switchControl.build('curtainsControl',{id:'curtain', stateUrl: './data/curtain-state.json', class:'active'});
        var lights = switchControl.build('lightsControl',{id:'light', stateUrl: './data/light-state.json',class:'active'});
        var temperature = switchControl.build('temperatureControl',{id:'temperature', stateUrl: './data/temperature-state.json',class:'active'});


        $(".controlPanel" ).click(function(evt) {
            console.log(evt.target.id)
            switch(evt.target.id) {
                case 'light':
                    lights.toggle(lights.config);
                    break;
                case 'curtain':
                    curtains.toggle(curtains.config);
                    break;
                case 'temperature':
                    temperature.toggle(temperature.config);
                    break;
            }
        });


        //init fn
        function init() {
            curtains.get(curtains.config);
            lights.get(lights.config);
            temperature.get(temperature.config);
        }

        init();
    })

})($);