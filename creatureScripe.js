
var ImageGalleryInformation = [
    {image:'images/1.jpg',
    link:'www.google.com'},
    {image:'images/2.jpg',
    link:'www.google.com'},
    {image:'images/3.jpg',
    link:'www.google.com'},
    {image:'images/4.jpg',
    link:'www.google.com'},
    {image:'images/5.jpg',
    link:'www.google.com'},
    {image:'images/6.jpg',
    link:'www.google.com'},
    {image:'images/7.jpg',
    link:'www.google.com'},
    {image:'images/8.jpg',
    link:'www.google.com'},
]

var objectGalleryInformation = [
    {image:'objects/1.jpg',
    link:'www.google.com'},
    {image:'objects/2.png',
    link:'.www.google.com'},
    {image:'objects/3.png',
    link:'www.google.com'},
    {image:'objects/4.jpg',
    link:'www.google.com'},
    {image:'objects/5.png',
    link:'www.google.com'},
    {image:'objects/6.png',
    link:'www.google.com'},
]
    
var websiteGalleryInformation = [
    {image:'websites/1.png',
    link:'https://viscount-of-sandwich.herokuapp.com'},
    {image:'websites/2.png',
    link:'https://ghazalpoetryroom.herokuapp.com'},
    {image:'websites/3.png',
    link:'https://leonorasgamingroom.herokuapp.com'},
    {image:'websites/4.png',
    link:'https://infinite-inlet-20359.herokuapp.com'},
]

var interactGalleryInformation = [
    {image:'interact/1.png',
    link:'https://viscount-of-sandwich.herokuapp.com'},
    {image:'interact/2.png',
    link:'https://ghazalpoetryroom.herokuapp.com'},
    {image:'interact/3.png',
    link:'https://leonorasgamingroom.herokuapp.com'},
    {image:'interact/4.png',
    link:'https://infinite-inlet-20359.herokuapp.com'},
]



function createImageGallery(){
    var imageGallery= $(".imageGallery");
    for(i=0;i<ImageGalleryInformation.length;i++){
        var R= Math.floor(Math.random() * 8)+1  
        var indiviDiv = $("<div>");
        var indivA = $("<a>")
        indivA.attr('href', ImageGalleryInformation[i].link)
        indivA.attr('style', 'position:absolute;z-index:'+[R])
        indiviDiv.attr('style',"background-image:url('"+ImageGalleryInformation[i].image+"')")
        indiviDiv.addClass("indivDiv")
        indivA.addClass('indivA scatterimage'+R)
        $(indivA).append(indiviDiv)
       $(imageGallery).append(indivA)
    }
}

function createObjectGallery(){
    
    var objectGallery= $(".objectGallery");
    for(i=0;i<objectGalleryInformation.length;i++){
        var R= Math.floor(Math.random() * 8)+1  
        var indiviDiv = $("<div>");
        var indivA = $("<a>")
        indivA.attr('href', objectGalleryInformation[i].link)
        indivA.attr('style', 'position:absolute;z-index:'+[R])
        indiviDiv.attr('style',"background-image:url('"+objectGalleryInformation[i].image+"')")
        indiviDiv.addClass("indivDiv")
        indivA.addClass('indivA scatterimage'+R)
        $(indivA).append(indiviDiv)
       $(objectGallery).append(indivA)
    }
}

function createWebsiteGallery(){
    
    var webGallery= $(".webGallery");
    for(i=0;i<websiteGalleryInformation.length;i++){
        var R= Math.floor(Math.random() * 8)+1  
        var indiviDiv = $("<div>");
        var indivA = $("<a>")
        indivA.attr('href', websiteGalleryInformation[i].link)
        indivA.attr('style', 'position:absolute;z-index:'+[R])
        indiviDiv.attr('style',"background-image:url('"+websiteGalleryInformation[i].image+"')")
        indiviDiv.addClass("indivDiv")
        indivA.addClass('indivA scatterimage'+R)
        $(indivA).append(indiviDiv)
       $(webGallery).append(indivA)
    }
}

function createGalleinteractry(){
    
    var interGallery= $(".interGallery");
    for(i=0;i<interactGalleryInformation.length;i++){
        var R= Math.floor(Math.random() * 8)+1  
        var indiviDiv = $("<div>");
        var indivA = $("<a>")
        indivA.attr('href', interactGalleryInformation[i].link)
        indivA.attr('style', 'position:absolute;z-index:'+[R])
        indiviDiv.attr('style',"background-image:url('"+interactGalleryInformation[i].image+"')")
        indiviDiv.addClass("indivDiv")
        indivA.addClass('indivA scatterimage'+R)
        $(indivA).append(indiviDiv)
       $(interGallery).append(indivA)
    }
}






$('.cover').on('mouseover', function(event){
    var treat=$(event.target).parent().children()[1]
    $(treat).addClass('treatReveal')
    var number = $(event.target).attr("value");
    switch(number){
        case '1' : 
            $('.instructionDisplay').text('Images');
            break;
        case '2':
            $('.instructionDisplay').text('sculture');
            break;
        case '3':
            $('.instructionDisplay').text('websites');
            break;
         case '4':
            $('.instructionDisplay').text('interactive');
            break;
    


    }
})

