import { PillarContent } from "@/components/blocks/home"
import DialogWrap, { DialogHeaderStyle } from "../_shared/DialogWrap.component"

interface PropTypes {
    data: PillarContent
}

const PillarIntro = ({
    data
}: PropTypes) => {
    return (
        <div className="pillar-intro">
            <DialogWrap content={data.dialogContent} wrapStyle={{
                headerStyle: DialogHeaderStyle.cautionDiagonal,
                headerTitle: data.dialogHeaderText
            }} />
        </div>
    )
}

export default PillarIntro