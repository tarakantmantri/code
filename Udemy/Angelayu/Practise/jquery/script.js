$("h1").addClass("big-titel margin-50")//set both classes to h1
$("h1").removeClass("margin-50")//Removes the class of Margin 50
$('button').text("Hello")//Set Hello to the button text
$('button').html("<h1>Hello<br>World")//Set the html insite the button
console.log($("img").attr("src"))//Gives the attribute value of img (Source)
$("a").addClass("big-titel margin-50")
$("a").attr("href", "https://www.yahoo.com")//Changes the Attribute to Yahoo
$("button").click(function () {
    $("button").toggleClass("margin-50")//Ads Event listner 
})
$("input").keypress(function (eve) {
    $("h1").text(eve.key)
})
$("h1").on("mouseover", () => {
    $("h1").toggleClass("purple")
})