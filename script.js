


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



side_icons
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
