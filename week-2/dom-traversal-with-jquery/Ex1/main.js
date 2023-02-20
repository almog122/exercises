$(".generator").on('click' , function(){
    let procId = $(this).closest('.computer').find('.processor').attr('id')

    let compDataIdArr = []

    compDataIdArr.push({cmp_id: $(this).closest('.computer').data().id})

    let busNum = $(this).closest('.computer').find('.BUS').text()

    console.log("Processor: " + procId)
    console.log("Computer’s data-id: " + compDataIdArr[0].cmp_id)
    console.log("BUS: " + busNum)
    
})


$(".validator").on('click' , function(){
    let genText =$(this).closest('.computer').children().find('.generator').text()

    let mbText =  $(this).closest('.computer').find('.MB').text()

    let qrText1 =  $(this).closest('.computer').find('.processor').children('.QR')[0].innerHTML

    let qrText2 =  $(this).closest('.computer').find('.processor').children('.QR')[1].innerHTML

    console.log("generator’s text: " + genText)
    console.log("MB: " + mbText)
    console.log("QRs: " + qrText1 + ", " + qrText2)
    
})