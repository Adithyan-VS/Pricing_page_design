function reset() {
    location.reload() //reloads page
}

function showbtn(button) {
    document.getElementById(button).style.display = 'block'; //show button on hover card
}

function hidebtn(button) {
    document.getElementById(button).style.display = 'none'; //hidebutton on mouseoutevent
}

//function for card hiding and altering data inside card
function moveButton(elem, cd, cd1, column, cardname) {
    //selecting id based on card selected for alterations
    if (cardname == "card") {
        var body = "mainbody";
        var title = "title"
    } else if (cardname == "card1") {
        var body = "mainbody1";
        var title = "title1"
    } else {
        var body = "mainbody2";
        var title = "title2"
    }
    var initposrt = document.getElementById(cd1).offsetLeft
        //hide the sentence below price in card
    document.getElementById(title).style.visibility = "hidden";
    //copy of card data on variable carddata

    var carddata = document.getElementById(cardname).innerHTML
    document.getElementById(cardname).style.zIndex = 10;
    document.getElementById(cd).style.color = 'gray';
    document.getElementById(cd1).style.color = 'gray';


    //for animating card 1 and 3 
    if (cd == "column" && cd1 == "col3" && cardname == "card1") {
        //get left position of selected card
        var leftpos = document.getElementById(cardname).offsetLeft;
        var initposleft = document.getElementById(cd).offsetLeft;

        $(document).ready(function() {
            //animates  card 1
            $("#card").animate({
                left: leftpos - initposleft - 12 + "px",
                opacity: "0%"
            }, 80);

            //animates card 3
            $("#card2").animate({
                left: leftpos - initposrt - 12 + "px",
                opacity: "0%"
            }, 80);
        });
    }
    // for animating card 2 and 3
    if (cd == "col2" && cd1 == "col3" && cardname == "card") {
        //get left position of selected card
        var leftpos = document.getElementById(cardname).offsetLeft
        var initposleft = document.getElementById(cd).offsetLeft

        $(document).ready(function() {
            //animates  card 2
            $("#card1").animate({
                left: leftpos - initposleft - 12 + "px",
                opacity: "0%"
            }, 80);

            //animates  card 3
            $("#card2").animate({
                left: leftpos - initposrt - 12 + "px",
                opacity: "0%"
            }, 80);
        });
    }
    // for animating card 1 and 2
    if (cd == "column" && cd1 == "col2" && cardname == "card2") {
        //get left position of selected card
        var leftpos = document.getElementById(cardname).offsetLeft
        var initposleft = document.getElementById(cd).offsetLeft

        $(document).ready(function() {
            //animates  card 1
            $("#card").animate({
                left: leftpos - initposleft - 12 + "px",
                opacity: "0%"
            }, 80);

            //animates  card 2
            $("#card1").animate({
                left: leftpos - initposrt - 12 + "px",
                opacity: "0%"
            }, 80);
        });
    }

    //loading spinner for 1 second

    document.getElementById(body).innerHTML = `<div class="card-body d-flex mt-5 mb-5 justify-content-center" style="height:100%;">
    <div class="spinner-border" role="status" >
      <span class="sr-only">Loading...</span>
    </div>
  </div>`;


    //function myfun loads after 1.2second
    setTimeout(function myfun() {
        document.getElementById(body).innerHTML = `<div class="card-body d-flex mt-5 mb-5 justify-content-center" style="height:100%;">
    <div class="spinner-border" role="status" >
      <span class="sr-only">Loading...</span>
    </div>
  </div>`;
        //change card 2 position
        if (cardname == "card1") {
            $("#card1").animate({
                left: "400px",
                opacity: "100%"
            }, 80);
        }
        //change card 1 position
        if (cardname == "card") {
            $("#card").animate({
                left: "800px",
                opacity: "100%"
            }, 80);
        }

        setTimeout(function myfun2() {
                document.getElementById(cardname).innerHTML = carddata;
                //hide text info above price
                document.getElementById(title).style.display = "none";
                document.body.style.backgroundColor = '#f3f9fc';
                document.getElementById('navbar').classList.remove('bg-white');
                document.getElementById('navbar').style.backgroundColor = '#f3f9fc';
                //changing card div position to another div =>#container

                if ($(elem).parent().attr("id") == column) {
                    $(elem).detach().appendTo('#container');

                } else {
                    $(elem).detach().appendTo('#container');
                    console.log(true)
                }
                //reset card2 position
                if (cardname == "card1") {
                    $("#card1").animate({
                        left: "0px",
                        opacity: "100%"
                    }, 80);
                }
                //reset card1 position
                if (cardname == "card") {
                    $("#card").animate({
                        left: "0px",
                        opacity: "100%"
                    }, 80);
                }
                //check columnid and alter data accordingly
                if (column == 'column') {
                    //removing class mx-5 from id topcard
                    document.getElementById('topcard').classList.remove('mx-5');
                    //altering html data present in #topcard
                    document.getElementById('topcard').innerHTML = `<h4><b class="h1" style="font-weight: 750;">Basic</b></h4>
                <h5 class="card-title text-dark">
                    <p style="font-size:15px;">212 South Broadway Street, Apr 23 New York, NY 10012</p>
                            <table class="table table-borderless font-weight-bold p-0 h6">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Household Belongings</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px; ">$ 20,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Electronics Coverage</td>
                        <td style="text-align: right; padding-left: 85px;padding:0px;">$ 2,000</td>
                    </tr>
                    </tbody>
                    </table>
                </h5>`
                        //hide price detail section
                    document.getElementById('price1').style.display = 'none';
                    //changing value of table in #card1table
                    document.getElementById('card1table').innerHTML = `<table class="table table-borderless font-weight-bold p-0">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Household Belongings</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px; ">$ 20,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Electronics Coverage</td>
                        <td style="text-align: right; padding-left: 85px;padding:0px;">$ 2,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Valuables Coverage</td>
                        <td style="text-align: right;color: gray;padding-left: 85px;padding:0px;">----</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Liability</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$200,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Loss of Use</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$6,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Medical Payment</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$1,000</td>
                    </tr>
                </tbody>
            </table><hr>
            <table class="table table-borderless font-weight-bold p-0">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Landlord</td>
                        <td style="text-align: right;padding-left: 85px;color: gray;padding:0px; ">----</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Other People</td>
                        <td style="text-align: right; padding-left: 85px;color: gray;padding:0px;">----</td>
                    </tr>
                    </tbody>
                    </table>
                    `;
                    //changing button data and values
                    document.getElementById('btn1').innerHTML = `<div class="row justify-content-center w-auto">
                    <div class="col-2 mx-0 w-auto text-white pt-1">$</div>
                    <div class="col-2 p-0 mx-0 w-auto h2">12</div>
                    <div class="col-2  mx-0 w-auto p-0 pt-2 text-white">.55 <span>/MO</span></div>
                    <div class="w-auto h4 pt-2 fw-bold ">Pay Now </div> 
                </div>`;
                    document.getElementById('btn1').classList.add('d-flex', 'justify-content-center');
                }
                if (column == 'col2') {
                    document.getElementById('topcard').classList.remove('mx-5');
                    document.getElementById('topcard').innerHTML = `<h4><b class="h1" style="font-weight: 750;">Essential</b></h4>
                <h5 class="card-title text-dark">
                    <p style="font-size:15px;">212 South Broadway Street, Apr 23 New York, NY 10012</p>
                            <table class="table table-borderless font-weight-bold p-0 h6">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Household Belongings</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px; ">$ 20,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Electronics Coverage</td>
                        <td style="text-align: right; padding-left: 85px;padding:0px;">$ 2,000</td>
                    </tr>
                    </tbody>
                    </table>
                </h5>`
                    document.getElementById('price2').style.display = 'none';
                    document.getElementById('card2table').innerHTML = `<table class="table table-borderless font-weight-bold p-0">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Household Belongings</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px; ">$ 20,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Electronics Coverage</td>
                        <td style="text-align: right; padding-left: 85px;padding:0px;">$ 2,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Valuables Coverage</td>
                        <td style="text-align: right;color: gray;padding-left: 85px;padding:0px;">----</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Liability</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$200,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Loss of Use</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$6,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Medical Payment</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$1,000</td>
                    </tr>
                </tbody>
            </table><hr>
            <table class="table table-borderless font-weight-bold p-0">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Landlord</td>
                        <td style="text-align: right;padding-left: 85px;color: gray;padding:0px; ">----</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Other People</td>
                        <td style="text-align: right; padding-left: 85px;color: gray;padding:0px;">----</td>
                    </tr>
                    </tbody>
                    </table>
                    `
                    document.getElementById('btn2').innerHTML = `<div class="row justify-content-center w-auto">
                    <div class="col-2 mx-0 w-auto text-white pt-1">$</div>
                    <div class="col-2 p-0 mx-0 w-auto h2">18</div>
                    <div class="col-2  mx-0 w-auto p-0 pt-2 text-white">.55 <span>/MO</span></div>
                    <div class="w-auto h4 pt-2 fw-bold ">Pay Now </div> 
                </div>`;
                    document.getElementById('btn2').classList.add('d-flex', 'justify-content-center');
                }
                //edits card2 button data
                if (column == 'col3') {
                    document.getElementById('topcard').classList.remove('mx-5');
                    document.getElementById('topcard').innerHTML = `<h4><b class="h1" style="font-weight: 750;">Premium</b></h4>
                <h5 class="card-title text-dark">
                    <p style="font-size:15px;">212 South Broadway Street, Apr 23 New York, NY 10012</p>
                            <table class="table table-borderless font-weight-bold p-0 h6">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Household Belongings</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px; ">$ 20,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Electronics Coverage</td>
                        <td style="text-align: right; padding-left: 85px;padding:0px;">$ 2,000</td>
                    </tr>
                    </tbody>
                    </table>
                </h5>`
                    document.getElementById('price3').style.display = 'none';
                    document.getElementById('card3table').innerHTML = `<table class="table table-borderless font-weight-bold p-0">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Household Belongings</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px; ">$ 20,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Electronics Coverage</td>
                        <td style="text-align: right; padding-left: 85px;padding:0px;">$ 2,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Valuables Coverage</td>
                        <td style="text-align: right;color: gray;padding-left: 85px;padding:0px;">----</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Liability</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$200,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Loss of Use</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$6,000</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Medical Payment</td>
                        <td style="text-align: right;padding-left: 85px;padding:0px;">$1,000</td>
                    </tr>
                </tbody>
            </table><hr>
            <table class="table table-borderless font-weight-bold p-0">
                <tbody style="font-weight: bold; ">
                    <tr>
                        <td style="color: gray;padding:0px;">Landlord</td>
                        <td style="text-align: right;padding-left: 85px;color: gray;padding:0px; ">----</td>
                    </tr>
                    <tr>
                        <td style="color: gray;padding:0px;">Other People</td>
                        <td style="text-align: right; padding-left: 85px;color: gray;padding:0px;">----</td>
                    </tr>
                    </tbody>
                    </table>
                    `
                    document.getElementById('btn3').innerHTML = `<div class="row justify-content-center w-auto">
                    <div class="col-2 mx-0 w-auto text-white pt-1">$</div>
                    <div class="col-2 p-0 mx-0 w-auto h2">33</div>
                    <div class="col-2  mx-0 w-auto p-0 pt-2 text-white">.55 <span>/MO</span></div>
                    <div class="w-auto h4 pt-2 fw-bold ">Pay Now </div> 
                </div>`;
                    document.getElementById('btn3').classList.add('d-flex', 'justify-content-center');
                }
                document.getElementById('hiden').style.display = 'block';
                document.getElementById('picktxt').style.display = 'none';
                //hide remaining cards except selected
                document.getElementById(cd).style.display = 'none';
                document.getElementById(cd1).style.display = 'none';
                var element = document.getElementById(column);
                element.classList.add('d-flex', 'justify-content-center');
            }, 1200) //timer 1200ms for loading animation
    }, 1200)

    //replace loading animation with carddata variable

}