
var w = screen.width;


    let base_opener = document.querySelector(".s_panel__base_label__show");
    let base_open = true; 
    base_opener.onclick = toggleBase = () => {
        if (base_open){
            gsap.to('.s_panel__base-dynamic-el', {duration: .3, opacity: 0});
            gsap.to('.s_panel__base-dynamic-el', {delay: .3, visibility: "hidden", });
            gsap.to('.s_panel__base_selector', {delay: .3, height: '12px'});
            gsap.to('.s_panel__base_label__show', {duration: .1, rotation: -90});
            base_open = false;
            
        } else if (base_open === false){
            gsap.to('.s_panel__base-dynamic-el',{duration: .3, y: 0});
            gsap.to('.s_panel__base-dynamic-el',{delay: .3, visibility: "visible", opacity: 1});
            gsap.to('.s_panel__base_selector', {height: '154px'});
            gsap.to('.s_panel__base_label__show', {duration: .1, rotation: 0})
            base_open = true;
        }
    }


    let color_opener = document.querySelector(".s_panel__color_label__show");
    color_open = true; 
    color_opener.onclick = toggleBase = () => {
        if (color_open){
            gsap.to('.s_panel__color_piker', {duration: .3, opacity: 0});
            gsap.to('.s_panel__color_piker', {delay: .3, visibility: "hidden", });
            gsap.to('.s_panel__color_selector', {delay: .3, height: '12px'});
            gsap.to('.s_panel__color_label__show', {duration: .1, rotation: -90});
            color_open = false;
            
        } else if (color_open === false){
            gsap.to('.s_panel__color_piker',{duration: .3, y: 0});
            gsap.to('.s_panel__color_piker',{delay: .3, visibility: "visible", opacity: 1});
            gsap.to('.s_panel__color_selector', {height: '84px'});
            gsap.to('.s_panel__color_label__show', {duration: .1, rotation: 0})
            color_open = true;
        }
    }

    let blockAbout = document.querySelector(".s_panel__info_about"); 
    let blockFeedback = document.querySelector(".s_panel__info_wrap");
    
    let highLightAbout = false;
    let highLightFeedback = false;
    
    
    blockAbout.onclick = toggleAbout = () => {
        if(highLightAbout===false){
            gsap.to('.s_panel__info_about', {duration: .2, background: '#fff'});
            gsap.to('.s_panel__info_wrap', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "block"});
            gsap.to('.s_panel__info--block',{durtation: .2, autoAlpha: 1});
    
            highLightAbout = true;
            highLightFeedback = false;
        } else if (highLightAbout){
            gsap.to('.s_panel__info_about', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "none"});
            gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 0});
            // remove block below
            highLightAbout = false;
        }
    }
    
    blockFeedback.onclick = toggleFeedback = () => {
        if (highLightFeedback === false){
            gsap.to('.s_panel__info_about', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info_wrap', {duration: .2, background: '#fff'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "block"});
            gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 1});
        
            highLightAbout = false;
            highLightFeedback = true;
    
        } else if (highLightFeedback){
            gsap.to('.s_panel__info_wrap', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "none"});
            gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 0});
            // remove block below
            highLightFeedback = false;
        }
    }

    let baseColor = document.querySelector(".base_bg_color");
    let basePattern = document.querySelector(".base_bg_pattern");
    
    baseColor.onclick = moveToPattern = () => {
        gsap.to('.underColorPattern', {duration: .3, marginLeft: '0'});
    }
    
    basePattern.onclick = moveToColor = () => {
        gsap.to('.underColorPattern', {duration: .3, marginLeft: '50%'});
    }


        
    gsap.from('.tooth', {opacity: 0, duration: 1, x: -20});
    gsap.from('.mushroom', {opacity: 0, duration: 1, x: -10});
    gsap.from('.eye', {opacity: 0, duration: 1, x: -40});
    gsap.from('.knife', {opacity: 0, duration: 1, x: -30});
    gsap.from('.herb', {opacity: 0, duration: 1, x: -10});
    
    
    
    gsap.from('.tongue', {opacity: 0, duration: 1, x: 30});
    gsap.from('.scissors', {opacity: 0, duration: 1, x: 40});
    gsap.from('.flower', {opacity: 0, duration: 1, x: 40});
    gsap.from('.bone', {opacity: 0, duration: 1, x: 20});
    gsap.from('.coffin', {opacity: 0, duration: 1, x: 40});
    gsap.from('.light', {opacity: 0, duration: 1, x: 40});
    


if (w >= 768){
    let settings = document.querySelector(".settings");
    // let s_panel = document.querySelector(".s_panel");
    let s_panel_close_btn = document.querySelector(".s_panel_close_btn");
    let priceBtn = document.querySelector(".price_btn");

    settings.onclick = openPanel = () => {
        
        gsap.to(".s_panel", { duration: .3, visibility: 'visible'});

        gsap.to('.move-line', {duration: .1, y: -110})
        gsap.to('.s_panel_close_btn', { delay: .5, autoAlpha: 1 });
        gsap.to('.settings', { duration: .5, ease: "power4.out", autoAlpha: 0 })
    }
    // priceBtn.onclick = openPanel;
    
    document.querySelector(".s_panel_close_btn").onclick = closePanel = () => {
        gsap.to(".s_panel", { duration: .3, visibility: 'hidden'});
        gsap.to('.move-line', {duration: .1, y: 0});
        gsap.to('.s_panel_close_btn', { autoAlpha: 0},"-=1");
        gsap.to('.settings', { duration: .5, ease: "power4.out", autoAlpha: 1 });
    }
}



