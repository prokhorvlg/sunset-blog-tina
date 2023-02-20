// Template component for content to be wrapped in a dialog-style border.
// TODO: Add hover push down for image
// TODO support a gradient border?? ehh....

export enum DialogHeaderStyle {
    none,
    macintoshStraight,
    cautionDiagonal
}

export interface DialogWrapStyle {
    headerStyle?: DialogHeaderStyle
    headerTitle?: string
    hasCloseButton?: boolean
    hasHover?: boolean
}

interface PropTypes {
    content: any,
    wrapStyle: DialogWrapStyle
}

const DialogWrap = ({
    content,
    wrapStyle
}: PropTypes) => {
    return (
        <div className={`dialog-wrap ${wrapStyle.hasHover ? 'hover' : ''}`}>
            <div className="dialog-wrap-slot">
                {(wrapStyle.headerStyle === DialogHeaderStyle.macintoshStraight) ?
                    <MacintoshStraightHeader wrapStyle={wrapStyle} />
                    : ""}

                {content}
            </div>
            <div className="border right"></div>
            <div className="border bottom"></div>
        </div>
    )
}

const MacintoshStraightHeader = ({
    wrapStyle
}) => {
    return (
        <div>{wrapStyle.headerTitle}</div>
    )
}

export default DialogWrap