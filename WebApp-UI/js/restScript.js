/**
 * Created by Shweta on 10/4/2015.
 */

(function () {

    $(document).ready(function () {
        var diningExperience1 = document.getElementById("diningExperience1");
        var diningExperience2 = document.getElementById("diningExperience2");
        var mainbody = document.getElementById("mainbody");
        var tablesBooked = document.getElementById("tablesBooked");
        var tableCount = 2767;

        $('#diningExperience1').hide().fadeIn('2500');
        $('#diningExperience1').html("Reserve").fadeIn('slow');

        $('#diningExperience2').hide().fadeIn('20000');
        $('#diningExperience2').hide().html("your dining experience").fadeIn('slow');

        $("#tablesBooked").html(tableCount);


        function myTimer() {

            tableCount = tableCount + 1;
            $("#tablesBooked").html(tableCount);
        }


    });


})();


