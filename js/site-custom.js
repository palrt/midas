 jQuery(document).ready(function(){
	 
		
		 jQuery('.rb').on('click', function(){
      			jQuery('.top-header .main-nav').slideToggle();
      			if(jQuery('.top-header .main-nav').is(':visible')){
      				jQuery('body').toggleClass('responsive-menu-open');
      			}
      	}); 
		
		
jQuery('.footer-form .form-group input').focusin(function(){
	jQuery(this).parents('.form-group').addClass('filled-focus');
});

jQuery('.footer-form .form-group input').focusout(function(){
	jQuery(this).parents('.form-group').removeClass('filled-focus');
});


jQuery('.footer-form .form-group input').blur(function()
{
    if(jQuery(this).val() ) {
       jQuery(this).parents('.form-group').addClass('filled');
    }
});

jQuery('.footer-form .form-group textarea').focusin(function(){
	jQuery(this).parents('.form-group').addClass('filled-focus');
});

jQuery('.footer-form .form-group textarea').focusout(function(){
	jQuery(this).parents('.form-group').removeClass('filled-focus');
});


jQuery('.footer-form .form-group textarea').blur(function()
{
    if(jQuery(this).val() ) {
       jQuery(this).parents('.form-group').addClass('filled');
    }
});
      	
});