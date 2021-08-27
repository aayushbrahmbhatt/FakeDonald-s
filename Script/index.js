for (var i = 0; i < document.querySelectorAll(".like").length;i++) {
    document.querySelectorAll(".like")[i].addEventListener("click",function() {
        myfunc(this.classList)
    });
}



function myfunc(list) {
    for (var i = 0; i < list.length;i++) {
        if(list[i] == "clicked")
        {
            list.remove("clicked");
            /*
            switch(list[list.length - 1])
            {
                case "A":
                    break; 
            }
            */
            document.querySelector("." + list[list.length - 1]).innerHTML = "<i class='fas fa-heart-broken'></i> Like";
            return;
        }
    }
    list.add("clicked");
    document.querySelector("." + list[list.length - 2]).innerHTML = "<i class='fas fa-heart'></i> Liked";
}