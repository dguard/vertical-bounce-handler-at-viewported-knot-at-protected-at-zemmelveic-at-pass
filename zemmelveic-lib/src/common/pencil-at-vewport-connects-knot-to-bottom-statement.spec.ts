import {Pencil, DraftFabrikk} from '@core-lib/js/viewported-knot-at-protected-knot/draft-compact'
import {SceneWalkingAroundLabirintAtStart, KnotLabirint} from '@core-lib/js/viewported-knot-at-scene'

function samplePencilConnectsKnotToBottomStatement() {
    let samplePencil = new Pencil()
    let sceneWalkingAroundLabirintAtStart = new SceneWalkingAroundLabirintAtStart()

    let draftFabrikk = new DraftFabrikk()

    // keep
    samplePencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotLabirint())

    samplePencil.useScene(sceneWalkingAroundLabirintAtStart)

    // keep
    let bottomStatement = draftFabrikk.constructBottomStatement()
    let knot1 = samplePencil.constructKnot()

    draftFabrikk.connectKnotToBottomStatement(knot1, bottomStatement)

    // keep
    // samplePencil.connectKnotToBottomStatement()

    // keep ! use bottom-statement

    samplePencil.provideScene().putKnotConnectedToBottomStatement(knot1)

    // keep
    // follow @core-lib/pencil-draws-viewport.spec
}

function main() {
    samplePencilConnectsKnotToBottomStatement()
}

main()