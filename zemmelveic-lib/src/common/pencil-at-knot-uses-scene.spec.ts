import {Pencil} from '@core-lib/js/viewported-knot-at-protected-knot/draft-compact'
import {SceneWalkingAroundLabirintAtStart} from '@core-lib/js/viewported-knot-at-scene'

function samplePencilUsesScene() {
    let samplePencil = new Pencil()

    let sceneWalkingAroundLabirintAtStart = new SceneWalkingAroundLabirintAtStart()

    samplePencil.useScene(sceneWalkingAroundLabirintAtStart)

    // keep
    // follow @core-lib/pencil-draws-viewport.spec
}


function main() {
    samplePencilUsesScene()
}

main()