if (w > 1199){
    let settings = document.querySelector(".settings");
    let s_panel_close_btn = document.querySelector(".s_panel_close_btn");

    settings.onclick = openPanel = () => {
        gsap.to(".s_panel_desktop", {  visibility: 'visible'});
        gsap.to(".s_panel_desktop", {  duration: .5, autoAlpha: 1});
        gsap.to('.s_panel_close_btn', { delay: .5, autoAlpha: 1 });
        gsap.to('.settings', { duration: .5, ease: "power4.out", autoAlpha: 0 })
    }
    
    s_panel_close_btn.onclick = closePanel = () => {
        gsap.to(".s_panel_desktop", { duration: .5, autoAlpha: 0});
        gsap.to('.s_panel_close_btn', { autoAlpha: 0},"-=1");
        gsap.to('.settings', { duration: .5, ease: "power4.out", autoAlpha: 1 });
    }

    let base_opener = document.querySelector(".open_base");
    let base_open = true; 
    base_opener.onclick = toggleBase = () => {
        console.log('base clicked!')
        if (base_open){
            gsap.to('.s_panel_desktop__base-dynamic-el', {duration: .3, opacity: 0});
            gsap.to('.s_panel_desktop__base-dynamic-el', {delay: .3, visibility: "hidden", });
            gsap.to('.s_panel_desktop__base_selector', {delay: .3, height: '12px'});
            gsap.to('.s_panel_desktop__base_label__show', {duration: .1, rotation: -90});
            base_open = false;
            
        } else if (base_open === false){
            gsap.to('.s_panel_desktop__base-dynamic-el',{duration: .3, y: 0});
            gsap.to('.s_panel_desktop__base-dynamic-el',{delay: .3, visibility: "visible", opacity: 1});
            gsap.to('.s_panel_desktop__base_selector', {height: '100px'});
            gsap.to('.s_panel_desktop__base_label__show', {duration: .1, rotation: 0})
            base_open = true;
        }
    }


    let color_opener = document.querySelector(".color_opener");
    let color_open = true; 
    color_opener.onclick = toggleBase = () => {
        if (color_open){
            gsap.to('.s_panel_desktop__color_piker', {duration: .3, opacity: 0});
            gsap.to('.s_panel_desktop__color_piker', {delay: .3, visibility: "hidden", });
            gsap.to('.s_panel_desktop__color_selector', {delay: .3, height: '12px'});
            gsap.to('.s_panel_desktop__color_label__show', {duration: .1, rotation: -90});
            color_open = false;
            
        } else if (color_open === false){
            gsap.to('.s_panel_desktop__color_piker',{duration: .3, y: 0});
            gsap.to('.s_panel_desktop__color_piker',{delay: .3, visibility: "visible", opacity: 1});
            gsap.to('.s_panel_desktop__color_selector', {height: '84px'});
            gsap.to('.s_panel_desktop__color_label__show', {duration: .1, rotation: 0})
            color_open = true;
        }
    }

    
    
    let baseColor = document.querySelector(".move_color");
    let basePattern = document.querySelector(".move_pattern");
    
    baseColor.onclick = moveToPattern = () => {
        gsap.to('.underColorPattern', {duration: .3, marginLeft: '0'});
    }
    
    basePattern.onclick = moveToColor = () => {
        gsap.to('.underColorPattern', {duration: .3, marginLeft: '50%'});
    }

    


    let blockAbout = document.querySelector(".show_about"); 
    let blockFeedback = document.querySelector(".show_info");
    
    let highLightAbout = false;
    let highLightFeedback = false;
    
    
    blockAbout.onclick = toggleAbout = () => {
        if(highLightAbout===false){
            gsap.to('.s_panel__info_about', {duration: .2, background: '#fff'});
            gsap.to('.s_panel__info_wrap', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "block"});
            gsap.to('.s_panel__info--block',{durtation: .2, autoAlpha: 1});
    
            highLightAbout = true;
            highLightFeedback = false;
        } else if (highLightAbout){
            gsap.to('.s_panel__info_about', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "none"});
            gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 0});
            // remove block below
            highLightAbout = false;
        }
    }
    
    blockFeedback.onclick = toggleFeedback = () => {
        if (highLightFeedback === false){
            gsap.to('.s_panel__info_about', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info_wrap', {duration: .2, background: '#fff'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "block"});
            gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 1});
        
            highLightAbout = false;
            highLightFeedback = true;
    
        } else if (highLightFeedback){
            gsap.to('.s_panel__info_wrap', {duration: .2, background: 'transparent'});
            gsap.to('.s_panel__info--block',{durtation: .2, display: "none"});
            gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 0});
            // remove block below
            highLightFeedback = false;
        }
    }
}

