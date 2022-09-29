
// keep !
// move pointer belongings at clock using #descending-from-the-sun way
// keep followed invariant
function samplePencilDrawsViewportEnsureViewportHasPositionFarAtLeftToKnot() {
    // keep
}
function samplePencilDrawsViewportEnsureViewportHasPositionEnoughFarAtLeftToKnot() {
    // keep
}

function samplePencilDrawsViewportEnsureViewportHasPositionKnotEnoughFarAtLeftToKnot() {
    // keep
}

function samplePencilDrawsViewportEnsureToPassThroughCases() {
    // keep
    samplePencilDrawsViewportEnsureViewportHasPositionFarAtLeftToKnot()

    samplePencilDrawsViewportEnsureViewportHasPositionEnoughFarAtLeftToKnot()
    samplePencilDrawsViewportEnsureViewportHasPositionKnotEnoughFarAtLeftToKnot()

}

function main() {
    samplePencilDrawsViewportEnsureToPassThroughCases()
}