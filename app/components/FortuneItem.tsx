interface FortuneItemProps {
    name: string;
    nameKo: string;
    nameKan: string;
    subName: string;
}

export default function FortuneItem({ name, nameKo, nameKan, subName }: FortuneItemProps) {
    return (
        <div className={"fortuneItem " + name}>
            <div className="fortuneItemNameKo">{nameKo}</div>
            <div className="fortuneItemNameKan">{nameKan}</div>
            <div className="fortuneItemSubName">{subName}</div>
        </div>
    );
}
