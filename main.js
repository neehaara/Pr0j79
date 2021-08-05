menu_list_array = ["Pepperoni Pizza", "Cheese Burst", "Paneer Pizza", "Veg Mushroom Pizza"];
console.log(menu_list_array[0]);

function getmenu(){
var htmldata="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
    menu_list_array.sort();
        htmldata=""
        imgtags='<img  src="peeza.jpg" id="peezaimg"  width="50">'
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
         console.log("display_addedmenu");
         console.log(document.getElementById("display_addedmenu").innerHTML)
   
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
