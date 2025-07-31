let lists = document.getElementsByClassName('item');
let leftBox = document.getElementById("item-list");
let RightBox = document.getElementById("wish-list");

for(list of lists){
    list.addEventListener('dragstart', function (e){
        let selected = e.target;
    })
    list.addEventListener('dragover', function (e){
        e.preventDefault();
    })
    list.addEventListener('drop', function (e){
        RightBox.append(selected)
        selected = null;
    })
}