$(function()
{
    let transparencyVal = parseInt($("#transparency").val())
    let shvbVal = parseInt($("#shadow-vb").val())
    let bgBlurVal = $("#bg-blur").val()

    let transparency = transparencyVal.toString(16)
    let bgBlur = "blur(" + bgBlurVal + "px)"
    let border = $("#border").val()
    let hr = $("#hr").val()
    let vr = $("#vr").val()
    let shBlur = $("#shadow-blur").val()
    let shDist = $("#shadow-dist").val()
    let shvb = shvbVal.toString(16)

    let boxColour = $("#bg-colour").val()
    let borderColour = $("#border-colour").val()
    let shadowColour = $("#shadow-colour").val()
    var isInset = $("#inset").prop("checked")

    let boxBg = boxColour + transparency
    let boxBd = border + "px solid " + borderColour
    let boxSh = hr + "px " + vr + "px " + shBlur + "px " + shDist + "px " + shadowColour + shvb

    if(isInset)
    {
        boxSh += " inset"
    }

    var box = $("#box")

    box.css(
        {
            "backdrop-filter":bgBlur,
            "background-color":boxBg,
            "box-shadow":boxSh,
            "border":boxBd
        }
    )

    $(".toggle").on("click",function()
    {
        console.log("Hello");
        $(this).toggleClass("active-toggle")
    })

    $("select").on("input",function()
    {
        let selected = $(this).find("option:selected")
        let value = selected.val();

        if(value == "solid-colour")
        {
            $("#solid-colour-div").addClass("open-div");
            $("#wallpaper-div").removeClass("open-div");
        }

        else
        {
            $("#solid-colour-div").removeClass("open-div");
            $("#wallpaper-div").addClass("open-div");
        }
    })

    $("#colour-picker").on("input",function()
    {
        let colour = $(this).val()
        let bg = $("#sandbox")
        $("#sandbox").css("background-image","")
        bg.css("background-color",colour)
    })

    $(".wp-select").on("click",function()
    {
        let thisImg = $(this).css("background-image")
        $("#sandbox").css("background-image",thisImg)
    })

    $("input[type=range]").on("input",function()
    {
        let transparencyVal = parseInt($("#transparency").val())
        let shvbVal = parseInt($("#shadow-vb").val())
        let bgBlurVal = $("#bg-blur").val()

        let transparency = transparencyVal.toString(16)
        let bgBlur = "blur(" + bgBlurVal + "px)"
        let border = $("#border").val()
        let hr = $("#hr").val()
        let vr = $("#vr").val()
        let shBlur = $("#shadow-blur").val()
        let shDist = $("#shadow-dist").val()
        let shvb = shvbVal.toString(16)

        let boxColour = $("#bg-colour").val()
        let borderColour = $("#border-colour").val()
        let shadowColour = $("#shadow-colour").val()
        isInset = $("#inset").prop("checked")

        let boxBg = boxColour + transparency
        let boxBd = border + "px solid " + borderColour
        let boxSh = hr + "px " + vr + "px " + shBlur + "px " + shDist + "px " + shadowColour + shvb

        if(isInset)
        {
            boxSh += " inset"
        }

        var box = $("#box")

        box.css(
            {
                "backdrop-filter":bgBlur,
                "background-color":boxBg,
                "box-shadow":boxSh,
                "border":boxBd
            }
        )
    })

    $(".colourProps").on("input",function()
    {
        let transparencyVal = parseInt($("#transparency").val())
        let shvbVal = parseInt($("#shadow-vb").val())
        let bgBlurVal = $("#bg-blur").val()

        let transparency = transparencyVal.toString(16)
        let bgBlur = "blur(" + bgBlurVal + "px)"
        let border = $("#border").val()
        let hr = $("#hr").val()
        let vr = $("#vr").val()
        let shBlur = $("#shadow-blur").val()
        let shDist = $("#shadow-dist").val()
        let shvb = shvbVal.toString(16)

        let boxColour = $("#bg-colour").val()
        let borderColour = $("#border-colour").val()
        let shadowColour = $("#shadow-colour").val()
        isInset = $("#inset").prop("checked")

        let boxBg = boxColour + transparency
        let boxBd = border + "px solid " + borderColour
        let boxSh = hr + "px " + vr + "px " + shBlur + "px " + shDist + "px " + shadowColour + shvb

        if(isInset)
        {
            boxSh += " inset"
        }

        var box = $("#box")

        box.css(
            {
                "backdrop-filter":bgBlur,
                "background-color":boxBg,
                "box-shadow":boxSh,
                "border":boxBd
            }
        )
    })

    $("input[type=checkbox]").on("change",function()
    {
        let shvbVal = parseInt($("#shadow-vb").val())
        let hr = $("#hr").val()
        let vr = $("#vr").val()
        let shBlur = $("#shadow-blur").val()
        let shDist = $("#shadow-dist").val()
        let shvb = shvbVal.toString(16)
        let shadowColour = $("#shadow-colour").val()
        isInset = $("#inset").prop("checked")

        let boxSh = hr + "px " + vr + "px " + shBlur + "px " + shDist + "px " + shadowColour + shvb

        if(isInset)
        {
            boxSh += " inset"
        }

        var box = $("#box")

        box.css("box-shadow",boxSh)
    })

    $("#get").on("click",function()
    {
        var box = $("#box")
        
        let bgBlur = "backdrop-filter:" + box.css("backdrop-filter")
        let webkistBgBlur = "-webkit-backdrop-filter:" + box.css("backdrop-filter")
        let boxSh = "box-shadow:" + box.css("box-shadow")
        let webkistBoxSh = "-webkit-box-shadow:" + box.css("box-shadow")
        let boxBg = "background:" + box.css("background-color")
        let border = "border:" + box.css("border")

        let textarea = document.getElementsByTagName("textarea")

        textarea[0].innerHTML = 
            bgBlur + "\n" +
            webkistBgBlur + "\n" +
            boxSh + "\n" +
            webkistBoxSh + "\n" +
            boxBg + "\n" +
            border

        navigator.clipboard.writeText(textarea[0].innerHTML).then(() =>
        {
            textarea[0].innerHTML += "\n/*copied to clipboard*/"
        })
    }) 
})