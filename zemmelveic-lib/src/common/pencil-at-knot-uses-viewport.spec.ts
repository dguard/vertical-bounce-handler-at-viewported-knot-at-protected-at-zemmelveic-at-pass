import {Pencil, DraftFabrikk} from '@core-lib/js/viewported-knot-at-protected-knot/draft-compact'

function samplePencilUsesViewport() {
    let samplePencil = new Pencil()

    let draftFabrikk = new DraftFabrikk()
    let viewportPointerBelongings = draftFabrikk.constructViewport()

    samplePencil.useViewport(viewportPointerBelongings.atVerticalPosition, viewportPointerBelongings.atDistance, viewportPointerBelongings.atHorizontalPosition)

    // keep
    // follow @core-lib/pencil-draws-viewport.spec
}

function main() {
    samplePencilUsesViewport()
}

main()