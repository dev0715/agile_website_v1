jQuery(document).ready(function(e){e.validator.addMethod("checkDomain",function(e){return/^([\w-.]+@(?!gmail)(?!outlook)(?!hotmail)(?!yahoo)(?!yandex)([\w-]+.)+[\w-]{2,4})?$/.test(e)},"please use your corporate email address.email with domain (gmail,outlook,hotmail,yahoo,yandex)are not allowed."),e.validator.addMethod("captcha",function(a){return $result=parseInt(e("#num1").val())+parseInt(e("#num2").val())==parseInt(e("#captcha").val()),e("#spambot").fadeOut("fast"),$result},"Incorrect value, please try again."),e(".alert-successn").delay(1e4).fadeOut(5e3),e(".alert-danger").delay(1e4).fadeOut(5e3),e("#divi-register-form").validate({rules:{r_lname:{required:!0,maxlength:30,minlength:2},r_email:{required:!0,checkDomain:!0,email:!0},r_company:{required:!0,maxlength:50,minlength:1},r_jobtitle:{required:!0,maxlength:50,minlength:2},r_fname:{required:!0,maxlength:30,minlength:2},r_phonenumber:{maxlength:16,minlength:8,number:!0},captcha:{required:!0,captcha:!0},r_CI:{required:!0},r_sdx:{required:!0},r_alm_version:{required:!0}},messages:{r_email:{remote:"This email address is already registered."}},invalidHandler:function(a,r){r.numberOfInvalids()&&e("html, body").animate({scrollTop:e(r.errorList[0].element).offset().top},1e3)}})});