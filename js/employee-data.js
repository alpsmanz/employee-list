/**
 * データキー
 */
const colum = {
    ID:"id",                // 社員番号
    NAME:"name",            // 名前
    PHONETIC:"phonetic",    // ふりがな
    WORK:"working",    　　　// 稼働先
    POSITION:"position",    // 役職
    MAIL:"mail",            // メールアドレス
    PHN:"phone",            // 電話番号
    BIRTH:"birth",          // 誕生日
    FIELD:"field",          // 分野
    PHOTO:"photo"           // 写真

};

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

/**
 * 役職
 */
const position = {
    MGR:"0",    // 部長
    CHF:"1",    // 所長
    GL:"2",     // 課長
    TM:"3",     // 技術マネージャ
    STM:"4",    // サブ技術マネージャ
    BS:"5",     // ブリッジスタッフ
    S:"6"       // 社員
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
                 "0000001":{"id":"0000001","name":"川島永嗣","phonetic":"あああああ","position":position.MGR,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"0","field":field.M},
                 "0000002":{"id":"0000002","name":"西川周作","phonetic":"いいいいい","position":position.CHF,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"2","field":field.C},
                 "0000003":{"id":"0000003","name":"林彰洋","phonetic":"ううううう","position":position.GL,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"4","field":field.E},
                 "0000004":{"id":"0000004","name":"長友佑都","phonetic":"えええええ","position":position.TM,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"6","field":field.O},
                 "0000005":{"id":"0000005","name":"槙野智章","phonetic":"おおおおお","position":position.STM,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"8","field":field.S},
                 "0000006":{"id":"0000006","name":"森重真人","phonetic":"かかかかか","position":position.S,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"10","field":field.C},
                 "0000007":{"id":"0000007","name":"吉田麻也","phonetic":"ききききき","position":position.S,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"12","field":field.E},
                 "0000008":{"id":"0000008","name":"酒井宏樹","phonetic":"くくくくく","position":position.S,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"14","field":field.M},
                 "0000009":{"id":"0000009","name":"酒井高徳","phonetic":"けけけけけ","position":position.S,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"16","field":field.O},
                 "0000010":{"id":"0000010","name":"昌子源","phonetic":"ここここここ","position":position.BS,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"18","field":field.S},
                 "0000011":{"id":"0000011","name":"植田直通","phonetic":"さささささ","position":position.S,mail:"aaaa@alpsgiken.co.jp",phone:"000-0000-0000","birth":"20","field":field.C}
                 };

/**
 * 社員情報取得メソッド
 */
function getEmployeeData() {
    return TEST_DATA;
}