$('.cover').on('mouseleave', function(event){
    var treat=$(event.target).parent().children()[1]
    $(treat).removeClass('treatReveal')
    setTimeout(() => {
        $('.instructionDisplay').text('please pick a gallery');
        
    },1000);
    

})

$('.cover').on("click",function(event){
    // event.preventDefault();
    // event.stopPropagation()
    var number = $(event.target).attr("value");
    console.log(number)
    var treat=$(event.currentTarget).parent().children()[1]
    console.log($(event.currentTarget).parent().children()[1]);
    $(treat).attr("style","animation:treatDrop"+number+" .5s both")
    
    switch(number) {
        case "1" :
    
    setTimeout(() => {
        document.body.scrollTop=100;
        $('.c1 > .bl1 .bl2 .bl3 .bl4').attr("style", "left:0")
        setTimeout(() => {
            $('.c1 > .bl1 .bl2 .bl3').attr("style", "left:0")
            setTimeout(() => {
                $('.c1 >.bl1 .bl2').attr("style", "left:0")
                setTimeout(() => {
                    $('.c1 > .bl1').attr("style", "left:0")
                    createImageGallery(); 
                    $(treat).attr("style",'')

                        
                    
                }, 100);
                
            }, 85);   
            
        }, 60);
    

    $('.c1 > .br1 .br2 .br3 .br4').attr("style", "right:0")
    setTimeout(() => {
        $('.c1 > .br1 .br2 .br3').attr("style", "right:0")
        setTimeout(() => {
            $('.c1 >.br1 .br2').attr("style", "right:0")
            setTimeout(() => {
                $('.c1 > .br1').attr("style", "right:0")
                    
                
            }, 100);
            
        }, 85);   
    }, 60);
}, 50)


    break;

    case "2" :
    
        setTimeout(() => {
            document.body.scrollTop=400;
            $('.c2 > .bl1 .bl2 .bl3 .bl4').attr("style", "left:0")
            setTimeout(() => {
                $('.c2 > .bl1 .bl2 .bl3').attr("style", "left:0")
                setTimeout(() => {
                    $('.c2 >.bl1 .bl2').attr("style", "left:0")
                    setTimeout(() => {
                        $('.c2 > .bl1').attr("style", "left:0")
                        createObjectGallery()
                        $(treat).attr("style",'')

                            
                        
                    }, 100);
                    
                }, 85);   
                
            }, 60);
        
    
        $('.c2 > .br1 .br2 .br3 .br4').attr("style", "right:0")
        setTimeout(() => {
            $('.c2 > .br1 .br2 .br3').attr("style", "right:0")
            setTimeout(() => {
                $('.c2 >.br1 .br2').attr("style", "right:0")
                setTimeout(() => {
                    $('.c2 > .br1').attr("style", "right:0")
                   
                        
                    
                }, 100);
                
            }, 85);   
        }, 60);
    }, 50)
    
    
    break;

    case "3":

        setTimeout(() => {
            document.body.scrollTop=700;
            $('.c3 > .bl1 .bl2 .bl3 .bl4').attr("style", "left:0")
            setTimeout(() => {
                $('.c3 > .bl1 .bl2 .bl3').attr("style", "left:0")
                setTimeout(() => {
                    $('.c3 >.bl1 .bl2').attr("style", "left:0")
                    setTimeout(() => {
                        $('.c3 > .bl1').attr("style", "left:0")
                        createWebsiteGallery()
                        $(treat).attr("style",'')

                            
                        
                    }, 100);
                    
                }, 85);   
                
            }, 60);
        
    
        $('.c3 > .br1 .br2 .br3 .br4').attr("style", "right:0")
        setTimeout(() => {
            $('.c3 > .br1 .br2 .br3').attr("style", "right:0")
            setTimeout(() => {
                $('.c3 >.br1 .br2').attr("style", "right:0")
                setTimeout(() => {
                    $('.c3 > .br1').attr("style", "right:0")
                        
                    
                }, 100);
                
            }, 85);   
        }, 60);
    }, 50)
    break;

    case "4":

        setTimeout(() => {
            document.body.scrollTop=1200;
            $('.c4 > .bl1 .bl2 .bl3 .bl4').attr("style", "left:0")
            setTimeout(() => {
                $('.c4 > .bl1 .bl2 .bl3').attr("style", "left:0")
                setTimeout(() => {
                    $('.c4 >.bl1 .bl2').attr("style", "left:0")
                    setTimeout(() => {
                        $('.c4 > .bl1').attr("style", "left:0")
                        createGalleinteractry()
                        $(treat).attr("style",'')

                            
                        
                    },200);
                    
                }, 85);   
                
            }, 60);
        
    
        $('.c4 > .br1 .br2 .br3 .br4').attr("style", "right:0")
        setTimeout(() => {
            $('.c4 > .br1 .br2 .br3').attr("style", "right:0")
            setTimeout(() => {
                $('.c4 >.br1 .br2').attr("style", "right:0")
                setTimeout(() => {
                    $('.c4 > .br1').attr("style", "right:0")
                        
                    
                }, 100);
                
            }, 85);   
        }, 60);
    }, 50)
    



    }
})


$(".backToTop").on("click", function(event){
    event.stopPropagation();
    event.preventDefault();
    document.body.scrollTop=10;



})





