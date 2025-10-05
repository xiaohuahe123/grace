input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 107), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Silly)
})
