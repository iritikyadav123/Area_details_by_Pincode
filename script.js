let input = document.getElementById("inputBox")
let result = document.getElementById("result")
function cls() {
    result.innerHTML = " ";
    input.value = " ";
}
let h2 = document.createElement('h2');
function search() {
    let a = input.value;
    a =  a.length;
    console.log(a);
    if(a==6) {
        a = input.value;
            let url = "https://api.postalpincode.in/pincode/"+ a;
            let p = fetch(url);
            p.then((response)=>{
                return response.json();
            }).then((value)=>{
                console.log(value);
                ihtml = "";
                for(item in value) {
                     item += `
                    //  <h2>Block = ${value[item].PostOffice[0].Block}<h2>
                     <h2>BranchType = ${value[item].PostOffice[0].BranchType}<h2>
                     <h2>Circle = ${value[item].PostOffice[0].Circle}<h2>
                     <h2>Country = ${value[item].PostOffice[0].Country}<h2>
                     <h2>DeliveryStatus = ${value[item].PostOffice[0].DeliveryStatus}<h2>
                     <h2>District = ${value[item].PostOffice[0].District}<h2>
                     <h2>Division = ${value[item].PostOffice[0].Division}<h2>
                     <h2>Name = ${value[item].PostOffice[0].Name}<h2>
                     <h2>PinCode = ${value[item].PostOffice[0].PinCode}<h2>
                     <h2>Region = ${value[item].PostOffice[0].Region}<h2>
                     <h2>State = ${value[item].PostOffice[0].State}<h2>


                     `
                }
                result.innerHTML = item;
            }).catch((error)=>{
                result.innerHTML = "Enter another valid or another Pincode";

            })

    }
    else {
        h2.innerHTML = "Invalid Pincode";
        result.innerHTML = h2.innerText;
        input.value = "";
         setTimeout(()=>{
            clear();
         },2000);
    }

}
function clear() {
    result.innerText = "";
}
