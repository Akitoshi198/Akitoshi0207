'use strict';

$(function(){

    $('#date').pickadate();

    $('#time').pickatime({
        format: 'HH:i',
        interval: 30,
        min: [10,00],
        max: [20,00]
    });

    $('#submit').click(onClickSubmit);

    function onClickSubmit(){
        $('#submit_result').remove();
        const date = $('#date').val();
        const time = $('#time').val();

        if(date!='' && time !='') {
            $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p><strong>'+date+time+'〜</strong><br>予約受け付けました。</p></div>');            
        } else {
            $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>予約日・予約時間を選択してください。</p></div>');            
        }
    }
});