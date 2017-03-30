/**
 * データキー
 */
const KEY_ID = "id";
const KEY_NAME = "name";
const KEY_PHONETIC = "phonetic";
const KEY_DISPATCH = "dispatch";
const KEY_POSITION = "position";
const KEY_MAIL = "mail";
const KEY_PHN = "phone";
const KEY_BIRTH = "birth";
const KEY_FIELD = "field";
const KEY_PERSONAL = "personal";

/**
 * 分野
 */
const field = {
    M:"0",
    E:"1",
    S:"2",
    C:"3",
    O:"4"
};

const position = {
    MGR:"0",
    CHF:"1",
    GL:"2",
    TM:"3",
    STM:"4",
    BS:"5",
    S:"6"
};

/**
 * 出身地
 */
const birth_place = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島",
    "沖縄県"
];

var TEST_DATA = {
                 "0000001":{KEY_ID:"0000001",KEY_NAME:"川島永嗣",KEY_PHONETIC:"あああああ",KEY_POSITION:position.MGR,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"0",KEY_FIELD:field.M},
                 "0000002":{KEY_ID:"0000002",KEY_NAME:"西川周作",KEY_PHONETIC:"いいいいい",KEY_POSITION:position.CHF,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"2",KEY_FIELD:field.C},
                 "0000003":{KEY_ID:"0000003",KEY_NAME:"林彰洋",KEY_PHONETIC:"ううううう",KEY_POSITION:position.GL,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"4",KEY_FIELD:field.E},
                 "0000004":{KEY_ID:"0000004",KEY_NAME:"長友佑都",KEY_PHONETIC:"えええええ",KEY_POSITION:position.TM,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"6",KEY_FIELD:field.O},
                 "0000005":{KEY_ID:"0000005",KEY_NAME:"槙野智章",KEY_PHONETIC:"おおおおお",KEY_POSITION:position.STM,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"8",KEY_FIELD:field.S},
                 "0000006":{KEY_ID:"0000006",KEY_NAME:"森重真人",KEY_PHONETIC:"かかかかか",KEY_POSITION:position.S,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"10",KEY_FIELD:field.C},
                 "0000007":{KEY_ID:"0000007",KEY_NAME:"吉田麻也",KEY_PHONETIC:"ききききき",KEY_POSITION:position.S,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"12",KEY_FIELD:field.E},
                 "0000008":{KEY_ID:"0000008",KEY_NAME:"酒井宏樹",KEY_PHONETIC:"くくくくく",KEY_POSITION:position.S,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"14",KEY_FIELD:field.M},
                 "0000009":{KEY_ID:"0000009",KEY_NAME:"酒井高徳",KEY_PHONETIC:"けけけけけ",KEY_POSITION:position.S,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"16",KEY_FIELD:field.O},
                 "0000010":{KEY_ID:"0000010",KEY_NAME:"昌子源",KEY_PHONETIC:"ここここここ",KEY_POSITION:position.BS,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"18",KEY_FIELD:field.S},
                 "0000011":{KEY_ID:"0000011",KEY_NAME:"植田直通",KEY_PHONETIC:"さささささ",KEY_POSITION:position.S,KEY_MAIL:"aaaa@alpsgiken.co.jp",KEY_PHN:"000-0000-0000",KEY_BIRTH:"20",KEY_FIELD:field.C}
                 };

/**
 * 社員情報取得メソッド
 */
function getEmployeeData() {
    return TEST_DATA;
}
