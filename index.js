new fullpage(
    '#wrap', 
    {
    	autoScrolling:true ,
        anchors:['1page', '2page','3page','4page' ,'5page','6page','7page','8page'],
        navigation: true,
        afterLoad: function(origin, destination, direction, trigger){
            if(destination['index'] == 1){
               
                anime({
                    targets:'.st0',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st1',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:3000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st2',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:4500,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st3',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:6000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st4',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:7500,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st5',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:9000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st6',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:10500,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st7',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:12000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st8',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:13500,
                    opacity:1,
                    easing:'easeOutSine'
                  });
            }
    
       
        }        
    }
);

