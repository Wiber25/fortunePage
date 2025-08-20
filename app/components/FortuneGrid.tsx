import FortuneItem from "./FortuneItem";

interface FortuneGridProps {
    name: string;
    data: {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        fortune: [];
    };
}

export default function FortuneGrid({ name, data }: FortuneGridProps) {
    return (
        <div className="fortuneGrid">
            <div className="fortuneGridHeader">
                <div className="fortuneGridHeaderTitle">{name}님의 사주</div>
                <div className="fortuneGridHeaderDate">{data.year}년 {data.month}월{data.day}일 {data.hour}:{data.minute}</div>
            </div>
            <table className="fortuneGridTable">
                <thead>
                    <tr>
                        <th>　</th>
                        <th>時</th>
                        <th>日</th>
                        <th>月</th>
                        <th>年</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>十星<div className="fortuneSubTh">(십성)</div></th>
                        <td>傷官<div className="fortuneSubTd">(상관)</div></td>
                        <td>比肩<div className="fortuneSubTd">(비견)</div></td>
                        <td>傷官<div className="fortuneSubTd">(상관)</div></td>
                        <td>傷官<div className="fortuneSubTd">(상관)</div></td>
                    </tr>
                    <tr className="fortuneGridRowBorderGray">
                        <th>天干<div className="fortuneSubTh">(천간)</div></th>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陽水" nameKan="壬" nameKo="임" name="im" /></div></td>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陰火" nameKan="丁" nameKo="정" name="jung" /></div></td>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陰水" nameKan="癸" nameKo="계" name="gye" /></div></td>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陰水" nameKan="癸" nameKo="계" name="gye" /></div></td>
                    </tr>
                    <tr>
                        <th>地支<div className="fortuneSubTh">(지지)</div></th>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陽木" nameKan="寅" nameKo="인" name="in" /></div></td>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陰火" nameKan="巳" nameKo="사" name="sa" /></div></td>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陰水" nameKan="亥" nameKo="해" name="hae" /></div></td>
                        <td><div className="fortuneSubTdItem"><FortuneItem subName="陰金" nameKan="酉" nameKo="유" name="yu" /></div></td>
                    </tr>
                    <tr>
                        <th>十星<div className="fortuneSubTh">(십성)</div></th>
                        <td><div className="fortuneSubTdItem">比肩<div className="fortuneSubTd">(비견)</div></div></td>
                        <td><div className="fortuneSubTdItem">劫財<div className="fortuneSubTd">(겁재)</div></div></td>
                        <td><div className="fortuneSubTdItem">食神<div className="fortuneSubTd">(식신)</div></div></td>
                        <td><div className="fortuneSubTdItem">偏財<div className="fortuneSubTd">(편재)</div></div></td>
                    </tr>
                    <tr>
                        <th>十二運星<div className="fortuneSubTh">(십이운성)</div></th>
                        <td><div className="fortuneSubTdItem">死<div className="fortuneSubTd">(사)</div></div></td>
                        <td><div className="fortuneSubTdItem">帝旺<div className="fortuneSubTd">(제왕)</div></div></td>
                        <td><div className="fortuneSubTdItem">胎<div className="fortuneSubTd">(태)</div></div></td>
                        <td><div className="fortuneSubTdItem">長生<div className="fortuneSubTd">(장생)</div></div></td>
                    </tr>
                    <tr>
                        <th>十二神殺<div className="fortuneSubTh">(십이신살)</div></th>
                        <td><div className="fortuneSubTdItem">死<div className="fortuneSubTd">(겁살)</div></div></td>
                        <td><div className="fortuneSubTdItem">帝旺<div className="fortuneSubTd">(지살)</div></div></td>
                        <td><div className="fortuneSubTdItem">胎<div className="fortuneSubTd">(장성살)</div></div></td>
                        <td><div className="fortuneSubTdItem">長生<div className="fortuneSubTd">(장생)</div></div></td>
                    </tr>
                    <tr>
                        <th>貴人<div className="fortuneSubTh">(귀인)</div></th>
                        <td><div className="fortuneSubTdItem"><div className="fortuneSubTd">(없음)</div></div></td>
                        <td><div className="fortuneSubTdItem"><div className="fortuneSubTd">(없음)</div></div></td>
                        <td><div className="fortuneSubTdItem">天乙<div className="fortuneSubTd">(천을귀인)</div></div></td>
                        <td>
                            <div className="fortuneSubTdItem">天乙<div className="fortuneSubTd">(천을귀인)</div></div>
                            <div className="fortuneSubTdItem">太極<div className="fortuneSubTd">(태극귀인)</div></div>
                            <div className="fortuneSubTdItem">文昌<div className="fortuneSubTd">(문창귀인)</div></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
