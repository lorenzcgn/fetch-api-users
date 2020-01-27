fetch('https://jsonplaceholder.typicode.com/users').then(
            function(result) {
                return result.json()
        }
        ).then(
            function(j){
                var $ul = document.getElementById("Utenti")
                    console.log(j)
                for (i=0;i<j.length; i++){
                    var el = document.createElement("li")
                    //var myDiv = document.createElement("div")
                    //var button = document.createElement("button")
                    var text = document.createElement("p")
                    //button.innerHTML = j[i].id + " | " + j[i].name
                    text.innerHTML = "<Button onclick="+"show("+j[i].id+")" +" class=' btn blacck center'>"+j[i].id+") "+j[i].name+"</Button><div style="+"'display:none'"+" "+"id="+j[i].id+">"+j[i].id + " | " + j[i].name+ " | " + j[i].username+ " | " + j[i].email+ " | " + j[i].address.street+ " | " + j[i].address.suite+ " | " + j[i].address.city+ " | " + j[i].address.zipcode+ " | " + j[i].address.geo.lat+ " | " + j[i].address.geo.lng+"</div>"
                    el.className="li collection-item"
                    //button.className="button1"
                    text.className="testo"
                    //button.setAttribute("onclick","myFunction()")
                    //myDiv.className="myDiv"
                    $ul.appendChild(el)
                    //el.appendChild(button)
                    //el.appendChild(myDiv)
                    el.append(text)
                }
            }
        );

        $(document).ready(function() {
          $("#nascondi").click(function() {
            $("#Utenti").toggle();
          });
        });

        /*$(document).ready(function() {
          $("#button").click(function() {
            console.log("ciao")
            $("#myDiv").toggle();
          });
        });*/
        function show(i){
          //console.log(i)
          var x = document.getElementById(i);
              if (x.style.display === "none") {
                  x.style.display = "block";
              } else {
                  x.style.display = "none";
              }
      }
      
      
        
        
        function myFunction() {
          // Declare variables
          var input, filter, ul, li, a, i, txtValue;
          input = document.getElementById('myInput');
          filter = input.value.toUpperCase();
          ul = document.getElementById("Utenti");
          li = ul.getElementsByTagName('li');
        
          for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("p")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }
        
