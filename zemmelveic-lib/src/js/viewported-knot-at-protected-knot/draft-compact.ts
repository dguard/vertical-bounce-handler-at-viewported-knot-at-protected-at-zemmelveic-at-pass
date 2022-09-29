
// keep @core-lib/js/viewported-knot-at-protected-knot
// keep

// keep
// use #vertical-bounce-handler-in-relative-size
// window['JSON'] = JSON

// use #cosyinka-game
let safeLib = module["JSON"]

function Pencil() {
    let that = this

    let chosenScene

    let atViewport

    that.sampleQueueKnot = {}

    that.queueKnot = []

    that.provideScene = function () {
        // keep
        return chosenScene
    }

    that.putKnotConnectedToBottomStatement = function (knotInstance) {
        that.queueKnot.push(knotInstance)
    }

    let takeOne = function (list) {
        return list[0]
    }

    that.rememberSample = function (scene, knotInstance) {
        that.sampleQueueKnot[scene].push(knotInstance)
    }

    that.constructKnot = function (/* providedSample */) {
        // keep !
        return takeOne(
            that.sampleQueueKnot[chosenScene].splice(that.sampleQueueKnot[chosenScene].length-1, 1)
        )
    }

    that.useViewport = function (viewportAtVerticalPosition, viewportAtDistance, viewportAtHorizontalPosition) {
        // keep
        let localViewport = {
            atVerticalPosition: viewportAtVerticalPosition,
            atDistance: viewportAtDistance,
            atHorizontalPosition: viewportAtHorizontalPosition
        }

        atViewport = safeLib.parse(safeLib.stringify(localViewport))
    }

    that.useScene = function (scene) {
        chosenScene = scene
    }
}

// use #vertical-bounce-handler-in-relative-size
// thanks, MAN, i know !
// window['Pencil'] = Pencil

module.exports.Pencil = Pencil

// keep

function DraftFabrikk() {
    let that = this

    that.connectKnotToBottomStatement = function (knotInstance, bottomStatement) {
        // keep bottomStatement.connectTo(bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongings.y, knotInstance.pointerBelongings.x, knotInstance.pointerBelongings.z), knotInstance)
        // are you reading from left to right?

        bottomStatement.connectTo(
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtTopLeft.y, knotInstance.pointerBelongingsAtTopLeft.x, knotInstance.pointerBelongingsAtTopLeft.z),
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtBottomLeft.y, knotInstance.pointerBelongingsAtBottomLeft.x, knotInstance.pointerBelongingsAtBottomLeft.z),
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtRightBottom.y, knotInstance.pointerBelongingsAtRightBottom.x, knotInstance.pointerBelongingsAtRightBottom.z),
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtRightTop.y, knotInstance.pointerBelongingsAtRightTop.x, knotInstance.pointerBelongingsAtRightTop.z),
            knotInstance
        )
    }

    that.constructViewport = function () {
        let viewportPointerBelongingsAtVerticalPosition
        let viewportPointerBelongingAtDistance
        let viewportPointerBelongingAtHorizontalPosition

        let localViewportPointerBelongings = {
            atVerticalPosition: viewportPointerBelongingsAtVerticalPosition,
            atDistance: viewportPointerBelongingAtDistance,
            atHorizontalPosition: viewportPointerBelongingAtHorizontalPosition
        }
        // keep

        return localViewportPointerBelongings
    }
}

// use #vertical-bounce-handler-in-relative-size
// !
// window['DraftFabrikk'] = DraftFabrikk

module.exports.DraftFabrikk = DraftFabrikk
