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
    //copy of card data on variable carddata
    var carddata = document.getElementById(cardname).innerHTML
    document.getElementById(cd).style.color = 'lightgray';
    document.getElementById(cd1).style.color = 'lightgray';

    //loading animation for 1 second
    document.getElementById(cardname).innerHTML = `<div class="d-flex mt-5 mb-5 justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>`;

    //function loads after 1second
    setTimeout(function myfun() {
            //replace loading animation with carddata variable
            document.getElementById(cardname).innerHTML = carddata;
            document.body.style.backgroundColor = '#F8F9FA';
            document.getElementById('navbar').classList.remove('bg-white');

            document.getElementById('navbar').style.backgroundColor = '#F8F9FA'
                //changing card div position to another div =>#container
            if ($(elem).parent().attr("id") == column) {
                $(elem).detach().appendTo('#container');
                console.log(false)
            } else {
                $(elem).detach().appendTo('#container');
                console.log(true)
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
                <div class="col-2 mx-0 w-auto text-white">$</div>
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
                <div class="col-2 mx-0 w-auto text-white">$</div>
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
                <div class="col-2 mx-0 w-auto text-white">$</div>
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
        }, 1000) //timer 1000ms for loading animation
}