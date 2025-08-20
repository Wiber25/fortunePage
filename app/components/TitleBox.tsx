interface TitleBoxProps {
    title: string;
    subTitle: string;
}

export default function TitleBox({ title, subTitle }: TitleBoxProps) {
    return (
        <div className="titleBox">
            <div className="titleBoxBackground" />
            <div className="titleBoxTitle">{title}</div>
            <div className="titleBoxSeparator" />
            <div className="titleBoxSubTitle">{subTitle}</div>
            <div className="titleBoxCharacter" />
            <div className="titleBoxCharacterShadow" />
            <div className="titleBoxCharacterShadowBack" />
        </div>
    );
}
