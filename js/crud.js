var products = [];

function addData() {

    if (products == null) {
        products = [];
    }

    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var qunatity = document.getElementById("qunatity").value;
    var editno = document.getElementById("editno").value;

    if (editno) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].no == editno) {
                products[i].name = name;
                products[i].price = price;
                products[i].qunatity = qunatity;
                document.getElementById('submit').value = "Insert";
                document.getElementById("editno").value = "";
            }
        }
    }
    else {
        var pro = {
            name: name,
            price: price,
            qunatity: qunatity,
            no: Math.round(Math.random() * 1000),
        }
        products.push(pro);
    }
    localStorage.setItem('product', JSON.stringify(products));
    viewData();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("qunatity").value = "";

}

        function viewData() {
            var products = JSON.parse(localStorage.getItem('product'));

            var data = "";
            data = "<table border='1'><tr><td>Name</td><td>Price</td><td>Qunatity</td><td>Delete</td><td>Update</td></tr>"

            for (var i = 0; i < products.length; i++) {

                data += "<tr>"
                data += `<td>${products[i].name}</td>`;
                data += `<td>${products[i].price}</td>`;
                data += `<td>${products[i].qunatity}</td>`;
                data += `<td><a href="javascript:DeleteData(${products[i].no})">Delete</a></td>`;
                data += `<td><a href="javascript:UpdateData(${products[i].no})">Update</a></td>`;
                data += "</tr>"
            }
            data += "</table>";
            document.getElementById('ans').innerHTML = data;

        }
        viewData();

        function DeleteData(no) {

            var products = JSON.parse(localStorage.getItem('product'));

            for (var i = 0; i < products.length; i++) {

                if (products[i].no == no) {

                    products.splice(i, 1);
                }
            }

            localStorage.setItem('product', JSON.stringify(products));
            viewData();
        }

        function UpdateData(no) {

            var updata = localStorage.getItem('product');
            var udata = JSON.parse(updata);

            for (var i = 0; i < udata.length; i++) {

                if (udata[i].no == no) {

                    document.getElementById('name').value = udata[i].name;
                    document.getElementById('price').value = udata[i].price;
                    document.getElementById('qunatity').value = udata[i].qunatity;
                    document.getElementById('editno').value = no;
                    document.getElementById('submit').value = "Update";
                }
            }
        }