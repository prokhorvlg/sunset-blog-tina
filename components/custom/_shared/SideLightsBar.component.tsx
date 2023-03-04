import { Parallax } from "react-scroll-parallax"
import { ItemColor } from "../../util/colors"

interface PropTypes {
    verticalItems: VerticalItem[]
}

export enum VerticalItemType {
    LightColumnItem,
    CodeTextItem
}

export interface VerticalItem {
    type: VerticalItemType
    position: string
    colors: ItemColor[]
}

export interface LightColumnItem extends VerticalItem {
    count: number
}

export interface CodeTextItem extends VerticalItem {
    text: string
}

const SideLightsBar = ({
    verticalItems
}: PropTypes) => {
    return (
        <Parallax speed={20} className="side-lights-bar">
            {verticalItems.map((verticalItem) => {
                const positionStyle = {
                    top: verticalItem.position
                }
                if (verticalItem.type === VerticalItemType.LightColumnItem) {
                    return <LightColumnItem verticalItem={verticalItem as LightColumnItem} positionStyle={positionStyle} />
                }
                else if (verticalItem.type === VerticalItemType.CodeTextItem) {
                    return <CodeTextItem verticalItem={verticalItem as CodeTextItem} positionStyle={positionStyle} />
                }
            })}
        </Parallax>
    )
}

interface SmallLightColumnPropTypes {
    verticalItem: LightColumnItem
    positionStyle: any
}

const LightColumnItem = ({
    verticalItem,
    positionStyle
}: SmallLightColumnPropTypes) => {

    return (
        <div className="light-column" style={positionStyle}>
            {Array.apply(0, Array(verticalItem.count)).map((item, i) => {
                return (
                    <div key={i} className={`light-item ${verticalItem.colors[i]}`}></div>
                )
            })}
        </div>
    )
}

interface CodeTextItemPropTypes {
    verticalItem: CodeTextItem
    positionStyle: any
}

const CodeTextItem = ({
    verticalItem,
    positionStyle
}: CodeTextItemPropTypes) => {
    return (
        <div className={`code-text ${verticalItem.colors[0]}`} style={positionStyle}><span>{verticalItem.text}</span></div>
    )
}

export default SideLightsBar