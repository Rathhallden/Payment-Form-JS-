let show = document.getElementById('show').onclick = () => {
    document.getElementById('cashblock').style.display = "block"
}
let hide = document.getElementById('hide').onclick = () => {
    document.getElementById('cashblock').style.display = "none"
}
let unitprice = document.getElementById('uprice');
let qty = document.getElementById('qty');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let history = document.getElementById('history');
let item = document.getElementById('item');
let index = 1;
let pay = document.getElementById('pay').onclick = () => {
    if (unitprice.value == "")
        document.getElementById('eruprice').innerHTML = "Empty Field";
    else {
        if (isNaN(unitprice.value))
            document.getElementById('eruprice').innerHTML = "Not a Number";
        else
            document.getElementById('eruprice').innerHTML = null;
    }
    if (qty.value == "")
        document.getElementById('erqty').innerHTML = "Empty Field";
    else {
        if (isNaN(qty.value))
            document.getElementById('erqty').innerHTML = "Not a Number";
        else
            document.getElementById('erqty').innerHTML = null;
    }
    if (isNaN(discount.value))
        document.getElementById('erdiscount').innerHTML = "Not a Number";
    else
        document.getElementById('erdiscount').innerHTML = null;

    if (unitprice.value != "" && qty.value != "") {
        if (isNaN(unitprice.value) || isNaN(qty.value) || isNaN(discount.value)) {
            return
        }
        if (discount.value != "") {
            let caltotal = (Number(unitprice.value) * Number(qty.value)) - (Number(unitprice.value) * Number(qty.value) * Number(discount.value) / 100)
            total.value = `${caltotal.toFixed(2)} $`;
            history.value += index + "\t" + item.value + "\t" + unitprice.value + "\t" + qty.value + "\t" + discount.value + `\t${caltotal.toFixed(2)} $\n`
            index++;
        } else {
            let caltotal = Number(unitprice.value) * Number(qty.value);
            total.value = `${caltotal.toFixed(2)} $`;
            history.value += index + "\t" + item.value + "\t" + unitprice.value + "\t" + qty.value + "\t" + discount.value + `\t${caltotal.toFixed(2)} $\n`
            index++;
        }


    }
}