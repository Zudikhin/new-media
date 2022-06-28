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

});