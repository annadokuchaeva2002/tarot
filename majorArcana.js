function onShowHideItem(className)
{
    var items = document.getElementsByClassName(className);
    for (i = 0; i < items.length; i++) {

        var item = items[i]
        if (item.style.display === "block") {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    }

}
