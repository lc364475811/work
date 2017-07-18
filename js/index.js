/**
 * Created by Administrator on 0013 2017-07-13.
 */
$(function () {
    var json = [{
        hotelImg: '',
        name: '一季酒店',
        money: '￥2500',
        address: '威海路100号'
    }, {
        name: '二季酒店',
        money: '￥2500',
        address: '威海路200号'
    }, {
        name: '三季酒店',
        money: '￥2500',
        address: '威海路300号'
    }, {
        name: '四季酒店',
        money: '￥2500',
        address: '威海路400号'
    }
    ]


    var hotel = document.getElementsByTagName('hotel-list');
    var p = document.getElementById('p');
    var length = json.length;
    var str = "";
    for (var i = 0; i < length; i++) {

        for (var j = 0; j < 1; j++) {
            str += '<div class="hotel-details">' +'<img  class="hotelImg" src="" alt=""/>'+
                '<p id="name" class="name" style="font-size: 2rem;color: #000">' + json[i].name + '</p>' +
                '<p id="money" class="money" style="font-weight: 600; font-size: 1.6rem"><img src="images/u1218.png" alt=""/>' + ' &nbsp;<span>' + json[i].money + '</span></p>' +

                '<p id="address" class="address" style="margin-bottom:10px">' + json[i].address + '</p>' +
                '</div>'
            p.innerHTML = str;
        }
        $("hotel-list").append(p)
    }


    $('.hotel-list').click(function () {
        window.location.href = "http://www.baidu.com";
    })

    $('#region').click(function () {
        $('#modal').toggle()
    })

    for (i = 0; i < 4; i++) {
        $('ul').append('<li class="modal-li">北京</li>')
    }
})

