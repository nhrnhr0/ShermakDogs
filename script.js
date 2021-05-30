


var lastKnownScrollPosition = 0;
var ticking = false;
var side_icons = document.querySelectorAll('.icon-bar .icon');
function handleSideIcons(scrollPos) {
    //var icons = document.querySelectorAll('.icon-bar > div');
    if (scrollPos > 200) {
        //
        //var icons = document.querySelectorAll('.icon-bar > div');
        for(var i= 0; i  < side_icons.length; i++) {
            //icons[i].style.transform =  'translateX(0px)';
            side_icons[i].classList.remove('hide');
            side_icons[i].classList.add('pick');

        }
    }else {
        
        for(var i= 0; i  < side_icons.length; i++) {
            //icons[i].style.transform =  'translateX(-220px)';
            side_icons[i].classList.remove('pick');
            side_icons[i].classList.add('hide');
        }
        //document.querySelector('.icon-bar > div').css('transform', 'translateX(-220px)');
    }
}
document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    if (!ticking) {
        window.requestAnimationFrame(function() {
          handleSideIcons(lastKnownScrollPosition);
          ticking = false;
        });
    
        ticking = true;
    }
});



for(var i = 0; i < side_icons.length; i++) {
    side_icons[i].addEventListener('click', (event)=> {
        console.log('show');
        if(event.currentTarget.classList.contains('show')) {
            event.currentTarget.classList.remove('show');
        }else {
            event.currentTarget.classList.add('show');
        }
    });
    
}


/*function getAngleDeg(ax,ay,bx,by) {
    var angleRad = Math.atan((ay-by)/(ax-bx));
    var angleDeg = angleRad * 180 / Math.PI;
    
    return(angleDeg);
  }*/
  function getAngleDeg(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}


var clientX= 0, clientY=0;
document.querySelector('body').addEventListener('mousemove', function(e) {
    console.log('mouse move: ', e);
    clientX = e.pageX;
    
    clientY = e.pageY;
});

var lastClientX = 0; var lastClientY=0;
var tracer_container = document.querySelector('#mouse_trace');
function draw_trace_interval() {
    console.log('draw_trace_interval: ', clientX, clientY);
    if(lastClientX != clientX || lastClientY != clientY) {
        var img = document.createElement('img');
        img.src='./Paw_Print.svg';
        img.style.position = 'absolute'
        img.style.top = ''+lastClientY+'px';
        img.style.left= ''+lastClientX+'px';
        img.style.zIndex='999'
        img.style.width='25px';
        img.classList.add('paw')
        m = getAngleDeg(lastClientX, lastClientY, clientX, clientY);
        m+=90;
        img.style.transform= 'rotate('+m+'deg)'; 
        setTimeout(function(){
            img.remove();
            },trace_delete);
        
        
        var offsetX = lastClientX-clientX;
        var offsetY = lastClientY-clientY;
        if(Math.abs(offsetX)>25 || Math.abs(offsetY) >25){
            tracer_container.appendChild(img);
            
            lastClientX= clientX;
            lastClientY =clientY;
            
        }
    }
}
const trace_interval_val = 50;
const trace_delete = 350000
setInterval(draw_trace_interval, trace_interval_val);

