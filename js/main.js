$(document).ready(function () {
    "use strict";
    
    $(".position_block_img_icons_default").click(function() {
        $(".position_block_img").addClass("active");
    });

    $(".position_block_img_icons_flat").click(function() {
        $(".position_block_img").removeClass("active");
    });

    $(".hero_mobile_table_head_36b").click(function() {
        $(".hero_mobile_table_head_36c").removeClass("active");
        $(this).addClass("active");
        $(".hero_mobile_table_list_item_36c").removeClass("active");
        $(".hero_mobile_table_list_item_36b").addClass("active");
        $(".hero_mobile_map .36b").addClass("active");
        $(".hero_mobile_map .36c").removeClass("active");

        $(".hero_mobile_map_button_content i").addClass("active");
        $(".hero_mobile_table_arrows_prev").addClass("active");
        $(".hero_mobile_table_arrows_next").removeClass("active");
        $(".hero_mobile_table_head span").addClass("active");
    });


    $(".hero_mobile_table_head_36c").click(function() {
        $(".hero_mobile_table_head_36b").removeClass("active");
        $(this).addClass("active");
        $(".hero_mobile_table_list_item_36b").removeClass("active");
        $(".hero_mobile_table_list_item_36c").addClass("active");
        $(".hero_mobile_map .36b").removeClass("active");
        $(".hero_mobile_map .36c").addClass("active");

        $(".hero_mobile_map_button_content i").removeClass("active");
        $(".hero_mobile_table_arrows_next").addClass("active");
        $(".hero_mobile_table_arrows_prev").removeClass("active");
        $(".hero_mobile_table_head span").removeClass("active");

    });

    $(".hero_mobile_table_arrows_next").click(function() {
        $(".hero_mobile_table_head_36c").removeClass("active");
        $(".hero_mobile_table_head_36b").addClass("active");
        $(".hero_mobile_table_list_item_36c").removeClass("active");
        $(".hero_mobile_table_list_item_36b").addClass("active");
        $(".hero_mobile_map .36b").addClass("active");
        $(".hero_mobile_map .36c").removeClass("active");

        $(".hero_mobile_map_button_content i").addClass("active");
        $(".hero_mobile_table_arrows_prev").addClass("active");
        $(this).removeClass("active");
        $(".hero_mobile_table_head span").addClass("active");
    });

    $(".hero_mobile_table_arrows_prev").click(function() {
        $(".hero_mobile_table_head_36c").addClass("active");
        $(".hero_mobile_table_head_36b").removeClass("active");
        $(".hero_mobile_table_list_item_36c").addClass("active");
        $(".hero_mobile_table_list_item_36b").removeClass("active");
        $(".hero_mobile_map .36b").removeClass("active");
        $(".hero_mobile_map .36c").addClass("active");

        $(".hero_mobile_map_button_content i").removeClass("active");
        $(".hero_mobile_table_arrows_next").addClass("active");
        $(this).removeClass("active");
        $(".hero_mobile_table_head span").removeClass("active");
    });

    $(".hero_block_head_content_btns_item_36b").click(function() {
        $(".hero_block_head_content_btns_item_36c").removeClass("active");
        $(this).addClass("active");
        $(".hero_block_content_back_36c").removeClass("active");
        $(".hero_block_content_back_36b").addClass("active");

        $(".hero_block_content_text_btn i").addClass("active");
        $(".hero_block_head_content_arrows_right").removeClass("active");
        $(".hero_block_head_content_arrows_left").addClass("active");
        $(".hero_block_head_content_btns span").addClass("active");
    });

    $(".hero_block_head_content_btns_item_36c").click(function() {
        $(".hero_block_head_content_btns_item_36b").removeClass("active");
        $(this).addClass("active");
        $(".hero_block_content_back_36b").removeClass("active");
        $(".hero_block_content_back_36c").addClass("active");

        $(".hero_block_content_text_btn i").removeClass("active");
        $(".hero_block_head_content_arrows_right").addClass("active");
        $(".hero_block_head_content_arrows_left").removeClass("active");
        $(".hero_block_head_content_btns span").removeClass("active");

    });

    $(".hero_block_head_content_arrows_right").click(function() {
        $(".hero_block_head_content_btns_item_36c").removeClass("active");
        $(".hero_block_head_content_btns_item_36b").addClass("active");
        $(".hero_block_content_back_36c").removeClass("active");
        $(".hero_block_content_back_36b").addClass("active");

        $(".hero_block_content_text_btn i").addClass("active");
        $(".hero_block_head_content_arrows_left").addClass("active");
        $(this).removeClass("active");
        $(".hero_block_head_content_btns span").addClass("active");
    });


    $(".hero_block_head_content_arrows_left").click(function() {
        $(".hero_block_head_content_btns_item_36b").removeClass("active");
        $(".hero_block_head_content_btns_item_36c").addClass("active");
        $(".hero_block_content_back_36b").removeClass("active");
        $(".hero_block_content_back_36c").addClass("active");

        $(".hero_block_content_text_btn i").removeClass("active");
        $(".hero_block_head_content_arrows_right").addClass("active");
        $(this).removeClass("active");
        $(".hero_block_head_content_btns span").removeClass("active");

    });


    $(".modal_map_switch_arrows_next").click(function() {
        $(".modal_map").addClass("active");
        $(".hero_mobile_table_head_36b").trigger("click");
        $(".hero_block_head_content_btns_item_36b").trigger("click");
    });

    $(".modal_map_switch_arrows_prev").click(function() {
        $(".modal_map").removeClass("active");
        $(".hero_mobile_table_head_36c").trigger("click");
        $(".hero_block_head_content_btns_item_36c").trigger("click");
    });

    $(".modal_map_switch_text_prev").click(function() {
        $(".modal_map").removeClass("active");
        $(".hero_mobile_table_head_36c").trigger("click");
        $(".hero_block_head_content_btns_item_36c").trigger("click");
    });

    $(".modal_map_switch_text_next").click(function() {
        $(".modal_map").addClass("active");
        $(".hero_mobile_table_head_36b").trigger("click");
        $(".hero_block_head_content_btns_item_36b").trigger("click");
    });

    $(".modal_map_close").click(function() {
        $(".back_modal").removeClass("active");
        $(".modal_map").removeClass("visible");
    });

    $(".back_modal").click(function() {
        $(".back_modal").removeClass("active");
        $(".modal_map").removeClass("visible");
        $(".modal_slider_one").removeClass("active");
        $(".modal_slider_two").removeClass("active");
        $(".modal_slider_three").removeClass("active");
        $(".modal_slider_four").removeClass("active");
    });

    $(".hero_block_content_text_btn").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_map").addClass("visible");
        if($(".hero_block_head_content_btns_item_36b").hasClass("active")) {
            $(".modal_map").addClass("active");
        } else {
            $(".modal_map").removeClass("active");
        }
    });

    $(".hero_mobile_map_button_content").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_map").addClass("visible");
        if($(".hero_mobile_table_head_36b").hasClass("active")) {
            $(".modal_map").addClass("active");
        } else {
            $(".modal_map").removeClass("active");
        }
    });

    $('.teleport_block_sliders_one').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
        dots: false
    });

    $('.teleport_block_sliders_two').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
        dots: false
    });

    $('.teleport_block_sliders_three').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
        dots: false
    });

    $('.teleport_block_sliders_four').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
        dots: false
    });

    $(".teleport_block_sliders img").each(function() {
        var width = $(this).parent().width();
        $(this).height(width);
    });



    $('.modal_slider_one_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        dots: false,
        prevArrow: $('.modal_slider_one_prev'),
        nextArrow: $('.modal_slider_one_next')
    });

    $('.modal_slider_two_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        dots: false,
        prevArrow: $('.modal_slider_two_prev'),
        nextArrow: $('.modal_slider_two_next')
    });

    $('.modal_slider_three_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        dots: false,
        prevArrow: $('.modal_slider_three_prev'),
        nextArrow: $('.modal_slider_three_next')
    });

    $('.modal_slider_four_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        dots: false,
        prevArrow: $('.modal_slider_four_prev'),
        nextArrow: $('.modal_slider_four_next')
    });

    $(".modal_slider_one_close").click(function() {
        $(".modal_slider_one").removeClass("active");
        $(".back_modal").removeClass("active");
    });

    $(".modal_slider_two_close").click(function() {
        $(".modal_slider_two").removeClass("active");
        $(".back_modal").removeClass("active");
    });

    $(".modal_slider_three_close").click(function() {
        $(".modal_slider_three").removeClass("active");
        $(".back_modal").removeClass("active");
    });

    $(".modal_slider_four_close").click(function() {
        $(".modal_slider_four").removeClass("active");
        $(".back_modal").removeClass("active");
    });

    $(".teleport_block_sliders_one").click(function() {
        $(".modal_slider_one").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".teleport_block_sliders_two").click(function() {
        $(".modal_slider_two").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".teleport_block_sliders_three").click(function() {
        $(".modal_slider_three").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".teleport_block_sliders_four").click(function() {
        $(".modal_slider_four").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".teleport_block_sliders_one .slick-slide").click(function() {
        var index = $(this).attr("data-slick-index");
        $('.modal_slider_one_content').slick('slickGoTo', index);
    });

    $(".teleport_block_sliders_two .slick-slide").click(function() {
        var index = $(this).attr("data-slick-index");
        $('.modal_slider_two_content').slick('slickGoTo', index);
    });

    $(".teleport_block_sliders_three .slick-slide").click(function() {
        var index = $(this).attr("data-slick-index");
        $('.modal_slider_three_content').slick('slickGoTo', index);
    });

    $(".teleport_block_sliders_four .slick-slide").click(function() {
        var index = $(this).attr("data-slick-index");
        $('.modal_slider_four_content').slick('slickGoTo', index);
    });

});