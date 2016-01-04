/*头像*/
$('.member_head').mouseenter(function(){
    $(this).find('ul').show();
});
$('.member_head').mouseleave(function(){
    $(this).find('ul').hide();
});

/*导航*/
$('.nav_ul li').each(function(){
    $(this).mouseenter(function(){
        var num=$(this).index();
        if(num==1 || num==2 || num==3)
        {
            var obj=$(this).fadeIn();
            $('.nav_list').stop();
            $('.nav_list').animate({height:'29px'},300,function(){
                obj.find('.nav_l_dl').fadeIn();
            });
        }
    });
    $(this).mouseleave(function(){
        var num=$(this).index();
        if(num==1 || num==2 || num==3)
        {
            $(this).find('.nav_l_dl').fadeOut();
            $('.nav_list').stop();
            $('.nav_list').animate({height:'0px'},300);
        }
    });
});

/*flash*/
$('.flash_btn dd').each(function(){
    $(this).mouseenter(function(){
        var num=$(this).index();
        var numOld=$('.fimg_current').index();
        if((num-1)!=numOld)
        {
            $('.flash_ul li').eq(num-1).addClass('fimg_current').siblings('li').removeClass('fimg_current');
            var numNew=$('.fimg_current').index();
            $('.flash_btn dd').each(function(){
                var ii=$(this).index();
                $(this).removeClass('flash_dd'+ii);
            });
            $(this).addClass('flash_dd'+num);
            $('.flash_btn dd').eq(num-1).addClass('f_current').siblings('dd').removeClass('f_current');
            $('.flash_ul li').eq(numNew).fadeIn();
            $('.flash_ul li').eq(numOld).fadeOut();
        }
    });
});
$('.flash_dtL').click(function(){
    var num=$('.fimg_current').index();
    var total=$('.flash_ul li:last').index();
    num-=1;
    if(num>=0)
    {
        $('.flash_btn dd').each(function(){
            var ii=$(this).index();
            $(this).removeClass('flash_dd'+ii);
        });
        $('.flash_btn dd').eq(num).addClass('flash_dd'+(num+1));
        $('.flash_btn dd').eq(num).addClass('f_current').siblings('dd').removeClass('f_current');
        $('.flash_ul li').eq(num).addClass('fimg_current').siblings('li').removeClass('fimg_current');
        $('.flash_ul li').eq(num+1).fadeOut();
        $('.flash_ul li').eq(num).fadeIn();
    }
    else
    {
        num=total;
        $('.flash_btn dd').each(function(){
            var ii=$(this).index();
            $(this).removeClass('flash_dd'+ii);
        });
        $('.flash_btn dd').eq(num).addClass('flash_dd'+(num+1));
        $('.flash_btn dd').eq(num).addClass('f_current').siblings('dd').removeClass('f_current');
        $('.flash_ul li').eq(num).addClass('fimg_current').siblings('li').removeClass('fimg_current');
        $('.flash_ul li').eq(num).fadeIn();
        $('.flash_ul li:first').fadeOut();
    }
});
$('.flash_dtR').click(function(){
    auto();
});
function auto(){
    var num=$('.fimg_current').index();
    var total=$('.flash_ul li:last').index();
    num+=1;
    if(num<=total)
    {
        $('.flash_btn dd').each(function(){
            var ii=$(this).index();
            $(this).removeClass('flash_dd'+ii);
        });
        $('.flash_btn dd').eq(num).addClass('flash_dd'+(num+1));
        $('.flash_btn dd').eq(num).addClass('f_current').siblings('dd').removeClass('f_current');
        $('.flash_ul li').eq(num).addClass('fimg_current').siblings('li').removeClass('fimg_current');
        $('.flash_ul li').eq(num).fadeIn();
        $('.flash_ul li').eq(num-1).fadeOut();
    }
    else
    {
        num=0;
        $('.flash_btn dd').each(function(){
            var ii=$(this).index();
            $(this).removeClass('flash_dd'+ii);
        });
        $('.flash_btn dd').eq(num).addClass('flash_dd'+(num+1));
        $('.flash_btn dd').eq(num).addClass('f_current').siblings('dd').removeClass('f_current');
        $('.flash_ul li').eq(num).addClass('fimg_current').siblings('li').removeClass('fimg_current');
        $('.flash_ul li').eq(num).fadeIn();
        $('.flash_ul li').eq(total).fadeOut();
    }
}
var autoFlash=setInterval('auto()',3000);
$('.flash').mouseenter(function(){
    clearInterval(autoFlash);
});
$('.flash').mouseleave(function(){
    autoFlash=setInterval('auto()',3000);
});

/*首页列表*/
$('.index_list li').each(function(){
    $(this).mouseenter(function(){
        $(this).find('.index_l_img i').stop();
        $(this).find('.index_l_img i').animate({top:'0px'},500);
    });
    $(this).mouseleave(function(){
        $(this).find('.index_l_img i').stop();
        $(this).find('.index_l_img i').animate({top:'-150px'},500);
    });
});
$('.video').click(function(){
    var linkA=$(this).find('a').attr('link');
    var flash='<embed src="'+linkA+'" width="616" height="390" allowscriptaccess="always" allowfullscreen="true" type="application/x-shockwave-flash" flashvars="from=ku6"></embed>';
    $('.index_video').show();
    $('.index_video_v').html(flash);
});
$('.index_video_xx').click(function(){
    $(this).parents('.index_video').hide();
    $('.index_video_v').html();
});

