var today = document.querySelector("#currentday")

currentDay.textContent = moment().format('dddd, MMMM Do YYYY')

$("#save-btn1").on("click", () => localStorage.text9 = $(".text9").val())
$("#save-btn2").on("click", () => localStorage.text10 = $(".text10").val())
$("#save-btn3").on("click", () => localStorage.text11 = $(".text11").val())
$("#save-btn4").on("click", () => localStorage.text12 = $(".text12").val())
$("#save-btn5").on("click", () => localStorage.text13 = $(".text13").val())
$("#save-btn6").on("click", () => localStorage.text14 = $(".text14").val())
$("#save-btn7").on("click", () => localStorage.text15 = $(".text15").val())
$("#save-btn8").on("click", () => localStorage.text16 = $(".text16").val())
$("#save-btn9").on("click", () => localStorage.text17 = $(".text17").val())

function save() {
    for (let i = 9; i < 18; i++)
        $(".text" + i).val(localStorage.getItem("text" + i))
}
save()


function timecolor() {
    for (var i = 9; i < 18; i++) {
        var time = i
        if (time == moment().format('H')) {
            $("#hour" + i).addClass("present").removeClass("past",)
        }
        if (time < moment().format('H')) {
            $("#hour" + i).addClass("past")
        }
        if (time > moment().format('H')) {
            $("#hour" + i).addClass("future")
        }
    }
}
timecolor();


