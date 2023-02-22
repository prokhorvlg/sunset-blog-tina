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
                {(wrapStyle.headerStyle === DialogHeaderStyle.cautionDiagonal) ?
                    <CautionDiagonalHeader wrapStyle={wrapStyle} />
                    : ""}

                <div className="dialog-content">
                    {content}
                </div>
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
        <div className="macintosh-header">
            <div className="macintosh-header-lines left">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="macintosh-header-title">
                <span>{wrapStyle.headerTitle}</span>
            </div>
            <div className="macintosh-header-lines right">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="macintosh-header-close"></div>
        </div>
    )
}

const CautionDiagonalHeader = ({
    wrapStyle
}) => {
    return (
        <div className="caution-diagonal-header">
            <div className="macintosh-header-lines left">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="macintosh-header-title">
                <span>{wrapStyle.headerTitle}</span>
            </div>
            <div className="macintosh-header-lines right">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="macintosh-header-close"></div>
        </div>
    )
}

export default DialogWrap