/*友链*/
$('.foot_al').click(function(){
    var liW=parseInt($('.foot_lul li:first').width());
    $('.foot_lul li:first').animate({marginLeft:-liW+'px'},200,function(){
        $('.foot_lul').append($(this));
        $(this).css('margin-left','0px');
    });
});
$('.foot_ar').click(function(){
    var liW=parseInt($('.foot_lul li:last').width());
    $('.foot_lul li:last').css('margin-left',-liW+'px');
    $('.foot_lul').prepend($('.foot_lul li:last'));
    $('.foot_lul li:first').animate({marginLeft:'0px'},200);
});

/*详细页右边*/
$('.detail_r_tit').click(function(){
    var num=$('.detail_r_tit').index($(this));
    var obj=$(this);
    if($('.detail_r_m').eq(num).hasClass('detail_cur'))
    {
        return;
    }
    $('.detail_r_m').eq(num).addClass('detail_cur');
    $('.detail_cur').slideUp();
    $('.detail_r_tit').each(function(){
        var ii=$('.detail_r_tit').index($(this));
        if(num!=ii)
        {
            $('.detail_r_m').eq(ii).removeClass('detail_cur');
        }
    });
    $('.detail_cur').slideDown(500,function(){
        var scrTop=obj.offset().top;
        $('body,html').animate({scrollTop:scrTop},300);
    });
})

/*活动*/
$('.activity_pDl dt').each(function(){
    $(this).mouseenter(function(){
        $(this).find('i').animate({top:'0px'},500);
    });
    $(this).mouseleave(function(){
        $(this).find('i').animate({top:'-164px'},500);
    });
});
var dlW=226;
$('.activity_pL').click(function(){
    $('.activity_pDl dl:first').animate({marginLeft:-dlW+'px'},200,function(){
        $('.activity_pDl div').append($(this));
        $(this).css('margin-left','0px');
    });
});
$('.activity_pR').click(function(){
    $('.activity_pDl dl:last').css('margin-left',-dlW+'px');
    $('.activity_pDl div').prepend($('.activity_pDl dl:last'));
    $('.activity_pDl dl:first').animate({marginLeft:'0px'},200);
});

/*分类*/
var sortdlW=183;
$('.sort_m_pL').click(function(){
    $('.sort_m_pDl dl:first').animate({marginLeft:-sortdlW+'px'},200,function(){
        $('.sort_m_pDl div').append($(this));
        $(this).css('margin-left','0px');
    });
});
$('.sort_m_pR').click(function(){
    $('.sort_m_pDl dl:last').css('margin-left',-sortdlW+'px');
    $('.sort_m_pDl div').prepend($('.sort_m_pDl dl:last'));
    $('.sort_m_pDl dl:first').animate({marginLeft:'0px'},200);
});



// 点击输入框文字消失离开又出现
$("textarea,input[focucmsg]").each(function() {
    if ($(this).val() == '') {
        $(this).val($(this).attr("focucmsg"));
    }
    $(this).focus(function() {
        if ($(this).val() == $(this).attr("focucmsg")) {
            $(this).val('');
            $(this).val('').css("color","#000");
        }
    });
    $(this).blur(function() {
        if (!$(this).val()) {
            $(this).val($(this).attr("focucmsg"));
            $(this).val($(this).attr("focucmsg"));
            $(this).css("color","#cfcfcf");
        }
    });
});
$('.fla_r_sel').mouseenter(function(){
    $(this).find('ul').show();
});
$('.fla_r_sel').mouseleave(function(){
    $(this).find('ul').hide();
});
$('.fla_r_ul li').mouseenter(function(){
    var val=$(this).text();
    $(this).parents('ul').siblings('.fla_r_sin').val(val);
});
$('.fla_r_ul li').click(function(){
    var val=$(this).text();
    $(this).parents('ul').siblings('.fla_r_sin').val(val);
    $(this).parents('ul').hide();
});
/*宝宝年龄*/
function pickedFunc(){
    $dp.$('date_year').value=$dp.cal.getP('y');
    $dp.$('date_mouth').value=$dp.cal.getP('M');
    $dp.$('date_day').value=$dp.cal.getP('d');
}
$('.date_reg').click(function(){
    WdatePicker({el:'date',dateFmt:'yyyy-MM-dd HH:mm:ss',onpicked:pickedFunc});
});
/*判断注册空值*/
var telTest="^[0-9]*[1-9][0-9]*$";
$('#baby_reg').bind('submit',function(){
    var babyName=$.trim($('#baby_name').val());
    var dateYear=$.trim($('#date_year').val());
    var dateMouth=$.trim($('#date_mouth').val());
    var dateDay=$.trim($('#date_day').val());
    var babyTel=$.trim($('#baby_tel').val());
    var babyClass=$.trim($('#baby_class').val());
    var babySch=$.trim($('#baby_sch').val());
    var babyWhere=$.trim($('#baby_where').val());
    if(babyName=='')
    {
        alert('请输入宝宝姓名！');
        return false;
    }
    else if(dateYear=='' || dateMouth=='' || dateDay=='')
    {
        alert('请输入宝宝出生日期！');
        return false;
    }
    else if(babyTel=='' || babyTel=='请输入手机号码' || !babyTel.match(telTest))
    {
        alert('请输入你的手机号码！');
        return false;
    }
    else if(babyClass=='' || babyClass=='选择你需要试听的课程')
    {
        alert('请选择你需要试听的课程！');
        return false;
    }
    else if(babySch=='' || babySch=='选择离你最近的中心')
    {
        alert('请选择离你最近的中心！');
        return false;
    }
    else if(babyWhere=='')
    {
        alert('请选择你的消息来源！');
        return false;
    }
    else
    {
        return true;
    }
});
