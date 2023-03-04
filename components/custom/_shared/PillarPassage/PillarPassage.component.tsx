import { ItemColor } from "../../../util/colors"
import DiagonalLinesBar from "../DiagonalLinesBar/DiagonalLinesBar.component"
import SideLightsBar, { CodeTextItem, LightColumnItem, VerticalItemType } from "../SideLightsBar.component"

interface PropTypes {
    data: PillarPassageData
}

export enum Alignment {
    Left = "left",
    Center = "center",
    Right = "right"
}

export interface PillarPassageData {
    id: string
    alignment: Alignment
    headerContent: JSX.Element
    bodyContent: JSX.Element
    colorHeader: string
    colorBody: string
}

const PillarPassage = ({
    data
}: PropTypes) => {
    const sideLightBarItems: (LightColumnItem | CodeTextItem)[] = [
        {
            type: VerticalItemType.LightColumnItem,
            position: "12%",
            colors: [
                ItemColor.LightOrange,
                ItemColor.DarkOrange
            ],
            count: 2
        },
        {
            type: VerticalItemType.LightColumnItem,
            position: "70%",
            colors: [
                ItemColor.LightOrange,
                ItemColor.LightOrange,
                ItemColor.LightOrange,
                ItemColor.DarkOrange,
            ],
            count: 4
        }
    ]

    return (
        <div className="pillar-passage side-lights-wrapper">
            <SideLightsBar verticalItems={sideLightBarItems} />
            <div className="pillar-wrapper side-lights-content">
                <div className="side-header diagonal-lines-container">
                    <div className="diagonal-rotate-wrapper">
                        <DiagonalLinesBar length={22} />
                    </div>
                    <span>Content Viewer</span>
                </div>
                <div className="main-content-container">
                    <div className="main-header">
                        {data.headerContent}
                    </div>
                    <div className="main-content">
                        {data.bodyContent}
                    </div>
                </div>
            </div>
            <SideLightsBar verticalItems={sideLightBarItems} />
        </div>
    )
}

export default PillarPassage